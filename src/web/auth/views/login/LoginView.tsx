import {Component} from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import './LoginView.scss';
import ApiSDK from "../../../../api/ApiSDK";
import SessionStorage from "../../../../utils/storage/UserStorage";
import {Alert, Button, CloseButton} from "react-bootstrap";
import MetamaskButton from "../../components/MetamaskButton";
import Web3SDK from "../../../../blockchain/Web3SDK";

interface LoginViewProperties extends RouteComponentProps {
}

type LoginViewState = {
    submitBusy: boolean,
    email: string,
    password: string,
    error: string | null
}

class LoginView extends Component<LoginViewProperties, LoginViewState> {

    constructor(props: LoginViewProperties) {
        super(props)
        this.state = {
            submitBusy: false,
            email: '',
            password: '',
            error: null
        }
        this.login = this.login.bind(this)
        this.loginWithMetamask = this.loginWithMetamask.bind(this)
        this.goToMain = this.goToMain.bind(this)
        this.handleSubmitLogin = this.handleSubmitLogin.bind(this)
        this.handleSubmitLoginWithMetamask = this.handleSubmitLoginWithMetamask.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }

    private static inputsAreValid(email: string, password: string): boolean {
        return email != '' && password != ''
    }

    private login(email: string, password: string) {
        if (!LoginView.inputsAreValid(email, password)) {
            // TODO detailed errors per fields
            this.setState({error: "Please correct invalid fields."})
            return
        }
        this.setState({submitBusy: true, error: null})
        ApiSDK.auth.login({email: email, password: password}).then(r => {
            this.setState({submitBusy: false})
            SessionStorage.storeSession(r.token)
            this.props.history.push('/home')
        }, e => {
            this.setState({submitBusy: false, error: e.error})
        })
    }

    private loginWithMetamask(publicAddress: string, signature: string) {
        this.setState({submitBusy: true, error: null})
        ApiSDK.auth.quickLogin.ethLogin({publicAddress: publicAddress, signature: signature}).then(r => {
            this.setState({submitBusy: false})
            SessionStorage.storeSession(r.token)
            this.props.history.push('/home')
        }, e => {
            this.setState({submitBusy: false, error: e.error})
        })
    }

    handleSubmitLogin(e: any) {
        e.preventDefault();
        this.login(this.state.email, this.state.password)
    }

    handleSubmitLoginWithMetamask() {
        const publicAddress = Web3SDK.getDefaultAccount()
        if (publicAddress == null) {
            this.setState({error: "Select an account on your Metamask."})
            return
        }
        ApiSDK.auth.quickLogin.ethGetNonce({publicAddress: publicAddress}).then(r => {
            Web3SDK.sign(publicAddress, r.nonce).then(signature => {
                console.log('signature:', signature)
                this.loginWithMetamask(publicAddress, signature)
            }, e => {
                this.setState({submitBusy: false, error: e.error})
            })
        }, e => {
            this.setState({submitBusy: false, error: e.error})
        })
    }

    handleEmailChange(e: any) {
        this.setState({email: e.target.value})
    }

    handlePasswordChange(e: any) {
        this.setState({password: e.target.value})
    }

    goToMain(e: any) {
        e.preventDefault();
        this.props.history.push('/')
    }

    render() {
        return <div className="content login">
            <div className="wrapper">
                <div className="exit-btn">
                    <CloseButton onClick={this.goToMain}/>
                </div>
                <form onSubmit={this.handleSubmitLogin}>
                    <h3>Sign In</h3>
                    {this.state.error != null && <Alert variant={'danger'}>{this.state.error}</Alert>}
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" value={this.state.email} onChange={this.handleEmailChange}
                               className="form-control" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" value={this.state.password} onChange={this.handlePasswordChange}
                               className="form-control" placeholder="Enter password"/>
                    </div>
                    <Button type="submit" className="btn btn-primary btn-block" disabled={this.state.submitBusy}>
                        {this.state.submitBusy &&
                            <i className="fa fa-refresh fa-spin" style={{marginRight: "5px"}}/>}
                        {this.state.submitBusy && <span>Logging-in..</span>}
                        {!this.state.submitBusy && <span>Submit</span>}
                    </Button>
                    <p className="forgot-password text-right">
                        Forgot <a href="/#">password?</a>
                    </p>
                </form>
                <div className="form-metamask">
                    <div><p className="separator"/></div>
                    <MetamaskButton text={"Login with Metamask"} callback={this.handleSubmitLoginWithMetamask}/>
                </div>
            </div>
        </div>
    }
}

export default withRouter(LoginView);
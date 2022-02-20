import {Component} from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {Alert, Button, CloseButton} from "react-bootstrap";
import './SignupView.scss';
import ApiSDK from "../../../../api/ApiSDK";
import SessionStorage from "../../../../utils/storage/UserStorage";

interface SignUpViewProperties extends RouteComponentProps {
}

type SignUpViewState = {
    submitBusy: boolean,
    email: string,
    username: string,
    password: string,
    error: string | null
}

class SignUpView extends Component<SignUpViewProperties, SignUpViewState> {

    constructor(props: SignUpViewProperties) {
        super(props)
        this.state = {
            submitBusy: false,
            email: '',
            username: '',
            password: '',
            error: null
        }
        this.signup = this.signup.bind(this)
        this.goToLogin = this.goToLogin.bind(this)
        this.goToMain = this.goToMain.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }

    signup = (email: string, username: string, password: string) => {
        // TODO do form error checks
        this.setState({submitBusy: true, error: null})
        ApiSDK.auth.signup({email: email, username: username, password: password}).then(_ => {
            ApiSDK.auth.login({email: email, password: password}).then(response => {
                this.setState({submitBusy: false})
                SessionStorage.storeSession(response.token)
                this.props.history.push('/home')
            }, e => {
                console.log('error', e)
                this.setState({submitBusy: false, error: e.error})
            })
        }, e => {
            console.log('error', e)
            this.setState({submitBusy: false, error: e.error})
        })
    }

    handleSubmit = async (e: any) => {
        e.preventDefault();
        this.signup(this.state.email, this.state.username, this.state.password)
    }

    handleEmailChange = async (e: any) => {
        this.setState({email: e.target.value})
    }

    handleUsernameChange = async (e: any) => {
        this.setState({username: e.target.value})
    }

    handlePasswordChange = async (e: any) => {
        this.setState({password: e.target.value})
    }

    goToLogin = (e: any) => {
        e.preventDefault();
        this.props.history.push('/login')
    }

    goToMain = (e: any) => {
        e.preventDefault();
        this.props.history.push('/')
    }


    render() {
        return <div className="content signup">
            <div className="exit-btn">
                <CloseButton onClick={this.goToMain} />
            </div>
            <div className="wrapper">
                <form onSubmit={this.handleSubmit}>
                    <h3>Register</h3>
                    {this.state.error != null && <Alert variant={'danger'}>{this.state.error}</Alert>}
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" value={this.state.email} onChange={this.handleEmailChange} className="form-control" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" value={this.state.username} onChange={this.handleUsernameChange} className="form-control" placeholder="Enter username"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" value={this.state.password} onChange={this.handlePasswordChange} className="form-control" placeholder="Enter password"/>
                    </div>
                    <Button type="submit" className="btn btn-primary btn-block" disabled={this.state.submitBusy}>
                        {this.state.submitBusy && <i className="fa fa-refresh fa-spin" style={{ marginRight: "5px" }}/>}
                        {this.state.submitBusy && <span>Logging-in..</span>}
                        {!this.state.submitBusy && <span>Submit</span>}
                    </Button>
                    <p className="is-registered text-right">
                        Already registered <a href="#" onClick={this.goToLogin}>sign in?</a>
                    </p>
                </form>
            </div>
        </div>
    }
}

export default withRouter(SignUpView);
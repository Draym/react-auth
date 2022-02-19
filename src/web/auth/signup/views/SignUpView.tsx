import {Component} from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {Button} from "react-bootstrap";
import ApiSDK from "../../../../api/ApiSDK";
import SessionStorage from "../../../../utils/storage/UserStorage";

interface SignUpViewProperties extends RouteComponentProps {
}

type SignUpViewState = {}

class SignUpView extends Component<SignUpViewProperties, SignUpViewState> {

    constructor(props: SignUpViewProperties) {
        super(props)
        this.signup = this.signup.bind(this)
    }

    signup = (email: string, username: string, password: string) => {
        // TODO do form error checks
        ApiSDK.auth.signup({email: email, username: username, password: password}).then(_ => {
            ApiSDK.auth.login({email: email, password: password}).then(response => {
                SessionStorage.storeSession(response.token)
                this.props.history.push('/home')
            })
        })
    }

    // TODO signup form
    render() {
        return <div>
            <div className="container-fluid">
                <h2>register your account</h2>
                <Button variant="primary" onClick={() => this.signup('kevin@gmail.com', 'kevin', '')}>
                    Signup
                </Button>
            </div>
        </div>
    }
}

export default withRouter(SignUpView);
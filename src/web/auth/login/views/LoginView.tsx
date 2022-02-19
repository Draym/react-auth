import {Component} from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {Button} from "react-bootstrap";
import ApiSDK from "../../../../api/ApiSDK";
import SessionStorage from "../../../../utils/storage/UserStorage";

interface LoginViewProperties extends RouteComponentProps {
}

type LoginViewState = {}

class LoginView extends Component<LoginViewProperties, LoginViewState> {

    constructor(props: LoginViewProperties) {
        super(props)
        this.login = this.login.bind(this)
    }

    login = (email: string, password: string) => {
        // TODO do form error checks
        ApiSDK.auth.login({email: email, password: password}).then(response => {
            SessionStorage.storeSession(response.token)
            this.props.history.push('/home')
        })
    }

    // TODO login form
    render() {
        return <div>
            <div className="container-fluid">
                <h2>enter your login</h2>
                <Button variant="primary" onClick={() => this.login('kevin@gmail.com', '')}>
                    Login
                </Button>
            </div>
        </div>
    }
}

export default withRouter(LoginView);
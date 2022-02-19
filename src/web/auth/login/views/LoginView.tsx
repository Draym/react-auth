import {Component} from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {Button} from "react-bootstrap";

interface LoginViewProperties extends RouteComponentProps {}

type LoginViewState = {}

class LoginView extends Component<LoginViewProperties, LoginViewState> {

    constructor(props: LoginViewProperties) {
        super(props)
        this.login = this.login.bind(this)
    }

    login = () => {
        //TODO do login
        //TODO if success go to Home
        this.props.history.push('/home')
    }

    render() {
        return <div>
            <div className="container-fluid">
                <h2>enter your login</h2>
                <Button variant="primary" onClick={this.login}>
                    Login
                </Button>
            </div>
        </div>
    }
}
export default withRouter(LoginView);
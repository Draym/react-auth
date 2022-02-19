import {Component} from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {Button} from "react-bootstrap";

interface SignUpViewProperties extends RouteComponentProps {
}

type SignUpViewState = {}

class SignUpView extends Component<SignUpViewProperties, SignUpViewState> {

    constructor(props: SignUpViewProperties) {
        super(props)
        this.signup = this.signup.bind(this)
    }

    signup = () => {
        //TODO do signup
        //TODO if success go to Home
        this.props.history.push('/home')
    }

    render() {
        return <div>
            <div className="container-fluid">
                <h2>register your account</h2>
                <Button variant="primary" onClick={this.signup}>
                    Signup
                </Button>
            </div>
        </div>
    }
}

export default withRouter(SignUpView);
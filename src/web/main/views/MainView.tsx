import {Component} from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {Button} from "react-bootstrap";

import MainLoading from "./loading/MainLoading";
import MainNavbar from "./navbar/MainNavbar";
import MainFooter from "./footer/MainFooter";

interface MainViewProperties extends RouteComponentProps {
}

type MainViewState = {
    loading: boolean
}

class MainView extends Component<MainViewProperties, MainViewState> {
    constructor(props: MainViewProperties) {
        super(props)
        this.state = {
            loading: true
        }
        this.login = this.login.bind(this)
        this.signup = this.signup.bind(this)
    }

    componentDidMount() {
        this.setState({loading: false})
    }

    login = () => {
        this.props.history.push('/login')
    }

    signup = () => {
        this.props.history.push('/signup')
    }

    render() {
        if (this.state.loading) {
            return <MainLoading/>
        } else {
            return <div className="content">
                <MainNavbar/>
                <div className="container-fluid">
                    <h2 className="text-center mt-4">Welcome to this awesome website</h2>
                    <div className="row">
                        <div className="col-md-12 mt-4 text-center">
                            <Button className="me-3" variant="success" onClick={this.login}>
                                Login
                            </Button>
                            <Button variant="info" onClick={this.signup}>
                                Signup
                            </Button>
                        </div>
                    </div>
                </div>
                <MainFooter/>
            </div>
        }
    }
}

export default withRouter(MainView);
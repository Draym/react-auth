import {Component} from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {Button} from "react-bootstrap";

import HomeLoading from "./loading/HomeLoading";
import HomeNavbar from "./navbar/HomeNavbar";
import HomeFooter from "./footer/HomeFooter";

interface HomeViewProperties extends RouteComponentProps {
}

type HomeViewState = {
    loading: boolean
}

class HomeView extends Component<HomeViewProperties, HomeViewState> {
    constructor(props: HomeViewProperties) {
        super(props)
        this.state = {
            loading: true
        }
        this.logout = this.logout.bind(this)
    }

    componentDidMount() {
        this.setState({loading: false})
    }

    logout = () => {
        //TODO logout
        this.props.history.push('/')
    }

    render() {
        if (this.state.loading) {
            return <HomeLoading/>
        } else {
            return <div className="App">
                <HomeNavbar/>
                <div className="container-fluid mt-5">
                    <h2>Welcome to your personal home</h2>
                    <Button variant="secondary" onClick={this.logout}>
                        Logout
                    </Button>
                </div>
                <HomeFooter/>
            </div>
        }
    }
}

export default withRouter(HomeView);
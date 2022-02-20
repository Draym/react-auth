import {Component} from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {Button} from "react-bootstrap";

import HomeLoading from "./loading/HomeLoading";
import HomeNavbar from "./navbar/HomeNavbar";
import HomeFooter from "./footer/HomeFooter";
import SessionStorage from "../../../utils/storage/UserStorage";
import ApiSDK from "../../../api/ApiSDK";

interface HomeViewProperties extends RouteComponentProps {
}

type HomeViewState = {
    loading: boolean,
    user: { id: string, email: string, username: string } | null
}

class HomeView extends Component<HomeViewProperties, HomeViewState> {
    constructor(props: HomeViewProperties) {
        super(props)
        this.state = {
            loading: true,
            user: null
        }
        this.logout = this.logout.bind(this)
    }

    componentDidMount() {
        ApiSDK.user.get().then(r => {
            this.setState({
                loading: false,
                user: {
                    id: r.id, email: r.email, username: r.username
                }
            })
        })
    }

    logout = () => {
        SessionStorage.clearSession()
        this.props.history.push('/')
    }

    render() {
        if (this.state.loading || this.state.user == null) {
            return <HomeLoading/>
        } else {
            return <div className="content">
                <HomeNavbar/>
                <div className="container-fluid mt-5">
                    <h2>Welcome to your personal home {this.state.user.username}</h2>
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
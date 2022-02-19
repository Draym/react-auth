import {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type HomeNavbarProperties = {}

type HomeNavbarState = {}

export default class HomeNavbar extends Component<HomeNavbarProperties, HomeNavbarState> {

    render() {
        return <nav className="navbar flex-md-nowrap p-0 shadow">
            <span><FontAwesomeIcon icon={['fas', "home"]}/> Home</span>
        </nav>
    }
}
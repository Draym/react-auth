import {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type MainNavbarProperties = {}

type MainNavbarState = {}

export default class MainNavbar extends Component<MainNavbarProperties, MainNavbarState> {

    render() {
        return <nav className="navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow">
            <span><FontAwesomeIcon icon={['fas', "globe"]}/> Hello world!</span>
        </nav>
    }
}
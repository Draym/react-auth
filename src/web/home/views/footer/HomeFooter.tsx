import {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type HomeFooterProperties = {}

type HomeFooterState = {}

export default class HomeFooter extends Component<HomeFooterProperties, HomeFooterState> {

    render() {
        return <footer className="text-center">
            <div className="footer-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <span className="ml-auto"><a href="https://github.com/Draym" target="https://github.com/Draym"><FontAwesomeIcon icon={['fab', "github"]}/> Github</a> &copy; 2020. kevin.andres@epitech.eu</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    }
}
import {Component} from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {Button} from "react-bootstrap";

interface Page404ViewProperties extends RouteComponentProps {
}

type Page404ViewState = {
}

class Page404View extends Component<Page404ViewProperties, Page404ViewState> {
    constructor(props: Page404ViewProperties) {
        super(props)
        this.backToMain = this.backToMain.bind(this)
    }

    backToMain = () => {
        this.props.history.push('/')
    }

    render() {
        return <div className="App">
            <div className="container-fluid">
                <h2>oups you are lost</h2>
                <Button variant="info" onClick={this.backToMain}>
                    Bring me back
                </Button>
            </div>
        </div>
    }
}

export default withRouter(Page404View);
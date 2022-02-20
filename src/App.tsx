import './App.scss';
import {Component, Suspense} from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

import {library} from '@fortawesome/fontawesome-svg-core'
import {faGlobe, faHome} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import routes from "./routes/routes";

library.add(faGithub, faHome, faGlobe);

const routerBaseName = process.env.PUBLIC_URL;

interface AppProperties {
}

interface AppState {
}

export default class App extends Component<AppProperties, AppState> {

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;

    render() {
        return <div className="App">
            <BrowserRouter basename={routerBaseName}>
                <Suspense fallback={this.loading()}>
                    <Switch>
                        {routes.map((route, idx) => {
                            return route.component ? (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    render={props => (
                                        (route.restrictedBy == null || route.restrictedBy.validate() ?
                                            <route.component {...props} /> :
                                            <Redirect to={{
                                                pathname: route.restrictedBy.redirectOnFailure,
                                                state: {from: props.location}
                                            }}/>)
                                    )}/>
                            ) : null;
                        })}
                        <Redirect path="*" to={'/404'}/>
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </div>
    }
}
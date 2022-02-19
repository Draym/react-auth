import './App.scss';
import {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import MainView from "./web/main/views/MainView";
import HomeView from "./web/home/views/HomeView";
import SignInView from "./web/auth/login/views/LoginView";
import SignUpView from "./web/auth/signup/views/SignUpView";

import {library} from '@fortawesome/fontawesome-svg-core'
import {faHome, faGlobe} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

library.add(faGithub, faHome, faGlobe);

const routerBaseName = process.env.PUBLIC_URL;

interface AppProperties {
}

interface AppState {
}

export default class App extends Component<AppProperties, AppState> {

  render() {
    return <div>
      <main role="main">
        <BrowserRouter basename={routerBaseName}>
          <Switch>
            <Route path={"/signup"}>
              <SignUpView/>
            </Route>
            <Route path={"/login"}>
              <SignInView/>
            </Route>
            <Route path={"/home"}>
              <HomeView/>
            </Route>
            <Route path={"/"}>
              <MainView/>
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  }
}
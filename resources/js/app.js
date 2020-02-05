window.__ = function(name) {

    let translation, translationNotFound = true

    try {
        translation = name.split('.').reduce((t, i) => t[i] || null, window._translations.php)
        if (translation) {
            translationNotFound = false
        }
    } catch (e) {
        translation = name
    }

    if (translationNotFound) {
        translation = window._translations.json[name]
            ? window._translations.json[name]
            : name
    }

    return translation
    
}

import React, { Suspense, lazy } from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import ReactDOM from "react-dom";
import Progress from './components/Layouts/Progress';
import Personal from "./components/Personal";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";

const RegisterPage = lazy(() => import("./components/RegisterPage"));
const PasswordResetPage = lazy(() => import("./components/PasswordResetPage"));
const PasswordConfirmPage = lazy(() => import("./components/PasswordConfirmPage"));
const EmailVerifyPage = lazy(() => import("./components/EmailVerifyPage"));

const AppUnlogged = () => (
    <Router>
        <Suspense fallback={<Progress />}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/register" component={RegisterPage} />
                <Route exact path="/password/reset" component={PasswordResetPage} />
                <Route exact path="/password/confirm" component={PasswordConfirmPage} />
                <Route exact path="/email/verify" component={EmailVerifyPage} />
            </Switch>
        </Suspense>
    </Router>
);
const AppLogged = () => (
    <Router>
        <Suspense fallback={<Progress />}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/personal" component={Personal}></Route>
            </Switch>
        </Suspense>
    </Router>
);

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ruRU } from '@material-ui/core/locale';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#000000' },
  },
}, ruRU);

axios
    .get(
        "/auth"
    )
    .then(res => {
        if (!!res.data.user) {
            window.user = res.data.user;
            window.api_token = res.data.api_token;
            ReactDOM.render(<ThemeProvider theme={theme}><AppLogged /></ThemeProvider>, document.getElementById("app"));
        } else {
            ReactDOM.render(<ThemeProvider theme={theme}><AppUnlogged /></ThemeProvider>, document.getElementById("app"));
        }
    })
    .catch(err => {
        if (err.response && err.response.data && err.response.data.errors) { }
    });

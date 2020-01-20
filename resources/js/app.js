import React, { Suspense, lazy } from "react";
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
import Progress from './components/Progress';

const Home = lazy(() => import("./routes/Home"));
const RegisterPage = lazy(() => import("./routes/RegisterPage"));
const PasswordResetPage = lazy(() => import("./routes/PasswordResetPage"));
const PasswordConfirmPage = lazy(() => import("./routes/PasswordConfirmPage"));
const EmailVerifyPage = lazy(() => import("./routes/EmailVerifyPage"));
const LoginPage = lazy(() => import("./routes/LoginPage"));
const Personal = lazy(() => import("./routes/Personal"));

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            !!window.user ? <Component {...props} /> : <Redirect to="/login" />
        }
    />
);


const App = () => (
    <Router>
        <Suspense fallback={<Progress />}>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/register">
                    <RegisterPage />
                </Route>
                <Route exact path="/password/reset">
                    <PasswordResetPage />
                </Route>
                <Route exact path="/password/confirm">
                    <PasswordConfirmPage />
                </Route>
                <Route exact path="/email/verify">
                    <EmailVerifyPage />
                </Route>
                <PrivateRoute path="/personal">
                    <Personal />
                </PrivateRoute>
            </Switch>
        </Suspense>
    </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));

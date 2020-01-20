import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Suspense, lazy } from "react";

const Home = lazy(() => import("./routes/Home"));
const SignInSide = lazy(() => import("./routes/LoginPage"));

const App = () => (
    <Router>
        <Suspense fallback={<div>Загрузка...</div>}>
            <Switch>
                <Route exact path="/login" component={Home} />
                <Route exact path="/register" component={SignInSide} />
                {/* 
                    $this->get('login', 'Auth\LoginController@showLoginForm')->name('login');
                    $this->post('login', 'Auth\LoginController@login');
                    $this->post('logout', 'Auth\LoginController@logout')->name('logout');
                    $this->get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
                    $this->post('register', 'Auth\RegisterController@register');
                    $this->get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
                    $this->post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
                    $this->get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
                    $this->post('password/reset', 'Auth\ResetPasswordController@reset')->name('password.update');
                    $this->get('password/confirm', 'Auth\ConfirmPasswordController@showConfirmForm')->name('password.confirm');
                    $this->post('password/confirm', 'Auth\ConfirmPasswordController@confirm');
                    $this->get('email/verify', 'Auth\VerificationController@show')->name('verification.notice');
                    $this->get('email/verify/{id}/{hash}', 'Auth\VerificationController@verify')->name('verification.verify');
                    $this->post('email/resend', 'Auth\VerificationController@resend')->name('verification.resend');
                */}
            </Switch>
        </Suspense>
    </Router>
);

import ReactDOM from "react-dom";
ReactDOM.render(<App />, document.getElementById("app"));

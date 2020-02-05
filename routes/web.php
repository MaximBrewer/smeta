<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use TCG\Voyager\Facades\Voyager;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'AppController@index')->name('index');
Route::get('/login', 'AppController@index')->name('login');
Route::get('/register', 'AppController@index')->name('register');
Route::get('/password/reset', 'AppController@index')->name('password_reset');
Route::get('/password/reset/{token}', 'AppController@index')->name('password_reset_token');
Route::get('/password/confirm', 'AppController@index')->name('password_reset_confirm');
Route::get('/email/verify', 'AppController@index')->name('email_verify');
Route::get('/email/verify/{id}/{hash}', 'AppController@index')->name('email_verify_id_hash');
Route::get('personal', 'AppController@index')->name('index');
Route::get('personal/{control}', 'AppController@index')->name('index');
Route::get('personal/{control}/{id}', 'AppController@index')->name('index');
Route::get('personal/{control}/{id}/{action}', 'AppController@index')->name('index');


Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');
Route::post('register', 'Auth\RegisterController@register');


Route::get('auth', function(){

    if (Auth::user()) {
            
        return [
            'user' => Auth::user(),
            'api_token' => Session::get('_api_token')
        ];
        
    }

});

/* 
    $this->get('login', 'Auth\LoginController@showLoginForm')->name('login');
    $this->get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
    $this->get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
    $this->post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
    $this->get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
    $this->post('password/reset', 'Auth\ResetPasswordController@reset')->name('password.update');
    $this->get('password/confirm', 'Auth\ConfirmPasswordController@showConfirmForm')->name('password.confirm');
    $this->post('password/confirm', 'Auth\ConfirmPasswordController@confirm');
    $this->get('email/verify', 'Auth\VerificationController@show')->name('verification.notice');
    $this->get('email/verify/{id}/{hash}', 'Auth\VerificationController@verify')->name('verification.verify');
    $this->post('email/resend', 'Auth\VerificationController@resend')->name('verification.resend');
*/

Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\Auction;
use App\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Laracasts\Utilities\JavaScript\JavaScriptFacade as JavaScript;
use Illuminate\Support\Str;

class AppController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        if (Auth::user()) {
            $token = Str::random(80);

            User::find(Auth::user()->id)->forceFill([
                'api_token' => hash('sha256', $token),
            ])->save();

            JavaScript::put([
                'user' => Auth::user(),
                'api_token' => $token
            ]);
            
        }

        JavaScript::put([
            'csrf_token' => csrf_token()
        ]);
        
        return view('app');
    }
}

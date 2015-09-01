<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
 *  See http://laravel.com/docs/5.1/routing
| $Id$
*/

Route::get('/', function () {
    return view('Hello World');
});

Route::get('users', function()
{
   $users = User::all();

    return View::make('users')->with('users', $users);
});

Route::get('user/{id}', function ($id) {
    return 'User '.$id;
});

// Default user
Route::get('user/{name?}', function ($name = 'demo') {
    return $name;
});

// constrain the format 
Route::get('user/{id}/{name}', function ($id, $name) {
    //
})->where(['id' => '[0-9]+', 'name' => '[a-z]+']);

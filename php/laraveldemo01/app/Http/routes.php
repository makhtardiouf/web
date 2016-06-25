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
  | $Id: routes.php, 50af58a93c18  makhtar $
 * use Closure to handle "routing" in small applications; 
 * and Controllers in large applications
 */


Route::get('/', 'PagesController@home');
// or with closure
/*
  Route::get('/', function () {
  return view('welcome');
  });
 */

// provides session state and CSRF protection to routes defined here
//// Route::group(['middleware' => ['web']], function () {

Route::get('/contact', 'PagesController@contact');

Route::get('users', function() {
    $users = User::all();

    return View::make('users')->with('users', $users);
});

Route::get('user/{id}', function ($id) {
    return 'User ' . $id;
});

// Default user
Route::get('user/{name?}', function ($name = 'demo user') {
    return $name;
});

// constrain the format 
Route::get('user/{id}/{name}', function ($id, $name) {
    //
})->where(['id' => '[0-9]+', 'name' => '[a-z]+']);
////});
// ... Route::post('', '');
Route::get('/about', 'PagesController@about');

Route::get('/testme', ['middleware' => 'testme', function() {

        echo "Testing then...";
    }]);

Route::resource('photo', 'PhotoController',
                ['except' => ['update', 'destroy']]);

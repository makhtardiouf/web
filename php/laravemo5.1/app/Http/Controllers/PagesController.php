<?php

// php artisan make:controller PagesController  --plain

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;

class PagesController extends Controller {

    public function home() {

      //  Cache::store('file')->put('HelloLara', 'test', rand(10, 100));
      //  $users = DB::select('select * from users where id = :id', ['id' => 1]);

        return view('welcome');
    }

    // defaults...

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index() {
        home();
    }

    /**
     * about page
     *
     * @return Response
     */
    public function about() {

        return view('about', ['info' => "Get back to it. Path: "]); //view()->getPath())]);
    }

    /**
     * contact page
     *
     * @param  Request  $request
     * @return Response
     */
    public function contact(Request $request) {
        
        return view('contact', ['data' => $request->ips()]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id) {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id) {
        //
    }

}

<?php
// php artisan make:controller PagesController  --plain

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class PagesController extends Controller
{
     public function home()
    {
        return view('welcome');
    }

    
    // Unneeded defaults...
    
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        home();
    }

    /**
     * about page
     *
     * @return Response
     */
    public function about()
    {
         return view('about');
    }

    /**
     * contact page
     *
     * @param  Request  $request
     * @return Response
     */
    public function contact(Request $request)
    {
        session_start();
        $_SESSION['CLIENT_IPS'] = $request->ips();
         return view('contact');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        //
    }

    
}

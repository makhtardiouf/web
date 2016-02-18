<?php

namespace App\Providers;

use DB;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //...
        
        // Share a piece of data with all views that are rendered by the app
        $globalData = rand(10, 500);
         view()->share('globalData', $globalData);
         
        // Test log DB events
        DB::listen(function($query) {
           // var_dump($query);
            // $query->bindings
            // $query->time
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}

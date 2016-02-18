<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

/**
 * View composers are callbacks or class methods that are called when a view is 
 * rendered. If you have data that you want to be bound to a view each time that view is rendered
 */
class ComposerServiceProvider extends ServiceProvider
{
    /**
     * Register bindings in the container.
     *
     * @return void
     */
    public function boot()
    {
        // Using class based composers...
        view()->composer(
            ['profile', 'about'], 'App\Http\ViewComposers\ProfileComposer'
        );

        // Using Closure based composers...
        view()->composer('dashboard', function ($view) {
            //
        });
    }

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}

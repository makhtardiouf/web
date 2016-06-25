<?php
// php artisan make:middleware TestmeMiddleware
// convenient mechanism for filtering HTTP requests entering your application: e.g. check authentication, csrf...

namespace App\Http\Middleware;

use Closure;

class TestmeMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $resp = $next($request);
        
        echo "Client IP: " . $request->ip();
        
        // pass the request deeper into the application 
        return $resp;
    }
}

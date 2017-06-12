<!Doctype html>
<html>
    <head>       
        <!-- Ref: http://learninglaravel.net/laravel5/building-our-first-website -->
        <title> @yield('title') </title>
        <link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet" type="text/css" >
        <!-- Bootstrap material design -->
        <link href="{{ asset('css/roboto.min.css') }}" rel="stylesheet" type="text/css" >
        <link href="{{ asset('css/material.min.css') }}" rel="stylesheet" type="text/css" >
        <link href="{{ asset('css/ripples.min.css') }}" rel="stylesheet" type="text/css" >
    </head>
    <body>
        <div class="container">
            @include('navbar')

            <h3> @yield('title')</h3>

            @yield('content')          
        </div>
        <script src="{{ asset('js/query-1.10.2.min.js') }}"></script>
        <script src="{{ asset('js/bootstrap.min.js') }}"></script>

        <script src="{{ asset('js/ripples.min.js') }}"></script>
        <script src="{{ asset('js/material.min.js') }}"></script>
        <script>
            $(document).ready(function () {
                // This command is used to initialize some elements 
                $.material.init();
            });
        </script>
    </body>
</html>

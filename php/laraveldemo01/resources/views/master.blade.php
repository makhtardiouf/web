<!Doctype html>
<html>
    <head>       
        <!-- Ref: http://learninglaravel.net/laravel5/building-our-first-website -->
        <title> @yield('title') </title>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css" rel="stylesheet">
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
        <script src="//code.jquery.com/jquery-1.10.2.min.js"></script>
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>

        <script src="/js/ripples.min.js"></script>
        <script src="/js/material.min.js"></script>
        <script>
            $(document).ready(function () {
                // This command is used to initialize some elements 
                $.material.init();
            });
        </script>
    </body>
</html>

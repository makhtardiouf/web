<!Doctype html>
<html>
    <head>       
        <title> @yield('title') </title>
        <link rel="stylesheet" href="{{ asset('/css/bootstrap.min.css') }}">
        <!-- Bootstrap material design -->
        <link rel="stylesheet" href="{{ asset('/css/roboto.min.css') }}">
        <link rel="stylesheet" href="{{ asset('/css/material.min.css') }}">
        <link rel="stylesheet" href="{{ asset('/css/ripples.min.css') }}">
         <script src="{{ asset('js/jquery-1.10.2.min.js') }}"></script>
        <script src="{{ asset('js/bootstrap.min.js') }}"></script>

        <script src="{{ asset('js/ripples.min.js') }}"></script>
        <script src="{{ asset('js/material.min.js') }}"></script>
        <script>
            $(document).ready(function () {
                // This command is used to initialize some elements
                $.material.init();
            });
        </script>
    </head>
    <body>
        <div class="container">
            @include('navbar')

            <h3> @yield('title')</h3>

            @yield('content')          
        </div>
       
    </body>
</html>

<!DOCTYPE html>
<!-- Makhtar Diouf $Id$ -->
<html>
    <head>
        <title> @yield('title') </title>
       <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css" rel="stylesheet">
        <!-- Bootstrap material design -->
        <link href="/css/roboto.min.css" rel="stylesheet">
        <link href="/css/material.min.css" rel="stylesheet">
        <link href="/css/ripples.min.css" rel="stylesheet">
    </head>
    <body>
        <div class="container">

            <h1> @yield('title')</h1>

            @include('navbar')

            @yield('content')

            <script src="//code.jquery.com/jquery-1.10.2.min.js"></script>
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>

            <script src="/js/ripples.min.js"></script>
            <script src="/js/material.min.js"></script>
            <script>
                $(document).ready(function () {
                    // This command is used to initialize some elements and make them work properly
                    $.material.init();
                });
            </script>

        </div>
    </body>
</html>

@extends('master')
@section('title', 'Contact us')

@section('content')
<div class="content">
    <?php
    foreach ($_SESSION['CLIENT_IPS'] as $key => $value) {
        echo "Client IP [$key]: " . $value . "<br>";
        //print_r($_SESSION['CLIENT_IPS']);
        // put your code here
    }
    ?>
</div>

@endsection

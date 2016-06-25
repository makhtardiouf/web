@extends('master')
@section('title', 'Contact us')

@section('content')
<div class="content">
  
    <?php
   // var_dump($data);
     foreach ($data as $key => $value) {
         echo "Client IP [$key]: " . $value . PHP_EOL;
   
    }
    ?>
</div>

@endsection

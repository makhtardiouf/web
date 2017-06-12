@extends('master')
@section('title', 'About Laravel')

<style>
    .title {
        font-size: 96px;
        text-align: center;
        display: inline-block;
    }
</style>

@section('content')
    <div class="title">About Laravel 5</div>
    <p>Tell me more about it:

@unless (Auth::check())
    you are not signed in.
@endunless
</p> 

<?php 
// Can use php echo or braces to have access to vars passed to the view
echo date("Y-m-d")."<br>"; 
echo "Glob data: $globalData <br>"; 
$data = "random data " . md5(rand(0,50));

// Braces give access to php functions too
?>
UNIX timestamp is: {{ time() }}

{{ $info or 'Default' }}  = Equals =
{{ isset($info) ? $info : 'Default' }}<br>

{{-- To escape from filtering through PHP's htmlentities function --}}
Hello, {!! $data !!}.<br>

@if (count($data) === 1)
    I have one record!
@elseif (count($data) > 1)
    I have multiple records!
@else
    I don't have any records!
@endif

The current value of "$i":
@for ($i = 0; $i < 10; $i++)
     {{ $i }},
@endfor

{{-- $users  = ( {{$users or array()}} ) --}}

{{--@foreach ($users as $user)
    <p>This is user {{ $user->id }}</p>
@endforeach--}}

@endsection


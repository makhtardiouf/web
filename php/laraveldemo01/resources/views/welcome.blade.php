@extends('master')
@section('title', 'Home')

@section('content')
<div class="content">
    <div class="title">Welcome to my Laravel demo app</div>
    
</div>

<div>
<blockquote>{{ Inspiring::quote() }}</blockquote>
</div>
@endsection
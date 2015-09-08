@extends('master')
@section('title', 'Welcome to Laravel')

@section('content')
<div class="content">
    <p>This is a Laravel demo app</p>
    
</div>

<p>
<blockquote>{{ Inspiring::quote() }}</blockquote>
</p>
@endsection

@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Dashboard</div>

                <div class="panel-body">
                    Welcome to my Laravel demo app
                    Laravel 5.4 お問い合わせフォーム
                </div>
            </div>
             <blockquote>{{ Inspiring::quote() }}</blockquote>
        </div>
    </div>
</div>
@endsection

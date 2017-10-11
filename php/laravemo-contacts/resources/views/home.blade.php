@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">お問い合わせフォーム</div>

                <div class="panel-body">                    
                    <p>以下のボタンをご利用ください</p>

                    <p><a href="/contacts/create" class="btn btn-primary">お問い合わせ</a></p>
                </div>
            </div>
             <blockquote>{{ Inspiring::quote() }}</blockquote>
        </div>
    </div>
</div>
@endsection

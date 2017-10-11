
@extends('layouts.app')

@section('content')

<h6>Create Contact</h6>

@if (count($errors) > 0)
    <div class="col-xs-12">
        <div class="btn btn-large" style="margin:10px;">
            @lang("Required fields"):
            @foreach ($errors->all() as $error)
                <span>{{ $error }} </span>
            @endforeach
        </div>
    </div>
@endif

<div class="row">
    <form action='contacts.store' name="contactForm" method="post">

    <div class="col-xs-6">
        <input name="name" type="text" required="true" class="validate" 
            value="{{ old('name', $contact->name) }}" placeholder="e.g. Tomo Ono">
        <label for="name">@lang('性')</label>
    </div>

    <div class="col-xs-6">
        <input name="surname" type="text" required="true" class="validate" value="{{ old('surname', $contact->surname) }}" >
        <label for="surname">@lang('名')</label>
    </div>

    <div class="col-xs-6">
        <input name="gender" type="text" required="true" class="validate" value="{{ old('gender', $contact->gender) }}">
        <label for="gender">@lang('性別')</label>
    </div>

    <div class="col-xs-6">
        <input name="birthday" type="text" required="true" class="validate" value="{{ old('birthday', $contact->birthday) }}" >
        <label for="birthday">@lang('生年月日')</label>
    </div>

    <div class="col-xs-6">
        <input name="phone" type="text" required="true" class="validate" value="{{ old('phone', $contact->phone) }}">
        <label for="phone">@lang('電話番号')</label>
    </div>

    <div class="col-xs-12">
        <textarea name="remarks" required="true" class="validate" value="{{ old('remarks', $contact->remarks) }}">
        </textarea>

        <label for="remarks">@lang('備考欄')</label>
    </div>

    <div class="col-xs-12">
        <button type="submit">保存</button>
    </div>

    </form>

</div>
@endsection

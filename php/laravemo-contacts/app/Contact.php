<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

// お問い合わせ 
class Contact extends Model
{
    use SoftDeletes;
    public $table = 'contact';

    public $fillable = [
        'name',
        'surname',
        'gender',
        'birthday',
        'phone',
        'remarks'
    ];
}

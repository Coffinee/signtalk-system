<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Register extends Model
{
    use HasFactory;

    protected $fillable = [
        'role',
        'first_name',
        'last_name',
        'email',
        'password',
        'cPassword',
    ];

}

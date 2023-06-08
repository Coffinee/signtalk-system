<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuestionItems extends Model
{
    use HasFactory;

    protected $fillable = [
        'question_id',
        'question',
        'question_attachment', //try
        'choice_a',
        'choice_b',
        'choice_c',
        'choice_d',
        'correct_ans',

    ];
}

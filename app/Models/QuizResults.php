<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuizResults extends Model
{
    use HasFactory;

    protected $fillable = [
        'student_id',
        'question_id',
        'score',
        'mistakes',
        'remaining_time',
    ];

    public function student()
    {
        return $this->belongsTo(User::class, 'student_id');
    }

    public function question()
    {
        return $this->belongsTo(Questions::class);
    }
}

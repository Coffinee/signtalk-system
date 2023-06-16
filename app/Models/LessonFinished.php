<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LessonFinished extends Model
{
    use HasFactory;

    protected $fillable = [
        'student_id',
        'lesson_id',
        'status',
    ];


}
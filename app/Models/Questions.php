<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Questions extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
        'title',
        'duration',
        'description',
        'banner',
    ];


    public function questionItem(){
        return $this->hasMany(QuestionItems::class, 'question_id');
    }
}

<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\QuestionItems;
use App\Models\Answers;
use App\Models\QuizResults;

class ResultsController extends BaseController
{
    public  function saveAnswers(Request $request){
        $correct_answer = 0;
        $mistakes = 0;
        $corrent_ans = [];
        foreach($request->get('answers') as $item){

           $answerItem = Answers::create([
                'student_id' => $request->get('student_id'),
                'question_item_id' => $item['id'],
                'answer' => $item['answer'],
           ]);

           if($answerItem){
                $checkAnswer = QuestionItems::where('id', $answerItem->question_item_id)->first()->correct_ans;
                $corrent_ans [] = $checkAnswer;
                if($checkAnswer == $answerItem->answer){
                    $correct_answer++;
                }else{
                    $mistakes++;
                }
           }
        }
        $saveResult = QuizResults::create([
            'student_id' => $request->get('student_id'),
            'question_id' => $request->get('question_id'),
            'score' => $correct_answer,
            'mistakes' => $mistakes,
            'remaining_time' => $request->get('remaining_time'),
        ]);
        $responseData = $saveResult->toArray();
        $responseData['correct_ans'] = $corrent_ans;

        return $this->sendResponse($responseData, 'Quiz Results');
    }
}

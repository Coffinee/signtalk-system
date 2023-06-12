<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\QuestionItems;
use App\Models\Answers;
use App\Models\QuizResults;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\Section;

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

    public function getAverages()
    {
        $averages = QuizResults::select(
            DB::raw("CONCAT(users.first_name, ' ', users.last_name) as student_name"),
            'questions.title as quiz_title',
            DB::raw('ROUND(AVG(score), 2) as average_score'),
            DB::raw('ROUND(AVG(mistakes), 2) as average_mistakes'),
            DB::raw('COUNT(*) as quiz_attempts')
        )
        ->join('users', 'quiz_results.student_id', '=', 'users.id')
        ->join('questions', 'quiz_results.question_id', '=', 'questions.id')
        ->groupBy('student_name', 'quiz_title')
        ->orderByDesc('average_score')
        ->with('question')
        ->get();
    
        return response()->json($averages);
    }
}

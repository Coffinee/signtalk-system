<?php

namespace App\Http\Controllers\API;

use App\Models\Questions;
use App\Models\QuestionItems;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class QuestionsController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $questions = Questions::with('questionItem')->get();

        return $this->sendResponse($questions , 'Test');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        

        try {
            $validator = Validator::make($request->all(), [
                'category' => 'required',
                'title' => 'required|string|max:255',
                'duration' => 'required|numeric|min:1',
                'description' => 'required|string',
                'banner' => 'required',
                'questions.*.text' => 'required',
                'questions.*.choices' => 'required|array',
                'questions.*.choices.*.text' => 'required',
                'questions.*.correctChoices' => 'required|array',
                'questions.*.correctChoices.*' => 'required',
            ]);
        
            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }

            
            $image_binary = $request->get('banner');
            $image_link = time().'.' . explode('/', explode(':', substr($image_binary, 0, strpos($image_binary, ';')))[1])[1];
            \Image::make($image_binary)->fit(600, 360)->save('uploads/quiz/'.$image_link)
            ->destroy();
            

            $question = Questions::create([
                'type' => $request->get('category'),
                'title' => $request->get('title'),
                'duration' => $request->get('duration'),
                'description' => $request->get('description'),
                'banner' => $image_link,
              ]);

              $questions = $request->get('questions');
              foreach ($questions as $item) {
                  $array_item = [
                      'question_id' => $question->id,
                      'question' => $item['text'],
                      'correct_ans' => $item['correctChoices']['text'],
                  ];
                  foreach ($item['choices'] as $index => $choice) {
                      if (isset($index) && $index === 0) {
                          $array_item['choice_a'] = $choice['text'];
                      }
                      if (isset($index) && $index === 1) {
                          $array_item['choice_b'] = $choice['text'];
                      }
                      if (isset($index) && $index === 2) {
                          $array_item['choice_c'] = $choice['text'];
                      }
                      if (isset($index) && $index === 3) {
                          $array_item['choice_d'] = $choice['text'];
                      }
                  }
                  $question_item = QuestionItems::create($array_item);
              }

            DB::commit();
            return $this->sendResponse($question , 'Test');

        } catch (\Exception $e) {
            echo $e->getMessage();
            DB::rollback();
        }
      
    }

    /**
     * Display the specified resource.
     */
    public function show(Questions $questions, $id)
    {
        $questions = Questions::with('questionItem')->where('id', $id)->first();
        return $this->sendResponse($questions , 'Questions');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Questions $questions)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Questions $questions)
    {
        try{
        $question = Questions::findOrFail($request->get('id'))->update([
            'type' => $request->get('category'),
            'title' => $request->get('title'),
            'duration' => $request->get('duration'),
            'description' => $request->get('description'),
        ]);

          $questions = $request->get('questions');
          foreach ($questions as $item) {
              $array_item = [
                  'question_id' => $request->get('id'),
                  'question' => $item['text'],
                  'correct_ans' => $item['correctChoices'],
              ];
              foreach ($item['choices'] as $index => $choice) {
                  if (isset($index) && $index === 0) {
                      $array_item['choice_a'] = $choice['text'];
                  }
                  if (isset($index) && $index === 1) {
                      $array_item['choice_b'] = $choice['text'];
                  }
                  if (isset($index) && $index === 2) {
                      $array_item['choice_c'] = $choice['text'];
                  }
                  if (isset($index) && $index === 3) {
                      $array_item['choice_d'] = $choice['text'];
                  }
              }
              if($item['id'] != ""){
                $question_item = QuestionItems::findOrFail($item['id'])->update($array_item);
              }else{
                $question_item = QuestionItems::create($array_item);
              }
          }

        DB::commit();
        return $this->sendResponse($question , 'Test');

    } catch (\Exception $e) {
        echo $e->getMessage();
        DB::rollback();
    }



        return $this->sendResponse($question , 'Questions');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Questions $questions)
    {
        //
    }
}
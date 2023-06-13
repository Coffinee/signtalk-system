<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::namespace('App\Http\Controllers\API')->group(function() {
    Route::post('login', 'AuthController@login');
    Route::post('register', 'UserController@register');

    Route::post('save-answers', 'ResultsController@saveAnswers');

    Route::get('getword', 'DictionaryController@getWord');
    Route::get('getlesson', 'LessonController@getLesson');
    Route::get('getclass', 'SectionController@getClass');
    Route::get('get-roles', 'RolesController@getRoles');

    Route::get('getquiz', 'QuestionsController@getQuiz');
    Route::get('getaverages', 'ResultsController@getAverages');
    Route::get('getstudentquiz', 'ResultsController@getQuizResultsByStudent');

    Route::get('getstudents', 'UserController@getStudents');
    Route::get('getpending', 'UserController@getPendingStudents');
    Route::get('getapprove', 'UserController@getOfficialStudents');

    Route::get('getstudents', 'UserController@getStudents');
    Route::get('getsections', 'SectionController@getSections');

    // Route::put('user/{student}', 'UserController@update');

    Route::apiResources([
        'user' => 'UserController',
        'dictionary' => 'DictionaryController',
        'translate' => 'TranslateController',
        'lesson' => 'LessonController',
        'questions' => 'QuestionsController',
        'section' => "SectionController",
        'finish' => "LessonFinishedController"
    ]);
});

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

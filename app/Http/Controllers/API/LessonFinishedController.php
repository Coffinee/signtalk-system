<?php

namespace App\Http\Controllers\API;

use App\Models\LessonFinished;
use App\Models\Lesson;
use Illuminate\Http\Request;

class LessonFinishedController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = LessonFinished::paginate(10);
        return $this->sendResponse($data, "All Entries in Array");
    }

    public function getFinishedLessons(Request $request)
    {
        $data = LessonFinished::where('status', 1)
            ->where('student_id', $request->id)
            ->get();
        return $this->sendResponse($data, "All Entries in Array");
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = LessonFinished::create($request->all());
        return $this->sendResponse($data, 'Data Saved');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $data = LessonFinished::where('lesson_id', $id)->first();
        return $this->sendResponse($data, "Fetched data in table.");
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(LessonFinished $lessonFinished)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, LessonFinished $lessonFinished)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(LessonFinished $lessonFinished)
    {
        //
    }
}

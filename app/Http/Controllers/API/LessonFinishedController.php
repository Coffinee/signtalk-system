<?php

namespace App\Http\Controllers\API;

use App\Models\LessonFinished;
use Illuminate\Http\Request;

class LessonFinishedController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function show(LessonFinished $lessonFinished)
    {
        //
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

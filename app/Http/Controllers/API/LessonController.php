<?php

namespace App\Http\Controllers\API;

use App\Models\Lesson;
use Illuminate\Http\Request;
use App\Http\Requests\Settings\LessonRequest;
use Intervention\Image\Image;

class LessonController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Lesson::paginate(10);
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
    public function store(LessonRequest $request)
    {
        $image_link = "";

        if($request->image_file){
            $image_binary = $request->image_file;
            $image_link = time().'.' . explode('/', explode(':', substr($image_binary, 0, strpos($image_binary, ';')))[1])[1];
            \Image::make($image_binary)->fit(200, 200)->save('uploads/image/'.$image_link)->destroy();

        }
        $validated = $request->validated();
        $validated['image_file'] = $image_link;
        

        $data = Lesson::create($validated);
        return $this->sendResponse($image_link, "Saved Data");
    }

    /**
     * Display the specified resource.
     */
    public function show(Lesson $lesson)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Lesson $lesson)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(LessonRequest $request, $id)
    {
        $data = Lesson::findOrFail($id)->update([
            'title' => $request->params['data']['title'],
            'video_link' => $request->params['data']['video_link'],
            'description' => $request->params['data']['description'],
          ]);
          return $this->sendResponse($request->validated(), "Updated Data");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Lesson $lesson)
    {
        //
    }
}
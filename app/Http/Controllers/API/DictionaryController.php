<?php

namespace App\Http\Controllers\API;

use App\Models\Dictionary;
use Illuminate\Http\Request;
use App\Http\Requests\Settings\DictionaryRequest;
use Intervention\Image\Image;
use Illuminate\Support\Facades\File;

class DictionaryController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Dictionary::paginate(5);
        return $this->sendResponse($data, "All Entries in Array");
    }

    public function getWord(Request $request)
    {
        $data = Dictionary::where('word', $request->word)->latest()->first();
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
    public function store(DictionaryRequest $request)
    {
        $image_link = "";
        $validated = $request->validated();

        if ($request->image_file) {
            $image_binary = $request->image_file;
            $image_link = time() . '.' . explode('/', explode(':', substr($image_binary, 0, strpos($image_binary, ';')))[1])[1];

            if (!File::exists('uploads/dictionary/' . $image_link)) {
                \Image::make($image_binary)->save('uploads/dictionary/' . $image_link)->destroy();
            }

            $validated['image_file'] = $image_link;
        }

        $data = Dictionary::create($validated);
        return $this->sendResponse($image_link, "Saved Data");
    }

    /**
     * Display the specified resource.
     */
    public function show(Dictionary $dictionary)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Dictionary $dictionary)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(DictionaryRequest $request, $id)
    {
        // $data = Dictionary::findOrFail($id)->update([
        //     'word' => $request->params['data']['word'],
        //     'description' => $request->params['data']['description'],
        //     'video_link' => $request->params['data']['video_link'],
        //   ]);
        //   return $this->sendResponse($request->validated(), "Updated Data");
        $image_link = "";
        $data = Dictionary::findOrFail($id);

        if ($request->params['data']['image_file']) {
            $image_binary = $request->params['data']['image_file'];

            if ($data->image_file != $request->params['data']['image_file']) {
                $image_link = time() . '.' . explode('/', explode(':', substr($image_binary, 0, strpos($image_binary, ';')))[1])[1];
            } else {
                $image_link = $request->params['data']['image_file'];
            }

            if (!File::exists('uploads/dictionary/' . $image_link)) { //does not exists
                \Image::make($image_binary)->save('uploads/dictionary/' . $image_link)->destroy();
                $data->update([
                    'image_file' => $image_link,
                ]);
            } else if ($data->image_file != $image_link) { // is existing
                unlink('uploads/dictionary/' . $data->image_file);
                \Image::make($image_binary)->save('uploads/dictionary/' . $image_link)->destroy();
                $data->update([
                    'image_file' => $image_link,
                ]);
            }
        }
        return $this->sendResponse($request->validated(), "Updated Data");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Dictionary $dictionary)
    {
        //
    }
}
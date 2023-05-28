<?php

namespace App\Http\Controllers\API;

use App\Models\Translate;
use Illuminate\Http\Request;
use App\Http\Requests\Settings\TranslateRequest;

class TranslateController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Translate::paginate(10);
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
    public function store(TranslateRequest $request)
    {
        $data = Translate::create($request->all());
        return $this->sendResponse($data, "Saved");
    }

    /**
     * Display the specified resource.
     */
    public function show(Translate $translate)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Translate $translate)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Translate $translate)
    {
        // $data = Translate::findOrFail($id)->update([
        //     'word' => $request->params['data']['word'],
        //     'description' => $request->params['data']['description'],
        //     'video_link' => $request->params['data']['video_link'],
        //   ]);
        //   return $this->sendResponse($request->validated(), "Updated Data");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Translate $translate)
    {
        //
    }
}

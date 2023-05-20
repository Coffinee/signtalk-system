<?php

namespace App\Http\Controllers\API;

use App\Models\Dictionary;
use Illuminate\Http\Request;
use App\Http\Requests\Settings\DictionaryRequest;

class DictionaryController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Dictionary::paginate(10);
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
        $data = Dictionary::create($request->all());
        return $this->sendResponse($data, "Saved");
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
        $data = Dictionary::findOrFail($id)->update([
            'word' => $request->params['data']['word'],
            'description' => $request->params['data']['description'],
            'file' => $request->params['data']['file'],
          ]);
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

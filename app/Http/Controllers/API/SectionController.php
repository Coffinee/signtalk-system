<?php

namespace App\Http\Controllers\API;

use App\Models\Section;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Requests\Settings\SectionRequest;

class SectionController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Section::latest()->first();
        return $this->sendResponse($data, "All Entries in Array");
    }

    public function getClass()
    {
        return $this->sendResponse(Section::get(), 'sections');
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
    public function store(SectionRequest $request)
    {
        $validated = $request->validated();
        $validated['classCode'] = Str::random(6);

        $data = Section::create($validated);
        return $this->sendResponse($data, "Saved");

    }

    /**
     * Display the specified resource.
     */
    public function show(Section $section)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Section $section)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Section $section)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, $id)
    {
        $section = Section::findOrFail($id);
        $section->delete();
        return $this->sendResponse($section, 'Section');
    }
}
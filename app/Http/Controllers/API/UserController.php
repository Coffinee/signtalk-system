<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\Settings\UserRequest;
use Illuminate\Support\Facades\Hash;

class UserController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = User::with('role')->paginate(10);
        return $this->sendResponse($data, "All Entries in Array");
    }

    public function getStudents()
    {
        $data = User::where('role_id', 3)->get();
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
    public function store(UserRequest $request)
    {
        // $data = User::create($request->all());
        // return $this->sendResponse($data, "Saved");
        $validated = $request->validated();
        $hashPass = Hash::make($request->password);
        $validated['password'] = $hashPass;
        $validated['role_id'] = $request->role;
        $data = User::create($validated);

        return $this->sendResponse($data, "Saved data to table.");


    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $user->update($request->params['data']);

        if ($request->params['data']['role']) {
            $user->update([
                'role_id' => $request->params['data']['role']['id']
            ]);
        }

        return $this->sendResponse($request->params['data']['building'], "Updated Data");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class GoogleAuthController extends Controller
{
    public function redirect()
    {
        return Socialite::driver('google')->redirect();
    }

    public function callBackGoogle(Request $request)
    {
        try {
            $google_user = Socialite::driver('google')->user();

            $user = User::where('google_id', $google_user->getId())->first();

            if ($user) {
                return redirect()->intended('/admin/dashboard/');
            } else {
                $new_user = User::create([
                    'email' => $google_user->getEmail(),
                    'google_id' => $google_user->getId(),
                ]);

                $new_user->save();
                return redirect()->intended('/register');
            }
        } catch (\Throwable $th) {
            dd('Something went wrong!', $th->getMessage());
        }
    }
}

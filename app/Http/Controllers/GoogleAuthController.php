<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class GoogleAuthController extends Controller
{
    public function redirect(){
        return Socialite::driver('google')->redirect();
    }

    public function callBackGoogle(Request $request){
        try{
            // $validated = $request->validated();
            // $validated['role_id'] = $request->role['id'];
            $google_user = Socialite::driver('google')->user();
            
            $user = User::where('googleID', $google_user->getId())->first();

            if (!$user) {

                $new_user = User::create([
                    // 'role_id' => $validated,
                    // 'role_id' => 3,
                    'first_name' => $google_user->getName(),
                    'last_name' => 'apelyido',
                    'email' => $google_user->getEmail(),
                    'googleID' => $google_user->getId(),
                    'classCode' => Str::random(6),
                    'role_id' => $request->role_id,
                ]);
                
                Auth::login($new_user);
                return redirect()->intended('admin/dashboard');
            }
            else{
                Auth::login($user);
                return redirect()->intended('admin/dashboard');
            }
                
        }
        catch(\Throwable $th){
            dd('Something went wrong!', $th->getMessage());
        }
    }
}

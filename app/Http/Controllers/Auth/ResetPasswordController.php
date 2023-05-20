<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\ResetsPasswords;
use App\Http\Requests\Auth\ResetPasswordRequest;
use App\Models\Token;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class ResetPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

    use ResetsPasswords;

    /**
     * Where to redirect users after resetting their password.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;


    public function resetPassword(ResetPasswordRequest $request){

        if(!$request->filled('email')) return response()->json(["message"=>"Invalid Url. Please check your email for the correct url."], 500);
        
        $user = User::where('email',$request->get('email'))->first(['id','email']);
        $token = Token::where(['user_id' => $user->id, 'token' => $request->code])->isForgotPassword()->exists();

        if(!$token) return response()->json(["message"=>"It appears that your token has expired. Please generate a new one to proceed."], 500);

        $user->update(['password', Hash::make($request->password)]);

        return response()->json([
            'success' => true,
            'message' => 'You have successfully changed your password.'
        ]);
    }
}

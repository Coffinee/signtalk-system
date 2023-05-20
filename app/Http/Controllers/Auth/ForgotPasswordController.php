<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use App\Http\Requests\Auth\ForgotPasswordRequest;
use Illuminate\Support\Facades\Http;
use App\Models\User;
use App\Models\Token;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
use App\Mail\ForgotPasswordEmail;

class ForgotPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset emails and
    | includes a trait which assists in sending these notifications from
    | your application to your users. Feel free to explore this trait.
    |
    */

    use SendsPasswordResetEmails;


    public function forgotPassword(ForgotPasswordRequest $request){
        $user = User::where('email',$request->get('email'))->first();

        $response = Http::get(env('EOS_URL').'/api/get-partner-code/'.$user->company_id);
        
        if($request->get('code') != $response->object()->data)  return response()->json(["message"=>"Partner code mismatched.", "errors" => ['code' => 'Partner code mismatched.' ]], 422);

        $removeToken = Token::where(['type'=>'forgot-password', 'user_id' => $user->id])->delete();

        $token = new Token;
        $token->type = 'forgot-password';
        $token->user_id = $user->id;
        $token->token = strtoupper(Str::random(6));
        $token->expiresAt(Carbon::now()->addMinute());
        $token->save();

        Mail::to($request->get('email'))->send(new ForgotPasswordEmail($user, $token));
         
        return response()->json([
            'success' => true,
            'message' => 'Kindly review your inbox for the reference code and reset password link that we sent.',
            'email' => $request->get('email')
        ]);
    }
}

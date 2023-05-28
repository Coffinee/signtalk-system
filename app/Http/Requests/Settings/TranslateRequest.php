<?php

namespace App\Http\Requests\Settings;

use Illuminate\Foundation\Http\FormRequest;

class TranslateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return $this->isMethod('post') ? $this->createRules() : $this->updateRules();
    }

    public function createRules() :array {
        return [
            'word' => 'required|max:100',
            'video_link' => 'required|max:100'
        ];
    }

    public function updateRules(){
        return [
            'params.data.word' => 'required|max:100|unique:translates,id'.$this->get('id'),
            'params.data.video_link' => 'required|max:100'
        ];
    }
}

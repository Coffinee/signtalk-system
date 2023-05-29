<?php

namespace App\Http\Requests\Settings;

use Illuminate\Foundation\Http\FormRequest;

class LessonRequest extends FormRequest
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
        return [
            //
        ];
    }
    public function createRules() :array {
        return [
            'title' => 'required|max:100',
            'video_link' => 'required|max:100',
            'description' => 'required|max:500',
        ];
    }

    public function updateRules(){
        return [
            'params.data.title' => 'required|max:100|unique:dictionaries,id'.$this->get('id'),
            'params.data.video_link' => 'required|max:100',
            'params.data.description' => 'required|max:500',
        ];
    }
}

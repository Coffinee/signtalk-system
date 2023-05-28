<?php

namespace App\Http\Requests\Settings;

use Illuminate\Foundation\Http\FormRequest;

class DictionaryRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return $this->isMethod('post') ? $this->createRules() : $this->updateRules();
    }

    public function createRules() :array {
        return [
            'word' => 'required|max:100',
            'description' => 'required|max:500',
            'video_link' => 'required|max:100',
            'image_file' => 'max:2048'
        ];
    }

    public function updateRules(){
        return [
            'params.data.word' => 'required|max:100|unique:dictionaries,id'.$this->get('id'),
            'params.data.description' => 'required|max:500',
            'params.data.video_link' => 'required|max:100',
            'params.data.image_file' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
        ];
    }
}

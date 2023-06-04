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
        return $this->isMethod('post') ? $this->createRules() : $this->updateRules();
    }
    public function createRules() :array {
        return [
            'title' => 'required|max:100',
            'content' => 'required',
            'refLink' => 'required',
        ];
    }

    public function updateRules(){
        return [
            'params.data.title' => 'required|max:100|unique:lessons,id'.$this->get('id'),
            'params.data.content' => 'required',
            'params.data.refLink' => 'required',
        ];
    }
}

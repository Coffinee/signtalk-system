<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-vue';
// import '@ckeditor/ckeditor5-build-classic/build/translations/en.js'; // Optional: If you want to add language support
import Slideover from '../../../misc/Slideover.vue';
export default {
    components: {
        ckeditor: CKEditor.component,
        Slideover
    },
    data() {
        return {
            slideoverOpen: false,
            editor: ClassicEditor,
            // content: '<p>Initial content</p>'
            toolbar: [ 
                'heading', '|', 'bold', 'italic', 'link', 
                'bulletedList', 'numberedList', 'blockQuote', 
                'alignment', 
            ],
            alignment: {
                options: [ 'left', 'right', 'center', 'justify']
            },
            heading: {
                options: [
                    { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                    { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                    { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
                ]
            },
        }
    },
    methods: {
        slideoverToggle() {
            this.slideoverOpen = false;
        }
    }
}
</script>
<template>
    <div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div class="flex justify-between p-2">
                <h2 class="text-2xl font-extrabold font-poppins">Lesson</h2>
                <button @click="(slideoverOpen = !slideoverOpen)" type="button"
                    class="text-white bg-indigo-500 hover:bg-indigo-600 font-medium rounded-lg text-sm px-5 py-2.5">Add
                    Lesson</button>
            </div>
            <div class="pb-4 bg-white p-[30px]">
                <label for="table-search" class="sr-only">Search</label>
                <div class="relative mt-1">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <input type="text" id="table-search"
                        class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50"
                        placeholder="Search for items">
                </div>
            </div>
            <table class="w-full text-sm text-left text-gray-500 py-[10px]">
                <thead class="text-xs text-gray-700 uppercase bg-gray-200 ">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Lesson Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Chapters
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b ">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            1
                        </th>
                        <td class="px-6 py-4">
                            Numbers
                        </td>
                        <td class="px-6 py-4">
                            8
                        </td>
                        <td class="px-6 py-4 flex gap-[5px] text-center">
                            <a href="#" class="font-medium text-blue-600  hover:underline">Edit</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

<Slideover :show="slideoverOpen" @close="slideoverToggle" :title="'Add Lesson'" :widthSlideover="'max-w-2xl'">
    <template v-slot:body>
        <div class="my-5 p-4 space-y-6">
            <ckeditor :editor="editor" :config="editorConfig"></ckeditor>
        </div>
    </template>
</Slideover></template>
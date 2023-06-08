<template>
    <div>
        <div class="overflow-x-auto shadow-md sm:rounded-lg">
            <div class="flex justify-between p-2 px-[30px] pt-[30px] mb-3">
                <h2 class="text-2xl font-extrabold font-poppins text-black">Lesson</h2>
                <button @click="(slideoverOpen = !slideoverOpen)" type="button"
                    class="bg-gray-900 hover:bg-gray-900/90 rounded-md text-white text-base px-8 py-2">Add
                    Lesson</button>
            </div>
            <div class="pb-8">
                <table class="w-full text-sm text-left text-gray-500 py-[10px]">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-200 ">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Lesson Title
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Lesson Content
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Reference Link
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in data.data" :key="item.id" class="bg-white border-b ">
                            <th scope="row" class="px-6 py-4 text-xs text-gray-900 whitespace-nowrap">
                                {{ item.title }}
                            </th>
                            <td class="px-6 text-xs py-4">
                                <button @click="modalPop(item)" class="flex items-center space-x-2 text-indigo-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <p class="text-xs">Show Content</p>
                                </button>
                            </td>
                            <td class="text-xs px-6 py-4">
                                {{ item.refLink }}
                                <p v-if="item.refLink == null" class="text-red-400">No Link Provided</p>
                            </td>
                            <td class="px-6 py-4 flex gap-[5px] text-center text-xs">
                                <a @click.prevent="editForm(item)"
                                    class="font-medium text-blue-600  hover:underline ">Edit</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <Slideover :show="slideoverOpen" @close="slideoverToggle" :title="(edit ? 'Update' : 'Add') + ' Lesson'"
        :widthSlideover="'max-w-2xl'">
        <template v-slot:body>
            <form @submit.prevent="edit ? updateForm() : submitForm()">
                <div class="mt-5 p-2 space-y-2">
                    <div class="flex justify-between items-center">
                        <label for="content">Lesson Title:</label>
                        <!-- <div v-if="form.errors.has('title')" v-html="form.errors.get('title')"
                            class="text-xs text-red-500" /> -->
                    </div>
                    <input v-model="form.title" type="text"
                        class="pl-2 text-xs w-full h-8 rounded-md border border-gray-500 bg-white" required>
                </div>
                <div class="p-2 space-y-2">
                    <div class="flex justify-between items-center">
                        <label for="content">Lesson Content:</label>
                        <!-- <div v-if="form.errors.has('content')" v-html="form.errors.get('content')"
                            class="text-xs text-red-500" /> -->
                    </div>
                    <ckeditor v-model="form.content" :editor="editor" :config="editorConfig" required></ckeditor>
                </div>
                <div class="p-2 space-y-2">
                    <div class="space-y-1">
                        <div class="flex justify-between items-center">
                            <label for="image_file" class="text-sm">Upload Image Reference:</label>
                            <!-- <div v-if="form.errors.has('content')" v-html="form.errors.get('content')"
                                class="text-xs text-red-500" /> -->
                        </div>
                        <div class="flex items-center justify-center w-full">
                            <label :style="{ 'background-image': `url(${image_url})`}"
                                class="flex flex-col w-full h-32 rounded-md border-2 border-gray-500 border-dashed hover:bg-gray-200 cursor-pointer bg-center bg-cover bg-no-repeat">
                                <div v-show="form.image_file == '' ? true : false" :class="{ 'hidden': hideLabel }"
                                    class="flex flex-col items-center justify-center pt-7">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="w-8 h-8 text-black dark:text-white group-hover:text-gray-600" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <p
                                        class="pt-1 text-sm tracking-wider text-gray-600 dark:text-white group-hover:text-gray-600">
                                        Attach a file</p>
                                </div>
                                <input ref="image_file" type="file" class="opacity-0" @input="uploadImage"
                                    accept="image/png, image/jpeg, image/jpg, image/svg" required/>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="mt-5 p-2 space-y-2">
                    <label for="video-link" class="text-sm relative">Reference Link: <span
                            class="absolute text-[9px] text-indigo-500 ml-1">*optional</span>
                    </label>
                    <input v-model="form.refLink" type="text"
                        class="pl-2 text-xs w-full h-8 rounded-md border border-gray-500 bg-white" required>
                </div>

                <div class="flex gap-1 mt-10">
                    <button type="button" @click.prevent="slideoverToggle"
                        class="rounded-md w-full bg-white border border-indigo-500 py-2 px-3 text-sm">Close</button>
                    <button type="submit"
                        class="rounded-md w-full bg-indigo-500 border border-white py-2 px-3 text-sm text-white">{{
                            edit ? 'Update' : 'Save' }}</button>
                </div>
            </form>
        </template>
    </Slideover>

    <Modal :show="modalOpen" @close="modalToggle" :title="'Quiz Title'" :widthModal="'w-[600px]'" :heightModal="'h-auto'">
        <div class="text-xs">
            <p v-html="form.content"></p>
        </div>
    </Modal>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Slideover from '../../../misc/Slideover.vue';
import { createToast } from 'mosha-vue-toastify';
import Form from 'vform';
import Modal from '../../../misc/Modal.vue'
export default {
    props: {
        data: {
            type: Array,
            default: {}
        },
    },
    components: {
        Slideover, Modal
    },
    data() {
        return {
            data: {},
            edit: false,
            modalOpen: false,
            hideLabel: false,
            slideoverOpen: false,
            editor: ClassicEditor,
            editorConfig: {
                toolbar: ['undo', 'redo', '|', 'bold', 'italic', '|', 'heading'],
                heading: {
                    options: [
                        { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                        { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                        { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
                    ]
                },
            },
            form: new Form({
                title: '',
                content: '',
                image_file: '',
                refLink: ''
            }),
            image_url: '',
        }
    },
    methods: {
        modalToggle() {
            this.modalOpen = false;
        },

        modalPop(item) {
            this.form = item;
            this.modalOpen = !this.modalOpen;
        },

        slideoverToggle() {
            this.slideoverOpen = false;
            this.edit = false;
            this.form = new Form({
                title: '',
                content: '',
                image_file: '',
                refLink: ''
            });
            this.image_url = '';
        },

        submitForm() {
            console.log(this.form);
            this.$Progress.start();
            this.form.post('/api/lesson')
                .then((data) => {
                    this.$Progress.finish();
                    this.getData();
                    this.slideoverToggle();
                    createToast({
                    title: 'Hurray!',
                    description: "Lesson Added"
                    },
                        {
                            showIcon: 'true',
                            position: 'top-right',
                            type: 'info',
                            hideProgressBar: 'true',
                            transition: 'bounce',
                    })
                }).catch((error) => {
                    this.$Progress.fail();
                })
        },

        updateForm() {
            axios.put("/api/lesson/" + this.form.id, {
                params: {
                    data: this.form
                }
            }).then((data) => {
                this.$Progress.finish();
                this.edit = false;
                this.slideoverToggle()
                createToast({
                    title: 'Hurray!',
                    description: "Lesson Updated"
                    },
                        {
                            showIcon: 'true',
                            position: 'top-right',
                            type: 'info',
                            hideProgressBar: 'true',
                            transition: 'bounce',
                 })
            }).catch((error) => {
                this.$Progress.fail();
            })
        },

        editForm(item) {
            this.edit = true;
            this.slideoverOpen = !this.slideoverOpen;
            this.form = item;
            this.image_url = '/uploads/lessons//' + this.form.image_file;
        },

        async getData() {
            await axios.get('/api/lesson').then((data) => {
                this.data = data.data.data;
            }).catch((e) => {
                errorMessage('Opps!', e.message, 'top-right')
            });
        },

        uploadImage() {
            let input = this.$refs.image_file;
            let file = input.files;
            if (file && file[0]) {
                let reader = new FileReader();
                reader.onload = (e) => {
                    this.image_url = e.target.result;
                    this.form.image_file = e.target.result;
                };
                reader.readAsDataURL(file[0]);
                this.$emit("input", file[0]);
            }
        },

    },
    created() {
        this.getData();
    }
}
</script>
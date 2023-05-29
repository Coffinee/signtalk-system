<template>
    <div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div class="flex justify-between p-2 px-[30px] pt-[30px]">
                <h2 class="text-2xl font-extrabold font-poppins">Lesson</h2>
                <button @click="(slideoverOpen = !slideoverOpen)" type="button"
                    class="text-white bg-indigo-500 hover:bg-indigo-600 font-medium rounded-lg text-sm px-5 py-2.5">Add
                    Lesson</button>
            </div>
            <div class="pb-4 bg-white px-[30px]">
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
            <div class="px-[30px] pb-12">
                <table class="w-full text-sm text-left text-gray-500 py-[10px]">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-200 ">
                        <tr>
                            <th v-for="label in tableLabels" :key="label.id" scope="col" class="text-center px-6 py-3">
                                {{ label.name }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in data.data" :key="item.id" class="bg-white border-b text-center">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {{ item.id }}
                            </th>
                            <td class="px-6 py-4">
                                {{ item.title }}
                            </td>
                            <td class="px-6 py-4">
                                {{ item.video_link }}
                            </td>
                            <td class="px-6 py-4">
                                {{ item.description }}
                            </td>
                            <td class="px-6 py-4">
                                {{ item.image_file }}
                            </td>
                            <td class="px-6 py-4 flex gap-[5px] text-center">
                                <a @click.prevent="editForm(item)" class="font-medium text-blue-600  hover:underline ">Edit</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <Slideover :show="slideoverOpen" @close="slideoverToggle" :title="(edit ? 'Update' : 'Add') + ' Translation'" :desc="'Add ASL Lesson into the database'">
        <template v-slot:body>
            <form @submit.prevent="edit ? updateForm() : submitForm()">
                <div class="my-3 p-4 space-y-6">
                    <div class="space-y-1">
                        <label for="title" class="text-[15px]">Lesson Title</label>
                        <input v-model="form.title" type="text"
                            class="pl-2 text-xs w-full h-8 rounded-md border border-indigo-900">
                    </div>
                    <div class="space-y-1">
                        <label for="video_link" class="text-[15px]">Upload Video Link</label>
                        <input v-model="form.video_link" type="text"
                            class="pl-2 text-xs w-full h-8 rounded-md border border-indigo-900">
                    </div>
                    <div class="space-y-1">
                        <label for="description" class="text-[15px]">Description</label>
                        <input v-model="form.description" type="text"
                            class="pl-2 text-xs w-full h-8 rounded-md border border-indigo-900">
                    </div>
                    
                    <div class="space-y-1">
                        <label for="image_file" class="text-sm">Upload Photo</label>
                        <div class="flex items-center justify-center w-full">
                            <label :style="{ 'background-image': `url(${image_url})` }"
                                class="flex flex-col w-full h-32 rounded-md border-2 border-gray-500 border-dashed hover:bg-gray-200 cursor-pointer bg-center bg-cover bg-no-repeat">
                                <div v-show="form.image_file == '' ? true : false" :class="{ 'hidden': hideLabel }" class="flex flex-col items-center justify-center pt-7">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="w-8 h-8 text-black group-hover:text-gray-600" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <p class="pt-1 text-sm tracking-wider text-gray-600 group-hover:text-gray-600">
                                        Attach a file</p>
                                </div>
                                <input ref="image_file" type="file" class="opacity-0" @input="uploadImage" accept="image/png, image/jpeg, image/jpg, image/svg"/>
                            </label>
                        </div>
                    </div>
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
</template>
<script>
import Slideover from '../../../misc/Slideover.vue';
import Form from 'vform';
import axios from 'axios';

export default {
    components: {
        Slideover, 
    },
    props: {
        data: {
            type: Array,
            default: {}
        },
    },
    data() {
        return {
            data: {},
            slideoverOpen: false,
            edit: false,
            form: new Form({
                id: '',
                title: '',
                video_link: '',
                description: '',
                image_file: ''
            }),
            image_url: '',
            tableLabels:[
                {id: '1', name: 'ID'},
                {id: '2', name: 'Lesson Title'},
                {id: '3', name: 'Video Link'},
                {id: '4', name: 'Description'},
                {id: '5', name: 'Image'},
                {id: '6', name: 'Action'},
            ],
            hideLabel: false
        }
    },
    methods: {
        slideoverToggle() {
            this.slideoverOpen = false;
            this.edit = false;
            this.form = new Form({
                id: '',
                title: '',
                video_link: '',
                description: '',
                image_file: ''
            })
        },

        submitForm() {
            this.$Progress.start();
            this.form.post('/api/lesson')
                .then((data) => {
                    this.$Progress.finish();
                    this.getData();
                    this.slideoverToggle();
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
            }).catch((error) => {
                this.$Progress.fail();
            })
        },

        editForm(item) {
            this.edit = true;
            this.slideoverOpen = !this.slideoverOpen;
            this.form = item;
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
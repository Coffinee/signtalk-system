<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div class="flex justify-between px-[30px] pt-[30px]">
            <h2 class="text-2xl font-extrabold font-poppins">Dictionary</h2>
            <button type="button" @click="(slideoverOpen = !slideoverOpen)"
                class="text-white bg-indigo-500 hover:bg-indigo-600 font-medium rounded-lg text-sm px-5 py-2.5">Add
                Word</button>
        </div>
        <div class="pb-4 bg-white px-[30px]">
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
                <thead class="text-xs text-gray-700 uppercase bg-gray-200">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Word
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Video URL
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in data.data" :key="item.id" class="bg-white border-b ">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {{ item.id }}
                        </th>
                        <td class="px-6 py-4">
                            {{ item.word }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.description }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.file }}
                        </td>
                        <td class="px-6 py-4 flex gap-[5px] text-center">
                            <a @click.prevent="editForm(item)" class="font-medium text-blue-600  hover:underline">Edit</a>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>

    <Slideover :show="slideoverOpen" @close="slideoverToggle" :title="(edit ? 'Update' : 'Add') + ' Word'">
        <template v-slot:body>
            <form @submit.prevent="edit ? updateForm() : submitForm()">
                <div class="my-5 p-4 space-y-6">
                    <div class="space-y-1">
                        <label for="word" class="text-[11px]">Add Word</label>
                        <input v-model="form.word" type="text"
                            class="pl-2 text-xs w-full h-8 rounded-md border border-indigo-900">
                    </div>

                    <div class="space-y-1">
                        <label for="desc" class="text-[11px]">Add Description</label>
                        <textarea v-model="form.description"
                            class="pl-2 pt-2 text-xs w-full h-40 resize-none rounded-md border border-indigo-900"></textarea>
                    </div>

                    <div class="space-y-1">
                        <label for="file" class="text-[11px]">Upload Video Link</label>
                        <input v-model="form.file" type="text"
                            class="pl-2 text-xs w-full h-8 rounded-md border border-indigo-900">
                    </div>
                </div>

                <div class="absolute bottom-0 pb-8 flex justify-center items-center w-full gap-1">
                    <button type="button" @click.prevent="slideoverToggle"
                        class="rounded-md w-full bg-white border border-red-700 py-2 px-3 text-sm font-semibold">Close</button>
                    <button type="submit"
                        class="rounded-md w-full bg-white border border-green-700 py-2 px-3 text-sm font-semibold">{{
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
    props: {
        data: {
            type: Array,
            default: {}
        },
    },
    components: {
        Slideover
    },
    data() {
        return {
            data: {},
            slideoverOpen: false,
            edit: false,
            form: new Form({
                id: '',
                word: '',
                description: '',
                file: ''
            })
        }
    },
    methods: {
        slideoverToggle() {
            this.slideoverOpen = false;
            this.form = new Form({
                id: '',
                word: '',
                description: '',
                file: ''
            })
        },

        submitForm() {
            this.$Progress.start();
            this.form.post('/api/dictionary')
                .then((data) => {
                    this.$Progress.finish();
                    this.getData();
                    this.slideoverToggle();
                }).catch((error) => {
                    this.$Progress.fail();
                })
        },

        updateForm() {
            axios.put("/api/dictionary/" + this.form.id, {
                params: {
                    data: this.form
                }
            }).then((data) => {
                this.$Progress.finish();
                this.edit = false;
                this.getData();
                console.log('Updated')
            }).catch((error) => {
                this.$Progress.fail();
            })
        },

        editForm(item) {
            this.edit = true;
            this.slideoverOpen = true;
            this.form = item;
        },

        async getData() {
            await axios.get('/api/dictionary').then((data) => {
                this.data = data.data.data;
            }).catch((e) => {
                errorMessage('Opps!', e.message, 'top-right')
            });
        },
    },

    created() {
        this.getData();
    }
}
</script>
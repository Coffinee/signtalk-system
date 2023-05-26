<script>
import { userAuthStore } from '@/store/auth';
import Accordion from '../../../../misc/Accordion.vue'
import Form from 'vform';

export default {
    name: 'Profile',

    components: {
        Accordion,
    },
    data() {
        return {
            user_fname: userAuthStore().user.first_name,
            user_lname: userAuthStore().user.last_name,
            email: userAuthStore().user.email,
            isInput_fname: false,
            isInput_lname: false,
            isInput_email: false,
            form: new Form({
                fname: '',
                lname: '',
                email: ''
            })
        }
    },

    methods: {
        fnameInput() {
            this.isInput_fname = !this.isInput_fname;
        },
        lnameInput() {
            this.isInput_lname = !this.isInput_lname;
        },
        emailInput() {
            this.isInput_email = !this.isInput_email;
        },

        savefnameInput() {
            this.isInput_fname = !this.isInput_fname;
        },
        savelnameInput() {
            this.isInput_lname = !this.isInput_lname;
        },
        saveEmailInput() {
            this.isInput_email = !this.isInput_email;
        }
    }
}
</script>
<template>
    <div class="p-3 h-screen w-full ">
        <Accordion :sectiontitle="'View Profile'" :accordionColor="'bg-indigo-500'" :setOpen="false">
            <form class="px-14">
                <dl class="divide-y divide-gray-100 ">
                    <div class="px-4 py-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">First name:</dt>
                        <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <div class="w-full flex space-x-2">
                                <span v-if="!isInput_fname" class="flex-grow dark:text-gray-400">{{ user_fname }}</span>
                                <input v-if="isInput_fname" type="text"
                                    class="w-full h-6 border-b border-indigo-500 focus:outline-none">
                                <button v-if="isInput_fname" @click.prevent="savefnameInput()" class="ml-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="green" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                </button>
                            </div>
                            <button @click.prevent="fnameInput()">
                                <svg v-if="!isInput_fname" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                            </button>
                        </dd>
                    </div>

                    <div class="px-4 py-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Last name:</dt>
                        <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <div class="w-full flex space-x-2">
                                <span v-if="!isInput_lname" class="flex-grow dark:text-gray-400">{{ user_lname }}</span>
                                <input v-if="isInput_lname" type="text"
                                    class="w-full h-6 border-b border-indigo-500 focus:outline-none">
                                <button v-if="isInput_lname" @click.prevent="savelnameInput()" class="ml-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="green" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                </button>
                            </div>
                            <button @click.prevent="lnameInput()">
                                <svg v-if="!isInput_fname" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                            </button>
                        </dd>
                    </div>

                    <div class="px-4 py-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Email Address:</dt>
                        <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <div class="w-full flex space-x-2">
                                <span v-if="!isInput_email" class="flex-grow dark:text-gray-400">{{ user_email }}</span>
                                <input v-if="isInput_email" type="text"
                                    class="w-full h-6 border-b border-indigo-500 focus:outline-none">
                                <button v-if="isInput_email" @click.prevent="saveEmailInput()" class="ml-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="green" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                </button>
                            </div>
                            <button @click.prevent="emailInput()">
                                <svg v-if="!isInput_email" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                            </button>
                        </dd>
                    </div>
                    
                    <div class="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Class Code:</dt>
                        <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <span class="flex-grow dark:text-gray-400">M4M4M0</span>
                        </dd>
                    </div>
                </dl>
            </form>
        </Accordion>

        <Accordion :sectiontitle="'Change Password'" :setOpen="false" :accordionColor="'bg-indigo-500'">
            <form class="flex flex-col justify-center items-center dark:bg-gray-900 sm:p-[30px] md:p-[50px] h-full w-full">
                <div class="sm:w-full md:w-[45%] border rounded-lg p-5">
                    <div class="mb-5">
                        <label for="password" class="block mb-2 text-sm font-semibold  text-black dark:text-white">Current
                            Password:</label>
                        <input type="password" id="password"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="•••••••••" required>
                    </div>
                    <div class="mb-5">
                        <label for="new-password" class="block mb-2 text-sm font-semibold text-black dark:text-white">New
                            Password:</label>
                        <input type="password" id="new-password"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="•••••••••" required>
                    </div>
                    <div class="mb-5">
                        <label for="confirm-new-password"
                            class="block mb-2 text-sm font-semibold text-black dark:text-white">Confirm New
                            Password:</label>
                        <input type="password" id="confirm-new-password"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="•••••••••" required>
                    </div>
                    <div class="flex justify-end">
                        <button type="submit"
                            class="text-white dark:text-white hover:text-blue-800', 'group rounded-lg px-5 py-2 text-sm tracking-wide font-medium bg-indigo-500 hover:bg-indigo-600 flex flex-col text-center">Submit</button>
                    </div>
                </div>

            </form>
        </Accordion>

        <Accordion :sectiontitle="'Recovery Email'" :setOpen="false" :accordionColor="'bg-indigo-500'">
            <h1 class="dark:text-white text-center">Recovery Email</h1>
        </Accordion>
    </div>
</template>

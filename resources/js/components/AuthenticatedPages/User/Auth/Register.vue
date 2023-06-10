<template>
    <div class="flex justify-center items-center">
        <section class="bg-gray-50 dark:bg-[#141526] w-full transition-all">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen w-screen lg:py-0">
                <div
                    class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1
                            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-left capitalize">
                            {{ !createAccount ? 'Choose an option' : 'Register' }}
                        </h1>
                        <div v-show="!createAccount" class="">
                            <a href="#" type="button"
                                class="text-red-500 bg-white hover:bg-white/90 focus:outline-none border border-red-500 font-medium rounded-lg text-xs py-2.5 mt-16 text-center flex items-center justify-center w-full">
                                <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab"
                                    data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                                    <path fill="currentColor"
                                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z">
                                    </path>
                                </svg>
                                Sign up with Google
                            </a>
                            <!-- 
                            <div class="my-8 relative">
                                <hr class="w-full h-px bg-gray-300">
                                <p class="absolute -top-2 px-3 font-medium text-gray-400 text-sm bg-white left-[43%]">or</p>
                            </div> -->

                            <a href="#" type="button" @click.prevent="createAcc"
                                class="text-indigo-500 bg-white hover:bg-white/90 focus:outline-none border border-indigo-500 font-medium rounded-lg text-xs py-2.5 mb-16 mt-2 text-center flex items-center justify-center w-full">
                                Create an Account
                            </a>

                            <p class="text-[10px] flex-col items-center justify-center text-gray-400 text-center">By registering your account, you agree to
                                our <br><span class="underline text-blue-800 font-bold">Privacy Policy</span> and <span
                                    class="underline text-blue-800 font-bold">Terms of Use</span>
                            </p>
                        </div>
                        <form v-show="createAccount == true" class="space-y-4" @submit.prevent="submitForm()">
                            <div class="flex flex-col text-white">
                                <p class="text-sm font-medium text-gray-900 dark:text-white text-left mb-2">Select a Role:
                                </p>
                                <div class="flex items-center justify-center space-x-5">
                                    <select v-model="form.role"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                                        <option value="" disabled selected>Select a Role</option>
                                        <option :value="role.id" v-for="role in this.roles">{{ role.label }}</option>
                                        <!-- <option @click.prevent="isTeacher = false" value="student">Student</option> -->
                                        <!-- <option @click.prevent="isTeacher = true" value="teacher">Teacher</option> -->
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div v-show="form.role === 3" class="mb-2">
                                    <label for="lrn"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Learners'
                                        Reference Number:</label>
                                    <input type="text" name="lrn" id="lrn" v-model="form.lrn"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="136419******" required="true">
                                </div>
                                <div class="flex gap-2 w-full mb-2 ">
                                    <div class="w-full">
                                        <label for="first_name"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
                                            Name:</label>
                                        <input type="text" name="first_name" id="name" v-model="form.first_name"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Ex: Juan" required="true">
                                    </div>
                                    <div class="w-full">
                                        <label for="last_name"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last
                                            Name:</label>
                                        <input type="text" name="last_name" id="name" v-model="form.last_name"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Ex: Dela Cruz" required="true">
                                    </div>
                                </div>
                                <div class="mb-2">
                                    <label for="email"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email:</label>
                                    <input type="email" name="email" id="email" v-model="form.email"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@gmail.com" required="true">
                                </div>
                                <div class="mb-2">
                                    <label for="password"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password:</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••"
                                        v-model="form.password"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required="true">
                                </div>
                                <div class="mb-2">
                                    <label for="confirm-password"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm
                                        Password:</label>
                                    <input type="password" name="confirm-password" id="confirm-password"
                                        placeholder="••••••••" v-model="this.cPassword"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                </div>
                                <div v-show="form.role === 3" class="mb-2">
                                    <label for="code"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Class
                                        Code:</label>
                                    <input v-model="form.classCode" type="text" name="code" id="code" placeholder="ABC123"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                </div>

                            </div>

                            <button type="submit"
                                class="w-full text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create
                                an Account</button>
                            <p class="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <router-link to="/login"
                                    class="font-medium text-indigo-500 hover:underline dark:text-indigo-500">Login
                                    here</router-link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Form from 'vform';
import axios from 'axios';

export default {
    data() {
        return {
            data: {},
            form: new Form({
                role: '',
                lrn: '',
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                classCode: null
            }),
            cPassword: '',
            roles: [
                {
                    id: 2,
                    label: 'Teacher'
                },
                {
                    id: 3,
                    label: 'Student'
                }
            ],
            isTeacher: false,
            isStudent: false,
            createAccount: false
        }
    },
    methods: {
        submitForm() {
            console.log('clicked');
            this.$Progress.start();
            // prev: /register
            this.form.post('/api/user')
                .then((data) => {
                    this.$Progress.finish();
                    this.$router.push('/login');
                }).catch((error) => {
                    this.$Progress.fail();
                })
        },

        getRoles() {
            axios.get("/api/get-roles")
                .then((data) => {
                    // this.roles = data.data.data;
                })
                .catch((e) => {
                    errorMessage("Opps!", e.message, "top-right");
                });
        },

        createAcc() {
            this.createAccount = !this.createAccount
        }
    },

    // created(){
    //     this.getRoles();
    // }

}
</script>
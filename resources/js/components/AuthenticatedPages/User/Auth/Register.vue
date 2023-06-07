<template>
    <div class="flex justify-center items-center">
        <section class="bg-gray-50 dark:bg-[#141526] h-auto w-full py-[50px] transition-all">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen w-screen lg:py-0">
                <div
                    class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1
                            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white  text-center capitalize">
                            Register
                        </h1>
                        <form class="space-y-4" @submit.prevent="submitForm()">
                            <div class="flex flex-col text-white">
                                <p class="text-sm font-medium text-gray-900 dark:text-white text-left mb-2">Select a Role:</p>
                                <div class="flex items-center justify-center space-x-5">
                                    <select v-model="form.role" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                                        <option value="" disabled>- Select a Role -</option>
                                        <option @click.prevent="isTeacher = false" value="student">Student</option>
                                        <option @click.prevent="isTeacher = true" value="teacher">Teacher</option>
                                    </select>
                                    
                                </div>
                            </div>
                            <div>
                                <div class="flex gap-2 w-full mb-2 ">
                                    <div class="w-full">
                                        <label for="first_name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name:</label>
                                        <input type="text" name="first_name" id="name" v-model="form.first_name"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Ex: Juan" required="true">
                                    </div>
                                    <div class="w-full">
                                        <label for="last_name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name:</label>
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
                                        placeholder="••••••••" v-model="form.cPassword"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required="true">
                                </div>

                                <div v-if="isTeacher == false" class="mb-2">
                                    <label for="code"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Class Code:</label>
                                    <input v-model="form.classCode" type="text" name="code" id="code"
                                        placeholder="ABC123"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        >
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

export default {
    data() {
        return {
            data: {},
            form: new Form({
                role: '',
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                cPassword: '',
                classCode: null
            }),
            isTeacher: false,
            isStudent: false
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

        // changeRole() {
        //     this.isTeacher = !this.isTeacher;
        // }
    },

}
</script>
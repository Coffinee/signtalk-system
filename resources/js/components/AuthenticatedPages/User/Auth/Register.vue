<template>
    <div class="flex justify-center items-center">
        <section class="bg-gray-50 dark:bg-gray-900 h-auto w-full my-[50px]">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen w-screen lg:py-0">
                <div
                    class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1
                            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white  text-center capitalize">
                            Register
                        </h1>
                        <div class="flex flex-col text-white">
                            <p class="text-sm font-medium text-gray-900 dark:text-white text-center mb-2">Select a Role:</p>
                            <div class="flex items-center justify-center space-x-5">
                                <button @click.prevent="isTeacher = false"
                                    :class="isTeacher == false ? 'bg-indigo-500 text-white' : ''"
                                    class="border border-indigo-500 text-gray-900 hover:bg-indigo-500 hover:text-white w-full h-10 rounded-md dark:hover:bg-indigo-500 dark:text-white">
                                    Student
                                </button>
                                
                                <button @click.prevent="isTeacher = true"
                                :class="isTeacher ? 'bg-indigo-500 text-white' : ''"
                                class="border border-indigo-500 text-gray-900 hover:bg-indigo-500 hover:text-white w-full h-10 rounded-md dark:hover:bg-indigo-500 dark:text-white">
                                Teacher
                                </button>
                            </div>
                        </div>
                        <form class="space-y-4 md:space-y-6" @submit.prevent="submitForm()">
                            <div v-show="isTeacher == false">
                                <div>
                                    <label for="name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full
                                        Name:</label>
                                    <input type="text" name="name" id="name" v-model="form.fullName"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Ex: Juan T. Dela Cruz/Juan Dela Cruz" required="true">
                                </div>
                                <div>
                                    <label for="email"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email:</label>
                                    <input type="email" name="email" id="email" v-model="form.email"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@gmail.com" required="true">
                                </div>
                                <div>
                                    <label for="password"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password:</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••"
                                        v-model="form.password"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required="true">
                                </div>
                                <div>
                                    <label for="confirm-password"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm
                                        Password:</label>
                                    <input type="password" name="confirm-password" id="confirm-password"
                                        placeholder="••••••••" v-model="form.cPassword"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required="true">
                                </div>

                                <div>
                                    <label for="code"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Class Code:</label>
                                    <input type="text" name="code" id="code"
                                        placeholder="ABC123"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required="true">
                                </div>

                            </div>

                            <div v-show="isTeacher == true">
                                <div>
                                    <label for="name"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full
                                        Name:</label>
                                    <input type="text" name="name" id="name" v-model="form.fullName"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Ex: Juan T. Dela Cruz/Juan Dela Cruz" required="true">
                                </div>
                                <div>
                                    <label for="email"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email:</label>
                                    <input type="email" name="email" id="email" v-model="form.email"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@gmail.com" required="true">
                                </div>
                                <div>
                                    <label for="password"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password:</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••"
                                        v-model="form.password"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required="true">
                                </div>
                                <div>
                                    <label for="confirm-password"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm
                                        Password:</label>
                                    <input type="password" name="confirm-password" id="confirm-password"
                                        placeholder="••••••••" v-model="form.cPassword"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required="true">
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
                fullName: '',
                email: '',
                password: '',
                cPassword: ''
            }),
            isTeacher: false,
            isStudent: false
        }
    },
    methods: {
        submitForm() {
            this.$Progress.start();
            this.form.post('/api/register')
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
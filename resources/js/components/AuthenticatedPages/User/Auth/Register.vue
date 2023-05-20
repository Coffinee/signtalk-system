<template>
    <div class="flex justify-center items-center">
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen w-screen lg:py-0">
                <div
                    class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1
                            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white  text-center capitalize">
                            Register
                        </h1>
                        <form class="space-y-4 md:space-y-6" @submit.prevent="submitForm()">
                            <div>
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full
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
                                <input type="password" name="password" id="password" placeholder="••••••••" v-model="form.password"
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
                            <button type="submit"
                                class="w-full text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create
                                an Account</button>
                            <div class="relative flex justify-center items-center h-[2px] w-full bg-gray-300 ">
                                <p
                                    class="absolute text-sm text-center font-bold px-[5px] text-gray-300 dark:text-white bg-white dark:bg-gray-800">
                                    OR</p>
                            </div>
                            <div>
                                <button type="button"
                                    class=" w-full text-black dark:text-white bg-transparent border border-gray-300 dark:border-gray-600  dark:hover:bg-gray-600 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-[15px] px-5 py-2.5 text-center flex items-center justify-center gap-[10px] dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                    <img class="h-4 w-4" src="../../../../../assets/images/google-icon.png"
                                        alt="google-icon">
                                    <p>Sign up with Google</p>
                                </button>
                            </div>
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
    },

}
</script>
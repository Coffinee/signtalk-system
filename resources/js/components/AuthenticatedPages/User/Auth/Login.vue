<template>
    <!-- <button @click="showToast()" class="dark:text-white p-2 rounded-lg bg-indigo-500">Toast</button> -->
    <div class="flex justify-center items-center">
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6  mx-auto h-screen lg:py-0  w-screen">
                <div
                    class="w-full bg-white rounded-lg shadow dark:border  md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1
                            class="capitalize text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in
                        </h1>
                        <form @submit.prevent="handleLogin()" class="space-y-4 md:space-y-6">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                    email</label>
                                <input v-model="form.email" type="email" name="email" id="email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com" required="true">
                            </div>
                            <div>
                                <label for="password"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input :type="showPasswordToggle" v-model="form.password" name="password" id="password"
                                    placeholder="••••••••"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required="true">
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input v-model="showPassword" id="show-password" aria-describedby="show-password"
                                            type="checkbox"
                                            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-indigo-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-600 dark:ring-offset-gray-800">
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="show-password" class="text-gray-500 dark:text-gray-300">Show
                                            Password</label>
                                    </div>
                                </div>
                                <a href="#"
                                    class="text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-500">Forgot
                                    password?</a>
                            </div>
                            <button type="submit"
                                class="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Sign
                                in</button>
                            <div
                                class="relative flex justify-center items-center h-[2px] w-full bg-gray-300 dark:bg-gray-300">
                                <p
                                    class="absolute text-sm text-center font-bold px-[5px] text-gray-300 dark:text-white bg-white dark:bg-gray-800">
                                    OR</p>
                            </div>
                            <div>
                                <button type="button"
                                    class=" w-full text-black dark:text-white bg-transparent border border-gray-300 dark:border-gray-600  dark:hover:bg-gray-600 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-[15px] px-5 py-2.5 text-center flex items-center justify-center gap-[10px] dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                    <img class="h-4 w-4" src="../../../../../assets/images/google-icon.png"
                                        alt="google-icon">
                                    <p>Sign in with Google</p>
                                </button>
                            </div>
                            <p class="text-center text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <router-link to="/register"
                                    class="font-medium text-indigo-600 hover:underline dark:text-indigo-500">Register
                                    here</router-link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
  import {ref, computed} from 'vue';
  import {userAuthStore} from '@/store/auth';

  const form = ref({
    email: '',
    password: '',
  });

  const showPassword = ref(false)
  const store = userAuthStore();

  function handleLogin(){
    store.login(form);
  }

  const showPasswordToggle = computed(() => {
    return showPassword.value ? 'text' : 'password';
  });


</script>

<!--  
<script>

import { ref } from 'vue';
import { userAuthStore } from '@/store/auth';

export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      showPassword: false,
    };
  },
  methods: {
    handleLogin() {
      const store = userAuthStore();
      store.login(this.form);
    },
  },
  computed:{
    showPasswordToggle() {
      return this.showPassword ? 'text' : 'password';
    },
  }
};

</script>-->

<template>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white  text-center capitalize">
                        Create Account
                    </h1>
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email:</label>
                            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="true">
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password:</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="true">
                        </div>
                        <div>
                            <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password:</label>
                            <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="true">
                        </div>
                        <div class="flex items-start justify-center">
                            <div class="flex items-center h-5">
                                <input id="terms"  type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-indigo-500 focus:ring-3 focus:ring-indigo-300 dark:border-gray-600 dark:focus:ring-indigo-600 dark:ring-offset-gray-800" required="true">
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium hover:underline text-indigo-500" href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                        <button type="submit" class="w-full text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create an account</button>
                        <div class="relative flex justify-center items-center h-[2px] w-full bg-gray-300 ">
                            <p class="absolute text-sm text-center font-bold px-[5px] text-gray-300 dark:text-white bg-white dark:bg-gray-800">OR</p>
                        </div>
                        <div class="px-6 sm:px-0 max-w-sm">
                            <button type="button" class=" w-full text-black dark:text-white bg-transparent border border-gray-300 dark:border-gray-600  dark:hover:bg-gray-600 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-[15px] px-5 py-2.5 text-center flex items-center justify-center gap-[10px] dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                <!-- <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg> -->
                                <img class="h-4 w-4" src="../../../../../../assets/images/google-icon.png" alt="google-icon">
                                <p>Sign up with Google</p>
                            </button>
                        </div>
                        <p class="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                            Already have an account? <router-link to="#" class="font-medium text-indigo-500 hover:underline dark:text-indigo-500">Login here</router-link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
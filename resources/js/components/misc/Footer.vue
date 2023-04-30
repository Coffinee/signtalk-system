<template>
    <footer class="bg-white shadow dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
                    <p class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        <span>Sign</span>
                        <span class="text-indigo-500 font-bold">Talk</span> 
                    </p>
                </a>
                <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <router-link to="/Student/About" class="mr-4 hover:underline md:mr-6 ">About</router-link>
                    </li>
                    <li>
                        <router-link to="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</router-link>
                    </li>
                    <li>
                        <router-link to="#" class="mr-4 hover:underline md:mr-6 ">Licensing</router-link>
                    </li>
                    <li>
                        <router-link to="#" class="hover:underline">Contact</router-link>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">SignTalk™</a>. All Rights Reserved.</span>
        </div>
    </footer>
</template>
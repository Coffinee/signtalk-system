<script>
import { userAuthStore } from '@/store/auth';
import Accordion from '../../../../misc/Accordion.vue'

export default {
    name:'Profile',

    components:{
        Accordion,
    },
    data(){
        return{
            user_fname: userAuthStore().user.first_name,
            user_lname: userAuthStore().user.last_name,
            email: userAuthStore().user.email,
        }
    }
}
</script>
<template>
    <div class="p-3 h-screen w-full">
        <Accordion :sectiontitle="'View Profile'" :accordionColor="'bg-[#3E3E3E]'" :setOpen="false" >
            <div class="sm:p-[30px] md:p-[50px] py-[20px]">
                <div class="flex justify-end">
                    <button type="button" class="text-white dark:text-white hover:text-blue-800', 'group rounded-xl px-5 py-2 text-sm leading-6 tracking-wide font-medium bg-indigo-500 hover:bg-indigo-600 flex items-center gap-[5px]">
                        Edit
                        <svg class="h-4 w-4" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </button>
                </div>
                <dl class="divide-y divide-gray-100 ">
                    <div class="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Firstname:</dt>
                        <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        <span class="flex-grow dark:text-gray-400">{{ user_fname }}</span>
                        </dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Lastname:</dt>
                        <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        <span class="flex-grow dark:text-gray-400">{{ user_lname }}</span>
                        </dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Email Address:</dt>
                        <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        <span class="flex-grow dark:text-gray-400">{{ email }}</span>
                        </dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Class Code</dt>
                        <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        <span class="flex-grow dark:text-gray-400">M4M4M0</span>
                        </dd>
                    </div>
                </dl>
            </div>
        </Accordion>

        <Accordion :sectiontitle="'Change Password'" :setOpen="false" :accordionColor="'bg-[#3E3E3E]'">
            <form class="flex flex-col justify-center items-center dark:bg-gray-900 sm:p-[30px] md:p-[50px] h-full w-full">
                <div class="sm:w-full md:w-[60%] w-full">
                    <div class="mb-5">
                        <label for="password" class="block mb-2 text-sm font-semibold  text-black dark:text-white">Current Password:</label>
                        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required>
                    </div>
                    <div class="mb-5">
                        <label for="new-password" class="block mb-2 text-sm font-semibold text-black dark:text-white">New Password:</label>
                        <input type="password" id="new-password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required>
                    </div>
                    <div class="mb-5">
                        <label for="confirm-new-password" class="block mb-2 text-sm font-semibold text-black dark:text-white">Confirm New Password:</label>
                        <input type="password" id="confirm-new-password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required>
                    </div>
                </div>
                <button type="submit" class="text-white dark:text-white hover:text-blue-800', 'group rounded-xl px-5 py-2 text-sm leading-6 tracking-wide font-medium bg-indigo-500 hover:bg-indigo-600 flex flex-col text-center">Submit</button>
            </form>
        </Accordion>

        <Accordion :sectiontitle="'Recovery Email'" :setOpen="false"  :accordionColor="'bg-[#3E3E3E]'">
            <h1 class="dark:text-white text-center">Recovery Email</h1>
        </Accordion>
    </div>
</template>

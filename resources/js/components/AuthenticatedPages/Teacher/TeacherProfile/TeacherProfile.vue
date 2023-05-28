<template>
    <div class="border rounded-md shadow-sm h-[520px] w-full flex flex-wrap">
        <div class="flex flex-wrap w-full h-full">
            <div class="w-[25%]  h-full flex flex-col rounded border  items-center ">
                <div class="flex flex-col justify-center items-center px-3 py-5 ">
                    <h1 class="uppercase text-[26px] font-bold  text-indigo-500">Settings</h1>
                    <form class="flex flex-col justify-center items-center pt-5 ">  
                        <div class="relative">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" id="default-search" class=" text-[15px] focus:outline-none block py-2 pl-10 w-full rounded-md border" placeholder="Search View, Change ..." required>
                            
                        </div>
                    </form>
                </div>

                <div class="flex flex-col items-center py-3 gap-3 border-t-2 h-auto overflow-auto w-full px-3">
                    <div v-for="items in myArray" :key="items.id" class="w-full border rounded-md px-3 py-2">
                        <a href="#" class="text-black font-medium text-[15px] ">{{ items.name }}</a>
                    </div>
                </div>
            </div>
            <div class="border h-full w-[75%]">
                <div class="px-3 py-5">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    data() {
        return {
            myArray: [
          { id: 1, name: 'Object 1', href: '/'},
          { id: 2, name: 'Object 2', href: '/'},
          { id: 3, name: 'Object 3', href: '/' }
        ]

        }
    },


}
</script>
<template>
    <div class="flex justify-center r p-3 h-screen w-full">
        <div>
            <h1 class="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Website </span>Apperance:</h1>
            <p class="text-md font-normal text-gray-500  dark:text-gray-400">Choose which color theme you'd like to use for the website.</p>
            <ul class="grid w-full gap-6 md:grid-cols-2 mt-[20px]">
                <li>
                    <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required>
                    <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                        <div class="block">
                            <div class="w-full text-[30px] font-semibold">Dark</div>
                            <!-- <div class="w-full">Good for small websites</div> -->
                        </div>
                        <MoonIcon class="w-[30px] h-[30px] fill-gray-400"/>
                    </label>
                </li>
                <li>
                    <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer">
                    <label for="hosting-big" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div class="block">
                            <div class="w-full text-[30px] font-semibold">Light</div>
                            <!-- <div class="w-full">Good for large websites</div> -->
                        </div>
                        <SunIcon class="w-[30px] h-[30px] fill-gray-400"/>
                    </label>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import { useDark, useToggle } from '@vueuse/core';
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline';
const isDark = useDark();
const toggleDark = useToggle(isDark);
 
</script>
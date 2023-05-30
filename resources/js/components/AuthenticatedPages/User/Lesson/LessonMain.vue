<script >
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { ChevronRightIcon } from '@heroicons/vue/20/solid'
export default {
    components:{
        Popover, PopoverButton, PopoverPanel, ChevronDownIcon, ChevronRightIcon
    },  
    data() {
        return {
            alphabet: [
                { name: 'Letters', href: '#', icon: ChevronRightIcon },
                { name: 'Consonant', href: '#', icon: ChevronRightIcon },
                { name: 'Vowels', href: '#', icon: ChevronRightIcon },
                { name: 'Spelling', href: '#', icon: ChevronRightIcon },
            ],
            numbers: [
                { name: 'Once', href: '#', icon: ChevronRightIcon },
                { name: 'Tens', href: '#', icon: ChevronRightIcon },
                { name: 'Hundreds', href: '#', icon: ChevronRightIcon },
                { name: 'Thousands', href: '#', icon: ChevronRightIcon }
            ],
        }
    }
}

</script>
<template>
    <div class="flex flex-col justify-center w-auto h-auto bg-white dark:bg-transparent">
        <!-- <div class="sticky top-[69px] z-[40]">
            <Popover class="relative isolate ">
                <div class="bg-white dark:bg-transparent py-5">
                    <div class="mx-auto max-w-7xl px-6 lg:px-8">
                        <PopoverButton class="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300">
                            View Lesson
                            <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
                        </PopoverButton>
                    </div>
                </div>
                <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 -translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-1">
                    <PopoverPanel class="absolute inset-x-0 top-0 -z-10 bg-white  dark:bg-gray-800 pt-16 shadow-lg ring-1 ring-gray-900/5">
                        <div class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-6 py-10 lg:px-8">
                            <div class="flex justify-around flex-wrap gap-6 sm:gap-x-8">
                                <div>
                                    <h3 class="text-sm font-medium leading-6 text-gray-500 dark:text-gray-300">Alphabet</h3>
                                    <div class="mt-6 flow-root">
                                        <div class="-my-2">
                                        <a v-for="item in alphabet" :key="item.name" :href="item.href" class="flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:underline">
                                            <component :is="item.icon" class="h-6 w-6 flex-none text-gray-400" aria-hidden="true" />
                                            {{ item.name }}
                                        </a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 class="text-sm font-medium leading-6 text-gray-500 dark:text-gray-300">Numbers</h3>
                                    <div class="mt-6 flow-root">
                                        <div class="-my-2">
                                        <a v-for="item in numbers" :key="item.name" :href="item.href" class="flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:underline">
                                            <component :is="item.icon" class="h-6 w-6 flex-none text-gray-400" aria-hidden="true" />
                                            {{ item.name }}
                                        </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </PopoverPanel>
                </transition>
            </Popover>
        </div> -->
        <div class="w-full sm:w-full md:w-[70%] self-center py-10 px-5">
            <div>
                <h1 class="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">LESSON 1</h1>
                <p class="mb-6 text-center text-lg font-normal text-gray-500 lg:text-xl sm:px-16 dark:text-gray-400">ALPHABETS</p>
            </div>
            <div class="flex justify-between mt-3">
                <a href="#"
                    class="items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Previous
                </a>
                <a href="#"
                    class="items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Next
                </a>
            </div>

            <div class="h-auto flex flex-col gap-[20px] border border-gray-200 rounded-lg shadow dark:border-gray-700 p-5 mt-3">
                <h2 class="text-2xl font-extrabold text-black dark:text-white text-center">Learning ASL Alphabet</h2>
                <div class="flex justify-center w-full">
                    <div class="w-full sm:w-full md:w-[80%] z-30">
                        <iframe class="w-full aspect-video border-none" src="https://www.youtube.com/embed/cGavOVNDj1s" title="American Sign Language Alphabet | Learn American Sign Language Letters" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>             
                </div>
                <p class="text-black dark:text-white text-justify">
                    The ASL alphabet is an essential and foundational part of American Sign Language. If you want to be able to sign with Deaf friends, colleagues, or family members, you definitely have to learn more than the alphabet.
                </p>
                <div class="flex justify-center w-full">                   
                    <img class="w-full sm:w-full md:w-[80%] rounded-lg" src="https://m.media-amazon.com/images/I/71MhODbYvJL.jpg" alt="image description">
                </div>
            </div>
        </div>
    </div>
</template>
 
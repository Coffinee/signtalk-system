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
        <Popover class="relative isolate z-40">
            <div class="bg-white py-5">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <PopoverButton class="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                        View Lesson
                        <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
                    </PopoverButton>
                </div>
            </div>
            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 -translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-1">
                <PopoverPanel class="absolute inset-x-0 top-0 -z-10 bg-white pt-16 shadow-lg ring-1 ring-gray-900/5">
                    <div class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-6 py-10 lg:px-8">
                        <div class="flex justify-around flex-wrap gap-6 sm:gap-x-8">
                            <div>
                                <h3 class="text-sm font-medium leading-6 text-gray-500">Alphabet</h3>
                                <div class="mt-6 flow-root">
                                    <div class="-my-2">
                                    <a v-for="item in alphabet" :key="item.name" :href="item.href" class="flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900 hover:underline">
                                        <component :is="item.icon" class="h-6 w-6 flex-none text-gray-400" aria-hidden="true" />
                                        {{ item.name }}
                                    </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 class="text-sm font-medium leading-6 text-gray-500">Numbers</h3>
                                <div class="mt-6 flow-root">
                                    <div class="-my-2">
                                    <a v-for="item in numbers" :key="item.name" :href="item.href" class="flex gap-x-4 py-2 text-sm font-semibold leading-6 text-gray-900 hover:underline">
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
        <div class="w-[70%] self-center py-10 px-5">
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

            <div class="h-4/5 border border-gray-200 rounded-lg shadow dark:border-gray-700 p-5 mt-3 overflow-auto">
                <p class="dark:text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolore eos ut doloremque odit ea minus nostrum, praesentium iste molestias eum magnam sunt iusto nesciunt maiores quae quam, molestiae quaerat.
                </p>
                <div class="self-center relative w-full overflow-hidden aspect-video">
                    <iframe class="absolute inset-0 w-[100%] h-[100%] border-none" src="https://www.youtube.com/embed/uKKvNqA9N20" title="Greetings in ASL | ASL - American Sign Language" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                
            </div>
        </div>
    </div>
</template>
 
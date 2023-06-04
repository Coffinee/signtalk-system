<script >
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { ChevronRightIcon } from '@heroicons/vue/20/solid'
import axios from 'axios'
export default {
    props: {
        data: {
            type: Array,
            default: {},
        }
    },
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
            lessons: {},
            data: {}
        }
    },
    methods:{
        async getLessons() {
            await axios.get('/api/getlesson').then((data) => {
                this.lessons = data.data.data;
                console.log(this.lessons.title)
            }).catch((e) => {
                errorMessage('Opps!', e.message, 'top-right')
            });
        },
    },
    created(){
        this.getLessons();
    }
}

</script>
<template>
    <div class="flex flex-col justify-center w-auto h-auto bg-white dark:bg-transparent">
        <div class="w-full sm:w-full md:w-[70%] self-center py-10 px-5">
            <div>
                <h1 class="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">LESSON 1</h1>
                <p class="mb-6 text-center text-lg font-normal text-gray-500 lg:text-xl sm:px-16 dark:text-gray-400">{{ this.lessons.title }}</p>
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
                        <div ref="videoContainer" class="video-container" v-html="this.dictionary.video_link"></div>
                        <!-- <iframe class="w-full aspect-video border-none" src="https://www.youtube.com/embed/cGavOVNDj1s" title="American Sign Language Alphabet | Learn American Sign Language Letters" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
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
 
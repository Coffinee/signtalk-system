<template>
    <div class="flex flex-col justify-center w-auto h-auto bg-white dark:bg-transparent">
        <div class="w-full sm:w-full md:w-[70%] self-center py-10 px-5">
            <div>
                <h1
                    class="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    LESSON 1</h1>
                <p class="mb-6 text-center text-lg font-normal text-gray-500 lg:text-xl sm:px-16 dark:text-gray-400">{{
                    this.lessons.title }}</p>
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

            <div
                class="h-auto flex flex-col items-center justify-center gap-[20px] border border-gray-200 rounded-lg shadow dark:border-gray-700 p-5 mt-3">
                <!-- <h2 class="text-2xl font-extrabold text-black dark:text-white text-center">Learning ASL Alphabet</h2> -->
                <div class="flex justify-center w-full">
                    <div class="w-full sm:w-full md:w-[80%] z-30">
                        <div ref="videoContainer" class="video-container" v-html="this.lessons.refLink"></div>
                        <!-- <iframe class="w-full aspect-video border-none" src="https://www.youtube.com/embed/cGavOVNDj1s" title="American Sign Language Alphabet | Learn American Sign Language Letters" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
                    </div>
                </div>
                <p class="md:w-[80%] text-light text-sm dark:text-white text-justify indent-10"
                    v-html="this.lessons.content">
                </p>
                <div class="flex justify-center w-full">
                    <img class="w-full sm:w-full md:w-[80%] rounded-lg"
                        :src="'/uploads/lessons/' + this.lessons.image_file">
                </div>
            </div>
        </div>
    </div>
</template>
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
    components: {
        Popover, PopoverButton, PopoverPanel, ChevronDownIcon, ChevronRightIcon
    },
    data() {
        return {
            lessons: {},
            data: {}
        }
    },
    methods: {
        async getLessons() {
            await axios.get('/api/getlesson').then((data) => {
                this.lessons = data.data.data;
                console.log(this.lessons.title)
            }).catch((e) => {
                errorMessage('Opps!', e.message, 'top-right')
            });
        },
        initResizeListener() {
            const videoContainer = this.$refs.videoContainer;
            const iframe = videoContainer.querySelector('iframe');

            // Handle resize event
            const handleResize = () => {
                const { contentWindow } = iframe;

                // Send postMessage to the iframe
                contentWindow.postMessage('resize', '*');
            };

            // Add resize event listener
            window.addEventListener('resize', handleResize);

            // Clean up listener when component is destroyed
            this.$once('hook:beforeDestroy', () => {
                window.removeEventListener('resize', handleResize);
            });
        },
    },
    created() {
        this.getLessons();
    }
}

</script>

<style>
.video-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    /* 16:9 aspect ratio (9 / 16 = 0.5625 or 56.25%) */
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
 
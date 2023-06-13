<template>
    <div class="flex flex-col justify-center w-auto h-auto bg-white dark:bg-transparent">
        <router-link to="/lesson" class="m-[20px]">
            <ChevronLeftIcon class="w-[50px] h-[50px] fill-indigo-500" />
        </router-link>
        <div class="w-full sm:w-full md:w-[70%] self-center py-10 px-5">
            <div>
                <h1
                    class="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    LESSON</h1>
                <p class="mb-6 text-center text-lg font-normal text-gray-500 lg:text-xl sm:px-16 dark:text-gray-400">{{
                    lessonTitle }}</p>
            </div>
            <div
                class="h-auto flex flex-col items-center justify-center gap-[20px] border border-gray-200 rounded-lg shadow dark:border-gray-700 p-5 mt-3">
                <!-- <h2 class="text-2xl font-extrabold text-black dark:text-white text-center">Learning ASL Alphabet</h2> -->
                <div class="flex justify-center w-full">
                    <div class="w-full sm:w-full md:w-[80%] z-30">
                        <div ref="videoContainer" class="video-container" v-html="lessonRef"></div>
                        <!-- <iframe class="w-full aspect-video border-none" src="https://www.youtube.com/embed/cGavOVNDj1s" title="American Sign Language Alphabet | Learn American Sign Language Letters" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
                    </div>
                </div>
                <p class="md:w-[80%] text-light text-sm dark:text-white text-justify indent-10" v-html="lessonContent">
                </p>
                <div class="flex justify-center w-full">
                    <img class="w-full sm:w-full md:w-[80%] rounded-lg" :src="lessonImage">
                </div>
                <form @submit.prevent="finished" class="w-full">
                    <button type="submit" :disabled="this.form.status" class="py-2 w-full text-white text-sm rounded-md" :class="this.form.status ? 'bg-gray-500' : 'bg-indigo-500'">
                        {{ !this.form.status ? 'Finish Lesson?' : 'Completed' }}
                    </button>
                </form>
            </div>

        </div>
    </div>
</template>
<script >
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { ChevronDownIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/20/solid'
import axios from 'axios'
import Form from 'vform'
import { userAuthStore } from '@/store/auth';

const store = userAuthStore();

export default {
    props: {
        data: {
            type: Array,
            default: {},
        }
    },
    components: {
        Popover, PopoverButton, PopoverPanel, ChevronDownIcon, ChevronRightIcon, ChevronLeftIcon
    },
    data() {
        return {
            lessons: {},
            lessonTitle: '',
            lessonContent: '',
            lessonImage: '',
            lessonRef: '',
            lessonId: '',
            form: new Form({
                student_id: '',
                lesson_id: '',
                status: false
            })
        }
    },
    methods: {
        async getData() {
            const currentURL = window.location.href;
            const match = currentURL.match(/\/(\d+)$/);
            const id = match ? match[1] : null;

            await axios.get('/api/lesson/' + id).then((data) => {
                let lesson = data.data.data;
                this.lessonTitle = lesson.title;
                this.lessonContent = lesson.content;
                this.lessonImage = '/uploads/lessons/' + lesson.image_file;
                this.lessonRef = lesson.refLink;

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

        finished() {
            this.form.student_id = store.user.id;
            this.form.lesson_id = window.location.href.split('/').pop();
            this.form.status = true;
            
            this.form.post('/api/finish')
            .then((data) => {
                this.$Progress.finish();
                }).catch((error) => {
                    this.$Progress.fail();
                })
        }, 

    },
    created() {
        this.getData();
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
 
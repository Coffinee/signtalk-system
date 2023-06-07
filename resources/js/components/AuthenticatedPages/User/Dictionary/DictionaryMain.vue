<template>
    <!-- Main Content -->
    <div class="flex flex-col justify-center items-center gap-[20px] w-full bg-white dark:bg-[#141526] p-5"
        :class="!hasWord ? 'h-screen' : 'h-auto'">
        <div class="flex flex-col gap-[25px] w-full md:w-[80%] lg:w-[60%]">
            <div :class="!hasWord ? '' : ''">
                <h1
                    class="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    Dictionary</h1>
                <p class="mb-6 text-center text-lg font-normal text-gray-500 lg:text-lg sm:px-16 dark:text-gray-400">Search
                    a word to see its equivalent in American Sign Language (ASL)</p>

                <label for="default-search"
                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <input v-model="this.word" type="search" id="default-search"
                        class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search..." @keyup.enter="searchQuery" required>
                    <button @click.prevent="searchQuery"
                        class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </div>
            <!-- Result -->
            <div class="h-auto rounded-lg dark:border-gray-700 p-5"
                :class="this.word === '' ? 'border-none' : 'border-gray-200'">
                <!-- <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Result:</h5> -->
                <div v-if="hasWord" class="flex flex-col gap-[10px]">
                    <div class="flex flex-col md:flex-row gap-[10px]">
                        <div class="flex flex-col items-center justify-center w-full md:w-[50%]">
                            <h5
                                class="mb-2 text-xl md:text-4xl font-bold tracking-tight uppercase text-gray-900 dark:text-white">
                                {{ this.dictionary.word }}
                            </h5>
                            <p class="text text-[15px] capitalize text-gray-500 dark:text-gray-400">{{
                                this.dictionary.description }}</p>
                        </div>
                        <div class="w-full md:w-[50%]">
                            <img class="w-full sm:w-full rounded-lg"
                                :src="'/uploads/dictionary/' + this.dictionary.image_file" alt="">
                        </div>
                    </div>
                    <div class="self-center relative w-full overflow-hidden aspect-video">
                        <div ref="videoContainer" class="video-container" v-html="this.dictionary.video_link"></div>
                        <!-- <iframe class="absolute inset-0 w-[100%] h-[100%] border-none" :src="this.dictionary.video_link "  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                        -->
                    </div>
                </div>

                <div v-else class="w-full h-full flex flex-col justify-center items-center">
                    <img src="/images/nothing.png" class="w-[400px]">
                    <p class="font-light tracking-widest">Dictionary | Nothing to show ...</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CardButton from '../../../misc/CardButton.vue';
import axios from 'axios';
export default {
    name: "Dictionary",

    props: {
        data: {
            type: Array,
            default: {}
        },
    },
    components: {
        CardButton,
    },
    data() {
        return {
            data: {},
            dictionary: {},
            word: '',
            hasWord: false,
            queryNull: false
        }
    },

    methods: {
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
        async searchQuery() {
            await axios.get('/api/getword?word=' + this.word).then((data) => {
                this.dictionary = data.data.data;

                if (this.dictionary != null) {
                    this.hasWord = true;
                    this.queryNull = false;
                }
                else {
                    this.queryNull = true;
                    this.hasWord = false;

                }

            }).catch((e) => {
                errorMessage('Opps!', e.message, 'top-right')
            });
        },
    },
    mounted() {
        // this.$nextTick(() => {
        // this.initResizeListener();
        // });
    },

    created() {

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
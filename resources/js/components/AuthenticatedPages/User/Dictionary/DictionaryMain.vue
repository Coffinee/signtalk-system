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
            hasWord: false
        }
    },

    methods: {
        async searchQuery() {
            await axios.get('/api/getword?word=' + this.word).then((data) => {
                this.dictionary = data.data.data;

                if (this.dictionary != null) {
                    this.hasWord = true;
                }

            }).catch((e) => {
                errorMessage('Opps!', e.message, 'top-right')
            });
        },
    },

    created() {
    }

}

</script>
<template>
    <!-- Main Content -->
    <div class="flex justify-center sm:items-center md:items-start w-auto h-screen md:h-auto bg-white dark:bg-[#111827] ">
        <div class="flex flex-col gap-[25px] py-10 px-5">
            <div :class="!hasword ? 'h-full flex-col justify-center items-center' : ''">
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
                        placeholder="Search..." required>
                    <button @click.prevent="searchQuery"
                        class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </div>

            <!-- Result -->
            <div v-if="hasWord" class="border border-gray-200 rounded-lg shadow dark:border-gray-700 p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Result:</h5>
                <div class="flex flex-col  ">
                    <div>
                        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {{ this.dictionary.word }}
                            <span class="text-lg italic font-normal">(adjective)</span>
                        </h5>
                        <p class="mb-3 text-gray-500 dark:text-gray-400">{{ this.dictionary.description }}</p>
                    </div>
                    <div class="self-center relative w-full overflow-hidden aspect-video">
                        <!-- <iframe class="absolute inset-0 w-[100%] h-[100%] border-none" src="https://www.youtube.com/embed/uKKvNqA9N20" title="Greetings in ASL | ASL - American Sign Language" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
                        <video class="absolute inset-0 w-[100%] h-[100%] border-none" muted controls autoplay>
                            <source src="../../../../../assets/videos/lebrongalit.mp4" type="video/mp4">
                        </video>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
        <div class="flex justify-between px-[30px] pt-[30px]">
            <h5 class="text-2xl text-left font-bold text-black mb-3">Quiz</h5>
            <router-link to="/admin/quiz/add">
                <button type="button"
                    class="text-white hover:bg-gray-900/90 bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5">Add
                    New</button>
            </router-link>
        </div>
        <div v-if="questions != ''" class="flex justify-center flex-wrap gap-[20px] my-10">
            <div class="max-w-xs h-[230px] bg-white border border-gray-200 rounded-lg shadow" v-for="item in questions"
                :key="item.id">
                <div class="h-[65%]">
                    <router-link to="#">
                        <img class="w-full h-full rounded-t-lg" :src="'/uploads/quiz/' + item.banner" alt="">
                    </router-link>
                </div>
                <div class="flex flex-col justify-center h-[35%] px-[10px]">
                    <div class="flex justify-between mb-2">
                        <h5 class="text-md font-normal tracking-wide uppercase text-gray-900">{{ item.title }}</h5>
                        <span class="bg-gray-50 shadow-md text-gray-800 text-sm font-medium mr-2 px-2 py-0.5 rounded">{{
                            item.question_item.length }} items</span>
                    </div>
                    <div>
                        <router-link :to="'/admin/quiz/edit/' + item.id">
                            <button type="button"
                                class="flex items-center gap-3 focus:outline-none text-white bg-gray-900 hover:bg-gray-900/90 font-medium rounded-lg text-sm px-5 py-2">
                                Edit Quiz
                                <svg class="h-4 w-4" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="w-full h-screen">
            <div class="mt-[8%] flex flex-col items-center">
                <img src="/images/nothing.png" class="w-[400px]">
                <p class="font-light tracking-widest">Quiz | Nothing to show ...</p>
            </div>
        </div>
    </div>

    <!-- <div v-else class="w-full flex flex-col justify-center items-center mt-20">
        <img src="/Images/nothing.png" class="w-[400px]">
        <p class="font-light tracking-widest">Nothing to show ...</p>
    </div> -->
</template>

<script>
import {
    InformationCircleIcon,
    QueueListIcon,
    ClockIcon,
    ChartBarIcon,
    PlayIcon
} from '@heroicons/vue/24/outline';

export default {
    components: {
        InformationCircleIcon, QueueListIcon,
        ClockIcon, ChartBarIcon, PlayIcon
    },
    data() {
        return {
            questions: {},
        }
    },
    methods: {
        getQuestions() {
            axios.get('/api/questions').then((data) => {
                this.questions = data.data.data;
            }).catch((e) => {
                errorMessage('Opps!', e.message, 'top-right')
            });
        }
    },
    created() {
        this.getQuestions();
    }
}
</script>
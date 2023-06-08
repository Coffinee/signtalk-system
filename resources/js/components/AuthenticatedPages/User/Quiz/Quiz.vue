<template>
    <div v-if="this.questions != ''">
        <div class="h-screen md:h-screen flex flex-col items-center justify-center">
            <div class="flex flex-col items-center justify-center mb-[50px]">
                <p class="mb-[20px] text-2xl text-black text-center font-bold dark:text-white">Quiz</p>
                <div class="flex justify-center flex-wrap gap-[20px]">
                    <div @click="previewQuiz(item)" v-for="item in questions" :key="item.id"
                        class="cursor-pointer max-w-xs h-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div class="h-[65%]">
                            <img class="w-full h-full rounded-t-lg" :src="'/uploads/quiz/' + item.banner" alt="">
                        </div>
                        <div class="flex flex-col justify-center h-[35%] px-[10px]">
                            <div class="flex justify-between my-3">
                                <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{ item.title }}
                                </h5>
                                <span
                                    class="bg-gray-50 shadow-md text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{{
                                        item.question_item.length }} items</span>
                            </div>
                            <div>
                                 <button type="button"
                                    class="focus:outline-none text-white bg-indigo-500 hover:bg-indigo-600 font-medium rounded-lg text-sm px-5 py-2.5 w-full">View
                                    Quiz</button>
                            </div>
                        </div>
                    </div>
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

    <Modal :show="modalOpen" @close="modalToggle" :title="quizTitle" :widthModal="'w-[600px]'" :heightModal="'h-auto'">
        <!-- description, no of items, duration, difficulty -->
        <div class="flex flex-col gap-3 h-full">
            <div class="flex flex-col justify-between items-center gap-2 sm:flex-col md:flex-row h-full">
                <div class="w-full h-full">
                    <img class="w-full rounded-md" :src="'/uploads/quiz/' + quizBanner" alt="">
                </div>
                <div class="w-full md:w-[45%] dark:text-white h-full flex flex-col gap-3 text-[13px]">
                    <div class="flex flex-wrap gap-3">
                        <div
                            class="flex items-center w-full gap-3 px-3 py-[9px] rounded-md bg-gray-50 dark:bg-gray-500 shadow-md">
                            <InformationCircleIcon class="w-[25px] h-[25px] stroke-black dark:stroke-white stroke-2" />
                            <p class="text-gray-600 dark:text-white capitalize">{{ quizType }}</p>
                        </div>
                        <div
                            class="flex items-center w-full gap-3 px-3 py-[9px] rounded-md bg-gray-50 dark:bg-gray-500 shadow-md">
                            <QueueListIcon class="w-[25px] h-[25px] stroke-black dark:stroke-white stroke-2" />
                            <p class="text-gray-600 dark:text-white capitalize">{{ quizLength }} items</p>
                        </div>
                        <div
                            class="flex items-cente w-full gap-3 px-3 py-[9px] rounded-md bg-gray-50 dark:bg-gray-500 shadow-md">
                            <ClockIcon class="w-[25px] h-[25px] stroke-black dark:stroke-white stroke-2" />
                            <p class="text-gray-600 dark:text-white capitalize">{{ quizDuration }} minutes</p>
                        </div>
                    </div>
                </div>
            </div>
            <router-link :to="'/quiz/main/' + quizID"
                class="flex items-center justify-center w-full text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700">
                <PlayIcon class="w-[20px] h-[20px] stroke-white dark:stroke-white stroke-2" />
                <span class="pl-3">
                    Start Quiz
                </span>
            </router-link>
        </div>
    </Modal>
</template>
<script>
import Modal from '../../../misc/Modal.vue'
import {
    InformationCircleIcon,
    QueueListIcon,
    ClockIcon,
    ChartBarIcon,
    PlayIcon
} from '@heroicons/vue/24/outline';

export default {
    components: {
        Modal, InformationCircleIcon, QueueListIcon,
        ClockIcon, ChartBarIcon, PlayIcon
    },
    data() {
        return {
            questions: {},
            quizTitle: '',
            quizDuration: '',
            quizBanner: '',
            quizID: '',
            quizLength: '',
            quizType: '',
            modalOpen: false,
        }
    },
    methods: {
        modalToggle() {
            this.modalOpen = false;
        },
        previewQuiz(data) {
            this.modalOpen = !this.modalOpen
            this.quizTitle = data.title
            this.quizDuration = data.duration
            this.quizBanner = data.banner
            this.quizLength = data.question_item.length
            this.quizID = data.id
            this.quizType = data.type == 'true-or-false' ? 'True or False' : 'Multiple Choice'
        },
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
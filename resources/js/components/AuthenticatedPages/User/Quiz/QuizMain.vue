<template>
    <div class="flex justify-center h-auto w-full">
        <div class="h-auto w-[95%] md:w-[60%] my-[5px] shadow-md">
            <div class="border-b border-gray-300 dark:border-gray-600">
                <div class="flex justify-center items-center h-[50px] w-full bg-indigo-500 dark:bg-gray-600 rounded-t-md">
                </div>
                <div class="flex flex-col px-[15px] md:px-[50px] py-[20px]">
                    <div class="flex justify-between items-center flex-wrap w-full">
                        <h5 class="text-2xl text-black text-center font-bold dark:text-white">{{ quizTitle }}</h5>
                        <div class="flex items-center gap-[5px]">
                            <ClockIcon class="w-[25px] h-[25px] fill-black dark:stroke-white" />
                            <p class="text-[20px] text-black font-semibold  dark:text-white">
                                <vue-countdown :time="quizDuration * 60 * 1000" v-slot="{ days, hours, minutes, seconds }" ref="countdown" @progress="getRemainingTime">
                                    Time Remaining： {{ minutes }}mins, {{ seconds }}secs.
                                </vue-countdown>

                                <!-- <span class="font-normal underline text-gray-700  dark:text-gray-400">{{ quizDuration }}</span> -->
                            </p>
                        </div>
                    </div>
                    <div class="flex justify-between flex-wrap-reverse gap-0 sm:gap-[20px] text-sm mt-3">
                        <div>
                            <p class="text-gray-700 dark:text-gray-400">
                                <span class="font-semibold text-black dark:text-white">Quiz Type: </span>
                                {{ quizType }}
                            </p>
                            <p class="text-gray-700 dark:text-gray-400">
                                <span class="font-semibold text-black dark:text-white">Instructions:</span>
                                Read each question carefully and select the correct answer.
                            </p>
                        </div>
                        <div class="flex items-end">
                            <!-- <p class="text-gray-700  dark:text-gray-400 capitalize">
                                <span class="font-semibold text-black dark:text-white">Difficulty: </span>
                                Hard
                            </p> -->
                            <p class="text-gray-700  dark:text-gray-400">
                                <span class="font-semibold text-black dark:text-white">No. of Items: </span>
                                {{ quizLength }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center justify-center gap-[20px] h-auto  px-[15px]  py-[20px]">
                <div class=" w-full">
                    <div class="flex flex-col items-center gap-[20px] w-full" v-for="(item, index) in questions"
                        :key="item.id">
                        <div v-if="index == quizCounter">
                            <div class="flex justify-between w-full">
                                <div class="flex items-center justify-center p-2 dark:bg-gray-600 dark:hover:bg-gray-700 rounded-full"
                                    :class="[index == 0 ? 'bg-gray-500 hover:bg-gray-600' : 'bg-indigo-500 hover:bg-indigo-600']">
                                    <button @click.prevent="nextQuestion(index - 1)" :disabled="index == 0">
                                        <ChevronLeftIcon class="w-[25px] h-[25px] stroke-white" />
                                    </button>
                                </div>
                                <h2 class="text-xl text-black font-extrabold dark:text-white text-center">Question # {{index + 1 }}</h2>
                                <div class="flex items-center justify-center p-2 dark:bg-gray-600 dark:hover:bg-gray-700 rounded-full"
                                    :class="[index + 1 == questions.length ? 'bg-gray-500 hover:bg-gray-600' : 'bg-indigo-500 hover:bg-indigo-600']">
                                    <button @click.prevent="nextQuestion(index + 1)" :disabled="index + 1 == questions.length">
                                        <ChevronRightIcon class="w-[25px] h-[25px] stroke-white" />
                                    </button>
                                </div>
                            </div>
                            <div class="flex flex-col items-center justify-center w-full">
                                <p class="text-[25px] text-black dark:text-white font-semibold">{{ item.question }}</p>
                                <img class="w-full sm:w-full md:w-[80%] rounded-lg"
                                    src="https://m.media-amazon.com/images/I/71MhODbYvJL.jpg" alt="image description">
                            </div>
                        </div>
                    </div>
                    <div class="mb-6">
                        <RadioGroup>
                            <div class="mt-4 grid grid-cols-1 gap-y-6  sm:gap-x-2" :class="[quizType == 'true-of-false' ? 'lg:grid-cols-2' : 'lg:grid-cols-1']">
                                <RadioGroupOption as="template" v-for="quizItem in quizChoices" :key="quizItem.id" :value="quizItem.value" v-slot="{ checked, active }" >
                                    <div  @click.prevent="addAnswer(quizItem.value, quizItem.id)" :class="[checked ? 'border-transparent' : 'border-gray-300', active ? 'border-indigo-500 ring-2 ring-indigo-500 ' : '', 'relative flex cursor-pointer rounded-lg border bg-white dark:bg-gray-600 p-1 md:p-3 shadow-sm focus:outline-none']">
                                        <span class="flex flex-1">
                                            <span class="flex flex-col w-full">
                                                <RadioGroupLabel as="span"
                                                    class="block text-[17px] font-medium text-indigo-500 dark:text-white whitespace-nowrap">
                                                    <!-- {{ quizItem.choice }}  -->
                                                    {{ quizItem.value }}</RadioGroupLabel>
                                            </span>
                                        </span>
                                        <CheckCircleIcon :class="[!checked ? 'invisible' : '', 'h-5 w-5 text-indigo-500']"
                                            aria-hidden="true" />
                                        <span
                                            :class="[active ? 'border' : 'border-2', checked ? 'border-indigo-500' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-lg']"
                                            aria-hidden="true" />
                                    </div>
                                </RadioGroupOption>
                            </div>
                        </RadioGroup>
                    </div>
                    <div class="flex justify-center w-full" v-if="quizCounter == (questions.length - 1)">
                        <button @click="submitAnswers()" type="button" class="w-full focus:outline-none text-white bg-indigo-500 hover:bg-indigo-500  focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 ">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Modal :show="modalOpen" @close="modalToggle" :title="'Quiz Summary'" :widthModal="'w-[600px]'"
        :heightModal="'h-[500px]'">
        <!-- description, no of items, duration, difficulty -->
        <div class="flex flex-col items-center gap-3 h-full">
            <div class="w-full">
                <div>
                    <h1 class="text-black dark:text-white text-[25px] text-center mb-[20px] font-semibold">ASL Numbers</h1>
                </div>
                <div class="flex flex-col gap-[5px] w-full ">
                    <h1 class="text-black dark:text-white text-[18px] text-center mt-[5px]">Performance Stats</h1>
                    <div class="flex flex-col md:flex-row gap-[5px] w-full">
                        <div class="flex items-center justify-center md:justify-between w-full md:w-[50%] border dark:border-gray-500 p-3 rounded-md hover:bg-gray-100 hover:dark:bg-gray-500">
                            <CheckCircleIcon class="w-[120px] h-[120px] fill-green-400 stroke-2"/>
                            <p class="flex flex-col items-center justify-center text-[50px] text-gray-600 dark:text-white capitalize font-semibold">
                                {{ correct_answer }}
                                <span class="text-[18px] font-normal">Correct</span>
                            </p>
                        </div>
                        <div class="flex items-center justify-center md:justify-between  w-full md:w-[50%] border dark:border-gray-500 p-3 rounded-md hover:bg-gray-100 hover:dark:bg-gray-500">
                            <XCircleIcon class="w-[120px] h-[120px] fill-red-400 stroke-2"/>
                            <p class="flex flex-col items-center justify-center text-[50px] text-gray-600 dark:text-white capitalize font-semibold">
                                {{ mistakes }}
                                <span class="text-[18px] font-normal">Incorrect</span>
                            </p>
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row gap-[5px] w-full">
                        <div class="flex items-center justify-center md:justify-between w-full md:w-[50%] border dark:border-gray-500 p-3 rounded-md hover:bg-gray-100 hover:dark:bg-gray-500">
                            <ClockIcon class="w-[120px] h-[120px] fill-blue-400 stroke-2"/>
                            <p class="flex flex-col items-center justify-center text-[30px] text-gray-600 dark:text-white whitespace-normal font-semibold ">
                                {{ viewTime }}
                                <span class="text-[18px] font-normal">Remaining Time</span>
                            </p>
                        </div>
                        <div class="flex items-center justify-center md:justify-between w-full md:w-[50%] border dark:border-gray-500 p-3 rounded-md hover:bg-gray-100 hover:dark:bg-gray-500">
                            <ChartBarSquareIcon class="w-[120px] h-[120px] fill-orange-400 stroke-2"/>
                            <p class="flex flex-col items-center justify-center text-[50px] text-gray-600 dark:text-white capitalize font-semibold">
                                {{accuracy}}% 
                                <span class="text-[18px] font-normal">Accuracy</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Review Question slot -->
            <div class="flex justify-center w-full">
                <router-link to="/quiz" @click="(modalOpen = !modalOpen)" type="button"
                    class="w-full focus:outline-none text-center text-white bg-indigo-500 hover:bg-indigo-500 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-3">Confirm</router-link>
            </div>
        </div>
    </Modal>
</template>

<script>
import {
QueueListIcon,
ChevronLeftIcon,
ChevronRightIcon,
XMarkIcon
} from '@heroicons/vue/24/outline';
import { CheckCircleIcon, XCircleIcon, ChartBarSquareIcon, ClockIcon } from '@heroicons/vue/20/solid'
import { RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import Modal from '../../../misc/Modal.vue';
import Accordion from '../../../misc/Accordion.vue';
import VueCountdown from '@chenfengyuan/vue-countdown';
import {userAuthStore} from '@/store/auth';
export default{
    components:{
    QueueListIcon,
    ChartBarSquareIcon,
    ClockIcon,
    CheckCircleIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    RadioGroup,
    RadioGroupDescription,
    RadioGroupLabel,
    RadioGroupOption,
    Modal,
    XCircleIcon,
    ClockIcon,
    Accordion,
    VueCountdown
},
    data(){
        return{
            user:userAuthStore().user,
            quizChoices:[],
            quizCounter: 0,
            modalOpen: false,
            quizTitle: '',
            quizDuration: '',
            quizBanner: '',
            quizID: '',
            quizLength: '',
            quizType: '',
            questions: [],
            answers: [],
            remainingTime: '',

            correct_answer: 0,
            mistakes: 0,
            accuracy: 0,
            viewTime: '',
        }
    },
    methods: {
        modalToggle() {
            this.modalOpen = false;
        },
        nextQuestion(index) {
            this.quizCounter = index
            console.log(this.quizCounter)
            const quizChoice = {
                question_item: {
                    choice_a: { id: this.questions[index].id, value: this.questions[index].choice_a, choice: 'A.' },
                    choice_b: { id: this.questions[index].id, value: this.questions[index].choice_b, choice: 'B.' },
                    choice_c: { id: this.questions[index].id, value: this.questions[index].choice_c, choice: 'C.' },
                    choice_d: { id: this.questions[index].id, value: this.questions[index].choice_d, choice: 'D.' },
                }
            }
            const choicesArray = Object.values(quizChoice.question_item);
            this.quizChoices = choicesArray
        },
        async getData() {
            const currentURL = window.location.href;
            const match = currentURL.match(/\/(\d+)$/);
            const id = match ? match[1] : null;

            await axios.get('/api/questions/' + id).then((data) => {
                let quiz = data.data.data;
                this.quizTitle = quiz.title
                this.quizDuration = quiz.duration
                this.quizBanner = quiz.banner
                this.quizLength = quiz.question_item.length
                this.quizID = quiz.id
                this.questions = quiz.question_item
                this.quizType = quiz.type == 'true-or-false' ? 'True or False' : 'Multiple Choice'

                const quizChoice = {
                    question_item: {
                        choice_a: { id: quiz.question_item[0].id, value: quiz.question_item[0].choice_a, choice: 'A.' },
                        choice_b: { id: quiz.question_item[0].id, value: quiz.question_item[0].choice_b, choice: 'B.' },
                        choice_c: { id: quiz.question_item[0].id, value: quiz.question_item[0].choice_c, choice: 'C.' },
                        choice_d: { id: quiz.question_item[0].id, value: quiz.question_item[0].choice_d, choice: 'D.' },
                    }
                }
                const choicesArray = Object.values(quizChoice.question_item);
                this.quizChoices = choicesArray

                console.log(this.quizChoices)



            }).catch((e) => {
                console.log(e.message)
            });
        },

        addAnswer(val,id){
            this.answers.push({ id: id, answer: val });
        },
        getRemainingTime(data){
            this.remainingTime = data.minutes+' mins,' +data.seconds+' s';

            // Timer has finished, call submitAnswers function
            if (data.minutes === 0 && data.seconds === 0) {
                this.submitAnswers();
            }
        },
        submitAnswers(){
            console.log(this.remainingTime)
            axios.post('/api/save-answers',{
                student_id : this.user.id,
                question_id: this.quizID,
                remaining_time: this.remainingTime,
                answers: this.answers
            }).then((data) => {
                this.correct_answer = data.data.data.score
                this.mistakes = data.data.data.mistakes
                this.accuracy = ((this.correct_answer / (this.correct_answer + this.mistakes)) * 100).toFixed(1) ;
                this.viewTime = data.data.data.remaining_time
                this.modalOpen = !this.modalOpen
            })
        }
    },
    created() {
        this.getData();
    }
}
</script>

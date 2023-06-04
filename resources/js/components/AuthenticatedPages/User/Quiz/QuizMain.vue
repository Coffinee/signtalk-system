<script>
import 
{   
    QueueListIcon, 
    ChevronLeftIcon,
    ChevronRightIcon,
XMarkIcon
} from '@heroicons/vue/24/outline';
import { CheckCircleIcon, XCircleIcon, ChartBarSquareIcon, ClockIcon } from '@heroicons/vue/20/solid'
import { RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import Modal from '../../../misc/Modal.vue';
import Accordion from '../../../misc/Accordion.vue';
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
    Accordion
},
    data(){
        return{
            quizCategory:[
                { id: 1, title: 'Choice 1', value: 'A'},
                { id: 2, title: 'Choice 2', value: 'B'},
                { id: 3, title: 'Choice 3', value: 'C'},
                { id: 3, title: 'Choice 4', value: 'D'},
            ],
            modalOpen: false,
        }
    },
    methods:{
        modalToggle(){
            this.modalOpen = false;
        },
    }
}
</script>
<template>
    <div class="flex justify-center h-auto w-full">
        <div class="h-auto w-[95%] md:w-[60%] my-[5px] shadow-md">
            <div class="border-b border-gray-300 dark:border-gray-600">
                <div class="flex justify-center items-center h-[50px] w-full bg-indigo-500 dark:bg-gray-600 rounded-t-md">
                </div>
                <div class="flex flex-col px-[15px] md:px-[50px] py-[20px]">
                    <div class="flex justify-between items-center flex-wrap w-full">
                        <h5 class="text-2xl text-black text-center font-bold dark:text-white">ASL Alphabet</h5>
                        <div class="flex items-center gap-[5px]">
                            <ClockIcon class="w-[25px] h-[25px] fill-black dark:stroke-white"/>
                            <p class="text-[20px] text-black font-semibold  dark:text-white">
                                Timer: 
                                <span class="font-normal underline text-gray-700  dark:text-gray-400">19m 47s</span>
                            </p>
                        </div>
                    </div>
                    <div class="flex justify-between flex-wrap-reverse gap-[20px] text-sm mt-3">
                        <div>
                            <p class="text-gray-700 dark:text-gray-400">
                                <span class="font-semibold text-black dark:text-white">Quiz Type: </span>
                                Multiple Choice
                            </p>
                            <p class="text-gray-700 dark:text-gray-400">
                                <span class="font-semibold text-black dark:text-white">Instructions:</span>
                                Read each question carefully and select the correct answer.
                            </p>
                        </div>
                        <div class="flex flex-col flex-wrap">
                            <p class="text-gray-700  dark:text-gray-400 capitalize">
                                <span class="font-semibold text-black dark:text-white">Difficulty: </span>
                                Hard
                            </p>
                            <p class="text-gray-700  dark:text-gray-400">
                                <span class="font-semibold dark:text-white">No. of Items: </span>
                                20
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center justify-center gap-[20px] h-auto  px-[15px]  py-[20px]">
                <div class=" w-full">
                    <div class="flex flex-col items-center gap-[20px] w-full">
                        <div class="flex justify-between w-full">
                            <div class="flex items-center justify-center p-2 bg-indigo-500 hover:bg-indigo-600 dark:bg-gray-600 dark:hover:bg-gray-700 rounded-full">
                                <router-link to="#">
                                    <ChevronLeftIcon class="w-[25px] h-[25px] stroke-white"/>
                                </router-link>
                            </div>
                            <h2 class="text-xl text-black font-extrabold dark:text-white text-center">Question #1</h2>
                            <div class="flex items-center justify-center p-2 bg-indigo-500 hover:bg-indigo-600 dark:bg-gray-600 dark:hover:bg-gray-700 rounded-full">
                                <router-link to="">
                                    <ChevronRightIcon class="w-[25px] h-[25px] stroke-white"/>
                                </router-link>
                            </div>
                        </div>
                        <div class="flex flex-col items-center justify-center w-full">
                            <p class="text-[25px] text-black dark-text-white font-semibold">What is the Sign Language for this?</p>                   
                            <img class="w-full sm:w-full md:w-[80%] rounded-lg" src="https://m.media-amazon.com/images/I/71MhODbYvJL.jpg" alt="image description">
                        </div>
                    </div>
                    <div class="mb-6">
                        <RadioGroup>
                            <div class="mt-4 grid grid-cols-1 gap-y-6 lg:grid-cols-4 sm:gap-x-4">
                                <RadioGroupOption as="template" v-for="quizCategory in quizCategories" :key="quizCategory.id" :value="quizCategory" v-model=quizCategory.title v-slot="{ checked, active }">
                                    <div @click="categorySelected = quizCategory.value" :class="[checked ? 'border-transparent' : 'border-gray-300', active ? 'border-indigo-500 ring-2 ring-indigo-500 ' : '', 'relative flex cursor-pointer rounded-lg border bg-white dark:bg-gray-600 p-1 md:p-3 shadow-sm focus:outline-none']">
                                        <span class="flex flex-1">
                                            <span class="flex flex-col w-full">
                                                <RadioGroupLabel as="span" class="block text-[17px] font-medium text-indigo-500 dark:text-white text-center whitespace-nowrap">{{ quizCategory.value }}. {{ quizCategory.title }}</RadioGroupLabel>                
                                            </span>
                                        </span>
                                        <CheckCircleIcon :class="[!checked ? 'invisible' : '', 'h-5 w-5 text-indigo-500']" aria-hidden="true" />
                                        <span :class="[active ? 'border' : 'border-2', checked ? 'border-indigo-500' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-lg']" aria-hidden="true" />
                                    </div>
                                </RadioGroupOption>
                            </div>
                        </RadioGroup>
                    </div>
                    <div class="flex justify-center w-full">
                        <button @click="(modalOpen = !modalOpen)" type="button" class="w-full focus:outline-none text-white bg-indigo-500 hover:bg-indigo-500  focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 ">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Modal :show="modalOpen" @close="modalToggle" :title="'Quiz Summary'" :widthModal="'w-[600px]'" :heightModal="'h-[600px]'">
        <!-- description, no of items, duration, difficulty -->
        <div class="flex flex-col items-center gap-3 h-full mb-3">
            <div class="w-full">
                <div>
                    <h1 class="text-black dark:text-white text-[25px] text-center mb-[20px] font-semibold">ASL Numbers</h1>
                </div>
                <div class="flex flex-col gap-[10px] w-full">
                    <h1 class="text-black dark:text-white text-[18px] text-center mt-[5px]">Performance Stats</h1>
                    <div class="flex flex-col md:flex-row gap-[10px] w-full">
                        <div class="flex items-center justify-center md:justify-between w-full md:w-[50%] border dark:border-gray-500 p-3 rounded-md hover:bg-gray-100 hover:dark:bg-gray-500">
                            <CheckCircleIcon class="w-[120px] h-[120px] fill-green-400 stroke-2"/>
                            <p class="flex flex-col items-center justify-center text-[50px] text-gray-600 dark:text-white capitalize font-semibold">
                                19 
                                <span class="text-[18px] font-normal">Correct</span>
                            </p>
                        </div>
                        <div class="flex items-center justify-center md:justify-between  w-full md:w-[50%] border dark:border-gray-500 p-3 rounded-md hover:bg-gray-100 hover:dark:bg-gray-500">
                            <XCircleIcon class="w-[120px] h-[120px] fill-red-400 stroke-2"/>
                            <p class="flex flex-col items-center justify-center text-[50px] text-gray-600 dark:text-white capitalize font-semibold">
                                1 
                                <span class="text-[18px] font-normal">Incorrect</span>
                            </p>
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row  gap-[10px] w-full">
                        <div class="flex items-center justify-center md:justify-between  w-full md:w-[50%] border dark:border-gray-500 p-3 rounded-md hover:bg-gray-100 hover:dark:bg-gray-500">
                            <ClockIcon class="w-[120px] h-[120px] fill-blue-400 stroke-2"/>
                            <p class="flex flex-col items-center justify-center text-[30px] text-gray-600 dark:text-white capitalize font-semibold ">
                                5min 3s 
                                <span class="text-[18px] font-normal">Time</span>
                            </p>
                        </div>
                        <div class="flex items-center justify-center md:justify-between w-full md:w-[50%] border dark:border-gray-500 p-3 rounded-md hover:bg-gray-100 hover:dark:bg-gray-500">
                            <ChartBarSquareIcon class="w-[120px] h-[120px] fill-orange-400 stroke-2"/>
                            <p class="flex flex-col items-center justify-center text-[50px] text-gray-600 dark:text-white capitalize font-semibold">
                                82% 
                                <span class="text-[18px] font-normal">Accuracy</span>
                            </p>
                        </div>
                    </div>                 
                </div>
            </div>
            <div class="w-full">
                <h1 class="text-black dark:text-white text-[18px] font-bold mt-[5px]">Review Questions</h1>
                <div class="w-full p-2 rounded-md border border-gray-400 bg-gray-100 dark:bg-gray-700">
                    <div>
                        <h1 class="text-black dark:text-white text-[18px]  mb-[20px] font-semibold border-b border-gray-600 pb-2">
                            1. What is the sign language for this?
                        </h1>
                        <div v-for="choice in quizCategory" :key="choice.id">
                            <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-600">
                                <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" disabled>
                                <label for="bordered-radio-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ choice.title }}</label>
                            </div>
                        </div>
                    </div>
                    <Accordion :sectiontitle="'Show my Answer'" :accordionColor="'bg-gray-600'" :setOpen="false">
                        <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-600">
                            <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" disabled>
                            <label for="bordered-radio-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Choice 2</label>
                        </div>
                    </Accordion>
                </div>
            </div>
            <div class="flex justify-center w-full">
                <button @click="(modalOpen = !modalOpen)" type="button" class="w-full focus:outline-none text-white bg-indigo-500 hover:bg-indigo-500  focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 ">Confirm</button>
            </div>
        </div>
    </Modal>
</template>

<script>
import 
{   
    QueueListIcon, 
    ClockIcon, 
    ChartBarIcon,
    ChevronLeftIcon,
    ChevronRightIcon
} from '@heroicons/vue/24/outline';
import { CheckCircleIcon } from '@heroicons/vue/20/solid'
import { RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
export default{
    components:{
        QueueListIcon, ChartBarIcon, ClockIcon, CheckCircleIcon, ChevronLeftIcon,
        ChevronRightIcon,  RadioGroup, RadioGroupDescription, RadioGroupLabel, 
        RadioGroupOption,      
    },
    data(){
        return{
            quizCategories:[
                { id: 1, title: 'Choice 1', value: 'A'},
                { id: 2, title: 'Choice 2', value: 'B'},
                { id: 3, title: 'Choice 3', value: 'C'},
                { id: 3, title: 'Choice 4', value: 'D'},
            ],
        }
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
                        <h5 class="text-2xl text-center font-bold dark:text-white">ASL Alphabet</h5>
                        <div class="flex items-center gap-[5px]">
                            <ClockIcon class="w-[25px] h-[25px] stroke-black dark:stroke-white"/>
                            <p class="text-[20px] font-semibold  dark:text-white">
                                Timer: 
                                <span class="font-normal underline  dark:text-gray-400">19m 47s</span>
                            </p>
                        </div>
                    </div>
                    <div class="flex justify-between flex-wrap-reverse gap-[20px] text-sm mt-3">
                        <div>
                            <p class="dark:text-gray-400">
                                <span class="font-semibold dark:text-white">Quiz Type: </span>
                                Multiple Choice
                            </p>
                            <p class="dark:text-gray-400">
                                <span class="font-semibold dark:text-white">Instructions:</span>
                                Read each question carefully and select the correct answer.
                            </p>
                        </div>
                        <div class="flex flex-col flex-wrap">
                            <p class="dark:text-gray-400 capitalize">
                                <span class="font-semibold dark:text-white">Difficulty: </span>
                                Hard
                            </p>
                            <p class="dark:text-gray-400">
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
                            <h2 class="text-xl font-extrabold dark:text-white text-center">Question #1</h2>
                            <div class="flex items-center justify-center p-2 bg-indigo-500 hover:bg-indigo-600 dark:bg-gray-600 dark:hover:bg-gray-700 rounded-full">
                                <router-link to="">
                                    <ChevronRightIcon class="w-[25px] h-[25px] stroke-white"/>
                                </router-link>
                            </div>
                        </div>
                        <div class="flex justify-center w-full">                   
                            <img class="w-full sm:w-full md:w-[80%] rounded-lg" src="https://m.media-amazon.com/images/I/71MhODbYvJL.jpg" alt="image description">
                        </div>
                    </div>
                    <div>
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
                    <div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

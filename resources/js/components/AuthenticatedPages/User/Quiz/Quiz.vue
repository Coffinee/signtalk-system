<script>
import Modal from '../../../misc/Modal.vue'
import 
{   
    InformationCircleIcon, 
    QueueListIcon, 
    ClockIcon, 
    ChartBarIcon,
    PlayIcon
} from '@heroicons/vue/24/outline';

export default {
    components:{
        Modal, InformationCircleIcon, QueueListIcon, 
        ClockIcon, ChartBarIcon, PlayIcon
    },
    data(){
        return{
            quizCategories:[
                { id: 1, title: 'Choice 1', value: 'A'},
                { id: 1, title: 'Choice 2', value: 'B'},
                { id: 1, title: 'Choice 3', value: 'C'},
                { id: 1, title: 'Choice 4', value: 'D'},
            ],
            modalOpen: false,
        }
    },
    methods:{
        modalToggle(){
            this.modalOpen = false;
        }
    }
}
</script>
<template>
    <div class="dark:bg-transparent py-[50px] h-auto md:h-screen">
        <div class="mb-[50px]">
            <h5 class="text-2xl text-center font-bold dark:text-white mb-3">Quiz</h5>
            <div class="flex justify-center flex-wrap gap-[20px]">
                <div class="max-w-xs h-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div class="h-[65%]">
                        <router-link @click="(modalOpen = !modalOpen)" to="#">
                            <img class="w-full h-full rounded-t-lg" src="https://static.vecteezy.com/system/resources/previews/012/320/704/original/doodle-sketch-asl-sign-language-alphabet-illustration-free-vector.jpg" alt="">
                        </router-link>
                    </div>
                    <div class="flex flex-col justify-center h-[35%] px-[10px]">
                        <div class="flex justify-between mb-2">
                            <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">ASL Alphabet</h5>
                            <span class="bg-gray-50 shadow-md text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">26 items</span>
                        </div>
                        <div>
                            <router-link @click="(modalOpen = !modalOpen)" to="">    
                                <button type="button" class="focus:outline-none text-white bg-indigo-500 hover:bg-indigo-600 font-medium rounded-lg text-sm px-5 py-2.5">View Quiz</button>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="max-w-xs h-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div class="h-[65%]">
                        <router-link @click="(modalOpen = !modalOpen)" to="#">
                            <img class="w-full h-full rounded-t-lg" src="https://cfvod.kaltura.com/p/2531481/sp/253148100/thumbnail/entry_id/0_nrs2tha2/version/100012/width/412/height/223" alt="">
                        </router-link>
                    </div>
                    <div class="flex flex-col justify-center h-[35%] px-[10px]">
                        <div class="flex justify-between mb-2">
                            <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">ASL Numbers</h5>
                            <span class="bg-gray-50 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">15 items</span>
                        </div>
                        <div>
                            <router-link @click="(modalOpen = !modalOpen)" to="">    
                                <button type="button" class="focus:outline-none text-white bg-indigo-500 hover:bg-indigo-600 font-medium rounded-lg text-sm px-5 py-2.5">View Quiz</button>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="max-w-xs h-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div class="h-[65%]">
                        <router-link @click="(modalOpen = !modalOpen)" to="#">
                            <img class="w-full h-full rounded-t-lg" src="https://i.ytimg.com/vi/ijdn9elmT7g/maxresdefault.jpg" alt="">
                        </router-link>
                    </div>
                    <div class="flex flex-col justify-center h-[35%] px-[10px]">
                        <div class="flex justify-between mb-2">
                            <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">ASL Animals</h5>
                            <span class="bg-gray-50 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">12 items</span>
                        </div>
                        <div>
                            <router-link @click="(modalOpen = !modalOpen)" to="">    
                                <button type="button" class="focus:outline-none text-white bg-indigo-500 hover:bg-indigo-600 font-medium rounded-lg text-sm px-5 py-2.5">View Quiz</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Modal :show="modalOpen" @close="modalToggle" :title="'Quiz Title'" :widthModal="'w-[600px]'" :heightModal="'h-auto'">
        <!-- description, no of items, duration, difficulty -->
        <div class="flex flex-col gap-3 h-full">
            <div class="flex flex-col justify-between items-center gap-2 sm:flex-col md:flex-row h-full">
                <div class="w-full h-full">
                    <img class="w-full rounded-md" src="https://i.ytimg.com/vi/ijdn9elmT7g/maxresdefault.jpg" alt="">
                </div>
                <div class="w-full md:w-[45%] dark:text-white h-full flex flex-col gap-3 text-[13px]">
                    <div class="flex flex-row md:flex-col gap-3">
                        <div class="flex items-center w-[50%] sm:w-full gap-3 px-3 py-[9px] rounded-md bg-gray-50 dark:bg-gray-500 shadow-md">
                            <InformationCircleIcon class="w-[25px] h-[25px] stroke-black dark:stroke-white stroke-2"/>
                            <p class="dark:text-white capitalize">Multiple Choice</p>
                        </div>
                        <div class="flex items-center w-[50%] sm:w-full gap-3 px-3 py-[9px] rounded-md bg-gray-50 dark:bg-gray-500 shadow-md">
                            <QueueListIcon class="w-[25px] h-[25px] stroke-black dark:stroke-white stroke-2"/>
                            <p class="dark:text-white capitalize">20 items</p>
                        </div>
                    </div>
                    <div class="flex flex-row md:flex-col gap-3">
                        <div  class="flex items-cente w-[50%] sm:w-full gap-3 px-3 py-[9px] rounded-md bg-gray-50 dark:bg-gray-500 shadow-md">
                            <ClockIcon class="w-[25px] h-[25px] stroke-black dark:stroke-white stroke-2"/>
                            <p class="dark:text-white capitalize">10 minutes</p>
                        </div>
                        <div  class="flex items-center w-[50%] sm:w-full gap-3 px-3 py-[9px] rounded-md bg-gray-50 dark:bg-gray-500 shadow-md">
                            <ChartBarIcon class="w-[25px] h-[25px] stroke-black dark:stroke-white stroke-2"/>
                            <p class="dark:text-white capitalize">Hard</p>
                        </div>
                    </div>
                </div>
            </div>
            <router-link to="/quiz/main" class="flex items-center justify-center w-full text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700">
                <PlayIcon class="w-[20px] h-[20px] stroke-white dark:stroke-white stroke-2"/>
                <span class="pl-3">
                    Start Quiz
                </span>
            </router-link>
        </div>
    </Modal>
</template>
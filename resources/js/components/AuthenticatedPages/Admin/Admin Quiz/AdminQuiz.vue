<script>
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
        InformationCircleIcon, QueueListIcon, 
        ClockIcon, ChartBarIcon, PlayIcon
    },
}
</script>
<template>
    <div class="dark:bg-transparent h-auto">
        <div>
            <div class="flex justify-between mb-[20px]">
                <h5 class="text-2xl text-left font-bold text-black mb-3">Quiz</h5>
                <router-link to="/admin/quiz/add">    
                    <button type="button"
                    class="text-white bg-indigo-500 hover:bg-indigo-600 font-medium rounded-lg text-sm px-5 py-2.5">Add
                    New</button>
                </router-link>
            </div>
            <div class="flex justify-center flex-wrap gap-[20px]">
                <div class="max-w-xs h-[300px] bg-white border border-gray-200 rounded-lg shadow">
                    <div class="h-[65%]">
                        <router-link to="#">
                            <img class="w-full h-full rounded-t-lg" src="https://static.vecteezy.com/system/resources/previews/012/320/704/original/doodle-sketch-asl-sign-language-alphabet-illustration-free-vector.jpg" alt="">
                        </router-link>
                    </div>
                    <div class="flex flex-col justify-center h-[35%] px-[10px]">
                        <div class="flex justify-between mb-2">
                            <h5 class="text-xl font-bold tracking-tight text-gray-900">ASL Alphabet</h5>
                            <span class="bg-gray-50 shadow-md text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">26 items</span>
                        </div>
                        <div>
                            <router-link  to="">    
                                <button type="button" class="flex items-center gap-3 focus:outline-none text-white bg-indigo-500 hover:bg-indigo-600 font-medium rounded-lg text-sm px-5 py-2.5">
                                    Edit Quiz
                                    <svg class="h-4 w-4" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="max-w-xs h-[300px] bg-white border border-gray-200 rounded-lg shadow">
                    <div class="h-[65%]">
                        <router-link  to="#">
                            <img class="w-full h-full rounded-t-lg" src="https://cfvod.kaltura.com/p/2531481/sp/253148100/thumbnail/entry_id/0_nrs2tha2/version/100012/width/412/height/223" alt="">
                        </router-link>
                    </div>
                    <div class="flex flex-col justify-center h-[35%] px-[10px]">
                        <div class="flex justify-between mb-2">
                            <h5 class="text-xl font-bold tracking-tight text-gray-900">ASL Numbers</h5>
                            <span class="bg-gray-50 shadow-md text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">15 items</span>
                        </div>
                        <div>
                            <router-link  to="">    
                                <button type="button" class="flex items-center gap-3 focus:outline-none text-white bg-indigo-500 hover:bg-indigo-600 font-medium rounded-lg text-sm px-5 py-2.5">
                                    Edit Quiz
                                    <svg class="h-4 w-4" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="max-w-xs h-[300px] bg-white border border-gray-200 rounded-lg shadow">
                    <div class="h-[65%]">
                        <router-link  to="#">
                            <img class="w-full h-full rounded-t-lg" src="https://i.ytimg.com/vi/ijdn9elmT7g/maxresdefault.jpg" alt="">
                        </router-link>
                    </div>
                    <div class="flex flex-col justify-center h-[35%] px-[10px]">
                        <div class="flex justify-between mb-2">
                            <h5 class="text-xl font-bold tracking-tight text-gray-900">ASL Animals</h5>
                            <span class="bg-gray-50 shadow-md text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">12 items</span>
                        </div>
                        <div>
                            <router-link to="">    
                                <button type="button" class="flex items-center gap-3 focus:outline-none text-white bg-indigo-500 hover:bg-indigo-600 font-medium rounded-lg text-sm px-5 py-2.5">
                                    Edit Quiz
                                    <svg class="h-4 w-4" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
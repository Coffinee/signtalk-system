<template>
    <div class="dark:bg-transparent py-[50px]  ">
        <div class="mb-[50px]">
            <h5 class="text-2xl text-center font-bold dark:text-white mb-3">Quiz</h5>
            <div class="flex justify-center flex-wrap gap-[20px] h-screen">
                <div class="max-w-xs h-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div class="h-[65%]">
                        <router-link to="#">
                            <img class="w-full h-full rounded-t-lg" src="https://static.vecteezy.com/system/resources/previews/012/320/704/original/doodle-sketch-asl-sign-language-alphabet-illustration-free-vector.jpg" alt="">
                        </router-link>
                    </div>
                    <div class="flex flex-col justify-center h-[35%] px-[10px]">
                        <div class="flex justify-between mb-2">
                            <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">ASL Alphabet</h5>
                            <span class="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">26 items</span>
                        </div>
                        <div>
                            <router-link to="">    
                                <button type="button" class="focus:outline-none text-white bg-indigo-500 hover:bg-indigo-600 font-medium rounded-lg text-sm px-5 py-2.5">Start Quiz</button>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="max-w-xs h-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div class="h-[65%]">
                        <router-link to="#">
                            <img class="w-full h-full rounded-t-lg" src="https://cfvod.kaltura.com/p/2531481/sp/253148100/thumbnail/entry_id/0_nrs2tha2/version/100012/width/412/height/223" alt="">
                        </router-link>
                    </div>
                    <div class="flex flex-col justify-center h-[35%] px-[10px]">
                        <div class="flex justify-between mb-2">
                            <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">ASL Numbers</h5>
                            <span class="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">15 items</span>
                        </div>
                        <div>
                            <router-link to="">    
                                <button type="button" class="focus:outline-none text-white bg-indigo-500 hover:bg-indigo-600 font-medium rounded-lg text-sm px-5 py-2.5">Start Quiz</button>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="max-w-xs h-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div class="h-[65%]">
                        <router-link to="#">
                            <img class="w-full h-full rounded-t-lg" src="https://i.ytimg.com/vi/ijdn9elmT7g/maxresdefault.jpg" alt="">
                        </router-link>
                    </div>
                    <div class="flex flex-col justify-center h-[35%] px-[10px]">
                        <div class="flex justify-between mb-2">
                            <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">ASL Animals</h5>
                            <span class="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">12 items</span>
                        </div>
                        <div>
                            <router-link to="">    
                                <button type="button" class="focus:outline-none text-white bg-indigo-500 hover:bg-indigo-600 font-medium rounded-lg text-sm px-5 py-2.5">Start Quiz</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
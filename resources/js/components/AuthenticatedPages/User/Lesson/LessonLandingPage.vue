<template>
    <div class="h-auto sm:h-auto md:h-screen flex flex-wrap items-center justify-center gap-[30px] my-[30px]">
        <router-link to="/lesson/main">
            <div class="w-[170px] h-[170px] flex flex-col dark:bg-gray-700 dark:border-none dark:hover:bg-gray-600 hover:bg-gray-200 shadow-lg rounded-lg py-3 px-7 border border-gray-200">
                <img class="w-fit h-fit" src="../../../../../assets/images/alphabet.png" alt="">
                <p class="text-[18px] text-center text-gray-900 tracking-wider uppercase dark:text-white font-semibold">Alphabet</p>
            </div>
        </router-link>
        <router-link to="/lesson/main">
            <div class="w-[170px] h-[170px] flex flex-col dark:bg-gray-700 dark:border-none dark:hover:bg-gray-600 hover:bg-gray-200 shadow-lg rounded-lg py-3 px-7 border border-gray-200">
                <img class="w-fit h-fit" src="../../../../../assets/images/number.png" alt="">
                <p class="text-[18px] text-center text-gray-900 tracking-wider uppercase dark:text-white font-semibold">Numbers</p>
            </div>
        </router-link>
        <router-link to="/lesson/main">
            <div class="w-[170px] h-[170px] flex flex-col dark:bg-gray-700 dark:border-none dark:hover:bg-gray-600 hover:bg-gray-200 shadow-lg rounded-lg py-3 px-7 border border-gray-200">
                <img class="w-fit h-fit" src="../../../../../assets/images/color.png" alt="">
                <p class="text-[18px] text-center text-gray-900 tracking-wider uppercase dark:text-white font-semibold">Colors</p>
            </div>
        </router-link>
        <router-link to="/lesson/main">
            <div class="w-[170px] h-[170px] flex flex-col dark:bg-gray-700 dark:border-none dark:hover:bg-gray-600 hover:bg-gray-200 shadow-lg rounded-lg py-3 px-7 border border-gray-200">
                <img class="w-fit h-fit" src="../../../../../assets/images/animal.png" alt="">
                <p class="text-[18px] text-center text-gray-900 tracking-wider uppercase dark:text-white font-semibold">Animals</p>
            </div>
        </router-link>
        <!-- <div class="sm:h-auto md:h-screen flex items-center flex-col gap-[50px] sm:gap-[50px]">
            <div class="text-center mx-[50px]">
                <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Lesson</h1>
                <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Explore the different ASL Lessons</p>
            </div>
            <div class="flex justify-center flex-col sm:flex-col lg:flex-row gap-x-[100px] gap-y-[50px]">
                <router-link to="/lesson/main">
                    <div class="flex flex-col items-center ease-in-out duration-300 hover:scale-110 dark:hover:bg-gray-700 py-3 px-[30px] rounded-xl">
                        <img src="/Images/online-test.png" class="w-[300px] h-[280px]">
                        <div class="flex gap-x-[5px] text-[20px] font-semibold">
                            <p class="text-xl text-gray-900 dark:text-white">Take</p>
                            <p class="text-indigo-500">Quiz and Exams</p>
                        </div>
                    </div>
                </router-link>
                <router-link to="/lesson/main">
                    <div class="flex flex-col items-center ease-in-out duration-300 hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-700 py-3 px-[30px] rounded-xl">
                        <img src="/Images/tutorial.png" class="w-[300px] h-[280px]">
                        <div class="flex gap-x-[5px] text-[20px] font-semibold">
                            <p class="text-xl text-gray-900 dark:text-white">Watch</p>
                            <p class="text-indigo-500">Video Tutorial</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div> -->
    </div>
</template>
<script>

</script>
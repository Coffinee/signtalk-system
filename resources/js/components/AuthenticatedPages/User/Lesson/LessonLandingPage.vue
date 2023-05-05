<template>
    <div class="py-[100px] sm:py-[50px]">
        <div class="h-screen flex items-center justify-center flex-col gap-[50px] sm:gap-[50px]">
            <div class="text-center mx-[50px]">
                <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Lesson</h1>
                <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Explore the different ASL Lessons</p>
            </div>
            <div class="flex justify-center flex-col sm:flex-col lg:flex-row gap-x-[100px] gap-y-[50px]">
                <router-link to="/student/lesson/main">
                    <div class="flex flex-col items-center ease-in-out duration-300 hover:scale-110 dark:hover:bg-gray-700 py-3 px-[30px] rounded-xl">
                        <OnlineTestIllustration/>
                        <div class="flex gap-x-[5px] text-[20px] font-semibold">
                            <p class="text-xl text-gray-900 dark:text-white">Take</p>
                            <p class="text-indigo-500">Quiz and Exams</p>
                        </div>
                    </div>
                </router-link>
                <router-link to="/student/lesson/main">
                    <div class="flex flex-col items-center ease-in-out duration-300 hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-700 py-3 px-[30px] rounded-xl">                       
                        <TutorialIllustration/>
                        <div class="flex gap-x-[5px] text-[20px] font-semibold">
                            <p class="text-xl text-gray-900 dark:text-white">Watch</p>
                            <p class="text-indigo-500">Video Tutorial</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import OnlineTestIllustration from '../../../misc/Illustrations/OnlineTestIllustration.vue';
import TutorialIllustration from '../../../misc/Illustrations/TutorialIllustration.vue';
export default{
    components:{
        OnlineTestIllustration, TutorialIllustration
    }
}

</script>
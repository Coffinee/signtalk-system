<template>
    <div v-if="this.lessons != ''" class="h-auto sm:h-screen md:h-screen flex flex-col items-center my-[30px]">
        <div>
            <p class="mb-[20px] text-2xl text-black font-bold dark:text-white text-center">Lesson:</p>
            <div class="flex justify-center flex-wrap gap-[15px]">
                <router-link :to="'/lesson/main/' + lesson.id" v-for="lesson in lessons" :key="lesson.id"
                    class="flex flex-col items-center justify-center w-[400px]  bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 border-r-[5px] border-r-indigo-500">
                    <img class="w-full rounded-t-lg h-96 md:h-full md:w-[40%] md:rounded-none md:rounded-l-lg"
                        :src="'/uploads/lessons/' + lesson.image_file" alt="">
                    <div class="flex flex-col justify-between p-4 leading-normal md:w-[60%]">
                        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{ lesson.title }}
                        </h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-md">Learn {{ lesson.title }}.</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
    <div v-else class="w-full h-screen flex flex-col justify-center items-center">
        <img src="/images/nothing.png" class="w-[400px]">
        <p class="font-light tracking-widest">Lessons | Nothing to show ...</p>
    </div>
</template>
  
<script>
import { ChevronRightIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'

export default {
    components: {
        ChevronRightIcon, ArrowRightIcon
    },
    data() {
        return {
            lessons: {},
            lessonTitle: '',
            lessonContent: '',
            lessonImage: '',
            lessonRef: '',
            lessonId: ''
        }
    },
    methods: {
        getLessons() {
            axios.get('/api/getlesson').then((data) => {
                this.lessons = data.data.data;
                console.log(this.lessons)
            }).catch((e) => {
                errorMessage('Opps!', e.message, 'top-right')
            });
        }
    },
    created() {
        this.getLessons();
    }
}
</script>
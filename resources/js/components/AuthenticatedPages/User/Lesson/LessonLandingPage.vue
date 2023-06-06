<template>
    <div class="h-screen sm:h-screen md:h-screen flex items-center justify-center my-[30px]">
        <div class="divide-y divide-gray-200 overflow-hidden rounded-lg  p-3 sm:grid sm:grid-cols-2 gap-[5px] sm:gap-[30px] sm:divide-y-0 w-full sm:w-full md:w-auto mx-[10px]">
            <router-link :to="'/lesson/main/'+ lesson.id" v-for="lesson in lessons" :key="lesson.id" class="flex items-center justify-between  bg-white dark:bg-gray-600 p-10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 hover:bg-gray-50 dark:hover:bg-gray-700  w-full md:w-[400px] border-l-[10px] border-l-indigo-500 rounded-md shadow-md border-y border-r   border-y-gray-200 border-r-gray-200">
                <div>
                    <h3 class="font-semibold leading-6 text-gray-900 dark:text-white text-[30px]">{{ lesson.title }}
                    </h3>
                    <p class="mt-2 text-[14px] text-gray-500 dark:text-gray-300">Learn {{ lesson.title }}</p>
                </div>
                <div>
                    <ArrowRightIcon class="w-[30px] h-[30px] stroke-2 stroke-indigo-500"/>
                </div>

            </router-link>
        </div>
    </div>
</template>
  
<script>
import {ChevronRightIcon, ArrowRightIcon} from '@heroicons/vue/24/outline'

export default{
    components:{
        ChevronRightIcon, ArrowRightIcon
    },
    data(){
        return{
            lessons: {},
        }
    },
    methods: {
        getLessons() {
            axios.get('/api/getlesson').then((data) => {
                this.lessons = data.data.data;
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
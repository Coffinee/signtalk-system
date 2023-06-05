<template>
    <div class="h-auto sm:h-screen md:h-screen flex items-center justify-center my-[30px]">
        <div class="divide-y divide-gray-200 overflow-hidden rounded-lg shadow-md p-3 sm:grid sm:grid-cols-2 gap-[5px] sm:gap-[30px] sm:divide-y-0 w-full sm:w-full md:w-auto mx-[10px]">
            <div v-for="item in lessons" :key="item.id" class="flex items-center gap-[20px] group relative bg-white dark:bg-[#232f4e] p-10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md w-full md:w-[400px]">
                <!-- <div>
                    <span class="inline-flex rounded-lg p-5">
                        <component :is="item.icon" class="h-[40px] w-[40px]" aria-hidden="true" />
                    </span>
                </div> -->
                <div >
                    <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                    <router-link :to="'/lesson/main/'+item.id" class="focus:outline-none text-[30px]">
                        <!-- Extend touch target to entire panel -->
                        <span class="absolute inset-0" aria-hidden="true" />
                        {{ item.title }}
                    </router-link>
                    </h3>
                    <p class="mt-2 text-[16px] text-gray-500 dark:text-gray-300">Learn {{ item.title }}</p>
                </div>
                <!-- <span class="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                    </svg>
                </span> -->
            </div>
        </div>
    </div>
</template>
  
<script>
import ColorIcon from '../../../misc/Illustrations/ColorIcon.vue';
import AlphabetIcon from '../../../misc/Illustrations/AlphabetIcon.vue';
import NumberIcon from '../../../misc/Illustrations/NumberIcon.vue';
import SportsIcon from '../../../misc/Illustrations/SportsIcon.vue';
import EmotionIcon from '../../../misc/Illustrations/EmotionIcon.vue';
import AnimalsIcon from '../../../misc/Illustrations/AnimalsIcon.vue';
import {
BookOpenIcon,
} from '@heroicons/vue/24/outline'
import axios from 'axios';

export default{
    components:{
        BookOpenIcon, ColorIcon, AlphabetIcon,
        NumberIcon, SportsIcon, EmotionIcon,
        AnimalsIcon
    },
    data(){
        return{
            lessons: {},
            // actions:[
            //     {
            //         title: 'Alphabet',
            //         description: 'Learn ASL Alphabet',
            //         href: '/lesson/main',
            //         icon: AlphabetIcon,
            //         iconForeground: 'text-teal-700',
            //         iconBackground: 'bg-teal-50',
            //     },
            //     {
            //         title: 'Numbers',
            //         description: 'Learn ASL Numbers',
            //         href: '/lesson/main',
            //         icon: NumberIcon,
            //         iconForeground: 'text-purple-700',
            //         iconBackground: 'bg-purple-50',
            //     },
            //     {
            //         title: 'Colors',
            //         description: 'Learn ASL Colors',
            //         href: '/lesson/main',
            //         icon: ColorIcon,
            //         iconForeground: 'text-sky-700',
            //         iconBackground: 'bg-sky-50',
            //     },
            //     {
            //         title: 'Animals',
            //         description: 'Learn ASL Animals',
            //         href: '/lesson/main',
            //         icon: AnimalsIcon,
            //         iconForeground: 'text-yellow-700',
            //         iconBackground: 'bg-yellow-50',
            //     },
            //     {
            //         title: 'Emotions',
            //         description: 'Learn ASL Emotions',
            //         href: '/lesson/main',
            //         icon: EmotionIcon,
            //         iconForeground: 'text-rose-700',
            //         iconBackground: 'bg-rose-50',
            //     },
            //     {
            //         title: 'Sports',
            //         description: 'Learn ASL Sports',
            //         href: '/lesson/main',
            //         icon: SportsIcon,
            //         iconForeground: 'text-indigo-700',
            //         iconBackground: 'bg-indigo-50',
            //     },          
            // ]
            // lessonID:'',
            // lessonTitle:'',
            // lessonDescription:'',
            // lessonImage:'',
            // lessonVideo:'',
        }
    },
    methods:{
        getLessons(){
            axios.get('/api/lesson').then((data) => {
                this.lessons = data.data.data;
                console.log(this.lessons)
                // this.lessonID = data.id;
                // this.lessonTitle = data.title;
                // this.lessonDescription = data.content;
                // this.lessonImage = data.image_file;
                // this.lessonVideo = data.refLink;
            }).catch((e) => {
                errorMessage('Opps!', e.message, 'top-right')
            });
        },
    },
    created(){
        this.getLessons();
    }
}
</script>
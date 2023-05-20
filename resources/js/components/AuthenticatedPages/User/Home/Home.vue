<script>
import Slideover from '../../../misc/Slideover.vue';
import Modal from '../../../misc/Modal.vue';
export default {

    components:{
        Slideover, Modal
    },
    data(){
        return {
            slideoverOpen: false,
            modalOpen: false,
        }
    },
    methods: {
        slideoverToggle(){
            this.slideoverOpen = false;
        },
        modalToggle(){
            this.modalOpen = false;
        }
    },
}

</script>

<template>

    <div class="flex justify-center items-center flex-wrap gap-x-[20px] gap-y-[80px] sm:h-auto md:h-screen  py-[80px] ">
        <div class="flex justify-center flex-wrap gap-x-[20px] gap-y-[80px]">
            <router-link to="/student/translate">
                <div class="relative h-[300px] w-[250px] bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 shadow-md shadow-indigo-300 hover:scale-105 ease-in-out duration-75">
                    <img src="/Images/translate.png" class="w-[170px] absolute -top-[70px] left-[50px]">
                    <div class="flex flex-col items-center justify-center px-3 h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-8 h-8 dark:text-white text-black">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                        </svg>
                        <span class="text-sm font-bold tracking-wider dark:text-white text-black ">TRANSLATE</span>
                        <p class="text-[12px] font-medium text-center dark:text-white text-black mt-[15px]">Translate your words into Sign Language</p>
                    </div>
                </div>
            </router-link>
            <router-link to="/student/dictionary">
                <div class="relative h-[300px] w-[250px] bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 shadow-md shadow-indigo-300 hover:scale-105 ease-in-out duration-75">
                    <img src="/Images/dictionary.png" class="w-40 absolute -top-[60px] left-[50px]">
                    <div class="flex flex-col items-center justify-center px-3 h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-8 h-8 dark:text-white text-black mt-[20px]">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                        </svg>
                        <span class="text-sm font-bold tracking-wider dark:text-white text-black ">DICTIONARY</span>
                        <p class="text-[12px] font-medium text-center dark:text-white text-black mt-[15px]">Review or add words to help your colleagues</p>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="flex justify-center  flex-wrap gap-x-[20px] gap-y-[80px]">
            <router-link to="/student/lesson">
                <div class="relative h-[300px] w-[250px] bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 shadow-md shadow-indigo-300 hover:scale-105 ease-in-out duration-75">
                    <img src="/Images/lesson.png" class="w-[180px] absolute -top-[70px] left-[35px]">
                    <div class="flex flex-col items-center justify-center px-3 h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-8 h-8 dark:text-white text-black mt-[20px]">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                        </svg>
                        <span class="text-sm font-bold tracking-wider dark:text-white text-black">LESSONS</span>
                        <p class="text-[12px] font-medium text-center dark:text-white text-black mt-[15px]">A list of all lesson proper to be reviewd and/or discussed</p>
                    </div>
                </div>
            </router-link>
            <router-link to="/student/quiz">
                <div class="relative h-[300px] w-[250px] bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 shadow-md shadow-indigo-300 hover:scale-105 ease-in-out duration-75">
                    <img src="/Images/exams.png" class="w-[160px] absolute -top-[50px] left-[55px]">
                    <div class="flex flex-col items-center justify-center px-3 h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-8 h-8 dark:text-white text-black mt-[20px]">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span class="text-sm font-bold tracking-wider dark:text-white text-black">QUIZZES</span>
                        <p class="text-[12px] font-medium text-center dark:text-white text-black mt-[15px]">Test what you have learned and take exams</p>
                    </div>
                </div>
            </router-link>
        </div>
    </div>

    <router-link to="auth/first-time">
        <Button>
            Hello
        </Button>
    </router-link>
    <button @click="(slideoverOpen = !slideoverOpen)" class="bg-indigo-500 text-white p-2 rounded-md">Slideover Open</button>
    <Slideover :show="slideoverOpen" @close="slideoverToggle" :title="'SLIDEOVER TITLE'" >
        
    </Slideover>

    <button @click="(modalOpen = !modalOpen)" class="bg-indigo-500 text-white p-2 rounded-md">Modal Open</button>
    <Modal :show="modalOpen" @close="modalToggle" :title="'MODAL TITLE'" >
        <div>
            lorem1000
        </div>
    </Modal>
</template>



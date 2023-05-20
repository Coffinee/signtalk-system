<template>
    <div class="py-[100px] sm:py-[50px]">
        <div class="sm:h-auto md:h-screen flex items-center flex-col sm:gap-[50px]">
            <div class="text-center mx-[50px]">
                <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Dictionary</h1>
                <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Text to American Sign Language for Alphabets and Numbers with Video Tutorials</p>
            </div>
            <div class="flex justify-center flex-col sm:flex-col lg:flex-row gap-x-[100px] gap-y-[50px]">
                <router-link to="/Student/Dictionary/Main">
                    <div class="flex flex-col items-center ease-in-out duration-300 hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-700 py-3 px-[30px] rounded-xl">
                        <img src="/Images/reading.png" class="w-[300px] h-[280px]">
                        <div class="flex gap-x-[5px] text-[20px] font-semibold">
                            <p class="text-xl text-gray-900 dark:text-white">Search</p>
                            <p class="text-indigo-500">Letters</p>
                        </div>
                    </div>
                </router-link>
                <router-link to="/Student/Dictionary/Main">
                    <div class="flex flex-col items-center ease-in-out duration-300 hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-700 py-3 px-[30px] rounded-xl">
                        <img src="/Images/calculator.png" class="w-[300px]  h-[280px]">
                        <div class="flex gap-x-[5px] text-[20px] font-semibold">
                            <p class="text-xl text-gray-900 dark:text-white">Search</p>
                            <p class="text-indigo-500">Numbers</p>
                        </div>
                    </div>
                </router-link>
            </div>
            <!-- <img src="/Images/referral.png" class="w-[300px]"> -->
        </div>
    </div>

</template>
<script>

export default{
    data(){
        return {
            modalOpen: false,
        }
    },
    methods: {
        modalToggle(){
            this.modalOpen = false;
        }
    },
}

</script>
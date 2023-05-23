<template>
    <div class="flex  dark:text-white text-#EAEAEA justify-center px-3 py-5 h-screen w-full dark:bg-[#111827] bg-white ">
        <div v-show="(isStudent==true || isTeacher==true) ? false : true">
            <h1 class="text-[30px] opacity-75 whitespace-nowrap justify-center flex capitalize font-bold tracking-widest">
                Select Your Role!
            </h1>
            <div class="flex flex-wrap justify-between my-10">
                <div class="flex justify-center flex-col sm:flex-col lg:flex-row gap-x-[100px] gap-y-[50px]">
                    <div @click="checker('student')" class="flex flex-col items-center ease-in-out duration-300 hover:scale-110 dark:hover:bg-gray-700 hover:bg-gray-100 py-3 px-[30px] rounded-xl">
                        <img src="/Images/student.png" class="w-[300px] h-[280px]">
                        <div class="flex gap-x-[5px] text-[20px] font-semibold">
                            <p class="text-xl text-gray-900 dark:text-white ">I am a</p>
                            <p class="text-indigo-500">Student</p>
                        </div>
                    </div>
                    <div @click="checker('teacher')" class="flex flex-col items-center ease-in-out duration-300 hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-700 py-3 px-[30px] rounded-xl">
                        <img src="/Images/teacher.png" class="w-[300px]  h-[280px]">
                        <div class="flex gap-x-[5px] text-[20px] font-semibold">
                            <p class="text-xl text-gray-900 dark:text-white">I am a</p>
                            <p class="text-indigo-500">Teacher</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-show="isStudent">
            <h1 class="text-[30px] opacity-75 whitespace-nowrap justify-center flex capitalize font-bold tracking-widest">Insert Your Code</h1>
            <h1 class="text-[11px] whitespace-nowrap justify-center flex capitalize font-bold tracking-widest">Ask your teacher for the Code</h1>
            <form class=" flex flex-col flex-wrap justify-center items-center mt-10">
                <div class="border border-gray-400 my-10 h-[50px] p-1 rounded-lg">
                    <input @keydown.space.prevent type="text" class="border border-gray-300 focus:outline-none placeholder:capitalize px-2 text-black w-full h-full rounded-lg" placeholder="Insert Code Here"/>
                </div>
                <div class=" flex justify-center w-full dark:text-white text-black gap-3 ">
                    <button class="border-2 border-[#EAEAEA] dark:border-white  w-[150px] px-3 py-1 rounded-lg"> Return </button>
                    <router-link to="/index">
                        <button type="submit" class="border-2 border-[#EAEAEA] w-[150px] px-3 py-1 rounded-lg">Submit</button>
                    </router-link>
                </div>
            </form>
        </div>

        <div v-show="isTeacher">
                Hello Hello
        </div>
    </div>
</template>

<script>

export default {

    name: "SelectRole",

    data() {
        return {

            isStudent:false,
            isTeacher:false,
        }
    },

    methods:{
        checker(person){
            if(person == 'student') {
                this.isStudent = true;
                this.isTeacher = false;
            } else {
                this.isStudent = false;
                this.isTeacher = true;
            }


        }
    },


}

</script>

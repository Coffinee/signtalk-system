<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
        <div class="flex justify-between px-[30px] pt-[30px]">
            <h2 class="text-2xl font-extrabold font-poppins text-black">Dashboard</h2>
        </div>
        <div class="m-5 ">
            <div class="mx-auto max-w-7xl">
                <div class="grid grid-cols-1 gap-[10px] bg-white/5 sm:grid-cols-2 lg:grid-cols-4 ">
                    <div class="bg-white shadow-md px-4 py-6 sm:px-6 lg:px-8">
                        <p class="text-sm font-medium leading-6 text-gray-900">Total Lessons Posted</p>
                        <p class="mt-2 flex items-baseline gap-x-2">
                            <span class="text-4xl font-semibold tracking-tight text-black">{{ this.totalLesson }}</span>
                            <!-- <span v-if="stat.unit" class="text-sm text-gray-400">{{ stat.unit }}</span>     -->
                        </p>
                    </div>
                    <div class="bg-white shadow-md px-4 py-6 sm:px-6 lg:px-8">
                        <p class="text-sm font-medium leading-6 text-gray-900">Total Words Published</p>
                        <p class="mt-2 flex items-baseline gap-x-2">
                            <span class="text-4xl font-semibold tracking-tight text-black">{{ this.totalDictionary }}</span>
                            <!-- <span v-if="stat.unit" class="text-sm text-gray-400">{{ stat.unit }}</span>     -->
                        </p>
                    </div>
                    <div class="bg-white shadow-md px-4 py-6 sm:px-6 lg:px-8">
                        <p class="text-sm font-medium leading-6 text-gray-900">Total Quizzes Deployed</p>
                        <p class="mt-2 flex items-baseline gap-x-2">
                            <span class="text-4xl font-semibold tracking-tight text-black">{{ this.totalQuiz }}</span>
                            <!-- <span v-if="stat.unit" class="text-sm text-gray-400">{{ stat.unit }}</span>     -->
                        </p>
                    </div>
                    <div class="bg-white shadow-md px-4 py-6 sm:px-6 lg:px-8">
                        <p class="text-sm font-medium leading-6 text-gray-900">Total Students</p>
                        <p class="mt-2 flex items-baseline gap-x-2">
                            <span class="text-4xl font-semibold tracking-tight text-black">{{ this.totalStudents }}</span>
                            <!-- <span v-if="stat.unit" class="text-sm text-gray-400">{{ stat.unit }}</span> -->
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

    data() {
        return {
            lessons: {},
            quiz: {},
            dictionary: {},
            students: {},
            totalLesson: '',
            totalQuiz: '',
            totalStudents: '',
            totalDictionary: ''
        }
    },

    methods: {
        getLesson() {
            axios.get('/api/lesson/')
                .then((data) => {
                    this.lessons = data.data.data;
                    this.totalLesson = this.lessons.total;
                    console.log(this.totalLesson)
                }).catch((e) => {
                    errorMessage('Opps!', e.message, 'top-right')
                });
        },
        getDictionary() {
            axios.get('/api/dictionary/')
                .then((data) => {
                    this.dictionary = data.data.data;
                    this.totalDictionary = this.dictionary.total;
                    console.log(this.totalDictionary)
                }).catch((e) => {
                    errorMessage('Opps!', e.message, 'top-right')
                });
        },
        getQuiz() {
            axios.get('/api/getquiz/')
                .then((data) => {
                    this.quiz = data.data.data;
                    this.totalQuiz = this.quiz.total;
                    console.log(this.totalQuiz)
                }).catch((e) => {
                    errorMessage('Opps!', e.message, 'top-right')
                });
        },
        getStudent() {
            axios.get('/api/getstudents/')
                .then((data) => {
                    this.students = data.data.data;
                    this.totalStudents = this.students.length - 1;
                }).catch((e) => {
                    errorMessage('Opps!', e.message, 'top-right')
                });
        },

    },

    created() {
        this.getLesson();
        this.getDictionary();
        this.getQuiz();
        this.getStudent();
    }
}
</script>

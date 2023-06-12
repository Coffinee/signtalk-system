<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg bg-white h-auto sm:h-screen">
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
                        <p class="text-sm font-medium leading-6 text-gray-900">Total Sections Handle</p>
                        <p class="mt-2 flex items-baseline gap-x-2">
                            <span class="text-4xl font-semibold tracking-tight text-black">{{ this.totalSections }}</span>
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
        <div class="overflow-auto mt-[50px] mx-5">
            <h2 class="text-xl text-center font-extrabold font-poppins text-black mb-2">Student Analytics: Quiz</h2>
            <table class="w-full text-sm text-left text-gray-500 py-[10px]">
                <thead class="text-xs text-gray-700 uppercase bg-gray-200 text-center">
                    <tr>
                        <th v-for="(stat, id) in quizStats" :key="id" scope="col" class="px-6 py-3 whitespace-nowrap">
                            {{ stat.label }}
                        </th>
                    </tr>
                </thead>
                <tbody v-for="(quiz, id) in quizAverages" :key="id">
                    <tr class="bg-white border-b text-center">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {{ id + 1 }}
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {{ quiz.student_name }}
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {{ quiz.quiz_title }}
                        </th>
                        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {{ quiz.quiz_attempts }}
                        </td>
                        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {{ quiz.average_score }}
                        </td>
                        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {{ quiz.average_mistakes }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {

    data() {
        return {
            quizStats: [
                { label: 'ID' },
                { label: 'Student Name' },
                { label: 'Quiz Title '},
                { label: 'No of Attempts' },
                { label: 'Average Scores' },
                { label: 'Average Mistakes' },
            ],
            quizAverages: [],
            lessons: {},
            quiz: {},
            students: {},
            sections: {},
            totalLesson: '',
            totalSections: '',
            totalQuiz: '',
            totalStudents: '',
        }
    },

    methods: {
        getLesson() {
            axios.get('/api/lesson/')
                .then((data) => {
                    this.lessons = data.data.data;
                    this.totalLesson = this.lessons.total;
                }).catch((e) => {
                    errorMessage('Opps!', e.message, 'top-right')
                });
        },
        getQuiz() {
            axios.get('/api/getquiz/')
                .then((data) => {
                    this.quiz = data.data.data;
                    this.totalQuiz = this.quiz.total;
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
        getSections() {
                axios.get('/api/getsections/')
                 .then((data) => {
                    this.sections = data.data.data;
                    this.totalSections = this.sections.length;
                    console.log(this.totalSections)
                }).catch((e) => {
                    errorMessage('Opps!', e.message, 'top-right')
                });
        },
        async getAverages() {
            await axios.get('/api/getaverages')
                .then(response => {
                    this.quizAverages = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },

    },

    created() {
        this.getLesson();
        this.getQuiz();
        this.getStudent();
        this.getAverages();
        this.getSections();
    }
}
</script>

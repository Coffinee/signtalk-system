<template>
    <div class="flex flex-col gap-[15px] ">
        <div class="flex justify-between items-center">
            <div class="code relative border border-gray-300 w-52 h-8 rounded-md">
                <input type="text" v-on:focus="$event.target.select()" ref="clone" readonly :value='classCode'
                    class="focus:outline-none select-none absolute w-full h-full tracking-widest px-14 whitespace-nowrap rounded-md bg-white" />
                <button @click="copy"
                    class="absolute flex justify-center items-center right-0 hover:bg-gray-200 bg-gray-100 h-full w-8 rounded-r-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray"
                        class="w-6 h-6 hover:stroke-gray-600">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                    </svg>
                </button>
            </div>
            <div class="flex gap-[10px]">
                <button @click="(approvalListOpen = !approvalListOpen)"
                    class="hover:text-white hover:bg-indigo-500 rounded-md border border-indigo-500 text-indigo-500 text-base w-[150px] h-auto py-1 px-2">For
                    Approval
                </button>
                <button @click="(modalOpen = !modalOpen)"
                    class="hover:text-white hover:bg-indigo-500 rounded-md border border-indigo-500 text-indigo-500 text-base w-[150px] h-auto py-1 px-2">Remove
                    Class
                </button>
            </div>
        </div>
        <div class="flex flex-col justify-center items-center text-black">
            <h2 class="text-2xl font-extrabold font-poppins text-black">{{ className }}</h2>
            <div class="flex  gap-[5px] text-xl">
                <p class="font-bold">S.Y. {{ classYear }}:</p>
                <p>{{ classSem }}</p>
            </div>
        </div>
        <div class="overflow-auto">
            <table class="w-full text-sm text-left text-gray-500 py-[10px]">
                <thead class="text-xs text-gray-700 uppercase bg-gray-200">
                    <tr>
                        <th v-for="label in officialTable" :key="label.label" scope="col"
                            class="px-6 py-3 whitespace-nowrap">
                            {{ label.label }}
                        </th>
                    </tr>
                </thead>
                <tbody v-for="item in officialStudents" :key="item.id">
                    <tr v-if="officialStudents && item.classCode == this.classCode" class="bg-white border-b">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {{ item.status }}
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {{ item.classCode }}
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {{ item.lrn }}
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {{ item.email }}
                        </th>
                        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {{ item.last_name }}
                        </td>
                        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {{ item.first_name }}
                        </td>
                        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            <button
                                @click.prevent="(studentReportOpen = !studentReportOpen), getStudentQuizResults(item.id)"
                                class="text-blue-400 underline">View Report</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <Modal :show="studentReportOpen" @close="viewStudentReportToggle" :title="'Student Report'" :heightModal="'h-[500px]'"
        :widthModal="'w-[1000px]'">
        <TabGroup :selectedIndex="selectedTab" @change="changeTab">
            <TabList
                class=" flex justify-center gap-[5px] text-sm font-medium text-center text-black dark:text-gray-400 dark:border-gray-700 w-full mb-[10px]">
                <Tab v-for="tab in studentReportTab" as="template" :key="tab" v-slot="{ selected }">
                    <button :class="[
                        'w-[150px] rounded-t-lg p-4 text-xs font-poppins dark:bg-[#232f4e] dark:hover:bg-gray-700',
                        selected
                            ? 'bg-indigo-500 text-white'
                            : 'shadow-md ',
                    ]">
                        {{ tab.name }}
                    </button>
                </Tab>
            </TabList>

            <TabPanels class=" sm:px-0">
                <TabPanel>
                    <div class="w-full h-full">
                        <div class="overflow-auto">
                            <table class="w-full text-sm text-left text-gray-500 py-[10px]">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-200 text-center">
                                    <tr>
                                        <th v-for="label in studentQuizRecord" :key="label.label" scope="col"
                                            class="px-6 py-3 whitespace-nowrap">
                                            {{ label.label }}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody v-for="quiz in quizRecordStudent" :key="quiz.id">
                                    <tr class="bg-white border-b text-center">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {{ quiz.quiz_title }}
                                        </th>
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {{ quiz.score }}
                                        </th>
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {{ quiz.mistakes }}
                                        </th>
                                        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {{ quiz.remaining_time }}
                                        </td>
                                        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {{ moment(quiz.created_at).format('MMMM Do YYYY, h:mm:ss a') }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div class="w-full h-full">
                        <div class="overflow-auto">
                            <table class="w-full text-sm text-left text-gray-500 py-[10px]">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-200 text-center">
                                    <tr>
                                        <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                            Lesson #
                                        </th>
                                        <th scope="col" class="px-6 py-3 whitespace-nowrap">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b text-center">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            ???
                                        </th>
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            ???
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </TabPanel>
            </TabPanels>
        </TabGroup>
    </Modal>
    <Modal :show="modalOpen" @close="modalToggle" :title="'Delete Confirmation'" :heightModal="'h-[150px]'">
        <div class="flex flex-col items-center justify-center w-full h-full">
            <div class="space-y-1">
                <p class="text-xl text-center text-black">Are you sure you want to delete this class?</p>
            </div>
            <div class="flex justify-center mt-5 gap-5">
                <button @click.prevent="deleteSection(sectionID)"
                    class="hover:text-white hover:bg-indigo-500 rounded-md border border-indigo-500 text-indigo-500 text-base w-[150px] h-auto py-1 px-3">Yes</button>
                <button @click.prevent="(modalOpen = !modalOpen)"
                    class="hover:text-white hover:bg-[#3E3E3E] rounded-md border border-[#3E3E3E] text-[#3E3E3E] text-base w-[150px] h-auto py-1 px-3">No</button>
            </div>
        </div>
    </Modal>
    <Modal :show="approvalListOpen" @close="approvalListToggle" :title="'Pending Students'" :heightModal="'h-[500px]'"
        :widthModal="'w-[1000px]'">
        <div class="w-full h-full">
            <div class="overflow-auto">
                <table class="w-full text-sm text-left text-gray-500 py-[10px]">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-200 text-center">
                        <tr>
                            <th v-for="label in pendingTable" :key="label.label" scope="col"
                                class="px-6 py-3 whitespace-nowrap">
                                {{ label.label }}
                            </th>
                        </tr>
                    </thead>
                    <tbody v-for="item in pendingStudents" :key="item.id">
                        <tr v-if="pendingStudents && item.classCode == this.classCode"
                            class="bg-white border-b text-center">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap capitalize">
                                {{ item.status }}
                            </th>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {{ item.classCode }}
                            </th>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {{ item.lrn }}
                            </th>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {{ item.email }}
                            </th>
                            <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {{ item.last_name }}
                            </td>
                            <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {{ item.first_name }}
                            </td>
                            <td
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex justify-center gap-[10px]">
                                <a href="#" @click="acceptStudent(item)"
                                    class="text-white p-2 bg-green-500 rounded-md">Accept</a>
                                <a href="#" @click="declineStudent(item)"
                                    class="text-white p-2 bg-red-500 rounded-md">Decline</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </Modal>
</template>

<script>
import Modal from '../../../../misc/Modal.vue';
import moment from 'moment';
export default {
    components: {
        Modal, moment
    },
    props: {
        sectionID: {
            type: Number,
            default: ''
        },
        classCode: {
            type: String,
            default: ''
        },
        className: {
            type: String,
            default: '',
        },
        classYear: {
            type: String,
            default: '',
        },
        classSem: {
            type: String,
            default: '',
        },
        officialStudents: {
            type: Array,
            default: () => []
        },
        quizAverage: {
            type: Object,
            default: ''
        }
    },
    data() {
        return {
            officialTable: [
                { label: 'Status' },
                { label: 'Class Code' },
                { label: 'LRN' },
                { label: 'Email' },
                { label: 'First Name' },
                { label: 'Last Name' },
                { label: 'Action' },
            ],
            pendingTable: [
                { label: 'Status' },
                { label: 'Class Code' },
                { label: 'LRN' },
                { label: 'Email' },
                { label: 'First Name' },
                { label: 'Last Name' },
                { label: 'Action' },
            ],
            studentReportTab: [
                { name: 'Quiz' },
                { name: 'Lesson' },
            ],
            studentQuizRecord: [
                { label: 'Quiz Title' },
                { label: 'Score' },
                { label: 'Mistake' },
                { label: 'Time Remaining' },
                { label: 'Date Taken' },
            ],
            SectionList: {},
            pendingStudents: [],
            officialStudents: [],
            quizRecordStudent: [],
            modalOpen: false,
            approvalListOpen: false,
            studentReportOpen: false,
        }
    },

    methods: {
        modalToggle() {
            this.modalOpen = false;
        },
        approvalListToggle() {
            this.approvalListOpen = false;
        },
        viewStudentReportToggle() {
            this.studentReportOpen = false;
        },
        copy() {
            this.$refs.clone.focus();
            document.execCommand('copy');
        },
        async deleteSection(id) {
            try {
                const response = await axios.delete(`/api/section/${id}`);
                // Handle the success response
                console.log(response.data); // or perform any other actions

                // Refresh the section list or perform any other necessary updates
                window.location.reload();
                // Example:          
                this.$emit('sectionDeleted', id);

            } catch (error) {
                // Handle the error response
                console.log(error.response.data); // or perform any other actions
            }
        },
        async getPendingStudents() {
            await axios.get('/api/getpending')
                .then((data) => {
                    this.pendingStudents = data.data.data;
                    console.log('pendingStudents:', this.pendingStudents);
                })
                .catch(error => {
                    console.error('Error fetching pending students:', error.data.data);
                });
        },
        async getOfficialStudents() {
            await axios.get('/api/getapprove')
                .then((data) => {
                    this.officialStudents = data.data.data;
                    console.log('officialStudents:', this.officialStudents);
                })
                .catch(error => {
                    console.error('Error fetching official students:', error.data.data);
                });
        },
        acceptStudent(student) {
            student.status = 'official';
            // Send a PUT request to update the student's status to 'official'
            axios.put('/api/user/' + student.id, { params: { data: student } })
                .then(response => {
                    // Remove the student from the pending list
                    this.pendingStudents = this.pendingStudents.filter(item => item.id !== student.id);
                    // Fetch the updated official students list
                    this.getOfficialStudents();
                })
                .catch(error => {
                    console.error('Error accepting student:', error.response.data);
                });
        },
        declineStudent(student) {
            student.status = 'declined';
            // Send a PUT request to update the student's status to 'declined'
            axios.put('/api/user/' + student.id, { params: { data: student } })
                .then(response => {
                    // Remove the student from the pending list
                    this.pendingStudents = this.pendingStudents.filter(item => item.id !== student.id);
                    // console.log(this.pendingStudents);
                })
                .catch(error => {
                    console.error('Error declining student:', error.response.data);
                });
        },
        getStudentQuizResults(studentId) {
            console.log(studentId)
            axios.get('/api/getstudentquiz?id=' + studentId)
                .then((data) => {
                    this.quizRecordStudent = data.data.data;
                    console.log(this.quizRecordStudent);
                })
                .catch(error => {
                    console.error(error);
                });
        },
    },
    created() {
        this.getPendingStudents();
        this.getOfficialStudents();
    }
}
</script>

<script setup>
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const selectedTab = ref(0)

function changeTab(index) {
    selectedTab.value = index
}
</script>


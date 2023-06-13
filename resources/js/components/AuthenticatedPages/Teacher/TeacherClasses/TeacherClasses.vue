<template>
    <div class="h-auto sm:h-screen">
        <div class="flex justify-between">
            <div>
                <h2 class="text-2xl font-extrabold font-poppins text-black">My Classes</h2>
            </div>
            <div class="flex space-x-1">
                <button @click="modalOpen = true"
                    class="bg-gray-900 hover:bg-gray-900/90 rounded-md text-white text-base px-8 py-2">Add
                    Class</button>
            </div>
        </div>
        <div class="h-auto w-full">
            <div v-if="SectionList != ''" class="">
                <TabGroup :selectedIndex="selectedTab" @change="changeTab">
                    <TabList
                        class="justify-start flex text-sm font-medium text-center dark:text-gray-400 dark:border-gray-700 w-full mt-[20px] space-x-1">
                        <Tab v-for="tab in SectionList" as="template" :key="tab" v-slot="{ selected }">
                            <button :class="[
                                'w-[150px] rounded-t-lg p-2 text-sm font-medium focus:outline-none text-black hover:bg-indigo-500 hover:text-white',
                                selected
                                    ? 'bg-indigo-500 dark:bg-indigo-500 text-white'
                                    : 'border',
                            ]">
                                {{ tab.className }}
                            </button>
                        </Tab>
                    </TabList>
                    <TabPanels v-for="tab in SectionList" :key="tab">
                        <TabPanel class="h-full w-full bg-white shadow-md rounded-md p-4 space-y-5 p">
                            <Section :className="tab.className" :classCode="tab.classCode" :classYear="tab.schoolYear" :classSem="tab.schoolSemester" :sectionID="tab.id"/>
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
            <div v-else class="w-full flex flex-col justify-center items-center mt-20">
                <img src="/images/nothing.png" class="w-[400px]">
                <p class="font-light tracking-widest">Nothing to show ...</p>
            </div>
        </div>
    </div>

    <Modal :show="modalOpen" @close="modalToggle" :title="'Create A New Class'" :heightModal="'h-[270px]'">
        <div class="w-full h-full">
            <form @submit.prevent="addSection()">
                <div class="space-y-1">
                    <label for="className" class="text-xs text-black">Enter Your Class Name/Section: </label>
                    <input v-model="form.className" type="text"
                        class="focus:outline-none pl-2 text-xs text-black w-full h-8 rounded-md border border-indigo-900 bg-white"
                        placeholder="Ex: Section 1">
                </div>
                <div class="space-y-1">
                    <label for="schoolYear" class="text-xs text-black">School Year: </label>
                    <input v-model="form.schoolYear" type="text"
                        class="focus:outline-none pl-2 text-xs text-black w-full h-8 rounded-md border border-indigo-900 bg-white"
                        placeholder="Ex: 2022 - 2023">
                </div>
                <div class="space-y-1">
                    <label for="schoolSemester" class="text-xs text-black">Select Quarter Period: </label>
                    <div class="flex items-center justify-center space-x-5">
                        <select v-model="form.schoolSemester"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                            <option value="" hidden>Select an item</option>
                            <option :value="semester.value" v-for="semester in semesters" :key="semester.id">{{
                                semester.period }}</option>
                        </select>
                    </div>
                </div>
                <div class="flex justify-center mt-5 gap-5">
                    <button @click.prevent="(modalOpen = !modalOpen)"
                        class="hover:text-white hover:bg-[#3E3E3E] rounded-md border border-[#3E3E3E] text-[#3E3E3E] text-base w-[150px] h-auto py-1 px-3">Cancel</button>
                    <button type="submit"
                        class="hover:text-white hover:bg-indigo-500 rounded-md border border-indigo-500 text-indigo-500 text-base w-[150px] h-auto py-1 px-3 disabled:cursor-default"
                        :disabled="!form.className ? true : false">Add</button>
                </div>
            </form>
        </div>
    </Modal>
</template>
<script>
import { createToast } from 'mosha-vue-toastify';
import Section from './Tabs/Section.vue';
import Modal from '../../../misc/Modal.vue';
import Form from 'vform';
import axios from 'axios';

export default {
    components: {
        Section,
        Modal
    },
    data() {
        return {
            data: {},
            SectionList: [],
            pendingStudents: [],
            officialStudents: [],
            textToCopy: '',
            modalOpen: false,
            approvalListOpen: false,
            form: new Form({
                className: '',
                classCode: '',
                schoolYear: '',
                schoolSemester: ''
            }),
            semesters: [
                { id: 1, period: 'First', value: 'First' },
                { id: 1, period: 'Second', value: 'Second' },
                { id: 1, period: 'Third', value: 'Third' },
                { id: 1, period: 'Fourth', value: 'Fourth' },
            ],

        }
    },

    methods: {
        copy() {
            this.$refs.clone.focus();
            document.execCommand('copy');
        },
        modalToggle() {
            this.modalOpen = false;
            this.form = new Form({
                className: '',
                classCode: '',
                schoolYear: '',
                schoolSemester: ''
            })
        },
        addSection() {
            this.$Progress.start();
            this.form.post('/api/section')
                .then((data) => {
                    // console.log(this.form.schoolYear +'  '+this.form.schoolSemester);
                    this.$Progress.finish();
                    this.getClass();
                    this.modalToggle();
                    createToast({
                        title: 'Hurray!',
                        description: "Class Added"
                    },
                        {
                            showIcon: 'true',
                            position: 'top-right',
                            type: 'info',
                            hideProgressBar: 'true',
                            transition: 'bounce',
                        })
                }).catch((error) => {
                    this.$Progress.fail();
                })
        },
        async getClass() {
            await axios.get('/api/getclass').then((data) => {
                this.SectionList = data.data.data;
            }).catch((e) => {
                errorMessage('Opps!', e.message, 'top-right')
            });
        },


    },
    created() {
        this.getClass();
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

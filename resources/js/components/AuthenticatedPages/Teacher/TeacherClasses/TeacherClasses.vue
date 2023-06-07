<template>
    <div>
        <div class="flex justify-between">
            <div>
                <h2 class="text-2xl font-extrabold font-poppins text-black">My Classes</h2>
            </div>
            <div class="flex space-x-1">
                <button @click="modalOpen = true"
                    class="hover:text-white hover:bg-indigo-500 rounded-md border border-indigo-500 text-indigo-500 text-base w-[150px] h-auto py-1 px-3">Add
                    Class</button>
            </div>
        </div>
        <div class="h-auto w-full">
            <div v-if="SectionList != ''" class="">
                <TabGroup :selectedIndex="selectedTab" @change="changeTab">
                    <TabList
                        class="justify-start flex text-sm font-medium text-center dark:text-gray-400 dark:border-gray-700 w-full mt-[20px] mb-[20px] border-b space-x-1">
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
                        <TabPanel class="h-full w-full border border-gray-300 rounded-md p-4 space-y-5 p">
                            <Student1 :classCode="tab.classCode"/>
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

    <Modal :show="modalOpen" @close="modalToggle" :title="'Create A New Class'" :heightModal="'h-[150px]'">
        <div class="w-full h-full">
            <form @submit.prevent="addSection()">
                <div class="space-y-1">
                    <label for="word" class="text-xs">Enter Your Class Name/Section: </label>
                    <input v-model="form.className" type="text"
                        class="focus:outline-none pl-2 text-xs text-black w-full h-8 rounded-md border border-indigo-900 bg-white">
                </div>
                <div class="flex justify-center mt-5 gap-5">
                    <button @click.prevent="(modalOpen = !modalOpen)"
                        class="hover:text-white hover:bg-[#3E3E3E] rounded-md border border-[#3E3E3E] text-[#3E3E3E] text-base w-[150px] h-auto py-1 px-3">Cancel</button>
                    <button type="submit"
                        class="hover:text-white hover:bg-indigo-500 rounded-md border border-indigo-500 text-indigo-500 text-base w-[150px] h-auto py-1 px-3">Add</button>
                </div>
            </form>
        </div>
    </Modal>
</template>
<script>

import Student1 from './Tabs/Student1.vue';
import Modal from '../../../misc/Modal.vue';
import Form from 'vform';
import axios from 'axios';

export default {
    components: {
        Student1,
        Modal
    },
    data() {
        return {
            data:{},
            SectionList: [],
            textToCopy: '',
            modalOpen: false,
            form: new Form({
                className: '',
                classCode: ''
            })

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
            })
        },
        addSection() {
            this.$Progress.start();
            this.form.post('/api/section')
                .then((data) => {
                    this.$Progress.finish();
                    this.getClass();
                    this.modalToggle();
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
    created(){
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

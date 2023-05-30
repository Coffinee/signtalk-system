<template>
    <div>
        <div class="flex justify-between">
            <div>
                <h2 class="text-2xl font-extrabold font-poppins text-black">My Classes</h2>
            </div>
            <div class="flex space-x-1">
                <button
                    class="hover:text-white hover:bg-indigo-500 rounded-md border-2 border-indigo-500 text-indigo-500 text-base w-[150px] h-auto py-1 px-3">Send Invitation</button>
                <button
                    class="hover:text-white hover:bg-indigo-500 rounded-md border-2 border-indigo-500 text-indigo-500 text-base w-[150px] h-auto py-1 px-3">Add
                    Class</button>
            </div>
        </div>
        <div class="h-auto w-full">
            <TabGroup :selectedIndex="selectedTab" @change="changeTab">
                <TabList
                    class=" justify-start flex text-sm font-medium text-center dark:text-gray-400 dark:border-gray-700 w-full mt-[20px] mb-[20px] border-b space-x-1">
                    <Tab v-for="tab in SectionList" as="template" :key="tab" v-slot="{ selected }">
                        <button :class="[
                            'w-[150px] rounded-t-lg p-2 text-sm font-medium focus:outline-none text-black hover:bg-indigo-500 hover:text-white',
                            selected
                                ? 'bg-indigo-500 dark:bg-indigo-500 text-white'
                                : 'border',
                        ]">
                            {{ tab.name }}
                        </button>
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel class="h-full w-full border border-gray-300 rounded-md p-4 space-y-5">
                        <Student1/>
                    </TabPanel>
                    <TabPanel class="h-full w-full border border-gray-300 rounded-md p-4 space-y-5">
                        <Student1/>
                    </TabPanel>
                    <TabPanel class="h-full w-full border border-gray-300 rounded-md p-4 space-y-5">
                        <Student1/>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
    </div>

    <Modal :show="modalOpen" @close="modalToggle" :title="'Create A New Section'" :heightModal="'h-[150px]'">
        <div class="w-full h-full">
            <div class="space-y-1">
                <label for="word" class="text-[15px]">Enter Your Class Section: </label>
                <input type="text" class="focus:outline-none pl-2 text-xs w-full h-8 rounded-md border border-indigo-900">
            </div>
            <div class="flex justify-center mt-5 gap-5">
                <button @click="(modalOpen = !modalOpen)"
                    class="hover:text-white hover:bg-[#3E3E3E] rounded-md border-2 border-[#3E3E3E] text-#3E3E3E text-base w-[150px] h-auto py-1 px-3 uppercase">CANCEL</button>
                <button @click="(modalOpen = !modalOpen)" class="hover:text-white hover:bg-indigo-500 rounded-md border-2 border-indigo-500 text-indigo-500 text-base w-[150px] h-auto py-1 px-3 uppercase">ADD</button>
            </div>
        </div>
    </Modal>
</template>
<script>

import Student1 from './Tabs/Student1.vue';
import Modal from '../../../misc/Modal.vue';

export default {
    components:{
        Student1,
        Modal
    },
    data() {
        return {
            SectionList: [
                { name: 'Section 1' },
                { name: 'Section 2' },
                { name: 'Section 3' },
            ],
            textToCopy: '',
            modalOpen: false,

        }
    },

    methods: {
        copy() {
            this.$refs.clone.focus();
            document.execCommand('copy');
        },
        modalToggle() {
            this.modalOpen = false;
        },
    },

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

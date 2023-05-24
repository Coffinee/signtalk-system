<template>
    <div>
        <div class="flex justify-between">
            <div>
                <h2 class="text-2xl font-extrabold font-poppins">My Classes</h2>
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
                    <Tab v-for="tab in settingTabs" as="template" :key="tab" v-slot="{ selected }">
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
                    <TabPanel class="h-full w-full border border-black rounded-md p-4 space-y-5">
                        <Student1/>
                    </TabPanel>
                    <TabPanel class="h-full w-full border border-black rounded-md p-4 space-y-5">
                        <Student1/>
                    </TabPanel>
                    <TabPanel class="h-full w-full border border-black rounded-md p-4 space-y-5">
                        <Student1/>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
    </div>
</template>
<script>

import Student1 from './Tabs/Student1.vue';

export default {
    components:{
        Student1,

    },
    data() {
        return {
            settingTabs: [
                { name: 'Section 1' },
                { name: 'Section 2' },
                { name: 'Section 3' },
            ],
            textToCopy: ''

        }
    },

    methods: {
        copy() {
            this.$refs.clone.focus();
            document.execCommand('copy');
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
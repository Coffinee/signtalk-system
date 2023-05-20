<template>
  <div class="h-full">
    <TabGroup :selectedIndex="selectedTab" @change="changeTab">
        <TabList class=" flex justify-center  gap-[5px] text-sm font-medium text-center text-dark dark:text-gray-400 dark:border-gray-700 w-full mt-[20px] mb-[50px]">
            <Tab
                v-for="tab in settingTabs"
                as="template"
                :key="tab"
                v-slot="{ selected }"
                >
                <button
                    :class="[
                    'w-[150px] rounded-t-lg p-5 text-sm font-medium dark:hover:bg-gray-700',
                    selected
                        ? 'bg-indigo-500 dark:bg-gray-700 text-white'
                        : 'shadow-md ',
                    ]"
                >
                    {{ tab.name }}
                </button>
            </Tab>
        </TabList>

        <TabPanels>

            <TabPanel class="h-full w-full">
                <Profile/>
            </TabPanel>

            <TabPanel  class="">
                <Analytics/>
            </TabPanel>

            <TabPanel  class="">
                <Personalization/>
            </TabPanel>

        </TabPanels>
    </TabGroup>
  </div>
</template>

  <script>
  import Sidebar from '../../../misc/Sidebar.vue';
  import Profile from '@/components/AuthenticatedPages/User/Setting/Tabs/Profile.vue';
  import Analytics from '@/components/AuthenticatedPages/User/Setting/Tabs/Analytics.vue';
  import Personalization from '@/components/AuthenticatedPages/User/Setting/Tabs/Personalization.vue';
  export default {
    components: {
      Sidebar,
      Profile,
      Analytics,
      Personalization,

    },

    data() {
        return {
            SideBarNav:[
                {name:'Profile', href:'/student/setting/profile'},
                {name:'My Analytics', href:'/student/setting/analytics'},
                {name:'Personalization', href:'/student/setting/personalization'},
            ],
            settingTabs:[
                {name: 'Profile'},
                {name: 'Analytics'},
                {name: 'Personalization'},
            ]
        }
    },
  }
  </script>

<!-- <script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]

const sidebarOpen = ref(false)
</script> -->

<script setup>
   import { ref } from 'vue'
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

  const selectedTab = ref(0)

  function changeTab(index) {
    selectedTab.value = index
  }
</script>


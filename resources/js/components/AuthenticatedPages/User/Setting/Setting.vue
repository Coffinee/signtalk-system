<template>
    <div class="w-full h-screen bg-white flex">
        <div class="md:w-[20%] hidden md:block sm:hidden ">
            <Sidebar :sideBarItems="SideBarNav"/>
        </div>
        <div class="w-full">
            <router-view></router-view>
        </div>
    </div>
  </template>

  <script>
  import Sidebar from '../../../misc/Sidebar.vue';
  import Profile from '@/components/AuthenticatedPages/User/Setting/Tabs/Profile.vue';
  import Analytics from '@/components/AuthenticatedPages/User/Setting/Tabs/Analytics.vue';
  import Personalization from '@/components/AuthenticatedPages/User/Setting/Tabs/Profile.vue';
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
        }
    },
  }
  </script>


<template>
  <nav class="bg-white border-gray-200 dark:bg-[#141526] sticky top-0 inset-x-0 w-full z-50">
    <div class="relative flex flex-wrap items-center justify-between mx-auto py-4 px-16 border-b border-gray-200 dark:border-gray-700">
      <router-link to="/">
        <p class="self-center text-3xl font-bold whitespace-nowrap text-black dark:text-white">Sign<span
            class="text-indigo-500  font-bold">Talk</span>
        </p>
      </router-link>
      <button @click="expand" type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
      <div :show="open == true"
        :class="[!open ? 'hidden w-full md:block md:w-auto space-x-5' : 'absolute top-[55px] left-0 right-0 z-10']">
        <ul
          class="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-[#141526] dark:border-gray-700">
          <li class="flex items-center flex-col md:flex-row">
            <router-link v-for="item in topbarNavigation" :key="item.name" :to="item.href" class="w-full"
              :class="[this.$router.path == item.href ? ' text-indigo-500' : 'text-black dark:text-slate-400 hover:text-blue-800', 'group flex rounded-xl px-6 py-2 text-sm leading-6 tracking-wide font-medium', open ? 'flex flex-col text-center' : '']"
              :aria-current="item.current ? 'page' : undefined">
              <component :is="item.icon" class="mr-4 h-6 w-6 text-indigo-500" aria-hidden="true" />
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { userAuthStore } from '@/store/auth';
import {
  UserIcon,
  UserPlusIcon
} from "@heroicons/vue/24/outline";
export default {
  components:{
    UserIcon, UserPlusIcon
  },
  data() {
    return {

      topbarNavigation: [
        { name: 'Login', href: '/login', icon: UserIcon},
        { name: 'Register', href: '/register', icon: UserPlusIcon},

      ],
      open: false,
      isAuthenticated: userAuthStore().authenticated,
    }
  },

  methods: {
    expand() {
      this.open = !this.open
    },
    async logout(){
        await this.$axios.post('/logout').then(({data})=>{
            userAuthStore().signOut()
            this.$router.push({name:"login"}).then(() => { this.$router.go() })
        })
    }
    

  },

}

</script>

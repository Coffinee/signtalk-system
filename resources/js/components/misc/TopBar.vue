<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 insex-x-0 w-full z-50">
    <div
      class="relative flex flex-wrap items-center justify-between mx-auto p-4 border-b border-gray-200 dark:border-gray-700">
      <router-link to="/index">
        <p class="self-center text-3xl font-bold whitespace-nowrap dark:text-white">Sign<span
            class="text-indigo-500  font-bold">Talk</span></p>
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
          class="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <!-- <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a> -->
            <router-link v-for="item in topbarNavigation" :key="item.name" :to="item.href" class="w-full"
              :class="[useRoute().path == item.href ? ' text-indigo-500' : 'text-black dark:text-slate-400 hover:text-blue-800', 'group rounded-xl px-6 py-2 text-sm leading-6 tracking-wide font-medium', open ? 'flex flex-col text-center' : '']"
              :aria-current="item.current ? 'page' : undefined">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="flex">
        <ul class="flex items-center md:p-2  rounded-lg   md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700" >
          <li >
            <Menu as="div" class="relative" :class="isAuthenticated === true ? 'block' : 'hidden'">
                <MenuButton class="-m-1.5 flex items-center p-1.5 ">
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full bg-gray-50 " src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <span class="hidden lg:flex lg:items-center">
                    </span>
                </MenuButton>
                <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                    <MenuItems class="absolute right-0 z-10 mt-2.5 w-[150px] origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      <MenuItem class="border-b border-gray-300">
                          <a class="block px-3 py-1 text-sm leading-6 text-gray-900 capitalize text-center">{{ user_full_name }}</a>
                      </MenuItem>
                      <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">             
                          <a :href="item.href" :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900 capitalize text-right']">{{ item.name }}</a>
                      </MenuItem>
                    </MenuItems>
                </transition>
            </Menu>
          </li>
          <li :class="isAuthenticated === true ? 'hidden' : 'block'">
            {{ isAuthenticated }}s
            <router-link to="/login" class="text-white dark:text-white hover:text-blue-800', 'group rounded-xl px-5 py-2 text-sm leading-6 tracking-wide font-medium bg-indigo-500 hover:bg-indigo-600 flex flex-col text-center">
              Login
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import { useRouter, useRoute } from 'vue-router';
  import { ref } from 'vue';
  import { userAuthStore } from '@/store/auth';
  import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'

const user_full_name = ref(userAuthStore().user.name);
</script>

<script>
const userNavigation = [
  { name: 'Settings', href: '/student/setting/profile' },
  { name: 'Logout', href: '#' },
]
const user_full_name = ref(userAuthStore().user.name);
const isAuthenticated = ref(userAuthStore().authenticated);
export default {

  data() {
    return {

      topbarNavigation:[
        { name: 'Home', href: '/index' },
        { name: 'Dictionary', href: '/student/dictionary' },
        { name: 'Lesson', href: '/student/lesson' },
        { name: 'Quiz', href: '/student/quiz' },
        { name: 'Translate', href: '/student/translate' },
      ],
      open: false
    }
  },

  methods: {
    expand() {
      this.open = !this.open
      console.log('clicked')
    },
  }

}

</script>

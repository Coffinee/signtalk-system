<template>
  <nav class="bg-white border-gray-200 dark:bg-[#141526] sticky top-0 insex-x-0 w-full z-50">
    <div
      class="relative flex items-center justify-between mx-auto p-4 px-16 border-b border-gray-200 dark:border-gray-700">
      <router-link to="/">
        <p class="self-center text-3xl font-bold whitespace-nowrap text-black dark:text-white">Sign<span
            class="text-indigo-500  font-bold">Talk</span></p>
      </router-link>
      <!-- <button @click="expand" type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"></path>
        </svg>
      </button> -->
      <div >
        <ul
          class="font-medium flex flex-col items-center md:p-0 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900">
          <li class="flex gap-[10px]">
            <Menu as="div" class="relative" :class="isAuthenticated === true ? 'block' : 'hidden'">
              <MenuButton class="flex items-center">
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full border bg-white"
                  src="https://cdn.onlinewebfonts.com/svg/img_299586.png"
                  alt="" />
                <span class="hidden lg:flex lg:items-center">
                  <span class="ml-4 text-sm font-semibold leading-6 text-black dark:text-white" aria-hidden="true">{{ user_fname }} {{ user_lname }}</span>
                  <ChevronDownIcon class="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </MenuButton>
              <transition enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95">
                <MenuItems
                  class="absolute right-0 z-10 mt-2.5 w-[150px] origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none border-5 border-red-500">
                  <!-- <router-link to="/setting/profile"
                    :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900 text-center']">Settings</router-link>
                  <router-link to="#" @click.prevent="logout"
                    :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900 text-center']">Sign out</router-link> -->
                  <router-link to="/setting/profile"  class="block px-3 py-1 text-sm leading-6 text-gray-900 text-center">Settings</router-link>
                  <router-link to="#" @click.prevent="logout" class="block px-3 py-1 text-sm leading-6 text-gray-900 text-center">Sign Out</router-link>
                </MenuItems>
              </transition>
            </Menu>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
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
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

export default {

  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    ChevronDownIcon
  },
  data() {
    return {
      open: false,
      isAuthenticated: userAuthStore().authenticated,
      user_fname: userAuthStore().user.first_name,
      user_lname: userAuthStore().user.last_name,
    }
  },
  methods: {
    expand() {
      this.open = !this.open
      console.log('clicked')
    },
    async logout() {
      await this.$axios.post('/logout').then(({ data }) => {
        userAuthStore().signOut()
        this.$router.push({ name: "login" });
      })
    }
  }
}
</script>

  
<template>
  <nav class="bg-white dark:bg-gray-900 pt-5 text-center flex flex-col items-center justify-center">
    <router-link to="/Student/Home" class="mb-3 w-36">
      <p class="self-center text-3xl font-bold whitespace-nowrap dark:text-white">Sign<span
          class="text-indigo-500  font-bold">Talk</span></p>
    </router-link>
    <div class="flex items-center justify-center space-x-5">
      <router-link to="#" class="dark:text-white text-xs rounded py-1 px-3 hover:bg-indigo-900/90 hover:text-white">Login</router-link>
      <router-link to="/Student/Register" class="dark:text-white text-xs rounded py-1 px-3 hover:bg-indigo-900/90 hover:text-white">Register</router-link>
    </div>
    <!-- <button data-collapse-toggle="navbar-default" type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto space-x-5">
        <router-link v-for="item in topbarNavigation" :key="item.name" :to="item.href"
          :class="[useRoute().path == item.href ? ' text-indigo-500 ' : 'text-black dark:text-slate-400 hover:text-blue-800', 'group rounded-xl px-6 py-2 text-sm leading-6 tracking-wide font-medium ']"
          :aria-current="item.current ? 'page' : undefined">
          {{ item.name }}
        </router-link>
      </div> -->
  </nav>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const topbarNavigation = [
  { name: 'Home', href: '/Student/Home' },
  { name: 'Lesson', href: '/Student/Lesson' },
  { name: 'Dictionary', href: '/Student/Dictionary' },
  { name: 'Quiz', href: '/Student/Quiz' },
  { name: 'Exam', href: '/Student/Exam' },
]

</script>
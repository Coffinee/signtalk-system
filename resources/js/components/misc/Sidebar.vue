<template>
    <div class="sidebar bg-white border w-full h-full overflow-x-hidden ">
      <ul class="flex flex-col items-start justify-start w-full p-0 ">
        <li v-for="sideBarItem in sideBarItems" :key="sideBarItem" class=" w-full mb-3"><a class="active:bg-indigo-400 whitespace-nowrap w-full px-5 text-black text-[16px] no-underline hover:bg-gray-200 rounded-lg capitalize" active="{{ sideBarItem.href }}" :href=" sideBarItem.href ">{{ sideBarItem.name }}</a></li>
      </ul>
    </div>
  </template>

<script>
export default {
    props:{

        sideBarItems:{
            type: Array,
            required: true,
        }

    },
}
</script>

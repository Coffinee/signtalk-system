<template>
    <div class="code relative border border-gray-300 w-52 h-8 rounded-md">
        <input type="text" v-on:focus="$event.target.select()" ref="clone" readonly value='ABCDEFG'
            class="focus:outline-none select-none absolute w-full h-full tracking-widest px-14 whitespace-nowrap rounded-md bg-white" />
        <button @click="copy"
            class="absolute flex justify-center items-center right-0 hover:bg-gray-200 bg-gray-100 h-full w-8 rounded-r-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray"
                class="w-6 h-6 hover:stroke-gray-600">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
            </svg>
        </button>
    </div>
    <div class="analytics w-full shadow-md rounded-md shadow-indigo-200 p-3">
        <p class="text-lg font-poppins flex gap-1 items-center">Analytics
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green"
                    class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
            </span>
        </p>
    </div>
    <div class="flex justify-between items-center w-full">
        <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <input type="text" id="table-search"
                class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-48 md:w-80 bg-gray-50"
                placeholder="Search for items">
        </div>
        <div>
            <button
                class="hover:text-white hover:bg-indigo-500 rounded-md border-2 border-indigo-500 text-indigo-500 text-base h-full py-1 px-3">
                <span class="hidden sm:inline">ADD STUDENT</span>
                <span class="inline sm:hidden">
                    <svg class="w-5 h-7" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6v12m6-6H6" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </span>
            </button>
        </div>
    </div>
    <div class="overflow-auto"> 
        <table class="w-full text-sm text-left text-gray-500 py-[10px]">
            <thead class="text-xs text-gray-700 uppercase bg-gray-200">
                <tr>
                    <th v-for="label in tableLabels" :key="label.label" scope="col" class="px-6 py-3 whitespace-nowrap">
                        {{ label.label }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <!-- <tr v-for="item in data.data" :key="item.id" class="bg-white border-b ">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {{ item.id }}
                                        </th>
                                        <td class="px-6 py-4">
                                            {{ item.word }}
                                        </td>
                                        <td class="px-6 py-4">
                                            {{ item.description }}
                                        </td>
                                        <td class="px-6 py-4">
                                            {{ item.file }}
                                        </td>
                                        <td class="px-6 py-4 flex gap-[5px] text-center">
                                            <a @click.prevent="editForm(item)"
                                                class="font-medium text-blue-600  hover:underline">Edit</a>
                                        </td>
                                    </tr> -->

                <tr>
                    <td>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {

    data() {
        return {
            tableLabels:[
                {label:'LRN'},
                {label:'First Name'},
                {label:'Last Name'},
                {label:'Quiz 1'},
                {label:'Quiz 2'},
                {label:'Quiz 3'},
                {label:'Quiz 4'},
                {label:'Action'},
            ],
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


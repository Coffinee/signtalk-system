<template>
    <div class="flex justify-between items-center">
        <div class="code relative border border-gray-300 w-52 h-8 rounded-md">
            <input type="text" v-on:focus="$event.target.select()" ref="clone" readonly :value='classCode'
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
        <button @click.prevent="deleteSection(sectionID)"
            class="hover:text-white hover:bg-indigo-500 rounded-md border border-indigo-500 text-indigo-500 text-base w-[150px] h-auto py-1 px-2">Remove
            Class
        </button>
    </div>

    <button
        class="hover:text-white hover:bg-indigo-500 rounded-md border border-indigo-500 text-indigo-500 text-base w-[150px] h-full py-1 px-3">
        <span class="hidden sm:inline">Add Student</span>
        <span class="inline sm:hidden">
            <svg class="w-5 h-7" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6v12m6-6H6" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </span>
    </button>
    <div class="overflow-auto">
        <table class="w-full text-sm text-left text-gray-500 py-[10px]">
            <thead class="text-xs text-gray-700 uppercase bg-gray-200">
                <tr>
                    <th v-for="label in tableLabels" :key="label.label" scope="col" class="px-6 py-3 whitespace-nowrap">
                        {{ label.label }}
                    </th>
                </tr>
            </thead>
            <tbody v-for="item in studentList" :key="item.id">
                <tr v-if="item.classCode == this.classCode" class="bg-white border-b">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {{ item.classCode }}
                    </th>
                    <td class="px-6 py-4">
                        {{ item.last_name }}
                    </td>
                    <td class="px-6 py-4">
                        {{ item.first_name }}
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>

export default {
    props: {
        sectionID: {
            type: Number,
            default: ''
        },
        classCode: {
            type: String,
            default: ''
        },
        studentList: {
            type: Object,
            default: ''
        }
    },
    data() {
        return {
            tableLabels: [
                { label: 'classCode' },
                { label: 'First Name' },
                { label: 'Last Name' },
            ],
            SectionList: {}
        }
    },

    methods: {
        copy() {
            this.$refs.clone.focus();
            document.execCommand('copy');
        },
        async deleteSection(id) {
            try {
                const response = await axios.delete(`/api/section/${id}`);
                // Handle the success response
                console.log(response.data); // or perform any other actions

                // Refresh the section list or perform any other necessary updates
                window.location.reload();
                // Example:          
                this.$emit('sectionDeleted', id);
            } catch (error) {
                // Handle the error response
                console.log(error.response.data); // or perform any other actions
            }
        }
    },
}
</script>


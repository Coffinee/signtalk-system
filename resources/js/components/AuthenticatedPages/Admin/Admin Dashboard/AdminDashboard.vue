<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
        <div class="flex justify-between px-[30px] pt-[30px]">
            <h2 class="text-2xl font-extrabold font-poppins text-black">Dashboard</h2>
        </div>
        <div class="m-5 bg-gray-900">
            <div class="mx-auto max-w-7xl">
                <div class="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4 ">
                    <div v-for="stat in dashboardStats" :key="stat.name" class="bg-gray-900 px-4 py-6 sm:px-6 lg:px-8">
                        <p class="text-sm font-medium leading-6 text-gray-400">{{ stat.category }}</p>
                        <p class="mt-2 flex items-baseline gap-x-2">
                            <span class="text-4xl font-semibold tracking-tight text-white">{{ stat.quantity }}</span>
                            <span v-if="stat.unit" class="text-sm text-gray-400">{{ stat.unit }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

    data() {
        return {
            dashboardStats: [
                { id: 1, category: 'Total Users', quantity: '37' },
                { id: 2, category: 'Total Lesson Deployed', quantity: '3' },
                { id: 3, category: 'Total Quiz Deployed', quantity: '5' },
                { id: 4, category: 'Total Words in Dictionary', quantity: '20' },
            ]
        }
    }
}
</script>

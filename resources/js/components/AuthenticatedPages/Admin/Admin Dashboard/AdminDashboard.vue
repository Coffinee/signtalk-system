<template>
    <dl class="mx-auto grid grid-cols-1 gap-[10px]  sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="stat in dashboardStats" :key="stat.id" class="flex flex-wrap items-baseline justify-between rounded-md shadow-md gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8">
            <dt class="text-xl font-medium leading-6 text-indigo-500">{{stat.category}}</dt>
            <dd class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">{{ stat.quantity }}</dd>
        </div>
    </dl>
</template>
<script>
    export default{

        data(){
            return{
                dashboardStats:[
                    {id: 1, category: 'Total Users', quantity: '37'},
                    {id: 2, category: 'Total Lesson Deployed', quantity: '3'},
                    {id: 3, category: 'Total Quiz Deployed', quantity: '5'},
                    {id: 4, category: 'Total Words in Dictionary', quantity: '20'},
                ]
            }
        }
    }
</script>

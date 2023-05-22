<template>
    <div class="p-3 h-screen w-auto">   
        <div class="flex justify-center relative overflow-x-auto shadow-md sm:rounded-lg">
            <table  class="sm:w-full lg:w-[80%] text-sm text-left text-black dark:text-gray-400 border-x border-gray-200 dark:border-gray-700 mb-10">
                <caption class="p-5 text-lg font-semibold text-center text-gray-900 bg-white dark:bg-transparent dark:text-white">
                    Quiz Analytics
                </caption>
                <thead class="border-t border-gray-200 dark:border-gray-700 text-xs text-white text-center uppercase dark:text-white rounded-t-md">
                    <tr class="bg-indigo-500 dark:bg-gray-800 divide-x divide-gray-200 dark:divide-gray-700">
                        <th scope="col" class="px-6 py-3">
                            Quiz Name                            
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Quiz # of Items
                        </th>
                        <th scope="col" class="px-6 py-3">
                            My Score
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Accuracy
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Time Consumed (minutes)
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Date Taken
                        </th>
                    </tr>
                </thead>
                <tbody class="text-center">
                    <tr class="border-b border-gray-200 dark:border-gray-700 divide-x divide-gray-200 dark:divide-gray-700">
                        <td class="px-6 py-4 font-bold">
                            ASL: Alphabet
                        </td>
                        <td class="px-6 py-4">
                            10
                        </td>
                        <td class="px-6 py-4">
                            8
                        </td>
                        <td class="px-6 py-4">
                            80%
                        </td>
                        <td class="px-6 py-4">
                            5
                        </td>
                        <td class="px-6 py-4">
                            5/22/2023
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

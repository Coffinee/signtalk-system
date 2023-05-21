<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div class="flex justify-between p-2 px-[30px] pt-[30px]">
            <h2 class="text-2xl font-extrabold font-poppins">Create Quiz</h2>
        </div>
        <form class="flex flex-col justify-between p-2 px-[30px] pt-[30px]">
            <div class="mb-6">
                <label for="title" class="block mb-2 text-sm font-medium text-gray-900">Title:</label>
                <input type="text" id="title"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Enter Quiz Title" required>
            </div>
            <div class="mb-6">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Description:</label>
                <textarea id="message" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter Quiz Description"></textarea>
            </div>
            <button type="submit"
                class="mb-[30px] text-white bg-indigo-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Next</button>
        </form>
    </div>
</template>
<template>
    <div>
        <h2 class="text-2xl font-extrabold font-poppins">Dashboard</h2>
        <div class="flex gap-x-[30px]">
            <div class="flex gap-x-[10px] max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <div class="flex flex-col items-between">
                    <div>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Dictionary</h5>
                        <p class="font-normal text-gray-700 text-[18px]">100 Words Added</p>
                    </div>
                    <div>
                        <p class="text-indigo-500 font-semibold text-[15px]">As of April 29, 2023</p>
                    </div>
                </div>
                <div>
                    <BookOpenIcon class="h-[50px] w-[50px] text-white p-2 bg-indigo-500 rounded-full"/>
                </div>
            </div>
            <div class="flex gap-x-[10px] max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <div class="flex flex-col justify-between">
                    <div>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Lesson</h5>
                        <p class="font-normal text-gray-700 text-[18px]">23 Lessons Deployed</p>
                    </div>
                    <div>
                        <p class="text-indigo-500 font-semibold text-[15px]">As of April 29, 2023</p>
                    </div>
                </div>
                <div>
                    <ClipboardDocumentIcon class="h-[50px] w-[50px] text-white p-2 bg-indigo-500 rounded-full"/>
                </div>
            </div>
            <div class="flex gap-x-[10px] max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <div class="flex flex-col justify-between">
                    <div>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Quiz</h5>
                        <p class="font-normal text-gray-700  text-[18px]">3 Quizzes Deployed</p>
                    </div>
                    <div>
                        <p class="text-indigo-500 font-semibold text-[15px]">As of April 29, 2023</p>
                    </div>
                </div>
                <div>
                    <DocumentTextIcon class="h-[50px] w-[50px] text-white p-2 bg-indigo-500 rounded-full"/>
                </div>
            </div>
            <div class="flex gap-x-[10px] max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <div class="flex flex-col justify-between">
                    <div>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Examination</h5>
                        <p class="font-normal text-gray-700  text-[18px]">2 Exams Deployed </p>
                    </div>
                    <div>
                        <p class="text-indigo-500 font-semibold text-[15px]">As of April 29, 2023</p>
                    </div>
                </div>
                <div>
                    <DocumentTextIcon class="h-[50px] w-[50px] text-white p-2 bg-indigo-500 rounded-full"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import {
  BookOpenIcon,
  DocumentTextIcon,
  ClipboardDocumentIcon,
} from '@heroicons/vue/24/outline'
</script>

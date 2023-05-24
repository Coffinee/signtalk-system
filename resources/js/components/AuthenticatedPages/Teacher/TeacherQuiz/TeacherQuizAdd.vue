<script>
import { RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import { CheckCircleIcon } from '@heroicons/vue/20/solid'
import { ClockIcon } from '@heroicons/vue/24/outline';
export default{
    components:{
        RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption, CheckCircleIcon, ClockIcon
    },
    data(){
        return{
            quizCategories:[
                { id: 1, title: 'Multiple Choice', value: 'multiple choice', description: 'Consists of three or more choices.' },
                { id: 2, title: 'True or False', value: 'true or false', description: 'One Correct, One Incorrect'},
                { id: 3, title: 'Identification', value: 'identification', description: 'Identify what is being asked.'},
            ],
            quizTimer: [
                {name: '5 Minutes', value: '5'},
                {name: '10 Minutes', value: '10'},
                {name: '15 Minutes', value: '15'},
                {name: '20 Minutes', value: '20'},
            ],
            // Try Only
            quiz: {
                title: '',
                description: '',
                questions: [
                {
                    text: '',
                    choices: [{ text: '' }],
                    correctChoices: []
                }
                ]
            },
            categorySelected:'',
        }
    },
    // Try Only
    methods: {
        addQuestion() {
            this.quiz.questions.push({
            text: '',
            choices: [{ text: '' }],
            correctChoices: []
            });
        },
        addChoice(questionIndex) {
            this.quiz.questions[questionIndex].choices.push({ text: '' });
        },
        removeChoice(questionIndex, choiceIndex) {
            this.quiz.questions[questionIndex].choices.splice(choiceIndex, 1);
        },
        submitQuiz() {
            // You can perform additional validation or submit the quiz data to a server here
            console.log(this.quiz);
        }
    }
}
</script>
<template>
    <div class="relative overflow-auto shadow-md sm:rounded-lg">
        <div class="flex justify-between p-2 px-[30px] pt-[30px]">
            <h2 class="text-2xl font-extrabold font-poppins">Create Quiz</h2>
            <router-link to="/teacher/quiz">    
                <button type="button"
                class="text-white bg-indigo-500 hover:bg-indigo-600 font-medium rounded-lg text-sm px-5 py-2.5">Go Back</button>
            </router-link>
        </div>
        <form  class="flex flex-col gap-5  p-2 px-[30px] pt-[30px]">
            <div>
                <RadioGroup>
                    <RadioGroupLabel class="text-base  leading-6 text-gray-900">Select Quiz Category:</RadioGroupLabel>
                    <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                        <RadioGroupOption as="template" v-for="quizCategory in quizCategories" :key="quizCategory.id" :value="quizCategory" v-model=quizCategory.title v-slot="{ checked, active }">
                            <div @click="categorySelected = quizCategory.value" :class="[checked ? 'border-transparent' : 'border-gray-300', active ? 'border-indigo-600 ring-2 ring-indigo-600' : '', 'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none']">
                                <span class="flex flex-1">
                                    <span class="flex flex-col w-full">
                                        <RadioGroupLabel as="span" class="block text-[25px] font-medium text-indigo-500">{{ quizCategory.title }}</RadioGroupLabel>
                                        <RadioGroupDescription as="span" class="mt-1 flex items-center text-sm text-gray-500">{{ quizCategory.description }}</RadioGroupDescription>                     
                                    </span>
                                </span>
                                <CheckCircleIcon :class="[!checked ? 'invisible' : '', 'h-5 w-5 text-indigo-600']" aria-hidden="true" />
                                <span :class="[active ? 'border' : 'border-2', checked ? 'border-indigo-600' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-lg']" aria-hidden="true" />
                            </div>
                        </RadioGroupOption>
                    </div>
                </RadioGroup>
            </div>
            <div v-show="this.categorySelected" class="flex flex-col">
                <div class="mb-6">
                    <label for="title" class="block mb-2 text-sm font-medium text-gray-900">Quiz Title:</label>
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
                <div class="relative">
                    <label for="default" class="block mb-2 text-[14px] font-medium text-gray-900 dark:text-white">Set Timer:</label>
                    <select id="default" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 pr-2.5 pl-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option hidden>Select Timer</option>
                        <option v-for="time in quizTimer" :key="time" value="{{ time.value }}">{{ time.name }}</option>
                    </select>
                    <ClockIcon class="absolute top-[37px] left-[8px] w-[25px] h-[25px] stroke-gray-500 dark:stroke-white stroke-2"/>
                </div>
            </div>
            <div>
                <h3 class="text-lg font-bold mb-2">Questions</h3>
                <div v-for="(question, index) in quiz.questions" :key="index" class="mb-4">
                    <label class="block mb-2">Question {{ index + 1 }}:</label>
                    <input type="text" v-model="question.text" class="w-full px-4 py-2 border border-gray-300 rounded mb-2">

                    <div class="flex justify-between">
                        <label class="block mb-2">Choices:</label>
                        <button @click="addChoice(index)" class="px-4 py-2 bg-blue-500 text-white rounded">Add Choice</button>
                    </div>
                    <div v-for="(choice, choiceIndex) in question.choices" :key="choiceIndex" class="flex items-center mb-2">
                        <input type="text" v-model="choice.text" class="w-full px-4 py-2 border border-gray-300 rounded">
                        <input type="checkbox" v-model="question.correctChoices" :value="choiceIndex" class="ml-2">
                        <label class="ml-1 whitespace-nowrap">Correct Answer</label>
                        <button v-if="choiceIndex !== 0" @click="removeChoice(index, choiceIndex)" class="px-2 py-1 bg-red-500 text-white rounded ml-2">Remove</button>
                    </div>
                </div>

                <button @click="addQuestion" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add Question</button>
                <button @click="submitQuiz" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Submit Quiz</button>
            </div>
            <div class="flex gap-5 w-full">
                <button type="button"
                class="mb-[30px] text-white bg-indigo-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:bg-gray-300 disabled:text-white" :disabled="!this.categorySelected">Next</button>
                <!-- <button type="submit"
                class="mb-[30px] text-white bg-indigo-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:bg-gray-300 disabled:text-white" :hidden="true">Submit</button> -->
            </div>
        </form>
    </div>
</template>
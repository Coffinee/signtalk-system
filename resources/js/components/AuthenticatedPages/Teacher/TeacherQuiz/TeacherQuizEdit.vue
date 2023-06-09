
<template>
    <div class="relative overflow-auto shadow-md sm:rounded-lg">
        <div class="flex justify-between items-center p-2 px-[30px] pt-[30px]">
            <h2 class="text-2xl font-extrabold font-poppins text-black">Edit Quiz</h2>
            <router-link to="#">
                <button @click.prevent="handleStepper()" type="button"
                    class="text-white font-medium rounded-lg text-sm px-5 py-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="#6366f1" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </button>
            </router-link>
        </div>
        <form v-if="!isDetailComplete" class="flex flex-col gap-5 py-6 px-[30px]">
            <div>
                <RadioGroup>
                    <RadioGroupLabel class="text-base  leading-6 text-gray-900">Select Quiz Category:</RadioGroupLabel>
                    <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                        <RadioGroupOption as="template" v-for="quizCategory in quizCategories" :key="quizCategory.id"
                            disabled="disabled" :value="quizCategory.value" v-model=formQuiz.category
                            v-slot="{ checked, active }">
                            <div @click="categorySelected(quizCategory.value, $event)"
                                :class="[checked ? 'border-transparent' : 'border-gray-300', active ? 'border-indigo-600 ring-2 ring-indigo-600' : '', 'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none']">
                                <span class="flex flex-1">
                                    <span class="flex flex-col w-full">
                                        <RadioGroupLabel as="span" class="block text-[25px] font-medium text-indigo-500">{{
                                            quizCategory.title }}</RadioGroupLabel>
                                        <RadioGroupDescription as="span"
                                            class="mt-1 flex items-center text-sm text-gray-500">{{ quizCategory.description
                                            }}</RadioGroupDescription>
                                    </span>
                                </span>
                                <CheckCircleIcon
                                    :class="[!checked && quizCategory.value !== category_selected ? 'invisible' : '', 'h-5 w-5 text-indigo-600']"
                                    aria-hidden="true" />
                                <span
                                    :class="[active ? 'border' : 'border-2', checked ? 'border-indigo-600' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-lg']"
                                    aria-hidden="true" />
                            </div>
                        </RadioGroupOption>
                    </div>
                </RadioGroup>
            </div>
            <div class="flex flex-col">
                <div class="mb-6 flex space-x-2">
                    <div class="w-full">
                        <label for="title" class="block mb-2 text-sm font-medium text-gray-900">Quiz Title:</label>
                        <input v-model="formQuiz.title" type="text" id="title"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 "
                            placeholder="Enter Quiz Title" required>
                    </div>
                    <div class="relative w-full">
                        <label for="default" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Set
                            Timer:</label>
                        <select v-model="formQuiz.duration" id="default"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-[8.5px] pl-10">
                            <option selected disabled value="">Select Timer</option>
                            <option v-for="time in quizTimer" :key="time" :value="time.value">{{ time.name }}</option>
                        </select>
                        <ClockIcon class="absolute top-[37px] left-[8px] w-[20px] h-[20px] stroke-gray-500" />
                    </div>
                </div>
                <div class="mb-6">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Description:</label>
                    <textarea v-model="formQuiz.description" id="message" rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter Quiz Description"></textarea>
                </div>
                
                <div class="mb-6">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="quiz_banner">Upload
                        Quiz Banner:</label>
                    <input ref="questionBanner" type="file" id="title" @change="pickQuestionBanner"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                        placeholder="Enter Quiz Title">
                </div>

                <button @click.prevent="showQuestion"
                    class="self-end px-6 py-2 bg-indigo-500 text-sm text-white rounded">Next</button>
            </div>
        </form>

        <!-- continuation -->
        <div v-if="isDetailComplete" class="flex flex-col p-2 px-[30px]">
            <h3 class="text-lg font-bold text-black">Questions</h3>
            <p class="text-xs text-gray-400 italic mb-2">Press ( + ) to add another choice to the question and/or ( - ) to
                remove a choice</p>
            <div v-for="(question, index) in formQuiz.questions" :key="index" class="mb-4">
                <div class="flex justify-between">
                    <label class="block mb-2 text-black">Question {{ index + 1 }}: </label>
                    <a href="#" @click="removeQuestion(index)" class="text-end">Remove Question</a>
                </div>
                <div class="flex space-x-1">
                    <input type="text" v-model="question.text"
                        class="px-4 py-1 border border-gray-300 rounded w-[1004px] mr-2 bg-white text-black">
                    <button :disabled="question.choices.length == 4"
                        :class="question.choices.length == 4 ? 'bg-gray-600' : ''" @click="addChoice(index)"
                        data-tip="Add Choice"
                        class="tooltip bg-blue-500 text-white rounded-full w-9 flex items-center justify-center"><svg
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                        </svg>
                    </button>
                    <button :disabled="question.choices.length == 1"
                        :class="question.choices.length == 1 ? 'bg-gray-600' : 'bg-red-500'" v-if="choiceIndex !== 0"
                        @click="removeChoice(index, choiceIndex)" data-tip="Remove Choice"
                        class="tooltip  text-white rounded-full w-9 flex items-center justify-center"><svg
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                        </svg>
                    </button>
                </div>
                <label class="mb-2 text-black">Choices:</label>
                <div v-for="(choice, choiceIndex) in question.choices" :key="choiceIndex" class="flex items-center mb-2">
                    <input type="text" v-model="choice.text" :disabled="is_true_or_false"
                        class="w-full px-4 py-1 border border-gray-300 rounded bg-white text-black">
                    <input type="radio" v-model="question.correctChoices" :value="choice.text" class="ml-2">
                    <label class="ml-1 text-sm whitespace-nowrap bg-white text-black">Correct Answer</label>
                </div>
            </div>
            <div class="space-x-2 pb-6">
                <button @click="addQuestion" class="px-4 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600">+
                    Add
                    Question</button>
                <button @click.prevent="submitQuiz"
                    class="px-4 py-2 bg-green-500 text-white text-sm rounded hover:bg-green-600">Update
                    Quiz</button>
            </div>
        </div>

    </div>
</template>

<script>
import { RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import { CheckCircleIcon } from '@heroicons/vue/20/solid'
import { ClockIcon } from '@heroicons/vue/24/outline';
import { createToast } from 'mosha-vue-toastify';
import Form from 'vform';
export default {
    components: {
        RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption, CheckCircleIcon, ClockIcon
    },
    data() {
        return {
            quizCategories: [
                { id: 1, title: 'Multiple Choice', value: 'multiple-choice', description: 'Consists of three or more choices.' },
                { id: 2, title: 'True or False', value: 'true-or-false', description: 'One Correct, One Incorrect' }
            ],
            is_true_or_false: false,
            category_selected: '',
            question_index: 1,
            quizTimer: [
                { name: '5 Minutes', value: '5' },
                { name: '10 Minutes', value: '10' },
                { name: '15 Minutes', value: '15' },
                { name: '20 Minutes', value: '20' },
            ],
            // Try Only
            formQuiz: new Form({
                id: '',
                title: '',
                description: '',
                category: '',
                duration: '',
                questions: [
                    {
                        id: '',
                        text: '',
                        choices: [{ text: '' }],
                        correctChoices: ""
                    }
                ]
            }),
            quizDetails: new Form({
                category: '',
                title: '',
                timer: '',
                description: ''
            }),
            isDetailComplete: false
        }
    },
    // Try Only
    methods: {
        addQuestion() {
            let counter = this.formQuiz.questions.length
            if (this.formQuiz.category == 'true-or-false') {
                this.formQuiz.questions.push({
                    id: '',
                    text: '',
                    choices: [],
                    correctChoices: ""
                });
                this.formQuiz.questions[counter].choices.push({ text: 'TRUE' });
                this.formQuiz.questions[counter].choices.push({ text: 'FALSE' });
            } else {
                this.formQuiz.questions.push({
                    id: '',
                    text: '',
                    choices: [{ text: '' }],
                    correctChoices: ""
                });
            }
            counter++;

        },
        removeQuestion(idx) {
            this.formQuiz.questions.splice(idx, 1);
        },
        addChoice(questionIndex) {
            if (!this.is_true_or_false) {
                this.formQuiz.questions[questionIndex].choices.push({ text: '' });
            } else {

            }
        },
        removeChoice(questionIndex, choiceIndex) {
            this.formQuiz.questions[questionIndex].choices.splice(choiceIndex, 1);
        },
        submitQuiz() {
            // You can perform additional validation or submit the quiz data to a server here
            console.log(this.formQuiz);
            this.formQuiz.put('/api/questions/' + this.formQuiz.id).then((res) => {
                createToast({
                    title: 'Hurray!',
                    description: "Quiz Updated"
                },
                    {
                        showIcon: 'true',
                        position: 'top-right',
                        type: 'info',
                        hideProgressBar: 'true',
                        transition: 'bounce',
                    })
                this.$router.push('/teacher/quiz')
                console.log(res.data);
            })

        },
        categorySelected(category, event) {
            if (category == 'true-or-false') {
                // this.formQuiz = new Form({
                //     title: '',
                //     description: '',
                //     category: '',
                //     duration:'',
                //     questions: [
                //         {
                //             text: '',
                //             choices: [],
                //             correctChoices: []
                //         }
                //     ]
                // });
                this.is_true_or_false = true;
                this.formQuiz.questions[0].choices.push({ text: 'TRUE' });
                this.formQuiz.questions[0].choices.push({ text: 'FALSE' });
            } else {
                this.is_true_or_false = false
            }
            this.category_selected = category
            this.formQuiz.category = category
        },

        submitQuizDetails() {
            this.$Progress.start();
            this.form.post('/api/quiz')
                .then((data) => {
                    this.$Progress.finish();
                    this.getData();
                    this.slideoverToggle();
                }).catch((error) => {
                    this.$Progress.fail();
                })
        },
        showQuestion() {
            this.isDetailComplete = !this.isDetailComplete;
        },
        handleStepper() {
            if (!this.isDetailComplete) {
                this.$router.push('/teacher/quiz')
            } else {
                this.isDetailComplete = !this.isDetailComplete;
            }
        },
        async getData() {
            const currentURL = window.location.href;
            const match = currentURL.match(/\/(\d+)$/);
            const id = match ? match[1] : null;

            await axios.get('/api/questions/' + id).then((data) => {
                let quiz = data.data.data;
                this.formQuiz.id = quiz.id
                this.formQuiz.title = quiz.title
                this.formQuiz.description = quiz.description
                this.formQuiz.category = quiz.type
                this.category_selected = quiz.type
                this.formQuiz.duration = quiz.duration

                let quizItem = quiz.question_item
                this.formQuiz.questions.splice(0, 1);
                for (let index = 0; index < quizItem.length; index++) {
                    if (this.category_selected == 'multiple-choice') {
                        this.formQuiz.questions.push({
                            id: quizItem[index]['id'],
                            text: quizItem[index]['question'],
                            choices: [
                                { text: quizItem[index]['choice_a'] }, { text: quizItem[index]['choice_b'] }, { text: quizItem[index]['choice_c'] }, { text: quizItem[index]['choice_d'] }
                            ],
                            correctChoices: quizItem[index]['correct_ans']
                        });
                    } else {
                        this.formQuiz.questions.push({
                            id: quizItem[index]['id'],
                            text: quizItem[index]['question'],
                            choices: [
                                { text: quizItem[index]['choice_a'] }, { text: quizItem[index]['choice_b'] }
                            ],
                            correctChoices: quizItem[index]['correct_ans']
                        });
                    }

                    // this.formQuiz.questions.text =  quizItem[index]['question'];

                }

            }).catch((e) => {
                console.log(e.message)
                // errorMessage('Opps!', e.message, 'top-right')
            });
        },
    },

    created() {
        this.getData()
    }
}
</script>
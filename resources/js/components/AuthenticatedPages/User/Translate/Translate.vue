<template>
    <div class="flex justify-center items-center h-screen">
        <div
            class="w-full md:w-[70%] lg:w-[50%] h-[80%] md:h-[70%] bg-white dark:bg-gray-800 dark:border-gray-700 shadow shadow-indigo-300 rounded-lg">
            <div class="flex flex-col space-y-3 m-3 h-[95%] p-5">
                <div
                    class="w-full h-full flex flex-col items-center justify-center border border-gray-400 rounded-md overflow-auto">
                    <!-- <button @click="expand"
                        class="btn-hamburger h-12 m-2 rounded-full shadow flex items-center justify-center duration-500 border dark:border-gray-600"
                        :class="open ? 'w-10 duration-500 ' : 'w-[2/2] px-[10px]'" :disabled="!open">
                        <svg v-show="open" class=" w-5 h-5" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12H21M3 6H21M3 18H21" stroke="#6366f1" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>

                        <div v-show="open == false" class="flex justify-center items-center space-x-8">
                            <button
                                class="flex justify-center items-center hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full w-8 h-8">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-5 h-5 dark:stroke-white">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                                </svg>
                            </button>
                            <button
                                class="flex justify-center items-center hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full w-8 h-8">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-5 h-5 dark:stroke-white">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                                </svg>
                            </button>
                            <button
                                class="flex justify-center items-center hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full w-8 h-8">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-5 h-5 dark:stroke-white">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                            </button>
                            <button type="button" @click="expand"
                                class="flex justify-center items-center hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full w-8 h-8">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="red" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>

                            </button>
                        </div>
                    </button> -->
                    <div class="pl-3 text-sm text-black font-bold h-full w-full">

                    </div>
                </div>
                <div class="flex space-x-3">
                    <input type="text" placeholder="Type your message ..."
                        :value="!isSupported ? 'Your browser does not support Speech Recognition' : result"
                        class="w-full h-10 rounded-full border border-gray-400 pl-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400">
                    <span class="flex space-x-1">
                        <button v-if="!isListening" @click="start"
                            class="btn-mic flex items-center justify-center border border-gray-400 rounded-full h-10 w-10 hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="#6366f1" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                            </svg>
                        </button>
                        <button v-if="isListening" @click="stop"
                            class="flex items-center justify-center border border-gray-400 text-red-500 rounded-full h-10 w-10 hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
                            </svg>
                        </button>

                        <button
                            class="flex items-center justify-center border border-gray-400 text-green-400 rounded-full h-10 w-10 hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>

                        </button>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- <script>
import { useSpeechRecognition } from '@vueuse/core'

export default {
    data() {
        return {
            open: true,
            lang: 'en-US',
            continuous: true
        }
    },

    components: {
        useSpeechRecognition
    },
    methods: {
        expand() {
            this.open = !this.open
        },
    }
}
</script> -->
<script setup lang="ts">
import { ref, watch } from 'vue'
import { useSpeechRecognition } from '@vueuse/core'

const lang = ref('en-US')

const speech = useSpeechRecognition({
    lang,
    continuous: true,
})

const color = ref('transparent')

if (speech.isSupported.value) {
    // @ts-expect-error missing types
    const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList
    const speechRecognitionList = new SpeechGrammarList()
    speech.recognition!.grammars = speechRecognitionList
}

function start() {
    color.value = 'transparent'
    speech.result.value = ''
    speech.start()
}

const { isListening, isSupported, stop, result } = speech

const selectedLanguage = ref(lang.value)
watch(lang, lang => isListening.value ? null : selectedLanguage.value = lang)
watch(isListening, isListening => isListening ? null : selectedLanguage.value = lang.value)

</script>
<template>
    <div class="flex justify-center items-center h-screen">
        <div class="w-full md:w-[90%] h-[80%] md:h-[90%] bg-white dark:bg-[#141526] dark:border-gray-700 shadow shadow-indigo-300 rounded-lg">
            <div class="flex flex-col space-y-3 h-full p-5">
                <!-- result -->
                <div class="w-full h-full border border-gray-400 rounded-md overflow-auto p-[5px]">
                    <div v-if="message === ''" class="w-full h-full flex flex-col items-center justify-center ">
                        <img src="/Images/nothing.png" class="sm:w-[150px] md:w-[300px]">
                        <p class="font-light tracking-widest">TRANSLATE | Nothing to show ...</p> 
                    </div>
                    <div v-else class="w-full h-full flex flex-col items-center justify-center">
                        <div v-for="(word, wordIndex) in inputWords" :key="wordIndex" class="flex justify-center items-center gap-[5px] mb-[5px]">
                            <div v-for="(letter, letterIndex) in word" :key="letterIndex" class="letter-container">
                                <img :src="getLetterImage(letter)" :alt="letter" class="h-[60px] w-[60px] sm:h-[80px] sm:w-[80px] md:h-[100px] md:w-[100px]" />
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end result -->
                <div class="flex space-x-3 ">
                    <input
                        @keyup.enter="displayResult"
                        v-model="input"
                        :disabled="isDisplayingImages"
                        type="text"
                        placeholder="Type your message ..."
                        class="w-full h-10 rounded-full border border-gray-400 pl-5 bg-gray-50 text-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400"
                    />
                    <button @click="displayResult" class="text-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                            <path
                                d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input: '',
            message: '',
            inputWords: [],
            letters: [],
            showResult: false,
            isDisplayingImages: false, // Added property to track if images are being displayed
        };
    },
    methods: {
        getLetterImage(letter) {
            const letterImagePaths = {
                A: '/images/asl-alphabet/asl-letter-a.PNG',
                B: '/images/asl-alphabet/asl-letter-b.PNG',
                C: '/images/asl-alphabet/asl-letter-c.PNG',
                D: '/images/asl-alphabet/asl-letter-d.PNG',
                E: '/images/asl-alphabet/asl-letter-e.PNG',
                F: '/images/asl-alphabet/asl-letter-f.PNG',
                G: '/images/asl-alphabet/asl-letter-g.PNG',
                H: '/images/asl-alphabet/asl-letter-h.PNG',
                I: '/images/asl-alphabet/asl-letter-i.PNG',
                J: '/images/asl-alphabet/asl-letter-j.PNG',
                K: '/images/asl-alphabet/asl-letter-k.PNG',
                L: '/images/asl-alphabet/asl-letter-l.PNG',
                M: '/images/asl-alphabet/asl-letter-m.PNG',
                N: '/images/asl-alphabet/asl-letter-n.PNG',
                O: '/images/asl-alphabet/asl-letter-o.PNG',
                P: '/images/asl-alphabet/asl-letter-p.PNG',
                Q: '/images/asl-alphabet/asl-letter-q.PNG',
                R: '/images/asl-alphabet/asl-letter-r.PNG',
                S: '/images/asl-alphabet/asl-letter-s.PNG',
                T: '/images/asl-alphabet/asl-letter-t.PNG',
                U: '/images/asl-alphabet/asl-letter-u.PNG',
                V: '/images/asl-alphabet/asl-letter-v.PNG',
                W: '/images/asl-alphabet/asl-letter-w.PNG',
                X: '/images/asl-alphabet/asl-letter-x.PNG',
                Y: '/images/asl-alphabet/asl-letter-y.PNG',
                Z: '/images/asl-alphabet/asl-letter-z.PNG',
                0: '/images/asl-numbers/asl-number-0.jpg',
                1: '/images/asl-numbers/asl-number-1.jpg',
                2: '/images/asl-numbers/asl-number-2.jpg',
                3: '/images/asl-numbers/asl-number-3.jpg',
                4: '/images/asl-numbers/asl-number-4.jpg',
                5: '/images/asl-numbers/asl-number-5.jpg',
                6: '/images/asl-numbers/asl-number-6.jpg',
                7: '/images/asl-numbers/asl-number-7.jpg',
                8: '/images/asl-numbers/asl-number-8.jpg',
                9: '/images/asl-numbers/asl-number-9.jpg',
                // ' ': 'images/asl-alphabet/asl-space.PNG',
                '!': '/images/special-characters/exclamation-sign.jpg',
                '@': '/images/special-characters/at-sign.png',
                '#': '/images/special-characters/hashtag-sign.jpg',
                '$': '/images/special-characters/dollar-sign.png',
                '%': '/images/special-characters/percent-sign.png',
                '&': '/images/special-characters/and-sign.png',
                '(': '/images/special-characters/left-parenthesis.png',
                ')': '/images/special-characters/right-parenthesis.png',
                '-': '/images/special-characters/minus-sign.png',
                '+': '/images/special-characters/plus-sign.jpg',
                '*': '/images/special-characters/asterisk-sign.png',
                '/': '/images/special-characters/forward-slash.png',
                '=': '/images/special-characters/equal-sign.png',
                '?': '/images/special-characters/question-mark.png',
            };

            return letterImagePaths[letter] || null;
        },

        async displayResult() {
            if (this.isDisplayingImages) {
                return; // Return early if images are already being displayed
            }

            this.message = this.input;
            this.inputWords = [];
            const inputWords = this.message.trim().toUpperCase().split(' ');
            this.inputWords = []; // Clear the existing words

            this.isDisplayingImages = true; // Disable the input field

            for (let wordIndex = 0; wordIndex < inputWords.length; wordIndex++) {
                const word = inputWords[wordIndex];
                const letters = word.split('');
                const wordLetters = [];

                for (let letterIndex = 0; letterIndex < letters.length; letterIndex++) {
                    const letter = letters[letterIndex];
                    wordLetters.push(letter);
                    this.inputWords[wordIndex] = [...wordLetters]; // Update the word's letters
                    await this.delay(200); // Delay between displaying each letter
                }

                await this.delay(1000); // Delay between displaying each word
            }

            this.showResult = true; // Set showResult to true to display the result
            this.isDisplayingImages = false; // Enable the input field
        },

        delay(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        },
    },
};
</script>

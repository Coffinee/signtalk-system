<template>
    <div class="flex justify-center items-center h-screen">
        <div
            class="w-full md:w-[70%] h-[80%] md:h-[90%] bg-white dark:bg-gray-800 dark:border-gray-700 shadow shadow-indigo-300 rounded-lg">
            <div class="flex flex-col space-y-3 h-[95%] p-5">
                <!-- result -->
                <div class="w-full h-full flex items-center justify-center flex-wrap gap-[5px] border border-gray-400 rounded-md overflow-auto p-[10px]">
                    <div v-if="this.input == ''">
                        <img  src="/Images/nothing.png" class="sm:w-[150px] md:w-[300px]">
                        <p class="text-center">Nothing to show....</p>
                    </div>
                    <div v-else v-for="(letter, index) in letters" :key="index" class="letter-container">
                        <img :src="getLetterImage(letter)" :alt="letters[index]"
                            class="h-[60px] w-[60px] sm:h-[80px] sm:w-[80px] md:h-[150px] md:w-[150px]" />
                    </div>
                </div>
                <!-- end result -->
                <div class="flex space-x-3">
                    <input @keyup.enter="displayResult" v-model="input" type="text" placeholder="Type your message ..."
                        class="w-full h-10 rounded-full border border-gray-400 pl-5 bg-gray-50 text-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400">
                    <button @click="displayResult" class="text-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path
                                d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
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
            letters: [],
            showResult: false,
        };
    },
    methods: {
        getLetterImage(letter) {
            const letterImagePaths = {
                A: '/images/asl-alphabet-v2/asl-letter-a.jpg',
                B: '/images/asl-alphabet-v2/asl-letter-b.jpg',
                C: '/images/asl-alphabet-v2/asl-letter-c.jpg',
                D: '/images/asl-alphabet-v2/asl-letter-d.jpg',
                E: '/images/asl-alphabet-v2/asl-letter-e.jpg',
                F: '/images/asl-alphabet-v2/asl-letter-f.jpg',
                G: '/images/asl-alphabet-v2/asl-letter-g.jpg',
                H: '/images/asl-alphabet-v2/asl-letter-h.jpg',
                I: '/images/asl-alphabet-v2/asl-letter-i.jpg',
                J: '/images/asl-alphabet-v2/asl-letter-j.jpg',
                K: '/images/asl-alphabet-v2/asl-letter-k.jpg',
                L: '/images/asl-alphabet-v2/asl-letter-l.jpg',
                M: '/images/asl-alphabet-v2/asl-letter-m.jpg',
                N: '/images/asl-alphabet-v2/asl-letter-n.jpg',
                O: '/images/asl-alphabet-v2/asl-letter-o.jpg',
                P: '/images/asl-alphabet-v2/asl-letter-p.jpg',
                Q: '/images/asl-alphabet-v2/asl-letter-q.jpg',
                R: '/images/asl-alphabet-v2/asl-letter-r.jpg',
                S: '/images/asl-alphabet-v2/asl-letter-s.jpg',
                T: '/images/asl-alphabet-v2/asl-letter-t.jpg',
                U: '/images/asl-alphabet-v2/asl-letter-u.jpg',
                V: '/images/asl-alphabet-v2/asl-letter-v.jpg',
                W: '/images/asl-alphabet-v2/asl-letter-w.jpg',
                X: '/images/asl-alphabet-v2/asl-letter-x.jpg',
                Y: '/images/asl-alphabet-v2/asl-letter-y.jpg',
                Z: '/images/asl-alphabet-v2/asl-letter-z.jpg',
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
                ' ': 'images/asl-alphabet/asl-space.PNG',
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

        displayResult() {
 
                const inputLetters = this.input.toUpperCase().split('');
                this.letters = []; // Clear the existing letters
                let index = 0;
                const interval = setInterval(() => {
                    this.letters = [inputLetters[index]]; // Replace the existing letter with the current one
                    index++;
                    if (index >= inputLetters.length) {
                        clearInterval(interval); // Stop the interval when all letters are displayed

                        // Show the entire list
                        setTimeout(() => {
                            this.letters = inputLetters; // Show the entire list of images
                            this.showResult = true;
                        }, 1000); // Delay of 1 second before showing the entire list
                    }
                }, 1200); // 1-second interval between displaying each letter
            
        }
    },
};
</script>
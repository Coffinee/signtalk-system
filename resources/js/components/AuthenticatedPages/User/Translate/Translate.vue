<!-- <template>
    <div>
      <div class="input-container">
        <div v-for="(letter, index) in letters" :key="index" class="letter-container">
          <img :src="getLetterImage(letter)" :alt="'Sign language letter' + letters[index] "/>
        </div>
      </div>
      <input v-model="input" class="hidden-input" />
      <button @click="displayResult">Display Result</button>
      <p v-if="showResult">Result: {{ input }}</p>
    </div>
  </template> -->

<template>
    <div class="flex justify-center items-center h-screen">
        <div
            class="w-full md:w-[70%] h-[80%] md:h-[90%] bg-white dark:bg-gray-800 dark:border-gray-700 shadow shadow-indigo-300 rounded-lg">
            <div class="flex flex-col space-y-3 m-3 h-[95%] p-5">
                <!-- result -->
                <div
                    class="w-full h-full flex items-center justify-center flex-wrap gap-[5px] border border-gray-400 rounded-md overflow-auto">
                    <div v-for="(letter, index) in letters" :key="index" class="letter-container">
                        <img :src="getLetterImage(letter)" :alt="letters[index]" />
                    </div>
                </div>
                <!-- end result -->
                <div class="flex space-x-3">
                    <input v-model="input" type="text" placeholder="Type your message ..."
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
                ' ': '/images/asl-alphabet/asl-space.PNG',
            };

            return letterImagePaths[letter] || null;
        },

        displayResult() {
            // Split the input into individual letters and update the letters array with an interval
            const inputLetters = this.input.toUpperCase().split('');
            this.letters = []; // Clear the existing letters
            let index = 0;
            const interval = setInterval(() => {
                this.letters.push(inputLetters[index]);
                index++;
                if (index >= inputLetters.length) {
                    clearInterval(interval); // Stop the interval when all letters are displayed
                    this.showResult = true; // Show the result
                }
            }, 1200); // 1-second interval between displaying each letter
        },
    },
};
</script>
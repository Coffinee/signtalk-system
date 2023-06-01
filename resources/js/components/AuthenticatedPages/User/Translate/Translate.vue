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
                        <img :src="getLetterImage(letter)" :alt="letters[index]" class="h-[60px] w-[60px] sm:h-[80px] sm:w-[80px] md:h-[120px] md:w-[120px]"/>
                    </div>
                </div>
                <!-- end result -->
                <div class="flex space-x-3">
                    <input v-model="input" type="text" placeholder="Type your message ..."
                        class="w-full h-10 rounded-full border border-gray-400 pl-5 bg-gray-50 text-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400" @keyup.enter="displayResult">
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
            // Return the image path for the given letter
            let imagePath;
            switch (letter) {
                // Alphabet
                case 'A':
                    imagePath = '/images/asl-alphabet-v2/asl-letter-a.jpg';
                    break;
                case 'B':
                    imagePath = '/images/asl-alphabet-v2/asl-letter-b.jpg';
                    break;
                case 'C':
                    imagePath = '/images/asl-alphabet-v2/asl-letter-c.jpg';
                    break;
                case 'D':
                    imagePath = '/images/asl-alphabet-v2/asl-letter-d.jpg';
                    break;
                case 'E':
                    imagePath = '/images/asl-alphabet-v2/asl-letter-e.jpg';
                    break;
                case 'F':
                    imagePath = '/images/asl-alphabet-v2/asl-letter-f.jpg';
                    break;
                case 'G':
                    imagePath = '/images/asl-alphabet-v2/asl-letter-g.jpg';
                    break;
                case 'H':
                    imagePath = '/images/asl-alphabet-v2/asl-letter-h.jpg';
                    break;
                case 'I':
                    imagePath = '/images/asl-alphabet-v2/asl-letter-i.jpg';
                    break;
                case 'J':
                    imagePath = '/images/asl-alphabet-v2/asl-letter-j.jpg';
                    break;
                case 'K':
                    imagePath = '/images/asl-alphabet-v2/asl-letter-k.jpg';
                    break;
                case 'L':
                    imagePath = '/images/asl-alphabet-v2/asl-letter-l.jpg';
                    break;
                case 'M':
                    imagePath = '/images/asl-alphabet-v2/asl-letter-m.jpg';
                    break;
                case 'N':
                    imagePath = '/images/asl-alphabet-v2/asl-letter-n.jpg';
                    break;
                case 'O':
                    imagePath = '/images/asl-alphabet-v2/asl-letter-o.jpg';
                    break;
                case 'P':
                    imagePath = '/images/asl-alphabet-v2/asl-letter-p.jpg';
                    break;
                case 'Q':
                    imagePath = '/images/asl-alphabet-v2/asl-letter-q.jpg';
                    break;
                case 'R':
                    imagePath = '/images/asl-alphabet-v2/asl-letter-r.jpg';
                    break;
                case 'S':
                    imagePath = '/images/asl-alphabet-v2/asl-letter-s.jpg';
                    break;
                case 'T':
                    imagePath = '/images/asl-alphabet-v2/asl-letter-t.jpg';
                    break;
                case 'U':
                    imagePath = '/images/asl-alphabet-v2/asl-letter-u.jpg';
                    break;
                case 'V':
                    imagePath = '/images/asl-alphabet-v2/asl-letter-v.jpg';
                    break;
                case 'W':
                    imagePath = '/images/asl-alphabet-v2/asl-letter-w.jpg';
                    break;
                case 'X':
                    imagePath = '/images/asl-alphabet-v2/asl-letter-x.jpg';
                    break;
                case 'Y':
                    imagePath = '/images/asl-alphabet-v2/asl-letter-y.jpg';
                    break;
                case 'Z':
                    imagePath = '/images/asl-alphabet-v2/asl-letter-z.jpg';
                    break;
                // Numbers
                case '0':
                    imagePath = '/images/asl-numbers/asl-number-0.jpg';
                    break;
                case '1':
                    imagePath = '/images/asl-numbers/asl-number-1.jpg';
                    break;
                case '2':
                    imagePath = '/images/asl-numbers/asl-number-2.jpg';
                    break;
                case '3':
                    imagePath = '/images/asl-numbers/asl-number-3.jpg';
                    break;
                case '4':
                    imagePath = '/images/asl-numbers/asl-number-4.jpg';
                    break;
                case '5':
                    imagePath = '/images/asl-numbers/asl-number-5.jpg';
                    break;
                case '6':
                    imagePath = '/images/asl-numbers/asl-number-6.jpg';
                    break;
                case '7':
                    imagePath = '/images/asl-numbers/asl-number-7.jpg';
                    break;
                case '8':
                    imagePath = '/images/asl-numbers/asl-number-8.jpg';
                    break;
                case '9':
                    imagePath = '/images/asl-numbers/asl-number-9.jpg';
                    break;
                case ' ':
                    imagePath = '/images/asl-alphabet-v2/asl-space.jpg';
                    break;
                default:
                    return null;

            }
            return imagePath;
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
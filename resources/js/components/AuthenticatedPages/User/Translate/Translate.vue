<template>
    <div class="flex justify-center items-center h-screen">
        <div
            class="w-full md:w-[70%] h-[80%] md:h-[90%] bg-white dark:bg-gray-800 dark:border-gray-700 shadow shadow-indigo-300 rounded-lg">
            <div class="flex flex-col space-y-3 m-3 h-[95%] p-5">
                <!-- result -->
                <div class="w-full h-full flex items-center justify-center flex-wrap  gap-[5px] border border-gray-400 rounded-md overflow-auto">
                    <div v-for="(letter, index) in valueArray" :key="index">
                        <img :src="getImagePath(letter)" class="h-[60px] w-[60px] sm:h-[60px] sm:w-[60px] md:h-[120px] md:w-[120px]">              
                    </div>
                </div>
                <!-- end result -->
                <div class="flex space-x-3">
                    <!-- <input v-model="value" type="text" placeholder="Type your message ..." 
                        class="w-full h-10 rounded-full border border-gray-400 pl-5 bg-gray-100 text-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400"> -->
                    
                    <textarea  v-model="value"  id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Input words to translate..."></textarea>

                    
                    <!-- <span>
                        <button 
                            class="btn-mic flex items-center justify-center border border-gray-400 rounded-full h-10 w-10 hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="#6366f1" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                            </svg>
                        </button>
                        <button 
                            class="flex items-center justify-center border border-gray-400 text-red-500 rounded-full h-10 w-10 hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
                            </svg>
                        </button>
                    </span> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      value: '',
    };
  },
  computed: {
    valueArray() {
      return this.value.toUpperCase().split('');

    }
  },
  methods: {
    getImagePath(letter) {
      let imagePath;
      switch (letter) {
        case 'A':
            imagePath = '/images/asl-alphabet/asl-letter-a.PNG'; 
            break;
        case 'B':
            imagePath = '/images/asl-alphabet/asl-letter-b.PNG';
            break;
        case 'C':
            imagePath = '/images/asl-alphabet/asl-letter-c.PNG';
            break;
        case 'D':
            imagePath = '/images/asl-alphabet/asl-letter-d.PNG';
            break;
        case 'E':
            imagePath = '/images/asl-alphabet/asl-letter-e.PNG';
            break;
        case 'F':
            imagePath = '/images/asl-alphabet/asl-letter-f.PNG';
            break;
        case 'G':
            imagePath = '/images/asl-alphabet/asl-letter-g.PNG';
            break;
        case 'H':
            imagePath = '/images/asl-alphabet/asl-letter-h.PNG';
            break;
        case 'I':
            imagePath = '/images/asl-alphabet/asl-letter-i.PNG';
            break;
        case 'J':
            imagePath = '/images/asl-alphabet/asl-letter-j.PNG';
            break;
        case 'K':
            imagePath = '/images/asl-alphabet/asl-letter-k.PNG';
            break;
        case 'L':
            imagePath = '/images/asl-alphabet/asl-letter-l.PNG';
            break;
        case 'M':
            imagePath = '/images/asl-alphabet/asl-letter-m.PNG';
            break;
        case 'N':
            imagePath = '/images/asl-alphabet/asl-letter-n.PNG';
            break;
        case 'O':
            imagePath = '/images/asl-alphabet/asl-letter-o.PNG';
            break;
        case 'P':
            imagePath = '/images/asl-alphabet/asl-letter-p.PNG';
            break;
        case 'Q':
            imagePath = '/images/asl-alphabet/asl-letter-q.PNG';
            break;
        case 'R':
            imagePath = '/images/asl-alphabet/asl-letter-r.PNG';
            break;
        case 'S':
            imagePath = '/images/asl-alphabet/asl-letter-s.PNG';
            break;
        case 'T':
            imagePath = '/images/asl-alphabet/asl-letter-t.PNG';
            break;
        case 'U':
            imagePath = '/images/asl-alphabet/asl-letter-u.PNG';
            break;
        case 'V':
            imagePath = '/images/asl-alphabet/asl-letter-v.PNG';
            break;
        case 'W':
            imagePath = '/images/asl-alphabet/asl-letter-w.PNG';
            break;
        case 'X':
            imagePath = '/images/asl-alphabet/asl-letter-x.PNG';
            break;
        case 'Y':
            imagePath = '/images/asl-alphabet/asl-letter-y.PNG';
            break;
        case 'Z':
            imagePath = '/images/asl-alphabet/asl-letter-z.PNG';
            break;
        case ' ':
            imagePath = '/images/asl-alphabet/asl-space.PNG';
            break;
        default:
            return null;
            
      }
      return imagePath;
    }
  }
};
</script>


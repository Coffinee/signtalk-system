<script>
import TopBar from '../misc/TopBar.vue'
import Footer from "../misc/Footer.vue";

export default {

    name: 'Guest_About',

    components: {

        TopBar,
        Footer,
    }
}

</script>
<template>
    <div>
        <TopBar />
        <!-- Content -->

        <section class="bg-white dark:bg-gray-900 ">
            <div class="grid grid-cols-4 w-auto h-screen bg-white dark:bg-[#111827]">
                <div class="col h-full text-white p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lessons:</h5>
                    <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li>Alphabets</li>
                        <li>Numbers</li>
                        <li>Animals</li>
                        <li>Emotions</li>
                        <li>Science</li>
                    </ul>
                </div>
                <div class="col-span-2 py-10 px-5">
                    <div>
                        <h1 class="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">LESSON 1</h1>
                        <p class="mb-6 text-center text-lg font-normal text-gray-500 lg:text-xl sm:px-16 dark:text-gray-400">ALPHABETS</p>
                    </div>
                    <div class="flex justify-between mt-3">
                        <a href="#"
                            class="items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            Previous
                        </a>
                        <a href="#"
                            class="items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            Next
                        </a>
                    </div>

                    <div class="h-[500px] border border-gray-200 rounded-lg shadow dark:border-gray-700 p-5 mt-3">
                        <p class="text-white indent-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolore eos ut doloremque odit ea minus nostrum, praesentium iste molestias eum magnam sunt iusto nesciunt maiores quae quam, molestiae quaerat.
                        </p>
                        <br>

                        <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolore eos ut doloremque odit ea minus nostrum, praesentium iste molestias eum magnam sunt iusto nesciunt maiores quae quam, molestiae quaerat.
                        </p>
                        <br>

                        <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolore eos ut doloremque odit ea minus nostrum, praesentium iste molestias eum magnam sunt iusto nesciunt maiores quae quam, molestiae quaerat.
                        </p>
                        <br>

                        <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolore eos ut doloremque odit ea minus nostrum, praesentium iste molestias eum magnam sunt iusto nesciunt maiores quae quam, molestiae quaerat.
                        </p>
                        <br>
                        
                    </div>


                </div>
            </div>

        </section>
    <Footer />
</div></template>
 
<script>
import Card from "../misc/CardButton.vue";
export default {
    name: "Dictionary",

    components:{
        Card, 
    }

}

</script>
<template>
    <div>
        <!-- Navbar -->
        <TopBar/>
        
        <!-- Main Content -->
        <div class="grid grid-cols-4 w-auto h-screen bg-white dark:bg-[#111827]">
            <div class="col h-full text-white p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Recent Searches:</h5>
                <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                    <li>Happy</li>
                    <li>Hello</li>
                    <li>Sad</li>
                    <li>Water</li>
                    <li>Bottle</li>
                </ul>
            </div>
            <div class="col-span-2 py-10 px-5">
                <form class="h-2/5">   
                    <div>
                        <h1 class="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Dictionary</h1>
                        <p class="mb-6 text-center text-lg font-normal text-gray-500 lg:text-xl sm:px-16 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptatibus.</p>
                    </div>
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required>
                        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
                
                <!-- Result -->
                <div class="h-3/5 border border-gray-200 rounded-lg shadow dark:border-gray-700 p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Result:</h5>
                    <div class="h-[90%] flex flex-col">
                        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Happy
                            <span class="text-lg italic font-normal">(adjective)</span>
                        </h5>
                        <p class="mb-3 text-gray-500 dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, odio.</p>
                        <iframe class="self-center w-[400px] h-[300px]" src="https://www.youtube.com/embed/uKKvNqA9N20" title="Greetings in ASL | ASL - American Sign Language" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <div class="col flex flex-col justify-center items-center gap-y-10">
                <Card :title="'Lesson'" :description="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptatibus.'" :buttonLabel="'View Lesson'"/>

                <Card :title="'Quiz'" :description="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptatibus.'" :buttonLabel="'Take Quiz'"/>

                <Card :title="'Exam'" :description="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptatibus.'" :buttonLabel="'Take Exam'"/>
            </div>
        </div>
        
        <!-- Footer -->
        <Footer/>
    </div>
</template>
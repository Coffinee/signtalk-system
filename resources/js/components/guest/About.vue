<script>
import TopBar from '../misc/TopBar.vue'
import Footer from "../misc/Footer.vue";

export default{

    name: 'Guest_About',

    components:{
        
        TopBar,
        Footer,
    }
}

</script>
<template> 
    <div>
        <TopBar/>
         <!-- Content -->
        <section class="bg-white dark:bg-gray-900 ">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-justify lg:py-16 ">
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-center text-gray-900 md:text-5xl lg:text-6xl dark:text-white">About Signtalk</h1>
                <p class=" mb-14 text-lg font-normal text-black lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iste voluptas nisi magni! Voluptatem error quas provident iusto. Officiis ex corporis incidunt doloribus tenetur autem beatae error voluptatum laborum consectetur.</p>
                <div class="flex justify-center items-center">
                    <img class="h-[300px]  max-w-full rounded-lg mb-14" src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" alt="">
                </div>
                <p class="mb-8 text-[12px] font-light text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iste voluptas nisi magni! Voluptatem error quas provident iusto. Officiis ex corporis incidunt doloribus tenetur autem beatae error voluptatum laborum consectetur.</p>
            </div>
        </section>
        <Footer/>
    </div>
</template>
 
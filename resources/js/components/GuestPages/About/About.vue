<script>
export default{
    name: 'About',
    data(){
        return{
            people:[
                {
                    name: 'Carl Lezter Mendoza',
                    role: 'Researcher, Developer',
                    imageUrl:
                    'https://scontent.fmnl2-2.fna.fbcdn.net/v/t39.30808-6/333241554_596731455647509_1708859081950034847_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHBF7ShhjGo1_iXQ-BgfYyRtYOzBTm59La1g7MFObn0tq8GpvlrzwCkUzLGlZJamnLZIXu8TOjYravKoAI8ffal&_nc_ohc=SCoAN1gPDD8AX8lo5ci&_nc_ht=scontent.fmnl2-2.fna&oh=00_AfD8OMODm98Fownm06XZfndt2AtEP5e8bAtFB10aZVTllg&oe=64713475',                  
                    linkedinUrl: 'https://www.linkedin.com/in/carl-lezter-mendoza-29a58724a/',
                },
                {
                    name: 'Glenn Ross Mata',
                    role: 'Researcher, Developer',
                    imageUrl:
                    'https://scontent.fmnl2-2.fna.fbcdn.net/v/t39.30808-6/330163738_567219322029358_8996497691542687450_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeELBg3-6QyGoBasRFl-lo7xpytwHuNI_oynK3Ae40j-jIbrx9yEYuhwpmDepGmfM-AAksO5OBxioj3Qpnyvwt5F&_nc_ohc=DdQR5_HtS14AX8Nvt59&_nc_ht=scontent.fmnl2-2.fna&oh=00_AfDuneQulNqmbu9TNYtashCG-yR1DgYCcpOtID-Tg9DyWQ&oe=6470BF83',
                    linkedinUrl: 'https://www.linkedin.com/in/glenn-ross-mata-aa94b9268/',
                },
                {
                    name: 'Vedasto Quintans',
                    role: 'Researcher, Developer',
                    imageUrl:
                    'https://scontent.fmnl2-2.fna.fbcdn.net/v/t39.30808-6/332239368_129719679820069_6574886541289545512_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHhlwT-PFld4bxBWOOfby0pKAArpFayDa4oACukVrINrumnZcYDKyexmIzC52kw89e_7jPJ1tDEYRmP2pg5py3v&_nc_ohc=xz7FKe1DmZoAX_ZnANB&_nc_ht=scontent.fmnl2-2.fna&oh=00_AfBF6Gxk_lgnEufzaevOlt4GOpjgyMZhgE1ucJ2pfroLyA&oe=64725AC7',
                    linkedinUrl: 'https://www.linkedin.com/in/vedasto-quintans-8a1111198/',
                },
            ]
        }
    }
}

</script>
<template> 
    <div>
         <!-- Content -->
        <section class="bg-white dark:bg-gray-900 ">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-justify lg:py-16 ">
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-center text-gray-900 md:text-5xl lg:text-6xl dark:text-white">About Signtalk</h1>
                <p class=" mb-14 text-md font-normal text-black lg:text-lg sm:px-16 lg:px-48 dark:text-gray-400 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iste voluptas nisi magni! Voluptatem error quas provident iusto. Officiis ex corporis incidunt doloribus tenetur autem beatae error voluptatum laborum consectetur.</p>
                <div class="flex justify-center items-center">
                    <img class="h-[300px]  max-w-full rounded-lg mb-14" src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" alt="">
                </div>
                <p class="text-md font-normal text-black lg:text-lg sm:px-16 lg:px-48 dark:text-gray-400 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iste voluptas nisi magni! Voluptatem error quas provident iusto. Officiis ex corporis incidunt doloribus tenetur autem beatae error voluptatum laborum consectetur.</p>
            </div>
        </section>
        <div class="bg-gray-900 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 text-center lg:px-8">
            <div class="mx-auto max-w-2xl">
                <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet our team</h2>
                <p class="mt-4 text-lg leading-8 text-gray-400">We’re a dynamic group of individuals who are passionate about what we do.</p>
            </div>
            <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                <li v-for="person in people" :key="person.name" class="rounded-2xl bg-gray-800 px-8 py-10">
                <img class="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56" :src="person.imageUrl" alt=""/>
                <img src="" alt="">
                <h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{{ person.name }}</h3>
                <p class="text-sm leading-6 text-gray-400">{{ person.role }}</p>
                <ul role="list" class="mt-6 flex justify-center gap-x-6">
                    <!-- <li>
                        <a :href="person.twitterUrl" class="text-gray-400 hover:text-gray-300">
                            <span class="sr-only">Twitter</span>
                            <svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                        </a>
                    </li> -->
                    <li>
                        <a :href="person.linkedinUrl" class="text-gray-400 hover:text-gray-300">
                            <span class="sr-only">LinkedIn</span>
                            <svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
    </div>
</template>
 
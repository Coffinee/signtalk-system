<template>
    <div class="min-h-screen dark:bg-[#18122B]">
        <div>
            <TopBar/>
            <router-view :key="$route.fullPath"></router-view>
            <Footer/>
        </div>
    </div>
</template>

<script setup>
import TopBar from '../../misc/TopBar.vue';
import Footer from '../../misc/Footer.vue';
</script>
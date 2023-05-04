<template>
    <div class="min-h-screen min-w-full dark:bg-[#18122B]">
        <TopBar />
        <div>
            <router-view :key="$route.fullPath"></router-view>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import TopBar from '../../misc/TopBar.vue';
import Footer from '../../misc/Footer.vue';
</script>
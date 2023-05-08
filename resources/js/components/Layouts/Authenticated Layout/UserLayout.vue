<template>
    <div class="min-h-full min-w-full dark:bg-[#18122B]">
        <TopBar />
        <router-view :key="$route.fullPath"></router-view>
        <Footer />
    </div>
</template>

<script setup>
import TopBar from "../../misc/TopBar.vue";
import Footer from "../../misc/Footer.vue";
</script>

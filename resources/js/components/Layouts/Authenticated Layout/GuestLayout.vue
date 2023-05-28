<template>
    <div class="min-h-full min-w-full dark:bg-gray-900">
        <TopBar/>
        <div>
            <router-view :key="$route.fullPath"></router-view>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import TopBar from "../../misc/TopBar.vue";
import Footer from "../../misc/Footer.vue";
</script>

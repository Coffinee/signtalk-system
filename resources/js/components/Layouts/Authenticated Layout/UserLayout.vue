<template>
    <div class="min-h-full min-w-full dark:bg-[#18122B]">
        <TopBar />
        <!-- <router-view :key="$route.fullPath"></router-view> -->
        <div class="flex flex-1 flex-col">
            <main class="flex-1 m-3">
                <router-view :key="$route.fullPath"></router-view>
            </main>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import TopBar from "../../misc/TopBar.vue";
import Footer from "../../misc/Footer.vue";
</script>

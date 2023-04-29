<template>
    <div class="min-h-screen">
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
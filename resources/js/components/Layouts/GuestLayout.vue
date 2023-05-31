<template>
    <div class="min-h-full min-w-full bg-white dark:bg-gray-900">
        <TopBar/>
        <div class="dark:bg-gray-900">
            <router-view :key="$route.fullPath"></router-view>
        </div>
        <Footer/>
    </div>
</template>

<script>
import TopBar from "../misc/TopBar.vue";
import Footer from "../misc/Footer.vue";
export default{
    components:{
        TopBar, Footer
    }
}
</script>

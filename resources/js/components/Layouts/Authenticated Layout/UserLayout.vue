<template>
    <div class="min-h-full min-w-full dark:bg-gray-900">
        <TopBarStudent />
        <div>
            <router-view :key="$route.fullPath"></router-view>
        </div>
        <Footer />
    </div>
</template>

<script>
import TopBarStudent from '../../misc/TopBarStudent.vue';
import Footer from "../../misc/Footer.vue";
export default{
    components:{
        TopBarStudent, Footer
    }
}
</script>

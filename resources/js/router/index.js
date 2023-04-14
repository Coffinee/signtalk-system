import { createRouter, createWebHistory } from "vue-router";
import Home from '@/components/guest/Home.vue'
import About from '@/components/guest/About.vue'
import { createApp } from "vue";


const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home
    },

    {
        path: '/about',
        name: 'About',
        component: About
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    next();
   // document.title = to.meta.title;
    // if (to.meta.middleware == "guest") {
    //     if (userAuthStore().authenticated) {
    //         next({ name: "Home" });
    //     }
    //     next();
    // } else {
    //     next();
    // }
});
export default router;


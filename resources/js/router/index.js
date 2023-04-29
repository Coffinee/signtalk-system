import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("@/components/AuthenticatedPages/Home.vue");
const About = () => import("@/components/AuthenticatedPages/About.vue");
const Dictionary = () => import("@/components/AuthenticatedPages/Dictionary.vue");
const Interactives = () => import("@/components/AuthenticatedPages/Interactives.vue");

// LAYOUTS
const AuthenticatedLayout = () =>
    import("@/components/Layouts/AuthenticatedLayout.vue");

const routes = [
    {
        path: "/Student",
        component: AuthenticatedLayout,
        meta: {
            title: 'SignTalk | Student'
        },
        children: [
            {
                name: "home",
                path: "/Student/Home",
                component: Home,
                meta: {
                    title: "SignTalk | Home",
                },
            },
            {
                name: "about",
                path: "/Student/About",
                component: About,
                meta: {
                    title: "SignTalk | About",
                },
            },
            {
                name: "lesson",
                path: "/Student/Interactives",
                component: Interactives,
                meta: {
                    title: "SignTalk | Interactives",
                },
            },
            {
                name: "dictionary",
                path: "/Student/Dictionary",
                component: Dictionary,
                meta: {
                    title: "SignTalk | Dictionary",
                },
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    watch: {
        $route(to) {
            if (to.currentRoute.meta.reload == true) {
                window.location.reload();
            }
        },
    },
    scrollBehavior() {
        document.getElementById("app").scrollIntoView();
    },
});

router.beforeEach((to, from, next) => {
    next();
});

export default router;

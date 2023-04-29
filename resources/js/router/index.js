import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("@/components/AuthenticatedPages/Home/Home.vue");
const About = () => import("@/components/AuthenticatedPages/About/About.vue");
const DictionaryLandingPage = () => import("@/components/AuthenticatedPages/Dictionary/DictionaryLandingPage.vue");
const DictionaryMain = () => import("@/components/AuthenticatedPages/Dictionary/DictionaryMain.vue");
const Lesson = () => import("@/components/AuthenticatedPages/Lesson/Lesson.vue");

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
                path: "/Student/Dictionary/",
                component: DictionaryLandingPage,
                meta: {
                    title: "SignTalk | Dictionary",
                },
            },
            {   
                name: 'dictionary-main',                
                path: "/Student/Dictionary/Main",
                component: DictionaryMain,
                meta: {
                    title: "SignTalk | Dictionary Main",
                },                                
            }
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

import { createRouter, createWebHistory } from "vue-router";
// USER SIDE
const Register = () => import("@/components/AuthenticatedPages/User/Auth/Register/Register.vue");
const Home = () => import("@/components/AuthenticatedPages/User/Home/Home.vue");
const About = () => import("@/components/AuthenticatedPages/User/About/About.vue");
const DictionaryLandingPage = () => import("@/components/AuthenticatedPages/User/Dictionary/DictionaryLandingPage.vue");
const DictionaryMain = () => import("@/components/AuthenticatedPages/User/Dictionary/DictionaryMain.vue");
const LessonLandingPage = () => import("@/components/AuthenticatedPages/User/Lesson/LessonLandingPage.vue");
const LessonMain = () => import("@/components/AuthenticatedPages/User/Lesson/LessonMain.vue");
const Quiz = () => import("@/components/AuthenticatedPages/User/Quiz/Quiz.vue");
// const Exam = () => import("@/components/AuthenticatedPages/User/Exam/Exam.vue");
const Interactives = () => import("@/components/AuthenticatedPages/User/Interactives/Interactives.vue");
const Translate = () => import("@/components/AuthenticatedPages/User/Translate/Translate.vue");

// ADMIN SIDE
const AdminDashboard = () => import("@/components/AuthenticatedPages/Admin/Admin Dashboard/AdminDashboard.vue");
const AdminDictionary = () => import("@/components/AuthenticatedPages/Admin/Admin Dictionary/AdminDictionary.vue");
const AdminLesson = () => import("@/components/AuthenticatedPages/Admin/Admin Lesson/AdminLesson.vue");
const AdminQuiz = () => import("@/components/AuthenticatedPages/Admin/Admin Quiz/AdminQuiz.vue");
const AdminExamination = () => import("@/components/AuthenticatedPages/Admin/Admin Examination/AdminExamination.vue");

// LAYOUTS
const UserLayout = () =>import("@/components/Layouts/Authenticated Layout/UserLayout.vue");
const AdminLayout = () =>import("@/components/Layouts/Authenticated Layout/AdminLayout.vue");

const routes = [
    {
        path: "/",
        component: UserLayout,
        redirect: '/Student/Home',
        meta: {
            title: 'SignTalk | Student'
        },
        children: [
            {
                path:'/register',
                component: Register,
                meta: {
                    title: "SignTalk | Register",
                },
            },
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
                path: "/Student/Lesson/",
                component: LessonLandingPage,
                meta: {
                    title: "SignTalk | Lesson",
                },
            },
            {
                name: "lesson-main",
                path: "/Student/Lesson/Main",
                component: LessonMain,
                meta: {
                    title: "SignTalk | Lesson",
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
                    title: "SignTalk | Dictionary",
                },                                
            },
            {   
                name: 'quiz',                
                path: "/Student/Quiz/",
                component: Quiz,
                meta: {
                    title: "SignTalk | Quiz",
                },                                
            },
            // {   
            //     name: 'exam',                
            //     path: "/Student/Exam/",
            //     component: Exam,
            //     meta: {
            //         title: "SignTalk | Exam",
            //     },                                
            // },
            {   
                name: 'interactives',                
                path: "/Student/Interactives/",
                component: Interactives,
                meta: {
                    title: "SignTalk | Interactives",
                },                                
            },
            {   
                name: 'translate',                
                path: "/Student/Translate",
                component: Translate,
                meta: {
                    title: "SignTalk | Translate",
                },                                
            },
        ],
    },
    {
        path: "/Admin",
        component: AdminLayout,
        redirect: '/Admin/Dashboard',
        meta: {
            title: 'SignTalk | Admin'
        },
        children: [
            {
                name: 'admin-dashboard',                
                path: "/Admin/Dashboard",
                component: AdminDashboard,
                meta: {
                    title: "SignTalk | Admin - Dashboard",
                },   
            },
            {
                name: 'admin-dictionary',                
                path: "/Admin/Dictionary",
                component: AdminDictionary,
                meta: {
                    title: "SignTalk | Admin - Dictionary",
                },   
            },
            {
                name: 'admin-lesson',                
                path: "/Admin/Lesson",
                component: AdminLesson,
                meta: {
                    title: "SignTalk | Admin - Lesson",
                },   
            },
            {
                name: 'admin-quiz',                
                path: "/Admin/Quiz",
                component: AdminQuiz,
                meta: {
                    title: "SignTalk | Admin - Quiz",
                },   
            },
            {
                name: 'admin-examination',                
                path: "/Admin/Examination",
                component: AdminExamination,
                meta: {
                    title: "SignTalk | Admin - Examination",
                },   
            }
        ]
    }
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

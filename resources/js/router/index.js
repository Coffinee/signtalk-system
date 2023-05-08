import { createRouter, createWebHistory } from "vue-router";
// USER SIDE
const Register = () => import("@/components/AuthenticatedPages/User/Auth/Register.vue");
const Home = () => import("@/components/AuthenticatedPages/User/Home/Home.vue");
const About = () => import("@/components/AuthenticatedPages/User/About/About.vue");
const DictionaryLandingPage = () => import("@/components/AuthenticatedPages/User/Dictionary/DictionaryLandingPage.vue");
const DictionaryMain = () => import("@/components/AuthenticatedPages/User/Dictionary/DictionaryMain.vue");
const LessonLandingPage = () => import("@/components/AuthenticatedPages/User/Lesson/LessonLandingPage.vue");
const LessonMain = () => import("@/components/AuthenticatedPages/User/Lesson/LessonMain.vue");
const Quiz = () => import("@/components/AuthenticatedPages/User/Quiz/Quiz.vue");
const Login = () => import("@/components/AuthenticatedPages/User/Auth/Login.vue");
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
        redirect: '/index',
        meta: {
            title: 'SignTalk'
        },
        children: [
            {
                name: "home",
                path: "/index",
                component: Home,
                meta: {
                    title: "SignTalk | Home",
                },
            },
            {
                name: "login",
                path: "/login",
                component: Login,
                meta: {
                    title: "SignTalk | Login",
                },
            },
            {
                name: "register",
                path:'/register',
                component: Register,
                meta: {
                    title: "SignTalk | Register",
                },
            },
            {
                name: "about",
                path: "/student/about",
                component: About,
                meta: {
                    title: "SignTalk | About",
                },
            },
            {
                name: "lesson",
                path: "/student/lesson/",
                component: LessonLandingPage,
                meta: {
                    title: "SignTalk | Lesson",
                },
            },
            {
                name: "lesson-main",
                path: "/student/lesson/main",
                component: LessonMain,
                meta: {
                    title: "SignTalk | Lesson",
                },
            },
            {
                name: "dictionary",
                path: "/student/dictionary/",
                component: DictionaryLandingPage,
                meta: {
                    title: "SignTalk | Dictionary",
                },
            },
            {
                name: 'dictionary-main',
                path: "/student/dictionary/main",
                component: DictionaryMain,
                meta: {
                    title: "SignTalk | Dictionary",
                },
            },
            {
                name: 'quiz',
                path: "/student/quiz/",
                component: Quiz,
                meta: {
                    title: "SignTalk | Quiz",
                },
            },
            // {
            //     name: 'exam',
            //     path: "/student/Exam/",
            //     component: Exam,
            //     meta: {
            //         title: "SignTalk | Exam",
            //     },
            // },
            {
                name: 'interactives',
                path: "/student/interactives/",
                component: Interactives,
                meta: {
                    title: "SignTalk | Interactives",
                },
            },
            {
                name: 'translate',
                path: "/student/translate",
                component: Translate,
                meta: {
                    title: "SignTalk | Translate",
                },
            },
        ],
    },
    {
        path: "/admin",
        component: AdminLayout,
        redirect: '/admin/dashboard',
        meta: {
            title: 'SignTalk | Admin'
        },
        children: [
            {
                name: 'admin-dashboard',
                path: "/admin/dashboard",
                component: AdminDashboard,
                meta: {
                    title: "SignTalk | Admin - Dashboard",
                },
            },
            {
                name: 'admin-dictionary',
                path: "/admin/dictionary",
                component: AdminDictionary,
                meta: {
                    title: "SignTalk | Admin - Dictionary",
                },
            },
            {
                name: 'admin-lesson',
                path: "/admin/lesson",
                component: AdminLesson,
                meta: {
                    title: "SignTalk | Admin - Lesson",
                },
            },
            {
                name: 'admin-quiz',
                path: "/admin/quiz",
                component: AdminQuiz,
                meta: {
                    title: "SignTalk | Admin - Quiz",
                },
            },
            {
                name: 'admin-examination',
                path: "/admin/examination",
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

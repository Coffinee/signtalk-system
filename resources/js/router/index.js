import { createRouter, createWebHistory } from "vue-router";
import {userAuthStore} from '@/store/auth';

// GUEST SIDE - login - Register - First Time
const Login = () => import("@/components/AuthenticatedPages/User/Auth/Login.vue");
const Register = () => import("@/components/AuthenticatedPages/User/Auth/Register.vue");
const About = () => import("@/components/GuestPages/About/About.vue");
const Contact = () => import("@/components/GuestPages/Contact/Contact.vue");

// USER SIDE
const Home = () => import("@/components/AuthenticatedPages/User/Home/Home.vue");
const DictionaryMain = () => import("@/components/AuthenticatedPages/User/Dictionary/DictionaryMain.vue");
const LessonLandingPage = () => import("@/components/AuthenticatedPages/User/Lesson/LessonLandingPage.vue");
const LessonMain = () => import("@/components/AuthenticatedPages/User/Lesson/LessonMain.vue");
const Quiz = () => import("@/components/AuthenticatedPages/User/Quiz/Quiz.vue");
const Translate = () => import("@/components/AuthenticatedPages/User/Translate/Translate.vue");
const QuizMain = () => import("@/components/AuthenticatedPages/User/Quiz/QuizMain.vue");
const Setting = () =>import("@/components/AuthenticatedPages/User/Setting/Setting.vue");
const Profile = () =>import("@/components/AuthenticatedPages/User/Setting/Tabs/Profile.vue");
const Analytics = () =>import("@/components/AuthenticatedPages/User/Setting/Tabs/Analytics.vue");
const Personalization = () =>import("@/components/AuthenticatedPages/User/Setting/Tabs/Personalization.vue");


// TEACHER SIDE
const TeacherHome = () => import("@/components/AuthenticatedPages/Teacher/Home.vue");
const TeacherDashboard = () => import("@/components/AuthenticatedPages/Teacher/TeacherDashboard/TeacherDashboard.vue");
const TeacherClasses = () => import("@/components/AuthenticatedPages/Teacher/TeacherClasses/TeacherClasses.vue");
const TeacherLesson = () => import("@/components/AuthenticatedPages/Teacher/TeacherLesson/TeacherLesson.vue");
const TeacherSettings = () => import("@/components/AuthenticatedPages/Teacher/TeacherSettings/TeacherSettings.vue");
const TeacherSettingsViewProfile = () => import("@/components/AuthenticatedPages/Teacher/TeacherSettings/Tabs/ViewProfile.vue");
const TeacherQuiz = () => import("@/components/AuthenticatedPages/Teacher/TeacherQuiz/TeacherQuiz.vue");
const TeacherQuizAdd = () => import("@/components/AuthenticatedPages/Teacher/TeacherQuiz/TeacherQuizAdd.vue");


// ADMIN SIDE
const AdminDashboard = () => import("@/components/AuthenticatedPages/Admin/Admin Dashboard/AdminDashboard.vue");
const AdminDictionary = () => import("@/components/AuthenticatedPages/Admin/Admin Dictionary/AdminDictionary.vue");
const AdminLesson = () => import("@/components/AuthenticatedPages/Admin/Admin Lesson/AdminLesson.vue");
const AdminQuiz = () => import("@/components/AuthenticatedPages/Admin/Admin Quiz/AdminQuiz.vue");
const AdminQuizAdd = () => import("@/components/AuthenticatedPages/Admin/Admin Quiz/AdminQuizAdd.vue");
const AdminExamination = () => import("@/components/AuthenticatedPages/Admin/Admin Examination/AdminExamination.vue");
const AdminTranslate = () => import("@/components/AuthenticatedPages/Admin/Admin Translate/AdminTranslate.vue");


// LAYOUTS
const UserLayout = () =>import("@/components/Layouts/Authenticated Layout/UserLayout.vue");
const AdminLayout = () =>import("@/components/Layouts/Authenticated Layout/AdminLayout.vue");
const TeacherLayout = () =>import("@/components/Layouts/Authenticated Layout/TeacherLayout.vue");
const GuestLayout = () =>import("@/components/Layouts/GuestLayout.vue");

const routes = [
    {
        path: "/",
        component: GuestLayout,
        meta: {
            middleware: "guest",
        },
        children: [
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
                path: "/register",
                component: Register,
                meta: {
                    title: "SignTalk | Register",
                },
            },
            {
                name: "about",
                path: "/about",
                component: About,
                meta: {
                    title: "SignTalk | About",
                },
            },
            {
                name: "contact",
                path: "/contact",
                component: Contact,
                meta: {
                    title: "SignTalk | Contact",
                },
            },
            {
                name: "home",
                path: "/",
                component: Home,
                meta: {
                    title: `Home`,
                },
            },
            {
                name: "lesson",
                path: "/lesson",
                component: LessonLandingPage,
                meta: {
                    title: "SignTalk | Lesson",
                },
            },
            {
                name: 'translate',
                path: "/translate",
                component: Translate,
                meta: {
                    title: "SignTalk | Translate",
                },
            },
            {
                name: "dictionary",
                path: "/dictionary",
                component: DictionaryMain,
                meta: {
                    title: "SignTalk | Dictionary",
                },
            },
            {
                name: 'quiz',
                path: "/quiz",
                component: Quiz,
                meta: {
                    title: "SignTalk | Quiz",
                },
            },
        ],
    },
    {
        path: "/student",
        component: UserLayout,
        meta: {
            middleware: "student",
        },
        children: [
            {
                name: "user-home",
                path: "/",
                component: Home,
                meta: {
                    title: "SignTalk | Home",
                },
            },
            {
                name: "about",
                path: "/about",
                component: About,
                meta: {
                    title: "SignTalk | About",
                },
            },
            {
                name: "contact",
                path: "/contact",
                component: Contact,
                meta: {
                    title: "SignTalk | Contact",
                },
            },
            {
                name: "lesson",
                path: "/lesson",
                component: LessonLandingPage,
                meta: {
                    title: "SignTalk | Lesson",
                },
            },
            {
                name: "lesson-main",
                path: "/lesson/main",
                component: LessonMain,
                meta: {
                    title: "SignTalk | Lesson",
                },
            },
            {
                name: "dictionary",
                path: "/dictionary",
                component: DictionaryMain,
                meta: {
                    title: "SignTalk | Dictionary",
                },
            },
            {
                name: 'quiz',
                path: "/quiz",
                component: Quiz,
                meta: {
                    title: "SignTalk | Quiz",
                },
            },
            {
                name: 'quiz-main',
                path: "/quiz/main",
                component: QuizMain,
                meta: {
                    title: "SignTalk | Quiz",
                },
            },
            {
                name: 'translate',
                path: "/translate",
                component: Translate,
                meta: {
                    title: "SignTalk | Translate",
                },
            },
            {
                name: 'setting',
                path: "/setting",
                component: Setting,
                meta: {
                    title: "SignTalk | Setting",
                },
                children:[
                    {
                        name: 'profile',
                        path: "/setting/profile",
                        component: Profile,
                        meta: {
                            title: "SignTalk | Profile",
                        },
                    },
                    {
                        name: 'analytics',
                        path: "/setting/analytics",
                        component: Analytics,
                        meta: {
                            title: "SignTalk | Analytics",
                        },
                    },
                    {
                        name: 'Personalization',
                        path: "/setting/personalization",
                        component: Personalization,
                        meta: {
                            title: "SignTalk | Personalization",
                        },
                    },

                ]
            },

        ],
    },
    {
        path: "/teacher",
        component: TeacherLayout,
        meta: {
            middleware: "teacher",
        },
        children: [
            {
                name: "teacher-home",
                path: "/",
                component: TeacherHome,
                meta: {
                    title: `Teacher Home`,
                },
            },
            {
                name: "teacher-dashboard",
                path: "/teacher/dashboard",
                component: TeacherDashboard,
                meta: {
                    title: `Teacher Dashboard`,
                },
            },
            {
                name: "teacher-classes",
                path: "/teacher/lesson",
                component: TeacherLesson,
                meta: {
                    title: `Teacher Lesson`,
                },
            },
            {
                name: "teacher-lesson",
                path: "/teacher/classes",
                component: TeacherClasses,
                meta: {
                    title: `Teacher Classes`,
                },
            },
            {
                name: "teacher-settings",
                path: "/teacher/settings",
                component: TeacherSettings,
                meta: {
                    title: `Teacher Settings`,
                },
                children:[
                    {
                        name: 'teacher-settings-profile',
                        path: "teacher/settings/profile",
                        component: TeacherSettingsViewProfile,
                    },
                ],
            },
            {
                name: "teacher-quiz",
                path: "/teacher/quiz",
                component: TeacherQuiz,
                meta: {
                    title: `Teacher Quiz`,
                },
            },
            {
                name: "teacher-quiz-add",
                path: "/teacher/quiz/add",
                component: TeacherQuizAdd,
                meta: {
                    title: `Teacher Quiz Add`,
                },
            },
        ],
    },
    {
        path: "/admin",
        component: AdminLayout,
        meta: {
            middleware: "admin",
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
                name: 'admin-quiz-add',
                path: "/admin/quiz/add",
                component: AdminQuizAdd,
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
            },
            {
                name: 'admin-translate',
                path: "/admin/translate",
                component: AdminTranslate,
                meta: {
                    title: "SignTalk | Admin - Translate",
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
    document.title = to.meta.title;
    if (to.meta.middleware == "guest") {
        if (userAuthStore().authenticated) {
            if(userAuthStore().user.role == 'admin'){
                next({ name: "admin-dashboard" });
            }else if(userAuthStore().user.role == 'student'){
                next({ name: "user-home" });
            }else{
                next({ name: "teacher-dashboard" });
            }
        }
        
        next();
    } else {
      next();
    }
});

export default router;

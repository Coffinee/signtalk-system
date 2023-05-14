import './bootstrap';
import "../css/app.css";
import { createApp } from 'vue';
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import axios from 'axios';
import moshaToast from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
import Form from "vform";
import Router from "@/router";

const pinia = createPinia()
const options = {
    color: "rgb(143, 255, 199)",
    failedColor: "#FF1919",
    thickness: "3px",
    transition: {
    speed: "0.5s",
    opacity: "0.6s",
    termination: 300,

    },
    autoRevert: true,
    location: "top",
    inverse: false,
};
const app = createApp({});

app.use(pinia);
pinia.use(piniaPluginPersistedstate);
app.config.globalProperties.$axios = axios;
app.use(moshaToast, Form);
app.use(Router);
app.mount('#app');



import './bootstrap';
import "../css/app.css";
import { createApp } from 'vue';
import Router from "@/router";

const app = createApp({});
app.use(Router);
app.mount('#app');


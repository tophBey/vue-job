import { createRouter, createWebHistory } from "vue-router";
import Homeview from '../view/Homeview.vue';
import Jobsview from '../view/Jobsview.vue';
import Addjobview from '../view/Addjobview.vue';


const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),

    routes : [
        {
        path : '/',
        name : 'home',
        component : Homeview
        },
        {
        path : '/jobs',
        name : 'jobs',
        component : Jobsview
        },
        {
        path : '/jobs/addjob',
        name : 'add-job',
        component : Addjobview
        }
]
})


export default router;
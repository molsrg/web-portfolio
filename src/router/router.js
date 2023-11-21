import { createRouter, createWebHistory } from 'vue-router'
import Home from './../HomeApp.vue'
import Skills from './../SkillsApp.vue'
import AboutMe from '../AboutMe.vue'
import ProjectPage from './../ProjectPage.vue'

const routes = [
    {
        path:'/',
        name:'Home',
        component: Home,
    },
    {
        path:'/skills',
        name:'Skills',
        component: Skills,
    },
    {
        path:'/about',
        name:'AboutMe',
        component: AboutMe,
    },
    {
        path:'/project/:idx?',
        name:'ProjectPage',
        component: ProjectPage,
        props: true 
    }, 



    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
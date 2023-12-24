import { createRouter, createWebHistory } from 'vue-router'
import Home from './../HomeApp.vue'
import Skills from './../SkillsApp.vue'
import AboutMe from '../AboutMe.vue'
import ProjectPage from './../ProjectPage.vue'

const routes = [
    {
        path:'/web-portfolio/',
        name:'Home',
        component: Home,
    },
    {
        path:'/web-portfolio/skills',
        name:'Skills',
        component: Skills,
    },
    {
        path:'/web-portfolio/about',
        name:'AboutMe',
        component: AboutMe,
    },
    {
        path:'/web-portfolio/project/:idx?',
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
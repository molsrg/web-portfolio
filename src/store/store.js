import Vuex from 'vuex'

const store = new Vuex.Store ({
    state() {
        return {
            projects: [
                {
                    name: "Working Stopwatch",
                    id: 0,
                    link: 'https://github.com/molsrg/working-stopwatch', 
                    skills: 'Vue(Composition API), Pinia, i18n'
                },
                {
                    name: "Freelance Exchange",
                    id: 1,
                    link: 'https://github.com/molsrg/freelance-exchange', 
                    skills: 'Vue, Vuex, Vue-Router, Axios, Vue-Carousel'
                },

                {
                    name: "Movie Seeker",
                    id: 2,
                    link: 'https://github.com/molsrg/movie-seeker', 
                    skills: 'Vue, Vuex, Vue-Router, Axios'
                },

                {
                    name: "Task Manager",
                    id: 3,
                    link: 'https://github.com/molsrg/task-manager', 
                    skills: 'Vue, Vuex, Vue-Router, Axios'
                },
                {
                    name: "Weather Forecast",
                    id: 4,
                    link: 'https://github.com/molsrg/weather-app-v.2', 
                    skills: 'Vue, Vuex, Vue-Router, Axios'
                },

            ],
            aboutMe: [
                {title: 'My experience', description: 'I have more than 2 years of experience in web development and have been interested in programming for more than 4 years. I have successfully completed many projects that involve creating modern and adaptive interfaces using Vue.js, HTML, CSS and JavaScript. My goal is to provide users with ease of use and a unique design.'}, 
                
                {title: 'My hobbies', description: 'Outside of work, I am actively interested not only in code, but also in various hobbies. One of my favorite hobbies is sports. This is my opportunity to relax and enjoy time away from the monitor. I believe that diversity of interests enriches our lives and makes us more inspired.'}, 
                {title: 'Contact me', description: 'If you have any questions, suggestions for cooperation or just want to chat, do not hesitate to contact me through the contacts that are pinned at the bottom of the page. Thank you for visiting my site, and I hope for the opportunity to cooperate with you!'}
            ]
        };
    },
    getters: {
        ALL_PROJECTS: (state) => {
            return state.projects;
        },
        PROJECT_IDX: (state) => {
            return state.project
        }, 
        ABOUT_ME: (state) => {
            return state.aboutMe
        }
    },
    mutations: {
        SET_PROJECT_IDX: (state, idx) => {
            state.project = state.projects[idx]
        }, 
    },
    actions: {},
})


export default store 



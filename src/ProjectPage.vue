<template>
    <Navigation/>
    <main class="section">
        <div class="container">
            <div class="project-details">
                <h1 class="title-1">{{ PROJECT_IDX.name }}</h1>


                <img class="project-details__cover"  :src="require('../src/assets/image/projects/' + `0${this.indexProject}-big.png`)" alt="">


                <div class="project-details__desc">
                    <p>Skills: {{ PROJECT_IDX?.skills }}</p>
                </div>


                <a class="btn-outline" :href="PROJECT_IDX.link" target="_blank">
                    <img src="./assets/image/icons/gitHub-black.svg" alt="">
                    GitHub Repo
                </a>
            </div>
        </div>
    </main>


    <Footer/>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Navigation from './components/NavigationApp.vue';

import Footer from'./components/FooterApp.vue'
export default {
    created(){
        this.indexProject = this.$route.params.idx 
        this.SET_PROJECT_IDX(this.indexProject)
        
    },
    
    mounted(){
        
    },
    data(){
        return {
            indexProject: 0

        }
    },
    computed: {
        ...mapGetters(["PROJECT_IDX"]),
    },
    methods: {
        ...mapMutations(["SET_PROJECT_IDX"]),
    },
    components: {
        Navigation,

        Footer
    }
};
</script>

<style>
</style>
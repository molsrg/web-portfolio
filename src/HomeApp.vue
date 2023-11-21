<template>
    <Navigation/>
    <Header/>
    <Project/>
    <Footer/>
</template>

<script>
import Navigation from'./components/NavigationApp.vue'
import Header from'./components/HeaderApp.vue'
import Project from'./components/ProjectsApp.vue'
import Footer from'./components/FooterApp.vue'
export default {
    components: {
        Navigation,
        Header, 
        Project,
        Footer
    },
    data() {
        return {
            
        };
    },
    methods: {
        
    },
};

</script>

<style>
</style>
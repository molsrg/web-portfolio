<template>
    <Navigation />
    <main class="section">
        <div class="container">
            <h1 class="title-1">About me</h1>
            <p class="about-me-container__text">Hi, my name is Sergey and I am a web developer specializing in frontend development using Vue.js The pursuit of excellence and passion for creating beautiful, functional web applications inspire me every day.</p>
            <div class="about-me-container">
                <ul >
                    <li class="about-me-container__item" v-for="(item, index) in ABOUT_ME" :key="index">
                        <h2 class="about-me-container__title">{{ item.title }}</h2>
                        <p class="about-me-container__text">{{ item.description }}</p>
                    </li>

                </ul>
            </div>
        </div>
    </main>
    <Footer/>
</template>

<script>
import { mapGetters } from "vuex";
import Navigation from "./components/NavigationApp.vue";
import Footer from'./components/FooterApp.vue'
export default {
    components: {
        Navigation,
        Footer
    },
    computed: {
        ...mapGetters(["ABOUT_ME"]),
    },
};
</script>

<style>
</style>
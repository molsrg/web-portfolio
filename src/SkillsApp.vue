<template>
    <Navigation />
    <main class="section">
        <div class="container">
            <h1 class="title-1">Skills</h1>

            <div class="skills-container">
                <h3 class="title-2">USING NOW</h3>
                <div class="skills-container__item">
                    <img src="./assets/image/skills/html.svg" alt="" />
                    <img src="./assets/image/skills/css3.svg" alt="" />
                    <img src="./assets/image/skills/vue.svg" alt="" />
                    <img src="./assets/image/skills/javascript.svg" alt="" />
                    <img src="./assets/image/skills/vscode.svg" alt="" />


                </div>
            </div>
            <div class="skills-container">
                <h3 class="title-2">LEARNING</h3>
                <div class="skills-container__item">
                    <img src="./assets/image/skills/sass.svg" alt="" />
                    <img src="./assets/image/skills/git.svg" alt="" />
                    <img src="./assets/image/skills/github.svg" alt="" />
                    <img src="./assets/image/skills/nodejs.svg" alt="" />
                    <img src="./assets/image/skills/firebase.svg" alt="" />
                </div>
            </div>
            <div class="skills-container">
                <h3 class="title-2">OTHER SKILLS</h3>
                <div class="skills-container__item">
                    <img src="./assets/image/skills/python.svg" alt="" />
                    <img src="./assets/image/skills/c++.svg" alt="" />
                </div>
            </div>
            
        </div>
    </main>

    <Footer />
</template>

<script>
import Navigation from "./components/NavigationApp.vue";
import Footer from "./components/FooterApp.vue";
export default {
    components: {
        Navigation,
        Footer,
    },
};
</script>

<style>
</style>
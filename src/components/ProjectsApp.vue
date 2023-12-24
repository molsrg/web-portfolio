<template>
    <main class="section">
        <div class="container">
            <h2 class="title-1">Projects</h2>
            <ul class="projects">
                <li
                    class="project"
                    v-for="project in ALL_PROJECTS"
                    :key="project.id"
                >
                    <router-link :to="'/web-portfolio/project/' + project.id">
                        <img
                            class="project__img"
                            :src="
                                require('./../assets/image/projects/' +
                                    `0${project.id}` +
                                    '.jpg')
                            "
                            alt=""
                        />
                        <h3 class="project__title">{{ project.name }}</h3>
                    </router-link>
                </li>
            </ul>
        </div>
    </main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
        
        };
    },

    computed: {
        ...mapGetters(["ALL_PROJECTS"]),
    },
};
</script>

<style>
</style>
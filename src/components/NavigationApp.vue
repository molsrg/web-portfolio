<template>
    <nav class="nav">
        <div class="container">
            <div class="nav-row">
                <router-link class="logo" to="/web-portfolio/"><strong>Developer</strong> portfolio</router-link>  

                <button
                    @click="changeApplicationTheme"
                    :class="
                        this.theme == 'light'
                            ? ' dark-mode-btn'
                            : 'dark-mode-btn dark-mode-btn--active'
                    "
                >
                    <img
                        src="./../assets/image/icons/sun.svg"
                        alt="Light Mode"
                        class="dark-mode-btn__icon"
                    />
                    <img
                        src="./../assets/image/icons/moon.svg"
                        alt="Dark Mode"
                        class="dark-mode-btn__icon"
                    />
                </button>

                <ul class="nav-list">
                    <li class="nav-list__item">
                        <router-link class="nav-list__link" :class="{ 'nav-list__link--active': $route.path === '/web-portfolio/' }" to="/web-portfolio/">Projects</router-link>

                    </li>
                    <li class="nav-list__item">
                        <router-link class="nav-list__link" :class="{ 'nav-list__link--active': $route.path === '/web-portfolio/skills' }" to="/web-portfolio/skills">Skills</router-link>
                    </li>
                    <li class="nav-list__item">
                        <router-link class="nav-list__link" :class="{ 'nav-list__link--active': $route.path === '/web-portfolio/about' }" to="/web-portfolio/about">About Me</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    mounted() {
        if(localStorage.getItem('ApplicationTheme') !== null) this.theme = localStorage.getItem('ApplicationTheme')
        else this.theme = 'light'
    },
    data() {
        return {
            theme: "light",
        };
    },
    methods: {
        changeApplicationTheme() {
            if (this.theme === "light") {
                this.theme = "dark";
                document.body.classList.add('dark')
            } else if (this.theme === "dark") {
                this.theme = "light";
                document.body.classList.remove('dark')
            }
                localStorage.setItem("ApplicationTheme", this.theme);

        },
    },
};
</script>

<style>
</style>
<template>
    <nav class="nav">
        <div class="container">
            <div class="nav-row">
                <router-link class="logo" to="/"><strong>Developer</strong> portfolio</router-link>  

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
                        <router-link class="nav-list__link" :class="{ 'nav-list__link--active': $route.path === '/' }" to="/">Projects</router-link>

                    </li>
                    <li class="nav-list__item">
                        <router-link class="nav-list__link" :class="{ 'nav-list__link--active': $route.path === '/skills' }" to="/skills">Skills</router-link>
                    </li>
                    <li class="nav-list__item">
                        <router-link class="nav-list__link" :class="{ 'nav-list__link--active': $route.path === '/about' }" to="/about">About Me</router-link>
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
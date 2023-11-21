<template>
    <header class="header">
        <div class="header__wrapper">
            <h1 class="header__title">
                <strong>Hi, my name is <em>Sergey</em></strong
                ><br />
                <div class="header__animation">
                    a frontend
                    <div class="h-animate">
                        <span class="text sec-text">{{ textInfo }}</span>
                    </div>
                </div>
            </h1>

            <div class="header__text">
                <p>with passion for learning and creating.</p>
            </div>
            <a href="https://github.com/molsrg" class="btn" target="_blank"
                >Show GitHub Profile</a
            >
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            textInfo: "",
            animationInterval: 12000,
        };
    },
    methods: {
        textLoad() {
            setTimeout(() => {
                this.textInfo = "developer";
            }, 0);
            setTimeout(() => {
                this.textInfo = "freelancer";
            }, 4000);
            setTimeout(() => {
                this.textInfo = "designer";
            }, 8000);
            },

            startAnimation() {
            this.textLoad();
            setInterval(this.textLoad, this.animationInterval);
        },
    },
    mounted() {
        this.startAnimation();
    },
};
</script>

<style>
</style>
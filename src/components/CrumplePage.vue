<template>
    <div id="page-content" ref="pageContent">
        <h1>Welcome to My Website</h1>
        <p>This is a demo of crumpling the web page into a ball.</p>
        <button @click="crumplePage">Start Animation</button>
    </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

export default {
    name: 'CrumplePage',
    methods: {
        crumplePage() {
            anime({
                targets: this.$refs.pageContent,
                scale: [
                    { value: 0.8, duration: 500, easing: 'easeInOutQuad' },
                    { value: 0.5, duration: 500, easing: 'easeInOutQuad' },
                    { value: 0.2, duration: 1000, easing: 'easeInOutQuad' }
                ],
                borderRadius: [
                    { value: '20%', duration: 500, easing: 'easeInOutQuad' },
                    { value: '50%', duration: 500, easing: 'easeInOutQuad' },
                    { value: '50%', duration: 1000, easing: 'easeInOutQuad' }
                ],
                opacity: { value: 0, duration: 500, delay: 1500, easing: 'easeInOutQuad' }
            });
        }
    }
};
</script>

<style scoped>
#page-content {
    width: 100%;
    height: 100vh;
    background-color: #f0f0f0;
    text-align: center;
    padding: 20px;
    position: relative;
}
</style>

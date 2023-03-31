<template>
    <div class="wrapper">
        <vue-particles
            color="#1A73E8"
            :particleOpacity="0.7"
            :particlesNumber="60"
            shapeType="circle"
            :particleSize="4"
            linesColor="#1A73E8"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="2"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
        >
        </vue-particles>
    </div>
    <div class="other">
        <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
            >点击测试</a
        >
    </div>
</template>
<script>
export default {
    name: 'App',
    components: {},
}
</script>

<style>
.wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}
</style>

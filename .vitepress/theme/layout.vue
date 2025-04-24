<script setup>
import { useData } from 'vitepress'
import xNav from './components/Nav/index.vue'
import xMain from './components/Main/index.vue'

// import NotFound from './NotFound.vue'
// import Home from './Home.vue'
// import Page from './Page.vue'
const { page, frontmatter } = useData()
</script>

<template>
    <div class="layout-all">
        <xNav />

        <xMain />
    </div>



    <!-- <h1>Custom Layout!</h1> -->




    <!-- <NotFound v-if="page.isNotFound" /> -->
    <!-- <Home v-if="frontmatter.layout === 'home'" /> -->
    <!-- <Page v-else /> -->
    <!-- <Page /> renders <Content /> -->
</template>

<style lang="scss">
.layout-all {

    width: 100%;
    min-height: 100vh;
    $lineColor: #f5f0f0;
    background-image: linear-gradient($lineColor 1px, transparent 1px),

        linear-gradient(to right, $lineColor 1px, transparent 1px);

    background-size: 100% 10px,
        10px 100%;
    background-position: 0 0;

    position: relative;
}
</style>
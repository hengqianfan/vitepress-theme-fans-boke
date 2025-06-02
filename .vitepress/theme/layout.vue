<script setup>
import { useData } from 'vitepress'
import xNav from './components/Nav/index.vue'
import xMain from './components/Main/index.vue'
import XBanner from './components/Banner/index.vue'
import bokeMain from '../../data/main.json'



// import NotFound from './NotFound.vue'
// import Home from './Home.vue'

</script>

<template>
    <div class="layout-all">
        <xNav />

        <XBanner />

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

    $lineColor: #f5f0f0;
    background-image: linear-gradient($lineColor 1px, transparent 1px),

        linear-gradient(to right, $lineColor 1px, transparent 1px);

    background-size: 100% 10px,
        10px 100%;
    background-position: 0 0;



    width: 100%;
    min-height: 180vh;

    display: flex;
    flex-direction: column;

    overflow: visible;

    // background-color: #1d4bad;


}
</style>
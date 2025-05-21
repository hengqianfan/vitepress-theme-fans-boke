<template>
    <div class="xMain-all">

        <MainAside />

        <div class="xMain-content">

            <PageHome v-if="frontmatter.layout === 'xHome'" />

            <PageSites v-if="frontmatter.layout === 'xSites'" />

            <PageNotes v-if="frontmatter.layout === 'xNotes'" />

            <MainDoc v-else />



        </div>


    </div>

</template>

<script setup>

import { useData } from 'vitepress'
import MainAside from '../MainAside/index.vue'
import PageHome from '../page-home/index.vue'
import PageSites from '../page-sites/index.vue'
import PageNotes from '../PageNotes/index.vue'


import MainDoc from '../MainDoc/index.vue'


const { page, frontmatter } = useData()




</script>

<style lang="scss" scoped>
@use './app.scss';

.xMain-all {
    display: flex;
    flex-direction: row;
    margin: 10px 5%;
    // padding-top: 80px;
    width: 90%;

    z-index: 20;
    position: -webkit-sticky;
    position: sticky !important;
    top: 100px;

    margin-top: 10px;





    // background-color: red;




    .xMain-content {

        margin: 30px 0 0 300px;
        // padding-top: 10px;



        width: 80%;
        min-height: 60vh;



    }
}
</style>
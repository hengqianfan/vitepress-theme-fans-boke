<template>

    <div class="vp-doc">
        <MainDocAfter />

        <Content />

        <div class="outline" v-if="boke.isShowOutline">
            <MainDocOutline />
        </div>

        <div class="">
            <comment />
        </div>


    </div>
</template>

<script setup>
import MainDocAfter from '../MainDocAfter/index.vue'
import MainDocOutline from '../MainDocOutline/index.vue'
import comment from '../comment/index.vue'


import { Content, withBase, useData } from 'vitepress';
import { onMounted, onUpdated, watch, ref } from 'vue';
import { useBokeStore } from '../../../../stores/boke';
import { useNotesStore } from '../../../../stores/notes';



const boke = useBokeStore()


const notes = useNotesStore()

const { page } = useData()


const isHome = () => {
    let path = page.value.relativePath
    console.log(path);

    if (path == 'index.md') {
        return true
    } else {
        return false
    }
}

const isAbout = () => {
    let path = page.value.relativePath
    console.log(path);

    if (path == 'pages/about.md') {
        return true
    } else {
        return false
    }

}



onMounted(() => {
    boke.closePerson()
    boke.openOutline()
    if (isHome()) {

        boke.closeOutline()
        boke.openPerson()
    } else if (isAbout()) {
        boke.openOutline()

    }


})






</script>

<style lang="scss" scoped>
a {
    color: #f0ecec;
}

.vp-doc {
    display: flex;
    flex-direction: column;
    position: relative;
    height: auto;
    background-color: transparent;

    .outline {
        position: fixed;
        top: 100px;
        right: 5%;
        z-index: 1000;


    }



}
</style>
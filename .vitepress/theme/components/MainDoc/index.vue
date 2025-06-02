<template>

    <div class="vp-doc">

        <div class="" v-if="boke.isShowDocAfter">

            <MainDocAfter />

        </div>

        <div class="vp-doc-content">
            <Content />
        </div>




        <div class="outline" v-if="boke.isShowOutline">
            <MainDocOutline />
        </div>

        <div class="" v-if="isOpen()">
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

const notes = useNotesStore()

const { frontmatter } = useData()

const isOpen = () => {

    if (frontmatter.value) {
        if (frontmatter.value.layout == 'xhome') {
            return false
        }
    }


}

const boke = useBokeStore()


const { page } = useData()


const isHome = () => {
    let path = page.value.relativePath


    if (path == 'index.md') {
        return true
    } else {
        return false
    }
}

const isAbout = () => {
    let path = page.value.relativePath

    if (path == 'pages/about.md') {
        return true
    } else {
        return false
    }

}

const isSites = () => {
    let path = page.value.relativePath

    if (path == 'pages/sites.md') {
        return true
    } else {
        return false
    }

}

const isNotes = () => {
    let path = page.value.relativePath

    if (path == 'pages/notes.md') {
        return true
    } else {
        return false
    }

}



onMounted(() => {

    boke.openOutline()
    // boke.openPerson()

    if (isHome()) {

        boke.closeOutline()
        boke.openPerson()
    } else if (isAbout()) {
        boke.openOutline()


    } else if (isSites()) {
        boke.closeOutline()
    }

})


onUpdated(() => {

    boke.openOutline()

    if (isHome()) {

        boke.closeOutline()
        boke.openPerson()
    } else if (isAbout()) {
        boke.openPerson()
        boke.openOutline()

    } else if (isSites()) {
        boke.closeOutline()
        boke.openPerson()
    } else if (isNotes()) {
        boke.closeOutline()
        boke.openPerson()

    } else {
        boke.openOutlineInterior()
    }

    // if (page.value.headers.length == 0) {
    //     isShow.value = false
    // }

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

    .vp-doc-content {
        padding: 15px;
        // padding-bottom: 500px;
    }

    .outline {
        position: fixed;
        top: 100px;
        right: 5%;
        z-index: 1000;


    }



}
</style>
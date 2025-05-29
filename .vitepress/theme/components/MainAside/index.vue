<template>
    <div class="xSide">

        <div class="ma-container">


            <div v-if="boke.isShowDirectory">
                <MainAsideDirectory />

            </div>

            <div v-if="boke.isShowPerson">
                <MainAsidePerson />
            </div>


            <MainAsideTags />

            <div>
                <MainAsideInfo />

            </div>




        </div>

        <!-- <MainAsidePlayer />   -->

    </div>
</template>

<script setup>
import MainAsidePerson from '../MainAsidePerson/index.vue'
import MainAsideTags from '../MainAsideTags/index.vue'
import MainAsideDirectory from '../MainAsideDirectory/index.vue'
import MainAsideInfo from '../MainAsideInfo/index.vue'

import { useBokeStore } from '../../../../stores/boke'
const boke = useBokeStore()

import Clock from '../Clock/index.vue'

</script>

<style lang="scss" scoped>
@use './app.scss';

.xSide {
    min-height: 80vh;
    display: flex;
    flex-direction: column;

    position: absolute;

    // background-color: rebeccapurple;


    .ma-container,
    .ma-container div {
        overflow: scroll;
        margin: 8px auto;
        padding: 10px;
    }


}
</style>
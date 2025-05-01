<template>
    <div class="xSide">

        <div class="ma-container">


            <div v-if="boke.isShowDirectory">
                <MainAsideDirectory />

            </div>

            <div v-if="boke.isShowPerson">
                <MainAsidePerson />
            </div>


            <div v-if="boke.isShowClock">
                <Clock />
            </div>








            <MainAsideSearch />

            <MainAsideTags />



        </div>

        <!-- <MainAsidePlayer />   -->

    </div>
</template>

<script setup>
import MainAsidePerson from '../MainAsidePerson/index.vue'
import MainAsideSearch from '../MainAsideSearch/index.vue'
import MainAsideTags from '../MainAsideTags/index.vue'
import MainAsideDirectory from '../MainAsideDirectory/index.vue'
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
    padding: 10px;
    position: fixed;

    // overflow-y: scroll;
    .ma-container {
        overflow: scroll;
    }


}
</style>
<template>
    <div class="xSide">
        <MainAsidePerson />

        <Clock />

        <MainAsideSearch />

        <MainAsideTags />

    </div>
</template>

<script setup>
import MainAsidePerson from '../MainAsidePerson/index.vue'
import MainAsideSearch from '../MainAsideSearch/index.vue'
import MainAsideTags from '../MainAsideTags/index.vue'

import Clock from '../Clock/index.vue'

</script>

<style lang="scss" scoped>
.xSide {
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    padding: 10px;
    position: fixed;


}
</style>
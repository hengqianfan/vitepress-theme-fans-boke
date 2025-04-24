<template>
    <div class="xSites-all">
        <div class="xSites-nav">
            <div class="xSites-nav-item" v-for="item in data">
                {{ item.value }}
            </div>
        </div>

        <div class="xSites-content">
            content
        </div>
    </div>
</template>

<script setup>
import { sites_data as data } from '../../../../data/sites'



</script>

<style lang="scss" scoped>
.xSites-all {
    background-color: transparent;
    width: 100%;
    height: 88vh;



    .xSites-nav {

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 10px;
        height: 60px;
        background-color: #ffffff;

        box-shadow: 5px 5px 18px #dedede,
            -5px -5px 18px #ffffff;




        .xSites-nav-item {
            width: 100px;
            height: 30px;
            line-height: 30px;
            margin-left: 15px;
            background-color: white;
            text-align: center;
            border-radius: 5px;
            box-shadow: 2px 2px 3px #dedede,
                -2px -2px 3px #ffffff;

            box-shadow: 2px 2px 3px #dedede,
                -2px -2px 3px #f7f3f3;
            font-family: '优设标题黑';


        }
    }

    .xSites-content {
        margin-top: 30px;
        height: 80vh;
        width: 100%;
        background-color: #ffffff;
        box-shadow: 5px 5px 18px #dedede,
            -5px -5px 18px #ffffff;

    }
}
</style>
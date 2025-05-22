<template>
    <div class="xPerson">
        <img src="/icon/logo.png" class="xPerson-icon">



        <div class="xPerson-intro">{{ xData.PersonIntro }}</div>
        <div class="xPerson-links">
            <a class="xPerson-links-icon" v-for="item in xData.PersonSocialLinks" :href="item.link" target="_blank">
                <i :class="getSocialLinkIcon(item.name)"></i>
            </a>
        </div>

        <clock />
    </div>
</template>

<script setup>
import xData from '../../../../data/main.json'
import clock from '../Clock/index.vue'

const getSocialLinkIcon = (momo) => {
    return `iconfont icon-${momo}`
}
</script>

<style lang="scss" scoped>
@use './app.scss';

.xPerson {

    width: 260px;
    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 10px;

    background-color: white;


    box-shadow: 5px 5px 18px #dedede,
        -5px -5px 18px #ffffff;


    .xPerson-icon {
        width: 60px;
        height: 60px;
        padding: 5px;
        margin-top: 10px;

        border-radius: 5px;
        box-shadow: 1px 1px 3px #dedede,
            -1px -1px 3px #f5f0f0;
    }

    .xPerson-intro {
        margin-top: 10px;
        color: #bebcbc;
        font-size: 12px;
    }

    .xPerson-links {
        margin-top: 10px;

        .xPerson-links-icon {
            margin: 0 10px;
        }
    }
}
</style>
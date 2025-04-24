<template>
    <div class="xNav-all">
        <div class="xNav-left">
            <img src="/icon/logo.png" alt="" class="xNav-logo" @click="toPage(`/`)">

            <div class=xNav-siteName @click="toPage(`/`)">{{ xdata.SiteName }}</div>

        </div>
        <div class="xNav-right">
            <div class="xNav-menu">
                <div :class="['xNav-menu-item', { 'active': boke.nowActiveNavItem == index }]"
                    v-for="(item, index) in xdata.NavList" @click="changeNavItem(index, item.link)">{{ item.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vitepress'
import xdata from '../../../../data/main.json'
import { useBokeStore } from '../../../../stores/boke'

const boke = useBokeStore()

const router = useRouter()


const changeNavItem = (mo, no) => {
    // 清除标签栏
    boke.closeTags()
    // 改变索引值
    boke.changeActiveIndex(mo)
    // 进入对应的页面

    if (xdata.base == '/') {
        // 默认base时
        router.go(mo)

    }
    // 加上base
    router.go(`${xdata.base}${mo}`)
}

const toPage = (mo) => {
    // 清除标签栏
    boke.closeTags()
    if (xdata.base == '/') {
        // 默认base时
        router.go(mo)

    }
    // 加上base
    router.go(`${xdata.base}${mo}`)
}

</script>

<style lang="scss" scoped>
.xNav-all {
    height: 70px;
    width: 90%;
    margin: 0 5%;

    background-color: white;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 50px;
    padding-right: 50px;
    border-radius: 0 0 15px 15px;


    box-shadow: 5px 5px 18px #dedede,
        -5px -5px 18px #ffffff;

    position: fixed;

    z-index: 1000;



    .xNav-left {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 60px;
        margin-left: 15%;


        .xNav-logo {
            width: 30px;
            height: 30px;
            border-radius: 5px;
        }

        .xNav-siteName {
            margin-left: 15px;
            height: 30px;
            line-height: 30px;
            font-family: 'ZQK英文';
            font-size: 16px;


        }


    }

    .xNav-right {
        display: flex;
        flex-direction: row;
        align-items: center;

        margin-right: 15%;

        .xNav-menu {
            display: flex;
            flex-direction: row;
            align-items: center;

            .xNav-menu-item {
                margin: 0 20px;
                height: 35px;
                width: 70px;
                line-height: 35px;
                text-align: center;
                background-color: white;
                // border-radius: 10px;
                font-weight: 600;
                font-family: '剑豪体';
            }

            .xNav-menu-item:hover {

                color: #6868b4;
            }

            .active {
                border-bottom: 2px solid #6868b4 !important;
                color: #6868b4;

            }
        }
    }

}
</style>
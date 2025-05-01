<template>
    <div class="xNav-all">
        <div class="xNav-left">
            <img src="/icon/logo.png" alt="" class="xNav-logo" @click="changeNavItem(0, `/`)">

            <div class=xNav-siteName @click="changeNavItem(0, `/`)">{{ xdata.SiteName }}</div>

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

// mo 索引 no 路径
const changeNavItem = (mo, no) => {

    // 改变索引值
    boke.changeActiveIndex(mo)

    // 切换页面时，标签栏的出现逻辑
    if (mo == 0) {
        // 当在切换到首页时,开启标签
        boke.openTags()
    } else {
        // 当在其他页面时，关闭文章标签
        boke.closeTags()

    }

    // 随后，进入对应的页面
    if (xdata.base == '/') {
        // 默认base时
        router.go(no)

    }
    // 加上base,并除去多余的/
    router.go(`${xdata.base}${no.slice(1)}`)
}


</script>

<style lang="scss" scoped>
@use './app.scss';

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

    // 毛玻璃特效
    // background-color: rgba(255, 255, 255, 0.5);
    // -webkit-backdrop-filter: blur(20px);
    // backdrop-filter: blur(20px);



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
                background-color: transparent;
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
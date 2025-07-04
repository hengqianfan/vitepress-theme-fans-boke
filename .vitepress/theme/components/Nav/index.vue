<template>
    <div class="xNav-all">
        <div class="xNav-left">
            <img src="/icon/logo.png" alt="" class="xNav-logo" @click="changeNavItem(0, `/`)">

            <div class=xNav-siteName @click="changeNavItem(0, `/`)">{{ xdata.SiteName }}</div>



        </div>
        <div class="xNav-right">
            <NavSearch />
            <div class="xNav-menu">
                <div :class="['xNav-menu-item', { 'active': boke.nowActiveNavItem == index }]"
                    v-for="(item, index) in xdata.NavList" @click="changeNavItem(index, item.link)
                        ">{{ item.name }}
                </div>
            </div>

            <div class="xNav-theme">
                <i class="iconfont icon-theme"></i>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vitepress'
import xdata from '../../../../data/main.json'
import { useBokeStore } from '../../../../stores/boke'
import NavSearch from '../NavSearch/index.vue'



const boke = useBokeStore()

const router = useRouter()

// mo 索引 no 路径
const changeNavItem = (mo, no) => {

    // 当切换到外站时 
    if (no.includes('https://')) {
        window.open(no)
    } else if (no.includes('http://')) {
        window.open(no)
        // 站内切换
    } else {

        // 改变索引值
        boke.changeActiveIndex(mo)
        // 关闭目录
        // ( 这是为了，当是从某个笔记页面离开时，关闭侧边目录 )
        boke.closeDirectory()
        // 开启个人组件
        // （ 通过导航栏切换，无论那个页面都会显示个人组件 ）
        boke.openPerson()

        // 切换页面时，标签栏的出现逻辑
        if (mo == 0) {
            // 当在切换到首页时,开启标签
            boke.openTags()
            // 关闭大纲
            boke.closeOutline()
            // 开启个人组件
        } else {
            // 当在其他页面时，关闭文章标签
            boke.closeTags()
        }
        // 切换页面时，大纲组件的出现逻辑
        // 默认不显示大纲
        boke.closeOutline()
        // 切换到关于页面时显示大纲

        const isAboutPage = () => {
            if (no.indexOf("about") == -1) {
                return false
            } else {
                return true
            }
        }

        if (isAboutPage()) {
            boke.openOutline()


        }

        // 随后，进入对应的页面
        if (xdata.base == '/') {
            // 默认base时
            router.go(no)

        }
        // 加上base,并除去多余的/
        router.go(`${xdata.base}${no.slice(1)}`)
    }



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

    box-shadow: 2px 2px 5px #dedede,
        -2px -2px 5px #ffffff;

    position: fixed;

    z-index: 1000;

    // 毛玻璃特效
    background-color: rgba(255, 255, 255, 0.5);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);



    .xNav-left {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 60px;
        margin-left: 10%;


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

        margin-right: 5%;

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

        .xNav-theme {
            margin: 0 20px;
            height: 30px;
            width: 30px;
            border-radius: 15px;
            line-height: 35px;
            background-color: white;
            font-size: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 1px 1px 2px #dedede,
                -1px -1px 2px #ffffff;
        }
    }

}
</style>
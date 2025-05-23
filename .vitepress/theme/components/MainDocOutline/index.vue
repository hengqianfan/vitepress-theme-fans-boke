<template>
    <div class="mdo-all">



        <div class="mdo-button" @click="boke.changeOutlineInterior()">
            🧿
        </div>


        <div class="mdo-main" v-if="boke.isShowOutlineInterior">


            <div class="outline-title">
                📑 页面目录
            </div>

            <br>

            <div class="outline-two" v-for="item in page.headers">

                <a :href="withBase(toHeader(item.title))" @click="boke.isShowOutlineInterior = false">
                    {{ item.title }}
                </a>


                <div class="outline-three" v-for="item3 in item.children">
                    <a :href="withBase(toHeader(item3.title))"> &nbsp &nbsp{{ item3.title }}</a>

                    <div class="outline-four" v-for="item4 in item3.children">
                        <a :href="withBase(toHeader(item4.title))">
                            &nbsp &nbsp &nbsp &nbsp{{ item4.title }}</a>

                    </div>
                </div>
            </div>


        </div>


    </div>
</template>

<script setup>
import { withBase, useData } from 'vitepress';
import { onMounted, onUpdated, watch, ref, onBeforeUpdate } from 'vue';
import { useBokeStore } from '../../../../stores/boke';
import { useNotesStore } from '../../../../stores/notes';

const boke = useBokeStore()

const notes = useNotesStore()


const isShow = ref(true)


const { page } = useData()




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


onMounted(() => {

    boke.closePerson()

    boke.openOutlineInterior()

    if (isAbout()) {
        boke.openOutline()
        boke.closeDirectory()
    }
    // 当 页面是网站页面时 
    if (isSites()) {
        boke.closeOutline()
        boke.closeDirectory()
    }


})

// onUpdated(() => {
//     // boke.isShowOutlineInterior = true

//     if (page.value.headers.length == 0) {
//         boke.isShowOutlineInterior = false
//     } else {
//         boke.isShowOutlineInterior = true
//     }

// })









const toHeader = (mo) => {


    if (mo[1] === '.') {

        // 统一小写
        mo = mo.toLowerCase()
        // 将 空格 转化为 -
        mo = mo.replace(/\s+/g, '-')
        // 将 . 转化为 -
        mo = mo.replace(/\./g, '-')
        // 将 -- 转为 -
        mo = mo.replace(/-+/g, '-');
        // 移除中文、字母、连字符以外的所有特殊字符 
        mo = mo.replace(/[^A-Za-z0-9\u4e00-\u9fa5-]/g, '')

        return `#_${mo}`
    } else if (mo[1] === ' ') {

        // 统一小写
        mo = mo.toLowerCase()
        // 将 空格 转化为 -
        mo = mo.replace(/\s+/g, '-')
        // 将 . 转化为 -
        mo = mo.replace(/\./g, '-')
        // 将 -- 转为 -
        mo = mo.replace(/-+/g, '-');
        // 移除中文、字母、连字符以外的所有特殊字符 
        mo = mo.replace(/[^A-Za-z0-9\u4e00-\u9fa5-]/g, '')

        return `#_${mo}`

    } else {
        return `#${mo}`
    }


}
</script>

<style lang="scss" scoped>
.mdo-all {

    position: absolute;

    right: 10%;



    .mdo-button {

        font-family: '优设标题黑';
        color: #797474;


        width: 30px;
        padding: 5px 10px;
        height: 30px;


        position: absolute;

        right: 10px;

        top: 10px;



        display: flex;
        justify-content: center;
        align-items: center;


        transition: all 0.7s;
    }

    .mdo-main {

        background-color: white;
        border-radius: 20px;
        padding: 20px;
        width: 320px;
        height: auto;

        font-size: 14px;
        box-shadow: 1px 1px 2px #dedede,
            -1px -1px 2px #ffffff;
        transition: all 0.7s;

        a {
            color: #797474;
            font-family: '优设标题黑';
            transition: all 0.7s;
            text-decoration: none;
        }

        a:hover {
            transition: all 0.3s;

            color: #3d3d81;


        }




        .outline-title {


            font-family: '优设标题黑';
            color: #797474;


        }

    }









}

// .mdo-all:hover {
//     width: 320px;
//     padding: 20px;
//     height: auto;
//     font-size: 14px;
//     background-color: white;

//     a {
//         color: #797474;
//         font-family: '优设标题黑';
//         transition: all 0.7s;
//         text-decoration: none;

//     }

//     a:hover {
//         transition: all 0.3s;

//         color: #3d3d81;


//     }
// }</style>
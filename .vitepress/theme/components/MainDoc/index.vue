<template>

    <div class="vp-doc">
        <MainDocAfter />

        <Content />

        <div class="outline">

            <div class="outline-title">
                📑 页面目录
            </div>

            <br>


            <div class="outline-two" v-for="item in page.headers">
                <a :href="withBase(toHeader(item.title))"> {{ item.title }}</a>


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
import MainDocAfter from '../MainDocAfter/index.vue'
import { Content, withBase } from 'vitepress';
import { useData } from 'vitepress'
const { page } = useData()

const toHeader = (mo) => {
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
}
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

    .outline {

        background-color: transparent;
        position: fixed;
        top: 100px;
        right: 5%;
        z-index: 1000;
        border-radius: 20px;

        width: 15px;
        height: auto;

        font-size: 0px;




        box-shadow: 5px 5px 18px #dedede,
            -5px -5px 18px #ffffff;



        transition: all 0.7s;

        .outline-title {


            font-family: '优设标题黑';
            color: #797474;


        }
    }

    .outline:hover {

        width: 320px;
        padding: 20px;
        height: auto;
        font-size: 16px;
        background-color: white;


    }


    .outline:hover a {
        color: #797474;
        font-family: '优设标题黑';
        transition: all 0.7s;
        text-decoration: none;

    }

    .outline:hover a:hover {
        transition: all 0.3s;

        color: #3d3d81;


    }









}
</style>
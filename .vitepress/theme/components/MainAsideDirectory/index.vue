<template>
    <div class="mad-all">

        ⭐该组件在开发中阶段！


        <br>

        <div class="mad-title1" v-for="it in showedDirectory">

            <div class="" v-if="it.items">

                {{ it.text }}

                <div class="mad-title2" v-for="it2 in it.items">

                    <div class="" v-if="it2.items">

                        &nbsp {{ it2.text }}


                        <div class="" v-for="it3 in it2.items">&nbsp &nbsp {{ it3.text }}</div>
                    </div>


                    <div class="" v-else>
                        <a :href="withBase(toPage(it2.link))"> &nbsp {{ it2.text }}</a>
                    </div>



                </div>




            </div>




            <div class="" v-else>
                <a :href="withBase(toPage(it.link))"> {{ it.text }}</a>
            </div>


        </div>




    </div>
</template>

<script setup>

import { useData, withBase } from 'vitepress'
import { ref, onMounted, onUpdated } from 'vue'
import { useBokeStore } from '../../../../stores/boke'
import { useNotesStore } from '../../../../stores/notes'
const boke = useBokeStore()
const notes = useNotesStore()
const { page } = useData()

notes.updateDirectory(page.value.relativePath || "")

const showedDirectory = notes.NowDirectory

onMounted(() => {
    // 修复BUG：在刷新页面时，让目录数据不丢失！
    // 之前实现逻辑是通过 笔记聚合页面跳转时 自动更新页面
    // 但有时可能不通过 笔记聚合页面跳转 比如 载入后刷新和 从其他页面中的链接跳转时
    // 获取当前文章的路径，然后更新目录
    notes.updateDirectory(page.value.relativePath || "")
    showedDirectory.value = notes.NowDirectory
    // NowDirectory.value = notes.NowDirectory
    // window.location.reload();

})




const toPage = (mo) => {

    return mo.split('.m')[0]

}




</script>

<style lang="scss" scoped>
@use './dark.scss';

.mad-all {

    width: 280px;
    height: 800px;
    padding: 30px;
    background-color: white;

    box-shadow: 2px 2px 8px #dedede,
        -2px -2px 8px #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    // background-color: rebeccapurple;

    .mad-title1 {
        // background-color: rebeccapurple;

        margin-top: 10px;
        font-size: 15px;
        color: rgb(30, 30, 30);

        .mad-title2 {
            font-size: 12px;
            color: rgb(120, 120, 120);

        }
    }

}
</style>
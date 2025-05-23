<template>
    <div class="mad-all">

        该组处在开发中阶段！


        <br>

        <div class="mad-title1" v-for="it in notes.NowDirectory">

            <div class="" v-if="it.items">




                {{ it.text }}






                <div class="mad-title2" v-for="it2 in it.items">

                    <div class="" v-if="it2.items">

                        &nbsp &nbsp {{ it2.text }}



                        <div class="" v-for="it3 in it2.items">&nbsp &nbsp &nbsp &nbsp {{ it3.text }}</div>
                    </div>


                    <div class="" v-else>
                        <a :href="withBase(toPage(it2.link))"> &nbsp &nbsp {{ it2.text }}</a>
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
import allDirectory from '../../../../data/directory.json'

const boke = useBokeStore()
const notes = useNotesStore()

const { page } = useData()

let nowDirectory = ref('')

const updateDirectory = () => {
    nowDirectory.value = page.value.relativePath
}

// 判断是否属于文章页面
const isPage = () => {
    // 获取页面路径
    const path = page.value.relativePath
    // 判断路径中是否含有 pages
    const res = path.includes('pages/')
    // 返回结果
    return res

}

onMounted(() => {
    updateDirectory()

}
)

// 组件更新时
onUpdated(() => {
    // 更新目录树（侧边栏）
    updateDirectory()
    // 如果跳转到 pages 页面 ，关闭目录树，因为只有 笔记 才有目录树
    if (isPage()) {
        boke.closeDirectory()
    }


})

const toPage = (mo) => {




    return mo.split('.m')[0]

}

const changeCollapsed = (mo) => {
    let res = mo
}




</script>

<style lang="scss" scoped>
.mad-all {

    width: 260px;
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
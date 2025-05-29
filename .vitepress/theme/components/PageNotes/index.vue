<template>
    <div class="pn-all">

        <div class="pn-notes-card" v-for="it in notes.AllNotesKinds">

            <div class="pn-notes-card-title"> {{ it }}</div>

            <div class="pn-notes-card-notes">



                <div class="pn-notes-card-notes-note" v-for="it2 in notes.getNotesData(it)">

                    <!-- <img :src="withBase(it2.cover)" class="pn-notes-card-notes-note-cover"> -->

                    <!-- 当进入笔记页面后，关闭侧边栏的多余组件 -->
                    <!-- <a :href="withBase(it2.link)" class="pn-notes-card-notes-note-name"
                        @click="notes.updateDirectory(it2.link), boke.openDirectory()">{{ it2.name }}</a> -->



                    <img :src="withBase(it2.icon)" class="pn-notes-card-notes-note-icon">

                    <div class="pn-notes-card-notes-note-title">
                        <!-- 当进入笔记页面后，关闭侧边栏的多余组件 -->
                        <a :href="withBase(it2.link)" @click="notes.updateDirectory(it2.link), boke.openDirectory()">
                            {{
                                it2.name }}</a>

                    </div>
                </div>





            </div>

        </div>


    </div>
</template>

<script setup>
import { useData, withBase } from 'vitepress'
import { useNotesStore } from '../../../../stores/notes'
import { onMounted } from 'vue';
import { useBokeStore } from '../../../../stores/boke'


const notes = useNotesStore()
const boke = useBokeStore()


onMounted(() => {

    boke.closeTags
    boke.closeDocAfter()
    boke.closeDirectory()
    boke.closeOutline()
    boke.openPerson()

})


const { theme, page } = useData()





</script>

<style lang="scss" scoped>
@use './app.scss';

.pn-all {
    padding-bottom: 100px;
    height: 90vh;
    overflow-y: scroll;

    .pn-notes-card {
        .pn-notes-card-title {
            width: 100px;
            height: 40px;
            line-height: 40px;
            font-family: "优设标题黑";
            border-bottom: 2px dashed rgb(114, 114, 187);
            text-align: center;
            margin-bottom: 20px;

            // background-color: rebeccapurple;
        }

        .pn-notes-card-notes {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 20px;

            .pn-notes-card-notes-note {
                margin: 15px;
                width: 256px;
                height: 60px;
                // background-color: red;
                box-shadow: 5px 5px 10px #dedede,
                    -5px -5px 10px #ffffff;
                border-radius: 10px;
                display: flex;
                align-items: center;
                padding-left: 15px;
                background-color: #ffffff;
                // opacity: 0.5;

                transition: all 0.8s;

                .pn-notes-card-notes-note-icon {
                    width: 30px;
                    height: 30px;
                    // background-color: #dedede;
                    border-radius: 6px;
                    box-shadow: 2px 2px 5px #dedede,
                        -2px -2px 5px #ffffff;

                }

                .pn-notes-card-notes-note-title {
                    // width: 180px;
                    margin-left: 15px;
                    height: 30px;
                    line-height: 30px;
                    // background-color: #dedede;
                    padding: 0 20px;
                    border-radius: 5px;
                    font-family: '优设标题黑';
                    font-size: 18px;
                    color: rgb(80, 80, 80);
                    transition: all 1s;

                }

                .pn-notes-card-notes-note-title:hover {
                    background: linear-gradient(45deg, #1d7e76, #6eb0ca, #5464b3, #3a2d8a, #432768, #b0339d);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    transition: background 0.5s;
                    font-weight: 800;


                }


            }


        }
    }
}
</style>
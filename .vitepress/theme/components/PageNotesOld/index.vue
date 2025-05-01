<template>
    <div class="pn-all">

        <div class="pn-notes-card" v-for="it in notes.AllNotesKinds">

            <div class="pn-notes-card-title"> {{ it }}</div>

            <div class="pn-notes-card-notes">



                <div class="pn-notes-card-notes-note" v-for="it2 in notes.getNotesData(it)">

                    <img :src="withBase(it2.cover)" class="pn-notes-card-notes-note-cover">

                    <!-- 当进入笔记页面后，关闭侧边栏的多余组件 -->
                    <a :href="withBase(it2.link)" class="pn-notes-card-notes-note-name"
                        @click="notes.updateDirectory(it2.link), boke.openDirectory()">{{ it2.name }}</a>


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

    boke.openPerson()

})


const { theme, page } = useData()





</script>

<style lang="scss" scoped>
.pn-all {
    .pn-notes-card {
        .pn-notes-card-title {
            width: 100px;
            height: 40px;
            line-height: 40px;
            font-family: "优设标题黑";
            border-bottom: 2px dashed rgb(114, 114, 187);
            text-align: center;

            // background-color: rebeccapurple;
        }

        .pn-notes-card-notes {
            display: flex;
            flex-wrap: wrap;

            .pn-notes-card-notes-note {
                margin: 15px;
                width: 256px;
                height: 174px;
                // background-color: red;
                box-shadow: 5px 5px 18px #dedede,
                    -5px -5px 18px #ffffff;
                border-radius: 10px;

                .pn-notes-card-notes-note-cover {
                    width: 256px;
                    height: 144px;
                }

                .pn-notes-card-notes-note-name {
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    background-color: white !important;
                    font-family: "优设标题黑";
                    display: flex;
                    justify-content: center;

                }
            }
        }
    }
}
</style>
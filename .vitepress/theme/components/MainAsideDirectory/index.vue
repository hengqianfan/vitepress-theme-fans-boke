<template>
    <div class="mad-all">

        <div class="mad-title1" v-for="it in notes.NowDirectory">

            <div class="" v-if="it.items">




                {{ it.text }}
                <!-- <i @click="changeCollapsed()">+</i> -->



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
// import { useBokeStore } from '../../../../stores/boke'
import { useNotesStore } from '../../../../stores/notes'
import allDirectory from '../../../../data/directory.json'

const notes = useNotesStore()
const { page } = useData()

let nowDirectory = ref('')

const updateDirectory = () => {
    nowDirectory.value = page.value.relativePath
}

onMounted(() => {
    updateDirectory()



    // if(page.value.relativePath)
    // 
}
)

onUpdated(() => {
    updateDirectory()



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
    // margin-top: 30px;
    width: 260px;
    height: 800px;
    padding: 20px;
    background-color: white;

    box-shadow: 5px 5px 18px #dedede,
        -5px -5px 18px #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    .mad-title1 {
        // background-color: rebeccapurple;
        // width: 200px;
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
<template>
    <div class="mas-all">
        <div class="mas-engine" @click="isShowEngineMenu = true">
            <i :class="getIconFontClassName(search.engineList[search.nowEngineIndex].name)"></i>
        </div>
        <input type="text" class="mas-keyword" v-model="keyword" @keyup.enter="toSearch()" @blur="addKey()"
            @focus="deleteKey()">


        <div class="mas-engine-menu" v-if="isShowEngineMenu" @mouseleave="reback()">
            <div v-for="(it, index) in search.engineList" class="mas-engine-menu-icon" @click="changEngine(index, it)">
                <i :class="getIconFontClassName(search.engineList[index].name)"></i>
            </div>
        </div>

    </div>


</template>

<script setup>
import { ref } from 'vue'
import { useSearchStore } from '../../../../stores/search'
import { getIconFontClassName } from '../../../tools/getURL'
import xdata from '../../../../data/main.json'
const search = useSearchStore()
const keyword = ref(xdata.SearchKeyword)
const isShowEngineMenu = ref(false)


// 聚焦输入时，删除默认的词
const deleteKey = () => {

    if (keyword.value === xdata.SearchKeyword) {
        keyword.value = ''
    }
    return
}

// 失去焦点时，回复默认词汇
const addKey = () => {
    if (keyword.value == '') {
        keyword.value = xdata.SearchKeyword
    }
    if (keyword.value == ' ') {
        keyword.value = xdata.SearchKeyword
    }

}

const reback = () => {
    //暂时无意义，这个函数需解决鼠标移出引擎选择菜单后，自动关闭选择菜单的问题
    let i = 0

}

const changEngine = (mo, no) => {
    isShowEngineMenu.value = !isShowEngineMenu.value
    search.nowEngineIndex = mo
    search.changeNowBaseurl(no.baseurl)
}


const toSearch = () => {
    if (keyword.value == '') {
        alert('请输入')
    } else {
        window.open(`${search.nowBaseurl}` + `${keyword.value}`, '_blank')
        keyword.value = ''
    }
}



</script>

<style lang="scss" scoped>
@use './app.scss';

.mas-all {
    margin: 0px 100px;
    // margin-left: 20px;
    width: 160px;
    padding: 10px;
    // background-color: white;
    box-shadow: 2px 2px 8px #dedede inset,
        -2px -2px 8px #ffffff inset;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .mas-engine {
        width: 20px;
        height: 20px;
        border-radius: 10px;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;

        box-shadow: 1px 1px 3px #dedede,
            -1px -1px 3px #f5f0f0;
    }

    .mas-keyword {

        width: 80px;
        background-color: #f1f0f0;
        font-size: 14px;
        padding: 0 10px;
        border-radius: 5px;
        box-shadow: 1px 1px 3px #dedede inset,
            -1px -1px 3px #f5f0f0 inset;
        display: flex;
        color: #4b668a;
        // color: #b66920;
        justify-content: center;
        align-items: center;
        text-align: center;
        transition: all 1s;
        font-family: '站酷高端黑';

    }



    .mas-engine-menu {
        position: absolute;
        padding: 0px 5px;
        display: flex;
        height: 40px;
        width: 410px;
        background-color: white;
        z-index: 100;
        border-radius: 10px;

        box-shadow: 1px 1px 3px #dedede,
            -1px -1px 3px #f5f0f0;


        .mas-engine-menu-icon {
            width: 30px;
            height: 30px;
            margin: 10px;
        }

    }

}
</style>
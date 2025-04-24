<!-- 这个是带放大功能的组件，但是代码未优化 -->
<template>
    <div class="zm-all">
        <div v-html="svgRef" class="zm-svg"></div>
        <div class="zm-button" @click.self="bigSvg(e)">
        </div>
    </div>
</template>
<script setup ts>
import { ref, onMounted } from 'vue'
import { render } from '../../../tools/myMermaid'
const props = defineProps({
    id: String,
    code: String,
})
onMounted(async () => {
    svgRef.value = await render(props.id, decodeURIComponent(props.code))
})
const svgRef = ref('')
const bigSvg = (e) => {
    // 获取 svg 的元素
    let item = document.getElementById(`${props.id}`)
    // 找到它的父级，因为直接作用在它的上面样式不生效
    let itemP = item.parentNode
    // 判断父级中是否已存在
    let hasBig = ref(itemP.classList.contains('big'))
    // 如果已经存在 放大 那么点击事件会回复组件原本大小
    if (hasBig.value == true) {
        // 允许滚动
        document.body.style.overflow = 'visible'
        itemP.classList.remove('big')
        // 如果不存在 放大 那么点击事件会放大展示组件
    } else if (hasBig.value == false) {
        // 放大时，静止页面滚动
        document.body.style.overflow = 'hidden'
        itemP.classList.add('big')
    }
}
</script>
<style lang="scss" scoped>
.zm-all {
    padding: 10px;
    border: 2px dashed rebeccapurple;
    position: relative;

    .zm-svg {
        transition: 1s ease;
    }

    .big {
        transition: 1s ease;
        position: fixed;
        right: 10px;
        top: 10px;
        min-width: 80%;
        min-height: 80vh;
        padding: 20px;
        // background-color: blue;
        background-color: #e5cffb;
        z-index: 1000;
        border-radius: 10px;
        border: 2px dashed black;

        .zm-button {
            right: 20px;
            top: 20px;
            position: fixed;
            background-color: red;
            z-index: 1001;
        }
    }

    .zm-button {
        right: 10px;
        // left: 10px;
        top: 10px;
        // bottom: 10px;
        position: absolute;
        min-width: 16px;
        min-height: 16px;
        line-height: 16px;
        text-align: center;
        background-color: #67319c;
        z-index: 1001;
        color: white;
        border-radius: 8px;
    }
}
</style>
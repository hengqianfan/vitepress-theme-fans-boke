<template>
    <div class="myvideo">
        <ClientOnly>
            <iframe :src="xSrc + '&autoplay=0'" v-resize="{ log: true }" frameborder="no" scrolling="no" seamless=""
                allowfullscreen="allowfullscreen" class="myiframe"></iframe>
        </ClientOnly>
    </div>
</template>




<script setup>
import { onMounted } from 'vue';

const props = defineProps(['xSrc'])

// 0.5625 --> 9:16
// 0.75 --> 3:4 
// 视频屏幕比例
const ratio = 0.5625

function changeVideoIframe() {
    // 直接作用于 <iframe> 会存在问题
    // 所以，只能将改变作用于外层div, 然后内容元素占满它来实现自适应
    const video = document.querySelectorAll('.myvideo');
    const width = document.querySelectorAll('.myvideo')[0].scrollWidth;

    for (let i = 0; i < video.length; i++) {
        video[i].style.height = width * ratio + 'px'
    }
}

onMounted(() => {

    changeVideoIframe()
    window.onresize = function () { changeVideoIframe() }

})

</script>

<style>
.myvideo {
    padding: 5px;
    /* border: 2px dashed blue; */
    display: flex;
    justify-content: center;
}

.myiframe {
    min-width: 75%;
    max-height: 520px;
    padding: 10px;
    border-radius: 20px;
    background-color: white;
    box-shadow: 5px 5px 18px #dedede,
        -5px -5px 18px #ffffff;
}
</style>

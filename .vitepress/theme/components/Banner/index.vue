<template>
    <div class="Banner-all" id="banner-text">
        <!-- 学无止境，人无完人 -->
    </div>

</template>

<script setup>

// const typeWriter = (text, element, speed = 100) => {
//     let i = 0;
//     element.innerHTML = ''; // 清空容器
//     const timer = setInterval(() => element.innerHTML += text[i++] + (i === text.length ? '' : ''), speed);
//     return () => clearInterval(timer); // 返回清除函数
// };

// const target = document.querySelector('#banner-text');
// const stop = typeWriter('这是一句逐字显示的文字', target, 80);
</script>

<style lang="scss" scoped>
@use './app.scss';

.Banner-all {
    // background-color: rebeccapurple;
    height: 50vh;
    width: 100%;
    background-image: url('/cover/pexels25052002.png');
    // 宽度拉满，高度自动
    background-size: 100% auto;
    background-repeat: no-repeat;


    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    flex-wrap: wrap;
    color: white;

    font-family: '标小智龙珠体';


}
</style>
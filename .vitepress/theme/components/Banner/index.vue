<template>
    <div class="Banner-all" id="banner-text">
        <!-- 学无止境，人无完人 -->

    </div>




</template>

<script setup>

</script>

<style lang="scss" scoped>
@use './app.scss';
@use './dark.scss';

.Banner-all {
    // background-color: rebeccapurple;
    height: 55vh;
    width: 100%;
    // background-image: url('/cover/wallhaven25052701.png');
    // background-image: url('/cover/wallhaven25052702.png');
    // background-image: url('/cover/wallhaven25052703.png');
    // background-image: url('/cover/wallhaven25052704.png');


    // background-image: url('/cover/pexels25052001.png');

    background-image: url('/cover/pexels25052002.png');

    // 宽度拉满，高度自动
    background-size: 100% auto;
    // background-size: cover;
    background-repeat: no-repeat;
    // background-position: center;


    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    flex-wrap: wrap;
    color: white;

    font-family: '标小智龙珠体';

}
</style>
<script setup>
import Giscus from '@giscus/vue';
// 如果报错，把括号去掉
// import Giscus  from '@giscus/vue';
</script>

<template>
    <div class="comment-container">
        <ClientOnly>
            <!-- 根据实际生成的数据填写/ -->
            <!-- 组件中没有 data 的前缀，但是对应之前生成的参数 -->
            <Giscus repo="hengqianfan/vitepress-theme-fans-boke" repoId="R_kgDOObG1jw" category="General" strict="1"
                categoryId="DIC_kwDOObG1j84CprE2" mapping="pathname" input-position="top" reactionsEnabled="1"
                emitMetadata="1" theme="preferred_color_scheme" />
        </ClientOnly>
    </div>
</template>


<style lang="scss" scoped>
.comment-container {
    margin: 50px 0;
}
</style>
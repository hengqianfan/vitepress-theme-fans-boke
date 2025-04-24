<script setup>
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
const { page } = useData()



</script>

<template>
    <div class="custom-toc">
        <h3>本页目录</h3>
        {{ page.headers }}
        <!-- <DefaultTheme.VPAsideOutline :items="page.headers" /> -->
    </div>
</template>

<style scoped>
.custom-toc {
    margin: 20px 0;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 8px;
}
</style>
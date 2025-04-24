<template>

    <div class="mda-all" v-if="boke.isShowDocAfter">

        <div class="xdoc-after-time">{{ formatDate(frontmatter.id) }}</div>
        <div class="xdoc-after-tags">

            <div class="xdoc-after-tag" v-for="tag in frontmatter.tags">{{ tag }}</div>

        </div>


    </div>
</template>

<script setup>
import { useData } from 'vitepress'
import { formatDate } from '../../../tools/formatDate'
import { useBokeStore } from '../../../../stores/boke'
const { page, frontmatter } = useData()

const boke = useBokeStore()
</script>

<style lang="scss" scoped>
.mda-all {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    border: 0;
    border-bottom: 2px dashed #e2e6ec;

    .xdoc-after-time {
        margin-left: 20px;

        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        height: 20px;
        color: white;
        background-color: black;
        font-size: 10px;
        border-radius: 5px;
        margin-right: 20px;
        box-shadow: 1px 1px 2px #dedede,
            -1px -1px 2px #f5f0f0;
    }

    .xdoc-after-tags {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .xdoc-after-tag {
            margin: 8px;
            min-width: 50px;
            height: 20px;
            line-height: 20px;
            background-color: #c8afe2;
            background-color: #a1c4f1;

            font-size: 12px;
            text-align: center;
            border-radius: 5px;
            color: white;
            padding: 0 5px;
        }
    }
}
</style>
<template>
    <div class="mat-all" v-if="boke.isShowTags">
        <div class="mat-tag" v-for="it in posts.tags" @click="posts.changeNowTag(it[0])">
            <div class="mat-tag-name"> {{ it[0] }}</div>
            <div class="mat-tag-num">{{ it[1] }}</div>


        </div>
    </div>

</template>

<script setup>
import { usePostsStore } from '../../../../stores/posts'
import { useBokeStore } from '../../../../stores/boke'
const posts = usePostsStore()
const boke = useBokeStore()
</script>

<style lang="scss" scoped>
.mat-all {
    margin-top: 30px;
    width: 260px;
    height: 300px;
    padding: 20px;
    background-color: white;

    box-shadow: 5px 5px 18px #dedede,
        -5px -5px 18px #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: scroll;

    .mat-tag {
        min-width: 50px;
        height: 26px;
        line-height: 26px;
        text-align: center;
        padding: 10px;
        background-color: #ebeef07e;
        margin: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 13px;
        font-family: '优设标题黑';
        border-radius: 8px;
        // opacity: 0.6;

        color: #3071c7;

        box-shadow: 2px 2px 3px #dedede,
            -2px -2px 3px #ffffff;

        position: relative;

        .mat-tag-num {
            margin-left: 5px;
            color: #706b6b;

            font-size: 10px;

        }

        // color: rgb(72, 138, 109);
    }
}
</style>
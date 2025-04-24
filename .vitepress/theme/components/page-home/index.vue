<template>
    <div class="articlesCards">

        <div class="articlesCard" v-for="item in posts.showedPosts" @click="clearNavItemIndex()">
            <div class="articlesCard-cover">
                <img :src="withBase(getImgSrc(item.frontmatter.cover))" alt="" class="articlesCard-cover-img">
            </div>


            <a class="articlesCard-title" :href="withBase(item.url)" @click="boke.closeTags()">
                {{ getPostName(item.url) }}
            </a>

            <div class="articlesCard-info">
                <div class="articlesCard-time">{{ formatDate(item.frontmatter.id) }}</div>
                <div class="articlesCard-tags">
                    <div class="articlesCard-tag" v-for="tag in item.frontmatter.tags.slice(0, 3)">{{ tag }}</div>
                </div>
            </div>
            <!-- <div>{{ item }}</div> -->

        </div>
    </div>
</template>

<script setup>
import { withBase } from 'vitepress';
import { onMounted } from 'vue';
import { getPostName } from '../../../tools/getPostName'
import { formatDate } from '../../../tools/formatDate'
import { useBokeStore } from '../../../../stores/boke'
import { usePostsStore } from '../../../../stores/posts'
const posts = usePostsStore()

onMounted(() => {
    boke.openTags()
    boke.closeDocAfter()
})
const boke = useBokeStore()

const getImgSrc = (mo) => {
    if (mo) {
        return `${mo}`
    }
    return '/cover/momo.png'

}

// 防止从主页进入文章页后，导航栏的主页按钮依旧保持选中的状态
const clearNavItemIndex = () => {
    boke.nowActiveNavItem = 100
}
</script>

<style lang="scss" scoped>
.articlesCards {
    display: flex;
    flex-wrap: wrap;

    .articlesCard {
        margin: 10px;
        width: 320px;
        min-height: 200px;

        border-radius: 15px;
        background-color: white;

        padding-bottom: 10px;

        box-shadow: 1px 1px 2px #dedede,
            -1px -1px 2px #f5f0f0;

        .articlesCard-cover {
            width: 100%;
            height: 200px;
            border-radius: 15px 15px 0 0;
            transition: all 0.6s;


            .articlesCard-cover-img {
                width: 100%;
                height: 100%;
                border-radius: 15px 15px 0 0;
            }

        }












        .articlesCard-title {
            width: 100%;
            height: 50px;
            line-height: 50px;
            text-align: center;
            font-size: 20px;
            background-color: white;
            font-family: "优设标题黑";
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .articlesCard-title:hover {
            background: linear-gradient(45deg, #ef9393, #7e7e21, #ffff00, #b74b4b, #72a472, #646493);
            background: linear-gradient(45deg, #1d7e76, #6eb0ca, #5464b3, #3a2d8a, #432768, #b0339d);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            transition: background 0.5s;
        }

        .articlesCard-info {
            display: flex;
            height: 30px;
            align-items: center;
            justify-content: space-between;
            background-color: white;

            .articlesCard-time {
                margin-left: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 5px;
                height: 20px;
                color: #828e98;
                // background-color: #afbdc8;
                font-size: 10px;
                border-radius: 5px;
                margin-right: 20px;

            }

            .articlesCard-tags {
                display: flex;
                margin-right: 10px;

                .articlesCard-tag {
                    margin: 0 5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 5px;
                    height: 20px;
                    line-height: 20px;
                    // font-family: '楷体';
                    color: #7f8488;
                    color: #7d7e86;
                    // color: black;
                    font-weight: 400;
                    background-color: #e0e4e6;
                    font-size: 10px;
                    border-radius: 5px;
                }
            }
        }
    }

    .articlesCard:hover {
        .articlesCard-cover {
            overflow: hidden;
            transition: all 0.6s;


            .articlesCard-cover-img {
                transform: scale(1.3);
                transition: all 0.6s;


            }
        }
    }
}
</style>
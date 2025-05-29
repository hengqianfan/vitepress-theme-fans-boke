<template>
    <div class="ph-siteinfo">

        <div class="ph-siteinfo-theme">
            <img src="https://img.shields.io/badge/主题-4285F4" alt="">

            <div class="ph-siteinfo-theme-name">
                <a href="https://hengqianfan.github.io/vitepress-theme-fans-instructions/" target="_blank">Boke</a>
            </div>
        </div>


        <div class="ph-siteinfo-powered">
            Powered |
            <div class="">VitePress</div>
        </div>


        <div class="ph-siteinfo-icp">

            {{ bokeMain.IPC }}
        </div>


    </div>
</template>

<script setup>
import bokeMain from '../../../../data/main.json'
</script>

<style lang="scss" scoped>
.ph-siteinfo {

    margin: 20px auto;

    padding-top: 20px !important;
    min-height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    // 在网站底部留白
    // margin-bottom: 150px;
    border-top: 1px solid rgb(212, 203, 203);




    .ph-siteinfo-powered {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 10px;

        div {
            color: #1d4bad;
            font-family: '优设标题黑';
            margin-left: 5px;
        }

        div:hover {

            color: rgb(216, 213, 10) !important;

        }


    }

    .ph-siteinfo-theme {

        display: flex;
        justify-content: space-around;
        align-items: center;
        // font-size: 20px;

        div {
            font-family: '优设标题黑';
            margin-left: 5px;
        }

        div:hover {
            background: linear-gradient(45deg, #1d7e76, #6eb0ca, #5464b3, #3a2d8a, #432768, #b0339d);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            transition: background 0.5s;
            font-weight: 800;
        }




    }

    .ph-siteinfo-icp {
        font-size: 12px;
        color: rgb(112, 106, 106);


    }

    .ph-siteinfo-icp:hover {

        color: rgb(23, 22, 109);

    }


}
</style>
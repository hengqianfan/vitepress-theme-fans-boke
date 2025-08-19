<template>
    <div class="xSites-all">
        <div class="xSites-nav">
            <div class="xSites-nav-item" v-for="item in sites.sites" @click="sites.changeNowSiteKind(item.value)">
                {{ item.value }}
            </div>
        </div>

        <div class="xSites-content">

            <div class="sites-card" v-for="it in sites.showSites">
                <div class="sites-card-title">{{ it.value }}</div>
                <div class="sites">
                    <div class="site" v-for="it2 in it.children">
                        <div class="site-info">
                            <img :src="withBase(getIconUrl(it2.icon))" alt="" class="site-icon">

                            <a :href="it2.link" target="_blank" rel="noopener noreferrer" class="site-title"> {{
                                it2.value }}</a>
                        </div>
                        <div class="site-intro">{{ it2.intro }}</div>
                    </div>
                </div>
            </div>




        </div>
    </div>
</template>

<script setup>
import { withBase } from 'vitepress'
import { useSitesStore } from '../../../../stores/sites'
import { useBokeStore } from '../../../../stores/boke'
import { getIconUrl } from '../../../tools/getURL'
import { onMounted } from 'vue'

const sites = useSitesStore()

const boke = useBokeStore()


onMounted(() => {
    boke.closeDirectory()
    boke.closeTags()
    boke.closeOutline()
    boke.openPerson()

})

</script>

<style lang="scss" scoped>
@use './app.scss';
@use './dark.scss';

.xSites-all {
    background-color: transparent;
    width: 95%;
    height: 88vh;
    margin: 0 auto;


    .xSites-nav {

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 10px;
        height: 60px;
        background-color: #ffffff;


        box-shadow: 2px 2px 4px #dedede,
            -2px -2px 4px #f4f2f2;




        .xSites-nav-item {
            width: 100px;
            height: 30px;
            line-height: 30px;
            margin-left: 15px;
            background-color: white;
            text-align: center;
            border-radius: 5px;
            box-shadow: 2px 2px 3px #dedede,
                -2px -2px 3px #ffffff;

            box-shadow: 2px 2px 3px #dedede,
                -2px -2px 3px #f7f3f3;
            font-family: '优设标题黑';


        }

        .xSites-nav-item:hover {

            background: linear-gradient(45deg, #1d7e76, #6eb0ca, #5464b3, #3a2d8a, #432768, #b0339d);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            transition: background 0.5s;
        }
    }

    .xSites-content {
        margin-top: 20px;
        height: 80vh;
        width: 100%;
        background-color: #ffffff;
        box-shadow: 5px 5px 18px #dedede,
            -5px -5px 18px #ffffff;
        display: flex;

        flex-direction: column;
        overflow-y: scroll;
        padding: 30px;

        .sites-card {
            margin-top: 20px;
            width: 100%;

            display: flex;
            flex-direction: column;


            .sites-card-title {

                min-width: 80px;
                max-width: 120px;
                font-family: '剑豪体';
                border-bottom: 1px dashed rgb(39, 41, 131);
                padding-bottom: 5px;
                margin-bottom: 20px;
                text-align: center;

                // background: linear-gradient(45deg, #ef9393, #7e7e21, #ffff00, #b74b4b, #72a472, #646493);
                // background: linear-gradient(45deg, #1d7e76, #6eb0ca, #5464b3, #3a2d8a, #432768, #b0339d);
                // -webkit-background-clip: text;
                // background-clip: text;
                // color: transparent;
                // transition: background 0.5s;

            }

            .sites {
                display: flex;
                flex-direction: row;
                width: 100%;
                flex-wrap: wrap;


                .site {

                    margin: 10px;
                    width: 225px;
                    height: 100px;
                    border: 2px white dotted;

                    border-radius: 5px;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    padding: 10px 20px;


                    box-shadow: 2px 2px 10px #dedede,
                        -2px -2px 10px #f8f8f8;

                    .site-info {
                        display: flex;
                        flex-direction: row;

                        .site-icon {

                            width: 40px;
                            height: 40px;
                            background-color: white;
                            border-radius: 5px;
                            padding: 2px;
                            box-shadow: 2px 2px 3px #dedede,
                                -2px -2px 3px #f7f3f3;
                        }

                        .site-title {
                            margin-left: 20px;
                            height: 40px;
                            line-height: 40px;
                            font-size: 15px;
                            font-weight: 600;
                            font-family: 'zqk英文';

                        }

                    }

                    .site-intro {
                        margin-top: 5px;
                        height: 30px;
                        color: rgb(148, 143, 143);
                        font-size: 12px;
                        line-height: 15px;
                        display: flex;
                        align-items: center;
                    }
                }

                .site:hover {

                    border: 2px rgb(109, 188, 219) dotted;
                    background-color: white;

                    transition: all 0.6s linear;

                    box-shadow: none;

                    background-image: none;



                    .site-info {

                        transition: all 0.6s linear;

                        .site-icon {
                            width: 40px;
                            height: 40px;
                            background-color: white;
                            border-radius: 5px;
                            padding: 2px;
                            transition: all 0.6s linear;

                        }

                        .site-title {
                            color: rgb(136, 166, 226);

                            transition: all 0.6s linear;


                        }

                    }

                    .site-intro {
                        color: rgb(86, 172, 230);

                        transition: all 0.6s linear;


                    }
                }


            }
        }


    }
}
</style>
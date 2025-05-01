import { defineStore } from 'pinia'
import { sites_data as data } from '../data/sites'
import { ref } from 'vue'

const showSites = ref(data[0].children)

const nowSiteKind = ref(data[0].value)

const getSites = (kind) => {

    let res = data.filter((item, index) => item.value == kind)
    // 提取数据
    return res[0].children
}




export const useSitesStore = defineStore('sites', {
    state: () => ({
        sites: data,
        showSites: showSites,
        nowSiteKind: data[0].value,

    }),
    actions: {
        changeNowSiteKind(mo) {
            // 改变
            this.nowSiteKind = mo
            nowSiteKind.value = mo
            this.showSites = getSites(mo)

        }


    }
})
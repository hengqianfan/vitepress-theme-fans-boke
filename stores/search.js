import { defineStore } from 'pinia'
import xdata from '../data/main.json'

export const useSearchStore = defineStore('search', {
    state: () => ({
        engineList: xdata.SearchEngineList,
        nowEngineIndex: 0,
        nowBaseurl: xdata.SearchEngineList[0].baseurl
    }),
    actions: {
        changeNowEngineIndex(mo) {
            this.nowEngineIndex = mo
        },
        changeNowBaseurl(mo) {
            this.nowBaseurl = mo
        }

    }
})
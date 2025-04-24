import { defineStore } from 'pinia'


export const useBokeStore = defineStore('boke', {
    state: () => ({ nowActiveNavItem: 0, isShowTags: true, isShowDocAfter: true }),
    actions: {
        changeActiveIndex(mo) {
            this.nowActiveNavItem = mo
        },

        closeTags(momo) {
            this.isShowTags = false
        },

        openTags() {
            this.isShowTags = true
        },

        closeDocAfter() {
            this.isShowDocAfter = false
        },

        openDocAfter() {
            this.isShowDocAfter = true
        }

    }
})
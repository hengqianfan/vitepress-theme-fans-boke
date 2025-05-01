import { defineStore } from 'pinia'




export const useBokeStore = defineStore('boke', {
    state: () => (
        {
            nowActiveNavItem: 0,
            isShowTags: false,
            isShowDocAfter: true,
            isShowOutline: false,
            isShowPerson: true,
            isShowDirectory: false,
            isShowClock: false
        }),
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
        },
        closePerson() {
            this.isShowPerson = false
        },
        openPerson() {
            this.isShowPerson = true

        },
        openDirectory() {
            this.isShowDirectory = true

        },

        closeDirectory() {
            this.isShowDirectory = false

        },
        openOutline() {
            this.isShowOutline = true
        },

        closeOutline() {
            this.isShowOutline = false

        },

        closeClock() {
            this.isShowClock = false
        },
        openClock() {
            this.isShowClock = true

        }


    }
})
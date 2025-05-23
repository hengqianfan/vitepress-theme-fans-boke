import { defineStore } from 'pinia'




export const useBokeStore = defineStore('boke', {
    state: () => (
        {
            nowActiveNavItem: 0,
            isShowTags: false,
            isShowDocAfter: true,
            isShowOutline: false,
            isShowOutlineInterior: true,
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
        openOutlineInterior() {
            this.isShowOutlineInterior = true
        },

        closeOutlineInterior() {
            this.isShowOutlineInterior = false

        },

        changeOutlineInterior() {
            this.isShowOutlineInterior = !this.isShowOutlineInterior
        },


        closeClock() {
            this.isShowClock = false
        },
        openClock() {
            this.isShowClock = true

        }
        // initPageLayout(mo) {
        //     // 当是首页时
        //     if (mo === '/') {
        //         this.isShowTags = true

        //         // 当是关于页时
        //     } else if (mo === '/pages/about') {
        //         this.isShowOutline = true
        //     }
        //     return mo

        // }


    }
})
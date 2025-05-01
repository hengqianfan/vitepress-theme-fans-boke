import { defineStore } from 'pinia'
import notesList from '../data/notesList.json'
import allDirectory from '../data/directory.json'
import { ref } from 'vue'






const getAllNotesKinds = () => {
    let res = notesList.map(it => it.kind)
    res = [...new Set(res)]
    return res
}


const sortData = (mo) => {

    return notesList.filter(obj => obj.kind === mo);

}

// 判断文件在那个文件夹下
const isDirectory = (mo = []) => {

    let DirectoryGroup = Object.keys(allDirectory)

    let now = ref('')

    for (let i = 0; i < DirectoryGroup.length; i++) {


        let res = mo.includes(DirectoryGroup[i].slice(1))

        if (res) {
            now.value = DirectoryGroup[i]
        }
    }

    return now
}


const setDirectory = (mo) => {

    return allDirectory[isDirectory(mo).value]

}


export const useNotesStore = defineStore('notes', {
    state: () => ({
        AllNotesKinds: getAllNotesKinds(),
        NowDirectoryName: isDirectory([]),
        NowDirectory: [],
        // DirectoryGroup: [],


    }),
    actions: {
        getNotesData(mo) {
            return sortData(mo)
        },

        updateDirectory(mo) {

            if (mo == '') {
                return
            }
            this.NowDirectoryName = isDirectory(mo)
            this.NowDirectory = setDirectory(mo)




        }
    }
})
// 导入处理路径的node模块
import path from 'node:path'
// 导入处理文件的node模块
import fs from 'node:fs'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
/**
 * 项目的根目录
 */
const root = __dirname.split('.vitepress')[0]

/**
 * 侧边栏中要忽略的文件或者目录
 */
const ignore_list = [
    'index.md',
    '.vitepress',
    'node_modules',
    '.idea',
    'assets',
    'embedded_notes',
    'xrepo',
    '0.intro']

/**
 * 判断是否属于文件夹
 * @param {*} path 文件的路径
 * @returns 判断的结果
 */
const isDir = (path) => fs.lstatSync(path).isDirectory()


const process_filename = (momo) => {
    // 判断文件名中是否含有空格符号
    let IsExistSpaceCharacter = momo.indexOf(' ')

    if (IsExistSpaceCharacter == -1) {
        let res = momo.split('.md')[0]
        return res
    } else {
        let res1 = momo.split('.md')[0]
        let res2 = res1.split(' ')[1]
        return res2
    }
}

const process_filename_part = (momo) => {
    let res1 = momo.split('.md')[0]
    return res1
}


/**
 * 这是一个创造侧边栏的函数
 * @param {目标文件夹_处理的文件夹} dir_unprocessed 
 * @param {展开的层级} folder_level 
 */
export const create_sidebar = (dir_unprocessed, folder_level) => {

    // 获取完整路径
    const dir_path = path.join(root, dir_unprocessed)

    // 检测文件夹是否存在，如果不存在不再执行后续代码
    if (!fs.existsSync(dir_path)) {
        return
    }

    // 获文件夹下的文件
    const files_all = fs.readdirSync(dir_path)

    // 剔除需要忽略文件夹
    const is_effective = (arr1, arr2) => Array.from(new Set(arr1.filter((item) => !new Set(arr2).has(item))))


    const files_effective = is_effective(files_all, ignore_list)

    const new_level = 0

    /**
     * 
     * @param {文件夹中的项目们} items 
     * @param {该文件夹的完整路径} repo_path 
     * @param {相对目录} dir_unprocessed 
     * @param {折叠的层级} folder_level 
     * @returns 
     */
    const create_list = (items, repo_path, dir_unprocessed, folder_level, now_level) => {
        const final_list = []


        for (let i = 0; i < items.length; i++) {
            const item = items[i]
            const item_path = path.join(repo_path, item)
            const isDir_res = isDir(item_path)
            if (isDir_res) {
                // 下级循环内容
                const new_items = fs.readdirSync(item_path)

                let dir_name_processed = process_filename(item)

                let new_floder = `${dir_unprocessed}/${item}`

                if (!now_level) {
                    now_level = 1
                }

                let next_level = now_level + 1


                let collapsed_state = Boolean

                if (now_level > folder_level) {
                    collapsed_state = true
                } else {
                    collapsed_state = false
                }



                final_list.push({
                    text: dir_name_processed,
                    collapsed: collapsed_state,
                    items: create_list(new_items, item_path, new_floder, folder_level, next_level),
                })


            } else {
                const file_name = path.basename(item_path)
                const file_ext = path.extname(item_path)
                if (file_ext !== '.md') {
                    continue
                }


                let file_name_processed = process_filename(file_name)

                let file_name_processed_part = process_filename_part(file_name)


                final_list.push({
                    text: file_name_processed,
                    link: `${dir_unprocessed}/${file_name}`
                })


            }
        }
        return final_list

    }

    return create_list(files_effective, dir_path, dir_unprocessed, folder_level, new_level)




}



//  生成所有的侧边栏导航目录
export const setAllSidebars = (arr) => {

    // 返回的侧边栏导航目录（是以对象的形式返回）
    let obj = {}

    // 通过传入的数组（文件夹目录们），依次循环生成各自的侧边栏导航目录
    for (let i = 0; i < arr.length; i++) {

        let repo = arr[i]

        let repo_name = repo[0]

        let level = repo[1]

        obj[repo_name] = create_sidebar(repo_name, level)


    }

    fs.writeFile(`${root}/data/directory.json`, JSON.stringify(obj), err => {
        if (err) {
            console.log('no no no');
            return
        }
        console.log('OK 已生成侧边栏数据');
    })

    return obj
}









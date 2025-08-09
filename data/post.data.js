import { createContentLoader } from 'vitepress'



export default createContentLoader('posts/*.md', {
    // 包含原始 markdown 源?
    // 不要开启，或者开启后，最后返回的 posts 记得删除包含源文件的属性 ，不然返回的数据非常大，影响性能。
    includeSrc: false,

    excerpt: false,    // 包含摘录?
    transform(rawData) {
        let posts = rawData

        // 定义移除 mothbal 文章的函数
        function removeMothbal(arr, indices) {
            const indicesSet = new Set(indices);
            return arr.filter((_, index) => !indicesSet.has(index));
        }
        // mothbal 文章的索引值
        let MothbalIndex = []

        for (let i = 0; i < posts.length; i++) {

            // 补齐 pin 数据
            if (!posts[i].frontmatter.pin) {
                posts[i].frontmatter.pin = 0
            }
            // 获取 mothbal 文章的索引值
            // -- 当存在 mothbal 且为 true 时
            if (rawData[i].frontmatter.mothbal && (rawData[i].frontmatter.mothbal == true)) {
                MothbalIndex.push(i)
            }

            // 当不存在ID时，补全ID
            // 为了显示时间
            if (!posts[i].frontmatter.id) {
                // 提取数据
                let res = posts[i].url.split(' ')[0]
                // 提取数字
                res = res.replace(/\D/g, '');

                posts[i].frontmatter.id = res



                // url: '/posts/24091801 Vitepress中增强代码预览.html'


            }

        }

        // 移除 mothbal 文章
        posts = removeMothbal(posts, MothbalIndex)


        // 将数组倒序，保证最新的文章在前
        posts.reverse();


        // 将数组按照 pin 值 排序 （置顶功能）
        // pin 决定是否置顶 越大越靠前
        posts.sort((a, b) => b.frontmatter.pin - a.frontmatter.pin);


        return posts
    }



})
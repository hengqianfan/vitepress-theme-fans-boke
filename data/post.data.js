import { createContentLoader } from 'vitepress'



export default createContentLoader('posts/*.md', {
    includeSrc: true, // 包含原始 markdown 源?
    excerpt: true,    // 包含摘录?
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






        // 追加 frontmatter 配置


        // 阅读时间
        // let readTime = reckonReadTime(rawData[i].src)
        // rawData[i].frontmatter.readTimeNum = readTime
        // 文章属性
        // 文件名称
        // let filename = rawData[i].url
        // filename = filename.split('posts/')[1]
        // filename = filename.split('.ht')[0]
        // rawData[i].frontmatter.filename = filename
        // 文章标题
        // rawData[i].frontmatter.title = filename.split(' ')[1]
        // 文章ID
        // rawData[i].frontmatter.zoid = filename.split(' ')[0]
        // 文章的时间戳
        // rawData[i].frontmatter.time = getArticleTime(filename.split(' ')[0])
        // 判断是否为本月文章
        // rawData[i].frontmatter.isMonthly = judgeIsMonthly(rawData[i].frontmatter.time)
        // 追加本月文章的标签
        // if (rawData[i].frontmatter.isMonthly) {
        //     let arr = []
        //     if (rawData[i].frontmatter.tags) {
        //         arr.push(...rawData[i].frontmatter.tags)
        //     }
        //     arr.push('本月文章')
        //     rawData[i].frontmatter.tags = arr
        // }
        // 判断是否为本周文章
        // rawData[i].frontmatter.isWeekly = judgeIsWeekly(rawData[i].frontmatter.time)
        // 追加本周文章的标签
        // if (rawData[i].frontmatter.isWeekly) {
        //     let arr = []
        //     if (rawData[i].frontmatter.tags) {
        //         arr.push(...rawData[i].frontmatter.tags)
        //     }
        //     arr.push('本周文章')
        //     rawData[i].frontmatter.tags = arr
        // }
        // 将数据倒序后返回，保证最新的文章在前
        return posts
    }



})
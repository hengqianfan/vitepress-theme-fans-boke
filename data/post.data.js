import { createContentLoader } from 'vitepress'



export default createContentLoader('posts/*.md', {
    includeSrc: true, // 包含原始 markdown 源?
    excerpt: true,    // 包含摘录?
    transform(rawData) {

        // 将数据倒序后返回，保证最新的文章在前
        return rawData
    }
})
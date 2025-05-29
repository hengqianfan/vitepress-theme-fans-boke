import { createContentLoader } from 'vitepress'



export default createContentLoader('posts/*.md', {
    includeSrc: true, // 包含原始 markdown 源?
    excerpt: true,    // 包含摘录?
    transform(rawData) {
        let data_life = []


        for (let i = 0; i < rawData.length; i++) {
            let tagsArr = []
            tagsArr = rawData[i].frontmatter.tags
            // 如果是
            if (tagsArr.includes('mylife')) {
                data_life.push(rawData[i])
            }


        }






        return data_life
    }




})
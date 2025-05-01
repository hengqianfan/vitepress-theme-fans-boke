
##  默认搜索 

<Badge type='danger'>存在问题</Badge> 

① vitepress 自带的搜索**不能检索MD文档中的所有内容**，只能搜索到各级标题的内容 <br/> 即是说，**关键词必须写在各级标题中**。  

> 根据个人测试，只能搜索到各级标题的内容  
说人话就是，关键词你不放在各级标题中，是搜索不到的  
比如你整篇文章都在写李白的个人简介，文章中有很多李白的字段  
但是该文档没有任何标题带李白，在搜索框搜李白是检索不到该文章的  

<!-- ② 各级标题若是写在 **自定义容器** 内，也不会被检索到。如下实例：`tip容器`  

`--- 自定义容器语法和解释，可参考 本笔记对应的部分 或者 官方文档 ` [enter](https://vitepress.dev/zh/guide/markdown#custom-containers){target="_blank"} 



```markdown [示例]
 ::: tip

 #### 该四级标题的内容不会被检索

 :::

``` -->


##  Algolia


##  插件生态

> 目前有两款插件，但是使用文档比较简略  

---

- `vitepress-plugin-search` :  

https://www.npmjs.com/package/vitepress-plugin-search   

---

- `vitepress-plugin-pagefind` :  

https://www.npmjs.com/package/vitepress-plugin-pagefind。  

---
---
tags: ['报错','vitepress','vue']
icon: 'vitepress'
aside: left
cover: 'vitepress'
---

###### ID: 24082801 

<!-- ## 报错 -->

## 1. 不生成链接

- markdown 文件中使用链接语法无法正常生成链接

<Badge type='danger'>错误示范</Badge>

```md
[VScode下载与使用](/zo-repo/vscode/00 简述.md){target='_blank'}
```

<Badge type='tip'>解决办法</Badge>

💡 **空格符号需要用 `%20`代替**

```md
[VScode下载与使用](/zo-repo/vscode//00%20简述.md){target='_blank'}
```

## 2. 自定义背景后，文章侧边目录底部出现白边


![](/image/202408200203.png)




`解决`：样式冲突，需要单独适配这个区域的css

```scss

#app {
    // 文档大纲需要补充设置
    // 这部分是底部的一小部分
    // 根据这个类名适配就行
    .aside-curtain {
        background: $yourcolor;
    }

}


```


## 报错 | SyntaxError: Invalid or unexpected token

⭐**你的文章标签中存在中文字符**  
> \-\-\-  
> tag: ['AI', '绘画', 'AI绘画']  
> \-\-\-  
例如：上述`[]`内不应该存在中文逗号、中文引号   
<Badge type='danger'>[ &nbsp;,&nbsp; ] &nbsp;👈 &nbsp;是非常容易混淆的</Badge>


## 报错 | TypeError: Cannot read properties of undefined (reading 'getSSRProps')

- vitepress项目中的某段代码不具备SSR的兼容性

- 需要用 `<ClientOnly>` 包裹 

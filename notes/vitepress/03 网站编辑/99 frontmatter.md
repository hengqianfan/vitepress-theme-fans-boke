---
aside: false
---


# frontmatter 配置
::: tip 介绍

---

:one:  &nbsp; `vitepress` 把页面级别的配置称为 frontmatter 配置。  

:two:  &nbsp; 默认主题的配置是在 `config` 文件中配置，但`frontmatter配置`是在每个页面中自行配置，也可以不配置。  

:three:  &nbsp; **需要注意的是**：  
>  frontmatter 配置要写在文档的最顶部，用 " --- " 包裹配置的内容。  
:::

> <Badge type='warning'>代码演示</Badge>  
```md
---

<!-- 页面布局 -->
layout: page 

---
```

> <Badge type='warning'>防呆演示</Badge>  

![img](/image/202401201959.png)

---
aside: false
---

页面配置中  `layout`(布局)  

提供三种模式

> `home`   &nbsp; 提供固定的主页样式，以快速构建主页，但是单调  
> `doc`   &nbsp;  &nbsp; 这是所有页面的**默认布局**，自动将默认样式应用在markdown文档中  
> `page`   &nbsp; 去除默认样式，用于需要自定义页面样式的页面，自由度高  

---

::: info  <Badge type='info'>代码演示</Badge>

> `请在文档的最顶部配置`

```md
---

layout: page

--- 
```

:::






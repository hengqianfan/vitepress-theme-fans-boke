---
aside: left
tags: ['vitepress','博客','vue']
icon: 'vitepress'
id: 24110501
cover: '/cover/vitepress.png'
---
 
######  {{ $frontmatter.id? $frontmatter.id : $frontmatter.zoid }}

# vitepress 主题

::: warning <Badge type='danger'>tip</Badge>

目前 `vitepress` 的主题生态较为匮乏，多为小打小闹的简约风主题，缺少类似于`vuepress的hope主题`这种优秀且功能丰富的主题，目前，我发现的，比较实用的 vitepress 的主题是 sugarat。

:::

<br/>
 
##  1. vitepress-sugarat 主题

::: info <Badge type='info'>介绍</Badge>

**这是基于 `vitepress` 二次开发的博客主题**，是目前我看到的比较 **正式、完善** 的 vitepress 博客主题。 

:::

![](/cover/202412112131.png)


<br/>


- **项目官网**：https://theme.sugarat.top/   

👆 `使用教程` 、 `项目介绍` 、`更新公告` 



- **代码仓库**：https://github.com/ATQQ/sugar-blog <Badge type='danger'>霍格沃茨</Badge>

<br/>




### 1.1 创建项目

#### 1.1.1 初始化

```shell
pnpm create @sugarat/theme
```

#### 1.1.2 安装依赖

::: danger <Badge type='warning'>提示</Badge>
- 先进入项目文件夹
:::

```shell
cd my-blog
```
- 安装依赖

```shell
pnpm install
```
---
aside: left
tags: ['vitepress','vue']
icon: 'vitepress'
open: true
id: 25031601
cover: 'vitepress'

---
 
######  {{ $frontmatter.id? $frontmatter.id : $frontmatter.zoid }}
 
<br/>
 



# 在 vitepress 中 隐藏外链自带的箭头

## 1. 解决办法

**原理是通过覆盖css样式，去除预设的链接样式**  

在自己的主题样式的CSS文件中加入如下代码

> `文件路径`：`\.vitepress\theme\style\index.scss`   
>     （ 我项目的路径被自己重构过，**只要写在全局样式的文件中就行** ）  

👇👇👇

```css 

:is(.vp-external-link-icon, .vp-doc a[href*='://'], .vp-doc a[target='_blank']):not(.no-icon)::after {
    display: none;
}
```


## 2. 补充信息

原始样式的路径地址：  

`\node_modules\vitepress\dist\client\theme-default\styles\components\vp-doc.css`  


相关组件的路径地址：  

`\node_modules\vitepress\dist\client\theme-default\components\VPLink.vue`

```css
/* 原来的样式如下 */

/**
 * External links
 * -------------------------------------------------------------------------- */

/* prettier-ignore */
:is(.vp-external-link-icon, .vp-doc a[href*='://'], .vp-doc a[target='_blank']):not(.no-icon)::after {
  display: inline-block;
  margin-top: -1px;
  margin-left: 4px;
  width: 11px;
  height: 11px;
  background: currentColor;
  color: var(--vp-c-text-3);
  flex-shrink: 0;
  --icon: url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' %3E%3Cpath d='M0 0h24v24H0V0z' fill='none' /%3E%3Cpath d='M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z' /%3E%3C/svg%3E");
  -webkit-mask-image: var(--icon);
  mask-image: var(--icon);
}

.vp-external-link-icon::after {
  content: '';
}

/* prettier-ignore */
.external-link-icon-enabled :is(.vp-doc a[href*='://'], .vp-doc a[target='_blank'])::after {
  content: '';
  color: currentColor;
}

```



---
aside: left
tags: ['vitepress','vue']
icon: 'vitepress'
cover: 'vitepress'


---
 
###### 24100402
 
<br/>
 
# vitepress 代码组增加图标

## 1. 说明

::: details 参考文章

https://vpgi.vercel.app/getting-started.html  


::: 

- 只会在`代码组`中生效，普通的`代码块`不会  

- 不了解二者的区别，参考 **vitepress** 官方文档 [`enter`](https://vitepress.dev/zh/guide/markdown){target="_blank"} 
## 2. 安装依赖

::: code-group

```shell [npm]
npm install vitepress-plugin-group-icons -D
```

```shell [yarn]
yarn add vitepress-plugin-group-icons -D
```

```shell [pnpm]
pnpm add -D vitepress-plugin-group-icons
```


:::
## 3. 配置代码

::: code-group

```js:line-numbers{2,7,12} [.vitepress/config.mjs]
import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'

export default defineConfig({
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },
  vite: {
    plugins: [
      groupIconVitePlugin()
    ],
  }
})
```

:::

## 4. 配置样式

::: code-group

```js:line-numbers{2} [.vitepress/theme/index.js]
import Theme from 'vitepress/theme'
import 'virtual:group-icons.css'

export default Theme
```

:::
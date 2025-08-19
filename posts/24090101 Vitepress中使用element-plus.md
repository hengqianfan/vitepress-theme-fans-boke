---
aside: left
tags: ['vitepress','elementPlus','vue']
icon: 'vitepress'
cover: 'vitepress'
---

###### 24090101

<br/>

# vitepress 中使用 ElementPlus


`ElementPlus官网` :  https://element-plus.org/zh-CN/


## 1. 不使用配套图标

::: warning <Badge type='warning'>提示</Badge>

**如果你对 ElementPlus 不太熟悉，可以不安装图标，然后注意查看说明版代码**

:::

### 1.1 安装 element-plus

::: code-group

```shell [npm]
npm install element-plus --save
```

```shell [yarn]
yarn add element-plus
```

```shell [pnpm]
pnpm install element-plus
```

:::

### 1.2. 配置代码 




---

**配置文件**： `docs/.vitepress/theme/index.js` 👈    

::: code-group

```js:line-numbers{3,4,8} [纯净版]
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus)
  },
}
```



```js{3-6,10-11} [说明版]
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
// ⭐1. 导入 elementplus 
import ElementPlus from 'element-plus'
// ⭐2. 导入 elementplus 的样式
import 'element-plus/dist/index.css'
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // ⭐3. 注册 elementplus
    app.use(ElementPlus)
  },
}
```

:::


### 1.3 使用

- 因为全局注册，你可以直接在项目中的 `vue` 文件中使用

 
<br/>
 
<hr class="hr-twill-colorful">
 
<br/>
 

## 2. 使用配套图标 

<br/>

### 2.1 安装依赖

- **安装 element-plus** 

::: code-group

```shell [npm]
npm install element-plus --save
```

```shell [yarn]
yarn add element-plus
```

```shell [pnpm]
pnpm install element-plus
```

:::


- **安装 图标依赖** <Badge type='danger'>注意图标是单独的包，所以要另外安装它</Badge>  

::: code-group

```shell [npm]
npm install @element-plus/icons-vue
```

```shell [yarn]
yarn add @element-plus/icons-vue
```

```shell [pnpm]
pnpm install @element-plus/icons-vue
```

:::

### 2.2 配置代码 


---

::: code-group

```js [纯净版]
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus)
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
```




```js:line-numbers{7-8,14-16} [说明版]
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
//  1. 导入 elementplus 
import ElementPlus from 'element-plus'
//  2. 导入 elementplus 的样式
import 'element-plus/dist/index.css'
// ⭐ 4. 导入 elementplus-icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 3. 注册 elementplus
    app.use(ElementPlus)
    // ⭐ 5. 注册 elementplus 图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
```

:::







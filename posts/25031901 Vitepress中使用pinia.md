---
aside: left
tags: ['修改中','pinia']
icon: 'vitepress'
open: true
id: 25031901
cover: 'vitepress'



---
 
######  {{ $frontmatter.id? $frontmatter.id : $frontmatter.zoid }}
 
<br/>
 
# Vitepress中使用 pinia

**`官网`**：https://pinia.vuejs.org/zh/

## 1. 安装依赖

::: code-group

```shell [npm]
npm install pinia
```

```shell [yarn]
yarn add pinia
```

```shell [pnpm]
pnpm install pinia
```

:::


## 2. 配置代码

在 `.vitepress/theme/index.js` 中设置 Pinia：

```js
import { createPinia } from 'pinia'
import DefaultTheme from 'vitepress/theme'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    const pinia = createPinia()
    app.use(pinia)
  }
}
```


## 3. 创建 store 

在 `.vitepress/stores/counter.js` 中创建示例 store：

```js
import { defineStore } from 'pinia'
export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  actions: {
    increment() {
      this.count++
    }
  }
})
```

## 4. 组件中使用


```vue
<script setup>
import { useCounterStore } from '../.vitepress/stores/counter'
const counter = useCounterStore()
</script>

<template>
  <div>
    <p>Count: {{ counter.count }}</p>
    <button @click="counter.increment()">+1</button>
  </div>
</template>
```
## 5. 持久化


- 安装持久化插件

```shell
pnpm install pinia pinia-plugin-persistedstate
```

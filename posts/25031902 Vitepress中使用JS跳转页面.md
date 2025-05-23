---
aside: left
tags: ['vitepress','vue']
icon: 'vitepress'
open: true
id: 25031902
cover: '/cover/vitepresscover.png' 

---
 
######  {{ $frontmatter.id? $frontmatter.id : $frontmatter.zoid }}
 
<br/>

# Vitepress中使用JS跳转页面
 
## 使用 useRouter 钩子

VitePress 提供 useRouter 钩子获取路由实例，支持 SPA 风格的无刷新跳转。


> 说明：   
> - <small>router.go(path: string)：跳转到指定路径。</small>    
> - <small>路径需为绝对路径（如 /about），若项目配置了 base，需包含 base 前缀（如 /docs/about）</small> 。  

```vue
<!-- 在 .md 文件或 Vue 组件中 -->
<template>
  <button @click="navigate">跳转到关于页</button>
</template>

<script setup>
import { useRouter } from 'vitepress'

const router = useRouter()

const navigate = () => {
  // 使用绝对路径（需包含 VitePress 的 base 配置，如存在）
  router.go('/about')
}
</script>
```

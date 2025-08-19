---
aside: left
tags: ['vitepress','vue','medium-zoom']
icon: 'vitepress'
cover: 'vitepress'


---

###### {{ 24091101}}
 
<br/>

# vitepress 中集成图片预览



## 1. 使用 medium-zoom 实现

::: info <Badge type='tip'>简述</Badge>
**这个办法比较简单，只需要在安装依赖包后，配置两个主题文件即可：**  

`theme\index.css` 和 `theme\index.js` 

---


<!-- |`维度`|`评分`|
|:---:|:---:|
|**快捷集成**| ❤❤❤❤🤍|
|**实用程度**| ❤❤❤❤🤍|
|**推荐指数**| ❤❤❤❤❤| -->


:::


### 1.1 安装依赖

::: code-group

```shell [npm]
npm i medium-zoom
```

```shell [pnpm]
pnpm i medium-zoom
```

:::


---

### 1.2 添加样式

文件位置：`\.vitepress\theme\index.css`

```css
.medium-zoom-overlay {
  z-index: 20;
}
.medium-zoom-image {
  z-index: 21;
}

```

---

### 1.3 配置代码


> 有两种可选配置方法：

- **`全局生效`** <Badge type='warning'>⭐推荐</Badge> 
- **`部分生效`** <Badge type='danger'>不建议</Badge>




文件位置： `\.vitepress\theme\index.js`


::: code-group

```js [1️⃣ 全局生效]
import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import './index.css'

export default {
  ...DefaultTheme,
  setup() {
    const route = useRoute()
    const initZoom = () => {
        // 1. 【选择一】对全局图片生效
        // ❌警告：如果你自定义了vitepress主题布局，可能会缺失 .main 类名，
        // 所以根据你的实际布局类名来填写，
        // 如果你不懂上述的话，且运行后项目并未实现放大功能
        // 请将 '.main img' 改为 'img' 或许能够解决你的问题
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
    };
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  }
}
```



```js [2️⃣ 特定生效]
import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import './index.css'

export default {
  ...DefaultTheme,
  setup() {
    const route = useRoute()
    const initZoom = () => {
        // 2. 【选择二】对具有特定css类名的图片生效（ 见后文提示 ）
      mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' })
    };
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  }
}
```


```md:line-numbers{2} [特定生效的演示]
👇
![你的图片](logo.png){data-zoomable}
<!-- 在基本的图片语法后加上 {data-zoomable}  即可-->
<!-- 考虑到和别的项目冲突，建议用全局的，省事，还不用特意去记-->
```


```js [快捷更改]
// 1. 全局生效
mediumZoom('.main img', { background: 'var(--vp-c-bg)' })

// 2. 特定生效
mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' })
```
---


:::






### 1.4 演示效果

::: info <Badge type='warning'>提示</Badge>
**当鼠标指针悬浮在图片上时，会显示放大镜**
:::


![](/others/24082801.png)


### 1.5 踩坑点

::: info <Badge type='warning'>提示</Badge>

在重构我的 `vitepress` 博客后，我放弃了系统的默认布局，基本上重写了项目中的每一个的组件，  
当我利用 `mediumZoom` 重新实现新博客的放大功能时，发现放大功能无法生效，  
**排错后，发现是因为重写组件后我的博客没有了`.main`这个类名，这导致原来的配置失效，**   
所以，如果你出现了同样的问题，可以在自己的布局组件中合适位置加上 `.main`，  
或者将 `'.main img'`替换为自己的布局类名，例如 `'.myDoc img'` ，  
亦或者直接让全部图片生效，将 `'.main img'` 替换为 `'img'` 。

:::



```js
// 省略...
export default {
  ...DefaultTheme,
  setup() {
    const initZoom = () => {
    // 省略...
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' })
    };
   // 省略...
  }
}
```
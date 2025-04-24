---
outline: [2,4]
id: 25042301
---
# ⭐关于本站

::: danger <Badge type='danger'>重要提示</Badge>

**本站未公开发布，线上版本具有滞后性，且某些功能缺少本地环境的配置，可能会出现异常。**

:::


## 1. 建设原因与定位

🔘 **从高中开始，我便想要一个属于自己的网站**，但是这条路是曲折的。刚上大学时的我，终于拥有了属于自己的电脑，但它对于我来说更像是一个大屏手机，我的电脑知识储备为 `0` 。  

🔘 建站早期，我曾经多次碰壁与放弃，而建站商家铺天盖地的广告，**曾让我以为建站的成本是我负担不起的费用**，后来渐渐知道，有免费的`wordpress`，但是看上去，还是有QQ空间的既视感，为了建设一个从 `0` 开始的网站，我逐渐开始学习编程知识，没想到我一个纯文科专业的人，竟然也学的津津有味。  

🔘 最后，慢慢接触到了 `vitepress` ，**在我看来，对于文档类网站，它的确是最好的建站方式，我十分喜欢这种自由度，像是上帝版的编辑与排版权限，这是任何笔记软件无法给予我的。**  

🔘 为了保持本站的内容的垂直性，**即是保持笔记网站的定位**，关于个人博客（生活）已经另外独立建站，目前仍是采用 `vitepress`项目技术建站，不过也在开发脱离 `vitepress` 的、基于`vue + nodejs + mysql` 的 个人博客网站。

::: details 了解更多俺的网站

<br/>

**💡 这个简易的web项目( `zo-start` )集成了俺所有的网站与项目地址**  

<br/>

<Badge type='danger'>祖国版</Badge>：https://aniu.website    (暂时维护)

<br/>

<!-- <Badge type='danger'>国际版</Badge>：https://hengqianfan.github.io/zo-start/   -->

:::

## 2. 更新日志 

::: details 💡 网站更新日志


[点击此处，跳转到【更新日志】 📝](./history-updated.md)

:::

## 3. 版权与引用说明

### 3.1 本站知识产权保护

- 假若，你用于自己的博客网站，对于本站的文章、笔记的转载，只要附上本站的原文链接，不商用就行。

- 假若，你将本站内容发布在第三方平台（包括不限于：Bilibili、抖音、小红书、百度、今日头条、知乎、小黑盒、CSDN等），**请在对应平台关注站长**，**并在文章末尾或评论区@站长的账号**。
<!-- 
|平台|账号名称|平台ID|链接地址|
|---|---|---|---|
|Bilibili|数码猿猴|3546729108474211|[enter](https://space.bilibili.com/3546729108474211/ )|
|小黑盒|冰刀快和飞|51427625|[enter](https://web.xiaoheihe.cn/bbs/user_profile_share?user_id=51427625&h_src=writer) | -->


### 3.2 争议解决

::: danger <Badge type='danger'>争议解决</Badge>
- 本站文章与笔记中出现的 `非技术性` 的配图，**图片一般情形下是通过AI生成的**。
- 本站文章中的 `技术性配图` ，一般是个人探索、实践、执行的截图。
- 本站中**若是出现您认为侵犯你权益的图片、资源等，请及时联系站长，核实后会在第一时间删除争议的内容**。
:::





## 4. 采用与依赖的技术与项目
 

### 4.1 技术依赖包

🏐🏐🏐  **`技术依赖一览表`**  🏐🏐🏐  

```json
{
  "devDependencies": {
    // 可以不安装vue，我单纯就想安装它
    "vue": "^3.4.21",
    // 本站的博客网站框架
    "vitepress": "1.0.0-rc.45",
    // 本站全面使用sass语法
    "sass": "^1.71.1"

  },
  "dependencies": {
    // el 图标库
    "@element-plus/icons-vue": "^2.3.1",
    // el 组件库
    "element-plus": "^2.8.0",
    // 文档扩展 - 脚注
    "markdown-it-footnote": "^4.0.0",
    // 文档扩展 - 流程图
    "markdown-it-mermaid": "^0.2.5",
    // 功能扩展 - 图片点击预览
    "medium-zoom": "^1.1.0",
    // 流程图的技术依赖
    "mermaid": "^11.1.1",
    // 为文章提供唯一标识符号
    "uuid": "^10.0.0"
  }
}
```

### 4.2 嵌入的字体

📣 **本站使用的字体皆为开源的免费字体**

<<< @/.vitepress/theme/scss/font.scss

### 4.3 嵌入的字体图标

**本站集成的阿里巴巴旗下的 `iconfont`字体图标库**  

---


:one: 首先，我是在项目的 `\theme\style\font.scss` 中引入css资源

```css
/* 注意！该链接已失效！仅供演示 */
@import url("//at.alicdn.com/t/c/font_4781406_9a1vot7ekem.css");
```

:two: 然后，在项目中的 `Markdown` 文档中通过 `<i>` 标签使用图标


::: details 演示

<br/>

**代码**

```markdown
<i class="iconfont icon-chrome-black"></i>
<i class="iconfont icon-edge-black"></i>
```

---

**效果**

<br/>

<i class="iconfont icon-chrome-black"></i>  <i class="iconfont icon-edge-black"></i>



:::

### 4.4 个性化 frontmatter 

```md
---

<!-- 关闭文章前的基本信息组件 -->
readTime: false
<!-- 文章的可见性 -->
open: false
<!-- 标签：字符串数组，如果在【zo-articles】目录下，必须写，哪怕是空数组 -->
tags: []

---

```
### 4.5 参考博客

::: danger <Badge type='danger'>说明</Badge>


- 本站的某些功能实现与部分UI设计，多少吸纳了许多优秀的 `vitepress` 博客项目! 

- 为了尽可能**保持链接的有效性**，下列网址中可能会存在Github仓库地址，请准备霍格沃兹环境！

:::



- [`茂茂物语`](https://github.com/maomao1996/mm-notes){target="_blank"}

- [`粥里有勺糖`](https://github.com/ATQQ/sugar-blog){target="_blank"}

- [`查尔斯`](https://github.com/Charles7c/charles7c.github.io){target="_blank"}

- [`罗磊博客`](https://github.com/foru17/luoleiorg){target="_blank"}

- [`韩小韩的博客`](https://github.com/uxiaohan/vhAstro-Theme){target="_blank"}

- [`无名小栈`](https://github.com/imsyy/vitepress-theme-curve){target="_blank"}




## 5. 功能实现 ✅


|功能名称|状态|
|---|:---:|
|自动侧边栏|✅|
|评论区| ✅|
|聚合搜索框| ✅|
|图片预览 |✅|
|markdown扩展流程图 |✅|



### 5.1 文章数据库

### 5.2 自动侧边栏

---

#### 5.2.1 新建脚本

- 你可以在你喜欢的位置创建一个`autoSidebar.js`的文件

> 这个脚本将会自动生成侧边栏目录

<!-- <<< @/.vitepress/myscript/autoSidebar.js  -->

#### 5.2.2 实现原理

将需要手动填写的目录结构，通过自动化脚本生成


#### 5.2.3 注意事项

调用脚本时，需要填写需要生成目录的文件夹位置

#### 5.2.4 脚本特色

- 可定制化的侧边栏展开层级

- 自定义特定文件夹生成侧边栏目录


### 5.3 自定义搜索

### 5.4 流程图集成

### 5.5 图片小组件

### 5.6 预览图集成

### 5.7 视频小组件

参考文章： https://www.ivistang.tech/articles/167/


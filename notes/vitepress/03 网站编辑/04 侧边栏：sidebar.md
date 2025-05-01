## 默认配置

## 固定式侧边栏

> 默认的样式

```js
  ...
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
  ...


```

## 自动化脚本

## 自定义主题

## 侧边栏的导航条的隐藏

> 当侧边栏内容变多，会出现浏览器默认的滚动条，这并不美观  

进入 `.virepress/theme/style.css`

```css
::-webkit-scrollbar {
  display: none;
}
```

> 如果要修改样式，请自行学习 css 
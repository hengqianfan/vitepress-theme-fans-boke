- 获取DOM元素，也称为获取DOM对象

## 通过CSS选择器 <Badge type='warning'>推荐</Badge>

```js
// 选择一个
document.querySelector('css选择器')      //返回（获取）的是一个对象
// 选择多个
document.querySelectorAll('css选择器')   //返回（获取）的是一个数组
```
- **<small>注意`querySelectorAll`方法获取的是伪数组，不能执行push()等数组方法</small>**

<br/>

<br/>

> 实例 - class选择器

::: code-group

```js [JS代码]
let my_name = document.querySelector('.my_name')
```

```html [H5页面]
<div class="my_name">momo</div>
```

<br/>

:::

> 实例 - id选择器

::: code-group

```js [JS代码]
let my_age = document.querySelector('#my_age')
```

```html [H5页面]
<div id="my_age">18</div>
```

:::


## 传统的方式

- 具有局限性，不能用`ul>li`这样的方式获取，没有 `querySelector` 实用

```js
//  通过标签名称获取对应的所有标签
document.getElementsByTagName('div')

//  通过id
document.getElementById('app')

//  通过类名
document.getElementsByClassName('mybutton')
```
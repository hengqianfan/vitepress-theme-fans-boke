## 原生事件的异同

> vue2中使用原生事件需要加 `.native`

```html
<template>
    <!-- 自定义事件 -->
    <button @click="fun()"></button>
    <!-- 原生事件需要加修饰符.native-->
    <button @click.native="fun()"></button>
</template>
```
> vue3为即为原生事件

```html
<template>
    <!-- 原生事件 -->
    <button @click="fun()"></button>
</template>
```
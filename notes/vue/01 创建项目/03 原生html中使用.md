---
aside: false 
---
# 在HTML中使用vue

---

**:boom:很少这样使用vue，如果真的有这样的需求，参照下面代码使用vue3**  

---

::: info  <Badge type='info'>代码示例</Badge>
```html
<!DOCTYPE html>
<html lang="cn">
<head>
    <meta charset="UTF-8">
    <title>your_site_name</title>
    <!-- 引入vue.js代码 -->
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script> // [!code warning]
</head>
<body>
    <!-- 用 id 绑定vue语法应用的范围 -->
    <div id="app">  // [!code warning]
        {{test}}
    </div>
</body>
<script>
    //这是使用 vue3 的基本格式
    const {createApp , ref } = Vue
    const app =  createApp({
        setup(){
            //从这里开始到return前，写你的代码逻辑
            const test = ref("test")
            //注意，return中要把你上面的代码逻辑中定义的所有[变量名称]和[函数名称]写下来。 // [!code warning]
            return {
                test,
            }
        }
    })
    //应用vue（就是挂载在上面ID绑定的元素上）
    app.mount("#app") // [!code warning]
</script>
</html>
```
:::
```js
// 取整 (向上取整) 
Math.ceil(num)

// 向下取整

Math.floor(num)

// 四舍五入
Math.round()

// 最小值
Math.min(arr)

// 最大值
Math.max(arr)
```

## 随机数

- `Math.random()`
- 包括零，不包括一的随机小数

- 0 - 10
```js

Math.floor(Math.random()*(10 + 1)) 

```

- N - M

```js

Math.floor(Math.random()*( M - N + 1)) + N 

```
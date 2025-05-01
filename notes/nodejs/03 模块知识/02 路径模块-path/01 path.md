```js

// 拼接规范的路径

const path = require('path')

path.resolve(__dirname,'index.html')

```

## 获取操作系统下的路径分割符号

```js
const path = require('path')

path.sep()

```

## 解析路径信息

```js
const path = require('path')

let str = '一个文件的路径'
// 返回一个对象（文件路径、文件名称、文件后缀）
path.parse(str)
// 获得文件名
path.basename(str)
// 获得所在的文件夹路径
path.dirname(str)
// 获得文件类型（文件后缀）
path.extname(str)

```



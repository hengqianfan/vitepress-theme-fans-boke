## 简易示例

## 创建服务

```js
// 导入 http 模块
const http = require('http')

// 创建服务对象
const server = http.createServer((req,res)=>{
    // 如果中文乱码，设置如下响应头
    // res.setHeader('content-type','text/html;charset=utf-8')
    res.end('已收到请求')
})

// 端口监听，服务启动
server.listen(8080,()=>{console.log('启动成功');})

```

## 请求报文处理

```js
const server = http.createServer((req,res)=>{
    // 获取 请求的方法
    console.log(req.method);
    // 获取 URL
    console.log(req.url);
    // 获取 http协议的版本
    console.log(req.httpVersion);
    // 获取 请求头
    console.log(req.headers);
    res.end('已收到请求')
})
```

- 请求体的处理

```js
const server = http.createServer((req,res)=>{
    // 声明变量
    let body = ''
    // 事件绑定、事件监听
    req.on('data', (chunk)=>{
        body += chunk.toString()
    })
    req.end('end',()=>{
        console.log(body);

        res.end('已收到请求')
    })
    
})
```
- 请求路径与查询字符串 (通过url模块)

```js
const http = require('http')
// 导入 url模块
const url = require('url')

const server = http.createServer((req,res)=>{
    // 第二个参数 true 是让查询字符串转为对象 不需要可以不填写
    let res_url = url.parse(req.url,true)
    // 这是解析后是一个含有各种信息的对象
    console.log(res_url);
    // 路径
    let pathname = res_url.pathname
    // 查询字符串（关键字）
    let keyword = res_url.query.keyword
})
```

- 请求路径与查询字符串 (通过URL)

```js
const http = require('http')

const server = http.createServer((req,res)=>{
    let url = new URL(req.url,'http://127.0.0.1')
        // 路径
    let pathname = url.pathname
    // 查询字符串（关键字）
    let keyword = url.searchParams.get('keyword')
})
```

## 响应报文设置

```js
const http = require('http')

const server = http.createServer((req,res)=>{
    // 设置响应状态码 默认200
    res.statusCode = 200
    // 响应状态描述 但是一般不会特意设置它，默认即可
    res.statusMessage = '随意'
    // 设置响应头 自定义响应头不能使用中文
    // res.setHeader(key,value) 
    res.setHeader('content-type','text/html;charset=utf-8')
    // 设置多个同名的响应头
    res.setHeader('test',[a,b,c])
    // 响应体设置
    res.write('part1')   
    res.write('part2')   
    // 如果已经使用write,不建议再在end()里面传参
    // end 一次回调逻辑中只允许存在一个执行（可以使用多个end组成选择的逻辑,但是不能存在同时执行的逻辑）
    res.end('')

})
```


## 静态资源服务

```js
const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    let {pathname} = new URL(req.url,'http://127.0.0.1')
    let root = __dirname + '/public'
    let filePath = root + pathname
    fs.readFile(filePath,(err,data)=>{
        if(err){
            res.statusCode = 500
            res.end('失败')
        }
        res.end(data)
    })
})
```
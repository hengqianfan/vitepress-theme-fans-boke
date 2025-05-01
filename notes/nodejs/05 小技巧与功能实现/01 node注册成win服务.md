> 安装

::: code-group
 
```shell [npm]
npm i -g node-windows
```

```shell [pnpm]
pnpm i -g node-windows
```
 
:::

> 新建一个安装文件nw.js

```javascript
let Service = require('node-windows').Service;

let svc = new Service({
name: 'ele4React',    //服务名称
        description: 'ele4React', //描述
        script: 'E:/mykoa/index.js' //nodejs项目要启动的文件路径
    });

    svc.on('install', () => {
        svc.start();
    });

    svc.install();
```

> 新建一个卸载文件nw-uninstall.js

```javascript
    let Service = require('node-windows').Service;
    let svc = new Service({
        name: 'ele4React',    //服务名称
        description: 'ele4React', //描述
        script: 'E:\mykoa\index.js' //nodejs项目要启动的文件路径
    });

  svc.on('uninstall',function(){
      console.log('Uninstall complete.');
      console.log('The service exists: ',svc.exists);
    });

  svc.uninstall();
```

> 执行命令

```shell
node nw.js //安装服务
node nw-uninstall //卸载服务
```
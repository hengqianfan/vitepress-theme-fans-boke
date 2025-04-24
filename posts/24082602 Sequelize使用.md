---
tags: ['数据库','修改中']
cover: '/cover/sequelizeCover.png'
open: false
icon: 'sequelize'
---

###### 24082602

<br/>

::: danger <Badge type='warning'>警告</Badge>
该文章内容正在建设中......
:::

## 1. 官方文档

官网地址 ：https://www.sequelize.cn/

## 2. 安装

## 2.1 安装全局包

```shell
npm i -g sequelize-cli
```
## 2.2 安装项目依赖

```shell
npm i sequelize mysql2
```

## 3. 创建数据表



```shell
sequelize model:generate --name Article --attributes title:string,content:text
```
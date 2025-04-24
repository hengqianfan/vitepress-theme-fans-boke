---
aside: left
tags: ['修改中','Navidrome','音乐']
icon: 'navidrome'
open: false
id: 25031903
cover: 'vitepresscover'
--- 
 
######  {{ $frontmatter.id? $frontmatter.id : $frontmatter.zoid }}
 
<br/>
 
# Navidrome自建音乐服务器

官网： https://www.navidrome.org/

## 1. 安装 docker 

```shell
# 安装 Docker
sudo apt update && sudo apt install docker.io docker-compose
# 启动 Docker 服务并设置开机自启
sudo systemctl enable --now docker
```



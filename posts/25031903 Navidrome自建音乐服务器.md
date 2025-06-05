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

## 1. 安装 docker 环境

### 1.1 卸载旧版本 Docker（如果存在）

```shell
sudo yum remove docker docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-engine
```

### 1.2 安装依赖

```shell
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
```


### 1.3 添加 Docker 官方仓库

```shell
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

⭐ **如果使用的国内的服务器，建议使用阿里云镜像仓库**

```shell
sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

清理缓存

```shell
sudo yum makecache fast
```

### 1.4 安装 Docker

```shell
sudo yum install -y docker-ce docker-ce-cli containerd.io
```

判断是否安装成功，可以执行下面代码

```shell
docker -v
```

### 1.5 启动 Docker 并设置开机自启

```shell
sudo systemctl start docker
```

```shell
sudo systemctl enable docker
```


### 1.6 验证安装

```shell
sudo docker --version
```

等同于 ：

```shell
docker -v
```

## 2. 准备文件存放位置

###  2.1 创建音乐存储目录

- 存放你的音乐文件

```shell
sudo mkdir -p /var/music
```

###  2.2 创建 Navidrome 数据目录

- 存放数据库和配置

```shell
sudo mkdir -p /opt/navidrome/data
```


```shell

```

## 3 安装镜像

### 3.1 配置镜像加速源

```shell
touch /etc/docker/daemon.json
```
- 文件内容

```json
{
  "registry-mirrors": [
    "https://br72e5rb.mirror.aliyuncs.com",
    "https://docker.mirrors.ustc.edu.cn",
    "https://registry.cn-hangzhou.aliyuncs.com",
    "https://hub-mirror.c.163.com"
  ]
}
```

- 重启，让配置生效

```shell
sudo systemctl restart docker
```
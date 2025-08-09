---
aside: left
tags: ['修改中','Navidrome','音乐']
icon: 'navidrome'
open: false
id: 25031903
cover: '/cover/navidrome.png'

--- 
 
######  {{ $frontmatter.id? $frontmatter.id : $frontmatter.zoid }}
 
<br/>
 
# Navidrome自建音乐服务器

官网： https://www.navidrome.org/

## 1. 终端搭建

::: danger <Badge type='danger'>注意</Badge>

因为网络问题，始终无法拉取镜像，所以此方法未完善,请看 `1panel` 搭建！ 

:::

### 1.1 安装 docker 环境

#### 1.1.1 卸载旧版本 Docker（如果存在）

```shell
sudo yum remove docker docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-engine
```

#### 1.1.2 安装依赖

```shell
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
```


#### 1.1.3 添加 Docker 官方仓库

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

#### 1.1.4 安装 Docker

```shell
sudo yum install -y docker-ce docker-ce-cli containerd.io
```

判断是否安装成功，可以执行下面代码

```shell
docker -v
```

#### 1.1.5 启动 Docker 并设置开机自启

```shell
sudo systemctl start docker
```

```shell
sudo systemctl enable docker
```


#### 1.1.6 验证安装

```shell
sudo docker --version
```

等同于 ：

```shell
docker -v
```

### 1.2. 准备文件存放位置

####  1.2.1 创建音乐存储目录

- 存放你的音乐文件

```shell
sudo mkdir -p /var/music
```

####  1.2.2 创建 Navidrome 数据目录

- 存放数据库和配置

```shell
sudo mkdir -p /opt/navidrome/data
```


```shell

```

### 1.3 安装镜像

#### 1.3.1 配置镜像加速源

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


#### 1.3.2 拉取镜像

```shell
sudo docker pull deluan/navidrome:latest
```


## 2. 1panel 搭建


### 2.1. 安装 1Panel


直接在实例中找到插件安装

### 2.2 登录面板

在命令行中输入执行获取基本信息

```shell
1pctl user-info
```

你会得到类似的信息

```shell
[root@iZ7x ~]# 1pctl user-info
面板地址: http://$LOCAL_IP:3550/14d7486
面板用户:  4a9943
面板密码:  57ec4a
```

把`$LOCAL_IP`替换为你的公网IP，例如：`http://4.442.34:3550/14d7486`  


在安全组中放行端口 `3550`


###  2.3. 设置镜像加速


```

```



下载音乐  

https://www.xmwav.com/  


https://wusunk.com/

下载歌词

https://www.kugeci.com/

https://lyrics.net.cn/

修改音乐

https://www.mp3tag.de/

制作歌词文件

https://lrc.moyutime.cn/


专辑封面

http://coverbox.henry-hu.com/


## 3. 本地安装

https://www.navidrome.org/docs/installation/windows/#msi-install

进入下载仓库后

选择

`navidrome_0.58.0_windows_amd64_installer.msi`

中间的数字是版本号

安装时填写三个路径：

软件的安装路径

```txt
D:\Navidrome\main\
```

软件的数据路径

```txt
D:\Navidrome\data
```

音乐的资源路径

```txt
E:\resource\Music
```
## 1.安装文档

官方文档 👇

https://docs.docker.com/desktop/install/windows-install/


- 在任务栏选择启用或关闭功能


<zo-img momo='/image/202408260541.png'></zo-img>


- 勾选 子系统 和 虚拟机



<zo-img momo='/image/202408260544.png'></zo-img>


## 2. 配置镜像设置

> 在 `setting` - `Docker Engine` 中

```json
{
  "builder": {
    "gc": {
      "defaultKeepStorage": "20GB",
      "enabled": true
    }
  },
  "experimental": false,
  "registry-mirrors": [
  "https://dockerhub.icu"
  ]

}

```
::: danger <Badge type='warning'>注意</Badge>
如果你使用的是阿里云服务器，你有自己的镜像加速地址

- 1. 打开阿里云官网
- 2. 搜索【容器镜像服务】
- 3. 在【镜像工具】-【镜像加速器】中，可以看见自己加速地址
:::
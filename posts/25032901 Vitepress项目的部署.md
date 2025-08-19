---
aside: left
tags: ['web','centos','服务器','vitepress','vue']
icon: 'vitepress'
open: false
id: 25032901
cover: 'vitepress2'

---
 
######  {{ $frontmatter.id? $frontmatter.id : $frontmatter.zoid }}
 
<br/>
 
# 部署 VitePress 项目

## 1. Github page

> 有空再写

## 2. 服务器 - centos - nginx


::: info <Badge type='info'>info</Badge>

- 在服务器上部署
- 使用 `centOS` 操作系统
- 利用 `nginx` 提供web服务

:::


### 2.1 购买服务器

> 暂时省略


### 2.2 安装 nginx

- **安装软件**

::: code-group

```shell [AI]
sudo yum install nginx -y
```

```shell [尚硅谷]
yum install nginx -y
```

:::


- **启动服务**


::: code-group

```shell [AI]
sudo systemctl start nginx
```

```shell [尚硅谷]
service nginx start
```

:::



- **设置自启**



```shell
sudo systemctl enable nginx
```



- **重启服务**

```shell
sudo systemctl restart nginx
```


### 2.3 将打包好的网站源代码上传到服务器

在 `var` 下新建文件夹 `myweb` (可自定义文件夹名)

- 建议放在 `var/myweb`



### 2.4 配置 nginx 

在 `etc/nginx/nginx.conf` 文件中修改配置


```text
http {
    server {
        listen       80;
        listen       [::]:80;
        server_name  _;
        root         /usr/share/nginx/html;

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        location / {
            root /var/myweb/notes
            index index.html
        }

        error_page 404 /404.html;
        location = /404.html {
        }
        error_page 500 502 503 504 /50x.html;
        location = /50x.html {
        }
    }
}
```


### 2.5 配置 nginx - 二级域名

- 提示：即是 `api.your.com` (根据域名规范是三级域名，但是实际交流上称二级域名)
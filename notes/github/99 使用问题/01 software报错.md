# software 报错

> 这里的软件报错，特指 Github 的 工作台软件 `desktop` 

## This diff contains a change in line endings from 'LF' to 'CRLF'
- **解决办法**  
> 在项目根目录下的`.gitattributes`文件中添加一行代码。（没有这个文件就创建）
```
* text eol=lf
```
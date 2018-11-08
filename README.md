# NodeJS 知识点整理

## 目录

- 1.模块缓存
- 2.循环依赖
- 3.文件系统
- 4.引用第三方库
- 5.process相关
- 6.debug相关
- 7.path相关 
- 8.promisify | async/await
- 9.buffer相关
- 10.events相关


## 备忘录

- 1. module.exports vs exports (exports 相当于快捷方式)
- 2. module 中的方法和属性都属于该module,属于局部变量
- fs 相关梳理
  1. readfile 读文件
  2. writefile 写文件
  3. stat 文件状态(判断是否存在)
  4. rename 重命名
  5. unlink 删除文件
  6. readDir 读取文件夹
  7. mkdir 创建文件夹
  8. rmdir 删除文件夹
  9. watch 监听文件内容变化
  10. createReadStream
  11. createWriteStream
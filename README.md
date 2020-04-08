### 目标vue基本脚手架
大致需要以下功能
 * js的处理：转换 ES6 代码，解决浏览器兼容问题
 * css的处理：编译css，自动添加前缀，抽取css到独立文件
 * vue文件的处理
 * html的处理：复制并压缩html文件
 * dist的清理：打包前清理源目录文件
 * server的启用：development 模式下启动服务器并实时刷新

### (function(){}) () IIFE
 1、从入口开始，静态分析出依懒图
 2、通过各种load 对文件转换成为js
 3、打包文件生成，其实去掉注释我们就会发现其实就是一个IIFE 函数，key 作为属性，function 作为值（一个模块）传进去
 
### 版本变化，核心的概念没有变
 1、loader、plugin、path、publicPath、outPut、entry 等等
 2、丰富得plugin 生态、支持不同文件的处理，让webpack 对模块的十分友好
 3、不管是postcss 还是babel等插件都是node模块






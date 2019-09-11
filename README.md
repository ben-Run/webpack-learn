# webpack-learn
a webpack  example
# 20181022 基本机构
  基本打包 css img 热更新 dev.server（本地服务）
# 20181023 增加打包scss
  使用extract-text-webpack-plugin 插件分离scss 到css
# 20190325 更新webpack
  v4.29.6
# 20190531 add static assest
  更新loader、增加静态资源打包的拷贝
# (function(){}) () IIFE
 1、从入口开始，静态分析出依懒图
 2、通过各种load 对文件转换成为js
 3、打包文件生成，其实去掉注释我们就会发现其实就是一个IIFE 函数，key 作为属性，function 作为值（一个模块）   传进去
 # 不管webpack 版本如何变，核心的概念始终没有变
 1、loader、plugin、path、publicPath、outPut、entry 等等
 2、强大的plugin 生态、支持不同文件的处理，让webpack 强大无比
 3、最后感谢nodeJs ，因为node 所以前端才有那么好的工具，node 扩大了前端的边界能力。


 ************************************************
### 初始化
```
npm init
npm install webpack webpack-cli --save-dev
```


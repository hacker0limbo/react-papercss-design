---
title: 常见问题
toc: content
order: 7
---

# 常见问题

以下为一些问题的整理

## 为什么不使用 `less` 或者`sass`进行样式编写, 而是使用`jss`这么一个`css-in-js`的库?

这个项目底层打包使用的是 [father](https://github.com/umijs/father) 这个库. 该库在打包时暂时不支持编译`less`或者`sass`. 打包的时候只做文件的平移. 因此如果使用`less`或者`sass`编写样式的话, 需要库的使用者自己安装`less-loader`等`loader`进行转义, 心智负担大. 因此使用`css-in-js`的方案

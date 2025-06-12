---
title: Breadcrumb
demo:
  cols: 2
group:
  title: 导航
  order: 3
toc: content
---

# Breadcrumb 面包屑

显示当前页面在系统层级结构中的位置，并能向上返回。

参考: [Breadcrumb](https://www.getpapercss.com/docs/components/breadcrumb/)

## 示例

<code src="./demos/BreadcrumbBase.tsx" title="基本" description="最基本的面包屑用法"></code>
<code src="./demos/BreadcrumbConfig.tsx" title="可配置" description="使用`items`配置面包屑内容"></code>

## API

### Breadcrumb

| 参数     | 说明           | 类型                                  | 默认值 |
| -------- | -------------- | ------------------------------------- | ------ |
| bordered | 是否有边框     | `boolean`                             | `true` |
| items    | 配置项书写方式 | [`BreadcrumbItem[]`](#breadcrumbitem) | -      |

### BreadcrumbItem

| 参数     | 说明                               | 类型              | 默认值  |
| -------- | ---------------------------------- | ----------------- | ------- |
| content  | 同 children 但是主要用于配置项书写 | `React.ReactNode` | -       |
| active   | 是否为当前激活项                   | `boolean`         | `false` |
| href     | 链接地址                           | `string`          | -       |
| target   | 链接打开方式                       | `string`          | -       |
| children | 子节点                             | `React.ReactNode` | -       |
| title    | 链接标题                           | `string`          | -       |

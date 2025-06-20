---
title: Flexbox
group:
  title: 布局
  order: 2
toc: content
---

# Flexbox Grid 布局

协助进行页面级整体布局。

参考: [Flexbox](https://www.getpapercss.com/docs/layout/flexbox/)

摘自 PaperCSS 原文:

> The flexgrid is a grid system that supports up to 12 columns per row. Because it uses flexbox (rather than just %widths), we also get the benefit of the fun parts of flexbox like alignment in more complex ways than normal.

## 示例

<code src="./demos/FlexboxBase.tsx" title="基本" description="基本的布局" iframe="1500"></code>

## API

### Row

| 参数    | 说明           | 类型                                         | 默认值 |
| ------- | -------------- | -------------------------------------------- | ------ |
| justify | 主轴对齐方式   | `'right' \| 'center' \| 'edges' \| 'spaces'` | -      |
| align   | 交叉轴对齐方式 | `'top' \| 'middle' \| 'bottom'`              | -      |

### Col

| 参数  | 说明                 | 类型                            | 默认值 |
| ----- | -------------------- | ------------------------------- | ------ |
| span  | 占据的列数           | `number`                        | -      |
| sm    | 小屏幕占据的列数     | `number`                        | -      |
| md    | 中等屏幕占据的列数   | `number`                        | -      |
| lg    | 大屏幕占据的列数     | `number`                        | -      |
| xs    | 超小屏幕占据的列数   | `number`                        | -      |
| fill  | 是否自动填充剩余空间 | `boolean`                       | -      |
| align | 垂直对齐方式         | `'top' \| 'middle' \| 'bottom'` | -      |

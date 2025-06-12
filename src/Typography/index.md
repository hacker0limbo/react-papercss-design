---
title: Typography
group:
  title: 通用
  order: 1
toc: content
---

# Typography 排版

文本的基本格式。

参考:

- [Typography](https://www.getpapercss.com/docs/content/typography/)
- [Code](https://www.getpapercss.com/docs/content/code/)
- [Colors](https://www.getpapercss.com/docs/utilities/colors/)

## 示例

<code src="./demos/TypographyBase.tsx" title="基本" description="展示文档样例"></code>
<code src="./demos/TypographyType.tsx" title="颜色和背景色" description="不同的颜色和背景色"></code>

## API

### Typography

所有组件共享以下类型

| 参数             | 说明     | 类型                                                            | 默认值 |
| ---------------- | -------- | --------------------------------------------------------------- | ------ |
| `textType`       | 文字颜色 | `primary`, `secondary`, `success`, `warning`, `danger`, `muted` | -      |
| `backgroundType` | 背景颜色 | `primary`, `secondary`, `success`, `warning`, `danger`, `muted` | -      |

### Typography.Text

渲染为`span`元素

### Typography.Paragraph

渲染为`p`元素

### Typography.Title

渲染为`h(1-6)`元素

| 参数    | 说明                                          | 类型                         | 默认值 |
| ------- | --------------------------------------------- | ---------------------------- | ------ |
| `level` | 重要程度，相当于 `h1`、`h2`、`h3`、`h4`、`h5` | `1`, `2`, `3`, `4`, `5`, `6` | `1`    |

### Typography.Link

渲染为`a`元素

### Typography.Code

渲染为`code`元素

### Typography.CodeBlock

渲染为`pre`元素

### Typography.KBD

渲染为`kbd`元素

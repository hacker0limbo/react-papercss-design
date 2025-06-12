---
title: List
group:
  title: 数据展示
  order: 5
toc: content
---

# List 列表

列表展示, 仅仅是对原生的列表元素进行了包装, 使其支持 `tree` 一样的写法

参考: [Lists](https://www.getpapercss.com/docs/content/lists/)

## 示例

<code src="./demos/ListOrdered.tsx" title="有序列表" description="默认展示有序列表"></code>
<code src="./demos/ListUnordered.tsx" title="无序列表" description="使用`ordered=false`展示为无序列表"></code>

## API

### List

| 参数    | 说明           | 类型                      | 默认值 |
| ------- | -------------- | ------------------------- | ------ |
| ordered | 是否为有序列表 | `boolean`                 | `true` |
| items   | 列表项内容     | [`ListItem[]`](#listitem) | -      |

### ListItem

| 参数     | 说明             | 类型                      | 默认值 |
| -------- | ---------------- | ------------------------- | ------ |
| label    | 列表项的文本内容 | `string`                  | -      |
| children | 子列表项         | [`ListItem[]`](#listitem) | -      |

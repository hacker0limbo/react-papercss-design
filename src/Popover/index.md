---
title: Popover
group:
  title: 数据展示
  order: 5
toc: content
---

# Popover 文字提示

简单的文字提示气泡框。

参考: [Popovers](https://www.getpapercss.com/docs/components/popovers/)

## 示例

<code src="./demos/PopoverBase.tsx" title="基本" description="可以包裹任何元素, 使用`placement`控制出现的位置"></code>

## API

| 参数        | 说明              | 类型                                     | 默认值  |
| ----------- | ----------------- | ---------------------------------------- | ------- |
| `label`     | Popover 的内容    | `string`                                 | -       |
| `placement` | Popover 的位置    | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` |
| `children`  | 触发 Popover 组件 | `'ReactElement'`                         | -       |

---
title: Badge
group:
  title: 数据展示
  order: 5
toc: content
---

# Badge 徽标

进行标记和分类的小标签。

参考: [Badges](https://www.getpapercss.com/docs/components/badges/)

## 示例

<code src="./demos/BadgeBase.tsx" title="基本" description="不同颜色的徽标"></code>
<code src="./demos/BadgeWithParent.tsx" title="尺寸大小" description="和父元素一起使用时大小自适应"></code>
<code src="./demos/BadgeClosable.tsx" title="可以删除的徽标" description="通过`closable`来显示关闭按钮, `onClose`回调函数动态控制删除"></code>

## API

| 参数       | 说明                   | 类型                                                             | 默认值  |
| ---------- | ---------------------- | ---------------------------------------------------------------- | ------- |
| type       | 样式类型               | `'primary'`, `'secondary'`, `'success'`, `'warning'`, `'danger'` | -       |
| closable   | 是否显示关闭按钮       | `boolean`                                                        | `false` |
| onClose    | 点击关闭按钮的回调函数 | `(e: MouseEvent) => void`                                        | -       |
| closeLabel | 关闭按钮的文本         | `React.ReactNode`                                                | `'X'`   |
| disabled   | 徽标是否被禁用         | `boolean`                                                        | `false` |

---
title: BackTop
demo:
  cols: 2
group:
  title: 其他
  order: 7
toc: content
---

# BackTop 返回顶部

用于返回页面顶部

## 示例

<code src="./demos/BackTopBase.tsx" title="基本" description="基本的返回顶部" transform="true"></code>

## API

| 参数             | 说明                           | 类型                     | 默认值 |
| ---------------- | ------------------------------ | ------------------------ | ------ |
| target           | 绑定监听滚动事件的元素         | `RefObject<HTMLElement>` | -      |
| visibilityHeight | 滚动高度达到此参数值才显示按钮 | `number`                 | `400`  |

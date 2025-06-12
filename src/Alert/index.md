---
title: Alert
demo:
  cols: 2
group:
  title: 反馈
  order: 6
toc: content
---

# Alert 警告提示

警告提示，展现需要关注的信息。

参考: [Alerts](https://www.getpapercss.com/docs/components/alerts/)

## 示例

<code src="./demos/AlertBase.tsx" title="基本" description="最简单的用法"></code>
<code src="./demos/AlertDismissible.tsx" title="可关闭的" description="显示关闭按钮，点击可关闭警告提示"></code>
<code src="./demos/AlertCustomClose.tsx" title="自定义关闭" description="可以自定义关闭，自定义的文字会替换原先的关闭 Icon"></code>

## 比较

使用 React 封装的`Alert`组件和`PapcerCSS`的原始的组件有一些区别, 具体如下:

- PaperCSS 的 Alert 在开启`dismissible`关闭以后, 只是隐藏了元素但是 DOM 元素仍旧存在. 新设计的组件行为变更为: **关闭以后会销毁组件, 即 DOM 元素不再存在**.

## API

| 参数        | 说明               | 类型                                                   | 默认值    |
| ----------- | ------------------ | ------------------------------------------------------ | --------- |
| type        | 组件样式           | `primary`, `secondary`, `success`, `warning`, `danger` | `primary` |
| onClose     | 关闭按钮点击时触发 | `(e: MouseEvent) => void`                              | -         |
| afterClose  | 关闭动画结束后触发 | `() => void`                                           | -         |
| dismissible | 是否可关闭         | `boolean`                                              | `false`   |
| closeLabel  | 关闭按钮的文本     | `React.ReactNode`                                      | `X`       |

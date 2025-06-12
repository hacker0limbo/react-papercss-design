---
title: Space
demo:
  cols: 2
group:
  title: 布局
  order: 2
toc: content
---

# Space 间距

设置组件之间的间距。

## 示例

<code src="./demos/SpaceHorizontal.tsx" title="水平间距" description="相邻组件之间的水平距离"></code>
<code src="./demos/SpaceVertical.tsx" title="垂直间距" description="相邻组件之间的垂直距离"></code>
<code src="./demos/SpaceGap.tsx" title="间距大小" description="通过设置`small`,`medium`,`large`来给定间距大小, 默认为`medium`. 需要自定义时候也可传入具体的值"></code>
<code src="./demos/SpaceWrap.tsx" title="自动换行" description="设置`wrap`自动换行"></code>
<code src="./demos/SpaceJustify.tsx" title="主轴对齐" description="设置`justify`来进行不同的主轴对齐"></code>
<code src="./demos/SpaceAlign.tsx" title="交叉轴对齐" description="设置`align`来进行不同的交叉轴对齐"></code>

## API

### Space

| 参数        | 说明                                                       | 类型                                                                             | 默认值         |
| ----------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------- |
| `direction` | 间距方向                                                   | `'horizontal' \| 'vertical'`                                                     | `'horizontal'` |
| `align`     | 交叉轴对齐方式                                             | `'start' \| 'end' \| 'center' \| 'baseline'`                                     | `'center'`     |
| `justify`   | 主轴对齐方式                                               | `'start' \| 'end' \| 'center' \| 'between' \| 'around' \| 'evenly' \| 'stretch'` | `'start'`      |
| `wrap`      | 是否自动换行                                               | `boolean`                                                                        | `false`        |
| `block`     | 是否渲染为块级元素                                         | `boolean`                                                                        | `false`        |
| `gap`       | 间距大小, 设为数组时则分别设置垂直方向和水平方向的间距大小 | [Gap](#gap) \| [[Gap, Gap]](#gap)                                                | `'medium'`     |

### Gap

间距大小有以下几个值可参考: `'small' | 'medium' | 'large' | number | string`

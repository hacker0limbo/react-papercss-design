---
title: Button
demo:
  cols: 2
group:
  title: 通用
  order: 1
toc: content
---

# Button 按钮

按钮用于开始一个即时操作。

参考: [Buttons](https://www.getpapercss.com/docs/components/buttons)

## 示例

<code src="./demos/ButtonBase.tsx" title="基本" description="基本的按钮, 通过设置`disabled`来禁用按钮"></code>
<code src="./demos/ButtonBlock.tsx" title="Block 按钮" description="`block`属性将使按钮适合其父宽度。"></code>
<code src="./demos/ButtonSize.tsx" title="尺寸" description="通过设置 `size`为`large`,`small`分别把按钮设为大、小尺寸。若不设置`size`，则尺寸默认为中"></code>
<code src="./demos/ButtonType.tsx" title="种类" description="通过`type`给按钮添加不同的种类"></code>
<code src="./demos/ButtonOutline.tsx" title="轮廓" description="通过`outline`给按钮添加轮廓"></code>

## API

| 参数     | 说明                         | 类型                                                             | 默认值   |
| -------- | ---------------------------- | ---------------------------------------------------------------- | -------- |
| color    | 按钮的颜色                   | `'primary'`, `'secondary'`, `'success'`, `'warning'`, `'danger'` | -        |
| size     | 按钮的尺寸, 不给值为中等大小 | `'small'`, `'large'`                                             | -        |
| block    | 是否为块级按钮               | `boolean`                                                        | `false`  |
| outline  | 是否为轮廓按钮               | `boolean`                                                        | `false`  |
| disabled | 是否禁用按钮                 | `boolean`                                                        | `false`  |
| as       | 渲染的元素                   | `React.ElementType`                                              | `button` |

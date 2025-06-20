---
title: Input
demo:
  cols: 2
group:
  title: 数据录入
  order: 4
toc: content
---

# Input 输入框

通过鼠标或键盘输入内容

## 示例

<code src="./demos/InputBase.tsx" title="基本使用" description="基本使用"></code>
<code src="./demos/InputControlled.tsx" title="受控使用" description="使用`value`和`onChange`进行受控"></code>
<code src="./demos/InputBlock.tsx" title="宽度自适应" description="使用`block`来使输入框宽度撑满"></code>
<code src="./demos/InputDisabled.tsx" title="禁用输入框" description="使用`disabled`禁用输入框"></code>

## API

| 参数         | 说明                   | 类型                                      | 默认值 |
| ------------ | ---------------------- | ----------------------------------------- | ------ |
| value        | 受控下输入框内容       | `string`                                  | -      |
| defaultValue | 非受控下输入框内容     | `string`                                  | -      |
| onChange     | 输入框内容变化时的回调 | `(value: string, e: ChangeEvent) => void` | -      |
| block        | 是否撑满父元素         | `boolean`                                 | -      |
| disabled     | 是否禁用               | `boolean`                                 | -      |

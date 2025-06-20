---
title: Textarea
demo:
  cols: 2
group:
  title: 数据录入
  order: 4
toc: content
---

# Textarea 文本区域

文本区域输入框

## 示例

<code src="./demos/TextareaBase.tsx" title="基本使用" description="基本使用"></code>
<code src="./demos/TextareaControlled.tsx" title="受控使用" description="使用`value`和`onChange`进行受控"></code>
<code src="./demos/TextareaWithoutResize.tsx" title="禁止缩放" description="使用`resize=false`来禁止缩放"></code>
<code src="./demos/TextareaDisabled.tsx" title="禁用文本区域" description="使用`disabled`禁用文本区域"></code>

## API

| 参数         | 说明                     | 类型                                      | 默认值 |
| ------------ | ------------------------ | ----------------------------------------- | ------ |
| value        | 受控下文本区域内容       | `string`                                  | -      |
| defaultValue | 非受控下文本区域内容     | `string`                                  | -      |
| onChange     | 文本区域内容变化时的回调 | `(value: string, e: ChangeEvent) => void` | -      |
| resize       | 是否允许缩放             | `boolean`                                 | `true` |
| disabled     | 是否禁用                 | `boolean`                                 | -      |

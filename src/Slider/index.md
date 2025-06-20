---
title: Slider
demo:
  cols: 2
group:
  title: 数据录入
  order: 4
toc: content
---

# Slider 滑动输入条

滑动型输入器，展示当前值

## 示例

<code src="./demos/SliderBase.tsx" title="基本使用" description="基本使用, 默认值为`50`"></code>
<code src="./demos/SliderControlled.tsx" title="受控" description="使用`value`和`onChange`进行受控"></code>
<code src="./demos/SliderBlock.tsx" title="block" description="使用`block`来使宽度撑满"></code>
<code src="./demos/SliderType.tsx" title="类型" description="使用`type`来给定不同的颜色类型, 默认为`secondary`"></code>
<code src="./demos/SliderDisabled.tsx" title="禁用" description="使用`disabled`禁用"></code>

## API

### Slider

| 参数         | 说明               | 类型                                                   | 默认值      |
| ------------ | ------------------ | ------------------------------------------------------ | ----------- |
| value        | 受控下滑动条值     | `number`                                               | -           |
| min          | 滑动条最小条值     | `number`                                               | 0           |
| max          | 滑动条最大条值     | `number`                                               | 100         |
| defaultValue | 非受控下滑动条值   | `number`                                               | 50          |
| onChange     | 滑动条值变化的回调 | `(value: number, e: ChangeEvent) => void`              | -           |
| disabled     | 是否禁用           | `boolean`                                              | -           |
| type         | 滑动条样式         | `primary`, `secondary`, `success`, `warning`, `danger` | `secondary` |

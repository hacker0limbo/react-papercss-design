---
title: Label
demo:
  cols: 2
group:
  title: 数据录入
  order: 4
toc: content
---

# Label 标签

标识控件, 用于关联 input 组件

## 示例

## API

<code src="./demos/LabelBase.tsx" title="基本" description="使用`htmlFor`关联`input`组件"></code>
<code src="./demos/LabelFormGroup.tsx" title="在 Form.Group 里" description="在`Form.Group`里使用可以不指定`htmlFor`, 默认会使用`Form.Group`的`controlId`"></code>

### Switch

| 参数    | 说明                                                                                    | 类型                  | 默认值 |
| ------- | --------------------------------------------------------------------------------------- | --------------------- | ------ |
| htmlFor | `label`的`for`属性, 不指定的情况下如果存在于`Form.Group`内, 会使用`controlId`作为默认值 | `string \| undefined` | -      |

接受剩余其他所有`<label>`组件的`props`

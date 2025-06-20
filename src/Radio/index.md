---
title: Radio
demo:
  cols: 2
group:
  title: 数据录入
  order: 4
toc: content
---

# Radio 单选框

用于在多个备选项中选中单个状态

## 示例

<code src="./demos/RadioBase.tsx" title="基本使用" description="基本使用"></code>
<code src="./demos/RadioDisabled.tsx" title="禁用" description="禁用单选框"></code>
<code src="./demos/RadioControlled.tsx" title="受控" description="使用`checked`和`onChange`进行受控"></code>
<code src="./demos/RadioGroupBase.tsx" title="组合" description="使用`Radio.Group`渲染一系列的`Radio`"></code>
<code src="./demos/RadioGroupControlled.tsx" title="组合受控" description="使用`value`和`onChange`进行受控"></code>
<code src="./demos/RadioGroupConfig.tsx" title="组合配置" description="使用`options`进行配置化"></code>

## 比较

由于`Radio`组件是单独使用的, 他和在`.form-group`下表现形式不同, 他的布局属性被设置成了`display: inline-block`而不是`display: block`

`Radio.Group`是新实现的 API, 用于罗列一系列相关的`Radio`选项. 每次只能在这些选项中选中一个

## API

### Radio

| 参数         | 说明                   | 类型                                         | 默认值 |
| ------------ | ---------------------- | -------------------------------------------- | ------ |
| checked      | 受控下单选框选中       | `boolean`                                    | -      |
| defaultValue | 非受控下单选框选中     | `boolean`                                    | -      |
| onChange     | 单选框选中变化时的回调 | `(checked: boolean, e: ChangeEvent) => void` | -      |
| disabled     | 是否禁用               | `boolean`                                    | -      |

### RadioGroup

| 参数         | 说明                     | 类型                                                                 | 默认值 |
| ------------ | ------------------------ | -------------------------------------------------------------------- | ------ |
| value        | 受控下选中某单选框的值   | `string \| number`                                                   | -      |
| defaultValue | 非受控下选中某单选框的值 | `string \| number`                                                   | -      |
| onChange     | 某单选框选中变化时的回调 | `(value: string \| number, e: ChangeEvent) => void`                  | -      |
| disabled     | 所有单选框是否均被禁用   | `boolean`                                                            | -      |
| options      | 配置方式实现             | `{ label: ReactNode, value: string \| number, disabled: boolean }[]` | -      |

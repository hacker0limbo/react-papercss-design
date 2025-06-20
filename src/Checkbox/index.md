---
title: Checkbox
demo:
  cols: 2
group:
  title: 数据录入
  order: 4
toc: content
---

# Checkbox 多选框

用于在一组可选项中进行多项选择

## 示例

<code src="./demos/CheckboxBase.tsx" title="基本使用" description="基本使用"></code>
<code src="./demos/CheckboxDisabled.tsx" title="禁用" description="禁用多选框"></code>
<code src="./demos/CheckboxControlled.tsx" title="受控" description="使用`checked`和`onChange`进行受控"></code>
<code src="./demos/CheckboxGroupBase.tsx" title="组合" description="使用`Checkbox.Group`渲染一系列的`Checkbox`"></code>
<code src="./demos/CheckboxGroupControlled.tsx" title="组合受控" description="使用`value`和`onChange`进行受控"></code>
<code src="./demos/CheckboxGroupConfig.tsx" title="组合配置" description="使用`options`进行配置化"></code>

## 比较

由于`Checkbox`组件是单独使用的, 他和在`.form-group`下表现形式不同, 他的布局属性被设置成了`display: inline-block`而不是`display: block`

`Checkbox.Group`是新实现的 API, 用于罗列一系列相关的`Checkbox`选项

## API

### Checkbox

| 参数         | 说明                   | 类型                                         | 默认值 |
| ------------ | ---------------------- | -------------------------------------------- | ------ |
| checked      | 受控下多选矿选中       | `boolean`                                    | -      |
| defaultValue | 非受控下多选框选中     | `boolean`                                    | -      |
| onChange     | 多选框选中变化时的回调 | `(checked: boolean, e: ChangeEvent) => void` | -      |
| disabled     | 是否禁用               | `boolean`                                    | -      |

### CheckboxGroup

| 参数         | 说明                     | 类型                                                                 | 默认值 |
| ------------ | ------------------------ | -------------------------------------------------------------------- | ------ |
| value        | 受控下选中某多选框的值   | `(string \| number)[]`                                               | -      |
| defaultValue | 非受控下选中某多选框的值 | `(string \| number)[]`                                               | []     |
| onChange     | 某多选框选中变化时的回调 | `(value: (string \| number)[], e: ChangeEvent) => void`              | -      |
| disabled     | 所有多选框是否均被禁用   | `boolean`                                                            | -      |
| options      | 配置方式实现             | `{ label: ReactNode, value: string \| number, disabled: boolean }[]` | -      |

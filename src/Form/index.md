---
title: Form
group:
  title: 数据录入
  order: 4
toc: content
---

# Form 表单

一系列控件集合

参考: [Forms](https://www.getpapercss.com/docs/components/forms/)

:::info{title="样式"}
PaperCSS 的表单组件样式都写在`.form-group`下面. 为了进行解耦, 所有表单组件均将样式进行了抽离或部分覆盖(例如一个明显的区别是单独使用表单组件的时候为`display: inline-block`而不是`block`). 但是在结合`Form.Group`使用的时候仍旧保持和 PaperCSS 样式一致, 不做任何修改.
:::

Form 基本使用为, 一个`Form`包含多个`Form.Group`, 每个`Form.Group`包含一组`Label`和表单组件. 可以使用`controlId`将`Label`和表单组件关联. 不给定时候默认会提供.

```tsx | pure
return (
  <Form>
    <Form.Group>
      <Label>Input</Label>
      <Input />
    </Form.Group>
    <Form.Group controlId="customId">
      <Label>Switch</Label>
      <Switch />
    </Form.Group>
  </Form>
);
```

## 示例

<code src="./demos/FormBase.tsx" title="基本" description="所有表单元素展示"></code>

## 比较

`Form`组件只是对原生的`form`进行了一层包装, 并无其他更改

## API

### Form

| 参数     | 说明                   | 类型      | 默认值 |
| -------- | ---------------------- | --------- | ------ |
| disabled | 是否禁用所有表单子元素 | `boolean` | -      |

等同于原生的`form`元素, 支持`form`所有的属性

### FormGroup

| 参数      | 说明                                                          | 类型                  | 默认值                                             |
| --------- | ------------------------------------------------------------- | --------------------- | -------------------------------------------------- |
| controlId | 提供给`Label`和表单元素的`id`属性, 不提供的话会默认给一个`id` | `string \| undefined` | [uniqId](https://lodash.com/docs/4.17.15#uniqueId) |
| as        | 渲染的元素, 默认为`div`, 可以考虑给`fieldset`                 | `React.ElementType`   | `div`                                              |

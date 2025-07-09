---
title: Modal
group:
  title: 反馈
  order: 6
toc: content
---

# Modal 对话框

模态对话框。

参考: [Modals](https://www.getpapercss.com/docs/components/modals/)

## 示例

<code src="./demos/ModalBase.tsx" title="基本" description="基本的对话框" iframe="300"></code>
<code src="./demos/ModalFooter.tsx" title="自定义页脚" description="使用`footer`自定义页脚, 如果不需要页脚可以设置为`null`" iframe="300"></code>
<code src="./demos/ModalOpen.tsx" title="静态方法" description="可以使用`Modal.open({ ... })`来快速打开一个模态框" iframe="300"></code>

## 比较

使用 React 封装的`Modal`组件和`PapcerCSS`的原始的组件有一些区别, 具体如下:

- 默认使用 [createPortal](https://react.dev/reference/react-dom/createPortal) 将`Modal`渲染到`document.body`上, 当然也可以使用`container`来自定义托管渲染的节点
- 默认给定`Modal`宽度为`480px`, `PaperCSS`默认没有给定宽度而是让其根据内容自适应. 你可以使用`width`属性来自定义模态框的宽度
- 默认情况下即使`Modal`关闭了 DOM 元素也会存在, 你可以开启`destroyOnClose`在模态框关闭时卸载 DOM. 注意这会导致**动画丢失**

## API

### Modal

| 参数           | 说明                    | 类型                                                             | 默认值          |
| -------------- | ----------------------- | ---------------------------------------------------------------- | --------------- |
| open           | 是否显示模态框          | `boolean`                                                        | -               |
| title          | 标题内容                | `React.ReactNode`                                                | -               |
| subtitle       | 副标题内容              | `React.ReactNode`                                                | -               |
| onOk           | 点击确定按钮的回调      | `(e: MouseEvent) => void`                                        | -               |
| onCancel       | 点击取消/关闭按钮的回调 | `(e: MouseEvent) => void`                                        | -               |
| footer         | 自定义底部内容          | `React.ReactNode`                                                | -               |
| container      | 指定挂载节点            | `HTMLElement \| () => HTMLElement \| null`                       | `document.body` |
| closable       | 是否显示右上角关闭按钮  | `boolean`                                                        | `true`          |
| closeLabel     | 关闭按钮内容            | `React.ReactNode`                                                | `'X'`           |
| bodyStyle      | 内容区域自定义样式      | `React.CSSProperties`                                            | -               |
| destroyOnClose | 关闭时是否卸载 DOM      | `boolean`                                                        | `false`         |
| maskClosable   | 点击遮罩是否可关闭      | `boolean`                                                        | `true`          |
| okText         | 确认按钮文本            | `string`                                                         | `'Ok'`          |
| cancelText     | 取消按钮文本            | `string`                                                         | `'Cancel'`      |
| okType         | 确认按钮类型            | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'secondary'`   |
| width          | 模态框宽度              | `string \| number`                                               | `480`           |

### Modal.open

`Modal.open`为一个函数, 可以方便快速打开一个点击确认的弹框, 参数是一个对象, 对象属性和上面的`Modal`的属性**基本一致**, 除了以下几点需要注意:

- 你不再需要提供`open`和`onCancel`状态, 该方法内部会自动管理
- `footer`样式改为只有一个按钮点击后即关闭, 同时会触发`onOk`回调, 所以可以提供一个`onOk`函数在关闭模态框时候触发
- `maskClosable`默认改为`false`, 无法点击弹框外部遮罩层关闭

| 参数         | 说明                    | 类型           | 默认值  |
| ------------ | ----------------------- | -------------- | ------- |
| ~open~       | ~不再需要提供~          | ~`boolean`~    | -       |
| ~onCancel~   | ~不再需要提供~          | ~`() => void`~ | -       |
| onOk         | 点击确定按钮的回调      | `() => void`   | -       |
| maskClosable | 点击遮罩是否可关闭      | `boolean`      | `false` |
| ...          | 剩余`Modal`的`props`... | ...            | ..      |

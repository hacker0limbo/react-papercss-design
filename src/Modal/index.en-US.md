---
title: Modal
group:
  title: Feedback
  order: 6
toc: content
---

# Modal

Modal dialog component.

Reference: [Modals](https://www.getpapercss.com/docs/components/modals/)

## Examples

<code src="./demos/ModalBase.tsx" title="Basic" description="Basic dialog" iframe="300"></code>
<code src="./demos/ModalFooter.tsx" title="Custom Footer" description="Use `footer` to customize footer, set to `null` if no footer is needed" iframe="300"></code>
<code src="./demos/ModalOpen.tsx" title="Static Methods" description="Use `Modal.open({ ... })` to quickly open a modal" iframe="300"></code>

## Comparison

The React wrapped `Modal` component has some differences from the original `PaperCSS` component, as follows:

- By default uses [createPortal](https://react.dev/reference/react-dom/createPortal) to render `Modal` to `document.body`, but you can also use `container` to customize the mount node
- By default sets `Modal` width to `480px`, while `PaperCSS` doesn't set a default width and lets it adapt to content. You can use the `width` property to customize the modal width
- By default, DOM elements exist even when `Modal` is closed. You can enable `destroyOnClose` to unmount DOM when modal closes. Note this will cause **animation loss**

## API

### Modal

| Property       | Description                                  | Type                                                             | Default         |
| -------------- | -------------------------------------------- | ---------------------------------------------------------------- | --------------- |
| open           | Whether to show modal                        | `boolean`                                                        | -               |
| title          | Title content                                | `React.ReactNode`                                                | -               |
| subtitle       | Subtitle content                             | `React.ReactNode`                                                | -               |
| onOk           | Callback when OK button is clicked           | `(e: MouseEvent) => void`                                        | -               |
| onCancel       | Callback when Cancel/Close button is clicked | `(e: MouseEvent) => void`                                        | -               |
| footer         | Custom footer content                        | `React.ReactNode`                                                | -               |
| container      | Specify mount node                           | `HTMLElement \| () => HTMLElement \| null`                       | `document.body` |
| closable       | Whether to show close button in top right    | `boolean`                                                        | `true`          |
| closeLabel     | Close button content                         | `React.ReactNode`                                                | `'X'`           |
| bodyStyle      | Custom styles for content area               | `React.CSSProperties`                                            | -               |
| destroyOnClose | Whether to unmount DOM when closed           | `boolean`                                                        | `false`         |
| maskClosable   | Whether clicking mask can close modal        | `boolean`                                                        | `true`          |
| okText         | OK button text                               | `string`                                                         | `'Ok'`          |
| cancelText     | Cancel button text                           | `string`                                                         | `'Cancel'`      |
| okType         | OK button type                               | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'secondary'`   |
| width          | Modal width                                  | `string \| number`                                               | `480`           |

### Modal.open

`Modal.open` is a function that can conveniently and quickly open a confirmation dialog. The parameter is an object whose properties are **basically the same** as the `Modal` properties above, except for the following points:

- You no longer need to provide `open` and `onCancel` state, this method manages them internally
- `footer` style is changed to have only one button that closes when clicked and triggers the `onOk` callback, so you can provide an `onOk` function to trigger when the modal closes
- `maskClosable` defaults to `false`, cannot close by clicking the mask layer outside the dialog

| Property     | Description                           | Type           | Default |
| ------------ | ------------------------------------- | -------------- | ------- |
| ~open~       | ~No longer needed~                    | ~`boolean`~    | -       |
| ~onCancel~   | ~No longer needed~                    | ~`() => void`~ | -       |
| onOk         | Callback when OK button is clicked    | `() => void`   | -       |
| maskClosable | Whether clicking mask can close modal | `boolean`      | `false` |
| ...          | Remaining `Modal` `props`...          | ...            | ..      |

---
title: Button
demo:
  cols: 2
group:
  title: General
  order: 1
toc: content
---

# Button

Button is used to trigger an immediate action.

Reference: [Buttons](https://www.getpapercss.com/docs/components/buttons)

## Examples

<code src="./demos/ButtonBase.tsx" title="Basic" description="Basic button, use `disabled` to disable the button"></code>
<code src="./demos/ButtonBlock.tsx" title="Block Button" description="The `block` property will make the button fit its parent width."></code>
<code src="./demos/ButtonSize.tsx" title="Size" description="Set `size` to `large` or `small` to make the button large or small. If `size` is not set, the default size is medium"></code>
<code src="./demos/ButtonType.tsx" title="Type" description="Use `type` to add different types to buttons"></code>
<code src="./demos/ButtonOutline.tsx" title="Outline" description="Use `outline` to add outline to buttons"></code>

## API

| Property | Description                               | Type                                                             | Default  |
| -------- | ----------------------------------------- | ---------------------------------------------------------------- | -------- |
| color    | Button color                              | `'primary'`, `'secondary'`, `'success'`, `'warning'`, `'danger'` | -        |
| size     | Button size, default is medium if not set | `'small'`, `'large'`                                             | -        |
| block    | Whether it's a block button               | `boolean`                                                        | `false`  |
| outline  | Whether it's an outline button            | `boolean`                                                        | `false`  |
| disabled | Whether the button is disabled            | `boolean`                                                        | `false`  |
| as       | Element to render                         | `React.ElementType`                                              | `button` |

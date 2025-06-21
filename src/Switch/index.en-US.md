---
title: Switch
demo:
  cols: 2
group:
  title: Data Entry
  order: 4
toc: content
---

# Switch

Switch selector component.

## Examples

<code src="./demos/SwitchBase.tsx" title="Basic" description="Basic usage"></code>
<code src="./demos/SwitchType.tsx" title="Different Types" description="Use `type` and `round` to render different types of switches"></code>
<code src="./demos/SwitchControlled.tsx" title="Controlled" description="Use `checked` and `onChange` for controlled mode"></code>
<code src="./demos/SwitchDisabled.tsx" title="Disabled" description="Use `disabled` to disable the switch"></code>
<code src="./demos/SwitchTileBase.tsx" title="Tile Component" description="Use `Switch.Tile` to display flippable switches"></code>
<code src="./demos/SwitchTileType.tsx" title="Type" description="Use `checkedType` and `unCheckedType` to set different types"></code>
<code src="./demos/SwitchTileControlled.tsx" title="Controlled" description="Use `checked` and `onChange` for controlled mode"></code>

## Comparison

Since the `Switch` component is used standalone, it behaves differently from when it's under `.form-group`. Its layout property is set to `display: inline-block` instead of `display: block`.

## API

### Switch

| Property       | Description                              | Type                                         | Default     |
| -------------- | ---------------------------------------- | -------------------------------------------- | ----------- |
| type           | Switch type                              | `'default' \| 'inline'`                      | `'default'` |
| checked        | Whether switch is checked (controlled)   | `boolean`                                    | -           |
| defaultChecked | Whether switch is checked (uncontrolled) | `boolean`                                    | `false`     |
| disabled       | Whether disabled                         | `boolean`                                    | -           |
| round          | Whether rounded                          | `boolean`                                    | -           |
| onChange       | State change callback                    | `(checked: boolean, e: ChangeEvent) => void` | -           |

### SwitchTile

| Property         | Description                              | Type                                                             | Default     |
| ---------------- | ---------------------------------------- | ---------------------------------------------------------------- | ----------- |
| checked          | Whether switch is checked (controlled)   | `boolean`                                                        | -           |
| defaultChecked   | Whether switch is checked (uncontrolled) | `boolean`                                                        | `false`     |
| checkedContent   | Content when checked                     | `React.ReactNode`                                                | -           |
| checkedType      | Background type when checked             | `'primary'`, `'secondary'`, `'success'`, `'warning'`, `'danger'` | `'primary'` |
| unCheckedContent | Content when unchecked                   | `React.ReactNode`                                                | -           |
| unCheckedType    | Background type when unchecked           | `'primary'`, `'secondary'`, `'success'`, `'warning'`, `'danger'` | -           |
| onChange         | State change callback                    | `(checked: boolean, e: ChangeEvent) => void`                     | -           |
| bordered         | Whether to show border                   | `boolean`                                                        | `true`      |

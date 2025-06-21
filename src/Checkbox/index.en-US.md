---
title: Checkbox
demo:
  cols: 2
group:
  title: Data Entry
  order: 4
toc: content
---

# Checkbox

Used for multiple selections from a set of options

## Examples

<code src="./demos/CheckboxBase.tsx" title="Basic Usage" description="Basic usage"></code>
<code src="./demos/CheckboxDisabled.tsx" title="Disabled" description="Disable checkbox"></code>
<code src="./demos/CheckboxControlled.tsx" title="Controlled" description="Use `checked` and `onChange` for controlled mode"></code>
<code src="./demos/CheckboxGroupBase.tsx" title="Group" description="Use `Checkbox.Group` to render a series of `Checkbox`es"></code>
<code src="./demos/CheckboxGroupControlled.tsx" title="Group Controlled" description="Use `value` and `onChange` for controlled mode"></code>
<code src="./demos/CheckboxGroupConfig.tsx" title="Group Configuration" description="Use `options` for configuration"></code>

## Comparison

Since the `Checkbox` component is used standalone, it behaves differently from when it's under `.form-group`. Its layout property is set to `display: inline-block` instead of `display: block`.

`Checkbox.Group` is a newly implemented API for listing a series of related `Checkbox` options.

## API

### Checkbox

| Property     | Description                                | Type                                         | Default |
| ------------ | ------------------------------------------ | -------------------------------------------- | ------- |
| checked      | Whether checkbox is checked (controlled)   | `boolean`                                    | -       |
| defaultValue | Whether checkbox is checked (uncontrolled) | `boolean`                                    | -       |
| onChange     | Callback when checkbox state changes       | `(checked: boolean, e: ChangeEvent) => void` | -       |
| disabled     | Whether disabled                           | `boolean`                                    | -       |

### CheckboxGroup

| Property     | Description                              | Type                                                                 | Default |
| ------------ | ---------------------------------------- | -------------------------------------------------------------------- | ------- |
| value        | Selected checkbox values (controlled)    | `(string \| number)[]`                                               | -       |
| defaultValue | Selected checkbox values (uncontrolled)  | `(string \| number)[]`                                               | []      |
| onChange     | Callback when checkbox selection changes | `(value: (string \| number)[], e: ChangeEvent) => void`              | -       |
| disabled     | Whether all checkboxes are disabled      | `boolean`                                                            | -       |
| options      | Configuration mode implementation        | `{ label: ReactNode, value: string \| number, disabled: boolean }[]` | -       |

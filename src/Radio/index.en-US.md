---
title: Radio
demo:
  cols: 2
group:
  title: Data Entry
  order: 4
toc: content
---

# Radio

Used to select a single state from multiple options

## Examples

<code src="./demos/RadioBase.tsx" title="Basic Usage" description="Basic usage"></code>
<code src="./demos/RadioDisabled.tsx" title="Disabled" description="Disable radio"></code>
<code src="./demos/RadioControlled.tsx" title="Controlled" description="Use `checked` and `onChange` for controlled mode"></code>
<code src="./demos/RadioGroupBase.tsx" title="Group" description="Use `Radio.Group` to render a series of `Radio`s"></code>
<code src="./demos/RadioGroupControlled.tsx" title="Group Controlled" description="Use `value` and `onChange` for controlled mode"></code>
<code src="./demos/RadioGroupConfig.tsx" title="Group Configuration" description="Use `options` for configuration"></code>

## Comparison

Since the `Radio` component is used standalone, it behaves differently from when it's under `.form-group`. Its layout property is set to `display: inline-block` instead of `display: block`.

`Radio.Group` is a newly implemented API for listing a series of related `Radio` options. Only one option can be selected at a time.

## API

### Radio

| Property     | Description                             | Type                                         | Default |
| ------------ | --------------------------------------- | -------------------------------------------- | ------- |
| checked      | Whether radio is checked (controlled)   | `boolean`                                    | -       |
| defaultValue | Whether radio is checked (uncontrolled) | `boolean`                                    | -       |
| onChange     | Callback when radio state changes       | `(checked: boolean, e: ChangeEvent) => void` | -       |
| disabled     | Whether disabled                        | `boolean`                                    | -       |

### RadioGroup

| Property     | Description                           | Type                                                                 | Default |
| ------------ | ------------------------------------- | -------------------------------------------------------------------- | ------- |
| value        | Selected radio value (controlled)     | `string \| number`                                                   | -       |
| defaultValue | Selected radio value (uncontrolled)   | `string \| number`                                                   | -       |
| onChange     | Callback when radio selection changes | `(value: string \| number, e: ChangeEvent) => void`                  | -       |
| disabled     | Whether all radios are disabled       | `boolean`                                                            | -       |
| options      | Configuration mode implementation     | `{ label: ReactNode, value: string \| number, disabled: boolean }[]` | -       |

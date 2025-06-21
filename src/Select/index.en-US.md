---
title: Select
demo:
  cols: 2
group:
  title: Data Entry
  order: 4
toc: content
---

# Select

Dropdown selection component

## Examples

<code src="./demos/SelectBase.tsx" title="Basic Usage" description="Basic usage, first option selected by default"></code>
<code src="./demos/SelectControlled.tsx" title="Controlled" description="Use `value` and `onChange` for controlled mode"></code>
<code src="./demos/SelectDisabled.tsx" title="Disabled" description="Disable the dropdown"></code>
<code src="./demos/SelectConfig.tsx" title="Configurable" description="Use `options` for configuration"></code>

## API

### Select

| Property     | Description                          | Type                                      | Default |
| ------------ | ------------------------------------ | ----------------------------------------- | ------- |
| value        | Dropdown content (controlled)        | `string`                                  | -       |
| defaultValue | Dropdown content (uncontrolled)      | `string`                                  | -       |
| onChange     | Callback when dropdown value changes | `(value: string, e: ChangeEvent) => void` | -       |
| disabled     | Whether disabled                     | `boolean`                                 | -       |
| options      | Configuration mode                   | `{ label: string, value: string }[]`      | -       |

### SelectOption

Supports all attributes of the `<option>` tag. Note that when using `options` for configuration, content uses the `label` property.

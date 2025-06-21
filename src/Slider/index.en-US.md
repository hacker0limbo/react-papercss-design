---
title: Slider
demo:
  cols: 2
group:
  title: Data Entry
  order: 4
toc: content
---

# Slider

A sliding input component that displays the current value

## Examples

<code src="./demos/SliderBase.tsx" title="Basic Usage" description="Basic usage, default value is `50`"></code>
<code src="./demos/SliderControlled.tsx" title="Controlled" description="Use `value` and `onChange` for controlled mode"></code>
<code src="./demos/SliderBlock.tsx" title="Block" description="Use `block` to make width fill parent"></code>
<code src="./demos/SliderType.tsx" title="Type" description="Use `type` to set different color types, default is `secondary`"></code>
<code src="./demos/SliderDisabled.tsx" title="Disabled" description="Use `disabled` to disable the slider"></code>

## API

### Slider

| Property     | Description                        | Type                                                   | Default     |
| ------------ | ---------------------------------- | ------------------------------------------------------ | ----------- |
| value        | Slider value (controlled)          | `number`                                               | -           |
| min          | Minimum value of slider            | `number`                                               | 0           |
| max          | Maximum value of slider            | `number`                                               | 100         |
| defaultValue | Slider value (uncontrolled)        | `number`                                               | 50          |
| onChange     | Callback when slider value changes | `(value: number, e: ChangeEvent) => void`              | -           |
| disabled     | Whether disabled                   | `boolean`                                              | -           |
| type         | Slider style type                  | `primary`, `secondary`, `success`, `warning`, `danger` | `secondary` |

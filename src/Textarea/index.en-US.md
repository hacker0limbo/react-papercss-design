---
title: Textarea
demo:
  cols: 2
group:
  title: Data Entry
  order: 4
toc: content
---

# Textarea

Textarea input component for multi-line text

## Examples

<code src="./demos/TextareaBase.tsx" title="Basic Usage" description="Basic usage"></code>
<code src="./demos/TextareaControlled.tsx" title="Controlled Usage" description="Use `value` and `onChange` for controlled mode"></code>
<code src="./demos/TextareaWithoutResize.tsx" title="Disable Resize" description="Use `resize=false` to disable resizing"></code>
<code src="./demos/TextareaDisabled.tsx" title="Disabled Textarea" description="Use `disabled` to disable the textarea"></code>

## API

| Property     | Description                            | Type                                      | Default |
| ------------ | -------------------------------------- | ----------------------------------------- | ------- |
| value        | Textarea content (controlled)          | `string`                                  | -       |
| defaultValue | Textarea content (uncontrolled)        | `string`                                  | -       |
| onChange     | Callback when textarea content changes | `(value: string, e: ChangeEvent) => void` | -       |
| resize       | Whether to allow resizing              | `boolean`                                 | `true`  |
| disabled     | Whether disabled                       | `boolean`                                 | -       |

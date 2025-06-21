---
title: Input
demo:
  cols: 2
group:
  title: Data Entry
  order: 4
toc: content
---

# Input

Input content through mouse or keyboard

## Examples

<code src="./demos/InputBase.tsx" title="Basic Usage" description="Basic usage"></code>
<code src="./demos/InputControlled.tsx" title="Controlled Usage" description="Use `value` and `onChange` for controlled mode"></code>
<code src="./demos/InputBlock.tsx" title="Auto Width" description="Use `block` to make input width fill parent"></code>
<code src="./demos/InputDisabled.tsx" title="Disabled Input" description="Use `disabled` to disable input"></code>

## API

| Property     | Description                         | Type                                      | Default |
| ------------ | ----------------------------------- | ----------------------------------------- | ------- |
| value        | Input content (controlled)          | `string`                                  | -       |
| defaultValue | Input content (uncontrolled)        | `string`                                  | -       |
| onChange     | Callback when input content changes | `(value: string, e: ChangeEvent) => void` | -       |
| block        | Whether to fill parent element      | `boolean`                                 | -       |
| disabled     | Whether disabled                    | `boolean`                                 | -       |

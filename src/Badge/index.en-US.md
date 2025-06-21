---
title: Badge
group:
  title: Data Display
  order: 5
toc: content
---

# Badge

Small labels for marking and categorization.

Reference: [Badges](https://www.getpapercss.com/docs/components/badges/)

## Examples

<code src="./demos/BadgeBase.tsx" title="Basic" description="Badges with different colors"></code>
<code src="./demos/BadgeWithParent.tsx" title="Size" description="Auto-adapts size when used with parent elements"></code>
<code src="./demos/BadgeClosable.tsx" title="Closable Badge" description="Use `closable` to show close button, `onClose` callback function to dynamically control deletion"></code>

## API

| Property   | Description                           | Type                                                             | Default |
| ---------- | ------------------------------------- | ---------------------------------------------------------------- | ------- |
| type       | Style type                            | `'primary'`, `'secondary'`, `'success'`, `'warning'`, `'danger'` | -       |
| closable   | Whether to show close button          | `boolean`                                                        | `false` |
| onClose    | Callback when close button is clicked | `(e: MouseEvent) => void`                                        | -       |
| closeLabel | Text for close button                 | `React.ReactNode`                                                | `'X'`   |
| disabled   | Whether the badge is disabled         | `boolean`                                                        | `false` |

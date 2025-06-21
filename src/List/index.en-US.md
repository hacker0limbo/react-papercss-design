---
title: List
group:
  title: Data Display
  order: 5
toc: content
---

# List

List display component. Simply wraps native list elements to support tree-like syntax.

Reference: [Lists](https://www.getpapercss.com/docs/content/lists/)

## Examples

<code src="./demos/ListOrdered.tsx" title="Ordered List" description="Display ordered list by default"></code>
<code src="./demos/ListUnordered.tsx" title="Unordered List" description="Use `ordered=false` to display as unordered list"></code>

## API

### List

| Property | Description               | Type                      | Default |
| -------- | ------------------------- | ------------------------- | ------- |
| ordered  | Whether it's ordered list | `boolean`                 | `true`  |
| items    | List item content         | [`ListItem[]`](#listitem) | -       |

### ListItem

| Property | Description               | Type                      | Default |
| -------- | ------------------------- | ------------------------- | ------- |
| label    | Text content of list item | `string`                  | -       |
| children | Sub list items            | [`ListItem[]`](#listitem) | -       |

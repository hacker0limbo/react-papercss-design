---
title: Flexbox
group:
  title: Layout
  order: 2
toc: content
---

# Flexbox Grid Layout

Assists with page-level overall layout.

Reference: [Flexbox](https://www.getpapercss.com/docs/layout/flexbox/)

Excerpt from PaperCSS original documentation:

> The flexgrid is a grid system that supports up to 12 columns per row. Because it uses flexbox (rather than just %widths), we also get the benefit of the fun parts of flexbox like alignment in more complex ways than normal.

## Examples

<code src="./demos/FlexboxBase.tsx" title="Basic" description="Basic layout" iframe="1500"></code>

## API

### Row

| Property | Description          | Type                                         | Default |
| -------- | -------------------- | -------------------------------------------- | ------- |
| justify  | Main axis alignment  | `'right' \| 'center' \| 'edges' \| 'spaces'` | -       |
| align    | Cross axis alignment | `'top' \| 'middle' \| 'bottom'`              | -       |

### Col

| Property | Description                     | Type                            | Default |
| -------- | ------------------------------- | ------------------------------- | ------- |
| span     | Number of columns to occupy     | `number`                        | -       |
| sm       | Columns for small screens       | `number`                        | -       |
| md       | Columns for medium screens      | `number`                        | -       |
| lg       | Columns for large screens       | `number`                        | -       |
| xs       | Columns for extra small screens | `number`                        | -       |
| fill     | Auto fill remaining space       | `boolean`                       | -       |
| align    | Vertical alignment              | `'top' \| 'middle' \| 'bottom'` | -       |

---
title: Typography
group:
  title: General
  order: 1
toc: content
---

# Typography

Basic formatting for text.

Reference:

- [Typography](https://www.getpapercss.com/docs/content/typography/)
- [Code](https://www.getpapercss.com/docs/content/code/)
- [Colors](https://www.getpapercss.com/docs/utilities/colors/)

## Examples

<code src="./demos/TypographyBase.tsx" title="Basic" description="Display document samples"></code>
<code src="./demos/TypographyType.tsx" title="Colors and Background" description="Different colors and background colors"></code>

## API

### Typography

All components share the following properties

| Property       | Description      | Type                                                            | Default |
| -------------- | ---------------- | --------------------------------------------------------------- | ------- |
| textType       | Text color       | `primary`, `secondary`, `success`, `warning`, `danger`, `muted` | -       |
| backgroundType | Background color | `primary`, `secondary`, `success`, `warning`, `danger`, `muted` | -       |

### Typography.Text

Renders as `span` element

### Typography.Paragraph

Renders as `p` element

### Typography.Title

Renders as `h(1-6)` element

| Property | Description                                                        | Type                         | Default |
| -------- | ------------------------------------------------------------------ | ---------------------------- | ------- |
| level    | Importance level, equivalent to `h1`, `h2`, `h3`, `h4`, `h5`, `h6` | `1`, `2`, `3`, `4`, `5`, `6` | `1`     |

### Typography.Link

Renders as `a` element

### Typography.Code

Renders as `code` element

### Typography.CodeBlock

Renders as `pre` element

### Typography.KBD

Renders as `kbd` element

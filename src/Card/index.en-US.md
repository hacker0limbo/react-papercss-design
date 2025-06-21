---
title: Card
demo:
  cols: 2
group:
  title: Data Display
  order: 5
toc: content
---

# Card

A general-purpose card container component.

Reference: [Cards](https://www.getpapercss.com/docs/components/cards/)

## Examples

<code src="./demos/CardBase.tsx" title="Basic" description="Complete card example"></code>
<code src="./demos/CardImg.tsx" title="Image" description="Images can be placed at the top or bottom"></code>
<code src="./demos/CardLinks.tsx" title="Links" description="Cards containing links"></code>
<code src="./demos/CardHeaderFooter.tsx" title="Header and Footer" description="Cards with header and footer"></code>

## API

### Card

| Property | Description       | Type                | Default |
| -------- | ----------------- | ------------------- | ------- |
| as       | Element to render | `React.ElementType` | `div`   |

### CardBody

| Property | Description       | Type                | Default |
| -------- | ----------------- | ------------------- | ------- |
| as       | Element to render | `React.ElementType` | `div`   |

### CardFooter

| Property | Description       | Type                | Default |
| -------- | ----------------- | ------------------- | ------- |
| as       | Element to render | `React.ElementType` | `div`   |

### CardHeader

| Property | Description       | Type                | Default |
| -------- | ----------------- | ------------------- | ------- |
| as       | Element to render | `React.ElementType` | `div`   |

### CardImg

| Property  | Description       | Type                | Default |
| --------- | ----------------- | ------------------- | ------- |
| as        | Element to render | `React.ElementType` | `img`   |
| placement | Image placement   | `'top' \| 'bottom'` | -       |

### CardLink

| Property | Description       | Type                | Default |
| -------- | ----------------- | ------------------- | ------- |
| as       | Element to render | `React.ElementType` | `a`     |

### CardTitle

| Property | Description       | Type                | Default |
| -------- | ----------------- | ------------------- | ------- |
| as       | Element to render | `React.ElementType` | `h4`    |

### CardSubtitle

| Property | Description       | Type                | Default |
| -------- | ----------------- | ------------------- | ------- |
| as       | Element to render | `React.ElementType` | `h5`    |

### CardText

| Property | Description       | Type                | Default |
| -------- | ----------------- | ------------------- | ------- |
| as       | Element to render | `React.ElementType` | `p`     |

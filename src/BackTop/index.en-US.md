---
title: BackTop
demo:
  cols: 2
group:
  title: Other
  order: 7
toc: content
---

# BackTop

Used to return to the top of the page

## Examples

<code src="./demos/BackTopBase.tsx" title="Basic" description="Basic back to top" transform="true"></code>

## API

| Property         | Description                                       | Type                     | Default |
| ---------------- | ------------------------------------------------- | ------------------------ | ------- |
| target           | Element to bind scroll event listener             | `RefObject<HTMLElement>` | -       |
| visibilityHeight | Show button when scroll height reaches this value | `number`                 | `400`   |

---
title: Breadcrumb
demo:
  cols: 2
group:
  title: Navigation
  order: 3
toc: content
---

# Breadcrumb

Display the current page's location within a navigational hierarchy and provide the ability to navigate back to parent levels.

Reference: [Breadcrumb](https://www.getpapercss.com/docs/components/breadcrumb/)

## Examples

<code src="./demos/BreadcrumbBase.tsx" title="Basic" description="Most basic breadcrumb usage"></code>
<code src="./demos/BreadcrumbConfig.tsx" title="Configurable" description="Use `items` to configure breadcrumb content"></code>

## API

### Breadcrumb

| Property | Description        | Type                                  | Default |
| -------- | ------------------ | ------------------------------------- | ------- |
| bordered | Whether has border | `boolean`                             | `true`  |
| items    | Configuration mode | [`BreadcrumbItem[]`](#breadcrumbitem) | -       |

### BreadcrumbItem

| Property | Description                                        | Type              | Default |
| -------- | -------------------------------------------------- | ----------------- | ------- |
| content  | Same as children but mainly used for configuration | `React.ReactNode` | -       |
| active   | Whether it's the current active item               | `boolean`         | `false` |
| href     | Link URL                                           | `string`          | -       |
| target   | Link target                                        | `string`          | -       |
| children | Child nodes                                        | `React.ReactNode` | -       |
| title    | Link title                                         | `string`          | -       |

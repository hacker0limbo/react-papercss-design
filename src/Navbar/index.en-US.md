---
title: Navbar
group:
  title: Navigation
  order: 3
toc: content
---

# Navbar

A navigation menu list that provides navigation for pages and functionality

Reference: [Navbar](https://www.getpapercss.com/docs/components/navbar/)

## Examples

<code src="./demos/NavbarBase.tsx" title="Basic" description="Configurable navigation menu" transform="true"></code>

## API

### Navbar

| Property    | Description                         | Type                          | Default |
| ----------- | ----------------------------------- | ----------------------------- | ------- |
| brand       | Title or Logo                       | `string \| React.ReactNode`   | -       |
| bordered    | Whether to show border              | `boolean`                     | `true`  |
| fixed       | Whether fixed at top                | `boolean`                     | `true`  |
| splitNav    | Whether to split navigation         | `boolean`                     | `true`  |
| navbarItems | Content on the right side of navbar | [`NavbarItem[]`](#navbaritem) | -       |

### NavbarItem

| Property | Description              | Type     | Default |
| -------- | ------------------------ | -------- | ------- |
| label    | Text content of nav item | `string` | -       |

Supports all other attributes of the `a` tag, such as `href`, `target`, etc.

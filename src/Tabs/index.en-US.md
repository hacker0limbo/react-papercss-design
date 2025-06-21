---
title: Tabs
group:
  title: Data Display
  order: 5
toc: content
---

# Tabs

Tab switching component.

Reference: [Tabs](https://www.getpapercss.com/docs/components/tabs/)

## Examples

<code src="./demos/TabsBase.tsx" title="Basic" description="Use `defaultActiveKey` for uncontrolled configuration"></code>
<code src="./demos/TabsControlled.tsx" title="Controlled" description="Controlled component usage"></code>
<code src="./demos/TabsConfigured.tsx" title="Configurable" description="Use `items` for configuration"></code>

## API

### Tabs

| Property         | Description                                       | Type                            | Default |
| ---------------- | ------------------------------------------------- | ------------------------------- | ------- |
| defaultActiveKey | Key of the default active tab                     | `React.Key`                     | -       |
| activeKey        | Key of the currently active tab (controlled mode) | `React.Key`                     | -       |
| onTabChange      | Callback function when switching tabs             | `(key: React.Key) => void`      | -       |
| items            | Configuration for tab content                     | [`TabPaneItem[]`](#tabpaneitem) | -       |
| destroyOnHidden  | Destroy collapsed hidden panels                   | `boolean`                       | false   |

### TabPaneItem

| Property | Description              | Type              | Default |
| -------- | ------------------------ | ----------------- | ------- |
| tabKey   | Unique identifier of tab | `React.Key`       | -       |
| title    | Title of the tab         | `string`          | -       |
| children | Content of the tab       | `React.ReactNode` | -       |

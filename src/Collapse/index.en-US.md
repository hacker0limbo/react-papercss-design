---
title: Collapse
group:
  title: Data Display
  order: 5
toc: content
---

# Collapse

Content area that can be collapsed/expanded.

Reference: [Collapsible](https://www.getpapercss.com/docs/components/collapsible/)

## Examples

<code src="./demos/CollapseBase.tsx" title="Basic" description="Use `defaultActiveKey` for uncontrolled configuration"></code>
<code src="./demos/CollapseControlled.tsx" title="Controlled" description="Controlled mode"></code>
<code src="./demos/CollapseAccordion.tsx" title="Accordion" description="Accordion mode, only one panel can be opened at a time"></code>
<code src="./demos/CollapseConfigured.tsx" title="Configurable" description="Use `items` for configuration"></code>

## API

### Collapse

| Property         | Description                                                                              | Type                                      | Default |
| ---------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------- | ------- |
| defaultActiveKey | Key of the panel expanded by default                                                     | `React.Key \| React.Key[]`                | -       |
| activeKey        | Key of the currently expanded panel (controlled mode)                                    | `React.Key \| React.Key[]`                | -       |
| onCollapseChange | Callback function when toggling panels                                                   | `(key: React.Key \| React.Key[]) => void` | -       |
| accordion        | Whether it's accordion mode, only one panel can be expanded in accordion mode            | `boolean`                                 | false   |
| items            | Configuration for collapse content                                                       | [`CollapsePaneItem[]`](#collapsepaneitem) | -       |
| destroyOnHidden  | Destroy collapsed hidden panels (Note: will lose expand/collapse animation when enabled) | `boolean`                                 | false   |

### CollapsePaneItem

| Property    | Description                | Type              | Default |
| ----------- | -------------------------- | ----------------- | ------- |
| collapseKey | Unique identifier of panel | `React.Key`       | -       |
| header      | Title of the panel         | `string`          | -       |
| children    | Content of the panel       | `React.ReactNode` | -       |

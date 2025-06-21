---
title: Alert
demo:
  cols: 2
group:
  title: Feedback
  order: 6
toc: content
---

# Alert

Alert component to display important information that needs attention.

Reference: [Alerts](https://www.getpapercss.com/docs/components/alerts/)

## Examples

<code src="./demos/AlertBase.tsx" title="Basic" description="The simplest usage"></code>
<code src="./demos/AlertDismissible.tsx" title="Dismissible" description="Display close button, click to dismiss the alert"></code>
<code src="./demos/AlertCustomClose.tsx" title="Custom Close" description="Customize the close functionality, custom text will replace the default close icon"></code>

## Comparison

There are some differences between the React-wrapped `Alert` component and the original `PaperCSS` component:

- In PaperCSS Alert, when `dismissible` is enabled and closed, the element is only hidden but the DOM element still exists. The redesigned component behavior is changed to: **the component will be destroyed after closing, meaning the DOM element no longer exists**.

## API

| Property    | Description                           | Type                                                   | Default   |
| ----------- | ------------------------------------- | ------------------------------------------------------ | --------- |
| type        | Component style                       | `primary`, `secondary`, `success`, `warning`, `danger` | `primary` |
| onClose     | Callback when close button is clicked | `(e: MouseEvent) => void`                              | -         |
| afterClose  | Callback after close animation ends   | `() => void`                                           | -         |
| dismissible | Whether the alert can be dismissed    | `boolean`                                              | `false`   |
| closeLabel  | Text for the close button             | `React.ReactNode`                                      | `X`       |

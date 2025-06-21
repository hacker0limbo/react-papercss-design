---
title: Progress
demo:
  cols: 2
group:
  title: Feedback
  order: 6
toc: content
---

# Progress

Display the current progress of an operation.

Reference: [Progress](https://www.getpapercss.com/docs/components/progress/)

## Examples

<code src="./demos/ProgressBase.tsx" title="Basic" description="Basic progress bar"></code>
<code src="./demos/ProgressStriped.tsx" title="Striped Type" description="Display striped progress bar by setting `striped`"></code>
<code src="./demos/ProgressInfo.tsx" title="Show Value" description="Show value with `showInfo` property, customize display content with `format` property"></code>
<code src="./demos/ProgressDynamic.tsx" title="Dynamic Display" description="An animated progress bar is a good progress bar"></code>

## API

| Property | Description                    | Type                                                            | Default                                    |
| -------- | ------------------------------ | --------------------------------------------------------------- | ------------------------------------------ |
| type     | Progress bar type              | `primary`, `secondary`, `success`, `warning`, `danger`, `muted` | `default`                                  |
| percent  | Progress bar percentage        | `number`                                                        | `0`                                        |
| showInfo | Whether to show progress value | `boolean`                                                       | `false`                                    |
| format   | Template function for content  | `(percent: number) => string`                                   | `` `(percent: number) => `${percent} %` `` |
| striped  | Whether to show striped type   | `boolean`                                                       | `false`                                    |

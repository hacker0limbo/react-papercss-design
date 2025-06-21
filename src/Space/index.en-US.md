---
title: Space
demo:
  cols: 2
group:
  title: Layout
  order: 2
toc: content
---

# Space

Set spacing between components.

## Examples

<code src="./demos/SpaceHorizontal.tsx" title="Horizontal Spacing" description="Horizontal distance between adjacent components"></code>
<code src="./demos/SpaceVertical.tsx" title="Vertical Spacing" description="Vertical distance between adjacent components"></code>
<code src="./demos/SpaceGap.tsx" title="Spacing Size" description="Set spacing size by setting `small`, `medium`, `large`, default is `medium`. You can also pass specific values when customization is needed"></code>
<code src="./demos/SpaceWrap.tsx" title="Auto Wrap" description="Set `wrap` for automatic line wrapping"></code>
<code src="./demos/SpaceJustify.tsx" title="Main Axis Alignment" description="Set `justify` for different main axis alignments"></code>
<code src="./demos/SpaceAlign.tsx" title="Cross Axis Alignment" description="Set `align` for different cross axis alignments"></code>

## API

### Space

| Property  | Description                                                                        | Type                                                                             | Default        |
| --------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------- |
| direction | Spacing direction                                                                  | `'horizontal' \| 'vertical'`                                                     | `'horizontal'` |
| align     | Cross axis alignment                                                               | `'start' \| 'end' \| 'center' \| 'baseline'`                                     | `'center'`     |
| justify   | Main axis alignment                                                                | `'start' \| 'end' \| 'center' \| 'between' \| 'around' \| 'evenly' \| 'stretch'` | `'start'`      |
| wrap      | Whether to wrap automatically                                                      | `boolean`                                                                        | `false`        |
| block     | Whether to render as block element                                                 | `boolean`                                                                        | `false`        |
| gap       | Spacing size. When set as array, sets vertical and horizontal spacing respectively | [Gap](#gap) \| [[Gap, Gap]](#gap)                                                | `'medium'`     |

### Gap

The spacing size has the following values for reference: `'small' | 'medium' | 'large' | number | string`

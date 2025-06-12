---
title: Progress
demo:
  cols: 2
group:
  title: 反馈
  order: 6
toc: content
---

# Progress 进度条

展示操作的当前进度。

参考: [Progress](https://www.getpapercss.com/docs/components/progress/)

## 示例

<code src="./demos/ProgressBase.tsx" title="基本" description="基本的进度条"></code>
<code src="./demos/ProgressStriped.tsx" title="条纹类型" description="通过设置`striped`显示为条纹类型的进度条"></code>
<code src="./demos/ProgressInfo.tsx" title="显示数值" description="通过`showInfo`属性显示数值, `format`属性自定义显示的内容"></code>
<code src="./demos/ProgressDynamic.tsx" title="动态展示" description="会动的进度条才是好进度条"></code>

## API

| 参数     | 说明             | 类型                                                            | 默认值                                     |
| -------- | ---------------- | --------------------------------------------------------------- | ------------------------------------------ |
| type     | 进度条类型       | `primary`, `secondary`, `success`, `warning`, `danger`, `muted` | `default`                                  |
| percent  | 进度条百分比     | `number`                                                        | `0`                                        |
| showInfo | 是否显示进度数值 | `boolean`                                                       | `false`                                    |
| format   | 内容的模板函数   | `(percent: number) => string`                                   | `` `(percent: number) => `${percent} %` `` |
|          |
| striped  | 是否展示波纹类型 | `boolean`                                                       | `false`                                    |

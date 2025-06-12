---
title: Collapse
group:
  title: 数据展示
  order: 5
toc: content
---

# Collapse 折叠面板

可以折叠/展开的内容区域。

参考: [Collapsible](https://www.getpapercss.com/docs/components/collapsible/)

## 示例

<code src="./demos/CollapseBase.tsx" title="基本" description="使用`defaultActiveKey`进行非受控配置"></code>
<code src="./demos/CollapseControlled.tsx" title="受控" description="受控模式"></code>
<code src="./demos/CollapseAccordion.tsx" title="手风琴" description="手风琴模式, 每次只打开一个面板"></code>
<code src="./demos/CollapseConfigured.tsx" title="可配置的" description="使用`items`进行配置化"></code>

## API

### Collapse

| 参数             | 说明                                                | 类型                                      | 默认值 |
| ---------------- | --------------------------------------------------- | ----------------------------------------- | ------ |
| defaultActiveKey | 默认展开的面板的 key                                | `React.Key \| React.Key[]`                | -      |
| activeKey        | 当前展开的面板(受控模式)的 key                      | `React.Key \| React.Key[]`                | -      |
| onCollapseChange | 切换选项卡时的回调函数                              | `(key: React.Key \| React.Key[]) => void` | -      |
| accordion        | 是否是手风琴模式, 手风琴模式下只能展开一个面板      | `boolean`                                 | false  |
| items            | 配置化选项卡内容                                    | [`CollapsePaneItem[]`](#collapsepaneitem) | -      |
| destroyOnHidden  | 销毁折叠隐藏的面板(注意: 开启后会丢失展开/折叠动画) | `boolean`                                 | false  |

### CollapsePaneItem

| 参数        | 说明           | 类型        | 默认值 |
| ----------- | -------------- | ----------- | ------ |
| collapseKey | 面板的唯一标识 | `React.Key` | -      |
| header      | 面板的标题     | `string`    | -      |
| children    | 面板的内容     | `ReactNode` | -      |

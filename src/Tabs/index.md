---
title: Tabs
group:
  title: 数据展示
  order: 5
toc: content
---

# Tabs 标签页

选项卡切换组件。

参考: [Tabs](https://www.getpapercss.com/docs/components/tabs/)

## 示例

<code src="./demos/TabsBase.tsx" title="基本" description="使用`defaultActiveKey`进行非受控配置"></code>
<code src="./demos/TabsControlled.tsx" title="受控" description="受控组件用法"></code>
<code src="./demos/TabsConfigured.tsx" title="可配置的" description="使用`items`进行配置化"></code>

## API

### Tabs

| 参数             | 说明                             | 类型                            | 默认值 |
| ---------------- | -------------------------------- | ------------------------------- | ------ |
| defaultActiveKey | 默认激活的选项卡的 key           | `React.Key`                     | -      |
| activeKey        | 当前激活的选项卡(受控模式)的 key | `React.Key`                     | -      |
| onTabChange      | 切换选项卡时的回调函数           | `(key: React.Key) => void`      | -      |
| items            | 配置化选项卡内容                 | [`TabPaneItem[]`](#tabpaneitem) | -      |
| destroyOnHidden  | 销毁折叠隐藏的面板               | `boolean`                       | false  |

### TabPaneItem

| 参数     | 说明             | 类型        | 默认值 |
| -------- | ---------------- | ----------- | ------ |
| tabKey   | 选项卡的唯一标识 | `React.Key` | -      |
| title    | 选项卡的标题     | `string`    | -      |
| children | 选项卡的内容     | `ReactNode` | -      |

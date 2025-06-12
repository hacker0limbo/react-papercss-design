---
title: Table
group:
  title: 数据展示
  order: 5
toc: content
---

# Table 表格

展示行列数据

参考: [Tables](https://www.getpapercss.com/docs/content/tables/)

## 示例

<code src="./demos/TableBase.tsx" title="基本" description="简单的表格, 可以使用`render`进行自定义展示, 添加`stripped`或者`hoverable`进行不同的样式展示"></code>

## API

### Table

| 参数       | 说明             | 类型                        | 默认值  |
| ---------- | ---------------- | --------------------------- | ------- |
| dataSource | 表格数据源       | `RecordType[]`              | `[]`    |
| columns    | 列配置           | `TableColumn<RecordType>[]` | `[]`    |
| striped    | 是否显示斑马纹   | `boolean`                   | `false` |
| hoverable  | 是否显示悬浮高亮 | `boolean`                   | `false` |

### TableColumn

| 参数      | 说明             | 类型                                        | 默认值 |
| --------- | ---------------- | ------------------------------------------- | ------ |
| title     | 列头显示内容     | `React.ReactNode`                           | -      |
| dataIndex | 数据字段         | `string`                                    | -      |
| render    | 自定义单元格渲染 | `(value, record, index) => React.ReactNode` | -      |

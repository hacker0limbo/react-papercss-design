---
title: Table
group:
  title: Data Display
  order: 5
toc: content
---

# Table

Display row and column data

Reference: [Tables](https://www.getpapercss.com/docs/content/tables/)

## Examples

<code src="./demos/TableBase.tsx" title="Basic" description="Simple table, use `render` for custom display, add `striped` or `hoverable` for different style presentations"></code>

## API

### Table

| Property   | Description                     | Type                        | Default |
| ---------- | ------------------------------- | --------------------------- | ------- |
| dataSource | Table data source               | `RecordType[]`              | `[]`    |
| columns    | Column configuration            | `TableColumn<RecordType>[]` | `[]`    |
| striped    | Whether to show zebra stripes   | `boolean`                   | `false` |
| hoverable  | Whether to show hover highlight | `boolean`                   | `false` |

### TableColumn

| Property  | Description           | Type                                        | Default |
| --------- | --------------------- | ------------------------------------------- | ------- |
| title     | Column header content | `React.ReactNode`                           | -       |
| dataIndex | Data field            | `string`                                    | -       |
| render    | Custom cell rendering | `(value, record, index) => React.ReactNode` | -       |

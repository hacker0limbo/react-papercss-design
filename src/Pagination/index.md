---
title: Pagination
group:
  title: 导航
  order: 3
toc: content
---

# Pagination 分页

采用分页的形式分隔长列表，每次只加载一个页面。

## 示例

<code src="./demos/PaginationBase.tsx" title="基本" description="基本使用" iframe="100"></code>
<code src="./demos/PaginationMore.tsx" title="更多" description="更多分页" iframe="100"></code>
<code src="./demos/PaginationPagesize.tsx" title="页码条数大小" description="使用`showSizeChanger`可以改变每页条目数" iframe="100"></code>
<code src="./demos/PaginationJumper.tsx" title="快速跳转" description="使用`showQuickJumper`可以快速跳转到指定页码" iframe="100"></code>
<code src="./demos/PaginationSize.tsx" title="尺寸" description="使用`size`属性来设置分页的尺寸, 默认为中等尺寸, 可以设置`small`或者`large`" iframe="100"></code>
<code src="./demos/PaginationSimple.tsx" title="简单" description="使用`simple`属性来设置分页为简单模式" iframe="100"></code>
<code src="./demos/PaginationControlled.tsx" title="受控" description="使用`current`和`onCurrentChange`来设置分页为受控模式" iframe="100"></code>
<code src="./demos/PaginationLabel.tsx" title="标签" description="使用`prevLabel`和`nextLabel`来设置分页的标签" iframe="100"></code>

## API

### Pagination

| 参数             | 说明                                        | 类型                         | 默认值              |
| ---------------- | ------------------------------------------- | ---------------------------- | ------------------- |
| current          | 当前页码                                    | `number`                     | -                   |
| defaultCurrent   | 默认当前页码                                | `number`                     | `1`                 |
| pageSize         | 每页条数                                    | `number`                     | -                   |
| defaultPageSize  | 默认每页条数                                | `number`                     | `10`                |
| pageSizeOptions  | 可选的每页条数                              | `number[]`                   | `[10, 20, 50, 100]` |
| showQuickJumper  | 是否显示快速跳转                            | `boolean`                    | -                   |
| showSizeChanger  | 是否显示尺寸切换, 当`total`大于 50 自动展示 | `boolean`                    | -                   |
| simple           | 是否为简单分页                              | `boolean`                    | -                   |
| size             | 尺寸大小                                    | `Size`                       | `default`           |
| total            | 总条数                                      | `number`                     | `0`                 |
| onCurrentChange  | 当前页码变化时的回调                        | `(current: number) => void`  | -                   |
| onPageSizeChange | 每页条数变化时的回调                        | `(pageSize: number) => void` | -                   |
| disabled         | 是否禁用                                    | `boolean`                    | -                   |
| prevLabel        | 上一页按钮的标签                            | `React.ReactNode`            | -                   |
| nextLabel        | 下一页按钮的标签                            | `React.ReactNode`            | -                   |

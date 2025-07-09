---
title: Pagination
group:
  title: Navigation
  order: 3
toc: content
---

# Pagination

A long list can be divided into several pages using Pagination, and only one page will be loaded at a time.

## Examples

<code src="./demos/PaginationBase.tsx" title="Basic" description="Basic usage" iframe="100"></code>
<code src="./demos/PaginationMore.tsx" title="More Pages" description="Pagination with more pages" iframe="100"></code>
<code src="./demos/PaginationPagesize.tsx" title="Page Size Options" description="Use `showSizeChanger` to change the number of items per page" iframe="100"></code>
<code src="./demos/PaginationJumper.tsx" title="Quick Jump" description="Use `showQuickJumper` to quickly jump to a specific page" iframe="100"></code>
<code src="./demos/PaginationSize.tsx" title="Size" description="Use the `size` property to set the pagination size. Default is medium size, can be set to `small` or `large`" iframe="100"></code>
<code src="./demos/PaginationSimple.tsx" title="Simple" description="Use the `simple` property to set pagination to simple mode" iframe="100"></code>
<code src="./demos/PaginationControlled.tsx" title="Controlled" description="Use `current` and `onCurrentChange` to set pagination to controlled mode" iframe="100"></code>
<code src="./demos/PaginationLabel.tsx" title="Labels" description="Use `prevLabel` and `nextLabel` to set pagination labels" iframe="100"></code>

## API

### Pagination

| Property         | Description                                                         | Type                         | Default             |
| ---------------- | ------------------------------------------------------------------- | ---------------------------- | ------------------- |
| current          | Current page number                                                 | `number`                     | -                   |
| defaultCurrent   | Default current page number                                         | `number`                     | `1`                 |
| pageSize         | Number of items per page                                            | `number`                     | -                   |
| defaultPageSize  | Default number of items per page                                    | `number`                     | `10`                |
| pageSizeOptions  | Available options for page size                                     | `number[]`                   | `[10, 20, 50, 100]` |
| showQuickJumper  | Whether to show quick jumper                                        | `boolean`                    | -                   |
| showSizeChanger  | Whether to show size changer, automatically shown when `total` > 50 | `boolean`                    | -                   |
| simple           | Whether to use simple pagination                                    | `boolean`                    | -                   |
| size             | Size of pagination                                                  | `Size`                       | `default`           |
| total            | Total number of items                                               | `number`                     | `0`                 |
| onCurrentChange  | Callback when current page changes                                  | `(current: number) => void`  | -                   |
| onPageSizeChange | Callback when page size changes                                     | `(pageSize: number) => void` | -                   |
| disabled         | Whether pagination is disabled                                      | `boolean`                    | -                   |
| prevLabel        | Label for the previous page button                                  | `React.ReactNode`            | -                   |
| nextLabel        | Label for the next page button                                      | `React.ReactNode`            | -                   |

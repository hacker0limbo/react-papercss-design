---
title: Navbar
group:
  title: 导航
  order: 3
toc: content
---

# Navbar 导航菜单

为页面和功能提供导航的菜单列表

参考: [Navbar](https://www.getpapercss.com/docs/components/navbar/)

## 示例

<code src="./demos/NavbarBase.tsx" title="基本" description="可配置化的导航菜单" transform="true"></code>

## API

### Navbar

| 参数        | 说明             | 类型                          | 默认值 |
| ----------- | ---------------- | ----------------------------- | ------ |
| brand       | 标题或 Logo      | `string \| React.ReactNode`   | -      |
| bordered    | 是否显示边框     | `boolean`                     | `true` |
| fixed       | 是否固定在顶部   | `boolean`                     | `true` |
| splitNav    | 是否分割导航栏   | `boolean`                     | `true` |
| navbarItems | 导航栏右侧的内容 | [`NavbarItem[]`](#navbaritem) | -      |

### NavbarItem

| 参数  | 说明             | 类型     | 默认值 |
| ----- | ---------------- | -------- | ------ |
| label | 导航项的文本内容 | `string` | -      |

支持`a`标签的其他所有的属性, 例如`href`, `target`等

---
title: ConfigProvider
group:
  title: 其他
  order: 7
toc: content
---

# ConfigProvider 全局配置

为组件提供统一的全局化配置。

## 使用

ConfigProvider 使用 React 的 [context](https://legacy.reactjs.org/docs/context.html) 特性，只需在应用外围包裹一次即可全局生效。

```jsx | pure
import React from 'react';
import { ConfigProvider } from 'react-papercss-design';

// ...
const Demo = () => (
  <ConfigProvider theme="light" locale="zh-CN">
    <App />
  </ConfigProvider>
);

export default Demo;
```

全局化配置请参考:

- [主题](../../docs/guide/theme.md)
- [国际化](../../docs/guide/i18n.md)

## API

| 参数   | 说明       | 类型                 | 默认值    |
| ------ | ---------- | -------------------- | --------- |
| theme  | 主题       | `'light' \| 'dark'`  | `'light'` |
| locale | 国际化配置 | `'en-US' \| 'zh-CN'` | `'en-US'` |

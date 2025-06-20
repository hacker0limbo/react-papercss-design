---
title: ConfigProvider
group:
  title: 其他
  order: 7
toc: content
---

# ConfigProvider

为组件提供统一的全局化配置。

## 使用

ConfigProvider 使用 React 的 [context](https://legacy.reactjs.org/docs/context.html) 特性，只需在应用外围包裹一次即可全局生效。

```jsx | pure
import React from 'react';
import { ConfigProvider } from 'react-papercss-design';

// ...
const Demo = () => (
  <ConfigProvider theme="light">
    <App />
  </ConfigProvider>
);

export default Demo;
```

更多主题相关的请参考: [主题](../../docs/guide/theme.md)

## API

| 参数  | 说明 | 类型                | 默认值    |
| ----- | ---- | ------------------- | --------- |
| theme | 主题 | `'light' \| 'dark'` | `'light'` |

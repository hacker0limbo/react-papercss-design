---
title: ConfigProvider
group: 其他
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
  <ConfigProvider theme="dark">
    <App />
  </ConfigProvider>
);

export default Demo;
```

## 示例

<code src="./demos/ConfigProviderTheme.tsx"></code>

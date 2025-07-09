---
title: ConfigProvider
group:
  title: Other
  order: 7
toc: content
---

# ConfigProvider

Provides unified global configuration for components.

## Usage

ConfigProvider uses React's [context](https://legacy.reactjs.org/docs/context.html) feature. Simply wrap it around your application once to take effect globally.

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

For more global configuration information, please refer to:

- [Theme](../../docs/guide/theme.en-US.md)
- [Internationalization](../../docs/guide/i18n.en-US.md)

## API

| Property | Description | Type                 | Default   |
| -------- | ----------- | -------------------- | --------- |
| theme    | Theme       | `'light' \| 'dark'`  | `'light'` |
| locale   | Locale      | `'en-US' \| 'zh-CN'` | `'en-US'` |

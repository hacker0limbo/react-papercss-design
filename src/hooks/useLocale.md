---
title: useLocale
toc: content
---

# useLocale

获取当前语言, 设置当前语言

使用时候请确保你的组件被包裹在`ConfigProvider`里. 具体用法可以查看: [ConfigProvider](../ConfigProvider/index.md)

更多国际化相关内容可参考: [国际化](../../docs/guide/i18n.md)

## 示例

```tsx | pure
import React from 'react';
import { useLocale } from 'react-papercss-design';

// Assume App is wrapped inside <ConfigProvider>
const App: React.FC = () => {
  const { locale, setLocale } = useLocale();

  console.log(locale); // 'en-US'
  setLocale('zh-CN'); // 设置语言为中文

  return (
    // ...
  )
}

export default App
```

## API

### 返回值

| 属性      | 说明           | 类型                       | 默认值    |
| --------- | -------------- | -------------------------- | --------- |
| locale    | 当前语言       | `'en-US' \| 'zh-CN'`       | `'en-US'` |
| setLocale | 设置语言的函数 | `(locale: Locale) => void` | -         |

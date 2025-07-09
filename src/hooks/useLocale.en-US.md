---
title: useLocale
toc: content
---

# useLocale

Get current locale and set current locale

When using this hook, please ensure your component is wrapped inside `ConfigProvider`. For specific usage, see: [ConfigProvider](../ConfigProvider/index.en-US.md)

For more internationalization related content, please refer to: [Internationalization](../../docs/guide/i18n.en-US.md)

## Example

```tsx | pure
import React from 'react';
import { useLocale } from 'react-papercss-design';

// Assume App is wrapped inside <ConfigProvider>
const App: React.FC = () => {
  const { locale, setLocale } = useLocale();

  console.log(locale); // 'en-US'
  setLocale('zh-CN'); // Set language to Chinese

  return (
    // ...
  )
}

export default App
```

## API

### Return Value

| Property  | Description            | Type                       | Default   |
| --------- | ---------------------- | -------------------------- | --------- |
| locale    | Current locale         | `'en-US' \| 'zh-CN'`       | `'en-US'` |
| setLocale | Function to set locale | `(locale: Locale) => void` | -         |

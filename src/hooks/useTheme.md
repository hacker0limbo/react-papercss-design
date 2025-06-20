---
title: useTheme
toc: content
---

# useTheme

获取当前主题, 设置当前主题, 以及获取主题`tokens`

使用时候请确保你的组件被包裹在`ConfigProvider`里. 具体用法可以查看: [ConfigProvider](../ConfigProvider/index.md)

更多主题相关内容可参考: [主题](../../docs/guide/theme.md)

## 示例

```tsx | pure
import React from 'react';
import { useTheme } from 'react-papercss-design';

// Assume App is wrapped inside <ConfigProvider>
const App: React.FC = () => {
  const { theme, setTheme, tokens } = useTheme

  console.log(theme) // light
  console.log(tokens.primary) // '#41403e'

  return (
    // ...
  )
}

export default App
```

## API

### 返回值

| 属性     | 说明               | 类型                                          | 默认值    |
| -------- | ------------------ | --------------------------------------------- | --------- |
| theme    | 当前主题           | `'light' \| 'dark'`                           | `'light'` |
| setTheme | 设置主题的函数     | `(theme: Theme) => void`                      | -         |
| tokens   | 当前主题的设计令牌 | `{ primary: string, secondary: string, ... }` | -         |

tokens 可参考: https://github.com/papercss/papercss/blob/master/dist/paper.css#L7

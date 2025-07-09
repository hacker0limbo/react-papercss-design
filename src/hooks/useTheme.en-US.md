---
title: useTheme
toc: content
---

# useTheme

Get the current theme, set the current theme, and get theme `tokens`

Please ensure your component is wrapped inside `ConfigProvider` when using this hook. For specific usage, see: [ConfigProvider](../ConfigProvider/index.en-US.md)

For more theme-related details, refer to: [Theme](../../docs/guide/theme.en-US.md)

## Example

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

### Return Value

| Property | Description                    | Type                                          | Default   |
| -------- | ------------------------------ | --------------------------------------------- | --------- |
| theme    | Current theme                  | `'light' \| 'dark'`                           | `'light'` |
| setTheme | Function to set the theme      | `(theme: Theme) => void`                      | -         |
| tokens   | Design tokens of current theme | `{ primary: string, secondary: string, ... }` | -         |

For tokens reference: https://github.com/papercss/papercss/blob/master/dist/paper.css#L7

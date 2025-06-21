---
title: Theme
toc: content
order: 4
---

# Theme

PaperCSS default theme is light, could be switched to dark if needed. For details, refer to the official website: [Dark Mode](https://www.getpapercss.com/docs/utilities/dark-mode/)

> As of version 1.8.0, PaperCSS supports a dark mode of the framework. Just add the .dark class to your html tag!

## Manual Switching

Change to dark mode by setting `class="dark"` on the `html` element. You might want to use `JavaScript` to achieve:

```js | pure
// Set to dark mode
document.documentElement.classList.add('dark');

// Set to light mode
document.documentElement.classList.remove('dark');
```

## Dynamic Theme

:::success{title="Try it!"}
This documentation has been adapted for dynamic theme switching. Click the lamp icon on the upper right corner to switch between different theme modes!
:::

In addition to the above methods, you can configure [ConfigProvider](../../src/ConfigProvider/index.md) and use [useTheme](../../src/hooks/useTheme.md) for dynamic theme switching

```jsx | pure
// App.js
export default () => {
  return (
    <ConfigProvider theme="light">
      <SomeComponent />
    </ConfigProvider>
  )
}

// SomeComponent.js
export default () => {
  const { theme, setTheme } = useTheme()

  return (
    <Button onClick={() => setTheme('dark')}>
      Dark Mode
    </Button>
  )
}
```

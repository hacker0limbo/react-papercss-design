---
title: 主题
toc: content
order: 4
---

# 主题

PaperCSS 默认主题为亮色, 也可以设置为暗黑色. 具体可以参考官网: [Dark Mode](https://www.getpapercss.com/docs/utilities/dark-mode/)

> As of version 1.8.0, PaperCSS supports a dark mode of the framework. Just add the .dark class to your html tag!

## 手动切换

通过给`html`设置`class="dark"`来改变成暗黑色. 或者使用`JavaScript`来操作:

```js | pure
// 设置为暗黑色
document.documentElement.classList.add('dark');

// 设置为亮色
document.documentElement.classList.remove('dark');
```

## 动态主题

:::success{title="试一试!"}
本文档已经适配了动态主题切换, 点击右上角的小灯可以进行不同主题模式的切换哦
:::

除了以上的方法外可以通过配置 [ConfigProvider](../../src/ConfigProvider/index.md) 以及使用 [useTheme](../../src/hooks/useTheme.md) 进行动态主题的切换

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

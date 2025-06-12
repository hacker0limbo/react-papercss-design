---
title: 快速上手
toc: content
---

# 开始

React PaperCSS 是基于 [PaperCSS](https://www.getpapercss.com/) 二次分装的一个 React UI 组件库

## 安装

React PaperCSS 默认并不包含 PaperCSS, 请确保先安装 PaperCSS

:::code-group

```bash [npm]
$ npm install papercss react-papercss-design
```

```bash [yarn]
yarn add papercss react-papercss-design
```

:::

## 使用

### 基本

根文件下引入`papercss`样式, 使用 React 的方式引入`react-papercss-design`组件即可

```jsx | pure
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Button } from 'react-papercss-design';

import 'papercss/dist/paper.min.css'; // or import 'papercss/dist/paper.css';

const App = () => {
  return (
    <>
      <Button onClick={() => console.log('Hello react papercss design!')} color="primary">
        PaperCSS
      </Button>
    </>
  );
};

createRoot(document.getElementById('root')).render(<App />);
```

### 更多用法

你可以在组件页面的左侧菜单查看组件列表. 组件文档中提供了各类演示, 最下方有组件 API 文档可以查阅. 在代码演示部分找到第一个例子, 点击右下角的图标展开代码. 可以直接在展开的代码里进行编辑, 效果会实时进行展示.

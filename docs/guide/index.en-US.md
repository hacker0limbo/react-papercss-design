---
title: Getting Started
toc: content
order: 1
---

# Getting Started

React PaperCSS is a React UI component library based on [PaperCSS](https://www.getpapercss.com/)

## Installation

React PaperCSS does not include PaperCSS by default, please make sure install PaperCSS first

:::code-group

```bash [npm]
$ npm install papercss react-papercss-design
```

```bash [yarn]
yarn add papercss react-papercss-design
```

:::

## Usage

### Basic

Import `papercss` styles in your root file, then you are able to use `react-papercss-design` components in the React way

```jsx | pure
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Button } from 'react-papercss-design';

import 'papercss/dist/paper.min.css'; // or import 'papercss/dist/paper.css';

const App = () => {
  return (
    <Button type="primary" onClick={() => console.log('Hello react papercss design!')}>
      PaperCSS
    </Button>
  );
};

createRoot(document.getElementById('root')).render(<App />);
```

### More Usage

:::success{title="Live Editing Demo"}
After expanding the example code, you can edit them directly and the effects will be displayed in real time!
:::

You can view the component list in the left menu of the component pages. The component documentation provides various demonstrations. Component API documentation is located at the bottom for reference.

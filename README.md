<p align="center">
  <a href="https://hacker0limbo.github.io/react-papercss-design" target="_blank">
    <img alt="React PaperCSS Design Logo" width="200" src="./public/favicon.png" />
  </a>

  <h3 align="center">React PaperCSS Design</h3>

  <div align="center">

[![npm (tag)](https://img.shields.io/npm/v/react-papercss-design)](https://www.npmjs.com/package/react-papercss-design) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-papercss-design) [![GitHub](https://img.shields.io/github/license/hacker0limbo/react-papercss-design)](https://github.com/hacker0limbo/react-papercss-design/blob/master/LICENSE)

  </div>

</p>

English | [简体中文](./README.zh-CN.md)

React PaperCSS Design is a UI component library based on [PaperCSS](https://getpapercss.com)

## 🎉 Features

- A set of high-quality React components out of the box.
- Written in TypeScript with predictable static types.
- Consistent API and UI with PaperCSS

## 📦 Installation

Note that React PaperCSS Design does not come with PaperCSS, so please make sure install it as well

```shell
npm i papercss react-papercss-design
```

```shell
yarn add papercss react-papercss-design
```

## Usage

```tsx
import 'papercss/dist/paper.min.css';
import React from 'react';
import { Button } from 'react-papercss-design';

const App: React.FC = () => {
  return <Button>Hello React PaperCSS Design</Button>;
};

export default App;
```

## Contributing

Contributing is welcome. Read [CONTRIBUTING](./CONTRIBUTING.md) for more details

## Thanks

This project is inspired by:

- [PaperCSS](https://getpapercss.com)
- [Spaper](https://oli8.github.io/spaper/)

## License

The MIT License. Please see [the license file](./LICENSE) for more information.

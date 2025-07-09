# CONTRIBUTING

Welcome to contribute! Please take a moment to read this guide before getting started.

## Development Guide

Please ensure that Node.js is installed. After cloning the project, use `npm install` to install dependencies, then use `npm run dev` to start the project.

```bash
npm install
npm run dev
# open http://localhost:8000
```

This project integrates component library compilation and documentation, so no additional work is needed. You can check `package.json` for more information.

## Tech Stack

This project uses the following tech stack:

- [dumi](https://github.com/umijs/dumi) for generating static documentation. Similar to [Docusaurus](https://docusaurus.io/) or [Storybook](https://storybook.js.org/)
- [father](https://github.com/umijs/father) for component library bundling
- [React-JSS](https://cssinjs.org/react-jss/) for component library styling
- [ahooks](https://ahooks.js.org/) commonly used hooks
- [clsx](https://github.com/lukeed/clsx) utility library for fast `className` manipulation
- [lodash](https://lodash.com/docs/4.17.15) utility library

## Project Structure

<Tree>
  <ul>
    <li>
      src
      <small>Component directory</small>
      <ul>
        <li>
          Button
          <ul>
            <li>
              demos
              <small>Component demos</small>
              <ul></ul>
            </li>
            <li>
              index.md
              <small>Component documentation</small>
            </li>
            <li>
              Button.tsx
              <small>Component source code</small>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      docs
      <small>Other page documentation</small>
    </li>
    <li>
      .dumirc.ts
      <small>Documentation related configuration</small>
    </li>
  </ul>
</Tree>

For more information, please refer to dumi documentation: [Conventional Routing](https://d.umijs.org/guide/conventional-routing)

## API Design and Component Development

The API design is primarily based on [Ant Design](https://ant.design/) and [React Bootstrap](https://react-bootstrap.netlify.app/). The styling aims to be consistent with PaperCSS. All features listed on PaperCSS are included, with additional advanced usage patterns.

Besides the components listed on the official website, there are also some components planned for development. You can check [ROADMAP](https://github.com/hacker0limbo/react-papercss-design/blob/master/ROADMAP.md) for more information.

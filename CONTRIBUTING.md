# CONTRIBUTING

欢迎参与开发, 请在开始前花一点时间阅读这篇指南

## 开发指南

请确保已经安装了 Node.js, 拉取项目以后使用`npm install`安装依赖, 随后使用`npm run dev`开启项目

```bash
npm install
npm run dev
# open http://localhost:8000
```

该项目集合了组件库编译和文档, 因此无需再做别的工作, 您可以查看`package.json`查看更多信息

## 技术栈

该项目使用了如下技术栈:

- [dumi](https://github.com/umijs/dumi) 用于生成静态文档. 类似于 [Docusaurus](https://docusaurus.io/) 或者 [Storybook](https://storybook.js.org/)
- [father](https://github.com/umijs/father) 用于组件库的打包
- [React-JSS](https://cssinjs.org/react-jss/) 用于组件库的样式编写
- [ahooks](https://ahooks.js.org/) 常用的 hooks
- [clsx](https://github.com/lukeed/clsx) 快速操作`className`的工具库
- [lodash](https://lodash.com/docs/4.17.15) 工具库

## 项目结构

<Tree>
  <ul>
    <li>
      src
      <small>组件目录</small>
      <ul>
        <li>
          Button
          <ul>
            <li>
              demos
              <small>组件 demos</small>
              <ul></ul>
            </li>
            <li>
              index.md
              <small>组件文档</small>
            </li>
            <li>
              Button.tsx
              <small>组件源码</small>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      docs
      <small>其他页面文档</small>
    </li>
    <li>
      .dumirc.ts
      <small>文档相关配置</small>
    </li>
  </ul>
</Tree>

更多请参考 dumi 的文档: [约定式路由](https://d.umijs.org/guide/conventional-routing)

## API 设计和组件编写

API 设计主要参考了 [Ant Design](https://ant.design/) 和 [React Bootstrap](https://react-bootstrap.netlify.app/). 样式上尽量做到和 PaperCSS 一致. 所有 PaperCSS 上列举的功能均包含在内, 并添加了一些高级用法

除了官网上罗列的组件外, 还有一些组件计划开发中, 你可以查看 [ROADMAP](https://github.com/hacker0limbo/react-papercss-design/blob/master/ROADMAP.md) 获取更多信息

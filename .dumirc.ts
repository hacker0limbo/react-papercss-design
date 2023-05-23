import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/react-papercss-design/',
  publicPath: '/react-papercss-design/',
  exportStatic: {},
  resolve: {
    atomDirs: [
      { type: 'components', dir: 'src' },
      { type: 'hooks', dir: 'src/hooks' },
    ],
  },
  outputPath: 'docs-dist',
  styleLoader: {},
  cssLoader: {},
  locales: [
    {
      id: 'zh-CN',
      name: '中文',
    },
    {
      id: 'en-US',
      name: 'English',
    },
  ],
  themeConfig: {
    // name: 'react papercss',
    nav: {
      'zh-CN': [
        { title: '起步', link: '/guide' },
        { title: '组件', link: '/components/alert' },
        { title: 'Hooks', link: '/hooks/a' },
      ],
      'en-US': [
        { title: 'Get Started', link: '/en-US/guide' },
        { title: 'Components', link: '/en-US/components/alert' },
      ],
    },
    socialLinks: {
      github: 'https://github.com/hacker0limbo/react-papercss-design',
    },
  },
});

import { defineConfig } from 'dumi';

export default defineConfig({
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

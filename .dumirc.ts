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
  favicons: ['/react-papercss-design/favicon.png'],
  themeConfig: {
    // name: 'react papercss',
    logo: '/react-papercss-design/favicon.png',
    nav: {
      'zh-CN': [
        { title: '起步', link: '/guide' },
        { title: '组件', link: '/components/article' },
        { title: 'Hooks', link: '/hooks/intro' },
      ],
      'en-US': [
        { title: 'Get Started', link: '/en-US/guide' },
        { title: 'Components', link: '/en-US/components/article' },
        { title: 'Hooks', link: '/en-US/hooks/intro' },
      ],
    },
    socialLinks: {
      github: 'https://github.com/hacker0limbo/react-papercss-design',
    },
  },
});

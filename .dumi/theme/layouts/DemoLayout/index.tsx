import { useLocale, useOutlet, usePrefersColor } from 'dumi';
import React, { useEffect } from 'react';
import { ConfigProvider, type Locale, hooks } from 'react-papercss-design';

const loadPaperCSSFromCDN = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    const paperCSSLink = 'https://unpkg.com/papercss/dist/paper.min.css';
    const link = document.createElement('link');

    if (document.querySelector(`link[href="${paperCSSLink}"]`)) {
      return resolve();
    }

    link.rel = 'stylesheet';
    link.href = paperCSSLink;
    link.onload = () => resolve();
    link.onerror = () => reject();

    document.head.appendChild(link);
  });
};

/**
 * 当点击外部链接时候会打开新页面展示, 这时候是没有加载 papercss 的, 需要手动注入样式
 * 注意, iframe 模式下也会使用这个组件
 */
const DemoLayout: React.FC = () => {
  const outlet = useOutlet();
  const [color] = usePrefersColor();
  const locale = useLocale();
  const { tokens, theme } = hooks.useTheme();

  useEffect(() => {
    // @ts-ignore
    import('papercss/dist/paper.min.css')
      .then(() => {
        console.log('load local papercss success');
      })
      .catch(() => {
        loadPaperCSSFromCDN();
      });
  }, []);

  useEffect(() => {
    if (theme) {
      document.body.style.backgroundColor = tokens.mainBackground;
    }
  }, [theme]);

  return (
    <ConfigProvider theme={color} locale={locale.id as Locale}>
      {outlet}
    </ConfigProvider>
  );
};

export default DemoLayout;

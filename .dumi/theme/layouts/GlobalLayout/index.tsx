import { useLocale, useOutlet, usePrefersColor } from 'dumi';
import { ConfigProvider, type Locale } from 'react-papercss-design';

// reference: https://d.umijs.org/theme/api#usepreferscolor
const GlobalLayout: React.FC = () => {
  const outlet = useOutlet();
  const [color] = usePrefersColor();
  const locale = useLocale();

  return (
    <ConfigProvider theme={color} locale={locale.id as Locale}>
      {outlet}
    </ConfigProvider>
  );
};

export default GlobalLayout;

import { useOutlet, usePrefersColor } from 'dumi';
import { ConfigProvider } from 'react-papercss-design';

// reference: https://d.umijs.org/theme/api#usepreferscolor
const GlobalLayout: React.FC = () => {
  const outlet = useOutlet();
  const [color] = usePrefersColor();

  return <ConfigProvider theme={color}>{outlet}</ConfigProvider>;
};

export default GlobalLayout;

/**
 * title: 主题
 * description: 默认为亮色主题, 可配置为暗色主题, 同时可通过配合 `useTheme`
 */
import { ConfigProvider, hooks, Space, Switch } from 'react-papercss-design';

const App = () => {
  const { theme, setTheme, tokens } = hooks.useTheme();

  return (
    <div style={{ background: tokens.primaryInverse, padding: 20 }}>
      <Space gap="small">
        <span>{theme}:</span>
        <Switch
          type="inline"
          round
          onChange={(checked) => {
            setTheme(checked ? 'dark' : 'light');
          }}
        />
      </Space>
    </div>
  );
};

export default () => {
  return (
    <ConfigProvider theme="light">
      <App />
    </ConfigProvider>
  );
};

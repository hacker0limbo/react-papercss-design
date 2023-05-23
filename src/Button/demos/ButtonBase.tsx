/**
 * title: 基本
 * description: 按钮基本的样式。
 */
import { Button, Space } from 'react-papercss-design';

export default () => {
  return (
    <Space>
      <Button>Default Button</Button>
      <Button disabled>Disabled Button</Button>
      <Button tag="a" href="https://www.getpapercss.com/">
        Link Button
      </Button>
    </Space>
  );
};

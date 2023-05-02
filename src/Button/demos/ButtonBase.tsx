/**
 * title: 基本
 * description: 按钮基本的样式。
 */
import { Button } from 'react-papercss-design';

export default () => {
  return (
    <p>
      <Button>Default Button</Button>&nbsp;
      <Button disabled>Disabled Button</Button>&nbsp;
      <Button tag="a" href="https://www.getpapercss.com/">
        Link Button
      </Button>
    </p>
  );
};

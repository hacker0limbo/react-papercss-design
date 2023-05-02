/**
 * title: 风格
 * description: 不同风格的组件
 */
import { Switch } from 'react-papercss-design';

export default () => {
  return (
    <>
      <p>Default style</p>
      <div>
        Square switch: <Switch defaultChecked />
      </div>
      <div>
        Circle switch: <Switch type="default" round />
      </div>

      <p>Inline style</p>
      <div>
        Square switch: <Switch defaultChecked type="inline" />
      </div>
      <div>
        Circle switch: <Switch type="inline" round />
      </div>
    </>
  );
};

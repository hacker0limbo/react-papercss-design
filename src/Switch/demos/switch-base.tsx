/**
 * title: 基本
 * description: 非受控组件下最简单的用法。
 */
import { Switch } from 'react-papercss-design';

export default () => {
  return (
    <Switch
      defaultChecked
      onChange={(checked) => {
        console.log(`switch to ${checked}`);
      }}
    />
  );
};

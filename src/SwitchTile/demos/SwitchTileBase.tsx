/**
 * title: 基本
 * description: 非受控组件下最简单的用法。
 */
import { SwitchTile } from 'react-papercss-design';

export default () => {
  return (
    <>
      <SwitchTile
        defaultChecked
        checkedChildren="Back"
        unCheckedChildren="Front"
        onChange={(checked) => {
          console.log(`switch to ${checked}`);
        }}
      />
    </>
  );
};

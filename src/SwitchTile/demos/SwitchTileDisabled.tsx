/**
 * title: 禁用
 * description: 禁用状态下的瓦片开关。
 */
import { SwitchTile } from 'react-papercss-design';

export default () => {
  return (
    <>
      <SwitchTile disabled checkedChildren="Back" unCheckedChildren="Front" />
    </>
  );
};

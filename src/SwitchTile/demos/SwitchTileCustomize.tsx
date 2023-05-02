/**
 * title: 自定义
 * description: 自定义选中和非选中的内容和样式
 */
import { SwitchTile } from 'react-papercss-design';

export default () => {
  return (
    <>
      <SwitchTile checkedChildren="Back" unCheckedChildren="Front" />
      <SwitchTile
        checkedChildren="On"
        unCheckedChildren="Off"
        unCheckedType="warning"
        checkedType="secondary"
      />
      <SwitchTile
        checkedChildren="Accepted"
        unCheckedChildren="Declined"
        unCheckedType="danger"
        checkedType="success"
      />
    </>
  );
};

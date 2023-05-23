/**
 * title: 基本
 * description: 通过`items`可配置的选项卡
 */
import { Tabs } from 'react-papercss-design';

export default () => {
  return (
    <Tabs
      defaultActiveKey="1"
      items={[
        { tabKey: '1', title: 'Tab 1', children: 'Content of Tab1' },
        { tabKey: '2', title: 'Tab 2', children: 'Content of Tab2' },
        { tabKey: '3', title: 'Tab 3', children: 'Content of Tab3' },
      ]}
    />
  );
};

/**
 * title: 基本
 * description: 不同颜色的徽标
 */
import { Badge, Space } from 'react-papercss-design';

export default () => {
  return (
    <Space>
      <Badge type="default">Default</Badge>
      <Badge type="primary">Primary</Badge>
      <Badge type="secondary">Secondary</Badge>
      <Badge type="success">Success</Badge>
      <Badge type="danger">Danger</Badge>
      <Badge type="warning">Warning</Badge>
    </Space>
  );
};

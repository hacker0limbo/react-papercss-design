import React from 'react';
import { Badge, Space } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Space wrap>
      <Badge>Default</Badge>
      <Badge type="primary">Primary</Badge>
      <Badge type="secondary">Secondary</Badge>
      <Badge type="success">Success</Badge>
      <Badge type="danger">Danger</Badge>
      <Badge type="warning">Warning</Badge>
      <Badge disabled>Disabled</Badge>
    </Space>
  );
};

export default App;

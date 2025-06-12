import React from 'react';
import { Button, Space } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Space wrap>
      <Button type="primary">Primary</Button>
      <Button type="secondary">Secondary</Button>
      <Button type="success">Success</Button>
      <Button type="warning">Warning</Button>
      <Button type="danger">Danger</Button>
    </Space>
  );
};

export default App;

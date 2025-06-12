import React from 'react';
import { Button, Space } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Space direction="vertical">
      Space
      <Button>Button</Button>
      <Button type="primary">Confirm</Button>
    </Space>
  );
};

export default App;

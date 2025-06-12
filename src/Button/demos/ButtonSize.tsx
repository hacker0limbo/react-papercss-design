import React from 'react';
import { Button, Space } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Space>
      <Button size="large">Large</Button>
      <Button>Default</Button>
      <Button size="small">Small</Button>
    </Space>
  );
};

export default App;

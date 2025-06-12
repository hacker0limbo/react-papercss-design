import React from 'react';
import { Button, Space } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Space direction="vertical">
      <Button block>Default Button</Button>
      <Button block disabled>
        Disabled Button
      </Button>
    </Space>
  );
};

export default App;

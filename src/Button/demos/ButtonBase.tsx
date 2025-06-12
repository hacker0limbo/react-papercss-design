import React from 'react';
import { Button, Space } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Space wrap>
      <Button>Default Button</Button>
      <Button asChild>
        <a href="https://www.getpapercss.com/docs/">Link</a>
      </Button>
      <Button disabled>Disabled Button</Button>
    </Space>
  );
};

export default App;

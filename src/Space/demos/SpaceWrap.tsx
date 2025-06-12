import React from 'react';
import { Button, Space } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Space gap={[8, 16]} wrap>
      {new Array(8).fill(null).map((_, index) => (
        <Button key={index}>Button</Button>
      ))}
    </Space>
  );
};

export default App;

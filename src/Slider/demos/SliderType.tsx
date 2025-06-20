import React from 'react';
import { Slider, Space } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Space direction="vertical" gap={16}>
      <Slider type="primary" />
      <Slider type="secondary" />
      <Slider type="success" />
      <Slider type="warning" />
      <Slider type="danger" />
    </Space>
  );
};

export default App;

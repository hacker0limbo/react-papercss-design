import React from 'react';
import { Progress, Space } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Space direction="vertical">
      <Progress percent={10} striped />
      <Progress percent={25} striped type="secondary" />
      <Progress percent={40} striped type="success" />
      <Progress percent={55} striped type="warning" />
      <Progress percent={75} striped type="danger" />
      <Progress percent={100} striped type="muted" />
    </Space>
  );
};

export default App;

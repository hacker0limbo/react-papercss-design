import React from 'react';
import { Progress, Space } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Space direction="vertical">
      <Progress percent={25} showInfo />
      <Progress percent={75} showInfo format={(percent) => (percent / 100).toFixed(2)} />
    </Space>
  );
};

export default App;

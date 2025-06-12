import React, { useState } from 'react';
import { Button, Progress, Space } from 'react-papercss-design';

const App: React.FC = () => {
  const [percent, setPercent] = useState(20);

  const increase = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent + 10;
      if (newPercent > 100) {
        return 100;
      }
      return newPercent;
    });
  };

  const decline = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent - 10;
      if (newPercent < 0) {
        return 0;
      }
      return newPercent;
    });
  };

  return (
    <Space direction="vertical">
      <div>
        <Button onClick={increase}>+</Button>
        <Button onClick={decline}>-</Button>
      </div>
      <Progress percent={percent} showInfo />
    </Space>
  );
};

export default App;

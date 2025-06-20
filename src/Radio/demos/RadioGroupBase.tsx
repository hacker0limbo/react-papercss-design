import React from 'react';
import { Radio } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Radio.Group defaultValue={1}>
      <Radio value={1}>Radio1</Radio>
      <Radio value={2}>Radio2</Radio>
      <Radio value={3} disabled>
        Radio3
      </Radio>
    </Radio.Group>
  );
};

export default App;

import React, { useState } from 'react';
import { Radio } from 'react-papercss-design';

const App: React.FC = () => {
  const [value, setValue] = useState<number>();

  return (
    <Radio.Group
      value={value}
      onChange={(v, e) => {
        console.log('radioGroup onChange value and event', v, e);
        setValue(v as number);
      }}
    >
      <Radio value={1}>Radio1</Radio>
      <Radio value={2}>Radio2</Radio>
      <Radio value={3} disabled>
        Radio3
      </Radio>
    </Radio.Group>
  );
};

export default App;

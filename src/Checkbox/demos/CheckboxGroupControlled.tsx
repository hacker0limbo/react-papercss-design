import React, { useState } from 'react';
import { Checkbox } from 'react-papercss-design';

const App: React.FC = () => {
  const [value, setValue] = useState<number[]>([1, 3]);

  return (
    <Checkbox.Group
      value={value}
      onChange={(v, e) => {
        console.log('checkboxGroup onChange value and event', v, e);
        setValue(v as number[]);
      }}
    >
      <Checkbox value={1}>Checkbox1</Checkbox>
      <Checkbox value={2}>Checkbox2</Checkbox>
      <Checkbox value={3} disabled>
        Checkbox3
      </Checkbox>
    </Checkbox.Group>
  );
};

export default App;

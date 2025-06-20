import React, { useState } from 'react';
import { Select } from 'react-papercss-design';

const App: React.FC = () => {
  const [value, setValue] = useState<string>('1');

  return (
    <Select
      value={value}
      onChange={(v) => {
        setValue(v);
      }}
    >
      <Select.Option value="1">Option 1</Select.Option>
      <Select.Option value="2">Option 2</Select.Option>
      <Select.Option value="3">Option 3</Select.Option>
    </Select>
  );
};

export default App;

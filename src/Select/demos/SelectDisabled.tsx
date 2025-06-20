import React from 'react';
import { Select } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Select disabled>
      <Select.Option value="1">Option 1</Select.Option>
      <Select.Option value="2">Option 2</Select.Option>
      <Select.Option value="3">Option 3</Select.Option>
    </Select>
  );
};

export default App;

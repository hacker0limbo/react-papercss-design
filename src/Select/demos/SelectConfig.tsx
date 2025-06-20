import React from 'react';
import { Select } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Select
      defaultValue="1"
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
      ]}
    />
  );
};

export default App;

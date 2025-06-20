import React from 'react';
import { Checkbox } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Checkbox.Group
      options={[
        {
          label: 'Checkbox1',
          value: 1,
        },
        {
          label: 'Checkbox2',
          value: 2,
        },
        {
          label: 'Checkbox3',
          value: 3,
          disabled: true,
        },
      ]}
    />
  );
};

export default App;

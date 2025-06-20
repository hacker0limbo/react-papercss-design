import React from 'react';
import { Radio } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Radio.Group
      options={[
        {
          label: 'Radio1',
          value: 1,
        },
        {
          label: 'Radio2',
          value: 2,
        },
        {
          label: 'Radio3',
          value: 3,
          disabled: true,
        },
      ]}
    />
  );
};

export default App;

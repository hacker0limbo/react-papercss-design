import React, { useState } from 'react';
import { Radio } from 'react-papercss-design';

const App: React.FC = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Radio
      checked={checked}
      onChange={(c, e) => {
        setChecked(c);
        console.log('radio onchange value and event:', c, e);
      }}
    >
      Controlled Radio
    </Radio>
  );
};

export default App;

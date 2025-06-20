import React, { useState } from 'react';
import { Checkbox } from 'react-papercss-design';

const App: React.FC = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      checked={checked}
      onChange={(c, e) => {
        setChecked(c);
        console.log('checkbox onchange value and event:', c, e);
      }}
    >
      Controlled Checkbox
    </Checkbox>
  );
};

export default App;

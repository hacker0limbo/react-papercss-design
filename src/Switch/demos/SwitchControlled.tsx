import React, { useState } from 'react';
import { Switch } from 'react-papercss-design';

const App: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <>
      <Switch
        checked={checked}
        onChange={(c, e) => {
          setChecked(c);
          console.log('switch onChange value and event:', c, e);
        }}
      />
      <p>checked: {checked.toString()}</p>
    </>
  );
};

export default App;

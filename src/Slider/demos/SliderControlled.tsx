import React, { useState } from 'react';
import { Slider } from 'react-papercss-design';

const App: React.FC = () => {
  const [value, setValue] = useState<number>(50);

  return (
    <>
      <Slider
        value={value}
        onChange={(v) => {
          setValue(v);
        }}
      />
      <div>value: {value}</div>
    </>
  );
};

export default App;

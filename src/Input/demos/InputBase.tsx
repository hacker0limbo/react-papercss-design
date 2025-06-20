import React from 'react';
import { Input } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Input
      onChange={(v, e) => {
        console.log('input onchange value and event', v, e);
      }}
      placeholder="Nice input"
    />
  );
};

export default App;

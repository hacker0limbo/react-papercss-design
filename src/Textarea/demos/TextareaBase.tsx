import React from 'react';
import { Textarea } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Textarea
      onChange={(v, e) => {
        console.log('textarea value and event', v, e);
      }}
      placeholder="Nice textarea"
    />
  );
};

export default App;

import React from 'react';
import { Input, Label } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <>
      <Label htmlFor="paperInput">Input</Label>
      <Input id="paperInput" />
    </>
  );
};

export default App;

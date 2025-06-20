import React from 'react';
import { Input } from 'react-papercss-design';

const App: React.FC = () => {
  const [value, setValue] = React.useState<string>('papcercss');

  return (
    <Input
      value={value}
      onChange={(v) => {
        setValue(v);
      }}
    />
  );
};

export default App;

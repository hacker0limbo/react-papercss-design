import React from 'react';
import { Textarea } from 'react-papercss-design';

const App: React.FC = () => {
  const [value, setValue] = React.useState<string>('papcercss...papcercss...papcercss...');

  return (
    <Textarea
      value={value}
      onChange={(v) => {
        setValue(v);
      }}
    />
  );
};

export default App;

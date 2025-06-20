import React from 'react';
import { Checkbox } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Checkbox.Group defaultValue={[1]}>
      <Checkbox value={1}>Checkbox1</Checkbox>
      <Checkbox value={2}>Checkbox2</Checkbox>
      <Checkbox value={3} disabled>
        Checkbox3
      </Checkbox>
    </Checkbox.Group>
  );
};

export default App;

import React, { useState } from 'react';
import { Switch } from 'react-papercss-design';

const App: React.FC = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Switch.Tile
      checked={checked}
      onChange={(c, e) => {
        setChecked(c);
        console.log('switchTile onChange value and event:', c, e);
      }}
      checkedContent="Checked"
      unCheckedContent="UnChecked"
    />
  );
};

export default App;

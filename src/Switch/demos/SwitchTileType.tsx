import React from 'react';
import { Switch } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <>
      <Switch.Tile checkedContent="Back" unCheckedContent="Front" />
      <Switch.Tile
        checkedContent="On"
        unCheckedContent="Off"
        checkedType="secondary"
        unCheckedType="warning"
      />
      <Switch.Tile
        checkedContent="Accepted"
        unCheckedContent="Declined"
        checkedType="success"
        unCheckedType="danger"
      />
    </>
  );
};

export default App;

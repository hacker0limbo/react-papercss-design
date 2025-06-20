import React from 'react';
import { Switch } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <>
      <p>Default style</p>
      <div>
        Square switch: <Switch />
      </div>
      <div>
        Circle switch: <Switch type="default" round />
      </div>

      <p>Inline style</p>
      <div>
        Square switch: <Switch type="inline" />
      </div>
      <div>
        Circle switch: <Switch type="inline" round />
      </div>
    </>
  );
};

export default App;

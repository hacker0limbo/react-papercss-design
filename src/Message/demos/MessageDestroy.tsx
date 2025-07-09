import React, { useState } from 'react';
import { Button, message } from 'react-papercss-design';

const App: React.FC = () => {
  const [keys, setKeys] = useState<React.Key[]>([]);

  return (
    <>
      <Button
        onClick={() => {
          const k = message.open({
            duration: 0,
            content: 'Persist message',
          });
          setKeys((prevKeys) => [...prevKeys, k]);
        }}
      >
        Open
      </Button>
      <Button
        disabled={!keys.length}
        onClick={() => {
          if (keys.length) {
            message.destroy(keys[keys.length - 1]);
            setKeys((prevKeys) => prevKeys.slice(0, -1));
          }
        }}
      >
        Destroy
      </Button>
      <Button
        disabled={!keys.length}
        onClick={() => {
          message.destroy();
        }}
      >
        Destroy all
      </Button>
    </>
  );
};

export default App;

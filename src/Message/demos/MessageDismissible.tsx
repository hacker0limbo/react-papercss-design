import React from 'react';
import { Button, message } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Button
      onClick={() => {
        message.open({
          dismissible: true,
          content: 'Click close to dismiss',
        });
      }}
    >
      Dismissible Message
    </Button>
  );
};

export default App;

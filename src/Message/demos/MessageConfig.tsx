import React from 'react';
import { Button, message } from 'react-papercss-design';

message.config({
  duration: 10,
  dismissible: true,
  align: 'right',
  maxCount: 3,
});

const App: React.FC = () => {
  return (
    <Button
      onClick={() => {
        message.open({
          content: 'Custom message',
        });
      }}
    >
      Open
    </Button>
  );
};

export default App;

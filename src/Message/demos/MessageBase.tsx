import React from 'react';
import { Button, message } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Button
      onClick={() => {
        message.open({
          content: 'This is a message',
          onClose: () => {
            console.log('Message closed');
          },
        });
      }}
    >
      Open Message
    </Button>
  );
};

export default App;

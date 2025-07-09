import React from 'react';
import { Button, message } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <>
      <Button
        onClick={() => {
          message.open({
            duration: 10,
            content: 'Message will close in 10 seconds',
          });
        }}
      >
        10 seconds message
      </Button>
      <Button
        onClick={() => {
          message.open({
            duration: 0,
            content: 'Message will persist',
          });
        }}
      >
        message persist
      </Button>
    </>
  );
};

export default App;

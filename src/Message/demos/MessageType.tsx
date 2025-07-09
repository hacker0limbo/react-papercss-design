import React from 'react';
import { Button, message } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <>
      <Button
        type="secondary"
        onClick={() => {
          message.info({
            content: 'Info message',
          });
        }}
      >
        Info
      </Button>
      <Button
        type="warning"
        onClick={() => {
          message.warning({
            content: 'Warning message',
          });
        }}
      >
        Warning
      </Button>
      <Button
        type="success"
        onClick={() => {
          message.success({
            content: 'Success message',
          });
        }}
      >
        Success
      </Button>
      <Button
        type="danger"
        onClick={() => {
          message.error({
            content: 'Error message',
          });
        }}
      >
        Error
      </Button>
    </>
  );
};

export default App;

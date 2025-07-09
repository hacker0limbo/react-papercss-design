import React from 'react';
import { Button, Modal } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Button
      onClick={() => {
        Modal.open({
          title: 'Modal Title',
          subtitle: 'Modal Subtitle',
          children: <p>This is an example of modal which is implemented with React</p>,
          onOk: () => {
            console.log('Modal OK clicked');
          },
        });
      }}
    >
      Open Modal
    </Button>
  );
};

export default App;

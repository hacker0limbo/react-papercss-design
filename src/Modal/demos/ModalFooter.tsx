import React, { useState } from 'react';
import { Button, Modal, Row } from 'react-papercss-design';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={showModal}>Open Modal with customized footer</Button>

      <Modal
        title="Modal Title"
        subtitle="Modal Subtitle"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={
          <Row justify="right">
            <Button onClick={handleCancel}>Close</Button>
          </Row>
        }
      >
        <p>This is an example of modal which is implemented with React</p>
      </Modal>
    </>
  );
};

export default App;

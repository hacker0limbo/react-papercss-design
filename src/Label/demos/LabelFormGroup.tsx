import React from 'react';
import { Form, Input, Label } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Form.Group controlId="formGroupInput">
      <Label>Input</Label>
      <Input />
    </Form.Group>
  );
};

export default App;

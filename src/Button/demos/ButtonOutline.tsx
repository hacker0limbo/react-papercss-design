import React from 'react';
import { Button, Space } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Space wrap>
      <Button outline type="primary">
        Primary
      </Button>
      <Button outline type="secondary">
        Secondary
      </Button>
      <Button outline type="success">
        Success
      </Button>
      <Button outline type="warning">
        Warning
      </Button>
      <Button outline type="danger">
        Danger
      </Button>
    </Space>
  );
};

export default App;

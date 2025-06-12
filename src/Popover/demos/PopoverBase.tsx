import React from 'react';
import { Button, Popover, Space } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Space wrap>
      <Popover placement="left" label="Popover on left">
        <p>Popover left position</p>
      </Popover>
      <Popover placement="top" label="Popover on top">
        <p>Popover top position</p>
      </Popover>
      <Popover placement="right" label="Popover on right">
        <p>Popover right position</p>
      </Popover>
      <Popover placement="bottom" label="Popover on bottom">
        <p>Popover bottom position</p>
      </Popover>
      <Popover placement="top" label="Popover on top">
        <Button>Popover on top and on a button!</Button>
      </Popover>
    </Space>
  );
};

export default App;

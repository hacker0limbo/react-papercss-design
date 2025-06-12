import React from 'react';
import { Breadcrumb } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Breadcrumb bordered>
      <Breadcrumb.Item href="#">Documentation</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Components</Breadcrumb.Item>
      <Breadcrumb.Item active>Breadcrumb</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default App;

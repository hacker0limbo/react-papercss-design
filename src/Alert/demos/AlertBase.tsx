import React from 'react';
import { Alert } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <>
      <Alert type="primary">Alert-primary</Alert>
      <Alert type="secondary">Alert-secondary</Alert>
      <Alert type="success">Alert-success</Alert>
      <Alert type="warning">Alert-warning</Alert>
      <Alert type="danger">Alert-danger</Alert>
    </>
  );
};

export default App;

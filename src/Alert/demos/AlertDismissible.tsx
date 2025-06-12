import React from 'react';
import { Alert } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <>
      <Alert type="primary" dismissible>
        Alert-primary
      </Alert>
      <Alert type="secondary" dismissible>
        Alert-secondary
      </Alert>
      <Alert type="success" dismissible>
        Alert-success
      </Alert>
      <Alert type="warning" dismissible>
        Alert-warning
      </Alert>
      <Alert type="danger" dismissible>
        Alert-danger
      </Alert>
    </>
  );
};

export default App;

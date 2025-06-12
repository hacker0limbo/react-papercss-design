import React from 'react';
import { Alert } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <>
      <Alert type="primary" dismissible closeLabel="Close Me">
        Alert-primary
      </Alert>
    </>
  );
};

export default App;

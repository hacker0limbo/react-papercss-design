import React from 'react';
import { Pagination } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <div style={{ padding: 20 }}>
      <Pagination simple defaultCurrent={2} total={50} />
    </div>
  );
};

export default App;

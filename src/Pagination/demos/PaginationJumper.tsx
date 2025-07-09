import React from 'react';
import { Pagination } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <div style={{ padding: 20 }}>
      <Pagination defaultCurrent={2} total={500} showQuickJumper />
    </div>
  );
};

export default App;

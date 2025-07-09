import React from 'react';
import { Pagination } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <div style={{ padding: 20 }}>
      <Pagination defaultCurrent={3} total={500} showSizeChanger />
    </div>
  );
};

export default App;

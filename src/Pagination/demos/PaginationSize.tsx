import React from 'react';
import { Pagination } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <div style={{ padding: 20 }}>
      <Pagination size="small" defaultCurrent={1} total={50} showQuickJumper showSizeChanger />
    </div>
  );
};

export default App;

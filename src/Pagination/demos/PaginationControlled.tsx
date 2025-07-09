import React, { useState } from 'react';
import { Pagination } from 'react-papercss-design';

const App: React.FC = () => {
  const [current, setCurrent] = useState(3);

  return (
    <div style={{ padding: 20 }}>
      <Pagination
        current={current}
        total={50}
        onCurrentChange={(page) => {
          console.log(`Current page: ${page}`);
          setCurrent(page);
        }}
      />
    </div>
  );
};

export default App;

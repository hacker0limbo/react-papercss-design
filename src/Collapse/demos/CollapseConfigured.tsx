import React from 'react';
import { Collapse } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Collapse
      items={[
        {
          collapseKey: '1',
          header: 'Header 1',
          children: <div>Content 1</div>,
        },
        {
          collapseKey: '2',
          header: 'Header 2',
          children: <div>Content 2</div>,
        },
        {
          collapseKey: '3',
          header: 'Header 3',
          children: <div>Content 3</div>,
        },
      ]}
    />
  );
};

export default App;

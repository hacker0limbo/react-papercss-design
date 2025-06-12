import React from 'react';
import { Breadcrumb } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Breadcrumb
      items={[
        {
          content: 'Documentation',
          href: '#',
        },
        {
          content: 'Components',
          href: '#',
        },
        {
          content: 'Breadcrumb',
          active: true,
        },
      ]}
    />
  );
};

export default App;

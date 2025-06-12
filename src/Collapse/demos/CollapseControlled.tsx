import React from 'react';
import { Collapse } from 'react-papercss-design';

const App: React.FC = () => {
  const [activeKey, setActiveKey] = React.useState<string[]>(['1', '2']);

  return (
    <Collapse
      activeKey={activeKey}
      onCollapseChange={(key) => {
        setActiveKey(key as string[]);
      }}
    >
      <Collapse.Pane header="Header 1" collapseKey="1">
        <div>Content 1</div>
      </Collapse.Pane>
      <Collapse.Pane header="Header 2" collapseKey="2">
        <div>Content 2</div>
      </Collapse.Pane>
      <Collapse.Pane header="Header 3" collapseKey="3">
        <div>Content 3</div>
      </Collapse.Pane>
    </Collapse>
  );
};

export default App;

import React, { useRef } from 'react';
import { BackTop } from 'react-papercss-design';

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div
        style={{
          width: '100%',
          height: '280px',
          overflowY: 'scroll',
          overflowX: 'hidden',
          border: '1px solid #dcdcdcff',
        }}
        ref={containerRef}
      >
        {Array.from(Array(50), () => 'scroll bottom').map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <BackTop target={containerRef} />
    </div>
  );
};

export default App;

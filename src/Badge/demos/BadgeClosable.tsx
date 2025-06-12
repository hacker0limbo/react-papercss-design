import React, { useState } from 'react';
import { Badge, Space } from 'react-papercss-design';

const App: React.FC = () => {
  const [tags, setTags] = useState<string[]>(['Unremovable', 'Tag 2', 'Disabled']);

  return (
    <Space>
      {tags.map((tag, index) => (
        <Badge
          key={tag}
          closable={index !== 0}
          disabled={index === tags.length - 1}
          onClose={() => {
            setTags(tags.filter((t) => t !== tag));
          }}
        >
          {tag}
        </Badge>
      ))}
    </Space>
  );
};

export default App;

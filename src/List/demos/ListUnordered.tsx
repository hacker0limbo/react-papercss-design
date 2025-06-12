import React from 'react';
import type { ListItem } from 'react-papercss-design';
import { List } from 'react-papercss-design';

const App: React.FC = () => {
  const data: ListItem[] = [
    { title: "Let's try this" },
    {
      title: "Let's try this again",
      children: [
        { title: 'And now we are nested' },
        {
          title: 'Pretty cool?',
          children: [
            { title: 'The list items are just text' },
            {
              title: 'From this font',
              children: [
                { title: "We'll keep going" },
                {
                  title: 'Until we hit',
                  children: [{ title: 'LEVEL 5' }],
                },
              ],
            },
          ],
        },
      ],
    },
    { title: "And now we're are the top!" },
  ];

  return <List data={data} ordered={false} />;
};

export default App;

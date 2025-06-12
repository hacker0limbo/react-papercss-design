import React from 'react';
import type { ListItem } from 'react-papercss-design';
import { List } from 'react-papercss-design';

const App: React.FC = () => {
  const data: ListItem[] = [
    { title: 'Do this' },
    { title: 'Then this' },
    { title: 'Finally this' },
    {
      title: "Then we'll go one deeper",
      children: [
        {
          title: 'Dillon',
        },
        {
          title: 'Francis',
          children: [
            {
              title: 'What if we went...',
            },
            {
              title: 'One more deeper?',
              children: [
                {
                  title: 'DJ',
                },
                {
                  title: 'Hanzel',
                  children: [
                    {
                      title: 'Five levels should be enough',
                    },
                    {
                      title: 'Right?',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    { title: "But don't forget this" },
  ];

  return <List data={data} />;
};

export default App;

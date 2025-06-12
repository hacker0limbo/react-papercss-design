import React from 'react';
import type { TabPaneItemProps } from 'react-papercss-design';
import { Tabs } from 'react-papercss-design';

const App: React.FC = () => {
  const items: TabPaneItemProps[] = [
    {
      title: 'Tab 1',
      tabKey: '1',
      children: (
        <>
          <p>
            Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage pig leberkas, t-bone
            sirloin shoulder bresaola. Frankfurter rump porchetta ham. Pork belly prosciutto brisket
            meatloaf short ribs.
          </p>
          <p>
            Brisket meatball turkey short loin boudin leberkas meatloaf chuck andouille pork loin
            pastrami spare ribs pancetta rump. Frankfurter corned beef beef tenderloin short loin
            meatloaf swine ground round venison.
          </p>
        </>
      ),
    },
    {
      title: 'Tab 2',
      tabKey: '2',
      children: (
        <p>
          Bacon ipsum dolor sit amet landjaeger sausage brisket, jerky drumstick fatback boudin ball
          tip turducken. Pork belly meatball t-bone bresaola tail filet mignon kevin turkey ribeye
          shank flank doner cow kielbasa shankle. Pig swine chicken hamburger, tenderloin turkey
          rump ball tip sirloin frankfurter meatloaf boudin brisket ham hock. Hamburger venison
          brisket tri-tip andouille pork belly ball tip short ribs biltong meatball chuck. Pork chop
          ribeye tail short ribs, beef hamburger meatball kielbasa rump corned beef porchetta
          landjaeger flank. Doner rump frankfurter meatball meatloaf, cow kevin pork pork loin
          venison fatback spare ribs salami beef ribs.
        </p>
      ),
    },
    {
      title: 'Tab 3',
      tabKey: '3',
      children: (
        <>
          <p>
            Brisket meatball turkey short loin boudin leberkas meatloaf chuck andouille pork loin
            pastrami spare ribs pancetta rump. Frankfurter corned beef beef tenderloin short loin
            meatloaf swine ground round venison.
          </p>
          <p>
            Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage pig leberkas, t-bone
            sirloin shoulder bresaola. Frankfurter rump porchetta ham. Pork belly prosciutto brisket
            meatloaf short ribs.
          </p>
        </>
      ),
    },
  ];

  return <Tabs defaultActiveKey="1" items={items} />;
};

export default App;

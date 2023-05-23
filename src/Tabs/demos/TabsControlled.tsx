/**
 * title: 受控
 * description: 受控组件下的 tabs
 */
import { useState } from 'react';
import { Tabs } from 'react-papercss-design';

export default () => {
  const [activeKey, setActiveKey] = useState<React.Key>('tab1');

  return (
    <Tabs
      activeKey={activeKey}
      onChange={(activeKey) => {
        setActiveKey(activeKey);
      }}
    >
      <Tabs.TabPane tabKey="tab1" title="Tab 1">
        <p>
          Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage pig leberkas, t-bone
          sirloin shoulder bresaola. Frankfurter rump porchetta ham. Pork belly prosciutto brisket
          meatloaf short ribs.
        </p>
      </Tabs.TabPane>
      <Tabs.TabPane tabKey="tab2" title="Tab 2">
        <p>
          Brisket meatball turkey short loin boudin leberkas meatloaf chuck andouille pork loin
          pastrami spare ribs pancetta rump. Frankfurter corned beef beef tenderloin short loin
          meatloaf swine ground round venison.
        </p>
      </Tabs.TabPane>
      <Tabs.TabPane tabKey="tab3" title="Tab 3">
        <p>
          Hamburger venison brisket tri-tip andouille pork belly ball tip short ribs biltong
          meatball chuck. Pork chop ribeye tail short ribs, beef hamburger meatball kielbasa rump
          corned beef porchetta landjaeger flank. Doner rump frankfurter meatball meatloaf, cow
          kevin pork pork loin venison fatback spare ribs salami beef ribs. Bacon ipsum dolor sit
          amet landjaeger sausage brisket, jerky drumstick fatback boudin ball tip turducken. Pork
          belly meatball t-bone bresaola tail filet mignon kevin turkey ribeye shank flank doner cow
          kielbasa shankle. Pig swine chicken hamburger, tenderloin turkey rump ball tip sirloin
          frankfurter meatloaf boudin brisket ham hock.
        </p>
      </Tabs.TabPane>
    </Tabs>
  );
};

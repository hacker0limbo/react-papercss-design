"use strict";(self.webpackChunkreact_papercss_design=self.webpackChunkreact_papercss_design||[]).push([[4530],{58132:function(c,n,e){var o;e.r(n),e.d(n,{demos:function(){return h}});var u=e(17061),s=e.n(u),k=e(17156),b=e.n(k),t=e(67294),v=e(32292),m=e(12276),h={"src-tabs-demo-tabsbase":{component:t.memo(t.lazy(function(){return e.e(2433).then(e.bind(e,27598))})),asset:{type:"BLOCK",id:"src-tabs-demo-tabsbase",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(16290).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.0"}},entry:"index.tsx",title:"Basic",description:"Use defaultActiveKey for uncontrolled configuration"},context:{react:o||(o=e.t(t,2)),"react-papercss-design":m},renderOpts:{compile:function(){var l=b()(s()().mark(function p(){var r,d=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(7335).then(e.bind(e,37335));case 2:return a.abrupt("return",(r=a.sent).default.apply(r,d));case 3:case"end":return a.stop()}},p)}));function i(){return l.apply(this,arguments)}return i}()}},"src-tabs-demo-tabscontrolled":{component:t.memo(t.lazy(function(){return e.e(2433).then(e.bind(e,73595))})),asset:{type:"BLOCK",id:"src-tabs-demo-tabscontrolled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(99780).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.0"}},entry:"index.tsx",title:"Controlled",description:"Controlled component usage"},context:{react:o||(o=e.t(t,2)),"react-papercss-design":m},renderOpts:{compile:function(){var l=b()(s()().mark(function p(){var r,d=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(7335).then(e.bind(e,37335));case 2:return a.abrupt("return",(r=a.sent).default.apply(r,d));case 3:case"end":return a.stop()}},p)}));function i(){return l.apply(this,arguments)}return i}()}},"src-tabs-demo-tabsconfigured":{component:t.memo(t.lazy(function(){return e.e(2433).then(e.bind(e,89065))})),asset:{type:"BLOCK",id:"src-tabs-demo-tabsconfigured",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(32381).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.0"}},entry:"index.tsx",title:"Configurable",description:"Use items for configuration"},context:{react:o||(o=e.t(t,2)),"react-papercss-design":m},renderOpts:{compile:function(){var l=b()(s()().mark(function p(){var r,d=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(7335).then(e.bind(e,37335));case 2:return a.abrupt("return",(r=a.sent).default.apply(r,d));case 3:case"end":return a.stop()}},p)}));function i(){return l.apply(this,arguments)}return i}()}}}},85254:function(c,n,e){e.r(n),e.d(n,{texts:function(){return u}});var o=e(32292);const u=[{value:"Tab switching component.",paraId:0,tocIndex:0},{value:"Reference: ",paraId:1,tocIndex:0},{value:"Tabs",paraId:1,tocIndex:0},{value:"Property",paraId:2,tocIndex:6},{value:"Description",paraId:2,tocIndex:6},{value:"Type",paraId:2,tocIndex:6},{value:"Default",paraId:2,tocIndex:6},{value:"defaultActiveKey",paraId:2,tocIndex:6},{value:"Key of the default active tab",paraId:2,tocIndex:6},{value:"React.Key",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"activeKey",paraId:2,tocIndex:6},{value:"Key of the currently active tab (controlled mode)",paraId:2,tocIndex:6},{value:"React.Key",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"onTabChange",paraId:2,tocIndex:6},{value:"Callback function when switching tabs",paraId:2,tocIndex:6},{value:"(key: React.Key) => void",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"items",paraId:2,tocIndex:6},{value:"Configuration for tab content",paraId:2,tocIndex:6},{value:"TabPaneItem[]",paraId:3,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"destroyOnHidden",paraId:2,tocIndex:6},{value:"Destroy collapsed hidden panels",paraId:2,tocIndex:6},{value:"boolean",paraId:2,tocIndex:6},{value:"false",paraId:2,tocIndex:6},{value:"Property",paraId:4,tocIndex:7},{value:"Description",paraId:4,tocIndex:7},{value:"Type",paraId:4,tocIndex:7},{value:"Default",paraId:4,tocIndex:7},{value:"tabKey",paraId:4,tocIndex:7},{value:"Unique identifier of tab",paraId:4,tocIndex:7},{value:"React.Key",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:"title",paraId:4,tocIndex:7},{value:"Title of the tab",paraId:4,tocIndex:7},{value:"string",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:"children",paraId:4,tocIndex:7},{value:"Content of the tab",paraId:4,tocIndex:7},{value:"React.ReactNode",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7}]},16290:function(c,n){n.Z=`import React from 'react';
import { Tabs } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Tabs defaultActiveKey="1">
      <Tabs.TabPane tabKey="1" title="Tab 1">
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
      </Tabs.TabPane>
      <Tabs.TabPane tabKey="2" title="Tab 2">
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
      </Tabs.TabPane>
      <Tabs.TabPane tabKey="3" title="Tab 3">
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
      </Tabs.TabPane>
    </Tabs>
  );
};

export default App;
`},32381:function(c,n){n.Z=`import React from 'react';
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
`},99780:function(c,n){n.Z=`import React, { useState } from 'react';
import { Tabs } from 'react-papercss-design';

const App: React.FC = () => {
  const [activeKey, setActiveKey] = useState<React.Key>('1');

  return (
    <Tabs
      activeKey={activeKey}
      onTabChange={(activeKey) => {
        setActiveKey(activeKey);
      }}
    >
      <Tabs.TabPane tabKey="1" title="Tab 1">
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
      </Tabs.TabPane>
      <Tabs.TabPane tabKey="2" title="Tab 2">
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
      </Tabs.TabPane>
      <Tabs.TabPane tabKey="3" title="Tab 3">
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
      </Tabs.TabPane>
    </Tabs>
  );
};

export default App;
`}}]);

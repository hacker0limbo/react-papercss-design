"use strict";(self.webpackChunkreact_papercss_design=self.webpackChunkreact_papercss_design||[]).push([[8820],{74403:function(i,n,e){var r;e.r(n),e.d(n,{demos:function(){return h}});var l=e(17061),d=e.n(l),v=e(17156),m=e.n(v),a=e(67294),f=e(95422),I=e(54268),h={"src-list-demo-listordered":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,8057))})),asset:{type:"BLOCK",id:"src-list-demo-listordered",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(34281).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.1"}},entry:"index.tsx",title:"Ordered List",description:"Display ordered list by default"},context:{react:r||(r=e.t(a,2)),"react-papercss-design":I},renderOpts:{compile:function(){var o=m()(d()().mark(function p(){var s,u=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,u));case 3:case"end":return t.stop()}},p)}));function c(){return o.apply(this,arguments)}return c}()}},"src-list-demo-listunordered":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,62357))})),asset:{type:"BLOCK",id:"src-list-demo-listunordered",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(1686).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.1"}},entry:"index.tsx",title:"Unordered List",description:"Use ordered=false to display as unordered list"},context:{react:r||(r=e.t(a,2)),"react-papercss-design":I},renderOpts:{compile:function(){var o=m()(d()().mark(function p(){var s,u=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,u));case 3:case"end":return t.stop()}},p)}));function c(){return o.apply(this,arguments)}return c}()}}}},81552:function(i,n,e){e.r(n),e.d(n,{texts:function(){return l}});var r=e(95422);const l=[{value:"List display component. Simply wraps native list elements to support tree-like syntax.",paraId:0,tocIndex:0},{value:"Reference: ",paraId:1,tocIndex:0},{value:"Lists",paraId:1,tocIndex:0},{value:"Property",paraId:2,tocIndex:5},{value:"Description",paraId:2,tocIndex:5},{value:"Type",paraId:2,tocIndex:5},{value:"Default",paraId:2,tocIndex:5},{value:"ordered",paraId:2,tocIndex:5},{value:"Whether it's ordered list",paraId:2,tocIndex:5},{value:"boolean",paraId:2,tocIndex:5},{value:"true",paraId:2,tocIndex:5},{value:"items",paraId:2,tocIndex:5},{value:"List item content",paraId:2,tocIndex:5},{value:"ListItem[]",paraId:3,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"Property",paraId:4,tocIndex:6},{value:"Description",paraId:4,tocIndex:6},{value:"Type",paraId:4,tocIndex:6},{value:"Default",paraId:4,tocIndex:6},{value:"label",paraId:4,tocIndex:6},{value:"Text content of list item",paraId:4,tocIndex:6},{value:"string",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"children",paraId:4,tocIndex:6},{value:"Sub list items",paraId:4,tocIndex:6},{value:"ListItem[]",paraId:5,tocIndex:6},{value:"-",paraId:4,tocIndex:6}]},34281:function(i,n){n.Z=`import React from 'react';
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
`},1686:function(i,n){n.Z=`import React from 'react';
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
`}}]);

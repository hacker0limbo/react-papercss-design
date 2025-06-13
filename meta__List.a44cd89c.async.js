"use strict";(self.webpackChunkreact_papercss_design=self.webpackChunkreact_papercss_design||[]).push([[2211],{10864:function(l,t,e){var r;e.r(t),e.d(t,{demos:function(){return h}});var i=e(17061),d=e.n(i),v=e(17156),I=e.n(v),a=e(67294),g=e(84253),m=e(71600),h={"src-list-demo-listordered":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,8057))})),asset:{type:"BLOCK",id:"src-list-demo-listordered",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(34281).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.0.2"}},entry:"index.tsx",title:"\u6709\u5E8F\u5217\u8868",description:"\u9ED8\u8BA4\u5C55\u793A\u6709\u5E8F\u5217\u8868"},context:{react:r||(r=e.t(a,2)),"react-papercss-design":m},renderOpts:{compile:function(){var o=I()(d()().mark(function p(){var s,u=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,u));case 3:case"end":return n.stop()}},p)}));function c(){return o.apply(this,arguments)}return c}()}},"src-list-demo-listunordered":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,62357))})),asset:{type:"BLOCK",id:"src-list-demo-listunordered",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(1686).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.0.2"}},entry:"index.tsx",title:"\u65E0\u5E8F\u5217\u8868",description:"\u4F7F\u7528ordered=false\u5C55\u793A\u4E3A\u65E0\u5E8F\u5217\u8868"},context:{react:r||(r=e.t(a,2)),"react-papercss-design":m},renderOpts:{compile:function(){var o=I()(d()().mark(function p(){var s,u=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,u));case 3:case"end":return n.stop()}},p)}));function c(){return o.apply(this,arguments)}return c}()}}}},44952:function(l,t,e){e.r(t),e.d(t,{texts:function(){return i}});var r=e(84253);const i=[{value:"\u5217\u8868\u5C55\u793A, \u4EC5\u4EC5\u662F\u5BF9\u539F\u751F\u7684\u5217\u8868\u5143\u7D20\u8FDB\u884C\u4E86\u5305\u88C5, \u4F7F\u5176\u652F\u6301 ",paraId:0,tocIndex:0},{value:"tree",paraId:0,tocIndex:0},{value:" \u4E00\u6837\u7684\u5199\u6CD5",paraId:0,tocIndex:0},{value:"\u53C2\u8003: ",paraId:1,tocIndex:0},{value:"Lists",paraId:1,tocIndex:0},{value:"\u53C2\u6570",paraId:2,tocIndex:5},{value:"\u8BF4\u660E",paraId:2,tocIndex:5},{value:"\u7C7B\u578B",paraId:2,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:5},{value:"ordered",paraId:2,tocIndex:5},{value:"\u662F\u5426\u4E3A\u6709\u5E8F\u5217\u8868",paraId:2,tocIndex:5},{value:"boolean",paraId:2,tocIndex:5},{value:"true",paraId:2,tocIndex:5},{value:"items",paraId:2,tocIndex:5},{value:"\u5217\u8868\u9879\u5185\u5BB9",paraId:2,tocIndex:5},{value:"ListItem[]",paraId:3,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"\u53C2\u6570",paraId:4,tocIndex:6},{value:"\u8BF4\u660E",paraId:4,tocIndex:6},{value:"\u7C7B\u578B",paraId:4,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:6},{value:"label",paraId:4,tocIndex:6},{value:"\u5217\u8868\u9879\u7684\u6587\u672C\u5185\u5BB9",paraId:4,tocIndex:6},{value:"string",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"children",paraId:4,tocIndex:6},{value:"\u5B50\u5217\u8868\u9879",paraId:4,tocIndex:6},{value:"ListItem[]",paraId:5,tocIndex:6},{value:"-",paraId:4,tocIndex:6}]},34281:function(l,t){t.Z=`import React from 'react';
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
`},1686:function(l,t){t.Z=`import React from 'react';
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

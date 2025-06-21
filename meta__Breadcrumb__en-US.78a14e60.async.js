"use strict";(self.webpackChunkreact_papercss_design=self.webpackChunkreact_papercss_design||[]).push([[3579],{30468:function(o,n,e){var t;e.r(n),e.d(n,{demos:function(){return x}});var s=e(17061),c=e.n(s),v=e(17156),I=e.n(v),r=e(67294),f=e(85683),m=e(12276),x={"src-breadcrumb-demo-breadcrumbbase":{component:r.memo(r.lazy(function(){return e.e(2433).then(e.bind(e,54385))})),asset:{type:"BLOCK",id:"src-breadcrumb-demo-breadcrumbbase",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(21193).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.0"}},entry:"index.tsx",title:"Basic",description:"Most basic breadcrumb usage"},context:{react:t||(t=e.t(r,2)),"react-papercss-design":m},renderOpts:{compile:function(){var u=I()(c()().mark(function l(){var d,i=arguments;return c()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(7335).then(e.bind(e,37335));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,i));case 3:case"end":return a.stop()}},l)}));function p(){return u.apply(this,arguments)}return p}()}},"src-breadcrumb-demo-breadcrumbconfig":{component:r.memo(r.lazy(function(){return e.e(2433).then(e.bind(e,92591))})),asset:{type:"BLOCK",id:"src-breadcrumb-demo-breadcrumbconfig",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(58527).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.0"}},entry:"index.tsx",title:"Configurable",description:"Use items to configure breadcrumb content"},context:{react:t||(t=e.t(r,2)),"react-papercss-design":m},renderOpts:{compile:function(){var u=I()(c()().mark(function l(){var d,i=arguments;return c()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(7335).then(e.bind(e,37335));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,i));case 3:case"end":return a.stop()}},l)}));function p(){return u.apply(this,arguments)}return p}()}}}},87497:function(o,n,e){e.r(n),e.d(n,{texts:function(){return s}});var t=e(85683);const s=[{value:"Display the current page's location within a navigational hierarchy and provide the ability to navigate back to parent levels.",paraId:0,tocIndex:0},{value:"Reference: ",paraId:1,tocIndex:0},{value:"Breadcrumb",paraId:1,tocIndex:0},{value:"Property",paraId:2,tocIndex:5},{value:"Description",paraId:2,tocIndex:5},{value:"Type",paraId:2,tocIndex:5},{value:"Default",paraId:2,tocIndex:5},{value:"bordered",paraId:2,tocIndex:5},{value:"Whether has border",paraId:2,tocIndex:5},{value:"boolean",paraId:2,tocIndex:5},{value:"true",paraId:2,tocIndex:5},{value:"items",paraId:2,tocIndex:5},{value:"Configuration mode",paraId:2,tocIndex:5},{value:"BreadcrumbItem[]",paraId:3,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"Property",paraId:4,tocIndex:6},{value:"Description",paraId:4,tocIndex:6},{value:"Type",paraId:4,tocIndex:6},{value:"Default",paraId:4,tocIndex:6},{value:"content",paraId:4,tocIndex:6},{value:"Same as children but mainly used for configuration",paraId:4,tocIndex:6},{value:"React.ReactNode",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"active",paraId:4,tocIndex:6},{value:"Whether it's the current active item",paraId:4,tocIndex:6},{value:"boolean",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6},{value:"href",paraId:4,tocIndex:6},{value:"Link URL",paraId:4,tocIndex:6},{value:"string",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"target",paraId:4,tocIndex:6},{value:"Link target",paraId:4,tocIndex:6},{value:"string",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"children",paraId:4,tocIndex:6},{value:"Child nodes",paraId:4,tocIndex:6},{value:"React.ReactNode",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"title",paraId:4,tocIndex:6},{value:"Link title",paraId:4,tocIndex:6},{value:"string",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6}]},21193:function(o,n){n.Z=`import React from 'react';
import { Breadcrumb } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Breadcrumb bordered>
      <Breadcrumb.Item href="#">Documentation</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Components</Breadcrumb.Item>
      <Breadcrumb.Item active>Breadcrumb</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default App;
`},58527:function(o,n){n.Z=`import React from 'react';
import { Breadcrumb } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Breadcrumb
      items={[
        {
          content: 'Documentation',
          href: '#',
        },
        {
          content: 'Components',
          href: '#',
        },
        {
          content: 'Breadcrumb',
          active: true,
        },
      ]}
    />
  );
};

export default App;
`}}]);

"use strict";(self.webpackChunkreact_papercss_design=self.webpackChunkreact_papercss_design||[]).push([[1348],{38563:function(s,n,e){var t;e.r(n),e.d(n,{demos:function(){return x}});var o=e(17061),c=e.n(o),v=e(17156),m=e.n(v),r=e(67294),f=e(8576),i=e(54268),x={"src-breadcrumb-demo-breadcrumbbase":{component:r.memo(r.lazy(function(){return e.e(2433).then(e.bind(e,54385))})),asset:{type:"BLOCK",id:"src-breadcrumb-demo-breadcrumbbase",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(21193).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.0"}},entry:"index.tsx",title:"\u57FA\u672C",description:"\u6700\u57FA\u672C\u7684\u9762\u5305\u5C51\u7528\u6CD5"},context:{react:t||(t=e.t(r,2)),"react-papercss-design":i},renderOpts:{compile:function(){var u=m()(c()().mark(function I(){var d,l=arguments;return c()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(7335).then(e.bind(e,37335));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,l));case 3:case"end":return a.stop()}},I)}));function p(){return u.apply(this,arguments)}return p}()}},"src-breadcrumb-demo-breadcrumbconfig":{component:r.memo(r.lazy(function(){return e.e(2433).then(e.bind(e,92591))})),asset:{type:"BLOCK",id:"src-breadcrumb-demo-breadcrumbconfig",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(58527).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.0"}},entry:"index.tsx",title:"\u53EF\u914D\u7F6E",description:"\u4F7F\u7528items\u914D\u7F6E\u9762\u5305\u5C51\u5185\u5BB9"},context:{react:t||(t=e.t(r,2)),"react-papercss-design":i},renderOpts:{compile:function(){var u=m()(c()().mark(function I(){var d,l=arguments;return c()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(7335).then(e.bind(e,37335));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,l));case 3:case"end":return a.stop()}},I)}));function p(){return u.apply(this,arguments)}return p}()}}}},47289:function(s,n,e){e.r(n),e.d(n,{texts:function(){return o}});var t=e(8576);const o=[{value:"\u663E\u793A\u5F53\u524D\u9875\u9762\u5728\u7CFB\u7EDF\u5C42\u7EA7\u7ED3\u6784\u4E2D\u7684\u4F4D\u7F6E\uFF0C\u5E76\u80FD\u5411\u4E0A\u8FD4\u56DE\u3002",paraId:0,tocIndex:0},{value:"\u53C2\u8003: ",paraId:1,tocIndex:0},{value:"Breadcrumb",paraId:1,tocIndex:0},{value:"\u53C2\u6570",paraId:2,tocIndex:5},{value:"\u8BF4\u660E",paraId:2,tocIndex:5},{value:"\u7C7B\u578B",paraId:2,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:5},{value:"bordered",paraId:2,tocIndex:5},{value:"\u662F\u5426\u6709\u8FB9\u6846",paraId:2,tocIndex:5},{value:"boolean",paraId:2,tocIndex:5},{value:"true",paraId:2,tocIndex:5},{value:"items",paraId:2,tocIndex:5},{value:"\u914D\u7F6E\u9879\u4E66\u5199\u65B9\u5F0F",paraId:2,tocIndex:5},{value:"BreadcrumbItem[]",paraId:3,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"\u53C2\u6570",paraId:4,tocIndex:6},{value:"\u8BF4\u660E",paraId:4,tocIndex:6},{value:"\u7C7B\u578B",paraId:4,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:6},{value:"content",paraId:4,tocIndex:6},{value:"\u540C children \u4F46\u662F\u4E3B\u8981\u7528\u4E8E\u914D\u7F6E\u9879\u4E66\u5199",paraId:4,tocIndex:6},{value:"React.ReactNode",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"active",paraId:4,tocIndex:6},{value:"\u662F\u5426\u4E3A\u5F53\u524D\u6FC0\u6D3B\u9879",paraId:4,tocIndex:6},{value:"boolean",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6},{value:"href",paraId:4,tocIndex:6},{value:"\u94FE\u63A5\u5730\u5740",paraId:4,tocIndex:6},{value:"string",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"target",paraId:4,tocIndex:6},{value:"\u94FE\u63A5\u6253\u5F00\u65B9\u5F0F",paraId:4,tocIndex:6},{value:"string",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"children",paraId:4,tocIndex:6},{value:"\u5B50\u8282\u70B9",paraId:4,tocIndex:6},{value:"React.ReactNode",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"title",paraId:4,tocIndex:6},{value:"\u94FE\u63A5\u6807\u9898",paraId:4,tocIndex:6},{value:"string",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6}]},21193:function(s,n){n.Z=`import React from 'react';
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
`},58527:function(s,n){n.Z=`import React from 'react';
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

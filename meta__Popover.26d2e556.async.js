"use strict";(self.webpackChunkreact_papercss_design=self.webpackChunkreact_papercss_design||[]).push([[7503],{99789:function(p,n,e){var a;e.r(n),e.d(n,{demos:function(){return v}});var r=e(17061),s=e.n(r),c=e(17156),l=e.n(c),t=e(67294),P=e(89035),_=e(71600),v={"src-popover-demo-popoverbase":{component:t.memo(t.lazy(function(){return e.e(2433).then(e.bind(e,72108))})),asset:{type:"BLOCK",id:"src-popover-demo-popoverbase",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(86903).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.0.4"}},entry:"index.tsx",title:"\u57FA\u672C",description:"\u53EF\u4EE5\u5305\u88F9\u4EFB\u4F55\u5143\u7D20, \u4F7F\u7528placement\u63A7\u5236\u51FA\u73B0\u7684\u4F4D\u7F6E"},context:{react:a||(a=e.t(t,2)),"react-papercss-design":_},renderOpts:{compile:function(){var u=l()(s()().mark(function i(){var d,I=arguments;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(7335).then(e.bind(e,37335));case 2:return o.abrupt("return",(d=o.sent).default.apply(d,I));case 3:case"end":return o.stop()}},i)}));function m(){return u.apply(this,arguments)}return m}()}}}},63492:function(p,n,e){e.r(n),e.d(n,{texts:function(){return r}});var a=e(89035);const r=[{value:"\u7B80\u5355\u7684\u6587\u5B57\u63D0\u793A\u6C14\u6CE1\u6846\u3002",paraId:0,tocIndex:0},{value:"\u53C2\u8003: ",paraId:1,tocIndex:0},{value:"Popovers",paraId:1,tocIndex:0},{value:"\u53C2\u6570",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"label",paraId:2,tocIndex:3},{value:"Popover \u7684\u5185\u5BB9",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"placement",paraId:2,tocIndex:3},{value:"Popover \u7684\u4F4D\u7F6E",paraId:2,tocIndex:3},{value:"'top' | 'bottom' | 'left' | 'right'",paraId:2,tocIndex:3},{value:"'top'",paraId:2,tocIndex:3},{value:"children",paraId:2,tocIndex:3},{value:"\u89E6\u53D1 Popover \u7EC4\u4EF6",paraId:2,tocIndex:3},{value:"'ReactElement'",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3}]},86903:function(p,n){n.Z=`import React from 'react';
import { Button, Popover, Space } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Space wrap>
      <Popover placement="left" label="Popover on left">
        <p>Popover left position</p>
      </Popover>
      <Popover placement="top" label="Popover on top">
        <p>Popover top position</p>
      </Popover>
      <Popover placement="right" label="Popover on right">
        <p>Popover right position</p>
      </Popover>
      <Popover placement="bottom" label="Popover on bottom">
        <p>Popover bottom position</p>
      </Popover>
      <Popover placement="top" label="Popover on top">
        <Button>Popover on top and on a button!</Button>
      </Popover>
    </Space>
  );
};

export default App;
`}}]);

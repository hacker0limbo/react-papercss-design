"use strict";(self.webpackChunkreact_papercss_design=self.webpackChunkreact_papercss_design||[]).push([[1535],{72860:function(p,n,e){var t;e.r(n),e.d(n,{demos:function(){return u}});var a=e(17061),s=e.n(a),d=e(17156),l=e.n(d),r=e(67294),P=e(70452),_=e(54268),u={"src-popover-demo-popoverbase":{component:r.memo(r.lazy(function(){return e.e(2433).then(e.bind(e,72108))})),asset:{type:"BLOCK",id:"src-popover-demo-popoverbase",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(86903).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.0"}},entry:"index.tsx",title:"Basic",description:"Can wrap any element, use placement to control the position"},context:{react:t||(t=e.t(r,2)),"react-papercss-design":_},renderOpts:{compile:function(){var v=l()(s()().mark(function m(){var c,I=arguments;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(7335).then(e.bind(e,37335));case 2:return o.abrupt("return",(c=o.sent).default.apply(c,I));case 3:case"end":return o.stop()}},m)}));function i(){return v.apply(this,arguments)}return i}()}}}},41392:function(p,n,e){e.r(n),e.d(n,{texts:function(){return a}});var t=e(70452);const a=[{value:"A simple text tooltip bubble component.",paraId:0,tocIndex:0},{value:"Reference: ",paraId:1,tocIndex:0},{value:"Popovers",paraId:1,tocIndex:0},{value:"Property",paraId:2,tocIndex:3},{value:"Description",paraId:2,tocIndex:3},{value:"Type",paraId:2,tocIndex:3},{value:"Default",paraId:2,tocIndex:3},{value:"label",paraId:2,tocIndex:3},{value:"Content of Popover",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"placement",paraId:2,tocIndex:3},{value:"Position of Popover",paraId:2,tocIndex:3},{value:"'top' | 'bottom' | 'left' | 'right'",paraId:2,tocIndex:3},{value:"'top'",paraId:2,tocIndex:3},{value:"children",paraId:2,tocIndex:3},{value:"Element that triggers Popover",paraId:2,tocIndex:3},{value:"React.ReactElement",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3}]},86903:function(p,n){n.Z=`import React from 'react';
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

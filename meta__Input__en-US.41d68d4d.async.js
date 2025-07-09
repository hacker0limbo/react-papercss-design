"use strict";(self.webpackChunkreact_papercss_design=self.webpackChunkreact_papercss_design||[]).push([[4919],{94541:function(l,t,e){var s;e.r(t),e.d(t,{demos:function(){return g}});var I=e(17061),d=e.n(I),f=e(17156),i=e.n(f),a=e(67294),h=e(50338),m=e(54268),g={"src-input-demo-inputbase":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,84902))})),asset:{type:"BLOCK",id:"src-input-demo-inputbase",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(91114).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.1"}},entry:"index.tsx",title:"Basic Usage",description:"Basic usage"},context:{react:s||(s=e.t(a,2)),"react-papercss-design":m},renderOpts:{compile:function(){var p=i()(d()().mark(function c(){var r,u=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,u));case 3:case"end":return n.stop()}},c)}));function o(){return p.apply(this,arguments)}return o}()}},"src-input-demo-inputcontrolled":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,82255))})),asset:{type:"BLOCK",id:"src-input-demo-inputcontrolled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(9785).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.1"}},entry:"index.tsx",title:"Controlled Usage",description:"Use value and onChange for controlled mode"},context:{react:s||(s=e.t(a,2)),"react-papercss-design":m},renderOpts:{compile:function(){var p=i()(d()().mark(function c(){var r,u=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,u));case 3:case"end":return n.stop()}},c)}));function o(){return p.apply(this,arguments)}return o}()}},"src-input-demo-inputblock":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,68231))})),asset:{type:"BLOCK",id:"src-input-demo-inputblock",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(8148).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.1"}},entry:"index.tsx",title:"Auto Width",description:"Use block to make input width fill parent"},context:{react:s||(s=e.t(a,2)),"react-papercss-design":m},renderOpts:{compile:function(){var p=i()(d()().mark(function c(){var r,u=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,u));case 3:case"end":return n.stop()}},c)}));function o(){return p.apply(this,arguments)}return o}()}},"src-input-demo-inputdisabled":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,80504))})),asset:{type:"BLOCK",id:"src-input-demo-inputdisabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(22185).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.1"}},entry:"index.tsx",title:"Disabled Input",description:"Use disabled to disable input"},context:{react:s||(s=e.t(a,2)),"react-papercss-design":m},renderOpts:{compile:function(){var p=i()(d()().mark(function c(){var r,u=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,u));case 3:case"end":return n.stop()}},c)}));function o(){return p.apply(this,arguments)}return o}()}}}},75909:function(l,t,e){e.r(t),e.d(t,{texts:function(){return I}});var s=e(50338);const I=[{value:"Input content through mouse or keyboard",paraId:0,tocIndex:0},{value:"Property",paraId:1,tocIndex:6},{value:"Description",paraId:1,tocIndex:6},{value:"Type",paraId:1,tocIndex:6},{value:"Default",paraId:1,tocIndex:6},{value:"value",paraId:1,tocIndex:6},{value:"Input content (controlled)",paraId:1,tocIndex:6},{value:"string",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"defaultValue",paraId:1,tocIndex:6},{value:"Input content (uncontrolled)",paraId:1,tocIndex:6},{value:"string",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"onChange",paraId:1,tocIndex:6},{value:"Callback when input content changes",paraId:1,tocIndex:6},{value:"(value: string, e: ChangeEvent) => void",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"block",paraId:1,tocIndex:6},{value:"Whether to fill parent element",paraId:1,tocIndex:6},{value:"boolean",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"disabled",paraId:1,tocIndex:6},{value:"Whether disabled",paraId:1,tocIndex:6},{value:"boolean",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6}]},91114:function(l,t){t.Z=`import React from 'react';
import { Input } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Input
      onChange={(v, e) => {
        console.log('input onchange value and event', v, e);
      }}
      placeholder="Nice input"
    />
  );
};

export default App;
`},8148:function(l,t){t.Z=`import React from 'react';
import { Input } from 'react-papercss-design';

const App: React.FC = () => {
  return <Input block />;
};

export default App;
`},9785:function(l,t){t.Z=`import React from 'react';
import { Input } from 'react-papercss-design';

const App: React.FC = () => {
  const [value, setValue] = React.useState<string>('papcercss');

  return (
    <Input
      value={value}
      onChange={(v) => {
        setValue(v);
      }}
    />
  );
};

export default App;
`},22185:function(l,t){t.Z=`import React from 'react';
import { Input } from 'react-papercss-design';

const App: React.FC = () => {
  return <Input defaultValue="Disabled" disabled />;
};

export default App;
`}}]);

"use strict";(self.webpackChunkreact_papercss_design=self.webpackChunkreact_papercss_design||[]).push([[4659],{6187:function(u,t,e){var s;e.r(t),e.d(t,{demos:function(){return g}});var v=e(17061),o=e.n(v),f=e(17156),i=e.n(f),a=e(67294),O=e(17614),m=e(54268),g={"src-select-demo-selectbase":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,21951))})),asset:{type:"BLOCK",id:"src-select-demo-selectbase",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(39887).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.1"}},entry:"index.tsx",title:"Basic Usage",description:"Basic usage, first option selected by default"},context:{react:s||(s=e.t(a,2)),"react-papercss-design":m},renderOpts:{compile:function(){var l=i()(o()().mark(function d(){var r,p=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,p));case 3:case"end":return n.stop()}},d)}));function c(){return l.apply(this,arguments)}return c}()}},"src-select-demo-selectcontrolled":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,1107))})),asset:{type:"BLOCK",id:"src-select-demo-selectcontrolled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(89844).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.1"}},entry:"index.tsx",title:"Controlled",description:"Use value and onChange for controlled mode"},context:{react:s||(s=e.t(a,2)),"react-papercss-design":m},renderOpts:{compile:function(){var l=i()(o()().mark(function d(){var r,p=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,p));case 3:case"end":return n.stop()}},d)}));function c(){return l.apply(this,arguments)}return c}()}},"src-select-demo-selectdisabled":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,49057))})),asset:{type:"BLOCK",id:"src-select-demo-selectdisabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(91157).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.1"}},entry:"index.tsx",title:"Disabled",description:"Disable the dropdown"},context:{react:s||(s=e.t(a,2)),"react-papercss-design":m},renderOpts:{compile:function(){var l=i()(o()().mark(function d(){var r,p=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,p));case 3:case"end":return n.stop()}},d)}));function c(){return l.apply(this,arguments)}return c}()}},"src-select-demo-selectconfig":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,20273))})),asset:{type:"BLOCK",id:"src-select-demo-selectconfig",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(59014).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.1"}},entry:"index.tsx",title:"Configurable",description:"Use options for configuration"},context:{react:s||(s=e.t(a,2)),"react-papercss-design":m},renderOpts:{compile:function(){var l=i()(o()().mark(function d(){var r,p=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,p));case 3:case"end":return n.stop()}},d)}));function c(){return l.apply(this,arguments)}return c}()}}}},28042:function(u,t,e){e.r(t),e.d(t,{texts:function(){return v}});var s=e(17614);const v=[{value:"Dropdown selection component",paraId:0,tocIndex:0},{value:"Property",paraId:1,tocIndex:7},{value:"Description",paraId:1,tocIndex:7},{value:"Type",paraId:1,tocIndex:7},{value:"Default",paraId:1,tocIndex:7},{value:"value",paraId:1,tocIndex:7},{value:"Dropdown content (controlled)",paraId:1,tocIndex:7},{value:"string",paraId:1,tocIndex:7},{value:"-",paraId:1,tocIndex:7},{value:"defaultValue",paraId:1,tocIndex:7},{value:"Dropdown content (uncontrolled)",paraId:1,tocIndex:7},{value:"string",paraId:1,tocIndex:7},{value:"-",paraId:1,tocIndex:7},{value:"onChange",paraId:1,tocIndex:7},{value:"Callback when dropdown value changes",paraId:1,tocIndex:7},{value:"(value: string, e: ChangeEvent) => void",paraId:1,tocIndex:7},{value:"-",paraId:1,tocIndex:7},{value:"disabled",paraId:1,tocIndex:7},{value:"Whether disabled",paraId:1,tocIndex:7},{value:"boolean",paraId:1,tocIndex:7},{value:"-",paraId:1,tocIndex:7},{value:"options",paraId:1,tocIndex:7},{value:"Configuration mode",paraId:1,tocIndex:7},{value:"{ label: string, value: string }[]",paraId:1,tocIndex:7},{value:"-",paraId:1,tocIndex:7},{value:"Supports all attributes of the ",paraId:2,tocIndex:8},{value:"<option>",paraId:2,tocIndex:8},{value:" tag. Note that when using ",paraId:2,tocIndex:8},{value:"options",paraId:2,tocIndex:8},{value:" for configuration, content uses the ",paraId:2,tocIndex:8},{value:"label",paraId:2,tocIndex:8},{value:" property.",paraId:2,tocIndex:8}]},39887:function(u,t){t.Z=`import React from 'react';
import { Select } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Select
      onChange={(v, e) => {
        console.log('select onchange value and event:', v, e);
      }}
    >
      <Select.Option value="1">Option 1</Select.Option>
      <Select.Option value="2">Option 2</Select.Option>
      <Select.Option value="3">Option 3</Select.Option>
    </Select>
  );
};

export default App;
`},59014:function(u,t){t.Z=`import React from 'react';
import { Select } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Select
      defaultValue="1"
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
      ]}
    />
  );
};

export default App;
`},89844:function(u,t){t.Z=`import React, { useState } from 'react';
import { Select } from 'react-papercss-design';

const App: React.FC = () => {
  const [value, setValue] = useState<string>('1');

  return (
    <Select
      value={value}
      onChange={(v) => {
        setValue(v);
      }}
    >
      <Select.Option value="1">Option 1</Select.Option>
      <Select.Option value="2">Option 2</Select.Option>
      <Select.Option value="3">Option 3</Select.Option>
    </Select>
  );
};

export default App;
`},91157:function(u,t){t.Z=`import React from 'react';
import { Select } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Select disabled>
      <Select.Option value="1">Option 1</Select.Option>
      <Select.Option value="2">Option 2</Select.Option>
      <Select.Option value="3">Option 3</Select.Option>
    </Select>
  );
};

export default App;
`}}]);

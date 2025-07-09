"use strict";(self.webpackChunkreact_papercss_design=self.webpackChunkreact_papercss_design||[]).push([[279],{33434:function(u,t,e){var s;e.r(t),e.d(t,{demos:function(){return f}});var v=e(17061),d=e.n(v),I=e(17156),i=e.n(I),n=e(67294),g=e(8781),m=e(54268),f={"src-textarea-demo-textareabase":{component:n.memo(n.lazy(function(){return e.e(2433).then(e.bind(e,98530))})),asset:{type:"BLOCK",id:"src-textarea-demo-textareabase",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(44187).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.1"}},entry:"index.tsx",title:"Basic Usage",description:"Basic usage"},context:{react:s||(s=e.t(n,2)),"react-papercss-design":m},renderOpts:{compile:function(){var o=i()(d()().mark(function l(){var r,p=arguments;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(7335).then(e.bind(e,37335));case 2:return a.abrupt("return",(r=a.sent).default.apply(r,p));case 3:case"end":return a.stop()}},l)}));function c(){return o.apply(this,arguments)}return c}()}},"src-textarea-demo-textareacontrolled":{component:n.memo(n.lazy(function(){return e.e(2433).then(e.bind(e,24919))})),asset:{type:"BLOCK",id:"src-textarea-demo-textareacontrolled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(66406).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.1"}},entry:"index.tsx",title:"Controlled Usage",description:"Use value and onChange for controlled mode"},context:{react:s||(s=e.t(n,2)),"react-papercss-design":m},renderOpts:{compile:function(){var o=i()(d()().mark(function l(){var r,p=arguments;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(7335).then(e.bind(e,37335));case 2:return a.abrupt("return",(r=a.sent).default.apply(r,p));case 3:case"end":return a.stop()}},l)}));function c(){return o.apply(this,arguments)}return c}()}},"src-textarea-demo-textareawithoutresize":{component:n.memo(n.lazy(function(){return e.e(2433).then(e.bind(e,91268))})),asset:{type:"BLOCK",id:"src-textarea-demo-textareawithoutresize",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(39123).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.1"}},entry:"index.tsx",title:"Disable Resize",description:"Use resize=false to disable resizing"},context:{react:s||(s=e.t(n,2)),"react-papercss-design":m},renderOpts:{compile:function(){var o=i()(d()().mark(function l(){var r,p=arguments;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(7335).then(e.bind(e,37335));case 2:return a.abrupt("return",(r=a.sent).default.apply(r,p));case 3:case"end":return a.stop()}},l)}));function c(){return o.apply(this,arguments)}return c}()}},"src-textarea-demo-textareadisabled":{component:n.memo(n.lazy(function(){return e.e(2433).then(e.bind(e,5370))})),asset:{type:"BLOCK",id:"src-textarea-demo-textareadisabled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(64158).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.1"}},entry:"index.tsx",title:"Disabled Textarea",description:"Use disabled to disable the textarea"},context:{react:s||(s=e.t(n,2)),"react-papercss-design":m},renderOpts:{compile:function(){var o=i()(d()().mark(function l(){var r,p=arguments;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(7335).then(e.bind(e,37335));case 2:return a.abrupt("return",(r=a.sent).default.apply(r,p));case 3:case"end":return a.stop()}},l)}));function c(){return o.apply(this,arguments)}return c}()}}}},34207:function(u,t,e){e.r(t),e.d(t,{texts:function(){return v}});var s=e(8781);const v=[{value:"Textarea input component for multi-line text",paraId:0,tocIndex:0},{value:"Property",paraId:1,tocIndex:6},{value:"Description",paraId:1,tocIndex:6},{value:"Type",paraId:1,tocIndex:6},{value:"Default",paraId:1,tocIndex:6},{value:"value",paraId:1,tocIndex:6},{value:"Textarea content (controlled)",paraId:1,tocIndex:6},{value:"string",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"defaultValue",paraId:1,tocIndex:6},{value:"Textarea content (uncontrolled)",paraId:1,tocIndex:6},{value:"string",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"onChange",paraId:1,tocIndex:6},{value:"Callback when textarea content changes",paraId:1,tocIndex:6},{value:"(value: string, e: ChangeEvent) => void",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"resize",paraId:1,tocIndex:6},{value:"Whether to allow resizing",paraId:1,tocIndex:6},{value:"boolean",paraId:1,tocIndex:6},{value:"true",paraId:1,tocIndex:6},{value:"disabled",paraId:1,tocIndex:6},{value:"Whether disabled",paraId:1,tocIndex:6},{value:"boolean",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6}]},44187:function(u,t){t.Z=`import React from 'react';
import { Textarea } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Textarea
      onChange={(v, e) => {
        console.log('textarea value and event', v, e);
      }}
      placeholder="Nice textarea"
    />
  );
};

export default App;
`},66406:function(u,t){t.Z=`import React from 'react';
import { Textarea } from 'react-papercss-design';

const App: React.FC = () => {
  const [value, setValue] = React.useState<string>('papcercss...papcercss...papcercss...');

  return (
    <Textarea
      value={value}
      onChange={(v) => {
        setValue(v);
      }}
    />
  );
};

export default App;
`},64158:function(u,t){t.Z=`import React from 'react';
import { Textarea } from 'react-papercss-design';

const App: React.FC = () => {
  return <Textarea defaultValue="Disabled" disabled />;
};

export default App;
`},39123:function(u,t){t.Z=`import React from 'react';
import { Textarea } from 'react-papercss-design';

const App: React.FC = () => {
  return <Textarea resize={false} />;
};

export default App;
`}}]);

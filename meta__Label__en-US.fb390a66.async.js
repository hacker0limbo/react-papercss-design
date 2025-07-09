"use strict";(self.webpackChunkreact_papercss_design=self.webpackChunkreact_papercss_design||[]).push([[4632],{91710:function(d,t,e){var r;e.r(t),e.d(t,{demos:function(){return f}});var p=e(17061),o=e.n(p),_=e(17156),m=e.n(_),a=e(67294),h=e(89317),I=e(54268),f={"src-label-demo-labelbase":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,39861))})),asset:{type:"BLOCK",id:"src-label-demo-labelbase",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(19462).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.0"}},entry:"index.tsx",title:"Basic",description:"Use htmlFor to associate with input components"},context:{react:r||(r=e.t(a,2)),"react-papercss-design":I},renderOpts:{compile:function(){var l=m()(o()().mark(function u(){var s,i=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,i));case 3:case"end":return n.stop()}},u)}));function c(){return l.apply(this,arguments)}return c}()}},"src-label-demo-labelformgroup":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,59889))})),asset:{type:"BLOCK",id:"src-label-demo-labelformgroup",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(77953).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.0"}},entry:"index.tsx",title:"Within Form.Group",description:"When used within Form.Group, htmlFor can be omitted and will default to using the controlId from Form.Group"},context:{react:r||(r=e.t(a,2)),"react-papercss-design":I},renderOpts:{compile:function(){var l=m()(o()().mark(function u(){var s,i=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,i));case 3:case"end":return n.stop()}},u)}));function c(){return l.apply(this,arguments)}return c}()}}}},7930:function(d,t,e){e.r(t),e.d(t,{texts:function(){return p}});var r=e(89317);const p=[{value:"A control identifier used to associate with input components",paraId:0,tocIndex:0},{value:"Property",paraId:1,tocIndex:5},{value:"Description",paraId:1,tocIndex:5},{value:"Type",paraId:1,tocIndex:5},{value:"Default",paraId:1,tocIndex:5},{value:"htmlFor",paraId:1,tocIndex:5},{value:"The ",paraId:1,tocIndex:5},{value:"for",paraId:1,tocIndex:5},{value:" attribute of ",paraId:1,tocIndex:5},{value:"label",paraId:1,tocIndex:5},{value:". If not specified and exists within ",paraId:1,tocIndex:5},{value:"Form.Group",paraId:1,tocIndex:5},{value:", will use ",paraId:1,tocIndex:5},{value:"controlId",paraId:1,tocIndex:5},{value:" as default",paraId:1,tocIndex:5},{value:"string | undefined",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"Accepts all other props of the ",paraId:2,tocIndex:5},{value:"<label>",paraId:2,tocIndex:5},{value:" component.",paraId:2,tocIndex:5}]},19462:function(d,t){t.Z=`import React from 'react';
import { Input, Label } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <>
      <Label htmlFor="paperInput">Input</Label>
      <Input id="paperInput" />
    </>
  );
};

export default App;
`},77953:function(d,t){t.Z=`import React from 'react';
import { Form, Input, Label } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Form.Group controlId="formGroupInput">
      <Label>Input</Label>
      <Input />
    </Form.Group>
  );
};

export default App;
`}}]);

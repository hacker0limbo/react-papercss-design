"use strict";(self.webpackChunkreact_papercss_design=self.webpackChunkreact_papercss_design||[]).push([[4755],{81438:function(i,n,e){var s;e.r(n),e.d(n,{demos:function(){return x}});var u=e(17061),d=e.n(u),y=e(17156),m=e.n(y),a=e(67294),A=e(46535),I=e(54268),x={"src-alert-demo-alertbase":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,34296))})),asset:{type:"BLOCK",id:"src-alert-demo-alertbase",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(23476).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.0"}},entry:"index.tsx",title:"Basic",description:"The simplest usage"},context:{react:s||(s=e.t(a,2)),"react-papercss-design":I},renderOpts:{compile:function(){var l=m()(d()().mark(function c(){var r,p=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,p));case 3:case"end":return t.stop()}},c)}));function o(){return l.apply(this,arguments)}return o}()}},"src-alert-demo-alertdismissible":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,8482))})),asset:{type:"BLOCK",id:"src-alert-demo-alertdismissible",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(66900).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.0"}},entry:"index.tsx",title:"Dismissible",description:"Display close button, click to dismiss the alert"},context:{react:s||(s=e.t(a,2)),"react-papercss-design":I},renderOpts:{compile:function(){var l=m()(d()().mark(function c(){var r,p=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,p));case 3:case"end":return t.stop()}},c)}));function o(){return l.apply(this,arguments)}return o}()}},"src-alert-demo-alertcustomclose":{component:a.memo(a.lazy(function(){return e.e(2433).then(e.bind(e,21387))})),asset:{type:"BLOCK",id:"src-alert-demo-alertcustomclose",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(70581).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.0"}},entry:"index.tsx",title:"Custom Close",description:"Customize the close functionality, custom text will replace the default close icon"},context:{react:s||(s=e.t(a,2)),"react-papercss-design":I},renderOpts:{compile:function(){var l=m()(d()().mark(function c(){var r,p=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,p));case 3:case"end":return t.stop()}},c)}));function o(){return l.apply(this,arguments)}return o}()}}}},54091:function(i,n,e){e.r(n),e.d(n,{texts:function(){return u}});var s=e(46535);const u=[{value:"Alert component to display important information that needs attention.",paraId:0,tocIndex:0},{value:"Reference: ",paraId:1,tocIndex:0},{value:"Alerts",paraId:1,tocIndex:0},{value:"There are some differences between the React-wrapped ",paraId:2,tocIndex:5},{value:"Alert",paraId:2,tocIndex:5},{value:" component and the original ",paraId:2,tocIndex:5},{value:"PaperCSS",paraId:2,tocIndex:5},{value:" component:",paraId:2,tocIndex:5},{value:"In PaperCSS Alert, when ",paraId:3,tocIndex:5},{value:"dismissible",paraId:3,tocIndex:5},{value:" is enabled and closed, the element is only hidden but the DOM element still exists. The redesigned component behavior is changed to: ",paraId:3,tocIndex:5},{value:"the component will be destroyed after closing, meaning the DOM element no longer exists",paraId:3,tocIndex:5},{value:".",paraId:3,tocIndex:5},{value:"Property",paraId:4,tocIndex:6},{value:"Description",paraId:4,tocIndex:6},{value:"Type",paraId:4,tocIndex:6},{value:"Default",paraId:4,tocIndex:6},{value:"type",paraId:4,tocIndex:6},{value:"Component style",paraId:4,tocIndex:6},{value:"primary",paraId:4,tocIndex:6},{value:", ",paraId:4,tocIndex:6},{value:"secondary",paraId:4,tocIndex:6},{value:", ",paraId:4,tocIndex:6},{value:"success",paraId:4,tocIndex:6},{value:", ",paraId:4,tocIndex:6},{value:"warning",paraId:4,tocIndex:6},{value:", ",paraId:4,tocIndex:6},{value:"danger",paraId:4,tocIndex:6},{value:"primary",paraId:4,tocIndex:6},{value:"onClose",paraId:4,tocIndex:6},{value:"Callback when close button is clicked",paraId:4,tocIndex:6},{value:"(e: MouseEvent) => void",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"afterClose",paraId:4,tocIndex:6},{value:"Callback after close animation ends",paraId:4,tocIndex:6},{value:"() => void",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"dismissible",paraId:4,tocIndex:6},{value:"Whether the alert can be dismissed",paraId:4,tocIndex:6},{value:"boolean",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6},{value:"closeLabel",paraId:4,tocIndex:6},{value:"Text for the close button",paraId:4,tocIndex:6},{value:"React.ReactNode",paraId:4,tocIndex:6},{value:"X",paraId:4,tocIndex:6}]},23476:function(i,n){n.Z=`import React from 'react';
import { Alert } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <>
      <Alert type="primary">Alert-primary</Alert>
      <Alert type="secondary">Alert-secondary</Alert>
      <Alert type="success">Alert-success</Alert>
      <Alert type="warning">Alert-warning</Alert>
      <Alert type="danger">Alert-danger</Alert>
    </>
  );
};

export default App;
`},70581:function(i,n){n.Z=`import React from 'react';
import { Alert } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <>
      <Alert type="primary" dismissible closeLabel="Close Me">
        Alert-primary
      </Alert>
    </>
  );
};

export default App;
`},66900:function(i,n){n.Z=`import React from 'react';
import { Alert } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <>
      <Alert type="primary" dismissible>
        Alert-primary
      </Alert>
      <Alert type="secondary" dismissible>
        Alert-secondary
      </Alert>
      <Alert type="success" dismissible>
        Alert-success
      </Alert>
      <Alert type="warning" dismissible>
        Alert-warning
      </Alert>
      <Alert type="danger" dismissible>
        Alert-danger
      </Alert>
    </>
  );
};

export default App;
`}}]);

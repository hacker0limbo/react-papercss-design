"use strict";(self.webpackChunkreact_papercss_design=self.webpackChunkreact_papercss_design||[]).push([[2487],{54366:function(u,n,e){var r;e.r(n),e.d(n,{demos:function(){return v}});var i=e(17061),s=e.n(i),h=e(17156),g=e.n(h),t=e(67294),x=e(79433),m=e(54268),v={"src-badge-demo-badgebase":{component:t.memo(t.lazy(function(){return e.e(2433).then(e.bind(e,50619))})),asset:{type:"BLOCK",id:"src-badge-demo-badgebase",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(31338).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.0"}},entry:"index.tsx",title:"Basic",description:"Badges with different colors"},context:{react:r||(r=e.t(t,2)),"react-papercss-design":m},renderOpts:{compile:function(){var c=g()(s()().mark(function p(){var d,l=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(7335).then(e.bind(e,37335));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,l));case 3:case"end":return a.stop()}},p)}));function o(){return c.apply(this,arguments)}return o}()}},"src-badge-demo-badgewithparent":{component:t.memo(t.lazy(function(){return e.e(2433).then(e.bind(e,43593))})),asset:{type:"BLOCK",id:"src-badge-demo-badgewithparent",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(57932).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.0"}},entry:"index.tsx",title:"Size",description:"Auto-adapts size when used with parent elements"},context:{react:r||(r=e.t(t,2)),"react-papercss-design":m},renderOpts:{compile:function(){var c=g()(s()().mark(function p(){var d,l=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(7335).then(e.bind(e,37335));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,l));case 3:case"end":return a.stop()}},p)}));function o(){return c.apply(this,arguments)}return o}()}},"src-badge-demo-badgeclosable":{component:t.memo(t.lazy(function(){return e.e(2433).then(e.bind(e,23827))})),asset:{type:"BLOCK",id:"src-badge-demo-badgeclosable",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(29945).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.0"}},entry:"index.tsx",title:"Closable Badge",description:"Use closable to show close button, onClose callback function to dynamically control deletion"},context:{react:r||(r=e.t(t,2)),"react-papercss-design":m},renderOpts:{compile:function(){var c=g()(s()().mark(function p(){var d,l=arguments;return s()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(7335).then(e.bind(e,37335));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,l));case 3:case"end":return a.stop()}},p)}));function o(){return c.apply(this,arguments)}return o}()}}}},39767:function(u,n,e){e.r(n),e.d(n,{texts:function(){return i}});var r=e(79433);const i=[{value:"Small labels for marking and categorization.",paraId:0,tocIndex:0},{value:"Reference: ",paraId:1,tocIndex:0},{value:"Badges",paraId:1,tocIndex:0},{value:"Property",paraId:2,tocIndex:5},{value:"Description",paraId:2,tocIndex:5},{value:"Type",paraId:2,tocIndex:5},{value:"Default",paraId:2,tocIndex:5},{value:"type",paraId:2,tocIndex:5},{value:"Style type",paraId:2,tocIndex:5},{value:"'primary'",paraId:2,tocIndex:5},{value:", ",paraId:2,tocIndex:5},{value:"'secondary'",paraId:2,tocIndex:5},{value:", ",paraId:2,tocIndex:5},{value:"'success'",paraId:2,tocIndex:5},{value:", ",paraId:2,tocIndex:5},{value:"'warning'",paraId:2,tocIndex:5},{value:", ",paraId:2,tocIndex:5},{value:"'danger'",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"closable",paraId:2,tocIndex:5},{value:"Whether to show close button",paraId:2,tocIndex:5},{value:"boolean",paraId:2,tocIndex:5},{value:"false",paraId:2,tocIndex:5},{value:"onClose",paraId:2,tocIndex:5},{value:"Callback when close button is clicked",paraId:2,tocIndex:5},{value:"(e: MouseEvent) => void",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"closeLabel",paraId:2,tocIndex:5},{value:"Text for close button",paraId:2,tocIndex:5},{value:"React.ReactNode",paraId:2,tocIndex:5},{value:"'X'",paraId:2,tocIndex:5},{value:"disabled",paraId:2,tocIndex:5},{value:"Whether the badge is disabled",paraId:2,tocIndex:5},{value:"boolean",paraId:2,tocIndex:5},{value:"false",paraId:2,tocIndex:5}]},31338:function(u,n){n.Z=`import React from 'react';
import { Badge, Space } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Space wrap>
      <Badge>Default</Badge>
      <Badge type="primary">Primary</Badge>
      <Badge type="secondary">Secondary</Badge>
      <Badge type="success">Success</Badge>
      <Badge type="danger">Danger</Badge>
      <Badge type="warning">Warning</Badge>
      <Badge disabled>Disabled</Badge>
    </Space>
  );
};

export default App;
`},29945:function(u,n){n.Z=`import React, { useState } from 'react';
import { Badge, Space } from 'react-papercss-design';

const App: React.FC = () => {
  const [tags, setTags] = useState<string[]>(['Unremovable', 'Tag 2', 'Disabled']);

  return (
    <Space>
      {tags.map((tag, index) => (
        <Badge
          key={tag}
          closable={index !== 0}
          disabled={index === tags.length - 1}
          onClose={() => {
            setTags(tags.filter((t) => t !== tag));
          }}
        >
          {tag}
        </Badge>
      ))}
    </Space>
  );
};

export default App;
`},57932:function(u,n){n.Z=`import React from 'react';
import { Badge } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <>
      <h1>
        Example h1 heading <Badge>123</Badge>
      </h1>
      <h2>
        Example h2 heading <Badge type="primary">123</Badge>
      </h2>
      <h3>
        Example h3 heading <Badge type="secondary">123</Badge>
      </h3>
      <h4>
        Example h4 heading <Badge type="success">123</Badge>
      </h4>
      <h5>
        Example h5 heading <Badge type="warning">123</Badge>
      </h5>
      <h6>
        Example h6 heading <Badge type="danger">123</Badge>
      </h6>
    </>
  );
};

export default App;
`}}]);

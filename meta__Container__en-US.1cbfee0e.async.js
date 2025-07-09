"use strict";(self.webpackChunkreact_papercss_design=self.webpackChunkreact_papercss_design||[]).push([[8187],{43777:function(o,n,e){var t;e.r(n),e.d(n,{demos:function(){return l}});var r=e(17061),i=e.n(r),c=e(17156),p=e.n(c),s=e(67294),C=e(43677),_=e(54268),l={"src-container-demo-containerbase":{component:s.memo(s.lazy(function(){return e.e(2433).then(e.bind(e,9362))})),asset:{type:"BLOCK",id:"src-container-demo-containerbase",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(57128).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.0"}},entry:"index.tsx",title:"Basic",description:"Use size to set different responsive sizes"},context:{react:t||(t=e.t(s,2)),"react-papercss-design":_},renderOpts:{compile:function(){var u=p()(i()().mark(function I(){var d,v=arguments;return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(7335).then(e.bind(e,37335));case 2:return a.abrupt("return",(d=a.sent).default.apply(d,v));case 3:case"end":return a.stop()}},I)}));function m(){return u.apply(this,arguments)}return m}()}}}},80172:function(o,n,e){e.r(n),e.d(n,{texts:function(){return r}});var t=e(43677);const r=[{value:"Sets spacing between components.",paraId:0,tocIndex:0},{value:"Reference: ",paraId:1,tocIndex:0},{value:"Container",paraId:1,tocIndex:0},{value:"Excerpt from PaperCSS original documentation:",paraId:2,tocIndex:0},{value:"The container is usually at the root of the HTML and holds all of the content in a fixed size. PaperCSS supports a few different sizes to make setting your content within a certain max-width easy.",paraId:3,tocIndex:0},{value:"Property",paraId:4,tocIndex:3},{value:"Description",paraId:4,tocIndex:3},{value:"Type",paraId:4,tocIndex:3},{value:"Default",paraId:4,tocIndex:3},{value:"size",paraId:4,tocIndex:3},{value:"Responsive size",paraId:4,tocIndex:3},{value:"'lg' | 'md' | 'sm' | 'xs'",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3}]},57128:function(o,n){n.Z=`import React from 'react';
import { Container, Space } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Space direction="vertical">
      <Container>Responsive Container!</Container>
      <Container size="lg">Large Container!</Container>
      <Container size="md">Medium Container!</Container>
      <Container size="sm">Small Container!</Container>
      <Container size="xs">Extra Small Container!</Container>
    </Space>
  );
};

export default App;
`}}]);

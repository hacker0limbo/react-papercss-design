"use strict";(self.webpackChunkreact_papercss_design=self.webpackChunkreact_papercss_design||[]).push([[810],{50702:function(o,n,e){var r;e.r(n),e.d(n,{demos:function(){return l}});var t=e(17061),d=e.n(t),i=e(17156),_=e.n(i),s=e(67294),v=e(38694),p=e(71600),l={"src-container-demo-containerbase":{component:s.memo(s.lazy(function(){return e.e(2433).then(e.bind(e,9362))})),asset:{type:"BLOCK",id:"src-container-demo-containerbase",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(57128).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.0.4"}},entry:"index.tsx",title:"\u57FA\u672C",description:"\u4F7F\u7528size\u6765\u7ED9\u5B9A\u4E0D\u540C\u54CD\u5E94\u5F0F\u5927\u5C0F"},context:{react:r||(r=e.t(s,2)),"react-papercss-design":p},renderOpts:{compile:function(){var u=_()(d()().mark(function I(){var c,C=arguments;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(7335).then(e.bind(e,37335));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,C));case 3:case"end":return a.stop()}},I)}));function m(){return u.apply(this,arguments)}return m}()}}}},97766:function(o,n,e){e.r(n),e.d(n,{texts:function(){return t}});var r=e(38694);const t=[{value:"\u8BBE\u7F6E\u7EC4\u4EF6\u4E4B\u95F4\u7684\u95F4\u8DDD\u3002",paraId:0,tocIndex:0},{value:"\u53C2\u8003: ",paraId:1,tocIndex:0},{value:"Container",paraId:1,tocIndex:0},{value:"\u6458\u81EA PaperCSS \u539F\u6587:",paraId:2,tocIndex:0},{value:"The container is usually at the root of the HTML and holds all of the content in a fixed size. PaperCSS supports a few different sizes to make setting your content within a certain max-width easy.",paraId:3,tocIndex:0},{value:"\u53C2\u6570",paraId:4,tocIndex:3},{value:"\u8BF4\u660E",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:3},{value:"size",paraId:4,tocIndex:3},{value:"\u54CD\u5E94\u5F0F\u5927\u5C0F",paraId:4,tocIndex:3},{value:"'lg' | 'md' | 'sm' | 'xs'",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3}]},57128:function(o,n){n.Z=`import React from 'react';
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

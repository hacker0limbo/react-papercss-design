"use strict";(self.webpackChunkreact_papercss_design=self.webpackChunkreact_papercss_design||[]).push([[8344],{5989:function(d,n,e){var r;e.r(n),e.d(n,{demos:function(){return i}});var t=e(17061),c=e.n(t),_=e(17156),p=e.n(_),s=e(67294),f=e(15577),l=e(54268),i={"src-back-top-demo-backtopbase":{component:s.memo(s.lazy(function(){return e.e(2433).then(e.bind(e,40952))})),asset:{type:"BLOCK",id:"src-back-top-demo-backtopbase",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(49214).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.0"}},entry:"index.tsx",title:"\u57FA\u672C",description:"\u57FA\u672C\u7684\u8FD4\u56DE\u9876\u90E8"},context:{react:r||(r=e.t(s,2)),"react-papercss-design":l},renderOpts:{compile:function(){var u=p()(c()().mark(function v(){var o,I=arguments;return c()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(7335).then(e.bind(e,37335));case 2:return a.abrupt("return",(o=a.sent).default.apply(o,I));case 3:case"end":return a.stop()}},v)}));function m(){return u.apply(this,arguments)}return m}()}}}},90807:function(d,n,e){e.r(n),e.d(n,{texts:function(){return t}});var r=e(15577);const t=[{value:"\u7528\u4E8E\u8FD4\u56DE\u9875\u9762\u9876\u90E8",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:3},{value:"\u8BF4\u660E",paraId:1,tocIndex:3},{value:"\u7C7B\u578B",paraId:1,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:3},{value:"target",paraId:1,tocIndex:3},{value:"\u7ED1\u5B9A\u76D1\u542C\u6EDA\u52A8\u4E8B\u4EF6\u7684\u5143\u7D20",paraId:1,tocIndex:3},{value:"RefObject<HTMLElement>",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"visibilityHeight",paraId:1,tocIndex:3},{value:"\u6EDA\u52A8\u9AD8\u5EA6\u8FBE\u5230\u6B64\u53C2\u6570\u503C\u624D\u663E\u793A\u6309\u94AE",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"400",paraId:1,tocIndex:3}]},49214:function(d,n){n.Z=`import React, { useRef } from 'react';
import { BackTop } from 'react-papercss-design';

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div
        style={{
          width: '100%',
          height: '280px',
          overflowY: 'scroll',
          overflowX: 'hidden',
          border: '1px solid #dcdcdcff',
        }}
        ref={containerRef}
      >
        {Array.from(Array(50), () => 'scroll bottom').map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <BackTop target={containerRef} />
    </div>
  );
};

export default App;
`}}]);

"use strict";(self.webpackChunkreact_papercss_design=self.webpackChunkreact_papercss_design||[]).push([[6422],{73126:function(o,n,e){var a;e.r(n),e.d(n,{demos:function(){return i}});var r=e(17061),d=e.n(r),p=e(17156),_=e.n(p),s=e(67294),h=e(89906),l=e(54268),i={"src-back-top-demo-backtopbase":{component:s.memo(s.lazy(function(){return e.e(2433).then(e.bind(e,40952))})),asset:{type:"BLOCK",id:"src-back-top-demo-backtopbase",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(49214).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.0"}},entry:"index.tsx",title:"Basic",description:"Basic back to top"},context:{react:a||(a=e.t(s,2)),"react-papercss-design":l},renderOpts:{compile:function(){var u=_()(d()().mark(function v(){var c,I=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(c=t.sent).default.apply(c,I));case 3:case"end":return t.stop()}},v)}));function m(){return u.apply(this,arguments)}return m}()}}}},23094:function(o,n,e){e.r(n),e.d(n,{texts:function(){return r}});var a=e(89906);const r=[{value:"Used to return to the top of the page",paraId:0,tocIndex:0},{value:"Property",paraId:1,tocIndex:3},{value:"Description",paraId:1,tocIndex:3},{value:"Type",paraId:1,tocIndex:3},{value:"Default",paraId:1,tocIndex:3},{value:"target",paraId:1,tocIndex:3},{value:"Element to bind scroll event listener",paraId:1,tocIndex:3},{value:"RefObject<HTMLElement>",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"visibilityHeight",paraId:1,tocIndex:3},{value:"Show button when scroll height reaches this value",paraId:1,tocIndex:3},{value:"number",paraId:1,tocIndex:3},{value:"400",paraId:1,tocIndex:3}]},49214:function(o,n){n.Z=`import React, { useRef } from 'react';
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

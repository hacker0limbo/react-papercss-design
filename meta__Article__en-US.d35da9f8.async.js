"use strict";(self.webpackChunkreact_papercss_design=self.webpackChunkreact_papercss_design||[]).push([[986],{36719:function(o,a,e){var n;e.r(a),e.d(a,{demos:function(){return u}});var r=e(17061),d=e.n(r),c=e(17156),p=e.n(c),s=e(67294),x=e(75184),l=e(54268),u={"src-article-demo-articlebase":{component:s.memo(s.lazy(function(){return e.e(2433).then(e.bind(e,36653))})),asset:{type:"BLOCK",id:"src-article-demo-articlebase",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(18433).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.0"}},entry:"index.tsx",title:"Basic",description:"Basic article example"},context:{react:n||(n=e.t(s,2)),"react-papercss-design":l},renderOpts:{compile:function(){var _=p()(d()().mark(function I(){var i,v=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,v));case 3:case"end":return t.stop()}},I)}));function m(){return _.apply(this,arguments)}return m}()}}}},45447:function(o,a,e){e.r(a),e.d(a,{texts:function(){return r}});var n=e(75184);const r=[{value:"Configurable display of content segments",paraId:0,tocIndex:0},{value:"Reference: ",paraId:1,tocIndex:0},{value:"Articles",paraId:1,tocIndex:0},{value:"Property",paraId:2,tocIndex:3},{value:"Description",paraId:2,tocIndex:3},{value:"Type",paraId:2,tocIndex:3},{value:"Default",paraId:2,tocIndex:3},{value:"title",paraId:2,tocIndex:3},{value:"Article title",paraId:2,tocIndex:3},{value:"React.ReactNode",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"meta",paraId:2,tocIndex:3},{value:"Meta information",paraId:2,tocIndex:3},{value:"React.ReactNode",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"textLead",paraId:2,tocIndex:3},{value:"Lead text",paraId:2,tocIndex:3},{value:"React.ReactNode",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"footer",paraId:2,tocIndex:3},{value:"Footer area",paraId:2,tocIndex:3},{value:"React.ReactNode",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3}]},18433:function(o,a){a.Z=`import React from 'react';
import { Article, Button, Row } from 'react-papercss-design';

const App: React.FC = () => {
  return (
    <Article
      title="Article Title"
      meta="Written by Super User on 24 November 2017. Posted in Blog"
      textLead="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur repellendus excepturi,
        consequatur illo rerum, non sint asperiores dolore sapiente, vitae blanditiis. Officiis at
        quaerat modi earum, fugiat magni impedit, aperiam."
      footer={
        <Row>
          <Button>Read More</Button>
          <Button>5 Comments</Button>
        </Row>
      }
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti iure totam nam debitis
        aliquid impedit, et quas omnis aspernatur optio molestias ex laborum quia. Ducimus culpa
        tempore, veritatis officia delectus dolore dignissimos reprehenderit vero, sunt odit placeat
        est non molestiae ipsa nam velit in iusto hic quasi similique facere. Maxime?
      </p>
    </Article>
  );
};

export default App;
`}}]);

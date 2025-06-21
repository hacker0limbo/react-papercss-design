"use strict";(self.webpackChunkreact_papercss_design=self.webpackChunkreact_papercss_design||[]).push([[7856],{12159:function(o,n,e){var l;e.r(n),e.d(n,{demos:function(){return m}});var s=e(17061),r=e.n(s),u=e(17156),i=e.n(u),t=e(67294),g=e(29188),p=e(12276),d=e(53494),m={"src-f-lexbox-demo-flexboxbase":{component:t.memo(t.lazy(function(){return e.e(2433).then(e.bind(e,97683))})),asset:{type:"BLOCK",id:"src-f-lexbox-demo-flexboxbase",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(833).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.0"},"./demo.css":{type:"FILE",value:e(39544).Z}},entry:"index.tsx",title:"Basic",description:"Basic layout"},context:{"./demo.css":d,react:l||(l=e.t(t,2)),"react-papercss-design":p,"/home/runner/work/react-papercss-design/react-papercss-design/src/FLexbox/demos/demo.css":d},renderOpts:{compile:function(){var I=i()(r()().mark(function C(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(7335).then(e.bind(e,37335));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},C)}));function _(){return I.apply(this,arguments)}return _}()}}}},53494:function(o,n,e){e.r(n)},99847:function(o,n,e){e.r(n),e.d(n,{texts:function(){return s}});var l=e(29188);const s=[{value:"Assists with page-level overall layout.",paraId:0,tocIndex:0},{value:"Reference: ",paraId:1,tocIndex:0},{value:"Flexbox",paraId:1,tocIndex:0},{value:"Excerpt from PaperCSS original documentation:",paraId:2,tocIndex:0},{value:"The flexgrid is a grid system that supports up to 12 columns per row. Because it uses flexbox (rather than just %widths), we also get the benefit of the fun parts of flexbox like alignment in more complex ways than normal.",paraId:3,tocIndex:0},{value:"Property",paraId:4,tocIndex:4},{value:"Description",paraId:4,tocIndex:4},{value:"Type",paraId:4,tocIndex:4},{value:"Default",paraId:4,tocIndex:4},{value:"justify",paraId:4,tocIndex:4},{value:"Main axis alignment",paraId:4,tocIndex:4},{value:"'right' | 'center' | 'edges' | 'spaces'",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"align",paraId:4,tocIndex:4},{value:"Cross axis alignment",paraId:4,tocIndex:4},{value:"'top' | 'middle' | 'bottom'",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"Property",paraId:5,tocIndex:5},{value:"Description",paraId:5,tocIndex:5},{value:"Type",paraId:5,tocIndex:5},{value:"Default",paraId:5,tocIndex:5},{value:"span",paraId:5,tocIndex:5},{value:"Number of columns to occupy",paraId:5,tocIndex:5},{value:"number",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"sm",paraId:5,tocIndex:5},{value:"Columns for small screens",paraId:5,tocIndex:5},{value:"number",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"md",paraId:5,tocIndex:5},{value:"Columns for medium screens",paraId:5,tocIndex:5},{value:"number",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"lg",paraId:5,tocIndex:5},{value:"Columns for large screens",paraId:5,tocIndex:5},{value:"number",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"xs",paraId:5,tocIndex:5},{value:"Columns for extra small screens",paraId:5,tocIndex:5},{value:"number",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"fill",paraId:5,tocIndex:5},{value:"Auto fill remaining space",paraId:5,tocIndex:5},{value:"boolean",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"align",paraId:5,tocIndex:5},{value:"Vertical alignment",paraId:5,tocIndex:5},{value:"'top' | 'middle' | 'bottom'",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5}]},833:function(o,n){n.Z=`import React from 'react';
import { Col, Row } from 'react-papercss-design';

import './demo.css';

const App: React.FC = () => {
  return (
    <div className="grid-demo">
      <Row>
        <Col span={4}>col-4 col</Col>
        <Col span={4}>col-4 col</Col>
        <Col span={4}>col-4 col</Col>
      </Row>
      <Row>
        <Col span={3}>col-3 col</Col>
        <Col span={9}>col-9 col</Col>
      </Row>
      <Row>
        <Col sm={6} md={8} lg={10}>
          sm-6 md-8 lg-10 col
        </Col>
        <Col sm={6} md={4} lg={2}>
          sm-6 md-4 lg-2 col
        </Col>
      </Row>
      <Row>
        <Col sm={5}>sm-5 col</Col>
        <Col fill>col-fill col</Col>
        <Col fill>col-fill col</Col>
      </Row>
      <Row>
        <Col sm={4}>Aligned</Col>
        <Col sm={4}>Left (default)</Col>
      </Row>
      <Row justify="right">
        <Col sm={4}>Aligned</Col>
        <Col sm={4}>Right (flex-right)</Col>
      </Row>
      <Row justify="center">
        <Col sm={4}>Aligned</Col>
        <Col sm={4}>Center (flex-center)</Col>
      </Row>
      <Row justify="edges">
        <Col sm={4}>Aligned</Col>
        <Col sm={4}>to edges (flex-edges)</Col>
      </Row>
      <Row justify="spaces">
        <Col sm={4}>Aligned</Col>
        <Col sm={4}>to be evenly spaced (flex-spaces)</Col>
      </Row>
      <Row align="top">
        <Col sm={6}>Aligned top</Col>
        <Col sm={6}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a
          nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit
          suscipit, blandit dolor.
        </Col>
      </Row>
      <Row align="middle">
        <Col sm={6}>Aligned middle</Col>
        <Col sm={6}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a
          nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit
          suscipit, blandit dolor.
        </Col>
      </Row>
      <Row align="bottom">
        <Col sm={6}>Aligned bottom</Col>
        <Col sm={6}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a
          nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit
          suscipit, blandit dolor.
        </Col>
      </Row>
      <Row>
        <Col sm={3} align="bottom">
          Align bottom
        </Col>
        <Col sm={3} align="middle">
          Align middle
        </Col>
        <Col sm={3} align="top">
          Align top
        </Col>
        <Col sm={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a
          nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit
          suscipit, blandit dolor.
        </Col>
      </Row>
    </div>
  );
};

export default App;
`},39544:function(o,n){n.Z=`.grid-demo .row .col {
  background-color: #eee;
}

.grid-demo .row .col:nth-child(even) {
  background-color: #ddd;
}
`}}]);

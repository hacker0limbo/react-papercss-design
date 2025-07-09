"use strict";(self.webpackChunkreact_papercss_design=self.webpackChunkreact_papercss_design||[]).push([[4473],{51755:function(o,n,e){var l;e.r(n),e.d(n,{demos:function(){return m}});var t=e(17061),r=e.n(t),u=e(17156),i=e.n(u),s=e(67294),g=e(2040),p=e(54268),d=e(53494),m={"src-f-lexbox-demo-flexboxbase":{component:s.memo(s.lazy(function(){return e.e(2433).then(e.bind(e,97683))})),asset:{type:"BLOCK",id:"src-f-lexbox-demo-flexboxbase",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(833).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.0"},"./demo.css":{type:"FILE",value:e(39544).Z}},entry:"index.tsx",title:"\u57FA\u672C",description:"\u57FA\u672C\u7684\u5E03\u5C40"},context:{"./demo.css":d,react:l||(l=e.t(s,2)),"react-papercss-design":p,"/home/runner/work/react-papercss-design/react-papercss-design/src/FLexbox/demos/demo.css":d},renderOpts:{compile:function(){var I=i()(r()().mark(function C(){var c,x=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(7335).then(e.bind(e,37335));case 2:return a.abrupt("return",(c=a.sent).default.apply(c,x));case 3:case"end":return a.stop()}},C)}));function _(){return I.apply(this,arguments)}return _}()}}}},53494:function(o,n,e){e.r(n)},62737:function(o,n,e){e.r(n),e.d(n,{texts:function(){return t}});var l=e(2040);const t=[{value:"\u534F\u52A9\u8FDB\u884C\u9875\u9762\u7EA7\u6574\u4F53\u5E03\u5C40\u3002",paraId:0,tocIndex:0},{value:"\u53C2\u8003: ",paraId:1,tocIndex:0},{value:"Flexbox",paraId:1,tocIndex:0},{value:"\u6458\u81EA PaperCSS \u539F\u6587:",paraId:2,tocIndex:0},{value:"The flexgrid is a grid system that supports up to 12 columns per row. Because it uses flexbox (rather than just %widths), we also get the benefit of the fun parts of flexbox like alignment in more complex ways than normal.",paraId:3,tocIndex:0},{value:"\u53C2\u6570",paraId:4,tocIndex:4},{value:"\u8BF4\u660E",paraId:4,tocIndex:4},{value:"\u7C7B\u578B",paraId:4,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:4},{value:"justify",paraId:4,tocIndex:4},{value:"\u4E3B\u8F74\u5BF9\u9F50\u65B9\u5F0F",paraId:4,tocIndex:4},{value:"'right' | 'center' | 'edges' | 'spaces'",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"align",paraId:4,tocIndex:4},{value:"\u4EA4\u53C9\u8F74\u5BF9\u9F50\u65B9\u5F0F",paraId:4,tocIndex:4},{value:"'top' | 'middle' | 'bottom'",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"\u53C2\u6570",paraId:5,tocIndex:5},{value:"\u8BF4\u660E",paraId:5,tocIndex:5},{value:"\u7C7B\u578B",paraId:5,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:5},{value:"span",paraId:5,tocIndex:5},{value:"\u5360\u636E\u7684\u5217\u6570",paraId:5,tocIndex:5},{value:"number",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"sm",paraId:5,tocIndex:5},{value:"\u5C0F\u5C4F\u5E55\u5360\u636E\u7684\u5217\u6570",paraId:5,tocIndex:5},{value:"number",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"md",paraId:5,tocIndex:5},{value:"\u4E2D\u7B49\u5C4F\u5E55\u5360\u636E\u7684\u5217\u6570",paraId:5,tocIndex:5},{value:"number",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"lg",paraId:5,tocIndex:5},{value:"\u5927\u5C4F\u5E55\u5360\u636E\u7684\u5217\u6570",paraId:5,tocIndex:5},{value:"number",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"xs",paraId:5,tocIndex:5},{value:"\u8D85\u5C0F\u5C4F\u5E55\u5360\u636E\u7684\u5217\u6570",paraId:5,tocIndex:5},{value:"number",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"fill",paraId:5,tocIndex:5},{value:"\u662F\u5426\u81EA\u52A8\u586B\u5145\u5269\u4F59\u7A7A\u95F4",paraId:5,tocIndex:5},{value:"boolean",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"align",paraId:5,tocIndex:5},{value:"\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F",paraId:5,tocIndex:5},{value:"'top' | 'middle' | 'bottom'",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5}]},833:function(o,n){n.Z=`import React from 'react';
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

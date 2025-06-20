"use strict";(self.webpackChunkreact_papercss_design=self.webpackChunkreact_papercss_design||[]).push([[7151],{94073:function(o,a,e){var t;e.r(a),e.d(a,{demos:function(){return I}});var r=e(17061),s=e.n(r),l=e(17156),p=e.n(l),d=e(67294),x=e(64073),u=e(12276),I={"src-table-demo-tablebase":{component:d.memo(d.lazy(function(){return e.e(2433).then(e.bind(e,83215))})),asset:{type:"BLOCK",id:"src-table-demo-tablebase",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(91623).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.0.11"}},entry:"index.tsx",title:"\u57FA\u672C",description:"\u7B80\u5355\u7684\u8868\u683C, \u53EF\u4EE5\u4F7F\u7528render\u8FDB\u884C\u81EA\u5B9A\u4E49\u5C55\u793A, \u6DFB\u52A0stripped\u6216\u8005hoverable\u8FDB\u884C\u4E0D\u540C\u7684\u6837\u5F0F\u5C55\u793A"},context:{react:t||(t=e.t(d,2)),"react-papercss-design":u},renderOpts:{compile:function(){var i=p()(s()().mark(function v(){var c,m=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(c=n.sent).default.apply(c,m));case 3:case"end":return n.stop()}},v)}));function _(){return i.apply(this,arguments)}return _}()}}}},80982:function(o,a,e){e.r(a),e.d(a,{texts:function(){return r}});var t=e(64073);const r=[{value:"\u5C55\u793A\u884C\u5217\u6570\u636E",paraId:0,tocIndex:0},{value:"\u53C2\u8003: ",paraId:1,tocIndex:0},{value:"Tables",paraId:1,tocIndex:0},{value:"\u53C2\u6570",paraId:2,tocIndex:4},{value:"\u8BF4\u660E",paraId:2,tocIndex:4},{value:"\u7C7B\u578B",paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"dataSource",paraId:2,tocIndex:4},{value:"\u8868\u683C\u6570\u636E\u6E90",paraId:2,tocIndex:4},{value:"RecordType[]",paraId:2,tocIndex:4},{value:"[]",paraId:2,tocIndex:4},{value:"columns",paraId:2,tocIndex:4},{value:"\u5217\u914D\u7F6E",paraId:2,tocIndex:4},{value:"TableColumn<RecordType>[]",paraId:2,tocIndex:4},{value:"[]",paraId:2,tocIndex:4},{value:"striped",paraId:2,tocIndex:4},{value:"\u662F\u5426\u663E\u793A\u6591\u9A6C\u7EB9",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"hoverable",paraId:2,tocIndex:4},{value:"\u662F\u5426\u663E\u793A\u60AC\u6D6E\u9AD8\u4EAE",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"\u53C2\u6570",paraId:3,tocIndex:5},{value:"\u8BF4\u660E",paraId:3,tocIndex:5},{value:"\u7C7B\u578B",paraId:3,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:5},{value:"title",paraId:3,tocIndex:5},{value:"\u5217\u5934\u663E\u793A\u5185\u5BB9",paraId:3,tocIndex:5},{value:"React.ReactNode",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"dataIndex",paraId:3,tocIndex:5},{value:"\u6570\u636E\u5B57\u6BB5",paraId:3,tocIndex:5},{value:"string",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"render",paraId:3,tocIndex:5},{value:"\u81EA\u5B9A\u4E49\u5355\u5143\u683C\u6E32\u67D3",paraId:3,tocIndex:5},{value:"(value, record, index) => React.ReactNode",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5}]},91623:function(o,a){a.Z=`import React from 'react';
import { Table, TableColumn } from 'react-papercss-design';

type DataType = {
  rank: number;
  name: string;
  position: string;
  location: {
    country: string;
    state: string;
  };
};

const columns: TableColumn<DataType>[] = [
  {
    title: '#',
    dataIndex: 'rank',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Position',
    dataIndex: 'position',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    render: (value) => \`\${value.country}, \${value.state}\`,
  },
];

const data: DataType[] = [
  {
    rank: 1,
    name: 'Bob Dylan',
    position: 'Musician',
    location: {
      country: 'USA',
      state: 'California',
    },
  },
  {
    rank: 2,
    name: 'Eric Clapton',
    position: 'Musician',
    location: {
      country: 'USA',
      state: 'Ohio',
    },
  },
  {
    rank: 3,
    name: 'Daniel Kahneman',
    position: 'Psychologist',
    location: {
      country: 'USA',
      state: 'California',
    },
  },
];

const App: React.FC = () => {
  return <Table striped hoverable dataSource={data} columns={columns} />;
};

export default App;
`}}]);

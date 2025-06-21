"use strict";(self.webpackChunkreact_papercss_design=self.webpackChunkreact_papercss_design||[]).push([[7825],{26598:function(d,a,e){var t;e.r(a),e.d(a,{demos:function(){return i}});var r=e(17061),s=e.n(r),l=e(17156),p=e.n(l),o=e(67294),x=e(90022),u=e(12276),i={"src-table-demo-tablebase":{component:o.memo(o.lazy(function(){return e.e(2433).then(e.bind(e,83215))})),asset:{type:"BLOCK",id:"src-table-demo-tablebase",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(91623).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.1.0"}},entry:"index.tsx",title:"Basic",description:"Simple table, use render for custom display, add striped or hoverable for different style presentations"},context:{react:t||(t=e.t(o,2)),"react-papercss-design":u},renderOpts:{compile:function(){var I=p()(s()().mark(function v(){var c,m=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(c=n.sent).default.apply(c,m));case 3:case"end":return n.stop()}},v)}));function _(){return I.apply(this,arguments)}return _}()}}}},31573:function(d,a,e){e.r(a),e.d(a,{texts:function(){return r}});var t=e(90022);const r=[{value:"Display row and column data",paraId:0,tocIndex:0},{value:"Reference: ",paraId:1,tocIndex:0},{value:"Tables",paraId:1,tocIndex:0},{value:"Property",paraId:2,tocIndex:4},{value:"Description",paraId:2,tocIndex:4},{value:"Type",paraId:2,tocIndex:4},{value:"Default",paraId:2,tocIndex:4},{value:"dataSource",paraId:2,tocIndex:4},{value:"Table data source",paraId:2,tocIndex:4},{value:"RecordType[]",paraId:2,tocIndex:4},{value:"[]",paraId:2,tocIndex:4},{value:"columns",paraId:2,tocIndex:4},{value:"Column configuration",paraId:2,tocIndex:4},{value:"TableColumn<RecordType>[]",paraId:2,tocIndex:4},{value:"[]",paraId:2,tocIndex:4},{value:"striped",paraId:2,tocIndex:4},{value:"Whether to show zebra stripes",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"hoverable",paraId:2,tocIndex:4},{value:"Whether to show hover highlight",paraId:2,tocIndex:4},{value:"boolean",paraId:2,tocIndex:4},{value:"false",paraId:2,tocIndex:4},{value:"Property",paraId:3,tocIndex:5},{value:"Description",paraId:3,tocIndex:5},{value:"Type",paraId:3,tocIndex:5},{value:"Default",paraId:3,tocIndex:5},{value:"title",paraId:3,tocIndex:5},{value:"Column header content",paraId:3,tocIndex:5},{value:"React.ReactNode",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"dataIndex",paraId:3,tocIndex:5},{value:"Data field",paraId:3,tocIndex:5},{value:"string",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"render",paraId:3,tocIndex:5},{value:"Custom cell rendering",paraId:3,tocIndex:5},{value:"(value, record, index) => React.ReactNode",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5}]},91623:function(d,a){a.Z=`import React from 'react';
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

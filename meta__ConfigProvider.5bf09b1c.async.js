"use strict";(self.webpackChunkreact_papercss_design=self.webpackChunkreact_papercss_design||[]).push([[9895],{19794:function(t,n,e){e.r(n),e.d(n,{demos:function(){return _}});var a=e(17061),s=e.n(a),c=e(17156),i=e.n(c),o=e(67294),h=e(49974),p=e(71600),_={"src-config-provider-demo-configprovidertheme":{component:o.memo(o.lazy(function(){return e.e(2433).then(e.bind(e,42555))})),asset:{type:"BLOCK",id:"src-config-provider-demo-configprovidertheme",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(95550).Z},"react-papercss-design":{type:"NPM",value:"0.0.7"}},entry:"index.tsx",description:"\u9ED8\u8BA4\u4E3A\u4EAE\u8272\u4E3B\u9898, \u53EF\u914D\u7F6E\u4E3A\u6697\u8272\u4E3B\u9898, \u540C\u65F6\u53EF\u901A\u8FC7\u914D\u5408 useTheme",title:"\u4E3B\u9898"},context:{"react-papercss-design":p},renderOpts:{compile:function(){var m=i()(s()().mark(function l(){var d,g=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(7335).then(e.bind(e,37335));case 2:return r.abrupt("return",(d=r.sent).default.apply(d,g));case 3:case"end":return r.stop()}},l)}));function u(){return m.apply(this,arguments)}return u}()}}}},12908:function(t,n,e){e.r(n),e.d(n,{texts:function(){return s}});var a=e(49974);const s=[{value:"\u4E3A\u7EC4\u4EF6\u63D0\u4F9B\u7EDF\u4E00\u7684\u5168\u5C40\u5316\u914D\u7F6E\u3002",paraId:0,tocIndex:0},{value:"ConfigProvider \u4F7F\u7528 React \u7684 ",paraId:1,tocIndex:1},{value:"context",paraId:1,tocIndex:1},{value:" \u7279\u6027\uFF0C\u53EA\u9700\u5728\u5E94\u7528\u5916\u56F4\u5305\u88F9\u4E00\u6B21\u5373\u53EF\u5168\u5C40\u751F\u6548\u3002",paraId:1,tocIndex:1},{value:`import React from 'react';
import { ConfigProvider } from 'react-papercss-design';

// ...
const Demo = () => (
  <ConfigProvider theme="dark">
    <App />
  </ConfigProvider>
);

export default Demo;
`,paraId:2,tocIndex:1}]},95550:function(t,n){n.Z=`import { ConfigProvider, hooks, Space, Switch } from 'react-papercss-design';

const App = () => {
  const { theme, setTheme, tokens } = hooks.useTheme();

  return (
    <div style={{ background: tokens.primaryInverse, padding: 20 }}>
      <Space gap="small">
        <span>{theme}:</span>
        <Switch
          type="inline"
          round
          onChange={(checked) => {
            setTheme(checked ? 'dark' : 'light');
          }}
        />
      </Space>
    </div>
  );
};

export default () => {
  return (
    <ConfigProvider theme="light">
      <App />
    </ConfigProvider>
  );
};
`}}]);

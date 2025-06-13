"use strict";(self.webpackChunkreact_papercss_design=self.webpackChunkreact_papercss_design||[]).push([[916],{24114:function(o,t,e){var h;e.r(t),e.d(t,{demos:function(){return y}});var m=e(17061),c=e.n(m),g=e(17156),p=e.n(g),r=e(67294),C=e(88123),u=e(71600),y={"switchtile-demo-switchtilebase":{component:r.memo(r.lazy(function(){return e.e(5408).then(e.bind(e,5725))})),asset:{type:"BLOCK",id:"switchtile-demo-switchtilebase",refAtomIds:["SwitchTile"],dependencies:{"index.tsx":{type:"FILE",value:e(34844).Z},"react-papercss-design":{type:"NPM",value:"0.0.11"}},entry:"index.tsx",description:"\u975E\u53D7\u63A7\u7EC4\u4EF6\u4E0B\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002",title:"\u57FA\u672C"},context:{"react-papercss-design":u},renderOpts:{compile:function(){var i=p()(c()().mark(function a(){var s,l=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,l));case 3:case"end":return n.stop()}},a)}));function d(){return i.apply(this,arguments)}return d}()}},"switchtile-demo-switchtilecontrolled":{component:r.memo(r.lazy(function(){return e.e(5408).then(e.bind(e,73538))})),asset:{type:"BLOCK",id:"switchtile-demo-switchtilecontrolled",refAtomIds:["SwitchTile"],dependencies:{"index.tsx":{type:"FILE",value:e(40108).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.0.11"}},entry:"index.tsx",description:"\u4F5C\u4E3A\u53D7\u63A7\u7EC4\u4EF6\u65F6\u7684\u7528\u6CD5\u3002",title:"\u53D7\u63A7"},context:{react:h||(h=e.t(r,2)),"react-papercss-design":u},renderOpts:{compile:function(){var i=p()(c()().mark(function a(){var s,l=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,l));case 3:case"end":return n.stop()}},a)}));function d(){return i.apply(this,arguments)}return d}()}},"switchtile-demo-switchtilecustomize":{component:r.memo(r.lazy(function(){return e.e(5408).then(e.bind(e,80199))})),asset:{type:"BLOCK",id:"switchtile-demo-switchtilecustomize",refAtomIds:["SwitchTile"],dependencies:{"index.tsx":{type:"FILE",value:e(4263).Z},"react-papercss-design":{type:"NPM",value:"0.0.11"}},entry:"index.tsx",description:"\u81EA\u5B9A\u4E49\u9009\u4E2D\u548C\u975E\u9009\u4E2D\u7684\u5185\u5BB9\u548C\u6837\u5F0F",title:"\u81EA\u5B9A\u4E49"},context:{"react-papercss-design":u},renderOpts:{compile:function(){var i=p()(c()().mark(function a(){var s,l=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,l));case 3:case"end":return n.stop()}},a)}));function d(){return i.apply(this,arguments)}return d}()}},"switchtile-demo-switchtiledisabled":{component:r.memo(r.lazy(function(){return e.e(5408).then(e.bind(e,70810))})),asset:{type:"BLOCK",id:"switchtile-demo-switchtiledisabled",refAtomIds:["SwitchTile"],dependencies:{"index.tsx":{type:"FILE",value:e(98944).Z},"react-papercss-design":{type:"NPM",value:"0.0.11"}},entry:"index.tsx",description:"\u7981\u7528\u72B6\u6001\u4E0B\u7684\u74E6\u7247\u5F00\u5173\u3002",title:"\u7981\u7528"},context:{"react-papercss-design":u},renderOpts:{compile:function(){var i=p()(c()().mark(function a(){var s,l=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,l));case 3:case"end":return n.stop()}},a)}));function d(){return i.apply(this,arguments)}return d}()}}}},33844:function(o,t,e){e.r(t),e.d(t,{texts:function(){return m}});var h=e(88123);const m=[{value:"\u74E6\u7247\u7C7B\u578B\u7684\u5F00\u5173\u9009\u62E9\u5668\u3002",paraId:0,tocIndex:0},{value:"\u9700\u8981\u8868\u793A\u5F00\u5173\u72B6\u6001/\u4E24\u79CD\u72B6\u6001\u4E4B\u95F4\u7684\u5207\u6362\u65F6\uFF1B",paraId:1,tocIndex:1}]},34844:function(o,t){t.Z=`import { SwitchTile } from 'react-papercss-design';

export default () => {
  return (
    <>
      <SwitchTile
        defaultChecked
        checkedChildren="Back"
        unCheckedChildren="Front"
        onChange={(checked) => {
          console.log(\`switch to \${checked}\`);
        }}
      />
    </>
  );
};
`},40108:function(o,t){t.Z=`import { useState } from 'react';
import { SwitchTile } from 'react-papercss-design';

export default () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <>
      <SwitchTile
        checked={checked}
        checkedChildren="Back"
        unCheckedChildren="Front"
        onChange={(checked) => {
          setChecked(checked);
        }}
      />
      <p>checked: {checked.toString()}</p>
    </>
  );
};
`},4263:function(o,t){t.Z=`import { SwitchTile } from 'react-papercss-design';

export default () => {
  return (
    <>
      <SwitchTile checkedChildren="Back" unCheckedChildren="Front" />
      <SwitchTile
        checkedChildren="On"
        unCheckedChildren="Off"
        unCheckedType="warning"
        checkedType="secondary"
      />
      <SwitchTile
        checkedChildren="Accepted"
        unCheckedChildren="Declined"
        unCheckedType="danger"
        checkedType="success"
      />
    </>
  );
};
`},98944:function(o,t){t.Z=`import { SwitchTile } from 'react-papercss-design';

export default () => {
  return (
    <>
      <SwitchTile disabled checkedChildren="Back" unCheckedChildren="Front" />
    </>
  );
};
`}}]);

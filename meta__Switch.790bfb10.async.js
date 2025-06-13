"use strict";(self.webpackChunkreact_papercss_design=self.webpackChunkreact_papercss_design||[]).push([[2802],{53689:function(o,t,e){var h;e.r(t),e.d(t,{demos:function(){return v}});var m=e(17061),a=e.n(m),g=e(17156),l=e.n(g),r=e(67294),y=e(28887),u=e(71600),v={"switch-demo-switch-base":{component:r.memo(r.lazy(function(){return e.e(5622).then(e.bind(e,42914))})),asset:{type:"BLOCK",id:"switch-demo-switch-base",refAtomIds:["Switch"],dependencies:{"index.tsx":{type:"FILE",value:e(29737).Z},"react-papercss-design":{type:"NPM",value:"0.0.8"}},entry:"index.tsx",description:"\u975E\u53D7\u63A7\u7EC4\u4EF6\u4E0B\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002",title:"\u57FA\u672C"},context:{"react-papercss-design":u},renderOpts:{compile:function(){var c=l()(a()().mark(function i(){var s,p=arguments;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,p));case 3:case"end":return n.stop()}},i)}));function d(){return c.apply(this,arguments)}return d}()}},"switch-demo-switch-controlled":{component:r.memo(r.lazy(function(){return e.e(5622).then(e.bind(e,33758))})),asset:{type:"BLOCK",id:"switch-demo-switch-controlled",refAtomIds:["Switch"],dependencies:{"index.tsx":{type:"FILE",value:e(33028).Z},react:{type:"NPM",value:"18.3.1"},"react-papercss-design":{type:"NPM",value:"0.0.8"}},entry:"index.tsx",description:"\u4F5C\u4E3A\u53D7\u63A7\u7EC4\u4EF6\u65F6\u7684\u7528\u6CD5\u3002",title:"\u53D7\u63A7"},context:{react:h||(h=e.t(r,2)),"react-papercss-design":u},renderOpts:{compile:function(){var c=l()(a()().mark(function i(){var s,p=arguments;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,p));case 3:case"end":return n.stop()}},i)}));function d(){return c.apply(this,arguments)}return d}()}},"switch-demo-switch-type":{component:r.memo(r.lazy(function(){return e.e(5622).then(e.bind(e,95604))})),asset:{type:"BLOCK",id:"switch-demo-switch-type",refAtomIds:["Switch"],dependencies:{"index.tsx":{type:"FILE",value:e(23268).Z},"react-papercss-design":{type:"NPM",value:"0.0.8"}},entry:"index.tsx",description:"\u4E0D\u540C\u98CE\u683C\u7684\u7EC4\u4EF6",title:"\u98CE\u683C"},context:{"react-papercss-design":u},renderOpts:{compile:function(){var c=l()(a()().mark(function i(){var s,p=arguments;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,p));case 3:case"end":return n.stop()}},i)}));function d(){return c.apply(this,arguments)}return d}()}},"switch-demo-switch-disabled":{component:r.memo(r.lazy(function(){return e.e(5622).then(e.bind(e,5471))})),asset:{type:"BLOCK",id:"switch-demo-switch-disabled",refAtomIds:["Switch"],dependencies:{"index.tsx":{type:"FILE",value:e(41929).Z},"react-papercss-design":{type:"NPM",value:"0.0.8"}},entry:"index.tsx",description:"\u7981\u7528\u72B6\u6001\u4E0B\u7684\u5F00\u5173",title:"\u7981\u7528"},context:{"react-papercss-design":u},renderOpts:{compile:function(){var c=l()(a()().mark(function i(){var s,p=arguments;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,p));case 3:case"end":return n.stop()}},i)}));function d(){return c.apply(this,arguments)}return d}()}}}},71169:function(o,t,e){e.r(t),e.d(t,{texts:function(){return m}});var h=e(28887);const m=[{value:"\u5F00\u5173\u9009\u62E9\u5668\u3002",paraId:0,tocIndex:0}]},29737:function(o,t){t.Z=`import { Switch } from 'react-papercss-design';

export default () => {
  return (
    <Switch
      defaultChecked
      onChange={(checked) => {
        console.log(\`switch to \${checked}\`);
      }}
    />
  );
};
`},33028:function(o,t){t.Z=`import { useState } from 'react';
import { Switch } from 'react-papercss-design';

export default () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <>
      <Switch
        checked={checked}
        onChange={(checked) => {
          setChecked(checked);
        }}
      />
      <p>checked: {checked.toString()}</p>
    </>
  );
};
`},41929:function(o,t){t.Z=`import { Switch } from 'react-papercss-design';

export default () => {
  return <Switch defaultChecked disabled />;
};
`},23268:function(o,t){t.Z=`import { Switch } from 'react-papercss-design';

export default () => {
  return (
    <>
      <p>Default style</p>
      <div>
        Square switch: <Switch defaultChecked />
      </div>
      <div>
        Circle switch: <Switch type="default" round />
      </div>

      <p>Inline style</p>
      <div>
        Square switch: <Switch defaultChecked type="inline" />
      </div>
      <div>
        Circle switch: <Switch type="inline" round />
      </div>
    </>
  );
};
`}}]);

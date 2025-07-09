"use strict";(self.webpackChunkreact_papercss_design=self.webpackChunkreact_papercss_design||[]).push([[3518],{4588:function(d,a,e){e.r(a),e.d(a,{demos:function(){return r}});var o=e(67294),n=e(86556),r={}},84285:function(d,a,e){e.r(a),e.d(a,{demos:function(){return r}});var o=e(67294),n=e(57773),r={}},76599:function(d,a,e){e.r(a),e.d(a,{demos:function(){return r}});var o=e(67294),n=e(19174),r={}},76736:function(d,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(86556);const n=[{value:"React Vant \u5185\u7F6E\u4E86\u4E00\u5C0F\u90E8\u5206\u7684 hooks, \u5E2E\u52A9\u7EC4\u4EF6\u5F00\u53D1\u548C\u4F7F\u7528",paraId:0,tocIndex:0},{value:"\u6709\u4E24\u79CD\u65B9\u5F0F\u5F15\u5165, \u53EF\u4EE5\u4ECE ",paraId:1,tocIndex:1},{value:"react-papercss-design/hooks",paraId:1,tocIndex:1},{value:" \u5F15\u5165, \u4E5F\u53EF\u4EE5\u76F4\u63A5\u4ECE ",paraId:1,tocIndex:1},{value:"react-papercss-design",paraId:1,tocIndex:1},{value:"\u91CC\u5F15\u5165.",paraId:1,tocIndex:1},{value:`// \u76F4\u63A5\u5F15\u5165
import { useTheme, useLocale } from 'react-papercss-design';

// \u4ECE hooks \u91CC\u5F15\u5165
import { useTheme, useLocale } from 'react-papercss-design/hooks';
`,paraId:2,tocIndex:1}]},69004:function(d,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(57773);const n=[{value:"\u83B7\u53D6\u5F53\u524D\u8BED\u8A00, \u8BBE\u7F6E\u5F53\u524D\u8BED\u8A00",paraId:0,tocIndex:0},{value:"\u4F7F\u7528\u65F6\u5019\u8BF7\u786E\u4FDD\u4F60\u7684\u7EC4\u4EF6\u88AB\u5305\u88F9\u5728",paraId:1,tocIndex:0},{value:"ConfigProvider",paraId:1,tocIndex:0},{value:"\u91CC. \u5177\u4F53\u7528\u6CD5\u53EF\u4EE5\u67E5\u770B: ",paraId:1,tocIndex:0},{value:"ConfigProvider",paraId:2,tocIndex:0},{value:"\u66F4\u591A\u56FD\u9645\u5316\u76F8\u5173\u5185\u5BB9\u53EF\u53C2\u8003: ",paraId:3,tocIndex:0},{value:"\u56FD\u9645\u5316",paraId:4,tocIndex:0},{value:`import React from 'react';
import { useLocale } from 'react-papercss-design';

// Assume App is wrapped inside <ConfigProvider>
const App: React.FC = () => {
  const { locale, setLocale } = useLocale();

  console.log(locale); // 'en-US'
  setLocale('zh-CN'); // \u8BBE\u7F6E\u8BED\u8A00\u4E3A\u4E2D\u6587

  return (
    // ...
  )
}

export default App
`,paraId:5,tocIndex:1},{value:"\u5C5E\u6027",paraId:6,tocIndex:3},{value:"\u8BF4\u660E",paraId:6,tocIndex:3},{value:"\u7C7B\u578B",paraId:6,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:3},{value:"locale",paraId:6,tocIndex:3},{value:"\u5F53\u524D\u8BED\u8A00",paraId:6,tocIndex:3},{value:"'en-US' | 'zh-CN'",paraId:6,tocIndex:3},{value:"'en-US'",paraId:6,tocIndex:3},{value:"setLocale",paraId:6,tocIndex:3},{value:"\u8BBE\u7F6E\u8BED\u8A00\u7684\u51FD\u6570",paraId:6,tocIndex:3},{value:"(locale: Locale) => void",paraId:6,tocIndex:3},{value:"-",paraId:6,tocIndex:3}]},62881:function(d,a,e){e.r(a),e.d(a,{texts:function(){return n}});var o=e(19174);const n=[{value:"\u83B7\u53D6\u5F53\u524D\u4E3B\u9898, \u8BBE\u7F6E\u5F53\u524D\u4E3B\u9898, \u4EE5\u53CA\u83B7\u53D6\u4E3B\u9898",paraId:0,tocIndex:0},{value:"tokens",paraId:0,tocIndex:0},{value:"\u4F7F\u7528\u65F6\u5019\u8BF7\u786E\u4FDD\u4F60\u7684\u7EC4\u4EF6\u88AB\u5305\u88F9\u5728",paraId:1,tocIndex:0},{value:"ConfigProvider",paraId:1,tocIndex:0},{value:"\u91CC. \u5177\u4F53\u7528\u6CD5\u53EF\u4EE5\u67E5\u770B: ",paraId:1,tocIndex:0},{value:"ConfigProvider",paraId:2,tocIndex:0},{value:"\u66F4\u591A\u4E3B\u9898\u76F8\u5173\u5185\u5BB9\u53EF\u53C2\u8003: ",paraId:3,tocIndex:0},{value:"\u4E3B\u9898",paraId:4,tocIndex:0},{value:`import React from 'react';
import { useTheme } from 'react-papercss-design';

// Assume App is wrapped inside <ConfigProvider>
const App: React.FC = () => {
  const { theme, setTheme, tokens } = useTheme

  console.log(theme) // light
  console.log(tokens.primary) // '#41403e'

  return (
    // ...
  )
}

export default App
`,paraId:5,tocIndex:1},{value:"\u5C5E\u6027",paraId:6,tocIndex:3},{value:"\u8BF4\u660E",paraId:6,tocIndex:3},{value:"\u7C7B\u578B",paraId:6,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:3},{value:"theme",paraId:6,tocIndex:3},{value:"\u5F53\u524D\u4E3B\u9898",paraId:6,tocIndex:3},{value:"'light' | 'dark'",paraId:6,tocIndex:3},{value:"'light'",paraId:6,tocIndex:3},{value:"setTheme",paraId:6,tocIndex:3},{value:"\u8BBE\u7F6E\u4E3B\u9898\u7684\u51FD\u6570",paraId:6,tocIndex:3},{value:"(theme: Theme) => void",paraId:6,tocIndex:3},{value:"-",paraId:6,tocIndex:3},{value:"tokens",paraId:6,tocIndex:3},{value:"\u5F53\u524D\u4E3B\u9898\u7684\u8BBE\u8BA1\u4EE4\u724C",paraId:6,tocIndex:3},{value:"{ primary: string, secondary: string, ... }",paraId:6,tocIndex:3},{value:"-",paraId:6,tocIndex:3},{value:"tokens \u53EF\u53C2\u8003: ",paraId:7,tocIndex:3},{value:"https://github.com/papercss/papercss/blob/master/dist/paper.css#L7",paraId:7,tocIndex:3}]}}]);

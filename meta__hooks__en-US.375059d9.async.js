"use strict";(self.webpackChunkreact_papercss_design=self.webpackChunkreact_papercss_design||[]).push([[9383],{9645:function(n,a,e){e.r(a),e.d(a,{demos:function(){return o}});var r=e(67294),t=e(18696),o={}},41926:function(n,a,e){e.r(a),e.d(a,{demos:function(){return o}});var r=e(67294),t=e(65695),o={}},24966:function(n,a,e){e.r(a),e.d(a,{texts:function(){return t}});var r=e(18696);const t=[{value:"React PaperCSS includes a small set of built-in hooks to help with component development and usage.",paraId:0,tocIndex:0},{value:"There are two ways to import hooks: you can import from ",paraId:1,tocIndex:1},{value:"react-papercss-design/hooks",paraId:1,tocIndex:1},{value:", or directly from ",paraId:1,tocIndex:1},{value:"react-papercss-design",paraId:1,tocIndex:1},{value:".",paraId:1,tocIndex:1},{value:`// Direct import
import { useTheme } from 'react-papercss-design';

// Import from hooks
import { useTheme } from 'react-papercss-design/hooks';
`,paraId:2,tocIndex:1}]},7226:function(n,a,e){e.r(a),e.d(a,{texts:function(){return t}});var r=e(65695);const t=[{value:"Get the current theme, set the current theme, and get theme ",paraId:0,tocIndex:0},{value:"tokens",paraId:0,tocIndex:0},{value:"Please ensure your component is wrapped inside ",paraId:1,tocIndex:0},{value:"ConfigProvider",paraId:1,tocIndex:0},{value:" when using this hook. For specific usage, see: ",paraId:1,tocIndex:0},{value:"ConfigProvider",paraId:2,tocIndex:0},{value:"For more theme-related details, refer to: ",paraId:3,tocIndex:0},{value:"Theme",paraId:4,tocIndex:0},{value:`import React from 'react';
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
`,paraId:5,tocIndex:1},{value:"Property",paraId:6,tocIndex:3},{value:"Description",paraId:6,tocIndex:3},{value:"Type",paraId:6,tocIndex:3},{value:"Default",paraId:6,tocIndex:3},{value:"theme",paraId:6,tocIndex:3},{value:"Current theme",paraId:6,tocIndex:3},{value:"'light' | 'dark'",paraId:6,tocIndex:3},{value:"'light'",paraId:6,tocIndex:3},{value:"setTheme",paraId:6,tocIndex:3},{value:"Function to set the theme",paraId:6,tocIndex:3},{value:"(theme: Theme) => void",paraId:6,tocIndex:3},{value:"-",paraId:6,tocIndex:3},{value:"tokens",paraId:6,tocIndex:3},{value:"Design tokens of current theme",paraId:6,tocIndex:3},{value:"{ primary: string, secondary: string, ... }",paraId:6,tocIndex:3},{value:"-",paraId:6,tocIndex:3},{value:"For tokens reference: ",paraId:7,tocIndex:3},{value:"https://github.com/papercss/papercss/blob/master/dist/paper.css#L7",paraId:7,tocIndex:3}]}}]);

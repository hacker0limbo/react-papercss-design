(self.webpackChunkreact_papercss_design=self.webpackChunkreact_papercss_design||[]).push([[128],{4079:function(r,p,t){"use strict";t.d(p,{Z:function(){return T}});var e=t(67294),s=Object.defineProperty,f=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,L=(g,n,a)=>n in g?s(g,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):g[n]=a,N=(g,n)=>{for(var a in n||(n={}))y.call(n,a)&&L(g,a,n[a]);if(f)for(var a of f(n))l.call(n,a)&&L(g,a,n[a]);return g};const H=g=>e.createElement("svg",N({viewBox:"64 64 896 896"},g),e.createElement("path",{d:"M120 230h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0 424h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm784 140H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-424H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}));var Z="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNMTIwIDIzMGg0OTZjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LThIMTIwYy00LjQgMC04IDMuNi04IDh2NTZjMCA0LjQgMy42IDggOCA4em0wIDQyNGg0OTZjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LThIMTIwYy00LjQgMC04IDMuNi04IDh2NTZjMCA0LjQgMy42IDggOCA4em03ODQgMTQwSDEyMGMtNC40IDAtOCAzLjYtOCA4djU2YzAgNC40IDMuNiA4IDggOGg3ODRjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LTh6bTAtNDI0SDEyMGMtNC40IDAtOCAzLjYtOCA4djU2YzAgNC40IDMuNiA4IDggOGg3ODRjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LTh6Ii8+PC9zdmc+",z=function(g,n,a,m){function k(M){return M instanceof a?M:new a(function(J){J(M)})}return new(a||(a=Promise))(function(M,J){function et(R){try{it(m.next(R))}catch(tt){J(tt)}}function mt(R){try{it(m.throw(R))}catch(tt){J(tt)}}function it(R){R.done?M(R.value):k(R.value).then(et,mt)}it((m=m.apply(g,n||[])).next())})};function V(g){let n=0,a=0,m=g;do n+=m.offsetTop||0,a+=m.offsetLeft||0,m=m.offsetParent;while(m);return{top:n,left:a}}class X{constructor(n){this.element=n}getHorizontalScroll(){return this.element.scrollLeft}getVerticalScroll(){return this.element.scrollTop}getMaxHorizontalScroll(){return this.element.scrollWidth-this.element.clientWidth}getMaxVerticalScroll(){return this.element.scrollHeight-this.element.clientHeight}getHorizontalElementScrollOffset(n,a){return V(n).left-V(a).left}getVerticalElementScrollOffset(n,a){return V(n).top-V(a).top}scrollTo(n,a){this.element.scrollLeft=n,this.element.scrollTop=a}}class _{constructor(){this.element=window}getHorizontalScroll(){return window.scrollX||document.documentElement.scrollLeft}getVerticalScroll(){return window.scrollY||document.documentElement.scrollTop}getMaxHorizontalScroll(){return Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.body.clientWidth,document.documentElement.clientWidth)-window.innerWidth}getMaxVerticalScroll(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-window.innerHeight}getHorizontalElementScrollOffset(n){return(window.scrollX||document.documentElement.scrollLeft)+n.getBoundingClientRect().left}getVerticalElementScrollOffset(n){return(window.scrollY||document.documentElement.scrollTop)+n.getBoundingClientRect().top}scrollTo(n,a){window.scrollTo(n,a)}}const D={elements:[],cancelMethods:[],add:(g,n)=>{D.elements.push(g),D.cancelMethods.push(n)},remove:(g,n)=>{const a=D.elements.indexOf(g);a>-1&&(n&&D.cancelMethods[a](),D.elements.splice(a,1),D.cancelMethods.splice(a,1))}},I=typeof window!="undefined",v={cancelOnUserAction:!0,easing:g=>--g*g*g+1,elementToScroll:I?window:null,horizontalOffset:0,maxDuration:3e3,minDuration:250,speed:500,verticalOffset:0};function W(g,n={}){return z(this,void 0,void 0,function*(){if(I){if(!window.Promise)throw"Browser doesn't support Promises, and animated-scroll-to depends on it, please provide a polyfill."}else return new Promise(Nt=>{Nt(!1)});let a,m,k,M=Object.assign(Object.assign({},v),n);const J=M.elementToScroll===window,et=!!M.elementToScroll.nodeName;if(!J&&!et)throw"Element to scroll needs to be either window or DOM element.";const mt=J?document.documentElement:M.elementToScroll;getComputedStyle(mt).getPropertyValue("scroll-behavior")==="smooth"&&console.warn(`${mt.tagName} has "scroll-behavior: smooth" which can mess up with animated-scroll-to's animations`);const R=J?new _:new X(M.elementToScroll);if(g instanceof Element){if(k=g,et&&(!M.elementToScroll.contains(k)||M.elementToScroll.isSameNode(k)))throw"options.elementToScroll has to be a parent of scrollToElement";a=R.getHorizontalElementScrollOffset(k,M.elementToScroll),m=R.getVerticalElementScrollOffset(k,M.elementToScroll)}else if(typeof g=="number")a=R.getHorizontalScroll(),m=g;else if(Array.isArray(g)&&g.length===2)a=g[0]===null?R.getHorizontalScroll():g[0],m=g[1]===null?R.getVerticalScroll():g[1];else throw`Wrong function signature. Check documentation.
Available method signatures are:
  animateScrollTo(y:number, options)
  animateScrollTo([x:number | null, y:number | null], options)
  animateScrollTo(scrollToElement:Element, options)`;a+=M.horizontalOffset,m+=M.verticalOffset;const tt=R.getMaxHorizontalScroll(),St=R.getHorizontalScroll();a>tt&&(a=tt);const G=a-St,ft=R.getMaxVerticalScroll(),F=R.getVerticalScroll();m>ft&&(m=ft);const nt=m-F,Tt=Math.abs(Math.round(G/1e3*M.speed)),wt=Math.abs(Math.round(nt/1e3*M.speed));let It=Tt>wt?Tt:wt;return It<M.minDuration?It=M.minDuration:It>M.maxDuration&&(It=M.maxDuration),new Promise((Nt,Ht)=>{G===0&&nt===0&&Nt(!0),D.remove(R.element,!0);let Ot;const Wt=()=>{kt(),cancelAnimationFrame(Ot),Nt(!1)};D.add(R.element,Wt);const Vt=Dt=>Dt.preventDefault(),Yt=M.cancelOnUserAction?Wt:Vt,Qt=M.cancelOnUserAction?{passive:!0}:{passive:!1},Zt=["wheel","touchstart","keydown","mousedown"],kt=()=>{Zt.forEach(Dt=>{R.element.removeEventListener(Dt,Yt,Qt)})};Zt.forEach(Dt=>{R.element.addEventListener(Dt,Yt,Qt)});const Ct=Date.now(),_t=()=>{var Dt=Date.now()-Ct,c=Dt/It;const d=Math.round(St+G*M.easing(c)),h=Math.round(F+nt*M.easing(c));Dt<It&&(d!==a||h!==m)?(R.scrollTo(d,h),Ot=requestAnimationFrame(_t)):(R.scrollTo(a,m),cancelAnimationFrame(Ot),kt(),D.remove(R.element,!1),Nt(!0))};Ot=requestAnimationFrame(_t)})})}var st=W,B=t(3922),U=t(21266),rt=t(95044),$=t(23240),P=t(45898),O=t(86225),K=t(38569),Y=t(26687),C=t(26575),ot=t.n(C),at=t(23187),w=t.n(at),E=t(75553),j=t.n(E),b=t(41049),lt=t.n(b),ct=t(5026),ut=t.n(ct),A=t(83357),S=t.n(A),x=t(43341),Q={};Q.styleTagTransform=S(),Q.setAttributes=lt(),Q.insert=j().bind(null,"head"),Q.domAPI=w(),Q.insertStyleElement=ut();var q=ot()(x.Z,Q),ht=x.Z&&x.Z.locals?x.Z.locals:void 0;function gt(g,n){return Et(g)||Lt(g,n)||Mt(g,n)||pt()}function pt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Mt(g,n){if(g){if(typeof g=="string")return At(g,n);var a=Object.prototype.toString.call(g).slice(8,-1);if(a==="Object"&&g.constructor&&(a=g.constructor.name),a==="Map"||a==="Set")return Array.from(g);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return At(g,n)}}function At(g,n){(n==null||n>g.length)&&(n=g.length);for(var a=0,m=new Array(n);a<n;a++)m[a]=g[a];return m}function Lt(g,n){var a=g==null?null:typeof Symbol!="undefined"&&g[Symbol.iterator]||g["@@iterator"];if(a!=null){var m=[],k=!0,M=!1,J,et;try{for(a=a.call(g);!(k=(J=a.next()).done)&&(m.push(J.value),!(n&&m.length===n));k=!0);}catch(mt){M=!0,et=mt}finally{try{!k&&a.return!=null&&a.return()}finally{if(M)throw et}}return m}}function Et(g){if(Array.isArray(g))return g}var Ut=function(){var n=(0,B.YB)(),a=(0,B.pC)(),m=(0,B.tx)(),k=(0,B.TH)(),M=k.hash,J=(0,B.WF)(),et=J.loading,mt=(0,e.useState)(!1),it=gt(mt,2),R=it[0],tt=it[1],St=(0,B.eL)(),G=St.frontmatter,ft=G.sidebar!==!1&&(m==null?void 0:m.length)>0;return(0,e.useEffect)(function(){var F=M.replace("#","");F&&setTimeout(function(){var nt=document.getElementById(decodeURIComponent(F));nt&&st(nt.offsetTop-80,{maxDuration:300})},1)},[et,M]),e.createElement("div",{className:"dumi-default-doc-layout","data-mobile-sidebar-active":R||void 0,onClick:function(){return tt(!1)}},e.createElement(B.ql,null,e.createElement("html",{lang:n.locale.replace(/-.+$/,"")}),G.title&&e.createElement("title",null,G.title),G.title&&e.createElement("meta",{property:"og:title",content:G.title}),G.description&&e.createElement("meta",{name:"description",content:G.description}),G.description&&e.createElement("meta",{property:"og:description",content:G.description}),G.keywords&&e.createElement("meta",{name:"keywords",content:G.keywords.join(",")}),G.keywords&&e.createElement("meta",{property:"og:keywords",content:G.keywords.join(",")})),e.createElement(P.Z,null),e.createElement(O.Z,null),e.createElement(rt.Z,null),ft&&e.createElement("div",{className:"dumi-default-doc-layout-mobile-bar"},e.createElement("button",{type:"button",className:"dumi-default-sidebar-btn",onClick:function(nt){nt.stopPropagation(),tt(function(Tt){return!Tt})}},e.createElement(H,null),n.formatMessage({id:"layout.sidebar.btn"}))),e.createElement("main",null,ft&&e.createElement(K.Z,null),e.createElement(U.Z,null,a,e.createElement($.Z,null)),G.toc==="content"&&e.createElement("div",{className:"dumi-default-doc-layout-toc-wrapper"},e.createElement("h4",null,"TABLE OF CONTENTS"),e.createElement(Y.Z,null))))},T=Ut},31853:function(r,p,t){"use strict";t.d(p,{Z:function(){return w}});var e=t(3922),s=t(67294),f=t(26575),y=t.n(f),l=t(23187),L=t.n(l),N=t(75553),H=t.n(N),Z=t(41049),z=t.n(Z),V=t(5026),X=t.n(V),_=t(83357),D=t.n(_),I=t(3004),v={};v.styleTagTransform=D(),v.setAttributes=z(),v.insert=H().bind(null,"head"),v.domAPI=L(),v.insertStyleElement=X();var W=y()(I.Z,v),st=I.Z&&I.Z.locals?I.Z.locals:void 0;function B(E,j){return O(E)||P(E,j)||rt(E,j)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rt(E,j){if(E){if(typeof E=="string")return $(E,j);var b=Object.prototype.toString.call(E).slice(8,-1);if(b==="Object"&&E.constructor&&(b=E.constructor.name),b==="Map"||b==="Set")return Array.from(E);if(b==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return $(E,j)}}function $(E,j){(j==null||j>E.length)&&(j=E.length);for(var b=0,lt=new Array(j);b<j;b++)lt[b]=E[b];return lt}function P(E,j){var b=E==null?null:typeof Symbol!="undefined"&&E[Symbol.iterator]||E["@@iterator"];if(b!=null){var lt=[],ct=!0,ut=!1,A,S;try{for(b=b.call(E);!(ct=(A=b.next()).done)&&(lt.push(A.value),!(j&&lt.length===j));ct=!0);}catch(x){ut=!0,S=x}finally{try{!ct&&b.return!=null&&b.return()}finally{if(ut)throw S}}return lt}}function O(E){if(Array.isArray(E))return E}var K=function(){return s.createElement("svg",{viewBox:"0 0 16 16"},s.createElement("path",{d:"M8.218 1.455c3.527.109 6.327 3.018 6.327 6.545 0 3.6-2.945 6.545-6.545 6.545a6.562 6.562 0 0 1-6.036-4h.218c3.6 0 6.545-2.945 6.545-6.545 0-.91-.182-1.745-.509-2.545m0-1.455c-.473 0-.909.218-1.2.618-.29.4-.327.946-.145 1.382.254.655.4 1.31.4 2 0 2.8-2.291 5.09-5.091 5.09h-.218c-.473 0-.91.22-1.2.62-.291.4-.328.945-.146 1.38C1.891 14.074 4.764 16 8 16c4.4 0 8-3.6 8-8a7.972 7.972 0 0 0-7.745-8h-.037Z"}))},Y=function(){return s.createElement("svg",{viewBox:"0 0 16 16"},s.createElement("path",{d:"M8 13a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1ZM8 3a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm7 4a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2h1ZM3 8a1 1 0 0 1-1 1H1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm9.95 3.536.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414Zm-9.9-7.072-.707-.707a1 1 0 0 1 1.414-1.414l.707.707A1 1 0 0 1 3.05 4.464Zm9.9 0a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414l-.707.707Zm-9.9 7.072a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707ZM8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"}))},C=function(){return s.createElement("svg",{viewBox:"0 0 16 16"},s.createElement("path",{d:"M14.595 8a6.595 6.595 0 1 1-13.19 0 6.595 6.595 0 0 1 13.19 0ZM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm0 2.014v11.972A5.986 5.986 0 0 0 8 2.014Z"}))},ot={light:Y,dark:K,auto:C},at=function(){var j=(0,e.WF)(),b=j.themeConfig.prefersColor.default,lt=(0,e.YB)(),ct=(0,e.OI)(),ut=B(ct,3),A=ut[1],S=A===void 0?b:A,x=ut[2],Q=ot[S];return s.createElement("span",{className:"dumi-default-color-switch","data-dumi-tooltip":lt.formatMessage({id:"header.color.mode.".concat(S)}),"data-dumi-tooltip-bottom":!0},Q&&s.createElement(Q,null),s.createElement("select",{onChange:function(ht){return x(ht.target.value)},value:S},["light","dark","auto"].map(function(q){return s.createElement("option",{value:q,key:q},lt.formatMessage({id:"header.color.mode.".concat(q)}))})))},w=at},81294:function(r,p,t){"use strict";t.d(p,{Z:function(){return O}});var e=t(3922),s=t(67294),f=t(26575),y=t.n(f),l=t(23187),L=t.n(l),N=t(75553),H=t.n(N),Z=t(41049),z=t.n(Z),V=t(5026),X=t.n(V),_=t(83357),D=t.n(_),I=t(98443),v={};v.styleTagTransform=D(),v.setAttributes=z(),v.insert=H().bind(null,"head"),v.domAPI=L(),v.insertStyleElement=X();var W=y()(I.Z,v),st=I.Z&&I.Z.locals?I.Z.locals:void 0,B=t(91151),U={};U.styleTagTransform=D(),U.setAttributes=z(),U.insert=H().bind(null,"head"),U.domAPI=L(),U.insertStyleElement=X();var rt=y()(B.Z,U),$=B.Z&&B.Z.locals?B.Z.locals:void 0,P=function(Y){var C=(0,e.tx)(),ot=(0,e.WF)(),at=ot.themeConfig;return s.createElement("div",{className:"dumi-default-content","data-no-sidebar":!C||void 0,"data-no-footer":at.footer===!1||void 0},Y.children)},O=P},52395:function(r,p,t){"use strict";t.d(p,{Z:function(){return U}});var e=t(3922),s=t(67294),f=t(26575),y=t.n(f),l=t(23187),L=t.n(l),N=t(75553),H=t.n(N),Z=t(41049),z=t.n(Z),V=t(5026),X=t.n(V),_=t(83357),D=t.n(_),I=t(96830),v={};v.styleTagTransform=D(),v.setAttributes=z(),v.insert=H().bind(null,"head"),v.domAPI=L(),v.insertStyleElement=X();var W=y()(I.Z,v),st=I.Z&&I.Z.locals?I.Z.locals:void 0,B=function(){var $,P=(0,e.eL)(),O=P.frontmatter;return Boolean(($=O.features)===null||$===void 0?void 0:$.length)?s.createElement("div",{className:"dumi-default-features","data-cols":[3,2].find(function(K){return O.features.length%K===0})||3},O.features.map(function(K){var Y=K.title,C=K.description,ot=K.emoji,at=K.link,w;return at&&(w=/^(\w+:)\/\/|^(mailto|tel):/.test(at)?s.createElement("a",{href:at,target:"_blank",rel:"noreferrer"},Y):s.createElement(e.rU,{to:at},Y)),s.createElement("div",{key:Y,className:"dumi-default-features-item"},ot&&s.createElement("i",null,ot),Y&&s.createElement("h3",null,w||Y),C&&s.createElement("p",{dangerouslySetInnerHTML:{__html:C}}))})):null},U=B},94678:function(r,p,t){"use strict";t.d(p,{Z:function(){return U}});var e=t(3922),s=t(67294),f=t(26575),y=t.n(f),l=t(23187),L=t.n(l),N=t(75553),H=t.n(N),Z=t(41049),z=t.n(Z),V=t(5026),X=t.n(V),_=t(83357),D=t.n(_),I=t(98605),v={};v.styleTagTransform=D(),v.setAttributes=z(),v.insert=H().bind(null,"head"),v.domAPI=L(),v.insertStyleElement=X();var W=y()(I.Z,v),st=I.Z&&I.Z.locals?I.Z.locals:void 0,B=function(){var $=(0,e.WF)(),P=$.themeConfig;return P.footer?s.createElement("div",{className:"dumi-default-footer",dangerouslySetInnerHTML:{__html:P.footer}}):null},U=B},2266:function(r,p,t){"use strict";t.d(p,{Z:function(){return g}});var e=t(67294),s=function(){return e.createElement(e.Fragment,null)},f=s,y=Object.defineProperty,l=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,H=(n,a,m)=>a in n?y(n,a,{enumerable:!0,configurable:!0,writable:!0,value:m}):n[a]=m,Z=(n,a)=>{for(var m in a||(a={}))L.call(a,m)&&H(n,m,a[m]);if(l)for(var m of l(a))N.call(a,m)&&H(n,m,a[m]);return n};const z=n=>e.createElement("svg",Z({viewBox:"64 64 896 896"},n),e.createElement("path",{d:"m563.8 512 262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}));var V="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJtNTYzLjggNTEyIDI2Mi41LTMxMi45YzQuNC01LjIuNy0xMy4xLTYuMS0xMy4xaC03OS44Yy00LjcgMC05LjIgMi4xLTEyLjMgNS43TDUxMS42IDQ0OS44IDI5NS4xIDE5MS43Yy0zLTMuNi03LjUtNS43LTEyLjMtNS43SDIwM2MtNi44IDAtMTAuNSA3LjktNi4xIDEzLjFMNDU5LjQgNTEyIDE5Ni45IDgyNC45QTcuOTUgNy45NSAwIDAgMCAyMDMgODM4aDc5LjhjNC43IDAgOS4yLTIuMSAxMi4zLTUuN2wyMTYuNS0yNTguMSAyMTYuNSAyNTguMWMzIDMuNiA3LjUgNS43IDEyLjMgNS43aDc5LjhjNi44IDAgMTAuNS03LjkgNi4xLTEzLjFMNTYzLjggNTEyeiIvPjwvc3ZnPg==",X=Object.defineProperty,_=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,v=(n,a,m)=>a in n?X(n,a,{enumerable:!0,configurable:!0,writable:!0,value:m}):n[a]=m,W=(n,a)=>{for(var m in a||(a={}))D.call(a,m)&&v(n,m,a[m]);if(_)for(var m of _(a))I.call(a,m)&&v(n,m,a[m]);return n};const st=n=>e.createElement("svg",W({viewBox:"64 64 896 896"},n),e.createElement("path",{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}));var B="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTA0IDE2MEgxMjBjLTQuNCAwLTggMy42LTggOHY2NGMwIDQuNCAzLjYgOCA4IDhoNzg0YzQuNCAwIDgtMy42IDgtOHYtNjRjMC00LjQtMy42LTgtOC04em0wIDYyNEgxMjBjLTQuNCAwLTggMy42LTggOHY2NGMwIDQuNCAzLjYgOCA4IDhoNzg0YzQuNCAwIDgtMy42IDgtOHYtNjRjMC00LjQtMy42LTgtOC04em0wLTMxMkgxMjBjLTQuNCAwLTggMy42LTggOHY2NGMwIDQuNCAzLjYgOCA4IDhoNzg0YzQuNCAwIDgtMy42IDgtOHYtNjRjMC00LjQtMy42LTgtOC04eiIvPjwvc3ZnPg==",U=t(3922),rt=t(87171),$=t(26871),P=t(63721),O=t(78406),K=t(983),Y=t(96157),C=t(24733),ot=t(26575),at=t.n(ot),w=t(23187),E=t.n(w),j=t(75553),b=t.n(j),lt=t(41049),ct=t.n(lt),ut=t(5026),A=t.n(ut),S=t(83357),x=t.n(S),Q=t(72843),q={};q.styleTagTransform=x(),q.setAttributes=ct(),q.insert=b().bind(null,"head"),q.domAPI=E(),q.insertStyleElement=A();var ht=at()(Q.Z,q),gt=Q.Z&&Q.Z.locals?Q.Z.locals:void 0;function pt(n,a){return Ut(n)||Et(n,a)||At(n,a)||Mt()}function Mt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function At(n,a){if(n){if(typeof n=="string")return Lt(n,a);var m=Object.prototype.toString.call(n).slice(8,-1);if(m==="Object"&&n.constructor&&(m=n.constructor.name),m==="Map"||m==="Set")return Array.from(n);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return Lt(n,a)}}function Lt(n,a){(a==null||a>n.length)&&(a=n.length);for(var m=0,k=new Array(a);m<a;m++)k[m]=n[m];return k}function Et(n,a){var m=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(m!=null){var k=[],M=!0,J=!1,et,mt;try{for(m=m.call(n);!(M=(et=m.next()).done)&&(k.push(et.value),!(a&&k.length===a));M=!0);}catch(it){J=!0,mt=it}finally{try{!M&&m.return!=null&&m.return()}finally{if(J)throw mt}}return k}}function Ut(n){if(Array.isArray(n))return n}var T=function(){var a=(0,U.eL)(),m=a.frontmatter,k=(0,e.useState)(!1),M=pt(k,2),J=M[0],et=M[1],mt=(0,U.WF)(),it=mt.themeConfig,R=(0,e.useMemo)(function(){return it.socialLinks?Object.keys(it.socialLinks).slice(0,5).map(function(tt){return{icon:tt,link:it.socialLinks[tt]}}):[]},[it.socialLinks]);return e.createElement("div",{className:"dumi-default-header","data-static":Boolean(m.hero)||void 0,"data-mobile-active":J||void 0,onClick:function(){return et(!1)}},e.createElement("div",{className:"dumi-default-header-content"},e.createElement("section",{className:"dumi-default-header-left"},e.createElement(P.Z,null)),e.createElement("section",{className:"dumi-default-header-right"},e.createElement(O.Z,null),e.createElement("div",{className:"dumi-default-header-right-aside"},e.createElement(Y.ZP,null),e.createElement($.Z,null),e.createElement(K.Z,null),it.prefersColor.switch&&e.createElement(rt.Z,null),R.map(function(tt){return e.createElement(C.Z,{icon:tt.icon,link:tt.link,key:tt.link})}),e.createElement(f,null))),e.createElement("button",{type:"button",className:"dumi-default-header-menu-btn",onClick:function(St){St.stopPropagation(),et(function(G){return!G})}},J?e.createElement(z,null):e.createElement(st,null))))},g=T},56386:function(r,p,t){"use strict";t.d(p,{Z:function(){return rt}});var e=t(3922),s=t(21521),f=t(67294),y=t(26575),l=t.n(y),L=t(23187),N=t.n(L),H=t(75553),Z=t.n(H),z=t(41049),V=t.n(z),X=t(5026),_=t.n(X),D=t(83357),I=t.n(D),v=t(70431),W={};W.styleTagTransform=I(),W.setAttributes=V(),W.insert=Z().bind(null,"head"),W.domAPI=N(),W.insertStyleElement=_();var st=l()(v.Z,W),B=v.Z&&v.Z.locals?v.Z.locals:void 0,U=function(){var P,O=(0,e.eL)(),K=O.frontmatter;return"hero"in K?f.createElement("div",{className:"dumi-default-hero"},K.hero.title&&f.createElement(s.Z,null,K.hero.title),K.hero.description&&f.createElement("p",{dangerouslySetInnerHTML:{__html:K.hero.description}}),Boolean((P=K.hero.actions)===null||P===void 0?void 0:P.length)&&f.createElement("div",{className:"dumi-default-hero-actions"},K.hero.actions.map(function(Y){var C=Y.text,ot=Y.link;return/^(\w+:)\/\/|^(mailto|tel):/.test(ot)?f.createElement("a",{href:ot,target:"_blank",rel:"noreferrer",key:C},C):f.createElement(e.rU,{key:C,to:ot},C)}))):null},rt=U},82249:function(r,p,t){"use strict";t.d(p,{Z:function(){return B}});var e=t(67294),s=t(26575),f=t.n(s),y=t(23187),l=t.n(y),L=t(75553),N=t.n(L),H=t(41049),Z=t.n(H),z=t(5026),V=t.n(z),X=t(83357),_=t.n(X),D=t(46028),I={};I.styleTagTransform=_(),I.setAttributes=Z(),I.insert=N().bind(null,"head"),I.domAPI=l(),I.insertStyleElement=V();var v=f()(D.Z,I),W=D.Z&&D.Z.locals?D.Z.locals:void 0,st=function(rt){return e.createElement("h1",{className:"dumi-default-hero-title"},e.createElement("span",null,rt.children))},B=st},78854:function(r,p,t){"use strict";t.d(p,{Z:function(){return ut}});var e=t(67294),s=Object.defineProperty,f=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,L=(A,S,x)=>S in A?s(A,S,{enumerable:!0,configurable:!0,writable:!0,value:x}):A[S]=x,N=(A,S)=>{for(var x in S||(S={}))y.call(S,x)&&L(A,x,S[x]);if(f)for(var x of f(S))l.call(S,x)&&L(A,x,S[x]);return A};const H=A=>e.createElement("svg",N({viewBox:"64 64 896 896"},A),e.createElement("path",{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}));var Z="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODg0IDI1NmgtNzVjLTUuMSAwLTkuOSAyLjUtMTIuOSA2LjZMNTEyIDY1NC4yIDIyNy45IDI2Mi42Yy0zLTQuMS03LjgtNi42LTEyLjktNi42aC03NWMtNi41IDAtMTAuMyA3LjQtNi41IDEyLjdsMzUyLjYgNDg2LjFjMTIuOCAxNy42IDM5IDE3LjYgNTEuNyAwbDM1Mi42LTQ4Ni4xYzMuOS01LjMuMS0xMi43LTYuNC0xMi43eiIvPjwvc3ZnPg==",z=t(3922),V=t(26575),X=t.n(V),_=t(23187),D=t.n(_),I=t(75553),v=t.n(I),W=t(41049),st=t.n(W),B=t(5026),U=t.n(B),rt=t(83357),$=t.n(rt),P=t(10934),O={};O.styleTagTransform=$(),O.setAttributes=st(),O.insert=v().bind(null,"head"),O.domAPI=D(),O.insertStyleElement=U();var K=X()(P.Z,O),Y=P.Z&&P.Z.locals?P.Z.locals:void 0;function C(A,S){return j(A)||E(A,S)||at(A,S)||ot()}function ot(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function at(A,S){if(A){if(typeof A=="string")return w(A,S);var x=Object.prototype.toString.call(A).slice(8,-1);if(x==="Object"&&A.constructor&&(x=A.constructor.name),x==="Map"||x==="Set")return Array.from(A);if(x==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x))return w(A,S)}}function w(A,S){(S==null||S>A.length)&&(S=A.length);for(var x=0,Q=new Array(S);x<S;x++)Q[x]=A[x];return Q}function E(A,S){var x=A==null?null:typeof Symbol!="undefined"&&A[Symbol.iterator]||A["@@iterator"];if(x!=null){var Q=[],q=!0,ht=!1,gt,pt;try{for(x=x.call(A);!(q=(gt=x.next()).done)&&(Q.push(gt.value),!(S&&Q.length===S));q=!0);}catch(Mt){ht=!0,pt=Mt}finally{try{!q&&x.return!=null&&x.return()}finally{if(ht)throw pt}}return Q}}function j(A){if(Array.isArray(A))return A}function b(A){var S=A.pathname,x=A.current,Q=A.target,q="base"in x?S.replace(x.base.replace(/\/$/,""),"")||"/":S.replace(new RegExp("".concat(x.suffix,"$")),"");return"base"in Q?"".concat(Q.base.replace(/\/$/,"")).concat(q).replace(/([^/])\/$/,"$1"):"".concat(q).concat(Q.suffix)}var lt=function(S){var x=S.locale,Q=S.current,q=(0,z.TH)(),ht=q.pathname,gt=(0,e.useState)(function(){return b({pathname:ht,current:Q,target:x})}),pt=C(gt,2),Mt=pt[0],At=pt[1];return(0,e.useEffect)(function(){At(b({pathname:ht,current:Q,target:x}))},[ht,Q.id,x.id]),e.createElement(z.rU,{className:"dumi-default-lang-switch",to:Mt},x.name)},ct=function(){var S=(0,z.WF)(),x=S.locales,Q=(0,z.YB)(),q=Q.locale,ht=(0,z.bU)();return x.length<=1?null:x.length>2?e.createElement("div",{className:"dumi-default-lang-select"},e.createElement("select",{defaultValue:q,onChange:function(pt){z.m8.push(b({pathname:z.m8.location.pathname,current:ht,target:x.find(function(Mt){var At=Mt.id;return At===pt.target.value})}))}},x.map(function(gt){return e.createElement("option",{key:gt.id,value:gt.id},gt.name)})),e.createElement(H,null)):e.createElement(lt,{locale:x.find(function(gt){var pt=gt.id;return pt!==q}),current:ht})},ut=ct},75142:function(r,p,t){"use strict";t.d(p,{Z:function(){return U}});var e=t(3922),s=t(67294),f=t(26575),y=t.n(f),l=t(23187),L=t.n(l),N=t(75553),H=t.n(N),Z=t(41049),z=t.n(Z),V=t(5026),X=t.n(V),_=t(83357),D=t.n(_),I=t(40898),v={};v.styleTagTransform=D(),v.setAttributes=z(),v.insert=H().bind(null,"head"),v.domAPI=L(),v.insertStyleElement=X();var W=y()(I.Z,v),st=I.Z&&I.Z.locals?I.Z.locals:void 0,B=function(){var $=(0,e.WF)(),P=$.themeConfig,O=(0,e.bU)();return s.createElement(e.rU,{className:"dumi-default-logo",to:"base"in O?O.base:"/"},P.logo!==!1&&s.createElement("img",{src:P.logo||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACCCAMAAACww5CIAAACf1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8YkP8AAAACCxMamv/6+voaGhoXi/YYjv8aoP8cq/8dr/8bo/8cqP8bpv8Ykv8drv8BAwUcrP8Zlf8Xjf/s7OzLy8scp/8anP8ZmP/d3d0BBArg4ODT09O7u7sEGCsKCgoanf8YlP/8/Pz09PTIyMgMTIV1dXUGKEVEREQ0NDQODg4GBgYdsv8dsf8Zl//m5uYVgOXj4+MWgtfW1tYTc87BwcERbLWzs7Ovr6+np6cQX6OgoKCTk5MMSXlwcHBra2tiYmIVFRUetf/39/fp6ekWhOkXi+QVfNvY2NjPz88TdcUSb7u6urq3t7cPYK0NUJGQkJCLi4ttbW0JO2cINFtVVVVRUVEHMFEHLEs6OjoEHDEiIiIcHBwXj/vx8fEWh+4Sb8gRbL+rq6upqakOVZiWlpaJiYmGhoYMSIF9fX15eXkKPnQLRHJMTExHR0c9PT0FHzkqKiomJiYEFyUBBw8bovfu7u4Wht4UedsUeMrFxcW9vb0RZrOkpKSampoPXZqAgIALQmtlZWUJOGJZWVkIMFcFIUExMTEwMDAtLS0DEh8Zl/v4+PgXj/QWhvEWhvAYku8YjuwUfNcUfNAVfc0RaLkSaKsRZ6kPWqENUYlbW1sCEBhkSPCkAAAAOHRSTlMA87y4BeKrltbFnUDo0MCup6D67t7ayZKGemtmWS8rEwLNso1wVEpFGaR+UDUlHwmBYls5i1oN/DMym4YAAAfTSURBVHjaxNndS1NxHMfxX5s6t1Kz1KzsuazMnqjgyxv03ovtQrYxUBEfLkREVBQf0AsFBRUUQvEiSVFQ0YsuiiIiqKC/oH+o31lzjtPZg55zttfVNnbx5ffw+X53pmx5UFl2+XLZ4zpVOPWlJFTntYyiBwF/VbX39Sv9upYU9/QHjbXe6qqayrrnylXXi0kov3GVuFiMuNqbHhIu3FcuuohZZ+jDh7mdXkwqlGtKMGmOSFzrGiYe5ZL4+vdsd/SHFyYxtIQlIdiD4ftCa39osTlxRtzwHO1tUOLm0XYk6T3asMRtdKHdUs6qv+L1l/vKgak2SYjqN+1yYg2G5NgR4Pd5/F7fk9sO3YhSkoYkaW40KCk2Rj9KUoikqmtOn8YpydE6J7xFyq5yUhxIjvZJcUfZ5EOb6oxGQmPdtEQlR4Mxupc6IoOdzWiVypabaF1BiesIS876OiSufRXtvO0DcSi2dAN+ZcclYFZsCaOps3nYUOKprDTiSWzqAioCnpIX9ep03pxkw7jYtMWx0pdn7Jb2i1jixN3cM6OGFCti0zgpyopOsw6xiZHoyHIPLIhNHdD7bWR+c7znFD3+PNp+vxhmRkNi28BoWAzBPbQHKhdlQLe4ogsoVTl4ijYjrmiKATdUdvfjh9Ely8DVHFvWe3HJMBBQ2QWAd+KSeeBxjtuxKC7ZzG07Ht0DusQlfwDfs2wZ4b2EYVBcESHO81BlcIWESXHFV7Qss5aXY1FxRSj7L7QAhv3tsaVBMVn8Ou1MFUtjW3sYKjL0jO6QWJiA7iZxysBbtDplpRT4KZbQWkUbHRMnGFUUKwuNaH1iaRJ+Tf8bDbqcWJH2HuCV+l9DpkuxtdsuGlpYHNAJ1FqNMjnE9QocOXJCPwJ309zPT9la8e5yUJwwC/jTBNWQ5EkIqEyzHROSJzvWSeFDW5M8OUArsdgMq2EmanOyGB4WSyMYAhZp2TwkJouw2mZvmusUSwtraA//m7DXZ8SsBxiQM5tGSxNuv3+ZU/NmIpfN9qDXxp1sO4LDNrE202J6cHE1TVq2f1uNiA39K9/7JJ0JwGe6nvOSZ4OA1/R0bFbyrBWoMUX2nOTZAOA3pcSXjFW7UOJnU17VAYeZv98pTvsB1KsTRVXAtqQVA/rFWSNo11SKiuRYZeknEBRn7WJ4rZKuX8pcROvBj6g4rLUZQ8NJYBo2Jb/ax2KkhKYf6I1I3oWngKqUhfgkBTCL1pics1elICaS/5Y9jk+XBdEBeJKhHZGCCLZAWTIkBqQgNlr+NbGi2wHgS1tTAbQNAxW3i1R58WWgd725ANZ7gXPFNaqagrvwt1t7aW0qiOIAPlErPqJCq6JWrW8r1ar1xf0n4NxnnpCELEKyCNmkJZSQRSCbQltooS4sVApiC10U2kWhFRUEEdGF4vuNH8g7c9NQ2pjepPcB/r5ADjlnzp2ZM+QMXHeYb+1WfO5hi5QfveYe33XJ4+d8a3MNQHbI75KhMt9z9wF4FRNcIi3wO94bAHJiQHCHNgmgh3QD8D1MCK6I+KeNCUgbgFFRcEX8Qwhov014o/juUlEoxeqrgpsA7oWp4AZprnpv1ANgShFcoU4a+36jMgOuVGYmnuJ1Wb0hKWqCC8QCgI4dqyfRbNCFoqDBX7Xz6C0AS660K3UKQCdhuqAbdqFT+B8mAXQTbhtbpM7ng4Yn1oytOwFMu5AP9QGAa4Qz8lFwvFWIH6G7Qjijc8/LDueDyvd4z151EYBvwOF+lRFTAK6TGi+ACWdLk0ozANqvkpojAFJKRnCSlFt3m8pLc9bJTylVn64ty9rJfEl1cpVKbH3uJ2v1QleUqOCI2h9xeeP0aVqLCA4JSLk6s7hu6CbkqOAIGpyB7iRZ5xLvFWlHEkITyjK/41/v9h0AC3lngpCz0PXWf0yDUcmBhFDt0T/flx8CkNL8VLAZjUhvAHSQek5AtyALdqP5e9BdbPCkZsbuFRKVvlRHs/W1AfC902yNgoriWwCeqw1fSL+J2VkWNBF8vckr6mPQ3ZcjtkVBA/3z4Ju6Bs5ANzck2BQFpUMTxlVZQ4ege95vUxRUHoPOe5s01OWBbryf2hEFDX4Fc4Vs4gaYZ3ZEQeXBJPgMcFPnwYzJVmeE6jGsGCNAE/rAlPIBamkMQv9YCLpzxJRjYMr5BLXyg5EvgTlKTOoEkw2LUct6dTz4ojqCNO04mMm4ZE150mhMuQ+jHppwAUxqUM5QK9qkPLIE5jhpygkvmHJYiW45FaL8IwmdZy9pUtc2MK9HtvgloZngJyMVp3tJ846ASb7Q1NYrg1JN+ukDs4e05LwHTO5bUKG0tRBEeXAKzJ3rpEXdB8C9fBIWKW0hhOBIBdy2K6R11zvALY6EFYE21yHF4OdKEkz7ObIlXXvAhV4OquoApaYbpCo9qayA29lLturibhimSgOSFjG1ILRwYnwShn09xArnT8PwdnHML6n+hl+2gD8Wjj+rLMOwq49Y5dZpVKUWS++VcCwdCdT5/Uhck5SH45VpVO3qJFbq2Y5Vvly2VBgQY5KqKWI6HY+n06KiqVJMSQyP/37wB6v29xGrnThyEDWh5dyr+fJscbQw/OjRcGG0OFvO3n+QSqKm7exlYgsvNgolkyFs1HGV2OQgTGsjNjnVBtO8Owj3nwbhgWnttgWxy2PaoWaC+AuAXqWYKHupMgAAAABJRU5ErkJggg==",alt:P.name}),P.name)},U=B},74786:function(r,p,t){"use strict";t.d(p,{Z:function(){return $}});var e=t(3922),s=t(42515),f=t(67294),y=t(26575),l=t.n(y),L=t(23187),N=t.n(L),H=t(75553),Z=t.n(H),z=t(41049),V=t.n(z),X=t(5026),_=t.n(X),D=t(83357),I=t.n(D),v=t(71320),W={};W.styleTagTransform=I(),W.setAttributes=V(),W.insert=Z().bind(null,"head"),W.domAPI=N(),W.insertStyleElement=_();var st=l()(v.Z,W),B=v.Z&&v.Z.locals?v.Z.locals:void 0;function U(){return U=Object.assign?Object.assign.bind():function(P){for(var O=1;O<arguments.length;O++){var K=arguments[O];for(var Y in K)Object.prototype.hasOwnProperty.call(K,Y)&&(P[Y]=K[Y])}return P},U.apply(this,arguments)}var rt=function(){var O=(0,e.OK)(),K=(0,e.TH)(),Y=K.pathname;return f.createElement("ul",{className:"dumi-default-navbar"},O.map(function(C){return f.createElement("li",{key:C.link},/^(\w+:)\/\/|^(mailto|tel):/.test(C.link)?f.createElement("a",{href:C.link,target:"_blank",rel:"noreferrer"},C.title):f.createElement(e.rU,U({to:C.link},Y.startsWith(C.activePath||C.link)?{className:"active"}:{}),C.title))}),f.createElement(s.Z,null))},$=rt},70841:function(r,p,t){"use strict";var e=t(67294),s=function(){return e.createElement(e.Fragment,null)};p.Z=s},62561:function(r,p,t){"use strict";t.d(p,{Z:function(){return at}});var e=t(3922),s=t(67294),f=t(26575),y=t.n(f),l=t(23187),L=t.n(l),N=t(75553),H=t.n(N),Z=t(41049),z=t.n(Z),V=t(5026),X=t.n(V),_=t(83357),D=t.n(_),I=t(53037),v={};v.styleTagTransform=D(),v.setAttributes=z(),v.insert=H().bind(null,"head"),v.domAPI=L(),v.insertStyleElement=X();var W=y()(I.Z,v),st=I.Z&&I.Z.locals?I.Z.locals:void 0;function B(w,E){return O(w)||P(w,E)||rt(w,E)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rt(w,E){if(w){if(typeof w=="string")return $(w,E);var j=Object.prototype.toString.call(w).slice(8,-1);if(j==="Object"&&w.constructor&&(j=w.constructor.name),j==="Map"||j==="Set")return Array.from(w);if(j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j))return $(w,E)}}function $(w,E){(E==null||E>w.length)&&(E=w.length);for(var j=0,b=new Array(E);j<E;j++)b[j]=w[j];return b}function P(w,E){var j=w==null?null:typeof Symbol!="undefined"&&w[Symbol.iterator]||w["@@iterator"];if(j!=null){var b=[],lt=!0,ct=!1,ut,A;try{for(j=j.call(w);!(lt=(ut=j.next()).done)&&(b.push(ut.value),!(E&&b.length===E));lt=!0);}catch(S){ct=!0,A=S}finally{try{!lt&&j.return!=null&&j.return()}finally{if(ct)throw A}}return b}}function O(w){if(Array.isArray(w))return w}var K=function(){return s.createElement("svg",{viewBox:"0 0 14 16"},s.createElement("path",{d:"M5.003 6.39v3.594c0 .4.275.674.674.674.4 0 .674-.274.674-.674V1.323h1.997v8.661c0 .4.274.674.674.674s.674-.274.674-.674V1.323h3.295c.399 0 .674-.275.674-.674 0-.4-.275-.649-.674-.649H4.928C3.131 0 1.733 1.398 1.733 3.195S3.206 6.39 5.003 6.39Zm0-5.067v3.72c-1.073 0-1.922-.8-1.922-1.873s.799-1.847 1.922-1.847Zm7.988 11.332H2.73l.8-.674c.274-.2.324-.674.124-.923-.2-.275-.674-.325-.923-.125L.735 12.53c-.275.275-.4.525-.4.874 0 .325.125.674.4.874l1.997 1.597a.829.829 0 0 0 .4.125c.199 0 .398-.075.523-.275.2-.274.2-.723-.125-.923l-.998-.799h10.459c.399 0 .674-.274.674-.674 0-.424-.275-.674-.674-.674Z"}))},Y=function(){return s.createElement("svg",{viewBox:"0 0 14 16"},s.createElement("path",{d:"M5.003 6.39v3.594c0 .4.275.674.674.674.4 0 .674-.274.674-.674V1.323h1.997v8.661c0 .4.274.674.674.674s.674-.274.674-.674V1.323h3.295c.399 0 .674-.275.674-.674 0-.4-.275-.649-.674-.649H4.928C3.131 0 1.733 1.398 1.733 3.195S3.206 6.39 5.003 6.39Zm0-5.067v3.72c-1.073 0-1.922-.8-1.922-1.873s.799-1.847 1.922-1.847ZM1.01 12.655h10.26l-.8-.674c-.274-.2-.324-.674-.124-.923.2-.275.674-.325.923-.125l1.997 1.597c.275.275.4.525.4.874 0 .325-.125.674-.4.874l-1.997 1.597a.829.829 0 0 1-.399.125.59.59 0 0 1-.524-.275c-.2-.274-.2-.723.125-.923l.998-.799H1.009c-.399 0-.674-.274-.674-.674 0-.424.275-.674.674-.674Z"}))},C="dumi:rtl",ot=function(){var E=(0,s.useState)(!1),j=B(E,2),b=j[0],lt=j[1],ct=(0,e.WF)(),ut=ct.themeConfig;return(0,s.useEffect)(function(){localStorage.getItem(C)&&(lt(!0),document.documentElement.setAttribute("data-direction","rtl"))},[]),ut.rtl?s.createElement("button",{type:"button",className:"dumi-default-rtl-switch",onClick:function(){b?(document.documentElement.removeAttribute("data-direction"),localStorage.removeItem(C)):(document.documentElement.setAttribute("data-direction","rtl"),localStorage.setItem(C,"1")),lt(!b)},"data-dumi-tooltip":b?"RTL":"LTR","data-dumi-tooltip-bottom":!0},b?s.createElement(K,null):s.createElement(Y,null)):null},at=ot},74468:function(r,p,t){"use strict";t.d(p,{ZP:function(){return Dt}});var e=t(67294),s=Object.defineProperty,f=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,L=(c,d,h)=>d in c?s(c,d,{enumerable:!0,configurable:!0,writable:!0,value:h}):c[d]=h,N=(c,d)=>{for(var h in d||(d={}))y.call(d,h)&&L(c,h,d[h]);if(f)for(var h of f(d))l.call(d,h)&&L(c,h,d[h]);return c};const H=c=>e.createElement("svg",N({viewBox:"64 64 896 896"},c),e.createElement("path",{d:"M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"}));var Z="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODYyIDQ2NS4zaC04MWMtNC42IDAtOSAyLTEyLjEgNS41TDU1MCA3MjMuMVYxNjBjMC00LjQtMy42LTgtOC04aC02MGMtNC40IDAtOCAzLjYtOCA4djU2My4xTDI1NS4xIDQ3MC44Yy0zLTMuNS03LjQtNS41LTEyLjEtNS41aC04MWMtNi44IDAtMTAuNSA4LjEtNiAxMy4yTDQ4Ny45IDg2MWEzMS45NiAzMS45NiAwIDAgMCA0OC4zIDBMODY4IDQ3OC41YzQuNS01LjIuOC0xMy4yLTYtMTMuMnoiLz48L3N2Zz4=",z=Object.defineProperty,V=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,D=(c,d,h)=>d in c?z(c,d,{enumerable:!0,configurable:!0,writable:!0,value:h}):c[d]=h,I=(c,d)=>{for(var h in d||(d={}))X.call(d,h)&&D(c,h,d[h]);if(V)for(var h of V(d))_.call(d,h)&&D(c,h,d[h]);return c};const v=c=>e.createElement("svg",I({viewBox:"64 64 896 896"},c),e.createElement("path",{d:"M868 545.5 536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"}));var W="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODY4IDU0NS41IDUzNi4xIDE2M2EzMS45NiAzMS45NiAwIDAgMC00OC4zIDBMMTU2IDU0NS41YTcuOTcgNy45NyAwIDAgMCA2IDEzLjJoODFjNC42IDAgOS0yIDEyLjEtNS41TDQ3NCAzMDAuOVY4NjRjMCA0LjQgMy42IDggOCA4aDYwYzQuNCAwIDgtMy42IDgtOFYzMDAuOWwyMTguOSAyNTIuM2MzIDMuNSA3LjQgNS41IDEyLjEgNS41aDgxYzYuOCAwIDEwLjUtOCA2LTEzLjJ6Ii8+PC9zdmc+",st=Object.defineProperty,B=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,rt=Object.prototype.propertyIsEnumerable,$=(c,d,h)=>d in c?st(c,d,{enumerable:!0,configurable:!0,writable:!0,value:h}):c[d]=h,P=(c,d)=>{for(var h in d||(d={}))U.call(d,h)&&$(c,h,d[h]);if(B)for(var h of B(d))rt.call(d,h)&&$(c,h,d[h]);return c};const O=c=>e.createElement("svg",P({viewBox:"64 64 896 896"},c),e.createElement("path",{d:"M909.6 854.5 649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}));var K="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTA5LjYgODU0LjUgNjQ5LjkgNTk0LjhDNjkwLjIgNTQyLjcgNzEyIDQ3OSA3MTIgNDEyYzAtODAuMi0zMS4zLTE1NS40LTg3LjktMjEyLjEtNTYuNi01Ni43LTEzMi04Ny45LTIxMi4xLTg3LjlzLTE1NS41IDMxLjMtMjEyLjEgODcuOUMxNDMuMiAyNTYuNSAxMTIgMzMxLjggMTEyIDQxMmMwIDgwLjEgMzEuMyAxNTUuNSA4Ny45IDIxMi4xQzI1Ni41IDY4MC44IDMzMS44IDcxMiA0MTIgNzEyYzY3IDAgMTMwLjYtMjEuOCAxODIuNy02MmwyNTkuNyAyNTkuNmE4LjIgOC4yIDAgMCAwIDExLjYgMGw0My42LTQzLjVhOC4yIDguMiAwIDAgMCAwLTExLjZ6TTU3MC40IDU3MC40QzUyOCA2MTIuNyA0NzEuOCA2MzYgNDEyIDYzNnMtMTE2LTIzLjMtMTU4LjQtNjUuNkMyMTEuMyA1MjggMTg4IDQ3MS44IDE4OCA0MTJzMjMuMy0xMTYuMSA2NS42LTE1OC40QzI5NiAyMTEuMyAzNTIuMiAxODggNDEyIDE4OHMxMTYuMSAyMy4yIDE1OC40IDY1LjZTNjM2IDM1Mi4yIDYzNiA0MTJzLTIzLjMgMTE2LjEtNjUuNiAxNTguNHoiLz48L3N2Zz4=",Y=t(3922),C=Object.defineProperty,ot=Object.getOwnPropertySymbols,at=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,E=(c,d,h)=>d in c?C(c,d,{enumerable:!0,configurable:!0,writable:!0,value:h}):c[d]=h,j=(c,d)=>{for(var h in d||(d={}))at.call(d,h)&&E(c,h,d[h]);if(ot)for(var h of ot(d))w.call(d,h)&&E(c,h,d[h]);return c};const b=c=>e.createElement("svg",j({viewBox:"0 0 1024 1024"},c),e.createElement("path",{d:"m885.2 446.3-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0 0 60.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z"}));var lt="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJtODg1LjIgNDQ2LjMtLjItLjgtMTEyLjItMjg1LjFjLTUtMTYuMS0xOS45LTI3LjItMzYuOC0yNy4ySDI4MS4yYy0xNyAwLTMyLjEgMTEuMy0zNi45IDI3LjZMMTM5LjQgNDQzbC0uMy43LS4yLjhjLTEuMyA0LjktMS43IDkuOS0xIDE0LjgtLjEgMS42LS4yIDMuMi0uMiA0LjhWODMwYTYwLjkgNjAuOSAwIDAgMCA2MC44IDYwLjhoNjI3LjJjMzMuNSAwIDYwLjgtMjcuMyA2MC45LTYwLjhWNDY0LjFjMC0xLjMgMC0yLjYtLjEtMy43LjQtNC45IDAtOS42LTEuMy0xNC4xem0tMjk1LjgtNDMtLjMgMTUuN2MtLjggNDQuOS0zMS44IDc1LjEtNzcuMSA3NS4xLTIyLjEgMC00MS4xLTcuMS01NC44LTIwLjZTNDM2IDQ0MS4yIDQzNS42IDQxOWwtLjMtMTUuN0gyMjkuNUwzMDkgMjEwaDM5OS4ybDgxLjcgMTkzLjNINTg5LjR6bS0zNzUgNzYuOGgxNTcuM2MyNC4zIDU3LjEgNzYgOTAuOCAxNDAuNCA5MC44IDMzLjcgMCA2NS05LjQgOTAuMy0yNy4yIDIyLjItMTUuNiAzOS41LTM3LjQgNTAuNy02My42aDE1Ni41VjgxNEgyMTQuNFY0ODAuMXoiLz48L3N2Zz4=",ct=t(26575),ut=t.n(ct),A=t(23187),S=t.n(A),x=t(75553),Q=t.n(x),q=t(41049),ht=t.n(q),gt=t(5026),pt=t.n(gt),Mt=t(83357),At=t.n(Mt),Lt=t(78074),Et={};Et.styleTagTransform=At(),Et.setAttributes=ht(),Et.insert=Q().bind(null,"head"),Et.domAPI=S(),Et.insertStyleElement=pt();var Ut=ut()(Lt.Z,Et),T=Lt.Z&&Lt.Z.locals?Lt.Z.locals:void 0;function g(c,d){return M(c)||k(c,d)||a(c,d)||n()}function n(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function a(c,d){if(c){if(typeof c=="string")return m(c,d);var h=Object.prototype.toString.call(c).slice(8,-1);if(h==="Object"&&c.constructor&&(h=c.constructor.name),h==="Map"||h==="Set")return Array.from(c);if(h==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h))return m(c,d)}}function m(c,d){(d==null||d>c.length)&&(d=c.length);for(var h=0,u=new Array(d);h<d;h++)u[h]=c[h];return u}function k(c,d){var h=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(h!=null){var u=[],o=!0,i=!1,dt,xt;try{for(h=h.call(c);!(o=(dt=h.next()).done)&&(u.push(dt.value),!(d&&u.length===d));o=!0);}catch(yt){i=!0,xt=yt}finally{try{!o&&h.return!=null&&h.return()}finally{if(i)throw xt}}return u}}function M(c){if(Array.isArray(c))return c}var J=function(){return e.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M5.333 10.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 13.333 4 12.89 4 12s.444-1.333 1.333-1.333Z"}),e.createElement("path",{d:"M13.207 2.667h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Zm8 0h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Z"}),e.createElement("path",{d:"M5.333 18.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 21.333 4 20.89 4 20s.444-1.333 1.333-1.333Z"}))},et=function(){return e.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M9.402 0h14.78L30 6.16V24.5c0 1.933-1.71 3.5-3.589 3.5H9.401C7.524 28 6 26.433 6 24.5v-21C6 1.567 7.523 0 9.402 0ZM23 2v4.183c0 .451.366.817.817.817H28l-5-5Zm3.333 24c.92 0 1.667-.768 1.667-1.714V8.857h-5c-.92 0-1.667-.767-1.667-1.714V2H9.667C8.747 2 8 2.768 8 3.714v20.572C8 25.232 8.746 26 9.667 26h16.666Z"}))},mt=function(){return e.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M6.12 14.589h6.628l1.52 4.004h2.485l-5.938-15.19H8.053L2.115 18.732H4.6l1.52-4.143ZM8.88 6.855c.139-.414.277-.828.415-1.38h.138c0 .138.138.414.414 1.104 0 .138.138.276.138.276 0 .138.829 2.072 2.21 5.938H6.672c1.519-3.866 2.21-5.8 2.21-5.938Zm8.148 2.348h12.705v1.933H17.029V9.203ZM2.115 20.665h27.619v1.933H2.114v-1.933Zm14.914-5.662h12.705v1.933H17.029v-1.933ZM2.115 26.327h27.619v1.933H2.114v-1.933ZM17.029 3.54h12.705v1.934H17.029V3.54Z"}))},it=function(){return e.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M28 6h-5a5 5 0 0 0-10 0H8a2 2 0 0 0-2 2v5a5 5 0 0 0 0 10v5a2 2 0 0 0 2 2h7v-2a3 3 0 0 1 6 0v2h7a2 2 0 0 0 2-2v-7h-2a3 3 0 0 1 0-6h2V8a2 2 0 0 0-2-2Zm-5 12a5 5 0 0 0 5 5v5h-5a5 5 0 0 0-10 0H8v-7H6a3 3 0 0 1 0-6h2V8h7V6a3 3 0 0 1 6 0v2h7v5a5 5 0 0 0-5 5Z"}))},R={title:J,page:et,content:mt,demo:it},tt=function(d){return e.createElement(e.Fragment,null,d.texts.map(function(h,u){return e.createElement(e.Fragment,{key:u},h.highlighted?e.createElement("mark",null,h.text):h.text)}))},St=function(d){var h=(0,e.useCallback)(function(){var xt=0,yt=[];return d.forEach(function(zt){zt.title&&yt.push({type:"title",value:{title:zt.title}}),zt.hints.forEach(function(vt){yt.push({type:"hint",activeIndex:xt++,value:vt})})}),[yt,xt]},[d]),u=(0,e.useState)(h),o=g(u,2),i=o[0],dt=o[1];return(0,e.useEffect)(function(){dt(h)},[d]),i},G=function(d){var h=St(d.data),u=g(h,2),o=u[0],i=u[1],dt=(0,e.useState)(-1),xt=g(dt,2),yt=xt[0],zt=xt[1];return(0,e.useEffect)(function(){var vt=function(Rt){if(Rt.key==="ArrowDown")zt((yt+1)%i);else if(Rt.key==="ArrowUp")zt((yt+i-1)%i);else if(Rt.key==="Enter"&&yt>=0){var jt,Kt=o.find(function(Ft){return Ft.type==="hint"&&Ft.activeIndex===yt}).value;Y.m8.push(Kt.link),(jt=d.onItemSelect)===null||jt===void 0||jt.call(d,Kt),document.activeElement.blur()}["Escape","Enter"].includes(Rt.key)&&zt(-1)};return document.addEventListener("keydown",vt),function(){return document.removeEventListener("keydown",vt)}}),e.createElement("div",{className:"dumi-default-search-result",onMouseEnter:function(){return zt(-1)},onMouseDownCapture:function(Pt){return Pt.preventDefault()},onMouseUpCapture:function(){document.activeElement.blur()}},Boolean(d.data.length||d.loading)?e.createElement("dl",null,o.map(function(vt,Pt){return vt.type==="title"?e.createElement("dt",{key:String(Pt)},vt.value.title):e.createElement("dd",{key:String(Pt)},e.createElement(Y.rU,{to:vt.value.link,"data-active":yt===vt.activeIndex||void 0,onClick:function(){var jt;return(jt=d.onItemSelect)===null||jt===void 0?void 0:jt.call(d,vt.value)}},e.createElement(R[vt.value.type]),e.createElement("h4",null,e.createElement(tt,{texts:vt.value.highlightTitleTexts})),e.createElement("p",null,e.createElement(tt,{texts:vt.value.highlightTexts}))))})):e.createElement("div",{className:"dumi-default-search-empty"},e.createElement(b,null),e.createElement(Y._H,{id:"search.not.found"})))},ft=G,F=t(51578),nt={};nt.styleTagTransform=At(),nt.setAttributes=ht(),nt.insert=Q().bind(null,"head"),nt.domAPI=S(),nt.insertStyleElement=pt();var Tt=ut()(F.Z,nt),wt=F.Z&&F.Z.locals?F.Z.locals:void 0,It=(0,e.forwardRef)(function(c,d){var h=(0,Y.YB)(),u=(0,e.useRef)(!1),o=(0,e.useRef)(null);return(0,e.useImperativeHandle)(d,function(){return o.current}),e.createElement("input",{className:"dumi-default-search-bar-input",onCompositionStart:function(){return u.current=!0},onCompositionEnd:function(dt){u.current=!1,c.onChange(dt.currentTarget.value)},onFocus:c.onFocus,onBlur:c.onBlur,onKeyDown:function(dt){["ArrowDown","ArrowUp"].includes(dt.key)&&dt.preventDefault(),dt.key==="Escape"&&!u.current&&dt.currentTarget.blur()},onChange:function(dt){setTimeout(function(){u.current||c.onChange(dt.target.value)},1)},placeholder:h.formatMessage({id:"header.search.placeholder"}),ref:o})}),Nt=function(d){return(0,e.useEffect)(function(){if(d.visible)document.body.style.overflow="hidden";else{var h;document.body.style.overflow="",(h=d.onClose)===null||h===void 0||h.call(d)}},[d.visible]),d.visible?e.createElement("div",{className:"dumi-default-search-modal"},e.createElement("div",{className:"dumi-default-search-modal-mask",onClick:d.onMaskClick}),e.createElement("div",{className:"dumi-default-search-modal-content"},d.children)):null},Ht;function Ot(c,d){return Zt(c)||Qt(c,d)||Vt(c,d)||Wt()}function Wt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vt(c,d){if(c){if(typeof c=="string")return Yt(c,d);var h=Object.prototype.toString.call(c).slice(8,-1);if(h==="Object"&&c.constructor&&(h=c.constructor.name),h==="Map"||h==="Set")return Array.from(c);if(h==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h))return Yt(c,d)}}function Yt(c,d){(d==null||d>c.length)&&(d=c.length);for(var h=0,u=new Array(d);h<d;h++)u[h]=c[h];return u}function Qt(c,d){var h=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(h!=null){var u=[],o=!0,i=!1,dt,xt;try{for(h=h.call(c);!(o=(dt=h.next()).done)&&(u.push(dt.value),!(d&&u.length===d));o=!0);}catch(yt){i=!0,xt=yt}finally{try{!o&&h.return!=null&&h.return()}finally{if(i)throw xt}}return u}}function Zt(c){if(Array.isArray(c))return c}var kt=/(mac|iphone|ipod|ipad)/i.test(typeof navigator!="undefined"?(Ht=navigator)===null||Ht===void 0?void 0:Ht.platform:""),Ct=function(d){return["TEXTAREA","INPUT"].includes(d.tagName)||d.contentEditable==="true"},_t=function(){var d=(0,e.useState)(!1),h=Ot(d,2),u=h[0],o=h[1],i=(0,e.useRef)(null),dt=(0,e.useRef)(null),xt=(0,e.useState)("\u2318"),yt=Ot(xt,2),zt=yt[0],vt=yt[1],Pt=(0,Y.OO)(),Rt=Pt.keywords,jt=Pt.setKeywords,Kt=Pt.result,Ft=Pt.loading,ee=(0,e.useState)(!1),qt=Ot(ee,2),te=qt[0],Jt=qt[1];return(0,e.useEffect)(function(){kt||vt("Ctrl");var bt=function(Bt){if(((kt?Bt.metaKey:Bt.ctrlKey)&&Bt.key==="k"||Bt.key==="/"&&!Ct(Bt.target))&&(Bt.preventDefault(),i.current)){var Xt=i.current.getBoundingClientRect(),ne=Xt.top,ae=Xt.bottom,re=Xt.left,oe=Xt.right,le=ne>=0&&re>=0&&ae<=window.innerHeight&&oe<=window.innerWidth;le?i.current.focus():(jt(""),Jt(!0),setTimeout(function(){var $t;($t=dt.current)===null||$t===void 0||$t.focus()}))}Bt.key==="Escape"&&(Bt.preventDefault(),Jt(!1))};return document.addEventListener("keydown",bt),function(){return document.removeEventListener("keydown",bt)}},[]),e.createElement("div",{className:"dumi-default-search-bar"},e.createElement(O,{className:"dumi-default-search-bar-svg"}),e.createElement(It,{onFocus:function(){return o(!0)},onBlur:function(){setTimeout(function(){o(!1)},1)},onChange:function(Gt){return jt(Gt)},ref:i}),e.createElement("span",{className:"dumi-default-search-shortcut"},zt," K"),Rt.trim()&&u&&(Kt.length||!Ft)&&!te&&e.createElement("div",{className:"dumi-default-search-popover"},e.createElement("section",null,e.createElement(ft,{data:Kt,loading:Ft}))),e.createElement(Nt,{visible:te,onMaskClick:function(){Jt(!1)},onClose:function(){return jt("")}},e.createElement("div",{style:{position:"relative"}},e.createElement(O,{className:"dumi-default-search-bar-svg"}),e.createElement(It,{onFocus:function(){return o(!0)},onBlur:function(){setTimeout(function(){o(!1)},1)},onChange:function(Gt){return jt(Gt)},ref:dt})),e.createElement(ft,{data:Kt,loading:Ft,onItemSelect:function(){Jt(!1)}}),e.createElement("footer",null,e.createElement("ul",{className:"dumi-default-search-modal-commands"},e.createElement("li",{className:"dumi-default-search-modal-commands-arrow"},e.createElement("span",{className:"dumi-default-search-modal-shortcut"},e.createElement(v,{width:"10px",height:"10px",fill:"rgba(0, 0, 0, 0.45)"})),e.createElement("span",{className:"dumi-default-search-modal-shortcut"},e.createElement(H,{width:"10px",height:"10px",fill:"rgba(0, 0, 0, 0.45)"})),e.createElement("span",{className:"dumi-default-search-modal-commands-text"},"to navigate")),e.createElement("li",null,e.createElement("span",{className:"dumi-default-search-modal-shortcut"},"esc"),e.createElement("span",{className:"dumi-default-search-modal-commands-text"},"to close"))))))},Dt=_t},15153:function(r,p,t){"use strict";t.d(p,{Z:function(){return rt}});var e=t(3922),s=t(26687),f=t(67294),y=t(26575),l=t.n(y),L=t(23187),N=t.n(L),H=t(75553),Z=t.n(H),z=t(41049),V=t.n(z),X=t(5026),_=t.n(X),D=t(83357),I=t.n(D),v=t(25242),W={};W.styleTagTransform=I(),W.setAttributes=V(),W.insert=Z().bind(null,"head"),W.domAPI=N(),W.insertStyleElement=_();var st=l()(v.Z,W),B=v.Z&&v.Z.locals?v.Z.locals:void 0,U=function(){var P=(0,e.TH)(),O=P.pathname,K=(0,e.eL)(),Y=(0,e.tx)();return Y?f.createElement("div",{className:"dumi-default-sidebar"},Y.map(function(C,ot){return f.createElement("dl",{className:"dumi-default-sidebar-group",key:String(ot)},C.title&&f.createElement("dt",null,C.title),C.children.map(function(at){return f.createElement("dd",{key:at.link},f.createElement(e.OL,{to:at.link,title:at.title,end:!0},at.title),at.link===O&&K.frontmatter.toc==="menu"&&f.createElement(s.Z,null))}))})):null},rt=U},75048:function(r,p,t){"use strict";t.d(p,{Z:function(){return h}});var e=t(67294),s=Object.defineProperty,f=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,L=(u,o,i)=>o in u?s(u,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):u[o]=i,N=(u,o)=>{for(var i in o||(o={}))y.call(o,i)&&L(u,i,o[i]);if(f)for(var i of f(o))l.call(o,i)&&L(u,i,o[i]);return u};const H=u=>e.createElement("svg",N({viewBox:"64 64 896 896"},u),e.createElement("path",{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H176V176h672v672z"}));var Z="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODgwIDExMkgxNDRjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjczNmMwIDE3LjcgMTQuMyAzMiAzMiAzMmg3MzZjMTcuNyAwIDMyLTE0LjMgMzItMzJWMTQ0YzAtMTcuNy0xNC4zLTMyLTMyLTMyem0tMzIgNzM2SDY2My45VjYwMi4yaDEwNGwxNS42LTEyMC43SDY2My45di03Ny4xYzAtMzUgOS43LTU4LjggNTkuOC01OC44aDYzLjl2LTEwOGMtMTEuMS0xLjUtNDktNC44LTkzLjItNC44LTkyLjIgMC0xNTUuMyA1Ni4zLTE1NS4zIDE1OS42djg5SDQzNC45djEyMC43aDEwNC4zVjg0OEgxNzZWMTc2aDY3MnY2NzJ6Ii8+PC9zdmc+",z=Object.defineProperty,V=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,D=(u,o,i)=>o in u?z(u,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):u[o]=i,I=(u,o)=>{for(var i in o||(o={}))X.call(o,i)&&D(u,i,o[i]);if(V)for(var i of V(o))_.call(o,i)&&D(u,i,o[i]);return u};const v=u=>e.createElement("svg",I({viewBox:"64 64 896 896"},u),e.createElement("path",{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}));var W="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNTExLjYgNzYuM0MyNjQuMyA3Ni4yIDY0IDI3Ni40IDY0IDUyMy41IDY0IDcxOC45IDE4OS4zIDg4NSAzNjMuOCA5NDZjMjMuNSA1LjkgMTkuOS0xMC44IDE5LjktMjIuMnYtNzcuNWMtMTM1LjcgMTUuOS0xNDEuMi03My45LTE1MC4zLTg4LjlDMjE1IDcyNiAxNzEuNSA3MTggMTg0LjUgNzAzYzMwLjktMTUuOSA2Mi40IDQgOTguOSA1Ny45IDI2LjQgMzkuMSA3Ny45IDMyLjUgMTA0IDI2IDUuNy0yMy41IDE3LjktNDQuNSAzNC43LTYwLjgtMTQwLjYtMjUuMi0xOTkuMi0xMTEtMTk5LjItMjEzIDAtNDkuNSAxNi4zLTk1IDQ4LjMtMTMxLjctMjAuNC02MC41IDEuOS0xMTIuMyA0LjktMTIwIDU4LjEtNS4yIDExOC41IDQxLjYgMTIzLjIgNDUuMyAzMy04LjkgNzAuNy0xMy42IDExMi45LTEzLjYgNDIuNCAwIDgwLjIgNC45IDExMy41IDEzLjkgMTEuMy04LjYgNjcuMy00OC44IDEyMS4zLTQzLjkgMi45IDcuNyAyNC43IDU4LjMgNS41IDExOCAzMi40IDM2LjggNDguOSA4Mi43IDQ4LjkgMTMyLjMgMCAxMDIuMi01OSAxODguMS0yMDAgMjEyLjlhMTI3LjUgMTI3LjUgMCAwIDEgMzguMSA5MXYxMTIuNWMuOCA5IDAgMTcuOSAxNSAxNy45IDE3Ny4xLTU5LjcgMzA0LjYtMjI3IDMwNC42LTQyNC4xIDAtMjQ3LjItMjAwLjQtNDQ3LjMtNDQ3LjUtNDQ3LjN6Ii8+PC9zdmc+",st=Object.defineProperty,B=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,rt=Object.prototype.propertyIsEnumerable,$=(u,o,i)=>o in u?st(u,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):u[o]=i,P=(u,o)=>{for(var i in o||(o={}))U.call(o,i)&&$(u,i,o[i]);if(B)for(var i of B(o))rt.call(o,i)&&$(u,i,o[i]);return u};const O=u=>e.createElement("svg",P({viewBox:"64 64 896 896"},u),e.createElement("path",{d:"M913.9 552.2 805 181.4v-.1c-7.6-22.9-25.7-36.5-48.3-36.5-23.4 0-42.5 13.5-49.7 35.2l-71.4 213H388.8l-71.4-213c-7.2-21.7-26.3-35.2-49.7-35.2-23.1 0-42.5 14.8-48.4 36.6L110.5 552.2c-4.4 14.7 1.2 31.4 13.5 40.7l368.5 276.4c2.6 3.6 6.2 6.3 10.4 7.8l8.6 6.4 8.5-6.4c4.9-1.7 9-4.7 11.9-8.9l368.4-275.4c12.4-9.2 18-25.9 13.6-40.6zM751.7 193.4c1-1.8 2.9-1.9 3.5-1.9 1.1 0 2.5.3 3.4 3L818 394.3H684.5l67.2-200.9zm-487.4 1c.9-2.6 2.3-2.9 3.4-2.9 2.7 0 2.9.1 3.4 1.7l67.3 201.2H206.5l57.8-200zM158.8 558.7l28.2-97.3 202.4 270.2-230.6-172.9zm73.9-116.4h122.1l90.8 284.3-212.9-284.3zM512.9 776 405.7 442.3H620L512.9 776zm157.9-333.7h119.5L580 723.1l90.8-280.8zm-40.7 293.9 207.3-276.7 29.5 99.2-236.8 177.5z"}));var K="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTEzLjkgNTUyLjIgODA1IDE4MS40di0uMWMtNy42LTIyLjktMjUuNy0zNi41LTQ4LjMtMzYuNS0yMy40IDAtNDIuNSAxMy41LTQ5LjcgMzUuMmwtNzEuNCAyMTNIMzg4LjhsLTcxLjQtMjEzYy03LjItMjEuNy0yNi4zLTM1LjItNDkuNy0zNS4yLTIzLjEgMC00Mi41IDE0LjgtNDguNCAzNi42TDExMC41IDU1Mi4yYy00LjQgMTQuNyAxLjIgMzEuNCAxMy41IDQwLjdsMzY4LjUgMjc2LjRjMi42IDMuNiA2LjIgNi4zIDEwLjQgNy44bDguNiA2LjQgOC41LTYuNGM0LjktMS43IDktNC43IDExLjktOC45bDM2OC40LTI3NS40YzEyLjQtOS4yIDE4LTI1LjkgMTMuNi00MC42ek03NTEuNyAxOTMuNGMxLTEuOCAyLjktMS45IDMuNS0xLjkgMS4xIDAgMi41LjMgMy40IDNMODE4IDM5NC4zSDY4NC41bDY3LjItMjAwLjl6bS00ODcuNCAxYy45LTIuNiAyLjMtMi45IDMuNC0yLjkgMi43IDAgMi45LjEgMy40IDEuN2w2Ny4zIDIwMS4ySDIwNi41bDU3LjgtMjAwek0xNTguOCA1NTguN2wyOC4yLTk3LjMgMjAyLjQgMjcwLjItMjMwLjYtMTcyLjl6bTczLjktMTE2LjRoMTIyLjFsOTAuOCAyODQuMy0yMTIuOS0yODQuM3pNNTEyLjkgNzc2IDQwNS43IDQ0Mi4zSDYyMEw1MTIuOSA3NzZ6bTE1Ny45LTMzMy43aDExOS41TDU4MCA3MjMuMWw5MC44LTI4MC44em0tNDAuNyAyOTMuOSAyMDcuMy0yNzYuNyAyOS41IDk5LjItMjM2LjggMTc3LjV6Ii8+PC9zdmc+",Y=Object.defineProperty,C=Object.getOwnPropertySymbols,ot=Object.prototype.hasOwnProperty,at=Object.prototype.propertyIsEnumerable,w=(u,o,i)=>o in u?Y(u,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):u[o]=i,E=(u,o)=>{for(var i in o||(o={}))ot.call(o,i)&&w(u,i,o[i]);if(C)for(var i of C(o))at.call(o,i)&&w(u,i,o[i]);return u};const j=u=>e.createElement("svg",E({viewBox:"64 64 896 896"},u),e.createElement("path",{d:"M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 1 0-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z"}));var b="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODQ3LjcgMTEySDE3Ni4zYy0zNS41IDAtNjQuMyAyOC44LTY0LjMgNjQuM3Y2NzEuNGMwIDM1LjUgMjguOCA2NC4zIDY0LjMgNjQuM2g2NzEuNGMzNS41IDAgNjQuMy0yOC44IDY0LjMtNjQuM1YxNzYuM2MwLTM1LjUtMjguOC02NC4zLTY0LjMtNjQuM3ptMCA3MzZjLTQ0Ny44LS4xLTY3MS43LS4yLTY3MS43LS4zLjEtNDQ3LjguMi02NzEuNy4zLTY3MS43IDQ0Ny44LjEgNjcxLjcuMiA2NzEuNy4zLS4xIDQ0Ny44LS4yIDY3MS43LS4zIDY3MS43ek0yMzAuNiA0MTEuOWgxMTguN3YzODEuOEgyMzAuNnptNTkuNC01Mi4yYzM3LjkgMCA2OC44LTMwLjggNjguOC02OC44YTY4LjggNjguOCAwIDEgMC0xMzcuNiAwYy0uMSAzOCAzMC43IDY4LjggNjguOCA2OC44em0yNTIuMyAyNDUuMWMwLTQ5LjggOS41LTk4IDcxLjItOTggNjAuOCAwIDYxLjcgNTYuOSA2MS43IDEwMS4ydjE4NS43aDExOC42VjU4NC4zYzAtMTAyLjgtMjIuMi0xODEuOS0xNDIuMy0xODEuOS01Ny43IDAtOTYuNCAzMS43LTExMi4zIDYxLjdoLTEuNnYtNTIuMkg0MjMuN3YzODEuOGgxMTguNlY2MDQuOHoiLz48L3N2Zz4=",lt=Object.defineProperty,ct=Object.getOwnPropertySymbols,ut=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,S=(u,o,i)=>o in u?lt(u,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):u[o]=i,x=(u,o)=>{for(var i in o||(o={}))ut.call(o,i)&&S(u,i,o[i]);if(ct)for(var i of ct(o))A.call(o,i)&&S(u,i,o[i]);return u};const Q=u=>e.createElement("svg",x({viewBox:"64 64 896 896"},u),e.createElement("path",{d:"M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"}));var q="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTI4IDI1NC4zYy0zMC42IDEzLjItNjMuOSAyMi43LTk4LjIgMjYuNGExNzAuMSAxNzAuMSAwIDAgMCA3NS05NCAzMzYuNjQgMzM2LjY0IDAgMCAxLTEwOC4yIDQxLjJBMTcwLjEgMTcwLjEgMCAwIDAgNjcyIDE3NGMtOTQuNSAwLTE3MC41IDc2LjYtMTcwLjUgMTcwLjYgMCAxMy4yIDEuNiAyNi40IDQuMiAzOS4xLTE0MS41LTcuNC0yNjcuNy03NS0zNTEuNi0xNzguNWExNjkuMzIgMTY5LjMyIDAgMCAwLTIzLjIgODYuMWMwIDU5LjIgMzAuMSAxMTEuNCA3NiAxNDIuMWExNzIgMTcyIDAgMCAxLTc3LjEtMjEuN3YyLjFjMCA4Mi45IDU4LjYgMTUxLjYgMTM2LjcgMTY3LjRhMTgwLjYgMTgwLjYgMCAwIDEtNDQuOSA1LjhjLTExLjEgMC0yMS42LTEuMS0zMi4yLTIuNkMyMTEgNjUyIDI3My45IDcwMS4xIDM0OC44IDcwMi43Yy01OC42IDQ1LjktMTMyIDcyLjktMjExLjcgNzIuOS0xNC4zIDAtMjcuNS0uNS00MS4yLTIuMUMxNzEuNSA4MjIgMjYxLjIgODUwIDM1Ny44IDg1MCA2NzEuNCA4NTAgODQzIDU5MC4yIDg0MyAzNjQuN2MwLTcuNCAwLTE0LjgtLjUtMjIuMiAzMy4yLTI0LjMgNjIuMy01NC40IDg1LjUtODguMnoiLz48L3N2Zz4=",ht=Object.defineProperty,gt=Object.getOwnPropertySymbols,pt=Object.prototype.hasOwnProperty,Mt=Object.prototype.propertyIsEnumerable,At=(u,o,i)=>o in u?ht(u,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):u[o]=i,Lt=(u,o)=>{for(var i in o||(o={}))pt.call(o,i)&&At(u,i,o[i]);if(gt)for(var i of gt(o))Mt.call(o,i)&&At(u,i,o[i]);return u};const Et=u=>e.createElement("svg",Lt({viewBox:"64 64 896 896"},u),e.createElement("path",{d:"M457.3 543c-68.1-17.7-145 16.2-174.6 76.2-30.1 61.2-1 129.1 67.8 151.3 71.2 23 155.2-12.2 184.4-78.3 28.7-64.6-7.2-131-77.6-149.2zm-52 156.2c-13.8 22.1-43.5 31.7-65.8 21.6-22-10-28.5-35.7-14.6-57.2 13.7-21.4 42.3-31 64.4-21.7 22.4 9.5 29.6 35 16 57.3zm45.5-58.5c-5 8.6-16.1 12.7-24.7 9.1-8.5-3.5-11.2-13.1-6.4-21.5 5-8.4 15.6-12.4 24.1-9.1 8.7 3.2 11.8 12.9 7 21.5zm334.5-197.2c15 4.8 31-3.4 35.9-18.3 11.8-36.6 4.4-78.4-23.2-109a111.39 111.39 0 0 0-106-34.3 28.45 28.45 0 0 0-21.9 33.8 28.39 28.39 0 0 0 33.8 21.8c18.4-3.9 38.3 1.8 51.9 16.7a54.2 54.2 0 0 1 11.3 53.3 28.45 28.45 0 0 0 18.2 36zm99.8-206c-56.7-62.9-140.4-86.9-217.7-70.5a32.98 32.98 0 0 0-25.4 39.3 33.12 33.12 0 0 0 39.3 25.5c55-11.7 114.4 5.4 154.8 50.1 40.3 44.7 51.2 105.7 34 159.1-5.6 17.4 3.9 36 21.3 41.7 17.4 5.6 36-3.9 41.6-21.2v-.1c24.1-75.4 8.9-161.1-47.9-223.9zM729 499c-12.2-3.6-20.5-6.1-14.1-22.1 13.8-34.7 15.2-64.7.3-86-28-40.1-104.8-37.9-192.8-1.1 0 0-27.6 12.1-20.6-9.8 13.5-43.5 11.5-79.9-9.6-101-47.7-47.8-174.6 1.8-283.5 110.6C127.3 471.1 80 557.5 80 632.2 80 775.1 263.2 862 442.5 862c235 0 391.3-136.5 391.3-245 0-65.5-55.2-102.6-104.8-118zM443 810.8c-143 14.1-266.5-50.5-275.8-144.5-9.3-93.9 99.2-181.5 242.2-195.6 143-14.2 266.5 50.5 275.8 144.4C694.4 709 586 796.6 443 810.8z"}));var Ut="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNDU3LjMgNTQzYy02OC4xLTE3LjctMTQ1IDE2LjItMTc0LjYgNzYuMi0zMC4xIDYxLjItMSAxMjkuMSA2Ny44IDE1MS4zIDcxLjIgMjMgMTU1LjItMTIuMiAxODQuNC03OC4zIDI4LjctNjQuNi03LjItMTMxLTc3LjYtMTQ5LjJ6bS01MiAxNTYuMmMtMTMuOCAyMi4xLTQzLjUgMzEuNy02NS44IDIxLjYtMjItMTAtMjguNS0zNS43LTE0LjYtNTcuMiAxMy43LTIxLjQgNDIuMy0zMSA2NC40LTIxLjcgMjIuNCA5LjUgMjkuNiAzNSAxNiA1Ny4zem00NS41LTU4LjVjLTUgOC42LTE2LjEgMTIuNy0yNC43IDkuMS04LjUtMy41LTExLjItMTMuMS02LjQtMjEuNSA1LTguNCAxNS42LTEyLjQgMjQuMS05LjEgOC43IDMuMiAxMS44IDEyLjkgNyAyMS41em0zMzQuNS0xOTcuMmMxNSA0LjggMzEtMy40IDM1LjktMTguMyAxMS44LTM2LjYgNC40LTc4LjQtMjMuMi0xMDlhMTExLjM5IDExMS4zOSAwIDAgMC0xMDYtMzQuMyAyOC40NSAyOC40NSAwIDAgMC0yMS45IDMzLjggMjguMzkgMjguMzkgMCAwIDAgMzMuOCAyMS44YzE4LjQtMy45IDM4LjMgMS44IDUxLjkgMTYuN2E1NC4yIDU0LjIgMCAwIDEgMTEuMyA1My4zIDI4LjQ1IDI4LjQ1IDAgMCAwIDE4LjIgMzZ6bTk5LjgtMjA2Yy01Ni43LTYyLjktMTQwLjQtODYuOS0yMTcuNy03MC41YTMyLjk4IDMyLjk4IDAgMCAwLTI1LjQgMzkuMyAzMy4xMiAzMy4xMiAwIDAgMCAzOS4zIDI1LjVjNTUtMTEuNyAxMTQuNCA1LjQgMTU0LjggNTAuMSA0MC4zIDQ0LjcgNTEuMiAxMDUuNyAzNCAxNTkuMS01LjYgMTcuNCAzLjkgMzYgMjEuMyA0MS43IDE3LjQgNS42IDM2LTMuOSA0MS42LTIxLjJ2LS4xYzI0LjEtNzUuNCA4LjktMTYxLjEtNDcuOS0yMjMuOXpNNzI5IDQ5OWMtMTIuMi0zLjYtMjAuNS02LjEtMTQuMS0yMi4xIDEzLjgtMzQuNyAxNS4yLTY0LjcuMy04Ni0yOC00MC4xLTEwNC44LTM3LjktMTkyLjgtMS4xIDAgMC0yNy42IDEyLjEtMjAuNi05LjggMTMuNS00My41IDExLjUtNzkuOS05LjYtMTAxLTQ3LjctNDcuOC0xNzQuNiAxLjgtMjgzLjUgMTEwLjZDMTI3LjMgNDcxLjEgODAgNTU3LjUgODAgNjMyLjIgODAgNzc1LjEgMjYzLjIgODYyIDQ0Mi41IDg2MmMyMzUgMCAzOTEuMy0xMzYuNSAzOTEuMy0yNDUgMC02NS41LTU1LjItMTAyLjYtMTA0LjgtMTE4ek00NDMgODEwLjhjLTE0MyAxNC4xLTI2Ni41LTUwLjUtMjc1LjgtMTQ0LjUtOS4zLTkzLjkgOTkuMi0xODEuNSAyNDIuMi0xOTUuNiAxNDMtMTQuMiAyNjYuNSA1MC41IDI3NS44IDE0NC40QzY5NC40IDcwOSA1ODYgNzk2LjYgNDQzIDgxMC44eiIvPjwvc3ZnPg==",T=Object.defineProperty,g=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,m=(u,o,i)=>o in u?T(u,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):u[o]=i,k=(u,o)=>{for(var i in o||(o={}))n.call(o,i)&&m(u,i,o[i]);if(g)for(var i of g(o))a.call(o,i)&&m(u,i,o[i]);return u};const M=u=>e.createElement("svg",k({viewBox:"64 64 896 896"},u),e.createElement("path",{d:"M854.6 370.6c-9.9-39.4 9.9-102.2 73.4-124.4l-67.9-3.6s-25.7-90-143.6-98c-117.8-8.1-194.9-3-195-3 .1 0 87.4 55.6 52.4 154.7-25.6 52.5-65.8 95.6-108.8 144.7-1.3 1.3-2.5 2.6-3.5 3.7C319.4 605 96 860 96 860c245.9 64.4 410.7-6.3 508.2-91.1 20.5-.2 35.9-.3 46.3-.3 135.8 0 250.6-117.6 245.9-248.4-3.2-89.9-31.9-110.2-41.8-149.6zm-204.1 334c-10.6 0-26.2.1-46.8.3l-23.6.2-17.8 15.5c-47.1 41-104.4 71.5-171.4 87.6-52.5 12.6-110 16.2-172.7 9.6 18-20.5 36.5-41.6 55.4-63.1 92-104.6 173.8-197.5 236.9-268.5l1.4-1.4 1.3-1.5c4.1-4.6 20.6-23.3 24.7-28.1 9.7-11.1 17.3-19.9 24.5-28.6 30.7-36.7 52.2-67.8 69-102.2l1.6-3.3 1.2-3.4c13.7-38.8 15.4-76.9 6.2-112.8 22.5.7 46.5 1.9 71.7 3.6 33.3 2.3 55.5 12.9 71.1 29.2 5.8 6 10.2 12.5 13.4 18.7 1 2 1.7 3.6 2.3 5l5 17.7c-15.7 34.5-19.9 73.3-11.4 107.2 3 11.8 6.9 22.4 12.3 34.4 2.1 4.7 9.5 20.1 11 23.3 10.3 22.7 15.4 43 16.7 78.7 3.3 94.6-82.7 181.9-182 181.9z"}));var J="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODU0LjYgMzcwLjZjLTkuOS0zOS40IDkuOS0xMDIuMiA3My40LTEyNC40bC02Ny45LTMuNnMtMjUuNy05MC0xNDMuNi05OGMtMTE3LjgtOC4xLTE5NC45LTMtMTk1LTMgLjEgMCA4Ny40IDU1LjYgNTIuNCAxNTQuNy0yNS42IDUyLjUtNjUuOCA5NS42LTEwOC44IDE0NC43LTEuMyAxLjMtMi41IDIuNi0zLjUgMy43QzMxOS40IDYwNSA5NiA4NjAgOTYgODYwYzI0NS45IDY0LjQgNDEwLjctNi4zIDUwOC4yLTkxLjEgMjAuNS0uMiAzNS45LS4zIDQ2LjMtLjMgMTM1LjggMCAyNTAuNi0xMTcuNiAyNDUuOS0yNDguNC0zLjItODkuOS0zMS45LTExMC4yLTQxLjgtMTQ5LjZ6bS0yMDQuMSAzMzRjLTEwLjYgMC0yNi4yLjEtNDYuOC4zbC0yMy42LjItMTcuOCAxNS41Yy00Ny4xIDQxLTEwNC40IDcxLjUtMTcxLjQgODcuNi01Mi41IDEyLjYtMTEwIDE2LjItMTcyLjcgOS42IDE4LTIwLjUgMzYuNS00MS42IDU1LjQtNjMuMSA5Mi0xMDQuNiAxNzMuOC0xOTcuNSAyMzYuOS0yNjguNWwxLjQtMS40IDEuMy0xLjVjNC4xLTQuNiAyMC42LTIzLjMgMjQuNy0yOC4xIDkuNy0xMS4xIDE3LjMtMTkuOSAyNC41LTI4LjYgMzAuNy0zNi43IDUyLjItNjcuOCA2OS0xMDIuMmwxLjYtMy4zIDEuMi0zLjRjMTMuNy0zOC44IDE1LjQtNzYuOSA2LjItMTEyLjggMjIuNS43IDQ2LjUgMS45IDcxLjcgMy42IDMzLjMgMi4zIDU1LjUgMTIuOSA3MS4xIDI5LjIgNS44IDYgMTAuMiAxMi41IDEzLjQgMTguNyAxIDIgMS43IDMuNiAyLjMgNWw1IDE3LjdjLTE1LjcgMzQuNS0xOS45IDczLjMtMTEuNCAxMDcuMiAzIDExLjggNi45IDIyLjQgMTIuMyAzNC40IDIuMSA0LjcgOS41IDIwLjEgMTEgMjMuMyAxMC4zIDIyLjcgMTUuNCA0MyAxNi43IDc4LjcgMy4zIDk0LjYtODIuNyAxODEuOS0xODIgMTgxLjl6Ii8+PC9zdmc+",et=Object.defineProperty,mt=Object.getOwnPropertySymbols,it=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,tt=(u,o,i)=>o in u?et(u,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):u[o]=i,St=(u,o)=>{for(var i in o||(o={}))it.call(o,i)&&tt(u,i,o[i]);if(mt)for(var i of mt(o))R.call(o,i)&&tt(u,i,o[i]);return u};const G=u=>e.createElement("svg",St({viewBox:"64 64 896 896"},u),e.createElement("path",{d:"M564.7 230.1V803h60l25.2 71.4L756.3 803h131.5V230.1H564.7zm247.7 497h-59.9l-75.1 50.4-17.8-50.4h-18V308.3h170.7v418.8zM526.1 486.9H393.3c2.1-44.9 4.3-104.3 6.6-172.9h130.9l-.1-8.1c0-.6-.2-14.7-2.3-29.1-2.1-15-6.6-34.9-21-34.9H287.8c4.4-20.6 15.7-69.7 29.4-93.8l6.4-11.2-12.9-.7c-.8 0-19.6-.9-41.4 10.6-35.7 19-51.7 56.4-58.7 84.4-18.4 73.1-44.6 123.9-55.7 145.6-3.3 6.4-5.3 10.2-6.2 12.8-1.8 4.9-.8 9.8 2.8 13 10.5 9.5 38.2-2.9 38.5-3 .6-.3 1.3-.6 2.2-1 13.9-6.3 55.1-25 69.8-84.5h56.7c.7 32.2 3.1 138.4 2.9 172.9h-141l-2.1 1.5c-23.1 16.9-30.5 63.2-30.8 65.2l-1.4 9.2h167c-12.3 78.3-26.5 113.4-34 127.4-3.7 7-7.3 14-10.7 20.8-21.3 42.2-43.4 85.8-126.3 153.6-3.6 2.8-7 8-4.8 13.7 2.4 6.3 9.3 9.1 24.6 9.1 5.4 0 11.8-.3 19.4-1 49.9-4.4 100.8-18 135.1-87.6 17-35.1 31.7-71.7 43.9-108.9L497 850l5-12c.8-1.9 19-46.3 5.1-95.9l-.5-1.8-108.1-123-22 16.6c6.4-26.1 10.6-49.9 12.5-71.1h158.7v-8c0-40.1-18.5-63.9-19.2-64.9l-2.4-3z"}));var ft="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNTY0LjcgMjMwLjFWODAzaDYwbDI1LjIgNzEuNEw3NTYuMyA4MDNoMTMxLjVWMjMwLjFINTY0Ljd6bTI0Ny43IDQ5N2gtNTkuOWwtNzUuMSA1MC40LTE3LjgtNTAuNGgtMThWMzA4LjNoMTcwLjd2NDE4Ljh6TTUyNi4xIDQ4Ni45SDM5My4zYzIuMS00NC45IDQuMy0xMDQuMyA2LjYtMTcyLjloMTMwLjlsLS4xLTguMWMwLS42LS4yLTE0LjctMi4zLTI5LjEtMi4xLTE1LTYuNi0zNC45LTIxLTM0LjlIMjg3LjhjNC40LTIwLjYgMTUuNy02OS43IDI5LjQtOTMuOGw2LjQtMTEuMi0xMi45LS43Yy0uOCAwLTE5LjYtLjktNDEuNCAxMC42LTM1LjcgMTktNTEuNyA1Ni40LTU4LjcgODQuNC0xOC40IDczLjEtNDQuNiAxMjMuOS01NS43IDE0NS42LTMuMyA2LjQtNS4zIDEwLjItNi4yIDEyLjgtMS44IDQuOS0uOCA5LjggMi44IDEzIDEwLjUgOS41IDM4LjItMi45IDM4LjUtMyAuNi0uMyAxLjMtLjYgMi4yLTEgMTMuOS02LjMgNTUuMS0yNSA2OS44LTg0LjVoNTYuN2MuNyAzMi4yIDMuMSAxMzguNCAyLjkgMTcyLjloLTE0MWwtMi4xIDEuNWMtMjMuMSAxNi45LTMwLjUgNjMuMi0zMC44IDY1LjJsLTEuNCA5LjJoMTY3Yy0xMi4zIDc4LjMtMjYuNSAxMTMuNC0zNCAxMjcuNC0zLjcgNy03LjMgMTQtMTAuNyAyMC44LTIxLjMgNDIuMi00My40IDg1LjgtMTI2LjMgMTUzLjYtMy42IDIuOC03IDgtNC44IDEzLjcgMi40IDYuMyA5LjMgOS4xIDI0LjYgOS4xIDUuNCAwIDExLjgtLjMgMTkuNC0xIDQ5LjktNC40IDEwMC44LTE4IDEzNS4xLTg3LjYgMTctMzUuMSAzMS43LTcxLjcgNDMuOS0xMDguOUw0OTcgODUwbDUtMTJjLjgtMS45IDE5LTQ2LjMgNS4xLTk1LjlsLS41LTEuOC0xMDguMS0xMjMtMjIgMTYuNmM2LjQtMjYuMSAxMC42LTQ5LjkgMTIuNS03MS4xaDE1OC43di04YzAtNDAuMS0xOC41LTYzLjktMTkuMi02NC45bC0yLjQtM3oiLz48L3N2Zz4=",F=t(30874),nt=t(26575),Tt=t.n(nt),wt=t(23187),It=t.n(wt),Nt=t(75553),Ht=t.n(Nt),Ot=t(41049),Wt=t.n(Ot),Vt=t(5026),Yt=t.n(Vt),Qt=t(83357),Zt=t.n(Qt),kt=t(12600),Ct={};Ct.styleTagTransform=Zt(),Ct.setAttributes=Wt(),Ct.insert=Ht().bind(null,"head"),Ct.domAPI=It(),Ct.insertStyleElement=Yt();var _t=Tt()(kt.Z,Ct),Dt=kt.Z&&kt.Z.locals?kt.Z.locals:void 0,c={github:v,weibo:Et,twitter:Q,gitlab:O,facebook:H,zhihu:G,yuque:M,linkedin:j},d=function(o){var i=o.icon,dt=o.link,xt=(0,F.Z)(),yt=(0,e.useMemo)(function(){return{Icon:c[i],link:dt}},[i,dt]);return e.createElement("a",{className:"dumi-default-icon","data-dumi-tooltip":xt.formatMessage({id:"header.social.".concat(i)}),"data-dumi-tooltip-bottom":!0,target:"_blank",href:yt.link,rel:"noreferrer"},e.createElement(yt.Icon,null))},h=d},79223:function(r,p,t){"use strict";t.d(p,{Z:function(){return Ut}});var e=t(861),s=t.n(e),f=t(27424),y=t.n(f),l=t(67294),L=t(56690),N=t.n(L),H=t(89728),Z=t.n(H),z=t(66115),V=t.n(z),X=t(61655),_=t.n(X),D=t(26389),I=t.n(D),v=t(38416),W=t.n(v),st=Z()(function T(){N()(this,T)}),B=function(T){_()(n,T);var g=I()(n);function n(a){var m;return N()(this,n),m=g.call(this),W()(V()(m),"el",void 0),m.el=a,m}return Z()(n,[{key:"top",get:function(){return this.el.getBoundingClientRect().top}},{key:"outerHeight",get:function(){return this.el.getBoundingClientRect().height}},{key:"scrollTop",get:function(){return this.el.scrollTop}},{key:"scrollHeight",get:function(){return this.el.scrollHeight}},{key:"isScrolledToBottom",value:function(){return this.scrollTop+this.outerHeight>=this.scrollHeight}},{key:"registerScrollEvent",value:function(m){this.el.addEventListener("scroll",m)}},{key:"unregisterScrollEvent",value:function(m){this.el.removeEventListener("scroll",m)}}],[{key:"create",value:function(m){var k=document.querySelector(m);if(!k)throw new Error("element is not found.");return new n(k)}}]),n}(st),U=function(T){_()(n,T);var g=I()(n);function n(){return N()(this,n),g.apply(this,arguments)}return Z()(n,[{key:"outerHeight",get:function(){return window.innerHeight}},{key:"scrollTop",get:function(){return document.documentElement.scrollTop}},{key:"scrollHeight",get:function(){return document.documentElement.scrollHeight}},{key:"isScrolledToBottom",value:function(){return this.scrollTop+this.outerHeight>=this.scrollHeight}},{key:"registerScrollEvent",value:function(m){document.addEventListener("scroll",m)}},{key:"unregisterScrollEvent",value:function(m){document.removeEventListener("scroll",m)}}],[{key:"create",value:function(){return new n}}]),n}(st),rt=function(){function T(){N()(this,T)}return Z()(T,null,[{key:"create",value:function(n){return n?B.create(n):U.create()}}]),T}(),$=function(g){var n=g.sectionRefs,a=g.rootSelector,m=g.offset,k=m===void 0?0:m,M=(0,l.useRef)(null);(0,l.useEffect)(function(){M.current=rt.create(a)},[a]);var J=(0,l.useCallback)(function(){return M.current?M.current.isScrolledToBottom():!1},[M]),et=(0,l.useCallback)(function(F){if(!M.current)return!1;var nt=M.current.scrollTop,Tt=nt+M.current.outerHeight,wt=F.getBoundingClientRect(),It=M.current instanceof B?nt+wt.top-M.current.top+k:nt+wt.top+k,Nt=It+wt.height;return[It<Tt,Nt>nt].every(function(Ht){return Ht})},[M,k]),mt=(0,l.useCallback)(function(){return n.map(function(F){return F.current?et(F.current):!1})},[et,n]),it=(0,l.useState)([]),R=y()(it,2),tt=R[0],St=R[1],G=(0,l.useMemo)(function(){return tt.findIndex(function(F){return F})},[tt]),ft=(0,l.useCallback)(function(){var F=J()?[].concat(s()(new Array(n.length-1).fill(!1).map(function(nt){return nt})),[!0]):mt();St(F)},[mt,J,n]);return(0,l.useEffect)(function(){return ft(),M.current&&M.current.registerScrollEvent(ft),function(){M.current&&M.current.unregisterScrollEvent(ft)}},[ft]),{elementsStatusInViewport:tt,currentElementIndexInViewport:G}},P=function(g){var n=g.children,a=g.sectionRefs,m=g.rootSelector,k=g.offset,M=$({sectionRefs:a,rootSelector:m,offset:k}),J=M.elementsStatusInViewport,et=M.currentElementIndexInViewport;return n({elementsStatusInViewport:J,currentElementIndexInViewport:et})},O=t(3922),K=t(26575),Y=t.n(K),C=t(23187),ot=t.n(C),at=t(75553),w=t.n(at),E=t(41049),j=t.n(E),b=t(5026),lt=t.n(b),ct=t(83357),ut=t.n(ct),A=t(46546),S={};S.styleTagTransform=ut(),S.setAttributes=j(),S.insert=w().bind(null,"head"),S.domAPI=ot(),S.insertStyleElement=lt();var x=Y()(A.Z,S),Q=A.Z&&A.Z.locals?A.Z.locals:void 0;function q(){return q=Object.assign?Object.assign.bind():function(T){for(var g=1;g<arguments.length;g++){var n=arguments[g];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(T[a]=n[a])}return T},q.apply(this,arguments)}function ht(T,g){return Lt(T)||At(T,g)||pt(T,g)||gt()}function gt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pt(T,g){if(T){if(typeof T=="string")return Mt(T,g);var n=Object.prototype.toString.call(T).slice(8,-1);if(n==="Object"&&T.constructor&&(n=T.constructor.name),n==="Map"||n==="Set")return Array.from(T);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mt(T,g)}}function Mt(T,g){(g==null||g>T.length)&&(g=T.length);for(var n=0,a=new Array(g);n<g;n++)a[n]=T[n];return a}function At(T,g){var n=T==null?null:typeof Symbol!="undefined"&&T[Symbol.iterator]||T["@@iterator"];if(n!=null){var a=[],m=!0,k=!1,M,J;try{for(n=n.call(T);!(m=(M=n.next()).done)&&(a.push(M.value),!(g&&a.length===g));m=!0);}catch(et){k=!0,J=et}finally{try{!m&&n.return!=null&&n.return()}finally{if(k)throw J}}return a}}function Lt(T){if(Array.isArray(T))return T}var Et=function(){var g=(0,O.TH)(),n=g.pathname,a=g.search,m=(0,O.eL)(),k=(0,O.zh)(),M=(0,O.WF)(),J=M.loading,et=(0,l.useRef)(0),mt=(0,l.useState)([]),it=ht(mt,2),R=it[0],tt=it[1],St=l.useMemo(function(){var G=m.toc;return k&&(G=k.toc),G.filter(function(ft){var F=ft.depth;return F>1&&F<4})},[m,k]);return(0,l.useEffect)(function(){if(!J){var G=St.map(function(ft){var F=ft.id;return{current:document.getElementById(F)}});tt(G)}},[n,a,J]),R.length?l.createElement(P,{sectionRefs:R},function(G){var ft=G.currentElementIndexInViewport;return ft>-1&&(et.current=ft),l.createElement("ul",{className:"dumi-default-toc"},St.filter(function(F){var nt=F.depth;return nt>1&&nt<4}).map(function(F,nt){var Tt="".concat(a,"#").concat(encodeURIComponent(F.id)),wt=ft>-1?ft:et.current;return l.createElement("li",{key:F.id,"data-depth":F.depth},l.createElement(O.rU,q({to:Tt,title:F.title},wt===nt?{className:"active"}:{}),F.title))}))}):null},Ut=Et},43341:function(r,p,t){"use strict";var e=t(8081),s=t.n(e),f=t(23645),y=t.n(f),l=y()(s());l.push([r.id,`[data-prefers-color="dark"] {
  color-scheme: dark;
}
body {
  margin: 0;
  padding: 0;
  background-color: #f7f9fb;
}
[data-prefers-color="dark"] body {
  background-color: #050709;
}
.dumi-default-doc-layout {
  font-family: sans-serif;
  background-color: #f7f9fb;
}
[data-prefers-color="dark"] .dumi-default-doc-layout {
  background-color: #050709;
}
@media only screen and (max-width: 767px) {
  .dumi-default-doc-layout::before {
    content: '';
    position: fixed;
    z-index: 11;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.1s;
  }
  .dumi-default-doc-layout:not([data-mobile-sidebar-active])::before {
    opacity: 0;
    visibility: hidden;
  }
}
.dumi-default-doc-layout-mobile-bar {
  position: sticky;
  z-index: 9;
  top: 52px;
  left: 0;
  right: 0;
  display: none;
  align-items: center;
  padding: 0 24px;
  height: 36px;
  border-top: 1px solid #e4e9ec;
  background-color: rgba(247, 249, 251, 0.9);
  backdrop-filter: blur(6px);
}
[data-prefers-color="dark"] .dumi-default-doc-layout-mobile-bar {
  border-top-color: #2a353c;
  background-color: #050709;
}
@media only screen and (max-width: 767px) {
  .dumi-default-doc-layout-mobile-bar {
    display: flex;
  }
}
.dumi-default-doc-layout-mobile-bar .dumi-default-sidebar-btn {
  padding: 0;
  color: #4f5866;
  border: 0;
  background-color: transparent;
}
[data-prefers-color="dark"] .dumi-default-doc-layout-mobile-bar .dumi-default-sidebar-btn {
  color: #8590a0;
}
.dumi-default-doc-layout-mobile-bar .dumi-default-sidebar-btn > svg {
  width: 16px;
  margin-right: 6px;
  fill: #4f5866;
  vertical-align: middle;
}
[data-prefers-color="dark"] .dumi-default-doc-layout-mobile-bar .dumi-default-sidebar-btn > svg {
  fill: #8590a0;
}
.dumi-default-doc-layout > main {
  display: flex;
  align-items: flex-start;
  margin: 0 auto;
  padding: 0 24px;
  max-width: 1392px;
  box-sizing: border-box;
}
.dumi-default-doc-layout > main > section {
  flex: 1 1;
  max-width: 100%;
}
.dumi-default-doc-layout > main > .dumi-default-doc-layout-toc-wrapper {
  position: sticky;
  top: 106px;
  width: 184px;
  margin-inline-start: 24px;
  max-height: 80vh;
  overflow: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
}
@media only screen and (max-width: 767px) {
  .dumi-default-doc-layout > main > .dumi-default-doc-layout-toc-wrapper {
    display: none;
  }
}
.dumi-default-doc-layout > main > .dumi-default-doc-layout-toc-wrapper > h4 {
  margin: 0 0 8px;
  color: #8a9099;
  font-size: 13px;
  line-height: 1;
}
[data-prefers-color="dark"] .dumi-default-doc-layout > main > .dumi-default-doc-layout-toc-wrapper > h4 {
  color: #616d7f;
}
`,""]),p.Z=l},3004:function(r,p,t){"use strict";var e=t(8081),s=t.n(e),f=t(23645),y=t.n(f),l=y()(s());l.push([r.id,`.dumi-default-color-switch {
  position: relative;
  font-size: 0;
  line-height: 0;
}
@media screen and (max-width: 1430px) {
  .dumi-default-color-switch::before {
    left: auto;
    right: auto;
    inset-inline-end: -15px;
    transform: none;
  }
  [class*='-switch'] + .dumi-default-color-switch::before {
    inset-inline-end: 0;
  }
}
[class*='-switch'] + .dumi-default-color-switch {
  margin-inline-start: 15px;
  margin-inline-end: -15px;
  padding-inline: 15px;
  border-inline-start: 1px solid #d0d5d8;
}
[data-prefers-color="dark"] [class*='-switch'] + .dumi-default-color-switch {
  border-inline-start-color: #1c2022;
}
.dumi-default-color-switch svg {
  width: 16px;
  fill: #4f5866;
}
[data-prefers-color="dark"] .dumi-default-color-switch svg {
  fill: #8590a0;
}
.dumi-default-color-switch:hover svg {
  fill: #1677ff;
}
[data-prefers-color="dark"] .dumi-default-color-switch:hover svg {
  fill: #0053c8;
}
.dumi-default-color-switch select {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  max-width: 100%;
  max-height: 16px;
  cursor: pointer;
}
`,""]),p.Z=l},91151:function(r,p,t){"use strict";var e=t(8081),s=t.n(e),f=t(23645),y=t.n(f),l=y()(s());l.push([r.id,`.markdown {
  color: #30363f;
}
[data-prefers-color="dark"] .markdown {
  color: #c6c9cd;
}
.markdown a {
  color: #1677ff;
}
[data-prefers-color="dark"] .markdown a {
  color: #0053c8;
}
.markdown img {
  max-width: 100%;
}
[data-prefers-color="dark"] .markdown img {
  opacity: 0.8;
}
.markdown *:not(pre) code {
  padding: 2px 5px;
  color: #d56161;
  background: #f0f4f8;
  border-radius: 2px;
}
[data-prefers-color="dark"] .markdown *:not(pre) code {
  background: #0d141a;
}
.markdown pre {
  font-size: 14px;
  padding-left: 24px;
  padding-right: 24px;
  background-color: #fbfcfd;
}
[data-prefers-color="dark"] .markdown pre {
  background-color: #020305;
}
.markdown table {
  width: 100%;
  table-layout: auto;
}
.markdown th {
  background-color: #fbfcfd;
}
[data-prefers-color="dark"] .markdown th {
  background-color: #020305;
}
.markdown th,
.markdown td {
  padding-block-start: 10px;
  padding-block-end: 10px;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
  border-color: #e4e9ec;
}
[data-prefers-color="dark"] .markdown th,
[data-prefers-color="dark"] .markdown td {
  border-color: #2a353c;
}
.markdown blockquote {
  font-style: italic;
  margin-inline-start: 0;
  margin-inline-end: 0;
  background-color: #fbfcfd;
  border-left: 5px solid #e4e9ec;
}
[data-prefers-color="dark"] .markdown blockquote {
  background-color: #020305;
  border-left-color: #2a353c;
}
.markdown ul li {
  line-height: 1.8;
}
.markdown h1 > a[aria-hidden]:first-child,
.markdown h2 > a[aria-hidden]:first-child,
.markdown h3 > a[aria-hidden]:first-child,
.markdown h4 > a[aria-hidden]:first-child,
.markdown h5 > a[aria-hidden]:first-child,
.markdown h6 > a[aria-hidden]:first-child {
  float: left;
  width: 20px;
  padding-inline-end: 4px;
  margin-inline-start: -24px;
  color: #30363f;
  font-size: 0;
  text-align: right;
  line-height: inherit;
}
[data-prefers-color="dark"] .markdown h1 > a[aria-hidden]:first-child,
[data-prefers-color="dark"] .markdown h2 > a[aria-hidden]:first-child,
[data-prefers-color="dark"] .markdown h3 > a[aria-hidden]:first-child,
[data-prefers-color="dark"] .markdown h4 > a[aria-hidden]:first-child,
[data-prefers-color="dark"] .markdown h5 > a[aria-hidden]:first-child,
[data-prefers-color="dark"] .markdown h6 > a[aria-hidden]:first-child {
  color: #c6c9cd;
}
[data-direction='rtl'] .markdown h1 > a[aria-hidden]:first-child,
[data-direction='rtl'] .markdown h2 > a[aria-hidden]:first-child,
[data-direction='rtl'] .markdown h3 > a[aria-hidden]:first-child,
[data-direction='rtl'] .markdown h4 > a[aria-hidden]:first-child,
[data-direction='rtl'] .markdown h5 > a[aria-hidden]:first-child,
[data-direction='rtl'] .markdown h6 > a[aria-hidden]:first-child {
  float: right;
}
.markdown h1 > a[aria-hidden]:first-child:hover,
.markdown h2 > a[aria-hidden]:first-child:hover,
.markdown h3 > a[aria-hidden]:first-child:hover,
.markdown h4 > a[aria-hidden]:first-child:hover,
.markdown h5 > a[aria-hidden]:first-child:hover,
.markdown h6 > a[aria-hidden]:first-child:hover {
  border: 0;
}
.markdown h1 > a[aria-hidden]:first-child > .icon-link::before,
.markdown h2 > a[aria-hidden]:first-child > .icon-link::before,
.markdown h3 > a[aria-hidden]:first-child > .icon-link::before,
.markdown h4 > a[aria-hidden]:first-child > .icon-link::before,
.markdown h5 > a[aria-hidden]:first-child > .icon-link::before,
.markdown h6 > a[aria-hidden]:first-child > .icon-link::before {
  content: '#';
  color: #4f5866;
  font-size: 20px;
}
[data-prefers-color="dark"] .markdown h1 > a[aria-hidden]:first-child > .icon-link::before,
[data-prefers-color="dark"] .markdown h2 > a[aria-hidden]:first-child > .icon-link::before,
[data-prefers-color="dark"] .markdown h3 > a[aria-hidden]:first-child > .icon-link::before,
[data-prefers-color="dark"] .markdown h4 > a[aria-hidden]:first-child > .icon-link::before,
[data-prefers-color="dark"] .markdown h5 > a[aria-hidden]:first-child > .icon-link::before,
[data-prefers-color="dark"] .markdown h6 > a[aria-hidden]:first-child > .icon-link::before {
  color: #8590a0;
}
.markdown h1:not(:hover) > a[aria-hidden]:first-child > .icon-link,
.markdown h2:not(:hover) > a[aria-hidden]:first-child > .icon-link,
.markdown h3:not(:hover) > a[aria-hidden]:first-child > .icon-link,
.markdown h4:not(:hover) > a[aria-hidden]:first-child > .icon-link,
.markdown h5:not(:hover) > a[aria-hidden]:first-child > .icon-link,
.markdown h6:not(:hover) > a[aria-hidden]:first-child > .icon-link {
  visibility: hidden;
}
.dumi-default-content {
  flex: 1 1;
  min-width: 0;
  max-width: 100%;
  box-sizing: border-box;
}
.dumi-default-content:not([data-no-sidebar]) {
  padding: 48px 48px 0;
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.05);
}
[data-prefers-color="dark"] .dumi-default-content:not([data-no-sidebar]) {
  background-color: #0a0e13;
}
.dumi-default-content:not([data-no-sidebar])[data-no-footer] {
  padding-bottom: 48px;
}
@media only screen and (max-width: 767px) {
  .dumi-default-content:not([data-no-sidebar]) {
    max-width: initial;
    margin: 0 -24px;
    padding: 24px 24px 0;
    border-radius: 0;
    box-shadow: none;
  }
  .dumi-default-content:not([data-no-sidebar])[data-no-footer] {
    padding: 24px;
  }
}
.dumi-default-header + main > .dumi-default-content,
.dumi-default-doc-layout-mobile-bar + main > .dumi-default-content {
  min-height: calc(100vh - 76px);
}
@media only screen and (max-width: 767px) {
  .dumi-default-header + main > .dumi-default-content,
  .dumi-default-doc-layout-mobile-bar + main > .dumi-default-content {
    min-height: calc(100vh - 52px);
  }
}
.dumi-default-content[data-no-sidebar][data-no-footer] {
  margin-bottom: 48px;
}
@media only screen and (max-width: 767px) {
  .dumi-default-content[data-no-sidebar][data-no-footer] {
    margin-bottom: 24px;
  }
}
`,""]),p.Z=l},96830:function(r,p,t){"use strict";var e=t(8081),s=t.n(e),f=t(23645),y=t.n(f),l=y()(s());l.push([r.id,`.dumi-default-features {
  margin: 0 auto 48px;
  max-width: 1392px;
  padding: 0 24px;
  overflow: hidden;
  box-sizing: border-box;
}
.dumi-default-features[data-cols='2'] > .dumi-default-features-item {
  width: 46%;
}
.dumi-default-features[data-cols='2'] > .dumi-default-features-item:nth-child(odd) {
  margin-inline-end: 8%;
}
@media only screen and (max-width: 767px) {
  .dumi-default-features[data-cols='2'] > .dumi-default-features-item {
    width: 100%;
    margin-inline-end: 0;
  }
}
.dumi-default-features[data-cols='3'] > .dumi-default-features-item {
  width: 31.4%;
}
.dumi-default-features[data-cols='3'] > .dumi-default-features-item:not(:nth-child(3n)) {
  margin-inline-end: 2.9%;
}
@media only screen and (max-width: 767px) {
  .dumi-default-features[data-cols='3'] > .dumi-default-features-item {
    width: 100%;
    margin-inline-end: 0;
  }
}
.dumi-default-features-item {
  margin: 12px 0;
  float: left;
}
.dumi-default-features-item > i {
  font-size: 64px;
  font-style: normal;
}
@media only screen and (max-width: 767px) {
  .dumi-default-features-item > i {
    font-size: 48px;
  }
}
.dumi-default-features-item > h3 {
  margin: 4px 0;
  color: #30363f;
  font-weight: normal;
  font-size: 20px;
}
[data-prefers-color="dark"] .dumi-default-features-item > h3 {
  color: #c6c9cd;
}
.dumi-default-features-item > h3 a {
  color: #1677ff;
}
[data-prefers-color="dark"] .dumi-default-features-item > h3 a {
  color: #0053c8;
}
.dumi-default-features-item > h3 a:not(:hover) {
  text-decoration: none;
}
@media only screen and (max-width: 767px) {
  .dumi-default-features-item > h3 {
    font-size: 18px;
  }
}
.dumi-default-features-item > p {
  margin: 12px 0;
  color: #4f5866;
  font-size: 16px;
  line-height: 1.475;
}
[data-prefers-color="dark"] .dumi-default-features-item > p {
  color: #8590a0;
}
@media only screen and (max-width: 767px) {
  .dumi-default-features-item > p {
    font-size: 14px;
  }
}
.dumi-default-features-item > p a {
  color: #1677ff;
}
[data-prefers-color="dark"] .dumi-default-features-item > p a {
  color: #0053c8;
}
.dumi-default-features-item > p a:not(:hover) {
  text-decoration: none;
}
`,""]),p.Z=l},98605:function(r,p,t){"use strict";var e=t(8081),s=t.n(e),f=t(23645),y=t.n(f),l=y()(s());l.push([r.id,`.dumi-default-footer {
  margin-top: 48px;
  border-top: 1px solid #e4e9ec;
  color: #8a9099;
  font-size: 15px;
  line-height: 26px;
  text-align: center;
  padding: 28.8px 0;
}
[data-prefers-color="dark"] .dumi-default-footer {
  border-top-color: #2a353c;
  color: #616d7f;
}
@media only screen and (max-width: 767px) {
  .dumi-default-footer {
    padding: 14.4px 0;
    font-size: 13px;
  }
}
.dumi-default-footer a {
  color: #1677ff;
}
[data-prefers-color="dark"] .dumi-default-footer a {
  color: #0053c8;
}
.dumi-default-footer a:not(:hover) {
  text-decoration: none;
}
`,""]),p.Z=l},72843:function(r,p,t){"use strict";var e=t(8081),s=t.n(e),f=t(23645),y=t.n(f),l=y()(s());l.push([r.id,`.dumi-default-header {
  position: relative;
  z-index: 10;
}
.dumi-default-header:not([data-static]) {
  top: 0;
  position: sticky;
  background-color: rgba(247, 249, 251, 0.9);
  backdrop-filter: blur(6px);
}
[data-prefers-color="dark"] .dumi-default-header:not([data-static]) {
  background-color: rgba(5, 7, 9, 0.9);
}
.dumi-default-header:not([data-static])[data-mobile-active] {
  background-color: #f7f9fb;
  backdrop-filter: none;
}
[data-prefers-color="dark"] .dumi-default-header:not([data-static])[data-mobile-active] {
  background-color: #050709;
}
.dumi-default-header-content {
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0 24px;
  max-width: 1392px;
  height: 76px;
  box-sizing: border-box;
}
@media only screen and (max-width: 767px) {
  .dumi-default-header-content {
    height: 52px;
  }
}
.dumi-default-header-left {
  width: 184px;
}
.dumi-default-header-right {
  flex: 1 1;
  display: flex;
  justify-content: space-between;
}
.dumi-default-header-right-aside {
  display: flex;
  align-items: center;
}
@media only screen and (max-width: 767px) {
  .dumi-default-header-right-aside {
    margin: 8px 16px;
    padding-top: 24px;
    justify-content: center;
    border-top: 1px solid #e4e9ec;
  }
  [data-prefers-color="dark"] .dumi-default-header-right-aside {
    border-top-color: #2a353c;
  }
}
@media only screen and (max-width: 767px) {
  .dumi-default-header-right {
    position: fixed;
    top: 52px;
    left: 0;
    right: 0;
    height: calc(100vh - 52px);
    display: block;
    background-color: rgba(247, 249, 251, 0.6);
    border-top: 1px solid #e4e9ec;
    backdrop-filter: blur(30px);
    box-sizing: border-box;
    transition: all 0.2s;
  }
  [data-prefers-color="dark"] .dumi-default-header-right {
    background-color: rgba(5, 7, 9, 0.6);
    border-top: 1px solid #2a353c;
  }
  .dumi-default-header:not([data-mobile-active]) .dumi-default-header-right {
    opacity: 0;
    visibility: hidden;
    padding-top: 20px;
  }
}
.dumi-default-header-menu-btn {
  position: absolute;
  top: 50%;
  inset-inline-end: 24px;
  padding: 0;
  border: 0;
  background: transparent;
  transform: translateY(-50%);
  display: none;
}
@media only screen and (max-width: 767px) {
  .dumi-default-header-menu-btn {
    display: block;
  }
}
.dumi-default-header-menu-btn > svg {
  width: 20px;
  fill: #4f5866;
}
[data-prefers-color="dark"] .dumi-default-header-menu-btn > svg {
  fill: #8590a0;
}
`,""]),p.Z=l},70431:function(r,p,t){"use strict";var e=t(8081),s=t.n(e),f=t(23645),y=t.n(f),l=y()(s());l.push([r.id,`.dumi-default-hero {
  position: relative;
  margin: -96px auto -160px auto;
  max-width: 1392px;
  height: 932px;
  padding-top: 220px;
  text-align: center;
  box-sizing: border-box;
}
@media only screen and (max-width: 767px) {
  .dumi-default-hero {
    margin-top: -72px;
    padding-top: 160px;
    height: 660px;
  }
}
.dumi-default-hero + * {
  position: relative;
}
.dumi-default-hero::before {
  content: '';
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.8;
  pointer-events: none;
  background: no-repeat center / cover;
  background-image: url('https://gw.alipayobjects.com/zos/bmw-prod/a6c3488a-994c-4dd3-8e92-2324d9a1ca48/l9dmd9wl_w2858_h1864.png');
}
[data-prefers-color="dark"] .dumi-default-hero::before {
  opacity: 1;
}
.dumi-default-hero > p {
  margin: 32px;
  color: #4f5866;
  font-size: 20px;
  line-height: 1.6;
}
[data-prefers-color="dark"] .dumi-default-hero > p {
  color: #8590a0;
}
@media only screen and (max-width: 767px) {
  .dumi-default-hero > p {
    font-size: 16px;
  }
}
.dumi-default-hero-actions {
  margin-top: 48px;
  display: flex;
  justify-content: center;
}
.dumi-default-hero-actions > a {
  display: inline-block;
  height: 52px;
  font-size: 18px;
  line-height: 52px;
  text-decoration: none;
  min-width: 168px;
  border-radius: 26px;
  box-sizing: border-box;
  transition: opacity 0.2s;
}
@media only screen and (max-width: 767px) {
  .dumi-default-hero-actions > a {
    font-size: 16px;
    height: 42px;
    line-height: 40px;
    min-width: 128px;
  }
}
.dumi-default-hero-actions > a:hover {
  opacity: 0.8;
}
.dumi-default-hero-actions > a:not(:first-child) {
  margin-inline-start: 48px;
  color: #1677ff;
  border: 1px solid #1677ff;
}
[data-prefers-color="dark"] .dumi-default-hero-actions > a:not(:first-child) {
  color: #0053c8;
  border-color: #0053c8;
}
.dumi-default-hero-actions > a:first-child {
  color: #fff;
  background-color: #1677ff;
}
[data-prefers-color="dark"] .dumi-default-hero-actions > a:first-child {
  background-color: #0053c8;
}
`,""]),p.Z=l},46028:function(r,p,t){"use strict";var e=t(8081),s=t.n(e),f=t(23645),y=t.n(f),l=t(61667),L=t.n(l),N=new URL(t(68774),t.b),H=y()(s()),Z=L()(N);H.push([r.id,`@font-face {
  font-family: Alibaba-PuHuiTi;
  src: url(`+Z+`);
}
.dumi-default-hero-title {
  margin: 0 0 32px;
  display: inline-block;
  font-family: Alibaba-PuHuiTi, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #83cdf8;
  font-size: 180px;
  line-height: 1;
}
.dumi-default-hero-title > span {
  color: transparent;
  text-shadow: 0 10px 20px rgba(22, 119, 255, 0.15);
  background: linear-gradient(30deg, #90d5ff 30%, #65a5ff);
  -webkit-background-clip: text;
          background-clip: text;
}
@media only screen and (max-width: 767px) {
  .dumi-default-hero-title {
    font-size: 60px;
  }
}
[data-prefers-color="dark"] .dumi-default-hero-title {
  opacity: 0.7;
}
`,""]),p.Z=H},10934:function(r,p,t){"use strict";var e=t(8081),s=t.n(e),f=t(23645),y=t.n(f),l=y()(s());l.push([r.id,`.dumi-default-lang-switch {
  color: #4f5866;
  font-size: 14px;
  line-height: 16px;
  text-decoration: none;
  transition: all 0.3s;
  cursor: pointer;
}
[data-prefers-color="dark"] .dumi-default-lang-switch {
  color: #8590a0;
}
.dumi-default-lang-switch:hover {
  color: #1677ff;
}
[data-prefers-color="dark"] .dumi-default-lang-switch:hover {
  color: #0053c8;
}
.dumi-default-lang-select {
  display: inline-flex;
  align-items: center;
}
.dumi-default-lang-select > select {
  -webkit-appearance: none;
          appearance: none;
  padding: 6px 0;
  padding-inline-start: 10px;
  padding-inline-end: 18px;
  color: #4f5866;
  text-align: right;
  font-size: 14px;
  line-height: 1;
  border: 0;
  background-color: transparent;
}
[data-prefers-color="dark"] .dumi-default-lang-select > select {
  color: #8590a0;
}
.dumi-default-lang-select > svg {
  margin-inline-start: -16px;
  width: 12px;
  fill: #b4bcc1;
  pointer-events: none;
}
[data-prefers-color="dark"] .dumi-default-lang-select > svg {
  fill: #333a3e;
}
`,""]),p.Z=l},40898:function(r,p,t){"use strict";var e=t(8081),s=t.n(e),f=t(23645),y=t.n(f),l=y()(s());l.push([r.id,`.dumi-default-logo {
  display: inline-flex;
  align-items: center;
  color: #30363f;
  font-size: 22px;
  line-height: 1;
  font-weight: bold;
  text-decoration: none;
}
[data-prefers-color="dark"] .dumi-default-logo {
  color: #c6c9cd;
}
@media only screen and (max-width: 767px) {
  .dumi-default-logo {
    font-size: 18px;
  }
  .dumi-default-logo img {
    height: 32px;
  }
}
.dumi-default-logo img {
  margin-inline-end: 10px;
  height: 40px;
}
@media only screen and (max-width: 767px) {
  .dumi-default-logo img {
    height: 32px;
  }
}
`,""]),p.Z=l},71320:function(r,p,t){"use strict";var e=t(8081),s=t.n(e),f=t(23645),y=t.n(f),l=y()(s());l.push([r.id,`.dumi-default-navbar {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
}
@media only screen and (max-width: 767px) {
  .dumi-default-navbar {
    display: block;
    padding-top: 24px;
  }
}
.dumi-default-navbar > li {
  font-size: 18px;
  line-height: 1;
  text-align: center;
}
@media only screen and (max-width: 767px) {
  .dumi-default-navbar > li {
    padding: 12px 0;
  }
}
.dumi-default-navbar > li > a {
  color: #4f5866;
  text-decoration: none;
  transition: all 0.3s;
}
[data-prefers-color="dark"] .dumi-default-navbar > li > a {
  color: #8590a0;
}
.dumi-default-navbar > li > a:hover {
  color: #1677ff;
}
[data-prefers-color="dark"] .dumi-default-navbar > li > a:hover {
  color: #0053c8;
}
.dumi-default-navbar > li > a.active {
  color: #30363f;
  font-weight: bold;
}
[data-prefers-color="dark"] .dumi-default-navbar > li > a.active {
  color: #c6c9cd;
}
.dumi-default-navbar > li:not(:last-child) {
  margin-inline-end: 48px;
}
@media only screen and (max-width: 767px) {
  .dumi-default-navbar > li:not(:last-child) {
    margin-inline-end: 0;
  }
}
`,""]),p.Z=l},53037:function(r,p,t){"use strict";var e=t(8081),s=t.n(e),f=t(23645),y=t.n(f),l=y()(s());l.push([r.id,`.dumi-default-lang-switch {
  color: #4f5866;
  font-size: 14px;
  line-height: 16px;
  text-decoration: none;
  transition: all 0.3s;
  cursor: pointer;
}
[data-prefers-color="dark"] .dumi-default-lang-switch {
  color: #8590a0;
}
.dumi-default-lang-switch:hover {
  color: #1677ff;
}
[data-prefers-color="dark"] .dumi-default-lang-switch:hover {
  color: #0053c8;
}
.dumi-default-lang-select {
  display: inline-flex;
  align-items: center;
}
.dumi-default-lang-select > select {
  -webkit-appearance: none;
          appearance: none;
  padding: 6px 0;
  padding-inline-start: 10px;
  padding-inline-end: 18px;
  color: #4f5866;
  text-align: right;
  font-size: 14px;
  line-height: 1;
  border: 0;
  background-color: transparent;
}
[data-prefers-color="dark"] .dumi-default-lang-select > select {
  color: #8590a0;
}
.dumi-default-lang-select > svg {
  margin-inline-start: -16px;
  width: 12px;
  fill: #b4bcc1;
  pointer-events: none;
}
[data-prefers-color="dark"] .dumi-default-lang-select > svg {
  fill: #333a3e;
}
.dumi-default-rtl-switch {
  height: 16px;
  -webkit-appearance: none;
          appearance: none;
  border: 0;
  background-color: transparent;
  cursor: pointer;
}
[class*='-switch'] + .dumi-default-rtl-switch {
  margin-inline-start: 15px;
  margin-inline-end: -15px;
  padding-inline: 15px;
  border-inline-start: 1px solid #e4e9ec;
}
.dumi-default-rtl-switch > svg {
  height: 16px;
  fill: #4f5866;
}
[data-prefers-color="dark"] .dumi-default-rtl-switch > svg {
  fill: #8590a0;
}
.dumi-default-rtl-switch:hover svg {
  fill: #1677ff;
}
[data-prefers-color="dark"] .dumi-default-rtl-switch:hover svg {
  fill: #0053c8;
}
html[data-direction='rtl'] {
  direction: rtl;
}
`,""]),p.Z=l},51578:function(r,p,t){"use strict";var e=t(8081),s=t.n(e),f=t(23645),y=t.n(f),l=y()(s());l.push([r.id,`.dumi-default-search-bar {
  position: relative;
}
@media only screen and (max-width: 767px) {
  .dumi-default-search-bar {
    display: none;
  }
}
.dumi-default-search-bar:not(:last-child) {
  margin-inline-end: 28px;
}
.dumi-default-search-bar-svg {
  position: absolute;
  top: 50%;
  margin-top: 1px;
  inset-inline-start: 16px;
  width: 16px;
  fill: #8a9099;
  transform: translateY(-50%);
}
[data-prefers-color="dark"] .dumi-default-search-bar-svg {
  fill: #616d7f;
}
.dumi-default-search-bar-input {
  width: 280px;
  height: 40px;
  padding: 0;
  padding-inline-start: 40px;
  padding-inline-end: 12px;
  color: #30363f;
  font-size: 14px;
  border: 1px solid #d0d5d8;
  border-radius: 20px;
  box-sizing: border-box;
  outline: none;
  transition: all 0.3s;
  background-color: transparent;
}
[data-prefers-color="dark"] .dumi-default-search-bar-input {
  color: #c6c9cd;
  border-color: #1c2022;
}
.dumi-default-search-bar-input:focus {
  border-color: rgba(22, 119, 255, 0.5);
  background-color: #fff;
  box-shadow: 0 0 0 3px rgba(22, 119, 255, 0.1);
}
[data-prefers-color="dark"] .dumi-default-search-bar-input:focus {
  border-color: rgba(0, 83, 200, 0.5);
  background-color: #050709;
  box-shadow: 0 0 0 3px rgba(0, 83, 200, 0.1);
}
.dumi-default-search-bar-input:focus ~ .dumi-default-search-shortcut {
  opacity: 0;
}
.dumi-default-search-bar .dumi-default-search-shortcut {
  position: absolute;
  top: 50%;
  inset-inline-end: 11px;
  display: inline-block;
  padding: 4px 8px;
  color: #8a9099;
  font-size: 12px;
  line-height: 1;
  white-space: nowrap;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 11px;
  border: 1px solid #d0d5d8;
  transform: translateY(-50%);
  transition: all 0.3s;
  pointer-events: none;
}
[data-prefers-color="dark"] .dumi-default-search-bar .dumi-default-search-shortcut {
  background-color: rgba(0, 0, 0, 0.2);
  border-color: #1c2022;
}
@media only screen and (max-width: 767px) {
  .dumi-default-search-bar .dumi-default-search-shortcut {
    display: none;
  }
}
.dumi-default-search-bar .dumi-default-search-popover {
  position: absolute;
  top: 100%;
  inset-inline-end: 0;
  display: flex;
  flex-direction: column;
  width: 540px;
  max-height: 460px;
  margin-top: 18px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
}
[data-prefers-color="dark"] .dumi-default-search-bar .dumi-default-search-popover {
  background-color: #0f161d;
}
.dumi-default-search-bar .dumi-default-search-popover::before {
  content: '';
  position: absolute;
  bottom: 100%;
  inset-inline-end: 100px;
  display: inline-block;
  width: 0;
  height: 0;
  border: 8px solid transparent;
  border-bottom-color: #fff;
}
[data-prefers-color="dark"] .dumi-default-search-bar .dumi-default-search-popover::before {
  border-bottom-color: #0f161d;
}
.dumi-default-search-bar .dumi-default-search-popover > section {
  flex: 1 1;
  min-height: 60px;
  overflow: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  border-radius: inherit;
}
.dumi-default-search-bar .dumi-default-search-modal {
  position: fixed;
  top: 0;
  inset-inline-start: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
}
.dumi-default-search-bar .dumi-default-search-modal-mask {
  background-color: rgba(0, 0, 0, 0.45);
  width: 100%;
  height: 100%;
}
.dumi-default-search-bar .dumi-default-search-modal-content {
  position: absolute;
  top: 60px;
  background-color: #fff;
  width: 500px;
  padding: 12px;
  box-sizing: border-box;
  box-shadow: inset 1px 1px 0 0 hsla(0, 0%, 100%, 0.5), 0 3px 8px 0 #555a64;
  border-radius: 8px;
  max-height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
}
[data-prefers-color="dark"] .dumi-default-search-bar .dumi-default-search-modal-content {
  background-color: #0f161d;
}
.dumi-default-search-bar .dumi-default-search-modal .dumi-default-search-bar-input {
  width: 100%;
  border-radius: 4px;
}
.dumi-default-search-bar .dumi-default-search-modal .dumi-default-search-result {
  min-height: 60px;
  margin-top: 12px;
  flex: auto;
  overflow: auto;
}
.dumi-default-search-bar .dumi-default-search-modal .dumi-default-search-result > dl > dd {
  margin: 0 auto;
}
.dumi-default-search-bar .dumi-default-search-modal-commands {
  justify-content: flex-start;
  font-size: 12px;
  color: #8a9099;
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 1px solid #e4e9ec;
  padding-top: 12px;
  display: flex;
  align-items: center;
  user-select: none;
}
[data-prefers-color="dark"] .dumi-default-search-bar .dumi-default-search-modal-commands {
  color: #616d7f;
  border-top-color: #2a353c;
}
.dumi-default-search-bar .dumi-default-search-modal-commands > li {
  margin-inline-end: 10px;
}
.dumi-default-search-bar .dumi-default-search-modal-commands-arrow .dumi-default-search-modal-shortcut {
  margin-inline-end: 4px;
}
.dumi-default-search-bar .dumi-default-search-modal-commands-text {
  margin-inline-start: 5px;
}
.dumi-default-search-bar .dumi-default-search-modal-shortcut {
  display: inline-block;
  padding: 4px 8px;
  color: #8a9099;
  font-size: 12px;
  line-height: 1;
  white-space: nowrap;
  background-color: #f7f9fb;
  border-radius: 3px;
  border: 1px solid #d0d5d8;
  border-bottom-width: 2px;
  transition: all 0.3s;
  pointer-events: none;
}
[data-prefers-color="dark"] .dumi-default-search-bar .dumi-default-search-modal-shortcut {
  color: #616d7f;
  background-color: #050709;
  border-color: #1c2022;
}
`,""]),p.Z=l},78074:function(r,p,t){"use strict";var e=t(8081),s=t.n(e),f=t(23645),y=t.n(f),l=y()(s());l.push([r.id,`.dumi-default-search-result > dl {
  margin: 2px 0;
}
.dumi-default-search-result > dl > dt {
  height: 30px;
  padding: 0 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 30px;
  color: #4f5866;
  background-color: #e4e9ec;
}
[data-prefers-color="dark"] .dumi-default-search-result > dl > dt {
  color: #8590a0;
  background-color: #2a353c;
}
.dumi-default-search-result > dl > dt:first-child {
  margin-top: -2px;
}
.dumi-default-search-result > dl > dt + dd {
  margin-top: 2px;
}
.dumi-default-search-result > dl > dd {
  margin: 0 4px;
  padding: 2px 0;
}
.dumi-default-search-result > dl > dd + dd {
  border-top: 1px dashed #e4e9ec;
}
[data-prefers-color="dark"] .dumi-default-search-result > dl > dd + dd {
  border-top-color: #2a353c;
}
.dumi-default-search-result > dl > dd + dt {
  margin-top: 2px;
}
.dumi-default-search-result > dl > dd > a {
  position: relative;
  display: flex;
  height: 60px;
  flex-direction: column;
  justify-content: center;
  padding-top: 6px;
  padding-bottom: 8px;
  padding-inline-start: 54px;
  padding-inline-end: 12px;
  text-decoration: none;
  box-sizing: border-box;
  border-radius: 4px;
}
.dumi-default-search-result > dl > dd > a[data-active],
.dumi-default-search-result > dl > dd > a:hover {
  background-color: #1677ff;
}
[data-prefers-color="dark"] .dumi-default-search-result > dl > dd > a[data-active],
[data-prefers-color="dark"] .dumi-default-search-result > dl > dd > a:hover {
  background-color: #00183a;
}
.dumi-default-search-result > dl > dd > a[data-active] > h4,
.dumi-default-search-result > dl > dd > a:hover > h4,
.dumi-default-search-result > dl > dd > a[data-active] > p,
.dumi-default-search-result > dl > dd > a:hover > p {
  color: #fff;
}
[data-prefers-color="dark"] .dumi-default-search-result > dl > dd > a[data-active] > h4,
[data-prefers-color="dark"] .dumi-default-search-result > dl > dd > a:hover > h4,
[data-prefers-color="dark"] .dumi-default-search-result > dl > dd > a[data-active] > p,
[data-prefers-color="dark"] .dumi-default-search-result > dl > dd > a:hover > p {
  color: #cccccc;
}
.dumi-default-search-result > dl > dd > a[data-active] > svg,
.dumi-default-search-result > dl > dd > a:hover > svg {
  fill: #fff;
}
[data-prefers-color="dark"] .dumi-default-search-result > dl > dd > a[data-active] > svg,
[data-prefers-color="dark"] .dumi-default-search-result > dl > dd > a:hover > svg {
  fill: #cccccc;
}
.dumi-default-search-result > dl > dd > a > svg {
  position: absolute;
  top: 14px;
  inset-inline-start: 14px;
  width: 32px;
  height: 32px;
  fill: #c2c9cc;
}
[data-prefers-color="dark"] .dumi-default-search-result > dl > dd > a > svg {
  fill: #282d30;
}
.dumi-default-search-result > dl > dd > a > h4,
.dumi-default-search-result > dl > dd > a > p {
  margin: 0;
  line-height: 1.4;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dumi-default-search-result > dl > dd > a > h4 {
  color: #4f5866;
  font-size: 14px;
}
[data-prefers-color="dark"] .dumi-default-search-result > dl > dd > a > h4 {
  color: #8590a0;
}
.dumi-default-search-result > dl > dd > a > p {
  margin-top: 2px;
  font-size: 13px;
  color: #8a9099;
}
[data-prefers-color="dark"] .dumi-default-search-result > dl > dd > a > p {
  color: #616d7f;
}
.dumi-default-search-result > dl > dd > a > p:empty {
  display: none;
}
.dumi-default-search-result mark {
  color: #484607;
  padding: 0 2px;
  border-radius: 2px;
  background-color: #fff9c5;
}
[data-prefers-color="dark"] .dumi-default-search-result mark {
  color: #939147;
  background-color: #382506;
}
.dumi-default-search-result .dumi-default-search-empty {
  display: flex;
  height: 140px;
  align-items: center;
  justify-content: center;
  color: #8a9099;
  font-size: 16px;
}
[data-prefers-color="dark"] .dumi-default-search-result .dumi-default-search-empty {
  color: #616d7f;
}
.dumi-default-search-result .dumi-default-search-empty > svg {
  margin-inline-end: 8px;
  width: 48px;
  fill: #c0c4c9;
}
[data-prefers-color="dark"] .dumi-default-search-result .dumi-default-search-empty > svg {
  fill: #343b45;
}
`,""]),p.Z=l},25242:function(r,p,t){"use strict";var e=t(8081),s=t.n(e),f=t(23645),y=t.n(f),l=y()(s());l.push([r.id,`.dumi-default-sidebar {
  position: sticky;
  top: 76px;
  width: 184px;
  max-height: calc(100vh - 76px);
  padding-top: 20px;
  padding-bottom: 24px;
  padding-inline-start: 8px;
  padding-inline-end: 32px;
  box-sizing: border-box;
  overflow: auto;
}
@media only screen and (max-width: 767px) {
  .dumi-default-sidebar {
    position: fixed;
    z-index: 20;
    top: 0;
    left: 0;
    bottom: 0;
    max-height: initial;
    padding-inline-start: 32px;
    background-color: #f7f9fb;
    border-top: 1px solid #e4e9ec;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    transition: 0.2s all;
  }
  [data-prefers-color="dark"] .dumi-default-sidebar {
    background-color: #050709;
    border-top-color: #2a353c;
  }
  .dumi-default-doc-layout:not([data-mobile-sidebar-active]) .dumi-default-sidebar {
    opacity: 0;
    visibility: hidden;
    transform: translateX(-100%);
  }
}
.dumi-default-sidebar > dl {
  margin: 0;
  padding: 0;
  line-height: 1;
}
.dumi-default-sidebar > dl > dt {
  margin: 8px 0;
  color: #30363f;
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
}
[data-prefers-color="dark"] .dumi-default-sidebar > dl > dt {
  color: #c6c9cd;
}
.dumi-default-sidebar > dl > dd {
  margin: 0;
  padding: 8px 0;
}
.dumi-default-sidebar > dl > dd > a {
  display: block;
  color: #4f5866;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  transition: all 0.3s;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
[data-prefers-color="dark"] .dumi-default-sidebar > dl > dd > a {
  color: #8590a0;
}
.dumi-default-sidebar > dl > dd > a:hover {
  color: #1677ff;
}
[data-prefers-color="dark"] .dumi-default-sidebar > dl > dd > a:hover {
  color: #0053c8;
}
.dumi-default-sidebar > dl > dd > a.active {
  color: #1677ff;
  font-weight: bold;
}
[data-prefers-color="dark"] .dumi-default-sidebar > dl > dd > a.active {
  color: #0053c8;
}
.dumi-default-sidebar > dl + dl {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #d0d5d8;
}
[data-prefers-color="dark"] .dumi-default-sidebar > dl + dl {
  border-top-color: #1c2022;
}
`,""]),p.Z=l},12600:function(r,p,t){"use strict";var e=t(8081),s=t.n(e),f=t(23645),y=t.n(f),l=y()(s());l.push([r.id,`.dumi-default-icon {
  font-size: 0;
  line-height: 0;
}
[class*='-switch'] + .dumi-default-icon {
  margin-inline-start: 15px;
  margin-inline-end: -15px;
  padding-inline: 15px;
  border-inline-start: 1px solid #d0d5d8;
}
[data-prefers-color="dark"] [class*='-switch'] + .dumi-default-icon {
  border-inline-start-color: #1c2022;
}
.dumi-default-icon + .dumi-default-icon {
  margin-inline-start: 18px;
}
.dumi-default-icon > svg {
  height: 16px;
  fill: #4f5866;
}
[data-prefers-color="dark"] .dumi-default-icon > svg {
  fill: #8590a0;
}
.dumi-default-icon:hover svg {
  fill: #1677ff;
}
[data-prefers-color="dark"] .dumi-default-icon:hover svg {
  fill: #0053c8;
}
`,""]),p.Z=l},46546:function(r,p,t){"use strict";var e=t(8081),s=t.n(e),f=t(23645),y=t.n(f),l=y()(s());l.push([r.id,`.dumi-default-toc {
  list-style: none;
  margin: 12px 0 0;
  padding: 4px 0;
  border-inline-start: 1px solid #d0d5d8;
}
[data-prefers-color="dark"] .dumi-default-toc {
  border-inline-start-color: #1c2022;
}
.dumi-default-toc:empty {
  display: none;
}
.dumi-default-toc > li > a {
  display: block;
  margin: 6px 0;
  padding: 3px 12px;
  color: #4f5866;
  font-size: 13px;
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
[data-prefers-color="dark"] .dumi-default-toc > li > a {
  color: #8590a0;
}
.dumi-default-toc > li > a:hover {
  color: #30363f;
}
[data-prefers-color="dark"] .dumi-default-toc > li > a:hover {
  color: #c6c9cd;
}
.dumi-default-toc > li > a.active {
  margin-inline-start: -1px;
  color: #30363f;
  border-inline-start: 1px solid #1677ff;
}
[data-prefers-color="dark"] .dumi-default-toc > li > a.active {
  color: #c6c9cd;
  border-inline-start-color: #0053c8;
}
.dumi-default-toc > li[data-depth='3'] > a {
  padding-inline-start: 20px;
}
`,""]),p.Z=l},98443:function(r,p,t){"use strict";var e=t(8081),s=t.n(e),f=t(23645),y=t.n(f),l=y()(s());l.push([r.id,`/*!
 * Project: Heti
 * URL: https://github.com/sivan/heti
 * Author: Sivan [sun.sivan@gmail.com]
 */@font-face{font-family:"Heti Hei";src:"Heti Hei SC","Heti Hei TC","Heti Hei JP","Heti Hei KR"}@font-face{font-family:"Heti Hei SC";src:local("PingFang SC Regular"),local("Heiti SC Regular"),local("Microsoft YaHei"),local("Source Han Sans CN Regular"),local("Noto Sans CJK SC Regular"),local("WenQuanYi Micro Hei"),local("Droid Sans Fallback")}@font-face{font-family:"Heti Hei TC";src:local("PingFang TC Regular"),local("Heiti TC Regular"),local("Microsoft Jhenghei"),local("Source Han Sans HK Regular"),local("Source Han Sans TW Regular"),local("Noto Sans CJK TC Regular"),local("WenQuanYi Micro Hei"),local("Droid Sans Fallback")}@font-face{font-family:"Heti Hei JP";src:local("Hiragino Sans GB W3"),local("Source Han Sans JP Regular"),local("Noto Sans CJK JP Regular"),local("Droid Sans Fallback")}@font-face{font-family:"Heti Hei KR";src:local("Source Han Sans KR Regular"),local("Noto Sans CJK KR Regular"),local("Droid Sans Fallback")}@font-face{font-family:"Heti Hei";font-weight:200;src:"Heti Hei SC Light","Heti Hei TC Light","Heti Hei JP Light","Heti Hei KR Light"}@font-face{font-family:"Heti Hei SC Light";font-weight:200;src:local("PingFang SC Light"),local("Heiti SC Light"),"Heti Hei SC Light Fallback",local("Source Han Sans CN Light"),local("Noto Sans CJK SC Light")}@font-face{font-family:"Heti Hei TC Light";font-weight:200;src:local("PingFang TC Light"),local("Heiti TC Light"),local("Microsoft Jhenghei Light"),local("Source Han Sans HK Light"),local("Source Han Sans TW Light"),local("Noto Sans CJK TC Light")}@font-face{font-family:"Heti Hei JP Light";font-weight:200;src:local("Source Han Sans JP Light"),local("Noto Sans CJK JP Light")}@font-face{font-family:"Heti Hei KR Light";font-weight:200;src:local("Source Han Sans KR Light"),local("Noto Sans CJK KR Light")}@font-face{font-family:"Heti Hei SC Light Fallback";font-weight:200;src:local("Microsoft YaHei"),local("Droid Sans Fallback")}@font-face{font-family:"Heti Hei";font-weight:600;src:"Heti Hei SC Bold","Heti Hei TC Bold","Heti Hei JP Bold","Heti Hei KR Bold"}@font-face{font-family:"Heti Hei SC Bold";font-weight:600;src:local("PingFang SC Medium"),local("Heiti SC Medium"),"Heti Hei SC Bold Fallback",local("Source Han Sans CN Bold"),local("Noto Sans CJK SC Bold")}@font-face{font-family:"Heti Hei TC Bold";font-weight:600;src:local("PingFang TC Medium"),local("Heiti TC Medium"),local("Microsoft Jhenghei Bold"),local("Source Han Sans HK Bold"),local("Source Han Sans TW Bold"),local("Noto Sans CJK TC Bold")}@font-face{font-family:"Heti Hei JP Bold";font-weight:600;src:local("Hiragino Sans GB W6"),local("Source Han Sans JP Bold"),local("Noto Sans CJK JP Bold")}@font-face{font-family:"Heti Hei KR Bold";font-weight:600;src:local("Source Han Sans KR Bold"),local("Noto Sans CJK KR Bold")}@font-face{font-family:"Heti Hei SC Bold Fallback";font-weight:600;src:local("Microsoft YaHei"),local("Droid Sans Fallback")}@font-face{font-family:"Heti Hei Black";font-weight:800;src:"Heti Hei SC Black","Heti Hei TC Black","Heti Hei JP Black","Heti Hei KR Black"}@font-face{font-family:"Heti Hei SC Black";font-weight:800;src:local("Lantinghei SC Heavy"),local("PingFang SC Semibold"),local("Heiti SC Medium"),"Heti Hei SC Black Fallback",local("Source Han Sans CN Heavy"),local("Noto Sans CJK SC Heavy")}@font-face{font-family:"Heti Hei TC Black";font-weight:800;src:local("Lantinghei TC Heavy"),local("PingFang TC Semibold"),local("Heiti TC Medium"),local("Microsoft Jhenghei Bold"),local("Source Han Sans HK Heavy"),local("Source Han Sans TW Heavy"),local("Noto Sans CJK TC Heavy")}@font-face{font-family:"Heti Hei JP Black";font-weight:800;src:local("Hiragino Sans GB W6"),local("Source Han Sans JP Heavy"),local("Noto Sans CJK JP Heavy")}@font-face{font-family:"Heti Hei KR Black";font-weight:800;src:local("Source Han Sans KR Heavy"),local("Noto Sans CJK KR Heavy")}@font-face{font-family:"Heti Hei SC Black Fallback";font-weight:800;src:local("Microsoft YaHei"),local("Droid Sans Fallback")}@font-face{font-family:"Heti Song";src:local("Songti SC Regular"),local("Songti TC Regular"),local("SimSun")}@font-face{font-family:"Heti Song";font-weight:200;src:local("Songti SC Light"),local("Songti TC Light"),"Heti Song Light Fallback"}@font-face{font-family:"Heti Song Light Fallback";font-weight:200;src:local("SimSun")}@font-face{font-family:"Heti Song";font-weight:600;src:local("Songti SC Bold"),local("Songti TC Bold"),"Heti Song Bold Fallback"}@font-face{font-family:"Heti Song Bold Fallback";font-weight:600;src:local("SimSun")}@font-face{font-family:"Heti Song Black";font-weight:800;src:local("Songti SC Black"),local("SimSun")}@font-face{font-family:"Heti Kai";src:local("Kaiti SC Regular"),local("Kaiti TC Regular"),local("STKaiti"),local("Kaiti"),local("BiauKai")}@font-face{font-family:"Heti Kai";font-weight:600;src:local("Kaiti SC Bold"),local("Kaiti TC Bold")}@font-face{font-family:"Heti Kai Bold Fallback";font-weight:600;src:local("STKaiti"),local("Kaiti") local("BiauKai")}@font-face{font-family:"Heti Kai Black";font-weight:800;src:local("Kaiti SC Black"),local("Kaiti TC Black"),local("STKaiti"),local("Kaiti")}.markdown{max-width:100%;font-size:16px;font-weight:400;-webkit-font-smoothing:subpixel-antialiased;line-height:1.5;overflow-wrap:break-word;word-wrap:break-word;hyphens:auto;letter-spacing:.02em}.markdown::before,.markdown::after{content:"";display:table}.markdown::after{clear:both}.markdown>*:first-child,.markdown section>*:first-child,.markdown td>*:first-child{margin-block-start:0 !important}.markdown>*:last-child,.markdown section>*:last-child,.markdown td>*:last-child{margin-block-end:0 !important}.markdown blockquote{margin-block-start:12px;margin-block-end:24px;margin-inline-start:32px;margin-inline-end:32px;padding-block-start:12px;padding-block-end:12px;padding-inline-start:16px;padding-inline-end:16px;background-color:rgba(0,0,0,.054)}@media(prefers-color-scheme: dark){.markdown blockquote{background-color:rgba(255,255,255,.054)}}.markdown figure{display:block;text-align:center}.markdown figure>img{display:block;margin-inline-start:auto;margin-inline-end:auto}.markdown hr{width:30%;height:1px;margin-block-start:48px;margin-block-end:47px;margin-inline-start:auto;margin-inline-end:auto;border:0;background-color:#ccc}@media(prefers-color-scheme: dark){.markdown hr{background-color:#404040}}.markdown p{margin-block-start:12px;margin-block-end:24px;text-align:justify}.markdown p:not(:lang(zh)):not(:lang(ja)):not(:lang(kr)),.markdown p:not(:lang(zh)){text-align:start}.markdown pre{margin-block-start:12px;margin-block-end:12px;margin-inline-start:0;margin-inline-end:0;padding-block-start:12px;padding-block-end:12px;padding-inline-start:16px;padding-inline-end:16px;overflow:auto;font-family:"SFMono-Regular",consolas,"Liberation Mono",menlo,courier,monospace,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";white-space:pre;word-wrap:normal;border-radius:4px;background-color:rgba(0,0,0,.054)}@media(prefers-color-scheme: dark){.markdown pre{background-color:rgba(255,255,255,.054)}}.markdown pre code{margin:0;padding:0;border:0;border-radius:0;background-color:rgba(0,0,0,0);color:inherit}.markdown:not(:lang(zh)):not(:lang(ja)):not(:lang(kr)),.markdown:not(:lang(zh)){letter-spacing:0}.markdown a,.markdown abbr,.markdown code,.markdown heti-spacing,.markdown [lang=en-US]{letter-spacing:normal}.markdown h1,.markdown h2,.markdown h3,.markdown h4,.markdown h5,.markdown h6{position:relative;margin:0;margin-block-start:24px;margin-block-end:12px;font-weight:600}.markdown h1{margin-block-end:24px;font-size:32px;line-height:48px}.markdown h2{font-size:24px;line-height:36px}.markdown h3{font-size:20px;line-height:36px}.markdown h4{font-size:18px;line-height:24px}.markdown h5{font-size:16px;line-height:24px}.markdown h6{font-size:14px;line-height:24px}.markdown h1,.markdown h2,.markdown h3{letter-spacing:.05em}.markdown h1:not(:lang(zh)):not(:lang(ja)):not(:lang(kr)),.markdown h1:not(:lang(zh)),.markdown h2:not(:lang(zh)):not(:lang(ja)):not(:lang(kr)),.markdown h2:not(:lang(zh)),.markdown h3:not(:lang(zh)):not(:lang(ja)):not(:lang(kr)),.markdown h3:not(:lang(zh)){letter-spacing:0}.markdown h1+h2,.markdown h2+h3,.markdown h3+h4,.markdown h4+h5,.markdown h5+h6{margin-block-start:12px}.markdown ul,.markdown ol,.markdown dl{margin-block-start:12px;margin-block-end:24px}.markdown ul,.markdown ol{padding-inline-start:32px}.markdown ul ul,.markdown ul ol,.markdown ol ul,.markdown ol ol{margin-block-start:0;margin-block-end:0}.markdown ul{list-style-type:disc}.markdown ol{list-style-type:decimal}.markdown ul ul,.markdown ol ul{list-style-type:circle}.markdown ul ul ul,.markdown ul ol ul,.markdown ol ul ul,.markdown ol ol ul{list-style-type:square}.markdown li{list-style-type:unset}.markdown table{box-sizing:border-box;table-layout:fixed;margin-block-start:12px;margin-block-end:24px;margin-inline-start:auto;margin-inline-end:auto;border-collapse:collapse;border-width:1px;border-style:solid;border-color:#ccc;word-break:break-word}@media(prefers-color-scheme: dark){.markdown table{border-color:#404040}}.markdown th,.markdown td{padding-block-start:6px;padding-block-end:6px;padding-inline-start:8px;padding-inline-end:8px;border-width:1px;border-style:solid;border-color:#ccc}@media(prefers-color-scheme: dark){.markdown th,.markdown td{border-color:#404040}}.markdown caption{caption-side:bottom;margin-block-start:2px;margin-block-end:-4px;font-size:14px;line-height:24px}.markdown a{text-decoration:none}.markdown a:hover{padding-block-end:1px;border-block-end:1px solid currentColor;text-decoration:none}.markdown abbr[title]{padding-block-end:1px;border-block-end:1px dotted;text-decoration:none;cursor:help}.markdown b,.markdown strong{font-weight:600}.markdown code{margin-inline-start:.25em;margin-inline-end:.25em;font-family:"SFMono-Regular",consolas,"Liberation Mono",menlo,courier,monospace,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";font-size:.875em}.markdown dfn{font-weight:600}.markdown dfn:not(:lang(zh)):not(:lang(ja)):not(:lang(kr)),.markdown dfn:not(:lang(zh)){font-weight:400}.markdown em{font-weight:600}.markdown figcaption{display:inline-block;vertical-align:top;font-size:14px;text-align:start}.markdown i{font-style:italic}.markdown ins,.markdown u{padding-block-end:1px;border-block-end:1px solid;text-decoration:none}.markdown mark{padding-block-start:2px;padding-block-end:2px;padding-inline-start:1px;padding-inline-end:1px;margin-inline-start:1px;margin-inline-end:1px;background-color:rgba(255,247,0,.88);color:inherit}@media(prefers-color-scheme: dark){.markdown mark{background-color:rgba(77,74,0,.88)}}.markdown q{quotes:"\u300C" "\u300D" "\u300E" "\u300F"}.markdown q:not(:lang(zh)):not(:lang(ja)):not(:lang(kr)),.markdown q:not(:lang(zh)){quotes:initial;quotes:auto}.markdown rt{font-size:.875em;font-weight:400}.markdown small{font-size:.875em}.markdown strong{font-weight:600}.markdown sub,.markdown sup{position:relative;margin-inline-start:.25em;margin-inline-end:.25em;font-size:.75em;font-family:"Helvetica Neue",helvetica,arial,"Heti Hei",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";font-style:normal;line-height:1;vertical-align:baseline}.markdown sub{bottom:-0.25em}.markdown sup{top:-0.5em}.markdown sup:target,.markdown sup a:target{background-color:#dbedff}@media(prefers-color-scheme: dark){.markdown sup:target,.markdown sup a:target{background-color:#3a6188}}.markdown summary{padding-inline-start:1em;outline:0;cursor:pointer}.markdown summary::-webkit-details-marker{width:.6em;margin-inline-end:.4em}.markdown u[title]{cursor:help;border-block-end-width:3px;border-block-end-style:double;border-block-end-color:rgba(0,0,0,.54)}@media(prefers-color-scheme: dark){.markdown u[title]{border-block-end-color:rgba(255,255,255,.54)}}.markdown address,.markdown cite,.markdown dfn,.markdown dt,.markdown em{font-style:normal}.markdown address:not(:lang(zh)):not(:lang(ja)):not(:lang(kr)),.markdown address:not(:lang(zh)),.markdown cite:not(:lang(zh)):not(:lang(ja)):not(:lang(kr)),.markdown cite:not(:lang(zh)),.markdown dfn:not(:lang(zh)):not(:lang(ja)):not(:lang(kr)),.markdown dfn:not(:lang(zh)),.markdown dt:not(:lang(zh)):not(:lang(ja)):not(:lang(kr)),.markdown dt:not(:lang(zh)),.markdown em:not(:lang(zh)):not(:lang(ja)):not(:lang(kr)),.markdown em:not(:lang(zh)){font-style:italic}.markdown abbr[title],.markdown del,.markdown ins,.markdown s,.markdown u{margin-inline-start:1px;margin-inline-end:1px}.markdown,.markdown--sans{font-family:"Helvetica Neue",helvetica,arial,"Heti Hei",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"}.markdown--serif{font-family:"Times New Roman",times,"Heti Song",serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"}.markdown--classic{font-family:"Times New Roman",times,"Heti Song",serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"}.markdown--classic h1,.markdown--classic h2,.markdown--classic h3,.markdown--classic h4,.markdown--classic h5,.markdown--classic h6{font-family:"Times New Roman",times,"Heti Kai Black",serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";font-weight:800}.markdown--classic blockquote,.markdown--classic cite,.markdown--classic q{font-family:"Times New Roman",times,"Heti Kai",serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"}.markdown--classic figcaption,.markdown--classic caption,.markdown--classic th{font-family:"Helvetica Neue",helvetica,arial,"Heti Hei",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"}.markdown--hei{font-family:"Helvetica Neue",helvetica,arial,"Heti Hei",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"}.markdown--song{font-family:"Times New Roman",times,"Heti Song",serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"}.markdown--kai{font-family:"Times New Roman",times,"Heti Kai",serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"}.markdown--columns-1,.markdown--columns-2,.markdown--columns-3,.markdown--columns-4,.markdown--columns-16em,.markdown--columns-20em,.markdown--columns-24em,.markdown--columns-28em,.markdown--columns-32em,.markdown--columns-36em,.markdown--columns-40em,.markdown--columns-44em,.markdown--columns-48em,.markdown comma{max-width:none;column-gap:2em}.markdown--columns-1 p,.markdown--columns-2 p,.markdown--columns-3 p,.markdown--columns-4 p,.markdown--columns-16em p,.markdown--columns-20em p,.markdown--columns-24em p,.markdown--columns-28em p,.markdown--columns-32em p,.markdown--columns-36em p,.markdown--columns-40em p,.markdown--columns-44em p,.markdown--columns-48em p,.markdown comma p{margin-block-start:6px;margin-block-end:12px;text-indent:2em}.markdown--columns-1{column-count:1}.markdown--columns-2{column-count:2}.markdown--columns-3{column-count:3}.markdown--columns-4{column-count:4}.markdown--columns-16em{column-width:16em}.markdown--columns-20em{column-width:20em}.markdown--columns-24em{column-width:24em}.markdown--columns-28em{column-width:28em}.markdown--columns-32em{column-width:32em}.markdown--columns-36em{column-width:36em}.markdown--columns-40em{column-width:40em}.markdown--columns-44em{column-width:44em}.markdown--columns-48em{column-width:48em}.markdown--vertical{max-width:none;max-height:100%;writing-mode:vertical-rl;letter-spacing:.125em}.markdown--vertical h1,.markdown--vertical h2,.markdown--vertical h3,.markdown--vertical h4,.markdown--vertical h5,.markdown--vertical h6{text-align:start}.markdown--vertical q{quotes:"\u300C" "\u300D" "\u300E" "\u300F"}.markdown--ancient,.markdown--poetry{font-family:"Times New Roman",times,"Heti Song",serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"}.markdown--ancient h1,.markdown--ancient h2,.markdown--ancient h3,.markdown--ancient h4,.markdown--ancient h5,.markdown--ancient h6,.markdown--poetry h1,.markdown--poetry h2,.markdown--poetry h3,.markdown--poetry h4,.markdown--poetry h5,.markdown--poetry h6{font-family:"Times New Roman",times,"Heti Kai Black",serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";font-weight:800;text-align:center}.markdown--ancient h1 .markdown-meta,.markdown--ancient h2 .markdown-meta,.markdown--ancient h3 .markdown-meta,.markdown--ancient h4 .markdown-meta,.markdown--ancient h5 .markdown-meta,.markdown--ancient h6 .markdown-meta,.markdown--poetry h1 .markdown-meta,.markdown--poetry h2 .markdown-meta,.markdown--poetry h3 .markdown-meta,.markdown--poetry h4 .markdown-meta,.markdown--poetry h5 .markdown-meta,.markdown--poetry h6 .markdown-meta{font-weight:400}@media screen and (min-width: 640px){.markdown--ancient h1 .markdown-meta,.markdown--ancient h2 .markdown-meta,.markdown--ancient h3 .markdown-meta,.markdown--ancient h4 .markdown-meta,.markdown--ancient h5 .markdown-meta,.markdown--ancient h6 .markdown-meta,.markdown--poetry h1 .markdown-meta,.markdown--poetry h2 .markdown-meta,.markdown--poetry h3 .markdown-meta,.markdown--poetry h4 .markdown-meta,.markdown--poetry h5 .markdown-meta,.markdown--poetry h6 .markdown-meta{position:absolute;line-height:inherit;text-indent:0;display:inline;margin-block-start:4px;margin-inline-start:8px}}.markdown--ancient .markdown-meta,.markdown--poetry .markdown-meta{line-height:24px;text-align:center;text-indent:0}.markdown--ancient p{text-indent:2em}.markdown--poetry p{text-align:center;text-indent:0}.markdown--annotation p{margin-block-start:0;margin-block-end:0;line-height:2.25;text-indent:2em}.markdown--annotation em{-webkit-text-emphasis:filled circle;-webkit-text-emphasis-position:under;text-emphasis:filled circle;text-emphasis-position:under right;font-weight:400}.markdown--annotation em:not(:lang(zh)):not(:lang(ja)):not(:lang(kr)),.markdown--annotation em:not(:lang(zh)){-webkit-text-emphasis:none;text-emphasis:none}.markdown--annotation .markdown-meta{margin-block-start:12px;margin-block-end:24px}.markdown .markdown-meta{display:block;text-indent:0}.markdown .markdown-verse{text-align:center;text-indent:0}.markdown .markdown-large{font-size:18px;line-height:24px}.markdown .markdown-x-large{font-size:20px;line-height:30px;letter-spacing:.05em}.markdown .markdown-small{font-size:14px;line-height:24px}.markdown .markdown-x-small{font-size:12px;line-height:18px}.markdown .markdown-list-latin{list-style-type:upper-latin}.markdown .markdown-list-latin ol{list-style-type:lower-roman}.markdown .markdown-list-latin ol ol{list-style-type:lower-latin}.markdown .markdown-list-han{list-style-type:cjk-ideographic}.markdown .markdown-list-han ol{list-style-type:decimal}.markdown .markdown-list-han ol ol{list-style-type:decimal-leading-zero}.markdown .markdown-fn{margin-block-start:59px;border-block-start:1px solid;border-block-start-color:#ccc;font-size:14px;font-family:"Helvetica Neue",helvetica,arial,"Heti Hei",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";line-height:24px}@media(prefers-color-scheme: dark){.markdown .markdown-fn{border-block-start-color:#404040}}.markdown .markdown-fn ol{margin-block-start:12px;margin-block-end:0}.markdown .markdown-fn li:target{background-color:#dbedff}@media(prefers-color-scheme: dark){.markdown .markdown-fn li:target{background-color:#3a6188}}.markdown .markdown-hang{position:absolute;line-height:inherit;text-indent:0}.markdown .markdown-em{-webkit-text-emphasis:filled circle;-webkit-text-emphasis-position:under;text-emphasis:filled circle;text-emphasis-position:under right}.markdown .markdown-em:not(:lang(zh)):not(:lang(ja)):not(:lang(kr)),.markdown .markdown-em:not(:lang(zh)){-webkit-text-emphasis:none;text-emphasis:none}.markdown .markdown-ruby--inline{display:inline-flex;flex-direction:column-reverse;height:1.5em;vertical-align:top}.markdown .markdown-ruby--inline rt{display:inline;margin-bottom:-0.25em;line-height:1;text-align:center}.markdown heti-spacing{display:inline}.markdown heti-spacing+sup,.markdown heti-spacing+sub{margin-inline-start:0}.markdown .heti-spacing-start{margin-inline-end:.25em}.markdown .heti-spacing-end{margin-inline-start:.25em}.markdown heti-adjacent{display:inline}.markdown .heti-adjacent-half{margin-inline-end:-0.5em}.markdown .heti-adjacent-quarter{margin-inline-end:-0.25em}`,""]),p.Z=l},63405:function(r,p,t){var e=t(73897);function s(f){if(Array.isArray(f))return e(f)}r.exports=s,r.exports.__esModule=!0,r.exports.default=r.exports},66115:function(r){function p(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}r.exports=p,r.exports.__esModule=!0,r.exports.default=r.exports},56690:function(r){function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.exports=p,r.exports.__esModule=!0,r.exports.default=r.exports},89728:function(r,p,t){var e=t(64062);function s(y,l){for(var L=0;L<l.length;L++){var N=l[L];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(y,e(N.key),N)}}function f(y,l,L){return l&&s(y.prototype,l),L&&s(y,L),Object.defineProperty(y,"prototype",{writable:!1}),y}r.exports=f,r.exports.__esModule=!0,r.exports.default=r.exports},26389:function(r,p,t){var e=t(73808),s=t(69617),f=t(94993);function y(l){var L=s();return function(){var H=e(l),Z;if(L){var z=e(this).constructor;Z=Reflect.construct(H,arguments,z)}else Z=H.apply(this,arguments);return f(this,Z)}}r.exports=y,r.exports.__esModule=!0,r.exports.default=r.exports},73808:function(r){function p(t){return r.exports=p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(s){return s.__proto__||Object.getPrototypeOf(s)},r.exports.__esModule=!0,r.exports.default=r.exports,p(t)}r.exports=p,r.exports.__esModule=!0,r.exports.default=r.exports},61655:function(r,p,t){var e=t(6015);function s(f,y){if(typeof y!="function"&&y!==null)throw new TypeError("Super expression must either be null or a function");f.prototype=Object.create(y&&y.prototype,{constructor:{value:f,writable:!0,configurable:!0}}),Object.defineProperty(f,"prototype",{writable:!1}),y&&e(f,y)}r.exports=s,r.exports.__esModule=!0,r.exports.default=r.exports},69617:function(r){function p(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}r.exports=p,r.exports.__esModule=!0,r.exports.default=r.exports},79498:function(r){function p(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}r.exports=p,r.exports.__esModule=!0,r.exports.default=r.exports},42281:function(r){function p(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}r.exports=p,r.exports.__esModule=!0,r.exports.default=r.exports},94993:function(r,p,t){var e=t(18698).default,s=t(66115);function f(y,l){if(l&&(e(l)==="object"||typeof l=="function"))return l;if(l!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return s(y)}r.exports=f,r.exports.__esModule=!0,r.exports.default=r.exports},6015:function(r){function p(t,e){return r.exports=p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(f,y){return f.__proto__=y,f},r.exports.__esModule=!0,r.exports.default=r.exports,p(t,e)}r.exports=p,r.exports.__esModule=!0,r.exports.default=r.exports},861:function(r,p,t){var e=t(63405),s=t(79498),f=t(86116),y=t(42281);function l(L){return e(L)||s(L)||f(L)||y()}r.exports=l,r.exports.__esModule=!0,r.exports.default=r.exports}}]);

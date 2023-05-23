(self.webpackChunkreact_papercss_design=self.webpackChunkreact_papercss_design||[]).push([[129],{71100:function(x,B,e){"use strict";var j=e(3922),A=e(67294),O=e(9943);function T(r,t){return U(r)||N(r,t)||W(r,t)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W(r,t){if(r){if(typeof r=="string")return C(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(r,t)}}function C(r,t){(t==null||t>r.length)&&(t=r.length);for(var n=0,u=new Array(t);n<t;n++)u[n]=r[n];return u}function N(r,t){var n=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(n!=null){var u=[],b=!0,f=!1,y,p;try{for(n=n.call(r);!(b=(y=n.next()).done)&&(u.push(y.value),!(t&&u.length===t));b=!0);}catch(d){f=!0,p=d}finally{try{!b&&n.return!=null&&n.return()}finally{if(f)throw p}}return u}}function U(r){if(Array.isArray(r))return r}var D={toString:function(t){return typeof t.type=="string"&&t.type in this?"enum"in t?this.enum(t):this[t.type](t):t.type?this.getValidClassName(t)||t.type:"const"in t?t.const:"oneOf"in t?this.oneOf(t):"unknown"},string:function(t){return t.type},number:function(t){return t.type},boolean:function(t){return t.type},any:function(t){return t.type},object:function(t){var n=this,u=[];return Object.entries(t.properties||{}).forEach(function(b){var f,y=T(b,2),p=y[0],d=y[1];u.push("".concat(p).concat((f=t.required)!==null&&f!==void 0&&f.includes(p)?"":"?",": ").concat(d.type==="object"?"object":n.toString(d)))}),u.length?"{ ".concat(u.join("; ")," }"):"{}"},array:function(t){if(t.items){var n=this.getValidClassName(t.items);return n?"".concat(n,"[]"):"".concat(this.toString(t.items),"[]")}return"any[]"},element:function(t){return"<".concat(t.componentName," />")},function:function(t){var n=this,u=t.signature,b="oneOf"in u?u.oneOf:[u];return b.map(function(f){return"".concat(f.isAsync?"async ":"","(").concat(f.arguments.map(function(y){return"".concat(y.key,": ").concat(n.toString(y))}).join(", "),") => ").concat(n.toString(f.returnType))}).join(" | ")},dom:function(t){return t.className||"DOM"},enum:function(t){return t.enum.map(function(n){return JSON.stringify(n)}).join(" | ")},oneOf:function(t){var n=this;return t.oneOf.map(function(u){return n.getValidClassName(u)||n.toString(u)}).join(" | ")},getValidClassName:function(t){return"className"in t&&typeof t.className=="string"&&t.className!=="__type"?t.className:null}},k=function(t){var n=useState(function(){return D.toString(t)}),u=T(n,2),b=u[0],f=u[1];return useEffect(function(){f(D.toString(t))},[t]),React.createElement("code",null,b)},$=function(t){var n,u=useRouteMeta(),b=u.frontmatter,f=useAtomAssets(),y=f.components,p=t.id||b.atomId,d=useIntl();if(!p)throw new Error("`id` properties if required for API component!");var a=y==null?void 0:y[p];return React.createElement("div",{className:"markdown"},React.createElement(Table,null,React.createElement("thead",null,React.createElement("tr",null,React.createElement("th",null,d.formatMessage({id:"api.component.name"})),React.createElement("th",null,d.formatMessage({id:"api.component.description"})),React.createElement("th",null,d.formatMessage({id:"api.component.type"})),React.createElement("th",null,d.formatMessage({id:"api.component.default"})))),React.createElement("tbody",null,a&&(n=a.propsConfig)!==null&&n!==void 0&&n.properties?Object.entries(a.propsConfig.properties).map(function(s){var m,E=T(s,2),_=E[0],I=E[1];return React.createElement("tr",{key:_},React.createElement("td",null,_),React.createElement("td",null,I.description||"--"),React.createElement("td",null,React.createElement(k,I)),React.createElement("td",null,React.createElement("code",null,(m=a.propsConfig.required)!==null&&m!==void 0&&m.includes(_)?d.formatMessage({id:"api.component.required"}):JSON.stringify(I.default)||"--")))}):React.createElement("tr",null,React.createElement("td",{colSpan:4},d.formatMessage({id:"api.component.".concat(y?"not.found":"unavailable")},{id:p}))))))},F=null},37062:function(x,B,e){"use strict";var j=e(67294),A=e(26575),O=e.n(A),T=e(23187),S=e.n(T),W=e(75553),C=e.n(W),N=e(41049),U=e.n(N),D=e(5026),k=e.n(D),$=e(83357),F=e.n($),r=e(6398),t={};t.styleTagTransform=F(),t.setAttributes=U(),t.insert=C().bind(null,"head"),t.domAPI=S(),t.insertStyleElement=k();var n=O()(r.Z,t),u=r.Z&&r.Z.locals?r.Z.locals:void 0;function b(){return b=Object.assign?Object.assign.bind():function(p){for(var d=1;d<arguments.length;d++){var a=arguments[d];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(p[s]=a[s])}return p},b.apply(this,arguments)}var f=function(d){return React.createElement("span",b({className:"dumi-default-badge"},d))},y=null},9943:function(x,B,e){"use strict";var j=e(93096),A=e(67294),O=e(26575),T=e.n(O),S=e(23187),W=e.n(S),C=e(75553),N=e.n(C),U=e(41049),D=e.n(U),k=e(5026),$=e.n(k),F=e(83357),r=e.n(F),t=e(19373),n={};n.styleTagTransform=r(),n.setAttributes=D(),n.insert=N().bind(null,"head"),n.domAPI=W(),n.insertStyleElement=$();var u=T()(t.Z,n),b=t.Z&&t.Z.locals?t.Z.locals:void 0,f=null;function y(i,l){return m(i)||s(i,l)||d(i,l)||p()}function p(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function d(i,l){if(i){if(typeof i=="string")return a(i,l);var o=Object.prototype.toString.call(i).slice(8,-1);if(o==="Object"&&i.constructor&&(o=i.constructor.name),o==="Map"||o==="Set")return Array.from(i);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return a(i,l)}}function a(i,l){(l==null||l>i.length)&&(l=i.length);for(var o=0,g=new Array(l);o<l;o++)g[o]=i[o];return g}function s(i,l){var o=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(o!=null){var g=[],c=!0,h=!1,R,V;try{for(o=o.call(i);!(c=(R=o.next()).done)&&(g.push(R.value),!(l&&g.length===l));c=!0);}catch(z){h=!0,V=z}finally{try{!c&&o.return!=null&&o.return()}finally{if(h)throw V}}return g}}function m(i){if(Array.isArray(i))return i}function E(i,l){if(i==null)return{};var o=_(i,l),g,c;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(i);for(c=0;c<h.length;c++)g=h[c],!(l.indexOf(g)>=0)&&Object.prototype.propertyIsEnumerable.call(i,g)&&(o[g]=i[g])}return o}function _(i,l){if(i==null)return{};var o={},g=Object.keys(i),c,h;for(h=0;h<g.length;h++)c=g[h],!(l.indexOf(c)>=0)&&(o[c]=i[c]);return o}var I=function(l){var o=l.children,g=E(l,f),c=useRef(null),h=useState(!1),R=y(h,2),V=R[0],z=R[1],X=useState(!1),Z=y(X,2),J=Z[0],G=Z[1];return useEffect(function(){var P=c.current;if(P){var M=throttle(function(){z(P.scrollLeft>0),G(P.scrollLeft<P.scrollWidth-P.offsetWidth)},100);return M(),P.addEventListener("scroll",M),window.addEventListener("resize",M),function(){P.removeEventListener("scroll",M),window.removeEventListener("resize",M)}}},[]),React.createElement("div",{className:"dumi-default-table"},React.createElement("div",{className:"dumi-default-table-content",ref:c,"data-left-folded":V||void 0,"data-right-folded":J||void 0},React.createElement("table",g,o)))},K=null},6398:function(x,B,e){"use strict";var j=e(8081),A=e.n(j),O=e(23645),T=e.n(O),S=T()(A());S.push([x.id,`.dumi-default-badge {
  display: inline-block;
  margin-inline-start: 2px;
  padding: 1px 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  border-radius: 4px;
  vertical-align: top;
}
.dumi-default-badge:not([type]),
.dumi-default-badge[type='info'] {
  color: #1677ff;
  background: #e2eeff;
}
[data-prefers-color="dark"] .dumi-default-badge:not([type]),
[data-prefers-color="dark"] .dumi-default-badge[type='info'] {
  color: #1677ff;
  background: #002962;
}
.dumi-default-badge[type='warning'] {
  color: #d59200;
  background: #ffefcb;
}
[data-prefers-color="dark"] .dumi-default-badge[type='warning'] {
  color: #d59200;
  background: #231800;
}
.dumi-default-badge[type='success'] {
  color: #208a41;
  background: #cbf3d7;
}
[data-prefers-color="dark"] .dumi-default-badge[type='success'] {
  color: #208a41;
  background: #092712;
}
.dumi-default-badge[type='error'] {
  color: #ce1f31;
  background: #fbe2e5;
}
[data-prefers-color="dark"] .dumi-default-badge[type='error'] {
  color: #ce1f31;
  background: #3c090e;
}
`,""]),B.Z=S},19373:function(x,B,e){"use strict";var j=e(8081),A=e.n(j),O=e(23645),T=e.n(O),S=T()(A());S.push([x.id,`.dumi-default-table {
  margin: 24px 0 32px;
  transform: translate(0, 0);
}
.dumi-default-table-content {
  overflow: auto;
}
.dumi-default-table-content::before,
.dumi-default-table-content::after {
  content: '';
  display: block;
  position: fixed;
  z-index: 1;
  top: 0;
  bottom: 0;
  width: 6px;
  pointer-events: none;
}
.dumi-default-table-content[data-left-folded]::before {
  left: 0;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));
}
[data-prefers-color="dark"] .dumi-default-table-content[data-left-folded]::before {
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
.dumi-default-table-content[data-right-folded]::after {
  right: 0;
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));
}
[data-prefers-color="dark"] .dumi-default-table-content[data-right-folded]::after {
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
.dumi-default-table-content > table > thead > tr > th,
.dumi-default-table-content > table > tr > th {
  white-space: nowrap;
}
`,""]),B.Z=S},93096:function(x,B,e){var j="Expected a function",A=NaN,O="[object Symbol]",T=/^\s+|\s+$/g,S=/^[-+]0x[0-9a-f]+$/i,W=/^0b[01]+$/i,C=/^0o[0-7]+$/i,N=parseInt,U=typeof e.g=="object"&&e.g&&e.g.Object===Object&&e.g,D=typeof self=="object"&&self&&self.Object===Object&&self,k=U||D||Function("return this")(),$=Object.prototype,F=$.toString,r=Math.max,t=Math.min,n=function(){return k.Date.now()};function u(a,s,m){var E,_,I,K,i,l,o=0,g=!1,c=!1,h=!0;if(typeof a!="function")throw new TypeError(j);s=d(s)||0,f(m)&&(g=!!m.leading,c="maxWait"in m,I=c?r(d(m.maxWait)||0,s):I,h="trailing"in m?!!m.trailing:h);function R(v){var L=E,H=_;return E=_=void 0,o=v,K=a.apply(H,L),K}function V(v){return o=v,i=setTimeout(Z,s),g?R(v):K}function z(v){var L=v-l,H=v-o,Q=s-L;return c?t(Q,I-H):Q}function X(v){var L=v-l,H=v-o;return l===void 0||L>=s||L<0||c&&H>=I}function Z(){var v=n();if(X(v))return J(v);i=setTimeout(Z,z(v))}function J(v){return i=void 0,h&&E?R(v):(E=_=void 0,K)}function G(){i!==void 0&&clearTimeout(i),o=0,E=l=_=i=void 0}function P(){return i===void 0?K:J(n())}function M(){var v=n(),L=X(v);if(E=arguments,_=this,l=v,L){if(i===void 0)return V(l);if(c)return i=setTimeout(Z,s),R(l)}return i===void 0&&(i=setTimeout(Z,s)),K}return M.cancel=G,M.flush=P,M}function b(a,s,m){var E=!0,_=!0;if(typeof a!="function")throw new TypeError(j);return f(m)&&(E="leading"in m?!!m.leading:E,_="trailing"in m?!!m.trailing:_),u(a,s,{leading:E,maxWait:s,trailing:_})}function f(a){var s=typeof a;return!!a&&(s=="object"||s=="function")}function y(a){return!!a&&typeof a=="object"}function p(a){return typeof a=="symbol"||y(a)&&F.call(a)==O}function d(a){if(typeof a=="number")return a;if(p(a))return A;if(f(a)){var s=typeof a.valueOf=="function"?a.valueOf():a;a=f(s)?s+"":s}if(typeof a!="string")return a===0?a:+a;a=a.replace(T,"");var m=W.test(a);return m||C.test(a)?N(a.slice(2),m?2:8):S.test(a)?A:+a}x.exports=b}}]);

!(function(){var hd=Object.defineProperty,gd=Object.defineProperties;var yd=Object.getOwnPropertyDescriptors;var dd=Object.getOwnPropertySymbols;var bd=Object.prototype.hasOwnProperty,wd=Object.prototype.propertyIsEnumerable;var fd=(s,f,e)=>f in s?hd(s,f,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[f]=e,ld=(s,f)=>{for(var e in f||(f={}))bd.call(f,e)&&fd(s,e,f[e]);if(dd)for(var e of dd(f))wd.call(f,e)&&fd(s,e,f[e]);return s},pd=(s,f)=>gd(s,yd(f));(function(){var __webpack_modules__={25687:function(s,f,e){"use strict";e.d(f,{kG:function(){return y}});function i(b){return Math.floor(Math.log(b)*Math.LOG10E)}function u(b,T){if(typeof b.repeat=="function")return b.repeat(T);for(var A=new Array(T),C=0;C<A.length;C++)A[C]=b;return A.join("")}function o(b,T,A,C){b.get(T)||b.set(T,Object.create(null));var $=b.get(T);$[A]=C}function n(b,T,A){for(var C=0,$=Object.keys(A);C<$.length;C++){var B=$[C];o(b,T,B,A[B])}}function d(b,T,A){return v(b,T,A)[A]}function v(b,T){for(var A=[],C=2;C<arguments.length;C++)A[C-2]=arguments[C];var $=b.get(T);if(!$)throw new TypeError("".concat(T," InternalSlot has not been initialized"));return A.reduce(function(B,L){return B[L]=$[L],B},Object.create(null))}function p(b){return b.type==="literal"}function h(b,T,A){var C=A.value;Object.defineProperty(b,T,{configurable:!0,enumerable:!1,writable:!0,value:C})}var x=/-u(?:-[0-9a-z]{2,8})+/gi;function y(b,T,A){if(A===void 0&&(A=Error),!b)throw new A(T)}},95957:function(s,f,e){"use strict";e.d(f,{A:function(){return T},H:function(){return i}});function i(A,C){var $=C&&C.cache?C.cache:b,B=C&&C.serializer?C.serializer:x,L=C&&C.strategy?C.strategy:v;return L(A,{cache:$,serializer:B})}function u(A){return A==null||typeof A=="number"||typeof A=="boolean"}function o(A,C,$,B){var L=u(B)?B:$(B),z=C.get(L);return typeof z=="undefined"&&(z=A.call(this,B),C.set(L,z)),z}function n(A,C,$){var B=Array.prototype.slice.call(arguments,3),L=$(B),z=C.get(L);return typeof z=="undefined"&&(z=A.apply(this,B),C.set(L,z)),z}function d(A,C,$,B,L){return $.bind(C,A,B,L)}function v(A,C){var $=A.length===1?o:n;return d(A,this,$,C.cache.create(),C.serializer)}function p(A,C){return d(A,this,n,C.cache.create(),C.serializer)}function h(A,C){return d(A,this,o,C.cache.create(),C.serializer)}var x=function(){return JSON.stringify(arguments)};function y(){this.cache=Object.create(null)}y.prototype.get=function(A){return this.cache[A]},y.prototype.set=function(A,C){this.cache[A]=C};var b={create:function(){return new y}},T={variadic:p,monadic:h}},19137:function(s,f,e){"use strict";e.d(f,{wD:function(){return g},VG:function(){return P},rp:function(){return oe},Ii:function(){return Ze},O4:function(){return k},uf:function(){return D},Wh:function(){return Xe},Jo:function(){return re},yx:function(){return Ee},Wi:function(){return Re},HI:function(){return Ve},pe:function(){return he},Qc:function(){return Zo}});var i=function(m,Z){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(te,ae){te.__proto__=ae}||function(te,ae){for(var ce in ae)Object.prototype.hasOwnProperty.call(ae,ce)&&(te[ce]=ae[ce])},i(m,Z)};function u(m,Z){if(typeof Z!="function"&&Z!==null)throw new TypeError("Class extends value "+String(Z)+" is not a constructor or null");i(m,Z);function te(){this.constructor=m}m.prototype=Z===null?Object.create(Z):(te.prototype=Z.prototype,new te)}var o=function(){return o=Object.assign||function(Z){for(var te,ae=1,ce=arguments.length;ae<ce;ae++){te=arguments[ae];for(var Ae in te)Object.prototype.hasOwnProperty.call(te,Ae)&&(Z[Ae]=te[Ae])}return Z},o.apply(this,arguments)};function n(m,Z){var te={};for(var ae in m)Object.prototype.hasOwnProperty.call(m,ae)&&Z.indexOf(ae)<0&&(te[ae]=m[ae]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function")for(var ce=0,ae=Object.getOwnPropertySymbols(m);ce<ae.length;ce++)Z.indexOf(ae[ce])<0&&Object.prototype.propertyIsEnumerable.call(m,ae[ce])&&(te[ae[ce]]=m[ae[ce]]);return te}function d(m,Z,te,ae){var ce=arguments.length,Ae=ce<3?Z:ae===null?ae=Object.getOwnPropertyDescriptor(Z,te):ae,Je;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")Ae=Reflect.decorate(m,Z,te,ae);else for(var Et=m.length-1;Et>=0;Et--)(Je=m[Et])&&(Ae=(ce<3?Je(Ae):ce>3?Je(Z,te,Ae):Je(Z,te))||Ae);return ce>3&&Ae&&Object.defineProperty(Z,te,Ae),Ae}function v(m,Z){return function(te,ae){Z(te,ae,m)}}function p(m,Z,te,ae,ce,Ae){function Je(_n){if(_n!==void 0&&typeof _n!="function")throw new TypeError("Function expected");return _n}for(var Et=ae.kind,vr=Et==="getter"?"get":Et==="setter"?"set":"value",rt=!Z&&m?ae.static?m:m.prototype:null,tr=Z||(rt?Object.getOwnPropertyDescriptor(rt,ae.name):{}),Qt,Jt=!1,Sr=te.length-1;Sr>=0;Sr--){var Br={};for(var Zr in ae)Br[Zr]=Zr==="access"?{}:ae[Zr];for(var Zr in ae.access)Br.access[Zr]=ae.access[Zr];Br.addInitializer=function(_n){if(Jt)throw new TypeError("Cannot add initializers after decoration has completed");Ae.push(Je(_n||null))};var fn=(0,te[Sr])(Et==="accessor"?{get:tr.get,set:tr.set}:tr[vr],Br);if(Et==="accessor"){if(fn===void 0)continue;if(fn===null||typeof fn!="object")throw new TypeError("Object expected");(Qt=Je(fn.get))&&(tr.get=Qt),(Qt=Je(fn.set))&&(tr.set=Qt),(Qt=Je(fn.init))&&ce.push(Qt)}else(Qt=Je(fn))&&(Et==="field"?ce.push(Qt):tr[vr]=Qt)}rt&&Object.defineProperty(rt,ae.name,tr),Jt=!0}function h(m,Z,te){for(var ae=arguments.length>2,ce=0;ce<Z.length;ce++)te=ae?Z[ce].call(m,te):Z[ce].call(m);return ae?te:void 0}function x(m){return typeof m=="symbol"?m:"".concat(m)}function y(m,Z,te){return typeof Z=="symbol"&&(Z=Z.description?"[".concat(Z.description,"]"):""),Object.defineProperty(m,"name",{configurable:!0,value:te?"".concat(te," ",Z):Z})}function b(m,Z){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(m,Z)}function T(m,Z,te,ae){function ce(Ae){return Ae instanceof te?Ae:new te(function(Je){Je(Ae)})}return new(te||(te=Promise))(function(Ae,Je){function Et(tr){try{rt(ae.next(tr))}catch(Qt){Je(Qt)}}function vr(tr){try{rt(ae.throw(tr))}catch(Qt){Je(Qt)}}function rt(tr){tr.done?Ae(tr.value):ce(tr.value).then(Et,vr)}rt((ae=ae.apply(m,Z||[])).next())})}function A(m,Z){var te={label:0,sent:function(){if(Ae[0]&1)throw Ae[1];return Ae[1]},trys:[],ops:[]},ae,ce,Ae,Je;return Je={next:Et(0),throw:Et(1),return:Et(2)},typeof Symbol=="function"&&(Je[Symbol.iterator]=function(){return this}),Je;function Et(rt){return function(tr){return vr([rt,tr])}}function vr(rt){if(ae)throw new TypeError("Generator is already executing.");for(;Je&&(Je=0,rt[0]&&(te=0)),te;)try{if(ae=1,ce&&(Ae=rt[0]&2?ce.return:rt[0]?ce.throw||((Ae=ce.return)&&Ae.call(ce),0):ce.next)&&!(Ae=Ae.call(ce,rt[1])).done)return Ae;switch(ce=0,Ae&&(rt=[rt[0]&2,Ae.value]),rt[0]){case 0:case 1:Ae=rt;break;case 4:return te.label++,{value:rt[1],done:!1};case 5:te.label++,ce=rt[1],rt=[0];continue;case 7:rt=te.ops.pop(),te.trys.pop();continue;default:if(Ae=te.trys,!(Ae=Ae.length>0&&Ae[Ae.length-1])&&(rt[0]===6||rt[0]===2)){te=0;continue}if(rt[0]===3&&(!Ae||rt[1]>Ae[0]&&rt[1]<Ae[3])){te.label=rt[1];break}if(rt[0]===6&&te.label<Ae[1]){te.label=Ae[1],Ae=rt;break}if(Ae&&te.label<Ae[2]){te.label=Ae[2],te.ops.push(rt);break}Ae[2]&&te.ops.pop(),te.trys.pop();continue}rt=Z.call(m,te)}catch(tr){rt=[6,tr],ce=0}finally{ae=Ae=0}if(rt[0]&5)throw rt[1];return{value:rt[0]?rt[1]:void 0,done:!0}}}var C=Object.create?function(m,Z,te,ae){ae===void 0&&(ae=te);var ce=Object.getOwnPropertyDescriptor(Z,te);(!ce||("get"in ce?!Z.__esModule:ce.writable||ce.configurable))&&(ce={enumerable:!0,get:function(){return Z[te]}}),Object.defineProperty(m,ae,ce)}:function(m,Z,te,ae){ae===void 0&&(ae=te),m[ae]=Z[te]};function $(m,Z){for(var te in m)te!=="default"&&!Object.prototype.hasOwnProperty.call(Z,te)&&C(Z,m,te)}function B(m){var Z=typeof Symbol=="function"&&Symbol.iterator,te=Z&&m[Z],ae=0;if(te)return te.call(m);if(m&&typeof m.length=="number")return{next:function(){return m&&ae>=m.length&&(m=void 0),{value:m&&m[ae++],done:!m}}};throw new TypeError(Z?"Object is not iterable.":"Symbol.iterator is not defined.")}function L(m,Z){var te=typeof Symbol=="function"&&m[Symbol.iterator];if(!te)return m;var ae=te.call(m),ce,Ae=[],Je;try{for(;(Z===void 0||Z-- >0)&&!(ce=ae.next()).done;)Ae.push(ce.value)}catch(Et){Je={error:Et}}finally{try{ce&&!ce.done&&(te=ae.return)&&te.call(ae)}finally{if(Je)throw Je.error}}return Ae}function z(){for(var m=[],Z=0;Z<arguments.length;Z++)m=m.concat(L(arguments[Z]));return m}function H(){for(var m=0,Z=0,te=arguments.length;Z<te;Z++)m+=arguments[Z].length;for(var ae=Array(m),ce=0,Z=0;Z<te;Z++)for(var Ae=arguments[Z],Je=0,Et=Ae.length;Je<Et;Je++,ce++)ae[ce]=Ae[Je];return ae}function W(m,Z,te){if(te||arguments.length===2)for(var ae=0,ce=Z.length,Ae;ae<ce;ae++)(Ae||!(ae in Z))&&(Ae||(Ae=Array.prototype.slice.call(Z,0,ae)),Ae[ae]=Z[ae]);return m.concat(Ae||Array.prototype.slice.call(Z))}function R(m){return this instanceof R?(this.v=m,this):new R(m)}function F(m,Z,te){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var ae=te.apply(m,Z||[]),ce,Ae=[];return ce={},Je("next"),Je("throw"),Je("return"),ce[Symbol.asyncIterator]=function(){return this},ce;function Je(Jt){ae[Jt]&&(ce[Jt]=function(Sr){return new Promise(function(Br,Zr){Ae.push([Jt,Sr,Br,Zr])>1||Et(Jt,Sr)})})}function Et(Jt,Sr){try{vr(ae[Jt](Sr))}catch(Br){Qt(Ae[0][3],Br)}}function vr(Jt){Jt.value instanceof R?Promise.resolve(Jt.value.v).then(rt,tr):Qt(Ae[0][2],Jt)}function rt(Jt){Et("next",Jt)}function tr(Jt){Et("throw",Jt)}function Qt(Jt,Sr){Jt(Sr),Ae.shift(),Ae.length&&Et(Ae[0][0],Ae[0][1])}}function V(m){var Z,te;return Z={},ae("next"),ae("throw",function(ce){throw ce}),ae("return"),Z[Symbol.iterator]=function(){return this},Z;function ae(ce,Ae){Z[ce]=m[ce]?function(Je){return(te=!te)?{value:R(m[ce](Je)),done:!1}:Ae?Ae(Je):Je}:Ae}}function q(m){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var Z=m[Symbol.asyncIterator],te;return Z?Z.call(m):(m=typeof B=="function"?B(m):m[Symbol.iterator](),te={},ae("next"),ae("throw"),ae("return"),te[Symbol.asyncIterator]=function(){return this},te);function ae(Ae){te[Ae]=m[Ae]&&function(Je){return new Promise(function(Et,vr){Je=m[Ae](Je),ce(Et,vr,Je.done,Je.value)})}}function ce(Ae,Je,Et,vr){Promise.resolve(vr).then(function(rt){Ae({value:rt,done:Et})},Je)}}function Q(m,Z){return Object.defineProperty?Object.defineProperty(m,"raw",{value:Z}):m.raw=Z,m}var X=Object.create?function(m,Z){Object.defineProperty(m,"default",{enumerable:!0,value:Z})}:function(m,Z){m.default=Z};function ie(m){if(m&&m.__esModule)return m;var Z={};if(m!=null)for(var te in m)te!=="default"&&Object.prototype.hasOwnProperty.call(m,te)&&C(Z,m,te);return X(Z,m),Z}function Oe(m){return m&&m.__esModule?m:{default:m}}function Se(m,Z,te,ae){if(te==="a"&&!ae)throw new TypeError("Private accessor was defined without a getter");if(typeof Z=="function"?m!==Z||!ae:!Z.has(m))throw new TypeError("Cannot read private member from an object whose class did not declare it");return te==="m"?ae:te==="a"?ae.call(m):ae?ae.value:Z.get(m)}function Be(m,Z,te,ae,ce){if(ae==="m")throw new TypeError("Private method is not writable");if(ae==="a"&&!ce)throw new TypeError("Private accessor was defined without a setter");if(typeof Z=="function"?m!==Z||!ce:!Z.has(m))throw new TypeError("Cannot write private member to an object whose class did not declare it");return ae==="a"?ce.call(m,te):ce?ce.value=te:Z.set(m,te),te}function ue(m,Z){if(Z===null||typeof Z!="object"&&typeof Z!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof m=="function"?Z===m:m.has(Z)}var S;(function(m){m[m.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",m[m.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",m[m.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",m[m.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",m[m.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",m[m.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",m[m.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",m[m.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",m[m.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",m[m.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",m[m.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",m[m.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",m[m.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",m[m.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",m[m.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",m[m.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",m[m.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",m[m.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",m[m.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",m[m.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",m[m.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",m[m.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",m[m.INVALID_TAG=23]="INVALID_TAG",m[m.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",m[m.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",m[m.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(S||(S={}));var g;(function(m){m[m.literal=0]="literal",m[m.argument=1]="argument",m[m.number=2]="number",m[m.date=3]="date",m[m.time=4]="time",m[m.select=5]="select",m[m.plural=6]="plural",m[m.pound=7]="pound",m[m.tag=8]="tag"})(g||(g={}));var I;(function(m){m[m.number=0]="number",m[m.dateTime=1]="dateTime"})(I||(I={}));function k(m){return m.type===g.literal}function P(m){return m.type===g.argument}function D(m){return m.type===g.number}function oe(m){return m.type===g.date}function he(m){return m.type===g.time}function Re(m){return m.type===g.select}function re(m){return m.type===g.plural}function Ee(m){return m.type===g.pound}function Ve(m){return m.type===g.tag}function Xe(m){return!!(m&&typeof m=="object"&&m.type===I.number)}function Ze(m){return!!(m&&typeof m=="object"&&m.type===I.dateTime)}function ht(m){return{type:g.literal,value:m}}function Ct(m,Z){return{type:g.number,value:m,style:Z}}var Bt=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,pr=/[\t-\r \x85\u200E\u200F\u2028\u2029]/,$r=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function tn(m){var Z={};return m.replace($r,function(te){var ae=te.length;switch(te[0]){case"G":Z.era=ae===4?"long":ae===5?"narrow":"short";break;case"y":Z.year=ae===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":Z.month=["numeric","2-digit","short","long","narrow"][ae-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":Z.day=["numeric","2-digit"][ae-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":Z.weekday=ae===4?"short":ae===5?"narrow":"short";break;case"e":if(ae<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");Z.weekday=["short","long","narrow","short"][ae-4];break;case"c":if(ae<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");Z.weekday=["short","long","narrow","short"][ae-4];break;case"a":Z.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":Z.hourCycle="h12",Z.hour=["numeric","2-digit"][ae-1];break;case"H":Z.hourCycle="h23",Z.hour=["numeric","2-digit"][ae-1];break;case"K":Z.hourCycle="h11",Z.hour=["numeric","2-digit"][ae-1];break;case"k":Z.hourCycle="h24",Z.hour=["numeric","2-digit"][ae-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":Z.minute=["numeric","2-digit"][ae-1];break;case"s":Z.second=["numeric","2-digit"][ae-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":Z.timeZoneName=ae<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),Z}var tt=function(m,Z){return tt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(te,ae){te.__proto__=ae}||function(te,ae){for(var ce in ae)Object.prototype.hasOwnProperty.call(ae,ce)&&(te[ce]=ae[ce])},tt(m,Z)};function Ie(m,Z){if(typeof Z!="function"&&Z!==null)throw new TypeError("Class extends value "+String(Z)+" is not a constructor or null");tt(m,Z);function te(){this.constructor=m}m.prototype=Z===null?Object.create(Z):(te.prototype=Z.prototype,new te)}var be=function(){return be=Object.assign||function(Z){for(var te,ae=1,ce=arguments.length;ae<ce;ae++){te=arguments[ae];for(var Ae in te)Object.prototype.hasOwnProperty.call(te,Ae)&&(Z[Ae]=te[Ae])}return Z},be.apply(this,arguments)};function ye(m,Z){var te={};for(var ae in m)Object.prototype.hasOwnProperty.call(m,ae)&&Z.indexOf(ae)<0&&(te[ae]=m[ae]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function")for(var ce=0,ae=Object.getOwnPropertySymbols(m);ce<ae.length;ce++)Z.indexOf(ae[ce])<0&&Object.prototype.propertyIsEnumerable.call(m,ae[ce])&&(te[ae[ce]]=m[ae[ce]]);return te}function je(m,Z,te,ae){var ce=arguments.length,Ae=ce<3?Z:ae===null?ae=Object.getOwnPropertyDescriptor(Z,te):ae,Je;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")Ae=Reflect.decorate(m,Z,te,ae);else for(var Et=m.length-1;Et>=0;Et--)(Je=m[Et])&&(Ae=(ce<3?Je(Ae):ce>3?Je(Z,te,Ae):Je(Z,te))||Ae);return ce>3&&Ae&&Object.defineProperty(Z,te,Ae),Ae}function fe(m,Z){return function(te,ae){Z(te,ae,m)}}function me(m,Z,te,ae,ce,Ae){function Je(_n){if(_n!==void 0&&typeof _n!="function")throw new TypeError("Function expected");return _n}for(var Et=ae.kind,vr=Et==="getter"?"get":Et==="setter"?"set":"value",rt=!Z&&m?ae.static?m:m.prototype:null,tr=Z||(rt?Object.getOwnPropertyDescriptor(rt,ae.name):{}),Qt,Jt=!1,Sr=te.length-1;Sr>=0;Sr--){var Br={};for(var Zr in ae)Br[Zr]=Zr==="access"?{}:ae[Zr];for(var Zr in ae.access)Br.access[Zr]=ae.access[Zr];Br.addInitializer=function(_n){if(Jt)throw new TypeError("Cannot add initializers after decoration has completed");Ae.push(Je(_n||null))};var fn=(0,te[Sr])(Et==="accessor"?{get:tr.get,set:tr.set}:tr[vr],Br);if(Et==="accessor"){if(fn===void 0)continue;if(fn===null||typeof fn!="object")throw new TypeError("Object expected");(Qt=Je(fn.get))&&(tr.get=Qt),(Qt=Je(fn.set))&&(tr.set=Qt),(Qt=Je(fn.init))&&ce.push(Qt)}else(Qt=Je(fn))&&(Et==="field"?ce.push(Qt):tr[vr]=Qt)}rt&&Object.defineProperty(rt,ae.name,tr),Jt=!0}function de(m,Z,te){for(var ae=arguments.length>2,ce=0;ce<Z.length;ce++)te=ae?Z[ce].call(m,te):Z[ce].call(m);return ae?te:void 0}function ge(m){return typeof m=="symbol"?m:"".concat(m)}function Me(m,Z,te){return typeof Z=="symbol"&&(Z=Z.description?"[".concat(Z.description,"]"):""),Object.defineProperty(m,"name",{configurable:!0,value:te?"".concat(te," ",Z):Z})}function st(m,Z){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(m,Z)}function it(m,Z,te,ae){function ce(Ae){return Ae instanceof te?Ae:new te(function(Je){Je(Ae)})}return new(te||(te=Promise))(function(Ae,Je){function Et(tr){try{rt(ae.next(tr))}catch(Qt){Je(Qt)}}function vr(tr){try{rt(ae.throw(tr))}catch(Qt){Je(Qt)}}function rt(tr){tr.done?Ae(tr.value):ce(tr.value).then(Et,vr)}rt((ae=ae.apply(m,Z||[])).next())})}function ft(m,Z){var te={label:0,sent:function(){if(Ae[0]&1)throw Ae[1];return Ae[1]},trys:[],ops:[]},ae,ce,Ae,Je;return Je={next:Et(0),throw:Et(1),return:Et(2)},typeof Symbol=="function"&&(Je[Symbol.iterator]=function(){return this}),Je;function Et(rt){return function(tr){return vr([rt,tr])}}function vr(rt){if(ae)throw new TypeError("Generator is already executing.");for(;Je&&(Je=0,rt[0]&&(te=0)),te;)try{if(ae=1,ce&&(Ae=rt[0]&2?ce.return:rt[0]?ce.throw||((Ae=ce.return)&&Ae.call(ce),0):ce.next)&&!(Ae=Ae.call(ce,rt[1])).done)return Ae;switch(ce=0,Ae&&(rt=[rt[0]&2,Ae.value]),rt[0]){case 0:case 1:Ae=rt;break;case 4:return te.label++,{value:rt[1],done:!1};case 5:te.label++,ce=rt[1],rt=[0];continue;case 7:rt=te.ops.pop(),te.trys.pop();continue;default:if(Ae=te.trys,!(Ae=Ae.length>0&&Ae[Ae.length-1])&&(rt[0]===6||rt[0]===2)){te=0;continue}if(rt[0]===3&&(!Ae||rt[1]>Ae[0]&&rt[1]<Ae[3])){te.label=rt[1];break}if(rt[0]===6&&te.label<Ae[1]){te.label=Ae[1],Ae=rt;break}if(Ae&&te.label<Ae[2]){te.label=Ae[2],te.ops.push(rt);break}Ae[2]&&te.ops.pop(),te.trys.pop();continue}rt=Z.call(m,te)}catch(tr){rt=[6,tr],ce=0}finally{ae=Ae=0}if(rt[0]&5)throw rt[1];return{value:rt[0]?rt[1]:void 0,done:!0}}}var Mt=Object.create?function(m,Z,te,ae){ae===void 0&&(ae=te);var ce=Object.getOwnPropertyDescriptor(Z,te);(!ce||("get"in ce?!Z.__esModule:ce.writable||ce.configurable))&&(ce={enumerable:!0,get:function(){return Z[te]}}),Object.defineProperty(m,ae,ce)}:function(m,Z,te,ae){ae===void 0&&(ae=te),m[ae]=Z[te]};function Ft(m,Z){for(var te in m)te!=="default"&&!Object.prototype.hasOwnProperty.call(Z,te)&&Mt(Z,m,te)}function ee(m){var Z=typeof Symbol=="function"&&Symbol.iterator,te=Z&&m[Z],ae=0;if(te)return te.call(m);if(m&&typeof m.length=="number")return{next:function(){return m&&ae>=m.length&&(m=void 0),{value:m&&m[ae++],done:!m}}};throw new TypeError(Z?"Object is not iterable.":"Symbol.iterator is not defined.")}function we(m,Z){var te=typeof Symbol=="function"&&m[Symbol.iterator];if(!te)return m;var ae=te.call(m),ce,Ae=[],Je;try{for(;(Z===void 0||Z-- >0)&&!(ce=ae.next()).done;)Ae.push(ce.value)}catch(Et){Je={error:Et}}finally{try{ce&&!ce.done&&(te=ae.return)&&te.call(ae)}finally{if(Je)throw Je.error}}return Ae}function se(){for(var m=[],Z=0;Z<arguments.length;Z++)m=m.concat(we(arguments[Z]));return m}function _e(){for(var m=0,Z=0,te=arguments.length;Z<te;Z++)m+=arguments[Z].length;for(var ae=Array(m),ce=0,Z=0;Z<te;Z++)for(var Ae=arguments[Z],Je=0,Et=Ae.length;Je<Et;Je++,ce++)ae[ce]=Ae[Je];return ae}function et(m,Z,te){if(te||arguments.length===2)for(var ae=0,ce=Z.length,Ae;ae<ce;ae++)(Ae||!(ae in Z))&&(Ae||(Ae=Array.prototype.slice.call(Z,0,ae)),Ae[ae]=Z[ae]);return m.concat(Ae||Array.prototype.slice.call(Z))}function at(m){return this instanceof at?(this.v=m,this):new at(m)}function ut(m,Z,te){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var ae=te.apply(m,Z||[]),ce,Ae=[];return ce={},Je("next"),Je("throw"),Je("return"),ce[Symbol.asyncIterator]=function(){return this},ce;function Je(Jt){ae[Jt]&&(ce[Jt]=function(Sr){return new Promise(function(Br,Zr){Ae.push([Jt,Sr,Br,Zr])>1||Et(Jt,Sr)})})}function Et(Jt,Sr){try{vr(ae[Jt](Sr))}catch(Br){Qt(Ae[0][3],Br)}}function vr(Jt){Jt.value instanceof at?Promise.resolve(Jt.value.v).then(rt,tr):Qt(Ae[0][2],Jt)}function rt(Jt){Et("next",Jt)}function tr(Jt){Et("throw",Jt)}function Qt(Jt,Sr){Jt(Sr),Ae.shift(),Ae.length&&Et(Ae[0][0],Ae[0][1])}}function Lt(m){var Z,te;return Z={},ae("next"),ae("throw",function(ce){throw ce}),ae("return"),Z[Symbol.iterator]=function(){return this},Z;function ae(ce,Ae){Z[ce]=m[ce]?function(Je){return(te=!te)?{value:at(m[ce](Je)),done:!1}:Ae?Ae(Je):Je}:Ae}}function Qe(m){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var Z=m[Symbol.asyncIterator],te;return Z?Z.call(m):(m=typeof ee=="function"?ee(m):m[Symbol.iterator](),te={},ae("next"),ae("throw"),ae("return"),te[Symbol.asyncIterator]=function(){return this},te);function ae(Ae){te[Ae]=m[Ae]&&function(Je){return new Promise(function(Et,vr){Je=m[Ae](Je),ce(Et,vr,Je.done,Je.value)})}}function ce(Ae,Je,Et,vr){Promise.resolve(vr).then(function(rt){Ae({value:rt,done:Et})},Je)}}function dt(m,Z){return Object.defineProperty?Object.defineProperty(m,"raw",{value:Z}):m.raw=Z,m}var It=Object.create?function(m,Z){Object.defineProperty(m,"default",{enumerable:!0,value:Z})}:function(m,Z){m.default=Z};function Ue(m){if(m&&m.__esModule)return m;var Z={};if(m!=null)for(var te in m)te!=="default"&&Object.prototype.hasOwnProperty.call(m,te)&&Mt(Z,m,te);return It(Z,m),Z}function Ge(m){return m&&m.__esModule?m:{default:m}}function nt(m,Z,te,ae){if(te==="a"&&!ae)throw new TypeError("Private accessor was defined without a getter");if(typeof Z=="function"?m!==Z||!ae:!Z.has(m))throw new TypeError("Cannot read private member from an object whose class did not declare it");return te==="m"?ae:te==="a"?ae.call(m):ae?ae.value:Z.get(m)}function bt(m,Z,te,ae,ce){if(ae==="m")throw new TypeError("Private method is not writable");if(ae==="a"&&!ce)throw new TypeError("Private accessor was defined without a setter");if(typeof Z=="function"?m!==Z||!ce:!Z.has(m))throw new TypeError("Cannot write private member to an object whose class did not declare it");return ae==="a"?ce.call(m,te):ce?ce.value=te:Z.set(m,te),te}function ot(m,Z){if(Z===null||typeof Z!="object"&&typeof Z!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof m=="function"?Z===m:m.has(Z)}var kt=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function Wt(m){if(m.length===0)throw new Error("Number skeleton cannot be empty");for(var Z=m.split(kt).filter(function(Jt){return Jt.length>0}),te=[],ae=0,ce=Z;ae<ce.length;ae++){var Ae=ce[ae],Je=Ae.split("/");if(Je.length===0)throw new Error("Invalid number skeleton");for(var Et=Je[0],vr=Je.slice(1),rt=0,tr=vr;rt<tr.length;rt++){var Qt=tr[rt];if(Qt.length===0)throw new Error("Invalid number skeleton")}te.push({stem:Et,options:vr})}return te}function Kt(m){return m.replace(/^(.*?)-/,"")}var Cr=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,Pr=/^(@+)?(\+|#+)?[rs]?$/g,xn=/(\*)(0+)|(#+)(0+)|(0+)/g,Pn=/^(0+)$/;function gn(m){var Z={};return m[m.length-1]==="r"?Z.roundingPriority="morePrecision":m[m.length-1]==="s"&&(Z.roundingPriority="lessPrecision"),m.replace(Pr,function(te,ae,ce){return typeof ce!="string"?(Z.minimumSignificantDigits=ae.length,Z.maximumSignificantDigits=ae.length):ce==="+"?Z.minimumSignificantDigits=ae.length:ae[0]==="#"?Z.maximumSignificantDigits=ae.length:(Z.minimumSignificantDigits=ae.length,Z.maximumSignificantDigits=ae.length+(typeof ce=="string"?ce.length:0)),""}),Z}function ln(m){switch(m){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function Sn(m){var Z;if(m[0]==="E"&&m[1]==="E"?(Z={notation:"engineering"},m=m.slice(2)):m[0]==="E"&&(Z={notation:"scientific"},m=m.slice(1)),Z){var te=m.slice(0,2);if(te==="+!"?(Z.signDisplay="always",m=m.slice(2)):te==="+?"&&(Z.signDisplay="exceptZero",m=m.slice(2)),!Pn.test(m))throw new Error("Malformed concise eng/scientific notation");Z.minimumIntegerDigits=m.length}return Z}function lr(m){var Z={},te=ln(m);return te||Z}function cn(m){for(var Z={},te=0,ae=m;te<ae.length;te++){var ce=ae[te];switch(ce.stem){case"percent":case"%":Z.style="percent";continue;case"%x100":Z.style="percent",Z.scale=100;continue;case"currency":Z.style="currency",Z.currency=ce.options[0];continue;case"group-off":case",_":Z.useGrouping=!1;continue;case"precision-integer":case".":Z.maximumFractionDigits=0;continue;case"measure-unit":case"unit":Z.style="unit",Z.unit=Kt(ce.options[0]);continue;case"compact-short":case"K":Z.notation="compact",Z.compactDisplay="short";continue;case"compact-long":case"KK":Z.notation="compact",Z.compactDisplay="long";continue;case"scientific":Z=be(be(be({},Z),{notation:"scientific"}),ce.options.reduce(function(vr,rt){return be(be({},vr),lr(rt))},{}));continue;case"engineering":Z=be(be(be({},Z),{notation:"engineering"}),ce.options.reduce(function(vr,rt){return be(be({},vr),lr(rt))},{}));continue;case"notation-simple":Z.notation="standard";continue;case"unit-width-narrow":Z.currencyDisplay="narrowSymbol",Z.unitDisplay="narrow";continue;case"unit-width-short":Z.currencyDisplay="code",Z.unitDisplay="short";continue;case"unit-width-full-name":Z.currencyDisplay="name",Z.unitDisplay="long";continue;case"unit-width-iso-code":Z.currencyDisplay="symbol";continue;case"scale":Z.scale=parseFloat(ce.options[0]);continue;case"integer-width":if(ce.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");ce.options[0].replace(xn,function(vr,rt,tr,Qt,Jt,Sr){if(rt)Z.minimumIntegerDigits=tr.length;else{if(Qt&&Jt)throw new Error("We currently do not support maximum integer digits");if(Sr)throw new Error("We currently do not support exact integer digits")}return""});continue}if(Pn.test(ce.stem)){Z.minimumIntegerDigits=ce.stem.length;continue}if(Cr.test(ce.stem)){if(ce.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");ce.stem.replace(Cr,function(vr,rt,tr,Qt,Jt,Sr){return tr==="*"?Z.minimumFractionDigits=rt.length:Qt&&Qt[0]==="#"?Z.maximumFractionDigits=Qt.length:Jt&&Sr?(Z.minimumFractionDigits=Jt.length,Z.maximumFractionDigits=Jt.length+Sr.length):(Z.minimumFractionDigits=rt.length,Z.maximumFractionDigits=rt.length),""});var Ae=ce.options[0];Ae==="w"?Z=be(be({},Z),{trailingZeroDisplay:"stripIfInteger"}):Ae&&(Z=be(be({},Z),gn(Ae)));continue}if(Pr.test(ce.stem)){Z=be(be({},Z),gn(ce.stem));continue}var Je=ln(ce.stem);Je&&(Z=be(be({},Z),Je));var Et=Sn(ce.stem);Et&&(Z=be(be({},Z),Et))}return Z}var vn={AX:["H"],BQ:["H"],CP:["H"],CZ:["H"],DK:["H"],FI:["H"],ID:["H"],IS:["H"],ML:["H"],NE:["H"],RU:["H"],SE:["H"],SJ:["H"],SK:["H"],AS:["h","H"],BT:["h","H"],DJ:["h","H"],ER:["h","H"],GH:["h","H"],IN:["h","H"],LS:["h","H"],PG:["h","H"],PW:["h","H"],SO:["h","H"],TO:["h","H"],VU:["h","H"],WS:["h","H"],"001":["H","h"],AL:["h","H","hB"],TD:["h","H","hB"],"ca-ES":["H","h","hB"],CF:["H","h","hB"],CM:["H","h","hB"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],LU:["H","h","hB"],NP:["H","h","hB"],PF:["H","h","hB"],SC:["H","h","hB"],SM:["H","h","hB"],SN:["H","h","hB"],TF:["H","h","hB"],VA:["H","h","hB"],CY:["h","H","hb","hB"],GR:["h","H","hb","hB"],CO:["h","H","hB","hb"],DO:["h","H","hB","hb"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],NA:["h","H","hB","hb"],PA:["h","H","hB","hb"],PR:["h","H","hB","hb"],VE:["h","H","hB","hb"],AC:["H","h","hb","hB"],AI:["H","h","hb","hB"],BW:["H","h","hb","hB"],BZ:["H","h","hb","hB"],CC:["H","h","hb","hB"],CK:["H","h","hb","hB"],CX:["H","h","hb","hB"],DG:["H","h","hb","hB"],FK:["H","h","hb","hB"],GB:["H","h","hb","hB"],GG:["H","h","hb","hB"],GI:["H","h","hb","hB"],IE:["H","h","hb","hB"],IM:["H","h","hb","hB"],IO:["H","h","hb","hB"],JE:["H","h","hb","hB"],LT:["H","h","hb","hB"],MK:["H","h","hb","hB"],MN:["H","h","hb","hB"],MS:["H","h","hb","hB"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],PN:["H","h","hb","hB"],SH:["H","h","hb","hB"],SX:["H","h","hb","hB"],TA:["H","h","hb","hB"],ZA:["H","h","hb","hB"],"af-ZA":["H","h","hB","hb"],AR:["H","h","hB","hb"],CL:["H","h","hB","hb"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],EA:["H","h","hB","hb"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],GT:["H","h","hB","hb"],HN:["H","h","hB","hb"],IC:["H","h","hB","hb"],KG:["H","h","hB","hb"],KM:["H","h","hB","hb"],LK:["H","h","hB","hb"],MA:["H","h","hB","hb"],MX:["H","h","hB","hb"],NI:["H","h","hB","hb"],PY:["H","h","hB","hb"],SV:["H","h","hB","hb"],UY:["H","h","hB","hb"],JP:["H","h","K"],AD:["H","hB"],AM:["H","hB"],AO:["H","hB"],AT:["H","hB"],AW:["H","hB"],BE:["H","hB"],BF:["H","hB"],BJ:["H","hB"],BL:["H","hB"],BR:["H","hB"],CG:["H","hB"],CI:["H","hB"],CV:["H","hB"],DE:["H","hB"],EE:["H","hB"],FR:["H","hB"],GA:["H","hB"],GF:["H","hB"],GN:["H","hB"],GP:["H","hB"],GW:["H","hB"],HR:["H","hB"],IL:["H","hB"],IT:["H","hB"],KZ:["H","hB"],MC:["H","hB"],MD:["H","hB"],MF:["H","hB"],MQ:["H","hB"],MZ:["H","hB"],NC:["H","hB"],NL:["H","hB"],PM:["H","hB"],PT:["H","hB"],RE:["H","hB"],RO:["H","hB"],SI:["H","hB"],SR:["H","hB"],ST:["H","hB"],TG:["H","hB"],TR:["H","hB"],WF:["H","hB"],YT:["H","hB"],BD:["h","hB","H"],PK:["h","hB","H"],AZ:["H","hB","h"],BA:["H","hB","h"],BG:["H","hB","h"],CH:["H","hB","h"],GE:["H","hB","h"],LI:["H","hB","h"],ME:["H","hB","h"],RS:["H","hB","h"],UA:["H","hB","h"],UZ:["H","hB","h"],XK:["H","hB","h"],AG:["h","hb","H","hB"],AU:["h","hb","H","hB"],BB:["h","hb","H","hB"],BM:["h","hb","H","hB"],BS:["h","hb","H","hB"],CA:["h","hb","H","hB"],DM:["h","hb","H","hB"],"en-001":["h","hb","H","hB"],FJ:["h","hb","H","hB"],FM:["h","hb","H","hB"],GD:["h","hb","H","hB"],GM:["h","hb","H","hB"],GU:["h","hb","H","hB"],GY:["h","hb","H","hB"],JM:["h","hb","H","hB"],KI:["h","hb","H","hB"],KN:["h","hb","H","hB"],KY:["h","hb","H","hB"],LC:["h","hb","H","hB"],LR:["h","hb","H","hB"],MH:["h","hb","H","hB"],MP:["h","hb","H","hB"],MW:["h","hb","H","hB"],NZ:["h","hb","H","hB"],SB:["h","hb","H","hB"],SG:["h","hb","H","hB"],SL:["h","hb","H","hB"],SS:["h","hb","H","hB"],SZ:["h","hb","H","hB"],TC:["h","hb","H","hB"],TT:["h","hb","H","hB"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],VC:["h","hb","H","hB"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],ZM:["h","hb","H","hB"],BO:["H","hB","h","hb"],EC:["H","hB","h","hb"],ES:["H","hB","h","hb"],GQ:["H","hB","h","hb"],PE:["H","hB","h","hb"],AE:["h","hB","hb","H"],"ar-001":["h","hB","hb","H"],BH:["h","hB","hb","H"],DZ:["h","hB","hb","H"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],HK:["h","hB","hb","H"],IQ:["h","hB","hb","H"],JO:["h","hB","hb","H"],KW:["h","hB","hb","H"],LB:["h","hB","hb","H"],LY:["h","hB","hb","H"],MO:["h","hB","hb","H"],MR:["h","hB","hb","H"],OM:["h","hB","hb","H"],PH:["h","hB","hb","H"],PS:["h","hB","hb","H"],QA:["h","hB","hb","H"],SA:["h","hB","hb","H"],SD:["h","hB","hb","H"],SY:["h","hB","hb","H"],TN:["h","hB","hb","H"],YE:["h","hB","hb","H"],AF:["H","hb","hB","h"],LA:["H","hb","hB","h"],CN:["H","hB","hb","h"],LV:["H","hB","hb","h"],TL:["H","hB","hb","h"],"zu-ZA":["H","hB","hb","h"],CD:["hB","H"],IR:["hB","H"],"hi-IN":["hB","h","H"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"te-IN":["hB","h","H"],KH:["hB","h","H","hb"],"ta-IN":["hB","h","hb","H"],BN:["hb","hB","h","H"],MY:["hb","hB","h","H"],ET:["hB","hb","h","H"],"gu-IN":["hB","hb","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],TW:["hB","hb","h","H"],KE:["hB","hb","H","h"],MM:["hB","hb","H","h"],TZ:["hB","hb","H","h"],UG:["hB","hb","H","h"]};function pa(m,Z){for(var te="",ae=0;ae<m.length;ae++){var ce=m.charAt(ae);if(ce==="j"){for(var Ae=0;ae+1<m.length&&m.charAt(ae+1)===ce;)Ae++,ae++;var Je=1+(Ae&1),Et=Ae<2?1:3+(Ae>>1),vr="a",rt=va(Z);for((rt=="H"||rt=="k")&&(Et=0);Et-- >0;)te+=vr;for(;Je-- >0;)te=rt+te}else ce==="J"?te+="H":te+=ce}return te}function va(m){var Z=m.hourCycle;if(Z===void 0&&m.hourCycles&&m.hourCycles.length&&(Z=m.hourCycles[0]),Z)switch(Z){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var te=m.language,ae;te!=="root"&&(ae=m.maximize().region);var ce=vn[ae||""]||vn[te||""]||vn["".concat(te,"-001")]||vn["001"];return ce[0]}var dn,ua=new RegExp("^".concat(Bt.source,"*")),Wn=new RegExp("".concat(Bt.source,"*$"));function yr(m,Z){return{start:m,end:Z}}var Sa=!!String.prototype.startsWith,Ma=!!String.fromCodePoint,go=!!Object.fromEntries,Ea=!!String.prototype.codePointAt,Fo=!!String.prototype.trimStart,yo=!!String.prototype.trimEnd,mn=!!Number.isSafeInteger,zo=mn?Number.isSafeInteger:function(m){return typeof m=="number"&&isFinite(m)&&Math.floor(m)===m&&Math.abs(m)<=9007199254740991},Uo=!0;try{var Tu=Rn("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");Uo=((dn=Tu.exec("a"))===null||dn===void 0?void 0:dn[0])==="a"}catch(m){Uo=!1}var ka=Sa?function(Z,te,ae){return Z.startsWith(te,ae)}:function(Z,te,ae){return Z.slice(ae,ae+te.length)===te},bo=Ma?String.fromCodePoint:function(){for(var Z=[],te=0;te<arguments.length;te++)Z[te]=arguments[te];for(var ae="",ce=Z.length,Ae=0,Je;ce>Ae;){if(Je=Z[Ae++],Je>1114111)throw RangeError(Je+" is not a valid code point");ae+=Je<65536?String.fromCharCode(Je):String.fromCharCode(((Je-=65536)>>10)+55296,Je%1024+56320)}return ae},xi=go?Object.fromEntries:function(Z){for(var te={},ae=0,ce=Z;ae<ce.length;ae++){var Ae=ce[ae],Je=Ae[0],Et=Ae[1];te[Je]=Et}return te},wo=Ea?function(Z,te){return Z.codePointAt(te)}:function(Z,te){var ae=Z.length;if(!(te<0||te>=ae)){var ce=Z.charCodeAt(te),Ae;return ce<55296||ce>56319||te+1===ae||(Ae=Z.charCodeAt(te+1))<56320||Ae>57343?ce:(ce-55296<<10)+(Ae-56320)+65536}},ma=Fo?function(Z){return Z.trimStart()}:function(Z){return Z.replace(ua,"")},Ou=yo?function(Z){return Z.trimEnd()}:function(Z){return Z.replace(Wn,"")};function Rn(m,Z){return new RegExp(m,Z)}var xo;if(Uo){var Si=Rn("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");xo=function(Z,te){var ae;Si.lastIndex=te;var ce=Si.exec(Z);return(ae=ce[1])!==null&&ae!==void 0?ae:""}}else xo=function(Z,te){for(var ae=[];;){var ce=wo(Z,te);if(ce===void 0||$o(ce)||Iu(ce))break;ae.push(ce),te+=ce>=65536?2:1}return bo.apply(void 0,ae)};var ei=function(){function m(Z,te){te===void 0&&(te={}),this.message=Z,this.position={offset:0,line:1,column:1},this.ignoreTag=!!te.ignoreTag,this.locale=te.locale,this.requiresOtherClause=!!te.requiresOtherClause,this.shouldParseSkeletons=!!te.shouldParseSkeletons}return m.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},m.prototype.parseMessage=function(Z,te,ae){for(var ce=[];!this.isEOF();){var Ae=this.char();if(Ae===123){var Je=this.parseArgument(Z,ae);if(Je.err)return Je;ce.push(Je.val)}else{if(Ae===125&&Z>0)break;if(Ae===35&&(te==="plural"||te==="selectordinal")){var Et=this.clonePosition();this.bump(),ce.push({type:g.pound,location:yr(Et,this.clonePosition())})}else if(Ae===60&&!this.ignoreTag&&this.peek()===47){if(ae)break;return this.error(S.UNMATCHED_CLOSING_TAG,yr(this.clonePosition(),this.clonePosition()))}else if(Ae===60&&!this.ignoreTag&&ro(this.peek()||0)){var Je=this.parseTag(Z,te);if(Je.err)return Je;ce.push(Je.val)}else{var Je=this.parseLiteral(Z,te);if(Je.err)return Je;ce.push(Je.val)}}}return{val:ce,err:null}},m.prototype.parseTag=function(Z,te){var ae=this.clonePosition();this.bump();var ce=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:g.literal,value:"<".concat(ce,"/>"),location:yr(ae,this.clonePosition())},err:null};if(this.bumpIf(">")){var Ae=this.parseMessage(Z+1,te,!0);if(Ae.err)return Ae;var Je=Ae.val,Et=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!ro(this.char()))return this.error(S.INVALID_TAG,yr(Et,this.clonePosition()));var vr=this.clonePosition(),rt=this.parseTagName();return ce!==rt?this.error(S.UNMATCHED_CLOSING_TAG,yr(vr,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:g.tag,value:ce,children:Je,location:yr(ae,this.clonePosition())},err:null}:this.error(S.INVALID_TAG,yr(Et,this.clonePosition())))}else return this.error(S.UNCLOSED_TAG,yr(ae,this.clonePosition()))}else return this.error(S.INVALID_TAG,yr(ae,this.clonePosition()))},m.prototype.parseTagName=function(){var Z=this.offset();for(this.bump();!this.isEOF()&&So(this.char());)this.bump();return this.message.slice(Z,this.offset())},m.prototype.parseLiteral=function(Z,te){for(var ae=this.clonePosition(),ce="";;){var Ae=this.tryParseQuote(te);if(Ae){ce+=Ae;continue}var Je=this.tryParseUnquoted(Z,te);if(Je){ce+=Je;continue}var Et=this.tryParseLeftAngleBracket();if(Et){ce+=Et;continue}break}var vr=yr(ae,this.clonePosition());return{val:{type:g.literal,value:ce,location:vr},err:null}},m.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!Ei(this.peek()||0))?(this.bump(),"<"):null},m.prototype.tryParseQuote=function(Z){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(Z==="plural"||Z==="selectordinal")break;return null;default:return null}this.bump();var te=[this.char()];for(this.bump();!this.isEOF();){var ae=this.char();if(ae===39)if(this.peek()===39)te.push(39),this.bump();else{this.bump();break}else te.push(ae);this.bump()}return bo.apply(void 0,te)},m.prototype.tryParseUnquoted=function(Z,te){if(this.isEOF())return null;var ae=this.char();return ae===60||ae===123||ae===35&&(te==="plural"||te==="selectordinal")||ae===125&&Z>0?null:(this.bump(),bo(ae))},m.prototype.parseArgument=function(Z,te){var ae=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(S.EXPECT_ARGUMENT_CLOSING_BRACE,yr(ae,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(S.EMPTY_ARGUMENT,yr(ae,this.clonePosition()));var ce=this.parseIdentifierIfPossible().value;if(!ce)return this.error(S.MALFORMED_ARGUMENT,yr(ae,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(S.EXPECT_ARGUMENT_CLOSING_BRACE,yr(ae,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:g.argument,value:ce,location:yr(ae,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(S.EXPECT_ARGUMENT_CLOSING_BRACE,yr(ae,this.clonePosition())):this.parseArgumentOptions(Z,te,ce,ae);default:return this.error(S.MALFORMED_ARGUMENT,yr(ae,this.clonePosition()))}},m.prototype.parseIdentifierIfPossible=function(){var Z=this.clonePosition(),te=this.offset(),ae=xo(this.message,te),ce=te+ae.length;this.bumpTo(ce);var Ae=this.clonePosition(),Je=yr(Z,Ae);return{value:ae,location:Je}},m.prototype.parseArgumentOptions=function(Z,te,ae,ce){var Ae,Je=this.clonePosition(),Et=this.parseIdentifierIfPossible().value,vr=this.clonePosition();switch(Et){case"":return this.error(S.EXPECT_ARGUMENT_TYPE,yr(Je,vr));case"number":case"date":case"time":{this.bumpSpace();var rt=null;if(this.bumpIf(",")){this.bumpSpace();var tr=this.clonePosition(),Qt=this.parseSimpleArgStyleIfPossible();if(Qt.err)return Qt;var Jt=Ou(Qt.val);if(Jt.length===0)return this.error(S.EXPECT_ARGUMENT_STYLE,yr(this.clonePosition(),this.clonePosition()));var Sr=yr(tr,this.clonePosition());rt={style:Jt,styleLocation:Sr}}var Br=this.tryParseArgumentClose(ce);if(Br.err)return Br;var Zr=yr(ce,this.clonePosition());if(rt&&ka(rt==null?void 0:rt.style,"::",0)){var fn=ma(rt.style.slice(2));if(Et==="number"){var Qt=this.parseNumberSkeletonFromString(fn,rt.styleLocation);return Qt.err?Qt:{val:{type:g.number,value:ae,location:Zr,style:Qt.val},err:null}}else{if(fn.length===0)return this.error(S.EXPECT_DATE_TIME_SKELETON,Zr);var _n=fn;this.locale&&(_n=pa(fn,this.locale));var Jt={type:I.dateTime,pattern:_n,location:rt.styleLocation,parsedOptions:this.shouldParseSkeletons?tn(_n):{}},Za=Et==="date"?g.date:g.time;return{val:{type:Za,value:ae,location:Zr,style:Jt},err:null}}}return{val:{type:Et==="number"?g.number:Et==="date"?g.date:g.time,value:ae,location:Zr,style:(Ae=rt==null?void 0:rt.style)!==null&&Ae!==void 0?Ae:null},err:null}}case"plural":case"selectordinal":case"select":{var Ti=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(S.EXPECT_SELECT_ARGUMENT_OPTIONS,yr(Ti,o({},Ti)));this.bumpSpace();var no=this.parseIdentifierIfPossible(),Eo=0;if(Et!=="select"&&no.value==="offset"){if(!this.bumpIf(":"))return this.error(S.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,yr(this.clonePosition(),this.clonePosition()));this.bumpSpace();var Qt=this.tryParseDecimalInteger(S.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,S.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(Qt.err)return Qt;this.bumpSpace(),no=this.parseIdentifierIfPossible(),Eo=Qt.val}var ao=this.tryParsePluralOrSelectOptions(Z,Et,te,no);if(ao.err)return ao;var Br=this.tryParseArgumentClose(ce);if(Br.err)return Br;var ti=yr(ce,this.clonePosition());return Et==="select"?{val:{type:g.select,value:ae,options:xi(ao.val),location:ti},err:null}:{val:{type:g.plural,value:ae,options:xi(ao.val),offset:Eo,pluralType:Et==="plural"?"cardinal":"ordinal",location:ti},err:null}}default:return this.error(S.INVALID_ARGUMENT_TYPE,yr(Je,vr))}},m.prototype.tryParseArgumentClose=function(Z){return this.isEOF()||this.char()!==125?this.error(S.EXPECT_ARGUMENT_CLOSING_BRACE,yr(Z,this.clonePosition())):(this.bump(),{val:!0,err:null})},m.prototype.parseSimpleArgStyleIfPossible=function(){for(var Z=0,te=this.clonePosition();!this.isEOF();){var ae=this.char();switch(ae){case 39:{this.bump();var ce=this.clonePosition();if(!this.bumpUntil("'"))return this.error(S.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,yr(ce,this.clonePosition()));this.bump();break}case 123:{Z+=1,this.bump();break}case 125:{if(Z>0)Z-=1;else return{val:this.message.slice(te.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(te.offset,this.offset()),err:null}},m.prototype.parseNumberSkeletonFromString=function(Z,te){var ae=[];try{ae=Wt(Z)}catch(ce){return this.error(S.INVALID_NUMBER_SKELETON,te)}return{val:{type:I.number,tokens:ae,location:te,parsedOptions:this.shouldParseSkeletons?cn(ae):{}},err:null}},m.prototype.tryParsePluralOrSelectOptions=function(Z,te,ae,ce){for(var Ae,Je=!1,Et=[],vr=new Set,rt=ce.value,tr=ce.location;;){if(rt.length===0){var Qt=this.clonePosition();if(te!=="select"&&this.bumpIf("=")){var Jt=this.tryParseDecimalInteger(S.EXPECT_PLURAL_ARGUMENT_SELECTOR,S.INVALID_PLURAL_ARGUMENT_SELECTOR);if(Jt.err)return Jt;tr=yr(Qt,this.clonePosition()),rt=this.message.slice(Qt.offset,this.offset())}else break}if(vr.has(rt))return this.error(te==="select"?S.DUPLICATE_SELECT_ARGUMENT_SELECTOR:S.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,tr);rt==="other"&&(Je=!0),this.bumpSpace();var Sr=this.clonePosition();if(!this.bumpIf("{"))return this.error(te==="select"?S.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:S.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,yr(this.clonePosition(),this.clonePosition()));var Br=this.parseMessage(Z+1,te,ae);if(Br.err)return Br;var Zr=this.tryParseArgumentClose(Sr);if(Zr.err)return Zr;Et.push([rt,{value:Br.val,location:yr(Sr,this.clonePosition())}]),vr.add(rt),this.bumpSpace(),Ae=this.parseIdentifierIfPossible(),rt=Ae.value,tr=Ae.location}return Et.length===0?this.error(te==="select"?S.EXPECT_SELECT_ARGUMENT_SELECTOR:S.EXPECT_PLURAL_ARGUMENT_SELECTOR,yr(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!Je?this.error(S.MISSING_OTHER_CLAUSE,yr(this.clonePosition(),this.clonePosition())):{val:Et,err:null}},m.prototype.tryParseDecimalInteger=function(Z,te){var ae=1,ce=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(ae=-1);for(var Ae=!1,Je=0;!this.isEOF();){var Et=this.char();if(Et>=48&&Et<=57)Ae=!0,Je=Je*10+(Et-48),this.bump();else break}var vr=yr(ce,this.clonePosition());return Ae?(Je*=ae,zo(Je)?{val:Je,err:null}:this.error(te,vr)):this.error(Z,vr)},m.prototype.offset=function(){return this.position.offset},m.prototype.isEOF=function(){return this.offset()===this.message.length},m.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},m.prototype.char=function(){var Z=this.position.offset;if(Z>=this.message.length)throw Error("out of bound");var te=wo(this.message,Z);if(te===void 0)throw Error("Offset ".concat(Z," is at invalid UTF-16 code unit boundary"));return te},m.prototype.error=function(Z,te){return{val:null,err:{kind:Z,message:this.message,location:te}}},m.prototype.bump=function(){if(!this.isEOF()){var Z=this.char();Z===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=Z<65536?1:2)}},m.prototype.bumpIf=function(Z){if(ka(this.message,Z,this.offset())){for(var te=0;te<Z.length;te++)this.bump();return!0}return!1},m.prototype.bumpUntil=function(Z){var te=this.offset(),ae=this.message.indexOf(Z,te);return ae>=0?(this.bumpTo(ae),!0):(this.bumpTo(this.message.length),!1)},m.prototype.bumpTo=function(Z){if(this.offset()>Z)throw Error("targetOffset ".concat(Z," must be greater than or equal to the current offset ").concat(this.offset()));for(Z=Math.min(Z,this.message.length);;){var te=this.offset();if(te===Z)break;if(te>Z)throw Error("targetOffset ".concat(Z," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},m.prototype.bumpSpace=function(){for(;!this.isEOF()&&$o(this.char());)this.bump()},m.prototype.peek=function(){if(this.isEOF())return null;var Z=this.char(),te=this.offset(),ae=this.message.charCodeAt(te+(Z>=65536?2:1));return ae!=null?ae:null},m}();function ro(m){return m>=97&&m<=122||m>=65&&m<=90}function Ei(m){return ro(m)||m===47}function So(m){return m===45||m===46||m>=48&&m<=57||m===95||m>=97&&m<=122||m>=65&&m<=90||m==183||m>=192&&m<=214||m>=216&&m<=246||m>=248&&m<=893||m>=895&&m<=8191||m>=8204&&m<=8205||m>=8255&&m<=8256||m>=8304&&m<=8591||m>=11264&&m<=12271||m>=12289&&m<=55295||m>=63744&&m<=64975||m>=65008&&m<=65533||m>=65536&&m<=983039}function $o(m){return m>=9&&m<=13||m===32||m===133||m>=8206&&m<=8207||m===8232||m===8233}function Iu(m){return m>=33&&m<=35||m===36||m>=37&&m<=39||m===40||m===41||m===42||m===43||m===44||m===45||m>=46&&m<=47||m>=58&&m<=59||m>=60&&m<=62||m>=63&&m<=64||m===91||m===92||m===93||m===94||m===96||m===123||m===124||m===125||m===126||m===161||m>=162&&m<=165||m===166||m===167||m===169||m===171||m===172||m===174||m===176||m===177||m===182||m===187||m===191||m===215||m===247||m>=8208&&m<=8213||m>=8214&&m<=8215||m===8216||m===8217||m===8218||m>=8219&&m<=8220||m===8221||m===8222||m===8223||m>=8224&&m<=8231||m>=8240&&m<=8248||m===8249||m===8250||m>=8251&&m<=8254||m>=8257&&m<=8259||m===8260||m===8261||m===8262||m>=8263&&m<=8273||m===8274||m===8275||m>=8277&&m<=8286||m>=8592&&m<=8596||m>=8597&&m<=8601||m>=8602&&m<=8603||m>=8604&&m<=8607||m===8608||m>=8609&&m<=8610||m===8611||m>=8612&&m<=8613||m===8614||m>=8615&&m<=8621||m===8622||m>=8623&&m<=8653||m>=8654&&m<=8655||m>=8656&&m<=8657||m===8658||m===8659||m===8660||m>=8661&&m<=8691||m>=8692&&m<=8959||m>=8960&&m<=8967||m===8968||m===8969||m===8970||m===8971||m>=8972&&m<=8991||m>=8992&&m<=8993||m>=8994&&m<=9e3||m===9001||m===9002||m>=9003&&m<=9083||m===9084||m>=9085&&m<=9114||m>=9115&&m<=9139||m>=9140&&m<=9179||m>=9180&&m<=9185||m>=9186&&m<=9254||m>=9255&&m<=9279||m>=9280&&m<=9290||m>=9291&&m<=9311||m>=9472&&m<=9654||m===9655||m>=9656&&m<=9664||m===9665||m>=9666&&m<=9719||m>=9720&&m<=9727||m>=9728&&m<=9838||m===9839||m>=9840&&m<=10087||m===10088||m===10089||m===10090||m===10091||m===10092||m===10093||m===10094||m===10095||m===10096||m===10097||m===10098||m===10099||m===10100||m===10101||m>=10132&&m<=10175||m>=10176&&m<=10180||m===10181||m===10182||m>=10183&&m<=10213||m===10214||m===10215||m===10216||m===10217||m===10218||m===10219||m===10220||m===10221||m===10222||m===10223||m>=10224&&m<=10239||m>=10240&&m<=10495||m>=10496&&m<=10626||m===10627||m===10628||m===10629||m===10630||m===10631||m===10632||m===10633||m===10634||m===10635||m===10636||m===10637||m===10638||m===10639||m===10640||m===10641||m===10642||m===10643||m===10644||m===10645||m===10646||m===10647||m===10648||m>=10649&&m<=10711||m===10712||m===10713||m===10714||m===10715||m>=10716&&m<=10747||m===10748||m===10749||m>=10750&&m<=11007||m>=11008&&m<=11055||m>=11056&&m<=11076||m>=11077&&m<=11078||m>=11079&&m<=11084||m>=11085&&m<=11123||m>=11124&&m<=11125||m>=11126&&m<=11157||m===11158||m>=11159&&m<=11263||m>=11776&&m<=11777||m===11778||m===11779||m===11780||m===11781||m>=11782&&m<=11784||m===11785||m===11786||m===11787||m===11788||m===11789||m>=11790&&m<=11798||m===11799||m>=11800&&m<=11801||m===11802||m===11803||m===11804||m===11805||m>=11806&&m<=11807||m===11808||m===11809||m===11810||m===11811||m===11812||m===11813||m===11814||m===11815||m===11816||m===11817||m>=11818&&m<=11822||m===11823||m>=11824&&m<=11833||m>=11834&&m<=11835||m>=11836&&m<=11839||m===11840||m===11841||m===11842||m>=11843&&m<=11855||m>=11856&&m<=11857||m===11858||m>=11859&&m<=11903||m>=12289&&m<=12291||m===12296||m===12297||m===12298||m===12299||m===12300||m===12301||m===12302||m===12303||m===12304||m===12305||m>=12306&&m<=12307||m===12308||m===12309||m===12310||m===12311||m===12312||m===12313||m===12314||m===12315||m===12316||m===12317||m>=12318&&m<=12319||m===12320||m===12336||m===64830||m===64831||m>=65093&&m<=65094}function Ho(m){m.forEach(function(Z){if(delete Z.location,Re(Z)||re(Z))for(var te in Z.options)delete Z.options[te].location,Ho(Z.options[te].value);else D(Z)&&Xe(Z.style)||(oe(Z)||he(Z))&&Ze(Z.style)?delete Z.style.location:Ve(Z)&&Ho(Z.children)})}function Zo(m,Z){Z===void 0&&(Z={}),Z=o({shouldParseSkeletons:!0,requiresOtherClause:!0},Z);var te=new ei(m,Z).parse();if(te.err){var ae=SyntaxError(S[te.err.kind]);throw ae.location=te.err.location,ae.originalMessage=te.err.message,ae}return Z!=null&&Z.captureLocation||Ho(te.val),te.val}var Wo=null},88222:function(s,f,e){"use strict";e.d(f,{$6:function(){return x},OV:function(){return d},Qe:function(){return p},Rw:function(){return o},X9:function(){return h},bc:function(){return u},gb:function(){return v},wI:function(){return n}});var i=e(14874),u;(function(y){y.FORMAT_ERROR="FORMAT_ERROR",y.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",y.INVALID_CONFIG="INVALID_CONFIG",y.MISSING_DATA="MISSING_DATA",y.MISSING_TRANSLATION="MISSING_TRANSLATION"})(u||(u={}));var o=function(y){(0,i.ZT)(b,y);function b(T,A,C){var $=this,B=C?C instanceof Error?C:new Error(String(C)):void 0;return $=y.call(this,"[@formatjs/intl Error ".concat(T,"] ").concat(A,`
`).concat(B?`
`.concat(B.message,`
`).concat(B.stack):""))||this,$.code=T,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace($,b),$}return b}(Error),n=function(y){(0,i.ZT)(b,y);function b(T,A){return y.call(this,u.UNSUPPORTED_FORMATTER,T,A)||this}return b}(o),d=function(y){(0,i.ZT)(b,y);function b(T,A){return y.call(this,u.INVALID_CONFIG,T,A)||this}return b}(o),v=function(y){(0,i.ZT)(b,y);function b(T,A){return y.call(this,u.MISSING_DATA,T,A)||this}return b}(o),p=function(y){(0,i.ZT)(b,y);function b(T,A,C){return y.call(this,u.FORMAT_ERROR,"".concat(T,`
Locale: `).concat(A,`
`),C)||this}return b}(o),h=function(y){(0,i.ZT)(b,y);function b(T,A,C,$){var B=y.call(this,"".concat(T,`
MessageID: `).concat(C==null?void 0:C.id,`
Default Message: `).concat(C==null?void 0:C.defaultMessage,`
Description: `).concat(C==null?void 0:C.description,`
`),A,$)||this;return B.descriptor=C,B}return b}(p),x=function(y){(0,i.ZT)(b,y);function b(T,A){var C=y.call(this,u.MISSING_TRANSLATION,'Missing message: "'.concat(T.id,'" for locale "').concat(A,'", using ').concat(T.defaultMessage?"default message (".concat(typeof T.defaultMessage=="string"?T.defaultMessage:T.defaultMessage.map(function($){var B;return(B=$.value)!==null&&B!==void 0?B:JSON.stringify($)}).join(),")"):"id"," as fallback."))||this;return C.descriptor=T,C}return b}(o)},82644:function(s,f,e){"use strict";e.d(f,{L6:function(){return d},Sn:function(){return x},TB:function(){return T},Z0:function(){return h},ax:function(){return b}});var i=e(14874),u=e(16284),o=e(95957),n=e(88222);function d(A,C,$){return $===void 0&&($={}),C.reduce(function(B,L){return L in A?B[L]=A[L]:L in $&&(B[L]=$[L]),B},{})}var v=function(A){},p=function(A){},h={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:v,onWarn:p};function x(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}}function y(A){return{create:function(){return{get:function(C){return A[C]},set:function(C,$){A[C]=$}}}}}function b(A){A===void 0&&(A=x());var C=Intl.RelativeTimeFormat,$=Intl.ListFormat,B=Intl.DisplayNames,L=(0,o.H)(function(){for(var W,R=[],F=0;F<arguments.length;F++)R[F]=arguments[F];return new((W=Intl.DateTimeFormat).bind.apply(W,(0,i.ev)([void 0],R,!1)))},{cache:y(A.dateTime),strategy:o.A.variadic}),z=(0,o.H)(function(){for(var W,R=[],F=0;F<arguments.length;F++)R[F]=arguments[F];return new((W=Intl.NumberFormat).bind.apply(W,(0,i.ev)([void 0],R,!1)))},{cache:y(A.number),strategy:o.A.variadic}),H=(0,o.H)(function(){for(var W,R=[],F=0;F<arguments.length;F++)R[F]=arguments[F];return new((W=Intl.PluralRules).bind.apply(W,(0,i.ev)([void 0],R,!1)))},{cache:y(A.pluralRules),strategy:o.A.variadic});return{getDateTimeFormat:L,getNumberFormat:z,getMessageFormat:(0,o.H)(function(W,R,F,V){return new u.C(W,R,F,(0,i.pi)({formatters:{getNumberFormat:z,getDateTimeFormat:L,getPluralRules:H}},V||{}))},{cache:y(A.message),strategy:o.A.variadic}),getRelativeTimeFormat:(0,o.H)(function(){for(var W=[],R=0;R<arguments.length;R++)W[R]=arguments[R];return new(C.bind.apply(C,(0,i.ev)([void 0],W,!1)))},{cache:y(A.relativeTime),strategy:o.A.variadic}),getPluralRules:H,getListFormat:(0,o.H)(function(){for(var W=[],R=0;R<arguments.length;R++)W[R]=arguments[R];return new($.bind.apply($,(0,i.ev)([void 0],W,!1)))},{cache:y(A.list),strategy:o.A.variadic}),getDisplayNames:(0,o.H)(function(){for(var W=[],R=0;R<arguments.length;R++)W[R]=arguments[R];return new(B.bind.apply(B,(0,i.ev)([void 0],W,!1)))},{cache:y(A.displayNames),strategy:o.A.variadic})}}function T(A,C,$,B){var L=A&&A[C],z;if(L&&(z=L[$]),z)return z;B(new n.wI("No ".concat(C," format named: ").concat($)))}},14874:function(s,f,e){"use strict";e.d(f,{ZT:function(){return u},ev:function(){return W},pi:function(){return o}});var i=function(S,g){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(I,k){I.__proto__=k}||function(I,k){for(var P in k)Object.prototype.hasOwnProperty.call(k,P)&&(I[P]=k[P])},i(S,g)};function u(S,g){if(typeof g!="function"&&g!==null)throw new TypeError("Class extends value "+String(g)+" is not a constructor or null");i(S,g);function I(){this.constructor=S}S.prototype=g===null?Object.create(g):(I.prototype=g.prototype,new I)}var o=function(){return o=Object.assign||function(g){for(var I,k=1,P=arguments.length;k<P;k++){I=arguments[k];for(var D in I)Object.prototype.hasOwnProperty.call(I,D)&&(g[D]=I[D])}return g},o.apply(this,arguments)};function n(S,g){var I={};for(var k in S)Object.prototype.hasOwnProperty.call(S,k)&&g.indexOf(k)<0&&(I[k]=S[k]);if(S!=null&&typeof Object.getOwnPropertySymbols=="function")for(var P=0,k=Object.getOwnPropertySymbols(S);P<k.length;P++)g.indexOf(k[P])<0&&Object.prototype.propertyIsEnumerable.call(S,k[P])&&(I[k[P]]=S[k[P]]);return I}function d(S,g,I,k){var P=arguments.length,D=P<3?g:k===null?k=Object.getOwnPropertyDescriptor(g,I):k,oe;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")D=Reflect.decorate(S,g,I,k);else for(var he=S.length-1;he>=0;he--)(oe=S[he])&&(D=(P<3?oe(D):P>3?oe(g,I,D):oe(g,I))||D);return P>3&&D&&Object.defineProperty(g,I,D),D}function v(S,g){return function(I,k){g(I,k,S)}}function p(S,g,I,k,P,D){function oe(pr){if(pr!==void 0&&typeof pr!="function")throw new TypeError("Function expected");return pr}for(var he=k.kind,Re=he==="getter"?"get":he==="setter"?"set":"value",re=!g&&S?k.static?S:S.prototype:null,Ee=g||(re?Object.getOwnPropertyDescriptor(re,k.name):{}),Ve,Xe=!1,Ze=I.length-1;Ze>=0;Ze--){var ht={};for(var Ct in k)ht[Ct]=Ct==="access"?{}:k[Ct];for(var Ct in k.access)ht.access[Ct]=k.access[Ct];ht.addInitializer=function(pr){if(Xe)throw new TypeError("Cannot add initializers after decoration has completed");D.push(oe(pr||null))};var Bt=(0,I[Ze])(he==="accessor"?{get:Ee.get,set:Ee.set}:Ee[Re],ht);if(he==="accessor"){if(Bt===void 0)continue;if(Bt===null||typeof Bt!="object")throw new TypeError("Object expected");(Ve=oe(Bt.get))&&(Ee.get=Ve),(Ve=oe(Bt.set))&&(Ee.set=Ve),(Ve=oe(Bt.init))&&P.push(Ve)}else(Ve=oe(Bt))&&(he==="field"?P.push(Ve):Ee[Re]=Ve)}re&&Object.defineProperty(re,k.name,Ee),Xe=!0}function h(S,g,I){for(var k=arguments.length>2,P=0;P<g.length;P++)I=k?g[P].call(S,I):g[P].call(S);return k?I:void 0}function x(S){return typeof S=="symbol"?S:"".concat(S)}function y(S,g,I){return typeof g=="symbol"&&(g=g.description?"[".concat(g.description,"]"):""),Object.defineProperty(S,"name",{configurable:!0,value:I?"".concat(I," ",g):g})}function b(S,g){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(S,g)}function T(S,g,I,k){function P(D){return D instanceof I?D:new I(function(oe){oe(D)})}return new(I||(I=Promise))(function(D,oe){function he(Ee){try{re(k.next(Ee))}catch(Ve){oe(Ve)}}function Re(Ee){try{re(k.throw(Ee))}catch(Ve){oe(Ve)}}function re(Ee){Ee.done?D(Ee.value):P(Ee.value).then(he,Re)}re((k=k.apply(S,g||[])).next())})}function A(S,g){var I={label:0,sent:function(){if(D[0]&1)throw D[1];return D[1]},trys:[],ops:[]},k,P,D,oe;return oe={next:he(0),throw:he(1),return:he(2)},typeof Symbol=="function"&&(oe[Symbol.iterator]=function(){return this}),oe;function he(re){return function(Ee){return Re([re,Ee])}}function Re(re){if(k)throw new TypeError("Generator is already executing.");for(;oe&&(oe=0,re[0]&&(I=0)),I;)try{if(k=1,P&&(D=re[0]&2?P.return:re[0]?P.throw||((D=P.return)&&D.call(P),0):P.next)&&!(D=D.call(P,re[1])).done)return D;switch(P=0,D&&(re=[re[0]&2,D.value]),re[0]){case 0:case 1:D=re;break;case 4:return I.label++,{value:re[1],done:!1};case 5:I.label++,P=re[1],re=[0];continue;case 7:re=I.ops.pop(),I.trys.pop();continue;default:if(D=I.trys,!(D=D.length>0&&D[D.length-1])&&(re[0]===6||re[0]===2)){I=0;continue}if(re[0]===3&&(!D||re[1]>D[0]&&re[1]<D[3])){I.label=re[1];break}if(re[0]===6&&I.label<D[1]){I.label=D[1],D=re;break}if(D&&I.label<D[2]){I.label=D[2],I.ops.push(re);break}D[2]&&I.ops.pop(),I.trys.pop();continue}re=g.call(S,I)}catch(Ee){re=[6,Ee],P=0}finally{k=D=0}if(re[0]&5)throw re[1];return{value:re[0]?re[1]:void 0,done:!0}}}var C=Object.create?function(S,g,I,k){k===void 0&&(k=I);var P=Object.getOwnPropertyDescriptor(g,I);(!P||("get"in P?!g.__esModule:P.writable||P.configurable))&&(P={enumerable:!0,get:function(){return g[I]}}),Object.defineProperty(S,k,P)}:function(S,g,I,k){k===void 0&&(k=I),S[k]=g[I]};function $(S,g){for(var I in S)I!=="default"&&!Object.prototype.hasOwnProperty.call(g,I)&&C(g,S,I)}function B(S){var g=typeof Symbol=="function"&&Symbol.iterator,I=g&&S[g],k=0;if(I)return I.call(S);if(S&&typeof S.length=="number")return{next:function(){return S&&k>=S.length&&(S=void 0),{value:S&&S[k++],done:!S}}};throw new TypeError(g?"Object is not iterable.":"Symbol.iterator is not defined.")}function L(S,g){var I=typeof Symbol=="function"&&S[Symbol.iterator];if(!I)return S;var k=I.call(S),P,D=[],oe;try{for(;(g===void 0||g-- >0)&&!(P=k.next()).done;)D.push(P.value)}catch(he){oe={error:he}}finally{try{P&&!P.done&&(I=k.return)&&I.call(k)}finally{if(oe)throw oe.error}}return D}function z(){for(var S=[],g=0;g<arguments.length;g++)S=S.concat(L(arguments[g]));return S}function H(){for(var S=0,g=0,I=arguments.length;g<I;g++)S+=arguments[g].length;for(var k=Array(S),P=0,g=0;g<I;g++)for(var D=arguments[g],oe=0,he=D.length;oe<he;oe++,P++)k[P]=D[oe];return k}function W(S,g,I){if(I||arguments.length===2)for(var k=0,P=g.length,D;k<P;k++)(D||!(k in g))&&(D||(D=Array.prototype.slice.call(g,0,k)),D[k]=g[k]);return S.concat(D||Array.prototype.slice.call(g))}function R(S){return this instanceof R?(this.v=S,this):new R(S)}function F(S,g,I){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var k=I.apply(S,g||[]),P,D=[];return P={},oe("next"),oe("throw"),oe("return"),P[Symbol.asyncIterator]=function(){return this},P;function oe(Xe){k[Xe]&&(P[Xe]=function(Ze){return new Promise(function(ht,Ct){D.push([Xe,Ze,ht,Ct])>1||he(Xe,Ze)})})}function he(Xe,Ze){try{Re(k[Xe](Ze))}catch(ht){Ve(D[0][3],ht)}}function Re(Xe){Xe.value instanceof R?Promise.resolve(Xe.value.v).then(re,Ee):Ve(D[0][2],Xe)}function re(Xe){he("next",Xe)}function Ee(Xe){he("throw",Xe)}function Ve(Xe,Ze){Xe(Ze),D.shift(),D.length&&he(D[0][0],D[0][1])}}function V(S){var g,I;return g={},k("next"),k("throw",function(P){throw P}),k("return"),g[Symbol.iterator]=function(){return this},g;function k(P,D){g[P]=S[P]?function(oe){return(I=!I)?{value:R(S[P](oe)),done:!1}:D?D(oe):oe}:D}}function q(S){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var g=S[Symbol.asyncIterator],I;return g?g.call(S):(S=typeof B=="function"?B(S):S[Symbol.iterator](),I={},k("next"),k("throw"),k("return"),I[Symbol.asyncIterator]=function(){return this},I);function k(D){I[D]=S[D]&&function(oe){return new Promise(function(he,Re){oe=S[D](oe),P(he,Re,oe.done,oe.value)})}}function P(D,oe,he,Re){Promise.resolve(Re).then(function(re){D({value:re,done:he})},oe)}}function Q(S,g){return Object.defineProperty?Object.defineProperty(S,"raw",{value:g}):S.raw=g,S}var X=Object.create?function(S,g){Object.defineProperty(S,"default",{enumerable:!0,value:g})}:function(S,g){S.default=g};function ie(S){if(S&&S.__esModule)return S;var g={};if(S!=null)for(var I in S)I!=="default"&&Object.prototype.hasOwnProperty.call(S,I)&&C(g,S,I);return X(g,S),g}function Oe(S){return S&&S.__esModule?S:{default:S}}function Se(S,g,I,k){if(I==="a"&&!k)throw new TypeError("Private accessor was defined without a getter");if(typeof g=="function"?S!==g||!k:!g.has(S))throw new TypeError("Cannot read private member from an object whose class did not declare it");return I==="m"?k:I==="a"?k.call(S):k?k.value:g.get(S)}function Be(S,g,I,k,P){if(k==="m")throw new TypeError("Private method is not writable");if(k==="a"&&!P)throw new TypeError("Private accessor was defined without a setter");if(typeof g=="function"?S!==g||!P:!g.has(S))throw new TypeError("Cannot write private member to an object whose class did not declare it");return k==="a"?P.call(S,I):P?P.value=I:g.set(S,I),I}function ue(S,g){if(g===null||typeof g!="object"&&typeof g!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof S=="function"?g===S:S.has(g)}},82651:function(s,f,e){"use strict";e.d(f,{f:function(){return h},m:function(){return v}});var i=e(18698),u=e.n(i),o=e(42122),n=e.n(o),d=e(55648),v,p="/";function h(b){var T;return b.type==="hash"?T=(0,d.q_)():b.type==="memory"?T=(0,d.PP)(b):T=(0,d.lX)(),b.basename&&(p=b.basename),v=n()(n()({},T),{},{push:function(C,$){T.push(x(C,T),$)},replace:function(C,$){T.replace(x(C,T),$)},get location(){return T.location},get action(){return T.action}}),T}function x(b,T){if(typeof b=="string")return"".concat(y(p)).concat(b);if(u()(b)==="object"){var A=T.location.pathname;return n()(n()({},b),{},{pathname:b.pathname?"".concat(y(p)).concat(b.pathname):A})}else throw new Error("Unexpected to: ".concat(b))}function y(b){return b.slice(-1)==="/"?b.slice(0,-1):b}},3922:function(s,f,e){"use strict";e.d(f,{Dl:function(){return z},Z1:function(){return X},dY:function(){return ge},_H:function(){return x},ql:function(){return i.ql},rU:function(){return i.rU},OL:function(){return i.OL},m8:function(){return i.m8},fp:function(){return i.fp},il:function(){return et},Sc:function(){return xo},Ov:function(){return i.Ov},yh:function(){return Ko},YB:function(){return n.Z},bU:function(){return ei.b},TH:function(){return i.TH},OK:function(){return te},pC:function(){return i.pC},UO:function(){return i.UO},OI:function(){return Zr},Qt:function(){return i.Qt},eL:function(){return ao},lr:function(){return i.lr},tx:function(){return Gi},WF:function(){return b.W},OO:function(){return Bs},zh:function(){return Ie}});var i=e(70994),u=e(5187),o=e(67294),n=e(30874),d=e(34857);function v(U,J){var K=U.values,xe=(0,u._T)(U,["values"]),Ye=J.values,pt=(0,u._T)(J,["values"]);return(0,d.wU)(Ye,K)&&(0,d.wU)(xe,pt)}function p(U){var J=(0,n.Z)(),K=J.formatMessage,xe=J.textComponent,Ye=xe===void 0?o.Fragment:xe,pt=U.id,wt=U.description,Tt=U.defaultMessage,zt=U.values,Ut=U.children,ar=U.tagName,gr=ar===void 0?Ye:ar,mr=U.ignoreTag,Tr={id:pt,description:wt,defaultMessage:Tt},_r=K(Tr,zt,{ignoreTag:mr});return typeof Ut=="function"?Ut(Array.isArray(_r)?_r:[_r]):gr?o.createElement(gr,null,o.Children.toArray(_r)):o.createElement(o.Fragment,null,_r)}p.displayName="FormattedMessage";var h=o.memo(p,v);h.displayName="MemoizedFormattedMessage";var x=h,y=e(35095),b=e(64236),T=e(68498),A=e(43684),C=e(41186),$=e(35800);function B(){return B=Object.assign?Object.assign.bind():function(U){for(var J=1;J<arguments.length;J++){var K=arguments[J];for(var xe in K)Object.prototype.hasOwnProperty.call(K,xe)&&(U[xe]=K[xe])}return U},B.apply(this,arguments)}var L=function(J){return o.createElement($.ErrorBoundary,{fallbackRender:function(xe){var Ye=xe.error;return o.createElement(A.Z,{type:"error"},o.createElement("p",null,o.createElement("strong",null,Ye.message||"This demo has been crashed.")),Ye.stack&&o.createElement("p",null,o.createElement("details",{open:!0},o.createElement("summary",null,"Error stack"),o.createElement("pre",null,Ye.stack))))}},J.children)},z=function(J){var K=(0,b.W)(),xe=K.demos,Ye=K.historyType,pt=(0,i.Ov)(),wt=pt.basename,Tt=xe[J.demo.id],zt=Tt.component,Ut=Tt.asset;if(J.previewerProps.debug)return null;if(J.demo.inline)return o.createElement(L,null,(0,o.createElement)(zt));var ar=Ye==="hash";return o.createElement(C.Z,B({asset:Ut,demoUrl:J.previewerProps.demoUrl||"".concat(ar?"#":"").concat(wt).concat(T.SP_ROUTE_PREFIX,"demos/").concat(J.demo.id)},J.previewerProps),J.previewerProps.iframe?null:o.createElement(L,null,(0,o.createElement)(zt)))};function H(){return H=Object.assign?Object.assign.bind():function(U){for(var J=1;J<arguments.length;J++){var K=arguments[J];for(var xe in K)Object.prototype.hasOwnProperty.call(K,xe)&&(U[xe]=K[xe])}return U},H.apply(this,arguments)}function W(U,J){return Q(U)||q(U,J)||F(U,J)||R()}function R(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function F(U,J){if(U){if(typeof U=="string")return V(U,J);var K=Object.prototype.toString.call(U).slice(8,-1);if(K==="Object"&&U.constructor&&(K=U.constructor.name),K==="Map"||K==="Set")return Array.from(U);if(K==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(K))return V(U,J)}}function V(U,J){(J==null||J>U.length)&&(J=U.length);for(var K=0,xe=new Array(J);K<J;K++)xe[K]=U[K];return xe}function q(U,J){var K=U==null?null:typeof Symbol!="undefined"&&U[Symbol.iterator]||U["@@iterator"];if(K!=null){var xe=[],Ye=!0,pt=!1,wt,Tt;try{for(K=K.call(U);!(Ye=(wt=K.next()).done)&&(xe.push(wt.value),!(J&&xe.length===J));Ye=!0);}catch(zt){pt=!0,Tt=zt}finally{try{!Ye&&K.return!=null&&K.return()}finally{if(pt)throw Tt}}return xe}}function Q(U){if(Array.isArray(U))return U}var X=function(J){var K=ao(),xe=K.frontmatter,Ye=(0,o.useCallback)(function(Ut,ar){var gr,mr=[],Tr=ar.filter(function(Kr){return!Kr.previewerProps.debug});if((gr=Ut.demo)!==null&&gr!==void 0&&gr.cols&&Ut.demo.cols>1&&(typeof window=="undefined"||window.innerWidth>1024)){for(var _r=0;_r<Tr.length;_r+=Ut.demo.cols)Tr.slice(_r,_r+Ut.demo.cols).forEach(function(Kr,En){var Hn;(Hn=mr[En])!==null&&Hn!==void 0||(mr[En]=[]),mr[En].push(Kr)});return mr}else mr.push(Tr);return mr},[]),pt=(0,o.useState)(function(){return Ye(xe,J.items)}),wt=W(pt,2),Tt=wt[0],zt=wt[1];return(0,o.useEffect)(function(){var Ut=function(){return zt(Ye(xe,J.items))};return window.addEventListener("resize",Ut),function(){return window.removeEventListener("resize",Ut)}},[]),o.createElement("div",{style:{display:"flex",margin:-8},"data-dumi-demo-grid":!0},Tt.map(function(Ut,ar){return o.createElement("section",{style:{flex:1,padding:8,width:0},key:String(ar)},Ut.map(function(gr){return o.createElement(z,H({key:gr.demo.id},gr))}))}))},ie=e(26575),Oe=e.n(ie),Se=e(23187),Be=e.n(Se),ue=e(75553),S=e.n(ue),g=e(41049),I=e.n(g),k=e(5026),P=e.n(k),D=e(83357),oe=e.n(D),he=e(30194),Re={};Re.styleTagTransform=oe(),Re.setAttributes=I(),Re.insert=S().bind(null,"head"),Re.domAPI=Be(),Re.insertStyleElement=P();var re=Oe()(he.Z,Re),Ee=he.Z&&he.Z.locals?he.Z.locals:void 0,Ve=function(J){var K=J.tabs,xe=J.tabKey,Ye=J.onChange,pt=(0,n.Z)();return Boolean(K==null?void 0:K.length)?o.createElement("ul",{className:"dumi-default-content-tabs"},o.createElement("li",{onClick:function(){return Ye()},"data-active":!xe||void 0},o.createElement("button",{type:"button"},pt.formatMessage({id:"content.tabs.default"}))),K.map(function(wt){return o.createElement("li",{key:wt.key,onClick:function(){return Ye(wt)},"data-active":xe===wt.key||void 0},o.createElement("button",{type:"button"},wt.titleIntlId?pt.formatMessage({id:wt.titleIntlId}):wt.meta.frontmatter.title))})):null},Xe=Ve;function Ze(U,J){return $r(U)||pr(U,J)||Ct(U,J)||ht()}function ht(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ct(U,J){if(U){if(typeof U=="string")return Bt(U,J);var K=Object.prototype.toString.call(U).slice(8,-1);if(K==="Object"&&U.constructor&&(K=U.constructor.name),K==="Map"||K==="Set")return Array.from(U);if(K==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(K))return Bt(U,J)}}function Bt(U,J){(J==null||J>U.length)&&(J=U.length);for(var K=0,xe=new Array(J);K<J;K++)xe[K]=U[K];return xe}function pr(U,J){var K=U==null?null:typeof Symbol!="undefined"&&U[Symbol.iterator]||U["@@iterator"];if(K!=null){var xe=[],Ye=!0,pt=!1,wt,Tt;try{for(K=K.call(U);!(Ye=(wt=K.next()).done)&&(xe.push(wt.value),!(J&&xe.length===J));Ye=!0);}catch(zt){pt=!0,Tt=zt}finally{try{!Ye&&K.return!=null&&K.return()}finally{if(pt)throw Tt}}return xe}}function $r(U){if(Array.isArray(U))return U}var tn="tab",tt=function(){var J=(0,i.TH)(),K=J.pathname,xe=(0,i.lr)(),Ye=Ze(xe,1),pt=Ye[0],wt=(0,o.useCallback)(function(Tt){Tt?pt.set(tn,Tt):pt.delete(tn),i.m8.push({pathname:K,search:pt.toString()})},[pt]);return[pt.get(tn),wt]},Ie=function(){var J,K=ao(),xe=K.tabs,Ye=tt(),pt=Ze(Ye,1),wt=pt[0];return xe==null||(J=xe.find(function(Tt){var zt=Tt.key;return wt===zt}))===null||J===void 0?void 0:J.meta};function be(U,J){return de(U)||me(U,J)||je(U,J)||ye()}function ye(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function je(U,J){if(U){if(typeof U=="string")return fe(U,J);var K=Object.prototype.toString.call(U).slice(8,-1);if(K==="Object"&&U.constructor&&(K=U.constructor.name),K==="Map"||K==="Set")return Array.from(U);if(K==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(K))return fe(U,J)}}function fe(U,J){(J==null||J>U.length)&&(J=U.length);for(var K=0,xe=new Array(J);K<J;K++)xe[K]=U[K];return xe}function me(U,J){var K=U==null?null:typeof Symbol!="undefined"&&U[Symbol.iterator]||U["@@iterator"];if(K!=null){var xe=[],Ye=!0,pt=!1,wt,Tt;try{for(K=K.call(U);!(Ye=(wt=K.next()).done)&&(xe.push(wt.value),!(J&&xe.length===J));Ye=!0);}catch(zt){pt=!0,Tt=zt}finally{try{!Ye&&K.return!=null&&K.return()}finally{if(pt)throw Tt}}return xe}}function de(U){if(Array.isArray(U))return U}var ge=function(J){var K=ao(),xe=K.tabs,Ye=tt(),pt=be(Ye,2),wt=pt[0],Tt=pt[1],zt=(0,o.useState)(function(){return xe==null?void 0:xe.find(function(_r){var Kr=_r.key;return Kr===wt})}),Ut=be(zt,2),ar=Ut[0],gr=Ut[1],mr=(0,b.W)(),Tr=mr.setLoading;return(0,o.useEffect)(function(){Tr(!1)},[]),o.createElement(o.Fragment,null,o.createElement(Xe,{tabs:xe,tabKey:wt,onChange:function(Kr){gr(Kr),Tt(Kr==null?void 0:Kr.key)}}),ar?o.createElement(ar.components.default):J.children)},Me=e(12662),st=e(77742);function it(U,J){return we(U)||ee(U,J)||Mt(U,J)||ft()}function ft(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Mt(U,J){if(U){if(typeof U=="string")return Ft(U,J);var K=Object.prototype.toString.call(U).slice(8,-1);if(K==="Object"&&U.constructor&&(K=U.constructor.name),K==="Map"||K==="Set")return Array.from(U);if(K==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(K))return Ft(U,J)}}function Ft(U,J){(J==null||J>U.length)&&(J=U.length);for(var K=0,xe=new Array(J);K<J;K++)xe[K]=U[K];return xe}function ee(U,J){var K=U==null?null:typeof Symbol!="undefined"&&U[Symbol.iterator]||U["@@iterator"];if(K!=null){var xe=[],Ye=!0,pt=!1,wt,Tt;try{for(K=K.call(U);!(Ye=(wt=K.next()).done)&&(xe.push(wt.value),!(J&&xe.length===J));Ye=!0);}catch(zt){pt=!0,Tt=zt}finally{try{!Ye&&K.return!=null&&K.return()}finally{if(pt)throw Tt}}return xe}}function we(U){if(Array.isArray(U))return U}var se="https://codesandbox.io/api/v1/sandboxes/define";function _e(U){var J,K,xe,Ye,pt,wt=Boolean((J=U.asset.dependencies)===null||J===void 0?void 0:J["index.tsx"]),Tt=wt?".tsx":".jsx",zt={},Ut={},ar="index".concat(Tt);return Object.entries(U.asset.dependencies).forEach(function(gr){var mr=it(gr,2),Tr=mr[0],_r=mr[1],Kr=_r.type,En=_r.value;Kr==="NPM"?Ut[Tr]=En:zt[Tr===ar?"App".concat(Tt):Tr]={content:En,isBinary:!1}}),(xe=Ut[K="react"])!==null&&xe!==void 0||(Ut[K]="latest"),(pt=Ut[Ye="react-dom"])!==null&&pt!==void 0||(Ut[Ye]=Ut.react),zt["sandbox.config.json"]={content:JSON.stringify({template:"create-react-app"},null,2),isBinary:!1},zt["package.json"]={content:JSON.stringify({name:U.title,description:U.description||"An auto-generated demo by dumi",main:ar,dependencies:Ut,devDependencies:wt?{typescript:"^4"}:{}},null,2),isBinary:!1},zt["index.html"]={content:'<div style="margin: 16px;" id="root"></div>',isBinary:!1},zt[ar]={content:(0,st.AM)(Ut.react),isBinary:!1},(0,Me.Z)({files:zt})}var et=function(J,K){var xe,Ye=document.createElement("form"),pt=document.createElement("input"),wt=_e(J);Ye.method="POST",Ye.target="_blank",Ye.style.display="none",Ye.action=(K==null?void 0:K.api)||se,Ye.appendChild(pt),Ye.setAttribute("data-demo",((xe=J.assets)===null||xe===void 0?void 0:xe.id)||""),pt.name="parameters",pt.value=wt,document.body.appendChild(Ye),Ye.submit(),Ye.remove()};const at=500,ut=20,Lt=300,Qe="https://stackblitz.com",dt=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],It=["project","search","ports","settings"],Ue=["light","dark"],Ge=["editor","preview"],nt={clickToLoad:U=>ot("ctl",U),devToolsHeight:U=>Wt("devtoolsheight",U),forceEmbedLayout:U=>ot("embed",U),hideDevTools:U=>ot("hidedevtools",U),hideExplorer:U=>ot("hideExplorer",U),hideNavigation:U=>ot("hideNavigation",U),openFile:U=>Cr("file",U),showSidebar:U=>kt("showSidebar",U),sidebarView:U=>Kt("sidebarView",U,It),startScript:U=>Cr("startScript",U),terminalHeight:U=>Wt("terminalHeight",U),theme:U=>Kt("theme",U,Ue),view:U=>Kt("view",U,Ge),zenMode:U=>ot("zenMode",U)};function bt(U={}){const J=Object.entries(U).map(([K,xe])=>xe!=null&&nt.hasOwnProperty(K)?nt[K](xe):"").filter(Boolean);return J.length?`?${J.join("&")}`:""}function ot(U,J){return J===!0?`${U}=1`:""}function kt(U,J){return typeof J=="boolean"?`${U}=${J?"1":"0"}`:""}function Wt(U,J){if(typeof J=="number"&&!Number.isNaN(J)){const K=Math.min(100,Math.max(0,J));return`${U}=${encodeURIComponent(Math.round(K))}`}return""}function Kt(U,J="",K=[]){return K.includes(J)?`${U}=${encodeURIComponent(J)}`:""}function Cr(U,J){return(Array.isArray(J)?J:[J]).filter(xe=>typeof xe=="string"&&xe.trim()!=="").map(xe=>`${U}=${encodeURIComponent(xe)}`).join("&")}function Pr(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function xn(U,J){return`${gn(J)}${U}${bt(J)}`}function Pn(U,J){const K={forceEmbedLayout:!0};return J&&typeof J=="object"&&Object.assign(K,J),`${gn(K)}${U}${bt(K)}`}function gn(U={}){return(typeof U.origin=="string"?U.origin:Qe).replace(/\/$/,"")}function ln(U,J,K){if(!J||!U||!U.parentNode)throw new Error("Invalid Element");U.id&&(J.id=U.id),U.className&&(J.className=U.className),cn(J,K),U.replaceWith(J)}function Sn(U){if(typeof U=="string"){const J=document.getElementById(U);if(!J)throw new Error(`Could not find element with id '${U}'`);return J}else if(U instanceof HTMLElement)return U;throw new Error(`Invalid element: ${U}`)}function lr(U){return U&&U.newWindow===!1?"_self":"_blank"}function cn(U,J={}){const K=Object.hasOwnProperty.call(J,"height")?`${J.height}`:`${Lt}`,xe=Object.hasOwnProperty.call(J,"width")?`${J.width}`:void 0;U.setAttribute("height",K),xe?U.setAttribute("width",xe):U.setAttribute("style","width:100%;")}class vn{constructor(J){this.pending={},this.port=J,this.port.onmessage=this.messageListener.bind(this)}request({type:J,payload:K}){return new Promise((xe,Ye)=>{const pt=Pr();this.pending[pt]={resolve:xe,reject:Ye},this.port.postMessage({type:J,payload:pd(ld({},K),{__reqid:pt})})})}messageListener(J){var Tt;if(typeof((Tt=J.data.payload)==null?void 0:Tt.__reqid)!="string")return;const{type:K,payload:xe}=J.data,{__reqid:Ye,__success:pt,__error:wt}=xe;this.pending[Ye]&&(pt?this.pending[Ye].resolve(this.cleanResult(xe)):this.pending[Ye].reject(wt?`${K}: ${wt}`:K),delete this.pending[Ye])}cleanResult(J){const K=ld({},J);return delete K.__reqid,delete K.__success,delete K.__error,Object.keys(K).length?K:null}}class pa{constructor(J,K){this.editor={openFile:xe=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:xe}}),setCurrentFile:xe=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:xe}}),setTheme:xe=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:xe}}),setView:xe=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:xe}}),showSidebar:(xe=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:xe}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(xe=>{var Ye;return(Ye=xe==null?void 0:xe.url)!=null?Ye:null}),setUrl:(xe="/")=>{if(typeof xe!="string"||!xe.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${xe}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:xe}})}},this._rdc=new vn(J),Object.defineProperty(this.preview,"origin",{value:typeof K.previewOrigin=="string"?K.previewOrigin:null,writable:!1})}applyFsDiff(J){const K=xe=>xe!==null&&typeof xe=="object";if(!K(J)||!K(J.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(J.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:J})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const va=[];class dn{constructor(J){this.id=Pr(),this.element=J,this.pending=new Promise((K,xe)=>{const Ye=({data:Ut,ports:ar})=>{(Ut==null?void 0:Ut.action)==="SDK_INIT_SUCCESS"&&Ut.id===this.id&&(this.vm=new pa(ar[0],Ut.payload),K(this.vm),wt())},pt=()=>{var Ut;(Ut=this.element.contentWindow)==null||Ut.postMessage({action:"SDK_INIT",id:this.id},"*")};function wt(){window.clearInterval(zt),window.removeEventListener("message",Ye)}window.addEventListener("message",Ye),pt();let Tt=0;const zt=window.setInterval(()=>{if(this.vm){wt();return}if(Tt>=ut){wt(),xe("Timeout: Unable to establish a connection with the StackBlitz VM"),va.forEach((Ut,ar)=>{Ut.id===this.id&&va.splice(ar,1)});return}Tt++,pt()},at)}),va.push(this)}}const ua=U=>{var K;const J=U instanceof Element?"element":"id";return(K=va.find(xe=>xe[J]===U))!=null?K:null};function Wn(U,J){const K=document.createElement("input");return K.type="hidden",K.name=U,K.value=J,K}function yr(U){return U.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}function Sa({template:U,title:J,description:K,dependencies:xe,files:Ye,settings:pt}){if(!dt.includes(U)){const Ut=dt.map(ar=>`'${ar}'`).join(", ");console.warn(`Unsupported project.template: must be one of ${Ut}`)}const wt=[],Tt=(Ut,ar,gr="")=>{wt.push(Wn(Ut,typeof ar=="string"?ar:gr))};Tt("project[title]",J),typeof K=="string"&&K.length>0&&Tt("project[description]",K),Tt("project[template]",U,"javascript"),xe&&(U==="node"?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):Tt("project[dependencies]",JSON.stringify(xe))),pt&&Tt("project[settings]",JSON.stringify(pt)),Object.entries(Ye).forEach(([Ut,ar])=>{Tt(`project[files][${yr(Ut)}]`,ar)});const zt=document.createElement("form");return zt.method="POST",zt.setAttribute("style","display:none!important;"),zt.append(...wt),zt}function Ma(U,J){const K=Sa(U);return K.action=Pn("/run",J),K.id="sb_run",`<!doctype html>
<html>
<head><title></title></head>
<body>
  ${K.outerHTML}
  <script>document.getElementById('${K.id}').submit();<\/script>
</body>
</html>`}function go(U,J){const K=Sa(U);K.action=xn("/run",J),K.target=lr(J),document.body.appendChild(K),K.submit(),document.body.removeChild(K)}function Ea(U){var K;return U!=null&&U.contentWindow?((K=ua(U))!=null?K:new dn(U)).pending:Promise.reject("Provided element is not an iframe.")}function Fo(U,J){go(U,J)}function yo(U,J){const K=xn(`/edit/${U}`,J),xe=lr(J);window.open(K,xe)}function mn(U,J){const K=xn(`/github/${U}`,J),xe=lr(J);window.open(K,xe)}function zo(U,J,K){var wt;const xe=Sn(U),Ye=Ma(J,K),pt=document.createElement("iframe");return ln(xe,pt,K),(wt=pt.contentDocument)==null||wt.write(Ye),Ea(pt)}function Uo(U,J,K){const xe=Sn(U),Ye=document.createElement("iframe");return Ye.src=Pn(`/edit/${J}`,K),ln(xe,Ye,K),Ea(Ye)}function Tu(U,J,K){const xe=Sn(U),Ye=document.createElement("iframe");return Ye.src=Pn(`/github/${J}`,K),ln(xe,Ye,K),Ea(Ye)}const ka={connect:Ea,embedGithubProject:Tu,embedProject:zo,embedProjectId:Uo,openGithubProject:mn,openProject:Fo,openProjectId:yo};function bo(U,J){return Rn(U)||Ou(U,J)||wo(U,J)||xi()}function xi(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wo(U,J){if(U){if(typeof U=="string")return ma(U,J);var K=Object.prototype.toString.call(U).slice(8,-1);if(K==="Object"&&U.constructor&&(K=U.constructor.name),K==="Map"||K==="Set")return Array.from(U);if(K==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(K))return ma(U,J)}}function ma(U,J){(J==null||J>U.length)&&(J=U.length);for(var K=0,xe=new Array(J);K<J;K++)xe[K]=U[K];return xe}function Ou(U,J){var K=U==null?null:typeof Symbol!="undefined"&&U[Symbol.iterator]||U["@@iterator"];if(K!=null){var xe=[],Ye=!0,pt=!1,wt,Tt;try{for(K=K.call(U);!(Ye=(wt=K.next()).done)&&(xe.push(wt.value),!(J&&xe.length===J));Ye=!0);}catch(zt){pt=!0,Tt=zt}finally{try{!Ye&&K.return!=null&&K.return()}finally{if(pt)throw Tt}}return xe}}function Rn(U){if(Array.isArray(U))return U}var xo=function(J){var K,xe,Ye,pt,wt,Tt=Boolean((K=J.asset.dependencies)===null||K===void 0?void 0:K["index.tsx"]),zt=Tt?".tsx":".jsx",Ut={},ar="index".concat(zt),gr={"index.html":'<div style="margin: 16px;" id="root"></div>'},mr={title:J.title||"",description:J.description||"An auto-generated demo by dumi",template:"create-react-app",files:{}};Object.entries(J.asset.dependencies).forEach(function(Tr){var _r=bo(Tr,2),Kr=_r[0],En=_r[1],Hn=En.type,Oa=En.value;Hn==="NPM"?Ut[Kr]=Oa:gr[Kr===ar?"App".concat(zt):Kr]=Oa}),(Ye=Ut[xe="react"])!==null&&Ye!==void 0||(Ut[xe]="latest"),(wt=Ut[pt="react-dom"])!==null&&wt!==void 0||(Ut[pt]=Ut.react),gr["package.json"]=JSON.stringify({name:J.title,description:J.description||"An auto-generated demo by dumi",dependencies:Ut,devDependencies:Tt?{typescript:"^4"}:{}},null,2),gr[ar]=(0,st.AM)(Ut.react),mr.files=gr,ka.openProject(mr)},Si=function(){var J=useSiteData(),K=J.components;return{components:K}},ei=e(88903);function ro(U){return $o(U)||So(U)||Zo(U)||Ei()}function Ei(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function So(U){if(typeof Symbol!="undefined"&&U[Symbol.iterator]!=null||U["@@iterator"]!=null)return Array.from(U)}function $o(U){if(Array.isArray(U))return Wo(U)}function Iu(U,J){return Z(U)||m(U,J)||Zo(U,J)||Ho()}function Ho(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zo(U,J){if(U){if(typeof U=="string")return Wo(U,J);var K=Object.prototype.toString.call(U).slice(8,-1);if(K==="Object"&&U.constructor&&(K=U.constructor.name),K==="Map"||K==="Set")return Array.from(U);if(K==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(K))return Wo(U,J)}}function Wo(U,J){(J==null||J>U.length)&&(J=U.length);for(var K=0,xe=new Array(J);K<J;K++)xe[K]=U[K];return xe}function m(U,J){var K=U==null?null:typeof Symbol!="undefined"&&U[Symbol.iterator]||U["@@iterator"];if(K!=null){var xe=[],Ye=!0,pt=!1,wt,Tt;try{for(K=K.call(U);!(Ye=(wt=K.next()).done)&&(xe.push(wt.value),!(J&&xe.length===J));Ye=!0);}catch(zt){pt=!0,Tt=zt}finally{try{!Ye&&K.return!=null&&K.return()}finally{if(pt)throw Tt}}return xe}}function Z(U){if(Array.isArray(U))return U}var te=function(){var J=(0,ei.b)(),K=(0,st.RX)(),xe=(0,b.W)(),Ye=xe.themeConfig,pt=Ko(),wt=(0,st.M7)(),Tt=(0,o.useState)(function(){var ar=[],gr;if(Ye.nav&&("mode"in Ye.nav&&typeof Ye.nav.mode=="string"?(gr=Ye.nav.mode,ar=(0,st.m7)(Ye.nav.value,J)):"mode"in Ye.nav||(ar=(0,st.m7)(Ye.nav,J)),!gr||gr==="override"))return ar;var mr=Object.entries(pt).map(function(Tr){var _r=Iu(Tr,2),Kr=_r[0],En=_r[1],Hn=Object.values(K).reduce(function(Oa,qn){return qn.path.startsWith(Kr.slice(1))&&(0,st.qu)(Oa,"nav",qn.meta.frontmatter),Oa},{});return{title:Hn.title||En[0].title||En[0].children[0].title,order:Hn.order||0,link:En[0].children[0].link,activePath:Kr}});return mr.sort(wt),gr==="prepend"?mr.unshift.apply(mr,ro(ar)):gr==="append"&&mr.push.apply(mr,ro(ar)),mr}),zt=Iu(Tt,1),Ut=zt[0];return Ut};function ae(U,J){return vr(U)||Et(U,J)||Ae(U,J)||ce()}function ce(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ae(U,J){if(U){if(typeof U=="string")return Je(U,J);var K=Object.prototype.toString.call(U).slice(8,-1);if(K==="Object"&&U.constructor&&(K=U.constructor.name),K==="Map"||K==="Set")return Array.from(U);if(K==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(K))return Je(U,J)}}function Je(U,J){(J==null||J>U.length)&&(J=U.length);for(var K=0,xe=new Array(J);K<J;K++)xe[K]=U[K];return xe}function Et(U,J){var K=U==null?null:typeof Symbol!="undefined"&&U[Symbol.iterator]||U["@@iterator"];if(K!=null){var xe=[],Ye=!0,pt=!1,wt,Tt;try{for(K=K.call(U);!(Ye=(wt=K.next()).done)&&(xe.push(wt.value),!(J&&xe.length===J));Ye=!0);}catch(zt){pt=!0,Tt=zt}finally{try{!Ye&&K.return!=null&&K.return()}finally{if(pt)throw Tt}}return xe}}function vr(U){if(Array.isArray(U))return U}function rt(U,J){if(!(U instanceof J))throw new TypeError("Cannot call a class as a function")}function tr(U,J){for(var K=0;K<J.length;K++){var xe=J[K];xe.enumerable=xe.enumerable||!1,xe.configurable=!0,"value"in xe&&(xe.writable=!0),Object.defineProperty(U,xe.key,xe)}}function Qt(U,J,K){return J&&tr(U.prototype,J),K&&tr(U,K),Object.defineProperty(U,"prototype",{writable:!1}),U}function Jt(U,J,K){return J in U?Object.defineProperty(U,J,{value:K,enumerable:!0,configurable:!0,writable:!0}):U[J]=K,U}var Sr,Br=function(){function U(J){var K=this;rt(this,U),Jt(this,"color",void 0),Jt(this,"prefersColor",void 0),Jt(this,"callbacks",[]),this.prefersColor=navigator.cookieEnabled&&localStorage.getItem(T.PREFERS_COLOR_LS_KEY)||J.default,this.color=document.documentElement.getAttribute(T.PREFERS_COLOR_ATTR),["light","dark"].forEach(function(xe){var Ye=K.getColorMedia(xe),pt=function(Tt){Tt.matches&&K.prefersColor==="auto"&&(K.color=xe,document.documentElement.setAttribute(T.PREFERS_COLOR_ATTR,xe),K.applyCallbacks())};Ye.addEventListener?Ye.addEventListener("change",pt):Ye.addListener&&Ye.addListener(pt)})}return Qt(U,[{key:"getColorMedia",value:function(K){return window.matchMedia("(prefers-color-scheme: ".concat(K,")"))}},{key:"isColorMode",value:function(K){return this.getColorMedia(K).matches}},{key:"applyCallbacks",value:function(){var K=this;this.callbacks.forEach(function(xe){return xe({color:K.color,prefersColor:K.prefersColor})})}},{key:"listen",value:function(K){this.callbacks.push(K)}},{key:"unlisten",value:function(K){this.callbacks.splice(this.callbacks.indexOf(K),1)}},{key:"tryPrefersColor",value:function(K){return navigator.cookieEnabled&&localStorage.setItem(T.PREFERS_COLOR_LS_KEY,K),this.prefersColor=K,this.color=K==="auto"?this.isColorMode("dark")?"dark":"light":K,document.documentElement.setAttribute(T.PREFERS_COLOR_ATTR,K),this.applyCallbacks(),K}}]),U}(),Zr=function(){var J=(0,b.W)(),K=J.themeConfig,xe=(0,o.useState)(),Ye=ae(xe,2),pt=Ye[0],wt=Ye[1],Tt=(0,o.useState)(),zt=ae(Tt,2),Ut=zt[0],ar=zt[1],gr=(0,o.useCallback)(function(Tr){Sr.tryPrefersColor(Tr)},[]),mr=(0,o.useCallback)(function(Tr){wt(Tr.color),ar(Tr.prefersColor)},[]);return(0,o.useEffect)(function(){var Tr;return(Tr=Sr)!==null&&Tr!==void 0||(Sr=new Br({default:K.prefersColor.default})),Sr.listen(mr),wt(Sr.color),ar(Sr.prefersColor),function(){return Sr.unlisten(mr)}},[]),[pt,Ut,gr]};function fn(U,J){return Eo(U)||no(U,J)||Za(U,J)||_n()}function _n(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Za(U,J){if(U){if(typeof U=="string")return Ti(U,J);var K=Object.prototype.toString.call(U).slice(8,-1);if(K==="Object"&&U.constructor&&(K=U.constructor.name),K==="Map"||K==="Set")return Array.from(U);if(K==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(K))return Ti(U,J)}}function Ti(U,J){(J==null||J>U.length)&&(J=U.length);for(var K=0,xe=new Array(J);K<J;K++)xe[K]=U[K];return xe}function no(U,J){var K=U==null?null:typeof Symbol!="undefined"&&U[Symbol.iterator]||U["@@iterator"];if(K!=null){var xe=[],Ye=!0,pt=!1,wt,Tt;try{for(K=K.call(U);!(Ye=(wt=K.next()).done)&&(xe.push(wt.value),!(J&&xe.length===J));Ye=!0);}catch(zt){pt=!0,Tt=zt}finally{try{!Ye&&K.return!=null&&K.return()}finally{if(pt)throw Tt}}return xe}}function Eo(U){if(Array.isArray(U))return U}var ao=function(){var J=(0,i.Qt)(),K=J.route,xe=(0,i.TH)(),Ye=xe.pathname,pt=(0,i.Ov)(),wt=pt.clientRoutes,Tt=(0,o.useCallback)(function(){var mr;if(K.path===Ye&&!("isLayout"in K))mr=K.meta;else{var Tr,_r,Kr=(Tr=(0,i.fp)(wt,Ye))===null||Tr===void 0?void 0:Tr.pop();mr=Kr==null||(_r=Kr.route)===null||_r===void 0?void 0:_r.meta}return mr||{frontmatter:{},toc:[],texts:[]}},[wt.length,Ye]),zt=(0,o.useState)(Tt),Ut=fn(zt,2),ar=Ut[0],gr=Ut[1];return(0,st.LI)(function(){gr(Tt)},[wt.length,Ye]),ar};function ti(U,J){var K=Object.keys(U);if(Object.getOwnPropertySymbols){var xe=Object.getOwnPropertySymbols(U);J&&(xe=xe.filter(function(Ye){return Object.getOwnPropertyDescriptor(U,Ye).enumerable})),K.push.apply(K,xe)}return K}function ri(U){for(var J=1;J<arguments.length;J++){var K=arguments[J]!=null?arguments[J]:{};J%2?ti(Object(K),!0).forEach(function(xe){Au(U,xe,K[xe])}):Object.getOwnPropertyDescriptors?Object.defineProperties(U,Object.getOwnPropertyDescriptors(K)):ti(Object(K)).forEach(function(xe){Object.defineProperty(U,xe,Object.getOwnPropertyDescriptor(K,xe))})}return U}function Au(U,J,K){return J in U?Object.defineProperty(U,J,{value:K,enumerable:!0,configurable:!0,writable:!0}):U[J]=K,U}function fs(U,J){var K=typeof Symbol!="undefined"&&U[Symbol.iterator]||U["@@iterator"];if(!K){if(Array.isArray(U)||(K=Ii(U))||J&&U&&typeof U.length=="number"){K&&(U=K);var xe=0,Ye=function(){};return{s:Ye,n:function(){return xe>=U.length?{done:!0}:{done:!1,value:U[xe++]}},e:function(Ut){throw Ut},f:Ye}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var pt=!0,wt=!1,Tt;return{s:function(){K=K.call(U)},n:function(){var Ut=K.next();return pt=Ut.done,Ut},e:function(Ut){wt=!0,Tt=Ut},f:function(){try{!pt&&K.return!=null&&K.return()}finally{if(wt)throw Tt}}}}function Go(U){return Oi(U)||ni(U)||Ii(U)||Ta()}function Ta(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ni(U){if(typeof Symbol!="undefined"&&U[Symbol.iterator]!=null||U["@@iterator"]!=null)return Array.from(U)}function Oi(U){if(Array.isArray(U))return ai(U)}function Cu(U,J){return Zi(U)||Pu(U,J)||Ii(U,J)||xl()}function xl(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ii(U,J){if(U){if(typeof U=="string")return ai(U,J);var K=Object.prototype.toString.call(U).slice(8,-1);if(K==="Object"&&U.constructor&&(K=U.constructor.name),K==="Map"||K==="Set")return Array.from(U);if(K==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(K))return ai(U,J)}}function ai(U,J){(J==null||J>U.length)&&(J=U.length);for(var K=0,xe=new Array(J);K<J;K++)xe[K]=U[K];return xe}function Pu(U,J){var K=U==null?null:typeof Symbol!="undefined"&&U[Symbol.iterator]||U["@@iterator"];if(K!=null){var xe=[],Ye=!0,pt=!1,wt,Tt;try{for(K=K.call(U);!(Ye=(wt=K.next()).done)&&(xe.push(wt.value),!(J&&xe.length===J));Ye=!0);}catch(zt){pt=!0,Tt=zt}finally{try{!Ye&&K.return!=null&&K.return()}finally{if(pt)throw Tt}}return xe}}function Zi(U){if(Array.isArray(U))return U}var To="$default-group-title",Wi=function(J,K){return"base"in K?J.replace(K.base.slice(1),"").replace(/^\//,""):J},Ko=function(){var J=(0,ei.b)(),K=(0,st.RX)(),xe=(0,b.W)(),Ye=xe.themeConfig,pt=(0,st.M7)(),wt=(0,o.useState)(function(){var Ut=Object.values(K).reduce(function(gr,mr){var Tr=Wi(mr.path,J);if(Tr&&mr.meta){var _r,Kr,En,Hn="/".concat(mr.path.replace(Tr,function(io){return io.replace(/\/[^/]+$/,"")})),Oa=(0,st.qu)({order:0},"group",mr.meta.frontmatter),qn=Oa.title,ui=Oa.order,si=qn||To;(_r=gr[Hn])!==null&&_r!==void 0||(gr[Hn]={}),gr[Hn][si]={title:qn,order:((Kr=gr[Hn][si])===null||Kr===void 0?void 0:Kr.order)||ui,children:[].concat(Go(((En=gr[Hn][si])===null||En===void 0?void 0:En.children)||[]),[{title:mr.meta.frontmatter.title,link:"/".concat(mr.path),order:mr.meta.frontmatter.order||0,frontmatter:mr.meta.frontmatter}])}}return gr},{}),ar=Object.entries(Ut).reduce(function(gr,mr){var Tr=Cu(mr,2),_r=Tr[0],Kr=Tr[1];return gr[_r]=Object.values(Kr).sort(pt),gr[_r].forEach(function(En){return En.children.sort(pt)}),gr},{});return Object.assign(ar,Ye.sidebar)}),Tt=Cu(wt,1),zt=Tt[0];return zt};function Ru(U){var J={order:0,title:""},K=fs(U),xe;try{for(K.s();!(xe=K.n()).done;){var Ye=xe.value,pt=fs(Ye.children),wt;try{for(pt.s();!(wt=pt.n()).done;){var Tt=wt.value;"frontmatter"in Tt&&pickRouteSortMeta(J,"nav",Tt.frontmatter)}}catch(zt){pt.e(zt)}finally{pt.f()}}}catch(zt){K.e(zt)}finally{K.f()}return J}var Mu=function(){var J=Ko(),K=useRouteDataComparer(),xe=useState(function(){var wt=Object.entries(J).sort(function(Tt,zt){return zt[0].split("/").length-Tt[0].split("/").length}).reduce(function(Tt,zt){var Ut=Cu(zt,2),ar=Ut[0],gr=Ut[1],mr=ar.replace(/\/[^/]+$/,"");if(mr){var Tr;if((Tr=Tt[mr])!==null&&Tr!==void 0||(Tt[mr]=ri({path:mr,children:J[mr]||[]},Ru(J[mr]||[]))),Tt[ar])Tt[ar].children.sort(K),Tt[mr].children.push(Tt[ar]),delete Tt[ar];else{var _r;(_r=Tt[mr].children).push.apply(_r,Go(gr))}}else gr.sort(K),Tt[ar]=ri({path:ar,children:gr},Ru(gr));return Tt},{});return Object.values(wt)}),Ye=Cu(xe,1),pt=Ye[0];return pt},Gi=function(){var J=(0,ei.b)(),K=Ko(),xe=(0,i.TH)(),Ye=xe.pathname,pt=Wi(Ye.slice(1),J),wt=pt?Ye.replace(pt,function(Tt){return Tt.replace(/([^/]+)(\/[^/]+\/?)$/,"$1")}):Ye;return wt?K[wt]:[]},ku='"use strict";(()=>{var P=Object.create;var k=Object.defineProperty;var z=Object.getOwnPropertyDescriptor;var D=Object.getOwnPropertyNames,R=Object.getOwnPropertySymbols,B=Object.getPrototypeOf,E=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var O=(i,e,n)=>e in i?k(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n,I=(i,e)=>{for(var n in e||(e={}))E.call(e,n)&&O(i,n,e[n]);if(R)for(var n of R(e))L.call(e,n)&&O(i,n,e[n]);return i};var N=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);var F=(i,e,n,u)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of D(e))!E.call(i,r)&&r!==n&&k(i,r,{get:()=>e[r],enumerable:!(u=z(e,r))||u.enumerable});return i};var W=(i,e,n)=>(n=i!=null?P(B(i)):{},F(e||!i||!i.__esModule?k(n,"default",{value:i,enumerable:!0}):n,i));var j=N((K,w)=>{w.exports=function(i){var e={};function n(u){if(e[u])return e[u].exports;var r=e[u]={exports:{},id:u,loaded:!1};return i[u].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}return n.m=i,n.c=e,n.p="",n(0)}([function(i,e,n){i.exports=n(1)},function(i,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=n(2);Object.defineProperty(e,"combineChunks",{enumerable:!0,get:function(){return u.combineChunks}}),Object.defineProperty(e,"fillInChunks",{enumerable:!0,get:function(){return u.fillInChunks}}),Object.defineProperty(e,"findAll",{enumerable:!0,get:function(){return u.findAll}}),Object.defineProperty(e,"findChunks",{enumerable:!0,get:function(){return u.findChunks}})},function(i,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=e.findAll=function(t){var g=t.autoEscape,c=t.caseSensitive,f=c===void 0?!1:c,d=t.findChunks,o=d===void 0?r:d,h=t.sanitize,v=t.searchWords,T=t.textToHighlight;return l({chunksToHighlight:u({chunks:o({autoEscape:g,caseSensitive:f,sanitize:h,searchWords:v,textToHighlight:T})}),totalLength:T?T.length:0})},u=e.combineChunks=function(t){var g=t.chunks;return g=g.sort(function(c,f){return c.start-f.start}).reduce(function(c,f){if(c.length===0)return[f];var d=c.pop();if(f.start<=d.end){var o=Math.max(d.end,f.end);c.push({highlight:!1,start:d.start,end:o})}else c.push(d,f);return c},[]),g},r=function(t){var g=t.autoEscape,c=t.caseSensitive,f=t.sanitize,d=f===void 0?p:f,o=t.searchWords,h=t.textToHighlight;return h=d(h),o.filter(function(v){return v}).reduce(function(v,T){T=d(T),g&&(T=a(T));for(var m=new RegExp(T,c?"g":"gi"),y=void 0;y=m.exec(h);){var S=y.index,$=m.lastIndex;$>S&&v.push({highlight:!1,start:S,end:$}),y.index===m.lastIndex&&m.lastIndex++}return v},[])};e.findChunks=r;var l=e.fillInChunks=function(t){var g=t.chunksToHighlight,c=t.totalLength,f=[],d=function(v,T,m){T-v>0&&f.push({start:v,end:T,highlight:m})};if(g.length===0)d(0,c,!1);else{var o=0;g.forEach(function(h){d(o,h.start,!1),d(h.start,h.end,!0),o=h.end}),d(o,c,!1)}return f};function p(s){return s}function a(s){return s.replace(/[\\-\\[\\]\\/\\{\\}\\(\\)\\*\\+\\?\\.\\\\\\^\\$\\|]/g,"\\\\$&")}}])});var C=W(j()),H="tab";function M(i,e,n,u,r){let l=r!==void 0,p=u.reduce((a,s)=>(s.tocIndex===r&&(a[s.paraId]=(a[s.paraId]||"").concat(s.value)),a),[]).filter(Boolean);return Boolean(p.length)||l?{rawTitle:i,title:e,link:n,paragraphs:u.reduce((a,s)=>{var t,g;return s.tocIndex===r&&((g=a[t=s.paraId])!=null||(a[t]=""),a[s.paraId]+=s.value),a},[]).filter(Boolean)}:null}function x(i){return[i.title,i.subtitle].filter(Boolean).join(" ")}function _(i,e,n){let u=[],r=Object.values(e).reduce((l,p)=>{var a,s;return p.asset&&((s=l[a=p.routeId])!=null||(l[a]=[]),l[p.routeId].push(p)),l},{});return Object.values(i).forEach(l=>{var p;if("meta"in l&&!("isLayout"in l)){let a=l.meta,s=l.path.replace(/^([^/])/,"/$1")||"/",t=n.find(o=>s===o.link||s.startsWith(`${o.activePath}/`)),g=(r[l.id]||[]).map(o=>{var h;return(h=o.asset)==null?void 0:h.id}),c=M("",x(a.frontmatter),s,a.texts),f=a.toc.reduce((o,h,v)=>(!g.includes(h.id)&&h.depth>1&&o.push(M(h.title,`${x(a.frontmatter)} - ${h.title}`,`${s}#${h.id}`,a.texts,v)),o),[]),d=(a.tabs||[]).reduce((o,{key:h,meta:v})=>{let T=M("",`${x(a.frontmatter)} - ${v.frontmatter.title}`,`${s}?${H}=${h}`,v.texts);return T&&o.push(T),o.push(...v.toc.map((m,y)=>M(m.title,`${x(a.frontmatter)} - ${v.frontmatter.title} - ${m.title}`,`${s}?${H}=${h}#${m.id}`,v.texts,y))),o},[]);u.push({navTitle:t==null?void 0:t.title,navOrder:t?n.indexOf(t):1/0,title:x(a.frontmatter),link:s,sections:[...c?[c]:[],...f,...d],demos:((p=r[l.id])==null?void 0:p.map(o=>({link:`${s}#${o.asset.id}`,rawTitle:o.asset.title||"",title:o.asset.title||x(a.frontmatter),description:o.asset.description||"",keywords:o.asset.keywords||[]})))||[]})}}),u}function b(i="",e,n=1){let u=(0,C.findAll)({textToHighlight:i,searchWords:e,autoEscape:!0}),r={};return[u.map(({start:l,end:p,highlight:a},s)=>{let t={text:i.slice(l,p)};return s===0&&!a&&u.length>1&&t.text.length>20&&(t.text=`...${t.text.slice(-20)}`),a&&(t.highlighted=!0,r[e.find(g=>t.text.includes(g))]=n),t}),r]}function Y(i,e){let n=e.split(" "),u=new RegExp(e.replace(/[.*+?^${}()|[\\]\\\\]/g,"\\\\$&").replace(" ","|"),"gi"),r={};return i.forEach(l=>{var a,s;let p=[];if(l.sections.forEach(t=>{for(let g of t.paragraphs)if(u.test(g)){let[c,f]=b(t.title,n,10),[d,o]=b(g,n);p.push({type:"content",link:t.link,priority:Object.values(I(I({},o),f)).reduce((h,v)=>h+v,0),highlightTitleTexts:c,highlightTexts:d});return}if(u.test(t.rawTitle)){let[g,c]=b(t.title,n,10);p.push({type:"title",link:t.link,priority:Object.values(c).reduce((f,d)=>f+d,0),highlightTitleTexts:g,highlightTexts:b(t.paragraphs[0]||"",n)[0]})}}),l.demos.forEach(t=>{if(u.test(t.rawTitle)||u.test(t.description)){let[g,c]=b(t.title,n,10),[f,d]=b(t.description,n);p.push({type:"demo",link:t.link,priority:Object.values(I(I({},d),c)).reduce((o,h)=>o+h,0),highlightTitleTexts:g,highlightTexts:f})}}),u.test(l.title)){let[t,g]=b(l.title,n,100);p.push({type:"page",link:l.link,priority:Object.values(g).reduce((c,f)=>c+f,0),highlightTitleTexts:t,highlightTexts:b(((a=l.sections[0])==null?void 0:a.paragraphs[0])||"",n)[0]})}if(p.length){let t=l.navTitle||"$ROOT";(s=r[t])!=null||(r[t]={title:l.navTitle,priority:l.navOrder*1e3,hints:[]}),r[t].hints.push(...p)}}),Object.values(r).forEach(({hints:l})=>{l.sort((p,a)=>a.priority-p.priority)}),Object.values(r).sort((l,p)=>p.priority-l.priority)}var A;self.onmessage=({data:i})=>{switch(i.action){case"generate-metadata":A=_(i.args.routes,i.args.demos,i.args.nav);break;case"get-search-result":self.postMessage(Y(A,i.args.keywords));break;default:}};})();\n';function Qn(U,J){var K=Object.keys(U);if(Object.getOwnPropertySymbols){var xe=Object.getOwnPropertySymbols(U);J&&(xe=xe.filter(function(Ye){return Object.getOwnPropertyDescriptor(U,Ye).enumerable})),K.push.apply(K,xe)}return K}function Oo(U){for(var J=1;J<arguments.length;J++){var K=arguments[J]!=null?arguments[J]:{};J%2?Qn(Object(K),!0).forEach(function(xe){Ki(U,xe,K[xe])}):Object.getOwnPropertyDescriptors?Object.defineProperties(U,Object.getOwnPropertyDescriptors(K)):Qn(Object(K)).forEach(function(xe){Object.defineProperty(U,xe,Object.getOwnPropertyDescriptor(K,xe))})}return U}function Ki(U,J,K){return J in U?Object.defineProperty(U,J,{value:K,enumerable:!0,configurable:!0,writable:!0}):U[J]=K,U}function oo(U,J){return Yi(U)||oi(U,J)||Vi(U,J)||js()}function js(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vi(U,J){if(U){if(typeof U=="string")return Vo(U,J);var K=Object.prototype.toString.call(U).slice(8,-1);if(K==="Object"&&U.constructor&&(K=U.constructor.name),K==="Map"||K==="Set")return Array.from(U);if(K==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(K))return Vo(U,J)}}function Vo(U,J){(J==null||J>U.length)&&(J=U.length);for(var K=0,xe=new Array(J);K<J;K++)xe[K]=U[K];return xe}function oi(U,J){var K=U==null?null:typeof Symbol!="undefined"&&U[Symbol.iterator]||U["@@iterator"];if(K!=null){var xe=[],Ye=!0,pt=!1,wt,Tt;try{for(K=K.call(U);!(Ye=(wt=K.next()).done)&&(xe.push(wt.value),!(J&&xe.length===J));Ye=!0);}catch(zt){pt=!0,Tt=zt}finally{try{!Ye&&K.return!=null&&K.return()}finally{if(pt)throw Tt}}return xe}}function Yi(U){if(Array.isArray(U))return U}var ii;typeof window!="undefined"&&(ii=new Worker(URL.createObjectURL(new Blob([ku],{type:"application/javascript"}))));var Bs=function(){var J=(0,o.useRef)(),K=(0,st.RX)(),xe=(0,b.W)(),Ye=xe.demos,pt=(0,o.useState)(!1),wt=oo(pt,2),Tt=wt[0],zt=wt[1],Ut=(0,o.useState)(""),ar=oo(Ut,2),gr=ar[0],mr=ar[1],Tr=te(),_r=(0,o.useState)([]),Kr=oo(_r,2),En=Kr[0],Hn=Kr[1],Oa=(0,o.useCallback)(function(qn){zt(!0),mr(qn)},[]);return(0,o.useEffect)(function(){ii.onmessage=function(qn){Hn(qn.data),zt(!1)}},[]),(0,o.useEffect)(function(){var qn=Object.entries(Ye).reduce(function(ui,si){var io=oo(si,2),Ai=io[0],_a=io[1],Xi=_a.asset,Io=_a.routeId;return Oo(Oo({},ui),{},Ki({},Ai,{asset:Xi,routeId:Io}))},{});ii.postMessage({action:"generate-metadata",args:{routes:JSON.parse(JSON.stringify(K)),nav:Tr,demos:qn}})},[K,Ye,Tr]),(0,o.useEffect)(function(){var qn=gr.trim();qn?(clearTimeout(J.current),J.current=window.setTimeout(function(){ii.postMessage({action:"get-search-result",args:{keywords:qn}})},200)):Hn([])},[gr]),{keywords:gr,setKeywords:Oa,result:En,loading:Tt}}},90482:function(s,f,e){"use strict";e.d(f,{k:function(){return i},s:function(){return u}});var i=[{id:"zh-CN",name:"\u4E2D\u6587",base:"/"},{id:"en-US",name:"English",base:"/en-US"}],u={"en-US":{"header.search.placeholder":"Type keywords...","header.color.mode.light":"Light Mode","header.color.mode.dark":"Dark Mode","header.color.mode.auto":"Follow System","header.social.github":"GitHub","header.social.weibo":"Weibo","header.social.twitter":"Twitter","header.social.gitlab":"GitLab","header.social.facebook":"Facebook","header.social.zhihu":"Zhihu","header.social.yuque":"Yuque","header.social.linkedin":"Linkedin","previewer.actions.code.expand":"Show Code","previewer.actions.code.shrink":"Hide Code","previewer.actions.codesandbox":"Open in CodeSandbox","previewer.actions.codepen":"Open in CodePen (Not implemented)","previewer.actions.stackblitz":"Open in StackBlitz","previewer.actions.separate":"Open in separate page","404.title":"PAGE NOT FOUND","404.back":"Back to homepage","api.component.name":"Name","api.component.description":"Description","api.component.type":"Type","api.component.default":"Default","api.component.required":"(required)","api.component.unavailable":"apiParser must be enabled to use auto-generated API","api.component.loading":"Properties definition is resolving, wait a moment...","api.component.not.found":"Properties definition not found for {id} component","content.tabs.default":"Doc","search.not.found":"No content was found","layout.sidebar.btn":"Sidebar"},"zh-CN":{"header.search.placeholder":"\u8F93\u5165\u5173\u952E\u5B57\u641C\u7D22...","header.color.mode.light":"\u4EAE\u8272\u6A21\u5F0F","header.color.mode.dark":"\u6697\u8272\u6A21\u5F0F","header.color.mode.auto":"\u8DDF\u968F\u7CFB\u7EDF","header.social.github":"GitHub","header.social.weibo":"\u5FAE\u535A","header.social.twitter":"Twitter","header.social.gitlab":"GitLab","header.social.facebook":"Facebook","header.social.zhihu":"\u77E5\u4E4E","header.social.yuque":"\u8BED\u96C0","header.social.linkedin":"Linkedin","previewer.actions.code.expand":"\u5C55\u5F00\u4EE3\u7801","previewer.actions.code.shrink":"\u6536\u8D77\u4EE3\u7801","previewer.actions.codesandbox":"\u5728 CodeSandbox \u4E2D\u6253\u5F00","previewer.actions.codepen":"\u5728 CodePen \u4E2D\u6253\u5F00\uFF08\u672A\u5B9E\u73B0\uFF09","previewer.actions.stackblitz":"\u5728 StackBlitz \u4E2D\u6253\u5F00","previewer.actions.separate":"\u5728\u72EC\u7ACB\u9875\u9762\u4E2D\u6253\u5F00","404.title":"\u9875\u9762\u672A\u627E\u5230","404.back":"\u8FD4\u56DE\u9996\u9875","api.component.name":"\u5C5E\u6027\u540D","api.component.description":"\u63CF\u8FF0","api.component.type":"\u7C7B\u578B","api.component.default":"\u9ED8\u8BA4\u503C","api.component.required":"(\u5FC5\u9009)","api.component.unavailable":"\u5FC5\u987B\u542F\u7528 apiParser \u624D\u80FD\u4F7F\u7528\u81EA\u52A8 API \u7279\u6027","api.component.loading":"\u5C5E\u6027\u5B9A\u4E49\u6B63\u5728\u89E3\u6790\u4E2D\uFF0C\u7A0D\u7B49\u7247\u523B...","api.component.not.found":"\u672A\u627E\u5230 {id} \u7EC4\u4EF6\u7684\u5C5E\u6027\u5B9A\u4E49","content.tabs.default":"\u6587\u6863","search.not.found":"\u672A\u627E\u5230\u76F8\u5173\u5185\u5BB9","layout.sidebar.btn":"\u4FA7\u8FB9\u83DC\u5355"}}},86874:function(s,f,e){"use strict";e.d(f,{wx:function(){return ft},DE:function(){return ee},C3:function(){return Ft},eA:function(){return Mt}});var i=e(27424),u=e.n(i),o=e(67294),n={},d={title:"Docs",toc:"menu",filename:"docs/index.en-US.md",hero:{title:"React PaperCSS",description:"A react ui library based on papercss",actions:[{text:"Get started",link:"/guide"},{text:"Components",link:"/components/alert"}]}},v=[],p=[],h={},x={title:"\u8D77\u6B65",toc:"content",filename:"docs/guide.md",description:"React PaperCSS \u662F\u57FA\u4E8E PaperCSS \u4E8C\u6B21\u5206\u88C5\u7684\u4E00\u4E2A React ui \u7EC4\u4EF6\u5E93"},y=[{id:"\u5F00\u59CB",depth:1,title:"\u5F00\u59CB"},{id:"\u5B89\u88C5",depth:2,title:"\u5B89\u88C5"},{id:"\u4F7F\u7528",depth:2,title:"\u4F7F\u7528"},{id:"\u4E3B\u9898",depth:2,title:"\u4E3B\u9898"}],b=[{value:"React PaperCSS \u662F\u57FA\u4E8E ",paraId:0,tocIndex:0},{value:"PaperCSS",paraId:0,tocIndex:0},{value:" \u4E8C\u6B21\u5206\u88C5\u7684\u4E00\u4E2A React ui \u7EC4\u4EF6\u5E93",paraId:0,tocIndex:0},{value:"React PaperCSS \u9ED8\u8BA4\u5E76\u4E0D\u5305\u542B PaperCSS, \u8BF7\u786E\u4FDD\u5148\u5B89\u88C5 PaperCSS",paraId:1,tocIndex:1},{value:`$ npm install papercss react-papercss-design
`,paraId:2,tocIndex:1},{value:"\u5F85\u5B8C\u6210",paraId:3,tocIndex:2},{value:"\u5F85\u5B8C\u6210",paraId:4,tocIndex:3}],T={},A={title:"Docs",toc:"menu",filename:"docs/index.md",hero:{title:"React PaperCSS Design",description:"\u57FA\u4E8E PaperCSS \u7684 React ui \u7EC4\u4EF6\u5E93",actions:[{text:"\u8D77\u6B65",link:"/guide"},{text:"\u7EC4\u4EF6",link:"/components/alert"},{text:"Hooks",link:"/hooks/a"}]}},C=[],$=[],B={"alert-demo-alert-base":{component:o.lazy(function(){return Promise.all([e.e(384),e.e(289),e.e(31)]).then(e.bind(e,20139))}),asset:{type:"BLOCK",id:"alert-demo-alert-base",refAtomIds:["Alert"],dependencies:{"index.tsx":{type:"FILE",value:e(9107).Z},"react-papercss-design":{type:"NPM",value:"0.0.2"}},title:"\u57FA\u672C",description:"\u6700\u7B80\u5355\u7684\u7528\u6CD5\uFF0C\u9002\u7528\u4E8E\u7B80\u77ED\u7684\u8B66\u544A\u63D0\u793A\u3002"}},"alert-demo-alert-dismissible":{component:o.lazy(function(){return Promise.all([e.e(384),e.e(289),e.e(31)]).then(e.bind(e,36026))}),asset:{type:"BLOCK",id:"alert-demo-alert-dismissible",refAtomIds:["Alert"],dependencies:{"index.tsx":{type:"FILE",value:e(6621).Z},"react-papercss-design":{type:"NPM",value:"0.0.2"}},title:"\u53EF\u5173\u95ED\u7684",description:"\u663E\u793A\u5173\u95ED\u6309\u94AE\uFF0C\u70B9\u51FB\u53EF\u5173\u95ED\u8B66\u544A\u63D0\u793A"}},"alert-demo-alert-custom-close":{component:o.lazy(function(){return Promise.all([e.e(384),e.e(289),e.e(31)]).then(e.bind(e,23477))}),asset:{type:"BLOCK",id:"alert-demo-alert-custom-close",refAtomIds:["Alert"],dependencies:{"index.tsx":{type:"FILE",value:e(52525).Z},"react-papercss-design":{type:"NPM",value:"0.0.2"}},title:"\u81EA\u5B9A\u4E49\u5173\u95ED",description:"\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5173\u95ED\uFF0C\u81EA\u5B9A\u4E49\u7684\u6587\u5B57\u4F1A\u66FF\u6362\u539F\u5148\u7684\u5173\u95ED Icon"}}},L={title:"Alert",toc:"content",filename:"src/Alert/index.md",atomId:"Alert",demo:{cols:2},group:"\u57FA\u672C",description:"\u8B66\u544A\u63D0\u793A\uFF0C\u5C55\u73B0\u9700\u8981\u5173\u6CE8\u7684\u4FE1\u606F\u3002"},z=[{id:"alert-\u8B66\u544A\u63D0\u793A",depth:1,title:"Alert \u8B66\u544A\u63D0\u793A"},{id:"\u793A\u4F8B",depth:2,title:"\u793A\u4F8B"},{id:"alert-demo-alert-base",depth:3,title:"\u57FA\u672C"},{id:"alert-demo-alert-dismissible",depth:3,title:"\u53EF\u5173\u95ED\u7684"},{id:"alert-demo-alert-custom-close",depth:3,title:"\u81EA\u5B9A\u4E49\u5173\u95ED"}],H=[{value:"\u8B66\u544A\u63D0\u793A\uFF0C\u5C55\u73B0\u9700\u8981\u5173\u6CE8\u7684\u4FE1\u606F\u3002",paraId:0,tocIndex:0}],W={"src-article-demo-articlebase":{component:o.lazy(function(){return Promise.all([e.e(384),e.e(289),e.e(433)]).then(e.bind(e,86046))}),asset:{type:"BLOCK",id:"src-article-demo-articlebase",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(18433).Z},"react-papercss-design":{type:"NPM",value:"0.0.2"}},description:"\u6587\u7AE0\u57FA\u672C\u7684\u6392\u73ED\u548C\u5E03\u5C40\u3002",title:"\u57FA\u672C"}}},R={title:"Article",toc:"content",filename:"src/Article/index.md",demo:{cols:2},group:"\u57FA\u672C",description:"\u6587\u7AE0"},F=[{id:"article-\u6587\u7AE0",depth:1,title:"Article \u6587\u7AE0"},{id:"\u793A\u4F8B",depth:2,title:"\u793A\u4F8B"},{id:"src-article-demo-articlebase",depth:3,title:"\u57FA\u672C"}],V=[{value:"\u6587\u7AE0",paraId:0,tocIndex:0}],q={"backtop-demo-backtopbase":{component:o.lazy(function(){return Promise.all([e.e(384),e.e(289),e.e(316)]).then(e.bind(e,15753))}),asset:{type:"BLOCK",id:"backtop-demo-backtopbase",refAtomIds:["BackTop"],dependencies:{"index.tsx":{type:"FILE",value:e(49214).Z},react:{type:"NPM",value:"18.2.0"},"react-papercss-design":{type:"NPM",value:"0.0.2"}},description:"\u57FA\u672C\u7684\u56DE\u5230\u9876\u90E8\u3002",title:"\u57FA\u672C"}}},Q={title:"BackTop",toc:"content",filename:"src/BackTop/index.md",atomId:"BackTop",demo:{cols:2},group:"\u57FA\u672C",description:"\u7528\u4E8E\u8FD4\u56DE\u9875\u9762\u9876\u90E8"},X=[{id:"backtop-\u8FD4\u56DE\u9876\u90E8",depth:1,title:"BackTop \u8FD4\u56DE\u9876\u90E8"},{id:"\u793A\u4F8B",depth:2,title:"\u793A\u4F8B"},{id:"backtop-demo-backtopbase",depth:3,title:"\u57FA\u672C"}],ie=[{value:"\u7528\u4E8E\u8FD4\u56DE\u9875\u9762\u9876\u90E8",paraId:0,tocIndex:0}],Oe={"src-breadcrumb-demo-breadcrumbbase":{component:o.lazy(function(){return Promise.all([e.e(384),e.e(289),e.e(433)]).then(e.bind(e,65164))}),asset:{type:"BLOCK",id:"src-breadcrumb-demo-breadcrumbbase",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(21193).Z},"react-papercss-design":{type:"NPM",value:"0.0.2"}},description:"\u57FA\u672C\u7684\u9762\u5305\u5C51\u3002",title:"\u57FA\u672C"}},"src-breadcrumb-demo-breadcrumboptions":{component:o.lazy(function(){return Promise.all([e.e(384),e.e(289),e.e(433)]).then(e.bind(e,66896))}),asset:{type:"BLOCK",id:"src-breadcrumb-demo-breadcrumboptions",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(23561).Z},"react-papercss-design":{type:"NPM",value:"0.0.2"}},description:"\u4F7F\u7528 options \u5C5E\u6027\u914D\u7F6E\u9762\u5305\u5C51\u5185\u5BB9\u3002",title:"\u914D\u7F6E\u65B9\u5F0F\u7684\u9762\u5305\u5C51"}}},Se={title:"Breadcrumb",toc:"content",filename:"src/Breadcrumb/index.md",demo:{cols:2},group:"\u57FA\u672C",description:"\u663E\u793A\u5F53\u524D\u9875\u9762\u5728\u7CFB\u7EDF\u5C42\u7EA7\u7ED3\u6784\u4E2D\u7684\u4F4D\u7F6E\uFF0C\u5E76\u80FD\u5411\u4E0A\u8FD4\u56DE\u3002"},Be=[{id:"breadcrumb-\u9762\u5305\u5C51",depth:1,title:"Breadcrumb \u9762\u5305\u5C51"},{id:"\u793A\u4F8B",depth:2,title:"\u793A\u4F8B"},{id:"src-breadcrumb-demo-breadcrumbbase",depth:3,title:"\u57FA\u672C"},{id:"src-breadcrumb-demo-breadcrumboptions",depth:3,title:"\u914D\u7F6E\u65B9\u5F0F\u7684\u9762\u5305\u5C51"}],ue=[{value:"\u663E\u793A\u5F53\u524D\u9875\u9762\u5728\u7CFB\u7EDF\u5C42\u7EA7\u7ED3\u6784\u4E2D\u7684\u4F4D\u7F6E\uFF0C\u5E76\u80FD\u5411\u4E0A\u8FD4\u56DE\u3002",paraId:0,tocIndex:0}],S={"button-demo-buttonbase":{component:o.lazy(function(){return Promise.all([e.e(384),e.e(289),e.e(570)]).then(e.bind(e,42854))}),asset:{type:"BLOCK",id:"button-demo-buttonbase",refAtomIds:["Button"],dependencies:{"index.tsx":{type:"FILE",value:e(74379).Z},"react-papercss-design":{type:"NPM",value:"0.0.2"}},description:"\u6309\u94AE\u57FA\u672C\u7684\u6837\u5F0F\u3002",title:"\u57FA\u672C"}},"button-demo-buttonsize":{component:o.lazy(function(){return Promise.all([e.e(384),e.e(289),e.e(570)]).then(e.bind(e,88033))}),asset:{type:"BLOCK",id:"button-demo-buttonsize",refAtomIds:["Button"],dependencies:{"index.tsx":{type:"FILE",value:e(98959).Z},"react-papercss-design":{type:"NPM",value:"0.0.2"}},description:"\u6309\u94AE\u6709\u5927\u3001\u4E2D\u3001\u5C0F\u4E09\u79CD\u5C3A\u5BF8\u3002\u901A\u8FC7\u8BBE\u7F6Esize\u4E3Alarge small\u5206\u522B\u628A\u6309\u94AE\u8BBE\u4E3A\u5927\u3001\u5C0F\u5C3A\u5BF8\u3002\u82E5\u4E0D\u8BBE\u7F6Esize\uFF0C\u5219\u5C3A\u5BF8\u4E3A\u4E2D\u3002",title:"\u6309\u94AE\u5C3A\u5BF8"}}},g={title:"Button",toc:"content",filename:"src/Button/index.md",atomId:"Button",demo:{cols:2},group:"\u57FA\u672C",description:"\u6309\u94AE\u7528\u4E8E\u5F00\u59CB\u4E00\u4E2A\u5373\u65F6\u64CD\u4F5C\u3002"},I=[{id:"button-\u6309\u94AE",depth:1,title:"Button \u6309\u94AE"},{id:"\u4F55\u65F6\u4F7F\u7528",depth:2,title:"\u4F55\u65F6\u4F7F\u7528"},{id:"\u793A\u4F8B",depth:2,title:"\u793A\u4F8B"},{id:"button-demo-buttonbase",depth:3,title:"\u57FA\u672C"},{id:"button-demo-buttonsize",depth:3,title:"\u6309\u94AE\u5C3A\u5BF8"}],k=[{value:"\u6309\u94AE\u7528\u4E8E\u5F00\u59CB\u4E00\u4E2A\u5373\u65F6\u64CD\u4F5C\u3002",paraId:0,tocIndex:0},{value:"\u6807\u8BB0\u4E86\u4E00\u4E2A\uFF08\u6216\u5C01\u88C5\u4E00\u7EC4\uFF09\u64CD\u4F5C\u547D\u4EE4\uFF0C\u54CD\u5E94\u7528\u6237\u70B9\u51FB\u884C\u4E3A\uFF0C\u89E6\u53D1\u76F8\u5E94\u7684\u4E1A\u52A1\u903B\u8F91\u3002",paraId:1,tocIndex:1}],P={"src-config-provider-demo-configprovidertheme":{component:o.lazy(function(){return Promise.all([e.e(384),e.e(289),e.e(433)]).then(e.bind(e,91182))}),asset:{type:"BLOCK",id:"src-config-provider-demo-configprovidertheme",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(95550).Z},"react-papercss-design":{type:"NPM",value:"0.0.2"}},description:"\u9ED8\u8BA4\u4E3A\u4EAE\u8272\u4E3B\u9898, \u53EF\u914D\u7F6E\u4E3A\u6697\u8272\u4E3B\u9898, \u540C\u65F6\u53EF\u901A\u8FC7\u914D\u5408 useTheme",title:"\u4E3B\u9898"}}},D={title:"ConfigProvider",toc:"content",filename:"src/ConfigProvider/index.md",group:"\u5176\u4ED6",description:"\u4E3A\u7EC4\u4EF6\u63D0\u4F9B\u7EDF\u4E00\u7684\u5168\u5C40\u5316\u914D\u7F6E\u3002"},oe=[{id:"configprovider",depth:1,title:"ConfigProvider"},{id:"\u4F7F\u7528",depth:2,title:"\u4F7F\u7528"},{id:"\u793A\u4F8B",depth:2,title:"\u793A\u4F8B"},{id:"src-config-provider-demo-configprovidertheme",depth:3,title:"\u4E3B\u9898"}],he=[{value:"\u4E3A\u7EC4\u4EF6\u63D0\u4F9B\u7EDF\u4E00\u7684\u5168\u5C40\u5316\u914D\u7F6E\u3002",paraId:0,tocIndex:0},{value:"ConfigProvider \u4F7F\u7528 React \u7684 ",paraId:1,tocIndex:1},{value:"context",paraId:1,tocIndex:1},{value:" \u7279\u6027\uFF0C\u53EA\u9700\u5728\u5E94\u7528\u5916\u56F4\u5305\u88F9\u4E00\u6B21\u5373\u53EF\u5168\u5C40\u751F\u6548\u3002",paraId:1,tocIndex:1},{value:`import React from 'react';
import { ConfigProvider } from 'react-papercss-design';

// ...
const Demo = () => (
  <ConfigProvider theme="dark">
    <App />
  </ConfigProvider>
);

export default Demo;
`,paraId:2,tocIndex:1}],Re={"src-progress-demo-progressbase":{component:o.lazy(function(){return Promise.all([e.e(384),e.e(289),e.e(433)]).then(e.bind(e,22056))}),asset:{type:"BLOCK",id:"src-progress-demo-progressbase",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(60425).Z},"react-papercss-design":{type:"NPM",value:"0.0.2"}},description:"\u57FA\u672C\u7684\u8FDB\u5EA6\u6761",title:"\u57FA\u672C"}}},re={title:"Progress",toc:"content",filename:"src/Progress/index.md",demo:{cols:2},group:"\u57FA\u672C",description:"\u5C55\u793A\u64CD\u4F5C\u7684\u5F53\u524D\u8FDB\u5EA6\u3002"},Ee=[{id:"progress-\u8FDB\u5EA6\u6761",depth:1,title:"Progress \u8FDB\u5EA6\u6761"},{id:"\u4F55\u65F6\u4F7F\u7528",depth:2,title:"\u4F55\u65F6\u4F7F\u7528"},{id:"\u793A\u4F8B",depth:2,title:"\u793A\u4F8B"},{id:"src-progress-demo-progressbase",depth:3,title:"\u57FA\u672C"}],Ve=[{value:"\u5C55\u793A\u64CD\u4F5C\u7684\u5F53\u524D\u8FDB\u5EA6\u3002",paraId:0,tocIndex:0},{value:"\u5728\u64CD\u4F5C\u9700\u8981\u8F83\u957F\u65F6\u95F4\u624D\u80FD\u5B8C\u6210\u65F6\uFF0C\u4E3A\u7528\u6237\u663E\u793A\u8BE5\u64CD\u4F5C\u7684\u5F53\u524D\u8FDB\u5EA6\u548C\u72B6\u6001\u3002",paraId:1,tocIndex:1},{value:"\u5F53\u4E00\u4E2A\u64CD\u4F5C\u4F1A\u6253\u65AD\u5F53\u524D\u754C\u9762\uFF0C\u6216\u8005\u9700\u8981\u5728\u540E\u53F0\u8FD0\u884C\uFF0C\u4E14\u8017\u65F6\u53EF\u80FD\u8D85\u8FC7 2 \u79D2\u65F6\uFF1B",paraId:2,tocIndex:1},{value:"\u5F53\u9700\u8981\u663E\u793A\u4E00\u4E2A\u64CD\u4F5C\u5B8C\u6210\u7684\u767E\u5206\u6BD4\u65F6\u3002",paraId:2,tocIndex:1}],Xe={"src-space-demo-spacegap":{component:o.lazy(function(){return Promise.all([e.e(384),e.e(289),e.e(433)]).then(e.bind(e,23441))}),asset:{type:"BLOCK",id:"src-space-demo-spacegap",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(19854).Z},"react-papercss-design":{type:"NPM",value:"0.0.2"}},description:"\u76F8\u90BB\u7EC4\u4EF6\u6C34\u5E73\u95F4\u8DDD\u3002",title:"\u57FA\u672C"}}},Ze={title:"Space",toc:"content",filename:"src/Space/index.md",demo:{cols:2},group:"\u5E03\u5C40",description:"\u8BBE\u7F6E\u7EC4\u4EF6\u4E4B\u95F4\u7684\u95F4\u8DDD\u3002"},ht=[{id:"space-\u95F4\u8DDD",depth:1,title:"Space \u95F4\u8DDD"},{id:"\u793A\u4F8B",depth:2,title:"\u793A\u4F8B"},{id:"src-space-demo-spacegap",depth:3,title:"\u57FA\u672C"}],Ct=[{value:"\u8BBE\u7F6E\u7EC4\u4EF6\u4E4B\u95F4\u7684\u95F4\u8DDD\u3002",paraId:0,tocIndex:0}],Bt={"switch-demo-switch-base":{component:o.lazy(function(){return Promise.all([e.e(384),e.e(289),e.e(622)]).then(e.bind(e,86216))}),asset:{type:"BLOCK",id:"switch-demo-switch-base",refAtomIds:["Switch"],dependencies:{"index.tsx":{type:"FILE",value:e(29737).Z},"react-papercss-design":{type:"NPM",value:"0.0.2"}},description:"\u975E\u53D7\u63A7\u7EC4\u4EF6\u4E0B\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002",title:"\u57FA\u672C"}},"switch-demo-switch-controlled":{component:o.lazy(function(){return Promise.all([e.e(384),e.e(289),e.e(622)]).then(e.bind(e,60580))}),asset:{type:"BLOCK",id:"switch-demo-switch-controlled",refAtomIds:["Switch"],dependencies:{"index.tsx":{type:"FILE",value:e(33028).Z},react:{type:"NPM",value:"18.2.0"},"react-papercss-design":{type:"NPM",value:"0.0.2"}},description:"\u4F5C\u4E3A\u53D7\u63A7\u7EC4\u4EF6\u65F6\u7684\u7528\u6CD5\u3002",title:"\u53D7\u63A7"}},"switch-demo-switch-type":{component:o.lazy(function(){return Promise.all([e.e(384),e.e(289),e.e(622)]).then(e.bind(e,39780))}),asset:{type:"BLOCK",id:"switch-demo-switch-type",refAtomIds:["Switch"],dependencies:{"index.tsx":{type:"FILE",value:e(23268).Z},"react-papercss-design":{type:"NPM",value:"0.0.2"}},description:"\u4E0D\u540C\u98CE\u683C\u7684\u7EC4\u4EF6",title:"\u98CE\u683C"}},"switch-demo-switch-disabled":{component:o.lazy(function(){return Promise.all([e.e(384),e.e(289),e.e(622)]).then(e.bind(e,20967))}),asset:{type:"BLOCK",id:"switch-demo-switch-disabled",refAtomIds:["Switch"],dependencies:{"index.tsx":{type:"FILE",value:e(41929).Z},"react-papercss-design":{type:"NPM",value:"0.0.2"}},description:"\u7981\u7528\u72B6\u6001\u4E0B\u7684\u5F00\u5173",title:"\u7981\u7528"}}},pr={title:"Switch",toc:"content",filename:"src/Switch/index.md",atomId:"Switch",demo:{cols:2},group:"\u57FA\u672C",description:"\u5F00\u5173\u9009\u62E9\u5668\u3002"},$r=[{id:"switch-\u5F00\u5173",depth:1,title:"Switch \u5F00\u5173"},{id:"\u793A\u4F8B",depth:2,title:"\u793A\u4F8B"},{id:"switch-demo-switch-base",depth:3,title:"\u57FA\u672C"},{id:"switch-demo-switch-controlled",depth:3,title:"\u53D7\u63A7"},{id:"switch-demo-switch-type",depth:3,title:"\u98CE\u683C"},{id:"switch-demo-switch-disabled",depth:3,title:"\u7981\u7528"}],tn=[{value:"\u5F00\u5173\u9009\u62E9\u5668\u3002",paraId:0,tocIndex:0}],tt={"switchtile-demo-switchtilebase":{component:o.lazy(function(){return Promise.all([e.e(384),e.e(289),e.e(408)]).then(e.bind(e,8856))}),asset:{type:"BLOCK",id:"switchtile-demo-switchtilebase",refAtomIds:["SwitchTile"],dependencies:{"index.tsx":{type:"FILE",value:e(34844).Z},"react-papercss-design":{type:"NPM",value:"0.0.2"}},description:"\u975E\u53D7\u63A7\u7EC4\u4EF6\u4E0B\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002",title:"\u57FA\u672C"}},"switchtile-demo-switchtilecontrolled":{component:o.lazy(function(){return Promise.all([e.e(384),e.e(289),e.e(408)]).then(e.bind(e,27924))}),asset:{type:"BLOCK",id:"switchtile-demo-switchtilecontrolled",refAtomIds:["SwitchTile"],dependencies:{"index.tsx":{type:"FILE",value:e(40108).Z},react:{type:"NPM",value:"18.2.0"},"react-papercss-design":{type:"NPM",value:"0.0.2"}},description:"\u4F5C\u4E3A\u53D7\u63A7\u7EC4\u4EF6\u65F6\u7684\u7528\u6CD5\u3002",title:"\u53D7\u63A7"}},"switchtile-demo-switchtilecustomize":{component:o.lazy(function(){return Promise.all([e.e(384),e.e(289),e.e(408)]).then(e.bind(e,33672))}),asset:{type:"BLOCK",id:"switchtile-demo-switchtilecustomize",refAtomIds:["SwitchTile"],dependencies:{"index.tsx":{type:"FILE",value:e(4263).Z},"react-papercss-design":{type:"NPM",value:"0.0.2"}},description:"\u81EA\u5B9A\u4E49\u9009\u4E2D\u548C\u975E\u9009\u4E2D\u7684\u5185\u5BB9\u548C\u6837\u5F0F",title:"\u81EA\u5B9A\u4E49"}},"switchtile-demo-switchtiledisabled":{component:o.lazy(function(){return Promise.all([e.e(384),e.e(289),e.e(408)]).then(e.bind(e,25797))}),asset:{type:"BLOCK",id:"switchtile-demo-switchtiledisabled",refAtomIds:["SwitchTile"],dependencies:{"index.tsx":{type:"FILE",value:e(98944).Z},"react-papercss-design":{type:"NPM",value:"0.0.2"}},description:"\u7981\u7528\u72B6\u6001\u4E0B\u7684\u74E6\u7247\u5F00\u5173\u3002",title:"\u7981\u7528"}}},Ie={title:"SwitchTile",toc:"content",filename:"src/SwitchTile/index.md",atomId:"SwitchTile",demo:{cols:2},group:"\u57FA\u672C",description:"\u74E6\u7247\u7C7B\u578B\u7684\u5F00\u5173\u9009\u62E9\u5668\u3002"},be=[{id:"switchtile-\u74E6\u7247\u5F00\u5173",depth:1,title:"SwitchTile \u74E6\u7247\u5F00\u5173"},{id:"\u4F55\u65F6\u4F7F\u7528",depth:2,title:"\u4F55\u65F6\u4F7F\u7528"},{id:"\u4EE3\u7801\u6F14\u793A",depth:2,title:"\u4EE3\u7801\u6F14\u793A"},{id:"switchtile-demo-switchtilebase",depth:3,title:"\u57FA\u672C"},{id:"switchtile-demo-switchtilecontrolled",depth:3,title:"\u53D7\u63A7"},{id:"switchtile-demo-switchtilecustomize",depth:3,title:"\u81EA\u5B9A\u4E49"},{id:"switchtile-demo-switchtiledisabled",depth:3,title:"\u7981\u7528"}],ye=[{value:"\u74E6\u7247\u7C7B\u578B\u7684\u5F00\u5173\u9009\u62E9\u5668\u3002",paraId:0,tocIndex:0},{value:"\u9700\u8981\u8868\u793A\u5F00\u5173\u72B6\u6001/\u4E24\u79CD\u72B6\u6001\u4E4B\u95F4\u7684\u5207\u6362\u65F6\uFF1B",paraId:1,tocIndex:1}],je={"src-tabs-demo-tabsbase":{component:o.lazy(function(){return Promise.all([e.e(384),e.e(289),e.e(433)]).then(e.bind(e,53882))}),asset:{type:"BLOCK",id:"src-tabs-demo-tabsbase",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(16290).Z},"react-papercss-design":{type:"NPM",value:"0.0.2"}},description:"\u57FA\u672C\u9009\u9879\u5361, \u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u9879",title:"\u57FA\u672C"}},"src-tabs-demo-tabscontrolled":{component:o.lazy(function(){return Promise.all([e.e(384),e.e(289),e.e(433)]).then(e.bind(e,60663))}),asset:{type:"BLOCK",id:"src-tabs-demo-tabscontrolled",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(99780).Z},react:{type:"NPM",value:"18.2.0"},"react-papercss-design":{type:"NPM",value:"0.0.2"}},description:"\u53D7\u63A7\u7EC4\u4EF6\u4E0B\u7684 tabs",title:"\u53D7\u63A7"}},"src-tabs-demo-tabsconfigured":{component:o.lazy(function(){return Promise.all([e.e(384),e.e(289),e.e(433)]).then(e.bind(e,84994))}),asset:{type:"BLOCK",id:"src-tabs-demo-tabsconfigured",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(32381).Z},"react-papercss-design":{type:"NPM",value:"0.0.2"}},description:"\u901A\u8FC7items\u53EF\u914D\u7F6E\u7684\u9009\u9879\u5361",title:"\u57FA\u672C"}}},fe={title:"Tabs",toc:"content",filename:"src/Tabs/index.md",group:"\u57FA\u672C",description:"\u9009\u9879\u5361\u5207\u6362\u7EC4\u4EF6\u3002"},me=[{id:"tabs-\u6807\u7B7E\u9875",depth:1,title:"Tabs \u6807\u7B7E\u9875"},{id:"\u793A\u4F8B",depth:2,title:"\u793A\u4F8B"},{id:"src-tabs-demo-tabsbase",depth:3,title:"\u57FA\u672C"},{id:"src-tabs-demo-tabscontrolled",depth:3,title:"\u53D7\u63A7"},{id:"src-tabs-demo-tabsconfigured",depth:3,title:"\u57FA\u672C"}],de=[{value:"\u9009\u9879\u5361\u5207\u6362\u7EC4\u4EF6\u3002",paraId:0,tocIndex:0}],ge={},Me={title:"useA",toc:"content",filename:"src/hooks/a.md"},st=[{id:"hooks",depth:1,title:"Hooks"}],it=[],ft=null,Mt={},Ft={"docs/index.en-US":{frontmatter:d,toc:v,texts:p,demos:n},"docs/guide":{frontmatter:x,toc:y,texts:b,demos:h},"docs/index":{frontmatter:A,toc:C,texts:$,demos:T},"components/Alert/index":{frontmatter:L,toc:z,texts:H,demos:B},"components/Article/index":{frontmatter:R,toc:F,texts:V,demos:W},"components/BackTop/index":{frontmatter:Q,toc:X,texts:ie,demos:q},"components/Breadcrumb/index":{frontmatter:Se,toc:Be,texts:ue,demos:Oe},"components/Button/index":{frontmatter:g,toc:I,texts:k,demos:S},"components/ConfigProvider/index":{frontmatter:D,toc:oe,texts:he,demos:P},"components/Progress/index":{frontmatter:re,toc:Ee,texts:Ve,demos:Re},"components/Space/index":{frontmatter:Ze,toc:ht,texts:Ct,demos:Xe},"components/Switch/index":{frontmatter:pr,toc:$r,texts:tn,demos:Bt},"components/SwitchTile/index":{frontmatter:Ie,toc:be,texts:ye,demos:tt},"components/Tabs/index":{frontmatter:fe,toc:me,texts:de,demos:je},"hooks/a":{frontmatter:Me,toc:st,texts:it,demos:ge}},ee=Object.entries(Ft).reduce(function(we,se){var _e=u()(se,2),et=_e[0],at=_e[1];return Object.values(at.demos).forEach(function(ut){ut.routeId=et}),Object.assign(we,at.demos),delete at.demos,we},{})},70994:function(s,f,e){"use strict";e.d(f,{Ac:function(){return re},ql:function(){return V.ql},rU:function(){return F},OL:function(){return C},Q$:function(){return Ee},m8:function(){return Ve.m},fp:function(){return u.fp},Ov:function(){return W.Ov},TH:function(){return u.TH},pC:function(){return u.pC},UO:function(){return u.UO},Qt:function(){return q.Q},lr:function(){return B}});var i=e(67294),u=e(96974),o=e(55648);function n(){return n=Object.assign||function(Ie){for(var be=1;be<arguments.length;be++){var ye=arguments[be];for(var je in ye)Object.prototype.hasOwnProperty.call(ye,je)&&(Ie[je]=ye[je])}return Ie},n.apply(this,arguments)}function d(Ie,be){if(Ie==null)return{};var ye={},je=Object.keys(Ie),fe,me;for(me=0;me<je.length;me++)fe=je[me],!(be.indexOf(fe)>=0)&&(ye[fe]=Ie[fe]);return ye}const v=["onClick","reloadDocument","replace","state","target","to"],p=["aria-current","caseSensitive","className","end","style","to","children"];function h(Ie,be){if(!Ie){typeof console!="undefined"&&console.warn(be);try{throw new Error(be)}catch(ye){}}}function x(Ie){let{basename:be,children:ye,window:je}=Ie,fe=useRef();fe.current==null&&(fe.current=createBrowserHistory({window:je}));let me=fe.current,[de,ge]=useState({action:me.action,location:me.location});return useLayoutEffect(()=>me.listen(ge),[me]),createElement(Router,{basename:be,children:ye,location:de.location,navigationType:de.action,navigator:me})}function y(Ie){let{basename:be,children:ye,window:je}=Ie,fe=useRef();fe.current==null&&(fe.current=createHashHistory({window:je}));let me=fe.current,[de,ge]=useState({action:me.action,location:me.location});return useLayoutEffect(()=>me.listen(ge),[me]),createElement(Router,{basename:be,children:ye,location:de.location,navigationType:de.action,navigator:me})}function b(Ie){let{basename:be,children:ye,history:je}=Ie;const[fe,me]=useState({action:je.action,location:je.location});return useLayoutEffect(()=>je.listen(me),[je]),createElement(Router,{basename:be,children:ye,location:fe.location,navigationType:fe.action,navigator:je})}function T(Ie){return!!(Ie.metaKey||Ie.altKey||Ie.ctrlKey||Ie.shiftKey)}const A=(0,i.forwardRef)(function(be,ye){let{onClick:je,reloadDocument:fe,replace:me=!1,state:de,target:ge,to:Me}=be,st=d(be,v),it=(0,u.oQ)(Me),ft=$(Me,{replace:me,state:de,target:ge});function Mt(Ft){je&&je(Ft),!Ft.defaultPrevented&&!fe&&ft(Ft)}return(0,i.createElement)("a",n({},st,{href:it,onClick:Mt,ref:ye,target:ge}))}),C=(0,i.forwardRef)(function(be,ye){let{"aria-current":je="page",caseSensitive:fe=!1,className:me="",end:de=!1,style:ge,to:Me,children:st}=be,it=d(be,p),ft=(0,u.TH)(),Mt=(0,u.WU)(Me),Ft=ft.pathname,ee=Mt.pathname;fe||(Ft=Ft.toLowerCase(),ee=ee.toLowerCase());let we=Ft===ee||!de&&Ft.startsWith(ee)&&Ft.charAt(ee.length)==="/",se=we?je:void 0,_e;typeof me=="function"?_e=me({isActive:we}):_e=[me,we?"active":null].filter(Boolean).join(" ");let et=typeof ge=="function"?ge({isActive:we}):ge;return(0,i.createElement)(A,n({},it,{"aria-current":se,className:_e,ref:ye,style:et,to:Me}),typeof st=="function"?st({isActive:we}):st)});function $(Ie,be){let{target:ye,replace:je,state:fe}=be===void 0?{}:be,me=(0,u.s0)(),de=(0,u.TH)(),ge=(0,u.WU)(Ie);return(0,i.useCallback)(Me=>{if(Me.button===0&&(!ye||ye==="_self")&&!T(Me)){Me.preventDefault();let st=!!je||(0,o.Ep)(de)===(0,o.Ep)(ge);me(Ie,{replace:st,state:fe})}},[de,me,ge,je,fe,ye,Ie])}function B(Ie){let be=(0,i.useRef)(L(Ie)),ye=(0,u.TH)(),je=(0,i.useMemo)(()=>{let de=L(ye.search);for(let ge of be.current.keys())de.has(ge)||be.current.getAll(ge).forEach(Me=>{de.append(ge,Me)});return de},[ye.search]),fe=(0,u.s0)(),me=(0,i.useCallback)((de,ge)=>{fe("?"+L(de),ge)},[fe]);return[je,me]}function L(Ie){return Ie===void 0&&(Ie=""),new URLSearchParams(typeof Ie=="string"||Array.isArray(Ie)||Ie instanceof URLSearchParams?Ie:Object.keys(Ie).reduce((be,ye)=>{let je=Ie[ye];return be.concat(Array.isArray(je)?je.map(fe=>[ye,fe]):[[ye,je]])},[]))}var z=e(87462),H=e(45987),W=e(34162),R=["prefetch"];function F(Ie){var be,ye=Ie.prefetch,je=(0,H.Z)(Ie,R),fe=(0,W.Ov)(),me=typeof Ie.to=="string"?Ie.to:(be=Ie.to)===null||be===void 0?void 0:be.pathname;return me?i.createElement(A,(0,z.Z)({onMouseEnter:function(){var ge;return ye&&me&&((ge=fe.preloadRoute)===null||ge===void 0?void 0:ge.call(fe,me))}},je),Ie.children):null}var V=e(70405),q=e(59918),Q=e(74165),X=e(1413),ie=e(15861),Oe=e(71002),Se=e(40181);function Be(Ie,be){var ye=typeof Symbol!="undefined"&&Ie[Symbol.iterator]||Ie["@@iterator"];if(!ye){if(Array.isArray(Ie)||(ye=(0,Se.Z)(Ie))||be&&Ie&&typeof Ie.length=="number"){ye&&(Ie=ye);var je=0,fe=function(){};return{s:fe,n:function(){return je>=Ie.length?{done:!0}:{done:!1,value:Ie[je++]}},e:function(st){throw st},f:fe}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var me=!0,de=!1,ge;return{s:function(){ye=ye.call(Ie)},n:function(){var st=ye.next();return me=st.done,st},e:function(st){de=!0,ge=st},f:function(){try{!me&&ye.return!=null&&ye.return()}finally{if(de)throw ge}}}}var ue=e(83878),S=e(59199),g=e(25267);function I(Ie){return(0,ue.Z)(Ie)||(0,S.Z)(Ie)||(0,Se.Z)(Ie)||(0,g.Z)()}var k=e(15671),P=e(43144),D=e(4942);function oe(Ie,be){if(!Ie)throw new Error(be)}function he(Ie){var be=Ie.fns,ye=Ie.args;if(be.length===1)return be[0];var je=be.pop();return be.reduce(function(fe,me){return function(){return me(fe,ye)}},je)}function Re(Ie){return!!Ie&&(0,Oe.Z)(Ie)==="object"&&typeof Ie.then=="function"}var re;(function(Ie){Ie.compose="compose",Ie.modify="modify",Ie.event="event"})(re||(re={}));var Ee=function(){function Ie(be){(0,k.Z)(this,Ie),(0,D.Z)(this,"opts",void 0),(0,D.Z)(this,"hooks",{}),this.opts=be}return(0,P.Z)(Ie,[{key:"register",value:function(ye){var je=this;oe(ye.apply,"plugin register failed, apply must supplied"),Object.keys(ye.apply).forEach(function(fe){oe(je.opts.validKeys.indexOf(fe)>-1,"register failed, invalid key ".concat(fe," ").concat(ye.path?"from plugin ".concat(ye.path):"",".")),je.hooks[fe]=(je.hooks[fe]||[]).concat(ye.apply[fe])})}},{key:"getHooks",value:function(ye){var je=ye.split("."),fe=I(je),me=fe[0],de=fe.slice(1),ge=this.hooks[me]||[];return de.length&&(ge=ge.map(function(Me){try{var st=Me,it=Be(de),ft;try{for(it.s();!(ft=it.n()).done;){var Mt=ft.value;st=st[Mt]}}catch(Ft){it.e(Ft)}finally{it.f()}return st}catch(Ft){return null}}).filter(Boolean)),ge}},{key:"applyPlugins",value:function(ye){var je=ye.key,fe=ye.type,me=ye.initialValue,de=ye.args,ge=ye.async,Me=this.getHooks(je)||[];switch(de&&oe((0,Oe.Z)(de)==="object","applyPlugins failed, args must be plain object."),ge&&oe(fe===re.modify||fe===re.event,"async only works with modify and event type."),fe){case re.modify:return ge?Me.reduce(function(){var st=(0,ie.Z)((0,Q.Z)().mark(function it(ft,Mt){var Ft;return(0,Q.Z)().wrap(function(we){for(;;)switch(we.prev=we.next){case 0:if(oe(typeof Mt=="function"||(0,Oe.Z)(Mt)==="object"||Re(Mt),"applyPlugins failed, all hooks for key ".concat(je," must be function, plain object or Promise.")),!Re(ft)){we.next=5;break}return we.next=4,ft;case 4:ft=we.sent;case 5:if(typeof Mt!="function"){we.next=16;break}if(Ft=Mt(ft,de),!Re(Ft)){we.next=13;break}return we.next=10,Ft;case 10:return we.abrupt("return",we.sent);case 13:return we.abrupt("return",Ft);case 14:we.next=21;break;case 16:if(!Re(Mt)){we.next=20;break}return we.next=19,Mt;case 19:Mt=we.sent;case 20:return we.abrupt("return",(0,X.Z)((0,X.Z)({},ft),Mt));case 21:case"end":return we.stop()}},it)}));return function(it,ft){return st.apply(this,arguments)}}(),Re(me)?me:Promise.resolve(me)):Me.reduce(function(st,it){return oe(typeof it=="function"||(0,Oe.Z)(it)==="object","applyPlugins failed, all hooks for key ".concat(je," must be function or plain object.")),typeof it=="function"?it(st,de):(0,X.Z)((0,X.Z)({},st),it)},me);case re.event:return(0,ie.Z)((0,Q.Z)().mark(function st(){var it,ft,Mt,Ft;return(0,Q.Z)().wrap(function(we){for(;;)switch(we.prev=we.next){case 0:it=Be(Me),we.prev=1,it.s();case 3:if((ft=it.n()).done){we.next=12;break}if(Mt=ft.value,oe(typeof Mt=="function","applyPlugins failed, all hooks for key ".concat(je," must be function.")),Ft=Mt(de),!(ge&&Re(Ft))){we.next=10;break}return we.next=10,Ft;case 10:we.next=3;break;case 12:we.next=17;break;case 14:we.prev=14,we.t0=we.catch(1),it.e(we.t0);case 17:return we.prev=17,it.f(),we.finish(17);case 20:case"end":return we.stop()}},st,null,[[1,14,17,20]])}))();case re.compose:return function(){return he({fns:Me.concat(me),args:de})()}}}}],[{key:"create",value:function(ye){var je=new Ie({validKeys:ye.validKeys});return ye.plugins.forEach(function(fe){je.register(fe)}),je}}]),Ie}(),Ve=e(82651),Xe=e(18698),Ze=e.n(Xe),ht=0,Ct=0;function Bt(Ie,be){if(!1)var ye}function pr(Ie){return JSON.stringify(Ie,null,2)}function $r(Ie){var be=Ie.length>1?Ie.map(tn).join(" "):Ie[0];return Ze()(be)==="object"?"".concat(pr(be)):be.toString()}function tn(Ie){return Ze()(Ie)==="object"?"".concat(JSON.stringify(Ie)):Ie.toString()}var tt={log:function(){for(var be=arguments.length,ye=new Array(be),je=0;je<be;je++)ye[je]=arguments[je];Bt("log",$r(ye))},info:function(){for(var be=arguments.length,ye=new Array(be),je=0;je<be;je++)ye[je]=arguments[je];Bt("info",$r(ye))},warn:function(){for(var be=arguments.length,ye=new Array(be),je=0;je<be;je++)ye[je]=arguments[je];Bt("warn",$r(ye))},error:function(){for(var be=arguments.length,ye=new Array(be),je=0;je<be;je++)ye[je]=arguments[je];Bt("error",$r(ye))},group:function(){Ct++},groupCollapsed:function(){Ct++},groupEnd:function(){Ct&&--Ct},clear:function(){Bt("clear")},trace:function(){var be;(be=console).trace.apply(be,arguments)},profile:function(){var be;(be=console).profile.apply(be,arguments)},profileEnd:function(){var be;(be=console).profileEnd.apply(be,arguments)}}},35095:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var dumi__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3922),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(67294);function ownKeys(s,f){var e=Object.keys(s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(s);f&&(i=i.filter(function(u){return Object.getOwnPropertyDescriptor(s,u).enumerable})),e.push.apply(e,i)}return e}function _objectSpread(s){for(var f=1;f<arguments.length;f++){var e=arguments[f]!=null?arguments[f]:{};f%2?ownKeys(Object(e),!0).forEach(function(i){_defineProperty(s,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(e)):ownKeys(Object(e)).forEach(function(i){Object.defineProperty(s,i,Object.getOwnPropertyDescriptor(e,i))})}return s}function _defineProperty(s,f,e){return f in s?Object.defineProperty(s,f,{value:e,enumerable:!0,configurable:!0,writable:!0}):s[f]=e,s}function _slicedToArray(s,f){return _arrayWithHoles(s)||_iterableToArrayLimit(s,f)||_unsupportedIterableToArray(s,f)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _unsupportedIterableToArray(s,f){if(s){if(typeof s=="string")return _arrayLikeToArray(s,f);var e=Object.prototype.toString.call(s).slice(8,-1);if(e==="Object"&&s.constructor&&(e=s.constructor.name),e==="Map"||e==="Set")return Array.from(s);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return _arrayLikeToArray(s,f)}}function _arrayLikeToArray(s,f){(f==null||f>s.length)&&(f=s.length);for(var e=0,i=new Array(f);e<f;e++)i[e]=s[e];return i}function _iterableToArrayLimit(s,f){var e=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(e!=null){var i=[],u=!0,o=!1,n,d;try{for(e=e.call(s);!(u=(n=e.next()).done)&&(i.push(n.value),!(f&&i.length===f));u=!0);}catch(v){o=!0,d=v}finally{try{!u&&e.return!=null&&e.return()}finally{if(o)throw d}}return i}}function _arrayWithHoles(s){if(Array.isArray(s))return s}function _typeof(s){return _typeof=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},_typeof(s)}function builtInProcessor(entity,entryExports){var mod;switch(entity.$$__type){case"function":return eval(entity.$$__body.sourceCode);case"element":return mod=entity.$$__body.componentName.split(".").reduce(function(s,f){return s[f]},entryExports),mod===void 0?entity.$$__body.componentName:"_InternalPanelDoNotUseOrYouWillBeFired"in mod?mod._InternalPanelDoNotUseOrYouWillBeFired:mod}}function deepReplace(s,f){return Array.isArray(s)?s.map(function(e){return deepReplace(e,f)}):_typeof(s)==="object"&&(s==null?void 0:s.$$__type)==="element"?translatePresetToReact(s.$$__body,f):_typeof(s)==="object"&&Object.prototype.toString.call(s)==="[object Object]"?Object.entries(s).reduce(function(e,i){var u=_slicedToArray(i,2),o=u[0],n=u[1];return _objectSpread(_objectSpread({},e),{},_defineProperty({},o,deepReplace(n,f)))},{}):s}function translatePresetToReact(s,f){var e=s.props,i=s.size,u=f({$$__type:"element",$$__body:s});return React.createElement(u,deepReplace(_objectSpread(_objectSpread({},e),{},{style:_objectSpread(_objectSpread({},e.style),i)}),f))}var AtomRenderer=function s(f){var e=useSiteData(),i=e.entryExports;switch(f.type){case"COMPONENT":return translatePresetToReact(f.value,function(u){var o,n;return(o=(n=f.processor)===null||n===void 0?void 0:n.call(f,u,i))!==null&&o!==void 0?o:builtInProcessor(u,i)});default:return React.createElement(React.Fragment,null,f.type," atom is not supported.")}}},64236:function(s,f,e){"use strict";e.d(f,{D:function(){return u},W:function(){return o}});var i=e(67294),u=(0,i.createContext)({pkg:{},historyType:"browser",entryExports:{},demos:{},components:{},locales:[],themeConfig:{},loading:!1,setLoading:function(){}}),o=function(){return(0,i.useContext)(u)}},88903:function(s,f,e){"use strict";e.d(f,{b:function(){return x}});var i=e(3922),u=e(67294);function o(y,b){return h(y)||p(y,b)||d(y,b)||n()}function n(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function d(y,b){if(y){if(typeof y=="string")return v(y,b);var T=Object.prototype.toString.call(y).slice(8,-1);if(T==="Object"&&y.constructor&&(T=y.constructor.name),T==="Map"||T==="Set")return Array.from(y);if(T==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T))return v(y,b)}}function v(y,b){(b==null||b>y.length)&&(b=y.length);for(var T=0,A=new Array(b);T<b;T++)A[T]=y[T];return A}function p(y,b){var T=y==null?null:typeof Symbol!="undefined"&&y[Symbol.iterator]||y["@@iterator"];if(T!=null){var A=[],C=!0,$=!1,B,L;try{for(T=T.call(y);!(C=(B=T.next()).done)&&(A.push(B.value),!(b&&A.length===b));C=!0);}catch(z){$=!0,L=z}finally{try{!C&&T.return!=null&&T.return()}finally{if($)throw L}}return A}}function h(y){if(Array.isArray(y))return y}var x=function(){var b=(0,i.YB)(),T=(0,i.WF)(),A=T.locales,C=(0,u.useState)(function(){return A.find(function(L){var z=L.id;return z===b.locale})}),$=o(C,1),B=$[0];return B}},77742:function(s,f,e){"use strict";e.d(f,{AM:function(){return T},LI:function(){return A},M7:function(){return C},RX:function(){return b},m7:function(){return B},qu:function(){return $}});var i=e(3922),u=e(67294),o=e(88903);function n(L){return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(z){return typeof z}:function(z){return z&&typeof Symbol=="function"&&z.constructor===Symbol&&z!==Symbol.prototype?"symbol":typeof z},n(L)}function d(L,z){return y(L)||x(L,z)||p(L,z)||v()}function v(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(L,z){if(L){if(typeof L=="string")return h(L,z);var H=Object.prototype.toString.call(L).slice(8,-1);if(H==="Object"&&L.constructor&&(H=L.constructor.name),H==="Map"||H==="Set")return Array.from(L);if(H==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(H))return h(L,z)}}function h(L,z){(z==null||z>L.length)&&(z=L.length);for(var H=0,W=new Array(z);H<z;H++)W[H]=L[H];return W}function x(L,z){var H=L==null?null:typeof Symbol!="undefined"&&L[Symbol.iterator]||L["@@iterator"];if(H!=null){var W=[],R=!0,F=!1,V,q;try{for(H=H.call(L);!(R=(V=H.next()).done)&&(W.push(V.value),!(z&&W.length===z));R=!0);}catch(Q){F=!0,q=Q}finally{try{!R&&H.return!=null&&H.return()}finally{if(F)throw q}}return W}}function y(L){if(Array.isArray(L))return L}var b=function(){var z=(0,i.YB)(),H=(0,i.Ov)(),W=H.routes,R=(0,i.WF)(),F=R.locales,V=(0,u.useState)(function(){var X=F.slice().reverse();return Object.values(W).reduce(function(ie,Oe){var Se=X.find(function(Be){return"suffix"in Be?Oe.path.endsWith(Be.suffix):Oe.path.startsWith(Be.base.slice(1))});return Oe.parentId==="DocLayout"&&Se.id===z.locale&&(ie[Oe.id]=Oe),ie},{})}),q=d(V,1),Q=q[0];return Q},T=function(z){var H=`/**
 * This is an auto-generated demo by dumi
 * if you think it is not working as expected,
 * please report the issue at
 * https://github.com/umijs/dumi/issues
 */`;return z.startsWith("18.")||z==="latest"?"".concat(H,`

import React from 'react';
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);`):"".concat(H,`

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);`)},A=typeof window!="undefined"?u.useLayoutEffect:u.useEffect,C=function(){var z=(0,o.b)();return(0,u.useCallback)(function(H,W){return("order"in H&&"order"in W?H.order-W.order:0)||("link"in H&&"link"in W?H.link.split("/").length-W.link.split("/").length:0)||("path"in H&&"path"in W?H.path.split("/").length-W.path.split("/").length:0)||(H.title?H.title.localeCompare(W.title||"",z.id):-1)},[])},$=function(z,H,W){var R,F=W[H];switch(n(F)){case"object":z.title=F.title||z.title,z.order=(R=F.order)!==null&&R!==void 0?R:z.order;break;case"string":z.title=F||z.title;break;default:}return z};function B(L,z){return Array.isArray(L)?L:L[z.id]}},43684:function(s,f,e){"use strict";e.d(f,{Z:function(){return me}});var i=e(67294),u=Object.defineProperty,o=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,v=(de,ge,Me)=>ge in de?u(de,ge,{enumerable:!0,configurable:!0,writable:!0,value:Me}):de[ge]=Me,p=(de,ge)=>{for(var Me in ge||(ge={}))n.call(ge,Me)&&v(de,Me,ge[Me]);if(o)for(var Me of o(ge))d.call(ge,Me)&&v(de,Me,ge[Me]);return de};const h=de=>i.createElement("svg",p({viewBox:"64 64 896 896"},de),i.createElement("path",{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"}),i.createElement("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}));var x="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNjk5IDM1M2gtNDYuOWMtMTAuMiAwLTE5LjkgNC45LTI1LjkgMTMuM0w0NjkgNTg0LjNsLTcxLjItOTguOGMtNi04LjMtMTUuNi0xMy4zLTI1LjktMTMuM0gzMjVjLTYuNSAwLTEwLjMgNy40LTYuNSAxMi43bDEyNC42IDE3Mi44YTMxLjggMzEuOCAwIDAgMCA1MS43IDBsMjEwLjYtMjkyYzMuOS01LjMuMS0xMi43LTYuNC0xMi43eiIvPjxwYXRoIGQ9Ik01MTIgNjRDMjY0LjYgNjQgNjQgMjY0LjYgNjQgNTEyczIwMC42IDQ0OCA0NDggNDQ4IDQ0OC0yMDAuNiA0NDgtNDQ4Uzc1OS40IDY0IDUxMiA2NHptMCA4MjBjLTIwNS40IDAtMzcyLTE2Ni42LTM3Mi0zNzJzMTY2LjYtMzcyIDM3Mi0zNzIgMzcyIDE2Ni42IDM3MiAzNzItMTY2LjYgMzcyLTM3MiAzNzJ6Ii8+PC9zdmc+",y=Object.defineProperty,b=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,C=(de,ge,Me)=>ge in de?y(de,ge,{enumerable:!0,configurable:!0,writable:!0,value:Me}):de[ge]=Me,$=(de,ge)=>{for(var Me in ge||(ge={}))T.call(ge,Me)&&C(de,Me,ge[Me]);if(b)for(var Me of b(ge))A.call(ge,Me)&&C(de,Me,ge[Me]);return de};const B=de=>i.createElement("svg",$({viewBox:"64 64 896 896"},de),i.createElement("path",{d:"M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"}),i.createElement("path",{d:"M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}));var L="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNjg1LjQgMzU0LjhjMC00LjQtMy42LTgtOC04bC02NiAuM0w1MTIgNDY1LjZsLTk5LjMtMTE4LjQtNjYuMS0uM2MtNC40IDAtOCAzLjUtOCA4IDAgMS45LjcgMy43IDEuOSA1LjJsMTMwLjEgMTU1TDM0MC41IDY3MGE4LjMyIDguMzIgMCAwIDAtMS45IDUuMmMwIDQuNCAzLjYgOCA4IDhsNjYuMS0uM0w1MTIgNTY0LjRsOTkuMyAxMTguNCA2NiAuM2M0LjQgMCA4LTMuNSA4LTggMC0xLjktLjctMy43LTEuOS01LjJMNTUzLjUgNTE1bDEzMC4xLTE1NWMxLjItMS40IDEuOC0zLjMgMS44LTUuMnoiLz48cGF0aCBkPSJNNTEyIDY1QzI2NC42IDY1IDY0IDI2NS42IDY0IDUxM3MyMDAuNiA0NDggNDQ4IDQ0OCA0NDgtMjAwLjYgNDQ4LTQ0OFM3NTkuNCA2NSA1MTIgNjV6bTAgODIwYy0yMDUuNCAwLTM3Mi0xNjYuNi0zNzItMzcyczE2Ni42LTM3MiAzNzItMzcyIDM3MiAxNjYuNiAzNzIgMzcyLTE2Ni42IDM3Mi0zNzIgMzcyeiIvPjwvc3ZnPg==",z=Object.defineProperty,H=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,F=(de,ge,Me)=>ge in de?z(de,ge,{enumerable:!0,configurable:!0,writable:!0,value:Me}):de[ge]=Me,V=(de,ge)=>{for(var Me in ge||(ge={}))W.call(ge,Me)&&F(de,Me,ge[Me]);if(H)for(var Me of H(ge))R.call(ge,Me)&&F(de,Me,ge[Me]);return de};const q=de=>i.createElement("svg",V({viewBox:"64 64 896 896"},de),i.createElement("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}),i.createElement("path",{d:"M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}));var Q="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNTEyIDY0QzI2NC42IDY0IDY0IDI2NC42IDY0IDUxMnMyMDAuNiA0NDggNDQ4IDQ0OCA0NDgtMjAwLjYgNDQ4LTQ0OFM3NTkuNCA2NCA1MTIgNjR6bTAgODIwYy0yMDUuNCAwLTM3Mi0xNjYuNi0zNzItMzcyczE2Ni42LTM3MiAzNzItMzcyIDM3MiAxNjYuNiAzNzIgMzcyLTE2Ni42IDM3Mi0zNzIgMzcyeiIvPjxwYXRoIGQ9Ik00NjQgMzM2YTQ4IDQ4IDAgMSAwIDk2IDAgNDggNDggMCAxIDAtOTYgMHptNzIgMTEyaC00OGMtNC40IDAtOCAzLjYtOCA4djI3MmMwIDQuNCAzLjYgOCA4IDhoNDhjNC40IDAgOC0zLjYgOC04VjQ1NmMwLTQuNC0zLjYtOC04LTh6Ii8+PC9zdmc+",X=Object.defineProperty,ie=Object.getOwnPropertySymbols,Oe=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable,Be=(de,ge,Me)=>ge in de?X(de,ge,{enumerable:!0,configurable:!0,writable:!0,value:Me}):de[ge]=Me,ue=(de,ge)=>{for(var Me in ge||(ge={}))Oe.call(ge,Me)&&Be(de,Me,ge[Me]);if(ie)for(var Me of ie(ge))Se.call(ge,Me)&&Be(de,Me,ge[Me]);return de};const S=de=>i.createElement("svg",ue({viewBox:"64 64 896 896"},de),i.createElement("path",{d:"M464 720a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"}));var g="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNDY0IDcyMGE0OCA0OCAwIDEgMCA5NiAwIDQ4IDQ4IDAgMSAwLTk2IDB6bTE2LTMwNHYxODRjMCA0LjQgMy42IDggOCA4aDQ4YzQuNCAwIDgtMy42IDgtOFY0MTZjMC00LjQtMy42LTgtOC04aC00OGMtNC40IDAtOCAzLjYtOCA4em00NzUuNyA0NDAtNDE2LTcyMGMtNi4yLTEwLjctMTYuOS0xNi0yNy43LTE2cy0yMS42IDUuMy0yNy43IDE2bC00MTYgNzIwQzU2IDg3Ny40IDcxLjQgOTA0IDk2IDkwNGg4MzJjMjQuNiAwIDQwLTI2LjYgMjcuNy00OHptLTc4My41LTI3LjlMNTEyIDIzOS45bDMzOS44IDU4OC4ySDE3Mi4yeiIvPjwvc3ZnPg==",I=e(26575),k=e.n(I),P=e(23187),D=e.n(P),oe=e(75553),he=e.n(oe),Re=e(41049),re=e.n(Re),Ee=e(5026),Ve=e.n(Ee),Xe=e(83357),Ze=e.n(Xe),ht=e(95060),Ct={};Ct.styleTagTransform=Ze(),Ct.setAttributes=re(),Ct.insert=he().bind(null,"head"),Ct.domAPI=D(),Ct.insertStyleElement=Ve();var Bt=k()(ht.Z,Ct),pr=ht.Z&&ht.Z.locals?ht.Z.locals:void 0;function $r(de,ge){return ye(de)||be(de,ge)||tt(de,ge)||tn()}function tn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tt(de,ge){if(de){if(typeof de=="string")return Ie(de,ge);var Me=Object.prototype.toString.call(de).slice(8,-1);if(Me==="Object"&&de.constructor&&(Me=de.constructor.name),Me==="Map"||Me==="Set")return Array.from(de);if(Me==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Me))return Ie(de,ge)}}function Ie(de,ge){(ge==null||ge>de.length)&&(ge=de.length);for(var Me=0,st=new Array(ge);Me<ge;Me++)st[Me]=de[Me];return st}function be(de,ge){var Me=de==null?null:typeof Symbol!="undefined"&&de[Symbol.iterator]||de["@@iterator"];if(Me!=null){var st=[],it=!0,ft=!1,Mt,Ft;try{for(Me=Me.call(de);!(it=(Mt=Me.next()).done)&&(st.push(Mt.value),!(ge&&st.length===ge));it=!0);}catch(ee){ft=!0,Ft=ee}finally{try{!it&&Me.return!=null&&Me.return()}finally{if(ft)throw Ft}}return st}}function ye(de){if(Array.isArray(de))return de}var je={info:q,warning:S,success:h,error:B},fe=function(ge){var Me=(0,i.useState)(function(){return je[ge.type]}),st=$r(Me,1),it=st[0];return i.createElement("div",{className:"dumi-default-container markdown","data-type":ge.type},i.createElement(it,null),i.createElement("h4",null,ge.title||ge.type.toUpperCase()),i.createElement("section",null,ge.children))},me=fe},41186:function(s,f,e){"use strict";e.d(f,{Z:function(){return Gc}});var i=e(94184),u=e.n(i),o=e(3922),n=e(67294),d=Object.defineProperty,v=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,x=(l,w,O)=>w in l?d(l,w,{enumerable:!0,configurable:!0,writable:!0,value:O}):l[w]=O,y=(l,w)=>{for(var O in w||(w={}))p.call(w,O)&&x(l,O,w[O]);if(v)for(var O of v(w))h.call(w,O)&&x(l,O,w[O]);return l};const b=l=>n.createElement("svg",y({viewBox:"64 64 896 896"},l),n.createElement("path",{d:"m709.6 210 .4-.2h.2L512 96 313.9 209.8h-.2l.7.3L151.5 304v416L512 928l360.5-208V304l-162.9-94zM482.7 843.6 339.6 761V621.4L210 547.8V372.9l272.7 157.3v313.4zM238.2 321.5l134.7-77.8 138.9 79.7 139.1-79.9 135.2 78-273.9 158-274-158zM814 548.3l-128.8 73.1v139.1l-143.9 83V530.4L814 373.1v175.2z"}));var T="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJtNzA5LjYgMjEwIC40LS4yaC4yTDUxMiA5NiAzMTMuOSAyMDkuOGgtLjJsLjcuM0wxNTEuNSAzMDR2NDE2TDUxMiA5MjhsMzYwLjUtMjA4VjMwNGwtMTYyLjktOTR6TTQ4Mi43IDg0My42IDMzOS42IDc2MVY2MjEuNEwyMTAgNTQ3LjhWMzcyLjlsMjcyLjcgMTU3LjN2MzEzLjR6TTIzOC4yIDMyMS41bDEzNC43LTc3LjggMTM4LjkgNzkuNyAxMzkuMS03OS45IDEzNS4yIDc4LTI3My45IDE1OC0yNzQtMTU4ek04MTQgNTQ4LjNsLTEyOC44IDczLjF2MTM5LjFsLTE0My45IDgzVjUzMC40TDgxNCAzNzMuMXYxNzUuMnoiLz48L3N2Zz4=",A=Object.defineProperty,C=Object.getOwnPropertySymbols,$=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,L=(l,w,O)=>w in l?A(l,w,{enumerable:!0,configurable:!0,writable:!0,value:O}):l[w]=O,z=(l,w)=>{for(var O in w||(w={}))$.call(w,O)&&L(l,O,w[O]);if(C)for(var O of C(w))B.call(w,O)&&L(l,O,w[O]);return l};const H=l=>n.createElement("svg",z({viewBox:"64 64 896 896"},l),n.createElement("path",{d:"M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z"}));var W="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODQ4IDM1OS4zSDYyNy43TDgyNS44IDEwOWM0LjEtNS4zLjQtMTMtNi4zLTEzSDQzNmMtMi44IDAtNS41IDEuNS02LjkgNEwxNzAgNTQ3LjVjLTMuMSA1LjMuNyAxMiA2LjkgMTJoMTc0LjRsLTg5LjQgMzU3LjZjLTEuOSA3LjggNy41IDEzLjMgMTMuMyA3LjdMODUzLjUgMzczYzUuMi00LjkgMS43LTEzLjctNS41LTEzLjd6TTM3OC4yIDczMi41bDYwLjMtMjQxSDI4MS4xbDE4OS42LTMyNy40aDIyNC42TDQ4NyA0MjcuNGgyMTFMMzc4LjIgNzMyLjV6Ii8+PC9zdmc+",R=e(55722),F=function(){return n.createElement(n.Fragment,null)},V=F,q=e(87462),Q=e(4942),X=e(1413),ie=e(97685),Oe=e(71002),Se=e(45987),Be=function(){if(typeof navigator=="undefined"||typeof window=="undefined")return!1;var l=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(l)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(l==null?void 0:l.substr(0,4))};function ue(l){var w=n.useRef();w.current=l;var O=n.useCallback(function(){for(var _,j=arguments.length,G=new Array(j),N=0;N<j;N++)G[N]=arguments[N];return(_=w.current)===null||_===void 0?void 0:_.call.apply(_,[w].concat(G))},[]);return O}function S(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)}var g=S()?n.useLayoutEffect:n.useEffect,I=g,k=function(w,O){var _=n.useRef(!0);g(function(){if(!_.current)return w()},O),g(function(){return _.current=!1,function(){_.current=!0}},[])};function P(l){var w=n.useRef(!1),O=n.useState(l),_=(0,ie.Z)(O,2),j=_[0],G=_[1];n.useEffect(function(){return w.current=!1,function(){w.current=!0}},[]);function N(le,ne){ne&&w.current||G(le)}return[j,N]}function D(l){return l!==void 0}function oe(l,w){var O=w||{},_=O.defaultValue,j=O.value,G=O.onChange,N=O.postState,le=P(function(){return D(j)?j:D(_)?typeof _=="function"?_():_:typeof l=="function"?l():l}),ne=(0,ie.Z)(le,2),ve=ne[0],Le=ne[1],ze=j!==void 0?j:ve,Fe=N?N(ze):ze,He=ue(G),Te=P([ze]),lt=(0,ie.Z)(Te,2),mt=lt[0],At=lt[1];k(function(){var xt=mt[0];ve!==xt&&He(ve,xt)},[mt]),k(function(){D(j)||Le(j)},[j]);var yt=ue(function(xt,Pt){Le(xt,Pt),At([ze],Pt)});return[Fe,yt]}var he=e(73935);function Re(l){return l instanceof HTMLElement||l instanceof SVGElement}function re(l){return Re(l)?l:l instanceof n.Component?he.findDOMNode(l):null}var Ee=e(11805);function Ve(l,w,O){var _=n.useRef({});return(!("value"in _.current)||O(_.current.condition,w))&&(_.current.value=l(),_.current.condition=w),_.current.value}function Xe(l,w){typeof l=="function"?l(w):(0,Oe.Z)(l)==="object"&&l&&"current"in l&&(l.current=w)}function Ze(){for(var l=arguments.length,w=new Array(l),O=0;O<l;O++)w[O]=arguments[O];var _=w.filter(function(j){return j});return _.length<=1?_[0]:function(j){w.forEach(function(G){Xe(G,j)})}}function ht(){for(var l=arguments.length,w=new Array(l),O=0;O<l;O++)w[O]=arguments[O];return Ve(function(){return Ze.apply(void 0,w)},w,function(_,j){return _.length===j.length&&_.every(function(G,N){return G===j[N]})})}function Ct(l){var w,O,_=(0,Ee.isMemo)(l)?l.type.type:l.type;return!(typeof _=="function"&&!((w=_.prototype)!==null&&w!==void 0&&w.render)||typeof l=="function"&&!((O=l.prototype)!==null&&O!==void 0&&O.render))}function Bt(l,w){var O={};return O[l.toLowerCase()]=w.toLowerCase(),O["Webkit".concat(l)]="webkit".concat(w),O["Moz".concat(l)]="moz".concat(w),O["ms".concat(l)]="MS".concat(w),O["O".concat(l)]="o".concat(w.toLowerCase()),O}function pr(l,w){var O={animationend:Bt("Animation","AnimationEnd"),transitionend:Bt("Transition","TransitionEnd")};return l&&("AnimationEvent"in w||delete O.animationend.animation,"TransitionEvent"in w||delete O.transitionend.transition),O}var $r=pr(S(),typeof window!="undefined"?window:{}),tn={};if(S()){var tt=document.createElement("div");tn=tt.style}var Ie={};function be(l){if(Ie[l])return Ie[l];var w=$r[l];if(w)for(var O=Object.keys(w),_=O.length,j=0;j<_;j+=1){var G=O[j];if(Object.prototype.hasOwnProperty.call(w,G)&&G in tn)return Ie[l]=w[G],Ie[l]}return""}var ye=be("animationend"),je=be("transitionend"),fe=!!(ye&&je),me=ye||"animationend",de=je||"transitionend";function ge(l,w){if(!l)return null;if((0,Oe.Z)(l)==="object"){var O=w.replace(/-\w/g,function(_){return _[1].toUpperCase()});return l[O]}return"".concat(l,"-").concat(w)}var Me="none",st="appear",it="enter",ft="leave",Mt="none",Ft="prepare",ee="start",we="active",se="end",_e=function(w){return+setTimeout(w,16)},et=function(w){return clearTimeout(w)};typeof window!="undefined"&&"requestAnimationFrame"in window&&(_e=function(w){return window.requestAnimationFrame(w)},et=function(w){return window.cancelAnimationFrame(w)});var at=0,ut=new Map;function Lt(l){ut.delete(l)}var Qe=function(w){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;at+=1;var _=at;function j(G){if(G===0)Lt(_),w();else{var N=_e(function(){j(G-1)});ut.set(_,N)}}return j(O),_};Qe.cancel=function(l){var w=ut.get(l);return Lt(w),et(w)};var dt=Qe,It=function(){var l=n.useRef(null);function w(){dt.cancel(l.current)}function O(_){var j=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;w();var G=dt(function(){j<=1?_({isCanceled:function(){return G!==l.current}}):O(_,j-1)});l.current=G}return n.useEffect(function(){return function(){w()}},[]),[O,w]},Ue=S()?n.useLayoutEffect:n.useEffect,Ge=Ue,nt=[Ft,ee,we,se],bt=!1,ot=!0;function kt(l){return l===we||l===se}var Wt=function(l,w){var O=P(Mt),_=(0,ie.Z)(O,2),j=_[0],G=_[1],N=It(),le=(0,ie.Z)(N,2),ne=le[0],ve=le[1];function Le(){G(Ft,!0)}return Ge(function(){if(j!==Mt&&j!==se){var ze=nt.indexOf(j),Fe=nt[ze+1],He=w(j);He===bt?G(Fe,!0):ne(function(Te){function lt(){Te.isCanceled()||G(Fe,!0)}He===!0?lt():Promise.resolve(He).then(lt)})}},[l,j]),n.useEffect(function(){return function(){ve()}},[]),[Le,j]},Kt=function(l){var w=(0,n.useRef)(),O=(0,n.useRef)(l);O.current=l;var _=n.useCallback(function(N){O.current(N)},[]);function j(N){N&&(N.removeEventListener(de,_),N.removeEventListener(me,_))}function G(N){w.current&&w.current!==N&&j(w.current),N&&N!==w.current&&(N.addEventListener(de,_),N.addEventListener(me,_),w.current=N)}return n.useEffect(function(){return function(){j(w.current)}},[]),[G,j]};function Cr(l,w,O,_){var j=_.motionEnter,G=j===void 0?!0:j,N=_.motionAppear,le=N===void 0?!0:N,ne=_.motionLeave,ve=ne===void 0?!0:ne,Le=_.motionDeadline,ze=_.motionLeaveImmediately,Fe=_.onAppearPrepare,He=_.onEnterPrepare,Te=_.onLeavePrepare,lt=_.onAppearStart,mt=_.onEnterStart,At=_.onLeaveStart,yt=_.onAppearActive,xt=_.onEnterActive,Pt=_.onLeaveActive,jt=_.onAppearEnd,Nt=_.onEnterEnd,$t=_.onLeaveEnd,Xt=_.onVisibleChanged,Ht=P(),Vt=(0,ie.Z)(Ht,2),ct=Vt[0],Gt=Vt[1],Zt=P(Me),qt=(0,ie.Z)(Zt,2),dr=qt[0],fr=qt[1],Ir=P(null),hr=(0,ie.Z)(Ir,2),an=hr[0],On=hr[1],Jr=(0,n.useRef)(!1),ur=(0,n.useRef)(null);function er(){return O()}var Rr=(0,n.useRef)(!1);function Lr(Ur){var Hr=er();if(!(Ur&&!Ur.deadline&&Ur.target!==Hr)){var In=Rr.current,un;dr===st&&In?un=jt==null?void 0:jt(Hr,Ur):dr===it&&In?un=Nt==null?void 0:Nt(Hr,Ur):dr===ft&&In&&(un=$t==null?void 0:$t(Hr,Ur)),dr!==Me&&In&&un!==!1&&(fr(Me,!0),On(null,!0))}}var rn=Kt(Lr),on=(0,ie.Z)(rn,1),sr=on[0],Nr=n.useMemo(function(){var Ur,Hr,In;switch(dr){case st:return Ur={},(0,Q.Z)(Ur,Ft,Fe),(0,Q.Z)(Ur,ee,lt),(0,Q.Z)(Ur,we,yt),Ur;case it:return Hr={},(0,Q.Z)(Hr,Ft,He),(0,Q.Z)(Hr,ee,mt),(0,Q.Z)(Hr,we,xt),Hr;case ft:return In={},(0,Q.Z)(In,Ft,Te),(0,Q.Z)(In,ee,At),(0,Q.Z)(In,we,Pt),In;default:return{}}},[dr]),Gr=Wt(dr,function(Ur){if(Ur===Ft){var Hr=Nr[Ft];return Hr?Hr(er()):bt}if(kr in Nr){var In;On(((In=Nr[kr])===null||In===void 0?void 0:In.call(Nr,er(),null))||null)}return kr===we&&(sr(er()),Le>0&&(clearTimeout(ur.current),ur.current=setTimeout(function(){Lr({deadline:!0})},Le))),ot}),Mr=(0,ie.Z)(Gr,2),Fr=Mr[0],kr=Mr[1],zr=kt(kr);Rr.current=zr,Ge(function(){Gt(w);var Ur=Jr.current;if(Jr.current=!0,!!l){var Hr;!Ur&&w&&le&&(Hr=st),Ur&&w&&G&&(Hr=it),(Ur&&!w&&ve||!Ur&&ze&&!w&&ve)&&(Hr=ft),Hr&&(fr(Hr),Fr())}},[w]),(0,n.useEffect)(function(){(dr===st&&!le||dr===it&&!G||dr===ft&&!ve)&&fr(Me)},[le,G,ve]),(0,n.useEffect)(function(){return function(){Jr.current=!1,clearTimeout(ur.current)}},[]);var pn=n.useRef(!1);(0,n.useEffect)(function(){ct&&(pn.current=!0),ct!==void 0&&dr===Me&&((pn.current||ct)&&(Xt==null||Xt(ct)),pn.current=!0)},[ct,dr]);var br=an;return Nr[Ft]&&kr===ee&&(br=(0,X.Z)({transition:"none"},br)),[dr,kr,br,ct!=null?ct:w]}var Pr=e(15671),xn=e(43144),Pn=e(89611);function gn(l,w){if(typeof w!="function"&&w!==null)throw new TypeError("Super expression must either be null or a function");l.prototype=Object.create(w&&w.prototype,{constructor:{value:l,writable:!0,configurable:!0}}),Object.defineProperty(l,"prototype",{writable:!1}),w&&(0,Pn.Z)(l,w)}function ln(l){return ln=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(O){return O.__proto__||Object.getPrototypeOf(O)},ln(l)}function Sn(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(l){return!1}}var lr=e(97326);function cn(l,w){if(w&&((0,Oe.Z)(w)==="object"||typeof w=="function"))return w;if(w!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return(0,lr.Z)(l)}function vn(l){var w=Sn();return function(){var _=ln(l),j;if(w){var G=ln(this).constructor;j=Reflect.construct(_,arguments,G)}else j=_.apply(this,arguments);return cn(this,j)}}var pa=function(l){gn(O,l);var w=vn(O);function O(){return(0,Pr.Z)(this,O),w.apply(this,arguments)}return(0,xn.Z)(O,[{key:"render",value:function(){return this.props.children}}]),O}(n.Component),va=pa;function dn(l){var w=l;(0,Oe.Z)(l)==="object"&&(w=l.transitionSupport);function O(j){return!!(j.motionName&&w)}var _=n.forwardRef(function(j,G){var N=j.visible,le=N===void 0?!0:N,ne=j.removeOnLeave,ve=ne===void 0?!0:ne,Le=j.forceRender,ze=j.children,Fe=j.motionName,He=j.leavedClassName,Te=j.eventProps,lt=O(j),mt=(0,n.useRef)(),At=(0,n.useRef)();function yt(){try{return mt.current instanceof HTMLElement?mt.current:re(At.current)}catch(Ir){return null}}var xt=Cr(lt,le,yt,j),Pt=(0,ie.Z)(xt,4),jt=Pt[0],Nt=Pt[1],$t=Pt[2],Xt=Pt[3],Ht=n.useRef(Xt);Xt&&(Ht.current=!0);var Vt=n.useCallback(function(Ir){mt.current=Ir,Xe(G,Ir)},[G]),ct,Gt=(0,X.Z)((0,X.Z)({},Te),{},{visible:le});if(!ze)ct=null;else if(jt===Me||!O(j))Xt?ct=ze((0,X.Z)({},Gt),Vt):!ve&&Ht.current&&He?ct=ze((0,X.Z)((0,X.Z)({},Gt),{},{className:He}),Vt):Le||!ve&&!He?ct=ze((0,X.Z)((0,X.Z)({},Gt),{},{style:{display:"none"}}),Vt):ct=null;else{var Zt,qt;Nt===Ft?qt="prepare":kt(Nt)?qt="active":Nt===ee&&(qt="start"),ct=ze((0,X.Z)((0,X.Z)({},Gt),{},{className:u()(ge(Fe,jt),(Zt={},(0,Q.Z)(Zt,ge(Fe,"".concat(jt,"-").concat(qt)),qt),(0,Q.Z)(Zt,Fe,typeof Fe=="string"),Zt)),style:$t}),Vt)}if(n.isValidElement(ct)&&Ct(ct)){var dr=ct,fr=dr.ref;fr||(ct=n.cloneElement(ct,{ref:Vt}))}return n.createElement(va,{ref:At},ct)});return _.displayName="CSSMotion",_}var ua=dn(fe),Wn="add",yr="keep",Sa="remove",Ma="removed";function go(l){var w;return l&&(0,Oe.Z)(l)==="object"&&"key"in l?w=l:w={key:l},(0,X.Z)((0,X.Z)({},w),{},{key:String(w.key)})}function Ea(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return l.map(go)}function Fo(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],O=[],_=0,j=w.length,G=Ea(l),N=Ea(w);G.forEach(function(ve){for(var Le=!1,ze=_;ze<j;ze+=1){var Fe=N[ze];if(Fe.key===ve.key){_<ze&&(O=O.concat(N.slice(_,ze).map(function(He){return(0,X.Z)((0,X.Z)({},He),{},{status:Wn})})),_=ze),O.push((0,X.Z)((0,X.Z)({},Fe),{},{status:yr})),_+=1,Le=!0;break}}Le||O.push((0,X.Z)((0,X.Z)({},ve),{},{status:Sa}))}),_<j&&(O=O.concat(N.slice(_).map(function(ve){return(0,X.Z)((0,X.Z)({},ve),{},{status:Wn})})));var le={};O.forEach(function(ve){var Le=ve.key;le[Le]=(le[Le]||0)+1});var ne=Object.keys(le).filter(function(ve){return le[ve]>1});return ne.forEach(function(ve){O=O.filter(function(Le){var ze=Le.key,Fe=Le.status;return ze!==ve||Fe!==Sa}),O.forEach(function(Le){Le.key===ve&&(Le.status=yr)})}),O}var yo=["component","children","onVisibleChanged","onAllRemoved"],mn=["status"],zo=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];function Uo(l){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ua,O=function(_){gn(G,_);var j=vn(G);function G(){var N;(0,Pr.Z)(this,G);for(var le=arguments.length,ne=new Array(le),ve=0;ve<le;ve++)ne[ve]=arguments[ve];return N=j.call.apply(j,[this].concat(ne)),(0,Q.Z)((0,lr.Z)(N),"state",{keyEntities:[]}),(0,Q.Z)((0,lr.Z)(N),"removeKey",function(Le){var ze=N.state.keyEntities,Fe=ze.map(function(He){return He.key!==Le?He:(0,X.Z)((0,X.Z)({},He),{},{status:Ma})});return N.setState({keyEntities:Fe}),Fe.filter(function(He){var Te=He.status;return Te!==Ma}).length}),N}return(0,xn.Z)(G,[{key:"render",value:function(){var le=this,ne=this.state.keyEntities,ve=this.props,Le=ve.component,ze=ve.children,Fe=ve.onVisibleChanged,He=ve.onAllRemoved,Te=(0,Se.Z)(ve,yo),lt=Le||n.Fragment,mt={};return zo.forEach(function(At){mt[At]=Te[At],delete Te[At]}),delete Te.keys,n.createElement(lt,Te,ne.map(function(At){var yt=At.status,xt=(0,Se.Z)(At,mn),Pt=yt===Wn||yt===yr;return n.createElement(w,(0,q.Z)({},mt,{key:xt.key,visible:Pt,eventProps:xt,onVisibleChanged:function(Nt){if(Fe==null||Fe(Nt,{key:xt.key}),!Nt){var $t=le.removeKey(xt.key);$t===0&&He&&He()}}}),ze)}))}}],[{key:"getDerivedStateFromProps",value:function(le,ne){var ve=le.keys,Le=ne.keyEntities,ze=Ea(ve),Fe=Fo(Le,ze);return{keyEntities:Fe.filter(function(He){var Te=Le.find(function(lt){var mt=lt.key;return He.key===mt});return!(Te&&Te.status===Ma&&He.status===Sa)})}}}]),G}(n.Component);return(0,Q.Z)(O,"defaultProps",{component:"div"}),O}var Tu=Uo(fe),ka=ua,bo=(0,n.createContext)(null),xi=n.forwardRef(function(l,w){var O=l.prefixCls,_=l.className,j=l.style,G=l.id,N=l.active,le=l.tabKey,ne=l.children;return n.createElement("div",{id:G&&"".concat(G,"-panel-").concat(le),role:"tabpanel",tabIndex:N?0:-1,"aria-labelledby":G&&"".concat(G,"-tab-").concat(le),"aria-hidden":!N,style:j,className:u()(O,N&&"".concat(O,"-active"),_),ref:w},ne)}),wo=xi,ma=["key","forceRender","style","className"];function Ou(l){var w=l.id,O=l.activeKey,_=l.animated,j=l.tabPosition,G=l.destroyInactiveTabPane,N=n.useContext(bo),le=N.prefixCls,ne=N.tabs,ve=_.tabPane,Le="".concat(le,"-tabpane");return n.createElement("div",{className:u()("".concat(le,"-content-holder"))},n.createElement("div",{className:u()("".concat(le,"-content"),"".concat(le,"-content-").concat(j),(0,Q.Z)({},"".concat(le,"-content-animated"),ve))},ne.map(function(ze){var Fe=ze.key,He=ze.forceRender,Te=ze.style,lt=ze.className,mt=(0,Se.Z)(ze,ma),At=Fe===O;return n.createElement(ka,(0,q.Z)({key:Fe,visible:At,forceRender:He,removeOnLeave:!!G,leavedClassName:"".concat(Le,"-hidden")},_.tabPaneMotion),function(yt,xt){var Pt=yt.style,jt=yt.className;return n.createElement(wo,(0,q.Z)({},mt,{prefixCls:Le,id:w,tabKey:Fe,animated:ve,active:At,style:(0,X.Z)((0,X.Z)({},Te),Pt),className:u()(lt,jt),ref:xt}))})})))}var Rn=e(74902);function xo(l){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},O=[];return n.Children.forEach(l,function(_){_==null&&!w.keepEmpty||(Array.isArray(_)?O=O.concat(xo(_)):(0,Ee.isFragment)(_)&&_.props?O=O.concat(xo(_.props.children,w)):O.push(_))}),O}var Si={};function ei(l,w){}function ro(l,w){}function Ei(){Si={}}function So(l,w,O){!w&&!Si[O]&&(l(!1,O),Si[O]=!0)}function $o(l,w){So(ei,l,w)}function Iu(l,w){So(ro,l,w)}var Ho=$o,Zo=function(){if(typeof Map!="undefined")return Map;function l(w,O){var _=-1;return w.some(function(j,G){return j[0]===O?(_=G,!0):!1}),_}return function(){function w(){this.__entries__=[]}return Object.defineProperty(w.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),w.prototype.get=function(O){var _=l(this.__entries__,O),j=this.__entries__[_];return j&&j[1]},w.prototype.set=function(O,_){var j=l(this.__entries__,O);~j?this.__entries__[j][1]=_:this.__entries__.push([O,_])},w.prototype.delete=function(O){var _=this.__entries__,j=l(_,O);~j&&_.splice(j,1)},w.prototype.has=function(O){return!!~l(this.__entries__,O)},w.prototype.clear=function(){this.__entries__.splice(0)},w.prototype.forEach=function(O,_){_===void 0&&(_=null);for(var j=0,G=this.__entries__;j<G.length;j++){var N=G[j];O.call(_,N[1],N[0])}},w}()}(),Wo=typeof window!="undefined"&&typeof document!="undefined"&&window.document===document,m=function(){return typeof e.g!="undefined"&&e.g.Math===Math?e.g:typeof self!="undefined"&&self.Math===Math?self:typeof window!="undefined"&&window.Math===Math?window:Function("return this")()}(),Z=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(m):function(l){return setTimeout(function(){return l(Date.now())},1e3/60)}}(),te=2;function ae(l,w){var O=!1,_=!1,j=0;function G(){O&&(O=!1,l()),_&&le()}function N(){Z(G)}function le(){var ne=Date.now();if(O){if(ne-j<te)return;_=!0}else O=!0,_=!1,setTimeout(N,w);j=ne}return le}var ce=20,Ae=["top","right","bottom","left","width","height","size","weight"],Je=typeof MutationObserver!="undefined",Et=function(){function l(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=ae(this.refresh.bind(this),ce)}return l.prototype.addObserver=function(w){~this.observers_.indexOf(w)||this.observers_.push(w),this.connected_||this.connect_()},l.prototype.removeObserver=function(w){var O=this.observers_,_=O.indexOf(w);~_&&O.splice(_,1),!O.length&&this.connected_&&this.disconnect_()},l.prototype.refresh=function(){var w=this.updateObservers_();w&&this.refresh()},l.prototype.updateObservers_=function(){var w=this.observers_.filter(function(O){return O.gatherActive(),O.hasActive()});return w.forEach(function(O){return O.broadcastActive()}),w.length>0},l.prototype.connect_=function(){!Wo||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Je?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},l.prototype.disconnect_=function(){!Wo||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},l.prototype.onTransitionEnd_=function(w){var O=w.propertyName,_=O===void 0?"":O,j=Ae.some(function(G){return!!~_.indexOf(G)});j&&this.refresh()},l.getInstance=function(){return this.instance_||(this.instance_=new l),this.instance_},l.instance_=null,l}(),vr=function(l,w){for(var O=0,_=Object.keys(w);O<_.length;O++){var j=_[O];Object.defineProperty(l,j,{value:w[j],enumerable:!1,writable:!1,configurable:!0})}return l},rt=function(l){var w=l&&l.ownerDocument&&l.ownerDocument.defaultView;return w||m},tr=no(0,0,0,0);function Qt(l){return parseFloat(l)||0}function Jt(l){for(var w=[],O=1;O<arguments.length;O++)w[O-1]=arguments[O];return w.reduce(function(_,j){var G=l["border-"+j+"-width"];return _+Qt(G)},0)}function Sr(l){for(var w=["top","right","bottom","left"],O={},_=0,j=w;_<j.length;_++){var G=j[_],N=l["padding-"+G];O[G]=Qt(N)}return O}function Br(l){var w=l.getBBox();return no(0,0,w.width,w.height)}function Zr(l){var w=l.clientWidth,O=l.clientHeight;if(!w&&!O)return tr;var _=rt(l).getComputedStyle(l),j=Sr(_),G=j.left+j.right,N=j.top+j.bottom,le=Qt(_.width),ne=Qt(_.height);if(_.boxSizing==="border-box"&&(Math.round(le+G)!==w&&(le-=Jt(_,"left","right")+G),Math.round(ne+N)!==O&&(ne-=Jt(_,"top","bottom")+N)),!_n(l)){var ve=Math.round(le+G)-w,Le=Math.round(ne+N)-O;Math.abs(ve)!==1&&(le-=ve),Math.abs(Le)!==1&&(ne-=Le)}return no(j.left,j.top,le,ne)}var fn=function(){return typeof SVGGraphicsElement!="undefined"?function(l){return l instanceof rt(l).SVGGraphicsElement}:function(l){return l instanceof rt(l).SVGElement&&typeof l.getBBox=="function"}}();function _n(l){return l===rt(l).document.documentElement}function Za(l){return Wo?fn(l)?Br(l):Zr(l):tr}function Ti(l){var w=l.x,O=l.y,_=l.width,j=l.height,G=typeof DOMRectReadOnly!="undefined"?DOMRectReadOnly:Object,N=Object.create(G.prototype);return vr(N,{x:w,y:O,width:_,height:j,top:O,right:w+_,bottom:j+O,left:w}),N}function no(l,w,O,_){return{x:l,y:w,width:O,height:_}}var Eo=function(){function l(w){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=no(0,0,0,0),this.target=w}return l.prototype.isActive=function(){var w=Za(this.target);return this.contentRect_=w,w.width!==this.broadcastWidth||w.height!==this.broadcastHeight},l.prototype.broadcastRect=function(){var w=this.contentRect_;return this.broadcastWidth=w.width,this.broadcastHeight=w.height,w},l}(),ao=function(){function l(w,O){var _=Ti(O);vr(this,{target:w,contentRect:_})}return l}(),ti=function(){function l(w,O,_){if(this.activeObservations_=[],this.observations_=new Zo,typeof w!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=w,this.controller_=O,this.callbackCtx_=_}return l.prototype.observe=function(w){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element=="undefined"||!(Element instanceof Object))){if(!(w instanceof rt(w).Element))throw new TypeError('parameter 1 is not of type "Element".');var O=this.observations_;O.has(w)||(O.set(w,new Eo(w)),this.controller_.addObserver(this),this.controller_.refresh())}},l.prototype.unobserve=function(w){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element=="undefined"||!(Element instanceof Object))){if(!(w instanceof rt(w).Element))throw new TypeError('parameter 1 is not of type "Element".');var O=this.observations_;O.has(w)&&(O.delete(w),O.size||this.controller_.removeObserver(this))}},l.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},l.prototype.gatherActive=function(){var w=this;this.clearActive(),this.observations_.forEach(function(O){O.isActive()&&w.activeObservations_.push(O)})},l.prototype.broadcastActive=function(){if(this.hasActive()){var w=this.callbackCtx_,O=this.activeObservations_.map(function(_){return new ao(_.target,_.broadcastRect())});this.callback_.call(w,O,w),this.clearActive()}},l.prototype.clearActive=function(){this.activeObservations_.splice(0)},l.prototype.hasActive=function(){return this.activeObservations_.length>0},l}(),ri=typeof WeakMap!="undefined"?new WeakMap:new Zo,Au=function(){function l(w){if(!(this instanceof l))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var O=Et.getInstance(),_=new ti(w,O,this);ri.set(this,_)}return l}();["observe","unobserve","disconnect"].forEach(function(l){Au.prototype[l]=function(){var w;return(w=ri.get(this))[l].apply(w,arguments)}});var fs=function(){return typeof m.ResizeObserver!="undefined"?m.ResizeObserver:Au}(),Go=fs,Ta=new Map;function ni(l){l.forEach(function(w){var O,_=w.target;(O=Ta.get(_))===null||O===void 0||O.forEach(function(j){return j(_)})})}var Oi=new Go(ni),Cu=null,xl=null;function Ii(l,w){Ta.has(l)||(Ta.set(l,new Set),Oi.observe(l)),Ta.get(l).add(w)}function ai(l,w){Ta.has(l)&&(Ta.get(l).delete(w),Ta.get(l).size||(Oi.unobserve(l),Ta.delete(l)))}var Pu=function(l){gn(O,l);var w=vn(O);function O(){return(0,Pr.Z)(this,O),w.apply(this,arguments)}return(0,xn.Z)(O,[{key:"render",value:function(){return this.props.children}}]),O}(n.Component),Zi=n.createContext(null);function To(l){var w=l.children,O=l.onBatchResize,_=n.useRef(0),j=n.useRef([]),G=n.useContext(Zi),N=n.useCallback(function(le,ne,ve){_.current+=1;var Le=_.current;j.current.push({size:le,element:ne,data:ve}),Promise.resolve().then(function(){Le===_.current&&(O==null||O(j.current),j.current=[])}),G==null||G(le,ne,ve)},[O,G]);return n.createElement(Zi.Provider,{value:N},w)}function Wi(l,w){var O=l.children,_=l.disabled,j=n.useRef(null),G=n.useRef(null),N=n.useContext(Zi),le=typeof O=="function",ne=le?O(j):O,ve=n.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),Le=!le&&n.isValidElement(ne)&&Ct(ne),ze=Le?ne.ref:null,Fe=n.useMemo(function(){return Ze(ze,j)},[ze,j]),He=function(){return re(j.current)||re(G.current)};n.useImperativeHandle(w,function(){return He()});var Te=n.useRef(l);Te.current=l;var lt=n.useCallback(function(mt){var At=Te.current,yt=At.onResize,xt=At.data,Pt=mt.getBoundingClientRect(),jt=Pt.width,Nt=Pt.height,$t=mt.offsetWidth,Xt=mt.offsetHeight,Ht=Math.floor(jt),Vt=Math.floor(Nt);if(ve.current.width!==Ht||ve.current.height!==Vt||ve.current.offsetWidth!==$t||ve.current.offsetHeight!==Xt){var ct={width:Ht,height:Vt,offsetWidth:$t,offsetHeight:Xt};ve.current=ct;var Gt=$t===Math.round(jt)?jt:$t,Zt=Xt===Math.round(Nt)?Nt:Xt,qt=(0,X.Z)((0,X.Z)({},ct),{},{offsetWidth:Gt,offsetHeight:Zt});N==null||N(qt,mt,xt),yt&&Promise.resolve().then(function(){yt(qt,mt)})}},[]);return n.useEffect(function(){var mt=He();return mt&&!_&&Ii(mt,lt),function(){return ai(mt,lt)}},[j.current,_]),n.createElement(Pu,{ref:G},Le?n.cloneElement(ne,{ref:Fe}):ne)}var Ko=n.forwardRef(Wi),Ru=Ko,Mu="rc-observer-key";function Gi(l,w){var O=l.children,_=typeof O=="function"?[O]:xo(O);return _.map(function(j,G){var N=(j==null?void 0:j.key)||"".concat(Mu,"-").concat(G);return n.createElement(Ru,(0,q.Z)({},l,{key:N,ref:G===0?w:void 0}),j)})}var ku=n.forwardRef(Gi);ku.Collection=To;var Qn=ku,Oo={width:0,height:0,left:0,top:0};function Ki(l,w,O){return(0,n.useMemo)(function(){for(var _,j=new Map,G=w.get((_=l[0])===null||_===void 0?void 0:_.key)||Oo,N=G.left+G.width,le=0;le<l.length;le+=1){var ne=l[le].key,ve=w.get(ne);if(!ve){var Le;ve=w.get((Le=l[le-1])===null||Le===void 0?void 0:Le.key)||Oo}var ze=j.get(ne)||(0,X.Z)({},ve);ze.right=N-ze.left-ze.width,j.set(ne,ze)}return j},[l.map(function(_){return _.key}).join("_"),w,O])}function oo(l,w){var O=n.useRef(l),_=n.useState({}),j=(0,ie.Z)(_,2),G=j[1];function N(le){var ne=typeof le=="function"?le(O.current):le;ne!==O.current&&w(ne,O.current),O.current=ne,G({})}return[O.current,N]}var js=.1,Vi=.01,Vo=20,oi=Math.pow(.995,Vo);function Yi(l,w){var O=(0,n.useState)(),_=(0,ie.Z)(O,2),j=_[0],G=_[1],N=(0,n.useState)(0),le=(0,ie.Z)(N,2),ne=le[0],ve=le[1],Le=(0,n.useState)(0),ze=(0,ie.Z)(Le,2),Fe=ze[0],He=ze[1],Te=(0,n.useState)(),lt=(0,ie.Z)(Te,2),mt=lt[0],At=lt[1],yt=(0,n.useRef)();function xt(Ht){var Vt=Ht.touches[0],ct=Vt.screenX,Gt=Vt.screenY;G({x:ct,y:Gt}),window.clearInterval(yt.current)}function Pt(Ht){if(j){Ht.preventDefault();var Vt=Ht.touches[0],ct=Vt.screenX,Gt=Vt.screenY;G({x:ct,y:Gt});var Zt=ct-j.x,qt=Gt-j.y;w(Zt,qt);var dr=Date.now();ve(dr),He(dr-ne),At({x:Zt,y:qt})}}function jt(){if(j&&(G(null),At(null),mt)){var Ht=mt.x/Fe,Vt=mt.y/Fe,ct=Math.abs(Ht),Gt=Math.abs(Vt);if(Math.max(ct,Gt)<js)return;var Zt=Ht,qt=Vt;yt.current=window.setInterval(function(){if(Math.abs(Zt)<Vi&&Math.abs(qt)<Vi){window.clearInterval(yt.current);return}Zt*=oi,qt*=oi,w(Zt*Vo,qt*Vo)},Vo)}}var Nt=(0,n.useRef)();function $t(Ht){var Vt=Ht.deltaX,ct=Ht.deltaY,Gt=0,Zt=Math.abs(Vt),qt=Math.abs(ct);Zt===qt?Gt=Nt.current==="x"?Vt:ct:Zt>qt?(Gt=Vt,Nt.current="x"):(Gt=ct,Nt.current="y"),w(-Gt,-Gt)&&Ht.preventDefault()}var Xt=(0,n.useRef)(null);Xt.current={onTouchStart:xt,onTouchMove:Pt,onTouchEnd:jt,onWheel:$t},n.useEffect(function(){function Ht(Zt){Xt.current.onTouchStart(Zt)}function Vt(Zt){Xt.current.onTouchMove(Zt)}function ct(Zt){Xt.current.onTouchEnd(Zt)}function Gt(Zt){Xt.current.onWheel(Zt)}return document.addEventListener("touchmove",Vt,{passive:!1}),document.addEventListener("touchend",ct,{passive:!1}),l.current.addEventListener("touchstart",Ht,{passive:!1}),l.current.addEventListener("wheel",Gt),function(){document.removeEventListener("touchmove",Vt),document.removeEventListener("touchend",ct)}},[])}function ii(l){var w=(0,n.useState)(0),O=(0,ie.Z)(w,2),_=O[0],j=O[1],G=(0,n.useRef)(0),N=(0,n.useRef)();return N.current=l,k(function(){var le;(le=N.current)===null||le===void 0||le.call(N)},[_]),function(){G.current===_&&(G.current+=1,j(G.current))}}function Bs(l){var w=(0,n.useRef)([]),O=(0,n.useState)({}),_=(0,ie.Z)(O,2),j=_[1],G=(0,n.useRef)(typeof l=="function"?l():l),N=ii(function(){var ne=G.current;w.current.forEach(function(ve){ne=ve(ne)}),w.current=[],G.current=ne,j({})});function le(ne){w.current.push(ne),N()}return[G.current,le]}var U={width:0,height:0,left:0,top:0,right:0};function J(l,w,O,_,j,G,N){var le=N.tabs,ne=N.tabPosition,ve=N.rtl,Le,ze,Fe;return["top","bottom"].includes(ne)?(Le="width",ze=ve?"right":"left",Fe=Math.abs(O)):(Le="height",ze="top",Fe=-O),(0,n.useMemo)(function(){if(!le.length)return[0,0];for(var He=le.length,Te=He,lt=0;lt<He;lt+=1){var mt=l.get(le[lt].key)||U;if(mt[ze]+mt[Le]>Fe+w){Te=lt-1;break}}for(var At=0,yt=He-1;yt>=0;yt-=1){var xt=l.get(le[yt].key)||U;if(xt[ze]<Fe){At=yt+1;break}}return[At,Te]},[l,w,_,j,G,Fe,ne,le.map(function(He){return He.key}).join("_"),ve])}function K(l){var w;return l instanceof Map?(w={},l.forEach(function(O,_){w[_]=O})):w=l,JSON.stringify(w)}var xe="TABS_DQ";function Ye(l){return String(l).replace(/"/g,xe)}function pt(l,w){var O=l.prefixCls,_=l.editable,j=l.locale,G=l.style;return!_||_.showAdd===!1?null:n.createElement("button",{ref:w,type:"button",className:"".concat(O,"-nav-add"),style:G,"aria-label":(j==null?void 0:j.addAriaLabel)||"Add tab",onClick:function(le){_.onEdit("add",{event:le})}},_.addIcon||"+")}var wt=n.forwardRef(pt),Tt=n.forwardRef(function(l,w){var O=l.position,_=l.prefixCls,j=l.extra;if(!j)return null;var G,N={};return(0,Oe.Z)(j)==="object"&&!n.isValidElement(j)?N=j:N.right=j,O==="right"&&(G=N.right),O==="left"&&(G=N.left),G?n.createElement("div",{className:"".concat(_,"-extra-content"),ref:w},G):null}),zt=Tt;function Ut(l,w){if(!l)return!1;if(l.contains)return l.contains(w);for(var O=w;O;){if(O===l)return!0;O=O.parentNode}return!1}function ar(l,w,O,_){var j=he.unstable_batchedUpdates?function(N){he.unstable_batchedUpdates(O,N)}:O;return l.addEventListener&&l.addEventListener(w,j,_),{remove:function(){l.removeEventListener&&l.removeEventListener(w,j,_)}}}var gr=(0,n.forwardRef)(function(l,w){var O=l.didUpdate,_=l.getContainer,j=l.children,G=(0,n.useRef)(),N=(0,n.useRef)();(0,n.useImperativeHandle)(w,function(){return{}});var le=(0,n.useRef)(!1);return!le.current&&S()&&(N.current=_(),G.current=N.current.parentNode,le.current=!0),(0,n.useEffect)(function(){O==null||O(l)}),(0,n.useEffect)(function(){return N.current.parentNode===null&&G.current!==null&&G.current.appendChild(N.current),function(){var ne,ve;(ne=N.current)===null||ne===void 0||(ve=ne.parentNode)===null||ve===void 0||ve.removeChild(N.current)}},[]),N.current?he.createPortal(j,N.current):null}),mr=gr;function Tr(l,w,O){return O?l[0]===w[0]:l[0]===w[0]&&l[1]===w[1]}function _r(l,w,O){var _=l[w]||{};return(0,X.Z)((0,X.Z)({},_),O)}function Kr(l,w,O,_){for(var j=O.points,G=Object.keys(l),N=0;N<G.length;N+=1){var le=G[N];if(Tr(l[le].points,j,_))return"".concat(w,"-placement-").concat(le)}return""}function En(l){var w=l.prefixCls,O=l.motion,_=l.animation,j=l.transitionName;return O||(_?{motionName:"".concat(w,"-").concat(_)}:j?{motionName:j}:null)}function Hn(l){var w=l.prefixCls,O=l.visible,_=l.zIndex,j=l.mask,G=l.maskMotion,N=l.maskAnimation,le=l.maskTransitionName;if(!j)return null;var ne={};return(G||le||N)&&(ne=(0,X.Z)({motionAppear:!0},En({motion:G,prefixCls:w,transitionName:le,animation:N}))),n.createElement(ka,(0,q.Z)({},ne,{visible:O,removeOnLeave:!0}),function(ve){var Le=ve.className;return n.createElement("div",{style:{zIndex:_},className:u()("".concat(w,"-mask"),Le)})})}function Oa(l,w){var O=Object.keys(l);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(l);w&&(_=_.filter(function(j){return Object.getOwnPropertyDescriptor(l,j).enumerable})),O.push.apply(O,_)}return O}function qn(l){for(var w=1;w<arguments.length;w++){var O=arguments[w]!=null?arguments[w]:{};w%2?Oa(Object(O),!0).forEach(function(_){si(l,_,O[_])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(O)):Oa(Object(O)).forEach(function(_){Object.defineProperty(l,_,Object.getOwnPropertyDescriptor(O,_))})}return l}function ui(l){return ui=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(w){return typeof w}:function(w){return w&&typeof Symbol=="function"&&w.constructor===Symbol&&w!==Symbol.prototype?"symbol":typeof w},ui(l)}function si(l,w,O){return w in l?Object.defineProperty(l,w,{value:O,enumerable:!0,configurable:!0,writable:!0}):l[w]=O,l}var io,Ai={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-",O:"-o-"};function _a(){if(io!==void 0)return io;io="";var l=document.createElement("p").style,w="Transform";for(var O in Ai)O+w in l&&(io=O);return io}function Xi(){return _a()?"".concat(_a(),"TransitionProperty"):"transitionProperty"}function Io(){return _a()?"".concat(_a(),"Transform"):"transform"}function ps(l,w){var O=Xi();O&&(l.style[O]=w,O!=="transitionProperty"&&(l.style.transitionProperty=w))}function Wa(l,w){var O=Io();O&&(l.style[O]=w,O!=="transform"&&(l.style.transform=w))}function _u(l){return l.style.transitionProperty||l.style[Xi()]}function or(l){var w=window.getComputedStyle(l,null),O=w.getPropertyValue("transform")||w.getPropertyValue(Io());if(O&&O!=="none"){var _=O.replace(/[^0-9\-.,]/g,"").split(",");return{x:parseFloat(_[12]||_[4],0),y:parseFloat(_[13]||_[5],0)}}return{x:0,y:0}}var Qi=/matrix\((.*)\)/,Ao=/matrix3d\((.*)\)/;function Yo(l,w){var O=window.getComputedStyle(l,null),_=O.getPropertyValue("transform")||O.getPropertyValue(Io());if(_&&_!=="none"){var j,G=_.match(Qi);if(G)G=G[1],j=G.split(",").map(function(le){return parseFloat(le,10)}),j[4]=w.x,j[5]=w.y,Wa(l,"matrix(".concat(j.join(","),")"));else{var N=_.match(Ao)[1];j=N.split(",").map(function(le){return parseFloat(le,10)}),j[12]=w.x,j[13]=w.y,Wa(l,"matrix3d(".concat(j.join(","),")"))}}else Wa(l,"translateX(".concat(w.x,"px) translateY(").concat(w.y,"px) translateZ(0)"))}var Sl=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,Ji;function vs(l){var w=l.style.display;l.style.display="none",l.offsetHeight,l.style.display=w}function li(l,w,O){var _=O;if(ui(w)==="object"){for(var j in w)w.hasOwnProperty(j)&&li(l,j,w[j]);return}if(typeof _!="undefined"){typeof _=="number"&&(_="".concat(_,"px")),l.style[w]=_;return}return Ji(l,w)}function ms(l){var w,O,_,j=l.ownerDocument,G=j.body,N=j&&j.documentElement;return w=l.getBoundingClientRect(),O=Math.floor(w.left),_=Math.floor(w.top),O-=N.clientLeft||G.clientLeft||0,_-=N.clientTop||G.clientTop||0,{left:O,top:_}}function Ci(l,w){var O=l["page".concat(w?"Y":"X","Offset")],_="scroll".concat(w?"Top":"Left");if(typeof O!="number"){var j=l.document;O=j.documentElement[_],typeof O!="number"&&(O=j.body[_])}return O}function Pi(l){return Ci(l)}function Fs(l){return Ci(l,!0)}function Xo(l){var w=ms(l),O=l.ownerDocument,_=O.defaultView||O.parentWindow;return w.left+=Pi(_),w.top+=Fs(_),w}function hs(l){return l!=null&&l==l.window}function qi(l){return hs(l)?l.document:l.nodeType===9?l:l.ownerDocument}function zs(l,w,O){var _=O,j="",G=qi(l);return _=_||G.defaultView.getComputedStyle(l,null),_&&(j=_.getPropertyValue(w)||_[w]),j}var gs=new RegExp("^(".concat(Sl,")(?!px)[a-z%]+$"),"i"),Us=/^(top|right|bottom|left)$/,Nu="currentStyle",Du="runtimeStyle",ci="left",El="px";function ys(l,w){var O=l[Nu]&&l[Nu][w];if(gs.test(O)&&!Us.test(w)){var _=l.style,j=_[ci],G=l[Du][ci];l[Du][ci]=l[Nu][ci],_[ci]=w==="fontSize"?"1em":O||0,O=_.pixelLeft+El,_[ci]=j,l[Du][ci]=G}return O===""?"auto":O}typeof window!="undefined"&&(Ji=window.getComputedStyle?zs:ys);function Lu(l,w){return l==="left"?w.useCssRight?"right":l:w.useCssBottom?"bottom":l}function $s(l){if(l==="left")return"right";if(l==="right")return"left";if(l==="top")return"bottom";if(l==="bottom")return"top"}function Na(l,w,O){li(l,"position")==="static"&&(l.style.position="relative");var _=-999,j=-999,G=Lu("left",O),N=Lu("top",O),le=$s(G),ne=$s(N);G!=="left"&&(_=999),N!=="top"&&(j=999);var ve="",Le=Xo(l);("left"in w||"top"in w)&&(ve=_u(l)||"",ps(l,"none")),"left"in w&&(l.style[le]="",l.style[G]="".concat(_,"px")),"top"in w&&(l.style[ne]="",l.style[N]="".concat(j,"px")),vs(l);var ze=Xo(l),Fe={};for(var He in w)if(w.hasOwnProperty(He)){var Te=Lu(He,O),lt=He==="left"?_:j,mt=Le[He]-ze[He];Te===He?Fe[Te]=lt+mt:Fe[Te]=lt-mt}li(l,Fe),vs(l),("left"in w||"top"in w)&&ps(l,ve);var At={};for(var yt in w)if(w.hasOwnProperty(yt)){var xt=Lu(yt,O),Pt=w[yt]-Le[yt];yt===xt?At[xt]=Fe[xt]+Pt:At[xt]=Fe[xt]-Pt}li(l,At)}function eu(l,w){var O=Xo(l),_=or(l),j={x:_.x,y:_.y};"left"in w&&(j.x=_.x+w.left-O.left),"top"in w&&(j.y=_.y+w.top-O.top),Yo(l,j)}function di(l,w,O){if(O.ignoreShake){var _=Xo(l),j=_.left.toFixed(0),G=_.top.toFixed(0),N=w.left.toFixed(0),le=w.top.toFixed(0);if(j===N&&G===le)return}O.useCssRight||O.useCssBottom?Na(l,w,O):O.useCssTransform&&Io()in document.body.style?eu(l,w):Na(l,w,O)}function ju(l,w){for(var O=0;O<l.length;O++)w(l[O])}function bs(l){return Ji(l,"boxSizing")==="border-box"}var Hs=["margin","border","padding"],tu=-1,Tl=2,ru=1,Gn=0;function uo(l,w,O){var _={},j=l.style,G;for(G in w)w.hasOwnProperty(G)&&(_[G]=j[G],j[G]=w[G]);O.call(l);for(G in w)w.hasOwnProperty(G)&&(j[G]=_[G])}function so(l,w,O){var _=0,j,G,N;for(G=0;G<w.length;G++)if(j=w[G],j)for(N=0;N<O.length;N++){var le=void 0;j==="border"?le="".concat(j).concat(O[N],"Width"):le=j+O[N],_+=parseFloat(Ji(l,le))||0}return _}var sa={getParent:function(w){var O=w;do O.nodeType===11&&O.host?O=O.host:O=O.parentNode;while(O&&O.nodeType!==1&&O.nodeType!==9);return O}};ju(["Width","Height"],function(l){sa["doc".concat(l)]=function(w){var O=w.document;return Math.max(O.documentElement["scroll".concat(l)],O.body["scroll".concat(l)],sa["viewport".concat(l)](O))},sa["viewport".concat(l)]=function(w){var O="client".concat(l),_=w.document,j=_.body,G=_.documentElement,N=G[O];return _.compatMode==="CSS1Compat"&&N||j&&j[O]||N}});function Mn(l,w,O){var _=O;if(hs(l))return w==="width"?sa.viewportWidth(l):sa.viewportHeight(l);if(l.nodeType===9)return w==="width"?sa.docWidth(l):sa.docHeight(l);var j=w==="width"?["Left","Right"]:["Top","Bottom"],G=Math.floor(w==="width"?l.getBoundingClientRect().width:l.getBoundingClientRect().height),N=bs(l),le=0;(G==null||G<=0)&&(G=void 0,le=Ji(l,w),(le==null||Number(le)<0)&&(le=l.style[w]||0),le=Math.floor(parseFloat(le))||0),_===void 0&&(_=N?ru:tu);var ne=G!==void 0||N,ve=G||le;return _===tu?ne?ve-so(l,["border","padding"],j):le:ne?_===ru?ve:ve+(_===Tl?-so(l,["border"],j):so(l,["margin"],j)):le+so(l,Hs.slice(_),j)}var Bu={position:"absolute",visibility:"hidden",display:"block"};function fi(){for(var l=arguments.length,w=new Array(l),O=0;O<l;O++)w[O]=arguments[O];var _,j=w[0];return j.offsetWidth!==0?_=Mn.apply(void 0,w):uo(j,Bu,function(){_=Mn.apply(void 0,w)}),_}ju(["width","height"],function(l){var w=l.charAt(0).toUpperCase()+l.slice(1);sa["outer".concat(w)]=function(_,j){return _&&fi(_,l,j?Gn:ru)};var O=l==="width"?["Left","Right"]:["Top","Bottom"];sa[l]=function(_,j){var G=j;if(G!==void 0){if(_){var N=bs(_);return N&&(G+=so(_,["padding","border"],O)),li(_,l,G)}return}return _&&fi(_,l,tu)}});function Qr(l,w){for(var O in w)w.hasOwnProperty(O)&&(l[O]=w[O]);return l}var Or={getWindow:function(w){if(w&&w.document&&w.setTimeout)return w;var O=w.ownerDocument||w;return O.defaultView||O.parentWindow},getDocument:qi,offset:function(w,O,_){if(typeof O!="undefined")di(w,O,_||{});else return Xo(w)},isWindow:hs,each:ju,css:li,clone:function(w){var O,_={};for(O in w)w.hasOwnProperty(O)&&(_[O]=w[O]);var j=w.overflow;if(j)for(O in w)w.hasOwnProperty(O)&&(_.overflow[O]=w.overflow[O]);return _},mix:Qr,getWindowScrollLeft:function(w){return Pi(w)},getWindowScrollTop:function(w){return Fs(w)},merge:function(){for(var w={},O=0;O<arguments.length;O++)Or.mix(w,O<0||arguments.length<=O?void 0:arguments[O]);return w},viewportWidth:0,viewportHeight:0};Qr(Or,sa);var Co=Or.getParent;function nu(l){if(Or.isWindow(l)||l.nodeType===9)return null;var w=Or.getDocument(l),O=w.body,_,j=Or.css(l,"position"),G=j==="fixed"||j==="absolute";if(!G)return l.nodeName.toLowerCase()==="html"?null:Co(l);for(_=Co(l);_&&_!==O&&_.nodeType!==9;_=Co(_))if(j=Or.css(_,"position"),j!=="static")return _;return null}var Fu=Or.getParent;function zu(l){if(Or.isWindow(l)||l.nodeType===9)return!1;var w=Or.getDocument(l),O=w.body,_=null;for(_=Fu(l);_&&_!==O&&_!==w;_=Fu(_)){var j=Or.css(_,"position");if(j==="fixed")return!0}return!1}function Uu(l,w){for(var O={left:0,right:1/0,top:0,bottom:1/0},_=nu(l),j=Or.getDocument(l),G=j.defaultView||j.parentWindow,N=j.body,le=j.documentElement;_;){if((navigator.userAgent.indexOf("MSIE")===-1||_.clientWidth!==0)&&_!==N&&_!==le&&Or.css(_,"overflow")!=="visible"){var ne=Or.offset(_);ne.left+=_.clientLeft,ne.top+=_.clientTop,O.top=Math.max(O.top,ne.top),O.right=Math.min(O.right,ne.left+_.clientWidth),O.bottom=Math.min(O.bottom,ne.top+_.clientHeight),O.left=Math.max(O.left,ne.left)}else if(_===N||_===le)break;_=nu(_)}var ve=null;if(!Or.isWindow(l)&&l.nodeType!==9){ve=l.style.position;var Le=Or.css(l,"position");Le==="absolute"&&(l.style.position="fixed")}var ze=Or.getWindowScrollLeft(G),Fe=Or.getWindowScrollTop(G),He=Or.viewportWidth(G),Te=Or.viewportHeight(G),lt=le.scrollWidth,mt=le.scrollHeight,At=window.getComputedStyle(N);if(At.overflowX==="hidden"&&(lt=G.innerWidth),At.overflowY==="hidden"&&(mt=G.innerHeight),l.style&&(l.style.position=ve),w||zu(l))O.left=Math.max(O.left,ze),O.top=Math.max(O.top,Fe),O.right=Math.min(O.right,ze+He),O.bottom=Math.min(O.bottom,Fe+Te);else{var yt=Math.max(lt,ze+He);O.right=Math.min(O.right,yt);var xt=Math.max(mt,Fe+Te);O.bottom=Math.min(O.bottom,xt)}return O.top>=0&&O.left>=0&&O.bottom>O.top&&O.right>O.left?O:null}function ws(l,w,O,_){var j=Or.clone(l),G={width:w.width,height:w.height};return _.adjustX&&j.left<O.left&&(j.left=O.left),_.resizeWidth&&j.left>=O.left&&j.left+G.width>O.right&&(G.width-=j.left+G.width-O.right),_.adjustX&&j.left+G.width>O.right&&(j.left=Math.max(O.right-G.width,O.left)),_.adjustY&&j.top<O.top&&(j.top=O.top),_.resizeHeight&&j.top>=O.top&&j.top+G.height>O.bottom&&(G.height-=j.top+G.height-O.bottom),_.adjustY&&j.top+G.height>O.bottom&&(j.top=Math.max(O.bottom-G.height,O.top)),Or.mix(j,G)}function $u(l){var w,O,_;if(!Or.isWindow(l)&&l.nodeType!==9)w=Or.offset(l),O=Or.outerWidth(l),_=Or.outerHeight(l);else{var j=Or.getWindow(l);w={left:Or.getWindowScrollLeft(j),top:Or.getWindowScrollTop(j)},O=Or.viewportWidth(j),_=Or.viewportHeight(j)}return w.width=O,w.height=_,w}function Po(l,w){var O=w.charAt(0),_=w.charAt(1),j=l.width,G=l.height,N=l.left,le=l.top;return O==="c"?le+=G/2:O==="b"&&(le+=G),_==="c"?N+=j/2:_==="r"&&(N+=j),{left:N,top:le}}function Ia(l,w,O,_,j){var G=Po(w,O[1]),N=Po(l,O[0]),le=[N.left-G.left,N.top-G.top];return{left:Math.round(l.left-le[0]+_[0]-j[0]),top:Math.round(l.top-le[1]+_[1]-j[1])}}function Hu(l,w,O){return l.left<O.left||l.left+w.width>O.right}function Zs(l,w,O){return l.top<O.top||l.top+w.height>O.bottom}function Ol(l,w,O){return l.left>O.right||l.left+w.width<O.left}function Ri(l,w,O){return l.top>O.bottom||l.top+w.height<O.top}function pi(l,w,O){var _=[];return Or.each(l,function(j){_.push(j.replace(w,function(G){return O[G]}))}),_}function au(l,w){return l[w]=-l[w],l}function xs(l,w){var O;return/%$/.test(l)?O=parseInt(l.substring(0,l.length-1),10)/100*w:O=parseInt(l,10),O||0}function hn(l,w){l[0]=xs(l[0],w.width),l[1]=xs(l[1],w.height)}function Zu(l,w,O,_){var j=O.points,G=O.offset||[0,0],N=O.targetOffset||[0,0],le=O.overflow,ne=O.source||l;G=[].concat(G),N=[].concat(N),le=le||{};var ve={},Le=0,ze=!!(le&&le.alwaysByViewport),Fe=Uu(ne,ze),He=$u(ne);hn(G,He),hn(N,w);var Te=Ia(He,w,j,G,N),lt=Or.merge(He,Te);if(Fe&&(le.adjustX||le.adjustY)&&_){if(le.adjustX&&Hu(Te,He,Fe)){var mt=pi(j,/[lr]/gi,{l:"r",r:"l"}),At=au(G,0),yt=au(N,0),xt=Ia(He,w,mt,At,yt);Ol(xt,He,Fe)||(Le=1,j=mt,G=At,N=yt)}if(le.adjustY&&Zs(Te,He,Fe)){var Pt=pi(j,/[tb]/gi,{t:"b",b:"t"}),jt=au(G,1),Nt=au(N,1),$t=Ia(He,w,Pt,jt,Nt);Ri($t,He,Fe)||(Le=1,j=Pt,G=jt,N=Nt)}Le&&(Te=Ia(He,w,j,G,N),Or.mix(lt,Te));var Xt=Hu(Te,He,Fe),Ht=Zs(Te,He,Fe);if(Xt||Ht){var Vt=j;Xt&&(Vt=pi(j,/[lr]/gi,{l:"r",r:"l"})),Ht&&(Vt=pi(j,/[tb]/gi,{t:"b",b:"t"})),j=Vt,G=O.offset||[0,0],N=O.targetOffset||[0,0]}ve.adjustX=le.adjustX&&Xt,ve.adjustY=le.adjustY&&Ht,(ve.adjustX||ve.adjustY)&&(lt=ws(Te,He,Fe,ve))}return lt.width!==He.width&&Or.css(ne,"width",Or.width(ne)+lt.width-He.width),lt.height!==He.height&&Or.css(ne,"height",Or.height(ne)+lt.height-He.height),Or.offset(ne,{left:lt.left,top:lt.top},{useCssRight:O.useCssRight,useCssBottom:O.useCssBottom,useCssTransform:O.useCssTransform,ignoreShake:O.ignoreShake}),{points:j,offset:G,targetOffset:N,overflow:ve}}function Wu(l,w){var O=Uu(l,w),_=$u(l);return!O||_.left+_.width<=O.left||_.top+_.height<=O.top||_.left>=O.right||_.top>=O.bottom}function vi(l,w,O){var _=O.target||w,j=$u(_),G=!Wu(_,O.overflow&&O.overflow.alwaysByViewport);return Zu(l,j,O,G)}vi.__getOffsetParent=nu,vi.__getVisibleRectForElement=Uu;function Ws(l,w,O){var _,j,G=Or.getDocument(l),N=G.defaultView||G.parentWindow,le=Or.getWindowScrollLeft(N),ne=Or.getWindowScrollTop(N),ve=Or.viewportWidth(N),Le=Or.viewportHeight(N);"pageX"in w?_=w.pageX:_=le+w.clientX,"pageY"in w?j=w.pageY:j=ne+w.clientY;var ze={left:_,top:j,width:0,height:0},Fe=_>=0&&_<=le+ve&&j>=0&&j<=ne+Le,He=[O.points[0],"cc"];return Zu(l,ze,qn(qn({},O),{},{points:He}),Fe)}var Gs=null;function Mi(l,w){var O=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,_=new Set;function j(G,N){var le=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,ne=_.has(G);if(Ho(!ne,"Warning: There may be circular references"),ne)return!1;if(G===N)return!0;if(O&&le>1)return!1;_.add(G);var ve=le+1;if(Array.isArray(G)){if(!Array.isArray(N)||G.length!==N.length)return!1;for(var Le=0;Le<G.length;Le++)if(!j(G[Le],N[Le],ve))return!1;return!0}if(G&&N&&(0,Oe.Z)(G)==="object"&&(0,Oe.Z)(N)==="object"){var ze=Object.keys(G);return ze.length!==Object.keys(N).length?!1:ze.every(function(Fe){return j(G[Fe],N[Fe],ve)})}return!1}return j(l,w)}var ki=Mi,mi=function(l){if(!l)return!1;if(l instanceof Element){if(l.offsetParent)return!0;if(l.getBBox){var w=l.getBBox(),O=w.width,_=w.height;if(O||_)return!0}if(l.getBoundingClientRect){var j=l.getBoundingClientRect(),G=j.width,N=j.height;if(G||N)return!0}}return!1},Ss=function(l,w){var O=n.useRef(!1),_=n.useRef(null);function j(){window.clearTimeout(_.current)}function G(N){if(j(),!O.current||N===!0){if(l(N)===!1)return;O.current=!0,_.current=window.setTimeout(function(){O.current=!1},w)}else _.current=window.setTimeout(function(){O.current=!1,G()},w)}return[G,function(){O.current=!1,j()}]};function Il(l,w){return l===w?!0:!l||!w?!1:"pageX"in w&&"pageY"in w?l.pageX===w.pageX&&l.pageY===w.pageY:"clientX"in w&&"clientY"in w?l.clientX===w.clientX&&l.clientY===w.clientY:!1}function Al(l,w){l!==document.activeElement&&Ut(w,l)&&typeof l.focus=="function"&&l.focus()}function Es(l,w){var O=null,_=null;function j(N){var le=(0,ie.Z)(N,1),ne=le[0].target;if(document.documentElement.contains(ne)){var ve=ne.getBoundingClientRect(),Le=ve.width,ze=ve.height,Fe=Math.floor(Le),He=Math.floor(ze);(O!==Fe||_!==He)&&Promise.resolve().then(function(){w({width:Fe,height:He})}),O=Fe,_=He}}var G=new Go(j);return l&&G.observe(l),function(){G.disconnect()}}function ou(l){return typeof l!="function"?null:l()}function iu(l){return(0,Oe.Z)(l)!=="object"||!l?null:l}var Ts=function(w,O){var _=w.children,j=w.disabled,G=w.target,N=w.align,le=w.onAlign,ne=w.monitorWindowResize,ve=w.monitorBufferTime,Le=ve===void 0?0:ve,ze=n.useRef({}),Fe=n.useRef(),He=n.Children.only(_),Te=n.useRef({});Te.current.disabled=j,Te.current.target=G,Te.current.align=N,Te.current.onAlign=le;var lt=Ss(function(){var ct=Te.current,Gt=ct.disabled,Zt=ct.target,qt=ct.align,dr=ct.onAlign,fr=Fe.current;if(!Gt&&Zt&&fr){var Ir,hr=ou(Zt),an=iu(Zt);ze.current.element=hr,ze.current.point=an,ze.current.align=qt;var On=document,Jr=On.activeElement;return hr&&mi(hr)?Ir=vi(fr,hr,qt):an&&(Ir=Ws(fr,an,qt)),Al(Jr,fr),dr&&Ir&&dr(fr,Ir),!0}return!1},Le),mt=(0,ie.Z)(lt,2),At=mt[0],yt=mt[1],xt=n.useState(),Pt=(0,ie.Z)(xt,2),jt=Pt[0],Nt=Pt[1],$t=n.useState(),Xt=(0,ie.Z)($t,2),Ht=Xt[0],Vt=Xt[1];return I(function(){Nt(ou(G)),Vt(iu(G))}),n.useEffect(function(){(ze.current.element!==jt||!Il(ze.current.point,Ht)||!ki(ze.current.align,N))&&At()}),n.useEffect(function(){var ct=Es(Fe.current,At);return ct},[Fe.current]),n.useEffect(function(){var ct=Es(jt,At);return ct},[jt]),n.useEffect(function(){j?yt():At()},[j]),n.useEffect(function(){if(ne){var ct=ar(window,"resize",At);return ct.remove}},[ne]),n.useEffect(function(){return function(){yt()}},[]),n.useImperativeHandle(O,function(){return{forceAlign:function(){return At(!0)}}}),n.isValidElement(He)&&(He=n.cloneElement(He,{ref:Ze(He.ref,Fe)})),He},_i=n.forwardRef(Ts);_i.displayName="Align";var Gu=_i,Ku=Gu,Vu=e(74165),Cl=e(15861),Pl=["measure","alignPre","align",null,"motion"],Rl=function(l,w){var O=P(null),_=(0,ie.Z)(O,2),j=_[0],G=_[1],N=(0,n.useRef)();function le(Le){G(Le,!0)}function ne(){dt.cancel(N.current)}function ve(Le){ne(),N.current=dt(function(){le(function(ze){switch(j){case"align":return"motion";case"motion":return"stable";default:}return ze}),Le==null||Le()})}return(0,n.useEffect)(function(){le("measure")},[l]),(0,n.useEffect)(function(){switch(j){case"measure":w();break;default:}j&&(N.current=dt((0,Cl.Z)((0,Vu.Z)().mark(function Le(){var ze,Fe;return(0,Vu.Z)().wrap(function(Te){for(;;)switch(Te.prev=Te.next){case 0:ze=Pl.indexOf(j),Fe=Pl[ze+1],Fe&&ze!==-1&&le(Fe);case 3:case"end":return Te.stop()}},Le)}))))},[j]),(0,n.useEffect)(function(){return function(){ne()}},[]),[j,ve]},uu=function(l){var w=n.useState({width:0,height:0}),O=(0,ie.Z)(w,2),_=O[0],j=O[1];function G(le){var ne=le.offsetWidth,ve=le.offsetHeight,Le=le.getBoundingClientRect(),ze=Le.width,Fe=Le.height;Math.abs(ne-ze)<1&&Math.abs(ve-Fe)<1&&(ne=ze,ve=Fe),j({width:ne,height:ve})}var N=n.useMemo(function(){var le={};if(l){var ne=_.width,ve=_.height;l.indexOf("height")!==-1&&ve?le.height=ve:l.indexOf("minHeight")!==-1&&ve&&(le.minHeight=ve),l.indexOf("width")!==-1&&ne?le.width=ne:l.indexOf("minWidth")!==-1&&ne&&(le.minWidth=ne)}return le},[l,_]);return[N,G]},Ro=n.forwardRef(function(l,w){var O=l.visible,_=l.prefixCls,j=l.className,G=l.style,N=l.children,le=l.zIndex,ne=l.stretch,ve=l.destroyPopupOnHide,Le=l.forceRender,ze=l.align,Fe=l.point,He=l.getRootDomNode,Te=l.getClassNameFromAlign,lt=l.onAlign,mt=l.onMouseEnter,At=l.onMouseLeave,yt=l.onMouseDown,xt=l.onTouchStart,Pt=l.onClick,jt=(0,n.useRef)(),Nt=(0,n.useRef)(),$t=(0,n.useState)(),Xt=(0,ie.Z)($t,2),Ht=Xt[0],Vt=Xt[1],ct=uu(ne),Gt=(0,ie.Z)(ct,2),Zt=Gt[0],qt=Gt[1];function dr(){ne&&qt(He())}var fr=Rl(O,dr),Ir=(0,ie.Z)(fr,2),hr=Ir[0],an=Ir[1],On=(0,n.useState)(0),Jr=(0,ie.Z)(On,2),ur=Jr[0],er=Jr[1],Rr=(0,n.useRef)();I(function(){hr==="alignPre"&&er(0)},[hr]);function Lr(){return Fe||He}function rn(){var kr;(kr=jt.current)===null||kr===void 0||kr.forceAlign()}function on(kr,zr){var pn=Te(zr);Ht!==pn&&Vt(pn),er(function(br){return br+1}),hr==="align"&&(lt==null||lt(kr,zr))}I(function(){hr==="align"&&(ur<3?rn():an(function(){var kr;(kr=Rr.current)===null||kr===void 0||kr.call(Rr)}))},[ur]);var sr=(0,X.Z)({},En(l));["onAppearEnd","onEnterEnd","onLeaveEnd"].forEach(function(kr){var zr=sr[kr];sr[kr]=function(pn,br){return an(),zr==null?void 0:zr(pn,br)}});function Nr(){return new Promise(function(kr){Rr.current=kr})}n.useEffect(function(){!sr.motionName&&hr==="motion"&&an()},[sr.motionName,hr]),n.useImperativeHandle(w,function(){return{forceAlign:rn,getElement:function(){return Nt.current}}});var Gr=(0,X.Z)((0,X.Z)({},Zt),{},{zIndex:le,opacity:hr==="motion"||hr==="stable"||!O?void 0:0,pointerEvents:!O&&hr!=="stable"?"none":void 0},G),Mr=!0;ze!=null&&ze.points&&(hr==="align"||hr==="stable")&&(Mr=!1);var Fr=N;return n.Children.count(N)>1&&(Fr=n.createElement("div",{className:"".concat(_,"-content")},N)),n.createElement(ka,(0,q.Z)({visible:O,ref:Nt,leavedClassName:"".concat(_,"-hidden")},sr,{onAppearPrepare:Nr,onEnterPrepare:Nr,removeOnLeave:ve,forceRender:Le}),function(kr,zr){var pn=kr.className,br=kr.style,Ur=u()(_,j,Ht,pn);return n.createElement(Ku,{target:Lr(),key:"popup",ref:jt,monitorWindowResize:!0,disabled:Mr,align:ze,onAlign:on},n.createElement("div",{ref:zr,className:Ur,onMouseEnter:mt,onMouseLeave:At,onMouseDownCapture:yt,onTouchStartCapture:xt,onClick:Pt,style:(0,X.Z)((0,X.Z)({},br),Gr)},Fr))})});Ro.displayName="PopupInner";var Ks=Ro,hi=n.forwardRef(function(l,w){var O=l.prefixCls,_=l.visible,j=l.zIndex,G=l.children,N=l.mobile;N=N===void 0?{}:N;var le=N.popupClassName,ne=N.popupStyle,ve=N.popupMotion,Le=ve===void 0?{}:ve,ze=N.popupRender,Fe=l.onClick,He=n.useRef();n.useImperativeHandle(w,function(){return{forceAlign:function(){},getElement:function(){return He.current}}});var Te=(0,X.Z)({zIndex:j},ne),lt=G;return n.Children.count(G)>1&&(lt=n.createElement("div",{className:"".concat(O,"-content")},G)),ze&&(lt=ze(lt)),n.createElement(ka,(0,q.Z)({visible:_,ref:He,removeOnLeave:!0},Le),function(mt,At){var yt=mt.className,xt=mt.style,Pt=u()(O,le,yt);return n.createElement("div",{ref:At,className:Pt,onClick:Fe,style:(0,X.Z)((0,X.Z)({},xt),Te)},lt)})});hi.displayName="MobilePopupInner";var lo=hi,su=["visible","mobile"],ha=n.forwardRef(function(l,w){var O=l.visible,_=l.mobile,j=(0,Se.Z)(l,su),G=(0,n.useState)(O),N=(0,ie.Z)(G,2),le=N[0],ne=N[1],ve=(0,n.useState)(!1),Le=(0,ie.Z)(ve,2),ze=Le[0],Fe=Le[1],He=(0,X.Z)((0,X.Z)({},j),{},{visible:le});(0,n.useEffect)(function(){ne(O),O&&_&&Fe(Be())},[O,_]);var Te=ze?n.createElement(lo,(0,q.Z)({},He,{mobile:_,ref:w})):n.createElement(Ks,(0,q.Z)({},He,{ref:w}));return n.createElement("div",null,n.createElement(Hn,He),Te)});ha.displayName="Popup";var Vs=ha,Ml=n.createContext(null),Ys=Ml;function Ga(){}function lu(){return""}function cu(l){return l?l.ownerDocument:window.document}var Yu=["onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur","onContextMenu"];function Os(l){var w=function(O){gn(j,O);var _=vn(j);function j(G){var N;(0,Pr.Z)(this,j),N=_.call(this,G),(0,Q.Z)((0,lr.Z)(N),"popupRef",n.createRef()),(0,Q.Z)((0,lr.Z)(N),"triggerRef",n.createRef()),(0,Q.Z)((0,lr.Z)(N),"portalContainer",void 0),(0,Q.Z)((0,lr.Z)(N),"attachId",void 0),(0,Q.Z)((0,lr.Z)(N),"clickOutsideHandler",void 0),(0,Q.Z)((0,lr.Z)(N),"touchOutsideHandler",void 0),(0,Q.Z)((0,lr.Z)(N),"contextMenuOutsideHandler1",void 0),(0,Q.Z)((0,lr.Z)(N),"contextMenuOutsideHandler2",void 0),(0,Q.Z)((0,lr.Z)(N),"mouseDownTimeout",void 0),(0,Q.Z)((0,lr.Z)(N),"focusTime",void 0),(0,Q.Z)((0,lr.Z)(N),"preClickTime",void 0),(0,Q.Z)((0,lr.Z)(N),"preTouchTime",void 0),(0,Q.Z)((0,lr.Z)(N),"delayTimer",void 0),(0,Q.Z)((0,lr.Z)(N),"hasPopupMouseDown",void 0),(0,Q.Z)((0,lr.Z)(N),"onMouseEnter",function(ne){var ve=N.props.mouseEnterDelay;N.fireEvents("onMouseEnter",ne),N.delaySetPopupVisible(!0,ve,ve?null:ne)}),(0,Q.Z)((0,lr.Z)(N),"onMouseMove",function(ne){N.fireEvents("onMouseMove",ne),N.setPoint(ne)}),(0,Q.Z)((0,lr.Z)(N),"onMouseLeave",function(ne){N.fireEvents("onMouseLeave",ne),N.delaySetPopupVisible(!1,N.props.mouseLeaveDelay)}),(0,Q.Z)((0,lr.Z)(N),"onPopupMouseEnter",function(){N.clearDelayTimer()}),(0,Q.Z)((0,lr.Z)(N),"onPopupMouseLeave",function(ne){var ve;ne.relatedTarget&&!ne.relatedTarget.setTimeout&&Ut((ve=N.popupRef.current)===null||ve===void 0?void 0:ve.getElement(),ne.relatedTarget)||N.delaySetPopupVisible(!1,N.props.mouseLeaveDelay)}),(0,Q.Z)((0,lr.Z)(N),"onFocus",function(ne){N.fireEvents("onFocus",ne),N.clearDelayTimer(),N.isFocusToShow()&&(N.focusTime=Date.now(),N.delaySetPopupVisible(!0,N.props.focusDelay))}),(0,Q.Z)((0,lr.Z)(N),"onMouseDown",function(ne){N.fireEvents("onMouseDown",ne),N.preClickTime=Date.now()}),(0,Q.Z)((0,lr.Z)(N),"onTouchStart",function(ne){N.fireEvents("onTouchStart",ne),N.preTouchTime=Date.now()}),(0,Q.Z)((0,lr.Z)(N),"onBlur",function(ne){N.fireEvents("onBlur",ne),N.clearDelayTimer(),N.isBlurToHide()&&N.delaySetPopupVisible(!1,N.props.blurDelay)}),(0,Q.Z)((0,lr.Z)(N),"onContextMenu",function(ne){ne.preventDefault(),N.fireEvents("onContextMenu",ne),N.setPopupVisible(!0,ne)}),(0,Q.Z)((0,lr.Z)(N),"onContextMenuClose",function(){N.isContextMenuToShow()&&N.close()}),(0,Q.Z)((0,lr.Z)(N),"onClick",function(ne){if(N.fireEvents("onClick",ne),N.focusTime){var ve;if(N.preClickTime&&N.preTouchTime?ve=Math.min(N.preClickTime,N.preTouchTime):N.preClickTime?ve=N.preClickTime:N.preTouchTime&&(ve=N.preTouchTime),Math.abs(ve-N.focusTime)<20)return;N.focusTime=0}N.preClickTime=0,N.preTouchTime=0,N.isClickToShow()&&(N.isClickToHide()||N.isBlurToHide())&&ne&&ne.preventDefault&&ne.preventDefault();var Le=!N.state.popupVisible;(N.isClickToHide()&&!Le||Le&&N.isClickToShow())&&N.setPopupVisible(!N.state.popupVisible,ne)}),(0,Q.Z)((0,lr.Z)(N),"onPopupMouseDown",function(){if(N.hasPopupMouseDown=!0,clearTimeout(N.mouseDownTimeout),N.mouseDownTimeout=window.setTimeout(function(){N.hasPopupMouseDown=!1},0),N.context){var ne;(ne=N.context).onPopupMouseDown.apply(ne,arguments)}}),(0,Q.Z)((0,lr.Z)(N),"onDocumentClick",function(ne){if(!(N.props.mask&&!N.props.maskClosable)){var ve=ne.target,Le=N.getRootDomNode(),ze=N.getPopupDomNode();(!Ut(Le,ve)||N.isContextMenuOnly())&&!Ut(ze,ve)&&!N.hasPopupMouseDown&&N.close()}}),(0,Q.Z)((0,lr.Z)(N),"getRootDomNode",function(){var ne=N.props.getTriggerDOMNode;if(ne)return ne(N.triggerRef.current);try{var ve=re(N.triggerRef.current);if(ve)return ve}catch(Le){}return he.findDOMNode((0,lr.Z)(N))}),(0,Q.Z)((0,lr.Z)(N),"getPopupClassNameFromAlign",function(ne){var ve=[],Le=N.props,ze=Le.popupPlacement,Fe=Le.builtinPlacements,He=Le.prefixCls,Te=Le.alignPoint,lt=Le.getPopupClassNameFromAlign;return ze&&Fe&&ve.push(Kr(Fe,He,ne,Te)),lt&&ve.push(lt(ne)),ve.join(" ")}),(0,Q.Z)((0,lr.Z)(N),"getComponent",function(){var ne=N.props,ve=ne.prefixCls,Le=ne.destroyPopupOnHide,ze=ne.popupClassName,Fe=ne.onPopupAlign,He=ne.popupMotion,Te=ne.popupAnimation,lt=ne.popupTransitionName,mt=ne.popupStyle,At=ne.mask,yt=ne.maskAnimation,xt=ne.maskTransitionName,Pt=ne.maskMotion,jt=ne.zIndex,Nt=ne.popup,$t=ne.stretch,Xt=ne.alignPoint,Ht=ne.mobile,Vt=ne.forceRender,ct=ne.onPopupClick,Gt=N.state,Zt=Gt.popupVisible,qt=Gt.point,dr=N.getPopupAlign(),fr={};return N.isMouseEnterToShow()&&(fr.onMouseEnter=N.onPopupMouseEnter),N.isMouseLeaveToHide()&&(fr.onMouseLeave=N.onPopupMouseLeave),fr.onMouseDown=N.onPopupMouseDown,fr.onTouchStart=N.onPopupMouseDown,n.createElement(Vs,(0,q.Z)({prefixCls:ve,destroyPopupOnHide:Le,visible:Zt,point:Xt&&qt,className:ze,align:dr,onAlign:Fe,animation:Te,getClassNameFromAlign:N.getPopupClassNameFromAlign},fr,{stretch:$t,getRootDomNode:N.getRootDomNode,style:mt,mask:At,zIndex:jt,transitionName:lt,maskAnimation:yt,maskTransitionName:xt,maskMotion:Pt,ref:N.popupRef,motion:He,mobile:Ht,forceRender:Vt,onClick:ct}),typeof Nt=="function"?Nt():Nt)}),(0,Q.Z)((0,lr.Z)(N),"attachParent",function(ne){dt.cancel(N.attachId);var ve=N.props,Le=ve.getPopupContainer,ze=ve.getDocument,Fe=N.getRootDomNode(),He;Le?(Fe||Le.length===0)&&(He=Le(Fe)):He=ze(N.getRootDomNode()).body,He?He.appendChild(ne):N.attachId=dt(function(){N.attachParent(ne)})}),(0,Q.Z)((0,lr.Z)(N),"getContainer",function(){if(!N.portalContainer){var ne=N.props.getDocument,ve=ne(N.getRootDomNode()).createElement("div");ve.style.position="absolute",ve.style.top="0",ve.style.left="0",ve.style.width="100%",N.portalContainer=ve}return N.attachParent(N.portalContainer),N.portalContainer}),(0,Q.Z)((0,lr.Z)(N),"setPoint",function(ne){var ve=N.props.alignPoint;!ve||!ne||N.setState({point:{pageX:ne.pageX,pageY:ne.pageY}})}),(0,Q.Z)((0,lr.Z)(N),"handlePortalUpdate",function(){N.state.prevPopupVisible!==N.state.popupVisible&&N.props.afterPopupVisibleChange(N.state.popupVisible)}),(0,Q.Z)((0,lr.Z)(N),"triggerContextValue",{onPopupMouseDown:N.onPopupMouseDown});var le;return"popupVisible"in G?le=!!G.popupVisible:le=!!G.defaultPopupVisible,N.state={prevPopupVisible:le,popupVisible:le},Yu.forEach(function(ne){N["fire".concat(ne)]=function(ve){N.fireEvents(ne,ve)}}),N}return(0,xn.Z)(j,[{key:"componentDidMount",value:function(){this.componentDidUpdate()}},{key:"componentDidUpdate",value:function(){var N=this.props,le=this.state;if(le.popupVisible){var ne;!this.clickOutsideHandler&&(this.isClickToHide()||this.isContextMenuToShow())&&(ne=N.getDocument(this.getRootDomNode()),this.clickOutsideHandler=ar(ne,"mousedown",this.onDocumentClick)),this.touchOutsideHandler||(ne=ne||N.getDocument(this.getRootDomNode()),this.touchOutsideHandler=ar(ne,"touchstart",this.onDocumentClick)),!this.contextMenuOutsideHandler1&&this.isContextMenuToShow()&&(ne=ne||N.getDocument(this.getRootDomNode()),this.contextMenuOutsideHandler1=ar(ne,"scroll",this.onContextMenuClose)),!this.contextMenuOutsideHandler2&&this.isContextMenuToShow()&&(this.contextMenuOutsideHandler2=ar(window,"blur",this.onContextMenuClose));return}this.clearOutsideHandler()}},{key:"componentWillUnmount",value:function(){this.clearDelayTimer(),this.clearOutsideHandler(),clearTimeout(this.mouseDownTimeout),dt.cancel(this.attachId)}},{key:"getPopupDomNode",value:function(){var N;return((N=this.popupRef.current)===null||N===void 0?void 0:N.getElement())||null}},{key:"getPopupAlign",value:function(){var N=this.props,le=N.popupPlacement,ne=N.popupAlign,ve=N.builtinPlacements;return le&&ve?_r(ve,le,ne):ne}},{key:"setPopupVisible",value:function(N,le){var ne=this.props.alignPoint,ve=this.state.popupVisible;this.clearDelayTimer(),ve!==N&&("popupVisible"in this.props||this.setState({popupVisible:N,prevPopupVisible:ve}),this.props.onPopupVisibleChange(N)),ne&&le&&N&&this.setPoint(le)}},{key:"delaySetPopupVisible",value:function(N,le,ne){var ve=this,Le=le*1e3;if(this.clearDelayTimer(),Le){var ze=ne?{pageX:ne.pageX,pageY:ne.pageY}:null;this.delayTimer=window.setTimeout(function(){ve.setPopupVisible(N,ze),ve.clearDelayTimer()},Le)}else this.setPopupVisible(N,ne)}},{key:"clearDelayTimer",value:function(){this.delayTimer&&(clearTimeout(this.delayTimer),this.delayTimer=null)}},{key:"clearOutsideHandler",value:function(){this.clickOutsideHandler&&(this.clickOutsideHandler.remove(),this.clickOutsideHandler=null),this.contextMenuOutsideHandler1&&(this.contextMenuOutsideHandler1.remove(),this.contextMenuOutsideHandler1=null),this.contextMenuOutsideHandler2&&(this.contextMenuOutsideHandler2.remove(),this.contextMenuOutsideHandler2=null),this.touchOutsideHandler&&(this.touchOutsideHandler.remove(),this.touchOutsideHandler=null)}},{key:"createTwoChains",value:function(N){var le=this.props.children.props,ne=this.props;return le[N]&&ne[N]?this["fire".concat(N)]:le[N]||ne[N]}},{key:"isClickToShow",value:function(){var N=this.props,le=N.action,ne=N.showAction;return le.indexOf("click")!==-1||ne.indexOf("click")!==-1}},{key:"isContextMenuOnly",value:function(){var N=this.props.action;return N==="contextMenu"||N.length===1&&N[0]==="contextMenu"}},{key:"isContextMenuToShow",value:function(){var N=this.props,le=N.action,ne=N.showAction;return le.indexOf("contextMenu")!==-1||ne.indexOf("contextMenu")!==-1}},{key:"isClickToHide",value:function(){var N=this.props,le=N.action,ne=N.hideAction;return le.indexOf("click")!==-1||ne.indexOf("click")!==-1}},{key:"isMouseEnterToShow",value:function(){var N=this.props,le=N.action,ne=N.showAction;return le.indexOf("hover")!==-1||ne.indexOf("mouseEnter")!==-1}},{key:"isMouseLeaveToHide",value:function(){var N=this.props,le=N.action,ne=N.hideAction;return le.indexOf("hover")!==-1||ne.indexOf("mouseLeave")!==-1}},{key:"isFocusToShow",value:function(){var N=this.props,le=N.action,ne=N.showAction;return le.indexOf("focus")!==-1||ne.indexOf("focus")!==-1}},{key:"isBlurToHide",value:function(){var N=this.props,le=N.action,ne=N.hideAction;return le.indexOf("focus")!==-1||ne.indexOf("blur")!==-1}},{key:"forcePopupAlign",value:function(){if(this.state.popupVisible){var N;(N=this.popupRef.current)===null||N===void 0||N.forceAlign()}}},{key:"fireEvents",value:function(N,le){var ne=this.props.children.props[N];ne&&ne(le);var ve=this.props[N];ve&&ve(le)}},{key:"close",value:function(){this.setPopupVisible(!1)}},{key:"render",value:function(){var N=this.state.popupVisible,le=this.props,ne=le.children,ve=le.forceRender,Le=le.alignPoint,ze=le.className,Fe=le.autoDestroy,He=n.Children.only(ne),Te={key:"trigger"};this.isContextMenuToShow()?Te.onContextMenu=this.onContextMenu:Te.onContextMenu=this.createTwoChains("onContextMenu"),this.isClickToHide()||this.isClickToShow()?(Te.onClick=this.onClick,Te.onMouseDown=this.onMouseDown,Te.onTouchStart=this.onTouchStart):(Te.onClick=this.createTwoChains("onClick"),Te.onMouseDown=this.createTwoChains("onMouseDown"),Te.onTouchStart=this.createTwoChains("onTouchStart")),this.isMouseEnterToShow()?(Te.onMouseEnter=this.onMouseEnter,Le&&(Te.onMouseMove=this.onMouseMove)):Te.onMouseEnter=this.createTwoChains("onMouseEnter"),this.isMouseLeaveToHide()?Te.onMouseLeave=this.onMouseLeave:Te.onMouseLeave=this.createTwoChains("onMouseLeave"),this.isFocusToShow()||this.isBlurToHide()?(Te.onFocus=this.onFocus,Te.onBlur=this.onBlur):(Te.onFocus=this.createTwoChains("onFocus"),Te.onBlur=this.createTwoChains("onBlur"));var lt=u()(He&&He.props&&He.props.className,ze);lt&&(Te.className=lt);var mt=(0,X.Z)({},Te);Ct(He)&&(mt.ref=Ze(this.triggerRef,He.ref));var At=n.cloneElement(He,mt),yt;return(N||this.popupRef.current||ve)&&(yt=n.createElement(l,{key:"portal",getContainer:this.getContainer,didUpdate:this.handlePortalUpdate},this.getComponent())),!N&&Fe&&(yt=null),n.createElement(Ys.Provider,{value:this.triggerContextValue},At,yt)}}],[{key:"getDerivedStateFromProps",value:function(N,le){var ne=N.popupVisible,ve={};return ne!==void 0&&le.popupVisible!==ne&&(ve.popupVisible=ne,ve.prevPopupVisible=le.popupVisible),ve}}]),j}(n.Component);return(0,Q.Z)(w,"contextType",Ys),(0,Q.Z)(w,"defaultProps",{prefixCls:"rc-trigger-popup",getPopupClassNameFromAlign:lu,getDocument:cu,onPopupVisibleChange:Ga,afterPopupVisibleChange:Ga,onPopupAlign:Ga,popupClassName:"",mouseEnterDelay:0,mouseLeaveDelay:.1,focusDelay:0,blurDelay:.15,popupStyle:{},destroyPopupOnHide:!1,popupAlign:{},defaultPopupVisible:!1,mask:!1,maskClosable:!0,action:[],showAction:[],hideAction:[],autoDestroy:!1}),w}var gi=Os(mr),Aa={adjustX:1,adjustY:1},Yr=[0,0],Ce={topLeft:{points:["bl","tl"],overflow:Aa,offset:[0,-4],targetOffset:Yr},topCenter:{points:["bc","tc"],overflow:Aa,offset:[0,-4],targetOffset:Yr},topRight:{points:["br","tr"],overflow:Aa,offset:[0,-4],targetOffset:Yr},bottomLeft:{points:["tl","bl"],overflow:Aa,offset:[0,4],targetOffset:Yr},bottomCenter:{points:["tc","bc"],overflow:Aa,offset:[0,4],targetOffset:Yr},bottomRight:{points:["tr","br"],overflow:Aa,offset:[0,4],targetOffset:Yr}},Ke=Ce,ke={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(w){var O=w.keyCode;if(w.altKey&&!w.ctrlKey||w.metaKey||O>=ke.F1&&O<=ke.F12)return!1;switch(O){case ke.ALT:case ke.CAPS_LOCK:case ke.CONTEXT_MENU:case ke.CTRL:case ke.DOWN:case ke.END:case ke.ESC:case ke.HOME:case ke.INSERT:case ke.LEFT:case ke.MAC_FF_META:case ke.META:case ke.NUMLOCK:case ke.NUM_CENTER:case ke.PAGE_DOWN:case ke.PAGE_UP:case ke.PAUSE:case ke.PRINT_SCREEN:case ke.RIGHT:case ke.SHIFT:case ke.UP:case ke.WIN_KEY:case ke.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(w){if(w>=ke.ZERO&&w<=ke.NINE||w>=ke.NUM_ZERO&&w<=ke.NUM_MULTIPLY||w>=ke.A&&w<=ke.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&w===0)return!0;switch(w){case ke.SPACE:case ke.QUESTION_MARK:case ke.NUM_PLUS:case ke.NUM_MINUS:case ke.NUM_PERIOD:case ke.NUM_DIVISION:case ke.SEMICOLON:case ke.DASH:case ke.EQUALS:case ke.COMMA:case ke.PERIOD:case ke.SLASH:case ke.APOSTROPHE:case ke.SINGLE_QUOTE:case ke.OPEN_SQUARE_BRACKET:case ke.BACKSLASH:case ke.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}},De=ke;function vt(l){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(mi(l)){var O=l.nodeName.toLowerCase(),_=["input","select","textarea","button"].includes(O)||l.isContentEditable||O==="a"&&!!l.getAttribute("href"),j=l.getAttribute("tabindex"),G=Number(j),N=null;return j&&!Number.isNaN(G)?N=G:_&&N===null&&(N=0),_&&l.disabled&&(N=null),N!==null&&(N>=0||w&&N<0)}return!1}function gt(l){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,O=(0,Rn.Z)(l.querySelectorAll("*")).filter(function(_){return vt(_,w)});return vt(l,w)&&O.unshift(l),O}var _t=null;function rr(){_t=document.activeElement}function Dr(){_t=null}function ea(){if(_t)try{_t.focus()}catch(l){}}function Wr(l,w){if(w.keyCode===9){var O=gt(l),_=O[w.shiftKey?0:O.length-1],j=_===document.activeElement||l===document.activeElement;if(j){var G=O[w.shiftKey?O.length-1:0];G.focus(),w.preventDefault()}}}var Da=De.ESC,Zn=De.TAB;function Ka(l){var w=l.visible,O=l.setTriggerVisible,_=l.triggerRef,j=l.onVisibleChange,G=l.autoFocus,N=n.useRef(!1),le=function(){if(w&&_.current){var ze,Fe,He,Te;(ze=_.current)===null||ze===void 0||(Fe=ze.triggerRef)===null||Fe===void 0||(He=Fe.current)===null||He===void 0||(Te=He.focus)===null||Te===void 0||Te.call(He),O(!1),typeof j=="function"&&j(!1)}},ne=function(){var ze,Fe,He,Te,lt=gt((ze=_.current)===null||ze===void 0||(Fe=ze.popupRef)===null||Fe===void 0||(He=Fe.current)===null||He===void 0||(Te=He.getElement)===null||Te===void 0?void 0:Te.call(He)),mt=lt[0];return mt!=null&&mt.focus?(mt.focus(),N.current=!0,!0):!1},ve=function(ze){switch(ze.keyCode){case Da:le();break;case Zn:{var Fe=!1;N.current||(Fe=ne()),Fe?ze.preventDefault():le();break}}};n.useEffect(function(){return w?(window.addEventListener("keydown",ve),G&&dt(ne,3),function(){window.removeEventListener("keydown",ve),N.current=!1}):function(){N.current=!1}},[w])}var Ni=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus"];function Ca(l,w){var O=l.arrow,_=O===void 0?!1:O,j=l.prefixCls,G=j===void 0?"rc-dropdown":j,N=l.transitionName,le=l.animation,ne=l.align,ve=l.placement,Le=ve===void 0?"bottomLeft":ve,ze=l.placements,Fe=ze===void 0?Ke:ze,He=l.getPopupContainer,Te=l.showAction,lt=l.hideAction,mt=l.overlayClassName,At=l.overlayStyle,yt=l.visible,xt=l.trigger,Pt=xt===void 0?["hover"]:xt,jt=l.autoFocus,Nt=(0,Se.Z)(l,Ni),$t=n.useState(),Xt=(0,ie.Z)($t,2),Ht=Xt[0],Vt=Xt[1],ct="visible"in l?yt:Ht,Gt=n.useRef(null);n.useImperativeHandle(w,function(){return Gt.current}),Ka({visible:ct,setTriggerVisible:Vt,triggerRef:Gt,onVisibleChange:l.onVisibleChange,autoFocus:jt});var Zt=function(){var er=l.overlay,Rr;return typeof er=="function"?Rr=er():Rr=er,Rr},qt=function(er){var Rr=l.onOverlayClick;Vt(!1),Rr&&Rr(er)},dr=function(er){var Rr=l.onVisibleChange;Vt(er),typeof Rr=="function"&&Rr(er)},fr=function(){var er=Zt();return n.createElement(n.Fragment,null,_&&n.createElement("div",{className:"".concat(G,"-arrow")}),er)},Ir=function(){var er=l.overlay;return typeof er=="function"?fr:fr()},hr=function(){var er=l.minOverlayWidthMatchTrigger,Rr=l.alignPoint;return"minOverlayWidthMatchTrigger"in l?er:!Rr},an=function(){var er=l.openClassName;return er!==void 0?er:"".concat(G,"-open")},On=function(){var er=l.children,Rr=er.props?er.props:{},Lr=u()(Rr.className,an());return ct&&er?n.cloneElement(er,{className:Lr}):er},Jr=lt;return!Jr&&Pt.indexOf("contextMenu")!==-1&&(Jr=["click"]),n.createElement(gi,(0,X.Z)((0,X.Z)({builtinPlacements:Fe},Nt),{},{prefixCls:G,ref:Gt,popupClassName:u()(mt,(0,Q.Z)({},"".concat(G,"-show-arrow"),_)),popupStyle:At,action:Pt,showAction:Te,hideAction:Jr||[],popupPlacement:Le,popupAlign:ne,popupTransitionName:N,popupAnimation:le,popupVisible:ct,stretch:hr()?"minWidth":"",popup:Ir(),onPopupVisibleChange:dr,onPopupClick:qt,getPopupContainer:He}),On())}var Va=n.forwardRef(Ca),Nn=Va,La=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],Kn=void 0;function Di(l,w){var O=l.prefixCls,_=l.invalidate,j=l.item,G=l.renderItem,N=l.responsive,le=l.responsiveDisabled,ne=l.registerSize,ve=l.itemKey,Le=l.className,ze=l.style,Fe=l.children,He=l.display,Te=l.order,lt=l.component,mt=lt===void 0?"div":lt,At=(0,Se.Z)(l,La),yt=N&&!He;function xt(Xt){ne(ve,Xt)}n.useEffect(function(){return function(){xt(null)}},[]);var Pt=G&&j!==Kn?G(j):Fe,jt;_||(jt={opacity:yt?0:1,height:yt?0:Kn,overflowY:yt?"hidden":Kn,order:N?Te:Kn,pointerEvents:yt?"none":Kn,position:yt?"absolute":Kn});var Nt={};yt&&(Nt["aria-hidden"]=!0);var $t=n.createElement(mt,(0,q.Z)({className:u()(!_&&O,Le),style:(0,X.Z)((0,X.Z)({},jt),ze)},Nt,At,{ref:w}),Pt);return N&&($t=n.createElement(Qn,{onResize:function(Ht){var Vt=Ht.offsetWidth;xt(Vt)},disabled:le},$t)),$t}var du=n.forwardRef(Di);du.displayName="Item";var ta=du;function ja(l){if(typeof MessageChannel=="undefined")dt(l);else{var w=new MessageChannel;w.port1.onmessage=function(){return l()},w.port2.postMessage(void 0)}}function ca(){var l=n.useRef(null),w=function(_){l.current||(l.current=[],ja(function(){(0,he.unstable_batchedUpdates)(function(){l.current.forEach(function(j){j()}),l.current=null})})),l.current.push(_)};return w}function da(l,w){var O=n.useState(w),_=(0,ie.Z)(O,2),j=_[0],G=_[1],N=ue(function(le){l(function(){G(le)})});return[j,N]}var Ya=["component"],Mo=["className"],Is=["className"],Xu=function(w,O){var _=n.useContext(Vr);if(!_){var j=w.component,G=j===void 0?"div":j,N=(0,Se.Z)(w,Ya);return n.createElement(G,(0,q.Z)({},N,{ref:O}))}var le=_.className,ne=(0,Se.Z)(_,Mo),ve=w.className,Le=(0,Se.Z)(w,Is);return n.createElement(Vr.Provider,{value:null},n.createElement(ta,(0,q.Z)({ref:O,className:u()(le,ve)},ne,Le)))},Qu=n.forwardRef(Xu);Qu.displayName="RawItem";var ga=Qu,Tn=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],Vr=n.createContext(null),ra="responsive",kl="invalidate";function pc(l){return"+ ".concat(l.length," ...")}function _l(l,w){var O=l.prefixCls,_=O===void 0?"rc-overflow":O,j=l.data,G=j===void 0?[]:j,N=l.renderItem,le=l.renderRawItem,ne=l.itemKey,ve=l.itemWidth,Le=ve===void 0?10:ve,ze=l.ssr,Fe=l.style,He=l.className,Te=l.maxCount,lt=l.renderRest,mt=l.renderRawRest,At=l.suffix,yt=l.component,xt=yt===void 0?"div":yt,Pt=l.itemComponent,jt=l.onVisibleChange,Nt=(0,Se.Z)(l,Tn),$t=ze==="full",Xt=ca(),Ht=da(Xt,null),Vt=(0,ie.Z)(Ht,2),ct=Vt[0],Gt=Vt[1],Zt=ct||0,qt=da(Xt,new Map),dr=(0,ie.Z)(qt,2),fr=dr[0],Ir=dr[1],hr=da(Xt,0),an=(0,ie.Z)(hr,2),On=an[0],Jr=an[1],ur=da(Xt,0),er=(0,ie.Z)(ur,2),Rr=er[0],Lr=er[1],rn=da(Xt,0),on=(0,ie.Z)(rn,2),sr=on[0],Nr=on[1],Gr=(0,n.useState)(null),Mr=(0,ie.Z)(Gr,2),Fr=Mr[0],kr=Mr[1],zr=(0,n.useState)(null),pn=(0,ie.Z)(zr,2),br=pn[0],Ur=pn[1],Hr=n.useMemo(function(){return br===null&&$t?Number.MAX_SAFE_INTEGER:br||0},[br,ct]),In=(0,n.useState)(!1),un=(0,ie.Z)(In,2),Qa=un[0],ba=un[1],An="".concat(_,"-item"),Ja=Math.max(On,Rr),qa=Te===ra,qr=G.length&&qa,Do=Te===kl,Ln=qr||typeof Te=="number"&&G.length>Te,jn=(0,n.useMemo)(function(){var Er=G;return qr?ct===null&&$t?Er=G:Er=G.slice(0,Math.min(G.length,Zt/Le)):typeof Te=="number"&&(Er=G.slice(0,Te)),Er},[G,Le,ct,Te,qr]),oa=(0,n.useMemo)(function(){return qr?G.slice(Hr+1):G.slice(jn.length)},[G,jn,qr,Hr]),Pa=(0,n.useCallback)(function(Er,jr){var Bn;return typeof ne=="function"?ne(Er):(Bn=ne&&(Er==null?void 0:Er[ne]))!==null&&Bn!==void 0?Bn:jr},[ne]),eo=(0,n.useCallback)(N||function(Er){return Er},[N]);function Un(Er,jr,Bn){br===Er&&(jr===void 0||jr===Fr)||(Ur(Er),Bn||(ba(Er<G.length-1),jt==null||jt(Er)),jr!==void 0&&kr(jr))}function yn(Er,jr){Gt(jr.clientWidth)}function kn(Er,jr){Ir(function(Bn){var wa=new Map(Bn);return jr===null?wa.delete(Er):wa.set(Er,jr),wa})}function bn(Er,jr){Lr(jr),Jr(Rr)}function Yn(Er,jr){Nr(jr)}function $i(Er){return fr.get(Pa(jn[Er],Er))}I(function(){if(Zt&&typeof Ja=="number"&&jn){var Er=sr,jr=jn.length,Bn=jr-1;if(!jr){Un(0,null);return}for(var wa=0;wa<jr;wa+=1){var Ua=$i(wa);if($t&&(Ua=Ua||0),Ua===void 0){Un(wa-1,void 0,!0);break}if(Er+=Ua,Bn===0&&Er<=Zt||wa===Bn-1&&Er+$i(Bn)<=Zt){Un(Bn,null);break}else if(Er+Ja>Zt){Un(wa-1,Er-Ua-sr+Rr);break}}At&&$i(0)+sr>Zt&&kr(null)}},[Zt,fr,Rr,sr,Pa,jn]);var bi=Qa&&!!oa.length,Jo={};Fr!==null&&qr&&(Jo={position:"absolute",left:Fr,top:0});var wi={prefixCls:An,responsive:qr,component:Pt,invalidate:Do},Fa=le?function(Er,jr){var Bn=Pa(Er,jr);return n.createElement(Vr.Provider,{key:Bn,value:(0,X.Z)((0,X.Z)({},wi),{},{order:jr,item:Er,itemKey:Bn,registerSize:kn,display:jr<=Hr})},le(Er,jr))}:function(Er,jr){var Bn=Pa(Er,jr);return n.createElement(ta,(0,q.Z)({},wi,{order:jr,key:Bn,item:Er,renderItem:eo,itemKey:Bn,registerSize:kn,display:jr<=Hr}))},za,Lo={order:bi?Hr:Number.MAX_SAFE_INTEGER,className:"".concat(An,"-rest"),registerSize:bn,display:bi};if(mt)mt&&(za=n.createElement(Vr.Provider,{value:(0,X.Z)((0,X.Z)({},wi),Lo)},mt(oa)));else{var Ra=lt||pc;za=n.createElement(ta,(0,q.Z)({},wi,Lo),typeof Ra=="function"?Ra(oa):Ra)}var jo=n.createElement(xt,(0,q.Z)({className:u()(!Do&&_,He),style:Fe,ref:w},Nt),jn.map(Fa),Ln?za:null,At&&n.createElement(ta,(0,q.Z)({},wi,{responsive:qa,responsiveDisabled:!qr,order:Hr,className:"".concat(An,"-suffix"),registerSize:Yn,display:!0,style:Jo}),At));return qa&&(jo=n.createElement(Qn,{onResize:yn,disabled:!qr},jo)),jo}var fu=n.forwardRef(_l);fu.displayName="Overflow",fu.Item=ga,fu.RESPONSIVE=ra,fu.INVALIDATE=kl;var vc=fu,Li=vc,Nl=n.createContext(null);function ji(l,w){return l===void 0?null:"".concat(l,"-").concat(w)}function Xs(l){var w=n.useContext(Nl);return ji(w,l)}var Jc=["children","locked"],Vn=n.createContext(null);function Qs(l,w){var O=(0,X.Z)({},l);return Object.keys(w).forEach(function(_){var j=w[_];j!==void 0&&(O[_]=j)}),O}function Bi(l){var w=l.children,O=l.locked,_=(0,Se.Z)(l,Jc),j=n.useContext(Vn),G=Ve(function(){return Qs(j,_)},[j,_],function(N,le){return!O&&(N[0]!==le[0]||!ki(N[1],le[1],!0))});return n.createElement(Vn.Provider,{value:G},w)}var Ju=[],Js=n.createContext(null);function qu(){return n.useContext(Js)}var qs=n.createContext(Ju);function pu(l){var w=n.useContext(qs);return n.useMemo(function(){return l!==void 0?[].concat((0,Rn.Z)(w),[l]):w},[w,l])}var vu=n.createContext(null),co=n.createContext({}),yi=co,As=De.LEFT,el=De.RIGHT,ko=De.UP,_o=De.DOWN,es=De.ENTER,Dl=De.ESC,Xa=De.HOME,fo=De.END,Cs=[ko,_o,As,el];function mc(l,w,O,_){var j,G,N,le,ne="prev",ve="next",Le="children",ze="parent";if(l==="inline"&&_===es)return{inlineTrigger:!0};var Fe=(j={},(0,Q.Z)(j,ko,ne),(0,Q.Z)(j,_o,ve),j),He=(G={},(0,Q.Z)(G,As,O?ve:ne),(0,Q.Z)(G,el,O?ne:ve),(0,Q.Z)(G,_o,Le),(0,Q.Z)(G,es,Le),G),Te=(N={},(0,Q.Z)(N,ko,ne),(0,Q.Z)(N,_o,ve),(0,Q.Z)(N,es,Le),(0,Q.Z)(N,Dl,ze),(0,Q.Z)(N,As,O?Le:ze),(0,Q.Z)(N,el,O?ze:Le),N),lt={inline:Fe,horizontal:He,vertical:Te,inlineSub:Fe,horizontalSub:Te,verticalSub:Te},mt=(le=lt["".concat(l).concat(w?"":"Sub")])===null||le===void 0?void 0:le[_];switch(mt){case ne:return{offset:-1,sibling:!0};case ve:return{offset:1,sibling:!0};case ze:return{offset:-1,sibling:!1};case Le:return{offset:1,sibling:!1};default:return null}}function tl(l){for(var w=l;w;){if(w.getAttribute("data-menu-list"))return w;w=w.parentElement}return null}function hc(l,w){for(var O=l||document.activeElement;O;){if(w.has(O))return O;O=O.parentElement}return null}function Ll(l,w){var O=gt(l,!0);return O.filter(function(_){return w.has(_)})}function rl(l,w,O){var _=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!l)return null;var j=Ll(l,w),G=j.length,N=j.findIndex(function(le){return O===le});return _<0?N===-1?N=G-1:N-=1:_>0&&(N+=1),N=(N+G)%G,j[N]}function nl(l,w,O,_,j,G,N,le,ne,ve){var Le=n.useRef(),ze=n.useRef();ze.current=w;var Fe=function(){dt.cancel(Le.current)};return n.useEffect(function(){return function(){Fe()}},[]),function(He){var Te=He.which;if([].concat(Cs,[es,Dl,Xa,fo]).includes(Te)){var lt,mt,At,yt=function(){lt=new Set,mt=new Map,At=new Map;var dr=G();return dr.forEach(function(fr){var Ir=document.querySelector("[data-menu-id='".concat(ji(_,fr),"']"));Ir&&(lt.add(Ir),At.set(Ir,fr),mt.set(fr,Ir))}),lt};yt();var xt=mt.get(w),Pt=hc(xt,lt),jt=At.get(Pt),Nt=mc(l,N(jt,!0).length===1,O,Te);if(!Nt&&Te!==Xa&&Te!==fo)return;(Cs.includes(Te)||[Xa,fo].includes(Te))&&He.preventDefault();var $t=function(dr){if(dr){var fr=dr,Ir=dr.querySelector("a");Ir!=null&&Ir.getAttribute("href")&&(fr=Ir);var hr=At.get(dr);le(hr),Fe(),Le.current=dt(function(){ze.current===hr&&fr.focus()})}};if([Xa,fo].includes(Te)||Nt.sibling||!Pt){var Xt;!Pt||l==="inline"?Xt=j.current:Xt=tl(Pt);var Ht,Vt=Ll(Xt,lt);Te===Xa?Ht=Vt[0]:Te===fo?Ht=Vt[Vt.length-1]:Ht=rl(Xt,lt,Pt,Nt.offset),$t(Ht)}else if(Nt.inlineTrigger)ne(jt);else if(Nt.offset>0)ne(jt,!0),Fe(),Le.current=dt(function(){yt();var qt=Pt.getAttribute("aria-controls"),dr=document.getElementById(qt),fr=rl(dr,lt);$t(fr)},5);else if(Nt.offset<0){var ct=N(jt,!0),Gt=ct[ct.length-2],Zt=mt.get(Gt);ne(Gt,!1),$t(Zt)}}ve==null||ve(He)}}function gc(l){Promise.resolve().then(l)}var al="__RC_UTIL_PATH_SPLIT__",jl=function(w){return w.join(al)},Bl=function(w){return w.split(al)},mu="rc-menu-more";function ol(){var l=n.useState({}),w=(0,ie.Z)(l,2),O=w[1],_=(0,n.useRef)(new Map),j=(0,n.useRef)(new Map),G=n.useState([]),N=(0,ie.Z)(G,2),le=N[0],ne=N[1],ve=(0,n.useRef)(0),Le=(0,n.useRef)(!1),ze=function(){Le.current||O({})},Fe=(0,n.useCallback)(function(xt,Pt){var jt=jl(Pt);j.current.set(jt,xt),_.current.set(xt,jt),ve.current+=1;var Nt=ve.current;gc(function(){Nt===ve.current&&ze()})},[]),He=(0,n.useCallback)(function(xt,Pt){var jt=jl(Pt);j.current.delete(jt),_.current.delete(xt)},[]),Te=(0,n.useCallback)(function(xt){ne(xt)},[]),lt=(0,n.useCallback)(function(xt,Pt){var jt=_.current.get(xt)||"",Nt=Bl(jt);return Pt&&le.includes(Nt[0])&&Nt.unshift(mu),Nt},[le]),mt=(0,n.useCallback)(function(xt,Pt){return xt.some(function(jt){var Nt=lt(jt,!0);return Nt.includes(Pt)})},[lt]),At=function(){var Pt=(0,Rn.Z)(_.current.keys());return le.length&&Pt.push(mu),Pt},yt=(0,n.useCallback)(function(xt){var Pt="".concat(_.current.get(xt)).concat(al),jt=new Set;return(0,Rn.Z)(j.current.keys()).forEach(function(Nt){Nt.startsWith(Pt)&&jt.add(j.current.get(Nt))}),jt},[]);return n.useEffect(function(){return function(){Le.current=!0}},[]),{registerPath:Fe,unregisterPath:He,refreshOverflowKeys:Te,isSubPathKey:mt,getKeyPath:lt,getKeys:At,getSubPathKeys:yt}}function hu(l){var w=n.useRef(l);w.current=l;var O=n.useCallback(function(){for(var _,j=arguments.length,G=new Array(j),N=0;N<j;N++)G[N]=arguments[N];return(_=w.current)===null||_===void 0?void 0:_.call.apply(_,[w].concat(G))},[]);return l?O:void 0}var yc=Math.random().toFixed(5).toString().slice(2),gu=0;function bc(l){var w=oe(l,{value:l}),O=(0,ie.Z)(w,2),_=O[0],j=O[1];return n.useEffect(function(){gu+=1;var G="".concat(yc,"-").concat(gu);j("rc-menu-uuid-".concat(G))},[]),_}function ts(l,w){var O=(0,X.Z)({},l);return Array.isArray(w)&&w.forEach(function(_){delete O[_]}),O}function No(l,w,O,_){var j=n.useContext(Vn),G=j.activeKey,N=j.onActive,le=j.onInactive,ne={active:G===l};return w||(ne.onMouseEnter=function(ve){O==null||O({key:l,domEvent:ve}),N(l)},ne.onMouseLeave=function(ve){_==null||_({key:l,domEvent:ve}),le(l)}),ne}function rs(l){var w=n.useContext(Vn),O=w.mode,_=w.rtl,j=w.inlineIndent;if(O!=="inline")return null;var G=l;return _?{paddingRight:G*j}:{paddingLeft:G*j}}function ns(l){var w=l.icon,O=l.props,_=l.children,j;return typeof w=="function"?j=n.createElement(w,(0,X.Z)({},O)):j=w,j||_||null}var yu=["item"];function as(l){var w=l.item,O=(0,Se.Z)(l,yu);return Object.defineProperty(O,"item",{get:function(){return Ho(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),w}}),O}var os=["title","attribute","elementRef"],wc=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],Fl=["active"],zn=function(l){gn(O,l);var w=vn(O);function O(){return(0,Pr.Z)(this,O),w.apply(this,arguments)}return(0,xn.Z)(O,[{key:"render",value:function(){var j=this.props,G=j.title,N=j.attribute,le=j.elementRef,ne=(0,Se.Z)(j,os),ve=ts(ne,["eventKey","popupClassName","popupOffset","onTitleClick"]);return Ho(!N,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(Li.Item,(0,q.Z)({},N,{title:typeof G=="string"?G:void 0},ve,{ref:le}))}}]),O}(n.Component),il=n.forwardRef(function(l,w){var O,_=l.style,j=l.className,G=l.eventKey,N=l.warnKey,le=l.disabled,ne=l.itemIcon,ve=l.children,Le=l.role,ze=l.onMouseEnter,Fe=l.onMouseLeave,He=l.onClick,Te=l.onKeyDown,lt=l.onFocus,mt=(0,Se.Z)(l,wc),At=Xs(G),yt=n.useContext(Vn),xt=yt.prefixCls,Pt=yt.onItemClick,jt=yt.disabled,Nt=yt.overflowDisabled,$t=yt.itemIcon,Xt=yt.selectedKeys,Ht=yt.onActive,Vt=n.useContext(yi),ct=Vt._internalRenderMenuItem,Gt="".concat(xt,"-item"),Zt=n.useRef(),qt=n.useRef(),dr=jt||le,fr=ht(w,qt),Ir=pu(G),hr=function(Mr){return{key:G,keyPath:(0,Rn.Z)(Ir).reverse(),item:Zt.current,domEvent:Mr}},an=ne||$t,On=No(G,dr,ze,Fe),Jr=On.active,ur=(0,Se.Z)(On,Fl),er=Xt.includes(G),Rr=rs(Ir.length),Lr=function(Mr){if(!dr){var Fr=hr(Mr);He==null||He(as(Fr)),Pt(Fr)}},rn=function(Mr){if(Te==null||Te(Mr),Mr.which===De.ENTER){var Fr=hr(Mr);He==null||He(as(Fr)),Pt(Fr)}},on=function(Mr){Ht(G),lt==null||lt(Mr)},sr={};l.role==="option"&&(sr["aria-selected"]=er);var Nr=n.createElement(zn,(0,q.Z)({ref:Zt,elementRef:fr,role:Le===null?"none":Le||"menuitem",tabIndex:le?null:-1,"data-menu-id":Nt&&At?null:At},mt,ur,sr,{component:"li","aria-disabled":le,style:(0,X.Z)((0,X.Z)({},Rr),_),className:u()(Gt,(O={},(0,Q.Z)(O,"".concat(Gt,"-active"),Jr),(0,Q.Z)(O,"".concat(Gt,"-selected"),er),(0,Q.Z)(O,"".concat(Gt,"-disabled"),dr),O),j),onClick:Lr,onKeyDown:rn,onFocus:on}),ve,n.createElement(ns,{props:(0,X.Z)((0,X.Z)({},l),{},{isSelected:er}),icon:an}));return ct&&(Nr=ct(Nr,l,{selected:er})),Nr});function zl(l,w){var O=l.eventKey,_=qu(),j=pu(O);return n.useEffect(function(){if(_)return _.registerPath(O,j),function(){_.unregisterPath(O,j)}},[j]),_?null:n.createElement(il,(0,q.Z)({},l,{ref:w}))}var is=n.forwardRef(zl),ul=["className","children"],Ul=function(w,O){var _=w.className,j=w.children,G=(0,Se.Z)(w,ul),N=n.useContext(Vn),le=N.prefixCls,ne=N.mode,ve=N.rtl;return n.createElement("ul",(0,q.Z)({className:u()(le,ve&&"".concat(le,"-rtl"),"".concat(le,"-sub"),"".concat(le,"-").concat(ne==="inline"?"inline":"vertical"),_),role:"menu"},G,{"data-menu-list":!0,ref:O}),j)},Fi=n.forwardRef(Ul);Fi.displayName="SubMenuList";var Dn=Fi,na=["label","children","key","type"];function Jn(l,w){return xo(l).map(function(O,_){if(n.isValidElement(O)){var j,G,N=O.key,le=(j=(G=O.props)===null||G===void 0?void 0:G.eventKey)!==null&&j!==void 0?j:N,ne=le==null;ne&&(le="tmp_key-".concat([].concat((0,Rn.Z)(w),[_]).join("-")));var ve={key:le,eventKey:le};return n.cloneElement(O,ve)}return O})}function us(l){return(l||[]).map(function(w,O){if(w&&(0,Oe.Z)(w)==="object"){var _=w,j=_.label,G=_.children,N=_.key,le=_.type,ne=(0,Se.Z)(_,na),ve=N!=null?N:"tmp-".concat(O);return G||le==="group"?le==="group"?n.createElement(ss,(0,q.Z)({key:ve},ne,{title:j}),us(G)):n.createElement(ll,(0,q.Z)({key:ve},ne,{title:j}),us(G)):le==="divider"?n.createElement(Wl,(0,q.Z)({key:ve},ne)):n.createElement(is,(0,q.Z)({key:ve},ne),j)}return null}).filter(function(w){return w})}function Ps(l,w,O){var _=l;return w&&(_=us(w)),Jn(_,O)}var po={adjustX:1,adjustY:1},qc={topLeft:{points:["bl","tl"],overflow:po,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:po,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:po,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:po,offset:[4,0]}},ya={topLeft:{points:["bl","tl"],overflow:po,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:po,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:po,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:po,offset:[4,0]}},xc=null;function sl(l,w,O){if(w)return w;if(O)return O[l]||O.other}var $l={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Qo(l){var w=l.prefixCls,O=l.visible,_=l.children,j=l.popup,G=l.popupClassName,N=l.popupOffset,le=l.disabled,ne=l.mode,ve=l.onVisibleChange,Le=n.useContext(Vn),ze=Le.getPopupContainer,Fe=Le.rtl,He=Le.subMenuOpenDelay,Te=Le.subMenuCloseDelay,lt=Le.builtinPlacements,mt=Le.triggerSubMenuAction,At=Le.forceSubMenuRender,yt=Le.rootClassName,xt=Le.motion,Pt=Le.defaultMotions,jt=n.useState(!1),Nt=(0,ie.Z)(jt,2),$t=Nt[0],Xt=Nt[1],Ht=Fe?(0,X.Z)((0,X.Z)({},ya),lt):(0,X.Z)((0,X.Z)({},qc),lt),Vt=$l[ne],ct=sl(ne,xt,Pt),Gt=n.useRef(ct);ne!=="inline"&&(Gt.current=ct);var Zt=(0,X.Z)((0,X.Z)({},Gt.current),{},{leavedClassName:"".concat(w,"-hidden"),removeOnLeave:!1,motionAppear:!0}),qt=n.useRef();return n.useEffect(function(){return qt.current=dt(function(){Xt(O)}),function(){dt.cancel(qt.current)}},[O]),n.createElement(gi,{prefixCls:w,popupClassName:u()("".concat(w,"-popup"),(0,Q.Z)({},"".concat(w,"-rtl"),Fe),G,yt),stretch:ne==="horizontal"?"minWidth":null,getPopupContainer:ze,builtinPlacements:Ht,popupPlacement:Vt,popupVisible:$t,popup:j,popupAlign:N&&{offset:N},action:le?[]:[mt],mouseEnterDelay:He,mouseLeaveDelay:Te,onPopupVisibleChange:ve,forceRender:At,popupMotion:Zt},_)}function vo(l){var w=l.id,O=l.open,_=l.keyPath,j=l.children,G="inline",N=n.useContext(Vn),le=N.prefixCls,ne=N.forceSubMenuRender,ve=N.motion,Le=N.defaultMotions,ze=N.mode,Fe=n.useRef(!1);Fe.current=ze===G;var He=n.useState(!Fe.current),Te=(0,ie.Z)(He,2),lt=Te[0],mt=Te[1],At=Fe.current?O:!1;n.useEffect(function(){Fe.current&&mt(!1)},[ze]);var yt=(0,X.Z)({},sl(G,ve,Le));_.length>1&&(yt.motionAppear=!1);var xt=yt.onVisibleChanged;return yt.onVisibleChanged=function(Pt){return!Fe.current&&!Pt&&mt(!0),xt==null?void 0:xt(Pt)},lt?null:n.createElement(Bi,{mode:G,locked:!Fe.current},n.createElement(ka,(0,q.Z)({visible:At},yt,{forceRender:ne,removeOnLeave:!1,leavedClassName:"".concat(le,"-hidden")}),function(Pt){var jt=Pt.className,Nt=Pt.style;return n.createElement(Dn,{id:w,className:jt,style:Nt},j)}))}var Rs=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],Hl=["active"],Zl=function(w){var O,_=w.style,j=w.className,G=w.title,N=w.eventKey,le=w.warnKey,ne=w.disabled,ve=w.internalPopupClose,Le=w.children,ze=w.itemIcon,Fe=w.expandIcon,He=w.popupClassName,Te=w.popupOffset,lt=w.onClick,mt=w.onMouseEnter,At=w.onMouseLeave,yt=w.onTitleClick,xt=w.onTitleMouseEnter,Pt=w.onTitleMouseLeave,jt=(0,Se.Z)(w,Rs),Nt=Xs(N),$t=n.useContext(Vn),Xt=$t.prefixCls,Ht=$t.mode,Vt=$t.openKeys,ct=$t.disabled,Gt=$t.overflowDisabled,Zt=$t.activeKey,qt=$t.selectedKeys,dr=$t.itemIcon,fr=$t.expandIcon,Ir=$t.onItemClick,hr=$t.onOpenChange,an=$t.onActive,On=n.useContext(yi),Jr=On._internalRenderSubMenuItem,ur=n.useContext(vu),er=ur.isSubPathKey,Rr=pu(),Lr="".concat(Xt,"-submenu"),rn=ct||ne,on=n.useRef(),sr=n.useRef(),Nr=ze||dr,Gr=Fe||fr,Mr=Vt.includes(N),Fr=!Gt&&Mr,kr=er(qt,N),zr=No(N,rn,xt,Pt),pn=zr.active,br=(0,Se.Z)(zr,Hl),Ur=n.useState(!1),Hr=(0,ie.Z)(Ur,2),In=Hr[0],un=Hr[1],Qa=function(bn){rn||un(bn)},ba=function(bn){Qa(!0),mt==null||mt({key:N,domEvent:bn})},An=function(bn){Qa(!1),At==null||At({key:N,domEvent:bn})},Ja=n.useMemo(function(){return pn||(Ht!=="inline"?In||er([Zt],N):!1)},[Ht,pn,Zt,In,N,er]),qa=rs(Rr.length),qr=function(bn){rn||(yt==null||yt({key:N,domEvent:bn}),Ht==="inline"&&hr(N,!Mr))},Do=hu(function(kn){lt==null||lt(as(kn)),Ir(kn)}),Ln=function(bn){Ht!=="inline"&&hr(N,bn)},jn=function(){an(N)},oa=Nt&&"".concat(Nt,"-popup"),Pa=n.createElement("div",(0,q.Z)({role:"menuitem",style:qa,className:"".concat(Lr,"-title"),tabIndex:rn?null:-1,ref:on,title:typeof G=="string"?G:null,"data-menu-id":Gt&&Nt?null:Nt,"aria-expanded":Fr,"aria-haspopup":!0,"aria-controls":oa,"aria-disabled":rn,onClick:qr,onFocus:jn},br),G,n.createElement(ns,{icon:Ht!=="horizontal"?Gr:null,props:(0,X.Z)((0,X.Z)({},w),{},{isOpen:Fr,isSubMenu:!0})},n.createElement("i",{className:"".concat(Lr,"-arrow")}))),eo=n.useRef(Ht);if(Ht!=="inline"&&Rr.length>1?eo.current="vertical":eo.current=Ht,!Gt){var Un=eo.current;Pa=n.createElement(Qo,{mode:Un,prefixCls:Lr,visible:!ve&&Fr&&Ht!=="inline",popupClassName:He,popupOffset:Te,popup:n.createElement(Bi,{mode:Un==="horizontal"?"vertical":Un},n.createElement(Dn,{id:oa,ref:sr},Le)),disabled:rn,onVisibleChange:Ln},Pa)}var yn=n.createElement(Li.Item,(0,q.Z)({role:"none"},jt,{component:"li",style:_,className:u()(Lr,"".concat(Lr,"-").concat(Ht),j,(O={},(0,Q.Z)(O,"".concat(Lr,"-open"),Fr),(0,Q.Z)(O,"".concat(Lr,"-active"),Ja),(0,Q.Z)(O,"".concat(Lr,"-selected"),kr),(0,Q.Z)(O,"".concat(Lr,"-disabled"),rn),O)),onMouseEnter:ba,onMouseLeave:An}),Pa,!Gt&&n.createElement(vo,{id:oa,open:Fr,keyPath:Rr},Le));return Jr&&(yn=Jr(yn,w,{selected:kr,active:Ja,open:Fr,disabled:rn})),n.createElement(Bi,{onItemClick:Do,mode:Ht==="horizontal"?"vertical":Ht,itemIcon:Nr,expandIcon:Gr},yn)};function ll(l){var w=l.eventKey,O=l.children,_=pu(w),j=Jn(O,_),G=qu();n.useEffect(function(){if(G)return G.registerPath(w,_),function(){G.unregisterPath(w,_)}},[_]);var N;return G?N=j:N=n.createElement(Zl,l,j),n.createElement(qs.Provider,{value:_},N)}var Sc=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem"],bu=[],Ec=n.forwardRef(function(l,w){var O,_,j=l,G=j.prefixCls,N=G===void 0?"rc-menu":G,le=j.rootClassName,ne=j.style,ve=j.className,Le=j.tabIndex,ze=Le===void 0?0:Le,Fe=j.items,He=j.children,Te=j.direction,lt=j.id,mt=j.mode,At=mt===void 0?"vertical":mt,yt=j.inlineCollapsed,xt=j.disabled,Pt=j.disabledOverflow,jt=j.subMenuOpenDelay,Nt=jt===void 0?.1:jt,$t=j.subMenuCloseDelay,Xt=$t===void 0?.1:$t,Ht=j.forceSubMenuRender,Vt=j.defaultOpenKeys,ct=j.openKeys,Gt=j.activeKey,Zt=j.defaultActiveFirst,qt=j.selectable,dr=qt===void 0?!0:qt,fr=j.multiple,Ir=fr===void 0?!1:fr,hr=j.defaultSelectedKeys,an=j.selectedKeys,On=j.onSelect,Jr=j.onDeselect,ur=j.inlineIndent,er=ur===void 0?24:ur,Rr=j.motion,Lr=j.defaultMotions,rn=j.triggerSubMenuAction,on=rn===void 0?"hover":rn,sr=j.builtinPlacements,Nr=j.itemIcon,Gr=j.expandIcon,Mr=j.overflowedIndicator,Fr=Mr===void 0?"...":Mr,kr=j.overflowedIndicatorPopupClassName,zr=j.getPopupContainer,pn=j.onClick,br=j.onOpenChange,Ur=j.onKeyDown,Hr=j.openAnimation,In=j.openTransitionName,un=j._internalRenderMenuItem,Qa=j._internalRenderSubMenuItem,ba=(0,Se.Z)(j,Sc),An=n.useMemo(function(){return Ps(He,Fe,bu)},[He,Fe]),Ja=n.useState(!1),qa=(0,ie.Z)(Ja,2),qr=qa[0],Do=qa[1],Ln=n.useRef(),jn=bc(lt),oa=Te==="rtl",Pa=oe(Vt,{value:ct,postState:function(nn){return nn||bu}}),eo=(0,ie.Z)(Pa,2),Un=eo[0],yn=eo[1],kn=function(nn){var Cn=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;function fa(){yn(nn),br==null||br(nn)}Cn?(0,he.flushSync)(fa):fa()},bn=n.useState(Un),Yn=(0,ie.Z)(bn,2),$i=Yn[0],bi=Yn[1],Jo=n.useRef(!1),wi=n.useMemo(function(){return(At==="inline"||At==="vertical")&&yt?["vertical",yt]:[At,!1]},[At,yt]),Fa=(0,ie.Z)(wi,2),za=Fa[0],Lo=Fa[1],Ra=za==="inline",jo=n.useState(za),Er=(0,ie.Z)(jo,2),jr=Er[0],Bn=Er[1],wa=n.useState(Lo),Ua=(0,ie.Z)(wa,2),ic=Ua[0],uc=Ua[1];n.useEffect(function(){Bn(za),uc(Lo),Jo.current&&(Ra?yn($i):kn(bu))},[za,Lo]);var Bo=n.useState(0),ls=(0,ie.Z)(Bo,2),to=ls[0],ml=ls[1],$a=to>=An.length-1||jr!=="horizontal"||Pt;n.useEffect(function(){Ra&&bi(Un)},[Un]),n.useEffect(function(){return Jo.current=!0,function(){Jo.current=!1}},[]);var mo=ol(),wn=mo.registerPath,Ns=mo.unregisterPath,Ds=mo.refreshOverflowKeys,en=mo.isSubPathKey,Xr=mo.getKeyPath,Xn=mo.getKeys,la=mo.getSubPathKeys,qo=n.useMemo(function(){return{registerPath:wn,unregisterPath:Ns}},[wn,Ns]),$n=n.useMemo(function(){return{isSubPathKey:en}},[en]);n.useEffect(function(){Ds($a?bu:An.slice(to+1).map(function(Fn){return Fn.key}))},[to,$a]);var Ls=oe(Gt||Zt&&((O=An[0])===null||O===void 0?void 0:O.key),{value:Gt}),Kc=(0,ie.Z)(Ls,2),ho=Kc[0],cs=Kc[1],Su=hu(function(Fn){cs(Fn)}),hl=hu(function(){cs(void 0)});(0,n.useImperativeHandle)(w,function(){return{list:Ln.current,focus:function(nn){var Cn,fa=ho!=null?ho:(Cn=An.find(function(sd){return!sd.props.disabled}))===null||Cn===void 0?void 0:Cn.key;if(fa){var Ha,Eu,Hi;(Ha=Ln.current)===null||Ha===void 0||(Eu=Ha.querySelector("li[data-menu-id='".concat(ji(jn,fa),"']")))===null||Eu===void 0||(Hi=Eu.focus)===null||Hi===void 0||Hi.call(Eu,nn)}}}});var sc=oe(hr||[],{value:an,postState:function(nn){return Array.isArray(nn)?nn:nn==null?bu:[nn]}}),gl=(0,ie.Z)(sc,2),yl=gl[0],lc=gl[1],id=function(nn){if(dr){var Cn=nn.key,fa=yl.includes(Cn),Ha;Ir?fa?Ha=yl.filter(function(Hi){return Hi!==Cn}):Ha=[].concat((0,Rn.Z)(yl),[Cn]):Ha=[Cn],lc(Ha);var Eu=(0,X.Z)((0,X.Z)({},nn),{},{selectedKeys:Ha});fa?Jr==null||Jr(Eu):On==null||On(Eu)}!Ir&&Un.length&&jr!=="inline"&&kn(bu)},Vc=hu(function(Fn){pn==null||pn(as(Fn)),id(Fn)}),cc=hu(function(Fn,nn){var Cn=Un.filter(function(Ha){return Ha!==Fn});if(nn)Cn.push(Fn);else if(jr!=="inline"){var fa=la(Fn);Cn=Cn.filter(function(Ha){return!fa.has(Ha)})}ki(Un,Cn,!0)||kn(Cn,!0)}),bl=hu(zr),wl=function(nn,Cn){var fa=Cn!=null?Cn:!Un.includes(nn);cc(nn,fa)},Yc=nl(jr,ho,oa,jn,Ln,Xn,Xr,cs,wl,Ur);n.useEffect(function(){Do(!0)},[]);var dc=n.useMemo(function(){return{_internalRenderMenuItem:un,_internalRenderSubMenuItem:Qa}},[un,Qa]),ud=jr!=="horizontal"||Pt?An:An.map(function(Fn,nn){return n.createElement(Bi,{key:Fn.key,overflowDisabled:nn>to},Fn)}),Xc=n.createElement(Li,(0,q.Z)({id:lt,ref:Ln,prefixCls:"".concat(N,"-overflow"),component:"ul",itemComponent:is,className:u()(N,"".concat(N,"-root"),"".concat(N,"-").concat(jr),ve,(_={},(0,Q.Z)(_,"".concat(N,"-inline-collapsed"),ic),(0,Q.Z)(_,"".concat(N,"-rtl"),oa),_),le),dir:Te,style:ne,role:"menu",tabIndex:ze,data:ud,renderRawItem:function(nn){return nn},renderRawRest:function(nn){var Cn=nn.length,fa=Cn?An.slice(-Cn):null;return n.createElement(ll,{eventKey:mu,title:Fr,disabled:$a,internalPopupClose:Cn===0,popupClassName:kr},fa)},maxCount:jr!=="horizontal"||Pt?Li.INVALIDATE:Li.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(nn){ml(nn)},onKeyDown:Yc},ba));return n.createElement(yi.Provider,{value:dc},n.createElement(Nl.Provider,{value:jn},n.createElement(Bi,{prefixCls:N,rootClassName:le,mode:jr,openKeys:Un,rtl:oa,disabled:xt,motion:qr?Rr:null,defaultMotions:qr?Lr:null,activeKey:ho,onActive:Su,onInactive:hl,selectedKeys:yl,inlineIndent:er,subMenuOpenDelay:Nt,subMenuCloseDelay:Xt,forceSubMenuRender:Ht,builtinPlacements:sr,triggerSubMenuAction:on,getPopupContainer:bl,itemIcon:Nr,expandIcon:Gr,onItemClick:Vc,onOpenChange:cc},n.createElement(vu.Provider,{value:$n},Xc),n.createElement("div",{style:{display:"none"},"aria-hidden":!0},n.createElement(Js.Provider,{value:qo},An)))))}),Tc=Ec,Oc=["className","title","eventKey","children"],Ic=["children"],Ac=function(w){var O=w.className,_=w.title,j=w.eventKey,G=w.children,N=(0,Se.Z)(w,Oc),le=n.useContext(Vn),ne=le.prefixCls,ve="".concat(ne,"-item-group");return n.createElement("li",(0,q.Z)({role:"presentation"},N,{onClick:function(ze){return ze.stopPropagation()},className:u()(ve,O)}),n.createElement("div",{role:"presentation",className:"".concat(ve,"-title"),title:typeof _=="string"?_:void 0},_),n.createElement("ul",{role:"group",className:"".concat(ve,"-list")},G))};function ss(l){var w=l.children,O=(0,Se.Z)(l,Ic),_=pu(O.eventKey),j=Jn(w,_),G=qu();return G?j:n.createElement(Ac,ts(O,["warnKey"]),j)}function Wl(l){var w=l.className,O=l.style,_=n.useContext(Vn),j=_.prefixCls,G=qu();return G?null:n.createElement("li",{className:u()("".concat(j,"-item-divider"),w),style:O})}var zi=Tc;zi.Item=is,zi.SubMenu=ll,zi.ItemGroup=ss,zi.Divider=Wl;var cl=zi;function Cc(l,w){var O=l.prefixCls,_=l.id,j=l.tabs,G=l.locale,N=l.mobile,le=l.moreIcon,ne=le===void 0?"More":le,ve=l.moreTransitionName,Le=l.style,ze=l.className,Fe=l.editable,He=l.tabBarGutter,Te=l.rtl,lt=l.removeAriaLabel,mt=l.onTabClick,At=l.getPopupContainer,yt=l.popupClassName,xt=(0,n.useState)(!1),Pt=(0,ie.Z)(xt,2),jt=Pt[0],Nt=Pt[1],$t=(0,n.useState)(null),Xt=(0,ie.Z)($t,2),Ht=Xt[0],Vt=Xt[1],ct="".concat(_,"-more-popup"),Gt="".concat(O,"-dropdown"),Zt=Ht!==null?"".concat(ct,"-").concat(Ht):null,qt=G==null?void 0:G.dropdownAriaLabel;function dr(ur,er){ur.preventDefault(),ur.stopPropagation(),Fe.onEdit("remove",{key:er,event:ur})}var fr=n.createElement(cl,{onClick:function(er){var Rr=er.key,Lr=er.domEvent;mt(Rr,Lr),Nt(!1)},prefixCls:"".concat(Gt,"-menu"),id:ct,tabIndex:-1,role:"listbox","aria-activedescendant":Zt,selectedKeys:[Ht],"aria-label":qt!==void 0?qt:"expanded dropdown"},j.map(function(ur){var er=Fe&&ur.closable!==!1&&!ur.disabled;return n.createElement(is,{key:ur.key,id:"".concat(ct,"-").concat(ur.key),role:"option","aria-controls":_&&"".concat(_,"-panel-").concat(ur.key),disabled:ur.disabled},n.createElement("span",null,ur.label),er&&n.createElement("button",{type:"button","aria-label":lt||"remove",tabIndex:0,className:"".concat(Gt,"-menu-item-remove"),onClick:function(Lr){Lr.stopPropagation(),dr(Lr,ur.key)}},ur.closeIcon||Fe.removeIcon||"\xD7"))}));function Ir(ur){for(var er=j.filter(function(sr){return!sr.disabled}),Rr=er.findIndex(function(sr){return sr.key===Ht})||0,Lr=er.length,rn=0;rn<Lr;rn+=1){Rr=(Rr+ur+Lr)%Lr;var on=er[Rr];if(!on.disabled){Vt(on.key);return}}}function hr(ur){var er=ur.which;if(!jt){[De.DOWN,De.SPACE,De.ENTER].includes(er)&&(Nt(!0),ur.preventDefault());return}switch(er){case De.UP:Ir(-1),ur.preventDefault();break;case De.DOWN:Ir(1),ur.preventDefault();break;case De.ESC:Nt(!1);break;case De.SPACE:case De.ENTER:Ht!==null&&mt(Ht,ur);break}}(0,n.useEffect)(function(){var ur=document.getElementById(Zt);ur&&ur.scrollIntoView&&ur.scrollIntoView(!1)},[Ht]),(0,n.useEffect)(function(){jt||Vt(null)},[jt]);var an=(0,Q.Z)({},Te?"marginRight":"marginLeft",He);j.length||(an.visibility="hidden",an.order=1);var On=u()((0,Q.Z)({},"".concat(Gt,"-rtl"),Te)),Jr=N?null:n.createElement(Nn,{prefixCls:Gt,overlay:fr,trigger:["hover"],visible:j.length?jt:!1,transitionName:ve,onVisibleChange:Nt,overlayClassName:u()(On,yt),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:At},n.createElement("button",{type:"button",className:"".concat(O,"-nav-more"),style:an,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":ct,id:"".concat(_,"-more"),"aria-expanded":jt,onKeyDown:hr},ne));return n.createElement("div",{className:u()("".concat(O,"-nav-operations"),ze),style:Le,ref:w},Jr,n.createElement(wt,{prefixCls:O,locale:G,editable:Fe}))}var Gl=n.memo(n.forwardRef(Cc),function(l,w){return w.tabMoving});function Pc(l){var w,O=l.prefixCls,_=l.id,j=l.active,G=l.tab,N=G.key,le=G.label,ne=G.disabled,ve=G.closeIcon,Le=l.closable,ze=l.renderWrapper,Fe=l.removeAriaLabel,He=l.editable,Te=l.onClick,lt=l.onFocus,mt=l.style,At="".concat(O,"-tab"),yt=He&&Le!==!1&&!ne;function xt(Nt){ne||Te(Nt)}function Pt(Nt){Nt.preventDefault(),Nt.stopPropagation(),He.onEdit("remove",{key:N,event:Nt})}var jt=n.createElement("div",{key:N,"data-node-key":Ye(N),className:u()(At,(w={},(0,Q.Z)(w,"".concat(At,"-with-remove"),yt),(0,Q.Z)(w,"".concat(At,"-active"),j),(0,Q.Z)(w,"".concat(At,"-disabled"),ne),w)),style:mt,onClick:xt},n.createElement("div",{role:"tab","aria-selected":j,id:_&&"".concat(_,"-tab-").concat(N),className:"".concat(At,"-btn"),"aria-controls":_&&"".concat(_,"-panel-").concat(N),"aria-disabled":ne,tabIndex:ne?null:0,onClick:function($t){$t.stopPropagation(),xt($t)},onKeyDown:function($t){[De.SPACE,De.ENTER].includes($t.which)&&($t.preventDefault(),xt($t))},onFocus:lt},le),yt&&n.createElement("button",{type:"button","aria-label":Fe||"remove",tabIndex:0,className:"".concat(At,"-remove"),onClick:function($t){$t.stopPropagation(),Pt($t)}},ve||He.removeIcon||"\xD7"));return ze?ze(jt):jt}var Rc=Pc,wu=function(w){var O=w.current||{},_=O.offsetWidth,j=_===void 0?0:_,G=O.offsetHeight,N=G===void 0?0:G;return[j,N]},Ms=function(w,O){return w[O?0:1]};function Kl(l,w){var O,_=n.useContext(bo),j=_.prefixCls,G=_.tabs,N=l.className,le=l.style,ne=l.id,ve=l.animated,Le=l.activeKey,ze=l.rtl,Fe=l.extra,He=l.editable,Te=l.locale,lt=l.tabPosition,mt=l.tabBarGutter,At=l.children,yt=l.onTabClick,xt=l.onTabScroll,Pt=(0,n.useRef)(),jt=(0,n.useRef)(),Nt=(0,n.useRef)(),$t=(0,n.useRef)(),Xt=(0,n.useRef)(),Ht=(0,n.useRef)(),Vt=(0,n.useRef)(),ct=lt==="top"||lt==="bottom",Gt=oo(0,function(en,Xr){ct&&xt&&xt({direction:en>Xr?"left":"right"})}),Zt=(0,ie.Z)(Gt,2),qt=Zt[0],dr=Zt[1],fr=oo(0,function(en,Xr){!ct&&xt&&xt({direction:en>Xr?"top":"bottom"})}),Ir=(0,ie.Z)(fr,2),hr=Ir[0],an=Ir[1],On=(0,n.useState)([0,0]),Jr=(0,ie.Z)(On,2),ur=Jr[0],er=Jr[1],Rr=(0,n.useState)([0,0]),Lr=(0,ie.Z)(Rr,2),rn=Lr[0],on=Lr[1],sr=(0,n.useState)([0,0]),Nr=(0,ie.Z)(sr,2),Gr=Nr[0],Mr=Nr[1],Fr=(0,n.useState)([0,0]),kr=(0,ie.Z)(Fr,2),zr=kr[0],pn=kr[1],br=Bs(new Map),Ur=(0,ie.Z)(br,2),Hr=Ur[0],In=Ur[1],un=Ki(G,Hr,rn[0]),Qa=Ms(ur,ct),ba=Ms(rn,ct),An=Ms(Gr,ct),Ja=Ms(zr,ct),qa=Qa<ba+An,qr=qa?Qa-Ja:Qa-An,Do="".concat(j,"-nav-operations-hidden"),Ln=0,jn=0;ct&&ze?(Ln=0,jn=Math.max(0,ba-qr)):(Ln=Math.min(0,qr-ba),jn=0);function oa(en){return en<Ln?Ln:en>jn?jn:en}var Pa=(0,n.useRef)(),eo=(0,n.useState)(),Un=(0,ie.Z)(eo,2),yn=Un[0],kn=Un[1];function bn(){kn(Date.now())}function Yn(){window.clearTimeout(Pa.current)}Yi($t,function(en,Xr){function Xn(la,qo){la(function($n){var Ls=oa($n+qo);return Ls})}return qa?(ct?Xn(dr,en):Xn(an,Xr),Yn(),bn(),!0):!1}),(0,n.useEffect)(function(){return Yn(),yn&&(Pa.current=window.setTimeout(function(){kn(0)},100)),Yn},[yn]);var $i=J(un,qr,ct?qt:hr,ba,An,Ja,(0,X.Z)((0,X.Z)({},l),{},{tabs:G})),bi=(0,ie.Z)($i,2),Jo=bi[0],wi=bi[1],Fa=ue(function(){var en=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Le,Xr=un.get(en)||{width:0,height:0,left:0,right:0,top:0};if(ct){var Xn=qt;ze?Xr.right<qt?Xn=Xr.right:Xr.right+Xr.width>qt+qr&&(Xn=Xr.right+Xr.width-qr):Xr.left<-qt?Xn=-Xr.left:Xr.left+Xr.width>-qt+qr&&(Xn=-(Xr.left+Xr.width-qr)),an(0),dr(oa(Xn))}else{var la=hr;Xr.top<-hr?la=-Xr.top:Xr.top+Xr.height>-hr+qr&&(la=-(Xr.top+Xr.height-qr)),dr(0),an(oa(la))}}),za={};lt==="top"||lt==="bottom"?za[ze?"marginRight":"marginLeft"]=mt:za.marginTop=mt;var Lo=G.map(function(en,Xr){var Xn=en.key;return n.createElement(Rc,{id:ne,prefixCls:j,key:Xn,tab:en,style:Xr===0?void 0:za,closable:en.closable,editable:He,active:Xn===Le,renderWrapper:At,removeAriaLabel:Te==null?void 0:Te.removeAriaLabel,onClick:function(qo){yt(Xn,qo)},onFocus:function(){Fa(Xn),bn(),$t.current&&(ze||($t.current.scrollLeft=0),$t.current.scrollTop=0)}})}),Ra=function(){return In(function(){var Xr=new Map;return G.forEach(function(Xn){var la,qo=Xn.key,$n=(la=Xt.current)===null||la===void 0?void 0:la.querySelector('[data-node-key="'.concat(Ye(qo),'"]'));$n&&Xr.set(qo,{width:$n.offsetWidth,height:$n.offsetHeight,left:$n.offsetLeft,top:$n.offsetTop})}),Xr})};(0,n.useEffect)(function(){Ra()},[G.map(function(en){return en.key}).join("_")]);var jo=ii(function(){var en=wu(Pt),Xr=wu(jt),Xn=wu(Nt);er([en[0]-Xr[0]-Xn[0],en[1]-Xr[1]-Xn[1]]);var la=wu(Vt);Mr(la);var qo=wu(Ht);pn(qo);var $n=wu(Xt);on([$n[0]-la[0],$n[1]-la[1]]),Ra()}),Er=G.slice(0,Jo),jr=G.slice(wi+1),Bn=[].concat((0,Rn.Z)(Er),(0,Rn.Z)(jr)),wa=(0,n.useState)(),Ua=(0,ie.Z)(wa,2),ic=Ua[0],uc=Ua[1],Bo=un.get(Le),ls=(0,n.useRef)();function to(){dt.cancel(ls.current)}(0,n.useEffect)(function(){var en={};return Bo&&(ct?(ze?en.right=Bo.right:en.left=Bo.left,en.width=Bo.width):(en.top=Bo.top,en.height=Bo.height)),to(),ls.current=dt(function(){uc(en)}),to},[Bo,ct,ze]),(0,n.useEffect)(function(){Fa()},[Le,Ln,jn,K(Bo),K(un),ct]),(0,n.useEffect)(function(){jo()},[ze]);var ml=!!Bn.length,$a="".concat(j,"-nav-wrap"),mo,wn,Ns,Ds;return ct?ze?(wn=qt>0,mo=qt!==jn):(mo=qt<0,wn=qt!==Ln):(Ns=hr<0,Ds=hr!==Ln),n.createElement(Qn,{onResize:jo},n.createElement("div",{ref:ht(w,Pt),role:"tablist",className:u()("".concat(j,"-nav"),N),style:le,onKeyDown:function(){bn()}},n.createElement(zt,{ref:jt,position:"left",extra:Fe,prefixCls:j}),n.createElement("div",{className:u()($a,(O={},(0,Q.Z)(O,"".concat($a,"-ping-left"),mo),(0,Q.Z)(O,"".concat($a,"-ping-right"),wn),(0,Q.Z)(O,"".concat($a,"-ping-top"),Ns),(0,Q.Z)(O,"".concat($a,"-ping-bottom"),Ds),O)),ref:$t},n.createElement(Qn,{onResize:jo},n.createElement("div",{ref:Xt,className:"".concat(j,"-nav-list"),style:{transform:"translate(".concat(qt,"px, ").concat(hr,"px)"),transition:yn?"none":void 0}},Lo,n.createElement(wt,{ref:Vt,prefixCls:j,locale:Te,editable:He,style:(0,X.Z)((0,X.Z)({},Lo.length===0?void 0:za),{},{visibility:ml?"hidden":null})}),n.createElement("div",{className:u()("".concat(j,"-ink-bar"),(0,Q.Z)({},"".concat(j,"-ink-bar-animated"),ve.inkBar)),style:ic})))),n.createElement(Gl,(0,q.Z)({},l,{removeAriaLabel:Te==null?void 0:Te.removeAriaLabel,ref:Ht,prefixCls:j,tabs:Bn,className:!ml&&Do,tabMoving:!!yn})),n.createElement(zt,{ref:Nt,position:"right",extra:Fe,prefixCls:j})))}var Vl=n.forwardRef(Kl),Mc=["renderTabBar"],kc=["label","key"];function ed(l){var w=l.renderTabBar,O=(0,Se.Z)(l,Mc),_=n.useContext(bo),j=_.tabs;if(w){var G=(0,X.Z)((0,X.Z)({},O),{},{panes:j.map(function(N){var le=N.label,ne=N.key,ve=(0,Se.Z)(N,kc);return n.createElement(wo,(0,q.Z)({tab:le,key:ne,tabKey:ne},ve))})});return w(G,Vl)}return n.createElement(Vl,O)}function _c(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{inkBar:!0,tabPane:!1},w;return l===!1?w={inkBar:!1,tabPane:!1}:l===!0?w={inkBar:!0,tabPane:!1}:w=(0,X.Z)({inkBar:!0},(0,Oe.Z)(l)==="object"?l:{}),w.tabPaneMotion&&w.tabPane===void 0&&(w.tabPane=!0),!w.tabPaneMotion&&w.tabPane&&(w.tabPane=!1),w}var td=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],Nc=0;function Dc(l,w){var O,_=l.id,j=l.prefixCls,G=j===void 0?"rc-tabs":j,N=l.className,le=l.items,ne=l.direction,ve=l.activeKey,Le=l.defaultActiveKey,ze=l.editable,Fe=l.animated,He=l.tabPosition,Te=He===void 0?"top":He,lt=l.tabBarGutter,mt=l.tabBarStyle,At=l.tabBarExtraContent,yt=l.locale,xt=l.moreIcon,Pt=l.moreTransitionName,jt=l.destroyInactiveTabPane,Nt=l.renderTabBar,$t=l.onChange,Xt=l.onTabClick,Ht=l.onTabScroll,Vt=l.getPopupContainer,ct=l.popupClassName,Gt=(0,Se.Z)(l,td),Zt=n.useMemo(function(){return(le||[]).filter(function(br){return br&&(0,Oe.Z)(br)==="object"&&"key"in br})},[le]),qt=ne==="rtl",dr=_c(Fe),fr=(0,n.useState)(!1),Ir=(0,ie.Z)(fr,2),hr=Ir[0],an=Ir[1];(0,n.useEffect)(function(){an(Be())},[]);var On=oe(function(){var br;return(br=Zt[0])===null||br===void 0?void 0:br.key},{value:ve,defaultValue:Le}),Jr=(0,ie.Z)(On,2),ur=Jr[0],er=Jr[1],Rr=(0,n.useState)(function(){return Zt.findIndex(function(br){return br.key===ur})}),Lr=(0,ie.Z)(Rr,2),rn=Lr[0],on=Lr[1];(0,n.useEffect)(function(){var br=Zt.findIndex(function(Hr){return Hr.key===ur});if(br===-1){var Ur;br=Math.max(0,Math.min(rn,Zt.length-1)),er((Ur=Zt[br])===null||Ur===void 0?void 0:Ur.key)}on(br)},[Zt.map(function(br){return br.key}).join("_"),ur,rn]);var sr=oe(null,{value:_}),Nr=(0,ie.Z)(sr,2),Gr=Nr[0],Mr=Nr[1];(0,n.useEffect)(function(){_||(Mr("rc-tabs-".concat(Nc)),Nc+=1)},[]);function Fr(br,Ur){Xt==null||Xt(br,Ur);var Hr=br!==ur;er(br),Hr&&($t==null||$t(br))}var kr={id:Gr,activeKey:ur,animated:dr,tabPosition:Te,rtl:qt,mobile:hr},zr,pn=(0,X.Z)((0,X.Z)({},kr),{},{editable:ze,locale:yt,moreIcon:xt,moreTransitionName:Pt,tabBarGutter:lt,onTabClick:Fr,onTabScroll:Ht,extra:At,style:mt,panes:null,getPopupContainer:Vt,popupClassName:ct});return n.createElement(bo.Provider,{value:{tabs:Zt,prefixCls:G}},n.createElement("div",(0,q.Z)({ref:w,id:_,className:u()(G,"".concat(G,"-").concat(Te),(O={},(0,Q.Z)(O,"".concat(G,"-mobile"),hr),(0,Q.Z)(O,"".concat(G,"-editable"),ze),(0,Q.Z)(O,"".concat(G,"-rtl"),qt),O),N)},Gt),zr,n.createElement(ed,(0,q.Z)({},pn,{renderTabBar:Nt})),n.createElement(Ou,(0,q.Z)({destroyInactiveTabPane:jt},kr,{animated:dr}))))}var Lc=n.forwardRef(Dc),jc=Lc,dl=jc,rd=e(26575),Bc=e.n(rd),nd=e(23187),xu=e.n(nd),Yl=e(75553),fl=e.n(Yl),ad=e(41049),Xl=e.n(ad),Fc=e(5026),Ql=e.n(Fc),zc=e(83357),Jl=e.n(zc),pl=e(80976),aa={};aa.styleTagTransform=Jl(),aa.setAttributes=Xl(),aa.insert=fl().bind(null,"head"),aa.domAPI=xu(),aa.insertStyleElement=Ql();var Ba=Bc()(pl.Z,aa),od=pl.Z&&pl.Z.locals?pl.Z.locals:void 0;function ks(l,w){return Hc(l)||ec(l,w)||$c(l,w)||Uc()}function Uc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $c(l,w){if(l){if(typeof l=="string")return ql(l,w);var O=Object.prototype.toString.call(l).slice(8,-1);if(O==="Object"&&l.constructor&&(O=l.constructor.name),O==="Map"||O==="Set")return Array.from(l);if(O==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O))return ql(l,w)}}function ql(l,w){(w==null||w>l.length)&&(w=l.length);for(var O=0,_=new Array(w);O<w;O++)_[O]=l[O];return _}function ec(l,w){var O=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(O!=null){var _=[],j=!0,G=!1,N,le;try{for(O=O.call(l);!(j=(N=O.next()).done)&&(_.push(N.value),!(w&&_.length===w));j=!0);}catch(ne){G=!0,le=ne}finally{try{!j&&O.return!=null&&O.return()}finally{if(G)throw le}}return _}}function Hc(l){if(Array.isArray(l))return l}var tc=function(){return n.createElement("svg",{viewBox:"0 0 200 117"},n.createElement("path",{d:"M59.688 2.578c-3.438-3.437-8.438-3.437-11.563 0L3.75 48.516c-5 5.937-5 14.062 0 19.062l44.063 45.938c1.562 1.562 4.062 2.5 5.937 2.5s4.063-.938 5.938-2.5c3.437-3.438 3.437-8.438 0-11.563l-42.5-43.437 42.5-44.063c3.437-3.437 3.437-8.437 0-11.875Zm135.937 45.938L151.25 2.578c-3.438-3.437-8.438-3.437-11.563 0-3.125 3.438-3.437 8.438 0 11.563l42.5 44.375-42.5 44.062c-3.437 3.438-3.437 8.438 0 11.563 1.563 1.562 3.438 2.5 5.938 2.5 2.5 0 4.063-.938 5.938-2.5l44.062-45.938c5.625-5.625 5.625-13.75 0-19.687Zm-75.938-45c-4.062-1.563-9.062.937-10.937 5l-34.063 95c-1.562 4.062.938 9.062 5 10.937.938 0 1.563.938 2.5.938 3.438 0 6.563-2.5 7.5-5.938l35-95.937c1.563-4.063-.937-9.063-5-10Z"}))},Zc=function(){return n.createElement("svg",{viewBox:"0 0 200 117"},n.createElement("path",{d:"M59.688 2.578c-3.438-3.437-8.438-3.437-11.563 0L3.75 48.516c-5 5.937-5 14.062 0 19.062l44.063 45.938c1.562 1.562 4.062 2.5 5.937 2.5s4.063-.938 5.938-2.5c3.437-3.438 3.437-8.438 0-11.563l-42.5-43.437 42.5-44.063c3.437-3.437 3.437-8.437 0-11.875Zm135.937 45.938L151.25 2.578c-3.438-3.437-8.438-3.437-11.563 0-3.125 3.438-3.437 8.438 0 11.563l42.5 44.375-42.5 44.062c-3.437 3.438-3.437 8.438 0 11.563 1.563 1.562 3.438 2.5 5.938 2.5 2.5 0 4.063-.938 5.938-2.5l44.062-45.938c5.625-5.625 5.625-13.75 0-19.687Z"}))},Wc=function(){return n.createElement("svg",{viewBox:"0 0 1024 1024"},n.createElement("path",{d:"M853.333 469.333A42.667 42.667 0 0 0 810.667 512v256A42.667 42.667 0 0 1 768 810.667H256A42.667 42.667 0 0 1 213.333 768V256A42.667 42.667 0 0 1 256 213.333h256A42.667 42.667 0 0 0 512 128H256a128 128 0 0 0-128 128v512a128 128 0 0 0 128 128h512a128 128 0 0 0 128-128V512a42.667 42.667 0 0 0-42.667-42.667z"}),n.createElement("path",{d:"M682.667 213.333h67.413L481.707 481.28a42.667 42.667 0 0 0 0 60.587 42.667 42.667 0 0 0 60.586 0L810.667 273.92v67.413A42.667 42.667 0 0 0 853.333 384 42.667 42.667 0 0 0 896 341.333V170.667A42.667 42.667 0 0 0 853.333 128H682.667a42.667 42.667 0 0 0 0 85.333z"}))},rc=function(w){var O,_,j,G,N=(0,o.YB)(),le=Object.entries(w.asset.dependencies).filter(function(yt){var xt=ks(yt,2),Pt=xt[1].type;return Pt==="FILE"}),ne=(0,n.useState)(0),ve=ks(ne,2),Le=ve[0],ze=ve[1],Fe=(0,n.useState)(w.forceShowCode||w.defaultShowCode),He=ks(Fe,2),Te=He[0],lt=He[1],mt=le.length===1,At=((O=le[Le][0].match(/\.([^.]+)$/))===null||O===void 0?void 0:O[1])||"text";return n.createElement(n.Fragment,null,n.createElement("div",{className:"dumi-default-previewer-actions"},!((_=w.disabledActions)!==null&&_!==void 0&&_.includes("CSB"))&&n.createElement("button",{className:"dumi-default-previewer-action-btn",type:"button","data-dumi-tooltip":N.formatMessage({id:"previewer.actions.codesandbox"}),onClick:function(){return(0,o.il)(w)}},n.createElement(b,null)),!((j=w.disabledActions)!==null&&j!==void 0&&j.includes("STACKBLITZ"))&&n.createElement("button",{className:"dumi-default-previewer-action-btn",type:"button","data-dumi-tooltip":N.formatMessage({id:"previewer.actions.stackblitz"}),onClick:function(){return(0,o.Sc)(w)}},n.createElement(H,null)),!((G=w.disabledActions)!==null&&G!==void 0&&G.includes("EXTERNAL"))&&n.createElement("a",{target:"_blank",rel:"noreferrer",href:w.demoUrl,className:"dumi-default-previewer-action-btn","data-dumi-tooltip":N.formatMessage({id:"previewer.actions.separate"})},n.createElement(Wc,null)),n.createElement(V,w),!w.forceShowCode&&n.createElement("button",{className:"dumi-default-previewer-action-btn",type:"button",onClick:function(){return lt(function(xt){return!xt})},"data-dumi-tooltip":N.formatMessage({id:"previewer.actions.code.".concat(Te?"shrink":"expand")})},Te?n.createElement(Zc,null):n.createElement(tc,null))),Te&&n.createElement(n.Fragment,null,n.createElement("div",{className:"dumi-default-previewer-sources"},!mt&&n.createElement(dl,{className:"dumi-default-previewer-tabs",prefixCls:"dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:String(Le),onChange:function(xt){return ze(Number(xt))},items:le.map(function(yt,xt){var Pt=ks(yt,1),jt=Pt[0];return{key:String(xt),label:jt}})})),n.createElement(R.Z,{lang:At},le[Le][1].value)))},nc=rc,_s=e(70633),Ui={};Ui.styleTagTransform=Jl(),Ui.setAttributes=Xl(),Ui.insert=fl().bind(null,"head"),Ui.domAPI=xu(),Ui.insertStyleElement=Ql();var ac=Bc()(_s.Z,Ui),cd=_s.Z&&_s.Z.locals?_s.Z.locals:void 0;function vl(l){return vl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(w){return typeof w}:function(w){return w&&typeof Symbol=="function"&&w.constructor===Symbol&&w!==Symbol.prototype?"symbol":typeof w},vl(l)}var oc=function(w){var O=(0,o.TH)(),_=O.hash,j="#".concat(w.asset.id);return n.createElement("div",{id:w.asset.id,className:u()("dumi-default-previewer",w.className),style:w.style,"data-debug":w.debug,"data-active":_===j||void 0},n.createElement("div",{className:"dumi-default-previewer-demo",style:{background:w.background},"data-compact":w.compact||void 0,"data-transform":w.transform||void 0,"data-iframe":w.iframe||void 0},w.iframe?n.createElement("iframe",{style:["string","number"].includes(vl(w.iframe))?{height:Number(w.iframe)}:{},src:w.demoUrl}):w.children),n.createElement("div",{className:"dumi-default-previewer-meta"},(w.title||w.debug)&&n.createElement("div",{className:"dumi-default-previewer-desc"},n.createElement("h5",null,n.createElement("a",{href:j},w.debug&&n.createElement("strong",null,"DEV ONLY"),w.title)),w.description&&n.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:w.description}})),n.createElement(nc,w)))},Gc=oc},55722:function(s,f,e){"use strict";e.d(f,{Z:function(){return Ft}});var i=e(67294),u=Object.defineProperty,o=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,v=(ee,we,se)=>we in ee?u(ee,we,{enumerable:!0,configurable:!0,writable:!0,value:se}):ee[we]=se,p=(ee,we)=>{for(var se in we||(we={}))n.call(we,se)&&v(ee,se,we[se]);if(o)for(var se of o(we))d.call(we,se)&&v(ee,se,we[se]);return ee};const h=ee=>i.createElement("svg",p({viewBox:"64 64 896 896"},ee),i.createElement("path",{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}));var x="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTEyIDE5MGgtNjkuOWMtOS44IDAtMTkuMSA0LjUtMjUuMSAxMi4yTDQwNC43IDcyNC41IDIwNyA0NzRhMzIgMzIgMCAwIDAtMjUuMS0xMi4ySDExMmMtNi43IDAtMTAuNCA3LjctNi4zIDEyLjlsMjczLjkgMzQ3YzEyLjggMTYuMiAzNy40IDE2LjIgNTAuMyAwbDQ4OC40LTYxOC45YzQuMS01LjEuNC0xMi44LTYuMy0xMi44eiIvPjwvc3ZnPg==",y=Object.defineProperty,b=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,C=(ee,we,se)=>we in ee?y(ee,we,{enumerable:!0,configurable:!0,writable:!0,value:se}):ee[we]=se,$=(ee,we)=>{for(var se in we||(we={}))T.call(we,se)&&C(ee,se,we[se]);if(b)for(var se of b(we))A.call(we,se)&&C(ee,se,we[se]);return ee};const B=ee=>i.createElement("svg",$({viewBox:"64 64 896 896"},ee),i.createElement("path",{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2 263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}));var L="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODMyIDY0SDI5NmMtNC40IDAtOCAzLjYtOCA4djU2YzAgNC40IDMuNiA4IDggOGg0OTZ2Njg4YzAgNC40IDMuNiA4IDggOGg1NmM0LjQgMCA4LTMuNiA4LThWOTZjMC0xNy43LTE0LjMtMzItMzItMzJ6TTcwNCAxOTJIMTkyYy0xNy43IDAtMzIgMTQuMy0zMiAzMnY1MzAuN2MwIDguNSAzLjQgMTYuNiA5LjQgMjIuNmwxNzMuMyAxNzMuM2MyLjIgMi4yIDQuNyA0IDcuNCA1LjV2MS45aDQuMmMzLjUgMS4zIDcuMiAyIDExIDJINzA0YzE3LjcgMCAzMi0xNC4zIDMyLTMyVjIyNGMwLTE3LjctMTQuMy0zMi0zMi0zMnpNMzUwIDg1Ni4yIDI2My45IDc3MEgzNTB2ODYuMnpNNjY0IDg4OEg0MTRWNzQ2YzAtMjIuMS0xNy45LTQwLTQwLTQwSDIzMlYyNjRoNDMydjYyNHoiLz48L3N2Zz4=",z=e(94184),H=e.n(z);var W=function(){var ee=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,we=0,se={},_e={util:{encode:function Ue(Ge){return Ge instanceof et?new et(Ge.type,Ue(Ge.content),Ge.alias):Array.isArray(Ge)?Ge.map(Ue):Ge.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(Ue){return Object.prototype.toString.call(Ue).slice(8,-1)},objId:function(Ue){return Ue.__id||Object.defineProperty(Ue,"__id",{value:++we}),Ue.__id},clone:function Ue(Ge,nt){nt=nt||{};var bt,ot;switch(_e.util.type(Ge)){case"Object":if(ot=_e.util.objId(Ge),nt[ot])return nt[ot];bt={},nt[ot]=bt;for(var kt in Ge)Ge.hasOwnProperty(kt)&&(bt[kt]=Ue(Ge[kt],nt));return bt;case"Array":return ot=_e.util.objId(Ge),nt[ot]?nt[ot]:(bt=[],nt[ot]=bt,Ge.forEach(function(Wt,Kt){bt[Kt]=Ue(Wt,nt)}),bt);default:return Ge}},getLanguage:function(Ue){for(;Ue;){var Ge=ee.exec(Ue.className);if(Ge)return Ge[1].toLowerCase();Ue=Ue.parentElement}return"none"},setLanguage:function(Ue,Ge){Ue.className=Ue.className.replace(RegExp(ee,"gi"),""),Ue.classList.add("language-"+Ge)},isActive:function(Ue,Ge,nt){for(var bt="no-"+Ge;Ue;){var ot=Ue.classList;if(ot.contains(Ge))return!0;if(ot.contains(bt))return!1;Ue=Ue.parentElement}return!!nt}},languages:{plain:se,plaintext:se,text:se,txt:se,extend:function(Ue,Ge){var nt=_e.util.clone(_e.languages[Ue]);for(var bt in Ge)nt[bt]=Ge[bt];return nt},insertBefore:function(Ue,Ge,nt,bt){bt=bt||_e.languages;var ot=bt[Ue],kt={};for(var Wt in ot)if(ot.hasOwnProperty(Wt)){if(Wt==Ge)for(var Kt in nt)nt.hasOwnProperty(Kt)&&(kt[Kt]=nt[Kt]);nt.hasOwnProperty(Wt)||(kt[Wt]=ot[Wt])}var Cr=bt[Ue];return bt[Ue]=kt,_e.languages.DFS(_e.languages,function(Pr,xn){xn===Cr&&Pr!=Ue&&(this[Pr]=kt)}),kt},DFS:function Ue(Ge,nt,bt,ot){ot=ot||{};var kt=_e.util.objId;for(var Wt in Ge)if(Ge.hasOwnProperty(Wt)){nt.call(Ge,Wt,Ge[Wt],bt||Wt);var Kt=Ge[Wt],Cr=_e.util.type(Kt);Cr==="Object"&&!ot[kt(Kt)]?(ot[kt(Kt)]=!0,Ue(Kt,nt,null,ot)):Cr==="Array"&&!ot[kt(Kt)]&&(ot[kt(Kt)]=!0,Ue(Kt,nt,Wt,ot))}}},plugins:{},highlight:function(Ue,Ge,nt){var bt={code:Ue,grammar:Ge,language:nt};return _e.hooks.run("before-tokenize",bt),bt.tokens=_e.tokenize(bt.code,bt.grammar),_e.hooks.run("after-tokenize",bt),et.stringify(_e.util.encode(bt.tokens),bt.language)},tokenize:function(Ue,Ge){var nt=Ge.rest;if(nt){for(var bt in nt)Ge[bt]=nt[bt];delete Ge.rest}var ot=new Lt;return Qe(ot,ot.head,Ue),ut(Ue,ot,Ge,ot.head,0),It(ot)},hooks:{all:{},add:function(Ue,Ge){var nt=_e.hooks.all;nt[Ue]=nt[Ue]||[],nt[Ue].push(Ge)},run:function(Ue,Ge){var nt=_e.hooks.all[Ue];if(!(!nt||!nt.length))for(var bt=0,ot;ot=nt[bt++];)ot(Ge)}},Token:et};function et(Ue,Ge,nt,bt){this.type=Ue,this.content=Ge,this.alias=nt,this.length=(bt||"").length|0}et.stringify=function Ue(Ge,nt){if(typeof Ge=="string")return Ge;if(Array.isArray(Ge)){var bt="";return Ge.forEach(function(Cr){bt+=Ue(Cr,nt)}),bt}var ot={type:Ge.type,content:Ue(Ge.content,nt),tag:"span",classes:["token",Ge.type],attributes:{},language:nt},kt=Ge.alias;kt&&(Array.isArray(kt)?Array.prototype.push.apply(ot.classes,kt):ot.classes.push(kt)),_e.hooks.run("wrap",ot);var Wt="";for(var Kt in ot.attributes)Wt+=" "+Kt+'="'+(ot.attributes[Kt]||"").replace(/"/g,"&quot;")+'"';return"<"+ot.tag+' class="'+ot.classes.join(" ")+'"'+Wt+">"+ot.content+"</"+ot.tag+">"};function at(Ue,Ge,nt,bt){Ue.lastIndex=Ge;var ot=Ue.exec(nt);if(ot&&bt&&ot[1]){var kt=ot[1].length;ot.index+=kt,ot[0]=ot[0].slice(kt)}return ot}function ut(Ue,Ge,nt,bt,ot,kt){for(var Wt in nt)if(!(!nt.hasOwnProperty(Wt)||!nt[Wt])){var Kt=nt[Wt];Kt=Array.isArray(Kt)?Kt:[Kt];for(var Cr=0;Cr<Kt.length;++Cr){if(kt&&kt.cause==Wt+","+Cr)return;var Pr=Kt[Cr],xn=Pr.inside,Pn=!!Pr.lookbehind,gn=!!Pr.greedy,ln=Pr.alias;if(gn&&!Pr.pattern.global){var Sn=Pr.pattern.toString().match(/[imsuy]*$/)[0];Pr.pattern=RegExp(Pr.pattern.source,Sn+"g")}for(var lr=Pr.pattern||Pr,cn=bt.next,vn=ot;cn!==Ge.tail&&!(kt&&vn>=kt.reach);vn+=cn.value.length,cn=cn.next){var pa=cn.value;if(Ge.length>Ue.length)return;if(!(pa instanceof et)){var va=1,dn;if(gn){if(dn=at(lr,vn,Ue,Pn),!dn||dn.index>=Ue.length)break;var Sa=dn.index,ua=dn.index+dn[0].length,Wn=vn;for(Wn+=cn.value.length;Sa>=Wn;)cn=cn.next,Wn+=cn.value.length;if(Wn-=cn.value.length,vn=Wn,cn.value instanceof et)continue;for(var yr=cn;yr!==Ge.tail&&(Wn<ua||typeof yr.value=="string");yr=yr.next)va++,Wn+=yr.value.length;va--,pa=Ue.slice(vn,Wn),dn.index-=vn}else if(dn=at(lr,0,pa,Pn),!dn)continue;var Sa=dn.index,Ma=dn[0],go=pa.slice(0,Sa),Ea=pa.slice(Sa+Ma.length),Fo=vn+pa.length;kt&&Fo>kt.reach&&(kt.reach=Fo);var yo=cn.prev;go&&(yo=Qe(Ge,yo,go),vn+=go.length),dt(Ge,yo,va);var mn=new et(Wt,xn?_e.tokenize(Ma,xn):Ma,ln,Ma);if(cn=Qe(Ge,yo,mn),Ea&&Qe(Ge,cn,Ea),va>1){var zo={cause:Wt+","+Cr,reach:Fo};ut(Ue,Ge,nt,cn.prev,vn,zo),kt&&zo.reach>kt.reach&&(kt.reach=zo.reach)}}}}}}function Lt(){var Ue={value:null,prev:null,next:null},Ge={value:null,prev:Ue,next:null};Ue.next=Ge,this.head=Ue,this.tail=Ge,this.length=0}function Qe(Ue,Ge,nt){var bt=Ge.next,ot={value:nt,prev:Ge,next:bt};return Ge.next=ot,bt.prev=ot,Ue.length++,ot}function dt(Ue,Ge,nt){for(var bt=Ge.next,ot=0;ot<nt&&bt!==Ue.tail;ot++)bt=bt.next;Ge.next=bt,bt.prev=Ge,Ue.length-=ot}function It(Ue){for(var Ge=[],nt=Ue.head.next;nt!==Ue.tail;)Ge.push(nt.value),nt=nt.next;return Ge}return _e}(),R=W;W.default=W,R.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},R.languages.markup.tag.inside["attr-value"].inside.entity=R.languages.markup.entity,R.languages.markup.doctype.inside["internal-subset"].inside=R.languages.markup,R.hooks.add("wrap",function(ee){ee.type==="entity"&&(ee.attributes.title=ee.content.replace(/&amp;/,"&"))}),Object.defineProperty(R.languages.markup.tag,"addInlined",{value:function(we,se){var _e={};_e["language-"+se]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:R.languages[se]},_e.cdata=/^<!\[CDATA\[|\]\]>$/i;var et={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:_e}};et["language-"+se]={pattern:/[\s\S]+/,inside:R.languages[se]};var at={};at[we]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return we}),"i"),lookbehind:!0,greedy:!0,inside:et},R.languages.insertBefore("markup","cdata",at)}}),Object.defineProperty(R.languages.markup.tag,"addAttribute",{value:function(ee,we){R.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+ee+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[we,"language-"+we],inside:R.languages[we]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),R.languages.html=R.languages.markup,R.languages.mathml=R.languages.markup,R.languages.svg=R.languages.markup,R.languages.xml=R.languages.extend("markup",{}),R.languages.ssml=R.languages.xml,R.languages.atom=R.languages.xml,R.languages.rss=R.languages.xml,function(ee){var we="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",se={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},_e={bash:se,environment:{pattern:RegExp("\\$"+we),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+we),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};ee.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+we),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:_e},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:se}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:_e},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:_e.entity}}],environment:{pattern:RegExp("\\$?"+we),alias:"constant"},variable:_e.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},se.inside=ee.languages.bash;for(var et=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],at=_e.variable[1].inside,ut=0;ut<et.length;ut++)at[et[ut]]=ee.languages.bash[et[ut]];ee.languages.shell=ee.languages.bash}(R),R.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},R.languages.c=R.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),R.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),R.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},R.languages.c.string],char:R.languages.c.char,comment:R.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:R.languages.c}}}}),R.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete R.languages.c.boolean,function(ee){var we=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,se=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return we.source});ee.languages.cpp=ee.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return we.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:we,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),ee.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return se})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),ee.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:ee.languages.cpp}}}}),ee.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),ee.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:ee.languages.extend("cpp",{})}}),ee.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},ee.languages.cpp["base-clause"])}(R),function(ee){var we=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;ee.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+we.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+we.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+we.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:we,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},ee.languages.css.atrule.inside.rest=ee.languages.css;var se=ee.languages.markup;se&&(se.tag.addInlined("style","css"),se.tag.addAttribute("style","css"))}(R),function(ee){var we=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,se;ee.languages.css.selector={pattern:ee.languages.css.selector.pattern,lookbehind:!0,inside:se={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+we.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[we,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},ee.languages.css.atrule.inside["selector-function-argument"].inside=se,ee.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}});var _e={pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0},et={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};ee.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:_e,number:et,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:_e,number:et})}(R),R.languages.javascript=R.languages.extend("clike",{"class-name":[R.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),R.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,R.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:R.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:R.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:R.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:R.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:R.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),R.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:R.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),R.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),R.languages.markup&&(R.languages.markup.tag.addInlined("script","javascript"),R.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),R.languages.js=R.languages.javascript,function(ee){var we=/#(?!\{).+/,se={pattern:/#\{[^}]+\}/,alias:"variable"};ee.languages.coffeescript=ee.languages.extend("javascript",{comment:we,string:[{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,inside:{interpolation:se}}],keyword:/\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,"class-member":{pattern:/@(?!\d)\w+/,alias:"variable"}}),ee.languages.insertBefore("coffeescript","comment",{"multiline-comment":{pattern:/###[\s\S]+?###/,alias:"comment"},"block-regex":{pattern:/\/{3}[\s\S]*?\/{3}/,alias:"regex",inside:{comment:we,interpolation:se}}}),ee.languages.insertBefore("coffeescript","string",{"inline-javascript":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"},script:{pattern:/[\s\S]+/,alias:"language-javascript",inside:ee.languages.javascript}}},"multiline-string":[{pattern:/'''[\s\S]*?'''/,greedy:!0,alias:"string"},{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string",inside:{interpolation:se}}]}),ee.languages.insertBefore("coffeescript","keyword",{property:/(?!\d)\w+(?=\s*:(?!:))/}),delete ee.languages.coffeescript["template-string"],ee.languages.coffee=ee.languages.coffeescript}(R),function(ee){var we=/[*&][^\s[\]{},]+/,se=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,_e="(?:"+se.source+"(?:[ 	]+"+we.source+")?|"+we.source+"(?:[ 	]+"+se.source+")?)",et=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),at=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function ut(Lt,Qe){Qe=(Qe||"").replace(/m/g,"")+"m";var dt=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return _e}).replace(/<<value>>/g,function(){return Lt});return RegExp(dt,Qe)}ee.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return _e})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return _e}).replace(/<<key>>/g,function(){return"(?:"+et+"|"+at+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:ut(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:ut(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:ut(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:ut(at),lookbehind:!0,greedy:!0},number:{pattern:ut(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:se,important:we,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},ee.languages.yml=ee.languages.yaml}(R),function(ee){var we=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function se(It){return It=It.replace(/<inner>/g,function(){return we}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+It+")")}var _e=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,et=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return _e}),at=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;ee.languages.markdown=ee.languages.extend("markup",{}),ee.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:ee.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+et+at+"(?:"+et+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+et+at+")(?:"+et+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(_e),inside:ee.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+et+")"+at+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+et+"$"),inside:{"table-header":{pattern:RegExp(_e),alias:"important",inside:ee.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:se(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:se(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:se(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:se(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(It){["url","bold","italic","strike","code-snippet"].forEach(function(Ue){It!==Ue&&(ee.languages.markdown[It].inside.content.inside[Ue]=ee.languages.markdown[Ue])})}),ee.hooks.add("after-tokenize",function(It){if(It.language!=="markdown"&&It.language!=="md")return;function Ue(Ge){if(!(!Ge||typeof Ge=="string"))for(var nt=0,bt=Ge.length;nt<bt;nt++){var ot=Ge[nt];if(ot.type!=="code"){Ue(ot.content);continue}var kt=ot.content[1],Wt=ot.content[3];if(kt&&Wt&&kt.type==="code-language"&&Wt.type==="code-block"&&typeof kt.content=="string"){var Kt=kt.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp");Kt=(/[a-z][\w-]*/i.exec(Kt)||[""])[0].toLowerCase();var Cr="language-"+Kt;Wt.alias?typeof Wt.alias=="string"?Wt.alias=[Wt.alias,Cr]:Wt.alias.push(Cr):Wt.alias=[Cr]}}}Ue(It.tokens)}),ee.hooks.add("wrap",function(It){if(It.type==="code-block"){for(var Ue="",Ge=0,nt=It.classes.length;Ge<nt;Ge++){var bt=It.classes[Ge],ot=/language-(.+)/.exec(bt);if(ot){Ue=ot[1];break}}var kt=ee.languages[Ue];if(kt)It.content=ee.highlight(dt(It.content),kt,Ue);else if(Ue&&Ue!=="none"&&ee.plugins.autoloader){var Wt="md-"+new Date().valueOf()+"-"+Math.floor(Math.random()*1e16);It.attributes.id=Wt,ee.plugins.autoloader.loadLanguages(Ue,function(){var Kt=document.getElementById(Wt);Kt&&(Kt.innerHTML=ee.highlight(Kt.textContent,ee.languages[Ue],Ue))})}}});var ut=RegExp(ee.languages.markup.tag.pattern.source,"gi"),Lt={amp:"&",lt:"<",gt:">",quot:'"'},Qe=String.fromCodePoint||String.fromCharCode;function dt(It){var Ue=It.replace(ut,"");return Ue=Ue.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(Ge,nt){if(nt=nt.toLowerCase(),nt[0]==="#"){var bt;return nt[1]==="x"?bt=parseInt(nt.slice(2),16):bt=Number(nt.slice(1)),Qe(bt)}else{var ot=Lt[nt];return ot||Ge}}),Ue}ee.languages.md=ee.languages.markdown}(R),R.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:R.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},R.hooks.add("after-tokenize",function(we){if(we.language!=="graphql")return;var se=we.tokens.filter(function(ot){return typeof ot!="string"&&ot.type!=="comment"&&ot.type!=="scalar"}),_e=0;function et(ot){return se[_e+ot]}function at(ot,kt){kt=kt||0;for(var Wt=0;Wt<ot.length;Wt++){var Kt=et(Wt+kt);if(!Kt||Kt.type!==ot[Wt])return!1}return!0}function ut(ot,kt){for(var Wt=1,Kt=_e;Kt<se.length;Kt++){var Cr=se[Kt],Pr=Cr.content;if(Cr.type==="punctuation"&&typeof Pr=="string"){if(ot.test(Pr))Wt++;else if(kt.test(Pr)&&(Wt--,Wt===0))return Kt}}return-1}function Lt(ot,kt){var Wt=ot.alias;Wt?Array.isArray(Wt)||(ot.alias=Wt=[Wt]):ot.alias=Wt=[],Wt.push(kt)}for(;_e<se.length;){var Qe=se[_e++];if(Qe.type==="keyword"&&Qe.content==="mutation"){var dt=[];if(at(["definition-mutation","punctuation"])&&et(1).content==="("){_e+=2;var It=ut(/^\($/,/^\)$/);if(It===-1)continue;for(;_e<It;_e++){var Ue=et(0);Ue.type==="variable"&&(Lt(Ue,"variable-input"),dt.push(Ue.content))}_e=It+1}if(at(["punctuation","property-query"])&&et(0).content==="{"&&(_e++,Lt(et(0),"property-mutation"),dt.length>0)){var Ge=ut(/^\{$/,/^\}$/);if(Ge===-1)continue;for(var nt=_e;nt<Ge;nt++){var bt=se[nt];bt.type==="variable"&&dt.indexOf(bt.content)>=0&&Lt(bt,"variable-input")}}}}}),R.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/},function(ee){var we=ee.languages.javascript["template-string"],se=we.pattern.source,_e=we.inside.interpolation,et=_e.inside["interpolation-punctuation"],at=_e.pattern.source;function ut(nt,bt){if(ee.languages[nt])return{pattern:RegExp("((?:"+bt+")\\s*)"+se),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:nt}}}}ee.languages.javascript["template-string"]=[ut("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),ut("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),ut("svg",/\bsvg/.source),ut("markdown",/\b(?:markdown|md)/.source),ut("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),ut("sql",/\bsql/.source),we].filter(Boolean);function Lt(nt,bt){return"___"+bt.toUpperCase()+"_"+nt+"___"}function Qe(nt,bt,ot){var kt={code:nt,grammar:bt,language:ot};return ee.hooks.run("before-tokenize",kt),kt.tokens=ee.tokenize(kt.code,kt.grammar),ee.hooks.run("after-tokenize",kt),kt.tokens}function dt(nt){var bt={};bt["interpolation-punctuation"]=et;var ot=ee.tokenize(nt,bt);if(ot.length===3){var kt=[1,1];kt.push.apply(kt,Qe(ot[1],ee.languages.javascript,"javascript")),ot.splice.apply(ot,kt)}return new ee.Token("interpolation",ot,_e.alias,nt)}function It(nt,bt,ot){var kt=ee.tokenize(nt,{interpolation:{pattern:RegExp(at),lookbehind:!0}}),Wt=0,Kt={},Cr=kt.map(function(gn){if(typeof gn=="string")return gn;for(var ln=gn.content,Sn;nt.indexOf(Sn=Lt(Wt++,ot))!==-1;);return Kt[Sn]=ln,Sn}).join(""),Pr=Qe(Cr,bt,ot),xn=Object.keys(Kt);Wt=0;function Pn(gn){for(var ln=0;ln<gn.length;ln++){if(Wt>=xn.length)return;var Sn=gn[ln];if(typeof Sn=="string"||typeof Sn.content=="string"){var lr=xn[Wt],cn=typeof Sn=="string"?Sn:Sn.content,vn=cn.indexOf(lr);if(vn!==-1){++Wt;var pa=cn.substring(0,vn),va=dt(Kt[lr]),dn=cn.substring(vn+lr.length),ua=[];if(pa&&ua.push(pa),ua.push(va),dn){var Wn=[dn];Pn(Wn),ua.push.apply(ua,Wn)}typeof Sn=="string"?(gn.splice.apply(gn,[ln,1].concat(ua)),ln+=ua.length-1):Sn.content=ua}}else{var yr=Sn.content;Array.isArray(yr)?Pn(yr):Pn([yr])}}}return Pn(Pr),new ee.Token(ot,Pr,"language-"+ot,nt)}var Ue={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};ee.hooks.add("after-tokenize",function(nt){if(!(nt.language in Ue))return;function bt(ot){for(var kt=0,Wt=ot.length;kt<Wt;kt++){var Kt=ot[kt];if(typeof Kt!="string"){var Cr=Kt.content;if(!Array.isArray(Cr)){typeof Cr!="string"&&bt([Cr]);continue}if(Kt.type==="template-string"){var Pr=Cr[1];if(Cr.length===3&&typeof Pr!="string"&&Pr.type==="embedded-code"){var xn=Ge(Pr),Pn=Pr.alias,gn=Array.isArray(Pn)?Pn[0]:Pn,ln=ee.languages[gn];if(!ln)continue;Cr[1]=It(xn,ln,gn)}}else bt(Cr)}}}bt(nt.tokens)});function Ge(nt){return typeof nt=="string"?nt:Array.isArray(nt)?nt.map(Ge).join(""):Ge(nt.content)}}(R),function(ee){ee.languages.typescript=ee.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),ee.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete ee.languages.typescript.parameter,delete ee.languages.typescript["literal-property"];var we=ee.languages.extend("typescript",{});delete we["class-name"],ee.languages.typescript["class-name"].inside=we,ee.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:we}}}}),ee.languages.ts=ee.languages.typescript}(R),function(ee){ee.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+ee.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),ee.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+ee.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),ee.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]});function we(Lt,Qe){return RegExp(Lt.replace(/<ID>/g,function(){return/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source}),Qe)}ee.languages.insertBefore("javascript","keyword",{imports:{pattern:we(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),lookbehind:!0,inside:ee.languages.javascript},exports:{pattern:we(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),lookbehind:!0,inside:ee.languages.javascript}}),ee.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:"control-flow"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),ee.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),ee.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:we(/(\.\s*)#?<ID>/.source),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var se=["function","function-variable","method","method-variable","property-access"],_e=0;_e<se.length;_e++){var et=se[_e],at=ee.languages.javascript[et];ee.util.type(at)==="RegExp"&&(at=ee.languages.javascript[et]={pattern:at});var ut=at.inside||{};at.inside=ut,ut["maybe-class-name"]=/^[A-Z][\s\S]*/}}(R),function(ee){var we=ee.util.clone(ee.languages.javascript),se=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,_e=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,et=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function at(Qe,dt){return Qe=Qe.replace(/<S>/g,function(){return se}).replace(/<BRACES>/g,function(){return _e}).replace(/<SPREAD>/g,function(){return et}),RegExp(Qe,dt)}et=at(et).source,ee.languages.jsx=ee.languages.extend("markup",we),ee.languages.jsx.tag.pattern=at(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),ee.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,ee.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,ee.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,ee.languages.jsx.tag.inside.comment=we.comment,ee.languages.insertBefore("inside","attr-name",{spread:{pattern:at(/<SPREAD>/.source),inside:ee.languages.jsx}},ee.languages.jsx.tag),ee.languages.insertBefore("inside","special-attr",{script:{pattern:at(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:ee.languages.jsx}}},ee.languages.jsx.tag);var ut=function(Qe){return Qe?typeof Qe=="string"?Qe:typeof Qe.content=="string"?Qe.content:Qe.content.map(ut).join(""):""},Lt=function(Qe){for(var dt=[],It=0;It<Qe.length;It++){var Ue=Qe[It],Ge=!1;if(typeof Ue!="string"&&(Ue.type==="tag"&&Ue.content[0]&&Ue.content[0].type==="tag"?Ue.content[0].content[0].content==="</"?dt.length>0&&dt[dt.length-1].tagName===ut(Ue.content[0].content[1])&&dt.pop():Ue.content[Ue.content.length-1].content==="/>"||dt.push({tagName:ut(Ue.content[0].content[1]),openedBraces:0}):dt.length>0&&Ue.type==="punctuation"&&Ue.content==="{"?dt[dt.length-1].openedBraces++:dt.length>0&&dt[dt.length-1].openedBraces>0&&Ue.type==="punctuation"&&Ue.content==="}"?dt[dt.length-1].openedBraces--:Ge=!0),(Ge||typeof Ue=="string")&&dt.length>0&&dt[dt.length-1].openedBraces===0){var nt=ut(Ue);It<Qe.length-1&&(typeof Qe[It+1]=="string"||Qe[It+1].type==="plain-text")&&(nt+=ut(Qe[It+1]),Qe.splice(It+1,1)),It>0&&(typeof Qe[It-1]=="string"||Qe[It-1].type==="plain-text")&&(nt=ut(Qe[It-1])+nt,Qe.splice(It-1,1),It--),Qe[It]=new ee.Token("plain-text",nt,null,nt)}Ue.content&&typeof Ue.content!="string"&&Lt(Ue.content)}};ee.hooks.add("after-tokenize",function(Qe){Qe.language!=="jsx"&&Qe.language!=="tsx"||Lt(Qe.tokens)})}(R),function(ee){ee.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d.*$/m]};var we={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(we).forEach(function(se){var _e=we[se],et=[];/^\w+$/.test(se)||et.push(/\w+/.exec(se)[0]),se==="diff"&&et.push("bold"),ee.languages.diff[se]={pattern:RegExp("^(?:["+_e+`].*(?:\r
?|
|(?![\\s\\S])))+`,"m"),alias:et,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(se)[0]}}}}),Object.defineProperty(ee.languages.diff,"PREFIXES",{value:we})}(R),R.languages.git={comment:/^#.*/m,deleted:/^[-–].*/m,inserted:/^\+.*/m,string:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,command:{pattern:/^.*\$ git .*$/m,inside:{parameter:/\s--?\w+/}},coord:/^@@.*@@$/m,"commit-sha1":/^commit \w{40}$/m},R.languages.go=R.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/}),R.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}}),delete R.languages.go["class-name"],function(ee){function we(se,_e){return"___"+se.toUpperCase()+_e+"___"}Object.defineProperties(ee.languages["markup-templating"]={},{buildPlaceholders:{value:function(se,_e,et,at){if(se.language===_e){var ut=se.tokenStack=[];se.code=se.code.replace(et,function(Lt){if(typeof at=="function"&&!at(Lt))return Lt;for(var Qe=ut.length,dt;se.code.indexOf(dt=we(_e,Qe))!==-1;)++Qe;return ut[Qe]=Lt,dt}),se.grammar=ee.languages.markup}}},tokenizePlaceholders:{value:function(se,_e){if(se.language!==_e||!se.tokenStack)return;se.grammar=ee.languages[_e];var et=0,at=Object.keys(se.tokenStack);function ut(Lt){for(var Qe=0;Qe<Lt.length&&!(et>=at.length);Qe++){var dt=Lt[Qe];if(typeof dt=="string"||dt.content&&typeof dt.content=="string"){var It=at[et],Ue=se.tokenStack[It],Ge=typeof dt=="string"?dt:dt.content,nt=we(_e,It),bt=Ge.indexOf(nt);if(bt>-1){++et;var ot=Ge.substring(0,bt),kt=new ee.Token(_e,ee.tokenize(Ue,se.grammar),"language-"+_e,Ue),Wt=Ge.substring(bt+nt.length),Kt=[];ot&&Kt.push.apply(Kt,ut([ot])),Kt.push(kt),Wt&&Kt.push.apply(Kt,ut([Wt])),typeof dt=="string"?Lt.splice.apply(Lt,[Qe,1].concat(Kt)):dt.content=Kt}}else dt.content&&ut(dt.content)}return Lt}ut(se.tokens)}}})}(R),function(ee){ee.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:false|true)\b/,block:{pattern:/^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/},ee.hooks.add("before-tokenize",function(we){var se=/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;ee.languages["markup-templating"].buildPlaceholders(we,"handlebars",se)}),ee.hooks.add("after-tokenize",function(we){ee.languages["markup-templating"].tokenizePlaceholders(we,"handlebars")}),ee.languages.hbs=ee.languages.handlebars}(R),R.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},R.languages.webmanifest=R.languages.json,R.languages.less=R.languages.extend("css",{comment:[/\/\*[\s\S]*?\*\//,{pattern:/(^|[^\\])\/\/.*/,lookbehind:!0}],atrule:{pattern:/@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,inside:{punctuation:/[:()]/}},selector:{pattern:/(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,inside:{variable:/@+[\w-]+/}},property:/(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,operator:/[+\-*\/]/}),R.languages.insertBefore("less","property",{variable:[{pattern:/@[\w-]+\s*:/,inside:{punctuation:/:/}},/@@?[\w-]+/],"mixin-usage":{pattern:/([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,lookbehind:!0,alias:"function"}}),R.languages.makefile={comment:{pattern:/(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,lookbehind:!0},string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"builtin-target":{pattern:/\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,alias:"builtin"},target:{pattern:/^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,alias:"symbol",inside:{variable:/\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/}},variable:/\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,keyword:/-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,function:{pattern:/(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,lookbehind:!0},operator:/(?:::|[?:+!])?=|[|@]/,punctuation:/[:;(){}]/},R.languages.objectivec=R.languages.extend("c",{string:{pattern:/@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,operator:/-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/}),delete R.languages.objectivec["class-name"],R.languages.objc=R.languages.objectivec,R.languages.ocaml={comment:{pattern:/\(\*[\s\S]*?\*\)/,greedy:!0},char:{pattern:/'(?:[^\\\r\n']|\\(?:.|[ox]?[0-9a-f]{1,3}))'/i,greedy:!0},string:[{pattern:/"(?:\\(?:[\s\S]|\r\n)|[^\\\r\n"])*"/,greedy:!0},{pattern:/\{([a-z_]*)\|[\s\S]*?\|\1\}/,greedy:!0}],number:[/\b(?:0b[01][01_]*|0o[0-7][0-7_]*)\b/i,/\b0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]*)?(?:p[+-]?\d[\d_]*)?(?!\w)/i,/\b\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?\d[\d_]*)?(?!\w)/i],directive:{pattern:/\B#\w+/,alias:"property"},label:{pattern:/\B~\w+/,alias:"property"},"type-variable":{pattern:/\B'\w+/,alias:"function"},variant:{pattern:/`\w+/,alias:"symbol"},keyword:/\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,boolean:/\b(?:false|true)\b/,"operator-like-punctuation":{pattern:/\[[<>|]|[>|]\]|\{<|>\}/,alias:"punctuation"},operator:/\.[.~]|:[=>]|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,punctuation:/;;|::|[(){}\[\].,:;#]|\b_\b/},R.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},R.languages.python["string-interpolation"].inside.interpolation.inside.rest=R.languages.python,R.languages.py=R.languages.python,R.languages.reason=R.languages.extend("clike",{string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,greedy:!0},"class-name":/\b[A-Z]\w*/,keyword:/\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,operator:/\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/}),R.languages.insertBefore("reason","class-name",{char:{pattern:/'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,greedy:!0},constructor:/\b[A-Z]\w*\b(?!\s*\.)/,label:{pattern:/\b[a-z]\w*(?=::)/,alias:"symbol"}}),delete R.languages.reason.function,function(ee){ee.languages.sass=ee.languages.extend("css",{comment:{pattern:/^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,lookbehind:!0,greedy:!0}}),ee.languages.insertBefore("sass","atrule",{"atrule-line":{pattern:/^(?:[ \t]*)[@+=].+/m,greedy:!0,inside:{atrule:/(?:@[\w-]+|[+=])/}}}),delete ee.languages.sass.atrule;var we=/\$[-\w]+|#\{\$[-\w]+\}/,se=[/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/,{pattern:/(\s)-(?=\s)/,lookbehind:!0}];ee.languages.insertBefore("sass","property",{"variable-line":{pattern:/^[ \t]*\$.+/m,greedy:!0,inside:{punctuation:/:/,variable:we,operator:se}},"property-line":{pattern:/^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,greedy:!0,inside:{property:[/[^:\s]+(?=\s*:)/,{pattern:/(:)[^:\s]+/,lookbehind:!0}],punctuation:/:/,variable:we,operator:se,important:ee.languages.sass.important}}}),delete ee.languages.sass.property,delete ee.languages.sass.important,ee.languages.insertBefore("sass","punctuation",{selector:{pattern:/^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,lookbehind:!0,greedy:!0}})}(R),R.languages.scss=R.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),R.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),R.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),R.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),R.languages.scss.atrule.inside.rest=R.languages.scss,function(ee){var we={pattern:/(\b\d+)(?:%|[a-z]+)/,lookbehind:!0},se={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0},_e={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},url:{pattern:/\burl\((["']?).*?\1\)/i,greedy:!0},string:{pattern:/("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,greedy:!0},interpolation:null,func:null,important:/\B!(?:important|optional)\b/i,keyword:{pattern:/(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/,lookbehind:!0},hexcode:/#[\da-f]{3,6}/i,color:[/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:we,number:se,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:we,boolean:/\b(?:false|true)\b/,operator:[/~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],number:se,punctuation:/[{}()\[\];:,]/};_e.interpolation={pattern:/\{[^\r\n}:]+\}/,alias:"variable",inside:{delimiter:{pattern:/^\{|\}$/,alias:"punctuation"},rest:_e}},_e.func={pattern:/[\w-]+\([^)]*\).*/,inside:{function:/^[^(]+/,rest:_e}},ee.languages.stylus={"atrule-declaration":{pattern:/(^[ \t]*)@.+/m,lookbehind:!0,inside:{atrule:/^@[\w-]+/,rest:_e}},"variable-declaration":{pattern:/(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,lookbehind:!0,inside:{variable:/^\S+/,rest:_e}},statement:{pattern:/(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,lookbehind:!0,inside:{keyword:/^\S+/,rest:_e}},"property-declaration":{pattern:/((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,lookbehind:!0,inside:{property:{pattern:/^[^\s:]+/,inside:{interpolation:_e.interpolation}},rest:_e}},selector:{pattern:/(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,lookbehind:!0,inside:{interpolation:_e.interpolation,comment:_e.comment,punctuation:/[{},]/}},func:_e.func,string:_e.string,comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0,greedy:!0},interpolation:_e.interpolation,punctuation:/[{}()\[\];:.]/}}(R),function(ee){var we=ee.util.clone(ee.languages.typescript);ee.languages.tsx=ee.languages.extend("jsx",we),delete ee.languages.tsx.parameter,delete ee.languages.tsx["literal-property"];var se=ee.languages.tsx.tag;se.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+se.pattern.source+")",se.pattern.flags),se.lookbehind=!0}(R),R.languages.wasm={comment:[/\(;[\s\S]*?;\)/,{pattern:/;;.*/,greedy:!0}],string:{pattern:/"(?:\\[\s\S]|[^"\\])*"/,greedy:!0},keyword:[{pattern:/\b(?:align|offset)=/,inside:{operator:/=/}},{pattern:/\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,inside:{punctuation:/\./}},/\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],variable:/\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,number:/[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,punctuation:/[()]/};var F=R,V={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},q=V,Q={Prism:F,theme:q};function X(ee,we,se){return we in ee?Object.defineProperty(ee,we,{value:se,enumerable:!0,configurable:!0,writable:!0}):ee[we]=se,ee}function ie(){return ie=Object.assign||function(ee){for(var we=1;we<arguments.length;we++){var se=arguments[we];for(var _e in se)Object.prototype.hasOwnProperty.call(se,_e)&&(ee[_e]=se[_e])}return ee},ie.apply(this,arguments)}var Oe=/\r\n|\r|\n/,Se=function(ee){ee.length===0?ee.push({types:["plain"],content:`
`,empty:!0}):ee.length===1&&ee[0].content===""&&(ee[0].content=`
`,ee[0].empty=!0)},Be=function(ee,we){var se=ee.length;return se>0&&ee[se-1]===we?ee:ee.concat(we)},ue=function(ee){for(var we=[[]],se=[ee],_e=[0],et=[ee.length],at=0,ut=0,Lt=[],Qe=[Lt];ut>-1;){for(;(at=_e[ut]++)<et[ut];){var dt=void 0,It=we[ut],Ue=se[ut],Ge=Ue[at];if(typeof Ge=="string"?(It=ut>0?It:["plain"],dt=Ge):(It=Be(It,Ge.type),Ge.alias&&(It=Be(It,Ge.alias)),dt=Ge.content),typeof dt!="string"){ut++,we.push(It),se.push(dt),_e.push(0),et.push(dt.length);continue}var nt=dt.split(Oe),bt=nt.length;Lt.push({types:It,content:nt[0]});for(var ot=1;ot<bt;ot++)Se(Lt),Qe.push(Lt=[]),Lt.push({types:It,content:nt[ot]})}ut--,we.pop(),se.pop(),_e.pop(),et.pop()}return Se(Lt),Qe},S=function(ee,we){var se=ee.plain,_e=Object.create(null),et=ee.styles.reduce(function(at,ut){var Lt=ut.languages,Qe=ut.style;return Lt&&!Lt.includes(we)||ut.types.forEach(function(dt){var It=ie({},at[dt],Qe);at[dt]=It}),at},_e);return et.root=se,et.plain=ie({},se,{backgroundColor:null}),et};function g(ee,we){var se={};for(var _e in ee)Object.prototype.hasOwnProperty.call(ee,_e)&&we.indexOf(_e)===-1&&(se[_e]=ee[_e]);return se}var I=function(ee){function we(){for(var se=this,_e=[],et=arguments.length;et--;)_e[et]=arguments[et];ee.apply(this,_e),X(this,"getThemeDict",function(at){if(se.themeDict!==void 0&&at.theme===se.prevTheme&&at.language===se.prevLanguage)return se.themeDict;se.prevTheme=at.theme,se.prevLanguage=at.language;var ut=at.theme?S(at.theme,at.language):void 0;return se.themeDict=ut}),X(this,"getLineProps",function(at){var ut=at.key,Lt=at.className,Qe=at.style,dt=g(at,["key","className","style","line"]),It=dt,Ue=ie({},It,{className:"token-line",style:void 0,key:void 0}),Ge=se.getThemeDict(se.props);return Ge!==void 0&&(Ue.style=Ge.plain),Qe!==void 0&&(Ue.style=Ue.style!==void 0?ie({},Ue.style,Qe):Qe),ut!==void 0&&(Ue.key=ut),Lt&&(Ue.className+=" "+Lt),Ue}),X(this,"getStyleForToken",function(at){var ut=at.types,Lt=at.empty,Qe=ut.length,dt=se.getThemeDict(se.props);if(dt!==void 0){{if(Qe===1&&ut[0]==="plain")return Lt?{display:"inline-block"}:void 0;if(Qe===1&&!Lt)return dt[ut[0]]}var It=Lt?{display:"inline-block"}:{},Ue=ut.map(function(Ge){return dt[Ge]});return Object.assign.apply(Object,[It].concat(Ue))}}),X(this,"getTokenProps",function(at){var ut=at.key,Lt=at.className,Qe=at.style,dt=at.token,It=g(at,["key","className","style","token"]),Ue=It,Ge=ie({},Ue,{className:"token "+dt.types.join(" "),children:dt.content,style:se.getStyleForToken(dt),key:void 0});return Qe!==void 0&&(Ge.style=Ge.style!==void 0?ie({},Ge.style,Qe):Qe),ut!==void 0&&(Ge.key=ut),Lt&&(Ge.className+=" "+Lt),Ge}),X(this,"tokenize",function(at,ut,Lt,Qe){var dt={code:ut,grammar:Lt,language:Qe,tokens:[]};at.hooks.run("before-tokenize",dt);var It=dt.tokens=at.tokenize(dt.code,dt.grammar,dt.language);return at.hooks.run("after-tokenize",dt),It})}return ee&&(we.__proto__=ee),we.prototype=Object.create(ee&&ee.prototype),we.prototype.constructor=we,we.prototype.render=function(){var _e=this.props,et=_e.Prism,at=_e.language,ut=_e.code,Lt=_e.children,Qe=this.getThemeDict(this.props),dt=et.languages[at],It=dt!==void 0?this.tokenize(et,ut,dt,at):[ut],Ue=ue(It);return Lt({tokens:Ue,className:"prism-code language-"+at,style:Qe!==void 0?Qe.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},we}(i.Component),k=I,P=e(26575),D=e.n(P),oe=e(23187),he=e.n(oe),Re=e(75553),re=e.n(Re),Ee=e(41049),Ve=e.n(Ee),Xe=e(5026),Ze=e.n(Xe),ht=e(83357),Ct=e.n(ht),Bt=e(59137),pr={};pr.styleTagTransform=Ct(),pr.setAttributes=Ve(),pr.insert=re().bind(null,"head"),pr.domAPI=he(),pr.insertStyleElement=Ze();var $r=D()(Bt.Z,pr),tn=Bt.Z&&Bt.Z.locals?Bt.Z.locals:void 0,tt=e(74855),Ie=e(73834),be={};be.styleTagTransform=Ct(),be.setAttributes=Ve(),be.insert=re().bind(null,"head"),be.domAPI=he(),be.insertStyleElement=Ze();var ye=D()(Ie.Z,be),je=Ie.Z&&Ie.Z.locals?Ie.Z.locals:void 0;function fe(){return fe=Object.assign?Object.assign.bind():function(ee){for(var we=1;we<arguments.length;we++){var se=arguments[we];for(var _e in se)Object.prototype.hasOwnProperty.call(se,_e)&&(ee[_e]=se[_e])}return ee},fe.apply(this,arguments)}function me(ee,we){return it(ee)||st(ee,we)||ge(ee,we)||de()}function de(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ge(ee,we){if(ee){if(typeof ee=="string")return Me(ee,we);var se=Object.prototype.toString.call(ee).slice(8,-1);if(se==="Object"&&ee.constructor&&(se=ee.constructor.name),se==="Map"||se==="Set")return Array.from(ee);if(se==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(se))return Me(ee,we)}}function Me(ee,we){(we==null||we>ee.length)&&(we=ee.length);for(var se=0,_e=new Array(we);se<we;se++)_e[se]=ee[se];return _e}function st(ee,we){var se=ee==null?null:typeof Symbol!="undefined"&&ee[Symbol.iterator]||ee["@@iterator"];if(se!=null){var _e=[],et=!0,at=!1,ut,Lt;try{for(se=se.call(ee);!(et=(ut=se.next()).done)&&(_e.push(ut.value),!(we&&_e.length===we));et=!0);}catch(Qe){at=!0,Lt=Qe}finally{try{!et&&se.return!=null&&se.return()}finally{if(at)throw Lt}}return _e}}function it(ee){if(Array.isArray(ee))return ee}var ft={acss:"css",axml:"markup"},Mt=function(we){var se=we.children,_e=se===void 0?"":se,et=we.lang,at=we.highlightLines,ut=at===void 0?[]:at,Lt=(0,i.useRef)(),Qe=(0,i.useState)(!1),dt=me(Qe,2),It=dt[0],Ue=dt[1];return i.createElement("div",{className:"dumi-default-source-code"},i.createElement(tt.CopyToClipboard,{text:_e,onCopy:function(){Ue(!0),clearTimeout(Lt.current),Lt.current=window.setTimeout(function(){return Ue(!1)},2e3)}},i.createElement("button",{type:"button",className:"dumi-default-source-code-copy","data-copied":It||void 0},It?i.createElement(h,null):i.createElement(B,null))),i.createElement(k,fe({},Q,{code:_e.trim(),language:ft[et]||et,theme:void 0}),function(Ge){var nt=Ge.className,bt=Ge.style,ot=Ge.tokens,kt=Ge.getLineProps,Wt=Ge.getTokenProps;return i.createElement("pre",{className:nt,style:bt},ot.map(function(Kt,Cr){return i.createElement("div",fe({key:String(Cr)},kt({line:Kt,key:Cr,className:H()({highlighted:ut.includes(Cr+1)})})),Kt.map(function(Pr,xn){return i.createElement("span",fe({key:String(Cr)},Wt({token:Pr,key:xn})))}))}))}))},Ft=Mt},26575:function(s){"use strict";var f=[];function e(o){for(var n=-1,d=0;d<f.length;d++)if(f[d].identifier===o){n=d;break}return n}function i(o,n){for(var d={},v=[],p=0;p<o.length;p++){var h=o[p],x=n.base?h[0]+n.base:h[0],y=d[x]||0,b="".concat(x," ").concat(y);d[x]=y+1;var T=e(b),A={css:h[1],media:h[2],sourceMap:h[3],supports:h[4],layer:h[5]};if(T!==-1)f[T].references++,f[T].updater(A);else{var C=u(A,n);n.byIndex=p,f.splice(p,0,{identifier:b,updater:C,references:1})}v.push(b)}return v}function u(o,n){var d=n.domAPI(n);d.update(o);var v=function(h){if(h){if(h.css===o.css&&h.media===o.media&&h.sourceMap===o.sourceMap&&h.supports===o.supports&&h.layer===o.layer)return;d.update(o=h)}else d.remove()};return v}s.exports=function(o,n){n=n||{},o=o||[];var d=i(o,n);return function(p){p=p||[];for(var h=0;h<d.length;h++){var x=d[h],y=e(x);f[y].references--}for(var b=i(p,n),T=0;T<d.length;T++){var A=d[T],C=e(A);f[C].references===0&&(f[C].updater(),f.splice(C,1))}d=b}}},75553:function(s){"use strict";var f={};function e(u){if(typeof f[u]=="undefined"){var o=document.querySelector(u);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}f[u]=o}return f[u]}function i(u,o){var n=e(u);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(o)}s.exports=i},5026:function(s){"use strict";function f(e){var i=document.createElement("style");return e.setAttributes(i,e.attributes),e.insert(i,e.options),i}s.exports=f},41049:function(s,f,e){"use strict";function i(u){var o=e.nc;o&&u.setAttribute("nonce",o)}s.exports=i},23187:function(s){"use strict";function f(u,o,n){var d="";n.supports&&(d+="@supports (".concat(n.supports,") {")),n.media&&(d+="@media ".concat(n.media," {"));var v=typeof n.layer!="undefined";v&&(d+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),d+=n.css,v&&(d+="}"),n.media&&(d+="}"),n.supports&&(d+="}");var p=n.sourceMap;p&&typeof btoa!="undefined"&&(d+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(p))))," */")),o.styleTagTransform(d,u,o.options)}function e(u){if(u.parentNode===null)return!1;u.parentNode.removeChild(u)}function i(u){var o=u.insertStyleElement(u);return{update:function(d){f(o,u,d)},remove:function(){e(o)}}}s.exports=i},83357:function(s){"use strict";function f(e,i){if(i.styleSheet)i.styleSheet.cssText=e;else{for(;i.firstChild;)i.removeChild(i.firstChild);i.appendChild(document.createTextNode(e))}}s.exports=f},34162:function(s,f,e){"use strict";e.d(f,{Il:function(){return o},Ov:function(){return n}});var i=e(67294),u=null,o=i.createContext({});function n(){return i.useContext(o)}function d(){var x=useLocation(),y=n(),b=y.clientRoutes,T=matchRoutes(b,x.pathname);return T||[]}function v(){var x,y=d().slice(-1),b=((x=y[0])===null||x===void 0?void 0:x.route)||{},T=b.element,A=_objectWithoutProperties(b,u);return A}function p(){var x=useRouteData(),y=n();return{data:y.serverLoaderData[x.route.id]}}function h(){var x=useRouteData(),y=n();return{data:y.clientLoaderData[x.route.id]}}},59918:function(s,f,e){"use strict";e.d(f,{Q:function(){return o},X:function(){return u}});var i=e(67294),u=i.createContext(void 0);function o(){return i.useContext(u)}},94184:function(s,f){var e,i;(function(){"use strict";var u={}.hasOwnProperty,o="[native code]";function n(){for(var d=[],v=0;v<arguments.length;v++){var p=arguments[v];if(p){var h=typeof p;if(h==="string"||h==="number")d.push(p);else if(Array.isArray(p)){if(p.length){var x=n.apply(null,p);x&&d.push(x)}}else if(h==="object"){if(p.toString!==Object.prototype.toString&&!p.toString.toString().includes("[native code]")){d.push(p.toString());continue}for(var y in p)u.call(p,y)&&p[y]&&d.push(y)}}}return d.join(" ")}s.exports?(n.default=n,s.exports=n):(e=[],i=function(){return n}.apply(f,e),i!==void 0&&(s.exports=i))})()},19661:function(s,f,e){"use strict";Object.defineProperty(f,"__esModule",{value:!0}),f.getParameters=void 0;var i=e(26961);function u(n){return i.compressToBase64(n).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function o(n){return u(JSON.stringify(n))}f.getParameters=o},12662:function(s,f,e){"use strict";var i;i=!0,f.Z=void 0;var u=e(19661);f.Z=u.getParameters},20640:function(s,f,e){"use strict";var i=e(11742),u={"text/plain":"Text","text/html":"Url",default:"Text"},o="Copy to clipboard: #{key}, Enter";function n(v){var p=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return v.replace(/#{\s*key\s*}/g,p)}function d(v,p){var h,x,y,b,T,A,C=!1;p||(p={}),h=p.debug||!1;try{y=i(),b=document.createRange(),T=document.getSelection(),A=document.createElement("span"),A.textContent=v,A.ariaHidden="true",A.style.all="unset",A.style.position="fixed",A.style.top=0,A.style.clip="rect(0, 0, 0, 0)",A.style.whiteSpace="pre",A.style.webkitUserSelect="text",A.style.MozUserSelect="text",A.style.msUserSelect="text",A.style.userSelect="text",A.addEventListener("copy",function(B){if(B.stopPropagation(),p.format)if(B.preventDefault(),typeof B.clipboardData=="undefined"){h&&console.warn("unable to use e.clipboardData"),h&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var L=u[p.format]||u.default;window.clipboardData.setData(L,v)}else B.clipboardData.clearData(),B.clipboardData.setData(p.format,v);p.onCopy&&(B.preventDefault(),p.onCopy(B.clipboardData))}),document.body.appendChild(A),b.selectNodeContents(A),T.addRange(b);var $=document.execCommand("copy");if(!$)throw new Error("copy command was unsuccessful");C=!0}catch(B){h&&console.error("unable to copy using execCommand: ",B),h&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(p.format||"text",v),p.onCopy&&p.onCopy(window.clipboardData),C=!0}catch(L){h&&console.error("unable to copy using clipboardData: ",L),h&&console.error("falling back to prompt"),x=n("message"in p?p.message:o),window.prompt(x,v)}}finally{T&&(typeof T.removeRange=="function"?T.removeRange(b):T.removeAllRanges()),A&&document.body.removeChild(A),y()}return C}s.exports=d},19662:function(s,f,e){var i=e(60614),u=e(66330),o=TypeError;s.exports=function(n){if(i(n))return n;throw o(u(n)+" is not a function")}},39483:function(s,f,e){var i=e(4411),u=e(66330),o=TypeError;s.exports=function(n){if(i(n))return n;throw o(u(n)+" is not a constructor")}},40027:function(s,f,e){var i=e(75706).has;s.exports=function(u){return i(u),u}},96077:function(s,f,e){var i=e(60614),u=String,o=TypeError;s.exports=function(n){if(typeof n=="object"||i(n))return n;throw o("Can't set "+u(n)+" as a prototype")}},88999:function(s,f,e){var i=e(79405).has;s.exports=function(u){return i(u),u}},29257:function(s,f,e){var i=e(60953).has;s.exports=function(u){return i(u),u}},72682:function(s,f,e){var i=e(78818).has;s.exports=function(u){return i(u),u}},8557:function(s,f,e){var i=e(1702),u=e(49974),o=e(19670),n=e(68554),d=e(58173),v=e(5112),p=v("asyncDispose"),h=v("dispose"),x=i([].push),y=function(T,A){return A=="async-dispose"&&d(T,p)||d(T,h)},b=function(T,A,C){return u(C||y(T,A),T)};s.exports=function(T,A,C,$){var B;if($)n(A)?B=b(void 0,C,$):B=b(o(A),C,$);else{if(n(A))return;B=b(A,C)}x(T.stack,B)}},51223:function(s,f,e){var i=e(5112),u=e(70030),o=e(3070).f,n=i("unscopables"),d=Array.prototype;d[n]==null&&o(d,n,{configurable:!0,value:u(null)}),s.exports=function(v){d[n][v]=!0}},25787:function(s,f,e){var i=e(47976),u=TypeError;s.exports=function(o,n){if(i(n,o))return o;throw u("Incorrect invocation")}},19670:function(s,f,e){var i=e(70111),u=String,o=TypeError;s.exports=function(n){if(i(n))return n;throw o(u(n)+" is not an object")}},23013:function(s){s.exports=typeof ArrayBuffer!="undefined"&&typeof DataView!="undefined"},7556:function(s,f,e){var i=e(47293);s.exports=i(function(){if(typeof ArrayBuffer=="function"){var u=new ArrayBuffer(8);Object.isExtensible(u)&&Object.defineProperty(u,"a",{value:8})}})},90260:function(s,f,e){"use strict";var i=e(23013),u=e(19781),o=e(17854),n=e(60614),d=e(70111),v=e(92597),p=e(70648),h=e(66330),x=e(68880),y=e(98052),b=e(47045),T=e(47976),A=e(79518),C=e(27674),$=e(5112),B=e(69711),L=e(29909),z=L.enforce,H=L.get,W=o.Int8Array,R=W&&W.prototype,F=o.Uint8ClampedArray,V=F&&F.prototype,q=W&&A(W),Q=R&&A(R),X=Object.prototype,ie=o.TypeError,Oe=$("toStringTag"),Se=B("TYPED_ARRAY_TAG"),Be="TypedArrayConstructor",ue=i&&!!C&&p(o.opera)!=="Opera",S=!1,g,I,k,P={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},D={BigInt64Array:8,BigUint64Array:8},oe=function(ht){if(!d(ht))return!1;var Ct=p(ht);return Ct==="DataView"||v(P,Ct)||v(D,Ct)},he=function(Ze){var ht=A(Ze);if(d(ht)){var Ct=H(ht);return Ct&&v(Ct,Be)?Ct[Be]:he(ht)}},Re=function(Ze){if(!d(Ze))return!1;var ht=p(Ze);return v(P,ht)||v(D,ht)},re=function(Ze){if(Re(Ze))return Ze;throw ie("Target is not a typed array")},Ee=function(Ze){if(n(Ze)&&(!C||T(q,Ze)))return Ze;throw ie(h(Ze)+" is not a typed array constructor")},Ve=function(Ze,ht,Ct,Bt){if(u){if(Ct)for(var pr in P){var $r=o[pr];if($r&&v($r.prototype,Ze))try{delete $r.prototype[Ze]}catch(tn){try{$r.prototype[Ze]=ht}catch(tt){}}}(!Q[Ze]||Ct)&&y(Q,Ze,Ct?ht:ue&&R[Ze]||ht,Bt)}},Xe=function(Ze,ht,Ct){var Bt,pr;if(u){if(C){if(Ct){for(Bt in P)if(pr=o[Bt],pr&&v(pr,Ze))try{delete pr[Ze]}catch($r){}}if(!q[Ze]||Ct)try{return y(q,Ze,Ct?ht:ue&&q[Ze]||ht)}catch($r){}else return}for(Bt in P)pr=o[Bt],pr&&(!pr[Ze]||Ct)&&y(pr,Ze,ht)}};for(g in P)I=o[g],k=I&&I.prototype,k?z(k)[Be]=I:ue=!1;for(g in D)I=o[g],k=I&&I.prototype,k&&(z(k)[Be]=I);if((!ue||!n(q)||q===Function.prototype)&&(q=function(){throw ie("Incorrect invocation")},ue))for(g in P)o[g]&&C(o[g],q);if((!ue||!Q||Q===X)&&(Q=q.prototype,ue))for(g in P)o[g]&&C(o[g].prototype,Q);if(ue&&A(V)!==Q&&C(V,Q),u&&!v(Q,Oe)){S=!0,b(Q,Oe,{configurable:!0,get:function(){return d(this)?this[Se]:void 0}});for(g in P)o[g]&&x(o[g],Se,g)}s.exports={NATIVE_ARRAY_BUFFER_VIEWS:ue,TYPED_ARRAY_TAG:S&&Se,aTypedArray:re,aTypedArrayConstructor:Ee,exportTypedArrayMethod:Ve,exportTypedArrayStaticMethod:Xe,getTypedArrayConstructor:he,isView:oe,isTypedArray:Re,TypedArray:q,TypedArrayPrototype:Q}},33253:function(s,f,e){"use strict";var i=e(49974),u=e(1702),o=e(47908),n=e(4411),d=e(54777),v=e(18554),p=e(24942),h=e(71246),x=e(58173),y=e(98770),b=e(35005),T=e(5112),A=e(28091),C=e(12269).toArray,$=T("asyncIterator"),B=u(y("Array").values),L=u(B([]).next),z=function(){return new H(this)},H=function(W){this.iterator=B(W)};H.prototype.next=function(){return L(this.iterator)},s.exports=function(R){var F=this,V=arguments.length,q=V>1?arguments[1]:void 0,Q=V>2?arguments[2]:void 0;return new(b("Promise"))(function(X){var ie=o(R);q!==void 0&&(q=i(q,Q));var Oe=x(ie,$),Se=Oe?void 0:h(ie)||z,Be=n(F)?new F:[],ue=Oe?d(ie,Oe):new A(p(v(ie,Se)));X(C(ue,q,Be))})}},97745:function(s,f,e){var i=e(26244);s.exports=function(u,o){for(var n=0,d=i(o),v=new u(d);d>n;)v[n]=o[n++];return v}},59921:function(s,f,e){"use strict";var i=e(49974),u=e(1702),o=e(68361),n=e(47908),d=e(26244),v=e(75706),p=v.Map,h=v.get,x=v.has,y=v.set,b=u([].push);s.exports=function(A){for(var C=n(this),$=o(C),B=i(A,arguments.length>1?arguments[1]:void 0),L=new p,z=d($),H=0,W,R;z>H;H++)R=$[H],W=B(R,H,C),x(L,W)?b(h(L,W),R):y(L,W,[R]);return L}},21191:function(s,f,e){var i=e(49974),u=e(1702),o=e(68361),n=e(47908),d=e(34948),v=e(26244),p=e(70030),h=e(97745),x=Array,y=u([].push);s.exports=function(b,T,A,C){for(var $=n(b),B=o($),L=i(T,A),z=p(null),H=v(B),W=0,R,F,V;H>W;W++)V=B[W],F=d(L(V,W,$)),F in z?y(z[F],V):z[F]=[V];if(C&&(R=C($),R!==x))for(F in z)z[F]=h(R,z[F]);return z}},41318:function(s,f,e){var i=e(45656),u=e(51400),o=e(26244),n=function(d){return function(v,p,h){var x=i(v),y=o(x),b=u(h,y),T;if(d&&p!=p){for(;y>b;)if(T=x[b++],T!=T)return!0}else for(;y>b;b++)if((d||b in x)&&x[b]===p)return d||b||0;return!d&&-1}};s.exports={includes:n(!0),indexOf:n(!1)}},9671:function(s,f,e){var i=e(49974),u=e(68361),o=e(47908),n=e(26244),d=function(v){var p=v==1;return function(h,x,y){for(var b=o(h),T=u(b),A=i(x,y),C=n(T),$,B;C-- >0;)if($=T[C],B=A($,C,b),B)switch(v){case 0:return $;case 1:return C}return p?-1:void 0}};s.exports={findLast:d(0),findLastIndex:d(1)}},42092:function(s,f,e){var i=e(49974),u=e(1702),o=e(68361),n=e(47908),d=e(26244),v=e(65417),p=u([].push),h=function(x){var y=x==1,b=x==2,T=x==3,A=x==4,C=x==6,$=x==7,B=x==5||C;return function(L,z,H,W){for(var R=n(L),F=o(R),V=i(z,H),q=d(F),Q=0,X=W||v,ie=y?X(L,q):b||$?X(L,0):void 0,Oe,Se;q>Q;Q++)if((B||Q in F)&&(Oe=F[Q],Se=V(Oe,Q,R),x))if(y)ie[Q]=Se;else if(Se)switch(x){case 3:return!0;case 5:return Oe;case 6:return Q;case 2:p(ie,Oe)}else switch(x){case 4:return!1;case 7:p(ie,Oe)}return C?-1:T||A?A:ie}};s.exports={forEach:h(0),map:h(1),filter:h(2),some:h(3),every:h(4),find:h(5),findIndex:h(6),filterReject:h(7)}},9341:function(s,f,e){"use strict";var i=e(47293);s.exports=function(u,o){var n=[][u];return!!n&&i(function(){n.call(null,o||function(){return 1},1)})}},53671:function(s,f,e){var i=e(19662),u=e(47908),o=e(68361),n=e(26244),d=TypeError,v=function(p){return function(h,x,y,b){i(x);var T=u(h),A=o(T),C=n(T),$=p?C-1:0,B=p?-1:1;if(y<2)for(;;){if($ in A){b=A[$],$+=B;break}if($+=B,p?$<0:C<=$)throw d("Reduce of empty array with no initial value")}for(;p?$>=0:C>$;$+=B)$ in A&&(b=x(b,A[$],$,T));return b}};s.exports={left:v(!1),right:v(!0)}},83658:function(s,f,e){"use strict";var i=e(19781),u=e(43157),o=TypeError,n=Object.getOwnPropertyDescriptor,d=i&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(v){return v instanceof TypeError}}();s.exports=d?function(v,p){if(u(v)&&!n(v,"length").writable)throw o("Cannot set read only .length");return v.length=p}:function(v,p){return v.length=p}},41589:function(s,f,e){var i=e(51400),u=e(26244),o=e(86135),n=Array,d=Math.max;s.exports=function(v,p,h){for(var x=u(v),y=i(p,x),b=i(h===void 0?x:h,x),T=n(d(b-y,0)),A=0;y<b;y++,A++)o(T,A,v[y]);return T.length=A,T}},50206:function(s,f,e){var i=e(1702);s.exports=i([].slice)},77475:function(s,f,e){var i=e(43157),u=e(4411),o=e(70111),n=e(5112),d=n("species"),v=Array;s.exports=function(p){var h;return i(p)&&(h=p.constructor,u(h)&&(h===v||i(h.prototype))?h=void 0:o(h)&&(h=h[d],h===null&&(h=void 0))),h===void 0?v:h}},65417:function(s,f,e){var i=e(77475);s.exports=function(u,o){return new(i(u))(o===0?0:o)}},21843:function(s,f,e){var i=e(26244);s.exports=function(u,o){for(var n=i(u),d=new o(n),v=0;v<n;v++)d[v]=u[n-v-1];return d}},60956:function(s,f,e){"use strict";var i=e(1702),u=e(19662),o=e(68554),n=e(26244),d=e(47908),v=e(75706),p=e(14995),h=v.Map,x=v.has,y=v.set,b=i([].push);s.exports=function(A){var C=d(this),$=n(C),B=[],L=new h,z=o(A)?function(F){return F}:u(A),H,W,R;for(H=0;H<$;H++)W=C[H],R=z(W),x(L,R)||y(L,R,W);return p(L,function(F){b(B,F)}),B}},11572:function(s,f,e){var i=e(26244),u=e(19303),o=RangeError;s.exports=function(n,d,v,p){var h=i(n),x=u(v),y=x<0?h+x:x;if(y>=h||y<0)throw o("Incorrect index");for(var b=new d(h),T=0;T<h;T++)b[T]=T===y?p:n[T];return b}},28091:function(s,f,e){"use strict";var i=e(46916),u=e(19670),o=e(70030),n=e(58173),d=e(89190),v=e(29909),p=e(35005),h=e(66462),x=e(76178),y=p("Promise"),b="AsyncFromSyncIterator",T=v.set,A=v.getterFor(b),C=function(B,L,z){var H=B.done;y.resolve(B.value).then(function(W){L(x(W,H))},z)},$=function(L){L.type=b,T(this,L)};$.prototype=d(o(h),{next:function(){var L=A(this);return new y(function(z,H){var W=u(i(L.next,L.iterator));C(W,z,H)})},return:function(){var B=A(this).iterator;return new y(function(L,z){var H=n(B,"return");if(H===void 0)return L(x(void 0,!0));var W=u(i(H,B));C(W,L,z)})}}),s.exports=$},21753:function(s,f,e){var i=e(46916),u=e(35005),o=e(58173);s.exports=function(n,d,v,p){try{var h=o(n,"return");if(h)return u("Promise").resolve(i(h,n)).then(function(){d(v)},function(x){p(x)})}catch(x){return p(x)}d(v)}},45348:function(s,f,e){"use strict";var i=e(46916),u=e(12534),o=e(19670),n=e(70030),d=e(68880),v=e(89190),p=e(5112),h=e(29909),x=e(35005),y=e(58173),b=e(66462),T=e(76178),A=e(99212),C=x("Promise"),$=p("toStringTag"),B="AsyncIteratorHelper",L="WrapForValidAsyncIterator",z=h.set,H=function(F){var V=!F,q=h.getterFor(F?L:B),Q=function(X){var ie=u(function(){return q(X)}),Oe=ie.error,Se=ie.value;return Oe||V&&Se.done?{exit:!0,value:Oe?C.reject(Se):C.resolve(T(void 0,!0))}:{exit:!1,value:Se}};return v(n(b),{next:function(){var ie=Q(this),Oe=ie.value;if(ie.exit)return Oe;var Se=u(function(){return o(Oe.nextHandler(C))}),Be=Se.error,ue=Se.value;return Be&&(Oe.done=!0),Be?C.reject(ue):C.resolve(ue)},return:function(){var X=Q(this),ie=X.value;if(X.exit)return ie;ie.done=!0;var Oe=ie.iterator,Se,Be,ue=u(function(){if(ie.inner)try{A(ie.inner.iterator,"normal")}catch(S){return A(Oe,"throw",S)}return y(Oe,"return")});return Se=Be=ue.value,ue.error?C.reject(Be):Se===void 0?C.resolve(T(void 0,!0)):(ue=u(function(){return i(Se,Oe)}),Be=ue.value,ue.error?C.reject(Be):F?C.resolve(Be):C.resolve(Be).then(function(S){return o(S),T(void 0,!0)}))}})},W=H(!0),R=H(!1);d(R,$,"Async Iterator Helper"),s.exports=function(F,V){var q=function(X,ie){ie?(ie.iterator=X.iterator,ie.next=X.next):ie=X,ie.type=V?L:B,ie.nextHandler=F,ie.counter=0,ie.done=!1,z(this,ie)};return q.prototype=V?W:R,q}},47520:function(s,f,e){"use strict";var i=e(46916),u=e(13232),o=function(n,d){return[d,n]};s.exports=function(){return i(u,this,o)}},12269:function(s,f,e){"use strict";var i=e(46916),u=e(19662),o=e(19670),n=e(70111),d=e(7207),v=e(35005),p=e(24942),h=e(21753),x=function(y){var b=y==0,T=y==1,A=y==2,C=y==3;return function($,B,L){var z=p($),H=v("Promise"),W=z.iterator,R=z.next,F=0,V=B!==void 0;return(V||!b)&&u(B),new H(function(q,Q){var X=function(Oe){h(W,Q,Oe,Q)},ie=function(){try{if(V)try{d(F)}catch(Oe){X(Oe)}H.resolve(o(i(R,W))).then(function(Oe){try{if(o(Oe).done)b?(L.length=F,q(L)):q(C?!1:A||void 0);else{var Se=Oe.value;try{if(V){var Be=B(Se,F),ue=function(S){if(T)ie();else if(A)S?ie():h(W,q,!1,Q);else if(b)try{L[F++]=S,ie()}catch(g){X(g)}else S?h(W,q,C||Se,Q):ie()};n(Be)?H.resolve(Be).then(ue,X):ue(Be)}else L[F++]=Se,ie()}catch(S){X(S)}}}catch(S){Q(S)}},Q)}catch(Oe){Q(Oe)}};ie()})}};s.exports={toArray:x(0),forEach:x(1),every:x(2),some:x(3),find:x(4)}},13232:function(s,f,e){"use strict";var i=e(46916),u=e(19662),o=e(19670),n=e(70111),d=e(24942),v=e(45348),p=e(76178),h=e(21753),x=v(function(y){var b=this,T=b.iterator,A=b.mapper;return new y(function(C,$){var B=function(z){b.done=!0,$(z)},L=function(z){h(T,B,z,B)};y.resolve(o(i(b.next,T))).then(function(z){try{if(o(z).done)b.done=!0,C(p(void 0,!0));else{var H=z.value;try{var W=A(H,b.counter++),R=function(F){C(p(F,!1))};n(W)?y.resolve(W).then(R,L):R(W)}catch(F){L(F)}}}catch(F){B(F)}},B)})});s.exports=function(b){return new x(d(this),{mapper:u(b)})}},66462:function(s,f,e){var i=e(17854),u=e(5465),o=e(60614),n=e(70030),d=e(79518),v=e(98052),p=e(5112),h=e(31913),x="USE_FUNCTION_CONSTRUCTOR",y=p("asyncIterator"),b=i.AsyncIterator,T=u.AsyncIteratorPrototype,A,C;if(T)A=T;else if(o(b))A=b.prototype;else if(u[x]||i[x])try{C=d(d(d(Function("return async function*(){}()")()))),d(C)===Object.prototype&&(A=C)}catch($){}A?h&&(A=n(A)):A={},o(A[y])||v(A,y,function(){return this}),s.exports=A},86221:function(s,f,e){var i=e(46916),u=e(45348);s.exports=u(function(){return i(this.next,this.iterator)},!0)},53411:function(s,f,e){var i=e(19670),u=e(99212);s.exports=function(o,n,d,v){try{return v?n(i(d)[0],d[1]):n(d)}catch(p){u(o,"throw",p)}}},17072:function(s,f,e){var i=e(5112),u=i("iterator"),o=!1;try{var n=0,d={next:function(){return{done:!!n++}},return:function(){o=!0}};d[u]=function(){return this},Array.from(d,function(){throw 2})}catch(v){}s.exports=function(v,p){if(!p&&!o)return!1;var h=!1;try{var x={};x[u]=function(){return{next:function(){return{done:h=!0}}}},v(x)}catch(y){}return h}},84326:function(s,f,e){var i=e(1702),u=i({}.toString),o=i("".slice);s.exports=function(n){return o(u(n),8,-1)}},70648:function(s,f,e){var i=e(51694),u=e(60614),o=e(84326),n=e(5112),d=n("toStringTag"),v=Object,p=o(function(){return arguments}())=="Arguments",h=function(x,y){try{return x[y]}catch(b){}};s.exports=i?o:function(x){var y,b,T;return x===void 0?"Undefined":x===null?"Null":typeof(b=h(y=v(x),d))=="string"?b:p?o(y):(T=o(y))=="Object"&&u(y.callee)?"Arguments":T}},27296:function(s,f,e){"use strict";var i=e(49974),u=e(46916),o=e(19662),n=e(39483),d=e(68554),v=e(20408),p=[].push;s.exports=function(x){var y=arguments.length,b=y>1?arguments[1]:void 0,T,A,C,$;return n(this),T=b!==void 0,T&&o(b),d(x)?new this:(A=[],T?(C=0,$=i(b,y>2?arguments[2]:void 0),v(x,function(B){u(p,A,$(B,C++))})):v(x,p,{that:A}),new this(A))}},82044:function(s,f,e){"use strict";var i=e(50206);s.exports=function(){return new this(i(arguments))}},95631:function(s,f,e){"use strict";var i=e(70030),u=e(47045),o=e(89190),n=e(49974),d=e(25787),v=e(68554),p=e(20408),h=e(51656),x=e(76178),y=e(96340),b=e(19781),T=e(62423).fastKey,A=e(29909),C=A.set,$=A.getterFor;s.exports={getConstructor:function(B,L,z,H){var W=B(function(Q,X){d(Q,R),C(Q,{type:L,index:i(null),first:void 0,last:void 0,size:0}),b||(Q.size=0),v(X)||p(X,Q[H],{that:Q,AS_ENTRIES:z})}),R=W.prototype,F=$(L),V=function(Q,X,ie){var Oe=F(Q),Se=q(Q,X),Be,ue;return Se?Se.value=ie:(Oe.last=Se={index:ue=T(X,!0),key:X,value:ie,previous:Be=Oe.last,next:void 0,removed:!1},Oe.first||(Oe.first=Se),Be&&(Be.next=Se),b?Oe.size++:Q.size++,ue!=="F"&&(Oe.index[ue]=Se)),Q},q=function(Q,X){var ie=F(Q),Oe=T(X),Se;if(Oe!=="F")return ie.index[Oe];for(Se=ie.first;Se;Se=Se.next)if(Se.key==X)return Se};return o(R,{clear:function(){for(var X=this,ie=F(X),Oe=ie.index,Se=ie.first;Se;)Se.removed=!0,Se.previous&&(Se.previous=Se.previous.next=void 0),delete Oe[Se.index],Se=Se.next;ie.first=ie.last=void 0,b?ie.size=0:X.size=0},delete:function(Q){var X=this,ie=F(X),Oe=q(X,Q);if(Oe){var Se=Oe.next,Be=Oe.previous;delete ie.index[Oe.index],Oe.removed=!0,Be&&(Be.next=Se),Se&&(Se.previous=Be),ie.first==Oe&&(ie.first=Se),ie.last==Oe&&(ie.last=Be),b?ie.size--:X.size--}return!!Oe},forEach:function(X){for(var ie=F(this),Oe=n(X,arguments.length>1?arguments[1]:void 0),Se;Se=Se?Se.next:ie.first;)for(Oe(Se.value,Se.key,this);Se&&Se.removed;)Se=Se.previous},has:function(X){return!!q(this,X)}}),o(R,z?{get:function(X){var ie=q(this,X);return ie&&ie.value},set:function(X,ie){return V(this,X===0?0:X,ie)}}:{add:function(X){return V(this,X=X===0?0:X,X)}}),b&&u(R,"size",{configurable:!0,get:function(){return F(this).size}}),W},setStrong:function(B,L,z){var H=L+" Iterator",W=$(L),R=$(H);h(B,L,function(F,V){C(this,{type:H,target:F,state:W(F),kind:V,last:void 0})},function(){for(var F=R(this),V=F.kind,q=F.last;q&&q.removed;)q=q.previous;return!F.target||!(F.last=q=q?q.next:F.state.first)?(F.target=void 0,x(void 0,!0)):V=="keys"?x(q.key,!1):V=="values"?x(q.value,!1):x([q.key,q.value],!1)},z?"entries":"values",!z,!0),y(L)}}},29320:function(s,f,e){"use strict";var i=e(1702),u=e(89190),o=e(62423).getWeakData,n=e(25787),d=e(19670),v=e(68554),p=e(70111),h=e(20408),x=e(42092),y=e(92597),b=e(29909),T=b.set,A=b.getterFor,C=x.find,$=x.findIndex,B=i([].splice),L=0,z=function(R){return R.frozen||(R.frozen=new H)},H=function(){this.entries=[]},W=function(R,F){return C(R.entries,function(V){return V[0]===F})};H.prototype={get:function(R){var F=W(this,R);if(F)return F[1]},has:function(R){return!!W(this,R)},set:function(R,F){var V=W(this,R);V?V[1]=F:this.entries.push([R,F])},delete:function(R){var F=$(this.entries,function(V){return V[0]===R});return~F&&B(this.entries,F,1),!!~F}},s.exports={getConstructor:function(R,F,V,q){var Q=R(function(Se,Be){n(Se,X),T(Se,{type:F,id:L++,frozen:void 0}),v(Be)||h(Be,Se[q],{that:Se,AS_ENTRIES:V})}),X=Q.prototype,ie=A(F),Oe=function(Se,Be,ue){var S=ie(Se),g=o(d(Be),!0);return g===!0?z(S).set(Be,ue):g[S.id]=ue,Se};return u(X,{delete:function(Se){var Be=ie(this);if(!p(Se))return!1;var ue=o(Se);return ue===!0?z(Be).delete(Se):ue&&y(ue,Be.id)&&delete ue[Be.id]},has:function(Be){var ue=ie(this);if(!p(Be))return!1;var S=o(Be);return S===!0?z(ue).has(Be):S&&y(S,ue.id)}}),u(X,V?{get:function(Be){var ue=ie(this);if(p(Be)){var S=o(Be);return S===!0?z(ue).get(Be):S?S[ue.id]:void 0}},set:function(Be,ue){return Oe(this,Be,ue)}}:{add:function(Be){return Oe(this,Be,!0)}}),Q}}},77710:function(s,f,e){"use strict";var i=e(82109),u=e(17854),o=e(1702),n=e(54705),d=e(98052),v=e(62423),p=e(20408),h=e(25787),x=e(60614),y=e(68554),b=e(70111),T=e(47293),A=e(17072),C=e(58003),$=e(79587);s.exports=function(B,L,z){var H=B.indexOf("Map")!==-1,W=B.indexOf("Weak")!==-1,R=H?"set":"add",F=u[B],V=F&&F.prototype,q=F,Q={},X=function(g){var I=o(V[g]);d(V,g,g=="add"?function(P){return I(this,P===0?0:P),this}:g=="delete"?function(k){return W&&!b(k)?!1:I(this,k===0?0:k)}:g=="get"?function(P){return W&&!b(P)?void 0:I(this,P===0?0:P)}:g=="has"?function(P){return W&&!b(P)?!1:I(this,P===0?0:P)}:function(P,D){return I(this,P===0?0:P,D),this})},ie=n(B,!x(F)||!(W||V.forEach&&!T(function(){new F().entries().next()})));if(ie)q=z.getConstructor(L,B,H,R),v.enable();else if(n(B,!0)){var Oe=new q,Se=Oe[R](W?{}:-0,1)!=Oe,Be=T(function(){Oe.has(1)}),ue=A(function(g){new F(g)}),S=!W&&T(function(){for(var g=new F,I=5;I--;)g[R](I,I);return!g.has(-0)});ue||(q=L(function(g,I){h(g,V);var k=$(new F,g,q);return y(I)||p(I,k[R],{that:k,AS_ENTRIES:H}),k}),q.prototype=V,V.constructor=q),(Be||S)&&(X("delete"),X("has"),H&&X("get")),(S||Se)&&X(R),W&&V.clear&&delete V.clear}return Q[B]=q,i({global:!0,constructor:!0,forced:q!=F},Q),C(q,B),W||z.setStrong(q,B,H),q}},10313:function(s,f,e){e(51532),e(4129);var i=e(35005),u=e(70030),o=e(70111),n=Object,d=TypeError,v=i("Map"),p=i("WeakMap"),h=function(){this.object=null,this.symbol=null,this.primitives=null,this.objectsByIndex=u(null)};h.prototype.get=function(y,b){return this[y]||(this[y]=b())},h.prototype.next=function(y,b,T){var A=T?this.objectsByIndex[y]||(this.objectsByIndex[y]=new p):this.primitives||(this.primitives=new v),C=A.get(b);return C||A.set(b,C=new h),C};var x=new h;s.exports=function(){var y=x,b=arguments.length,T,A;for(T=0;T<b;T++)o(A=arguments[T])&&(y=y.next(T,A,!0));if(this===n&&y===x)throw d("Composite keys must contain a non-primitive component");for(T=0;T<b;T++)o(A=arguments[T])||(y=y.next(T,A,!1));return y}},99920:function(s,f,e){var i=e(92597),u=e(53887),o=e(31236),n=e(3070);s.exports=function(d,v,p){for(var h=u(v),x=n.f,y=o.f,b=0;b<h.length;b++){var T=h[b];!i(d,T)&&!(p&&i(p,T))&&x(d,T,y(v,T))}}},49920:function(s,f,e){var i=e(47293);s.exports=!i(function(){function u(){}return u.prototype.constructor=null,Object.getPrototypeOf(new u)!==u.prototype})},76178:function(s){s.exports=function(f,e){return{value:f,done:e}}},68880:function(s,f,e){var i=e(19781),u=e(3070),o=e(79114);s.exports=i?function(n,d,v){return u.f(n,d,o(1,v))}:function(n,d,v){return n[d]=v,n}},79114:function(s){s.exports=function(f,e){return{enumerable:!(f&1),configurable:!(f&2),writable:!(f&4),value:e}}},86135:function(s,f,e){"use strict";var i=e(34948),u=e(3070),o=e(79114);s.exports=function(n,d,v){var p=i(d);p in n?u.f(n,p,o(0,v)):n[p]=v}},47045:function(s,f,e){var i=e(56339),u=e(3070);s.exports=function(o,n,d){return d.get&&i(d.get,n,{getter:!0}),d.set&&i(d.set,n,{setter:!0}),u.f(o,n,d)}},98052:function(s,f,e){var i=e(60614),u=e(3070),o=e(56339),n=e(13072);s.exports=function(d,v,p,h){h||(h={});var x=h.enumerable,y=h.name!==void 0?h.name:v;if(i(p)&&o(p,y,h),h.global)x?d[v]=p:n(v,p);else{try{h.unsafe?d[v]&&(x=!0):delete d[v]}catch(b){}x?d[v]=p:u.f(d,v,{value:p,enumerable:!1,configurable:!h.nonConfigurable,writable:!h.nonWritable})}return d}},89190:function(s,f,e){var i=e(98052);s.exports=function(u,o,n){for(var d in o)i(u,d,o[d],n);return u}},13072:function(s,f,e){var i=e(17854),u=Object.defineProperty;s.exports=function(o,n){try{u(i,o,{value:n,configurable:!0,writable:!0})}catch(d){i[o]=n}return n}},19781:function(s,f,e){var i=e(47293);s.exports=!i(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7})},4154:function(s){var f=typeof document=="object"&&document.all,e=typeof f=="undefined"&&f!==void 0;s.exports={all:f,IS_HTMLDDA:e}},80317:function(s,f,e){var i=e(17854),u=e(70111),o=i.document,n=u(o)&&u(o.createElement);s.exports=function(d){return n?o.createElement(d):{}}},7207:function(s){var f=TypeError,e=9007199254740991;s.exports=function(i){if(i>e)throw f("Maximum allowed index exceeded");return i}},93678:function(s){s.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},7871:function(s,f,e){var i=e(83823),u=e(35268);s.exports=!i&&!u&&typeof window=="object"&&typeof document=="object"},89363:function(s){s.exports=typeof Bun=="function"&&Bun&&typeof Bun.version=="string"},83823:function(s){s.exports=typeof Deno=="object"&&Deno&&typeof Deno.version=="object"},6833:function(s,f,e){var i=e(88113);s.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(i)},35268:function(s,f,e){var i=e(34155),u=e(84326);s.exports=typeof i!="undefined"&&u(i)=="process"},88113:function(s){s.exports=typeof navigator!="undefined"&&String(navigator.userAgent)||""},7392:function(s,f,e){var i=e(17854),u=e(88113),o=i.process,n=i.Deno,d=o&&o.versions||n&&n.version,v=d&&d.v8,p,h;v&&(p=v.split("."),h=p[0]>0&&p[0]<4?1:+(p[0]+p[1])),!h&&u&&(p=u.match(/Edge\/(\d+)/),(!p||p[1]>=74)&&(p=u.match(/Chrome\/(\d+)/),p&&(h=+p[1]))),s.exports=h},98770:function(s,f,e){var i=e(17854);s.exports=function(u){return i[u].prototype}},80748:function(s){s.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},11060:function(s,f,e){var i=e(1702),u=Error,o=i("".replace),n=function(p){return String(u(p).stack)}("zxcasd"),d=/\n\s*at [^:]*:[^\n]*/,v=d.test(n);s.exports=function(p,h){if(v&&typeof p=="string"&&!u.prepareStackTrace)for(;h--;)p=o(p,d,"");return p}},5392:function(s,f,e){var i=e(68880),u=e(11060),o=e(22914),n=Error.captureStackTrace;s.exports=function(d,v,p,h){o&&(n?n(d,v):i(d,"stack",u(p,h)))}},22914:function(s,f,e){var i=e(47293),u=e(79114);s.exports=!i(function(){var o=Error("a");return"stack"in o?(Object.defineProperty(o,"stack",u(1,7)),o.stack!==7):!0})},82109:function(s,f,e){var i=e(17854),u=e(31236).f,o=e(68880),n=e(98052),d=e(13072),v=e(99920),p=e(54705);s.exports=function(h,x){var y=h.target,b=h.global,T=h.stat,A,C,$,B,L,z;if(b?C=i:T?C=i[y]||d(y,{}):C=(i[y]||{}).prototype,C)for($ in x){if(L=x[$],h.dontCallGetSet?(z=u(C,$),B=z&&z.value):B=C[$],A=p(b?$:y+(T?".":"#")+$,h.forced),!A&&B!==void 0){if(typeof L==typeof B)continue;v(L,B)}(h.sham||B&&B.sham)&&o(L,"sham",!0),n(C,$,L,h)}}},47293:function(s){s.exports=function(f){try{return!!f()}catch(e){return!0}}},76677:function(s,f,e){var i=e(47293);s.exports=!i(function(){return Object.isExtensible(Object.preventExtensions({}))})},22104:function(s,f,e){var i=e(34374),u=Function.prototype,o=u.apply,n=u.call;s.exports=typeof Reflect=="object"&&Reflect.apply||(i?n.bind(o):function(){return n.apply(o,arguments)})},49974:function(s,f,e){var i=e(21470),u=e(19662),o=e(34374),n=i(i.bind);s.exports=function(d,v){return u(d),v===void 0?d:o?n(d,v):function(){return d.apply(v,arguments)}}},34374:function(s,f,e){var i=e(47293);s.exports=!i(function(){var u=function(){}.bind();return typeof u!="function"||u.hasOwnProperty("prototype")})},46916:function(s,f,e){var i=e(34374),u=Function.prototype.call;s.exports=i?u.bind(u):function(){return u.apply(u,arguments)}},55040:function(s,f,e){"use strict";var i=e(1702),u=e(19662);s.exports=function(){return i(u(this))}},76530:function(s,f,e){var i=e(19781),u=e(92597),o=Function.prototype,n=i&&Object.getOwnPropertyDescriptor,d=u(o,"name"),v=d&&function(){}.name==="something",p=d&&(!i||i&&n(o,"name").configurable);s.exports={EXISTS:d,PROPER:v,CONFIGURABLE:p}},75668:function(s,f,e){var i=e(1702),u=e(19662);s.exports=function(o,n,d){try{return i(u(Object.getOwnPropertyDescriptor(o,n)[d]))}catch(v){}}},21470:function(s,f,e){var i=e(84326),u=e(1702);s.exports=function(o){if(i(o)==="Function")return u(o)}},1702:function(s,f,e){var i=e(34374),u=Function.prototype,o=u.call,n=i&&u.bind.bind(o,o);s.exports=i?n:function(d){return function(){return o.apply(d,arguments)}}},62617:function(s,f,e){var i=e(46916),u=e(60614),o=e(19670),n=e(24942),d=e(71246),v=e(58173),p=e(5112),h=e(28091),x=p("asyncIterator");s.exports=function(b){var T=o(b),A=!0,C=v(T,x),$;return u(C)||(C=d(T),A=!1),u(C)?$=i(C,T):($=T,A=!0),o($),n(A?$:new h(n($)))}},54777:function(s,f,e){var i=e(46916),u=e(28091),o=e(19670),n=e(18554),d=e(24942),v=e(58173),p=e(5112),h=p("asyncIterator");s.exports=function(x,y){var b=arguments.length<2?v(x,h):y;return b?o(i(b,x)):new u(d(n(x)))}},35005:function(s,f,e){var i=e(17854),u=e(60614),o=function(n){return u(n)?n:void 0};s.exports=function(n,d){return arguments.length<2?o(i[n]):i[n]&&i[n][d]}},24942:function(s,f,e){var i=e(19662),u=e(19670);s.exports=function(o){return{iterator:o,next:i(u(o).next)}}},72897:function(s,f,e){var i=e(46916),u=e(60614),o=e(19670),n=e(24942),d=e(71246);s.exports=function(v){var p=o(v),h=d(p);return n(o(u(h)?i(h,p):p))}},71246:function(s,f,e){var i=e(70648),u=e(58173),o=e(68554),n=e(97497),d=e(5112),v=d("iterator");s.exports=function(p){if(!o(p))return u(p,v)||u(p,"@@iterator")||n[i(p)]}},18554:function(s,f,e){var i=e(46916),u=e(19662),o=e(19670),n=e(66330),d=e(71246),v=TypeError;s.exports=function(p,h){var x=arguments.length<2?d(p):h;if(u(x))return o(i(x,p));throw v(n(p)+" is not iterable")}},58173:function(s,f,e){var i=e(19662),u=e(68554);s.exports=function(o,n){var d=o[n];return u(d)?void 0:i(d)}},738:function(s,f,e){var i=e(19662),u=e(19670),o=e(46916),n=e(19303),d=TypeError,v=Math.max,p=function(h,x,y,b){this.set=h,this.size=x,this.has=y,this.keys=b};p.prototype={getIterator:function(){return u(o(this.keys,this.set))},includes:function(h){return o(this.has,this.set,h)}},s.exports=function(h){u(h);var x=+h.size;if(x!=x)throw d("Invalid size");return new p(h,v(n(x),0),i(h.has),i(h.keys))}},10647:function(s,f,e){var i=e(1702),u=e(47908),o=Math.floor,n=i("".charAt),d=i("".replace),v=i("".slice),p=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,h=/\$([$&'`]|\d{1,2})/g;s.exports=function(x,y,b,T,A,C){var $=b+x.length,B=T.length,L=h;return A!==void 0&&(A=u(A),L=p),d(C,L,function(z,H){var W;switch(n(H,0)){case"$":return"$";case"&":return x;case"`":return v(y,0,b);case"'":return v(y,$);case"<":W=A[v(H,1,-1)];break;default:var R=+H;if(R===0)return z;if(R>B){var F=o(R/10);return F===0?z:F<=B?T[F-1]===void 0?n(H,1):T[F-1]+n(H,1):z}W=T[R-1]}return W===void 0?"":W})}},17854:function(s,f,e){var i=function(u){return u&&u.Math==Math&&u};s.exports=i(typeof globalThis=="object"&&globalThis)||i(typeof window=="object"&&window)||i(typeof self=="object"&&self)||i(typeof e.g=="object"&&e.g)||function(){return this}()||Function("return this")()},92597:function(s,f,e){var i=e(1702),u=e(47908),o=i({}.hasOwnProperty);s.exports=Object.hasOwn||function(d,v){return o(u(d),v)}},3501:function(s){s.exports={}},842:function(s){s.exports=function(f,e){try{arguments.length==1?console.error(f):console.error(f,e)}catch(i){}}},60490:function(s,f,e){var i=e(35005);s.exports=i("document","documentElement")},64664:function(s,f,e){var i=e(19781),u=e(47293),o=e(80317);s.exports=!i&&!u(function(){return Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a!=7})},68361:function(s,f,e){var i=e(1702),u=e(47293),o=e(84326),n=Object,d=i("".split);s.exports=u(function(){return!n("z").propertyIsEnumerable(0)})?function(v){return o(v)=="String"?d(v,""):n(v)}:n},79587:function(s,f,e){var i=e(60614),u=e(70111),o=e(27674);s.exports=function(n,d,v){var p,h;return o&&i(p=d.constructor)&&p!==v&&u(h=p.prototype)&&h!==v.prototype&&o(n,h),n}},42788:function(s,f,e){var i=e(1702),u=e(60614),o=e(5465),n=i(Function.toString);u(o.inspectSource)||(o.inspectSource=function(d){return n(d)}),s.exports=o.inspectSource},58340:function(s,f,e){var i=e(70111),u=e(68880);s.exports=function(o,n){i(n)&&"cause"in n&&u(o,"cause",n.cause)}},62423:function(s,f,e){var i=e(82109),u=e(1702),o=e(3501),n=e(70111),d=e(92597),v=e(3070).f,p=e(8006),h=e(1156),x=e(52050),y=e(69711),b=e(76677),T=!1,A=y("meta"),C=0,$=function(R){v(R,A,{value:{objectID:"O"+C++,weakData:{}}})},B=function(R,F){if(!n(R))return typeof R=="symbol"?R:(typeof R=="string"?"S":"P")+R;if(!d(R,A)){if(!x(R))return"F";if(!F)return"E";$(R)}return R[A].objectID},L=function(R,F){if(!d(R,A)){if(!x(R))return!0;if(!F)return!1;$(R)}return R[A].weakData},z=function(R){return b&&T&&x(R)&&!d(R,A)&&$(R),R},H=function(){W.enable=function(){},T=!0;var R=p.f,F=u([].splice),V={};V[A]=1,R(V).length&&(p.f=function(q){for(var Q=R(q),X=0,ie=Q.length;X<ie;X++)if(Q[X]===A){F(Q,X,1);break}return Q},i({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:h.f}))},W=s.exports={enable:H,fastKey:B,getWeakData:L,onFreeze:z};o[A]=!0},29909:function(s,f,e){var i=e(94811),u=e(17854),o=e(70111),n=e(68880),d=e(92597),v=e(5465),p=e(6200),h=e(3501),x="Object already initialized",y=u.TypeError,b=u.WeakMap,T,A,C,$=function(H){return C(H)?A(H):T(H,{})},B=function(H){return function(W){var R;if(!o(W)||(R=A(W)).type!==H)throw y("Incompatible receiver, "+H+" required");return R}};if(i||v.state){var L=v.state||(v.state=new b);L.get=L.get,L.has=L.has,L.set=L.set,T=function(H,W){if(L.has(H))throw y(x);return W.facade=H,L.set(H,W),W},A=function(H){return L.get(H)||{}},C=function(H){return L.has(H)}}else{var z=p("state");h[z]=!0,T=function(H,W){if(d(H,z))throw y(x);return W.facade=H,n(H,z,W),W},A=function(H){return d(H,z)?H[z]:{}},C=function(H){return d(H,z)}}s.exports={set:T,get:A,has:C,enforce:$,getterFor:B}},97659:function(s,f,e){var i=e(5112),u=e(97497),o=i("iterator"),n=Array.prototype;s.exports=function(d){return d!==void 0&&(u.Array===d||n[o]===d)}},43157:function(s,f,e){var i=e(84326);s.exports=Array.isArray||function(o){return i(o)=="Array"}},44067:function(s,f,e){var i=e(70648);s.exports=function(u){var o=i(u);return o=="BigInt64Array"||o=="BigUint64Array"}},60614:function(s,f,e){var i=e(4154),u=i.all;s.exports=i.IS_HTMLDDA?function(o){return typeof o=="function"||o===u}:function(o){return typeof o=="function"}},4411:function(s,f,e){var i=e(1702),u=e(47293),o=e(60614),n=e(70648),d=e(35005),v=e(42788),p=function(){},h=[],x=d("Reflect","construct"),y=/^\s*(?:class|function)\b/,b=i(y.exec),T=!y.exec(p),A=function(B){if(!o(B))return!1;try{return x(p,h,B),!0}catch(L){return!1}},C=function(B){if(!o(B))return!1;switch(n(B)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return T||!!b(y,v(B))}catch(L){return!0}};C.sham=!0,s.exports=!x||u(function(){var $;return A(A.call)||!A(Object)||!A(function(){$=!0})||$})?C:A},54705:function(s,f,e){var i=e(47293),u=e(60614),o=/#|\.prototype\./,n=function(x,y){var b=v[d(x)];return b==h?!0:b==p?!1:u(y)?i(y):!!y},d=n.normalize=function(x){return String(x).replace(o,".").toLowerCase()},v=n.data={},p=n.NATIVE="N",h=n.POLYFILL="P";s.exports=n},25615:function(s,f,e){var i=e(70648),u=e(92597),o=e(68554),n=e(5112),d=e(97497),v=n("iterator"),p=Object;s.exports=function(h){if(o(h))return!1;var x=p(h);return x[v]!==void 0||"@@iterator"in x||u(d,i(x))}},68554:function(s){s.exports=function(f){return f==null}},70111:function(s,f,e){var i=e(60614),u=e(4154),o=u.all;s.exports=u.IS_HTMLDDA?function(n){return typeof n=="object"?n!==null:i(n)||n===o}:function(n){return typeof n=="object"?n!==null:i(n)}},31913:function(s){s.exports=!1},47850:function(s,f,e){var i=e(70111),u=e(84326),o=e(5112),n=o("match");s.exports=function(d){var v;return i(d)&&((v=d[n])!==void 0?!!v:u(d)=="RegExp")}},52190:function(s,f,e){var i=e(35005),u=e(60614),o=e(47976),n=e(43307),d=Object;s.exports=n?function(v){return typeof v=="symbol"}:function(v){var p=i("Symbol");return u(p)&&o(p.prototype,d(v))}},6333:function(s,f,e){var i=e(46916);s.exports=function(u,o,n){for(var d=n||u.next,v,p;!(v=i(d,u)).done;)if(p=o(v.value),p!==void 0)return p}},20408:function(s,f,e){var i=e(49974),u=e(46916),o=e(19670),n=e(66330),d=e(97659),v=e(26244),p=e(47976),h=e(18554),x=e(71246),y=e(99212),b=TypeError,T=function(C,$){this.stopped=C,this.result=$},A=T.prototype;s.exports=function(C,$,B){var L=B&&B.that,z=!!(B&&B.AS_ENTRIES),H=!!(B&&B.IS_RECORD),W=!!(B&&B.IS_ITERATOR),R=!!(B&&B.INTERRUPTED),F=i($,L),V,q,Q,X,ie,Oe,Se,Be=function(S){return V&&y(V,"normal",S),new T(!0,S)},ue=function(S){return z?(o(S),R?F(S[0],S[1],Be):F(S[0],S[1])):R?F(S,Be):F(S)};if(H)V=C.iterator;else if(W)V=C;else{if(q=x(C),!q)throw b(n(C)+" is not iterable");if(d(q)){for(Q=0,X=v(C);X>Q;Q++)if(ie=ue(C[Q]),ie&&p(A,ie))return ie;return new T(!1)}V=h(C,q)}for(Oe=H?C.next:V.next;!(Se=u(Oe,V)).done;){try{ie=ue(Se.value)}catch(S){y(V,"throw",S)}if(typeof ie=="object"&&ie&&p(A,ie))return ie}return new T(!1)}},99212:function(s,f,e){var i=e(46916),u=e(19670),o=e(58173);s.exports=function(n,d,v){var p,h;u(n);try{if(p=o(n,"return"),!p){if(d==="throw")throw v;return v}p=i(p,n)}catch(x){h=!0,p=x}if(d==="throw")throw v;if(h)throw p;return u(p),v}},63061:function(s,f,e){"use strict";var i=e(13383).IteratorPrototype,u=e(70030),o=e(79114),n=e(58003),d=e(97497),v=function(){return this};s.exports=function(p,h,x,y){var b=h+" Iterator";return p.prototype=u(i,{next:o(+!y,x)}),n(p,b,!1,!0),d[b]=v,p}},54956:function(s,f,e){"use strict";var i=e(46916),u=e(70030),o=e(68880),n=e(89190),d=e(5112),v=e(29909),p=e(58173),h=e(13383).IteratorPrototype,x=e(76178),y=e(99212),b=d("toStringTag"),T="IteratorHelper",A="WrapForValidIterator",C=v.set,$=function(z){var H=v.getterFor(z?A:T);return n(u(h),{next:function(){var R=H(this);if(z)return R.nextHandler();try{var F=R.done?void 0:R.nextHandler();return x(F,R.done)}catch(V){throw R.done=!0,V}},return:function(){var W=H(this),R=W.iterator;if(W.done=!0,z){var F=p(R,"return");return F?i(F,R):x(void 0,!0)}if(W.inner)try{y(W.inner.iterator,"normal")}catch(V){return y(R,"throw",V)}return y(R,"normal"),x(void 0,!0)}})},B=$(!0),L=$(!1);o(L,b,"Iterator Helper"),s.exports=function(z,H){var W=function(F,V){V?(V.iterator=F.iterator,V.next=F.next):V=F,V.type=H?A:T,V.nextHandler=z,V.counter=0,V.done=!1,C(this,V)};return W.prototype=H?B:L,W}},51656:function(s,f,e){"use strict";var i=e(82109),u=e(46916),o=e(31913),n=e(76530),d=e(60614),v=e(63061),p=e(79518),h=e(27674),x=e(58003),y=e(68880),b=e(98052),T=e(5112),A=e(97497),C=e(13383),$=n.PROPER,B=n.CONFIGURABLE,L=C.IteratorPrototype,z=C.BUGGY_SAFARI_ITERATORS,H=T("iterator"),W="keys",R="values",F="entries",V=function(){return this};s.exports=function(q,Q,X,ie,Oe,Se,Be){v(X,Q,ie);var ue=function(re){if(re===Oe&&P)return P;if(!z&&re in I)return I[re];switch(re){case W:return function(){return new X(this,re)};case R:return function(){return new X(this,re)};case F:return function(){return new X(this,re)}}return function(){return new X(this)}},S=Q+" Iterator",g=!1,I=q.prototype,k=I[H]||I["@@iterator"]||Oe&&I[Oe],P=!z&&k||ue(Oe),D=Q=="Array"&&I.entries||k,oe,he,Re;if(D&&(oe=p(D.call(new q)),oe!==Object.prototype&&oe.next&&(!o&&p(oe)!==L&&(h?h(oe,L):d(oe[H])||b(oe,H,V)),x(oe,S,!0,!0),o&&(A[S]=V))),$&&Oe==R&&k&&k.name!==R&&(!o&&B?y(I,"name",R):(g=!0,P=function(){return u(k,this)})),Oe)if(he={values:ue(R),keys:Se?P:ue(W),entries:ue(F)},Be)for(Re in he)(z||g||!(Re in I))&&b(I,Re,he[Re]);else i({target:Q,proto:!0,forced:z||g},he);return(!o||Be)&&I[H]!==P&&b(I,H,P,{name:Oe}),A[Q]=P,he}},14323:function(s,f,e){"use strict";var i=e(46916),u=e(20487),o=function(n,d){return[d,n]};s.exports=function(){return i(u,this,o)}},20487:function(s,f,e){"use strict";var i=e(46916),u=e(19662),o=e(19670),n=e(24942),d=e(54956),v=e(53411),p=d(function(){var h=this.iterator,x=o(i(this.next,h)),y=this.done=!!x.done;if(!y)return v(h,this.mapper,[x.value,this.counter++],!0)});s.exports=function(x){return new p(n(this),{mapper:u(x)})}},13383:function(s,f,e){"use strict";var i=e(47293),u=e(60614),o=e(70111),n=e(70030),d=e(79518),v=e(98052),p=e(5112),h=e(31913),x=p("iterator"),y=!1,b,T,A;[].keys&&(A=[].keys(),"next"in A?(T=d(d(A)),T!==Object.prototype&&(b=T)):y=!0);var C=!o(b)||i(function(){var $={};return b[x].call($)!==$});C?b={}:h&&(b=n(b)),u(b[x])||v(b,x,function(){return this}),s.exports={IteratorPrototype:b,BUGGY_SAFARI_ITERATORS:y}},97497:function(s){s.exports={}},26244:function(s,f,e){var i=e(17466);s.exports=function(u){return i(u.length)}},56339:function(s,f,e){var i=e(1702),u=e(47293),o=e(60614),n=e(92597),d=e(19781),v=e(76530).CONFIGURABLE,p=e(42788),h=e(29909),x=h.enforce,y=h.get,b=String,T=Object.defineProperty,A=i("".slice),C=i("".replace),$=i([].join),B=d&&!u(function(){return T(function(){},"length",{value:8}).length!==8}),L=String(String).split("String"),z=s.exports=function(H,W,R){A(b(W),0,7)==="Symbol("&&(W="["+C(b(W),/^Symbol\(([^)]*)\)/,"$1")+"]"),R&&R.getter&&(W="get "+W),R&&R.setter&&(W="set "+W),(!n(H,"name")||v&&H.name!==W)&&(d?T(H,"name",{value:W,configurable:!0}):H.name=W),B&&R&&n(R,"arity")&&H.length!==R.arity&&T(H,"length",{value:R.arity});try{R&&n(R,"constructor")&&R.constructor?d&&T(H,"prototype",{writable:!1}):H.prototype&&(H.prototype=void 0)}catch(V){}var F=x(H);return n(F,"source")||(F.source=$(L,typeof W=="string"?W:"")),H};Function.prototype.toString=z(function(){return o(this)&&y(this).source||p(this)},"toString")},75706:function(s,f,e){var i=e(1702),u=Map.prototype;s.exports={Map,set:i(u.set),get:i(u.get),has:i(u.has),remove:i(u.delete),proto:u}},14995:function(s,f,e){var i=e(1702),u=e(6333),o=e(75706),n=o.Map,d=o.proto,v=i(d.forEach),p=i(d.entries),h=p(new n).next;s.exports=function(x,y,b){return b?u(p(x),function(T){return y(T[1],T[0])},h):v(x,y)}},8154:function(s,f,e){"use strict";var i=e(46916),u=e(19662),o=e(60614),n=e(19670),d=TypeError;s.exports=function(p,h){var x=n(this),y=u(x.get),b=u(x.has),T=u(x.set),A=arguments.length>2?arguments[2]:void 0,C;if(!o(h)&&!o(A))throw d("At least one callback required");return i(b,x,p)?(C=i(y,x,p),o(h)&&(C=h(C),i(T,x,p,C))):o(A)&&(C=A(),i(T,x,p,C)),C}},26130:function(s,f,e){var i=e(64310),u=Math.abs,o=Math.pow,n=o(2,-52),d=o(2,-23),v=o(2,127)*(2-d),p=o(2,-126),h=function(x){return x+1/n-1/n};s.exports=Math.fround||function(y){var b=+y,T=u(b),A=i(b),C,$;return T<p?A*h(T/p/d)*p*d:(C=(1+d/n)*T,$=C-(C-T),$>v||$!=$?A*(1/0):A*$)}},47103:function(s){s.exports=Math.scale||function(e,i,u,o,n){var d=+e,v=+i,p=+u,h=+o,x=+n;return d!=d||v!=v||p!=p||h!=h||x!=x?NaN:d===1/0||d===-1/0?d:(d-v)*(x-h)/(p-v)+h}},64310:function(s){s.exports=Math.sign||function(e){var i=+e;return i==0||i!=i?i:i<0?-1:1}},74758:function(s){var f=Math.ceil,e=Math.floor;s.exports=Math.trunc||function(u){var o=+u;return(o>0?e:f)(o)}},78523:function(s,f,e){"use strict";var i=e(19662),u=TypeError,o=function(n){var d,v;this.promise=new n(function(p,h){if(d!==void 0||v!==void 0)throw u("Bad Promise constructor");d=p,v=h}),this.resolve=i(d),this.reject=i(v)};s.exports.f=function(n){return new o(n)}},56277:function(s,f,e){var i=e(41340);s.exports=function(u,o){return u===void 0?arguments.length<2?"":o:i(u)}},66336:function(s){var f=RangeError;s.exports=function(e){if(e===e)return e;throw f("NaN is not allowed")}},77023:function(s,f,e){var i=e(17854),u=i.isFinite;s.exports=Number.isFinite||function(n){return typeof n=="number"&&u(n)}},83009:function(s,f,e){var i=e(17854),u=e(47293),o=e(1702),n=e(41340),d=e(53111).trim,v=e(81361),p=i.parseInt,h=i.Symbol,x=h&&h.iterator,y=/^[+-]?0x/i,b=o(y.exec),T=p(v+"08")!==8||p(v+"0x16")!==22||x&&!u(function(){p(Object(x))});s.exports=T?function(C,$){var B=d(n(C));return p(B,$>>>0||(b(y,B)?16:10))}:p},80430:function(s,f,e){"use strict";var i=e(29909),u=e(63061),o=e(76178),n=e(68554),d=e(70111),v=e(36048).f,p=e(19781),h="Incorrect Iterator.range arguments",x="NumericRangeIterator",y=i.set,b=i.getterFor(x),T=RangeError,A=TypeError,C=u(function(L,z,H,W,R,F){if(typeof L!=W||z!==1/0&&z!==-1/0&&typeof z!=W)throw A(h);if(L===1/0||L===-1/0)throw T(h);var V=z>L,q=!1,Q;if(H===void 0)Q=void 0;else if(d(H))Q=H.step,q=!!H.inclusive;else if(typeof H==W)Q=H;else throw A(h);if(n(Q)&&(Q=V?F:-F),typeof Q!=W)throw A(h);if(Q===1/0||Q===-1/0||Q===R&&L!==z)throw T(h);var X=L!=L||z!=z||Q!=Q||z>L!=Q>R;y(this,{type:x,start:L,end:z,step:Q,inclusiveEnd:q,hitsEnd:X,currentCount:R,zero:R}),p||(this.start=L,this.end=z,this.step=Q,this.inclusive=q)},x,function(){var L=b(this);if(L.hitsEnd)return o(void 0,!0);var z=L.start,H=L.end,W=L.step,R=z+W*L.currentCount++;R===H&&(L.hitsEnd=!0);var F=L.inclusiveEnd,V;return H>z?V=F?R>H:R>=H:V=F?H>R:H>=R,V?(L.hitsEnd=!0,o(void 0,!0)):o(R,!1)}),$=function(B){return{get:B,set:function(){},configurable:!0,enumerable:!1}};p&&v(C.prototype,{start:$(function(){return b(this).start}),end:$(function(){return b(this).end}),inclusive:$(function(){return b(this).inclusiveEnd}),step:$(function(){return b(this).step})}),s.exports=C},70030:function(s,f,e){var i=e(19670),u=e(36048),o=e(80748),n=e(3501),d=e(60490),v=e(80317),p=e(6200),h=">",x="<",y="prototype",b="script",T=p("IE_PROTO"),A=function(){},C=function(H){return x+b+h+H+x+"/"+b+h},$=function(H){H.write(C("")),H.close();var W=H.parentWindow.Object;return H=null,W},B=function(){var H=v("iframe"),W="java"+b+":",R;return H.style.display="none",d.appendChild(H),H.src=String(W),R=H.contentWindow.document,R.open(),R.write(C("document.F=Object")),R.close(),R.F},L,z=function(){try{L=new ActiveXObject("htmlfile")}catch(W){}z=typeof document!="undefined"?document.domain&&L?$(L):B():$(L);for(var H=o.length;H--;)delete z[y][o[H]];return z()};n[T]=!0,s.exports=Object.create||function(W,R){var F;return W!==null?(A[y]=i(W),F=new A,A[y]=null,F[T]=W):F=z(),R===void 0?F:u.f(F,R)}},36048:function(s,f,e){var i=e(19781),u=e(3353),o=e(3070),n=e(19670),d=e(45656),v=e(81956);f.f=i&&!u?Object.defineProperties:function(h,x){n(h);for(var y=d(x),b=v(x),T=b.length,A=0,C;T>A;)o.f(h,C=b[A++],y[C]);return h}},3070:function(s,f,e){var i=e(19781),u=e(64664),o=e(3353),n=e(19670),d=e(34948),v=TypeError,p=Object.defineProperty,h=Object.getOwnPropertyDescriptor,x="enumerable",y="configurable",b="writable";f.f=i?o?function(A,C,$){if(n(A),C=d(C),n($),typeof A=="function"&&C==="prototype"&&"value"in $&&b in $&&!$[b]){var B=h(A,C);B&&B[b]&&(A[C]=$.value,$={configurable:y in $?$[y]:B[y],enumerable:x in $?$[x]:B[x],writable:!1})}return p(A,C,$)}:p:function(A,C,$){if(n(A),C=d(C),n($),u)try{return p(A,C,$)}catch(B){}if("get"in $||"set"in $)throw v("Accessors not supported");return"value"in $&&(A[C]=$.value),A}},31236:function(s,f,e){var i=e(19781),u=e(46916),o=e(55296),n=e(79114),d=e(45656),v=e(34948),p=e(92597),h=e(64664),x=Object.getOwnPropertyDescriptor;f.f=i?x:function(b,T){if(b=d(b),T=v(T),h)try{return x(b,T)}catch(A){}if(p(b,T))return n(!u(o.f,b,T),b[T])}},1156:function(s,f,e){var i=e(84326),u=e(45656),o=e(8006).f,n=e(41589),d=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],v=function(p){try{return o(p)}catch(h){return n(d)}};s.exports.f=function(h){return d&&i(h)=="Window"?v(h):o(u(h))}},8006:function(s,f,e){var i=e(16324),u=e(80748),o=u.concat("length","prototype");f.f=Object.getOwnPropertyNames||function(d){return i(d,o)}},25181:function(s,f){f.f=Object.getOwnPropertySymbols},79518:function(s,f,e){var i=e(92597),u=e(60614),o=e(47908),n=e(6200),d=e(49920),v=n("IE_PROTO"),p=Object,h=p.prototype;s.exports=d?p.getPrototypeOf:function(x){var y=o(x);if(i(y,v))return y[v];var b=y.constructor;return u(b)&&y instanceof b?b.prototype:y instanceof p?h:null}},52050:function(s,f,e){var i=e(47293),u=e(70111),o=e(84326),n=e(7556),d=Object.isExtensible,v=i(function(){d(1)});s.exports=v||n?function(h){return!u(h)||n&&o(h)=="ArrayBuffer"?!1:d?d(h):!0}:d},47976:function(s,f,e){var i=e(1702);s.exports=i({}.isPrototypeOf)},60996:function(s,f,e){"use strict";var i=e(29909),u=e(63061),o=e(76178),n=e(92597),d=e(81956),v=e(47908),p="Object Iterator",h=i.set,x=i.getterFor(p);s.exports=u(function(b,T){var A=v(b);h(this,{type:p,mode:T,object:A,keys:d(A),index:0})},"Object",function(){for(var b=x(this),T=b.keys;;){if(T===null||b.index>=T.length)return b.object=b.keys=null,o(void 0,!0);var A=T[b.index++],C=b.object;if(n(C,A)){switch(b.mode){case"keys":return o(A,!1);case"values":return o(C[A],!1)}return o([A,C[A]],!1)}}})},16324:function(s,f,e){var i=e(1702),u=e(92597),o=e(45656),n=e(41318).indexOf,d=e(3501),v=i([].push);s.exports=function(p,h){var x=o(p),y=0,b=[],T;for(T in x)!u(d,T)&&u(x,T)&&v(b,T);for(;h.length>y;)u(x,T=h[y++])&&(~n(b,T)||v(b,T));return b}},81956:function(s,f,e){var i=e(16324),u=e(80748);s.exports=Object.keys||function(n){return i(n,u)}},55296:function(s,f){"use strict";var e={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,u=i&&!e.call({1:2},1);f.f=u?function(n){var d=i(this,n);return!!d&&d.enumerable}:e},27674:function(s,f,e){var i=e(75668),u=e(19670),o=e(96077);s.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var n=!1,d={},v;try{v=i(Object.prototype,"__proto__","set"),v(d,[]),n=d instanceof Array}catch(p){}return function(h,x){return u(h),o(x),n?v(h,x):h.__proto__=x,h}}():void 0)},90515:function(s,f,e){var i=e(17854),u=e(60614),o=e(5112),n=o("observable"),d=i.Observable,v=d&&d.prototype;s.exports=!u(d)||!u(d.from)||!u(d.of)||!u(v.subscribe)||!u(v[n])},92140:function(s,f,e){var i=e(46916),u=e(60614),o=e(70111),n=TypeError;s.exports=function(d,v){var p,h;if(v==="string"&&u(p=d.toString)&&!o(h=i(p,d))||u(p=d.valueOf)&&!o(h=i(p,d))||v!=="string"&&u(p=d.toString)&&!o(h=i(p,d)))return h;throw n("Can't convert object to primitive value")}},53887:function(s,f,e){var i=e(35005),u=e(1702),o=e(8006),n=e(25181),d=e(19670),v=u([].concat);s.exports=i("Reflect","ownKeys")||function(h){var x=o.f(d(h)),y=n.f;return y?v(x,y(h)):x}},40857:function(s,f,e){var i=e(17854);s.exports=i},12534:function(s){s.exports=function(f){try{return{error:!1,value:f()}}catch(e){return{error:!0,value:e}}}},63702:function(s,f,e){var i=e(17854),u=e(2492),o=e(60614),n=e(54705),d=e(42788),v=e(5112),p=e(7871),h=e(83823),x=e(31913),y=e(7392),b=u&&u.prototype,T=v("species"),A=!1,C=o(i.PromiseRejectionEvent),$=n("Promise",function(){var B=d(u),L=B!==String(u);if(!L&&y===66||x&&!(b.catch&&b.finally))return!0;if(!y||y<51||!/native code/.test(B)){var z=new u(function(R){R(1)}),H=function(R){R(function(){},function(){})},W=z.constructor={};if(W[T]=H,A=z.then(function(){})instanceof H,!A)return!0}return!L&&(p||h)&&!C});s.exports={CONSTRUCTOR:$,REJECTION_EVENT:C,SUBCLASSING:A}},2492:function(s,f,e){var i=e(17854);s.exports=i.Promise},80612:function(s,f,e){var i=e(2492),u=e(17072),o=e(63702).CONSTRUCTOR;s.exports=o||!u(function(n){i.all(n).then(void 0,function(){})})},2626:function(s,f,e){var i=e(3070).f;s.exports=function(u,o,n){n in u||i(u,n,{configurable:!0,get:function(){return o[n]},set:function(d){o[n]=d}})}},38845:function(s,f,e){e(51532),e(4129);var i=e(35005),u=e(1702),o=e(72309),n=i("Map"),d=i("WeakMap"),v=u([].push),p=o("metadata"),h=p.store||(p.store=new d),x=function($,B,L){var z=h.get($);if(!z){if(!L)return;h.set($,z=new n)}var H=z.get(B);if(!H){if(!L)return;z.set(B,H=new n)}return H},y=function($,B,L){var z=x(B,L,!1);return z===void 0?!1:z.has($)},b=function($,B,L){var z=x(B,L,!1);return z===void 0?void 0:z.get($)},T=function($,B,L,z){x(L,z,!0).set($,B)},A=function($,B){var L=x($,B,!1),z=[];return L&&L.forEach(function(H,W){v(z,W)}),z},C=function($){return $===void 0||typeof $=="symbol"?$:String($)};s.exports={store:h,getMap:x,has:y,get:b,set:T,keys:A,toKey:C}},67066:function(s,f,e){"use strict";var i=e(19670);s.exports=function(){var u=i(this),o="";return u.hasIndices&&(o+="d"),u.global&&(o+="g"),u.ignoreCase&&(o+="i"),u.multiline&&(o+="m"),u.dotAll&&(o+="s"),u.unicode&&(o+="u"),u.unicodeSets&&(o+="v"),u.sticky&&(o+="y"),o}},34706:function(s,f,e){var i=e(46916),u=e(92597),o=e(47976),n=e(67066),d=RegExp.prototype;s.exports=function(v){var p=v.flags;return p===void 0&&!("flags"in d)&&!u(v,"flags")&&o(d,v)?i(n,v):p}},84488:function(s,f,e){var i=e(68554),u=TypeError;s.exports=function(o){if(i(o))throw u("Can't call method on "+o);return o}},46465:function(s){s.exports=function(f,e){return f===e||f!=f&&e!=e}},17152:function(s,f,e){"use strict";var i=e(17854),u=e(22104),o=e(60614),n=e(89363),d=e(88113),v=e(50206),p=e(48053),h=i.Function,x=/MSIE .\./.test(d)||n&&function(){var y=i.Bun.version.split(".");return y.length<3||y[0]==0&&(y[1]<3||y[1]==3&&y[2]==0)}();s.exports=function(y,b){var T=b?2:1;return x?function(A,C){var $=p(arguments.length,1)>T,B=o(A)?A:h(A),L=$?v(arguments,T):[],z=$?function(){u(B,this,L)}:B;return b?y(z,C):y(z)}:y}},26283:function(s,f,e){var i=e(79405),u=e(87758),o=i.Set,n=i.add;s.exports=function(d){var v=new o;return u(d,function(p){n(v,p)}),v}},37075:function(s,f,e){"use strict";var i=e(88999),u=e(79405),o=e(26283),n=e(1043),d=e(738),v=e(87758),p=e(6333),h=u.has,x=u.remove;s.exports=function(b){var T=i(this),A=d(b),C=o(T);return n(T)<=A.size?v(T,function($){A.includes($)&&x(C,$)}):p(A.getIterator(),function($){h(T,$)&&x(C,$)}),C}},79405:function(s,f,e){var i=e(1702),u=Set.prototype;s.exports={Set,add:i(u.add),has:i(u.has),remove:i(u.delete),proto:u,$has:u.has,$keys:u.keys}},81920:function(s,f,e){"use strict";var i=e(88999),u=e(79405),o=e(1043),n=e(738),d=e(87758),v=e(6333),p=u.Set,h=u.add,x=u.has,y=u.$has,b=u.$keys,T=function(A){return A.has===y&&A.keys===b};s.exports=function(C){var $=i(this),B=n(C),L=new p;if(!T(B)&&o($)>B.size){if(v(B.getIterator(),function(H){x($,H)&&h(L,H)}),o(L)<2)return L;var z=L;L=new p,d($,function(H){x(z,H)&&h(L,H)})}else d($,function(H){B.includes(H)&&h(L,H)});return L}},78239:function(s,f,e){"use strict";var i=e(88999),u=e(79405).has,o=e(1043),n=e(738),d=e(87758),v=e(6333),p=e(99212);s.exports=function(x){var y=i(this),b=n(x);if(o(y)<=b.size)return d(y,function(A){if(b.includes(A))return!1},!0)!==!1;var T=b.getIterator();return v(T,function(A){if(u(y,A))return p(T,"normal",!1)})!==!1}},49180:function(s,f,e){"use strict";var i=e(88999),u=e(1043),o=e(87758),n=e(738);s.exports=function(v){var p=i(this),h=n(v);return u(p)>h.size?!1:o(p,function(x){if(!h.includes(x))return!1},!0)!==!1}},10107:function(s,f,e){"use strict";var i=e(88999),u=e(79405).has,o=e(1043),n=e(738),d=e(6333),v=e(99212);s.exports=function(h){var x=i(this),y=n(h);if(o(x)<y.size)return!1;var b=y.getIterator();return d(b,function(T){if(!u(x,T))return v(b,"normal",!1)})!==!1}},87758:function(s,f,e){var i=e(1702),u=e(6333),o=e(79405),n=o.Set,d=o.proto,v=i(d.forEach),p=i(d.keys),h=p(new n).next;s.exports=function(x,y,b){return b?u(p(x),y,h):v(x,y)}},13831:function(s,f,e){var i=e(35005),u=function(){return{size:0,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}};s.exports=function(o){try{var n=i("Set");return new n()[o](u()),!0}catch(d){return!1}}},1043:function(s,f,e){var i=e(75668),u=e(79405);s.exports=i(u.proto,"size","get")||function(o){return o.size}},96340:function(s,f,e){"use strict";var i=e(35005),u=e(47045),o=e(5112),n=e(19781),d=o("species");s.exports=function(v){var p=i(v);n&&p&&!p[d]&&u(p,d,{configurable:!0,get:function(){return this}})}},98506:function(s,f,e){"use strict";var i=e(88999),u=e(79405),o=e(26283),n=e(738),d=e(6333),v=u.add,p=u.has,h=u.remove;s.exports=function(y){var b=i(this),T=n(y).getIterator(),A=o(b);return d(T,function(C){p(b,C)?h(A,C):v(A,C)}),A}},58003:function(s,f,e){var i=e(3070).f,u=e(92597),o=e(5112),n=o("toStringTag");s.exports=function(d,v,p){d&&!p&&(d=d.prototype),d&&!u(d,n)&&i(d,n,{configurable:!0,value:v})}},39391:function(s,f,e){"use strict";var i=e(88999),u=e(79405).add,o=e(26283),n=e(738),d=e(6333);s.exports=function(p){var h=i(this),x=n(p).getIterator(),y=o(h);return d(x,function(b){u(y,b)}),y}},6200:function(s,f,e){var i=e(72309),u=e(69711),o=i("keys");s.exports=function(n){return o[n]||(o[n]=u(n))}},5465:function(s,f,e){var i=e(17854),u=e(13072),o="__core-js_shared__",n=i[o]||u(o,{});s.exports=n},72309:function(s,f,e){var i=e(31913),u=e(5465);(s.exports=function(o,n){return u[o]||(u[o]=n!==void 0?n:{})})("versions",[]).push({version:"3.28.0",mode:i?"pure":"global",copyright:"\xA9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.28.0/LICENSE",source:"https://github.com/zloirock/core-js"})},36707:function(s,f,e){var i=e(19670),u=e(39483),o=e(68554),n=e(5112),d=n("species");s.exports=function(v,p){var h=i(v).constructor,x;return h===void 0||o(x=i(h)[d])?p:u(x)}},92386:function(s,f,e){var i=e(1702),u=e(45656),o=e(41340),n=e(26244),d=TypeError,v=i([].push),p=i([].join);s.exports=function(x){var y=u(x),b=n(y);if(!b)return"";for(var T=arguments.length,A=[],C=0;;){var $=y[C++];if($===void 0)throw d("Incorrect template");if(v(A,o($)),C===b)return p(A,"");C<T&&v(A,o(arguments[C]))}}},28710:function(s,f,e){var i=e(1702),u=e(19303),o=e(41340),n=e(84488),d=i("".charAt),v=i("".charCodeAt),p=i("".slice),h=function(x){return function(y,b){var T=o(n(y)),A=u(b),C=T.length,$,B;return A<0||A>=C?x?"":void 0:($=v(T,A),$<55296||$>56319||A+1===C||(B=v(T,A+1))<56320||B>57343?x?d(T,A):$:x?p(T,A,A+2):($-55296<<10)+(B-56320)+65536)}};s.exports={codeAt:h(!1),charAt:h(!0)}},70327:function(s,f,e){var i=e(35005),u=e(1702),o=String.fromCharCode,n=i("String","fromCodePoint"),d=u("".charAt),v=u("".charCodeAt),p=u("".indexOf),h=u("".slice),x=48,y=57,b=97,T=102,A=65,C=70,$=function(z,H){var W=v(z,H);return W>=x&&W<=y},B=function(z,H,W){if(W>=z.length)return-1;for(var R=0;H<W;H++){var F=L(v(z,H));if(F===-1)return-1;R=R*16+F}return R},L=function(z){return z>=x&&z<=y?z-x:z>=b&&z<=T?z-b+10:z>=A&&z<=C?z-A+10:-1};s.exports=function(z){for(var H="",W=0,R=0,F;(R=p(z,"\\",R))>-1;){if(H+=h(z,W,R),++R===z.length)return;var V=d(z,R++);switch(V){case"b":H+="\b";break;case"t":H+="	";break;case"n":H+=`
`;break;case"v":H+="\v";break;case"f":H+="\f";break;case"r":H+="\r";break;case"\r":R<z.length&&d(z,R)===`
`&&++R;case`
`:case"\u2028":case"\u2029":break;case"0":if($(z,R))return;H+="\0";break;case"x":if(F=B(z,R,R+2),F===-1)return;R+=2,H+=o(F);break;case"u":if(R<z.length&&d(z,R)==="{"){var q=p(z,"}",++R);if(q===-1)return;F=B(z,R,q),R=q+1}else F=B(z,R,R+4),R+=4;if(F===-1||F>1114111)return;H+=n(F);break;default:if($(V,0))return;H+=V}W=R}return H+h(z,W)}},53111:function(s,f,e){var i=e(1702),u=e(84488),o=e(41340),n=e(81361),d=i("".replace),v=RegExp("^["+n+"]+"),p=RegExp("(^|[^"+n+"])["+n+"]+$"),h=function(x){return function(y){var b=o(u(y));return x&1&&(b=d(b,v,"")),x&2&&(b=d(b,p,"$1")),b}};s.exports={start:h(1),end:h(2),trim:h(3)}},64124:function(s,f,e){var i=e(17854),u=e(47293),o=e(7392),n=e(7871),d=e(83823),v=e(35268),p=i.structuredClone;s.exports=!!p&&!u(function(){if(d&&o>92||v&&o>94||n&&o>97)return!1;var h=new ArrayBuffer(8),x=p(h,{transfer:[h]});return h.byteLength!=0||x.byteLength!=8})},36293:function(s,f,e){var i=e(7392),u=e(47293);s.exports=!!Object.getOwnPropertySymbols&&!u(function(){var o=Symbol();return!String(o)||!(Object(o)instanceof Symbol)||!Symbol.sham&&i&&i<41})},20261:function(s,f,e){var i=e(17854),u=e(22104),o=e(49974),n=e(60614),d=e(92597),v=e(47293),p=e(60490),h=e(50206),x=e(80317),y=e(48053),b=e(6833),T=e(35268),A=i.setImmediate,C=i.clearImmediate,$=i.process,B=i.Dispatch,L=i.Function,z=i.MessageChannel,H=i.String,W=0,R={},F="onreadystatechange",V,q,Q,X;v(function(){V=i.location});var ie=function(ue){if(d(R,ue)){var S=R[ue];delete R[ue],S()}},Oe=function(ue){return function(){ie(ue)}},Se=function(ue){ie(ue.data)},Be=function(ue){i.postMessage(H(ue),V.protocol+"//"+V.host)};(!A||!C)&&(A=function(S){y(arguments.length,1);var g=n(S)?S:L(S),I=h(arguments,1);return R[++W]=function(){u(g,void 0,I)},q(W),W},C=function(S){delete R[S]},T?q=function(ue){$.nextTick(Oe(ue))}:B&&B.now?q=function(ue){B.now(Oe(ue))}:z&&!b?(Q=new z,X=Q.port2,Q.port1.onmessage=Se,q=o(X.postMessage,X)):i.addEventListener&&n(i.postMessage)&&!i.importScripts&&V&&V.protocol!=="file:"&&!v(Be)?(q=Be,i.addEventListener("message",Se,!1)):F in x("script")?q=function(ue){p.appendChild(x("script"))[F]=function(){p.removeChild(this),ie(ue)}}:q=function(ue){setTimeout(Oe(ue),0)}),s.exports={set:A,clear:C}},51400:function(s,f,e){var i=e(19303),u=Math.max,o=Math.min;s.exports=function(n,d){var v=i(n);return v<0?u(v+d,0):o(v,d)}},64599:function(s,f,e){var i=e(57593),u=TypeError;s.exports=function(o){var n=i(o,"number");if(typeof n=="number")throw u("Can't convert number to bigint");return BigInt(n)}},45656:function(s,f,e){var i=e(68361),u=e(84488);s.exports=function(o){return i(u(o))}},19303:function(s,f,e){var i=e(74758);s.exports=function(u){var o=+u;return o!==o||o===0?0:i(o)}},17466:function(s,f,e){var i=e(19303),u=Math.min;s.exports=function(o){return o>0?u(i(o),9007199254740991):0}},47908:function(s,f,e){var i=e(84488),u=Object;s.exports=function(o){return u(i(o))}},84590:function(s,f,e){var i=e(73002),u=RangeError;s.exports=function(o,n){var d=i(o);if(d%n)throw u("Wrong offset");return d}},73002:function(s,f,e){var i=e(19303),u=RangeError;s.exports=function(o){var n=i(o);if(n<0)throw u("The argument can't be less than 0");return n}},57593:function(s,f,e){var i=e(46916),u=e(70111),o=e(52190),n=e(58173),d=e(92140),v=e(5112),p=TypeError,h=v("toPrimitive");s.exports=function(x,y){if(!u(x)||o(x))return x;var b=n(x,h),T;if(b){if(y===void 0&&(y="default"),T=i(b,x,y),!u(T)||o(T))return T;throw p("Can't convert object to primitive value")}return y===void 0&&(y="number"),d(x,y)}},34948:function(s,f,e){var i=e(57593),u=e(52190);s.exports=function(o){var n=i(o,"string");return u(n)?n:n+""}},45965:function(s,f,e){var i=e(35005),u=e(60614),o=e(25615),n=e(70111),d=i("Set"),v=function(p){return n(p)&&typeof p.size=="number"&&u(p.has)&&u(p.keys)};s.exports=function(p){if(v(p))return p;if(o(p))return new d(p)}},51694:function(s,f,e){var i=e(5112),u=i("toStringTag"),o={};o[u]="z",s.exports=String(o)==="[object z]"},41340:function(s,f,e){var i=e(70648),u=String;s.exports=function(o){if(i(o)==="Symbol")throw TypeError("Cannot convert a Symbol value to a string");return u(o)}},66330:function(s){var f=String;s.exports=function(e){try{return f(e)}catch(i){return"Object"}}},43074:function(s,f,e){var i=e(97745),u=e(66304);s.exports=function(o,n){return i(u(o),n)}},66304:function(s,f,e){var i=e(90260),u=e(36707),o=i.aTypedArrayConstructor,n=i.getTypedArrayConstructor;s.exports=function(d){return o(u(d,n(d)))}},69711:function(s,f,e){var i=e(1702),u=0,o=Math.random(),n=i(1 .toString);s.exports=function(d){return"Symbol("+(d===void 0?"":d)+")_"+n(++u+o,36)}},43307:function(s,f,e){var i=e(36293);s.exports=i&&!Symbol.sham&&typeof Symbol.iterator=="symbol"},3353:function(s,f,e){var i=e(19781),u=e(47293);s.exports=i&&u(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42})},48053:function(s){var f=TypeError;s.exports=function(e,i){if(e<i)throw f("Not enough arguments");return e}},94811:function(s,f,e){var i=e(17854),u=e(60614),o=i.WeakMap;s.exports=u(o)&&/native code/.test(String(o))},60953:function(s,f,e){var i=e(1702),u=WeakMap.prototype;s.exports={WeakMap,set:i(u.set),get:i(u.get),has:i(u.has),remove:i(u.delete)}},78818:function(s,f,e){var i=e(1702),u=WeakSet.prototype;s.exports={WeakSet,add:i(u.add),has:i(u.has),remove:i(u.delete)}},26800:function(s,f,e){var i=e(40857),u=e(92597),o=e(6061),n=e(3070).f;s.exports=function(d){var v=i.Symbol||(i.Symbol={});u(v,d)||n(v,d,{value:o.f(d)})}},6061:function(s,f,e){var i=e(5112);f.f=i},5112:function(s,f,e){var i=e(17854),u=e(72309),o=e(92597),n=e(69711),d=e(36293),v=e(43307),p=i.Symbol,h=u("wks"),x=v?p.for||p:p&&p.withoutSetter||n;s.exports=function(y){return o(h,y)||(h[y]=d&&o(p,y)?p[y]:x("Symbol."+y)),h[y]}},81361:function(s){s.exports=`	
\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF`},89191:function(s,f,e){"use strict";var i=e(35005),u=e(92597),o=e(68880),n=e(47976),d=e(27674),v=e(99920),p=e(2626),h=e(79587),x=e(56277),y=e(58340),b=e(5392),T=e(19781),A=e(31913);s.exports=function(C,$,B,L){var z="stackTraceLimit",H=L?2:1,W=C.split("."),R=W[W.length-1],F=i.apply(null,W);if(F){var V=F.prototype;if(!A&&u(V,"cause")&&delete V.cause,!B)return F;var q=i("Error"),Q=$(function(X,ie){var Oe=x(L?ie:X,void 0),Se=L?new F(X):new F;return Oe!==void 0&&o(Se,"message",Oe),b(Se,Q,Se.stack,2),this&&n(V,this)&&h(Se,this,Q),arguments.length>H&&y(Se,arguments[H]),Se});if(Q.prototype=V,R!=="Error"?d?d(Q,q):v(Q,q,{name:!0}):T&&z in F&&(p(Q,F,z),p(Q,F,"prepareStackTrace")),v(Q,F),!A)try{V.name!==R&&o(V,"name",R),V.constructor=Q}catch(X){}return Q}}},32120:function(s,f,e){var i=e(82109),u=e(35005),o=e(22104),n=e(47293),d=e(89191),v="AggregateError",p=u(v),h=!n(function(){return p([1]).errors[0]!==1})&&n(function(){return p([1],v,{cause:7}).cause!==7});i({global:!0,constructor:!0,arity:2,forced:h},{AggregateError:d(v,function(x){return function(b,T){return o(x,this,arguments)}},h,!0)})},56967:function(s,f,e){"use strict";var i=e(82109),u=e(47976),o=e(79518),n=e(27674),d=e(99920),v=e(70030),p=e(68880),h=e(79114),x=e(58340),y=e(5392),b=e(20408),T=e(56277),A=e(5112),C=A("toStringTag"),$=Error,B=[].push,L=function(W,R){var F=u(z,this),V;n?V=n($(),F?o(this):z):(V=F?this:v(z),p(V,C,"Error")),R!==void 0&&p(V,"message",T(R)),y(V,L,V.stack,1),arguments.length>2&&x(V,arguments[2]);var q=[];return b(W,B,{that:q}),p(V,"errors",q),V};n?n(L,$):d(L,$,{name:!0});var z=L.prototype=v($.prototype,{constructor:h(1,L),message:h(1,""),name:h(1,"AggregateError")});i({global:!0,constructor:!0,arity:2},{AggregateError:L})},9170:function(s,f,e){e(56967)},52262:function(s,f,e){"use strict";var i=e(82109),u=e(47908),o=e(26244),n=e(19303),d=e(51223);i({target:"Array",proto:!0},{at:function(p){var h=u(this),x=o(h),y=n(p),b=y>=0?y:x+y;return b<0||b>=x?void 0:h[b]}}),d("at")},77287:function(s,f,e){"use strict";var i=e(82109),u=e(9671).findLastIndex,o=e(51223);i({target:"Array",proto:!0},{findLastIndex:function(d){return u(this,d,arguments.length>1?arguments[1]:void 0)}}),o("findLastIndex")},67635:function(s,f,e){"use strict";var i=e(82109),u=e(9671).findLast,o=e(51223);i({target:"Array",proto:!0},{findLast:function(d){return u(this,d,arguments.length>1?arguments[1]:void 0)}}),o("findLast")},57658:function(s,f,e){"use strict";var i=e(82109),u=e(47908),o=e(26244),n=e(83658),d=e(7207),v=e(47293),p=v(function(){return[].push.call({length:4294967296},1)!==4294967297}),h=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(y){return y instanceof TypeError}},x=p||!h();i({target:"Array",proto:!0,arity:1,forced:x},{push:function(b){var T=u(this),A=o(T),C=arguments.length;d(A+C);for(var $=0;$<C;$++)T[A]=arguments[$],A++;return n(T,A),A}})},96644:function(s,f,e){"use strict";var i=e(82109),u=e(53671).right,o=e(9341),n=e(7392),d=e(35268),v=!d&&n>79&&n<83,p=v||!o("reduceRight");i({target:"Array",proto:!0,forced:p},{reduceRight:function(x){return u(this,x,arguments.length,arguments.length>1?arguments[1]:void 0)}})},85827:function(s,f,e){"use strict";var i=e(82109),u=e(53671).left,o=e(9341),n=e(7392),d=e(35268),v=!d&&n>79&&n<83,p=v||!o("reduce");i({target:"Array",proto:!0,forced:p},{reduce:function(x){var y=arguments.length;return u(this,x,y,y>1?arguments[1]:void 0)}})},90476:function(s,f,e){"use strict";var i=e(82109),u=e(21843),o=e(45656),n=e(51223),d=Array;i({target:"Array",proto:!0},{toReversed:function(){return u(o(this),d)}}),n("toReversed")},76459:function(s,f,e){"use strict";var i=e(82109),u=e(1702),o=e(19662),n=e(45656),d=e(97745),v=e(98770),p=e(51223),h=Array,x=u(v("Array").sort);i({target:"Array",proto:!0},{toSorted:function(b){b!==void 0&&o(b);var T=n(this),A=d(h,T);return x(A,b)}}),p("toSorted")},99892:function(s,f,e){"use strict";var i=e(82109),u=e(51223),o=e(7207),n=e(26244),d=e(51400),v=e(45656),p=e(19303),h=Array,x=Math.max,y=Math.min;i({target:"Array",proto:!0},{toSpliced:function(T,A){var C=v(this),$=n(C),B=d(T,$),L=arguments.length,z=0,H,W,R,F;for(L===0?H=W=0:L===1?(H=0,W=$-B):(H=L-2,W=y(x(p(A),0),$-B)),R=o($+H-W),F=h(R);z<B;z++)F[z]=C[z];for(;z<B+H;z++)F[z]=arguments[z-B+2];for(;z<R;z++)F[z]=C[z+W-H];return F}}),u("toSpliced")},35581:function(s,f,e){"use strict";var i=e(82109),u=e(11572),o=e(45656),n=Array;i({target:"Array",proto:!0},{with:function(d,v){return u(o(this),n,d,v)}})},21703:function(s,f,e){var i=e(82109),u=e(17854),o=e(22104),n=e(89191),d="WebAssembly",v=u[d],p=Error("e",{cause:7}).cause!==7,h=function(y,b){var T={};T[y]=n(y,b,p),i({global:!0,constructor:!0,arity:1,forced:p},T)},x=function(y,b){if(v&&v[y]){var T={};T[y]=n(d+"."+y,b,p),i({target:d,stat:!0,constructor:!0,arity:1,forced:p},T)}};h("Error",function(y){return function(T){return o(y,this,arguments)}}),h("EvalError",function(y){return function(T){return o(y,this,arguments)}}),h("RangeError",function(y){return function(T){return o(y,this,arguments)}}),h("ReferenceError",function(y){return function(T){return o(y,this,arguments)}}),h("SyntaxError",function(y){return function(T){return o(y,this,arguments)}}),h("TypeError",function(y){return function(T){return o(y,this,arguments)}}),h("URIError",function(y){return function(T){return o(y,this,arguments)}}),x("CompileError",function(y){return function(T){return o(y,this,arguments)}}),x("LinkError",function(y){return function(T){return o(y,this,arguments)}}),x("RuntimeError",function(y){return function(T){return o(y,this,arguments)}})},69098:function(s,f,e){"use strict";var i=e(77710),u=e(95631);i("Map",function(o){return function(){return o(this,arguments.length?arguments[0]:void 0)}},u)},51532:function(s,f,e){e(69098)},46314:function(s,f,e){var i=e(82109),u=e(92597);i({target:"Object",stat:!0},{hasOwn:u})},34668:function(s,f,e){"use strict";var i=e(82109),u=e(46916),o=e(19662),n=e(35005),d=e(78523),v=e(12534),p=e(20408),h=e(80612),x="No one promise resolved";i({target:"Promise",stat:!0,forced:h},{any:function(b){var T=this,A=n("AggregateError"),C=d.f(T),$=C.resolve,B=C.reject,L=v(function(){var z=o(T.resolve),H=[],W=0,R=1,F=!1;p(b,function(V){var q=W++,Q=!1;R++,u(z,T,V).then(function(X){Q||F||(F=!0,$(X))},function(X){Q||F||(Q=!0,H[q]=X,--R||B(new A(H,x)))})}),--R||B(new A(H,x))});return L.error&&B(L.value),C.promise}})},81299:function(s,f,e){var i=e(82109),u=e(17854),o=e(58003);i({global:!0},{Reflect:{}}),o(u.Reflect,"Reflect",!0)},92087:function(s,f,e){var i=e(17854),u=e(19781),o=e(47045),n=e(67066),d=e(47293),v=i.RegExp,p=v.prototype,h=u&&d(function(){var x=!0;try{v(".","d")}catch(L){x=!1}var y={},b="",T=x?"dgimsy":"gimsy",A=function(L,z){Object.defineProperty(y,L,{get:function(){return b+=z,!0}})},C={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};x&&(C.hasIndices="d");for(var $ in C)A($,C[$]);var B=Object.getOwnPropertyDescriptor(p,"flags").get.call(y);return B!==T||b!==T});h&&o(p,"flags",{configurable:!0,get:n})},24506:function(s,f,e){"use strict";var i=e(82109),u=e(1702),o=e(84488),n=e(19303),d=e(41340),v=e(47293),p=u("".charAt),h=v(function(){return"\u{20BB7}".at(-2)!=="\uD842"});i({target:"String",proto:!0,forced:h},{at:function(y){var b=d(o(this)),T=b.length,A=n(y),C=A>=0?A:T+A;return C<0||C>=T?void 0:p(b,C)}})},68757:function(s,f,e){"use strict";var i=e(82109),u=e(46916),o=e(1702),n=e(84488),d=e(60614),v=e(68554),p=e(47850),h=e(41340),x=e(58173),y=e(34706),b=e(10647),T=e(5112),A=e(31913),C=T("replace"),$=TypeError,B=o("".indexOf),L=o("".replace),z=o("".slice),H=Math.max,W=function(R,F,V){return V>R.length?-1:F===""?V:B(R,F,V)};i({target:"String",proto:!0},{replaceAll:function(F,V){var q=n(this),Q,X,ie,Oe,Se,Be,ue,S,g,I=0,k=0,P="";if(!v(F)){if(Q=p(F),Q&&(X=h(n(y(F))),!~B(X,"g")))throw $("`.replaceAll` does not allow non-global regexes");if(ie=x(F,C),ie)return u(ie,F,q,V);if(A&&Q)return L(h(q),F,V)}for(Oe=h(q),Se=h(F),Be=d(V),Be||(V=h(V)),ue=Se.length,S=H(1,ue),I=W(Oe,Se,0);I!==-1;)g=Be?h(V(Se,I,Oe)):b(Se,Oe,I,[],void 0,V),P+=z(Oe,k,I)+g,k=I+ue,I=W(Oe,Se,I+S);return k<Oe.length&&(P+=z(Oe,k)),P}})},48675:function(s,f,e){"use strict";var i=e(90260),u=e(26244),o=e(19303),n=i.aTypedArray,d=i.exportTypedArrayMethod;d("at",function(p){var h=n(this),x=u(h),y=o(p),b=y>=0?y:x+y;return b<0||b>=x?void 0:h[b]})},14590:function(s,f,e){"use strict";var i=e(90260),u=e(9671).findLastIndex,o=i.aTypedArray,n=i.exportTypedArrayMethod;n("findLastIndex",function(v){return u(o(this),v,arguments.length>1?arguments[1]:void 0)})},63408:function(s,f,e){"use strict";var i=e(90260),u=e(9671).findLast,o=i.aTypedArray,n=i.exportTypedArrayMethod;n("findLast",function(v){return u(o(this),v,arguments.length>1?arguments[1]:void 0)})},3462:function(s,f,e){"use strict";var i=e(17854),u=e(46916),o=e(90260),n=e(26244),d=e(84590),v=e(47908),p=e(47293),h=i.RangeError,x=i.Int8Array,y=x&&x.prototype,b=y&&y.set,T=o.aTypedArray,A=o.exportTypedArrayMethod,C=!p(function(){var B=new Uint8ClampedArray(2);return u(b,B,{length:1,0:3},1),B[1]!==3}),$=C&&o.NATIVE_ARRAY_BUFFER_VIEWS&&p(function(){var B=new x(2);return B.set(1),B.set("2",1),B[0]!==0||B[1]!==2});A("set",function(L){T(this);var z=d(arguments.length>1?arguments[1]:void 0,1),H=v(L);if(C)return u(b,this,H,z);var W=this.length,R=n(H),F=0;if(R+z>W)throw h("Wrong length");for(;F<R;)this[z+F]=H[F++]},!C||$)},1439:function(s,f,e){"use strict";var i=e(21843),u=e(90260),o=u.aTypedArray,n=u.exportTypedArrayMethod,d=u.getTypedArrayConstructor;n("toReversed",function(){return i(o(this),d(this))})},87585:function(s,f,e){"use strict";var i=e(90260),u=e(1702),o=e(19662),n=e(97745),d=i.aTypedArray,v=i.getTypedArrayConstructor,p=i.exportTypedArrayMethod,h=u(i.TypedArrayPrototype.sort);p("toSorted",function(y){y!==void 0&&o(y);var b=d(this),T=n(v(b),b);return h(T,y)})},55315:function(s,f,e){"use strict";var i=e(11572),u=e(90260),o=e(44067),n=e(19303),d=e(64599),v=u.aTypedArray,p=u.getTypedArrayConstructor,h=u.exportTypedArrayMethod,x=!!function(){try{new Int8Array(1).with(2,{valueOf:function(){throw 8}})}catch(y){return y===8}}();h("with",function(y,b){var T=v(this),A=n(y),C=o(T)?d(b):+b;return i(T,p(T),A,C)},!x)},41202:function(s,f,e){"use strict";var i=e(76677),u=e(17854),o=e(1702),n=e(89190),d=e(62423),v=e(77710),p=e(29320),h=e(70111),x=e(29909).enforce,y=e(47293),b=e(94811),T=Object,A=Array.isArray,C=T.isExtensible,$=T.isFrozen,B=T.isSealed,L=T.freeze,z=T.seal,H={},W={},R=!u.ActiveXObject&&"ActiveXObject"in u,F,V=function(ue){return function(){return ue(this,arguments.length?arguments[0]:void 0)}},q=v("WeakMap",V,p),Q=q.prototype,X=o(Q.set),ie=function(){return i&&y(function(){var ue=L([]);return X(new q,ue,1),!$(ue)})};if(b)if(R){F=p.getConstructor(V,"WeakMap",!0),d.enable();var Oe=o(Q.delete),Se=o(Q.has),Be=o(Q.get);n(Q,{delete:function(ue){if(h(ue)&&!C(ue)){var S=x(this);return S.frozen||(S.frozen=new F),Oe(this,ue)||S.frozen.delete(ue)}return Oe(this,ue)},has:function(S){if(h(S)&&!C(S)){var g=x(this);return g.frozen||(g.frozen=new F),Se(this,S)||g.frozen.has(S)}return Se(this,S)},get:function(S){if(h(S)&&!C(S)){var g=x(this);return g.frozen||(g.frozen=new F),Se(this,S)?Be(this,S):g.frozen.get(S)}return Be(this,S)},set:function(S,g){if(h(S)&&!C(S)){var I=x(this);I.frozen||(I.frozen=new F),Se(this,S)?X(this,S,g):I.frozen.set(S,g)}else X(this,S,g);return this}})}else ie()&&n(Q,{set:function(S,g){var I;return A(S)&&($(S)?I=H:B(S)&&(I=W)),X(this,S,g),I==H&&L(S),I==W&&z(S),this}})},4129:function(s,f,e){e(41202)},84811:function(s,f,e){"use strict";var i=e(82109),u=e(42092).filterReject,o=e(51223);i({target:"Array",proto:!0,forced:!0},{filterOut:function(d){return u(this,d,arguments.length>1?arguments[1]:void 0)}}),o("filterOut")},34286:function(s,f,e){"use strict";var i=e(82109),u=e(42092).filterReject,o=e(51223);i({target:"Array",proto:!0,forced:!0},{filterReject:function(d){return u(this,d,arguments.length>1?arguments[1]:void 0)}}),o("filterReject")},19258:function(s,f,e){var i=e(82109),u=e(33253);i({target:"Array",stat:!0},{fromAsync:u})},61886:function(s,f,e){var i=e(82109),u=e(9341),o=e(51223),n=e(59921),d=e(31913);i({target:"Array",proto:!0,name:"groupToMap",forced:d||!u("groupByToMap")},{groupByToMap:n}),o("groupByToMap")},1999:function(s,f,e){"use strict";var i=e(82109),u=e(21191),o=e(9341),n=e(51223);i({target:"Array",proto:!0,forced:!o("groupBy")},{groupBy:function(v){var p=arguments.length>1?arguments[1]:void 0;return u(this,v,p)}}),n("groupBy")},59422:function(s,f,e){var i=e(82109),u=e(51223),o=e(59921),n=e(31913);i({target:"Array",proto:!0,forced:n},{groupToMap:o}),u("groupToMap")},52550:function(s,f,e){"use strict";var i=e(82109),u=e(21191),o=e(51223);i({target:"Array",proto:!0},{group:function(d){var v=arguments.length>1?arguments[1]:void 0;return u(this,d,v)}}),o("group")},8e4:function(s,f,e){var i=e(82109),u=e(43157),o=Object.isFrozen,n=function(d,v){if(!o||!u(d)||!o(d))return!1;for(var p=0,h=d.length,x;p<h;)if(x=d[p++],!(typeof x=="string"||v&&x===void 0))return!1;return h!==0};i({target:"Array",stat:!0,sham:!0,forced:!0},{isTemplateObject:function(v){if(!n(v,!0))return!1;var p=v.raw;return p.length===v.length&&n(p,!1)}})},83475:function(s,f,e){"use strict";var i=e(19781),u=e(51223),o=e(47908),n=e(26244),d=e(47045);i&&(d(Array.prototype,"lastIndex",{configurable:!0,get:function(){var p=o(this),h=n(p);return h==0?0:h-1}}),u("lastIndex"))},46273:function(s,f,e){"use strict";var i=e(19781),u=e(51223),o=e(47908),n=e(26244),d=e(47045);i&&(d(Array.prototype,"lastItem",{configurable:!0,get:function(){var p=o(this),h=n(p);return h==0?void 0:p[h-1]},set:function(p){var h=o(this),x=n(h);return h[x==0?0:x-1]=p}}),u("lastItem"))},56882:function(s,f,e){e(90476)},78525:function(s,f,e){e(76459)},27004:function(s,f,e){e(99892)},3087:function(s,f,e){"use strict";var i=e(82109),u=e(51223),o=e(60956);i({target:"Array",proto:!0,forced:!0},{uniqueBy:o}),u("uniqueBy")},97391:function(s,f,e){e(35581)},4763:function(s,f,e){"use strict";var i=e(82109),u=e(19781),o=e(35005),n=e(19662),d=e(25787),v=e(98052),p=e(89190),h=e(47045),x=e(5112),y=e(29909),b=e(8557),T=o("Promise"),A=o("SuppressedError"),C=ReferenceError,$=x("asyncDispose"),B=x("toStringTag"),L="AsyncDisposableStack",z=y.set,H=y.getterFor(L),W="async-dispose",R="disposed",F="pending",V=L+" already disposed",q=function(){z(d(this,Q),{type:L,state:F,stack:[]}),u||(this.disposed=!1)},Q=q.prototype;p(Q,{disposeAsync:function(){var ie=this;return new T(function(Oe,Se){var Be=H(ie);if(Be.state==R)return Oe(void 0);Be.state=R,u||(ie.disposed=!0);var ue=Be.stack,S=ue.length,g=!1,I,k=function(D){g?I=new A(D,I):(g=!0,I=D),P()},P=function(){if(S){var D=ue[--S];ue[S]=null;try{T.resolve(D()).then(P,k)}catch(oe){k(oe)}}else Be.stack=null,g?Se(I):Oe(void 0)};P()})},use:function(ie){var Oe=H(this);if(Oe.state==R)throw C(V);return b(Oe,ie,W),ie},adopt:function(ie,Oe){var Se=H(this);if(Se.state==R)throw C(V);return n(Oe),b(Se,void 0,W,function(){Oe(ie)}),ie},defer:function(ie){var Oe=H(this);if(Oe.state==R)throw C(V);n(ie),b(Oe,void 0,W,ie)},move:function(){var ie=H(this);if(ie.state==R)throw C(V);var Oe=new q;return H(Oe).stack=ie.stack,ie.stack=[],Oe}}),u&&h(Q,"disposed",{configurable:!0,get:function(){return H(this).state==R}}),v(Q,$,Q.disposeAsync,{name:"disposeAsync"}),v(Q,B,L,{nonWritable:!0}),i({global:!0,constructor:!0,forced:!0},{AsyncDisposableStack:q})},40787:function(s,f,e){var i=e(82109),u=e(47520);i({target:"AsyncIterator",name:"indexed",proto:!0,real:!0,forced:!0},{asIndexedPairs:u})},1094:function(s,f,e){"use strict";var i=e(46916),u=e(98052),o=e(35005),n=e(58173),d=e(92597),v=e(5112),p=e(66462),h=v("asyncDispose"),x=o("Promise");d(p,h)||u(p,h,function(){var y=this;return new x(function(b,T){var A=n(y,"return");A?x.resolve(i(A,y)).then(function(){b(void 0)},T):b(void 0)})})},66342:function(s,f,e){"use strict";var i=e(82109),u=e(25787),o=e(68880),n=e(92597),d=e(5112),v=e(66462),p=e(31913),h=d("toStringTag"),x=function(){u(this,v)};x.prototype=v,n(v,h)||o(v,h,"AsyncIterator"),(p||!n(v,"constructor")||v.constructor===Object)&&o(v,"constructor",x),i({global:!0,constructor:!0,forced:p},{AsyncIterator:x})},23647:function(s,f,e){"use strict";var i=e(82109),u=e(46916),o=e(19670),n=e(24942),d=e(66336),v=e(73002),p=e(45348),h=e(76178),x=p(function(y){var b=this;return new y(function(T,A){var C=function(B){b.done=!0,A(B)},$=function(){try{y.resolve(o(u(b.next,b.iterator))).then(function(B){try{o(B).done?(b.done=!0,T(h(void 0,!0))):b.remaining?(b.remaining--,$()):T(h(B.value,!1))}catch(L){C(L)}},C)}catch(B){C(B)}};$()})});i({target:"AsyncIterator",proto:!0,real:!0},{drop:function(b){return new x(n(this),{remaining:v(d(+b))})}})},68216:function(s,f,e){"use strict";var i=e(82109),u=e(12269).every;i({target:"AsyncIterator",proto:!0,real:!0},{every:function(n){return u(this,n)}})},88449:function(s,f,e){"use strict";var i=e(82109),u=e(46916),o=e(19662),n=e(19670),d=e(70111),v=e(24942),p=e(45348),h=e(76178),x=e(21753),y=p(function(b){var T=this,A=T.iterator,C=T.predicate;return new b(function($,B){var L=function(W){T.done=!0,B(W)},z=function(W){x(A,L,W,L)},H=function(){try{b.resolve(n(u(T.next,A))).then(function(W){try{if(n(W).done)T.done=!0,$(h(void 0,!0));else{var R=W.value;try{var F=C(R,T.counter++),V=function(q){q?$(h(R,!1)):H()};d(F)?b.resolve(F).then(V,z):V(F)}catch(q){z(q)}}}catch(q){L(q)}},L)}catch(W){L(W)}};H()})});i({target:"AsyncIterator",proto:!0,real:!0},{filter:function(T){return new y(v(this),{predicate:o(T)})}})},31672:function(s,f,e){"use strict";var i=e(82109),u=e(12269).find;i({target:"AsyncIterator",proto:!0,real:!0},{find:function(n){return u(this,n)}})},74326:function(s,f,e){"use strict";var i=e(82109),u=e(46916),o=e(19662),n=e(19670),d=e(70111),v=e(24942),p=e(45348),h=e(76178),x=e(62617),y=e(21753),b=p(function(T){var A=this,C=A.iterator,$=A.mapper;return new T(function(B,L){var z=function(F){A.done=!0,L(F)},H=function(F){y(C,z,F,z)},W=function(){try{T.resolve(n(u(A.next,C))).then(function(F){try{if(n(F).done)A.done=!0,B(h(void 0,!0));else{var V=F.value;try{var q=$(V,A.counter++),Q=function(X){try{A.inner=x(X),R()}catch(ie){H(ie)}};d(q)?T.resolve(q).then(Q,H):Q(q)}catch(X){H(X)}}}catch(X){z(X)}},z)}catch(F){z(F)}},R=function(){var F=A.inner;if(F)try{T.resolve(n(u(F.next,F.iterator))).then(function(V){try{n(V).done?(A.inner=null,W()):B(h(V.value,!1))}catch(q){H(q)}},H)}catch(V){H(V)}else W()};R()})});i({target:"AsyncIterator",proto:!0,real:!0},{flatMap:function(A){return new b(v(this),{mapper:o(A),inner:null})}})},15581:function(s,f,e){"use strict";var i=e(82109),u=e(12269).forEach;i({target:"AsyncIterator",proto:!0,real:!0},{forEach:function(n){return u(this,n)}})},78631:function(s,f,e){var i=e(82109),u=e(47908),o=e(47976),n=e(62617),d=e(66462),v=e(86221);i({target:"AsyncIterator",stat:!0},{from:function(h){var x=n(typeof h=="string"?u(h):h);return o(d,x.iterator)?x.iterator:new v(x)}})},48746:function(s,f,e){var i=e(82109),u=e(47520);i({target:"AsyncIterator",proto:!0,real:!0,forced:!0},{indexed:u})},57640:function(s,f,e){var i=e(82109),u=e(13232);i({target:"AsyncIterator",proto:!0,real:!0},{map:u})},25387:function(s,f,e){"use strict";var i=e(82109),u=e(46916),o=e(19662),n=e(19670),d=e(70111),v=e(35005),p=e(24942),h=e(21753),x=v("Promise"),y=TypeError;i({target:"AsyncIterator",proto:!0,real:!0},{reduce:function(T){var A=p(this),C=A.iterator,$=A.next,B=arguments.length<2,L=B?void 0:arguments[1],z=0;return o(T),new x(function(H,W){var R=function(V){h(C,W,V,W)},F=function(){try{x.resolve(n(u($,C))).then(function(V){try{if(n(V).done)B?W(y("Reduce of empty iterator with no initial value")):H(L);else{var q=V.value;if(B)B=!1,L=q,F();else try{var Q=T(L,q,z),X=function(ie){L=ie,F()};d(Q)?x.resolve(Q).then(X,R):X(Q)}catch(ie){R(ie)}}z++}catch(ie){W(ie)}},W)}catch(V){W(V)}};F()})}})},64211:function(s,f,e){"use strict";var i=e(82109),u=e(12269).some;i({target:"AsyncIterator",proto:!0,real:!0},{some:function(n){return u(this,n)}})},12771:function(s,f,e){"use strict";var i=e(82109),u=e(46916),o=e(19670),n=e(24942),d=e(66336),v=e(73002),p=e(45348),h=e(76178),x=p(function(y){var b=this,T=b.iterator,A;if(!b.remaining--){var C=h(void 0,!0);return b.done=!0,A=T.return,A!==void 0?y.resolve(u(A,T,void 0)).then(function(){return C}):C}return y.resolve(u(b.next,T)).then(function($){return o($).done?(b.done=!0,h(void 0,!0)):h($.value,!1)}).then(null,function($){throw b.done=!0,$})});i({target:"AsyncIterator",proto:!0,real:!0},{take:function(b){return new x(n(this),{remaining:v(d(+b))})}})},62962:function(s,f,e){"use strict";var i=e(82109),u=e(12269).toArray;i({target:"AsyncIterator",proto:!0,real:!0},{toArray:function(){return u(this,void 0,[])}})},71790:function(s,f,e){"use strict";var i=e(82109),u=e(80430);typeof BigInt=="function"&&i({target:"BigInt",stat:!0,forced:!0},{range:function(n,d,v){return new u(n,d,v,"bigint",BigInt(0),BigInt(1))}})},51568:function(s,f,e){var i=e(82109),u=e(22104),o=e(10313),n=e(35005),d=e(70030),v=Object,p=function(){var h=n("Object","freeze");return h?h(d(null)):d(null)};i({global:!0,forced:!0},{compositeKey:function(){return u(o,v,arguments).get("object",p)}})},26349:function(s,f,e){var i=e(82109),u=e(10313),o=e(35005),n=e(22104);i({global:!0,forced:!0},{compositeSymbol:function(){return arguments.length==1&&typeof arguments[0]=="string"?o("Symbol").for(arguments[0]):n(u,null,arguments).get("symbol",o("Symbol"))}})},30800:function(s,f,e){"use strict";var i=e(82109),u=e(19781),o=e(35005),n=e(19662),d=e(25787),v=e(98052),p=e(89190),h=e(47045),x=e(5112),y=e(29909),b=e(8557),T=o("SuppressedError"),A=ReferenceError,C=x("dispose"),$=x("toStringTag"),B="DisposableStack",L=y.set,z=y.getterFor(B),H="sync-dispose",W="disposed",R="pending",F=B+" already disposed",V=function(){L(d(this,q),{type:B,state:R,stack:[]}),u||(this.disposed=!1)},q=V.prototype;p(q,{dispose:function(){var X=z(this);if(X.state!=W){X.state=W,u||(this.disposed=!0);for(var ie=X.stack,Oe=ie.length,Se=!1,Be;Oe;){var ue=ie[--Oe];ie[Oe]=null;try{ue()}catch(S){Se?Be=new T(S,Be):(Se=!0,Be=S)}}if(X.stack=null,Se)throw Be}},use:function(X){var ie=z(this);if(ie.state==W)throw A(F);return b(ie,X,H),X},adopt:function(X,ie){var Oe=z(this);if(Oe.state==W)throw A(F);return n(ie),b(Oe,void 0,H,function(){ie(X)}),X},defer:function(X){var ie=z(this);if(ie.state==W)throw A(F);n(X),b(ie,void 0,H,X)},move:function(){var X=z(this);if(X.state==W)throw A(F);var ie=new V;return z(ie).stack=X.stack,X.stack=[],ie}}),u&&h(q,"disposed",{configurable:!0,get:function(){return z(this).state==W}}),v(q,C,q.dispose,{name:"dispose"}),v(q,$,B,{nonWritable:!0}),i({global:!0,constructor:!0},{DisposableStack:V})},67427:function(s,f,e){var i=e(82109),u=e(1702),o=e(60614),n=e(42788),d=e(92597),v=e(19781),p=Object.getOwnPropertyDescriptor,h=/^\s*class\b/,x=u(h.exec),y=function(b){try{if(!v||!x(h,n(b)))return!1}catch(A){}var T=p(b,"prototype");return!!T&&d(T,"writable")&&!T.writable};i({target:"Function",stat:!0,sham:!0,forced:!0},{isCallable:function(T){return o(T)&&!y(T)}})},32279:function(s,f,e){var i=e(82109),u=e(4411);i({target:"Function",stat:!0,forced:!0},{isConstructor:u})},13384:function(s,f,e){var i=e(82109),u=e(55040);i({target:"Function",proto:!0,forced:!0,name:"demethodize"},{unThis:u})},85567:function(s,f,e){var i=e(82109),u=e(14323);i({target:"Iterator",name:"indexed",proto:!0,real:!0,forced:!0},{asIndexedPairs:u})},2490:function(s,f,e){"use strict";var i=e(82109),u=e(17854),o=e(25787),n=e(60614),d=e(68880),v=e(47293),p=e(92597),h=e(5112),x=e(13383).IteratorPrototype,y=e(31913),b=h("toStringTag"),T=u.Iterator,A=y||!n(T)||T.prototype!==x||!v(function(){T({})}),C=function(){o(this,x)};p(x,b)||d(x,b,"Iterator"),(A||!p(x,"constructor")||x.constructor===Object)&&d(x,"constructor",C),C.prototype=x,i({global:!0,constructor:!0,forced:A},{Iterator:C})},18359:function(s,f,e){"use strict";var i=e(46916),u=e(98052),o=e(58173),n=e(92597),d=e(5112),v=e(13383).IteratorPrototype,p=d("dispose");n(v,p)||u(v,p,function(){var h=o(this,"return");h&&i(h,this)})},5332:function(s,f,e){"use strict";var i=e(82109),u=e(46916),o=e(19670),n=e(24942),d=e(66336),v=e(73002),p=e(54956),h=p(function(){for(var x=this.iterator,y=this.next,b,T;this.remaining;)if(this.remaining--,b=o(u(y,x)),T=this.done=!!b.done,T)return;if(b=o(u(y,x)),T=this.done=!!b.done,!T)return b.value});i({target:"Iterator",proto:!0,real:!0},{drop:function(y){return new h(n(this),{remaining:v(d(+y))})}})},79433:function(s,f,e){"use strict";var i=e(82109),u=e(20408),o=e(19662),n=e(24942);i({target:"Iterator",proto:!0,real:!0},{every:function(v){var p=n(this),h=0;return o(v),!u(p,function(x,y){if(!v(x,h++))return y()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},59849:function(s,f,e){"use strict";var i=e(82109),u=e(46916),o=e(19662),n=e(19670),d=e(24942),v=e(54956),p=e(53411),h=v(function(){for(var x=this.iterator,y=this.predicate,b=this.next,T,A,C;;){if(T=n(u(b,x)),A=this.done=!!T.done,A)return;if(C=T.value,p(x,y,[C,this.counter++],!0))return C}});i({target:"Iterator",proto:!0,real:!0},{filter:function(y){return new h(d(this),{predicate:o(y)})}})},59461:function(s,f,e){"use strict";var i=e(82109),u=e(20408),o=e(19662),n=e(24942);i({target:"Iterator",proto:!0,real:!0},{find:function(v){var p=n(this),h=0;return o(v),u(p,function(x,y){if(v(x,h++))return y(x)},{IS_RECORD:!0,INTERRUPTED:!0}).result}})},82499:function(s,f,e){"use strict";var i=e(82109),u=e(46916),o=e(19662),n=e(19670),d=e(24942),v=e(72897),p=e(54956),h=e(99212),x=p(function(){for(var y=this.iterator,b=this.mapper,T,A;;){if(A=this.inner)try{if(T=n(u(A.next,A.iterator)),!T.done)return T.value;this.inner=null}catch(C){h(y,"throw",C)}if(T=n(u(this.next,y)),this.done=!!T.done)return;try{this.inner=v(b(T.value,this.counter++))}catch(C){h(y,"throw",C)}}});i({target:"Iterator",proto:!0,real:!0},{flatMap:function(b){return new x(d(this),{mapper:o(b),inner:null})}})},34514:function(s,f,e){"use strict";var i=e(82109),u=e(20408),o=e(19662),n=e(24942);i({target:"Iterator",proto:!0,real:!0},{forEach:function(v){var p=n(this),h=0;o(v),u(p,function(x){v(x,h++)},{IS_RECORD:!0})}})},26877:function(s,f,e){var i=e(82109),u=e(46916),o=e(47908),n=e(47976),d=e(13383).IteratorPrototype,v=e(54956),p=e(72897),h=v(function(){return u(this.next,this.iterator)},!0);i({target:"Iterator",stat:!0},{from:function(y){var b=p(typeof y=="string"?o(y):y);return n(d,b.iterator)?b.iterator:new h(b)}})},64994:function(s,f,e){var i=e(82109),u=e(14323);i({target:"Iterator",proto:!0,real:!0,forced:!0},{indexed:u})},9924:function(s,f,e){var i=e(82109),u=e(20487);i({target:"Iterator",proto:!0,real:!0},{map:u})},72608:function(s,f,e){"use strict";var i=e(82109),u=e(20408),o=e(19662),n=e(24942),d=TypeError;i({target:"Iterator",proto:!0,real:!0},{reduce:function(p){var h=n(this);o(p);var x=arguments.length<2,y=x?void 0:arguments[1],b=0;if(u(h,function(T){x?(x=!1,y=T):y=p(y,T,b),b++},{IS_RECORD:!0}),x)throw d("Reduce of empty iterator with no initial value");return y}})},41874:function(s,f,e){"use strict";var i=e(82109),u=e(20408),o=e(19662),n=e(24942);i({target:"Iterator",proto:!0,real:!0},{some:function(v){var p=n(this),h=0;return o(v),u(p,function(x,y){if(v(x,h++))return y()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},66043:function(s,f,e){"use strict";var i=e(82109),u=e(46916),o=e(19670),n=e(24942),d=e(66336),v=e(73002),p=e(54956),h=e(99212),x=p(function(){var y=this.iterator;if(!this.remaining--)return this.done=!0,h(y,"normal",void 0);var b=o(u(this.next,y)),T=this.done=!!b.done;if(!T)return b.value});i({target:"Iterator",proto:!0,real:!0},{take:function(b){return new x(n(this),{remaining:v(d(+b))})}})},23748:function(s,f,e){"use strict";var i=e(82109),u=e(20408),o=e(24942),n=[].push;i({target:"Iterator",proto:!0,real:!0},{toArray:function(){var v=[];return u(o(this),n,{that:v,IS_RECORD:!0}),v}})},71501:function(s,f,e){"use strict";var i=e(82109),u=e(28091),o=e(86221),n=e(24942);i({target:"Iterator",proto:!0,real:!0},{toAsync:function(){return new o(n(new u(n(this))))}})},10072:function(s,f,e){"use strict";var i=e(82109),u=e(40027),o=e(75706).remove;i({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var d=u(this),v=!0,p,h=0,x=arguments.length;h<x;h++)p=o(d,arguments[h]),v=v&&p;return!!v}})},23042:function(s,f,e){"use strict";var i=e(82109),u=e(40027),o=e(75706),n=o.get,d=o.has,v=o.set;i({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(h,x){var y=u(this),b,T;return d(y,h)?(b=n(y,h),"update"in x&&(b=x.update(b,h,y),v(y,h,b)),b):(T=x.insert(h,y),v(y,h,T),T)}})},99137:function(s,f,e){"use strict";var i=e(82109),u=e(49974),o=e(40027),n=e(14995);i({target:"Map",proto:!0,real:!0,forced:!0},{every:function(v){var p=o(this),h=u(v,arguments.length>1?arguments[1]:void 0);return n(p,function(x,y){if(!h(x,y,p))return!1},!0)!==!1}})},71957:function(s,f,e){"use strict";var i=e(82109),u=e(49974),o=e(40027),n=e(75706),d=e(14995),v=n.Map,p=n.set;i({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(x){var y=o(this),b=u(x,arguments.length>1?arguments[1]:void 0),T=new v;return d(y,function(A,C){b(A,C,y)&&p(T,C,A)}),T}})},103:function(s,f,e){"use strict";var i=e(82109),u=e(49974),o=e(40027),n=e(14995);i({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(v){var p=o(this),h=u(v,arguments.length>1?arguments[1]:void 0),x=n(p,function(y,b){if(h(y,b,p))return{key:b}},!0);return x&&x.key}})},96306:function(s,f,e){"use strict";var i=e(82109),u=e(49974),o=e(40027),n=e(14995);i({target:"Map",proto:!0,real:!0,forced:!0},{find:function(v){var p=o(this),h=u(v,arguments.length>1?arguments[1]:void 0),x=n(p,function(y,b){if(h(y,b,p))return{value:y}},!0);return x&&x.value}})},8582:function(s,f,e){var i=e(82109),u=e(27296);i({target:"Map",stat:!0,forced:!0},{from:u})},90618:function(s,f,e){"use strict";var i=e(82109),u=e(46916),o=e(1702),n=e(60614),d=e(19662),v=e(20408),p=e(75706).Map,h=o([].push);i({target:"Map",stat:!0,forced:!0},{groupBy:function(y,b){var T=n(this)?this:p,A=new T;d(b);var C=d(A.has),$=d(A.get),B=d(A.set);return v(y,function(L){var z=b(L);u(C,A,z)?h(u($,A,z),L):u(B,A,z,[L])}),A}})},74592:function(s,f,e){"use strict";var i=e(82109),u=e(46465),o=e(40027),n=e(14995);i({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(v){return n(o(this),function(p){if(u(p,v))return!0},!0)===!0}})},88440:function(s,f,e){"use strict";var i=e(82109),u=e(46916),o=e(20408),n=e(60614),d=e(19662),v=e(75706).Map;i({target:"Map",stat:!0,forced:!0},{keyBy:function(h,x){var y=n(this)?this:v,b=new y;d(x);var T=d(b.set);return o(h,function(A){u(T,b,x(A),A)}),b}})},58276:function(s,f,e){"use strict";var i=e(82109),u=e(40027),o=e(14995);i({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(d){var v=o(u(this),function(p,h){if(p===d)return{key:h}},!0);return v&&v.key}})},35082:function(s,f,e){"use strict";var i=e(82109),u=e(49974),o=e(40027),n=e(75706),d=e(14995),v=n.Map,p=n.set;i({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(x){var y=o(this),b=u(x,arguments.length>1?arguments[1]:void 0),T=new v;return d(y,function(A,C){p(T,b(A,C,y),A)}),T}})},12813:function(s,f,e){"use strict";var i=e(82109),u=e(49974),o=e(40027),n=e(75706),d=e(14995),v=n.Map,p=n.set;i({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(x){var y=o(this),b=u(x,arguments.length>1?arguments[1]:void 0),T=new v;return d(y,function(A,C){p(T,C,b(A,C,y))}),T}})},18222:function(s,f,e){"use strict";var i=e(82109),u=e(40027),o=e(20408),n=e(75706).set;i({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(v){for(var p=u(this),h=arguments.length,x=0;x<h;)o(arguments[x++],function(y,b){n(p,y,b)},{AS_ENTRIES:!0});return p}})},24838:function(s,f,e){var i=e(82109),u=e(82044);i({target:"Map",stat:!0,forced:!0},{of:u})},38563:function(s,f,e){"use strict";var i=e(82109),u=e(19662),o=e(40027),n=e(14995),d=TypeError;i({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(p){var h=o(this),x=arguments.length<2,y=x?void 0:arguments[1];if(u(p),n(h,function(b,T){x?(x=!1,y=b):y=p(y,b,T,h)}),x)throw d("Reduce of empty map with no initial value");return y}})},50336:function(s,f,e){"use strict";var i=e(82109),u=e(49974),o=e(40027),n=e(14995);i({target:"Map",proto:!0,real:!0,forced:!0},{some:function(v){var p=o(this),h=u(v,arguments.length>1?arguments[1]:void 0);return n(p,function(x,y){if(h(x,y,p))return!0},!0)===!0}})},74442:function(s,f,e){"use strict";var i=e(82109),u=e(8154);i({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:u})},7512:function(s,f,e){"use strict";var i=e(82109),u=e(19662),o=e(40027),n=e(75706),d=TypeError,v=n.get,p=n.has,h=n.set;i({target:"Map",proto:!0,real:!0,forced:!0},{update:function(y,b){var T=o(this),A=arguments.length;u(b);var C=p(T,y);if(!C&&A<3)throw d("Updating absent value");var $=C?v(T,y):u(A>2?arguments[2]:void 0)(y,T);return h(T,y,b($,y,T)),T}})},87713:function(s,f,e){"use strict";var i=e(82109),u=e(8154);i({target:"Map",proto:!0,real:!0,forced:!0},{upsert:u})},46603:function(s,f,e){var i=e(82109),u=Math.min,o=Math.max;i({target:"Math",stat:!0,forced:!0},{clamp:function(d,v,p){return u(p,o(v,d))}})},70100:function(s,f,e){var i=e(82109);i({target:"Math",stat:!0,nonConfigurable:!0,nonWritable:!0},{DEG_PER_RAD:Math.PI/180})},10490:function(s,f,e){var i=e(82109),u=180/Math.PI;i({target:"Math",stat:!0,forced:!0},{degrees:function(n){return n*u}})},13187:function(s,f,e){var i=e(82109),u=e(47103),o=e(26130);i({target:"Math",stat:!0,forced:!0},{fscale:function(d,v,p,h,x){return o(u(d,v,p,h,x))}})},60092:function(s,f,e){var i=e(82109);i({target:"Math",stat:!0,forced:!0},{iaddh:function(o,n,d,v){var p=o>>>0,h=n>>>0,x=d>>>0;return h+(v>>>0)+((p&x|(p|x)&~(p+x>>>0))>>>31)|0}})},19041:function(s,f,e){var i=e(82109);i({target:"Math",stat:!0,forced:!0},{imulh:function(o,n){var d=65535,v=+o,p=+n,h=v&d,x=p&d,y=v>>16,b=p>>16,T=(y*x>>>0)+(h*x>>>16);return y*b+(T>>16)+((h*b>>>0)+(T&d)>>16)}})},30666:function(s,f,e){var i=e(82109);i({target:"Math",stat:!0,forced:!0},{isubh:function(o,n,d,v){var p=o>>>0,h=n>>>0,x=d>>>0;return h-(v>>>0)-((~p&x|~(p^x)&p-x>>>0)>>>31)|0}})},51638:function(s,f,e){var i=e(82109);i({target:"Math",stat:!0,nonConfigurable:!0,nonWritable:!0},{RAD_PER_DEG:180/Math.PI})},62975:function(s,f,e){var i=e(82109),u=Math.PI/180;i({target:"Math",stat:!0,forced:!0},{radians:function(n){return n*u}})},15728:function(s,f,e){var i=e(82109),u=e(47103);i({target:"Math",stat:!0,forced:!0},{scale:u})},46056:function(s,f,e){var i=e(82109),u=e(19670),o=e(77023),n=e(63061),d=e(76178),v=e(29909),p="Seeded Random",h=p+" Generator",x='Math.seededPRNG() argument should have a "seed" field with a finite value.',y=v.set,b=v.getterFor(h),T=TypeError,A=n(function($){y(this,{type:h,seed:$%2147483647})},p,function(){var $=b(this),B=$.seed=($.seed*1103515245+12345)%2147483647;return d((B&1073741823)/1073741823,!1)});i({target:"Math",stat:!0,forced:!0},{seededPRNG:function($){var B=u($).seed;if(!o(B))throw T(x);return new A(B)}})},44299:function(s,f,e){var i=e(82109);i({target:"Math",stat:!0,forced:!0},{signbit:function(o){var n=+o;return n==n&&n==0?1/n==-1/0:n<0}})},5162:function(s,f,e){var i=e(82109);i({target:"Math",stat:!0,forced:!0},{umulh:function(o,n){var d=65535,v=+o,p=+n,h=v&d,x=p&d,y=v>>>16,b=p>>>16,T=(y*x>>>0)+(h*x>>>16);return y*b+(T>>>16)+((h*b>>>0)+(T&d)>>>16)}})},50292:function(s,f,e){"use strict";var i=e(82109),u=e(1702),o=e(19303),n=e(83009),d="Invalid number representation",v="Invalid radix",p=RangeError,h=SyntaxError,x=TypeError,y=/^[\da-z]+$/,b=u("".charAt),T=u(y.exec),A=u(1 .toString),C=u("".slice);i({target:"Number",stat:!0,forced:!0},{fromString:function(B,L){var z=1,H,W;if(typeof B!="string")throw x(d);if(!B.length||b(B,0)=="-"&&(z=-1,B=C(B,1),!B.length))throw h(d);if(H=L===void 0?10:o(L),H<2||H>36)throw p(v);if(!T(y,B)||A(W=n(B,H),H)!==B)throw h(d);return z*W}})},29427:function(s,f,e){"use strict";var i=e(82109),u=e(80430);i({target:"Number",stat:!0,forced:!0},{range:function(n,d,v){return new u(n,d,v,"number",0,1)}})},99964:function(s,f,e){"use strict";var i=e(82109),u=e(60996);i({target:"Object",stat:!0,forced:!0},{iterateEntries:function(n){return new u(n,"entries")}})},75238:function(s,f,e){"use strict";var i=e(82109),u=e(60996);i({target:"Object",stat:!0,forced:!0},{iterateKeys:function(n){return new u(n,"keys")}})},4987:function(s,f,e){"use strict";var i=e(82109),u=e(60996);i({target:"Object",stat:!0,forced:!0},{iterateValues:function(n){return new u(n,"values")}})},39769:function(s,f,e){"use strict";var i=e(82109),u=e(46916),o=e(19781),n=e(96340),d=e(19662),v=e(19670),p=e(25787),h=e(60614),x=e(68554),y=e(70111),b=e(58173),T=e(98052),A=e(89190),C=e(47045),$=e(842),B=e(5112),L=e(29909),z=e(90515),H=B("observable"),W="Observable",R="Subscription",F="SubscriptionObserver",V=L.getterFor,q=L.set,Q=V(W),X=V(R),ie=V(F),Oe=function(g){this.observer=v(g),this.cleanup=void 0,this.subscriptionObserver=void 0};Oe.prototype={type:R,clean:function(){var g=this.cleanup;if(g){this.cleanup=void 0;try{g()}catch(I){$(I)}}},close:function(){if(!o){var g=this.facade,I=this.subscriptionObserver;g.closed=!0,I&&(I.closed=!0)}this.observer=void 0},isClosed:function(){return this.observer===void 0}};var Se=function(g,I){var k=q(this,new Oe(g)),P;o||(this.closed=!1);try{(P=b(g,"start"))&&u(P,g,this)}catch(Re){$(Re)}if(!k.isClosed()){var D=k.subscriptionObserver=new Be(k);try{var oe=I(D),he=oe;x(oe)||(k.cleanup=h(oe.unsubscribe)?function(){he.unsubscribe()}:d(oe))}catch(Re){D.error(Re);return}k.isClosed()&&k.clean()}};Se.prototype=A({},{unsubscribe:function(){var I=X(this);I.isClosed()||(I.close(),I.clean())}}),o&&C(Se.prototype,"closed",{configurable:!0,get:function(){return X(this).isClosed()}});var Be=function(g){q(this,{type:F,subscriptionState:g}),o||(this.closed=!1)};Be.prototype=A({},{next:function(I){var k=ie(this).subscriptionState;if(!k.isClosed()){var P=k.observer;try{var D=b(P,"next");D&&u(D,P,I)}catch(oe){$(oe)}}},error:function(I){var k=ie(this).subscriptionState;if(!k.isClosed()){var P=k.observer;k.close();try{var D=b(P,"error");D?u(D,P,I):$(I)}catch(oe){$(oe)}k.clean()}},complete:function(){var I=ie(this).subscriptionState;if(!I.isClosed()){var k=I.observer;I.close();try{var P=b(k,"complete");P&&u(P,k)}catch(D){$(D)}I.clean()}}}),o&&C(Be.prototype,"closed",{configurable:!0,get:function(){return ie(this).subscriptionState.isClosed()}});var ue=function(I){p(this,S),q(this,{type:W,subscriber:d(I)})},S=ue.prototype;A(S,{subscribe:function(I){var k=arguments.length;return new Se(h(I)?{next:I,error:k>1?arguments[1]:void 0,complete:k>2?arguments[2]:void 0}:y(I)?I:{},Q(this).subscriber)}}),T(S,H,function(){return this}),i({global:!0,constructor:!0,forced:z},{Observable:ue}),n(W)},93532:function(s,f,e){"use strict";var i=e(82109),u=e(35005),o=e(46916),n=e(19670),d=e(4411),v=e(18554),p=e(58173),h=e(20408),x=e(5112),y=e(90515),b=x("observable");i({target:"Observable",stat:!0,forced:y},{from:function(A){var C=d(this)?this:u("Observable"),$=p(n(A),b);if($){var B=n(o($,A));return B.constructor===C?B:new C(function(z){return B.subscribe(z)})}var L=v(A);return new C(function(z){h(L,function(H,W){if(z.next(H),z.closed)return W()},{IS_ITERATOR:!0,INTERRUPTED:!0}),z.complete()})}})},1025:function(s,f,e){e(39769),e(93532),e(88170)},88170:function(s,f,e){"use strict";var i=e(82109),u=e(35005),o=e(4411),n=e(90515),d=u("Array");i({target:"Observable",stat:!0,forced:n},{of:function(){for(var p=o(this)?this:u("Observable"),h=arguments.length,x=d(h),y=0;y<h;)x[y]=arguments[y++];return new p(function(b){for(var T=0;T<h;T++)if(b.next(x[T]),b.closed)return;b.complete()})}})},77479:function(s,f,e){"use strict";var i=e(82109),u=e(78523),o=e(12534);i({target:"Promise",stat:!0,forced:!0},{try:function(n){var d=u.f(this),v=o(n);return(v.error?d.reject:d.resolve)(v.value),d.promise}})},34582:function(s,f,e){var i=e(82109),u=e(38845),o=e(19670),n=u.toKey,d=u.set;i({target:"Reflect",stat:!0},{defineMetadata:function(p,h,x){var y=arguments.length<4?void 0:n(arguments[3]);d(p,h,o(x),y)}})},47896:function(s,f,e){var i=e(82109),u=e(38845),o=e(19670),n=u.toKey,d=u.getMap,v=u.store;i({target:"Reflect",stat:!0},{deleteMetadata:function(h,x){var y=arguments.length<3?void 0:n(arguments[2]),b=d(o(x),y,!1);if(b===void 0||!b.delete(h))return!1;if(b.size)return!0;var T=v.get(x);return T.delete(y),!!T.size||v.delete(x)}})},98558:function(s,f,e){var i=e(82109),u=e(1702),o=e(38845),n=e(19670),d=e(79518),v=e(60956),p=u(v),h=u([].concat),x=o.keys,y=o.toKey,b=function(T,A){var C=x(T,A),$=d(T);if($===null)return C;var B=b($,A);return B.length?C.length?p(h(C,B)):B:C};i({target:"Reflect",stat:!0},{getMetadataKeys:function(A){var C=arguments.length<2?void 0:y(arguments[1]);return b(n(A),C)}})},12647:function(s,f,e){var i=e(82109),u=e(38845),o=e(19670),n=e(79518),d=u.has,v=u.get,p=u.toKey,h=function(x,y,b){var T=d(x,y,b);if(T)return v(x,y,b);var A=n(y);return A!==null?h(x,A,b):void 0};i({target:"Reflect",stat:!0},{getMetadata:function(y,b){var T=arguments.length<3?void 0:p(arguments[2]);return h(y,o(b),T)}})},97507:function(s,f,e){var i=e(82109),u=e(38845),o=e(19670),n=u.keys,d=u.toKey;i({target:"Reflect",stat:!0},{getOwnMetadataKeys:function(p){var h=arguments.length<2?void 0:d(arguments[1]);return n(o(p),h)}})},84018:function(s,f,e){var i=e(82109),u=e(38845),o=e(19670),n=u.get,d=u.toKey;i({target:"Reflect",stat:!0},{getOwnMetadata:function(p,h){var x=arguments.length<3?void 0:d(arguments[2]);return n(p,o(h),x)}})},61605:function(s,f,e){var i=e(82109),u=e(38845),o=e(19670),n=e(79518),d=u.has,v=u.toKey,p=function(h,x,y){var b=d(h,x,y);if(b)return!0;var T=n(x);return T!==null?p(h,T,y):!1};i({target:"Reflect",stat:!0},{hasMetadata:function(x,y){var b=arguments.length<3?void 0:v(arguments[2]);return p(x,o(y),b)}})},49076:function(s,f,e){var i=e(82109),u=e(38845),o=e(19670),n=u.has,d=u.toKey;i({target:"Reflect",stat:!0},{hasOwnMetadata:function(p,h){var x=arguments.length<3?void 0:d(arguments[2]);return n(p,o(h),x)}})},34999:function(s,f,e){var i=e(82109),u=e(38845),o=e(19670),n=u.toKey,d=u.set;i({target:"Reflect",stat:!0},{metadata:function(p,h){return function(y,b){d(p,h,o(y),n(b))}}})},88921:function(s,f,e){"use strict";var i=e(82109),u=e(88999),o=e(79405).add;i({target:"Set",proto:!0,real:!0,forced:!0},{addAll:function(){for(var d=u(this),v=0,p=arguments.length;v<p;v++)o(d,arguments[v]);return d}})},96248:function(s,f,e){"use strict";var i=e(82109),u=e(88999),o=e(79405).remove;i({target:"Set",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var d=u(this),v=!0,p,h=0,x=arguments.length;h<x;h++)p=o(d,arguments[h]),v=v&&p;return!!v}})},13599:function(s,f,e){"use strict";var i=e(82109),u=e(46916),o=e(45965),n=e(37075);i({target:"Set",proto:!0,real:!0,forced:!0},{difference:function(v){return u(n,this,o(v))}})},27561:function(s,f,e){var i=e(82109),u=e(37075),o=e(13831);i({target:"Set",proto:!0,real:!0,forced:!o("difference")},{difference:u})},11477:function(s,f,e){"use strict";var i=e(82109),u=e(49974),o=e(88999),n=e(87758);i({target:"Set",proto:!0,real:!0,forced:!0},{every:function(v){var p=o(this),h=u(v,arguments.length>1?arguments[1]:void 0);return n(p,function(x){if(!h(x,x,p))return!1},!0)!==!1}})},64362:function(s,f,e){"use strict";var i=e(82109),u=e(49974),o=e(88999),n=e(79405),d=e(87758),v=n.Set,p=n.add;i({target:"Set",proto:!0,real:!0,forced:!0},{filter:function(x){var y=o(this),b=u(x,arguments.length>1?arguments[1]:void 0),T=new v;return d(y,function(A){b(A,A,y)&&p(T,A)}),T}})},15389:function(s,f,e){"use strict";var i=e(82109),u=e(49974),o=e(88999),n=e(87758);i({target:"Set",proto:!0,real:!0,forced:!0},{find:function(v){var p=o(this),h=u(v,arguments.length>1?arguments[1]:void 0),x=n(p,function(y){if(h(y,y,p))return{value:y}},!0);return x&&x.value}})},46006:function(s,f,e){var i=e(82109),u=e(27296);i({target:"Set",stat:!0,forced:!0},{from:u})},90401:function(s,f,e){"use strict";var i=e(82109),u=e(46916),o=e(45965),n=e(81920);i({target:"Set",proto:!0,real:!0,forced:!0},{intersection:function(v){return u(n,this,o(v))}})},3440:function(s,f,e){var i=e(82109),u=e(81920),o=e(13831);i({target:"Set",proto:!0,real:!0,forced:!o("intersection")},{intersection:u})},45164:function(s,f,e){"use strict";var i=e(82109),u=e(46916),o=e(45965),n=e(78239);i({target:"Set",proto:!0,real:!0,forced:!0},{isDisjointFrom:function(v){return u(n,this,o(v))}})},66244:function(s,f,e){var i=e(82109),u=e(78239),o=e(13831);i({target:"Set",proto:!0,real:!0,forced:!o("isDisjointFrom")},{isDisjointFrom:u})},91238:function(s,f,e){"use strict";var i=e(82109),u=e(46916),o=e(45965),n=e(49180);i({target:"Set",proto:!0,real:!0,forced:!0},{isSubsetOf:function(v){return u(n,this,o(v))}})},89772:function(s,f,e){var i=e(82109),u=e(49180),o=e(13831);i({target:"Set",proto:!0,real:!0,forced:!o("isSubsetOf")},{isSubsetOf:u})},54837:function(s,f,e){"use strict";var i=e(82109),u=e(46916),o=e(45965),n=e(10107);i({target:"Set",proto:!0,real:!0,forced:!0},{isSupersetOf:function(v){return u(n,this,o(v))}})},88910:function(s,f,e){var i=e(82109),u=e(10107),o=e(13831);i({target:"Set",proto:!0,real:!0,forced:!o("isSupersetOf")},{isSupersetOf:u})},87485:function(s,f,e){"use strict";var i=e(82109),u=e(1702),o=e(88999),n=e(87758),d=e(41340),v=u([].join),p=u([].push);i({target:"Set",proto:!0,real:!0,forced:!0},{join:function(x){var y=o(this),b=x===void 0?",":d(x),T=[];return n(y,function(A){p(T,A)}),v(T,b)}})},56767:function(s,f,e){"use strict";var i=e(82109),u=e(49974),o=e(88999),n=e(79405),d=e(87758),v=n.Set,p=n.add;i({target:"Set",proto:!0,real:!0,forced:!0},{map:function(x){var y=o(this),b=u(x,arguments.length>1?arguments[1]:void 0),T=new v;return d(y,function(A){p(T,b(A,A,y))}),T}})},69916:function(s,f,e){var i=e(82109),u=e(82044);i({target:"Set",stat:!0,forced:!0},{of:u})},76651:function(s,f,e){"use strict";var i=e(82109),u=e(19662),o=e(88999),n=e(87758),d=TypeError;i({target:"Set",proto:!0,real:!0,forced:!0},{reduce:function(p){var h=o(this),x=arguments.length<2,y=x?void 0:arguments[1];if(u(p),n(h,function(b){x?(x=!1,y=b):y=p(y,b,b,h)}),x)throw d("Reduce of empty set with no initial value");return y}})},61437:function(s,f,e){"use strict";var i=e(82109),u=e(49974),o=e(88999),n=e(87758);i({target:"Set",proto:!0,real:!0,forced:!0},{some:function(v){var p=o(this),h=u(v,arguments.length>1?arguments[1]:void 0);return n(p,function(x){if(h(x,x,p))return!0},!0)===!0}})},35285:function(s,f,e){"use strict";var i=e(82109),u=e(46916),o=e(45965),n=e(98506);i({target:"Set",proto:!0,real:!0,forced:!0},{symmetricDifference:function(v){return u(n,this,o(v))}})},63252:function(s,f,e){var i=e(82109),u=e(98506),o=e(13831);i({target:"Set",proto:!0,real:!0,forced:!o("symmetricDifference")},{symmetricDifference:u})},39865:function(s,f,e){"use strict";var i=e(82109),u=e(46916),o=e(45965),n=e(39391);i({target:"Set",proto:!0,real:!0,forced:!0},{union:function(v){return u(n,this,o(v))}})},17454:function(s,f,e){var i=e(82109),u=e(39391),o=e(13831);i({target:"Set",proto:!0,real:!0,forced:!o("union")},{union:u})},86035:function(s,f,e){"use strict";var i=e(82109),u=e(28710).charAt,o=e(84488),n=e(19303),d=e(41340);i({target:"String",proto:!0,forced:!0},{at:function(p){var h=d(o(this)),x=h.length,y=n(p),b=y>=0?y:x+y;return b<0||b>=x?void 0:u(h,b)}})},67501:function(s,f,e){"use strict";var i=e(82109),u=e(63061),o=e(76178),n=e(84488),d=e(41340),v=e(29909),p=e(28710),h=p.codeAt,x=p.charAt,y="String Iterator",b=v.set,T=v.getterFor(y),A=u(function($){b(this,{type:y,string:$,index:0})},"String",function(){var $=T(this),B=$.string,L=$.index,z;return L>=B.length?o(void 0,!0):(z=x(B,L),$.index+=z.length,o({codePoint:h(z,0),position:L},!1))});i({target:"String",proto:!0,forced:!0},{codePoints:function(){return new A(d(n(this)))}})},50058:function(s,f,e){var i=e(82109),u=e(92386);i({target:"String",stat:!0,forced:!0},{cooked:u})},85576:function(s,f,e){"use strict";var i=e(76677),u=e(82109),o=e(72309),n=e(35005),d=e(56339),v=e(1702),p=e(22104),h=e(19670),x=e(47908),y=e(60614),b=e(26244),T=e(3070).f,A=e(41589),C=e(92386),$=e(70327),B=e(81361),L=n("WeakMap"),z=o("GlobalDedentRegistry",new L);z.has=z.has,z.get=z.get,z.set=z.set;var H=Array,W=TypeError,R=Object.freeze||Object,F=Object.isFrozen,V=Math.min,q=v("".charAt),Q=v("".slice),X=v("".split),ie=v(/./.exec),Oe=/([\n\u2028\u2029]|\r\n?)/g,Se=RegExp("^["+B+"]*"),Be=RegExp("[^"+B+"]"),ue="Invalid tag",S="Invalid opening line",g="Invalid closing line",I=function(Re){var re=Re.raw;if(i&&!F(re))throw W("Raw template should be frozen");if(z.has(re))return z.get(re);var Ee=k(re),Ve=D(Ee);return T(Ve,"raw",{value:R(Ee)}),R(Ve),z.set(re,Ve),Ve},k=function(Re){var re=x(Re),Ee=b(re),Ve=H(Ee),Xe=H(Ee),Ze=0,ht,Ct;if(!Ee)throw W(ue);for(;Ze<Ee;Ze++){var Bt=re[Ze];if(typeof Bt=="string")Ve[Ze]=X(Bt,Oe);else throw W(ue)}for(Ze=0;Ze<Ee;Ze++){var pr=Ze+1===Ee;if(ht=Ve[Ze],Ze===0){if(ht.length===1||ht[0].length>0)throw W(S);ht[1]=""}if(pr){if(ht.length===1||ie(Be,ht[ht.length-1]))throw W(g);ht[ht.length-2]="",ht[ht.length-1]=""}for(var $r=2;$r<ht.length;$r+=2){var tn=ht[$r],tt=$r+1===ht.length&&!pr,Ie=ie(Se,tn)[0];if(!tt&&Ie.length===tn.length){ht[$r]="";continue}Ct=P(Ie,Ct)}}var be=Ct?Ct.length:0;for(Ze=0;Ze<Ee;Ze++){ht=Ve[Ze];for(var ye=ht[0],je=1;je<ht.length;je+=2)ye+=ht[je]+Q(ht[je+1],be);Xe[Ze]=ye}return Xe},P=function(Re,re){if(re===void 0||Re===re)return Re;for(var Ee=0,Ve=V(Re.length,re.length);Ee<Ve&&q(Re,Ee)===q(re,Ee);Ee++);return Q(Re,0,Ee)},D=function(Re){for(var re=0,Ee=Re.length,Ve=H(Ee);re<Ee;re++)Ve[re]=$(Re[re]);return Ve},oe=function(Re){return d(function(re){var Ee=A(arguments);return Ee[0]=I(h(re)),p(Re,this,Ee)},"")},he=oe(C);u({target:"String",stat:!0,forced:!0},{dedent:function(re){return h(re),y(re)?oe(re):p(he,this,arguments)}})},98275:function(s,f,e){"use strict";var i=e(82109),u=e(1702),o=e(84488),n=e(41340),d=u("".charCodeAt);i({target:"String",proto:!0},{isWellFormed:function(){for(var p=n(o(this)),h=p.length,x=0;x<h;x++){var y=d(p,x);if((y&63488)==55296&&(y>=56320||++x>=h||(d(p,x)&64512)!=56320))return!1}return!0}})},71842:function(s,f,e){"use strict";var i=e(82109),u=e(46916),o=e(1702),n=e(84488),d=e(41340),v=e(47293),p=Array,h=o("".charAt),x=o("".charCodeAt),y=o([].join),b="".toWellFormed,T="\uFFFD",A=b&&v(function(){return u(b,1)!=="1"});i({target:"String",proto:!0,forced:A},{toWellFormed:function(){var $=d(n(this));if(A)return u(b,$);for(var B=$.length,L=p(B),z=0;z<B;z++){var H=x($,z);(H&63488)!=55296?L[z]=h($,z):H>=56320||z+1>=B||(x($,z+1)&64512)!=56320?L[z]=T:(L[z]=h($,z),L[++z]=h($,z))}return y(L,"")}})},16586:function(s,f,e){"use strict";var i=e(82109),u=e(47976),o=e(79518),n=e(27674),d=e(99920),v=e(70030),p=e(68880),h=e(79114),x=e(5392),y=e(56277),b=e(5112),T=b("toStringTag"),A=Error,C=function(L,z,H){var W=u($,this),R;return n?R=n(A(),W?o(this):$):(R=W?this:v($),p(R,T,"Error")),H!==void 0&&p(R,"message",y(H)),x(R,C,R.stack,1),p(R,"error",L),p(R,"suppressed",z),R};n?n(C,A):d(C,A,{name:!0});var $=C.prototype=v(A.prototype,{constructor:h(1,C),message:h(1,""),name:h(1,"SuppressedError")});i({global:!0,constructor:!0,arity:3},{SuppressedError:C})},609:function(s,f,e){var i=e(26800);i("asyncDispose")},21568:function(s,f,e){var i=e(26800);i("dispose")},54534:function(s,f,e){var i=e(26800);i("matcher")},34744:function(s,f,e){var i=e(26800);i("metadataKey")},95090:function(s,f,e){var i=e(26800);i("metadata")},48824:function(s,f,e){var i=e(26800);i("observable")},44130:function(s,f,e){var i=e(26800);i("patternMatch")},35954:function(s,f,e){var i=e(26800);i("replaceAll")},26182:function(s,f,e){"use strict";var i=e(90260),u=e(42092).filterReject,o=e(43074),n=i.aTypedArray,d=i.exportTypedArrayMethod;d("filterOut",function(p){var h=u(n(this),p,arguments.length>1?arguments[1]:void 0);return o(this,h)},!0)},8922:function(s,f,e){"use strict";var i=e(90260),u=e(42092).filterReject,o=e(43074),n=i.aTypedArray,d=i.exportTypedArrayMethod;d("filterReject",function(p){var h=u(n(this),p,arguments.length>1?arguments[1]:void 0);return o(this,h)},!0)},16850:function(s,f,e){"use strict";var i=e(35005),u=e(39483),o=e(33253),n=e(90260),d=e(97745),v=n.aTypedArrayConstructor,p=n.exportTypedArrayStaticMethod;p("fromAsync",function(x){var y=this,b=arguments.length,T=b>1?arguments[1]:void 0,A=b>2?arguments[2]:void 0;return new(i("Promise"))(function(C){u(y),C(o(x,T,A))}).then(function(C){return d(v(y),C)})},!0)},5835:function(s,f,e){"use strict";var i=e(90260),u=e(21191),o=e(66304),n=i.aTypedArray,d=i.exportTypedArrayMethod;d("groupBy",function(p){var h=arguments.length>1?arguments[1]:void 0;return u(n(this),p,h,o)},!0)},23767:function(s,f,e){e(1439)},8585:function(s,f,e){e(87585)},8970:function(s,f,e){"use strict";var i=e(90260),u=e(26244),o=e(44067),n=e(51400),d=e(64599),v=e(19303),p=e(47293),h=i.aTypedArray,x=i.getTypedArrayConstructor,y=i.exportTypedArrayMethod,b=Math.max,T=Math.min,A=!p(function(){var C=new Int8Array([1]),$=C.toSpliced(1,0,{valueOf:function(){return C[0]=2,3}});return $[0]!==2||$[1]!==3});y("toSpliced",function($,B){var L=h(this),z=x(L),H=u(L),W=n($,H),R=arguments.length,F=0,V,q,Q,X,ie,Oe,Se;if(R===0)V=q=0;else if(R===1)V=0,q=H-W;else if(q=T(b(v(B),0),H-W),V=R-2,V){X=new z(V),Q=o(X);for(var Be=2;Be<R;Be++)ie=arguments[Be],X[Be-2]=Q?d(ie):+ie}for(Oe=H+V-q,Se=new z(Oe);F<W;F++)Se[F]=L[F];for(;F<W+V;F++)Se[F]=X[F-W];for(;F<Oe;F++)Se[F]=L[F+q-V];return Se},!A)},84444:function(s,f,e){"use strict";var i=e(1702),u=e(90260),o=e(97745),n=e(60956),d=u.aTypedArray,v=u.getTypedArrayConstructor,p=u.exportTypedArrayMethod,h=i(n);p("uniqueBy",function(y){return d(this),o(v(this),h(this,y))},!0)},68696:function(s,f,e){e(55315)},78206:function(s,f,e){"use strict";var i=e(82109),u=e(29257),o=e(60953).remove;i({target:"WeakMap",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var d=u(this),v=!0,p,h=0,x=arguments.length;h<x;h++)p=o(d,arguments[h]),v=v&&p;return!!v}})},12714:function(s,f,e){"use strict";var i=e(82109),u=e(29257),o=e(60953),n=o.get,d=o.has,v=o.set;i({target:"WeakMap",proto:!0,real:!0,forced:!0},{emplace:function(h,x){var y=u(this),b,T;return d(y,h)?(b=n(y,h),"update"in x&&(b=x.update(b,h,y),v(y,h,b)),b):(T=x.insert(h,y),v(y,h,T),T)}})},76478:function(s,f,e){var i=e(82109),u=e(27296);i({target:"WeakMap",stat:!0,forced:!0},{from:u})},79715:function(s,f,e){var i=e(82109),u=e(82044);i({target:"WeakMap",stat:!0,forced:!0},{of:u})},5964:function(s,f,e){"use strict";var i=e(82109),u=e(8154);i({target:"WeakMap",proto:!0,real:!0,forced:!0},{upsert:u})},43561:function(s,f,e){"use strict";var i=e(82109),u=e(72682),o=e(78818).add;i({target:"WeakSet",proto:!0,real:!0,forced:!0},{addAll:function(){for(var d=u(this),v=0,p=arguments.length;v<p;v++)o(d,arguments[v]);return d}})},32049:function(s,f,e){"use strict";var i=e(82109),u=e(72682),o=e(78818).remove;i({target:"WeakSet",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var d=u(this),v=!0,p,h=0,x=arguments.length;h<x;h++)p=o(d,arguments[h]),v=v&&p;return!!v}})},86020:function(s,f,e){var i=e(82109),u=e(27296);i({target:"WeakSet",stat:!0,forced:!0},{from:u})},56585:function(s,f,e){var i=e(82109),u=e(82044);i({target:"WeakSet",stat:!0,forced:!0},{of:u})},11091:function(s,f,e){var i=e(82109),u=e(17854),o=e(20261).clear;i({global:!0,bind:!0,enumerable:!0,forced:u.clearImmediate!==o},{clearImmediate:o})},82801:function(s,f,e){"use strict";var i=e(82109),u=e(17854),o=e(35005),n=e(79114),d=e(3070).f,v=e(92597),p=e(25787),h=e(79587),x=e(56277),y=e(93678),b=e(11060),T=e(19781),A=e(31913),C="DOMException",$=o("Error"),B=o(C),L=function(){p(this,z);var Be=arguments.length,ue=x(Be<1?void 0:arguments[0]),S=x(Be<2?void 0:arguments[1],"Error"),g=new B(ue,S),I=$(ue);return I.name=C,d(g,"stack",n(1,b(I.stack,1))),h(g,this,L),g},z=L.prototype=B.prototype,H="stack"in $(C),W="stack"in new B(1,2),R=B&&T&&Object.getOwnPropertyDescriptor(u,C),F=!!R&&!(R.writable&&R.configurable),V=H&&!F&&!W;i({global:!0,constructor:!0,forced:A||V},{DOMException:V?L:B});var q=o(C),Q=q.prototype;if(Q.constructor!==q){A||d(Q,"constructor",n(1,q));for(var X in y)if(v(y,X)){var ie=y[X],Oe=ie.s;v(q,Oe)||d(q,Oe,n(6,ie.c))}}},84633:function(s,f,e){e(11091),e(12986)},71550:function(s,f,e){"use strict";var i=e(82109),u=e(17854),o=e(47045),n=e(19781),d=TypeError,v=Object.defineProperty,p=u.self!==u;try{if(n){var h=Object.getOwnPropertyDescriptor(u,"self");(p||!h||!h.get||!h.enumerable)&&o(u,"self",{get:function(){return u},set:function(y){if(this!==u)throw d("Illegal invocation");v(u,"self",{value:y,writable:!0,configurable:!0,enumerable:!0})},configurable:!0,enumerable:!0})}else i({global:!0,simple:!0,forced:p},{self:u})}catch(x){}},12986:function(s,f,e){var i=e(82109),u=e(17854),o=e(20261).set,n=e(17152),d=u.setImmediate?n(o,!1):o;i({global:!0,bind:!0,enumerable:!0,forced:u.setImmediate!==d},{setImmediate:d})},61295:function(s,f,e){var i=e(31913),u=e(82109),o=e(17854),n=e(35005),d=e(1702),v=e(47293),p=e(69711),h=e(60614),x=e(4411),y=e(68554),b=e(70111),T=e(52190),A=e(20408),C=e(19670),$=e(70648),B=e(92597),L=e(86135),z=e(68880),H=e(26244),W=e(48053),R=e(34706),F=e(75706),V=e(79405),q=e(22914),Q=e(64124),X=o.Object,ie=o.Array,Oe=o.Date,Se=o.Error,Be=o.EvalError,ue=o.RangeError,S=o.ReferenceError,g=o.SyntaxError,I=o.TypeError,k=o.URIError,P=o.PerformanceMark,D=o.WebAssembly,oe=D&&D.CompileError||Se,he=D&&D.LinkError||Se,Re=D&&D.RuntimeError||Se,re=n("DOMException"),Ee=F.Map,Ve=F.has,Xe=F.get,Ze=F.set,ht=V.Set,Ct=V.add,Bt=n("Object","keys"),pr=d([].push),$r=d((!0).valueOf),tn=d(1 .valueOf),tt=d("".valueOf),Ie=d(Oe.prototype.getTime),be=p("structuredClone"),ye="DataCloneError",je="Transferring",fe=function(se){return!v(function(){var _e=new o.Set([7]),et=se(_e),at=se(X(7));return et==_e||!et.has(7)||typeof at!="object"||at!=7})&&se},me=function(se,_e){return!v(function(){var et=new _e,at=se({a:et,b:et});return!(at&&at.a===at.b&&at.a instanceof _e&&at.a.stack===et.stack)})},de=function(se){return!v(function(){var _e=se(new o.AggregateError([1],be,{cause:3}));return _e.name!="AggregateError"||_e.errors[0]!=1||_e.message!=be||_e.cause!=3})},ge=o.structuredClone,Me=i||!me(ge,Se)||!me(ge,re)||!de(ge),st=!ge&&fe(function(se){return new P(be,{detail:se}).detail}),it=fe(ge)||st,ft=function(se){throw new re("Uncloneable type: "+se,ye)},Mt=function(se,_e){throw new re((_e||"Cloning")+" of "+se+" cannot be properly polyfilled in this engine",ye)},Ft=function(){var se;try{se=new o.DataTransfer}catch(_e){try{se=new o.ClipboardEvent("").clipboardData}catch(et){}}return se&&se.items&&se.files?se:null},ee=function(se,_e){if(T(se)&&ft("Symbol"),!b(se))return se;if(_e){if(Ve(_e,se))return Xe(_e,se)}else _e=new Ee;var et=$(se),at=!1,ut,Lt,Qe,dt,It,Ue,Ge,nt,bt,ot;switch(et){case"Array":Qe=ie(H(se)),at=!0;break;case"Object":Qe={},at=!0;break;case"Map":Qe=new Ee,at=!0;break;case"Set":Qe=new ht,at=!0;break;case"RegExp":Qe=new RegExp(se.source,R(se));break;case"Error":switch(Lt=se.name,Lt){case"AggregateError":Qe=n("AggregateError")([]);break;case"EvalError":Qe=Be();break;case"RangeError":Qe=ue();break;case"ReferenceError":Qe=S();break;case"SyntaxError":Qe=g();break;case"TypeError":Qe=I();break;case"URIError":Qe=k();break;case"CompileError":Qe=oe();break;case"LinkError":Qe=he();break;case"RuntimeError":Qe=Re();break;default:Qe=Se()}at=!0;break;case"DOMException":Qe=new re(se.message,se.name),at=!0;break;case"DataView":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":ut=o[et],b(ut)||Mt(et),Qe=new ut(ee(se.buffer,_e),se.byteOffset,et==="DataView"?se.byteLength:se.length);break;case"DOMQuad":try{Qe=new DOMQuad(ee(se.p1,_e),ee(se.p2,_e),ee(se.p3,_e),ee(se.p4,_e))}catch(kt){it?Qe=it(se):Mt(et)}break;case"FileList":if(dt=Ft(),dt){for(It=0,Ue=H(se);It<Ue;It++)dt.items.add(ee(se[It],_e));Qe=dt.files}else it?Qe=it(se):Mt(et);break;case"ImageData":try{Qe=new ImageData(ee(se.data,_e),se.width,se.height,{colorSpace:se.colorSpace})}catch(kt){it?Qe=it(se):Mt(et)}break;default:if(it)Qe=it(se);else switch(et){case"BigInt":Qe=X(se.valueOf());break;case"Boolean":Qe=X($r(se));break;case"Number":Qe=X(tn(se));break;case"String":Qe=X(tt(se));break;case"Date":Qe=new Oe(Ie(se));break;case"ArrayBuffer":ut=o.DataView,!ut&&typeof se.slice!="function"&&Mt(et);try{if(typeof se.slice=="function")Qe=se.slice(0);else for(Ue=se.byteLength,Qe=new ArrayBuffer(Ue),bt=new ut(se),ot=new ut(Qe),It=0;It<Ue;It++)ot.setUint8(It,bt.getUint8(It))}catch(kt){throw new re("ArrayBuffer is detached",ye)}break;case"SharedArrayBuffer":Qe=se;break;case"Blob":try{Qe=se.slice(0,se.size,se.type)}catch(kt){Mt(et)}break;case"DOMPoint":case"DOMPointReadOnly":ut=o[et];try{Qe=ut.fromPoint?ut.fromPoint(se):new ut(se.x,se.y,se.z,se.w)}catch(kt){Mt(et)}break;case"DOMRect":case"DOMRectReadOnly":ut=o[et];try{Qe=ut.fromRect?ut.fromRect(se):new ut(se.x,se.y,se.width,se.height)}catch(kt){Mt(et)}break;case"DOMMatrix":case"DOMMatrixReadOnly":ut=o[et];try{Qe=ut.fromMatrix?ut.fromMatrix(se):new ut(se)}catch(kt){Mt(et)}break;case"AudioData":case"VideoFrame":h(se.clone)||Mt(et);try{Qe=se.clone()}catch(kt){ft(et)}break;case"File":try{Qe=new File([se],se.name,se)}catch(kt){Mt(et)}break;case"CropTarget":case"CryptoKey":case"FileSystemDirectoryHandle":case"FileSystemFileHandle":case"FileSystemHandle":case"GPUCompilationInfo":case"GPUCompilationMessage":case"ImageBitmap":case"RTCCertificate":case"WebAssembly.Module":Mt(et);default:ft(et)}}if(Ze(_e,se,Qe),at)switch(et){case"Array":case"Object":for(Ge=Bt(se),It=0,Ue=H(Ge);It<Ue;It++)nt=Ge[It],L(Qe,nt,ee(se[nt],_e));break;case"Map":se.forEach(function(kt,Wt){Ze(Qe,ee(Wt,_e),ee(kt,_e))});break;case"Set":se.forEach(function(kt){Ct(Qe,ee(kt,_e))});break;case"Error":z(Qe,"message",ee(se.message,_e)),B(se,"cause")&&z(Qe,"cause",ee(se.cause,_e)),Lt=="AggregateError"&&(Qe.errors=ee(se.errors,_e));case"DOMException":q&&z(Qe,"stack",ee(se.stack,_e))}return Qe},we=function(se,_e){if(!b(se))throw I("Transfer option cannot be converted to a sequence");var et=[];A(se,function(bt){pr(et,C(bt))});var at=0,ut=H(et),Lt,Qe,dt,It,Ue,Ge,nt;if(Q)for(It=ge(et,{transfer:et});at<ut;)Ze(_e,et[at],It[at++]);else for(;at<ut;){if(Lt=et[at++],Ve(_e,Lt))throw new re("Duplicate transferable",ye);switch(Qe=$(Lt),Qe){case"ImageBitmap":dt=o.OffscreenCanvas,x(dt)||Mt(Qe,je);try{Ge=new dt(Lt.width,Lt.height),nt=Ge.getContext("bitmaprenderer"),nt.transferFromImageBitmap(Lt),Ue=Ge.transferToImageBitmap()}catch(bt){}break;case"AudioData":case"VideoFrame":(!h(Lt.clone)||!h(Lt.close))&&Mt(Qe,je);try{Ue=Lt.clone(),Lt.close()}catch(bt){}break;case"ArrayBuffer":h(Lt.transfer)||Mt(Qe,je),Ue=Lt.transfer();break;case"MediaSourceHandle":case"MessagePort":case"OffscreenCanvas":case"ReadableStream":case"TransformStream":case"WritableStream":Mt(Qe,je)}if(Ue===void 0)throw new re("This object cannot be transferred: "+Qe,ye);Ze(_e,Lt,Ue)}};u({global:!0,enumerable:!0,sham:!Q,forced:Me},{structuredClone:function(_e){var et=W(arguments.length,1)>1&&!y(arguments[1])?C(arguments[1]):void 0,at=et?et.transfer:void 0,ut;return at!==void 0&&(ut=new Ee,we(at,ut)),ee(_e,ut)}})},59137:function(s,f,e){"use strict";var i=e(8081),u=e.n(i),o=e(23645),n=e.n(o),d=n()(u());d.push([s.id,`/**
 * One Light theme for prism.js
 * Based on Atom's One Light theme: https://github.com/atom/atom/tree/master/packages/one-light-syntax
 */

/**
 * One Light colours (accurate as of commit eb064bf on 19 Feb 2021)
 * From colors.less
 * --mono-1: hsl(230, 8%, 24%);
 * --mono-2: hsl(230, 6%, 44%);
 * --mono-3: hsl(230, 4%, 64%)
 * --hue-1: hsl(198, 99%, 37%);
 * --hue-2: hsl(221, 87%, 60%);
 * --hue-3: hsl(301, 63%, 40%);
 * --hue-4: hsl(119, 34%, 47%);
 * --hue-5: hsl(5, 74%, 59%);
 * --hue-5-2: hsl(344, 84%, 43%);
 * --hue-6: hsl(35, 99%, 36%);
 * --hue-6-2: hsl(35, 99%, 40%);
 * --syntax-fg: hsl(230, 8%, 24%);
 * --syntax-bg: hsl(230, 1%, 98%);
 * --syntax-gutter: hsl(230, 1%, 62%);
 * --syntax-guide: hsla(230, 8%, 24%, 0.2);
 * --syntax-accent: hsl(230, 100%, 66%);
 * From syntax-variables.less
 * --syntax-selection-color: hsl(230, 1%, 90%);
 * --syntax-gutter-background-color-selected: hsl(230, 1%, 90%);
 * --syntax-cursor-line: hsla(230, 8%, 24%, 0.05);
 */

code[class*="language-"],
pre[class*="language-"] {
	background: hsl(230, 1%, 98%);
	color: hsl(230, 8%, 24%);
	font-family: "Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace;
	direction: ltr;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	line-height: 1.5;
	tab-size: 2;
	hyphens: none;
}

/* Selection */

code[class*="language-"]::selection,
code[class*="language-"] *::selection,
pre[class*="language-"] *::selection {
	background: hsl(230, 1%, 90%);
	color: inherit;
}

/* Code blocks */
pre[class*="language-"] {
	padding: 1em;
	margin: 0.5em 0;
	overflow: auto;
	border-radius: 0.3em;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: 0.2em 0.3em;
	border-radius: 0.3em;
	white-space: normal;
}

.token.comment,
.token.prolog,
.token.cdata {
	color: hsl(230, 4%, 64%);
}

.token.doctype,
.token.punctuation,
.token.entity {
	color: hsl(230, 8%, 24%);
}

.token.attr-name,
.token.class-name,
.token.boolean,
.token.constant,
.token.number,
.token.atrule {
	color: hsl(35, 99%, 36%);
}

.token.keyword {
	color: hsl(301, 63%, 40%);
}

.token.property,
.token.tag,
.token.symbol,
.token.deleted,
.token.important {
	color: hsl(5, 74%, 59%);
}

.token.selector,
.token.string,
.token.char,
.token.builtin,
.token.inserted,
.token.regex,
.token.attr-value,
.token.attr-value > .token.punctuation {
	color: hsl(119, 34%, 47%);
}

.token.variable,
.token.operator,
.token.function {
	color: hsl(221, 87%, 60%);
}

.token.url {
	color: hsl(198, 99%, 37%);
}

/* HTML overrides */
.token.attr-value > .token.punctuation.attr-equals,
.token.special-attr > .token.attr-value > .token.value.css {
	color: hsl(230, 8%, 24%);
}

/* CSS overrides */
.language-css .token.selector {
	color: hsl(5, 74%, 59%);
}

.language-css .token.property {
	color: hsl(230, 8%, 24%);
}

.language-css .token.function,
.language-css .token.url > .token.function {
	color: hsl(198, 99%, 37%);
}

.language-css .token.url > .token.string.url {
	color: hsl(119, 34%, 47%);
}

.language-css .token.important,
.language-css .token.atrule .token.rule {
	color: hsl(301, 63%, 40%);
}

/* JS overrides */
.language-javascript .token.operator {
	color: hsl(301, 63%, 40%);
}

.language-javascript .token.template-string > .token.interpolation > .token.interpolation-punctuation.punctuation {
	color: hsl(344, 84%, 43%);
}

/* JSON overrides */
.language-json .token.operator {
	color: hsl(230, 8%, 24%);
}

.language-json .token.null.keyword {
	color: hsl(35, 99%, 36%);
}

/* MD overrides */
.language-markdown .token.url,
.language-markdown .token.url > .token.operator,
.language-markdown .token.url-reference.url > .token.string {
	color: hsl(230, 8%, 24%);
}

.language-markdown .token.url > .token.content {
	color: hsl(221, 87%, 60%);
}

.language-markdown .token.url > .token.url,
.language-markdown .token.url-reference.url {
	color: hsl(198, 99%, 37%);
}

.language-markdown .token.blockquote.punctuation,
.language-markdown .token.hr.punctuation {
	color: hsl(230, 4%, 64%);
	font-style: italic;
}

.language-markdown .token.code-snippet {
	color: hsl(119, 34%, 47%);
}

.language-markdown .token.bold .token.content {
	color: hsl(35, 99%, 36%);
}

.language-markdown .token.italic .token.content {
	color: hsl(301, 63%, 40%);
}

.language-markdown .token.strike .token.content,
.language-markdown .token.strike .token.punctuation,
.language-markdown .token.list.punctuation,
.language-markdown .token.title.important > .token.punctuation {
	color: hsl(5, 74%, 59%);
}

/* General */
.token.bold {
	font-weight: bold;
}

.token.comment,
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}

.token.namespace {
	opacity: 0.8;
}

/* Plugin overrides */
/* Selectors should have higher specificity than those in the plugins' default stylesheets */

/* Show Invisibles plugin overrides */
.token.token.tab:not(:empty):before,
.token.token.cr:before,
.token.token.lf:before,
.token.token.space:before {
	color: hsla(230, 8%, 24%, 0.2);
}

/* Toolbar plugin overrides */
/* Space out all buttons and move them away from the right edge of the code block */
div.code-toolbar > .toolbar.toolbar > .toolbar-item {
	margin-right: 0.4em;
}

/* Styling the buttons */
div.code-toolbar > .toolbar.toolbar > .toolbar-item > button,
div.code-toolbar > .toolbar.toolbar > .toolbar-item > a,
div.code-toolbar > .toolbar.toolbar > .toolbar-item > span {
	background: hsl(230, 1%, 90%);
	color: hsl(230, 6%, 44%);
	padding: 0.1em 0.4em;
	border-radius: 0.3em;
}

div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover,
div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus,
div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover,
div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus,
div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover,
div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus {
	background: hsl(230, 1%, 78%); /* custom: darken(--syntax-bg, 20%) */
	color: hsl(230, 8%, 24%);
}

/* Line Highlight plugin overrides */
/* The highlighted line itself */
.line-highlight.line-highlight {
	background: hsla(230, 8%, 24%, 0.05);
}

/* Default line numbers in Line Highlight plugin */
.line-highlight.line-highlight:before,
.line-highlight.line-highlight[data-end]:after {
	background: hsl(230, 1%, 90%);
	color: hsl(230, 8%, 24%);
	padding: 0.1em 0.6em;
	border-radius: 0.3em;
	box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.2); /* same as Toolbar plugin default */
}

/* Hovering over a linkable line number (in the gutter area) */
/* Requires Line Numbers plugin as well */
pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before {
	background-color: hsla(230, 8%, 24%, 0.05);
}

/* Line Numbers and Command Line plugins overrides */
/* Line separating gutter from coding area */
.line-numbers.line-numbers .line-numbers-rows,
.command-line .command-line-prompt {
	border-right-color: hsla(230, 8%, 24%, 0.2);
}

/* Stuff in the gutter */
.line-numbers .line-numbers-rows > span:before,
.command-line .command-line-prompt > span:before {
	color: hsl(230, 1%, 62%);
}

/* Match Braces plugin overrides */
/* Note: Outline colour is inherited from the braces */
.rainbow-braces .token.token.punctuation.brace-level-1,
.rainbow-braces .token.token.punctuation.brace-level-5,
.rainbow-braces .token.token.punctuation.brace-level-9 {
	color: hsl(5, 74%, 59%);
}

.rainbow-braces .token.token.punctuation.brace-level-2,
.rainbow-braces .token.token.punctuation.brace-level-6,
.rainbow-braces .token.token.punctuation.brace-level-10 {
	color: hsl(119, 34%, 47%);
}

.rainbow-braces .token.token.punctuation.brace-level-3,
.rainbow-braces .token.token.punctuation.brace-level-7,
.rainbow-braces .token.token.punctuation.brace-level-11 {
	color: hsl(221, 87%, 60%);
}

.rainbow-braces .token.token.punctuation.brace-level-4,
.rainbow-braces .token.token.punctuation.brace-level-8,
.rainbow-braces .token.token.punctuation.brace-level-12 {
	color: hsl(301, 63%, 40%);
}

/* Diff Highlight plugin overrides */
/* Taken from https://github.com/atom/github/blob/master/styles/variables.less */
pre.diff-highlight > code .token.token.deleted:not(.prefix),
pre > code.diff-highlight .token.token.deleted:not(.prefix) {
	background-color: hsla(353, 100%, 66%, 0.15);
}

pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection,
pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection,
pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection,
pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection {
	background-color: hsla(353, 95%, 66%, 0.25);
}

pre.diff-highlight > code .token.token.inserted:not(.prefix),
pre > code.diff-highlight .token.token.inserted:not(.prefix) {
	background-color: hsla(137, 100%, 55%, 0.15);
}

pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection,
pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection,
pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection,
pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection {
	background-color: hsla(135, 73%, 55%, 0.25);
}

/* Previewers plugin overrides */
/* Based on https://github.com/atom-community/atom-ide-datatip/blob/master/styles/atom-ide-datatips.less and https://github.com/atom/atom/blob/master/packages/one-light-ui */
/* Border around popup */
.prism-previewer.prism-previewer:before,
.prism-previewer-gradient.prism-previewer-gradient div {
	border-color: hsl(0, 0, 95%);
}

/* Angle and time should remain as circles and are hence not included */
.prism-previewer-color.prism-previewer-color:before,
.prism-previewer-gradient.prism-previewer-gradient div,
.prism-previewer-easing.prism-previewer-easing:before {
	border-radius: 0.3em;
}

/* Triangles pointing to the code */
.prism-previewer.prism-previewer:after {
	border-top-color: hsl(0, 0, 95%);
}

.prism-previewer-flipped.prism-previewer-flipped.after {
	border-bottom-color: hsl(0, 0, 95%);
}

/* Background colour within the popup */
.prism-previewer-angle.prism-previewer-angle:before,
.prism-previewer-time.prism-previewer-time:before,
.prism-previewer-easing.prism-previewer-easing {
	background: hsl(0, 0%, 100%);
}

/* For angle, this is the positive area (eg. 90deg will display one quadrant in this colour) */
/* For time, this is the alternate colour */
.prism-previewer-angle.prism-previewer-angle circle,
.prism-previewer-time.prism-previewer-time circle {
	stroke: hsl(230, 8%, 24%);
	stroke-opacity: 1;
}

/* Stroke colours of the handle, direction point, and vector itself */
.prism-previewer-easing.prism-previewer-easing circle,
.prism-previewer-easing.prism-previewer-easing path,
.prism-previewer-easing.prism-previewer-easing line {
	stroke: hsl(230, 8%, 24%);
}

/* Fill colour of the handle */
.prism-previewer-easing.prism-previewer-easing circle {
	fill: transparent;
}
`,""]),f.Z=d},53891:function(s,f,e){"use strict";var i=e(8081),u=e.n(i),o=e(23645),n=e.n(o),d=e(61667),v=e.n(d),p=new URL(e(98390),e.b),h=new URL(e(39048),e.b),x=new URL(e(48951),e.b),y=n()(u()),b=v()(p),T=v()(h),A=v()(x);y.push([s.id,`html {
  --primary: #41403e;
  --secondary: #0b74d5;
  --success: #86a361;
  --warning: #ddcd45;
  --danger: #a7342d;
  --muted: #868e96;
  --primary-light: #cdcccb;
  --secondary-light: #d8ebfd;
  --success-light: #d5dfc8;
  --warning-light: #f5f0c6;
  --danger-light: #f0cbc9;
  --muted-light: #e6e7e9;
  --primary-dark: black;
  --secondary-dark: black;
  --success-dark: #374427;
  --warning-dark: #746a15;
  --danger-dark: black;
  --muted-dark: #313538;
  --primary-light-10: #5b5a57;
  --secondary-light-10: #208ef3;
  --success-light-10: #9fb681;
  --warning-light-10: #e5d970;
  --danger-light-10: #cb453c;
  --muted-light-10: #a1a8ae;
  --primary-dark-10: #272625;
  --secondary-dark-10: #085aa5;
  --success-dark-10: #4a5a35;
  --warning-dark-10: #746a15;
  --danger-dark-10: #7f2722;
  --muted-dark-10: #6c757d;
  --primary-shaded-50: #c1c0bd;
  --primary-shaded-70: #f2f2f2;
  --white-dark: rgba(0, 0, 0, 0.03);
  --white-dark-light-80: rgba(204, 204, 204, 0.03);
  --light-dark: rgba(0, 0, 0, 0.7);
  --white: white;
  --main-background: white;
  --main-background-light: white;
  --black: black;
  --primary-text: #272625;
  --secondary-text: #085aa5;
  --success-text: #4a5a35;
  --warning-text: #746a15;
  --danger-text: #7f2722;
  --muted-text: #6c757d;
  --shadow-color-regular: rgba(0, 0, 0, 0.2);
  --shadow-color-hover: rgba(0, 0, 0, 0.3);
  --primary-inverse: #fff;
}
html.dark {
  --primary: #fff;
  --secondary: #5595ce;
  --success: #70c272;
  --warning: #d4c252;
  --danger: #df4c57;
  --muted: #868e96;
  --primary-light: white;
  --secondary-light: #69a1d4;
  --success-light: #82ca84;
  --warning-light: #d9c966;
  --danger-light: #e3626b;
  --muted-light: #949ba2;
  --primary-dark: gray;
  --secondary-dark: #1f476b;
  --success-dark: #265927;
  --warning-dark: #71651c;
  --danger-dark: #7c161e;
  --muted-dark: #313538;
  --primary-light-10: white;
  --secondary-light-10: #7daed9;
  --success-light-10: #94d195;
  --warning-light-10: #ded07b;
  --danger-light-10: #e77780;
  --muted-light-10: #a1a8ae;
  --primary-dark-10: #e6e6e6;
  --secondary-dark-10: #367cba;
  --success-dark-10: #4cb34f;
  --warning-dark-10: #c3ae30;
  --danger-dark-10: #d22633;
  --muted-dark-10: #6c757d;
  --primary-shaded-50: #343332;
  --primary-shaded-70: #2f2e2d;
  --white-dark: rgba(255, 255, 255, 0.03);
  --white-dark-light-80: rgba(255, 255, 255, 0.03);
  --light-dark: rgba(255, 255, 255, 0.7);
  --white: white;
  --main-background: #41403e;
  --main-background-light: #c1c0bd;
  --black: black;
  --primary-text: #41403e;
  --secondary-text: #1f476b;
  --success-text: #265927;
  --warning-text: #71651c;
  --danger-text: #7c161e;
  --muted-text: #949ba2;
  --shadow-color-regular: rgba(0, 0, 0, 0.2);
  --shadow-color-hover: rgba(0, 0, 0, 0.3);
  --primary-inverse: #41403e;
}
.dumi-default-hero-title {
  font-size: 150px !important;
}
.dumi-default-previewer-demo {
  @charset "UTF-8";
  line-height: 1.15;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  color: #41403e;
  color: var(--primary);
  font-family: 'Neucha', sans-serif;
  font-size: 20px;
  /* PaperCSS core */
  /**
  Global PaperCSS Config
*/
  /* stylelint-disable */
  /* stylelint-enable */
  /**
  This Loop will generate the various .text- and .background- classes
  based on the $colors map above.
*/
  /**
  PaperCSS Mixins
*/
  /**
  Assign a border style to a component selector.
  @param    integer
  @default  1
*/
  /**
  Mixin for setting responsive breakpoints
  @param string | integer
  @default null
*/
  /**
  Useful helper mixins
*/
  /*
  Add transform: translate() with browser prefixes.
  Same syntax for translate() and translate3d()
  To get 3D add a $z value and set 'true'
  @param string | boolean
  @default 0 | false
*/
  /*
  Add global transition styles to selector
  @param string
  @default all | 235ms | ease-in-out | 0
*/
  /**
  Set the shadow type for a component
  @param    string
  @default  regular
*/
  /**
  Sets a striped background on a component
  @param    string
*/
  /*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */
  /* stylelint-disable */
  /* stylelint-enable */
  /* Layout styling */
  /* Content styling */
  /* Utilities */
  /* Components */
}
@font-face {
  font-family: 'Neucha';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(http://fonts.gstatic.com/s/neucha/v17/q5uGsou0JOdh94bfvQlo.ttf) format('truetype');
}
@font-face {
  font-family: 'Patrick Hand SC';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(http://fonts.gstatic.com/s/patrickhandsc/v13/0nkwC9f7MfsBiWcLtY65AWDK873ljiK-.ttf) format('truetype');
}
.dumi-default-previewer-demo html {
  --primary: #41403e;
  --secondary: #0b74d5;
  --success: #86a361;
  --warning: #ddcd45;
  --danger: #a7342d;
  --muted: #868e96;
  --primary-light: #cdcccb;
  --secondary-light: #d8ebfd;
  --success-light: #d5dfc8;
  --warning-light: #f5f0c6;
  --danger-light: #f0cbc9;
  --muted-light: #e6e7e9;
  --primary-dark: black;
  --secondary-dark: black;
  --success-dark: #374427;
  --warning-dark: #746a15;
  --danger-dark: black;
  --muted-dark: #313538;
  --primary-light-10: #5b5a57;
  --secondary-light-10: #208ef3;
  --success-light-10: #9fb681;
  --warning-light-10: #e5d970;
  --danger-light-10: #cb453c;
  --muted-light-10: #a1a8ae;
  --primary-dark-10: #272625;
  --secondary-dark-10: #085aa5;
  --success-dark-10: #4a5a35;
  --warning-dark-10: #746a15;
  --danger-dark-10: #7f2722;
  --muted-dark-10: #6c757d;
  --primary-shaded-50: #c1c0bd;
  --primary-shaded-70: #f2f2f2;
  --white-dark: rgba(0, 0, 0, 0.03);
  --white-dark-light-80: rgba(204, 204, 204, 0.03);
  --light-dark: rgba(0, 0, 0, 0.7);
  --white: white;
  --main-background: white;
  --main-background-light: white;
  --black: black;
  --primary-text: #272625;
  --secondary-text: #085aa5;
  --success-text: #4a5a35;
  --warning-text: #746a15;
  --danger-text: #7f2722;
  --muted-text: #6c757d;
  --shadow-color-regular: rgba(0, 0, 0, 0.2);
  --shadow-color-hover: rgba(0, 0, 0, 0.3);
  --primary-inverse: #fff;
}
.dumi-default-previewer-demo html.dark {
  --primary: #fff;
  --secondary: #5595ce;
  --success: #70c272;
  --warning: #d4c252;
  --danger: #df4c57;
  --muted: #868e96;
  --primary-light: white;
  --secondary-light: #69a1d4;
  --success-light: #82ca84;
  --warning-light: #d9c966;
  --danger-light: #e3626b;
  --muted-light: #949ba2;
  --primary-dark: gray;
  --secondary-dark: #1f476b;
  --success-dark: #265927;
  --warning-dark: #71651c;
  --danger-dark: #7c161e;
  --muted-dark: #313538;
  --primary-light-10: white;
  --secondary-light-10: #7daed9;
  --success-light-10: #94d195;
  --warning-light-10: #ded07b;
  --danger-light-10: #e77780;
  --muted-light-10: #a1a8ae;
  --primary-dark-10: #e6e6e6;
  --secondary-dark-10: #367cba;
  --success-dark-10: #4cb34f;
  --warning-dark-10: #c3ae30;
  --danger-dark-10: #d22633;
  --muted-dark-10: #6c757d;
  --primary-shaded-50: #343332;
  --primary-shaded-70: #2f2e2d;
  --white-dark: rgba(255, 255, 255, 0.03);
  --white-dark-light-80: rgba(255, 255, 255, 0.03);
  --light-dark: rgba(255, 255, 255, 0.7);
  --white: white;
  --main-background: #41403e;
  --main-background-light: #c1c0bd;
  --black: black;
  --primary-text: #41403e;
  --secondary-text: #1f476b;
  --success-text: #265927;
  --warning-text: #71651c;
  --danger-text: #7c161e;
  --muted-text: #949ba2;
  --shadow-color-regular: rgba(0, 0, 0, 0.2);
  --shadow-color-hover: rgba(0, 0, 0, 0.3);
  --primary-inverse: #41403e;
}
.dumi-default-previewer-demo .text-primary {
  color: #41403e;
  color: var(--primary);
}
.dumi-default-previewer-demo .background-primary {
  background-color: #41403e;
  background-color: var(--primary-light);
}
.dumi-default-previewer-demo .text-secondary {
  color: #41403e;
  color: var(--secondary);
}
.dumi-default-previewer-demo .background-secondary {
  background-color: #41403e;
  background-color: var(--secondary-light);
}
.dumi-default-previewer-demo .text-success {
  color: #41403e;
  color: var(--success);
}
.dumi-default-previewer-demo .background-success {
  background-color: #41403e;
  background-color: var(--success-light);
}
.dumi-default-previewer-demo .text-warning {
  color: #41403e;
  color: var(--warning);
}
.dumi-default-previewer-demo .background-warning {
  background-color: #41403e;
  background-color: var(--warning-light);
}
.dumi-default-previewer-demo .text-danger {
  color: #41403e;
  color: var(--danger);
}
.dumi-default-previewer-demo .background-danger {
  background-color: #41403e;
  background-color: var(--danger-light);
}
.dumi-default-previewer-demo .text-muted {
  color: #41403e;
  color: var(--muted);
}
.dumi-default-previewer-demo .background-muted {
  background-color: #41403e;
  background-color: var(--muted-light);
}
.dumi-default-previewer-demo html {
  line-height: 1.15;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
.dumi-default-previewer-demo body {
  margin: 0;
}
.dumi-default-previewer-demo article,
.dumi-default-previewer-demo aside,
.dumi-default-previewer-demo footer,
.dumi-default-previewer-demo header,
.dumi-default-previewer-demo nav,
.dumi-default-previewer-demo section {
  display: block;
}
.dumi-default-previewer-demo h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
.dumi-default-previewer-demo figcaption,
.dumi-default-previewer-demo figure,
.dumi-default-previewer-demo main {
  display: block;
}
.dumi-default-previewer-demo figure {
  margin: 1em 40px;
}
.dumi-default-previewer-demo hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
.dumi-default-previewer-demo pre {
  font-family: monospace, monospace;
  font-size: 1em;
}
.dumi-default-previewer-demo a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}
.dumi-default-previewer-demo abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}
.dumi-default-previewer-demo b,
.dumi-default-previewer-demo strong {
  font-weight: inherit;
}
.dumi-default-previewer-demo b,
.dumi-default-previewer-demo strong {
  font-weight: bolder;
}
.dumi-default-previewer-demo code,
.dumi-default-previewer-demo kbd,
.dumi-default-previewer-demo samp {
  font-family: monospace, monospace;
  font-size: 1em;
}
.dumi-default-previewer-demo dfn {
  font-style: italic;
}
.dumi-default-previewer-demo mark {
  background-color: #ff0;
  color: #000;
}
.dumi-default-previewer-demo small {
  font-size: 80%;
}
.dumi-default-previewer-demo sub,
.dumi-default-previewer-demo sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
.dumi-default-previewer-demo sub {
  bottom: -0.25em;
}
.dumi-default-previewer-demo sup {
  top: -0.5em;
}
.dumi-default-previewer-demo audio,
.dumi-default-previewer-demo video {
  display: inline-block;
}
.dumi-default-previewer-demo audio:not([controls]) {
  display: none;
  height: 0;
}
.dumi-default-previewer-demo img {
  border-style: none;
}
.dumi-default-previewer-demo svg:not(:root) {
  overflow: hidden;
}
.dumi-default-previewer-demo button,
.dumi-default-previewer-demo input,
.dumi-default-previewer-demo optgroup,
.dumi-default-previewer-demo select,
.dumi-default-previewer-demo textarea {
  font-family: sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
.dumi-default-previewer-demo button,
.dumi-default-previewer-demo input {
  overflow: visible;
}
.dumi-default-previewer-demo button,
.dumi-default-previewer-demo select {
  text-transform: none;
}
.dumi-default-previewer-demo [type=reset],
.dumi-default-previewer-demo [type=submit],
.dumi-default-previewer-demo button,
.dumi-default-previewer-demo html [type=button] {
  -webkit-appearance: button;
}
.dumi-default-previewer-demo [type=button]::-moz-focus-inner,
.dumi-default-previewer-demo [type=reset]::-moz-focus-inner,
.dumi-default-previewer-demo [type=submit]::-moz-focus-inner,
.dumi-default-previewer-demo button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
.dumi-default-previewer-demo [type=button]:-moz-focusring,
.dumi-default-previewer-demo [type=reset]:-moz-focusring,
.dumi-default-previewer-demo [type=submit]:-moz-focusring,
.dumi-default-previewer-demo button:-moz-focusring {
  outline: 1px dotted ButtonText;
}
.dumi-default-previewer-demo fieldset {
  padding: 0.35em 0.75em 0.625em;
}
.dumi-default-previewer-demo legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}
.dumi-default-previewer-demo progress {
  display: inline-block;
  vertical-align: baseline;
}
.dumi-default-previewer-demo textarea {
  overflow: auto;
}
.dumi-default-previewer-demo [type=checkbox],
.dumi-default-previewer-demo [type=radio] {
  box-sizing: border-box;
  padding: 0;
}
.dumi-default-previewer-demo [type=number]::-webkit-inner-spin-button,
.dumi-default-previewer-demo [type=number]::-webkit-outer-spin-button {
  height: auto;
}
.dumi-default-previewer-demo [type=search] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
.dumi-default-previewer-demo [type=search]::-webkit-search-cancel-button,
.dumi-default-previewer-demo [type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}
.dumi-default-previewer-demo ::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
.dumi-default-previewer-demo details,
.dumi-default-previewer-demo menu {
  display: block;
}
.dumi-default-previewer-demo summary {
  display: list-item;
}
.dumi-default-previewer-demo canvas {
  display: inline-block;
}
.dumi-default-previewer-demo template {
  display: none;
}
.dumi-default-previewer-demo [hidden] {
  display: none;
}
.dumi-default-previewer-demo html {
  box-sizing: border-box;
}
.dumi-default-previewer-demo *,
.dumi-default-previewer-demo *:before,
.dumi-default-previewer-demo *:after {
  box-sizing: inherit;
}
.dumi-default-previewer-demo .container {
  margin: 0 auto;
  max-width: 960px;
  position: relative;
  width: 100%;
}
@media only screen and (max-width: 992px) {
  .dumi-default-previewer-demo .container {
    width: 85%;
  }
}
@media only screen and (max-width: 480px) {
  .dumi-default-previewer-demo .container {
    width: 90%;
  }
}
.dumi-default-previewer-demo .container.container-xs {
  max-width: 480px;
}
.dumi-default-previewer-demo .container.container-sm {
  max-width: 768px;
}
.dumi-default-previewer-demo .container.container-md {
  max-width: 992px;
}
.dumi-default-previewer-demo .container.container-lg {
  max-width: 1200px;
}
.dumi-default-previewer-demo .section {
  margin-bottom: 2rem;
  margin-top: 1rem;
  word-wrap: break-word;
}
.dumi-default-previewer-demo .section::after {
  color: #8f8d89;
  content: "~~~";
  display: block;
  font-size: 1.5rem;
  position: relative;
  text-align: center;
}
.dumi-default-previewer-demo hr {
  border: 0;
}
.dumi-default-previewer-demo hr::after {
  color: #8f8d89;
  content: "~~~";
  display: block;
  font-size: 1.5rem;
  position: relative;
  text-align: center;
  top: -0.75rem;
}
.dumi-default-previewer-demo .paper {
  background-color: #41403e;
  background-color: var(--main-background);
  border: 1px solid #cdcccb;
  box-shadow: -1px 5px 35px -9px rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
  margin-top: 1rem;
  padding: 2rem;
}
@media only screen and (max-width: 480px) {
  .dumi-default-previewer-demo .paper {
    margin-bottom: 0;
    margin-top: 0;
    padding: 1rem;
    width: 100%;
  }
}
.dumi-default-previewer-demo .row {
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
}
.dumi-default-previewer-demo .row.flex-right {
  justify-content: flex-end;
}
.dumi-default-previewer-demo .row.flex-center {
  justify-content: center;
}
.dumi-default-previewer-demo .row.flex-edges {
  justify-content: space-between;
}
.dumi-default-previewer-demo .row.flex-spaces {
  justify-content: space-around;
}
.dumi-default-previewer-demo .row.flex-top {
  align-items: flex-start;
}
.dumi-default-previewer-demo .row.flex-middle {
  align-items: center;
}
.dumi-default-previewer-demo .row.flex-bottom {
  align-items: flex-end;
}
.dumi-default-previewer-demo .col {
  padding: 1rem;
}
@media only screen and (max-width: 768px) {
  .dumi-default-previewer-demo .col {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
.dumi-default-previewer-demo .col-fill {
  flex: 1 1;
  width: auto;
}
@media only screen and (min-width: 0) {
  .dumi-default-previewer-demo .col-1 {
    flex: 0 0 8.33333333%;
    max-width: 8.33333333%;
  }
  .dumi-default-previewer-demo .col-2 {
    flex: 0 0 16.66666667%;
    max-width: 16.66666667%;
  }
  .dumi-default-previewer-demo .col-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .dumi-default-previewer-demo .col-4 {
    flex: 0 0 33.33333333%;
    max-width: 33.33333333%;
  }
  .dumi-default-previewer-demo .col-5 {
    flex: 0 0 41.66666667%;
    max-width: 41.66666667%;
  }
  .dumi-default-previewer-demo .col-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .dumi-default-previewer-demo .col-7 {
    flex: 0 0 58.33333333%;
    max-width: 58.33333333%;
  }
  .dumi-default-previewer-demo .col-8 {
    flex: 0 0 66.66666667%;
    max-width: 66.66666667%;
  }
  .dumi-default-previewer-demo .col-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .dumi-default-previewer-demo .col-10 {
    flex: 0 0 83.33333333%;
    max-width: 83.33333333%;
  }
  .dumi-default-previewer-demo .col-11 {
    flex: 0 0 91.66666667%;
    max-width: 91.66666667%;
  }
  .dumi-default-previewer-demo .col-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
@media only screen and (min-width: 480px) {
  .dumi-default-previewer-demo .xs-1 {
    flex: 0 0 8.33333333%;
    max-width: 8.33333333%;
  }
  .dumi-default-previewer-demo .xs-2 {
    flex: 0 0 16.66666667%;
    max-width: 16.66666667%;
  }
  .dumi-default-previewer-demo .xs-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .dumi-default-previewer-demo .xs-4 {
    flex: 0 0 33.33333333%;
    max-width: 33.33333333%;
  }
  .dumi-default-previewer-demo .xs-5 {
    flex: 0 0 41.66666667%;
    max-width: 41.66666667%;
  }
  .dumi-default-previewer-demo .xs-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .dumi-default-previewer-demo .xs-7 {
    flex: 0 0 58.33333333%;
    max-width: 58.33333333%;
  }
  .dumi-default-previewer-demo .xs-8 {
    flex: 0 0 66.66666667%;
    max-width: 66.66666667%;
  }
  .dumi-default-previewer-demo .xs-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .dumi-default-previewer-demo .xs-10 {
    flex: 0 0 83.33333333%;
    max-width: 83.33333333%;
  }
  .dumi-default-previewer-demo .xs-11 {
    flex: 0 0 91.66666667%;
    max-width: 91.66666667%;
  }
  .dumi-default-previewer-demo .xs-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
@media only screen and (min-width: 768px) {
  .dumi-default-previewer-demo .sm-1 {
    flex: 0 0 8.33333333%;
    max-width: 8.33333333%;
  }
  .dumi-default-previewer-demo .sm-2 {
    flex: 0 0 16.66666667%;
    max-width: 16.66666667%;
  }
  .dumi-default-previewer-demo .sm-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .dumi-default-previewer-demo .sm-4 {
    flex: 0 0 33.33333333%;
    max-width: 33.33333333%;
  }
  .dumi-default-previewer-demo .sm-5 {
    flex: 0 0 41.66666667%;
    max-width: 41.66666667%;
  }
  .dumi-default-previewer-demo .sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .dumi-default-previewer-demo .sm-7 {
    flex: 0 0 58.33333333%;
    max-width: 58.33333333%;
  }
  .dumi-default-previewer-demo .sm-8 {
    flex: 0 0 66.66666667%;
    max-width: 66.66666667%;
  }
  .dumi-default-previewer-demo .sm-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .dumi-default-previewer-demo .sm-10 {
    flex: 0 0 83.33333333%;
    max-width: 83.33333333%;
  }
  .dumi-default-previewer-demo .sm-11 {
    flex: 0 0 91.66666667%;
    max-width: 91.66666667%;
  }
  .dumi-default-previewer-demo .sm-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
@media only screen and (min-width: 992px) {
  .dumi-default-previewer-demo .md-1 {
    flex: 0 0 8.33333333%;
    max-width: 8.33333333%;
  }
  .dumi-default-previewer-demo .md-2 {
    flex: 0 0 16.66666667%;
    max-width: 16.66666667%;
  }
  .dumi-default-previewer-demo .md-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .dumi-default-previewer-demo .md-4 {
    flex: 0 0 33.33333333%;
    max-width: 33.33333333%;
  }
  .dumi-default-previewer-demo .md-5 {
    flex: 0 0 41.66666667%;
    max-width: 41.66666667%;
  }
  .dumi-default-previewer-demo .md-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .dumi-default-previewer-demo .md-7 {
    flex: 0 0 58.33333333%;
    max-width: 58.33333333%;
  }
  .dumi-default-previewer-demo .md-8 {
    flex: 0 0 66.66666667%;
    max-width: 66.66666667%;
  }
  .dumi-default-previewer-demo .md-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .dumi-default-previewer-demo .md-10 {
    flex: 0 0 83.33333333%;
    max-width: 83.33333333%;
  }
  .dumi-default-previewer-demo .md-11 {
    flex: 0 0 91.66666667%;
    max-width: 91.66666667%;
  }
  .dumi-default-previewer-demo .md-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
@media only screen and (min-width: 1200px) {
  .dumi-default-previewer-demo .lg-1 {
    flex: 0 0 8.33333333%;
    max-width: 8.33333333%;
  }
  .dumi-default-previewer-demo .lg-2 {
    flex: 0 0 16.66666667%;
    max-width: 16.66666667%;
  }
  .dumi-default-previewer-demo .lg-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .dumi-default-previewer-demo .lg-4 {
    flex: 0 0 33.33333333%;
    max-width: 33.33333333%;
  }
  .dumi-default-previewer-demo .lg-5 {
    flex: 0 0 41.66666667%;
    max-width: 41.66666667%;
  }
  .dumi-default-previewer-demo .lg-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .dumi-default-previewer-demo .lg-7 {
    flex: 0 0 58.33333333%;
    max-width: 58.33333333%;
  }
  .dumi-default-previewer-demo .lg-8 {
    flex: 0 0 66.66666667%;
    max-width: 66.66666667%;
  }
  .dumi-default-previewer-demo .lg-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .dumi-default-previewer-demo .lg-10 {
    flex: 0 0 83.33333333%;
    max-width: 83.33333333%;
  }
  .dumi-default-previewer-demo .lg-11 {
    flex: 0 0 91.66666667%;
    max-width: 91.66666667%;
  }
  .dumi-default-previewer-demo .lg-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
.dumi-default-previewer-demo .align-top {
  align-self: flex-start;
}
.dumi-default-previewer-demo .align-middle {
  align-self: center;
}
.dumi-default-previewer-demo .align-bottom {
  align-self: flex-end;
}
.dumi-default-previewer-demo .container {
  margin: 0 auto;
  max-width: 960px;
  position: relative;
  width: 100%;
}
@media only screen and (max-width: 992px) {
  .dumi-default-previewer-demo .container {
    width: 85%;
  }
}
@media only screen and (max-width: 480px) {
  .dumi-default-previewer-demo .container {
    width: 90%;
  }
}
.dumi-default-previewer-demo code {
  color: #41403e;
  color: var(--secondary);
  background-color: #41403e;
  background-color: var(--primary-shaded-70);
  border-radius: 3px;
  font-size: 80%;
  padding: 2px 4px;
}
.dumi-default-previewer-demo kbd {
  color: #41403e;
  color: var(--primary-inverse);
  background-color: #41403e;
  background-color: var(--primary);
  border-radius: 3px;
  font-size: 80%;
  padding: 2px 4px;
}
.dumi-default-previewer-demo pre {
  color: #41403e;
  color: var(--inverse-primary);
  background-color: #41403e;
  background-color: var(--primary-shaded-70);
  border-color: #41403e;
  border-color: var(--primary-shaded-50);
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  display: block;
  font-size: 80%;
  line-height: 1.5;
  overflow-x: auto;
  padding: 1em;
  white-space: pre;
  word-break: break-all;
  word-wrap: break-word;
}
.dumi-default-previewer-demo pre code {
  color: #41403e;
  color: var(--inverse-primary);
  background: transparent;
  display: block;
  font-size: inherit;
  padding: initial;
  white-space: pre;
}
.dumi-default-previewer-demo html {
  color: #41403e;
  color: var(--primary);
  font-family: "Neucha", sans-serif;
  font-size: 20px;
}
.dumi-default-previewer-demo p,
.dumi-default-previewer-demo a,
.dumi-default-previewer-demo button,
.dumi-default-previewer-demo li,
.dumi-default-previewer-demo table,
.dumi-default-previewer-demo thead,
.dumi-default-previewer-demo tbody,
.dumi-default-previewer-demo th,
.dumi-default-previewer-demo tr,
.dumi-default-previewer-demo td,
.dumi-default-previewer-demo input,
.dumi-default-previewer-demo textarea,
.dumi-default-previewer-demo select,
.dumi-default-previewer-demo option {
  font-family: "Neucha", sans-serif;
}
.dumi-default-previewer-demo h1,
.dumi-default-previewer-demo h2,
.dumi-default-previewer-demo h3,
.dumi-default-previewer-demo h4,
.dumi-default-previewer-demo h5,
.dumi-default-previewer-demo h6 {
  font-family: "Patrick Hand SC", sans-serif;
  font-weight: normal;
}
.dumi-default-previewer-demo h1 {
  font-size: 4rem;
}
.dumi-default-previewer-demo h2 {
  font-size: 3rem;
}
.dumi-default-previewer-demo h3 {
  font-size: 2rem;
}
.dumi-default-previewer-demo h4 {
  font-size: 1.5rem;
}
.dumi-default-previewer-demo h5 {
  font-size: 1rem;
}
.dumi-default-previewer-demo h6 {
  font-size: 0.8rem;
}
.dumi-default-previewer-demo .text-left {
  text-align: left;
}
.dumi-default-previewer-demo .text-center {
  text-align: center;
}
.dumi-default-previewer-demo .text-right {
  text-align: right;
}
.dumi-default-previewer-demo img {
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  border-color: #41403e;
  border-color: var(--primary);
  border-style: solid;
  border-width: 2px;
  display: block;
  height: auto;
  max-width: 100%;
}
.dumi-default-previewer-demo img.float-left {
  float: left;
  margin: 1rem 1rem 1rem 0;
}
.dumi-default-previewer-demo img.float-right {
  float: right;
  margin: 1rem 0 1rem 1rem;
}
.dumi-default-previewer-demo img.no-responsive {
  display: initial;
  height: initial;
  max-width: initial;
}
.dumi-default-previewer-demo img.no-border {
  border: 0;
  border-radius: 0;
}
.dumi-default-previewer-demo ol {
  list-style-type: decimal;
}
.dumi-default-previewer-demo ol ol {
  list-style-type: upper-alpha;
}
.dumi-default-previewer-demo ol ol ol {
  list-style-type: upper-roman;
}
.dumi-default-previewer-demo ol ol ol ol {
  list-style-type: lower-alpha;
}
.dumi-default-previewer-demo ol ol ol ol ol {
  list-style-type: lower-roman;
}
.dumi-default-previewer-demo ul {
  list-style: none;
  margin-left: 0;
}
.dumi-default-previewer-demo ul li::before {
  content: "-";
}
.dumi-default-previewer-demo ul li {
  text-indent: -7px;
}
.dumi-default-previewer-demo ul li .badge,
.dumi-default-previewer-demo ul li [popover-bottom]::after,
.dumi-default-previewer-demo ul li [popover-left]::after,
.dumi-default-previewer-demo ul li [popover-right]::after,
.dumi-default-previewer-demo ul li [popover-top]::after {
  text-indent: 0;
}
.dumi-default-previewer-demo ul li::before {
  left: -7px;
  position: relative;
}
.dumi-default-previewer-demo ul ul li::before {
  content: "+";
}
.dumi-default-previewer-demo ul ul ul li::before {
  content: "~";
}
.dumi-default-previewer-demo ul ul ul ul li::before {
  content: "\u290D";
}
.dumi-default-previewer-demo ul ul ul ul ul li::before {
  content: "\u204E";
}
.dumi-default-previewer-demo ul.inline li {
  display: inline;
  margin-left: 5px;
}
.dumi-default-previewer-demo table {
  box-sizing: border-box;
  max-width: 100%;
  overflow-x: auto;
  width: 100%;
}
@media only screen and (max-width: 480px) {
  .dumi-default-previewer-demo table thead tr th {
    padding: 2%;
  }
  .dumi-default-previewer-demo table tbody tr td {
    padding: 2%;
  }
}
.dumi-default-previewer-demo table thead tr th {
  line-height: 1.5;
  padding: 8px;
  text-align: left;
  vertical-align: bottom;
}
.dumi-default-previewer-demo table tbody tr td {
  border-top: 1px dashed #d9d9d8;
  line-height: 1.5;
  padding: 8px;
  vertical-align: top;
}
.dumi-default-previewer-demo table.table-hover tbody tr:hover {
  color: #41403e;
  color: var(--secondary);
}
.dumi-default-previewer-demo table.table-alternating tbody tr:nth-of-type(even) {
  color: #82807c;
}
.dumi-default-previewer-demo .border {
  border-color: #41403e;
  border-color: var(--primary);
  border-style: solid;
  border-width: 2px;
}
.dumi-default-previewer-demo .border,
.dumi-default-previewer-demo .border-1,
.dumi-default-previewer-demo .child-borders > *:nth-child(6n+1) {
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
}
.dumi-default-previewer-demo .border-2,
.dumi-default-previewer-demo .child-borders > *:nth-child(6n+2) {
  border-bottom-left-radius: 185px 25px;
  border-bottom-right-radius: 20px 205px;
  border-top-left-radius: 125px 25px;
  border-top-right-radius: 10px 205px;
}
.dumi-default-previewer-demo .border-3,
.dumi-default-previewer-demo .child-borders > *:nth-child(6n+3) {
  border-bottom-left-radius: 225px 15px;
  border-bottom-right-radius: 15px 255px;
  border-top-left-radius: 15px 225px;
  border-top-right-radius: 255px 15px;
}
.dumi-default-previewer-demo .border-4,
.dumi-default-previewer-demo .child-borders > *:nth-child(6n+4) {
  border-bottom-left-radius: 25px 115px;
  border-bottom-right-radius: 155px 25px;
  border-top-left-radius: 15px 225px;
  border-top-right-radius: 25px 150px;
}
.dumi-default-previewer-demo .border-5,
.dumi-default-previewer-demo .child-borders > *:nth-child(6n+5) {
  border-bottom-left-radius: 20px 115px;
  border-bottom-right-radius: 15px 105px;
  border-top-left-radius: 250px 15px;
  border-top-right-radius: 25px 80px;
}
.dumi-default-previewer-demo .border-6,
.dumi-default-previewer-demo .child-borders > *:nth-child(6n+6) {
  border-bottom-left-radius: 15px 225px;
  border-bottom-right-radius: 20px 205px;
  border-top-left-radius: 28px 125px;
  border-top-right-radius: 100px 30px;
}
.dumi-default-previewer-demo .child-borders > * {
  border-color: #41403e;
  border-color: var(--primary);
  border-style: solid;
  border-width: 2px;
}
.dumi-default-previewer-demo .border-white {
  border-color: #41403e;
  border-color: var(--white);
}
.dumi-default-previewer-demo .border-dotted {
  border-style: dotted;
}
.dumi-default-previewer-demo .border-dashed {
  border-style: dashed;
}
.dumi-default-previewer-demo .border-thick {
  border-width: 5px;
}
.dumi-default-previewer-demo .border-primary {
  border-color: #41403e;
  border-color: var(--primary);
}
.dumi-default-previewer-demo .border-secondary {
  border-color: #41403e;
  border-color: var(--secondary);
}
.dumi-default-previewer-demo .border-success {
  border-color: #41403e;
  border-color: var(--success);
}
.dumi-default-previewer-demo .border-warning {
  border-color: #41403e;
  border-color: var(--warning);
}
.dumi-default-previewer-demo .border-danger {
  border-color: #41403e;
  border-color: var(--danger);
}
.dumi-default-previewer-demo .border-muted {
  border-color: #41403e;
  border-color: var(--muted);
}
.dumi-default-previewer-demo .shadow {
  transition: all 235ms ease 0s;
  box-shadow: 15px 28px 25px -18px rgba(0, 0, 0, 0.2);
}
.dumi-default-previewer-demo .shadow.shadow-large {
  transition: all 235ms ease 0s;
  box-shadow: 20px 38px 34px -26px rgba(0, 0, 0, 0.2);
}
.dumi-default-previewer-demo .shadow.shadow-small {
  transition: all 235ms ease 0s;
  box-shadow: 10px 19px 17px -13px rgba(0, 0, 0, 0.2);
}
.dumi-default-previewer-demo .shadow.shadow-hover:hover {
  transform: translate3d(0, 2px, 0);
  box-shadow: 2px 8px 8px -5px rgba(0, 0, 0, 0.3);
}
.dumi-default-previewer-demo .child-shadows > * {
  transition: all 235ms ease 0s;
  box-shadow: 15px 28px 25px -18px rgba(0, 0, 0, 0.2);
}
.dumi-default-previewer-demo .child-shadows .shadow-none {
  box-shadow: none;
}
.dumi-default-previewer-demo .child-shadows-hover > * {
  transition: all 235ms ease 0s;
  box-shadow: 15px 28px 25px -18px rgba(0, 0, 0, 0.2);
}
.dumi-default-previewer-demo .child-shadows-hover > *:hover {
  transform: translate3d(0, 2px, 0);
  box-shadow: 2px 8px 8px -5px rgba(0, 0, 0, 0.3);
}
.dumi-default-previewer-demo .collapsible {
  display: flex;
  flex-direction: column;
}
.dumi-default-previewer-demo .collapsible:nth-of-type(1) {
  border-top-color: #41403e;
  border-top-color: var(--muted-light);
  border-top-style: solid;
  border-top-width: 1px;
}
.dumi-default-previewer-demo .collapsible .collapsible-body {
  border-bottom-color: #41403e;
  border-bottom-color: var(--muted-light);
  background-color: #41403e;
  background-color: var(--white-dark-light-80);
  transition: all 235ms ease-in-out 0s;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  margin: 0;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  padding: 0 0.75rem;
}
.dumi-default-previewer-demo .collapsible > input {
  display: none;
}
.dumi-default-previewer-demo .collapsible > input:checked + label {
  color: #41403e;
  color: var(--primary);
}
.dumi-default-previewer-demo .collapsible > input[id^=collapsible]:checked ~ div.collapsible-body {
  margin: 0;
  max-height: 960px;
  opacity: 1;
  padding: 0.75rem;
}
.dumi-default-previewer-demo .collapsible > label {
  color: #41403e;
  color: var(--primary);
  border-bottom-color: #41403e;
  border-bottom-color: var(--muted-light);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  display: inline-block;
  font-weight: 600;
  margin: 0 0 -1px;
  padding: 0.75rem;
  text-align: center;
}
.dumi-default-previewer-demo .collapsible > label:hover {
  color: #41403e;
  color: var(--muted);
  cursor: pointer;
}
.dumi-default-previewer-demo .alert {
  border-color: #41403e;
  border-color: var(--primary);
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  border-style: solid;
  border-width: 2px;
  margin-bottom: 20px;
  padding: 15px;
  width: 100%;
}
.dumi-default-previewer-demo .alert.dismissible {
  transition: all 235ms ease-in-out 0s;
  display: flex;
  justify-content: space-between;
  max-height: 48rem;
  overflow: hidden;
}
.dumi-default-previewer-demo .alert .btn-close {
  transition: all 235ms ease-in-out 0s;
  color: #41403e;
  color: var(--primary-text);
  cursor: pointer;
  margin-left: 0.75rem;
}
.dumi-default-previewer-demo .alert .btn-close:hover,
.dumi-default-previewer-demo .alert .btn-close:active,
.dumi-default-previewer-demo .alert .btn-close:focus {
  color: #41403e;
  color: var(--primary-dark);
}
.dumi-default-previewer-demo .alert-primary {
  color: #41403e;
  color: var(--primary-text);
  background-color: #41403e;
  background-color: var(--primary-light);
  border-color: #41403e;
  border-color: var(--primary);
}
.dumi-default-previewer-demo .alert-primary .btn-close {
  color: #41403e;
  color: var(--primary-text);
}
.dumi-default-previewer-demo .alert-primary .btn-close:hover,
.dumi-default-previewer-demo .alert-primary .btn-close:active,
.dumi-default-previewer-demo .alert-primary .btn-close:focus {
  color: #41403e;
  color: var(--primary-dark);
}
.dumi-default-previewer-demo .alert-secondary {
  color: #41403e;
  color: var(--secondary-text);
  background-color: #41403e;
  background-color: var(--secondary-light);
  border-color: #41403e;
  border-color: var(--secondary);
}
.dumi-default-previewer-demo .alert-secondary .btn-close {
  color: #41403e;
  color: var(--secondary-text);
}
.dumi-default-previewer-demo .alert-secondary .btn-close:hover,
.dumi-default-previewer-demo .alert-secondary .btn-close:active,
.dumi-default-previewer-demo .alert-secondary .btn-close:focus {
  color: #41403e;
  color: var(--secondary-dark);
}
.dumi-default-previewer-demo .alert-success {
  color: #41403e;
  color: var(--success-text);
  background-color: #41403e;
  background-color: var(--success-light);
  border-color: #41403e;
  border-color: var(--success);
}
.dumi-default-previewer-demo .alert-success .btn-close {
  color: #41403e;
  color: var(--success-text);
}
.dumi-default-previewer-demo .alert-success .btn-close:hover,
.dumi-default-previewer-demo .alert-success .btn-close:active,
.dumi-default-previewer-demo .alert-success .btn-close:focus {
  color: #41403e;
  color: var(--success-dark);
}
.dumi-default-previewer-demo .alert-warning {
  color: #41403e;
  color: var(--warning-text);
  background-color: #41403e;
  background-color: var(--warning-light);
  border-color: #41403e;
  border-color: var(--warning);
}
.dumi-default-previewer-demo .alert-warning .btn-close {
  color: #41403e;
  color: var(--warning-text);
}
.dumi-default-previewer-demo .alert-warning .btn-close:hover,
.dumi-default-previewer-demo .alert-warning .btn-close:active,
.dumi-default-previewer-demo .alert-warning .btn-close:focus {
  color: #41403e;
  color: var(--warning-dark);
}
.dumi-default-previewer-demo .alert-danger {
  color: #41403e;
  color: var(--danger-text);
  background-color: #41403e;
  background-color: var(--danger-light);
  border-color: #41403e;
  border-color: var(--danger);
}
.dumi-default-previewer-demo .alert-danger .btn-close {
  color: #41403e;
  color: var(--danger-text);
}
.dumi-default-previewer-demo .alert-danger .btn-close:hover,
.dumi-default-previewer-demo .alert-danger .btn-close:active,
.dumi-default-previewer-demo .alert-danger .btn-close:focus {
  color: #41403e;
  color: var(--danger-dark);
}
.dumi-default-previewer-demo .alert-muted {
  color: #41403e;
  color: var(--muted-text);
  background-color: #41403e;
  background-color: var(--muted-light);
  border-color: #41403e;
  border-color: var(--muted);
}
.dumi-default-previewer-demo .alert-muted .btn-close {
  color: #41403e;
  color: var(--muted-text);
}
.dumi-default-previewer-demo .alert-muted .btn-close:hover,
.dumi-default-previewer-demo .alert-muted .btn-close:active,
.dumi-default-previewer-demo .alert-muted .btn-close:focus {
  color: #41403e;
  color: var(--muted-dark);
}
.dumi-default-previewer-demo .alert-state {
  display: none;
}
.dumi-default-previewer-demo .alert-state:checked + .dismissible {
  border-width: 0;
  margin: 0;
  max-height: 0;
  opacity: 0;
  padding-bottom: 0;
  padding-top: 0;
}
.dumi-default-previewer-demo article .article-title {
  font-size: 3rem;
}
.dumi-default-previewer-demo article .article-meta {
  color: #41403e;
  color: var(--muted-text);
  font-size: 15px;
}
.dumi-default-previewer-demo article .article-meta a {
  color: #41403e;
  color: var(--muted-text);
  background-image: none;
}
.dumi-default-previewer-demo article .article-meta a:hover {
  color: #41403e;
  color: var(--light-dark);
}
.dumi-default-previewer-demo article .text-lead {
  font-size: 30px;
  line-height: 1.3;
  margin: 35px;
}
.dumi-default-previewer-demo article button:not(:first-of-type) {
  margin-left: 2rem;
}
@media only screen and (max-width: 480px) {
  .dumi-default-previewer-demo article button:not(:first-of-type) {
    margin-left: 0;
  }
}
.dumi-default-previewer-demo article p {
  line-height: 1.6;
}
.dumi-default-previewer-demo .badge {
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  color: #41403e;
  color: var(--white);
  background-color: #41403e;
  background-color: var(--muted);
  border-color: #41403e;
  border-color: var(--primary);
  border: 2px solid;
  border-color: transparent;
  display: inline-block;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  padding: 0.25em 0.4em;
  text-align: center;
  vertical-align: baseline;
  white-space: nowrap;
}
.dumi-default-previewer-demo .badge.primary {
  background-color: #41403e;
  background-color: var(--primary);
}
.dumi-default-previewer-demo .badge.secondary {
  background-color: #41403e;
  background-color: var(--secondary);
}
.dumi-default-previewer-demo .badge.success {
  background-color: #41403e;
  background-color: var(--success);
}
.dumi-default-previewer-demo .badge.warning {
  background-color: #41403e;
  background-color: var(--warning);
}
.dumi-default-previewer-demo .badge.danger {
  background-color: #41403e;
  background-color: var(--danger);
}
.dumi-default-previewer-demo .badge.muted {
  background-color: #41403e;
  background-color: var(--muted);
}
.dumi-default-previewer-demo ul.breadcrumb {
  list-style: none;
  padding: 10px 16px;
}
.dumi-default-previewer-demo ul.breadcrumb li {
  display: inline;
  font-size: 20px;
}
.dumi-default-previewer-demo ul.breadcrumb li::before {
  content: "";
}
.dumi-default-previewer-demo ul.breadcrumb li a {
  color: #41403e;
  color: var(--secondary);
  background-image: none;
  text-decoration: none;
}
.dumi-default-previewer-demo ul.breadcrumb li a:hover {
  text-decoration: underline;
}
.dumi-default-previewer-demo ul.breadcrumb li + li::before {
  content: "/\xA0";
  padding: 8px;
}
.dumi-default-previewer-demo button,
.dumi-default-previewer-demo .paper-btn,
.dumi-default-previewer-demo [type=button] {
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  transition: all 235ms ease 0s;
  box-shadow: 15px 28px 25px -18px rgba(0, 0, 0, 0.2);
  transition: all 235ms ease-in-out 0s;
  color: #41403e;
  color: var(--primary);
  border-color: #41403e;
  border-color: var(--primary);
  background-color: #41403e;
  background-color: var(--main-background);
  align-self: center;
  background-image: none;
  border-style: solid;
  border-width: 2px;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  outline: none;
  padding: 0.75rem;
}
@media only screen and (max-width: 520px) {
  .dumi-default-previewer-demo button,
  .dumi-default-previewer-demo .paper-btn,
  .dumi-default-previewer-demo [type=button] {
    display: inline-block;
    margin: 0 auto;
    margin-bottom: 1rem;
    text-align: center;
  }
}
.dumi-default-previewer-demo button.btn-large,
.dumi-default-previewer-demo .paper-btn.btn-large,
.dumi-default-previewer-demo [type=button].btn-large {
  transition: all 235ms ease 0s;
  box-shadow: 20px 38px 34px -26px rgba(0, 0, 0, 0.2);
  font-size: 2rem;
  padding: 1rem;
}
.dumi-default-previewer-demo button.btn-small,
.dumi-default-previewer-demo .paper-btn.btn-small,
.dumi-default-previewer-demo [type=button].btn-small {
  transition: all 235ms ease 0s;
  box-shadow: 10px 19px 17px -13px rgba(0, 0, 0, 0.2);
  font-size: 0.75rem;
  padding: 0.5rem;
}
.dumi-default-previewer-demo button.btn-block,
.dumi-default-previewer-demo .paper-btn.btn-block,
.dumi-default-previewer-demo [type=button].btn-block {
  display: block;
  width: 100%;
}
.dumi-default-previewer-demo button:hover,
.dumi-default-previewer-demo .paper-btn:hover,
.dumi-default-previewer-demo [type=button]:hover {
  transform: translate3d(0, 2px, 0);
  box-shadow: 2px 8px 8px -5px rgba(0, 0, 0, 0.3);
}
.dumi-default-previewer-demo button:focus,
.dumi-default-previewer-demo .paper-btn:focus,
.dumi-default-previewer-demo [type=button]:focus {
  border-color: #41403e;
  border-color: var(--secondary);
  border-style: solid;
  border-width: 2px;
  box-shadow: 2px 8px 4px -6px rgba(0, 0, 0, 0.3);
}
.dumi-default-previewer-demo button:active,
.dumi-default-previewer-demo .paper-btn:active,
.dumi-default-previewer-demo [type=button]:active {
  border-color: rgba(0, 0, 0, 0.2);
  transition: none;
}
.dumi-default-previewer-demo button.disabled,
.dumi-default-previewer-demo button[disabled],
.dumi-default-previewer-demo .paper-btn.disabled,
.dumi-default-previewer-demo .paper-btn[disabled],
.dumi-default-previewer-demo [type=button].disabled,
.dumi-default-previewer-demo [type=button][disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
.dumi-default-previewer-demo a {
  color: #41403e;
  color: var(--secondary);
  background-image: linear-gradient(5deg, transparent 65%, #0b74d5 80%, transparent 90%), linear-gradient(165deg, transparent 5%, #0b74d5 15%, transparent 25%), linear-gradient(165deg, transparent 45%, #0b74d5 55%, transparent 65%), linear-gradient(15deg, transparent 25%, #0b74d5 35%, transparent 50%);
  background-position: 0 90%;
  background-repeat: repeat-x;
  background-size: 4px 3px;
  text-decoration: none;
}
.dumi-default-previewer-demo a:visited {
  color: #41403e;
  color: var(--primary);
  text-decoration: none;
}
.dumi-default-previewer-demo button.btn-primary,
.dumi-default-previewer-demo .paper-btn.btn-primary,
.dumi-default-previewer-demo [type=button].btn-primary {
  color: #41403e;
  color: var(--primary-text);
  background-color: #41403e;
  background-color: var(--primary-light);
  border-color: #41403e;
  border-color: var(--primary);
}
.dumi-default-previewer-demo button.btn-primary:hover:active,
.dumi-default-previewer-demo .paper-btn.btn-primary:hover:active,
.dumi-default-previewer-demo [type=button].btn-primary:hover:active {
  background-color: #b4b3b0;
}
.dumi-default-previewer-demo button.btn-secondary,
.dumi-default-previewer-demo .paper-btn.btn-secondary,
.dumi-default-previewer-demo [type=button].btn-secondary {
  color: #41403e;
  color: var(--secondary-text);
  background-color: #41403e;
  background-color: var(--secondary-light);
  border-color: #41403e;
  border-color: var(--secondary);
}
.dumi-default-previewer-demo button.btn-secondary:hover:active,
.dumi-default-previewer-demo .paper-btn.btn-secondary:hover:active,
.dumi-default-previewer-demo [type=button].btn-secondary:hover:active {
  background-color: #a7d3fa;
}
.dumi-default-previewer-demo button.btn-success,
.dumi-default-previewer-demo .paper-btn.btn-success,
.dumi-default-previewer-demo [type=button].btn-success {
  color: #41403e;
  color: var(--success-text);
  background-color: #41403e;
  background-color: var(--success-light);
  border-color: #41403e;
  border-color: var(--success);
}
.dumi-default-previewer-demo button.btn-success:hover:active,
.dumi-default-previewer-demo .paper-btn.btn-success:hover:active,
.dumi-default-previewer-demo [type=button].btn-success:hover:active {
  background-color: #bccca8;
}
.dumi-default-previewer-demo button.btn-warning,
.dumi-default-previewer-demo .paper-btn.btn-warning,
.dumi-default-previewer-demo [type=button].btn-warning {
  color: #41403e;
  color: var(--warning-text);
  background-color: #41403e;
  background-color: var(--warning-light);
  border-color: #41403e;
  border-color: var(--warning);
}
.dumi-default-previewer-demo button.btn-warning:hover:active,
.dumi-default-previewer-demo .paper-btn.btn-warning:hover:active,
.dumi-default-previewer-demo [type=button].btn-warning:hover:active {
  background-color: #ede49b;
}
.dumi-default-previewer-demo button.btn-danger,
.dumi-default-previewer-demo .paper-btn.btn-danger,
.dumi-default-previewer-demo [type=button].btn-danger {
  color: #41403e;
  color: var(--danger-text);
  background-color: #41403e;
  background-color: var(--danger-light);
  border-color: #41403e;
  border-color: var(--danger);
}
.dumi-default-previewer-demo button.btn-danger:hover:active,
.dumi-default-previewer-demo .paper-btn.btn-danger:hover:active,
.dumi-default-previewer-demo [type=button].btn-danger:hover:active {
  background-color: #e6a5a1;
}
.dumi-default-previewer-demo button.btn-muted,
.dumi-default-previewer-demo .paper-btn.btn-muted,
.dumi-default-previewer-demo [type=button].btn-muted {
  color: #41403e;
  color: var(--muted-text);
  background-color: #41403e;
  background-color: var(--muted-light);
  border-color: #41403e;
  border-color: var(--muted);
}
.dumi-default-previewer-demo button.btn-muted:hover:active,
.dumi-default-previewer-demo .paper-btn.btn-muted:hover:active,
.dumi-default-previewer-demo [type=button].btn-muted:hover:active {
  background-color: #caced1;
}
.dumi-default-previewer-demo button.btn-primary-outline,
.dumi-default-previewer-demo .paper-btn.btn-primary-outline,
.dumi-default-previewer-demo [type=button].btn-primary-outline {
  background-color: #41403e;
  background-color: var(--main-background);
  color: #41403e;
  color: var(--primary);
  border-color: #41403e;
  border-color: var(--primary);
}
.dumi-default-previewer-demo button.btn-primary-outline:hover,
.dumi-default-previewer-demo .paper-btn.btn-primary-outline:hover,
.dumi-default-previewer-demo [type=button].btn-primary-outline:hover {
  background-color: #cdcccb;
}
.dumi-default-previewer-demo button.btn-primary-outline:hover:active,
.dumi-default-previewer-demo .paper-btn.btn-primary-outline:hover:active,
.dumi-default-previewer-demo [type=button].btn-primary-outline:hover:active {
  background-color: #b4b3b0;
}
.dumi-default-previewer-demo button.btn-secondary-outline,
.dumi-default-previewer-demo .paper-btn.btn-secondary-outline,
.dumi-default-previewer-demo [type=button].btn-secondary-outline {
  background-color: #41403e;
  background-color: var(--main-background);
  color: #41403e;
  color: var(--secondary);
  border-color: #41403e;
  border-color: var(--secondary);
}
.dumi-default-previewer-demo button.btn-secondary-outline:hover,
.dumi-default-previewer-demo .paper-btn.btn-secondary-outline:hover,
.dumi-default-previewer-demo [type=button].btn-secondary-outline:hover {
  background-color: #d8ebfd;
}
.dumi-default-previewer-demo button.btn-secondary-outline:hover:active,
.dumi-default-previewer-demo .paper-btn.btn-secondary-outline:hover:active,
.dumi-default-previewer-demo [type=button].btn-secondary-outline:hover:active {
  background-color: #a7d3fa;
}
.dumi-default-previewer-demo button.btn-success-outline,
.dumi-default-previewer-demo .paper-btn.btn-success-outline,
.dumi-default-previewer-demo [type=button].btn-success-outline {
  background-color: #41403e;
  background-color: var(--main-background);
  color: #41403e;
  color: var(--success);
  border-color: #41403e;
  border-color: var(--success);
}
.dumi-default-previewer-demo button.btn-success-outline:hover,
.dumi-default-previewer-demo .paper-btn.btn-success-outline:hover,
.dumi-default-previewer-demo [type=button].btn-success-outline:hover {
  background-color: #d5dfc8;
}
.dumi-default-previewer-demo button.btn-success-outline:hover:active,
.dumi-default-previewer-demo .paper-btn.btn-success-outline:hover:active,
.dumi-default-previewer-demo [type=button].btn-success-outline:hover:active {
  background-color: #bccca8;
}
.dumi-default-previewer-demo button.btn-warning-outline,
.dumi-default-previewer-demo .paper-btn.btn-warning-outline,
.dumi-default-previewer-demo [type=button].btn-warning-outline {
  background-color: #41403e;
  background-color: var(--main-background);
  color: #41403e;
  color: var(--warning);
  border-color: #41403e;
  border-color: var(--warning);
}
.dumi-default-previewer-demo button.btn-warning-outline:hover,
.dumi-default-previewer-demo .paper-btn.btn-warning-outline:hover,
.dumi-default-previewer-demo [type=button].btn-warning-outline:hover {
  background-color: #f5f0c6;
}
.dumi-default-previewer-demo button.btn-warning-outline:hover:active,
.dumi-default-previewer-demo .paper-btn.btn-warning-outline:hover:active,
.dumi-default-previewer-demo [type=button].btn-warning-outline:hover:active {
  background-color: #ede49b;
}
.dumi-default-previewer-demo button.btn-danger-outline,
.dumi-default-previewer-demo .paper-btn.btn-danger-outline,
.dumi-default-previewer-demo [type=button].btn-danger-outline {
  background-color: #41403e;
  background-color: var(--main-background);
  color: #41403e;
  color: var(--danger);
  border-color: #41403e;
  border-color: var(--danger);
}
.dumi-default-previewer-demo button.btn-danger-outline:hover,
.dumi-default-previewer-demo .paper-btn.btn-danger-outline:hover,
.dumi-default-previewer-demo [type=button].btn-danger-outline:hover {
  background-color: #f0cbc9;
}
.dumi-default-previewer-demo button.btn-danger-outline:hover:active,
.dumi-default-previewer-demo .paper-btn.btn-danger-outline:hover:active,
.dumi-default-previewer-demo [type=button].btn-danger-outline:hover:active {
  background-color: #e6a5a1;
}
.dumi-default-previewer-demo button.btn-muted-outline,
.dumi-default-previewer-demo .paper-btn.btn-muted-outline,
.dumi-default-previewer-demo [type=button].btn-muted-outline {
  background-color: #41403e;
  background-color: var(--main-background);
  color: #41403e;
  color: var(--muted);
  border-color: #41403e;
  border-color: var(--muted);
}
.dumi-default-previewer-demo button.btn-muted-outline:hover,
.dumi-default-previewer-demo .paper-btn.btn-muted-outline:hover,
.dumi-default-previewer-demo [type=button].btn-muted-outline:hover {
  background-color: #e6e7e9;
}
.dumi-default-previewer-demo button.btn-muted-outline:hover:active,
.dumi-default-previewer-demo .paper-btn.btn-muted-outline:hover:active,
.dumi-default-previewer-demo [type=button].btn-muted-outline:hover:active {
  background-color: #caced1;
}
.dumi-default-previewer-demo .card {
  transition: all 235ms ease 0s;
  box-shadow: 15px 28px 25px -18px rgba(0, 0, 0, 0.2);
  border-color: #41403e;
  border-color: var(--muted-light);
  backface-visibility: hidden;
  border-style: solid;
  border-width: 2px;
  display: flex;
  flex-direction: column;
  position: relative;
  will-change: transform;
  word-wrap: break-word;
}
.dumi-default-previewer-demo .card:hover {
  transform: translate3d(0, 2px, 0);
  box-shadow: 2px 8px 8px -5px rgba(0, 0, 0, 0.3);
}
.dumi-default-previewer-demo .card .card-header,
.dumi-default-previewer-demo .card .card-footer {
  background-color: #41403e;
  background-color: var(--white-dark);
  border-color: #41403e;
  border-color: var(--muted-light);
  padding: 0.75rem 1.25rem;
}
.dumi-default-previewer-demo .card .card-header {
  border-bottom-style: solid;
  border-bottom-width: 2px;
}
.dumi-default-previewer-demo .card .card-footer {
  border-top-style: solid;
  border-top-width: 2px;
}
.dumi-default-previewer-demo .card .card-body {
  flex: 1 1 auto;
  padding: 1.25rem;
}
.dumi-default-previewer-demo .card .card-body .card-title,
.dumi-default-previewer-demo .card .card-body h4 {
  margin-bottom: 0.5rem;
  margin-top: 0;
}
.dumi-default-previewer-demo .card .card-body .card-subtitle,
.dumi-default-previewer-demo .card .card-body h5 {
  color: #0b74d5;
  margin-bottom: 0.5rem;
  margin-top: 0;
}
.dumi-default-previewer-demo .card .card-body .card-text,
.dumi-default-previewer-demo .card .card-body p {
  margin-bottom: 1rem;
  margin-top: 0;
}
.dumi-default-previewer-demo .card .card-body .card-link + .card-link,
.dumi-default-previewer-demo .card .card-body a + a {
  margin-left: 1.25rem;
}
.dumi-default-previewer-demo .card .image-top,
.dumi-default-previewer-demo .card .image-bottom,
.dumi-default-previewer-demo .card img {
  border: 0;
  border-radius: 0;
}
.dumi-default-previewer-demo input,
.dumi-default-previewer-demo select,
.dumi-default-previewer-demo textarea {
  color: #41403e;
  color: var(--primary);
  border-color: #41403e;
  border-color: var(--primary);
  background: transparent;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-style: solid;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  border-width: 2px;
  display: block;
  font-size: 1rem;
  outline: none;
  padding: 0.5rem;
}
.dumi-default-previewer-demo input:focus,
.dumi-default-previewer-demo select:focus,
.dumi-default-previewer-demo textarea:focus {
  border-color: #41403e;
  border-color: var(--secondary);
  border-style: solid;
  border-width: 2px;
}
.dumi-default-previewer-demo select {
  height: 2.35rem;
}
.dumi-default-previewer-demo .disabled,
.dumi-default-previewer-demo input.disabled,
.dumi-default-previewer-demo input[disabled],
.dumi-default-previewer-demo select.disabled,
.dumi-default-previewer-demo select[disabled],
.dumi-default-previewer-demo textarea.disabled,
.dumi-default-previewer-demo textarea[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
.dumi-default-previewer-demo .form-group {
  margin-bottom: 1rem;
}
.dumi-default-previewer-demo .form-group > label,
.dumi-default-previewer-demo .form-group legend {
  display: inline-block;
  margin-bottom: 0.5rem;
}
.dumi-default-previewer-demo .form-group .input-block {
  width: 100%;
}
.dumi-default-previewer-demo .form-group textarea {
  max-height: 90vh;
  max-width: 100%;
}
.dumi-default-previewer-demo .form-group textarea.no-resize {
  resize: none;
}
.dumi-default-previewer-demo .form-group .paper-radio,
.dumi-default-previewer-demo .form-group .paper-check {
  cursor: pointer;
  display: block;
  margin-bottom: 0.5rem;
  /* the basic, unchecked style */
}
.dumi-default-previewer-demo .form-group .paper-radio input,
.dumi-default-previewer-demo .form-group .paper-check input {
  border: 0;
  height: 1px;
  margin: -1px;
  opacity: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  /* radio styles */
  /* checkbox styles */
}
.dumi-default-previewer-demo .form-group .paper-radio input + span,
.dumi-default-previewer-demo .form-group .paper-check input + span {
  display: block;
}
.dumi-default-previewer-demo .form-group .paper-radio input + span::before,
.dumi-default-previewer-demo .form-group .paper-check input + span::before {
  border-color: #41403e;
  border-color: var(--primary);
  border-style: solid;
  border-width: 2px;
  content: "";
  display: inline-block;
  height: 1rem;
  margin-right: 0.75em;
  position: relative;
  vertical-align: -0.25em;
  width: 1rem;
}
.dumi-default-previewer-demo .form-group .paper-radio input[type=radio] + span::before,
.dumi-default-previewer-demo .form-group .paper-check input[type=radio] + span::before {
  border-bottom-left-radius: 0.7rem 1rem;
  border-bottom-right-radius: 1rem 0.9rem;
  border-top-left-radius: 1rem 1rem;
  border-top-right-radius: 1rem 0.6rem;
}
.dumi-default-previewer-demo .form-group .paper-radio input[type=radio]:checked + span::before,
.dumi-default-previewer-demo .form-group .paper-check input[type=radio]:checked + span::before {
  background: url(`+b+`) left center no-repeat;
}
.dumi-default-previewer-demo .form-group .paper-radio input[type=checkbox],
.dumi-default-previewer-demo .form-group .paper-check input[type=checkbox] {
  /* checked */
}
.dumi-default-previewer-demo .form-group .paper-radio input[type=checkbox] + span::before,
.dumi-default-previewer-demo .form-group .paper-check input[type=checkbox] + span::before {
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
}
.dumi-default-previewer-demo .form-group .paper-radio input[type=checkbox]:checked + span::before,
.dumi-default-previewer-demo .form-group .paper-check input[type=checkbox]:checked + span::before {
  background: url(`+T+`) left center no-repeat;
}
.dumi-default-previewer-demo .form-group .paper-switch-label,
.dumi-default-previewer-demo .form-group .paper-switch-2-label {
  cursor: pointer;
  float: left;
}
.dumi-default-previewer-demo .form-group .paper-switch-label {
  margin: -6px 10px 0 0;
}
.dumi-default-previewer-demo .form-group .paper-switch-2-label {
  margin: 0 10px 0 0;
}
.dumi-default-previewer-demo .form-group .paper-switch,
.dumi-default-previewer-demo .form-group .paper-switch-2 {
  display: block;
  float: left;
  margin: 0 10px 0 0;
  position: relative;
}
.dumi-default-previewer-demo .form-group .paper-switch input,
.dumi-default-previewer-demo .form-group .paper-switch-2 input {
  height: 0;
  opacity: 0;
  width: 0;
}
.dumi-default-previewer-demo .form-group .paper-switch input:checked + .paper-switch-slider,
.dumi-default-previewer-demo .form-group .paper-switch-2 input:checked + .paper-switch-slider {
  background-color: #41403e;
  background-color: var(--success-light);
}
.dumi-default-previewer-demo .form-group .paper-switch input:checked + .paper-switch-slider::before,
.dumi-default-previewer-demo .form-group .paper-switch-2 input:checked + .paper-switch-slider::before {
  transform: translateX(26px);
}
.dumi-default-previewer-demo .form-group .paper-switch input:focus + .paper-switch-slider,
.dumi-default-previewer-demo .form-group .paper-switch-2 input:focus + .paper-switch-slider {
  box-shadow: 0 0 3px #0b74d5;
}
.dumi-default-previewer-demo .form-group .paper-switch .paper-switch-slider,
.dumi-default-previewer-demo .form-group .paper-switch-2 .paper-switch-slider {
  border-color: #41403e;
  border-color: var(--primary);
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-style: solid;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  border-width: 2px;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;
}
.dumi-default-previewer-demo .form-group .paper-switch .paper-switch-slider::before,
.dumi-default-previewer-demo .form-group .paper-switch-2 .paper-switch-slider::before {
  background: #41403e;
  background: var(--secondary);
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  content: "";
  left: 4px;
  position: absolute;
  transition: 0.4s;
}
.dumi-default-previewer-demo .form-group .paper-switch .paper-switch-slider.round,
.dumi-default-previewer-demo .form-group .paper-switch-2 .paper-switch-slider.round {
  border-color: #41403e;
  border-color: var(--primary);
  border-bottom-left-radius: 0.7rem 1rem;
  border-bottom-right-radius: 1rem 0.9rem;
  border-style: solid;
  border-top-left-radius: 1rem 1rem;
  border-top-right-radius: 1rem 0.6rem;
  border-width: 2px;
}
.dumi-default-previewer-demo .form-group .paper-switch .paper-switch-slider.round::before,
.dumi-default-previewer-demo .form-group .paper-switch-2 .paper-switch-slider.round::before {
  background: url(`+A+`) left center no-repeat;
  border-bottom-left-radius: 0.7rem 1rem;
  border-bottom-right-radius: 1rem 0.9rem;
  border-top-left-radius: 1rem 1rem;
  border-top-right-radius: 1rem 0.6rem;
  left: 4px;
}
.dumi-default-previewer-demo .form-group .paper-switch {
  height: 12px;
  width: 60px;
}
.dumi-default-previewer-demo .form-group .paper-switch .paper-switch-slider::before {
  bottom: -6px;
  height: 20px;
  width: 20px;
}
.dumi-default-previewer-demo .form-group .paper-switch .paper-switch-slider.round::before {
  bottom: -7px;
  height: 23px;
  width: 23px;
}
.dumi-default-previewer-demo .form-group .paper-switch-2 {
  height: 22px;
  width: 50px;
}
.dumi-default-previewer-demo .form-group .paper-switch-2 .paper-switch-slider::before {
  bottom: 2px;
  height: 14px;
  width: 14px;
}
.dumi-default-previewer-demo .form-group .paper-switch-2 .paper-switch-slider.round::before {
  bottom: 2px;
  height: 14px;
  width: 14px;
}
.dumi-default-previewer-demo .form-group .paper-switch-tile {
  cursor: pointer;
  display: block;
  float: left;
  height: 80px;
  margin: 40px 0 0 40px;
  perspective: 1000px;
  position: relative;
  transform: translate(-50%, -50%);
  transform-style: preserve-3d;
  width: 80px;
}
.dumi-default-previewer-demo .form-group .paper-switch-tile:hover .paper-switch-tile-card {
  box-shadow: 2px 8px 4px -5px rgba(0, 0, 0, 0.2);
  transform: rotateX(30deg);
}
.dumi-default-previewer-demo .form-group .paper-switch-tile:hover:checked + .paper-switch-tile-card {
  background-color: transparent;
  box-shadow: 0 10px 15px -15px rgba(0, 0, 0, 0.9);
  transform: rotateX(150deg);
}
.dumi-default-previewer-demo .form-group .paper-switch-tile input {
  display: none;
}
.dumi-default-previewer-demo .form-group .paper-switch-tile input:checked + .paper-switch-tile-card {
  transform: rotateX(180deg);
}
.dumi-default-previewer-demo .form-group .paper-switch-tile-card {
  background-color: transparent;
  border-color: transparent;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: all 600ms;
  width: 100%;
}
.dumi-default-previewer-demo .form-group .paper-switch-tile-card div {
  backface-visibility: hidden;
  box-shadow: 2px 8px 8px -5px rgba(0, 0, 0, 0.3);
  height: 100%;
  line-height: 70px;
  position: absolute;
  text-align: center;
  width: 100%;
}
.dumi-default-previewer-demo .form-group .paper-switch-tile-card .paper-switch-tile-card-back {
  transform: rotateX(180deg);
}
.dumi-default-previewer-demo .form-group input[type=range] {
  -webkit-appearance: none;
  appearance: none;
  border-width: 0;
  padding: 0;
  /* For Chromium */
  /* For Mozilla Firefox */
  /* For IE */
}
.dumi-default-previewer-demo .form-group input[type=range]::-webkit-slider-runnable-track {
  background: #41403e;
  background: var(--secondary);
  border-color: #41403e;
  border-color: var(--primary);
  border-radius: 18px;
  border-style: solid;
  border-width: 1px;
  box-shadow: 1px 1px 1px #000, 0 0 1px #0d0d0d;
  cursor: pointer;
  height: 8px;
  margin: 10px 0;
  width: 100%;
}
.dumi-default-previewer-demo .form-group input[type=range]::-webkit-slider-thumb {
  background: #41403e;
  background: var(--white);
  border-color: #41403e;
  border-color: var(--primary);
  -webkit-appearance: none;
  appearance: none;
  border-bottom-left-radius: 0.7rem 1rem;
  border-bottom-right-radius: 1rem 0.9rem;
  border-style: solid;
  border-top-left-radius: 1rem 1rem;
  border-top-right-radius: 1rem 0.6rem;
  border-width: 1px;
  box-shadow: 1px 1px 1px #000, 0 0 1px #0d0d0d;
  cursor: pointer;
  height: 36px;
  margin-top: -14px;
  width: 16px;
}
.dumi-default-previewer-demo .form-group input[type=range]::-moz-range-track {
  background: #41403e;
  background: var(--secondary);
  border-color: #41403e;
  border-color: var(--primary);
  border-radius: 18px;
  box-shadow: 1px 1px 1px #000, 0 0 1px #0d0d0d;
  cursor: pointer;
  height: 8px;
  width: 100%;
}
.dumi-default-previewer-demo .form-group input[type=range]::-moz-range-thumb {
  background: #41403e;
  background: var(--white);
  border-color: #41403e;
  border-color: var(--primary);
  border-bottom-left-radius: 0.7rem 1rem;
  border-bottom-right-radius: 1rem 0.9rem;
  border-style: solid;
  border-top-left-radius: 1rem 1rem;
  border-top-right-radius: 1rem 0.6rem;
  border-width: 1px;
  box-shadow: 1px 1px 1px #000, 0 0 1px #0d0d0d;
  cursor: pointer;
  height: 36px;
  width: 16px;
}
.dumi-default-previewer-demo .form-group input[type=range]::-ms-track {
  background: transparent;
  border-color: transparent;
  border-width: 16px 0;
  color: transparent;
  cursor: pointer;
  height: 8px;
  width: 100%;
}
.dumi-default-previewer-demo .form-group input[type=range]::-ms-fill-lower,
.dumi-default-previewer-demo .form-group input[type=range]::-ms-fill-upper {
  background: #41403e;
  background: var(--secondary);
  border-color: #41403e;
  border-color: var(--primary);
  border-radius: 18px;
  border-style: solid;
  border-width: 1px;
  box-shadow: 1px 1px 1px #000, 0 0 1px #0d0d0d;
}
.dumi-default-previewer-demo .form-group input[type=range]::-ms-thumb {
  background: #41403e;
  background: var(--white);
  border-color: #41403e;
  border-color: var(--primary);
  border: 1px solid #41403e;
  border-bottom-left-radius: 0.7rem 1rem;
  border-bottom-right-radius: 1rem 0.9rem;
  border-style: solid;
  border-top-left-radius: 1rem 1rem;
  border-top-right-radius: 1rem 0.6rem;
  border-width: 1px;
  box-shadow: 1px 1px 1px #000, 0 0 1px #0d0d0d;
  cursor: pointer;
  height: 36px;
  width: 16px;
}
.dumi-default-previewer-demo fieldset.form-group {
  border: 0;
  padding: 0;
}
.dumi-default-previewer-demo .modal {
  transition: opacity 235ms ease-in-out 0s;
  background: rgba(0, 0, 0, 0.6);
  bottom: 0;
  flex: 1 1 auto;
  left: 0;
  opacity: 0;
  position: fixed;
  right: 0;
  text-align: left;
  top: 0;
  visibility: hidden;
  word-wrap: break-word;
  z-index: 200;
}
.dumi-default-previewer-demo .modal-bg {
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.dumi-default-previewer-demo .modal .modal-body {
  color: #41403e;
  color: var(--primary);
  background: #41403e;
  background: var(--main-background);
  border-color: #41403e;
  border-color: var(--muted-light);
  transition: all 235ms ease-in-out 0s;
  backface-visibility: hidden;
  border: 2px solid;
  left: 50%;
  padding: 1.25rem;
  position: absolute;
  top: 0;
  transform: translate(-50%, -50%);
}
@media only screen and (max-width: 768px) {
  .dumi-default-previewer-demo .modal .modal-body {
    box-sizing: border-box;
    width: 90%;
  }
}
.dumi-default-previewer-demo .modal .btn-close {
  color: #41403e;
  color: var(--primary-light);
  transition: all 235ms ease-in-out 0s;
  cursor: pointer;
  font-size: 30px;
  height: 1.1rem;
  position: absolute;
  right: 1rem;
  text-decoration: none;
  top: 1rem;
  width: 1.1rem;
}
.dumi-default-previewer-demo .modal .btn-close:hover,
.dumi-default-previewer-demo .modal .btn-close:active,
.dumi-default-previewer-demo .modal .btn-close:focus {
  color: #41403e;
  color: var(--primary);
}
.dumi-default-previewer-demo .modal h4,
.dumi-default-previewer-demo .modal .modal-title {
  margin-bottom: 0.5rem;
  margin-top: 0;
}
.dumi-default-previewer-demo .modal h5,
.dumi-default-previewer-demo .modal .modal-subtitle {
  color: #41403e;
  color: var(--secondary);
  margin-bottom: 0.5rem;
  margin-top: 0;
}
.dumi-default-previewer-demo .modal p,
.dumi-default-previewer-demo .modal .modal-text {
  margin-bottom: 1rem;
  margin-top: 0;
}
.dumi-default-previewer-demo .modal .modal-link + .modal-link,
.dumi-default-previewer-demo .modal a + a {
  margin-left: 1.25rem;
}
.dumi-default-previewer-demo .modal .paper-btn {
  background: #41403e;
  background: var(--main-background);
  display: inline-block;
  text-decoration: none;
}
.dumi-default-previewer-demo .modal .modal-link,
.dumi-default-previewer-demo .modal a {
  background-image: linear-gradient(5deg, transparent 65%, #0b74d5 80%, transparent 90%), linear-gradient(165deg, transparent 5%, #0b74d5 15%, transparent 25%), linear-gradient(165deg, transparent 45%, #0b74d5 55%, transparent 65%), linear-gradient(15deg, transparent 25%, #0b74d5 35%, transparent 50%);
  background-position: 0 90%;
  background-repeat: repeat-x;
  background-size: 4px 3px;
  cursor: pointer;
  text-decoration: none;
}
.dumi-default-previewer-demo .modal .modal-link:hover,
.dumi-default-previewer-demo .modal .modal-link:focus,
.dumi-default-previewer-demo .modal .modal-link:visited,
.dumi-default-previewer-demo .modal a:hover,
.dumi-default-previewer-demo .modal a:focus,
.dumi-default-previewer-demo .modal a:visited {
  color: #41403e;
  color: var(--primary);
  text-decoration: none;
}
.dumi-default-previewer-demo .modal-state {
  display: none;
}
.dumi-default-previewer-demo .modal-state:checked + .modal {
  opacity: 1;
  visibility: visible;
}
.dumi-default-previewer-demo .modal-state:checked + .modal .modal-body {
  top: 50%;
}
.dumi-default-previewer-demo [popover-top],
.dumi-default-previewer-demo [popover-right],
.dumi-default-previewer-demo [popover-bottom],
.dumi-default-previewer-demo [popover-left] {
  margin: 24px;
  position: relative;
}
.dumi-default-previewer-demo [popover-top]:hover::after,
.dumi-default-previewer-demo [popover-right]:hover::after,
.dumi-default-previewer-demo [popover-bottom]:hover::after,
.dumi-default-previewer-demo [popover-left]:hover::after {
  opacity: 1;
  transition: opacity 0.2s ease-out;
}
.dumi-default-previewer-demo [popover-top]::after,
.dumi-default-previewer-demo [popover-right]::after,
.dumi-default-previewer-demo [popover-bottom]::after,
.dumi-default-previewer-demo [popover-left]::after {
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  transition: opacity 235ms ease-in-out 0s;
  background-color: #41403e;
  background-color: var(--light-dark);
  border-color: #41403e;
  border-color: var(--light-dark);
  color: #41403e;
  color: var(--primary-inverse);
  border-style: solid;
  border-width: 2px;
  font-size: 0.7em;
  left: 50%;
  min-width: 80px;
  opacity: 0;
  padding: 4px 2px;
  position: absolute;
  text-align: center;
  top: -6px;
  transform: translateX(-50%) translateY(-100%);
}
.dumi-default-previewer-demo [popover-left]::before {
  left: 0;
  margin-left: -12px;
  top: 50%;
  transform: translateY(-50%) rotate(-90deg);
}
.dumi-default-previewer-demo [popover-left]::after {
  content: attr(popover-left);
  left: 0;
  margin-left: -8px;
  top: 50%;
  transform: translateX(-100%) translateY(-50%);
}
.dumi-default-previewer-demo [popover-right]::before {
  left: 100%;
  margin-left: 1px;
  top: 50%;
  transform: translatey(-50%) rotate(90deg);
}
.dumi-default-previewer-demo [popover-right]::after {
  content: attr(popover-right);
  left: 100%;
  margin-left: 8px;
  top: 50%;
  transform: translateX(0%) translateY(-50%);
}
.dumi-default-previewer-demo [popover-top]::before {
  left: 50%;
}
.dumi-default-previewer-demo [popover-top]::after {
  content: attr(popover-top);
  left: 50%;
}
.dumi-default-previewer-demo [popover-bottom]::before {
  margin-top: 8px;
  top: 100%;
  transform: translateX(-50%) translatey(-100%) rotate(-180deg);
}
.dumi-default-previewer-demo [popover-bottom]::after {
  content: attr(popover-bottom);
  margin-top: 8px;
  top: 100%;
  transform: translateX(-50%) translateY(0%);
}
.dumi-default-previewer-demo .progress {
  border-bottom-left-radius: 20px 115px;
  border-bottom-right-radius: 15px 105px;
  border-top-left-radius: 250px 15px;
  border-top-right-radius: 25px 80px;
  border-color: #41403e;
  border-color: var(--primary);
  border: 2px solid;
  box-shadow: 2px 8px 8px -5px rgba(0, 0, 0, 0.3);
  height: 1.2rem;
  overflow: hidden;
  width: 100%;
}
.dumi-default-previewer-demo .progress .bar {
  border-bottom-left-radius: 20px 115px;
  border-bottom-right-radius: 15px 105px;
  border-top-left-radius: 250px 15px;
  border-top-right-radius: 25px 80px;
  transition: all 235ms ease-in-out 0s;
  background-color: #41403e;
  background-color: var(--primary-light);
  border-color: #41403e;
  border-color: var(--primary);
  border-right: 2px solid;
  display: flex;
  flex-direction: column;
  font-size: 0.6rem;
  height: 100%;
  justify-content: center;
  text-align: center;
  width: 0%;
}
.dumi-default-previewer-demo .progress .bar.striped {
  background: repeating-linear-gradient(45deg, #cdcccb, #cdcccb 0.25rem, #b4b3b0 0.25rem, #b4b3b0 0.5rem);
}
.dumi-default-previewer-demo .progress .bar.primary {
  background-color: #41403e;
  background-color: var(--primary-light);
}
.dumi-default-previewer-demo .progress .bar.primary.striped {
  background: repeating-linear-gradient(45deg, #cdcccb, #cdcccb 0.25rem, #b4b3b0 0.25rem, #b4b3b0 0.5rem);
}
.dumi-default-previewer-demo .progress .bar.secondary {
  background-color: #41403e;
  background-color: var(--secondary-light);
}
.dumi-default-previewer-demo .progress .bar.secondary.striped {
  background: repeating-linear-gradient(45deg, #d8ebfd, #d8ebfd 0.25rem, #a7d3fa 0.25rem, #a7d3fa 0.5rem);
}
.dumi-default-previewer-demo .progress .bar.success {
  background-color: #41403e;
  background-color: var(--success-light);
}
.dumi-default-previewer-demo .progress .bar.success.striped {
  background: repeating-linear-gradient(45deg, #d5dfc8, #d5dfc8 0.25rem, #bccca8 0.25rem, #bccca8 0.5rem);
}
.dumi-default-previewer-demo .progress .bar.warning {
  background-color: #41403e;
  background-color: var(--warning-light);
}
.dumi-default-previewer-demo .progress .bar.warning.striped {
  background: repeating-linear-gradient(45deg, #f5f0c6, #f5f0c6 0.25rem, #ede49b 0.25rem, #ede49b 0.5rem);
}
.dumi-default-previewer-demo .progress .bar.danger {
  background-color: #41403e;
  background-color: var(--danger-light);
}
.dumi-default-previewer-demo .progress .bar.danger.striped {
  background: repeating-linear-gradient(45deg, #f0cbc9, #f0cbc9 0.25rem, #e6a5a1 0.25rem, #e6a5a1 0.5rem);
}
.dumi-default-previewer-demo .progress .bar.muted {
  background-color: #41403e;
  background-color: var(--muted-light);
}
.dumi-default-previewer-demo .progress .bar.muted.striped {
  background: repeating-linear-gradient(45deg, #e6e7e9, #e6e7e9 0.25rem, #caced1 0.25rem, #caced1 0.5rem);
}
.dumi-default-previewer-demo .progress .bar.w-0 {
  width: 0%;
}
.dumi-default-previewer-demo .progress .bar.w-1 {
  width: 1%;
}
.dumi-default-previewer-demo .progress .bar.w-2 {
  width: 2%;
}
.dumi-default-previewer-demo .progress .bar.w-3 {
  width: 3%;
}
.dumi-default-previewer-demo .progress .bar.w-4 {
  width: 4%;
}
.dumi-default-previewer-demo .progress .bar.w-5 {
  width: 5%;
}
.dumi-default-previewer-demo .progress .bar.w-6 {
  width: 6%;
}
.dumi-default-previewer-demo .progress .bar.w-7 {
  width: 7%;
}
.dumi-default-previewer-demo .progress .bar.w-8 {
  width: 8%;
}
.dumi-default-previewer-demo .progress .bar.w-9 {
  width: 9%;
}
.dumi-default-previewer-demo .progress .bar.w-10 {
  width: 10%;
}
.dumi-default-previewer-demo .progress .bar.w-11 {
  width: 11%;
}
.dumi-default-previewer-demo .progress .bar.w-12 {
  width: 12%;
}
.dumi-default-previewer-demo .progress .bar.w-13 {
  width: 13%;
}
.dumi-default-previewer-demo .progress .bar.w-14 {
  width: 14%;
}
.dumi-default-previewer-demo .progress .bar.w-15 {
  width: 15%;
}
.dumi-default-previewer-demo .progress .bar.w-16 {
  width: 16%;
}
.dumi-default-previewer-demo .progress .bar.w-17 {
  width: 17%;
}
.dumi-default-previewer-demo .progress .bar.w-18 {
  width: 18%;
}
.dumi-default-previewer-demo .progress .bar.w-19 {
  width: 19%;
}
.dumi-default-previewer-demo .progress .bar.w-20 {
  width: 20%;
}
.dumi-default-previewer-demo .progress .bar.w-21 {
  width: 21%;
}
.dumi-default-previewer-demo .progress .bar.w-22 {
  width: 22%;
}
.dumi-default-previewer-demo .progress .bar.w-23 {
  width: 23%;
}
.dumi-default-previewer-demo .progress .bar.w-24 {
  width: 24%;
}
.dumi-default-previewer-demo .progress .bar.w-25 {
  width: 25%;
}
.dumi-default-previewer-demo .progress .bar.w-26 {
  width: 26%;
}
.dumi-default-previewer-demo .progress .bar.w-27 {
  width: 27%;
}
.dumi-default-previewer-demo .progress .bar.w-28 {
  width: 28%;
}
.dumi-default-previewer-demo .progress .bar.w-29 {
  width: 29%;
}
.dumi-default-previewer-demo .progress .bar.w-30 {
  width: 30%;
}
.dumi-default-previewer-demo .progress .bar.w-31 {
  width: 31%;
}
.dumi-default-previewer-demo .progress .bar.w-32 {
  width: 32%;
}
.dumi-default-previewer-demo .progress .bar.w-33 {
  width: 33%;
}
.dumi-default-previewer-demo .progress .bar.w-34 {
  width: 34%;
}
.dumi-default-previewer-demo .progress .bar.w-35 {
  width: 35%;
}
.dumi-default-previewer-demo .progress .bar.w-36 {
  width: 36%;
}
.dumi-default-previewer-demo .progress .bar.w-37 {
  width: 37%;
}
.dumi-default-previewer-demo .progress .bar.w-38 {
  width: 38%;
}
.dumi-default-previewer-demo .progress .bar.w-39 {
  width: 39%;
}
.dumi-default-previewer-demo .progress .bar.w-40 {
  width: 40%;
}
.dumi-default-previewer-demo .progress .bar.w-41 {
  width: 41%;
}
.dumi-default-previewer-demo .progress .bar.w-42 {
  width: 42%;
}
.dumi-default-previewer-demo .progress .bar.w-43 {
  width: 43%;
}
.dumi-default-previewer-demo .progress .bar.w-44 {
  width: 44%;
}
.dumi-default-previewer-demo .progress .bar.w-45 {
  width: 45%;
}
.dumi-default-previewer-demo .progress .bar.w-46 {
  width: 46%;
}
.dumi-default-previewer-demo .progress .bar.w-47 {
  width: 47%;
}
.dumi-default-previewer-demo .progress .bar.w-48 {
  width: 48%;
}
.dumi-default-previewer-demo .progress .bar.w-49 {
  width: 49%;
}
.dumi-default-previewer-demo .progress .bar.w-50 {
  width: 50%;
}
.dumi-default-previewer-demo .progress .bar.w-51 {
  width: 51%;
}
.dumi-default-previewer-demo .progress .bar.w-52 {
  width: 52%;
}
.dumi-default-previewer-demo .progress .bar.w-53 {
  width: 53%;
}
.dumi-default-previewer-demo .progress .bar.w-54 {
  width: 54%;
}
.dumi-default-previewer-demo .progress .bar.w-55 {
  width: 55%;
}
.dumi-default-previewer-demo .progress .bar.w-56 {
  width: 56%;
}
.dumi-default-previewer-demo .progress .bar.w-57 {
  width: 57%;
}
.dumi-default-previewer-demo .progress .bar.w-58 {
  width: 58%;
}
.dumi-default-previewer-demo .progress .bar.w-59 {
  width: 59%;
}
.dumi-default-previewer-demo .progress .bar.w-60 {
  width: 60%;
}
.dumi-default-previewer-demo .progress .bar.w-61 {
  width: 61%;
}
.dumi-default-previewer-demo .progress .bar.w-62 {
  width: 62%;
}
.dumi-default-previewer-demo .progress .bar.w-63 {
  width: 63%;
}
.dumi-default-previewer-demo .progress .bar.w-64 {
  width: 64%;
}
.dumi-default-previewer-demo .progress .bar.w-65 {
  width: 65%;
}
.dumi-default-previewer-demo .progress .bar.w-66 {
  width: 66%;
}
.dumi-default-previewer-demo .progress .bar.w-67 {
  width: 67%;
}
.dumi-default-previewer-demo .progress .bar.w-68 {
  width: 68%;
}
.dumi-default-previewer-demo .progress .bar.w-69 {
  width: 69%;
}
.dumi-default-previewer-demo .progress .bar.w-70 {
  width: 70%;
}
.dumi-default-previewer-demo .progress .bar.w-71 {
  width: 71%;
}
.dumi-default-previewer-demo .progress .bar.w-72 {
  width: 72%;
}
.dumi-default-previewer-demo .progress .bar.w-73 {
  width: 73%;
}
.dumi-default-previewer-demo .progress .bar.w-74 {
  width: 74%;
}
.dumi-default-previewer-demo .progress .bar.w-75 {
  width: 75%;
}
.dumi-default-previewer-demo .progress .bar.w-76 {
  width: 76%;
}
.dumi-default-previewer-demo .progress .bar.w-77 {
  width: 77%;
}
.dumi-default-previewer-demo .progress .bar.w-78 {
  width: 78%;
}
.dumi-default-previewer-demo .progress .bar.w-79 {
  width: 79%;
}
.dumi-default-previewer-demo .progress .bar.w-80 {
  width: 80%;
}
.dumi-default-previewer-demo .progress .bar.w-81 {
  width: 81%;
}
.dumi-default-previewer-demo .progress .bar.w-82 {
  width: 82%;
}
.dumi-default-previewer-demo .progress .bar.w-83 {
  width: 83%;
}
.dumi-default-previewer-demo .progress .bar.w-84 {
  width: 84%;
}
.dumi-default-previewer-demo .progress .bar.w-85 {
  width: 85%;
}
.dumi-default-previewer-demo .progress .bar.w-86 {
  width: 86%;
}
.dumi-default-previewer-demo .progress .bar.w-87 {
  width: 87%;
}
.dumi-default-previewer-demo .progress .bar.w-88 {
  width: 88%;
}
.dumi-default-previewer-demo .progress .bar.w-89 {
  width: 89%;
}
.dumi-default-previewer-demo .progress .bar.w-90 {
  width: 90%;
}
.dumi-default-previewer-demo .progress .bar.w-91 {
  width: 91%;
}
.dumi-default-previewer-demo .progress .bar.w-92 {
  width: 92%;
}
.dumi-default-previewer-demo .progress .bar.w-93 {
  width: 93%;
}
.dumi-default-previewer-demo .progress .bar.w-94 {
  width: 94%;
}
.dumi-default-previewer-demo .progress .bar.w-95 {
  width: 95%;
}
.dumi-default-previewer-demo .progress .bar.w-96 {
  width: 96%;
}
.dumi-default-previewer-demo .progress .bar.w-97 {
  width: 97%;
}
.dumi-default-previewer-demo .progress .bar.w-98 {
  width: 98%;
}
.dumi-default-previewer-demo .progress .bar.w-99 {
  width: 99%;
}
.dumi-default-previewer-demo .progress .bar.w-100 {
  width: 100%;
}
.dumi-default-previewer-demo .progress .bar.w-0,
.dumi-default-previewer-demo .progress .bar.w-100 {
  border-right: 0;
}
.dumi-default-previewer-demo .tabs .content {
  display: none;
  flex-basis: 100%;
  padding: 0.75rem 0 0;
}
.dumi-default-previewer-demo .tabs input {
  display: none;
}
.dumi-default-previewer-demo .tabs input:checked + label {
  color: #41403e;
  color: var(--primary);
  border-bottom-color: #41403e;
  border-bottom-color: var(--secondary);
  border-bottom-style: solid;
  border-bottom-width: 3px;
}
.dumi-default-previewer-demo .tabs input[id$=tab1]:checked ~ div[id$=content1] {
  display: block;
}
.dumi-default-previewer-demo .tabs input[id$=tab2]:checked ~ div[id$=content2] {
  display: block;
}
.dumi-default-previewer-demo .tabs input[id$=tab3]:checked ~ div[id$=content3] {
  display: block;
}
.dumi-default-previewer-demo .tabs input[id$=tab4]:checked ~ div[id$=content4] {
  display: block;
}
.dumi-default-previewer-demo .tabs input[id$=tab5]:checked ~ div[id$=content5] {
  display: block;
}
.dumi-default-previewer-demo .tabs label {
  color: #41403e;
  color: var(--primary-light);
  display: inline-block;
  font-weight: 600;
  margin: 0 0 -1px;
  padding: 0.75rem;
  text-align: center;
}
.dumi-default-previewer-demo .tabs label:hover {
  color: #41403e;
  color: var(--muted);
  cursor: pointer;
}
.dumi-default-previewer-demo .margin {
  margin: 1rem;
}
.dumi-default-previewer-demo .margin-top {
  margin-top: 1rem;
}
.dumi-default-previewer-demo .margin-top-large {
  margin-top: 2rem;
}
.dumi-default-previewer-demo .margin-top-small {
  margin-top: 0.5rem;
}
.dumi-default-previewer-demo .margin-top-none {
  margin-top: 0;
}
.dumi-default-previewer-demo .margin-right {
  margin-right: 1rem;
}
.dumi-default-previewer-demo .margin-right-large {
  margin-right: 2rem;
}
.dumi-default-previewer-demo .margin-right-small {
  margin-right: 0.5rem;
}
.dumi-default-previewer-demo .margin-right-none {
  margin-right: 0;
}
.dumi-default-previewer-demo .margin-bottom {
  margin-bottom: 1rem;
}
.dumi-default-previewer-demo .margin-bottom-large {
  margin-bottom: 2rem;
}
.dumi-default-previewer-demo .margin-bottom-small {
  margin-bottom: 0.5rem;
}
.dumi-default-previewer-demo .margin-bottom-none {
  margin-bottom: 0;
}
.dumi-default-previewer-demo .margin-left {
  margin-left: 1rem;
}
.dumi-default-previewer-demo .margin-left-large {
  margin-left: 2rem;
}
.dumi-default-previewer-demo .margin-left-small {
  margin-left: 0.5rem;
}
.dumi-default-previewer-demo .margin-left-none {
  margin-left: 0;
}
.dumi-default-previewer-demo .margin-large {
  margin: 2rem;
}
.dumi-default-previewer-demo .margin-small {
  margin: 0.5rem;
}
.dumi-default-previewer-demo .margin-none {
  margin: 0;
}
.dumi-default-previewer-demo .padding {
  padding: 1rem;
}
.dumi-default-previewer-demo .padding-top {
  padding-top: 1rem;
}
.dumi-default-previewer-demo .padding-top-large {
  padding-top: 2rem;
}
.dumi-default-previewer-demo .padding-top-small {
  padding-top: 0.5rem;
}
.dumi-default-previewer-demo .padding-top-none {
  padding-top: 0;
}
.dumi-default-previewer-demo .padding-right {
  padding-right: 1rem;
}
.dumi-default-previewer-demo .padding-right-large {
  padding-right: 2rem;
}
.dumi-default-previewer-demo .padding-right-small {
  padding-right: 0.5rem;
}
.dumi-default-previewer-demo .padding-right-none {
  padding-right: 0;
}
.dumi-default-previewer-demo .padding-bottom {
  padding-bottom: 1rem;
}
.dumi-default-previewer-demo .padding-bottom-large {
  padding-bottom: 2rem;
}
.dumi-default-previewer-demo .padding-bottom-small {
  padding-bottom: 0.5rem;
}
.dumi-default-previewer-demo .padding-bottom-none {
  padding-bottom: 0;
}
.dumi-default-previewer-demo .padding-left {
  padding-left: 1rem;
}
.dumi-default-previewer-demo .padding-left-large {
  padding-left: 2rem;
}
.dumi-default-previewer-demo .padding-left-small {
  padding-left: 0.5rem;
}
.dumi-default-previewer-demo .padding-left-none {
  padding-left: 0;
}
.dumi-default-previewer-demo .padding-large {
  padding: 2rem;
}
.dumi-default-previewer-demo .padding-small {
  padding: 0.5rem;
}
.dumi-default-previewer-demo .padding-none {
  padding: 0;
}
.dumi-default-previewer-demo nav {
  background-color: #41403e;
  background-color: var(--main-background);
  display: flex;
  padding: 0.3rem;
  position: relative;
  width: 100%;
  z-index: 100;
}
@media only screen and (max-width: 768px) {
  .dumi-default-previewer-demo nav {
    display: block;
  }
}
.dumi-default-previewer-demo nav .bar1,
.dumi-default-previewer-demo nav .bar2,
.dumi-default-previewer-demo nav .bar3 {
  background-color: #41403e;
  background-color: var(--primary);
  border-color: #41403e;
  border-color: var(--primary);
  color: #41403e;
  color: var(--primary);
  border-bottom-left-radius: 15px 5px;
  border-bottom-right-radius: 15px 3px;
  border-bottom-style: solid;
  border-bottom-width: 5px;
  margin: 6px 0;
  transition: 0.4s;
  width: 2rem;
}
.dumi-default-previewer-demo nav .collapsible input[id^=collapsible]:checked + button .bar1,
.dumi-default-previewer-demo nav .collapsible input[id^=collapsible]:checked + label .bar1 {
  transform: rotate(-45deg) translate(-9px, 7px);
}
.dumi-default-previewer-demo nav .collapsible input[id^=collapsible]:checked + button .bar2,
.dumi-default-previewer-demo nav .collapsible input[id^=collapsible]:checked + label .bar2 {
  opacity: 0;
}
.dumi-default-previewer-demo nav .collapsible input[id^=collapsible]:checked + button .bar3,
.dumi-default-previewer-demo nav .collapsible input[id^=collapsible]:checked + label .bar3 {
  transform: rotate(45deg) translate(-8px, -9px);
}
.dumi-default-previewer-demo nav.split-nav {
  justify-content: space-between;
}
.dumi-default-previewer-demo nav.fixed {
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
}
.dumi-default-previewer-demo nav div {
  margin: 0 1rem;
}
.dumi-default-previewer-demo nav ul.inline {
  margin-bottom: 0;
  margin-top: 10px;
  padding: 0;
}
.dumi-default-previewer-demo nav ul.inline li {
  display: inline-block;
  margin: 0 0.5rem;
}
@media only screen and (max-width: 768px) {
  .dumi-default-previewer-demo nav ul.inline li {
    display: block;
    margin: 1rem 0;
  }
}
.dumi-default-previewer-demo nav a {
  color: #41403e;
  color: var(--primary);
  border-bottom-color: #41403e;
  border-bottom-color: var(--primary);
  background-image: none;
  border-bottom-left-radius: 15px 3px;
  border-bottom-right-radius: 15px 5px;
  border-bottom-style: solid;
  border-bottom-width: 5px;
  padding-bottom: 0.1rem;
}
.dumi-default-previewer-demo nav a:hover {
  border-color: #41403e;
  border-color: var(--primary-light);
  border-bottom-style: solid;
  border-bottom-width: 5px;
}
.dumi-default-previewer-demo nav ul.inline li a {
  font-size: 1.3rem;
}
.dumi-default-previewer-demo nav ul.inline li::before {
  content: "";
}
@media only screen and (max-width: 992px) {
  .dumi-default-previewer-demo nav ul {
    text-align: center;
  }
}
.dumi-default-previewer-demo nav .nav-brand h1,
.dumi-default-previewer-demo nav .nav-brand h2,
.dumi-default-previewer-demo nav .nav-brand h3,
.dumi-default-previewer-demo nav .nav-brand h4,
.dumi-default-previewer-demo nav .nav-brand h5,
.dumi-default-previewer-demo nav .nav-brand h6 {
  margin: 0;
  margin-bottom: 0.2rem;
}
@media only screen and (max-width: 768px) {
  .dumi-default-previewer-demo nav .collapsible {
    width: 100%;
  }
}
.dumi-default-previewer-demo nav .collapsible input[id^=collapsible]:checked ~ div.collapsible-body {
  margin: 0;
  max-height: 960px;
  opacity: 1;
  padding: 0;
}
.dumi-default-previewer-demo nav .collapsible:nth-of-type(1),
.dumi-default-previewer-demo nav .collapsible .collapsible-body {
  border: 0;
}
@media only screen and (min-width: 769px) {
  .dumi-default-previewer-demo nav .collapsible:nth-of-type(1),
  .dumi-default-previewer-demo nav .collapsible .collapsible-body {
    display: contents;
  }
}
.dumi-default-previewer-demo nav div.collapsible-body {
  padding: none;
}
.dumi-default-previewer-demo nav .collapsible label {
  border-color: #41403e;
  border-color: var(--primary);
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-style: solid;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  border-width: 2px;
}
.dumi-default-previewer-demo nav .collapsible > button {
  border: 0;
}
.dumi-default-previewer-demo nav .collapsible > button,
.dumi-default-previewer-demo nav .collapsible > label {
  background-color: #41403e;
  background-color: var(--main-background);
  display: none;
  font-size: 0.5rem;
  margin-right: 1rem;
  padding: 0.25rem;
  position: absolute;
  right: 0;
  top: 0.2rem;
}
@media only screen and (max-width: 768px) {
  .dumi-default-previewer-demo nav .collapsible > button,
  .dumi-default-previewer-demo nav .collapsible > label {
    display: block;
  }
}
`,""]),f.Z=y},95060:function(s,f,e){"use strict";var i=e(8081),u=e.n(i),o=e(23645),n=e.n(o),d=n()(u());d.push([s.id,`.dumi-default-container.markdown {
  padding: 18px 0;
  padding-inline-start: 44px;
  padding-inline-end: 16px;
  border-radius: 4px;
}
.dumi-default-container.markdown:not(:first-child) {
  margin-bottom: 24px;
}
.dumi-default-container.markdown:not(:last-child) {
  margin-top: 32px;
}
.dumi-default-container.markdown > svg {
  float: left;
  fill: currentcolor;
  margin-inline-start: -26px;
  width: 18px;
}
[data-direction='rtl'] .dumi-default-container.markdown > svg {
  float: right;
}
.dumi-default-container.markdown > h4 {
  clear: none;
  margin: 0 0 12px;
  font-size: 15px;
  line-height: 17px;
}
.dumi-default-container.markdown > section {
  font-size: 15px;
}
.dumi-default-container.markdown[data-type='info'] {
  background: #ecf4ff;
}
.dumi-default-container.markdown[data-type='info'] > h4,
.dumi-default-container.markdown[data-type='info'] > svg {
  color: #3367af;
}
.dumi-default-container.markdown[data-type='info'] > section {
  color: #496a99;
}
[data-prefers-color="dark"] .dumi-default-container.markdown[data-type='info'] {
  background: #001c44;
}
[data-prefers-color="dark"] .dumi-default-container.markdown[data-type='info'] > h4,
[data-prefers-color="dark"] .dumi-default-container.markdown[data-type='info'] > svg {
  color: #5e8ed0;
}
[data-prefers-color="dark"] .dumi-default-container.markdown[data-type='info'] > section {
  color: #7391bc;
}
.dumi-default-container.markdown[data-type='warning'] {
  background: #fff3da;
}
.dumi-default-container.markdown[data-type='warning'] > h4,
.dumi-default-container.markdown[data-type='warning'] > svg {
  color: #b78314;
}
.dumi-default-container.markdown[data-type='warning'] > section {
  color: #9e7a2d;
}
[data-prefers-color="dark"] .dumi-default-container.markdown[data-type='warning'] {
  background: #2d1f00;
}
[data-prefers-color="dark"] .dumi-default-container.markdown[data-type='warning'] > h4,
[data-prefers-color="dark"] .dumi-default-container.markdown[data-type='warning'] > svg {
  color: #cd9417;
}
[data-prefers-color="dark"] .dumi-default-container.markdown[data-type='warning'] > section {
  color: #b78c2e;
}
.dumi-default-container.markdown[data-type='success'] {
  background: #dff8e7;
}
.dumi-default-container.markdown[data-type='success'] > h4,
.dumi-default-container.markdown[data-type='success'] > svg {
  color: #238241;
}
.dumi-default-container.markdown[data-type='success'] > section {
  color: #357047;
}
[data-prefers-color="dark"] .dumi-default-container.markdown[data-type='success'] {
  background: #082210;
}
[data-prefers-color="dark"] .dumi-default-container.markdown[data-type='success'] > h4,
[data-prefers-color="dark"] .dumi-default-container.markdown[data-type='success'] > svg {
  color: #2a9a4d;
}
[data-prefers-color="dark"] .dumi-default-container.markdown[data-type='success'] > section {
  color: #3d8654;
}
.dumi-default-container.markdown[data-type='error'] {
  background: #fdf4f5;
}
.dumi-default-container.markdown[data-type='error'] > h4,
.dumi-default-container.markdown[data-type='error'] > svg {
  color: #b23642;
}
.dumi-default-container.markdown[data-type='error'] > section {
  color: #955359;
}
[data-prefers-color="dark"] .dumi-default-container.markdown[data-type='error'] {
  background: #2a060a;
}
[data-prefers-color="dark"] .dumi-default-container.markdown[data-type='error'] > h4,
[data-prefers-color="dark"] .dumi-default-container.markdown[data-type='error'] > svg {
  color: #c6414e;
}
[data-prefers-color="dark"] .dumi-default-container.markdown[data-type='error'] > section {
  color: #ad5962;
}
`,""]),f.Z=d},70633:function(s,f,e){"use strict";var i=e(8081),u=e.n(i),o=e(23645),n=e.n(o),d=n()(u());d.push([s.id,`.dumi-default-previewer {
  margin: 24px 0 32px;
  border: 1px solid #e4e9ec;
  border-radius: 4px;
  background-color: inherit;
}
[data-prefers-color="dark"] .dumi-default-previewer {
  border-color: #2a353c;
}
[data-dumi-demo-grid] .dumi-default-previewer {
  margin: 0 0 16px;
}
[data-dumi-demo-grid] .dumi-default-previewer:first-child {
  margin-top: 24px;
}
[data-dumi-demo-grid] .dumi-default-previewer:last-child {
  margin-bottom: 32px;
}
.dumi-default-previewer-demo {
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  padding: 40px 24px;
}
.dumi-default-previewer-demo > iframe {
  display: block;
  width: 100%;
  height: 300px;
  border: 0;
}
.dumi-default-previewer-demo[data-iframe] {
  position: relative;
  padding: 0;
  overflow: hidden;
}
.dumi-default-previewer-demo[data-iframe]::before {
  content: '';
  display: block;
  height: 24px;
  background-color: #e4e9ec;
}
[data-prefers-color="dark"] .dumi-default-previewer-demo[data-iframe]::before {
  background-color: #2a353c;
}
.dumi-default-previewer-demo[data-iframe]::after {
  content: '';
  position: absolute;
  top: 5px;
  left: 8px;
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #fd6458;
  box-shadow: 20px 0 0 #ffbf2b, 40px 0 0 #24cc3d;
}
.dumi-default-previewer-demo[data-transform] {
  transform: translate(0, 0);
}
.dumi-default-previewer-demo[data-compact] {
  padding: 0;
}
.dumi-default-previewer-meta {
  border-top: 1px solid #e4e9ec;
}
[data-prefers-color="dark"] .dumi-default-previewer-meta {
  border-top-color: #2a353c;
}
.dumi-default-previewer-desc {
  position: relative;
}
.dumi-default-previewer-desc > .markdown {
  padding: 14px 24px;
  border-bottom: 1px dashed #e4e9ec;
}
[data-prefers-color="dark"] .dumi-default-previewer-desc > .markdown {
  border-bottom-color: #2a353c;
}
.dumi-default-previewer-desc > h5 {
  position: absolute;
  top: -7px;
  left: 20px;
  margin: 0;
  padding: 0 4px;
  display: inline-block;
  font-size: 14px;
  line-height: 1;
  font-weight: bold;
  background: linear-gradient(to top, #ffffff, #ffffff 50%, rgba(255, 255, 255, 0)) 100%;
}
[data-prefers-color="dark"] .dumi-default-previewer-desc > h5 {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.95) 50%, rgba(0, 0, 0, 0)) 100%;
}
.dumi-default-previewer-desc > h5 > a {
  color: #30363f;
}
[data-prefers-color="dark"] .dumi-default-previewer-desc > h5 > a {
  color: #c6c9cd;
}
.dumi-default-previewer-desc > h5 > a:not(:hover) {
  text-decoration: none;
}
.dumi-default-previewer-desc > h5 > a > strong {
  float: inline-start;
  padding-inline-end: 8px;
  color: #d59200;
  font-size: 12px;
  line-height: 15px;
}
[data-prefers-color="dark"] .dumi-default-previewer-desc > h5 > a > strong {
  color: #895e00;
}
.dumi-default-previewer[data-active] {
  box-shadow: 0 0 0 4px rgba(22, 119, 255, 0.1);
  border-color: #7cb3ff;
}
[data-prefers-color="dark"] .dumi-default-previewer[data-active] {
  box-shadow: 0 0 0 4px rgba(0, 83, 200, 0.1);
  border-color: #002962;
}
.dumi-default-previewer[data-debug] {
  border-color: #ffc23c;
}
[data-prefers-color="dark"] .dumi-default-previewer[data-debug] {
  border-color: #231800;
}
.dumi-default-previewer[data-debug][data-active] {
  box-shadow: 0 0 0 4px rgba(213, 146, 0, 0.1);
}
[data-prefers-color="dark"] .dumi-default-previewer[data-debug][data-active] {
  box-shadow: 0 0 0 4px rgba(137, 94, 0, 0.1);
}
`,""]),f.Z=d},73834:function(s,f,e){"use strict";var i=e(8081),u=e.n(i),o=e(23645),n=e.n(o),d=n()(u());d.push([s.id,`[data-prefers-color="dark"] .token.doctype,
[data-prefers-color="dark"] .token.punctuation,
[data-prefers-color="dark"] .token.entity,
[data-prefers-color="dark"] code[class*='language-'],
[data-prefers-color="dark"] pre[class*='language-'] {
  color: #8590a0;
}
[data-prefers-color="dark"] .token.comment,
[data-prefers-color="dark"] .token.prolog,
[data-prefers-color="dark"] .token.cdata {
  color: #616d7f;
}
.dumi-default-source-code {
  position: relative;
  background-color: #fbfcfd;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.dumi-default-source-code > pre.prism-code {
  margin: 0;
  padding: 18px 24px;
  font-size: 14px;
  line-height: 1.58;
  direction: ltr;
  background: transparent;
}
.dumi-default-source-code > pre.prism-code::before,
.dumi-default-source-code > pre.prism-code::after {
  content: none;
}
.dumi-default-source-code > pre.prism-code > .highlighted {
  background-color: #eeeff0;
  width: calc(100% + 48px);
  margin-inline-start: -24px;
  padding-inline-start: 24px;
}
.dumi-default-source-code-copy {
  position: absolute;
  top: 9px;
  right: 12px;
  display: inline-block;
  padding: 8px 12px;
  background-color: rgba(251, 252, 253, 0.8);
  border: 0;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s;
}
.dumi-default-source-code-copy > svg {
  width: 16px;
  fill: #98a3aa;
  transition: fill 0.2s;
}
[data-prefers-color="dark"] .dumi-default-source-code-copy > svg {
  fill: #4a545a;
}
.dumi-default-source-code-copy:hover > svg {
  fill: #7c8a93;
}
[data-prefers-color="dark"] .dumi-default-source-code-copy:hover > svg {
  fill: #616e75;
}
.dumi-default-source-code-copy[data-copied] > svg {
  fill: #208a41;
}
[data-prefers-color="dark"] .dumi-default-source-code-copy[data-copied] > svg {
  fill: #124c24;
}
.dumi-default-source-code:not(:hover) .dumi-default-source-code-copy {
  opacity: 0;
  visibility: hidden;
}
[data-prefers-color="dark"] .dumi-default-source-code {
  background-color: #020305;
}
[data-prefers-color="dark"] .dumi-default-source-code-copy {
  background-color: rgba(2, 3, 5, 0.2);
}
[data-prefers-color="dark"] .dumi-default-source-code > pre.prism-code > .highlighted {
  background-color: #1c1d1e;
}
`,""]),f.Z=d},30194:function(s,f,e){"use strict";var i=e(8081),u=e.n(i),o=e(23645),n=e.n(o),d=n()(u());d.push([s.id,`.dumi-default-content-tabs {
  list-style-type: none;
  display: flex;
  align-items: center;
  height: 60px;
  margin: -48px -48px 48px -48px;
  padding: 0 48px;
  border-bottom: 1px solid #e4e9ec;
}
[data-prefers-color="dark"] .dumi-default-content-tabs {
  border-bottom-color: #2a353c;
}
@media only screen and (max-width: 767px) {
  .dumi-default-content-tabs {
    margin: -24px -24px 24px;
    padding: 0 24px;
    height: 42px;
  }
}
[data-no-sidebar] .dumi-default-content-tabs {
  margin: 0 0 48px;
  padding: 0;
}
@media only screen and (max-width: 767px) {
  [data-no-sidebar] .dumi-default-content-tabs {
    margin-bottom: 24px;
  }
}
.dumi-default-content-tabs > li {
  height: inherit;
}
.dumi-default-content-tabs > li > button {
  padding: 0;
  height: inherit;
  color: #4f5866;
  font-size: 17px;
  border: 0;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s;
}
[data-prefers-color="dark"] .dumi-default-content-tabs > li > button {
  color: #8590a0;
}
.dumi-default-content-tabs > li > button:hover {
  color: #1677ff;
}
[data-prefers-color="dark"] .dumi-default-content-tabs > li > button:hover {
  color: #0053c8;
}
.dumi-default-content-tabs > li:not(last-child) {
  margin-inline-end: 42px;
}
@media only screen and (max-width: 767px) {
  .dumi-default-content-tabs > li:not(last-child) {
    margin-inline-end: 20px;
  }
}
.dumi-default-content-tabs > li[data-active] {
  position: relative;
}
.dumi-default-content-tabs > li[data-active] > button {
  color: #30363f;
}
[data-prefers-color="dark"] .dumi-default-content-tabs > li[data-active] > button {
  color: #c6c9cd;
}
.dumi-default-content-tabs > li[data-active]::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 1px;
  background-color: #1677ff;
}
[data-prefers-color="dark"] .dumi-default-content-tabs > li[data-active]::after {
  background-color: #0053c8;
}
`,""]),f.Z=d},80976:function(s,f,e){"use strict";var i=e(8081),u=e.n(i),o=e(23645),n=e.n(o),d=n()(u());d.push([s.id,`[data-dumi-tooltip] {
  position: relative;
}
[data-dumi-tooltip]::before,
[data-dumi-tooltip]::after {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
  opacity: 0.7;
  pointer-events: none;
  transition: all 0.2s;
}
[data-dumi-tooltip]::before {
  content: attr(data-dumi-tooltip);
  min-width: 30px;
  margin-bottom: 8px;
  padding: 5px 8px;
  color: #fff;
  font-size: 13px;
  line-height: 1.1;
  white-space: nowrap;
  background-color: #000;
  border-radius: 2px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}
[data-prefers-color="dark"] [data-dumi-tooltip]::before {
  background-color: #222;
}
[data-dumi-tooltip]::after {
  content: '';
  width: 0;
  height: 0;
  border: 4px solid transparent;
  border-top-color: #000;
}
[data-prefers-color="dark"] [data-dumi-tooltip]::after {
  border-top-color: #222;
}
[data-dumi-tooltip]:not(:hover)::before,
[data-dumi-tooltip]:not(:hover)::after {
  visibility: hidden;
  opacity: 0;
}
[data-dumi-tooltip][data-dumi-tooltip-bottom]::before,
[data-dumi-tooltip][data-dumi-tooltip-bottom]::after {
  bottom: auto;
  top: 100%;
}
[data-dumi-tooltip][data-dumi-tooltip-bottom]::before {
  margin-top: 8px;
  margin-bottom: 0;
}
[data-dumi-tooltip][data-dumi-tooltip-bottom]::after {
  border-top-color: transparent;
  border-bottom-color: #000;
}
[data-prefers-color="dark"] [data-dumi-tooltip][data-dumi-tooltip-bottom]::after {
  border-bottom-color: #222;
}
.dumi-default-previewer-actions {
  display: flex;
  height: 32px;
  align-items: center;
  justify-content: center;
}
.dumi-default-previewer-actions:not(:last-child) {
  border-bottom: 1px dashed #e4e9ec;
}
[data-prefers-color="dark"] .dumi-default-previewer-actions:not(:last-child) {
  border-bottom-color: #2a353c;
}
.dumi-default-previewer-action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
}
.dumi-default-previewer-action-btn > svg {
  width: 16px;
  fill: #98a3aa;
  transition: fill 0.2s;
}
[data-prefers-color="dark"] .dumi-default-previewer-action-btn > svg {
  fill: #4a545a;
}
.dumi-default-previewer-action-btn:hover > svg {
  fill: #7c8a93;
}
[data-prefers-color="dark"] .dumi-default-previewer-action-btn:hover > svg {
  fill: #616e75;
}
.dumi-default-previewer-action-btn:not(:last-child) {
  margin-inline-end: 4px;
}
.dumi-default-previewer-tabs {
  position: relative;
  padding: 0 12px;
}
.dumi-default-previewer-tabs::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0;
  border-bottom: 1px dashed #e4e9ec;
}
[data-prefers-color="dark"] .dumi-default-previewer-tabs::after {
  border-bottom-color: #2a353c;
}
.dumi-default-tabs {
  overflow: hidden;
}
.dumi-default-tabs-top {
  flex-direction: column;
}
.dumi-default-tabs-top .dumi-default-tabs-ink-bar {
  bottom: 0;
}
.dumi-default-tabs-nav {
  display: flex;
}
.dumi-default-tabs-nav-wrap {
  display: flex;
  white-space: nowrap;
  overflow: hidden;
}
.dumi-default-tabs-nav-wrap.dumi-default-tabs-nav-wrap-ping-left {
  box-shadow: 5px 0 5px -5px rgba(0, 0, 0, 0.1) inset;
}
.dumi-default-tabs-nav-wrap.dumi-default-tabs-nav-wrap-ping-right ~ * > .dumi-default-tabs-nav-more {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
.dumi-default-tabs-nav-list {
  position: relative;
  z-index: 1;
  display: flex;
  transition: transform 0.2s;
}
.dumi-default-tabs-nav-more {
  height: 100%;
  cursor: pointer;
  background: none;
  border: 0;
  transition: box-shadow 0.2s;
}
.dumi-default-tabs-tab {
  display: flex;
  margin: 0 12px;
}
.dumi-default-tabs-tab-btn {
  padding: 0;
  color: #4f5866;
  font-size: 14px;
  line-height: 36px;
  border: 0;
  outline: none;
  background: transparent;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.2s;
}
[data-prefers-color="dark"] .dumi-default-tabs-tab-btn {
  color: #8590a0;
}
.dumi-default-tabs-tab-btn:hover {
  color: #30363f;
}
[data-prefers-color="dark"] .dumi-default-tabs-tab-btn:hover {
  color: #c6c9cd;
}
.dumi-default-tabs-tab-active .dumi-default-tabs-tab-btn {
  color: #30363f;
}
[data-prefers-color="dark"] .dumi-default-tabs-tab-active .dumi-default-tabs-tab-btn {
  color: #c6c9cd;
}
.dumi-default-tabs-ink-bar {
  position: absolute;
  height: 1px;
  background: #1677ff;
  transition: left 0.2s, width 0.2s;
  pointer-events: none;
}
[data-prefers-color="dark"] .dumi-default-tabs-ink-bar {
  background: #0053c8;
}
.dumi-default-tabs-dropdown {
  position: absolute;
  background: inherit;
  border: 1px solid #d0d5d8;
  max-height: 200px;
  overflow: auto;
}
[data-prefers-color="dark"] .dumi-default-tabs-dropdown {
  border-color: #1c2022;
}
.dumi-default-tabs-dropdown > ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.dumi-default-tabs-dropdown > ul > li {
  padding: 4px 12px;
  font-size: 14px;
  cursor: pointer;
}
.dumi-default-tabs-dropdown > ul > li:hover {
  color: #1677ff;
}
[data-prefers-color="dark"] .dumi-default-tabs-dropdown > ul > li:hover {
  color: #0053c8;
}
.dumi-default-tabs-dropdown > ul > li:not(:last-child) {
  border-bottom: 1px dashed #d0d5d8;
}
[data-prefers-color="dark"] .dumi-default-tabs-dropdown > ul > li:not(:last-child) {
  border-bottom-color: #1c2022;
}
.dumi-default-tabs-dropdown-hidden {
  display: none;
}
`,""]),f.Z=d},23645:function(s){"use strict";s.exports=function(f){var e=[];return e.toString=function(){return this.map(function(u){var o="",n=typeof u[5]!="undefined";return u[4]&&(o+="@supports (".concat(u[4],") {")),u[2]&&(o+="@media ".concat(u[2]," {")),n&&(o+="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {")),o+=f(u),n&&(o+="}"),u[2]&&(o+="}"),u[4]&&(o+="}"),o}).join("")},e.i=function(u,o,n,d,v){typeof u=="string"&&(u=[[null,u,void 0]]);var p={};if(n)for(var h=0;h<this.length;h++){var x=this[h][0];x!=null&&(p[x]=!0)}for(var y=0;y<u.length;y++){var b=[].concat(u[y]);n&&p[b[0]]||(typeof v!="undefined"&&(typeof b[5]=="undefined"||(b[1]="@layer".concat(b[5].length>0?" ".concat(b[5]):""," {").concat(b[1],"}")),b[5]=v),o&&(b[2]&&(b[1]="@media ".concat(b[2]," {").concat(b[1],"}")),b[2]=o),d&&(b[4]?(b[1]="@supports (".concat(b[4],") {").concat(b[1],"}"),b[4]=d):b[4]="".concat(d)),e.push(b))}},e}},61667:function(s){"use strict";s.exports=function(f,e){return e||(e={}),f&&(f=String(f.__esModule?f.default:f),/^['"].*['"]$/.test(f)&&(f=f.slice(1,-1)),e.hash&&(f+=e.hash),/["'() \t\n]|(%20)/.test(f)||e.needQuotes?'"'.concat(f.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):f)}},8081:function(s){"use strict";s.exports=function(f){return f[1]}},9996:function(s){"use strict";var f=function(L){return e(L)&&!i(L)};function e(B){return!!B&&typeof B=="object"}function i(B){var L=Object.prototype.toString.call(B);return L==="[object RegExp]"||L==="[object Date]"||n(B)}var u=typeof Symbol=="function"&&Symbol.for,o=u?Symbol.for("react.element"):60103;function n(B){return B.$$typeof===o}function d(B){return Array.isArray(B)?[]:{}}function v(B,L){return L.clone!==!1&&L.isMergeableObject(B)?C(d(B),B,L):B}function p(B,L,z){return B.concat(L).map(function(H){return v(H,z)})}function h(B,L){if(!L.customMerge)return C;var z=L.customMerge(B);return typeof z=="function"?z:C}function x(B){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(B).filter(function(L){return Object.propertyIsEnumerable.call(B,L)}):[]}function y(B){return Object.keys(B).concat(x(B))}function b(B,L){try{return L in B}catch(z){return!1}}function T(B,L){return b(B,L)&&!(Object.hasOwnProperty.call(B,L)&&Object.propertyIsEnumerable.call(B,L))}function A(B,L,z){var H={};return z.isMergeableObject(B)&&y(B).forEach(function(W){H[W]=v(B[W],z)}),y(L).forEach(function(W){T(B,W)||(b(B,W)&&z.isMergeableObject(L[W])?H[W]=h(W,z)(B[W],L[W],z):H[W]=v(L[W],z))}),H}function C(B,L,z){z=z||{},z.arrayMerge=z.arrayMerge||p,z.isMergeableObject=z.isMergeableObject||f,z.cloneUnlessOtherwiseSpecified=v;var H=Array.isArray(L),W=Array.isArray(B),R=H===W;return R?H?z.arrayMerge(B,L,z):A(B,L,z):v(L,z)}C.all=function(L,z){if(!Array.isArray(L))throw new Error("first argument should be an array");return L.reduce(function(H,W){return C(H,W,z)},{})};var $=C;s.exports=$},68498:function(s){var f=Object.defineProperty,e=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,u=Object.prototype.hasOwnProperty,o=(B,L)=>{for(var z in L)f(B,z,{get:L[z],enumerable:!0})},n=(B,L,z,H)=>{if(L&&typeof L=="object"||typeof L=="function")for(let W of i(L))!u.call(B,W)&&W!==z&&f(B,W,{get:()=>L[W],enumerable:!(H=e(L,W))||H.enumerable});return B},d=B=>n(f({},"__esModule",{value:!0}),B),v={};o(v,{LOCAL_DUMI_DIR:()=>p,LOCAL_PAGES_DIR:()=>x,LOCAL_THEME_DIR:()=>h,PICKED_PKG_FIELDS:()=>C,PREFERS_COLOR_ATTR:()=>T,PREFERS_COLOR_LS_KEY:()=>A,SP_ROUTE_PREFIX:()=>b,THEME_PREFIX:()=>y,USELESS_TMP_FILES:()=>$}),s.exports=d(v);var p=".dumi",h=`${p}/theme`,x=`${p}/pages`,y="dumi-theme-",b="~",T="data-prefers-color",A="dumi:prefers-color",C={name:"",description:"",version:"",license:"",repository:"",author:"",authors:""},$=["tsconfig.json","typings.d.ts"]},73107:function(s,f,e){"use strict";e.d(f,{_y:function(){return x},zt:function(){return h}});var i=e(67294),u=e(8679),o=e.n(u);function n(b){return b.displayName||b.name||"Component"}var d=typeof window!="undefined"?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=i.createContext(null)):i.createContext(null),v=d.Consumer,p=d.Provider,h=p,x=d;function y(b,T){var A=T||{},C=A.intlPropName,$=C===void 0?"intl":C,B=A.forwardRef,L=B===void 0?!1:B,z=A.enforceContext,H=z===void 0?!0:z,W=function(R){return React.createElement(v,null,function(F){var V;H&&invariantIntlContext(F);var q=(V={},V[$]=F,V);return React.createElement(b,__assign({},R,q,{ref:L?R.forwardedRef:null}))})};return W.displayName="injectIntl(".concat(n(b),")"),W.WrappedComponent=b,L?hoistNonReactStatics(React.forwardRef(function(R,F){return React.createElement(W,__assign({},R,{forwardedRef:F}))}),b):hoistNonReactStatics(W,b)}},30874:function(s,f,e){"use strict";e.d(f,{Z:function(){return n}});var i=e(67294),u=e(73107),o=e(34857);function n(){var d=i.useContext(u._y);return(0,o.lq)(d),d}},34857:function(s,f,e){"use strict";e.d(f,{Z0:function(){return v},dt:function(){return p},lq:function(){return d},wU:function(){return h}});var i=e(5187),u=e(67294),o=e(25687),n=e(82644);function d(x){(0,o.kG)(x,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}var v=(0,i.pi)((0,i.pi)({},n.Z0),{textComponent:u.Fragment});function p(x){return function(y){return x(u.Children.toArray(y))}}function h(x,y){if(x===y)return!0;if(!x||!y)return!1;var b=Object.keys(x),T=Object.keys(y),A=b.length;if(T.length!==A)return!1;for(var C=0;C<A;C++){var $=b[C];if(x[$]!==y[$]||!Object.prototype.hasOwnProperty.call(y,$))return!1}return!0}},5187:function(s,f,e){"use strict";e.d(f,{ZT:function(){return u},_T:function(){return n},ev:function(){return W},pi:function(){return o}});var i=function(S,g){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(I,k){I.__proto__=k}||function(I,k){for(var P in k)Object.prototype.hasOwnProperty.call(k,P)&&(I[P]=k[P])},i(S,g)};function u(S,g){if(typeof g!="function"&&g!==null)throw new TypeError("Class extends value "+String(g)+" is not a constructor or null");i(S,g);function I(){this.constructor=S}S.prototype=g===null?Object.create(g):(I.prototype=g.prototype,new I)}var o=function(){return o=Object.assign||function(g){for(var I,k=1,P=arguments.length;k<P;k++){I=arguments[k];for(var D in I)Object.prototype.hasOwnProperty.call(I,D)&&(g[D]=I[D])}return g},o.apply(this,arguments)};function n(S,g){var I={};for(var k in S)Object.prototype.hasOwnProperty.call(S,k)&&g.indexOf(k)<0&&(I[k]=S[k]);if(S!=null&&typeof Object.getOwnPropertySymbols=="function")for(var P=0,k=Object.getOwnPropertySymbols(S);P<k.length;P++)g.indexOf(k[P])<0&&Object.prototype.propertyIsEnumerable.call(S,k[P])&&(I[k[P]]=S[k[P]]);return I}function d(S,g,I,k){var P=arguments.length,D=P<3?g:k===null?k=Object.getOwnPropertyDescriptor(g,I):k,oe;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")D=Reflect.decorate(S,g,I,k);else for(var he=S.length-1;he>=0;he--)(oe=S[he])&&(D=(P<3?oe(D):P>3?oe(g,I,D):oe(g,I))||D);return P>3&&D&&Object.defineProperty(g,I,D),D}function v(S,g){return function(I,k){g(I,k,S)}}function p(S,g,I,k,P,D){function oe(pr){if(pr!==void 0&&typeof pr!="function")throw new TypeError("Function expected");return pr}for(var he=k.kind,Re=he==="getter"?"get":he==="setter"?"set":"value",re=!g&&S?k.static?S:S.prototype:null,Ee=g||(re?Object.getOwnPropertyDescriptor(re,k.name):{}),Ve,Xe=!1,Ze=I.length-1;Ze>=0;Ze--){var ht={};for(var Ct in k)ht[Ct]=Ct==="access"?{}:k[Ct];for(var Ct in k.access)ht.access[Ct]=k.access[Ct];ht.addInitializer=function(pr){if(Xe)throw new TypeError("Cannot add initializers after decoration has completed");D.push(oe(pr||null))};var Bt=(0,I[Ze])(he==="accessor"?{get:Ee.get,set:Ee.set}:Ee[Re],ht);if(he==="accessor"){if(Bt===void 0)continue;if(Bt===null||typeof Bt!="object")throw new TypeError("Object expected");(Ve=oe(Bt.get))&&(Ee.get=Ve),(Ve=oe(Bt.set))&&(Ee.set=Ve),(Ve=oe(Bt.init))&&P.push(Ve)}else(Ve=oe(Bt))&&(he==="field"?P.push(Ve):Ee[Re]=Ve)}re&&Object.defineProperty(re,k.name,Ee),Xe=!0}function h(S,g,I){for(var k=arguments.length>2,P=0;P<g.length;P++)I=k?g[P].call(S,I):g[P].call(S);return k?I:void 0}function x(S){return typeof S=="symbol"?S:"".concat(S)}function y(S,g,I){return typeof g=="symbol"&&(g=g.description?"[".concat(g.description,"]"):""),Object.defineProperty(S,"name",{configurable:!0,value:I?"".concat(I," ",g):g})}function b(S,g){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(S,g)}function T(S,g,I,k){function P(D){return D instanceof I?D:new I(function(oe){oe(D)})}return new(I||(I=Promise))(function(D,oe){function he(Ee){try{re(k.next(Ee))}catch(Ve){oe(Ve)}}function Re(Ee){try{re(k.throw(Ee))}catch(Ve){oe(Ve)}}function re(Ee){Ee.done?D(Ee.value):P(Ee.value).then(he,Re)}re((k=k.apply(S,g||[])).next())})}function A(S,g){var I={label:0,sent:function(){if(D[0]&1)throw D[1];return D[1]},trys:[],ops:[]},k,P,D,oe;return oe={next:he(0),throw:he(1),return:he(2)},typeof Symbol=="function"&&(oe[Symbol.iterator]=function(){return this}),oe;function he(re){return function(Ee){return Re([re,Ee])}}function Re(re){if(k)throw new TypeError("Generator is already executing.");for(;oe&&(oe=0,re[0]&&(I=0)),I;)try{if(k=1,P&&(D=re[0]&2?P.return:re[0]?P.throw||((D=P.return)&&D.call(P),0):P.next)&&!(D=D.call(P,re[1])).done)return D;switch(P=0,D&&(re=[re[0]&2,D.value]),re[0]){case 0:case 1:D=re;break;case 4:return I.label++,{value:re[1],done:!1};case 5:I.label++,P=re[1],re=[0];continue;case 7:re=I.ops.pop(),I.trys.pop();continue;default:if(D=I.trys,!(D=D.length>0&&D[D.length-1])&&(re[0]===6||re[0]===2)){I=0;continue}if(re[0]===3&&(!D||re[1]>D[0]&&re[1]<D[3])){I.label=re[1];break}if(re[0]===6&&I.label<D[1]){I.label=D[1],D=re;break}if(D&&I.label<D[2]){I.label=D[2],I.ops.push(re);break}D[2]&&I.ops.pop(),I.trys.pop();continue}re=g.call(S,I)}catch(Ee){re=[6,Ee],P=0}finally{k=D=0}if(re[0]&5)throw re[1];return{value:re[0]?re[1]:void 0,done:!0}}}var C=Object.create?function(S,g,I,k){k===void 0&&(k=I);var P=Object.getOwnPropertyDescriptor(g,I);(!P||("get"in P?!g.__esModule:P.writable||P.configurable))&&(P={enumerable:!0,get:function(){return g[I]}}),Object.defineProperty(S,k,P)}:function(S,g,I,k){k===void 0&&(k=I),S[k]=g[I]};function $(S,g){for(var I in S)I!=="default"&&!Object.prototype.hasOwnProperty.call(g,I)&&C(g,S,I)}function B(S){var g=typeof Symbol=="function"&&Symbol.iterator,I=g&&S[g],k=0;if(I)return I.call(S);if(S&&typeof S.length=="number")return{next:function(){return S&&k>=S.length&&(S=void 0),{value:S&&S[k++],done:!S}}};throw new TypeError(g?"Object is not iterable.":"Symbol.iterator is not defined.")}function L(S,g){var I=typeof Symbol=="function"&&S[Symbol.iterator];if(!I)return S;var k=I.call(S),P,D=[],oe;try{for(;(g===void 0||g-- >0)&&!(P=k.next()).done;)D.push(P.value)}catch(he){oe={error:he}}finally{try{P&&!P.done&&(I=k.return)&&I.call(k)}finally{if(oe)throw oe.error}}return D}function z(){for(var S=[],g=0;g<arguments.length;g++)S=S.concat(L(arguments[g]));return S}function H(){for(var S=0,g=0,I=arguments.length;g<I;g++)S+=arguments[g].length;for(var k=Array(S),P=0,g=0;g<I;g++)for(var D=arguments[g],oe=0,he=D.length;oe<he;oe++,P++)k[P]=D[oe];return k}function W(S,g,I){if(I||arguments.length===2)for(var k=0,P=g.length,D;k<P;k++)(D||!(k in g))&&(D||(D=Array.prototype.slice.call(g,0,k)),D[k]=g[k]);return S.concat(D||Array.prototype.slice.call(g))}function R(S){return this instanceof R?(this.v=S,this):new R(S)}function F(S,g,I){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var k=I.apply(S,g||[]),P,D=[];return P={},oe("next"),oe("throw"),oe("return"),P[Symbol.asyncIterator]=function(){return this},P;function oe(Xe){k[Xe]&&(P[Xe]=function(Ze){return new Promise(function(ht,Ct){D.push([Xe,Ze,ht,Ct])>1||he(Xe,Ze)})})}function he(Xe,Ze){try{Re(k[Xe](Ze))}catch(ht){Ve(D[0][3],ht)}}function Re(Xe){Xe.value instanceof R?Promise.resolve(Xe.value.v).then(re,Ee):Ve(D[0][2],Xe)}function re(Xe){he("next",Xe)}function Ee(Xe){he("throw",Xe)}function Ve(Xe,Ze){Xe(Ze),D.shift(),D.length&&he(D[0][0],D[0][1])}}function V(S){var g,I;return g={},k("next"),k("throw",function(P){throw P}),k("return"),g[Symbol.iterator]=function(){return this},g;function k(P,D){g[P]=S[P]?function(oe){return(I=!I)?{value:R(S[P](oe)),done:!1}:D?D(oe):oe}:D}}function q(S){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var g=S[Symbol.asyncIterator],I;return g?g.call(S):(S=typeof B=="function"?B(S):S[Symbol.iterator](),I={},k("next"),k("throw"),k("return"),I[Symbol.asyncIterator]=function(){return this},I);function k(D){I[D]=S[D]&&function(oe){return new Promise(function(he,Re){oe=S[D](oe),P(he,Re,oe.done,oe.value)})}}function P(D,oe,he,Re){Promise.resolve(Re).then(function(re){D({value:re,done:he})},oe)}}function Q(S,g){return Object.defineProperty?Object.defineProperty(S,"raw",{value:g}):S.raw=g,S}var X=Object.create?function(S,g){Object.defineProperty(S,"default",{enumerable:!0,value:g})}:function(S,g){S.default=g};function ie(S){if(S&&S.__esModule)return S;var g={};if(S!=null)for(var I in S)I!=="default"&&Object.prototype.hasOwnProperty.call(S,I)&&C(g,S,I);return X(g,S),g}function Oe(S){return S&&S.__esModule?S:{default:S}}function Se(S,g,I,k){if(I==="a"&&!k)throw new TypeError("Private accessor was defined without a getter");if(typeof g=="function"?S!==g||!k:!g.has(S))throw new TypeError("Cannot read private member from an object whose class did not declare it");return I==="m"?k:I==="a"?k.call(S):k?k.value:g.get(S)}function Be(S,g,I,k,P){if(k==="m")throw new TypeError("Private method is not writable");if(k==="a"&&!P)throw new TypeError("Private accessor was defined without a setter");if(typeof g=="function"?S!==g||!P:!g.has(S))throw new TypeError("Cannot write private member to an object whose class did not declare it");return k==="a"?P.call(S,I):P?P.value=I:g.set(S,I),I}function ue(S,g){if(g===null||typeof g!="object"&&typeof g!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof S=="function"?g===S:S.has(g)}},55648:function(s,f,e){"use strict";e.d(f,{Ep:function(){return $},PP:function(){return y},aU:function(){return u},cP:function(){return B},lX:function(){return h},q_:function(){return x}});var i=e(87462),u;(function(L){L.Pop="POP",L.Push="PUSH",L.Replace="REPLACE"})(u||(u={}));var o=function(L){return L};function n(L,z){if(!L){typeof console!="undefined"&&console.warn(z);try{throw new Error(z)}catch(H){}}}var d="beforeunload",v="hashchange",p="popstate";function h(L){L===void 0&&(L={});var z=L,H=z.window,W=H===void 0?document.defaultView:H,R=W.history;function F(){var Re=W.location,re=Re.pathname,Ee=Re.search,Ve=Re.hash,Xe=R.state||{};return[Xe.idx,o({pathname:re,search:Ee,hash:Ve,state:Xe.usr||null,key:Xe.key||"default"})]}var V=null;function q(){if(V)Be.call(V),V=null;else{var Re=u.Pop,re=F(),Ee=re[0],Ve=re[1];if(Be.length){if(Ee!=null){var Xe=ie-Ee;Xe&&(V={action:Re,location:Ve,retry:function(){oe(Xe*-1)}},oe(Xe))}}else k(Re)}}W.addEventListener(p,q);var Q=u.Pop,X=F(),ie=X[0],Oe=X[1],Se=A(),Be=A();ie==null&&(ie=0,R.replaceState((0,i.Z)({},R.state,{idx:ie}),""));function ue(Re){return typeof Re=="string"?Re:$(Re)}function S(Re,re){return re===void 0&&(re=null),o((0,i.Z)({pathname:Oe.pathname,hash:"",search:""},typeof Re=="string"?B(Re):Re,{state:re,key:C()}))}function g(Re,re){return[{usr:Re.state,key:Re.key,idx:re},ue(Re)]}function I(Re,re,Ee){return!Be.length||(Be.call({action:Re,location:re,retry:Ee}),!1)}function k(Re){Q=Re;var re=F();ie=re[0],Oe=re[1],Se.call({action:Q,location:Oe})}function P(Re,re){var Ee=u.Push,Ve=S(Re,re);function Xe(){P(Re,re)}if(I(Ee,Ve,Xe)){var Ze=g(Ve,ie+1),ht=Ze[0],Ct=Ze[1];try{R.pushState(ht,"",Ct)}catch(Bt){W.location.assign(Ct)}k(Ee)}}function D(Re,re){var Ee=u.Replace,Ve=S(Re,re);function Xe(){D(Re,re)}if(I(Ee,Ve,Xe)){var Ze=g(Ve,ie),ht=Ze[0],Ct=Ze[1];R.replaceState(ht,"",Ct),k(Ee)}}function oe(Re){R.go(Re)}var he={get action(){return Q},get location(){return Oe},createHref:ue,push:P,replace:D,go:oe,back:function(){oe(-1)},forward:function(){oe(1)},listen:function(re){return Se.push(re)},block:function(re){var Ee=Be.push(re);return Be.length===1&&W.addEventListener(d,T),function(){Ee(),Be.length||W.removeEventListener(d,T)}}};return he}function x(L){L===void 0&&(L={});var z=L,H=z.window,W=H===void 0?document.defaultView:H,R=W.history;function F(){var re=B(W.location.hash.substr(1)),Ee=re.pathname,Ve=Ee===void 0?"/":Ee,Xe=re.search,Ze=Xe===void 0?"":Xe,ht=re.hash,Ct=ht===void 0?"":ht,Bt=R.state||{};return[Bt.idx,o({pathname:Ve,search:Ze,hash:Ct,state:Bt.usr||null,key:Bt.key||"default"})]}var V=null;function q(){if(V)Be.call(V),V=null;else{var re=u.Pop,Ee=F(),Ve=Ee[0],Xe=Ee[1];if(Be.length){if(Ve!=null){var Ze=ie-Ve;Ze&&(V={action:re,location:Xe,retry:function(){he(Ze*-1)}},he(Ze))}}else P(re)}}W.addEventListener(p,q),W.addEventListener(v,function(){var re=F(),Ee=re[1];$(Ee)!==$(Oe)&&q()});var Q=u.Pop,X=F(),ie=X[0],Oe=X[1],Se=A(),Be=A();ie==null&&(ie=0,R.replaceState((0,i.Z)({},R.state,{idx:ie}),""));function ue(){var re=document.querySelector("base"),Ee="";if(re&&re.getAttribute("href")){var Ve=W.location.href,Xe=Ve.indexOf("#");Ee=Xe===-1?Ve:Ve.slice(0,Xe)}return Ee}function S(re){return ue()+"#"+(typeof re=="string"?re:$(re))}function g(re,Ee){return Ee===void 0&&(Ee=null),o((0,i.Z)({pathname:Oe.pathname,hash:"",search:""},typeof re=="string"?B(re):re,{state:Ee,key:C()}))}function I(re,Ee){return[{usr:re.state,key:re.key,idx:Ee},S(re)]}function k(re,Ee,Ve){return!Be.length||(Be.call({action:re,location:Ee,retry:Ve}),!1)}function P(re){Q=re;var Ee=F();ie=Ee[0],Oe=Ee[1],Se.call({action:Q,location:Oe})}function D(re,Ee){var Ve=u.Push,Xe=g(re,Ee);function Ze(){D(re,Ee)}if(k(Ve,Xe,Ze)){var ht=I(Xe,ie+1),Ct=ht[0],Bt=ht[1];try{R.pushState(Ct,"",Bt)}catch(pr){W.location.assign(Bt)}P(Ve)}}function oe(re,Ee){var Ve=u.Replace,Xe=g(re,Ee);function Ze(){oe(re,Ee)}if(k(Ve,Xe,Ze)){var ht=I(Xe,ie),Ct=ht[0],Bt=ht[1];R.replaceState(Ct,"",Bt),P(Ve)}}function he(re){R.go(re)}var Re={get action(){return Q},get location(){return Oe},createHref:S,push:D,replace:oe,go:he,back:function(){he(-1)},forward:function(){he(1)},listen:function(Ee){return Se.push(Ee)},block:function(Ee){var Ve=Be.push(Ee);return Be.length===1&&W.addEventListener(d,T),function(){Ve(),Be.length||W.removeEventListener(d,T)}}};return Re}function y(L){L===void 0&&(L={});var z=L,H=z.initialEntries,W=H===void 0?["/"]:H,R=z.initialIndex,F=W.map(function(P){var D=o((0,i.Z)({pathname:"/",search:"",hash:"",state:null,key:C()},typeof P=="string"?B(P):P));return D}),V=b(R==null?F.length-1:R,0,F.length-1),q=u.Pop,Q=F[V],X=A(),ie=A();function Oe(P){return typeof P=="string"?P:$(P)}function Se(P,D){return D===void 0&&(D=null),o((0,i.Z)({pathname:Q.pathname,search:"",hash:""},typeof P=="string"?B(P):P,{state:D,key:C()}))}function Be(P,D,oe){return!ie.length||(ie.call({action:P,location:D,retry:oe}),!1)}function ue(P,D){q=P,Q=D,X.call({action:q,location:Q})}function S(P,D){var oe=u.Push,he=Se(P,D);function Re(){S(P,D)}Be(oe,he,Re)&&(V+=1,F.splice(V,F.length,he),ue(oe,he))}function g(P,D){var oe=u.Replace,he=Se(P,D);function Re(){g(P,D)}Be(oe,he,Re)&&(F[V]=he,ue(oe,he))}function I(P){var D=b(V+P,0,F.length-1),oe=u.Pop,he=F[D];function Re(){I(P)}Be(oe,he,Re)&&(V=D,ue(oe,he))}var k={get index(){return V},get action(){return q},get location(){return Q},createHref:Oe,push:S,replace:g,go:I,back:function(){I(-1)},forward:function(){I(1)},listen:function(D){return X.push(D)},block:function(D){return ie.push(D)}};return k}function b(L,z,H){return Math.min(Math.max(L,z),H)}function T(L){L.preventDefault(),L.returnValue=""}function A(){var L=[];return{get length(){return L.length},push:function(H){return L.push(H),function(){L=L.filter(function(W){return W!==H})}},call:function(H){L.forEach(function(W){return W&&W(H)})}}}function C(){return Math.random().toString(36).substr(2,8)}function $(L){var z=L.pathname,H=z===void 0?"/":z,W=L.search,R=W===void 0?"":W,F=L.hash,V=F===void 0?"":F;return R&&R!=="?"&&(H+=R.charAt(0)==="?"?R:"?"+R),V&&V!=="#"&&(H+=V.charAt(0)==="#"?V:"#"+V),H}function B(L){var z={};if(L){var H=L.indexOf("#");H>=0&&(z.hash=L.substr(H),L=L.substr(0,H));var W=L.indexOf("?");W>=0&&(z.search=L.substr(W),L=L.substr(0,W)),L&&(z.pathname=L)}return z}},8679:function(s,f,e){"use strict";var i=e(21296),u={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},d={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},v={};v[i.ForwardRef]=n,v[i.Memo]=d;function p($){return i.isMemo($)?d:v[$.$$typeof]||u}var h=Object.defineProperty,x=Object.getOwnPropertyNames,y=Object.getOwnPropertySymbols,b=Object.getOwnPropertyDescriptor,T=Object.getPrototypeOf,A=Object.prototype;function C($,B,L){if(typeof B!="string"){if(A){var z=T(B);z&&z!==A&&C($,z,L)}var H=x(B);y&&(H=H.concat(y(B)));for(var W=p($),R=p(B),F=0;F<H.length;++F){var V=H[F];if(!o[V]&&!(L&&L[V])&&!(R&&R[V])&&!(W&&W[V])){var q=b(B,V);try{h($,V,q)}catch(Q){}}}}return $}s.exports=C},96103:function(s,f){"use strict";var e=typeof Symbol=="function"&&Symbol.for,i=e?Symbol.for("react.element"):60103,u=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,n=e?Symbol.for("react.strict_mode"):60108,d=e?Symbol.for("react.profiler"):60114,v=e?Symbol.for("react.provider"):60109,p=e?Symbol.for("react.context"):60110,h=e?Symbol.for("react.async_mode"):60111,x=e?Symbol.for("react.concurrent_mode"):60111,y=e?Symbol.for("react.forward_ref"):60112,b=e?Symbol.for("react.suspense"):60113,T=e?Symbol.for("react.suspense_list"):60120,A=e?Symbol.for("react.memo"):60115,C=e?Symbol.for("react.lazy"):60116,$=e?Symbol.for("react.block"):60121,B=e?Symbol.for("react.fundamental"):60117,L=e?Symbol.for("react.responder"):60118,z=e?Symbol.for("react.scope"):60119;function H(R){if(typeof R=="object"&&R!==null){var F=R.$$typeof;switch(F){case i:switch(R=R.type,R){case h:case x:case o:case d:case n:case b:return R;default:switch(R=R&&R.$$typeof,R){case p:case y:case C:case A:case v:return R;default:return F}}case u:return F}}}function W(R){return H(R)===x}f.AsyncMode=h,f.ConcurrentMode=x,f.ContextConsumer=p,f.ContextProvider=v,f.Element=i,f.ForwardRef=y,f.Fragment=o,f.Lazy=C,f.Memo=A,f.Portal=u,f.Profiler=d,f.StrictMode=n,f.Suspense=b,f.isAsyncMode=function(R){return W(R)||H(R)===h},f.isConcurrentMode=W,f.isContextConsumer=function(R){return H(R)===p},f.isContextProvider=function(R){return H(R)===v},f.isElement=function(R){return typeof R=="object"&&R!==null&&R.$$typeof===i},f.isForwardRef=function(R){return H(R)===y},f.isFragment=function(R){return H(R)===o},f.isLazy=function(R){return H(R)===C},f.isMemo=function(R){return H(R)===A},f.isPortal=function(R){return H(R)===u},f.isProfiler=function(R){return H(R)===d},f.isStrictMode=function(R){return H(R)===n},f.isSuspense=function(R){return H(R)===b},f.isValidElementType=function(R){return typeof R=="string"||typeof R=="function"||R===o||R===x||R===d||R===n||R===b||R===T||typeof R=="object"&&R!==null&&(R.$$typeof===C||R.$$typeof===A||R.$$typeof===v||R.$$typeof===p||R.$$typeof===y||R.$$typeof===B||R.$$typeof===L||R.$$typeof===z||R.$$typeof===$)},f.typeOf=H},21296:function(s,f,e){"use strict";s.exports=e(96103)},16284:function(s,f,e){"use strict";e.d(f,{C:function(){return x}});var i=e(15145),u=e(19137),o=e(95957),n=e(61092);function d(y,b){return b?(0,i.pi)((0,i.pi)((0,i.pi)({},y||{}),b||{}),Object.keys(y).reduce(function(T,A){return T[A]=(0,i.pi)((0,i.pi)({},y[A]),b[A]||{}),T},{})):y}function v(y,b){return b?Object.keys(y).reduce(function(T,A){return T[A]=d(y[A],b[A]),T},(0,i.pi)({},y)):y}function p(y){return{create:function(){return{get:function(b){return y[b]},set:function(b,T){y[b]=T}}}}}function h(y){return y===void 0&&(y={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:(0,o.H)(function(){for(var b,T=[],A=0;A<arguments.length;A++)T[A]=arguments[A];return new((b=Intl.NumberFormat).bind.apply(b,(0,i.ev)([void 0],T,!1)))},{cache:p(y.number),strategy:o.A.variadic}),getDateTimeFormat:(0,o.H)(function(){for(var b,T=[],A=0;A<arguments.length;A++)T[A]=arguments[A];return new((b=Intl.DateTimeFormat).bind.apply(b,(0,i.ev)([void 0],T,!1)))},{cache:p(y.dateTime),strategy:o.A.variadic}),getPluralRules:(0,o.H)(function(){for(var b,T=[],A=0;A<arguments.length;A++)T[A]=arguments[A];return new((b=Intl.PluralRules).bind.apply(b,(0,i.ev)([void 0],T,!1)))},{cache:p(y.pluralRules),strategy:o.A.variadic})}}var x=function(){function y(b,T,A,C){T===void 0&&(T=y.defaultLocale);var $=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(H){var W=$.formatToParts(H);if(W.length===1)return W[0].value;var R=W.reduce(function(F,V){return!F.length||V.type!==n.du.literal||typeof F[F.length-1]!="string"?F.push(V.value):F[F.length-1]+=V.value,F},[]);return R.length<=1?R[0]||"":R},this.formatToParts=function(H){return(0,n.FK)($.ast,$.locales,$.formatters,$.formats,H,void 0,$.message)},this.resolvedOptions=function(){var H;return{locale:((H=$.resolvedLocale)===null||H===void 0?void 0:H.toString())||Intl.NumberFormat.supportedLocalesOf($.locales)[0]}},this.getAst=function(){return $.ast},this.locales=T,this.resolvedLocale=y.resolveLocale(T),typeof b=="string"){if(this.message=b,!y.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var B=C||{},L=B.formatters,z=(0,i._T)(B,["formatters"]);this.ast=y.__parse(b,(0,i.pi)((0,i.pi)({},z),{locale:this.resolvedLocale}))}else this.ast=b;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=v(y.formats,A),this.formatters=C&&C.formatters||h(this.formatterCache)}return Object.defineProperty(y,"defaultLocale",{get:function(){return y.memoizedDefaultLocale||(y.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),y.memoizedDefaultLocale},enumerable:!1,configurable:!0}),y.memoizedDefaultLocale=null,y.resolveLocale=function(b){if(typeof Intl.Locale!="undefined"){var T=Intl.NumberFormat.supportedLocalesOf(b);return T.length>0?new Intl.Locale(T[0]):new Intl.Locale(typeof b=="string"?b:b[0])}},y.__parse=u.Qc,y.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},y}()},11050:function(s,f,e){"use strict";e.d(f,{C8:function(){return n},HR:function(){return v},YR:function(){return d},jK:function(){return u},u_:function(){return o}});var i=e(15145),u;(function(p){p.MISSING_VALUE="MISSING_VALUE",p.INVALID_VALUE="INVALID_VALUE",p.MISSING_INTL_API="MISSING_INTL_API"})(u||(u={}));var o=function(p){(0,i.ZT)(h,p);function h(x,y,b){var T=p.call(this,x)||this;return T.code=y,T.originalMessage=b,T}return h.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},h}(Error),n=function(p){(0,i.ZT)(h,p);function h(x,y,b,T){return p.call(this,'Invalid values for "'.concat(x,'": "').concat(y,'". Options are "').concat(Object.keys(b).join('", "'),'"'),u.INVALID_VALUE,T)||this}return h}(o),d=function(p){(0,i.ZT)(h,p);function h(x,y,b){return p.call(this,'Value for "'.concat(x,'" must be of type ').concat(y),u.INVALID_VALUE,b)||this}return h}(o),v=function(p){(0,i.ZT)(h,p);function h(x,y){return p.call(this,'The intl string context variable "'.concat(x,'" was not provided to the string "').concat(y,'"'),u.MISSING_VALUE,y)||this}return h}(o)},61092:function(s,f,e){"use strict";e.d(f,{FK:function(){return v},Gt:function(){return d},du:function(){return o}});var i=e(19137),u=e(11050),o;(function(p){p[p.literal=0]="literal",p[p.object=1]="object"})(o||(o={}));function n(p){return p.length<2?p:p.reduce(function(h,x){var y=h[h.length-1];return!y||y.type!==o.literal||x.type!==o.literal?h.push(x):y.value+=x.value,h},[])}function d(p){return typeof p=="function"}function v(p,h,x,y,b,T,A){if(p.length===1&&(0,i.O4)(p[0]))return[{type:o.literal,value:p[0].value}];for(var C=[],$=0,B=p;$<B.length;$++){var L=B[$];if((0,i.O4)(L)){C.push({type:o.literal,value:L.value});continue}if((0,i.yx)(L)){typeof T=="number"&&C.push({type:o.literal,value:x.getNumberFormat(h).format(T)});continue}var z=L.value;if(!(b&&z in b))throw new u.HR(z,A);var H=b[z];if((0,i.VG)(L)){(!H||typeof H=="string"||typeof H=="number")&&(H=typeof H=="string"||typeof H=="number"?String(H):""),C.push({type:typeof H=="string"?o.literal:o.object,value:H});continue}if((0,i.rp)(L)){var W=typeof L.style=="string"?y.date[L.style]:(0,i.Ii)(L.style)?L.style.parsedOptions:void 0;C.push({type:o.literal,value:x.getDateTimeFormat(h,W).format(H)});continue}if((0,i.pe)(L)){var W=typeof L.style=="string"?y.time[L.style]:(0,i.Ii)(L.style)?L.style.parsedOptions:y.time.medium;C.push({type:o.literal,value:x.getDateTimeFormat(h,W).format(H)});continue}if((0,i.uf)(L)){var W=typeof L.style=="string"?y.number[L.style]:(0,i.Wh)(L.style)?L.style.parsedOptions:void 0;W&&W.scale&&(H=H*(W.scale||1)),C.push({type:o.literal,value:x.getNumberFormat(h,W).format(H)});continue}if((0,i.HI)(L)){var R=L.children,F=L.value,V=b[F];if(!d(V))throw new u.YR(F,"function",A);var q=v(R,h,x,y,b,T),Q=V(q.map(function(Oe){return Oe.value}));Array.isArray(Q)||(Q=[Q]),C.push.apply(C,Q.map(function(Oe){return{type:typeof Oe=="string"?o.literal:o.object,value:Oe}}))}if((0,i.Wi)(L)){var X=L.options[H]||L.options.other;if(!X)throw new u.C8(L.value,H,Object.keys(L.options),A);C.push.apply(C,v(X.value,h,x,y,b));continue}if((0,i.Jo)(L)){var X=L.options["=".concat(H)];if(!X){if(!Intl.PluralRules)throw new u.u_(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,u.jK.MISSING_INTL_API,A);var ie=x.getPluralRules(h,{type:L.pluralType}).select(H-(L.offset||0));X=L.options[ie]||L.options.other}if(!X)throw new u.C8(L.value,H,Object.keys(L.options),A);C.push.apply(C,v(X.value,h,x,y,b,H-(L.offset||0)));continue}}return n(C)}},15145:function(s,f,e){"use strict";e.d(f,{ZT:function(){return u},_T:function(){return n},ev:function(){return W},pi:function(){return o}});var i=function(S,g){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(I,k){I.__proto__=k}||function(I,k){for(var P in k)Object.prototype.hasOwnProperty.call(k,P)&&(I[P]=k[P])},i(S,g)};function u(S,g){if(typeof g!="function"&&g!==null)throw new TypeError("Class extends value "+String(g)+" is not a constructor or null");i(S,g);function I(){this.constructor=S}S.prototype=g===null?Object.create(g):(I.prototype=g.prototype,new I)}var o=function(){return o=Object.assign||function(g){for(var I,k=1,P=arguments.length;k<P;k++){I=arguments[k];for(var D in I)Object.prototype.hasOwnProperty.call(I,D)&&(g[D]=I[D])}return g},o.apply(this,arguments)};function n(S,g){var I={};for(var k in S)Object.prototype.hasOwnProperty.call(S,k)&&g.indexOf(k)<0&&(I[k]=S[k]);if(S!=null&&typeof Object.getOwnPropertySymbols=="function")for(var P=0,k=Object.getOwnPropertySymbols(S);P<k.length;P++)g.indexOf(k[P])<0&&Object.prototype.propertyIsEnumerable.call(S,k[P])&&(I[k[P]]=S[k[P]]);return I}function d(S,g,I,k){var P=arguments.length,D=P<3?g:k===null?k=Object.getOwnPropertyDescriptor(g,I):k,oe;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")D=Reflect.decorate(S,g,I,k);else for(var he=S.length-1;he>=0;he--)(oe=S[he])&&(D=(P<3?oe(D):P>3?oe(g,I,D):oe(g,I))||D);return P>3&&D&&Object.defineProperty(g,I,D),D}function v(S,g){return function(I,k){g(I,k,S)}}function p(S,g,I,k,P,D){function oe(pr){if(pr!==void 0&&typeof pr!="function")throw new TypeError("Function expected");return pr}for(var he=k.kind,Re=he==="getter"?"get":he==="setter"?"set":"value",re=!g&&S?k.static?S:S.prototype:null,Ee=g||(re?Object.getOwnPropertyDescriptor(re,k.name):{}),Ve,Xe=!1,Ze=I.length-1;Ze>=0;Ze--){var ht={};for(var Ct in k)ht[Ct]=Ct==="access"?{}:k[Ct];for(var Ct in k.access)ht.access[Ct]=k.access[Ct];ht.addInitializer=function(pr){if(Xe)throw new TypeError("Cannot add initializers after decoration has completed");D.push(oe(pr||null))};var Bt=(0,I[Ze])(he==="accessor"?{get:Ee.get,set:Ee.set}:Ee[Re],ht);if(he==="accessor"){if(Bt===void 0)continue;if(Bt===null||typeof Bt!="object")throw new TypeError("Object expected");(Ve=oe(Bt.get))&&(Ee.get=Ve),(Ve=oe(Bt.set))&&(Ee.set=Ve),(Ve=oe(Bt.init))&&P.push(Ve)}else(Ve=oe(Bt))&&(he==="field"?P.push(Ve):Ee[Re]=Ve)}re&&Object.defineProperty(re,k.name,Ee),Xe=!0}function h(S,g,I){for(var k=arguments.length>2,P=0;P<g.length;P++)I=k?g[P].call(S,I):g[P].call(S);return k?I:void 0}function x(S){return typeof S=="symbol"?S:"".concat(S)}function y(S,g,I){return typeof g=="symbol"&&(g=g.description?"[".concat(g.description,"]"):""),Object.defineProperty(S,"name",{configurable:!0,value:I?"".concat(I," ",g):g})}function b(S,g){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(S,g)}function T(S,g,I,k){function P(D){return D instanceof I?D:new I(function(oe){oe(D)})}return new(I||(I=Promise))(function(D,oe){function he(Ee){try{re(k.next(Ee))}catch(Ve){oe(Ve)}}function Re(Ee){try{re(k.throw(Ee))}catch(Ve){oe(Ve)}}function re(Ee){Ee.done?D(Ee.value):P(Ee.value).then(he,Re)}re((k=k.apply(S,g||[])).next())})}function A(S,g){var I={label:0,sent:function(){if(D[0]&1)throw D[1];return D[1]},trys:[],ops:[]},k,P,D,oe;return oe={next:he(0),throw:he(1),return:he(2)},typeof Symbol=="function"&&(oe[Symbol.iterator]=function(){return this}),oe;function he(re){return function(Ee){return Re([re,Ee])}}function Re(re){if(k)throw new TypeError("Generator is already executing.");for(;oe&&(oe=0,re[0]&&(I=0)),I;)try{if(k=1,P&&(D=re[0]&2?P.return:re[0]?P.throw||((D=P.return)&&D.call(P),0):P.next)&&!(D=D.call(P,re[1])).done)return D;switch(P=0,D&&(re=[re[0]&2,D.value]),re[0]){case 0:case 1:D=re;break;case 4:return I.label++,{value:re[1],done:!1};case 5:I.label++,P=re[1],re=[0];continue;case 7:re=I.ops.pop(),I.trys.pop();continue;default:if(D=I.trys,!(D=D.length>0&&D[D.length-1])&&(re[0]===6||re[0]===2)){I=0;continue}if(re[0]===3&&(!D||re[1]>D[0]&&re[1]<D[3])){I.label=re[1];break}if(re[0]===6&&I.label<D[1]){I.label=D[1],D=re;break}if(D&&I.label<D[2]){I.label=D[2],I.ops.push(re);break}D[2]&&I.ops.pop(),I.trys.pop();continue}re=g.call(S,I)}catch(Ee){re=[6,Ee],P=0}finally{k=D=0}if(re[0]&5)throw re[1];return{value:re[0]?re[1]:void 0,done:!0}}}var C=Object.create?function(S,g,I,k){k===void 0&&(k=I);var P=Object.getOwnPropertyDescriptor(g,I);(!P||("get"in P?!g.__esModule:P.writable||P.configurable))&&(P={enumerable:!0,get:function(){return g[I]}}),Object.defineProperty(S,k,P)}:function(S,g,I,k){k===void 0&&(k=I),S[k]=g[I]};function $(S,g){for(var I in S)I!=="default"&&!Object.prototype.hasOwnProperty.call(g,I)&&C(g,S,I)}function B(S){var g=typeof Symbol=="function"&&Symbol.iterator,I=g&&S[g],k=0;if(I)return I.call(S);if(S&&typeof S.length=="number")return{next:function(){return S&&k>=S.length&&(S=void 0),{value:S&&S[k++],done:!S}}};throw new TypeError(g?"Object is not iterable.":"Symbol.iterator is not defined.")}function L(S,g){var I=typeof Symbol=="function"&&S[Symbol.iterator];if(!I)return S;var k=I.call(S),P,D=[],oe;try{for(;(g===void 0||g-- >0)&&!(P=k.next()).done;)D.push(P.value)}catch(he){oe={error:he}}finally{try{P&&!P.done&&(I=k.return)&&I.call(k)}finally{if(oe)throw oe.error}}return D}function z(){for(var S=[],g=0;g<arguments.length;g++)S=S.concat(L(arguments[g]));return S}function H(){for(var S=0,g=0,I=arguments.length;g<I;g++)S+=arguments[g].length;for(var k=Array(S),P=0,g=0;g<I;g++)for(var D=arguments[g],oe=0,he=D.length;oe<he;oe++,P++)k[P]=D[oe];return k}function W(S,g,I){if(I||arguments.length===2)for(var k=0,P=g.length,D;k<P;k++)(D||!(k in g))&&(D||(D=Array.prototype.slice.call(g,0,k)),D[k]=g[k]);return S.concat(D||Array.prototype.slice.call(g))}function R(S){return this instanceof R?(this.v=S,this):new R(S)}function F(S,g,I){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var k=I.apply(S,g||[]),P,D=[];return P={},oe("next"),oe("throw"),oe("return"),P[Symbol.asyncIterator]=function(){return this},P;function oe(Xe){k[Xe]&&(P[Xe]=function(Ze){return new Promise(function(ht,Ct){D.push([Xe,Ze,ht,Ct])>1||he(Xe,Ze)})})}function he(Xe,Ze){try{Re(k[Xe](Ze))}catch(ht){Ve(D[0][3],ht)}}function Re(Xe){Xe.value instanceof R?Promise.resolve(Xe.value.v).then(re,Ee):Ve(D[0][2],Xe)}function re(Xe){he("next",Xe)}function Ee(Xe){he("throw",Xe)}function Ve(Xe,Ze){Xe(Ze),D.shift(),D.length&&he(D[0][0],D[0][1])}}function V(S){var g,I;return g={},k("next"),k("throw",function(P){throw P}),k("return"),g[Symbol.iterator]=function(){return this},g;function k(P,D){g[P]=S[P]?function(oe){return(I=!I)?{value:R(S[P](oe)),done:!1}:D?D(oe):oe}:D}}function q(S){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var g=S[Symbol.asyncIterator],I;return g?g.call(S):(S=typeof B=="function"?B(S):S[Symbol.iterator](),I={},k("next"),k("throw"),k("return"),I[Symbol.asyncIterator]=function(){return this},I);function k(D){I[D]=S[D]&&function(oe){return new Promise(function(he,Re){oe=S[D](oe),P(he,Re,oe.done,oe.value)})}}function P(D,oe,he,Re){Promise.resolve(Re).then(function(re){D({value:re,done:he})},oe)}}function Q(S,g){return Object.defineProperty?Object.defineProperty(S,"raw",{value:g}):S.raw=g,S}var X=Object.create?function(S,g){Object.defineProperty(S,"default",{enumerable:!0,value:g})}:function(S,g){S.default=g};function ie(S){if(S&&S.__esModule)return S;var g={};if(S!=null)for(var I in S)I!=="default"&&Object.prototype.hasOwnProperty.call(S,I)&&C(g,S,I);return X(g,S),g}function Oe(S){return S&&S.__esModule?S:{default:S}}function Se(S,g,I,k){if(I==="a"&&!k)throw new TypeError("Private accessor was defined without a getter");if(typeof g=="function"?S!==g||!k:!g.has(S))throw new TypeError("Cannot read private member from an object whose class did not declare it");return I==="m"?k:I==="a"?k.call(S):k?k.value:g.get(S)}function Be(S,g,I,k,P){if(k==="m")throw new TypeError("Private method is not writable");if(k==="a"&&!P)throw new TypeError("Private accessor was defined without a setter");if(typeof g=="function"?S!==g||!P:!g.has(S))throw new TypeError("Cannot write private member to an object whose class did not declare it");return k==="a"?P.call(S,I):P?P.value=I:g.set(S,I),I}function ue(S,g){if(g===null||typeof g!="object"&&typeof g!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof S=="function"?g===S:S.has(g)}},41143:function(s){"use strict";var f=function(e,i,u,o,n,d,v,p){if(!e){var h;if(i===void 0)h=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var x=[u,o,n,d,v,p],y=0;h=new Error(i.replace(/%s/g,function(){return x[y++]})),h.name="Invariant Violation"}throw h.framesToPop=1,h}};s.exports=f},26961:function(s,f,e){var i,u=function(){var o=String.fromCharCode,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",v={};function p(x,y){if(!v[x]){v[x]={};for(var b=0;b<x.length;b++)v[x][x.charAt(b)]=b}return v[x][y]}var h={compressToBase64:function(x){if(x==null)return"";var y=h._compress(x,6,function(b){return n.charAt(b)});switch(y.length%4){default:case 0:return y;case 1:return y+"===";case 2:return y+"==";case 3:return y+"="}},decompressFromBase64:function(x){return x==null?"":x==""?null:h._decompress(x.length,32,function(y){return p(n,x.charAt(y))})},compressToUTF16:function(x){return x==null?"":h._compress(x,15,function(y){return o(y+32)})+" "},decompressFromUTF16:function(x){return x==null?"":x==""?null:h._decompress(x.length,16384,function(y){return x.charCodeAt(y)-32})},compressToUint8Array:function(x){for(var y=h.compress(x),b=new Uint8Array(y.length*2),T=0,A=y.length;T<A;T++){var C=y.charCodeAt(T);b[T*2]=C>>>8,b[T*2+1]=C%256}return b},decompressFromUint8Array:function(x){if(x==null)return h.decompress(x);for(var y=new Array(x.length/2),b=0,T=y.length;b<T;b++)y[b]=x[b*2]*256+x[b*2+1];var A=[];return y.forEach(function(C){A.push(o(C))}),h.decompress(A.join(""))},compressToEncodedURIComponent:function(x){return x==null?"":h._compress(x,6,function(y){return d.charAt(y)})},decompressFromEncodedURIComponent:function(x){return x==null?"":x==""?null:(x=x.replace(/ /g,"+"),h._decompress(x.length,32,function(y){return p(d,x.charAt(y))}))},compress:function(x){return h._compress(x,16,function(y){return o(y)})},_compress:function(x,y,b){if(x==null)return"";var T,A,C={},$={},B="",L="",z="",H=2,W=3,R=2,F=[],V=0,q=0,Q;for(Q=0;Q<x.length;Q+=1)if(B=x.charAt(Q),Object.prototype.hasOwnProperty.call(C,B)||(C[B]=W++,$[B]=!0),L=z+B,Object.prototype.hasOwnProperty.call(C,L))z=L;else{if(Object.prototype.hasOwnProperty.call($,z)){if(z.charCodeAt(0)<256){for(T=0;T<R;T++)V=V<<1,q==y-1?(q=0,F.push(b(V)),V=0):q++;for(A=z.charCodeAt(0),T=0;T<8;T++)V=V<<1|A&1,q==y-1?(q=0,F.push(b(V)),V=0):q++,A=A>>1}else{for(A=1,T=0;T<R;T++)V=V<<1|A,q==y-1?(q=0,F.push(b(V)),V=0):q++,A=0;for(A=z.charCodeAt(0),T=0;T<16;T++)V=V<<1|A&1,q==y-1?(q=0,F.push(b(V)),V=0):q++,A=A>>1}H--,H==0&&(H=Math.pow(2,R),R++),delete $[z]}else for(A=C[z],T=0;T<R;T++)V=V<<1|A&1,q==y-1?(q=0,F.push(b(V)),V=0):q++,A=A>>1;H--,H==0&&(H=Math.pow(2,R),R++),C[L]=W++,z=String(B)}if(z!==""){if(Object.prototype.hasOwnProperty.call($,z)){if(z.charCodeAt(0)<256){for(T=0;T<R;T++)V=V<<1,q==y-1?(q=0,F.push(b(V)),V=0):q++;for(A=z.charCodeAt(0),T=0;T<8;T++)V=V<<1|A&1,q==y-1?(q=0,F.push(b(V)),V=0):q++,A=A>>1}else{for(A=1,T=0;T<R;T++)V=V<<1|A,q==y-1?(q=0,F.push(b(V)),V=0):q++,A=0;for(A=z.charCodeAt(0),T=0;T<16;T++)V=V<<1|A&1,q==y-1?(q=0,F.push(b(V)),V=0):q++,A=A>>1}H--,H==0&&(H=Math.pow(2,R),R++),delete $[z]}else for(A=C[z],T=0;T<R;T++)V=V<<1|A&1,q==y-1?(q=0,F.push(b(V)),V=0):q++,A=A>>1;H--,H==0&&(H=Math.pow(2,R),R++)}for(A=2,T=0;T<R;T++)V=V<<1|A&1,q==y-1?(q=0,F.push(b(V)),V=0):q++,A=A>>1;for(;;)if(V=V<<1,q==y-1){F.push(b(V));break}else q++;return F.join("")},decompress:function(x){return x==null?"":x==""?null:h._decompress(x.length,32768,function(y){return x.charCodeAt(y)})},_decompress:function(x,y,b){var T=[],A,C=4,$=4,B=3,L="",z=[],H,W,R,F,V,q,Q,X={val:b(0),position:y,index:1};for(H=0;H<3;H+=1)T[H]=H;for(R=0,V=Math.pow(2,2),q=1;q!=V;)F=X.val&X.position,X.position>>=1,X.position==0&&(X.position=y,X.val=b(X.index++)),R|=(F>0?1:0)*q,q<<=1;switch(A=R){case 0:for(R=0,V=Math.pow(2,8),q=1;q!=V;)F=X.val&X.position,X.position>>=1,X.position==0&&(X.position=y,X.val=b(X.index++)),R|=(F>0?1:0)*q,q<<=1;Q=o(R);break;case 1:for(R=0,V=Math.pow(2,16),q=1;q!=V;)F=X.val&X.position,X.position>>=1,X.position==0&&(X.position=y,X.val=b(X.index++)),R|=(F>0?1:0)*q,q<<=1;Q=o(R);break;case 2:return""}for(T[3]=Q,W=Q,z.push(Q);;){if(X.index>x)return"";for(R=0,V=Math.pow(2,B),q=1;q!=V;)F=X.val&X.position,X.position>>=1,X.position==0&&(X.position=y,X.val=b(X.index++)),R|=(F>0?1:0)*q,q<<=1;switch(Q=R){case 0:for(R=0,V=Math.pow(2,8),q=1;q!=V;)F=X.val&X.position,X.position>>=1,X.position==0&&(X.position=y,X.val=b(X.index++)),R|=(F>0?1:0)*q,q<<=1;T[$++]=o(R),Q=$-1,C--;break;case 1:for(R=0,V=Math.pow(2,16),q=1;q!=V;)F=X.val&X.position,X.position>>=1,X.position==0&&(X.position=y,X.val=b(X.index++)),R|=(F>0?1:0)*q,q<<=1;T[$++]=o(R),Q=$-1,C--;break;case 2:return z.join("")}if(C==0&&(C=Math.pow(2,B),B++),T[Q])L=T[Q];else if(Q===$)L=W+W.charAt(0);else return null;z.push(L),T[$++]=W+L.charAt(0),C--,W=L,C==0&&(C=Math.pow(2,B),B++)}}};return h}();i=function(){return u}.call(f,e,f,s),i!==void 0&&(s.exports=i)},34155:function(s){var f=s.exports={},e,i;function u(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?e=setTimeout:e=u}catch(C){e=u}try{typeof clearTimeout=="function"?i=clearTimeout:i=o}catch(C){i=o}})();function n(C){if(e===setTimeout)return setTimeout(C,0);if((e===u||!e)&&setTimeout)return e=setTimeout,setTimeout(C,0);try{return e(C,0)}catch($){try{return e.call(null,C,0)}catch(B){return e.call(this,C,0)}}}function d(C){if(i===clearTimeout)return clearTimeout(C);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(C);try{return i(C)}catch($){try{return i.call(null,C)}catch(B){return i.call(this,C)}}}var v=[],p=!1,h,x=-1;function y(){!p||!h||(p=!1,h.length?v=h.concat(v):x=-1,v.length&&b())}function b(){if(!p){var C=n(y);p=!0;for(var $=v.length;$;){for(h=v,v=[];++x<$;)h&&h[x].run();x=-1,$=v.length}h=null,p=!1,d(C)}}f.nextTick=function(C){var $=new Array(arguments.length-1);if(arguments.length>1)for(var B=1;B<arguments.length;B++)$[B-1]=arguments[B];v.push(new T(C,$)),v.length===1&&!p&&n(b)};function T(C,$){this.fun=C,this.array=$}T.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={};function A(){}f.on=A,f.addListener=A,f.once=A,f.off=A,f.removeListener=A,f.removeAllListeners=A,f.emit=A,f.prependListener=A,f.prependOnceListener=A,f.listeners=function(C){return[]},f.binding=function(C){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(C){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},92703:function(s,f,e){"use strict";var i=e(50414);function u(){}function o(){}o.resetWarningCache=u,s.exports=function(){function n(p,h,x,y,b,T){if(T!==i){var A=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw A.name="Invariant Violation",A}}n.isRequired=n;function d(){return n}var v={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:d,element:n,elementType:n,instanceOf:d,node:n,objectOf:d,oneOf:d,oneOfType:d,shape:d,exact:d,checkPropTypes:o,resetWarningCache:u};return v.PropTypes=v,v}},45697:function(s,f,e){if(!1)var i,u;else s.exports=e(92703)()},50414:function(s){"use strict";var f="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";s.exports=f},9107:function(s,f){"use strict";f.Z=`import { Alert } from 'react-papercss-design';

export default () => {
  return (
    <>
      <Alert type="primary">Alert-primary</Alert>
      <Alert type="secondary">Alert-secondary</Alert>
      <Alert type="success">Alert-success</Alert>
      <Alert type="warning">Alert-warning</Alert>
      <Alert type="danger">Alert-danger</Alert>
    </>
  );
};
`},52525:function(s,f){"use strict";f.Z=`import { Alert } from 'react-papercss-design';

export default () => {
  return (
    <>
      <Alert type="primary" dismissible closeLabel="Close Me">
        Alert-primary
      </Alert>
    </>
  );
};
`},6621:function(s,f){"use strict";f.Z=`import { Alert } from 'react-papercss-design';

export default () => {
  return (
    <>
      <Alert type="primary" dismissible>
        Alert-primary
      </Alert>
      <Alert type="secondary" dismissible>
        Alert-secondary
      </Alert>
      <Alert type="success" dismissible>
        Alert-success
      </Alert>
      <Alert type="warning" dismissible>
        Alert-warning
      </Alert>
      <Alert type="danger" dismissible>
        Alert-danger
      </Alert>
    </>
  );
};
`},18433:function(s,f){"use strict";f.Z=`import { Article, Button, Space } from 'react-papercss-design';

export default () => {
  return (
    <Article>
      <Article.Title>Article Title</Article.Title>
      <Article.Meta>Written by Super User on 24 November 2017. Posted in Blog</Article.Meta>
      <Article.TextLead>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur repellendus excepturi,
        consequatur illo rerum, non sint asperiores dolore sapiente, vitae blanditiis. Officiis at
        quaerat modi earum, fugiat magni impedit, aperiam.
      </Article.TextLead>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti iure totam nam debitis
        aliquid impedit, et quas omnis aspernatur optio molestias ex laborum quia. Ducimus culpa
        tempore, veritatis officia delectus dolore dignissimos reprehenderit vero, sunt odit placeat
        est non molestiae ipsa nam velit in iusto hic quasi similique facere. Maxime?
      </p>
      <Space>
        <Button>Read More</Button>
        <Button>5 Comments</Button>
      </Space>
    </Article>
  );
};
`},49214:function(s,f){"use strict";f.Z=`import { useRef } from 'react';
import { BackTop } from 'react-papercss-design';

export default () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div
        style={{
          width: '100%',
          height: '280px',
          overflowY: 'scroll',
          overflowX: 'hidden',
          border: '1px solid #dcdcdcff',
        }}
        ref={containerRef}
      >
        {Array.from(Array(50), () => 'scroll bottom').map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <BackTop target={containerRef} />
    </div>
  );
};
`},21193:function(s,f){"use strict";f.Z=`import { Breadcrumb } from 'react-papercss-design';

export default () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Page1</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Page2</Breadcrumb.Item>
      <Breadcrumb.Item active={true}>Page3</Breadcrumb.Item>
    </Breadcrumb>
  );
};
`},23561:function(s,f){"use strict";f.Z=`import { Breadcrumb } from 'react-papercss-design';

export default () => {
  return (
    <Breadcrumb
      items={[
        {
          title: 'Page1',
          href: '#',
        },
        {
          title: 'Page2',
          href: '#',
        },
        {
          title: 'Page3',
          active: true,
        },
      ]}
    />
  );
};
`},74379:function(s,f){"use strict";f.Z=`import { Button, Space } from 'react-papercss-design';

export default () => {
  return (
    <Space>
      <Button>Default Button</Button>
      <Button disabled>Disabled Button</Button>
      <Button tag="a" href="https://www.getpapercss.com/">
        Link Button
      </Button>
    </Space>
  );
};
`},98959:function(s,f){"use strict";f.Z=`import { Button, Space } from 'react-papercss-design';

export default () => {
  return (
    <Space>
      <Button size="large">Large</Button>
      <Button>Normal</Button>
      <Button size="small">Small</Button>
    </Space>
  );
};
`},95550:function(s,f){"use strict";f.Z=`import { ConfigProvider, hooks, Space, Switch } from 'react-papercss-design';

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
`},60425:function(s,f){"use strict";f.Z=`import { Progress, Space } from 'react-papercss-design';

export default () => {
  return (
    <Space direction="vertical">
      <Progress percent={10} />
      <Progress percent={25} type="secondary" />
      <Progress percent={40} type="success" />
      <Progress percent={55} type="warning" />
      <Progress percent={75} type="danger" />
      <Progress percent={100} type="muted" />
    </Space>
  );
};
`},19854:function(s,f){"use strict";f.Z=`import { Button, Space, Switch } from 'react-papercss-design';

export default () => {
  return (
    <Space>
      Space
      <Button>Button</Button>
      <Switch />
    </Space>
  );
};
`},29737:function(s,f){"use strict";f.Z=`import { Switch } from 'react-papercss-design';

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
`},33028:function(s,f){"use strict";f.Z=`import { useState } from 'react';
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
`},41929:function(s,f){"use strict";f.Z=`import { Switch } from 'react-papercss-design';

export default () => {
  return <Switch defaultChecked disabled />;
};
`},23268:function(s,f){"use strict";f.Z=`import { Switch } from 'react-papercss-design';

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
`},34844:function(s,f){"use strict";f.Z=`import { SwitchTile } from 'react-papercss-design';

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
`},40108:function(s,f){"use strict";f.Z=`import { useState } from 'react';
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
`},4263:function(s,f){"use strict";f.Z=`import { SwitchTile } from 'react-papercss-design';

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
`},98944:function(s,f){"use strict";f.Z=`import { SwitchTile } from 'react-papercss-design';

export default () => {
  return (
    <>
      <SwitchTile disabled checkedChildren="Back" unCheckedChildren="Front" />
    </>
  );
};
`},16290:function(s,f){"use strict";f.Z=`import { Tabs } from 'react-papercss-design';

export default () => {
  return (
    <Tabs
      defaultActiveKey="1"
      onChange={(activeKey) => {
        console.log('active key', activeKey);
      }}
    >
      <Tabs.TabPane tabKey="1" title="Tab 1">
        <p>
          Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage pig leberkas, t-bone
          sirloin shoulder bresaola. Frankfurter rump porchetta ham. Pork belly prosciutto brisket
          meatloaf short ribs.
        </p>
      </Tabs.TabPane>
      <Tabs.TabPane tabKey="2" title="Tab 2">
        <p>
          Brisket meatball turkey short loin boudin leberkas meatloaf chuck andouille pork loin
          pastrami spare ribs pancetta rump. Frankfurter corned beef beef tenderloin short loin
          meatloaf swine ground round venison.
        </p>
      </Tabs.TabPane>
      <Tabs.TabPane tabKey="3" title="Tab 3">
        <p>
          Hamburger venison brisket tri-tip andouille pork belly ball tip short ribs biltong
          meatball chuck. Pork chop ribeye tail short ribs, beef hamburger meatball kielbasa rump
          corned beef porchetta landjaeger flank. Doner rump frankfurter meatball meatloaf, cow
          kevin pork pork loin venison fatback spare ribs salami beef ribs. Bacon ipsum dolor sit
          amet landjaeger sausage brisket, jerky drumstick fatback boudin ball tip turducken. Pork
          belly meatball t-bone bresaola tail filet mignon kevin turkey ribeye shank flank doner cow
          kielbasa shankle. Pig swine chicken hamburger, tenderloin turkey rump ball tip sirloin
          frankfurter meatloaf boudin brisket ham hock.
        </p>
      </Tabs.TabPane>
    </Tabs>
  );
};
`},32381:function(s,f){"use strict";f.Z=`import { Tabs } from 'react-papercss-design';

export default () => {
  return (
    <Tabs
      defaultActiveKey="1"
      items={[
        { tabKey: '1', title: 'Tab 1', children: 'Content of Tab1' },
        { tabKey: '2', title: 'Tab 2', children: 'Content of Tab2' },
        { tabKey: '3', title: 'Tab 3', children: 'Content of Tab3' },
      ]}
    />
  );
};
`},99780:function(s,f){"use strict";f.Z=`import { useState } from 'react';
import { Tabs } from 'react-papercss-design';

export default () => {
  const [activeKey, setActiveKey] = useState<React.Key>('tab1');

  return (
    <Tabs
      activeKey={activeKey}
      onChange={(activeKey) => {
        setActiveKey(activeKey);
      }}
    >
      <Tabs.TabPane tabKey="tab1" title="Tab 1">
        <p>
          Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage pig leberkas, t-bone
          sirloin shoulder bresaola. Frankfurter rump porchetta ham. Pork belly prosciutto brisket
          meatloaf short ribs.
        </p>
      </Tabs.TabPane>
      <Tabs.TabPane tabKey="tab2" title="Tab 2">
        <p>
          Brisket meatball turkey short loin boudin leberkas meatloaf chuck andouille pork loin
          pastrami spare ribs pancetta rump. Frankfurter corned beef beef tenderloin short loin
          meatloaf swine ground round venison.
        </p>
      </Tabs.TabPane>
      <Tabs.TabPane tabKey="tab3" title="Tab 3">
        <p>
          Hamburger venison brisket tri-tip andouille pork belly ball tip short ribs biltong
          meatball chuck. Pork chop ribeye tail short ribs, beef hamburger meatball kielbasa rump
          corned beef porchetta landjaeger flank. Doner rump frankfurter meatball meatloaf, cow
          kevin pork pork loin venison fatback spare ribs salami beef ribs. Bacon ipsum dolor sit
          amet landjaeger sausage brisket, jerky drumstick fatback boudin ball tip turducken. Pork
          belly meatball t-bone bresaola tail filet mignon kevin turkey ribeye shank flank doner cow
          kielbasa shankle. Pig swine chicken hamburger, tenderloin turkey rump ball tip sirloin
          frankfurter meatloaf boudin brisket ham hock.
        </p>
      </Tabs.TabPane>
    </Tabs>
  );
};
`},51162:function(s,f){"use strict";var e;var i=typeof Symbol=="function"&&Symbol.for,u=i?Symbol.for("react.element"):60103,o=i?Symbol.for("react.portal"):60106,n=i?Symbol.for("react.fragment"):60107,d=i?Symbol.for("react.strict_mode"):60108,v=i?Symbol.for("react.profiler"):60114,p=i?Symbol.for("react.provider"):60109,h=i?Symbol.for("react.context"):60110,x=i?Symbol.for("react.async_mode"):60111,y=i?Symbol.for("react.concurrent_mode"):60111,b=i?Symbol.for("react.forward_ref"):60112,T=i?Symbol.for("react.suspense"):60113,A=i?Symbol.for("react.suspense_list"):60120,C=i?Symbol.for("react.memo"):60115,$=i?Symbol.for("react.lazy"):60116,B=i?Symbol.for("react.block"):60121,L=i?Symbol.for("react.fundamental"):60117,z=i?Symbol.for("react.responder"):60118,H=i?Symbol.for("react.scope"):60119;function W(F){if(typeof F=="object"&&F!==null){var V=F.$$typeof;switch(V){case u:switch(F=F.type,F){case x:case y:case n:case v:case d:case T:return F;default:switch(F=F&&F.$$typeof,F){case h:case b:case $:case C:case p:return F;default:return V}}case o:return V}}}function R(F){return W(F)===y}e=x,e=y,e=h,e=p,e=u,e=b,e=n,e=$,e=C,e=o,e=v,e=d,e=T,e=function(F){return R(F)||W(F)===x},e=R,e=function(F){return W(F)===h},e=function(F){return W(F)===p},e=function(F){return typeof F=="object"&&F!==null&&F.$$typeof===u},e=function(F){return W(F)===b},f.isFragment=function(F){return W(F)===n},e=function(F){return W(F)===$},f.isMemo=function(F){return W(F)===C},e=function(F){return W(F)===o},e=function(F){return W(F)===v},e=function(F){return W(F)===d},e=function(F){return W(F)===T},e=function(F){return typeof F=="string"||typeof F=="function"||F===n||F===y||F===v||F===d||F===T||F===A||typeof F=="object"&&F!==null&&(F.$$typeof===$||F.$$typeof===C||F.$$typeof===p||F.$$typeof===h||F.$$typeof===b||F.$$typeof===L||F.$$typeof===z||F.$$typeof===H||F.$$typeof===B)},e=W},11805:function(s,f,e){"use strict";s.exports=e(51162)},74300:function(s,f,e){"use strict";function i(F){return i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(V){return typeof V}:function(V){return V&&typeof Symbol=="function"&&V.constructor===Symbol&&V!==Symbol.prototype?"symbol":typeof V},i(F)}Object.defineProperty(f,"__esModule",{value:!0}),f.CopyToClipboard=void 0;var u=d(e(67294)),o=d(e(20640)),n=["text","onCopy","options","children"];function d(F){return F&&F.__esModule?F:{default:F}}function v(F,V){var q=Object.keys(F);if(Object.getOwnPropertySymbols){var Q=Object.getOwnPropertySymbols(F);V&&(Q=Q.filter(function(X){return Object.getOwnPropertyDescriptor(F,X).enumerable})),q.push.apply(q,Q)}return q}function p(F){for(var V=1;V<arguments.length;V++){var q=arguments[V]!=null?arguments[V]:{};V%2?v(Object(q),!0).forEach(function(Q){W(F,Q,q[Q])}):Object.getOwnPropertyDescriptors?Object.defineProperties(F,Object.getOwnPropertyDescriptors(q)):v(Object(q)).forEach(function(Q){Object.defineProperty(F,Q,Object.getOwnPropertyDescriptor(q,Q))})}return F}function h(F,V){if(F==null)return{};var q=x(F,V),Q,X;if(Object.getOwnPropertySymbols){var ie=Object.getOwnPropertySymbols(F);for(X=0;X<ie.length;X++)Q=ie[X],!(V.indexOf(Q)>=0)&&Object.prototype.propertyIsEnumerable.call(F,Q)&&(q[Q]=F[Q])}return q}function x(F,V){if(F==null)return{};var q={},Q=Object.keys(F),X,ie;for(ie=0;ie<Q.length;ie++)X=Q[ie],!(V.indexOf(X)>=0)&&(q[X]=F[X]);return q}function y(F,V){if(!(F instanceof V))throw new TypeError("Cannot call a class as a function")}function b(F,V){for(var q=0;q<V.length;q++){var Q=V[q];Q.enumerable=Q.enumerable||!1,Q.configurable=!0,"value"in Q&&(Q.writable=!0),Object.defineProperty(F,Q.key,Q)}}function T(F,V,q){return V&&b(F.prototype,V),q&&b(F,q),Object.defineProperty(F,"prototype",{writable:!1}),F}function A(F,V){if(typeof V!="function"&&V!==null)throw new TypeError("Super expression must either be null or a function");F.prototype=Object.create(V&&V.prototype,{constructor:{value:F,writable:!0,configurable:!0}}),Object.defineProperty(F,"prototype",{writable:!1}),V&&C(F,V)}function C(F,V){return C=Object.setPrototypeOf||function(Q,X){return Q.__proto__=X,Q},C(F,V)}function $(F){var V=z();return function(){var Q=H(F),X;if(V){var ie=H(this).constructor;X=Reflect.construct(Q,arguments,ie)}else X=Q.apply(this,arguments);return B(this,X)}}function B(F,V){if(V&&(i(V)==="object"||typeof V=="function"))return V;if(V!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return L(F)}function L(F){if(F===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return F}function z(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(F){return!1}}function H(F){return H=Object.setPrototypeOf?Object.getPrototypeOf:function(q){return q.__proto__||Object.getPrototypeOf(q)},H(F)}function W(F,V,q){return V in F?Object.defineProperty(F,V,{value:q,enumerable:!0,configurable:!0,writable:!0}):F[V]=q,F}var R=function(F){A(q,F);var V=$(q);function q(){var Q;y(this,q);for(var X=arguments.length,ie=new Array(X),Oe=0;Oe<X;Oe++)ie[Oe]=arguments[Oe];return Q=V.call.apply(V,[this].concat(ie)),W(L(Q),"onClick",function(Se){var Be=Q.props,ue=Be.text,S=Be.onCopy,g=Be.children,I=Be.options,k=u.default.Children.only(g),P=(0,o.default)(ue,I);S&&S(ue,P),k&&k.props&&typeof k.props.onClick=="function"&&k.props.onClick(Se)}),Q}return T(q,[{key:"render",value:function(){var X=this.props,ie=X.text,Oe=X.onCopy,Se=X.options,Be=X.children,ue=h(X,n),S=u.default.Children.only(Be);return u.default.cloneElement(S,p(p({},ue),{},{onClick:this.onClick}))}}]),q}(u.default.PureComponent);f.CopyToClipboard=R,W(R,"defaultProps",{onCopy:void 0,options:void 0})},74855:function(s,f,e){"use strict";var i=e(74300),u=i.CopyToClipboard;u.CopyToClipboard=u,s.exports=u},64448:function(s,f,e){"use strict";var i=e(67294),u=e(63840);function o(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,d={};function v(t,r){p(t,r),p(t+"Capture",r)}function p(t,r){for(d[t]=r,t=0;t<r.length;t++)n.add(r[t])}var h=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),x=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b={},T={};function A(t){return x.call(T,t)?!0:x.call(b,t)?!1:y.test(t)?T[t]=!0:(b[t]=!0,!1)}function C(t,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function $(t,r,a,c){if(r===null||typeof r=="undefined"||C(t,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function B(t,r,a,c,E,M,Y){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=E,this.mustUseProperty=a,this.propertyName=t,this.type=r,this.sanitizeURL=M,this.removeEmptyString=Y}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){L[t]=new B(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];L[r]=new B(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){L[t]=new B(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){L[t]=new B(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){L[t]=new B(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){L[t]=new B(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){L[t]=new B(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){L[t]=new B(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){L[t]=new B(t,5,!1,t.toLowerCase(),null,!1,!1)});var z=/[\-:]([a-z])/g;function H(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(z,H);L[r]=new B(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(z,H);L[r]=new B(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(z,H);L[r]=new B(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){L[t]=new B(t,1,!1,t.toLowerCase(),null,!1,!1)}),L.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){L[t]=new B(t,1,!1,t.toLowerCase(),null,!0,!0)});function W(t,r,a,c){var E=L.hasOwnProperty(r)?L[r]:null;(E!==null?E.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&($(r,a,E,c)&&(a=null),c||E===null?A(r)&&(a===null?t.removeAttribute(r):t.setAttribute(r,""+a)):E.mustUseProperty?t[E.propertyName]=a===null?E.type===3?!1:"":a:(r=E.attributeName,c=E.attributeNamespace,a===null?t.removeAttribute(r):(E=E.type,a=E===3||E===4&&a===!0?"":""+a,c?t.setAttributeNS(c,r,a):t.setAttribute(r,a))))}var R=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),V=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),ie=Symbol.for("react.provider"),Oe=Symbol.for("react.context"),Se=Symbol.for("react.forward_ref"),Be=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),S=Symbol.for("react.memo"),g=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var I=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var k=Symbol.iterator;function P(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var D=Object.assign,oe;function he(t){if(oe===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);oe=r&&r[1]||""}return`
`+oe+t}var Re=!1;function re(t,r){if(!t||Re)return"";Re=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(qe){var c=qe}Reflect.construct(t,[],r)}else{try{r.call()}catch(qe){c=qe}t.call(r.prototype)}else{try{throw Error()}catch(qe){c=qe}t()}}catch(qe){if(qe&&c&&typeof qe.stack=="string"){for(var E=qe.stack.split(`
`),M=c.stack.split(`
`),Y=E.length-1,pe=M.length-1;1<=Y&&0<=pe&&E[Y]!==M[pe];)pe--;for(;1<=Y&&0<=pe;Y--,pe--)if(E[Y]!==M[pe]){if(Y!==1||pe!==1)do if(Y--,pe--,0>pe||E[Y]!==M[pe]){var Pe=`
`+E[Y].replace(" at new "," at ");return t.displayName&&Pe.includes("<anonymous>")&&(Pe=Pe.replace("<anonymous>",t.displayName)),Pe}while(1<=Y&&0<=pe);break}}}finally{Re=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?he(t):""}function Ee(t){switch(t.tag){case 5:return he(t.type);case 16:return he("Lazy");case 13:return he("Suspense");case 19:return he("SuspenseList");case 0:case 2:case 15:return t=re(t.type,!1),t;case 11:return t=re(t.type.render,!1),t;case 1:return t=re(t.type,!0),t;default:return""}}function Ve(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case q:return"Fragment";case V:return"Portal";case X:return"Profiler";case Q:return"StrictMode";case Be:return"Suspense";case ue:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Oe:return(t.displayName||"Context")+".Consumer";case ie:return(t._context.displayName||"Context")+".Provider";case Se:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case S:return r=t.displayName||null,r!==null?r:Ve(t.type)||"Memo";case g:r=t._payload,t=t._init;try{return Ve(t(r))}catch(a){}}return null}function Xe(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ve(r);case 8:return r===Q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Ze(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ht(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ct(t){var r=ht(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),c=""+t[r];if(!t.hasOwnProperty(r)&&typeof a!="undefined"&&typeof a.get=="function"&&typeof a.set=="function"){var E=a.get,M=a.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return E.call(this)},set:function(Y){c=""+Y,M.call(this,Y)}}),Object.defineProperty(t,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(Y){c=""+Y},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Bt(t){t._valueTracker||(t._valueTracker=Ct(t))}function pr(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return t&&(c=ht(t)?t.checked?"true":"false":t.value),t=c,t!==a?(r.setValue(t),!0):!1}function $r(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch(r){return t.body}}function tn(t,r){var a=r.checked;return D({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a!=null?a:t._wrapperState.initialChecked})}function tt(t,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Ze(r.value!=null?r.value:a),t._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Ie(t,r){r=r.checked,r!=null&&W(t,"checked",r,!1)}function be(t,r){Ie(t,r);var a=Ze(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?je(t,r.type,a):r.hasOwnProperty("defaultValue")&&je(t,r.type,Ze(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function ye(t,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,a||r===t.value||(t.value=r),t.defaultValue=r}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function je(t,r,a){(r!=="number"||$r(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var fe=Array.isArray;function me(t,r,a,c){if(t=t.options,r){r={};for(var E=0;E<a.length;E++)r["$"+a[E]]=!0;for(a=0;a<t.length;a++)E=r.hasOwnProperty("$"+t[a].value),t[a].selected!==E&&(t[a].selected=E),E&&c&&(t[a].defaultSelected=!0)}else{for(a=""+Ze(a),r=null,E=0;E<t.length;E++){if(t[E].value===a){t[E].selected=!0,c&&(t[E].defaultSelected=!0);return}r!==null||t[E].disabled||(r=t[E])}r!==null&&(r.selected=!0)}}function de(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(o(91));return D({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ge(t,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(o(92));if(fe(a)){if(1<a.length)throw Error(o(93));a=a[0]}r=a}r==null&&(r=""),a=r}t._wrapperState={initialValue:Ze(a)}}function Me(t,r){var a=Ze(r.value),c=Ze(r.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),r.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),c!=null&&(t.defaultValue=""+c)}function st(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function it(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ft(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?it(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Mt,Ft=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(r,a,c,E){MSApp.execUnsafeLocalFunction(function(){return t(r,a,c,E)})}:t}(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Mt=Mt||document.createElement("div"),Mt.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Mt.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function ee(t,r){if(r){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=r;return}}t.textContent=r}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},se=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(t){se.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),we[r]=we[t]})});function _e(t,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||we.hasOwnProperty(t)&&we[t]?(""+r).trim():r+"px"}function et(t,r){t=t.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,E=_e(a,r[a],c);a==="float"&&(a="cssFloat"),c?t.setProperty(a,E):t[a]=E}}var at=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ut(t,r){if(r){if(at[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(o(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(o(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(o(61))}if(r.style!=null&&typeof r.style!="object")throw Error(o(62))}}function Lt(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qe=null;function dt(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var It=null,Ue=null,Ge=null;function nt(t){if(t=lu(t)){if(typeof It!="function")throw Error(o(280));var r=t.stateNode;r&&(r=Yu(r),It(t.stateNode,t.type,r))}}function bt(t){Ue?Ge?Ge.push(t):Ge=[t]:Ue=t}function ot(){if(Ue){var t=Ue,r=Ge;if(Ge=Ue=null,nt(t),r)for(t=0;t<r.length;t++)nt(r[t])}}function kt(t,r){return t(r)}function Wt(){}var Kt=!1;function Cr(t,r,a){if(Kt)return t(r,a);Kt=!0;try{return kt(t,r,a)}finally{Kt=!1,(Ue!==null||Ge!==null)&&(Wt(),ot())}}function Pr(t,r){var a=t.stateNode;if(a===null)return null;var c=Yu(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(o(231,r,typeof a));return a}var xn=!1;if(h)try{var Pn={};Object.defineProperty(Pn,"passive",{get:function(){xn=!0}}),window.addEventListener("test",Pn,Pn),window.removeEventListener("test",Pn,Pn)}catch(t){xn=!1}function gn(t,r,a,c,E,M,Y,pe,Pe){var qe=Array.prototype.slice.call(arguments,3);try{r.apply(a,qe)}catch(Ot){this.onError(Ot)}}var ln=!1,Sn=null,lr=!1,cn=null,vn={onError:function(t){ln=!0,Sn=t}};function pa(t,r,a,c,E,M,Y,pe,Pe){ln=!1,Sn=null,gn.apply(vn,arguments)}function va(t,r,a,c,E,M,Y,pe,Pe){if(pa.apply(this,arguments),ln){if(ln){var qe=Sn;ln=!1,Sn=null}else throw Error(o(198));lr||(lr=!0,cn=qe)}}function dn(t){var r=t,a=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,r.flags&4098&&(a=r.return),t=r.return;while(t)}return r.tag===3?a:null}function ua(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Wn(t){if(dn(t)!==t)throw Error(o(188))}function yr(t){var r=t.alternate;if(!r){if(r=dn(t),r===null)throw Error(o(188));return r!==t?null:t}for(var a=t,c=r;;){var E=a.return;if(E===null)break;var M=E.alternate;if(M===null){if(c=E.return,c!==null){a=c;continue}break}if(E.child===M.child){for(M=E.child;M;){if(M===a)return Wn(E),t;if(M===c)return Wn(E),r;M=M.sibling}throw Error(o(188))}if(a.return!==c.return)a=E,c=M;else{for(var Y=!1,pe=E.child;pe;){if(pe===a){Y=!0,a=E,c=M;break}if(pe===c){Y=!0,c=E,a=M;break}pe=pe.sibling}if(!Y){for(pe=M.child;pe;){if(pe===a){Y=!0,a=M,c=E;break}if(pe===c){Y=!0,c=M,a=E;break}pe=pe.sibling}if(!Y)throw Error(o(189))}}if(a.alternate!==c)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?t:r}function Sa(t){return t=yr(t),t!==null?Ma(t):null}function Ma(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=Ma(t);if(r!==null)return r;t=t.sibling}return null}var go=u.unstable_scheduleCallback,Ea=u.unstable_cancelCallback,Fo=u.unstable_shouldYield,yo=u.unstable_requestPaint,mn=u.unstable_now,zo=u.unstable_getCurrentPriorityLevel,Uo=u.unstable_ImmediatePriority,Tu=u.unstable_UserBlockingPriority,ka=u.unstable_NormalPriority,bo=u.unstable_LowPriority,xi=u.unstable_IdlePriority,wo=null,ma=null;function Ou(t){if(ma&&typeof ma.onCommitFiberRoot=="function")try{ma.onCommitFiberRoot(wo,t,void 0,(t.current.flags&128)===128)}catch(r){}}var Rn=Math.clz32?Math.clz32:ei,xo=Math.log,Si=Math.LN2;function ei(t){return t>>>=0,t===0?32:31-(xo(t)/Si|0)|0}var ro=64,Ei=4194304;function So(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $o(t,r){var a=t.pendingLanes;if(a===0)return 0;var c=0,E=t.suspendedLanes,M=t.pingedLanes,Y=a&268435455;if(Y!==0){var pe=Y&~E;pe!==0?c=So(pe):(M&=Y,M!==0&&(c=So(M)))}else Y=a&~E,Y!==0?c=So(Y):M!==0&&(c=So(M));if(c===0)return 0;if(r!==0&&r!==c&&!(r&E)&&(E=c&-c,M=r&-r,E>=M||E===16&&(M&4194240)!==0))return r;if(c&4&&(c|=a&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=c;0<r;)a=31-Rn(r),E=1<<a,c|=t[a],r&=~E;return c}function Iu(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ho(t,r){for(var a=t.suspendedLanes,c=t.pingedLanes,E=t.expirationTimes,M=t.pendingLanes;0<M;){var Y=31-Rn(M),pe=1<<Y,Pe=E[Y];Pe===-1?(!(pe&a)||pe&c)&&(E[Y]=Iu(pe,r)):Pe<=r&&(t.expiredLanes|=pe),M&=~pe}}function Zo(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Wo(){var t=ro;return ro<<=1,!(ro&4194240)&&(ro=64),t}function m(t){for(var r=[],a=0;31>a;a++)r.push(t);return r}function Z(t,r,a){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-Rn(r),t[r]=a}function te(t,r){var a=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<a;){var E=31-Rn(a),M=1<<E;r[E]=0,c[E]=-1,t[E]=-1,a&=~M}}function ae(t,r){var a=t.entangledLanes|=r;for(t=t.entanglements;a;){var c=31-Rn(a),E=1<<c;E&r|t[c]&r&&(t[c]|=r),a&=~E}}var ce=0;function Ae(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Je,Et,vr,rt,tr,Qt=!1,Jt=[],Sr=null,Br=null,Zr=null,fn=new Map,_n=new Map,Za=[],Ti="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function no(t,r){switch(t){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":Br=null;break;case"mouseover":case"mouseout":Zr=null;break;case"pointerover":case"pointerout":fn.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":_n.delete(r.pointerId)}}function Eo(t,r,a,c,E,M){return t===null||t.nativeEvent!==M?(t={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:M,targetContainers:[E]},r!==null&&(r=lu(r),r!==null&&Et(r)),t):(t.eventSystemFlags|=c,r=t.targetContainers,E!==null&&r.indexOf(E)===-1&&r.push(E),t)}function ao(t,r,a,c,E){switch(r){case"focusin":return Sr=Eo(Sr,t,r,a,c,E),!0;case"dragenter":return Br=Eo(Br,t,r,a,c,E),!0;case"mouseover":return Zr=Eo(Zr,t,r,a,c,E),!0;case"pointerover":var M=E.pointerId;return fn.set(M,Eo(fn.get(M)||null,t,r,a,c,E)),!0;case"gotpointercapture":return M=E.pointerId,_n.set(M,Eo(_n.get(M)||null,t,r,a,c,E)),!0}return!1}function ti(t){var r=Ga(t.target);if(r!==null){var a=dn(r);if(a!==null){if(r=a.tag,r===13){if(r=ua(a),r!==null){t.blockedOn=r,tr(t.priority,function(){vr(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ri(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var a=Pu(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var c=new a.constructor(a.type,a);Qe=c,a.target.dispatchEvent(c),Qe=null}else return r=lu(a),r!==null&&Et(r),t.blockedOn=a,!1;r.shift()}return!0}function Au(t,r,a){ri(t)&&a.delete(r)}function fs(){Qt=!1,Sr!==null&&ri(Sr)&&(Sr=null),Br!==null&&ri(Br)&&(Br=null),Zr!==null&&ri(Zr)&&(Zr=null),fn.forEach(Au),_n.forEach(Au)}function Go(t,r){t.blockedOn===r&&(t.blockedOn=null,Qt||(Qt=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,fs)))}function Ta(t){function r(E){return Go(E,t)}if(0<Jt.length){Go(Jt[0],t);for(var a=1;a<Jt.length;a++){var c=Jt[a];c.blockedOn===t&&(c.blockedOn=null)}}for(Sr!==null&&Go(Sr,t),Br!==null&&Go(Br,t),Zr!==null&&Go(Zr,t),fn.forEach(r),_n.forEach(r),a=0;a<Za.length;a++)c=Za[a],c.blockedOn===t&&(c.blockedOn=null);for(;0<Za.length&&(a=Za[0],a.blockedOn===null);)ti(a),a.blockedOn===null&&Za.shift()}var ni=R.ReactCurrentBatchConfig,Oi=!0;function Cu(t,r,a,c){var E=ce,M=ni.transition;ni.transition=null;try{ce=1,Ii(t,r,a,c)}finally{ce=E,ni.transition=M}}function xl(t,r,a,c){var E=ce,M=ni.transition;ni.transition=null;try{ce=4,Ii(t,r,a,c)}finally{ce=E,ni.transition=M}}function Ii(t,r,a,c){if(Oi){var E=Pu(t,r,a,c);if(E===null)Gs(t,r,c,ai,a),no(t,c);else if(ao(E,t,r,a,c))c.stopPropagation();else if(no(t,c),r&4&&-1<Ti.indexOf(t)){for(;E!==null;){var M=lu(E);if(M!==null&&Je(M),M=Pu(t,r,a,c),M===null&&Gs(t,r,c,ai,a),M===E)break;E=M}E!==null&&c.stopPropagation()}else Gs(t,r,c,null,a)}}var ai=null;function Pu(t,r,a,c){if(ai=null,t=dt(c),t=Ga(t),t!==null)if(r=dn(t),r===null)t=null;else if(a=r.tag,a===13){if(t=ua(r),t!==null)return t;t=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return ai=t,null}function Zi(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zo()){case Uo:return 1;case Tu:return 4;case ka:case bo:return 16;case xi:return 536870912;default:return 16}default:return 16}}var To=null,Wi=null,Ko=null;function Ru(){if(Ko)return Ko;var t,r=Wi,a=r.length,c,E="value"in To?To.value:To.textContent,M=E.length;for(t=0;t<a&&r[t]===E[t];t++);var Y=a-t;for(c=1;c<=Y&&r[a-c]===E[M-c];c++);return Ko=E.slice(t,1<c?1-c:void 0)}function Mu(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function Gi(){return!0}function ku(){return!1}function Qn(t){function r(a,c,E,M,Y){this._reactName=a,this._targetInst=E,this.type=c,this.nativeEvent=M,this.target=Y,this.currentTarget=null;for(var pe in t)t.hasOwnProperty(pe)&&(a=t[pe],this[pe]=a?a(M):M[pe]);return this.isDefaultPrevented=(M.defaultPrevented!=null?M.defaultPrevented:M.returnValue===!1)?Gi:ku,this.isPropagationStopped=ku,this}return D(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Gi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Gi)},persist:function(){},isPersistent:Gi}),r}var Oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ki=Qn(Oo),oo=D({},Oo,{view:0,detail:0}),js=Qn(oo),Vi,Vo,oi,Yi=D({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oi&&(oi&&t.type==="mousemove"?(Vi=t.screenX-oi.screenX,Vo=t.screenY-oi.screenY):Vo=Vi=0,oi=t),Vi)},movementY:function(t){return"movementY"in t?t.movementY:Vo}}),ii=Qn(Yi),Bs=D({},Yi,{dataTransfer:0}),U=Qn(Bs),J=D({},oo,{relatedTarget:0}),K=Qn(J),xe=D({},Oo,{animationName:0,elapsedTime:0,pseudoElement:0}),Ye=Qn(xe),pt=D({},Oo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),wt=Qn(pt),Tt=D({},Oo,{data:0}),zt=Qn(Tt),Ut={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ar={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mr(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=gr[t])?!!r[t]:!1}function Tr(){return mr}var _r=D({},oo,{key:function(t){if(t.key){var r=Ut[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=Mu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ar[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tr,charCode:function(t){return t.type==="keypress"?Mu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Mu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Kr=Qn(_r),En=D({},Yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hn=Qn(En),Oa=D({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tr}),qn=Qn(Oa),ui=D({},Oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),si=Qn(ui),io=D({},Yi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ai=Qn(io),_a=[9,13,27,32],Xi=h&&"CompositionEvent"in window,Io=null;h&&"documentMode"in document&&(Io=document.documentMode);var ps=h&&"TextEvent"in window&&!Io,Wa=h&&(!Xi||Io&&8<Io&&11>=Io),_u=String.fromCharCode(32),or=!1;function Qi(t,r){switch(t){case"keyup":return _a.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ao(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Yo=!1;function Sl(t,r){switch(t){case"compositionend":return Ao(r);case"keypress":return r.which!==32?null:(or=!0,_u);case"textInput":return t=r.data,t===_u&&or?null:t;default:return null}}function Ji(t,r){if(Yo)return t==="compositionend"||!Xi&&Qi(t,r)?(t=Ru(),Ko=Wi=To=null,Yo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Wa&&r.locale!=="ko"?null:r.data;default:return null}}var vs={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function li(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!vs[t.type]:r==="textarea"}function ms(t,r,a,c){bt(c),r=ki(r,"onChange"),0<r.length&&(a=new Ki("onChange","change",null,a,c),t.push({event:a,listeners:r}))}var Ci=null,Pi=null;function Fs(t){xs(t,0)}function Xo(t){var r=cu(t);if(pr(r))return t}function hs(t,r){if(t==="change")return r}var qi=!1;if(h){var zs;if(h){var gs="oninput"in document;if(!gs){var Us=document.createElement("div");Us.setAttribute("oninput","return;"),gs=typeof Us.oninput=="function"}zs=gs}else zs=!1;qi=zs&&(!document.documentMode||9<document.documentMode)}function Nu(){Ci&&(Ci.detachEvent("onpropertychange",Du),Pi=Ci=null)}function Du(t){if(t.propertyName==="value"&&Xo(Pi)){var r=[];ms(r,Pi,t,dt(t)),Cr(Fs,r)}}function ci(t,r,a){t==="focusin"?(Nu(),Ci=r,Pi=a,Ci.attachEvent("onpropertychange",Du)):t==="focusout"&&Nu()}function El(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xo(Pi)}function ys(t,r){if(t==="click")return Xo(r)}function Lu(t,r){if(t==="input"||t==="change")return Xo(r)}function $s(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Na=typeof Object.is=="function"?Object.is:$s;function eu(t,r){if(Na(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var a=Object.keys(t),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var E=a[c];if(!x.call(r,E)||!Na(t[E],r[E]))return!1}return!0}function di(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ju(t,r){var a=di(t);t=0;for(var c;a;){if(a.nodeType===3){if(c=t+a.textContent.length,t<=r&&c>=r)return{node:a,offset:r-t};t=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=di(a)}}function bs(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?bs(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Hs(){for(var t=window,r=$r();r instanceof t.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch(c){a=!1}if(a)t=r.contentWindow;else break;r=$r(t.document)}return r}function tu(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function Tl(t){var r=Hs(),a=t.focusedElem,c=t.selectionRange;if(r!==a&&a&&a.ownerDocument&&bs(a.ownerDocument.documentElement,a)){if(c!==null&&tu(a)){if(r=c.start,t=c.end,t===void 0&&(t=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(t,a.value.length);else if(t=(r=a.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var E=a.textContent.length,M=Math.min(c.start,E);c=c.end===void 0?M:Math.min(c.end,E),!t.extend&&M>c&&(E=c,c=M,M=E),E=ju(a,M);var Y=ju(a,c);E&&Y&&(t.rangeCount!==1||t.anchorNode!==E.node||t.anchorOffset!==E.offset||t.focusNode!==Y.node||t.focusOffset!==Y.offset)&&(r=r.createRange(),r.setStart(E.node,E.offset),t.removeAllRanges(),M>c?(t.addRange(r),t.extend(Y.node,Y.offset)):(r.setEnd(Y.node,Y.offset),t.addRange(r)))}}for(r=[],t=a;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)t=r[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ru=h&&"documentMode"in document&&11>=document.documentMode,Gn=null,uo=null,so=null,sa=!1;function Mn(t,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;sa||Gn==null||Gn!==$r(c)||(c=Gn,"selectionStart"in c&&tu(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),so&&eu(so,c)||(so=c,c=ki(uo,"onSelect"),0<c.length&&(r=new Ki("onSelect","select",null,r,a),t.push({event:r,listeners:c}),r.target=Gn)))}function Bu(t,r){var a={};return a[t.toLowerCase()]=r.toLowerCase(),a["Webkit"+t]="webkit"+r,a["Moz"+t]="moz"+r,a}var fi={animationend:Bu("Animation","AnimationEnd"),animationiteration:Bu("Animation","AnimationIteration"),animationstart:Bu("Animation","AnimationStart"),transitionend:Bu("Transition","TransitionEnd")},Qr={},Or={};h&&(Or=document.createElement("div").style,"AnimationEvent"in window||(delete fi.animationend.animation,delete fi.animationiteration.animation,delete fi.animationstart.animation),"TransitionEvent"in window||delete fi.transitionend.transition);function Co(t){if(Qr[t])return Qr[t];if(!fi[t])return t;var r=fi[t],a;for(a in r)if(r.hasOwnProperty(a)&&a in Or)return Qr[t]=r[a];return t}var nu=Co("animationend"),Fu=Co("animationiteration"),zu=Co("animationstart"),Uu=Co("transitionend"),ws=new Map,$u="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Po(t,r){ws.set(t,r),v(r,[t])}for(var Ia=0;Ia<$u.length;Ia++){var Hu=$u[Ia],Zs=Hu.toLowerCase(),Ol=Hu[0].toUpperCase()+Hu.slice(1);Po(Zs,"on"+Ol)}Po(nu,"onAnimationEnd"),Po(Fu,"onAnimationIteration"),Po(zu,"onAnimationStart"),Po("dblclick","onDoubleClick"),Po("focusin","onFocus"),Po("focusout","onBlur"),Po(Uu,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),v("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),v("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),v("onBeforeInput",["compositionend","keypress","textInput","paste"]),v("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),v("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),v("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pi=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ri));function au(t,r,a){var c=t.type||"unknown-event";t.currentTarget=a,va(c,r,void 0,t),t.currentTarget=null}function xs(t,r){r=(r&4)!==0;for(var a=0;a<t.length;a++){var c=t[a],E=c.event;c=c.listeners;e:{var M=void 0;if(r)for(var Y=c.length-1;0<=Y;Y--){var pe=c[Y],Pe=pe.instance,qe=pe.currentTarget;if(pe=pe.listener,Pe!==M&&E.isPropagationStopped())break e;au(E,pe,qe),M=Pe}else for(Y=0;Y<c.length;Y++){if(pe=c[Y],Pe=pe.instance,qe=pe.currentTarget,pe=pe.listener,Pe!==M&&E.isPropagationStopped())break e;au(E,pe,qe),M=Pe}}}if(lr)throw t=cn,lr=!1,cn=null,t}function hn(t,r){var a=r[Vs];a===void 0&&(a=r[Vs]=new Set);var c=t+"__bubble";a.has(c)||(Ws(r,t,2,!1),a.add(c))}function Zu(t,r,a){var c=0;r&&(c|=4),Ws(a,t,c,r)}var Wu="_reactListening"+Math.random().toString(36).slice(2);function vi(t){if(!t[Wu]){t[Wu]=!0,n.forEach(function(a){a!=="selectionchange"&&(pi.has(a)||Zu(a,!1,t),Zu(a,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[Wu]||(r[Wu]=!0,Zu("selectionchange",!1,r))}}function Ws(t,r,a,c){switch(Zi(r)){case 1:var E=Cu;break;case 4:E=xl;break;default:E=Ii}a=E.bind(null,r,a,t),E=void 0,!xn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(E=!0),c?E!==void 0?t.addEventListener(r,a,{capture:!0,passive:E}):t.addEventListener(r,a,!0):E!==void 0?t.addEventListener(r,a,{passive:E}):t.addEventListener(r,a,!1)}function Gs(t,r,a,c,E){var M=c;if(!(r&1)&&!(r&2)&&c!==null)e:for(;;){if(c===null)return;var Y=c.tag;if(Y===3||Y===4){var pe=c.stateNode.containerInfo;if(pe===E||pe.nodeType===8&&pe.parentNode===E)break;if(Y===4)for(Y=c.return;Y!==null;){var Pe=Y.tag;if((Pe===3||Pe===4)&&(Pe=Y.stateNode.containerInfo,Pe===E||Pe.nodeType===8&&Pe.parentNode===E))return;Y=Y.return}for(;pe!==null;){if(Y=Ga(pe),Y===null)return;if(Pe=Y.tag,Pe===5||Pe===6){c=M=Y;continue e}pe=pe.parentNode}}c=c.return}Cr(function(){var qe=M,Ot=dt(a),Rt=[];e:{var St=ws.get(t);if(St!==void 0){var Yt=Ki,nr=t;switch(t){case"keypress":if(Mu(a)===0)break e;case"keydown":case"keyup":Yt=Kr;break;case"focusin":nr="focus",Yt=K;break;case"focusout":nr="blur",Yt=K;break;case"beforeblur":case"afterblur":Yt=K;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Yt=ii;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Yt=U;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Yt=qn;break;case nu:case Fu:case zu:Yt=Ye;break;case Uu:Yt=si;break;case"scroll":Yt=js;break;case"wheel":Yt=Ai;break;case"copy":case"cut":case"paste":Yt=wt;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Yt=Hn}var ir=(r&4)!==0,ia=!ir&&t==="scroll",$e=ir?St!==null?St+"Capture":null:St;ir=[];for(var Ne=qe,We;Ne!==null;){We=Ne;var Dt=We.stateNode;if(We.tag===5&&Dt!==null&&(We=Dt,$e!==null&&(Dt=Pr(Ne,$e),Dt!=null&&ir.push(Mi(Ne,Dt,We)))),ia)break;Ne=Ne.return}0<ir.length&&(St=new Yt(St,nr,null,a,Ot),Rt.push({event:St,listeners:ir}))}}if(!(r&7)){e:{if(St=t==="mouseover"||t==="pointerover",Yt=t==="mouseout"||t==="pointerout",St&&a!==Qe&&(nr=a.relatedTarget||a.fromElement)&&(Ga(nr)||nr[ha]))break e;if((Yt||St)&&(St=Ot.window===Ot?Ot:(St=Ot.ownerDocument)?St.defaultView||St.parentWindow:window,Yt?(nr=a.relatedTarget||a.toElement,Yt=qe,nr=nr?Ga(nr):null,nr!==null&&(ia=dn(nr),nr!==ia||nr.tag!==5&&nr.tag!==6)&&(nr=null)):(Yt=null,nr=qe),Yt!==nr)){if(ir=ii,Dt="onMouseLeave",$e="onMouseEnter",Ne="mouse",(t==="pointerout"||t==="pointerover")&&(ir=Hn,Dt="onPointerLeave",$e="onPointerEnter",Ne="pointer"),ia=Yt==null?St:cu(Yt),We=nr==null?St:cu(nr),St=new ir(Dt,Ne+"leave",Yt,a,Ot),St.target=ia,St.relatedTarget=We,Dt=null,Ga(Ot)===qe&&(ir=new ir($e,Ne+"enter",nr,a,Ot),ir.target=We,ir.relatedTarget=ia,Dt=ir),ia=Dt,Yt&&nr)t:{for(ir=Yt,$e=nr,Ne=0,We=ir;We;We=mi(We))Ne++;for(We=0,Dt=$e;Dt;Dt=mi(Dt))We++;for(;0<Ne-We;)ir=mi(ir),Ne--;for(;0<We-Ne;)$e=mi($e),We--;for(;Ne--;){if(ir===$e||$e!==null&&ir===$e.alternate)break t;ir=mi(ir),$e=mi($e)}ir=null}else ir=null;Yt!==null&&Ss(Rt,St,Yt,ir,!1),nr!==null&&ia!==null&&Ss(Rt,ia,nr,ir,!0)}}e:{if(St=qe?cu(qe):window,Yt=St.nodeName&&St.nodeName.toLowerCase(),Yt==="select"||Yt==="input"&&St.type==="file")var cr=hs;else if(li(St))if(qi)cr=Lu;else{cr=El;var wr=ci}else(Yt=St.nodeName)&&Yt.toLowerCase()==="input"&&(St.type==="checkbox"||St.type==="radio")&&(cr=ys);if(cr&&(cr=cr(t,qe))){ms(Rt,cr,a,Ot);break e}wr&&wr(t,St,qe),t==="focusout"&&(wr=St._wrapperState)&&wr.controlled&&St.type==="number"&&je(St,"number",St.value)}switch(wr=qe?cu(qe):window,t){case"focusin":(li(wr)||wr.contentEditable==="true")&&(Gn=wr,uo=qe,so=null);break;case"focusout":so=uo=Gn=null;break;case"mousedown":sa=!0;break;case"contextmenu":case"mouseup":case"dragend":sa=!1,Mn(Rt,a,Ot);break;case"selectionchange":if(ru)break;case"keydown":case"keyup":Mn(Rt,a,Ot)}var xr;if(Xi)e:{switch(t){case"compositionstart":var Ar="onCompositionStart";break e;case"compositionend":Ar="onCompositionEnd";break e;case"compositionupdate":Ar="onCompositionUpdate";break e}Ar=void 0}else Yo?Qi(t,a)&&(Ar="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Ar="onCompositionStart");Ar&&(Wa&&a.locale!=="ko"&&(Yo||Ar!=="onCompositionStart"?Ar==="onCompositionEnd"&&Yo&&(xr=Ru()):(To=Ot,Wi="value"in To?To.value:To.textContent,Yo=!0)),wr=ki(qe,Ar),0<wr.length&&(Ar=new zt(Ar,t,null,a,Ot),Rt.push({event:Ar,listeners:wr}),xr?Ar.data=xr:(xr=Ao(a),xr!==null&&(Ar.data=xr)))),(xr=ps?Sl(t,a):Ji(t,a))&&(qe=ki(qe,"onBeforeInput"),0<qe.length&&(Ot=new zt("onBeforeInput","beforeinput",null,a,Ot),Rt.push({event:Ot,listeners:qe}),Ot.data=xr))}xs(Rt,r)})}function Mi(t,r,a){return{instance:t,listener:r,currentTarget:a}}function ki(t,r){for(var a=r+"Capture",c=[];t!==null;){var E=t,M=E.stateNode;E.tag===5&&M!==null&&(E=M,M=Pr(t,a),M!=null&&c.unshift(Mi(t,M,E)),M=Pr(t,r),M!=null&&c.push(Mi(t,M,E))),t=t.return}return c}function mi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ss(t,r,a,c,E){for(var M=r._reactName,Y=[];a!==null&&a!==c;){var pe=a,Pe=pe.alternate,qe=pe.stateNode;if(Pe!==null&&Pe===c)break;pe.tag===5&&qe!==null&&(pe=qe,E?(Pe=Pr(a,M),Pe!=null&&Y.unshift(Mi(a,Pe,pe))):E||(Pe=Pr(a,M),Pe!=null&&Y.push(Mi(a,Pe,pe)))),a=a.return}Y.length!==0&&t.push({event:r,listeners:Y})}var Il=/\r\n?/g,Al=/\u0000|\uFFFD/g;function Es(t){return(typeof t=="string"?t:""+t).replace(Il,`
`).replace(Al,"")}function ou(t,r,a){if(r=Es(r),Es(t)!==r&&a)throw Error(o(425))}function iu(){}var Ts=null,_i=null;function Gu(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Ku=typeof setTimeout=="function"?setTimeout:void 0,Vu=typeof clearTimeout=="function"?clearTimeout:void 0,Cl=typeof Promise=="function"?Promise:void 0,Pl=typeof queueMicrotask=="function"?queueMicrotask:typeof Cl!="undefined"?function(t){return Cl.resolve(null).then(t).catch(Rl)}:Ku;function Rl(t){setTimeout(function(){throw t})}function uu(t,r){var a=r,c=0;do{var E=a.nextSibling;if(t.removeChild(a),E&&E.nodeType===8)if(a=E.data,a==="/$"){if(c===0){t.removeChild(E),Ta(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=E}while(a);Ta(r)}function Ro(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function Ks(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return t;r--}else a==="/$"&&r++}t=t.previousSibling}return null}var hi=Math.random().toString(36).slice(2),lo="__reactFiber$"+hi,su="__reactProps$"+hi,ha="__reactContainer$"+hi,Vs="__reactEvents$"+hi,Ml="__reactListeners$"+hi,Ys="__reactHandles$"+hi;function Ga(t){var r=t[lo];if(r)return r;for(var a=t.parentNode;a;){if(r=a[ha]||a[lo]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(t=Ks(t);t!==null;){if(a=t[lo])return a;t=Ks(t)}return r}t=a,a=t.parentNode}return null}function lu(t){return t=t[lo]||t[ha],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cu(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(o(33))}function Yu(t){return t[su]||null}var Os=[],gi=-1;function Aa(t){return{current:t}}function Yr(t){0>gi||(t.current=Os[gi],Os[gi]=null,gi--)}function Ce(t,r){gi++,Os[gi]=t.current,t.current=r}var Ke={},ke=Aa(Ke),De=Aa(!1),vt=Ke;function gt(t,r){var a=t.type.contextTypes;if(!a)return Ke;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var E={},M;for(M in a)E[M]=r[M];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=E),E}function _t(t){return t=t.childContextTypes,t!=null}function rr(){Yr(De),Yr(ke)}function Dr(t,r,a){if(ke.current!==Ke)throw Error(o(168));Ce(ke,r),Ce(De,a)}function ea(t,r,a){var c=t.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var E in c)if(!(E in r))throw Error(o(108,Xe(t)||"Unknown",E));return D({},a,c)}function Wr(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ke,vt=ke.current,Ce(ke,t),Ce(De,De.current),!0}function Da(t,r,a){var c=t.stateNode;if(!c)throw Error(o(169));a?(t=ea(t,r,vt),c.__reactInternalMemoizedMergedChildContext=t,Yr(De),Yr(ke),Ce(ke,t)):Yr(De),Ce(De,a)}var Zn=null,Ka=!1,Ni=!1;function Ca(t){Zn===null?Zn=[t]:Zn.push(t)}function Va(t){Ka=!0,Ca(t)}function Nn(){if(!Ni&&Zn!==null){Ni=!0;var t=0,r=ce;try{var a=Zn;for(ce=1;t<a.length;t++){var c=a[t];do c=c(!0);while(c!==null)}Zn=null,Ka=!1}catch(E){throw Zn!==null&&(Zn=Zn.slice(t+1)),go(Uo,Nn),E}finally{ce=r,Ni=!1}}return null}var La=[],Kn=0,Di=null,du=0,ta=[],ja=0,ca=null,da=1,Ya="";function Mo(t,r){La[Kn++]=du,La[Kn++]=Di,Di=t,du=r}function Is(t,r,a){ta[ja++]=da,ta[ja++]=Ya,ta[ja++]=ca,ca=t;var c=da;t=Ya;var E=32-Rn(c)-1;c&=~(1<<E),a+=1;var M=32-Rn(r)+E;if(30<M){var Y=E-E%5;M=(c&(1<<Y)-1).toString(32),c>>=Y,E-=Y,da=1<<32-Rn(r)+E|a<<E|c,Ya=M+t}else da=1<<M|a<<E|c,Ya=t}function Xu(t){t.return!==null&&(Mo(t,1),Is(t,1,0))}function Qu(t){for(;t===Di;)Di=La[--Kn],La[Kn]=null,du=La[--Kn],La[Kn]=null;for(;t===ca;)ca=ta[--ja],ta[ja]=null,Ya=ta[--ja],ta[ja]=null,da=ta[--ja],ta[ja]=null}var ga=null,Tn=null,Vr=!1,ra=null;function kl(t,r){var a=$n(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=t,r=t.deletions,r===null?(t.deletions=[a],t.flags|=16):r.push(a)}function pc(t,r){switch(t.tag){case 5:var a=t.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,ga=t,Tn=Ro(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,ga=t,Tn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=ca!==null?{id:da,overflow:Ya}:null,t.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=$n(18,null,null,0),a.stateNode=r,a.return=t,t.child=a,ga=t,Tn=null,!0):!1;default:return!1}}function _l(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fu(t){if(Vr){var r=Tn;if(r){var a=r;if(!pc(t,r)){if(_l(t))throw Error(o(418));r=Ro(a.nextSibling);var c=ga;r&&pc(t,r)?kl(c,a):(t.flags=t.flags&-4097|2,Vr=!1,ga=t)}}else{if(_l(t))throw Error(o(418));t.flags=t.flags&-4097|2,Vr=!1,ga=t}}}function vc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ga=t}function Li(t){if(t!==ga)return!1;if(!Vr)return vc(t),Vr=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Gu(t.type,t.memoizedProps)),r&&(r=Tn)){if(_l(t))throw Nl(),Error(o(418));for(;r;)kl(t,r),r=Ro(r.nextSibling)}if(vc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(r===0){Tn=Ro(t.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}t=t.nextSibling}Tn=null}}else Tn=ga?Ro(t.stateNode.nextSibling):null;return!0}function Nl(){for(var t=Tn;t;)t=Ro(t.nextSibling)}function ji(){Tn=ga=null,Vr=!1}function Xs(t){ra===null?ra=[t]:ra.push(t)}var Jc=R.ReactCurrentBatchConfig;function Vn(t,r){if(t&&t.defaultProps){r=D({},r),t=t.defaultProps;for(var a in t)r[a]===void 0&&(r[a]=t[a]);return r}return r}var Qs=Aa(null),Bi=null,Ju=null,Js=null;function qu(){Js=Ju=Bi=null}function qs(t){var r=Qs.current;Yr(Qs),t._currentValue=r}function pu(t,r,a){for(;t!==null;){var c=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),t===a)break;t=t.return}}function vu(t,r){Bi=t,Js=Ju=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&r&&(aa=!0),t.firstContext=null)}function co(t){var r=t._currentValue;if(Js!==t)if(t={context:t,memoizedValue:r,next:null},Ju===null){if(Bi===null)throw Error(o(308));Ju=t,Bi.dependencies={lanes:0,firstContext:t}}else Ju=Ju.next=t;return r}var yi=null;function As(t){yi===null?yi=[t]:yi.push(t)}function el(t,r,a,c){var E=r.interleaved;return E===null?(a.next=a,As(r)):(a.next=E.next,E.next=a),r.interleaved=a,ko(t,c)}function ko(t,r){t.lanes|=r;var a=t.alternate;for(a!==null&&(a.lanes|=r),a=t,t=t.return;t!==null;)t.childLanes|=r,a=t.alternate,a!==null&&(a.childLanes|=r),a=t,t=t.return;return a.tag===3?a.stateNode:null}var _o=!1;function es(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dl(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Xa(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function fo(t,r,a){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,sr&2){var E=c.pending;return E===null?r.next=r:(r.next=E.next,E.next=r),c.pending=r,ko(t,a)}return E=c.interleaved,E===null?(r.next=r,As(c)):(r.next=E.next,E.next=r),c.interleaved=r,ko(t,a)}function Cs(t,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=t.pendingLanes,a|=c,r.lanes=a,ae(t,a)}}function mc(t,r){var a=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var E=null,M=null;if(a=a.firstBaseUpdate,a!==null){do{var Y={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};M===null?E=M=Y:M=M.next=Y,a=a.next}while(a!==null);M===null?E=M=r:M=M.next=r}else E=M=r;a={baseState:c.baseState,firstBaseUpdate:E,lastBaseUpdate:M,shared:c.shared,effects:c.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=r:t.next=r,a.lastBaseUpdate=r}function tl(t,r,a,c){var E=t.updateQueue;_o=!1;var M=E.firstBaseUpdate,Y=E.lastBaseUpdate,pe=E.shared.pending;if(pe!==null){E.shared.pending=null;var Pe=pe,qe=Pe.next;Pe.next=null,Y===null?M=qe:Y.next=qe,Y=Pe;var Ot=t.alternate;Ot!==null&&(Ot=Ot.updateQueue,pe=Ot.lastBaseUpdate,pe!==Y&&(pe===null?Ot.firstBaseUpdate=qe:pe.next=qe,Ot.lastBaseUpdate=Pe))}if(M!==null){var Rt=E.baseState;Y=0,Ot=qe=Pe=null,pe=M;do{var St=pe.lane,Yt=pe.eventTime;if((c&St)===St){Ot!==null&&(Ot=Ot.next={eventTime:Yt,lane:0,tag:pe.tag,payload:pe.payload,callback:pe.callback,next:null});e:{var nr=t,ir=pe;switch(St=r,Yt=a,ir.tag){case 1:if(nr=ir.payload,typeof nr=="function"){Rt=nr.call(Yt,Rt,St);break e}Rt=nr;break e;case 3:nr.flags=nr.flags&-65537|128;case 0:if(nr=ir.payload,St=typeof nr=="function"?nr.call(Yt,Rt,St):nr,St==null)break e;Rt=D({},Rt,St);break e;case 2:_o=!0}}pe.callback!==null&&pe.lane!==0&&(t.flags|=64,St=E.effects,St===null?E.effects=[pe]:St.push(pe))}else Yt={eventTime:Yt,lane:St,tag:pe.tag,payload:pe.payload,callback:pe.callback,next:null},Ot===null?(qe=Ot=Yt,Pe=Rt):Ot=Ot.next=Yt,Y|=St;if(pe=pe.next,pe===null){if(pe=E.shared.pending,pe===null)break;St=pe,pe=St.next,St.next=null,E.lastBaseUpdate=St,E.shared.pending=null}}while(1);if(Ot===null&&(Pe=Rt),E.baseState=Pe,E.firstBaseUpdate=qe,E.lastBaseUpdate=Ot,r=E.shared.interleaved,r!==null){E=r;do Y|=E.lane,E=E.next;while(E!==r)}else M===null&&(E.shared.lanes=0);br|=Y,t.lanes=Y,t.memoizedState=Rt}}function hc(t,r,a){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var c=t[r],E=c.callback;if(E!==null){if(c.callback=null,c=a,typeof E!="function")throw Error(o(191,E));E.call(c)}}}var Ll=new i.Component().refs;function rl(t,r,a,c){r=t.memoizedState,a=a(c,r),a=a==null?r:D({},r,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var nl={isMounted:function(t){return(t=t._reactInternals)?dn(t)===t:!1},enqueueSetState:function(t,r,a){t=t._reactInternals;var c=yn(),E=kn(t),M=Xa(c,E);M.payload=r,a!=null&&(M.callback=a),r=fo(t,M,E),r!==null&&(bn(r,t,E,c),Cs(r,t,E))},enqueueReplaceState:function(t,r,a){t=t._reactInternals;var c=yn(),E=kn(t),M=Xa(c,E);M.tag=1,M.payload=r,a!=null&&(M.callback=a),r=fo(t,M,E),r!==null&&(bn(r,t,E,c),Cs(r,t,E))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var a=yn(),c=kn(t),E=Xa(a,c);E.tag=2,r!=null&&(E.callback=r),r=fo(t,E,c),r!==null&&(bn(r,t,c,a),Cs(r,t,c))}};function gc(t,r,a,c,E,M,Y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,M,Y):r.prototype&&r.prototype.isPureReactComponent?!eu(a,c)||!eu(E,M):!0}function al(t,r,a){var c=!1,E=Ke,M=r.contextType;return typeof M=="object"&&M!==null?M=co(M):(E=_t(r)?vt:ke.current,c=r.contextTypes,M=(c=c!=null)?gt(t,E):Ke),r=new r(a,M),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=nl,t.stateNode=r,r._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=E,t.__reactInternalMemoizedMaskedChildContext=M),r}function jl(t,r,a,c){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==t&&nl.enqueueReplaceState(r,r.state,null)}function Bl(t,r,a,c){var E=t.stateNode;E.props=a,E.state=t.memoizedState,E.refs=Ll,es(t);var M=r.contextType;typeof M=="object"&&M!==null?E.context=co(M):(M=_t(r)?vt:ke.current,E.context=gt(t,M)),E.state=t.memoizedState,M=r.getDerivedStateFromProps,typeof M=="function"&&(rl(t,r,M,a),E.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof E.getSnapshotBeforeUpdate=="function"||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(r=E.state,typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount(),r!==E.state&&nl.enqueueReplaceState(E,E.state,null),tl(t,a,E,c),E.state=t.memoizedState),typeof E.componentDidMount=="function"&&(t.flags|=4194308)}function mu(t,r,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(o(309));var c=a.stateNode}if(!c)throw Error(o(147,t));var E=c,M=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===M?r.ref:(r=function(Y){var pe=E.refs;pe===Ll&&(pe=E.refs={}),Y===null?delete pe[M]:pe[M]=Y},r._stringRef=M,r)}if(typeof t!="string")throw Error(o(284));if(!a._owner)throw Error(o(290,t))}return t}function ol(t,r){throw t=Object.prototype.toString.call(r),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function hu(t){var r=t._init;return r(t._payload)}function yc(t){function r($e,Ne){if(t){var We=$e.deletions;We===null?($e.deletions=[Ne],$e.flags|=16):We.push(Ne)}}function a($e,Ne){if(!t)return null;for(;Ne!==null;)r($e,Ne),Ne=Ne.sibling;return null}function c($e,Ne){for($e=new Map;Ne!==null;)Ne.key!==null?$e.set(Ne.key,Ne):$e.set(Ne.index,Ne),Ne=Ne.sibling;return $e}function E($e,Ne){return $e=ho($e,Ne),$e.index=0,$e.sibling=null,$e}function M($e,Ne,We){return $e.index=We,t?(We=$e.alternate,We!==null?(We=We.index,We<Ne?($e.flags|=2,Ne):We):($e.flags|=2,Ne)):($e.flags|=1048576,Ne)}function Y($e){return t&&$e.alternate===null&&($e.flags|=2),$e}function pe($e,Ne,We,Dt){return Ne===null||Ne.tag!==6?(Ne=sc(We,$e.mode,Dt),Ne.return=$e,Ne):(Ne=E(Ne,We),Ne.return=$e,Ne)}function Pe($e,Ne,We,Dt){var cr=We.type;return cr===q?Ot($e,Ne,We.props.children,Dt,We.key):Ne!==null&&(Ne.elementType===cr||typeof cr=="object"&&cr!==null&&cr.$$typeof===g&&hu(cr)===Ne.type)?(Dt=E(Ne,We.props),Dt.ref=mu($e,Ne,We),Dt.return=$e,Dt):(Dt=cs(We.type,We.key,We.props,null,$e.mode,Dt),Dt.ref=mu($e,Ne,We),Dt.return=$e,Dt)}function qe($e,Ne,We,Dt){return Ne===null||Ne.tag!==4||Ne.stateNode.containerInfo!==We.containerInfo||Ne.stateNode.implementation!==We.implementation?(Ne=gl(We,$e.mode,Dt),Ne.return=$e,Ne):(Ne=E(Ne,We.children||[]),Ne.return=$e,Ne)}function Ot($e,Ne,We,Dt,cr){return Ne===null||Ne.tag!==7?(Ne=Su(We,$e.mode,Dt,cr),Ne.return=$e,Ne):(Ne=E(Ne,We),Ne.return=$e,Ne)}function Rt($e,Ne,We){if(typeof Ne=="string"&&Ne!==""||typeof Ne=="number")return Ne=sc(""+Ne,$e.mode,We),Ne.return=$e,Ne;if(typeof Ne=="object"&&Ne!==null){switch(Ne.$$typeof){case F:return We=cs(Ne.type,Ne.key,Ne.props,null,$e.mode,We),We.ref=mu($e,null,Ne),We.return=$e,We;case V:return Ne=gl(Ne,$e.mode,We),Ne.return=$e,Ne;case g:var Dt=Ne._init;return Rt($e,Dt(Ne._payload),We)}if(fe(Ne)||P(Ne))return Ne=Su(Ne,$e.mode,We,null),Ne.return=$e,Ne;ol($e,Ne)}return null}function St($e,Ne,We,Dt){var cr=Ne!==null?Ne.key:null;if(typeof We=="string"&&We!==""||typeof We=="number")return cr!==null?null:pe($e,Ne,""+We,Dt);if(typeof We=="object"&&We!==null){switch(We.$$typeof){case F:return We.key===cr?Pe($e,Ne,We,Dt):null;case V:return We.key===cr?qe($e,Ne,We,Dt):null;case g:return cr=We._init,St($e,Ne,cr(We._payload),Dt)}if(fe(We)||P(We))return cr!==null?null:Ot($e,Ne,We,Dt,null);ol($e,We)}return null}function Yt($e,Ne,We,Dt,cr){if(typeof Dt=="string"&&Dt!==""||typeof Dt=="number")return $e=$e.get(We)||null,pe(Ne,$e,""+Dt,cr);if(typeof Dt=="object"&&Dt!==null){switch(Dt.$$typeof){case F:return $e=$e.get(Dt.key===null?We:Dt.key)||null,Pe(Ne,$e,Dt,cr);case V:return $e=$e.get(Dt.key===null?We:Dt.key)||null,qe(Ne,$e,Dt,cr);case g:var wr=Dt._init;return Yt($e,Ne,We,wr(Dt._payload),cr)}if(fe(Dt)||P(Dt))return $e=$e.get(We)||null,Ot(Ne,$e,Dt,cr,null);ol(Ne,Dt)}return null}function nr($e,Ne,We,Dt){for(var cr=null,wr=null,xr=Ne,Ar=Ne=0,xa=null;xr!==null&&Ar<We.length;Ar++){xr.index>Ar?(xa=xr,xr=null):xa=xr.sibling;var sn=St($e,xr,We[Ar],Dt);if(sn===null){xr===null&&(xr=xa);break}t&&xr&&sn.alternate===null&&r($e,xr),Ne=M(sn,Ne,Ar),wr===null?cr=sn:wr.sibling=sn,wr=sn,xr=xa}if(Ar===We.length)return a($e,xr),Vr&&Mo($e,Ar),cr;if(xr===null){for(;Ar<We.length;Ar++)xr=Rt($e,We[Ar],Dt),xr!==null&&(Ne=M(xr,Ne,Ar),wr===null?cr=xr:wr.sibling=xr,wr=xr);return Vr&&Mo($e,Ar),cr}for(xr=c($e,xr);Ar<We.length;Ar++)xa=Yt(xr,$e,Ar,We[Ar],Dt),xa!==null&&(t&&xa.alternate!==null&&xr.delete(xa.key===null?Ar:xa.key),Ne=M(xa,Ne,Ar),wr===null?cr=xa:wr.sibling=xa,wr=xa);return t&&xr.forEach(function(ds){return r($e,ds)}),Vr&&Mo($e,Ar),cr}function ir($e,Ne,We,Dt){var cr=P(We);if(typeof cr!="function")throw Error(o(150));if(We=cr.call(We),We==null)throw Error(o(151));for(var wr=cr=null,xr=Ne,Ar=Ne=0,xa=null,sn=We.next();xr!==null&&!sn.done;Ar++,sn=We.next()){xr.index>Ar?(xa=xr,xr=null):xa=xr.sibling;var ds=St($e,xr,sn.value,Dt);if(ds===null){xr===null&&(xr=xa);break}t&&xr&&ds.alternate===null&&r($e,xr),Ne=M(ds,Ne,Ar),wr===null?cr=ds:wr.sibling=ds,wr=ds,xr=xa}if(sn.done)return a($e,xr),Vr&&Mo($e,Ar),cr;if(xr===null){for(;!sn.done;Ar++,sn=We.next())sn=Rt($e,sn.value,Dt),sn!==null&&(Ne=M(sn,Ne,Ar),wr===null?cr=sn:wr.sibling=sn,wr=sn);return Vr&&Mo($e,Ar),cr}for(xr=c($e,xr);!sn.done;Ar++,sn=We.next())sn=Yt(xr,$e,Ar,sn.value,Dt),sn!==null&&(t&&sn.alternate!==null&&xr.delete(sn.key===null?Ar:sn.key),Ne=M(sn,Ne,Ar),wr===null?cr=sn:wr.sibling=sn,wr=sn);return t&&xr.forEach(function(md){return r($e,md)}),Vr&&Mo($e,Ar),cr}function ia($e,Ne,We,Dt){if(typeof We=="object"&&We!==null&&We.type===q&&We.key===null&&(We=We.props.children),typeof We=="object"&&We!==null){switch(We.$$typeof){case F:e:{for(var cr=We.key,wr=Ne;wr!==null;){if(wr.key===cr){if(cr=We.type,cr===q){if(wr.tag===7){a($e,wr.sibling),Ne=E(wr,We.props.children),Ne.return=$e,$e=Ne;break e}}else if(wr.elementType===cr||typeof cr=="object"&&cr!==null&&cr.$$typeof===g&&hu(cr)===wr.type){a($e,wr.sibling),Ne=E(wr,We.props),Ne.ref=mu($e,wr,We),Ne.return=$e,$e=Ne;break e}a($e,wr);break}else r($e,wr);wr=wr.sibling}We.type===q?(Ne=Su(We.props.children,$e.mode,Dt,We.key),Ne.return=$e,$e=Ne):(Dt=cs(We.type,We.key,We.props,null,$e.mode,Dt),Dt.ref=mu($e,Ne,We),Dt.return=$e,$e=Dt)}return Y($e);case V:e:{for(wr=We.key;Ne!==null;){if(Ne.key===wr)if(Ne.tag===4&&Ne.stateNode.containerInfo===We.containerInfo&&Ne.stateNode.implementation===We.implementation){a($e,Ne.sibling),Ne=E(Ne,We.children||[]),Ne.return=$e,$e=Ne;break e}else{a($e,Ne);break}else r($e,Ne);Ne=Ne.sibling}Ne=gl(We,$e.mode,Dt),Ne.return=$e,$e=Ne}return Y($e);case g:return wr=We._init,ia($e,Ne,wr(We._payload),Dt)}if(fe(We))return nr($e,Ne,We,Dt);if(P(We))return ir($e,Ne,We,Dt);ol($e,We)}return typeof We=="string"&&We!==""||typeof We=="number"?(We=""+We,Ne!==null&&Ne.tag===6?(a($e,Ne.sibling),Ne=E(Ne,We),Ne.return=$e,$e=Ne):(a($e,Ne),Ne=sc(We,$e.mode,Dt),Ne.return=$e,$e=Ne),Y($e)):a($e,Ne)}return ia}var gu=yc(!0),bc=yc(!1),ts={},No=Aa(ts),rs=Aa(ts),ns=Aa(ts);function yu(t){if(t===ts)throw Error(o(174));return t}function as(t,r){switch(Ce(ns,r),Ce(rs,t),Ce(No,ts),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ft(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=ft(r,t)}Yr(No),Ce(No,r)}function os(){Yr(No),Yr(rs),Yr(ns)}function wc(t){yu(ns.current);var r=yu(No.current),a=ft(r,t.type);r!==a&&(Ce(rs,t),Ce(No,a))}function Fl(t){rs.current===t&&(Yr(No),Yr(rs))}var zn=Aa(0);function il(t){for(var r=t;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var zl=[];function is(){for(var t=0;t<zl.length;t++)zl[t]._workInProgressVersionPrimary=null;zl.length=0}var ul=R.ReactCurrentDispatcher,Ul=R.ReactCurrentBatchConfig,Fi=0,Dn=null,na=null,Jn=null,us=!1,Ps=!1,po=0,qc=0;function ya(){throw Error(o(321))}function xc(t,r){if(r===null)return!1;for(var a=0;a<r.length&&a<t.length;a++)if(!Na(t[a],r[a]))return!1;return!0}function sl(t,r,a,c,E,M){if(Fi=M,Dn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ul.current=t===null||t.memoizedState===null?rd:Bc,t=a(c,E),Ps){M=0;do{if(Ps=!1,po=0,25<=M)throw Error(o(301));M+=1,Jn=na=null,r.updateQueue=null,ul.current=nd,t=a(c,E)}while(Ps)}if(ul.current=dl,r=na!==null&&na.next!==null,Fi=0,Jn=na=Dn=null,us=!1,r)throw Error(o(300));return t}function $l(){var t=po!==0;return po=0,t}function Qo(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jn===null?Dn.memoizedState=Jn=t:Jn=Jn.next=t,Jn}function vo(){if(na===null){var t=Dn.alternate;t=t!==null?t.memoizedState:null}else t=na.next;var r=Jn===null?Dn.memoizedState:Jn.next;if(r!==null)Jn=r,na=t;else{if(t===null)throw Error(o(310));na=t,t={memoizedState:na.memoizedState,baseState:na.baseState,baseQueue:na.baseQueue,queue:na.queue,next:null},Jn===null?Dn.memoizedState=Jn=t:Jn=Jn.next=t}return Jn}function Rs(t,r){return typeof r=="function"?r(t):r}function Hl(t){var r=vo(),a=r.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=t;var c=na,E=c.baseQueue,M=a.pending;if(M!==null){if(E!==null){var Y=E.next;E.next=M.next,M.next=Y}c.baseQueue=E=M,a.pending=null}if(E!==null){M=E.next,c=c.baseState;var pe=Y=null,Pe=null,qe=M;do{var Ot=qe.lane;if((Fi&Ot)===Ot)Pe!==null&&(Pe=Pe.next={lane:0,action:qe.action,hasEagerState:qe.hasEagerState,eagerState:qe.eagerState,next:null}),c=qe.hasEagerState?qe.eagerState:t(c,qe.action);else{var Rt={lane:Ot,action:qe.action,hasEagerState:qe.hasEagerState,eagerState:qe.eagerState,next:null};Pe===null?(pe=Pe=Rt,Y=c):Pe=Pe.next=Rt,Dn.lanes|=Ot,br|=Ot}qe=qe.next}while(qe!==null&&qe!==M);Pe===null?Y=c:Pe.next=pe,Na(c,r.memoizedState)||(aa=!0),r.memoizedState=c,r.baseState=Y,r.baseQueue=Pe,a.lastRenderedState=c}if(t=a.interleaved,t!==null){E=t;do M=E.lane,Dn.lanes|=M,br|=M,E=E.next;while(E!==t)}else E===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Zl(t){var r=vo(),a=r.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=t;var c=a.dispatch,E=a.pending,M=r.memoizedState;if(E!==null){a.pending=null;var Y=E=E.next;do M=t(M,Y.action),Y=Y.next;while(Y!==E);Na(M,r.memoizedState)||(aa=!0),r.memoizedState=M,r.baseQueue===null&&(r.baseState=M),a.lastRenderedState=M}return[M,c]}function ll(){}function Sc(t,r){var a=Dn,c=vo(),E=r(),M=!Na(c.memoizedState,E);if(M&&(c.memoizedState=E,aa=!0),c=c.queue,Gl(Tc.bind(null,a,c,t),[t]),c.getSnapshot!==r||M||Jn!==null&&Jn.memoizedState.tag&1){if(a.flags|=2048,ss(9,Ec.bind(null,a,c,E,r),void 0,null),Nr===null)throw Error(o(349));Fi&30||bu(a,r,E)}return E}function bu(t,r,a){t.flags|=16384,t={getSnapshot:r,value:a},r=Dn.updateQueue,r===null?(r={lastEffect:null,stores:null},Dn.updateQueue=r,r.stores=[t]):(a=r.stores,a===null?r.stores=[t]:a.push(t))}function Ec(t,r,a,c){r.value=a,r.getSnapshot=c,Oc(r)&&Ic(t)}function Tc(t,r,a){return a(function(){Oc(r)&&Ic(t)})}function Oc(t){var r=t.getSnapshot;t=t.value;try{var a=r();return!Na(t,a)}catch(c){return!0}}function Ic(t){var r=ko(t,1);r!==null&&bn(r,t,1,-1)}function Ac(t){var r=Qo();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rs,lastRenderedState:t},r.queue=t,t=t.dispatch=Nc.bind(null,Dn,t),[r.memoizedState,t]}function ss(t,r,a,c){return t={tag:t,create:r,destroy:a,deps:c,next:null},r=Dn.updateQueue,r===null?(r={lastEffect:null,stores:null},Dn.updateQueue=r,r.lastEffect=t.next=t):(a=r.lastEffect,a===null?r.lastEffect=t.next=t:(c=a.next,a.next=t,t.next=c,r.lastEffect=t)),t}function Wl(){return vo().memoizedState}function zi(t,r,a,c){var E=Qo();Dn.flags|=t,E.memoizedState=ss(1|r,a,void 0,c===void 0?null:c)}function cl(t,r,a,c){var E=vo();c=c===void 0?null:c;var M=void 0;if(na!==null){var Y=na.memoizedState;if(M=Y.destroy,c!==null&&xc(c,Y.deps)){E.memoizedState=ss(r,a,M,c);return}}Dn.flags|=t,E.memoizedState=ss(1|r,a,M,c)}function Cc(t,r){return zi(8390656,8,t,r)}function Gl(t,r){return cl(2048,8,t,r)}function Pc(t,r){return cl(4,2,t,r)}function Rc(t,r){return cl(4,4,t,r)}function wu(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Ms(t,r,a){return a=a!=null?a.concat([t]):null,cl(4,4,wu.bind(null,r,t),a)}function Kl(){}function Vl(t,r){var a=vo();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&xc(r,c[1])?c[0]:(a.memoizedState=[t,r],t)}function Mc(t,r){var a=vo();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&xc(r,c[1])?c[0]:(t=t(),a.memoizedState=[t,r],t)}function kc(t,r,a){return Fi&21?(Na(a,r)||(a=Wo(),Dn.lanes|=a,br|=a,t.baseState=!0),r):(t.baseState&&(t.baseState=!1,aa=!0),t.memoizedState=a)}function ed(t,r){var a=ce;ce=a!==0&&4>a?a:4,t(!0);var c=Ul.transition;Ul.transition={};try{t(!1),r()}finally{ce=a,Ul.transition=c}}function _c(){return vo().memoizedState}function td(t,r,a){var c=kn(t);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Dc(t))Lc(r,a);else if(a=el(t,r,a,c),a!==null){var E=yn();bn(a,t,c,E),jc(a,r,c)}}function Nc(t,r,a){var c=kn(t),E={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dc(t))Lc(r,E);else{var M=t.alternate;if(t.lanes===0&&(M===null||M.lanes===0)&&(M=r.lastRenderedReducer,M!==null))try{var Y=r.lastRenderedState,pe=M(Y,a);if(E.hasEagerState=!0,E.eagerState=pe,Na(pe,Y)){var Pe=r.interleaved;Pe===null?(E.next=E,As(r)):(E.next=Pe.next,Pe.next=E),r.interleaved=E;return}}catch(qe){}finally{}a=el(t,r,E,c),a!==null&&(E=yn(),bn(a,t,c,E),jc(a,r,c))}}function Dc(t){var r=t.alternate;return t===Dn||r!==null&&r===Dn}function Lc(t,r){Ps=us=!0;var a=t.pending;a===null?r.next=r:(r.next=a.next,a.next=r),t.pending=r}function jc(t,r,a){if(a&4194240){var c=r.lanes;c&=t.pendingLanes,a|=c,r.lanes=a,ae(t,a)}}var dl={readContext:co,useCallback:ya,useContext:ya,useEffect:ya,useImperativeHandle:ya,useInsertionEffect:ya,useLayoutEffect:ya,useMemo:ya,useReducer:ya,useRef:ya,useState:ya,useDebugValue:ya,useDeferredValue:ya,useTransition:ya,useMutableSource:ya,useSyncExternalStore:ya,useId:ya,unstable_isNewReconciler:!1},rd={readContext:co,useCallback:function(t,r){return Qo().memoizedState=[t,r===void 0?null:r],t},useContext:co,useEffect:Cc,useImperativeHandle:function(t,r,a){return a=a!=null?a.concat([t]):null,zi(4194308,4,wu.bind(null,r,t),a)},useLayoutEffect:function(t,r){return zi(4194308,4,t,r)},useInsertionEffect:function(t,r){return zi(4,2,t,r)},useMemo:function(t,r){var a=Qo();return r=r===void 0?null:r,t=t(),a.memoizedState=[t,r],t},useReducer:function(t,r,a){var c=Qo();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},c.queue=t,t=t.dispatch=td.bind(null,Dn,t),[c.memoizedState,t]},useRef:function(t){var r=Qo();return t={current:t},r.memoizedState=t},useState:Ac,useDebugValue:Kl,useDeferredValue:function(t){return Qo().memoizedState=t},useTransition:function(){var t=Ac(!1),r=t[0];return t=ed.bind(null,t[1]),Qo().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,a){var c=Dn,E=Qo();if(Vr){if(a===void 0)throw Error(o(407));a=a()}else{if(a=r(),Nr===null)throw Error(o(349));Fi&30||bu(c,r,a)}E.memoizedState=a;var M={value:a,getSnapshot:r};return E.queue=M,Cc(Tc.bind(null,c,M,t),[t]),c.flags|=2048,ss(9,Ec.bind(null,c,M,a,r),void 0,null),a},useId:function(){var t=Qo(),r=Nr.identifierPrefix;if(Vr){var a=Ya,c=da;a=(c&~(1<<32-Rn(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=po++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=qc++,r=":"+r+"r"+a.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Bc={readContext:co,useCallback:Vl,useContext:co,useEffect:Gl,useImperativeHandle:Ms,useInsertionEffect:Pc,useLayoutEffect:Rc,useMemo:Mc,useReducer:Hl,useRef:Wl,useState:function(){return Hl(Rs)},useDebugValue:Kl,useDeferredValue:function(t){var r=vo();return kc(r,na.memoizedState,t)},useTransition:function(){var t=Hl(Rs)[0],r=vo().memoizedState;return[t,r]},useMutableSource:ll,useSyncExternalStore:Sc,useId:_c,unstable_isNewReconciler:!1},nd={readContext:co,useCallback:Vl,useContext:co,useEffect:Gl,useImperativeHandle:Ms,useInsertionEffect:Pc,useLayoutEffect:Rc,useMemo:Mc,useReducer:Zl,useRef:Wl,useState:function(){return Zl(Rs)},useDebugValue:Kl,useDeferredValue:function(t){var r=vo();return na===null?r.memoizedState=t:kc(r,na.memoizedState,t)},useTransition:function(){var t=Zl(Rs)[0],r=vo().memoizedState;return[t,r]},useMutableSource:ll,useSyncExternalStore:Sc,useId:_c,unstable_isNewReconciler:!1};function xu(t,r){try{var a="",c=r;do a+=Ee(c),c=c.return;while(c);var E=a}catch(M){E=`
Error generating stack: `+M.message+`
`+M.stack}return{value:t,source:r,stack:E,digest:null}}function Yl(t,r,a){return{value:t,source:null,stack:a!=null?a:null,digest:r!=null?r:null}}function fl(t,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var ad=typeof WeakMap=="function"?WeakMap:Map;function Xl(t,r,a){a=Xa(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){Ja||(Ja=!0,qa=c),fl(t,r)},a}function Fc(t,r,a){a=Xa(-1,a),a.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var E=r.value;a.payload=function(){return c(E)},a.callback=function(){fl(t,r)}}var M=t.stateNode;return M!==null&&typeof M.componentDidCatch=="function"&&(a.callback=function(){fl(t,r),typeof c!="function"&&(qr===null?qr=new Set([this]):qr.add(this));var Y=r.stack;this.componentDidCatch(r.value,{componentStack:Y!==null?Y:""})}),a}function Ql(t,r,a){var c=t.pingCache;if(c===null){c=t.pingCache=new ad;var E=new Set;c.set(r,E)}else E=c.get(r),E===void 0&&(E=new Set,c.set(r,E));E.has(a)||(E.add(a),t=Ns.bind(null,t,r,a),r.then(t,t))}function zc(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function Jl(t,r,a,c,E){return t.mode&1?(t.flags|=65536,t.lanes=E,t):(t===r?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Xa(-1,1),r.tag=2,fo(a,r,1))),a.lanes|=1),t)}var pl=R.ReactCurrentOwner,aa=!1;function Ba(t,r,a,c){r.child=t===null?bc(r,null,a,c):gu(r,t.child,a,c)}function od(t,r,a,c,E){a=a.render;var M=r.ref;return vu(r,E),c=sl(t,r,a,c,M,E),a=$l(),t!==null&&!aa?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~E,w(t,r,E)):(Vr&&a&&Xu(r),r.flags|=1,Ba(t,r,c,E),r.child)}function ks(t,r,a,c,E){if(t===null){var M=a.type;return typeof M=="function"&&!Ls(M)&&M.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=M,Uc(t,r,M,c,E)):(t=cs(a.type,null,c,r,r.mode,E),t.ref=r.ref,t.return=r,r.child=t)}if(M=t.child,!(t.lanes&E)){var Y=M.memoizedProps;if(a=a.compare,a=a!==null?a:eu,a(Y,c)&&t.ref===r.ref)return w(t,r,E)}return r.flags|=1,t=ho(M,c),t.ref=r.ref,t.return=r,r.child=t}function Uc(t,r,a,c,E){if(t!==null){var M=t.memoizedProps;if(eu(M,c)&&t.ref===r.ref)if(aa=!1,r.pendingProps=c=M,(t.lanes&E)!==0)t.flags&131072&&(aa=!0);else return r.lanes=t.lanes,w(t,r,E)}return ec(t,r,a,c,E)}function $c(t,r,a){var c=r.pendingProps,E=c.children,M=t!==null?t.memoizedState:null;if(c.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(kr,Fr),Fr|=a;else{if(!(a&1073741824))return t=M!==null?M.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,Ce(kr,Fr),Fr|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=M!==null?M.baseLanes:a,Ce(kr,Fr),Fr|=c}else M!==null?(c=M.baseLanes|a,r.memoizedState=null):c=a,Ce(kr,Fr),Fr|=c;return Ba(t,r,E,a),r.child}function ql(t,r){var a=r.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function ec(t,r,a,c,E){var M=_t(a)?vt:ke.current;return M=gt(r,M),vu(r,E),a=sl(t,r,a,c,M,E),c=$l(),t!==null&&!aa?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~E,w(t,r,E)):(Vr&&c&&Xu(r),r.flags|=1,Ba(t,r,a,E),r.child)}function Hc(t,r,a,c,E){if(_t(a)){var M=!0;Wr(r)}else M=!1;if(vu(r,E),r.stateNode===null)l(t,r),al(r,a,c),Bl(r,a,c,E),c=!0;else if(t===null){var Y=r.stateNode,pe=r.memoizedProps;Y.props=pe;var Pe=Y.context,qe=a.contextType;typeof qe=="object"&&qe!==null?qe=co(qe):(qe=_t(a)?vt:ke.current,qe=gt(r,qe));var Ot=a.getDerivedStateFromProps,Rt=typeof Ot=="function"||typeof Y.getSnapshotBeforeUpdate=="function";Rt||typeof Y.UNSAFE_componentWillReceiveProps!="function"&&typeof Y.componentWillReceiveProps!="function"||(pe!==c||Pe!==qe)&&jl(r,Y,c,qe),_o=!1;var St=r.memoizedState;Y.state=St,tl(r,c,Y,E),Pe=r.memoizedState,pe!==c||St!==Pe||De.current||_o?(typeof Ot=="function"&&(rl(r,a,Ot,c),Pe=r.memoizedState),(pe=_o||gc(r,a,pe,c,St,Pe,qe))?(Rt||typeof Y.UNSAFE_componentWillMount!="function"&&typeof Y.componentWillMount!="function"||(typeof Y.componentWillMount=="function"&&Y.componentWillMount(),typeof Y.UNSAFE_componentWillMount=="function"&&Y.UNSAFE_componentWillMount()),typeof Y.componentDidMount=="function"&&(r.flags|=4194308)):(typeof Y.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=Pe),Y.props=c,Y.state=Pe,Y.context=qe,c=pe):(typeof Y.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{Y=r.stateNode,Dl(t,r),pe=r.memoizedProps,qe=r.type===r.elementType?pe:Vn(r.type,pe),Y.props=qe,Rt=r.pendingProps,St=Y.context,Pe=a.contextType,typeof Pe=="object"&&Pe!==null?Pe=co(Pe):(Pe=_t(a)?vt:ke.current,Pe=gt(r,Pe));var Yt=a.getDerivedStateFromProps;(Ot=typeof Yt=="function"||typeof Y.getSnapshotBeforeUpdate=="function")||typeof Y.UNSAFE_componentWillReceiveProps!="function"&&typeof Y.componentWillReceiveProps!="function"||(pe!==Rt||St!==Pe)&&jl(r,Y,c,Pe),_o=!1,St=r.memoizedState,Y.state=St,tl(r,c,Y,E);var nr=r.memoizedState;pe!==Rt||St!==nr||De.current||_o?(typeof Yt=="function"&&(rl(r,a,Yt,c),nr=r.memoizedState),(qe=_o||gc(r,a,qe,c,St,nr,Pe)||!1)?(Ot||typeof Y.UNSAFE_componentWillUpdate!="function"&&typeof Y.componentWillUpdate!="function"||(typeof Y.componentWillUpdate=="function"&&Y.componentWillUpdate(c,nr,Pe),typeof Y.UNSAFE_componentWillUpdate=="function"&&Y.UNSAFE_componentWillUpdate(c,nr,Pe)),typeof Y.componentDidUpdate=="function"&&(r.flags|=4),typeof Y.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof Y.componentDidUpdate!="function"||pe===t.memoizedProps&&St===t.memoizedState||(r.flags|=4),typeof Y.getSnapshotBeforeUpdate!="function"||pe===t.memoizedProps&&St===t.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=nr),Y.props=c,Y.state=nr,Y.context=Pe,c=qe):(typeof Y.componentDidUpdate!="function"||pe===t.memoizedProps&&St===t.memoizedState||(r.flags|=4),typeof Y.getSnapshotBeforeUpdate!="function"||pe===t.memoizedProps&&St===t.memoizedState||(r.flags|=1024),c=!1)}return tc(t,r,a,c,M,E)}function tc(t,r,a,c,E,M){ql(t,r);var Y=(r.flags&128)!==0;if(!c&&!Y)return E&&Da(r,a,!1),w(t,r,M);c=r.stateNode,pl.current=r;var pe=Y&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,t!==null&&Y?(r.child=gu(r,t.child,null,M),r.child=gu(r,null,pe,M)):Ba(t,r,pe,M),r.memoizedState=c.state,E&&Da(r,a,!0),r.child}function Zc(t){var r=t.stateNode;r.pendingContext?Dr(t,r.pendingContext,r.pendingContext!==r.context):r.context&&Dr(t,r.context,!1),as(t,r.containerInfo)}function Wc(t,r,a,c,E){return ji(),Xs(E),r.flags|=256,Ba(t,r,a,c),r.child}var rc={dehydrated:null,treeContext:null,retryLane:0};function nc(t){return{baseLanes:t,cachePool:null,transitions:null}}function _s(t,r,a){var c=r.pendingProps,E=zn.current,M=!1,Y=(r.flags&128)!==0,pe;if((pe=Y)||(pe=t!==null&&t.memoizedState===null?!1:(E&2)!==0),pe?(M=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(E|=1),Ce(zn,E&1),t===null)return fu(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(r.mode&1?t.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(Y=c.children,t=c.fallback,M?(c=r.mode,M=r.child,Y={mode:"hidden",children:Y},!(c&1)&&M!==null?(M.childLanes=0,M.pendingProps=Y):M=hl(Y,c,0,null),t=Su(t,c,a,null),M.return=r,t.return=r,M.sibling=t,r.child=M,r.child.memoizedState=nc(a),r.memoizedState=rc,t):Ui(r,Y));if(E=t.memoizedState,E!==null&&(pe=E.dehydrated,pe!==null))return cd(t,r,Y,c,pe,E,a);if(M){M=c.fallback,Y=r.mode,E=t.child,pe=E.sibling;var Pe={mode:"hidden",children:c.children};return!(Y&1)&&r.child!==E?(c=r.child,c.childLanes=0,c.pendingProps=Pe,r.deletions=null):(c=ho(E,Pe),c.subtreeFlags=E.subtreeFlags&14680064),pe!==null?M=ho(pe,M):(M=Su(M,Y,a,null),M.flags|=2),M.return=r,c.return=r,c.sibling=M,r.child=c,c=M,M=r.child,Y=t.child.memoizedState,Y=Y===null?nc(a):{baseLanes:Y.baseLanes|a,cachePool:null,transitions:Y.transitions},M.memoizedState=Y,M.childLanes=t.childLanes&~a,r.memoizedState=rc,c}return M=t.child,t=M.sibling,c=ho(M,{mode:"visible",children:c.children}),!(r.mode&1)&&(c.lanes=a),c.return=r,c.sibling=null,t!==null&&(a=r.deletions,a===null?(r.deletions=[t],r.flags|=16):a.push(t)),r.child=c,r.memoizedState=null,c}function Ui(t,r){return r=hl({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function ac(t,r,a,c){return c!==null&&Xs(c),gu(r,t.child,null,a),t=Ui(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function cd(t,r,a,c,E,M,Y){if(a)return r.flags&256?(r.flags&=-257,c=Yl(Error(o(422))),ac(t,r,Y,c)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(M=c.fallback,E=r.mode,c=hl({mode:"visible",children:c.children},E,0,null),M=Su(M,E,Y,null),M.flags|=2,c.return=r,M.return=r,c.sibling=M,r.child=c,r.mode&1&&gu(r,t.child,null,Y),r.child.memoizedState=nc(Y),r.memoizedState=rc,M);if(!(r.mode&1))return ac(t,r,Y,null);if(E.data==="$!"){if(c=E.nextSibling&&E.nextSibling.dataset,c)var pe=c.dgst;return c=pe,M=Error(o(419)),c=Yl(M,c,void 0),ac(t,r,Y,c)}if(pe=(Y&t.childLanes)!==0,aa||pe){if(c=Nr,c!==null){switch(Y&-Y){case 4:E=2;break;case 16:E=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:E=32;break;case 536870912:E=268435456;break;default:E=0}E=E&(c.suspendedLanes|Y)?0:E,E!==0&&E!==M.retryLane&&(M.retryLane=E,ko(t,E),bn(c,t,E,-1))}return wa(),c=Yl(Error(o(421))),ac(t,r,Y,c)}return E.data==="$?"?(r.flags|=128,r.child=t.child,r=en.bind(null,t),E._reactRetry=r,null):(t=M.treeContext,Tn=Ro(E.nextSibling),ga=r,Vr=!0,ra=null,t!==null&&(ta[ja++]=da,ta[ja++]=Ya,ta[ja++]=ca,da=t.id,Ya=t.overflow,ca=r),r=Ui(r,c.children),r.flags|=4096,r)}function vl(t,r,a){t.lanes|=r;var c=t.alternate;c!==null&&(c.lanes|=r),pu(t.return,r,a)}function oc(t,r,a,c,E){var M=t.memoizedState;M===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:E}:(M.isBackwards=r,M.rendering=null,M.renderingStartTime=0,M.last=c,M.tail=a,M.tailMode=E)}function Gc(t,r,a){var c=r.pendingProps,E=c.revealOrder,M=c.tail;if(Ba(t,r,c.children,a),c=zn.current,c&2)c=c&1|2,r.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vl(t,a,r);else if(t.tag===19)vl(t,a,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(Ce(zn,c),!(r.mode&1))r.memoizedState=null;else switch(E){case"forwards":for(a=r.child,E=null;a!==null;)t=a.alternate,t!==null&&il(t)===null&&(E=a),a=a.sibling;a=E,a===null?(E=r.child,r.child=null):(E=a.sibling,a.sibling=null),oc(r,!1,E,a,M);break;case"backwards":for(a=null,E=r.child,r.child=null;E!==null;){if(t=E.alternate,t!==null&&il(t)===null){r.child=E;break}t=E.sibling,E.sibling=a,a=E,E=t}oc(r,!0,a,null,M);break;case"together":oc(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function l(t,r){!(r.mode&1)&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function w(t,r,a){if(t!==null&&(r.dependencies=t.dependencies),br|=r.lanes,!(a&r.childLanes))return null;if(t!==null&&r.child!==t.child)throw Error(o(153));if(r.child!==null){for(t=r.child,a=ho(t,t.pendingProps),r.child=a,a.return=r;t.sibling!==null;)t=t.sibling,a=a.sibling=ho(t,t.pendingProps),a.return=r;a.sibling=null}return r.child}function O(t,r,a){switch(r.tag){case 3:Zc(r),ji();break;case 5:wc(r);break;case 1:_t(r.type)&&Wr(r);break;case 4:as(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,E=r.memoizedProps.value;Ce(Qs,c._currentValue),c._currentValue=E;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(Ce(zn,zn.current&1),r.flags|=128,null):a&r.child.childLanes?_s(t,r,a):(Ce(zn,zn.current&1),t=w(t,r,a),t!==null?t.sibling:null);Ce(zn,zn.current&1);break;case 19:if(c=(a&r.childLanes)!==0,t.flags&128){if(c)return Gc(t,r,a);r.flags|=128}if(E=r.memoizedState,E!==null&&(E.rendering=null,E.tail=null,E.lastEffect=null),Ce(zn,zn.current),c)break;return null;case 22:case 23:return r.lanes=0,$c(t,r,a)}return w(t,r,a)}var _,j,G,N;_=function(t,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},j=function(){},G=function(t,r,a,c){var E=t.memoizedProps;if(E!==c){t=r.stateNode,yu(No.current);var M=null;switch(a){case"input":E=tn(t,E),c=tn(t,c),M=[];break;case"select":E=D({},E,{value:void 0}),c=D({},c,{value:void 0}),M=[];break;case"textarea":E=de(t,E),c=de(t,c),M=[];break;default:typeof E.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=iu)}ut(a,c);var Y;a=null;for(qe in E)if(!c.hasOwnProperty(qe)&&E.hasOwnProperty(qe)&&E[qe]!=null)if(qe==="style"){var pe=E[qe];for(Y in pe)pe.hasOwnProperty(Y)&&(a||(a={}),a[Y]="")}else qe!=="dangerouslySetInnerHTML"&&qe!=="children"&&qe!=="suppressContentEditableWarning"&&qe!=="suppressHydrationWarning"&&qe!=="autoFocus"&&(d.hasOwnProperty(qe)?M||(M=[]):(M=M||[]).push(qe,null));for(qe in c){var Pe=c[qe];if(pe=E!=null?E[qe]:void 0,c.hasOwnProperty(qe)&&Pe!==pe&&(Pe!=null||pe!=null))if(qe==="style")if(pe){for(Y in pe)!pe.hasOwnProperty(Y)||Pe&&Pe.hasOwnProperty(Y)||(a||(a={}),a[Y]="");for(Y in Pe)Pe.hasOwnProperty(Y)&&pe[Y]!==Pe[Y]&&(a||(a={}),a[Y]=Pe[Y])}else a||(M||(M=[]),M.push(qe,a)),a=Pe;else qe==="dangerouslySetInnerHTML"?(Pe=Pe?Pe.__html:void 0,pe=pe?pe.__html:void 0,Pe!=null&&pe!==Pe&&(M=M||[]).push(qe,Pe)):qe==="children"?typeof Pe!="string"&&typeof Pe!="number"||(M=M||[]).push(qe,""+Pe):qe!=="suppressContentEditableWarning"&&qe!=="suppressHydrationWarning"&&(d.hasOwnProperty(qe)?(Pe!=null&&qe==="onScroll"&&hn("scroll",t),M||pe===Pe||(M=[])):(M=M||[]).push(qe,Pe))}a&&(M=M||[]).push("style",a);var qe=M;(r.updateQueue=qe)&&(r.flags|=4)}},N=function(t,r,a,c){a!==c&&(r.flags|=4)};function le(t,r){if(!Vr)switch(t.tailMode){case"hidden":r=t.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function ne(t){var r=t.alternate!==null&&t.alternate.child===t.child,a=0,c=0;if(r)for(var E=t.child;E!==null;)a|=E.lanes|E.childLanes,c|=E.subtreeFlags&14680064,c|=E.flags&14680064,E.return=t,E=E.sibling;else for(E=t.child;E!==null;)a|=E.lanes|E.childLanes,c|=E.subtreeFlags,c|=E.flags,E.return=t,E=E.sibling;return t.subtreeFlags|=c,t.childLanes=a,r}function ve(t,r,a){var c=r.pendingProps;switch(Qu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(r),null;case 1:return _t(r.type)&&rr(),ne(r),null;case 3:return c=r.stateNode,os(),Yr(De),Yr(ke),is(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(Li(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,ra!==null&&(Jo(ra),ra=null))),j(t,r),ne(r),null;case 5:Fl(r);var E=yu(ns.current);if(a=r.type,t!==null&&r.stateNode!=null)G(t,r,a,c,E),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(o(166));return ne(r),null}if(t=yu(No.current),Li(r)){c=r.stateNode,a=r.type;var M=r.memoizedProps;switch(c[lo]=r,c[su]=M,t=(r.mode&1)!==0,a){case"dialog":hn("cancel",c),hn("close",c);break;case"iframe":case"object":case"embed":hn("load",c);break;case"video":case"audio":for(E=0;E<Ri.length;E++)hn(Ri[E],c);break;case"source":hn("error",c);break;case"img":case"image":case"link":hn("error",c),hn("load",c);break;case"details":hn("toggle",c);break;case"input":tt(c,M),hn("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!M.multiple},hn("invalid",c);break;case"textarea":ge(c,M),hn("invalid",c)}ut(a,M),E=null;for(var Y in M)if(M.hasOwnProperty(Y)){var pe=M[Y];Y==="children"?typeof pe=="string"?c.textContent!==pe&&(M.suppressHydrationWarning!==!0&&ou(c.textContent,pe,t),E=["children",pe]):typeof pe=="number"&&c.textContent!==""+pe&&(M.suppressHydrationWarning!==!0&&ou(c.textContent,pe,t),E=["children",""+pe]):d.hasOwnProperty(Y)&&pe!=null&&Y==="onScroll"&&hn("scroll",c)}switch(a){case"input":Bt(c),ye(c,M,!0);break;case"textarea":Bt(c),st(c);break;case"select":case"option":break;default:typeof M.onClick=="function"&&(c.onclick=iu)}c=E,r.updateQueue=c,c!==null&&(r.flags|=4)}else{Y=E.nodeType===9?E:E.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=it(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=Y.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=Y.createElement(a,{is:c.is}):(t=Y.createElement(a),a==="select"&&(Y=t,c.multiple?Y.multiple=!0:c.size&&(Y.size=c.size))):t=Y.createElementNS(t,a),t[lo]=r,t[su]=c,_(t,r,!1,!1),r.stateNode=t;e:{switch(Y=Lt(a,c),a){case"dialog":hn("cancel",t),hn("close",t),E=c;break;case"iframe":case"object":case"embed":hn("load",t),E=c;break;case"video":case"audio":for(E=0;E<Ri.length;E++)hn(Ri[E],t);E=c;break;case"source":hn("error",t),E=c;break;case"img":case"image":case"link":hn("error",t),hn("load",t),E=c;break;case"details":hn("toggle",t),E=c;break;case"input":tt(t,c),E=tn(t,c),hn("invalid",t);break;case"option":E=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},E=D({},c,{value:void 0}),hn("invalid",t);break;case"textarea":ge(t,c),E=de(t,c),hn("invalid",t);break;default:E=c}ut(a,E),pe=E;for(M in pe)if(pe.hasOwnProperty(M)){var Pe=pe[M];M==="style"?et(t,Pe):M==="dangerouslySetInnerHTML"?(Pe=Pe?Pe.__html:void 0,Pe!=null&&Ft(t,Pe)):M==="children"?typeof Pe=="string"?(a!=="textarea"||Pe!=="")&&ee(t,Pe):typeof Pe=="number"&&ee(t,""+Pe):M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&M!=="autoFocus"&&(d.hasOwnProperty(M)?Pe!=null&&M==="onScroll"&&hn("scroll",t):Pe!=null&&W(t,M,Pe,Y))}switch(a){case"input":Bt(t),ye(t,c,!1);break;case"textarea":Bt(t),st(t);break;case"option":c.value!=null&&t.setAttribute("value",""+Ze(c.value));break;case"select":t.multiple=!!c.multiple,M=c.value,M!=null?me(t,!!c.multiple,M,!1):c.defaultValue!=null&&me(t,!!c.multiple,c.defaultValue,!0);break;default:typeof E.onClick=="function"&&(t.onclick=iu)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return ne(r),null;case 6:if(t&&r.stateNode!=null)N(t,r,t.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(o(166));if(a=yu(ns.current),yu(No.current),Li(r)){if(c=r.stateNode,a=r.memoizedProps,c[lo]=r,(M=c.nodeValue!==a)&&(t=ga,t!==null))switch(t.tag){case 3:ou(c.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ou(c.nodeValue,a,(t.mode&1)!==0)}M&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[lo]=r,r.stateNode=c}return ne(r),null;case 13:if(Yr(zn),c=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Vr&&Tn!==null&&r.mode&1&&!(r.flags&128))Nl(),ji(),r.flags|=98560,M=!1;else if(M=Li(r),c!==null&&c.dehydrated!==null){if(t===null){if(!M)throw Error(o(318));if(M=r.memoizedState,M=M!==null?M.dehydrated:null,!M)throw Error(o(317));M[lo]=r}else ji(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;ne(r),M=!1}else ra!==null&&(Jo(ra),ra=null),M=!0;if(!M)return r.flags&65536?r:null}return r.flags&128?(r.lanes=a,r):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(r.child.flags|=8192,r.mode&1&&(t===null||zn.current&1?zr===0&&(zr=3):wa())),r.updateQueue!==null&&(r.flags|=4),ne(r),null);case 4:return os(),j(t,r),t===null&&vi(r.stateNode.containerInfo),ne(r),null;case 10:return qs(r.type._context),ne(r),null;case 17:return _t(r.type)&&rr(),ne(r),null;case 19:if(Yr(zn),M=r.memoizedState,M===null)return ne(r),null;if(c=(r.flags&128)!==0,Y=M.rendering,Y===null)if(c)le(M,!1);else{if(zr!==0||t!==null&&t.flags&128)for(t=r.child;t!==null;){if(Y=il(t),Y!==null){for(r.flags|=128,le(M,!1),c=Y.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)M=a,t=c,M.flags&=14680066,Y=M.alternate,Y===null?(M.childLanes=0,M.lanes=t,M.child=null,M.subtreeFlags=0,M.memoizedProps=null,M.memoizedState=null,M.updateQueue=null,M.dependencies=null,M.stateNode=null):(M.childLanes=Y.childLanes,M.lanes=Y.lanes,M.child=Y.child,M.subtreeFlags=0,M.deletions=null,M.memoizedProps=Y.memoizedProps,M.memoizedState=Y.memoizedState,M.updateQueue=Y.updateQueue,M.type=Y.type,t=Y.dependencies,M.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Ce(zn,zn.current&1|2),r.child}t=t.sibling}M.tail!==null&&mn()>ba&&(r.flags|=128,c=!0,le(M,!1),r.lanes=4194304)}else{if(!c)if(t=il(Y),t!==null){if(r.flags|=128,c=!0,a=t.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),le(M,!0),M.tail===null&&M.tailMode==="hidden"&&!Y.alternate&&!Vr)return ne(r),null}else 2*mn()-M.renderingStartTime>ba&&a!==1073741824&&(r.flags|=128,c=!0,le(M,!1),r.lanes=4194304);M.isBackwards?(Y.sibling=r.child,r.child=Y):(a=M.last,a!==null?a.sibling=Y:r.child=Y,M.last=Y)}return M.tail!==null?(r=M.tail,M.rendering=r,M.tail=r.sibling,M.renderingStartTime=mn(),r.sibling=null,a=zn.current,Ce(zn,c?a&1|2:a&1),r):(ne(r),null);case 22:case 23:return jo(),c=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(r.flags|=8192),c&&r.mode&1?Fr&1073741824&&(ne(r),r.subtreeFlags&6&&(r.flags|=8192)):ne(r),null;case 24:return null;case 25:return null}throw Error(o(156,r.tag))}function Le(t,r){switch(Qu(r),r.tag){case 1:return _t(r.type)&&rr(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return os(),Yr(De),Yr(ke),is(),t=r.flags,t&65536&&!(t&128)?(r.flags=t&-65537|128,r):null;case 5:return Fl(r),null;case 13:if(Yr(zn),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(o(340));ji()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return Yr(zn),null;case 4:return os(),null;case 10:return qs(r.type._context),null;case 22:case 23:return jo(),null;case 24:return null;default:return null}}var ze=!1,Fe=!1,He=typeof WeakSet=="function"?WeakSet:Set,Te=null;function lt(t,r){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){wn(t,r,c)}else a.current=null}function mt(t,r,a){try{a()}catch(c){wn(t,r,c)}}var At=!1;function yt(t,r){if(Ts=Oi,t=Hs(),tu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var E=c.anchorOffset,M=c.focusNode;c=c.focusOffset;try{a.nodeType,M.nodeType}catch(Dt){a=null;break e}var Y=0,pe=-1,Pe=-1,qe=0,Ot=0,Rt=t,St=null;t:for(;;){for(var Yt;Rt!==a||E!==0&&Rt.nodeType!==3||(pe=Y+E),Rt!==M||c!==0&&Rt.nodeType!==3||(Pe=Y+c),Rt.nodeType===3&&(Y+=Rt.nodeValue.length),(Yt=Rt.firstChild)!==null;)St=Rt,Rt=Yt;for(;;){if(Rt===t)break t;if(St===a&&++qe===E&&(pe=Y),St===M&&++Ot===c&&(Pe=Y),(Yt=Rt.nextSibling)!==null)break;Rt=St,St=Rt.parentNode}Rt=Yt}a=pe===-1||Pe===-1?null:{start:pe,end:Pe}}else a=null}a=a||{start:0,end:0}}else a=null;for(_i={focusedElem:t,selectionRange:a},Oi=!1,Te=r;Te!==null;)if(r=Te,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,Te=t;else for(;Te!==null;){r=Te;try{var nr=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(nr!==null){var ir=nr.memoizedProps,ia=nr.memoizedState,$e=r.stateNode,Ne=$e.getSnapshotBeforeUpdate(r.elementType===r.type?ir:Vn(r.type,ir),ia);$e.__reactInternalSnapshotBeforeUpdate=Ne}break;case 3:var We=r.stateNode.containerInfo;We.nodeType===1?We.textContent="":We.nodeType===9&&We.documentElement&&We.removeChild(We.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(Dt){wn(r,r.return,Dt)}if(t=r.sibling,t!==null){t.return=r.return,Te=t;break}Te=r.return}return nr=At,At=!1,nr}function xt(t,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var E=c=c.next;do{if((E.tag&t)===t){var M=E.destroy;E.destroy=void 0,M!==void 0&&mt(r,a,M)}E=E.next}while(E!==c)}}function Pt(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&t)===t){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function jt(t){var r=t.ref;if(r!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof r=="function"?r(t):r.current=t}}function Nt(t){var r=t.alternate;r!==null&&(t.alternate=null,Nt(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[lo],delete r[su],delete r[Vs],delete r[Ml],delete r[Ys])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $t(t){return t.tag===5||t.tag===3||t.tag===4}function Xt(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$t(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ht(t,r,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(t,r):a.insertBefore(t,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(t,a)):(r=a,r.appendChild(t)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=iu));else if(c!==4&&(t=t.child,t!==null))for(Ht(t,r,a),t=t.sibling;t!==null;)Ht(t,r,a),t=t.sibling}function Vt(t,r,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,r?a.insertBefore(t,r):a.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(Vt(t,r,a),t=t.sibling;t!==null;)Vt(t,r,a),t=t.sibling}var ct=null,Gt=!1;function Zt(t,r,a){for(a=a.child;a!==null;)qt(t,r,a),a=a.sibling}function qt(t,r,a){if(ma&&typeof ma.onCommitFiberUnmount=="function")try{ma.onCommitFiberUnmount(wo,a)}catch(pe){}switch(a.tag){case 5:Fe||lt(a,r);case 6:var c=ct,E=Gt;ct=null,Zt(t,r,a),ct=c,Gt=E,ct!==null&&(Gt?(t=ct,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):ct.removeChild(a.stateNode));break;case 18:ct!==null&&(Gt?(t=ct,a=a.stateNode,t.nodeType===8?uu(t.parentNode,a):t.nodeType===1&&uu(t,a),Ta(t)):uu(ct,a.stateNode));break;case 4:c=ct,E=Gt,ct=a.stateNode.containerInfo,Gt=!0,Zt(t,r,a),ct=c,Gt=E;break;case 0:case 11:case 14:case 15:if(!Fe&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){E=c=c.next;do{var M=E,Y=M.destroy;M=M.tag,Y!==void 0&&(M&2||M&4)&&mt(a,r,Y),E=E.next}while(E!==c)}Zt(t,r,a);break;case 1:if(!Fe&&(lt(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(pe){wn(a,r,pe)}Zt(t,r,a);break;case 21:Zt(t,r,a);break;case 22:a.mode&1?(Fe=(c=Fe)||a.memoizedState!==null,Zt(t,r,a),Fe=c):Zt(t,r,a);break;default:Zt(t,r,a)}}function dr(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new He),r.forEach(function(c){var E=Xr.bind(null,t,c);a.has(c)||(a.add(c),c.then(E,E))})}}function fr(t,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var E=a[c];try{var M=t,Y=r,pe=Y;e:for(;pe!==null;){switch(pe.tag){case 5:ct=pe.stateNode,Gt=!1;break e;case 3:ct=pe.stateNode.containerInfo,Gt=!0;break e;case 4:ct=pe.stateNode.containerInfo,Gt=!0;break e}pe=pe.return}if(ct===null)throw Error(o(160));qt(M,Y,E),ct=null,Gt=!1;var Pe=E.alternate;Pe!==null&&(Pe.return=null),E.return=null}catch(qe){wn(E,r,qe)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Ir(r,t),r=r.sibling}function Ir(t,r){var a=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(fr(r,t),hr(t),c&4){try{xt(3,t,t.return),Pt(3,t)}catch(ir){wn(t,t.return,ir)}try{xt(5,t,t.return)}catch(ir){wn(t,t.return,ir)}}break;case 1:fr(r,t),hr(t),c&512&&a!==null&&lt(a,a.return);break;case 5:if(fr(r,t),hr(t),c&512&&a!==null&&lt(a,a.return),t.flags&32){var E=t.stateNode;try{ee(E,"")}catch(ir){wn(t,t.return,ir)}}if(c&4&&(E=t.stateNode,E!=null)){var M=t.memoizedProps,Y=a!==null?a.memoizedProps:M,pe=t.type,Pe=t.updateQueue;if(t.updateQueue=null,Pe!==null)try{pe==="input"&&M.type==="radio"&&M.name!=null&&Ie(E,M),Lt(pe,Y);var qe=Lt(pe,M);for(Y=0;Y<Pe.length;Y+=2){var Ot=Pe[Y],Rt=Pe[Y+1];Ot==="style"?et(E,Rt):Ot==="dangerouslySetInnerHTML"?Ft(E,Rt):Ot==="children"?ee(E,Rt):W(E,Ot,Rt,qe)}switch(pe){case"input":be(E,M);break;case"textarea":Me(E,M);break;case"select":var St=E._wrapperState.wasMultiple;E._wrapperState.wasMultiple=!!M.multiple;var Yt=M.value;Yt!=null?me(E,!!M.multiple,Yt,!1):St!==!!M.multiple&&(M.defaultValue!=null?me(E,!!M.multiple,M.defaultValue,!0):me(E,!!M.multiple,M.multiple?[]:"",!1))}E[su]=M}catch(ir){wn(t,t.return,ir)}}break;case 6:if(fr(r,t),hr(t),c&4){if(t.stateNode===null)throw Error(o(162));E=t.stateNode,M=t.memoizedProps;try{E.nodeValue=M}catch(ir){wn(t,t.return,ir)}}break;case 3:if(fr(r,t),hr(t),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Ta(r.containerInfo)}catch(ir){wn(t,t.return,ir)}break;case 4:fr(r,t),hr(t);break;case 13:fr(r,t),hr(t),E=t.child,E.flags&8192&&(M=E.memoizedState!==null,E.stateNode.isHidden=M,!M||E.alternate!==null&&E.alternate.memoizedState!==null||(Qa=mn())),c&4&&dr(t);break;case 22:if(Ot=a!==null&&a.memoizedState!==null,t.mode&1?(Fe=(qe=Fe)||Ot,fr(r,t),Fe=qe):fr(r,t),hr(t),c&8192){if(qe=t.memoizedState!==null,(t.stateNode.isHidden=qe)&&!Ot&&t.mode&1)for(Te=t,Ot=t.child;Ot!==null;){for(Rt=Te=Ot;Te!==null;){switch(St=Te,Yt=St.child,St.tag){case 0:case 11:case 14:case 15:xt(4,St,St.return);break;case 1:lt(St,St.return);var nr=St.stateNode;if(typeof nr.componentWillUnmount=="function"){c=St,a=St.return;try{r=c,nr.props=r.memoizedProps,nr.state=r.memoizedState,nr.componentWillUnmount()}catch(ir){wn(c,a,ir)}}break;case 5:lt(St,St.return);break;case 22:if(St.memoizedState!==null){ur(Rt);continue}}Yt!==null?(Yt.return=St,Te=Yt):ur(Rt)}Ot=Ot.sibling}e:for(Ot=null,Rt=t;;){if(Rt.tag===5){if(Ot===null){Ot=Rt;try{E=Rt.stateNode,qe?(M=E.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none"):(pe=Rt.stateNode,Pe=Rt.memoizedProps.style,Y=Pe!=null&&Pe.hasOwnProperty("display")?Pe.display:null,pe.style.display=_e("display",Y))}catch(ir){wn(t,t.return,ir)}}}else if(Rt.tag===6){if(Ot===null)try{Rt.stateNode.nodeValue=qe?"":Rt.memoizedProps}catch(ir){wn(t,t.return,ir)}}else if((Rt.tag!==22&&Rt.tag!==23||Rt.memoizedState===null||Rt===t)&&Rt.child!==null){Rt.child.return=Rt,Rt=Rt.child;continue}if(Rt===t)break e;for(;Rt.sibling===null;){if(Rt.return===null||Rt.return===t)break e;Ot===Rt&&(Ot=null),Rt=Rt.return}Ot===Rt&&(Ot=null),Rt.sibling.return=Rt.return,Rt=Rt.sibling}}break;case 19:fr(r,t),hr(t),c&4&&dr(t);break;case 21:break;default:fr(r,t),hr(t)}}function hr(t){var r=t.flags;if(r&2){try{e:{for(var a=t.return;a!==null;){if($t(a)){var c=a;break e}a=a.return}throw Error(o(160))}switch(c.tag){case 5:var E=c.stateNode;c.flags&32&&(ee(E,""),c.flags&=-33);var M=Xt(t);Vt(t,M,E);break;case 3:case 4:var Y=c.stateNode.containerInfo,pe=Xt(t);Ht(t,pe,Y);break;default:throw Error(o(161))}}catch(Pe){wn(t,t.return,Pe)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function an(t,r,a){Te=t,On(t,r,a)}function On(t,r,a){for(var c=(t.mode&1)!==0;Te!==null;){var E=Te,M=E.child;if(E.tag===22&&c){var Y=E.memoizedState!==null||ze;if(!Y){var pe=E.alternate,Pe=pe!==null&&pe.memoizedState!==null||Fe;pe=ze;var qe=Fe;if(ze=Y,(Fe=Pe)&&!qe)for(Te=E;Te!==null;)Y=Te,Pe=Y.child,Y.tag===22&&Y.memoizedState!==null?er(E):Pe!==null?(Pe.return=Y,Te=Pe):er(E);for(;M!==null;)Te=M,On(M,r,a),M=M.sibling;Te=E,ze=pe,Fe=qe}Jr(t,r,a)}else E.subtreeFlags&8772&&M!==null?(M.return=E,Te=M):Jr(t,r,a)}}function Jr(t){for(;Te!==null;){var r=Te;if(r.flags&8772){var a=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Fe||Pt(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Fe)if(a===null)c.componentDidMount();else{var E=r.elementType===r.type?a.memoizedProps:Vn(r.type,a.memoizedProps);c.componentDidUpdate(E,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var M=r.updateQueue;M!==null&&hc(r,M,c);break;case 3:var Y=r.updateQueue;if(Y!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}hc(r,Y,a)}break;case 5:var pe=r.stateNode;if(a===null&&r.flags&4){a=pe;var Pe=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":Pe.autoFocus&&a.focus();break;case"img":Pe.src&&(a.src=Pe.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var qe=r.alternate;if(qe!==null){var Ot=qe.memoizedState;if(Ot!==null){var Rt=Ot.dehydrated;Rt!==null&&Ta(Rt)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}Fe||r.flags&512&&jt(r)}catch(St){wn(r,r.return,St)}}if(r===t){Te=null;break}if(a=r.sibling,a!==null){a.return=r.return,Te=a;break}Te=r.return}}function ur(t){for(;Te!==null;){var r=Te;if(r===t){Te=null;break}var a=r.sibling;if(a!==null){a.return=r.return,Te=a;break}Te=r.return}}function er(t){for(;Te!==null;){var r=Te;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Pt(4,r)}catch(Pe){wn(r,a,Pe)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var E=r.return;try{c.componentDidMount()}catch(Pe){wn(r,E,Pe)}}var M=r.return;try{jt(r)}catch(Pe){wn(r,M,Pe)}break;case 5:var Y=r.return;try{jt(r)}catch(Pe){wn(r,Y,Pe)}}}catch(Pe){wn(r,r.return,Pe)}if(r===t){Te=null;break}var pe=r.sibling;if(pe!==null){pe.return=r.return,Te=pe;break}Te=r.return}}var Rr=Math.ceil,Lr=R.ReactCurrentDispatcher,rn=R.ReactCurrentOwner,on=R.ReactCurrentBatchConfig,sr=0,Nr=null,Gr=null,Mr=0,Fr=0,kr=Aa(0),zr=0,pn=null,br=0,Ur=0,Hr=0,In=null,un=null,Qa=0,ba=1/0,An=null,Ja=!1,qa=null,qr=null,Do=!1,Ln=null,jn=0,oa=0,Pa=null,eo=-1,Un=0;function yn(){return sr&6?mn():eo!==-1?eo:eo=mn()}function kn(t){return t.mode&1?sr&2&&Mr!==0?Mr&-Mr:Jc.transition!==null?(Un===0&&(Un=Wo()),Un):(t=ce,t!==0||(t=window.event,t=t===void 0?16:Zi(t.type)),t):1}function bn(t,r,a,c){if(50<oa)throw oa=0,Pa=null,Error(o(185));Z(t,a,c),(!(sr&2)||t!==Nr)&&(t===Nr&&(!(sr&2)&&(Ur|=a),zr===4&&Fa(t,Mr)),Yn(t,c),a===1&&sr===0&&!(r.mode&1)&&(ba=mn()+500,Ka&&Nn()))}function Yn(t,r){var a=t.callbackNode;Ho(t,r);var c=$o(t,t===Nr?Mr:0);if(c===0)a!==null&&Ea(a),t.callbackNode=null,t.callbackPriority=0;else if(r=c&-c,t.callbackPriority!==r){if(a!=null&&Ea(a),r===1)t.tag===0?Va(za.bind(null,t)):Ca(za.bind(null,t)),Pl(function(){!(sr&6)&&Nn()}),a=null;else{switch(Ae(c)){case 1:a=Uo;break;case 4:a=Tu;break;case 16:a=ka;break;case 536870912:a=xi;break;default:a=ka}a=la(a,$i.bind(null,t))}t.callbackPriority=r,t.callbackNode=a}}function $i(t,r){if(eo=-1,Un=0,sr&6)throw Error(o(327));var a=t.callbackNode;if($a()&&t.callbackNode!==a)return null;var c=$o(t,t===Nr?Mr:0);if(c===0)return null;if(c&30||c&t.expiredLanes||r)r=Ua(t,c);else{r=c;var E=sr;sr|=2;var M=Bn();(Nr!==t||Mr!==r)&&(An=null,ba=mn()+500,Er(t,r));do try{uc();break}catch(pe){jr(t,pe)}while(1);qu(),Lr.current=M,sr=E,Gr!==null?r=0:(Nr=null,Mr=0,r=zr)}if(r!==0){if(r===2&&(E=Zo(t),E!==0&&(c=E,r=bi(t,E))),r===1)throw a=pn,Er(t,0),Fa(t,c),Yn(t,mn()),a;if(r===6)Fa(t,c);else{if(E=t.current.alternate,!(c&30)&&!wi(E)&&(r=Ua(t,c),r===2&&(M=Zo(t),M!==0&&(c=M,r=bi(t,M))),r===1))throw a=pn,Er(t,0),Fa(t,c),Yn(t,mn()),a;switch(t.finishedWork=E,t.finishedLanes=c,r){case 0:case 1:throw Error(o(345));case 2:to(t,un,An);break;case 3:if(Fa(t,c),(c&130023424)===c&&(r=Qa+500-mn(),10<r)){if($o(t,0)!==0)break;if(E=t.suspendedLanes,(E&c)!==c){yn(),t.pingedLanes|=t.suspendedLanes&E;break}t.timeoutHandle=Ku(to.bind(null,t,un,An),r);break}to(t,un,An);break;case 4:if(Fa(t,c),(c&4194240)===c)break;for(r=t.eventTimes,E=-1;0<c;){var Y=31-Rn(c);M=1<<Y,Y=r[Y],Y>E&&(E=Y),c&=~M}if(c=E,c=mn()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Rr(c/1960))-c,10<c){t.timeoutHandle=Ku(to.bind(null,t,un,An),c);break}to(t,un,An);break;case 5:to(t,un,An);break;default:throw Error(o(329))}}}return Yn(t,mn()),t.callbackNode===a?$i.bind(null,t):null}function bi(t,r){var a=In;return t.current.memoizedState.isDehydrated&&(Er(t,r).flags|=256),t=Ua(t,r),t!==2&&(r=un,un=a,r!==null&&Jo(r)),t}function Jo(t){un===null?un=t:un.push.apply(un,t)}function wi(t){for(var r=t;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var E=a[c],M=E.getSnapshot;E=E.value;try{if(!Na(M(),E))return!1}catch(Y){return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Fa(t,r){for(r&=~Hr,r&=~Ur,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var a=31-Rn(r),c=1<<a;t[a]=-1,r&=~c}}function za(t){if(sr&6)throw Error(o(327));$a();var r=$o(t,0);if(!(r&1))return Yn(t,mn()),null;var a=Ua(t,r);if(t.tag!==0&&a===2){var c=Zo(t);c!==0&&(r=c,a=bi(t,c))}if(a===1)throw a=pn,Er(t,0),Fa(t,r),Yn(t,mn()),a;if(a===6)throw Error(o(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,to(t,un,An),Yn(t,mn()),null}function Lo(t,r){var a=sr;sr|=1;try{return t(r)}finally{sr=a,sr===0&&(ba=mn()+500,Ka&&Nn())}}function Ra(t){Ln!==null&&Ln.tag===0&&!(sr&6)&&$a();var r=sr;sr|=1;var a=on.transition,c=ce;try{if(on.transition=null,ce=1,t)return t()}finally{ce=c,on.transition=a,sr=r,!(sr&6)&&Nn()}}function jo(){Fr=kr.current,Yr(kr)}function Er(t,r){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,Vu(a)),Gr!==null)for(a=Gr.return;a!==null;){var c=a;switch(Qu(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&rr();break;case 3:os(),Yr(De),Yr(ke),is();break;case 5:Fl(c);break;case 4:os();break;case 13:Yr(zn);break;case 19:Yr(zn);break;case 10:qs(c.type._context);break;case 22:case 23:jo()}a=a.return}if(Nr=t,Gr=t=ho(t.current,null),Mr=Fr=r,zr=0,pn=null,Hr=Ur=br=0,un=In=null,yi!==null){for(r=0;r<yi.length;r++)if(a=yi[r],c=a.interleaved,c!==null){a.interleaved=null;var E=c.next,M=a.pending;if(M!==null){var Y=M.next;M.next=E,c.next=Y}a.pending=c}yi=null}return t}function jr(t,r){do{var a=Gr;try{if(qu(),ul.current=dl,us){for(var c=Dn.memoizedState;c!==null;){var E=c.queue;E!==null&&(E.pending=null),c=c.next}us=!1}if(Fi=0,Jn=na=Dn=null,Ps=!1,po=0,rn.current=null,a===null||a.return===null){zr=1,pn=r,Gr=null;break}e:{var M=t,Y=a.return,pe=a,Pe=r;if(r=Mr,pe.flags|=32768,Pe!==null&&typeof Pe=="object"&&typeof Pe.then=="function"){var qe=Pe,Ot=pe,Rt=Ot.tag;if(!(Ot.mode&1)&&(Rt===0||Rt===11||Rt===15)){var St=Ot.alternate;St?(Ot.updateQueue=St.updateQueue,Ot.memoizedState=St.memoizedState,Ot.lanes=St.lanes):(Ot.updateQueue=null,Ot.memoizedState=null)}var Yt=zc(Y);if(Yt!==null){Yt.flags&=-257,Jl(Yt,Y,pe,M,r),Yt.mode&1&&Ql(M,qe,r),r=Yt,Pe=qe;var nr=r.updateQueue;if(nr===null){var ir=new Set;ir.add(Pe),r.updateQueue=ir}else nr.add(Pe);break e}else{if(!(r&1)){Ql(M,qe,r),wa();break e}Pe=Error(o(426))}}else if(Vr&&pe.mode&1){var ia=zc(Y);if(ia!==null){!(ia.flags&65536)&&(ia.flags|=256),Jl(ia,Y,pe,M,r),Xs(xu(Pe,pe));break e}}M=Pe=xu(Pe,pe),zr!==4&&(zr=2),In===null?In=[M]:In.push(M),M=Y;do{switch(M.tag){case 3:M.flags|=65536,r&=-r,M.lanes|=r;var $e=Xl(M,Pe,r);mc(M,$e);break e;case 1:pe=Pe;var Ne=M.type,We=M.stateNode;if(!(M.flags&128)&&(typeof Ne.getDerivedStateFromError=="function"||We!==null&&typeof We.componentDidCatch=="function"&&(qr===null||!qr.has(We)))){M.flags|=65536,r&=-r,M.lanes|=r;var Dt=Fc(M,pe,r);mc(M,Dt);break e}}M=M.return}while(M!==null)}ls(a)}catch(cr){r=cr,Gr===a&&a!==null&&(Gr=a=a.return);continue}break}while(1)}function Bn(){var t=Lr.current;return Lr.current=dl,t===null?dl:t}function wa(){(zr===0||zr===3||zr===2)&&(zr=4),Nr===null||!(br&268435455)&&!(Ur&268435455)||Fa(Nr,Mr)}function Ua(t,r){var a=sr;sr|=2;var c=Bn();(Nr!==t||Mr!==r)&&(An=null,Er(t,r));do try{ic();break}catch(E){jr(t,E)}while(1);if(qu(),sr=a,Lr.current=c,Gr!==null)throw Error(o(261));return Nr=null,Mr=0,zr}function ic(){for(;Gr!==null;)Bo(Gr)}function uc(){for(;Gr!==null&&!Fo();)Bo(Gr)}function Bo(t){var r=Xn(t.alternate,t,Fr);t.memoizedProps=t.pendingProps,r===null?ls(t):Gr=r,rn.current=null}function ls(t){var r=t;do{var a=r.alternate;if(t=r.return,r.flags&32768){if(a=Le(a,r),a!==null){a.flags&=32767,Gr=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{zr=6,Gr=null;return}}else if(a=ve(a,r,Fr),a!==null){Gr=a;return}if(r=r.sibling,r!==null){Gr=r;return}Gr=r=t}while(r!==null);zr===0&&(zr=5)}function to(t,r,a){var c=ce,E=on.transition;try{on.transition=null,ce=1,ml(t,r,a,c)}finally{on.transition=E,ce=c}return null}function ml(t,r,a,c){do $a();while(Ln!==null);if(sr&6)throw Error(o(327));a=t.finishedWork;var E=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(o(177));t.callbackNode=null,t.callbackPriority=0;var M=a.lanes|a.childLanes;if(te(t,M),t===Nr&&(Gr=Nr=null,Mr=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||Do||(Do=!0,la(ka,function(){return $a(),null})),M=(a.flags&15990)!==0,a.subtreeFlags&15990||M){M=on.transition,on.transition=null;var Y=ce;ce=1;var pe=sr;sr|=4,rn.current=null,yt(t,a),Ir(a,t),Tl(_i),Oi=!!Ts,_i=Ts=null,t.current=a,an(a,t,E),yo(),sr=pe,ce=Y,on.transition=M}else t.current=a;if(Do&&(Do=!1,Ln=t,jn=E),M=t.pendingLanes,M===0&&(qr=null),Ou(a.stateNode,c),Yn(t,mn()),r!==null)for(c=t.onRecoverableError,a=0;a<r.length;a++)E=r[a],c(E.value,{componentStack:E.stack,digest:E.digest});if(Ja)throw Ja=!1,t=qa,qa=null,t;return jn&1&&t.tag!==0&&$a(),M=t.pendingLanes,M&1?t===Pa?oa++:(oa=0,Pa=t):oa=0,Nn(),null}function $a(){if(Ln!==null){var t=Ae(jn),r=on.transition,a=ce;try{if(on.transition=null,ce=16>t?16:t,Ln===null)var c=!1;else{if(t=Ln,Ln=null,jn=0,sr&6)throw Error(o(331));var E=sr;for(sr|=4,Te=t.current;Te!==null;){var M=Te,Y=M.child;if(Te.flags&16){var pe=M.deletions;if(pe!==null){for(var Pe=0;Pe<pe.length;Pe++){var qe=pe[Pe];for(Te=qe;Te!==null;){var Ot=Te;switch(Ot.tag){case 0:case 11:case 15:xt(8,Ot,M)}var Rt=Ot.child;if(Rt!==null)Rt.return=Ot,Te=Rt;else for(;Te!==null;){Ot=Te;var St=Ot.sibling,Yt=Ot.return;if(Nt(Ot),Ot===qe){Te=null;break}if(St!==null){St.return=Yt,Te=St;break}Te=Yt}}}var nr=M.alternate;if(nr!==null){var ir=nr.child;if(ir!==null){nr.child=null;do{var ia=ir.sibling;ir.sibling=null,ir=ia}while(ir!==null)}}Te=M}}if(M.subtreeFlags&2064&&Y!==null)Y.return=M,Te=Y;else e:for(;Te!==null;){if(M=Te,M.flags&2048)switch(M.tag){case 0:case 11:case 15:xt(9,M,M.return)}var $e=M.sibling;if($e!==null){$e.return=M.return,Te=$e;break e}Te=M.return}}var Ne=t.current;for(Te=Ne;Te!==null;){Y=Te;var We=Y.child;if(Y.subtreeFlags&2064&&We!==null)We.return=Y,Te=We;else e:for(Y=Ne;Te!==null;){if(pe=Te,pe.flags&2048)try{switch(pe.tag){case 0:case 11:case 15:Pt(9,pe)}}catch(cr){wn(pe,pe.return,cr)}if(pe===Y){Te=null;break e}var Dt=pe.sibling;if(Dt!==null){Dt.return=pe.return,Te=Dt;break e}Te=pe.return}}if(sr=E,Nn(),ma&&typeof ma.onPostCommitFiberRoot=="function")try{ma.onPostCommitFiberRoot(wo,t)}catch(cr){}c=!0}return c}finally{ce=a,on.transition=r}}return!1}function mo(t,r,a){r=xu(a,r),r=Xl(t,r,1),t=fo(t,r,1),r=yn(),t!==null&&(Z(t,1,r),Yn(t,r))}function wn(t,r,a){if(t.tag===3)mo(t,t,a);else for(;r!==null;){if(r.tag===3){mo(r,t,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(qr===null||!qr.has(c))){t=xu(a,t),t=Fc(r,t,1),r=fo(r,t,1),t=yn(),r!==null&&(Z(r,1,t),Yn(r,t));break}}r=r.return}}function Ns(t,r,a){var c=t.pingCache;c!==null&&c.delete(r),r=yn(),t.pingedLanes|=t.suspendedLanes&a,Nr===t&&(Mr&a)===a&&(zr===4||zr===3&&(Mr&130023424)===Mr&&500>mn()-Qa?Er(t,0):Hr|=a),Yn(t,r)}function Ds(t,r){r===0&&(t.mode&1?(r=Ei,Ei<<=1,!(Ei&130023424)&&(Ei=4194304)):r=1);var a=yn();t=ko(t,r),t!==null&&(Z(t,r,a),Yn(t,a))}function en(t){var r=t.memoizedState,a=0;r!==null&&(a=r.retryLane),Ds(t,a)}function Xr(t,r){var a=0;switch(t.tag){case 13:var c=t.stateNode,E=t.memoizedState;E!==null&&(a=E.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(o(314))}c!==null&&c.delete(r),Ds(t,a)}var Xn;Xn=function(t,r,a){if(t!==null)if(t.memoizedProps!==r.pendingProps||De.current)aa=!0;else{if(!(t.lanes&a)&&!(r.flags&128))return aa=!1,O(t,r,a);aa=!!(t.flags&131072)}else aa=!1,Vr&&r.flags&1048576&&Is(r,du,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;l(t,r),t=r.pendingProps;var E=gt(r,ke.current);vu(r,a),E=sl(null,r,c,t,E,a);var M=$l();return r.flags|=1,typeof E=="object"&&E!==null&&typeof E.render=="function"&&E.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,_t(c)?(M=!0,Wr(r)):M=!1,r.memoizedState=E.state!==null&&E.state!==void 0?E.state:null,es(r),E.updater=nl,r.stateNode=E,E._reactInternals=r,Bl(r,c,t,a),r=tc(null,r,c,!0,M,a)):(r.tag=0,Vr&&M&&Xu(r),Ba(null,r,E,a),r=r.child),r;case 16:c=r.elementType;e:{switch(l(t,r),t=r.pendingProps,E=c._init,c=E(c._payload),r.type=c,E=r.tag=Kc(c),t=Vn(c,t),E){case 0:r=ec(null,r,c,t,a);break e;case 1:r=Hc(null,r,c,t,a);break e;case 11:r=od(null,r,c,t,a);break e;case 14:r=ks(null,r,c,Vn(c.type,t),a);break e}throw Error(o(306,c,""))}return r;case 0:return c=r.type,E=r.pendingProps,E=r.elementType===c?E:Vn(c,E),ec(t,r,c,E,a);case 1:return c=r.type,E=r.pendingProps,E=r.elementType===c?E:Vn(c,E),Hc(t,r,c,E,a);case 3:e:{if(Zc(r),t===null)throw Error(o(387));c=r.pendingProps,M=r.memoizedState,E=M.element,Dl(t,r),tl(r,c,null,a);var Y=r.memoizedState;if(c=Y.element,M.isDehydrated)if(M={element:c,isDehydrated:!1,cache:Y.cache,pendingSuspenseBoundaries:Y.pendingSuspenseBoundaries,transitions:Y.transitions},r.updateQueue.baseState=M,r.memoizedState=M,r.flags&256){E=xu(Error(o(423)),r),r=Wc(t,r,c,a,E);break e}else if(c!==E){E=xu(Error(o(424)),r),r=Wc(t,r,c,a,E);break e}else for(Tn=Ro(r.stateNode.containerInfo.firstChild),ga=r,Vr=!0,ra=null,a=bc(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ji(),c===E){r=w(t,r,a);break e}Ba(t,r,c,a)}r=r.child}return r;case 5:return wc(r),t===null&&fu(r),c=r.type,E=r.pendingProps,M=t!==null?t.memoizedProps:null,Y=E.children,Gu(c,E)?Y=null:M!==null&&Gu(c,M)&&(r.flags|=32),ql(t,r),Ba(t,r,Y,a),r.child;case 6:return t===null&&fu(r),null;case 13:return _s(t,r,a);case 4:return as(r,r.stateNode.containerInfo),c=r.pendingProps,t===null?r.child=gu(r,null,c,a):Ba(t,r,c,a),r.child;case 11:return c=r.type,E=r.pendingProps,E=r.elementType===c?E:Vn(c,E),od(t,r,c,E,a);case 7:return Ba(t,r,r.pendingProps,a),r.child;case 8:return Ba(t,r,r.pendingProps.children,a),r.child;case 12:return Ba(t,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,E=r.pendingProps,M=r.memoizedProps,Y=E.value,Ce(Qs,c._currentValue),c._currentValue=Y,M!==null)if(Na(M.value,Y)){if(M.children===E.children&&!De.current){r=w(t,r,a);break e}}else for(M=r.child,M!==null&&(M.return=r);M!==null;){var pe=M.dependencies;if(pe!==null){Y=M.child;for(var Pe=pe.firstContext;Pe!==null;){if(Pe.context===c){if(M.tag===1){Pe=Xa(-1,a&-a),Pe.tag=2;var qe=M.updateQueue;if(qe!==null){qe=qe.shared;var Ot=qe.pending;Ot===null?Pe.next=Pe:(Pe.next=Ot.next,Ot.next=Pe),qe.pending=Pe}}M.lanes|=a,Pe=M.alternate,Pe!==null&&(Pe.lanes|=a),pu(M.return,a,r),pe.lanes|=a;break}Pe=Pe.next}}else if(M.tag===10)Y=M.type===r.type?null:M.child;else if(M.tag===18){if(Y=M.return,Y===null)throw Error(o(341));Y.lanes|=a,pe=Y.alternate,pe!==null&&(pe.lanes|=a),pu(Y,a,r),Y=M.sibling}else Y=M.child;if(Y!==null)Y.return=M;else for(Y=M;Y!==null;){if(Y===r){Y=null;break}if(M=Y.sibling,M!==null){M.return=Y.return,Y=M;break}Y=Y.return}M=Y}Ba(t,r,E.children,a),r=r.child}return r;case 9:return E=r.type,c=r.pendingProps.children,vu(r,a),E=co(E),c=c(E),r.flags|=1,Ba(t,r,c,a),r.child;case 14:return c=r.type,E=Vn(c,r.pendingProps),E=Vn(c.type,E),ks(t,r,c,E,a);case 15:return Uc(t,r,r.type,r.pendingProps,a);case 17:return c=r.type,E=r.pendingProps,E=r.elementType===c?E:Vn(c,E),l(t,r),r.tag=1,_t(c)?(t=!0,Wr(r)):t=!1,vu(r,a),al(r,c,E),Bl(r,c,E,a),tc(null,r,c,!0,t,a);case 19:return Gc(t,r,a);case 22:return $c(t,r,a)}throw Error(o(156,r.tag))};function la(t,r){return go(t,r)}function qo(t,r,a,c){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,r,a,c){return new qo(t,r,a,c)}function Ls(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Kc(t){if(typeof t=="function")return Ls(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Se)return 11;if(t===S)return 14}return 2}function ho(t,r){var a=t.alternate;return a===null?(a=$n(t.tag,r,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=r,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,r=t.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function cs(t,r,a,c,E,M){var Y=2;if(c=t,typeof t=="function")Ls(t)&&(Y=1);else if(typeof t=="string")Y=5;else e:switch(t){case q:return Su(a.children,E,M,r);case Q:Y=8,E|=8;break;case X:return t=$n(12,a,r,E|2),t.elementType=X,t.lanes=M,t;case Be:return t=$n(13,a,r,E),t.elementType=Be,t.lanes=M,t;case ue:return t=$n(19,a,r,E),t.elementType=ue,t.lanes=M,t;case I:return hl(a,E,M,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ie:Y=10;break e;case Oe:Y=9;break e;case Se:Y=11;break e;case S:Y=14;break e;case g:Y=16,c=null;break e}throw Error(o(130,t==null?t:typeof t,""))}return r=$n(Y,a,r,E),r.elementType=t,r.type=c,r.lanes=M,r}function Su(t,r,a,c){return t=$n(7,t,c,r),t.lanes=a,t}function hl(t,r,a,c){return t=$n(22,t,c,r),t.elementType=I,t.lanes=a,t.stateNode={isHidden:!1},t}function sc(t,r,a){return t=$n(6,t,null,r),t.lanes=a,t}function gl(t,r,a){return r=$n(4,t.children!==null?t.children:[],t.key,r),r.lanes=a,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function yl(t,r,a,c,E){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=m(0),this.expirationTimes=m(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=m(0),this.identifierPrefix=c,this.onRecoverableError=E,this.mutableSourceEagerHydrationData=null}function lc(t,r,a,c,E,M,Y,pe,Pe){return t=new yl(t,r,a,pe,Pe),r===1?(r=1,M===!0&&(r|=8)):r=0,M=$n(3,null,null,r),t.current=M,M.stateNode=t,M.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},es(M),t}function id(t,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:V,key:c==null?null:""+c,children:t,containerInfo:r,implementation:a}}function Vc(t){if(!t)return Ke;t=t._reactInternals;e:{if(dn(t)!==t||t.tag!==1)throw Error(o(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(_t(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(o(171))}if(t.tag===1){var a=t.type;if(_t(a))return ea(t,a,r)}return r}function cc(t,r,a,c,E,M,Y,pe,Pe){return t=lc(a,c,!0,t,E,M,Y,pe,Pe),t.context=Vc(null),a=t.current,c=yn(),E=kn(a),M=Xa(c,E),M.callback=r!=null?r:null,fo(a,M,E),t.current.lanes=E,Z(t,E,c),Yn(t,c),t}function bl(t,r,a,c){var E=r.current,M=yn(),Y=kn(E);return a=Vc(a),r.context===null?r.context=a:r.pendingContext=a,r=Xa(M,Y),r.payload={element:t},c=c===void 0?null:c,c!==null&&(r.callback=c),t=fo(E,r,Y),t!==null&&(bn(t,E,Y,M),Cs(t,E,Y)),Y}function wl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Yc(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<r?a:r}}function dc(t,r){Yc(t,r),(t=t.alternate)&&Yc(t,r)}function ud(){return null}var Xc=typeof reportError=="function"?reportError:function(t){console.error(t)};function Fn(t){this._internalRoot=t}nn.prototype.render=Fn.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(o(409));bl(t,r,null,null)},nn.prototype.unmount=Fn.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;Ra(function(){bl(null,t,null,null)}),r[ha]=null}};function nn(t){this._internalRoot=t}nn.prototype.unstable_scheduleHydration=function(t){if(t){var r=rt();t={blockedOn:null,target:t,priority:r};for(var a=0;a<Za.length&&r!==0&&r<Za[a].priority;a++);Za.splice(a,0,t),a===0&&ti(t)}};function Cn(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ha(){}function Eu(t,r,a,c,E){if(E){if(typeof c=="function"){var M=c;c=function(){var qe=wl(Y);M.call(qe)}}var Y=cc(r,c,t,0,null,!1,!1,"",Ha);return t._reactRootContainer=Y,t[ha]=Y.current,vi(t.nodeType===8?t.parentNode:t),Ra(),Y}for(;E=t.lastChild;)t.removeChild(E);if(typeof c=="function"){var pe=c;c=function(){var qe=wl(Pe);pe.call(qe)}}var Pe=lc(t,0,!1,null,null,!1,!1,"",Ha);return t._reactRootContainer=Pe,t[ha]=Pe.current,vi(t.nodeType===8?t.parentNode:t),Ra(function(){bl(r,Pe,a,c)}),Pe}function Hi(t,r,a,c,E){var M=a._reactRootContainer;if(M){var Y=M;if(typeof E=="function"){var pe=E;E=function(){var Pe=wl(Y);pe.call(Pe)}}bl(r,Y,t,E)}else Y=Eu(a,r,t,E,c);return wl(Y)}Je=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var a=So(r.pendingLanes);a!==0&&(ae(r,a|1),Yn(r,mn()),!(sr&6)&&(ba=mn()+500,Nn()))}break;case 13:Ra(function(){var c=ko(t,1);if(c!==null){var E=yn();bn(c,t,1,E)}}),dc(t,1)}},Et=function(t){if(t.tag===13){var r=ko(t,134217728);if(r!==null){var a=yn();bn(r,t,134217728,a)}dc(t,134217728)}},vr=function(t){if(t.tag===13){var r=kn(t),a=ko(t,r);if(a!==null){var c=yn();bn(a,t,r,c)}dc(t,r)}},rt=function(){return ce},tr=function(t,r){var a=ce;try{return ce=t,r()}finally{ce=a}},It=function(t,r,a){switch(r){case"input":if(be(t,a),r=a.name,a.type==="radio"&&r!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==t&&c.form===t.form){var E=Yu(c);if(!E)throw Error(o(90));pr(c),be(c,E)}}}break;case"textarea":Me(t,a);break;case"select":r=a.value,r!=null&&me(t,!!a.multiple,r,!1)}},kt=Lo,Wt=Ra;var sd={usingClientEntryPoint:!1,Events:[lu,cu,Yu,bt,ot,Lo]},fc={findFiberByHostInstance:Ga,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},vd={bundleType:fc.bundleType,version:fc.version,rendererPackageName:fc.rendererPackageName,rendererConfig:fc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Sa(t),t===null?null:t.stateNode},findFiberByHostInstance:fc.findFiberByHostInstance||ud,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Qc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qc.isDisabled&&Qc.supportsFiber)try{wo=Qc.inject(vd),ma=Qc}catch(t){}}f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sd,f.createPortal=function(t,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cn(r))throw Error(o(200));return id(t,r,null,a)},f.createRoot=function(t,r){if(!Cn(t))throw Error(o(299));var a=!1,c="",E=Xc;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(E=r.onRecoverableError)),r=lc(t,1,!1,null,null,a,!1,c,E),t[ha]=r.current,vi(t.nodeType===8?t.parentNode:t),new Fn(r)},f.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=Sa(r),t=t===null?null:t.stateNode,t},f.flushSync=function(t){return Ra(t)},f.hydrate=function(t,r,a){if(!fa(r))throw Error(o(200));return Hi(null,t,r,!0,a)},f.hydrateRoot=function(t,r,a){if(!Cn(t))throw Error(o(405));var c=a!=null&&a.hydratedSources||null,E=!1,M="",Y=Xc;if(a!=null&&(a.unstable_strictMode===!0&&(E=!0),a.identifierPrefix!==void 0&&(M=a.identifierPrefix),a.onRecoverableError!==void 0&&(Y=a.onRecoverableError)),r=cc(r,null,t,1,a!=null?a:null,E,!1,M,Y),t[ha]=r.current,vi(t),c)for(t=0;t<c.length;t++)a=c[t],E=a._getVersion,E=E(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,E]:r.mutableSourceEagerHydrationData.push(a,E);return new nn(r)},f.render=function(t,r,a){if(!fa(r))throw Error(o(200));return Hi(null,t,r,!1,a)},f.unmountComponentAtNode=function(t){if(!fa(t))throw Error(o(40));return t._reactRootContainer?(Ra(function(){Hi(null,null,t,!1,function(){t._reactRootContainer=null,t[ha]=null})}),!0):!1},f.unstable_batchedUpdates=Lo,f.unstable_renderSubtreeIntoContainer=function(t,r,a,c){if(!fa(a))throw Error(o(200));if(t==null||t._reactInternals===void 0)throw Error(o(38));return Hi(t,r,a,!1,c)},f.version="18.2.0-next-9e3b772b8-20220608"},20745:function(s,f,e){"use strict";var i=e(73935);if(!0)f.createRoot=i.createRoot,f.hydrateRoot=i.hydrateRoot;else var u},73935:function(s,f,e){"use strict";function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(u){console.error(u)}}i(),s.exports=e(64448)},35800:function(s,f,e){(function(i,u){u(f,e(67294))})(this,function(i,u){"use strict";function o(T){if(T&&T.__esModule)return T;var A=Object.create(null);return T&&Object.keys(T).forEach(function(C){if(C!=="default"){var $=Object.getOwnPropertyDescriptor(T,C);Object.defineProperty(A,C,$.get?$:{enumerable:!0,get:function(){return T[C]}})}}),A.default=T,Object.freeze(A)}var n=o(u);function d(T,A){return d=Object.setPrototypeOf||function($,B){return $.__proto__=B,$},d(T,A)}function v(T,A){T.prototype=Object.create(A.prototype),T.prototype.constructor=T,d(T,A)}var p=function(A,C){return A===void 0&&(A=[]),C===void 0&&(C=[]),A.length!==C.length||A.some(function($,B){return!Object.is($,C[B])})},h={error:null},x=function(T){v(A,T);function A(){for(var $,B=arguments.length,L=new Array(B),z=0;z<B;z++)L[z]=arguments[z];return $=T.call.apply(T,[this].concat(L))||this,$.state=h,$.resetErrorBoundary=function(){for(var H,W=arguments.length,R=new Array(W),F=0;F<W;F++)R[F]=arguments[F];$.props.onReset==null||(H=$.props).onReset.apply(H,R),$.reset()},$}A.getDerivedStateFromError=function(B){return{error:B}};var C=A.prototype;return C.reset=function(){this.setState(h)},C.componentDidCatch=function(B,L){var z,H;(z=(H=this.props).onError)==null||z.call(H,B,L)},C.componentDidUpdate=function(B,L){var z=this.state.error,H=this.props.resetKeys;if(z!==null&&L.error!==null&&p(B.resetKeys,H)){var W,R;(W=(R=this.props).onResetKeysChange)==null||W.call(R,B.resetKeys,H),this.reset()}},C.render=function(){var B=this.state.error,L=this.props,z=L.fallbackRender,H=L.FallbackComponent,W=L.fallback;if(B!==null){var R={error:B,resetErrorBoundary:this.resetErrorBoundary};if(n.isValidElement(W))return W;if(typeof z=="function")return z(R);if(H)return n.createElement(H,R);throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return this.props.children},A}(n.Component);function y(T,A){var C=function(L){return n.createElement(x,A,n.createElement(T,L))},$=T.displayName||T.name||"Unknown";return C.displayName="withErrorBoundary("+$+")",C}function b(T){var A=n.useState(null),C=A[0],$=A[1];if(T!=null)throw T;if(C!=null)throw C;return $}i.ErrorBoundary=x,i.useErrorHandler=b,i.withErrorBoundary=y,Object.defineProperty(i,"__esModule",{value:!0})})},69590:function(s){var f=typeof Element!="undefined",e=typeof Map=="function",i=typeof Set=="function",u=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function o(n,d){if(n===d)return!0;if(n&&d&&typeof n=="object"&&typeof d=="object"){if(n.constructor!==d.constructor)return!1;var v,p,h;if(Array.isArray(n)){if(v=n.length,v!=d.length)return!1;for(p=v;p--!==0;)if(!o(n[p],d[p]))return!1;return!0}var x;if(e&&n instanceof Map&&d instanceof Map){if(n.size!==d.size)return!1;for(x=n.entries();!(p=x.next()).done;)if(!d.has(p.value[0]))return!1;for(x=n.entries();!(p=x.next()).done;)if(!o(p.value[1],d.get(p.value[0])))return!1;return!0}if(i&&n instanceof Set&&d instanceof Set){if(n.size!==d.size)return!1;for(x=n.entries();!(p=x.next()).done;)if(!d.has(p.value[0]))return!1;return!0}if(u&&ArrayBuffer.isView(n)&&ArrayBuffer.isView(d)){if(v=n.length,v!=d.length)return!1;for(p=v;p--!==0;)if(n[p]!==d[p])return!1;return!0}if(n.constructor===RegExp)return n.source===d.source&&n.flags===d.flags;if(n.valueOf!==Object.prototype.valueOf&&typeof n.valueOf=="function"&&typeof d.valueOf=="function")return n.valueOf()===d.valueOf();if(n.toString!==Object.prototype.toString&&typeof n.toString=="function"&&typeof d.toString=="function")return n.toString()===d.toString();if(h=Object.keys(n),v=h.length,v!==Object.keys(d).length)return!1;for(p=v;p--!==0;)if(!Object.prototype.hasOwnProperty.call(d,h[p]))return!1;if(f&&n instanceof Element)return!1;for(p=v;p--!==0;)if(!((h[p]==="_owner"||h[p]==="__v"||h[p]==="__o")&&n.$$typeof)&&!o(n[h[p]],d[h[p]]))return!1;return!0}return n!==n&&d!==d}s.exports=function(d,v){try{return o(d,v)}catch(p){if((p.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw p}}},70405:function(s,f,e){"use strict";e.d(f,{B6:function(){return Ve},ql:function(){return tn}});var i=e(67294),u=e(45697),o=e.n(u),n=e(69590),d=e.n(n),v=e(41143),p=e.n(v),h=e(96774),x=e.n(h);function y(){return y=Object.assign||function(tt){for(var Ie=1;Ie<arguments.length;Ie++){var be=arguments[Ie];for(var ye in be)Object.prototype.hasOwnProperty.call(be,ye)&&(tt[ye]=be[ye])}return tt},y.apply(this,arguments)}function b(tt,Ie){tt.prototype=Object.create(Ie.prototype),tt.prototype.constructor=tt,T(tt,Ie)}function T(tt,Ie){return T=Object.setPrototypeOf||function(be,ye){return be.__proto__=ye,be},T(tt,Ie)}function A(tt,Ie){if(tt==null)return{};var be,ye,je={},fe=Object.keys(tt);for(ye=0;ye<fe.length;ye++)Ie.indexOf(be=fe[ye])>=0||(je[be]=tt[be]);return je}var C={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},$={rel:["amphtml","canonical","alternate"]},B={type:["application/ld+json"]},L={charset:"",name:["robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},z=Object.keys(C).map(function(tt){return C[tt]}),H={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},W=Object.keys(H).reduce(function(tt,Ie){return tt[H[Ie]]=Ie,tt},{}),R=function(tt,Ie){for(var be=tt.length-1;be>=0;be-=1){var ye=tt[be];if(Object.prototype.hasOwnProperty.call(ye,Ie))return ye[Ie]}return null},F=function(tt){var Ie=R(tt,C.TITLE),be=R(tt,"titleTemplate");if(Array.isArray(Ie)&&(Ie=Ie.join("")),be&&Ie)return be.replace(/%s/g,function(){return Ie});var ye=R(tt,"defaultTitle");return Ie||ye||void 0},V=function(tt){return R(tt,"onChangeClientState")||function(){}},q=function(tt,Ie){return Ie.filter(function(be){return be[tt]!==void 0}).map(function(be){return be[tt]}).reduce(function(be,ye){return y({},be,ye)},{})},Q=function(tt,Ie){return Ie.filter(function(be){return be[C.BASE]!==void 0}).map(function(be){return be[C.BASE]}).reverse().reduce(function(be,ye){if(!be.length)for(var je=Object.keys(ye),fe=0;fe<je.length;fe+=1){var me=je[fe].toLowerCase();if(tt.indexOf(me)!==-1&&ye[me])return be.concat(ye)}return be},[])},X=function(tt,Ie,be){var ye={};return be.filter(function(je){return!!Array.isArray(je[tt])||(je[tt]!==void 0&&console&&typeof console.warn=="function"&&console.warn("Helmet: "+tt+' should be of type "Array". Instead found type "'+typeof je[tt]+'"'),!1)}).map(function(je){return je[tt]}).reverse().reduce(function(je,fe){var me={};fe.filter(function(it){for(var ft,Mt=Object.keys(it),Ft=0;Ft<Mt.length;Ft+=1){var ee=Mt[Ft],we=ee.toLowerCase();Ie.indexOf(we)===-1||ft==="rel"&&it[ft].toLowerCase()==="canonical"||we==="rel"&&it[we].toLowerCase()==="stylesheet"||(ft=we),Ie.indexOf(ee)===-1||ee!=="innerHTML"&&ee!=="cssText"&&ee!=="itemprop"||(ft=ee)}if(!ft||!it[ft])return!1;var se=it[ft].toLowerCase();return ye[ft]||(ye[ft]={}),me[ft]||(me[ft]={}),!ye[ft][se]&&(me[ft][se]=!0,!0)}).reverse().forEach(function(it){return je.push(it)});for(var de=Object.keys(me),ge=0;ge<de.length;ge+=1){var Me=de[ge],st=y({},ye[Me],me[Me]);ye[Me]=st}return je},[]).reverse()},ie=function(tt,Ie){if(Array.isArray(tt)&&tt.length){for(var be=0;be<tt.length;be+=1)if(tt[be][Ie])return!0}return!1},Oe=function(tt){return Array.isArray(tt)?tt.join(""):tt},Se=function(tt,Ie){return Array.isArray(tt)?tt.reduce(function(be,ye){return function(je,fe){for(var me=Object.keys(je),de=0;de<me.length;de+=1)if(fe[me[de]]&&fe[me[de]].includes(je[me[de]]))return!0;return!1}(ye,Ie)?be.priority.push(ye):be.default.push(ye),be},{priority:[],default:[]}):{default:tt}},Be=function(tt,Ie){var be;return y({},tt,((be={})[Ie]=void 0,be))},ue=[C.NOSCRIPT,C.SCRIPT,C.STYLE],S=function(tt,Ie){return Ie===void 0&&(Ie=!0),Ie===!1?String(tt):String(tt).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},g=function(tt){return Object.keys(tt).reduce(function(Ie,be){var ye=tt[be]!==void 0?be+'="'+tt[be]+'"':""+be;return Ie?Ie+" "+ye:ye},"")},I=function(tt,Ie){return Ie===void 0&&(Ie={}),Object.keys(tt).reduce(function(be,ye){return be[H[ye]||ye]=tt[ye],be},Ie)},k=function(tt,Ie){return Ie.map(function(be,ye){var je,fe=((je={key:ye})["data-rh"]=!0,je);return Object.keys(be).forEach(function(me){var de=H[me]||me;de==="innerHTML"||de==="cssText"?fe.dangerouslySetInnerHTML={__html:be.innerHTML||be.cssText}:fe[de]=be[me]}),i.createElement(tt,fe)})},P=function(tt,Ie,be){switch(tt){case C.TITLE:return{toComponent:function(){return je=Ie.titleAttributes,(fe={key:ye=Ie.title})["data-rh"]=!0,me=I(je,fe),[i.createElement(C.TITLE,me,ye)];var ye,je,fe,me},toString:function(){return function(ye,je,fe,me){var de=g(fe),ge=Oe(je);return de?"<"+ye+' data-rh="true" '+de+">"+S(ge,me)+"</"+ye+">":"<"+ye+' data-rh="true">'+S(ge,me)+"</"+ye+">"}(tt,Ie.title,Ie.titleAttributes,be)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return I(Ie)},toString:function(){return g(Ie)}};default:return{toComponent:function(){return k(tt,Ie)},toString:function(){return function(ye,je,fe){return je.reduce(function(me,de){var ge=Object.keys(de).filter(function(it){return!(it==="innerHTML"||it==="cssText")}).reduce(function(it,ft){var Mt=de[ft]===void 0?ft:ft+'="'+S(de[ft],fe)+'"';return it?it+" "+Mt:Mt},""),Me=de.innerHTML||de.cssText||"",st=ue.indexOf(ye)===-1;return me+"<"+ye+' data-rh="true" '+ge+(st?"/>":">"+Me+"</"+ye+">")},"")}(tt,Ie,be)}}}},D=function(tt){var Ie=tt.baseTag,be=tt.bodyAttributes,ye=tt.encode,je=tt.htmlAttributes,fe=tt.noscriptTags,me=tt.styleTags,de=tt.title,ge=de===void 0?"":de,Me=tt.titleAttributes,st=tt.linkTags,it=tt.metaTags,ft=tt.scriptTags,Mt={toComponent:function(){},toString:function(){return""}};if(tt.prioritizeSeoTags){var Ft=function(ee){var we=ee.linkTags,se=ee.scriptTags,_e=ee.encode,et=Se(ee.metaTags,L),at=Se(we,$),ut=Se(se,B);return{priorityMethods:{toComponent:function(){return[].concat(k(C.META,et.priority),k(C.LINK,at.priority),k(C.SCRIPT,ut.priority))},toString:function(){return P(C.META,et.priority,_e)+" "+P(C.LINK,at.priority,_e)+" "+P(C.SCRIPT,ut.priority,_e)}},metaTags:et.default,linkTags:at.default,scriptTags:ut.default}}(tt);Mt=Ft.priorityMethods,st=Ft.linkTags,it=Ft.metaTags,ft=Ft.scriptTags}return{priority:Mt,base:P(C.BASE,Ie,ye),bodyAttributes:P("bodyAttributes",be,ye),htmlAttributes:P("htmlAttributes",je,ye),link:P(C.LINK,st,ye),meta:P(C.META,it,ye),noscript:P(C.NOSCRIPT,fe,ye),script:P(C.SCRIPT,ft,ye),style:P(C.STYLE,me,ye),title:P(C.TITLE,{title:ge,titleAttributes:Me},ye)}},oe=[],he=function(tt,Ie){var be=this;Ie===void 0&&(Ie=typeof document!="undefined"),this.instances=[],this.value={setHelmet:function(ye){be.context.helmet=ye},helmetInstances:{get:function(){return be.canUseDOM?oe:be.instances},add:function(ye){(be.canUseDOM?oe:be.instances).push(ye)},remove:function(ye){var je=(be.canUseDOM?oe:be.instances).indexOf(ye);(be.canUseDOM?oe:be.instances).splice(je,1)}}},this.context=tt,this.canUseDOM=Ie,Ie||(tt.helmet=D({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))},Re=i.createContext({}),re=o().shape({setHelmet:o().func,helmetInstances:o().shape({get:o().func,add:o().func,remove:o().func})}),Ee=typeof document!="undefined",Ve=function(tt){function Ie(be){var ye;return(ye=tt.call(this,be)||this).helmetData=new he(ye.props.context,Ie.canUseDOM),ye}return b(Ie,tt),Ie.prototype.render=function(){return i.createElement(Re.Provider,{value:this.helmetData.value},this.props.children)},Ie}(i.Component);Ve.canUseDOM=Ee,Ve.propTypes={context:o().shape({helmet:o().shape()}),children:o().node.isRequired},Ve.defaultProps={context:{}},Ve.displayName="HelmetProvider";var Xe=function(tt,Ie){var be,ye=document.head||document.querySelector(C.HEAD),je=ye.querySelectorAll(tt+"[data-rh]"),fe=[].slice.call(je),me=[];return Ie&&Ie.length&&Ie.forEach(function(de){var ge=document.createElement(tt);for(var Me in de)Object.prototype.hasOwnProperty.call(de,Me)&&(Me==="innerHTML"?ge.innerHTML=de.innerHTML:Me==="cssText"?ge.styleSheet?ge.styleSheet.cssText=de.cssText:ge.appendChild(document.createTextNode(de.cssText)):ge.setAttribute(Me,de[Me]===void 0?"":de[Me]));ge.setAttribute("data-rh","true"),fe.some(function(st,it){return be=it,ge.isEqualNode(st)})?fe.splice(be,1):me.push(ge)}),fe.forEach(function(de){return de.parentNode.removeChild(de)}),me.forEach(function(de){return ye.appendChild(de)}),{oldTags:fe,newTags:me}},Ze=function(tt,Ie){var be=document.getElementsByTagName(tt)[0];if(be){for(var ye=be.getAttribute("data-rh"),je=ye?ye.split(","):[],fe=[].concat(je),me=Object.keys(Ie),de=0;de<me.length;de+=1){var ge=me[de],Me=Ie[ge]||"";be.getAttribute(ge)!==Me&&be.setAttribute(ge,Me),je.indexOf(ge)===-1&&je.push(ge);var st=fe.indexOf(ge);st!==-1&&fe.splice(st,1)}for(var it=fe.length-1;it>=0;it-=1)be.removeAttribute(fe[it]);je.length===fe.length?be.removeAttribute("data-rh"):be.getAttribute("data-rh")!==me.join(",")&&be.setAttribute("data-rh",me.join(","))}},ht=function(tt,Ie){var be=tt.baseTag,ye=tt.htmlAttributes,je=tt.linkTags,fe=tt.metaTags,me=tt.noscriptTags,de=tt.onChangeClientState,ge=tt.scriptTags,Me=tt.styleTags,st=tt.title,it=tt.titleAttributes;Ze(C.BODY,tt.bodyAttributes),Ze(C.HTML,ye),function(ee,we){ee!==void 0&&document.title!==ee&&(document.title=Oe(ee)),Ze(C.TITLE,we)}(st,it);var ft={baseTag:Xe(C.BASE,be),linkTags:Xe(C.LINK,je),metaTags:Xe(C.META,fe),noscriptTags:Xe(C.NOSCRIPT,me),scriptTags:Xe(C.SCRIPT,ge),styleTags:Xe(C.STYLE,Me)},Mt={},Ft={};Object.keys(ft).forEach(function(ee){var we=ft[ee],se=we.newTags,_e=we.oldTags;se.length&&(Mt[ee]=se),_e.length&&(Ft[ee]=ft[ee].oldTags)}),Ie&&Ie(),de(tt,Mt,Ft)},Ct=null,Bt=function(tt){function Ie(){for(var ye,je=arguments.length,fe=new Array(je),me=0;me<je;me++)fe[me]=arguments[me];return(ye=tt.call.apply(tt,[this].concat(fe))||this).rendered=!1,ye}b(Ie,tt);var be=Ie.prototype;return be.shouldComponentUpdate=function(ye){return!x()(ye,this.props)},be.componentDidUpdate=function(){this.emitChange()},be.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},be.emitChange=function(){var ye,je,fe=this.props.context,me=fe.setHelmet,de=null,ge=(ye=fe.helmetInstances.get().map(function(Me){var st=y({},Me.props);return delete st.context,st}),{baseTag:Q(["href"],ye),bodyAttributes:q("bodyAttributes",ye),defer:R(ye,"defer"),encode:R(ye,"encodeSpecialCharacters"),htmlAttributes:q("htmlAttributes",ye),linkTags:X(C.LINK,["rel","href"],ye),metaTags:X(C.META,["name","charset","http-equiv","property","itemprop"],ye),noscriptTags:X(C.NOSCRIPT,["innerHTML"],ye),onChangeClientState:V(ye),scriptTags:X(C.SCRIPT,["src","innerHTML"],ye),styleTags:X(C.STYLE,["cssText"],ye),title:F(ye),titleAttributes:q("titleAttributes",ye),prioritizeSeoTags:ie(ye,"prioritizeSeoTags")});Ve.canUseDOM?(je=ge,Ct&&cancelAnimationFrame(Ct),je.defer?Ct=requestAnimationFrame(function(){ht(je,function(){Ct=null})}):(ht(je),Ct=null)):D&&(de=D(ge)),me(de)},be.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},be.render=function(){return this.init(),null},Ie}(i.Component);Bt.propTypes={context:re.isRequired},Bt.displayName="HelmetDispatcher";var pr=["children"],$r=["children"],tn=function(tt){function Ie(){return tt.apply(this,arguments)||this}b(Ie,tt);var be=Ie.prototype;return be.shouldComponentUpdate=function(ye){return!d()(Be(this.props,"helmetData"),Be(ye,"helmetData"))},be.mapNestedChildrenToProps=function(ye,je){if(!je)return null;switch(ye.type){case C.SCRIPT:case C.NOSCRIPT:return{innerHTML:je};case C.STYLE:return{cssText:je};default:throw new Error("<"+ye.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},be.flattenArrayTypeChildren=function(ye){var je,fe=ye.child,me=ye.arrayTypeChildren;return y({},me,((je={})[fe.type]=[].concat(me[fe.type]||[],[y({},ye.newChildProps,this.mapNestedChildrenToProps(fe,ye.nestedChildren))]),je))},be.mapObjectTypeChildren=function(ye){var je,fe,me=ye.child,de=ye.newProps,ge=ye.newChildProps,Me=ye.nestedChildren;switch(me.type){case C.TITLE:return y({},de,((je={})[me.type]=Me,je.titleAttributes=y({},ge),je));case C.BODY:return y({},de,{bodyAttributes:y({},ge)});case C.HTML:return y({},de,{htmlAttributes:y({},ge)});default:return y({},de,((fe={})[me.type]=y({},ge),fe))}},be.mapArrayTypeChildrenToProps=function(ye,je){var fe=y({},je);return Object.keys(ye).forEach(function(me){var de;fe=y({},fe,((de={})[me]=ye[me],de))}),fe},be.warnOnInvalidChildren=function(ye,je){return p()(z.some(function(fe){return ye.type===fe}),typeof ye.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+z.join(", ")+" are allowed. Helmet does not support rendering <"+ye.type+"> elements. Refer to our API for more information."),p()(!je||typeof je=="string"||Array.isArray(je)&&!je.some(function(fe){return typeof fe!="string"}),"Helmet expects a string as a child of <"+ye.type+">. Did you forget to wrap your children in braces? ( <"+ye.type+">{``}</"+ye.type+"> ) Refer to our API for more information."),!0},be.mapChildrenToProps=function(ye,je){var fe=this,me={};return i.Children.forEach(ye,function(de){if(de&&de.props){var ge=de.props,Me=ge.children,st=A(ge,pr),it=Object.keys(st).reduce(function(Mt,Ft){return Mt[W[Ft]||Ft]=st[Ft],Mt},{}),ft=de.type;switch(typeof ft=="symbol"?ft=ft.toString():fe.warnOnInvalidChildren(de,Me),ft){case C.FRAGMENT:je=fe.mapChildrenToProps(Me,je);break;case C.LINK:case C.META:case C.NOSCRIPT:case C.SCRIPT:case C.STYLE:me=fe.flattenArrayTypeChildren({child:de,arrayTypeChildren:me,newChildProps:it,nestedChildren:Me});break;default:je=fe.mapObjectTypeChildren({child:de,newProps:je,newChildProps:it,nestedChildren:Me})}}}),this.mapArrayTypeChildrenToProps(me,je)},be.render=function(){var ye=this.props,je=ye.children,fe=A(ye,$r),me=y({},fe),de=fe.helmetData;return je&&(me=this.mapChildrenToProps(je,me)),!de||de instanceof he||(de=new he(de.context,de.instances)),de?i.createElement(Bt,y({},me,{context:de.value,helmetData:void 0})):i.createElement(Re.Consumer,null,function(ge){return i.createElement(Bt,y({},me,{context:ge}))})},Ie}(i.Component);tn.propTypes={base:o().object,bodyAttributes:o().object,children:o().oneOfType([o().arrayOf(o().node),o().node]),defaultTitle:o().string,defer:o().bool,encodeSpecialCharacters:o().bool,htmlAttributes:o().object,link:o().arrayOf(o().object),meta:o().arrayOf(o().object),noscript:o().arrayOf(o().object),onChangeClientState:o().func,script:o().arrayOf(o().object),style:o().arrayOf(o().object),title:o().string,titleAttributes:o().object,titleTemplate:o().string,prioritizeSeoTags:o().bool,helmetData:o().object},tn.defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1},tn.displayName="Helmet"},96974:function(s,f,e){"use strict";e.d(f,{F0:function(){return Ie},Fg:function(){return $r},Gn:function(){return y},TH:function(){return oe},UO:function(){return Ze},V$:function(){return Ct},WU:function(){return ht},fp:function(){return b},j3:function(){return tn},oQ:function(){return P},pC:function(){return Xe},s0:function(){return re}});var i=e(55648),u=e(67294);const o=(0,u.createContext)(null),n=(0,u.createContext)(null),d=(0,u.createContext)({outlet:null,matches:[]});function v(fe,me){if(!fe)throw new Error(me)}function p(fe,me){if(!fe){typeof console!="undefined"&&console.warn(me);try{throw new Error(me)}catch(de){}}}const h={};function x(fe,me,de){!me&&!h[fe]&&(h[fe]=!0)}function y(fe,me){return me===void 0&&(me={}),fe.replace(/:(\w+)/g,(de,ge)=>(me[ge]==null&&v(!1),me[ge])).replace(/\/*\*$/,de=>me["*"]==null?"":me["*"].replace(/^\/*/,"/"))}function b(fe,me,de){de===void 0&&(de="/");let ge=typeof me=="string"?(0,i.cP)(me):me,Me=ue(ge.pathname||"/",de);if(Me==null)return null;let st=T(fe);A(st);let it=null;for(let ft=0;it==null&&ft<st.length;++ft)it=V(st[ft],Me);return it}function T(fe,me,de,ge){return me===void 0&&(me=[]),de===void 0&&(de=[]),ge===void 0&&(ge=""),fe.forEach((Me,st)=>{let it={relativePath:Me.path||"",caseSensitive:Me.caseSensitive===!0,childrenIndex:st,route:Me};it.relativePath.startsWith("/")&&(it.relativePath.startsWith(ge)||v(!1),it.relativePath=it.relativePath.slice(ge.length));let ft=S([ge,it.relativePath]),Mt=de.concat(it);Me.children&&Me.children.length>0&&(Me.index===!0&&v(!1),T(Me.children,me,Mt,ft)),!(Me.path==null&&!Me.index)&&me.push({path:ft,score:R(ft,Me.index),routesMeta:Mt})}),me}function A(fe){fe.sort((me,de)=>me.score!==de.score?de.score-me.score:F(me.routesMeta.map(ge=>ge.childrenIndex),de.routesMeta.map(ge=>ge.childrenIndex)))}const C=/^:\w+$/,$=3,B=2,L=1,z=10,H=-2,W=fe=>fe==="*";function R(fe,me){let de=fe.split("/"),ge=de.length;return de.some(W)&&(ge+=H),me&&(ge+=B),de.filter(Me=>!W(Me)).reduce((Me,st)=>Me+(C.test(st)?$:st===""?L:z),ge)}function F(fe,me){return fe.length===me.length&&fe.slice(0,-1).every((ge,Me)=>ge===me[Me])?fe[fe.length-1]-me[me.length-1]:0}function V(fe,me){let{routesMeta:de}=fe,ge={},Me="/",st=[];for(let it=0;it<de.length;++it){let ft=de[it],Mt=it===de.length-1,Ft=Me==="/"?me:me.slice(Me.length)||"/",ee=q({path:ft.relativePath,caseSensitive:ft.caseSensitive,end:Mt},Ft);if(!ee)return null;Object.assign(ge,ee.params);let we=ft.route;st.push({params:ge,pathname:S([Me,ee.pathname]),pathnameBase:g(S([Me,ee.pathnameBase])),route:we}),ee.pathnameBase!=="/"&&(Me=S([Me,ee.pathnameBase]))}return st}function q(fe,me){typeof fe=="string"&&(fe={path:fe,caseSensitive:!1,end:!0});let[de,ge]=Q(fe.path,fe.caseSensitive,fe.end),Me=me.match(de);if(!Me)return null;let st=Me[0],it=st.replace(/(.)\/+$/,"$1"),ft=Me.slice(1);return{params:ge.reduce((Ft,ee,we)=>{if(ee==="*"){let se=ft[we]||"";it=st.slice(0,st.length-se.length).replace(/(.)\/+$/,"$1")}return Ft[ee]=X(ft[we]||"",ee),Ft},{}),pathname:st,pathnameBase:it,pattern:fe}}function Q(fe,me,de){me===void 0&&(me=!1),de===void 0&&(de=!0);let ge=[],Me="^"+fe.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(it,ft)=>(ge.push(ft),"([^\\/]+)"));return fe.endsWith("*")?(ge.push("*"),Me+=fe==="*"||fe==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):Me+=de?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(Me,me?void 0:"i"),ge]}function X(fe,me){try{return decodeURIComponent(fe)}catch(de){return fe}}function ie(fe,me){me===void 0&&(me="/");let{pathname:de,search:ge="",hash:Me=""}=typeof fe=="string"?(0,i.cP)(fe):fe;return{pathname:de?de.startsWith("/")?de:Oe(de,me):me,search:I(ge),hash:k(Me)}}function Oe(fe,me){let de=me.replace(/\/+$/,"").split("/");return fe.split("/").forEach(Me=>{Me===".."?de.length>1&&de.pop():Me!=="."&&de.push(Me)}),de.length>1?de.join("/"):"/"}function Se(fe,me,de){let ge=typeof fe=="string"?(0,i.cP)(fe):fe,Me=fe===""||ge.pathname===""?"/":ge.pathname,st;if(Me==null)st=de;else{let ft=me.length-1;if(Me.startsWith("..")){let Mt=Me.split("/");for(;Mt[0]==="..";)Mt.shift(),ft-=1;ge.pathname=Mt.join("/")}st=ft>=0?me[ft]:"/"}let it=ie(ge,st);return Me&&Me!=="/"&&Me.endsWith("/")&&!it.pathname.endsWith("/")&&(it.pathname+="/"),it}function Be(fe){return fe===""||fe.pathname===""?"/":typeof fe=="string"?(0,i.cP)(fe).pathname:fe.pathname}function ue(fe,me){if(me==="/")return fe;if(!fe.toLowerCase().startsWith(me.toLowerCase()))return null;let de=fe.charAt(me.length);return de&&de!=="/"?null:fe.slice(me.length)||"/"}const S=fe=>fe.join("/").replace(/\/\/+/g,"/"),g=fe=>fe.replace(/\/+$/,"").replace(/^\/*/,"/"),I=fe=>!fe||fe==="?"?"":fe.startsWith("?")?fe:"?"+fe,k=fe=>!fe||fe==="#"?"":fe.startsWith("#")?fe:"#"+fe;function P(fe){D()||v(!1);let{basename:me,navigator:de}=(0,u.useContext)(o),{hash:ge,pathname:Me,search:st}=ht(fe),it=Me;if(me!=="/"){let ft=Be(fe),Mt=ft!=null&&ft.endsWith("/");it=Me==="/"?me+(Mt?"/":""):S([me,Me])}return de.createHref({pathname:it,search:st,hash:ge})}function D(){return(0,u.useContext)(n)!=null}function oe(){return D()||v(!1),(0,u.useContext)(n).location}function he(){return useContext(n).navigationType}function Re(fe){D()||v(!1);let{pathname:me}=oe();return useMemo(()=>q(fe,me),[me,fe])}function re(){D()||v(!1);let{basename:fe,navigator:me}=(0,u.useContext)(o),{matches:de}=(0,u.useContext)(d),{pathname:ge}=oe(),Me=JSON.stringify(de.map(ft=>ft.pathnameBase)),st=(0,u.useRef)(!1);return(0,u.useEffect)(()=>{st.current=!0}),(0,u.useCallback)(function(ft,Mt){if(Mt===void 0&&(Mt={}),!st.current)return;if(typeof ft=="number"){me.go(ft);return}let Ft=Se(ft,JSON.parse(Me),ge);fe!=="/"&&(Ft.pathname=S([fe,Ft.pathname])),(Mt.replace?me.replace:me.push)(Ft,Mt.state)},[fe,me,Me,ge])}const Ee=(0,u.createContext)(null);function Ve(){return useContext(Ee)}function Xe(fe){let me=(0,u.useContext)(d).outlet;return me&&(0,u.createElement)(Ee.Provider,{value:fe},me)}function Ze(){let{matches:fe}=(0,u.useContext)(d),me=fe[fe.length-1];return me?me.params:{}}function ht(fe){let{matches:me}=(0,u.useContext)(d),{pathname:de}=oe(),ge=JSON.stringify(me.map(Me=>Me.pathnameBase));return(0,u.useMemo)(()=>Se(fe,JSON.parse(ge),de),[fe,ge,de])}function Ct(fe,me){D()||v(!1);let{matches:de}=(0,u.useContext)(d),ge=de[de.length-1],Me=ge?ge.params:{},st=ge?ge.pathname:"/",it=ge?ge.pathnameBase:"/",ft=ge&&ge.route,Mt=oe(),Ft;if(me){var ee;let et=typeof me=="string"?(0,i.cP)(me):me;it==="/"||(ee=et.pathname)!=null&&ee.startsWith(it)||v(!1),Ft=et}else Ft=Mt;let we=Ft.pathname||"/",se=it==="/"?we:we.slice(it.length)||"/",_e=b(fe,{pathname:se});return Bt(_e&&_e.map(et=>Object.assign({},et,{params:Object.assign({},Me,et.params),pathname:S([it,et.pathname]),pathnameBase:et.pathnameBase==="/"?it:S([it,et.pathnameBase])})),de)}function Bt(fe,me){return me===void 0&&(me=[]),fe==null?null:fe.reduceRight((de,ge,Me)=>(0,u.createElement)(d.Provider,{children:ge.route.element!==void 0?ge.route.element:de,value:{outlet:de,matches:me.concat(fe.slice(0,Me+1))}}),null)}function pr(fe){let{basename:me,children:de,initialEntries:ge,initialIndex:Me}=fe,st=useRef();st.current==null&&(st.current=createMemoryHistory({initialEntries:ge,initialIndex:Me}));let it=st.current,[ft,Mt]=useState({action:it.action,location:it.location});return useLayoutEffect(()=>it.listen(Mt),[it]),createElement(Ie,{basename:me,children:de,location:ft.location,navigationType:ft.action,navigator:it})}function $r(fe){let{to:me,replace:de,state:ge}=fe;D()||v(!1);let Me=re();return(0,u.useEffect)(()=>{Me(me,{replace:de,state:ge})}),null}function tn(fe){return Xe(fe.context)}function tt(fe){v(!1)}function Ie(fe){let{basename:me="/",children:de=null,location:ge,navigationType:Me=i.aU.Pop,navigator:st,static:it=!1}=fe;D()&&v(!1);let ft=g(me),Mt=(0,u.useMemo)(()=>({basename:ft,navigator:st,static:it}),[ft,st,it]);typeof ge=="string"&&(ge=(0,i.cP)(ge));let{pathname:Ft="/",search:ee="",hash:we="",state:se=null,key:_e="default"}=ge,et=(0,u.useMemo)(()=>{let at=ue(Ft,ft);return at==null?null:{pathname:at,search:ee,hash:we,state:se,key:_e}},[ft,Ft,ee,we,se,_e]);return et==null?null:(0,u.createElement)(o.Provider,{value:Mt},(0,u.createElement)(n.Provider,{children:de,value:{location:et,navigationType:Me}}))}function be(fe){let{children:me,location:de}=fe;return Ct(ye(me),de)}function ye(fe){let me=[];return Children.forEach(fe,de=>{if(!isValidElement(de))return;if(de.type===Fragment){me.push.apply(me,ye(de.props.children));return}de.type!==tt&&v(!1);let ge={caseSensitive:de.props.caseSensitive,element:de.props.element,index:de.props.index,path:de.props.path};de.props.children&&(ge.children=ye(de.props.children)),me.push(ge)}),me}function je(fe){return Bt(fe)}},75251:function(s,f,e){"use strict";var i=e(67294),u=Symbol.for("react.element"),o=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,d=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function p(h,x,y){var b,T={},A=null,C=null;y!==void 0&&(A=""+y),x.key!==void 0&&(A=""+x.key),x.ref!==void 0&&(C=x.ref);for(b in x)n.call(x,b)&&!v.hasOwnProperty(b)&&(T[b]=x[b]);if(h&&h.defaultProps)for(b in x=h.defaultProps,x)T[b]===void 0&&(T[b]=x[b]);return{$$typeof:u,type:h,key:A,ref:C,props:T,_owner:d.current}}f.Fragment=o,f.jsx=p,f.jsxs=p},72408:function(s,f){"use strict";var e=Symbol.for("react.element"),i=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),n=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),v=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.iterator;function T(P){return P===null||typeof P!="object"?null:(P=b&&P[b]||P["@@iterator"],typeof P=="function"?P:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,$={};function B(P,D,oe){this.props=P,this.context=D,this.refs=$,this.updater=oe||A}B.prototype.isReactComponent={},B.prototype.setState=function(P,D){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,D,"setState")},B.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function L(){}L.prototype=B.prototype;function z(P,D,oe){this.props=P,this.context=D,this.refs=$,this.updater=oe||A}var H=z.prototype=new L;H.constructor=z,C(H,B.prototype),H.isPureReactComponent=!0;var W=Array.isArray,R=Object.prototype.hasOwnProperty,F={current:null},V={key:!0,ref:!0,__self:!0,__source:!0};function q(P,D,oe){var he,Re={},re=null,Ee=null;if(D!=null)for(he in D.ref!==void 0&&(Ee=D.ref),D.key!==void 0&&(re=""+D.key),D)R.call(D,he)&&!V.hasOwnProperty(he)&&(Re[he]=D[he]);var Ve=arguments.length-2;if(Ve===1)Re.children=oe;else if(1<Ve){for(var Xe=Array(Ve),Ze=0;Ze<Ve;Ze++)Xe[Ze]=arguments[Ze+2];Re.children=Xe}if(P&&P.defaultProps)for(he in Ve=P.defaultProps,Ve)Re[he]===void 0&&(Re[he]=Ve[he]);return{$$typeof:e,type:P,key:re,ref:Ee,props:Re,_owner:F.current}}function Q(P,D){return{$$typeof:e,type:P.type,key:D,ref:P.ref,props:P.props,_owner:P._owner}}function X(P){return typeof P=="object"&&P!==null&&P.$$typeof===e}function ie(P){var D={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(oe){return D[oe]})}var Oe=/\/+/g;function Se(P,D){return typeof P=="object"&&P!==null&&P.key!=null?ie(""+P.key):D.toString(36)}function Be(P,D,oe,he,Re){var re=typeof P;(re==="undefined"||re==="boolean")&&(P=null);var Ee=!1;if(P===null)Ee=!0;else switch(re){case"string":case"number":Ee=!0;break;case"object":switch(P.$$typeof){case e:case i:Ee=!0}}if(Ee)return Ee=P,Re=Re(Ee),P=he===""?"."+Se(Ee,0):he,W(Re)?(oe="",P!=null&&(oe=P.replace(Oe,"$&/")+"/"),Be(Re,D,oe,"",function(Ze){return Ze})):Re!=null&&(X(Re)&&(Re=Q(Re,oe+(!Re.key||Ee&&Ee.key===Re.key?"":(""+Re.key).replace(Oe,"$&/")+"/")+P)),D.push(Re)),1;if(Ee=0,he=he===""?".":he+":",W(P))for(var Ve=0;Ve<P.length;Ve++){re=P[Ve];var Xe=he+Se(re,Ve);Ee+=Be(re,D,oe,Xe,Re)}else if(Xe=T(P),typeof Xe=="function")for(P=Xe.call(P),Ve=0;!(re=P.next()).done;)re=re.value,Xe=he+Se(re,Ve++),Ee+=Be(re,D,oe,Xe,Re);else if(re==="object")throw D=String(P),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.");return Ee}function ue(P,D,oe){if(P==null)return P;var he=[],Re=0;return Be(P,he,"","",function(re){return D.call(oe,re,Re++)}),he}function S(P){if(P._status===-1){var D=P._result;D=D(),D.then(function(oe){(P._status===0||P._status===-1)&&(P._status=1,P._result=oe)},function(oe){(P._status===0||P._status===-1)&&(P._status=2,P._result=oe)}),P._status===-1&&(P._status=0,P._result=D)}if(P._status===1)return P._result.default;throw P._result}var g={current:null},I={transition:null},k={ReactCurrentDispatcher:g,ReactCurrentBatchConfig:I,ReactCurrentOwner:F};f.Children={map:ue,forEach:function(P,D,oe){ue(P,function(){D.apply(this,arguments)},oe)},count:function(P){var D=0;return ue(P,function(){D++}),D},toArray:function(P){return ue(P,function(D){return D})||[]},only:function(P){if(!X(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},f.Component=B,f.Fragment=u,f.Profiler=n,f.PureComponent=z,f.StrictMode=o,f.Suspense=h,f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k,f.cloneElement=function(P,D,oe){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var he=C({},P.props),Re=P.key,re=P.ref,Ee=P._owner;if(D!=null){if(D.ref!==void 0&&(re=D.ref,Ee=F.current),D.key!==void 0&&(Re=""+D.key),P.type&&P.type.defaultProps)var Ve=P.type.defaultProps;for(Xe in D)R.call(D,Xe)&&!V.hasOwnProperty(Xe)&&(he[Xe]=D[Xe]===void 0&&Ve!==void 0?Ve[Xe]:D[Xe])}var Xe=arguments.length-2;if(Xe===1)he.children=oe;else if(1<Xe){Ve=Array(Xe);for(var Ze=0;Ze<Xe;Ze++)Ve[Ze]=arguments[Ze+2];he.children=Ve}return{$$typeof:e,type:P.type,key:Re,ref:re,props:he,_owner:Ee}},f.createContext=function(P){return P={$$typeof:v,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:d,_context:P},P.Consumer=P},f.createElement=q,f.createFactory=function(P){var D=q.bind(null,P);return D.type=P,D},f.createRef=function(){return{current:null}},f.forwardRef=function(P){return{$$typeof:p,render:P}},f.isValidElement=X,f.lazy=function(P){return{$$typeof:y,_payload:{_status:-1,_result:P},_init:S}},f.memo=function(P,D){return{$$typeof:x,type:P,compare:D===void 0?null:D}},f.startTransition=function(P){var D=I.transition;I.transition={};try{P()}finally{I.transition=D}},f.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},f.useCallback=function(P,D){return g.current.useCallback(P,D)},f.useContext=function(P){return g.current.useContext(P)},f.useDebugValue=function(){},f.useDeferredValue=function(P){return g.current.useDeferredValue(P)},f.useEffect=function(P,D){return g.current.useEffect(P,D)},f.useId=function(){return g.current.useId()},f.useImperativeHandle=function(P,D,oe){return g.current.useImperativeHandle(P,D,oe)},f.useInsertionEffect=function(P,D){return g.current.useInsertionEffect(P,D)},f.useLayoutEffect=function(P,D){return g.current.useLayoutEffect(P,D)},f.useMemo=function(P,D){return g.current.useMemo(P,D)},f.useReducer=function(P,D,oe){return g.current.useReducer(P,D,oe)},f.useRef=function(P){return g.current.useRef(P)},f.useState=function(P){return g.current.useState(P)},f.useSyncExternalStore=function(P,D,oe){return g.current.useSyncExternalStore(P,D,oe)},f.useTransition=function(){return g.current.useTransition()},f.version="18.2.0"},67294:function(s,f,e){"use strict";s.exports=e(72408)},85893:function(s,f,e){"use strict";s.exports=e(75251)},35666:function(s){var f=function(e){"use strict";var i=Object.prototype,u=i.hasOwnProperty,o=Object.defineProperty||function(g,I,k){g[I]=k.value},n,d=typeof Symbol=="function"?Symbol:{},v=d.iterator||"@@iterator",p=d.asyncIterator||"@@asyncIterator",h=d.toStringTag||"@@toStringTag";function x(g,I,k){return Object.defineProperty(g,I,{value:k,enumerable:!0,configurable:!0,writable:!0}),g[I]}try{x({},"")}catch(g){x=function(I,k,P){return I[k]=P}}function y(g,I,k,P){var D=I&&I.prototype instanceof L?I:L,oe=Object.create(D.prototype),he=new Be(P||[]);return o(oe,"_invoke",{value:X(g,k,he)}),oe}e.wrap=y;function b(g,I,k){try{return{type:"normal",arg:g.call(I,k)}}catch(P){return{type:"throw",arg:P}}}var T="suspendedStart",A="suspendedYield",C="executing",$="completed",B={};function L(){}function z(){}function H(){}var W={};x(W,v,function(){return this});var R=Object.getPrototypeOf,F=R&&R(R(ue([])));F&&F!==i&&u.call(F,v)&&(W=F);var V=H.prototype=L.prototype=Object.create(W);z.prototype=H,o(V,"constructor",{value:H,configurable:!0}),o(H,"constructor",{value:z,configurable:!0}),z.displayName=x(H,h,"GeneratorFunction");function q(g){["next","throw","return"].forEach(function(I){x(g,I,function(k){return this._invoke(I,k)})})}e.isGeneratorFunction=function(g){var I=typeof g=="function"&&g.constructor;return I?I===z||(I.displayName||I.name)==="GeneratorFunction":!1},e.mark=function(g){return Object.setPrototypeOf?Object.setPrototypeOf(g,H):(g.__proto__=H,x(g,h,"GeneratorFunction")),g.prototype=Object.create(V),g},e.awrap=function(g){return{__await:g}};function Q(g,I){function k(oe,he,Re,re){var Ee=b(g[oe],g,he);if(Ee.type==="throw")re(Ee.arg);else{var Ve=Ee.arg,Xe=Ve.value;return Xe&&typeof Xe=="object"&&u.call(Xe,"__await")?I.resolve(Xe.__await).then(function(Ze){k("next",Ze,Re,re)},function(Ze){k("throw",Ze,Re,re)}):I.resolve(Xe).then(function(Ze){Ve.value=Ze,Re(Ve)},function(Ze){return k("throw",Ze,Re,re)})}}var P;function D(oe,he){function Re(){return new I(function(re,Ee){k(oe,he,re,Ee)})}return P=P?P.then(Re,Re):Re()}o(this,"_invoke",{value:D})}q(Q.prototype),x(Q.prototype,p,function(){return this}),e.AsyncIterator=Q,e.async=function(g,I,k,P,D){D===void 0&&(D=Promise);var oe=new Q(y(g,I,k,P),D);return e.isGeneratorFunction(I)?oe:oe.next().then(function(he){return he.done?he.value:oe.next()})};function X(g,I,k){var P=T;return function(oe,he){if(P===C)throw new Error("Generator is already running");if(P===$){if(oe==="throw")throw he;return S()}for(k.method=oe,k.arg=he;;){var Re=k.delegate;if(Re){var re=ie(Re,k);if(re){if(re===B)continue;return re}}if(k.method==="next")k.sent=k._sent=k.arg;else if(k.method==="throw"){if(P===T)throw P=$,k.arg;k.dispatchException(k.arg)}else k.method==="return"&&k.abrupt("return",k.arg);P=C;var Ee=b(g,I,k);if(Ee.type==="normal"){if(P=k.done?$:A,Ee.arg===B)continue;return{value:Ee.arg,done:k.done}}else Ee.type==="throw"&&(P=$,k.method="throw",k.arg=Ee.arg)}}}function ie(g,I){var k=I.method,P=g.iterator[k];if(P===n)return I.delegate=null,k==="throw"&&g.iterator.return&&(I.method="return",I.arg=n,ie(g,I),I.method==="throw")||k!=="return"&&(I.method="throw",I.arg=new TypeError("The iterator does not provide a '"+k+"' method")),B;var D=b(P,g.iterator,I.arg);if(D.type==="throw")return I.method="throw",I.arg=D.arg,I.delegate=null,B;var oe=D.arg;if(!oe)return I.method="throw",I.arg=new TypeError("iterator result is not an object"),I.delegate=null,B;if(oe.done)I[g.resultName]=oe.value,I.next=g.nextLoc,I.method!=="return"&&(I.method="next",I.arg=n);else return oe;return I.delegate=null,B}q(V),x(V,h,"Generator"),x(V,v,function(){return this}),x(V,"toString",function(){return"[object Generator]"});function Oe(g){var I={tryLoc:g[0]};1 in g&&(I.catchLoc=g[1]),2 in g&&(I.finallyLoc=g[2],I.afterLoc=g[3]),this.tryEntries.push(I)}function Se(g){var I=g.completion||{};I.type="normal",delete I.arg,g.completion=I}function Be(g){this.tryEntries=[{tryLoc:"root"}],g.forEach(Oe,this),this.reset(!0)}e.keys=function(g){var I=Object(g),k=[];for(var P in I)k.push(P);return k.reverse(),function D(){for(;k.length;){var oe=k.pop();if(oe in I)return D.value=oe,D.done=!1,D}return D.done=!0,D}};function ue(g){if(g){var I=g[v];if(I)return I.call(g);if(typeof g.next=="function")return g;if(!isNaN(g.length)){var k=-1,P=function D(){for(;++k<g.length;)if(u.call(g,k))return D.value=g[k],D.done=!1,D;return D.value=n,D.done=!0,D};return P.next=P}}return{next:S}}e.values=ue;function S(){return{value:n,done:!0}}return Be.prototype={constructor:Be,reset:function(g){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(Se),!g)for(var I in this)I.charAt(0)==="t"&&u.call(this,I)&&!isNaN(+I.slice(1))&&(this[I]=n)},stop:function(){this.done=!0;var g=this.tryEntries[0],I=g.completion;if(I.type==="throw")throw I.arg;return this.rval},dispatchException:function(g){if(this.done)throw g;var I=this;function k(re,Ee){return oe.type="throw",oe.arg=g,I.next=re,Ee&&(I.method="next",I.arg=n),!!Ee}for(var P=this.tryEntries.length-1;P>=0;--P){var D=this.tryEntries[P],oe=D.completion;if(D.tryLoc==="root")return k("end");if(D.tryLoc<=this.prev){var he=u.call(D,"catchLoc"),Re=u.call(D,"finallyLoc");if(he&&Re){if(this.prev<D.catchLoc)return k(D.catchLoc,!0);if(this.prev<D.finallyLoc)return k(D.finallyLoc)}else if(he){if(this.prev<D.catchLoc)return k(D.catchLoc,!0)}else if(Re){if(this.prev<D.finallyLoc)return k(D.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(g,I){for(var k=this.tryEntries.length-1;k>=0;--k){var P=this.tryEntries[k];if(P.tryLoc<=this.prev&&u.call(P,"finallyLoc")&&this.prev<P.finallyLoc){var D=P;break}}D&&(g==="break"||g==="continue")&&D.tryLoc<=I&&I<=D.finallyLoc&&(D=null);var oe=D?D.completion:{};return oe.type=g,oe.arg=I,D?(this.method="next",this.next=D.finallyLoc,B):this.complete(oe)},complete:function(g,I){if(g.type==="throw")throw g.arg;return g.type==="break"||g.type==="continue"?this.next=g.arg:g.type==="return"?(this.rval=this.arg=g.arg,this.method="return",this.next="end"):g.type==="normal"&&I&&(this.next=I),B},finish:function(g){for(var I=this.tryEntries.length-1;I>=0;--I){var k=this.tryEntries[I];if(k.finallyLoc===g)return this.complete(k.completion,k.afterLoc),Se(k),B}},catch:function(g){for(var I=this.tryEntries.length-1;I>=0;--I){var k=this.tryEntries[I];if(k.tryLoc===g){var P=k.completion;if(P.type==="throw"){var D=P.arg;Se(k)}return D}}throw new Error("illegal catch attempt")},delegateYield:function(g,I,k){return this.delegate={iterator:ue(g),resultName:I,nextLoc:k},this.method==="next"&&(this.arg=n),B}},e}(s.exports);try{regeneratorRuntime=f}catch(e){typeof globalThis=="object"?globalThis.regeneratorRuntime=f:Function("r","regeneratorRuntime = r")(f)}},60053:function(s,f){"use strict";function e(g,I){var k=g.length;g.push(I);e:for(;0<k;){var P=k-1>>>1,D=g[P];if(0<o(D,I))g[P]=I,g[k]=D,k=P;else break e}}function i(g){return g.length===0?null:g[0]}function u(g){if(g.length===0)return null;var I=g[0],k=g.pop();if(k!==I){g[0]=k;e:for(var P=0,D=g.length,oe=D>>>1;P<oe;){var he=2*(P+1)-1,Re=g[he],re=he+1,Ee=g[re];if(0>o(Re,k))re<D&&0>o(Ee,Re)?(g[P]=Ee,g[re]=k,P=re):(g[P]=Re,g[he]=k,P=he);else if(re<D&&0>o(Ee,k))g[P]=Ee,g[re]=k,P=re;else break e}}return I}function o(g,I){var k=g.sortIndex-I.sortIndex;return k!==0?k:g.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var n=performance;f.unstable_now=function(){return n.now()}}else{var d=Date,v=d.now();f.unstable_now=function(){return d.now()-v}}var p=[],h=[],x=1,y=null,b=3,T=!1,A=!1,C=!1,$=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function z(g){for(var I=i(h);I!==null;){if(I.callback===null)u(h);else if(I.startTime<=g)u(h),I.sortIndex=I.expirationTime,e(p,I);else break;I=i(h)}}function H(g){if(C=!1,z(g),!A)if(i(p)!==null)A=!0,ue(W);else{var I=i(h);I!==null&&S(H,I.startTime-g)}}function W(g,I){A=!1,C&&(C=!1,B(V),V=-1),T=!0;var k=b;try{for(z(I),y=i(p);y!==null&&(!(y.expirationTime>I)||g&&!X());){var P=y.callback;if(typeof P=="function"){y.callback=null,b=y.priorityLevel;var D=P(y.expirationTime<=I);I=f.unstable_now(),typeof D=="function"?y.callback=D:y===i(p)&&u(p),z(I)}else u(p);y=i(p)}if(y!==null)var oe=!0;else{var he=i(h);he!==null&&S(H,he.startTime-I),oe=!1}return oe}finally{y=null,b=k,T=!1}}var R=!1,F=null,V=-1,q=5,Q=-1;function X(){return!(f.unstable_now()-Q<q)}function ie(){if(F!==null){var g=f.unstable_now();Q=g;var I=!0;try{I=F(!0,g)}finally{I?Oe():(R=!1,F=null)}}else R=!1}var Oe;if(typeof L=="function")Oe=function(){L(ie)};else if(typeof MessageChannel!="undefined"){var Se=new MessageChannel,Be=Se.port2;Se.port1.onmessage=ie,Oe=function(){Be.postMessage(null)}}else Oe=function(){$(ie,0)};function ue(g){F=g,R||(R=!0,Oe())}function S(g,I){V=$(function(){g(f.unstable_now())},I)}f.unstable_IdlePriority=5,f.unstable_ImmediatePriority=1,f.unstable_LowPriority=4,f.unstable_NormalPriority=3,f.unstable_Profiling=null,f.unstable_UserBlockingPriority=2,f.unstable_cancelCallback=function(g){g.callback=null},f.unstable_continueExecution=function(){A||T||(A=!0,ue(W))},f.unstable_forceFrameRate=function(g){0>g||125<g?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<g?Math.floor(1e3/g):5},f.unstable_getCurrentPriorityLevel=function(){return b},f.unstable_getFirstCallbackNode=function(){return i(p)},f.unstable_next=function(g){switch(b){case 1:case 2:case 3:var I=3;break;default:I=b}var k=b;b=I;try{return g()}finally{b=k}},f.unstable_pauseExecution=function(){},f.unstable_requestPaint=function(){},f.unstable_runWithPriority=function(g,I){switch(g){case 1:case 2:case 3:case 4:case 5:break;default:g=3}var k=b;b=g;try{return I()}finally{b=k}},f.unstable_scheduleCallback=function(g,I,k){var P=f.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?P+k:P):k=P,g){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=k+D,g={id:x++,callback:I,priorityLevel:g,startTime:k,expirationTime:D,sortIndex:-1},k>P?(g.sortIndex=k,e(h,g),i(p)===null&&g===i(h)&&(C?(B(V),V=-1):C=!0,S(H,k-P))):(g.sortIndex=D,e(p,g),A||T||(A=!0,ue(W))),g},f.unstable_shouldYield=X,f.unstable_wrapCallback=function(g){var I=b;return function(){var k=b;b=I;try{return g.apply(this,arguments)}finally{b=k}}}},63840:function(s,f,e){"use strict";s.exports=e(60053)},96774:function(s){s.exports=function(e,i,u,o){var n=u?u.call(o,e,i):void 0;if(n!==void 0)return!!n;if(e===i)return!0;if(typeof e!="object"||!e||typeof i!="object"||!i)return!1;var d=Object.keys(e),v=Object.keys(i);if(d.length!==v.length)return!1;for(var p=Object.prototype.hasOwnProperty.bind(i),h=0;h<d.length;h++){var x=d[h];if(!p(x))return!1;var y=e[x],b=i[x];if(n=u?u.call(o,y,b,x):void 0,n===!1||n===void 0&&y!==b)return!1}return!0}},11742:function(s){s.exports=function(){var f=document.getSelection();if(!f.rangeCount)return function(){};for(var e=document.activeElement,i=[],u=0;u<f.rangeCount;u++)i.push(f.getRangeAt(u));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return f.removeAllRanges(),function(){f.type==="Caret"&&f.removeAllRanges(),f.rangeCount||i.forEach(function(o){f.addRange(o)}),e&&e.focus()}}},48951:function(s){"use strict";s.exports="data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%20100%20100%27%3E%3Cpath%20fill%3D%27%230071de%27%20d%3D%27M49.346,46.341c-3.79-2.005,3.698-10.294,7.984-8.89%20c8.713,2.852,4.352,20.922-4.901,20.269c-4.684-0.33-12.616-7.405-14.38-11.818c-2.375-5.938,7.208-11.688,11.624-13.837%20c9.078-4.42,18.403-3.503,22.784,6.651c4.049,9.378,6.206,28.09-1.462,36.276c-7.091,7.567-24.673,2.277-32.357-1.079%20c-11.474-5.01-24.54-19.124-21.738-32.758c3.958-19.263,28.856-28.248,46.044-23.244c20.693,6.025,22.012,36.268,16.246,52.826%20c-5.267,15.118-17.03,26.26-33.603,21.938c-11.054-2.883-20.984-10.949-28.809-18.908C9.236,66.096,2.704,57.597,6.01,46.371%20c3.059-10.385,12.719-20.155,20.892-26.604C40.809,8.788,58.615,1.851,75.058,12.031c9.289,5.749,16.787,16.361,18.284,27.262%20c0.643,4.698,0.646,10.775-3.811,13.746%27%3E%3C/path%3E%3C/svg%3E"},98390:function(s){"use strict";s.exports="data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%20100%20100%27%3E%3Cpath%20fill%3D%27%230b74d5%27%20d%3D%27M49.346,46.341c-3.79-2.005,3.698-10.294,7.984-8.89%20c8.713,2.852,4.352,20.922-4.901,20.269c-4.684-0.33-12.616-7.405-14.38-11.818c-2.375-5.938,7.208-11.688,11.624-13.837%20c9.078-4.42,18.403-3.503,22.784,6.651c4.049,9.378,6.206,28.09-1.462,36.276c-7.091,7.567-24.673,2.277-32.357-1.079%20c-11.474-5.01-24.54-19.124-21.738-32.758c3.958-19.263,28.856-28.248,46.044-23.244c20.693,6.025,22.012,36.268,16.246,52.826%20c-5.267,15.118-17.03,26.26-33.603,21.938c-11.054-2.883-20.984-10.949-28.809-18.908C9.236,66.096,2.704,57.597,6.01,46.371%20c3.059-10.385,12.719-20.155,20.892-26.604C40.809,8.788,58.615,1.851,75.058,12.031c9.289,5.749,16.787,16.361,18.284,27.262%20c0.643,4.698,0.646,10.775-3.811,13.746%27%3E%3C/path%3E%3C/svg%3E"},39048:function(s){"use strict";s.exports="data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%20100%20100%27%3E%3Cpath%20stroke%3D%27%230b74d5%27%20fill-opacity%3D%270%27%20stroke-width%3D%2716%27%20d%3D%27m13,62c0.61067,1.6%201.3045,2.3045%201.75717,2.75716c0.72683,0.72684%201.24283,1.24284%202.07617,2.07617c0.54133,0.54133%201.04116,1.06035%201.82833,1.82383c0.5781,0.5607%201.00502,0.96983%202.02633,1.74417c0.55877,0.42365%201.191,0.84034%201.884,1.284c1.16491,0.74577%201.59777,1.00147%202.5,1.55067c0.4692,0.28561%201.43689,0.86868%201.93067,1.16534c0.99711,0.59904%201.99667,1.19755%202.49283,1.49866c0.98501,0.59779%201.47073,0.89648%201.94733,1.2c1.3971,0.88972%201.83738,1.19736%202.7,1.7955c0.42201,0.29262%201.24022,0.87785%202.05583,1.41917c0.79531,0.52785%201.59376,1.0075%202.38,1.43867c0.74477,0.40842%201.45167,0.75802%202.37817,1.22517c0.76133,0.38387%201.54947,0.82848%202.40717,1.41084c0.7312,0.49647%201.49563,1.08231%202.27884,1.258c0.35564,0.07978%200.14721,-0.95518%200.35733,-1.86867c0.18092,-0.78651%200.98183,-1.2141%200.99983,-2.07867c0.02073,-0.99529%200.07916,-1.79945%200.42533,-2.56133c0.43607,-0.95973%200.53956,-1.66774%200.79617,-2.68183c0.18888,-0.74645%200.39764,-1.31168%200.7785,-2.6235c0.20865,-0.71867%200.41483,-1.48614%200.708,-2.28c0.15452,-0.41843%200.77356,-1.73138%201.348,-2.64133c0.30581,-0.48443%200.65045,-0.97043%201.0065,-1.4745c0.74776,-1.05863%201.1531,-1.60163%201.9375,-2.77084c0.40621,-0.60548%200.80272,-1.23513%201.2045,-1.8765c0.40757,-0.65062%200.81464,-1.31206%201.2315,-1.9755c0.41946,-0.66757%200.83374,-1.34258%201.73067,-2.648c0.44696,-0.65053%200.91436,-1.28356%201.386,-1.9095c0.46972,-0.6234%200.94725,-1.2364%201.422,-1.8465c0.94116,-1.20947%201.86168,-2.40844%202.30367,-3.0105c0.438,-0.59664%200.86246,-1.19396%201.27501,-1.7895c0.40743,-0.58816%200.80352,-1.17234%201.185,-1.7535c1.10526,-1.68381%201.44079,-2.23511%201.77633,-2.7705c0.32878,-0.52461%200.96306,-1.5459%201.27467,-2.04c0.60654,-0.96177%201.20782,-1.88193%201.51051,-2.325c0.59013,-0.86381%201.17888,-1.68032%201.46416,-2.075c0.5498,-0.76063%201.31747,-1.8231%201.77883,-2.4895c0.43918,-0.63437%200.85266,-1.25267%201.45717,-2.15717c0.59549,-0.891%200.96531,-1.46814%201.51466,-2.22933c0.58413,-0.80936%201.12566,-1.40253%201.83801,-2.12333c0.61304,-0.62031%200.45171,-1.48306%200.7045,-2.34733c0.25668,-0.87762%200.75447,-1.62502%201,-2.40983c0.25128,-0.8032%200.7633,-1.39453%201.33217,-2.25417c0.54528,-0.82398%200.73415,-1.6714%201.31516,-2.336c0.55639,-0.63644%201.38658,-1.22588%201.8595,-1.9c0.5082,-0.72441%200.78867,-1.4%201.60266,-1.56667l0.71184,-0.4905%27%3E%3C/path%3E%3C/svg%3E"},73897:function(s){function f(e,i){(i==null||i>e.length)&&(i=e.length);for(var u=0,o=new Array(i);u<i;u++)o[u]=e[u];return o}s.exports=f,s.exports.__esModule=!0,s.exports.default=s.exports},85372:function(s){function f(e){if(Array.isArray(e))return e}s.exports=f,s.exports.__esModule=!0,s.exports.default=s.exports},17156:function(s){function f(i,u,o,n,d,v,p){try{var h=i[v](p),x=h.value}catch(y){o(y);return}h.done?u(x):Promise.resolve(x).then(n,d)}function e(i){return function(){var u=this,o=arguments;return new Promise(function(n,d){var v=i.apply(u,o);function p(x){f(v,n,d,p,h,"next",x)}function h(x){f(v,n,d,p,h,"throw",x)}p(void 0)})}}s.exports=e,s.exports.__esModule=!0,s.exports.default=s.exports},38416:function(s,f,e){var i=e(64062);function u(o,n,d){return n=i(n),n in o?Object.defineProperty(o,n,{value:d,enumerable:!0,configurable:!0,writable:!0}):o[n]=d,o}s.exports=u,s.exports.__esModule=!0,s.exports.default=s.exports},68872:function(s){function f(e,i){var u=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(u!=null){var o,n,d,v,p=[],h=!0,x=!1;try{if(d=(u=u.call(e)).next,i===0){if(Object(u)!==u)return;h=!1}else for(;!(h=(o=d.call(u)).done)&&(p.push(o.value),p.length!==i);h=!0);}catch(y){x=!0,n=y}finally{try{if(!h&&u.return!=null&&(v=u.return(),Object(v)!==v))return}finally{if(x)throw n}}return p}}s.exports=f,s.exports.__esModule=!0,s.exports.default=s.exports},12218:function(s){function f(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}s.exports=f,s.exports.__esModule=!0,s.exports.default=s.exports},42122:function(s,f,e){var i=e(38416);function u(n,d){var v=Object.keys(n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(n);d&&(p=p.filter(function(h){return Object.getOwnPropertyDescriptor(n,h).enumerable})),v.push.apply(v,p)}return v}function o(n){for(var d=1;d<arguments.length;d++){var v=arguments[d]!=null?arguments[d]:{};d%2?u(Object(v),!0).forEach(function(p){i(n,p,v[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(v)):u(Object(v)).forEach(function(p){Object.defineProperty(n,p,Object.getOwnPropertyDescriptor(v,p))})}return n}s.exports=o,s.exports.__esModule=!0,s.exports.default=s.exports},17061:function(s,f,e){var i=e(18698).default;function u(){"use strict";s.exports=u=function(){return o},s.exports.__esModule=!0,s.exports.default=s.exports;var o={},n=Object.prototype,d=n.hasOwnProperty,v=Object.defineProperty||function(ue,S,g){ue[S]=g.value},p=typeof Symbol=="function"?Symbol:{},h=p.iterator||"@@iterator",x=p.asyncIterator||"@@asyncIterator",y=p.toStringTag||"@@toStringTag";function b(ue,S,g){return Object.defineProperty(ue,S,{value:g,enumerable:!0,configurable:!0,writable:!0}),ue[S]}try{b({},"")}catch(ue){b=function(g,I,k){return g[I]=k}}function T(ue,S,g,I){var k=S&&S.prototype instanceof $?S:$,P=Object.create(k.prototype),D=new Oe(I||[]);return v(P,"_invoke",{value:q(ue,g,D)}),P}function A(ue,S,g){try{return{type:"normal",arg:ue.call(S,g)}}catch(I){return{type:"throw",arg:I}}}o.wrap=T;var C={};function $(){}function B(){}function L(){}var z={};b(z,h,function(){return this});var H=Object.getPrototypeOf,W=H&&H(H(Se([])));W&&W!==n&&d.call(W,h)&&(z=W);var R=L.prototype=$.prototype=Object.create(z);function F(ue){["next","throw","return"].forEach(function(S){b(ue,S,function(g){return this._invoke(S,g)})})}function V(ue,S){function g(k,P,D,oe){var he=A(ue[k],ue,P);if(he.type!=="throw"){var Re=he.arg,re=Re.value;return re&&i(re)=="object"&&d.call(re,"__await")?S.resolve(re.__await).then(function(Ee){g("next",Ee,D,oe)},function(Ee){g("throw",Ee,D,oe)}):S.resolve(re).then(function(Ee){Re.value=Ee,D(Re)},function(Ee){return g("throw",Ee,D,oe)})}oe(he.arg)}var I;v(this,"_invoke",{value:function(P,D){function oe(){return new S(function(he,Re){g(P,D,he,Re)})}return I=I?I.then(oe,oe):oe()}})}function q(ue,S,g){var I="suspendedStart";return function(k,P){if(I==="executing")throw new Error("Generator is already running");if(I==="completed"){if(k==="throw")throw P;return Be()}for(g.method=k,g.arg=P;;){var D=g.delegate;if(D){var oe=Q(D,g);if(oe){if(oe===C)continue;return oe}}if(g.method==="next")g.sent=g._sent=g.arg;else if(g.method==="throw"){if(I==="suspendedStart")throw I="completed",g.arg;g.dispatchException(g.arg)}else g.method==="return"&&g.abrupt("return",g.arg);I="executing";var he=A(ue,S,g);if(he.type==="normal"){if(I=g.done?"completed":"suspendedYield",he.arg===C)continue;return{value:he.arg,done:g.done}}he.type==="throw"&&(I="completed",g.method="throw",g.arg=he.arg)}}}function Q(ue,S){var g=S.method,I=ue.iterator[g];if(I===void 0)return S.delegate=null,g==="throw"&&ue.iterator.return&&(S.method="return",S.arg=void 0,Q(ue,S),S.method==="throw")||g!=="return"&&(S.method="throw",S.arg=new TypeError("The iterator does not provide a '"+g+"' method")),C;var k=A(I,ue.iterator,S.arg);if(k.type==="throw")return S.method="throw",S.arg=k.arg,S.delegate=null,C;var P=k.arg;return P?P.done?(S[ue.resultName]=P.value,S.next=ue.nextLoc,S.method!=="return"&&(S.method="next",S.arg=void 0),S.delegate=null,C):P:(S.method="throw",S.arg=new TypeError("iterator result is not an object"),S.delegate=null,C)}function X(ue){var S={tryLoc:ue[0]};1 in ue&&(S.catchLoc=ue[1]),2 in ue&&(S.finallyLoc=ue[2],S.afterLoc=ue[3]),this.tryEntries.push(S)}function ie(ue){var S=ue.completion||{};S.type="normal",delete S.arg,ue.completion=S}function Oe(ue){this.tryEntries=[{tryLoc:"root"}],ue.forEach(X,this),this.reset(!0)}function Se(ue){if(ue){var S=ue[h];if(S)return S.call(ue);if(typeof ue.next=="function")return ue;if(!isNaN(ue.length)){var g=-1,I=function k(){for(;++g<ue.length;)if(d.call(ue,g))return k.value=ue[g],k.done=!1,k;return k.value=void 0,k.done=!0,k};return I.next=I}}return{next:Be}}function Be(){return{value:void 0,done:!0}}return B.prototype=L,v(R,"constructor",{value:L,configurable:!0}),v(L,"constructor",{value:B,configurable:!0}),B.displayName=b(L,y,"GeneratorFunction"),o.isGeneratorFunction=function(ue){var S=typeof ue=="function"&&ue.constructor;return!!S&&(S===B||(S.displayName||S.name)==="GeneratorFunction")},o.mark=function(ue){return Object.setPrototypeOf?Object.setPrototypeOf(ue,L):(ue.__proto__=L,b(ue,y,"GeneratorFunction")),ue.prototype=Object.create(R),ue},o.awrap=function(ue){return{__await:ue}},F(V.prototype),b(V.prototype,x,function(){return this}),o.AsyncIterator=V,o.async=function(ue,S,g,I,k){k===void 0&&(k=Promise);var P=new V(T(ue,S,g,I),k);return o.isGeneratorFunction(S)?P:P.next().then(function(D){return D.done?D.value:P.next()})},F(R),b(R,y,"Generator"),b(R,h,function(){return this}),b(R,"toString",function(){return"[object Generator]"}),o.keys=function(ue){var S=Object(ue),g=[];for(var I in S)g.push(I);return g.reverse(),function k(){for(;g.length;){var P=g.pop();if(P in S)return k.value=P,k.done=!1,k}return k.done=!0,k}},o.values=Se,Oe.prototype={constructor:Oe,reset:function(S){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(ie),!S)for(var g in this)g.charAt(0)==="t"&&d.call(this,g)&&!isNaN(+g.slice(1))&&(this[g]=void 0)},stop:function(){this.done=!0;var S=this.tryEntries[0].completion;if(S.type==="throw")throw S.arg;return this.rval},dispatchException:function(S){if(this.done)throw S;var g=this;function I(Re,re){return D.type="throw",D.arg=S,g.next=Re,re&&(g.method="next",g.arg=void 0),!!re}for(var k=this.tryEntries.length-1;k>=0;--k){var P=this.tryEntries[k],D=P.completion;if(P.tryLoc==="root")return I("end");if(P.tryLoc<=this.prev){var oe=d.call(P,"catchLoc"),he=d.call(P,"finallyLoc");if(oe&&he){if(this.prev<P.catchLoc)return I(P.catchLoc,!0);if(this.prev<P.finallyLoc)return I(P.finallyLoc)}else if(oe){if(this.prev<P.catchLoc)return I(P.catchLoc,!0)}else{if(!he)throw new Error("try statement without catch or finally");if(this.prev<P.finallyLoc)return I(P.finallyLoc)}}}},abrupt:function(S,g){for(var I=this.tryEntries.length-1;I>=0;--I){var k=this.tryEntries[I];if(k.tryLoc<=this.prev&&d.call(k,"finallyLoc")&&this.prev<k.finallyLoc){var P=k;break}}P&&(S==="break"||S==="continue")&&P.tryLoc<=g&&g<=P.finallyLoc&&(P=null);var D=P?P.completion:{};return D.type=S,D.arg=g,P?(this.method="next",this.next=P.finallyLoc,C):this.complete(D)},complete:function(S,g){if(S.type==="throw")throw S.arg;return S.type==="break"||S.type==="continue"?this.next=S.arg:S.type==="return"?(this.rval=this.arg=S.arg,this.method="return",this.next="end"):S.type==="normal"&&g&&(this.next=g),C},finish:function(S){for(var g=this.tryEntries.length-1;g>=0;--g){var I=this.tryEntries[g];if(I.finallyLoc===S)return this.complete(I.completion,I.afterLoc),ie(I),C}},catch:function(S){for(var g=this.tryEntries.length-1;g>=0;--g){var I=this.tryEntries[g];if(I.tryLoc===S){var k=I.completion;if(k.type==="throw"){var P=k.arg;ie(I)}return P}}throw new Error("illegal catch attempt")},delegateYield:function(S,g,I){return this.delegate={iterator:Se(S),resultName:g,nextLoc:I},this.method==="next"&&(this.arg=void 0),C}},o}s.exports=u,s.exports.__esModule=!0,s.exports.default=s.exports},27424:function(s,f,e){var i=e(85372),u=e(68872),o=e(86116),n=e(12218);function d(v,p){return i(v)||u(v,p)||o(v,p)||n()}s.exports=d,s.exports.__esModule=!0,s.exports.default=s.exports},95036:function(s,f,e){var i=e(18698).default;function u(o,n){if(i(o)!=="object"||o===null)return o;var d=o[Symbol.toPrimitive];if(d!==void 0){var v=d.call(o,n||"default");if(i(v)!=="object")return v;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(o)}s.exports=u,s.exports.__esModule=!0,s.exports.default=s.exports},64062:function(s,f,e){var i=e(18698).default,u=e(95036);function o(n){var d=u(n,"string");return i(d)==="symbol"?d:String(d)}s.exports=o,s.exports.__esModule=!0,s.exports.default=s.exports},18698:function(s){function f(e){return s.exports=f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},s.exports.__esModule=!0,s.exports.default=s.exports,f(e)}s.exports=f,s.exports.__esModule=!0,s.exports.default=s.exports},86116:function(s,f,e){var i=e(73897);function u(o,n){if(o){if(typeof o=="string")return i(o,n);var d=Object.prototype.toString.call(o).slice(8,-1);if(d==="Object"&&o.constructor&&(d=o.constructor.name),d==="Map"||d==="Set")return Array.from(o);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return i(o,n)}}s.exports=u,s.exports.__esModule=!0,s.exports.default=s.exports},30907:function(s,f,e){"use strict";e.d(f,{Z:function(){return i}});function i(u,o){(o==null||o>u.length)&&(o=u.length);for(var n=0,d=new Array(o);n<o;n++)d[n]=u[n];return d}},83878:function(s,f,e){"use strict";e.d(f,{Z:function(){return i}});function i(u){if(Array.isArray(u))return u}},97326:function(s,f,e){"use strict";e.d(f,{Z:function(){return i}});function i(u){if(u===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u}},15861:function(s,f,e){"use strict";e.d(f,{Z:function(){return u}});function i(o,n,d,v,p,h,x){try{var y=o[h](x),b=y.value}catch(T){d(T);return}y.done?n(b):Promise.resolve(b).then(v,p)}function u(o){return function(){var n=this,d=arguments;return new Promise(function(v,p){var h=o.apply(n,d);function x(b){i(h,v,p,x,y,"next",b)}function y(b){i(h,v,p,x,y,"throw",b)}x(void 0)})}}},15671:function(s,f,e){"use strict";e.d(f,{Z:function(){return i}});function i(u,o){if(!(u instanceof o))throw new TypeError("Cannot call a class as a function")}},43144:function(s,f,e){"use strict";e.d(f,{Z:function(){return o}});var i=e(83997);function u(n,d){for(var v=0;v<d.length;v++){var p=d[v];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(n,(0,i.Z)(p.key),p)}}function o(n,d,v){return d&&u(n.prototype,d),v&&u(n,v),Object.defineProperty(n,"prototype",{writable:!1}),n}},4942:function(s,f,e){"use strict";e.d(f,{Z:function(){return u}});var i=e(83997);function u(o,n,d){return n=(0,i.Z)(n),n in o?Object.defineProperty(o,n,{value:d,enumerable:!0,configurable:!0,writable:!0}):o[n]=d,o}},87462:function(s,f,e){"use strict";e.d(f,{Z:function(){return i}});function i(){return i=Object.assign?Object.assign.bind():function(u){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var d in n)Object.prototype.hasOwnProperty.call(n,d)&&(u[d]=n[d])}return u},i.apply(this,arguments)}},59199:function(s,f,e){"use strict";e.d(f,{Z:function(){return i}});function i(u){if(typeof Symbol!="undefined"&&u[Symbol.iterator]!=null||u["@@iterator"]!=null)return Array.from(u)}},25267:function(s,f,e){"use strict";e.d(f,{Z:function(){return i}});function i(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}},1413:function(s,f,e){"use strict";e.d(f,{Z:function(){return o}});var i=e(4942);function u(n,d){var v=Object.keys(n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(n);d&&(p=p.filter(function(h){return Object.getOwnPropertyDescriptor(n,h).enumerable})),v.push.apply(v,p)}return v}function o(n){for(var d=1;d<arguments.length;d++){var v=arguments[d]!=null?arguments[d]:{};d%2?u(Object(v),!0).forEach(function(p){(0,i.Z)(n,p,v[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(v)):u(Object(v)).forEach(function(p){Object.defineProperty(n,p,Object.getOwnPropertyDescriptor(v,p))})}return n}},45987:function(s,f,e){"use strict";e.d(f,{Z:function(){return u}});var i=e(63366);function u(o,n){if(o==null)return{};var d=(0,i.Z)(o,n),v,p;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(o);for(p=0;p<h.length;p++)v=h[p],!(n.indexOf(v)>=0)&&Object.prototype.propertyIsEnumerable.call(o,v)&&(d[v]=o[v])}return d}},63366:function(s,f,e){"use strict";e.d(f,{Z:function(){return i}});function i(u,o){if(u==null)return{};var n={},d=Object.keys(u),v,p;for(p=0;p<d.length;p++)v=d[p],!(o.indexOf(v)>=0)&&(n[v]=u[v]);return n}},74165:function(s,f,e){"use strict";e.d(f,{Z:function(){return u}});var i=e(71002);function u(){"use strict";u=function(){return o};var o={},n=Object.prototype,d=n.hasOwnProperty,v=Object.defineProperty||function(ue,S,g){ue[S]=g.value},p=typeof Symbol=="function"?Symbol:{},h=p.iterator||"@@iterator",x=p.asyncIterator||"@@asyncIterator",y=p.toStringTag||"@@toStringTag";function b(ue,S,g){return Object.defineProperty(ue,S,{value:g,enumerable:!0,configurable:!0,writable:!0}),ue[S]}try{b({},"")}catch(ue){b=function(g,I,k){return g[I]=k}}function T(ue,S,g,I){var k=S&&S.prototype instanceof $?S:$,P=Object.create(k.prototype),D=new Oe(I||[]);return v(P,"_invoke",{value:q(ue,g,D)}),P}function A(ue,S,g){try{return{type:"normal",arg:ue.call(S,g)}}catch(I){return{type:"throw",arg:I}}}o.wrap=T;var C={};function $(){}function B(){}function L(){}var z={};b(z,h,function(){return this});var H=Object.getPrototypeOf,W=H&&H(H(Se([])));W&&W!==n&&d.call(W,h)&&(z=W);var R=L.prototype=$.prototype=Object.create(z);function F(ue){["next","throw","return"].forEach(function(S){b(ue,S,function(g){return this._invoke(S,g)})})}function V(ue,S){function g(k,P,D,oe){var he=A(ue[k],ue,P);if(he.type!=="throw"){var Re=he.arg,re=Re.value;return re&&(0,i.Z)(re)=="object"&&d.call(re,"__await")?S.resolve(re.__await).then(function(Ee){g("next",Ee,D,oe)},function(Ee){g("throw",Ee,D,oe)}):S.resolve(re).then(function(Ee){Re.value=Ee,D(Re)},function(Ee){return g("throw",Ee,D,oe)})}oe(he.arg)}var I;v(this,"_invoke",{value:function(P,D){function oe(){return new S(function(he,Re){g(P,D,he,Re)})}return I=I?I.then(oe,oe):oe()}})}function q(ue,S,g){var I="suspendedStart";return function(k,P){if(I==="executing")throw new Error("Generator is already running");if(I==="completed"){if(k==="throw")throw P;return Be()}for(g.method=k,g.arg=P;;){var D=g.delegate;if(D){var oe=Q(D,g);if(oe){if(oe===C)continue;return oe}}if(g.method==="next")g.sent=g._sent=g.arg;else if(g.method==="throw"){if(I==="suspendedStart")throw I="completed",g.arg;g.dispatchException(g.arg)}else g.method==="return"&&g.abrupt("return",g.arg);I="executing";var he=A(ue,S,g);if(he.type==="normal"){if(I=g.done?"completed":"suspendedYield",he.arg===C)continue;return{value:he.arg,done:g.done}}he.type==="throw"&&(I="completed",g.method="throw",g.arg=he.arg)}}}function Q(ue,S){var g=S.method,I=ue.iterator[g];if(I===void 0)return S.delegate=null,g==="throw"&&ue.iterator.return&&(S.method="return",S.arg=void 0,Q(ue,S),S.method==="throw")||g!=="return"&&(S.method="throw",S.arg=new TypeError("The iterator does not provide a '"+g+"' method")),C;var k=A(I,ue.iterator,S.arg);if(k.type==="throw")return S.method="throw",S.arg=k.arg,S.delegate=null,C;var P=k.arg;return P?P.done?(S[ue.resultName]=P.value,S.next=ue.nextLoc,S.method!=="return"&&(S.method="next",S.arg=void 0),S.delegate=null,C):P:(S.method="throw",S.arg=new TypeError("iterator result is not an object"),S.delegate=null,C)}function X(ue){var S={tryLoc:ue[0]};1 in ue&&(S.catchLoc=ue[1]),2 in ue&&(S.finallyLoc=ue[2],S.afterLoc=ue[3]),this.tryEntries.push(S)}function ie(ue){var S=ue.completion||{};S.type="normal",delete S.arg,ue.completion=S}function Oe(ue){this.tryEntries=[{tryLoc:"root"}],ue.forEach(X,this),this.reset(!0)}function Se(ue){if(ue){var S=ue[h];if(S)return S.call(ue);if(typeof ue.next=="function")return ue;if(!isNaN(ue.length)){var g=-1,I=function k(){for(;++g<ue.length;)if(d.call(ue,g))return k.value=ue[g],k.done=!1,k;return k.value=void 0,k.done=!0,k};return I.next=I}}return{next:Be}}function Be(){return{value:void 0,done:!0}}return B.prototype=L,v(R,"constructor",{value:L,configurable:!0}),v(L,"constructor",{value:B,configurable:!0}),B.displayName=b(L,y,"GeneratorFunction"),o.isGeneratorFunction=function(ue){var S=typeof ue=="function"&&ue.constructor;return!!S&&(S===B||(S.displayName||S.name)==="GeneratorFunction")},o.mark=function(ue){return Object.setPrototypeOf?Object.setPrototypeOf(ue,L):(ue.__proto__=L,b(ue,y,"GeneratorFunction")),ue.prototype=Object.create(R),ue},o.awrap=function(ue){return{__await:ue}},F(V.prototype),b(V.prototype,x,function(){return this}),o.AsyncIterator=V,o.async=function(ue,S,g,I,k){k===void 0&&(k=Promise);var P=new V(T(ue,S,g,I),k);return o.isGeneratorFunction(S)?P:P.next().then(function(D){return D.done?D.value:P.next()})},F(R),b(R,y,"Generator"),b(R,h,function(){return this}),b(R,"toString",function(){return"[object Generator]"}),o.keys=function(ue){var S=Object(ue),g=[];for(var I in S)g.push(I);return g.reverse(),function k(){for(;g.length;){var P=g.pop();if(P in S)return k.value=P,k.done=!1,k}return k.done=!0,k}},o.values=Se,Oe.prototype={constructor:Oe,reset:function(S){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(ie),!S)for(var g in this)g.charAt(0)==="t"&&d.call(this,g)&&!isNaN(+g.slice(1))&&(this[g]=void 0)},stop:function(){this.done=!0;var S=this.tryEntries[0].completion;if(S.type==="throw")throw S.arg;return this.rval},dispatchException:function(S){if(this.done)throw S;var g=this;function I(Re,re){return D.type="throw",D.arg=S,g.next=Re,re&&(g.method="next",g.arg=void 0),!!re}for(var k=this.tryEntries.length-1;k>=0;--k){var P=this.tryEntries[k],D=P.completion;if(P.tryLoc==="root")return I("end");if(P.tryLoc<=this.prev){var oe=d.call(P,"catchLoc"),he=d.call(P,"finallyLoc");if(oe&&he){if(this.prev<P.catchLoc)return I(P.catchLoc,!0);if(this.prev<P.finallyLoc)return I(P.finallyLoc)}else if(oe){if(this.prev<P.catchLoc)return I(P.catchLoc,!0)}else{if(!he)throw new Error("try statement without catch or finally");if(this.prev<P.finallyLoc)return I(P.finallyLoc)}}}},abrupt:function(S,g){for(var I=this.tryEntries.length-1;I>=0;--I){var k=this.tryEntries[I];if(k.tryLoc<=this.prev&&d.call(k,"finallyLoc")&&this.prev<k.finallyLoc){var P=k;break}}P&&(S==="break"||S==="continue")&&P.tryLoc<=g&&g<=P.finallyLoc&&(P=null);var D=P?P.completion:{};return D.type=S,D.arg=g,P?(this.method="next",this.next=P.finallyLoc,C):this.complete(D)},complete:function(S,g){if(S.type==="throw")throw S.arg;return S.type==="break"||S.type==="continue"?this.next=S.arg:S.type==="return"?(this.rval=this.arg=S.arg,this.method="return",this.next="end"):S.type==="normal"&&g&&(this.next=g),C},finish:function(S){for(var g=this.tryEntries.length-1;g>=0;--g){var I=this.tryEntries[g];if(I.finallyLoc===S)return this.complete(I.completion,I.afterLoc),ie(I),C}},catch:function(S){for(var g=this.tryEntries.length-1;g>=0;--g){var I=this.tryEntries[g];if(I.tryLoc===S){var k=I.completion;if(k.type==="throw"){var P=k.arg;ie(I)}return P}}throw new Error("illegal catch attempt")},delegateYield:function(S,g,I){return this.delegate={iterator:Se(S),resultName:g,nextLoc:I},this.method==="next"&&(this.arg=void 0),C}},o}},89611:function(s,f,e){"use strict";e.d(f,{Z:function(){return i}});function i(u,o){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(d,v){return d.__proto__=v,d},i(u,o)}},97685:function(s,f,e){"use strict";e.d(f,{Z:function(){return d}});var i=e(83878);function u(v,p){var h=v==null?null:typeof Symbol!="undefined"&&v[Symbol.iterator]||v["@@iterator"];if(h!=null){var x,y,b,T,A=[],C=!0,$=!1;try{if(b=(h=h.call(v)).next,p===0){if(Object(h)!==h)return;C=!1}else for(;!(C=(x=b.call(h)).done)&&(A.push(x.value),A.length!==p);C=!0);}catch(B){$=!0,y=B}finally{try{if(!C&&h.return!=null&&(T=h.return(),Object(T)!==T))return}finally{if($)throw y}}return A}}var o=e(40181),n=e(25267);function d(v,p){return(0,i.Z)(v)||u(v,p)||(0,o.Z)(v,p)||(0,n.Z)()}},74902:function(s,f,e){"use strict";e.d(f,{Z:function(){return v}});var i=e(30907);function u(p){if(Array.isArray(p))return(0,i.Z)(p)}var o=e(59199),n=e(40181);function d(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v(p){return u(p)||(0,o.Z)(p)||(0,n.Z)(p)||d()}},83997:function(s,f,e){"use strict";e.d(f,{Z:function(){return o}});var i=e(71002);function u(n,d){if((0,i.Z)(n)!=="object"||n===null)return n;var v=n[Symbol.toPrimitive];if(v!==void 0){var p=v.call(n,d||"default");if((0,i.Z)(p)!=="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(d==="string"?String:Number)(n)}function o(n){var d=u(n,"string");return(0,i.Z)(d)==="symbol"?d:String(d)}},71002:function(s,f,e){"use strict";e.d(f,{Z:function(){return i}});function i(u){return i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},i(u)}},40181:function(s,f,e){"use strict";e.d(f,{Z:function(){return u}});var i=e(30907);function u(o,n){if(o){if(typeof o=="string")return(0,i.Z)(o,n);var d=Object.prototype.toString.call(o).slice(8,-1);if(d==="Object"&&o.constructor&&(d=o.constructor.name),d==="Map"||d==="Set")return Array.from(o);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return(0,i.Z)(o,n)}}}},__webpack_module_cache__={};function __webpack_require__(s){var f=__webpack_module_cache__[s];if(f!==void 0)return f.exports;var e=__webpack_module_cache__[s]={id:s,loaded:!1,exports:{}};return __webpack_modules__[s].call(e.exports,e,e.exports,__webpack_require__),e.loaded=!0,e.exports}__webpack_require__.m=__webpack_modules__,function(){__webpack_require__.n=function(s){var f=s&&s.__esModule?function(){return s.default}:function(){return s};return __webpack_require__.d(f,{a:f}),f}}(),function(){__webpack_require__.d=function(s,f){for(var e in f)__webpack_require__.o(f,e)&&!__webpack_require__.o(s,e)&&Object.defineProperty(s,e,{enumerable:!0,get:f[e]})}}(),function(){__webpack_require__.f={},__webpack_require__.e=function(s){return Promise.all(Object.keys(__webpack_require__.f).reduce(function(f,e){return __webpack_require__.f[e](s,f),f},[]))}}(),function(){__webpack_require__.u=function(s){return""+({24:"BackTop__index.md",31:"Alert__demos",39:"docs__index.en-US.md",96:"dumi__theme__layouts__DocLayout",149:"Tabs__index.md",165:"Switch__index.md",242:"Alert__index.md",249:"Progress__index.md",298:"ConfigProvider__index.md",316:"BackTop__demos",400:"dumi__pages__404",408:"SwitchTile__demos",433:"demos",448:"dumi__pages__Demo",458:"dumi__theme__ContextWrapper",485:"Space__index.md",544:"Button__index.md",570:"Button__demos",594:"Breadcrumb__index.md",622:"Switch__demos",669:"Article__index.md",798:"hooks__a.md",922:"SwitchTile__index.md",935:"docs__index.md",937:"docs__guide.md"}[s]||s)+"."+{24:"05ceadfc",31:"bdf93d90",39:"ab6b4a34",96:"d9faaaa1",128:"d0610176",129:"c3a1491f",149:"ed5d46c3",165:"c70bdf3e",242:"43885744",249:"21a873d0",289:"4b7bb80f",298:"18b869c6",316:"33564bf3",384:"e8b0279a",400:"2f647c85",408:"0c2cc499",433:"865ce5cc",448:"fcaf79d2",458:"84f76881",485:"afbc0d66",544:"49d07e82",570:"bd323fdc",594:"a989eb72",622:"80f75ef2",669:"87469c9e",798:"db77a0d8",922:"5e7fd4d7",935:"efcf3ca9",937:"143d4566"}[s]+".async.js"}}(),function(){__webpack_require__.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(s){if(typeof window=="object")return window}}()}(),function(){__webpack_require__.hmd=function(s){return s=Object.create(s),s.children||(s.children=[]),Object.defineProperty(s,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+s.id)}}),s}}(),function(){__webpack_require__.o=function(s,f){return Object.prototype.hasOwnProperty.call(s,f)}}(),function(){var s={},f="react-papercss-design:";__webpack_require__.l=function(e,i,u,o){if(s[e]){s[e].push(i);return}var n,d;if(u!==void 0)for(var v=document.getElementsByTagName("script"),p=0;p<v.length;p++){var h=v[p];if(h.getAttribute("src")==e||h.getAttribute("data-webpack")==f+u){n=h;break}}n||(d=!0,n=document.createElement("script"),n.charset="utf-8",n.timeout=120,__webpack_require__.nc&&n.setAttribute("nonce",__webpack_require__.nc),n.setAttribute("data-webpack",f+u),n.src=e),s[e]=[i];var x=function(b,T){n.onerror=n.onload=null,clearTimeout(y);var A=s[e];if(delete s[e],n.parentNode&&n.parentNode.removeChild(n),A&&A.forEach(function(C){return C(T)}),b)return b(T)},y=setTimeout(x.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=x.bind(null,n.onerror),n.onload=x.bind(null,n.onload),d&&document.head.appendChild(n)}}(),function(){__webpack_require__.r=function(s){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})}}(),function(){__webpack_require__.nmd=function(s){return s.paths=[],s.children||(s.children=[]),s}}(),function(){__webpack_require__.p="/react-papercss-design/"}(),function(){__webpack_require__.b=document.baseURI||self.location.href;var s={620:0};__webpack_require__.f.j=function(i,u){var o=__webpack_require__.o(s,i)?s[i]:void 0;if(o!==0)if(o)u.push(o[2]);else{var n=new Promise(function(h,x){o=s[i]=[h,x]});u.push(o[2]=n);var d=__webpack_require__.p+__webpack_require__.u(i),v=new Error,p=function(h){if(__webpack_require__.o(s,i)&&(o=s[i],o!==0&&(s[i]=void 0),o)){var x=h&&(h.type==="load"?"missing":h.type),y=h&&h.target&&h.target.src;v.message="Loading chunk "+i+` failed.
(`+x+": "+y+")",v.name="ChunkLoadError",v.type=x,v.request=y,o[1](v)}};__webpack_require__.l(d,p,"chunk-"+i,i)}};var f=function(i,u){var o=u[0],n=u[1],d=u[2],v,p,h=0;if(o.some(function(y){return s[y]!==0})){for(v in n)__webpack_require__.o(n,v)&&(__webpack_require__.m[v]=n[v]);if(d)var x=d(__webpack_require__)}for(i&&i(u);h<o.length;h++)p=o[h],__webpack_require__.o(s,p)&&s[p]&&s[p][0](),s[p]=0},e=self.webpackChunkreact_papercss_design=self.webpackChunkreact_papercss_design||[];e.forEach(f.bind(null,0)),e.push=f.bind(null,e.push.bind(e))}(),function(){__webpack_require__.nc=void 0}();var __webpack_exports__={};(function(){"use strict";var s={};__webpack_require__.r(s),__webpack_require__.d(s,{modifyClientRenderOpts:function(){return Lu}});var f={};__webpack_require__.r(f),__webpack_require__.d(f,{innerProvider:function(){return eu}});var e={};__webpack_require__.r(e),__webpack_require__.d(e,{patchRoutes:function(){return Hs}});var i={};__webpack_require__.r(i),__webpack_require__.d(i,{i18nProvider:function(){return lo}});var u={};__webpack_require__.r(u),__webpack_require__.d(u,{modifyClientRenderOpts:function(){return su}});var o=__webpack_require__(17061),n=__webpack_require__.n(o),d=__webpack_require__(42122),v=__webpack_require__.n(d),p=__webpack_require__(17156),h=__webpack_require__.n(p),x=__webpack_require__(21703),y=__webpack_require__(9170),b=__webpack_require__(32120),T=__webpack_require__(52262),A=__webpack_require__(67635),C=__webpack_require__(77287),$=__webpack_require__(57658),B=__webpack_require__(85827),L=__webpack_require__(96644),z=__webpack_require__(46314),H=__webpack_require__(34668),W=__webpack_require__(81299),R=__webpack_require__(92087),F=__webpack_require__(24506),V=__webpack_require__(68757),q=__webpack_require__(48675),Q=__webpack_require__(63408),X=__webpack_require__(14590),ie=__webpack_require__(3462),Oe=__webpack_require__(16586),Se=__webpack_require__(19258),Be=__webpack_require__(84811),ue=__webpack_require__(34286),S=__webpack_require__(52550),g=__webpack_require__(1999),I=__webpack_require__(61886),k=__webpack_require__(59422),P=__webpack_require__(8e4),D=__webpack_require__(83475),oe=__webpack_require__(46273),he=__webpack_require__(56882),Re=__webpack_require__(78525),re=__webpack_require__(27004),Ee=__webpack_require__(3087),Ve=__webpack_require__(97391),Xe=__webpack_require__(4763),Ze=__webpack_require__(66342),ht=__webpack_require__(40787),Ct=__webpack_require__(1094),Bt=__webpack_require__(23647),pr=__webpack_require__(68216),$r=__webpack_require__(88449),tn=__webpack_require__(31672),tt=__webpack_require__(74326),Ie=__webpack_require__(15581),be=__webpack_require__(78631),ye=__webpack_require__(48746),je=__webpack_require__(57640),fe=__webpack_require__(25387),me=__webpack_require__(64211),de=__webpack_require__(12771),ge=__webpack_require__(62962),Me=__webpack_require__(71790),st=__webpack_require__(51568),it=__webpack_require__(26349),ft=__webpack_require__(30800),Mt=__webpack_require__(67427),Ft=__webpack_require__(32279),ee=__webpack_require__(13384),we=__webpack_require__(2490),se=__webpack_require__(85567),_e=__webpack_require__(18359),et=__webpack_require__(5332),at=__webpack_require__(79433),ut=__webpack_require__(59849),Lt=__webpack_require__(59461),Qe=__webpack_require__(82499),dt=__webpack_require__(34514),It=__webpack_require__(26877),Ue=__webpack_require__(64994),Ge=__webpack_require__(9924),nt=__webpack_require__(72608),bt=__webpack_require__(41874),ot=__webpack_require__(66043),kt=__webpack_require__(23748),Wt=__webpack_require__(71501),Kt=__webpack_require__(10072),Cr=__webpack_require__(23042),Pr=__webpack_require__(99137),xn=__webpack_require__(71957),Pn=__webpack_require__(96306),gn=__webpack_require__(103),ln=__webpack_require__(8582),Sn=__webpack_require__(90618),lr=__webpack_require__(74592),cn=__webpack_require__(88440),vn=__webpack_require__(58276),pa=__webpack_require__(35082),va=__webpack_require__(12813),dn=__webpack_require__(18222),ua=__webpack_require__(24838),Wn=__webpack_require__(38563),yr=__webpack_require__(50336),Sa=__webpack_require__(7512),Ma=__webpack_require__(74442),go=__webpack_require__(87713),Ea=__webpack_require__(46603),Fo=__webpack_require__(70100),yo=__webpack_require__(10490),mn=__webpack_require__(13187),zo=__webpack_require__(60092),Uo=__webpack_require__(19041),Tu=__webpack_require__(30666),ka=__webpack_require__(51638),bo=__webpack_require__(62975),xi=__webpack_require__(15728),wo=__webpack_require__(46056),ma=__webpack_require__(44299),Ou=__webpack_require__(5162),Rn=__webpack_require__(50292),xo=__webpack_require__(29427),Si=__webpack_require__(99964),ei=__webpack_require__(75238),ro=__webpack_require__(4987),Ei=__webpack_require__(1025),So=__webpack_require__(77479),$o=__webpack_require__(34582),Iu=__webpack_require__(47896),Ho=__webpack_require__(12647),Zo=__webpack_require__(98558),Wo=__webpack_require__(84018),m=__webpack_require__(97507),Z=__webpack_require__(61605),te=__webpack_require__(49076),ae=__webpack_require__(34999),ce=__webpack_require__(88921),Ae=__webpack_require__(96248),Je=__webpack_require__(27561),Et=__webpack_require__(13599),vr=__webpack_require__(11477),rt=__webpack_require__(64362),tr=__webpack_require__(15389),Qt=__webpack_require__(46006),Jt=__webpack_require__(3440),Sr=__webpack_require__(90401),Br=__webpack_require__(66244),Zr=__webpack_require__(45164),fn=__webpack_require__(89772),_n=__webpack_require__(91238),Za=__webpack_require__(88910),Ti=__webpack_require__(54837),no=__webpack_require__(87485),Eo=__webpack_require__(56767),ao=__webpack_require__(69916),ti=__webpack_require__(76651),ri=__webpack_require__(61437),Au=__webpack_require__(63252),fs=__webpack_require__(35285),Go=__webpack_require__(17454),Ta=__webpack_require__(39865),ni=__webpack_require__(86035),Oi=__webpack_require__(50058),Cu=__webpack_require__(67501),xl=__webpack_require__(85576),Ii=__webpack_require__(98275),ai=__webpack_require__(71842),Pu=__webpack_require__(609),Zi=__webpack_require__(21568),To=__webpack_require__(54534),Wi=__webpack_require__(95090),Ko=__webpack_require__(34744),Ru=__webpack_require__(48824),Mu=__webpack_require__(44130),Gi=__webpack_require__(35954),ku=__webpack_require__(16850),Qn=__webpack_require__(26182),Oo=__webpack_require__(8922),Ki=__webpack_require__(5835),oo=__webpack_require__(23767),js=__webpack_require__(8585),Vi=__webpack_require__(8970),Vo=__webpack_require__(84444),oi=__webpack_require__(68696),Yi=__webpack_require__(78206),ii=__webpack_require__(76478),Bs=__webpack_require__(79715),U=__webpack_require__(12714),J=__webpack_require__(5964),K=__webpack_require__(43561),xe=__webpack_require__(32049),Ye=__webpack_require__(86020),pt=__webpack_require__(56585),wt=__webpack_require__(82801),Tt=__webpack_require__(84633),zt=__webpack_require__(71550),Ut=__webpack_require__(61295),ar=__webpack_require__(35666),gr=__webpack_require__(26575),mr=__webpack_require__.n(gr),Tr=__webpack_require__(23187),_r=__webpack_require__.n(Tr),Kr=__webpack_require__(75553),En=__webpack_require__.n(Kr),Hn=__webpack_require__(41049),Oa=__webpack_require__.n(Hn),qn=__webpack_require__(5026),ui=__webpack_require__.n(qn),si=__webpack_require__(83357),io=__webpack_require__.n(si),Ai=__webpack_require__(53891),_a={};_a.styleTagTransform=io(),_a.setAttributes=Oa(),_a.insert=En().bind(null,"head"),_a.domAPI=_r(),_a.insertStyleElement=ui();var Xi=mr()(Ai.Z,_a),Io=Ai.Z&&Ai.Z.locals?Ai.Z.locals:void 0,ps=__webpack_require__(4942),Wa=__webpack_require__(1413),_u=__webpack_require__(97685),or=__webpack_require__(67294),Qi=__webpack_require__(20745),Ao=__webpack_require__(96974),Yo=__webpack_require__(34162),Sl=__webpack_require__(45987),Ji=__webpack_require__(87462),vs=__webpack_require__(59918),li=["redirect"];function ms(Ce){var Ke=Ce.routesById,ke=Ce.parentId,De=Ce.routeComponents;return Object.keys(Ke).filter(function(vt){return Ke[vt].parentId===ke}).map(function(vt){var gt=Pi((0,Wa.Z)({route:Ke[vt],routeComponent:De[vt],loadingComponent:Ce.loadingComponent,reactRouter5Compat:Ce.reactRouter5Compat},Ce.reactRouter5Compat&&{hasChildren:Object.keys(Ke).filter(function(rr){return Ke[rr].parentId===vt}).length>0})),_t=ms({routesById:Ke,routeComponents:De,parentId:gt.id,loadingComponent:Ce.loadingComponent,reactRouter5Compat:Ce.reactRouter5Compat});return _t.length>0&&(gt.children=_t,gt.routes=_t),gt})}function Ci(Ce){var Ke=(0,Ao.UO)(),ke=(0,Wa.Z)((0,Wa.Z)({},Ce),{},{to:(0,Ao.Gn)(Ce.to,Ke)});return or.createElement(Ao.Fg,(0,Ji.Z)({replace:!0},ke))}function Pi(Ce){var Ke=Ce.route,ke=Ke.redirect,De=(0,Sl.Z)(Ke,li),vt=Ce.reactRouter5Compat?Xo:hs;return(0,Wa.Z)({element:ke?or.createElement(Ci,{to:ke}):or.createElement(vs.X.Provider,{value:{route:Ce.route}},or.createElement(vt,{loader:or.memo(Ce.routeComponent),loadingComponent:Ce.loadingComponent||Fs,hasChildren:Ce.hasChildren}))},De)}function Fs(){return or.createElement("div",null)}function Xo(Ce){var Ke=(0,vs.Q)(),ke=Ke.route,De=(0,Yo.Ov)(),vt=De.history,gt=De.clientRoutes,_t=(0,Ao.UO)(),rr={params:_t,isExact:!0,path:ke.path,url:vt.location.pathname},Dr=Ce.loader;return or.createElement(or.Suspense,{fallback:or.createElement(Ce.loadingComponent,null)},or.createElement(Dr,{location:vt.location,match:rr,history:vt,params:_t,route:ke,routes:gt},Ce.hasChildren&&or.createElement(Ao.j3,null)))}function hs(Ce){var Ke=Ce.loader;return or.createElement(or.Suspense,{fallback:or.createElement(Ce.loadingComponent,null)},or.createElement(Ke,null))}var qi=null;function zs(){return qi}function gs(Ce){var Ke=Ce.history,ke=or.useState({action:Ke.action,location:Ke.location}),De=(0,_u.Z)(ke,2),vt=De[0],gt=De[1];return(0,or.useLayoutEffect)(function(){return Ke.listen(gt)},[Ke]),(0,or.useLayoutEffect)(function(){function _t(rr){Ce.pluginManager.applyPlugins({key:"onRouteChange",type:"event",args:{routes:Ce.routes,clientRoutes:Ce.clientRoutes,location:rr.location,action:rr.action,basename:Ce.basename,isFirst:Boolean(rr.isFirst)}})}Ke.listen(_t),_t({location:vt.location,action:vt.action,isFirst:!0})},[Ke,Ce.routes,Ce.clientRoutes]),or.createElement(Ao.F0,{navigator:Ke,location:vt.location,basename:Ce.basename},Ce.children)}function Us(){var Ce=(0,Yo.Ov)(),Ke=Ce.clientRoutes;return(0,Ao.V$)(Ke)}var Nu=["innerProvider","i18nProvider","accessProvider","dataflowProvider","outerProvider","rootContainer"],Du=function(Ke,ke){var De=Ke.basename||"/",vt=ms({routesById:Ke.routes,routeComponents:Ke.routeComponents,loadingComponent:Ke.loadingComponent,reactRouter5Compat:Ke.reactRouter5Compat});Ke.pluginManager.applyPlugins({key:"patchClientRoutes",type:"event",args:{routes:vt}});for(var gt=or.createElement(gs,{basename:De,pluginManager:Ke.pluginManager,routes:Ke.routes,clientRoutes:vt,history:Ke.history},ke),_t=0,rr=Nu;_t<rr.length;_t++){var Dr=rr[_t];gt=Ke.pluginManager.applyPlugins({type:"modify",key:Dr,initialValue:gt,args:{routes:Ke.routes,history:Ke.history,plugin:Ke.pluginManager}})}var ea=function(){var Da=(0,or.useState)({}),Zn=(0,_u.Z)(Da,2),Ka=Zn[0],Ni=Zn[1],Ca=(0,or.useState)(window.__UMI_LOADER_DATA__||{}),Va=(0,_u.Z)(Ca,2),Nn=Va[0],La=Va[1],Kn=(0,or.useCallback)(function(Di,du){var ta,ja=(((ta=(0,Ao.fp)(vt,Di,De))===null||ta===void 0?void 0:ta.map(function(ca){return ca.route.id}))||[]).filter(Boolean);ja.forEach(function(ca){var da,Ya,Mo=window.__umi_manifest__;if(Mo){var Is=ca.replace(/[\/\-]/g,"_"),Xu="preload-".concat(Is,".js");if(!document.getElementById(Xu)){var Qu=Object.keys(Mo).filter(function(Tn){return Tn.startsWith(Is+".")});Qu.forEach(function(Tn){if(!/\.(js|css)$/.test(Tn))throw Error("preload not support ".concat(Tn," file"));var Vr=Mo[Tn],ra=document.createElement("link");ra.rel="preload",ra.as="style",Tn.endsWith(".js")&&(ra.as="script",ra.id=Xu),Ke.runtimePublicPath&&(Vr=Vr.replace(new RegExp("^".concat(Ke.publicPath)),window.publicPath)),ra.href=Vr,document.head.appendChild(ra)})}}!du&&(da=Ke.routes[ca])!==null&&da!==void 0&&da.hasServerLoader&&fetch("/__serverLoader?route="+ca).then(function(Tn){return Tn.json()}).then(function(Tn){or.startTransition(function(){La(function(Vr){return(0,Wa.Z)((0,Wa.Z)({},Vr),{},(0,ps.Z)({},ca,Tn))})})}).catch(console.error);var ga=(Ya=Ke.routes[ca])===null||Ya===void 0?void 0:Ya.clientLoader;ga&&!Ka[ca]&&ga().then(function(Tn){Ni(function(Vr){return(0,Wa.Z)((0,Wa.Z)({},Vr),{},(0,ps.Z)({},ca,Tn))})})})},[Ka]);return(0,or.useEffect)(function(){return Kn(window.location.pathname,!0),Ke.history.listen(function(Di){Kn(Di.location.pathname)})},[]),(0,or.useLayoutEffect)(function(){typeof Ke.callback=="function"&&Ke.callback()},[]),or.createElement(Yo.Il.Provider,{value:{routes:Ke.routes,routeComponents:Ke.routeComponents,clientRoutes:vt,pluginManager:Ke.pluginManager,rootElement:Ke.rootElement,basename:De,clientLoaderData:Ka,serverLoaderData:Nn,preloadRoute:Kn,history:Ke.history}},gt)};return ea};function ci(Ce){var Ke=Ce.rootElement||document.getElementById("root"),ke=Du(Ce,or.createElement(Us,null));if(Ce.components)return ke;if(Ce.hydrate){Qi.hydrateRoot(Ke,or.createElement(ke,null));return}if(Qi.createRoot){qi=Qi.createRoot(Ke),qi.render(or.createElement(ke,null));return}Qi.render(or.createElement(ke,null),Ke)}function El(){return ys.apply(this,arguments)}function ys(){return ys=h()(n()().mark(function Ce(){var Ke;return n()().wrap(function(De){for(;;)switch(De.prev=De.next){case 0:return Ke={404:{id:"404",path:"*",parentId:"DocLayout"},"dumi-context-layout":{id:"dumi-context-layout",path:"/",isLayout:!0},DocLayout:{id:"DocLayout",path:"/",parentId:"dumi-context-layout",isLayout:!0},"docs/index.en-US":{path:"en-US/",id:"docs/index.en-US",parentId:"DocLayout"},"docs/guide":{path:"guide",id:"docs/guide",parentId:"DocLayout"},"docs/index":{path:"",id:"docs/index",parentId:"DocLayout"},"components/Alert/index":{id:"components/Alert/index",path:"components/alert",parentId:"DocLayout"},"components/Article/index":{id:"components/Article/index",path:"components/article",parentId:"DocLayout"},"components/BackTop/index":{id:"components/BackTop/index",path:"components/back-top",parentId:"DocLayout"},"components/Breadcrumb/index":{id:"components/Breadcrumb/index",path:"components/breadcrumb",parentId:"DocLayout"},"components/Button/index":{id:"components/Button/index",path:"components/button",parentId:"DocLayout"},"components/ConfigProvider/index":{id:"components/ConfigProvider/index",path:"components/config-provider",parentId:"DocLayout"},"components/Progress/index":{id:"components/Progress/index",path:"components/progress",parentId:"DocLayout"},"components/Space/index":{id:"components/Space/index",path:"components/space",parentId:"DocLayout"},"components/Switch/index":{id:"components/Switch/index",path:"components/switch",parentId:"DocLayout"},"components/SwitchTile/index":{id:"components/SwitchTile/index",path:"components/switch-tile",parentId:"DocLayout"},"components/Tabs/index":{id:"components/Tabs/index",path:"components/tabs",parentId:"DocLayout"},"hooks/a":{id:"hooks/a",path:"hooks/a",parentId:"DocLayout"},"demo-render":{id:"demo-render",path:"~demos/:id",parentId:"dumi-context-layout",prerender:!1}},De.abrupt("return",{routes:Ke,routeComponents:{404:or.lazy(function(){return __webpack_require__.e(400).then(__webpack_require__.bind(__webpack_require__,95225))}),"dumi-context-layout":or.lazy(function(){return __webpack_require__.e(458).then(__webpack_require__.bind(__webpack_require__,34576))}),DocLayout:or.lazy(function(){return Promise.all([__webpack_require__.e(128),__webpack_require__.e(96)]).then(__webpack_require__.bind(__webpack_require__,20142))}),"docs/index.en-US":or.lazy(function(){return Promise.all([__webpack_require__.e(129),__webpack_require__.e(39)]).then(__webpack_require__.bind(__webpack_require__,92432))}),"docs/guide":or.lazy(function(){return Promise.all([__webpack_require__.e(129),__webpack_require__.e(937)]).then(__webpack_require__.bind(__webpack_require__,48310))}),"docs/index":or.lazy(function(){return Promise.all([__webpack_require__.e(129),__webpack_require__.e(935)]).then(__webpack_require__.bind(__webpack_require__,2511))}),"components/Alert/index":or.lazy(function(){return Promise.all([__webpack_require__.e(129),__webpack_require__.e(242)]).then(__webpack_require__.bind(__webpack_require__,78734))}),"components/Article/index":or.lazy(function(){return Promise.all([__webpack_require__.e(129),__webpack_require__.e(669)]).then(__webpack_require__.bind(__webpack_require__,3499))}),"components/BackTop/index":or.lazy(function(){return Promise.all([__webpack_require__.e(129),__webpack_require__.e(24)]).then(__webpack_require__.bind(__webpack_require__,22534))}),"components/Breadcrumb/index":or.lazy(function(){return Promise.all([__webpack_require__.e(129),__webpack_require__.e(594)]).then(__webpack_require__.bind(__webpack_require__,67286))}),"components/Button/index":or.lazy(function(){return Promise.all([__webpack_require__.e(129),__webpack_require__.e(544)]).then(__webpack_require__.bind(__webpack_require__,24253))}),"components/ConfigProvider/index":or.lazy(function(){return Promise.all([__webpack_require__.e(129),__webpack_require__.e(298)]).then(__webpack_require__.bind(__webpack_require__,84467))}),"components/Progress/index":or.lazy(function(){return Promise.all([__webpack_require__.e(129),__webpack_require__.e(249)]).then(__webpack_require__.bind(__webpack_require__,8984))}),"components/Space/index":or.lazy(function(){return Promise.all([__webpack_require__.e(129),__webpack_require__.e(485)]).then(__webpack_require__.bind(__webpack_require__,64735))}),"components/Switch/index":or.lazy(function(){return Promise.all([__webpack_require__.e(129),__webpack_require__.e(165)]).then(__webpack_require__.bind(__webpack_require__,37673))}),"components/SwitchTile/index":or.lazy(function(){return Promise.all([__webpack_require__.e(129),__webpack_require__.e(922)]).then(__webpack_require__.bind(__webpack_require__,84738))}),"components/Tabs/index":or.lazy(function(){return Promise.all([__webpack_require__.e(129),__webpack_require__.e(149)]).then(__webpack_require__.bind(__webpack_require__,3364))}),"hooks/a":or.lazy(function(){return Promise.all([__webpack_require__.e(129),__webpack_require__.e(798)]).then(__webpack_require__.bind(__webpack_require__,3842))}),"demo-render":or.lazy(function(){return __webpack_require__.e(448).then(__webpack_require__.bind(__webpack_require__,4439))})}});case 2:case"end":return De.stop()}},Ce)})),ys.apply(this,arguments)}function Lu(Ce){var Ke=Ce.history,ke=Ce.hydrate;return v()(v()({},Ce),{},{hydrate:ke&&!["/~demos/:id"].includes(Ke.location.pathname)})}var $s=__webpack_require__(70405),Na={},eu=function(Ke){return or.createElement($s.B6,{context:Na},Ke)},di=__webpack_require__(86874),ju=__webpack_require__(9996),bs=__webpack_require__.n(ju),Hs=function(Ke){var ke=Ke.routes;Object.values(ke).forEach(function(De){if(di.C3[De.id]){var vt,gt;if((vt=De.meta)!==null&&vt!==void 0&&(gt=vt.frontmatter)!==null&&gt!==void 0&&gt.debug||di.C3[De.id].frontmatter.debug)delete ke[De.id];else{var _t;De.meta=bs()(De.meta,di.C3[De.id]),De.meta.tabs=(_t=De.meta.tabs)===null||_t===void 0?void 0:_t.map(function(rr){var Dr={frontmatter:{title:di.eA[rr].title},toc:[],texts:[]};return v()(v()({},di.eA[rr]),{},{meta:di.C3[rr]||Dr})})}}})},tu=__webpack_require__(27424),Tl=__webpack_require__.n(tu),ru=__webpack_require__(3922),Gn=__webpack_require__(82644),uo=__webpack_require__(5187),so=__webpack_require__(73107),sa=__webpack_require__(34857),Mn=__webpack_require__(14874),Bu=__webpack_require__(25687),fi=__webpack_require__(16284),Qr=__webpack_require__(88222),Or=__webpack_require__(19137);function Co(Ce,Ke){return Object.keys(Ce).reduce(function(ke,De){return ke[De]=(0,Mn.pi)({timeZone:Ke},Ce[De]),ke},{})}function nu(Ce,Ke){var ke=Object.keys((0,Mn.pi)((0,Mn.pi)({},Ce),Ke));return ke.reduce(function(De,vt){return De[vt]=(0,Mn.pi)((0,Mn.pi)({},Ce[vt]||{}),Ke[vt]||{}),De},{})}function Fu(Ce,Ke){if(!Ke)return Ce;var ke=fi.C.formats;return(0,Mn.pi)((0,Mn.pi)((0,Mn.pi)({},ke),Ce),{date:nu(Co(ke.date,Ke),Co(Ce.date||{},Ke)),time:nu(Co(ke.time,Ke),Co(Ce.time||{},Ke))})}var zu=function(Ce,Ke,ke,De,vt){var gt=Ce.locale,_t=Ce.formats,rr=Ce.messages,Dr=Ce.defaultLocale,ea=Ce.defaultFormats,Wr=Ce.fallbackOnEmptyString,Da=Ce.onError,Zn=Ce.timeZone,Ka=Ce.defaultRichTextElements;ke===void 0&&(ke={id:""});var Ni=ke.id,Ca=ke.defaultMessage;(0,Bu.kG)(!!Ni,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var Va=String(Ni),Nn=rr&&Object.prototype.hasOwnProperty.call(rr,Va)&&rr[Va];if(Array.isArray(Nn)&&Nn.length===1&&Nn[0].type===Or.wD.literal)return Nn[0].value;if(!De&&Nn&&typeof Nn=="string"&&!Ka)return Nn.replace(/'\{(.*?)\}'/gi,"{$1}");if(De=(0,Mn.pi)((0,Mn.pi)({},Ka),De||{}),_t=Fu(_t,Zn),ea=Fu(ea,Zn),!Nn){if(Wr===!1&&Nn==="")return Nn;if((!Ca||gt&&gt.toLowerCase()!==Dr.toLowerCase())&&Da(new Qr.$6(ke,gt)),Ca)try{var La=Ke.getMessageFormat(Ca,Dr,ea,vt);return La.format(De)}catch(Kn){return Da(new Qr.X9('Error formatting default message for: "'.concat(Va,'", rendering default message verbatim'),gt,ke,Kn)),typeof Ca=="string"?Ca:Va}return Va}try{var La=Ke.getMessageFormat(Nn,gt,_t,(0,Mn.pi)({formatters:Ke},vt||{}));return La.format(De)}catch(Kn){Da(new Qr.X9('Error formatting message: "'.concat(Va,'", using ').concat(Ca?"default message":"id"," as fallback."),gt,ke,Kn))}if(Ca)try{var La=Ke.getMessageFormat(Ca,Dr,ea,vt);return La.format(De)}catch(Kn){Da(new Qr.X9('Error formatting the default message for: "'.concat(Va,'", rendering message verbatim'),gt,ke,Kn))}return typeof Nn=="string"?Nn:typeof Ca=="string"?Ca:Va},Uu=["style","currency","currencyDisplay","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem"];function ws(Ce,Ke,ke){var De=Ce.locale,vt=Ce.formats,gt=Ce.onError;ke===void 0&&(ke={});var _t=ke.format,rr=_t&&(0,Gn.TB)(vt,"number",_t,gt)||{},Dr=(0,Gn.L6)(ke,Uu,rr);return Ke(De,Dr)}function $u(Ce,Ke,ke,De){De===void 0&&(De={});try{return ws(Ce,Ke,De).format(ke)}catch(vt){Ce.onError(new Qr.Rw(Qr.bc.FORMAT_ERROR,"Error formatting number.",vt))}return String(ke)}function Po(Ce,Ke,ke,De){De===void 0&&(De={});try{return ws(Ce,Ke,De).formatToParts(ke)}catch(vt){Ce.onError(new Qr.Rw(Qr.bc.FORMAT_ERROR,"Error formatting number.",vt))}return[]}var Ia=__webpack_require__(11050),Hu=["numeric","style"];function Zs(Ce,Ke,ke){var De=Ce.locale,vt=Ce.formats,gt=Ce.onError;ke===void 0&&(ke={});var _t=ke.format,rr=!!_t&&(0,Gn.TB)(vt,"relative",_t,gt)||{},Dr=(0,Gn.L6)(ke,Hu,rr);return Ke(De,Dr)}function Ol(Ce,Ke,ke,De,vt){vt===void 0&&(vt={}),De||(De="second");var gt=Intl.RelativeTimeFormat;gt||Ce.onError(new Ia.u_(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,Ia.jK.MISSING_INTL_API));try{return Zs(Ce,Ke,vt).format(ke,De)}catch(_t){Ce.onError(new Qr.Qe("Error formatting relative time.",Ce.locale,_t))}return String(ke)}var Ri=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function pi(Ce,Ke,ke,De){var vt=Ce.locale,gt=Ce.formats,_t=Ce.onError,rr=Ce.timeZone;De===void 0&&(De={});var Dr=De.format,ea=(0,Mn.pi)((0,Mn.pi)({},rr&&{timeZone:rr}),Dr&&(0,Gn.TB)(gt,Ke,Dr,_t)),Wr=(0,Gn.L6)(De,Ri,ea);return Ke==="time"&&!Wr.hour&&!Wr.minute&&!Wr.second&&!Wr.timeStyle&&!Wr.dateStyle&&(Wr=(0,Mn.pi)((0,Mn.pi)({},Wr),{hour:"numeric",minute:"numeric"})),ke(vt,Wr)}function au(Ce,Ke){for(var ke=[],De=2;De<arguments.length;De++)ke[De-2]=arguments[De];var vt=ke[0],gt=ke[1],_t=gt===void 0?{}:gt,rr=typeof vt=="string"?new Date(vt||0):vt;try{return pi(Ce,"date",Ke,_t).format(rr)}catch(Dr){Ce.onError(new Qr.Rw(Qr.bc.FORMAT_ERROR,"Error formatting date.",Dr))}return String(rr)}function xs(Ce,Ke){for(var ke=[],De=2;De<arguments.length;De++)ke[De-2]=arguments[De];var vt=ke[0],gt=ke[1],_t=gt===void 0?{}:gt,rr=typeof vt=="string"?new Date(vt||0):vt;try{return pi(Ce,"time",Ke,_t).format(rr)}catch(Dr){Ce.onError(new Qr.Rw(Qr.bc.FORMAT_ERROR,"Error formatting time.",Dr))}return String(rr)}function hn(Ce,Ke){for(var ke=[],De=2;De<arguments.length;De++)ke[De-2]=arguments[De];var vt=ke[0],gt=ke[1],_t=ke[2],rr=_t===void 0?{}:_t,Dr=Ce.timeZone,ea=Ce.locale,Wr=Ce.onError,Da=(0,Gn.L6)(rr,Ri,Dr?{timeZone:Dr}:{});try{return Ke(ea,Da).formatRange(vt,gt)}catch(Zn){Wr(new Qr.Rw(Qr.bc.FORMAT_ERROR,"Error formatting date time range.",Zn))}return String(vt)}function Zu(Ce,Ke){for(var ke=[],De=2;De<arguments.length;De++)ke[De-2]=arguments[De];var vt=ke[0],gt=ke[1],_t=gt===void 0?{}:gt,rr=typeof vt=="string"?new Date(vt||0):vt;try{return pi(Ce,"date",Ke,_t).formatToParts(rr)}catch(Dr){Ce.onError(new Qr.Rw(Qr.bc.FORMAT_ERROR,"Error formatting date.",Dr))}return[]}function Wu(Ce,Ke){for(var ke=[],De=2;De<arguments.length;De++)ke[De-2]=arguments[De];var vt=ke[0],gt=ke[1],_t=gt===void 0?{}:gt,rr=typeof vt=="string"?new Date(vt||0):vt;try{return pi(Ce,"time",Ke,_t).formatToParts(rr)}catch(Dr){Ce.onError(new Qr.Rw(Qr.bc.FORMAT_ERROR,"Error formatting time.",Dr))}return[]}var vi=["type"];function Ws(Ce,Ke,ke,De){var vt=Ce.locale,gt=Ce.onError;De===void 0&&(De={}),Intl.PluralRules||gt(new Ia.u_(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,Ia.jK.MISSING_INTL_API));var _t=(0,Gn.L6)(De,vi);try{return Ke(vt,_t).select(ke)}catch(rr){gt(new Qr.Qe("Error formatting plural.",vt,rr))}return"other"}var Gs=["type","style"],Mi=Date.now();function ki(Ce){return"".concat(Mi,"_").concat(Ce,"_").concat(Mi)}function mi(Ce,Ke,ke,De){De===void 0&&(De={});var vt=Ss(Ce,Ke,ke,De).reduce(function(gt,_t){var rr=_t.value;return typeof rr!="string"?gt.push(rr):typeof gt[gt.length-1]=="string"?gt[gt.length-1]+=rr:gt.push(rr),gt},[]);return vt.length===1?vt[0]:vt.length===0?"":vt}function Ss(Ce,Ke,ke,De){var vt=Ce.locale,gt=Ce.onError;De===void 0&&(De={});var _t=Intl.ListFormat;_t||gt(new Ia.u_(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,Ia.jK.MISSING_INTL_API));var rr=(0,Gn.L6)(De,Gs);try{var Dr={},ea=ke.map(function(Wr,Da){if(typeof Wr=="object"){var Zn=ki(Da);return Dr[Zn]=Wr,Zn}return String(Wr)});return Ke(vt,rr).formatToParts(ea).map(function(Wr){return Wr.type==="literal"?Wr:(0,Mn.pi)((0,Mn.pi)({},Wr),{value:Dr[Wr.value]||Wr.value})})}catch(Wr){gt(new Qr.Rw(Qr.bc.FORMAT_ERROR,"Error formatting list.",Wr))}return ke}var Il=["style","type","fallback","languageDisplay"];function Al(Ce,Ke,ke,De){var vt=Ce.locale,gt=Ce.onError,_t=Intl.DisplayNames;_t||gt(new Ia.u_(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,Ia.jK.MISSING_INTL_API));var rr=(0,Gn.L6)(De,Il);try{return Ke(vt,rr).of(ke)}catch(Dr){gt(new Qr.Rw(Qr.bc.FORMAT_ERROR,"Error formatting display name.",Dr))}}function Es(Ce){var Ke=Ce?Ce[Object.keys(Ce)[0]]:void 0;return typeof Ke=="string"}function ou(Ce){Ce.onWarn&&Ce.defaultRichTextElements&&Es(Ce.messages||{})&&Ce.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function iu(Ce,Ke){var ke=(0,Gn.ax)(Ke),De=(0,Mn.pi)((0,Mn.pi)({},Gn.Z0),Ce),vt=De.locale,gt=De.defaultLocale,_t=De.onError;return vt?!Intl.NumberFormat.supportedLocalesOf(vt).length&&_t?_t(new Qr.gb('Missing locale data for locale: "'.concat(vt,'" in Intl.NumberFormat. Using default locale: "').concat(gt,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(vt).length&&_t&&_t(new Qr.gb('Missing locale data for locale: "'.concat(vt,'" in Intl.DateTimeFormat. Using default locale: "').concat(gt,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(_t&&_t(new Qr.OV('"locale" was not configured, using "'.concat(gt,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),De.locale=De.defaultLocale||"en"),ou(De),(0,Mn.pi)((0,Mn.pi)({},De),{formatters:ke,formatNumber:$u.bind(null,De,ke.getNumberFormat),formatNumberToParts:Po.bind(null,De,ke.getNumberFormat),formatRelativeTime:Ol.bind(null,De,ke.getRelativeTimeFormat),formatDate:au.bind(null,De,ke.getDateTimeFormat),formatDateToParts:Zu.bind(null,De,ke.getDateTimeFormat),formatTime:xs.bind(null,De,ke.getDateTimeFormat),formatDateTimeRange:hn.bind(null,De,ke.getDateTimeFormat),formatTimeToParts:Wu.bind(null,De,ke.getDateTimeFormat),formatPlural:Ws.bind(null,De,ke.getPluralRules),formatMessage:zu.bind(null,De,ke),$t:zu.bind(null,De,ke),formatList:mi.bind(null,De,ke.getListFormat),formatListToParts:Ss.bind(null,De,ke.getListFormat),formatDisplayName:Al.bind(null,De,ke.getDisplayNames)})}var Ts=__webpack_require__(61092);function _i(Ce){return{locale:Ce.locale,timeZone:Ce.timeZone,fallbackOnEmptyString:Ce.fallbackOnEmptyString,formats:Ce.formats,textComponent:Ce.textComponent,messages:Ce.messages,defaultLocale:Ce.defaultLocale,defaultFormats:Ce.defaultFormats,onError:Ce.onError,onWarn:Ce.onWarn,wrapRichTextChunksInFragment:Ce.wrapRichTextChunksInFragment,defaultRichTextElements:Ce.defaultRichTextElements}}function Gu(Ce){return Ce&&Object.keys(Ce).reduce(function(Ke,ke){var De=Ce[ke];return Ke[ke]=(0,Ts.Gt)(De)?(0,sa.dt)(De):De,Ke},{})}var Ku=function(Ce,Ke,ke,De){for(var vt=[],gt=4;gt<arguments.length;gt++)vt[gt-4]=arguments[gt];var _t=Gu(De),rr=zu.apply(void 0,(0,uo.ev)([Ce,Ke,ke,_t],vt,!1));return Array.isArray(rr)?or.Children.toArray(rr):rr},Vu=function(Ce,Ke){var ke=Ce.defaultRichTextElements,De=(0,uo._T)(Ce,["defaultRichTextElements"]),vt=Gu(ke),gt=iu((0,uo.pi)((0,uo.pi)((0,uo.pi)({},sa.Z0),De),{defaultRichTextElements:vt}),Ke),_t={locale:gt.locale,timeZone:gt.timeZone,fallbackOnEmptyString:gt.fallbackOnEmptyString,formats:gt.formats,defaultLocale:gt.defaultLocale,defaultFormats:gt.defaultFormats,messages:gt.messages,onError:gt.onError,defaultRichTextElements:vt};return(0,uo.pi)((0,uo.pi)({},gt),{formatMessage:Ku.bind(null,_t,gt.formatters),$t:Ku.bind(null,_t,gt.formatters)})},Cl=function(Ce){(0,uo.ZT)(Ke,Ce);function Ke(){var ke=Ce!==null&&Ce.apply(this,arguments)||this;return ke.cache=(0,Gn.Sn)(),ke.state={cache:ke.cache,intl:Vu(_i(ke.props),ke.cache),prevConfig:_i(ke.props)},ke}return Ke.getDerivedStateFromProps=function(ke,De){var vt=De.prevConfig,gt=De.cache,_t=_i(ke);return(0,sa.wU)(vt,_t)?null:{intl:Vu(_t,gt),prevConfig:_t}},Ke.prototype.render=function(){return(0,sa.lq)(this.state.intl),or.createElement(so.zt,{value:this.state.intl},this.props.children)},Ke.displayName="IntlProvider",Ke.defaultProps=sa.Z0,Ke}(or.PureComponent),Pl=null,Rl=__webpack_require__(77742),uu=__webpack_require__(90482),Ro=__webpack_require__(85893),Ks=(0,Gn.Sn)(),hi=function(Ke){var ke=(0,or.useCallback)(function(){var rr=uu.k.slice().reverse().find(function(ea){return"suffix"in ea?ru.m8.location.pathname.replace(/([^/])\/$/,"$1").endsWith(ea.suffix):ru.m8.location.pathname.replace(/([^/])\/$/,"$1").startsWith("/react-papercss-design"+ea.base)}),Dr=rr?rr.id:uu.k[0].id;return Vu({locale:Dr,messages:uu.s[Dr]||{}},Ks)},[]),De=(0,or.useState)(function(){return ke()}),vt=Tl()(De,2),gt=vt[0],_t=vt[1];return(0,Rl.LI)(function(){return ru.m8.listen(function(){_t(ke())})},[]),(0,Ro.jsx)(so.zt,{value:gt,children:Ke.children},gt.locale)};function lo(Ce){return or.createElement(hi,null,Ce)}function su(Ce){var Ke=Ce.history,ke=Ce.hydrate;return v()(v()({},Ce),{},{hydrate:ke&&!Ke.location.pathname.startsWith("/~demos")})}var ha=__webpack_require__(70994);function Vs(Ce){return Ce.default?typeof Ce.default=="function"?Ce.default():Ce.default:Ce}function Ml(){return[{apply:s,path:void 0},{apply:f,path:void 0},{apply:e,path:void 0},{apply:i,path:void 0},{apply:u,path:void 0}]}function Ys(){return["patchRoutes","patchClientRoutes","modifyContextOpts","modifyClientRenderOpts","rootContainer","innerProvider","i18nProvider","accessProvider","dataflowProvider","outerProvider","render","onRouteChange"]}var Ga=null;function lu(){return Ga=ha.Q$.create({plugins:Ml(),validKeys:Ys()}),Ga}function cu(){return Ga}var Yu=__webpack_require__(82651),Os="/react-papercss-design/",gi=!1;function Aa(){return Yr.apply(this,arguments)}function Yr(){return Yr=h()(n()().mark(function Ce(){var Ke,ke,De,vt,gt,_t,rr,Dr;return n()().wrap(function(Wr){for(;;)switch(Wr.prev=Wr.next){case 0:return Ke=lu(),Wr.next=3,El(Ke);case 3:return ke=Wr.sent,De=ke.routes,vt=ke.routeComponents,Wr.next=8,Ke.applyPlugins({key:"patchRoutes",type:ha.Ac.event,args:{routes:De,routeComponents:vt}});case 8:return gt=Ke.applyPlugins({key:"modifyContextOpts",type:ha.Ac.modify,initialValue:{}}),_t=gt.basename||"/react-papercss-design/",rr=gt.historyType||"browser",Dr=(0,Yu.f)(v()({type:rr,basename:_t},gt.historyOpts)),Wr.abrupt("return",Ke.applyPlugins({key:"render",type:ha.Ac.compose,initialValue:function(){var Zn={routes:De,routeComponents:vt,pluginManager:Ke,rootElement:gt.rootElement||document.getElementById("root"),publicPath:Os,runtimePublicPath:gi,history:Dr,historyType:rr,basename:_t,callback:gt.callback},Ka=Ke.applyPlugins({key:"modifyClientRenderOpts",type:ha.Ac.modify,initialValue:Zn});return ci(Ka)}})());case 13:case"end":return Wr.stop()}},Ce)})),Yr.apply(this,arguments)}typeof history!="undefined"&&location.pathname.length>1&&location.pathname.endsWith("/")&&history.replaceState({},"",location.pathname.slice(0,-1)+location.search+location.hash),function(){var Ce=typeof navigator!="undefined"&&navigator.cookieEnabled&&typeof window.localStorage!="undefined"&&localStorage.getItem("dumi:prefers-color")||"light",Ke=window.matchMedia("(prefers-color-scheme: dark)").matches,ke=["light","dark","auto"];document.documentElement.setAttribute("data-prefers-color",Ce===ke[2]?Ke?ke[1]:ke[0]:ke.indexOf(Ce)>-1?Ce:ke[0])}(),Aa(),window.g_umi={version:"4.0.65"}})()})();
}());
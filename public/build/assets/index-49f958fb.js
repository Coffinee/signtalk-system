import{o as Q,b as q,d as K,V as ie,r as P,q as le,W as ue,X,Y as ce,Z as Y,E as Z,Q as G,_ as fe,$ as pe,J as L,c as $,P as de,C as ve}from"./app-27a2ce1b.js";function tt(e,t){return Q(),q("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[K("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"})])}function rt(e,t){return Q(),q("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[K("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})])}function U(e){return fe()?(pe(e),!0):!1}function E(e){return typeof e=="function"?e():le(e)}const me=typeof window<"u",ee=()=>{};function _e(e,t){function r(...n){return new Promise((a,o)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(a).catch(o)})}return r}const te=e=>e();function ge(e=te){const t=P(!0);function r(){t.value=!1}function n(){t.value=!0}const a=(...o)=>{t.value&&e(...o)};return{isActive:X(t),pause:r,resume:n,eventFilter:a}}function re(...e){if(e.length!==1)return ue(...e);const t=e[0];return typeof t=="function"?X(ce(()=>({get:t,set:ee}))):P(t)}function he(e,t=!0){Y()?Z(e):t?e():G(e)}function nt(e=!1,t={}){const{truthyValue:r=!0,falsyValue:n=!1}=t,a=ie(e),o=P(e);function i(l){if(arguments.length)return o.value=l,o.value;{const g=E(r);return o.value=o.value===g?E(n):g,o.value}}return a?i:[o,i]}var V=Object.getOwnPropertySymbols,ye=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable,Oe=(e,t)=>{var r={};for(var n in e)ye.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&V)for(var n of V(e))t.indexOf(n)<0&&we.call(e,n)&&(r[n]=e[n]);return r};function be(e,t,r={}){const n=r,{eventFilter:a=te}=n,o=Oe(n,["eventFilter"]);return L(e,_e(a,t),o)}var Pe=Object.defineProperty,Se=Object.defineProperties,$e=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,ne=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable,F=(e,t,r)=>t in e?Pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ee=(e,t)=>{for(var r in t||(t={}))ne.call(t,r)&&F(e,r,t[r]);if(N)for(var r of N(t))ae.call(t,r)&&F(e,r,t[r]);return e},je=(e,t)=>Se(e,$e(t)),Ce=(e,t)=>{var r={};for(var n in e)ne.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&N)for(var n of N(e))t.indexOf(n)<0&&ae.call(e,n)&&(r[n]=e[n]);return r};function Ae(e,t,r={}){const n=r,{eventFilter:a}=n,o=Ce(n,["eventFilter"]),{eventFilter:i,pause:l,resume:g,isActive:h}=ge(a);return{stop:be(e,t,je(Ee({},o),{eventFilter:i})),pause:l,resume:g,isActive:h}}function oe(e){var t;const r=E(e);return(t=r==null?void 0:r.$el)!=null?t:r}const j=me?window:void 0;function I(...e){let t,r,n,a;if(typeof e[0]=="string"||Array.isArray(e[0])?([r,n,a]=e,t=j):[t,r,n,a]=e,!t)return ee;Array.isArray(r)||(r=[r]),Array.isArray(n)||(n=[n]);const o=[],i=()=>{o.forEach(f=>f()),o.length=0},l=(f,p,y,_)=>(f.addEventListener(p,y,_),()=>f.removeEventListener(p,y,_)),g=L(()=>[oe(t),E(a)],([f,p])=>{i(),f&&o.push(...r.flatMap(y=>n.map(_=>l(f,y,_,p))))},{immediate:!0,flush:"post"}),h=()=>{g(),i()};return U(h),h}function Me(){const e=P(!1);return Y()&&Z(()=>{e.value=!0}),e}function ke(e){const t=Me();return $(()=>(t.value,!!e()))}function De(e,t={}){const{window:r=j}=t,n=ke(()=>r&&"matchMedia"in r&&typeof r.matchMedia=="function");let a;const o=P(!1),i=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",l):a.removeListener(l))},l=()=>{n.value&&(i(),a=r.matchMedia(re(e).value),o.value=!!(a!=null&&a.matches),a&&("addEventListener"in a?a.addEventListener("change",l):a.addListener(l)))};return ve(l),U(()=>i()),o}const k=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D="__vueuse_ssr_handlers__",Ne=Le();function Le(){return D in k||(k[D]=k[D]||{}),k[D]}function se(e,t){return Ne[e]||t}function Ve(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Fe=Object.defineProperty,x=Object.getOwnPropertySymbols,Ie=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable,T=(e,t,r)=>t in e?Fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,R=(e,t)=>{for(var r in t||(t={}))Ie.call(t,r)&&T(e,r,t[r]);if(x)for(var r of x(t))xe.call(t,r)&&T(e,r,t[r]);return e};const Te={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},z="vueuse-storage";function Re(e,t,r,n={}){var a;const{flush:o="pre",deep:i=!0,listenToStorageChanges:l=!0,writeDefaults:g=!0,mergeDefaults:h=!1,shallow:f,window:p=j,eventFilter:y,onError:_=s=>{console.error(s)}}=n,v=(f?de:P)(t);if(!r)try{r=se("getDefaultStorage",()=>{var s;return(s=j)==null?void 0:s.localStorage})()}catch(s){_(s)}if(!r)return v;const m=E(t),C=Ve(m),O=(a=n.serializer)!=null?a:Te[C],{pause:A,resume:S}=Ae(v,()=>c(v.value),{flush:o,deep:i,eventFilter:y});return p&&l&&(I(p,"storage",w),I(p,z,M)),w(),v;function c(s){try{if(s==null)r.removeItem(e);else{const u=O.write(s),d=r.getItem(e);d!==u&&(r.setItem(e,u),p&&p.dispatchEvent(new CustomEvent(z,{detail:{key:e,oldValue:d,newValue:u,storageArea:r}})))}}catch(u){_(u)}}function b(s){const u=s?s.newValue:r.getItem(e);if(u==null)return g&&m!==null&&r.setItem(e,O.write(m)),m;if(!s&&h){const d=O.read(u);return typeof h=="function"?h(d,m):C==="object"&&!Array.isArray(d)?R(R({},m),d):d}else return typeof u!="string"?u:O.read(u)}function M(s){w(s.detail)}function w(s){if(!(s&&s.storageArea!==r)){if(s&&s.key==null){v.value=m;return}if(!(s&&s.key!==e)){A();try{v.value=b(s)}catch(u){_(u)}finally{s?G(S):S()}}}}}function ze(e){return De("(prefers-color-scheme: dark)",e)}var Be=Object.defineProperty,B=Object.getOwnPropertySymbols,Je=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable,J=(e,t,r)=>t in e?Be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,He=(e,t)=>{for(var r in t||(t={}))Je.call(t,r)&&J(e,r,t[r]);if(B)for(var r of B(t))We.call(t,r)&&J(e,r,t[r]);return e};function Qe(e={}){const{selector:t="html",attribute:r="class",initialValue:n="auto",window:a=j,storage:o,storageKey:i="vueuse-color-scheme",listenToStorageChanges:l=!0,storageRef:g,emitAuto:h,disableTransition:f=!0}=e,p=He({auto:"",light:"light",dark:"dark"},e.modes||{}),y=ze({window:a}),_=$(()=>y.value?"dark":"light"),v=g||(i==null?re(n):Re(i,n,o,{window:a,listenToStorageChanges:l})),m=$(()=>v.value==="auto"?_.value:v.value),C=se("updateHTMLAttrs",(c,b,M)=>{const w=typeof c=="string"?a==null?void 0:a.document.querySelector(c):oe(c);if(!w)return;let s;if(f&&(s=a.document.createElement("style"),s.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),a.document.head.appendChild(s)),b==="class"){const u=M.split(/\s/g);Object.values(p).flatMap(d=>(d||"").split(/\s/g)).filter(Boolean).forEach(d=>{u.includes(d)?w.classList.add(d):w.classList.remove(d)})}else w.setAttribute(b,M);f&&(a.getComputedStyle(s).opacity,document.head.removeChild(s))});function O(c){var b;C(t,r,(b=p[c])!=null?b:c)}function A(c){e.onChanged?e.onChanged(c,O):O(c)}L(m,A,{flush:"post",immediate:!0}),he(()=>A(m.value));const S=$({get(){return h?v.value:m.value},set(c){v.value=c}});try{return Object.assign(S,{store:v,system:_,state:m})}catch{return S}}var qe=Object.defineProperty,Ke=Object.defineProperties,Xe=Object.getOwnPropertyDescriptors,W=Object.getOwnPropertySymbols,Ye=Object.prototype.hasOwnProperty,Ze=Object.prototype.propertyIsEnumerable,H=(e,t,r)=>t in e?qe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ge=(e,t)=>{for(var r in t||(t={}))Ye.call(t,r)&&H(e,r,t[r]);if(W)for(var r of W(t))Ze.call(t,r)&&H(e,r,t[r]);return e},Ue=(e,t)=>Ke(e,Xe(t));function at(e={}){const{valueDark:t="dark",valueLight:r=""}=e,n=Qe(Ue(Ge({},e),{onChanged:(o,i)=>{var l;e.onChanged?(l=e.onChanged)==null||l.call(e,o==="dark",i,o):i(o)},modes:{dark:t,light:r}}));return $({get(){return n.value==="dark"},set(o){const i=o?"dark":"light";n.system.value===i?n.value="auto":n.value=i}})}export{nt as a,rt as b,tt as r,at as u};
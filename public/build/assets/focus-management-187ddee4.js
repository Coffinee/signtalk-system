import{R as A,D as x,F,Q as P}from"./app-27a2ce1b.js";function w(e,t,...n){if(e in t){let o=t[e];return typeof o=="function"?o(...n):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,w),r}var $=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))($||{}),T=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(T||{});function ee({visible:e=!0,features:t=0,ourProps:n,theirProps:r,...o}){var a;let l=O(r,n),i=Object.assign(o,{props:l});if(e||t&2&&l.static)return b(i);if(t&1){let m=(a=l.unmount)==null||a?0:1;return w(m,{[0](){return null},[1](){return b({...o,props:{...l,hidden:!0,style:{display:"none"}}})}})}return b(i)}function b({props:e,attrs:t,slots:n,slot:r,name:o}){var a,l;let{as:i,...m}=D(e,["unmount","static"]),c=(a=n.default)==null?void 0:a.call(n,r),h={};if(r){let f=!1,p=[];for(let[d,u]of Object.entries(r))typeof u=="boolean"&&(f=!0),u===!0&&p.push(d);f&&(h["data-headlessui-state"]=p.join(" "))}if(i==="template"){if(c=E(c??[]),Object.keys(m).length>0||Object.keys(t).length>0){let[f,...p]=c??[];if(!I(f)||p.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${o} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(m).concat(Object.keys(t)).map(s=>s.trim()).filter((s,v,S)=>S.indexOf(s)===v).sort((s,v)=>s.localeCompare(v)).map(s=>`  - ${s}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(s=>`  - ${s}`).join(`
`)].join(`
`));let d=O((l=f.props)!=null?l:{},m),u=A(f,d);for(let s in d)s.startsWith("on")&&(u.props||(u.props={}),u.props[s]=d[s]);return u}return Array.isArray(c)&&c.length===1?c[0]:c}return x(i,Object.assign({},m,h),{default:()=>c})}function E(e){return e.flatMap(t=>t.type===F?E(t.children):[t])}function O(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](o,...a){let l=n[r];for(let i of l){if(o instanceof Event&&o.defaultPrevented)return;i(o,...a)}}});return t}function te(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function D(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function I(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let k=0;function L(){return++k}function ne(){return L()}var M=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(M||{});function U(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}var R=Object.defineProperty,_=(e,t,n)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t,n)=>(_(e,typeof t!="symbol"?t+"":t,n),n);class H{constructor(){g(this,"current",this.detect()),g(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let K=new H;function N(e){if(K.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=U(e);if(t)return t.ownerDocument}return document}let y=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var C=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(C||{}),W=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(W||{}),G=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(G||{});function j(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(y)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var V=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(V||{});function B(e,t=0){var n;return e===((n=N(e))==null?void 0:n.body)?!1:w(t,{[0](){return e.matches(y)},[1](){let r=e;for(;r!==null;){if(r.matches(y))return!0;r=r.parentElement}return!1}})}function re(e){let t=N(e);P(()=>{t&&!B(t.activeElement,0)&&q(e)})}var X=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(X||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function q(e){e==null||e.focus({preventScroll:!0})}let Q=["textarea","input"].join(",");function Y(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Q))!=null?n:!1}function z(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),a=t(r);if(o===null||a===null)return 0;let l=o.compareDocumentPosition(a);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function oe(e,t){return J(j(),t,{relativeTo:e})}function J(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){var a;let l=(a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?a:document,i=Array.isArray(e)?n?z(e):e:j(e);o.length>0&&i.length>1&&(i=i.filter(u=>!o.includes(u))),r=r??l.activeElement;let m=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,i.indexOf(r))-1;if(t&4)return Math.max(0,i.indexOf(r))+1;if(t&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),h=t&32?{preventScroll:!0}:{},f=0,p=i.length,d;do{if(f>=p||f+p<=0)return 0;let u=c+f;if(t&16)u=(u+p)%p;else{if(u<0)return 3;if(u>=p)return 1}d=i[u],d==null||d.focus(h),f+=m}while(d!==l.activeElement);return t&6&&Y(d)&&d.select(),2}export{j as E,ee as H,te as K,C as N,z as O,J as P,q as S,W as T,re as _,$ as a,M as b,D as c,T as d,K as e,V as h,N as m,U as o,ne as t,w as u,oe as v,B as w};
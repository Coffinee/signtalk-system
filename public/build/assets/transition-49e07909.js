import{A as X,r as b,D as Y,c as w,E,G as Z,C as A,J as oe,B as x,n as se,H as D}from"./app-27a2ce1b.js";import{a as ue,d as g,t as de,u as $,o as Q,e as fe,H as _,c as ve}from"./focus-management-187ddee4.js";import{C as pe,c as me,l as p,p as ce}from"./use-outside-click-aa815f53.js";function P(){let e=[],t={addEventListener(n,r,i,a){return n.addEventListener(r,i,a),t.add(()=>n.removeEventListener(r,i,a))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let r=setTimeout(...n);t.add(()=>clearTimeout(r))},style(n,r,i){let a=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:i}),this.add(()=>{Object.assign(n.style,{[r]:a})})},group(n){let r=P();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let i of e.splice(r,1))i()}},dispose(){for(let n of e.splice(0))n()}};return t}function he(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function H(e,...t){e&&t.length>0&&e.classList.add(...t)}function F(e,...t){e&&t.length>0&&e.classList.remove(...t)}var j=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(j||{});function ge(e,t){let n=P();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:i}=getComputedStyle(e),[a,l]=[r,i].map(o=>{let[s=0]=o.split(",").filter(Boolean).map(u=>u.includes("ms")?parseFloat(u):parseFloat(u)*1e3).sort((u,d)=>d-u);return s});return a!==0?n.setTimeout(()=>t("finished"),a+l):t("finished"),n.add(()=>t("cancelled")),n.dispose}function W(e,t,n,r,i,a){let l=P(),o=a!==void 0?he(a):()=>{};return F(e,...i),H(e,...t,...n),l.nextFrame(()=>{F(e,...n),H(e,...r),l.add(ge(e,s=>(F(e,...r,...t),H(e,...i),o(s))))}),l.add(()=>F(e,...t,...n,...r,...i)),l.add(()=>o("cancelled")),l.dispose}function h(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let U=Symbol("TransitionContext");var be=(e=>(e.Visible="visible",e.Hidden="hidden",e))(be||{});function ye(){return D(U,null)!==null}function Ee(){let e=D(U,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function Se(){let e=D(q,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let q=Symbol("NestingContext");function C(e){return"children"in e?C(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function k(e){let t=b([]),n=b(!1);E(()=>n.value=!0),Z(()=>n.value=!1);function r(a,l=g.Hidden){let o=t.value.findIndex(({id:s})=>s===a);o!==-1&&($(l,{[g.Unmount](){t.value.splice(o,1)},[g.Hidden](){t.value[o].state="hidden"}}),!C(t)&&n.value&&(e==null||e()))}function i(a){let l=t.value.find(({id:o})=>o===a);return l?l.state!=="visible"&&(l.state="visible"):t.value.push({id:a,state:"visible"}),()=>r(a,g.Unmount)}return{children:t,register:i,unregister:r}}let K=ue.RenderStrategy,Te=X({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:r,expose:i}){let a=b(0);function l(){a.value|=p.Opening,t("beforeEnter")}function o(){a.value&=~p.Opening,t("afterEnter")}function s(){a.value|=p.Closing,t("beforeLeave")}function u(){a.value&=~p.Closing,t("afterLeave")}if(!ye()&&pe())return()=>Y(Fe,{...e,onBeforeEnter:l,onAfterEnter:o,onBeforeLeave:s,onAfterLeave:u},r);let d=b(null),S=w(()=>e.unmount?g.Unmount:g.Hidden);i({el:d,$el:d});let{show:m,appear:M}=Ee(),{register:R,unregister:B}=Se(),f=b(m.value?"visible":"hidden"),V={value:!0},y=de(),T={value:!1},N=k(()=>{!T.value&&f.value!=="hidden"&&(f.value="hidden",B(y),u())});E(()=>{let v=R(y);Z(v)}),A(()=>{if(S.value===g.Hidden&&y){if(m.value&&f.value!=="visible"){f.value="visible";return}$(f.value,{hidden:()=>B(y),visible:()=>R(y)})}});let I=h(e.enter),z=h(e.enterFrom),ee=h(e.enterTo),G=h(e.entered),te=h(e.leave),ne=h(e.leaveFrom),re=h(e.leaveTo);E(()=>{A(()=>{if(f.value==="visible"){let v=Q(d);if(v instanceof Comment&&v.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function ae(v){let O=V.value&&!M.value,c=Q(d);!c||!(c instanceof HTMLElement)||O||(T.value=!0,m.value&&l(),m.value||s(),v(m.value?W(c,I,z,ee,G,L=>{T.value=!1,L===j.Finished&&o()}):W(c,te,ne,re,G,L=>{T.value=!1,L===j.Finished&&(C(N)||(f.value="hidden",B(y),u()))})))}return E(()=>{oe([m],(v,O,c)=>{ae(c),V.value=!1},{immediate:!0})}),x(q,N),me(w(()=>$(f.value,{visible:p.Open,hidden:p.Closed})|a.value)),()=>{let{appear:v,show:O,enter:c,enterFrom:L,enterTo:we,entered:Ae,leave:Ce,leaveFrom:Be,leaveTo:Oe,...J}=e,le={ref:d},ie={...J,...M.value&&m.value&&fe.isServer?{class:se([n.class,J.class,...I,...z])}:{}};return _({theirProps:ie,ourProps:le,slot:{},slots:r,attrs:n,features:K,visible:f.value==="visible",name:"TransitionChild"})}}}),Le=Te,Fe=X({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:r}){let i=ce(),a=w(()=>e.show===null&&i!==null?(i.value&p.Open)===p.Open:e.show);A(()=>{if(![!0,!1].includes(a.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let l=b(a.value?"visible":"hidden"),o=k(()=>{l.value="hidden"}),s=b(!0),u={show:a,appear:w(()=>e.appear||!s.value)};return E(()=>{A(()=>{s.value=!1,a.value?l.value="visible":C(o)||(l.value="hidden")})}),x(q,o),x(U,u),()=>{let d=ve(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),S={unmount:e.unmount};return _({ourProps:{...S,as:"template"},theirProps:{},slot:{},slots:{...r,default:()=>[Y(Le,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...n,...S,...d},r.default)]},attrs:{},features:K,visible:l.value==="visible",name:"Transition"})}}});export{Fe as S,Te as h,P as r};
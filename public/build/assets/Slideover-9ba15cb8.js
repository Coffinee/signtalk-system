import{r as c,o as f,y as u,j as t,i as s,q as a,d as e,n as p,t as l,I as x}from"./app-96f38ead.js";import{U as v,G as m}from"./dialog-f890fcea.js";import{h as i,S as _}from"./transition-7060fc3d.js";const h=e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),y={class:"fixed inset-0 overflow-hidden"},g={class:"absolute inset-0 overflow-hidden"},w={class:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"},b={class:"flex h-full flex-col bg-white dark:bg-gray-800 shadow-xl px-5 py-2 overflow-y-scroll"},S={class:"text-[20px] text-center font-bold text-black dark:text-white uppercase tracking-wider"},k={class:"text-[10px] text-center text-black dark:text-white"},E={class:"relative flex-1 text-black dark:text-gray-400 p-2"},C={name:"Slideover",props:{widthSlideover:{type:String,default:"max-w-md"},title:{type:String,default:"MODAL TITLE HERE"},desc:{type:String,default:"DESC HERE"}},data(){return{state:{}}}},G=Object.assign(C,{setup(o){const n=c(!0);return(d,r)=>(f(),u(a(_),{appear:"",as:"template"},{default:t(()=>[s(a(v),{as:"div",class:"relative z-[51]",onClose:r[0]||(r[0]=B=>n.value=!1)},{default:t(()=>[s(a(i),{as:"template",enter:"ease-in-out duration-500","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-500","leave-from":"opacity-100","leave-to":"opacity-0"},{default:t(()=>[h]),_:1}),e("div",y,[e("div",g,[e("div",w,[s(a(i),{as:"template",enter:"transform transition ease-in-out duration-500 sm:duration-700","enter-from":"translate-x-full","enter-to":"translate-x-0",leave:"transform transition ease-in-out duration-500 sm:duration-700","leave-from":"translate-x-0","leave-to":"translate-x-full"},{default:t(()=>[s(a(m),{class:p(["pointer-events-auto w-screen",o.widthSlideover])},{default:t(()=>[e("div",b,[e("h5",S,l(o.title),1),e("p",k,l(o.desc),1),e("div",E,[x(d.$slots,"body")])])]),_:3},8,["class"])]),_:3})])])])]),_:3})]),_:3}))}});export{G as _};
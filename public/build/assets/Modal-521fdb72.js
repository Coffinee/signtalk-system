import{r as c,o as f,y as p,j as t,i as s,q as a,d as e,n as i,t as u,I as y}from"./app-96f38ead.js";import{U as m,G as h}from"./dialog-f890fcea.js";import{h as n,S as v}from"./transition-7060fc3d.js";const _=e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),x={class:"fixed inset-0 z-10 overflow-y-auto"},g={class:"flex min-h-full justify-center p-4 text-center items-center sm:p-0"},w={class:"overflow-y-auto bg-white dark:bg-gray-700 rounded-lg"},b={class:"py-[10px] w-full border-b rounded-t dark:border-gray-600 flex place-items-center px-5"},S={class:"text-xl font-semibold text-gray-900 dark:text-white"},k={name:"Modal",props:{widthModal:{type:String,default:"w-[500px]"},heightModal:{type:String,default:"h-[200px]"},title:{type:String,default:""}}},C=Object.assign(k,{setup(o){const l=c(!0);return(d,r)=>(f(),p(a(v),{as:"template",show:l.value},{default:t(()=>[s(a(m),{as:"div",class:"relative z-10",onClose:r[0]||(r[0]=M=>l.value=!1)},{default:t(()=>[s(a(n),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:t(()=>[_]),_:1}),e("div",x,[e("div",g,[s(a(n),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:t(()=>[s(a(h),{class:i(["relative transform shadow text-left transition-all sm:my-8",o.widthModal])},{default:t(()=>[e("div",w,[e("div",b,[e("h5",S,u(o.title),1)]),e("div",{class:i(["px-5 py-3 overflow-y-auto dark:text-white",o.heightModal])},[y(d.$slots,"default")],2)])]),_:3},8,["class"])]),_:3})])])]),_:3})]),_:3},8,["show"]))}});export{C as _};
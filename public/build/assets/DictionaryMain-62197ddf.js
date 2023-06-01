import{o as i,b as l,d as e,t as s,h as g,s as x,n as f,e as b,v as p,w as m,x as c}from"./app-27a2ce1b.js";import{_ as u}from"./_plugin-vue_export-helper-c27b6911.js";const y={props:{title:{type:String,default:"Card Title"},description:{type:String,default:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, aspernatur."},buttonLabel:{type:String,default:"Button"}}},_={class:"w-[340px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center"},w={href:"#"},k={class:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},v={class:"mb-3 font-normal text-gray-700 dark:text-gray-400"},S={href:"#",class:"inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},N=e("svg",{"aria-hidden":"true",class:"w-4 h-4 ml-2 -mr-1",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1);function $(t,r,o,h,a,d){return i(),l("div",_,[e("a",w,[e("h5",k,s(o.title),1)]),e("p",v,s(o.description),1),e("a",S,[g(s(o.buttonLabel)+" ",1),N])])}const B=u(y,[["render",$]]),C={name:"Dictionary",props:{data:{type:Array,default:{}}},components:{CardButton:B},data(){return{data:{},dictionary:{},word:"",hasWord:!1,queryNull:!1}},methods:{async searchQuery(){await x.get("/api/getword?word="+this.word).then(t=>{this.dictionary=t.data.data,this.dictionary!=null?(this.hasWord=!0,this.queryNull=!1):(this.queryNull=!0,this.hasWord=!1)}).catch(t=>{errorMessage("Opps!",t.message,"top-right")})}},created(){}},q={class:"flex justify-center items-center w-auto h-screen bg-white dark:bg-[#111827]"},L={class:"flex flex-col gap-[25px] px-5"},M=e("h1",{class:"mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"}," Dictionary",-1),D=e("p",{class:"mb-6 text-center text-lg font-normal text-gray-500 lg:text-lg sm:px-16 dark:text-gray-400"},"Search a word to see its equivalent in American Sign Language (ASL)",-1),W=e("label",{for:"default-search",class:"mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"},"Search",-1),j={class:"relative"},V=e("div",{class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},[e("svg",{"aria-hidden":"true",class:"w-5 h-5 text-gray-500 dark:text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})])],-1),z={key:0,class:"text-xs flex items-center justify-center text-red-500 mt-2"},A={key:0,class:"hauto border border-gray-200 rounded-lg shadow dark:border-gray-700 p-5"},Q={class:"flex flex-col"},T={class:"mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"},E={class:"mb-3 text-gray-500 dark:text-gray-400"},F={class:"flex justify-center w-full mb-[15px]"},H=["src"],O={class:"self-center relative w-full overflow-hidden aspect-video"},R=["src"];function U(t,r,o,h,a,d){return i(),l("div",q,[e("div",L,[e("div",{class:f(a.hasWord?"":"-mt-36")},[M,D,W,e("div",j,[V,b(e("input",{"onUpdate:modelValue":r[0]||(r[0]=n=>this.word=n),type:"search",id:"default-search",class:"block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search...",required:""},null,512),[[p,this.word]]),e("button",{onClick:r[1]||(r[1]=m((...n)=>d.searchQuery&&d.searchQuery(...n),["prevent"])),class:"text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},"Search")]),a.queryNull?(i(),l("span",z,"No Results Found")):c("",!0)],2),a.hasWord?(i(),l("div",A,[e("div",Q,[e("div",null,[e("h5",T,s(this.dictionary.word)+" ",1),e("p",E,s(this.dictionary.description),1)]),e("div",F,[e("img",{class:"w-full sm:w-full rounded-lg",src:"/uploads/image/"+this.dictionary.image_file,alt:""},null,8,H)]),e("div",O,[e("iframe",{class:"absolute inset-0 w-[100%] h-[100%] border-none",src:this.dictionary.video_link,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,R)])])])):c("",!0)])])}const J=u(C,[["render",U]]);export{J as default};

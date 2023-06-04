import{o as i,b as c,d as a,F as o,m as h,e as d,v as g}from"./app-96f38ead.js";import{_ as n}from"./_plugin-vue_export-helper-c27b6911.js";const m={data(){return{input:"",letters:[],showResult:!1}},methods:{getLetterImage(s){let e;switch(s){case"A":e="/images/asl-alphabet/asl-letter-a.PNG";break;case"B":e="/images/asl-alphabet/asl-letter-b.PNG";break;case"C":e="/images/asl-alphabet/asl-letter-c.PNG";break;case"D":e="/images/asl-alphabet/asl-letter-d.PNG";break;case"E":e="/images/asl-alphabet/asl-letter-e.PNG";break;case"F":e="/images/asl-alphabet/asl-letter-f.PNG";break;case"G":e="/images/asl-alphabet/asl-letter-g.PNG";break;case"H":e="/images/asl-alphabet/asl-letter-h.PNG";break;case"I":e="/images/asl-alphabet/asl-letter-i.PNG";break;case"J":e="/images/asl-alphabet/asl-letter-j.PNG";break;case"K":e="/images/asl-alphabet/asl-letter-k.PNG";break;case"L":e="/images/asl-alphabet/asl-letter-l.PNG";break;case"M":e="/images/asl-alphabet/asl-letter-m.PNG";break;case"N":e="/images/asl-alphabet/asl-letter-n.PNG";break;case"O":e="/images/asl-alphabet/asl-letter-o.PNG";break;case"P":e="/images/asl-alphabet/asl-letter-p.PNG";break;case"Q":e="/images/asl-alphabet/asl-letter-q.PNG";break;case"R":e="/images/asl-alphabet/asl-letter-r.PNG";break;case"S":e="/images/asl-alphabet/asl-letter-s.PNG";break;case"T":e="/images/asl-alphabet/asl-letter-t.PNG";break;case"U":e="/images/asl-alphabet/asl-letter-u.PNG";break;case"V":e="/images/asl-alphabet/asl-letter-v.PNG";break;case"W":e="/images/asl-alphabet/asl-letter-w.PNG";break;case"X":e="/images/asl-alphabet/asl-letter-x.PNG";break;case"Y":e="/images/asl-alphabet/asl-letter-y.PNG";break;case"Z":e="/images/asl-alphabet/asl-letter-z.PNG";break;case" ":e="/images/asl-alphabet/asl-space.PNG";break;default:return null}return e},displayResult(){const s=this.input.toUpperCase().split("");this.letters=[];let e=0;const b=setInterval(()=>{this.letters.push(s[e]),e++,e>=s.length&&(clearInterval(b),this.showResult=!0)},1500)}}},u={class:"flex justify-center items-center h-screen"},k={class:"w-full md:w-[70%] h-[80%] md:h-[90%] bg-white dark:bg-gray-800 dark:border-gray-700 shadow shadow-indigo-300 rounded-lg"},N={class:"flex flex-col space-y-3 m-3 h-[95%] p-5"},P={class:"w-full h-full flex items-center justify-center flex-wrap gap-[5px] border border-gray-400 rounded-md overflow-auto"},G=["src","alt"],f={class:"flex space-x-3"},x=a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6"},[a("path",{d:"M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"})],-1),w=[x];function _(s,e,b,y,l,r){return i(),c("div",u,[a("div",k,[a("div",N,[a("div",P,[(i(!0),c(o,null,h(l.letters,(t,p)=>(i(),c("div",{key:p,class:"letter-container"},[a("img",{src:r.getLetterImage(t),alt:l.letters[p],class:"h-[60px] w-[60px] sm:h-[80px] sm:w-[80px] md:h-[120px] md:w-[120px]"},null,8,G)]))),128))]),a("div",f,[d(a("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>l.input=t),type:"text",placeholder:"Type your message ...",class:"w-full h-10 rounded-full border border-gray-400 pl-5 bg-gray-50 text-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400"},null,512),[[g,l.input]]),a("button",{onClick:e[1]||(e[1]=(...t)=>r.displayResult&&r.displayResult(...t)),class:"text-indigo-500"},w)])])])])}const B=n(m,[["render",_]]);export{B as default};

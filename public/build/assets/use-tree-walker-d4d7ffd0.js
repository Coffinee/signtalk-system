import{C as f}from"./app-27a2ce1b.js";import{m as d}from"./focus-management-187ddee4.js";function m({container:e,accept:r,walk:n,enabled:t}){f(()=>{let a=e.value;if(!a||t!==void 0&&!t.value)return;let c=d(e);if(!c)return;let l=Object.assign(i=>r(i),{acceptNode:r}),o=c.createTreeWalker(a,NodeFilter.SHOW_ELEMENT,l,!1);for(;o.nextNode();)n(o.currentNode)})}export{m as p};

import{i as f,K as x,r as n,C as h,y as g,o as c,l,c as S,u as r,j as y,L as k,a as $}from"./entry.b9ee2a71.js";const w={class:"sandbox"},B=["src"],C={key:2},I=f({__name:"Sandbox",props:{src:{type:String,default:""},repo:{type:String,default:""},branch:{type:String,default:""},dir:{type:String,default:""},file:{type:String,default:"app.vue"}},setup(i){const a=i,p=x(),s={CodeSandBox:()=>`https://codesandbox.io/embed/github/${a.repo}/tree/${a.branch}/${a.dir}?hidenavigation=1&theme=${p.value}`,StackBlitz:()=>`https://stackblitz.com/github/${a.repo}/tree/${a.branch}/${a.dir}?embed=1&file=${a.file}&theme=${p.value}`},u=Object.keys(s).map(e=>({label:e})),d=n(-1),b=n(),t=n(""),o=n(""),m=e=>{o.value=e,t.value=a.src||s[o.value](),localStorage.setItem("docus_sandbox",e)};h(()=>{var e;return(e=t.value)==null?void 0:e.replace("?embed=1&","?").replace("/embed/","/s/")});const v=e=>{d.value=e,m(u[e].label)};return g(()=>{o.value=window.localStorage.getItem("docus_sandbox")||"CodeSandBox",t.value=a.src||s[o.value](),d.value=Object.keys(s).indexOf(o.value)}),(e,T)=>{const _=k;return c(),l("div",w,[i.src?y("",!0):(c(),S(_,{key:0,ref_key:"tabs",ref:b,"active-tab-index":r(d),tabs:r(u),"onUpdate:activeTabIndex":v},null,8,["active-tab-index","tabs"])),r(t)?(c(),l("iframe",{key:1,src:r(t),title:"Sandbox editor",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"},null,8,B)):(c(),l("span",C,"Loading Sandbox..."))])}}}),M=$(I,[["__scopeId","data-v-92f30ca7"]]);export{M as default};

import{i as m,a4 as f,r as y,o as s,l as C,e as l,b as h,w as b,u as t,c as i,a5 as w,m as B,f as k,G as x,H as I,a as v}from"./entry.b9ee2a71.js";import{u as S}from"./index.b078dde0.js";const z=o=>(x("data-v-b8fd7140"),o=o(),I(),o),T=z(()=>l("span",{class:"sr-only"},"Copy to clipboard",-1)),g={class:"icon-wrapper"},N=m({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(o){const r=o,{copy:d}=S(),{prose:a}=f(),e=y("init"),u=_=>{d(r.content).then(()=>{e.value="copied",setTimeout(()=>{e.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(_,V)=>{const n=k;return s(),C("button",{class:B([(o.show||t(e)==="copied")&&"show"]),onClick:u},[T,l("span",g,[h(w,{name:"fade"},{default:b(()=>{var c,p;return[t(e)==="copied"?(s(),i(n,{key:0,name:(c=t(a).copyButton)==null?void 0:c.iconCopied,size:"18",class:"copied"},null,8,["name"])):(s(),i(n,{key:1,name:(p=t(a).copyButton)==null?void 0:p.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}}),G=v(N,[["__scopeId","data-v-b8fd7140"]]);export{G as default};

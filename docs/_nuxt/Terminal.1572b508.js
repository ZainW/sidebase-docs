import{u as _}from"./index.b078dde0.js";import{i as u,r as h,o as c,l as n,u as a,j as i,e as o,t as m,G as v,H as y,a as f}from"./entry.b9ee2a71.js";const e=t=>(v("data-v-08041e41"),t=t(),y(),t),C={key:0,class:"copied"},k=e(()=>o("div",{class:"scrim"},null,-1)),S=e(()=>o("div",{class:"content"}," Copied! ",-1)),w=[k,S],x=e(()=>o("div",{class:"header"},[o("div",{class:"controls"},[o("div"),o("div"),o("div")]),o("div",{class:"title"}," Bash ")],-1)),B={class:"window"},I=e(()=>o("span",{class:"sign"},"$",-1)),b={class:"content"},g={key:1,class:"prompt"},T=u({__name:"Terminal",props:{content:{type:String,required:!0}},setup(t){const d=t,{copy:p}=_(),s=h("init"),r=l=>{p(d.content).then(()=>{s.value="copied",setTimeout(()=>{s.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(l,N)=>(c(),n("div",{class:"terminal",onClick:r},[a(s)==="copied"?(c(),n("div",C,w)):i("",!0),x,o("div",B,[I,o("span",b,m(t.content),1)]),a(s)!=="copied"?(c(),n("div",g," Click to copy ")):i("",!0)]))}}),q=f(T,[["__scopeId","data-v-08041e41"]]);export{q as default};
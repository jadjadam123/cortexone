import{h as i,a9 as l}from"./entry.741170f4.js";const S=e=>Object.fromEntries(Object.entries(e).filter(([,t])=>t!==void 0)),s=(e,t)=>(n,r)=>(l(()=>e({...S(n),...r.attrs},r)),()=>{var a,o;return t?(o=(a=r.slots).default)==null?void 0:o.call(a):null}),g={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},d=i({name:"Link",inheritAttrs:!1,props:{...g,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:s(e=>({link:[e]}))}),u=i({name:"Title",inheritAttrs:!1,setup:s((e,{slots:t})=>{var r,a,o;return{title:((o=(a=(r=t.default)==null?void 0:r.call(t))==null?void 0:a[0])==null?void 0:o.children)||null}})}),m=i({name:"Meta",inheritAttrs:!1,props:{...g,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:s(e=>{const t={...e};return t.httpEquiv&&(t["http-equiv"]=t.httpEquiv,delete t.httpEquiv),{meta:[t]}})}),c=i({name:"Head",inheritAttrs:!1,setup:(e,t)=>()=>{var n,r;return(r=(n=t.slots).default)==null?void 0:r.call(n)}}),f=i({name:"Html",inheritAttrs:!1,props:{...g,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:s(e=>({htmlAttrs:e}),!0)}),y=i({name:"Body",inheritAttrs:!1,props:{...g,renderPriority:[String,Number]},setup:s(e=>({bodyAttrs:e}),!0)});export{y as B,c as H,d as L,m as M,u as T,f as a};

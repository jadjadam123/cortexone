import{l as w,B as g,x,D as p,E as y,H as S,o as h,c as B,w as I,r as _,aq as T}from"./entry.741170f4.js";const M={__name:"InView",props:{tag:{type:String,default:"div"},rootMargin:{type:String,default:"-100px"},oneTime:{type:Boolean,default:!0}},emits:["enter","exit"],setup(n,{emit:t}){const a=n,i=w(),{showUI:d}=g(i),{pageTransition:m}=g(i),l=x();let s=!0,o,f;function c(){o=new IntersectionObserver(e=>{var r,u;a.oneTime?(r=e[0])!=null&&r.isIntersecting&&!f?(f=!0,t("enter",e[0].target)):s?s=!1:t("exit"):(u=e[0])!=null&&u.isIntersecting?t("enter",e[0].target):s?s=!1:t("exit")},{rootMargin:a.rootMargin}),o.observe(l.value)}function v(){o&&o.disconnect()}return p(d,e=>{e&&y.delayedCall(.5,()=>{c()})}),p(m,e=>{e&&c()}),S(()=>{v()}),(e,r)=>(h(),B(T(n.tag),{ref_key:"el",ref:l,class:"in-view"},{default:I(()=>[_(e.$slots,"default")]),_:3},512))}};export{M as _};

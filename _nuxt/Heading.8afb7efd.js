import{_ as b}from"./InView.86493ce9.js";import{l as C,B as H,x as i,C as d,D as _,m as M,H as O,o as E,c as k,w as x,d as S,p as a,A as $,r as U,E as B}from"./entry.741170f4.js";import{E as V}from"./split-type.57c98042.js";const A=["innerHTML"],q={__name:"Heading",props:{level:{type:Number,required:!0,default:2},tag:{type:String,default:null},title:{type:String,default:null},color:{type:String,default:"black"},split:{type:Boolean,default:!1},animate:{type:Boolean,default:!1},animateIn:{type:Boolean,default:!1}},setup(l){const t=l,r=C(),{pageTransition:w}=H(r),s=i(!1),o=i(!1),u=i(!1),f=i(null),c=i(null),n=i(null),m=d(()=>t.tag||`h${t.level}`),g=d(()=>t.animateIn),I=d(()=>t.split&&t.animate);function T(){B.to(f.value.$refs.el,{x:0,duration:1.5,ease:"Quart.easeOut",onComplete:function(){u.value=!0}}),B.to(n.value.lines,{x:0,autoAlpha:1,duration:1.5,ease:"Quart.easeOut"})}function p(){n.value=new V(c.value,{types:"lines"}),n.value.lines.forEach((e,v)=>{e.style.transform=`translateX(${(v+1)*8}px)`})}function h(){I.value&&T()}return _(g,e=>{!r.showUI||!t.animate||(e?(s.value=!0,o.value=!1):(o.value=!0,s.value=!1))}),_(w,e=>{e&&(t.split&&p(),t.animate&&g.value&&(s.value=!0,o.value=!1))}),M(()=>{t.split&&!r.showUI&&p()}),O(()=>{var e;(e=n==null?void 0:n.value)==null||e.kill()}),(e,v)=>{const y=b;return l.title?(E(),k(y,{key:0,ref_key:"parentEl",ref:f,tag:a(m),class:$(["heading",{[`heading--h${l.level}`]:!0,[`heading--${l.color}`]:!0,"heading--animate-in":a(s),"heading--animate-out":a(o),"heading--animate-split":a(n),"heading--visible":a(u)}]),onEnter:h},{default:x(()=>[S("span",{ref_key:"titleEl",ref:c,innerHTML:l.title},null,8,A)]),_:1},8,["tag","class"])):(E(),k(y,{key:1,ref_key:"parentEl",ref:f,tag:a(m),class:$(["heading",{[`heading--h${l.level}`]:!0,[`heading--${l.color}`]:!0,"heading--animate-in":a(s),"heading--animate-out":a(o),"heading--animate-split":a(n),"heading--visible":a(u)}]),onEnter:h},{default:x(()=>[S("span",{ref_key:"titleEl",ref:c},[U(e.$slots,"default")],512)]),_:3},8,["tag","class"]))}}};export{q as _};

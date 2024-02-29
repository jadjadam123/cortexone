import{l as L,o as i,f as d,A as h,p as o,L as $,B as H,x as c,D as A,E as D,d as s,F as I,s as C,a as w,w as p,q as S,T as E,m as O,H as N,c as g,b,t as k,af as T,G as Z,u as R,R as W,ag as z}from"./entry.741170f4.js";import{u as x}from"./site-header.2c0f3e29.js";import{b as F,a as Y}from"./ButtonPill.d29bc1c7.js";import{B as J}from"./constants.66f91b37.js";const K=$('<span class="u-visually-hidden">Cortex Ai Logo</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 18"><polygon class="logo-letter logo-v" points="14.17 12.94 4.57 0 0 0 12.28 16.56 16.05 16.56 28.33 0 23.76 0 14.17 12.94"></polygon><polygon class="logo-letter logo-a" points="64.24 16.56 51.31 0 47.92 0 34.99 16.56 39.6 16.56 49.59 3.68 59.57 16.56 64.24 16.56"></polygon><path class="logo-letter logo-u" d="M96.22,7.86a5.22,5.22,0,0,1-2.06,4.3c-1.36,1.06-3.7,1.6-7,1.6s-5.68-.54-7-1.6a5.23,5.23,0,0,1-2-4.3V0H74.28V7.8a9.1,9.1,0,0,0,1.55,5.54,8.51,8.51,0,0,0,4.38,2.94,23.75,23.75,0,0,0,6.93.88,23.73,23.73,0,0,0,6.92-.88,8.51,8.51,0,0,0,4.38-2.94A9.12,9.12,0,0,0,100,7.78V0H96.22Z"></path><polygon class="logo-letter logo-l" points="118.85 0 115.09 0 115.09 16.56 136.96 16.56 136.96 13.26 118.85 13.26 118.85 0"></polygon><polygon class="logo-letter logo-t" points="143.55 0 143.55 3.3 154.89 3.3 154.89 16.56 158.66 16.56 158.66 3.3 170 3.3 170 0 143.55 0"></polygon></svg>',2),P=[K],U={__name:"siteLogo",props:{loader:{type:Boolean,default:!1},animateDelay:{type:Boolean,default:!1}},setup(t){const e=L();return(n,a)=>(i(),d("div",{class:h(["logo",{"logo--animate-delayed":t.animateDelay,"logo--animate":o(e).showUI||t.loader}])},P,2))}};const q={class:"button-menu__icon"},G={class:"button-menu__icon-group"},X={key:0,class:"button-menu__label"},j=s("span",{class:"eyebrow"},"Menu",-1),Q=s("span",{class:"eyebrow eyebrow--animation","aria-hidden":"true"},"Menu",-1),ee=[j,Q],te={__name:"ButtonMenu",setup(t){const e=x(),{menuIsOpen:n}=H(e),a=c(null);function r(){e.menuIsOpen=!e.menuIsOpen}return A(n,l=>{a.value=!l,D.delayedCall(.35,()=>{a.value=!1})}),(l,_)=>(i(),d("button",{type:"button",class:h(["button-menu",{"button-menu--open":o(e).menuIsOpen,"button-menu--animate":o(a)}]),onClick:r},[s("div",q,[s("div",G,[(i(),d(I,null,C(10,u=>s("span",{key:`bullet-${u}`,class:h(["button-menu__icon-bullet",`button-menu__icon-bullet--${u}`])},null,2)),64))])]),w(E,{name:"button-menu-label",duration:{enter:300,leave:300}},{default:p(()=>[o(e).menuIsOpen?S("",!0):(i(),d("div",X,ee))]),_:1})],2))}};const oe=s("div",{class:"site-header__background"},null,-1),ne={class:"container"},se=s("svg",{class:"site-header__logo--mobile",viewBox:"0 0 128.299 13.17709",width:"129",height:"14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"m9.26958,12.71639L0,0h3.45018l7.24092,9.93659L17.932,0h3.4502l-9.2696,12.71639h-2.84302Zm49.63542-6.68074c0,1.37198.5133,2.47263,1.54,3.30194,1.0365.8191,2.8085,1.2286,5.3159,1.2286s4.2745-.4095,5.30109-1.2286c1.03661-.82931,1.5549-1.92996,1.5549-3.30194V0h2.843v5.97423c0,1.78152-.3899,3.20467-1.1698,4.26947-.7799,1.0546-1.8806,1.8071-3.3021,2.2576-1.4215.4505-3.1639.6758-5.2271.6758s-3.8055-.2253-5.2271-.6758c-1.4215-.4505-2.5222-1.203-3.3021-2.2576-.7798-1.0648-1.1698-2.48283-1.1698-4.25411V0h2.8431v6.03566ZM86.8566,0v12.71639h16.5104v-2.5341h-13.6673V0h-2.8431Zm32.8844,12.71639h-2.84399V2.53406h-8.55801V0h19.96v2.53406h-8.558v10.18234Zm-89.856,0h-3.4798L36.1634.00004h2.5617l9.7582,12.71636h-3.5242l-7.537-9.8905-7.5371,9.8905Z"})],-1),ce={__name:"SiteHeader",props:{skipMenu:{type:Boolean,default:!1},buttonLabel:{type:String,default:"Sign up"},buttonLink:{type:String,default:null}},setup(t){const e=L(),n=x(),a=c(0),r=c(!1);c(!1);const l=c(0);function _(){n.waitlistIsOpen=!0}function u(m){m.keyCode===27&&(n.menuIsOpen=!1,n.waitlistIsOpen=!1)}function f(m){window.scrollY<window.innerHeight/6?r.value=!1:r.value=!0,a.value=window.scrollY}function v(m){l.value=window.innerWidth}return O(()=>{l.value=window.innerWidth,window.addEventListener("keydown",u),window.addEventListener("scroll",f),window.addEventListener("resize",v)}),N(()=>{window.removeEventListener("keydown",u),window.removeEventListener("scroll",f),window.removeEventListener("resize",v)}),(m,ae)=>{const B=te,V=U,M=F,y=Y;return i(),d("header",{class:h(["site-header",{"site-header--fixed":o(r),"site-header--light":o(n).isLight}])},[oe,s("div",ne,[t.skipMenu?S("",!0):(i(),g(B,{key:0})),w(M,{to:"/",class:"site-header__logo"},{default:p(()=>[se,w(V,{class:"site-header__logo--desktop","animate-delay":!0})]),_:1}),t.buttonLink?(i(),g(y,{key:1,color:o(e).pageThemeDark?"light-grey":"white",link:t.buttonLink},{default:p(()=>[b(k(t.buttonLabel),1)]),_:1},8,["color","link"])):(i(),g(y,{key:2,color:o(e).pageThemeDark?"light-grey":"white",onClick:_},{default:p(()=>[b(k(o(l)>o(J).M?"Download On Chrome Store":"Download"),1)]),_:1},8,["color"]))])],2)}}};function de(t={addDirAttribute:!1,addSeoAttributes:!1,identifierAttribute:"hid"}){const{addDirAttribute:e,addSeoAttributes:n,identifierAttribute:a}=t,r=t.i18n||T(Z().$i18n),l=R(),_=W();return z({addDirAttribute:e,addSeoAttributes:n,identifierAttribute:a,router:_,route:l,i18n:r})}export{U as _,ce as a,de as u};

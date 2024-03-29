var we=Object.defineProperty;var ge=(p,a,n)=>a in p?we(p,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):p[a]=n;var ae=(p,a,n)=>(ge(p,typeof a!="symbol"?a+"":a,n),n);import{H as ye,T as be,M as Se}from"./components.9620909a.js";import{_ as Te}from"./Heading.8afb7efd.js";import{_ as ke}from"./TextBlock.dac0ed1a.js";import{a as Me,_ as xe}from"./ButtonPill.d29bc1c7.js";import{l as pe,B as Ee,x as T,C as Le,D as G,o as H,c as fe,w as U,r as Oe,A as X,p as k,f as $,a as z,q as oe,T as me,d as w,F as Q,s as ne,E as Ne,g as Pe,j as We,k as De,G as Re,m as ee,H as te,I as ze,J as re,K as ce,b as ue,t as J}from"./entry.741170f4.js";import{_ as He}from"./Socials.d0fecbc7.js";import{u as Ce}from"./useSanityFetch.aa0c89aa.js";import{T as Ie,V as Ae,t as Be}from"./index.9152e2f9.js";import{r as he,f as Ye}from"./formatters.ccf1137f.js";import{u as $e}from"./site-header.2c0f3e29.js";import"./InView.86493ce9.js";import"./split-type.57c98042.js";import"./constants.66f91b37.js";const Xe={__name:"ButtonPillHome",props:{color:{type:String,default:"black"},link:{type:String,default:null},disabled:{type:Boolean,default:null},animate:{type:Boolean,default:!1},animateIn:{type:Boolean,default:!1}},setup(p){const a=p,n=pe(),{pageTransition:r}=Ee(n),o=T(!1),s=T(!1),f=Le(()=>a.animateIn);return G(f,c=>{!n.showUI||!a.animate||(c?(o.value=!0,s.value=!1):(s.value=!0,o.value=!1))}),G(r,c=>{c&&a.animate&&f.value&&(o.value=!0,s.value=!1)}),(c,b)=>{const e=Me;return H(),fe(e,{link:p.link,color:p.color,disabled:p.disabled,class:X({"button--animate-in":k(o),"button--animate-out":k(s)})},{default:U(()=>[Oe(c.$slots,"default")]),_:3},8,["link","color","disabled","class"])}}};const je={class:"button-socials"},Ke=w("div",{class:"button-socials__label"},[w("span",{class:"eyebrow"},"Social"),w("span",{class:"eyebrow eyebrow--animation","aria-hidden":"true"},"Social")],-1),Ve={class:"button-socials__icon"},Fe={class:"button-socials__icon-group"},Ge={__name:"ButtonSocials",setup(p){const a=T(null),n=T(!1),r=()=>{n.value=!n.value,a.value=!n.value,Ne.delayedCall(.35,()=>{a.value=!1})};return(o,s)=>{const f=He;return H(),$("div",je,[z(me,{name:"socials",appear:"",duration:{enter:1400,leave:450}},{default:U(()=>[k(n)?(H(),fe(f,{key:0,class:"button-socials__socials"})):oe("",!0)]),_:1}),w("button",{type:"button",class:X(["button-socials__button",{"button-socials--open":k(n),"button-socials--animate":k(a)}]),onClick:r},[Ke,w("div",Ve,[w("div",Fe,[(H(),$(Q,null,ne(6,c=>w("span",{key:`bullet-${c}`,class:X(["button-socials__icon-bullet",`button-socials__icon-bullet--${c}`])},null,2)),64))])])],2)])}}},Ue=""+globalThis.__publicAssetsURL("assets/videos/optimised_vault_nine_-_an_immersive_virtual_gallery(720p_clipped).mp4");var ie={},qe={get exports(){return ie},set exports(p){ie=p}};(function(p,a){(function(n,r){p.exports=r()})(Pe,function(){var n=0;function r(m){return"__private_"+n+++"_"+m}function o(m,v){if(!Object.prototype.hasOwnProperty.call(m,v))throw new TypeError("attempted to use private field on non-instance");return m}function s(){}s.prototype={on:function(m,v,l){var u=this.e||(this.e={});return(u[m]||(u[m]=[])).push({fn:v,ctx:l}),this},once:function(m,v,l){var u=this;function i(){u.off(m,i),v.apply(l,arguments)}return i._=v,this.on(m,i,l)},emit:function(m){for(var v=[].slice.call(arguments,1),l=((this.e||(this.e={}))[m]||[]).slice(),u=0,i=l.length;u<i;u++)l[u].fn.apply(l[u].ctx,v);return this},off:function(m,v){var l=this.e||(this.e={}),u=l[m],i=[];if(u&&v)for(var _=0,x=u.length;_<x;_++)u[_].fn!==v&&u[_].fn._!==v&&i.push(u[_]);return i.length?l[m]=i:delete l[m],this}};var f=s;f.TinyEmitter=s;var c,b="virtualscroll",e=r("options"),t=r("el"),h=r("emitter"),y=r("event"),g=r("touchStart"),S=r("bodyTouchAction");return function(){function m(l){var u=this;Object.defineProperty(this,e,{writable:!0,value:void 0}),Object.defineProperty(this,t,{writable:!0,value:void 0}),Object.defineProperty(this,h,{writable:!0,value:void 0}),Object.defineProperty(this,y,{writable:!0,value:void 0}),Object.defineProperty(this,g,{writable:!0,value:void 0}),Object.defineProperty(this,S,{writable:!0,value:void 0}),this._onWheel=function(i){var _=o(u,e)[e],x=o(u,y)[y];x.deltaX=i.wheelDeltaX||-1*i.deltaX,x.deltaY=i.wheelDeltaY||-1*i.deltaY,c.isFirefox&&i.deltaMode===1&&(x.deltaX*=_.firefoxMultiplier,x.deltaY*=_.firefoxMultiplier),x.deltaX*=_.mouseMultiplier,x.deltaY*=_.mouseMultiplier,u._notify(i)},this._onMouseWheel=function(i){var _=o(u,y)[y];_.deltaX=i.wheelDeltaX?i.wheelDeltaX:0,_.deltaY=i.wheelDeltaY?i.wheelDeltaY:i.wheelDelta,u._notify(i)},this._onTouchStart=function(i){var _=i.targetTouches?i.targetTouches[0]:i;o(u,g)[g].x=_.pageX,o(u,g)[g].y=_.pageY},this._onTouchMove=function(i){var _=o(u,e)[e];_.preventTouch&&!i.target.classList.contains(_.unpreventTouchClass)&&i.preventDefault();var x=o(u,y)[y],I=i.targetTouches?i.targetTouches[0]:i;x.deltaX=(I.pageX-o(u,g)[g].x)*_.touchMultiplier,x.deltaY=(I.pageY-o(u,g)[g].y)*_.touchMultiplier,o(u,g)[g].x=I.pageX,o(u,g)[g].y=I.pageY,u._notify(i)},this._onKeyDown=function(i){var _=o(u,y)[y];_.deltaX=_.deltaY=0;var x=window.innerHeight-40;switch(i.keyCode){case 37:case 38:_.deltaY=o(u,e)[e].keyStep;break;case 39:case 40:_.deltaY=-o(u,e)[e].keyStep;break;case 32:_.deltaY=x*(i.shiftKey?1:-1);break;default:return}u._notify(i)},o(this,t)[t]=window,l&&l.el&&(o(this,t)[t]=l.el,delete l.el),c||(c={hasWheelEvent:"onwheel"in document,hasMouseWheelEvent:"onmousewheel"in document,hasTouch:"ontouchstart"in document,hasTouchWin:navigator.msMaxTouchPoints&&navigator.msMaxTouchPoints>1,hasPointer:!!window.navigator.msPointerEnabled,hasKeyDown:"onkeydown"in document,isFirefox:navigator.userAgent.indexOf("Firefox")>-1}),o(this,e)[e]=Object.assign({mouseMultiplier:1,touchMultiplier:2,firefoxMultiplier:15,keyStep:120,preventTouch:!1,unpreventTouchClass:"vs-touchmove-allowed",useKeyboard:!0,useTouch:!0},l),o(this,h)[h]=new f,o(this,y)[y]={y:0,x:0,deltaX:0,deltaY:0},o(this,g)[g]={x:null,y:null},o(this,S)[S]=null,o(this,e)[e].passive!==void 0&&(this.listenerOptions={passive:o(this,e)[e].passive})}var v=m.prototype;return v._notify=function(l){var u=o(this,y)[y];u.x+=u.deltaX,u.y+=u.deltaY,o(this,h)[h].emit(b,{x:u.x,y:u.y,deltaX:u.deltaX,deltaY:u.deltaY,originalEvent:l})},v._bind=function(){c.hasWheelEvent&&o(this,t)[t].addEventListener("wheel",this._onWheel,this.listenerOptions),c.hasMouseWheelEvent&&o(this,t)[t].addEventListener("mousewheel",this._onMouseWheel,this.listenerOptions),c.hasTouch&&o(this,e)[e].useTouch&&(o(this,t)[t].addEventListener("touchstart",this._onTouchStart,this.listenerOptions),o(this,t)[t].addEventListener("touchmove",this._onTouchMove,this.listenerOptions)),c.hasPointer&&c.hasTouchWin&&(o(this,S)[S]=document.body.style.msTouchAction,document.body.style.msTouchAction="none",o(this,t)[t].addEventListener("MSPointerDown",this._onTouchStart,!0),o(this,t)[t].addEventListener("MSPointerMove",this._onTouchMove,!0)),c.hasKeyDown&&o(this,e)[e].useKeyboard&&document.addEventListener("keydown",this._onKeyDown)},v._unbind=function(){c.hasWheelEvent&&o(this,t)[t].removeEventListener("wheel",this._onWheel),c.hasMouseWheelEvent&&o(this,t)[t].removeEventListener("mousewheel",this._onMouseWheel),c.hasTouch&&(o(this,t)[t].removeEventListener("touchstart",this._onTouchStart),o(this,t)[t].removeEventListener("touchmove",this._onTouchMove)),c.hasPointer&&c.hasTouchWin&&(document.body.style.msTouchAction=o(this,S)[S],o(this,t)[t].removeEventListener("MSPointerDown",this._onTouchStart,!0),o(this,t)[t].removeEventListener("MSPointerMove",this._onTouchMove,!0)),c.hasKeyDown&&o(this,e)[e].useKeyboard&&document.removeEventListener("keydown",this._onKeyDown)},v.on=function(l,u){o(this,h)[h].on(b,l,u);var i=o(this,h)[h].e;i&&i[b]&&i[b].length===1&&this._bind()},v.off=function(l,u){o(this,h)[h].off(b,l,u);var i=o(this,h)[h].e;(!i[b]||i[b].length<=0)&&this._unbind()},v.destroy=function(){o(this,h)[h].off(),this._unbind()},m}()})})(qe);const Ze=ie;function de(p,a){for(var n=0;n<a.length;n++){var r=a[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(p,r.key,r)}}function _e(p,a,n){return a&&de(p.prototype,a),n&&de(p,n),Object.defineProperty(p,"prototype",{writable:!1}),p}function q(){return q=Object.assign?Object.assign.bind():function(p){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(p[r]=n[r])}return p},q.apply(this,arguments)}function se(p,a){return se=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},se(p,a)}function ve(p,a){var n=p%a;return(a>0&&n<0||a<0&&n>0)&&(n+=a),n}var Je=["duration","easing"],Qe=function(){function p(){}var a=p.prototype;return a.to=function(n,r){var o=this,s=r===void 0?{}:r,f=s.duration,c=f===void 0?1:f,b=s.easing,e=b===void 0?function(h){return h}:b,t=function(h,y){if(h==null)return{};var g,S,m={},v=Object.keys(h);for(S=0;S<v.length;S++)y.indexOf(g=v[S])>=0||(m[g]=h[g]);return m}(s,Je);this.target=n,this.fromKeys=q({},t),this.toKeys=q({},t),this.keys=Object.keys(q({},t)),this.keys.forEach(function(h){o.fromKeys[h]=n[h]}),this.duration=c,this.easing=e,this.currentTime=0,this.isRunning=!0},a.stop=function(){this.isRunning=!1},a.raf=function(n){var r=this;if(this.isRunning){this.currentTime=Math.min(this.currentTime+n,this.duration);var o=this.progress>=1?1:this.easing(this.progress);this.keys.forEach(function(s){var f=r.fromKeys[s];r.target[s]=f+(r.toKeys[s]-f)*o}),o===1&&this.stop()}},_e(p,[{key:"progress",get:function(){return this.currentTime/this.duration}}]),p}(),et=function(p){var a,n;function r(s){var f,c,b,e,t=s===void 0?{}:s,h=t.duration,y=h===void 0?1.2:h,g=t.easing,S=g===void 0?function(W){return Math.min(1,1.001-Math.pow(2,-10*W))}:g,m=t.smooth,v=m===void 0||m,l=t.mouseMultiplier,u=l===void 0?1:l,i=t.smoothTouch,_=i!==void 0&&i,x=t.touchMultiplier,I=x===void 0?2:x,j=t.direction,K=j===void 0?"vertical":j,E=t.gestureDirection,L=E===void 0?"vertical":E,A=t.infinite,B=A!==void 0&&A,O=t.wrapper,C=O===void 0?window:O,Y=t.content,P=Y===void 0?document.body:Y;(e=p.call(this)||this).onWindowResize=function(){e.wrapperWidth=window.innerWidth,e.wrapperHeight=window.innerHeight},e.onWrapperResize=function(W){var D=W[0];if(D){var R=D.contentRect;e.wrapperWidth=R.width,e.wrapperHeight=R.height}},e.onContentResize=function(W){var D=W[0];if(D){var R=D.contentRect;e.contentWidth=R.width,e.contentHeight=R.height}},e.onVirtualScroll=function(W){var D=W.deltaY,R=W.deltaX,d=W.originalEvent;if(!(e.gestureDirection==="vertical"&&D===0||e.gestureDirection==="horizontal"&&R===0)){var M=!!d.composedPath().find(function(V){return V.hasAttribute&&V.hasAttribute("data-lenis-prevent")});d.ctrlKey||M||(e.smooth=d.changedTouches?e.smoothTouch:e.options.smooth,e.stopped?d.preventDefault():e.smooth&&d.buttons!==4&&(e.smooth&&d.preventDefault(),e.targetScroll-=e.gestureDirection==="both"?R+D:e.gestureDirection==="horizontal"?R:D,e.scrollTo(e.targetScroll)))}},e.onScroll=function(W){e.isScrolling&&e.smooth||(e.targetScroll=e.scroll=e.lastScroll=e.wrapperNode[e.scrollProperty],e.notify())},window.lenisVersion="0.2.28",e.options={duration:y,easing:S,smooth:v,mouseMultiplier:u,smoothTouch:_,touchMultiplier:I,direction:K,gestureDirection:L,infinite:B,wrapper:C,content:P},e.duration=y,e.easing=S,e.smooth=v,e.mouseMultiplier=u,e.smoothTouch=_,e.touchMultiplier=I,e.direction=K,e.gestureDirection=L,e.infinite=B,e.wrapperNode=C,e.contentNode=P,e.wrapperNode.addEventListener("scroll",e.onScroll),e.wrapperNode===window?(e.wrapperNode.addEventListener("resize",e.onWindowResize),e.onWindowResize()):(e.wrapperHeight=e.wrapperNode.offsetHeight,e.wrapperWidth=e.wrapperNode.offsetWidth,e.wrapperObserver=new ResizeObserver(e.onWrapperResize),e.wrapperObserver.observe(e.wrapperNode)),e.contentHeight=e.contentNode.offsetHeight,e.contentWidth=e.contentNode.offsetWidth,e.contentObserver=new ResizeObserver(e.onContentResize),e.contentObserver.observe(e.contentNode),e.targetScroll=e.scroll=e.lastScroll=e.wrapperNode[e.scrollProperty],e.animate=new Qe;var N=((f=navigator)==null||(c=f.userAgentData)==null?void 0:c.platform)||((b=navigator)==null?void 0:b.platform)||"unknown";return e.virtualScroll=new Ze({el:e.wrapperNode,firefoxMultiplier:50,mouseMultiplier:e.mouseMultiplier*(N.includes("Win")||N.includes("Linux")?.84:.4),touchMultiplier:e.touchMultiplier,passive:!1,useKeyboard:!1,useTouch:!0}),e.virtualScroll.on(e.onVirtualScroll),e}n=p,(a=r).prototype=Object.create(n.prototype),a.prototype.constructor=a,se(a,n);var o=r.prototype;return o.start=function(){var s=this.wrapperNode;this.wrapperNode===window&&(s=document.documentElement),s.classList.remove("lenis-stopped"),this.stopped=!1},o.stop=function(){var s=this.wrapperNode;this.wrapperNode===window&&(s=document.documentElement),s.classList.add("lenis-stopped"),this.stopped=!0,this.animate.stop()},o.destroy=function(){var s;this.wrapperNode===window&&this.wrapperNode.removeEventListener("resize",this.onWindowResize),this.wrapperNode.removeEventListener("scroll",this.onScroll),this.virtualScroll.destroy(),(s=this.wrapperObserver)==null||s.disconnect(),this.contentObserver.disconnect()},o.raf=function(s){var f=s-(this.now||0);this.now=s,!this.stopped&&this.smooth&&(this.lastScroll=this.scroll,this.animate.raf(.001*f),this.scroll===this.targetScroll&&(this.lastScroll=this.scroll),this.isScrolling&&(this.setScroll(this.scroll),this.notify()),this.isScrolling=this.scroll!==this.targetScroll)},o.setScroll=function(s){var f=this.infinite?ve(s,this.limit):s;this.direction==="horizontal"?this.wrapperNode.scrollTo(f,0):this.wrapperNode.scrollTo(0,f)},o.notify=function(){var s=this.infinite?ve(this.scroll,this.limit):this.scroll;this.emit("scroll",{scroll:s,limit:this.limit,velocity:this.velocity,direction:this.velocity===0?0:this.velocity>0?1:-1,progress:s/this.limit})},o.scrollTo=function(s,f){var c=f===void 0?{}:f,b=c.offset,e=b===void 0?0:b,t=c.immediate,h=t!==void 0&&t,y=c.duration,g=y===void 0?this.duration:y,S=c.easing,m=S===void 0?this.easing:S;if(s!=null&&!this.stopped){typeof s=="number"&&typeof this.scrollLimit=="number"&&s<this.scrollLimit&&(s=this.scrollLimit);var v;if(typeof s=="number")v=s;else if(s==="top"||s==="#top")v=0;else if(s==="bottom")v=this.limit;else{var l;if(typeof s=="string")l=document.querySelector(s);else{if(s==null||!s.nodeType)return;l=s}if(!l)return;var u=0;if(this.wrapperNode!==window){var i=this.wrapperNode.getBoundingClientRect();u=this.direction==="horizontal"?i.left:i.top}var _=l.getBoundingClientRect();v=(this.direction==="horizontal"?_.left:_.top)+this.scroll-u}v+=e,this.targetScroll=this.infinite?v:Math.max(0,Math.min(v,this.limit)),!this.smooth||h?(this.animate.stop(),this.scroll=this.lastScroll=this.targetScroll,this.setScroll(this.targetScroll)):this.animate.to(this,{duration:g,easing:m,scroll:this.targetScroll})}},_e(r,[{key:"scrollProperty",get:function(){return this.wrapperNode===window?this.direction==="horizontal"?"scrollX":"scrollY":this.direction==="horizontal"?"scrollLeft":"scrollTop"}},{key:"limit",get:function(){return this.direction==="horizontal"?this.contentWidth-this.wrapperWidth:this.contentHeight-this.wrapperHeight}},{key:"velocity",get:function(){return this.scroll-this.lastScroll}}]),r}(Ie);class tt{constructor(a,{snapType:n}){ae(this,"onScroll",({velocity:a})=>{if(Math.abs(a)>.1)return;const n=this.lenis.wrapperNode===window?{left:0,top:0,width:this.lenis.wrapperWidth,height:this.lenis.wrapperHeight}:this.lenis.wrapperNode.getBoundingClientRect(),r=this.isHorizontal?n.left:n.top,o=this.elements.map(({element:c,snapAlign:b})=>{const e=c.getBoundingClientRect();let t=0;b==="end"?t=this.isHorizontal?e.width-n.width:e.height-n.height:b==="center"&&(t=this.isHorizontal?(e.width-n.width)/2:(e.height-n.height)/2);const h=this.isHorizontal?e.left:e.top,y=Math.abs(h-r+t);return{element:c,distance:y,elRect:e,offset:t}}).sort((c,b)=>c.distance-b.distance);let s=this.isHorizontal?n.width:n.height;this.snapType==="proximity"&&(s*=.3);const f=o[0];f.distance>=s||this.lenis.scrollTo(f.element,{offset:f.offset,duration:3,lock:!0})});this.lenis=a,this.isHorizontal=this.lenis.direction==="horizontal",this.rootElement=this.lenis.wrapperNode===window?this.lenis.contentNode:this.lenis.wrapperNode,this.snapType=n||this.rootElement.getAttribute("scroll-snap-type")||"mandatory",this.initElements(),a.on("scroll",this.onScroll)}initElements(){this.elements=Array.from(this.rootElement.querySelectorAll('[scroll-snap-align]:not([scroll-snap-align="none"]')).map(a=>{let n=a.getAttribute("scroll-snap-align");return["start","center","end","none"].includes(n)||(n="start"),{element:a,snapAlign:n}})}}const ot = { class: "home" },
  nt = { class: "scroll-wrapper" },
  it = w(
    "section",
    { class: "scroll-section-1", "scroll-snap-align": "center" },
    null,
    -1
  ),
  st = w(
    "section",
    { class: "scroll-section-2", "scroll-snap-align": "center" },
    null,
    -1
  ),
  lt = w(
    "section",
    { class: "scroll-section-3", "scroll-snap-align": "center" },
    null,
    -1
  ),
  at = w(
    "section",
    { class: "scroll-section-4", "scroll-snap-align": "center" },
    null,
    -1
  ),
  rt = w(
    "section",
    { class: "scroll-section-5", "scroll-snap-align": "center" },
    null,
    -1
  ),
  ct = w(
    "section",
    { class: "scroll-section-6", "scroll-snap-align": "center" },
    null,
    -1
  ),
  ut = [it, st, lt, at, rt, ct],
  ht = { class: "container" },
  dt = { class: "home-section__content" },
  vt = { class: "container" },
  pt = ["href"],
  ft = { class: "home-nav__main-button-icon" },
  mt = w(
    "div",
    { class: "home-nav__main-button-label" },
    [
      w("span", { class: "eyebrow" }, "Launch viewer"),
      w(
        "span",
        { class: "eyebrow eyebrow--animation", "aria-hidden": "true" },
        "Launch viewer"
      ),
    ],
    -1
  ),
  _t = { key: 0, class: "home-nav__center" },
  wt = w("span", { class: "u-visually-hidden" }, "Go to previous section", -1),
  gt = { class: "home-nav__buttons" },
  yt = ["onClick"],
  bt = { class: "u-visually-hidden" },
  St = { class: "home-nav__button-label" },
  Tt = w("span", { class: "u-visually-hidden" }, "Go to next section", -1),
  kt = w("source", { src: Ue, type: "video/mp4" }, null, -1),
  Mt = [kt],
  xt = { key: 1, class: "loading" },
  Yt = {
    __name: "index",
    async setup(p) {
      let a, n;
      const r = pe(),
        o = $e(),
        s = We`*[_id=="homepage"][0]`,
        { data: f } = (([a, n] = De(() => Ce(s))), (a = await a), n(), a);
      (r.pageThemeDark = !1),
        (r.pageThemeBackground = null),
        (r.pageThemeColor = null),
        (o.isLight = !1);
      let c;
      const b = T(null),
        e = T(null),
        t = T(-1),
        h = T(5),
        y = T(!1),
        g = T(0),
        S = T(0),
        m = T(1),
        v = T(0),
        l = T(0),
        u =
          typeof window.orientation < "u" ||
          navigator.userAgent.includes("IEMobile");
      let i, _;
      if (u) {
        const E = Re(),
          L = 0.04,
          A = 1.1,
          B = 0.05,
          O = 0.6,
          C = 0.12,
          Y = T(0),
          P = T(0),
          N = T(null),
          W = T(!1),
          D = (d) => {
            N.value === null &&
              ((P.value -= d.deltaX / window.innerHeight),
              (P.value *= A),
              (P.value = ce(P.value, -B, B)));
          };
        i = (d) => {
          if (d !== N.value) {
            if (d < 0 && !y.value) return;
            (v.value = Math.floor(Math.round(l.value) / h.value)),
              (N.value = d + v.value * h.value);
          }
        };
        const R = () => {
          const d = E.$raf.dt / 16;
          if (N.value !== null) {
            const Z = Math.abs(N.value - l.value);
            (l.value = ze(l.value, N.value, (1 / (Z + 1)) * L * d)),
              Math.abs(l.value - N.value) < 0.08 && (N.value = null);
          } else {
            (l.value += P.value), (P.value *= 1 - C);
            const Z = Math.round(l.value),
              le = Z - l.value;
            (l.value += le * 0.035 * d * 0.5),
              Math.abs(le) < 0.001 && (l.value = Z);
          }
          const M = Math.floor(l.value);
          (v.value = Math.floor(M / h.value)),
            (S.value = M - v.value * h.value),
            (m.value = Math.floor(l.value) + 1 - v.value * h.value),
            m.value === h.value && (m.value = 0);
          let F =
            (l.value < 0 ? l.value - v.value * h.value : Math.abs(l.value)) % 1;
          F > O && !W.value ? (t.value = m.value) : (t.value = S.value),
            g.value !== null &&
              l.value < g.value &&
              ((F = 0),
              (l.value = g.value),
              (P.value = 0),
              (t.value = 0),
              (S.value = t.value),
              (m.value = t.value + 1)),
            re.emit("webgl_virtualscroll_y", {
              position: l.value,
              currentIndex: S.value,
              nextIndex: m.value,
              normalizedScroll: F,
            });
        };
        G(t, (d) => {
          d !== 0 && ((g.value = null), (c.scrollLimit = null));
        }),
          G(v, (d) => {
            const M = d * window.innerHeight;
            Y.value < M &&
              ((Y.value = M), c.setNewLimit(d * h.value * window.innerHeight));
          }),
          ee(() => {
            (c = new Ae({ useKeyboard: !1 })),
              c.on(Be(D, 16)),
              E.$raf.subscribe("virtualscroll", R);
          }),
          te(() => {
            (c = null), E.$raf.unsubscribe("virtualscroll");
          });
      } else {
        const E = T(null),
          L = T(null),
          A = (O) => {
            l.value = O.progress * h.value;
            const C = Math.floor(l.value);
            (v.value = Math.floor(C / h.value)), (S.value = C);
            let Y = Math.round(l.value);
            Y === h.value && (Y = 0), (t.value = Y);
            const P = ce(l.value % 1, 0, 1);
            (m.value = C + 1),
              m.value === h.value && (m.value = 0),
              re.emit("webgl_virtualscroll_y", {
                position: l.value,
                currentIndex: S.value,
                nextIndex: m.value,
                normalizedScroll: P,
              });
          };
        (i = (O, C = {}) => {
          c.scrollTo(O * window.innerWidth, { duration: 9, ...C });
        }),
          (_ = (O) => {
            new URLSearchParams(window.location.search).get("dev") ||
              (O.key === "ArrowLeft"
                ? i(t.value - 1)
                : O.key === "ArrowRight" && i(t.value + 1));
          });
        const B = (O) => {
          c && c.raf(O), requestAnimationFrame(B);
        };
        ee(() => {
          (E.value = setTimeout(() => {
            (c = new et({
              infinite: !0,
              direction: "horizontal",
              wrapper: b.value,
              content: e.value,
              mouseMultiplier: 0.35,
              duration: 1.6,
              normalizeWheel: !0,
            })),
              (c.scrollLimit = 0),
              c.on("scroll", A),
              new tt(c, { snapType: "" });
          }, 1200)),
            (L.value = requestAnimationFrame(B));
        }),
          te(() => {
            E.value && clearTimeout(E.value),
              c && c.destroy(),
              cancelAnimationFrame(L.value);
          });
      }
      const x = T(!0),
        I = T(!1),
        j = T(!0),
        K = T(null);
      return (
        G(t, (E) => {
          var L, A;
          E !== 0 &&
            ((y.value = !0),
            (x.value = !1),
            (g.value = null),
            (c.scrollLimit = null)),
            (A = (L = f._value) == null ? void 0 : L.mods[E]) != null && A.dark
              ? (I.value = !0)
              : (I.value = !1),
            r.showUI && (j.value = !1);
        }),
        G(I, (E) => {
          r.pageThemeDark = E;
        }),
        ee(() => {
          setTimeout(() => {
            r.page = "home";
          }, 600),
            (r.pageThemeDark = !1),
            (r.pageThemeBackground = null),
            (r.pageThemeColor = null),
            (o.isLight = !1),
            (j.value = !0),
            window.addEventListener("keydown", _),
            (t.value = 0),
            typeof window < "u" &&
              ([
                "iPad Simulator",
                "iPhone Simulator",
                "iPod Simulator",
                "iPad",
                "iPhone",
                "iPod",
              ].includes(navigator.platform) ||
                (navigator.userAgent.includes("Mac") &&
                  "ontouchend" in document) ||
                (K.value.pause(), (K.value.style.display = "none")));
        }),
        te(() => {
          window.removeEventListener("keydown", _);
        }),
        (E, L) => {
          var D, R;
          const A = be,
            B = Se,
            O = ye,
            C = Te,
            Y = ke,
            P = Xe,
            N = xe,
            W = Ge;
          return (
            H(),
            $("article", ot, [
              z(O, null, {
                default: U(() => {
                  var d, M, V;
                  return [
                    z(A, null, {
                      default: U(() => {
                        var F;
                        return [
                          ue(
                            J(
                              (F = k(f)) != null && F.title
                                ? k(he)(k(f).title)
                                : "Home"
                            ) + " | Cortex Ai",
                            1
                          ),
                        ];
                      }),
                      _: 1,
                    }),
                    z(
                      B,
                      {
                        name: "title",
                        content: `${
                          (d = k(f)) != null && d.title
                            ? k(he)(k(f).title)
                            : "Home"
                        } | Cortex Ai`,
                      },
                      null,
                      8,
                      ["content"]
                    ),
                    z(
                      B,
                      {
                        name: "description",
                        content:
                          (M = k(f)) != null && M.description
                            ? (V = k(f)) == null
                              ? void 0
                              : V.description
                            : null,
                      },
                      null,
                      8,
                      ["content"]
                    ),
                  ];
                }),
                _: 1,
              }),
              k(f)
                ? (H(),
                  $(
                    Q,
                    { key: 0 },
                    [
                      w("div", nt, [
                        w(
                          "div",
                          {
                            ref_key: "scrollWrapperRef",
                            ref: b,
                            class: "scroll-second-wrapper",
                            "scroll-snap-type": "mandatory",
                          },
                          [
                            w(
                              "div",
                              {
                                ref_key: "scrollContentRef",
                                ref: e,
                                class: "scroll-content",
                              },
                              ut,
                              512
                            ),
                          ],
                          512
                        ),
                      ]),
                      (H(!0),
                      $(
                        Q,
                        null,
                        ne(
                          (D = k(f)) == null ? void 0 : D.mods,
                          (d, M) => (
                            H(),
                            $(
                              "section",
                              {
                                key: `homeSection-${d.id}-${M}`,
                                class: X([
                                  "home-section",
                                  {
                                    "home-section--visible": t.value === M,
                                    [`home-section--${M}`]: !0,
                                  },
                                ]),
                              },
                              [
                                w("div", ht, [
                                  w("div", dt, [
                                    z(
                                      C,
                                      {
                                        color: d.dark
                                          ? "white"
                                          : "gradient-black",
                                        level: 2,
                                        title: k(Ye)(d.title),
                                        animate: !0,
                                        "animate-in": t.value === M,
                                        class: X({
                                          "heading--animate-load":
                                            M === 0 && k(r).showUI && j.value,
                                        }),
                                      },
                                      null,
                                      8,
                                      ["color", "title", "animate-in", "class"]
                                    ),
                                    z(
                                      Y,
                                      {
                                        text: d.text,
                                        color: d.dark ? "grey-light" : "grey",
                                        split: !0,
                                        animate: !0,
                                        "animate-in": t.value === M,
                                      },
                                      null,
                                      8,
                                      ["text", "color", "animate-in"]
                                    ),
                                    z(
                                      P,
                                      {
                                        link: d.button_link
                                          ? d.button_link
                                          : null,
                                        color: d.dark ? "light-grey" : "black",
                                        animate: !0,
                                        "animate-in": t.value === M,
                                        disabled: !d.button_link,
                                        class: X({
                                          "button-pill--animate-load":
                                            M === 0 && k(r).showUI && j.value,
                                        }),
                                      },
                                      {
                                        default: U(() => [
                                          ue(J(d.button_label), 1),
                                        ]),
                                        _: 2,
                                      },
                                      1032,
                                      [
                                        "link",
                                        "color",
                                        "animate-in",
                                        "disabled",
                                        "class",
                                      ]
                                    ),
                                  ]),
                                ]),
                              ],
                              2
                            )
                          )
                        ),
                        128
                      )),
                      w(
                        "nav",
                        {
                          class: X([
                            "home-nav",
                            x.value ? null : "home-nav--hide-labels",
                          ]),
                        },
                        [
                          w("div", vt, [
                            (R = k(r).globals) != null && R.launchViewerLink
                              ? (H(),
                                $(
                                  "a",
                                  {
                                    key: 0,
                                    href: k(r).globals.launchViewerLink,
                                    target: "_blank",
                                    class:
                                      "home-nav__main-button home-nav__viewer",
                                  },
                                  [
                                    w("span", ft, [
                                      z(N, {
                                        name: "3d",
                                        width: 17,
                                        height: 17,
                                      }),
                                    ]),
                                    mt,
                                  ],
                                  8,
                                  pt
                                ))
                              : oe("", !0),
                            z(
                              me,
                              {
                                name: "home-nav",
                                duration: { enter: 2200, leave: 0 },
                              },
                              {
                                default: U(() => [
                                  k(r).showUI
                                    ? (H(),
                                      $("div", _t, [
                                        w(
                                          "button",
                                          {
                                            type: "button",
                                            class: X([
                                              "home-nav__side home-nav__side--left",
                                              y.value ? null : "hidden",
                                            ]),
                                            onClick:
                                              L[0] ||
                                              (L[0] = (d) => k(i)(t.value - 1)),
                                          },
                                          [
                                            wt,
                                            z(N, {
                                              name: "chevron-left",
                                              width: 4,
                                              height: 6,
                                            }),
                                          ],
                                          2
                                        ),
                                        w("div", gt, [
                                          (H(!0),
                                          $(
                                            Q,
                                            null,
                                            ne(
                                              h.value,
                                              (d) => (
                                                H(),
                                                $(
                                                  "button",
                                                  {
                                                    key: `homeSectionButton-${d}`,
                                                    type: "button",
                                                    class: X([
                                                      "home-nav__button",
                                                      {
                                                        active:
                                                          t.value === d - 1,
                                                        prev: t.value === d,
                                                        next: t.value === d - 2,
                                                      },
                                                    ]),
                                                    onClick: (M) => k(i)(d - 1),
                                                  },
                                                  [
                                                    w(
                                                      "span",
                                                      bt,
                                                      "Go to slide " + J(d),
                                                      1
                                                    ),
                                                    w(
                                                      "span",
                                                      St,
                                                      "0" + J(d),
                                                      1
                                                    ),
                                                  ],
                                                  10,
                                                  yt
                                                )
                                              )
                                            ),
                                            128
                                          )),
                                        ]),
                                        w(
                                          "button",
                                          {
                                            type: "button",
                                            class:
                                              "home-nav__side home-nav__side--right",
                                            onClick:
                                              L[1] ||
                                              (L[1] = (d) => k(i)(t.value + 1)),
                                          },
                                          [
                                            Tt,
                                            z(N, {
                                              name: "chevron-right",
                                              width: 4,
                                              height: 6,
                                            }),
                                          ]
                                        ),
                                      ]))
                                    : oe("", !0),
                                ]),
                                _: 1,
                              }
                            ),
                            z(W),
                          ]),
                        ],
                        2
                      ),
                      w(
                        "video",
                        {
                          ref_key: "videoRef",
                          ref: K,
                          class: "hidden-webgl-vault-nine-video",
                          autoplay: "",
                          loop: "",
                          muted: "",
                          playsinline: "",
                        },
                        Mt,
                        512
                      ),
                    ],
                    64
                  ))
                : (H(), $("div", xt)),
            ])
          );
        }
      );
    },
  };
export { Yt as default };

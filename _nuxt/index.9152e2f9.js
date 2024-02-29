var M=Object.defineProperty;var x=(n,t,e)=>t in n?M(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var y=(n,t,e)=>(x(n,typeof t!="symbol"?t+"":t,e),e),_=(n,t,e)=>{if(!t.has(n))throw TypeError("Cannot "+e)};var s=(n,t,e)=>(_(n,t,"read from private field"),e?e.call(n):t.get(n)),c=(n,t,e)=>{if(t.has(n))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(n):t.set(n,e)},u=(n,t,e,i)=>(_(n,t,"write to private field"),i?i.call(n,e):t.set(n,e),e);var w={},L={get exports(){return w},set exports(n){w=n}};function E(){}E.prototype={on:function(n,t,e){var i=this.e||(this.e={});return(i[n]||(i[n]=[])).push({fn:t,ctx:e}),this},once:function(n,t,e){var i=this;function h(){i.off(n,h),t.apply(e,arguments)}return h._=t,this.on(n,h,e)},emit:function(n){var t=[].slice.call(arguments,1),e=((this.e||(this.e={}))[n]||[]).slice(),i=0,h=e.length;for(i;i<h;i++)e[i].fn.apply(e[i].ctx,t);return this},off:function(n,t){var e=this.e||(this.e={}),i=e[n],h=[];if(i&&t)for(var m=0,g=i.length;m<g;m++)i[m].fn!==t&&i[m].fn._!==t&&h.push(i[m]);return h.length?e[n]=h:delete e[n],this}};L.exports=E;var X=w.TinyEmitter=E;function S(n,t){let e;return function(){const i=arguments,h=this;e||(n.apply(h,i),e=!0,setTimeout(()=>e=!1,t))}}function Y(){return{hasWheelEvent:"onwheel"in document,hasMouseWheelEvent:"onmousewheel"in document,hasTouch:"ontouchstart"in document,hasTouchWin:navigator.msMaxTouchPoints&&navigator.msMaxTouchPoints>1,hasPointer:!!window.navigator.msPointerEnabled,hasKeyDown:"onkeydown"in document,isFirefox:navigator.userAgent.indexOf("Firefox")>-1}}const T={LEFT:37,UP:38,RIGHT:39,DOWN:40,SPACE:32},f="virtualscroll";var r,a,o,v,l,d,p;class W{constructor(t){c(this,a,void 0);c(this,o,void 0);c(this,v,void 0);c(this,l,void 0);c(this,d,void 0);c(this,p,void 0);y(this,"_onWheel",t=>{var e=s(this,a),i=s(this,l);i.deltaX=t.wheelDeltaX||t.deltaX*-1,i.deltaY=t.wheelDeltaY||t.deltaY*-1,r.isFirefox&&t.deltaMode===1&&(i.deltaX*=e.firefoxMultiplier,i.deltaY*=e.firefoxMultiplier),i.deltaX*=e.mouseMultiplier,i.deltaY*=e.mouseMultiplier,this._notify(t)});y(this,"_onMouseWheel",t=>{var e=s(this,l);e.deltaX=t.wheelDeltaX?t.wheelDeltaX:0,e.deltaY=t.wheelDeltaY?t.wheelDeltaY:t.wheelDelta,this._notify(t)});y(this,"_onTouchStart",t=>{var e=t.targetTouches?t.targetTouches[0]:t;s(this,d).x=e.pageX,s(this,d).y=e.pageY});y(this,"_onTouchMove",t=>{var e=s(this,a);e.preventTouch&&!t.target.classList.contains(e.unpreventTouchClass)&&t.preventDefault();var i=s(this,l),h=t.targetTouches?t.targetTouches[0]:t;i.deltaX=(h.pageX-s(this,d).x)*e.touchMultiplier,i.deltaY=(h.pageY-s(this,d).y)*e.touchMultiplier,s(this,d).x=h.pageX,s(this,d).y=h.pageY,this._notify(t)});y(this,"_onKeyDown",t=>{var e=s(this,l);e.deltaX=e.deltaY=0;var i=window.innerHeight-40;switch(t.keyCode){case T.LEFT:case T.UP:e.deltaY=s(this,a).keyStep;break;case T.RIGHT:case T.DOWN:e.deltaY=-s(this,a).keyStep;break;case T.SPACE:e.deltaY=i*(t.shiftKey?1:-1);break;default:return}this._notify(t)});u(this,o,window),t&&t.el&&(u(this,o,t.el),delete t.el),r||(r=Y()),u(this,a,Object.assign({mouseMultiplier:1,touchMultiplier:2,firefoxMultiplier:15,keyStep:120,preventTouch:!1,unpreventTouchClass:"vs-touchmove-allowed",useKeyboard:!0,useTouch:!0},t)),u(this,v,new w),u(this,l,{y:0,x:0,deltaX:0,deltaY:0}),u(this,d,{x:null,y:null}),u(this,p,null),this.yLimit=0,s(this,a).passive!==void 0&&(this.listenerOptions={passive:s(this,a).passive})}_notify(t,e=!1){var i=s(this,l);i.x+=i.deltaX,i.y+=i.deltaY,this.yLimit!==null&&!e&&i.y>this.yLimit&&(i.y=this.yLimit,i.deltaY=this.yLimit),s(this,v).emit(f,{x:i.x,y:i.y,deltaX:i.deltaX,deltaY:i.deltaY,originalEvent:t})}_bind(){r.hasWheelEvent&&s(this,o).addEventListener("wheel",this._onWheel,this.listenerOptions),r.hasMouseWheelEvent&&s(this,o).addEventListener("mousewheel",this._onMouseWheel,this.listenerOptions),r.hasTouch&&s(this,a).useTouch&&(s(this,o).addEventListener("touchstart",this._onTouchStart,this.listenerOptions),s(this,o).addEventListener("touchmove",this._onTouchMove,this.listenerOptions)),r.hasPointer&&r.hasTouchWin&&(u(this,p,document.body.style.msTouchAction),document.body.style.msTouchAction="none",s(this,o).addEventListener("MSPointerDown",this._onTouchStart,!0),s(this,o).addEventListener("MSPointerMove",this._onTouchMove,!0)),r.hasKeyDown&&s(this,a).useKeyboard&&document.addEventListener("keydown",this._onKeyDown)}_unbind(){r.hasWheelEvent&&s(this,o).removeEventListener("wheel",this._onWheel),r.hasMouseWheelEvent&&s(this,o).removeEventListener("mousewheel",this._onMouseWheel),r.hasTouch&&(s(this,o).removeEventListener("touchstart",this._onTouchStart),s(this,o).removeEventListener("touchmove",this._onTouchMove)),r.hasPointer&&r.hasTouchWin&&(document.body.style.msTouchAction=s(this,p),s(this,o).removeEventListener("MSPointerDown",this._onTouchStart,!0),s(this,o).removeEventListener("MSPointerMove",this._onTouchMove,!0)),r.hasKeyDown&&s(this,a).useKeyboard&&document.removeEventListener("keydown",this._onKeyDown)}setNewLimit(t){this.yLimit=t}scrollTo(t){u(this,l,{y:t,x:0,deltaX:0,deltaY:t}),this._notify(s(this,l),!0)}on(t,e){s(this,v).on(f,t,e);var i=s(this,v).e;i&&i[f]&&i[f].length===1&&this._bind()}off(t,e){s(this,v).off(f,t,e);var i=s(this,v).e;(!i[f]||i[f].length<=0)&&this._unbind()}destroy(){s(this,v).off(),this._unbind()}}a=new WeakMap,o=new WeakMap,v=new WeakMap,l=new WeakMap,d=new WeakMap,p=new WeakMap;export{X as T,W as V,S as t};
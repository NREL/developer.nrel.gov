import{c as K}from"./c-_commonjsHelpers-Cpj98o6Y.js";import{d as jn}from"./c-ready-D7ecCvij.js";var Yn={exports:{}},_t={exports:{}},Nt={exports:{}};/*!
  * Bootstrap data.js v5.3.5 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var fe;function Hn(){return fe||(fe=1,function(t,e){(function(n,a){t.exports=a()})(K,function(){const n=new Map;return{set(r,i,o){n.has(r)||n.set(r,new Map);const s=n.get(r);if(!s.has(i)&&s.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);return}s.set(i,o)},get(r,i){return n.has(r)&&n.get(r).get(i)||null},remove(r,i){if(!n.has(r))return;const o=n.get(r);o.delete(i),o.size===0&&n.delete(r)}}})}(Nt)),Nt.exports}var Pt={exports:{}},mt={exports:{}};/*!
  * Bootstrap index.js v5.3.5 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ue;function ft(){return ue||(ue=1,function(t,e){(function(n,a){a(e)})(K,function(n){const i="transitionend",o=c=>(c&&window.CSS&&window.CSS.escape&&(c=c.replace(/#([^\s"#']+)/g,(h,m)=>`#${CSS.escape(m)}`)),c),s=c=>c==null?`${c}`:Object.prototype.toString.call(c).match(/\s([a-z]+)/i)[1].toLowerCase(),u=c=>{do c+=Math.floor(Math.random()*1e6);while(document.getElementById(c));return c},l=c=>{if(!c)return 0;let{transitionDuration:h,transitionDelay:m}=window.getComputedStyle(c);const b=Number.parseFloat(h),w=Number.parseFloat(m);return!b&&!w?0:(h=h.split(",")[0],m=m.split(",")[0],(Number.parseFloat(h)+Number.parseFloat(m))*1e3)},d=c=>{c.dispatchEvent(new Event(i))},y=c=>!c||typeof c!="object"?!1:(typeof c.jquery<"u"&&(c=c[0]),typeof c.nodeType<"u"),E=c=>y(c)?c.jquery?c[0]:c:typeof c=="string"&&c.length>0?document.querySelector(o(c)):null,k=c=>{if(!y(c)||c.getClientRects().length===0)return!1;const h=getComputedStyle(c).getPropertyValue("visibility")==="visible",m=c.closest("details:not([open])");if(!m)return h;if(m!==c){const b=c.closest("summary");if(b&&b.parentNode!==m||b===null)return!1}return h},L=c=>!c||c.nodeType!==Node.ELEMENT_NODE||c.classList.contains("disabled")?!0:typeof c.disabled<"u"?c.disabled:c.hasAttribute("disabled")&&c.getAttribute("disabled")!=="false",I=c=>{if(!document.documentElement.attachShadow)return null;if(typeof c.getRootNode=="function"){const h=c.getRootNode();return h instanceof ShadowRoot?h:null}return c instanceof ShadowRoot?c:c.parentNode?I(c.parentNode):null},N=()=>{},O=c=>{c.offsetHeight},T=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,x=[],D=c=>{document.readyState==="loading"?(x.length||document.addEventListener("DOMContentLoaded",()=>{for(const h of x)h()}),x.push(c)):c()},z=()=>document.documentElement.dir==="rtl",v=c=>{D(()=>{const h=T();if(h){const m=c.NAME,b=h.fn[m];h.fn[m]=c.jQueryInterface,h.fn[m].Constructor=c,h.fn[m].noConflict=()=>(h.fn[m]=b,c.jQueryInterface)}})},g=(c,h=[],m=c)=>typeof c=="function"?c.call(...h):m,A=(c,h,m=!0)=>{if(!m){g(c);return}const w=l(h)+5;let S=!1;const P=({target:F})=>{F===h&&(S=!0,h.removeEventListener(i,P),g(c))};h.addEventListener(i,P),setTimeout(()=>{S||d(h)},w)},C=(c,h,m,b)=>{const w=c.length;let S=c.indexOf(h);return S===-1?!m&&b?c[w-1]:c[0]:(S+=m?1:-1,b&&(S=(S+w)%w),c[Math.max(0,Math.min(S,w-1))])};n.defineJQueryPlugin=v,n.execute=g,n.executeAfterTransition=A,n.findShadowRoot=I,n.getElement=E,n.getNextActiveElement=C,n.getTransitionDurationFromElement=l,n.getUID=u,n.getjQuery=T,n.isDisabled=L,n.isElement=y,n.isRTL=z,n.isVisible=k,n.noop=N,n.onDOMContentLoaded=D,n.parseSelector=o,n.reflow=O,n.toType=s,n.triggerTransitionEnd=d,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})})}(mt,mt.exports)),mt.exports}/*!
  * Bootstrap event-handler.js v5.3.5 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var de;function Ue(){return de||(de=1,function(t,e){(function(n,a){t.exports=a(ft())})(K,function(n){const a=/[^.]*(?=\..*)\.|.*/,r=/\..*/,i=/::\d+$/,o={};let s=1;const u={mouseenter:"mouseover",mouseleave:"mouseout"},l=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function d(v,g){return g&&`${g}::${s++}`||v.uidEvent||s++}function y(v){const g=d(v);return v.uidEvent=g,o[g]=o[g]||{},o[g]}function E(v,g){return function A(C){return z(C,{delegateTarget:v}),A.oneOff&&D.off(v,C.type,g),g.apply(v,[C])}}function k(v,g,A){return function C(c){const h=v.querySelectorAll(g);for(let{target:m}=c;m&&m!==this;m=m.parentNode)for(const b of h)if(b===m)return z(c,{delegateTarget:m}),C.oneOff&&D.off(v,c.type,g,A),A.apply(m,[c])}}function L(v,g,A=null){return Object.values(v).find(C=>C.callable===g&&C.delegationSelector===A)}function I(v,g,A){const C=typeof g=="string",c=C?A:g||A;let h=x(v);return l.has(h)||(h=v),[C,c,h]}function N(v,g,A,C,c){if(typeof g!="string"||!v)return;let[h,m,b]=I(g,A,C);g in u&&(m=(Rn=>function(tt){if(!tt.relatedTarget||tt.relatedTarget!==tt.delegateTarget&&!tt.delegateTarget.contains(tt.relatedTarget))return Rn.call(this,tt)})(m));const w=y(v),S=w[b]||(w[b]={}),P=L(S,m,h?A:null);if(P){P.oneOff=P.oneOff&&c;return}const F=d(m,g.replace(a,"")),R=h?k(v,A,m):E(v,m);R.delegationSelector=h?A:null,R.callable=m,R.oneOff=c,R.uidEvent=F,S[F]=R,v.addEventListener(b,R,h)}function O(v,g,A,C,c){const h=L(g[A],C,c);h&&(v.removeEventListener(A,h,!!c),delete g[A][h.uidEvent])}function T(v,g,A,C){const c=g[A]||{};for(const[h,m]of Object.entries(c))h.includes(C)&&O(v,g,A,m.callable,m.delegationSelector)}function x(v){return v=v.replace(r,""),u[v]||v}const D={on(v,g,A,C){N(v,g,A,C,!1)},one(v,g,A,C){N(v,g,A,C,!0)},off(v,g,A,C){if(typeof g!="string"||!v)return;const[c,h,m]=I(g,A,C),b=m!==g,w=y(v),S=w[m]||{},P=g.startsWith(".");if(typeof h<"u"){if(!Object.keys(S).length)return;O(v,w,m,h,c?A:null);return}if(P)for(const F of Object.keys(w))T(v,w,F,g.slice(1));for(const[F,R]of Object.entries(S)){const Y=F.replace(i,"");(!b||g.includes(Y))&&O(v,w,m,R.callable,R.delegationSelector)}},trigger(v,g,A){if(typeof g!="string"||!v)return null;const C=n.getjQuery(),c=x(g),h=g!==c;let m=null,b=!0,w=!0,S=!1;h&&C&&(m=C.Event(g,A),C(v).trigger(m),b=!m.isPropagationStopped(),w=!m.isImmediatePropagationStopped(),S=m.isDefaultPrevented());const P=z(new Event(g,{bubbles:b,cancelable:!0}),A);return S&&P.preventDefault(),w&&v.dispatchEvent(P),P.defaultPrevented&&m&&m.preventDefault(),P}};function z(v,g={}){for(const[A,C]of Object.entries(g))try{v[A]=C}catch{Object.defineProperty(v,A,{configurable:!0,get(){return C}})}return v}return D})}(Pt)),Pt.exports}var kt={exports:{}},Ot={exports:{}};/*!
  * Bootstrap manipulator.js v5.3.5 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var me;function $n(){return me||(me=1,function(t,e){(function(n,a){t.exports=a()})(K,function(){function n(i){if(i==="true")return!0;if(i==="false")return!1;if(i===Number(i).toString())return Number(i);if(i===""||i==="null")return null;if(typeof i!="string")return i;try{return JSON.parse(decodeURIComponent(i))}catch{return i}}function a(i){return i.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`)}return{setDataAttribute(i,o,s){i.setAttribute(`data-bs-${a(o)}`,s)},removeDataAttribute(i,o){i.removeAttribute(`data-bs-${a(o)}`)},getDataAttributes(i){if(!i)return{};const o={},s=Object.keys(i.dataset).filter(u=>u.startsWith("bs")&&!u.startsWith("bsConfig"));for(const u of s){let l=u.replace(/^bs/,"");l=l.charAt(0).toLowerCase()+l.slice(1),o[l]=n(i.dataset[u])}return o},getDataAttribute(i,o){return n(i.getAttribute(`data-bs-${a(o)}`))}}})}(Ot)),Ot.exports}/*!
  * Bootstrap config.js v5.3.5 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var he;function Vn(){return he||(he=1,function(t,e){(function(n,a){t.exports=a($n(),ft())})(K,function(n,a){class r{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(o){return o=this._mergeConfigObj(o),o=this._configAfterMerge(o),this._typeCheckConfig(o),o}_configAfterMerge(o){return o}_mergeConfigObj(o,s){const u=a.isElement(s)?n.getDataAttribute(s,"config"):{};return{...this.constructor.Default,...typeof u=="object"?u:{},...a.isElement(s)?n.getDataAttributes(s):{},...typeof o=="object"?o:{}}}_typeCheckConfig(o,s=this.constructor.DefaultType){for(const[u,l]of Object.entries(s)){const d=o[u],y=a.isElement(d)?"element":a.toType(d);if(!new RegExp(l).test(y))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${u}" provided type "${y}" but expected type "${l}".`)}}}return r})}(kt)),kt.exports}/*!
  * Bootstrap base-component.js v5.3.5 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ge;function Un(){return ge||(ge=1,function(t,e){(function(n,a){t.exports=a(Hn(),Ue(),Vn(),ft())})(K,function(n,a,r,i){const o="5.3.5";class s extends r{constructor(l,d){super(),l=i.getElement(l),l&&(this._element=l,this._config=this._getConfig(d),n.set(this._element,this.constructor.DATA_KEY,this))}dispose(){n.remove(this._element,this.constructor.DATA_KEY),a.off(this._element,this.constructor.EVENT_KEY);for(const l of Object.getOwnPropertyNames(this))this[l]=null}_queueCallback(l,d,y=!0){i.executeAfterTransition(l,d,y)}_getConfig(l){return l=this._mergeConfigObj(l,this._element),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}static getInstance(l){return n.get(i.getElement(l),this.DATA_KEY)}static getOrCreateInstance(l,d={}){return this.getInstance(l)||new this(l,typeof d=="object"?d:null)}static get VERSION(){return o}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(l){return`${l}${this.EVENT_KEY}`}}return s})}(_t)),_t.exports}var Tt={exports:{}};/*!
  * Bootstrap selector-engine.js v5.3.5 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var pe;function Wn(){return pe||(pe=1,function(t,e){(function(n,a){t.exports=a(ft())})(K,function(n){const a=i=>{let o=i.getAttribute("data-bs-target");if(!o||o==="#"){let s=i.getAttribute("href");if(!s||!s.includes("#")&&!s.startsWith("."))return null;s.includes("#")&&!s.startsWith("#")&&(s=`#${s.split("#")[1]}`),o=s&&s!=="#"?s.trim():null}return o?o.split(",").map(s=>n.parseSelector(s)).join(","):null},r={find(i,o=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(o,i))},findOne(i,o=document.documentElement){return Element.prototype.querySelector.call(o,i)},children(i,o){return[].concat(...i.children).filter(s=>s.matches(o))},parents(i,o){const s=[];let u=i.parentNode.closest(o);for(;u;)s.push(u),u=u.parentNode.closest(o);return s},prev(i,o){let s=i.previousElementSibling;for(;s;){if(s.matches(o))return[s];s=s.previousElementSibling}return[]},next(i,o){let s=i.nextElementSibling;for(;s;){if(s.matches(o))return[s];s=s.nextElementSibling}return[]},focusableChildren(i){const o=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(s=>`${s}:not([tabindex^="-"])`).join(",");return this.find(o,i).filter(s=>!n.isDisabled(s)&&n.isVisible(s))},getSelectorFromElement(i){const o=a(i);return o&&r.findOne(o)?o:null},getElementFromSelector(i){const o=a(i);return o?r.findOne(o):null},getMultipleElementsFromSelector(i){const o=a(i);return o?r.find(o):[]}};return r})}(Tt)),Tt.exports}/*!
  * Bootstrap collapse.js v5.3.5 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(t,e){(function(n,a){t.exports=a(Un(),Ue(),Wn(),ft())})(K,function(n,a,r,i){const o="collapse",u=".bs.collapse",l=".data-api",d=`show${u}`,y=`shown${u}`,E=`hide${u}`,k=`hidden${u}`,L=`click${u}${l}`,I="show",N="collapse",O="collapsing",T="collapsed",x=`:scope .${N} .${N}`,D="collapse-horizontal",z="width",v="height",g=".collapse.show, .collapse.collapsing",A='[data-bs-toggle="collapse"]',C={parent:null,toggle:!0},c={parent:"(null|element)",toggle:"boolean"};class h extends n{constructor(b,w){super(b,w),this._isTransitioning=!1,this._triggerArray=[];const S=r.find(A);for(const P of S){const F=r.getSelectorFromElement(P),R=r.find(F).filter(Y=>Y===this._element);F!==null&&R.length&&this._triggerArray.push(P)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return C}static get DefaultType(){return c}static get NAME(){return o}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let b=[];if(this._config.parent&&(b=this._getFirstLevelChildren(g).filter(Y=>Y!==this._element).map(Y=>h.getOrCreateInstance(Y,{toggle:!1}))),b.length&&b[0]._isTransitioning||a.trigger(this._element,d).defaultPrevented)return;for(const Y of b)Y.hide();const S=this._getDimension();this._element.classList.remove(N),this._element.classList.add(O),this._element.style[S]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const P=()=>{this._isTransitioning=!1,this._element.classList.remove(O),this._element.classList.add(N,I),this._element.style[S]="",a.trigger(this._element,y)},R=`scroll${S[0].toUpperCase()+S.slice(1)}`;this._queueCallback(P,this._element,!0),this._element.style[S]=`${this._element[R]}px`}hide(){if(this._isTransitioning||!this._isShown()||a.trigger(this._element,E).defaultPrevented)return;const w=this._getDimension();this._element.style[w]=`${this._element.getBoundingClientRect()[w]}px`,i.reflow(this._element),this._element.classList.add(O),this._element.classList.remove(N,I);for(const P of this._triggerArray){const F=r.getElementFromSelector(P);F&&!this._isShown(F)&&this._addAriaAndCollapsedClass([P],!1)}this._isTransitioning=!0;const S=()=>{this._isTransitioning=!1,this._element.classList.remove(O),this._element.classList.add(N),a.trigger(this._element,k)};this._element.style[w]="",this._queueCallback(S,this._element,!0)}_isShown(b=this._element){return b.classList.contains(I)}_configAfterMerge(b){return b.toggle=!!b.toggle,b.parent=i.getElement(b.parent),b}_getDimension(){return this._element.classList.contains(D)?z:v}_initializeChildren(){if(!this._config.parent)return;const b=this._getFirstLevelChildren(A);for(const w of b){const S=r.getElementFromSelector(w);S&&this._addAriaAndCollapsedClass([w],this._isShown(S))}}_getFirstLevelChildren(b){const w=r.find(x,this._config.parent);return r.find(b,this._config.parent).filter(S=>!w.includes(S))}_addAriaAndCollapsedClass(b,w){if(b.length)for(const S of b)S.classList.toggle(T,!w),S.setAttribute("aria-expanded",w)}static jQueryInterface(b){const w={};return typeof b=="string"&&/show|hide/.test(b)&&(w.toggle=!1),this.each(function(){const S=h.getOrCreateInstance(this,w);if(typeof b=="string"){if(typeof S[b]>"u")throw new TypeError(`No method named "${b}"`);S[b]()}})}}return a.on(document,L,A,function(m){(m.target.tagName==="A"||m.delegateTarget&&m.delegateTarget.tagName==="A")&&m.preventDefault();for(const b of r.getMultipleElementsFromSelector(this))h.getOrCreateInstance(b,{toggle:!1}).toggle()}),i.defineJQueryPlugin(h),h})})(Yn);var We={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="bars",a=448,r=512,i=["navicon"],o="f0c9",s="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z";t.definition={prefix:e,iconName:n,icon:[a,r,i,o,s]},t.faBars=t.definition,t.prefix=e,t.iconName=n,t.width=a,t.height=r,t.ligatures=i,t.unicode=o,t.svgPathData=s,t.aliases=i})(We);var qe={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="comments",a=640,r=512,i=[128490,61670],o="f086",s="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2s0 0 0 0s0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.2-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9c0 0 0 0 0 0s0 0 0 0l-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z";t.definition={prefix:e,iconName:n,icon:[a,r,i,o,s]},t.faComments=t.definition,t.prefix=e,t.iconName=n,t.width=a,t.height=r,t.ligatures=i,t.unicode=o,t.svgPathData=s,t.aliases=i})(qe);var Ge={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fab",n="github",a=496,r=512,i=[],o="f09b",s="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z";t.definition={prefix:e,iconName:n,icon:[a,r,i,o,s]},t.faGithub=t.definition,t.prefix=e,t.iconName=n,t.width=a,t.height=r,t.ligatures=i,t.unicode=o,t.svgPathData=s,t.aliases=i})(Ge);var Xe={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fab",n="instagram",a=448,r=512,i=[],o="f16d",s="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z";t.definition={prefix:e,iconName:n,icon:[a,r,i,o,s]},t.faInstagram=t.definition,t.prefix=e,t.iconName=n,t.width=a,t.height=r,t.ligatures=i,t.unicode=o,t.svgPathData=s,t.aliases=i})(Xe);var Be={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fab",n="linkedin",a=448,r=512,i=[],o="f08c",s="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z";t.definition={prefix:e,iconName:n,icon:[a,r,i,o,s]},t.faLinkedin=t.definition,t.prefix=e,t.iconName=n,t.width=a,t.height=r,t.ligatures=i,t.unicode=o,t.svgPathData=s,t.aliases=i})(Be);var Ke={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="magnifying-glass",a=512,r=512,i=[128269,"search"],o="f002",s="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z";t.definition={prefix:e,iconName:n,icon:[a,r,i,o,s]},t.faMagnifyingGlass=t.definition,t.prefix=e,t.iconName=n,t.width=a,t.height=r,t.ligatures=i,t.unicode=o,t.svgPathData=s,t.aliases=i})(Ke);var Qe={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fab",n="square-facebook",a=448,r=512,i=["facebook-square"],o="f082",s="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z";t.definition={prefix:e,iconName:n,icon:[a,r,i,o,s]},t.faSquareFacebook=t.definition,t.prefix=e,t.iconName=n,t.width=a,t.height=r,t.ligatures=i,t.unicode=o,t.svgPathData=s,t.aliases=i})(Qe);var Je={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fab",n="threads",a=448,r=512,i=[],o="e618",s="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z";t.definition={prefix:e,iconName:n,icon:[a,r,i,o,s]},t.faThreads=t.definition,t.prefix=e,t.iconName=n,t.width=a,t.height=r,t.ligatures=i,t.unicode=o,t.svgPathData=s,t.aliases=i})(Je);var Ze={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fab",n="x-twitter",a=512,r=512,i=[],o="e61b",s="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z";t.definition={prefix:e,iconName:n,icon:[a,r,i,o,s]},t.faXTwitter=t.definition,t.prefix=e,t.iconName=n,t.width=a,t.height=r,t.ligatures=i,t.unicode=o,t.svgPathData=s,t.aliases=i})(Ze);var tn={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="xmark",a=384,r=512,i=[128473,10005,10006,10060,215,"close","multiply","remove","times"],o="f00d",s="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z";t.definition={prefix:e,iconName:n,icon:[a,r,i,o,s]},t.faXmark=t.definition,t.prefix=e,t.iconName=n,t.width=a,t.height=r,t.ligatures=i,t.unicode=o,t.svgPathData=s,t.aliases=i})(tn);var en={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fab",n="youtube",a=576,r=512,i=[61802],o="f167",s="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z";t.definition={prefix:e,iconName:n,icon:[a,r,i,o,s]},t.faYoutube=t.definition,t.prefix=e,t.iconName=n,t.width=a,t.height=r,t.ligatures=i,t.unicode=o,t.svgPathData=s,t.aliases=i})(en);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function qn(t,e,n){return(e=Xn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ve(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ve(Object(n),!0).forEach(function(a){qn(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ve(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Gn(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Xn(t){var e=Gn(t,"string");return typeof e=="symbol"?e:e+""}const be=()=>{};let Zt={},nn={},an=null,rn={mark:be,measure:be};try{typeof window<"u"&&(Zt=window),typeof document<"u"&&(nn=document),typeof MutationObserver<"u"&&(an=MutationObserver),typeof performance<"u"&&(rn=performance)}catch{}const{userAgent:ye=""}=Zt.navigator||{},G=Zt,_=nn,Ae=an,ht=rn;G.document;const W=!!_.documentElement&&!!_.head&&typeof _.addEventListener=="function"&&typeof _.createElement=="function",on=~ye.indexOf("MSIE")||~ye.indexOf("Trident/");var Bn=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Kn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,sn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Qn={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},cn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],M="classic",At="duotone",Jn="sharp",Zn="sharp-duotone",ln=[M,At,Jn,Zn],ta={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},ea={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},na=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),aa={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},ra=["fak","fa-kit","fakd","fa-kit-duotone"],Ee={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ia=["kit"],oa={kit:{"fa-kit":"fak"}},sa=["fak","fakd"],ca={kit:{fak:"fa-kit"}},we={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},gt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},la=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],fa=["fak","fa-kit","fakd","fa-kit-duotone"],ua={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},da={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},ma={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},zt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},ha=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Rt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...la,...ha],ga=["solid","regular","light","thin","duotone","brands"],fn=[1,2,3,4,5,6,7,8,9,10],pa=fn.concat([11,12,13,14,15,16,17,18,19,20]),va=[...Object.keys(ma),...ga,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",gt.GROUP,gt.SWAP_OPACITY,gt.PRIMARY,gt.SECONDARY].concat(fn.map(t=>"".concat(t,"x"))).concat(pa.map(t=>"w-".concat(t))),ba={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const V="___FONT_AWESOME___",jt=16,un="fa",dn="svg-inline--fa",J="data-fa-i2svg",Yt="data-fa-pseudo-element",ya="data-fa-pseudo-element-pending",te="data-prefix",ee="data-icon",Se="fontawesome-i2svg",Aa="async",Ea=["HTML","HEAD","STYLE","SCRIPT"],mn=(()=>{try{return!0}catch{return!1}})();function ut(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[M]}})}const hn=f({},sn);hn[M]=f(f(f(f({},{"fa-duotone":"duotone"}),sn[M]),Ee.kit),Ee["kit-duotone"]);const wa=ut(hn),Ht=f({},aa);Ht[M]=f(f(f(f({},{duotone:"fad"}),Ht[M]),we.kit),we["kit-duotone"]);const Ce=ut(Ht),$t=f({},zt);$t[M]=f(f({},$t[M]),ca.kit);const ne=ut($t),Vt=f({},da);Vt[M]=f(f({},Vt[M]),oa.kit);ut(Vt);const Sa=Bn,gn="fa-layers-text",Ca=Kn,_a=f({},ta);ut(_a);const Na=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],xt=Qn,Pa=[...ia,...va],ot=G.FontAwesomeConfig||{};function ka(t){var e=_.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Oa(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}_&&typeof _.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=Oa(ka(n));r!=null&&(ot[a]=r)});const pn={styleDefault:"solid",familyDefault:M,cssPrefix:un,replacementClass:dn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ot.familyPrefix&&(ot.cssPrefix=ot.familyPrefix);const at=f(f({},pn),ot);at.autoReplaceSvg||(at.observeMutations=!1);const p={};Object.keys(pn).forEach(t=>{Object.defineProperty(p,t,{enumerable:!0,set:function(e){at[t]=e,st.forEach(n=>n(p))},get:function(){return at[t]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(t){at.cssPrefix=t,st.forEach(e=>e(p))},get:function(){return at.cssPrefix}});G.FontAwesomeConfig=p;const st=[];function Ta(t){return st.push(t),()=>{st.splice(st.indexOf(t),1)}}const q=jt,H={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function xa(t){if(!t||!W)return;const e=_.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=_.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return _.head.insertBefore(e,a),t}const Ia="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ct(){let t=12,e="";for(;t-- >0;)e+=Ia[Math.random()*62|0];return e}function rt(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ae(t){return t.classList?rt(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function vn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ma(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(vn(t[n]),'" '),"").trim()}function Et(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function re(t){return t.size!==H.size||t.x!==H.x||t.y!==H.y||t.rotate!==H.rotate||t.flipX||t.flipY}function La(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:u,path:l}}function Da(t){let{transform:e,width:n=jt,height:a=jt,startCentered:r=!1}=t,i="";return r&&on?i+="translate(".concat(e.x/q-n/2,"em, ").concat(e.y/q-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/q,"em), calc(-50% + ").concat(e.y/q,"em)) "):i+="translate(".concat(e.x/q,"em, ").concat(e.y/q,"em) "),i+="scale(".concat(e.size/q*(e.flipX?-1:1),", ").concat(e.size/q*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var Fa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function bn(){const t=un,e=dn,n=p.cssPrefix,a=p.replacementClass;let r=Fa;if(n!==t||a!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}let _e=!1;function It(){p.autoAddCss&&!_e&&(xa(bn()),_e=!0)}var za={mixout(){return{dom:{css:bn,insertCss:It}}},hooks(){return{beforeDOMElementCreation(){It()},beforeI2svg(){It()}}}};const U=G||{};U[V]||(U[V]={});U[V].styles||(U[V].styles={});U[V].hooks||(U[V].hooks={});U[V].shims||(U[V].shims=[]);var $=U[V];const yn=[],An=function(){_.removeEventListener("DOMContentLoaded",An),bt=1,yn.map(t=>t())};let bt=!1;W&&(bt=(_.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(_.readyState),bt||_.addEventListener("DOMContentLoaded",An));function Ra(t){W&&(bt?setTimeout(t,0):yn.push(t))}function dt(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?vn(t):"<".concat(e," ").concat(Ma(n),">").concat(a.map(dt).join(""),"</").concat(e,">")}function Ne(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Mt=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=n,u,l,d;for(a===void 0?(u=1,d=e[i[0]]):(u=0,d=a);u<o;u++)l=i[u],d=s(d,e[l],l,e);return d};function ja(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Ut(t){const e=ja(t);return e.length===1?e[0].toString(16):null}function Ya(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Pe(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Wt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=Pe(e);typeof $.hooks.addPack=="function"&&!a?$.hooks.addPack(t,Pe(e)):$.styles[t]=f(f({},$.styles[t]||{}),r),t==="fas"&&Wt("fa",e)}const{styles:lt,shims:Ha}=$,En=Object.keys(ne),$a=En.reduce((t,e)=>(t[e]=Object.keys(ne[e]),t),{});let ie=null,wn={},Sn={},Cn={},_n={},Nn={};function Va(t){return~Pa.indexOf(t)}function Ua(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Va(r)?r:null}const Pn=()=>{const t=a=>Mt(lt,(r,i,o)=>(r[o]=Mt(i,a,{}),r),{});wn=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(s=>typeof s=="number").forEach(s=>{a[s.toString(16)]=i}),a)),Sn=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(s=>typeof s=="string").forEach(s=>{a[s]=i}),a)),Nn=t((a,r,i)=>{const o=r[2];return a[i]=i,o.forEach(s=>{a[s]=i}),a});const e="far"in lt||p.autoFetchSvg,n=Mt(Ha,(a,r)=>{const i=r[0];let o=r[1];const s=r[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(a.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:o,iconName:s}),a},{names:{},unicodes:{}});Cn=n.names,_n=n.unicodes,ie=wt(p.styleDefault,{family:p.familyDefault})};Ta(t=>{ie=wt(t.styleDefault,{family:p.familyDefault})});Pn();function oe(t,e){return(wn[t]||{})[e]}function Wa(t,e){return(Sn[t]||{})[e]}function Q(t,e){return(Nn[t]||{})[e]}function kn(t){return Cn[t]||{prefix:null,iconName:null}}function qa(t){const e=_n[t],n=oe("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function X(){return ie}const On=()=>({prefix:null,iconName:null,rest:[]});function Ga(t){let e=M;const n=En.reduce((a,r)=>(a[r]="".concat(p.cssPrefix,"-").concat(r),a),{});return ln.forEach(a=>{(t.includes(n[a])||t.some(r=>$a[a].includes(r)))&&(e=a)}),e}function wt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=M}=e,a=wa[n][t];if(n===At&&!t)return"fad";const r=Ce[n][t]||Ce[n][a],i=t in $.styles?t:null;return r||i||null}function Xa(t){let e=[],n=null;return t.forEach(a=>{const r=Ua(p.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function ke(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function St(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=Rt.concat(fa),i=ke(t.filter(y=>r.includes(y))),o=ke(t.filter(y=>!Rt.includes(y))),s=i.filter(y=>(a=y,!cn.includes(y))),[u=null]=s,l=Ga(i),d=f(f({},Xa(o)),{},{prefix:wt(u,{family:l})});return f(f(f({},d),Ja({values:t,family:l,styles:lt,config:p,canonical:d,givenPrefix:a})),Ba(n,a,d))}function Ba(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const i=e==="fa"?kn(r):{},o=Q(a,r);return r=i.iconName||o||r,a=i.prefix||a,a==="far"&&!lt.far&&lt.fas&&!p.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const Ka=ln.filter(t=>t!==M||t!==At),Qa=Object.keys(zt).filter(t=>t!==M).map(t=>Object.keys(zt[t])).flat();function Ja(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:i={},config:o={}}=t,s=n===At,u=e.includes("fa-duotone")||e.includes("fad"),l=o.familyDefault==="duotone",d=a.prefix==="fad"||a.prefix==="fa-duotone";if(!s&&(u||l||d)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Ka.includes(n)&&(Object.keys(i).find(E=>Qa.includes(E))||o.autoFetchSvg)){const E=na.get(n).defaultShortPrefixId;a.prefix=E,a.iconName=Q(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=X()||"fas"),a}class Za{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]=f(f({},this.definitions[i]||{}),r[i]),Wt(i,r[i]);const o=ne[M][i];o&&Wt(o,r[i]),Pn()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:o,icon:s}=a[r],u=s[2];e[i]||(e[i]={}),u.length>0&&u.forEach(l=>{typeof l=="string"&&(e[i][l]=s)}),e[i][o]=s}),e}}let Oe=[],et={};const nt={},tr=Object.keys(nt);function er(t,e){let{mixoutsTo:n}=e;return Oe=t,et={},Object.keys(nt).forEach(a=>{tr.indexOf(a)===-1&&delete nt[a]}),Oe.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=r[i][o]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(o=>{et[o]||(et[o]=[]),et[o].push(i[o])})}a.provides&&a.provides(nt)}),n}function qt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(et[t]||[]).forEach(o=>{e=o.apply(null,[e,...a])}),e}function Z(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(et[t]||[]).forEach(i=>{i.apply(null,n)})}function B(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return nt[t]?nt[t].apply(null,e):void 0}function Gt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||X();if(e)return e=Q(n,e)||e,Ne(Tn.definitions,n,e)||Ne($.styles,n,e)}const Tn=new Za,nr=()=>{p.autoReplaceSvg=!1,p.observeMutations=!1,Z("noAuto")},ar={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return W?(Z("beforeI2svg",t),B("pseudoElements2svg",t),B("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,Ra(()=>{ir({autoReplaceSvgRoot:e}),Z("watch",t)})}},rr={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Q(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=wt(t[0]);return{prefix:n,iconName:Q(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(p.cssPrefix,"-"))>-1||t.match(Sa))){const e=St(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||X(),iconName:Q(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=X();return{prefix:e,iconName:Q(e,t)||t}}}},j={noAuto:nr,config:p,dom:ar,parse:rr,library:Tn,findIconDefinition:Gt,toHtml:dt},ir=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=_}=t;(Object.keys($.styles).length>0||p.autoFetchSvg)&&W&&p.autoReplaceSvg&&j.dom.i2svg({node:e})};function Ct(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>dt(n))}}),Object.defineProperty(t,"node",{get:function(){if(!W)return;const n=_.createElement("div");return n.innerHTML=t.html,n.children}}),t}function or(t){let{children:e,main:n,mask:a,attributes:r,styles:i,transform:o}=t;if(re(o)&&n.found&&!a.found){const{width:s,height:u}=n,l={x:s/u/2,y:.5};r.style=Et(f(f({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function sr(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(p.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},r),{},{id:o}),children:a}]}]}function se(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:i,symbol:o,title:s,maskId:u,titleId:l,extra:d,watchable:y=!1}=t,{width:E,height:k}=n.found?n:e,L=sa.includes(a),I=[p.replacementClass,r?"".concat(p.cssPrefix,"-").concat(r):""].filter(z=>d.classes.indexOf(z)===-1).filter(z=>z!==""||!!z).concat(d.classes).join(" ");let N={children:[],attributes:f(f({},d.attributes),{},{"data-prefix":a,"data-icon":r,class:I,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(k)})};const O=L&&!~d.classes.indexOf("fa-fw")?{width:"".concat(E/k*16*.0625,"em")}:{};y&&(N.attributes[J]=""),s&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(l||ct())},children:[s]}),delete N.attributes.title);const T=f(f({},N),{},{prefix:a,iconName:r,main:e,mask:n,maskId:u,transform:i,symbol:o,styles:f(f({},O),d.styles)}),{children:x,attributes:D}=n.found&&e.found?B("generateAbstractMask",T)||{children:[],attributes:{}}:B("generateAbstractIcon",T)||{children:[],attributes:{}};return T.children=x,T.attributes=D,o?sr(T):or(T)}function Te(t){const{content:e,width:n,height:a,transform:r,title:i,extra:o,watchable:s=!1}=t,u=f(f(f({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(u[J]="");const l=f({},o.styles);re(r)&&(l.transform=Da({transform:r,startCentered:!0,width:n,height:a}),l["-webkit-transform"]=l.transform);const d=Et(l);d.length>0&&(u.style=d);const y=[];return y.push({tag:"span",attributes:u,children:[e]}),i&&y.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),y}function cr(t){const{content:e,title:n,extra:a}=t,r=f(f(f({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=Et(a.styles);i.length>0&&(r.style=i);const o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Lt}=$;function Xt(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(xt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(xt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(xt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const lr={found:!1,width:512,height:512};function fr(t,e){!mn&&!p.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Bt(t,e){let n=e;return e==="fa"&&p.styleDefault!==null&&(e=X()),new Promise((a,r)=>{if(n==="fa"){const i=kn(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Lt[e]&&Lt[e][t]){const i=Lt[e][t];return a(Xt(i))}fr(t,e),a(f(f({},lr),{},{icon:p.showMissingIcons&&t?B("missingIconAbstract")||{}:{}}))})}const xe=()=>{},Kt=p.measurePerformance&&ht&&ht.mark&&ht.measure?ht:{mark:xe,measure:xe},it='FA "6.7.2"',ur=t=>(Kt.mark("".concat(it," ").concat(t," begins")),()=>xn(t)),xn=t=>{Kt.mark("".concat(it," ").concat(t," ends")),Kt.measure("".concat(it," ").concat(t),"".concat(it," ").concat(t," begins"),"".concat(it," ").concat(t," ends"))};var ce={begin:ur,end:xn};const pt=()=>{};function Ie(t){return typeof(t.getAttribute?t.getAttribute(J):null)=="string"}function dr(t){const e=t.getAttribute?t.getAttribute(te):null,n=t.getAttribute?t.getAttribute(ee):null;return e&&n}function mr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(p.replacementClass)}function hr(){return p.autoReplaceSvg===!0?vt.replace:vt[p.autoReplaceSvg]||vt.replace}function gr(t){return _.createElementNS("http://www.w3.org/2000/svg",t)}function pr(t){return _.createElement(t)}function In(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?gr:pr}=e;if(typeof t=="string")return _.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(In(i,{ceFn:n}))}),a}function vr(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const vt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(In(n),e)}),e.getAttribute(J)===null&&p.keepOriginalSource){let n=_.createComment(vr(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~ae(e).indexOf(p.replacementClass))return vt.replace(t);const a=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,s)=>(s===p.replacementClass||s.match(a)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>dt(i)).join(`
`);e.setAttribute(J,""),e.innerHTML=r}};function Me(t){t()}function Mn(t,e){const n=typeof e=="function"?e:pt;if(t.length===0)n();else{let a=Me;p.mutateApproach===Aa&&(a=G.requestAnimationFrame||Me),a(()=>{const r=hr(),i=ce.begin("mutate");t.map(r),i(),n()})}}let le=!1;function Ln(){le=!0}function Qt(){le=!1}let yt=null;function Le(t){if(!Ae||!p.observeMutations)return;const{treeCallback:e=pt,nodeCallback:n=pt,pseudoElementsCallback:a=pt,observeMutationsRoot:r=_}=t;yt=new Ae(i=>{if(le)return;const o=X();rt(i).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!Ie(s.addedNodes[0])&&(p.searchPseudoElements&&a(s.target),e(s.target)),s.type==="attributes"&&s.target.parentNode&&p.searchPseudoElements&&a(s.target.parentNode),s.type==="attributes"&&Ie(s.target)&&~Na.indexOf(s.attributeName))if(s.attributeName==="class"&&dr(s.target)){const{prefix:u,iconName:l}=St(ae(s.target));s.target.setAttribute(te,u||o),l&&s.target.setAttribute(ee,l)}else mr(s.target)&&n(s.target)})}),W&&yt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function br(){yt&&yt.disconnect()}function yr(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function Ar(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=St(ae(t));return r.prefix||(r.prefix=X()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Wa(r.prefix,t.innerText)||oe(r.prefix,Ut(t.innerText))),!r.iconName&&p.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Er(t){const e=rt(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return p.autoA11y&&(n?e["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(a||ct()):(e["aria-hidden"]="true",e.focusable="false")),e}function wr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:H,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function De(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Ar(t),i=Er(t),o=qt("parseNodeAttributes",{},t);let s=e.styleParser?yr(t):[];return f({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:H,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:s,attributes:i}},o)}const{styles:Sr}=$;function Dn(t){const e=p.autoReplaceSvg==="nest"?De(t,{styleParser:!1}):De(t);return~e.extra.classes.indexOf(gn)?B("generateLayersText",t,e):B("generateSvgReplacementMutation",t,e)}function Cr(){return[...ra,...Rt]}function Fe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!W)return Promise.resolve();const n=_.documentElement.classList,a=d=>n.add("".concat(Se,"-").concat(d)),r=d=>n.remove("".concat(Se,"-").concat(d)),i=p.autoFetchSvg?Cr():cn.concat(Object.keys(Sr));i.includes("fa")||i.push("fa");const o=[".".concat(gn,":not([").concat(J,"])")].concat(i.map(d=>".".concat(d,":not([").concat(J,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=rt(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();const u=ce.begin("onTree"),l=s.reduce((d,y)=>{try{const E=Dn(y);E&&d.push(E)}catch(E){mn||E.name==="MissingIcon"&&console.error(E)}return d},[]);return new Promise((d,y)=>{Promise.all(l).then(E=>{Mn(E,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),u(),d()})}).catch(E=>{u(),y(E)})})}function _r(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Dn(t).then(n=>{n&&Mn([n],e)})}function Nr(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Gt(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Gt(r||{})),t(a,f(f({},n),{},{mask:r}))}}const Pr=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=H,symbol:a=!1,mask:r=null,maskId:i=null,title:o=null,titleId:s=null,classes:u=[],attributes:l={},styles:d={}}=e;if(!t)return;const{prefix:y,iconName:E,icon:k}=t;return Ct(f({type:"icon"},t),()=>(Z("beforeDOMElementCreation",{iconDefinition:t,params:e}),p.autoA11y&&(o?l["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(s||ct()):(l["aria-hidden"]="true",l.focusable="false")),se({icons:{main:Xt(k),mask:r?Xt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:E,transform:f(f({},H),n),symbol:a,title:o,maskId:i,titleId:s,extra:{attributes:l,styles:d,classes:u}})))};var kr={mixout(){return{icon:Nr(Pr)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Fe,t.nodeCallback=_r,t}}},provides(t){t.i2svg=function(e){const{node:n=_,callback:a=()=>{}}=e;return Fe(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:i,prefix:o,transform:s,symbol:u,mask:l,maskId:d,extra:y}=n;return new Promise((E,k)=>{Promise.all([Bt(a,o),l.iconName?Bt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(L=>{let[I,N]=L;E([e,se({icons:{main:I,mask:N},prefix:o,iconName:a,transform:s,symbol:u,maskId:d,title:r,titleId:i,extra:y,watchable:!0})])}).catch(k)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:i,styles:o}=e;const s=Et(o);s.length>0&&(a.style=s);let u;return re(i)&&(u=B("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(u||r.icon),{children:n,attributes:a}}}},Or={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Ct({type:"layer"},()=>{Z("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Tr={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=e;return Ct({type:"counter",content:t},()=>(Z("beforeDOMElementCreation",{content:t,params:e}),cr({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(p.cssPrefix,"-layers-counter"),...a]}})))}}}},xr={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=H,title:a=null,classes:r=[],attributes:i={},styles:o={}}=e;return Ct({type:"text",content:t},()=>(Z("beforeDOMElementCreation",{content:t,params:e}),Te({content:t,transform:f(f({},H),n),title:a,extra:{attributes:i,styles:o,classes:["".concat(p.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:i}=n;let o=null,s=null;if(on){const u=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();o=l.width/u,s=l.height/u}return p.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Te({content:e.innerHTML,width:o,height:s,transform:r,title:a,extra:i,watchable:!0})])}}};const Ir=new RegExp('"',"ug"),ze=[1105920,1112319],Re=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),ea),ba),ua),Jt=Object.keys(Re).reduce((t,e)=>(t[e.toLowerCase()]=Re[e],t),{}),Mr=Object.keys(Jt).reduce((t,e)=>{const n=Jt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Lr(t){const e=t.replace(Ir,""),n=Ya(e,0),a=n>=ze[0]&&n<=ze[1],r=e.length===2?e[0]===e[1]:!1;return{value:Ut(r?e[0]:e),isSecondary:a||r}}function Dr(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Jt[n]||{})[r]||Mr[n]}function je(t,e){const n="".concat(ya).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const o=rt(t.children).filter(E=>E.getAttribute(Yt)===e)[0],s=G.getComputedStyle(t,e),u=s.getPropertyValue("font-family"),l=u.match(Ca),d=s.getPropertyValue("font-weight"),y=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),a();if(l&&y!=="none"&&y!==""){const E=s.getPropertyValue("content");let k=Dr(u,d);const{value:L,isSecondary:I}=Lr(E),N=l[0].startsWith("FontAwesome");let O=oe(k,L),T=O;if(N){const x=qa(L);x.iconName&&x.prefix&&(O=x.iconName,k=x.prefix)}if(O&&!I&&(!o||o.getAttribute(te)!==k||o.getAttribute(ee)!==T)){t.setAttribute(n,T),o&&t.removeChild(o);const x=wr(),{extra:D}=x;D.attributes[Yt]=e,Bt(O,k).then(z=>{const v=se(f(f({},x),{},{icons:{main:z,mask:On()},prefix:k,iconName:T,extra:D,watchable:!0})),g=_.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(g,t.firstChild):t.appendChild(g),g.outerHTML=v.map(A=>dt(A)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Fr(t){return Promise.all([je(t,"::before"),je(t,"::after")])}function zr(t){return t.parentNode!==document.head&&!~Ea.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Yt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ye(t){if(W)return new Promise((e,n)=>{const a=rt(t.querySelectorAll("*")).filter(zr).map(Fr),r=ce.begin("searchPseudoElements");Ln(),Promise.all(a).then(()=>{r(),Qt(),e()}).catch(()=>{r(),Qt(),n()})})}var Rr={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Ye,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=_}=e;p.searchPseudoElements&&Ye(n)}}};let He=!1;var jr={mixout(){return{dom:{unwatch(){Ln(),He=!0}}}},hooks(){return{bootstrap(){Le(qt("mutationObserverCallbacks",{}))},noAuto(){br()},watch(t){const{observeMutationsRoot:e}=t;He?Qt():Le(qt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const $e=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let o=r.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var Yr={mixout(){return{parse:{transform:t=>$e(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=$e(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:i}=e;const o={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(s," ").concat(u," ").concat(l)},y={transform:"translate(".concat(i/2*-1," -256)")},E={outer:o,inner:d,path:y};return{tag:"g",attributes:f({},E.outer),children:[{tag:"g",attributes:f({},E.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:f(f({},n.icon.attributes),E.path)}]}]}}}};const Dt={x:0,y:0,width:"100%",height:"100%"};function Ve(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Hr(t){return t.tag==="g"?t.children:[t]}var $r={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?St(n.split(" ").map(r=>r.trim())):On();return a.prefix||(a.prefix=X()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:i,maskId:o,transform:s}=e;const{width:u,icon:l}=r,{width:d,icon:y}=i,E=La({transform:s,containerWidth:d,iconWidth:u}),k={tag:"rect",attributes:f(f({},Dt),{},{fill:"white"})},L=l.children?{children:l.children.map(Ve)}:{},I={tag:"g",attributes:f({},E.inner),children:[Ve(f({tag:l.tag,attributes:f(f({},l.attributes),E.path)},L))]},N={tag:"g",attributes:f({},E.outer),children:[I]},O="mask-".concat(o||ct()),T="clip-".concat(o||ct()),x={tag:"mask",attributes:f(f({},Dt),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,N]},D={tag:"defs",children:[{tag:"clipPath",attributes:{id:T},children:Hr(y)},x]};return n.push(D,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(T,")"),mask:"url(#".concat(O,")")},Dt)}),{children:n,attributes:a}}}},Vr={provides(t){let e=!1;G.matchMedia&&(e=G.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:f(f({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=f(f({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:f(f({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:f(f({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:f(f({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:f(f({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:f(f({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Ur={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},Wr=[za,kr,Or,Tr,xr,Rr,jr,Yr,$r,Vr,Ur];er(Wr,{mixoutsTo:j});j.noAuto;j.config;const qr=j.library,Gr=j.dom;j.parse;j.findIconDefinition;j.toHtml;const Xr=j.icon;j.layer;j.text;j.counter;qr.add(We.faBars,qe.faComments,Ge.faGithub,Xe.faInstagram,Be.faLinkedin,Ke.faMagnifyingGlass,Qe.faSquareFacebook,Je.faThreads,Ze.faXTwitter,tn.faXmark,en.faYoutube);Gr.watch();var Fn={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="chevron-right",a=320,r=512,i=[9002],o="f054",s="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z";t.definition={prefix:e,iconName:n,icon:[a,r,i,o,s]},t.faChevronRight=t.definition,t.prefix=e,t.iconName=n,t.width=a,t.height=r,t.ligatures=i,t.unicode=o,t.svgPathData=s,t.aliases=i})(Fn);const Ft={};function Br(t){const e=`${t.prefix}-${t.iconName}`;if(!Ft[e]){const n=Xr(t,{classes:["template-auto-icon"]});Ft[e]=n.node[0]}return Ft[e].cloneNode(!0)}function Kr(t,e){const n=document.createTreeWalker(t,NodeFilter.SHOW_TEXT),a=[];for(;n.nextNode();)a.push(n.currentNode);if(a.length===0)return;const r=a[a.length-1],i=r.parentNode,s=r.nodeValue.lastIndexOf(" "),u=s===-1?r:r.splitText(s),l=document.createElement("span");l.className="text-nowrap template-auto-icon-nowrap",l.appendChild(u),l.appendChild(Br(e)),i.appendChild(l)}function Qr(t){Kr(t,Fn.faChevronRight)}function zn(t,e,n){n instanceof Element&&(n.matches(e)&&t.push(n),t.push.apply(t,n.querySelectorAll(e)))}function Jr(t,e,n){for(let a=0,r=n.length;a<r;a++)zn(t,e,n[a])}function Zr(t,e,n){const a=[],r=function(o){for(let s=0,u=o.length;s<u;s++){const l=o[s];a.indexOf(l)===-1&&(n(o[s]),a.push(l))}};r(document.querySelectorAll(t)),new MutationObserver(function(o){const s=[];for(let u=0,l=o.length;u<l;u++){const d=o[u];d.type==="childList"?Jr(s,t,d.addedNodes):d.type==="attributes"&&zn(s,t,d.target)}r(s)}).observe(document,e)}Zr("h1 a[href]:not(.skip-template-auto-icon), h2 a[href]:not(.skip-template-auto-icon), h3 a[href]:not(.skip-template-auto-icon), h4 a[href]:not(.skip-template-auto-icon), h5 a[href]:not(.skip-template-auto-icon), h6 a[href]:not(.skip-template-auto-icon)",{childList:!0,subtree:!0},Qr);jn(()=>{const t=document.getElementById("toc");if(t){const e=document.createElement("ul");let n=e,a,r;document.querySelectorAll("main h2, main h3").forEach(i=>{if(i.id||(i.id=i.innerText.toLowerCase().replace(/[^a-z0-9 -]/gi,"").replace(/ /gi,"-").substr(0,50)),a)if(i.tagName>a.tagName){const u=document.createElement("ul");r.appendChild(u),n=u}else i.tagName<a.tagName&&(n=n.parentElement.parentElement);const o=document.createElement("a");o.href=`#${i.id}`,o.innerText=i.innerText;const s=document.createElement("li");s.appendChild(o),n.appendChild(s),a=i,r=s}),e.firstChild&&(t.hidden=!1,t.appendChild(e))}});
//# sourceMappingURL=all-BYMPrWtX.js.map

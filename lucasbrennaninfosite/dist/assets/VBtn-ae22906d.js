import{R as Q,r as R,S as et,k as U,A as P,U as ge,B as tt,l as $,V as nt,y as xe,p as _,q as st,E as ie,n as at,W as re,s as z,c as f,X as it,Y as Ve,Z as ee,_ as Ee,m as c,$ as Be,d as T,a0 as rt,a1 as L,a2 as G,a3 as Pe,a4 as he,a5 as ye,u as Y,w as X,v as E,g as Te,e as lt,b as $e,i as ot,a as ut,C as ct,o as dt,a6 as vt,a7 as ft,f as mt,O as te,a8 as gt,a9 as ht,aa as yt,F as bt,x as pt,ab as Ct,ac as be,ad as _t,ae as pe}from"./index-77cb251d.js";import{d as St,m as j,u as N,V as Ce,a as K,b as kt,c as wt}from"./VResponsive-3f337717.js";const It=["top","bottom"],xt=["start","end","left","right"];function Vt(e,n){let[s,t]=e.split(" ");return t||(t=Q(It,s)?"start":Q(xt,s)?"top":"center"),{side:_e(s,n),align:_e(t,n)}}function _e(e,n){return e==="start"?n?"right":"left":e==="end"?n?"left":"right":e}function Et(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const s=R(),t=R();if(et){const i=new ResizeObserver(a=>{e==null||e(a,i),a.length&&(n==="content"?t.value=a[0].contentRect:t.value=a[0].target.getBoundingClientRect())});U(()=>{i.disconnect()}),P(s,(a,r)=>{r&&(i.unobserve(ge(r)),t.value=void 0),a&&i.observe(ge(a))},{flush:"post"})}return{resizeRef:s,contentRect:tt(t)}}const Bt=_({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),J=$(!1)({name:"VDefaultsProvider",props:Bt(),setup(e,n){let{slots:s}=n;const{defaults:t,disabled:i,reset:a,root:r,scoped:l}=nt(e);return xe(t,{reset:a,root:r,scoped:l,disabled:i}),()=>{var u;return(u=s.default)==null?void 0:u.call(s)}}});const Pt=_({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),H=(e,n)=>{let{slots:s}=n;const{transition:t,disabled:i,...a}=e,{component:r=at,...l}=typeof t=="object"?t:{};return st(r,ie(typeof t=="string"?{name:i?"":t}:l,a,{disabled:i}),s)};function Tt(e,n){if(!re)return;const s=n.modifiers||{},t=n.value,{handler:i,options:a}=typeof t=="object"?t:{handler:t,options:{}},r=new IntersectionObserver(function(){var p;let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],u=arguments.length>1?arguments[1]:void 0;const v=(p=e._observe)==null?void 0:p[n.instance.$.uid];if(!v)return;const m=l.some(o=>o.isIntersecting);i&&(!s.quiet||v.init)&&(!s.once||m||v.init)&&i(m,l,u),m&&s.once?Le(e,n):v.init=!0},a);e._observe=Object(e._observe),e._observe[n.instance.$.uid]={init:!1,observer:r},r.observe(e)}function Le(e,n){var t;const s=(t=e._observe)==null?void 0:t[n.instance.$.uid];s&&(s.observer.unobserve(e),delete e._observe[n.instance.$.uid])}const $t={mounted:Tt,unmounted:Le},Lt=$t,zt=_({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...St(),...j(),...Pt()},"VImg"),yn=$()({name:"VImg",directives:{intersect:Lt},props:zt(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,n){let{emit:s,slots:t}=n;const i=z(""),a=R(),r=z(e.eager?"loading":"idle"),l=z(),u=z(),v=f(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),m=f(()=>v.value.aspect||l.value/u.value||0);P(()=>e.src,()=>{p(r.value!=="idle")}),P(m,(g,b)=>{!g&&b&&a.value&&S(a.value)}),it(()=>p());function p(g){if(!(e.eager&&g)&&!(re&&!g&&!e.eager)){if(r.value="loading",v.value.lazySrc){const b=new Image;b.src=v.value.lazySrc,S(b,null)}v.value.src&&Ve(()=>{var b,I;if(s("loadstart",((b=a.value)==null?void 0:b.currentSrc)||v.value.src),(I=a.value)!=null&&I.complete){if(a.value.naturalWidth||d(),r.value==="error")return;m.value||S(a.value,null),o()}else m.value||S(a.value),C()})}}function o(){var g;C(),r.value="loaded",s("load",((g=a.value)==null?void 0:g.currentSrc)||v.value.src)}function d(){var g;r.value="error",s("error",((g=a.value)==null?void 0:g.currentSrc)||v.value.src)}function C(){const g=a.value;g&&(i.value=g.currentSrc||g.src)}let h=-1;function S(g){let b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const I=()=>{clearTimeout(h);const{naturalHeight:F,naturalWidth:A}=g;F||A?(l.value=A,u.value=F):!g.complete&&r.value==="loading"&&b!=null?h=window.setTimeout(I,b):(g.currentSrc.endsWith(".svg")||g.currentSrc.startsWith("data:image/svg+xml"))&&(l.value=1,u.value=1)};I()}const k=f(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),y=()=>{var I;if(!v.value.src||r.value==="idle")return null;const g=c("img",{class:["v-img__img",k.value],src:v.value.src,srcset:v.value.srcset,alt:e.alt,sizes:e.sizes,ref:a,onLoad:o,onError:d},null),b=(I=t.sources)==null?void 0:I.call(t);return c(H,{transition:e.transition,appear:!0},{default:()=>[ee(b?c("picture",{class:"v-img__picture"},[b,g]):g,[[rt,r.value==="loaded"]])]})},w=()=>c(H,{transition:e.transition},{default:()=>[v.value.lazySrc&&r.value!=="loaded"&&c("img",{class:["v-img__img","v-img__img--preload",k.value],src:v.value.lazySrc,alt:e.alt},null)]}),B=()=>t.placeholder?c(H,{transition:e.transition,appear:!0},{default:()=>[(r.value==="loading"||r.value==="error"&&!t.error)&&c("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,V=()=>t.error?c(H,{transition:e.transition,appear:!0},{default:()=>[r.value==="error"&&c("div",{class:"v-img__error"},[t.error()])]}):null,O=()=>e.gradient?c("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,W=z(!1);{const g=P(m,b=>{b&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{W.value=!0})}),g())})}return N(()=>{const[g]=Ce.filterProps(e);return ee(c(Ce,ie({class:["v-img",{"v-img--booting":!W.value},e.class],style:[{width:T(e.width==="auto"?l.value:e.width)},e.style]},g,{aspectRatio:m.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>c(Be,null,[c(y,null,null),c(w,null,null),c(O,null,null),c(B,null,null),c(V,null,null)]),default:t.default}),[[Ee("intersect"),{handler:p,options:e.options},null,{once:!0}]])}),{currentSrc:i,image:a,state:r,naturalWidth:l,naturalHeight:u}}}),ze=_({border:[Boolean,Number,String]},"border");function Re(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();return{borderClasses:f(()=>{const t=G(e)?e.value:e.border,i=[];if(t===!0||t==="")i.push(`${n}--border`);else if(typeof t=="string"||t===0)for(const a of String(t).split(" "))i.push(`border-${a}`);return i})}}function le(e){return Pe(()=>{const n=[],s={};return e.value.background&&(he(e.value.background)?s.backgroundColor=e.value.background:n.push(`bg-${e.value.background}`)),e.value.text&&(he(e.value.text)?(s.color=e.value.text,s.caretColor=e.value.text):n.push(`text-${e.value.text}`)),{colorClasses:n,colorStyles:s}})}function ne(e,n){const s=f(()=>({text:G(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:i}=le(s);return{textColorClasses:t,textColorStyles:i}}function bn(e,n){const s=f(()=>({background:G(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:i}=le(s);return{backgroundColorClasses:t,backgroundColorStyles:i}}const Ne=_({elevation:{type:[Number,String],validator(e){const n=parseInt(e);return!isNaN(n)&&n>=0&&n<=24}}},"elevation");function Oe(e){return{elevationClasses:f(()=>{const s=G(e)?e.value:e.elevation,t=[];return s==null||t.push(`elevation-${s}`),t})}}const Ae=_({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function De(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();return{roundedClasses:f(()=>{const t=G(e)?e.value:e.rounded,i=[];if(t===!0||t==="")i.push(`${n}--rounded`);else if(typeof t=="string"||t===0)for(const a of String(t).split(" "))i.push(`rounded-${a}`);return i})}}const Rt=[null,"default","comfortable","compact"],Me=_({density:{type:String,default:"default",validator:e=>Rt.includes(e)}},"density");function Ge(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();return{densityClasses:f(()=>`${n}--density-${e.density}`)}}const Nt=["elevated","flat","tonal","outlined","text","plain"];function Ot(e,n){return c(Be,null,[e&&c("span",{key:"overlay",class:`${n}__overlay`},null),c("span",{key:"underlay",class:`${n}__underlay`},null)])}const je=_({color:String,variant:{type:String,default:"elevated",validator:e=>Nt.includes(e)}},"variant");function At(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();const s=f(()=>{const{variant:a}=ye(e);return`${n}--variant-${a}`}),{colorClasses:t,colorStyles:i}=le(f(()=>{const{variant:a,color:r}=ye(e);return{[["elevated","flat"].includes(a)?"background":"text"]:r}}));return{colorClasses:t,colorStyles:i,variantClasses:s}}const We=_({divided:Boolean,...ze(),...j(),...Me(),...Ne(),...Ae(),...K(),...Y(),...je()},"VBtnGroup"),Se=$()({name:"VBtnGroup",props:We(),setup(e,n){let{slots:s}=n;const{themeClasses:t}=X(e),{densityClasses:i}=Ge(e),{borderClasses:a}=Re(e),{elevationClasses:r}=Oe(e),{roundedClasses:l}=De(e);xe({VBtn:{height:"auto",color:E(e,"color"),density:E(e,"density"),flat:!0,variant:E(e,"variant")}}),N(()=>c(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},t.value,a.value,i.value,r.value,l.value,e.class],style:e.style},s))}}),Dt=_({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Mt=_({value:null,disabled:Boolean,selectedClass:String},"group-item");function Gt(e,n){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const t=Te("useGroupItem");if(!t)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=lt();$e(Symbol.for(`${n.description}:id`),i);const a=ot(n,null);if(!a){if(!s)return a;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`)}const r=E(e,"value"),l=f(()=>a.disabled.value||e.disabled);a.register({id:i,value:r,disabled:l},t),U(()=>{a.unregister(i)});const u=f(()=>a.isSelected(i)),v=f(()=>u.value&&[a.selectedClass.value,e.selectedClass]);return P(u,m=>{t.emit("group:selected",{value:m})}),{id:i,isSelected:u,toggle:()=>a.select(i,!u.value),select:m=>a.select(i,m),selectedClass:v,value:r,disabled:l,group:a}}function jt(e,n){let s=!1;const t=ut([]),i=ct(e,"modelValue",[],o=>o==null?[]:Fe(t,ft(o)),o=>{const d=Ft(t,o);return e.multiple?d:d[0]}),a=Te("useGroup");function r(o,d){const C=o,h=Symbol.for(`${n.description}:id`),k=mt(h,a==null?void 0:a.vnode).indexOf(d);k>-1?t.splice(k,0,C):t.push(C)}function l(o){if(s)return;u();const d=t.findIndex(C=>C.id===o);t.splice(d,1)}function u(){const o=t.find(d=>!d.disabled);o&&e.mandatory==="force"&&!i.value.length&&(i.value=[o.id])}dt(()=>{u()}),U(()=>{s=!0});function v(o,d){const C=t.find(h=>h.id===o);if(!(d&&(C!=null&&C.disabled)))if(e.multiple){const h=i.value.slice(),S=h.findIndex(y=>y===o),k=~S;if(d=d??!k,k&&e.mandatory&&h.length<=1||!k&&e.max!=null&&h.length+1>e.max)return;S<0&&d?h.push(o):S>=0&&!d&&h.splice(S,1),i.value=h}else{const h=i.value.includes(o);if(e.mandatory&&h)return;i.value=d??!h?[o]:[]}}function m(o){if(e.multiple,i.value.length){const d=i.value[0],C=t.findIndex(k=>k.id===d);let h=(C+o)%t.length,S=t[h];for(;S.disabled&&h!==C;)h=(h+o)%t.length,S=t[h];if(S.disabled)return;i.value=[t[h].id]}else{const d=t.find(C=>!C.disabled);d&&(i.value=[d.id])}}const p={register:r,unregister:l,selected:i,select:v,disabled:E(e,"disabled"),prev:()=>m(t.length-1),next:()=>m(1),isSelected:o=>i.value.includes(o),selectedClass:f(()=>e.selectedClass),items:f(()=>t),getItemIndex:o=>Wt(t,o)};return $e(n,p),p}function Wt(e,n){const s=Fe(e,[n]);return s.length?e.findIndex(t=>t.id===s[0]):-1}function Fe(e,n){const s=[];return n.forEach(t=>{const i=e.find(r=>vt(t,r.value)),a=e[t];(i==null?void 0:i.value)!=null?s.push(i.id):a!=null&&s.push(a.id)}),s}function Ft(e,n){const s=[];return n.forEach(t=>{const i=e.findIndex(a=>a.id===t);if(~i){const a=e[i];s.push(a.value!=null?a.value:i)}}),s}const He=Symbol.for("vuetify:v-btn-toggle"),Ht=_({...We(),...Dt()},"VBtnToggle");$()({name:"VBtnToggle",props:Ht(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:s}=n;const{isSelected:t,next:i,prev:a,select:r,selected:l}=jt(e,He);return N(()=>{const[u]=Se.filterProps(e);return c(Se,ie({class:["v-btn-toggle",e.class]},u,{style:e.style}),{default:()=>{var v;return[(v=s.default)==null?void 0:v.call(s,{isSelected:t,next:i,prev:a,select:r,selected:l})]}})}),{next:i,prev:a,select:r}}});const qt=["x-small","small","default","large","x-large"],oe=_({size:{type:[String,Number],default:"default"}},"size");function ue(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();return Pe(()=>{let s,t;return Q(qt,e.size)?s=`${n}--size-${e.size}`:e.size&&(t={width:T(e.size),height:T(e.size)}),{sizeClasses:s,sizeStyles:t}})}const Ut=_({color:String,start:Boolean,end:Boolean,icon:te,...j(),...oe(),...K({tag:"i"}),...Y()},"VIcon"),Z=$()({name:"VIcon",props:Ut(),setup(e,n){let{attrs:s,slots:t}=n;const i=R(),{themeClasses:a}=X(e),{iconData:r}=gt(f(()=>i.value||e.icon)),{sizeClasses:l}=ue(e),{textColorClasses:u,textColorStyles:v}=ne(E(e,"color"));return N(()=>{var p,o;const m=(p=t.default)==null?void 0:p.call(t);return m&&(i.value=(o=ht(m).filter(d=>d.type===yt&&d.children&&typeof d.children=="string")[0])==null?void 0:o.children),c(r.value.component,{tag:e.tag,icon:r.value.icon,class:["v-icon","notranslate",a.value,l.value,u.value,{"v-icon--clickable":!!s.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[l.value?void 0:{fontSize:T(e.size),height:T(e.size),width:T(e.size)},v.value,e.style],role:s.onClick?"button":void 0,"aria-hidden":!s.onClick},{default:()=>[m]})}),{}}});function Yt(e,n){const s=R(),t=z(!1);if(re){const i=new IntersectionObserver(a=>{e==null||e(a,i),t.value=!!a.find(r=>r.isIntersecting)},n);U(()=>{i.disconnect()}),P(s,(a,r)=>{r&&(i.unobserve(r),t.value=!1),a&&i.observe(a)},{flush:"post"})}return{intersectionRef:s,isIntersecting:t}}const Xt=_({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...j(),...oe(),...K({tag:"div"}),...Y()},"VProgressCircular"),Kt=$()({name:"VProgressCircular",props:Xt(),setup(e,n){let{slots:s}=n;const t=20,i=2*Math.PI*t,a=R(),{themeClasses:r}=X(e),{sizeClasses:l,sizeStyles:u}=ue(e),{textColorClasses:v,textColorStyles:m}=ne(E(e,"color")),{textColorClasses:p,textColorStyles:o}=ne(E(e,"bgColor")),{intersectionRef:d,isIntersecting:C}=Yt(),{resizeRef:h,contentRect:S}=Et(),k=f(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),y=f(()=>Number(e.width)),w=f(()=>u.value?Number(e.size):S.value?S.value.width:Math.max(y.value,32)),B=f(()=>t/(1-y.value/w.value)*2),V=f(()=>y.value/w.value*B.value),O=f(()=>T((100-k.value)/100*i));return bt(()=>{d.value=a.value,h.value=a.value}),N(()=>c(e.tag,{ref:a,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":C.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},r.value,l.value,v.value,e.class],style:[u.value,m.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:k.value},{default:()=>[c("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${B.value} ${B.value}`},[c("circle",{class:["v-progress-circular__underlay",p.value],style:o.value,fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":V.value,"stroke-dasharray":i,"stroke-dashoffset":0},null),c("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":V.value,"stroke-dasharray":i,"stroke-dashoffset":O.value},null)]),s.default&&c("div",{class:"v-progress-circular__content"},[s.default({value:k.value})])]})),{}}}),ke={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Jt=_({location:String},"location");function Zt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=arguments.length>2?arguments[2]:void 0;const{isRtl:t}=pt();return{locationStyles:f(()=>{if(!e.location)return{};const{side:a,align:r}=Vt(e.location.split(" ").length>1?e.location:`${e.location} center`,t.value);function l(v){return s?s(v):0}const u={};return a!=="center"&&(n?u[ke[a]]=`calc(100% - ${l(a)}px)`:u[a]=0),r!=="center"?n?u[ke[r]]=`calc(100% - ${l(r)}px)`:u[r]=0:(a==="center"?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[a]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[a]),u})}}const Qt=_({loading:[Boolean,String]},"loader");function en(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();return{loaderClasses:f(()=>({[`${n}--loading`]:e.loading}))}}const tn=["static","relative","fixed","absolute","sticky"],nn=_({position:{type:String,validator:e=>tn.includes(e)}},"position");function sn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();return{positionClasses:f(()=>e.position?`${n}--${e.position}`:void 0)}}function an(e,n){const s=Ct("RouterLink"),t=f(()=>!!(e.href||e.to)),i=f(()=>(t==null?void 0:t.value)||be(n,"click")||be(e,"click"));if(typeof s=="string")return{isLink:t,isClickable:i,href:E(e,"href")};const a=e.to?s.useLink(e):void 0;return{isLink:t,isClickable:i,route:a==null?void 0:a.route,navigate:a==null?void 0:a.navigate,isActive:a&&f(()=>{var r,l;return e.exact?(r=a.isExactActive)==null?void 0:r.value:(l=a.isActive)==null?void 0:l.value}),href:f(()=>e.to?a==null?void 0:a.route.value.href:e.href)}}const rn=_({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function ln(e,n){P(()=>{var s;return(s=e.isActive)==null?void 0:s.value},s=>{e.isLink.value&&s&&n&&Ve(()=>{n(!0)})},{immediate:!0})}const se=Symbol("rippleStop"),on=80;function we(e,n){e.style.transform=n,e.style.webkitTransform=n}function ae(e){return e.constructor.name==="TouchEvent"}function qe(e){return e.constructor.name==="KeyboardEvent"}const un=function(e,n){var p;let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=0,i=0;if(!qe(e)){const o=n.getBoundingClientRect(),d=ae(e)?e.touches[e.touches.length-1]:e;t=d.clientX-o.left,i=d.clientY-o.top}let a=0,r=.3;(p=n._ripple)!=null&&p.circle?(r=.15,a=n.clientWidth/2,a=s.center?a:a+Math.sqrt((t-a)**2+(i-a)**2)/4):a=Math.sqrt(n.clientWidth**2+n.clientHeight**2)/2;const l=`${(n.clientWidth-a*2)/2}px`,u=`${(n.clientHeight-a*2)/2}px`,v=s.center?l:`${t-a}px`,m=s.center?u:`${i-a}px`;return{radius:a,scale:r,x:v,y:m,centerX:l,centerY:u}},q={show(e,n){var d;let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((d=n==null?void 0:n._ripple)!=null&&d.enabled))return;const t=document.createElement("span"),i=document.createElement("span");t.appendChild(i),t.className="v-ripple__container",s.class&&(t.className+=` ${s.class}`);const{radius:a,scale:r,x:l,y:u,centerX:v,centerY:m}=un(e,n,s),p=`${a*2}px`;i.className="v-ripple__animation",i.style.width=p,i.style.height=p,n.appendChild(t);const o=window.getComputedStyle(n);o&&o.position==="static"&&(n.style.position="relative",n.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),we(i,`translate(${l}, ${u}) scale3d(${r},${r},${r})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),we(i,`translate(${v}, ${m}) scale3d(1,1,1)`)},0)},hide(e){var a;if(!((a=e==null?void 0:e._ripple)!=null&&a.enabled))return;const n=e.getElementsByClassName("v-ripple__animation");if(n.length===0)return;const s=n[n.length-1];if(s.dataset.isHiding)return;s.dataset.isHiding="true";const t=performance.now()-Number(s.dataset.activated),i=Math.max(250-t,0);setTimeout(()=>{s.classList.remove("v-ripple__animation--in"),s.classList.add("v-ripple__animation--out"),setTimeout(()=>{var l;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((l=s.parentNode)==null?void 0:l.parentNode)===e&&e.removeChild(s.parentNode)},300)},i)}};function Ue(e){return typeof e>"u"||!!e}function D(e){const n={},s=e.currentTarget;if(!(!(s!=null&&s._ripple)||s._ripple.touched||e[se])){if(e[se]=!0,ae(e))s._ripple.touched=!0,s._ripple.isTouch=!0;else if(s._ripple.isTouch)return;if(n.center=s._ripple.centered||qe(e),s._ripple.class&&(n.class=s._ripple.class),ae(e)){if(s._ripple.showTimerCommit)return;s._ripple.showTimerCommit=()=>{q.show(e,s,n)},s._ripple.showTimer=window.setTimeout(()=>{var t;(t=s==null?void 0:s._ripple)!=null&&t.showTimerCommit&&(s._ripple.showTimerCommit(),s._ripple.showTimerCommit=null)},on)}else q.show(e,s,n)}}function Ie(e){e[se]=!0}function x(e){const n=e.currentTarget;if(n!=null&&n._ripple){if(window.clearTimeout(n._ripple.showTimer),e.type==="touchend"&&n._ripple.showTimerCommit){n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null,n._ripple.showTimer=window.setTimeout(()=>{x(e)});return}window.setTimeout(()=>{n._ripple&&(n._ripple.touched=!1)}),q.hide(n)}}function Ye(e){const n=e.currentTarget;n!=null&&n._ripple&&(n._ripple.showTimerCommit&&(n._ripple.showTimerCommit=null),window.clearTimeout(n._ripple.showTimer))}let M=!1;function Xe(e){!M&&(e.keyCode===pe.enter||e.keyCode===pe.space)&&(M=!0,D(e))}function Ke(e){M=!1,x(e)}function Je(e){M&&(M=!1,x(e))}function Ze(e,n,s){const{value:t,modifiers:i}=n,a=Ue(t);if(a||q.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=a,e._ripple.centered=i.center,e._ripple.circle=i.circle,_t(t)&&t.class&&(e._ripple.class=t.class),a&&!s){if(i.stop){e.addEventListener("touchstart",Ie,{passive:!0}),e.addEventListener("mousedown",Ie);return}e.addEventListener("touchstart",D,{passive:!0}),e.addEventListener("touchend",x,{passive:!0}),e.addEventListener("touchmove",Ye,{passive:!0}),e.addEventListener("touchcancel",x),e.addEventListener("mousedown",D),e.addEventListener("mouseup",x),e.addEventListener("mouseleave",x),e.addEventListener("keydown",Xe),e.addEventListener("keyup",Ke),e.addEventListener("blur",Je),e.addEventListener("dragstart",x,{passive:!0})}else!a&&s&&Qe(e)}function Qe(e){e.removeEventListener("mousedown",D),e.removeEventListener("touchstart",D),e.removeEventListener("touchend",x),e.removeEventListener("touchmove",Ye),e.removeEventListener("touchcancel",x),e.removeEventListener("mouseup",x),e.removeEventListener("mouseleave",x),e.removeEventListener("keydown",Xe),e.removeEventListener("keyup",Ke),e.removeEventListener("dragstart",x),e.removeEventListener("blur",Je)}function cn(e,n){Ze(e,n,!1)}function dn(e){delete e._ripple,Qe(e)}function vn(e,n){if(n.value===n.oldValue)return;const s=Ue(n.oldValue);Ze(e,n,s)}const fn={mounted:cn,unmounted:dn,updated:vn},mn=_({active:{type:Boolean,default:void 0},symbol:{type:null,default:He},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:te,appendIcon:te,block:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...ze(),...j(),...Me(),...kt(),...Ne(),...Mt(),...Qt(),...Jt(),...nn(),...Ae(),...rn(),...oe(),...K({tag:"button"}),...Y(),...je({variant:"elevated"})},"VBtn"),pn=$()({name:"VBtn",directives:{Ripple:fn},props:mn(),emits:{"group:selected":e=>!0},setup(e,n){let{attrs:s,slots:t}=n;const{themeClasses:i}=X(e),{borderClasses:a}=Re(e),{colorClasses:r,colorStyles:l,variantClasses:u}=At(e),{densityClasses:v}=Ge(e),{dimensionStyles:m}=wt(e),{elevationClasses:p}=Oe(e),{loaderClasses:o}=en(e),{locationStyles:d}=Zt(e),{positionClasses:C}=sn(e),{roundedClasses:h}=De(e),{sizeClasses:S,sizeStyles:k}=ue(e),y=Gt(e,e.symbol,!1),w=an(e,s),B=f(()=>{var b;return e.active!==void 0?e.active:w.isLink.value?(b=w.isActive)==null?void 0:b.value:y==null?void 0:y.isSelected.value}),V=f(()=>(y==null?void 0:y.disabled.value)||e.disabled),O=f(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),W=f(()=>{if(e.value!==void 0)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function g(b){var I;V.value||w.isLink.value&&(b.metaKey||b.ctrlKey||b.shiftKey||b.button!==0||s.target==="_blank")||((I=w.navigate)==null||I.call(w,b),y==null||y.toggle())}return ln(w,y==null?void 0:y.select),N(()=>{var de,ve;const b=w.isLink.value?"a":e.tag,I=!!(e.prependIcon||t.prepend),F=!!(e.appendIcon||t.append),A=!!(e.icon&&e.icon!==!0),ce=(y==null?void 0:y.isSelected.value)&&(!w.isLink.value||((de=w.isActive)==null?void 0:de.value))||!y||((ve=w.isActive)==null?void 0:ve.value);return ee(c(b,{type:b==="a"?void 0:"button",class:["v-btn",y==null?void 0:y.selectedClass.value,{"v-btn--active":B.value,"v-btn--block":e.block,"v-btn--disabled":V.value,"v-btn--elevated":O.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},i.value,a.value,ce?r.value:void 0,v.value,p.value,o.value,C.value,h.value,S.value,u.value,e.class],style:[ce?l.value:void 0,m.value,d.value,k.value,e.style],disabled:V.value||void 0,href:w.href.value,onClick:g,value:W.value},{default:()=>{var fe;return[Ot(!0,"v-btn"),!e.icon&&I&&c("span",{key:"prepend",class:"v-btn__prepend"},[t.prepend?c(J,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},t.prepend):c(Z,{key:"prepend-icon",icon:e.prependIcon},null)]),c("span",{class:"v-btn__content","data-no-activator":""},[!t.default&&A?c(Z,{key:"content-icon",icon:e.icon},null):c(J,{key:"content-defaults",disabled:!A,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var me;return[((me=t.default)==null?void 0:me.call(t))??e.text]}})]),!e.icon&&F&&c("span",{key:"append",class:"v-btn__append"},[t.append?c(J,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},t.append):c(Z,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&c("span",{key:"loader",class:"v-btn__loader"},[((fe=t.loader)==null?void 0:fe.call(t))??c(Kt,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[Ee("ripple"),!V.value&&e.ripple,null]])}),{}}});export{yn as V,Ne as a,Ae as b,bn as c,Re as d,Oe as e,De as f,J as g,pn as h,Me as i,oe as j,je as k,At as l,ze as m,Ge as n,ue as o,Z as p,Ot as q,Et as u};

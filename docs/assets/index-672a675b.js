(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();function zn(t,n){const s=Object.create(null),l=t.split(",");for(let o=0;o<l.length;o++)s[l[o]]=!0;return n?o=>!!s[o.toLowerCase()]:o=>!!s[o]}function nt(t){if(ie(t)){const n={};for(let s=0;s<t.length;s++){const l=t[s],o=qe(l)?ch(l):nt(l);if(o)for(const r in o)n[r]=o[r]}return n}else{if(qe(t))return t;if(Me(t))return t}}const rh=/;(?![^(]*\))/g,ah=/:([^]+)/,ih=/\/\*.*?\*\//gs;function ch(t){const n={};return t.replace(ih,"").split(rh).forEach(s=>{if(s){const l=s.split(ah);l.length>1&&(n[l[0].trim()]=l[1].trim())}}),n}function Je(t){let n="";if(qe(t))n=t;else if(ie(t))for(let s=0;s<t.length;s++){const l=Je(t[s]);l&&(n+=l+" ")}else if(Me(t))for(const s in t)t[s]&&(n+=s+" ");return n.trim()}function re(t){if(!t)return null;let{class:n,style:s}=t;return n&&!qe(n)&&(t.class=Je(n)),s&&(t.style=nt(s)),t}const ph="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",uh="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Au=zn(ph),dh=zn(uh),fh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yh=zn(fh);function wu(t){return!!t||t===""}const jn=t=>qe(t)?t:t==null?"":ie(t)||Me(t)&&(t.toString===Eu||!de(t.toString))?JSON.stringify(t,Bu,2):String(t),Bu=(t,n)=>n&&n.__v_isRef?Bu(t,n.value):as(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((s,[l,o])=>(s[`${l} =>`]=o,s),{})}:xu(n)?{[`Set(${n.size})`]:[...n.values()]}:Me(n)&&!ie(n)&&!ku(n)?String(n):n,je=Object.freeze({}),Os=Object.freeze([]),_t=()=>{},Cu=()=>!1,hh=/^on[^a-z]/,Wl=t=>hh.test(t),Do=t=>t.startsWith("onUpdate:"),ze=Object.assign,Qa=(t,n)=>{const s=t.indexOf(n);s>-1&&t.splice(s,1)},mh=Object.prototype.hasOwnProperty,Ce=(t,n)=>mh.call(t,n),ie=Array.isArray,as=t=>zl(t)==="[object Map]",xu=t=>zl(t)==="[object Set]",gh=t=>zl(t)==="[object RegExp]",de=t=>typeof t=="function",qe=t=>typeof t=="string",ei=t=>typeof t=="symbol",Me=t=>t!==null&&typeof t=="object",ti=t=>Me(t)&&de(t.then)&&de(t.catch),Eu=Object.prototype.toString,zl=t=>Eu.call(t),ni=t=>zl(t).slice(8,-1),ku=t=>zl(t)==="[object Object]",si=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,vo=zn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vh=zn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Yo=t=>{const n=Object.create(null);return s=>n[s]||(n[s]=t(s))},_h=/-(\w)/g,nn=Yo(t=>t.replace(_h,(n,s)=>s?s.toUpperCase():"")),bh=/\B([A-Z])/g,hn=Yo(t=>t.replace(bh,"-$1").toLowerCase()),hs=Yo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Xn=Yo(t=>t?`on${hs(t)}`:""),xl=(t,n)=>!Object.is(t,n),Sn=(t,n)=>{for(let s=0;s<t.length;s++)t[s](n)},So=(t,n,s)=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value:s})},ta=t=>{const n=parseFloat(t);return isNaN(n)?t:n},Ah=t=>{const n=qe(t)?Number(t):NaN;return isNaN(n)?t:n};let oc;const Du=()=>oc||(oc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fo(t,...n){console.warn(`[Vue warn] ${t}`,...n)}let kt;class Su{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=kt,!n&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const s=kt;try{return kt=this,n()}finally{kt=s}}else Fo("cannot run an inactive effect scope.")}on(){kt=this}off(){kt=this.parent}stop(n){if(this._active){let s,l;for(s=0,l=this.effects.length;s<l;s++)this.effects[s].stop();for(s=0,l=this.cleanups.length;s<l;s++)this.cleanups[s]();if(this.scopes)for(s=0,l=this.scopes.length;s<l;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!n){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function wh(t){return new Su(t)}function Bh(t,n=kt){n&&n.active&&n.effects.push(t)}function li(){return kt}function Fu(t){kt?kt.cleanups.push(t):Fo("onScopeDispose() is called when there is no active effect scope to be associated with.")}const oi=t=>{const n=new Set(t);return n.w=0,n.n=0,n},$u=t=>(t.w&Vn)>0,Pu=t=>(t.n&Vn)>0,Ch=({deps:t})=>{if(t.length)for(let n=0;n<t.length;n++)t[n].w|=Vn},xh=t=>{const{deps:n}=t;if(n.length){let s=0;for(let l=0;l<n.length;l++){const o=n[l];$u(o)&&!Pu(o)?o.delete(t):n[s++]=o,o.w&=~Vn,o.n&=~Vn}n.length=s}},$o=new WeakMap;let al=0,Vn=1;const na=30;let yt;const is=Symbol("iterate"),sa=Symbol("Map key iterate");class ri{constructor(n,s=null,l){this.fn=n,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,Bh(this,l)}run(){if(!this.active)return this.fn();let n=yt,s=On;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=yt,yt=this,On=!0,Vn=1<<++al,al<=na?Ch(this):rc(this),this.fn()}finally{al<=na&&xh(this),Vn=1<<--al,yt=this.parent,On=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){yt===this?this.deferStop=!0:this.active&&(rc(this),this.onStop&&this.onStop(),this.active=!1)}}function rc(t){const{deps:n}=t;if(n.length){for(let s=0;s<n.length;s++)n[s].delete(t);n.length=0}}let On=!0;const Ou=[];function gs(){Ou.push(On),On=!1}function vs(){const t=Ou.pop();On=t===void 0?!0:t}function At(t,n,s){if(On&&yt){let l=$o.get(t);l||$o.set(t,l=new Map);let o=l.get(s);o||l.set(s,o=oi()),Tu(o,{effect:yt,target:t,type:n,key:s})}}function Tu(t,n){let s=!1;al<=na?Pu(t)||(t.n|=Vn,s=!$u(t)):s=!t.has(yt),s&&(t.add(yt),yt.deps.push(t),yt.onTrack&&yt.onTrack(Object.assign({effect:yt},n)))}function mn(t,n,s,l,o,r){const a=$o.get(t);if(!a)return;let i=[];if(n==="clear")i=[...a.values()];else if(s==="length"&&ie(t)){const p=Number(l);a.forEach((u,d)=>{(d==="length"||d>=p)&&i.push(u)})}else switch(s!==void 0&&i.push(a.get(s)),n){case"add":ie(t)?si(s)&&i.push(a.get("length")):(i.push(a.get(is)),as(t)&&i.push(a.get(sa)));break;case"delete":ie(t)||(i.push(a.get(is)),as(t)&&i.push(a.get(sa)));break;case"set":as(t)&&i.push(a.get(is));break}const c={target:t,type:n,key:s,newValue:l,oldValue:o,oldTarget:r};if(i.length===1)i[0]&&la(i[0],c);else{const p=[];for(const u of i)u&&p.push(...u);la(oi(p),c)}}function la(t,n){const s=ie(t)?t:[...t];for(const l of s)l.computed&&ac(l,n);for(const l of s)l.computed||ac(l,n)}function ac(t,n){(t!==yt||t.allowRecurse)&&(t.onTrigger&&t.onTrigger(ze({effect:t},n)),t.scheduler?t.scheduler():t.run())}function Eh(t,n){var s;return(s=$o.get(t))===null||s===void 0?void 0:s.get(n)}const kh=zn("__proto__,__v_isRef,__isVue"),Lu=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ei)),Dh=Zo(),Sh=Zo(!1,!0),Fh=Zo(!0),$h=Zo(!0,!0),ic=Ph();function Ph(){const t={};return["includes","indexOf","lastIndexOf"].forEach(n=>{t[n]=function(...s){const l=fe(this);for(let r=0,a=this.length;r<a;r++)At(l,"get",r+"");const o=l[n](...s);return o===-1||o===!1?l[n](...s.map(fe)):o}}),["push","pop","shift","unshift","splice"].forEach(n=>{t[n]=function(...s){gs();const l=fe(this)[n].apply(this,s);return vs(),l}}),t}function Oh(t){const n=fe(this);return At(n,"has",t),n.hasOwnProperty(t)}function Zo(t=!1,n=!1){return function(l,o,r){if(o==="__v_isReactive")return!t;if(o==="__v_isReadonly")return t;if(o==="__v_isShallow")return n;if(o==="__v_raw"&&r===(t?n?qu:Hu:n?Vu:ju).get(l))return l;const a=ie(l);if(!t){if(a&&Ce(ic,o))return Reflect.get(ic,o,r);if(o==="hasOwnProperty")return Oh}const i=Reflect.get(l,o,r);return(ei(o)?Lu.has(o):kh(o))||(t||At(l,"get",o),n)?i:Oe(i)?a&&si(o)?i:i.value:Me(i)?t?Qt(i):We(i):i}}const Th=Iu(),Lh=Iu(!0);function Iu(t=!1){return function(s,l,o,r){let a=s[l];if(Hn(a)&&Oe(a)&&!Oe(o))return!1;if(!t&&(!Po(o)&&!Hn(o)&&(a=fe(a),o=fe(o)),!ie(s)&&Oe(a)&&!Oe(o)))return a.value=o,!0;const i=ie(s)&&si(l)?Number(l)<s.length:Ce(s,l),c=Reflect.set(s,l,o,r);return s===fe(r)&&(i?xl(o,a)&&mn(s,"set",l,o,a):mn(s,"add",l,o)),c}}function Ih(t,n){const s=Ce(t,n),l=t[n],o=Reflect.deleteProperty(t,n);return o&&s&&mn(t,"delete",n,void 0,l),o}function Mh(t,n){const s=Reflect.has(t,n);return(!ei(n)||!Lu.has(n))&&At(t,"has",n),s}function Nh(t){return At(t,"iterate",ie(t)?"length":is),Reflect.ownKeys(t)}const Mu={get:Dh,set:Th,deleteProperty:Ih,has:Mh,ownKeys:Nh},Nu={get:Fh,set(t,n){return Fo(`Set operation on key "${String(n)}" failed: target is readonly.`,t),!0},deleteProperty(t,n){return Fo(`Delete operation on key "${String(n)}" failed: target is readonly.`,t),!0}},Rh=ze({},Mu,{get:Sh,set:Lh}),jh=ze({},Nu,{get:$h}),ai=t=>t,Xo=t=>Reflect.getPrototypeOf(t);function lo(t,n,s=!1,l=!1){t=t.__v_raw;const o=fe(t),r=fe(n);s||(n!==r&&At(o,"get",n),At(o,"get",r));const{has:a}=Xo(o),i=l?ai:s?ii:El;if(a.call(o,n))return i(t.get(n));if(a.call(o,r))return i(t.get(r));t!==o&&t.get(n)}function oo(t,n=!1){const s=this.__v_raw,l=fe(s),o=fe(t);return n||(t!==o&&At(l,"has",t),At(l,"has",o)),t===o?s.has(t):s.has(t)||s.has(o)}function ro(t,n=!1){return t=t.__v_raw,!n&&At(fe(t),"iterate",is),Reflect.get(t,"size",t)}function cc(t){t=fe(t);const n=fe(this);return Xo(n).has.call(n,t)||(n.add(t),mn(n,"add",t,t)),this}function pc(t,n){n=fe(n);const s=fe(this),{has:l,get:o}=Xo(s);let r=l.call(s,t);r?Ru(s,l,t):(t=fe(t),r=l.call(s,t));const a=o.call(s,t);return s.set(t,n),r?xl(n,a)&&mn(s,"set",t,n,a):mn(s,"add",t,n),this}function uc(t){const n=fe(this),{has:s,get:l}=Xo(n);let o=s.call(n,t);o?Ru(n,s,t):(t=fe(t),o=s.call(n,t));const r=l?l.call(n,t):void 0,a=n.delete(t);return o&&mn(n,"delete",t,void 0,r),a}function dc(){const t=fe(this),n=t.size!==0,s=as(t)?new Map(t):new Set(t),l=t.clear();return n&&mn(t,"clear",void 0,void 0,s),l}function ao(t,n){return function(l,o){const r=this,a=r.__v_raw,i=fe(a),c=n?ai:t?ii:El;return!t&&At(i,"iterate",is),a.forEach((p,u)=>l.call(o,c(p),c(u),r))}}function io(t,n,s){return function(...l){const o=this.__v_raw,r=fe(o),a=as(r),i=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,p=o[t](...l),u=s?ai:n?ii:El;return!n&&At(r,"iterate",c?sa:is),{next(){const{value:d,done:y}=p.next();return y?{value:d,done:y}:{value:i?[u(d[0]),u(d[1])]:u(d),done:y}},[Symbol.iterator](){return this}}}}function wn(t){return function(...n){{const s=n[0]?`on key "${n[0]}" `:"";console.warn(`${hs(t)} operation ${s}failed: target is readonly.`,fe(this))}return t==="delete"?!1:this}}function Vh(){const t={get(r){return lo(this,r)},get size(){return ro(this)},has:oo,add:cc,set:pc,delete:uc,clear:dc,forEach:ao(!1,!1)},n={get(r){return lo(this,r,!1,!0)},get size(){return ro(this)},has:oo,add:cc,set:pc,delete:uc,clear:dc,forEach:ao(!1,!0)},s={get(r){return lo(this,r,!0)},get size(){return ro(this,!0)},has(r){return oo.call(this,r,!0)},add:wn("add"),set:wn("set"),delete:wn("delete"),clear:wn("clear"),forEach:ao(!0,!1)},l={get(r){return lo(this,r,!0,!0)},get size(){return ro(this,!0)},has(r){return oo.call(this,r,!0)},add:wn("add"),set:wn("set"),delete:wn("delete"),clear:wn("clear"),forEach:ao(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=io(r,!1,!1),s[r]=io(r,!0,!1),n[r]=io(r,!1,!0),l[r]=io(r,!0,!0)}),[t,s,n,l]}const[Hh,qh,Wh,zh]=Vh();function Qo(t,n){const s=n?t?zh:Wh:t?qh:Hh;return(l,o,r)=>o==="__v_isReactive"?!t:o==="__v_isReadonly"?t:o==="__v_raw"?l:Reflect.get(Ce(s,o)&&o in l?s:l,o,r)}const Uh={get:Qo(!1,!1)},Gh={get:Qo(!1,!0)},Kh={get:Qo(!0,!1)},Jh={get:Qo(!0,!0)};function Ru(t,n,s){const l=fe(s);if(l!==s&&n.call(t,l)){const o=ni(t);console.warn(`Reactive ${o} contains both the raw and reactive versions of the same object${o==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const ju=new WeakMap,Vu=new WeakMap,Hu=new WeakMap,qu=new WeakMap;function Yh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zh(t){return t.__v_skip||!Object.isExtensible(t)?0:Yh(ni(t))}function We(t){return Hn(t)?t:er(t,!1,Mu,Uh,ju)}function Xh(t){return er(t,!1,Rh,Gh,Vu)}function Qt(t){return er(t,!0,Nu,Kh,Hu)}function $s(t){return er(t,!0,jh,Jh,qu)}function er(t,n,s,l,o){if(!Me(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&!(n&&t.__v_isReactive))return t;const r=o.get(t);if(r)return r;const a=Zh(t);if(a===0)return t;const i=new Proxy(t,a===2?l:s);return o.set(t,i),i}function cs(t){return Hn(t)?cs(t.__v_raw):!!(t&&t.__v_isReactive)}function Hn(t){return!!(t&&t.__v_isReadonly)}function Po(t){return!!(t&&t.__v_isShallow)}function Oo(t){return cs(t)||Hn(t)}function fe(t){const n=t&&t.__v_raw;return n?fe(n):t}function tr(t){return So(t,"__v_skip",!0),t}const El=t=>Me(t)?We(t):t,ii=t=>Me(t)?Qt(t):t;function ci(t){On&&yt&&(t=fe(t),Tu(t.dep||(t.dep=oi()),{target:t,type:"get",key:"value"}))}function pi(t,n){t=fe(t);const s=t.dep;s&&la(s,{target:t,type:"set",key:"value",newValue:n})}function Oe(t){return!!(t&&t.__v_isRef===!0)}function K(t){return Wu(t,!1)}function sn(t){return Wu(t,!0)}function Wu(t,n){return Oe(t)?t:new Qh(t,n)}class Qh{constructor(n,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?n:fe(n),this._value=s?n:El(n)}get value(){return ci(this),this._value}set value(n){const s=this.__v_isShallow||Po(n)||Hn(n);n=s?n:fe(n),xl(n,this._rawValue)&&(this._rawValue=n,this._value=s?n:El(n),pi(this,n))}}function x(t){return Oe(t)?t.value:t}const em={get:(t,n,s)=>x(Reflect.get(t,n,s)),set:(t,n,s,l)=>{const o=t[n];return Oe(o)&&!Oe(s)?(o.value=s,!0):Reflect.set(t,n,s,l)}};function zu(t){return cs(t)?t:new Proxy(t,em)}class tm{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:l}=n(()=>ci(this),()=>pi(this));this._get=s,this._set=l}get value(){return this._get()}set value(n){this._set(n)}}function Uu(t){return new tm(t)}function nm(t){Oo(t)||console.warn("toRefs() expects a reactive object but received a plain one.");const n=ie(t)?new Array(t.length):{};for(const s in t)n[s]=lm(t,s);return n}class sm{constructor(n,s,l){this._object=n,this._key=s,this._defaultValue=l,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return Eh(fe(this._object),this._key)}}function lm(t,n,s){const l=t[n];return Oe(l)?l:new sm(t,n,s)}var Gu;class om{constructor(n,s,l,o){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this[Gu]=!1,this._dirty=!0,this.effect=new ri(n,()=>{this._dirty||(this._dirty=!0,pi(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=l}get value(){const n=fe(this);return ci(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}Gu="__v_isReadonly";function rm(t,n,s=!1){let l,o;const r=de(t);r?(l=t,o=()=>{console.warn("Write operation failed: computed value is readonly")}):(l=t.get,o=t.set);const a=new om(l,o,r||!o,s);return n&&!s&&(a.effect.onTrack=n.onTrack,a.effect.onTrigger=n.onTrigger),a}const ps=[];function _o(t){ps.push(t)}function bo(){ps.pop()}function N(t,...n){gs();const s=ps.length?ps[ps.length-1].component:null,l=s&&s.appContext.config.warnHandler,o=am();if(l)yn(l,s,11,[t+n.join(""),s&&s.proxy,o.map(({vnode:r})=>`at <${dr(s,r.type)}>`).join(`
`),o]);else{const r=[`[Vue warn]: ${t}`,...n];o.length&&r.push(`
`,...im(o)),console.warn(...r)}vs()}function am(){let t=ps[ps.length-1];if(!t)return[];const n=[];for(;t;){const s=n[0];s&&s.vnode===t?s.recurseCount++:n.push({vnode:t,recurseCount:0});const l=t.component&&t.component.parent;t=l&&l.vnode}return n}function im(t){const n=[];return t.forEach((s,l)=>{n.push(...l===0?[]:[`
`],...cm(s))}),n}function cm({vnode:t,recurseCount:n}){const s=n>0?`... (${n} recursive calls)`:"",l=t.component?t.component.parent==null:!1,o=` at <${dr(t.component,t.type,l)}`,r=">"+s;return t.props?[o,...pm(t.props),r]:[o+r]}function pm(t){const n=[],s=Object.keys(t);return s.slice(0,3).forEach(l=>{n.push(...Ku(l,t[l]))}),s.length>3&&n.push(" ..."),n}function Ku(t,n,s){return qe(n)?(n=JSON.stringify(n),s?n:[`${t}=${n}`]):typeof n=="number"||typeof n=="boolean"||n==null?s?n:[`${t}=${n}`]:Oe(n)?(n=Ku(t,fe(n.value),!0),s?n:[`${t}=Ref<`,n,">"]):de(n)?[`${t}=fn${n.name?`<${n.name}>`:""}`]:(n=fe(n),s?n:[`${t}=`,n])}function um(t,n){t!==void 0&&(typeof t!="number"?N(`${n} is not a valid number - got ${JSON.stringify(t)}.`):isNaN(t)&&N(`${n} is NaN - the duration expression might be incorrect.`))}const ui={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function yn(t,n,s,l){let o;try{o=l?t(...l):t()}catch(r){nr(r,n,s)}return o}function Mt(t,n,s,l){if(de(t)){const r=yn(t,n,s,l);return r&&ti(r)&&r.catch(a=>{nr(a,n,s)}),r}const o=[];for(let r=0;r<t.length;r++)o.push(Mt(t[r],n,s,l));return o}function nr(t,n,s,l=!0){const o=n?n.vnode:null;if(n){let r=n.parent;const a=n.proxy,i=ui[s];for(;r;){const p=r.ec;if(p){for(let u=0;u<p.length;u++)if(p[u](t,a,i)===!1)return}r=r.parent}const c=n.appContext.config.errorHandler;if(c){yn(c,null,10,[t,a,i]);return}}dm(t,s,o,l)}function dm(t,n,s,l=!0){{const o=ui[n];if(s&&_o(s),N(`Unhandled error${o?` during execution of ${o}`:""}`),s&&bo(),l)throw t;console.error(t)}}let kl=!1,oa=!1;const it=[];let Zt=0;const Ts=[];let Yt=null,En=0;const Ju=Promise.resolve();let di=null;const fm=100;function rt(t){const n=di||Ju;return t?n.then(this?t.bind(this):t):n}function ym(t){let n=Zt+1,s=it.length;for(;n<s;){const l=n+s>>>1;Dl(it[l])<t?n=l+1:s=l}return n}function sr(t){(!it.length||!it.includes(t,kl&&t.allowRecurse?Zt+1:Zt))&&(t.id==null?it.push(t):it.splice(ym(t.id),0,t),Yu())}function Yu(){!kl&&!oa&&(oa=!0,di=Ju.then(Qu))}function hm(t){const n=it.indexOf(t);n>Zt&&it.splice(n,1)}function Zu(t){ie(t)?Ts.push(...t):(!Yt||!Yt.includes(t,t.allowRecurse?En+1:En))&&Ts.push(t),Yu()}function fc(t,n=kl?Zt+1:0){for(t=t||new Map;n<it.length;n++){const s=it[n];if(s&&s.pre){if(fi(t,s))continue;it.splice(n,1),n--,s()}}}function Xu(t){if(Ts.length){const n=[...new Set(Ts)];if(Ts.length=0,Yt){Yt.push(...n);return}for(Yt=n,t=t||new Map,Yt.sort((s,l)=>Dl(s)-Dl(l)),En=0;En<Yt.length;En++)fi(t,Yt[En])||Yt[En]();Yt=null,En=0}}const Dl=t=>t.id==null?1/0:t.id,mm=(t,n)=>{const s=Dl(t)-Dl(n);if(s===0){if(t.pre&&!n.pre)return-1;if(n.pre&&!t.pre)return 1}return s};function Qu(t){oa=!1,kl=!0,t=t||new Map,it.sort(mm);const n=s=>fi(t,s);try{for(Zt=0;Zt<it.length;Zt++){const s=it[Zt];if(s&&s.active!==!1){if(n(s))continue;yn(s,null,14)}}}finally{Zt=0,it.length=0,Xu(t),kl=!1,di=null,(it.length||Ts.length)&&Qu(t)}}function fi(t,n){if(!t.has(n))t.set(n,1);else{const s=t.get(n);if(s>fm){const l=n.ownerInstance,o=l&&Pl(l.type);return N(`Maximum recursive updates exceeded${o?` in component <${o}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else t.set(n,s+1)}}let Tn=!1;const Ds=new Set;Du().__VUE_HMR_RUNTIME__={createRecord:Br(ed),rerender:Br(_m),reload:Br(bm)};const ms=new Map;function gm(t){const n=t.type.__hmrId;let s=ms.get(n);s||(ed(n,t.type),s=ms.get(n)),s.instances.add(t)}function vm(t){ms.get(t.type.__hmrId).instances.delete(t)}function ed(t,n){return ms.has(t)?!1:(ms.set(t,{initialDef:dl(n),instances:new Set}),!0)}function dl(t){return Od(t)?t.__vccOpts:t}function _m(t,n){const s=ms.get(t);s&&(s.initialDef.render=n,[...s.instances].forEach(l=>{n&&(l.render=n,dl(l.type).render=n),l.renderCache=[],Tn=!0,l.update(),Tn=!1}))}function bm(t,n){const s=ms.get(t);if(!s)return;n=dl(n),yc(s.initialDef,n);const l=[...s.instances];for(const o of l){const r=dl(o.type);Ds.has(r)||(r!==s.initialDef&&yc(r,n),Ds.add(r)),o.appContext.optionsCache.delete(o.type),o.ceReload?(Ds.add(r),o.ceReload(n.styles),Ds.delete(r)):o.parent?sr(o.parent.update):o.appContext.reload?o.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Zu(()=>{for(const o of l)Ds.delete(dl(o.type))})}function yc(t,n){ze(t,n);for(const s in t)s!=="__file"&&!(s in n)&&delete t[s]}function Br(t){return(n,s)=>{try{return t(n,s)}catch(l){console.error(l),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Xt,il=[],ra=!1;function Ul(t,...n){Xt?Xt.emit(t,...n):ra||il.push({event:t,args:n})}function td(t,n){var s,l;Xt=t,Xt?(Xt.enabled=!0,il.forEach(({event:o,args:r})=>Xt.emit(o,...r)),il=[]):typeof window<"u"&&window.HTMLElement&&!(!((l=(s=window.navigator)===null||s===void 0?void 0:s.userAgent)===null||l===void 0)&&l.includes("jsdom"))?((n.__VUE_DEVTOOLS_HOOK_REPLAY__=n.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{td(r,n)}),setTimeout(()=>{Xt||(n.__VUE_DEVTOOLS_HOOK_REPLAY__=null,ra=!0,il=[])},3e3)):(ra=!0,il=[])}function Am(t,n){Ul("app:init",t,n,{Fragment:Le,Text:Yl,Comment:st,Static:Ao})}function wm(t){Ul("app:unmount",t)}const aa=yi("component:added"),nd=yi("component:updated"),Bm=yi("component:removed"),Cm=t=>{Xt&&typeof Xt.cleanupBuffer=="function"&&!Xt.cleanupBuffer(t)&&Bm(t)};function yi(t){return n=>{Ul(t,n.appContext.app,n.uid,n.parent?n.parent.uid:void 0,n)}}const xm=sd("perf:start"),Em=sd("perf:end");function sd(t){return(n,s,l)=>{Ul(t,n.appContext.app,n.uid,n,s,l)}}function km(t,n,s){Ul("component:emit",t.appContext.app,t,n,s)}function Dm(t,n,...s){if(t.isUnmounted)return;const l=t.vnode.props||je;{const{emitsOptions:u,propsOptions:[d]}=t;if(u)if(!(n in u))(!d||!(Xn(n)in d))&&N(`Component emitted event "${n}" but it is neither declared in the emits option nor as an "${Xn(n)}" prop.`);else{const y=u[n];de(y)&&(y(...s)||N(`Invalid event arguments: event validation failed for event "${n}".`))}}let o=s;const r=n.startsWith("update:"),a=r&&n.slice(7);if(a&&a in l){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:d,trim:y}=l[u]||je;y&&(o=s.map(m=>qe(m)?m.trim():m)),d&&(o=s.map(ta))}km(t,n,o);{const u=n.toLowerCase();u!==n&&l[Xn(u)]&&N(`Event "${u}" is emitted in component ${dr(t,t.type)} but the handler is registered for "${n}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${hn(n)}" instead of "${n}".`)}let i,c=l[i=Xn(n)]||l[i=Xn(nn(n))];!c&&r&&(c=l[i=Xn(hn(n))]),c&&Mt(c,t,6,o);const p=l[i+"Once"];if(p){if(!t.emitted)t.emitted={};else if(t.emitted[i])return;t.emitted[i]=!0,Mt(p,t,6,o)}}function ld(t,n,s=!1){const l=n.emitsCache,o=l.get(t);if(o!==void 0)return o;const r=t.emits;let a={},i=!1;if(!de(t)){const c=p=>{const u=ld(p,n,!0);u&&(i=!0,ze(a,u))};!s&&n.mixins.length&&n.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!i?(Me(t)&&l.set(t,null),null):(ie(r)?r.forEach(c=>a[c]=null):ze(a,r),Me(t)&&l.set(t,a),a)}function lr(t,n){return!t||!Wl(n)?!1:(n=n.slice(2).replace(/Once$/,""),Ce(t,n[0].toLowerCase()+n.slice(1))||Ce(t,hn(n))||Ce(t,n))}let tt=null,or=null;function To(t){const n=tt;return tt=t,or=t&&t.type.__scopeId||null,n}function Ee(t){or=t}function ke(){or=null}function O(t,n=tt,s){if(!n||t._n)return t;const l=(...o)=>{l._d&&kc(-1);const r=To(n);let a;try{a=t(...o)}finally{To(r),l._d&&kc(1)}return nd(n),a};return l._n=!0,l._c=!0,l._d=!0,l}let ia=!1;function Lo(){ia=!0}function Cr(t){const{type:n,vnode:s,proxy:l,withProxy:o,props:r,propsOptions:[a],slots:i,attrs:c,emit:p,render:u,renderCache:d,data:y,setupState:m,ctx:h,inheritAttrs:v}=t;let _,C;const A=To(t);ia=!1;try{if(s.shapeFlag&4){const $=o||l;_=Wt(u.call($,$,d,r,m,y,h)),C=c}else{const $=n;c===r&&Lo(),_=Wt($.length>1?$(r,{get attrs(){return Lo(),c},slots:i,emit:p}):$(r,null)),C=n.props?c:Fm(c)}}catch($){yl.length=0,nr($,t,1),_=R(st)}let w=_,E;if(_.patchFlag>0&&_.patchFlag&2048&&([w,E]=Sm(_)),C&&v!==!1){const $=Object.keys(C),{shapeFlag:M}=w;if($.length){if(M&7)a&&$.some(Do)&&(C=$m(C,a)),w=Ut(w,C);else if(!ia&&w.type!==st){const T=Object.keys(c),D=[],H=[];for(let te=0,pe=T.length;te<pe;te++){const Z=T[te];Wl(Z)?Do(Z)||D.push(Z[2].toLowerCase()+Z.slice(3)):H.push(Z)}H.length&&N(`Extraneous non-props attributes (${H.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),D.length&&N(`Extraneous non-emits event listeners (${D.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return s.dirs&&(hc(w)||N("Runtime directive used on component with non-element root node. The directives will not function as intended."),w=Ut(w),w.dirs=w.dirs?w.dirs.concat(s.dirs):s.dirs),s.transition&&(hc(w)||N("Component inside <Transition> renders non-element root node that cannot be animated."),w.transition=s.transition),E?E(w):_=w,To(A),_}const Sm=t=>{const n=t.children,s=t.dynamicChildren,l=od(n);if(!l)return[t,void 0];const o=n.indexOf(l),r=s?s.indexOf(l):-1,a=i=>{n[o]=i,s&&(r>-1?s[r]=i:i.patchFlag>0&&(t.dynamicChildren=[...s,i]))};return[Wt(l),a]};function od(t){let n;for(let s=0;s<t.length;s++){const l=t[s];if(qn(l)){if(l.type!==st||l.children==="v-if"){if(n)return;n=l}}else return}return n}const Fm=t=>{let n;for(const s in t)(s==="class"||s==="style"||Wl(s))&&((n||(n={}))[s]=t[s]);return n},$m=(t,n)=>{const s={};for(const l in t)(!Do(l)||!(l.slice(9)in n))&&(s[l]=t[l]);return s},hc=t=>t.shapeFlag&7||t.type===st;function Pm(t,n,s){const{props:l,children:o,component:r}=t,{props:a,children:i,patchFlag:c}=n,p=r.emitsOptions;if((o||i)&&Tn||n.dirs||n.transition)return!0;if(s&&c>=0){if(c&1024)return!0;if(c&16)return l?mc(l,a,p):!!a;if(c&8){const u=n.dynamicProps;for(let d=0;d<u.length;d++){const y=u[d];if(a[y]!==l[y]&&!lr(p,y))return!0}}}else return(o||i)&&(!i||!i.$stable)?!0:l===a?!1:l?a?mc(l,a,p):!0:!!a;return!1}function mc(t,n,s){const l=Object.keys(n);if(l.length!==Object.keys(t).length)return!0;for(let o=0;o<l.length;o++){const r=l[o];if(n[r]!==t[r]&&!lr(s,r))return!0}return!1}function Om({vnode:t,parent:n},s){for(;n&&n.subTree===t;)(t=n.vnode).el=s,n=n.parent}const rd=t=>t.__isSuspense;function Tm(t,n){n&&n.pendingBranch?ie(t)?n.effects.push(...t):n.effects.push(t):Zu(t)}function Dt(t,n){if(!Ge)N("provide() can only be used inside setup().");else{let s=Ge.provides;const l=Ge.parent&&Ge.parent.provides;l===s&&(s=Ge.provides=Object.create(l)),s[t]=n}}function I(t,n,s=!1){const l=Ge||tt;if(l){const o=l.parent==null?l.vnode.appContext&&l.vnode.appContext.provides:l.parent.provides;if(o&&t in o)return o[t];if(arguments.length>1)return s&&de(n)?n.call(l.proxy):n;N(`injection "${String(t)}" not found.`)}else N("inject() can only be used inside setup() or functional components.")}function _s(t,n){return hi(t,null,n)}const co={};function ge(t,n,s){return de(n)||N("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),hi(t,n,s)}function hi(t,n,{immediate:s,deep:l,flush:o,onTrack:r,onTrigger:a}=je){n||(s!==void 0&&N('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),l!==void 0&&N('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const i=E=>{N("Invalid watch source: ",E,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},c=li()===(Ge==null?void 0:Ge.scope)?Ge:null;let p,u=!1,d=!1;if(Oe(t)?(p=()=>t.value,u=Po(t)):cs(t)?(p=()=>t,l=!0):ie(t)?(d=!0,u=t.some(E=>cs(E)||Po(E)),p=()=>t.map(E=>{if(Oe(E))return E.value;if(cs(E))return ls(E);if(de(E))return yn(E,c,2);i(E)})):de(t)?n?p=()=>yn(t,c,2):p=()=>{if(!(c&&c.isUnmounted))return y&&y(),Mt(t,c,3,[m])}:(p=_t,i(t)),n&&l){const E=p;p=()=>ls(E())}let y,m=E=>{y=A.onStop=()=>{yn(E,c,4)}},h;if($l)if(m=_t,n?s&&Mt(n,c,3,[p(),d?[]:void 0,m]):p(),o==="sync"){const E=V8();h=E.__watcherHandles||(E.__watcherHandles=[])}else return _t;let v=d?new Array(t.length).fill(co):co;const _=()=>{if(A.active)if(n){const E=A.run();(l||u||(d?E.some(($,M)=>xl($,v[M])):xl(E,v)))&&(y&&y(),Mt(n,c,3,[E,v===co?void 0:d&&v[0]===co?[]:v,m]),v=E)}else A.run()};_.allowRecurse=!!n;let C;o==="sync"?C=_:o==="post"?C=()=>ot(_,c&&c.suspense):(_.pre=!0,c&&(_.id=c.uid),C=()=>sr(_));const A=new ri(p,C);A.onTrack=r,A.onTrigger=a,n?s?_():v=A.run():o==="post"?ot(A.run.bind(A),c&&c.suspense):A.run();const w=()=>{A.stop(),c&&c.scope&&Qa(c.scope.effects,A)};return h&&h.push(w),w}function Lm(t,n,s){const l=this.proxy,o=qe(t)?t.includes(".")?ad(l,t):()=>l[t]:t.bind(l,l);let r;de(n)?r=n:(r=n.handler,s=n);const a=Ge;js(this);const i=hi(o,r.bind(l),s);return a?js(a):ds(),i}function ad(t,n){const s=n.split(".");return()=>{let l=t;for(let o=0;o<s.length&&l;o++)l=l[s[o]];return l}}function ls(t,n){if(!Me(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),Oe(t))ls(t.value,n);else if(ie(t))for(let s=0;s<t.length;s++)ls(t[s],n);else if(xu(t)||as(t))t.forEach(s=>{ls(s,n)});else if(ku(t))for(const s in t)ls(t[s],n);return t}function id(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return gn(()=>{t.isMounted=!0}),Kl(()=>{t.isUnmounting=!0}),t}const Ot=[Function,Array],Im={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ot,onEnter:Ot,onAfterEnter:Ot,onEnterCancelled:Ot,onBeforeLeave:Ot,onLeave:Ot,onAfterLeave:Ot,onLeaveCancelled:Ot,onBeforeAppear:Ot,onAppear:Ot,onAfterAppear:Ot,onAppearCancelled:Ot},setup(t,{slots:n}){const s=wt(),l=id();let o;return()=>{const r=n.default&&mi(n.default(),!0);if(!r||!r.length)return;let a=r[0];if(r.length>1){let v=!1;for(const _ of r)if(_.type!==st){if(v){N("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}a=_,v=!0}}const i=fe(t),{mode:c}=i;if(c&&c!=="in-out"&&c!=="out-in"&&c!=="default"&&N(`invalid <transition> mode: ${c}`),l.isLeaving)return xr(a);const p=gc(a);if(!p)return xr(a);const u=Sl(p,i,l,s);Rs(p,u);const d=s.subTree,y=d&&gc(d);let m=!1;const{getTransitionKey:h}=p.type;if(h){const v=h();o===void 0?o=v:v!==o&&(o=v,m=!0)}if(y&&y.type!==st&&(!$n(p,y)||m)){const v=Sl(y,i,l,s);if(Rs(y,v),c==="out-in")return l.isLeaving=!0,v.afterLeave=()=>{l.isLeaving=!1,s.update.active!==!1&&s.update()},xr(a);c==="in-out"&&p.type!==st&&(v.delayLeave=(_,C,A)=>{const w=cd(l,y);w[String(y.key)]=y,_._leaveCb=()=>{C(),_._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=A})}return a}}},Mm=Im;function cd(t,n){const{leavingVNodes:s}=t;let l=s.get(n.type);return l||(l=Object.create(null),s.set(n.type,l)),l}function Sl(t,n,s,l){const{appear:o,mode:r,persisted:a=!1,onBeforeEnter:i,onEnter:c,onAfterEnter:p,onEnterCancelled:u,onBeforeLeave:d,onLeave:y,onAfterLeave:m,onLeaveCancelled:h,onBeforeAppear:v,onAppear:_,onAfterAppear:C,onAppearCancelled:A}=n,w=String(t.key),E=cd(s,t),$=(D,H)=>{D&&Mt(D,l,9,H)},M=(D,H)=>{const te=H[1];$(D,H),ie(D)?D.every(pe=>pe.length<=1)&&te():D.length<=1&&te()},T={mode:r,persisted:a,beforeEnter(D){let H=i;if(!s.isMounted)if(o)H=v||i;else return;D._leaveCb&&D._leaveCb(!0);const te=E[w];te&&$n(t,te)&&te.el._leaveCb&&te.el._leaveCb(),$(H,[D])},enter(D){let H=c,te=p,pe=u;if(!s.isMounted)if(o)H=_||c,te=C||p,pe=A||u;else return;let Z=!1;const we=D._enterCb=Te=>{Z||(Z=!0,Te?$(pe,[D]):$(te,[D]),T.delayedLeave&&T.delayedLeave(),D._enterCb=void 0)};H?M(H,[D,we]):we()},leave(D,H){const te=String(t.key);if(D._enterCb&&D._enterCb(!0),s.isUnmounting)return H();$(d,[D]);let pe=!1;const Z=D._leaveCb=we=>{pe||(pe=!0,H(),we?$(h,[D]):$(m,[D]),D._leaveCb=void 0,E[te]===t&&delete E[te])};E[te]=t,y?M(y,[D,Z]):Z()},clone(D){return Sl(D,n,s,l)}};return T}function xr(t){if(Gl(t))return t=Ut(t),t.children=null,t}function gc(t){return Gl(t)?t.children?t.children[0]:void 0:t}function Rs(t,n){t.shapeFlag&6&&t.component?Rs(t.component.subTree,n):t.shapeFlag&128?(t.ssContent.transition=n.clone(t.ssContent),t.ssFallback.transition=n.clone(t.ssFallback)):t.transition=n}function mi(t,n=!1,s){let l=[],o=0;for(let r=0;r<t.length;r++){let a=t[r];const i=s==null?a.key:String(s)+String(a.key!=null?a.key:r);a.type===Le?(a.patchFlag&128&&o++,l=l.concat(mi(a.children,n,i))):(n||a.type!==st)&&l.push(i!=null?Ut(a,{key:i}):a)}if(o>1)for(let r=0;r<l.length;r++)l[r].patchFlag=-2;return l}function Pe(t){return de(t)?{setup:t,name:t.name}:t}const Ls=t=>!!t.type.__asyncLoader,Gl=t=>t.type.__isKeepAlive,Nm={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:n}){const s=wt(),l=s.ctx;if(!l.renderer)return()=>{const A=n.default&&n.default();return A&&A.length===1?A[0]:A};const o=new Map,r=new Set;let a=null;s.__v_cache=o;const i=s.suspense,{renderer:{p:c,m:p,um:u,o:{createElement:d}}}=l,y=d("div");l.activate=(A,w,E,$,M)=>{const T=A.component;p(A,w,E,0,i),c(T.vnode,A,w,E,T,i,$,A.slotScopeIds,M),ot(()=>{T.isDeactivated=!1,T.a&&Sn(T.a);const D=A.props&&A.props.onVnodeMounted;D&&Tt(D,T.parent,A)},i),aa(T)},l.deactivate=A=>{const w=A.component;p(A,y,null,1,i),ot(()=>{w.da&&Sn(w.da);const E=A.props&&A.props.onVnodeUnmounted;E&&Tt(E,w.parent,A),w.isDeactivated=!0},i),aa(w)};function m(A){Er(A),u(A,s,i,!0)}function h(A){o.forEach((w,E)=>{const $=Pl(w.type);$&&(!A||!A($))&&v(E)})}function v(A){const w=o.get(A);!a||!$n(w,a)?m(w):a&&Er(a),o.delete(A),r.delete(A)}ge(()=>[t.include,t.exclude],([A,w])=>{A&&h(E=>cl(A,E)),w&&h(E=>!cl(w,E))},{flush:"post",deep:!0});let _=null;const C=()=>{_!=null&&o.set(_,kr(s.subTree))};return gn(C),ar(C),Kl(()=>{o.forEach(A=>{const{subTree:w,suspense:E}=s,$=kr(w);if(A.type===$.type&&A.key===$.key){Er($);const M=$.component.da;M&&ot(M,E);return}m(A)})}),()=>{if(_=null,!n.default)return null;const A=n.default(),w=A[0];if(A.length>1)return N("KeepAlive should contain exactly one component child."),a=null,A;if(!qn(w)||!(w.shapeFlag&4)&&!(w.shapeFlag&128))return a=null,w;let E=kr(w);const $=E.type,M=Pl(Ls(E)?E.type.__asyncResolved||{}:$),{include:T,exclude:D,max:H}=t;if(T&&(!M||!cl(T,M))||D&&M&&cl(D,M))return a=E,w;const te=E.key==null?$:E.key,pe=o.get(te);return E.el&&(E=Ut(E),w.shapeFlag&128&&(w.ssContent=E)),_=te,pe?(E.el=pe.el,E.component=pe.component,E.transition&&Rs(E,E.transition),E.shapeFlag|=512,r.delete(te),r.add(te)):(r.add(te),H&&r.size>parseInt(H,10)&&v(r.values().next().value)),E.shapeFlag|=256,a=E,rd(w.type)?w:E}}},pd=Nm;function cl(t,n){return ie(t)?t.some(s=>cl(s,n)):qe(t)?t.split(",").includes(n):gh(t)?t.test(n):!1}function ud(t,n){fd(t,"a",n)}function dd(t,n){fd(t,"da",n)}function fd(t,n,s=Ge){const l=t.__wdc||(t.__wdc=()=>{let o=s;for(;o;){if(o.isDeactivated)return;o=o.parent}return t()});if(rr(n,l,s),s){let o=s.parent;for(;o&&o.parent;)Gl(o.parent.vnode)&&Rm(l,n,s,o),o=o.parent}}function Rm(t,n,s,l){const o=rr(n,t,l,!0);ir(()=>{Qa(l[n],o)},s)}function Er(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function kr(t){return t.shapeFlag&128?t.ssContent:t}function rr(t,n,s=Ge,l=!1){if(s){const o=s[t]||(s[t]=[]),r=n.__weh||(n.__weh=(...a)=>{if(s.isUnmounted)return;gs(),js(s);const i=Mt(n,s,t,a);return ds(),vs(),i});return l?o.unshift(r):o.push(r),r}else{const o=Xn(ui[t].replace(/ hook$/,""));N(`${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const vn=t=>(n,s=Ge)=>(!$l||t==="sp")&&rr(t,(...l)=>n(...l),s),jm=vn("bm"),gn=vn("m"),Vm=vn("bu"),ar=vn("u"),Kl=vn("bum"),ir=vn("um"),Hm=vn("sp"),qm=vn("rtg"),Wm=vn("rtc");function zm(t,n=Ge){rr("ec",t,n)}function yd(t){vh(t)&&N("Do not use built-in directive ids as custom directive id: "+t)}function cr(t,n){const s=tt;if(s===null)return N("withDirectives can only be used inside render functions."),t;const l=ur(s)||s.proxy,o=t.dirs||(t.dirs=[]);for(let r=0;r<n.length;r++){let[a,i,c,p=je]=n[r];a&&(de(a)&&(a={mounted:a,updated:a}),a.deep&&ls(i),o.push({dir:a,instance:l,value:i,oldValue:void 0,arg:c,modifiers:p}))}return t}function Gn(t,n,s,l){const o=t.dirs,r=n&&n.dirs;for(let a=0;a<o.length;a++){const i=o[a];r&&(i.oldValue=r[a].value);let c=i.dir[l];c&&(gs(),Mt(c,s,8,[t.el,i,t,n]),vs())}}const ca="components",Um="directives";function Io(t,n){return hd(ca,t,!0,n)||t}const Gm=Symbol();function Km(t){return hd(Um,t)}function hd(t,n,s=!0,l=!1){const o=tt||Ge;if(o){const r=o.type;if(t===ca){const i=Pl(r,!1);if(i&&(i===n||i===nn(n)||i===hs(nn(n))))return r}const a=vc(o[t]||r[t],n)||vc(o.appContext[t],n);if(!a&&l)return r;if(s&&!a){const i=t===ca?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";N(`Failed to resolve ${t.slice(0,-1)}: ${n}${i}`)}return a}else N(`resolve${hs(t.slice(0,-1))} can only be used in render() or setup().`)}function vc(t,n){return t&&(t[n]||t[nn(n)]||t[hs(nn(n))])}function Jl(t,n,s,l){let o;const r=s&&s[l];if(ie(t)||qe(t)){o=new Array(t.length);for(let a=0,i=t.length;a<i;a++)o[a]=n(t[a],a,void 0,r&&r[a])}else if(typeof t=="number"){Number.isInteger(t)||N(`The v-for range expect an integer value but got ${t}.`),o=new Array(t);for(let a=0;a<t;a++)o[a]=n(a+1,a,void 0,r&&r[a])}else if(Me(t))if(t[Symbol.iterator])o=Array.from(t,(a,i)=>n(a,i,void 0,r&&r[i]));else{const a=Object.keys(t);o=new Array(a.length);for(let i=0,c=a.length;i<c;i++){const p=a[i];o[i]=n(t[p],p,i,r&&r[i])}}else o=[];return s&&(s[l]=o),o}function Nt(t,n,s={},l,o){if(tt.isCE||tt.parent&&Ls(tt.parent)&&tt.parent.isCE)return n!=="default"&&(s.name=n),R("slot",s,l&&l());let r=t[n];r&&r.length>1&&(N("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),r=()=>[]),r&&r._c&&(r._d=!1),B();const a=r&&md(r(s)),i=q(Le,{key:s.key||a&&a.key||`_${n}`},a||(l?l():[]),a&&t._===1?64:-2);return!o&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),r&&r._c&&(r._d=!0),i}function md(t){return t.some(n=>qn(n)?!(n.type===st||n.type===Le&&!md(n.children)):!0)?t:null}const pa=t=>t?Fd(t)?ur(t)||t.proxy:pa(t.parent):null,us=ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>$s(t.props),$attrs:t=>$s(t.attrs),$slots:t=>$s(t.slots),$refs:t=>$s(t.refs),$parent:t=>pa(t.parent),$root:t=>pa(t.root),$emit:t=>t.emit,$options:t=>vi(t),$forceUpdate:t=>t.f||(t.f=()=>sr(t.update)),$nextTick:t=>t.n||(t.n=rt.bind(t.proxy)),$watch:t=>Lm.bind(t)}),gi=t=>t==="_"||t==="$",Dr=(t,n)=>t!==je&&!t.__isScriptSetup&&Ce(t,n),gd={get({_:t},n){const{ctx:s,setupState:l,data:o,props:r,accessCache:a,type:i,appContext:c}=t;if(n==="__isVue")return!0;let p;if(n[0]!=="$"){const m=a[n];if(m!==void 0)switch(m){case 1:return l[n];case 2:return o[n];case 4:return s[n];case 3:return r[n]}else{if(Dr(l,n))return a[n]=1,l[n];if(o!==je&&Ce(o,n))return a[n]=2,o[n];if((p=t.propsOptions[0])&&Ce(p,n))return a[n]=3,r[n];if(s!==je&&Ce(s,n))return a[n]=4,s[n];ua&&(a[n]=0)}}const u=us[n];let d,y;if(u)return n==="$attrs"&&(At(t,"get",n),Lo()),u(t);if((d=i.__cssModules)&&(d=d[n]))return d;if(s!==je&&Ce(s,n))return a[n]=4,s[n];if(y=c.config.globalProperties,Ce(y,n))return y[n];tt&&(!qe(n)||n.indexOf("__v")!==0)&&(o!==je&&gi(n[0])&&Ce(o,n)?N(`Property ${JSON.stringify(n)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):t===tt&&N(`Property ${JSON.stringify(n)} was accessed during render but is not defined on instance.`))},set({_:t},n,s){const{data:l,setupState:o,ctx:r}=t;return Dr(o,n)?(o[n]=s,!0):o.__isScriptSetup&&Ce(o,n)?(N(`Cannot mutate <script setup> binding "${n}" from Options API.`),!1):l!==je&&Ce(l,n)?(l[n]=s,!0):Ce(t.props,n)?(N(`Attempting to mutate prop "${n}". Props are readonly.`),!1):n[0]==="$"&&n.slice(1)in t?(N(`Attempting to mutate public property "${n}". Properties starting with $ are reserved and readonly.`),!1):(n in t.appContext.config.globalProperties?Object.defineProperty(r,n,{enumerable:!0,configurable:!0,value:s}):r[n]=s,!0)},has({_:{data:t,setupState:n,accessCache:s,ctx:l,appContext:o,propsOptions:r}},a){let i;return!!s[a]||t!==je&&Ce(t,a)||Dr(n,a)||(i=r[0])&&Ce(i,a)||Ce(l,a)||Ce(us,a)||Ce(o.config.globalProperties,a)},defineProperty(t,n,s){return s.get!=null?t._.accessCache[n]=0:Ce(s,"value")&&this.set(t,n,s.value,null),Reflect.defineProperty(t,n,s)}};gd.ownKeys=t=>(N("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(t));function Jm(t){const n={};return Object.defineProperty(n,"_",{configurable:!0,enumerable:!1,get:()=>t}),Object.keys(us).forEach(s=>{Object.defineProperty(n,s,{configurable:!0,enumerable:!1,get:()=>us[s](t),set:_t})}),n}function Ym(t){const{ctx:n,propsOptions:[s]}=t;s&&Object.keys(s).forEach(l=>{Object.defineProperty(n,l,{enumerable:!0,configurable:!0,get:()=>t.props[l],set:_t})})}function Zm(t){const{ctx:n,setupState:s}=t;Object.keys(fe(s)).forEach(l=>{if(!s.__isScriptSetup){if(gi(l[0])){N(`setup() return property ${JSON.stringify(l)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(n,l,{enumerable:!0,configurable:!0,get:()=>s[l],set:_t})}})}function Xm(){const t=Object.create(null);return(n,s)=>{t[s]?N(`${n} property "${s}" is already defined in ${t[s]}.`):t[s]=n}}let ua=!0;function Qm(t){const n=vi(t),s=t.proxy,l=t.ctx;ua=!1,n.beforeCreate&&_c(n.beforeCreate,t,"bc");const{data:o,computed:r,methods:a,watch:i,provide:c,inject:p,created:u,beforeMount:d,mounted:y,beforeUpdate:m,updated:h,activated:v,deactivated:_,beforeDestroy:C,beforeUnmount:A,destroyed:w,unmounted:E,render:$,renderTracked:M,renderTriggered:T,errorCaptured:D,serverPrefetch:H,expose:te,inheritAttrs:pe,components:Z,directives:we,filters:Te}=n,Se=Xm();{const[Q]=t.propsOptions;if(Q)for(const ce in Q)Se("Props",ce)}if(p&&e8(p,l,Se,t.appContext.config.unwrapInjectedRef),a)for(const Q in a){const ce=a[Q];de(ce)?(Object.defineProperty(l,Q,{value:ce.bind(s),configurable:!0,enumerable:!0,writable:!0}),Se("Methods",Q)):N(`Method "${Q}" has type "${typeof ce}" in the component definition. Did you reference the function correctly?`)}if(o){de(o)||N("The data option must be a function. Plain object usage is no longer supported.");const Q=o.call(s,s);if(ti(Q)&&N("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Me(Q))N("data() should return an object.");else{t.data=We(Q);for(const ce in Q)Se("Data",ce),gi(ce[0])||Object.defineProperty(l,ce,{configurable:!0,enumerable:!0,get:()=>Q[ce],set:_t})}}if(ua=!0,r)for(const Q in r){const ce=r[Q],be=de(ce)?ce.bind(s,s):de(ce.get)?ce.get.bind(s,s):_t;be===_t&&N(`Computed property "${Q}" has no getter.`);const Ne=!de(ce)&&de(ce.set)?ce.set.bind(s):()=>{N(`Write operation failed: computed property "${Q}" is readonly.`)},Ct=F({get:be,set:Ne});Object.defineProperty(l,Q,{enumerable:!0,configurable:!0,get:()=>Ct.value,set:at=>Ct.value=at}),Se("Computed",Q)}if(i)for(const Q in i)vd(i[Q],l,s,Q);if(c){const Q=de(c)?c.call(s):c;Reflect.ownKeys(Q).forEach(ce=>{Dt(ce,Q[ce])})}u&&_c(u,t,"c");function Ve(Q,ce){ie(ce)?ce.forEach(be=>Q(be.bind(s))):ce&&Q(ce.bind(s))}if(Ve(jm,d),Ve(gn,y),Ve(Vm,m),Ve(ar,h),Ve(ud,v),Ve(dd,_),Ve(zm,D),Ve(Wm,M),Ve(qm,T),Ve(Kl,A),Ve(ir,E),Ve(Hm,H),ie(te))if(te.length){const Q=t.exposed||(t.exposed={});te.forEach(ce=>{Object.defineProperty(Q,ce,{get:()=>s[ce],set:be=>s[ce]=be})})}else t.exposed||(t.exposed={});$&&t.render===_t&&(t.render=$),pe!=null&&(t.inheritAttrs=pe),Z&&(t.components=Z),we&&(t.directives=we)}function e8(t,n,s=_t,l=!1){ie(t)&&(t=da(t));for(const o in t){const r=t[o];let a;Me(r)?"default"in r?a=I(r.from||o,r.default,!0):a=I(r.from||o):a=I(r),Oe(a)?l?Object.defineProperty(n,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:i=>a.value=i}):(N(`injected property "${o}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),n[o]=a):n[o]=a,s("Inject",o)}}function _c(t,n,s){Mt(ie(t)?t.map(l=>l.bind(n.proxy)):t.bind(n.proxy),n,s)}function vd(t,n,s,l){const o=l.includes(".")?ad(s,l):()=>s[l];if(qe(t)){const r=n[t];de(r)?ge(o,r):N(`Invalid watch handler specified by key "${t}"`,r)}else if(de(t))ge(o,t.bind(s));else if(Me(t))if(ie(t))t.forEach(r=>vd(r,n,s,l));else{const r=de(t.handler)?t.handler.bind(s):n[t.handler];de(r)?ge(o,r,t):N(`Invalid watch handler specified by key "${t.handler}"`,r)}else N(`Invalid watch option: "${l}"`,t)}function vi(t){const n=t.type,{mixins:s,extends:l}=n,{mixins:o,optionsCache:r,config:{optionMergeStrategies:a}}=t.appContext,i=r.get(n);let c;return i?c=i:!o.length&&!s&&!l?c=n:(c={},o.length&&o.forEach(p=>Mo(c,p,a,!0)),Mo(c,n,a)),Me(n)&&r.set(n,c),c}function Mo(t,n,s,l=!1){const{mixins:o,extends:r}=n;r&&Mo(t,r,s,!0),o&&o.forEach(a=>Mo(t,a,s,!0));for(const a in n)if(l&&a==="expose")N('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const i=t8[a]||s&&s[a];t[a]=i?i(t[a],n[a]):n[a]}return t}const t8={data:bc,props:Qn,emits:Qn,methods:Qn,computed:Qn,beforeCreate:ut,created:ut,beforeMount:ut,mounted:ut,beforeUpdate:ut,updated:ut,beforeDestroy:ut,beforeUnmount:ut,destroyed:ut,unmounted:ut,activated:ut,deactivated:ut,errorCaptured:ut,serverPrefetch:ut,components:Qn,directives:Qn,watch:s8,provide:bc,inject:n8};function bc(t,n){return n?t?function(){return ze(de(t)?t.call(this,this):t,de(n)?n.call(this,this):n)}:n:t}function n8(t,n){return Qn(da(t),da(n))}function da(t){if(ie(t)){const n={};for(let s=0;s<t.length;s++)n[t[s]]=t[s];return n}return t}function ut(t,n){return t?[...new Set([].concat(t,n))]:n}function Qn(t,n){return t?ze(ze(Object.create(null),t),n):n}function s8(t,n){if(!t)return n;if(!n)return t;const s=ze(Object.create(null),t);for(const l in n)s[l]=ut(t[l],n[l]);return s}function l8(t,n,s,l=!1){const o={},r={};So(r,pr,1),t.propsDefaults=Object.create(null),_d(t,n,o,r);for(const a in t.propsOptions[0])a in o||(o[a]=void 0);Ad(n||{},o,t),s?t.props=l?o:Xh(o):t.type.props?t.props=o:t.props=r,t.attrs=r}function o8(t){for(;t;){if(t.type.__hmrId)return!0;t=t.parent}}function r8(t,n,s,l){const{props:o,attrs:r,vnode:{patchFlag:a}}=t,i=fe(o),[c]=t.propsOptions;let p=!1;if(!o8(t)&&(l||a>0)&&!(a&16)){if(a&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let y=u[d];if(lr(t.emitsOptions,y))continue;const m=n[y];if(c)if(Ce(r,y))m!==r[y]&&(r[y]=m,p=!0);else{const h=nn(y);o[h]=fa(c,i,h,m,t,!1)}else m!==r[y]&&(r[y]=m,p=!0)}}}else{_d(t,n,o,r)&&(p=!0);let u;for(const d in i)(!n||!Ce(n,d)&&((u=hn(d))===d||!Ce(n,u)))&&(c?s&&(s[d]!==void 0||s[u]!==void 0)&&(o[d]=fa(c,i,d,void 0,t,!0)):delete o[d]);if(r!==i)for(const d in r)(!n||!Ce(n,d))&&(delete r[d],p=!0)}p&&mn(t,"set","$attrs"),Ad(n||{},o,t)}function _d(t,n,s,l){const[o,r]=t.propsOptions;let a=!1,i;if(n)for(let c in n){if(vo(c))continue;const p=n[c];let u;o&&Ce(o,u=nn(c))?!r||!r.includes(u)?s[u]=p:(i||(i={}))[u]=p:lr(t.emitsOptions,c)||(!(c in l)||p!==l[c])&&(l[c]=p,a=!0)}if(r){const c=fe(s),p=i||je;for(let u=0;u<r.length;u++){const d=r[u];s[d]=fa(o,c,d,p[d],t,!Ce(p,d))}}return a}function fa(t,n,s,l,o,r){const a=t[s];if(a!=null){const i=Ce(a,"default");if(i&&l===void 0){const c=a.default;if(a.type!==Function&&de(c)){const{propsDefaults:p}=o;s in p?l=p[s]:(js(o),l=p[s]=c.call(null,n),ds())}else l=c}a[0]&&(r&&!i?l=!1:a[1]&&(l===""||l===hn(s))&&(l=!0))}return l}function bd(t,n,s=!1){const l=n.propsCache,o=l.get(t);if(o)return o;const r=t.props,a={},i=[];let c=!1;if(!de(t)){const u=d=>{c=!0;const[y,m]=bd(d,n,!0);ze(a,y),m&&i.push(...m)};!s&&n.mixins.length&&n.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return Me(t)&&l.set(t,Os),Os;if(ie(r))for(let u=0;u<r.length;u++){qe(r[u])||N("props must be strings when using array syntax.",r[u]);const d=nn(r[u]);Ac(d)&&(a[d]=je)}else if(r){Me(r)||N("invalid props options",r);for(const u in r){const d=nn(u);if(Ac(d)){const y=r[u],m=a[d]=ie(y)||de(y)?{type:y}:Object.assign({},y);if(m){const h=Bc(Boolean,m.type),v=Bc(String,m.type);m[0]=h>-1,m[1]=v<0||h<v,(h>-1||Ce(m,"default"))&&i.push(d)}}}}const p=[a,i];return Me(t)&&l.set(t,p),p}function Ac(t){return t[0]!=="$"?!0:(N(`Invalid prop name: "${t}" is a reserved property.`),!1)}function ya(t){const n=t&&t.toString().match(/^\s*(function|class) (\w+)/);return n?n[2]:t===null?"null":""}function wc(t,n){return ya(t)===ya(n)}function Bc(t,n){return ie(n)?n.findIndex(s=>wc(s,t)):de(n)&&wc(n,t)?0:-1}function Ad(t,n,s){const l=fe(n),o=s.propsOptions[0];for(const r in o){let a=o[r];a!=null&&a8(r,l[r],a,!Ce(t,r)&&!Ce(t,hn(r)))}}function a8(t,n,s,l){const{type:o,required:r,validator:a}=s;if(r&&l){N('Missing required prop: "'+t+'"');return}if(!(n==null&&!s.required)){if(o!=null&&o!==!0){let i=!1;const c=ie(o)?o:[o],p=[];for(let u=0;u<c.length&&!i;u++){const{valid:d,expectedType:y}=c8(n,c[u]);p.push(y||""),i=d}if(!i){N(p8(t,n,p));return}}a&&!a(n)&&N('Invalid prop: custom validator check failed for prop "'+t+'".')}}const i8=zn("String,Number,Boolean,Function,Symbol,BigInt");function c8(t,n){let s;const l=ya(n);if(i8(l)){const o=typeof t;s=o===l.toLowerCase(),!s&&o==="object"&&(s=t instanceof n)}else l==="Object"?s=Me(t):l==="Array"?s=ie(t):l==="null"?s=t===null:s=t instanceof n;return{valid:s,expectedType:l}}function p8(t,n,s){let l=`Invalid prop: type check failed for prop "${t}". Expected ${s.map(hs).join(" | ")}`;const o=s[0],r=ni(n),a=Cc(n,o),i=Cc(n,r);return s.length===1&&xc(o)&&!u8(o,r)&&(l+=` with value ${a}`),l+=`, got ${r} `,xc(r)&&(l+=`with value ${i}.`),l}function Cc(t,n){return n==="String"?`"${t}"`:n==="Number"?`${Number(t)}`:`${t}`}function xc(t){return["string","number","boolean"].some(s=>t.toLowerCase()===s)}function u8(...t){return t.some(n=>n.toLowerCase()==="boolean")}const wd=t=>t[0]==="_"||t==="$stable",_i=t=>ie(t)?t.map(Wt):[Wt(t)],d8=(t,n,s)=>{if(n._n)return n;const l=O((...o)=>(Ge&&N(`Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),_i(n(...o))),s);return l._c=!1,l},Bd=(t,n,s)=>{const l=t._ctx;for(const o in t){if(wd(o))continue;const r=t[o];if(de(r))n[o]=d8(o,r,l);else if(r!=null){N(`Non-function value encountered for slot "${o}". Prefer function slots for better performance.`);const a=_i(r);n[o]=()=>a}}},Cd=(t,n)=>{Gl(t.vnode)||N("Non-function value encountered for default slot. Prefer function slots for better performance.");const s=_i(n);t.slots.default=()=>s},f8=(t,n)=>{if(t.vnode.shapeFlag&32){const s=n._;s?(t.slots=fe(n),So(n,"_",s)):Bd(n,t.slots={})}else t.slots={},n&&Cd(t,n);So(t.slots,pr,1)},y8=(t,n,s)=>{const{vnode:l,slots:o}=t;let r=!0,a=je;if(l.shapeFlag&32){const i=n._;i?Tn?ze(o,n):s&&i===1?r=!1:(ze(o,n),!s&&i===1&&delete o._):(r=!n.$stable,Bd(n,o)),a=n}else n&&(Cd(t,n),a={default:1});if(r)for(const i in o)!wd(i)&&!(i in a)&&delete o[i]};function xd(){return{app:null,config:{isNativeTag:Cu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let h8=0;function m8(t,n){return function(l,o=null){de(l)||(l=Object.assign({},l)),o!=null&&!Me(o)&&(N("root props passed to app.mount() must be an object."),o=null);const r=xd(),a=new Set;let i=!1;const c=r.app={_uid:h8++,_component:l,_props:o,_container:null,_context:r,_instance:null,version:Ro,get config(){return r.config},set config(p){N("app.config cannot be replaced. Modify individual options instead.")},use(p,...u){return a.has(p)?N("Plugin has already been applied to target app."):p&&de(p.install)?(a.add(p),p.install(c,...u)):de(p)?(a.add(p),p(c,...u)):N('A plugin must either be a function or an object with an "install" function.'),c},mixin(p){return r.mixins.includes(p)?N("Mixin has already been applied to target app"+(p.name?`: ${p.name}`:"")):r.mixins.push(p),c},component(p,u){return ga(p,r.config),u?(r.components[p]&&N(`Component "${p}" has already been registered in target app.`),r.components[p]=u,c):r.components[p]},directive(p,u){return yd(p),u?(r.directives[p]&&N(`Directive "${p}" has already been registered in target app.`),r.directives[p]=u,c):r.directives[p]},mount(p,u,d){if(i)N("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{p.__vue_app__&&N("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const y=R(l,o);return y.appContext=r,r.reload=()=>{t(Ut(y),p,d)},u&&n?n(y,p):t(y,p,d),i=!0,c._container=p,p.__vue_app__=c,c._instance=y.component,Am(c,Ro),ur(y.component)||y.component.proxy}},unmount(){i?(t(null,c._container),c._instance=null,wm(c),delete c._container.__vue_app__):N("Cannot unmount an app that is not mounted.")},provide(p,u){return p in r.provides&&N(`App already provides property with key "${String(p)}". It will be overwritten with the new value.`),r.provides[p]=u,c}};return c}}function ha(t,n,s,l,o=!1){if(ie(t)){t.forEach((y,m)=>ha(y,n&&(ie(n)?n[m]:n),s,l,o));return}if(Ls(l)&&!o)return;const r=l.shapeFlag&4?ur(l.component)||l.component.proxy:l.el,a=o?null:r,{i,r:c}=t;if(!i){N("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const p=n&&n.r,u=i.refs===je?i.refs={}:i.refs,d=i.setupState;if(p!=null&&p!==c&&(qe(p)?(u[p]=null,Ce(d,p)&&(d[p]=null)):Oe(p)&&(p.value=null)),de(c))yn(c,i,12,[a,u]);else{const y=qe(c),m=Oe(c);if(y||m){const h=()=>{if(t.f){const v=y?Ce(d,c)?d[c]:u[c]:c.value;o?ie(v)&&Qa(v,r):ie(v)?v.includes(r)||v.push(r):y?(u[c]=[r],Ce(d,c)&&(d[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else y?(u[c]=a,Ce(d,c)&&(d[c]=a)):m?(c.value=a,t.k&&(u[t.k]=a)):N("Invalid template ref type:",c,`(${typeof c})`)};a?(h.id=-1,ot(h,s)):h()}else N("Invalid template ref type:",c,`(${typeof c})`)}}let Js,Fn;function rn(t,n){t.appContext.config.performance&&No()&&Fn.mark(`vue-${n}-${t.uid}`),xm(t,n,No()?Fn.now():Date.now())}function an(t,n){if(t.appContext.config.performance&&No()){const s=`vue-${n}-${t.uid}`,l=s+":end";Fn.mark(l),Fn.measure(`<${dr(t,t.type)}> ${n}`,s,l),Fn.clearMarks(s),Fn.clearMarks(l)}Em(t,n,No()?Fn.now():Date.now())}function No(){return Js!==void 0||(typeof window<"u"&&window.performance?(Js=!0,Fn=window.performance):Js=!1),Js}function g8(){const t=[];if(t.length){const n=t.length>1;console.warn(`Feature flag${n?"s":""} ${t.join(", ")} ${n?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const ot=Tm;function v8(t){return _8(t)}function _8(t,n){g8();const s=Du();s.__VUE__=!0,td(s.__VUE_DEVTOOLS_GLOBAL_HOOK__,s);const{insert:l,remove:o,patchProp:r,createElement:a,createText:i,createComment:c,setText:p,setElementText:u,parentNode:d,nextSibling:y,setScopeId:m=_t,insertStaticContent:h}=t,v=(g,b,k,L=null,P=null,z=null,Y=!1,V=null,G=Tn?!1:!!b.dynamicChildren)=>{if(g===b)return;g&&!$n(g,b)&&(L=ne(g),mt(g,P,z,!0),g=null),b.patchFlag===-2&&(G=!1,b.dynamicChildren=null);const{type:j,ref:le,shapeFlag:se}=b;switch(j){case Yl:_(g,b,k,L);break;case st:C(g,b,k,L);break;case Ao:g==null?A(b,k,L,Y):w(g,b,k,Y);break;case Le:we(g,b,k,L,P,z,Y,V,G);break;default:se&1?M(g,b,k,L,P,z,Y,V,G):se&6?Te(g,b,k,L,P,z,Y,V,G):se&64||se&128?j.process(g,b,k,L,P,z,Y,V,G,De):N("Invalid VNode type:",j,`(${typeof j})`)}le!=null&&P&&ha(le,g&&g.ref,z,b||g,!b)},_=(g,b,k,L)=>{if(g==null)l(b.el=i(b.children),k,L);else{const P=b.el=g.el;b.children!==g.children&&p(P,b.children)}},C=(g,b,k,L)=>{g==null?l(b.el=c(b.children||""),k,L):b.el=g.el},A=(g,b,k,L)=>{[g.el,g.anchor]=h(g.children,b,k,L,g.el,g.anchor)},w=(g,b,k,L)=>{if(b.children!==g.children){const P=y(g.anchor);$(g),[b.el,b.anchor]=h(b.children,k,P,L)}else b.el=g.el,b.anchor=g.anchor},E=({el:g,anchor:b},k,L)=>{let P;for(;g&&g!==b;)P=y(g),l(g,k,L),g=P;l(b,k,L)},$=({el:g,anchor:b})=>{let k;for(;g&&g!==b;)k=y(g),o(g),g=k;o(b)},M=(g,b,k,L,P,z,Y,V,G)=>{Y=Y||b.type==="svg",g==null?T(b,k,L,P,z,Y,V,G):te(g,b,P,z,Y,V,G)},T=(g,b,k,L,P,z,Y,V)=>{let G,j;const{type:le,props:se,shapeFlag:ae,transition:he,dirs:xe}=g;if(G=g.el=a(g.type,z,se&&se.is,se),ae&8?u(G,g.children):ae&16&&H(g.children,G,null,L,P,z&&le!=="foreignObject",Y,V),xe&&Gn(g,null,L,"created"),D(G,g,g.scopeId,Y,L),se){for(const Re in se)Re!=="value"&&!vo(Re)&&r(G,Re,null,se[Re],z,g.children,L,P,J);"value"in se&&r(G,"value",null,se.value),(j=se.onVnodeBeforeMount)&&Tt(j,L,g)}Object.defineProperty(G,"__vnode",{value:g,enumerable:!1}),Object.defineProperty(G,"__vueParentComponent",{value:L,enumerable:!1}),xe&&Gn(g,null,L,"beforeMount");const He=(!P||P&&!P.pendingBranch)&&he&&!he.persisted;He&&he.beforeEnter(G),l(G,b,k),((j=se&&se.onVnodeMounted)||He||xe)&&ot(()=>{j&&Tt(j,L,g),He&&he.enter(G),xe&&Gn(g,null,L,"mounted")},P)},D=(g,b,k,L,P)=>{if(k&&m(g,k),L)for(let z=0;z<L.length;z++)m(g,L[z]);if(P){let z=P.subTree;if(z.patchFlag>0&&z.patchFlag&2048&&(z=od(z.children)||z),b===z){const Y=P.vnode;D(g,Y,Y.scopeId,Y.slotScopeIds,P.parent)}}},H=(g,b,k,L,P,z,Y,V,G=0)=>{for(let j=G;j<g.length;j++){const le=g[j]=V?kn(g[j]):Wt(g[j]);v(null,le,b,k,L,P,z,Y,V)}},te=(g,b,k,L,P,z,Y)=>{const V=b.el=g.el;let{patchFlag:G,dynamicChildren:j,dirs:le}=b;G|=g.patchFlag&16;const se=g.props||je,ae=b.props||je;let he;k&&Kn(k,!1),(he=ae.onVnodeBeforeUpdate)&&Tt(he,k,b,g),le&&Gn(b,g,k,"beforeUpdate"),k&&Kn(k,!0),Tn&&(G=0,Y=!1,j=null);const xe=P&&b.type!=="foreignObject";if(j?(pe(g.dynamicChildren,j,V,k,L,xe,z),k&&k.type.__hmrId&&fl(g,b)):Y||be(g,b,V,null,k,L,xe,z,!1),G>0){if(G&16)Z(V,b,se,ae,k,L,P);else if(G&2&&se.class!==ae.class&&r(V,"class",null,ae.class,P),G&4&&r(V,"style",se.style,ae.style,P),G&8){const He=b.dynamicProps;for(let Re=0;Re<He.length;Re++){const Ze=He[Re],Vt=se[Ze],Bs=ae[Ze];(Bs!==Vt||Ze==="value")&&r(V,Ze,Vt,Bs,P,g.children,k,L,J)}}G&1&&g.children!==b.children&&u(V,b.children)}else!Y&&j==null&&Z(V,b,se,ae,k,L,P);((he=ae.onVnodeUpdated)||le)&&ot(()=>{he&&Tt(he,k,b,g),le&&Gn(b,g,k,"updated")},L)},pe=(g,b,k,L,P,z,Y)=>{for(let V=0;V<b.length;V++){const G=g[V],j=b[V],le=G.el&&(G.type===Le||!$n(G,j)||G.shapeFlag&70)?d(G.el):k;v(G,j,le,null,L,P,z,Y,!0)}},Z=(g,b,k,L,P,z,Y)=>{if(k!==L){if(k!==je)for(const V in k)!vo(V)&&!(V in L)&&r(g,V,k[V],null,Y,b.children,P,z,J);for(const V in L){if(vo(V))continue;const G=L[V],j=k[V];G!==j&&V!=="value"&&r(g,V,j,G,Y,b.children,P,z,J)}"value"in L&&r(g,"value",k.value,L.value)}},we=(g,b,k,L,P,z,Y,V,G)=>{const j=b.el=g?g.el:i(""),le=b.anchor=g?g.anchor:i("");let{patchFlag:se,dynamicChildren:ae,slotScopeIds:he}=b;(Tn||se&2048)&&(se=0,G=!1,ae=null),he&&(V=V?V.concat(he):he),g==null?(l(j,k,L),l(le,k,L),H(b.children,k,le,P,z,Y,V,G)):se>0&&se&64&&ae&&g.dynamicChildren?(pe(g.dynamicChildren,ae,k,P,z,Y,V),P&&P.type.__hmrId?fl(g,b):(b.key!=null||P&&b===P.subTree)&&fl(g,b,!0)):be(g,b,k,le,P,z,Y,V,G)},Te=(g,b,k,L,P,z,Y,V,G)=>{b.slotScopeIds=V,g==null?b.shapeFlag&512?P.ctx.activate(b,k,L,Y,G):Se(b,k,L,P,z,Y,G):Ve(g,b,G)},Se=(g,b,k,L,P,z,Y)=>{const V=g.component=F8(g,L,P);if(V.type.__hmrId&&gm(V),_o(g),rn(V,"mount"),Gl(g)&&(V.ctx.renderer=De),rn(V,"init"),P8(V),an(V,"init"),V.asyncDep){if(P&&P.registerDep(V,Q),!g.el){const G=V.subTree=R(st);C(null,G,b,k)}return}Q(V,g,b,k,P,z,Y),bo(),an(V,"mount")},Ve=(g,b,k)=>{const L=b.component=g.component;if(Pm(g,b,k))if(L.asyncDep&&!L.asyncResolved){_o(b),ce(L,b,k),bo();return}else L.next=b,hm(L.update),L.update();else b.el=g.el,L.vnode=b},Q=(g,b,k,L,P,z,Y)=>{const V=()=>{if(g.isMounted){let{next:le,bu:se,u:ae,parent:he,vnode:xe}=g,He=le,Re;_o(le||g.vnode),Kn(g,!1),le?(le.el=xe.el,ce(g,le,Y)):le=xe,se&&Sn(se),(Re=le.props&&le.props.onVnodeBeforeUpdate)&&Tt(Re,he,le,xe),Kn(g,!0),rn(g,"render");const Ze=Cr(g);an(g,"render");const Vt=g.subTree;g.subTree=Ze,rn(g,"patch"),v(Vt,Ze,d(Vt.el),ne(Vt),g,P,z),an(g,"patch"),le.el=Ze.el,He===null&&Om(g,Ze.el),ae&&ot(ae,P),(Re=le.props&&le.props.onVnodeUpdated)&&ot(()=>Tt(Re,he,le,xe),P),nd(g),bo()}else{let le;const{el:se,props:ae}=b,{bm:he,m:xe,parent:He}=g,Re=Ls(b);if(Kn(g,!1),he&&Sn(he),!Re&&(le=ae&&ae.onVnodeBeforeMount)&&Tt(le,He,b),Kn(g,!0),se&&ue){const Ze=()=>{rn(g,"render"),g.subTree=Cr(g),an(g,"render"),rn(g,"hydrate"),ue(se,g.subTree,g,P,null),an(g,"hydrate")};Re?b.type.__asyncLoader().then(()=>!g.isUnmounted&&Ze()):Ze()}else{rn(g,"render");const Ze=g.subTree=Cr(g);an(g,"render"),rn(g,"patch"),v(null,Ze,k,L,g,P,z),an(g,"patch"),b.el=Ze.el}if(xe&&ot(xe,P),!Re&&(le=ae&&ae.onVnodeMounted)){const Ze=b;ot(()=>Tt(le,He,Ze),P)}(b.shapeFlag&256||He&&Ls(He.vnode)&&He.vnode.shapeFlag&256)&&g.a&&ot(g.a,P),g.isMounted=!0,aa(g),b=k=L=null}},G=g.effect=new ri(V,()=>sr(j),g.scope),j=g.update=()=>G.run();j.id=g.uid,Kn(g,!0),G.onTrack=g.rtc?le=>Sn(g.rtc,le):void 0,G.onTrigger=g.rtg?le=>Sn(g.rtg,le):void 0,j.ownerInstance=g,j()},ce=(g,b,k)=>{b.component=g;const L=g.vnode.props;g.vnode=b,g.next=null,r8(g,b.props,L,k),y8(g,b.children,k),gs(),fc(),vs()},be=(g,b,k,L,P,z,Y,V,G=!1)=>{const j=g&&g.children,le=g?g.shapeFlag:0,se=b.children,{patchFlag:ae,shapeFlag:he}=b;if(ae>0){if(ae&128){Ct(j,se,k,L,P,z,Y,V,G);return}else if(ae&256){Ne(j,se,k,L,P,z,Y,V,G);return}}he&8?(le&16&&J(j,P,z),se!==j&&u(k,se)):le&16?he&16?Ct(j,se,k,L,P,z,Y,V,G):J(j,P,z,!0):(le&8&&u(k,""),he&16&&H(se,k,L,P,z,Y,V,G))},Ne=(g,b,k,L,P,z,Y,V,G)=>{g=g||Os,b=b||Os;const j=g.length,le=b.length,se=Math.min(j,le);let ae;for(ae=0;ae<se;ae++){const he=b[ae]=G?kn(b[ae]):Wt(b[ae]);v(g[ae],he,k,null,P,z,Y,V,G)}j>le?J(g,P,z,!0,!1,se):H(b,k,L,P,z,Y,V,G,se)},Ct=(g,b,k,L,P,z,Y,V,G)=>{let j=0;const le=b.length;let se=g.length-1,ae=le-1;for(;j<=se&&j<=ae;){const he=g[j],xe=b[j]=G?kn(b[j]):Wt(b[j]);if($n(he,xe))v(he,xe,k,null,P,z,Y,V,G);else break;j++}for(;j<=se&&j<=ae;){const he=g[se],xe=b[ae]=G?kn(b[ae]):Wt(b[ae]);if($n(he,xe))v(he,xe,k,null,P,z,Y,V,G);else break;se--,ae--}if(j>se){if(j<=ae){const he=ae+1,xe=he<le?b[he].el:L;for(;j<=ae;)v(null,b[j]=G?kn(b[j]):Wt(b[j]),k,xe,P,z,Y,V,G),j++}}else if(j>ae)for(;j<=se;)mt(g[j],P,z,!0),j++;else{const he=j,xe=j,He=new Map;for(j=xe;j<=ae;j++){const pt=b[j]=G?kn(b[j]):Wt(b[j]);pt.key!=null&&(He.has(pt.key)&&N("Duplicate keys found during update:",JSON.stringify(pt.key),"Make sure keys are unique."),He.set(pt.key,j))}let Re,Ze=0;const Vt=ae-xe+1;let Bs=!1,nc=0;const Ks=new Array(Vt);for(j=0;j<Vt;j++)Ks[j]=0;for(j=he;j<=se;j++){const pt=g[j];if(Ze>=Vt){mt(pt,P,z,!0);continue}let Jt;if(pt.key!=null)Jt=He.get(pt.key);else for(Re=xe;Re<=ae;Re++)if(Ks[Re-xe]===0&&$n(pt,b[Re])){Jt=Re;break}Jt===void 0?mt(pt,P,z,!0):(Ks[Jt-xe]=j+1,Jt>=nc?nc=Jt:Bs=!0,v(pt,b[Jt],k,null,P,z,Y,V,G),Ze++)}const sc=Bs?b8(Ks):Os;for(Re=sc.length-1,j=Vt-1;j>=0;j--){const pt=xe+j,Jt=b[pt],lc=pt+1<le?b[pt+1].el:L;Ks[j]===0?v(null,Jt,k,lc,P,z,Y,V,G):Bs&&(Re<0||j!==sc[Re]?at(Jt,k,lc,2):Re--)}}},at=(g,b,k,L,P=null)=>{const{el:z,type:Y,transition:V,children:G,shapeFlag:j}=g;if(j&6){at(g.component.subTree,b,k,L);return}if(j&128){g.suspense.move(b,k,L);return}if(j&64){Y.move(g,b,k,De);return}if(Y===Le){l(z,b,k);for(let se=0;se<G.length;se++)at(G[se],b,k,L);l(g.anchor,b,k);return}if(Y===Ao){E(g,b,k);return}if(L!==2&&j&1&&V)if(L===0)V.beforeEnter(z),l(z,b,k),ot(()=>V.enter(z),P);else{const{leave:se,delayLeave:ae,afterLeave:he}=V,xe=()=>l(z,b,k),He=()=>{se(z,()=>{xe(),he&&he()})};ae?ae(z,xe,He):He()}else l(z,b,k)},mt=(g,b,k,L=!1,P=!1)=>{const{type:z,props:Y,ref:V,children:G,dynamicChildren:j,shapeFlag:le,patchFlag:se,dirs:ae}=g;if(V!=null&&ha(V,null,k,g,!0),le&256){b.ctx.deactivate(g);return}const he=le&1&&ae,xe=!Ls(g);let He;if(xe&&(He=Y&&Y.onVnodeBeforeUnmount)&&Tt(He,b,g),le&6)ee(g.component,k,L);else{if(le&128){g.suspense.unmount(k,L);return}he&&Gn(g,null,b,"beforeUnmount"),le&64?g.type.remove(g,b,k,P,De,L):j&&(z!==Le||se>0&&se&64)?J(j,b,k,!1,!0):(z===Le&&se&384||!P&&le&16)&&J(G,b,k),L&&An(g)}(xe&&(He=Y&&Y.onVnodeUnmounted)||he)&&ot(()=>{He&&Tt(He,b,g),he&&Gn(g,null,b,"unmounted")},k)},An=g=>{const{type:b,el:k,anchor:L,transition:P}=g;if(b===Le){g.patchFlag>0&&g.patchFlag&2048&&P&&!P.persisted?g.children.forEach(Y=>{Y.type===st?o(Y.el):An(Y)}):S(k,L);return}if(b===Ao){$(g);return}const z=()=>{o(k),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(g.shapeFlag&1&&P&&!P.persisted){const{leave:Y,delayLeave:V}=P,G=()=>Y(k,z);V?V(g.el,z,G):G()}else z()},S=(g,b)=>{let k;for(;g!==b;)k=y(g),o(g),g=k;o(b)},ee=(g,b,k)=>{g.type.__hmrId&&vm(g);const{bum:L,scope:P,update:z,subTree:Y,um:V}=g;L&&Sn(L),P.stop(),z&&(z.active=!1,mt(Y,g,b,k)),V&&ot(V,b),ot(()=>{g.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve()),Cm(g)},J=(g,b,k,L=!1,P=!1,z=0)=>{for(let Y=z;Y<g.length;Y++)mt(g[Y],b,k,L,P)},ne=g=>g.shapeFlag&6?ne(g.component.subTree):g.shapeFlag&128?g.suspense.next():y(g.anchor||g.el),Be=(g,b,k)=>{g==null?b._vnode&&mt(b._vnode,null,null,!0):v(b._vnode||null,g,b,null,null,null,k),fc(),Xu(),b._vnode=g},De={p:v,um:mt,m:at,r:An,mt:Se,mc:H,pc:be,pbc:pe,n:ne,o:t};let ye,ue;return n&&([ye,ue]=n(De)),{render:Be,hydrate:ye,createApp:m8(Be,ye)}}function Kn({effect:t,update:n},s){t.allowRecurse=n.allowRecurse=s}function fl(t,n,s=!1){const l=t.children,o=n.children;if(ie(l)&&ie(o))for(let r=0;r<l.length;r++){const a=l[r];let i=o[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=o[r]=kn(o[r]),i.el=a.el),s||fl(a,i)),i.type===Yl&&(i.el=a.el),i.type===st&&!i.el&&(i.el=a.el)}}function b8(t){const n=t.slice(),s=[0];let l,o,r,a,i;const c=t.length;for(l=0;l<c;l++){const p=t[l];if(p!==0){if(o=s[s.length-1],t[o]<p){n[l]=o,s.push(l);continue}for(r=0,a=s.length-1;r<a;)i=r+a>>1,t[s[i]]<p?r=i+1:a=i;p<t[s[r]]&&(r>0&&(n[l]=s[r-1]),s[r]=l)}}for(r=s.length,a=s[r-1];r-- >0;)s[r]=a,a=n[a];return s}const A8=t=>t.__isTeleport,Is=t=>t&&(t.disabled||t.disabled===""),Ec=t=>typeof SVGElement<"u"&&t instanceof SVGElement,ma=(t,n)=>{const s=t&&t.to;if(qe(s))if(n){const l=n(s);return l||N(`Failed to locate Teleport target with selector "${s}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),l}else return N("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!s&&!Is(t)&&N(`Invalid Teleport target: ${s}`),s},w8={__isTeleport:!0,process(t,n,s,l,o,r,a,i,c,p){const{mc:u,pc:d,pbc:y,o:{insert:m,querySelector:h,createText:v,createComment:_}}=p,C=Is(n.props);let{shapeFlag:A,children:w,dynamicChildren:E}=n;if(Tn&&(c=!1,E=null),t==null){const $=n.el=_("teleport start"),M=n.anchor=_("teleport end");m($,s,l),m(M,s,l);const T=n.target=ma(n.props,h),D=n.targetAnchor=v("");T?(m(D,T),a=a||Ec(T)):C||N("Invalid Teleport target on mount:",T,`(${typeof T})`);const H=(te,pe)=>{A&16&&u(w,te,pe,o,r,a,i,c)};C?H(s,M):T&&H(T,D)}else{n.el=t.el;const $=n.anchor=t.anchor,M=n.target=t.target,T=n.targetAnchor=t.targetAnchor,D=Is(t.props),H=D?s:M,te=D?$:T;if(a=a||Ec(M),E?(y(t.dynamicChildren,E,H,o,r,a,i),fl(t,n,!0)):c||d(t,n,H,te,o,r,a,i,!1),C)D||po(n,s,$,p,1);else if((n.props&&n.props.to)!==(t.props&&t.props.to)){const pe=n.target=ma(n.props,h);pe?po(n,pe,null,p,0):N("Invalid Teleport target on update:",M,`(${typeof M})`)}else D&&po(n,M,T,p,1)}Ed(n)},remove(t,n,s,l,{um:o,o:{remove:r}},a){const{shapeFlag:i,children:c,anchor:p,targetAnchor:u,target:d,props:y}=t;if(d&&r(u),(a||!Is(y))&&(r(p),i&16))for(let m=0;m<c.length;m++){const h=c[m];o(h,n,s,!0,!!h.dynamicChildren)}},move:po,hydrate:B8};function po(t,n,s,{o:{insert:l},m:o},r=2){r===0&&l(t.targetAnchor,n,s);const{el:a,anchor:i,shapeFlag:c,children:p,props:u}=t,d=r===2;if(d&&l(a,n,s),(!d||Is(u))&&c&16)for(let y=0;y<p.length;y++)o(p[y],n,s,2);d&&l(i,n,s)}function B8(t,n,s,l,o,r,{o:{nextSibling:a,parentNode:i,querySelector:c}},p){const u=n.target=ma(n.props,c);if(u){const d=u._lpa||u.firstChild;if(n.shapeFlag&16)if(Is(n.props))n.anchor=p(a(t),n,i(t),s,l,o,r),n.targetAnchor=d;else{n.anchor=a(t);let y=d;for(;y;)if(y=a(y),y&&y.nodeType===8&&y.data==="teleport anchor"){n.targetAnchor=y,u._lpa=n.targetAnchor&&a(n.targetAnchor);break}p(d,n,u,s,l,o,r)}Ed(n)}return n.anchor&&a(n.anchor)}const C8=w8;function Ed(t){const n=t.ctx;if(n&&n.ut){let s=t.children[0].el;for(;s!==t.targetAnchor;)s.nodeType===1&&s.setAttribute("data-v-owner",n.uid),s=s.nextSibling;n.ut()}}const Le=Symbol("Fragment"),Yl=Symbol("Text"),st=Symbol("Comment"),Ao=Symbol("Static"),yl=[];let zt=null;function B(t=!1){yl.push(zt=t?null:[])}function x8(){yl.pop(),zt=yl[yl.length-1]||null}let Fl=1;function kc(t){Fl+=t}function kd(t){return t.dynamicChildren=Fl>0?zt||Os:null,x8(),Fl>0&&zt&&zt.push(t),t}function X(t,n,s,l,o,r){return kd(e(t,n,s,l,o,r,!0))}function q(t,n,s,l,o){return kd(R(t,n,s,l,o,!0))}function qn(t){return t?t.__v_isVNode===!0:!1}function $n(t,n){return n.shapeFlag&6&&Ds.has(n.type)?(t.shapeFlag&=-257,n.shapeFlag&=-513,!1):t.type===n.type&&t.key===n.key}const E8=(...t)=>k8(...t),pr="__vInternal",Dd=({key:t})=>t??null,wo=({ref:t,ref_key:n,ref_for:s})=>t!=null?qe(t)||Oe(t)||de(t)?{i:tt,r:t,k:n,f:!!s}:t:null;function e(t,n=null,s=null,l=0,o=null,r=t===Le?0:1,a=!1,i=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:n,key:n&&Dd(n),ref:n&&wo(n),scopeId:or,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:l,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:tt};return i?(bi(c,s),r&128&&t.normalize(c)):s&&(c.shapeFlag|=qe(s)?8:16),c.key!==c.key&&N("VNode created with invalid key (NaN). VNode type:",c.type),Fl>0&&!a&&zt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&zt.push(c),c}const R=E8;function k8(t,n=null,s=null,l=0,o=null,r=!1){if((!t||t===Gm)&&(t||N(`Invalid vnode type when creating vnode: ${t}.`),t=st),qn(t)){const i=Ut(t,n,!0);return s&&bi(i,s),Fl>0&&!r&&zt&&(i.shapeFlag&6?zt[zt.indexOf(t)]=i:zt.push(i)),i.patchFlag|=-2,i}if(Od(t)&&(t=t.__vccOpts),n){n=oe(n);let{class:i,style:c}=n;i&&!qe(i)&&(n.class=Je(i)),Me(c)&&(Oo(c)&&!ie(c)&&(c=ze({},c)),n.style=nt(c))}const a=qe(t)?1:rd(t)?128:A8(t)?64:Me(t)?4:de(t)?2:0;return a&4&&Oo(t)&&(t=fe(t),N("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,t)),e(t,n,s,l,o,a,r,!0)}function oe(t){return t?Oo(t)||pr in t?ze({},t):t:null}function Ut(t,n,s=!1){const{props:l,ref:o,patchFlag:r,children:a}=t,i=n?Ye(l||{},n):l;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:i,key:i&&Dd(i),ref:n&&n.ref?s&&o?ie(o)?o.concat(wo(n)):[o,wo(n)]:wo(n):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:r===-1&&ie(a)?a.map(Sd):a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:n&&t.type!==Le?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ut(t.ssContent),ssFallback:t.ssFallback&&Ut(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Sd(t){const n=Ut(t);return ie(t.children)&&(n.children=t.children.map(Sd)),n}function f(t=" ",n=0){return R(Yl,null,t,n)}function Ae(t="",n=!1){return n?(B(),q(st,null,t)):R(st,null,t)}function Wt(t){return t==null||typeof t=="boolean"?R(st):ie(t)?R(Le,null,t.slice()):typeof t=="object"?kn(t):R(Yl,null,String(t))}function kn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ut(t)}function bi(t,n){let s=0;const{shapeFlag:l}=t;if(n==null)n=null;else if(ie(n))s=16;else if(typeof n=="object")if(l&65){const o=n.default;o&&(o._c&&(o._d=!1),bi(t,o()),o._c&&(o._d=!0));return}else{s=32;const o=n._;!o&&!(pr in n)?n._ctx=tt:o===3&&tt&&(tt.slots._===1?n._=1:(n._=2,t.patchFlag|=1024))}else de(n)?(n={default:n,_ctx:tt},s=32):(n=String(n),l&64?(s=16,n=[f(n)]):s=8);t.children=n,t.shapeFlag|=s}function Ye(...t){const n={};for(let s=0;s<t.length;s++){const l=t[s];for(const o in l)if(o==="class")n.class!==l.class&&(n.class=Je([n.class,l.class]));else if(o==="style")n.style=nt([n.style,l.style]);else if(Wl(o)){const r=n[o],a=l[o];a&&r!==a&&!(ie(r)&&r.includes(a))&&(n[o]=r?[].concat(r,a):a)}else o!==""&&(n[o]=l[o])}return n}function Tt(t,n,s,l=null){Mt(t,n,7,[s,l])}const D8=xd();let S8=0;function F8(t,n,s){const l=t.type,o=(n?n.appContext:t.appContext)||D8,r={uid:S8++,vnode:t,type:l,parent:n,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new Su(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bd(l,o),emitsOptions:ld(l,o),emit:null,emitted:null,propsDefaults:je,inheritAttrs:l.inheritAttrs,ctx:je,data:je,props:je,attrs:je,slots:je,refs:je,setupState:je,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=Jm(r),r.root=n?n.root:r,r.emit=Dm.bind(null,r),t.ce&&t.ce(r),r}let Ge=null;const wt=()=>Ge||tt,js=t=>{Ge=t,t.scope.on()},ds=()=>{Ge&&Ge.scope.off(),Ge=null},$8=zn("slot,component");function ga(t,n){const s=n.isNativeTag||Cu;($8(t)||s(t))&&N("Do not use built-in or reserved HTML elements as component id: "+t)}function Fd(t){return t.vnode.shapeFlag&4}let $l=!1;function P8(t,n=!1){$l=n;const{props:s,children:l}=t.vnode,o=Fd(t);l8(t,s,o,n),f8(t,l);const r=o?O8(t,n):void 0;return $l=!1,r}function O8(t,n){var s;const l=t.type;{if(l.name&&ga(l.name,t.appContext.config),l.components){const r=Object.keys(l.components);for(let a=0;a<r.length;a++)ga(r[a],t.appContext.config)}if(l.directives){const r=Object.keys(l.directives);for(let a=0;a<r.length;a++)yd(r[a])}l.compilerOptions&&T8()&&N('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}t.accessCache=Object.create(null),t.proxy=tr(new Proxy(t.ctx,gd)),Ym(t);const{setup:o}=l;if(o){const r=t.setupContext=o.length>1?Pd(t):null;js(t),gs();const a=yn(o,t,0,[$s(t.props),r]);if(vs(),ds(),ti(a)){if(a.then(ds,ds),n)return a.then(i=>{Dc(t,i,n)}).catch(i=>{nr(i,t,0)});if(t.asyncDep=a,!t.suspense){const i=(s=l.name)!==null&&s!==void 0?s:"Anonymous";N(`Component <${i}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else Dc(t,a,n)}else $d(t,n)}function Dc(t,n,s){de(n)?t.type.__ssrInlineRender?t.ssrRender=n:t.render=n:Me(n)?(qn(n)&&N("setup() should not return VNodes directly - return a render function instead."),t.devtoolsRawSetupState=n,t.setupState=zu(n),Zm(t)):n!==void 0&&N(`setup() should return an object. Received: ${n===null?"null":typeof n}`),$d(t,s)}let va;const T8=()=>!va;function $d(t,n,s){const l=t.type;if(!t.render){if(!n&&va&&!l.render){const o=l.template||vi(t).template;if(o){rn(t,"compile");const{isCustomElement:r,compilerOptions:a}=t.appContext.config,{delimiters:i,compilerOptions:c}=l,p=ze(ze({isCustomElement:r,delimiters:i},a),c);l.render=va(o,p),an(t,"compile")}}t.render=l.render||_t}js(t),gs(),Qm(t),vs(),ds(),!l.render&&t.render===_t&&!n&&(l.template?N('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):N("Component is missing template or render function."))}function L8(t){return new Proxy(t.attrs,{get(n,s){return Lo(),At(t,"get","$attrs"),n[s]},set(){return N("setupContext.attrs is readonly."),!1},deleteProperty(){return N("setupContext.attrs is readonly."),!1}})}function Pd(t){const n=l=>{if(t.exposed&&N("expose() should be called only once per setup()."),l!=null){let o=typeof l;o==="object"&&(ie(l)?o="array":Oe(l)&&(o="ref")),o!=="object"&&N(`expose() should be passed a plain object, received ${o}.`)}t.exposed=l||{}};let s;return Object.freeze({get attrs(){return s||(s=L8(t))},get slots(){return $s(t.slots)},get emit(){return(l,...o)=>t.emit(l,...o)},expose:n})}function ur(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(zu(tr(t.exposed)),{get(n,s){if(s in n)return n[s];if(s in us)return us[s](t)},has(n,s){return s in n||s in us}}))}const I8=/(?:^|[-_])(\w)/g,M8=t=>t.replace(I8,n=>n.toUpperCase()).replace(/[-_]/g,"");function Pl(t,n=!0){return de(t)?t.displayName||t.name:t.name||n&&t.__name}function dr(t,n,s=!1){let l=Pl(n);if(!l&&n.__file){const o=n.__file.match(/([^/\\]+)\.\w+$/);o&&(l=o[1])}if(!l&&t&&t.parent){const o=r=>{for(const a in r)if(r[a]===n)return a};l=o(t.components||t.parent.type.components)||o(t.appContext.components)}return l?M8(l):s?"App":"Anonymous"}function Od(t){return de(t)&&"__vccOpts"in t}const F=(t,n)=>rm(t,n,$l);function N8(){return R8().slots}function R8(){const t=wt();return t||N("useContext() called without active instance."),t.setupContext||(t.setupContext=Pd(t))}function Ft(t,n,s){const l=arguments.length;return l===2?Me(n)&&!ie(n)?qn(n)?R(t,null,[n]):R(t,n):R(t,null,n):(l>3?s=Array.prototype.slice.call(arguments,2):l===3&&qn(s)&&(s=[s]),R(t,n,s))}const j8=Symbol("ssrContext"),V8=()=>{{const t=I(j8);return t||N("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function Sr(t){return!!(t&&t.__v_isShallow)}function H8(){if(typeof window>"u")return;const t={style:"color:#3ba776"},n={style:"color:#0b1bc9"},s={style:"color:#b62e24"},l={style:"color:#9d288c"},o={header(d){return Me(d)?d.__isVue?["div",t,"VueInstance"]:Oe(d)?["div",{},["span",t,u(d)],"<",i(d.value),">"]:cs(d)?["div",{},["span",t,Sr(d)?"ShallowReactive":"Reactive"],"<",i(d),`>${Hn(d)?" (readonly)":""}`]:Hn(d)?["div",{},["span",t,Sr(d)?"ShallowReadonly":"Readonly"],"<",i(d),">"]:null:null},hasBody(d){return d&&d.__isVue},body(d){if(d&&d.__isVue)return["div",{},...r(d.$)]}};function r(d){const y=[];d.type.props&&d.props&&y.push(a("props",fe(d.props))),d.setupState!==je&&y.push(a("setup",d.setupState)),d.data!==je&&y.push(a("data",fe(d.data)));const m=c(d,"computed");m&&y.push(a("computed",m));const h=c(d,"inject");return h&&y.push(a("injected",h)),y.push(["div",{},["span",{style:l.style+";opacity:0.66"},"$ (internal): "],["object",{object:d}]]),y}function a(d,y){return y=ze({},y),Object.keys(y).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},d],["div",{style:"padding-left:1.25em"},...Object.keys(y).map(m=>["div",{},["span",l,m+": "],i(y[m],!1)])]]:["span",{}]}function i(d,y=!0){return typeof d=="number"?["span",n,d]:typeof d=="string"?["span",s,JSON.stringify(d)]:typeof d=="boolean"?["span",l,d]:Me(d)?["object",{object:y?fe(d):d}]:["span",s,String(d)]}function c(d,y){const m=d.type;if(de(m))return;const h={};for(const v in d.ctx)p(m,v,y)&&(h[v]=d.ctx[v]);return h}function p(d,y,m){const h=d[m];if(ie(h)&&h.includes(y)||Me(h)&&y in h||d.extends&&p(d.extends,y,m)||d.mixins&&d.mixins.some(v=>p(v,y,m)))return!0}function u(d){return Sr(d)?"ShallowRef":d.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(o):window.devtoolsFormatters=[o]}const Ro="3.2.47",q8="http://www.w3.org/2000/svg",ts=typeof document<"u"?document:null,Sc=ts&&ts.createElement("template"),W8={insert:(t,n,s)=>{n.insertBefore(t,s||null)},remove:t=>{const n=t.parentNode;n&&n.removeChild(t)},createElement:(t,n,s,l)=>{const o=n?ts.createElementNS(q8,t):ts.createElement(t,s?{is:s}:void 0);return t==="select"&&l&&l.multiple!=null&&o.setAttribute("multiple",l.multiple),o},createText:t=>ts.createTextNode(t),createComment:t=>ts.createComment(t),setText:(t,n)=>{t.nodeValue=n},setElementText:(t,n)=>{t.textContent=n},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ts.querySelector(t),setScopeId(t,n){t.setAttribute(n,"")},insertStaticContent(t,n,s,l,o,r){const a=s?s.previousSibling:n.lastChild;if(o&&(o===r||o.nextSibling))for(;n.insertBefore(o.cloneNode(!0),s),!(o===r||!(o=o.nextSibling)););else{Sc.innerHTML=l?`<svg>${t}</svg>`:t;const i=Sc.content;if(l){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}n.insertBefore(i,s)}return[a?a.nextSibling:n.firstChild,s?s.previousSibling:n.lastChild]}};function z8(t,n,s){const l=t._vtc;l&&(n=(n?[n,...l]:[...l]).join(" ")),n==null?t.removeAttribute("class"):s?t.setAttribute("class",n):t.className=n}function U8(t,n,s){const l=t.style,o=qe(s);if(s&&!o){if(n&&!qe(n))for(const r in n)s[r]==null&&_a(l,r,"");for(const r in s)_a(l,r,s[r])}else{const r=l.display;o?n!==s&&(l.cssText=s):n&&t.removeAttribute("style"),"_vod"in t&&(l.display=r)}}const G8=/[^\\];\s*$/,Fc=/\s*!important$/;function _a(t,n,s){if(ie(s))s.forEach(l=>_a(t,n,l));else if(s==null&&(s=""),G8.test(s)&&N(`Unexpected semicolon at the end of '${n}' style value: '${s}'`),n.startsWith("--"))t.setProperty(n,s);else{const l=K8(t,n);Fc.test(s)?t.setProperty(hn(l),s.replace(Fc,""),"important"):t[l]=s}}const $c=["Webkit","Moz","ms"],Fr={};function K8(t,n){const s=Fr[n];if(s)return s;let l=nn(n);if(l!=="filter"&&l in t)return Fr[n]=l;l=hs(l);for(let o=0;o<$c.length;o++){const r=$c[o]+l;if(r in t)return Fr[n]=r}return n}const Pc="http://www.w3.org/1999/xlink";function J8(t,n,s,l,o){if(l&&n.startsWith("xlink:"))s==null?t.removeAttributeNS(Pc,n.slice(6,n.length)):t.setAttributeNS(Pc,n,s);else{const r=yh(n);s==null||r&&!wu(s)?t.removeAttribute(n):t.setAttribute(n,r?"":s)}}function Y8(t,n,s,l,o,r,a){if(n==="innerHTML"||n==="textContent"){l&&a(l,o,r),t[n]=s??"";return}if(n==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=s;const c=s??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),s==null&&t.removeAttribute(n);return}let i=!1;if(s===""||s==null){const c=typeof t[n];c==="boolean"?s=wu(s):s==null&&c==="string"?(s="",i=!0):c==="number"&&(s=0,i=!0)}try{t[n]=s}catch(c){i||N(`Failed setting prop "${n}" on <${t.tagName.toLowerCase()}>: value ${s} is invalid.`,c)}i&&t.removeAttribute(n)}function Ss(t,n,s,l){t.addEventListener(n,s,l)}function Z8(t,n,s,l){t.removeEventListener(n,s,l)}function X8(t,n,s,l,o=null){const r=t._vei||(t._vei={}),a=r[n];if(l&&a)a.value=l;else{const[i,c]=Q8(n);if(l){const p=r[n]=ng(l,o);Ss(t,i,p,c)}else a&&(Z8(t,i,a,c),r[n]=void 0)}}const Oc=/(?:Once|Passive|Capture)$/;function Q8(t){let n;if(Oc.test(t)){n={};let l;for(;l=t.match(Oc);)t=t.slice(0,t.length-l[0].length),n[l[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):hn(t.slice(2)),n]}let $r=0;const eg=Promise.resolve(),tg=()=>$r||(eg.then(()=>$r=0),$r=Date.now());function ng(t,n){const s=l=>{if(!l._vts)l._vts=Date.now();else if(l._vts<=s.attached)return;Mt(sg(l,s.value),n,5,[l])};return s.value=t,s.attached=tg(),s}function sg(t,n){if(ie(n)){const s=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{s.call(t),t._stopped=!0},n.map(l=>o=>!o._stopped&&l&&l(o))}else return n}const Tc=/^on[a-z]/,lg=(t,n,s,l,o=!1,r,a,i,c)=>{n==="class"?z8(t,l,o):n==="style"?U8(t,s,l):Wl(n)?Do(n)||X8(t,n,s,l,a):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):og(t,n,l,o))?Y8(t,n,l,r,a,i,c):(n==="true-value"?t._trueValue=l:n==="false-value"&&(t._falseValue=l),J8(t,n,l,o))};function og(t,n,s,l){return l?!!(n==="innerHTML"||n==="textContent"||n in t&&Tc.test(n)&&de(s)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&t.tagName==="INPUT"||n==="type"&&t.tagName==="TEXTAREA"||Tc.test(n)&&qe(s)?!1:n in t}const Bn="transition",Ys="animation",Td={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},rg=ze({},Mm.props,Td),Jn=(t,n=[])=>{ie(t)?t.forEach(s=>s(...n)):t&&t(...n)},Lc=t=>t?ie(t)?t.some(n=>n.length>1):t.length>1:!1;function ag(t){const n={};for(const Z in t)Z in Td||(n[Z]=t[Z]);if(t.css===!1)return n;const{name:s="v",type:l,duration:o,enterFromClass:r=`${s}-enter-from`,enterActiveClass:a=`${s}-enter-active`,enterToClass:i=`${s}-enter-to`,appearFromClass:c=r,appearActiveClass:p=a,appearToClass:u=i,leaveFromClass:d=`${s}-leave-from`,leaveActiveClass:y=`${s}-leave-active`,leaveToClass:m=`${s}-leave-to`}=t,h=ig(o),v=h&&h[0],_=h&&h[1],{onBeforeEnter:C,onEnter:A,onEnterCancelled:w,onLeave:E,onLeaveCancelled:$,onBeforeAppear:M=C,onAppear:T=A,onAppearCancelled:D=w}=n,H=(Z,we,Te)=>{xn(Z,we?u:i),xn(Z,we?p:a),Te&&Te()},te=(Z,we)=>{Z._isLeaving=!1,xn(Z,d),xn(Z,m),xn(Z,y),we&&we()},pe=Z=>(we,Te)=>{const Se=Z?T:A,Ve=()=>H(we,Z,Te);Jn(Se,[we,Ve]),Ic(()=>{xn(we,Z?c:r),cn(we,Z?u:i),Lc(Se)||Mc(we,l,v,Ve)})};return ze(n,{onBeforeEnter(Z){Jn(C,[Z]),cn(Z,r),cn(Z,a)},onBeforeAppear(Z){Jn(M,[Z]),cn(Z,c),cn(Z,p)},onEnter:pe(!1),onAppear:pe(!0),onLeave(Z,we){Z._isLeaving=!0;const Te=()=>te(Z,we);cn(Z,d),Id(),cn(Z,y),Ic(()=>{Z._isLeaving&&(xn(Z,d),cn(Z,m),Lc(E)||Mc(Z,l,_,Te))}),Jn(E,[Z,Te])},onEnterCancelled(Z){H(Z,!1),Jn(w,[Z])},onAppearCancelled(Z){H(Z,!0),Jn(D,[Z])},onLeaveCancelled(Z){te(Z),Jn($,[Z])}})}function ig(t){if(t==null)return null;if(Me(t))return[Pr(t.enter),Pr(t.leave)];{const n=Pr(t);return[n,n]}}function Pr(t){const n=Ah(t);return um(n,"<transition> explicit duration"),n}function cn(t,n){n.split(/\s+/).forEach(s=>s&&t.classList.add(s)),(t._vtc||(t._vtc=new Set)).add(n)}function xn(t,n){n.split(/\s+/).forEach(l=>l&&t.classList.remove(l));const{_vtc:s}=t;s&&(s.delete(n),s.size||(t._vtc=void 0))}function Ic(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let cg=0;function Mc(t,n,s,l){const o=t._endId=++cg,r=()=>{o===t._endId&&l()};if(s)return setTimeout(r,s);const{type:a,timeout:i,propCount:c}=Ld(t,n);if(!a)return l();const p=a+"end";let u=0;const d=()=>{t.removeEventListener(p,y),r()},y=m=>{m.target===t&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},i+1),t.addEventListener(p,y)}function Ld(t,n){const s=window.getComputedStyle(t),l=h=>(s[h]||"").split(", "),o=l(`${Bn}Delay`),r=l(`${Bn}Duration`),a=Nc(o,r),i=l(`${Ys}Delay`),c=l(`${Ys}Duration`),p=Nc(i,c);let u=null,d=0,y=0;n===Bn?a>0&&(u=Bn,d=a,y=r.length):n===Ys?p>0&&(u=Ys,d=p,y=c.length):(d=Math.max(a,p),u=d>0?a>p?Bn:Ys:null,y=u?u===Bn?r.length:c.length:0);const m=u===Bn&&/\b(transform|all)(,|$)/.test(l(`${Bn}Property`).toString());return{type:u,timeout:d,propCount:y,hasTransform:m}}function Nc(t,n){for(;t.length<n.length;)t=t.concat(t);return Math.max(...n.map((s,l)=>Rc(s)+Rc(t[l])))}function Rc(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Id(){return document.body.offsetHeight}const Md=new WeakMap,Nd=new WeakMap,Rd={name:"TransitionGroup",props:ze({},rg,{tag:String,moveClass:String}),setup(t,{slots:n}){const s=wt(),l=id();let o,r;return ar(()=>{if(!o.length)return;const a=t.moveClass||`${t.name||"v"}-move`;if(!hg(o[0].el,s.vnode.el,a))return;o.forEach(dg),o.forEach(fg);const i=o.filter(yg);Id(),i.forEach(c=>{const p=c.el,u=p.style;cn(p,a),u.transform=u.webkitTransform=u.transitionDuration="";const d=p._moveCb=y=>{y&&y.target!==p||(!y||/transform$/.test(y.propertyName))&&(p.removeEventListener("transitionend",d),p._moveCb=null,xn(p,a))};p.addEventListener("transitionend",d)})}),()=>{const a=fe(t),i=ag(a);let c=a.tag||Le;o=r,r=n.default?mi(n.default()):[];for(let p=0;p<r.length;p++){const u=r[p];u.key!=null?Rs(u,Sl(u,i,l,s)):N("<TransitionGroup> children must be keyed.")}if(o)for(let p=0;p<o.length;p++){const u=o[p];Rs(u,Sl(u,i,l,s)),Md.set(u,u.el.getBoundingClientRect())}return R(c,null,r)}}},pg=t=>delete t.mode;Rd.props;const ug=Rd;function dg(t){const n=t.el;n._moveCb&&n._moveCb(),n._enterCb&&n._enterCb()}function fg(t){Nd.set(t,t.el.getBoundingClientRect())}function yg(t){const n=Md.get(t),s=Nd.get(t),l=n.left-s.left,o=n.top-s.top;if(l||o){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${l}px,${o}px)`,r.transitionDuration="0s",t}}function hg(t,n,s){const l=t.cloneNode();t._vtc&&t._vtc.forEach(a=>{a.split(/\s+/).forEach(i=>i&&l.classList.remove(i))}),s.split(/\s+/).forEach(a=>a&&l.classList.add(a)),l.style.display="none";const o=n.nodeType===1?n:n.parentNode;o.appendChild(l);const{hasTransform:r}=Ld(l);return o.removeChild(l),r}const jc=t=>{const n=t.props["onUpdate:modelValue"]||!1;return ie(n)?s=>Sn(n,s):n};function mg(t){t.target.composing=!0}function Vc(t){const n=t.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const gg={created(t,{modifiers:{lazy:n,trim:s,number:l}},o){t._assign=jc(o);const r=l||o.props&&o.props.type==="number";Ss(t,n?"change":"input",a=>{if(a.target.composing)return;let i=t.value;s&&(i=i.trim()),r&&(i=ta(i)),t._assign(i)}),s&&Ss(t,"change",()=>{t.value=t.value.trim()}),n||(Ss(t,"compositionstart",mg),Ss(t,"compositionend",Vc),Ss(t,"change",Vc))},mounted(t,{value:n}){t.value=n??""},beforeUpdate(t,{value:n,modifiers:{lazy:s,trim:l,number:o}},r){if(t._assign=jc(r),t.composing||document.activeElement===t&&t.type!=="range"&&(s||l&&t.value.trim()===n||(o||t.type==="number")&&ta(t.value)===n))return;const a=n??"";t.value!==a&&(t.value=a)}},vg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Hc=(t,n)=>s=>{if(!("key"in s))return;const l=hn(s.key);if(n.some(o=>o===l||vg[o]===l))return t(s)},Ai={beforeMount(t,{value:n},{transition:s}){t._vod=t.style.display==="none"?"":t.style.display,s&&n?s.beforeEnter(t):Zs(t,n)},mounted(t,{value:n},{transition:s}){s&&n&&s.enter(t)},updated(t,{value:n,oldValue:s},{transition:l}){!n!=!s&&(l?n?(l.beforeEnter(t),Zs(t,!0),l.enter(t)):l.leave(t,()=>{Zs(t,!1)}):Zs(t,n))},beforeUnmount(t,{value:n}){Zs(t,n)}};function Zs(t,n){t.style.display=n?t._vod:"none"}const _g=ze({patchProp:lg},W8);let qc;function bg(){return qc||(qc=v8(_g))}const Ag=(...t)=>{const n=bg().createApp(...t);wg(n),Bg(n);const{mount:s}=n;return n.mount=l=>{const o=Cg(l);if(!o)return;const r=n._component;!de(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.innerHTML="";const a=s(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),a},n};function wg(t){Object.defineProperty(t.config,"isNativeTag",{value:n=>Au(n)||dh(n),writable:!1})}function Bg(t){{const n=t.config.isCustomElement;Object.defineProperty(t.config,"isCustomElement",{get(){return n},set(){N("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const s=t.config.compilerOptions,l='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(t.config,"compilerOptions",{get(){return N(l),s},set(){N(l)}})}}function Cg(t){if(qe(t)){const n=document.querySelector(t);return n||N(`Failed to mount app: mount target selector "${t}" returned null.`),n}return window.ShadowRoot&&t instanceof window.ShadowRoot&&t.mode==="closed"&&N('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),t}function xg(){H8()}xg();function ba(t,n={},s){for(const l in t){const o=t[l],r=s?`${s}:${l}`:l;typeof o=="object"&&o!==null?ba(o,n,r):typeof o=="function"&&(n[r]=o)}return n}function Eg(t,n){return t.reduce((s,l)=>s.then(()=>l.apply(void 0,n)),Promise.resolve())}function kg(t,n){return Promise.all(t.map(s=>s.apply(void 0,n)))}function Or(t,n){for(const s of t)s(n)}class Dg{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(n,s,l={}){if(!n||typeof s!="function")return()=>{};const o=n;let r;for(;this._deprecatedHooks[n];)r=this._deprecatedHooks[n],n=r.to;if(r&&!l.allowDeprecated){let a=r.message;a||(a=`${o} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(a)||(console.warn(a),this._deprecatedMessages.add(a))}return this._hooks[n]=this._hooks[n]||[],this._hooks[n].push(s),()=>{s&&(this.removeHook(n,s),s=void 0)}}hookOnce(n,s){let l,o=(...r)=>(typeof l=="function"&&l(),l=void 0,o=void 0,s(...r));return l=this.hook(n,o),l}removeHook(n,s){if(this._hooks[n]){const l=this._hooks[n].indexOf(s);l!==-1&&this._hooks[n].splice(l,1),this._hooks[n].length===0&&delete this._hooks[n]}}deprecateHook(n,s){this._deprecatedHooks[n]=typeof s=="string"?{to:s}:s;const l=this._hooks[n]||[];this._hooks[n]=void 0;for(const o of l)this.hook(n,o)}deprecateHooks(n){Object.assign(this._deprecatedHooks,n);for(const s in n)this.deprecateHook(s,n[s])}addHooks(n){const s=ba(n),l=Object.keys(s).map(o=>this.hook(o,s[o]));return()=>{for(const o of l.splice(0,l.length))o()}}removeHooks(n){const s=ba(n);for(const l in s)this.removeHook(l,s[l])}callHook(n,...s){return this.callHookWith(Eg,n,...s)}callHookParallel(n,...s){return this.callHookWith(kg,n,...s)}callHookWith(n,s,...l){const o=this._before||this._after?{name:s,args:l,context:{}}:void 0;this._before&&Or(this._before,o);const r=n(this._hooks[s]||[],l);return r instanceof Promise?r.finally(()=>{this._after&&o&&Or(this._after,o)}):(this._after&&o&&Or(this._after,o),r)}beforeEach(n){return this._before=this._before||[],this._before.push(n),()=>{const s=this._before.indexOf(n);s!==-1&&this._before.splice(s,1)}}afterEach(n){return this._after=this._after||[],this._after.push(n),()=>{const s=this._after.indexOf(n);s!==-1&&this._after.splice(s,1)}}}function Sg(){return new Dg}function Fg(t){return Array.isArray(t)?t:[t]}const jd=["title","script","style","noscript"],wi=["base","meta","link","style","script","noscript"],$g=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Pg=["base","title","titleTemplate","bodyAttrs","htmlAttrs"],Og=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function Vd(t){let n=9;for(let s=0;s<t.length;)n=Math.imul(n^t.charCodeAt(s++),9**9);return((n^n>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function jo(t){return Vd(`${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([n,s])=>`${n}:${String(s)}`).join(",")}`)}function Tg(t){let n=9;for(const s of t)for(let l=0;l<s.length;)n=Math.imul(n^s.charCodeAt(l++),9**9);return((n^n>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Hd(t,n){const{props:s,tag:l}=t;if(Pg.includes(l))return l;if(l==="link"&&s.rel==="canonical")return"canonical";if(s.charset)return"charset";const o=["id"];l==="meta"&&o.push("name","property","http-equiv");for(const r of o)if(typeof s[r]<"u"){const a=String(s[r]);return n&&!n(a)?!1:`${l}:${r}:${a}`}return!1}const uo=(t,n=!1,s)=>{const{tag:l,$el:o}=t;o&&(Object.entries(l.props).forEach(([r,a])=>{a=String(a);const i=`attr:${r}`;if(r==="class"){if(!a)return;for(const c of a.split(" ")){const p=`${i}:${c}`;s&&s(t,p,()=>o.classList.remove(c)),o.classList.contains(c)||o.classList.add(c)}return}s&&!r.startsWith("data-h-")&&s(t,i,()=>o.removeAttribute(r)),(n||o.getAttribute(r)!==a)&&o.setAttribute(r,a)}),jd.includes(l.tag)&&(l.textContent&&l.textContent!==o.textContent?o.textContent=l.textContent:l.innerHTML&&l.innerHTML!==o.innerHTML&&(o.innerHTML=l.innerHTML)))};let Xs=!1;async function qd(t,n={}){var y,m;const s={shouldRender:!0};if(await t.hooks.callHook("dom:beforeRender",s),!s.shouldRender)return;const l=n.document||t.resolvedOptions.document||window.document,o=(await t.resolveTags()).map(i);if(t.resolvedOptions.experimentalHashHydration&&(Xs=Xs||t._hash||!1,Xs)){const h=Tg(o.map(v=>v.tag._h));if(Xs===h)return;Xs=h}const r=t._popSideEffectQueue();t.headEntries().map(h=>h._sde).forEach(h=>{Object.entries(h).forEach(([v,_])=>{r[v]=_})});const a=(h,v,_)=>{v=`${h.renderId}:${v}`,h.entry&&(h.entry._sde[v]=_),delete r[v]};function i(h){const v=t.headEntries().find(C=>C._i===h._e),_={renderId:h._d||jo(h),$el:null,shouldRender:!0,tag:h,entry:v,markSideEffect:(C,A)=>a(_,C,A)};return _}const c=[],p={body:[],head:[]},u=h=>{t._elMap[h.renderId]=h.$el,c.push(h),a(h,"el",()=>{var v;(v=h.$el)==null||v.remove(),delete t._elMap[h.renderId]})};for(const h of o){if(await t.hooks.callHook("dom:beforeRenderTag",h),!h.shouldRender)continue;const{tag:v}=h;if(v.tag==="title"){l.title=v.textContent||"",c.push(h);continue}if(v.tag==="htmlAttrs"||v.tag==="bodyAttrs"){h.$el=l[v.tag==="htmlAttrs"?"documentElement":"body"],uo(h,!1,a),c.push(h);continue}if(h.$el=t._elMap[h.renderId],!h.$el&&v.key&&(h.$el=l.querySelector(`${(y=v.tagPosition)!=null&&y.startsWith("body")?"body":"head"} > ${v.tag}[data-h-${v._h}]`)),h.$el){h.tag._d&&uo(h),u(h);continue}p[(m=v.tagPosition)!=null&&m.startsWith("body")?"body":"head"].push(h)}const d={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(p).forEach(([h,v])=>{var C;if(!v.length)return;const _=(C=l==null?void 0:l[h])==null?void 0:C.children;if(_){for(const A of[..._].reverse()){const w=A.tagName.toLowerCase();if(!wi.includes(w))continue;const E=A.getAttributeNames().reduce((D,H)=>({...D,[H]:A.getAttribute(H)}),{}),$={tag:w,props:E};A.innerHTML&&($.innerHTML=A.innerHTML);const M=jo($);let T=v.findIndex(D=>(D==null?void 0:D.renderId)===M);if(T===-1){const D=Hd($);T=v.findIndex(H=>(H==null?void 0:H.tag._d)&&H.tag._d===D)}if(T!==-1){const D=v[T];D.$el=A,uo(D),u(D),delete v[T]}}v.forEach(A=>{const w=A.tag.tagPosition||"head";d[w]=d[w]||l.createDocumentFragment(),A.$el||(A.$el=l.createElement(A.tag.tag),uo(A,!0)),d[w].appendChild(A.$el),u(A)})}}),d.head&&l.head.appendChild(d.head),d.bodyOpen&&l.body.insertBefore(d.bodyOpen,l.body.firstChild),d.bodyClose&&l.body.appendChild(d.bodyClose);for(const h of c)await t.hooks.callHook("dom:renderTag",h);Object.values(r).forEach(h=>h())}let Tr=null;async function Wd(t,n={}){function s(){return Tr=null,qd(t,n)}const l=n.delayFn||(o=>setTimeout(o,10));return Tr=Tr||new Promise(o=>l(()=>o(s())))}const Lg=t=>({hooks:{"entries:updated":function(n){if(typeof(t==null?void 0:t.document)>"u"&&typeof window>"u")return;let s=t==null?void 0:t.delayFn;!s&&typeof requestAnimationFrame<"u"&&(s=requestAnimationFrame),Wd(n,{document:(t==null?void 0:t.document)||window.document,delayFn:s})}}});function Ig(t){var n;return((n=t==null?void 0:t.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:n.getAttribute("content"))||!1}const Wc={critical:2,high:9,low:12,base:-1,title:1,meta:10};function zc(t){if(typeof t.tagPriority=="number")return t.tagPriority;if(t.tag==="meta"){if(t.props.charset)return-2;if(t.props["http-equiv"]==="content-security-policy")return 0}const n=t.tagPriority||t.tag;return n in Wc?Wc[n]:10}const Mg=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Ng(){return{hooks:{"tags:resolve":t=>{const n=s=>{var l;return(l=t.tags.find(o=>o._d===s))==null?void 0:l._p};for(const{prefix:s,offset:l}of Mg)for(const o of t.tags.filter(r=>typeof r.tagPriority=="string"&&r.tagPriority.startsWith(s))){const r=n(o.tagPriority.replace(s,""));typeof r<"u"&&(o._p=r+l)}t.tags.sort((s,l)=>s._p-l._p).sort((s,l)=>zc(s)-zc(l))}}}}const Uc=(t,n)=>t==null?n||null:typeof t=="function"?t(n):t.replace("%s",n??""),Rg=()=>({hooks:{"tags:resolve":t=>{const{tags:n}=t;let s=n.findIndex(o=>o.tag==="titleTemplate");const l=n.findIndex(o=>o.tag==="title");if(l!==-1&&s!==-1){const o=Uc(n[s].textContent,n[l].textContent);o!==null?n[l].textContent=o||n[l].textContent:delete n[l]}else if(s!==-1){const o=Uc(n[s].textContent);o!==null&&(n[s].textContent=o,n[s].tag="title",s=-1)}s!==-1&&delete n[s],t.tags=n.filter(Boolean)}}}),jg=()=>({hooks:{"tag:normalise":function({tag:t}){typeof t.props.body<"u"&&(t.tagPosition="bodyClose",delete t.props.body)}}}),zd=typeof window<"u",Vg=()=>({hooks:{"tag:normalise":t=>{var r,a;const{tag:n,entry:s,resolvedOptions:l}=t;l.experimentalHashHydration===!0&&(n._h=jo(n));const o=typeof n.props._dynamic<"u";!wi.includes(n.tag)||!n.key||zd||(a=(r=Gd())==null?void 0:r.resolvedOptions)!=null&&a.document||(s._m==="server"||o)&&(n._h=n._h||jo(n),n.props[`data-h-${n._h}`]="")},"tags:resolve":t=>{t.tags=t.tags.map(n=>(delete n.props._dynamic,n))}}}),Gc=["script","link","bodyAttrs"],Hg=()=>{const t=(n,s)=>{const l={},o={};Object.entries(s.props).forEach(([a,i])=>{a.startsWith("on")&&typeof i=="function"?o[a]=i:l[a]=i});let r;return n==="dom"&&s.tag==="script"&&typeof l.src=="string"&&typeof o.onload<"u"&&(r=l.src,delete l.src),{props:l,eventHandlers:o,delayedSrc:r}};return{hooks:{"ssr:render":function(n){n.tags=n.tags.map(s=>(!Gc.includes(s.tag)||!Object.entries(s.props).find(([l,o])=>l.startsWith("on")&&typeof o=="function")||(s.props=t("ssr",s).props),s))},"dom:beforeRenderTag":function(n){if(!Gc.includes(n.tag.tag)||!Object.entries(n.tag.props).find(([r,a])=>r.startsWith("on")&&typeof a=="function"))return;const{props:s,eventHandlers:l,delayedSrc:o}=t("dom",n.tag);Object.keys(l).length&&(n.tag.props=s,n.tag._eventHandlers=l,n.tag._delayedSrc=o)},"dom:renderTag":function(n){const s=n.$el;if(!n.tag._eventHandlers||!s)return;const l=n.tag.tag==="bodyAttrs"&&typeof window<"u"?window:s;Object.entries(n.tag._eventHandlers).forEach(([o,r])=>{const a=`${n.tag._d||n.tag._p}:${o}`,i=o.slice(2).toLowerCase(),c=`data-h-${i}`;if(n.markSideEffect(a,()=>{}),s.hasAttribute(c))return;const p=r;s.setAttribute(c,""),l.addEventListener(i,p),n.entry&&(n.entry._sde[a]=()=>{l.removeEventListener(i,p),s.removeAttribute(c)})}),n.tag._delayedSrc&&s.setAttribute("src",n.tag._delayedSrc)}}}},qg=["templateParams","htmlAttrs","bodyAttrs"],Wg=t=>{t=t||{};const n=t.dedupeKeys||["hid","vmid","key"];return{hooks:{"tag:normalise":function({tag:s}){n.forEach(o=>{s.props[o]&&(s.key=s.props[o],delete s.props[o])});const l=s.key?`${s.tag}:${s.key}`:Hd(s);l&&(s._d=l)},"tags:resolve":function(s){const l={};s.tags.forEach(r=>{const a=r._d||r._p,i=l[a];if(i){let c=r==null?void 0:r.tagDuplicateStrategy;if(!c&&qg.includes(r.tag)&&(c="merge"),c==="merge"){const u=i.props;["class","style"].forEach(d=>{r.props[d]&&u[d]&&(d==="style"&&!u[d].endsWith(";")&&(u[d]+=";"),r.props[d]=`${u[d]} ${r.props[d]}`)}),l[a].props={...u,...r.props};return}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);return}const p=Object.keys(r.props).length;if((p===0||p===1&&typeof r.props["data-h-key"]<"u")&&!r.innerHTML&&!r.textContent){delete l[a];return}}l[a]=r});const o=[];Object.values(l).forEach(r=>{const a=r._duped;delete r._duped,o.push(r),a&&o.push(...a)}),s.tags=o}}}};function Lr(t,n){const s=(o,r)=>{let a;return r==="pageTitle"||r==="s"?a=n.pageTitle:r.includes(".")?a=r.split(".").reduce((i,c)=>i[c]||"",n):a=n[r],a||""};let l=t.replace(/%(\w+\.+\w+)/g,s).replace(/%(\w+)/g,s).trim();return n.separator&&(l.endsWith(n.separator)&&(l=l.slice(0,-n.separator.length).trim()),l.startsWith(n.separator)&&(l=l.slice(n.separator.length).trim()),l=l.replace(new RegExp(`\\${n.separator}\\s*\\${n.separator}`,"g"),n.separator)),l}function zg(){return{hooks:{"tags:resolve":t=>{var r;const{tags:n}=t,s=(r=n.find(a=>a.tag==="title"))==null?void 0:r.textContent,l=n.findIndex(a=>a.tag==="templateParams"),o=l!==-1?n[l].textContent:{};o.pageTitle=o.pageTitle||s||"";for(const a of n)["titleTemplate","title"].includes(a.tag)&&typeof a.textContent=="string"?a.textContent=Lr(a.textContent,o):a.tag==="meta"&&typeof a.props.content=="string"?a.props.content=Lr(a.props.content,o):a.tag==="script"&&["application/json","application/ld+json"].includes(a.props.type)&&typeof a.innerHTML=="string"&&(a.innerHTML=Lr(a.innerHTML,o));t.tags=n.filter(a=>a.tag!=="templateParams")}}}}let Ud;const Ug=t=>Ud=t,Gd=()=>Ud;async function Gg(t,n){const s={tag:t,props:{}};return["title","titleTemplate","templateParams"].includes(t)?(s.textContent=n instanceof Promise?await n:n,s):typeof n=="string"?["script","noscript","style"].includes(t)?(t==="script"&&(/^(https?:)?\/\//.test(n)||n.startsWith("/"))?s.props.src=n:(s.innerHTML=n,s.key=Vd(n)),s):!1:(s.props=await Jg(t,{...n}),s.props.children&&(s.props.innerHTML=s.props.children),delete s.props.children,Object.keys(s.props).filter(l=>Og.includes(l)).forEach(l=>{(!["innerHTML","textContent"].includes(l)||jd.includes(s.tag))&&(s[l]=s.props[l]),delete s.props[l]}),["innerHTML","textContent"].forEach(l=>{if(s.tag==="script"&&typeof s[l]=="string"&&["application/ld+json","application/json"].includes(s.props.type))try{s[l]=JSON.parse(s[l])}catch{s[l]=""}typeof s[l]=="object"&&(s[l]=JSON.stringify(s[l]))}),s.props.class&&(s.props.class=Kg(s.props.class)),s.props.content&&Array.isArray(s.props.content)?s.props.content.map(l=>({...s,props:{...s.props,content:l}})):s)}function Kg(t){return typeof t=="object"&&!Array.isArray(t)&&(t=Object.keys(t).filter(n=>t[n])),(Array.isArray(t)?t.join(" "):t).split(" ").filter(n=>n.trim()).filter(Boolean).join(" ")}async function Jg(t,n){for(const s of Object.keys(n)){const l=s.startsWith("data-");n[s]instanceof Promise&&(n[s]=await n[s]),String(n[s])==="true"?n[s]=l?"true":"":String(n[s])==="false"&&(l?n[s]="false":delete n[s])}return n}const Yg=10;async function Zg(t){const n=[];return Object.entries(t.resolvedInput).filter(([s,l])=>typeof l<"u"&&$g.includes(s)).forEach(([s,l])=>{const o=Fg(l);n.push(...o.map(r=>Gg(s,r)).flat())}),(await Promise.all(n)).flat().filter(Boolean).map((s,l)=>(s._e=t._i,s._p=(t._i<<Yg)+l,s))}const Xg=()=>[Wg(),Ng(),zg(),Rg(),Vg(),Hg(),jg()],Qg=(t={})=>[Lg({document:t==null?void 0:t.document,delayFn:t==null?void 0:t.domDelayFn})];function ev(t={}){const n=tv({...t,plugins:[...Qg(t),...(t==null?void 0:t.plugins)||[]]});return t.experimentalHashHydration&&n.resolvedOptions.document&&(n._hash=Ig(n.resolvedOptions.document)),Ug(n),n}function tv(t={}){let n=[],s={},l=0;const o=Sg();t!=null&&t.hooks&&o.addHooks(t.hooks),t.plugins=[...Xg(),...(t==null?void 0:t.plugins)||[]],t.plugins.forEach(i=>i.hooks&&o.addHooks(i.hooks)),t.document=t.document||(zd?document:void 0);const r=()=>o.callHook("entries:updated",a),a={resolvedOptions:t,headEntries(){return n},get hooks(){return o},use(i){i.hooks&&o.addHooks(i.hooks)},push(i,c){const p={_i:l++,input:i,_sde:{}};return c!=null&&c.mode&&(p._m=c==null?void 0:c.mode),c!=null&&c.transform&&(p._t=c==null?void 0:c.transform),n.push(p),r(),{dispose(){n=n.filter(u=>u._i!==p._i?!0:(s={...s,...u._sde||{}},u._sde={},r(),!1))},patch(u){n=n.map(d=>(d._i===p._i&&(p.input=d.input=u,r()),d))}}},async resolveTags(){const i={tags:[],entries:[...n]};await o.callHook("entries:resolve",i);for(const c of i.entries){const p=c._t||(u=>u);c.resolvedInput=p(c.resolvedInput||c.input);for(const u of await Zg(c)){const d={tag:u,entry:c,resolvedOptions:a.resolvedOptions};await o.callHook("tag:normalise",d),i.tags.push(d.tag)}}return await o.callHook("tags:resolve",i),i.tags},_popSideEffectQueue(){const i={...s};return s={},i},_elMap:{}};return a.hooks.callHook("init",a),a}function nv(t){return typeof t=="function"?t():x(t)}function Vo(t,n=""){if(t instanceof Promise)return t;const s=nv(t);if(!t||!s)return s;if(Array.isArray(s))return s.map(l=>Vo(l,n));if(typeof s=="object"){let l=!1;const o=Object.fromEntries(Object.entries(s).map(([r,a])=>r==="titleTemplate"||r.startsWith("on")?[r,x(a)]:((typeof a=="function"||Oe(a))&&(l=!0),[r,Vo(a,r)])));return l&&wi.includes(String(n))&&(o._dynamic=!0),o}return s}const sv=Ro.startsWith("3"),lv=typeof window<"u",Kd="usehead";function Bi(){return wt()&&I(Kd)||Gd()}function ov(t){return{install(s){sv&&(s.config.globalProperties.$unhead=t,s.config.globalProperties.$head=t,s.provide(Kd,t))}}.install}function rv(t={}){const n=ev({...t,domDelayFn:s=>setTimeout(()=>rt(()=>s()),10),plugins:[av(),...(t==null?void 0:t.plugins)||[]]});return n.install=ov(n),n}const av=()=>({hooks:{"entries:resolve":function(t){for(const n of t.entries)n.resolvedInput=Vo(n.input)}}});function iv(t,n={}){const s=Bi(),l=K(!1),o=K({});_s(()=>{o.value=l.value?{}:Vo(t)});const r=s.push(o.value,n);return ge(o,i=>{r.patch(i)}),wt()&&(Kl(()=>{r.dispose()}),dd(()=>{l.value=!0}),ud(()=>{l.value=!1})),r}function cv(t,n={}){return Bi().push(t,n)}function Ci(t,n={}){var l;const s=Bi();if(s){const o=lv||!!((l=s.resolvedOptions)!=null&&l.document);return n.mode==="server"&&o||n.mode==="client"&&!o?void 0:o?iv(t,n):cv(t,n)}}const pv=t=>Ci({htmlAttrs:t});function uv(t,n){const s=rv(n||{}),l={unhead:s,install(o){Ro.startsWith("3")&&(o.config.globalProperties.$head=s,o.provide("usehead",s))},use(o){s.use(o)},resolveTags(){return s.resolveTags()},headEntries(){return s.headEntries()},headTags(){return s.resolveTags()},push(o,r){return s.push(o,r)},addEntry(o,r){return s.push(o,r)},addHeadObjs(o,r){return s.push(o,r)},addReactiveEntry(o,r){const a=Ci(o,r);return typeof a<"u"?a.dispose:()=>{}},removeHeadObjs(){},updateDOM(o,r){r?qd(s,{document:o}):Wd(s,{delayFn:a=>setTimeout(()=>a(),50),document:o})},internalHooks:s.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return s.addHeadObjs=l.addHeadObjs,s.updateDOM=l.updateDOM,s.hooks.hook("dom:beforeRender",o=>{for(const r of l.hooks["before:dom"])r()===!1&&(o.shouldRender=!1)}),t&&l.addHeadObjs(t),l}const hl=Symbol("v-click-clicks"),ns=Symbol("v-click-clicks-elements"),Aa=Symbol("v-click-clicks-order-map"),ml=Symbol("v-click-clicks-disabled"),Jd=Symbol("slidev-slide-scale"),W=Symbol("slidev-slidev-context"),dv=Symbol("slidev-route"),fv=Symbol("slidev-slide-context"),es="slidev-vclick-target",Ir="slidev-vclick-hidden",yv="slidev-vclick-fade",Mr="slidev-vclick-hidden-explicitly",Qs="slidev-vclick-current",fo="slidev-vclick-prior",hv=["localhost","127.0.0.1"];let mv=t=>crypto.getRandomValues(new Uint8Array(t)),gv=(t,n,s)=>{let l=(2<<Math.log(t.length-1)/Math.LN2)-1,o=-~(1.6*l*n/t.length);return(r=n)=>{let a="";for(;;){let i=s(o),c=o;for(;c--;)if(a+=t[i[c]&l]||"",a.length===r)return a}}},vv=(t,n=21)=>gv(t,n,mv),_v=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((n,s)=>(s&=63,s<36?n+=s.toString(36):s<62?n+=(s-26).toString(36).toUpperCase():s>62?n+="-":n+="_",n),"");function wa(t,n){if(!t)return!1;const s=t.indexOf(n);return s>=0?(t.splice(s,1),!0):!1}function bv(...t){let n,s,l;t.length===1?(n=0,l=1,[s]=t):[n,s,l=1]=t;const o=[];let r=n;for(;r<s;)o.push(r),r+=l||1;return o}function Av(t){return t!=null}function wv(t,n){return Object.fromEntries(Object.entries(t).map(([s,l])=>n(s,l)).filter(Av))}const pl={theme:"default",title:"Web Vitals",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:`<h2>Slidev Starter Template</h2>
<p>Presentation slides for developers.</p>
<p>Learn more at <a href="https://sli.dev" target="_blank" rel="noopener">Sli.dev</a></p>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",presenter:!0,htmlAttrs:{},background:"#FFF",class:"text-center"},$e=pl,Ln=$e.aspectRatio??16/9,In=$e.canvasWidth??980,xi=Math.ceil(In/Ln),Ei=F(()=>wv($e.themeConfig||{},(t,n)=>[`--slidev-theme-${t}`,n]));function jt(t,n,s){Object.defineProperty(t,n,{value:s,writable:!0,enumerable:!1})}const bs=We({page:0,clicks:0});let Bv=[],Cv=[];jt(bs,"$syncUp",!0);jt(bs,"$syncDown",!0);jt(bs,"$paused",!1);jt(bs,"$onSet",t=>Bv.push(t));jt(bs,"$onPatch",t=>Cv.push(t));jt(bs,"$patch",async()=>!1);function Yd(t,n,s=!1){const l=[];let o=!1,r=!1,a,i;const c=We(n);function p(m){l.push(m)}function u(m,h){c[m]!==h&&(clearTimeout(a),o=!0,c[m]=h,a=setTimeout(()=>o=!1,0))}function d(m){o||(clearTimeout(i),r=!0,Object.entries(m).forEach(([h,v])=>{c[h]=v}),i=setTimeout(()=>r=!1,0))}function y(m){let h;s?s&&window.addEventListener("storage",_=>{_&&_.key===m&&_.newValue&&d(JSON.parse(_.newValue))}):(h=new BroadcastChannel(m),h.addEventListener("message",_=>d(_.data)));function v(){!s&&h&&!r?h.postMessage(fe(c)):s&&!r&&window.localStorage.setItem(m,JSON.stringify(c)),o||l.forEach(_=>_(c))}if(ge(c,v,{deep:!0}),s){const _=window.localStorage.getItem(m);_&&d(JSON.parse(_))}}return{init:y,onPatch:p,patch:u,state:c}}const{init:xv,onPatch:Ev,patch:el,state:Nr}=Yd(bs,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),As=We({});let kv=[],Dv=[];jt(As,"$syncUp",!0);jt(As,"$syncDown",!0);jt(As,"$paused",!1);jt(As,"$onSet",t=>kv.push(t));jt(As,"$onPatch",t=>Dv.push(t));jt(As,"$patch",async()=>!1);const{init:Sv,onPatch:Fv,patch:Zd,state:Ho}=Yd(As,{},!1),$v="modulepreload",Pv=function(t){return"/web-vitails/"+t},Kc={},Mn=function(n,s,l){if(!s||s.length===0)return n();const o=document.getElementsByTagName("link");return Promise.all(s.map(r=>{if(r=Pv(r),r in Kc)return;Kc[r]=!0;const a=r.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(!!l)for(let u=o.length-1;u>=0;u--){const d=o[u];if(d.href===r&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${i}`))return;const p=document.createElement("link");if(p.rel=a?"stylesheet":$v,a||(p.as="script",p.crossOrigin=""),p.href=r,document.head.appendChild(p),a)return new Promise((u,d)=>{p.addEventListener("load",u),p.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>n())};var Jc;const Gt=typeof window<"u",Ov=t=>typeof t<"u",Tv=Object.prototype.toString,Ol=t=>typeof t=="function",Lv=t=>typeof t=="number",Xd=t=>typeof t=="string",Ba=t=>Tv.call(t)==="[object Object]",Ca=()=>+Date.now(),fs=()=>{},Iv=Gt&&((Jc=window==null?void 0:window.navigator)==null?void 0:Jc.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function et(t){return typeof t=="function"?t():x(t)}function Mv(t,n){function s(...l){return new Promise((o,r)=>{Promise.resolve(t(()=>n.apply(this,l),{fn:n,thisArg:this,args:l})).then(o).catch(r)})}return s}const Qd=t=>t();function Nv(t=Qd){const n=K(!0);function s(){n.value=!1}function l(){n.value=!0}const o=(...r)=>{n.value&&t(...r)};return{isActive:Qt(n),pause:s,resume:l,eventFilter:o}}function Rv(t){return t}function jv(t,n){var s;if(typeof t=="number")return t+n;const l=((s=t.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",o=t.slice(l.length),r=parseFloat(l)+n;return Number.isNaN(r)?t:r+o}function Vv(t,n){let s,l,o;const r=K(!0),a=()=>{r.value=!0,o()};ge(t,a,{flush:"sync"});const i=Ol(n)?n:n.get,c=Ol(n)?void 0:n.set,p=Uu((u,d)=>(l=u,o=d,{get(){return r.value&&(s=i(),r.value=!1),l(),s},set(y){c==null||c(y)}}));return Object.isExtensible(p)&&(p.trigger=a),p}function ln(t){return li()?(Fu(t),!0):!1}function Hv(t){if(!Oe(t))return We(t);const n=new Proxy({},{get(s,l,o){return x(Reflect.get(t.value,l,o))},set(s,l,o){return Oe(t.value[l])&&!Oe(o)?t.value[l].value=o:t.value[l]=o,!0},deleteProperty(s,l){return Reflect.deleteProperty(t.value,l)},has(s,l){return Reflect.has(t.value,l)},ownKeys(){return Object.keys(t.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return We(n)}function ef(t){return typeof t=="function"?F(t):K(t)}var qv=Object.defineProperty,Wv=Object.defineProperties,zv=Object.getOwnPropertyDescriptors,Yc=Object.getOwnPropertySymbols,Uv=Object.prototype.hasOwnProperty,Gv=Object.prototype.propertyIsEnumerable,Zc=(t,n,s)=>n in t?qv(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,Kv=(t,n)=>{for(var s in n||(n={}))Uv.call(n,s)&&Zc(t,s,n[s]);if(Yc)for(var s of Yc(n))Gv.call(n,s)&&Zc(t,s,n[s]);return t},Jv=(t,n)=>Wv(t,zv(n));function Yv(t){if(!Oe(t))return nm(t);const n=Array.isArray(t.value)?new Array(t.value.length):{};for(const s in t.value)n[s]=Uu(()=>({get(){return t.value[s]},set(l){if(Array.isArray(t.value)){const o=[...t.value];o[s]=l,t.value=o}else{const o=Jv(Kv({},t.value),{[s]:l});Object.setPrototypeOf(o,t.value),t.value=o}}}));return n}function fr(t,n=!0){wt()?gn(t):n?t():rt(t)}function tf(t){wt()&&ir(t)}function Zv(t,n=1e3,s={}){const{immediate:l=!0,immediateCallback:o=!1}=s;let r=null;const a=K(!1);function i(){r&&(clearInterval(r),r=null)}function c(){a.value=!1,i()}function p(){const u=et(n);u<=0||(a.value=!0,o&&t(),i(),r=setInterval(t,u))}if(l&&Gt&&p(),Oe(n)||Ol(n)){const u=ge(n,()=>{a.value&&Gt&&p()});ln(u)}return ln(c),{isActive:a,pause:c,resume:p}}function Xv(t,n,s={}){const{immediate:l=!0}=s,o=K(!1);let r=null;function a(){r&&(clearTimeout(r),r=null)}function i(){o.value=!1,a()}function c(...p){a(),o.value=!0,r=setTimeout(()=>{o.value=!1,r=null,t(...p)},et(n))}return l&&(o.value=!0,Gt&&c()),ln(i),{isPending:Qt(o),start:c,stop:i}}function nf(t=!1,n={}){const{truthyValue:s=!0,falsyValue:l=!1}=n,o=Oe(t),r=K(t);function a(i){if(arguments.length)return r.value=i,r.value;{const c=et(s);return r.value=r.value===c?et(l):c,r.value}}return o?a:[r,a]}var Xc=Object.getOwnPropertySymbols,Qv=Object.prototype.hasOwnProperty,e0=Object.prototype.propertyIsEnumerable,t0=(t,n)=>{var s={};for(var l in t)Qv.call(t,l)&&n.indexOf(l)<0&&(s[l]=t[l]);if(t!=null&&Xc)for(var l of Xc(t))n.indexOf(l)<0&&e0.call(t,l)&&(s[l]=t[l]);return s};function n0(t,n,s={}){const l=s,{eventFilter:o=Qd}=l,r=t0(l,["eventFilter"]);return ge(t,Mv(o,n),r)}var s0=Object.defineProperty,l0=Object.defineProperties,o0=Object.getOwnPropertyDescriptors,qo=Object.getOwnPropertySymbols,sf=Object.prototype.hasOwnProperty,lf=Object.prototype.propertyIsEnumerable,Qc=(t,n,s)=>n in t?s0(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,r0=(t,n)=>{for(var s in n||(n={}))sf.call(n,s)&&Qc(t,s,n[s]);if(qo)for(var s of qo(n))lf.call(n,s)&&Qc(t,s,n[s]);return t},a0=(t,n)=>l0(t,o0(n)),i0=(t,n)=>{var s={};for(var l in t)sf.call(t,l)&&n.indexOf(l)<0&&(s[l]=t[l]);if(t!=null&&qo)for(var l of qo(t))n.indexOf(l)<0&&lf.call(t,l)&&(s[l]=t[l]);return s};function c0(t,n,s={}){const l=s,{eventFilter:o}=l,r=i0(l,["eventFilter"]),{eventFilter:a,pause:i,resume:c,isActive:p}=Nv(o);return{stop:n0(t,n,a0(r0({},r),{eventFilter:a})),pause:i,resume:c,isActive:p}}function St(t){var n;const s=et(t);return(n=s==null?void 0:s.$el)!=null?n:s}const lt=Gt?window:void 0,ki=Gt?window.document:void 0,p0=Gt?window.navigator:void 0;function ve(...t){let n,s,l,o;if(Xd(t[0])||Array.isArray(t[0])?([s,l,o]=t,n=lt):[n,s,l,o]=t,!n)return fs;Array.isArray(s)||(s=[s]),Array.isArray(l)||(l=[l]);const r=[],a=()=>{r.forEach(u=>u()),r.length=0},i=(u,d,y,m)=>(u.addEventListener(d,y,m),()=>u.removeEventListener(d,y,m)),c=ge(()=>[St(n),et(o)],([u,d])=>{a(),u&&r.push(...s.flatMap(y=>l.map(m=>i(u,y,m,d))))},{immediate:!0,flush:"post"}),p=()=>{c(),a()};return ln(p),p}let ep=!1;function u0(t,n,s={}){const{window:l=lt,ignore:o=[],capture:r=!0,detectIframe:a=!1}=s;if(!l)return;Iv&&!ep&&(ep=!0,Array.from(l.document.body.children).forEach(y=>y.addEventListener("click",fs)));let i=!0;const c=y=>o.some(m=>{if(typeof m=="string")return Array.from(l.document.querySelectorAll(m)).some(h=>h===y.target||y.composedPath().includes(h));{const h=St(m);return h&&(y.target===h||y.composedPath().includes(h))}}),u=[ve(l,"click",y=>{const m=St(t);if(!(!m||m===y.target||y.composedPath().includes(m))){if(y.detail===0&&(i=!c(y)),!i){i=!0;return}n(y)}},{passive:!0,capture:r}),ve(l,"pointerdown",y=>{const m=St(t);m&&(i=!y.composedPath().includes(m)&&!c(y))},{passive:!0}),a&&ve(l,"blur",y=>{var m;const h=St(t);((m=l.document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(h!=null&&h.contains(l.document.activeElement))&&n(y)})].filter(Boolean);return()=>u.forEach(y=>y())}const d0=t=>typeof t=="function"?t:typeof t=="string"?n=>n.key===t:Array.isArray(t)?n=>t.includes(n.key):()=>!0;function f0(...t){let n,s,l={};t.length===3?(n=t[0],s=t[1],l=t[2]):t.length===2?typeof t[1]=="object"?(n=!0,s=t[0],l=t[1]):(n=t[0],s=t[1]):(n=!0,s=t[0]);const{target:o=lt,eventName:r="keydown",passive:a=!1}=l,i=d0(n);return ve(o,r,p=>{i(p)&&s(p)},a)}function y0(t={}){var n;const{window:s=lt}=t,l=(n=t.document)!=null?n:s==null?void 0:s.document,o=Vv(()=>null,()=>l==null?void 0:l.activeElement);return s&&(ve(s,"blur",r=>{r.relatedTarget===null&&o.trigger()},!0),ve(s,"focus",o.trigger,!0)),o}function Zl(t,n=!1){const s=K(),l=()=>s.value=Boolean(t());return l(),fr(l,n),s}function Fs(t,n={}){const{window:s=lt}=n,l=Zl(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let o;const r=K(!1),a=()=>{o&&("removeEventListener"in o?o.removeEventListener("change",i):o.removeListener(i))},i=()=>{l.value&&(a(),o=s.matchMedia(ef(t).value),r.value=o.matches,"addEventListener"in o?o.addEventListener("change",i):o.addListener(i))};return _s(i),ln(()=>a()),r}const h0={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var m0=Object.defineProperty,tp=Object.getOwnPropertySymbols,g0=Object.prototype.hasOwnProperty,v0=Object.prototype.propertyIsEnumerable,np=(t,n,s)=>n in t?m0(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,_0=(t,n)=>{for(var s in n||(n={}))g0.call(n,s)&&np(t,s,n[s]);if(tp)for(var s of tp(n))v0.call(n,s)&&np(t,s,n[s]);return t};function b0(t,n={}){function s(i,c){let p=t[i];return c!=null&&(p=jv(p,c)),typeof p=="number"&&(p=`${p}px`),p}const{window:l=lt}=n;function o(i){return l?l.matchMedia(i).matches:!1}const r=i=>Fs(`(min-width: ${s(i)})`,n),a=Object.keys(t).reduce((i,c)=>(Object.defineProperty(i,c,{get:()=>r(c),enumerable:!0,configurable:!0}),i),{});return _0({greater(i){return Fs(`(min-width: ${s(i,.1)})`,n)},greaterOrEqual:r,smaller(i){return Fs(`(max-width: ${s(i,-.1)})`,n)},smallerOrEqual(i){return Fs(`(max-width: ${s(i)})`,n)},between(i,c){return Fs(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`,n)},isGreater(i){return o(`(min-width: ${s(i,.1)})`)},isGreaterOrEqual(i){return o(`(min-width: ${s(i)})`)},isSmaller(i){return o(`(max-width: ${s(i,-.1)})`)},isSmallerOrEqual(i){return o(`(max-width: ${s(i)})`)},isInBetween(i,c){return o(`(min-width: ${s(i)}) and (max-width: ${s(c,-.1)})`)}},a)}function A0(t={}){const{navigator:n=p0,read:s=!1,source:l,copiedDuring:o=1500,legacy:r=!1}=t,a=["copy","cut"],i=Zl(()=>n&&"clipboard"in n),c=F(()=>i.value||r),p=K(""),u=K(!1),d=Xv(()=>u.value=!1,o);function y(){i.value?n.clipboard.readText().then(_=>{p.value=_}):p.value=v()}if(c.value&&s)for(const _ of a)ve(_,y);async function m(_=et(l)){c.value&&_!=null&&(i.value?await n.clipboard.writeText(_):h(_),p.value=_,u.value=!0,d.start())}function h(_){const C=document.createElement("textarea");C.value=_??"",C.style.position="absolute",C.style.opacity="0",document.body.appendChild(C),C.select(),document.execCommand("copy"),C.remove()}function v(){var _,C,A;return(A=(C=(_=document==null?void 0:document.getSelection)==null?void 0:_.call(document))==null?void 0:C.toString())!=null?A:""}return{isSupported:c,text:p,copied:u,copy:m}}function w0(t){return JSON.parse(JSON.stringify(t))}const xa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ea="__vueuse_ssr_handlers__";xa[Ea]=xa[Ea]||{};const B0=xa[Ea];function C0(t,n){return B0[t]||n}function x0(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}var E0=Object.defineProperty,sp=Object.getOwnPropertySymbols,k0=Object.prototype.hasOwnProperty,D0=Object.prototype.propertyIsEnumerable,lp=(t,n,s)=>n in t?E0(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,op=(t,n)=>{for(var s in n||(n={}))k0.call(n,s)&&lp(t,s,n[s]);if(sp)for(var s of sp(n))D0.call(n,s)&&lp(t,s,n[s]);return t};const S0={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},rp="vueuse-storage";function F0(t,n,s,l={}){var o;const{flush:r="pre",deep:a=!0,listenToStorageChanges:i=!0,writeDefaults:c=!0,mergeDefaults:p=!1,shallow:u,window:d=lt,eventFilter:y,onError:m=D=>{console.error(D)}}=l,h=(u?sn:K)(n);if(!s)try{s=C0("getDefaultStorage",()=>{var D;return(D=lt)==null?void 0:D.localStorage})()}catch(D){m(D)}if(!s)return h;const v=et(n),_=x0(v),C=(o=l.serializer)!=null?o:S0[_],{pause:A,resume:w}=c0(h,()=>E(h.value),{flush:r,deep:a,eventFilter:y});return d&&i&&(ve(d,"storage",T),ve(d,rp,M)),T(),h;function E(D){try{if(D==null)s.removeItem(t);else{const H=C.write(D),te=s.getItem(t);te!==H&&(s.setItem(t,H),d&&d.dispatchEvent(new CustomEvent(rp,{detail:{key:t,oldValue:te,newValue:H,storageArea:s}})))}}catch(H){m(H)}}function $(D){const H=D?D.newValue:s.getItem(t);if(H==null)return c&&v!==null&&s.setItem(t,C.write(v)),v;if(!D&&p){const te=C.read(H);return Ol(p)?p(te,v):_==="object"&&!Array.isArray(te)?op(op({},v),te):te}else return typeof H!="string"?H:C.read(H)}function M(D){T(D.detail)}function T(D){if(!(D&&D.storageArea!==s)){if(D&&D.key==null){h.value=v;return}if(!(D&&D.key!==t)){A();try{h.value=$(D)}catch(H){m(H)}finally{D?rt(w):w()}}}}}function $0(t){return Fs("(prefers-color-scheme: dark)",t)}var P0=Object.defineProperty,O0=Object.defineProperties,T0=Object.getOwnPropertyDescriptors,ap=Object.getOwnPropertySymbols,L0=Object.prototype.hasOwnProperty,I0=Object.prototype.propertyIsEnumerable,ip=(t,n,s)=>n in t?P0(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,M0=(t,n)=>{for(var s in n||(n={}))L0.call(n,s)&&ip(t,s,n[s]);if(ap)for(var s of ap(n))I0.call(n,s)&&ip(t,s,n[s]);return t},N0=(t,n)=>O0(t,T0(n));function dD(t,n={}){var s,l,o;const r=(s=n.draggingElement)!=null?s:lt,a=(l=n.handle)!=null?l:t,i=K((o=et(n.initialValue))!=null?o:{x:0,y:0}),c=K(),p=h=>n.pointerTypes?n.pointerTypes.includes(h.pointerType):!0,u=h=>{et(n.preventDefault)&&h.preventDefault(),et(n.stopPropagation)&&h.stopPropagation()},d=h=>{var v;if(!p(h)||et(n.exact)&&h.target!==et(t))return;const _=et(t).getBoundingClientRect(),C={x:h.clientX-_.left,y:h.clientY-_.top};((v=n.onStart)==null?void 0:v.call(n,C,h))!==!1&&(c.value=C,u(h))},y=h=>{var v;p(h)&&c.value&&(i.value={x:h.clientX-c.value.x,y:h.clientY-c.value.y},(v=n.onMove)==null||v.call(n,i.value,h),u(h))},m=h=>{var v;p(h)&&c.value&&(c.value=void 0,(v=n.onEnd)==null||v.call(n,i.value,h),u(h))};return Gt&&(ve(a,"pointerdown",d,!0),ve(r,"pointermove",y,!0),ve(r,"pointerup",m,!0)),N0(M0({},Yv(i)),{position:i,isDragging:F(()=>!!c.value),style:F(()=>`left:${i.value.x}px;top:${i.value.y}px;`)})}var cp=Object.getOwnPropertySymbols,R0=Object.prototype.hasOwnProperty,j0=Object.prototype.propertyIsEnumerable,V0=(t,n)=>{var s={};for(var l in t)R0.call(t,l)&&n.indexOf(l)<0&&(s[l]=t[l]);if(t!=null&&cp)for(var l of cp(t))n.indexOf(l)<0&&j0.call(t,l)&&(s[l]=t[l]);return s};function H0(t,n,s={}){const l=s,{window:o=lt}=l,r=V0(l,["window"]);let a;const i=Zl(()=>o&&"ResizeObserver"in o),c=()=>{a&&(a.disconnect(),a=void 0)},p=ge(()=>St(t),d=>{c(),i.value&&o&&d&&(a=new ResizeObserver(n),a.observe(d,r))},{immediate:!0,flush:"post"}),u=()=>{c(),p()};return ln(u),{isSupported:i,stop:u}}function q0(t,n={}){const{immediate:s=!0,window:l=lt}=n,o=K(!1);let r=0,a=null;function i(u){if(!o.value||!l)return;const d=u-r;t({delta:d,timestamp:u}),r=u,a=l.requestAnimationFrame(i)}function c(){!o.value&&l&&(o.value=!0,a=l.requestAnimationFrame(i))}function p(){o.value=!1,a!=null&&l&&(l.cancelAnimationFrame(a),a=null)}return s&&c(),ln(p),{isActive:Qt(o),pause:p,resume:c}}function W0(t,n={width:0,height:0},s={}){const{window:l=lt,box:o="content-box"}=s,r=F(()=>{var c,p;return(p=(c=St(t))==null?void 0:c.namespaceURI)==null?void 0:p.includes("svg")}),a=K(n.width),i=K(n.height);return H0(t,([c])=>{const p=o==="border-box"?c.borderBoxSize:o==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;if(l&&r.value){const u=St(t);if(u){const d=l.getComputedStyle(u);a.value=parseFloat(d.width),i.value=parseFloat(d.height)}}else if(p){const u=Array.isArray(p)?p:[p];a.value=u.reduce((d,{inlineSize:y})=>d+y,0),i.value=u.reduce((d,{blockSize:y})=>d+y,0)}else a.value=c.contentRect.width,i.value=c.contentRect.height},s),ge(()=>St(t),c=>{a.value=c?n.width:0,i.value=c?n.height:0}),{width:a,height:i}}const pp=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function z0(t,n={}){const{document:s=ki,autoExit:l=!1}=n,o=t||(s==null?void 0:s.querySelector("html")),r=K(!1);let a=pp[0];const i=Zl(()=>{if(s){for(const v of pp)if(v[1]in s)return a=v,!0}else return!1;return!1}),[c,p,u,,d]=a;async function y(){i.value&&(s!=null&&s[u]&&await s[p](),r.value=!1)}async function m(){if(!i.value)return;await y();const v=St(o);v&&(await v[c](),r.value=!0)}async function h(){r.value?await y():await m()}return s&&ve(s,d,()=>{r.value=!!(s!=null&&s[u])},!1),l&&ln(y),{isSupported:i,isFullscreen:r,enter:m,exit:y,toggle:h}}function U0(t,n,s={}){const{root:l,rootMargin:o="0px",threshold:r=.1,window:a=lt}=s,i=Zl(()=>a&&"IntersectionObserver"in a);let c=fs;const p=i.value?ge(()=>({el:St(t),root:St(l)}),({el:d,root:y})=>{if(c(),!d)return;const m=new IntersectionObserver(n,{root:y,rootMargin:o,threshold:r});m.observe(d),c=()=>{m.disconnect(),c=fs}},{immediate:!0,flush:"post"}):fs,u=()=>{c(),p()};return ln(u),{isSupported:i,stop:u}}function Kt(t,n,s={}){const{window:l=lt}=s;return F0(t,n,l==null?void 0:l.localStorage,s)}const G0={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function K0(t={}){const{reactive:n=!1,target:s=lt,aliasMap:l=G0,passive:o=!0,onEventFired:r=fs}=t,a=We(new Set),i={toJSON(){return{}},current:a},c=n?We(i):i,p=new Set,u=new Set;function d(v,_){v in c&&(n?c[v]=_:c[v].value=_)}function y(){a.clear();for(const v of u)d(v,!1)}function m(v,_){var C,A;const w=(C=v.key)==null?void 0:C.toLowerCase(),$=[(A=v.code)==null?void 0:A.toLowerCase(),w].filter(Boolean);w&&(_?a.add(w):a.delete(w));for(const M of $)u.add(M),d(M,_);w==="meta"&&!_?(p.forEach(M=>{a.delete(M),d(M,!1)}),p.clear()):typeof v.getModifierState=="function"&&v.getModifierState("Meta")&&_&&[...a,...$].forEach(M=>p.add(M))}ve(s,"keydown",v=>(m(v,!0),r(v)),{passive:o}),ve(s,"keyup",v=>(m(v,!1),r(v)),{passive:o}),ve("blur",y,{passive:!0}),ve("focus",y,{passive:!0});const h=new Proxy(c,{get(v,_,C){if(typeof _!="string")return Reflect.get(v,_,C);if(_=_.toLowerCase(),_ in l&&(_=l[_]),!(_ in c))if(/[+_-]/.test(_)){const w=_.split(/[+_-]/g).map(E=>E.trim());c[_]=F(()=>w.every(E=>x(h[E])))}else c[_]=K(!1);const A=Reflect.get(v,_,C);return n?x(A):A}});return h}function fD(t={}){const{type:n="page",touch:s=!0,resetOnTouchEnds:l=!1,initialValue:o={x:0,y:0},window:r=lt,eventFilter:a}=t,i=K(o.x),c=K(o.y),p=K(null),u=v=>{n==="page"?(i.value=v.pageX,c.value=v.pageY):n==="client"?(i.value=v.clientX,c.value=v.clientY):n==="movement"&&(i.value=v.movementX,c.value=v.movementY),p.value="mouse"},d=()=>{i.value=o.x,c.value=o.y},y=v=>{if(v.touches.length>0){const _=v.touches[0];n==="page"?(i.value=_.pageX,c.value=_.pageY):n==="client"&&(i.value=_.clientX,c.value=_.clientY),p.value="touch"}},m=v=>a===void 0?u(v):a(()=>u(v),{}),h=v=>a===void 0?y(v):a(()=>y(v),{});return r&&(ve(r,"mousemove",m,{passive:!0}),ve(r,"dragover",m,{passive:!0}),s&&n!=="movement"&&(ve(r,"touchstart",h,{passive:!0}),ve(r,"touchmove",h,{passive:!0}),l&&ve(r,"touchend",d,{passive:!0}))),{x:i,y:c,sourceType:p}}var fn;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(fn||(fn={}));function J0(t,n={}){const s=ef(t),{threshold:l=50,onSwipe:o,onSwipeEnd:r,onSwipeStart:a}=n,i=We({x:0,y:0}),c=(M,T)=>{i.x=M,i.y=T},p=We({x:0,y:0}),u=(M,T)=>{p.x=M,p.y=T},d=F(()=>i.x-p.x),y=F(()=>i.y-p.y),{max:m,abs:h}=Math,v=F(()=>m(h(d.value),h(y.value))>=l),_=K(!1),C=K(!1),A=F(()=>v.value?h(d.value)>h(y.value)?d.value>0?fn.LEFT:fn.RIGHT:y.value>0?fn.UP:fn.DOWN:fn.NONE),w=M=>{var T,D,H;const te=M.buttons===0,pe=M.buttons===1;return(H=(D=(T=n.pointerTypes)==null?void 0:T.includes(M.pointerType))!=null?D:te||pe)!=null?H:!0},E=[ve(t,"pointerdown",M=>{var T,D;if(!w(M))return;C.value=!0,(D=(T=s.value)==null?void 0:T.style)==null||D.setProperty("touch-action","none");const H=M.target;H==null||H.setPointerCapture(M.pointerId);const{clientX:te,clientY:pe}=M;c(te,pe),u(te,pe),a==null||a(M)}),ve(t,"pointermove",M=>{if(!w(M)||!C.value)return;const{clientX:T,clientY:D}=M;u(T,D),!_.value&&v.value&&(_.value=!0),_.value&&(o==null||o(M))}),ve(t,"pointerup",M=>{var T,D;w(M)&&(_.value&&(r==null||r(M,A.value)),C.value=!1,_.value=!1,(D=(T=s.value)==null?void 0:T.style)==null||D.setProperty("touch-action","initial"))})],$=()=>E.forEach(M=>M());return{isSwiping:Qt(_),direction:Qt(A),posStart:Qt(i),posEnd:Qt(p),distanceX:d,distanceY:y,stop:$}}function Y0(t,n=fs,s={}){const{immediate:l=!0,manual:o=!1,type:r="text/javascript",async:a=!0,crossOrigin:i,referrerPolicy:c,noModule:p,defer:u,document:d=ki,attrs:y={}}=s,m=K(null);let h=null;const v=A=>new Promise((w,E)=>{const $=D=>(m.value=D,w(D),D);if(!d){w(!1);return}let M=!1,T=d.querySelector(`script[src="${et(t)}"]`);T?T.hasAttribute("data-loaded")&&$(T):(T=d.createElement("script"),T.type=r,T.async=a,T.src=et(t),u&&(T.defer=u),i&&(T.crossOrigin=i),p&&(T.noModule=p),c&&(T.referrerPolicy=c),Object.entries(y).forEach(([D,H])=>T==null?void 0:T.setAttribute(D,H)),M=!0),T.addEventListener("error",D=>E(D)),T.addEventListener("abort",D=>E(D)),T.addEventListener("load",()=>{T.setAttribute("data-loaded","true"),n(T),$(T)}),M&&(T=d.head.appendChild(T)),A||$(T)}),_=(A=!0)=>(h||(h=v(A)),h),C=()=>{if(!d)return;h=null,m.value&&(m.value=null);const A=d.querySelector(`script[src="${et(t)}"]`);A&&d.head.removeChild(A)};return l&&!o&&fr(_),o||tf(C),{scriptTag:m,load:_,unload:C}}let Z0=0;function yD(t,n={}){const s=K(!1),{document:l=ki,immediate:o=!0,manual:r=!1,id:a=`vueuse_styletag_${++Z0}`}=n,i=K(t);let c=()=>{};const p=()=>{if(!l)return;const d=l.getElementById(a)||l.createElement("style");d.isConnected||(d.type="text/css",d.id=a,n.media&&(d.media=n.media),l.head.appendChild(d)),!s.value&&(c=ge(i,y=>{d.textContent=y},{immediate:!0}),s.value=!0)},u=()=>{!l||!s.value||(c(),l.head.removeChild(l.getElementById(a)),s.value=!1)};return o&&!r&&fr(p),r||ln(u),{id:a,css:i,unload:u,load:p,isLoaded:Qt(s)}}var X0=Object.defineProperty,up=Object.getOwnPropertySymbols,Q0=Object.prototype.hasOwnProperty,e_=Object.prototype.propertyIsEnumerable,dp=(t,n,s)=>n in t?X0(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,t_=(t,n)=>{for(var s in n||(n={}))Q0.call(n,s)&&dp(t,s,n[s]);if(up)for(var s of up(n))e_.call(n,s)&&dp(t,s,n[s]);return t};function hD(t={}){const{controls:n=!1,offset:s=0,immediate:l=!0,interval:o="requestAnimationFrame",callback:r}=t,a=K(Ca()+s),i=()=>a.value=Ca()+s,c=r?()=>{i(),r(a.value)}:i,p=o==="requestAnimationFrame"?q0(c,{immediate:l}):Zv(c,o,{immediate:l});return n?t_({timestamp:a},p):a}var n_=Object.defineProperty,fp=Object.getOwnPropertySymbols,s_=Object.prototype.hasOwnProperty,l_=Object.prototype.propertyIsEnumerable,yp=(t,n,s)=>n in t?n_(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,o_=(t,n)=>{for(var s in n||(n={}))s_.call(n,s)&&yp(t,s,n[s]);if(fp)for(var s of fp(n))l_.call(n,s)&&yp(t,s,n[s]);return t};const r_={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};o_({linear:Rv},r_);function en(t,n,s,l={}){var o,r,a;const{clone:i=!1,passive:c=!1,eventName:p,deep:u=!1,defaultValue:d}=l,y=wt(),m=s||(y==null?void 0:y.emit)||((o=y==null?void 0:y.$emit)==null?void 0:o.bind(y))||((a=(r=y==null?void 0:y.proxy)==null?void 0:r.$emit)==null?void 0:a.bind(y==null?void 0:y.proxy));let h=p;n||(n="modelValue"),h=p||h||`update:${n.toString()}`;const v=C=>i?Ol(i)?i(C):w0(C):C,_=()=>Ov(t[n])?v(t[n]):d;if(c){const C=_(),A=K(C);return ge(()=>t[n],w=>A.value=v(w)),ge(A,w=>{(w!==t[n]||u)&&m(h,w)},{deep:u}),A}else return F({get(){return _()},set(C){m(h,C)}})}function mD({window:t=lt}={}){if(!t)return K(!1);const n=K(t.document.hasFocus());return ve(t,"blur",()=>{n.value=!1}),ve(t,"focus",()=>{n.value=!0}),n}function a_(t={}){const{window:n=lt,initialWidth:s=1/0,initialHeight:l=1/0,listenOrientation:o=!0,includeScrollbar:r=!0}=t,a=K(s),i=K(l),c=()=>{n&&(r?(a.value=n.innerWidth,i.value=n.innerHeight):(a.value=n.document.documentElement.clientWidth,i.value=n.document.documentElement.clientHeight))};return c(),fr(c),ve("resize",c,{passive:!0}),o&&ve("orientationchange",c,{passive:!0}),{width:a,height:i}}function i_(){return of().__VUE_DEVTOOLS_GLOBAL_HOOK__}function of(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const c_=typeof Proxy=="function",p_="devtools-plugin:setup",u_="plugin:settings:set";let Cs,ka;function d_(){var t;return Cs!==void 0||(typeof window<"u"&&window.performance?(Cs=!0,ka=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(Cs=!0,ka=global.perf_hooks.performance):Cs=!1),Cs}function f_(){return d_()?ka.now():Date.now()}class y_{constructor(n,s){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=n,this.hook=s;const l={};if(n.settings)for(const a in n.settings){const i=n.settings[a];l[a]=i.defaultValue}const o=`__vue-devtools-plugin-settings__${n.id}`;let r=Object.assign({},l);try{const a=localStorage.getItem(o),i=JSON.parse(a);Object.assign(r,i)}catch{}this.fallbacks={getSettings(){return r},setSettings(a){try{localStorage.setItem(o,JSON.stringify(a))}catch{}r=a},now(){return f_()}},s&&s.on(u_,(a,i)=>{a===this.plugin.id&&this.fallbacks.setSettings(i)}),this.proxiedOn=new Proxy({},{get:(a,i)=>this.target?this.target.on[i]:(...c)=>{this.onQueue.push({method:i,args:c})}}),this.proxiedTarget=new Proxy({},{get:(a,i)=>this.target?this.target[i]:i==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(i)?(...c)=>(this.targetQueue.push({method:i,args:c,resolve:()=>{}}),this.fallbacks[i](...c)):(...c)=>new Promise(p=>{this.targetQueue.push({method:i,args:c,resolve:p})})})}async setRealTarget(n){this.target=n;for(const s of this.onQueue)this.target.on[s.method](...s.args);for(const s of this.targetQueue)s.resolve(await this.target[s.method](...s.args))}}function h_(t,n){const s=t,l=of(),o=i_(),r=c_&&s.enableEarlyProxy;if(o&&(l.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))o.emit(p_,t,n);else{const a=r?new y_(s,o):null;(l.__VUE_DEVTOOLS_PLUGINS__=l.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:s,setupFn:n,proxy:a}),a&&n(a.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const un=typeof window<"u";function m_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ie=Object.assign;function Rr(t,n){const s={};for(const l in n){const o=n[l];s[l]=Pt(o)?o.map(t):t(o)}return s}const gl=()=>{},Pt=Array.isArray;function Fe(t){const n=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+t].concat(n))}const g_=/\/$/,v_=t=>t.replace(g_,"");function jr(t,n,s="/"){let l,o={},r="",a="";const i=n.indexOf("#");let c=n.indexOf("?");return i<c&&i>=0&&(c=-1),c>-1&&(l=n.slice(0,c),r=n.slice(c+1,i>-1?i:n.length),o=t(r)),i>-1&&(l=l||n.slice(0,i),a=n.slice(i,n.length)),l=A_(l??n,s),{fullPath:l+(r&&"?")+r+a,path:l,query:o,hash:a}}function __(t,n){const s=n.query?t(n.query):"";return n.path+(s&&"?")+s+(n.hash||"")}function hp(t,n){return!n||!t.toLowerCase().startsWith(n.toLowerCase())?t:t.slice(n.length)||"/"}function mp(t,n,s){const l=n.matched.length-1,o=s.matched.length-1;return l>-1&&l===o&&Wn(n.matched[l],s.matched[o])&&rf(n.params,s.params)&&t(n.query)===t(s.query)&&n.hash===s.hash}function Wn(t,n){return(t.aliasOf||t)===(n.aliasOf||n)}function rf(t,n){if(Object.keys(t).length!==Object.keys(n).length)return!1;for(const s in t)if(!b_(t[s],n[s]))return!1;return!0}function b_(t,n){return Pt(t)?gp(t,n):Pt(n)?gp(n,t):t===n}function gp(t,n){return Pt(n)?t.length===n.length&&t.every((s,l)=>s===n[l]):t.length===1&&t[0]===n}function A_(t,n){if(t.startsWith("/"))return t;if(!n.startsWith("/"))return Fe(`Cannot resolve a relative location without an absolute path. Trying to resolve "${t}" from "${n}". It should look like "/${n}".`),t;if(!t)return n;const s=n.split("/"),l=t.split("/");let o=s.length-1,r,a;for(r=0;r<l.length;r++)if(a=l[r],a!==".")if(a==="..")o>1&&o--;else break;return s.slice(0,o).join("/")+"/"+l.slice(r-(r===l.length?1:0)).join("/")}var Tl;(function(t){t.pop="pop",t.push="push"})(Tl||(Tl={}));var vl;(function(t){t.back="back",t.forward="forward",t.unknown=""})(vl||(vl={}));function w_(t){if(!t)if(un){const n=document.querySelector("base");t=n&&n.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),v_(t)}const B_=/^[^#]+#/;function C_(t,n){return t.replace(B_,"#")+n}function x_(t,n){const s=document.documentElement.getBoundingClientRect(),l=t.getBoundingClientRect();return{behavior:n.behavior,left:l.left-s.left-(n.left||0),top:l.top-s.top-(n.top||0)}}const yr=()=>({left:window.pageXOffset,top:window.pageYOffset});function E_(t){let n;if("el"in t){const s=t.el,l=typeof s=="string"&&s.startsWith("#");if(typeof t.el=="string"&&(!l||!document.getElementById(t.el.slice(1))))try{const r=document.querySelector(t.el);if(l&&r){Fe(`The selector "${t.el}" should be passed as "el: document.querySelector('${t.el}')" because it starts with "#".`);return}}catch{Fe(`The selector "${t.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const o=typeof s=="string"?l?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!o){Fe(`Couldn't find element using selector "${t.el}" returned by scrollBehavior.`);return}n=x_(o,t)}else n=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function vp(t,n){return(history.state?history.state.position-n:-1)+t}const Da=new Map;function k_(t,n){Da.set(t,n)}function D_(t){const n=Da.get(t);return Da.delete(t),n}let S_=()=>location.protocol+"//"+location.host;function af(t,n){const{pathname:s,search:l,hash:o}=n,r=t.indexOf("#");if(r>-1){let i=o.includes(t.slice(r))?t.slice(r).length:1,c=o.slice(i);return c[0]!=="/"&&(c="/"+c),hp(c,"")}return hp(s,t)+l+o}function F_(t,n,s,l){let o=[],r=[],a=null;const i=({state:y})=>{const m=af(t,location),h=s.value,v=n.value;let _=0;if(y){if(s.value=m,n.value=y,a&&a===h){a=null;return}_=v?y.position-v.position:0}else l(m);o.forEach(C=>{C(s.value,h,{delta:_,type:Tl.pop,direction:_?_>0?vl.forward:vl.back:vl.unknown})})};function c(){a=s.value}function p(y){o.push(y);const m=()=>{const h=o.indexOf(y);h>-1&&o.splice(h,1)};return r.push(m),m}function u(){const{history:y}=window;y.state&&y.replaceState(Ie({},y.state,{scroll:yr()}),"")}function d(){for(const y of r)y();r=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:p,destroy:d}}function _p(t,n,s,l=!1,o=!1){return{back:t,current:n,forward:s,replaced:l,position:window.history.length,scroll:o?yr():null}}function $_(t){const{history:n,location:s}=window,l={value:af(t,s)},o={value:n.state};o.value||r(l.value,{back:null,current:l.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function r(c,p,u){const d=t.indexOf("#"),y=d>-1?(s.host&&document.querySelector("base")?t:t.slice(d))+c:S_()+t+c;try{n[u?"replaceState":"pushState"](p,"",y),o.value=p}catch(m){Fe("Error with push/replace State",m),s[u?"replace":"assign"](y)}}function a(c,p){const u=Ie({},n.state,_p(o.value.back,c,o.value.forward,!0),p,{position:o.value.position});r(c,u,!0),l.value=c}function i(c,p){const u=Ie({},o.value,n.state,{forward:c,scroll:yr()});n.state||Fe(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(u.current,u,!0);const d=Ie({},_p(l.value,c,null),{position:u.position+1},p);r(c,d,!1),l.value=c}return{location:l,state:o,push:i,replace:a}}function P_(t){t=w_(t);const n=$_(t),s=F_(t,n.state,n.location,n.replace);function l(r,a=!0){a||s.pauseListeners(),history.go(r)}const o=Ie({location:"",base:t,go:l,createHref:C_.bind(null,t)},n,s);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>n.state.value}),o}function O_(t){return typeof t=="string"||t&&typeof t=="object"}function cf(t){return typeof t=="string"||typeof t=="symbol"}const Cn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},pf=Symbol("navigation failure");var bp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(bp||(bp={}));const T_={[1]({location:t,currentLocation:n}){return`No match for
 ${JSON.stringify(t)}${n?`
while being at
`+JSON.stringify(n):""}`},[2]({from:t,to:n}){return`Redirected from "${t.fullPath}" to "${I_(n)}" via a navigation guard.`},[4]({from:t,to:n}){return`Navigation aborted from "${t.fullPath}" to "${n.fullPath}" via a navigation guard.`},[8]({from:t,to:n}){return`Navigation cancelled from "${t.fullPath}" to "${n.fullPath}" with a new navigation.`},[16]({from:t,to:n}){return`Avoided redundant navigation to current location: "${t.fullPath}".`}};function Vs(t,n){return Ie(new Error(T_[t](n)),{type:t,[pf]:!0},n)}function on(t,n){return t instanceof Error&&pf in t&&(n==null||!!(t.type&n))}const L_=["params","query","hash"];function I_(t){if(typeof t=="string")return t;if("path"in t)return t.path;const n={};for(const s of L_)s in t&&(n[s]=t[s]);return JSON.stringify(n,null,2)}const Ap="[^/]+?",M_={sensitive:!1,strict:!1,start:!0,end:!0},N_=/[.+*?^${}()[\]/\\]/g;function R_(t,n){const s=Ie({},M_,n),l=[];let o=s.start?"^":"";const r=[];for(const p of t){const u=p.length?[]:[90];s.strict&&!p.length&&(o+="/");for(let d=0;d<p.length;d++){const y=p[d];let m=40+(s.sensitive?.25:0);if(y.type===0)d||(o+="/"),o+=y.value.replace(N_,"\\$&"),m+=40;else if(y.type===1){const{value:h,repeatable:v,optional:_,regexp:C}=y;r.push({name:h,repeatable:v,optional:_});const A=C||Ap;if(A!==Ap){m+=10;try{new RegExp(`(${A})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${h}" (${A}): `+E.message)}}let w=v?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;d||(w=_&&p.length<2?`(?:/${w})`:"/"+w),_&&(w+="?"),o+=w,m+=20,_&&(m+=-8),v&&(m+=-20),A===".*"&&(m+=-50)}u.push(m)}l.push(u)}if(s.strict&&s.end){const p=l.length-1;l[p][l[p].length-1]+=.7000000000000001}s.strict||(o+="/?"),s.end?o+="$":s.strict&&(o+="(?:/|$)");const a=new RegExp(o,s.sensitive?"":"i");function i(p){const u=p.match(a),d={};if(!u)return null;for(let y=1;y<u.length;y++){const m=u[y]||"",h=r[y-1];d[h.name]=m&&h.repeatable?m.split("/"):m}return d}function c(p){let u="",d=!1;for(const y of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of y)if(m.type===0)u+=m.value;else if(m.type===1){const{value:h,repeatable:v,optional:_}=m,C=h in p?p[h]:"";if(Pt(C)&&!v)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const A=Pt(C)?C.join("/"):C;if(!A)if(_)y.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${h}"`);u+=A}}return u||"/"}return{re:a,score:l,keys:r,parse:i,stringify:c}}function j_(t,n){let s=0;for(;s<t.length&&s<n.length;){const l=n[s]-t[s];if(l)return l;s++}return t.length<n.length?t.length===1&&t[0]===40+40?-1:1:t.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function V_(t,n){let s=0;const l=t.score,o=n.score;for(;s<l.length&&s<o.length;){const r=j_(l[s],o[s]);if(r)return r;s++}if(Math.abs(o.length-l.length)===1){if(wp(l))return 1;if(wp(o))return-1}return o.length-l.length}function wp(t){const n=t[t.length-1];return t.length>0&&n[n.length-1]<0}const H_={type:0,value:""},q_=/[a-zA-Z0-9_]/;function W_(t){if(!t)return[[]];if(t==="/")return[[H_]];if(!t.startsWith("/"))throw new Error(`Route paths should start with a "/": "${t}" should be "/${t}".`);function n(m){throw new Error(`ERR (${s})/"${p}": ${m}`)}let s=0,l=s;const o=[];let r;function a(){r&&o.push(r),r=[]}let i=0,c,p="",u="";function d(){p&&(s===0?r.push({type:0,value:p}):s===1||s===2||s===3?(r.length>1&&(c==="*"||c==="+")&&n(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:p,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):n("Invalid state to consume buffer"),p="")}function y(){p+=c}for(;i<t.length;){if(c=t[i++],c==="\\"&&s!==2){l=s,s=4;continue}switch(s){case 0:c==="/"?(p&&d(),a()):c===":"?(d(),s=1):y();break;case 4:y(),s=l;break;case 1:c==="("?s=2:q_.test(c)?y():(d(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:s=3:u+=c;break;case 3:d(),s=0,c!=="*"&&c!=="?"&&c!=="+"&&i--,u="";break;default:n("Unknown state");break}}return s===2&&n(`Unfinished custom RegExp for param "${p}"`),d(),a(),o}function z_(t,n,s){const l=R_(W_(t.path),s);{const r=new Set;for(const a of l.keys)r.has(a.name)&&Fe(`Found duplicated params with name "${a.name}" for path "${t.path}". Only the last one will be available on "$route.params".`),r.add(a.name)}const o=Ie(l,{record:t,parent:n,children:[],alias:[]});return n&&!o.record.aliasOf==!n.record.aliasOf&&n.children.push(o),o}function U_(t,n){const s=[],l=new Map;n=xp({strict:!1,end:!0,sensitive:!1},n);function o(u){return l.get(u)}function r(u,d,y){const m=!y,h=G_(u);Z_(h,d),h.aliasOf=y&&y.record;const v=xp(n,u),_=[h];if("alias"in u){const w=typeof u.alias=="string"?[u.alias]:u.alias;for(const E of w)_.push(Ie({},h,{components:y?y.record.components:h.components,path:E,aliasOf:y?y.record:h}))}let C,A;for(const w of _){const{path:E}=w;if(d&&E[0]!=="/"){const $=d.record.path,M=$[$.length-1]==="/"?"":"/";w.path=d.record.path+(E&&M+E)}if(w.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(C=z_(w,d,v),d&&E[0]==="/"&&X_(C,d),y?(y.alias.push(C),Y_(y,C)):(A=A||C,A!==C&&A.alias.push(C),m&&u.name&&!Cp(C)&&a(u.name)),h.children){const $=h.children;for(let M=0;M<$.length;M++)r($[M],C,y&&y.children[M])}y=y||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&c(C)}return A?()=>{a(A)}:gl}function a(u){if(cf(u)){const d=l.get(u);d&&(l.delete(u),s.splice(s.indexOf(d),1),d.children.forEach(a),d.alias.forEach(a))}else{const d=s.indexOf(u);d>-1&&(s.splice(d,1),u.record.name&&l.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function i(){return s}function c(u){let d=0;for(;d<s.length&&V_(u,s[d])>=0&&(u.record.path!==s[d].record.path||!uf(u,s[d]));)d++;s.splice(d,0,u),u.record.name&&!Cp(u)&&l.set(u.record.name,u)}function p(u,d){let y,m={},h,v;if("name"in u&&u.name){if(y=l.get(u.name),!y)throw Vs(1,{location:u});{const A=Object.keys(u.params||{}).filter(w=>!y.keys.find(E=>E.name===w));A.length&&Fe(`Discarded invalid param(s) "${A.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}v=y.record.name,m=Ie(Bp(d.params,y.keys.filter(A=>!A.optional).map(A=>A.name)),u.params&&Bp(u.params,y.keys.map(A=>A.name))),h=y.stringify(m)}else if("path"in u)h=u.path,h.startsWith("/")||Fe(`The Matcher cannot resolve relative paths but received "${h}". Unless you directly called \`matcher.resolve("${h}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),y=s.find(A=>A.re.test(h)),y&&(m=y.parse(h),v=y.record.name);else{if(y=d.name?l.get(d.name):s.find(A=>A.re.test(d.path)),!y)throw Vs(1,{location:u,currentLocation:d});v=y.record.name,m=Ie({},d.params,u.params),h=y.stringify(m)}const _=[];let C=y;for(;C;)_.unshift(C.record),C=C.parent;return{name:v,path:h,params:m,matched:_,meta:J_(_)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:p,removeRoute:a,getRoutes:i,getRecordMatcher:o}}function Bp(t,n){const s={};for(const l of n)l in t&&(s[l]=t[l]);return s}function G_(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:K_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function K_(t){const n={},s=t.props||!1;if("component"in t)n.default=s;else for(const l in t.components)n[l]=typeof s=="boolean"?s:s[l];return n}function Cp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function J_(t){return t.reduce((n,s)=>Ie(n,s.meta),{})}function xp(t,n){const s={};for(const l in t)s[l]=l in n?n[l]:t[l];return s}function Sa(t,n){return t.name===n.name&&t.optional===n.optional&&t.repeatable===n.repeatable}function Y_(t,n){for(const s of t.keys)if(!s.optional&&!n.keys.find(Sa.bind(null,s)))return Fe(`Alias "${n.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${s.name}"`);for(const s of n.keys)if(!s.optional&&!t.keys.find(Sa.bind(null,s)))return Fe(`Alias "${n.record.path}" and the original record: "${t.record.path}" must have the exact same param named "${s.name}"`)}function Z_(t,n){n&&n.record.name&&!t.name&&!t.path&&Fe(`The route named "${String(n.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function X_(t,n){for(const s of n.keys)if(!t.keys.find(Sa.bind(null,s)))return Fe(`Absolute path "${t.record.path}" must have the exact same param named "${s.name}" as its parent "${n.record.path}".`)}function uf(t,n){return n.children.some(s=>s===t||uf(t,s))}const df=/#/g,Q_=/&/g,e5=/\//g,t5=/=/g,n5=/\?/g,ff=/\+/g,s5=/%5B/g,l5=/%5D/g,yf=/%5E/g,o5=/%60/g,hf=/%7B/g,r5=/%7C/g,mf=/%7D/g,a5=/%20/g;function Di(t){return encodeURI(""+t).replace(r5,"|").replace(s5,"[").replace(l5,"]")}function i5(t){return Di(t).replace(hf,"{").replace(mf,"}").replace(yf,"^")}function Fa(t){return Di(t).replace(ff,"%2B").replace(a5,"+").replace(df,"%23").replace(Q_,"%26").replace(o5,"`").replace(hf,"{").replace(mf,"}").replace(yf,"^")}function c5(t){return Fa(t).replace(t5,"%3D")}function p5(t){return Di(t).replace(df,"%23").replace(n5,"%3F")}function u5(t){return t==null?"":p5(t).replace(e5,"%2F")}function Ll(t){try{return decodeURIComponent(""+t)}catch{Fe(`Error decoding "${t}". Using original value`)}return""+t}function d5(t){const n={};if(t===""||t==="?")return n;const l=(t[0]==="?"?t.slice(1):t).split("&");for(let o=0;o<l.length;++o){const r=l[o].replace(ff," "),a=r.indexOf("="),i=Ll(a<0?r:r.slice(0,a)),c=a<0?null:Ll(r.slice(a+1));if(i in n){let p=n[i];Pt(p)||(p=n[i]=[p]),p.push(c)}else n[i]=c}return n}function Ep(t){let n="";for(let s in t){const l=t[s];if(s=c5(s),l==null){l!==void 0&&(n+=(n.length?"&":"")+s);continue}(Pt(l)?l.map(r=>r&&Fa(r)):[l&&Fa(l)]).forEach(r=>{r!==void 0&&(n+=(n.length?"&":"")+s,r!=null&&(n+="="+r))})}return n}function f5(t){const n={};for(const s in t){const l=t[s];l!==void 0&&(n[s]=Pt(l)?l.map(o=>o==null?null:""+o):l==null?l:""+l)}return n}const y5=Symbol("router view location matched"),kp=Symbol("router view depth"),Si=Symbol("router"),gf=Symbol("route location"),$a=Symbol("router view location");function tl(){let t=[];function n(l){return t.push(l),()=>{const o=t.indexOf(l);o>-1&&t.splice(o,1)}}function s(){t=[]}return{add:n,list:()=>t,reset:s}}function Dn(t,n,s,l,o){const r=l&&(l.enterCallbacks[o]=l.enterCallbacks[o]||[]);return()=>new Promise((a,i)=>{const c=d=>{d===!1?i(Vs(4,{from:s,to:n})):d instanceof Error?i(d):O_(d)?i(Vs(2,{from:n,to:d})):(r&&l.enterCallbacks[o]===r&&typeof d=="function"&&r.push(d),a())},p=t.call(l&&l.instances[o],n,s,h5(c,n,s));let u=Promise.resolve(p);if(t.length<3&&(u=u.then(c)),t.length>2){const d=`The "next" callback was never called inside of ${t.name?'"'+t.name+'"':""}:
${t.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof p=="object"&&"then"in p)u=u.then(y=>c._called?y:(Fe(d),Promise.reject(new Error("Invalid navigation guard"))));else if(p!==void 0&&!c._called){Fe(d),i(new Error("Invalid navigation guard"));return}}u.catch(d=>i(d))})}function h5(t,n,s){let l=0;return function(){l++===1&&Fe(`The "next" callback was called more than once in one navigation guard when going from "${s.fullPath}" to "${n.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),t._called=!0,l===1&&t.apply(null,arguments)}}function Vr(t,n,s,l){const o=[];for(const r of t){!r.components&&!r.children.length&&Fe(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const a in r.components){let i=r.components[a];{if(!i||typeof i!="object"&&typeof i!="function")throw Fe(`Component "${a}" in record with path "${r.path}" is not a valid component. Received "${String(i)}".`),new Error("Invalid route component");if("then"in i){Fe(`Component "${a}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const c=i;i=()=>c}else i.__asyncLoader&&!i.__warnedDefineAsync&&(i.__warnedDefineAsync=!0,Fe(`Component "${a}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(n!=="beforeRouteEnter"&&!r.instances[a]))if(m5(i)){const p=(i.__vccOpts||i)[n];p&&o.push(Dn(p,s,l,r,a))}else{let c=i();"catch"in c||(Fe(`Component "${a}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),c=Promise.resolve(c)),o.push(()=>c.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${r.path}"`));const u=m_(p)?p.default:p;r.components[a]=u;const y=(u.__vccOpts||u)[n];return y&&Dn(y,s,l,r,a)()}))}}}return o}function m5(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Dp(t){const n=I(Si),s=I(gf),l=F(()=>n.resolve(x(t.to))),o=F(()=>{const{matched:c}=l.value,{length:p}=c,u=c[p-1],d=s.matched;if(!u||!d.length)return-1;const y=d.findIndex(Wn.bind(null,u));if(y>-1)return y;const m=Sp(c[p-2]);return p>1&&Sp(u)===m&&d[d.length-1].path!==m?d.findIndex(Wn.bind(null,c[p-2])):y}),r=F(()=>o.value>-1&&b5(s.params,l.value.params)),a=F(()=>o.value>-1&&o.value===s.matched.length-1&&rf(s.params,l.value.params));function i(c={}){return _5(c)?n[x(t.replace)?"replace":"push"](x(t.to)).catch(gl):Promise.resolve()}if(un){const c=wt();if(c){const p={route:l.value,isActive:r.value,isExactActive:a.value};c.__vrl_devtools=c.__vrl_devtools||[],c.__vrl_devtools.push(p),_s(()=>{p.route=l.value,p.isActive=r.value,p.isExactActive=a.value},{flush:"post"})}}return{route:l,href:F(()=>l.value.href),isActive:r,isExactActive:a,navigate:i}}const g5=Pe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Dp,setup(t,{slots:n}){const s=We(Dp(t)),{options:l}=I(Si),o=F(()=>({[Fp(t.activeClass,l.linkActiveClass,"router-link-active")]:s.isActive,[Fp(t.exactActiveClass,l.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const r=n.default&&n.default(s);return t.custom?r:Ft("a",{"aria-current":s.isExactActive?t.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:o.value},r)}}}),v5=g5;function _5(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const n=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return t.preventDefault&&t.preventDefault(),!0}}function b5(t,n){for(const s in n){const l=n[s],o=t[s];if(typeof l=="string"){if(l!==o)return!1}else if(!Pt(o)||o.length!==l.length||l.some((r,a)=>r!==o[a]))return!1}return!0}function Sp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Fp=(t,n,s)=>t??n??s,A5=Pe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:n,slots:s}){B5();const l=I($a),o=F(()=>t.route||l.value),r=I(kp,0),a=F(()=>{let p=x(r);const{matched:u}=o.value;let d;for(;(d=u[p])&&!d.components;)p++;return p}),i=F(()=>o.value.matched[a.value]);Dt(kp,F(()=>a.value+1)),Dt(y5,i),Dt($a,o);const c=K();return ge(()=>[c.value,i.value,t.name],([p,u,d],[y,m,h])=>{u&&(u.instances[d]=p,m&&m!==u&&p&&p===y&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),p&&u&&(!m||!Wn(u,m)||!y)&&(u.enterCallbacks[d]||[]).forEach(v=>v(p))},{flush:"post"}),()=>{const p=o.value,u=t.name,d=i.value,y=d&&d.components[u];if(!y)return $p(s.default,{Component:y,route:p});const m=d.props[u],h=m?m===!0?p.params:typeof m=="function"?m(p):m:null,_=Ft(y,Ie({},h,n,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(d.instances[u]=null)},ref:c}));if(un&&_.ref){const C={depth:a.value,name:d.name,path:d.path,meta:d.meta};(Pt(_.ref)?_.ref.map(w=>w.i):[_.ref.i]).forEach(w=>{w.__vrv_devtools=C})}return $p(s.default,{Component:_,route:p})||_}}});function $p(t,n){if(!t)return null;const s=t(n);return s.length===1?s[0]:s}const w5=A5;function B5(){const t=wt(),n=t.parent&&t.parent.type.name;if(n&&(n==="KeepAlive"||n.includes("Transition"))){const s=n==="KeepAlive"?"keep-alive":"transition";Fe(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${s}>
    <component :is="Component" />
  </${s}>
</router-view>`)}}function nl(t,n){const s=Ie({},t,{matched:t.matched.map(l=>P5(l,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:t.fullPath,tooltip:n,value:s}}}function yo(t){return{_custom:{display:t}}}let C5=0;function x5(t,n,s){if(n.__hasDevtools)return;n.__hasDevtools=!0;const l=C5++;h_({id:"org.vuejs.router"+(l?"."+l:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:t},o=>{typeof o.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),o.on.inspectComponent((u,d)=>{u.instanceData&&u.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:nl(n.currentRoute.value,"Current Route")})}),o.on.visitComponentTree(({treeNode:u,componentInstance:d})=>{if(d.__vrv_devtools){const y=d.__vrv_devtools;u.tags.push({label:(y.name?`${y.name.toString()}: `:"")+y.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:vf})}Pt(d.__vrl_devtools)&&(d.__devtoolsApi=o,d.__vrl_devtools.forEach(y=>{let m=Af,h="";y.isExactActive?(m=bf,h="This is exactly active"):y.isActive&&(m=_f,h="This link is active"),u.tags.push({label:y.route.path,textColor:0,tooltip:h,backgroundColor:m})}))}),ge(n.currentRoute,()=>{c(),o.notifyComponentUpdate(),o.sendInspectorTree(i),o.sendInspectorState(i)});const r="router:navigations:"+l;o.addTimelineLayer({id:r,label:`Router${l?" "+l:""} Navigations`,color:4237508}),n.onError((u,d)=>{o.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:d.fullPath,logType:"error",time:o.now(),data:{error:u},groupId:d.meta.__navigationId}})});let a=0;n.beforeEach((u,d)=>{const y={guard:yo("beforeEach"),from:nl(d,"Current Location during this navigation"),to:nl(u,"Target location")};Object.defineProperty(u.meta,"__navigationId",{value:a++}),o.addTimelineEvent({layerId:r,event:{time:o.now(),title:"Start of navigation",subtitle:u.fullPath,data:y,groupId:u.meta.__navigationId}})}),n.afterEach((u,d,y)=>{const m={guard:yo("afterEach")};y?(m.failure={_custom:{type:Error,readOnly:!0,display:y?y.message:"",tooltip:"Navigation Failure",value:y}},m.status=yo("❌")):m.status=yo("✅"),m.from=nl(d,"Current Location during this navigation"),m.to=nl(u,"Target location"),o.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:u.fullPath,time:o.now(),data:m,logType:y?"warning":"default",groupId:u.meta.__navigationId}})});const i="router-inspector:"+l;o.addInspector({id:i,label:"Routes"+(l?" "+l:""),icon:"book",treeFilterPlaceholder:"Search routes"});function c(){if(!p)return;const u=p;let d=s.getRoutes().filter(y=>!y.parent);d.forEach(Cf),u.filter&&(d=d.filter(y=>Pa(y,u.filter.toLowerCase()))),d.forEach(y=>Bf(y,n.currentRoute.value)),u.rootNodes=d.map(wf)}let p;o.on.getInspectorTree(u=>{p=u,u.app===t&&u.inspectorId===i&&c()}),o.on.getInspectorState(u=>{if(u.app===t&&u.inspectorId===i){const y=s.getRoutes().find(m=>m.record.__vd_id===u.nodeId);y&&(u.state={options:k5(y)})}}),o.sendInspectorTree(i),o.sendInspectorState(i)})}function E5(t){return t.optional?t.repeatable?"*":"?":t.repeatable?"+":""}function k5(t){const{record:n}=t,s=[{editable:!1,key:"path",value:n.path}];return n.name!=null&&s.push({editable:!1,key:"name",value:n.name}),s.push({editable:!1,key:"regexp",value:t.re}),t.keys.length&&s.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:t.keys.map(l=>`${l.name}${E5(l)}`).join(" "),tooltip:"Param keys",value:t.keys}}}),n.redirect!=null&&s.push({editable:!1,key:"redirect",value:n.redirect}),t.alias.length&&s.push({editable:!1,key:"aliases",value:t.alias.map(l=>l.record.path)}),Object.keys(t.record.meta).length&&s.push({editable:!1,key:"meta",value:t.record.meta}),s.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:t.score.map(l=>l.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:t.score}}}),s}const vf=15485081,_f=2450411,bf=8702998,D5=2282478,Af=16486972,S5=6710886;function wf(t){const n=[],{record:s}=t;s.name!=null&&n.push({label:String(s.name),textColor:0,backgroundColor:D5}),s.aliasOf&&n.push({label:"alias",textColor:0,backgroundColor:Af}),t.__vd_match&&n.push({label:"matches",textColor:0,backgroundColor:vf}),t.__vd_exactActive&&n.push({label:"exact",textColor:0,backgroundColor:bf}),t.__vd_active&&n.push({label:"active",textColor:0,backgroundColor:_f}),s.redirect&&n.push({label:typeof s.redirect=="string"?`redirect: ${s.redirect}`:"redirects",textColor:16777215,backgroundColor:S5});let l=s.__vd_id;return l==null&&(l=String(F5++),s.__vd_id=l),{id:l,label:s.path,tags:n,children:t.children.map(wf)}}let F5=0;const $5=/^\/(.*)\/([a-z]*)$/;function Bf(t,n){const s=n.matched.length&&Wn(n.matched[n.matched.length-1],t.record);t.__vd_exactActive=t.__vd_active=s,s||(t.__vd_active=n.matched.some(l=>Wn(l,t.record))),t.children.forEach(l=>Bf(l,n))}function Cf(t){t.__vd_match=!1,t.children.forEach(Cf)}function Pa(t,n){const s=String(t.re).match($5);if(t.__vd_match=!1,!s||s.length<3)return!1;if(new RegExp(s[1].replace(/\$$/,""),s[2]).test(n))return t.children.forEach(a=>Pa(a,n)),t.record.path!=="/"||n==="/"?(t.__vd_match=t.re.test(n),!0):!1;const o=t.record.path.toLowerCase(),r=Ll(o);return!n.startsWith("/")&&(r.includes(n)||o.includes(n))||r.startsWith(n)||o.startsWith(n)||t.record.name&&String(t.record.name).includes(n)?!0:t.children.some(a=>Pa(a,n))}function P5(t,n){const s={};for(const l in t)n.includes(l)||(s[l]=t[l]);return s}function O5(t){const n=U_(t.routes,t),s=t.parseQuery||d5,l=t.stringifyQuery||Ep,o=t.history;if(!o)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=tl(),a=tl(),i=tl(),c=sn(Cn);let p=Cn;un&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Rr.bind(null,S=>""+S),d=Rr.bind(null,u5),y=Rr.bind(null,Ll);function m(S,ee){let J,ne;return cf(S)?(J=n.getRecordMatcher(S),ne=ee):ne=S,n.addRoute(ne,J)}function h(S){const ee=n.getRecordMatcher(S);ee?n.removeRoute(ee):Fe(`Cannot remove non-existent route "${String(S)}"`)}function v(){return n.getRoutes().map(S=>S.record)}function _(S){return!!n.getRecordMatcher(S)}function C(S,ee){if(ee=Ie({},ee||c.value),typeof S=="string"){const ue=jr(s,S,ee.path),g=n.resolve({path:ue.path},ee),b=o.createHref(ue.fullPath);return b.startsWith("//")?Fe(`Location "${S}" resolved to "${b}". A resolved location cannot start with multiple slashes.`):g.matched.length||Fe(`No match found for location with path "${S}"`),Ie(ue,g,{params:y(g.params),hash:Ll(ue.hash),redirectedFrom:void 0,href:b})}let J;if("path"in S)"params"in S&&!("name"in S)&&Object.keys(S.params).length&&Fe(`Path "${S.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),J=Ie({},S,{path:jr(s,S.path,ee.path).path});else{const ue=Ie({},S.params);for(const g in ue)ue[g]==null&&delete ue[g];J=Ie({},S,{params:d(S.params)}),ee.params=d(ee.params)}const ne=n.resolve(J,ee),Be=S.hash||"";Be&&!Be.startsWith("#")&&Fe(`A \`hash\` should always start with the character "#". Replace "${Be}" with "#${Be}".`),ne.params=u(y(ne.params));const De=__(l,Ie({},S,{hash:i5(Be),path:ne.path})),ye=o.createHref(De);return ye.startsWith("//")?Fe(`Location "${S}" resolved to "${ye}". A resolved location cannot start with multiple slashes.`):ne.matched.length||Fe(`No match found for location with path "${"path"in S?S.path:S}"`),Ie({fullPath:De,hash:Be,query:l===Ep?f5(S.query):S.query||{}},ne,{redirectedFrom:void 0,href:ye})}function A(S){return typeof S=="string"?jr(s,S,c.value.path):Ie({},S)}function w(S,ee){if(p!==S)return Vs(8,{from:ee,to:S})}function E(S){return T(S)}function $(S){return E(Ie(A(S),{replace:!0}))}function M(S){const ee=S.matched[S.matched.length-1];if(ee&&ee.redirect){const{redirect:J}=ee;let ne=typeof J=="function"?J(S):J;if(typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=A(ne):{path:ne},ne.params={}),!("path"in ne)&&!("name"in ne))throw Fe(`Invalid redirect found:
${JSON.stringify(ne,null,2)}
 when navigating to "${S.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Ie({query:S.query,hash:S.hash,params:"path"in ne?{}:S.params},ne)}}function T(S,ee){const J=p=C(S),ne=c.value,Be=S.state,De=S.force,ye=S.replace===!0,ue=M(J);if(ue)return T(Ie(A(ue),{state:typeof ue=="object"?Ie({},Be,ue.state):Be,force:De,replace:ye}),ee||J);const g=J;g.redirectedFrom=ee;let b;return!De&&mp(l,ne,J)&&(b=Vs(16,{to:g,from:ne}),Ne(ne,ne,!0,!1)),(b?Promise.resolve(b):H(g,ne)).catch(k=>on(k)?on(k,2)?k:be(k):Q(k,g,ne)).then(k=>{if(k){if(on(k,2))return mp(l,C(k.to),g)&&ee&&(ee._count=ee._count?ee._count+1:1)>10?(Fe(`Detected an infinite redirection in a navigation guard when going from "${ne.fullPath}" to "${g.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):T(Ie({replace:ye},A(k.to),{state:typeof k.to=="object"?Ie({},Be,k.to.state):Be,force:De}),ee||g)}else k=pe(g,ne,!0,ye,Be);return te(g,ne,k),k})}function D(S,ee){const J=w(S,ee);return J?Promise.reject(J):Promise.resolve()}function H(S,ee){let J;const[ne,Be,De]=T5(S,ee);J=Vr(ne.reverse(),"beforeRouteLeave",S,ee);for(const ue of ne)ue.leaveGuards.forEach(g=>{J.push(Dn(g,S,ee))});const ye=D.bind(null,S,ee);return J.push(ye),xs(J).then(()=>{J=[];for(const ue of r.list())J.push(Dn(ue,S,ee));return J.push(ye),xs(J)}).then(()=>{J=Vr(Be,"beforeRouteUpdate",S,ee);for(const ue of Be)ue.updateGuards.forEach(g=>{J.push(Dn(g,S,ee))});return J.push(ye),xs(J)}).then(()=>{J=[];for(const ue of S.matched)if(ue.beforeEnter&&!ee.matched.includes(ue))if(Pt(ue.beforeEnter))for(const g of ue.beforeEnter)J.push(Dn(g,S,ee));else J.push(Dn(ue.beforeEnter,S,ee));return J.push(ye),xs(J)}).then(()=>(S.matched.forEach(ue=>ue.enterCallbacks={}),J=Vr(De,"beforeRouteEnter",S,ee),J.push(ye),xs(J))).then(()=>{J=[];for(const ue of a.list())J.push(Dn(ue,S,ee));return J.push(ye),xs(J)}).catch(ue=>on(ue,8)?ue:Promise.reject(ue))}function te(S,ee,J){for(const ne of i.list())ne(S,ee,J)}function pe(S,ee,J,ne,Be){const De=w(S,ee);if(De)return De;const ye=ee===Cn,ue=un?history.state:{};J&&(ne||ye?o.replace(S.fullPath,Ie({scroll:ye&&ue&&ue.scroll},Be)):o.push(S.fullPath,Be)),c.value=S,Ne(S,ee,J,ye),be()}let Z;function we(){Z||(Z=o.listen((S,ee,J)=>{if(!An.listening)return;const ne=C(S),Be=M(ne);if(Be){T(Ie(Be,{replace:!0}),ne).catch(gl);return}p=ne;const De=c.value;un&&k_(vp(De.fullPath,J.delta),yr()),H(ne,De).catch(ye=>on(ye,12)?ye:on(ye,2)?(T(ye.to,ne).then(ue=>{on(ue,20)&&!J.delta&&J.type===Tl.pop&&o.go(-1,!1)}).catch(gl),Promise.reject()):(J.delta&&o.go(-J.delta,!1),Q(ye,ne,De))).then(ye=>{ye=ye||pe(ne,De,!1),ye&&(J.delta&&!on(ye,8)?o.go(-J.delta,!1):J.type===Tl.pop&&on(ye,20)&&o.go(-1,!1)),te(ne,De,ye)}).catch(gl)}))}let Te=tl(),Se=tl(),Ve;function Q(S,ee,J){be(S);const ne=Se.list();return ne.length?ne.forEach(Be=>Be(S,ee,J)):(Fe("uncaught error during route navigation:"),console.error(S)),Promise.reject(S)}function ce(){return Ve&&c.value!==Cn?Promise.resolve():new Promise((S,ee)=>{Te.add([S,ee])})}function be(S){return Ve||(Ve=!S,we(),Te.list().forEach(([ee,J])=>S?J(S):ee()),Te.reset()),S}function Ne(S,ee,J,ne){const{scrollBehavior:Be}=t;if(!un||!Be)return Promise.resolve();const De=!J&&D_(vp(S.fullPath,0))||(ne||!J)&&history.state&&history.state.scroll||null;return rt().then(()=>Be(S,ee,De)).then(ye=>ye&&E_(ye)).catch(ye=>Q(ye,S,ee))}const Ct=S=>o.go(S);let at;const mt=new Set,An={currentRoute:c,listening:!0,addRoute:m,removeRoute:h,hasRoute:_,getRoutes:v,resolve:C,options:t,push:E,replace:$,go:Ct,back:()=>Ct(-1),forward:()=>Ct(1),beforeEach:r.add,beforeResolve:a.add,afterEach:i.add,onError:Se.add,isReady:ce,install(S){const ee=this;S.component("RouterLink",v5),S.component("RouterView",w5),S.config.globalProperties.$router=ee,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>x(c)}),un&&!at&&c.value===Cn&&(at=!0,E(o.location).catch(Be=>{Fe("Unexpected error when starting the router:",Be)}));const J={};for(const Be in Cn)J[Be]=F(()=>c.value[Be]);S.provide(Si,ee),S.provide(gf,We(J)),S.provide($a,c);const ne=S.unmount;mt.add(S),S.unmount=function(){mt.delete(S),mt.size<1&&(p=Cn,Z&&Z(),Z=null,c.value=Cn,at=!1,Ve=!1),ne()},un&&x5(S,ee,n)}};return An}function xs(t){return t.reduce((n,s)=>n.then(()=>s()),Promise.resolve())}function T5(t,n){const s=[],l=[],o=[],r=Math.max(n.matched.length,t.matched.length);for(let a=0;a<r;a++){const i=n.matched[a];i&&(t.matched.find(p=>Wn(p,i))?l.push(i):s.push(i));const c=t.matched[a];c&&(n.matched.find(p=>Wn(p,c))||o.push(c))}return[s,l,o]}const Hr=K(!1),_l=K(!1),Ps=K(!1),L5=K(!0),Oa=b0({xs:460,...h0}),ys=a_(),xf=K0(),I5=F(()=>ys.height.value-ys.width.value/Ln>180),Ef=z0(Gt?document.body:null),Ms=y0(),M5=F(()=>{var t,n;return["INPUT","TEXTAREA"].includes(((t=Ms.value)==null?void 0:t.tagName)||"")||((n=Ms.value)==null?void 0:n.classList.contains("CodeMirror-code"))}),N5=F(()=>{var t;return["BUTTON","A"].includes(((t=Ms.value)==null?void 0:t.tagName)||"")});Kt("slidev-camera","default");Kt("slidev-mic","default");const Bo=Kt("slidev-scale",0),dt=Kt("slidev-show-overview",!1),qr=Kt("slidev-presenter-cursor",!0),Pp=Kt("slidev-show-editor",!1);Kt("slidev-editor-width",Gt?window.innerWidth*.4:100);const kf=nf(dt);function Op(t,n,s,l=o=>o){return t*l(.5-n*(.5-s))}function R5(t){return[-t[0],-t[1]]}function qt(t,n){return[t[0]+n[0],t[1]+n[1]]}function Lt(t,n){return[t[0]-n[0],t[1]-n[1]]}function Ht(t,n){return[t[0]*n,t[1]*n]}function j5(t,n){return[t[0]/n,t[1]/n]}function sl(t){return[t[1],-t[0]]}function Tp(t,n){return t[0]*n[0]+t[1]*n[1]}function V5(t,n){return t[0]===n[0]&&t[1]===n[1]}function H5(t){return Math.hypot(t[0],t[1])}function q5(t){return t[0]*t[0]+t[1]*t[1]}function Lp(t,n){return q5(Lt(t,n))}function Df(t){return j5(t,H5(t))}function W5(t,n){return Math.hypot(t[1]-n[1],t[0]-n[0])}function ll(t,n,s){let l=Math.sin(s),o=Math.cos(s),r=t[0]-n[0],a=t[1]-n[1],i=r*o-a*l,c=r*l+a*o;return[i+n[0],c+n[1]]}function Ta(t,n,s){return qt(t,Ht(Lt(n,t),s))}function Ip(t,n,s){return qt(t,Ht(n,s))}var{min:Es,PI:z5}=Math,Mp=.275,ol=z5+1e-4;function U5(t,n={}){let{size:s=16,smoothing:l=.5,thinning:o=.5,simulatePressure:r=!0,easing:a=Q=>Q,start:i={},end:c={},last:p=!1}=n,{cap:u=!0,easing:d=Q=>Q*(2-Q)}=i,{cap:y=!0,easing:m=Q=>--Q*Q*Q+1}=c;if(t.length===0||s<=0)return[];let h=t[t.length-1].runningLength,v=i.taper===!1?0:i.taper===!0?Math.max(s,h):i.taper,_=c.taper===!1?0:c.taper===!0?Math.max(s,h):c.taper,C=Math.pow(s*l,2),A=[],w=[],E=t.slice(0,10).reduce((Q,ce)=>{let be=ce.pressure;if(r){let Ne=Es(1,ce.distance/s),Ct=Es(1,1-Ne);be=Es(1,Q+(Ct-Q)*(Ne*Mp))}return(Q+be)/2},t[0].pressure),$=Op(s,o,t[t.length-1].pressure,a),M,T=t[0].vector,D=t[0].point,H=D,te=D,pe=H,Z=!1;for(let Q=0;Q<t.length;Q++){let{pressure:ce}=t[Q],{point:be,vector:Ne,distance:Ct,runningLength:at}=t[Q];if(Q<t.length-1&&h-at<3)continue;if(o){if(r){let De=Es(1,Ct/s),ye=Es(1,1-De);ce=Es(1,E+(ye-E)*(De*Mp))}$=Op(s,o,ce,a)}else $=s/2;M===void 0&&(M=$);let mt=at<v?d(at/v):1,An=h-at<_?m((h-at)/_):1;$=Math.max(.01,$*Math.min(mt,An));let S=(Q<t.length-1?t[Q+1]:t[Q]).vector,ee=Q<t.length-1?Tp(Ne,S):1,J=Tp(Ne,T)<0&&!Z,ne=ee!==null&&ee<0;if(J||ne){let De=Ht(sl(T),$);for(let ye=1/13,ue=0;ue<=1;ue+=ye)te=ll(Lt(be,De),be,ol*ue),A.push(te),pe=ll(qt(be,De),be,ol*-ue),w.push(pe);D=te,H=pe,ne&&(Z=!0);continue}if(Z=!1,Q===t.length-1){let De=Ht(sl(Ne),$);A.push(Lt(be,De)),w.push(qt(be,De));continue}let Be=Ht(sl(Ta(S,Ne,ee)),$);te=Lt(be,Be),(Q<=1||Lp(D,te)>C)&&(A.push(te),D=te),pe=qt(be,Be),(Q<=1||Lp(H,pe)>C)&&(w.push(pe),H=pe),E=ce,T=Ne}let we=t[0].point.slice(0,2),Te=t.length>1?t[t.length-1].point.slice(0,2):qt(t[0].point,[1,1]),Se=[],Ve=[];if(t.length===1){if(!(v||_)||p){let Q=Ip(we,Df(sl(Lt(we,Te))),-(M||$)),ce=[];for(let be=1/13,Ne=be;Ne<=1;Ne+=be)ce.push(ll(Q,we,ol*2*Ne));return ce}}else{if(!(v||_&&t.length===1))if(u)for(let ce=1/13,be=ce;be<=1;be+=ce){let Ne=ll(w[0],we,ol*be);Se.push(Ne)}else{let ce=Lt(A[0],w[0]),be=Ht(ce,.5),Ne=Ht(ce,.51);Se.push(Lt(we,be),Lt(we,Ne),qt(we,Ne),qt(we,be))}let Q=sl(R5(t[t.length-1].vector));if(_||v&&t.length===1)Ve.push(Te);else if(y){let ce=Ip(Te,Q,$);for(let be=1/29,Ne=be;Ne<1;Ne+=be)Ve.push(ll(ce,Te,ol*3*Ne))}else Ve.push(qt(Te,Ht(Q,$)),qt(Te,Ht(Q,$*.99)),Lt(Te,Ht(Q,$*.99)),Lt(Te,Ht(Q,$)))}return A.concat(Ve,w.reverse(),Se)}function G5(t,n={}){var s;let{streamline:l=.5,size:o=16,last:r=!1}=n;if(t.length===0)return[];let a=.15+(1-l)*.85,i=Array.isArray(t[0])?t:t.map(({x:m,y:h,pressure:v=.5})=>[m,h,v]);if(i.length===2){let m=i[1];i=i.slice(0,-1);for(let h=1;h<5;h++)i.push(Ta(i[0],m,h/4))}i.length===1&&(i=[...i,[...qt(i[0],[1,1]),...i[0].slice(2)]]);let c=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,u=0,d=c[0],y=i.length-1;for(let m=1;m<i.length;m++){let h=r&&m===y?i[m].slice(0,2):Ta(d.point,i[m],a);if(V5(d.point,h))continue;let v=W5(h,d.point);if(u+=v,m<y&&!p){if(u<o)continue;p=!0}d={point:h,pressure:i[m][2]>=0?i[m][2]:.5,vector:Df(Lt(d.point,h)),distance:v,runningLength:u},c.push(d)}return c[0].vector=((s=c[1])==null?void 0:s.vector)||[0,0],c}function K5(t,n={}){return U5(G5(t,n),n)}var J5=()=>({events:{},emit(t,...n){let s=this.events[t]||[];for(let l=0,o=s.length;l<o;l++)s[l](...n)},on(t,n){var s;return(s=this.events[t])!=null&&s.push(n)||(this.events[t]=[n]),()=>{var l;this.events[t]=(l=this.events[t])==null?void 0:l.filter(o=>n!==o)}}});function Wo(t,n){return t-n}function Y5(t){return t<0?-1:1}function zo(t){return[Math.abs(t),Y5(t)]}function Sf(){const t=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${t()+t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`}var Z5=2,dn=Z5,Ws=class{constructor(t){this.drauu=t,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(t){}onUnselected(){}onStart(t){}onMove(t){return!1}onEnd(t){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(t){var n;const s=this.drauu.el,l=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const o=this.drauu.el.getBoundingClientRect();return{x:(t.pageX-o.left)*l,y:(t.pageY-o.top)*l,pressure:t.pressure}}else{const o=this.drauu.svgPoint;o.x=t.clientX,o.y=t.clientY;const r=o.matrixTransform((n=s.getScreenCTM())==null?void 0:n.inverse());return{x:r.x*l,y:r.y*l,pressure:t.pressure}}}createElement(t,n){const s=document.createElementNS("http://www.w3.org/2000/svg",t),l=n?{...this.brush,...n}:this.brush;return s.setAttribute("fill",l.fill??"transparent"),s.setAttribute("stroke",l.color),s.setAttribute("stroke-width",l.size.toString()),s.setAttribute("stroke-linecap","round"),l.dasharray&&s.setAttribute("stroke-dasharray",l.dasharray),s}attr(t,n){this.el.setAttribute(t,typeof n=="string"?n:n.toFixed(dn))}_setEvent(t){this.event=t,this.point=this.getMousePosition(t)}_eventDown(t){return this._setEvent(t),this.start=this.point,this.onStart(this.point)}_eventMove(t){return this._setEvent(t),this.onMove(this.point)}_eventUp(t){return this._setEvent(t),this.onEnd(this.point)}},X5=class extends Ws{constructor(){super(...arguments),this.points=[]}onStart(t){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[t],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(t){return this.el||this.onStart(t),this.points[this.points.length-1]!==t&&this.points.push(t),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const t=this.el;return this.el=null,!!t}getSvgData(t){const n=K5(t,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!n.length)return"";const s=n.reduce((l,[o,r],a,i)=>{const[c,p]=i[(a+1)%i.length];return l.push(o,r,(o+c)/2,(r+p)/2),l},["M",...n[0],"Q"]);return s.push("Z"),s.map(l=>typeof l=="number"?l.toFixed(2):l).join(" ")}},Q5=class extends Ws{onStart(t){return this.el=this.createElement("ellipse"),this.attr("cx",t.x),this.attr("cy",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[n,s]=zo(t.x-this.start.x),[l,o]=zo(t.y-this.start.y);if(this.shiftPressed){const r=Math.min(n,l);n=r,l=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",n),this.attr("ry",l);else{const[r,a]=[this.start.x,this.start.x+n*s].sort(Wo),[i,c]=[this.start.y,this.start.y+l*o].sort(Wo);this.attr("cx",(r+a)/2),this.attr("cy",(i+c)/2),this.attr("rx",(a-r)/2),this.attr("ry",(c-i)/2)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function Ff(t,n){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),l=document.createElementNS("http://www.w3.org/2000/svg","marker"),o=document.createElementNS("http://www.w3.org/2000/svg","path");return o.setAttribute("fill",n),l.setAttribute("id",t),l.setAttribute("viewBox","0 -5 10 10"),l.setAttribute("refX","5"),l.setAttribute("refY","0"),l.setAttribute("markerWidth","4"),l.setAttribute("markerHeight","4"),l.setAttribute("orient","auto"),o.setAttribute("d","M0,-5L10,0L0,5"),l.appendChild(o),s.appendChild(l),s}var e1=class extends Ws{onStart(t){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",t.x),this.attr("y1",t.y),this.attr("x2",t.x),this.attr("y2",t.y),this.brush.arrowEnd){const n=Sf(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(Ff(n,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${n})`),s}return this.el}onMove(t){if(!this.el)return!1;let{x:n,y:s}=t;if(this.shiftPressed){const l=t.x-this.start.x,o=t.y-this.start.y;if(o!==0){let r=l/o;r=Math.round(r),Math.abs(r)<=1?(n=this.start.x+o*r,s=this.start.y+o):(n=this.start.x+l,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-n),this.attr("y1",this.start.y*2-s),this.attr("x2",n),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",n),this.attr("y2",s)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||t.getTotalLength()<5)}},t1=class extends Ws{onStart(t){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",t.x),this.attr("y",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[n,s]=zo(t.x-this.start.x),[l,o]=zo(t.y-this.start.y);if(this.shiftPressed){const r=Math.min(n,l);n=r,l=r}if(this.altPressed)this.attr("x",this.start.x-n),this.attr("y",this.start.y-l),this.attr("width",n*2),this.attr("height",l*2);else{const[r,a]=[this.start.x,this.start.x+n*s].sort(Wo),[i,c]=[this.start.y,this.start.y+l*o].sort(Wo);this.attr("x",r),this.attr("y",i),this.attr("width",a-r),this.attr("height",c-i)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function n1(t,n){const s=t.x-n.x,l=t.y-n.y;return s*s+l*l}function s1(t,n,s){let l=n.x,o=n.y,r=s.x-l,a=s.y-o;if(r!==0||a!==0){const i=((t.x-l)*r+(t.y-o)*a)/(r*r+a*a);i>1?(l=s.x,o=s.y):i>0&&(l+=r*i,o+=a*i)}return r=t.x-l,a=t.y-o,r*r+a*a}function l1(t,n){let s=t[0];const l=[s];let o;for(let r=1,a=t.length;r<a;r++)o=t[r],n1(o,s)>n&&(l.push(o),s=o);return s!==o&&o&&l.push(o),l}function La(t,n,s,l,o){let r=l,a=0;for(let i=n+1;i<s;i++){const c=s1(t[i],t[n],t[s]);c>r&&(a=i,r=c)}r>l&&(a-n>1&&La(t,n,a,l,o),o.push(t[a]),s-a>1&&La(t,a,s,l,o))}function o1(t,n){const s=t.length-1,l=[t[0]];return La(t,0,s,n,l),l.push(t[s]),l}function Np(t,n,s=!1){if(t.length<=2)return t;const l=n!==void 0?n*n:1;return t=s?t:l1(t,l),t=o1(t,l),t}var r1=class extends Ws{constructor(){super(...arguments),this.points=[],this.count=0}onStart(t){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[t],this.brush.arrowEnd){this.arrowId=Sf();const n=Ff(this.arrowId,this.brush.color);this.el.appendChild(n)}return this.el}onMove(t){return this.el||this.onStart(t),this.points[this.points.length-1]!==t&&(this.points.push(t),this.count+=1),this.count>5&&(this.points=Np(this.points,1,!0),this.count=0),this.attr("d",jp(this.points)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||(t.setAttribute("d",jp(Np(this.points,1,!0))),!t.getTotalLength()))}};function a1(t,n){const s=n.x-t.x,l=n.y-t.y;return{length:Math.sqrt(s**2+l**2),angle:Math.atan2(l,s)}}function Rp(t,n,s,l){const o=n||t,r=s||t,a=.2,i=a1(o,r),c=i.angle+(l?Math.PI:0),p=i.length*a,u=t.x+Math.cos(c)*p,d=t.y+Math.sin(c)*p;return{x:u,y:d}}function i1(t,n,s){const l=Rp(s[n-1],s[n-2],t),o=Rp(t,s[n-1],s[n+1],!0);return`C ${l.x.toFixed(dn)},${l.y.toFixed(dn)} ${o.x.toFixed(dn)},${o.y.toFixed(dn)} ${t.x.toFixed(dn)},${t.y.toFixed(dn)}`}function jp(t){return t.reduce((n,s,l,o)=>l===0?`M ${s.x.toFixed(dn)},${s.y.toFixed(dn)}`:`${n} ${i1(s,l,o)}`,"")}var c1=class extends Ws{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(t){const n=(s,l)=>{if(s&&s.length)for(let o=0;o<s.length;o++){const r=s[o];if(r.getTotalLength){const a=r.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const c=r.getPointAtLength(a*i/this.pathSubFactor),p=r.getPointAtLength(a*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:p.x,y1:c.y,y2:p.y,segment:i,element:l||r})}}else r.children&&n(r.children,r)}};t&&n(t.children)}onUnselected(){this.pathFragments=[]}onStart(t){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=t.x,this.svgPointPrevious.y=t.y}onMove(t){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=t.x,this.svgPointCurrent.y=t.y;const n=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,n}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const t=[];if(this.pathFragments.length)for(let n=0;n<this.pathFragments.length;n++){const s=this.pathFragments[n],l={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,l)&&(s.element.remove(),t.push(n))}return t.length&&(this.pathFragments=this.pathFragments.filter((n,s)=>!t.includes(s))),t.length>0}lineLineIntersect(t,n){const s=t.x1,l=t.x2,o=n.x1,r=n.x2,a=t.y1,i=t.y2,c=n.y1,p=n.y2,u=(s-l)*(c-p)-(a-i)*(o-r),d=(s*i-a*l)*(o-r)-(s-l)*(o*p-c*r),y=(s*i-a*l)*(c-p)-(a-i)*(o*p-c*r),m=(h,v,_)=>h>=v&&h<=_?!0:h>=_&&h<=v;if(u===0)return!1;{const h={x:d/u,y:y/u};return m(h.x,s,l)&&m(h.y,a,i)&&m(h.x,o,r)&&m(h.y,c,p)}}};function p1(t){return{draw:new r1(t),stylus:new X5(t),line:new e1(t),rectangle:new t1(t),ellipse:new Q5(t),eraseLine:new c1(t)}}var u1=class{constructor(t={}){this.options=t,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=J5(),this._models=p1(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),t.el&&this.mount(t.el,t.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(t){this._models[this.mode].onUnselected(),this.options.brush.mode=t,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(t){this.options.brush=t}resolveSelector(t){return typeof t=="string"?document.querySelector(t):t||null}mount(t,n){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(t),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(n)||this.el,l=this.eventStart.bind(this),o=this.eventMove.bind(this),r=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",l,{passive:!1}),window.addEventListener("pointermove",o,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",l),window.removeEventListener("pointermove",o),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(t=>t()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(t,n){return this._emitter.on(t,n)}undo(){const t=this.el;return t.lastElementChild?(this._undoStack.push(t.lastElementChild.cloneNode(!0)),t.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var t;return!!((t=this.el)!=null&&t.lastElementChild)}eventMove(t){!this.acceptsInput(t)||!this.drawing||this.model._eventMove(t)&&(t.stopPropagation(),t.preventDefault(),this._emitter.emit("changed"))}eventStart(t){this.acceptsInput(t)&&(t.stopPropagation(),t.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(t),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(t){if(!this.acceptsInput(t)||!this.drawing)return;const n=this.model._eventUp(t);n?(n instanceof Element&&n!==this._currentNode&&(this._currentNode=n),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(t){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(t.pointerType)}eventKeyboard(t){this.shiftPressed===t.shiftKey&&this.altPressed===t.altKey||(this.shiftPressed=t.shiftKey,this.altPressed=t.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const t=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",t)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(t){this.clear(),this.el.innerHTML=t}};function d1(t){return new u1(t)}const Ia=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],tn=Kt("slidev-drawing-enabled",!1),gD=Kt("slidev-drawing-pinned",!1),f1=K(!1),y1=K(!1),h1=K(!1),Il=K(!1),os=Hv(Kt("slidev-drawing-brush",{color:Ia[0],size:4,mode:"stylus"})),Vp=K("stylus"),$f=F(()=>$e.drawings.syncAll||vt.value);let Ml=!1;const rl=F({get(){return Vp.value},set(t){Vp.value=t,t==="arrow"?(os.mode="line",os.arrowEnd=!0):(os.mode=t,os.arrowEnd=!1)}}),m1=We({brush:os,acceptsInputTypes:F(()=>tn.value&&(!$e.drawings.presenterOnly||vt.value)?void 0:["pen"]),coordinateTransform:!1}),ht=tr(d1(m1));function g1(){ht.clear(),$f.value&&Zd(Ke.value,"")}function Fi(){var t;y1.value=ht.canRedo(),f1.value=ht.canUndo(),h1.value=!!((t=ht.el)!=null&&t.children.length)}function v1(t){Ml=!0;const n=Ho[t||Ke.value];n!=null?ht.load(n):ht.clear(),Fi(),Ml=!1}ht.on("changed",()=>{if(Fi(),!Ml){const t=ht.dump(),n=Ke.value;(Ho[n]||"")!==t&&$f.value&&Zd(n,ht.dump())}});Fv(t=>{Ml=!0,t[Ke.value]!=null&&ht.load(t[Ke.value]||""),Ml=!1,Fi()});rt(()=>{ge(Ke,()=>{ht.mounted&&v1()},{immediate:!0})});ht.on("start",()=>Il.value=!0);ht.on("end",()=>Il.value=!1);window.addEventListener("keydown",t=>{if(!tn.value)return;const n=!t.ctrlKey&&!t.altKey&&!t.shiftKey&&!t.metaKey;let s=!0;t.code==="KeyZ"&&(t.ctrlKey||t.metaKey)?t.shiftKey?ht.redo():ht.undo():t.code==="Escape"?tn.value=!1:t.code==="KeyL"&&n?rl.value="line":t.code==="KeyA"&&n?rl.value="arrow":t.code==="KeyS"&&n?rl.value="stylus":t.code==="KeyR"&&n?rl.value="rectangle":t.code==="KeyE"&&n?rl.value="ellipse":t.code==="KeyC"&&n?g1():t.code.startsWith("Digit")&&n&&+t.code[5]<=Ia.length?os.color=Ia[+t.code[5]-1]:s=!1,s&&(t.preventDefault(),t.stopPropagation())},!1);function Qe(...t){return F(()=>t.every(n=>et(n)))}function Et(t){return F(()=>!et(t))}const Hp=$0(),Wr=Kt("slidev-color-schema","auto"),Ma=F(()=>$e.colorSchema!=="auto"),hr=F({get(){return Ma.value?$e.colorSchema==="dark":Wr.value==="auto"?Hp.value:Wr.value==="dark"},set(t){Ma.value||(Wr.value=t===Hp.value?"auto":t?"dark":"light")}}),Pf=nf(hr);Gt&&ge(hr,t=>{const n=document.querySelector("html");n.classList.toggle("dark",t),n.classList.toggle("light",!t)},{immediate:!0});const Co=K(1),xo=F(()=>Xe.length-1),$t=K(0),$i=K(0);function _1(){$t.value>Co.value&&($t.value-=1)}function b1(){$t.value<xo.value&&($t.value+=1)}function A1(){if($t.value>Co.value){let t=$t.value-$i.value;t<Co.value&&(t=Co.value),$t.value=t}}function w1(){if($t.value<xo.value){let t=$t.value+$i.value;t>xo.value&&(t=xo.value),$t.value=t}}function B1(){const{escape:t,space:n,shift:s,left:l,right:o,up:r,down:a,enter:i,d:c,g:p,o:u}=xf;let d=[{name:"next_space",key:Qe(n,Et(s)),fn:Nn,autoRepeat:!0},{name:"prev_space",key:Qe(n,s),fn:Rn,autoRepeat:!0},{name:"next_right",key:Qe(o,Et(s),Et(dt)),fn:Nn,autoRepeat:!0},{name:"prev_left",key:Qe(l,Et(s),Et(dt)),fn:Rn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Nn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Rn,autoRepeat:!0},{name:"next_down",key:Qe(a,Et(dt)),fn:Rl,autoRepeat:!0},{name:"prev_up",key:Qe(r,Et(dt)),fn:()=>jl(!1),autoRepeat:!0},{name:"next_shift",key:Qe(o,s),fn:Rl,autoRepeat:!0},{name:"prev_shift",key:Qe(l,s),fn:()=>jl(!1),autoRepeat:!0},{name:"toggle_dark",key:Qe(c,Et(tn)),fn:Pf},{name:"toggle_overview",key:Qe(u,Et(tn)),fn:kf},{name:"hide_overview",key:Qe(t,Et(tn)),fn:()=>dt.value=!1},{name:"goto",key:Qe(p,Et(tn)),fn:()=>Ps.value=!Ps.value},{name:"next_overview",key:Qe(o,dt),fn:b1},{name:"prev_overview",key:Qe(l,dt),fn:_1},{name:"up_overview",key:Qe(r,dt),fn:A1},{name:"down_overview",key:Qe(a,dt),fn:w1},{name:"goto_from_overview",key:Qe(i,dt),fn:()=>{qs($t.value),dt.value=!1}}];const y=new Set(d.map(h=>h.name));if(d.filter(h=>h.name&&y.has(h.name)).length===0){const h=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(h),console.warn(h)}return d}const Of=Qe(Et(M5),Et(N5),L5);function C1(t,n,s=!1){typeof t=="string"&&(t=xf[t]);const l=Qe(t,Of);let o=0,r;const a=()=>{if(clearTimeout(r),!l.value){o=0;return}s&&(r=setTimeout(a,Math.max(1e3-o*250,150)),o++),n()};return ge(l,a,{flush:"sync"})}function x1(t,n){return f0(t,s=>{Of.value&&(s.repeat||n())})}function E1(){const t=B1();new Map(t.map(s=>[s.key,s])).forEach(s=>{s.fn&&C1(s.key,s.fn,s.autoRepeat)}),x1("f",()=>Ef.toggle())}const k1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},D1=e("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),S1=[D1];function F1(t,n){return B(),X("svg",k1,S1)}const $1={name:"carbon-close",render:F1};function Pi(t,n=""){var o,r;const s=["slidev-page",n],l=(r=(o=t==null?void 0:t.meta)==null?void 0:o.slide)==null?void 0:r.no;return l!=null&&s.push(`slidev-page-${l}`),s.filter(Boolean).join(" ")}const P1=Pe({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(t){const n=t;I(W);const s=K(),l=W0(s),o=F(()=>n.width?n.width:l.width.value),r=F(()=>n.width?n.width/Ln:l.height.value);n.width&&_s(()=>{s.value&&(s.value.style.width=`${o.value}px`,s.value.style.height=`${r.value}px`)});const a=F(()=>o.value/r.value),i=F(()=>n.scale&&!Hs.value?n.scale:a.value<Ln?o.value/In:r.value*Ln/In),c=F(()=>({height:`${xi}px`,width:`${In}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),p=F(()=>({"select-none":!$e.selectable,"slidev-code-line-numbers":$e.lineNumbers}));return Dt(Jd,i),(u,d)=>(B(),X("div",{id:"slide-container",ref_key:"root",ref:s,class:Je(x(p))},[e("div",{id:"slide-content",style:nt(x(c))},[Nt(u.$slots,"default")],4),Nt(u.$slots,"controls")],2))}});const U=(t,n)=>{const s=t.__vccOpts||t;for(const[l,o]of n)s[l]=o;return s},Tf=U(P1,[["__file","/home/runner/work/web-vitails/web-vitails/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Oi=Pe({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(t,{emit:n}){const s=en(t,"clicks",n),l=en(t,"clicksElements",n),o=en(t,"clicksDisabled",n),r=en(t,"clicksOrderMap",n);l.value.length=0,Dt(dv,t.route),Dt(fv,t.context),Dt(hl,s),Dt(ml,o),Dt(ns,l),Dt(Aa,r)},render(){var t,n;return this.$props.is?Ft(this.$props.is):(n=(t=this.$slots)==null?void 0:t.default)==null?void 0:n.call(t)}}),O1=["innerHTML"],T1=Pe({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(t){return I(W),(n,s)=>x(Ho)[t.page]?(B(),X("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:x(Ho)[t.page]},null,8,O1)):Ae("v-if",!0)}}),Lf=U(T1,[["__file","/home/runner/work/web-vitails/web-vitails/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),L1=Object.freeze(Object.defineProperty({__proto__:null,default:Lf},Symbol.toStringTag,{value:"Module"})),I1={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},M1=["onClick"],N1=Pe({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(t,{emit:n}){const s=t;I(W);const l=en(s,"modelValue",n);function o(){l.value=!1}function r(m){qs(m),o()}function a(m){return m===$t.value}const i=Oa.smaller("xs"),c=Oa.smaller("sm"),p=4*16*2,u=2*16,d=F(()=>i.value?ys.width.value-p:c.value?(ys.width.value-p-u)/2:300),y=F(()=>Math.floor((ys.width.value-p)/(d.value+u)));return _s(()=>{$t.value=Ke.value,$i.value=y.value}),(m,h)=>{const v=$1;return B(),X(Le,null,[cr(e("div",I1,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:nt(`grid-template-columns: repeat(auto-fit,minmax(${x(d)}px,1fr))`)},[(B(!0),X(Le,null,Jl(x(Xe).slice(0,-1),(_,C)=>(B(),X("div",{key:_.path,class:"relative"},[e("div",{class:Je(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(C+1),"border-gray-400":!a(C+1)}]),style:nt(x(Ei)),onClick:A=>r(+_.path)},[(B(),q(Tf,{key:_.path,width:x(d),"clicks-disabled":!0,class:"pointer-events-none"},{default:O(()=>[R(x(Oi),{is:_==null?void 0:_.component,"clicks-disabled":!0,class:Je(x(Pi)(_)),route:_,context:"overview"},null,8,["is","class","route"]),R(Lf,{page:+_.path},null,8,["page"])]),_:2},1032,["width"]))],14,M1),e("div",{class:"absolute top-0 opacity-50",style:nt(`left: ${x(d)+5}px`)},jn(C+1),5)]))),128))],4)],512),[[Ai,x(l)]]),x(l)?(B(),X("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:o},[R(v)])):Ae("v-if",!0)],64)}}});const R1=U(N1,[["__file","/home/runner/work/web-vitails/web-vitails/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),j1="/web-vitails/assets/logo-b72bde5d.png",V1={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},H1=Pe({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(t,{emit:n}){const s=t;I(W);const l=en(s,"modelValue",n);function o(){l.value=!1}return(r,a)=>(B(),q(pd,null,[x(l)?(B(),X("div",V1,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=i=>o())}),e("div",{class:Je(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ gray-400 opacity-10"},[Nt(r.$slots,"default")],2)])):Ae("v-if",!0)],1024))}}),q1=U(H1,[["__file","/home/runner/work/web-vitails/web-vitails/node_modules/@slidev/client/internals/Modal.vue"]]),W1={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},z1=["innerHTML"],U1=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:j1,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),f("dev ")])])],-1),G1=Pe({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(t,{emit:n}){const s=t;I(W);const l=en(s,"modelValue",n),o=F(()=>typeof $e.info=="string");return(r,a)=>(B(),q(q1,{modelValue:x(l),"onUpdate:modelValue":a[0]||(a[0]=i=>Oe(l)?l.value=i:null),class:"px-6 py-4"},{default:O(()=>[e("div",W1,[x(o)?(B(),X("div",{key:0,class:"mb-4",innerHTML:x($e).info},null,8,z1)):Ae("v-if",!0),U1])]),_:1},8,["modelValue"]))}});const K1=U(G1,[["__file","/home/runner/work/web-vitails/web-vitails/node_modules/@slidev/client/internals/InfoDialog.vue"]]),J1=["disabled","onKeydown"],Y1=Pe({__name:"Goto",setup(t){I(W);const n=K(),s=K(""),l=F(()=>{if(s.value.startsWith("/"))return!!Xe.find(a=>a.path===s.value.substring(1));{const a=+s.value;return!isNaN(a)&&a>0&&a<=yy.value}});function o(){l.value&&(s.value.startsWith("/")?qs(s.value.substring(1)):qs(+s.value)),r()}function r(){Ps.value=!1}return ge(Ps,async a=>{var i,c;a?(await rt(),s.value="",(i=n.value)==null||i.focus()):(c=n.value)==null||c.blur()}),ge(s,a=>{a.match(/^[^0-9/]/)&&(s.value=s.value.substring(1))}),(a,i)=>(B(),X("div",{id:"slidev-goto-dialog",class:Je(["fixed right-5 bg-main transform transition-all",x(Ps)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[cr(e("input",{ref_key:"input",ref:n,"onUpdate:modelValue":i[0]||(i[0]=c=>s.value=c),type:"text",disabled:!x(Ps),class:Je(["outline-none bg-transparent",{"text-red-400":!x(l)&&s.value}]),placeholder:"Goto...",onKeydown:[Hc(o,["enter"]),Hc(r,["escape"])],onBlur:r},null,42,J1),[[gg,s.value]])],2))}}),Z1=U(Y1,[["__file","/home/runner/work/web-vitails/web-vitails/node_modules/@slidev/client/internals/Goto.vue"]]),X1=Pe({__name:"Controls",setup(t){I(W);const n=sn(),s=sn();return(l,o)=>(B(),X(Le,null,[R(R1,{modelValue:x(dt),"onUpdate:modelValue":o[0]||(o[0]=r=>Oe(dt)?dt.value=r:null)},null,8,["modelValue"]),R(Z1),x(n)?(B(),q(x(n),{key:0})):Ae("v-if",!0),x(s)?(B(),q(x(s),{key:1,modelValue:x(Hr),"onUpdate:modelValue":o[1]||(o[1]=r=>Oe(Hr)?Hr.value=r:null)},null,8,["modelValue"])):Ae("v-if",!0),x($e).info?(B(),q(K1,{key:2,modelValue:x(_l),"onUpdate:modelValue":o[2]||(o[2]=r=>Oe(_l)?_l.value=r:null)},null,8,["modelValue"])):Ae("v-if",!0)],64))}}),Q1=U(X1,[["__file","/home/runner/work/web-vitails/web-vitails/node_modules/@slidev/client/internals/Controls.vue"]]),eb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},tb=e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),nb=[tb];function sb(t,n){return B(),X("svg",eb,nb)}const lb={name:"carbon-settings-adjust",render:sb},ob={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},rb=e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),ab=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),ib=[rb,ab];function cb(t,n){return B(),X("svg",ob,ib)}const pb={name:"carbon-information",render:cb},ub={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},db=e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),fb=[db];function yb(t,n){return B(),X("svg",ub,fb)}const hb={name:"carbon-download",render:yb},mb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},gb=e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),vb=e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),_b=[gb,vb];function bb(t,n){return B(),X("svg",mb,_b)}const Ab={name:"carbon-user-speaker",render:bb},wb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Bb=e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),Cb=e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),xb=[Bb,Cb];function Eb(t,n){return B(),X("svg",wb,xb)}const kb={name:"carbon-presentation-file",render:Eb},Db={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Sb=e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),Fb=[Sb];function $b(t,n){return B(),X("svg",Db,Fb)}const Pb={name:"carbon-pen",render:$b},Ob={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Tb=e("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),Lb=e("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),Ib=[Tb,Lb];function Mb(t,n){return B(),X("svg",Ob,Ib)}const Nb={name:"ph-cursor-duotone",render:Mb},Rb={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},jb=e("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),Vb=[jb];function Hb(t,n){return B(),X("svg",Rb,Vb)}const If={name:"ph-cursor-fill",render:Hb},qb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Wb=e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),zb=[Wb];function Ub(t,n){return B(),X("svg",qb,zb)}const Gb={name:"carbon-sun",render:Ub},Kb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Jb=e("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),Yb=[Jb];function Zb(t,n){return B(),X("svg",Kb,Yb)}const Xb={name:"carbon-moon",render:Zb},Qb={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},eA=e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),tA=[eA];function nA(t,n){return B(),X("svg",Qb,tA)}const sA={name:"carbon-apps",render:nA},lA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},oA=e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),rA=[oA];function aA(t,n){return B(),X("svg",lA,rA)}const iA={name:"carbon-arrow-right",render:aA},cA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},pA=e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),uA=[pA];function dA(t,n){return B(),X("svg",cA,uA)}const fA={name:"carbon-arrow-left",render:dA},yA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},hA=e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),mA=[hA];function gA(t,n){return B(),X("svg",yA,mA)}const vA={name:"carbon-maximize",render:gA},_A={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},bA=e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),AA=[bA];function wA(t,n){return B(),X("svg",_A,AA)}const BA={name:"carbon-minimize",render:wA},CA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},xA=e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),EA=[xA];function kA(t,n){return B(),X("svg",CA,EA)}const DA={name:"carbon-checkmark",render:kA},SA={class:"select-list"},FA={class:"title"},$A={class:"items"},PA=["onClick"],OA=Pe({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(t,{emit:n}){const s=t;I(W);const l=en(s,"modelValue",n,{passive:!0});return(o,r)=>{const a=DA;return B(),X("div",SA,[e("div",FA,jn(t.title),1),e("div",$A,[(B(!0),X(Le,null,Jl(t.items,i=>(B(),X("div",{key:i.value,class:Je(["item",{active:x(l)===i.value}]),onClick:()=>{var c;l.value=i.value,(c=i.onClick)==null||c.call(i)}},[R(a,{class:Je(["text-green-500",{"opacity-0":x(l)!==i.value}])},null,8,["class"]),f(" "+jn(i.display||i.value),1)],10,PA))),128))])])}}});const TA=U(OA,[["__scopeId","data-v-3f89fa11"],["__file","/home/runner/work/web-vitails/web-vitails/node_modules/@slidev/client/internals/SelectList.vue"]]),LA={class:"text-sm"},IA=Pe({__name:"Settings",setup(t){I(W);const n=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,l)=>(B(),X("div",LA,[R(TA,{modelValue:x(Bo),"onUpdate:modelValue":l[0]||(l[0]=o=>Oe(Bo)?Bo.value=o:null),title:"Scale",items:n},null,8,["modelValue"])]))}}),MA=U(IA,[["__file","/home/runner/work/web-vitails/web-vitails/node_modules/@slidev/client/internals/Settings.vue"]]),NA={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},RA=Pe({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(t,{emit:n}){const s=t;I(W);const l=en(s,"modelValue",n,{passive:!0}),o=K();return u0(o,()=>{l.value=!1}),(r,a)=>(B(),X("div",{ref_key:"el",ref:o,class:"flex relative"},[e("button",{class:Je({disabled:t.disabled}),onClick:a[0]||(a[0]=i=>l.value=!x(l))},[Nt(r.$slots,"button",{class:Je({disabled:t.disabled})})],2),(B(),q(pd,null,[x(l)?(B(),X("div",NA,[Nt(r.$slots,"menu")])):Ae("v-if",!0)],1024))],512))}}),jA=U(RA,[["__file","/home/runner/work/web-vitails/web-vitails/node_modules/@slidev/client/internals/MenuButton.vue"]]),VA={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},HA={__name:"VerticalDivider",setup(t){return I(W),(n,s)=>(B(),X("div",VA))}},ho=U(HA,[["__file","/home/runner/work/web-vitails/web-vitails/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),qA={render(){return[]}},WA={class:"slidev-icon-btn"},zA={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},UA={class:"my-auto"},GA={class:"opacity-50"},KA=Pe({__name:"NavControls",props:{persist:{default:!1}},setup(t){const n=t;I(W);const s=Oa.smaller("md"),{isFullscreen:l,toggle:o}=Ef,r=F(()=>Ra.value?`?password=${Ra.value}`:""),a=F(()=>`/presenter/${Ke.value}${r.value}`),i=F(()=>`/${Ke.value}${r.value}`),c=K(),p=()=>{c.value&&Ms.value&&c.value.contains(Ms.value)&&Ms.value.blur()},u=F(()=>n.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),d=sn(),y=sn();return Mn(()=>import("./DrawingControls-bd1a1615.js"),[]).then(m=>y.value=m.default),(m,h)=>{const v=BA,_=vA,C=fA,A=iA,w=sA,E=Xb,$=Gb,M=If,T=Nb,D=Pb,H=kb,te=Io("RouterLink"),pe=Ab,Z=hb,we=pb,Te=lb;return B(),X("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[e("div",{class:Je(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",x(u)]),onMouseleave:p},[x(pn)?Ae("v-if",!0):(B(),X("button",{key:0,class:"slidev-icon-btn",onClick:h[0]||(h[0]=(...Se)=>x(o)&&x(o)(...Se))},[x(l)?(B(),q(v,{key:0})):(B(),q(_,{key:1}))])),e("button",{class:Je(["slidev-icon-btn",{disabled:!x(L6)}]),onClick:h[1]||(h[1]=(...Se)=>x(Rn)&&x(Rn)(...Se))},[R(C)],2),e("button",{class:Je(["slidev-icon-btn",{disabled:!x(T6)}]),title:"Next",onClick:h[2]||(h[2]=(...Se)=>x(Nn)&&x(Nn)(...Se))},[R(A)],2),x(pn)?Ae("v-if",!0):(B(),X("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:h[3]||(h[3]=Se=>x(kf)())},[R(w)])),x(Ma)?Ae("v-if",!0):(B(),X("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:h[4]||(h[4]=Se=>x(Pf)())},[x(hr)?(B(),q(E,{key:0})):(B(),q($,{key:1}))])),R(ho),x(pn)?Ae("v-if",!0):(B(),X(Le,{key:3},[!x(vt)&&!x(s)&&x(d)?(B(),X(Le,{key:0},[R(x(d)),R(ho)],64)):Ae("v-if",!0),x(vt)?(B(),X("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:h[5]||(h[5]=Se=>qr.value=!x(qr))},[x(qr)?(B(),q(M,{key:0})):(B(),q(T,{key:1,class:"opacity-50"}))])):Ae("v-if",!0)],64)),(!x($e).drawings.presenterOnly||x(vt))&&!x(pn)?(B(),X(Le,{key:4},[e("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:h[6]||(h[6]=Se=>tn.value=!x(tn))},[R(D),x(tn)?(B(),X("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:nt({background:x(os).color})},null,4)):Ae("v-if",!0)]),R(ho)],64)):Ae("v-if",!0),x(pn)?Ae("v-if",!0):(B(),X(Le,{key:5},[x(vt)?(B(),q(te,{key:0,to:x(i),class:"slidev-icon-btn",title:"Play Mode"},{default:O(()=>[R(H)]),_:1},8,["to"])):Ae("v-if",!0),x(F6)?(B(),q(te,{key:1,to:x(a),class:"slidev-icon-btn",title:"Presenter Mode"},{default:O(()=>[R(pe)]),_:1},8,["to"])):Ae("v-if",!0),Ae("v-if",!0)],64)),(B(),X(Le,{key:6},[x($e).download?(B(),X("button",{key:0,class:"slidev-icon-btn",onClick:h[8]||(h[8]=(...Se)=>x(ja)&&x(ja)(...Se))},[R(Z)])):Ae("v-if",!0)],64)),!x(vt)&&x($e).info&&!x(pn)?(B(),X("button",{key:7,class:"slidev-icon-btn",onClick:h[9]||(h[9]=Se=>_l.value=!x(_l))},[R(we)])):Ae("v-if",!0),!x(vt)&&!x(pn)?(B(),q(jA,{key:8},{button:O(()=>[e("button",WA,[R(Te)])]),menu:O(()=>[R(MA)]),_:1})):Ae("v-if",!0),x(pn)?Ae("v-if",!0):(B(),q(ho,{key:9})),e("div",zA,[e("div",UA,[f(jn(x(Ke))+" ",1),e("span",GA,"/ "+jn(x(yy)),1)])]),R(x(qA))],34)],512)}}}),JA=U(KA,[["__file","/home/runner/work/web-vitails/web-vitails/node_modules/@slidev/client/internals/NavControls.vue"]]),Mf={render(){return[]}},Nf={render(){return[]}},YA={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},ZA=Pe({__name:"PresenterMouse",setup(t){return I(W),(n,s)=>{const l=If;return x(Nr).cursor?(B(),X("div",YA,[R(l,{class:"absolute",style:nt({left:`${x(Nr).cursor.x}%`,top:`${x(Nr).cursor.y}%`})},null,8,["style"])])):Ae("v-if",!0)}}}),XA=U(ZA,[["__file","/home/runner/work/web-vitails/web-vitails/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),QA=Pe({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(t){I(W),ge(ft,()=>{var l,o;(l=ft.value)!=null&&l.meta&&ft.value.meta.preload!==!1&&(ft.value.meta.__preloaded=!0),(o=zr.value)!=null&&o.meta&&zr.value.meta.preload!==!1&&(zr.value.meta.__preloaded=!0)},{immediate:!0});const n=sn();Mn(()=>import("./DrawingLayer-184d6624.js"),[]).then(l=>n.value=l.default);const s=F(()=>Xe.filter(l=>{var o;return((o=l.meta)==null?void 0:o.__preloaded)||l===ft.value}));return(l,o)=>(B(),X(Le,null,[Ae(" Global Bottom "),R(x(Nf)),Ae(" Slides "),R(ug,Ye(x(N6),{id:"slideshow",tag:"div"}),{default:O(()=>[(B(!0),X(Le,null,Jl(x(s),r=>{var a;return cr((B(),q(x(Oi),{key:r.path,is:r==null?void 0:r.component,clicks:r===x(ft)?x(It):0,"clicks-elements":((a=r.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:Je(x(Pi)(r)),route:r,context:t.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Ai,r===x(ft)]])}),128))]),_:1},16),Ae(" Global Top "),R(x(Mf)),x(n)?(B(),q(x(n),{key:0})):Ae("v-if",!0),x(vt)?Ae("v-if",!0):(B(),q(XA,{key:1}))],64))}});const e3=U(QA,[["__scopeId","data-v-afb4231e"],["__file","/home/runner/work/web-vitails/web-vitails/node_modules/@slidev/client/internals/SlidesShow.vue"]]),t3=Pe({__name:"PrintStyle",setup(t){I(W);function n(s,{slots:l}){if(l.default)return Ft("style",l.default())}return(s,l)=>(B(),q(n,null,{default:O(()=>[f(" @page { size: "+jn(x(In))+"px "+jn(x(xi))+"px; margin: 0px; } ",1)]),_:1}))}}),Rf=U(t3,[["__file","/home/runner/work/web-vitails/web-vitails/node_modules/@slidev/client/internals/PrintStyle.vue"]]),n3=Pe({__name:"Play",setup(t){I(W),E1();const n=K();function s(r){var a;Pp.value||((a=r.target)==null?void 0:a.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?Nn():Rn())}R6(n);const l=F(()=>I5.value||Pp.value);sn();const o=sn();return Mn(()=>import("./DrawingControls-bd1a1615.js"),[]).then(r=>o.value=r.default),(r,a)=>(B(),X(Le,null,[x(Hs)?(B(),q(Rf,{key:0})):Ae("v-if",!0),e("div",{id:"page-root",ref_key:"root",ref:n,class:"grid grid-cols-[1fr_max-content]",style:nt(x(Ei))},[R(Tf,{class:"w-full h-full",style:nt({background:"var(--slidev-slide-container-background, black)"}),width:x(Hs)?x(ys).width.value:void 0,scale:x(Bo),onPointerdown:s},{default:O(()=>[R(e3,{context:"slide"})]),controls:O(()=>[e("div",{class:Je(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[x(l)?"opacity-100 right-0":"opacity-0 p-2",x(Il)?"pointer-events-none":""]])},[R(JA,{class:"m-auto",persist:x(l)},null,8,["persist"])],2),!x($e).drawings.presenterOnly&&!x(pn)&&x(o)?(B(),q(x(o),{key:0,class:"ml-0"})):Ae("v-if",!0)]),_:1},8,["style","width","scale"]),Ae("v-if",!0)],4),R(Q1)],64))}}),s3=U(n3,[["__file","/home/runner/work/web-vitails/web-vitails/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function jf(t){return typeof t>"u"||t===null}function l3(t){return typeof t=="object"&&t!==null}function o3(t){return Array.isArray(t)?t:jf(t)?[]:[t]}function r3(t,n){var s,l,o,r;if(n)for(r=Object.keys(n),s=0,l=r.length;s<l;s+=1)o=r[s],t[o]=n[o];return t}function a3(t,n){var s="",l;for(l=0;l<n;l+=1)s+=t;return s}function i3(t){return t===0&&Number.NEGATIVE_INFINITY===1/t}var c3=jf,p3=l3,u3=o3,d3=a3,f3=i3,y3=r3,Ti={isNothing:c3,isObject:p3,toArray:u3,repeat:d3,isNegativeZero:f3,extend:y3};function Vf(t,n){var s="",l=t.reason||"(unknown reason)";return t.mark?(t.mark.name&&(s+='in "'+t.mark.name+'" '),s+="("+(t.mark.line+1)+":"+(t.mark.column+1)+")",!n&&t.mark.snippet&&(s+=`

`+t.mark.snippet),l+" "+s):l}function Nl(t,n){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=n,this.message=Vf(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Nl.prototype=Object.create(Error.prototype);Nl.prototype.constructor=Nl;Nl.prototype.toString=function(n){return this.name+": "+Vf(this,n)};var ss=Nl,h3=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],m3=["scalar","sequence","mapping"];function g3(t){var n={};return t!==null&&Object.keys(t).forEach(function(s){t[s].forEach(function(l){n[String(l)]=s})}),n}function v3(t,n){if(n=n||{},Object.keys(n).forEach(function(s){if(h3.indexOf(s)===-1)throw new ss('Unknown option "'+s+'" is met in definition of "'+t+'" YAML type.')}),this.options=n,this.tag=t,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(s){return s},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=g3(n.styleAliases||null),m3.indexOf(this.kind)===-1)throw new ss('Unknown kind "'+this.kind+'" is specified for "'+t+'" YAML type.')}var ct=v3;function qp(t,n){var s=[];return t[n].forEach(function(l){var o=s.length;s.forEach(function(r,a){r.tag===l.tag&&r.kind===l.kind&&r.multi===l.multi&&(o=a)}),s[o]=l}),s}function _3(){var t={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,s;function l(o){o.multi?(t.multi[o.kind].push(o),t.multi.fallback.push(o)):t[o.kind][o.tag]=t.fallback[o.tag]=o}for(n=0,s=arguments.length;n<s;n+=1)arguments[n].forEach(l);return t}function Na(t){return this.extend(t)}Na.prototype.extend=function(n){var s=[],l=[];if(n instanceof ct)l.push(n);else if(Array.isArray(n))l=l.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(s=s.concat(n.implicit)),n.explicit&&(l=l.concat(n.explicit));else throw new ss("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(r){if(!(r instanceof ct))throw new ss("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new ss("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new ss("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),l.forEach(function(r){if(!(r instanceof ct))throw new ss("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var o=Object.create(Na.prototype);return o.implicit=(this.implicit||[]).concat(s),o.explicit=(this.explicit||[]).concat(l),o.compiledImplicit=qp(o,"implicit"),o.compiledExplicit=qp(o,"explicit"),o.compiledTypeMap=_3(o.compiledImplicit,o.compiledExplicit),o};var b3=Na,A3=new ct("tag:yaml.org,2002:str",{kind:"scalar",construct:function(t){return t!==null?t:""}}),w3=new ct("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(t){return t!==null?t:[]}}),B3=new ct("tag:yaml.org,2002:map",{kind:"mapping",construct:function(t){return t!==null?t:{}}}),C3=new b3({explicit:[A3,w3,B3]});function x3(t){if(t===null)return!0;var n=t.length;return n===1&&t==="~"||n===4&&(t==="null"||t==="Null"||t==="NULL")}function E3(){return null}function k3(t){return t===null}var D3=new ct("tag:yaml.org,2002:null",{kind:"scalar",resolve:x3,construct:E3,predicate:k3,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function S3(t){if(t===null)return!1;var n=t.length;return n===4&&(t==="true"||t==="True"||t==="TRUE")||n===5&&(t==="false"||t==="False"||t==="FALSE")}function F3(t){return t==="true"||t==="True"||t==="TRUE"}function $3(t){return Object.prototype.toString.call(t)==="[object Boolean]"}var P3=new ct("tag:yaml.org,2002:bool",{kind:"scalar",resolve:S3,construct:F3,predicate:$3,represent:{lowercase:function(t){return t?"true":"false"},uppercase:function(t){return t?"TRUE":"FALSE"},camelcase:function(t){return t?"True":"False"}},defaultStyle:"lowercase"});function O3(t){return 48<=t&&t<=57||65<=t&&t<=70||97<=t&&t<=102}function T3(t){return 48<=t&&t<=55}function L3(t){return 48<=t&&t<=57}function I3(t){if(t===null)return!1;var n=t.length,s=0,l=!1,o;if(!n)return!1;if(o=t[s],(o==="-"||o==="+")&&(o=t[++s]),o==="0"){if(s+1===n)return!0;if(o=t[++s],o==="b"){for(s++;s<n;s++)if(o=t[s],o!=="_"){if(o!=="0"&&o!=="1")return!1;l=!0}return l&&o!=="_"}if(o==="x"){for(s++;s<n;s++)if(o=t[s],o!=="_"){if(!O3(t.charCodeAt(s)))return!1;l=!0}return l&&o!=="_"}if(o==="o"){for(s++;s<n;s++)if(o=t[s],o!=="_"){if(!T3(t.charCodeAt(s)))return!1;l=!0}return l&&o!=="_"}}if(o==="_")return!1;for(;s<n;s++)if(o=t[s],o!=="_"){if(!L3(t.charCodeAt(s)))return!1;l=!0}return!(!l||o==="_")}function M3(t){var n=t,s=1,l;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),l=n[0],(l==="-"||l==="+")&&(l==="-"&&(s=-1),n=n.slice(1),l=n[0]),n==="0")return 0;if(l==="0"){if(n[1]==="b")return s*parseInt(n.slice(2),2);if(n[1]==="x")return s*parseInt(n.slice(2),16);if(n[1]==="o")return s*parseInt(n.slice(2),8)}return s*parseInt(n,10)}function N3(t){return Object.prototype.toString.call(t)==="[object Number]"&&t%1===0&&!Ti.isNegativeZero(t)}var R3=new ct("tag:yaml.org,2002:int",{kind:"scalar",resolve:I3,construct:M3,predicate:N3,represent:{binary:function(t){return t>=0?"0b"+t.toString(2):"-0b"+t.toString(2).slice(1)},octal:function(t){return t>=0?"0o"+t.toString(8):"-0o"+t.toString(8).slice(1)},decimal:function(t){return t.toString(10)},hexadecimal:function(t){return t>=0?"0x"+t.toString(16).toUpperCase():"-0x"+t.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),j3=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function V3(t){return!(t===null||!j3.test(t)||t[t.length-1]==="_")}function H3(t){var n,s;return n=t.replace(/_/g,"").toLowerCase(),s=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?s===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:s*parseFloat(n,10)}var q3=/^[-+]?[0-9]+e/;function W3(t,n){var s;if(isNaN(t))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===t)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===t)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Ti.isNegativeZero(t))return"-0.0";return s=t.toString(10),q3.test(s)?s.replace("e",".e"):s}function z3(t){return Object.prototype.toString.call(t)==="[object Number]"&&(t%1!==0||Ti.isNegativeZero(t))}var U3=new ct("tag:yaml.org,2002:float",{kind:"scalar",resolve:V3,construct:H3,predicate:z3,represent:W3,defaultStyle:"lowercase"}),G3=C3.extend({implicit:[D3,P3,R3,U3]}),K3=G3,Hf=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),qf=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function J3(t){return t===null?!1:Hf.exec(t)!==null||qf.exec(t)!==null}function Y3(t){var n,s,l,o,r,a,i,c=0,p=null,u,d,y;if(n=Hf.exec(t),n===null&&(n=qf.exec(t)),n===null)throw new Error("Date resolve error");if(s=+n[1],l=+n[2]-1,o=+n[3],!n[4])return new Date(Date.UTC(s,l,o));if(r=+n[4],a=+n[5],i=+n[6],n[7]){for(c=n[7].slice(0,3);c.length<3;)c+="0";c=+c}return n[9]&&(u=+n[10],d=+(n[11]||0),p=(u*60+d)*6e4,n[9]==="-"&&(p=-p)),y=new Date(Date.UTC(s,l,o,r,a,i,c)),p&&y.setTime(y.getTime()-p),y}function Z3(t){return t.toISOString()}var X3=new ct("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:J3,construct:Y3,instanceOf:Date,represent:Z3});function Q3(t){return t==="<<"||t===null}var ew=new ct("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Q3}),Li=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function tw(t){if(t===null)return!1;var n,s,l=0,o=t.length,r=Li;for(s=0;s<o;s++)if(n=r.indexOf(t.charAt(s)),!(n>64)){if(n<0)return!1;l+=6}return l%8===0}function nw(t){var n,s,l=t.replace(/[\r\n=]/g,""),o=l.length,r=Li,a=0,i=[];for(n=0;n<o;n++)n%4===0&&n&&(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)),a=a<<6|r.indexOf(l.charAt(n));return s=o%4*6,s===0?(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)):s===18?(i.push(a>>10&255),i.push(a>>2&255)):s===12&&i.push(a>>4&255),new Uint8Array(i)}function sw(t){var n="",s=0,l,o,r=t.length,a=Li;for(l=0;l<r;l++)l%3===0&&l&&(n+=a[s>>18&63],n+=a[s>>12&63],n+=a[s>>6&63],n+=a[s&63]),s=(s<<8)+t[l];return o=r%3,o===0?(n+=a[s>>18&63],n+=a[s>>12&63],n+=a[s>>6&63],n+=a[s&63]):o===2?(n+=a[s>>10&63],n+=a[s>>4&63],n+=a[s<<2&63],n+=a[64]):o===1&&(n+=a[s>>2&63],n+=a[s<<4&63],n+=a[64],n+=a[64]),n}function lw(t){return Object.prototype.toString.call(t)==="[object Uint8Array]"}var ow=new ct("tag:yaml.org,2002:binary",{kind:"scalar",resolve:tw,construct:nw,predicate:lw,represent:sw}),rw=Object.prototype.hasOwnProperty,aw=Object.prototype.toString;function iw(t){if(t===null)return!0;var n=[],s,l,o,r,a,i=t;for(s=0,l=i.length;s<l;s+=1){if(o=i[s],a=!1,aw.call(o)!=="[object Object]")return!1;for(r in o)if(rw.call(o,r))if(!a)a=!0;else return!1;if(!a)return!1;if(n.indexOf(r)===-1)n.push(r);else return!1}return!0}function cw(t){return t!==null?t:[]}var pw=new ct("tag:yaml.org,2002:omap",{kind:"sequence",resolve:iw,construct:cw}),uw=Object.prototype.toString;function dw(t){if(t===null)return!0;var n,s,l,o,r,a=t;for(r=new Array(a.length),n=0,s=a.length;n<s;n+=1){if(l=a[n],uw.call(l)!=="[object Object]"||(o=Object.keys(l),o.length!==1))return!1;r[n]=[o[0],l[o[0]]]}return!0}function fw(t){if(t===null)return[];var n,s,l,o,r,a=t;for(r=new Array(a.length),n=0,s=a.length;n<s;n+=1)l=a[n],o=Object.keys(l),r[n]=[o[0],l[o[0]]];return r}var yw=new ct("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:dw,construct:fw}),hw=Object.prototype.hasOwnProperty;function mw(t){if(t===null)return!0;var n,s=t;for(n in s)if(hw.call(s,n)&&s[n]!==null)return!1;return!0}function gw(t){return t!==null?t:{}}var vw=new ct("tag:yaml.org,2002:set",{kind:"mapping",resolve:mw,construct:gw});K3.extend({implicit:[X3,ew],explicit:[ow,pw,yw,vw]});function Wp(t){return t===48?"\0":t===97?"\x07":t===98?"\b":t===116||t===9?"	":t===110?`
`:t===118?"\v":t===102?"\f":t===114?"\r":t===101?"\x1B":t===32?" ":t===34?'"':t===47?"/":t===92?"\\":t===78?"":t===95?" ":t===76?"\u2028":t===80?"\u2029":""}var _w=new Array(256),bw=new Array(256);for(var ks=0;ks<256;ks++)_w[ks]=Wp(ks)?1:0,bw[ks]=Wp(ks);function Aw(t){return Array.from(new Set(t))}function zp(...t){let n,s,l;t.length===1?(n=0,l=1,[s]=t):[n,s,l=1]=t;const o=[];let r=n;for(;r<s;)o.push(r),r+=l||1;return o}function Wf(t,n){if(!n||n==="all"||n==="*")return zp(1,t+1);const s=[];for(const l of n.split(/[,;]/g))if(!l.includes("-"))s.push(+l);else{const[o,r]=l.split("-",2);s.push(...zp(+o,r?+r+1:t+1))}return Aw(s).filter(l=>l<=t).sort((l,o)=>l-o)}function zf(t){const n=F(()=>t.value.path),s=F(()=>Xe.length-1),l=F(()=>parseInt(n.value.split(/\//g).slice(-1)[0])||1),o=F(()=>_r(l.value)),r=F(()=>Xe.find(y=>y.path===`${l.value}`)),a=F(()=>{var y,m,h;return(h=(m=(y=r.value)==null?void 0:y.meta)==null?void 0:m.slide)==null?void 0:h.id}),i=F(()=>{var y,m;return((m=(y=r.value)==null?void 0:y.meta)==null?void 0:m.layout)||(l.value===1?"cover":"default")}),c=F(()=>Xe.find(y=>y.path===`${Math.min(Xe.length,l.value+1)}`)),p=F(()=>Xe.filter(y=>{var m,h;return(h=(m=y.meta)==null?void 0:m.slide)==null?void 0:h.title}).reduce((y,m)=>(Vi(y,m),y),[])),u=F(()=>Hi(p.value,r.value)),d=F(()=>qi(u.value));return{route:t,path:n,total:s,currentPage:l,currentPath:o,currentRoute:r,currentSlideId:a,currentLayout:i,nextRoute:c,rawTree:p,treeWithActiveStatuses:u,tree:d}}function Uf(t,n,s){const l=K(0);rt(()=>{bt.afterEach(async()=>{await rt(),l.value+=1})});const o=F(()=>{var c,p;return l.value,((p=(c=n.value)==null?void 0:c.meta)==null?void 0:p.__clicksElements)||[]}),r=F(()=>{var c,p;return+(((p=(c=n.value)==null?void 0:c.meta)==null?void 0:p.clicks)??o.value.length)}),a=F(()=>s.value<Xe.length-1||t.value<r.value),i=F(()=>s.value>1||t.value>0);return{clicks:t,clicksElements:o,clicksTotal:r,hasNext:a,hasPrev:i}}const ww=["id"],Bw=Pe({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(t,{emit:n}){const s=t,l=en(s,"clicksElements",n),o=F(()=>({height:`${xi}px`,width:`${In}px`})),r=sn();Mn(()=>Promise.resolve().then(()=>L1),void 0).then(p=>r.value=p.default);const a=F(()=>s.clicks),i=Uf(a,s.nav.currentRoute,s.nav.currentPage),c=F(()=>`${s.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return Dt(W,We({nav:{...s.nav,...i},configs:$e,themeConfigs:F(()=>$e.themeConfig)})),(p,u)=>{var d;return B(),X("div",{id:x(c),class:"print-slide-container",style:nt(x(o))},[R(x(Nf)),R(x(Oi),{is:(d=t.route)==null?void 0:d.component,"clicks-elements":x(l),"onUpdate:clicksElements":u[0]||(u[0]=y=>Oe(l)?l.value=y:null),clicks:x(a),"clicks-disabled":!1,class:Je(x(Pi)(t.route)),route:t.route},null,8,["is","clicks-elements","clicks","class","route"]),x(r)?(B(),q(x(r),{key:0,page:+t.route.path},null,8,["page"])):Ae("v-if",!0),R(x(Mf))],12,ww)}}}),Up=U(Bw,[["__file","/home/runner/work/web-vitails/web-vitails/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),Cw=Pe({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(t){var r;const n=t;I(W);const s=We(((r=n.route.meta)==null?void 0:r.__clicksElements)||[]),l=F(()=>n.route),o=zf(l);return(a,i)=>(B(),X(Le,null,[R(Up,{"clicks-elements":s,"onUpdate:clicksElements":i[0]||(i[0]=c=>s=c),clicks:0,nav:x(o),route:x(l)},null,8,["clicks-elements","nav","route"]),x(bl)?Ae("v-if",!0):(B(!0),X(Le,{key:0},Jl(s.length,c=>(B(),q(Up,{key:c,clicks:c,nav:x(o),route:x(l)},null,8,["clicks","nav","route"]))),128))],64))}}),xw=U(Cw,[["__file","/home/runner/work/web-vitails/web-vitails/node_modules/@slidev/client/internals/PrintSlide.vue"]]),Ew={id:"print-content"},kw=Pe({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(t){const n=t;I(W);const s=F(()=>n.width),l=F(()=>n.width/Ln),o=F(()=>s.value/l.value),r=F(()=>o.value<Ln?s.value/In:l.value*Ln/In);let a=Xe.slice(0,-1);Rt.value.query.range&&(a=Wf(a.length,Rt.value.query.range).map(p=>a[p-1]));const i=F(()=>({"select-none":!$e.selectable,"slidev-code-line-numbers":$e.lineNumbers}));return Dt(Jd,r),(c,p)=>(B(),X("div",{id:"print-container",class:Je(x(i))},[e("div",Ew,[(B(!0),X(Le,null,Jl(x(a),u=>(B(),q(xw,{key:u.path,route:u},null,8,["route"]))),128))]),Nt(c.$slots,"controls")],2))}});const Dw=U(kw,[["__file","/home/runner/work/web-vitails/web-vitails/node_modules/@slidev/client/internals/PrintContainer.vue"]]),Sw=Pe({__name:"Print",setup(t){return I(W),_s(()=>{Hs?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(n,s)=>(B(),X(Le,null,[x(Hs)?(B(),q(Rf,{key:0})):Ae("v-if",!0),e("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:nt(x(Ei))},[R(Dw,{class:"w-full h-full",style:nt({background:"var(--slidev-slide-container-background, black)"}),width:x(ys).width.value},null,8,["style","width"])],4)],64))}});const Fw=U(Sw,[["__file","/home/runner/work/web-vitails/web-vitails/node_modules/@slidev/client/internals/Print.vue"]]);const $w={class:"slidev-layout end"},Pw={__name:"end",setup(t){return I(W),(n,s)=>(B(),X("div",$w," END "))}},Ow=U(Pw,[["__scopeId","data-v-e532b98d"],["__file","/home/runner/work/web-vitails/web-vitails/node_modules/@slidev/client/layouts/end.vue"]]),Tw={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Lw=e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z"},null,-1),Iw=[Lw];function Mw(t,n){return B(),X("svg",Tw,Iw)}const Nw={name:"carbon-logo-github",render:Mw};function Gp(t){return t.startsWith("/")?"/web-vitails/"+t.slice(1):t}function Rw(t,n=!1){const s=t&&t[0]==="#"&&t.startsWith("rgb"),l={background:s?t:void 0,color:t&&!s?"white":void 0,backgroundImage:s?void 0:t?n?`linear-gradient(#0005, #0008), url(${Gp(t)})`:`url("${Gp(t)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return l.background||delete l.background,l}const jw={class:"my-auto w-full"},Vw=Pe({__name:"cover",props:{background:{default:""}},setup(t){const n=t;I(W);const s=F(()=>Rw(n.background,!0));return(l,o)=>(B(),X("div",{class:"slidev-layout cover",style:nt(x(s))},[e("div",jw,[Nt(l.$slots,"default")])],4))}}),Hw=U(Vw,[["__file","/home/runner/work/web-vitails/web-vitails/node_modules/@slidev/theme-default/layouts/cover.vue"]]),qw=e("h1",null,"Web Vitals",-1),Ww=e("p",null,"谷歌的新一代 Web 性能体验和质量指标",-1),zw={href:"https://github.com/lanxuexing/web-vitails",target:"_blank",alt:"GitHub",class:"abs-br m-6 text-xl icon-btn opacity-50 !border-none !hover:text-white"},Uw={__name:"1",setup(t){const n={theme:"default",background:"#FFF",class:"text-center",highlighter:"shiki",info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`};return I(W),(s,l)=>{const o=Nw;return B(),q(Hw,re(oe(n)),{default:O(()=>[qw,Ww,e("div",null,[e("a",zw,[R(o)])])]),_:1},16)}}},Gw=U(Uw,[["__file","/@slidev/slides/1.md"]]),Kw={class:"slidev-layout default"},Jw={__name:"default",setup(t){return I(W),(n,s)=>(B(),X("div",Kw,[Nt(n.$slots,"default")]))}},_e=U(Jw,[["__file","/home/runner/work/web-vitails/web-vitails/node_modules/@slidev/client/layouts/default.vue"]]);const Ii=t=>(Ee("data-v-ae5e7f61"),t=t(),ke(),t),Yw=Ii(()=>e("h1",null,"什么是Web Vitails",-1)),Zw=Ii(()=>e("blockquote",null,[e("p",null,[f("Web Vitals是Google的一项重大举措，旨在为质量信号提供统一的指导，这对于在Web上提供出色的用户体验来说很重要。 "),e("br"),f(" 网站的开发者需要了解自己的网站给用户带来的体验，但不一定要成为性能优化的专家。Web Vitals旨在简化流程，并帮助网站开发者聚焦在核心性能指标上，也称为Core Web Vitals。")])],-1)),Xw=Ii(()=>e("img",{filter:"~ dark:invert",class:"pt-10 w-100 m-auto",src:"https://lh6.googleusercontent.com/i9iF8GqgQhXkh1MLRlGQjYRxy_WzXNWTOTvBl5b-HCiL8HTgCk-Qh7PINQ1ruv-q5qUiRNhlpzKMybGzO_nYiTVOxIJoFBxBLRMIPCbI4AIcKLmcMhmh08JWQpCtpJq-hltKhiFi"},null,-1)),Qw={__name:"2",setup(t){const n={};return I(W),(s,l)=>(B(),q(_e,re(oe(n)),{default:O(()=>[Yw,Zw,Xw]),_:1},16))}},eB=U(Qw,[["__scopeId","data-v-ae5e7f61"],["__file","/@slidev/slides/2.md"]]),tB={class:"bg-$prism-background px-2 py-1 rounded font-mono inline-block text-0.4em transform translate-y-[-1.5em] translate-x-[-0.3em]"},nB={__name:"Marker",setup(t){return I(W),(n,s)=>(B(),X("span",tB,[Nt(n.$slots,"default")]))}},Ue=U(nB,[["__file","/home/runner/work/web-vitails/web-vitails/components/Marker.vue"]]);const Mi=t=>(Ee("data-v-1475a574"),t=t(),ke(),t),sB=Mi(()=>e("p",null,"以用户为中心的性能指标，应该能回答以下四个问题",-1)),lB=Mi(()=>e("br",null,null,-1)),oB=Mi(()=>e("ul",null,[e("li",null,[e("strong",null,"是否发生？"),f(" 导航是否成功启动？服务器是否有响应？")]),e("li",null,[e("strong",null,"是否有用？"),f(" 是否已渲染可以与用户互动的足够内容？")]),e("li",null,[e("strong",null,"是否有用？"),f(" 用户可以与页面交互，还是页面仍在忙于加载？")]),e("li",null,[e("strong",null,"是否令人愉快？"),f(" 交互是否顺畅而自然，没有滞后和卡顿？")])],-1)),rB={__name:"3",setup(t){const n={};return I(W),(s,l)=>{const o=Ue;return B(),q(_e,re(oe(n)),{default:O(()=>[e("h1",null,[f("如何准确衡量网站的性能 "),R(o,{class:"text-purple-400"},{default:O(()=>[f("思考")]),_:1})]),sB,lB,oB]),_:1},16)}}},aB=U(rB,[["__scopeId","data-v-1475a574"],["__file","/@slidev/slides/3.md"]]),iB={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},cB=e("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),pB=[cB];function uB(t,n){return B(),X("svg",iB,pB)}const dB={name:"ph-clipboard",render:uB},fB={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},yB=e("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),hB=[yB];function mB(t,n){return B(),X("svg",fB,hB)}const gB={name:"ph-check-circle",render:mB},vB=["title"],_B=Pe({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(t){const n=t;I(W);const s=I(hl),l=I(ns),o=I(ml);function r(d=5){const y=[],m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",h=m.length;for(let v=0;v<d;v++)y.push(m.charAt(Math.floor(Math.random()*h)));return y.join("")}const a=K(),i=wt();gn(()=>{const d=n.at==null?l==null?void 0:l.value.length:n.at,y=F(()=>o!=null&&o.value?n.ranges.length-1:Math.min(Math.max(0,((s==null?void 0:s.value)||0)-(d||0)),n.ranges.length-1)),m=F(()=>n.ranges[y.value]||"");if(n.ranges.length>=2&&!(o!=null&&o.value)){const h=r(),v=bv(n.ranges.length-1).map(_=>h+_);l!=null&&l.value&&(l.value.push(...v),ir(()=>v.forEach(_=>wa(l.value,_)),i))}_s(()=>{if(!a.value)return;const v=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value];for(const _ of v){const C=Array.from(_.querySelectorAll(".line")),A=Wf(C.length,m.value);if(C.forEach((w,E)=>{const $=A.includes(E+1);w.classList.toggle(es,!0),w.classList.toggle("highlighted",$),w.classList.toggle("dishonored",!$)}),n.maxHeight){const w=_.querySelector(".line.highlighted");w&&w.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:c,copy:p}=A0();function u(){var y,m;const d=(m=(y=a.value)==null?void 0:y.querySelector(".slidev-code"))==null?void 0:m.textContent;d&&p(d)}return(d,y)=>{const m=gB,h=dB;return B(),X("div",{ref_key:"el",ref:a,class:"slidev-code-wrapper relative group",style:nt({"max-height":n.maxHeight,"overflow-y":n.maxHeight?"scroll":void 0})},[Nt(d.$slots,"default"),x($e).codeCopy?(B(),X("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:x(c)?"Copied":"Copy",onClick:y[0]||(y[0]=v=>u())},[x(c)?(B(),q(m,{key:0,class:"p-2 w-8 h-8"})):(B(),q(h,{key:1,class:"p-2 w-8 h-8"}))],8,vB)):Ae("v-if",!0)],4)}}}),_n=U(_B,[["__file","/home/runner/work/web-vitails/web-vitails/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]);const zs=t=>(Ee("data-v-7c118cf2"),t=t(),ke(),t),bB=zs(()=>e("h1",null,"性能指标（Performance Metrics）",-1)),AB={class:"grid grid-cols-2 gap-x-4"},wB=zs(()=>e("ul",null,[e("li",null,[e("strong",null,"Load"),f(" - 当整个页面加载完成时（包括所有依赖资源，如样式表和图像）触发该事件")])],-1)),BB=zs(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"window"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"addEventListener"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'load'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"event"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"log"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'页面已完全加载'"),e("span",{style:{color:"#858585"}},");")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"});")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"window"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"addEventListener"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'load'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"event"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8C862B"}},"console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"log"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'页面已完全加载'"),e("span",{style:{color:"#8E8F8B"}},");")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"});")])])])],-1)),CB=zs(()=>e("ul",null,[e("li",null,[e("strong",null,"DOMContentLoaded"),f(" - HTML加载完成时（无需等待样式、图片和子框架加载完成）触发该事件")])],-1)),xB=zs(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"window"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"addEventListener"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'DOMContentLoaded'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"event"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"log"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'DOM 完全加载和解析'"),e("span",{style:{color:"#858585"}},");")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"});")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"window"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"addEventListener"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'DOMContentLoaded'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"event"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8C862B"}},"console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"log"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'DOM 完全加载和解析'"),e("span",{style:{color:"#8E8F8B"}},");")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"});")])])])],-1)),EB=zs(()=>e("img",{class:"m-auto w-170",filter:"~ dark:invert",src:"https://static001.infoq.cn/resource/image/42/d7/42c7b4924482fyy59b559054d5837ed7.png"},null,-1)),kB={__name:"4",setup(t){const n={};return I(W),(s,l)=>{const o=_n;return B(),q(_e,re(oe(n)),{default:O(()=>[bB,e("div",AB,[wB,R(o,Ye({},{ranges:[""]}),{default:O(()=>[BB]),_:1},16),CB,R(o,Ye({},{ranges:[""]}),{default:O(()=>[xB]),_:1},16)]),EB]),_:1},16)}}},DB=U(kB,[["__scopeId","data-v-7c118cf2"],["__file","/@slidev/slides/4.md"]]);const Gf=t=>(Ee("data-v-90fd6163"),t=t(),ke(),t),SB=Gf(()=>e("p",null,"当用户访问一个网站的时候，关心的第一个问题永远是“是否发生”——浏览器是否成功地把我的请求发送出去，而服务器是否已经知道并开始处理我的请求？",-1)),FB=Gf(()=>e("div",{class:"grid grid-cols-2 gap-x-4"},[e("ul",null,[e("li",null,[e("strong",null,"TTFB (Time to First Byte)"),e("ul",null,[e("li",null,[e("code",null,"首字节到达的时间点")])])]),e("li",null,[e("strong",null,"FP (First Paint)"),e("ul",null,[e("li",null,[e("code",null,"首次绘制，标记浏览器渲染任何在视觉上不同于导航前屏幕内容的时间点")])])]),e("li",null,[e("strong",null,"FCP (First Contentful Paint)"),e("ul",null,[e("li",null,[e("code",null,"首次内容绘制，标记浏览器渲染来自DOM第一位内容的时间点，内容可能是文本、图像等元素")])])])]),e("div",{class:"px-2 py-4"},[e("img",{filter:"~ dark:invert",src:"https://static001.infoq.cn/resource/image/bc/0b/bc9cccb614756cd59e24f4baf35f920b.png"})])],-1)),$B={__name:"5",setup(t){const n={};return I(W),(s,l)=>{const o=Ue;return B(),q(_e,re(oe(n)),{default:O(()=>[e("h1",null,[f("是否发生？"),R(o,{class:"text-rose-400"},{default:O(()=>[f("问题一")]),_:1})]),SB,FB]),_:1},16)}}},PB=U($B,[["__scopeId","data-v-90fd6163"],["__file","/@slidev/slides/5.md"]]);const Kf=t=>(Ee("data-v-2abe3208"),t=t(),ke(),t),OB=Kf(()=>e("p",null,"当用户确定自己的请求发生了后，就会开始关心第二个问题：“是否有用？”",-1)),TB=Kf(()=>e("div",{class:"grid grid-cols-2 gap-x-4"},[e("ul",null,[e("li",null,[e("strong",null,"FMP (First Meaningful Paint)"),e("ul",null,[e("li",null,[e("code",null,"首次有效绘制，是指首次绘制对用户有用内容的时间点")])])]),e("li",null,[e("strong",null,"LCP (Largest Contentful Paint)"),e("ul",null,[e("li",null,[e("code",null,"最大内容绘制时间，计算从页面开始加载到用户与页面发生交互（点击，滚动）这段时间内，最大元素绘制的时间，该时间会随着页面渲染变化而变化，因为页面中的最大元素在渲染过程中可能会发生改变")])])]),e("li",null,[e("strong",null,"SI (Speed Index)"),e("ul",null,[e("li",null,[e("code",null,"速度指标，填充页面内容的速度，取开始加载到最后完成渲染，每一时刻页面未完成度的积分")])])])]),e("div",{class:"px-2 py-4"},[e("img",{filter:"~ dark:invert",src:"https://static001.infoq.cn/resource/image/df/7e/dfdaf0555fd31ae467ddb700e2897f7e.png"})])],-1)),LB={__name:"6",setup(t){const n={};return I(W),(s,l)=>{const o=Ue;return B(),q(_e,re(oe(n)),{default:O(()=>[e("h1",null,[f("是否有用？"),R(o,{class:"text-rose-400"},{default:O(()=>[f("问题二")]),_:1})]),OB,TB]),_:1},16)}}},IB=U(LB,[["__scopeId","data-v-2abe3208"],["__file","/@slidev/slides/6.md"]]);const Jf=t=>(Ee("data-v-0feb3694"),t=t(),ke(),t),MB=Jf(()=>e("p",null,"在用户得到了有用的信息后，用户就会基于得到的信息作出反应，这就是页面“是否可用？”",-1)),NB=Jf(()=>e("div",{class:"grid grid-cols-2 gap-x-4"},[e("ul",null,[e("li",null,[e("strong",null,"Long Tasks"),e("ul",null,[e("li",null,[e("code",null,"耗时任务。浏览器是单线程，所有任务会被添加到主线程的队列中逐个执行。如果有任务耗时过长，主线程就会被阻塞，其他任务就只能等待，包括那些由用户交互产生的任务，从而无法及时响应用户")])])]),e("li",null,[e("strong",null,"TTI (Time to Interactive)"),e("ul",null,[e("li",null,[e("code",null,"可交互时间，用于标记页面已进行视觉渲染并能可靠响应用户输入的时间点")])])]),e("li",null,[e("strong",null,"TBT (Total Blocking Time)"),e("ul",null,[e("li",null,[e("code",null,"总共阻塞时间，计算的是从 FCP 到 TTI 之间，主线程阻塞的总时间")])])]),e("li",null,[e("strong",null,"FID (First Input Delay)"),e("ul",null,[e("li",null,[e("code",null,"首次输入延迟，指用户首次输入到页面响应的时间")])])])]),e("div",{class:"px-2 py-4"},[e("img",{filter:"~ dark:invert",src:"https://static001.infoq.cn/resource/image/bb/21/bb5yyd9fab93e2ff660a38685de67621.png"})])],-1)),RB={__name:"7",setup(t){const n={};return I(W),(s,l)=>{const o=Ue;return B(),q(_e,re(oe(n)),{default:O(()=>[e("h1",null,[f("是否有用？"),R(o,{class:"text-rose-400"},{default:O(()=>[f("问题三")]),_:1})]),MB,NB]),_:1},16)}}},jB=U(RB,[["__scopeId","data-v-0feb3694"],["__file","/@slidev/slides/7.md"]]);const Yf=t=>(Ee("data-v-1361642a"),t=t(),ke(),t),VB=Yf(()=>e("p",null,"在用户得到了有用的信息后，用户就会基于得到的信息作出反应，这就是页面“是否可用？”",-1)),HB=Yf(()=>e("div",{class:"grid grid-cols-2 gap-x-4"},[e("ul",null,[e("li",null,[e("strong",null,"CLS (Cumulative Layout Shift)"),e("ul",null,[e("li",null,[e("code",null,"累计布局偏移。测量在页面的整个生命周期中发生的每个意外的样式移动所造成的布局偏移分数的总和")])])])]),e("div",{class:"px-2 py-4"},[e("img",{filter:"~ dark:invert",src:"https://static001.infoq.cn/resource/image/c0/1a/c0c492896796599a38731cd0390a3b1a.gif"})])],-1)),qB={__name:"8",setup(t){const n={};return I(W),(s,l)=>{const o=Ue;return B(),q(_e,re(oe(n)),{default:O(()=>[e("h1",null,[f("是否令人愉快？"),R(o,{class:"text-rose-400"},{default:O(()=>[f("问题四")]),_:1})]),VB,HB]),_:1},16)}}},WB=U(qB,[["__scopeId","data-v-1361642a"],["__file","/@slidev/slides/8.md"]]),zB={class:"slidev-layout center h-full grid place-content-center"},UB={class:"my-auto"},GB={__name:"center",setup(t){return I(W),(n,s)=>(B(),X("div",zB,[e("div",UB,[Nt(n.$slots,"default")])]))}},Bt=U(GB,[["__file","/home/runner/work/web-vitails/web-vitails/node_modules/@slidev/client/layouts/center.vue"]]),KB=e("h1",null,"Core Web Vitals",-1),JB=e("p",null,"核心性能指标",-1),YB={__name:"9",setup(t){const n={layout:"center",class:"text-center"};return I(W),(s,l)=>(B(),q(Bt,re(oe(n)),{default:O(()=>[KB,JB]),_:1},16))}},ZB=U(YB,[["__file","/@slidev/slides/9.md"]]),XB=e("h1",null,"Core Web Vitals",-1),QB=e("div",{class:"pt-12 flex justify-center"},[e("div",null,[e("img",{class:"w-60",src:"https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ZZU8Z7TMKXmzZT2mCjJU.svg"}),e("p",{class:"text-center opacity-50 cursor-pointer text-sm"},[e("a",{href:"https://web.dev/lcp/",target:"_blank",rel:"noopener"},"最大内容绘制")])]),e("div",null,[e("img",{class:"w-60",src:"https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/iHYrrXKe4QRcb2uu8eV8.svg"}),e("p",{class:"text-center opacity-50 cursor-pointer text-sm"},[e("a",{href:"https://web.dev/fid/",target:"_blank",rel:"noopener"},"首次输入延迟")])]),e("div",null,[e("img",{class:"w-60",src:"https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dgpDFckbHwwOKdIGDa3N.svg"}),e("p",{class:"text-center opacity-50 cursor-pointer text-sm"},[e("a",{herf:"https://web.dev/cls/",target:"_blank",rel:"noopener"},"累积布局偏移")])])],-1),eC={__name:"10",setup(t){const n={};return I(W),(s,l)=>(B(),q(_e,re(oe(n)),{default:O(()=>[XB,QB]),_:1},16))}},tC=U(eC,[["__file","/@slidev/slides/10.md"]]),nC=e("h1",null,"LCP (Largest Contentful Paint)",-1),sC=e("p",null,[f("衡量加载体验 "),e("strong",null,"·"),f(" 最大内容绘制")],-1),lC={__name:"11",setup(t){const n={layout:"center",class:"text-center"};return I(W),(s,l)=>(B(),q(Bt,re(oe(n)),{default:O(()=>[nC,sC]),_:1},16))}},oC=U(lC,[["__file","/@slidev/slides/11.md"]]),rC={__name:"MarkerCore",setup(t){return I(W),(n,s)=>{const l=Ue;return B(),q(l,{class:"text-green-500"},{default:O(()=>[f("Core")]),_:1})}}},Ni=U(rC,[["__file","/home/runner/work/web-vitails/web-vitails/components/MarkerCore.vue"]]);const Zf=t=>(Ee("data-v-fe9fdad2"),t=t(),ke(),t),aC=Zf(()=>e("p",null,"最大内容绘制时间。测量加载性能，为了能提供较好的用户体验，LCP指标建议页面首次加载要在2.5s内完成",-1)),iC=Zf(()=>e("div",{class:"grid grid-cols-2 gap-x-4 pt-10"},[e("ul",null,[e("li",null,[e("strong",null,"定义"),e("ul",null,[e("li",null,[e("code",null,"页面开始加载到最大文本块内容或图片显示在页面中的时间")])])]),e("li",null,[e("strong",null,"为什么是LCP？"),e("ul",null,[e("li",null,[e("code",null,"Load、DOMContentLoaded 指标不友好，例如Skeleton骨架屏、Loading加载器")]),e("li",null,[e("code",null,"FMP、SI指标复杂，有的时候甚至是错的")])])]),e("li",null,[e("strong",null,"什么样的指标才是好的？"),e("ul",null,[e("li",null,[e("img",{src:"https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/elqsdYqQEefWJbUM2qMO.svg"})])])])]),e("div",null,[e("ul",null,[e("li",null,[e("p",null,[e("strong",null,"LCP关注哪些元素？")]),e("ul",null,[e("li",null,[e("code",null,"<img>元素")]),e("li",null,[e("code",null,"<image>元素内的<svg>元素")]),e("li",null,[e("code",null,"<video>元素（仅仅指poster海报图）")]),e("li",null,[e("code",null,"通过 url() 函数加载背景图片的元素")]),e("li",null,[e("code",null,"包含文本节点或其他内联文本元素子级的块级元素")])])]),e("li",null,[e("p",null,[e("strong",null,"不断发展的LCP指标")]),e("ul",null,[e("li",null,[e("code",null,"显然不止于此，这些元素只是目前LCP分数考虑的元素类型，之后随着研究的深入，会陆续进行更新")])])])])])],-1)),cC={__name:"12",setup(t){const n={};return I(W),(s,l)=>{const o=Ni;return B(),q(_e,re(oe(n)),{default:O(()=>[e("h1",null,[f("LCP (Largest Contentful Paint) "),R(o)]),aC,iC]),_:1},16)}}},pC=U(cC,[["__scopeId","data-v-fe9fdad2"],["__file","/@slidev/slides/12.md"]]);const uC=t=>(Ee("data-v-213e2124"),t=t(),ke(),t),dC=uC(()=>e("div",{class:"grid grid-cols-2 gap-x-4"},[e("div",null,[e("h1",null,"Rules"),e("p",null,"如何确定元素的大小"),e("div",{class:"mt-10"}),e("h3",null,"图像"),e("ul",null,[e("li",null,[f("视口viewport内可见visible元素的大小 "),e("blockquote",null,[e("p",null,"clip和overflow等将被忽略")])]),e("li",null,"缩小图像的大小以缩小显示的为准"),e("li",null,"拉伸后的图像以图像的原始尺寸为准")]),e("div",{class:"mt-10"}),e("h3",null,"文本"),e("ul",null,[e("li",null,"仅考虑其文本节点的大小"),e("li",null,[f("所有元素，均不考虑 "),e("strong",null,"margin/padding/border"),f(" 样式")])])]),e("div",null,[e("h1",null,"Outputs"),e("p",null,"什么时候应该记录"),e("div",{class:"mt-10"}),e("h3",null,"API"),e("ul",null,[e("li",null,"网页分阶段加载，页面最大的元素可能会发生变化"),e("li",null,[f("PerformanceEntry API 调度与记录 "),e("blockquote",null,[e("p",null,"浏览器在浏览器绘制第一帧后立即调度PerformanceEntry记录LCP，之后有最大元素出现则更新")])])]),e("div",{class:"mt-10"}),e("h3",null,"边界条件"),e("ul",null,[e("li",null,"当前是最大内容元素从视口中删除（或从DOM中删除），除非呈现更大的元素，否则原来将被保持"),e("li",null,"一旦用户与页面交互（通过点击、滚动或按键），浏览器将停止记录LCP")])])],-1)),fC={__name:"13",setup(t){const n={};return I(W),(s,l)=>(B(),q(_e,re(oe(n)),{default:O(()=>[dC]),_:1},16))}},yC=U(fC,[["__scopeId","data-v-213e2124"],["__file","/@slidev/slides/13.md"]]);const hC=t=>(Ee("data-v-092d4977"),t=t(),ke(),t),mC=hC(()=>e("div",{class:"grid grid-cols-2 gap-x-4"},[e("div",null,[e("h1",null,"案例一"),e("h3",null,"新内容被添加到 DOM 中并且改变了最大的元素"),e("img",{class:"w-100 mb-4 mt-4",src:"https://web-dev.imgix.net/image/admin/bsBm8poY1uQbq7mNvVJm.png"}),e("h3",null,"布局更改并且以前最大的内容从视口中删除"),e("img",{class:"w-100 mt-4",src:"https://web-dev.imgix.net/image/admin/xAvLL1u2KFRaqoZZiI71.png"})]),e("div",null,[e("h1",null,"案例二"),e("h3",null,"IG 徽标加载早，即使其他内容逐渐显示，它仍然是最大的元素"),e("img",{class:"w-100 mb-4 mt-4",src:"https://web-dev.imgix.net/image/admin/uJAGswhXK3bE6Vs4I5bP.png"}),e("h3",null,"最大的元素是一段文本从一开始就出现且贯穿始终"),e("img",{class:"w-100 mt-4",src:"https://web-dev.imgix.net/image/admin/e0O2woQjZJ92aYlPOJzT.png"})])],-1)),gC={__name:"14",setup(t){const n={};return I(W),(s,l)=>(B(),q(_e,re(oe(n)),{default:O(()=>[mC]),_:1},16))}},vC=U(gC,[["__scopeId","data-v-092d4977"],["__file","/@slidev/slides/14.md"]]),_C="/web-vitails/console-lcp.png";const Xf=t=>(Ee("data-v-bc9ae405"),t=t(),ke(),t),bC=Xf(()=>e("h1",null,"如何测量 LCP ？",-1)),AC=Xf(()=>e("div",{class:"grid grid-cols-2 gap-x-4"},[e("ul",null,[e("li",null,[e("p",null,[e("strong",null,"线上测量工具")]),e("ul",null,[e("li",null,[e("code",null,"Chrome User Experience Report")]),e("li",null,[e("code",null,"PageSpeed Insights")]),e("li",null,[e("code",null,"Search Console (Core Web Vitals report)")]),e("li",null,[e("code",null,"web-vitals JavaScript library")])])]),e("li",null,[e("p",null,[e("strong",null,"web-vitals JavaScript library")]),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"getLCP"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'web-vitals'"),e("span",{style:{color:"#858585"}},";")]),f(`
`),e("span",{class:"line"}),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// 一旦 LCP 可用，立即测量并记录它")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"getLCP"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"log"),e("span",{style:{color:"#858585"}},");")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"getLCP"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'web-vitals'"),e("span",{style:{color:"#8E8F8B"}},";")]),f(`
`),e("span",{class:"line"}),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// 一旦 LCP 可用，立即测量并记录它")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"getLCP"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"log"),e("span",{style:{color:"#8E8F8B"}},");")])])])])])]),e("div",{class:"px-2"},[e("ul",null,[e("li",null,[e("p",null,[e("strong",null,"实验室工具")]),e("ul",null,[e("li",null,[e("code",null,"Chrome DevTools")]),e("li",null,[e("code",null,"Lighthouse")]),e("li",null,[e("code",null,"WebPageTest")])])]),e("li",null,[e("p",null,[e("strong",null,"浏览器中的 PerformanceObserver 结果")])])]),e("img",{filter:"~ :dark:invert",src:_C})])],-1)),wC={__name:"15",setup(t){const n={};return I(W),(s,l)=>(B(),q(_e,re(oe(n)),{default:O(()=>[bC,AC]),_:1},16))}},BC=U(wC,[["__scopeId","data-v-bc9ae405"],["__file","/@slidev/slides/15.md"]]),CC=e("h1",null,"在 JavaScript 中如何测量 LCP ?",-1),xC=e("p",null,"Largest Contentful Paint API",-1),EC={class:"grid grid-cols-2 gap-x-4"},kC=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"<!-- ")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"  API与指标之间的差异：")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"    1. Tab选项卡")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"    2. 浏览器的前进和后退")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"    3. iframe")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"    4. ...")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}}," -->")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"img"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"src"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"large_image.jpg"'),e("span",{style:{color:"#858585"}},">")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"p"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"id"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},"'large-paragraph'"),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"This is large body of text."),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"p"),e("span",{style:{color:"#858585"}},">")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"...")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// 创建性能观察器")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"observer"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"PerformanceObserver"),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#B8A965"}},"entryList"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"perfEntries"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"entryList"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"getEntries"),e("span",{style:{color:"#858585"}},"();")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"lastEntry"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"perfEntries"),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#B8A965"}},"perfEntries"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#429988"}},"length"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},"];")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"  "),e("span",{style:{color:"#758575"}},"// 处理相关指标信息")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"});")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"observer"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"observe"),e("span",{style:{color:"#858585"}},"({"),e("span",{style:{color:"#E0A569"}},"entryTypes"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#C98A7D"}},"'largest-contentful-paint'"),e("span",{style:{color:"#858585"}},"]});")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"<!-- ")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"  API与指标之间的差异：")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"    1. Tab选项卡")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"    2. 浏览器的前进和后退")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"    3. iframe")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"    4. ...")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}}," -->")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"img"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"src"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"large_image.jpg"'),e("span",{style:{color:"#8E8F8B"}},">")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"p"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"id"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},"'large-paragraph'"),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"This is large body of text."),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"p"),e("span",{style:{color:"#8E8F8B"}},">")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"...")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// 创建性能观察器")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"observer"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"PerformanceObserver"),e("span",{style:{color:"#8E8F8B"}},"(("),e("span",{style:{color:"#8C862B"}},"entryList"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"perfEntries"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"entryList"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"getEntries"),e("span",{style:{color:"#8E8F8B"}},"();")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"lastEntry"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"perfEntries"),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#8C862B"}},"perfEntries"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#2F8A89"}},"length"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},"];")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"  "),e("span",{style:{color:"#A0ADA0"}},"// 处理相关指标信息")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"});")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"observer"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"observe"),e("span",{style:{color:"#8E8F8B"}},"({"),e("span",{style:{color:"#B58451"}},"entryTypes"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B56959"}},"'largest-contentful-paint'"),e("span",{style:{color:"#8E8F8B"}},"]});")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),DC=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"<!-- 最大元素与最重要有差异？自定义指标 -->")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"img"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"elementtiming"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"hero-image"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"/>")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"p"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"elementtiming"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"important-paragraph"'),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}},"This is text I care about."),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"p"),e("span",{style:{color:"#858585"}},">")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"...")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// 捕获错误，因为某些浏览器在使用新的 `type` 选项时会抛出错误")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"try"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"  "),e("span",{style:{color:"#758575"}},"// 创建性能观察器")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"po"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"PerformanceObserver"),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#B8A965"}},"entryList"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"for"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"entry"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"of"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"entryList"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"getEntries"),e("span",{style:{color:"#858585"}},"())"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"      "),e("span",{style:{color:"#758575"}},"// 打印记录条目和所有相关的详细信息")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#B8A965"}},"console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"log"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"entry"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"toJSON"),e("span",{style:{color:"#858585"}},"());")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"});")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"  "),e("span",{style:{color:"#758575"}},"// 开始监听要调度的 `element` 条目")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"po"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"observe"),e("span",{style:{color:"#858585"}},"({"),e("span",{style:{color:"#E0A569"}},"type"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'element'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"buffered"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"true"),e("span",{style:{color:"#858585"}},"});")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"catch"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"e"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"  "),e("span",{style:{color:"#758575"}},"// 如果浏览器不支持此 API，则什么也不做")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"<!-- 最大元素与最重要有差异？自定义指标 -->")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"img"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"elementtiming"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"hero-image"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"/>")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"p"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"elementtiming"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"important-paragraph"'),e("span",{style:{color:"#8E8F8B"}},">"),e("span",{style:{color:"#393A34"}},"This is text I care about."),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"p"),e("span",{style:{color:"#8E8F8B"}},">")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"...")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// 捕获错误，因为某些浏览器在使用新的 `type` 选项时会抛出错误")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"try"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"  "),e("span",{style:{color:"#A0ADA0"}},"// 创建性能观察器")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"po"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"PerformanceObserver"),e("span",{style:{color:"#8E8F8B"}},"(("),e("span",{style:{color:"#8C862B"}},"entryList"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"for"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"entry"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"of"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"entryList"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"getEntries"),e("span",{style:{color:"#8E8F8B"}},"())"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"      "),e("span",{style:{color:"#A0ADA0"}},"// 打印记录条目和所有相关的详细信息")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8C862B"}},"console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"log"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"entry"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"toJSON"),e("span",{style:{color:"#8E8F8B"}},"());")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"});")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"  "),e("span",{style:{color:"#A0ADA0"}},"// 开始监听要调度的 `element` 条目")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8C862B"}},"po"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"observe"),e("span",{style:{color:"#8E8F8B"}},"({"),e("span",{style:{color:"#B58451"}},"type"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'element'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"buffered"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"true"),e("span",{style:{color:"#8E8F8B"}},"});")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"catch"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"e"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"  "),e("span",{style:{color:"#A0ADA0"}},"// 如果浏览器不支持此 API，则什么也不做")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1),SC={__name:"16",setup(t){const n={};return I(W),(s,l)=>{const o=_n;return B(),q(_e,re(oe(n)),{default:O(()=>[CC,xC,e("div",EC,[R(o,Ye({},{ranges:[""]}),{default:O(()=>[kC]),_:1},16),R(o,Ye({},{ranges:[""]}),{default:O(()=>[DC]),_:1},16)])]),_:1},16)}}},FC=U(SC,[["__file","/@slidev/slides/16.md"]]),$C=e("h1",null,"Optimize LCP（Largest Contentful Paint）",-1),PC=e("p",null,"优化最大的内容绘制",-1),OC={__name:"17",setup(t){const n={layout:"center",class:"text-center"};return I(W),(s,l)=>(B(),q(Bt,re(oe(n)),{default:O(()=>[$C,PC]),_:1},16))}},TC=U(OC,[["__file","/@slidev/slides/17.md"]]);const Qf=t=>(Ee("data-v-03880a6d"),t=t(),ke(),t),LC=Qf(()=>e("h1",null,"如何优化 LCP ？",-1)),IC=Qf(()=>e("div",{class:"grid grid-cols-2 gap-x-4 gap-y-4"},[e("h3",null,"LCP 可能被这四个因素影响"),e("h3",null,"优化 LCP 的建议"),e("div",null,[e("ul",null,[e("li",null,[e("strong",null,"服务端响应时间")]),e("li",null,[e("strong",null,"Javascript 和 CSS 引起的渲染卡顿")]),e("li",null,[e("strong",null,"资源加载时间")]),e("li",null,[e("strong",null,"客户端渲染")])])]),e("div",null,[e("ul",null,[e("li",null,[e("strong",null,"应用 PRPL 即时加载（将请求推迟到需要时再发送）")]),e("li",null,[e("strong",null,"优化关键渲染路径")]),e("li",null,[e("strong",null,"优化 CSS")]),e("li",null,[e("strong",null,"优化 Image")]),e("li",null,[e("strong",null,"优化 Web Font")]),e("li",null,[e("strong",null,"优化 JavaScript")]),e("li",null,[e("strong",null,"使用 Gzip 和 Brotli 压缩文件资源，降低传输时间")]),e("li",null,[e("strong",null,"使用 service worker 缓存资源")])]),e("div",{class:"mt-2"}),e("blockquote",null,[e("p",null,[f("PRPL模式 "),e("br"),f("          Push：（推送或预加载）最重要的资源 "),e("br"),f("          Render：尽快渲染初始路线 "),e("br"),f("          Pre-cache：预缓存剩余资源 "),e("br"),f("          Lazy load：延迟加载其他路由和非关键资源")])])])],-1)),MC={__name:"18",setup(t){const n={};return I(W),(s,l)=>(B(),q(_e,re(oe(n)),{default:O(()=>[LC,IC]),_:1},16))}},NC=U(MC,[["__scopeId","data-v-03880a6d"],["__file","/@slidev/slides/18.md"]]),RC=["width","height"],jC=["id"],VC=["fill"],HC=["x1","y1","x2","y2","stroke","stroke-width","marker-end"],qC=Pe({__name:"Arrow",props:{x1:{type:[Number,String],required:!0},y1:{type:[Number,String],required:!0},x2:{type:[Number,String],required:!0},y2:{type:[Number,String],required:!0},width:{type:[Number,String],required:!1},color:{type:String,required:!1}},setup(t){I(W);const s=vv("abcedfghijklmn",10)();return(l,o)=>(B(),X("svg",{class:"absolute left-0 top-0 pointer-events-none",width:Math.max(+t.x1,+t.x2)+50,height:Math.max(+t.y1,+t.y2)+50},[e("defs",null,[e("marker",{id:x(s),markerUnits:"strokeWidth",markerWidth:10,markerHeight:7,refX:"9",refY:"3.5",orient:"auto"},[e("polygon",{points:"0 0, 10 3.5, 0 7",fill:t.color||"currentColor"},null,8,VC)],8,jC)]),e("line",{x1:+t.x1,y1:+t.y1,x2:+t.x2,y2:+t.y2,stroke:t.color||"currentColor","stroke-width":t.width||2,"marker-end":`url(#${x(s)})`},null,8,HC)],8,RC))}}),WC=U(qC,[["__file","/home/runner/work/web-vitails/web-vitails/node_modules/@slidev/client/builtin/Arrow.vue"]]),zC=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// Minify CSS Plugin")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"npm"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"install"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"--"),e("span",{style:{color:"#B8A965"}},"save"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#B8A965"}},"dev"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"optimize"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#B8A965"}},"css"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#B8A965"}},"assets"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#B8A965"}},"webpack"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#B8A965"}},"plugin")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// Minify CSS Plugin")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"npm"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"install"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"--"),e("span",{style:{color:"#8C862B"}},"save"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#8C862B"}},"dev"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"optimize"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#8C862B"}},"css"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#8C862B"}},"assets"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#8C862B"}},"webpack"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#8C862B"}},"plugin")])])])],-1),UC=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// 使用媒体查询优化 CSS 背景图像")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#429988"}},"body"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"background-position"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"center"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"center"),e("span",{style:{color:"#858585"}},";")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"background-attachment"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"fixed"),e("span",{style:{color:"#858585"}},";")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"background-repeat"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"no-repeat"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"background-size"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"cover"),e("span",{style:{color:"#858585"}},";")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"background-image"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"url"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"images/background-desktop.jpg"),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// 这一行可以使用 `@media` 来适配不同屏幕")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// 手机")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"@"),e("span",{style:{color:"#4D9375"}},"media"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"max-width"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"480"),e("span",{style:{color:"#CB7676"}},"px"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#429988"}},"body"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"background-image"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"url"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"images/background-mobile.jpg"),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// 平板")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"@"),e("span",{style:{color:"#4D9375"}},"media"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"min-width"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"481"),e("span",{style:{color:"#CB7676"}},"px"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"and"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"max-width"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1024"),e("span",{style:{color:"#CB7676"}},"px"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#429988"}},"body"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"background-image"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"url"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"images/background-tablet.jpg"),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// PC")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"@"),e("span",{style:{color:"#4D9375"}},"media"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"min-width"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1025"),e("span",{style:{color:"#CB7676"}},"px"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#429988"}},"body"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"background-image"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"url"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"images/background-desktop.jpg"),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// 使用媒体查询优化 CSS 背景图像")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#2F8A89"}},"body"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"background-position"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"center"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"center"),e("span",{style:{color:"#8E8F8B"}},";")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"background-attachment"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"fixed"),e("span",{style:{color:"#8E8F8B"}},";")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"background-repeat"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"no-repeat"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"background-size"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"cover"),e("span",{style:{color:"#8E8F8B"}},";")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"background-image"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"url"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"images/background-desktop.jpg"),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// 这一行可以使用 `@media` 来适配不同屏幕")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// 手机")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"@"),e("span",{style:{color:"#1C6B48"}},"media"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"max-width"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"480"),e("span",{style:{color:"#AB5959"}},"px"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#2F8A89"}},"body"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"background-image"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"url"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"images/background-mobile.jpg"),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// 平板")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"@"),e("span",{style:{color:"#1C6B48"}},"media"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"min-width"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"481"),e("span",{style:{color:"#AB5959"}},"px"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"and"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"max-width"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1024"),e("span",{style:{color:"#AB5959"}},"px"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#2F8A89"}},"body"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"background-image"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"url"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"images/background-tablet.jpg"),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// PC")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"@"),e("span",{style:{color:"#1C6B48"}},"media"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"min-width"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1025"),e("span",{style:{color:"#AB5959"}},"px"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#2F8A89"}},"body"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"background-image"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"url"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"images/background-desktop.jpg"),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),GC={__name:"19",setup(t){const n={clicks:2};return I(W),(s,l)=>{const o=Ue,r=_n,a=WC,i=Km("click");return B(),q(_e,re(oe(n)),{default:O(()=>[e("h1",null,[f("Optimize CSS "),R(o,{class:"text-orange-400"},{default:O(()=>[f("技巧一")]),_:1})]),R(r,Ye({},{ranges:[""]}),{default:O(()=>[zC]),_:1},16),R(r,Ye({},{ranges:["all","6","all"]}),{default:O(()=>[UC]),_:1},16),cr(R(a,{x1:"400",y1:"420",x2:"230",y2:"280",color:"#564",width:"3",arrowSize:"1"},null,512),[[i,1],[Ai,2]])]),_:1},16)}}},KC=U(GC,[["__file","/@slidev/slides/19.md"]]);const Us=t=>(Ee("data-v-ee371282"),t=t(),ke(),t),JC=Us(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"<!-- 关键渲染路径：找出渲染首屏的最小 CSS 集合（Critical CSS），并把它们写到 <head> 部分，从而让浏览器接收到 HTML 文件后就尽快渲染出页面 -->")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"head"),e("span",{style:{color:"#858585"}},">")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"meta"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"charset"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"UTF-8"'),e("span",{style:{color:"#858585"}},">")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#758575"}},"<!-- 提取（Extract）关键CSS，内联 -->")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"  <"),e("span",{style:{color:"#429988"}},"style"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"type"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"text/css"'),e("span",{style:{color:"#858585"}},">")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#E0A569"}},"accordion-btn"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#E0A569"}},"background-color"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#D4976C"}},"ADD8E6"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#E0A569"}},"color"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"#"),e("span",{style:{color:"#D4976C"}},"444"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#E0A569"}},"cursor"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"pointer"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#E0A569"}},"padding"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"18"),e("span",{style:{color:"#CB7676"}},"px"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#E0A569"}},"width"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"100"),e("span",{style:{color:"#CB7676"}},"%"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#E0A569"}},"border"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"none"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#E0A569"}},"text-align"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"left"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#E0A569"}},"outline"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"none"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#E0A569"}},"font-size"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"15"),e("span",{style:{color:"#CB7676"}},"px"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#E0A569"}},"transition"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0.4"),e("span",{style:{color:"#CB7676"}},"s"),e("span",{style:{color:"#858585"}},";}."),e("span",{style:{color:"#E0A569"}},"container"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#E0A569"}},"padding"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"18"),e("span",{style:{color:"#CB7676"}},"px"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#E0A569"}},"display"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"none"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#E0A569"}},"background-color"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"white"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#E0A569"}},"overflow"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"hidden"),e("span",{style:{color:"#858585"}},";}"),e("span",{style:{color:"#429988"}},"h1"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#E0A569"}},"word-spacing"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"5"),e("span",{style:{color:"#CB7676"}},"px"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#E0A569"}},"color"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"blue"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#E0A569"}},"font-weight"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"bold"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#E0A569"}},"text-align"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"center"),e("span",{style:{color:"#858585"}},";}")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"style"),e("span",{style:{color:"#858585"}},">")]),f(`
`),e("span",{class:"line"}),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#758575"}},'<!-- 非关键CSS异步外链（增加 rel="preload" 属性预加载） -->')]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"link"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"rel"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"preload"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"href"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"styles.css"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"as"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"style"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"onload"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"'),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#C98A7D"}},"onload"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#C98A7D"}},"rel"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#C98A7D"}},"'stylesheet'"),e("span",{style:{color:"#DBD7CA"}},'"'),e("span",{style:{color:"#858585"}},">")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"noscript"),e("span",{style:{color:"#858585"}},"><"),e("span",{style:{color:"#429988"}},"link"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"rel"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"stylesheet"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"href"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"styles.css"'),e("span",{style:{color:"#858585"}},"></"),e("span",{style:{color:"#429988"}},"noscript"),e("span",{style:{color:"#858585"}},">")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"head"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"<!-- 关键渲染路径：找出渲染首屏的最小 CSS 集合（Critical CSS），并把它们写到 <head> 部分，从而让浏览器接收到 HTML 文件后就尽快渲染出页面 -->")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"head"),e("span",{style:{color:"#8E8F8B"}},">")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"meta"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"charset"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"UTF-8"'),e("span",{style:{color:"#8E8F8B"}},">")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#A0ADA0"}},"<!-- 提取（Extract）关键CSS，内联 -->")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"  <"),e("span",{style:{color:"#2F8A89"}},"style"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"type"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"text/css"'),e("span",{style:{color:"#8E8F8B"}},">")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#B58451"}},"accordion-btn"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B58451"}},"background-color"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#A65E2B"}},"ADD8E6"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#B58451"}},"color"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"#"),e("span",{style:{color:"#A65E2B"}},"444"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#B58451"}},"cursor"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"pointer"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#B58451"}},"padding"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"18"),e("span",{style:{color:"#AB5959"}},"px"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#B58451"}},"width"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"100"),e("span",{style:{color:"#AB5959"}},"%"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#B58451"}},"border"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"none"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#B58451"}},"text-align"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"left"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#B58451"}},"outline"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"none"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#B58451"}},"font-size"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"15"),e("span",{style:{color:"#AB5959"}},"px"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#B58451"}},"transition"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0.4"),e("span",{style:{color:"#AB5959"}},"s"),e("span",{style:{color:"#8E8F8B"}},";}."),e("span",{style:{color:"#B58451"}},"container"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B58451"}},"padding"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"18"),e("span",{style:{color:"#AB5959"}},"px"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#B58451"}},"display"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"none"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#B58451"}},"background-color"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"white"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#B58451"}},"overflow"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"hidden"),e("span",{style:{color:"#8E8F8B"}},";}"),e("span",{style:{color:"#2F8A89"}},"h1"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#B58451"}},"word-spacing"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"5"),e("span",{style:{color:"#AB5959"}},"px"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#B58451"}},"color"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"blue"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#B58451"}},"font-weight"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"bold"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#B58451"}},"text-align"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"center"),e("span",{style:{color:"#8E8F8B"}},";}")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"style"),e("span",{style:{color:"#8E8F8B"}},">")]),f(`
`),e("span",{class:"line"}),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#A0ADA0"}},'<!-- 非关键CSS异步外链（增加 rel="preload" 属性预加载） -->')]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"link"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"rel"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"preload"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"href"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"styles.css"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"as"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"style"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"onload"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"'),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#B56959"}},"onload"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#B56959"}},"rel"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#B56959"}},"'stylesheet'"),e("span",{style:{color:"#393A34"}},'"'),e("span",{style:{color:"#8E8F8B"}},">")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"noscript"),e("span",{style:{color:"#8E8F8B"}},"><"),e("span",{style:{color:"#2F8A89"}},"link"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"rel"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"stylesheet"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"href"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"styles.css"'),e("span",{style:{color:"#8E8F8B"}},"></"),e("span",{style:{color:"#2F8A89"}},"noscript"),e("span",{style:{color:"#8E8F8B"}},">")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"head"),e("span",{style:{color:"#8E8F8B"}},">")])])])],-1)),YC=Us(()=>e("div",{class:"mt-4"},null,-1)),ZC=Us(()=>e("ul",null,[e("li",null,[e("strong",null,"提取、压缩、内联首屏CSS")])],-1)),XC=Us(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"npm"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"i"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#D4976C"}},"D"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"critical"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// 自动检测，可配置，从html中提取critical css，并将critical-path内联到html中")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"npm"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"i"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"--"),e("span",{style:{color:"#B8A965"}},"save"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#B8A965"}},"dev"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"html"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#B8A965"}},"critical"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#B8A965"}},"webpack"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#B8A965"}},"plugin"),e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#758575"}},"// webpack plugin")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"npm"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"install"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"criticalcss"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// 支持 `cli`，对 `@font-face` 支持更友好和精确")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"npm"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"i"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#A65E2B"}},"D"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"critical"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// 自动检测，可配置，从html中提取critical css，并将critical-path内联到html中")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"npm"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"i"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"--"),e("span",{style:{color:"#8C862B"}},"save"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#8C862B"}},"dev"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"html"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#8C862B"}},"critical"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#8C862B"}},"webpack"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#8C862B"}},"plugin"),e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#A0ADA0"}},"// webpack plugin")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"npm"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"install"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"criticalcss"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// 支持 `cli`，对 `@font-face` 支持更友好和精确")])])])],-1)),QC=Us(()=>e("ul",null,[e("li",null,[e("strong",null,"站点或应用程序具有大量动态注入 DOM 的样式（内部使用puppeteer）")])],-1)),ex=Us(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"npm"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"i"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#D4976C"}},"D"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"penthouse"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// 关键路径css生成器，`Angular Build Prod` 选项默认是 `extractCss` 为 true (提取到独立的文件中，方便缓存)")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"npm"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"i"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#A65E2B"}},"D"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"penthouse"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// 关键路径css生成器，`Angular Build Prod` 选项默认是 `extractCss` 为 true (提取到独立的文件中，方便缓存)")])])])],-1)),tx={__name:"20",setup(t){const n={};return I(W),(s,l)=>{const o=Ue,r=_n;return B(),q(_e,re(oe(n)),{default:O(()=>[e("h1",null,[f("Optimize CSS "),R(o,{class:"text-orange-400"},{default:O(()=>[f("技巧二")]),_:1})]),R(r,Ye({},{ranges:[""]}),{default:O(()=>[JC]),_:1},16),YC,ZC,R(r,Ye({},{ranges:[""]}),{default:O(()=>[XC]),_:1},16),QC,R(r,Ye({},{ranges:[""]}),{default:O(()=>[ex]),_:1},16)]),_:1},16)}}},nx=U(tx,[["__scopeId","data-v-ee371282"],["__file","/@slidev/slides/20.md"]]);const bn=t=>(Ee("data-v-95c30a12"),t=t(),ke(),t),sx=bn(()=>e("ul",null,[e("li",null,[e("strong",null,"图片压缩")])],-1)),lx=bn(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"//"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"使用Imagemin压缩图片，支持"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"`"),e("span",{style:{color:"#A1B567"}},"cli"),e("span",{style:{color:"#858585"}},"`"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"和"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"`"),e("span",{style:{color:"#A1B567"}},"npm"),e("span",{style:{color:"#858585"}},"`")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"$"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"imagemin"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"images/"),e("span",{style:{color:"#D4976C"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"--out-dir=images"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"//"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"要压缩"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"`"),e("span",{style:{color:"#A1B567"}},"images/"),e("span",{style:{color:"#858585"}},"`"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"目录中的图像并将它们保存到同一目录（覆盖原图）")]),f(`
`),e("span",{class:"line"}),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"$"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"npm"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"i"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"imagemin-webpack-plugin"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"-D"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"//"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"webpack"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"plugin")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"//"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"使用Imagemin压缩图片，支持"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"`"),e("span",{style:{color:"#6C7834"}},"cli"),e("span",{style:{color:"#8E8F8B"}},"`"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"和"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"`"),e("span",{style:{color:"#6C7834"}},"npm"),e("span",{style:{color:"#8E8F8B"}},"`")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"$"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"imagemin"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"images/"),e("span",{style:{color:"#A65E2B"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"--out-dir=images"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"//"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"要压缩"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"`"),e("span",{style:{color:"#6C7834"}},"images/"),e("span",{style:{color:"#8E8F8B"}},"`"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"目录中的图像并将它们保存到同一目录（覆盖原图）")]),f(`
`),e("span",{class:"line"}),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"$"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"npm"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"i"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"imagemin-webpack-plugin"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"-D"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"//"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"webpack"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"plugin")])])])],-1)),ox=bn(()=>e("div",{class:"mt-4"},null,-1)),rx=bn(()=>e("ul",null,[e("li",null,[e("strong",null,"选择合适的图片格式")])],-1)),ax=bn(()=>e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"图片格式"),e("th",null,"透明度"),e("th",null,"动画"),e("th",null,"浏览器支持")])]),e("tbody",null,[e("tr",null,[e("td",null,"PNG"),e("td",null,"Yes"),e("td",null,"No"),e("td",null,"All")]),e("tr",null,[e("td",null,"JPEG"),e("td",null,"No"),e("td",null,"No"),e("td",null,"All")]),e("tr",null,[e("td",null,"WebP"),e("td",null,"Yes"),e("td",null,"Yes"),e("td",null,"现代浏览器")])])],-1)),ix=bn(()=>e("div",{class:"mt-4"},null,-1)),cx=bn(()=>e("blockquote",null,[e("p",null,"WebP格式的图像比J PEG 和 PNG 图像小 25 ~ 35%，可以显著提升页面加载性能")],-1)),px=bn(()=>e("div",{class:"mt-4"},null,-1)),ux=bn(()=>e("ul",null,[e("li",null,[e("strong",null,"使用CDN加速资源")])],-1)),dx={__name:"21",setup(t){const n={};return I(W),(s,l)=>{const o=Ue,r=_n;return B(),q(_e,re(oe(n)),{default:O(()=>[e("h1",null,[f("Optimize Images "),R(o,{class:"text-orange-400"},{default:O(()=>[f("技巧一")]),_:1})]),sx,R(r,Ye({},{ranges:[""]}),{default:O(()=>[lx]),_:1},16),ox,rx,ax,ix,cx,px,ux]),_:1},16)}}},fx=U(dx,[["__scopeId","data-v-95c30a12"],["__file","/@slidev/slides/21.md"]]);const Xl=t=>(Ee("data-v-628d902d"),t=t(),ke(),t),yx=Xl(()=>e("ul",null,[e("li",null,[e("strong",null,"用视频替换 GIF 动画以加快页面加载速度")])],-1)),hx=Xl(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// 使用 FFmpeg 将 GIF 转换为 MP4 视频")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"ffmpeg"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#B8A965"}},"i"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"my"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#B8A965"}},"animation"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"gif"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#A1B567"}},"b"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#B8A965"}},"v"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#B8A965"}},"crf"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"25"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#B8A965"}},"f"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"mp4"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#B8A965"}},"vcodec"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"libx264"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#B8A965"}},"pix_fmt"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"yuv420p"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"my"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#B8A965"}},"animation"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"mp4")]),f(`
`),e("span",{class:"line"}),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// 使用 FFmpeg 将 GIF 转换为 WebM 视频")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"ffmpeg"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#B8A965"}},"i"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"my"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#B8A965"}},"animation"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"gif"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#B8A965"}},"c"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"vp9"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#A1B567"}},"b"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#B8A965"}},"v"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#B8A965"}},"crf"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"41"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"my"),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#B8A965"}},"animation"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"webm")]),f(`
`),e("span",{class:"line"}),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// GIF动画三大特征：1.自动播放  2. 连续循环 3. 静音")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#B8A965"}},"video"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"autoplay"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"loop"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"muted"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"playsinline"),e("span",{style:{color:"#CB7676"}},">")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#B8A965"}},"source"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"src"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#C98A7D"}},'"my-animation.webm"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"type"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#C98A7D"}},'"video/webm"'),e("span",{style:{color:"#CB7676"}},">")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#B8A965"}},"source"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"src"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#C98A7D"}},'"my-animation.mp4"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"type"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#C98A7D"}},'"video/mp4"'),e("span",{style:{color:"#CB7676"}},">")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"</"),e("span",{style:{color:"#B8A965"}},"video"),e("span",{style:{color:"#CB7676"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// 使用 FFmpeg 将 GIF 转换为 MP4 视频")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"ffmpeg"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#8C862B"}},"i"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"my"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#8C862B"}},"animation"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"gif"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#6C7834"}},"b"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#8C862B"}},"v"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#8C862B"}},"crf"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"25"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#8C862B"}},"f"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"mp4"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#8C862B"}},"vcodec"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"libx264"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#8C862B"}},"pix_fmt"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"yuv420p"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"my"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#8C862B"}},"animation"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"mp4")]),f(`
`),e("span",{class:"line"}),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// 使用 FFmpeg 将 GIF 转换为 WebM 视频")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"ffmpeg"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#8C862B"}},"i"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"my"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#8C862B"}},"animation"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"gif"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#8C862B"}},"c"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"vp9"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#6C7834"}},"b"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#8C862B"}},"v"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#8C862B"}},"crf"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"41"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"my"),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#8C862B"}},"animation"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"webm")]),f(`
`),e("span",{class:"line"}),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// GIF动画三大特征：1.自动播放  2. 连续循环 3. 静音")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"<"),e("span",{style:{color:"#8C862B"}},"video"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"autoplay"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"loop"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"muted"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"playsinline"),e("span",{style:{color:"#AB5959"}},">")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#AB5959"}},"<"),e("span",{style:{color:"#8C862B"}},"source"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"src"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#B56959"}},'"my-animation.webm"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"type"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#B56959"}},'"video/webm"'),e("span",{style:{color:"#AB5959"}},">")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#AB5959"}},"<"),e("span",{style:{color:"#8C862B"}},"source"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"src"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#B56959"}},'"my-animation.mp4"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"type"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#B56959"}},'"video/mp4"'),e("span",{style:{color:"#AB5959"}},">")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"</"),e("span",{style:{color:"#8C862B"}},"video"),e("span",{style:{color:"#AB5959"}},">")])])])],-1)),mx=Xl(()=>e("div",{class:"mt-4"},null,-1)),gx=Xl(()=>e("ul",null,[e("li",null,[e("strong",null,"选择合适的图像尺寸")])],-1)),vx=Xl(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// 使用 ImageMagick 调整图像大小（具有创建、编辑、合成和转换功能，支持200+图像格式）")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"convert"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"flower"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"jpg"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#B8A965"}},"resize"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"25"),e("span",{style:{color:"#CB7676"}},"%"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"flower_small"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"jpg"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// 将图像大小调整为原始大小的 25%")]),f(`
`),e("span",{class:"line"}),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"# "),e("span",{style:{color:"#B8A965"}},"macOS"),e("span",{style:{color:"#CB7676"}},"/"),e("span",{style:{color:"#B8A965"}},"Linux")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"convert"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"flower"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"jpg"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#B8A965"}},"resize"),e("span",{style:{color:"#DBD7CA"}}," 200"),e("span",{style:{color:"#B8A965"}},"x100"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"flower_small"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"jpg"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// 缩放图像以适应 “200px 宽 x 100px 高”")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// 使用 ImageMagick 调整图像大小（具有创建、编辑、合成和转换功能，支持200+图像格式）")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"convert"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"flower"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"jpg"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#8C862B"}},"resize"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"25"),e("span",{style:{color:"#AB5959"}},"%"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"flower_small"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"jpg"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// 将图像大小调整为原始大小的 25%")]),f(`
`),e("span",{class:"line"}),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"# "),e("span",{style:{color:"#8C862B"}},"macOS"),e("span",{style:{color:"#AB5959"}},"/"),e("span",{style:{color:"#8C862B"}},"Linux")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"convert"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"flower"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"jpg"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#8C862B"}},"resize"),e("span",{style:{color:"#393A34"}}," 200"),e("span",{style:{color:"#8C862B"}},"x100"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"flower_small"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"jpg"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// 缩放图像以适应 “200px 宽 x 100px 高”")])])])],-1)),_x={__name:"22",setup(t){const n={};return I(W),(s,l)=>{const o=Ue,r=_n;return B(),q(_e,re(oe(n)),{default:O(()=>[e("h1",null,[f("Optimize Images "),R(o,{class:"text-orange-400"},{default:O(()=>[f("技巧二")]),_:1})]),yx,R(r,Ye({},{ranges:[""]}),{default:O(()=>[hx]),_:1},16),mx,gx,R(r,Ye({},{ranges:[""]}),{default:O(()=>[vx]),_:1},16)]),_:1},16)}}},bx=U(_x,[["__scopeId","data-v-628d902d"],["__file","/@slidev/slides/22.md"]]),Ax=e("h1",null,"以上优化，没有听懂？还有没其他优化点？",-1),wx={__name:"23",setup(t){const n={layout:"center"};return I(W),(s,l)=>(B(),q(Bt,re(oe(n)),{default:O(()=>[Ax]),_:1},16))}},Bx=U(wx,[["__file","/@slidev/slides/23.md"]]),Cx=["width","height","src"],xx=Pe({__name:"Youtube",props:{id:{type:String,required:!0},width:{type:Number,required:!1},height:{type:Number,required:!1}},setup(t){return I(W),(n,s)=>(B(),X("iframe",{class:"youtube",width:t.width,height:t.height,src:`https://www.youtube.com/embed/${t.id}`,title:"YouTube",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,Cx))}}),Ri=U(xx,[["__file","/home/runner/work/web-vitails/web-vitails/node_modules/@slidev/client/builtin/Youtube.vue"]]),Ex=e("h1",null,"Optimize Largest Contentful Paint（LCP）",-1),kx={__name:"24",setup(t){const n={layout:"center",class:"text-center"};return I(W),(s,l)=>{const o=Ri;return B(),q(Bt,re(oe(n)),{default:O(()=>[Ex,R(o,{id:"AQqFZ5t8uNc?start=1073",width:800,height:450})]),_:1},16)}}},Dx=U(kx,[["__file","/@slidev/slides/24.md"]]),Sx=e("h1",null,"FID (First Input Delay)",-1),Fx=e("p",null,[f("衡量页面交互性 "),e("strong",null,"·"),f(" 首次输入延迟")],-1),$x={__name:"25",setup(t){const n={layout:"center",class:"text-center"};return I(W),(s,l)=>(B(),q(Bt,re(oe(n)),{default:O(()=>[Sx,Fx]),_:1},16))}},Px=U($x,[["__file","/@slidev/slides/25.md"]]);const ey=t=>(Ee("data-v-90effb36"),t=t(),ke(),t),Ox=ey(()=>e("p",null,"首次输入延迟。测量交互性能，为了提供较好用户体验，交互时间建议在100ms或以内",-1)),Tx=ey(()=>e("div",{class:"grid grid-cols-2 gap-x-4 pt-10"},[e("ul",null,[e("li",null,[e("strong",null,"定义"),e("ul",null,[e("li",null,[e("code",null,"从用户首次与页面进行交互（单击链接、按钮、输入框等）到浏览器实际上能够响应该交互之间的时间")])])]),e("li",null,[e("strong",null,"为什么只考虑 first input ？"),e("ul",null,[e("li",null,[e("code",null,"第一次输入延迟是用户对网站形成的第一个印象，网站是否有质量且可靠（网站加载后以多快的速度对用户进行响应）；web中最大的交互问题第一次加载之后")])])]),e("li",null,[e("strong",null,"什么样的指标才是好的？"),e("ul",null,[e("li",null,[e("img",{src:"https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/eXyvkqRHQZ5iG38Axh1Z.svg"})])])])]),e("div",null,[e("ul",null,[e("li",null,[e("p",null,[e("strong",null,"哪些事件输入属于 first input ？")]),e("ul",null,[e("li",null,[e("code",null,"只关注单次离散事件，如：clicks, taps, 和 key presses")]),e("li",null,[e("code",null,"不关注连续事件，如：scrolling 和 zooming")])])]),e("li",null,[e("p",null,[e("strong",null,"RAIL性能模型")]),e("ul",null,[e("li",null,[e("img",{filter:"~ dark:invert",class:"w-200",src:"https://web-dev.imgix.net/image/admin/uc1IWVOW2wEhIY6z4KjJ.png"})])])])])])],-1)),Lx={__name:"26",setup(t){const n={};return I(W),(s,l)=>{const o=Ni;return B(),q(_e,re(oe(n)),{default:O(()=>[e("h1",null,[f("FID (First Input Delay) "),R(o)]),Ox,Tx]),_:1},16)}}},Ix=U(Lx,[["__scopeId","data-v-90effb36"],["__file","/@slidev/slides/26.md"]]),Mx="/web-vitails/frame-full.jpeg";const ji=t=>(Ee("data-v-f0c78e4b"),t=t(),ke(),t),Nx=ji(()=>e("h1",null,"RAIL性能模型",-1)),Rx=ji(()=>e("p",null,"Web 应用程序生命周期的四个不同方面：响应、动画、空闲和加载",-1)),jx=ji(()=>e("div",{class:"grid grid-cols-2 gap-x-4 pt-10"},[e("ul",null,[e("li",null,[e("strong",null,"RAIL 核心指标"),e("ul",null,[e("li",null,[e("code",null,"输入延迟时间（从点按到绘制）小于 100ms")]),e("li",null,[e("code",null,"每帧的工作（从JS到绘制）完成时间小于 16ms")]),e("li",null,[e("code",null,"主线程JS工作分成不大于 50ms 的块")]),e("li",null,[e("code",null,"页面可以在 1000ms 内就绪")])])]),e("li",null,[e("strong",null,"60fps 与设备刷新率"),e("ul",null,[e("li",null,[e("code",null,"屏幕刷新率为 60 次/秒，动画要平滑则每帧需要和屏幕刷新率保持一致，也就是每帧预算 16.66ms，但实际上，浏览器有整理工作要做，因此所有工作需要在 10ms 内完成")]),e("li",null,[e("code",null,"像素管道JS/CSS > 样式 > 布局 > 绘制 > 合成")])])])]),e("div",null,[e("ul",null,[e("li",null,[e("img",{filter:"~ dark:invert",src:"https://web-dev.imgix.net/image/admin/I7HDZ9qGxe0jAzz6PxNq.png"})])]),e("div",{class:"mt-4"}),e("ul",null,[e("li",null,[e("img",{filter:"~ dark:invert",src:Mx})]),e("li",null,[e("p",null,[e("code",null,"Google RAIL性能模型的目标，就是使用户满意，而不是让页面能运行的很快")])])])])],-1)),Vx={__name:"27",setup(t){const n={};return I(W),(s,l)=>(B(),q(_e,re(oe(n)),{default:O(()=>[Nx,Rx,jx]),_:1},16))}},Hx=U(Vx,[["__scopeId","data-v-f0c78e4b"],["__file","/@slidev/slides/27.md"]]);const Ql=t=>(Ee("data-v-29d6726f"),t=t(),ke(),t),qx=Ql(()=>e("h1",null,"用户体验就是生产力",-1)),Wx=Ql(()=>e("p",null,"感知的响应度可能看起来不如有效性重要，但实际上恰好相反",-1)),zx=Ql(()=>e("blockquote",null,[e("p",null,"研究发现，一个交互系统的响应度，即能否跟上用户、及时告知当前状态，而不让他们无故等待，是决定用户满意度的最重要的因素。 事件发生需要时间，而我们感知物体与事件也需要时间。但是让用户花在网站上的大多数时间不是等待加载，而是在使用时等待响应。")],-1)),Ux=Ql(()=>e("br",null,null,-1)),Gx=Ql(()=>e("img",{filter:"~ dark:invert",class:"w-190",src:"https://img.alicdn.com/tfs/TB1wi31eUT1gK0jSZFrXXcNCXXa-1730-706.png#alt=%E5%BB%B6%E8%BF%9F%E4%B8%8E%E7%94%A8%E6%88%B7%E5%8F%8D%E5%BA%94"},null,-1)),Kx={__name:"28",setup(t){const n={};return I(W),(s,l)=>(B(),q(_e,re(oe(n)),{default:O(()=>[qx,Wx,zx,Ux,Gx]),_:1},16))}},Jx=U(Kx,[["__scopeId","data-v-29d6726f"],["__file","/@slidev/slides/28.md"]]);const ty=t=>(Ee("data-v-644e0d38"),t=t(),ke(),t),Yx=ty(()=>e("p",null,"“滚动事件触发 -> 异步获取数据 -> 渲染”，页面响应用户操作，并渲染新内容可能需要花费大于 500ms 的时间",-1)),Zx=ty(()=>e("div",{class:"grid grid-cols-2 gap-x-4 pt-10"},[e("ul",null,[e("li",null,[e("strong",null,"预加载"),e("ul",null,[e("li",null,[e("code",null,"设置一定的阈值，在用户滚动到页面底部前获取数据，加载下一页的数据并渲染")]),e("li",null,[e("code",null,"弱网环境或用户快速滚动时，底部的loading依然会经常性的触发")]),e("li",null,[e("code",null,"网络状况等情况随时可能改变，导致边界难以确定，其次是必定会产生大量冗余的数据请求")])])]),e("li",null,[e("strong",null,"无阻塞的滚动"),e("ul",null,[e("li",null,[e("code",null,"滚动时永远不打断用户操作，数据不足时根据滚动位置按需加载，先插入占位元素，等到数据获取时再渲染新的元素")])])])]),e("div",null,[e("ul",null,[e("li",null,[e("img",{filter:"~ dark:invert",src:"https://img.alicdn.com/tfs/TB1pSwZeFT7gK0jSZFpXXaTkpXa-1122-405.png#alt=%E4%BC%A0%E7%BB%9F%E7%9A%84%E6%97%A0%E5%B0%BD%E5%88%97%E8%A1%A8&width=800"})])]),e("div",{class:"mt-10"}),e("ul",null,[e("li",null,[e("img",{filter:"~ dark:invert",src:"https://img.alicdn.com/tfs/TB13JM4eQT2gK0jSZPcXXcKkpXa-1053-405.png#alt=%E6%97%A0%E9%98%BB%E5%A1%9E%E7%9A%84%E6%BB%9A%E5%8A%A8%E5%88%97%E8%A1%A8&width=800"})])])])],-1)),Xx={__name:"29",setup(t){const n={};return I(W),(s,l)=>{const o=Ue;return B(),q(_e,re(oe(n)),{default:O(()=>[e("h1",null,[f("列表滚动时“停顿感” "),R(o,{class:"text-fuchsia-400"},{default:O(()=>[f("Tips")]),_:1})]),Yx,Zx]),_:1},16)}}},Qx=U(Xx,[["__scopeId","data-v-644e0d38"],["__file","/@slidev/slides/29.md"]]);const ny=t=>(Ee("data-v-1dbecdc7"),t=t(),ke(),t),e4=ny(()=>e("h1",null,"思考几个问题 ？",-1)),t4=ny(()=>e("div",{class:"grid grid-cols-2 gap-x-4"},[e("ul",null,[e("li",null,[e("p",null,[e("strong",null,"如果用户从不与网站互动怎么办？")]),e("ul",null,[e("li",null,[e("code",null,"首先并非所有用户每次访问站点时都会与网站互动")]),e("li",null,[e("code",null,"右图是用户刚好在主线程最繁忙的时刻进行交互，但是如果用户在主线程空闲的时候交互，那么浏览器可以立刻响应，所以FID的值需要重点查看它的分布情况")])])]),e("li",null,[e("p",null,[e("strong",null,"为什么FID只包含从用户输入到主线程开始相应的时间？而没有包含事件处理到浏览器绘制UI的时间？")]),e("blockquote",null,[e("p",null,"尽管主线程处理和绘制的这段时间也很重要，但是如果FID把这段时间也包含进来，则有的开发者可能会使用一些异步API（例如：setTimeout、requestAnimationFrame）来把这个 task 拆分到下一帧，以较少FID的时间，这样不仅没有提高用户体验，反而使用户体验降低。")]),e("blockquote",null,[e("p",null,"FID实际上测量的是输入事件被感知到到主线程空闲的这段时间")])])]),e("div",{class:"px-2 py-4"},[e("ul",null,[e("li",null,[e("p",null,[e("strong",null,"可以通过下图来更详细了解 FID 处于哪个位置")]),e("img",{filter:"~ dark:invert",src:"https://web-dev.imgix.net/image/admin/krOoeuQ4TWCbt9t6v5Wf.svg"})]),e("li",null,[e("p",null,[e("strong",null,"哪些HTML元素在交互响应之前等待主线程上正在执行的任务完成？")]),e("ul",null,[e("li",null,[e("code",null,"输入框，例如<input>、<textarea>、<radio>、<checkbox>")]),e("li",null,[e("code",null,"下拉框，例如<select> 和 链接，例如<a>")])])])])])],-1)),n4={__name:"30",setup(t){const n={};return I(W),(s,l)=>(B(),q(_e,re(oe(n)),{default:O(()=>[e4,t4]),_:1},16))}},s4=U(n4,[["__scopeId","data-v-1dbecdc7"],["__file","/@slidev/slides/30.md"]]),l4="/web-vitails/console-fid.png";const sy=t=>(Ee("data-v-cfb7fa05"),t=t(),ke(),t),o4=sy(()=>e("h1",null,"如何测量 FID ？",-1)),r4=sy(()=>e("div",{class:"grid grid-cols-2 gap-x-4"},[e("ul",null,[e("li",null,[e("p",null,[e("strong",null,"线上测量工具")]),e("ul",null,[e("li",null,[e("code",null,"Chrome User Experience Report")]),e("li",null,[e("code",null,"PageSpeed Insights")]),e("li",null,[e("code",null,"Search Console (Core Web Vitals report)")]),e("li",null,[e("code",null,"web-vitals JavaScript library")])])]),e("li",null,[e("p",null,[e("strong",null,"web-vitals JavaScript library")]),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"getFID"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'web-vitals'"),e("span",{style:{color:"#858585"}},";")]),f(`
`),e("span",{class:"line"}),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// 一旦可用，立即测量并记录 FID")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"getFID"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"log"),e("span",{style:{color:"#858585"}},");")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"getFID"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'web-vitals'"),e("span",{style:{color:"#8E8F8B"}},";")]),f(`
`),e("span",{class:"line"}),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// 一旦可用，立即测量并记录 FID")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"getFID"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"log"),e("span",{style:{color:"#8E8F8B"}},");")])])])])])]),e("div",{class:"px-2 py-4"},[e("ul",null,[e("li",null,[e("strong",null,"在 JavaScript 中测量 FID")])]),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// 使用`PerformanceObserver`API 监听 `first-input`")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// 并将值打印到控制台，真实指标测量比这个复杂")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"PerformanceObserver"),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#B8A965"}},"entryList"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"for"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"entry"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"of"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"entryList"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"getEntries"),e("span",{style:{color:"#858585"}},"())"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"delay"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"entry"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"processingStart"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"entry"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"startTime"),e("span",{style:{color:"#858585"}},";")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"log"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'FID candidate:'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"delay"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"entry"),e("span",{style:{color:"#858585"}},");")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"}")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"})."),e("span",{style:{color:"#A1B567"}},"observe"),e("span",{style:{color:"#858585"}},"({"),e("span",{style:{color:"#E0A569"}},"type"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'first-input'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"buffered"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"true"),e("span",{style:{color:"#858585"}},"});")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// 使用`PerformanceObserver`API 监听 `first-input`")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// 并将值打印到控制台，真实指标测量比这个复杂")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"PerformanceObserver"),e("span",{style:{color:"#8E8F8B"}},"(("),e("span",{style:{color:"#8C862B"}},"entryList"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"for"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"entry"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"of"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"entryList"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"getEntries"),e("span",{style:{color:"#8E8F8B"}},"())"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"delay"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"entry"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"processingStart"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"entry"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"startTime"),e("span",{style:{color:"#8E8F8B"}},";")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"log"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'FID candidate:'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"delay"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"entry"),e("span",{style:{color:"#8E8F8B"}},");")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"}")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"})."),e("span",{style:{color:"#6C7834"}},"observe"),e("span",{style:{color:"#8E8F8B"}},"({"),e("span",{style:{color:"#B58451"}},"type"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'first-input'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"buffered"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"true"),e("span",{style:{color:"#8E8F8B"}},"});")])])])]),e("ul",null,[e("li",null,[e("strong",null,"浏览器中的 PerformanceObserver 结果")])]),e("img",{filter:"~ :dark:invert",src:l4})])],-1)),a4={__name:"31",setup(t){const n={};return I(W),(s,l)=>(B(),q(_e,re(oe(n)),{default:O(()=>[o4,r4]),_:1},16))}},i4=U(a4,[["__scopeId","data-v-cfb7fa05"],["__file","/@slidev/slides/31.md"]]),c4=e("h1",null,"Optimize FID（First Input Delay）",-1),p4=e("p",null,"优化页面交互性",-1),u4={__name:"32",setup(t){const n={layout:"center",class:"text-center"};return I(W),(s,l)=>(B(),q(Bt,re(oe(n)),{default:O(()=>[c4,p4]),_:1},16))}},d4=U(u4,[["__file","/@slidev/slides/32.md"]]);const mr=t=>(Ee("data-v-32d59004"),t=t(),ke(),t),f4=mr(()=>e("div",{class:""},null,-1)),y4=mr(()=>e("blockquote",null,[e("p",null,"FID可能被这四个因素影响")],-1)),h4=mr(()=>e("div",{class:"mt-4"},null,-1)),m4=mr(()=>e("ul",null,[e("li",null,[e("strong",null,"减少第三方代码的影响")]),e("li",null,[e("strong",null,"减少 JavaScript 的执行时间")]),e("li",null,[e("strong",null,"最小化主线程工作")]),e("li",null,[e("strong",null,"减小请求数量和请求文件大小")])],-1)),g4={__name:"33",setup(t){const n={};return I(W),(s,l)=>{const o=Ue;return B(),q(_e,re(oe(n)),{default:O(()=>[e("h1",null,[f("如何优化 FID ? "),R(o,{class:"text-purple-400"},{default:O(()=>[f("思考")]),_:1})]),f4,y4,h4,m4]),_:1},16)}}},v4=U(g4,[["__scopeId","data-v-32d59004"],["__file","/@slidev/slides/33.md"]]),_4="/web-vitails/async-defer.png";const ly=t=>(Ee("data-v-3abc798a"),t=t(),ke(),t),b4=ly(()=>e("p",null,"第三方广告或小图标、错误日志收集、监控或者集成一些第三方SDK等等，这些需要添加第三方脚本到HTML",-1)),A4=ly(()=>e("div",{class:"grid grid-cols-2 gap-x-4"},[e("ul",null,[e("li",null,[e("p",null,[e("strong",null,"async 或 defer 属性加载脚本以避免阻塞 DOM 解析")]),e("blockquote",null,[e("p",null,"async：浏览器在继续解析 HTML 文档的同时异步下载脚本。当脚本完成下载时，在脚本执行时会阻止解析")]),e("br"),e("blockquote",null,[e("p",null,"defer：浏览器在继续解析 HTML 文档的同时异步下载脚本。在解析完成之前，脚本不会运行")])]),e("li",null,[e("p",null,[e("strong",null,"减少资源建立连接的时间")]),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"<!-- DNS预解析 -->")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"link"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"rel"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"dns-prefetch"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"href"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"http://example.com"'),e("span",{style:{color:"#858585"}},">")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"<!-- 一个连接，一般需要经过DNS查找，TCP三次握手和TLS协商 -->")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"link"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"rel"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"preconnect"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"href"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"https://cdn.example.com"'),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"<!-- DNS预解析 -->")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"link"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"rel"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"dns-prefetch"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"href"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"http://example.com"'),e("span",{style:{color:"#8E8F8B"}},">")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"<!-- 一个连接，一般需要经过DNS查找，TCP三次握手和TLS协商 -->")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"link"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"rel"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"preconnect"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"href"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"https://cdn.example.com"'),e("span",{style:{color:"#8E8F8B"}},">")])])])])])]),e("div",{class:"px-2 py-4"},[e("ul",null,[e("li",null,[e("img",{filter:"~ :dark:invert",class:"w-100",src:_4})]),e("li",null,[e("p",null,[e("strong",null,"延迟加载具有lazysizes的屏幕外图像")]),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"src"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"lazysizes.min.js"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"async"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'""'),e("span",{style:{color:"#858585"}},"></"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"<!-- 使用 Intersection Observer 进行高效的延迟加载 -->")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"IntersectionObserver"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"callback"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"options"),e("span",{style:{color:"#858585"}},")")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"</"),e("span",{style:{color:"#429988"}},"script"),e("span",{style:{color:"#858585"}},">")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"src"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"lazysizes.min.js"'),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"async"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'""'),e("span",{style:{color:"#8E8F8B"}},"></"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"<!-- 使用 Intersection Observer 进行高效的延迟加载 -->")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"IntersectionObserver"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"callback"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"options"),e("span",{style:{color:"#8E8F8B"}},")")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"</"),e("span",{style:{color:"#2F8A89"}},"script"),e("span",{style:{color:"#8E8F8B"}},">")])])])])])])])],-1)),w4={__name:"34",setup(t){const n={};return I(W),(s,l)=>{const o=Ue;return B(),q(_e,re(oe(n)),{default:O(()=>[e("h1",null,[f("如何高效加载第三方脚本？ "),R(o,{class:"text-orange-400"},{default:O(()=>[f("技巧一")]),_:1})]),b4,A4]),_:1},16)}}},B4=U(w4,[["__scopeId","data-v-3abc798a"],["__file","/@slidev/slides/34.md"]]);const oy=t=>(Ee("data-v-850b318b"),t=t(),ke(),t),C4=oy(()=>e("p",null,"浏览器是多进程的（主、渲染、插件、GPU），浏览器内核是多线程的，js引擎是单线程的",-1)),x4=oy(()=>e("div",{class:"grid grid-cols-2 gap-x-4"},[e("ul",null,[e("li",null,[e("p",null,[e("strong",null,"requestAnimationFrame去抖动")]),e("blockquote",null,[e("p",null,"requestAnimationFrame最大的优势是由系统来决定回调函数的执行时机，具有CPU节能和函数节流的优势")])]),e("li",null,[e("p",null,[e("strong",null,"使用 Web Worker 在浏览器的主线程之外运行 JavaScript")]),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"worker"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Worker"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"./worker.js"'),e("span",{style:{color:"#858585"}},");")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// 通过 postMessage API 发送消息与 web worker 通信")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"worker"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"postMessage"),e("span",{style:{color:"#858585"}},"(["),e("span",{style:{color:"#6394BF"}},"40"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},"]);")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// 通过事件监听回调接受消息")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"worker"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"addEventListener"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"message"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"event"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"log"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"event"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"data"),e("span",{style:{color:"#858585"}},");")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"});")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"worker"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Worker"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"./worker.js"'),e("span",{style:{color:"#8E8F8B"}},");")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// 通过 postMessage API 发送消息与 web worker 通信")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"worker"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"postMessage"),e("span",{style:{color:"#8E8F8B"}},"(["),e("span",{style:{color:"#296AA3"}},"40"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"2"),e("span",{style:{color:"#8E8F8B"}},"]);")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// 通过事件监听回调接受消息")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"worker"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"addEventListener"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"message"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"event"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8C862B"}},"console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"log"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"event"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"data"),e("span",{style:{color:"#8E8F8B"}},");")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"});")])])])])]),e("li",null,[e("p",null,[e("strong",null,"避免大型、复杂的布局和布局抖动")])])]),e("div",{class:"px-2"},[e("ul",null,[e("li",null,[e("p",null,[e("strong",null,"简化paint复杂性并减少paint面积")]),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#E0A569"}},"moving-element"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"will-change"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"transform"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// 创建新的渲染层")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"transform"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"translateZ"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// hack魔法，GPU加速")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#B58451"}},"moving-element"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"will-change"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"transform"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// 创建新的渲染层")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"transform"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"translateZ"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// hack魔法，GPU加速")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])])]),e("li",null,[e("p",null,[e("strong",null,"代码拆分减少JavaScript负载，删除未使用的代码")]),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"form"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"addEventListener"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"submit"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"e"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"import"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'moduleA'"),e("span",{style:{color:"#858585"}},")."),e("span",{style:{color:"#A1B567"}},"then"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"module"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"module"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"default"),e("span",{style:{color:"#858585"}},")")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"then"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"someFunction"),e("span",{style:{color:"#858585"}},"())."),e("span",{style:{color:"#A1B567"}},"catch"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"handleError"),e("span",{style:{color:"#858585"}},"());")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"});")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"someFunction"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"..."),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"form"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"addEventListener"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},'"submit"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"e"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#AB5959"}},"import"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'moduleA'"),e("span",{style:{color:"#8E8F8B"}},")."),e("span",{style:{color:"#6C7834"}},"then"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"module"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"module"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"default"),e("span",{style:{color:"#8E8F8B"}},")")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"then"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"someFunction"),e("span",{style:{color:"#8E8F8B"}},"())."),e("span",{style:{color:"#6C7834"}},"catch"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"handleError"),e("span",{style:{color:"#8E8F8B"}},"());")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"});")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"someFunction"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"..."),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}")])])])])]),e("li",null,[e("p",null,[e("strong",null,"减少样式计算的范围和复杂性，提取关键CSS")])])])])],-1)),E4={__name:"35",setup(t){const n={};return I(W),(s,l)=>{const o=Ue;return B(),q(_e,re(oe(n)),{default:O(()=>[e("h1",null,[f("最小化主线程（main-thread）工作 "),R(o,{class:"text-orange-400"},{default:O(()=>[f("技巧二")]),_:1})]),C4,x4]),_:1},16)}}},k4=U(E4,[["__scopeId","data-v-850b318b"],["__file","/@slidev/slides/35.md"]]),D4=e("h1",null,"以上优化，没有听懂？还有没其他优化点？",-1),S4={__name:"36",setup(t){const n={layout:"center"};return I(W),(s,l)=>(B(),q(Bt,re(oe(n)),{default:O(()=>[D4]),_:1},16))}},F4=U(S4,[["__file","/@slidev/slides/36.md"]]),$4=e("h1",null,"Optimize First Input Delay（FID）",-1),P4={__name:"37",setup(t){const n={layout:"center",class:"text-center"};return I(W),(s,l)=>{const o=Ri;return B(),q(Bt,re(oe(n)),{default:O(()=>[$4,R(o,{id:"AQqFZ5t8uNc?start=2040",width:800,height:450})]),_:1},16)}}},O4=U(P4,[["__file","/@slidev/slides/37.md"]]),T4=e("h1",null,"CLS (Cumulative Layout Shift)",-1),L4=e("p",null,[f("衡量视觉稳定性 "),e("strong",null,"·"),f(" 累积布局偏移")],-1),I4={__name:"38",setup(t){const n={layout:"center",class:"text-center"};return I(W),(s,l)=>(B(),q(Bt,re(oe(n)),{default:O(()=>[T4,L4]),_:1},16))}},M4=U(I4,[["__file","/@slidev/slides/38.md"]]),N4="/web-vitails/cls-case.png";const ry=t=>(Ee("data-v-206a609d"),t=t(),ke(),t),R4=ry(()=>e("p",null,"累积布局偏移。测量视觉稳定性，为了提供较好用户体验，页面应该维持CLS在0.1或以内",-1)),j4=ry(()=>e("div",{class:"grid grid-cols-[2fr,1fr] gap-x-4"},[e("ul",null,[e("li",null,[e("strong",null,"定义"),e("ul",null,[e("li",null,[e("code",null,"CLS是衡量页面整个生命周期内发生的每个意外布局偏移的最大布局偏移分数的度量")])]),e("blockquote",null,[e("p",null,[f("CLS指标的计算方式在 2021.04.13 之后有更新，并在 2021.06.01 起正式实施 "),e("br"),f(" CLS 指标现在具有最大会话窗口，间隔为 1s，上限为 5s")])])]),e("li",null,[e("strong",null,"布局偏移通常在什么时候发生？"),e("ul",null,[e("li",null,[e("code",null,"资源异步加载")]),e("li",null,[e("code",null,"DOM元素动态添加到已存在的页面元素上面")])])]),e("li",null,[e("strong",null,"怎样才算好？"),e("ul",null,[e("li",null,[e("img",{src:"https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/9mWVASbWDLzdBUpVcjE1.svg"})])])])]),e("div",null,[e("ul",null,[e("li",null,[e("p",null,[e("strong",null,"会话窗口（session window）")]),e("ul",null,[e("li",null,[e("video",{filter:"~ dark:invert",class:"w-screenshot w-60",autoplay:"",loop:"",muted:"",playsinline:""},[e("source",{src:"https://storage.googleapis.com/web-dev-assets/better-layout-shift-metric/session-window.webm",type:"video/webm"}),e("source",{src:"https://storage.googleapis.com/web-dev-assets/better-layout-shift-metric/session-window.mp4",type:"video/mp4"})])])])]),e("li",null,[e("p",null,[e("strong",null,"案例")]),e("ul",null,[e("li",null,[e("img",{filter:"~ dark:invert",class:"w-60",src:N4})])])])])])],-1)),V4={__name:"39",setup(t){const n={};return I(W),(s,l)=>{const o=Ni;return B(),q(_e,re(oe(n)),{default:O(()=>[e("h1",null,[f("CLS (Cumulative Layout Shift) "),R(o)]),R4,j4]),_:1},16)}}},H4=U(V4,[["__scopeId","data-v-206a609d"],["__file","/@slidev/slides/39.md"]]);const ay=t=>(Ee("data-v-79b44d31"),t=t(),ke(),t),q4=ay(()=>e("p",null,"浏览器中两个渲染帧之间的视口大小和视口中不稳定元素的移动指标的乘积：影响分数 * 距离分数",-1)),W4=ay(()=>e("div",{class:"grid grid-cols-[2fr,1fr] gap-x-4"},[e("ul",null,[e("li",null,[e("p",null,[e("strong",null,"影响分数（impact fraction）")]),e("blockquote",null,[e("p",null,"前一帧和当前帧的所有不稳定元素的可见区域的并集（部分）是当前帧的影响分数")]),e("p",null,[e("code",null,"左边是当前帧的元素，下一帧中，元素下移了可视区域内 25% 的高度。虚线框为两桢中当前元素的并集，占适口的 75%，因此影响分数为 0.75")])]),e("li",null,[e("p",null,[e("strong",null,"距离分数（distance fraction）")]),e("blockquote",null,[e("p",null,"任何不稳定元素在框架中移动的最大距离除以视口的最大尺寸（宽或高，取较大的）")]),e("p",null,[e("code",null,"右图最大的视口尺寸是高度，并且不稳定元素相对适口移动了 25% 的距离，所以距离分数为 0.25")])]),e("li",null,[e("p",null,[e("strong",null,"CLS分数")]),e("p",null,[e("code",null,"最终CLS分数：0.75（影响） * 0.25（距离） = 0.1875")])])]),e("div",{class:"px-2 py-4"},[e("ul",null,[e("li",null,[e("img",{filter:"~ dark:invert",class:"w-60",src:"https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BbpE9rFQbF8aU6iXN1U6.png"}),e("div",{class:"mt-4"})]),e("li",null,[e("img",{filter:"~ dark:invert",class:"w-60",src:"https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ASnfpVs2n9winu6mmzdk.png"})])])])],-1)),z4={__name:"40",setup(t){const n={};return I(W),(s,l)=>{const o=Ue;return B(),q(_e,re(oe(n)),{default:O(()=>[e("h1",null,[f("如何计算CLS？ "),R(o,{class:"text-violet-500"},{default:O(()=>[f("案例一")]),_:1})]),q4,W4]),_:1},16)}}},U4=U(z4,[["__scopeId","data-v-79b44d31"],["__file","/@slidev/slides/40.md"]]);const iy=t=>(Ee("data-v-d26635d4"),t=t(),ke(),t),G4=iy(()=>e("p",null,"浏览器中两个渲染帧之间的视口大小和视口中不稳定元素的移动指标的乘积：影响分数 * 距离分数",-1)),K4=iy(()=>e("div",{class:"grid grid-cols-[2fr,1fr] gap-x-4"},[e("ul",null,[e("li",null,[e("p",null,[e("strong",null,"影响分数（impact fraction）")]),e("blockquote",null,[e("p",null,"前一帧和当前帧的所有不稳定元素的可见区域的并集（部分）是当前帧的影响分数")]),e("p",null,[e("code",null,"上半块起始位置不变为稳定，下半块位置发生变化（不可见区域并不会被考虑在内），前后位置取并集（前后一样），因此影响分数为 0.5")])]),e("li",null,[e("p",null,[e("strong",null,"距离分数（distance fraction）")]),e("blockquote",null,[e("p",null,"任何不稳定元素在框架中移动的最大距离除以视口的最大尺寸（宽高大为准）")]),e("p",null,[e("code",null,"距离分数用箭头表示。虚线框已经向下移动了大约 14% 的视口，所以距离分数是 0.14")])]),e("li",null,[e("p",null,[e("strong",null,"CLS分数")]),e("p",null,[e("code",null,"最终CLS分数：0.5（影响） * 0.14（距离） = 0.07")])])]),e("div",{class:"px-2"},[e("ul",null,[e("li",null,[e("p",null,[e("strong",null,"向现有元素添加内容如何影响布局移位分数")])]),e("li",null,[e("img",{filter:"~ dark:invert",class:"w-60",src:"https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xhN81DazXCs8ZawoCj0T.png"})])])])],-1)),J4={__name:"41",setup(t){const n={};return I(W),(s,l)=>{const o=Ue;return B(),q(_e,re(oe(n)),{default:O(()=>[e("h1",null,[f("如何计算CLS？ "),R(o,{class:"text-violet-500"},{default:O(()=>[f("案例二")]),_:1})]),G4,K4]),_:1},16)}}},Y4=U(J4,[["__scopeId","data-v-d26635d4"],["__file","/@slidev/slides/41.md"]]);const cy=t=>(Ee("data-v-6d512aa3"),t=t(),ke(),t),Z4=cy(()=>e("p",null,"浏览器中两个渲染帧之间的视口大小和视口中不稳定元素的移动指标的乘积：影响分数 * 距离分数",-1)),X4=cy(()=>e("div",{class:"grid grid-cols-[2fr,1fr] gap-x-4"},[e("ul",null,[e("li",null,[e("p",null,[e("strong",null,"影响分数（impact fraction）")]),e("blockquote",null,[e("p",null,"前一帧和当前帧的所有不稳定元素的可见区域的并集（部分）是当前帧的影响分数")]),e("p",null,[e("code",null,"旧item位置发生偏移，新item起始位置不变，前后位置取并集（虚线框部分大约占视口的 38%），因此影响分数为 0.38")])]),e("li",null,[e("p",null,[e("strong",null,"距离分数（distance fraction）")]),e("blockquote",null,[e("p",null,"任何不稳定元素在框架中移动的最大距离除以视口的最大尺寸（宽高大为准）")]),e("p",null,[e("code",null,"箭头表示不稳定元素从起始位置移动的距离。Zebra元素移动最多，大约移动了视口高度的 30%，所以距离分数是 0.3")])]),e("li",null,[e("p",null,[e("strong",null,"CLS分数")]),e("p",null,[e("code",null,"最终CLS分数：0.38（影响） * 0.3（距离） = 0.1172")])])]),e("div",{class:"px-2"},[e("ul",null,[e("li",null,[e("p",null,[e("strong",null,"多个不稳定元素")])]),e("li",null,[e("img",{filter:"~ dark:invert",class:"w-60",src:"https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/FdCETo2dLwGmzw0V5lNT.png"})])])])],-1)),Q4={__name:"42",setup(t){const n={};return I(W),(s,l)=>{const o=Ue;return B(),q(_e,re(oe(n)),{default:O(()=>[e("h1",null,[f("如何计算CLS？ "),R(o,{class:"text-violet-500"},{default:O(()=>[f("案例三")]),_:1})]),Z4,X4]),_:1},16)}}},e9=U(Q4,[["__scopeId","data-v-6d512aa3"],["__file","/@slidev/slides/42.md"]]),t9="/web-vitails/console-cls.png";const py=t=>(Ee("data-v-7c05781e"),t=t(),ke(),t),n9=py(()=>e("h1",null,"如何测量 CLS ?",-1)),s9=py(()=>e("div",{class:"grid grid-cols-2 gap-x-4"},[e("ul",null,[e("li",null,[e("p",null,[e("strong",null,"线上测量工具")]),e("ul",null,[e("li",null,[e("code",null,"Chrome User Experience Report")]),e("li",null,[e("code",null,"PageSpeed Insights")]),e("li",null,[e("code",null,"Search Console (Core Web Vitals report)")]),e("li",null,[e("code",null,"web-vitals JavaScript library")])])]),e("li",null,[e("p",null,[e("strong",null,"web-vitals JavaScript library")]),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"getCLS"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'web-vitals'"),e("span",{style:{color:"#858585"}},";")]),f(`
`),e("span",{class:"line"}),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// 在所有需要报告的地方测量和记录 CLS")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"getCLS"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"log"),e("span",{style:{color:"#858585"}},");")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"getCLS"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'web-vitals'"),e("span",{style:{color:"#8E8F8B"}},";")]),f(`
`),e("span",{class:"line"}),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// 在所有需要报告的地方测量和记录 CLS")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"getCLS"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"log"),e("span",{style:{color:"#8E8F8B"}},");")])])])])])]),e("div",{class:"px-2"},[e("ul",null,[e("li",null,[e("p",null,[e("strong",null,"实验室工具")]),e("ul",null,[e("li",null,[e("code",null,"Chrome DevTools")]),e("li",null,[e("code",null,"Lighthouse")]),e("li",null,[e("code",null,"WebPageTest")])])]),e("li",null,[e("p",null,[e("strong",null,"浏览器中的 PerformanceObserver 结果")])])]),e("img",{filter:"~ :dark:invert",src:t9})])],-1)),l9={__name:"43",setup(t){const n={};return I(W),(s,l)=>(B(),q(_e,re(oe(n)),{default:O(()=>[n9,s9]),_:1},16))}},o9=U(l9,[["__scopeId","data-v-7c05781e"],["__file","/@slidev/slides/43.md"]]),r9=e("h1",null,"在 JavaScript 中如何测量 CLS ?",-1),a9=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"let"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"clsValue"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#B8A965"}},"clsEntries"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[],"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"sessionValue"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"sessionEntries"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[];")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"PerformanceObserver"),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#B8A965"}},"entryList"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"for"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"entry"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"of"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"entryList"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"getEntries"),e("span",{style:{color:"#858585"}},"())"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// 只计算没有最近用户输入的布局变化")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"!"),e("span",{style:{color:"#B8A965"}},"entry"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"hadRecentInput"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"firstSessionEntry"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"sessionEntries"),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},"];")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"lastSessionEntry"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"sessionEntries"),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#B8A965"}},"sessionEntries"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#429988"}},"length"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},"];")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"      "),e("span",{style:{color:"#758575"}},"// 如果输入发生在上一次输入之后不到 1 秒，并且在会话中的第一个条目之后不到 5 秒（包括当前会话中的条目）；否则，开始一个新的会话。")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"sessionValue"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"&&"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"entry"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"startTime"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"lastSessionEntry"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"startTime"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1000"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"&&"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"entry"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"startTime"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"-"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"firstSessionEntry"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"startTime"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"5000"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},"sessionValue"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"entry"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"value"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"sessionEntries"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"push"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"entry"),e("span",{style:{color:"#858585"}},");")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"else"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},"sessionValue"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"entry"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"value"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}},"   "),e("span",{style:{color:"#B8A965"}},"sessionEntries"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#B8A965"}},"entry"),e("span",{style:{color:"#858585"}},"];")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#858585"}},"}")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"      "),e("span",{style:{color:"#758575"}},"// 如果当前会话值大于当前 CLS 值， 更新 CLS 和对其有贡献的 entries")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"sessionValue"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},">"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"clsValue"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},"clsValue"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"sessionValue"),e("span",{style:{color:"#858585"}},";"),e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#B8A965"}},"clsEntries"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"sessionEntries"),e("span",{style:{color:"#858585"}},";")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"        "),e("span",{style:{color:"#758575"}},"// 将更新的值（及其entries）记录到控制台")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},"console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"log"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'CLS:'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"clsValue"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"clsEntries"),e("span",{style:{color:"#858585"}},")")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#858585"}},"}")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"}")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"})."),e("span",{style:{color:"#A1B567"}},"observe"),e("span",{style:{color:"#858585"}},"({"),e("span",{style:{color:"#E0A569"}},"type"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'layout-shift'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"buffered"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"true"),e("span",{style:{color:"#858585"}},"});")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"let"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"clsValue"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#8C862B"}},"clsEntries"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[],"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"sessionValue"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"sessionEntries"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[];")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"new"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"PerformanceObserver"),e("span",{style:{color:"#8E8F8B"}},"(("),e("span",{style:{color:"#8C862B"}},"entryList"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"for"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"entry"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"of"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"entryList"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"getEntries"),e("span",{style:{color:"#8E8F8B"}},"())"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// 只计算没有最近用户输入的布局变化")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"!"),e("span",{style:{color:"#8C862B"}},"entry"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"hadRecentInput"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"firstSessionEntry"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"sessionEntries"),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},"];")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"lastSessionEntry"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"sessionEntries"),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#8C862B"}},"sessionEntries"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#2F8A89"}},"length"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},"];")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"      "),e("span",{style:{color:"#A0ADA0"}},"// 如果输入发生在上一次输入之后不到 1 秒，并且在会话中的第一个条目之后不到 5 秒（包括当前会话中的条目）；否则，开始一个新的会话。")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"sessionValue"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"&&"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"entry"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"startTime"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"lastSessionEntry"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"startTime"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"1000"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"&&"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"entry"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"startTime"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"-"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"firstSessionEntry"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"startTime"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"<"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"5000"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8C862B"}},"sessionValue"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"+="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"entry"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"value"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8C862B"}},"sessionEntries"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"push"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"entry"),e("span",{style:{color:"#8E8F8B"}},");")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"else"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8C862B"}},"sessionValue"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"entry"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"value"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}},"   "),e("span",{style:{color:"#8C862B"}},"sessionEntries"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#8C862B"}},"entry"),e("span",{style:{color:"#8E8F8B"}},"];")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8E8F8B"}},"}")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"      "),e("span",{style:{color:"#A0ADA0"}},"// 如果当前会话值大于当前 CLS 值， 更新 CLS 和对其有贡献的 entries")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"sessionValue"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},">"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"clsValue"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8C862B"}},"clsValue"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"sessionValue"),e("span",{style:{color:"#8E8F8B"}},";"),e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8C862B"}},"clsEntries"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"sessionEntries"),e("span",{style:{color:"#8E8F8B"}},";")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"        "),e("span",{style:{color:"#A0ADA0"}},"// 将更新的值（及其entries）记录到控制台")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8C862B"}},"console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"log"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'CLS:'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"clsValue"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"clsEntries"),e("span",{style:{color:"#8E8F8B"}},")")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8E8F8B"}},"}")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"}")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"})."),e("span",{style:{color:"#6C7834"}},"observe"),e("span",{style:{color:"#8E8F8B"}},"({"),e("span",{style:{color:"#B58451"}},"type"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'layout-shift'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"buffered"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"true"),e("span",{style:{color:"#8E8F8B"}},"});")])])])],-1),i9={__name:"44",setup(t){const n={};return I(W),(s,l)=>{const o=_n;return B(),q(_e,re(oe(n)),{default:O(()=>[r9,R(o,Ye({},{ranges:[""]}),{default:O(()=>[a9]),_:1},16)]),_:1},16)}}},c9=U(i9,[["__file","/@slidev/slides/44.md"]]),p9=e("h1",null,"Optimize CLS（Cumulative Layout Shift）",-1),u9=e("p",null,"优化视觉稳定性",-1),d9={__name:"45",setup(t){const n={layout:"center",class:"text-center"};return I(W),(s,l)=>(B(),q(Bt,re(oe(n)),{default:O(()=>[p9,u9]),_:1},16))}},f9=U(d9,[["__file","/@slidev/slides/45.md"]]);const Un=t=>(Ee("data-v-c8a600c5"),t=t(),ke(),t),y9=Un(()=>e("div",{class:""},null,-1)),h9=Un(()=>e("blockquote",null,[e("p",null,"我们可以根据这些原则来避免非预期布局移动")],-1)),m9=Un(()=>e("div",{class:"mt-4"},null,-1)),g9=Un(()=>e("ul",null,[e("li",null,[e("strong",null,"图片或视频元素有应始终设置大小属性（或者设置宽高比例），或者给他们保留一个空间大小，设置width、height，或者使用unsized-media feature policy")]),e("li",null,[e("strong",null,"不要在一个已存在的元素上面插入内容（除了响应用户输入）")]),e("li",null,[e("strong",null,"使用 animation 或 transition 等过渡动画，而不是直接触发布局改变")])],-1)),v9=Un(()=>e("h2",null,"影响 CLS 的因素有哪些 ？",-1)),_9=Un(()=>e("blockquote",null,[e("p",null,"以下是一些常见的影响因素")],-1)),b9=Un(()=>e("div",{class:"mt-4"},null,-1)),A9=Un(()=>e("ul",null,[e("li",null,[e("strong",null,"图像没有尺寸")]),e("li",null,[e("strong",null,"没有尺寸的广告、嵌入视图和 iframe")]),e("li",null,[e("strong",null,"动态注入的内容")]),e("li",null,[e("strong",null,"Web 字体导致 FOIT / FOUT")]),e("li",null,[e("strong",null,"在更新 DOM 之前等待网络响应的操作")])],-1)),w9={__name:"46",setup(t){const n={};return I(W),(s,l)=>{const o=Ue;return B(),q(_e,re(oe(n)),{default:O(()=>[e("h1",null,[f("如何优化 CLS ? "),R(o,{class:"text-purple-400"},{default:O(()=>[f("思考")]),_:1})]),y9,h9,m9,g9,v9,_9,b9,A9]),_:1},16)}}},B9=U(w9,[["__scopeId","data-v-c8a600c5"],["__file","/@slidev/slides/46.md"]]);const C9=t=>(Ee("data-v-46fa57bb"),t=t(),ke(),t),x9=C9(()=>e("div",{class:"grid grid-cols-2 gap-x-4"},[e("ul",null,[e("li",null,[e("p",null,[e("strong",null,"图片 & 视频")]),e("blockquote",null,[e("p",null,"图片和视频元素上始终需要包括 width 和 height 尺寸属性，现代浏览器会根据图像的 width 和 height 属性设置图像的默认长宽比，知道纵横（宽高）比后，浏览器就可以为元素计算和保留足够的空间")])]),e("li",null,[e("p",null,[e("strong",null,"设置宽高比")]),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// 平时")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#429988"}},"img"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"height"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"auto"),e("span",{style:{color:"#858585"}},";")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"width"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"100"),e("span",{style:{color:"#CB7676"}},"%"),e("span",{style:{color:"#858585"}},";")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// 现在")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#429988"}},"img"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"aspect-ratio"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"attr"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"width"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"/"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"attr"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"height"),e("span",{style:{color:"#858585"}},");")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// 平时")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#2F8A89"}},"img"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"height"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"auto"),e("span",{style:{color:"#8E8F8B"}},";")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"width"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"100"),e("span",{style:{color:"#AB5959"}},"%"),e("span",{style:{color:"#8E8F8B"}},";")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// 现在")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#2F8A89"}},"img"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"aspect-ratio"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"attr"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"width"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"/"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"attr"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"height"),e("span",{style:{color:"#8E8F8B"}},");")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])])])]),e("div",{class:"px-2"},[e("ul",null,[e("li",null,[e("strong",null,"响应式")])]),e("blockquote",null,[e("p",null,"srcset 属性定义允许浏览器选择的图像以及每个图像的大小")]),e("div",{class:"mt-4"}),e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#429988"}},"img")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"width"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"1000"')]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"height"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"1000"')]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"src"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"puppy-1000.jpg"')]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"srcset"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"puppy-1000.jpg 1000w, puppy-2000.jpg 2000w, puppy-3000.jpg 3000w"')]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"alt"),e("span",{style:{color:"#858585"}},"="),e("span",{style:{color:"#C98A7D"}},'"Puppy with balloons"')]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"/>")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#2F8A89"}},"img")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"width"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"1000"')]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"height"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"1000"')]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"src"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"puppy-1000.jpg"')]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"srcset"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"puppy-1000.jpg 1000w, puppy-2000.jpg 2000w, puppy-3000.jpg 3000w"')]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"alt"),e("span",{style:{color:"#8E8F8B"}},"="),e("span",{style:{color:"#B56959"}},'"Puppy with balloons"')]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"/>")])])])]),e("ul",null,[e("li",null,[e("p",null,[e("strong",null,"注意")]),e("ul",null,[e("li",null,[e("code",null,"永远不要在现有内容之上插入内容，除非是响应用户交互，这样可确保预期的布局变化")]),e("li",null,[e("code",null,"宁可转换动画，也不要转换触发布局变化的属性的动画")])])])])])],-1)),E9={__name:"47",setup(t){const n={};return I(W),(s,l)=>{const o=Ue;return B(),q(_e,re(oe(n)),{default:O(()=>[e("h1",null,[f("不要使用无尺寸元素 "),R(o,{class:"text-rose-400"},{default:O(()=>[f("优化一")]),_:1})]),x9]),_:1},16)}}},k9=U(E9,[["__scopeId","data-v-46fa57bb"],["__file","/@slidev/slides/47.md"]]);const ws=t=>(Ee("data-v-51d7a64c"),t=t(),ke(),t),D9=ws(()=>e("blockquote",null,[e("p",null,"字体通常是大文件，需要一段时间才能加载，一些浏览器直到下载完字体后才呈现文本")],-1)),S9=ws(()=>e("br",null,null,-1)),F9=ws(()=>e("blockquote",null,[e("p",null,"font-display: swap 告诉浏览器默认使用系统字体进行渲染，当自定义字体下载完成之后再进行替换")],-1)),$9=ws(()=>e("br",null,null,-1)),P9=ws(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"@"),e("span",{style:{color:"#4D9375"}},"font-face"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"font-family"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'Pacifico'"),e("span",{style:{color:"#858585"}},";")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"font-style"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"normal"),e("span",{style:{color:"#858585"}},";")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"font-weight"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"400"),e("span",{style:{color:"#858585"}},";")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"src"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"local"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'Pacifico Regular'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#E0A569"}},"local"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'Pacifico-Regular'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},", "),e("span",{style:{color:"#E0A569"}},"url"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"https://fonts.gstatic.com/xxx.woff2"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"format"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'woff2'"),e("span",{style:{color:"#858585"}},");")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"font-display"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"swap"),e("span",{style:{color:"#858585"}},";")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"@"),e("span",{style:{color:"#1C6B48"}},"font-face"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"font-family"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'Pacifico'"),e("span",{style:{color:"#8E8F8B"}},";")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"font-style"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"normal"),e("span",{style:{color:"#8E8F8B"}},";")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"font-weight"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"400"),e("span",{style:{color:"#8E8F8B"}},";")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"src"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"local"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'Pacifico Regular'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#B58451"}},"local"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'Pacifico-Regular'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},", "),e("span",{style:{color:"#B58451"}},"url"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"https://fonts.gstatic.com/xxx.woff2"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"format"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'woff2'"),e("span",{style:{color:"#8E8F8B"}},");")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"font-display"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"swap"),e("span",{style:{color:"#8E8F8B"}},";")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1)),O9=ws(()=>e("br",null,null,-1)),T9=ws(()=>e("ul",null,[e("li",null,[e("strong",null,[f("使用 "),e("code",null,'<link rel="preload">'),f(" 更早的加载字体文件")])])],-1)),L9={__name:"48",setup(t){const n={};return I(W),(s,l)=>{const o=Ue,r=_n;return B(),q(_e,re(oe(n)),{default:O(()=>[e("h1",null,[f("警惕字体变化 "),R(o,{class:"text-rose-400"},{default:O(()=>[f("优化二")]),_:1})]),D9,S9,F9,$9,R(r,Ye({},{ranges:[""]}),{default:O(()=>[P9]),_:1},16),O9,T9]),_:1},16)}}},I9=U(L9,[["__scopeId","data-v-51d7a64c"],["__file","/@slidev/slides/48.md"]]),M9=e("h1",null,"以上优化，没有听懂？还有没其他优化点？",-1),N9={__name:"49",setup(t){const n={layout:"center"};return I(W),(s,l)=>(B(),q(Bt,re(oe(n)),{default:O(()=>[M9]),_:1},16))}},R9=U(N9,[["__file","/@slidev/slides/49.md"]]),j9=e("h1",null,"Optimize Cumulative Layout Shift（CLS）",-1),V9={__name:"50",setup(t){const n={layout:"center",class:"text-center"};return I(W),(s,l)=>{const o=Ri;return B(),q(Bt,re(oe(n)),{default:O(()=>[j9,R(o,{id:"AQqFZ5t8uNc?start=85",width:800,height:450})]),_:1},16)}}},H9=U(V9,[["__file","/@slidev/slides/50.md"]]),q9=e("div",{class:"grid grid-cols-[3fr,2fr] gap-4"},[e("div",{class:"text-center pb-4"},[e("div",{class:"my-auto"},[e("img",{class:"h-20 inline-block rounded-xl",src:"https://lh3.googleusercontent.com/9K-n57PrCZrkKjvP1B68H8qnGTfU6Y_XQq71uTGqVDgkiHdxeYYgioFkNv8sERCh6V-03Su3-asYsopDUiLyFIIG=w128-h128-e365-rj-sc0x00ffffff"}),e("p",null,"Web-Vitals"),e("div",{class:"opacity-50 mb-2 text-sm"}," Essential metrics for a healthy site ")]),e("div",{class:"text-center"},[e("a",{class:"!border-none",href:"https://www.npmjs.com/package/web-vitals",target:"__blank"},[e("img",{class:"h-4 inline mx-0.5",src:"https://img.shields.io/npm/v/web-vitals?color=a1b858&label=",alt:"NPM version"})]),e("a",{class:"!border-none",href:"https://www.npmjs.com/package/web-vitals",target:"__blank"},[e("img",{class:"h-4 inline mx-0.5",alt:"NPM Downloads",src:"https://img.shields.io/npm/dm/web-vitals?color=50a36f&label="})]),e("a",{class:"!border-none",href:"https://web.dev/vitals",target:"__blank"},[e("img",{class:"h-4 inline mx-0.5",src:"https://img.shields.io/static/v1?label=&message=docs%20%26%20demos&color=1e8a7a",alt:"Docs & Demos"})]),e("img",{class:"h-4 inline mx-0.5",alt:"Function Count",src:"https://img.shields.io/badge/-~1k%20tiny-13708a"}),e("br"),e("a",{class:"!border-none",href:"https://github.com/GoogleChrome/web-vitals",target:"__blank"},[e("img",{class:"mt-2 h-4 inline mx-0.5",alt:"GitHub stars",src:"https://img.shields.io/github/stars/GoogleChrome/web-vitals?style=social"})])])]),e("div",{class:"border-l border-gray-400 border-opacity-25 !all:leading-12 !all:list-none my-auto"},[e("ul",null,[e("li",null,"轻量 体积～1k"),e("li",null,"Tree-shakeable ESM"),e("li",null,"Supports any JavaScript project"),e("li",null,"CDN 兼容")])])],-1),W9={__name:"51",setup(t){const n={name:"Web-Vitails",layout:"center"};return I(W),(s,l)=>(B(),q(Bt,re(oe(n)),{default:O(()=>[q9]),_:1},16))}},z9=U(W9,[["__file","/@slidev/slides/51.md"]]);const gr=t=>(Ee("data-v-8d05692b"),t=t(),ke(),t),U9=gr(()=>e("ul",null,[e("li",null,[e("strong",null,"简单使用")])],-1)),G9=gr(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"/**")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}}," * 每个测量函数都接收一个 report 回调函数作为参数，回调函数将在测量完成后触发，另外，对于像 LCP 和 CLS 这样的指标是不断变化的，")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}}," * 所以它们的回调函数可能会多次触发，如果你想获取在这期间获取每次变化的数值，你可以指定第二个参数 reportAllChanges，否则回调函")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}}," * 数只有在最终测量完成后触发一次。")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}}," */")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#B8A965"}},"getCLS"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"getFID"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"getLCP"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'web-vitals'"),e("span",{style:{color:"#858585"}},";")]),f(`
`),e("span",{class:"line"}),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"getCLS"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"log"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"true"),e("span",{style:{color:"#858585"}},");")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"getFID"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"log"),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#758575"}},"// Does not take a `reportAllChanges` param.")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"getLCP"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"log"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"true"),e("span",{style:{color:"#858585"}},");")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"/**")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}}," * 每个测量函数都接收一个 report 回调函数作为参数，回调函数将在测量完成后触发，另外，对于像 LCP 和 CLS 这样的指标是不断变化的，")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}}," * 所以它们的回调函数可能会多次触发，如果你想获取在这期间获取每次变化的数值，你可以指定第二个参数 reportAllChanges，否则回调函")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}}," * 数只有在最终测量完成后触发一次。")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}}," */")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#8C862B"}},"getCLS"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"getFID"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"getLCP"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'web-vitals'"),e("span",{style:{color:"#8E8F8B"}},";")]),f(`
`),e("span",{class:"line"}),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"getCLS"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"log"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"true"),e("span",{style:{color:"#8E8F8B"}},");")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"getFID"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"log"),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A0ADA0"}},"// Does not take a `reportAllChanges` param.")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"getLCP"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"log"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"true"),e("span",{style:{color:"#8E8F8B"}},");")])])])],-1)),K9=gr(()=>e("p",null,[f("– "),e("strong",null,"发送指标至服务器")],-1)),J9=gr(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// 变化的指标如果触发多次的话可能会多次发送到你的服务器，所以回调函数中提供了下面三个参数")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#B8A965"}},"getCLS"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"getFID"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"getLCP"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'web-vitals'"),e("span",{style:{color:"#858585"}},";")]),f(`
`),e("span",{class:"line"}),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"getCLS"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"logDelta"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"true"),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getFID"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"logDelta"),e("span",{style:{color:"#858585"}},");"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getLCP"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"logDelta"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"true"),e("span",{style:{color:"#858585"}},");")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"log"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"`"),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#C98A7D"}},"name"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}}," matching ID "),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#C98A7D"}},"id"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}}," changed by "),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#C98A7D"}},"delta"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},"`"),e("span",{style:{color:"#858585"}},");")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"}")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"logDelta"),e("span",{style:{color:"#858585"}},"({"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"delta"),e("span",{style:{color:"#858585"}},"})"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// 变化的指标如果触发多次的话可能会多次发送到你的服务器，所以回调函数中提供了下面三个参数")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#8C862B"}},"getCLS"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"getFID"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"getLCP"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'web-vitals'"),e("span",{style:{color:"#8E8F8B"}},";")]),f(`
`),e("span",{class:"line"}),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"getCLS"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"logDelta"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"true"),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getFID"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"logDelta"),e("span",{style:{color:"#8E8F8B"}},");"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getLCP"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"logDelta"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"true"),e("span",{style:{color:"#8E8F8B"}},");")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8C862B"}},"console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"log"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"`"),e("span",{style:{color:"#8E8F8B"}},"${"),e("span",{style:{color:"#B56959"}},"name"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}}," matching ID "),e("span",{style:{color:"#8E8F8B"}},"${"),e("span",{style:{color:"#B56959"}},"id"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}}," changed by "),e("span",{style:{color:"#8E8F8B"}},"${"),e("span",{style:{color:"#B56959"}},"delta"),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#B56959"}},"`"),e("span",{style:{color:"#8E8F8B"}},");")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"}")]),f(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"logDelta"),e("span",{style:{color:"#8E8F8B"}},"({"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"id"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"delta"),e("span",{style:{color:"#8E8F8B"}},"})"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")])])])],-1)),Y9={__name:"52",setup(t){const n={};return I(W),(s,l)=>{const o=Ue,r=_n;return B(),q(_e,re(oe(n)),{default:O(()=>[e("h1",null,[f("如何使用 Web-Vitals ？"),R(o,{class:"text-purple-400"},{default:O(()=>[f("Tips")]),_:1})]),U9,R(r,Ye({},{ranges:[""]}),{default:O(()=>[G9]),_:1},16),K9,R(r,Ye({},{ranges:[""]}),{default:O(()=>[J9]),_:1},16)]),_:1},16)}}},Z9=U(Y9,[["__scopeId","data-v-8d05692b"],["__file","/@slidev/slides/52.md"]]),X9="/web-vitails/extension.png";const uy=t=>(Ee("data-v-cd28c2f8"),t=t(),ke(),t),Q9=uy(()=>e("ul",null,[e("li",null,[e("strong",null,"如何查看指标"),e("ul",null,[e("li",null,[e("code",null,"灰色：插件不支持或者被禁用")]),e("li",null,[e("code",null,"绿色：通过所有指标")]),e("li",null,[e("code",null,"红色：一个或多个指标不达标")])])])],-1)),e6=uy(()=>e("img",{class:"w-100 mt-10",filter:"~ :dark:invert",src:X9},null,-1)),t6={__name:"53",setup(t){const n={};return I(W),(s,l)=>{const o=Ue;return B(),q(_e,re(oe(n)),{default:O(()=>[e("h1",null,[f("使用 Chrome 插件 web-vitals-extension "),R(o,{class:"text-purple-400"},{default:O(()=>[f("Tips")]),_:1})]),Q9,e6]),_:1},16)}}},n6=U(t6,[["__scopeId","data-v-cd28c2f8"],["__file","/@slidev/slides/53.md"]]);const s6=t=>(Ee("data-v-685dd0e2"),t=t(),ke(),t),l6=s6(()=>e("div",{class:"grid grid-cols-2 gap-x-4"},[e("ul",null,[e("li",null,[e("p",null,[e("strong",null,"Core Web Vitals")]),e("img",{filter:"~ :dark:invert",src:"https://addyosmani.com/assets/images/core-web-vitals-addy.png"})])]),e("div",{class:"px-2 py-4"},[e("ul",null,[e("li",null,[e("strong",null,"Tools to measure Core Web Vitals")])]),e("img",{filter:"~ :dark:invert",src:"https://web-dev.imgix.net/image/admin/V00vjrHmwzljYo04f3d3.png"})])],-1)),o6={__name:"54",setup(t){const n={};return I(W),(s,l)=>{const o=Ue;return B(),q(_e,re(oe(n)),{default:O(()=>[e("h1",null,[f("工具及周边 "),R(o,{class:"text-purple-400"},{default:O(()=>[f("Tips")]),_:1})]),l6]),_:1},16)}}},r6=U(o6,[["__scopeId","data-v-685dd0e2"],["__file","/@slidev/slides/54.md"]]),a6=Pe({__name:"Transform",props:{scale:{type:[Number,String],required:!1},origin:{type:String,required:!1}},setup(t){const n=t;I(W);const s=F(()=>{const l=[];return n.scale!=null&&l.push(`scale(${n.scale||1})`),{transform:l.join(" "),"transform-origin":n.origin||"top left"}});return(l,o)=>(B(),X("div",{style:nt(x(s))},[Nt(l.$slots,"default")],4))}}),i6=U(a6,[["__file","/home/runner/work/web-vitails/web-vitails/node_modules/@slidev/client/builtin/Transform.vue"]]),c6={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},p6=e("path",{fill:"currentColor",d:"M11.547 25.752c9.057 0 14.01-7.503 14.01-14.01c0-.213 0-.425-.014-.636A10.017 10.017 0 0 0 28 8.556a9.827 9.827 0 0 1-2.828.776a4.942 4.942 0 0 0 2.164-2.724a9.866 9.866 0 0 1-3.126 1.195a4.929 4.929 0 0 0-8.392 4.491A13.98 13.98 0 0 1 5.67 7.15a4.928 4.928 0 0 0 1.525 6.573a4.887 4.887 0 0 1-2.235-.617v.063a4.926 4.926 0 0 0 3.95 4.827a4.917 4.917 0 0 1-2.223.084a4.93 4.93 0 0 0 4.6 3.42A9.88 9.88 0 0 1 4 23.54a13.94 13.94 0 0 0 7.547 2.209"},null,-1),u6=[p6];function d6(t,n){return B(),X("svg",c6,u6)}const f6={name:"carbon-logo-twitter",render:d6},y6={key:0,class:"w-30 h-30 my-10px bg-gray-400 bg-opacity-10 rounded-lg flex opacity-50"},h6={class:"m-auto animate-pulse text-4xl"},m6={key:0},g6=Pe({__name:"Tweet",props:{id:{type:[String,Number],required:!0},scale:{type:[String,Number],required:!1},conversation:{type:String,required:!1}},setup(t){var i;const n=t;I(W);const s=K(),l=wt(),o=K(!1),r=K(!1);async function a(){const c=await window.twttr.widgets.createTweet(n.id.toString(),s.value,{theme:hr.value?"dark":"light",conversation:n.conversation||"none"});o.value=!0,c===void 0&&(r.value=!0)}return(i=window==null?void 0:window.twttr)!=null&&i.widgets?gn(a):Y0("https://platform.twitter.com/widgets.js",()=>{l.isMounted?a():gn(a,l)},{async:!0}),(c,p)=>{const u=f6,d=i6;return B(),q(d,{scale:t.scale||1},{default:O(()=>[e("div",{ref_key:"tweet",ref:s,class:"tweet slidev-tweet"},[!o.value||r.value?(B(),X("div",y6,[e("div",h6,[R(u),r.value?(B(),X("span",m6,'Could not load tweet with id="'+jn(n.id)+'"',1)):Ae("v-if",!0)])])):Ae("v-if",!0)],512)]),_:1},8,["scale"])}}});const v6=U(g6,[["__file","/home/runner/work/web-vitails/web-vitails/node_modules/@slidev/client/builtin/Tweet.vue"]]);const vr=t=>(Ee("data-v-beee067d"),t=t(),ke(),t),_6=vr(()=>e("h1",null,"PPT怎么制作的？",-1)),b6=vr(()=>e("p",null,"为开发者打造的演示文稿工具（目前处于Beta版本）",-1)),A6={class:"grid grid-cols-2 gap-x-4"},w6=vr(()=>e("p",null,[e("strong",null,"Slidev引荐")],-1)),B6=vr(()=>e("div",{class:"px-2 py-4"},[e("ul",null,[e("li",null,[e("strong",null,"为什么选择 Slidev ？"),e("ul",null,[e("li",null,[e("code",null,"支持 Markdown 语法")]),e("li",null,[e("code",null,"可定制主题")]),e("li",null,[e("code",null,"对开发者友好，支持 Prism、Shiki 语法高亮")]),e("li",null,[e("code",null,"快速，内部基于 Vite、Vue 3 和 Windi CSS")]),e("li",null,[e("code",null,"互动性 & 直观表达，可以自由编写组件直接在 MarkDown 中使用")]),e("li",null,[e("code",null,"可移植性，可以直接导出图片 & PDF文件")]),e("li",null,[e("code",null,"可配置，支持 WebGL、网络请求、iframes和实时共享")])])])]),e("div",{class:"mt-4"}),e("blockquote",null,[e("p",null,[f("PPT原稿："),e("a",{href:"https://github.com/lanxuexing/web-vitails",target:"_blank",rel:"noopener"},"GitHub Repo")])])],-1)),C6={__name:"55",setup(t){const n={};return I(W),(s,l)=>{const o=v6;return B(),q(_e,re(oe(n)),{default:O(()=>[_6,b6,e("div",A6,[e("ul",null,[e("li",null,[w6,R(o,{id:"1406831784701136902",scale:"0.55"})])]),B6])]),_:1},16)}}},x6=U(C6,[["__scopeId","data-v-beee067d"],["__file","/@slidev/slides/55.md"]]),E6=[{path:"1",name:"page-1",component:Gw,meta:{theme:"default",background:"#FFF",class:"text-center",highlighter:"shiki",info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,title:"Web Vitals",slide:{raw:`---
theme: default
background: '#FFF'
class: text-center
highlighter: shiki
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
title: Web Vitals
---

# Web Vitals

谷歌的新一代 Web 性能体验和质量指标

<div>
<a href="https://github.com/lanxuexing/web-vitails" target="_blank" alt="GitHub"
  class="abs-br m-6 text-xl icon-btn opacity-50 !border-none !hover:text-white">
  <carbon-logo-github />
</a>
</div>
`,title:"Web Vitals",level:1,content:`# Web Vitals

谷歌的新一代 Web 性能体验和质量指标

<div>
<a href="https://github.com/lanxuexing/web-vitails" target="_blank" alt="GitHub"
  class="abs-br m-6 text-xl icon-btn opacity-50 !border-none !hover:text-white">
  <carbon-logo-github />
</a>
</div>`,frontmatter:{theme:"default",background:"#FFF",class:"text-center",highlighter:"shiki",info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,title:"Web Vitals"},index:0,start:0,end:24,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:eB,meta:{slide:{raw:`
# 什么是Web Vitails

> Web Vitals是Google的一项重大举措，旨在为质量信号提供统一的指导，这对于在Web上提供出色的用户体验来说很重要。
<br/>
> 网站的开发者需要了解自己的网站给用户带来的体验，但不一定要成为性能优化的专家。Web Vitals旨在简化流程，并帮助网站开发者聚焦在核心性能指标上，也称为Core Web Vitals。

<img filter="~ dark:invert" class="pt-10 w-100 m-auto" src="https://lh6.googleusercontent.com/i9iF8GqgQhXkh1MLRlGQjYRxy_WzXNWTOTvBl5b-HCiL8HTgCk-Qh7PINQ1ruv-q5qUiRNhlpzKMybGzO_nYiTVOxIJoFBxBLRMIPCbI4AIcKLmcMhmh08JWQpCtpJq-hltKhiFi" />

<style>
  blockquote {
    @apply text-amber-500;
  }
</style>
`,title:"什么是Web Vitails",level:1,content:`# 什么是Web Vitails

> Web Vitals是Google的一项重大举措，旨在为质量信号提供统一的指导，这对于在Web上提供出色的用户体验来说很重要。
<br/>
> 网站的开发者需要了解自己的网站给用户带来的体验，但不一定要成为性能优化的专家。Web Vitals旨在简化流程，并帮助网站开发者聚焦在核心性能指标上，也称为Core Web Vitals。

<img filter="~ dark:invert" class="pt-10 w-100 m-auto" src="https://lh6.googleusercontent.com/i9iF8GqgQhXkh1MLRlGQjYRxy_WzXNWTOTvBl5b-HCiL8HTgCk-Qh7PINQ1ruv-q5qUiRNhlpzKMybGzO_nYiTVOxIJoFBxBLRMIPCbI4AIcKLmcMhmh08JWQpCtpJq-hltKhiFi" />

<style>
  blockquote {
    @apply text-amber-500;
  }
</style>`,frontmatter:{},index:1,start:25,end:40,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:aB,meta:{slide:{raw:`
# 如何准确衡量网站的性能 <Marker class="text-purple-400">思考</Marker>

以用户为中心的性能指标，应该能回答以下四个问题

<br>

- **是否发生？** 导航是否成功启动？服务器是否有响应？
- **是否有用？** 是否已渲染可以与用户互动的足够内容？
- **是否有用？** 用户可以与页面交互，还是页面仍在忙于加载？
- **是否令人愉快？** 交互是否顺畅而自然，没有滞后和卡顿？

<style>
  strong {
    @apply text-green-500
  }
</style>
`,title:'如何准确衡量网站的性能 <Marker class="text-purple-400">思考</Marker>',level:1,content:`# 如何准确衡量网站的性能 <Marker class="text-purple-400">思考</Marker>

以用户为中心的性能指标，应该能回答以下四个问题

<br>

- **是否发生？** 导航是否成功启动？服务器是否有响应？
- **是否有用？** 是否已渲染可以与用户互动的足够内容？
- **是否有用？** 用户可以与页面交互，还是页面仍在忙于加载？
- **是否令人愉快？** 交互是否顺畅而自然，没有滞后和卡顿？

<style>
  strong {
    @apply text-green-500
  }
</style>`,frontmatter:{},index:2,start:41,end:59,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:DB,meta:{slide:{raw:`
# 性能指标（Performance Metrics）

<div class="grid grid-cols-2 gap-x-4">

- **Load** - 当整个页面加载完成时（包括所有依赖资源，如样式表和图像）触发该事件

\`\`\`ts
window.addEventListener('load', (event) => {
  console.log('页面已完全加载');
});
\`\`\`

- **DOMContentLoaded** - HTML加载完成时（无需等待样式、图片和子框架加载完成）触发该事件

\`\`\`ts
window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM 完全加载和解析');
});
\`\`\`

</div>

<img class="m-auto w-170" filter="~ dark:invert" src="https://static001.infoq.cn/resource/image/42/d7/42c7b4924482fyy59b559054d5837ed7.png"/>

<style>
  strong {
    @apply text-green-500
  }
  img {
    margin-top: -90px;
    clip-path: inset(100px 50px 140px 60px);
  }
</style>
`,title:"性能指标（Performance Metrics）",level:1,content:`# 性能指标（Performance Metrics）

<div class="grid grid-cols-2 gap-x-4">

- **Load** - 当整个页面加载完成时（包括所有依赖资源，如样式表和图像）触发该事件

\`\`\`ts
window.addEventListener('load', (event) => {
  console.log('页面已完全加载');
});
\`\`\`

- **DOMContentLoaded** - HTML加载完成时（无需等待样式、图片和子框架加载完成）触发该事件

\`\`\`ts
window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM 完全加载和解析');
});
\`\`\`

</div>

<img class="m-auto w-170" filter="~ dark:invert" src="https://static001.infoq.cn/resource/image/42/d7/42c7b4924482fyy59b559054d5837ed7.png"/>

<style>
  strong {
    @apply text-green-500
  }
  img {
    margin-top: -90px;
    clip-path: inset(100px 50px 140px 60px);
  }
</style>`,frontmatter:{},index:3,start:60,end:95,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:PB,meta:{slide:{raw:`
# 是否发生？<Marker class="text-rose-400">问题一</Marker>

当用户访问一个网站的时候，关心的第一个问题永远是“是否发生”——浏览器是否成功地把我的请求发送出去，而服务器是否已经知道并开始处理我的请求？

<div class="grid grid-cols-2 gap-x-4">

- **TTFB (Time to First Byte)**
  - \`首字节到达的时间点\`
- **FP (First Paint)**
  - \`首次绘制，标记浏览器渲染任何在视觉上不同于导航前屏幕内容的时间点\`
- **FCP (First Contentful Paint)**
  - \`首次内容绘制，标记浏览器渲染来自DOM第一位内容的时间点，内容可能是文本、图像等元素\`

<div class="px-2 py-4">
  <img filter="~ dark:invert" src="https://static001.infoq.cn/resource/image/bc/0b/bc9cccb614756cd59e24f4baf35f920b.png"/>
</div>

</div>

<style>
  strong {
    @apply text-green-500
  }
</style>
`,title:'是否发生？<Marker class="text-rose-400">问题一</Marker>',level:1,content:`# 是否发生？<Marker class="text-rose-400">问题一</Marker>

当用户访问一个网站的时候，关心的第一个问题永远是“是否发生”——浏览器是否成功地把我的请求发送出去，而服务器是否已经知道并开始处理我的请求？

<div class="grid grid-cols-2 gap-x-4">

- **TTFB (Time to First Byte)**
  - \`首字节到达的时间点\`
- **FP (First Paint)**
  - \`首次绘制，标记浏览器渲染任何在视觉上不同于导航前屏幕内容的时间点\`
- **FCP (First Contentful Paint)**
  - \`首次内容绘制，标记浏览器渲染来自DOM第一位内容的时间点，内容可能是文本、图像等元素\`

<div class="px-2 py-4">
  <img filter="~ dark:invert" src="https://static001.infoq.cn/resource/image/bc/0b/bc9cccb614756cd59e24f4baf35f920b.png"/>
</div>

</div>

<style>
  strong {
    @apply text-green-500
  }
</style>`,frontmatter:{},index:4,start:96,end:122,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:IB,meta:{slide:{raw:`
# 是否有用？<Marker class="text-rose-400">问题二</Marker>

当用户确定自己的请求发生了后，就会开始关心第二个问题：“是否有用？”

<div class="grid grid-cols-2 gap-x-4">

- **FMP (First Meaningful Paint)**
  - \`首次有效绘制，是指首次绘制对用户有用内容的时间点\`
- **LCP (Largest Contentful Paint)**
  - \`最大内容绘制时间，计算从页面开始加载到用户与页面发生交互（点击，滚动）这段时间内，最大元素绘制的时间，该时间会随着页面渲染变化而变化，因为页面中的最大元素在渲染过程中可能会发生改变\`
- **SI (Speed Index)**
  - \`速度指标，填充页面内容的速度，取开始加载到最后完成渲染，每一时刻页面未完成度的积分\`

<div class="px-2 py-4">
  <img filter="~ dark:invert" src="https://static001.infoq.cn/resource/image/df/7e/dfdaf0555fd31ae467ddb700e2897f7e.png"/>
</div>

</div>

<style>
  strong {
    @apply text-green-500
  }
</style>
`,title:'是否有用？<Marker class="text-rose-400">问题二</Marker>',level:1,content:`# 是否有用？<Marker class="text-rose-400">问题二</Marker>

当用户确定自己的请求发生了后，就会开始关心第二个问题：“是否有用？”

<div class="grid grid-cols-2 gap-x-4">

- **FMP (First Meaningful Paint)**
  - \`首次有效绘制，是指首次绘制对用户有用内容的时间点\`
- **LCP (Largest Contentful Paint)**
  - \`最大内容绘制时间，计算从页面开始加载到用户与页面发生交互（点击，滚动）这段时间内，最大元素绘制的时间，该时间会随着页面渲染变化而变化，因为页面中的最大元素在渲染过程中可能会发生改变\`
- **SI (Speed Index)**
  - \`速度指标，填充页面内容的速度，取开始加载到最后完成渲染，每一时刻页面未完成度的积分\`

<div class="px-2 py-4">
  <img filter="~ dark:invert" src="https://static001.infoq.cn/resource/image/df/7e/dfdaf0555fd31ae467ddb700e2897f7e.png"/>
</div>

</div>

<style>
  strong {
    @apply text-green-500
  }
</style>`,frontmatter:{},index:5,start:123,end:149,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:jB,meta:{slide:{raw:`
# 是否有用？<Marker class="text-rose-400">问题三</Marker>

在用户得到了有用的信息后，用户就会基于得到的信息作出反应，这就是页面“是否可用？”

<div class="grid grid-cols-2 gap-x-4">

- **Long Tasks**
  - \`耗时任务。浏览器是单线程，所有任务会被添加到主线程的队列中逐个执行。如果有任务耗时过长，主线程就会被阻塞，其他任务就只能等待，包括那些由用户交互产生的任务，从而无法及时响应用户\`
- **TTI (Time to Interactive)**
  - \`可交互时间，用于标记页面已进行视觉渲染并能可靠响应用户输入的时间点\`
- **TBT (Total Blocking Time)**
  - \`总共阻塞时间，计算的是从 FCP 到 TTI 之间，主线程阻塞的总时间\`
- **FID (First Input Delay)**
  - \`首次输入延迟，指用户首次输入到页面响应的时间\`

<div class="px-2 py-4">
  <img filter="~ dark:invert" src="https://static001.infoq.cn/resource/image/bb/21/bb5yyd9fab93e2ff660a38685de67621.png"/>
</div>

</div>

<style>
  strong {
    @apply text-green-500
  }
</style>
`,title:'是否有用？<Marker class="text-rose-400">问题三</Marker>',level:1,content:`# 是否有用？<Marker class="text-rose-400">问题三</Marker>

在用户得到了有用的信息后，用户就会基于得到的信息作出反应，这就是页面“是否可用？”

<div class="grid grid-cols-2 gap-x-4">

- **Long Tasks**
  - \`耗时任务。浏览器是单线程，所有任务会被添加到主线程的队列中逐个执行。如果有任务耗时过长，主线程就会被阻塞，其他任务就只能等待，包括那些由用户交互产生的任务，从而无法及时响应用户\`
- **TTI (Time to Interactive)**
  - \`可交互时间，用于标记页面已进行视觉渲染并能可靠响应用户输入的时间点\`
- **TBT (Total Blocking Time)**
  - \`总共阻塞时间，计算的是从 FCP 到 TTI 之间，主线程阻塞的总时间\`
- **FID (First Input Delay)**
  - \`首次输入延迟，指用户首次输入到页面响应的时间\`

<div class="px-2 py-4">
  <img filter="~ dark:invert" src="https://static001.infoq.cn/resource/image/bb/21/bb5yyd9fab93e2ff660a38685de67621.png"/>
</div>

</div>

<style>
  strong {
    @apply text-green-500
  }
</style>`,frontmatter:{},index:6,start:150,end:178,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:WB,meta:{slide:{raw:`
# 是否令人愉快？<Marker class="text-rose-400">问题四</Marker>

在用户得到了有用的信息后，用户就会基于得到的信息作出反应，这就是页面“是否可用？”

<div class="grid grid-cols-2 gap-x-4">

- **CLS (Cumulative Layout Shift)**
  - \`累计布局偏移。测量在页面的整个生命周期中发生的每个意外的样式移动所造成的布局偏移分数的总和\`

<div class="px-2 py-4">
  <img filter="~ dark:invert" src="https://static001.infoq.cn/resource/image/c0/1a/c0c492896796599a38731cd0390a3b1a.gif"/>
</div>

</div>

<style>
  strong {
    @apply text-green-500
  }
</style>
`,title:'是否令人愉快？<Marker class="text-rose-400">问题四</Marker>',level:1,content:`# 是否令人愉快？<Marker class="text-rose-400">问题四</Marker>

在用户得到了有用的信息后，用户就会基于得到的信息作出反应，这就是页面“是否可用？”

<div class="grid grid-cols-2 gap-x-4">

- **CLS (Cumulative Layout Shift)**
  - \`累计布局偏移。测量在页面的整个生命周期中发生的每个意外的样式移动所造成的布局偏移分数的总和\`

<div class="px-2 py-4">
  <img filter="~ dark:invert" src="https://static001.infoq.cn/resource/image/c0/1a/c0c492896796599a38731cd0390a3b1a.gif"/>
</div>

</div>

<style>
  strong {
    @apply text-green-500
  }
</style>`,frontmatter:{},index:7,start:179,end:201,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:ZB,meta:{layout:"center",class:"text-center",slide:{raw:`---
layout: center
class: text-center
---

# Core Web Vitals

核心性能指标
`,title:"Core Web Vitals",level:1,content:`# Core Web Vitals

核心性能指标`,frontmatter:{layout:"center",class:"text-center"},index:8,start:201,end:210,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:tC,meta:{slide:{raw:`
# Core Web Vitals

<div class="pt-12 flex justify-center">
  <div>
    <img class="w-60" src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ZZU8Z7TMKXmzZT2mCjJU.svg"/>
    <p class="text-center opacity-50 cursor-pointer text-sm">
      <a href="https://web.dev/lcp/" target="_blank" rel="noopener">最大内容绘制</a>
    </p>
  </div>
  <div>
    <img class="w-60" src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/iHYrrXKe4QRcb2uu8eV8.svg"/>
    <p class="text-center opacity-50 cursor-pointer text-sm">
      <a href="https://web.dev/fid/" target="_blank" rel="noopener">首次输入延迟</a>
    </p>
  </div>
  <div>
    <img class="w-60" src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dgpDFckbHwwOKdIGDa3N.svg"/>
    <p class="text-center opacity-50 cursor-pointer text-sm">
      <a herf="https://web.dev/cls/" target="_blank" rel="noopener">累积布局偏移</a>
    </p>
  </div>
</div>
`,title:"Core Web Vitals",level:1,content:`# Core Web Vitals

<div class="pt-12 flex justify-center">
  <div>
    <img class="w-60" src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ZZU8Z7TMKXmzZT2mCjJU.svg"/>
    <p class="text-center opacity-50 cursor-pointer text-sm">
      <a href="https://web.dev/lcp/" target="_blank" rel="noopener">最大内容绘制</a>
    </p>
  </div>
  <div>
    <img class="w-60" src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/iHYrrXKe4QRcb2uu8eV8.svg"/>
    <p class="text-center opacity-50 cursor-pointer text-sm">
      <a href="https://web.dev/fid/" target="_blank" rel="noopener">首次输入延迟</a>
    </p>
  </div>
  <div>
    <img class="w-60" src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/dgpDFckbHwwOKdIGDa3N.svg"/>
    <p class="text-center opacity-50 cursor-pointer text-sm">
      <a herf="https://web.dev/cls/" target="_blank" rel="noopener">累积布局偏移</a>
    </p>
  </div>
</div>`,frontmatter:{},index:9,start:211,end:235,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:oC,meta:{layout:"center",class:"text-center",slide:{raw:`---
layout: center
class: text-center
---

# LCP (Largest Contentful Paint)

衡量加载体验 **·** 最大内容绘制
`,title:"LCP (Largest Contentful Paint)",level:1,content:`# LCP (Largest Contentful Paint)

衡量加载体验 **·** 最大内容绘制`,frontmatter:{layout:"center",class:"text-center"},index:10,start:235,end:244,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:pC,meta:{slide:{raw:`
# LCP (Largest Contentful Paint) <MarkerCore />

最大内容绘制时间。测量加载性能，为了能提供较好的用户体验，LCP指标建议页面首次加载要在2.5s内完成

<div class="grid grid-cols-2 gap-x-4 pt-10">

- **定义**
  - \`页面开始加载到最大文本块内容或图片显示在页面中的时间\`
- **为什么是LCP？**
  - \`Load、DOMContentLoaded 指标不友好，例如Skeleton骨架屏、Loading加载器\`
  - \`FMP、SI指标复杂，有的时候甚至是错的\`
- **什么样的指标才是好的？**
  - <img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/elqsdYqQEefWJbUM2qMO.svg"/>

<div>

  - **LCP关注哪些元素？**
    - \`<img>元素\`
    - \`<image>元素内的<svg>元素\`
    - \`<video>元素（仅仅指poster海报图）\`
    - \`通过 url() 函数加载背景图片的元素\`
    - \`包含文本节点或其他内联文本元素子级的块级元素\`

  - **不断发展的LCP指标**
    - \`显然不止于此，这些元素只是目前LCP分数考虑的元素类型，之后随着研究的深入，会陆续进行更新\`

</div>

</div>


<style>
  strong {
    @apply text-green-500
  }
</style>
`,title:"LCP (Largest Contentful Paint) <MarkerCore />",level:1,content:`# LCP (Largest Contentful Paint) <MarkerCore />

最大内容绘制时间。测量加载性能，为了能提供较好的用户体验，LCP指标建议页面首次加载要在2.5s内完成

<div class="grid grid-cols-2 gap-x-4 pt-10">

- **定义**
  - \`页面开始加载到最大文本块内容或图片显示在页面中的时间\`
- **为什么是LCP？**
  - \`Load、DOMContentLoaded 指标不友好，例如Skeleton骨架屏、Loading加载器\`
  - \`FMP、SI指标复杂，有的时候甚至是错的\`
- **什么样的指标才是好的？**
  - <img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/elqsdYqQEefWJbUM2qMO.svg"/>

<div>

  - **LCP关注哪些元素？**
    - \`<img>元素\`
    - \`<image>元素内的<svg>元素\`
    - \`<video>元素（仅仅指poster海报图）\`
    - \`通过 url() 函数加载背景图片的元素\`
    - \`包含文本节点或其他内联文本元素子级的块级元素\`

  - **不断发展的LCP指标**
    - \`显然不止于此，这些元素只是目前LCP分数考虑的元素类型，之后随着研究的深入，会陆续进行更新\`

</div>

</div>


<style>
  strong {
    @apply text-green-500
  }
</style>`,frontmatter:{},index:11,start:245,end:283,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:yC,meta:{slide:{raw:`
<div class="grid grid-cols-2 gap-x-4"><div>

# Rules
如何确定元素的大小

<div class="mt-10"></div>

### 图像
- 视口viewport内可见visible元素的大小
  > clip和overflow等将被忽略
- 缩小图像的大小以缩小显示的为准
- 拉伸后的图像以图像的原始尺寸为准


<div class="mt-10"></div>

### 文本

- 仅考虑其文本节点的大小
- 所有元素，均不考虑 **margin/padding/border** 样式


</div><div>

# Outputs
什么时候应该记录

<div class="mt-10"></div>

### API

- 网页分阶段加载，页面最大的元素可能会发生变化
- PerformanceEntry API 调度与记录
  > 浏览器在浏览器绘制第一帧后立即调度PerformanceEntry记录LCP，之后有最大元素出现则更新


<div class="mt-10"></div>

### 边界条件

- 当前是最大内容元素从视口中删除（或从DOM中删除），除非呈现更大的元素，否则原来将被保持
- 一旦用户与页面交互（通过点击、滚动或按键），浏览器将停止记录LCP

</div></div>

<style>
  h3 {
    @apply text-green-500 !opacity-100
  }
  blockquote {
    @apply text-amber-500;
  }
</style>
`,title:"Rules",level:1,content:`<div class="grid grid-cols-2 gap-x-4"><div>

# Rules
如何确定元素的大小

<div class="mt-10"></div>

### 图像
- 视口viewport内可见visible元素的大小
  > clip和overflow等将被忽略
- 缩小图像的大小以缩小显示的为准
- 拉伸后的图像以图像的原始尺寸为准


<div class="mt-10"></div>

### 文本

- 仅考虑其文本节点的大小
- 所有元素，均不考虑 **margin/padding/border** 样式


</div><div>

# Outputs
什么时候应该记录

<div class="mt-10"></div>

### API

- 网页分阶段加载，页面最大的元素可能会发生变化
- PerformanceEntry API 调度与记录
  > 浏览器在浏览器绘制第一帧后立即调度PerformanceEntry记录LCP，之后有最大元素出现则更新


<div class="mt-10"></div>

### 边界条件

- 当前是最大内容元素从视口中删除（或从DOM中删除），除非呈现更大的元素，否则原来将被保持
- 一旦用户与页面交互（通过点击、滚动或按键），浏览器将停止记录LCP

</div></div>

<style>
  h3 {
    @apply text-green-500 !opacity-100
  }
  blockquote {
    @apply text-amber-500;
  }
</style>`,frontmatter:{},index:12,start:284,end:339,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:vC,meta:{slide:{raw:`
<div class="grid grid-cols-2 gap-x-4"><div>

# 案例一

### 新内容被添加到 DOM 中并且改变了最大的元素

<img class="w-100 mb-4 mt-4" src="https://web-dev.imgix.net/image/admin/bsBm8poY1uQbq7mNvVJm.png"/>

### 布局更改并且以前最大的内容从视口中删除

<img class="w-100 mt-4" src="https://web-dev.imgix.net/image/admin/xAvLL1u2KFRaqoZZiI71.png"/>

</div><div>

# 案例二

### IG 徽标加载早，即使其他内容逐渐显示，它仍然是最大的元素

<img class="w-100 mb-4 mt-4" src="https://web-dev.imgix.net/image/admin/uJAGswhXK3bE6Vs4I5bP.png"/>

### 最大的元素是一段文本从一开始就出现且贯穿始终

<img class="w-100 mt-4" src="https://web-dev.imgix.net/image/admin/e0O2woQjZJ92aYlPOJzT.png"/>

</div></div>

<style>
  h3 {
    @apply text-amber-500 !opacity-100
  }
</style>

`,title:"案例一",level:1,content:`<div class="grid grid-cols-2 gap-x-4"><div>

# 案例一

### 新内容被添加到 DOM 中并且改变了最大的元素

<img class="w-100 mb-4 mt-4" src="https://web-dev.imgix.net/image/admin/bsBm8poY1uQbq7mNvVJm.png"/>

### 布局更改并且以前最大的内容从视口中删除

<img class="w-100 mt-4" src="https://web-dev.imgix.net/image/admin/xAvLL1u2KFRaqoZZiI71.png"/>

</div><div>

# 案例二

### IG 徽标加载早，即使其他内容逐渐显示，它仍然是最大的元素

<img class="w-100 mb-4 mt-4" src="https://web-dev.imgix.net/image/admin/uJAGswhXK3bE6Vs4I5bP.png"/>

### 最大的元素是一段文本从一开始就出现且贯穿始终

<img class="w-100 mt-4" src="https://web-dev.imgix.net/image/admin/e0O2woQjZJ92aYlPOJzT.png"/>

</div></div>

<style>
  h3 {
    @apply text-amber-500 !opacity-100
  }
</style>`,frontmatter:{},index:13,start:340,end:374,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:BC,meta:{slide:{raw:`
# 如何测量 LCP ？

<div class="grid grid-cols-2 gap-x-4">

- **线上测量工具**
  - \`Chrome User Experience Report\`
  - \`PageSpeed Insights\`
  - \`Search Console (Core Web Vitals report)\`
  - \`web-vitals JavaScript library\`

- **web-vitals JavaScript library**

  \`\`\`js
  import { getLCP } from 'web-vitals';

  // 一旦 LCP 可用，立即测量并记录它
  getLCP(console.log);
  \`\`\`

<div class="px-2">

  - **实验室工具**
    - \`Chrome DevTools\`
    - \`Lighthouse\`
    - \`WebPageTest\`

  - **浏览器中的 PerformanceObserver 结果**

  <img filter="~ :dark:invert" src="/console-lcp.png">

</div>

</div>

<style>
  strong {
    @apply text-green-500
  }
  blockquote {
    @apply text-amber-500;
  }
</style>
`,title:"如何测量 LCP ？",level:1,content:`# 如何测量 LCP ？

<div class="grid grid-cols-2 gap-x-4">

- **线上测量工具**
  - \`Chrome User Experience Report\`
  - \`PageSpeed Insights\`
  - \`Search Console (Core Web Vitals report)\`
  - \`web-vitals JavaScript library\`

- **web-vitals JavaScript library**

  \`\`\`js
  import { getLCP } from 'web-vitals';

  // 一旦 LCP 可用，立即测量并记录它
  getLCP(console.log);
  \`\`\`

<div class="px-2">

  - **实验室工具**
    - \`Chrome DevTools\`
    - \`Lighthouse\`
    - \`WebPageTest\`

  - **浏览器中的 PerformanceObserver 结果**

  <img filter="~ :dark:invert" src="/console-lcp.png">

</div>

</div>

<style>
  strong {
    @apply text-green-500
  }
  blockquote {
    @apply text-amber-500;
  }
</style>`,frontmatter:{},index:14,start:375,end:419,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:FC,meta:{slide:{raw:`
# 在 JavaScript 中如何测量 LCP ?

Largest Contentful Paint API

<div class="grid grid-cols-2 gap-x-4">

\`\`\`html
<!-- 
  API与指标之间的差异：
    1. Tab选项卡
    2. 浏览器的前进和后退
    3. iframe
    4. ...
 -->
<img src="large_image.jpg">
<p id='large-paragraph'>This is large body of text.</p>
...
<script>
// 创建性能观察器
const observer = new PerformanceObserver((entryList) => {
  let perfEntries = entryList.getEntries();
  let lastEntry = perfEntries[perfEntries.length - 1];
  // 处理相关指标信息
});
observer.observe({entryTypes: ['largest-contentful-paint']});
<\/script>
\`\`\`

\`\`\`html
<!-- 最大元素与最重要有差异？自定义指标 -->
<img elementtiming="hero-image" />
<p elementtiming="important-paragraph">This is text I care about.</p>
...
<script>
// 捕获错误，因为某些浏览器在使用新的 \`type\` 选项时会抛出错误
try {
  // 创建性能观察器
  const po = new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      // 打印记录条目和所有相关的详细信息
      console.log(entry.toJSON());
    }
  });
  // 开始监听要调度的 \`element\` 条目
  po.observe({type: 'element', buffered: true});
} catch (e) {
  // 如果浏览器不支持此 API，则什么也不做
}
<\/script>
\`\`\`

</div>
`,title:"在 JavaScript 中如何测量 LCP ?",level:1,content:`# 在 JavaScript 中如何测量 LCP ?

Largest Contentful Paint API

<div class="grid grid-cols-2 gap-x-4">

\`\`\`html
<!-- 
  API与指标之间的差异：
    1. Tab选项卡
    2. 浏览器的前进和后退
    3. iframe
    4. ...
 -->
<img src="large_image.jpg">
<p id='large-paragraph'>This is large body of text.</p>
...
<script>
// 创建性能观察器
const observer = new PerformanceObserver((entryList) => {
  let perfEntries = entryList.getEntries();
  let lastEntry = perfEntries[perfEntries.length - 1];
  // 处理相关指标信息
});
observer.observe({entryTypes: ['largest-contentful-paint']});
<\/script>
\`\`\`

\`\`\`html
<!-- 最大元素与最重要有差异？自定义指标 -->
<img elementtiming="hero-image" />
<p elementtiming="important-paragraph">This is text I care about.</p>
...
<script>
// 捕获错误，因为某些浏览器在使用新的 \`type\` 选项时会抛出错误
try {
  // 创建性能观察器
  const po = new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      // 打印记录条目和所有相关的详细信息
      console.log(entry.toJSON());
    }
  });
  // 开始监听要调度的 \`element\` 条目
  po.observe({type: 'element', buffered: true});
} catch (e) {
  // 如果浏览器不支持此 API，则什么也不做
}
<\/script>
\`\`\`

</div>`,frontmatter:{},index:15,start:420,end:474,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:TC,meta:{layout:"center",class:"text-center",slide:{raw:`---
layout: center
class: text-center
---

# Optimize LCP（Largest Contentful Paint）
优化最大的内容绘制
`,title:"Optimize LCP（Largest Contentful Paint）",level:1,content:`# Optimize LCP（Largest Contentful Paint）
优化最大的内容绘制`,frontmatter:{layout:"center",class:"text-center"},index:16,start:474,end:482,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:NC,meta:{slide:{raw:`
# 如何优化 LCP ？

<div class="grid grid-cols-2 gap-x-4 gap-y-4">

### LCP 可能被这四个因素影响

### 优化 LCP 的建议

<div>

- **服务端响应时间**
- **Javascript 和 CSS 引起的渲染卡顿**
- **资源加载时间**
- **客户端渲染**

</div>

<div>

- **应用 PRPL 即时加载（将请求推迟到需要时再发送）**
- **优化关键渲染路径**
- **优化 CSS**
- **优化 Image**
- **优化 Web Font**
- **优化 JavaScript**
- **使用 Gzip 和 Brotli 压缩文件资源，降低传输时间**
- **使用 service worker 缓存资源**

<div class="mt-2"></div>

> PRPL模式 <br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Push：（推送或预加载）最重要的资源 <br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Render：尽快渲染初始路线 <br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pre-cache：预缓存剩余资源 <br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lazy load：延迟加载其他路由和非关键资源

</div>

</div>

<style>
  h3 {
    @apply text-amber-500 !opacity-100;
  }
  strong {
    @apply text-green-500;
  }
</style>

<!-- 
减少网络负载方法：对图像使用WebP而不是JPEG或PNG（图片要求不严格，可以压缩体积，使用tinypng.com，将JPEG图像的压缩级别设置为85
 -->
`,title:"如何优化 LCP ？",level:1,content:`# 如何优化 LCP ？

<div class="grid grid-cols-2 gap-x-4 gap-y-4">

### LCP 可能被这四个因素影响

### 优化 LCP 的建议

<div>

- **服务端响应时间**
- **Javascript 和 CSS 引起的渲染卡顿**
- **资源加载时间**
- **客户端渲染**

</div>

<div>

- **应用 PRPL 即时加载（将请求推迟到需要时再发送）**
- **优化关键渲染路径**
- **优化 CSS**
- **优化 Image**
- **优化 Web Font**
- **优化 JavaScript**
- **使用 Gzip 和 Brotli 压缩文件资源，降低传输时间**
- **使用 service worker 缓存资源**

<div class="mt-2"></div>

> PRPL模式 <br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Push：（推送或预加载）最重要的资源 <br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Render：尽快渲染初始路线 <br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pre-cache：预缓存剩余资源 <br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lazy load：延迟加载其他路由和非关键资源

</div>

</div>

<style>
  h3 {
    @apply text-amber-500 !opacity-100;
  }
  strong {
    @apply text-green-500;
  }
</style>`,frontmatter:{},note:"减少网络负载方法：对图像使用WebP而不是JPEG或PNG（图片要求不严格，可以压缩体积，使用tinypng.com，将JPEG图像的压缩级别设置为85",index:17,start:483,end:537,noteHTML:`<p>减少网络负载方法：对图像使用WebP而不是JPEG或PNG（图片要求不严格，可以压缩体积，使用tinypng.com，将JPEG图像的压缩级别设置为85</p>
`,filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:KC,meta:{clicks:2,slide:{raw:`---
clicks: 2
---

# Optimize CSS <Marker class="text-orange-400">技巧一</Marker>

\`\`\`ts
// Minify CSS Plugin
npm install --save-dev optimize-css-assets-webpack-plugin
\`\`\`

\`\`\`scss {all|6|all}
// 使用媒体查询优化 CSS 背景图像
body {
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat; background-size: cover;
  background-image: url(images/background-desktop.jpg); // 这一行可以使用 \`@media\` 来适配不同屏幕
}
// 手机
@media (max-width: 480px) {
  body { background-image: url(images/background-mobile.jpg); }
}
// 平板
@media (min-width: 481px) and (max-width: 1024px) {
  body { background-image: url(images/background-tablet.jpg); }
}
// PC
@media (min-width: 1025px) {
  body { background-image: url(images/background-desktop.jpg); }
}
\`\`\`

<arrow v-click="1" v-show="2" x1="400" y1="420" x2="230" y2="280" color="#564" width="3" arrowSize="1" />
`,title:'Optimize CSS <Marker class="text-orange-400">技巧一</Marker>',level:1,content:`# Optimize CSS <Marker class="text-orange-400">技巧一</Marker>

\`\`\`ts
// Minify CSS Plugin
npm install --save-dev optimize-css-assets-webpack-plugin
\`\`\`

\`\`\`scss {all|6|all}
// 使用媒体查询优化 CSS 背景图像
body {
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat; background-size: cover;
  background-image: url(images/background-desktop.jpg); // 这一行可以使用 \`@media\` 来适配不同屏幕
}
// 手机
@media (max-width: 480px) {
  body { background-image: url(images/background-mobile.jpg); }
}
// 平板
@media (min-width: 481px) and (max-width: 1024px) {
  body { background-image: url(images/background-tablet.jpg); }
}
// PC
@media (min-width: 1025px) {
  body { background-image: url(images/background-desktop.jpg); }
}
\`\`\`

<arrow v-click="1" v-show="2" x1="400" y1="420" x2="230" y2="280" color="#564" width="3" arrowSize="1" />`,frontmatter:{clicks:2},index:18,start:537,end:572,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:nx,meta:{slide:{raw:`
# Optimize CSS <Marker class="text-orange-400">技巧二</Marker>

\`\`\`html
<!-- 关键渲染路径：找出渲染首屏的最小 CSS 集合（Critical CSS），并把它们写到 <head> 部分，从而让浏览器接收到 HTML 文件后就尽快渲染出页面 -->
<head>
  <meta charset="UTF-8">
  <!-- 提取（Extract）关键CSS，内联 -->
  <style type="text/css">
    .accordion-btn {background-color: #ADD8E6;color: #444;cursor: pointer;padding: 18px;width: 100%;border: none;text-align: left;outline: none;font-size: 15px;transition: 0.4s;}.container {padding: 0 18px;display: none;background-color: white;overflow: hidden;}h1 {word-spacing: 5px;color: blue;font-weight: bold;text-align: center;}
  </style>

  <!-- 非关键CSS异步外链（增加 rel="preload" 属性预加载） -->
  <link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="styles.css"></noscript>
</head>
\`\`\`

<div class="mt-4"></div>

- **提取、压缩、内联首屏CSS**

\`\`\`ts
npm i -D critical // 自动检测，可配置，从html中提取critical css，并将critical-path内联到html中
npm i --save-dev html-critical-webpack-plugin  // webpack plugin
npm install criticalcss // 支持 \`cli\`，对 \`@font-face\` 支持更友好和精确
\`\`\`

- **站点或应用程序具有大量动态注入 DOM 的样式（内部使用puppeteer）**

\`\`\`ts
npm i -D penthouse // 关键路径css生成器，\`Angular Build Prod\` 选项默认是 \`extractCss\` 为 true (提取到独立的文件中，方便缓存)
\`\`\`

<style>
  strong {
    @apply text-green-500;
  }
</style>
`,title:'Optimize CSS <Marker class="text-orange-400">技巧二</Marker>',level:1,content:`# Optimize CSS <Marker class="text-orange-400">技巧二</Marker>

\`\`\`html
<!-- 关键渲染路径：找出渲染首屏的最小 CSS 集合（Critical CSS），并把它们写到 <head> 部分，从而让浏览器接收到 HTML 文件后就尽快渲染出页面 -->
<head>
  <meta charset="UTF-8">
  <!-- 提取（Extract）关键CSS，内联 -->
  <style type="text/css">
    .accordion-btn {background-color: #ADD8E6;color: #444;cursor: pointer;padding: 18px;width: 100%;border: none;text-align: left;outline: none;font-size: 15px;transition: 0.4s;}.container {padding: 0 18px;display: none;background-color: white;overflow: hidden;}h1 {word-spacing: 5px;color: blue;font-weight: bold;text-align: center;}
  </style>

  <!-- 非关键CSS异步外链（增加 rel="preload" 属性预加载） -->
  <link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="styles.css"></noscript>
</head>
\`\`\`

<div class="mt-4"></div>

- **提取、压缩、内联首屏CSS**

\`\`\`ts
npm i -D critical // 自动检测，可配置，从html中提取critical css，并将critical-path内联到html中
npm i --save-dev html-critical-webpack-plugin  // webpack plugin
npm install criticalcss // 支持 \`cli\`，对 \`@font-face\` 支持更友好和精确
\`\`\`

- **站点或应用程序具有大量动态注入 DOM 的样式（内部使用puppeteer）**

\`\`\`ts
npm i -D penthouse // 关键路径css生成器，\`Angular Build Prod\` 选项默认是 \`extractCss\` 为 true (提取到独立的文件中，方便缓存)
\`\`\`

<style>
  strong {
    @apply text-green-500;
  }
</style>`,frontmatter:{},index:19,start:573,end:613,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:fx,meta:{slide:{raw:`
# Optimize Images <Marker class="text-orange-400">技巧一</Marker>

- **图片压缩**

\`\`\`sh
// 使用Imagemin压缩图片，支持 \`cli\` 和 \`npm\`
$ imagemin images/* --out-dir=images // 要压缩 \`images/\` 目录中的图像并将它们保存到同一目录（覆盖原图）

$ npm i imagemin-webpack-plugin -D // webpack plugin
\`\`\`

<div class="mt-4"></div>

- **选择合适的图片格式**

 图片格式 | 透明度 | 动画 | 浏览器支持
 ---|---|---|---
 PNG  | Yes | No  | All
 JPEG | No  | No  | All
 WebP | Yes | Yes | 现代浏览器

<div class="mt-4"></div>

> WebP格式的图像比J PEG 和 PNG 图像小 25 ~ 35%，可以显著提升页面加载性能

<div class="mt-4"></div>

- **使用CDN加速资源**

<style>
  strong {
    @apply text-green-500;
  }
</style>

`,title:'Optimize Images <Marker class="text-orange-400">技巧一</Marker>',level:1,content:`# Optimize Images <Marker class="text-orange-400">技巧一</Marker>

- **图片压缩**

\`\`\`sh
// 使用Imagemin压缩图片，支持 \`cli\` 和 \`npm\`
$ imagemin images/* --out-dir=images // 要压缩 \`images/\` 目录中的图像并将它们保存到同一目录（覆盖原图）

$ npm i imagemin-webpack-plugin -D // webpack plugin
\`\`\`

<div class="mt-4"></div>

- **选择合适的图片格式**

 图片格式 | 透明度 | 动画 | 浏览器支持
 ---|---|---|---
 PNG  | Yes | No  | All
 JPEG | No  | No  | All
 WebP | Yes | Yes | 现代浏览器

<div class="mt-4"></div>

> WebP格式的图像比J PEG 和 PNG 图像小 25 ~ 35%，可以显著提升页面加载性能

<div class="mt-4"></div>

- **使用CDN加速资源**

<style>
  strong {
    @apply text-green-500;
  }
</style>`,frontmatter:{},index:20,start:614,end:651,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:bx,meta:{slide:{raw:`
# Optimize Images <Marker class="text-orange-400">技巧二</Marker>

- **用视频替换 GIF 动画以加快页面加载速度**

\`\`\`ts
// 使用 FFmpeg 将 GIF 转换为 MP4 视频
ffmpeg -i my-animation.gif -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p my-animation.mp4

// 使用 FFmpeg 将 GIF 转换为 WebM 视频
ffmpeg -i my-animation.gif -c vp9 -b:v 0 -crf 41 my-animation.webm

// GIF动画三大特征：1.自动播放  2. 连续循环 3. 静音
<video autoplay loop muted playsinline>
  <source src="my-animation.webm" type="video/webm">
  <source src="my-animation.mp4" type="video/mp4">
</video>
\`\`\`

<div class="mt-4"></div>

- **选择合适的图像尺寸**

\`\`\`ts
// 使用 ImageMagick 调整图像大小（具有创建、编辑、合成和转换功能，支持200+图像格式）
convert flower.jpg -resize 25% flower_small.jpg // 将图像大小调整为原始大小的 25%

# macOS/Linux
convert flower.jpg -resize 200x100 flower_small.jpg // 缩放图像以适应 “200px 宽 x 100px 高”
\`\`\`

<style>
  strong {
    @apply text-green-500;
  }
</style>
`,title:'Optimize Images <Marker class="text-orange-400">技巧二</Marker>',level:1,content:`# Optimize Images <Marker class="text-orange-400">技巧二</Marker>

- **用视频替换 GIF 动画以加快页面加载速度**

\`\`\`ts
// 使用 FFmpeg 将 GIF 转换为 MP4 视频
ffmpeg -i my-animation.gif -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p my-animation.mp4

// 使用 FFmpeg 将 GIF 转换为 WebM 视频
ffmpeg -i my-animation.gif -c vp9 -b:v 0 -crf 41 my-animation.webm

// GIF动画三大特征：1.自动播放  2. 连续循环 3. 静音
<video autoplay loop muted playsinline>
  <source src="my-animation.webm" type="video/webm">
  <source src="my-animation.mp4" type="video/mp4">
</video>
\`\`\`

<div class="mt-4"></div>

- **选择合适的图像尺寸**

\`\`\`ts
// 使用 ImageMagick 调整图像大小（具有创建、编辑、合成和转换功能，支持200+图像格式）
convert flower.jpg -resize 25% flower_small.jpg // 将图像大小调整为原始大小的 25%

# macOS/Linux
convert flower.jpg -resize 200x100 flower_small.jpg // 缩放图像以适应 “200px 宽 x 100px 高”
\`\`\`

<style>
  strong {
    @apply text-green-500;
  }
</style>`,frontmatter:{},index:21,start:652,end:689,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:Bx,meta:{layout:"center",slide:{raw:`---
layout: center
---

# 以上优化，没有听懂？还有没其他优化点？
`,title:"以上优化，没有听懂？还有没其他优化点？",level:1,content:"# 以上优化，没有听懂？还有没其他优化点？",frontmatter:{layout:"center"},index:22,start:689,end:695,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:Dx,meta:{layout:"center",class:"text-center",slide:{raw:`---
layout: center
class: text-center
---

# Optimize Largest Contentful Paint（LCP）

<Youtube id="AQqFZ5t8uNc?start=1073" :width="800" :height="450"/>
`,title:"Optimize Largest Contentful Paint（LCP）",level:1,content:`# Optimize Largest Contentful Paint（LCP）

<Youtube id="AQqFZ5t8uNc?start=1073" :width="800" :height="450"/>`,frontmatter:{layout:"center",class:"text-center"},index:23,start:695,end:704,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:Px,meta:{layout:"center",class:"text-center",slide:{raw:`---
layout: center
class: text-center
---

# FID (First Input Delay)

衡量页面交互性 **·** 首次输入延迟
`,title:"FID (First Input Delay)",level:1,content:`# FID (First Input Delay)

衡量页面交互性 **·** 首次输入延迟`,frontmatter:{layout:"center",class:"text-center"},index:24,start:704,end:713,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:Ix,meta:{slide:{raw:`
# FID (First Input Delay) <MarkerCore />

首次输入延迟。测量交互性能，为了提供较好用户体验，交互时间建议在100ms或以内

<div class="grid grid-cols-2 gap-x-4 pt-10">

- **定义**
  - \`从用户首次与页面进行交互（单击链接、按钮、输入框等）到浏览器实际上能够响应该交互之间的时间\`
- **为什么只考虑 first input ？**
  - \`第一次输入延迟是用户对网站形成的第一个印象，网站是否有质量且可靠（网站加载后以多快的速度对用户进行响应）；web中最大的交互问题第一次加载之后\`
- **什么样的指标才是好的？**
  - <img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/eXyvkqRHQZ5iG38Axh1Z.svg"/>

<div>

  - **哪些事件输入属于 first input ？**
    - \`只关注单次离散事件，如：clicks, taps, 和 key presses\`
    - \`不关注连续事件，如：scrolling 和 zooming\`

  - **RAIL性能模型**
    - <img filter="~ dark:invert" class="w-200" src="https://web-dev.imgix.net/image/admin/uc1IWVOW2wEhIY6z4KjJ.png">

</div>

</div>


<style>
  strong {
    @apply text-green-500
  }
</style>

<!-- 
对于网站应该如何解决较高的首次输入延迟（例如代码分割、减少JavaScript的预加载）的建议解决方案（TTI是指衡量这一块），不一定与在页面加载后解决输入延迟（FID是指衡量这一块）的解决方案相同。所以FID是在TTI的基础上更精确的细分。
 -->
`,title:"FID (First Input Delay) <MarkerCore />",level:1,content:`# FID (First Input Delay) <MarkerCore />

首次输入延迟。测量交互性能，为了提供较好用户体验，交互时间建议在100ms或以内

<div class="grid grid-cols-2 gap-x-4 pt-10">

- **定义**
  - \`从用户首次与页面进行交互（单击链接、按钮、输入框等）到浏览器实际上能够响应该交互之间的时间\`
- **为什么只考虑 first input ？**
  - \`第一次输入延迟是用户对网站形成的第一个印象，网站是否有质量且可靠（网站加载后以多快的速度对用户进行响应）；web中最大的交互问题第一次加载之后\`
- **什么样的指标才是好的？**
  - <img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/eXyvkqRHQZ5iG38Axh1Z.svg"/>

<div>

  - **哪些事件输入属于 first input ？**
    - \`只关注单次离散事件，如：clicks, taps, 和 key presses\`
    - \`不关注连续事件，如：scrolling 和 zooming\`

  - **RAIL性能模型**
    - <img filter="~ dark:invert" class="w-200" src="https://web-dev.imgix.net/image/admin/uc1IWVOW2wEhIY6z4KjJ.png">

</div>

</div>


<style>
  strong {
    @apply text-green-500
  }
</style>`,frontmatter:{},note:"对于网站应该如何解决较高的首次输入延迟（例如代码分割、减少JavaScript的预加载）的建议解决方案（TTI是指衡量这一块），不一定与在页面加载后解决输入延迟（FID是指衡量这一块）的解决方案相同。所以FID是在TTI的基础上更精确的细分。",index:25,start:714,end:752,noteHTML:`<p>对于网站应该如何解决较高的首次输入延迟（例如代码分割、减少JavaScript的预加载）的建议解决方案（TTI是指衡量这一块），不一定与在页面加载后解决输入延迟（FID是指衡量这一块）的解决方案相同。所以FID是在TTI的基础上更精确的细分。</p>
`,filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:Hx,meta:{slide:{raw:`
# RAIL性能模型

Web 应用程序生命周期的四个不同方面：响应、动画、空闲和加载

<div class="grid grid-cols-2 gap-x-4 pt-10">

- **RAIL 核心指标**
  - \`输入延迟时间（从点按到绘制）小于 100ms\`
  - \`每帧的工作（从JS到绘制）完成时间小于 16ms\`
  - \`主线程JS工作分成不大于 50ms 的块\`
  - \`页面可以在 1000ms 内就绪\`
- **60fps 与设备刷新率**
  - \`屏幕刷新率为 60 次/秒，动画要平滑则每帧需要和屏幕刷新率保持一致，也就是每帧预算 16.66ms，但实际上，浏览器有整理工作要做，因此所有工作需要在 10ms 内完成\`
  - \`像素管道JS/CSS > 样式 > 布局 > 绘制 > 合成\`

<div>

  - <img filter="~ dark:invert" src="https://web-dev.imgix.net/image/admin/I7HDZ9qGxe0jAzz6PxNq.png">

  <div class="mt-4"></div>

  - <img filter="~ dark:invert" src="/frame-full.jpeg">

  - \`Google RAIL性能模型的目标，就是使用户满意，而不是让页面能运行的很快\`

</div>

</div>


<style>
  strong {
    @apply text-green-500
  }
</style>
`,title:"RAIL性能模型",level:1,content:`# RAIL性能模型

Web 应用程序生命周期的四个不同方面：响应、动画、空闲和加载

<div class="grid grid-cols-2 gap-x-4 pt-10">

- **RAIL 核心指标**
  - \`输入延迟时间（从点按到绘制）小于 100ms\`
  - \`每帧的工作（从JS到绘制）完成时间小于 16ms\`
  - \`主线程JS工作分成不大于 50ms 的块\`
  - \`页面可以在 1000ms 内就绪\`
- **60fps 与设备刷新率**
  - \`屏幕刷新率为 60 次/秒，动画要平滑则每帧需要和屏幕刷新率保持一致，也就是每帧预算 16.66ms，但实际上，浏览器有整理工作要做，因此所有工作需要在 10ms 内完成\`
  - \`像素管道JS/CSS > 样式 > 布局 > 绘制 > 合成\`

<div>

  - <img filter="~ dark:invert" src="https://web-dev.imgix.net/image/admin/I7HDZ9qGxe0jAzz6PxNq.png">

  <div class="mt-4"></div>

  - <img filter="~ dark:invert" src="/frame-full.jpeg">

  - \`Google RAIL性能模型的目标，就是使用户满意，而不是让页面能运行的很快\`

</div>

</div>


<style>
  strong {
    @apply text-green-500
  }
</style>`,frontmatter:{},index:26,start:753,end:790,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:Jx,meta:{slide:{raw:`
# 用户体验就是生产力

感知的响应度可能看起来不如有效性重要，但实际上恰好相反

> 研究发现，一个交互系统的响应度，即能否跟上用户、及时告知当前状态，而不让他们无故等待，是决定用户满意度的最重要的因素。
> 事件发生需要时间，而我们感知物体与事件也需要时间。但是让用户花在网站上的大多数时间不是等待加载，而是在使用时等待响应。

<br>

<img filter="~ dark:invert" class="w-190" src="https://img.alicdn.com/tfs/TB1wi31eUT1gK0jSZFrXXcNCXXa-1730-706.png#alt=%E5%BB%B6%E8%BF%9F%E4%B8%8E%E7%94%A8%E6%88%B7%E5%8F%8D%E5%BA%94" />


<style>
  blockquote {
    @apply text-green-500;
  }
  img {
    clip-path: inset(5px 4px 5px 4px);
  }
  blockquote {
    @apply text-amber-500;
  }
</style>
`,title:"用户体验就是生产力",level:1,content:`# 用户体验就是生产力

感知的响应度可能看起来不如有效性重要，但实际上恰好相反

> 研究发现，一个交互系统的响应度，即能否跟上用户、及时告知当前状态，而不让他们无故等待，是决定用户满意度的最重要的因素。
> 事件发生需要时间，而我们感知物体与事件也需要时间。但是让用户花在网站上的大多数时间不是等待加载，而是在使用时等待响应。

<br>

<img filter="~ dark:invert" class="w-190" src="https://img.alicdn.com/tfs/TB1wi31eUT1gK0jSZFrXXcNCXXa-1730-706.png#alt=%E5%BB%B6%E8%BF%9F%E4%B8%8E%E7%94%A8%E6%88%B7%E5%8F%8D%E5%BA%94" />


<style>
  blockquote {
    @apply text-green-500;
  }
  img {
    clip-path: inset(5px 4px 5px 4px);
  }
  blockquote {
    @apply text-amber-500;
  }
</style>`,frontmatter:{},index:27,start:791,end:816,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:Qx,meta:{slide:{raw:`
# 列表滚动时“停顿感” <Marker class="text-fuchsia-400">Tips</Marker>

“滚动事件触发  -> 异步获取数据 -> 渲染”，页面响应用户操作，并渲染新内容可能需要花费大于 500ms 的时间

<div class="grid grid-cols-2 gap-x-4 pt-10">

- **预加载**
  - \`设置一定的阈值，在用户滚动到页面底部前获取数据，加载下一页的数据并渲染\`
  - \`弱网环境或用户快速滚动时，底部的loading依然会经常性的触发\`
  - \`网络状况等情况随时可能改变，导致边界难以确定，其次是必定会产生大量冗余的数据请求\`
- **无阻塞的滚动**
  - \`滚动时永远不打断用户操作，数据不足时根据滚动位置按需加载，先插入占位元素，等到数据获取时再渲染新的元素\`


<div>

  - <img filter="~ dark:invert" src="https://img.alicdn.com/tfs/TB1pSwZeFT7gK0jSZFpXXaTkpXa-1122-405.png#alt=%E4%BC%A0%E7%BB%9F%E7%9A%84%E6%97%A0%E5%B0%BD%E5%88%97%E8%A1%A8&width=800">

  <div class="mt-10"></div>

  - <img filter="~ dark:invert" src="https://img.alicdn.com/tfs/TB13JM4eQT2gK0jSZPcXXcKkpXa-1053-405.png#alt=%E6%97%A0%E9%98%BB%E5%A1%9E%E7%9A%84%E6%BB%9A%E5%8A%A8%E5%88%97%E8%A1%A8&width=800">

</div>

</div>


<style>
  strong {
    @apply text-green-500
  }
</style>

`,title:'列表滚动时“停顿感” <Marker class="text-fuchsia-400">Tips</Marker>',level:1,content:`# 列表滚动时“停顿感” <Marker class="text-fuchsia-400">Tips</Marker>

“滚动事件触发  -> 异步获取数据 -> 渲染”，页面响应用户操作，并渲染新内容可能需要花费大于 500ms 的时间

<div class="grid grid-cols-2 gap-x-4 pt-10">

- **预加载**
  - \`设置一定的阈值，在用户滚动到页面底部前获取数据，加载下一页的数据并渲染\`
  - \`弱网环境或用户快速滚动时，底部的loading依然会经常性的触发\`
  - \`网络状况等情况随时可能改变，导致边界难以确定，其次是必定会产生大量冗余的数据请求\`
- **无阻塞的滚动**
  - \`滚动时永远不打断用户操作，数据不足时根据滚动位置按需加载，先插入占位元素，等到数据获取时再渲染新的元素\`


<div>

  - <img filter="~ dark:invert" src="https://img.alicdn.com/tfs/TB1pSwZeFT7gK0jSZFpXXaTkpXa-1122-405.png#alt=%E4%BC%A0%E7%BB%9F%E7%9A%84%E6%97%A0%E5%B0%BD%E5%88%97%E8%A1%A8&width=800">

  <div class="mt-10"></div>

  - <img filter="~ dark:invert" src="https://img.alicdn.com/tfs/TB13JM4eQT2gK0jSZPcXXcKkpXa-1053-405.png#alt=%E6%97%A0%E9%98%BB%E5%A1%9E%E7%9A%84%E6%BB%9A%E5%8A%A8%E5%88%97%E8%A1%A8&width=800">

</div>

</div>


<style>
  strong {
    @apply text-green-500
  }
</style>`,frontmatter:{},index:28,start:817,end:852,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:s4,meta:{slide:{raw:`
# 思考几个问题 ？

<div class="grid grid-cols-2 gap-x-4">

- **如果用户从不与网站互动怎么办？**
  - \`首先并非所有用户每次访问站点时都会与网站互动\`
  - \`右图是用户刚好在主线程最繁忙的时刻进行交互，但是如果用户在主线程空闲的时候交互，那么浏览器可以立刻响应，所以FID的值需要重点查看它的分布情况\`

- **为什么FID只包含从用户输入到主线程开始相应的时间？而没有包含事件处理到浏览器绘制UI的时间？**

  > 尽管主线程处理和绘制的这段时间也很重要，但是如果FID把这段时间也包含进来，则有的开发者可能会使用一些异步API（例如：setTimeout、requestAnimationFrame）来把这个 task 拆分到下一帧，以较少FID的时间，这样不仅没有提高用户体验，反而使用户体验降低。

  > FID实际上测量的是输入事件被感知到到主线程空闲的这段时间

<div class="px-2 py-4">

  - **可以通过下图来更详细了解 FID 处于哪个位置**

    <img filter="~ dark:invert" src="https://web-dev.imgix.net/image/admin/krOoeuQ4TWCbt9t6v5Wf.svg"/>

  - **哪些HTML元素在交互响应之前等待主线程上正在执行的任务完成？**
    - \`输入框，例如<input>、<textarea>、<radio>、<checkbox>\`
    - \`下拉框，例如<select> 和 链接，例如<a>\`
  
</div>

</div>

<style>
  strong {
    @apply text-green-500
  }
  blockquote {
    @apply text-amber-500;
  }
</style>

<!-- 
对于网站应该如何解决较高的首次输入延迟（例如代码分割、减少JavaScript的预加载）的建议解决方案（TTI是指衡量这一块），不一定与在页面加载后解决输入延迟（FID是指衡量这一块）的解决方案相同。所以FID是在TTI的基础上更精确的细分。

即使没有输入事件被注册，FID也可以测量。因为用户的输入相应并不一定需要事件被执行，但一定需要主线程是空闲的。例如，下面这些HTML元素都需要在交互响应之前等待主线程上的正在执行的任务完成：1. 输入框，例如<input>、<textarea>、<radio>、<checkbox> 2. 下拉框，例如<select> 3. 链接，例如<a>
 -->
`,title:"思考几个问题 ？",level:1,content:`# 思考几个问题 ？

<div class="grid grid-cols-2 gap-x-4">

- **如果用户从不与网站互动怎么办？**
  - \`首先并非所有用户每次访问站点时都会与网站互动\`
  - \`右图是用户刚好在主线程最繁忙的时刻进行交互，但是如果用户在主线程空闲的时候交互，那么浏览器可以立刻响应，所以FID的值需要重点查看它的分布情况\`

- **为什么FID只包含从用户输入到主线程开始相应的时间？而没有包含事件处理到浏览器绘制UI的时间？**

  > 尽管主线程处理和绘制的这段时间也很重要，但是如果FID把这段时间也包含进来，则有的开发者可能会使用一些异步API（例如：setTimeout、requestAnimationFrame）来把这个 task 拆分到下一帧，以较少FID的时间，这样不仅没有提高用户体验，反而使用户体验降低。

  > FID实际上测量的是输入事件被感知到到主线程空闲的这段时间

<div class="px-2 py-4">

  - **可以通过下图来更详细了解 FID 处于哪个位置**

    <img filter="~ dark:invert" src="https://web-dev.imgix.net/image/admin/krOoeuQ4TWCbt9t6v5Wf.svg"/>

  - **哪些HTML元素在交互响应之前等待主线程上正在执行的任务完成？**
    - \`输入框，例如<input>、<textarea>、<radio>、<checkbox>\`
    - \`下拉框，例如<select> 和 链接，例如<a>\`
  
</div>

</div>

<style>
  strong {
    @apply text-green-500
  }
  blockquote {
    @apply text-amber-500;
  }
</style>`,frontmatter:{},note:`对于网站应该如何解决较高的首次输入延迟（例如代码分割、减少JavaScript的预加载）的建议解决方案（TTI是指衡量这一块），不一定与在页面加载后解决输入延迟（FID是指衡量这一块）的解决方案相同。所以FID是在TTI的基础上更精确的细分。

即使没有输入事件被注册，FID也可以测量。因为用户的输入相应并不一定需要事件被执行，但一定需要主线程是空闲的。例如，下面这些HTML元素都需要在交互响应之前等待主线程上的正在执行的任务完成：1. 输入框，例如<input>、<textarea>、<radio>、<checkbox> 2. 下拉框，例如<select> 3. 链接，例如<a>`,index:29,start:853,end:897,noteHTML:`<p>对于网站应该如何解决较高的首次输入延迟（例如代码分割、减少JavaScript的预加载）的建议解决方案（TTI是指衡量这一块），不一定与在页面加载后解决输入延迟（FID是指衡量这一块）的解决方案相同。所以FID是在TTI的基础上更精确的细分。</p>
<p>即使没有输入事件被注册，FID也可以测量。因为用户的输入相应并不一定需要事件被执行，但一定需要主线程是空闲的。例如，下面这些HTML元素都需要在交互响应之前等待主线程上的正在执行的任务完成：1. 输入框，例如<input>、<textarea>、<radio>、<checkbox> 2. 下拉框，例如<select> 3. 链接，例如<a></p>
`,filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:i4,meta:{slide:{raw:`
# 如何测量 FID ？

<div class="grid grid-cols-2 gap-x-4">

- **线上测量工具**
  - \`Chrome User Experience Report\`
  - \`PageSpeed Insights\`
  - \`Search Console (Core Web Vitals report)\`
  - \`web-vitals JavaScript library\`

- **web-vitals JavaScript library**

  \`\`\`js
  import { getFID } from 'web-vitals';

  // 一旦可用，立即测量并记录 FID
  getFID(console.log);
  \`\`\`

<div class="px-2 py-4">

  - **在 JavaScript 中测量 FID**

  \`\`\`js
  // 使用\`PerformanceObserver\`API 监听 \`first-input\`
  // 并将值打印到控制台，真实指标测量比这个复杂
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      const delay = entry.processingStart - entry.startTime;
      console.log('FID candidate:', delay, entry);
    }
  }).observe({type: 'first-input', buffered: true});
  \`\`\`

  - **浏览器中的 PerformanceObserver 结果**

  <img filter="~ :dark:invert" src="/console-fid.png">

</div>

</div>

<style>
  strong {
    @apply text-green-500
  }
  blockquote {
    @apply text-amber-500;
  }
</style>
`,title:"如何测量 FID ？",level:1,content:`# 如何测量 FID ？

<div class="grid grid-cols-2 gap-x-4">

- **线上测量工具**
  - \`Chrome User Experience Report\`
  - \`PageSpeed Insights\`
  - \`Search Console (Core Web Vitals report)\`
  - \`web-vitals JavaScript library\`

- **web-vitals JavaScript library**

  \`\`\`js
  import { getFID } from 'web-vitals';

  // 一旦可用，立即测量并记录 FID
  getFID(console.log);
  \`\`\`

<div class="px-2 py-4">

  - **在 JavaScript 中测量 FID**

  \`\`\`js
  // 使用\`PerformanceObserver\`API 监听 \`first-input\`
  // 并将值打印到控制台，真实指标测量比这个复杂
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      const delay = entry.processingStart - entry.startTime;
      console.log('FID candidate:', delay, entry);
    }
  }).observe({type: 'first-input', buffered: true});
  \`\`\`

  - **浏览器中的 PerformanceObserver 结果**

  <img filter="~ :dark:invert" src="/console-fid.png">

</div>

</div>

<style>
  strong {
    @apply text-green-500
  }
  blockquote {
    @apply text-amber-500;
  }
</style>`,frontmatter:{},index:30,start:898,end:950,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:d4,meta:{layout:"center",class:"text-center",slide:{raw:`---
layout: center
class: text-center
---

# Optimize FID（First Input Delay）
优化页面交互性
`,title:"Optimize FID（First Input Delay）",level:1,content:`# Optimize FID（First Input Delay）
优化页面交互性`,frontmatter:{layout:"center",class:"text-center"},index:31,start:950,end:958,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:v4,meta:{slide:{raw:`
# 如何优化 FID ? <Marker class="text-purple-400">思考</Marker>

<div class=""></div>

> FID可能被这四个因素影响

<div class="mt-4"></div>

- **减少第三方代码的影响**
- **减少 JavaScript 的执行时间**
- **最小化主线程工作**
- **减小请求数量和请求文件大小**

<style>
  strong {
    @apply text-green-500
  }
  blockquote {
    @apply text-amber-500;
  }
</style>
`,title:'如何优化 FID ? <Marker class="text-purple-400">思考</Marker>',level:1,content:`# 如何优化 FID ? <Marker class="text-purple-400">思考</Marker>

<div class=""></div>

> FID可能被这四个因素影响

<div class="mt-4"></div>

- **减少第三方代码的影响**
- **减少 JavaScript 的执行时间**
- **最小化主线程工作**
- **减小请求数量和请求文件大小**

<style>
  strong {
    @apply text-green-500
  }
  blockquote {
    @apply text-amber-500;
  }
</style>`,frontmatter:{},index:32,start:959,end:982,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:B4,meta:{slide:{raw:`
# 如何高效加载第三方脚本？ <Marker class="text-orange-400">技巧一</Marker>

第三方广告或小图标、错误日志收集、监控或者集成一些第三方SDK等等，这些需要添加第三方脚本到HTML

<div class="grid grid-cols-2 gap-x-4">

- **async 或 defer 属性加载脚本以避免阻塞 DOM 解析**
  > async：浏览器在继续解析 HTML 文档的同时异步下载脚本。当脚本完成下载时，在脚本执行时会阻止解析

  <br>

  > defer：浏览器在继续解析 HTML 文档的同时异步下载脚本。在解析完成之前，脚本不会运行

- **减少资源建立连接的时间**

  \`\`\`html
  <!-- DNS预解析 -->
  <link rel="dns-prefetch" href="http://example.com">
  <!-- 一个连接，一般需要经过DNS查找，TCP三次握手和TLS协商 -->
  <link rel="preconnect" href="https://cdn.example.com">
  \`\`\`

<div class="px-2 py-4">

- <img filter="~ :dark:invert" class="w-100" src="/async-defer.png">

- **延迟加载具有lazysizes的屏幕外图像**
  \`\`\`html
  <script src="lazysizes.min.js" async=""><\/script>
  <!-- 使用 Intersection Observer 进行高效的延迟加载 -->
  <script>
    new IntersectionObserver(callback, options)
  <\/script>
  \`\`\`

</div>

</div>

<style>
  strong {
    @apply text-green-500;
  }
  blockquote {
    @apply text-amber-500;
  }
</style>
`,title:'如何高效加载第三方脚本？ <Marker class="text-orange-400">技巧一</Marker>',level:1,content:`# 如何高效加载第三方脚本？ <Marker class="text-orange-400">技巧一</Marker>

第三方广告或小图标、错误日志收集、监控或者集成一些第三方SDK等等，这些需要添加第三方脚本到HTML

<div class="grid grid-cols-2 gap-x-4">

- **async 或 defer 属性加载脚本以避免阻塞 DOM 解析**
  > async：浏览器在继续解析 HTML 文档的同时异步下载脚本。当脚本完成下载时，在脚本执行时会阻止解析

  <br>

  > defer：浏览器在继续解析 HTML 文档的同时异步下载脚本。在解析完成之前，脚本不会运行

- **减少资源建立连接的时间**

  \`\`\`html
  <!-- DNS预解析 -->
  <link rel="dns-prefetch" href="http://example.com">
  <!-- 一个连接，一般需要经过DNS查找，TCP三次握手和TLS协商 -->
  <link rel="preconnect" href="https://cdn.example.com">
  \`\`\`

<div class="px-2 py-4">

- <img filter="~ :dark:invert" class="w-100" src="/async-defer.png">

- **延迟加载具有lazysizes的屏幕外图像**
  \`\`\`html
  <script src="lazysizes.min.js" async=""><\/script>
  <!-- 使用 Intersection Observer 进行高效的延迟加载 -->
  <script>
    new IntersectionObserver(callback, options)
  <\/script>
  \`\`\`

</div>

</div>

<style>
  strong {
    @apply text-green-500;
  }
  blockquote {
    @apply text-amber-500;
  }
</style>`,frontmatter:{},index:33,start:983,end:1032,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:k4,meta:{slide:{raw:`
# 最小化主线程（main-thread）工作 <Marker class="text-orange-400">技巧二</Marker>

浏览器是多进程的（主、渲染、插件、GPU），浏览器内核是多线程的，js引擎是单线程的

<div class="grid grid-cols-2 gap-x-4">

- **requestAnimationFrame去抖动**

  > requestAnimationFrame最大的优势是由系统来决定回调函数的执行时机，具有CPU节能和函数节流的优势

- **使用 Web Worker 在浏览器的主线程之外运行 JavaScript**

  \`\`\`js
  const worker = new Worker("./worker.js");
  // 通过 postMessage API 发送消息与 web worker 通信
  worker.postMessage([40, 2]);
  // 通过事件监听回调接受消息
  worker.addEventListener("message", event => {
    console.log(event.data);
  });
  \`\`\`

- **避免大型、复杂的布局和布局抖动**

<div class="px-2">

- **简化paint复杂性并减少paint面积**
  \`\`\`scss
  .moving-element {
    will-change: transform; // 创建新的渲染层
    transform: translateZ(0); // hack魔法，GPU加速
  }
  \`\`\`

- **代码拆分减少JavaScript负载，删除未使用的代码**

  \`\`\`js
  form.addEventListener("submit", e => {
    import('moduleA').then(module => module.default)
      .then(someFunction()).catch(handleError());
  });
  const someFunction = () => { ... }
  \`\`\`

- **减少样式计算的范围和复杂性，提取关键CSS**

</div>

</div>

<style>
  strong {
    @apply text-green-500;
  }
  blockquote {
    @apply text-amber-500;
  }
</style>

`,title:'最小化主线程（main-thread）工作 <Marker class="text-orange-400">技巧二</Marker>',level:1,content:`# 最小化主线程（main-thread）工作 <Marker class="text-orange-400">技巧二</Marker>

浏览器是多进程的（主、渲染、插件、GPU），浏览器内核是多线程的，js引擎是单线程的

<div class="grid grid-cols-2 gap-x-4">

- **requestAnimationFrame去抖动**

  > requestAnimationFrame最大的优势是由系统来决定回调函数的执行时机，具有CPU节能和函数节流的优势

- **使用 Web Worker 在浏览器的主线程之外运行 JavaScript**

  \`\`\`js
  const worker = new Worker("./worker.js");
  // 通过 postMessage API 发送消息与 web worker 通信
  worker.postMessage([40, 2]);
  // 通过事件监听回调接受消息
  worker.addEventListener("message", event => {
    console.log(event.data);
  });
  \`\`\`

- **避免大型、复杂的布局和布局抖动**

<div class="px-2">

- **简化paint复杂性并减少paint面积**
  \`\`\`scss
  .moving-element {
    will-change: transform; // 创建新的渲染层
    transform: translateZ(0); // hack魔法，GPU加速
  }
  \`\`\`

- **代码拆分减少JavaScript负载，删除未使用的代码**

  \`\`\`js
  form.addEventListener("submit", e => {
    import('moduleA').then(module => module.default)
      .then(someFunction()).catch(handleError());
  });
  const someFunction = () => { ... }
  \`\`\`

- **减少样式计算的范围和复杂性，提取关键CSS**

</div>

</div>

<style>
  strong {
    @apply text-green-500;
  }
  blockquote {
    @apply text-amber-500;
  }
</style>`,frontmatter:{},index:34,start:1033,end:1094,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:F4,meta:{layout:"center",slide:{raw:`---
layout: center
---

# 以上优化，没有听懂？还有没其他优化点？
`,title:"以上优化，没有听懂？还有没其他优化点？",level:1,content:"# 以上优化，没有听懂？还有没其他优化点？",frontmatter:{layout:"center"},index:35,start:1094,end:1100,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:O4,meta:{layout:"center",class:"text-center",slide:{raw:`---
layout: center
class: text-center
---

# Optimize First Input Delay（FID）

<Youtube id="AQqFZ5t8uNc?start=2040" :width="800" :height="450"/>
`,title:"Optimize First Input Delay（FID）",level:1,content:`# Optimize First Input Delay（FID）

<Youtube id="AQqFZ5t8uNc?start=2040" :width="800" :height="450"/>`,frontmatter:{layout:"center",class:"text-center"},index:36,start:1100,end:1109,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:M4,meta:{layout:"center",class:"text-center",slide:{raw:`---
layout: center
class: text-center
---

# CLS (Cumulative Layout Shift)

衡量视觉稳定性 **·** 累积布局偏移

`,title:"CLS (Cumulative Layout Shift)",level:1,content:`# CLS (Cumulative Layout Shift)

衡量视觉稳定性 **·** 累积布局偏移`,frontmatter:{layout:"center",class:"text-center"},index:37,start:1109,end:1119,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:H4,meta:{slide:{raw:`
# CLS (Cumulative Layout Shift) <MarkerCore />

累积布局偏移。测量视觉稳定性，为了提供较好用户体验，页面应该维持CLS在0.1或以内

<div class="grid grid-cols-[2fr,1fr] gap-x-4">

- **定义**
  - \`CLS是衡量页面整个生命周期内发生的每个意外布局偏移的最大布局偏移分数的度量\`
  > CLS指标的计算方式在 2021.04.13 之后有更新，并在 2021.06.01 起正式实施
  <br>
  > CLS 指标现在具有最大会话窗口，间隔为 1s，上限为 5s
- **布局偏移通常在什么时候发生？**
  - \`资源异步加载\`
  - \`DOM元素动态添加到已存在的页面元素上面\`
- **怎样才算好？**
  - <img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/9mWVASbWDLzdBUpVcjE1.svg"/>

<div>

  - **会话窗口（session window）**
    - <video filter="~ dark:invert" class="w-screenshot w-60" autoplay loop muted playsinline>
        <source src="https://storage.googleapis.com/web-dev-assets/better-layout-shift-metric/session-window.webm" type="video/webm">
        <source src="https://storage.googleapis.com/web-dev-assets/better-layout-shift-metric/session-window.mp4" type="video/mp4">
      </video>

  - **案例**
    - <img filter="~ dark:invert" class="w-60" src="/cls-case.png">

</div>

</div>


<style>
  strong {
    @apply text-green-500
  }
  blockquote {
    @apply text-amber-500;
  }
</style>

<!-- 
页面元素的测量在“会话窗口”中进行。会话窗口是用户通过滚动浏览网页来访问的网页的不同部分。每个会话窗口的总分称为累积布局偏移量，即总页面偏移量。新的算法对于长时间运行的页面和单页面应用程序更加公平
 -->
`,title:"CLS (Cumulative Layout Shift) <MarkerCore />",level:1,content:`# CLS (Cumulative Layout Shift) <MarkerCore />

累积布局偏移。测量视觉稳定性，为了提供较好用户体验，页面应该维持CLS在0.1或以内

<div class="grid grid-cols-[2fr,1fr] gap-x-4">

- **定义**
  - \`CLS是衡量页面整个生命周期内发生的每个意外布局偏移的最大布局偏移分数的度量\`
  > CLS指标的计算方式在 2021.04.13 之后有更新，并在 2021.06.01 起正式实施
  <br>
  > CLS 指标现在具有最大会话窗口，间隔为 1s，上限为 5s
- **布局偏移通常在什么时候发生？**
  - \`资源异步加载\`
  - \`DOM元素动态添加到已存在的页面元素上面\`
- **怎样才算好？**
  - <img src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/9mWVASbWDLzdBUpVcjE1.svg"/>

<div>

  - **会话窗口（session window）**
    - <video filter="~ dark:invert" class="w-screenshot w-60" autoplay loop muted playsinline>
        <source src="https://storage.googleapis.com/web-dev-assets/better-layout-shift-metric/session-window.webm" type="video/webm">
        <source src="https://storage.googleapis.com/web-dev-assets/better-layout-shift-metric/session-window.mp4" type="video/mp4">
      </video>

  - **案例**
    - <img filter="~ dark:invert" class="w-60" src="/cls-case.png">

</div>

</div>


<style>
  strong {
    @apply text-green-500
  }
  blockquote {
    @apply text-amber-500;
  }
</style>`,frontmatter:{},note:"页面元素的测量在“会话窗口”中进行。会话窗口是用户通过滚动浏览网页来访问的网页的不同部分。每个会话窗口的总分称为累积布局偏移量，即总页面偏移量。新的算法对于长时间运行的页面和单页面应用程序更加公平",index:38,start:1120,end:1167,noteHTML:`<p>页面元素的测量在“会话窗口”中进行。会话窗口是用户通过滚动浏览网页来访问的网页的不同部分。每个会话窗口的总分称为累积布局偏移量，即总页面偏移量。新的算法对于长时间运行的页面和单页面应用程序更加公平</p>
`,filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:U4,meta:{slide:{raw:`
# 如何计算CLS？ <Marker class="text-violet-500">案例一</Marker>

浏览器中两个渲染帧之间的视口大小和视口中不稳定元素的移动指标的乘积：影响分数 * 距离分数

<div class="grid grid-cols-[2fr,1fr] gap-x-4">

- **影响分数（impact fraction）**

  > 前一帧和当前帧的所有不稳定元素的可见区域的并集（部分）是当前帧的影响分数

  \`左边是当前帧的元素，下一帧中，元素下移了可视区域内 25% 的高度。虚线框为两桢中当前元素的并集，占适口的 75%，因此影响分数为 0.75\`

- **距离分数（distance fraction）**

  > 任何不稳定元素在框架中移动的最大距离除以视口的最大尺寸（宽或高，取较大的）

  \`右图最大的视口尺寸是高度，并且不稳定元素相对适口移动了 25% 的距离，所以距离分数为 0.25\`

- **CLS分数**

  \`最终CLS分数：0.75（影响） * 0.25（距离） = 0.1875\`

<div class="px-2 py-4">

- <img filter="~ dark:invert" class="w-60" src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BbpE9rFQbF8aU6iXN1U6.png">

  <div class="mt-4"></div>

- <img filter="~ dark:invert" class="w-60" src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ASnfpVs2n9winu6mmzdk.png">


</div>

</div>

<style>
  strong {
    @apply text-green-500;
  }
  blockquote {
    @apply text-amber-500;
  }
</style>

<!-- 
并不是所有的布局移动都是不好的，很多web网站都会改变元素的开始位置。只有当布局移动是非用户预期的，才是不好的
 -->
`,title:'如何计算CLS？ <Marker class="text-violet-500">案例一</Marker>',level:1,content:`# 如何计算CLS？ <Marker class="text-violet-500">案例一</Marker>

浏览器中两个渲染帧之间的视口大小和视口中不稳定元素的移动指标的乘积：影响分数 * 距离分数

<div class="grid grid-cols-[2fr,1fr] gap-x-4">

- **影响分数（impact fraction）**

  > 前一帧和当前帧的所有不稳定元素的可见区域的并集（部分）是当前帧的影响分数

  \`左边是当前帧的元素，下一帧中，元素下移了可视区域内 25% 的高度。虚线框为两桢中当前元素的并集，占适口的 75%，因此影响分数为 0.75\`

- **距离分数（distance fraction）**

  > 任何不稳定元素在框架中移动的最大距离除以视口的最大尺寸（宽或高，取较大的）

  \`右图最大的视口尺寸是高度，并且不稳定元素相对适口移动了 25% 的距离，所以距离分数为 0.25\`

- **CLS分数**

  \`最终CLS分数：0.75（影响） * 0.25（距离） = 0.1875\`

<div class="px-2 py-4">

- <img filter="~ dark:invert" class="w-60" src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/BbpE9rFQbF8aU6iXN1U6.png">

  <div class="mt-4"></div>

- <img filter="~ dark:invert" class="w-60" src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/ASnfpVs2n9winu6mmzdk.png">


</div>

</div>

<style>
  strong {
    @apply text-green-500;
  }
  blockquote {
    @apply text-amber-500;
  }
</style>`,frontmatter:{},note:"并不是所有的布局移动都是不好的，很多web网站都会改变元素的开始位置。只有当布局移动是非用户预期的，才是不好的",index:39,start:1168,end:1217,noteHTML:`<p>并不是所有的布局移动都是不好的，很多web网站都会改变元素的开始位置。只有当布局移动是非用户预期的，才是不好的</p>
`,filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:Y4,meta:{slide:{raw:`
# 如何计算CLS？ <Marker class="text-violet-500">案例二</Marker>

浏览器中两个渲染帧之间的视口大小和视口中不稳定元素的移动指标的乘积：影响分数 * 距离分数

<div class="grid grid-cols-[2fr,1fr] gap-x-4">

- **影响分数（impact fraction）**

  > 前一帧和当前帧的所有不稳定元素的可见区域的并集（部分）是当前帧的影响分数

  \`上半块起始位置不变为稳定，下半块位置发生变化（不可见区域并不会被考虑在内），前后位置取并集（前后一样），因此影响分数为 0.5\`

- **距离分数（distance fraction）**

  > 任何不稳定元素在框架中移动的最大距离除以视口的最大尺寸（宽高大为准）

  \`距离分数用箭头表示。虚线框已经向下移动了大约 14% 的视口，所以距离分数是 0.14\`

- **CLS分数**

  \`最终CLS分数：0.5（影响） * 0.14（距离） = 0.07\`

<div class="px-2">

- **向现有元素添加内容如何影响布局移位分数**

- <img filter="~ dark:invert" class="w-60" src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xhN81DazXCs8ZawoCj0T.png">

</div>

</div>

<style>
  strong {
    @apply text-green-500;
  }
  blockquote {
    @apply text-amber-500;
  }
</style>

`,title:'如何计算CLS？ <Marker class="text-violet-500">案例二</Marker>',level:1,content:`# 如何计算CLS？ <Marker class="text-violet-500">案例二</Marker>

浏览器中两个渲染帧之间的视口大小和视口中不稳定元素的移动指标的乘积：影响分数 * 距离分数

<div class="grid grid-cols-[2fr,1fr] gap-x-4">

- **影响分数（impact fraction）**

  > 前一帧和当前帧的所有不稳定元素的可见区域的并集（部分）是当前帧的影响分数

  \`上半块起始位置不变为稳定，下半块位置发生变化（不可见区域并不会被考虑在内），前后位置取并集（前后一样），因此影响分数为 0.5\`

- **距离分数（distance fraction）**

  > 任何不稳定元素在框架中移动的最大距离除以视口的最大尺寸（宽高大为准）

  \`距离分数用箭头表示。虚线框已经向下移动了大约 14% 的视口，所以距离分数是 0.14\`

- **CLS分数**

  \`最终CLS分数：0.5（影响） * 0.14（距离） = 0.07\`

<div class="px-2">

- **向现有元素添加内容如何影响布局移位分数**

- <img filter="~ dark:invert" class="w-60" src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/xhN81DazXCs8ZawoCj0T.png">

</div>

</div>

<style>
  strong {
    @apply text-green-500;
  }
  blockquote {
    @apply text-amber-500;
  }
</style>`,frontmatter:{},index:40,start:1218,end:1261,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:e9,meta:{slide:{raw:`
# 如何计算CLS？ <Marker class="text-violet-500">案例三</Marker>

浏览器中两个渲染帧之间的视口大小和视口中不稳定元素的移动指标的乘积：影响分数 * 距离分数

<div class="grid grid-cols-[2fr,1fr] gap-x-4">

- **影响分数（impact fraction）**

  > 前一帧和当前帧的所有不稳定元素的可见区域的并集（部分）是当前帧的影响分数

  \`旧item位置发生偏移，新item起始位置不变，前后位置取并集（虚线框部分大约占视口的 38%），因此影响分数为 0.38\`

- **距离分数（distance fraction）**

  > 任何不稳定元素在框架中移动的最大距离除以视口的最大尺寸（宽高大为准）

  \`箭头表示不稳定元素从起始位置移动的距离。Zebra元素移动最多，大约移动了视口高度的 30%，所以距离分数是 0.3\`

- **CLS分数**

  \`最终CLS分数：0.38（影响） * 0.3（距离） = 0.1172\`

<div class="px-2">

- **多个不稳定元素**

- <img filter="~ dark:invert" class="w-60" src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/FdCETo2dLwGmzw0V5lNT.png">

</div>

</div>

<style>
  strong {
    @apply text-green-500;
  }
  blockquote {
    @apply text-amber-500;
  }
</style>
`,title:'如何计算CLS？ <Marker class="text-violet-500">案例三</Marker>',level:1,content:`# 如何计算CLS？ <Marker class="text-violet-500">案例三</Marker>

浏览器中两个渲染帧之间的视口大小和视口中不稳定元素的移动指标的乘积：影响分数 * 距离分数

<div class="grid grid-cols-[2fr,1fr] gap-x-4">

- **影响分数（impact fraction）**

  > 前一帧和当前帧的所有不稳定元素的可见区域的并集（部分）是当前帧的影响分数

  \`旧item位置发生偏移，新item起始位置不变，前后位置取并集（虚线框部分大约占视口的 38%），因此影响分数为 0.38\`

- **距离分数（distance fraction）**

  > 任何不稳定元素在框架中移动的最大距离除以视口的最大尺寸（宽高大为准）

  \`箭头表示不稳定元素从起始位置移动的距离。Zebra元素移动最多，大约移动了视口高度的 30%，所以距离分数是 0.3\`

- **CLS分数**

  \`最终CLS分数：0.38（影响） * 0.3（距离） = 0.1172\`

<div class="px-2">

- **多个不稳定元素**

- <img filter="~ dark:invert" class="w-60" src="https://web-dev.imgix.net/image/tcFciHGuF3MxnTr1y5ue01OGLBn2/FdCETo2dLwGmzw0V5lNT.png">

</div>

</div>

<style>
  strong {
    @apply text-green-500;
  }
  blockquote {
    @apply text-amber-500;
  }
</style>`,frontmatter:{},index:41,start:1262,end:1304,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:o9,meta:{slide:{raw:`
# 如何测量 CLS ?

<div class="grid grid-cols-2 gap-x-4">

- **线上测量工具**
  - \`Chrome User Experience Report\`
  - \`PageSpeed Insights\`
  - \`Search Console (Core Web Vitals report)\`
  - \`web-vitals JavaScript library\`

- **web-vitals JavaScript library**

  \`\`\`js
  import { getCLS } from 'web-vitals';

  // 在所有需要报告的地方测量和记录 CLS
  getCLS(console.log);
  \`\`\`

<div class="px-2">

  - **实验室工具**
    - \`Chrome DevTools\`
    - \`Lighthouse\`
    - \`WebPageTest\`

  - **浏览器中的 PerformanceObserver 结果**

  <img filter="~ :dark:invert" src="/console-cls.png">

</div>

</div>

<style>
  strong {
    @apply text-green-500
  }
  blockquote {
    @apply text-amber-500;
  }
</style>

`,title:"如何测量 CLS ?",level:1,content:`# 如何测量 CLS ?

<div class="grid grid-cols-2 gap-x-4">

- **线上测量工具**
  - \`Chrome User Experience Report\`
  - \`PageSpeed Insights\`
  - \`Search Console (Core Web Vitals report)\`
  - \`web-vitals JavaScript library\`

- **web-vitals JavaScript library**

  \`\`\`js
  import { getCLS } from 'web-vitals';

  // 在所有需要报告的地方测量和记录 CLS
  getCLS(console.log);
  \`\`\`

<div class="px-2">

  - **实验室工具**
    - \`Chrome DevTools\`
    - \`Lighthouse\`
    - \`WebPageTest\`

  - **浏览器中的 PerformanceObserver 结果**

  <img filter="~ :dark:invert" src="/console-cls.png">

</div>

</div>

<style>
  strong {
    @apply text-green-500
  }
  blockquote {
    @apply text-amber-500;
  }
</style>`,frontmatter:{},index:42,start:1305,end:1350,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:c9,meta:{slide:{raw:`
# 在 JavaScript 中如何测量 CLS ?

\`\`\`js
let clsValue = 0,clsEntries = [], sessionValue = 0, sessionEntries = [];
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    // 只计算没有最近用户输入的布局变化
    if (!entry.hadRecentInput) {
      const firstSessionEntry = sessionEntries[0];
      const lastSessionEntry = sessionEntries[sessionEntries.length - 1];
      // 如果输入发生在上一次输入之后不到 1 秒，并且在会话中的第一个条目之后不到 5 秒（包括当前会话中的条目）；否则，开始一个新的会话。
      if (sessionValue && entry.startTime - lastSessionEntry.startTime < 1000 && entry.startTime - firstSessionEntry.startTime < 5000) {
        sessionValue += entry.value;  sessionEntries.push(entry);
      } else {
        sessionValue = entry.value;   sessionEntries = [entry];
      }
      // 如果当前会话值大于当前 CLS 值， 更新 CLS 和对其有贡献的 entries
      if (sessionValue > clsValue) {
        clsValue = sessionValue;      clsEntries = sessionEntries;
        // 将更新的值（及其entries）记录到控制台
        console.log('CLS:', clsValue, clsEntries)
      }
    }
  }
}).observe({type: 'layout-shift', buffered: true});
\`\`\`

`,title:"在 JavaScript 中如何测量 CLS ?",level:1,content:`# 在 JavaScript 中如何测量 CLS ?

\`\`\`js
let clsValue = 0,clsEntries = [], sessionValue = 0, sessionEntries = [];
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    // 只计算没有最近用户输入的布局变化
    if (!entry.hadRecentInput) {
      const firstSessionEntry = sessionEntries[0];
      const lastSessionEntry = sessionEntries[sessionEntries.length - 1];
      // 如果输入发生在上一次输入之后不到 1 秒，并且在会话中的第一个条目之后不到 5 秒（包括当前会话中的条目）；否则，开始一个新的会话。
      if (sessionValue && entry.startTime - lastSessionEntry.startTime < 1000 && entry.startTime - firstSessionEntry.startTime < 5000) {
        sessionValue += entry.value;  sessionEntries.push(entry);
      } else {
        sessionValue = entry.value;   sessionEntries = [entry];
      }
      // 如果当前会话值大于当前 CLS 值， 更新 CLS 和对其有贡献的 entries
      if (sessionValue > clsValue) {
        clsValue = sessionValue;      clsEntries = sessionEntries;
        // 将更新的值（及其entries）记录到控制台
        console.log('CLS:', clsValue, clsEntries)
      }
    }
  }
}).observe({type: 'layout-shift', buffered: true});
\`\`\``,frontmatter:{},index:43,start:1351,end:1380,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:f9,meta:{layout:"center",class:"text-center",slide:{raw:`---
layout: center
class: text-center
---

# Optimize CLS（Cumulative Layout Shift）
优化视觉稳定性

`,title:"Optimize CLS（Cumulative Layout Shift）",level:1,content:`# Optimize CLS（Cumulative Layout Shift）
优化视觉稳定性`,frontmatter:{layout:"center",class:"text-center"},index:44,start:1380,end:1389,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:B9,meta:{slide:{raw:`
# 如何优化 CLS ? <Marker class="text-purple-400">思考</Marker>

<div class=""></div>

> 我们可以根据这些原则来避免非预期布局移动

<div class="mt-4"></div>

- **图片或视频元素有应始终设置大小属性（或者设置宽高比例），或者给他们保留一个空间大小，设置width、height，或者使用unsized-media feature policy**
- **不要在一个已存在的元素上面插入内容（除了响应用户输入）**
- **使用 animation 或 transition 等过渡动画，而不是直接触发布局改变**

## 影响 CLS 的因素有哪些 ？

> 以下是一些常见的影响因素

<div class="mt-4"></div>

- **图像没有尺寸**
- **没有尺寸的广告、嵌入视图和 iframe**
- **动态注入的内容**
- **Web 字体导致 FOIT / FOUT**
- **在更新 DOM 之前等待网络响应的操作**

<style>
  strong {
    @apply text-green-500
  }
  blockquote {
    @apply text-amber-500;
  }
</style>

`,title:'如何优化 CLS ? <Marker class="text-purple-400">思考</Marker>',level:1,content:`# 如何优化 CLS ? <Marker class="text-purple-400">思考</Marker>

<div class=""></div>

> 我们可以根据这些原则来避免非预期布局移动

<div class="mt-4"></div>

- **图片或视频元素有应始终设置大小属性（或者设置宽高比例），或者给他们保留一个空间大小，设置width、height，或者使用unsized-media feature policy**
- **不要在一个已存在的元素上面插入内容（除了响应用户输入）**
- **使用 animation 或 transition 等过渡动画，而不是直接触发布局改变**

## 影响 CLS 的因素有哪些 ？

> 以下是一些常见的影响因素

<div class="mt-4"></div>

- **图像没有尺寸**
- **没有尺寸的广告、嵌入视图和 iframe**
- **动态注入的内容**
- **Web 字体导致 FOIT / FOUT**
- **在更新 DOM 之前等待网络响应的操作**

<style>
  strong {
    @apply text-green-500
  }
  blockquote {
    @apply text-amber-500;
  }
</style>`,frontmatter:{},index:45,start:1390,end:1425,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:k9,meta:{slide:{raw:`
# 不要使用无尺寸元素 <Marker class="text-rose-400">优化一</Marker>

<div class="grid grid-cols-2 gap-x-4">

- **图片 & 视频**
  > 图片和视频元素上始终需要包括 width 和 height 尺寸属性，现代浏览器会根据图像的 width 和 height 属性设置图像的默认长宽比，知道纵横（宽高）比后，浏览器就可以为元素计算和保留足够的空间

- **设置宽高比**

  \`\`\`scss
  // 平时
  img {
    height: auto;
    width: 100%;
  }
  // 现在
  img {
    aspect-ratio: attr(width) / attr(height);
  }
  \`\`\`

<div class="px-2">

  - **响应式**

  > srcset 属性定义允许浏览器选择的图像以及每个图像的大小

  <div class="mt-4"></div>
  
  \`\`\`html
  <img
    width="1000"
    height="1000"
    src="puppy-1000.jpg"
    srcset="puppy-1000.jpg 1000w, puppy-2000.jpg 2000w, puppy-3000.jpg 3000w"
    alt="Puppy with balloons"
  />
  \`\`\`

  - **注意**

    - \`永远不要在现有内容之上插入内容，除非是响应用户交互，这样可确保预期的布局变化\`
    - \`宁可转换动画，也不要转换触发布局变化的属性的动画\`

</div>

</div>

<style>
  strong {
    @apply text-green-500
  }
  blockquote {
    @apply text-amber-500;
  }
</style>

`,title:'不要使用无尺寸元素 <Marker class="text-rose-400">优化一</Marker>',level:1,content:`# 不要使用无尺寸元素 <Marker class="text-rose-400">优化一</Marker>

<div class="grid grid-cols-2 gap-x-4">

- **图片 & 视频**
  > 图片和视频元素上始终需要包括 width 和 height 尺寸属性，现代浏览器会根据图像的 width 和 height 属性设置图像的默认长宽比，知道纵横（宽高）比后，浏览器就可以为元素计算和保留足够的空间

- **设置宽高比**

  \`\`\`scss
  // 平时
  img {
    height: auto;
    width: 100%;
  }
  // 现在
  img {
    aspect-ratio: attr(width) / attr(height);
  }
  \`\`\`

<div class="px-2">

  - **响应式**

  > srcset 属性定义允许浏览器选择的图像以及每个图像的大小

  <div class="mt-4"></div>
  
  \`\`\`html
  <img
    width="1000"
    height="1000"
    src="puppy-1000.jpg"
    srcset="puppy-1000.jpg 1000w, puppy-2000.jpg 2000w, puppy-3000.jpg 3000w"
    alt="Puppy with balloons"
  />
  \`\`\`

  - **注意**

    - \`永远不要在现有内容之上插入内容，除非是响应用户交互，这样可确保预期的布局变化\`
    - \`宁可转换动画，也不要转换触发布局变化的属性的动画\`

</div>

</div>

<style>
  strong {
    @apply text-green-500
  }
  blockquote {
    @apply text-amber-500;
  }
</style>`,frontmatter:{},index:46,start:1426,end:1485,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:I9,meta:{slide:{raw:`
# 警惕字体变化 <Marker class="text-rose-400">优化二</Marker>

> 字体通常是大文件，需要一段时间才能加载，一些浏览器直到下载完字体后才呈现文本

<br>

> font-display: swap 告诉浏览器默认使用系统字体进行渲染，当自定义字体下载完成之后再进行替换

<br>

\`\`\`scss
@font-face {
  font-family: 'Pacifico';
  font-style: normal;
  font-weight: 400;
  src: local('Pacifico Regular'), local('Pacifico-Regular'), url(https://fonts.gstatic.com/xxx.woff2) format('woff2');
  font-display: swap;
}
\`\`\`

<br>

- **使用 \`<link rel="preload">\` 更早的加载字体文件**


<style>
  strong {
    @apply text-green-500
  }
  blockquote {
    @apply text-amber-500;
  }
</style>
`,title:'警惕字体变化 <Marker class="text-rose-400">优化二</Marker>',level:1,content:`# 警惕字体变化 <Marker class="text-rose-400">优化二</Marker>

> 字体通常是大文件，需要一段时间才能加载，一些浏览器直到下载完字体后才呈现文本

<br>

> font-display: swap 告诉浏览器默认使用系统字体进行渲染，当自定义字体下载完成之后再进行替换

<br>

\`\`\`scss
@font-face {
  font-family: 'Pacifico';
  font-style: normal;
  font-weight: 400;
  src: local('Pacifico Regular'), local('Pacifico-Regular'), url(https://fonts.gstatic.com/xxx.woff2) format('woff2');
  font-display: swap;
}
\`\`\`

<br>

- **使用 \`<link rel="preload">\` 更早的加载字体文件**


<style>
  strong {
    @apply text-green-500
  }
  blockquote {
    @apply text-amber-500;
  }
</style>`,frontmatter:{},index:47,start:1486,end:1521,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:R9,meta:{layout:"center",slide:{raw:`---
layout: center
---

# 以上优化，没有听懂？还有没其他优化点？
`,title:"以上优化，没有听懂？还有没其他优化点？",level:1,content:"# 以上优化，没有听懂？还有没其他优化点？",frontmatter:{layout:"center"},index:48,start:1521,end:1527,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:H9,meta:{layout:"center",class:"text-center",slide:{raw:`---
layout: center
class: text-center
---

# Optimize Cumulative Layout Shift（CLS）

<Youtube id="AQqFZ5t8uNc?start=85" :width="800" :height="450"/>
`,title:"Optimize Cumulative Layout Shift（CLS）",level:1,content:`# Optimize Cumulative Layout Shift（CLS）

<Youtube id="AQqFZ5t8uNc?start=85" :width="800" :height="450"/>`,frontmatter:{layout:"center",class:"text-center"},index:49,start:1527,end:1536,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:z9,meta:{name:"Web-Vitails",layout:"center",slide:{raw:`---
name: Web-Vitails
layout: center
---

<div class="grid grid-cols-[3fr,2fr] gap-4">
  <div class="text-center pb-4">
    <div class="my-auto">
      <img class="h-20 inline-block rounded-xl" src="https://lh3.googleusercontent.com/9K-n57PrCZrkKjvP1B68H8qnGTfU6Y_XQq71uTGqVDgkiHdxeYYgioFkNv8sERCh6V-03Su3-asYsopDUiLyFIIG=w128-h128-e365-rj-sc0x00ffffff">
      <p>Web-Vitals</p>
      <div class="opacity-50 mb-2 text-sm">
        Essential metrics for a healthy site
      </div>
    </div>
    <div class="text-center">
      <a class="!border-none" href="https://www.npmjs.com/package/web-vitals" target="__blank">
        <img class="h-4 inline mx-0.5" src="https://img.shields.io/npm/v/web-vitals?color=a1b858&label=" alt="NPM version">
      </a>
      <a class="!border-none" href="https://www.npmjs.com/package/web-vitals" target="__blank">
        <img class="h-4 inline mx-0.5" alt="NPM Downloads" src="https://img.shields.io/npm/dm/web-vitals?color=50a36f&label=">
      </a>
      <a class="!border-none" href="https://web.dev/vitals" target="__blank">
        <img class="h-4 inline mx-0.5" src="https://img.shields.io/static/v1?label=&message=docs%20%26%20demos&color=1e8a7a" alt="Docs & Demos">
      </a>
      <img class="h-4 inline mx-0.5" alt="Function Count" src="https://img.shields.io/badge/-~1k%20tiny-13708a">
      <br>
      <a class="!border-none" href="https://github.com/GoogleChrome/web-vitals" target="__blank">
        <img class="mt-2 h-4 inline mx-0.5" alt="GitHub stars" src="https://img.shields.io/github/stars/GoogleChrome/web-vitals?style=social">
      </a>
    </div>
  </div>
  <div class="border-l border-gray-400 border-opacity-25 !all:leading-12 !all:list-none my-auto">

  - 轻量 体积～1k
  - Tree-shakeable ESM
  - Supports any JavaScript project
  - CDN 兼容

  </div>
</div>

`,title:"Web-Vitails",level:1,content:`<div class="grid grid-cols-[3fr,2fr] gap-4">
  <div class="text-center pb-4">
    <div class="my-auto">
      <img class="h-20 inline-block rounded-xl" src="https://lh3.googleusercontent.com/9K-n57PrCZrkKjvP1B68H8qnGTfU6Y_XQq71uTGqVDgkiHdxeYYgioFkNv8sERCh6V-03Su3-asYsopDUiLyFIIG=w128-h128-e365-rj-sc0x00ffffff">
      <p>Web-Vitals</p>
      <div class="opacity-50 mb-2 text-sm">
        Essential metrics for a healthy site
      </div>
    </div>
    <div class="text-center">
      <a class="!border-none" href="https://www.npmjs.com/package/web-vitals" target="__blank">
        <img class="h-4 inline mx-0.5" src="https://img.shields.io/npm/v/web-vitals?color=a1b858&label=" alt="NPM version">
      </a>
      <a class="!border-none" href="https://www.npmjs.com/package/web-vitals" target="__blank">
        <img class="h-4 inline mx-0.5" alt="NPM Downloads" src="https://img.shields.io/npm/dm/web-vitals?color=50a36f&label=">
      </a>
      <a class="!border-none" href="https://web.dev/vitals" target="__blank">
        <img class="h-4 inline mx-0.5" src="https://img.shields.io/static/v1?label=&message=docs%20%26%20demos&color=1e8a7a" alt="Docs & Demos">
      </a>
      <img class="h-4 inline mx-0.5" alt="Function Count" src="https://img.shields.io/badge/-~1k%20tiny-13708a">
      <br>
      <a class="!border-none" href="https://github.com/GoogleChrome/web-vitals" target="__blank">
        <img class="mt-2 h-4 inline mx-0.5" alt="GitHub stars" src="https://img.shields.io/github/stars/GoogleChrome/web-vitals?style=social">
      </a>
    </div>
  </div>
  <div class="border-l border-gray-400 border-opacity-25 !all:leading-12 !all:list-none my-auto">

  - 轻量 体积～1k
  - Tree-shakeable ESM
  - Supports any JavaScript project
  - CDN 兼容

  </div>
</div>`,frontmatter:{name:"Web-Vitails",layout:"center"},index:50,start:1536,end:1578,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:Z9,meta:{slide:{raw:`
# 如何使用 Web-Vitals ？<Marker class="text-purple-400">Tips</Marker>

- **简单使用**

\`\`\`js
/**
 * 每个测量函数都接收一个 report 回调函数作为参数，回调函数将在测量完成后触发，另外，对于像 LCP 和 CLS 这样的指标是不断变化的，
 * 所以它们的回调函数可能会多次触发，如果你想获取在这期间获取每次变化的数值，你可以指定第二个参数 reportAllChanges，否则回调函
 * 数只有在最终测量完成后触发一次。
 */
import {getCLS, getFID, getLCP} from 'web-vitals';

getCLS(console.log, true);
getFID(console.log); // Does not take a \`reportAllChanges\` param.
getLCP(console.log, true);
\`\`\`

-- **发送指标至服务器**

\`\`\`js
// 变化的指标如果触发多次的话可能会多次发送到你的服务器，所以回调函数中提供了下面三个参数
import {getCLS, getFID, getLCP} from 'web-vitals';

getCLS(logDelta, true); getFID(logDelta); getLCP(logDelta, true);
  console.log(\`\${name} matching ID \${id} changed by \${delta}\`);
}
function logDelta({name, id, delta}) {
\`\`\`


<style>
  strong {
    @apply text-green-500
  }
  blockquote {
    @apply text-amber-500;
  }
</style>

<!-- 
name：指标名称
id：本地分析的id
delta：当前值和上次获取值的差值
 -->

`,title:'如何使用 Web-Vitals ？<Marker class="text-purple-400">Tips</Marker>',level:1,content:`# 如何使用 Web-Vitals ？<Marker class="text-purple-400">Tips</Marker>

- **简单使用**

\`\`\`js
/**
 * 每个测量函数都接收一个 report 回调函数作为参数，回调函数将在测量完成后触发，另外，对于像 LCP 和 CLS 这样的指标是不断变化的，
 * 所以它们的回调函数可能会多次触发，如果你想获取在这期间获取每次变化的数值，你可以指定第二个参数 reportAllChanges，否则回调函
 * 数只有在最终测量完成后触发一次。
 */
import {getCLS, getFID, getLCP} from 'web-vitals';

getCLS(console.log, true);
getFID(console.log); // Does not take a \`reportAllChanges\` param.
getLCP(console.log, true);
\`\`\`

-- **发送指标至服务器**

\`\`\`js
// 变化的指标如果触发多次的话可能会多次发送到你的服务器，所以回调函数中提供了下面三个参数
import {getCLS, getFID, getLCP} from 'web-vitals';

getCLS(logDelta, true); getFID(logDelta); getLCP(logDelta, true);
  console.log(\`\${name} matching ID \${id} changed by \${delta}\`);
}
function logDelta({name, id, delta}) {
\`\`\`


<style>
  strong {
    @apply text-green-500
  }
  blockquote {
    @apply text-amber-500;
  }
</style>`,frontmatter:{},note:`name：指标名称
id：本地分析的id
delta：当前值和上次获取值的差值`,index:51,start:1579,end:1626,noteHTML:`<p>name：指标名称
id：本地分析的id
delta：当前值和上次获取值的差值</p>
`,filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:n6,meta:{slide:{raw:`
# 使用 Chrome 插件 web-vitals-extension <Marker class="text-purple-400">Tips</Marker>


- **如何查看指标**
  - \`灰色：插件不支持或者被禁用\`
  - \`绿色：通过所有指标\`
  - \`红色：一个或多个指标不达标\`

<img class="w-100 mt-10" filter="~ :dark:invert" src="/extension.png">


<style>
  strong {
    @apply text-green-500
  }
  blockquote {
    @apply text-amber-500;
  }
</style>
`,title:'使用 Chrome 插件 web-vitals-extension <Marker class="text-purple-400">Tips</Marker>',level:1,content:`# 使用 Chrome 插件 web-vitals-extension <Marker class="text-purple-400">Tips</Marker>


- **如何查看指标**
  - \`灰色：插件不支持或者被禁用\`
  - \`绿色：通过所有指标\`
  - \`红色：一个或多个指标不达标\`

<img class="w-100 mt-10" filter="~ :dark:invert" src="/extension.png">


<style>
  strong {
    @apply text-green-500
  }
  blockquote {
    @apply text-amber-500;
  }
</style>`,frontmatter:{},index:52,start:1627,end:1648,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:r6,meta:{slide:{raw:`
# 工具及周边 <Marker class="text-purple-400">Tips</Marker>

<div class="grid grid-cols-2 gap-x-4">

- **Core Web Vitals**
  
  <img filter="~ :dark:invert" src="https://addyosmani.com/assets/images/core-web-vitals-addy.png">

<div class="px-2 py-4">

  - **Tools to measure Core Web Vitals**

  <img filter="~ :dark:invert" src="https://web-dev.imgix.net/image/admin/V00vjrHmwzljYo04f3d3.png">

</div>

</div>

<style>
  strong {
    @apply text-green-500
  }
  blockquote {
    @apply text-amber-500;
  }
</style>

`,title:'工具及周边 <Marker class="text-purple-400">Tips</Marker>',level:1,content:`# 工具及周边 <Marker class="text-purple-400">Tips</Marker>

<div class="grid grid-cols-2 gap-x-4">

- **Core Web Vitals**
  
  <img filter="~ :dark:invert" src="https://addyosmani.com/assets/images/core-web-vitals-addy.png">

<div class="px-2 py-4">

  - **Tools to measure Core Web Vitals**

  <img filter="~ :dark:invert" src="https://web-dev.imgix.net/image/admin/V00vjrHmwzljYo04f3d3.png">

</div>

</div>

<style>
  strong {
    @apply text-green-500
  }
  blockquote {
    @apply text-amber-500;
  }
</style>`,frontmatter:{},index:53,start:1649,end:1678,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:x6,meta:{slide:{raw:`
# PPT怎么制作的？
为开发者打造的演示文稿工具（目前处于Beta版本）

<div class="grid grid-cols-2 gap-x-4">

- **Slidev引荐**

  <Tweet id="1406831784701136902" scale="0.55" />

<div class="px-2 py-4">

  - **为什么选择 Slidev ？**
    - \`支持 Markdown 语法\`
    - \`可定制主题\`
    - \`对开发者友好，支持 Prism、Shiki 语法高亮\`
    - \`快速，内部基于 Vite、Vue 3 和 Windi CSS\`
    - \`互动性 & 直观表达，可以自由编写组件直接在 MarkDown 中使用\`
    - \`可移植性，可以直接导出图片 & PDF文件\`
    - \`可配置，支持 WebGL、网络请求、iframes和实时共享\`

  <div class="mt-4"></div>

  > PPT原稿：[GitHub Repo](https://github.com/lanxuexing/web-vitails)

</div>

</div>

<style>
  strong {
    @apply text-green-500
  }
  blockquote {
    @apply text-amber-500;
  }
</style>
`,title:"PPT怎么制作的？",level:1,content:`# PPT怎么制作的？
为开发者打造的演示文稿工具（目前处于Beta版本）

<div class="grid grid-cols-2 gap-x-4">

- **Slidev引荐**

  <Tweet id="1406831784701136902" scale="0.55" />

<div class="px-2 py-4">

  - **为什么选择 Slidev ？**
    - \`支持 Markdown 语法\`
    - \`可定制主题\`
    - \`对开发者友好，支持 Prism、Shiki 语法高亮\`
    - \`快速，内部基于 Vite、Vue 3 和 Windi CSS\`
    - \`互动性 & 直观表达，可以自由编写组件直接在 MarkDown 中使用\`
    - \`可移植性，可以直接导出图片 & PDF文件\`
    - \`可配置，支持 WebGL、网络请求、iframes和实时共享\`

  <div class="mt-4"></div>

  > PPT原稿：[GitHub Repo](https://github.com/lanxuexing/web-vitails)

</div>

</div>

<style>
  strong {
    @apply text-green-500
  }
  blockquote {
    @apply text-amber-500;
  }
</style>`,frontmatter:{},index:54,start:1679,end:1717,noteHTML:"",filepath:"/home/runner/work/web-vitails/web-vitails/slides.md",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",component:Ow,meta:{layout:"end"}}],Xe=E6,ul=[{name:"play",path:"/",component:s3,children:[...Xe]},{name:"print",path:"/print",component:Fw},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let t=function(n){if(!pl.remote||pl.remote===n.query.password)return!0;if(pl.remote&&n.query.password===void 0){const s=prompt("Enter password");if(pl.remote===s)return!0}return n.params.no?{path:`/${n.params.no}`}:{path:""}};ul.push({path:"/presenter/print",component:()=>Mn(()=>import("./PresenterPrint-b74aa6d7.js"),["assets/PresenterPrint-b74aa6d7.js","assets/NoteDisplay-9197d7fc.js"])}),ul.push({name:"notes",path:"/notes",component:()=>Mn(()=>import("./NotesView-2de32c03.js"),["assets/NotesView-2de32c03.js","assets/NoteDisplay-9197d7fc.js"]),beforeEnter:t}),ul.push({name:"presenter",path:"/presenter/:no",component:()=>Mn(()=>import("./Presenter-15849b16.js"),["assets/Presenter-15849b16.js","assets/NoteDisplay-9197d7fc.js","assets/DrawingControls-bd1a1615.js","assets/Presenter-bfcdcc16.css"]),beforeEnter:t}),ul.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const bt=O5({history:P_("/web-vitails/"),routes:ul});function k6(t,n,{mode:s="replace"}={}){return F({get(){const l=bt.currentRoute.value.query[t];return l==null?n??null:Array.isArray(l)?l.filter(Boolean):l},set(l){rt(()=>{bt[x(s)]({query:{...bt.currentRoute.value.query,[t]:l}})})}})}const dy=K(0);rt(()=>{bt.afterEach(async()=>{await rt(),dy.value+=1})});const fy=K(0),Rt=F(()=>bt.currentRoute.value),Hs=F(()=>Rt.value.query.print!==void 0),D6=F(()=>Rt.value.query.print==="clicks"),pn=F(()=>Rt.value.query.embedded!==void 0),vt=F(()=>Rt.value.path.startsWith("/presenter")),S6=F(()=>Rt.value.path.startsWith("/notes")),bl=F(()=>Hs.value&&!D6.value),Ra=F(()=>Rt.value.query.password),F6=F(()=>!vt.value&&(!$e.remote||Ra.value===$e.remote)),Kp=k6("clicks","0"),yy=F(()=>Xe.length-1),$6=F(()=>Rt.value.path),Ke=F(()=>parseInt($6.value.split(/\//g).slice(-1)[0])||1);F(()=>_r(Ke.value));const ft=F(()=>Xe.find(t=>t.path===`${Ke.value}`));F(()=>{var t,n,s;return(s=(n=(t=ft.value)==null?void 0:t.meta)==null?void 0:n.slide)==null?void 0:s.id});F(()=>{var t,n;return((n=(t=ft.value)==null?void 0:t.meta)==null?void 0:n.layout)||(Ke.value===1?"cover":"default")});const zr=F(()=>Xe.find(t=>t.path===`${Math.min(Xe.length,Ke.value+1)}`)),P6=F(()=>Xe.find(t=>t.path===`${Math.max(1,Ke.value-1)}`)),O6=F(()=>{var t,n;return dy.value,((n=(t=ft.value)==null?void 0:t.meta)==null?void 0:n.__clicksElements)||[]}),It=F({get(){if(bl.value)return 99999;let t=+(Kp.value||0);return isNaN(t)&&(t=0),t},set(t){Kp.value=t.toString()}}),Uo=F(()=>{var t,n;return+(((n=(t=ft.value)==null?void 0:t.meta)==null?void 0:n.clicks)??O6.value.length)}),T6=F(()=>Ke.value<Xe.length-1||It.value<Uo.value),L6=F(()=>Ke.value>1||It.value>0),I6=F(()=>Xe.filter(t=>{var n,s;return(s=(n=t.meta)==null?void 0:n.slide)==null?void 0:s.title}).reduce((t,n)=>(Vi(t,n),t),[])),M6=F(()=>Hi(I6.value,ft.value));F(()=>qi(M6.value));const N6=F(()=>q6(fy.value,ft.value,P6.value));ge(ft,(t,n)=>{fy.value=Number(t==null?void 0:t.path)-Number(n==null?void 0:n.path)});function Nn(){Uo.value<=It.value?Rl():It.value+=1}async function Rn(){It.value<=0?await jl():It.value-=1}function _r(t){return vt.value?`/presenter/${t}`:`/${t}`}function Rl(){const t=Math.min(Xe.length,Ke.value+1);return qs(t)}async function jl(t=!0){const n=Math.max(1,Ke.value-1);await qs(n),t&&Uo.value&&bt.replace({query:{...Rt.value.query,clicks:Uo.value}})}function qs(t,n){return bt.push({path:_r(t),query:{...Rt.value.query,clicks:n}})}function R6(t){const n=K(0),{direction:s,distanceX:l,distanceY:o}=J0(t,{onSwipeStart(r){r.pointerType==="touch"&&(Il.value||(n.value=Ca()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!n.value||Il.value)return;const a=Math.abs(l.value),i=Math.abs(o.value);a/window.innerWidth>.3||a>100?s.value===fn.LEFT?Nn():Rn():(i/window.innerHeight>.4||i>200)&&(s.value===fn.DOWN?jl():Rl())}})}async function ja(){const{saveAs:t}=await Mn(()=>import("./FileSaver.min-17c85779.js").then(n=>n.F),[]);t(Xd($e.download)?$e.download:$e.exportFilename?`${$e.exportFilename}.pdf`:"/web-vitails/slidev-exported.pdf",`${$e.title}.pdf`)}async function j6(t){var n,s;if(t==null){const l=(s=(n=ft.value)==null?void 0:n.meta)==null?void 0:s.slide;if(!(l!=null&&l.filepath))return!1;t=`${l.filepath}:${l.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(t)}`),!0}function Vi(t,n,s=1){var o,r,a,i,c;const l=(r=(o=n.meta)==null?void 0:o.slide)==null?void 0:r.level;l&&l>s&&t.length>0?Vi(t[t.length-1].children,n,s+1):t.push({children:[],level:s,path:n.path,hideInToc:Boolean((a=n.meta)==null?void 0:a.hideInToc),title:(c=(i=n.meta)==null?void 0:i.slide)==null?void 0:c.title})}function Hi(t,n,s=!1,l){return t.map(o=>{const r={...o,active:o.path===(n==null?void 0:n.path),hasActiveParent:s};return r.children.length>0&&(r.children=Hi(r.children,n,r.active||r.hasActiveParent,r)),l&&(r.active||r.activeParent)&&(l.activeParent=!0),r})}function qi(t,n=1){return t.filter(s=>!s.hideInToc).map(s=>({...s,children:qi(s.children,n+1)}))}const V6={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function H6(t,n=!1){if(!t||(typeof t=="string"&&(t={name:t}),!t.name))return;let s=t.name.includes("|")?t.name:V6[t.name]||t.name;if(s.includes("|")){const[l,o]=s.split("|").map(r=>r.trim());s=n?o:l}if(s)return{...t,name:s}}function q6(t,n,s){var o,r;let l=t>0?(o=s==null?void 0:s.meta)==null?void 0:o.transition:(r=n==null?void 0:n.meta)==null?void 0:r.transition;return l||(l=$e.transition),H6(l,t<0)}function W6(){const t=$e.titleTemplate.replace("%s",$e.title||"Slidev");Ci({title:t}),pv($e.htmlAttrs),xv(`${t} - shared`),Sv(`${t} - drawings`);const n=`${location.origin}_${_v()}`;function s(){S6.value||!vt.value&&!hv.includes(location.host.split(":")[0])||(vt.value?(el("page",+Ke.value),el("clicks",It.value)):(el("viewerPage",+Ke.value),el("viewerClicks",It.value)),el("lastUpdate",{id:n,type:vt.value?"presenter":"viewer",time:new Date().getTime()}))}bt.afterEach(s),ge(It,s),Ev(l=>{var r;bt.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((r=l.lastUpdate)==null?void 0:r.type)==="presenter"&&(+l.page!=+Ke.value||+It.value!=+l.clicks)&&bt.replace({path:_r(l.page),query:{...bt.currentRoute.value.query,clicks:l.clicks||0}})})}const z6=Pe({__name:"App",setup(t){return I(W),W6(),(n,s)=>{const l=Io("RouterView"),o=Io("StarportCarrier");return B(),X(Le,null,[R(l),R(o)],64)}}}),U6=U(z6,[["__file","/home/runner/work/web-vitails/web-vitails/node_modules/@slidev/client/App.vue"]]);function Ur(t){return t!==null&&typeof t=="object"}function Va(t,n,s=".",l){if(!Ur(n))return Va(t,{},s,l);const o=Object.assign({},n);for(const r in t){if(r==="__proto__"||r==="constructor")continue;const a=t[r];a!=null&&(l&&l(o,r,a,s)||(Array.isArray(a)&&Array.isArray(o[r])?o[r]=[...a,...o[r]]:Ur(a)&&Ur(o[r])?o[r]=Va(a,o[r],(s?`${s}.`:"")+r.toString(),l):o[r]=a))}return o}function G6(t){return(...n)=>n.reduce((s,l)=>Va(s,l,"",t),{})}const K6=G6(),hy=1/60*1e3,J6=typeof performance<"u"?()=>performance.now():()=>Date.now(),my=typeof window<"u"?t=>window.requestAnimationFrame(t):t=>setTimeout(()=>t(J6()),hy);function Y6(t){let n=[],s=[],l=0,o=!1,r=!1;const a=new WeakSet,i={schedule:(c,p=!1,u=!1)=>{const d=u&&o,y=d?n:s;return p&&a.add(c),y.indexOf(c)===-1&&(y.push(c),d&&o&&(l=n.length)),c},cancel:c=>{const p=s.indexOf(c);p!==-1&&s.splice(p,1),a.delete(c)},process:c=>{if(o){r=!0;return}if(o=!0,[n,s]=[s,n],s.length=0,l=n.length,l)for(let p=0;p<l;p++){const u=n[p];u(c),a.has(u)&&(i.schedule(u),t())}o=!1,r&&(r=!1,i.process(c))}};return i}const Z6=40;let Ha=!0,Vl=!1,qa=!1;const Ns={delta:0,timestamp:0},eo=["read","update","preRender","render","postRender"],br=eo.reduce((t,n)=>(t[n]=Y6(()=>Vl=!0),t),{}),Wa=eo.reduce((t,n)=>{const s=br[n];return t[n]=(l,o=!1,r=!1)=>(Vl||e2(),s.schedule(l,o,r)),t},{}),X6=eo.reduce((t,n)=>(t[n]=br[n].cancel,t),{});eo.reduce((t,n)=>(t[n]=()=>br[n].process(Ns),t),{});const Q6=t=>br[t].process(Ns),gy=t=>{Vl=!1,Ns.delta=Ha?hy:Math.max(Math.min(t-Ns.timestamp,Z6),1),Ns.timestamp=t,qa=!0,eo.forEach(Q6),qa=!1,Vl&&(Ha=!1,my(gy))},e2=()=>{Vl=!0,Ha=!0,qa||my(gy)},vy=()=>Ns;function _y(t,n){var s={};for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&n.indexOf(l)<0&&(s[l]=t[l]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(t);o<l.length;o++)n.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(t,l[o])&&(s[l[o]]=t[l[o]]);return s}var Wi=function(){},Hl=function(){};Wi=function(t,n){!t&&typeof console<"u"&&console.warn(n)},Hl=function(t,n){if(!t)throw new Error(n)};const za=(t,n,s)=>Math.min(Math.max(s,t),n),Gr=.001,t2=.01,Jp=10,n2=.05,s2=1;function l2({duration:t=800,bounce:n=.25,velocity:s=0,mass:l=1}){let o,r;Wi(t<=Jp*1e3,"Spring duration must be 10 seconds or less");let a=1-n;a=za(n2,s2,a),t=za(t2,Jp,t/1e3),a<1?(o=p=>{const u=p*a,d=u*t,y=u-s,m=Ua(p,a),h=Math.exp(-d);return Gr-y/m*h},r=p=>{const d=p*a*t,y=d*s+s,m=Math.pow(a,2)*Math.pow(p,2)*t,h=Math.exp(-d),v=Ua(Math.pow(p,2),a);return(-o(p)+Gr>0?-1:1)*((y-m)*h)/v}):(o=p=>{const u=Math.exp(-p*t),d=(p-s)*t+1;return-Gr+u*d},r=p=>{const u=Math.exp(-p*t),d=(s-p)*(t*t);return u*d});const i=5/t,c=r2(o,r,i);if(t=t*1e3,isNaN(c))return{stiffness:100,damping:10,duration:t};{const p=Math.pow(c,2)*l;return{stiffness:p,damping:a*2*Math.sqrt(l*p),duration:t}}}const o2=12;function r2(t,n,s){let l=s;for(let o=1;o<o2;o++)l=l-t(l)/n(l);return l}function Ua(t,n){return t*Math.sqrt(1-n*n)}const a2=["duration","bounce"],i2=["stiffness","damping","mass"];function Yp(t,n){return n.some(s=>t[s]!==void 0)}function c2(t){let n=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},t);if(!Yp(t,i2)&&Yp(t,a2)){const s=l2(t);n=Object.assign(Object.assign(Object.assign({},n),s),{velocity:0,mass:1}),n.isResolvedFromDuration=!0}return n}function zi(t){var{from:n=0,to:s=1,restSpeed:l=2,restDelta:o}=t,r=_y(t,["from","to","restSpeed","restDelta"]);const a={done:!1,value:n};let{stiffness:i,damping:c,mass:p,velocity:u,duration:d,isResolvedFromDuration:y}=c2(r),m=Zp,h=Zp;function v(){const _=u?-(u/1e3):0,C=s-n,A=c/(2*Math.sqrt(i*p)),w=Math.sqrt(i/p)/1e3;if(o===void 0&&(o=Math.min(Math.abs(s-n)/100,.4)),A<1){const E=Ua(w,A);m=$=>{const M=Math.exp(-A*w*$);return s-M*((_+A*w*C)/E*Math.sin(E*$)+C*Math.cos(E*$))},h=$=>{const M=Math.exp(-A*w*$);return A*w*M*(Math.sin(E*$)*(_+A*w*C)/E+C*Math.cos(E*$))-M*(Math.cos(E*$)*(_+A*w*C)-E*C*Math.sin(E*$))}}else if(A===1)m=E=>s-Math.exp(-w*E)*(C+(_+w*C)*E);else{const E=w*Math.sqrt(A*A-1);m=$=>{const M=Math.exp(-A*w*$),T=Math.min(E*$,300);return s-M*((_+A*w*C)*Math.sinh(T)+E*C*Math.cosh(T))/E}}}return v(),{next:_=>{const C=m(_);if(y)a.done=_>=d;else{const A=h(_)*1e3,w=Math.abs(A)<=l,E=Math.abs(s-C)<=o;a.done=w&&E}return a.value=a.done?s:C,a},flipTarget:()=>{u=-u,[n,s]=[s,n],v()}}}zi.needsInterpolation=(t,n)=>typeof t=="string"||typeof n=="string";const Zp=t=>0,by=(t,n,s)=>{const l=n-t;return l===0?1:(s-t)/l},Ui=(t,n,s)=>-s*t+s*n+t,Ay=(t,n)=>s=>Math.max(Math.min(s,n),t),Al=t=>t%1?Number(t.toFixed(5)):t,ql=/(-)?([\d]*\.?[\d])+/g,Ga=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,p2=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function to(t){return typeof t=="string"}const no={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},wl=Object.assign(Object.assign({},no),{transform:Ay(0,1)}),mo=Object.assign(Object.assign({},no),{default:1}),Gi=t=>({test:n=>to(n)&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),Yn=Gi("deg"),Bl=Gi("%"),me=Gi("px"),Xp=Object.assign(Object.assign({},Bl),{parse:t=>Bl.parse(t)/100,transform:t=>Bl.transform(t*100)}),Ki=(t,n)=>s=>Boolean(to(s)&&p2.test(s)&&s.startsWith(t)||n&&Object.prototype.hasOwnProperty.call(s,n)),wy=(t,n,s)=>l=>{if(!to(l))return l;const[o,r,a,i]=l.match(ql);return{[t]:parseFloat(o),[n]:parseFloat(r),[s]:parseFloat(a),alpha:i!==void 0?parseFloat(i):1}},rs={test:Ki("hsl","hue"),parse:wy("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:s,alpha:l=1})=>"hsla("+Math.round(t)+", "+Bl.transform(Al(n))+", "+Bl.transform(Al(s))+", "+Al(wl.transform(l))+")"},u2=Ay(0,255),Kr=Object.assign(Object.assign({},no),{transform:t=>Math.round(u2(t))}),Pn={test:Ki("rgb","red"),parse:wy("red","green","blue"),transform:({red:t,green:n,blue:s,alpha:l=1})=>"rgba("+Kr.transform(t)+", "+Kr.transform(n)+", "+Kr.transform(s)+", "+Al(wl.transform(l))+")"};function d2(t){let n="",s="",l="",o="";return t.length>5?(n=t.substr(1,2),s=t.substr(3,2),l=t.substr(5,2),o=t.substr(7,2)):(n=t.substr(1,1),s=t.substr(2,1),l=t.substr(3,1),o=t.substr(4,1),n+=n,s+=s,l+=l,o+=o),{red:parseInt(n,16),green:parseInt(s,16),blue:parseInt(l,16),alpha:o?parseInt(o,16)/255:1}}const Ka={test:Ki("#"),parse:d2,transform:Pn.transform},gt={test:t=>Pn.test(t)||Ka.test(t)||rs.test(t),parse:t=>Pn.test(t)?Pn.parse(t):rs.test(t)?rs.parse(t):Ka.parse(t),transform:t=>to(t)?t:t.hasOwnProperty("red")?Pn.transform(t):rs.transform(t)},By="${c}",Cy="${n}";function f2(t){var n,s,l,o;return isNaN(t)&&to(t)&&((s=(n=t.match(ql))===null||n===void 0?void 0:n.length)!==null&&s!==void 0?s:0)+((o=(l=t.match(Ga))===null||l===void 0?void 0:l.length)!==null&&o!==void 0?o:0)>0}function xy(t){typeof t=="number"&&(t=`${t}`);const n=[];let s=0;const l=t.match(Ga);l&&(s=l.length,t=t.replace(Ga,By),n.push(...l.map(gt.parse)));const o=t.match(ql);return o&&(t=t.replace(ql,Cy),n.push(...o.map(no.parse))),{values:n,numColors:s,tokenised:t}}function Ey(t){return xy(t).values}function ky(t){const{values:n,numColors:s,tokenised:l}=xy(t),o=n.length;return r=>{let a=l;for(let i=0;i<o;i++)a=a.replace(i<s?By:Cy,i<s?gt.transform(r[i]):Al(r[i]));return a}}const y2=t=>typeof t=="number"?0:t;function h2(t){const n=Ey(t);return ky(t)(n.map(y2))}const so={test:f2,parse:Ey,createTransformer:ky,getAnimatableNone:h2},m2=new Set(["brightness","contrast","saturate","opacity"]);function g2(t){let[n,s]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[l]=s.match(ql)||[];if(!l)return t;const o=s.replace(l,"");let r=m2.has(n)?1:0;return l!==s&&(r*=100),n+"("+r+o+")"}const v2=/([a-z-]*)\(.*?\)/g,Ja=Object.assign(Object.assign({},so),{getAnimatableNone:t=>{const n=t.match(v2);return n?n.map(g2).join(" "):t}});function Jr(t,n,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?t+(n-t)*6*s:s<1/2?n:s<2/3?t+(n-t)*(2/3-s)*6:t}function Qp({hue:t,saturation:n,lightness:s,alpha:l}){t/=360,n/=100,s/=100;let o=0,r=0,a=0;if(!n)o=r=a=s;else{const i=s<.5?s*(1+n):s+n-s*n,c=2*s-i;o=Jr(c,i,t+1/3),r=Jr(c,i,t),a=Jr(c,i,t-1/3)}return{red:Math.round(o*255),green:Math.round(r*255),blue:Math.round(a*255),alpha:l}}const _2=(t,n,s)=>{const l=t*t,o=n*n;return Math.sqrt(Math.max(0,s*(o-l)+l))},b2=[Ka,Pn,rs],eu=t=>b2.find(n=>n.test(t)),tu=t=>`'${t}' is not an animatable color. Use the equivalent color code instead.`,Dy=(t,n)=>{let s=eu(t),l=eu(n);Hl(!!s,tu(t)),Hl(!!l,tu(n));let o=s.parse(t),r=l.parse(n);s===rs&&(o=Qp(o),s=Pn),l===rs&&(r=Qp(r),l=Pn);const a=Object.assign({},o);return i=>{for(const c in a)c!=="alpha"&&(a[c]=_2(o[c],r[c],i));return a.alpha=Ui(o.alpha,r.alpha,i),s.transform(a)}},A2=t=>typeof t=="number",w2=(t,n)=>s=>n(t(s)),Sy=(...t)=>t.reduce(w2);function Fy(t,n){return A2(t)?s=>Ui(t,n,s):gt.test(t)?Dy(t,n):Py(t,n)}const $y=(t,n)=>{const s=[...t],l=s.length,o=t.map((r,a)=>Fy(r,n[a]));return r=>{for(let a=0;a<l;a++)s[a]=o[a](r);return s}},B2=(t,n)=>{const s=Object.assign(Object.assign({},t),n),l={};for(const o in s)t[o]!==void 0&&n[o]!==void 0&&(l[o]=Fy(t[o],n[o]));return o=>{for(const r in l)s[r]=l[r](o);return s}};function nu(t){const n=so.parse(t),s=n.length;let l=0,o=0,r=0;for(let a=0;a<s;a++)l||typeof n[a]=="number"?l++:n[a].hue!==void 0?r++:o++;return{parsed:n,numNumbers:l,numRGB:o,numHSL:r}}const Py=(t,n)=>{const s=so.createTransformer(n),l=nu(t),o=nu(n);return l.numHSL===o.numHSL&&l.numRGB===o.numRGB&&l.numNumbers>=o.numNumbers?Sy($y(l.parsed,o.parsed),s):(Wi(!0,`Complex values '${t}' and '${n}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),a=>`${a>0?n:t}`)},C2=(t,n)=>s=>Ui(t,n,s);function x2(t){if(typeof t=="number")return C2;if(typeof t=="string")return gt.test(t)?Dy:Py;if(Array.isArray(t))return $y;if(typeof t=="object")return B2}function E2(t,n,s){const l=[],o=s||x2(t[0]),r=t.length-1;for(let a=0;a<r;a++){let i=o(t[a],t[a+1]);if(n){const c=Array.isArray(n)?n[a]:n;i=Sy(c,i)}l.push(i)}return l}function k2([t,n],[s]){return l=>s(by(t,n,l))}function D2(t,n){const s=t.length,l=s-1;return o=>{let r=0,a=!1;if(o<=t[0]?a=!0:o>=t[l]&&(r=l-1,a=!0),!a){let c=1;for(;c<s&&!(t[c]>o||c===l);c++);r=c-1}const i=by(t[r],t[r+1],o);return n[r](i)}}function Oy(t,n,{clamp:s=!0,ease:l,mixer:o}={}){const r=t.length;Hl(r===n.length,"Both input and output ranges must be the same length"),Hl(!l||!Array.isArray(l)||l.length===r-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),t[0]>t[r-1]&&(t=[].concat(t),n=[].concat(n),t.reverse(),n.reverse());const a=E2(n,l,o),i=r===2?k2(t,a):D2(t,a);return s?c=>i(za(t[0],t[r-1],c)):i}const Ar=t=>n=>1-t(1-n),Ji=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,S2=t=>n=>Math.pow(n,t),Ty=t=>n=>n*n*((t+1)*n-t),F2=t=>{const n=Ty(t);return s=>(s*=2)<1?.5*n(s):.5*(2-Math.pow(2,-10*(s-1)))},Ly=1.525,$2=4/11,P2=8/11,O2=9/10,Iy=t=>t,Yi=S2(2),T2=Ar(Yi),My=Ji(Yi),Ny=t=>1-Math.sin(Math.acos(t)),Ry=Ar(Ny),L2=Ji(Ry),Zi=Ty(Ly),I2=Ar(Zi),M2=Ji(Zi),N2=F2(Ly),R2=4356/361,j2=35442/1805,V2=16061/1805,Go=t=>{if(t===1||t===0)return t;const n=t*t;return t<$2?7.5625*n:t<P2?9.075*n-9.9*t+3.4:t<O2?R2*n-j2*t+V2:10.8*t*t-20.52*t+10.72},H2=Ar(Go),q2=t=>t<.5?.5*(1-Go(1-t*2)):.5*Go(t*2-1)+.5;function W2(t,n){return t.map(()=>n||My).splice(0,t.length-1)}function z2(t){const n=t.length;return t.map((s,l)=>l!==0?l/(n-1):0)}function U2(t,n){return t.map(s=>s*n)}function Eo({from:t=0,to:n=1,ease:s,offset:l,duration:o=300}){const r={done:!1,value:t},a=Array.isArray(n)?n:[t,n],i=U2(l&&l.length===a.length?l:z2(a),o);function c(){return Oy(i,a,{ease:Array.isArray(s)?s:W2(a,s)})}let p=c();return{next:u=>(r.value=p(u),r.done=u>=o,r),flipTarget:()=>{a.reverse(),p=c()}}}function G2({velocity:t=0,from:n=0,power:s=.8,timeConstant:l=350,restDelta:o=.5,modifyTarget:r}){const a={done:!1,value:n};let i=s*t;const c=n+i,p=r===void 0?c:r(c);return p!==c&&(i=p-n),{next:u=>{const d=-i*Math.exp(-u/l);return a.done=!(d>o||d<-o),a.value=a.done?p:p+d,a},flipTarget:()=>{}}}const su={keyframes:Eo,spring:zi,decay:G2};function K2(t){if(Array.isArray(t.to))return Eo;if(su[t.type])return su[t.type];const n=new Set(Object.keys(t));return n.has("ease")||n.has("duration")&&!n.has("dampingRatio")?Eo:n.has("dampingRatio")||n.has("stiffness")||n.has("mass")||n.has("damping")||n.has("restSpeed")||n.has("restDelta")?zi:Eo}function jy(t,n,s=0){return t-n-s}function J2(t,n,s=0,l=!0){return l?jy(n+-t,n,s):n-(t-n)+s}function Y2(t,n,s,l){return l?t>=n+s:t<=-s}const Z2=t=>{const n=({delta:s})=>t(s);return{start:()=>Wa.update(n,!0),stop:()=>X6.update(n)}};function Vy(t){var n,s,{from:l,autoplay:o=!0,driver:r=Z2,elapsed:a=0,repeat:i=0,repeatType:c="loop",repeatDelay:p=0,onPlay:u,onStop:d,onComplete:y,onRepeat:m,onUpdate:h}=t,v=_y(t,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:_}=v,C,A=0,w=v.duration,E,$=!1,M=!0,T;const D=K2(v);!((s=(n=D).needsInterpolation)===null||s===void 0)&&s.call(n,l,_)&&(T=Oy([0,100],[l,_],{clamp:!1}),l=0,_=100);const H=D(Object.assign(Object.assign({},v),{from:l,to:_}));function te(){A++,c==="reverse"?(M=A%2===0,a=J2(a,w,p,M)):(a=jy(a,w,p),c==="mirror"&&H.flipTarget()),$=!1,m&&m()}function pe(){C.stop(),y&&y()}function Z(Te){if(M||(Te=-Te),a+=Te,!$){const Se=H.next(Math.max(0,a));E=Se.value,T&&(E=T(E)),$=M?Se.done:a<=0}h==null||h(E),$&&(A===0&&(w??(w=a)),A<i?Y2(a,w,p,M)&&te():pe())}function we(){u==null||u(),C=r(Z),C.start()}return o&&we(),{stop:()=>{d==null||d(),C.stop()}}}function Hy(t,n){return n?t*(1e3/n):0}function X2({from:t=0,velocity:n=0,min:s,max:l,power:o=.8,timeConstant:r=750,bounceStiffness:a=500,bounceDamping:i=10,restDelta:c=1,modifyTarget:p,driver:u,onUpdate:d,onComplete:y,onStop:m}){let h;function v(w){return s!==void 0&&w<s||l!==void 0&&w>l}function _(w){return s===void 0?l:l===void 0||Math.abs(s-w)<Math.abs(l-w)?s:l}function C(w){h==null||h.stop(),h=Vy(Object.assign(Object.assign({},w),{driver:u,onUpdate:E=>{var $;d==null||d(E),($=w.onUpdate)===null||$===void 0||$.call(w,E)},onComplete:y,onStop:m}))}function A(w){C(Object.assign({type:"spring",stiffness:a,damping:i,restDelta:c},w))}if(v(t))A({from:t,velocity:n,to:_(t)});else{let w=o*n+t;typeof p<"u"&&(w=p(w));const E=_(w),$=E===s?-1:1;let M,T;const D=H=>{M=T,T=H,n=Hy(H-M,vy().delta),($===1&&H>E||$===-1&&H<E)&&A({from:H,to:E,velocity:n})};C({type:"decay",from:t,velocity:n,timeConstant:r,power:o,restDelta:c,modifyTarget:p,onUpdate:v(w)?D:void 0})}return{stop:()=>h==null?void 0:h.stop()}}const qy=(t,n)=>1-3*n+3*t,Wy=(t,n)=>3*n-6*t,zy=t=>3*t,Ko=(t,n,s)=>((qy(n,s)*t+Wy(n,s))*t+zy(n))*t,Uy=(t,n,s)=>3*qy(n,s)*t*t+2*Wy(n,s)*t+zy(n),Q2=1e-7,eE=10;function tE(t,n,s,l,o){let r,a,i=0;do a=n+(s-n)/2,r=Ko(a,l,o)-t,r>0?s=a:n=a;while(Math.abs(r)>Q2&&++i<eE);return a}const nE=8,sE=.001;function lE(t,n,s,l){for(let o=0;o<nE;++o){const r=Uy(n,s,l);if(r===0)return n;const a=Ko(n,s,l)-t;n-=a/r}return n}const ko=11,go=1/(ko-1);function oE(t,n,s,l){if(t===n&&s===l)return Iy;const o=new Float32Array(ko);for(let a=0;a<ko;++a)o[a]=Ko(a*go,t,s);function r(a){let i=0,c=1;const p=ko-1;for(;c!==p&&o[c]<=a;++c)i+=go;--c;const u=(a-o[c])/(o[c+1]-o[c]),d=i+u*go,y=Uy(d,t,s);return y>=sE?lE(a,d,t,s):y===0?d:tE(a,i,i+go,t,s)}return a=>a===0||a===1?a:Ko(r(a),n,l)}const Yr={};class rE{constructor(){this.subscriptions=new Set}add(n){return this.subscriptions.add(n),()=>this.subscriptions.delete(n)}notify(n,s,l){if(this.subscriptions.size)for(const o of this.subscriptions)o(n,s,l)}clear(){this.subscriptions.clear()}}const lu=t=>!isNaN(parseFloat(t));class aE{constructor(n){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new rE,this.canTrackVelocity=!1,this.updateAndNotify=s=>{this.prev=this.current,this.current=s;const{delta:l,timestamp:o}=vy();this.lastUpdated!==o&&(this.timeDelta=l,this.lastUpdated=o),Wa.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Wa.postRender(this.velocityCheck),this.velocityCheck=({timestamp:s})=>{this.canTrackVelocity||(this.canTrackVelocity=lu(this.current)),s!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=n,this.canTrackVelocity=lu(this.current)}onChange(n){return this.updateSubscribers.add(n)}clearListeners(){this.updateSubscribers.clear()}set(n){this.updateAndNotify(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Hy(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(n){return this.stop(),new Promise(s=>{const{stop:l}=n(s);this.stopAnimation=l}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function iE(t){return new aE(t)}const{isArray:cE}=Array;function pE(){const t=K({}),n=l=>{const o=r=>{t.value[r]&&(t.value[r].stop(),t.value[r].destroy(),delete t.value[r])};l?cE(l)?l.forEach(o):o(l):Object.keys(t.value).forEach(o)},s=(l,o,r)=>{if(t.value[l])return t.value[l];const a=iE(o);return a.onChange(i=>r[l]=i),t.value[l]=a,a};return tf(n),{motionValues:t,get:s,stop:n}}const uE=t=>Array.isArray(t),Zn=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Zr=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),dE=t=>({type:"spring",stiffness:550,damping:t===0?100:30,restDelta:.01,restSpeed:10}),Xr=()=>({type:"keyframes",ease:"linear",duration:300}),fE=t=>({type:"keyframes",duration:800,values:t}),ou={default:dE,x:Zn,y:Zn,z:Zn,rotate:Zn,rotateX:Zn,rotateY:Zn,rotateZ:Zn,scaleX:Zr,scaleY:Zr,scale:Zr,backgroundColor:Xr,color:Xr,opacity:Xr},Gy=(t,n)=>{let s;return uE(n)?s=fE:s=ou[t]||ou.default,{to:n,...s(n)}},ru={...no,transform:Math.round},Ky={color:gt,backgroundColor:gt,outlineColor:gt,fill:gt,stroke:gt,borderColor:gt,borderTopColor:gt,borderRightColor:gt,borderBottomColor:gt,borderLeftColor:gt,borderWidth:me,borderTopWidth:me,borderRightWidth:me,borderBottomWidth:me,borderLeftWidth:me,borderRadius:me,radius:me,borderTopLeftRadius:me,borderTopRightRadius:me,borderBottomRightRadius:me,borderBottomLeftRadius:me,width:me,maxWidth:me,height:me,maxHeight:me,size:me,top:me,right:me,bottom:me,left:me,padding:me,paddingTop:me,paddingRight:me,paddingBottom:me,paddingLeft:me,margin:me,marginTop:me,marginRight:me,marginBottom:me,marginLeft:me,rotate:Yn,rotateX:Yn,rotateY:Yn,rotateZ:Yn,scale:mo,scaleX:mo,scaleY:mo,scaleZ:mo,skew:Yn,skewX:Yn,skewY:Yn,distance:me,translateX:me,translateY:me,translateZ:me,x:me,y:me,z:me,perspective:me,transformPerspective:me,opacity:wl,originX:Xp,originY:Xp,originZ:me,zIndex:ru,filter:Ja,WebkitFilter:Ja,fillOpacity:wl,strokeOpacity:wl,numOctaves:ru},Xi=t=>Ky[t],Jy=(t,n)=>n&&typeof t=="number"&&n.transform?n.transform(t):t;function yE(t,n){let s=Xi(t);return s!==Ja&&(s=so),s.getAnimatableNone?s.getAnimatableNone(n):void 0}const hE={linear:Iy,easeIn:Yi,easeInOut:My,easeOut:T2,circIn:Ny,circInOut:L2,circOut:Ry,backIn:Zi,backInOut:M2,backOut:I2,anticipate:N2,bounceIn:H2,bounceInOut:q2,bounceOut:Go},au=t=>{if(Array.isArray(t)){const[n,s,l,o]=t;return oE(n,s,l,o)}else if(typeof t=="string")return hE[t];return t},mE=t=>Array.isArray(t)&&typeof t[0]!="number",iu=(t,n)=>t==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&so.test(n)&&!n.startsWith("url("));function gE(t){return Array.isArray(t.to)&&t.to[0]===null&&(t.to=[...t.to],t.to[0]=t.from),t}function vE({ease:t,times:n,delay:s,...l}){const o={...l};return n&&(o.offset=n),t&&(o.ease=mE(t)?t.map(au):au(t)),s&&(o.elapsed=-s),o}function _E(t,n,s){return Array.isArray(n.to)&&(t.duration||(t.duration=800)),gE(n),bE(t)||(t={...t,...Gy(s,n.to)}),{...n,...vE(t)}}function bE({delay:t,repeat:n,repeatType:s,repeatDelay:l,from:o,...r}){return!!Object.keys(r).length}function AE(t,n){return t[n]||t.default||t}function wE(t,n,s,l,o){const r=AE(l,t);let a=r.from===null||r.from===void 0?n.get():r.from;const i=iu(t,s);a==="none"&&i&&typeof s=="string"&&(a=yE(t,s));const c=iu(t,a);function p(d){const y={from:a,to:s,velocity:l.velocity?l.velocity:n.getVelocity(),onUpdate:m=>n.set(m)};return r.type==="inertia"||r.type==="decay"?X2({...y,...r}):Vy({..._E(r,y,t),onUpdate:m=>{y.onUpdate(m),r.onUpdate&&r.onUpdate(m)},onComplete:()=>{l.onComplete&&l.onComplete(),o&&o(),d&&d()}})}function u(d){return n.set(s),l.onComplete&&l.onComplete(),o&&o(),d&&d(),{stop:()=>{}}}return!c||!i||r.type===!1?u:p}function BE(){const{motionValues:t,stop:n,get:s}=pE();return{motionValues:t,stop:n,push:(o,r,a,i={},c)=>{const p=a[o],u=s(o,p,a);if(i&&i.immediate){u.set(r);return}const d=wE(o,u,r,i,c);u.start(d)}}}function CE(t,n={},{motionValues:s,push:l,stop:o}=BE()){const r=x(n),a=K(!1);ge(s,d=>{a.value=Object.values(d).filter(y=>y.isAnimating()).length>0},{immediate:!0,deep:!0});const i=d=>{if(!r||!r[d])throw new Error(`The variant ${d} does not exist.`);return r[d]},c=d=>(typeof d=="string"&&(d=i(d)),Promise.all(Object.entries(d).map(([y,m])=>{if(y!=="transition")return new Promise(h=>l(y,m,t,d.transition||Gy(y,d[y]),h))}).filter(Boolean)));return{isAnimating:a,apply:c,set:d=>{const y=Ba(d)?d:i(d);Object.entries(y).forEach(([m,h])=>{m!=="transition"&&l(m,h,t,{immediate:!0})})},leave:async d=>{let y;if(r&&(r.leave&&(y=r.leave),!r.leave&&r.initial&&(y=r.initial)),!y){d();return}await c(y),d()},stop:o}}const Qi=typeof window<"u",xE=()=>Qi&&window.onpointerdown===null,EE=()=>Qi&&window.ontouchstart===null,kE=()=>Qi&&window.onmousedown===null;function DE({target:t,state:n,variants:s,apply:l}){const o=x(s),r=K(!1),a=K(!1),i=K(!1),c=F(()=>{let u=[];return o&&(o.hovered&&(u=[...u,...Object.keys(o.hovered)]),o.tapped&&(u=[...u,...Object.keys(o.tapped)]),o.focused&&(u=[...u,...Object.keys(o.focused)])),u}),p=F(()=>{const u={};Object.assign(u,n.value),r.value&&o.hovered&&Object.assign(u,o.hovered),a.value&&o.tapped&&Object.assign(u,o.tapped),i.value&&o.focused&&Object.assign(u,o.focused);for(const d in u)c.value.includes(d)||delete u[d];return u});o.hovered&&(ve(t,"mouseenter",()=>r.value=!0),ve(t,"mouseleave",()=>{r.value=!1,a.value=!1}),ve(t,"mouseout",()=>{r.value=!1,a.value=!1})),o.tapped&&(kE()&&(ve(t,"mousedown",()=>a.value=!0),ve(t,"mouseup",()=>a.value=!1)),xE()&&(ve(t,"pointerdown",()=>a.value=!0),ve(t,"pointerup",()=>a.value=!1)),EE()&&(ve(t,"touchstart",()=>a.value=!0),ve(t,"touchend",()=>a.value=!1))),o.focused&&(ve(t,"focus",()=>i.value=!0),ve(t,"blur",()=>i.value=!1)),ge(p,l)}function SE({set:t,target:n,apply:s,variants:l,variant:o}){const r=x(l);ge(()=>n,()=>{r&&(r.initial&&t("initial"),r.enter&&(o.value="enter"))},{immediate:!0,flush:"pre"})}function FE({state:t,apply:n}){ge(t,s=>{s&&n(s)},{immediate:!0})}function $E({target:t,variants:n,variant:s}){const l=x(n);l&&(l.visible||l.visibleOnce)&&U0(t,([{isIntersecting:o}])=>{l.visible?o?s.value="visible":s.value="initial":l.visibleOnce&&(o&&s.value!=="visibleOnce"?s.value="visibleOnce":s.value||(s.value="initial"))})}function PE(t,n={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){n.lifeCycleHooks&&SE(t),n.syncVariants&&FE(t),n.visibilityHooks&&$E(t),n.eventListeners&&DE(t)}function Yy(t={}){const n=We({...t}),s=K({});return ge(n,()=>{const l={};for(const[o,r]of Object.entries(n)){const a=Xi(o),i=Jy(r,a);l[o]=i}s.value=l},{immediate:!0,deep:!0}),{state:n,style:s}}function ec(t,n){ge(()=>St(t),s=>{s&&n(s)},{immediate:!0})}const OE={x:"translateX",y:"translateY",z:"translateZ"};function Zy(t={},n=!0){const s=We({...t}),l=K("");return ge(s,o=>{let r="",a=!1;if(n&&(o.x||o.y||o.z)){const i=[o.x||0,o.y||0,o.z||0].map(me.transform).join(",");r+=`translate3d(${i}) `,a=!0}for(const[i,c]of Object.entries(o)){if(n&&(i==="x"||i==="y"||i==="z"))continue;const p=Xi(i),u=Jy(c,p);r+=`${OE[i]||i}(${u}) `}n&&!a&&(r+="translateZ(0px) "),l.value=r.trim()},{immediate:!0,deep:!0}),{state:s,transform:l}}const TE=["","X","Y","Z"],LE=["perspective","translate","scale","rotate","skew"],Xy=["transformPerspective","x","y","z"];LE.forEach(t=>{TE.forEach(n=>{const s=t+n;Xy.push(s)})});const IE=new Set(Xy);function tc(t){return IE.has(t)}const ME=new Set(["originX","originY","originZ"]);function Qy(t){return ME.has(t)}function NE(t){const n={},s={};return Object.entries(t).forEach(([l,o])=>{tc(l)||Qy(l)?n[l]=o:s[l]=o}),{transform:n,style:s}}function eh(t){const{transform:n,style:s}=NE(t),{transform:l}=Zy(n),{style:o}=Yy(s);return l.value&&(o.value.transform=l.value),o.value}function RE(t,n){let s,l;const{state:o,style:r}=Yy();return ec(t,a=>{l=a;for(const i of Object.keys(Ky))a.style[i]===null||a.style[i]===""||tc(i)||Qy(i)||(o[i]=a.style[i]);s&&Object.entries(s).forEach(([i,c])=>a.style[i]=c),n&&n(o)}),ge(r,a=>{if(!l){s=a;return}for(const i in a)l.style[i]=a[i]},{immediate:!0}),{style:o}}function jE(t){const n=t.trim().split(/\) |\)/);if(n.length===1)return{};const s=l=>l.endsWith("px")||l.endsWith("deg")?parseFloat(l):isNaN(Number(l))?Number(l):l;return n.reduce((l,o)=>{if(!o)return l;const[r,a]=o.split("("),c=a.split(",").map(u=>s(u.endsWith(")")?u.replace(")",""):u.trim())),p=c.length===1?c[0]:c;return{...l,[r]:p}},{})}function VE(t,n){Object.entries(jE(n)).forEach(([s,l])=>{const o=["x","y","z"];if(s==="translate3d"){if(l===0){o.forEach(r=>t[r]=0);return}l.forEach((r,a)=>t[o[a]]=r);return}if(l=parseFloat(l),s==="translateX"){t.x=l;return}if(s==="translateY"){t.y=l;return}if(s==="translateZ"){t.z=l;return}t[s]=l})}function HE(t,n){let s,l;const{state:o,transform:r}=Zy();return ec(t,a=>{l=a,a.style.transform&&VE(o,a.style.transform),s&&(a.style.transform=s),n&&n(o)}),ge(r,a=>{if(!l){s=a;return}l.style.transform=a},{immediate:!0}),{transform:o}}function qE(t,n){const s=We({}),l=a=>Object.entries(a).forEach(([i,c])=>s[i]=c),{style:o}=RE(t,l),{transform:r}=HE(t,l);return ge(s,a=>{Object.entries(a).forEach(([i,c])=>{const p=tc(i)?r:o;p[i]&&p[i]===c||(p[i]=c)})},{immediate:!0,deep:!0}),ec(t,()=>n&&l(n)),{motionProperties:s,style:o,transform:r}}function WE(t={}){const n=x(t),s=K();return{state:F(()=>{if(s.value)return n[s.value]}),variant:s}}function th(t,n={},s){const{motionProperties:l}=qE(t),{variant:o,state:r}=WE(n),a=CE(l,n),i={target:t,variant:o,variants:n,state:r,motionProperties:l,...a};return PE(i,s),i}const zE=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],UE=(t,n)=>{const s=t.props?t.props:t.data&&t.data.attrs?t.data.attrs:{};s&&(s.variants&&Ba(s.variants)&&(n.value={...n.value,...s.variants}),zE.forEach(l=>{if(l==="delay"){if(s&&s[l]&&Lv(s[l])){const o=s[l];n&&n.value&&(n.value.enter&&(n.value.enter.transition||(n.value.enter.transition={}),n.value.enter.transition={delay:o,...n.value.enter.transition}),n.value.visible&&(n.value.visible.transition||(n.value.visible.transition={}),n.value.visible.transition={delay:o,...n.value.visible.transition}),n.value.visibleOnce&&(n.value.visibleOnce.transition||(n.value.visibleOnce.transition={}),n.value.visibleOnce.transition={delay:o,...n.value.visibleOnce.transition}))}return}l==="visible-once"&&(l="visibleOnce"),s&&s[l]&&Ba(s[l])&&(n.value[l]=s[l])}))},Qr=t=>({created:(s,l,o)=>{const r=l.value&&typeof l.value=="string"?l.value:o.key;r&&Yr[r]&&Yr[r].stop();const a=K(t||{});typeof l.value=="object"&&(a.value=l.value),UE(o,a);const i=th(s,a);s.motionInstance=i,r&&(Yr[r]=i)},getSSRProps(s,l){let{initial:o}=s.value||l&&(l==null?void 0:l.props)||{};o=x(o);const r=K6((t==null?void 0:t.initial)||{},o||{});return!r||Object.keys(r).length===0?void 0:{style:eh(r)}}}),GE={initial:{opacity:0},enter:{opacity:1}},KE={initial:{opacity:0},visible:{opacity:1}},JE={initial:{opacity:0},visibleOnce:{opacity:1}},YE={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},ZE={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},XE={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},QE={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},ek={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},tk={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},nk={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},sk={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},lk={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},ok={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},rk={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},ak={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},ik={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},ck={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},pk={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},uk={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},dk={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},fk={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},yk={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},hk={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},mk={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},gk={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},vk={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},_k={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},bk={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},Ak={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},wk={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Ya={__proto__:null,fade:GE,fadeVisible:KE,fadeVisibleOnce:JE,pop:YE,popVisible:ZE,popVisibleOnce:XE,rollBottom:ik,rollLeft:QE,rollRight:nk,rollTop:ok,rollVisibleBottom:ck,rollVisibleLeft:ek,rollVisibleOnceBottom:pk,rollVisibleOnceLeft:tk,rollVisibleOnceRight:lk,rollVisibleOnceTop:ak,rollVisibleRight:sk,rollVisibleTop:rk,slideBottom:bk,slideLeft:uk,slideRight:yk,slideTop:gk,slideVisibleBottom:Ak,slideVisibleLeft:dk,slideVisibleOnceBottom:wk,slideVisibleOnceLeft:fk,slideVisibleOnceRight:mk,slideVisibleOnceTop:_k,slideVisibleRight:hk,slideVisibleTop:vk},Bk=Pe({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(t){var i;const n=N8(),s=We({});if(!t.is&&!n.default)return()=>Ft("div",{});const l=F(()=>{let c;return t.preset&&(c=Ya[t.preset]),c}),o=F(()=>({initial:t.initial,enter:t.enter,leave:t.leave,visible:t.visible,visibleOnce:t.visibleOnce,hovered:t.hovered,tapped:t.tapped,focused:t.focused})),r=F(()=>{const c={...o.value,...l.value||{},...t.variants||{}};return t.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(t.delay)),c}),a=F(()=>{if(!t.is)return;let c=t.is;return typeof a.value=="string"&&!Au(c)&&(c=Io(c)),c});if(((i=process==null?void 0:process.env)==null?void 0:i.NODE_ENV)==="development"||process!=null&&process.dev){const c=p=>{var u;(u=p.variants)!=null&&u.initial&&p.set("initial"),setTimeout(()=>{var d,y,m;(d=p.variants)!=null&&d.enter&&p.apply("enter"),(y=p.variants)!=null&&y.visible&&p.apply("visible"),(m=p.variants)!=null&&m.visibleOnce&&p.apply("visibleOnce")},10)};ar(()=>Object.entries(s).forEach(([p,u])=>c(u)))}return{slots:n,component:a,motionConfig:r,instances:s}},render({slots:t,motionConfig:n,instances:s,component:l}){var i;const o=eh(n.initial||{}),r=(c,p)=>(c.props||(c.props={}),c.props.style=o,c.props.onVnodeMounted=({el:u})=>{const d=th(u,n);s[p]=d},c);if(l){const c=Ft(l,void 0,t);return r(c,0),c}return(((i=t.default)==null?void 0:i.call(t))||[]).map((c,p)=>r(c,p))}});function Ck(t){const n="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",s="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",l=new RegExp(n.split("").join("|"),"g");return t.toString().replace(/[A-Z]/g,o=>`-${o}`).toLowerCase().replace(/\s+/g,"-").replace(l,o=>s.charAt(n.indexOf(o))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const xk={install(t,n){if(t.directive("motion",Qr()),t.component("Motion",Bk),!n||n&&!n.excludePresets)for(const s in Ya){const l=Ya[s];t.directive(`motion-${Ck(s)}`,Qr(l))}if(n&&n.directives)for(const s in n.directives){const l=n.directives[s];l.initial,t.directive(`motion-${s}`,Qr(l))}}};var cu;const Cl=typeof window<"u",Ek=Object.prototype.toString,kk=t=>Ek.call(t)==="[object Object]";Cl&&((cu=window==null?void 0:window.navigator)!=null&&cu.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Dk(t){return li()?(Fu(t),!0):!1}function Sk(t){var n;const s=x(t);return(n=s==null?void 0:s.$el)!=null?n:s}const Fk=Cl?window:void 0,Za=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Xa="__vueuse_ssr_handlers__";Za[Xa]=Za[Xa]||{};Za[Xa];function $k(t,n={}){const{immediate:s=!0,window:l=Fk}=n,o=K(!1);let r=null;function a(){!o.value||!l||(t(),r=l.requestAnimationFrame(a))}function i(){!o.value&&l&&(o.value=!0,a())}function c(){o.value=!1,r!=null&&l&&(l.cancelAnimationFrame(r),r=null)}return s&&i(),Dk(c),{isActive:o,pause:c,resume:i}}var pu;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(pu||(pu={}));const wr="vue-starport-injection",nh="vue-starport-options",Pk={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},sh={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var Ok=Object.defineProperty,Jo=Object.getOwnPropertySymbols,lh=Object.prototype.hasOwnProperty,oh=Object.prototype.propertyIsEnumerable,uu=(t,n,s)=>n in t?Ok(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,Tk=(t,n)=>{for(var s in n||(n={}))lh.call(n,s)&&uu(t,s,n[s]);if(Jo)for(var s of Jo(n))oh.call(n,s)&&uu(t,s,n[s]);return t},du=(t,n)=>{var s={};for(var l in t)lh.call(t,l)&&n.indexOf(l)<0&&(s[l]=t[l]);if(t!=null&&Jo)for(var l of Jo(t))n.indexOf(l)<0&&oh.call(t,l)&&(s[l]=t[l]);return s};const Lk=Pe({name:"StarportProxy",props:Tk({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},sh),setup(t,n){const s=I(wr),l=F(()=>s.getInstance(t.port,t.component)),o=K(),r=l.value.generateId(),a=K(!1);return l.value.isVisible||(l.value.land(),a.value=!0),gn(async()=>{if(l.value.el){console.error(`[Vue Starport] Multiple proxies of "${l.value.componentName}" with port "${t.port}" detected. The later one will be ignored.`);return}if(l.value.el=o.value,await rt(),a.value=!0,l.value.rect.update(),l.value.rect.width===0||l.value.rect.height===0){const i=l.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${l.value.componentName}" (port "${t.port}") has no ${i} on initial render, have you set the size for it?`),console.warn("element:",l.value.el),console.warn("rect:",l.value.rect)}}),Kl(async()=>{l.value.rect.update(),l.value.liftOff(),l.value.el=void 0,a.value=!1,!l.value.options.keepAlive&&(await rt(),await rt(),!l.value.el&&s.dispose(l.value.port))}),ge(()=>t,async()=>{l.value.props&&await rt();const i=t,{props:c}=i,p=du(i,["props"]);l.value.props=c||{},l.value.setLocalOptions(p)},{deep:!0,immediate:!0}),()=>{const i=t,{initialProps:c,mountedProps:p}=i,u=du(i,["initialProps","mountedProps"]),d=Ye(u,(a.value?p:c)||{});return Ft("div",Ye(d,{id:r,ref:o,"data-starport-proxy":l.value.componentId,"data-starport-landed":l.value.isLanded?"true":void 0,"data-starport-floating":l.value.isLanded?void 0:"true"}),n.slots.default?Ft(n.slots.default):void 0)}}});var Ik=Object.defineProperty,Mk=Object.defineProperties,Nk=Object.getOwnPropertyDescriptors,fu=Object.getOwnPropertySymbols,Rk=Object.prototype.hasOwnProperty,jk=Object.prototype.propertyIsEnumerable,yu=(t,n,s)=>n in t?Ik(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,Vk=(t,n)=>{for(var s in n||(n={}))Rk.call(n,s)&&yu(t,s,n[s]);if(fu)for(var s of fu(n))jk.call(n,s)&&yu(t,s,n[s]);return t},Hk=(t,n)=>Mk(t,Nk(n));const qk=Pe({name:"Starport",inheritAttrs:!0,props:sh,setup(t,n){const s=K(!1);return gn(()=>{if(s.value=!0,!I(wr))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var a,i;const l=(i=(a=n.slots).default)==null?void 0:i.call(a);if(!l)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(l.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${l.length}`);const o=l[0];let r=o.type;return(!kk(r)||qn(r))&&(r={render(){return l}}),Ft(Lk,Hk(Vk({},t),{key:t.port,component:tr(r),props:o.props}))}}});function Wk(t){const n=We({height:0,width:0,left:0,top:0,update:l,listen:r,pause:a,margin:"0px",padding:"0px"}),s=Cl?document.documentElement||document.body:void 0;function l(){if(!Cl)return;const i=Sk(t);if(!i)return;const{height:c,width:p,left:u,top:d}=i.getBoundingClientRect(),y=window.getComputedStyle(i),m=y.margin,h=y.padding;Object.assign(n,{height:c,width:p,left:u,top:s.scrollTop+d,margin:m,padding:h})}const o=$k(l,{immediate:!1});function r(){Cl&&(l(),o.resume())}function a(){o.pause()}return n}let zk=(t,n=21)=>(s=n)=>{let l="",o=s;for(;o--;)l+=t[Math.random()*t.length|0];return l};const hu=zk("abcdefghijklmnopqrstuvwxyz",5);function mu(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function Uk(t){var n;return t.name||((n=t.__file)==null?void 0:n.split(/[\/\\.]/).slice(-2)[0])||""}var Gk=Object.defineProperty,gu=Object.getOwnPropertySymbols,Kk=Object.prototype.hasOwnProperty,Jk=Object.prototype.propertyIsEnumerable,vu=(t,n,s)=>n in t?Gk(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,ea=(t,n)=>{for(var s in n||(n={}))Kk.call(n,s)&&vu(t,s,n[s]);if(gu)for(var s of gu(n))Jk.call(n,s)&&vu(t,s,n[s]);return t};function Yk(t,n,s={}){const l=Uk(n),o=mu(l)||hu(),r=K(),a=K(null),i=K(!1),c=K(!1),p=wh(!0),u=K({}),d=F(()=>ea(ea(ea({},Pk),s),u.value)),y=K(0);let m;p.run(()=>{m=Wk(r),ge(r,async C=>{C&&(c.value=!0),await rt(),r.value||(c.value=!1)})});const h=mu(t);function v(){return`starport-${o}-${h}-${hu()}`}const _=v();return We({el:r,id:_,port:t,props:a,rect:m,scope:p,isLanded:i,isVisible:c,options:d,liftOffTime:y,component:n,componentName:l,componentId:o,generateId:v,setLocalOptions(C={}){u.value=JSON.parse(JSON.stringify(C))},elRef(){return r},liftOff(){i.value&&(i.value=!1,y.value=Date.now(),m.listen())},land(){i.value||(i.value=!0,m.pause())}})}function Zk(t){const n=We(new Map);function s(o,r){let a=n.get(o);return a||(a=Yk(o,r,t),n.set(o,a)),a.component=r,a}function l(o){var r;(r=n.get(o))==null||r.scope.stop(),n.delete(o)}return{portMap:n,dispose:l,getInstance:s}}var Xk=Object.defineProperty,Qk=Object.defineProperties,eD=Object.getOwnPropertyDescriptors,_u=Object.getOwnPropertySymbols,tD=Object.prototype.hasOwnProperty,nD=Object.prototype.propertyIsEnumerable,bu=(t,n,s)=>n in t?Xk(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,sD=(t,n)=>{for(var s in n||(n={}))tD.call(n,s)&&bu(t,s,n[s]);if(_u)for(var s of _u(n))nD.call(n,s)&&bu(t,s,n[s]);return t},lD=(t,n)=>Qk(t,eD(n));const oD=Pe({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(t){const n=I(wr);if(!n)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const s=F(()=>n.getInstance(t.port,t.component)),l=F(()=>{var a;return((a=s.value.el)==null?void 0:a.id)||s.value.id}),o=F(()=>{const a=Date.now()-s.value.liftOffTime,i=Math.max(0,s.value.options.duration-a),c=s.value.rect,p={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!s.value.isVisible||!s.value.el?lD(sD({},p),{zIndex:-1,display:"none"}):(s.value.isLanded?p.display="none":Object.assign(p,{transitionProperty:"all",transitionDuration:`${i}ms`,transitionTimingFunction:s.value.options.easing}),p)}),r={onTransitionend(a){s.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${s.value.componentName}" is too short (${a.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${s.value.options.duration/1e3}s).`)}};return()=>{const a=!!(s.value.isLanded&&s.value.el);return Ft("div",{style:o.value,"data-starport-craft":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true",onTransitionend:s.value.land},Ft(C8,{to:a?`#${l.value}`:"body",disabled:!a},Ft(s.value.component,Ye(r,s.value.props))))}}}),rD=Pe({name:"StarportCarrier",setup(t,{slots:n}){const s=Zk(I(nh,{}));return wt().appContext.app.provide(wr,s),()=>{var o;return[(o=n.default)==null?void 0:o.call(n),Array.from(s.portMap.entries()).map(([r,{component:a}])=>Ft(oD,{key:r,port:r,component:a}))]}}});function aD(t={}){return{install(n){n.provide(nh,t),n.component("Starport",qk),n.component("StarportCarrier",rD)}}}function iD(t){function n(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}n(),window.addEventListener("resize",n),t.app.use(xk),t.app.use(aD({keepAlive:!0}))}function xt(t,n,s){var l;return((l=t.instance)==null?void 0:l.$).provides[n]??s}function cD(){return{install(t){t.directive("click",{name:"v-click",mounted(n,s){var u,d,y,m;if(bl.value||(u=xt(s,ml))!=null&&u.value)return;const l=xt(s,ns),o=xt(s,hl),r=xt(s,Aa),a=s.modifiers.hide!==!1&&s.modifiers.hide!=null,i=s.modifiers.fade!==!1&&s.modifiers.fade!=null,c=((d=l==null?void 0:l.value)==null?void 0:d.length)||0,p=i?yv:Ir;if(l&&!((y=l==null?void 0:l.value)!=null&&y.includes(n))&&l.value.push(n),s.value==null&&(s.value=l==null?void 0:l.value.length),!(r!=null&&r.value.has(s.value)))r==null||r.value.set(s.value,[n]);else if(!((m=r==null?void 0:r.value.get(s.value))!=null&&m.includes(n))){const h=(r==null?void 0:r.value.get(s.value))||[];r==null||r.value.set(s.value,[n].concat(h))}n==null||n.classList.toggle(es,!0),o&&ge(o,()=>{const h=(o==null?void 0:o.value)??0,v=s.value!=null?h>=s.value:h>c;n.classList.contains(Mr)||n.classList.toggle(p,!v),a!==!1&&a!==void 0&&n.classList.toggle(p,v),n.classList.toggle(Qs,!1);const _=r==null?void 0:r.value.get(h);_==null||_.forEach((C,A)=>{C.classList.toggle(fo,!1),A===_.length-1?C.classList.toggle(Qs,!0):C.classList.toggle(fo,!0)}),n.classList.contains(Qs)||n.classList.toggle(fo,v)},{immediate:!0})},unmounted(n,s){n==null||n.classList.toggle(es,!1);const l=xt(s,ns);l!=null&&l.value&&wa(l.value,n)}}),t.directive("after",{name:"v-after",mounted(n,s){var i,c;if(bl.value||(i=xt(s,ml))!=null&&i.value)return;const l=xt(s,ns),o=xt(s,hl),r=xt(s,Aa),a=l==null?void 0:l.value.length;s.value==null&&(s.value=l==null?void 0:l.value.length),r!=null&&r.value.has(s.value)?(c=r==null?void 0:r.value.get(s.value))==null||c.push(n):r==null||r.value.set(s.value,[n]),n==null||n.classList.toggle(es,!0),o&&ge(o,()=>{const p=(o.value??0)>=(s.value??a??0);n.classList.contains(Mr)||n.classList.toggle(Ir,!p),n.classList.toggle(Qs,!1),n.classList.contains(Qs)||n.classList.toggle(fo,p)},{immediate:!0})},unmounted(n){n==null||n.classList.toggle(es,!0)}}),t.directive("click-hide",{name:"v-click-hide",mounted(n,s){var a,i,c;if(bl.value||(a=xt(s,ml))!=null&&a.value)return;const l=xt(s,ns),o=xt(s,hl),r=((i=l==null?void 0:l.value)==null?void 0:i.length)||0;l&&!((c=l==null?void 0:l.value)!=null&&c.includes(n))&&l.value.push(n),n==null||n.classList.toggle(es,!0),o&&ge(o,()=>{const p=(o==null?void 0:o.value)??0,u=s.value!=null?p>=s.value:p>r;n.classList.toggle(Ir,u),n.classList.toggle(Mr,u)},{immediate:!0})},unmounted(n,s){n==null||n.classList.toggle(es,!1);const l=xt(s,ns);l!=null&&l.value&&wa(l.value,n)}})}}}function pD(t,n){const s=zf(t),l=Uf(n,s.currentRoute,s.currentPage);return{nav:{...s,...l,downloadPDF:ja,next:Nn,nextSlide:Rl,openInEditor:j6,prev:Rn,prevSlide:jl},configs:$e,themeConfigs:F(()=>$e.themeConfig)}}function uD(){return{install(t){const n=pD(Rt,It);t.provide(W,We(n))}}}const Gs=Ag(U6);Gs.use(bt);Gs.use(uv());Gs.use(cD());Gs.use(uD());iD({app:Gs,router:bt});Gs.mount("#app");export{Oi as $,vA as A,K as B,hD as C,ft as D,Je as E,Le as F,E1 as G,R6 as H,It as I,Uo as J,T6 as K,zr as L,gn as M,We as N,fD as O,mD as P,ge as Q,O as R,Tf as S,Oe as T,dt as U,R1 as V,Il as W,qr as X,e3 as Y,Pi as Z,U as _,W as a,Ke as a0,Ee as a1,ke as a2,JA as a3,Z1 as a4,dD as a5,Nt as a6,rl as a7,os as a8,tn as a9,Ia as aa,f1 as ab,y1 as ac,h1 as ad,g1 as ae,cr as af,Ai as ag,gD as ah,ht as ai,ho as aj,Pb as ak,Jd as al,v1 as am,Kl as an,Ci as b,$e as c,Pe as d,rm as e,X as f,e as g,x as h,I as i,Xe as j,yy as k,f as l,R as m,nt as n,B as o,Ae as p,Ei as q,Jl as r,Kt as s,jn as t,yD as u,F as v,Nr as w,q as x,Ef as y,BA as z};

(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const i of u.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(s){if(s.ep)return;s.ep=!0;const u=n(s);fetch(s.href,u)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ws(e,t){const n=new Set(e.split(","));return t?r=>n.has(r.toLowerCase()):r=>n.has(r)}const _e={},Kt=[],Ve=()=>{},Ra=()=>!1,hn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ys=e=>e.startsWith("onUpdate:"),Pe=Object.assign,vs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Oa=Object.prototype.hasOwnProperty,ce=(e,t)=>Oa.call(e,t),te=Array.isArray,Gt=e=>jr(e)==="[object Map]",ur=e=>jr(e)==="[object Set]",ru=e=>jr(e)==="[object Date]",se=e=>typeof e=="function",Ee=e=>typeof e=="string",Tt=e=>typeof e=="symbol",ge=e=>e!==null&&typeof e=="object",Po=e=>(ge(e)||se(e))&&se(e.then)&&se(e.catch),Ao=Object.prototype.toString,jr=e=>Ao.call(e),Ma=e=>jr(e).slice(8,-1),To=e=>jr(e)==="[object Object]",ks=e=>Ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,hr=ws(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),pn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ja=/-(\w)/g,ut=pn(e=>e.replace(ja,(t,n)=>n?n.toUpperCase():"")),La=/\B([A-Z])/g,or=pn(e=>e.replace(La,"-$1").toLowerCase()),mn=pn(e=>e.charAt(0).toUpperCase()+e.slice(1)),In=pn(e=>e?`on${mn(e)}`:""),Rt=(e,t)=>!Object.is(e,t),Wr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},nn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},vr=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Na=e=>{const t=Ee(e)?Number(e):NaN;return isNaN(t)?e:t};let nu;const Ro=()=>nu||(nu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Es(e){if(te(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=Ee(r)?za(r):Es(r);if(s)for(const u in s)t[u]=s[u]}return t}else if(Ee(e)||ge(e))return e}const Ia=/;(?![^(]*\))/g,Fa=/:([^]+)/,Ba=/\/\*[^]*?\*\//g;function za(e){const t={};return e.replace(Ba,"").split(Ia).forEach(n=>{if(n){const r=n.split(Fa);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function nt(e){let t="";if(Ee(e))t=e;else if(te(e))for(let n=0;n<e.length;n++){const r=nt(e[n]);r&&(t+=r+" ")}else if(ge(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const $a="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ha=ws($a);function Oo(e){return!!e||e===""}function Da(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Dt(e[r],t[r]);return n}function Dt(e,t){if(e===t)return!0;let n=ru(e),r=ru(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=Tt(e),r=Tt(t),n||r)return e===t;if(n=te(e),r=te(t),n||r)return n&&r?Da(e,t):!1;if(n=ge(e),r=ge(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,u=Object.keys(t).length;if(s!==u)return!1;for(const i in e){const d=e.hasOwnProperty(i),l=t.hasOwnProperty(i);if(d&&!l||!d&&l||!Dt(e[i],t[i]))return!1}}return String(e)===String(t)}function Ss(e,t){return e.findIndex(n=>Dt(n,t))}const Mo=e=>Ee(e)?e:e==null?"":te(e)||ge(e)&&(e.toString===Ao||!se(e.toString))?JSON.stringify(e,jo,2):String(e),jo=(e,t)=>t&&t.__v_isRef?jo(e,t.value):Gt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],u)=>(n[Fn(r,u)+" =>"]=s,n),{})}:ur(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Fn(n))}:Tt(t)?Fn(t):ge(t)&&!te(t)&&!To(t)?String(t):t,Fn=(e,t="")=>{var n;return Tt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let He;class Lo{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=He,!t&&He&&(this.index=(He.scopes||(He.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=He;try{return He=this,t()}finally{He=n}}}on(){He=this}off(){He=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function No(e){return new Lo(e)}function Ua(e,t=He){t&&t.active&&t.effects.push(e)}function Io(){return He}function Va(e){He&&He.cleanups.push(e)}let $t;class Cs{constructor(t,n,r,s){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Ua(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Ut();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(xa(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Vt()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Ct,n=$t;try{return Ct=!0,$t=this,this._runnings++,su(this),this.fn()}finally{uu(this),this._runnings--,$t=n,Ct=t}}stop(){var t;this.active&&(su(this),uu(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function xa(e){return e.value}function su(e){e._trackId++,e._depsLength=0}function uu(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Fo(e.deps[t],e);e.deps.length=e._depsLength}}function Fo(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let Ct=!0,Xn=0;const Bo=[];function Ut(){Bo.push(Ct),Ct=!1}function Vt(){const e=Bo.pop();Ct=e===void 0?!0:e}function Ps(){Xn++}function As(){for(Xn--;!Xn&&Qn.length;)Qn.shift()()}function zo(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&Fo(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Qn=[];function $o(e,t,n){Ps();for(const r of e.keys()){let s;r._dirtyLevel<t&&(s??(s=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(s??(s=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Qn.push(r.scheduler)))}As()}const Ho=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},sn=new WeakMap,Ht=Symbol(""),Yn=Symbol("");function ze(e,t,n){if(Ct&&$t){let r=sn.get(e);r||sn.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=Ho(()=>r.delete(n))),zo($t,s)}}function ct(e,t,n,r,s,u){const i=sn.get(e);if(!i)return;let d=[];if(t==="clear")d=[...i.values()];else if(n==="length"&&te(e)){const l=Number(r);i.forEach((f,h)=>{(h==="length"||!Tt(h)&&h>=l)&&d.push(f)})}else switch(n!==void 0&&d.push(i.get(n)),t){case"add":te(e)?ks(n)&&d.push(i.get("length")):(d.push(i.get(Ht)),Gt(e)&&d.push(i.get(Yn)));break;case"delete":te(e)||(d.push(i.get(Ht)),Gt(e)&&d.push(i.get(Yn)));break;case"set":Gt(e)&&d.push(i.get(Ht));break}Ps();for(const l of d)l&&$o(l,4);As()}function qa(e,t){var n;return(n=sn.get(e))==null?void 0:n.get(t)}const Wa=ws("__proto__,__v_isRef,__isVue"),Do=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Tt)),ou=Ka();function Ka(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=ie(this);for(let u=0,i=this.length;u<i;u++)ze(r,"get",u+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(ie)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ut(),Ps();const r=ie(this)[t].apply(this,n);return As(),Vt(),r}}),e}function Ga(e){const t=ie(this);return ze(t,"has",e),t.hasOwnProperty(e)}class Uo{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const s=this._isReadonly,u=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return u;if(n==="__v_raw")return r===(s?u?id:Wo:u?qo:xo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const i=te(t);if(!s){if(i&&ce(ou,n))return Reflect.get(ou,n,r);if(n==="hasOwnProperty")return Ga}const d=Reflect.get(t,n,r);return(Tt(n)?Do.has(n):Wa(n))||(s||ze(t,"get",n),u)?d:Se(d)?i&&ks(n)?d:d.value:ge(d)?s?Go(d):Lr(d):d}}class Vo extends Uo{constructor(t=!1){super(!1,t)}set(t,n,r,s){let u=t[n];if(!this._isShallow){const l=Qt(u);if(!un(r)&&!Qt(r)&&(u=ie(u),r=ie(r)),!te(t)&&Se(u)&&!Se(r))return l?!1:(u.value=r,!0)}const i=te(t)&&ks(n)?Number(n)<t.length:ce(t,n),d=Reflect.set(t,n,r,s);return t===ie(s)&&(i?Rt(r,u)&&ct(t,"set",n,r):ct(t,"add",n,r)),d}deleteProperty(t,n){const r=ce(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&ct(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!Tt(n)||!Do.has(n))&&ze(t,"has",n),r}ownKeys(t){return ze(t,"iterate",te(t)?"length":Ht),Reflect.ownKeys(t)}}class Ja extends Uo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Za=new Vo,Xa=new Ja,Qa=new Vo(!0),Ts=e=>e,gn=e=>Reflect.getPrototypeOf(e);function Br(e,t,n=!1,r=!1){e=e.__v_raw;const s=ie(e),u=ie(t);n||(Rt(t,u)&&ze(s,"get",t),ze(s,"get",u));const{has:i}=gn(s),d=r?Ts:n?Ms:kr;if(i.call(s,t))return d(e.get(t));if(i.call(s,u))return d(e.get(u));e!==s&&e.get(t)}function zr(e,t=!1){const n=this.__v_raw,r=ie(n),s=ie(e);return t||(Rt(e,s)&&ze(r,"has",e),ze(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function $r(e,t=!1){return e=e.__v_raw,!t&&ze(ie(e),"iterate",Ht),Reflect.get(e,"size",e)}function iu(e){e=ie(e);const t=ie(this);return gn(t).has.call(t,e)||(t.add(e),ct(t,"add",e,e)),this}function au(e,t){t=ie(t);const n=ie(this),{has:r,get:s}=gn(n);let u=r.call(n,e);u||(e=ie(e),u=r.call(n,e));const i=s.call(n,e);return n.set(e,t),u?Rt(t,i)&&ct(n,"set",e,t):ct(n,"add",e,t),this}function du(e){const t=ie(this),{has:n,get:r}=gn(t);let s=n.call(t,e);s||(e=ie(e),s=n.call(t,e)),r&&r.call(t,e);const u=t.delete(e);return s&&ct(t,"delete",e,void 0),u}function cu(){const e=ie(this),t=e.size!==0,n=e.clear();return t&&ct(e,"clear",void 0,void 0),n}function Hr(e,t){return function(r,s){const u=this,i=u.__v_raw,d=ie(i),l=t?Ts:e?Ms:kr;return!e&&ze(d,"iterate",Ht),i.forEach((f,h)=>r.call(s,l(f),l(h),u))}}function Dr(e,t,n){return function(...r){const s=this.__v_raw,u=ie(s),i=Gt(u),d=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,f=s[e](...r),h=n?Ts:t?Ms:kr;return!t&&ze(u,"iterate",l?Yn:Ht),{next(){const{value:p,done:k}=f.next();return k?{value:p,done:k}:{value:d?[h(p[0]),h(p[1])]:h(p),done:k}},[Symbol.iterator](){return this}}}}function pt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ya(){const e={get(u){return Br(this,u)},get size(){return $r(this)},has:zr,add:iu,set:au,delete:du,clear:cu,forEach:Hr(!1,!1)},t={get(u){return Br(this,u,!1,!0)},get size(){return $r(this)},has:zr,add:iu,set:au,delete:du,clear:cu,forEach:Hr(!1,!0)},n={get(u){return Br(this,u,!0)},get size(){return $r(this,!0)},has(u){return zr.call(this,u,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:Hr(!0,!1)},r={get(u){return Br(this,u,!0,!0)},get size(){return $r(this,!0)},has(u){return zr.call(this,u,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:Hr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(u=>{e[u]=Dr(u,!1,!1),n[u]=Dr(u,!0,!1),t[u]=Dr(u,!1,!0),r[u]=Dr(u,!0,!0)}),[e,n,t,r]}const[ed,td,rd,nd]=Ya();function Rs(e,t){const n=t?e?nd:rd:e?td:ed;return(r,s,u)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(ce(n,s)&&s in r?n:r,s,u)}const sd={get:Rs(!1,!1)},ud={get:Rs(!1,!0)},od={get:Rs(!0,!1)},xo=new WeakMap,qo=new WeakMap,Wo=new WeakMap,id=new WeakMap;function ad(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dd(e){return e.__v_skip||!Object.isExtensible(e)?0:ad(Ma(e))}function Lr(e){return Qt(e)?e:Os(e,!1,Za,sd,xo)}function Ko(e){return Os(e,!1,Qa,ud,qo)}function Go(e){return Os(e,!0,Xa,od,Wo)}function Os(e,t,n,r,s){if(!ge(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const u=s.get(e);if(u)return u;const i=dd(e);if(i===0)return e;const d=new Proxy(e,i===2?r:n);return s.set(e,d),d}function lt(e){return Qt(e)?lt(e.__v_raw):!!(e&&e.__v_isReactive)}function Qt(e){return!!(e&&e.__v_isReadonly)}function un(e){return!!(e&&e.__v_isShallow)}function Jo(e){return lt(e)||Qt(e)}function ie(e){const t=e&&e.__v_raw;return t?ie(t):e}function _n(e){return Object.isExtensible(e)&&nn(e,"__v_skip",!0),e}const kr=e=>ge(e)?Lr(e):e,Ms=e=>ge(e)?Go(e):e;class Zo{constructor(t,n,r,s){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Cs(()=>t(this._value),()=>Kr(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=ie(this);return(!t._cacheable||t.effect.dirty)&&Rt(t._value,t._value=t.effect.run())&&Kr(t,4),Xo(t),t.effect._dirtyLevel>=2&&Kr(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function cd(e,t,n=!1){let r,s;const u=se(e);return u?(r=e,s=Ve):(r=e.get,s=e.set),new Zo(r,s,u||!s,n)}function Xo(e){var t;Ct&&$t&&(e=ie(e),zo($t,(t=e.dep)!=null?t:e.dep=Ho(()=>e.dep=void 0,e instanceof Zo?e:void 0)))}function Kr(e,t=4,n){e=ie(e);const r=e.dep;r&&$o(r,t)}function Se(e){return!!(e&&e.__v_isRef===!0)}function Ce(e){return Qo(e,!1)}function ld(e){return Qo(e,!0)}function Qo(e,t){return Se(e)?e:new fd(e,t)}class fd{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:ie(t),this._value=n?t:kr(t)}get value(){return Xo(this),this._value}set value(t){const n=this.__v_isShallow||un(t)||Qt(t);t=n?t:ie(t),Rt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:kr(t),Kr(this,4))}}function st(e){return Se(e)?e.value:e}const hd={get:(e,t,n)=>st(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Se(s)&&!Se(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Yo(e){return lt(e)?e:new Proxy(e,hd)}function pd(e){const t=te(e)?new Array(e.length):{};for(const n in e)t[n]=ei(e,n);return t}class md{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return qa(ie(this._object),this._key)}}class gd{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function _d(e,t,n){return Se(e)?e:se(e)?new gd(e):ge(e)&&arguments.length>1?ei(e,t,n):Ce(e)}function ei(e,t,n){const r=e[t];return Se(r)?r:new md(e,t,n)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Pt(e,t,n,r){try{return r?e(...r):e()}catch(s){bn(s,t,n)}}function xe(e,t,n,r){if(se(e)){const u=Pt(e,t,n,r);return u&&Po(u)&&u.catch(i=>{bn(i,t,n)}),u}const s=[];for(let u=0;u<e.length;u++)s.push(xe(e[u],t,n,r));return s}function bn(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let u=t.parent;const i=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;u;){const f=u.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](e,i,d)===!1)return}u=u.parent}const l=t.appContext.config.errorHandler;if(l){Pt(l,null,10,[e,i,d]);return}}bd(e,n,s,r)}function bd(e,t,n,r=!0){console.error(e)}let Er=!1,es=!1;const je=[];let tt=0;const Jt=[];let yt=null,It=0;const ti=Promise.resolve();let js=null;function wn(e){const t=js||ti;return e?t.then(this?e.bind(this):e):t}function wd(e){let t=tt+1,n=je.length;for(;t<n;){const r=t+n>>>1,s=je[r],u=Sr(s);u<e||u===e&&s.pre?t=r+1:n=r}return t}function Ls(e){(!je.length||!je.includes(e,Er&&e.allowRecurse?tt+1:tt))&&(e.id==null?je.push(e):je.splice(wd(e.id),0,e),ri())}function ri(){!Er&&!es&&(es=!0,js=ti.then(si))}function yd(e){const t=je.indexOf(e);t>tt&&je.splice(t,1)}function vd(e){te(e)?Jt.push(...e):(!yt||!yt.includes(e,e.allowRecurse?It+1:It))&&Jt.push(e),ri()}function lu(e,t,n=Er?tt+1:0){for(;n<je.length;n++){const r=je[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;je.splice(n,1),n--,r()}}}function ni(e){if(Jt.length){const t=[...new Set(Jt)].sort((n,r)=>Sr(n)-Sr(r));if(Jt.length=0,yt){yt.push(...t);return}for(yt=t,It=0;It<yt.length;It++)yt[It]();yt=null,It=0}}const Sr=e=>e.id==null?1/0:e.id,kd=(e,t)=>{const n=Sr(e)-Sr(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function si(e){es=!1,Er=!0,je.sort(kd);try{for(tt=0;tt<je.length;tt++){const t=je[tt];t&&t.active!==!1&&Pt(t,null,14)}}finally{tt=0,je.length=0,ni(),Er=!1,js=null,(je.length||Jt.length)&&si()}}function Ed(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||_e;let s=n;const u=t.startsWith("update:"),i=u&&t.slice(7);if(i&&i in r){const h=`${i==="modelValue"?"model":i}Modifiers`,{number:p,trim:k}=r[h]||_e;k&&(s=n.map(S=>Ee(S)?S.trim():S)),p&&(s=n.map(vr))}let d,l=r[d=In(t)]||r[d=In(ut(t))];!l&&u&&(l=r[d=In(or(t))]),l&&xe(l,e,6,s);const f=r[d+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[d])return;e.emitted[d]=!0,xe(f,e,6,s)}}function ui(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const u=e.emits;let i={},d=!1;if(!se(e)){const l=f=>{const h=ui(f,t,!0);h&&(d=!0,Pe(i,h))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!u&&!d?(ge(e)&&r.set(e,null),null):(te(u)?u.forEach(l=>i[l]=null):Pe(i,u),ge(e)&&r.set(e,i),i)}function yn(e,t){return!e||!hn(t)?!1:(t=t.slice(2).replace(/Once$/,""),ce(e,t[0].toLowerCase()+t.slice(1))||ce(e,or(t))||ce(e,t))}let Le=null,oi=null;function on(e){const t=Le;return Le=e,oi=e&&e.type.__scopeId||null,t}function At(e,t=Le,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Eu(-1);const u=on(t);let i;try{i=e(...s)}finally{on(u),r._d&&Eu(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function Bn(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:u,propsOptions:[i],slots:d,attrs:l,emit:f,render:h,renderCache:p,data:k,setupState:S,ctx:C,inheritAttrs:T}=e;let V,$;const G=on(e);try{if(n.shapeFlag&4){const o=s||r,c=o;V=et(h.call(c,o,p,u,S,k,C)),$=l}else{const o=t;V=et(o.length>1?o(u,{attrs:l,slots:d,emit:f}):o(u,null)),$=t.props?l:Sd(l)}}catch(o){gr.length=0,bn(o,e,1),V=ye(Ze)}let Q=V;if($&&T!==!1){const o=Object.keys($),{shapeFlag:c}=Q;o.length&&c&7&&(i&&o.some(ys)&&($=Cd($,i)),Q=Ot(Q,$))}return n.dirs&&(Q=Ot(Q),Q.dirs=Q.dirs?Q.dirs.concat(n.dirs):n.dirs),n.transition&&(Q.transition=n.transition),V=Q,on(G),V}const Sd=e=>{let t;for(const n in e)(n==="class"||n==="style"||hn(n))&&((t||(t={}))[n]=e[n]);return t},Cd=(e,t)=>{const n={};for(const r in e)(!ys(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Pd(e,t,n){const{props:r,children:s,component:u}=e,{props:i,children:d,patchFlag:l}=t,f=u.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?fu(r,i,f):!!i;if(l&8){const h=t.dynamicProps;for(let p=0;p<h.length;p++){const k=h[p];if(i[k]!==r[k]&&!yn(f,k))return!0}}}else return(s||d)&&(!d||!d.$stable)?!0:r===i?!1:r?i?fu(r,i,f):!0:!!i;return!1}function fu(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const u=r[s];if(t[u]!==e[u]&&!yn(n,u))return!0}return!1}function Ad({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Ns="components";function Td(e,t){return ai(Ns,e,!0,t)||e}const ii=Symbol.for("v-ndc");function Rd(e){return Ee(e)?ai(Ns,e,!1)||e:e||ii}function ai(e,t,n=!0,r=!1){const s=Le||Oe;if(s){const u=s.type;if(e===Ns){const d=yc(u,!1);if(d&&(d===t||d===ut(t)||d===mn(ut(t))))return u}const i=hu(s[e]||u[e],t)||hu(s.appContext[e],t);return!i&&r?u:i}}function hu(e,t){return e&&(e[t]||e[ut(t)]||e[mn(ut(t))])}const Od=e=>e.__isSuspense;function Md(e,t){t&&t.pendingBranch?te(e)?t.effects.push(...e):t.effects.push(e):vd(e)}const jd=Symbol.for("v-scx"),Ld=()=>Je(jd),Ur={};function pr(e,t,n){return di(e,t,n)}function di(e,t,{immediate:n,deep:r,flush:s,once:u,onTrack:i,onTrigger:d}=_e){if(t&&u){const a=t;t=(...m)=>{a(...m),c()}}const l=Oe,f=a=>r===!0?a:Bt(a,r===!1?1:void 0);let h,p=!1,k=!1;if(Se(e)?(h=()=>e.value,p=un(e)):lt(e)?(h=()=>f(e),p=!0):te(e)?(k=!0,p=e.some(a=>lt(a)||un(a)),h=()=>e.map(a=>{if(Se(a))return a.value;if(lt(a))return f(a);if(se(a))return Pt(a,l,2)})):se(e)?t?h=()=>Pt(e,l,2):h=()=>(S&&S(),xe(e,l,3,[C])):h=Ve,t&&r){const a=h;h=()=>Bt(a())}let S,C=a=>{S=Q.onStop=()=>{Pt(a,l,4),S=Q.onStop=void 0}},T;if(Cn)if(C=Ve,t?n&&xe(t,l,3,[h(),k?[]:void 0,C]):h(),s==="sync"){const a=Ld();T=a.__watcherHandles||(a.__watcherHandles=[])}else return Ve;let V=k?new Array(e.length).fill(Ur):Ur;const $=()=>{if(!(!Q.active||!Q.dirty))if(t){const a=Q.run();(r||p||(k?a.some((m,g)=>Rt(m,V[g])):Rt(a,V)))&&(S&&S(),xe(t,l,3,[a,V===Ur?void 0:k&&V[0]===Ur?[]:V,C]),V=a)}else Q.run()};$.allowRecurse=!!t;let G;s==="sync"?G=$:s==="post"?G=()=>Be($,l&&l.suspense):($.pre=!0,l&&($.id=l.uid),G=()=>Ls($));const Q=new Cs(h,Ve,G),o=Io(),c=()=>{Q.stop(),o&&vs(o.effects,Q)};return t?n?$():V=Q.run():s==="post"?Be(Q.run.bind(Q),l&&l.suspense):Q.run(),T&&T.push(c),c}function Nd(e,t,n){const r=this.proxy,s=Ee(e)?e.includes(".")?ci(r,e):()=>r[e]:e.bind(r,r);let u;se(t)?u=t:(u=t.handler,n=t);const i=Nr(this),d=di(s,u.bind(r),n);return i(),d}function ci(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Bt(e,t,n=0,r){if(!ge(e)||e.__v_skip)return e;if(t&&t>0){if(n>=t)return e;n++}if(r=r||new Set,r.has(e))return e;if(r.add(e),Se(e))Bt(e.value,t,n,r);else if(te(e))for(let s=0;s<e.length;s++)Bt(e[s],t,n,r);else if(ur(e)||Gt(e))e.forEach(s=>{Bt(s,t,n,r)});else if(To(e))for(const s in e)Bt(e[s],t,n,r);return e}function Gr(e,t){if(Le===null)return e;const n=Pn(Le)||Le.proxy,r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[u,i,d,l=_e]=t[s];u&&(se(u)&&(u={mounted:u,updated:u}),u.deep&&Bt(i),r.push({dir:u,instance:n,value:i,oldValue:void 0,arg:d,modifiers:l}))}return e}function jt(e,t,n,r){const s=e.dirs,u=t&&t.dirs;for(let i=0;i<s.length;i++){const d=s[i];u&&(d.oldValue=u[i].value);let l=d.dir[r];l&&(Ut(),xe(l,n,8,[e.el,d,e,t]),Vt())}}const vt=Symbol("_leaveCb"),Vr=Symbol("_enterCb");function li(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Bs(()=>{e.isMounted=!0}),zs(()=>{e.isUnmounting=!0}),e}const Ue=[Function,Array],fi={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ue,onEnter:Ue,onAfterEnter:Ue,onEnterCancelled:Ue,onBeforeLeave:Ue,onLeave:Ue,onAfterLeave:Ue,onLeaveCancelled:Ue,onBeforeAppear:Ue,onAppear:Ue,onAfterAppear:Ue,onAppearCancelled:Ue},Id={name:"BaseTransition",props:fi,setup(e,{slots:t}){const n=Mi(),r=li();return()=>{const s=t.default&&Is(t.default(),!0);if(!s||!s.length)return;let u=s[0];if(s.length>1){for(const k of s)if(k.type!==Ze){u=k;break}}const i=ie(e),{mode:d}=i;if(r.isLeaving)return zn(u);const l=pu(u);if(!l)return zn(u);const f=Cr(l,i,r,n);Pr(l,f);const h=n.subTree,p=h&&pu(h);if(p&&p.type!==Ze&&!Ft(l,p)){const k=Cr(p,i,r,n);if(Pr(p,k),d==="out-in")return r.isLeaving=!0,k.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},zn(u);d==="in-out"&&l.type!==Ze&&(k.delayLeave=(S,C,T)=>{const V=hi(r,p);V[String(p.key)]=p,S[vt]=()=>{C(),S[vt]=void 0,delete f.delayedLeave},f.delayedLeave=T})}return u}}},Fd=Id;function hi(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Cr(e,t,n,r){const{appear:s,mode:u,persisted:i=!1,onBeforeEnter:d,onEnter:l,onAfterEnter:f,onEnterCancelled:h,onBeforeLeave:p,onLeave:k,onAfterLeave:S,onLeaveCancelled:C,onBeforeAppear:T,onAppear:V,onAfterAppear:$,onAppearCancelled:G}=t,Q=String(e.key),o=hi(n,e),c=(g,b)=>{g&&xe(g,r,9,b)},a=(g,b)=>{const _=b[1];c(g,b),te(g)?g.every(v=>v.length<=1)&&_():g.length<=1&&_()},m={mode:u,persisted:i,beforeEnter(g){let b=d;if(!n.isMounted)if(s)b=T||d;else return;g[vt]&&g[vt](!0);const _=o[Q];_&&Ft(e,_)&&_.el[vt]&&_.el[vt](),c(b,[g])},enter(g){let b=l,_=f,v=h;if(!n.isMounted)if(s)b=V||l,_=$||f,v=G||h;else return;let P=!1;const R=g[Vr]=j=>{P||(P=!0,j?c(v,[g]):c(_,[g]),m.delayedLeave&&m.delayedLeave(),g[Vr]=void 0)};b?a(b,[g,R]):R()},leave(g,b){const _=String(e.key);if(g[Vr]&&g[Vr](!0),n.isUnmounting)return b();c(p,[g]);let v=!1;const P=g[vt]=R=>{v||(v=!0,b(),R?c(C,[g]):c(S,[g]),g[vt]=void 0,o[_]===e&&delete o[_])};o[_]=e,k?a(k,[g,P]):P()},clone(g){return Cr(g,t,n,r)}};return m}function zn(e){if(vn(e))return e=Ot(e),e.children=null,e}function pu(e){return vn(e)?e.children?e.children[0]:void 0:e}function Pr(e,t){e.shapeFlag&6&&e.component?Pr(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Is(e,t=!1,n){let r=[],s=0;for(let u=0;u<e.length;u++){let i=e[u];const d=n==null?i.key:String(n)+String(i.key!=null?i.key:u);i.type===De?(i.patchFlag&128&&s++,r=r.concat(Is(i.children,t,d))):(t||i.type!==Ze)&&r.push(d!=null?Ot(i,{key:d}):i)}if(s>1)for(let u=0;u<r.length;u++)r[u].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Fs(e,t){return se(e)?Pe({name:e.name},t,{setup:e}):e}const Jr=e=>!!e.type.__asyncLoader,vn=e=>e.type.__isKeepAlive;function Bd(e,t){pi(e,"a",t)}function zd(e,t){pi(e,"da",t)}function pi(e,t,n=Oe){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(kn(t,r,n),n){let s=n.parent;for(;s&&s.parent;)vn(s.parent.vnode)&&$d(r,t,n,s),s=s.parent}}function $d(e,t,n,r){const s=kn(t,e,r,!0);_i(()=>{vs(r[t],s)},n)}function kn(e,t,n=Oe,r=!1){if(n){const s=n[e]||(n[e]=[]),u=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;Ut();const d=Nr(n),l=xe(t,n,e,i);return d(),Vt(),l});return r?s.unshift(u):s.push(u),u}}const ht=e=>(t,n=Oe)=>(!Cn||e==="sp")&&kn(e,(...r)=>t(...r),n),mi=ht("bm"),Bs=ht("m"),Hd=ht("bu"),gi=ht("u"),zs=ht("bum"),_i=ht("um"),Dd=ht("sp"),Ud=ht("rtg"),Vd=ht("rtc");function xd(e,t=Oe){kn("ec",e,t)}function bi(e,t,n,r){let s;const u=n&&n[r];if(te(e)||Ee(e)){s=new Array(e.length);for(let i=0,d=e.length;i<d;i++)s[i]=t(e[i],i,void 0,u&&u[i])}else if(typeof e=="number"){s=new Array(e);for(let i=0;i<e;i++)s[i]=t(i+1,i,void 0,u&&u[i])}else if(ge(e))if(e[Symbol.iterator])s=Array.from(e,(i,d)=>t(i,d,void 0,u&&u[d]));else{const i=Object.keys(e);s=new Array(i.length);for(let d=0,l=i.length;d<l;d++){const f=i[d];s[d]=t(e[f],f,d,u&&u[d])}}else s=[];return n&&(n[r]=s),s}const ts=e=>e?ji(e)?Pn(e)||e.proxy:ts(e.parent):null,mr=Pe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ts(e.parent),$root:e=>ts(e.root),$emit:e=>e.emit,$options:e=>$s(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,Ls(e.update)}),$nextTick:e=>e.n||(e.n=wn.bind(e.proxy)),$watch:e=>Nd.bind(e)}),$n=(e,t)=>e!==_e&&!e.__isScriptSetup&&ce(e,t),qd={get({_:e},t){const{ctx:n,setupState:r,data:s,props:u,accessCache:i,type:d,appContext:l}=e;let f;if(t[0]!=="$"){const S=i[t];if(S!==void 0)switch(S){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return u[t]}else{if($n(r,t))return i[t]=1,r[t];if(s!==_e&&ce(s,t))return i[t]=2,s[t];if((f=e.propsOptions[0])&&ce(f,t))return i[t]=3,u[t];if(n!==_e&&ce(n,t))return i[t]=4,n[t];rs&&(i[t]=0)}}const h=mr[t];let p,k;if(h)return t==="$attrs"&&ze(e,"get",t),h(e);if((p=d.__cssModules)&&(p=p[t]))return p;if(n!==_e&&ce(n,t))return i[t]=4,n[t];if(k=l.config.globalProperties,ce(k,t))return k[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:u}=e;return $n(s,t)?(s[t]=n,!0):r!==_e&&ce(r,t)?(r[t]=n,!0):ce(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(u[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:u}},i){let d;return!!n[i]||e!==_e&&ce(e,i)||$n(t,i)||(d=u[0])&&ce(d,i)||ce(r,i)||ce(mr,i)||ce(s.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ce(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function mu(e){return te(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let rs=!0;function Wd(e){const t=$s(e),n=e.proxy,r=e.ctx;rs=!1,t.beforeCreate&&gu(t.beforeCreate,e,"bc");const{data:s,computed:u,methods:i,watch:d,provide:l,inject:f,created:h,beforeMount:p,mounted:k,beforeUpdate:S,updated:C,activated:T,deactivated:V,beforeDestroy:$,beforeUnmount:G,destroyed:Q,unmounted:o,render:c,renderTracked:a,renderTriggered:m,errorCaptured:g,serverPrefetch:b,expose:_,inheritAttrs:v,components:P,directives:R,filters:j}=t;if(f&&Kd(f,r,null),i)for(const O in i){const B=i[O];se(B)&&(r[O]=B.bind(n))}if(s){const O=s.call(n,n);ge(O)&&(e.data=Lr(O))}if(rs=!0,u)for(const O in u){const B=u[O],J=se(B)?B.bind(n,n):se(B.get)?B.get.bind(n,n):Ve,ue=!se(B)&&se(B.set)?B.set.bind(n):Ve,X=Fe({get:J,set:ue});Object.defineProperty(r,O,{enumerable:!0,configurable:!0,get:()=>X.value,set:fe=>X.value=fe})}if(d)for(const O in d)wi(d[O],r,n,O);if(l){const O=se(l)?l.call(n):l;Reflect.ownKeys(O).forEach(B=>{Zr(B,O[B])})}h&&gu(h,e,"c");function w(O,B){te(B)?B.forEach(J=>O(J.bind(n))):B&&O(B.bind(n))}if(w(mi,p),w(Bs,k),w(Hd,S),w(gi,C),w(Bd,T),w(zd,V),w(xd,g),w(Vd,a),w(Ud,m),w(zs,G),w(_i,o),w(Dd,b),te(_))if(_.length){const O=e.exposed||(e.exposed={});_.forEach(B=>{Object.defineProperty(O,B,{get:()=>n[B],set:J=>n[B]=J})})}else e.exposed||(e.exposed={});c&&e.render===Ve&&(e.render=c),v!=null&&(e.inheritAttrs=v),P&&(e.components=P),R&&(e.directives=R)}function Kd(e,t,n=Ve){te(e)&&(e=ns(e));for(const r in e){const s=e[r];let u;ge(s)?"default"in s?u=Je(s.from||r,s.default,!0):u=Je(s.from||r):u=Je(s),Se(u)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>u.value,set:i=>u.value=i}):t[r]=u}}function gu(e,t,n){xe(te(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function wi(e,t,n,r){const s=r.includes(".")?ci(n,r):()=>n[r];if(Ee(e)){const u=t[e];se(u)&&pr(s,u)}else if(se(e))pr(s,e.bind(n));else if(ge(e))if(te(e))e.forEach(u=>wi(u,t,n,r));else{const u=se(e.handler)?e.handler.bind(n):t[e.handler];se(u)&&pr(s,u,e)}}function $s(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:u,config:{optionMergeStrategies:i}}=e.appContext,d=u.get(t);let l;return d?l=d:!s.length&&!n&&!r?l=t:(l={},s.length&&s.forEach(f=>an(l,f,i,!0)),an(l,t,i)),ge(t)&&u.set(t,l),l}function an(e,t,n,r=!1){const{mixins:s,extends:u}=t;u&&an(e,u,n,!0),s&&s.forEach(i=>an(e,i,n,!0));for(const i in t)if(!(r&&i==="expose")){const d=Gd[i]||n&&n[i];e[i]=d?d(e[i],t[i]):t[i]}return e}const Gd={data:_u,props:bu,emits:bu,methods:fr,computed:fr,beforeCreate:Ne,created:Ne,beforeMount:Ne,mounted:Ne,beforeUpdate:Ne,updated:Ne,beforeDestroy:Ne,beforeUnmount:Ne,destroyed:Ne,unmounted:Ne,activated:Ne,deactivated:Ne,errorCaptured:Ne,serverPrefetch:Ne,components:fr,directives:fr,watch:Zd,provide:_u,inject:Jd};function _u(e,t){return t?e?function(){return Pe(se(e)?e.call(this,this):e,se(t)?t.call(this,this):t)}:t:e}function Jd(e,t){return fr(ns(e),ns(t))}function ns(e){if(te(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ne(e,t){return e?[...new Set([].concat(e,t))]:t}function fr(e,t){return e?Pe(Object.create(null),e,t):t}function bu(e,t){return e?te(e)&&te(t)?[...new Set([...e,...t])]:Pe(Object.create(null),mu(e),mu(t??{})):t}function Zd(e,t){if(!e)return t;if(!t)return e;const n=Pe(Object.create(null),e);for(const r in t)n[r]=Ne(e[r],t[r]);return n}function yi(){return{app:null,config:{isNativeTag:Ra,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xd=0;function Qd(e,t){return function(r,s=null){se(r)||(r=Pe({},r)),s!=null&&!ge(s)&&(s=null);const u=yi(),i=new WeakSet;let d=!1;const l=u.app={_uid:Xd++,_component:r,_props:s,_container:null,_context:u,_instance:null,version:kc,get config(){return u.config},set config(f){},use(f,...h){return i.has(f)||(f&&se(f.install)?(i.add(f),f.install(l,...h)):se(f)&&(i.add(f),f(l,...h))),l},mixin(f){return u.mixins.includes(f)||u.mixins.push(f),l},component(f,h){return h?(u.components[f]=h,l):u.components[f]},directive(f,h){return h?(u.directives[f]=h,l):u.directives[f]},mount(f,h,p){if(!d){const k=ye(r,s);return k.appContext=u,p===!0?p="svg":p===!1&&(p=void 0),h&&t?t(k,f):e(k,f,p),d=!0,l._container=f,f.__vue_app__=l,Pn(k.component)||k.component.proxy}},unmount(){d&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,h){return u.provides[f]=h,l},runWithContext(f){const h=Zt;Zt=l;try{return f()}finally{Zt=h}}};return l}}let Zt=null;function Zr(e,t){if(Oe){let n=Oe.provides;const r=Oe.parent&&Oe.parent.provides;r===n&&(n=Oe.provides=Object.create(r)),n[e]=t}}function Je(e,t,n=!1){const r=Oe||Le;if(r||Zt){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Zt._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&se(t)?t.call(r&&r.proxy):t}}function Yd(){return!!(Oe||Le||Zt)}function ec(e,t,n,r=!1){const s={},u={};nn(u,Sn,1),e.propsDefaults=Object.create(null),vi(e,t,s,u);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=r?s:Ko(s):e.type.props?e.props=s:e.props=u,e.attrs=u}function tc(e,t,n,r){const{props:s,attrs:u,vnode:{patchFlag:i}}=e,d=ie(s),[l]=e.propsOptions;let f=!1;if((r||i>0)&&!(i&16)){if(i&8){const h=e.vnode.dynamicProps;for(let p=0;p<h.length;p++){let k=h[p];if(yn(e.emitsOptions,k))continue;const S=t[k];if(l)if(ce(u,k))S!==u[k]&&(u[k]=S,f=!0);else{const C=ut(k);s[C]=ss(l,d,C,S,e,!1)}else S!==u[k]&&(u[k]=S,f=!0)}}}else{vi(e,t,s,u)&&(f=!0);let h;for(const p in d)(!t||!ce(t,p)&&((h=or(p))===p||!ce(t,h)))&&(l?n&&(n[p]!==void 0||n[h]!==void 0)&&(s[p]=ss(l,d,p,void 0,e,!0)):delete s[p]);if(u!==d)for(const p in u)(!t||!ce(t,p))&&(delete u[p],f=!0)}f&&ct(e,"set","$attrs")}function vi(e,t,n,r){const[s,u]=e.propsOptions;let i=!1,d;if(t)for(let l in t){if(hr(l))continue;const f=t[l];let h;s&&ce(s,h=ut(l))?!u||!u.includes(h)?n[h]=f:(d||(d={}))[h]=f:yn(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,i=!0)}if(u){const l=ie(n),f=d||_e;for(let h=0;h<u.length;h++){const p=u[h];n[p]=ss(s,l,p,f[p],e,!ce(f,p))}}return i}function ss(e,t,n,r,s,u){const i=e[n];if(i!=null){const d=ce(i,"default");if(d&&r===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&se(l)){const{propsDefaults:f}=s;if(n in f)r=f[n];else{const h=Nr(s);r=f[n]=l.call(null,t),h()}}else r=l}i[0]&&(u&&!d?r=!1:i[1]&&(r===""||r===or(n))&&(r=!0))}return r}function ki(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const u=e.props,i={},d=[];let l=!1;if(!se(e)){const h=p=>{l=!0;const[k,S]=ki(p,t,!0);Pe(i,k),S&&d.push(...S)};!n&&t.mixins.length&&t.mixins.forEach(h),e.extends&&h(e.extends),e.mixins&&e.mixins.forEach(h)}if(!u&&!l)return ge(e)&&r.set(e,Kt),Kt;if(te(u))for(let h=0;h<u.length;h++){const p=ut(u[h]);wu(p)&&(i[p]=_e)}else if(u)for(const h in u){const p=ut(h);if(wu(p)){const k=u[h],S=i[p]=te(k)||se(k)?{type:k}:Pe({},k);if(S){const C=ku(Boolean,S.type),T=ku(String,S.type);S[0]=C>-1,S[1]=T<0||C<T,(C>-1||ce(S,"default"))&&d.push(p)}}}const f=[i,d];return ge(e)&&r.set(e,f),f}function wu(e){return e[0]!=="$"&&!hr(e)}function yu(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function vu(e,t){return yu(e)===yu(t)}function ku(e,t){return te(t)?t.findIndex(n=>vu(n,e)):se(t)&&vu(t,e)?0:-1}const Ei=e=>e[0]==="_"||e==="$stable",Hs=e=>te(e)?e.map(et):[et(e)],rc=(e,t,n)=>{if(t._n)return t;const r=At((...s)=>Hs(t(...s)),n);return r._c=!1,r},Si=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Ei(s))continue;const u=e[s];if(se(u))t[s]=rc(s,u,r);else if(u!=null){const i=Hs(u);t[s]=()=>i}}},Ci=(e,t)=>{const n=Hs(t);e.slots.default=()=>n},nc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=ie(t),nn(t,"_",n)):Si(t,e.slots={})}else e.slots={},t&&Ci(e,t);nn(e.slots,Sn,1)},sc=(e,t,n)=>{const{vnode:r,slots:s}=e;let u=!0,i=_e;if(r.shapeFlag&32){const d=t._;d?n&&d===1?u=!1:(Pe(s,t),!n&&d===1&&delete s._):(u=!t.$stable,Si(t,s)),i=t}else t&&(Ci(e,t),i={default:1});if(u)for(const d in s)!Ei(d)&&i[d]==null&&delete s[d]};function us(e,t,n,r,s=!1){if(te(e)){e.forEach((k,S)=>us(k,t&&(te(t)?t[S]:t),n,r,s));return}if(Jr(r)&&!s)return;const u=r.shapeFlag&4?Pn(r.component)||r.component.proxy:r.el,i=s?null:u,{i:d,r:l}=e,f=t&&t.r,h=d.refs===_e?d.refs={}:d.refs,p=d.setupState;if(f!=null&&f!==l&&(Ee(f)?(h[f]=null,ce(p,f)&&(p[f]=null)):Se(f)&&(f.value=null)),se(l))Pt(l,d,12,[i,h]);else{const k=Ee(l),S=Se(l);if(k||S){const C=()=>{if(e.f){const T=k?ce(p,l)?p[l]:h[l]:l.value;s?te(T)&&vs(T,u):te(T)?T.includes(u)||T.push(u):k?(h[l]=[u],ce(p,l)&&(p[l]=h[l])):(l.value=[u],e.k&&(h[e.k]=l.value))}else k?(h[l]=i,ce(p,l)&&(p[l]=i)):S&&(l.value=i,e.k&&(h[e.k]=i))};i?(C.id=-1,Be(C,n)):C()}}}const Be=Md;function uc(e){return oc(e)}function oc(e,t){const n=Ro();n.__VUE__=!0;const{insert:r,remove:s,patchProp:u,createElement:i,createText:d,createComment:l,setText:f,setElementText:h,parentNode:p,nextSibling:k,setScopeId:S=Ve,insertStaticContent:C}=e,T=(y,E,A,F=null,L=null,D=null,K=void 0,H=null,x=!!E.dynamicChildren)=>{if(y===E)return;y&&!Ft(y,E)&&(F=M(y),fe(y,L,D,!0),y=null),E.patchFlag===-2&&(x=!1,E.dynamicChildren=null);const{type:z,ref:Z,shapeFlag:re}=E;switch(z){case En:V(y,E,A,F);break;case Ze:$(y,E,A,F);break;case Xr:y==null&&G(E,A,F,K);break;case De:P(y,E,A,F,L,D,K,H,x);break;default:re&1?c(y,E,A,F,L,D,K,H,x):re&6?R(y,E,A,F,L,D,K,H,x):(re&64||re&128)&&z.process(y,E,A,F,L,D,K,H,x,Y)}Z!=null&&L&&us(Z,y&&y.ref,D,E||y,!E)},V=(y,E,A,F)=>{if(y==null)r(E.el=d(E.children),A,F);else{const L=E.el=y.el;E.children!==y.children&&f(L,E.children)}},$=(y,E,A,F)=>{y==null?r(E.el=l(E.children||""),A,F):E.el=y.el},G=(y,E,A,F)=>{[y.el,y.anchor]=C(y.children,E,A,F,y.el,y.anchor)},Q=({el:y,anchor:E},A,F)=>{let L;for(;y&&y!==E;)L=k(y),r(y,A,F),y=L;r(E,A,F)},o=({el:y,anchor:E})=>{let A;for(;y&&y!==E;)A=k(y),s(y),y=A;s(E)},c=(y,E,A,F,L,D,K,H,x)=>{E.type==="svg"?K="svg":E.type==="math"&&(K="mathml"),y==null?a(E,A,F,L,D,K,H,x):b(y,E,L,D,K,H,x)},a=(y,E,A,F,L,D,K,H)=>{let x,z;const{props:Z,shapeFlag:re,transition:ee,dirs:ne}=y;if(x=y.el=i(y.type,D,Z&&Z.is,Z),re&8?h(x,y.children):re&16&&g(y.children,x,null,F,L,Hn(y,D),K,H),ne&&jt(y,null,F,"created"),m(x,y,y.scopeId,K,F),Z){for(const me in Z)me!=="value"&&!hr(me)&&u(x,me,null,Z[me],D,y.children,F,L,le);"value"in Z&&u(x,"value",null,Z.value,D),(z=Z.onVnodeBeforeMount)&&Ye(z,F,y)}ne&&jt(y,null,F,"beforeMount");const oe=ic(L,ee);oe&&ee.beforeEnter(x),r(x,E,A),((z=Z&&Z.onVnodeMounted)||oe||ne)&&Be(()=>{z&&Ye(z,F,y),oe&&ee.enter(x),ne&&jt(y,null,F,"mounted")},L)},m=(y,E,A,F,L)=>{if(A&&S(y,A),F)for(let D=0;D<F.length;D++)S(y,F[D]);if(L){let D=L.subTree;if(E===D){const K=L.vnode;m(y,K,K.scopeId,K.slotScopeIds,L.parent)}}},g=(y,E,A,F,L,D,K,H,x=0)=>{for(let z=x;z<y.length;z++){const Z=y[z]=H?kt(y[z]):et(y[z]);T(null,Z,E,A,F,L,D,K,H)}},b=(y,E,A,F,L,D,K)=>{const H=E.el=y.el;let{patchFlag:x,dynamicChildren:z,dirs:Z}=E;x|=y.patchFlag&16;const re=y.props||_e,ee=E.props||_e;let ne;if(A&&Lt(A,!1),(ne=ee.onVnodeBeforeUpdate)&&Ye(ne,A,E,y),Z&&jt(E,y,A,"beforeUpdate"),A&&Lt(A,!0),z?_(y.dynamicChildren,z,H,A,F,Hn(E,L),D):K||B(y,E,H,null,A,F,Hn(E,L),D,!1),x>0){if(x&16)v(H,E,re,ee,A,F,L);else if(x&2&&re.class!==ee.class&&u(H,"class",null,ee.class,L),x&4&&u(H,"style",re.style,ee.style,L),x&8){const oe=E.dynamicProps;for(let me=0;me<oe.length;me++){const be=oe[me],Te=re[be],Ke=ee[be];(Ke!==Te||be==="value")&&u(H,be,Te,Ke,L,y.children,A,F,le)}}x&1&&y.children!==E.children&&h(H,E.children)}else!K&&z==null&&v(H,E,re,ee,A,F,L);((ne=ee.onVnodeUpdated)||Z)&&Be(()=>{ne&&Ye(ne,A,E,y),Z&&jt(E,y,A,"updated")},F)},_=(y,E,A,F,L,D,K)=>{for(let H=0;H<E.length;H++){const x=y[H],z=E[H],Z=x.el&&(x.type===De||!Ft(x,z)||x.shapeFlag&70)?p(x.el):A;T(x,z,Z,null,F,L,D,K,!0)}},v=(y,E,A,F,L,D,K)=>{if(A!==F){if(A!==_e)for(const H in A)!hr(H)&&!(H in F)&&u(y,H,A[H],null,K,E.children,L,D,le);for(const H in F){if(hr(H))continue;const x=F[H],z=A[H];x!==z&&H!=="value"&&u(y,H,z,x,K,E.children,L,D,le)}"value"in F&&u(y,"value",A.value,F.value,K)}},P=(y,E,A,F,L,D,K,H,x)=>{const z=E.el=y?y.el:d(""),Z=E.anchor=y?y.anchor:d("");let{patchFlag:re,dynamicChildren:ee,slotScopeIds:ne}=E;ne&&(H=H?H.concat(ne):ne),y==null?(r(z,A,F),r(Z,A,F),g(E.children||[],A,Z,L,D,K,H,x)):re>0&&re&64&&ee&&y.dynamicChildren?(_(y.dynamicChildren,ee,A,L,D,K,H),(E.key!=null||L&&E===L.subTree)&&Pi(y,E,!0)):B(y,E,A,Z,L,D,K,H,x)},R=(y,E,A,F,L,D,K,H,x)=>{E.slotScopeIds=H,y==null?E.shapeFlag&512?L.ctx.activate(E,A,F,K,x):j(E,A,F,L,D,K,x):I(y,E,x)},j=(y,E,A,F,L,D,K)=>{const H=y.component=mc(y,F,L);if(vn(y)&&(H.ctx.renderer=Y),gc(H),H.asyncDep){if(L&&L.registerDep(H,w),!y.el){const x=H.subTree=ye(Ze);$(null,x,E,A)}}else w(H,y,E,A,L,D,K)},I=(y,E,A)=>{const F=E.component=y.component;if(Pd(y,E,A))if(F.asyncDep&&!F.asyncResolved){O(F,E,A);return}else F.next=E,yd(F.update),F.effect.dirty=!0,F.update();else E.el=y.el,F.vnode=E},w=(y,E,A,F,L,D,K)=>{const H=()=>{if(y.isMounted){let{next:Z,bu:re,u:ee,parent:ne,vnode:oe}=y;{const xt=Ai(y);if(xt){Z&&(Z.el=oe.el,O(y,Z,K)),xt.asyncDep.then(()=>{y.isUnmounted||H()});return}}let me=Z,be;Lt(y,!1),Z?(Z.el=oe.el,O(y,Z,K)):Z=oe,re&&Wr(re),(be=Z.props&&Z.props.onVnodeBeforeUpdate)&&Ye(be,ne,Z,oe),Lt(y,!0);const Te=Bn(y),Ke=y.subTree;y.subTree=Te,T(Ke,Te,p(Ke.el),M(Ke),y,L,D),Z.el=Te.el,me===null&&Ad(y,Te.el),ee&&Be(ee,L),(be=Z.props&&Z.props.onVnodeUpdated)&&Be(()=>Ye(be,ne,Z,oe),L)}else{let Z;const{el:re,props:ee}=E,{bm:ne,m:oe,parent:me}=y,be=Jr(E);if(Lt(y,!1),ne&&Wr(ne),!be&&(Z=ee&&ee.onVnodeBeforeMount)&&Ye(Z,me,E),Lt(y,!0),re&&pe){const Te=()=>{y.subTree=Bn(y),pe(re,y.subTree,y,L,null)};be?E.type.__asyncLoader().then(()=>!y.isUnmounted&&Te()):Te()}else{const Te=y.subTree=Bn(y);T(null,Te,A,F,y,L,D),E.el=Te.el}if(oe&&Be(oe,L),!be&&(Z=ee&&ee.onVnodeMounted)){const Te=E;Be(()=>Ye(Z,me,Te),L)}(E.shapeFlag&256||me&&Jr(me.vnode)&&me.vnode.shapeFlag&256)&&y.a&&Be(y.a,L),y.isMounted=!0,E=A=F=null}},x=y.effect=new Cs(H,Ve,()=>Ls(z),y.scope),z=y.update=()=>{x.dirty&&x.run()};z.id=y.uid,Lt(y,!0),z()},O=(y,E,A)=>{E.component=y;const F=y.vnode.props;y.vnode=E,y.next=null,tc(y,E.props,F,A),sc(y,E.children,A),Ut(),lu(y),Vt()},B=(y,E,A,F,L,D,K,H,x=!1)=>{const z=y&&y.children,Z=y?y.shapeFlag:0,re=E.children,{patchFlag:ee,shapeFlag:ne}=E;if(ee>0){if(ee&128){ue(z,re,A,F,L,D,K,H,x);return}else if(ee&256){J(z,re,A,F,L,D,K,H,x);return}}ne&8?(Z&16&&le(z,L,D),re!==z&&h(A,re)):Z&16?ne&16?ue(z,re,A,F,L,D,K,H,x):le(z,L,D,!0):(Z&8&&h(A,""),ne&16&&g(re,A,F,L,D,K,H,x))},J=(y,E,A,F,L,D,K,H,x)=>{y=y||Kt,E=E||Kt;const z=y.length,Z=E.length,re=Math.min(z,Z);let ee;for(ee=0;ee<re;ee++){const ne=E[ee]=x?kt(E[ee]):et(E[ee]);T(y[ee],ne,A,null,L,D,K,H,x)}z>Z?le(y,L,D,!0,!1,re):g(E,A,F,L,D,K,H,x,re)},ue=(y,E,A,F,L,D,K,H,x)=>{let z=0;const Z=E.length;let re=y.length-1,ee=Z-1;for(;z<=re&&z<=ee;){const ne=y[z],oe=E[z]=x?kt(E[z]):et(E[z]);if(Ft(ne,oe))T(ne,oe,A,null,L,D,K,H,x);else break;z++}for(;z<=re&&z<=ee;){const ne=y[re],oe=E[ee]=x?kt(E[ee]):et(E[ee]);if(Ft(ne,oe))T(ne,oe,A,null,L,D,K,H,x);else break;re--,ee--}if(z>re){if(z<=ee){const ne=ee+1,oe=ne<Z?E[ne].el:F;for(;z<=ee;)T(null,E[z]=x?kt(E[z]):et(E[z]),A,oe,L,D,K,H,x),z++}}else if(z>ee)for(;z<=re;)fe(y[z],L,D,!0),z++;else{const ne=z,oe=z,me=new Map;for(z=oe;z<=ee;z++){const $e=E[z]=x?kt(E[z]):et(E[z]);$e.key!=null&&me.set($e.key,z)}let be,Te=0;const Ke=ee-oe+1;let xt=!1,Ys=0;const ar=new Array(Ke);for(z=0;z<Ke;z++)ar[z]=0;for(z=ne;z<=re;z++){const $e=y[z];if(Te>=Ke){fe($e,L,D,!0);continue}let Qe;if($e.key!=null)Qe=me.get($e.key);else for(be=oe;be<=ee;be++)if(ar[be-oe]===0&&Ft($e,E[be])){Qe=be;break}Qe===void 0?fe($e,L,D,!0):(ar[Qe-oe]=z+1,Qe>=Ys?Ys=Qe:xt=!0,T($e,E[Qe],A,null,L,D,K,H,x),Te++)}const eu=xt?ac(ar):Kt;for(be=eu.length-1,z=Ke-1;z>=0;z--){const $e=oe+z,Qe=E[$e],tu=$e+1<Z?E[$e+1].el:F;ar[z]===0?T(null,Qe,A,tu,L,D,K,H,x):xt&&(be<0||z!==eu[be]?X(Qe,A,tu,2):be--)}}},X=(y,E,A,F,L=null)=>{const{el:D,type:K,transition:H,children:x,shapeFlag:z}=y;if(z&6){X(y.component.subTree,E,A,F);return}if(z&128){y.suspense.move(E,A,F);return}if(z&64){K.move(y,E,A,Y);return}if(K===De){r(D,E,A);for(let re=0;re<x.length;re++)X(x[re],E,A,F);r(y.anchor,E,A);return}if(K===Xr){Q(y,E,A);return}if(F!==2&&z&1&&H)if(F===0)H.beforeEnter(D),r(D,E,A),Be(()=>H.enter(D),L);else{const{leave:re,delayLeave:ee,afterLeave:ne}=H,oe=()=>r(D,E,A),me=()=>{re(D,()=>{oe(),ne&&ne()})};ee?ee(D,oe,me):me()}else r(D,E,A)},fe=(y,E,A,F=!1,L=!1)=>{const{type:D,props:K,ref:H,children:x,dynamicChildren:z,shapeFlag:Z,patchFlag:re,dirs:ee}=y;if(H!=null&&us(H,null,A,y,!0),Z&256){E.ctx.deactivate(y);return}const ne=Z&1&&ee,oe=!Jr(y);let me;if(oe&&(me=K&&K.onVnodeBeforeUnmount)&&Ye(me,E,y),Z&6)we(y.component,A,F);else{if(Z&128){y.suspense.unmount(A,F);return}ne&&jt(y,null,E,"beforeUnmount"),Z&64?y.type.remove(y,E,A,L,Y,F):z&&(D!==De||re>0&&re&64)?le(z,E,A,!1,!0):(D===De&&re&384||!L&&Z&16)&&le(x,E,A),F&&ke(y)}(oe&&(me=K&&K.onVnodeUnmounted)||ne)&&Be(()=>{me&&Ye(me,E,y),ne&&jt(y,null,E,"unmounted")},A)},ke=y=>{const{type:E,el:A,anchor:F,transition:L}=y;if(E===De){Ae(A,F);return}if(E===Xr){o(y);return}const D=()=>{s(A),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(y.shapeFlag&1&&L&&!L.persisted){const{leave:K,delayLeave:H}=L,x=()=>K(A,D);H?H(y.el,D,x):x()}else D()},Ae=(y,E)=>{let A;for(;y!==E;)A=k(y),s(y),y=A;s(E)},we=(y,E,A)=>{const{bum:F,scope:L,update:D,subTree:K,um:H}=y;F&&Wr(F),L.stop(),D&&(D.active=!1,fe(K,y,E,A)),H&&Be(H,E),Be(()=>{y.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},le=(y,E,A,F=!1,L=!1,D=0)=>{for(let K=D;K<y.length;K++)fe(y[K],E,A,F,L)},M=y=>y.shapeFlag&6?M(y.component.subTree):y.shapeFlag&128?y.suspense.next():k(y.anchor||y.el);let U=!1;const W=(y,E,A)=>{y==null?E._vnode&&fe(E._vnode,null,null,!0):T(E._vnode||null,y,E,null,null,null,A),U||(U=!0,lu(),ni(),U=!1),E._vnode=y},Y={p:T,um:fe,m:X,r:ke,mt:j,mc:g,pc:B,pbc:_,n:M,o:e};let de,pe;return t&&([de,pe]=t(Y)),{render:W,hydrate:de,createApp:Qd(W,de)}}function Hn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Lt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ic(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Pi(e,t,n=!1){const r=e.children,s=t.children;if(te(r)&&te(s))for(let u=0;u<r.length;u++){const i=r[u];let d=s[u];d.shapeFlag&1&&!d.dynamicChildren&&((d.patchFlag<=0||d.patchFlag===32)&&(d=s[u]=kt(s[u]),d.el=i.el),n||Pi(i,d)),d.type===En&&(d.el=i.el)}}function ac(e){const t=e.slice(),n=[0];let r,s,u,i,d;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(s=n[n.length-1],e[s]<f){t[r]=s,n.push(r);continue}for(u=0,i=n.length-1;u<i;)d=u+i>>1,e[n[d]]<f?u=d+1:i=d;f<e[n[u]]&&(u>0&&(t[r]=n[u-1]),n[u]=r)}}for(u=n.length,i=n[u-1];u-- >0;)n[u]=i,i=t[i];return n}function Ai(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ai(t)}const dc=e=>e.__isTeleport,De=Symbol.for("v-fgt"),En=Symbol.for("v-txt"),Ze=Symbol.for("v-cmt"),Xr=Symbol.for("v-stc"),gr=[];let Ge=null;function Re(e=!1){gr.push(Ge=e?null:[])}function cc(){gr.pop(),Ge=gr[gr.length-1]||null}let Ar=1;function Eu(e){Ar+=e}function Ti(e){return e.dynamicChildren=Ar>0?Ge||Kt:null,cc(),Ar>0&&Ge&&Ge.push(e),e}function Ie(e,t,n,r,s,u){return Ti(q(e,t,n,r,s,u,!0))}function Ds(e,t,n,r,s){return Ti(ye(e,t,n,r,s,!0))}function os(e){return e?e.__v_isVNode===!0:!1}function Ft(e,t){return e.type===t.type&&e.key===t.key}const Sn="__vInternal",Ri=({key:e})=>e??null,Qr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ee(e)||Se(e)||se(e)?{i:Le,r:e,k:t,f:!!n}:e:null);function q(e,t=null,n=null,r=0,s=null,u=e===De?0:1,i=!1,d=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ri(t),ref:t&&Qr(t),scopeId:oi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:u,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Le};return d?(Vs(l,n),u&128&&e.normalize(l)):n&&(l.shapeFlag|=Ee(n)?8:16),Ar>0&&!i&&Ge&&(l.patchFlag>0||u&6)&&l.patchFlag!==32&&Ge.push(l),l}const ye=lc;function lc(e,t=null,n=null,r=0,s=null,u=!1){if((!e||e===ii)&&(e=Ze),os(e)){const d=Ot(e,t,!0);return n&&Vs(d,n),Ar>0&&!u&&Ge&&(d.shapeFlag&6?Ge[Ge.indexOf(e)]=d:Ge.push(d)),d.patchFlag|=-2,d}if(vc(e)&&(e=e.__vccOpts),t){t=fc(t);let{class:d,style:l}=t;d&&!Ee(d)&&(t.class=nt(d)),ge(l)&&(Jo(l)&&!te(l)&&(l=Pe({},l)),t.style=Es(l))}const i=Ee(e)?1:Od(e)?128:dc(e)?64:ge(e)?4:se(e)?2:0;return q(e,t,n,r,s,i,u,!0)}function fc(e){return e?Jo(e)||Sn in e?Pe({},e):e:null}function Ot(e,t,n=!1){const{props:r,ref:s,patchFlag:u,children:i}=e,d=t?Oi(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&Ri(d),ref:t&&t.ref?n&&s?te(s)?s.concat(Qr(t)):[s,Qr(t)]:Qr(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==De?u===-1?16:u|16:u,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ot(e.ssContent),ssFallback:e.ssFallback&&Ot(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Xt(e=" ",t=0){return ye(En,null,e,t)}function Us(e,t){const n=ye(Xr,null,e);return n.staticCount=t,n}function zt(e="",t=!1){return t?(Re(),Ds(Ze,null,e)):ye(Ze,null,e)}function et(e){return e==null||typeof e=="boolean"?ye(Ze):te(e)?ye(De,null,e.slice()):typeof e=="object"?kt(e):ye(En,null,String(e))}function kt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ot(e)}function Vs(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(te(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Vs(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(Sn in t)?t._ctx=Le:s===3&&Le&&(Le.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else se(t)?(t={default:t,_ctx:Le},n=32):(t=String(t),r&64?(n=16,t=[Xt(t)]):n=8);e.children=t,e.shapeFlag|=n}function Oi(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=nt([t.class,r.class]));else if(s==="style")t.style=Es([t.style,r.style]);else if(hn(s)){const u=t[s],i=r[s];i&&u!==i&&!(te(u)&&u.includes(i))&&(t[s]=u?[].concat(u,i):i)}else s!==""&&(t[s]=r[s])}return t}function Ye(e,t,n,r=null){xe(e,t,7,[n,r])}const hc=yi();let pc=0;function mc(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||hc,u={uid:pc++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Lo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ki(r,s),emitsOptions:ui(r,s),emit:null,emitted:null,propsDefaults:_e,inheritAttrs:r.inheritAttrs,ctx:_e,data:_e,props:_e,attrs:_e,slots:_e,refs:_e,setupState:_e,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return u.ctx={_:u},u.root=t?t.root:u,u.emit=Ed.bind(null,u),e.ce&&e.ce(u),u}let Oe=null;const Mi=()=>Oe||Le;let dn,is;{const e=Ro(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),u=>{s.length>1?s.forEach(i=>i(u)):s[0](u)}};dn=t("__VUE_INSTANCE_SETTERS__",n=>Oe=n),is=t("__VUE_SSR_SETTERS__",n=>Cn=n)}const Nr=e=>{const t=Oe;return dn(e),e.scope.on(),()=>{e.scope.off(),dn(t)}},Su=()=>{Oe&&Oe.scope.off(),dn(null)};function ji(e){return e.vnode.shapeFlag&4}let Cn=!1;function gc(e,t=!1){t&&is(t);const{props:n,children:r}=e.vnode,s=ji(e);ec(e,n,s,t),nc(e,r);const u=s?_c(e,t):void 0;return t&&is(!1),u}function _c(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=_n(new Proxy(e.ctx,qd));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?wc(e):null,u=Nr(e);Ut();const i=Pt(r,e,0,[e.props,s]);if(Vt(),u(),Po(i)){if(i.then(Su,Su),t)return i.then(d=>{Cu(e,d,t)}).catch(d=>{bn(d,e,0)});e.asyncDep=i}else Cu(e,i,t)}else Li(e,t)}function Cu(e,t,n){se(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ge(t)&&(e.setupState=Yo(t)),Li(e,n)}let Pu;function Li(e,t,n){const r=e.type;if(!e.render){if(!t&&Pu&&!r.render){const s=r.template||$s(e).template;if(s){const{isCustomElement:u,compilerOptions:i}=e.appContext.config,{delimiters:d,compilerOptions:l}=r,f=Pe(Pe({isCustomElement:u,delimiters:d},i),l);r.render=Pu(s,f)}}e.render=r.render||Ve}{const s=Nr(e);Ut();try{Wd(e)}finally{Vt(),s()}}}function bc(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ze(e,"get","$attrs"),t[n]}}))}function wc(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return bc(e)},slots:e.slots,emit:e.emit,expose:t}}function Pn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Yo(_n(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in mr)return mr[n](e)},has(t,n){return n in t||n in mr}}))}function yc(e,t=!0){return se(e)?e.displayName||e.name:e.name||t&&e.__name}function vc(e){return se(e)&&"__vccOpts"in e}const Fe=(e,t)=>cd(e,t,Cn);function Tr(e,t,n){const r=arguments.length;return r===2?ge(t)&&!te(t)?os(t)?ye(e,null,[t]):ye(e,t):ye(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&os(n)&&(n=[n]),ye(e,t,n))}const kc="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Ec="http://www.w3.org/2000/svg",Sc="http://www.w3.org/1998/Math/MathML",Et=typeof document<"u"?document:null,Au=Et&&Et.createElement("template"),Cc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?Et.createElementNS(Ec,e):t==="mathml"?Et.createElementNS(Sc,e):Et.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>Et.createTextNode(e),createComment:e=>Et.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Et.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,u){const i=n?n.previousSibling:t.lastChild;if(s&&(s===u||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===u||!(s=s.nextSibling)););else{Au.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const d=Au.content;if(r==="svg"||r==="mathml"){const l=d.firstChild;for(;l.firstChild;)d.appendChild(l.firstChild);d.removeChild(l)}t.insertBefore(d,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},mt="transition",dr="animation",Yt=Symbol("_vtc"),er=(e,{slots:t})=>Tr(Fd,Ii(e),t);er.displayName="Transition";const Ni={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Pc=er.props=Pe({},fi,Ni),Nt=(e,t=[])=>{te(e)?e.forEach(n=>n(...t)):e&&e(...t)},Tu=e=>e?te(e)?e.some(t=>t.length>1):e.length>1:!1;function Ii(e){const t={};for(const P in e)P in Ni||(t[P]=e[P]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:u=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:d=`${n}-enter-to`,appearFromClass:l=u,appearActiveClass:f=i,appearToClass:h=d,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:k=`${n}-leave-active`,leaveToClass:S=`${n}-leave-to`}=e,C=Ac(s),T=C&&C[0],V=C&&C[1],{onBeforeEnter:$,onEnter:G,onEnterCancelled:Q,onLeave:o,onLeaveCancelled:c,onBeforeAppear:a=$,onAppear:m=G,onAppearCancelled:g=Q}=t,b=(P,R,j)=>{bt(P,R?h:d),bt(P,R?f:i),j&&j()},_=(P,R)=>{P._isLeaving=!1,bt(P,p),bt(P,S),bt(P,k),R&&R()},v=P=>(R,j)=>{const I=P?m:G,w=()=>b(R,P,j);Nt(I,[R,w]),Ru(()=>{bt(R,P?l:u),at(R,P?h:d),Tu(I)||Ou(R,r,T,w)})};return Pe(t,{onBeforeEnter(P){Nt($,[P]),at(P,u),at(P,i)},onBeforeAppear(P){Nt(a,[P]),at(P,l),at(P,f)},onEnter:v(!1),onAppear:v(!0),onLeave(P,R){P._isLeaving=!0;const j=()=>_(P,R);at(P,p),Bi(),at(P,k),Ru(()=>{P._isLeaving&&(bt(P,p),at(P,S),Tu(o)||Ou(P,r,V,j))}),Nt(o,[P,j])},onEnterCancelled(P){b(P,!1),Nt(Q,[P])},onAppearCancelled(P){b(P,!0),Nt(g,[P])},onLeaveCancelled(P){_(P),Nt(c,[P])}})}function Ac(e){if(e==null)return null;if(ge(e))return[Dn(e.enter),Dn(e.leave)];{const t=Dn(e);return[t,t]}}function Dn(e){return Na(e)}function at(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Yt]||(e[Yt]=new Set)).add(t)}function bt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[Yt];n&&(n.delete(t),n.size||(e[Yt]=void 0))}function Ru(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Tc=0;function Ou(e,t,n,r){const s=e._endId=++Tc,u=()=>{s===e._endId&&r()};if(n)return setTimeout(u,n);const{type:i,timeout:d,propCount:l}=Fi(e,t);if(!i)return r();const f=i+"end";let h=0;const p=()=>{e.removeEventListener(f,k),u()},k=S=>{S.target===e&&++h>=l&&p()};setTimeout(()=>{h<l&&p()},d+1),e.addEventListener(f,k)}function Fi(e,t){const n=window.getComputedStyle(e),r=C=>(n[C]||"").split(", "),s=r(`${mt}Delay`),u=r(`${mt}Duration`),i=Mu(s,u),d=r(`${dr}Delay`),l=r(`${dr}Duration`),f=Mu(d,l);let h=null,p=0,k=0;t===mt?i>0&&(h=mt,p=i,k=u.length):t===dr?f>0&&(h=dr,p=f,k=l.length):(p=Math.max(i,f),h=p>0?i>f?mt:dr:null,k=h?h===mt?u.length:l.length:0);const S=h===mt&&/\b(transform|all)(,|$)/.test(r(`${mt}Property`).toString());return{type:h,timeout:p,propCount:k,hasTransform:S}}function Mu(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>ju(n)+ju(e[r])))}function ju(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Bi(){return document.body.offsetHeight}function Rc(e,t,n){const r=e[Yt];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Lu=Symbol("_vod"),Oc=Symbol("_vsh"),Mc=Symbol(""),jc=/(^|;)\s*display\s*:/;function Lc(e,t,n){const r=e.style,s=Ee(n);let u=!1;if(n&&!s){if(t)if(Ee(t))for(const i of t.split(";")){const d=i.slice(0,i.indexOf(":")).trim();n[d]==null&&Yr(r,d,"")}else for(const i in t)n[i]==null&&Yr(r,i,"");for(const i in n)i==="display"&&(u=!0),Yr(r,i,n[i])}else if(s){if(t!==n){const i=r[Mc];i&&(n+=";"+i),r.cssText=n,u=jc.test(n)}}else t&&e.removeAttribute("style");Lu in e&&(e[Lu]=u?r.display:"",e[Oc]&&(r.display="none"))}const Nu=/\s*!important$/;function Yr(e,t,n){if(te(n))n.forEach(r=>Yr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Nc(e,t);Nu.test(n)?e.setProperty(or(r),n.replace(Nu,""),"important"):e[r]=n}}const Iu=["Webkit","Moz","ms"],Un={};function Nc(e,t){const n=Un[t];if(n)return n;let r=ut(t);if(r!=="filter"&&r in e)return Un[t]=r;r=mn(r);for(let s=0;s<Iu.length;s++){const u=Iu[s]+r;if(u in e)return Un[t]=u}return t}const Fu="http://www.w3.org/1999/xlink";function Ic(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Fu,t.slice(6,t.length)):e.setAttributeNS(Fu,t,n);else{const u=Ha(t);n==null||u&&!Oo(n)?e.removeAttribute(t):e.setAttribute(t,u?"":n)}}function Fc(e,t,n,r,s,u,i){if(t==="innerHTML"||t==="textContent"){r&&i(r,s,u),e[t]=n??"";return}const d=e.tagName;if(t==="value"&&d!=="PROGRESS"&&!d.includes("-")){const f=d==="OPTION"?e.getAttribute("value")||"":e.value,h=n??"";(f!==h||!("_value"in e))&&(e.value=h),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=Oo(n):n==null&&f==="string"?(n="",l=!0):f==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function dt(e,t,n,r){e.addEventListener(t,n,r)}function Bc(e,t,n,r){e.removeEventListener(t,n,r)}const Bu=Symbol("_vei");function zc(e,t,n,r,s=null){const u=e[Bu]||(e[Bu]={}),i=u[t];if(r&&i)i.value=r;else{const[d,l]=$c(t);if(r){const f=u[t]=Uc(r,s);dt(e,d,f,l)}else i&&(Bc(e,d,i,l),u[t]=void 0)}}const zu=/(?:Once|Passive|Capture)$/;function $c(e){let t;if(zu.test(e)){t={};let r;for(;r=e.match(zu);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):or(e.slice(2)),t]}let Vn=0;const Hc=Promise.resolve(),Dc=()=>Vn||(Hc.then(()=>Vn=0),Vn=Date.now());function Uc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;xe(Vc(r,n.value),t,5,[r])};return n.value=e,n.attached=Dc(),n}function Vc(e,t){if(te(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const $u=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,xc=(e,t,n,r,s,u,i,d,l)=>{const f=s==="svg";t==="class"?Rc(e,r,f):t==="style"?Lc(e,n,r):hn(t)?ys(t)||zc(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):qc(e,t,r,f))?Fc(e,t,r,u,i,d,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Ic(e,t,r,f))};function qc(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&$u(t)&&se(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return $u(t)&&Ee(n)?!1:t in e}const zi=new WeakMap,$i=new WeakMap,cn=Symbol("_moveCb"),Hu=Symbol("_enterCb"),Hi={name:"TransitionGroup",props:Pe({},Pc,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Mi(),r=li();let s,u;return gi(()=>{if(!s.length)return;const i=e.moveClass||`${e.name||"v"}-move`;if(!Xc(s[0].el,n.vnode.el,i))return;s.forEach(Gc),s.forEach(Jc);const d=s.filter(Zc);Bi(),d.forEach(l=>{const f=l.el,h=f.style;at(f,i),h.transform=h.webkitTransform=h.transitionDuration="";const p=f[cn]=k=>{k&&k.target!==f||(!k||/transform$/.test(k.propertyName))&&(f.removeEventListener("transitionend",p),f[cn]=null,bt(f,i))};f.addEventListener("transitionend",p)})}),()=>{const i=ie(e),d=Ii(i);let l=i.tag||De;s=u,u=t.default?Is(t.default()):[];for(let f=0;f<u.length;f++){const h=u[f];h.key!=null&&Pr(h,Cr(h,d,r,n))}if(s)for(let f=0;f<s.length;f++){const h=s[f];Pr(h,Cr(h,d,r,n)),zi.set(h,h.el.getBoundingClientRect())}return ye(l,null,u)}}},Wc=e=>delete e.mode;Hi.props;const Kc=Hi;function Gc(e){const t=e.el;t[cn]&&t[cn](),t[Hu]&&t[Hu]()}function Jc(e){$i.set(e,e.el.getBoundingClientRect())}function Zc(e){const t=zi.get(e),n=$i.get(e),r=t.left-n.left,s=t.top-n.top;if(r||s){const u=e.el.style;return u.transform=u.webkitTransform=`translate(${r}px,${s}px)`,u.transitionDuration="0s",e}}function Xc(e,t,n){const r=e.cloneNode(),s=e[Yt];s&&s.forEach(d=>{d.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(d=>d&&r.classList.add(d)),r.style.display="none";const u=t.nodeType===1?t:t.parentNode;u.appendChild(r);const{hasTransform:i}=Fi(r);return u.removeChild(r),i}const Mt=e=>{const t=e.props["onUpdate:modelValue"]||!1;return te(t)?n=>Wr(t,n):t};function Qc(e){e.target.composing=!0}function Du(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const qe=Symbol("_assign"),ln={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[qe]=Mt(s);const u=r||s.props&&s.props.type==="number";dt(e,t?"change":"input",i=>{if(i.target.composing)return;let d=e.value;n&&(d=d.trim()),u&&(d=vr(d)),e[qe](d)}),n&&dt(e,"change",()=>{e.value=e.value.trim()}),t||(dt(e,"compositionstart",Qc),dt(e,"compositionend",Du),dt(e,"change",Du))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},u){if(e[qe]=Mt(u),e.composing)return;const i=s||e.type==="number"?vr(e.value):e.value,d=t??"";i!==d&&(document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===d)||(e.value=d))}},Di={deep:!0,created(e,t,n){e[qe]=Mt(n),dt(e,"change",()=>{const r=e._modelValue,s=tr(e),u=e.checked,i=e[qe];if(te(r)){const d=Ss(r,s),l=d!==-1;if(u&&!l)i(r.concat(s));else if(!u&&l){const f=[...r];f.splice(d,1),i(f)}}else if(ur(r)){const d=new Set(r);u?d.add(s):d.delete(s),i(d)}else i(Ui(e,u))})},mounted:Uu,beforeUpdate(e,t,n){e[qe]=Mt(n),Uu(e,t,n)}};function Uu(e,{value:t,oldValue:n},r){e._modelValue=t,te(t)?e.checked=Ss(t,r.props.value)>-1:ur(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=Dt(t,Ui(e,!0)))}const Yc={created(e,{value:t},n){e.checked=Dt(t,n.props.value),e[qe]=Mt(n),dt(e,"change",()=>{e[qe](tr(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e[qe]=Mt(r),t!==n&&(e.checked=Dt(t,r.props.value))}},el={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const s=ur(t);dt(e,"change",()=>{const u=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>n?vr(tr(i)):tr(i));e[qe](e.multiple?s?new Set(u):u:u[0]),e._assigning=!0,wn(()=>{e._assigning=!1})}),e[qe]=Mt(r)},mounted(e,{value:t,modifiers:{number:n}}){Vu(e,t,n)},beforeUpdate(e,t,n){e[qe]=Mt(n)},updated(e,{value:t,modifiers:{number:n}}){e._assigning||Vu(e,t,n)}};function Vu(e,t,n){const r=e.multiple,s=te(t);if(!(r&&!s&&!ur(t))){for(let u=0,i=e.options.length;u<i;u++){const d=e.options[u],l=tr(d);if(r)if(s){const f=typeof l;f==="string"||f==="number"?d.selected=t.includes(n?vr(l):l):d.selected=Ss(t,l)>-1}else d.selected=t.has(l);else if(Dt(tr(d),t)){e.selectedIndex!==u&&(e.selectedIndex=u);return}}!r&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function tr(e){return"_value"in e?e._value:e.value}function Ui(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const tl={created(e,t,n){xr(e,t,n,null,"created")},mounted(e,t,n){xr(e,t,n,null,"mounted")},beforeUpdate(e,t,n,r){xr(e,t,n,r,"beforeUpdate")},updated(e,t,n,r){xr(e,t,n,r,"updated")}};function rl(e,t){switch(e){case"SELECT":return el;case"TEXTAREA":return ln;default:switch(t){case"checkbox":return Di;case"radio":return Yc;default:return ln}}}function xr(e,t,n,r,s){const i=rl(e.tagName,n.props&&n.props.type)[s];i&&i(e,t,n,r)}const nl=["ctrl","shift","alt","meta"],sl={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>nl.some(n=>e[`${n}Key`]&&!t.includes(n))},Vi=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(s,...u)=>{for(let i=0;i<t.length;i++){const d=sl[t[i]];if(d&&d(s,t))return}return e(s,...u)})},ul=Pe({patchProp:xc},Cc);let xu;function ol(){return xu||(xu=uc(ul))}const il=(...e)=>{const t=ol().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=dl(r);if(!s)return;const u=t._component;!se(u)&&!u.render&&!u.template&&(u.template=s.innerHTML),s.innerHTML="";const i=n(s,!1,al(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},t};function al(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function dl(e){return Ee(e)?document.querySelector(e):e}/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Wt=typeof document<"u";function cl(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const he=Object.assign;function xn(e,t){const n={};for(const r in t){const s=t[r];n[r]=Xe(s)?s.map(e):e(s)}return n}const _r=()=>{},Xe=Array.isArray,xi=/#/g,ll=/&/g,fl=/\//g,hl=/=/g,pl=/\?/g,qi=/\+/g,ml=/%5B/g,gl=/%5D/g,Wi=/%5E/g,_l=/%60/g,Ki=/%7B/g,bl=/%7C/g,Gi=/%7D/g,wl=/%20/g;function xs(e){return encodeURI(""+e).replace(bl,"|").replace(ml,"[").replace(gl,"]")}function yl(e){return xs(e).replace(Ki,"{").replace(Gi,"}").replace(Wi,"^")}function as(e){return xs(e).replace(qi,"%2B").replace(wl,"+").replace(xi,"%23").replace(ll,"%26").replace(_l,"`").replace(Ki,"{").replace(Gi,"}").replace(Wi,"^")}function vl(e){return as(e).replace(hl,"%3D")}function kl(e){return xs(e).replace(xi,"%23").replace(pl,"%3F")}function El(e){return e==null?"":kl(e).replace(fl,"%2F")}function Rr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Sl=/\/$/,Cl=e=>e.replace(Sl,"");function qn(e,t,n="/"){let r,s={},u="",i="";const d=t.indexOf("#");let l=t.indexOf("?");return d<l&&d>=0&&(l=-1),l>-1&&(r=t.slice(0,l),u=t.slice(l+1,d>-1?d:t.length),s=e(u)),d>-1&&(r=r||t.slice(0,d),i=t.slice(d,t.length)),r=Rl(r??t,n),{fullPath:r+(u&&"?")+u+i,path:r,query:s,hash:Rr(i)}}function Pl(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function qu(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Al(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&rr(t.matched[r],n.matched[s])&&Ji(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function rr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ji(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Tl(e[n],t[n]))return!1;return!0}function Tl(e,t){return Xe(e)?Wu(e,t):Xe(t)?Wu(t,e):e===t}function Wu(e,t){return Xe(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Rl(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let u=n.length-1,i,d;for(i=0;i<r.length;i++)if(d=r[i],d!==".")if(d==="..")u>1&&u--;else break;return n.slice(0,u).join("/")+"/"+r.slice(i).join("/")}var Or;(function(e){e.pop="pop",e.push="push"})(Or||(Or={}));var br;(function(e){e.back="back",e.forward="forward",e.unknown=""})(br||(br={}));function Ol(e){if(!e)if(Wt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Cl(e)}const Ml=/^[^#]+#/;function jl(e,t){return e.replace(Ml,"#")+t}function Ll(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const An=()=>({left:window.scrollX,top:window.scrollY});function Nl(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Ll(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Ku(e,t){return(history.state?history.state.position-t:-1)+e}const ds=new Map;function Il(e,t){ds.set(e,t)}function Fl(e){const t=ds.get(e);return ds.delete(e),t}let Bl=()=>location.protocol+"//"+location.host;function Zi(e,t){const{pathname:n,search:r,hash:s}=t,u=e.indexOf("#");if(u>-1){let d=s.includes(e.slice(u))?e.slice(u).length:1,l=s.slice(d);return l[0]!=="/"&&(l="/"+l),qu(l,"")}return qu(n,e)+r+s}function zl(e,t,n,r){let s=[],u=[],i=null;const d=({state:k})=>{const S=Zi(e,location),C=n.value,T=t.value;let V=0;if(k){if(n.value=S,t.value=k,i&&i===C){i=null;return}V=T?k.position-T.position:0}else r(S);s.forEach($=>{$(n.value,C,{delta:V,type:Or.pop,direction:V?V>0?br.forward:br.back:br.unknown})})};function l(){i=n.value}function f(k){s.push(k);const S=()=>{const C=s.indexOf(k);C>-1&&s.splice(C,1)};return u.push(S),S}function h(){const{history:k}=window;k.state&&k.replaceState(he({},k.state,{scroll:An()}),"")}function p(){for(const k of u)k();u=[],window.removeEventListener("popstate",d),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",d),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:f,destroy:p}}function Gu(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?An():null}}function $l(e){const{history:t,location:n}=window,r={value:Zi(e,n)},s={value:t.state};s.value||u(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function u(l,f,h){const p=e.indexOf("#"),k=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+l:Bl()+e+l;try{t[h?"replaceState":"pushState"](f,"",k),s.value=f}catch(S){console.error(S),n[h?"replace":"assign"](k)}}function i(l,f){const h=he({},t.state,Gu(s.value.back,l,s.value.forward,!0),f,{position:s.value.position});u(l,h,!0),r.value=l}function d(l,f){const h=he({},s.value,t.state,{forward:l,scroll:An()});u(h.current,h,!0);const p=he({},Gu(r.value,l,null),{position:h.position+1},f);u(l,p,!1),r.value=l}return{location:r,state:s,push:d,replace:i}}function Hl(e){e=Ol(e);const t=$l(e),n=zl(e,t.state,t.location,t.replace);function r(u,i=!0){i||n.pauseListeners(),history.go(u)}const s=he({location:"",base:e,go:r,createHref:jl.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Dl(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Hl(e)}function Ul(e){return typeof e=="string"||e&&typeof e=="object"}function Xi(e){return typeof e=="string"||typeof e=="symbol"}const gt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Qi=Symbol("");var Ju;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ju||(Ju={}));function nr(e,t){return he(new Error,{type:e,[Qi]:!0},t)}function it(e,t){return e instanceof Error&&Qi in e&&(t==null||!!(e.type&t))}const Zu="[^/]+?",Vl={sensitive:!1,strict:!1,start:!0,end:!0},xl=/[.+*?^${}()[\]/\\]/g;function ql(e,t){const n=he({},Vl,t),r=[];let s=n.start?"^":"";const u=[];for(const f of e){const h=f.length?[]:[90];n.strict&&!f.length&&(s+="/");for(let p=0;p<f.length;p++){const k=f[p];let S=40+(n.sensitive?.25:0);if(k.type===0)p||(s+="/"),s+=k.value.replace(xl,"\\$&"),S+=40;else if(k.type===1){const{value:C,repeatable:T,optional:V,regexp:$}=k;u.push({name:C,repeatable:T,optional:V});const G=$||Zu;if(G!==Zu){S+=10;try{new RegExp(`(${G})`)}catch(o){throw new Error(`Invalid custom RegExp for param "${C}" (${G}): `+o.message)}}let Q=T?`((?:${G})(?:/(?:${G}))*)`:`(${G})`;p||(Q=V&&f.length<2?`(?:/${Q})`:"/"+Q),V&&(Q+="?"),s+=Q,S+=20,V&&(S+=-8),T&&(S+=-20),G===".*"&&(S+=-50)}h.push(S)}r.push(h)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const i=new RegExp(s,n.sensitive?"":"i");function d(f){const h=f.match(i),p={};if(!h)return null;for(let k=1;k<h.length;k++){const S=h[k]||"",C=u[k-1];p[C.name]=S&&C.repeatable?S.split("/"):S}return p}function l(f){let h="",p=!1;for(const k of e){(!p||!h.endsWith("/"))&&(h+="/"),p=!1;for(const S of k)if(S.type===0)h+=S.value;else if(S.type===1){const{value:C,repeatable:T,optional:V}=S,$=C in f?f[C]:"";if(Xe($)&&!T)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const G=Xe($)?$.join("/"):$;if(!G)if(V)k.length<2&&(h.endsWith("/")?h=h.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);h+=G}}return h||"/"}return{re:i,score:r,keys:u,parse:d,stringify:l}}function Wl(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Kl(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const u=Wl(r[n],s[n]);if(u)return u;n++}if(Math.abs(s.length-r.length)===1){if(Xu(r))return 1;if(Xu(s))return-1}return s.length-r.length}function Xu(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Gl={type:0,value:""},Jl=/[a-zA-Z0-9_]/;function Zl(e){if(!e)return[[]];if(e==="/")return[[Gl]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(S){throw new Error(`ERR (${n})/"${f}": ${S}`)}let n=0,r=n;const s=[];let u;function i(){u&&s.push(u),u=[]}let d=0,l,f="",h="";function p(){f&&(n===0?u.push({type:0,value:f}):n===1||n===2||n===3?(u.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),u.push({type:1,value:f,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function k(){f+=l}for(;d<e.length;){if(l=e[d++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(f&&p(),i()):l===":"?(p(),n=1):k();break;case 4:k(),n=r;break;case 1:l==="("?n=2:Jl.test(l)?k():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&d--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&d--,h="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),p(),i(),s}function Xl(e,t,n){const r=ql(Zl(e.path),n),s=he(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Ql(e,t){const n=[],r=new Map;t=eo({strict:!1,end:!0,sensitive:!1},t);function s(h){return r.get(h)}function u(h,p,k){const S=!k,C=Yl(h);C.aliasOf=k&&k.record;const T=eo(t,h),V=[C];if("alias"in h){const Q=typeof h.alias=="string"?[h.alias]:h.alias;for(const o of Q)V.push(he({},C,{components:k?k.record.components:C.components,path:o,aliasOf:k?k.record:C}))}let $,G;for(const Q of V){const{path:o}=Q;if(p&&o[0]!=="/"){const c=p.record.path,a=c[c.length-1]==="/"?"":"/";Q.path=p.record.path+(o&&a+o)}if($=Xl(Q,p,T),k?k.alias.push($):(G=G||$,G!==$&&G.alias.push($),S&&h.name&&!Yu($)&&i(h.name)),C.children){const c=C.children;for(let a=0;a<c.length;a++)u(c[a],$,k&&k.children[a])}k=k||$,($.record.components&&Object.keys($.record.components).length||$.record.name||$.record.redirect)&&l($)}return G?()=>{i(G)}:_r}function i(h){if(Xi(h)){const p=r.get(h);p&&(r.delete(h),n.splice(n.indexOf(p),1),p.children.forEach(i),p.alias.forEach(i))}else{const p=n.indexOf(h);p>-1&&(n.splice(p,1),h.record.name&&r.delete(h.record.name),h.children.forEach(i),h.alias.forEach(i))}}function d(){return n}function l(h){let p=0;for(;p<n.length&&Kl(h,n[p])>=0&&(h.record.path!==n[p].record.path||!Yi(h,n[p]));)p++;n.splice(p,0,h),h.record.name&&!Yu(h)&&r.set(h.record.name,h)}function f(h,p){let k,S={},C,T;if("name"in h&&h.name){if(k=r.get(h.name),!k)throw nr(1,{location:h});T=k.record.name,S=he(Qu(p.params,k.keys.filter(G=>!G.optional).concat(k.parent?k.parent.keys.filter(G=>G.optional):[]).map(G=>G.name)),h.params&&Qu(h.params,k.keys.map(G=>G.name))),C=k.stringify(S)}else if(h.path!=null)C=h.path,k=n.find(G=>G.re.test(C)),k&&(S=k.parse(C),T=k.record.name);else{if(k=p.name?r.get(p.name):n.find(G=>G.re.test(p.path)),!k)throw nr(1,{location:h,currentLocation:p});T=k.record.name,S=he({},p.params,h.params),C=k.stringify(S)}const V=[];let $=k;for(;$;)V.unshift($.record),$=$.parent;return{name:T,path:C,params:S,matched:V,meta:tf(V)}}return e.forEach(h=>u(h)),{addRoute:u,resolve:f,removeRoute:i,getRoutes:d,getRecordMatcher:s}}function Qu(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Yl(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ef(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ef(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Yu(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function tf(e){return e.reduce((t,n)=>he(t,n.meta),{})}function eo(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Yi(e,t){return t.children.some(n=>n===e||Yi(e,n))}function rf(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const u=r[s].replace(qi," "),i=u.indexOf("="),d=Rr(i<0?u:u.slice(0,i)),l=i<0?null:Rr(u.slice(i+1));if(d in t){let f=t[d];Xe(f)||(f=t[d]=[f]),f.push(l)}else t[d]=l}return t}function to(e){let t="";for(let n in e){const r=e[n];if(n=vl(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Xe(r)?r.map(u=>u&&as(u)):[r&&as(r)]).forEach(u=>{u!==void 0&&(t+=(t.length?"&":"")+n,u!=null&&(t+="="+u))})}return t}function nf(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Xe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const sf=Symbol(""),ro=Symbol(""),Tn=Symbol(""),ea=Symbol(""),cs=Symbol("");function cr(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function St(e,t,n,r,s,u=i=>i()){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((d,l)=>{const f=k=>{k===!1?l(nr(4,{from:n,to:t})):k instanceof Error?l(k):Ul(k)?l(nr(2,{from:t,to:k})):(i&&r.enterCallbacks[s]===i&&typeof k=="function"&&i.push(k),d())},h=u(()=>e.call(r&&r.instances[s],t,n,f));let p=Promise.resolve(h);e.length<3&&(p=p.then(f)),p.catch(k=>l(k))})}function Wn(e,t,n,r,s=u=>u()){const u=[];for(const i of e)for(const d in i.components){let l=i.components[d];if(!(t!=="beforeRouteEnter"&&!i.instances[d]))if(uf(l)){const h=(l.__vccOpts||l)[t];h&&u.push(St(h,n,r,i,d,s))}else{let f=l();u.push(()=>f.then(h=>{if(!h)return Promise.reject(new Error(`Couldn't resolve component "${d}" at "${i.path}"`));const p=cl(h)?h.default:h;i.components[d]=p;const S=(p.__vccOpts||p)[t];return S&&St(S,n,r,i,d,s)()}))}}return u}function uf(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function no(e){const t=Je(Tn),n=Je(ea),r=Fe(()=>{const l=st(e.to);return t.resolve(l)}),s=Fe(()=>{const{matched:l}=r.value,{length:f}=l,h=l[f-1],p=n.matched;if(!h||!p.length)return-1;const k=p.findIndex(rr.bind(null,h));if(k>-1)return k;const S=so(l[f-2]);return f>1&&so(h)===S&&p[p.length-1].path!==S?p.findIndex(rr.bind(null,l[f-2])):k}),u=Fe(()=>s.value>-1&&cf(n.params,r.value.params)),i=Fe(()=>s.value>-1&&s.value===n.matched.length-1&&Ji(n.params,r.value.params));function d(l={}){return df(l)?t[st(e.replace)?"replace":"push"](st(e.to)).catch(_r):Promise.resolve()}return{route:r,href:Fe(()=>r.value.href),isActive:u,isExactActive:i,navigate:d}}const of=Fs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:no,setup(e,{slots:t}){const n=Lr(no(e)),{options:r}=Je(Tn),s=Fe(()=>({[uo(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[uo(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const u=t.default&&t.default(n);return e.custom?u:Tr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},u)}}}),af=of;function df(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function cf(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Xe(s)||s.length!==r.length||r.some((u,i)=>u!==s[i]))return!1}return!0}function so(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const uo=(e,t,n)=>e??t??n,lf=Fs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Je(cs),s=Fe(()=>e.route||r.value),u=Je(ro,0),i=Fe(()=>{let f=st(u);const{matched:h}=s.value;let p;for(;(p=h[f])&&!p.components;)f++;return f}),d=Fe(()=>s.value.matched[i.value]);Zr(ro,Fe(()=>i.value+1)),Zr(sf,d),Zr(cs,s);const l=Ce();return pr(()=>[l.value,d.value,e.name],([f,h,p],[k,S,C])=>{h&&(h.instances[p]=f,S&&S!==h&&f&&f===k&&(h.leaveGuards.size||(h.leaveGuards=S.leaveGuards),h.updateGuards.size||(h.updateGuards=S.updateGuards))),f&&h&&(!S||!rr(h,S)||!k)&&(h.enterCallbacks[p]||[]).forEach(T=>T(f))},{flush:"post"}),()=>{const f=s.value,h=e.name,p=d.value,k=p&&p.components[h];if(!k)return oo(n.default,{Component:k,route:f});const S=p.props[h],C=S?S===!0?f.params:typeof S=="function"?S(f):S:null,V=Tr(k,he({},C,t,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(p.instances[h]=null)},ref:l}));return oo(n.default,{Component:V,route:f})||V}}});function oo(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const ff=lf;function hf(e){const t=Ql(e.routes,e),n=e.parseQuery||rf,r=e.stringifyQuery||to,s=e.history,u=cr(),i=cr(),d=cr(),l=ld(gt);let f=gt;Wt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=xn.bind(null,M=>""+M),p=xn.bind(null,El),k=xn.bind(null,Rr);function S(M,U){let W,Y;return Xi(M)?(W=t.getRecordMatcher(M),Y=U):Y=M,t.addRoute(Y,W)}function C(M){const U=t.getRecordMatcher(M);U&&t.removeRoute(U)}function T(){return t.getRoutes().map(M=>M.record)}function V(M){return!!t.getRecordMatcher(M)}function $(M,U){if(U=he({},U||l.value),typeof M=="string"){const E=qn(n,M,U.path),A=t.resolve({path:E.path},U),F=s.createHref(E.fullPath);return he(E,A,{params:k(A.params),hash:Rr(E.hash),redirectedFrom:void 0,href:F})}let W;if(M.path!=null)W=he({},M,{path:qn(n,M.path,U.path).path});else{const E=he({},M.params);for(const A in E)E[A]==null&&delete E[A];W=he({},M,{params:p(E)}),U.params=p(U.params)}const Y=t.resolve(W,U),de=M.hash||"";Y.params=h(k(Y.params));const pe=Pl(r,he({},M,{hash:yl(de),path:Y.path})),y=s.createHref(pe);return he({fullPath:pe,hash:de,query:r===to?nf(M.query):M.query||{}},Y,{redirectedFrom:void 0,href:y})}function G(M){return typeof M=="string"?qn(n,M,l.value.path):he({},M)}function Q(M,U){if(f!==M)return nr(8,{from:U,to:M})}function o(M){return m(M)}function c(M){return o(he(G(M),{replace:!0}))}function a(M){const U=M.matched[M.matched.length-1];if(U&&U.redirect){const{redirect:W}=U;let Y=typeof W=="function"?W(M):W;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=G(Y):{path:Y},Y.params={}),he({query:M.query,hash:M.hash,params:Y.path!=null?{}:M.params},Y)}}function m(M,U){const W=f=$(M),Y=l.value,de=M.state,pe=M.force,y=M.replace===!0,E=a(W);if(E)return m(he(G(E),{state:typeof E=="object"?he({},de,E.state):de,force:pe,replace:y}),U||W);const A=W;A.redirectedFrom=U;let F;return!pe&&Al(r,Y,W)&&(F=nr(16,{to:A,from:Y}),X(Y,Y,!0,!1)),(F?Promise.resolve(F):_(A,Y)).catch(L=>it(L)?it(L,2)?L:ue(L):B(L,A,Y)).then(L=>{if(L){if(it(L,2))return m(he({replace:y},G(L.to),{state:typeof L.to=="object"?he({},de,L.to.state):de,force:pe}),U||A)}else L=P(A,Y,!0,y,de);return v(A,Y,L),L})}function g(M,U){const W=Q(M,U);return W?Promise.reject(W):Promise.resolve()}function b(M){const U=Ae.values().next().value;return U&&typeof U.runWithContext=="function"?U.runWithContext(M):M()}function _(M,U){let W;const[Y,de,pe]=pf(M,U);W=Wn(Y.reverse(),"beforeRouteLeave",M,U);for(const E of Y)E.leaveGuards.forEach(A=>{W.push(St(A,M,U))});const y=g.bind(null,M,U);return W.push(y),le(W).then(()=>{W=[];for(const E of u.list())W.push(St(E,M,U));return W.push(y),le(W)}).then(()=>{W=Wn(de,"beforeRouteUpdate",M,U);for(const E of de)E.updateGuards.forEach(A=>{W.push(St(A,M,U))});return W.push(y),le(W)}).then(()=>{W=[];for(const E of pe)if(E.beforeEnter)if(Xe(E.beforeEnter))for(const A of E.beforeEnter)W.push(St(A,M,U));else W.push(St(E.beforeEnter,M,U));return W.push(y),le(W)}).then(()=>(M.matched.forEach(E=>E.enterCallbacks={}),W=Wn(pe,"beforeRouteEnter",M,U,b),W.push(y),le(W))).then(()=>{W=[];for(const E of i.list())W.push(St(E,M,U));return W.push(y),le(W)}).catch(E=>it(E,8)?E:Promise.reject(E))}function v(M,U,W){d.list().forEach(Y=>b(()=>Y(M,U,W)))}function P(M,U,W,Y,de){const pe=Q(M,U);if(pe)return pe;const y=U===gt,E=Wt?history.state:{};W&&(Y||y?s.replace(M.fullPath,he({scroll:y&&E&&E.scroll},de)):s.push(M.fullPath,de)),l.value=M,X(M,U,W,y),ue()}let R;function j(){R||(R=s.listen((M,U,W)=>{if(!we.listening)return;const Y=$(M),de=a(Y);if(de){m(he(de,{replace:!0}),Y).catch(_r);return}f=Y;const pe=l.value;Wt&&Il(Ku(pe.fullPath,W.delta),An()),_(Y,pe).catch(y=>it(y,12)?y:it(y,2)?(m(y.to,Y).then(E=>{it(E,20)&&!W.delta&&W.type===Or.pop&&s.go(-1,!1)}).catch(_r),Promise.reject()):(W.delta&&s.go(-W.delta,!1),B(y,Y,pe))).then(y=>{y=y||P(Y,pe,!1),y&&(W.delta&&!it(y,8)?s.go(-W.delta,!1):W.type===Or.pop&&it(y,20)&&s.go(-1,!1)),v(Y,pe,y)}).catch(_r)}))}let I=cr(),w=cr(),O;function B(M,U,W){ue(M);const Y=w.list();return Y.length?Y.forEach(de=>de(M,U,W)):console.error(M),Promise.reject(M)}function J(){return O&&l.value!==gt?Promise.resolve():new Promise((M,U)=>{I.add([M,U])})}function ue(M){return O||(O=!M,j(),I.list().forEach(([U,W])=>M?W(M):U()),I.reset()),M}function X(M,U,W,Y){const{scrollBehavior:de}=e;if(!Wt||!de)return Promise.resolve();const pe=!W&&Fl(Ku(M.fullPath,0))||(Y||!W)&&history.state&&history.state.scroll||null;return wn().then(()=>de(M,U,pe)).then(y=>y&&Nl(y)).catch(y=>B(y,M,U))}const fe=M=>s.go(M);let ke;const Ae=new Set,we={currentRoute:l,listening:!0,addRoute:S,removeRoute:C,hasRoute:V,getRoutes:T,resolve:$,options:e,push:o,replace:c,go:fe,back:()=>fe(-1),forward:()=>fe(1),beforeEach:u.add,beforeResolve:i.add,afterEach:d.add,onError:w.add,isReady:J,install(M){const U=this;M.component("RouterLink",af),M.component("RouterView",ff),M.config.globalProperties.$router=U,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>st(l)}),Wt&&!ke&&l.value===gt&&(ke=!0,o(s.location).catch(de=>{}));const W={};for(const de in gt)Object.defineProperty(W,de,{get:()=>l.value[de],enumerable:!0});M.provide(Tn,U),M.provide(ea,Ko(W)),M.provide(cs,l);const Y=M.unmount;Ae.add(M),M.unmount=function(){Ae.delete(M),Ae.size<1&&(f=gt,R&&R(),R=null,l.value=gt,ke=!1,O=!1),Y()}}};function le(M){return M.reduce((U,W)=>U.then(()=>b(W)),Promise.resolve())}return we}function pf(e,t){const n=[],r=[],s=[],u=Math.max(t.matched.length,e.matched.length);for(let i=0;i<u;i++){const d=t.matched[i];d&&(e.matched.find(f=>rr(f,d))?r.push(d):n.push(d));const l=e.matched[i];l&&(t.matched.find(f=>rr(f,l))||s.push(l))}return[n,r,s]}function qs(){return Je(Tn)}let qr;const mf=new Uint8Array(16);function gf(){if(!qr&&(qr=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!qr))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return qr(mf)}const Me=[];for(let e=0;e<256;++e)Me.push((e+256).toString(16).slice(1));function _f(e,t=0){return Me[e[t+0]]+Me[e[t+1]]+Me[e[t+2]]+Me[e[t+3]]+"-"+Me[e[t+4]]+Me[e[t+5]]+"-"+Me[e[t+6]]+Me[e[t+7]]+"-"+Me[e[t+8]]+Me[e[t+9]]+"-"+Me[e[t+10]]+Me[e[t+11]]+Me[e[t+12]]+Me[e[t+13]]+Me[e[t+14]]+Me[e[t+15]]}const bf=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),io={randomUUID:bf};function wf(e,t,n){if(io.randomUUID&&!t&&!e)return io.randomUUID();e=e||{};const r=e.random||(e.rng||gf)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(let s=0;s<16;++s)t[n+s]=r[s];return t}return _f(r)}function ao(e){return{height:e.style.height,width:e.style.width,position:e.style.position,visibility:e.style.visibility,overflow:e.style.overflow,paddingTop:e.style.paddingTop,paddingBottom:e.style.paddingBottom,borderTopWidth:e.style.borderTopWidth,borderBottomWidth:e.style.borderBottomWidth,marginTop:e.style.marginTop,marginBottom:e.style.marginBottom}}function yf(e,t,n){const r=st(e),{width:s}=getComputedStyle(t);t.style.width=s,t.style.position="absolute",t.style.visibility="hidden",t.style.height="";const{height:u}=getComputedStyle(t);return t.style.width=n.width,t.style.position=n.position,t.style.visibility=n.visibility,t.style.height=r,t.style.overflow="hidden",n.height&&n.height!=r?n.height:u}function co(e,t,n,r,s){const u=e.animate(r,s);e.style.height=t.height,u.onfinish=()=>{e.style.overflow=t.overflow,n()}}function lo(e,t,n,r){const s=st(t);return[{height:s,opacity:e.opacityClosed,paddingTop:s,paddingBottom:s,borderTopWidth:s,borderBottomWidth:s,marginTop:s,marginBottom:s},{height:n,opacity:e.opacityOpen,paddingTop:r.paddingTop||0,paddingBottom:r.paddingBottom||0,borderTopWidth:r.borderTopWidth||0,borderBottomWidth:r.borderBottomWidth||0,marginTop:r.marginTop||0,marginBottom:r.marginBottom||0}]}const fo=Fs({props:{modelValue:{type:Boolean,default:!1},duration:{type:Number,default:500},timingFunction:{type:String,default:"ease-in-out"},timingFunctionEnter:{type:String,default:null},timingFunctionLeave:{type:String,default:null},opacityOpen:{type:Number,default:1},opacityClosed:{type:Number,default:0},tag:{type:String,default:"div"}},emits:["update:modelValue","open-start","open-end","close-start","close-end"],setup(e,{slots:t,attrs:n,emit:r}){const s=Ce("0px"),u=Fe(()=>e.timingFunctionEnter||e.timingFunction),i=Fe(()=>e.timingFunctionLeave||e.timingFunction);function d(f,h){const p=f,k=ao(p),S=yf(s,p,k),C=lo(e,s,S,k),T={duration:e.duration,easing:u.value};co(p,k,()=>{h(),r("open-end")},C,T)}function l(f,h){const p=f,k=ao(p),{height:S}=getComputedStyle(p);p.style.height=S,p.style.overflow="hidden";const C=lo(e,s,S,k).reverse(),T={duration:e.duration,easing:i.value};co(p,k,()=>{h(),r("close-end")},C,T)}return()=>Tr(er,{css:!1,onBeforeEnter:()=>r("open-start"),onEnter:d,onBeforeLeave:()=>r("close-start"),onLeave:l},{default:()=>e.modelValue?Tr(e.tag,Oi(n,{class:"slide-up-down__container"}),t):null})}});/*!
  * @soerenmartius/vue3-clipboard v0.1.2
  * (c) 2021 Soeren Martius
  * @license MIT
  */var vf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function kf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Ef(e,t,n){return n={path:t,exports:{},require:function(r,s){return Sf(r,s??n.path)}},e(n,n.exports),n.exports}function Sf(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var Cf=Ef(function(e,t){/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(r,s){e.exports=s()})(vf,function(){return function(n){var r={};function s(u){if(r[u])return r[u].exports;var i=r[u]={i:u,l:!1,exports:{}};return n[u].call(i.exports,i,i.exports,s),i.l=!0,i.exports}return s.m=n,s.c=r,s.d=function(u,i,d){s.o(u,i)||Object.defineProperty(u,i,{enumerable:!0,get:d})},s.r=function(u){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(u,"__esModule",{value:!0})},s.t=function(u,i){if(i&1&&(u=s(u)),i&8||i&4&&typeof u=="object"&&u&&u.__esModule)return u;var d=Object.create(null);if(s.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:u}),i&2&&typeof u!="string")for(var l in u)s.d(d,l,(function(f){return u[f]}).bind(null,l));return d},s.n=function(u){var i=u&&u.__esModule?function(){return u.default}:function(){return u};return s.d(i,"a",i),i},s.o=function(u,i){return Object.prototype.hasOwnProperty.call(u,i)},s.p="",s(s.s=6)}([function(n,r){function s(u){var i;if(u.nodeName==="SELECT")u.focus(),i=u.value;else if(u.nodeName==="INPUT"||u.nodeName==="TEXTAREA"){var d=u.hasAttribute("readonly");d||u.setAttribute("readonly",""),u.select(),u.setSelectionRange(0,u.value.length),d||u.removeAttribute("readonly"),i=u.value}else{u.hasAttribute("contenteditable")&&u.focus();var l=window.getSelection(),f=document.createRange();f.selectNodeContents(u),l.removeAllRanges(),l.addRange(f),i=l.toString()}return i}n.exports=s},function(n,r){function s(){}s.prototype={on:function(u,i,d){var l=this.e||(this.e={});return(l[u]||(l[u]=[])).push({fn:i,ctx:d}),this},once:function(u,i,d){var l=this;function f(){l.off(u,f),i.apply(d,arguments)}return f._=i,this.on(u,f,d)},emit:function(u){var i=[].slice.call(arguments,1),d=((this.e||(this.e={}))[u]||[]).slice(),l=0,f=d.length;for(l;l<f;l++)d[l].fn.apply(d[l].ctx,i);return this},off:function(u,i){var d=this.e||(this.e={}),l=d[u],f=[];if(l&&i)for(var h=0,p=l.length;h<p;h++)l[h].fn!==i&&l[h].fn._!==i&&f.push(l[h]);return f.length?d[u]=f:delete d[u],this}},n.exports=s,n.exports.TinyEmitter=s},function(n,r,s){var u=s(3),i=s(4);function d(p,k,S){if(!p&&!k&&!S)throw new Error("Missing required arguments");if(!u.string(k))throw new TypeError("Second argument must be a String");if(!u.fn(S))throw new TypeError("Third argument must be a Function");if(u.node(p))return l(p,k,S);if(u.nodeList(p))return f(p,k,S);if(u.string(p))return h(p,k,S);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function l(p,k,S){return p.addEventListener(k,S),{destroy:function(){p.removeEventListener(k,S)}}}function f(p,k,S){return Array.prototype.forEach.call(p,function(C){C.addEventListener(k,S)}),{destroy:function(){Array.prototype.forEach.call(p,function(C){C.removeEventListener(k,S)})}}}function h(p,k,S){return i(document.body,p,k,S)}n.exports=d},function(n,r){r.node=function(s){return s!==void 0&&s instanceof HTMLElement&&s.nodeType===1},r.nodeList=function(s){var u=Object.prototype.toString.call(s);return s!==void 0&&(u==="[object NodeList]"||u==="[object HTMLCollection]")&&"length"in s&&(s.length===0||r.node(s[0]))},r.string=function(s){return typeof s=="string"||s instanceof String},r.fn=function(s){var u=Object.prototype.toString.call(s);return u==="[object Function]"}},function(n,r,s){var u=s(5);function i(f,h,p,k,S){var C=l.apply(this,arguments);return f.addEventListener(p,C,S),{destroy:function(){f.removeEventListener(p,C,S)}}}function d(f,h,p,k,S){return typeof f.addEventListener=="function"?i.apply(null,arguments):typeof p=="function"?i.bind(null,document).apply(null,arguments):(typeof f=="string"&&(f=document.querySelectorAll(f)),Array.prototype.map.call(f,function(C){return i(C,h,p,k,S)}))}function l(f,h,p,k){return function(S){S.delegateTarget=u(S.target,h),S.delegateTarget&&k.call(f,S)}}n.exports=d},function(n,r){var s=9;if(typeof Element<"u"&&!Element.prototype.matches){var u=Element.prototype;u.matches=u.matchesSelector||u.mozMatchesSelector||u.msMatchesSelector||u.oMatchesSelector||u.webkitMatchesSelector}function i(d,l){for(;d&&d.nodeType!==s;){if(typeof d.matches=="function"&&d.matches(l))return d;d=d.parentNode}}n.exports=i},function(n,r,s){s.r(r);var u=s(0),i=s.n(u),d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},l=function(){function m(g,b){for(var _=0;_<b.length;_++){var v=b[_];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(g,v.key,v)}}return function(g,b,_){return b&&m(g.prototype,b),_&&m(g,_),g}}();function f(m,g){if(!(m instanceof g))throw new TypeError("Cannot call a class as a function")}var h=function(){function m(g){f(this,m),this.resolveOptions(g),this.initSelection()}return l(m,[{key:"resolveOptions",value:function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=b.action,this.container=b.container,this.emitter=b.emitter,this.target=b.target,this.text=b.text,this.trigger=b.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var b=this,_=document.documentElement.getAttribute("dir")=="rtl";this.removeFake(),this.fakeHandlerCallback=function(){return b.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[_?"right":"left"]="-9999px";var v=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=v+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=i()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=i()(this.target),this.copyText()}},{key:"copyText",value:function(){var b=void 0;try{b=document.execCommand(this.action)}catch{b=!1}this.handleResult(b)}},{key:"handleResult",value:function(b){this.emitter.emit(b?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"copy";if(this._action=b,this._action!=="copy"&&this._action!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(b){if(b!==void 0)if(b&&(typeof b>"u"?"undefined":d(b))==="object"&&b.nodeType===1){if(this.action==="copy"&&b.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(this.action==="cut"&&(b.hasAttribute("readonly")||b.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);this._target=b}else throw new Error('Invalid "target" value, use a valid Element')},get:function(){return this._target}}]),m}(),p=h,k=s(1),S=s.n(k),C=s(2),T=s.n(C),V=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},$=function(){function m(g,b){for(var _=0;_<b.length;_++){var v=b[_];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(g,v.key,v)}}return function(g,b,_){return b&&m(g.prototype,b),_&&m(g,_),g}}();function G(m,g){if(!(m instanceof g))throw new TypeError("Cannot call a class as a function")}function Q(m,g){if(!m)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return g&&(typeof g=="object"||typeof g=="function")?g:m}function o(m,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof g);m.prototype=Object.create(g&&g.prototype,{constructor:{value:m,enumerable:!1,writable:!0,configurable:!0}}),g&&(Object.setPrototypeOf?Object.setPrototypeOf(m,g):m.__proto__=g)}var c=function(m){o(g,m);function g(b,_){G(this,g);var v=Q(this,(g.__proto__||Object.getPrototypeOf(g)).call(this));return v.resolveOptions(_),v.listenClick(b),v}return $(g,[{key:"resolveOptions",value:function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof _.action=="function"?_.action:this.defaultAction,this.target=typeof _.target=="function"?_.target:this.defaultTarget,this.text=typeof _.text=="function"?_.text:this.defaultText,this.container=V(_.container)==="object"?_.container:document.body}},{key:"listenClick",value:function(_){var v=this;this.listener=T()(_,"click",function(P){return v.onClick(P)})}},{key:"onClick",value:function(_){var v=_.delegateTarget||_.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new p({action:this.action(v),target:this.target(v),text:this.text(v),container:this.container,trigger:v,emitter:this})}},{key:"defaultAction",value:function(_){return a("action",_)}},{key:"defaultTarget",value:function(_){var v=a("target",_);if(v)return document.querySelector(v)}},{key:"defaultText",value:function(_){return a("text",_)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],v=typeof _=="string"?[_]:_,P=!!document.queryCommandSupported;return v.forEach(function(R){P=P&&!!document.queryCommandSupported(R)}),P}}]),g}(S.a);function a(m,g){var b="data-clipboard-"+m;if(g.hasAttribute(b))return g.getAttribute(b)}r.default=c}]).default})}),ta=kf(Cf);const wr={autoSetContainer:!1,appendToBody:!0},Pf={config:e=>{const{autoSetContainer:t,appendToBody:n}=e;wr.autoSetContainer=t||!1,wr.appendToBody=n||!0},install:e=>{e.config.globalProperties.$vclipboard=ls,e.directive("clipboard",{beforeMount(t,n){if(n.arg==="success")t._vClipboard_success=n.value;else if(n.arg==="error")t._vClipboard_error=n.value;else{const r=new ta(t,{text:()=>n.value,action:()=>n.arg==="cut"?"cut":"copy",container:wr.autoSetContainer?t:void 0});r.on("success",s=>{const u=t._vClipboard_success;u&&u(s)}),r.on("error",s=>{const u=t._vClipboard_error;u&&u(s)}),t._vClipboard=r}},updated(t,n){n.arg==="success"?t._vClipboard_success=n.value:n.arg==="error"?t._vClipboard_error=n.value:(t._vClipboard.text=()=>n.value,t._vClipboard.action=()=>n.arg==="cut"?"cut":"copy")},unmounted(t,n){n.arg==="success"?delete t._vClipboard_success:n.arg==="error"?delete t._vClipboard_error:(t._vClipboard.destroy(),delete t._vClipboard)}})},toClipboard:(e,t)=>ls(e,t)},ls=(e,t="copy")=>new Promise((n,r)=>{const s=document.createElement("button"),u=new ta(s,{text:()=>e,action:()=>t});u.on("success",i=>{u.destroy(),n(i)}),u.on("error",i=>{u.destroy(),r(i)}),wr.appendToBody&&document.body.appendChild(s),s.click(),wr.appendToBody&&document.body.removeChild(s)}),Af={class:"response__item"},Tf=q("div",{class:"head-ico"},null,-1),Rf={class:"item-content"},Of={class:"agent-response"},Mf=q("span",null,"Вывод агента",-1),jf=q("div",{class:"arrow"},[q("svg",{width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[q("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.80113 1.22462L5.48011 5.78989C5.21495 6.07004 4.78505 6.07004 4.51989 5.78989L0.198869 1.22462C-0.0662898 0.944468 -0.0662898 0.490259 0.198869 0.210111C0.464029 -0.0700369 0.893936 -0.0700369 1.1591 0.210111L5 4.26813L8.8409 0.210111C9.10606 -0.0700369 9.53597 -0.0700369 9.80113 0.210111C10.0663 0.490259 10.0663 0.944468 9.80113 1.22462Z",fill:"#00FFFF"})])],-1),Lf=[Mf,jf],Nf={class:"agent-response__content"},If=q("div",{class:"descr"}," Агент, специально созданный для вашей задачи, будет сгенерирован для предоставления наиболее точных и релевантных результатов исследования. ",-1),Ff=q("hr",null,null,-1),Bf=["innerHTML"],zf={key:0},$f={class:"agent-report"},Hf={class:"agent-report__content"},Df=q("div",{class:"agent-report__title"},"Исследовательский отчет",-1),Uf=["innerHTML"],Vf={key:0,class:"agent-report-btns"},xf=["href"],qf=["href"],Wf={key:1,class:"agent-status"},Kf=q("div",{class:"status-ico"},[q("span"),q("span"),q("span"),q("span"),q("span")],-1),Gf=q("div",{class:"status-text"},"Подождите, идет генерация исследования",-1),Jf=[Kf,Gf],Zf={key:1,class:"agent-report"},Xf={__name:"AiAnswer",props:{message:Object,searchInProgress:Boolean},emits:["regenerateResponse"],setup(e,{emit:t}){const n=e,r=()=>{n.searchInProgress||s("regenerateResponse",n.message.id)},s=t,u=()=>{ls(n.message.report.text)};return(i,d)=>(Re(),Ie("div",Af,[Tf,q("div",Rf,[q("div",Of,[q("div",{class:nt(["agent-response__head",{open:n.message.showAgentResponce}]),onClick:d[0]||(d[0]=l=>n.message.showAgentResponce=!n.message.showAgentResponce)},Lf,2),q("div",Nf,[ye(st(fo),{modelValue:n.message.showAgentResponce,"onUpdate:modelValue":d[1]||(d[1]=l=>n.message.showAgentResponce=l)},{default:At(()=>[If,Ff,q("div",{class:"agent-response__inner",innerHTML:n.message.agentResponce},null,8,Bf)]),_:1},8,["modelValue"])])]),n.message.messageStatus!="error"?(Re(),Ie("div",zf,[ye(st(fo),{modelValue:n.message.report.hasReport,"onUpdate:modelValue":d[2]||(d[2]=l=>n.message.report.hasReport=l)},{default:At(()=>[q("div",$f,[q("div",Hf,[Df,q("div",{innerHTML:n.message.report.value},null,8,Uf)])])]),_:1},8,["modelValue"]),n.message.messageStatus=="finished"?(Re(),Ie("div",Vf,[q("div",{class:"agent-report-btn _clipboard",onClick:u}," скопировать в буфер обмена "),e.message.btns.pdf?(Re(),Ie("a",{key:0,href:e.message.btns.pdf,target:"_blank",class:"agent-report-btn _pdf",download:""},"скачать pdf",8,xf)):zt("",!0),e.message.btns.docx?(Re(),Ie("a",{key:1,href:e.message.btns.docx,target:"_blank",class:"agent-report-btn _docs",download:""},"скачать docx",8,qf)):zt("",!0)])):zt("",!0),n.message.messageStatus!="finished"?(Re(),Ie("div",Wf,Jf)):zt("",!0)])):(Re(),Ie("div",Zf,[q("h1",null,' Попробуйте сгенерировать запрос "'+Mo(n.message.requestMessage)+'" снова ',1),q("button",{class:nt([{blocked:n.searchInProgress},"form-btn"]),type:"button",onClick:r}," СГЕНЕРИРОВАТЬ ",2)]))])]))}};var Qf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Yf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ra={exports:{}};(function(e){(function(){function t(o){var c={omitExtraWLInCodeBlocks:{defaultValue:!1,describe:"Omit the default extra whiteline added to code blocks",type:"boolean"},noHeaderId:{defaultValue:!1,describe:"Turn on/off generated header id",type:"boolean"},prefixHeaderId:{defaultValue:!1,describe:"Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",type:"string"},rawPrefixHeaderId:{defaultValue:!1,describe:'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',type:"boolean"},ghCompatibleHeaderId:{defaultValue:!1,describe:"Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",type:"boolean"},rawHeaderId:{defaultValue:!1,describe:`Remove only spaces, ' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids`,type:"boolean"},headerLevelStart:{defaultValue:!1,describe:"The header blocks level start",type:"integer"},parseImgDimensions:{defaultValue:!1,describe:"Turn on/off image dimension parsing",type:"boolean"},simplifiedAutoLink:{defaultValue:!1,describe:"Turn on/off GFM autolink style",type:"boolean"},excludeTrailingPunctuationFromURLs:{defaultValue:!1,describe:"Excludes trailing punctuation from links generated with autoLinking",type:"boolean"},literalMidWordUnderscores:{defaultValue:!1,describe:"Parse midword underscores as literal underscores",type:"boolean"},literalMidWordAsterisks:{defaultValue:!1,describe:"Parse midword asterisks as literal asterisks",type:"boolean"},strikethrough:{defaultValue:!1,describe:"Turn on/off strikethrough support",type:"boolean"},tables:{defaultValue:!1,describe:"Turn on/off tables support",type:"boolean"},tablesHeaderId:{defaultValue:!1,describe:"Add an id to table headers",type:"boolean"},ghCodeBlocks:{defaultValue:!0,describe:"Turn on/off GFM fenced code blocks support",type:"boolean"},tasklists:{defaultValue:!1,describe:"Turn on/off GFM tasklist support",type:"boolean"},smoothLivePreview:{defaultValue:!1,describe:"Prevents weird effects in live previews due to incomplete input",type:"boolean"},smartIndentationFix:{defaultValue:!1,describe:"Tries to smartly fix indentation in es6 strings",type:"boolean"},disableForced4SpacesIndentedSublists:{defaultValue:!1,describe:"Disables the requirement of indenting nested sublists by 4 spaces",type:"boolean"},simpleLineBreaks:{defaultValue:!1,describe:"Parses simple line breaks as <br> (GFM Style)",type:"boolean"},requireSpaceBeforeHeadingText:{defaultValue:!1,describe:"Makes adding a space between `#` and the header text mandatory (GFM Style)",type:"boolean"},ghMentions:{defaultValue:!1,describe:"Enables github @mentions",type:"boolean"},ghMentionsLink:{defaultValue:"https://github.com/{u}",describe:"Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",type:"string"},encodeEmails:{defaultValue:!0,describe:"Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",type:"boolean"},openLinksInNewWindow:{defaultValue:!1,describe:"Open all links in new windows",type:"boolean"},backslashEscapesHTMLTags:{defaultValue:!1,describe:"Support for HTML Tag escaping. ex: <div>foo</div>",type:"boolean"},emoji:{defaultValue:!1,describe:"Enable emoji support. Ex: `this is a :smile: emoji`",type:"boolean"},underline:{defaultValue:!1,describe:"Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",type:"boolean"},ellipsis:{defaultValue:!0,describe:"Replaces three dots with the ellipsis unicode character",type:"boolean"},completeHTMLDocument:{defaultValue:!1,describe:"Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",type:"boolean"},metadata:{defaultValue:!1,describe:"Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",type:"boolean"},splitAdjacentBlockquotes:{defaultValue:!1,describe:"Split adjacent blockquote blocks",type:"boolean"}};if(o===!1)return JSON.parse(JSON.stringify(c));var a={};for(var m in c)c.hasOwnProperty(m)&&(a[m]=c[m].defaultValue);return a}function n(){var o=t(!0),c={};for(var a in o)o.hasOwnProperty(a)&&(c[a]=!0);return c}var r={},s={},u={},i=t(!0),d="vanilla",l={github:{omitExtraWLInCodeBlocks:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,disableForced4SpacesIndentedSublists:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghCompatibleHeaderId:!0,ghMentions:!0,backslashEscapesHTMLTags:!0,emoji:!0,splitAdjacentBlockquotes:!0},original:{noHeaderId:!0,ghCodeBlocks:!1},ghost:{omitExtraWLInCodeBlocks:!0,parseImgDimensions:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,smoothLivePreview:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghMentions:!1,encodeEmails:!0},vanilla:t(!0),allOn:n()};r.helper={},r.extensions={},r.setOption=function(o,c){return i[o]=c,this},r.getOption=function(o){return i[o]},r.getOptions=function(){return i},r.resetOptions=function(){i=t(!0)},r.setFlavor=function(o){if(!l.hasOwnProperty(o))throw Error(o+" flavor was not found");r.resetOptions();var c=l[o];d=o;for(var a in c)c.hasOwnProperty(a)&&(i[a]=c[a])},r.getFlavor=function(){return d},r.getFlavorOptions=function(o){if(l.hasOwnProperty(o))return l[o]},r.getDefaultOptions=function(o){return t(o)},r.subParser=function(o,c){if(r.helper.isString(o))if(typeof c<"u")s[o]=c;else{if(s.hasOwnProperty(o))return s[o];throw Error("SubParser named "+o+" not registered!")}},r.extension=function(o,c){if(!r.helper.isString(o))throw Error("Extension 'name' must be a string");if(o=r.helper.stdExtName(o),r.helper.isUndefined(c)){if(!u.hasOwnProperty(o))throw Error("Extension named "+o+" is not registered!");return u[o]}else{typeof c=="function"&&(c=c()),r.helper.isArray(c)||(c=[c]);var a=f(c,o);if(a.valid)u[o]=c;else throw Error(a.error)}},r.getAllExtensions=function(){return u},r.removeExtension=function(o){delete u[o]},r.resetExtensions=function(){u={}};function f(o,c){var a=c?"Error in "+c+" extension->":"Error in unnamed extension",m={valid:!0,error:""};r.helper.isArray(o)||(o=[o]);for(var g=0;g<o.length;++g){var b=a+" sub-extension "+g+": ",_=o[g];if(typeof _!="object")return m.valid=!1,m.error=b+"must be an object, but "+typeof _+" given",m;if(!r.helper.isString(_.type))return m.valid=!1,m.error=b+'property "type" must be a string, but '+typeof _.type+" given",m;var v=_.type=_.type.toLowerCase();if(v==="language"&&(v=_.type="lang"),v==="html"&&(v=_.type="output"),v!=="lang"&&v!=="output"&&v!=="listener")return m.valid=!1,m.error=b+"type "+v+' is not recognized. Valid values: "lang/language", "output/html" or "listener"',m;if(v==="listener"){if(r.helper.isUndefined(_.listeners))return m.valid=!1,m.error=b+'. Extensions of type "listener" must have a property called "listeners"',m}else if(r.helper.isUndefined(_.filter)&&r.helper.isUndefined(_.regex))return m.valid=!1,m.error=b+v+' extensions must define either a "regex" property or a "filter" method',m;if(_.listeners){if(typeof _.listeners!="object")return m.valid=!1,m.error=b+'"listeners" property must be an object but '+typeof _.listeners+" given",m;for(var P in _.listeners)if(_.listeners.hasOwnProperty(P)&&typeof _.listeners[P]!="function")return m.valid=!1,m.error=b+'"listeners" property must be an hash of [event name]: [callback]. listeners.'+P+" must be a function but "+typeof _.listeners[P]+" given",m}if(_.filter){if(typeof _.filter!="function")return m.valid=!1,m.error=b+'"filter" must be a function, but '+typeof _.filter+" given",m}else if(_.regex){if(r.helper.isString(_.regex)&&(_.regex=new RegExp(_.regex,"g")),!(_.regex instanceof RegExp))return m.valid=!1,m.error=b+'"regex" property must either be a string or a RegExp object, but '+typeof _.regex+" given",m;if(r.helper.isUndefined(_.replace))return m.valid=!1,m.error=b+'"regex" extensions must implement a replace string or function',m}}return m}r.validateExtension=function(o){var c=f(o,null);return c.valid?!0:(console.warn(c.error),!1)},r.hasOwnProperty("helper")||(r.helper={}),r.helper.isString=function(o){return typeof o=="string"||o instanceof String},r.helper.isFunction=function(o){var c={};return o&&c.toString.call(o)==="[object Function]"},r.helper.isArray=function(o){return Array.isArray(o)},r.helper.isUndefined=function(o){return typeof o>"u"},r.helper.forEach=function(o,c){if(r.helper.isUndefined(o))throw new Error("obj param is required");if(r.helper.isUndefined(c))throw new Error("callback param is required");if(!r.helper.isFunction(c))throw new Error("callback param must be a function/closure");if(typeof o.forEach=="function")o.forEach(c);else if(r.helper.isArray(o))for(var a=0;a<o.length;a++)c(o[a],a,o);else if(typeof o=="object")for(var m in o)o.hasOwnProperty(m)&&c(o[m],m,o);else throw new Error("obj does not seem to be an array or an iterable object")},r.helper.stdExtName=function(o){return o.replace(/[_?*+\/\\.^-]/g,"").replace(/\s/g,"").toLowerCase()};function h(o,c){var a=c.charCodeAt(0);return"¨E"+a+"E"}r.helper.escapeCharactersCallback=h,r.helper.escapeCharacters=function(o,c,a){var m="(["+c.replace(/([\[\]\\])/g,"\\$1")+"])";a&&(m="\\\\"+m);var g=new RegExp(m,"g");return o=o.replace(g,h),o},r.helper.unescapeHTMLEntities=function(o){return o.replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")};var p=function(o,c,a,m){var g=m||"",b=g.indexOf("g")>-1,_=new RegExp(c+"|"+a,"g"+g.replace(/g/g,"")),v=new RegExp(c,g.replace(/g/g,"")),P=[],R,j,I,w,O;do for(R=0;I=_.exec(o);)if(v.test(I[0]))R++||(j=_.lastIndex,w=j-I[0].length);else if(R&&!--R){O=I.index+I[0].length;var B={left:{start:w,end:j},match:{start:j,end:I.index},right:{start:I.index,end:O},wholeMatch:{start:w,end:O}};if(P.push(B),!b)return P}while(R&&(_.lastIndex=j));return P};r.helper.matchRecursiveRegExp=function(o,c,a,m){for(var g=p(o,c,a,m),b=[],_=0;_<g.length;++_)b.push([o.slice(g[_].wholeMatch.start,g[_].wholeMatch.end),o.slice(g[_].match.start,g[_].match.end),o.slice(g[_].left.start,g[_].left.end),o.slice(g[_].right.start,g[_].right.end)]);return b},r.helper.replaceRecursiveRegExp=function(o,c,a,m,g){if(!r.helper.isFunction(c)){var b=c;c=function(){return b}}var _=p(o,a,m,g),v=o,P=_.length;if(P>0){var R=[];_[0].wholeMatch.start!==0&&R.push(o.slice(0,_[0].wholeMatch.start));for(var j=0;j<P;++j)R.push(c(o.slice(_[j].wholeMatch.start,_[j].wholeMatch.end),o.slice(_[j].match.start,_[j].match.end),o.slice(_[j].left.start,_[j].left.end),o.slice(_[j].right.start,_[j].right.end))),j<P-1&&R.push(o.slice(_[j].wholeMatch.end,_[j+1].wholeMatch.start));_[P-1].wholeMatch.end<o.length&&R.push(o.slice(_[P-1].wholeMatch.end)),v=R.join("")}return v},r.helper.regexIndexOf=function(o,c,a){if(!r.helper.isString(o))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";if(!(c instanceof RegExp))throw"InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";var m=o.substring(a||0).search(c);return m>=0?m+(a||0):m},r.helper.splitAtIndex=function(o,c){if(!r.helper.isString(o))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";return[o.substring(0,c),o.substring(c)]},r.helper.encodeEmailAddress=function(o){var c=[function(a){return"&#"+a.charCodeAt(0)+";"},function(a){return"&#x"+a.charCodeAt(0).toString(16)+";"},function(a){return a}];return o=o.replace(/./g,function(a){if(a==="@")a=c[Math.floor(Math.random()*2)](a);else{var m=Math.random();a=m>.9?c[2](a):m>.45?c[1](a):c[0](a)}return a}),o},r.helper.padEnd=function(c,a,m){return a=a>>0,m=String(m||" "),c.length>a?String(c):(a=a-c.length,a>m.length&&(m+=m.repeat(a/m.length)),String(c)+m.slice(0,a))},typeof console>"u"&&(console={warn:function(o){alert(o)},log:function(o){alert(o)},error:function(o){throw o}}),r.helper.regexes={asteriskDashAndColon:/([*_:~])/g},r.helper.emojis={"+1":"👍","-1":"👎",100:"💯",1234:"🔢","1st_place_medal":"🥇","2nd_place_medal":"🥈","3rd_place_medal":"🥉","8ball":"🎱",a:"🅰️",ab:"🆎",abc:"🔤",abcd:"🔡",accept:"🉑",aerial_tramway:"🚡",airplane:"✈️",alarm_clock:"⏰",alembic:"⚗️",alien:"👽",ambulance:"🚑",amphora:"🏺",anchor:"⚓️",angel:"👼",anger:"💢",angry:"😠",anguished:"😧",ant:"🐜",apple:"🍎",aquarius:"♒️",aries:"♈️",arrow_backward:"◀️",arrow_double_down:"⏬",arrow_double_up:"⏫",arrow_down:"⬇️",arrow_down_small:"🔽",arrow_forward:"▶️",arrow_heading_down:"⤵️",arrow_heading_up:"⤴️",arrow_left:"⬅️",arrow_lower_left:"↙️",arrow_lower_right:"↘️",arrow_right:"➡️",arrow_right_hook:"↪️",arrow_up:"⬆️",arrow_up_down:"↕️",arrow_up_small:"🔼",arrow_upper_left:"↖️",arrow_upper_right:"↗️",arrows_clockwise:"🔃",arrows_counterclockwise:"🔄",art:"🎨",articulated_lorry:"🚛",artificial_satellite:"🛰",astonished:"😲",athletic_shoe:"👟",atm:"🏧",atom_symbol:"⚛️",avocado:"🥑",b:"🅱️",baby:"👶",baby_bottle:"🍼",baby_chick:"🐤",baby_symbol:"🚼",back:"🔙",bacon:"🥓",badminton:"🏸",baggage_claim:"🛄",baguette_bread:"🥖",balance_scale:"⚖️",balloon:"🎈",ballot_box:"🗳",ballot_box_with_check:"☑️",bamboo:"🎍",banana:"🍌",bangbang:"‼️",bank:"🏦",bar_chart:"📊",barber:"💈",baseball:"⚾️",basketball:"🏀",basketball_man:"⛹️",basketball_woman:"⛹️&zwj;♀️",bat:"🦇",bath:"🛀",bathtub:"🛁",battery:"🔋",beach_umbrella:"🏖",bear:"🐻",bed:"🛏",bee:"🐝",beer:"🍺",beers:"🍻",beetle:"🐞",beginner:"🔰",bell:"🔔",bellhop_bell:"🛎",bento:"🍱",biking_man:"🚴",bike:"🚲",biking_woman:"🚴&zwj;♀️",bikini:"👙",biohazard:"☣️",bird:"🐦",birthday:"🎂",black_circle:"⚫️",black_flag:"🏴",black_heart:"🖤",black_joker:"🃏",black_large_square:"⬛️",black_medium_small_square:"◾️",black_medium_square:"◼️",black_nib:"✒️",black_small_square:"▪️",black_square_button:"🔲",blonde_man:"👱",blonde_woman:"👱&zwj;♀️",blossom:"🌼",blowfish:"🐡",blue_book:"📘",blue_car:"🚙",blue_heart:"💙",blush:"😊",boar:"🐗",boat:"⛵️",bomb:"💣",book:"📖",bookmark:"🔖",bookmark_tabs:"📑",books:"📚",boom:"💥",boot:"👢",bouquet:"💐",bowing_man:"🙇",bow_and_arrow:"🏹",bowing_woman:"🙇&zwj;♀️",bowling:"🎳",boxing_glove:"🥊",boy:"👦",bread:"🍞",bride_with_veil:"👰",bridge_at_night:"🌉",briefcase:"💼",broken_heart:"💔",bug:"🐛",building_construction:"🏗",bulb:"💡",bullettrain_front:"🚅",bullettrain_side:"🚄",burrito:"🌯",bus:"🚌",business_suit_levitating:"🕴",busstop:"🚏",bust_in_silhouette:"👤",busts_in_silhouette:"👥",butterfly:"🦋",cactus:"🌵",cake:"🍰",calendar:"📆",call_me_hand:"🤙",calling:"📲",camel:"🐫",camera:"📷",camera_flash:"📸",camping:"🏕",cancer:"♋️",candle:"🕯",candy:"🍬",canoe:"🛶",capital_abcd:"🔠",capricorn:"♑️",car:"🚗",card_file_box:"🗃",card_index:"📇",card_index_dividers:"🗂",carousel_horse:"🎠",carrot:"🥕",cat:"🐱",cat2:"🐈",cd:"💿",chains:"⛓",champagne:"🍾",chart:"💹",chart_with_downwards_trend:"📉",chart_with_upwards_trend:"📈",checkered_flag:"🏁",cheese:"🧀",cherries:"🍒",cherry_blossom:"🌸",chestnut:"🌰",chicken:"🐔",children_crossing:"🚸",chipmunk:"🐿",chocolate_bar:"🍫",christmas_tree:"🎄",church:"⛪️",cinema:"🎦",circus_tent:"🎪",city_sunrise:"🌇",city_sunset:"🌆",cityscape:"🏙",cl:"🆑",clamp:"🗜",clap:"👏",clapper:"🎬",classical_building:"🏛",clinking_glasses:"🥂",clipboard:"📋",clock1:"🕐",clock10:"🕙",clock1030:"🕥",clock11:"🕚",clock1130:"🕦",clock12:"🕛",clock1230:"🕧",clock130:"🕜",clock2:"🕑",clock230:"🕝",clock3:"🕒",clock330:"🕞",clock4:"🕓",clock430:"🕟",clock5:"🕔",clock530:"🕠",clock6:"🕕",clock630:"🕡",clock7:"🕖",clock730:"🕢",clock8:"🕗",clock830:"🕣",clock9:"🕘",clock930:"🕤",closed_book:"📕",closed_lock_with_key:"🔐",closed_umbrella:"🌂",cloud:"☁️",cloud_with_lightning:"🌩",cloud_with_lightning_and_rain:"⛈",cloud_with_rain:"🌧",cloud_with_snow:"🌨",clown_face:"🤡",clubs:"♣️",cocktail:"🍸",coffee:"☕️",coffin:"⚰️",cold_sweat:"😰",comet:"☄️",computer:"💻",computer_mouse:"🖱",confetti_ball:"🎊",confounded:"😖",confused:"😕",congratulations:"㊗️",construction:"🚧",construction_worker_man:"👷",construction_worker_woman:"👷&zwj;♀️",control_knobs:"🎛",convenience_store:"🏪",cookie:"🍪",cool:"🆒",policeman:"👮",copyright:"©️",corn:"🌽",couch_and_lamp:"🛋",couple:"👫",couple_with_heart_woman_man:"💑",couple_with_heart_man_man:"👨&zwj;❤️&zwj;👨",couple_with_heart_woman_woman:"👩&zwj;❤️&zwj;👩",couplekiss_man_man:"👨&zwj;❤️&zwj;💋&zwj;👨",couplekiss_man_woman:"💏",couplekiss_woman_woman:"👩&zwj;❤️&zwj;💋&zwj;👩",cow:"🐮",cow2:"🐄",cowboy_hat_face:"🤠",crab:"🦀",crayon:"🖍",credit_card:"💳",crescent_moon:"🌙",cricket:"🏏",crocodile:"🐊",croissant:"🥐",crossed_fingers:"🤞",crossed_flags:"🎌",crossed_swords:"⚔️",crown:"👑",cry:"😢",crying_cat_face:"😿",crystal_ball:"🔮",cucumber:"🥒",cupid:"💘",curly_loop:"➰",currency_exchange:"💱",curry:"🍛",custard:"🍮",customs:"🛃",cyclone:"🌀",dagger:"🗡",dancer:"💃",dancing_women:"👯",dancing_men:"👯&zwj;♂️",dango:"🍡",dark_sunglasses:"🕶",dart:"🎯",dash:"💨",date:"📅",deciduous_tree:"🌳",deer:"🦌",department_store:"🏬",derelict_house:"🏚",desert:"🏜",desert_island:"🏝",desktop_computer:"🖥",male_detective:"🕵️",diamond_shape_with_a_dot_inside:"💠",diamonds:"♦️",disappointed:"😞",disappointed_relieved:"😥",dizzy:"💫",dizzy_face:"😵",do_not_litter:"🚯",dog:"🐶",dog2:"🐕",dollar:"💵",dolls:"🎎",dolphin:"🐬",door:"🚪",doughnut:"🍩",dove:"🕊",dragon:"🐉",dragon_face:"🐲",dress:"👗",dromedary_camel:"🐪",drooling_face:"🤤",droplet:"💧",drum:"🥁",duck:"🦆",dvd:"📀","e-mail":"📧",eagle:"🦅",ear:"👂",ear_of_rice:"🌾",earth_africa:"🌍",earth_americas:"🌎",earth_asia:"🌏",egg:"🥚",eggplant:"🍆",eight_pointed_black_star:"✴️",eight_spoked_asterisk:"✳️",electric_plug:"🔌",elephant:"🐘",email:"✉️",end:"🔚",envelope_with_arrow:"📩",euro:"💶",european_castle:"🏰",european_post_office:"🏤",evergreen_tree:"🌲",exclamation:"❗️",expressionless:"😑",eye:"👁",eye_speech_bubble:"👁&zwj;🗨",eyeglasses:"👓",eyes:"👀",face_with_head_bandage:"🤕",face_with_thermometer:"🤒",fist_oncoming:"👊",factory:"🏭",fallen_leaf:"🍂",family_man_woman_boy:"👪",family_man_boy:"👨&zwj;👦",family_man_boy_boy:"👨&zwj;👦&zwj;👦",family_man_girl:"👨&zwj;👧",family_man_girl_boy:"👨&zwj;👧&zwj;👦",family_man_girl_girl:"👨&zwj;👧&zwj;👧",family_man_man_boy:"👨&zwj;👨&zwj;👦",family_man_man_boy_boy:"👨&zwj;👨&zwj;👦&zwj;👦",family_man_man_girl:"👨&zwj;👨&zwj;👧",family_man_man_girl_boy:"👨&zwj;👨&zwj;👧&zwj;👦",family_man_man_girl_girl:"👨&zwj;👨&zwj;👧&zwj;👧",family_man_woman_boy_boy:"👨&zwj;👩&zwj;👦&zwj;👦",family_man_woman_girl:"👨&zwj;👩&zwj;👧",family_man_woman_girl_boy:"👨&zwj;👩&zwj;👧&zwj;👦",family_man_woman_girl_girl:"👨&zwj;👩&zwj;👧&zwj;👧",family_woman_boy:"👩&zwj;👦",family_woman_boy_boy:"👩&zwj;👦&zwj;👦",family_woman_girl:"👩&zwj;👧",family_woman_girl_boy:"👩&zwj;👧&zwj;👦",family_woman_girl_girl:"👩&zwj;👧&zwj;👧",family_woman_woman_boy:"👩&zwj;👩&zwj;👦",family_woman_woman_boy_boy:"👩&zwj;👩&zwj;👦&zwj;👦",family_woman_woman_girl:"👩&zwj;👩&zwj;👧",family_woman_woman_girl_boy:"👩&zwj;👩&zwj;👧&zwj;👦",family_woman_woman_girl_girl:"👩&zwj;👩&zwj;👧&zwj;👧",fast_forward:"⏩",fax:"📠",fearful:"😨",feet:"🐾",female_detective:"🕵️&zwj;♀️",ferris_wheel:"🎡",ferry:"⛴",field_hockey:"🏑",file_cabinet:"🗄",file_folder:"📁",film_projector:"📽",film_strip:"🎞",fire:"🔥",fire_engine:"🚒",fireworks:"🎆",first_quarter_moon:"🌓",first_quarter_moon_with_face:"🌛",fish:"🐟",fish_cake:"🍥",fishing_pole_and_fish:"🎣",fist_raised:"✊",fist_left:"🤛",fist_right:"🤜",flags:"🎏",flashlight:"🔦",fleur_de_lis:"⚜️",flight_arrival:"🛬",flight_departure:"🛫",floppy_disk:"💾",flower_playing_cards:"🎴",flushed:"😳",fog:"🌫",foggy:"🌁",football:"🏈",footprints:"👣",fork_and_knife:"🍴",fountain:"⛲️",fountain_pen:"🖋",four_leaf_clover:"🍀",fox_face:"🦊",framed_picture:"🖼",free:"🆓",fried_egg:"🍳",fried_shrimp:"🍤",fries:"🍟",frog:"🐸",frowning:"😦",frowning_face:"☹️",frowning_man:"🙍&zwj;♂️",frowning_woman:"🙍",middle_finger:"🖕",fuelpump:"⛽️",full_moon:"🌕",full_moon_with_face:"🌝",funeral_urn:"⚱️",game_die:"🎲",gear:"⚙️",gem:"💎",gemini:"♊️",ghost:"👻",gift:"🎁",gift_heart:"💝",girl:"👧",globe_with_meridians:"🌐",goal_net:"🥅",goat:"🐐",golf:"⛳️",golfing_man:"🏌️",golfing_woman:"🏌️&zwj;♀️",gorilla:"🦍",grapes:"🍇",green_apple:"🍏",green_book:"📗",green_heart:"💚",green_salad:"🥗",grey_exclamation:"❕",grey_question:"❔",grimacing:"😬",grin:"😁",grinning:"😀",guardsman:"💂",guardswoman:"💂&zwj;♀️",guitar:"🎸",gun:"🔫",haircut_woman:"💇",haircut_man:"💇&zwj;♂️",hamburger:"🍔",hammer:"🔨",hammer_and_pick:"⚒",hammer_and_wrench:"🛠",hamster:"🐹",hand:"✋",handbag:"👜",handshake:"🤝",hankey:"💩",hatched_chick:"🐥",hatching_chick:"🐣",headphones:"🎧",hear_no_evil:"🙉",heart:"❤️",heart_decoration:"💟",heart_eyes:"😍",heart_eyes_cat:"😻",heartbeat:"💓",heartpulse:"💗",hearts:"♥️",heavy_check_mark:"✔️",heavy_division_sign:"➗",heavy_dollar_sign:"💲",heavy_heart_exclamation:"❣️",heavy_minus_sign:"➖",heavy_multiplication_x:"✖️",heavy_plus_sign:"➕",helicopter:"🚁",herb:"🌿",hibiscus:"🌺",high_brightness:"🔆",high_heel:"👠",hocho:"🔪",hole:"🕳",honey_pot:"🍯",horse:"🐴",horse_racing:"🏇",hospital:"🏥",hot_pepper:"🌶",hotdog:"🌭",hotel:"🏨",hotsprings:"♨️",hourglass:"⌛️",hourglass_flowing_sand:"⏳",house:"🏠",house_with_garden:"🏡",houses:"🏘",hugs:"🤗",hushed:"😯",ice_cream:"🍨",ice_hockey:"🏒",ice_skate:"⛸",icecream:"🍦",id:"🆔",ideograph_advantage:"🉐",imp:"👿",inbox_tray:"📥",incoming_envelope:"📨",tipping_hand_woman:"💁",information_source:"ℹ️",innocent:"😇",interrobang:"⁉️",iphone:"📱",izakaya_lantern:"🏮",jack_o_lantern:"🎃",japan:"🗾",japanese_castle:"🏯",japanese_goblin:"👺",japanese_ogre:"👹",jeans:"👖",joy:"😂",joy_cat:"😹",joystick:"🕹",kaaba:"🕋",key:"🔑",keyboard:"⌨️",keycap_ten:"🔟",kick_scooter:"🛴",kimono:"👘",kiss:"💋",kissing:"😗",kissing_cat:"😽",kissing_closed_eyes:"😚",kissing_heart:"😘",kissing_smiling_eyes:"😙",kiwi_fruit:"🥝",koala:"🐨",koko:"🈁",label:"🏷",large_blue_circle:"🔵",large_blue_diamond:"🔷",large_orange_diamond:"🔶",last_quarter_moon:"🌗",last_quarter_moon_with_face:"🌜",latin_cross:"✝️",laughing:"😆",leaves:"🍃",ledger:"📒",left_luggage:"🛅",left_right_arrow:"↔️",leftwards_arrow_with_hook:"↩️",lemon:"🍋",leo:"♌️",leopard:"🐆",level_slider:"🎚",libra:"♎️",light_rail:"🚈",link:"🔗",lion:"🦁",lips:"👄",lipstick:"💄",lizard:"🦎",lock:"🔒",lock_with_ink_pen:"🔏",lollipop:"🍭",loop:"➿",loud_sound:"🔊",loudspeaker:"📢",love_hotel:"🏩",love_letter:"💌",low_brightness:"🔅",lying_face:"🤥",m:"Ⓜ️",mag:"🔍",mag_right:"🔎",mahjong:"🀄️",mailbox:"📫",mailbox_closed:"📪",mailbox_with_mail:"📬",mailbox_with_no_mail:"📭",man:"👨",man_artist:"👨&zwj;🎨",man_astronaut:"👨&zwj;🚀",man_cartwheeling:"🤸&zwj;♂️",man_cook:"👨&zwj;🍳",man_dancing:"🕺",man_facepalming:"🤦&zwj;♂️",man_factory_worker:"👨&zwj;🏭",man_farmer:"👨&zwj;🌾",man_firefighter:"👨&zwj;🚒",man_health_worker:"👨&zwj;⚕️",man_in_tuxedo:"🤵",man_judge:"👨&zwj;⚖️",man_juggling:"🤹&zwj;♂️",man_mechanic:"👨&zwj;🔧",man_office_worker:"👨&zwj;💼",man_pilot:"👨&zwj;✈️",man_playing_handball:"🤾&zwj;♂️",man_playing_water_polo:"🤽&zwj;♂️",man_scientist:"👨&zwj;🔬",man_shrugging:"🤷&zwj;♂️",man_singer:"👨&zwj;🎤",man_student:"👨&zwj;🎓",man_teacher:"👨&zwj;🏫",man_technologist:"👨&zwj;💻",man_with_gua_pi_mao:"👲",man_with_turban:"👳",tangerine:"🍊",mans_shoe:"👞",mantelpiece_clock:"🕰",maple_leaf:"🍁",martial_arts_uniform:"🥋",mask:"😷",massage_woman:"💆",massage_man:"💆&zwj;♂️",meat_on_bone:"🍖",medal_military:"🎖",medal_sports:"🏅",mega:"📣",melon:"🍈",memo:"📝",men_wrestling:"🤼&zwj;♂️",menorah:"🕎",mens:"🚹",metal:"🤘",metro:"🚇",microphone:"🎤",microscope:"🔬",milk_glass:"🥛",milky_way:"🌌",minibus:"🚐",minidisc:"💽",mobile_phone_off:"📴",money_mouth_face:"🤑",money_with_wings:"💸",moneybag:"💰",monkey:"🐒",monkey_face:"🐵",monorail:"🚝",moon:"🌔",mortar_board:"🎓",mosque:"🕌",motor_boat:"🛥",motor_scooter:"🛵",motorcycle:"🏍",motorway:"🛣",mount_fuji:"🗻",mountain:"⛰",mountain_biking_man:"🚵",mountain_biking_woman:"🚵&zwj;♀️",mountain_cableway:"🚠",mountain_railway:"🚞",mountain_snow:"🏔",mouse:"🐭",mouse2:"🐁",movie_camera:"🎥",moyai:"🗿",mrs_claus:"🤶",muscle:"💪",mushroom:"🍄",musical_keyboard:"🎹",musical_note:"🎵",musical_score:"🎼",mute:"🔇",nail_care:"💅",name_badge:"📛",national_park:"🏞",nauseated_face:"🤢",necktie:"👔",negative_squared_cross_mark:"❎",nerd_face:"🤓",neutral_face:"😐",new:"🆕",new_moon:"🌑",new_moon_with_face:"🌚",newspaper:"📰",newspaper_roll:"🗞",next_track_button:"⏭",ng:"🆖",no_good_man:"🙅&zwj;♂️",no_good_woman:"🙅",night_with_stars:"🌃",no_bell:"🔕",no_bicycles:"🚳",no_entry:"⛔️",no_entry_sign:"🚫",no_mobile_phones:"📵",no_mouth:"😶",no_pedestrians:"🚷",no_smoking:"🚭","non-potable_water":"🚱",nose:"👃",notebook:"📓",notebook_with_decorative_cover:"📔",notes:"🎶",nut_and_bolt:"🔩",o:"⭕️",o2:"🅾️",ocean:"🌊",octopus:"🐙",oden:"🍢",office:"🏢",oil_drum:"🛢",ok:"🆗",ok_hand:"👌",ok_man:"🙆&zwj;♂️",ok_woman:"🙆",old_key:"🗝",older_man:"👴",older_woman:"👵",om:"🕉",on:"🔛",oncoming_automobile:"🚘",oncoming_bus:"🚍",oncoming_police_car:"🚔",oncoming_taxi:"🚖",open_file_folder:"📂",open_hands:"👐",open_mouth:"😮",open_umbrella:"☂️",ophiuchus:"⛎",orange_book:"📙",orthodox_cross:"☦️",outbox_tray:"📤",owl:"🦉",ox:"🐂",package:"📦",page_facing_up:"📄",page_with_curl:"📃",pager:"📟",paintbrush:"🖌",palm_tree:"🌴",pancakes:"🥞",panda_face:"🐼",paperclip:"📎",paperclips:"🖇",parasol_on_ground:"⛱",parking:"🅿️",part_alternation_mark:"〽️",partly_sunny:"⛅️",passenger_ship:"🛳",passport_control:"🛂",pause_button:"⏸",peace_symbol:"☮️",peach:"🍑",peanuts:"🥜",pear:"🍐",pen:"🖊",pencil2:"✏️",penguin:"🐧",pensive:"😔",performing_arts:"🎭",persevere:"😣",person_fencing:"🤺",pouting_woman:"🙎",phone:"☎️",pick:"⛏",pig:"🐷",pig2:"🐖",pig_nose:"🐽",pill:"💊",pineapple:"🍍",ping_pong:"🏓",pisces:"♓️",pizza:"🍕",place_of_worship:"🛐",plate_with_cutlery:"🍽",play_or_pause_button:"⏯",point_down:"👇",point_left:"👈",point_right:"👉",point_up:"☝️",point_up_2:"👆",police_car:"🚓",policewoman:"👮&zwj;♀️",poodle:"🐩",popcorn:"🍿",post_office:"🏣",postal_horn:"📯",postbox:"📮",potable_water:"🚰",potato:"🥔",pouch:"👝",poultry_leg:"🍗",pound:"💷",rage:"😡",pouting_cat:"😾",pouting_man:"🙎&zwj;♂️",pray:"🙏",prayer_beads:"📿",pregnant_woman:"🤰",previous_track_button:"⏮",prince:"🤴",princess:"👸",printer:"🖨",purple_heart:"💜",purse:"👛",pushpin:"📌",put_litter_in_its_place:"🚮",question:"❓",rabbit:"🐰",rabbit2:"🐇",racehorse:"🐎",racing_car:"🏎",radio:"📻",radio_button:"🔘",radioactive:"☢️",railway_car:"🚃",railway_track:"🛤",rainbow:"🌈",rainbow_flag:"🏳️&zwj;🌈",raised_back_of_hand:"🤚",raised_hand_with_fingers_splayed:"🖐",raised_hands:"🙌",raising_hand_woman:"🙋",raising_hand_man:"🙋&zwj;♂️",ram:"🐏",ramen:"🍜",rat:"🐀",record_button:"⏺",recycle:"♻️",red_circle:"🔴",registered:"®️",relaxed:"☺️",relieved:"😌",reminder_ribbon:"🎗",repeat:"🔁",repeat_one:"🔂",rescue_worker_helmet:"⛑",restroom:"🚻",revolving_hearts:"💞",rewind:"⏪",rhinoceros:"🦏",ribbon:"🎀",rice:"🍚",rice_ball:"🍙",rice_cracker:"🍘",rice_scene:"🎑",right_anger_bubble:"🗯",ring:"💍",robot:"🤖",rocket:"🚀",rofl:"🤣",roll_eyes:"🙄",roller_coaster:"🎢",rooster:"🐓",rose:"🌹",rosette:"🏵",rotating_light:"🚨",round_pushpin:"📍",rowing_man:"🚣",rowing_woman:"🚣&zwj;♀️",rugby_football:"🏉",running_man:"🏃",running_shirt_with_sash:"🎽",running_woman:"🏃&zwj;♀️",sa:"🈂️",sagittarius:"♐️",sake:"🍶",sandal:"👡",santa:"🎅",satellite:"📡",saxophone:"🎷",school:"🏫",school_satchel:"🎒",scissors:"✂️",scorpion:"🦂",scorpius:"♏️",scream:"😱",scream_cat:"🙀",scroll:"📜",seat:"💺",secret:"㊙️",see_no_evil:"🙈",seedling:"🌱",selfie:"🤳",shallow_pan_of_food:"🥘",shamrock:"☘️",shark:"🦈",shaved_ice:"🍧",sheep:"🐑",shell:"🐚",shield:"🛡",shinto_shrine:"⛩",ship:"🚢",shirt:"👕",shopping:"🛍",shopping_cart:"🛒",shower:"🚿",shrimp:"🦐",signal_strength:"📶",six_pointed_star:"🔯",ski:"🎿",skier:"⛷",skull:"💀",skull_and_crossbones:"☠️",sleeping:"😴",sleeping_bed:"🛌",sleepy:"😪",slightly_frowning_face:"🙁",slightly_smiling_face:"🙂",slot_machine:"🎰",small_airplane:"🛩",small_blue_diamond:"🔹",small_orange_diamond:"🔸",small_red_triangle:"🔺",small_red_triangle_down:"🔻",smile:"😄",smile_cat:"😸",smiley:"😃",smiley_cat:"😺",smiling_imp:"😈",smirk:"😏",smirk_cat:"😼",smoking:"🚬",snail:"🐌",snake:"🐍",sneezing_face:"🤧",snowboarder:"🏂",snowflake:"❄️",snowman:"⛄️",snowman_with_snow:"☃️",sob:"😭",soccer:"⚽️",soon:"🔜",sos:"🆘",sound:"🔉",space_invader:"👾",spades:"♠️",spaghetti:"🍝",sparkle:"❇️",sparkler:"🎇",sparkles:"✨",sparkling_heart:"💖",speak_no_evil:"🙊",speaker:"🔈",speaking_head:"🗣",speech_balloon:"💬",speedboat:"🚤",spider:"🕷",spider_web:"🕸",spiral_calendar:"🗓",spiral_notepad:"🗒",spoon:"🥄",squid:"🦑",stadium:"🏟",star:"⭐️",star2:"🌟",star_and_crescent:"☪️",star_of_david:"✡️",stars:"🌠",station:"🚉",statue_of_liberty:"🗽",steam_locomotive:"🚂",stew:"🍲",stop_button:"⏹",stop_sign:"🛑",stopwatch:"⏱",straight_ruler:"📏",strawberry:"🍓",stuck_out_tongue:"😛",stuck_out_tongue_closed_eyes:"😝",stuck_out_tongue_winking_eye:"😜",studio_microphone:"🎙",stuffed_flatbread:"🥙",sun_behind_large_cloud:"🌥",sun_behind_rain_cloud:"🌦",sun_behind_small_cloud:"🌤",sun_with_face:"🌞",sunflower:"🌻",sunglasses:"😎",sunny:"☀️",sunrise:"🌅",sunrise_over_mountains:"🌄",surfing_man:"🏄",surfing_woman:"🏄&zwj;♀️",sushi:"🍣",suspension_railway:"🚟",sweat:"😓",sweat_drops:"💦",sweat_smile:"😅",sweet_potato:"🍠",swimming_man:"🏊",swimming_woman:"🏊&zwj;♀️",symbols:"🔣",synagogue:"🕍",syringe:"💉",taco:"🌮",tada:"🎉",tanabata_tree:"🎋",taurus:"♉️",taxi:"🚕",tea:"🍵",telephone_receiver:"📞",telescope:"🔭",tennis:"🎾",tent:"⛺️",thermometer:"🌡",thinking:"🤔",thought_balloon:"💭",ticket:"🎫",tickets:"🎟",tiger:"🐯",tiger2:"🐅",timer_clock:"⏲",tipping_hand_man:"💁&zwj;♂️",tired_face:"😫",tm:"™️",toilet:"🚽",tokyo_tower:"🗼",tomato:"🍅",tongue:"👅",top:"🔝",tophat:"🎩",tornado:"🌪",trackball:"🖲",tractor:"🚜",traffic_light:"🚥",train:"🚋",train2:"🚆",tram:"🚊",triangular_flag_on_post:"🚩",triangular_ruler:"📐",trident:"🔱",triumph:"😤",trolleybus:"🚎",trophy:"🏆",tropical_drink:"🍹",tropical_fish:"🐠",truck:"🚚",trumpet:"🎺",tulip:"🌷",tumbler_glass:"🥃",turkey:"🦃",turtle:"🐢",tv:"📺",twisted_rightwards_arrows:"🔀",two_hearts:"💕",two_men_holding_hands:"👬",two_women_holding_hands:"👭",u5272:"🈹",u5408:"🈴",u55b6:"🈺",u6307:"🈯️",u6708:"🈷️",u6709:"🈶",u6e80:"🈵",u7121:"🈚️",u7533:"🈸",u7981:"🈲",u7a7a:"🈳",umbrella:"☔️",unamused:"😒",underage:"🔞",unicorn:"🦄",unlock:"🔓",up:"🆙",upside_down_face:"🙃",v:"✌️",vertical_traffic_light:"🚦",vhs:"📼",vibration_mode:"📳",video_camera:"📹",video_game:"🎮",violin:"🎻",virgo:"♍️",volcano:"🌋",volleyball:"🏐",vs:"🆚",vulcan_salute:"🖖",walking_man:"🚶",walking_woman:"🚶&zwj;♀️",waning_crescent_moon:"🌘",waning_gibbous_moon:"🌖",warning:"⚠️",wastebasket:"🗑",watch:"⌚️",water_buffalo:"🐃",watermelon:"🍉",wave:"👋",wavy_dash:"〰️",waxing_crescent_moon:"🌒",wc:"🚾",weary:"😩",wedding:"💒",weight_lifting_man:"🏋️",weight_lifting_woman:"🏋️&zwj;♀️",whale:"🐳",whale2:"🐋",wheel_of_dharma:"☸️",wheelchair:"♿️",white_check_mark:"✅",white_circle:"⚪️",white_flag:"🏳️",white_flower:"💮",white_large_square:"⬜️",white_medium_small_square:"◽️",white_medium_square:"◻️",white_small_square:"▫️",white_square_button:"🔳",wilted_flower:"🥀",wind_chime:"🎐",wind_face:"🌬",wine_glass:"🍷",wink:"😉",wolf:"🐺",woman:"👩",woman_artist:"👩&zwj;🎨",woman_astronaut:"👩&zwj;🚀",woman_cartwheeling:"🤸&zwj;♀️",woman_cook:"👩&zwj;🍳",woman_facepalming:"🤦&zwj;♀️",woman_factory_worker:"👩&zwj;🏭",woman_farmer:"👩&zwj;🌾",woman_firefighter:"👩&zwj;🚒",woman_health_worker:"👩&zwj;⚕️",woman_judge:"👩&zwj;⚖️",woman_juggling:"🤹&zwj;♀️",woman_mechanic:"👩&zwj;🔧",woman_office_worker:"👩&zwj;💼",woman_pilot:"👩&zwj;✈️",woman_playing_handball:"🤾&zwj;♀️",woman_playing_water_polo:"🤽&zwj;♀️",woman_scientist:"👩&zwj;🔬",woman_shrugging:"🤷&zwj;♀️",woman_singer:"👩&zwj;🎤",woman_student:"👩&zwj;🎓",woman_teacher:"👩&zwj;🏫",woman_technologist:"👩&zwj;💻",woman_with_turban:"👳&zwj;♀️",womans_clothes:"👚",womans_hat:"👒",women_wrestling:"🤼&zwj;♀️",womens:"🚺",world_map:"🗺",worried:"😟",wrench:"🔧",writing_hand:"✍️",x:"❌",yellow_heart:"💛",yen:"💴",yin_yang:"☯️",yum:"😋",zap:"⚡️",zipper_mouth_face:"🤐",zzz:"💤",octocat:'<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',showdown:`<span style="font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>`},r.Converter=function(o){var c={},a=[],m=[],g={},b=d,_={parsed:{},raw:"",format:""};v();function v(){o=o||{};for(var w in i)i.hasOwnProperty(w)&&(c[w]=i[w]);if(typeof o=="object")for(var O in o)o.hasOwnProperty(O)&&(c[O]=o[O]);else throw Error("Converter expects the passed parameter to be an object, but "+typeof o+" was passed instead.");c.extensions&&r.helper.forEach(c.extensions,P)}function P(w,O){if(O=O||null,r.helper.isString(w))if(w=r.helper.stdExtName(w),O=w,r.extensions[w]){console.warn("DEPRECATION WARNING: "+w+" is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"),R(r.extensions[w],w);return}else if(!r.helper.isUndefined(u[w]))w=u[w];else throw Error('Extension "'+w+'" could not be loaded. It was either not found or is not a valid extension.');typeof w=="function"&&(w=w()),r.helper.isArray(w)||(w=[w]);var B=f(w,O);if(!B.valid)throw Error(B.error);for(var J=0;J<w.length;++J){switch(w[J].type){case"lang":a.push(w[J]);break;case"output":m.push(w[J]);break}if(w[J].hasOwnProperty("listeners"))for(var ue in w[J].listeners)w[J].listeners.hasOwnProperty(ue)&&j(ue,w[J].listeners[ue])}}function R(w,O){typeof w=="function"&&(w=w(new r.Converter)),r.helper.isArray(w)||(w=[w]);var B=f(w,O);if(!B.valid)throw Error(B.error);for(var J=0;J<w.length;++J)switch(w[J].type){case"lang":a.push(w[J]);break;case"output":m.push(w[J]);break;default:throw Error("Extension loader error: Type unrecognized!!!")}}function j(w,O){if(!r.helper.isString(w))throw Error("Invalid argument in converter.listen() method: name must be a string, but "+typeof w+" given");if(typeof O!="function")throw Error("Invalid argument in converter.listen() method: callback must be a function, but "+typeof O+" given");g.hasOwnProperty(w)||(g[w]=[]),g[w].push(O)}function I(w){var O=w.match(/^\s*/)[0].length,B=new RegExp("^\\s{0,"+O+"}","gm");return w.replace(B,"")}this._dispatch=function(O,B,J,ue){if(g.hasOwnProperty(O))for(var X=0;X<g[O].length;++X){var fe=g[O][X](O,B,this,J,ue);fe&&typeof fe<"u"&&(B=fe)}return B},this.listen=function(w,O){return j(w,O),this},this.makeHtml=function(w){if(!w)return w;var O={gHtmlBlocks:[],gHtmlMdBlocks:[],gHtmlSpans:[],gUrls:{},gTitles:{},gDimensions:{},gListLevel:0,hashLinkCounts:{},langExtensions:a,outputModifiers:m,converter:this,ghCodeBlocks:[],metadata:{parsed:{},raw:"",format:""}};return w=w.replace(/¨/g,"¨T"),w=w.replace(/\$/g,"¨D"),w=w.replace(/\r\n/g,`
`),w=w.replace(/\r/g,`
`),w=w.replace(/\u00A0/g,"&nbsp;"),c.smartIndentationFix&&(w=I(w)),w=`

`+w+`

`,w=r.subParser("detab")(w,c,O),w=w.replace(/^[ \t]+$/mg,""),r.helper.forEach(a,function(B){w=r.subParser("runExtension")(B,w,c,O)}),w=r.subParser("metadata")(w,c,O),w=r.subParser("hashPreCodeTags")(w,c,O),w=r.subParser("githubCodeBlocks")(w,c,O),w=r.subParser("hashHTMLBlocks")(w,c,O),w=r.subParser("hashCodeTags")(w,c,O),w=r.subParser("stripLinkDefinitions")(w,c,O),w=r.subParser("blockGamut")(w,c,O),w=r.subParser("unhashHTMLSpans")(w,c,O),w=r.subParser("unescapeSpecialChars")(w,c,O),w=w.replace(/¨D/g,"$$"),w=w.replace(/¨T/g,"¨"),w=r.subParser("completeHTMLDocument")(w,c,O),r.helper.forEach(m,function(B){w=r.subParser("runExtension")(B,w,c,O)}),_=O.metadata,w},this.makeMarkdown=this.makeMd=function(w,O){if(w=w.replace(/\r\n/g,`
`),w=w.replace(/\r/g,`
`),w=w.replace(/>[ \t]+</,">¨NBSP;<"),!O)if(window&&window.document)O=window.document;else throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");var B=O.createElement("div");B.innerHTML=w;var J={preList:Ae(B)};ke(B);for(var ue=B.childNodes,X="",fe=0;fe<ue.length;fe++)X+=r.subParser("makeMarkdown.node")(ue[fe],J);function ke(we){for(var le=0;le<we.childNodes.length;++le){var M=we.childNodes[le];M.nodeType===3?!/\S/.test(M.nodeValue)&&!/^[ ]+$/.test(M.nodeValue)?(we.removeChild(M),--le):(M.nodeValue=M.nodeValue.split(`
`).join(" "),M.nodeValue=M.nodeValue.replace(/(\s)+/g,"$1")):M.nodeType===1&&ke(M)}}function Ae(we){for(var le=we.querySelectorAll("pre"),M=[],U=0;U<le.length;++U)if(le[U].childElementCount===1&&le[U].firstChild.tagName.toLowerCase()==="code"){var W=le[U].firstChild.innerHTML.trim(),Y=le[U].firstChild.getAttribute("data-language")||"";if(Y==="")for(var de=le[U].firstChild.className.split(" "),pe=0;pe<de.length;++pe){var y=de[pe].match(/^language-(.+)$/);if(y!==null){Y=y[1];break}}W=r.helper.unescapeHTMLEntities(W),M.push(W),le[U].outerHTML='<precode language="'+Y+'" precodenum="'+U.toString()+'"></precode>'}else M.push(le[U].innerHTML),le[U].innerHTML="",le[U].setAttribute("prenum",U.toString());return M}return X},this.setOption=function(w,O){c[w]=O},this.getOption=function(w){return c[w]},this.getOptions=function(){return c},this.addExtension=function(w,O){O=O||null,P(w,O)},this.useExtension=function(w){P(w)},this.setFlavor=function(w){if(!l.hasOwnProperty(w))throw Error(w+" flavor was not found");var O=l[w];b=w;for(var B in O)O.hasOwnProperty(B)&&(c[B]=O[B])},this.getFlavor=function(){return b},this.removeExtension=function(w){r.helper.isArray(w)||(w=[w]);for(var O=0;O<w.length;++O){for(var B=w[O],J=0;J<a.length;++J)a[J]===B&&a.splice(J,1);for(var ue=0;ue<m.length;++ue)m[ue]===B&&m.splice(ue,1)}},this.getAllExtensions=function(){return{language:a,output:m}},this.getMetadata=function(w){return w?_.raw:_.parsed},this.getMetadataFormat=function(){return _.format},this._setMetadataPair=function(w,O){_.parsed[w]=O},this._setMetadataFormat=function(w){_.format=w},this._setMetadataRaw=function(w){_.raw=w}},r.subParser("anchors",function(o,c,a){o=a.converter._dispatch("anchors.before",o,c,a);var m=function(g,b,_,v,P,R,j){if(r.helper.isUndefined(j)&&(j=""),_=_.toLowerCase(),g.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)v="";else if(!v)if(_||(_=b.toLowerCase().replace(/ ?\n/g," ")),v="#"+_,!r.helper.isUndefined(a.gUrls[_]))v=a.gUrls[_],r.helper.isUndefined(a.gTitles[_])||(j=a.gTitles[_]);else return g;v=v.replace(r.helper.regexes.asteriskDashAndColon,r.helper.escapeCharactersCallback);var I='<a href="'+v+'"';return j!==""&&j!==null&&(j=j.replace(/"/g,"&quot;"),j=j.replace(r.helper.regexes.asteriskDashAndColon,r.helper.escapeCharactersCallback),I+=' title="'+j+'"'),c.openLinksInNewWindow&&!/^#/.test(v)&&(I+=' rel="noopener noreferrer" target="¨E95Eblank"'),I+=">"+b+"</a>",I};return o=o.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g,m),o=o.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,m),o=o.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,m),o=o.replace(/\[([^\[\]]+)]()()()()()/g,m),c.ghMentions&&(o=o.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi,function(g,b,_,v,P){if(_==="\\")return b+v;if(!r.helper.isString(c.ghMentionsLink))throw new Error("ghMentionsLink option must be a string");var R=c.ghMentionsLink.replace(/\{u}/g,P),j="";return c.openLinksInNewWindow&&(j=' rel="noopener noreferrer" target="¨E95Eblank"'),b+'<a href="'+R+'"'+j+">"+v+"</a>"})),o=a.converter._dispatch("anchors.after",o,c,a),o});var k=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,S=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,C=/()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,T=/(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi,V=/<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,$=function(o){return function(c,a,m,g,b,_,v){m=m.replace(r.helper.regexes.asteriskDashAndColon,r.helper.escapeCharactersCallback);var P=m,R="",j="",I=a||"",w=v||"";return/^www\./i.test(m)&&(m=m.replace(/^www\./i,"http://www.")),o.excludeTrailingPunctuationFromURLs&&_&&(R=_),o.openLinksInNewWindow&&(j=' rel="noopener noreferrer" target="¨E95Eblank"'),I+'<a href="'+m+'"'+j+">"+P+"</a>"+R+w}},G=function(o,c){return function(a,m,g){var b="mailto:";return m=m||"",g=r.subParser("unescapeSpecialChars")(g,o,c),o.encodeEmails?(b=r.helper.encodeEmailAddress(b+g),g=r.helper.encodeEmailAddress(g)):b=b+g,m+'<a href="'+b+'">'+g+"</a>"}};r.subParser("autoLinks",function(o,c,a){return o=a.converter._dispatch("autoLinks.before",o,c,a),o=o.replace(C,$(c)),o=o.replace(V,G(c,a)),o=a.converter._dispatch("autoLinks.after",o,c,a),o}),r.subParser("simplifiedAutoLinks",function(o,c,a){return c.simplifiedAutoLink&&(o=a.converter._dispatch("simplifiedAutoLinks.before",o,c,a),c.excludeTrailingPunctuationFromURLs?o=o.replace(S,$(c)):o=o.replace(k,$(c)),o=o.replace(T,G(c,a)),o=a.converter._dispatch("simplifiedAutoLinks.after",o,c,a)),o}),r.subParser("blockGamut",function(o,c,a){return o=a.converter._dispatch("blockGamut.before",o,c,a),o=r.subParser("blockQuotes")(o,c,a),o=r.subParser("headers")(o,c,a),o=r.subParser("horizontalRule")(o,c,a),o=r.subParser("lists")(o,c,a),o=r.subParser("codeBlocks")(o,c,a),o=r.subParser("tables")(o,c,a),o=r.subParser("hashHTMLBlocks")(o,c,a),o=r.subParser("paragraphs")(o,c,a),o=a.converter._dispatch("blockGamut.after",o,c,a),o}),r.subParser("blockQuotes",function(o,c,a){o=a.converter._dispatch("blockQuotes.before",o,c,a),o=o+`

`;var m=/(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;return c.splitAdjacentBlockquotes&&(m=/^ {0,3}>[\s\S]*?(?:\n\n)/gm),o=o.replace(m,function(g){return g=g.replace(/^[ \t]*>[ \t]?/gm,""),g=g.replace(/¨0/g,""),g=g.replace(/^[ \t]+$/gm,""),g=r.subParser("githubCodeBlocks")(g,c,a),g=r.subParser("blockGamut")(g,c,a),g=g.replace(/(^|\n)/g,"$1  "),g=g.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(b,_){var v=_;return v=v.replace(/^  /mg,"¨0"),v=v.replace(/¨0/g,""),v}),r.subParser("hashBlock")(`<blockquote>
`+g+`
</blockquote>`,c,a)}),o=a.converter._dispatch("blockQuotes.after",o,c,a),o}),r.subParser("codeBlocks",function(o,c,a){o=a.converter._dispatch("codeBlocks.before",o,c,a),o+="¨0";var m=/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;return o=o.replace(m,function(g,b,_){var v=b,P=_,R=`
`;return v=r.subParser("outdent")(v,c,a),v=r.subParser("encodeCode")(v,c,a),v=r.subParser("detab")(v,c,a),v=v.replace(/^\n+/g,""),v=v.replace(/\n+$/g,""),c.omitExtraWLInCodeBlocks&&(R=""),v="<pre><code>"+v+R+"</code></pre>",r.subParser("hashBlock")(v,c,a)+P}),o=o.replace(/¨0/,""),o=a.converter._dispatch("codeBlocks.after",o,c,a),o}),r.subParser("codeSpans",function(o,c,a){return o=a.converter._dispatch("codeSpans.before",o,c,a),typeof o>"u"&&(o=""),o=o.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(m,g,b,_){var v=_;return v=v.replace(/^([ \t]*)/g,""),v=v.replace(/[ \t]*$/g,""),v=r.subParser("encodeCode")(v,c,a),v=g+"<code>"+v+"</code>",v=r.subParser("hashHTMLSpans")(v,c,a),v}),o=a.converter._dispatch("codeSpans.after",o,c,a),o}),r.subParser("completeHTMLDocument",function(o,c,a){if(!c.completeHTMLDocument)return o;o=a.converter._dispatch("completeHTMLDocument.before",o,c,a);var m="html",g=`<!DOCTYPE HTML>
`,b="",_=`<meta charset="utf-8">
`,v="",P="";typeof a.metadata.parsed.doctype<"u"&&(g="<!DOCTYPE "+a.metadata.parsed.doctype+`>
`,m=a.metadata.parsed.doctype.toString().toLowerCase(),(m==="html"||m==="html5")&&(_='<meta charset="utf-8">'));for(var R in a.metadata.parsed)if(a.metadata.parsed.hasOwnProperty(R))switch(R.toLowerCase()){case"doctype":break;case"title":b="<title>"+a.metadata.parsed.title+`</title>
`;break;case"charset":m==="html"||m==="html5"?_='<meta charset="'+a.metadata.parsed.charset+`">
`:_='<meta name="charset" content="'+a.metadata.parsed.charset+`">
`;break;case"language":case"lang":v=' lang="'+a.metadata.parsed[R]+'"',P+='<meta name="'+R+'" content="'+a.metadata.parsed[R]+`">
`;break;default:P+='<meta name="'+R+'" content="'+a.metadata.parsed[R]+`">
`}return o=g+"<html"+v+`>
<head>
`+b+_+P+`</head>
<body>
`+o.trim()+`
</body>
</html>`,o=a.converter._dispatch("completeHTMLDocument.after",o,c,a),o}),r.subParser("detab",function(o,c,a){return o=a.converter._dispatch("detab.before",o,c,a),o=o.replace(/\t(?=\t)/g,"    "),o=o.replace(/\t/g,"¨A¨B"),o=o.replace(/¨B(.+?)¨A/g,function(m,g){for(var b=g,_=4-b.length%4,v=0;v<_;v++)b+=" ";return b}),o=o.replace(/¨A/g,"    "),o=o.replace(/¨B/g,""),o=a.converter._dispatch("detab.after",o,c,a),o}),r.subParser("ellipsis",function(o,c,a){return c.ellipsis&&(o=a.converter._dispatch("ellipsis.before",o,c,a),o=o.replace(/\.\.\./g,"…"),o=a.converter._dispatch("ellipsis.after",o,c,a)),o}),r.subParser("emoji",function(o,c,a){if(!c.emoji)return o;o=a.converter._dispatch("emoji.before",o,c,a);var m=/:([\S]+?):/g;return o=o.replace(m,function(g,b){return r.helper.emojis.hasOwnProperty(b)?r.helper.emojis[b]:g}),o=a.converter._dispatch("emoji.after",o,c,a),o}),r.subParser("encodeAmpsAndAngles",function(o,c,a){return o=a.converter._dispatch("encodeAmpsAndAngles.before",o,c,a),o=o.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),o=o.replace(/<(?![a-z\/?$!])/gi,"&lt;"),o=o.replace(/</g,"&lt;"),o=o.replace(/>/g,"&gt;"),o=a.converter._dispatch("encodeAmpsAndAngles.after",o,c,a),o}),r.subParser("encodeBackslashEscapes",function(o,c,a){return o=a.converter._dispatch("encodeBackslashEscapes.before",o,c,a),o=o.replace(/\\(\\)/g,r.helper.escapeCharactersCallback),o=o.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g,r.helper.escapeCharactersCallback),o=a.converter._dispatch("encodeBackslashEscapes.after",o,c,a),o}),r.subParser("encodeCode",function(o,c,a){return o=a.converter._dispatch("encodeCode.before",o,c,a),o=o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/([*_{}\[\]\\=~-])/g,r.helper.escapeCharactersCallback),o=a.converter._dispatch("encodeCode.after",o,c,a),o}),r.subParser("escapeSpecialCharsWithinTagAttributes",function(o,c,a){o=a.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before",o,c,a);var m=/<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi,g=/<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;return o=o.replace(m,function(b){return b.replace(/(.)<\/?code>(?=.)/g,"$1`").replace(/([\\`*_~=|])/g,r.helper.escapeCharactersCallback)}),o=o.replace(g,function(b){return b.replace(/([\\`*_~=|])/g,r.helper.escapeCharactersCallback)}),o=a.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after",o,c,a),o}),r.subParser("githubCodeBlocks",function(o,c,a){return c.ghCodeBlocks?(o=a.converter._dispatch("githubCodeBlocks.before",o,c,a),o+="¨0",o=o.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g,function(m,g,b,_){var v=c.omitExtraWLInCodeBlocks?"":`
`;return _=r.subParser("encodeCode")(_,c,a),_=r.subParser("detab")(_,c,a),_=_.replace(/^\n+/g,""),_=_.replace(/\n+$/g,""),_="<pre><code"+(b?' class="'+b+" language-"+b+'"':"")+">"+_+v+"</code></pre>",_=r.subParser("hashBlock")(_,c,a),`

¨G`+(a.ghCodeBlocks.push({text:m,codeblock:_})-1)+`G

`}),o=o.replace(/¨0/,""),a.converter._dispatch("githubCodeBlocks.after",o,c,a)):o}),r.subParser("hashBlock",function(o,c,a){return o=a.converter._dispatch("hashBlock.before",o,c,a),o=o.replace(/(^\n+|\n+$)/g,""),o=`

¨K`+(a.gHtmlBlocks.push(o)-1)+`K

`,o=a.converter._dispatch("hashBlock.after",o,c,a),o}),r.subParser("hashCodeTags",function(o,c,a){o=a.converter._dispatch("hashCodeTags.before",o,c,a);var m=function(g,b,_,v){var P=_+r.subParser("encodeCode")(b,c,a)+v;return"¨C"+(a.gHtmlSpans.push(P)-1)+"C"};return o=r.helper.replaceRecursiveRegExp(o,m,"<code\\b[^>]*>","</code>","gim"),o=a.converter._dispatch("hashCodeTags.after",o,c,a),o}),r.subParser("hashElement",function(o,c,a){return function(m,g){var b=g;return b=b.replace(/\n\n/g,`
`),b=b.replace(/^\n/,""),b=b.replace(/\n+$/g,""),b=`

¨K`+(a.gHtmlBlocks.push(b)-1)+`K

`,b}}),r.subParser("hashHTMLBlocks",function(o,c,a){o=a.converter._dispatch("hashHTMLBlocks.before",o,c,a);var m=["pre","div","h1","h2","h3","h4","h5","h6","blockquote","table","dl","ol","ul","script","noscript","form","fieldset","iframe","math","style","section","header","footer","nav","article","aside","address","audio","canvas","figure","hgroup","output","video","p"],g=function(w,O,B,J){var ue=w;return B.search(/\bmarkdown\b/)!==-1&&(ue=B+a.converter.makeHtml(O)+J),`

¨K`+(a.gHtmlBlocks.push(ue)-1)+`K

`};c.backslashEscapesHTMLTags&&(o=o.replace(/\\<(\/?[^>]+?)>/g,function(w,O){return"&lt;"+O+"&gt;"}));for(var b=0;b<m.length;++b)for(var _,v=new RegExp("^ {0,3}(<"+m[b]+"\\b[^>]*>)","im"),P="<"+m[b]+"\\b[^>]*>",R="</"+m[b]+">";(_=r.helper.regexIndexOf(o,v))!==-1;){var j=r.helper.splitAtIndex(o,_),I=r.helper.replaceRecursiveRegExp(j[1],g,P,R,"im");if(I===j[1])break;o=j[0].concat(I)}return o=o.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,r.subParser("hashElement")(o,c,a)),o=r.helper.replaceRecursiveRegExp(o,function(w){return`

¨K`+(a.gHtmlBlocks.push(w)-1)+`K

`},"^ {0,3}<!--","-->","gm"),o=o.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,r.subParser("hashElement")(o,c,a)),o=a.converter._dispatch("hashHTMLBlocks.after",o,c,a),o}),r.subParser("hashHTMLSpans",function(o,c,a){o=a.converter._dispatch("hashHTMLSpans.before",o,c,a);function m(g){return"¨C"+(a.gHtmlSpans.push(g)-1)+"C"}return o=o.replace(/<[^>]+?\/>/gi,function(g){return m(g)}),o=o.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g,function(g){return m(g)}),o=o.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g,function(g){return m(g)}),o=o.replace(/<[^>]+?>/gi,function(g){return m(g)}),o=a.converter._dispatch("hashHTMLSpans.after",o,c,a),o}),r.subParser("unhashHTMLSpans",function(o,c,a){o=a.converter._dispatch("unhashHTMLSpans.before",o,c,a);for(var m=0;m<a.gHtmlSpans.length;++m){for(var g=a.gHtmlSpans[m],b=0;/¨C(\d+)C/.test(g);){var _=RegExp.$1;if(g=g.replace("¨C"+_+"C",a.gHtmlSpans[_]),b===10){console.error("maximum nesting of 10 spans reached!!!");break}++b}o=o.replace("¨C"+m+"C",g)}return o=a.converter._dispatch("unhashHTMLSpans.after",o,c,a),o}),r.subParser("hashPreCodeTags",function(o,c,a){o=a.converter._dispatch("hashPreCodeTags.before",o,c,a);var m=function(g,b,_,v){var P=_+r.subParser("encodeCode")(b,c,a)+v;return`

¨G`+(a.ghCodeBlocks.push({text:g,codeblock:P})-1)+`G

`};return o=r.helper.replaceRecursiveRegExp(o,m,"^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>","^ {0,3}</code>\\s*</pre>","gim"),o=a.converter._dispatch("hashPreCodeTags.after",o,c,a),o}),r.subParser("headers",function(o,c,a){o=a.converter._dispatch("headers.before",o,c,a);var m=isNaN(parseInt(c.headerLevelStart))?1:parseInt(c.headerLevelStart),g=c.smoothLivePreview?/^(.+)[ \t]*\n={2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n=+[ \t]*\n+/gm,b=c.smoothLivePreview?/^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n-+[ \t]*\n+/gm;o=o.replace(g,function(P,R){var j=r.subParser("spanGamut")(R,c,a),I=c.noHeaderId?"":' id="'+v(R)+'"',w=m,O="<h"+w+I+">"+j+"</h"+w+">";return r.subParser("hashBlock")(O,c,a)}),o=o.replace(b,function(P,R){var j=r.subParser("spanGamut")(R,c,a),I=c.noHeaderId?"":' id="'+v(R)+'"',w=m+1,O="<h"+w+I+">"+j+"</h"+w+">";return r.subParser("hashBlock")(O,c,a)});var _=c.requireSpaceBeforeHeadingText?/^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm:/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;o=o.replace(_,function(P,R,j){var I=j;c.customizedHeaderId&&(I=j.replace(/\s?\{([^{]+?)}\s*$/,""));var w=r.subParser("spanGamut")(I,c,a),O=c.noHeaderId?"":' id="'+v(j)+'"',B=m-1+R.length,J="<h"+B+O+">"+w+"</h"+B+">";return r.subParser("hashBlock")(J,c,a)});function v(P){var R,j;if(c.customizedHeaderId){var I=P.match(/\{([^{]+?)}\s*$/);I&&I[1]&&(P=I[1])}return R=P,r.helper.isString(c.prefixHeaderId)?j=c.prefixHeaderId:c.prefixHeaderId===!0?j="section-":j="",c.rawPrefixHeaderId||(R=j+R),c.ghCompatibleHeaderId?R=R.replace(/ /g,"-").replace(/&amp;/g,"").replace(/¨T/g,"").replace(/¨D/g,"").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g,"").toLowerCase():c.rawHeaderId?R=R.replace(/ /g,"-").replace(/&amp;/g,"&").replace(/¨T/g,"¨").replace(/¨D/g,"$").replace(/["']/g,"-").toLowerCase():R=R.replace(/[^\w]/g,"").toLowerCase(),c.rawPrefixHeaderId&&(R=j+R),a.hashLinkCounts[R]?R=R+"-"+a.hashLinkCounts[R]++:a.hashLinkCounts[R]=1,R}return o=a.converter._dispatch("headers.after",o,c,a),o}),r.subParser("horizontalRule",function(o,c,a){o=a.converter._dispatch("horizontalRule.before",o,c,a);var m=r.subParser("hashBlock")("<hr />",c,a);return o=o.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm,m),o=o.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm,m),o=o.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm,m),o=a.converter._dispatch("horizontalRule.after",o,c,a),o}),r.subParser("images",function(o,c,a){o=a.converter._dispatch("images.before",o,c,a);var m=/!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,g=/!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,b=/!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,_=/!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,v=/!\[([^\[\]]+)]()()()()()/g;function P(j,I,w,O,B,J,ue,X){return O=O.replace(/\s/g,""),R(j,I,w,O,B,J,ue,X)}function R(j,I,w,O,B,J,ue,X){var fe=a.gUrls,ke=a.gTitles,Ae=a.gDimensions;if(w=w.toLowerCase(),X||(X=""),j.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)O="";else if(O===""||O===null)if((w===""||w===null)&&(w=I.toLowerCase().replace(/ ?\n/g," ")),O="#"+w,!r.helper.isUndefined(fe[w]))O=fe[w],r.helper.isUndefined(ke[w])||(X=ke[w]),r.helper.isUndefined(Ae[w])||(B=Ae[w].width,J=Ae[w].height);else return j;I=I.replace(/"/g,"&quot;").replace(r.helper.regexes.asteriskDashAndColon,r.helper.escapeCharactersCallback),O=O.replace(r.helper.regexes.asteriskDashAndColon,r.helper.escapeCharactersCallback);var we='<img src="'+O+'" alt="'+I+'"';return X&&r.helper.isString(X)&&(X=X.replace(/"/g,"&quot;").replace(r.helper.regexes.asteriskDashAndColon,r.helper.escapeCharactersCallback),we+=' title="'+X+'"'),B&&J&&(B=B==="*"?"auto":B,J=J==="*"?"auto":J,we+=' width="'+B+'"',we+=' height="'+J+'"'),we+=" />",we}return o=o.replace(_,R),o=o.replace(b,P),o=o.replace(g,R),o=o.replace(m,R),o=o.replace(v,R),o=a.converter._dispatch("images.after",o,c,a),o}),r.subParser("italicsAndBold",function(o,c,a){o=a.converter._dispatch("italicsAndBold.before",o,c,a);function m(g,b,_){return b+g+_}return c.literalMidWordUnderscores?(o=o.replace(/\b___(\S[\s\S]*?)___\b/g,function(g,b){return m(b,"<strong><em>","</em></strong>")}),o=o.replace(/\b__(\S[\s\S]*?)__\b/g,function(g,b){return m(b,"<strong>","</strong>")}),o=o.replace(/\b_(\S[\s\S]*?)_\b/g,function(g,b){return m(b,"<em>","</em>")})):(o=o.replace(/___(\S[\s\S]*?)___/g,function(g,b){return/\S$/.test(b)?m(b,"<strong><em>","</em></strong>"):g}),o=o.replace(/__(\S[\s\S]*?)__/g,function(g,b){return/\S$/.test(b)?m(b,"<strong>","</strong>"):g}),o=o.replace(/_([^\s_][\s\S]*?)_/g,function(g,b){return/\S$/.test(b)?m(b,"<em>","</em>"):g})),c.literalMidWordAsterisks?(o=o.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g,function(g,b,_){return m(_,b+"<strong><em>","</em></strong>")}),o=o.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g,function(g,b,_){return m(_,b+"<strong>","</strong>")}),o=o.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g,function(g,b,_){return m(_,b+"<em>","</em>")})):(o=o.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g,function(g,b){return/\S$/.test(b)?m(b,"<strong><em>","</em></strong>"):g}),o=o.replace(/\*\*(\S[\s\S]*?)\*\*/g,function(g,b){return/\S$/.test(b)?m(b,"<strong>","</strong>"):g}),o=o.replace(/\*([^\s*][\s\S]*?)\*/g,function(g,b){return/\S$/.test(b)?m(b,"<em>","</em>"):g})),o=a.converter._dispatch("italicsAndBold.after",o,c,a),o}),r.subParser("lists",function(o,c,a){function m(_,v){a.gListLevel++,_=_.replace(/\n{2,}$/,`
`),_+="¨0";var P=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,R=/\n[ \t]*\n(?!¨0)/.test(_);return c.disableForced4SpacesIndentedSublists&&(P=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm),_=_.replace(P,function(j,I,w,O,B,J,ue){ue=ue&&ue.trim()!=="";var X=r.subParser("outdent")(B,c,a),fe="";return J&&c.tasklists&&(fe=' class="task-list-item" style="list-style-type: none;"',X=X.replace(/^[ \t]*\[(x|X| )?]/m,function(){var ke='<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';return ue&&(ke+=" checked"),ke+=">",ke})),X=X.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g,function(ke){return"¨A"+ke}),I||X.search(/\n{2,}/)>-1?(X=r.subParser("githubCodeBlocks")(X,c,a),X=r.subParser("blockGamut")(X,c,a)):(X=r.subParser("lists")(X,c,a),X=X.replace(/\n$/,""),X=r.subParser("hashHTMLBlocks")(X,c,a),X=X.replace(/\n\n+/g,`

`),R?X=r.subParser("paragraphs")(X,c,a):X=r.subParser("spanGamut")(X,c,a)),X=X.replace("¨A",""),X="<li"+fe+">"+X+`</li>
`,X}),_=_.replace(/¨0/g,""),a.gListLevel--,v&&(_=_.replace(/\s+$/,"")),_}function g(_,v){if(v==="ol"){var P=_.match(/^ *(\d+)\./);if(P&&P[1]!=="1")return' start="'+P[1]+'"'}return""}function b(_,v,P){var R=c.disableForced4SpacesIndentedSublists?/^ ?\d+\.[ \t]/gm:/^ {0,3}\d+\.[ \t]/gm,j=c.disableForced4SpacesIndentedSublists?/^ ?[*+-][ \t]/gm:/^ {0,3}[*+-][ \t]/gm,I=v==="ul"?R:j,w="";if(_.search(I)!==-1)(function B(J){var ue=J.search(I),X=g(_,v);ue!==-1?(w+=`

<`+v+X+`>
`+m(J.slice(0,ue),!!P)+"</"+v+`>
`,v=v==="ul"?"ol":"ul",I=v==="ul"?R:j,B(J.slice(ue))):w+=`

<`+v+X+`>
`+m(J,!!P)+"</"+v+`>
`})(_);else{var O=g(_,v);w=`

<`+v+O+`>
`+m(_,!!P)+"</"+v+`>
`}return w}return o=a.converter._dispatch("lists.before",o,c,a),o+="¨0",a.gListLevel?o=o.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(_,v,P){var R=P.search(/[*+-]/g)>-1?"ul":"ol";return b(v,R,!0)}):o=o.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(_,v,P,R){var j=R.search(/[*+-]/g)>-1?"ul":"ol";return b(P,j,!1)}),o=o.replace(/¨0/,""),o=a.converter._dispatch("lists.after",o,c,a),o}),r.subParser("metadata",function(o,c,a){if(!c.metadata)return o;o=a.converter._dispatch("metadata.before",o,c,a);function m(g){a.metadata.raw=g,g=g.replace(/&/g,"&amp;").replace(/"/g,"&quot;"),g=g.replace(/\n {4}/g," "),g.replace(/^([\S ]+): +([\s\S]+?)$/gm,function(b,_,v){return a.metadata.parsed[_]=v,""})}return o=o.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/,function(g,b,_){return m(_),"¨M"}),o=o.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/,function(g,b,_){return b&&(a.metadata.format=b),m(_),"¨M"}),o=o.replace(/¨M/g,""),o=a.converter._dispatch("metadata.after",o,c,a),o}),r.subParser("outdent",function(o,c,a){return o=a.converter._dispatch("outdent.before",o,c,a),o=o.replace(/^(\t|[ ]{1,4})/gm,"¨0"),o=o.replace(/¨0/g,""),o=a.converter._dispatch("outdent.after",o,c,a),o}),r.subParser("paragraphs",function(o,c,a){o=a.converter._dispatch("paragraphs.before",o,c,a),o=o.replace(/^\n+/g,""),o=o.replace(/\n+$/g,"");for(var m=o.split(/\n{2,}/g),g=[],b=m.length,_=0;_<b;_++){var v=m[_];v.search(/¨(K|G)(\d+)\1/g)>=0?g.push(v):v.search(/\S/)>=0&&(v=r.subParser("spanGamut")(v,c,a),v=v.replace(/^([ \t]*)/g,"<p>"),v+="</p>",g.push(v))}for(b=g.length,_=0;_<b;_++){for(var P="",R=g[_],j=!1;/¨(K|G)(\d+)\1/.test(R);){var I=RegExp.$1,w=RegExp.$2;I==="K"?P=a.gHtmlBlocks[w]:j?P=r.subParser("encodeCode")(a.ghCodeBlocks[w].text,c,a):P=a.ghCodeBlocks[w].codeblock,P=P.replace(/\$/g,"$$$$"),R=R.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/,P),/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(R)&&(j=!0)}g[_]=R}return o=g.join(`
`),o=o.replace(/^\n+/g,""),o=o.replace(/\n+$/g,""),a.converter._dispatch("paragraphs.after",o,c,a)}),r.subParser("runExtension",function(o,c,a,m){if(o.filter)c=o.filter(c,m.converter,a);else if(o.regex){var g=o.regex;g instanceof RegExp||(g=new RegExp(g,"g")),c=c.replace(g,o.replace)}return c}),r.subParser("spanGamut",function(o,c,a){return o=a.converter._dispatch("spanGamut.before",o,c,a),o=r.subParser("codeSpans")(o,c,a),o=r.subParser("escapeSpecialCharsWithinTagAttributes")(o,c,a),o=r.subParser("encodeBackslashEscapes")(o,c,a),o=r.subParser("images")(o,c,a),o=r.subParser("anchors")(o,c,a),o=r.subParser("autoLinks")(o,c,a),o=r.subParser("simplifiedAutoLinks")(o,c,a),o=r.subParser("emoji")(o,c,a),o=r.subParser("underline")(o,c,a),o=r.subParser("italicsAndBold")(o,c,a),o=r.subParser("strikethrough")(o,c,a),o=r.subParser("ellipsis")(o,c,a),o=r.subParser("hashHTMLSpans")(o,c,a),o=r.subParser("encodeAmpsAndAngles")(o,c,a),c.simpleLineBreaks?/\n\n¨K/.test(o)||(o=o.replace(/\n+/g,`<br />
`)):o=o.replace(/  +\n/g,`<br />
`),o=a.converter._dispatch("spanGamut.after",o,c,a),o}),r.subParser("strikethrough",function(o,c,a){function m(g){return c.simplifiedAutoLink&&(g=r.subParser("simplifiedAutoLinks")(g,c,a)),"<del>"+g+"</del>"}return c.strikethrough&&(o=a.converter._dispatch("strikethrough.before",o,c,a),o=o.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g,function(g,b){return m(b)}),o=a.converter._dispatch("strikethrough.after",o,c,a)),o}),r.subParser("stripLinkDefinitions",function(o,c,a){var m=/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,g=/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;o+="¨0";var b=function(_,v,P,R,j,I,w){return v=v.toLowerCase(),o.toLowerCase().split(v).length-1<2?_:(P.match(/^data:.+?\/.+?;base64,/)?a.gUrls[v]=P.replace(/\s/g,""):a.gUrls[v]=r.subParser("encodeAmpsAndAngles")(P,c,a),I?I+w:(w&&(a.gTitles[v]=w.replace(/"|'/g,"&quot;")),c.parseImgDimensions&&R&&j&&(a.gDimensions[v]={width:R,height:j}),""))};return o=o.replace(g,b),o=o.replace(m,b),o=o.replace(/¨0/,""),o}),r.subParser("tables",function(o,c,a){if(!c.tables)return o;var m=/^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,g=/^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;function b(j){return/^:[ \t]*--*$/.test(j)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(j)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(j)?' style="text-align:center;"':""}function _(j,I){var w="";return j=j.trim(),(c.tablesHeaderId||c.tableHeaderId)&&(w=' id="'+j.replace(/ /g,"_").toLowerCase()+'"'),j=r.subParser("spanGamut")(j,c,a),"<th"+w+I+">"+j+`</th>
`}function v(j,I){var w=r.subParser("spanGamut")(j,c,a);return"<td"+I+">"+w+`</td>
`}function P(j,I){for(var w=`<table>
<thead>
<tr>
`,O=j.length,B=0;B<O;++B)w+=j[B];for(w+=`</tr>
</thead>
<tbody>
`,B=0;B<I.length;++B){w+=`<tr>
`;for(var J=0;J<O;++J)w+=I[B][J];w+=`</tr>
`}return w+=`</tbody>
</table>
`,w}function R(j){var I,w=j.split(`
`);for(I=0;I<w.length;++I)/^ {0,3}\|/.test(w[I])&&(w[I]=w[I].replace(/^ {0,3}\|/,"")),/\|[ \t]*$/.test(w[I])&&(w[I]=w[I].replace(/\|[ \t]*$/,"")),w[I]=r.subParser("codeSpans")(w[I],c,a);var O=w[0].split("|").map(function(we){return we.trim()}),B=w[1].split("|").map(function(we){return we.trim()}),J=[],ue=[],X=[],fe=[];for(w.shift(),w.shift(),I=0;I<w.length;++I)w[I].trim()!==""&&J.push(w[I].split("|").map(function(we){return we.trim()}));if(O.length<B.length)return j;for(I=0;I<B.length;++I)X.push(b(B[I]));for(I=0;I<O.length;++I)r.helper.isUndefined(X[I])&&(X[I]=""),ue.push(_(O[I],X[I]));for(I=0;I<J.length;++I){for(var ke=[],Ae=0;Ae<ue.length;++Ae)r.helper.isUndefined(J[I][Ae]),ke.push(v(J[I][Ae],X[Ae]));fe.push(ke)}return P(ue,fe)}return o=a.converter._dispatch("tables.before",o,c,a),o=o.replace(/\\(\|)/g,r.helper.escapeCharactersCallback),o=o.replace(m,R),o=o.replace(g,R),o=a.converter._dispatch("tables.after",o,c,a),o}),r.subParser("underline",function(o,c,a){return c.underline&&(o=a.converter._dispatch("underline.before",o,c,a),c.literalMidWordUnderscores?(o=o.replace(/\b___(\S[\s\S]*?)___\b/g,function(m,g){return"<u>"+g+"</u>"}),o=o.replace(/\b__(\S[\s\S]*?)__\b/g,function(m,g){return"<u>"+g+"</u>"})):(o=o.replace(/___(\S[\s\S]*?)___/g,function(m,g){return/\S$/.test(g)?"<u>"+g+"</u>":m}),o=o.replace(/__(\S[\s\S]*?)__/g,function(m,g){return/\S$/.test(g)?"<u>"+g+"</u>":m})),o=o.replace(/(_)/g,r.helper.escapeCharactersCallback),o=a.converter._dispatch("underline.after",o,c,a)),o}),r.subParser("unescapeSpecialChars",function(o,c,a){return o=a.converter._dispatch("unescapeSpecialChars.before",o,c,a),o=o.replace(/¨E(\d+)E/g,function(m,g){var b=parseInt(g);return String.fromCharCode(b)}),o=a.converter._dispatch("unescapeSpecialChars.after",o,c,a),o}),r.subParser("makeMarkdown.blockquote",function(o,c){var a="";if(o.hasChildNodes())for(var m=o.childNodes,g=m.length,b=0;b<g;++b){var _=r.subParser("makeMarkdown.node")(m[b],c);_!==""&&(a+=_)}return a=a.trim(),a="> "+a.split(`
`).join(`
> `),a}),r.subParser("makeMarkdown.codeBlock",function(o,c){var a=o.getAttribute("language"),m=o.getAttribute("precodenum");return"```"+a+`
`+c.preList[m]+"\n```"}),r.subParser("makeMarkdown.codeSpan",function(o){return"`"+o.innerHTML+"`"}),r.subParser("makeMarkdown.emphasis",function(o,c){var a="";if(o.hasChildNodes()){a+="*";for(var m=o.childNodes,g=m.length,b=0;b<g;++b)a+=r.subParser("makeMarkdown.node")(m[b],c);a+="*"}return a}),r.subParser("makeMarkdown.header",function(o,c,a){var m=new Array(a+1).join("#"),g="";if(o.hasChildNodes()){g=m+" ";for(var b=o.childNodes,_=b.length,v=0;v<_;++v)g+=r.subParser("makeMarkdown.node")(b[v],c)}return g}),r.subParser("makeMarkdown.hr",function(){return"---"}),r.subParser("makeMarkdown.image",function(o){var c="";return o.hasAttribute("src")&&(c+="!["+o.getAttribute("alt")+"](",c+="<"+o.getAttribute("src")+">",o.hasAttribute("width")&&o.hasAttribute("height")&&(c+=" ="+o.getAttribute("width")+"x"+o.getAttribute("height")),o.hasAttribute("title")&&(c+=' "'+o.getAttribute("title")+'"'),c+=")"),c}),r.subParser("makeMarkdown.links",function(o,c){var a="";if(o.hasChildNodes()&&o.hasAttribute("href")){var m=o.childNodes,g=m.length;a="[";for(var b=0;b<g;++b)a+=r.subParser("makeMarkdown.node")(m[b],c);a+="](",a+="<"+o.getAttribute("href")+">",o.hasAttribute("title")&&(a+=' "'+o.getAttribute("title")+'"'),a+=")"}return a}),r.subParser("makeMarkdown.list",function(o,c,a){var m="";if(!o.hasChildNodes())return"";for(var g=o.childNodes,b=g.length,_=o.getAttribute("start")||1,v=0;v<b;++v)if(!(typeof g[v].tagName>"u"||g[v].tagName.toLowerCase()!=="li")){var P="";a==="ol"?P=_.toString()+". ":P="- ",m+=P+r.subParser("makeMarkdown.listItem")(g[v],c),++_}return m+=`
<!-- -->
`,m.trim()}),r.subParser("makeMarkdown.listItem",function(o,c){for(var a="",m=o.childNodes,g=m.length,b=0;b<g;++b)a+=r.subParser("makeMarkdown.node")(m[b],c);return/\n$/.test(a)?a=a.split(`
`).join(`
    `).replace(/^ {4}$/gm,"").replace(/\n\n+/g,`

`):a+=`
`,a}),r.subParser("makeMarkdown.node",function(o,c,a){a=a||!1;var m="";if(o.nodeType===3)return r.subParser("makeMarkdown.txt")(o,c);if(o.nodeType===8)return"<!--"+o.data+`-->

`;if(o.nodeType!==1)return"";var g=o.tagName.toLowerCase();switch(g){case"h1":a||(m=r.subParser("makeMarkdown.header")(o,c,1)+`

`);break;case"h2":a||(m=r.subParser("makeMarkdown.header")(o,c,2)+`

`);break;case"h3":a||(m=r.subParser("makeMarkdown.header")(o,c,3)+`

`);break;case"h4":a||(m=r.subParser("makeMarkdown.header")(o,c,4)+`

`);break;case"h5":a||(m=r.subParser("makeMarkdown.header")(o,c,5)+`

`);break;case"h6":a||(m=r.subParser("makeMarkdown.header")(o,c,6)+`

`);break;case"p":a||(m=r.subParser("makeMarkdown.paragraph")(o,c)+`

`);break;case"blockquote":a||(m=r.subParser("makeMarkdown.blockquote")(o,c)+`

`);break;case"hr":a||(m=r.subParser("makeMarkdown.hr")(o,c)+`

`);break;case"ol":a||(m=r.subParser("makeMarkdown.list")(o,c,"ol")+`

`);break;case"ul":a||(m=r.subParser("makeMarkdown.list")(o,c,"ul")+`

`);break;case"precode":a||(m=r.subParser("makeMarkdown.codeBlock")(o,c)+`

`);break;case"pre":a||(m=r.subParser("makeMarkdown.pre")(o,c)+`

`);break;case"table":a||(m=r.subParser("makeMarkdown.table")(o,c)+`

`);break;case"code":m=r.subParser("makeMarkdown.codeSpan")(o,c);break;case"em":case"i":m=r.subParser("makeMarkdown.emphasis")(o,c);break;case"strong":case"b":m=r.subParser("makeMarkdown.strong")(o,c);break;case"del":m=r.subParser("makeMarkdown.strikethrough")(o,c);break;case"a":m=r.subParser("makeMarkdown.links")(o,c);break;case"img":m=r.subParser("makeMarkdown.image")(o,c);break;default:m=o.outerHTML+`

`}return m}),r.subParser("makeMarkdown.paragraph",function(o,c){var a="";if(o.hasChildNodes())for(var m=o.childNodes,g=m.length,b=0;b<g;++b)a+=r.subParser("makeMarkdown.node")(m[b],c);return a=a.trim(),a}),r.subParser("makeMarkdown.pre",function(o,c){var a=o.getAttribute("prenum");return"<pre>"+c.preList[a]+"</pre>"}),r.subParser("makeMarkdown.strikethrough",function(o,c){var a="";if(o.hasChildNodes()){a+="~~";for(var m=o.childNodes,g=m.length,b=0;b<g;++b)a+=r.subParser("makeMarkdown.node")(m[b],c);a+="~~"}return a}),r.subParser("makeMarkdown.strong",function(o,c){var a="";if(o.hasChildNodes()){a+="**";for(var m=o.childNodes,g=m.length,b=0;b<g;++b)a+=r.subParser("makeMarkdown.node")(m[b],c);a+="**"}return a}),r.subParser("makeMarkdown.table",function(o,c){var a="",m=[[],[]],g=o.querySelectorAll("thead>tr>th"),b=o.querySelectorAll("tbody>tr"),_,v;for(_=0;_<g.length;++_){var P=r.subParser("makeMarkdown.tableCell")(g[_],c),R="---";if(g[_].hasAttribute("style")){var j=g[_].getAttribute("style").toLowerCase().replace(/\s/g,"");switch(j){case"text-align:left;":R=":---";break;case"text-align:right;":R="---:";break;case"text-align:center;":R=":---:";break}}m[0][_]=P.trim(),m[1][_]=R}for(_=0;_<b.length;++_){var I=m.push([])-1,w=b[_].getElementsByTagName("td");for(v=0;v<g.length;++v){var O=" ";typeof w[v]<"u"&&(O=r.subParser("makeMarkdown.tableCell")(w[v],c)),m[I].push(O)}}var B=3;for(_=0;_<m.length;++_)for(v=0;v<m[_].length;++v){var J=m[_][v].length;J>B&&(B=J)}for(_=0;_<m.length;++_){for(v=0;v<m[_].length;++v)_===1?m[_][v].slice(-1)===":"?m[_][v]=r.helper.padEnd(m[_][v].slice(-1),B-1,"-")+":":m[_][v]=r.helper.padEnd(m[_][v],B,"-"):m[_][v]=r.helper.padEnd(m[_][v],B);a+="| "+m[_].join(" | ")+` |
`}return a.trim()}),r.subParser("makeMarkdown.tableCell",function(o,c){var a="";if(!o.hasChildNodes())return"";for(var m=o.childNodes,g=m.length,b=0;b<g;++b)a+=r.subParser("makeMarkdown.node")(m[b],c,!0);return a.trim()}),r.subParser("makeMarkdown.txt",function(o){var c=o.nodeValue;return c=c.replace(/ +/g," "),c=c.replace(/¨NBSP;/g," "),c=r.helper.unescapeHTMLEntities(c),c=c.replace(/([*_~|`])/g,"\\$1"),c=c.replace(/^(\s*)>/g,"\\$1>"),c=c.replace(/^#/gm,"\\#"),c=c.replace(/^(\s*)([-=]{3,})(\s*)$/,"$1\\$2$3"),c=c.replace(/^( {0,3}\d+)\./gm,"$1\\."),c=c.replace(/^( {0,3})([+-])/gm,"$1\\$2"),c=c.replace(/]([\s]*)\(/g,"\\]$1\\("),c=c.replace(/^ {0,3}\[([\S \t]*?)]:/gm,"\\[$1]:"),c});var Q=this;e.exports?e.exports=r:Q.showdown=r}).call(Qf)})(ra);var eh=ra.exports;const th=Yf(eh);var rh=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ let Yi;
const An = (e) => (Yi = e),
  ea = Symbol();
function cs(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.toString.call(e) === "[object Object]" &&
    typeof e.toJSON != "function"
  );
}
var _r;
(function (e) {
  (e.direct = "direct"),
    (e.patchObject = "patch object"),
    (e.patchFunction = "patch function");
})(_r || (_r = {}));
function Kf() {
  const e = Oo(!0),
    t = e.run(() => Te({}));
  let n = [],
    r = [];
  const s = mn({
    install(u) {
      An(s),
        (s._a = u),
        u.provide(ea, s),
        (u.config.globalProperties.$pinia = s),
        r.forEach((i) => n.push(i)),
        (r = []);
    },
    use(u) {
      return !this._a && !Wf ? r.push(u) : n.push(u), this;
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return s;
}
const ta = () => {};
function co(e, t, n, r = ta) {
  e.push(t);
  const s = () => {
    const u = e.indexOf(t);
    u > -1 && (e.splice(u, 1), r());
  };
  return !n && Lo() && Ha(s), s;
}
function Vt(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const Gf = (e) => e();
function ls(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, r) => e.set(r, n)),
    e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue;
    const r = t[n],
      s = e[n];
    cs(s) && cs(r) && e.hasOwnProperty(n) && !Ee(r) && !ct(r)
      ? (e[n] = ls(s, r))
      : (e[n] = r);
  }
  return e;
}
const Jf = Symbol();
function Zf(e) {
  return !cs(e) || !e.hasOwnProperty(Jf);
}
const { assign: bt } = Object;
function Xf(e) {
  return !!(Ee(e) && e.effect);
}
function Qf(e, t, n, r) {
  const { state: s, actions: u, getters: i } = t,
    d = n.state.value[e];
  let l;
  function f() {
    d || (n.state.value[e] = s ? s() : {});
    const h = ld(n.state.value[e]);
    return bt(
      h,
      u,
      Object.keys(i || {}).reduce(
        (g, v) => (
          (g[v] = mn(
            Ne(() => {
              An(n);
              const S = n._s.get(e);
              return i[v].call(S, S);
            })
          )),
          g
        ),
        {}
      )
    );
  }
  return (l = ra(e, f, t, n, r, !0)), l;
}
function ra(e, t, n = {}, r, s, u) {
  let i;
  const d = bt({ actions: {} }, n),
    l = { deep: !0 };
  let f,
    h,
    g = [],
    v = [],
    S;
  const C = r.state.value[e];
  !u && !C && (r.state.value[e] = {}), Te({});
  let T;
  function q(m) {
    let b;
    (f = h = !1),
      typeof m == "function"
        ? (m(r.state.value[e]),
          (b = { type: _r.patchFunction, storeId: e, events: S }))
        : (ls(r.state.value[e], m),
          (b = { type: _r.patchObject, payload: m, storeId: e, events: S }));
    const _ = (T = Symbol());
    _n().then(() => {
      T === _ && (f = !0);
    }),
      (h = !0),
      Vt(g, b, r.state.value[e]);
  }
  const z = u
    ? function () {
        const { state: b } = n,
          _ = b ? b() : {};
        this.$patch((E) => {
          bt(E, _);
        });
      }
    : ta;
  function U() {
    i.stop(), (g = []), (v = []), r._s.delete(e);
  }
  function K(m, b) {
    return function () {
      An(r);
      const _ = Array.from(arguments),
        E = [],
        P = [];
      function L(y) {
        E.push(y);
      }
      function N(y) {
        P.push(y);
      }
      Vt(v, { args: _, name: m, store: c, after: L, onError: N });
      let F;
      try {
        F = b.apply(this && this.$id === e ? this : c, _);
      } catch (y) {
        throw (Vt(P, y), y);
      }
      return F instanceof Promise
        ? F.then((y) => (Vt(E, y), y)).catch(
            (y) => (Vt(P, y), Promise.reject(y))
          )
        : (Vt(E, F), F);
    };
  }
  const o = {
      _p: r,
      $id: e,
      $onAction: co.bind(null, v),
      $patch: q,
      $reset: z,
      $subscribe(m, b = {}) {
        const _ = co(g, m, b.detached, () => E()),
          E = i.run(() =>
            lr(
              () => r.state.value[e],
              (P) => {
                (b.flush === "sync" ? h : f) &&
                  m({ storeId: e, type: _r.direct, events: S }, P);
              },
              bt({}, l, b)
            )
          );
        return _;
      },
      $dispose: U,
    },
    c = Or(o);
  r._s.set(e, c);
  const p = ((r._a && r._a.runWithContext) || Gf)(() =>
    r._e.run(() => (i = Oo()).run(t))
  );
  for (const m in p) {
    const b = p[m];
    if ((Ee(b) && !Xf(b)) || ct(b))
      u ||
        (C && Zf(b) && (Ee(b) ? (b.value = C[m]) : ls(b, C[m])),
        (r.state.value[e][m] = b));
    else if (typeof b == "function") {
      const _ = K(m, b);
      (p[m] = _), (d.actions[m] = b);
    }
  }
  return (
    bt(c, p),
    bt(ie(c), p),
    Object.defineProperty(c, "$state", {
      get: () => r.state.value[e],
      set: (m) => {
        q((b) => {
          bt(b, m);
        });
      },
    }),
    r._p.forEach((m) => {
      bt(
        c,
        i.run(() => m({ store: c, app: r._a, pinia: r, options: d }))
      );
    }),
    C && u && n.hydrate && n.hydrate(c.$state, C),
    (f = !0),
    (h = !0),
    c
  );
}
function Yf(e, t, n) {
  let r, s;
  const u = typeof t == "function";
  typeof e == "string" ? ((r = e), (s = u ? n : t)) : ((s = e), (r = e.id));
  function i(d, l) {
    const f = Zd();
    return (
      (d = d || (f ? Ge(ea, null) : null)),
      d && An(d),
      (d = Yi),
      d._s.has(r) || (u ? ra(r, t, s, d) : Qf(r, s, d)),
      d._s.get(r)
    );
  }
  return (i.$id = r), i;
}
function na(e) {
  {
    e = ie(e);
    const t = {};
    for (const n in e) {
      const r = e[n];
      (Ee(r) || ct(r)) && (t[n] = pd(e, n));
    }
    return t;
  }
}
function sa(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: eh } = Object.prototype,
  { getPrototypeOf: xs } = Object,
  Tn = ((e) => (t) => {
    const n = eh.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  st = (e) => ((e = e.toLowerCase()), (t) => Tn(t) === e),
  Rn = (e) => (t) => typeof t === e,
  { isArray: sr } = Array,
  Tr = Rn("undefined");
function th(e) {
  return (
    e !== null &&
    !Tr(e) &&
    e.constructor !== null &&
    !Tr(e.constructor) &&
    qe(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const ua = st("ArrayBuffer");
function rh(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && ua(e.buffer)),
    t
  );
}
const nh = Rn("string"),
  qe = Rn("function"),
  oa = Rn("number"),
  On = (e) => e !== null && typeof e == "object",
  sh = (e) => e === !0 || e === !1,
  Qr = (e) => {
    if (Tn(e) !== "object") return !1;
    const t = xs(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  uh = st("Date"),
  oh = st("File"),
  ih = st("Blob"),
  ah = st("FileList"),
  dh = (e) => On(e) && qe(e.pipe),
  ch = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (qe(e.append) &&
          ((t = Tn(e)) === "formdata" ||
            (t === "object" &&
              qe(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  lh = st("URLSearchParams"),
  fh = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Mr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, s;
  if ((typeof e != "object" && (e = [e]), sr(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const u = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = u.length;
    let d;
    for (r = 0; r < i; r++) (d = u[r]), t.call(null, e[d], d, e);
  }
}
function ia(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const aa =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  da = (e) => !Tr(e) && e !== aa;
function fs() {
  const { caseless: e } = (da(this) && this) || {},
    t = {},
    n = (r, s) => {
      const u = (e && ia(t, s)) || s;
      Qr(t[u]) && Qr(r)
        ? (t[u] = fs(t[u], r))
        : Qr(r)
        ? (t[u] = fs({}, r))
        : sr(r)
        ? (t[u] = r.slice())
        : (t[u] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && Mr(arguments[r], n);
  return t;
}
const hh = (e, t, n, { allOwnKeys: r } = {}) => (
    Mr(
      t,
      (s, u) => {
        n && qe(s) ? (e[u] = sa(s, n)) : (e[u] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  ph = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  mh = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  gh = (e, t, n, r) => {
    let s, u, i;
    const d = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), u = s.length; u-- > 0; )
        (i = s[u]), (!r || r(i, e, t)) && !d[i] && ((t[i] = e[i]), (d[i] = !0));
      e = n !== !1 && xs(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  _h = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  bh = (e) => {
    if (!e) return null;
    if (sr(e)) return e;
    let t = e.length;
    if (!oa(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  wh = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && xs(Uint8Array)),
  yh = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const u = s.value;
      t.call(e, u[0], u[1]);
    }
  },
  vh = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  kh = st("HTMLFormElement"),
  Eh = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  lo = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Sh = st("RegExp"),
  ca = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Mr(n, (s, u) => {
      let i;
      (i = t(s, u, e)) !== !1 && (r[u] = i || s);
    }),
      Object.defineProperties(e, r);
  },
  Ch = (e) => {
    ca(e, (t, n) => {
      if (qe(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (qe(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  Ph = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((u) => {
          n[u] = !0;
        });
      };
    return sr(e) ? r(e) : r(String(e).split(t)), n;
  },
  Ah = () => {},
  Th = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  qn = "abcdefghijklmnopqrstuvwxyz",
  fo = "0123456789",
  la = { DIGIT: fo, ALPHA: qn, ALPHA_DIGIT: qn + qn.toUpperCase() + fo },
  Rh = (e = 16, t = la.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function Oh(e) {
  return !!(
    e &&
    qe(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const Lh = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (On(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[s] = r;
            const u = sr(r) ? [] : {};
            return (
              Mr(r, (i, d) => {
                const l = n(i, s + 1);
                !Tr(l) && (u[d] = l);
              }),
              (t[s] = void 0),
              u
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  jh = st("AsyncFunction"),
  Mh = (e) => e && (On(e) || qe(e)) && qe(e.then) && qe(e.catch),
  M = {
    isArray: sr,
    isArrayBuffer: ua,
    isBuffer: th,
    isFormData: ch,
    isArrayBufferView: rh,
    isString: nh,
    isNumber: oa,
    isBoolean: sh,
    isObject: On,
    isPlainObject: Qr,
    isUndefined: Tr,
    isDate: uh,
    isFile: oh,
    isBlob: ih,
    isRegExp: Sh,
    isFunction: qe,
    isStream: dh,
    isURLSearchParams: lh,
    isTypedArray: wh,
    isFileList: ah,
    forEach: Mr,
    merge: fs,
    extend: hh,
    trim: fh,
    stripBOM: ph,
    inherits: mh,
    toFlatObject: gh,
    kindOf: Tn,
    kindOfTest: st,
    endsWith: _h,
    toArray: bh,
    forEachEntry: yh,
    matchAll: vh,
    isHTMLForm: kh,
    hasOwnProperty: lo,
    hasOwnProp: lo,
    reduceDescriptors: ca,
    freezeMethods: Ch,
    toObjectSet: Ph,
    toCamelCase: Eh,
    noop: Ah,
    toFiniteNumber: Th,
    findKey: ia,
    global: aa,
    isContextDefined: da,
    ALPHABET: la,
    generateString: Rh,
    isSpecCompliantForm: Oh,
    toJSONObject: Lh,
    isAsyncFn: jh,
    isThenable: Mh,
  };
function ae(e, t, n, r, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && (this.response = s);
}
M.inherits(ae, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: M.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const fa = ae.prototype,
  ha = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  ha[e] = { value: e };
});
Object.defineProperties(ae, ha);
Object.defineProperty(fa, "isAxiosError", { value: !0 });
ae.from = (e, t, n, r, s, u) => {
  const i = Object.create(fa);
  return (
    M.toFlatObject(
      e,
      i,
      function (l) {
        return l !== Error.prototype;
      },
      (d) => d !== "isAxiosError"
    ),
    ae.call(i, e.message, t, n, r, s),
    (i.cause = e),
    (i.name = e.name),
    u && Object.assign(i, u),
    i
  );
};
const Nh = null;
function hs(e) {
  return M.isPlainObject(e) || M.isArray(e);
}
function pa(e) {
  return M.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ho(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, u) {
          return (s = pa(s)), !n && u ? "[" + s + "]" : s;
        })
        .join(n ? "." : "")
    : t;
}
function Ih(e) {
  return M.isArray(e) && !e.some(hs);
}
const Fh = M.toFlatObject(M, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Ln(e, t, n) {
  if (!M.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = M.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (T, q) {
        return !M.isUndefined(q[T]);
      }
    ));
  const r = n.metaTokens,
    s = n.visitor || h,
    u = n.dots,
    i = n.indexes,
    l = (n.Blob || (typeof Blob < "u" && Blob)) && M.isSpecCompliantForm(t);
  if (!M.isFunction(s)) throw new TypeError("visitor must be a function");
  function f(C) {
    if (C === null) return "";
    if (M.isDate(C)) return C.toISOString();
    if (!l && M.isBlob(C))
      throw new ae("Blob is not supported. Use a Buffer instead.");
    return M.isArrayBuffer(C) || M.isTypedArray(C)
      ? l && typeof Blob == "function"
        ? new Blob([C])
        : Buffer.from(C)
      : C;
  }
  function h(C, T, q) {
    let z = C;
    if (C && !q && typeof C == "object") {
      if (M.endsWith(T, "{}"))
        (T = r ? T : T.slice(0, -2)), (C = JSON.stringify(C));
      else if (
        (M.isArray(C) && Ih(C)) ||
        ((M.isFileList(C) || M.endsWith(T, "[]")) && (z = M.toArray(C)))
      )
        return (
          (T = pa(T)),
          z.forEach(function (K, o) {
            !(M.isUndefined(K) || K === null) &&
              t.append(
                i === !0 ? ho([T], o, u) : i === null ? T : T + "[]",
                f(K)
              );
          }),
          !1
        );
    }
    return hs(C) ? !0 : (t.append(ho(q, T, u), f(C)), !1);
  }
  const g = [],
    v = Object.assign(Fh, {
      defaultVisitor: h,
      convertValue: f,
      isVisitable: hs,
    });
  function S(C, T) {
    if (!M.isUndefined(C)) {
      if (g.indexOf(C) !== -1)
        throw Error("Circular reference detected in " + T.join("."));
      g.push(C),
        M.forEach(C, function (z, U) {
          (!(M.isUndefined(z) || z === null) &&
            s.call(t, z, M.isString(U) ? U.trim() : U, T, v)) === !0 &&
            S(z, T ? T.concat(U) : [U]);
        }),
        g.pop();
    }
  }
  if (!M.isObject(e)) throw new TypeError("data must be an object");
  return S(e), t;
}
function po(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function qs(e, t) {
  (this._pairs = []), e && Ln(e, this, t);
}
const ma = qs.prototype;
ma.append = function (t, n) {
  this._pairs.push([t, n]);
};
ma.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, po);
      }
    : po;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + "=" + n(s[1]);
    }, "")
    .join("&");
};
function Bh(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function ga(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Bh,
    s = n && n.serialize;
  let u;
  if (
    (s
      ? (u = s(t, n))
      : (u = M.isURLSearchParams(t) ? t.toString() : new qs(t, n).toString(r)),
    u)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + u);
  }
  return e;
}
class mo {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    M.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const _a = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  zh = typeof URLSearchParams < "u" ? URLSearchParams : qs,
  $h = typeof FormData < "u" ? FormData : null,
  Hh = typeof Blob < "u" ? Blob : null,
  Dh = {
    isBrowser: !0,
    classes: { URLSearchParams: zh, FormData: $h, Blob: Hh },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  ba = typeof window < "u" && typeof document < "u",
  Uh = ((e) => ba && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  Vh =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  xh = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: ba,
        hasStandardBrowserEnv: Uh,
        hasStandardBrowserWebWorkerEnv: Vh,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  tt = { ...xh, ...Dh };
function qh(e, t) {
  return Ln(
    e,
    new tt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, u) {
          return tt.isNode && M.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : u.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function Wh(e) {
  return M.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function Kh(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let u;
  for (r = 0; r < s; r++) (u = n[r]), (t[u] = e[u]);
  return t;
}
function wa(e) {
  function t(n, r, s, u) {
    let i = n[u++];
    if (i === "__proto__") return !0;
    const d = Number.isFinite(+i),
      l = u >= n.length;
    return (
      (i = !i && M.isArray(s) ? s.length : i),
      l
        ? (M.hasOwnProp(s, i) ? (s[i] = [s[i], r]) : (s[i] = r), !d)
        : ((!s[i] || !M.isObject(s[i])) && (s[i] = []),
          t(n, r, s[i], u) && M.isArray(s[i]) && (s[i] = Kh(s[i])),
          !d)
    );
  }
  if (M.isFormData(e) && M.isFunction(e.entries)) {
    const n = {};
    return (
      M.forEachEntry(e, (r, s) => {
        t(Wh(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function Gh(e, t, n) {
  if (M.isString(e))
    try {
      return (t || JSON.parse)(e), M.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ws = {
  transitional: _a,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        s = r.indexOf("application/json") > -1,
        u = M.isObject(t);
      if ((u && M.isHTMLForm(t) && (t = new FormData(t)), M.isFormData(t)))
        return s ? JSON.stringify(wa(t)) : t;
      if (
        M.isArrayBuffer(t) ||
        M.isBuffer(t) ||
        M.isStream(t) ||
        M.isFile(t) ||
        M.isBlob(t)
      )
        return t;
      if (M.isArrayBufferView(t)) return t.buffer;
      if (M.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let d;
      if (u) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return qh(t, this.formSerializer).toString();
        if ((d = M.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return Ln(
            d ? { "files[]": t } : t,
            l && new l(),
            this.formSerializer
          );
        }
      }
      return u || s ? (n.setContentType("application/json", !1), Gh(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Ws.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === "json";
      if (t && M.isString(t) && ((r && !this.responseType) || s)) {
        const i = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (d) {
          if (i)
            throw d.name === "SyntaxError"
              ? ae.from(d, ae.ERR_BAD_RESPONSE, this, null, this.response)
              : d;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: tt.classes.FormData, Blob: tt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
M.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ws.headers[e] = {};
});
const Ks = Ws,
  Jh = M.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  Zh = (e) => {
    const t = {};
    let n, r, s;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            (s = i.indexOf(":")),
              (n = i.substring(0, s).trim().toLowerCase()),
              (r = i.substring(s + 1).trim()),
              !(!n || (t[n] && Jh[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  go = Symbol("internals");
function ar(e) {
  return e && String(e).trim().toLowerCase();
}
function Yr(e) {
  return e === !1 || e == null ? e : M.isArray(e) ? e.map(Yr) : String(e);
}
function Xh(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const Qh = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Wn(e, t, n, r, s) {
  if (M.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!M.isString(t))) {
    if (M.isString(r)) return t.indexOf(r) !== -1;
    if (M.isRegExp(r)) return r.test(t);
  }
}
function Yh(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function ep(e, t) {
  const n = M.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, u, i) {
        return this[r].call(this, t, s, u, i);
      },
      configurable: !0,
    });
  });
}
class jn {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function u(d, l, f) {
      const h = ar(l);
      if (!h) throw new Error("header name must be a non-empty string");
      const g = M.findKey(s, h);
      (!g || s[g] === void 0 || f === !0 || (f === void 0 && s[g] !== !1)) &&
        (s[g || l] = Yr(d));
    }
    const i = (d, l) => M.forEach(d, (f, h) => u(f, h, l));
    return (
      M.isPlainObject(t) || t instanceof this.constructor
        ? i(t, n)
        : M.isString(t) && (t = t.trim()) && !Qh(t)
        ? i(Zh(t), n)
        : t != null && u(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = ar(t)), t)) {
      const r = M.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return Xh(s);
        if (M.isFunction(n)) return n.call(this, s, r);
        if (M.isRegExp(n)) return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = ar(t)), t)) {
      const r = M.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Wn(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function u(i) {
      if (((i = ar(i)), i)) {
        const d = M.findKey(r, i);
        d && (!n || Wn(r, r[d], d, n)) && (delete r[d], (s = !0));
      }
    }
    return M.isArray(t) ? t.forEach(u) : u(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const u = n[r];
      (!t || Wn(this, this[u], u, t, !0)) && (delete this[u], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      M.forEach(this, (s, u) => {
        const i = M.findKey(r, u);
        if (i) {
          (n[i] = Yr(s)), delete n[u];
          return;
        }
        const d = t ? Yh(u) : String(u).trim();
        d !== u && delete n[u], (n[d] = Yr(s)), (r[d] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      M.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && M.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[go] = this[go] = { accessors: {} }).accessors,
      s = this.prototype;
    function u(i) {
      const d = ar(i);
      r[d] || (ep(s, i), (r[d] = !0));
    }
    return M.isArray(t) ? t.forEach(u) : u(t), this;
  }
}
jn.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
M.reduceDescriptors(jn.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
M.freezeMethods(jn);
const lt = jn;
function Kn(e, t) {
  const n = this || Ks,
    r = t || n,
    s = lt.from(r.headers);
  let u = r.data;
  return (
    M.forEach(e, function (d) {
      u = d.call(n, u, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    u
  );
}
function ya(e) {
  return !!(e && e.__CANCEL__);
}
function Nr(e, t, n) {
  ae.call(this, e ?? "canceled", ae.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
M.inherits(Nr, ae, { __CANCEL__: !0 });
function tp(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new ae(
          "Request failed with status code " + n.status,
          [ae.ERR_BAD_REQUEST, ae.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const rp = tt.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, s, u) {
        const i = [e + "=" + encodeURIComponent(t)];
        M.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
          M.isString(r) && i.push("path=" + r),
          M.isString(s) && i.push("domain=" + s),
          u === !0 && i.push("secure"),
          (document.cookie = i.join("; "));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function np(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function sp(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function va(e, t) {
  return e && !np(t) ? sp(e, t) : t;
}
const up = tt.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function s(u) {
        let i = u;
        return (
          t && (n.setAttribute("href", i), (i = n.href)),
          n.setAttribute("href", i),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = s(window.location.href)),
        function (i) {
          const d = M.isString(i) ? s(i) : i;
          return d.protocol === r.protocol && d.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function op(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function ip(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    u = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const f = Date.now(),
        h = r[u];
      i || (i = f), (n[s] = l), (r[s] = f);
      let g = u,
        v = 0;
      for (; g !== s; ) (v += n[g++]), (g = g % e);
      if (((s = (s + 1) % e), s === u && (u = (u + 1) % e), f - i < t)) return;
      const S = h && f - h;
      return S ? Math.round((v * 1e3) / S) : void 0;
    }
  );
}
function _o(e, t) {
  let n = 0;
  const r = ip(50, 250);
  return (s) => {
    const u = s.loaded,
      i = s.lengthComputable ? s.total : void 0,
      d = u - n,
      l = r(d),
      f = u <= i;
    n = u;
    const h = {
      loaded: u,
      total: i,
      progress: i ? u / i : void 0,
      bytes: d,
      rate: l || void 0,
      estimated: l && i && f ? (i - u) / l : void 0,
      event: s,
    };
    (h[t ? "download" : "upload"] = !0), e(h);
  };
}
const ap = typeof XMLHttpRequest < "u",
  dp =
    ap &&
    function (e) {
      return new Promise(function (n, r) {
        let s = e.data;
        const u = lt.from(e.headers).normalize();
        let { responseType: i, withXSRFToken: d } = e,
          l;
        function f() {
          e.cancelToken && e.cancelToken.unsubscribe(l),
            e.signal && e.signal.removeEventListener("abort", l);
        }
        let h;
        if (M.isFormData(s)) {
          if (tt.hasStandardBrowserEnv || tt.hasStandardBrowserWebWorkerEnv)
            u.setContentType(!1);
          else if ((h = u.getContentType()) !== !1) {
            const [T, ...q] = h
              ? h
                  .split(";")
                  .map((z) => z.trim())
                  .filter(Boolean)
              : [];
            u.setContentType([T || "multipart/form-data", ...q].join("; "));
          }
        }
        let g = new XMLHttpRequest();
        if (e.auth) {
          const T = e.auth.username || "",
            q = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          u.set("Authorization", "Basic " + btoa(T + ":" + q));
        }
        const v = va(e.baseURL, e.url);
        g.open(e.method.toUpperCase(), ga(v, e.params, e.paramsSerializer), !0),
          (g.timeout = e.timeout);
        function S() {
          if (!g) return;
          const T = lt.from(
              "getAllResponseHeaders" in g && g.getAllResponseHeaders()
            ),
            z = {
              data:
                !i || i === "text" || i === "json"
                  ? g.responseText
                  : g.response,
              status: g.status,
              statusText: g.statusText,
              headers: T,
              config: e,
              request: g,
            };
          tp(
            function (K) {
              n(K), f();
            },
            function (K) {
              r(K), f();
            },
            z
          ),
            (g = null);
        }
        if (
          ("onloadend" in g
            ? (g.onloadend = S)
            : (g.onreadystatechange = function () {
                !g ||
                  g.readyState !== 4 ||
                  (g.status === 0 &&
                    !(g.responseURL && g.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(S);
              }),
          (g.onabort = function () {
            g &&
              (r(new ae("Request aborted", ae.ECONNABORTED, e, g)), (g = null));
          }),
          (g.onerror = function () {
            r(new ae("Network Error", ae.ERR_NETWORK, e, g)), (g = null);
          }),
          (g.ontimeout = function () {
            let q = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const z = e.transitional || _a;
            e.timeoutErrorMessage && (q = e.timeoutErrorMessage),
              r(
                new ae(
                  q,
                  z.clarifyTimeoutError ? ae.ETIMEDOUT : ae.ECONNABORTED,
                  e,
                  g
                )
              ),
              (g = null);
          }),
          tt.hasStandardBrowserEnv &&
            (d && M.isFunction(d) && (d = d(e)), d || (d !== !1 && up(v))))
        ) {
          const T =
            e.xsrfHeaderName && e.xsrfCookieName && rp.read(e.xsrfCookieName);
          T && u.set(e.xsrfHeaderName, T);
        }
        s === void 0 && u.setContentType(null),
          "setRequestHeader" in g &&
            M.forEach(u.toJSON(), function (q, z) {
              g.setRequestHeader(z, q);
            }),
          M.isUndefined(e.withCredentials) ||
            (g.withCredentials = !!e.withCredentials),
          i && i !== "json" && (g.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            g.addEventListener("progress", _o(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            g.upload &&
            g.upload.addEventListener("progress", _o(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((l = (T) => {
              g &&
                (r(!T || T.type ? new Nr(null, e, g) : T),
                g.abort(),
                (g = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(l),
            e.signal &&
              (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
        const C = op(v);
        if (C && tt.protocols.indexOf(C) === -1) {
          r(new ae("Unsupported protocol " + C + ":", ae.ERR_BAD_REQUEST, e));
          return;
        }
        g.send(s || null);
      });
    },
  ps = { http: Nh, xhr: dp };
M.forEach(ps, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const bo = (e) => `- ${e}`,
  cp = (e) => M.isFunction(e) || e === null || e === !1,
  ka = {
    getAdapter: (e) => {
      e = M.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const s = {};
      for (let u = 0; u < t; u++) {
        n = e[u];
        let i;
        if (
          ((r = n),
          !cp(n) && ((r = ps[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new ae(`Unknown adapter '${i}'`);
        if (r) break;
        s[i || "#" + u] = r;
      }
      if (!r) {
        const u = Object.entries(s).map(
          ([d, l]) =>
            `adapter ${d} ` +
            (l === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let i = t
          ? u.length > 1
            ? `since :
` +
              u.map(bo).join(`
`)
            : " " + bo(u[0])
          : "as no adapter specified";
        throw new ae(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: ps,
  };
function Gn(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Nr(null, e);
}
function wo(e) {
  return (
    Gn(e),
    (e.headers = lt.from(e.headers)),
    (e.data = Kn.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    ka
      .getAdapter(e.adapter || Ks.adapter)(e)
      .then(
        function (r) {
          return (
            Gn(e),
            (r.data = Kn.call(e, e.transformResponse, r)),
            (r.headers = lt.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            ya(r) ||
              (Gn(e),
              r &&
                r.response &&
                ((r.response.data = Kn.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = lt.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const yo = (e) => (e instanceof lt ? { ...e } : e);
function tr(e, t) {
  t = t || {};
  const n = {};
  function r(f, h, g) {
    return M.isPlainObject(f) && M.isPlainObject(h)
      ? M.merge.call({ caseless: g }, f, h)
      : M.isPlainObject(h)
      ? M.merge({}, h)
      : M.isArray(h)
      ? h.slice()
      : h;
  }
  function s(f, h, g) {
    if (M.isUndefined(h)) {
      if (!M.isUndefined(f)) return r(void 0, f, g);
    } else return r(f, h, g);
  }
  function u(f, h) {
    if (!M.isUndefined(h)) return r(void 0, h);
  }
  function i(f, h) {
    if (M.isUndefined(h)) {
      if (!M.isUndefined(f)) return r(void 0, f);
    } else return r(void 0, h);
  }
  function d(f, h, g) {
    if (g in t) return r(f, h);
    if (g in e) return r(void 0, f);
  }
  const l = {
    url: u,
    method: u,
    data: u,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: d,
    headers: (f, h) => s(yo(f), yo(h), !0),
  };
  return (
    M.forEach(Object.keys(Object.assign({}, e, t)), function (h) {
      const g = l[h] || s,
        v = g(e[h], t[h], h);
      (M.isUndefined(v) && g !== d) || (n[h] = v);
    }),
    n
  );
}
const Ea = "1.6.8",
  Gs = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Gs[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const vo = {};
Gs.transitional = function (t, n, r) {
  function s(u, i) {
    return (
      "[Axios v" +
      Ea +
      "] Transitional option '" +
      u +
      "'" +
      i +
      (r ? ". " + r : "")
    );
  }
  return (u, i, d) => {
    if (t === !1)
      throw new ae(
        s(i, " has been removed" + (n ? " in " + n : "")),
        ae.ERR_DEPRECATED
      );
    return (
      n &&
        !vo[i] &&
        ((vo[i] = !0),
        console.warn(
          s(
            i,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(u, i, d) : !0
    );
  };
};
function lp(e, t, n) {
  if (typeof e != "object")
    throw new ae("options must be an object", ae.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const u = r[s],
      i = t[u];
    if (i) {
      const d = e[u],
        l = d === void 0 || i(d, u, e);
      if (l !== !0)
        throw new ae("option " + u + " must be " + l, ae.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new ae("Unknown option " + u, ae.ERR_BAD_OPTION);
  }
}
const ms = { assertOptions: lp, validators: Gs },
  gt = ms.validators;
class cn {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new mo(), response: new mo() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s;
        Error.captureStackTrace
          ? Error.captureStackTrace((s = {}))
          : (s = new Error());
        const u = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        r.stack
          ? u &&
            !String(r.stack).endsWith(u.replace(/^.+\n.+\n/, "")) &&
            (r.stack +=
              `
` + u)
          : (r.stack = u);
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = tr(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: u } = n;
    r !== void 0 &&
      ms.assertOptions(
        r,
        {
          silentJSONParsing: gt.transitional(gt.boolean),
          forcedJSONParsing: gt.transitional(gt.boolean),
          clarifyTimeoutError: gt.transitional(gt.boolean),
        },
        !1
      ),
      s != null &&
        (M.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : ms.assertOptions(
              s,
              { encode: gt.function, serialize: gt.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i = u && M.merge(u.common, u[n.method]);
    u &&
      M.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (C) => {
          delete u[C];
        }
      ),
      (n.headers = lt.concat(i, u));
    const d = [];
    let l = !0;
    this.interceptors.request.forEach(function (T) {
      (typeof T.runWhen == "function" && T.runWhen(n) === !1) ||
        ((l = l && T.synchronous), d.unshift(T.fulfilled, T.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function (T) {
      f.push(T.fulfilled, T.rejected);
    });
    let h,
      g = 0,
      v;
    if (!l) {
      const C = [wo.bind(this), void 0];
      for (
        C.unshift.apply(C, d),
          C.push.apply(C, f),
          v = C.length,
          h = Promise.resolve(n);
        g < v;

      )
        h = h.then(C[g++], C[g++]);
      return h;
    }
    v = d.length;
    let S = n;
    for (g = 0; g < v; ) {
      const C = d[g++],
        T = d[g++];
      try {
        S = C(S);
      } catch (q) {
        T.call(this, q);
        break;
      }
    }
    try {
      h = wo.call(this, S);
    } catch (C) {
      return Promise.reject(C);
    }
    for (g = 0, v = f.length; g < v; ) h = h.then(f[g++], f[g++]);
    return h;
  }
  getUri(t) {
    t = tr(this.defaults, t);
    const n = va(t.baseURL, t.url);
    return ga(n, t.params, t.paramsSerializer);
  }
}
M.forEach(["delete", "get", "head", "options"], function (t) {
  cn.prototype[t] = function (n, r) {
    return this.request(
      tr(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
M.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (u, i, d) {
      return this.request(
        tr(d || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: u,
          data: i,
        })
      );
    };
  }
  (cn.prototype[t] = n()), (cn.prototype[t + "Form"] = n(!0));
});
const en = cn;
class Js {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (u) {
      n = u;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let u = r._listeners.length;
      for (; u-- > 0; ) r._listeners[u](s);
      r._listeners = null;
    }),
      (this.promise.then = (s) => {
        let u;
        const i = new Promise((d) => {
          r.subscribe(d), (u = d);
        }).then(s);
        return (
          (i.cancel = function () {
            r.unsubscribe(u);
          }),
          i
        );
      }),
      t(function (u, i, d) {
        r.reason || ((r.reason = new Nr(u, i, d)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new Js(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
}
const fp = Js;
function hp(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function pp(e) {
  return M.isObject(e) && e.isAxiosError === !0;
}
const gs = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(gs).forEach(([e, t]) => {
  gs[t] = e;
});
const mp = gs;
function Sa(e) {
  const t = new en(e),
    n = sa(en.prototype.request, t);
  return (
    M.extend(n, en.prototype, t, { allOwnKeys: !0 }),
    M.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return Sa(tr(e, s));
    }),
    n
  );
}
const Se = Sa(Ks);
Se.Axios = en;
Se.CanceledError = Nr;
Se.CancelToken = fp;
Se.isCancel = ya;
Se.VERSION = Ea;
Se.toFormData = Ln;
Se.AxiosError = ae;
Se.Cancel = Se.CanceledError;
Se.all = function (t) {
  return Promise.all(t);
};
Se.spread = hp;
Se.isAxiosError = pp;
Se.mergeConfig = tr;
Se.AxiosHeaders = lt;
Se.formToJSON = (e) => wa(M.isHTMLForm(e) ? new FormData(e) : e);
Se.getAdapter = ka.getAdapter;
Se.HttpStatusCode = mp;
Se.default = Se;
const ko = JSON.parse(
    localStorage.getItem("user") || sessionStorage.getItem("user")
  ),
  gp = ko
    ? { status: { loggedIn: !0 }, user: ko }
    : { status: { loggedIn: !1 }, user: null },
  _p = (e) => {
    const t = JSON.stringify(e);
    localStorage.getItem("user") && localStorage.setItem("user", t),
      sessionStorage.getItem("user") && sessionStorage.setItem("user", t);
  },
  Zs = Yf("AuthStore ", () => {
    const e = Te(gp);
    return {
      userState: e,
      logOut: () => {
        localStorage.removeItem("user"),
          sessionStorage.removeItem("user"),
          (e.value = { status: { loggedIn: !1 }, user: null });
      },
      logIn: async (s) =>
        new Promise((u, i) => {
          Se.post("/login", s.authData, {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          })
            .then((l) => {
              if (l.status == 200) {
                const f = l.data;
                (f.expires_at = new Date(Date.now() + f.expires_in * 1e3)),
                  (f.refresh_token_expires_at = new Date(
                    Date.now() + f.refresh_expires_in * 1e3
                  )),
                  console.log(f),
                  s.rememberUser
                    ? localStorage.setItem("user", JSON.stringify(f))
                    : sessionStorage.setItem("user", JSON.stringify(f)),
                  (e.value.user = f),
                  (e.value.status.loggedIn = !0),
                  u();
              }
            })
            .catch((l) => {
              console.log(l), i();
            });
        }),
      updateAccessToken: async () =>
        new Promise((s, u) => {
          Se.post(
            "/refresh",
            { refresh_token: e.value.user.refresh_token },
            {
              headers: {
                Authorization: `Bearer ${e.value.user.refresh_token}`,
              },
            }
          )
            .then((d) => {
              if (d.status == 200) {
                const l = d.data,
                  f = e.value.user;
                (f.access_token = l.access_token),
                  (f.expires_at = new Date(Date.now() + l.expires_in * 1e3)),
                  (f.refresh_token = l.refresh_token),
                  (f.refresh_token_expires_at = new Date(
                    Date.now() + l.refresh_expires_in * 1e3
                  )),
                  _p(f),
                  s();
              }
            })
            .catch((d) => {
              console.log(d), u();
            });
        }),
    };
  }),
  bp = Hs(
    '<nav class="app-menu__nav"><a href="javascript:void(0)">ДИАНА</a><a href="javascript:void(0)">WENDY</a><a href="javascript:void(0)">АНАТОЛИЙ</a><a href="javascript:void(0)">ROBINZON</a><a href="javascript:void(0)">КОЛОМБО</a><a href="javascript:void(0)">VOLTER</a></nav>',
    1
  ),
  wp = { class: "home-page__content-inner" },
  yp = Q(
    "h1",
    { class: "home-page__title" },
    [
      Q("span", { class: "color-title" }, "{ Привет }"),
      Zr(),
      Q("br"),
      Zr(" Меня зовут"),
      Q("br"),
      Zr(" Робинзон! "),
    ],
    -1
  ),
  vp = Q(
    "span",
    { class: "home-page__descr" },
    " Я найду для вас самую актуальную информацию по любой теме в открытых источниках и подготовлю в формате структурированного отчета, который удобно читать и понимать. ",
    -1
  ),
  kp = { class: "form-label" },
  Ep = ["readonly"],
  Sp = Q("button", { type: "submit", class: "form-btn" }, "ИССЛЕДОВАТЬ", -1),
  Cp = { key: 0, class: "render-zone" },
  Pp = { class: "render-zone__content" },
  Ap = { class: "container" },
  Tp = { class: "render-zone__response" },
  Rp = {
    __name: "MainPage",
    emits: ["searchStartEvent"],
    setup(e, { emit: t }) {
      const n = Vs(),
        r = Zs(),
        s = t,
        u = Te(!1),
        i = Te(!1),
        d = Te(""),
        l = Te(!1),
        f = Te({ status: "", messages: [] });
      let h = null;
      const g = new qf.Converter(),
        v = () => {
          i.value ||
            d.value.length < 1 ||
            (u.value || ((u.value = !u.value), s("searchStartEvent")), C());
        },
        S = (z, U) => {
          const K = f.value.messages[f.value.messages.length - 1];
          (K.messageStatus = z),
            z === "logs" && (K.agentResponce += g.makeHtml(U)),
            z === "report" &&
              ((K.report.hasReport = !0),
              (K.report.value += g.makeHtml(U)),
              (K.report.text += U)),
            z === "path" &&
              ((d.value = ""),
              (i.value = !1),
              (f.value.status = "finished"),
              (K.messageStatus = "finished"),
              (K.btns = U));
        },
        C = () => {
          (i.value = !0),
            f.value.messages.push({
              showAgentResponce: !1,
              agentResponce: "",
              report: { value: "", text: "", hasReport: !1 },
              messageStatus: "",
              btns: {},
            });
          const z = {
            task: d.value,
            report_type: "research_report",
            agent: !0,
          };
          h.send(`start ${JSON.stringify(z)}`),
            setTimeout(() => {
              l.value = !0;
              const U = document.querySelector(".render-zone__content");
              U &&
                U.scrollBy({
                  top: U.scrollHeight,
                  left: 0,
                  behavior: "smooth",
                });
            }, 650);
        },
        T = () => {
          r.logOut(), n.push("/auth");
        },
        q = () => {
          const { protocol: z, host: U, pathname: K } = window.location,
            o = r.userState.user.access_token,
            c = `${
              z === "https:" ? "wss:" : "ws:"
            }//${U}${K}ws?token=${encodeURIComponent(o)}`;
          (h = new WebSocket(c)),
            (h.onmessage = (a) => {
              try {
                const p = JSON.parse(a.data);
                S(p.type, p.output);
              } catch {
                console.log("Ошибка парсинга ответа из Websocket");
              }
            }),
            (h.onopen = (a) => {
              console.log("Websocket Open:", a);
            }),
            (h.onerror = (a) => {
              console.log("Websocket Error:", a);
            }),
            (h.onclose = (a) => {
              console.log("Websocket close:", a);
            });
        };
      return (
        Is(() => {
          q();
        }),
        Fs(() => {
          h && h.close();
        }),
        (z, U) => (
          Me(),
          De("div", null, [
            Q("div", { class: "app-menu" }, [
              bp,
              Q(
                "a",
                {
                  href: "javascript:void(0)",
                  class: "app-menu__logout",
                  onClick: T,
                },
                "ВЫЙТИ"
              ),
            ]),
            Q("div", wp, [
              yp,
              vp,
              Q(
                "form",
                {
                  class: at(["home-page__form", { blocked: i.value }]),
                  onSubmit: $i(v, ["prevent"]),
                },
                [
                  Q("label", kp, [
                    qr(
                      Q(
                        "input",
                        {
                          type: "text",
                          class: "form-field",
                          placeholder: "Что будем исследовать?",
                          "onUpdate:modelValue":
                            U[0] || (U[0] = (K) => (d.value = K)),
                          readonly: i.value,
                        },
                        null,
                        8,
                        Ep
                      ),
                      [[dn, d.value, void 0, { trim: !0 }]]
                    ),
                    Sp,
                  ]),
                ],
                34
              ),
            ]),
            ve(
              jr,
              { name: "fade-in", mode: "out-in" },
              {
                default: $t(() => [
                  l.value
                    ? (Me(),
                      De("div", Cp, [
                        Q("div", Pp, [
                          Q("div", Ap, [
                            Q("div", Tp, [
                              ve(
                                xc,
                                { name: "list" },
                                {
                                  default: $t(() => [
                                    (Me(!0),
                                    De(
                                      $e,
                                      null,
                                      pi(
                                        f.value.messages,
                                        (K, o) => (
                                          Me(),
                                          $s(
                                            Df,
                                            { key: o, message: K },
                                            null,
                                            8,
                                            ["message"]
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ]),
                                  _: 1,
                                }
                              ),
                            ]),
                          ]),
                        ]),
                      ]))
                    : qt("", !0),
                ]),
                _: 1,
              }
            ),
          ])
        )
      );
    },
  },
  Op = { class: "auth_zone" },
  Lp = { class: "auth_form" },
  jp = Q(
    "div",
    { class: "auth_form__head" },
    [
      Q("div", { class: "head-wrapper" }, [
        Q("div", { class: "auth_form__title" }, "Вход"),
        Q(
          "div",
          { class: "auth_form__descr" },
          "Для входа, введите логин и пароль"
        ),
      ]),
    ],
    -1
  ),
  Mp = Q("span", null, "Логин", -1),
  Np = { class: "label-filed-wrapper" },
  Ip = Hs(
    '<div class="label-filed__ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_380_213)"><path d="M3 7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V17C21 17.5304 20.7893 18.0391 20.4142 18.4142C20.0391 18.7893 19.5304 19 19 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V7Z" stroke="#00FFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 7L12 13L21 7" stroke="#00FFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_380_213"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg></div>',
    1
  ),
  Fp = Q("span", null, "Пароль", -1),
  Bp = { class: "label-filed-wrapper" },
  zp = Hs(
    '<div class="label-filed__ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_380_221)"><path d="M16.555 3.84305L20.157 7.44505C20.4242 7.71221 20.6362 8.02939 20.7808 8.37847C20.9254 8.72755 20.9998 9.1017 20.9998 9.47955C20.9998 9.8574 20.9254 10.2316 20.7808 10.5806C20.6362 10.9297 20.4242 11.2469 20.157 11.5141L17.514 14.1571C17.2468 14.4243 16.9297 14.6362 16.5806 14.7808C16.2315 14.9254 15.8573 14.9999 15.4795 14.9999C15.1017 14.9999 14.7275 14.9254 14.3784 14.7808C14.0293 14.6362 13.7122 14.4243 13.445 14.1571L13.144 13.8561L6.586 20.4141C6.25372 20.7463 5.81507 20.9509 5.347 20.9921L5.172 21.0001H4C3.75507 21 3.51866 20.9101 3.33563 20.7473C3.15259 20.5846 3.03566 20.3603 3.007 20.1171L3 20.0001V18.8281C3.00011 18.3585 3.16543 17.904 3.467 17.5441L3.586 17.4141L4 17.0001H6V15.0001H8V13.0001L10.144 10.8561L9.843 10.5551C9.5758 10.2879 9.36384 9.97071 9.21923 9.62163C9.07462 9.27255 9.00019 8.8984 9.00019 8.52055C9.00019 8.1427 9.07462 7.76855 9.21923 7.41947C9.36384 7.07039 9.5758 6.75321 9.843 6.48605L12.486 3.84305C12.7532 3.57585 13.0703 3.36389 13.4194 3.21928C13.7685 3.07467 14.1427 3.00024 14.5205 3.00024C14.8983 3.00024 15.2725 3.07467 15.6216 3.21928C15.9707 3.36389 16.2878 3.57585 16.555 3.84305Z" stroke="#00FFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 9H15.01" stroke="#00FFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_380_221"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg></div>',
    1
  ),
  $p = ["type"],
  Hp = { class: "custom-cb" },
  Dp = Q("span", { class: "custom-cb__text" }, "Запомнить меня", -1),
  Up = Q("button", { type: "submit", class: "btn submit-btn" }, "ВОЙТИ", -1),
  Vp = { class: "form-errors" },
  xp = {
    __name: "Auth",
    setup(e) {
      const t = Zs(),
        { userState: n } = na(t),
        r = Vs();
      n.value.status.loggedIn && r.push("/");
      const u = Te({ login: "", password: "", errors: [], remember: !0 }),
        i = Te(!1),
        d = Te(!1),
        l = Ne(() =>
          u.value.errors.map((S) => {
            switch (S) {
              case "login-error":
                return "Введите Логин";
              case "password-error":
                return "Введите Пароль";
              case "auth-error":
                return "Не верный Логин или Пароль";
            }
          })
        ),
        f = (S) => {
          u.value.errors = u.value.errors.filter(
            (C) => (
              console.log(C == "auth-error"), C != S && C !== "auth-error"
            )
          );
        },
        h = (S) => {
          const C = u.value;
          if (
            (C.login || C.errors.push("login-error"),
            C.password || C.errors.push("password-error"),
            C.errors.length > 0)
          )
            return;
          d.value = !0;
          const T = C.remember,
            q = `username=${u.value.login}&password=${u.value.password}`;
          t.logIn({ authData: q, rememberUser: T })
            .then(() => {
              r.push("/");
            })
            .catch((z) => {
              C.errors.push("auth-error");
            })
            .finally((z) => {
              d.value = !1;
            });
        },
        g = (S) =>
          S.target.closest(".label-filed-wrapper").classList.add("focus"),
        v = (S) =>
          S.target.closest(".label-filed-wrapper").classList.remove("focus");
      return (S, C) => (
        Me(),
        De("div", Op, [
          Q("div", Lp, [
            jp,
            Q(
              "form",
              {
                class: at(["auth_form__body", { sending: d.value }]),
                onSubmit: $i(h, ["prevent"]),
              },
              [
                Q(
                  "label",
                  {
                    class: at([
                      "auth_form__label",
                      { error: u.value.errors.includes("login-error") },
                    ]),
                  },
                  [
                    Mp,
                    Q("div", Np, [
                      Ip,
                      qr(
                        Q(
                          "input",
                          {
                            name: "username",
                            type: "text",
                            class: "filed-input",
                            placeholder: "Email",
                            onFocus: g,
                            onBlur: v,
                            "onUpdate:modelValue":
                              C[0] || (C[0] = (T) => (u.value.login = T)),
                            onInput: C[1] || (C[1] = (T) => f("login-error")),
                          },
                          null,
                          544
                        ),
                        [[dn, u.value.login, void 0, { trim: !0 }]]
                      ),
                    ]),
                  ],
                  2
                ),
                Q(
                  "label",
                  {
                    class: at([
                      "auth_form__label",
                      { error: u.value.errors.includes("password-error") },
                    ]),
                  },
                  [
                    Fp,
                    Q("div", Bp, [
                      zp,
                      qr(
                        Q(
                          "input",
                          {
                            name: "password",
                            type: i.value ? "text" : "password",
                            class: "filed-input _pass",
                            placeholder: "Password",
                            onFocus: g,
                            onBlur: v,
                            "onUpdate:modelValue":
                              C[2] || (C[2] = (T) => (u.value.password = T)),
                            onInput:
                              C[3] || (C[3] = (T) => f("password-error")),
                          },
                          null,
                          40,
                          $p
                        ),
                        [[Qc, u.value.password, void 0, { trim: !0 }]]
                      ),
                      Q(
                        "div",
                        {
                          class: "label-filed__show-or-hide",
                          onPointerdown: C[4] || (C[4] = (T) => (i.value = !0)),
                          onPointerup: C[5] || (C[5] = (T) => (i.value = !1)),
                        },
                        null,
                        32
                      ),
                    ]),
                  ],
                  2
                ),
                Q("div", Hp, [
                  qr(
                    Q(
                      "input",
                      {
                        type: "checkbox",
                        class: "custom-cb__input",
                        "onUpdate:modelValue":
                          C[6] || (C[6] = (T) => (u.value.remember = T)),
                      },
                      null,
                      512
                    ),
                    [[Bi, u.value.remember]]
                  ),
                  Dp,
                ]),
                Up,
                Q("div", Vp, [
                  (Me(!0),
                  De(
                    $e,
                    null,
                    pi(l.value, (T) => (Me(), De("span", null, za(T), 1))),
                    256
                  )),
                ]),
              ],
              34
            ),
          ]),
        ])
      );
    },
  },
  qp = [
    { path: "/", name: "MainPage", component: Rp },
    { path: "/auth", name: "Auth", component: xp },
  ],
  Wp = cf({
    history: zl(),
    routes: qp,
    scrollBehavior(e, t, n) {
      return { top: 0 };
    },
  }),
  Kp = "/site/assets/bg-man.png",
  Gp = Q(
    "div",
    { class: "application-zone__image" },
    [Q("img", { src: Kp, alt: "" })],
    -1
  ),
  Jp = { class: "application-zone__content" },
  Zp = {
    __name: "App",
    setup(e) {
      const t = Zs(),
        { userState: n } = na(t),
        r = Vs(),
        s = Te(!1),
        u = Te(!1),
        i = Te(!1),
        d = () => {
          (s.value = !0), setTimeout(() => (u.value = !0), 600);
        };
      return (
        li(async () => {
          const l = n.value;
          l.status.loggedIn
            ? new Date(l.user.expires_at) < new Date()
              ? new Date(l.user.refresh_token_expires_at) < new Date()
                ? (t.logOut(), r.push("/auth"), (i.value = !0))
                : t
                    .updateAccessToken()
                    .then(() => {
                      r.push("/"), (i.value = !0);
                    })
                    .catch((v) => {
                      t.logOut(),
                        r.push("/auth").then(() => {
                          i.value = !0;
                        });
                    })
              : (r.push("/"), (i.value = !0))
            : (r.push("/auth"), (i.value = !0));
        }),
        (l, f) => {
          const h = Cd("router-view");
          return i.value
            ? (Me(),
              De(
                "div",
                {
                  key: 0,
                  class: at([
                    "application-zone",
                    { "search-start": s.value, searchTransitionEnd: u.value },
                  ]),
                },
                [
                  Gp,
                  Q("div", Jp, [
                    ve(h, null, {
                      default: $t(({ Component: g }) => [
                        ve(
                          jr,
                          { mode: "out-in", name: "fade" },
                          {
                            default: $t(() => [
                              (Me(),
                              $s(Pd(g), { onSearchStartEvent: d }, null, 32)),
                            ]),
                            _: 2,
                          },
                          1024
                        ),
                      ]),
                      _: 1,
                    }),
                  ]),
                ],
                2
              ))
            : qt("", !0);
        }
      );
    },
  };
sl(Zp).use(Wp).use(Kf()).use(bf).mount("#app");

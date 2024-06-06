var ge=Object.defineProperty;var fe=(t,e,s)=>e in t?ge(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var x=(t,e,s)=>(fe(t,typeof e!="symbol"?e+"":e,s),s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();function z(){}function oe(t){return t()}function Q(){return Object.create(null)}function S(t){t.forEach(oe)}function le(t){return typeof t=="function"}function T(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let V;function D(t,e){return t===e?!0:(V||(V=document.createElement("a")),V.href=e,t===V.href)}function ue(t){return Object.keys(t).length===0}function h(t,e){t.appendChild(e)}function $(t,e,s){t.insertBefore(e,s||null)}function b(t){t.parentNode&&t.parentNode.removeChild(t)}function we(t,e){for(let s=0;s<t.length;s+=1)t[s]&&t[s].d(e)}function u(t){return document.createElement(t)}function H(t){return document.createTextNode(t)}function k(){return H(" ")}function K(t,e,s,n){return t.addEventListener(e,s,n),()=>t.removeEventListener(e,s,n)}function c(t,e,s){s==null?t.removeAttribute(e):t.getAttribute(e)!==s&&t.setAttribute(e,s)}function ye(t){return Array.from(t.childNodes)}function I(t,e){e=""+e,t.data!==e&&(t.data=e)}function X(t,e){t.value=e??""}let W;function A(t){W=t}function me(){if(!W)throw new Error("Function called outside component initialization");return W}function ce(t){me().$$.on_mount.push(t)}const E=[],ee=[];let M=[];const te=[],pe=Promise.resolve();let U=!1;function ve(){U||(U=!0,pe.then(de))}function Y(t){M.push(t)}const J=new Set;let L=0;function de(){if(L!==0)return;const t=W;do{try{for(;L<E.length;){const e=E[L];L++,A(e),_e(e.$$)}}catch(e){throw E.length=0,L=0,e}for(A(null),E.length=0,L=0;ee.length;)ee.pop()();for(let e=0;e<M.length;e+=1){const s=M[e];J.has(s)||(J.add(s),s())}M.length=0}while(E.length);for(;te.length;)te.pop()();U=!1,J.clear(),A(t)}function _e(t){if(t.fragment!==null){t.update(),S(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Y)}}function ze(t){const e=[],s=[];M.forEach(n=>t.indexOf(n)===-1?e.push(n):s.push(n)),s.forEach(n=>n()),M=e}const O=new Set;let Ce;function j(t,e){t&&t.i&&(O.delete(t),t.i(e))}function G(t,e,s,n){if(t&&t.o){if(O.has(t))return;O.add(t),Ce.c.push(()=>{O.delete(t)}),t.o(e)}}function se(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function R(t){t&&t.c()}function P(t,e,s){const{fragment:n,after_update:i}=t.$$;n&&n.m(e,s),Y(()=>{const a=t.$$.on_mount.map(oe).filter(le);t.$$.on_destroy?t.$$.on_destroy.push(...a):S(a),t.$$.on_mount=[]}),i.forEach(Y)}function F(t,e){const s=t.$$;s.fragment!==null&&(ze(s.after_update),S(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function be(t,e){t.$$.dirty[0]===-1&&(E.push(t),ve(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function B(t,e,s,n,i,a,r=null,g=[-1]){const d=W;A(t);const l=t.$$={fragment:null,ctx:[],props:a,update:z,not_equal:i,bound:Q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:Q(),dirty:g,skip_bound:!1,root:e.target||d.$$.root};r&&r(l.root);let w=!1;if(l.ctx=s?s(t,e.props||{},(o,m,...p)=>{const _=p.length?p[0]:m;return l.ctx&&i(l.ctx[o],l.ctx[o]=_)&&(!l.skip_bound&&l.bound[o]&&l.bound[o](_),w&&be(t,o)),m}):[],l.update(),w=!0,S(l.before_update),l.fragment=n?n(l.ctx):!1,e.target){if(e.hydrate){const o=ye(e.target);l.fragment&&l.fragment.l(o),o.forEach(b)}else l.fragment&&l.fragment.c();e.intro&&j(t.$$.fragment),P(t,e.target,e.anchor),de()}A(d)}class Z{constructor(){x(this,"$$");x(this,"$$set")}$destroy(){F(this,1),this.$destroy=z}$on(e,s){if(!le(s))return z;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(s),()=>{const i=n.indexOf(s);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!ue(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const $e="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add($e);function ne(t){return new Date(t).toLocaleDateString("en-US",{month:"short",day:"numeric"})}const he="4430333c9c54480db3550207232712";async function qe(t){const e=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${he}&q=${t}&days=3`);if(!e.ok)throw new Error("Network response was not ok");return(await e.json()).forecast.forecastday}async function ke(t){const e=await fetch(`https://api.weatherapi.com/v1/current.json?key=${he}&q=${t}`);if(!e.ok)throw new Error("Network response was not ok");return await e.json()}const Ne={1e3:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/clear-day.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/clear-night.svg"},1003:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/partly-cloudy-day.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/partly-cloudy-night.svg"},1006:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/cloudy.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/cloudy.svg"},1009:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/overcast-day.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/overcast-night.svg"},1030:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/fog-day.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/fog-night.svg"},1063:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/partly-cloudy-day-drizzle.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/partly-cloudy-night-drizzle.svg"},1066:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/partly-cloudy-day-snow.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/partly-cloudy-night-snow.svg"},1069:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/partly-cloudy-day-sleet.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/partly-cloudy-night-sleet.svg"},1072:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/drizzle.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/drizzle.svg"},1087:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/thunderstorms-day.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/thunderstorms-night.svg"},1114:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/fog-day.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/fog-night.svg"},1117:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/blizzard.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/blizzard.svg"},1135:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/fog-day.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/fog-night.svg"},1147:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/fog.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/fog.svg"},1150:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/drizzle.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/drizzle.svg"},1153:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/drizzle.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/drizzle.svg"},1168:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/drizzle.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/drizzle.svg"},1171:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/drizzle.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/drizzle.svg"},1180:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/partly-cloudy-day-drizzle.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/partly-cloudy-night-drizzle.svg"},1183:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/drizzle.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/drizzle.svg"},1186:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/rain.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/rain.svg"},1189:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/rain.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/rain.svg"},1192:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/rain.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/rain.svg"},1195:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/rain.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/rain.svg"},1198:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/drizzle.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/drizzle.svg"},1201:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/drizzle.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/drizzle.svg"},1204:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/sleet.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/sleet.svg"},1207:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/sleet.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/sleet.svg"},1210:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/partly-cloudy-day-snow.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/partly-cloudy-night-snow.svg"},1213:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/snow.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/snow.svg"},1216:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/snow.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/snow.svg"},1219:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/snow.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/snow.svg"},1222:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/snow.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/snow.svg"},1225:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/snow.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/snow.svg"},1237:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/hail.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/hail.svg"},1240:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/partly-cloudy-day-rain.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/partly-cloudy-night-rain.svg"},1243:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/rain.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/rain.svg"},1246:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/rain.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/rain.svg"},1249:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/partly-cloudy-day-sleet.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/partly-cloudy-night-sleet.svg"},1252:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/sleet.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/sleet.svg"},1255:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/partly-cloudy-day-snow.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/partly-cloudy-night-snow.svg"},1258:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/snow.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/snow.svg"},1261:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/hail.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/hail.svg"},1264:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/hail.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/hail.svg"},1273:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/thunderstorms-day-rain.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/thunderstorms-night-rain.svg"},1276:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/thunderstorms-day-rain.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/thunderstorms-night-rain.svg"},1279:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/thunderstorms-day-snow.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/thunderstorms-night-snow.svg"},1282:{day:" /wthr/src/assets/weather icons/design/fill/animation-ready/thunderstorms-day-snow.svg",night:" /wthr/src/assets/weather icons/design/fill/animation-ready/thunderstorms-night-snow.svg"}};function C(t,e){const s=Ne[t];if(console.log("Condition code:",t),!s)return console.log("Condition code not found:",t)," /wthr/src/assets/weather icons/design/fill/animation-ready/clear-day.svg";console.log("Condition:",s);const n=e===1?s.day:s.night;return console.log("Icon path:",n),n}function ie(t,e,s){const n=t.slice();return n[5]=e[s],n}function Le(t){let e,s=se(t[0]),n=[];for(let i=0;i<s.length;i+=1)n[i]=ae(ie(t,s,i));return{c(){e=u("div");for(let i=0;i<n.length;i+=1)n[i].c();c(e,"class","forecast-details svelte-pgqid5")},m(i,a){$(i,e,a);for(let r=0;r<n.length;r+=1)n[r]&&n[r].m(e,null)},p(i,a){if(a&1){s=se(i[0]);let r;for(r=0;r<s.length;r+=1){const g=ie(i,s,r);n[r]?n[r].p(g,a):(n[r]=ae(g),n[r].c(),n[r].m(e,null))}for(;r<n.length;r+=1)n[r].d(1);n.length=s.length}},d(i){i&&b(e),we(n,i)}}}function Ee(t){let e;return{c(){e=u("div"),e.innerHTML=`<div class="forecast-day svelte-pgqid5"><h3 class="svelte-pgqid5">N/A</h3> <img class="weather-icon svelte-pgqid5" src="${C(1,1)}" alt="Weather Icon"/> <p class="svelte-pgqid5">N/A</p></div> <div class="forecast-day svelte-pgqid5"><h3 class="svelte-pgqid5">N/A</h3> <img class="weather-icon svelte-pgqid5" src="${C(1,1)}" alt="Weather Icon"/> <p class="svelte-pgqid5">N/A</p></div> <div class="forecast-day svelte-pgqid5"><h3 class="svelte-pgqid5">N/A</h3> <img class="weather-icon svelte-pgqid5" src="${C(1,1)}" alt="Weather Icon"/> <p class="svelte-pgqid5">N/A</p></div>`,c(e,"class","forecast-details svelte-pgqid5")},m(s,n){$(s,e,n)},p:z,d(s){s&&b(e)}}}function He(t){let e;return{c(){e=u("div"),e.innerHTML=`<div class="forecast-day svelte-pgqid5"><h3 class="svelte-pgqid5">...</h3> <img class="weather-icon svelte-pgqid5" src="${C(1,1)}" alt="Weather Icon"/> <p class="svelte-pgqid5">...</p></div> <div class="forecast-day svelte-pgqid5"><h3 class="svelte-pgqid5">...</h3> <img class="weather-icon svelte-pgqid5" src="${C(1,1)}" alt="Weather Icon"/> <p class="svelte-pgqid5">...</p></div> <div class="forecast-day svelte-pgqid5"><h3 class="svelte-pgqid5">...</h3> <img class="weather-icon svelte-pgqid5" src="${C(1,1)}" alt="Weather Icon"/> <p class="svelte-pgqid5">...</p></div>`,c(e,"class","forecast-details svelte-pgqid5")},m(s,n){$(s,e,n)},p:z,d(s){s&&b(e)}}}function ae(t){let e,s,n=ne(t[5].date)+"",i,a,r,g,d,l,w=Math.round(t[5].day.maxtemp_f)+"",o,m;return{c(){e=u("div"),s=u("h3"),i=H(n),a=k(),r=u("img"),d=k(),l=u("p"),o=H(w),m=k(),c(s,"class","svelte-pgqid5"),c(r,"class","weather-icon svelte-pgqid5"),D(r.src,g=C(t[5].day.condition.code,1))||c(r,"src",g),c(r,"alt","Weather Icon"),c(l,"class","svelte-pgqid5"),c(e,"class","forecast-day svelte-pgqid5")},m(p,_){$(p,e,_),h(e,s),h(s,i),h(e,a),h(e,r),h(e,d),h(e,l),h(l,o),h(e,m)},p(p,_){_&1&&n!==(n=ne(p[5].date)+"")&&I(i,n),_&1&&!D(r.src,g=C(p[5].day.condition.code,1))&&c(r,"src",g),_&1&&w!==(w=Math.round(p[5].day.maxtemp_f)+"")&&I(o,w)},d(p){p&&b(e)}}}function Me(t){let e;function s(a,r){if(a[1])return He;if(a[2])return Ee;if(a[0])return Le}let n=s(t),i=n&&n(t);return{c(){e=u("div"),i&&i.c(),c(e,"class","forecast-container svelte-pgqid5")},m(a,r){$(a,e,r),i&&i.m(e,null)},p(a,[r]){n===(n=s(a))&&i?i.p(a,r):(i&&i.d(1),i=n&&n(a),i&&(i.c(),i.m(e,null)))},i:z,o:z,d(a){a&&b(e),i&&i.d()}}}function Ie(t,e,s){let{cityName:n}=e,i=null,a=!0,r=!1;async function g(d){s(1,a=!0),s(2,r=!1);try{s(0,i=await qe(d)),console.log(i),s(1,a=!1)}catch(l){console.error("Fetch error: ",l),s(3,n="New York")}}return ce(()=>{g(n)}),t.$$set=d=>{"cityName"in d&&s(3,n=d.cityName)},t.$$.update=()=>{t.$$.dirty&8&&g(n)},[i,a,r,n]}class Ae extends Z{constructor(e){super(),B(this,e,Ie,Me,T,{cityName:3})}}function We(t){let e,s,n;return{c(){e=u("button"),e.innerHTML='<svg width="75" viewBox="0 0 116 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1ui0zg2"><path d="M38.16 11.72C38.16 12.728 37.104 17.192 35.184 22.568C33.264 28.04 30.864 32.792 29.184 35.288H28.128C26.112 35.288 24.576 33.416 23.712 31.832C22.128 28.952 20.16 24.152 19.44 20.216C18.624 24.152 15.6 32.168 13.296 35.288H12.432C10.512 35.288 8.688 33.368 7.824 31.832C4.08 25.208 1.584 17.72 0.432 9.08H3.888C6.096 9.08 7.392 10.76 7.632 12.2C8.4 16.616 9.6 21.512 11.76 26.216C14.112 21.08 15.408 15.512 16.656 10.04H18.768C20.736 10.04 22.704 10.856 23.328 13.688C24.096 17.192 25.68 22.568 27.504 26.216C29.952 20.792 31.344 14.792 32.352 8.936H35.04C36.864 8.936 38.16 9.752 38.16 11.72ZM42.2194 10.136C42.2194 7.592 42.6994 6.632 44.0914 5C44.9554 3.992 46.1074 3.224 47.1154 3.224H48.6034V9.08H57.5794V11.72C57.5794 13.064 56.3794 14.792 53.7394 14.792H48.6034V24.92C48.6034 28.28 50.0914 29.576 52.6834 29.576C54.7474 29.576 56.3314 29.288 57.3394 28.664H57.5794V30.968C57.5794 33.608 55.6594 35.288 51.9154 35.288C45.3874 35.288 42.2194 31.736 42.2194 25.688V10.136ZM84.4725 35H82.3605C79.6725 35 77.9925 33.464 77.9925 30.68V20.12C77.9925 15.896 75.6885 14.216 72.8565 14.216C70.8405 14.216 68.2005 15.752 68.2005 20.312V35H66.0885C63.0645 35 61.6725 33.32 61.6725 30.68V0.439999H63.6885C66.7605 0.439999 68.2485 2.168 68.2485 4.568V11.96C69.2085 10.424 71.4165 8.504 73.8645 8.504C80.5365 8.504 84.4725 12.488 84.4725 19.832V35ZM105.657 15.368H105.417C104.457 14.984 103.353 14.6 101.673 14.6C98.7934 14.6 97.2094 16.184 97.2094 20.12V35H95.4334C92.5534 35 90.7294 33.56 90.7294 30.872V18.968C90.7294 13.784 93.4654 8.84 100.281 8.84C104.265 8.84 105.657 11.096 105.657 13.064V15.368Z" fill="var(--logo-color)"></path><path d="M115.099 30.872C115.099 33.128 113.227 35 110.971 35C108.715 35 106.843 33.128 106.843 30.872C106.843 28.616 108.715 26.744 110.971 26.744C113.227 26.744 115.099 28.616 115.099 30.872Z" fill="#82C1C9"></path></svg>',c(e,"class","svelte-1ui0zg2")},m(i,a){$(i,e,a),s||(n=K(e,"click",t[0]),s=!0)},p:z,i:z,o:z,d(i){i&&b(e),s=!1,n()}}}function Se(t,e,s){let n=!1;function i(){s(1,n=!n)}return t.$$.update=()=>{if(t.$$.dirty&2){const a=document.documentElement;n?a.classList.add("dark-mode"):a.classList.remove("dark-mode")}},[i,n]}class Ve extends Z{constructor(e){super(),B(this,e,Se,We,T,{})}}function Oe(){return new Promise((t,e)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(s=>{t({latitude:s.coords.latitude,longitude:s.coords.longitude})},s=>{e(s)}):e(new Error("Geolocation is not supported by this browser."))})}function De(t){let e,s,n=t[1].location.name+"",i,a,r,g,d,l,w,o,m=Math.round(t[1].current.temp_f)+"",p,_,q,y=t[1].current.condition.text+"",f;return{c(){e=u("div"),s=u("h2"),i=H(n),a=k(),r=u("div"),g=u("img"),l=k(),w=u("div"),o=u("p"),p=H(m),_=k(),q=u("p"),f=H(y),c(s,"class","svelte-1ocinpd"),c(g,"class","weather-icon svelte-1ocinpd"),D(g.src,d=C(t[1].current.condition.code,t[1].current.is_day))||c(g,"src",d),c(g,"alt","Weather Icon"),c(o,"class","temp svelte-1ocinpd"),c(w,"class","current-data wrapper svelte-1ocinpd"),c(r,"class","weather-info"),c(e,"class","weather-details svelte-1ocinpd")},m(v,N){$(v,e,N),h(e,s),h(s,i),h(e,a),h(e,r),h(r,g),h(r,l),h(r,w),h(w,o),h(o,p),h(w,_),h(w,q),h(q,f)},p(v,N){N&2&&n!==(n=v[1].location.name+"")&&I(i,n),N&2&&!D(g.src,d=C(v[1].current.condition.code,v[1].current.is_day))&&c(g,"src",d),N&2&&m!==(m=Math.round(v[1].current.temp_f)+"")&&I(p,m),N&2&&y!==(y=v[1].current.condition.text+"")&&I(f,y)},d(v){v&&b(e)}}}function je(t){let e;return{c(){e=u("div"),e.innerHTML=`<h2 class="svelte-1ocinpd">N/A</h2> <div class="weather-info"><img class="weather-icon svelte-1ocinpd" src="${C(1,1)}" alt="Weather Icon"/> <div class="current-data wrapper svelte-1ocinpd"><p class="temp svelte-1ocinpd">N/A</p> <p>N/A</p></div></div>`,c(e,"class","weather-details svelte-1ocinpd")},m(s,n){$(s,e,n)},p:z,d(s){s&&b(e)}}}function Pe(t){let e;return{c(){e=u("div"),e.innerHTML=`<h2 class="svelte-1ocinpd">Loading</h2> <div class="weather-info"><img class="weather-icon svelte-1ocinpd" src="${C(1,1)}" alt="Weather Icon"/> <div class="current-data wrapper svelte-1ocinpd"><p class="temp svelte-1ocinpd">Loading</p> <p>Loading</p></div></div>`,c(e,"class","weather-details svelte-1ocinpd")},m(s,n){$(s,e,n)},p:z,d(s){s&&b(e)}}}function Fe(t){let e,s,n,i,a,r,g,d,l,w,o,m,p;function _(f,v){if(f[2])return Pe;if(f[3])return je;if(f[1])return De}let q=_(t),y=q&&q(t);return d=new Ae({props:{cityName:t[0]}}),w=new Ve({}),{c(){e=u("main"),s=u("div"),n=u("input"),i=k(),a=u("button"),a.innerHTML='<img src="srcassetssearch-globe-svgrepo-com.svg" alt="" class="svelte-1ocinpd"/> <p class="svelte-1ocinpd">Search by Location</p>',r=k(),y&&y.c(),g=k(),R(d.$$.fragment),l=k(),R(w.$$.fragment),c(n,"type","text"),c(n,"placeholder","Enter city name"),c(n,"class","svelte-1ocinpd"),c(a,"class","svelte-1ocinpd"),c(s,"class","search svelte-1ocinpd"),c(e,"class","svelte-1ocinpd")},m(f,v){$(f,e,v),h(e,s),h(s,n),X(n,t[0]),h(s,i),h(s,a),h(e,r),y&&y.m(e,null),h(e,g),P(d,e,null),h(e,l),P(w,e,null),o=!0,m||(p=[K(n,"input",t[5]),K(a,"click",t[4])],m=!0)},p(f,[v]){v&1&&n.value!==f[0]&&X(n,f[0]),q===(q=_(f))&&y?y.p(f,v):(y&&y.d(1),y=q&&q(f),y&&(y.c(),y.m(e,g)));const N={};v&1&&(N.cityName=f[0]),d.$set(N)},i(f){o||(j(d.$$.fragment,f),j(w.$$.fragment,f),o=!0)},o(f){G(d.$$.fragment,f),G(w.$$.fragment,f),o=!1},d(f){f&&b(e),y&&y.d(),F(d),F(w),m=!1,S(p)}}}function re(t){localStorage.setItem("weatherData",JSON.stringify(t))}function Te(){const t=localStorage.getItem("weatherData");return t?JSON.parse(t):null}function Be(t,e,s){let n=null,i=!0,a=!1,r="New York",g=null;async function d(){s(2,i=!0),s(3,a=!1);try{const o=await Oe();g=o;const m=await fetch(`https://api.weatherapi.com/v1/current.json?key=4430333c9c54480db3550207232712&q=${o.latitude},${o.longitude}`);s(1,n=await m.json()),s(0,r=n.location.name),re(n),s(2,i=!1)}catch(o){console.error("Error fetching weather data: ",o),s(3,a=!0),s(2,i=!1)}}async function l(o){s(2,i=!0),s(3,a=!1);try{s(1,n=await ke(o)),re(n),s(2,i=!1)}catch(m){console.error("Fetch error: ",m),s(3,a=!0),s(2,i=!1)}}ce(()=>{const o=Te();o?(s(1,n=o),s(0,r=n.location.name),s(2,i=!1)):d()});function w(){r=this.value,s(0,r)}return t.$$.update=()=>{t.$$.dirty&1&&l(r)},[r,n,i,a,d,w]}class Ze extends Z{constructor(e){super(),B(this,e,Be,Fe,T,{})}}function xe(t){let e,s,n,i;return n=new Ze({}),{c(){e=u("main"),s=u("div"),R(n.$$.fragment),c(s,"class","quick container svelte-84efdh"),c(e,"class","svelte-84efdh")},m(a,r){$(a,e,r),h(e,s),P(n,s,null),i=!0},p:z,i(a){i||(j(n.$$.fragment,a),i=!0)},o(a){G(n.$$.fragment,a),i=!1},d(a){a&&b(e),F(n)}}}class Je extends Z{constructor(e){super(),B(this,e,null,xe,T,{})}}new Je({target:document.getElementById("app")});

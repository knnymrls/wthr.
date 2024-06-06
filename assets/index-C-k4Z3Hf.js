var ue=Object.defineProperty;var fe=(t,e,s)=>e in t?ue(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var Z=(t,e,s)=>(fe(t,typeof e!="symbol"?e+"":e,s),s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();function z(){}function oe(t){return t()}function Q(){return Object.create(null)}function V(t){t.forEach(oe)}function ce(t){return typeof t=="function"}function q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let O;function j(t,e){return t===e?!0:(O||(O=document.createElement("a")),O.href=e,t===O.href)}function ge(t){return Object.keys(t).length===0}function h(t,e){t.appendChild(e)}function b(t,e,s){t.insertBefore(e,s||null)}function $(t){t.parentNode&&t.parentNode.removeChild(t)}function ve(t,e){for(let s=0;s<t.length;s+=1)t[s]&&t[s].d(e)}function g(t){return document.createElement(t)}function M(t){return document.createTextNode(t)}function L(){return M(" ")}function K(t,e,s,n){return t.addEventListener(e,s,n),()=>t.removeEventListener(e,s,n)}function l(t,e,s){s==null?t.removeAttribute(e):t.getAttribute(e)!==s&&t.setAttribute(e,s)}function we(t){return Array.from(t.childNodes)}function A(t,e){e=""+e,t.data!==e&&(t.data=e)}function X(t,e){t.value=e??""}let S;function W(t){S=t}function ye(){if(!S)throw new Error("Function called outside component initialization");return S}function le(t){ye().$$.on_mount.push(t)}const H=[],ee=[];let I=[];const te=[],pe=Promise.resolve();let U=!1;function me(){U||(U=!0,pe.then(de))}function G(t){I.push(t)}const J=new Set;let E=0;function de(){if(E!==0)return;const t=S;do{try{for(;E<H.length;){const e=H[E];E++,W(e),_e(e.$$)}}catch(e){throw H.length=0,E=0,e}for(W(null),H.length=0,E=0;ee.length;)ee.pop()();for(let e=0;e<I.length;e+=1){const s=I[e];J.has(s)||(J.add(s),s())}I.length=0}while(H.length);for(;te.length;)te.pop()();U=!1,J.clear(),W(t)}function _e(t){if(t.fragment!==null){t.update(),V(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(G)}}function ze(t){const e=[],s=[];I.forEach(n=>t.indexOf(n)===-1?e.push(n):s.push(n)),s.forEach(n=>n()),I=e}const D=new Set;let Ce;function P(t,e){t&&t.i&&(D.delete(t),t.i(e))}function R(t,e,s,n){if(t&&t.o){if(D.has(t))return;D.add(t),Ce.c.push(()=>{D.delete(t)}),t.o(e)}}function se(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function Y(t){t&&t.c()}function F(t,e,s){const{fragment:n,after_update:a}=t.$$;n&&n.m(e,s),G(()=>{const r=t.$$.on_mount.map(oe).filter(ce);t.$$.on_destroy?t.$$.on_destroy.push(...r):V(r),t.$$.on_mount=[]}),a.forEach(G)}function T(t,e){const s=t.$$;s.fragment!==null&&(ze(s.after_update),V(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function $e(t,e){t.$$.dirty[0]===-1&&(H.push(t),me(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function x(t,e,s,n,a,r,i=null,u=[-1]){const d=S;W(t);const c=t.$$={fragment:null,ctx:[],props:r,update:z,not_equal:a,bound:Q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:Q(),dirty:u,skip_bound:!1,root:e.target||d.$$.root};i&&i(c.root);let v=!1;if(c.ctx=s?s(t,e.props||{},(o,y,...p)=>{const _=p.length?p[0]:y;return c.ctx&&a(c.ctx[o],c.ctx[o]=_)&&(!c.skip_bound&&c.bound[o]&&c.bound[o](_),v&&$e(t,o)),y}):[],c.update(),v=!0,V(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const o=we(e.target);c.fragment&&c.fragment.l(o),o.forEach($)}else c.fragment&&c.fragment.c();e.intro&&P(t.$$.fragment),F(t,e.target,e.anchor),de()}W(d)}class B{constructor(){Z(this,"$$");Z(this,"$$set")}$destroy(){T(this,1),this.$destroy=z}$on(e,s){if(!ce(s))return z;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(s),()=>{const a=n.indexOf(s);a!==-1&&n.splice(a,1)}}$set(e){this.$$set&&!ge(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const be="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(be);const he="4430333c9c54480db3550207232712";async function ke(t){const e=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${he}&q=${t}&days=3`);if(!e.ok)throw new Error("Network response was not ok");return(await e.json()).forecast.forecastday}async function Le(t){const e=await fetch(`https://api.weatherapi.com/v1/current.json?key=${he}&q=${t}`);if(!e.ok)throw new Error("Network response was not ok");return await e.json()}const Ne={1e3:{day:"assets/weather-icons/clear-day.svg",night:"assets/weather-icons/clear-night.svg"},1003:{day:"assets/weather-icons/partly-cloudy-day.svg",night:"assets/weather-icons/partly-cloudy-night.svg"},1006:{day:"assets/weather-icons/cloudy.svg",night:"assets/weather-icons/cloudy.svg"},1009:{day:"assets/weather-icons/overcast-day.svg",night:"assets/weather-icons/overcast-night.svg"},1030:{day:"assets/weather-icons/fog-day.svg",night:"assets/weather-icons/fog-night.svg"},1063:{day:"assets/weather-icons/partly-cloudy-day-drizzle.svg",night:"assets/weather-icons/partly-cloudy-night-drizzle.svg"},1066:{day:"assets/weather-icons/partly-cloudy-day-snow.svg",night:"assets/weather-icons/partly-cloudy-night-snow.svg"},1069:{day:"assets/weather-icons/partly-cloudy-day-sleet.svg",night:"assets/weather-icons/partly-cloudy-night-sleet.svg"},1072:{day:"s/assets/weather-icons/drizzle.svg",night:"assets/weather-icons/drizzle.svg"},1087:{day:"assets/weather-icons/thunderstorms-day.svg",night:"assets/weather-icons/thunderstorms-night.svg"},1114:{day:"assets/weather-icons/fog-day.svg",night:"assets/weather-icons/fog-night.svg"},1117:{day:"assets/weather-icons/blizzard.svg",night:"assets/weather-icons/blizzard.svg"},1135:{day:"assets/weather-icons/fog-day.svg",night:"assets/weather-icons/fog-night.svg"},1147:{day:"assets/weather-icons/fog.svg",night:"assets/weather-icons/fog.svg"},1150:{day:"assets/weather-icons/drizzle.svg",night:"assets/weather-icons/drizzle.svg"},1153:{day:"assets/weather-icons/drizzle.svg",night:"assets/weather-icons/drizzle.svg"},1168:{day:"assets/weather-icons/drizzle.svg",night:"assets/weather-icons/drizzle.svg"},1171:{day:"assets/weather-icons/drizzle.svg",night:"assets/weather-icons/drizzle.svg"},1180:{day:"assets/weather-icons/partly-cloudy-day-drizzle.svg",night:"assets/weather-icons/partly-cloudy-night-drizzle.svg"},1183:{day:"assets/weather-icons/drizzle.svg",night:"assets/weather-icons/drizzle.svg"},1186:{day:"assets/weather-icons/rain.svg",night:"assets/weather-icons/rain.svg"},1189:{day:"assets/weather-icons/rain.svg",night:"assets/weather-icons/rain.svg"},1192:{day:"assets/weather-icons/rain.svg",night:"assets/weather-icons/rain.svg"},1195:{day:"assets/weather-icons/rain.svg",night:"assets/weather-icons/rain.svg"},1198:{day:"assets/weather-icons/drizzle.svg",night:"assets/weather-icons/drizzle.svg"},1201:{day:"assets/weather-icons/drizzle.svg",night:"assets/weather-icons/drizzle.svg"},1204:{day:"assets/weather-icons/sleet.svg",night:"assets/weather-icons/sleet.svg"},1207:{day:"assets/weather-icons/sleet.svg",night:"assets/weather-icons/sleet.svg"},1210:{day:"assets/weather-icons/partly-cloudy-day-snow.svg",night:"assets/weather-icons/partly-cloudy-night-snow.svg"},1213:{day:"assets/weather-icons/snow.svg",night:"assets/weather-icons/snow.svg"},1216:{day:"assets/weather-icons/snow.svg",night:"assets/weather-icons/snow.svg"},1219:{day:"assets/weather-icons/snow.svg",night:"assets/weather-icons/snow.svg"},1222:{day:"assets/weather-icons/snow.svg",night:"assets/weather-icons/snow.svg"},1225:{day:"assets/weather-icons/snow.svg",night:"assets/weather-icons/snow.svg"},1237:{day:"assets/weather-icons/hail.svg",night:"assets/weather-icons/hail.svg"},1240:{day:"assets/weather-icons/partly-cloudy-day-rain.svg",night:"assets/weather-icons/partly-cloudy-night-rain.svg"},1243:{day:"assets/weather-icons/rain.svg",night:"assets/weather-icons/rain.svg"},1246:{day:"assets/weather-icons/rain.svg",night:"assets/weather-icons/rain.svg"},1249:{day:"assets/weather-icons/partly-cloudy-day-sleet.svg",night:"assets/weather-icons/partly-cloudy-night-sleet.svg"},1252:{day:"assets/weather-icons/sleet.svg",night:"assets/weather-icons/sleet.svg"},1255:{day:"assets/weather-icons/partly-cloudy-day-snow.svg",night:"assets/weather-icons/partly-cloudy-night-snow.svg"},1258:{day:"assets/weather-icons/snow.svg",night:"assets/weather-icons/snow.svg"},1261:{day:"assets/weather-icons/hail.svg",night:"assets/weather-icons/hail.svg"},1264:{day:"assets/weather-icons/hail.svg",night:"assets/weather-icons/hail.svg"},1273:{day:"assets/weather-icons/thunderstorms-day-rain.svg",night:"assets/weather-icons/thunderstorms-night-rain.svg"},1276:{day:"assets/weather-icons/thunderstorms-day-rain.svg",night:"assets/weather-icons/thunderstorms-night-rain.svg"},1279:{day:"assets/weather-icons/thunderstorms-day-snow.svg",night:"assets/weather-icons/thunderstorms-night-snow.svg"},1282:{day:"assets/weather-icons/thunderstorms-day-snow.svg",night:"assets/weather-icons/thunderstorms-night-snow.svg"}};function C(t,e){const s=Ne[t];if(console.log("Condition code:",t),!s)return console.log("Condition code not found:",t),"assets/loading.svg";console.log("Condition:",s);const n=e===1?s.day:s.night;return console.log("Icon path:",n),n}function Ee(t){let e,s,n;return{c(){e=g("button"),e.innerHTML='<svg width="75" viewBox="0 0 116 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1ui0zg2"><path d="M38.16 11.72C38.16 12.728 37.104 17.192 35.184 22.568C33.264 28.04 30.864 32.792 29.184 35.288H28.128C26.112 35.288 24.576 33.416 23.712 31.832C22.128 28.952 20.16 24.152 19.44 20.216C18.624 24.152 15.6 32.168 13.296 35.288H12.432C10.512 35.288 8.688 33.368 7.824 31.832C4.08 25.208 1.584 17.72 0.432 9.08H3.888C6.096 9.08 7.392 10.76 7.632 12.2C8.4 16.616 9.6 21.512 11.76 26.216C14.112 21.08 15.408 15.512 16.656 10.04H18.768C20.736 10.04 22.704 10.856 23.328 13.688C24.096 17.192 25.68 22.568 27.504 26.216C29.952 20.792 31.344 14.792 32.352 8.936H35.04C36.864 8.936 38.16 9.752 38.16 11.72ZM42.2194 10.136C42.2194 7.592 42.6994 6.632 44.0914 5C44.9554 3.992 46.1074 3.224 47.1154 3.224H48.6034V9.08H57.5794V11.72C57.5794 13.064 56.3794 14.792 53.7394 14.792H48.6034V24.92C48.6034 28.28 50.0914 29.576 52.6834 29.576C54.7474 29.576 56.3314 29.288 57.3394 28.664H57.5794V30.968C57.5794 33.608 55.6594 35.288 51.9154 35.288C45.3874 35.288 42.2194 31.736 42.2194 25.688V10.136ZM84.4725 35H82.3605C79.6725 35 77.9925 33.464 77.9925 30.68V20.12C77.9925 15.896 75.6885 14.216 72.8565 14.216C70.8405 14.216 68.2005 15.752 68.2005 20.312V35H66.0885C63.0645 35 61.6725 33.32 61.6725 30.68V0.439999H63.6885C66.7605 0.439999 68.2485 2.168 68.2485 4.568V11.96C69.2085 10.424 71.4165 8.504 73.8645 8.504C80.5365 8.504 84.4725 12.488 84.4725 19.832V35ZM105.657 15.368H105.417C104.457 14.984 103.353 14.6 101.673 14.6C98.7934 14.6 97.2094 16.184 97.2094 20.12V35H95.4334C92.5534 35 90.7294 33.56 90.7294 30.872V18.968C90.7294 13.784 93.4654 8.84 100.281 8.84C104.265 8.84 105.657 11.096 105.657 13.064V15.368Z" fill="var(--logo-color)"></path><path d="M115.099 30.872C115.099 33.128 113.227 35 110.971 35C108.715 35 106.843 33.128 106.843 30.872C106.843 28.616 108.715 26.744 110.971 26.744C113.227 26.744 115.099 28.616 115.099 30.872Z" fill="#82C1C9"></path></svg>',l(e,"class","svelte-1ui0zg2")},m(a,r){b(a,e,r),s||(n=K(e,"click",t[0]),s=!0)},p:z,i:z,o:z,d(a){a&&$(e),s=!1,n()}}}function He(t,e,s){let n=!1;function a(){s(1,n=!n)}return t.$$.update=()=>{if(t.$$.dirty&2){const r=document.documentElement;n?r.classList.add("dark-mode"):r.classList.remove("dark-mode")}},[a,n]}class Me extends B{constructor(e){super(),x(this,e,He,Ee,q,{})}}function Ie(){return new Promise((t,e)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(s=>{t({latitude:s.coords.latitude,longitude:s.coords.longitude})},s=>{e(s)}):e(new Error("Geolocation is not supported by this browser."))})}function ne(t){return new Date(t).toLocaleDateString("en-US",{month:"short",day:"numeric"})}function ae(t,e,s){const n=t.slice();return n[5]=e[s],n}function Ae(t){let e,s=se(t[0]),n=[];for(let a=0;a<s.length;a+=1)n[a]=re(ae(t,s,a));return{c(){e=g("div");for(let a=0;a<n.length;a+=1)n[a].c();l(e,"class","forecast-details svelte-1ai4sda")},m(a,r){b(a,e,r);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(e,null)},p(a,r){if(r&1){s=se(a[0]);let i;for(i=0;i<s.length;i+=1){const u=ae(a,s,i);n[i]?n[i].p(u,r):(n[i]=re(u),n[i].c(),n[i].m(e,null))}for(;i<n.length;i+=1)n[i].d(1);n.length=s.length}},d(a){a&&$(e),ve(n,a)}}}function We(t){let e;return{c(){e=g("div"),e.innerHTML=`<div class="forecast-day svelte-1ai4sda"><h3 class="svelte-1ai4sda">N/A</h3> <img class="weather-icon svelte-1ai4sda" src="${C(1,1)}" alt="Weather Icon"/> <p class="svelte-1ai4sda">N/A</p></div> <div class="forecast-day svelte-1ai4sda"><h3 class="svelte-1ai4sda">N/A</h3> <img class="weather-icon svelte-1ai4sda" src="${C(1,1)}" alt="Weather Icon"/> <p class="svelte-1ai4sda">N/A</p></div> <div class="forecast-day svelte-1ai4sda"><h3 class="svelte-1ai4sda">N/A</h3> <img class="weather-icon svelte-1ai4sda" src="${C(1,1)}" alt="Weather Icon"/> <p class="svelte-1ai4sda">N/A</p></div>`,l(e,"class","forecast-details svelte-1ai4sda")},m(s,n){b(s,e,n)},p:z,d(s){s&&$(e)}}}function Se(t){let e;return{c(){e=g("div"),e.innerHTML=`<div class="forecast-day svelte-1ai4sda"><h3 class="svelte-1ai4sda">...</h3> <img class="weather-icon svelte-1ai4sda" src="${C(1,1)}" alt="Weather Icon"/> <p class="svelte-1ai4sda">...</p></div> <div class="forecast-day svelte-1ai4sda"><h3 class="svelte-1ai4sda">...</h3> <img class="weather-icon svelte-1ai4sda" src="${C(1,1)}" alt="Weather Icon"/> <p class="svelte-1ai4sda">...</p></div> <div class="forecast-day svelte-1ai4sda"><h3 class="svelte-1ai4sda">...</h3> <img class="weather-icon svelte-1ai4sda" src="${C(1,1)}" alt="Weather Icon"/> <p class="svelte-1ai4sda">...</p></div>`,l(e,"class","forecast-details svelte-1ai4sda")},m(s,n){b(s,e,n)},p:z,d(s){s&&$(e)}}}function re(t){let e,s,n=ne(t[5].date)+"",a,r,i,u,d,c,v=Math.round(t[5].day.maxtemp_f)+"",o,y;return{c(){e=g("div"),s=g("h3"),a=M(n),r=L(),i=g("img"),d=L(),c=g("p"),o=M(v),y=L(),l(s,"class","svelte-1ai4sda"),l(i,"class","weather-icon svelte-1ai4sda"),j(i.src,u=C(t[5].day.condition.code,1))||l(i,"src",u),l(i,"alt","Weather Icon"),l(c,"class","svelte-1ai4sda"),l(e,"class","forecast-day svelte-1ai4sda")},m(p,_){b(p,e,_),h(e,s),h(s,a),h(e,r),h(e,i),h(e,d),h(e,c),h(c,o),h(e,y)},p(p,_){_&1&&n!==(n=ne(p[5].date)+"")&&A(a,n),_&1&&!j(i.src,u=C(p[5].day.condition.code,1))&&l(i,"src",u),_&1&&v!==(v=Math.round(p[5].day.maxtemp_f)+"")&&A(o,v)},d(p){p&&$(e)}}}function Ve(t){let e;function s(r,i){if(r[1])return Se;if(r[2])return We;if(r[0])return Ae}let n=s(t),a=n&&n(t);return{c(){e=g("div"),a&&a.c(),l(e,"class","forecast-container svelte-1ai4sda")},m(r,i){b(r,e,i),a&&a.m(e,null)},p(r,[i]){n===(n=s(r))&&a?a.p(r,i):(a&&a.d(1),a=n&&n(r),a&&(a.c(),a.m(e,null)))},i:z,o:z,d(r){r&&$(e),a&&a.d()}}}function Oe(t,e,s){let{cityName:n}=e,a=null,r=!0,i=!1;async function u(d){s(1,r=!0),s(2,i=!1);try{s(0,a=await ke(d)),console.log(a),s(1,r=!1)}catch(c){console.error("Fetch error: ",c)}}return le(()=>{u(n)}),t.$$set=d=>{"cityName"in d&&s(3,n=d.cityName)},t.$$.update=()=>{t.$$.dirty&8&&u(n)},[a,r,i,n]}class De extends B{constructor(e){super(),x(this,e,Oe,Ve,q,{cityName:3})}}function je(t){let e,s,n=t[1].location.name+"",a,r,i,u,d,c,v,o,y=Math.round(t[1].current.temp_f)+"",p,_,k,w=t[1].current.condition.text+"",f;return{c(){e=g("div"),s=g("h2"),a=M(n),r=L(),i=g("div"),u=g("img"),c=L(),v=g("div"),o=g("p"),p=M(y),_=L(),k=g("p"),f=M(w),l(s,"class","svelte-16hlhen"),l(u,"class","weather-icon svelte-16hlhen"),j(u.src,d=C(t[1].current.condition.code,t[1].current.is_day))||l(u,"src",d),l(u,"alt","Weather Icon"),l(o,"class","temp svelte-16hlhen"),l(v,"class","current-data wrapper svelte-16hlhen"),l(i,"class","weather-info"),l(e,"class","weather-details svelte-16hlhen")},m(m,N){b(m,e,N),h(e,s),h(s,a),h(e,r),h(e,i),h(i,u),h(i,c),h(i,v),h(v,o),h(o,p),h(v,_),h(v,k),h(k,f)},p(m,N){N&2&&n!==(n=m[1].location.name+"")&&A(a,n),N&2&&!j(u.src,d=C(m[1].current.condition.code,m[1].current.is_day))&&l(u,"src",d),N&2&&y!==(y=Math.round(m[1].current.temp_f)+"")&&A(p,y),N&2&&w!==(w=m[1].current.condition.text+"")&&A(f,w)},d(m){m&&$(e)}}}function Pe(t){let e;return{c(){e=g("div"),e.innerHTML=`<h2 class="svelte-16hlhen">N/A</h2> <div class="weather-info"><img class="weather-icon svelte-16hlhen" src="${C(1,1)}" alt="Weather Icon"/> <div class="current-data wrapper svelte-16hlhen"><p class="temp svelte-16hlhen">N/A</p> <p>N/A</p></div></div>`,l(e,"class","weather-details svelte-16hlhen")},m(s,n){b(s,e,n)},p:z,d(s){s&&$(e)}}}function Fe(t){let e;return{c(){e=g("div"),e.innerHTML=`<h2 class="svelte-16hlhen">Loading</h2> <div class="weather-info"><img class="weather-icon svelte-16hlhen" src="${C(1,1)}" alt="Weather Icon"/> <div class="current-data wrapper svelte-16hlhen"><p class="temp svelte-16hlhen">Loading</p> <p>Loading</p></div></div>`,l(e,"class","weather-details svelte-16hlhen")},m(s,n){b(s,e,n)},p:z,d(s){s&&$(e)}}}function Te(t){let e,s,n,a,r,i,u,d,c,v,o,y,p;function _(f,m){if(f[2])return Fe;if(f[3])return Pe;if(f[1])return je}let k=_(t),w=k&&k(t);return d=new De({props:{cityName:t[0]}}),v=new Me({}),{c(){e=g("main"),s=g("div"),n=g("input"),a=L(),r=g("button"),r.innerHTML='<img src="assets/search-globe-svgrepo-com.svg" alt="" class="svelte-16hlhen"/> <p class="svelte-16hlhen">Search by Location</p>',i=L(),w&&w.c(),u=L(),Y(d.$$.fragment),c=L(),Y(v.$$.fragment),l(n,"type","text"),l(n,"placeholder","Enter city name"),l(n,"class","svelte-16hlhen"),l(r,"class","svelte-16hlhen"),l(s,"class","search svelte-16hlhen"),l(e,"class","svelte-16hlhen")},m(f,m){b(f,e,m),h(e,s),h(s,n),X(n,t[0]),h(s,a),h(s,r),h(e,i),w&&w.m(e,null),h(e,u),F(d,e,null),h(e,c),F(v,e,null),o=!0,y||(p=[K(n,"input",t[5]),K(r,"click",t[4])],y=!0)},p(f,[m]){m&1&&n.value!==f[0]&&X(n,f[0]),k===(k=_(f))&&w?w.p(f,m):(w&&w.d(1),w=k&&k(f),w&&(w.c(),w.m(e,u)));const N={};m&1&&(N.cityName=f[0]),d.$set(N)},i(f){o||(P(d.$$.fragment,f),P(v.$$.fragment,f),o=!0)},o(f){R(d.$$.fragment,f),R(v.$$.fragment,f),o=!1},d(f){f&&$(e),w&&w.d(),T(d),T(v),y=!1,V(p)}}}function ie(t){localStorage.setItem("weatherData",JSON.stringify(t))}function qe(){const t=localStorage.getItem("weatherData");return t?JSON.parse(t):null}function xe(t,e,s){let n=null,a=!0,r=!1,i="New York",u=null;async function d(){s(2,a=!0),s(3,r=!1);try{const o=await Ie();u=o;const y=await fetch(`https://api.weatherapi.com/v1/current.json?key=4430333c9c54480db3550207232712&q=${o.latitude},${o.longitude}`);s(1,n=await y.json()),s(0,i=n.location.name),ie(n),s(2,a=!1)}catch(o){console.error("Error fetching weather data: ",o),s(3,r=!0),s(2,a=!1)}}async function c(o){s(2,a=!0),s(3,r=!1);try{s(1,n=await Le(o)),ie(n),s(2,a=!1)}catch(y){console.error("Fetch error: ",y),s(3,r=!0),s(2,a=!1)}}le(()=>{const o=qe();o?(s(1,n=o),s(0,i=n.location.name),s(2,a=!1)):d()});function v(){i=this.value,s(0,i)}return t.$$.update=()=>{t.$$.dirty&1&&c(i)},[i,n,a,r,d,v]}class Be extends B{constructor(e){super(),x(this,e,xe,Te,q,{})}}function Ze(t){let e,s,n,a;return n=new Be({}),{c(){e=g("main"),s=g("div"),Y(n.$$.fragment),l(s,"class","quick container svelte-xdotp5"),l(e,"class","svelte-xdotp5")},m(r,i){b(r,e,i),h(e,s),F(n,s,null),a=!0},p:z,i(r){a||(P(n.$$.fragment,r),a=!0)},o(r){R(n.$$.fragment,r),a=!1},d(r){r&&$(e),T(n)}}}class Je extends B{constructor(e){super(),x(this,e,null,Ze,q,{})}}new Je({target:document.getElementById("app")});

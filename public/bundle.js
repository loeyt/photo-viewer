var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function c(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}const i="undefined"!=typeof window;let a=i?()=>window.performance.now():()=>Date.now(),l=i?t=>requestAnimationFrame(t):t;const u=new Set;function d(t){u.forEach(e=>{e.c(t)||(u.delete(e),e.f())}),0!==u.size&&l(d)}function f(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function m(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function $(){return g(" ")}function b(){return g("")}function y(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const w=new Set;let k,_=0;function x(t,e,n,o,r,c,s,i=0){const a=16.666/o;let l="{\n";for(let t=0;t<=1;t+=a){const o=e+(n-e)*c(t);l+=100*t+`%{${s(o,1-o)}}\n`}const u=l+`100% {${s(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${i}`,f=t.ownerDocument;w.add(f);const p=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(m("style")).sheet),h=f.__svelte_rules||(f.__svelte_rules={});h[d]||(h[d]=!0,p.insertRule(`@keyframes ${d} ${u}`,p.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${d} ${o}ms linear ${r}ms 1 both`,_+=1,d}function E(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),_-=r,_||l(()=>{_||(w.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),w.clear())}))}function j(t){k=t}function L(){if(!k)throw new Error("Function called outside component initialization");return k}const R=[],A=[],S=[],O=[],C=Promise.resolve();let z=!1;function N(t){S.push(t)}let U=!1;const q=new Set;function M(){if(!U){U=!0;do{for(let t=0;t<R.length;t+=1){const e=R[t];j(e),P(e.$$)}for(R.length=0;A.length;)A.pop()();for(let t=0;t<S.length;t+=1){const e=S[t];q.has(e)||(q.add(e),e())}S.length=0}while(R.length);for(;O.length;)O.pop()();z=!1,U=!1,q.clear()}}function P(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}let D;function T(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const F=new Set;let H;function I(){H={r:0,c:[],p:H}}function B(){H.r||r(H.c),H=H.p}function V(t,e){t&&t.i&&(F.delete(t),t.i(e))}function G(t,e,n,o){if(t&&t.o){if(F.has(t))return;F.add(t),H.c.push(()=>{F.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}const J={duration:0};function K(n,o,s,i){let f=o(n,s),p=i?0:1,h=null,m=null,g=null;function $(){g&&E(n,g)}function b(t,e){const n=t.b-p;return e*=Math.abs(n),{a:p,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function y(o){const{delay:c=0,duration:s=300,easing:i=e,tick:y=t,css:v}=f||J,w={start:a()+c,b:o};o||(w.group=H,H.r+=1),h?m=w:(v&&($(),g=x(n,p,o,s,c,i,v)),o&&y(0,1),h=b(w,s),N(()=>T(n,o,"start")),function(t){let e;0===u.size&&l(d),new Promise(n=>{u.add(e={c:t,f:n})})}(t=>{if(m&&t>m.start&&(h=b(m,s),m=null,T(n,h.b,"start"),v&&($(),g=x(n,p,h.b,h.duration,0,i,f.css))),h)if(t>=h.end)y(p=h.b,1-p),T(n,h.b,"end"),m||(h.b?$():--h.group.r||r(h.group.c)),h=null;else if(t>=h.start){const e=t-h.start;p=h.a+h.d*i(e/h.duration),y(p,1-p)}return!(!h&&!m)}))}return{run(t){c(f)?(D||(D=Promise.resolve(),D.then(()=>{D=null})),D).then(()=>{f=f(),y(t)}):y(t)},end(){$(),h=m=null}}}function Q(t,e){const n=e.token={};function o(t,o,r,c){if(e.token!==n)return;e.resolved=c;let s=e.ctx;void 0!==r&&(s=s.slice(),s[r]=c);const i=t&&(e.current=t)(s);let a=!1;e.block&&(e.blocks?e.blocks.forEach((t,n)=>{n!==o&&t&&(I(),G(t,1,1,()=>{e.blocks[n]=null}),B())}):e.block.d(1),i.c(),V(i,1),i.m(e.mount(),e.anchor),a=!0),e.block=i,e.blocks&&(e.blocks[o]=i),a&&M()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const n=L();if(t.then(t=>{j(n),o(e.then,1,e.value,t),j(null)},t=>{j(n),o(e.catch,2,e.error,t),j(null)}),e.current!==e.pending)return o(e.pending,0),!0}else{if(e.current!==e.then)return o(e.then,1,e.value,t),!0;e.resolved=t}var r}const W="undefined"!=typeof window?window:global;function X(t,e,o){const{fragment:s,on_mount:i,on_destroy:a,after_update:l}=t.$$;s&&s.m(e,o),N(()=>{const e=i.map(n).filter(c);a?a.push(...e):r(e),t.$$.on_mount=[]}),l.forEach(N)}function Y(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(t,e){-1===t.$$.dirty[0]&&(R.push(t),z||(z=!0,C.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function tt(e,n,c,s,i,a,l=[-1]){const u=k;j(e);const d=n.props||{},f=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:l};let p=!1;if(f.ctx=c?c(e,d,(t,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=r)&&(f.bound[t]&&f.bound[t](r),p&&Z(e,t)),n}):[],f.update(),p=!0,r(f.before_update),f.fragment=!!s&&s(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(h)}else f.fragment&&f.fragment.c();n.intro&&V(e.$$.fragment),X(e,n.target,n.anchor),M()}j(u)}class et{$destroy(){Y(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function nt(t,{delay:n=0,duration:o=400,easing:r=e}){const c=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:r,css:t=>`opacity: ${t*c}`}}function ot(e){let n;return{c(){n=m("img"),v(n,"alt",e[0]),v(n,"sizes",e[1]),v(n,"srcset",e[2]),v(n,"class","svelte-ozc50d")},m(t,e){p(t,n,e)},p(t,[e]){1&e&&v(n,"alt",t[0]),2&e&&v(n,"sizes",t[1]),4&e&&v(n,"srcset",t[2])},i:t,o:t,d(t){t&&h(n)}}}function rt(t,e,n){let o,r,{alt:c}=e,{data:s}=e;return t.$set=t=>{"alt"in t&&n(0,c=t.alt),"data"in t&&n(3,s=t.data)},t.$$.update=()=>{8&t.$$.dirty&&n(1,o=Object.keys(s).map(t=>t.split("x").map(t=>Number.parseInt(t,10))).sort((t,e)=>e[0]-t[0]).map((t,e,n)=>{const[o,r]=t;return e==n.length-1?`${o}px`:`(min-width: ${o}px) and (min-height: ${r}px) ${o}px`}).join(", ")),8&t.$$.dirty&&n(2,r=Object.entries(s).map(([t,e])=>{const[n]=t.split("x");return`${e} ${n}w`}).join(", "))},[c,o,r,s]}class ct extends et{constructor(t){super(),tt(this,t,rt,ot,s,{alt:0,data:3})}}const{window:st}=W;function it(t){let e,n,o,r={ctx:t,current:null,token:null,pending:ut,then:lt,catch:at,value:13,blocks:[,,,]};return Q(n=t[2],r),{c(){e=b(),r.block.c()},m(t,n){p(t,e,n),r.block.m(t,r.anchor=n),r.mount=()=>e.parentNode,r.anchor=e,o=!0},p(e,n){{const o=(t=e).slice();o[13]=r.resolved,r.block.p(o,n)}},i(t){o||(V(r.block),o=!0)},o(t){for(let t=0;t<3;t+=1){G(r.blocks[t])}o=!1},d(t){t&&h(e),r.block.d(t),r.token=null,r=null}}}function at(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function lt(t){let e,n,o,c,s,i,a,l,u;const d=new ct({props:{alt:t[0],data:t[13][t[0]]}});return{c(){var t;e=m("div"),n=m("div"),o=m("div"),o.innerHTML='<span class="svelte-1xgl19j"></span>',c=$(),(t=d.$$.fragment)&&t.c(),s=$(),i=m("div"),i.innerHTML='<span class="svelte-1xgl19j"></span>',v(o,"class","overlay prev svelte-1xgl19j"),v(i,"class","overlay next svelte-1xgl19j"),v(n,"class","image svelte-1xgl19j"),v(e,"class","background svelte-1xgl19j")},m(a,h,m){p(a,e,h),f(e,n),f(n,o),f(n,c),X(d,n,null),f(n,s),f(n,i),t[12](e),l=!0,m&&r(u),u=[y(o,"click",t[3]),y(i,"click",t[4]),y(e,"click",t[6])]},p(t,e){const n={};1&e&&(n.alt=t[0]),1&e&&(n.data=t[13][t[0]]),d.$set(n)},i(t){l||(V(d.$$.fragment,t),N(()=>{a||(a=K(e,nt,{},!0)),a.run(1)}),l=!0)},o(t){G(d.$$.fragment,t),a||(a=K(e,nt,{},!1)),a.run(0),l=!1},d(n){n&&h(e),Y(d),t[12](null),n&&a&&a.end(),r(u)}}}function ut(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function dt(t){let e,n,o,c=t[0]&&it(t);return{c(){c&&c.c(),e=b()},m(s,i,a){c&&c.m(s,i),p(s,e,i),n=!0,a&&r(o),o=[y(st,"load",t[7]),y(st,"hashchange",t[7]),y(st,"keydown",t[5])]},p(t,[n]){t[0]?c?(c.p(t,n),V(c,1)):(c=it(t),c.c(),V(c,1),c.m(e.parentNode,e)):c&&(I(),G(c,1,1,()=>{c=null}),B())},i(t){n||(V(c),n=!0)},o(t){G(c),n=!1},d(t){c&&c.d(t),t&&h(e),r(o)}}}function ft(t,e,n){let o,r,{dataURL:c}=e,s=[],i=(async t=>{const e=await fetch(t),n=await e.json();return s=Array.from(document.links).flatMap(t=>{const e=t.getAttribute("href");if(e in n)return t.addEventListener("click",n=>{n.preventDefault(),a(e),t.blur()}),e}),n})(c);function a(t){o?history.replaceState(history.state,"",t):history.pushState({back:!0},"",t),f()}function l(){if(o){let t=o;history.state&&history.state.back?history.back():a(window.location.pathname);let e=document.querySelector(`a[href="${t}"]`);e&&e.focus()}}function u(){const t=s.indexOf(o);t<1?l():a(s[t-1])}function d(){const t=s.indexOf(o);t>=s.length-1?l():a(s[t+1])}function f(){if(n(0,o=window.location.hash),o){document.body.classList.add("photo-viewer");let t=document.querySelector(`a[href="${o}"]`);t&&t.scrollIntoView({behavior:"smooth",block:"nearest"})}else document.body.classList.remove("photo-viewer")}return t.$set=t=>{"dataURL"in t&&n(8,c=t.dataURL)},[o,r,i,u,d,function(t){if(o)switch(t.key){case"Escape":l();break;case"ArrowLeft":case"PageUp":u();break;case"ArrowRight":case"PageDown":d()}},function(t){t.target===r&&l()},f,c,s,a,l,function(t){A[t?"unshift":"push"](()=>{n(1,r=t)})}]}history.scrollRestoration&&(history.scrollRestoration="manual");return new class extends et{constructor(t){super(),tt(this,t,ft,dt,s,{dataURL:8})}}({target:document.body,props:{dataURL:document.querySelector("script[data-photo-viewer]").getAttribute("data-photo-viewer")},intro:!0})}();
//# sourceMappingURL=bundle.js.map

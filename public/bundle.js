var app=function(){"use strict";function t(){}const n=t=>t;function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}const a="undefined"!=typeof window;let i=a?()=>window.performance.now():()=>Date.now(),l=a?t=>requestAnimationFrame(t):t;const u=new Set;function d(t){u.forEach(n=>{n.c(t)||(u.delete(n),n.f())}),0!==u.size&&l(d)}function f(t,n,e){t.insertBefore(n,e||null)}function p(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function m(){return t="",document.createTextNode(t);var t}function $(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function b(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}const g=new Set;let y,w=0;function v(t,n,e,o,r,c,s,a=0){const i=16.666/o;let l="{\n";for(let t=0;t<=1;t+=i){const o=n+(e-n)*c(t);l+=100*t+`%{${s(o,1-o)}}\n`}const u=l+`100% {${s(e,1-e)}}\n}`,d=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(u)}_${a}`,f=t.ownerDocument;g.add(f);const p=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(h("style")).sheet),m=f.__svelte_rules||(f.__svelte_rules={});m[d]||(m[d]=!0,p.insertRule(`@keyframes ${d} ${u}`,p.cssRules.length));const $=t.style.animation||"";return t.style.animation=`${$?`${$}, `:""}${d} ${o}ms linear ${r}ms 1 both`,w+=1,d}function _(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),r=e.length-o.length;r&&(t.style.animation=o.join(", "),w-=r,w||l(()=>{w||(g.forEach(t=>{const n=t.__svelte_stylesheet;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.__svelte_rules={}}),g.clear())}))}function k(t){y=t}function x(){if(!y)throw new Error("Function called outside component initialization");return y}const E=[],R=[],j=[],S=[],A=Promise.resolve();let L=!1;function N(t){j.push(t)}let C=!1;const z=new Set;function O(){if(!C){C=!0;do{for(let t=0;t<E.length;t+=1){const n=E[t];k(n),U(n.$$)}for(E.length=0;R.length;)R.pop()();for(let t=0;t<j.length;t+=1){const n=j[t];z.has(n)||(z.add(n),n())}j.length=0}while(E.length);for(;S.length;)S.pop()();L=!1,C=!1,z.clear()}}function U(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}let q;function D(t,n,e){t.dispatchEvent(function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(`${n?"intro":"outro"}${e}`))}const I=new Set;let P;function F(){P={r:0,c:[],p:P}}function M(){P.r||r(P.c),P=P.p}function B(t,n){t&&t.i&&(I.delete(t),t.i(n))}function T(t,n,e,o){if(t&&t.o){if(I.has(t))return;I.add(t),P.c.push(()=>{I.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}const G={duration:0};function H(e,o,s,a){let f=o(e,s),p=a?0:1,h=null,m=null,$=null;function b(){$&&_(e,$)}function g(t,n){const e=t.b-p;return n*=Math.abs(e),{a:p,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function y(o){const{delay:c=0,duration:s=300,easing:a=n,tick:y=t,css:w}=f||G,_={start:i()+c,b:o};o||(_.group=P,P.r+=1),h?m=_:(w&&(b(),$=v(e,p,o,s,c,a,w)),o&&y(0,1),h=g(_,s),N(()=>D(e,o,"start")),function(t){let n;0===u.size&&l(d),new Promise(e=>{u.add(n={c:t,f:e})})}(t=>{if(m&&t>m.start&&(h=g(m,s),m=null,D(e,h.b,"start"),w&&(b(),$=v(e,p,h.b,h.duration,0,a,f.css))),h)if(t>=h.end)y(p=h.b,1-p),D(e,h.b,"end"),m||(h.b?b():--h.group.r||r(h.group.c)),h=null;else if(t>=h.start){const n=t-h.start;p=h.a+h.d*a(n/h.duration),y(p,1-p)}return!(!h&&!m)}))}return{run(t){c(f)?(q||(q=Promise.resolve(),q.then(()=>{q=null})),q).then(()=>{f=f(),y(t)}):y(t)},end(){b(),h=m=null}}}function J(t,n){const e=n.token={};function o(t,o,r,c){if(n.token!==e)return;n.resolved=c;let s=n.ctx;void 0!==r&&(s=s.slice(),s[r]=c);const a=t&&(n.current=t)(s);let i=!1;n.block&&(n.blocks?n.blocks.forEach((t,e)=>{e!==o&&t&&(F(),T(t,1,1,()=>{n.blocks[e]=null}),M())}):n.block.d(1),a.c(),B(a,1),a.m(n.mount(),n.anchor),i=!0),n.block=a,n.blocks&&(n.blocks[o]=a),i&&O()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const e=x();if(t.then(t=>{k(e),o(n.then,1,n.value,t),k(null)},t=>{k(e),o(n.catch,2,n.error,t),k(null)}),n.current!==n.pending)return o(n.pending,0),!0}else{if(n.current!==n.then)return o(n.then,1,n.value,t),!0;n.resolved=t}var r}const K="undefined"!=typeof window?window:global;function Q(t,n,o){const{fragment:s,on_mount:a,on_destroy:i,after_update:l}=t.$$;s&&s.m(n,o),N(()=>{const n=a.map(e).filter(c);i?i.push(...n):r(n),t.$$.on_mount=[]}),l.forEach(N)}function V(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function W(t,n){-1===t.$$.dirty[0]&&(E.push(t),L||(L=!0,A.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function X(n,e,c,s,a,i,l=[-1]){const u=y;k(n);const d=e.props||{},f=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:l};let h=!1;if(f.ctx=c?c(n,d,(t,e,...o)=>{const r=o.length?o[0]:e;return f.ctx&&a(f.ctx[t],f.ctx[t]=r)&&(f.bound[t]&&f.bound[t](r),h&&W(n,t)),e}):[],f.update(),h=!0,r(f.before_update),f.fragment=!!s&&s(f.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);f.fragment&&f.fragment.l(t),t.forEach(p)}else f.fragment&&f.fragment.c();e.intro&&B(n.$$.fragment),Q(n,e.target,e.anchor),O()}k(u)}class Y{$destroy(){V(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}function Z(t,{delay:e=0,duration:o=400,easing:r=n}){const c=+getComputedStyle(t).opacity;return{delay:e,duration:o,easing:r,css:t=>`opacity: ${t*c}`}}function tt(n){let e;return{c(){e=h("img"),b(e,"alt",n[0]),b(e,"sizes",n[1]),b(e,"srcset",n[2]),b(e,"class","svelte-ozc50d")},m(t,n){f(t,e,n)},p(t,[n]){1&n&&b(e,"alt",t[0]),2&n&&b(e,"sizes",t[1]),4&n&&b(e,"srcset",t[2])},i:t,o:t,d(t){t&&p(e)}}}function nt(t,n,e){let o,r,{alt:c}=n,{data:s}=n;return t.$set=t=>{"alt"in t&&e(0,c=t.alt),"data"in t&&e(3,s=t.data)},t.$$.update=()=>{8&t.$$.dirty&&e(1,o=Object.keys(s).sort((t,n)=>Number.parseInt(t.split("x")[0],10)<Number.parseInt(n.split("x")[0],10)).map(t=>{const[n,e]=t.split("x").map(t=>Number.parseInt(t,10));return`(min-width: ${n}px) and (min-height: ${e}px) ${n}px`}).join(", ")+", 600px"),8&t.$$.dirty&&e(2,r=Object.entries(s).map(([t,n])=>{const[e]=t.split("x");return`${n} ${e}w`}).join(", "))},[c,o,r,s]}class et extends Y{constructor(t){super(),X(this,t,nt,tt,s,{alt:0,data:3})}}const{window:ot}=K;function rt(t){let n,e,o,r={ctx:t,current:null,token:null,pending:at,then:st,catch:ct,value:5,blocks:[,,,]};return J(e=t[1],r),{c(){n=m(),r.block.c()},m(t,e){f(t,n,e),r.block.m(t,r.anchor=e),r.mount=()=>n.parentNode,r.anchor=n,o=!0},p(n,e){{const o=(t=n).slice();o[5]=r.resolved,r.block.p(o,e)}},i(t){o||(B(r.block),o=!0)},o(t){for(let t=0;t<3;t+=1){T(r.blocks[t])}o=!1},d(t){t&&p(n),r.block.d(t),r.token=null,r=null}}}function ct(n){return{c:t,m:t,p:t,i:t,o:t,d:t}}function st(t){let n,e,o,r;const c=new et({props:{alt:t[0],data:t[5][t[0]]}});return{c(){var t;n=h("div"),e=h("div"),(t=c.$$.fragment)&&t.c(),b(e,"class","current svelte-1avtc2x"),b(n,"class","svelte-1avtc2x")},m(t,o){f(t,n,o),function(t,n){t.appendChild(n)}(n,e),Q(c,e,null),r=!0},p(t,n){const e={};1&n&&(e.alt=t[0]),1&n&&(e.data=t[5][t[0]]),c.$set(e)},i(t){r||(B(c.$$.fragment,t),N(()=>{o||(o=H(n,Z,{},!0)),o.run(1)}),r=!0)},o(t){T(c.$$.fragment,t),o||(o=H(n,Z,{},!1)),o.run(0),r=!1},d(t){t&&p(n),V(c),t&&o&&o.end()}}}function at(n){return{c:t,m:t,p:t,i:t,o:t,d:t}}function it(t){let n,e,o,c=t[0]&&rt(t);return{c(){c&&c.c(),n=m()},m(s,a,i){c&&c.m(s,a),f(s,n,a),e=!0,i&&r(o),o=[$(ot,"hashchange",t[4]),$(ot,"keydown",t[2])]},p(t,[e]){t[0]?c?(c.p(t,e),B(c,1)):(c=rt(t),c.c(),B(c,1),c.m(n.parentNode,n)):c&&(F(),T(c,1,1,()=>{c=null}),M())},i(t){e||(B(c),e=!0)},o(t){T(c),e=!1},d(t){c&&c.d(t),t&&p(n),r(o)}}}function lt(t,n,e){let{dataURL:o}=n,r=(async t=>{const n=await fetch(t),o=await n.json();for(const t of document.links){const n=t.getAttribute("href");n in o&&t.addEventListener("click",t=>{t.preventDefault(),window.location.hash?history.replaceState({back:!0},"",n):history.pushState({back:!0},"",n),e(0,c=window.location.hash)})}return o})(o),c=window.location.hash;return t.$set=t=>{"dataURL"in t&&e(3,o=t.dataURL)},[c,r,function(t){"Escape"==t.key&&window.location.hash&&(history.state&&history.state.back?history.back():(history.replaceState({back:!0},"",window.location.pathname),e(0,c="")))},o,()=>{e(0,c=window.location.hash)}]}history.scrollRestoration&&(history.scrollRestoration="manual");return new class extends Y{constructor(t){super(),X(this,t,lt,it,s,{dataURL:3})}}({target:document.body,props:{dataURL:document.querySelector("script[data-photo-viewer]").getAttribute("data-photo-viewer")},intro:!0})}();
//# sourceMappingURL=bundle.js.map

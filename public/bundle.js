var app=function(){"use strict";function t(){}const n=t=>t;function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}const i="undefined"!=typeof window;let l=i?()=>window.performance.now():()=>Date.now(),u=i?t=>requestAnimationFrame(t):t;const a=new Set;function d(t){a.forEach(n=>{n.c(t)||(a.delete(n),n.f())}),0!==a.size&&u(d)}function f(t,n,e){t.insertBefore(n,e||null)}function p(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function m(){return t="",document.createTextNode(t);var t}function $(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function g(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}const b=new Set;let y,_=0;function v(t,n,e,o,r,c,s,i=0){const l=16.666/o;let u="{\n";for(let t=0;t<=1;t+=l){const o=n+(e-n)*c(t);u+=100*t+`%{${s(o,1-o)}}\n`}const a=u+`100% {${s(e,1-e)}}\n}`,d=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(a)}_${i}`,f=t.ownerDocument;b.add(f);const p=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(h("style")).sheet),m=f.__svelte_rules||(f.__svelte_rules={});m[d]||(m[d]=!0,p.insertRule(`@keyframes ${d} ${a}`,p.cssRules.length));const $=t.style.animation||"";return t.style.animation=`${$?`${$}, `:""}${d} ${o}ms linear ${r}ms 1 both`,_+=1,d}function w(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),r=e.length-o.length;r&&(t.style.animation=o.join(", "),_-=r,_||u(()=>{_||(b.forEach(t=>{const n=t.__svelte_stylesheet;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.__svelte_rules={}}),b.clear())}))}function k(t){y=t}function x(){if(!y)throw new Error("Function called outside component initialization");return y}const E=[],j=[],R=[],N=[],A=Promise.resolve();let C=!1;function L(t){R.push(t)}let z=!1;const O=new Set;function S(){if(!z){z=!0;do{for(let t=0;t<E.length;t+=1){const n=E[t];k(n),U(n.$$)}for(E.length=0;j.length;)j.pop()();for(let t=0;t<R.length;t+=1){const n=R[t];O.has(n)||(O.add(n),n())}R.length=0}while(E.length);for(;N.length;)N.pop()();C=!1,z=!1,O.clear()}}function U(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(L)}}let q;function I(t,n,e){t.dispatchEvent(function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(`${n?"intro":"outro"}${e}`))}const P=new Set;let D;function F(){D={r:0,c:[],p:D}}function M(){D.r||r(D.c),D=D.p}function B(t,n){t&&t.i&&(P.delete(t),t.i(n))}function T(t,n,e,o){if(t&&t.o){if(P.has(t))return;P.add(t),D.c.push(()=>{P.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}const G={duration:0};function H(e,o,s,i){let f=o(e,s),p=i?0:1,h=null,m=null,$=null;function g(){$&&w(e,$)}function b(t,n){const e=t.b-p;return n*=Math.abs(e),{a:p,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function y(o){const{delay:c=0,duration:s=300,easing:i=n,tick:y=t,css:_}=f||G,w={start:l()+c,b:o};o||(w.group=D,D.r+=1),h?m=w:(_&&(g(),$=v(e,p,o,s,c,i,_)),o&&y(0,1),h=b(w,s),L(()=>I(e,o,"start")),function(t){let n;0===a.size&&u(d),new Promise(e=>{a.add(n={c:t,f:e})})}(t=>{if(m&&t>m.start&&(h=b(m,s),m=null,I(e,h.b,"start"),_&&(g(),$=v(e,p,h.b,h.duration,0,i,f.css))),h)if(t>=h.end)y(p=h.b,1-p),I(e,h.b,"end"),m||(h.b?g():--h.group.r||r(h.group.c)),h=null;else if(t>=h.start){const n=t-h.start;p=h.a+h.d*i(n/h.duration),y(p,1-p)}return!(!h&&!m)}))}return{run(t){c(f)?(q||(q=Promise.resolve(),q.then(()=>{q=null})),q).then(()=>{f=f(),y(t)}):y(t)},end(){g(),h=m=null}}}function J(t,n){const e=n.token={};function o(t,o,r,c){if(n.token!==e)return;n.resolved=c;let s=n.ctx;void 0!==r&&(s=s.slice(),s[r]=c);const i=t&&(n.current=t)(s);let l=!1;n.block&&(n.blocks?n.blocks.forEach((t,e)=>{e!==o&&t&&(F(),T(t,1,1,()=>{n.blocks[e]=null}),M())}):n.block.d(1),i.c(),B(i,1),i.m(n.mount(),n.anchor),l=!0),n.block=i,n.blocks&&(n.blocks[o]=i),l&&S()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const e=x();if(t.then(t=>{k(e),o(n.then,1,n.value,t),k(null)},t=>{k(e),o(n.catch,2,n.error,t),k(null)}),n.current!==n.pending)return o(n.pending,0),!0}else{if(n.current!==n.then)return o(n.then,1,n.value,t),!0;n.resolved=t}var r}const K="undefined"!=typeof window?window:global;function Q(t,n,o){const{fragment:s,on_mount:i,on_destroy:l,after_update:u}=t.$$;s&&s.m(n,o),L(()=>{const n=i.map(e).filter(c);l?l.push(...n):r(n),t.$$.on_mount=[]}),u.forEach(L)}function V(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function W(t,n){-1===t.$$.dirty[0]&&(E.push(t),C||(C=!0,A.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function X(n,e,c,s,i,l,u=[-1]){const a=y;k(n);const d=e.props||{},f=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:o(),dirty:u};let h=!1;if(f.ctx=c?c(n,d,(t,e,...o)=>{const r=o.length?o[0]:e;return f.ctx&&i(f.ctx[t],f.ctx[t]=r)&&(f.bound[t]&&f.bound[t](r),h&&W(n,t)),e}):[],f.update(),h=!0,r(f.before_update),f.fragment=!!s&&s(f.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);f.fragment&&f.fragment.l(t),t.forEach(p)}else f.fragment&&f.fragment.c();e.intro&&B(n.$$.fragment),Q(n,e.target,e.anchor),S()}k(a)}class Y{$destroy(){V(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}function Z(t,{delay:e=0,duration:o=400,easing:r=n}){const c=+getComputedStyle(t).opacity;return{delay:e,duration:o,easing:r,css:t=>`opacity: ${t*c}`}}function tt(n){let e;return{c(){e=h("img"),g(e,"alt",n[0]),g(e,"sizes",n[1]),g(e,"srcset",n[2]),g(e,"class","svelte-ozc50d")},m(t,n){f(t,e,n)},p(t,[n]){1&n&&g(e,"alt",t[0]),2&n&&g(e,"sizes",t[1]),4&n&&g(e,"srcset",t[2])},i:t,o:t,d(t){t&&p(e)}}}function nt(t,n,e){let o,r,{alt:c}=n,{data:s}=n;return t.$set=t=>{"alt"in t&&e(0,c=t.alt),"data"in t&&e(3,s=t.data)},t.$$.update=()=>{8&t.$$.dirty&&e(1,o=Object.keys(s).sort((t,n)=>Number.parseInt(t.split("x")[0],10)<Number.parseInt(n.split("x")[0],10)).map(t=>{const[n,e]=t.split("x").map(t=>Number.parseInt(t,10));return`(min-width: ${n}px) and (min-height: ${e}px) ${n}px`}).join(", ")+", 600px"),8&t.$$.dirty&&e(2,r=Object.entries(s).map(([t,n])=>{const[e]=t.split("x");return`${n} ${e}w`}).join(", "))},[c,o,r,s]}class et extends Y{constructor(t){super(),X(this,t,nt,tt,s,{alt:0,data:3})}}const{window:ot}=K;function rt(t){let n,e,o,r={ctx:t,current:null,token:null,pending:it,then:st,catch:ct,value:5,blocks:[,,,]};return J(e=t[1],r),{c(){n=m(),r.block.c()},m(t,e){f(t,n,e),r.block.m(t,r.anchor=e),r.mount=()=>n.parentNode,r.anchor=n,o=!0},p(n,e){{const o=(t=n).slice();o[5]=r.resolved,r.block.p(o,e)}},i(t){o||(B(r.block),o=!0)},o(t){for(let t=0;t<3;t+=1){T(r.blocks[t])}o=!1},d(t){t&&p(n),r.block.d(t),r.token=null,r=null}}}function ct(n){return{c:t,m:t,p:t,i:t,o:t,d:t}}function st(t){let n,e,o,r;const c=new et({props:{alt:t[0],data:t[5][t[0]]}});return{c(){var t;n=h("div"),e=h("div"),(t=c.$$.fragment)&&t.c(),g(e,"class","current svelte-1ymsfo"),g(n,"class","svelte-1ymsfo")},m(t,o){f(t,n,o),function(t,n){t.appendChild(n)}(n,e),Q(c,e,null),r=!0},p(t,n){const e={};1&n&&(e.alt=t[0]),1&n&&(e.data=t[5][t[0]]),c.$set(e)},i(t){r||(B(c.$$.fragment,t),L(()=>{o||(o=H(n,Z,{},!0)),o.run(1)}),r=!0)},o(t){T(c.$$.fragment,t),o||(o=H(n,Z,{},!1)),o.run(0),r=!1},d(t){t&&p(n),V(c),t&&o&&o.end()}}}function it(n){return{c:t,m:t,p:t,i:t,o:t,d:t}}function lt(t){let n,e,o,c=t[0]&&rt(t);return{c(){c&&c.c(),n=m()},m(s,i,l){c&&c.m(s,i),f(s,n,i),e=!0,l&&r(o),o=[$(ot,"hashchange",t[2]),$(ot,"keydown",ut)]},p(t,[e]){t[0]?c?(c.p(t,e),B(c,1)):(c=rt(t),c.c(),B(c,1),c.m(n.parentNode,n)):c&&(F(),T(c,1,1,()=>{c=null}),M())},i(t){e||(B(c),e=!0)},o(t){T(c),e=!1},d(t){c&&c.d(t),t&&p(n),r(o)}}}function ut(t){"Escape"==t.key&&(window.location.hash="")}function at(t,n,e){let{dataURL:o}=n,r=fetch(o).then(t=>t.json()),c=window.location.hash;return t.$set=t=>{"dataURL"in t&&e(3,o=t.dataURL)},[c,r,function(t){e(0,c=window.location.hash)},o]}return new class extends Y{constructor(t){super(),X(this,t,at,lt,s,{dataURL:3})}}({target:document.body,props:{dataURL:document.querySelector("script[data-photo-viewer]").getAttribute("data-photo-viewer")},intro:!0})}();
//# sourceMappingURL=bundle.js.map
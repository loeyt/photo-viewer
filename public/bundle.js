var app=function(){"use strict";function t(){}const n=t=>t;function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}const i="undefined"!=typeof window;let a=i?()=>window.performance.now():()=>Date.now(),l=i?t=>requestAnimationFrame(t):t;const u=new Set;function d(t){u.forEach(n=>{n.c(t)||(u.delete(n),n.f())}),0!==u.size&&l(d)}function f(t,n,e){t.insertBefore(n,e||null)}function h(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function m(){return t="",document.createTextNode(t);var t}function $(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function b(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}const g=new Set;let y,w=0;function v(t,n,e,o,r,c,s,i=0){const a=16.666/o;let l="{\n";for(let t=0;t<=1;t+=a){const o=n+(e-n)*c(t);l+=100*t+`%{${s(o,1-o)}}\n`}const u=l+`100% {${s(e,1-e)}}\n}`,d=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(u)}_${i}`,f=t.ownerDocument;g.add(f);const h=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(p("style")).sheet),m=f.__svelte_rules||(f.__svelte_rules={});m[d]||(m[d]=!0,h.insertRule(`@keyframes ${d} ${u}`,h.cssRules.length));const $=t.style.animation||"";return t.style.animation=`${$?`${$}, `:""}${d} ${o}ms linear ${r}ms 1 both`,w+=1,d}function _(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),r=e.length-o.length;r&&(t.style.animation=o.join(", "),w-=r,w||l(()=>{w||(g.forEach(t=>{const n=t.__svelte_stylesheet;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.__svelte_rules={}}),g.clear())}))}function k(t){y=t}function x(){if(!y)throw new Error("Function called outside component initialization");return y}const E=[],R=[],S=[],L=[],j=Promise.resolve();let A=!1;function z(t){S.push(t)}let C=!1;const N=new Set;function O(){if(!C){C=!0;do{for(let t=0;t<E.length;t+=1){const n=E[t];k(n),q(n.$$)}for(E.length=0;R.length;)R.pop()();for(let t=0;t<S.length;t+=1){const n=S[t];N.has(n)||(N.add(n),n())}S.length=0}while(E.length);for(;L.length;)L.pop()();A=!1,C=!1,N.clear()}}function q(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(z)}}let U;function D(t,n,e){t.dispatchEvent(function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(`${n?"intro":"outro"}${e}`))}const P=new Set;let F;function I(){F={r:0,c:[],p:F}}function M(){F.r||r(F.c),F=F.p}function B(t,n){t&&t.i&&(P.delete(t),t.i(n))}function T(t,n,e,o){if(t&&t.o){if(P.has(t))return;P.add(t),F.c.push(()=>{P.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}const V={duration:0};function G(e,o,s,i){let f=o(e,s),h=i?0:1,p=null,m=null,$=null;function b(){$&&_(e,$)}function g(t,n){const e=t.b-h;return n*=Math.abs(e),{a:h,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function y(o){const{delay:c=0,duration:s=300,easing:i=n,tick:y=t,css:w}=f||V,_={start:a()+c,b:o};o||(_.group=F,F.r+=1),p?m=_:(w&&(b(),$=v(e,h,o,s,c,i,w)),o&&y(0,1),p=g(_,s),z(()=>D(e,o,"start")),function(t){let n;0===u.size&&l(d),new Promise(e=>{u.add(n={c:t,f:e})})}(t=>{if(m&&t>m.start&&(p=g(m,s),m=null,D(e,p.b,"start"),w&&(b(),$=v(e,h,p.b,p.duration,0,i,f.css))),p)if(t>=p.end)y(h=p.b,1-h),D(e,p.b,"end"),m||(p.b?b():--p.group.r||r(p.group.c)),p=null;else if(t>=p.start){const n=t-p.start;h=p.a+p.d*i(n/p.duration),y(h,1-h)}return!(!p&&!m)}))}return{run(t){c(f)?(U||(U=Promise.resolve(),U.then(()=>{U=null})),U).then(()=>{f=f(),y(t)}):y(t)},end(){b(),p=m=null}}}function H(t,n){const e=n.token={};function o(t,o,r,c){if(n.token!==e)return;n.resolved=c;let s=n.ctx;void 0!==r&&(s=s.slice(),s[r]=c);const i=t&&(n.current=t)(s);let a=!1;n.block&&(n.blocks?n.blocks.forEach((t,e)=>{e!==o&&t&&(I(),T(t,1,1,()=>{n.blocks[e]=null}),M())}):n.block.d(1),i.c(),B(i,1),i.m(n.mount(),n.anchor),a=!0),n.block=i,n.blocks&&(n.blocks[o]=i),a&&O()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const e=x();if(t.then(t=>{k(e),o(n.then,1,n.value,t),k(null)},t=>{k(e),o(n.catch,2,n.error,t),k(null)}),n.current!==n.pending)return o(n.pending,0),!0}else{if(n.current!==n.then)return o(n.then,1,n.value,t),!0;n.resolved=t}var r}const J="undefined"!=typeof window?window:global;function K(t,n,o){const{fragment:s,on_mount:i,on_destroy:a,after_update:l}=t.$$;s&&s.m(n,o),z(()=>{const n=i.map(e).filter(c);a?a.push(...n):r(n),t.$$.on_mount=[]}),l.forEach(z)}function Q(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function W(t,n){-1===t.$$.dirty[0]&&(E.push(t),A||(A=!0,j.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function X(n,e,c,s,i,a,l=[-1]){const u=y;k(n);const d=e.props||{},f=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:l};let p=!1;if(f.ctx=c?c(n,d,(t,e,...o)=>{const r=o.length?o[0]:e;return f.ctx&&i(f.ctx[t],f.ctx[t]=r)&&(f.bound[t]&&f.bound[t](r),p&&W(n,t)),e}):[],f.update(),p=!0,r(f.before_update),f.fragment=!!s&&s(f.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);f.fragment&&f.fragment.l(t),t.forEach(h)}else f.fragment&&f.fragment.c();e.intro&&B(n.$$.fragment),K(n,e.target,e.anchor),O()}k(u)}class Y{$destroy(){Q(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}function Z(t,{delay:e=0,duration:o=400,easing:r=n}){const c=+getComputedStyle(t).opacity;return{delay:e,duration:o,easing:r,css:t=>`opacity: ${t*c}`}}function tt(n){let e;return{c(){e=p("img"),b(e,"alt",n[0]),b(e,"sizes",n[1]),b(e,"srcset",n[2]),b(e,"class","svelte-ozc50d")},m(t,n){f(t,e,n)},p(t,[n]){1&n&&b(e,"alt",t[0]),2&n&&b(e,"sizes",t[1]),4&n&&b(e,"srcset",t[2])},i:t,o:t,d(t){t&&h(e)}}}function nt(t,n,e){let o,r,{alt:c}=n,{data:s}=n;return t.$set=t=>{"alt"in t&&e(0,c=t.alt),"data"in t&&e(3,s=t.data)},t.$$.update=()=>{8&t.$$.dirty&&e(1,o=Object.keys(s).map(t=>t.split("x").map(t=>Number.parseInt(t,10))).sort((t,n)=>t[0]<n[0]).map((t,n,e)=>{const[o,r]=t;return n==e.length-1?`${o}px`:`(min-width: ${o}px) and (min-height: ${r}px) ${o}px`}).join(", ")),8&t.$$.dirty&&e(2,r=Object.entries(s).map(([t,n])=>{const[e]=t.split("x");return`${n} ${e}w`}).join(", "))},[c,o,r,s]}class et extends Y{constructor(t){super(),X(this,t,nt,tt,s,{alt:0,data:3})}}const{window:ot}=J;function rt(t){let n,e,o,r={ctx:t,current:null,token:null,pending:it,then:st,catch:ct,value:9,blocks:[,,,]};return H(e=t[2],r),{c(){n=m(),r.block.c()},m(t,e){f(t,n,e),r.block.m(t,r.anchor=e),r.mount=()=>n.parentNode,r.anchor=n,o=!0},p(n,e){{const o=(t=n).slice();o[9]=r.resolved,r.block.p(o,e)}},i(t){o||(B(r.block),o=!0)},o(t){for(let t=0;t<3;t+=1){T(r.blocks[t])}o=!1},d(t){t&&h(n),r.block.d(t),r.token=null,r=null}}}function ct(n){return{c:t,m:t,p:t,i:t,o:t,d:t}}function st(t){let n,e,o,r;const c=new et({props:{alt:t[0],data:t[9][t[0]]}});return{c(){var t;n=p("div"),(t=c.$$.fragment)&&t.c(),b(n,"class","svelte-1i0t6w3")},m(e,s,i){f(e,n,s),K(c,n,null),t[8](n),o=!0,i&&r(),r=$(n,"click",t[4])},p(t,n){const e={};1&n&&(e.alt=t[0]),1&n&&(e.data=t[9][t[0]]),c.$set(e)},i(t){o||(B(c.$$.fragment,t),z(()=>{e||(e=G(n,Z,{},!0)),e.run(1)}),o=!0)},o(t){T(c.$$.fragment,t),e||(e=G(n,Z,{},!1)),e.run(0),o=!1},d(o){o&&h(n),Q(c),t[8](null),o&&e&&e.end(),r()}}}function it(n){return{c:t,m:t,p:t,i:t,o:t,d:t}}function at(t){let n,e,o,c=t[0]&&rt(t);return{c(){c&&c.c(),n=m()},m(s,i,a){c&&c.m(s,i),f(s,n,i),e=!0,a&&r(o),o=[$(ot,"load",t[5]),$(ot,"hashchange",t[5]),$(ot,"keydown",t[3])]},p(t,[e]){t[0]?c?(c.p(t,e),B(c,1)):(c=rt(t),c.c(),B(c,1),c.m(n.parentNode,n)):c&&(I(),T(c,1,1,()=>{c=null}),M())},i(t){e||(B(c),e=!0)},o(t){T(c),e=!1},d(t){c&&c.d(t),t&&h(n),r(o)}}}function lt(t,n,e){let o,r,{dataURL:c}=n,s=(async t=>{const n=await fetch(t),e=await n.json();for(const t of document.links){const n=t.getAttribute("href");n in e&&t.addEventListener("click",e=>{e.preventDefault(),window.location.hash?history.replaceState({back:!0},"",n):history.pushState({back:!0},"",n),t.blur(),a()})}return e})(c);function i(){if(window.location.hash){let t=window.location.hash;history.state&&history.state.back?history.back():(history.replaceState({back:!0},"",window.location.pathname),a());let n=document.querySelector(`a[href="${t}"]`);n&&n.focus()}}function a(){if(e(0,o=window.location.hash),window.location.hash){document.body.classList.add("photo-viewer");let t=document.querySelector(`a[href="${window.location.hash}"]`);t&&t.scrollIntoView({behavior:"smooth",block:"nearest"})}else document.body.classList.remove("photo-viewer")}return t.$set=t=>{"dataURL"in t&&e(6,c=t.dataURL)},[o,r,s,function(t){"Escape"==t.key&&i()},function(t){t.target===r&&i()},a,c,i,function(t){R[t?"unshift":"push"](()=>{e(1,r=t)})}]}history.scrollRestoration&&(history.scrollRestoration="manual");return new class extends Y{constructor(t){super(),X(this,t,lt,at,s,{dataURL:6})}}({target:document.body,props:{dataURL:document.querySelector("script[data-photo-viewer]").getAttribute("data-photo-viewer")},intro:!0})}();
//# sourceMappingURL=bundle.js.map

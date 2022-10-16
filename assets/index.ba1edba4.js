(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function l(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=l(s);fetch(s.href,r)}})();function v(){}function pe(e){return e()}function oe(){return Object.create(null)}function I(e){e.forEach(pe)}function me(e){return typeof e=="function"}function K(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let F;function Q(e,t){return F||(F=document.createElement("a")),F.href=t,e===F.href}function ye(e){return Object.keys(e).length===0}function c(e,t){e.appendChild(t)}function w(e,t,l){e.insertBefore(t,l||null)}function x(e){e.parentNode.removeChild(e)}function ge(e,t){for(let l=0;l<e.length;l+=1)e[l]&&e[l].d(t)}function h(e){return document.createElement(e)}function W(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function H(e){return document.createTextNode(e)}function _(){return H(" ")}function be(){return H("")}function i(e,t,l){l==null?e.removeAttribute(t):e.getAttribute(t)!==l&&e.setAttribute(t,l)}function $e(e){return Array.from(e.childNodes)}function y(e,t,l,n){l===null?e.style.removeProperty(t):e.style.setProperty(t,l,n?"important":"")}let U;function E(e){U=e}const A=[],re=[],O=[],ie=[],xe=Promise.resolve();let Z=!1;function we(){Z||(Z=!0,xe.then(_e))}function R(e){O.push(e)}const q=new Set;let T=0;function _e(){const e=U;do{for(;T<A.length;){const t=A[T];T++,E(t),Ce(t.$$)}for(E(null),A.length=0,T=0;re.length;)re.pop()();for(let t=0;t<O.length;t+=1){const l=O[t];q.has(l)||(q.add(l),l())}O.length=0}while(A.length);for(;ie.length;)ie.pop()();Z=!1,q.clear(),E(e)}function Ce(e){if(e.fragment!==null){e.update(),I(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(R)}}const S=new Set;let je;function D(e,t){e&&e.i&&(S.delete(e),e.i(t))}function ae(e,t,l,n){if(e&&e.o){if(S.has(e))return;S.add(e),je.c.push(()=>{S.delete(e),n&&(l&&e.d(1),n())}),e.o(t)}else n&&n()}function ce(e){e&&e.c()}function G(e,t,l,n){const{fragment:s,after_update:r}=e.$$;s&&s.m(t,l),n||R(()=>{const o=e.$$.on_mount.map(pe).filter(me);e.$$.on_destroy?e.$$.on_destroy.push(...o):I(o),e.$$.on_mount=[]}),r.forEach(R)}function J(e,t){const l=e.$$;l.fragment!==null&&(I(l.on_destroy),l.fragment&&l.fragment.d(t),l.on_destroy=l.fragment=null,l.ctx=[])}function ze(e,t){e.$$.dirty[0]===-1&&(A.push(e),we(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function X(e,t,l,n,s,r,o,p=[-1]){const u=U;E(e);const a=e.$$={fragment:null,ctx:[],props:r,update:v,not_equal:s,bound:oe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:oe(),dirty:p,skip_bound:!1,root:t.target||u.$$.root};o&&o(a.root);let f=!1;if(a.ctx=l?l(e,t.props||{},(m,d,...b)=>{const g=b.length?b[0]:d;return a.ctx&&s(a.ctx[m],a.ctx[m]=g)&&(!a.skip_bound&&a.bound[m]&&a.bound[m](g),f&&ze(e,m)),d}):[],a.update(),f=!0,I(a.before_update),a.fragment=n?n(a.ctx):!1,t.target){if(t.hydrate){const m=$e(t.target);a.fragment&&a.fragment.l(m),m.forEach(x)}else a.fragment&&a.fragment.c();t.intro&&D(e.$$.fragment),G(e,t.target,t.anchor,t.customElement),_e()}E(u)}class Y{$destroy(){J(this,1),this.$destroy=v}$on(t,l){if(!me(l))return v;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(l),()=>{const s=n.indexOf(l);s!==-1&&n.splice(s,1)}}$set(t){this.$$set&&!ye(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ke="/Portfolio/assets/linkedin.1bdc8843.svg",Le="/Portfolio/assets/email.d2aca9b2.svg",Ne="/Portfolio/assets/github.2ba8b15c.svg",Ae="/Portfolio/assets/instagram.251a46dd.svg";function fe(e,t,l){const n=e.slice();return n[1]=t[l],n}function ue(e){let t,l,n,s,r;return{c(){t=h("span"),l=h("a"),n=h("img"),r=_(),Q(n.src,s=e[1].icon)||i(n,"src",s),i(n,"class","img svelte-i5oey9"),i(n,"alt",e[1].name),i(l,"class","icon svelte-i5oey9"),i(l,"href",e[1].link),i(t,"class","svelte-i5oey9")},m(o,p){w(o,t,p),c(t,l),c(l,n),c(t,r)},p:v,d(o){o&&x(t)}}}function He(e){let t,l,n,s,r,o,p,u=e[0],a=[];for(let f=0;f<u.length;f+=1)a[f]=ue(fe(e,u,f));return{c(){t=h("div"),l=h("img"),s=_(),r=h("div");for(let f=0;f<a.length;f+=1)a[f].c();o=_(),p=h("div"),p.innerHTML=`<h1 class="svelte-i5oey9">Hi, I&#39;m Filipe Moreira</h1> 
  <div class="text svelte-i5oey9"><p class="svelte-i5oey9">I&#39;m currently a last-year highschool student who&#39;s trying to learn web
      development</p> 
    <p class="svelte-i5oey9">Tecnologies I&#39;m able to use: <br/> 
      <code class="svelte-i5oey9">React <br/> Svelte <br/> Javascript</code></p></div>`,i(l,"class","profilePic svelte-i5oey9"),Q(l.src,n="https://avatars.githubusercontent.com/u/60034638?v=4")||i(l,"src",n),i(l,"alt",""),i(r,"class","icons svelte-i5oey9"),i(t,"class","about svelte-i5oey9"),i(p,"class","article svelte-i5oey9")},m(f,m){w(f,t,m),c(t,l),c(t,s),c(t,r);for(let d=0;d<a.length;d+=1)a[d].m(r,null);w(f,o,m),w(f,p,m)},p(f,[m]){if(m&1){u=f[0];let d;for(d=0;d<u.length;d+=1){const b=fe(f,u,d);a[d]?a[d].p(b,m):(a[d]=ue(b),a[d].c(),a[d].m(r,null))}for(;d<a.length;d+=1)a[d].d(1);a.length=u.length}},i:v,o:v,d(f){f&&x(t),ge(a,f),f&&x(o),f&&x(p)}}}function Ee(e){return[[{link:"https://github.com/Filipe-m",icon:Ne,name:"Github"},{link:"mailto:liebeoxygen@gmail.com",icon:Le,name:"Email"},{link:"https://www.linkedin.com/in/filipe-moreira-c",icon:ke,name:"Linkedin"},{link:"https://www.instagram.com/filipe.m_/",icon:Ae,name:"Instragram"}]]}class Ve extends Y{constructor(t){super(),X(this,t,Ee,He,K,{})}}function he(e,t,l){const n=e.slice();return n[1]=t[l],n}function de(e){let t,l,n,s,r,o=e[1].name+"",p,u,a,f,m,d=`0px 0px 33px 10px ${e[1].nextColor}`,b,g,z,C,ee,k,te,L,le,j,N,ne,V,$,M,P,se;return{c(){t=h("section"),l=h("div"),l.innerHTML='<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="svelte-1sfzyjx"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path><path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path><path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path></svg>',n=_(),s=h("div"),r=h("h2"),p=H(o),u=_(),a=h("div"),f=h("img"),b=_(),g=h("div"),z=h("a"),C=h("p"),ee=H("Visit the site "),k=h("span"),k.textContent="\u2197",te=_(),L=h("p"),L.textContent="Or",le=_(),j=h("a"),N=h("p"),ne=H("See the project repositorie "),V=h("span"),$=W("svg"),M=W("path"),P=W("path"),se=_(),i(l,"class","custom-shape-divider-top-1665881071 svelte-1sfzyjx"),y(l,"fill",e[1].lastColor),i(r,"class","svelte-1sfzyjx"),y(r,"color",e[1].nextColor),i(s,"class","text svelte-1sfzyjx"),Q(f.src,m=e[1].image)||i(f,"src",m),i(f,"alt",e[1].name),i(f,"class","img svelte-1sfzyjx"),y(f,"box-shadow",d),i(k,"class","svelte-1sfzyjx"),y(k,"color",e[1].lastColor),i(C,"class","svelte-1sfzyjx"),y(C,"color",e[1].nextColor),i(z,"href",e[1].link),i(z,"class","svelte-1sfzyjx"),i(L,"class","or svelte-1sfzyjx"),y(L,"color",e[1].nextColor),i(M,"fill","none"),i(M,"d","M0 0h24v24H0z"),i(P,"d","M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-7zm0-2h6v-3H6.5a1.5 1.5 0 0 0 0 3H7v-2h6v2zm6-5V4H6v10.035A3.53 3.53 0 0 1 6.5 14H19zM7 5h2v2H7V5zm0 3h2v2H7V8zm0 3h2v2H7v-2z"),i(P,"fill",e[1].lastColor),i($,"xmlns","http://www.w3.org/2000/svg"),i($,"viewBox","0 0 24 24"),i($,"width","24"),i($,"height","24"),i(V,"class","svelte-1sfzyjx"),i(N,"class","svelte-1sfzyjx"),i(j,"href",e[1].repositorie),i(j,"class","svelte-1sfzyjx"),y(j,"color",e[1].nextColor),i(g,"class","textWrapper svelte-1sfzyjx"),y(g,"fill",e[1].lastColor),i(a,"class","images svelte-1sfzyjx"),i(t,"class","svelte-1sfzyjx"),y(t,"background-color",e[1].color)},m(B,ve){w(B,t,ve),c(t,l),c(t,n),c(t,s),c(s,r),c(r,p),c(t,u),c(t,a),c(a,f),c(a,b),c(a,g),c(g,z),c(z,C),c(C,ee),c(C,k),c(g,te),c(g,L),c(g,le),c(g,j),c(j,N),c(N,ne),c(N,V),c(V,$),c($,M),c($,P),c(t,se)},p:v,d(B){B&&x(t)}}}function Me(e){let t,l=e[0],n=[];for(let s=0;s<l.length;s+=1)n[s]=de(he(e,l,s));return{c(){for(let s=0;s<n.length;s+=1)n[s].c();t=be()},m(s,r){for(let o=0;o<n.length;o+=1)n[o].m(s,r);w(s,t,r)},p(s,[r]){if(r&1){l=s[0];let o;for(o=0;o<l.length;o+=1){const p=he(s,l,o);n[o]?n[o].p(p,r):(n[o]=de(p),n[o].c(),n[o].m(t.parentNode,t))}for(;o<n.length;o+=1)n[o].d(1);n.length=l.length}},i:v,o:v,d(s){ge(n,s),s&&x(t)}}}function Pe(e){return[[{name:"Cracha NLW ",color:"rgb(12, 109, 119)",lastColor:"#dadde2",nextColor:"rgb(40, 37, 37)",image:"/src/assets/NLW HEAT.png",link:"https://filipe-m.github.io/Cracha_NLW/",repositorie:"https://github.com/Filipe-m/Cracha_NLW"},{name:"Caesar cipher",color:"rgb(40, 37, 37)",lastColor:"rgb(12, 109, 119)",nextColor:"#F5A623",image:"/src/assets/Caesar.png",link:"https://filipe-m.github.io/Caesar-cipher/",repositorie:"https://github.com/Filipe-m/Caesar-cipher"},{name:"Calculator",color:"#f5a623",lastColor:"rgb(40, 37, 37)",nextColor:"#D0021B",image:"/src/assets/Calculator.png",link:"https://filipe-m.github.io/Calculator/",repositorie:"https://github.com/Filipe-m/Calculator"},{name:"New Tab",color:"#c25450",lastColor:"#F5A623",nextColor:"#dadde2",image:"/src/assets/New Tab.png",link:"https://filipe-m.github.io/NewTab/",repositorie:"https://github.com/Filipe-m/NewTab"}]]}class Fe extends Y{constructor(t){super(),X(this,t,Pe,Me,K,{})}}function Te(e){let t,l,n,s,r,o,p;return n=new Ve({}),o=new Fe({}),{c(){t=h("main"),l=h("header"),ce(n.$$.fragment),s=_(),r=h("article"),ce(o.$$.fragment),i(l,"class","svelte-man2y6"),i(r,"class","svelte-man2y6"),i(t,"class","svelte-man2y6")},m(u,a){w(u,t,a),c(t,l),G(n,l,null),c(t,s),c(t,r),G(o,r,null),p=!0},p:v,i(u){p||(D(n.$$.fragment,u),D(o.$$.fragment,u),p=!0)},o(u){ae(n.$$.fragment,u),ae(o.$$.fragment,u),p=!1},d(u){u&&x(t),J(n),J(o)}}}class Oe extends Y{constructor(t){super(),X(this,t,null,Te,K,{})}}new Oe({target:document.getElementById("app")});

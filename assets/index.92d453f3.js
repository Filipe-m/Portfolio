(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function l(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=l(s);fetch(s.href,o)}})();function v(){}function ze(e){return e()}function ve(){return Object.create(null)}function K(e){e.forEach(ze)}function ke(e){return typeof e=="function"}function U(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let q;function D(e,t){return q||(q=document.createElement("a")),q.href=t,e===q.href}function Pe(e){return Object.keys(e).length===0}function n(e,t){e.appendChild(t)}function C(e,t,l){e.insertBefore(t,l||null)}function b(e){e.parentNode.removeChild(e)}function xe(e,t){for(let l=0;l<e.length;l+=1)e[l]&&e[l].d(t)}function f(e){return document.createElement(e)}function ee(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function k(e){return document.createTextNode(e)}function d(){return k(" ")}function Ve(){return k("")}function a(e,t,l){l==null?e.removeAttribute(t):e.getAttribute(t)!==l&&e.setAttribute(t,l)}function He(e){return Array.from(e.childNodes)}function w(e,t,l,r){l===null?e.style.removeProperty(t):e.style.setProperty(t,l,r?"important":"")}let oe;function S(e){oe=e}const I=[],_e=[],W=[],we=[],Me=Promise.resolve();let ae=!1;function Ee(){ae||(ae=!0,Me.then(Le))}function ne(e){W.push(e)}const te=new Set;let B=0;function Le(){const e=oe;do{for(;B<I.length;){const t=I[B];B++,S(t),Ie(t.$$)}for(S(null),I.length=0,B=0;_e.length;)_e.pop()();for(let t=0;t<W.length;t+=1){const l=W[t];te.has(l)||(te.add(l),l())}W.length=0}while(I.length);for(;we.length;)we.pop()();ae=!1,te.clear(),S(e)}function Ie(e){if(e.fragment!==null){e.update(),K(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ne)}}const Z=new Set;let Se;function J(e,t){e&&e.i&&(Z.delete(e),e.i(t))}function le(e,t,l,r){if(e&&e.o){if(Z.has(e))return;Z.add(e),Se.c.push(()=>{Z.delete(e),r&&(l&&e.d(1),r())}),e.o(t)}else r&&r()}function se(e){e&&e.c()}function G(e,t,l,r){const{fragment:s,after_update:o}=e.$$;s&&s.m(t,l),r||ne(()=>{const i=e.$$.on_mount.map(ze).filter(ke);e.$$.on_destroy?e.$$.on_destroy.push(...i):K(i),e.$$.on_mount=[]}),o.forEach(ne)}function R(e,t){const l=e.$$;l.fragment!==null&&(K(l.on_destroy),l.fragment&&l.fragment.d(t),l.on_destroy=l.fragment=null,l.ctx=[])}function Te(e,t){e.$$.dirty[0]===-1&&(I.push(e),Ee(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Y(e,t,l,r,s,o,i,m=[-1]){const h=oe;S(e);const c=e.$$={fragment:null,ctx:[],props:o,update:v,not_equal:s,bound:ve(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:ve(),dirty:m,skip_bound:!1,root:t.target||h.$$.root};i&&i(c.root);let u=!1;if(c.ctx=l?l(e,t.props||{},(p,g,..._)=>{const P=_.length?_[0]:g;return c.ctx&&s(c.ctx[p],c.ctx[p]=P)&&(!c.skip_bound&&c.bound[p]&&c.bound[p](P),u&&Te(e,p)),g}):[],c.update(),u=!0,K(c.before_update),c.fragment=r?r(c.ctx):!1,t.target){if(t.hydrate){const p=He(t.target);c.fragment&&c.fragment.l(p),p.forEach(b)}else c.fragment&&c.fragment.c();t.intro&&J(e.$$.fragment),G(e,t.target,t.anchor,t.customElement),Le()}S(h)}class Q{$destroy(){R(this,1),this.$destroy=v}$on(t,l){if(!ke(l))return v;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(l),()=>{const s=r.indexOf(l);s!==-1&&r.splice(s,1)}}$set(t){this.$$set&&!Pe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Fe="/Portfolio/assets/linkedin.1bdc8843.svg",je="/Portfolio/assets/email.d2aca9b2.svg",Oe="/Portfolio/assets/github.2ba8b15c.svg",qe="/Portfolio/assets/instagram.251a46dd.svg";function ye(e,t,l){const r=e.slice();return r[1]=t[l],r}function be(e){let t,l,r,s,o;return{c(){t=f("span"),l=f("a"),r=f("img"),o=d(),D(r.src,s=e[1].icon)||a(r,"src",s),a(r,"class","img svelte-16p0g1a"),a(r,"alt",e[1].name),a(l,"class","icon svelte-16p0g1a"),a(l,"href",e[1].link),a(t,"class","svelte-16p0g1a")},m(i,m){C(i,t,m),n(t,l),n(l,r),n(t,o)},p:v,d(i){i&&b(t)}}}function Be(e){let t,l,r,s,o,i,m,h=e[0],c=[];for(let u=0;u<h.length;u+=1)c[u]=be(ye(e,h,u));return{c(){t=f("div"),l=f("img"),s=d(),o=f("div");for(let u=0;u<c.length;u+=1)c[u].c();i=d(),m=f("div"),m.innerHTML=`<h1 class="svelte-16p0g1a">Hi, I&#39;m Filipe Moreira</h1> 
  <div class="text svelte-16p0g1a"><p class="svelte-16p0g1a">I&#39;m currently a last-year highschool student who&#39;s trying to learn web
      development.</p> 
    <p class="svelte-16p0g1a">Tecnologies I&#39;m able to use: <br/> 
      <code class="svelte-16p0g1a">React <br/> Svelte<br/> Javascript</code></p></div>`,a(l,"class","profilePic svelte-16p0g1a"),D(l.src,r="https://avatars.githubusercontent.com/u/60034638?v=4")||a(l,"src",r),a(l,"alt",""),a(o,"class","icons svelte-16p0g1a"),a(t,"class","about svelte-16p0g1a"),a(m,"class","article svelte-16p0g1a")},m(u,p){C(u,t,p),n(t,l),n(t,s),n(t,o);for(let g=0;g<c.length;g+=1)c[g].m(o,null);C(u,i,p),C(u,m,p)},p(u,[p]){if(p&1){h=u[0];let g;for(g=0;g<h.length;g+=1){const _=ye(u,h,g);c[g]?c[g].p(_,p):(c[g]=be(_),c[g].c(),c[g].m(o,null))}for(;g<c.length;g+=1)c[g].d(1);c.length=h.length}},i:v,o:v,d(u){u&&b(t),xe(c,u),u&&b(i),u&&b(m)}}}function We(e){return[[{link:"https://github.com/Filipe-m",icon:Oe,name:"Github"},{link:"mailto:liebeoxygen@gmail.com",icon:je,name:"Email"},{link:"https://www.linkedin.com/in/filipe-moreira-c",icon:Fe,name:"Linkedin"},{link:"https://www.instagram.com/filipe.m_/",icon:qe,name:"Instragram"}]]}class Ze extends Q{constructor(t){super(),Y(this,t,We,Be,U,{})}}const Je="/Portfolio/assets/NLW HEAT.416d189e.png",Ge="/Portfolio/assets/Caesar.7f4a82bf.png",Re="/Portfolio/assets/Calculator.f685a959.png",De="/Portfolio/assets/New Tab.f31e7395.png";function $e(e,t,l){const r=e.slice();return r[1]=t[l],r}function Ce(e){let t,l,r,s,o,i=e[1].name+"",m,h,c,u=e[1].text+"",p,g,_,P,T,x,ie,ce,L,z,fe,Ne=`0px 0px 33px 10px ${e[1].nextColor}`,ue,y,V,N,pe,H,ge,M,he,A,E,me,F,$,j,O,de;return{c(){t=f("section"),l=f("div"),l.innerHTML='<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="svelte-1wyrrv6"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path><path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path><path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path></svg>',r=d(),s=f("div"),o=f("h2"),m=k(i),h=d(),c=f("p"),p=k(u),g=d(),_=f("em"),P=k("Made using: "),T=f("span"),x=f("img"),ce=d(),L=f("div"),z=f("img"),ue=d(),y=f("div"),V=f("a"),N=f("p"),pe=k("Visit the site "),H=f("span"),H.textContent="\u2197",ge=d(),M=f("p"),M.textContent="Or",he=d(),A=f("a"),E=f("p"),me=k("See the project repositorie "),F=f("span"),$=ee("svg"),j=ee("path"),O=ee("path"),de=d(),a(l,"class","custom-shape-divider-top-1665881071 svelte-1wyrrv6"),w(l,"fill",e[1].lastColor),a(o,"class","svelte-1wyrrv6"),w(o,"color",e[1].nextColor),a(c,"class","svelte-1wyrrv6"),w(c,"color",e[1].lastColor),a(x,"class","icon svelte-1wyrrv6"),D(x.src,ie=e[1].language)||a(x,"src",ie),a(x,"alt",""),a(T,"class","svelte-1wyrrv6"),a(_,"class","svelte-1wyrrv6"),w(_,"color",e[1].nextColor),a(s,"class","text svelte-1wyrrv6"),D(z.src,fe=e[1].image)||a(z,"src",fe),a(z,"alt",e[1].name),a(z,"class","img watching hidden svelte-1wyrrv6"),w(z,"box-shadow",Ne),a(H,"class","svelte-1wyrrv6"),w(H,"color",e[1].lastColor),a(N,"class","svelte-1wyrrv6"),w(N,"color",e[1].nextColor),a(V,"href",e[1].link),a(V,"class","svelte-1wyrrv6"),a(M,"class","or svelte-1wyrrv6"),w(M,"color",e[1].nextColor),a(j,"fill","none"),a(j,"d","M0 0h24v24H0z"),a(O,"d","M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-7zm0-2h6v-3H6.5a1.5 1.5 0 0 0 0 3H7v-2h6v2zm6-5V4H6v10.035A3.53 3.53 0 0 1 6.5 14H19zM7 5h2v2H7V5zm0 3h2v2H7V8zm0 3h2v2H7v-2z"),a(O,"fill",e[1].lastColor),a($,"xmlns","http://www.w3.org/2000/svg"),a($,"viewBox","0 0 24 24"),a($,"width","24"),a($,"height","24"),a(F,"class","svelte-1wyrrv6"),a(E,"class","svelte-1wyrrv6"),a(A,"href",e[1].repositorie),a(A,"class","svelte-1wyrrv6"),w(A,"color",e[1].nextColor),a(y,"class","textWrapper svelte-1wyrrv6"),w(y,"fill",e[1].lastColor),a(L,"class","images svelte-1wyrrv6"),a(t,"class","svelte-1wyrrv6"),w(t,"background-color",e[1].color)},m(X,Ae){C(X,t,Ae),n(t,l),n(t,r),n(t,s),n(s,o),n(o,m),n(s,h),n(s,c),n(c,p),n(s,g),n(s,_),n(_,P),n(_,T),n(T,x),n(t,ce),n(t,L),n(L,z),n(L,ue),n(L,y),n(y,V),n(V,N),n(N,pe),n(N,H),n(y,ge),n(y,M),n(y,he),n(y,A),n(A,E),n(E,me),n(E,F),n(F,$),n($,j),n($,O),n(t,de)},p:v,d(X){X&&b(t)}}}function Ke(e){let t,l=e[0],r=[];for(let s=0;s<l.length;s+=1)r[s]=Ce($e(e,l,s));return{c(){for(let s=0;s<r.length;s+=1)r[s].c();t=Ve()},m(s,o){for(let i=0;i<r.length;i+=1)r[i].m(s,o);C(s,t,o)},p(s,[o]){if(o&1){l=s[0];let i;for(i=0;i<l.length;i+=1){const m=$e(s,l,i);r[i]?r[i].p(m,o):(r[i]=Ce(m),r[i].c(),r[i].m(t.parentNode,t))}for(;i<r.length;i+=1)r[i].d(1);r.length=l.length}},i:v,o:v,d(s){xe(r,s),s&&b(t)}}}let Ue="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",re="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg";function Ye(e){return[[{name:"Cracha NLW ",color:"rgb(12, 109, 119)",lastColor:"#dadde2",nextColor:"rgb(40, 37, 37)",image:Je,link:"https://filipe-m.github.io/Cracha_NLW/",repositorie:"https://github.com/Filipe-m/Cracha_NLW",language:re,text:"This banner site was the first website, created in the Origin trail at NLW Heat 2021, it's a static page made for PC"},{name:"Caesar Cipher",color:"rgb(40, 37, 37)",lastColor:"rgb(12, 109, 119)",nextColor:"#F5A623",image:Ge,link:"https://filipe-m.github.io/Caesar-cipher/",repositorie:"https://github.com/Filipe-m/Caesar-cipher",language:re,text:"This was a JS challange to myself to test my knowledge and creat a site that can Incript and Decrypt Caesar Cipher."},{name:"Calculator",color:"#f5a623",lastColor:"rgb(40, 37, 37)",nextColor:"#D0021B",image:Re,link:"https://filipe-m.github.io/Calculator/",repositorie:"https://github.com/Filipe-m/Calculator",language:re,text:"Another JS challange but this time to make a simple but funcional calculator, although it doesn't support different and complex operations it still work perfetcly by it's means."},{name:"New Tab",color:"#c25450",lastColor:"#F5A623",nextColor:"#dadde2",image:De,link:"https://filipe-m.github.io/NewTab/",repositorie:"https://github.com/Filipe-m/NewTab",language:Ue,text:"A project to myself to build a new Start Page to my browser, this time using API's and a clock creating a minimalistic but clear home page that can be simple customizable in it's em."}]]}class Qe extends Q{constructor(t){super(),Y(this,t,Ye,Ke,U,{})}}function Xe(e){let t,l,r,s;return{c(){t=f("section"),l=f("div"),l.innerHTML='<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="svelte-79vzz3"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path><path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path><path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path></svg>',r=d(),s=f("div"),s.innerHTML=`<div class="text svelte-79vzz3"><h1 class="tittle svelte-79vzz3">Like what you&#39;ve see?</h1> 
      <p class="subtittle svelte-79vzz3">You can contact me at:</p></div> 
    <ul class="svelte-79vzz3"><li class="svelte-79vzz3"><a href="https://www.instagram.com/filipe.m_/" rel="noreferrer" target="_blank" class="svelte-79vzz3"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&amp;logo=instagram&amp;logoColor=white" alt="Instagram" target="_blank" class="svelte-79vzz3"/></a></li> 
      <li class="svelte-79vzz3"><a href="mailto:liebeoxygen@gmail.com" rel="noreferrer" class="svelte-79vzz3"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&amp;logo=gmail&amp;logoColor=white" alt="E-mail" target="_blank" class="svelte-79vzz3"/></a></li> 
      <li class="svelte-79vzz3"><a href="https://www.linkedin.com/in/filipe-moreira-c/" rel="noreferrer" target="_blank" class="svelte-79vzz3"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&amp;logo=linkedin&amp;logoColor=white" alt="Linkedin" target="_blank" class="svelte-79vzz3"/></a></li> 
      <li class="svelte-79vzz3"><a href="https://github.com/Filipe-m" rel="noreferrer" target="_blank" class="svelte-79vzz3"><img src="https://img.shields.io/badge/-GitHub-%23333?style=for-the-badge&amp;logo=Github&amp;logoColor=white" alt="Linkedin" target="_blank" class="svelte-79vzz3"/></a></li></ul>`,a(l,"class","custom-shape-divider-top-1665881071 svelte-79vzz3"),w(l,"fill",et),a(s,"class","content svelte-79vzz3"),a(t,"class","svelte-79vzz3")},m(o,i){C(o,t,i),n(t,l),n(t,r),n(t,s)},p:v,i:v,o:v,d(o){o&&b(t)}}}let et="#c25450";class tt extends Q{constructor(t){super(),Y(this,t,null,Xe,U,{})}}function lt(e){let t,l,r,s,o,i,m,h,c,u;return r=new Ze({}),i=new Qe({}),c=new tt({}),{c(){t=f("main"),l=f("header"),se(r.$$.fragment),s=d(),o=f("article"),se(i.$$.fragment),m=d(),h=f("article"),se(c.$$.fragment),a(l,"class","svelte-1lyql4r"),a(o,"class","svelte-1lyql4r"),a(h,"class","svelte-1lyql4r"),a(t,"class","svelte-1lyql4r")},m(p,g){C(p,t,g),n(t,l),G(r,l,null),n(t,s),n(t,o),G(i,o,null),n(t,m),n(t,h),G(c,h,null),u=!0},p:v,i(p){u||(J(r.$$.fragment,p),J(i.$$.fragment,p),J(c.$$.fragment,p),u=!0)},o(p){le(r.$$.fragment,p),le(i.$$.fragment,p),le(c.$$.fragment,p),u=!1},d(p){p&&b(t),R(r),R(i),R(c)}}}class st extends Q{constructor(t){super(),Y(this,t,null,lt,U,{})}}new st({target:document.getElementById("app")});const rt=document.querySelectorAll(".watching"),at=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting?t.target.classList.add("show"):t.target.classList.remove("show")})});rt.forEach(e=>at.observe(e));
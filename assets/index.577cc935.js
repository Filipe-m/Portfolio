(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function l(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=l(s);fetch(s.href,i)}})();function v(){}function ze(e){return e()}function he(){return Object.create(null)}function K(e){e.forEach(ze)}function xe(e){return typeof e=="function"}function U(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let G;function D(e,t){return G||(G=document.createElement("a")),G.href=t,e===G.href}function Me(e){return Object.keys(e).length===0}function n(e,t){e.appendChild(t)}function C(e,t,l){e.insertBefore(t,l||null)}function y(e){e.parentNode.removeChild(e)}function ke(e,t){for(let l=0;l<e.length;l+=1)e[l]&&e[l].d(t)}function f(e){return document.createElement(e)}function ee(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function x(e){return document.createTextNode(e)}function h(){return x(" ")}function Pe(){return x("")}function a(e,t,l){l==null?e.removeAttribute(t):e.getAttribute(t)!==l&&e.setAttribute(t,l)}function Ve(e){return Array.from(e.childNodes)}function b(e,t,l,o){l===null?e.style.removeProperty(t):e.style.setProperty(t,l,o?"important":"")}let ne;function I(e){ne=e}const T=[],ve=[],B=[],_e=[],Ae=Promise.resolve();let oe=!1;function Ee(){oe||(oe=!0,Ae.then(Le))}function ae(e){B.push(e)}const te=new Set;let q=0;function Le(){const e=ne;do{for(;q<T.length;){const t=T[q];q++,I(t),Te(t.$$)}for(I(null),T.length=0,q=0;ve.length;)ve.pop()();for(let t=0;t<B.length;t+=1){const l=B[t];te.has(l)||(te.add(l),l())}B.length=0}while(T.length);for(;_e.length;)_e.pop()();oe=!1,te.clear(),I(e)}function Te(e){if(e.fragment!==null){e.update(),K(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ae)}}const W=new Set;let Ie;function R(e,t){e&&e.i&&(W.delete(e),e.i(t))}function le(e,t,l,o){if(e&&e.o){if(W.has(e))return;W.add(e),Ie.c.push(()=>{W.delete(e),o&&(l&&e.d(1),o())}),e.o(t)}else o&&o()}function se(e){e&&e.c()}function Z(e,t,l,o){const{fragment:s,after_update:i}=e.$$;s&&s.m(t,l),o||ae(()=>{const r=e.$$.on_mount.map(ze).filter(xe);e.$$.on_destroy?e.$$.on_destroy.push(...r):K(r),e.$$.on_mount=[]}),i.forEach(ae)}function J(e,t){const l=e.$$;l.fragment!==null&&(K(l.on_destroy),l.fragment&&l.fragment.d(t),l.on_destroy=l.fragment=null,l.ctx=[])}function Se(e,t){e.$$.dirty[0]===-1&&(T.push(e),Ee(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Y(e,t,l,o,s,i,r,g=[-1]){const p=ne;I(e);const c=e.$$={fragment:null,ctx:[],props:i,update:v,not_equal:s,bound:he(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(p?p.$$.context:[])),callbacks:he(),dirty:g,skip_bound:!1,root:t.target||p.$$.root};r&&r(c.root);let m=!1;if(c.ctx=l?l(e,t.props||{},(u,d,..._)=>{const M=_.length?_[0]:d;return c.ctx&&s(c.ctx[u],c.ctx[u]=M)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](M),m&&Se(e,u)),d}):[],c.update(),m=!0,K(c.before_update),c.fragment=o?o(c.ctx):!1,t.target){if(t.hydrate){const u=Ve(t.target);c.fragment&&c.fragment.l(u),u.forEach(y)}else c.fragment&&c.fragment.c();t.intro&&R(e.$$.fragment),Z(e,t.target,t.anchor,t.customElement),Le()}I(p)}class Q{$destroy(){J(this,1),this.$destroy=v}$on(t,l){if(!xe(l))return v;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(l),()=>{const s=o.indexOf(l);s!==-1&&o.splice(s,1)}}$set(t){this.$$set&&!Me(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const je="/Portfolio/assets/linkedin.6bf47e9e.svg",Fe="/Portfolio/assets/email.9d0982ab.svg",Oe="/Portfolio/assets/github.f6494505.svg",Ge="/Portfolio/assets/instagram.81669c83.svg";function be(e,t,l){const o=e.slice();return o[1]=t[l],o}function we(e){let t,l,o,s,i;return{c(){t=f("span"),l=f("a"),o=f("img"),i=h(),D(o.src,s=e[1].icon)||a(o,"src",s),a(o,"class","img svelte-38oa44"),a(o,"alt",e[1].name),a(l,"class","icon svelte-38oa44"),a(l,"href",e[1].link),a(t,"class","svelte-38oa44")},m(r,g){C(r,t,g),n(t,l),n(l,o),n(t,i)},p:v,d(r){r&&y(t)}}}function qe(e){let t,l,o,s,i,r,g,p=e[0],c=[];for(let m=0;m<p.length;m+=1)c[m]=we(be(e,p,m));return{c(){t=f("div"),l=f("img"),s=h(),i=f("div");for(let m=0;m<c.length;m+=1)c[m].c();r=h(),g=f("div"),g.innerHTML=`<h1 class="svelte-38oa44">Hi, I&#39;m Filipe Moreira</h1> 
  <div class="text svelte-38oa44"><p class="svelte-38oa44">I&#39;m currently a last-year highschool student who&#39;s trying to learn web
      development.</p> 
    <p class="svelte-38oa44">Tecnologies I&#39;m able to use: <br/> 
      <code class="svelte-38oa44">React <br/> Typescript<br/> Node.js <br/> Express.js</code></p></div>`,a(l,"class","profilePic svelte-38oa44"),D(l.src,o="https://avatars.githubusercontent.com/u/60034638?v=4")||a(l,"src",o),a(l,"alt",""),a(i,"class","icons svelte-38oa44"),a(t,"class","about svelte-38oa44"),a(g,"class","article svelte-38oa44")},m(m,u){C(m,t,u),n(t,l),n(t,s),n(t,i);for(let d=0;d<c.length;d+=1)c[d].m(i,null);C(m,r,u),C(m,g,u)},p(m,[u]){if(u&1){p=m[0];let d;for(d=0;d<p.length;d+=1){const _=be(m,p,d);c[d]?c[d].p(_,u):(c[d]=we(_),c[d].c(),c[d].m(i,null))}for(;d<c.length;d+=1)c[d].d(1);c.length=p.length}},i:v,o:v,d(m){m&&y(t),ke(c,m),m&&y(r),m&&y(g)}}}function Be(e){return[[{link:"https://github.com/Filipe-m",icon:Oe,name:"Github"},{link:"mailto:liebeoxygen@gmail.com",icon:Fe,name:"Email"},{link:"https://www.linkedin.com/in/filipe-moreira-c",icon:je,name:"Linkedin"},{link:"https://www.instagram.com/filipe.m_/",icon:Ge,name:"Instragram"}]]}class We extends Q{constructor(t){super(),Y(this,t,Be,qe,U,{})}}const Re="/Portfolio/assets/NLW HEAT.416d189e.png",Ze="/Portfolio/assets/gatomelow.23a3d16b.png",Je="/Portfolio/assets/Calculator.f685a959.png",De="/Portfolio/assets/New Tab.f31e7395.png";function ye(e,t,l){const o=e.slice();return o[1]=t[l],o}function $e(e){let t,l,o,s,i,r=e[1].name+"",g,p,c,m=e[1].text+"",u,d,_,M,S,k,ie,re,L,z,ce,Ne=`0px 0px 33px 10px ${e[1].nextColor}`,fe,w,P,N,me,V,ue,A,de,H,E,pe,j,$,F,O,ge;return{c(){t=f("section"),l=f("div"),l.innerHTML='<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="svelte-140emd0"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path><path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path><path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path></svg>',o=h(),s=f("div"),i=f("h2"),g=x(r),p=h(),c=f("p"),u=x(m),d=h(),_=f("em"),M=x("Made using: "),S=f("span"),k=f("img"),re=h(),L=f("div"),z=f("img"),fe=h(),w=f("div"),P=f("a"),N=f("p"),me=x("Visit the site "),V=f("span"),V.textContent="\u2197",ue=h(),A=f("p"),A.textContent="Or",de=h(),H=f("a"),E=f("p"),pe=x("See the project repositorie "),j=f("span"),$=ee("svg"),F=ee("path"),O=ee("path"),ge=h(),a(l,"class","custom-shape-divider-top-1665881071 svelte-140emd0"),b(l,"fill",e[1].lastColor),a(i,"class","svelte-140emd0"),b(i,"color",e[1].nextColor),a(c,"class","svelte-140emd0"),b(c,"color",e[1].lastColor),a(k,"class","icon svelte-140emd0"),D(k.src,ie=e[1].language)||a(k,"src",ie),a(k,"alt",""),a(S,"class","svelte-140emd0"),a(_,"class","svelte-140emd0"),b(_,"color",e[1].nextColor),a(s,"class","text svelte-140emd0"),D(z.src,ce=e[1].image)||a(z,"src",ce),a(z,"alt",e[1].name),a(z,"class","img watching hidden svelte-140emd0"),b(z,"box-shadow",Ne),a(V,"class","svelte-140emd0"),b(V,"color",e[1].lastColor),a(N,"class","svelte-140emd0"),b(N,"color",e[1].nextColor),a(P,"href",e[1].link),a(P,"class","svelte-140emd0"),a(A,"class","or svelte-140emd0"),b(A,"color",e[1].nextColor),a(F,"fill","none"),a(F,"d","M0 0h24v24H0z"),a(O,"d","M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-7zm0-2h6v-3H6.5a1.5 1.5 0 0 0 0 3H7v-2h6v2zm6-5V4H6v10.035A3.53 3.53 0 0 1 6.5 14H19zM7 5h2v2H7V5zm0 3h2v2H7V8zm0 3h2v2H7v-2z"),a(O,"fill",e[1].lastColor),a($,"xmlns","http://www.w3.org/2000/svg"),a($,"viewBox","0 0 24 24"),a($,"width","24"),a($,"height","24"),a(j,"class","svelte-140emd0"),a(E,"class","svelte-140emd0"),a(H,"href",e[1].repositorie),a(H,"class","svelte-140emd0"),b(H,"color",e[1].nextColor),a(w,"class","textWrapper svelte-140emd0"),b(w,"fill",e[1].lastColor),a(L,"class","images svelte-140emd0"),a(t,"class","svelte-140emd0"),b(t,"background-color",e[1].color)},m(X,He){C(X,t,He),n(t,l),n(t,o),n(t,s),n(s,i),n(i,g),n(s,p),n(s,c),n(c,u),n(s,d),n(s,_),n(_,M),n(_,S),n(S,k),n(t,re),n(t,L),n(L,z),n(L,fe),n(L,w),n(w,P),n(P,N),n(N,me),n(N,V),n(w,ue),n(w,A),n(w,de),n(w,H),n(H,E),n(E,pe),n(E,j),n(j,$),n($,F),n($,O),n(t,ge)},p:v,d(X){X&&y(t)}}}function Ke(e){let t,l=e[0],o=[];for(let s=0;s<l.length;s+=1)o[s]=$e(ye(e,l,s));return{c(){for(let s=0;s<o.length;s+=1)o[s].c();t=Pe()},m(s,i){for(let r=0;r<o.length;r+=1)o[r].m(s,i);C(s,t,i)},p(s,[i]){if(i&1){l=s[0];let r;for(r=0;r<l.length;r+=1){const g=ye(s,l,r);o[r]?o[r].p(g,i):(o[r]=$e(g),o[r].c(),o[r].m(t.parentNode,t))}for(;r<o.length;r+=1)o[r].d(1);o.length=l.length}},i:v,o:v,d(s){ke(o,s),s&&y(t)}}}let Ue="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",Ce="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",Ye="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg";function Qe(e){return[[{name:"Cracha NLW ",color:"rgb(12, 109, 119)",lastColor:"#dadde2",nextColor:"rgb(40, 37, 37)",image:Re,link:"https://filipe-m.github.io/Cracha_NLW/",repositorie:"https://github.com/Filipe-m/Cracha_NLW",language:Ce,text:"This banner site was the first website, created in the Origin trail at NLW Heat 2021, it's a static page made for PC."},{name:"Gatomelow",color:"rgb(40, 37, 37)",lastColor:"rgb(12, 109, 119)",nextColor:"#F5A623",image:Ze,link:"https://filipe-m.github.io/Gatomelow/",repositorie:"https://github.com/Filipe-m/Gatomelow",language:Ye,text:"Gatomelow is a parody of a existing e-comerce website named Caramelow whic uses React and Tailwind and made done responsively"},{name:"Calculator",color:"#f5a623",lastColor:"rgb(40, 37, 37)",nextColor:"#D0021B",image:Je,link:"https://filipe-m.github.io/Calculator/",repositorie:"https://github.com/Filipe-m/Calculator",language:Ce,text:"It's a calculator made only with HTML, CSS and JavaScript. It supports basic operations."},{name:"New Tab",color:"#c25450",lastColor:"#F5A623",nextColor:"#dadde2",image:De,link:"https://filipe-m.github.io/NewTab/",repositorie:"https://github.com/Filipe-m/NewTab",language:Ue,text:"A project to myself to build a new Start Page to my browser, this time using API's and a clock creating a minimalistic but clear home page that can be simple customizable in it's em."}]]}class Xe extends Q{constructor(t){super(),Y(this,t,Qe,Ke,U,{})}}function et(e){let t,l,o,s;return{c(){t=f("section"),l=f("div"),l.innerHTML='<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="svelte-79vzz3"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path><path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path><path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path></svg>',o=h(),s=f("div"),s.innerHTML=`<div class="text svelte-79vzz3"><h1 class="tittle svelte-79vzz3">Like what you&#39;ve see?</h1> 
      <p class="subtittle svelte-79vzz3">You can contact me at:</p></div> 
    <ul class="svelte-79vzz3"><li class="svelte-79vzz3"><a href="https://www.instagram.com/filipe.m_/" rel="noreferrer" target="_blank" class="svelte-79vzz3"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&amp;logo=instagram&amp;logoColor=white" alt="Instagram" target="_blank" class="svelte-79vzz3"/></a></li> 
      <li class="svelte-79vzz3"><a href="mailto:liebeoxygen@gmail.com" rel="noreferrer" class="svelte-79vzz3"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&amp;logo=gmail&amp;logoColor=white" alt="E-mail" target="_blank" class="svelte-79vzz3"/></a></li> 
      <li class="svelte-79vzz3"><a href="https://www.linkedin.com/in/filipe-moreira-c/" rel="noreferrer" target="_blank" class="svelte-79vzz3"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&amp;logo=linkedin&amp;logoColor=white" alt="Linkedin" target="_blank" class="svelte-79vzz3"/></a></li> 
      <li class="svelte-79vzz3"><a href="https://github.com/Filipe-m" rel="noreferrer" target="_blank" class="svelte-79vzz3"><img src="https://img.shields.io/badge/-GitHub-%23333?style=for-the-badge&amp;logo=Github&amp;logoColor=white" alt="Linkedin" target="_blank" class="svelte-79vzz3"/></a></li></ul>`,a(l,"class","custom-shape-divider-top-1665881071 svelte-79vzz3"),b(l,"fill",tt),a(s,"class","content svelte-79vzz3"),a(t,"class","svelte-79vzz3")},m(i,r){C(i,t,r),n(t,l),n(t,o),n(t,s)},p:v,i:v,o:v,d(i){i&&y(t)}}}let tt="#c25450";class lt extends Q{constructor(t){super(),Y(this,t,null,et,U,{})}}function st(e){let t,l,o,s,i,r,g,p,c,m;return o=new We({}),r=new Xe({}),c=new lt({}),{c(){t=f("main"),l=f("header"),se(o.$$.fragment),s=h(),i=f("article"),se(r.$$.fragment),g=h(),p=f("article"),se(c.$$.fragment),a(l,"class","svelte-1lyql4r"),a(i,"class","svelte-1lyql4r"),a(p,"class","svelte-1lyql4r"),a(t,"class","svelte-1lyql4r")},m(u,d){C(u,t,d),n(t,l),Z(o,l,null),n(t,s),n(t,i),Z(r,i,null),n(t,g),n(t,p),Z(c,p,null),m=!0},p:v,i(u){m||(R(o.$$.fragment,u),R(r.$$.fragment,u),R(c.$$.fragment,u),m=!0)},o(u){le(o.$$.fragment,u),le(r.$$.fragment,u),le(c.$$.fragment,u),m=!1},d(u){u&&y(t),J(o),J(r),J(c)}}}class ot extends Q{constructor(t){super(),Y(this,t,null,st,U,{})}}new ot({target:document.getElementById("app")});const at=document.querySelectorAll(".watching"),nt=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting?t.target.classList.add("show"):t.target.classList.remove("show")})});at.forEach(e=>nt.observe(e));
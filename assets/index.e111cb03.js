(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function l(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=l(n);fetch(n.href,a)}})();function y(){}function xe(e){return e()}function me(){return Object.create(null)}function D(e){e.forEach(xe)}function ke(e){return typeof e=="function"}function le(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let W;function Z(e,t){return W||(W=document.createElement("a")),W.href=t,e===W.href}function je(e){return Object.keys(e).length===0}function r(e,t){e.appendChild(t)}function k(e,t,l){e.insertBefore(t,l||null)}function $(e){e.parentNode.removeChild(e)}function Le(e,t){for(let l=0;l<e.length;l+=1)e[l]&&e[l].d(t)}function u(e){return document.createElement(e)}function G(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function x(e){return document.createTextNode(e)}function v(){return x(" ")}function He(){return x("")}function o(e,t,l){l==null?e.removeAttribute(t):e.getAttribute(t)!==l&&e.setAttribute(t,l)}function Se(e){return Array.from(e.childNodes)}function _(e,t,l,s){l===null?e.style.removeProperty(t):e.style.setProperty(t,l,s?"important":"")}let ne;function V(e){ne=e}const T=[],ge=[],J=[],ve=[],Ee=Promise.resolve();let Q=!1;function Me(){Q||(Q=!0,Ee.then(Ne))}function X(e){J.push(e)}const K=new Set;let B=0;function Ne(){const e=ne;do{for(;B<T.length;){const t=T[B];B++,V(t),Te(t.$$)}for(V(null),T.length=0,B=0;ge.length;)ge.pop()();for(let t=0;t<J.length;t+=1){const l=J[t];K.has(l)||(K.add(l),l())}J.length=0}while(T.length);for(;ve.length;)ve.pop()();Q=!1,K.clear(),V(e)}function Te(e){if(e.fragment!==null){e.update(),D(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(X)}}const q=new Set;let Ve;function Y(e,t){e&&e.i&&(q.delete(e),e.i(t))}function _e(e,t,l,s){if(e&&e.o){if(q.has(e))return;q.add(e),Ve.c.push(()=>{q.delete(e),s&&(l&&e.d(1),s())}),e.o(t)}else s&&s()}function ye(e){e&&e.c()}function ee(e,t,l,s){const{fragment:n,after_update:a}=e.$$;n&&n.m(t,l),s||X(()=>{const i=e.$$.on_mount.map(xe).filter(ke);e.$$.on_destroy?e.$$.on_destroy.push(...i):D(i),e.$$.on_mount=[]}),a.forEach(X)}function te(e,t){const l=e.$$;l.fragment!==null&&(D(l.on_destroy),l.fragment&&l.fragment.d(t),l.on_destroy=l.fragment=null,l.ctx=[])}function Fe(e,t){e.$$.dirty[0]===-1&&(T.push(e),Me(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function se(e,t,l,s,n,a,i,d=[-1]){const h=ne;V(e);const c=e.$$={fragment:null,ctx:[],props:a,update:y,not_equal:n,bound:me(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:me(),dirty:d,skip_bound:!1,root:t.target||h.$$.root};i&&i(c.root);let f=!1;if(c.ctx=l?l(e,t.props||{},(m,p,...g)=>{const j=g.length?g[0]:p;return c.ctx&&n(c.ctx[m],c.ctx[m]=j)&&(!c.skip_bound&&c.bound[m]&&c.bound[m](j),f&&Fe(e,m)),p}):[],c.update(),f=!0,D(c.before_update),c.fragment=s?s(c.ctx):!1,t.target){if(t.hydrate){const m=Se(t.target);c.fragment&&c.fragment.l(m),m.forEach($)}else c.fragment&&c.fragment.c();t.intro&&Y(e.$$.fragment),ee(e,t.target,t.anchor,t.customElement),Ne()}V(h)}class oe{$destroy(){te(this,1),this.$destroy=y}$on(t,l){if(!ke(l))return y;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(l),()=>{const n=s.indexOf(l);n!==-1&&s.splice(n,1)}}$set(t){this.$$set&&!je(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Oe="/Portfolio/assets/linkedin.1bdc8843.svg",ze="/Portfolio/assets/email.d2aca9b2.svg",Ie="/Portfolio/assets/github.2ba8b15c.svg",We="/Portfolio/assets/instagram.251a46dd.svg";function be(e,t,l){const s=e.slice();return s[1]=t[l],s}function we(e){let t,l,s,n,a;return{c(){t=u("span"),l=u("a"),s=u("img"),a=v(),Z(s.src,n=e[1].icon)||o(s,"src",n),o(s,"class","img svelte-i5oey9"),o(s,"alt",e[1].name),o(l,"class","icon svelte-i5oey9"),o(l,"href",e[1].link),o(t,"class","svelte-i5oey9")},m(i,d){k(i,t,d),r(t,l),r(l,s),r(t,a)},p:y,d(i){i&&$(t)}}}function Be(e){let t,l,s,n,a,i,d,h=e[0],c=[];for(let f=0;f<h.length;f+=1)c[f]=we(be(e,h,f));return{c(){t=u("div"),l=u("img"),n=v(),a=u("div");for(let f=0;f<c.length;f+=1)c[f].c();i=v(),d=u("div"),d.innerHTML=`<h1 class="svelte-i5oey9">Hi, I&#39;m Filipe Moreira</h1> 
  <div class="text svelte-i5oey9"><p class="svelte-i5oey9">I&#39;m currently a last-year highschool student who&#39;s trying to learn web
      development</p> 
    <p class="svelte-i5oey9">Tecnologies I&#39;m able to use: <br/> 
      <code class="svelte-i5oey9">React <br/> Svelte <br/> Javascript</code></p></div>`,o(l,"class","profilePic svelte-i5oey9"),Z(l.src,s="https://avatars.githubusercontent.com/u/60034638?v=4")||o(l,"src",s),o(l,"alt",""),o(a,"class","icons svelte-i5oey9"),o(t,"class","about svelte-i5oey9"),o(d,"class","article svelte-i5oey9")},m(f,m){k(f,t,m),r(t,l),r(t,n),r(t,a);for(let p=0;p<c.length;p+=1)c[p].m(a,null);k(f,i,m),k(f,d,m)},p(f,[m]){if(m&1){h=f[0];let p;for(p=0;p<h.length;p+=1){const g=be(f,h,p);c[p]?c[p].p(g,m):(c[p]=we(g),c[p].c(),c[p].m(a,null))}for(;p<c.length;p+=1)c[p].d(1);c.length=h.length}},i:y,o:y,d(f){f&&$(t),Le(c,f),f&&$(i),f&&$(d)}}}function Je(e){return[[{link:"https://github.com/Filipe-m",icon:Ie,name:"Github"},{link:"mailto:liebeoxygen@gmail.com",icon:ze,name:"Email"},{link:"https://www.linkedin.com/in/filipe-moreira-c",icon:Oe,name:"Linkedin"},{link:"https://www.instagram.com/filipe.m_/",icon:We,name:"Instragram"}]]}class qe extends oe{constructor(t){super(),se(this,t,Je,Be,le,{})}}const Ze="/Portfolio/assets/NLW HEAT.416d189e.png",De="/Portfolio/assets/Caesar.7f4a82bf.png",Re="/Portfolio/assets/Calculator.f685a959.png",Ge="/Portfolio/assets/New Tab.f31e7395.png";function $e(e,t,l){const s=e.slice();return s[1]=t[l],s}function Ce(e){let t,l,s,n,a,i=e[1].name+"",d,h,c,f=e[1].text+"",m,p,g,j,F,L,ie,re,N,C,ae,Pe=`0px 0px 33px 10px ${e[1].nextColor}`,ce,b,H,P,ue,S,fe,E,he,A,M,pe,O,w,z,I,de;return{c(){t=u("section"),l=u("div"),l.innerHTML='<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="svelte-hhncvc"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path><path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path><path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path></svg>',s=v(),n=u("div"),a=u("h2"),d=x(i),h=v(),c=u("p"),m=x(f),p=v(),g=u("code"),j=x("Made using: "),F=u("span"),L=u("img"),re=v(),N=u("div"),C=u("img"),ce=v(),b=u("div"),H=u("a"),P=u("p"),ue=x("Visit the site "),S=u("span"),S.textContent="\u2197",fe=v(),E=u("p"),E.textContent="Or",he=v(),A=u("a"),M=u("p"),pe=x("See the project repositorie "),O=u("span"),w=G("svg"),z=G("path"),I=G("path"),de=v(),o(l,"class","custom-shape-divider-top-1665881071 svelte-hhncvc"),_(l,"fill",e[1].lastColor),o(a,"class","svelte-hhncvc"),_(a,"color",e[1].nextColor),o(c,"class","svelte-hhncvc"),_(c,"color",e[1].lastColor),o(L,"class","icon svelte-hhncvc"),Z(L.src,ie=e[1].language)||o(L,"src",ie),o(L,"alt",""),o(F,"class","svelte-hhncvc"),o(g,"class","svelte-hhncvc"),_(g,"color",e[1].nextColor),o(n,"class","text svelte-hhncvc"),Z(C.src,ae=e[1].image)||o(C,"src",ae),o(C,"alt",e[1].name),o(C,"class","img svelte-hhncvc"),_(C,"box-shadow",Pe),o(S,"class","svelte-hhncvc"),_(S,"color",e[1].lastColor),o(P,"class","svelte-hhncvc"),_(P,"color",e[1].nextColor),o(H,"href",e[1].link),o(H,"class","svelte-hhncvc"),o(E,"class","or svelte-hhncvc"),_(E,"color",e[1].nextColor),o(z,"fill","none"),o(z,"d","M0 0h24v24H0z"),o(I,"d","M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-7zm0-2h6v-3H6.5a1.5 1.5 0 0 0 0 3H7v-2h6v2zm6-5V4H6v10.035A3.53 3.53 0 0 1 6.5 14H19zM7 5h2v2H7V5zm0 3h2v2H7V8zm0 3h2v2H7v-2z"),o(I,"fill",e[1].lastColor),o(w,"xmlns","http://www.w3.org/2000/svg"),o(w,"viewBox","0 0 24 24"),o(w,"width","24"),o(w,"height","24"),o(O,"class","svelte-hhncvc"),o(M,"class","svelte-hhncvc"),o(A,"href",e[1].repositorie),o(A,"class","svelte-hhncvc"),_(A,"color",e[1].nextColor),o(b,"class","textWrapper svelte-hhncvc"),_(b,"fill",e[1].lastColor),o(N,"class","images svelte-hhncvc"),o(t,"class","svelte-hhncvc"),_(t,"background-color",e[1].color)},m(R,Ae){k(R,t,Ae),r(t,l),r(t,s),r(t,n),r(n,a),r(a,d),r(n,h),r(n,c),r(c,m),r(n,p),r(n,g),r(g,j),r(g,F),r(F,L),r(t,re),r(t,N),r(N,C),r(N,ce),r(N,b),r(b,H),r(H,P),r(P,ue),r(P,S),r(b,fe),r(b,E),r(b,he),r(b,A),r(A,M),r(M,pe),r(M,O),r(O,w),r(w,z),r(w,I),r(t,de)},p:y,d(R){R&&$(t)}}}function Ke(e){let t,l=e[0],s=[];for(let n=0;n<l.length;n+=1)s[n]=Ce($e(e,l,n));return{c(){for(let n=0;n<s.length;n+=1)s[n].c();t=He()},m(n,a){for(let i=0;i<s.length;i+=1)s[i].m(n,a);k(n,t,a)},p(n,[a]){if(a&1){l=n[0];let i;for(i=0;i<l.length;i+=1){const d=$e(n,l,i);s[i]?s[i].p(d,a):(s[i]=Ce(d),s[i].c(),s[i].m(t.parentNode,t))}for(;i<s.length;i+=1)s[i].d(1);s.length=l.length}},i:y,o:y,d(n){Le(s,n),n&&$(t)}}}let Ue="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",U="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg";function Qe(e){return[[{name:"Cracha NLW ",color:"rgb(12, 109, 119)",lastColor:"#dadde2",nextColor:"rgb(40, 37, 37)",image:Ze,link:"https://filipe-m.github.io/Cracha_NLW/",repositorie:"https://github.com/Filipe-m/Cracha_NLW",language:U,text:"This banner site was the first website, created in the Origin trail at NLW Heat 2021, it's a static page made for PC"},{name:"Caesar Cipher",color:"rgb(40, 37, 37)",lastColor:"rgb(12, 109, 119)",nextColor:"#F5A623",image:De,link:"https://filipe-m.github.io/Caesar-cipher/",repositorie:"https://github.com/Filipe-m/Caesar-cipher",language:U,text:"This was a JS challange to myself to test my knowledge and creat a site that can Incript and Decrypt Caesar Cipher."},{name:"Calculator",color:"#f5a623",lastColor:"rgb(40, 37, 37)",nextColor:"#D0021B",image:Re,link:"https://filipe-m.github.io/Calculator/",repositorie:"https://github.com/Filipe-m/Calculator",language:U,text:"Another JS challange but this time to make a simple but funcional calculator, although it doesn't support different and complex operations it still work perfetcly by it's means."},{name:"New Tab",color:"#c25450",lastColor:"#F5A623",nextColor:"#dadde2",image:Ge,link:"https://filipe-m.github.io/NewTab/",repositorie:"https://github.com/Filipe-m/NewTab",language:Ue,text:"A project to myself to build a new Start Page to my browser, this time using API's and a clock creating a minimalistic but clear home page that can be simple customizable in it's code."}]]}class Xe extends oe{constructor(t){super(),se(this,t,Qe,Ke,le,{})}}function Ye(e){let t,l,s,n,a,i,d;return s=new qe({}),i=new Xe({}),{c(){t=u("main"),l=u("header"),ye(s.$$.fragment),n=v(),a=u("article"),ye(i.$$.fragment),o(l,"class","svelte-1j40abi"),o(a,"class","svelte-1j40abi"),o(t,"class","svelte-1j40abi")},m(h,c){k(h,t,c),r(t,l),ee(s,l,null),r(t,n),r(t,a),ee(i,a,null),d=!0},p:y,i(h){d||(Y(s.$$.fragment,h),Y(i.$$.fragment,h),d=!0)},o(h){_e(s.$$.fragment,h),_e(i.$$.fragment,h),d=!1},d(h){h&&$(t),te(s),te(i)}}}class et extends oe{constructor(t){super(),se(this,t,null,Ye,le,{})}}new et({target:document.getElementById("app")});

!function(e){function t(t){for(var n,r,c=t[0],i=t[1],s=t[2],m=0,u=[];m<c.length;m++)r=c[m],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&u.push(o[r][0]),o[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(d&&d(t);u.length;)u.shift()();return l.push.apply(l,s||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],n=!0,r=1;r<a.length;r++){var i=a[r];0!==o[i]&&(n=!1)}n&&(l.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={0:0},o={0:0},l=[];function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[];r[e]?t.push(r[e]):0!==r[e]&&{2:1,3:1,4:1,5:1,6:1,7:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,17:1,18:1}[e]&&t.push(r[e]=new Promise((function(t,a){for(var n=({}[e]||e)+"."+{2:"059e6dd5",3:"272171f9",4:"0ebcf5f8",5:"e710da39",6:"55dcd5af",7:"86de215a",8:"da31d11b",9:"e5b0812d",10:"4bf14e1a",11:"725f7bc9",12:"9834ad99",13:"3c3d7fbf",14:"a1ff9606",15:"7fd0d330",16:"ced3363c",17:"be1d6c57",18:"3c3d7fbf",19:"31d6cfe0",20:"31d6cfe0"}[e]+".chunk.css",o=c.p+n,l=document.getElementsByTagName("link"),i=0;i<l.length;i++){var s=(d=l[i]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===n||s===o))return t()}var m=document.getElementsByTagName("style");for(i=0;i<m.length;i++){var d;if((s=(d=m[i]).getAttribute("data-href"))===n||s===o)return t()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=t,u.onerror=function(t){var n=t&&t.target&&t.target.src||o,l=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");l.request=n,delete r[e],u.parentNode.removeChild(u),a(l)},u.href=o,document.getElementsByTagName("head")[0].appendChild(u)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=n);var l,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=function(e){return c.p+""+({}[e]||e)+"."+{2:"8fdae84a",3:"c4fc527a",4:"ae8d06ad",5:"42723200",6:"4bf4534a",7:"efd356a3",8:"d37833d9",9:"a2c7d224",10:"66abba6e",11:"fc9dbe14",12:"06876bfc",13:"7e39f468",14:"2c74c95b",15:"9c557326",16:"f472a22b",17:"c8306f62",18:"6b813a49",19:"5fc7f768",20:"3a62dca9"}[e]+".chunk.js"}(e);var s=new Error;l=function(t){i.onerror=i.onload=null,clearTimeout(m);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",s.name="ChunkLoadError",s.type=n,s.request=r,a[1](s)}o[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:i})}),12e4);i.onerror=i.onload=l,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var m=0;m<i.length;m++)t(i[m]);var d=s;l.push([26,1]),a()}({21:function(e,t,a){"use strict";t.a=e=>new Promise(t=>{const a=document.createElement("script");a.setAttribute("async",""),a.setAttribute("src",e),a.onload=t,document.head.appendChild(a)})},24:function(e,t,a){e.exports=a.p+"40326fed0d1bc75a2688535e70dd31be.png"},25:function(e,t,a){"use strict";t.a=e=>(e/=1e3,{hours:Math.floor(e/3600),minutes:Math.floor(e%3600/60),seconds:Math.floor(e%3600%60),get human(){return`${this.hours} hours, ${this.minutes} minutes and ${this.seconds} seconds`}})},26:function(e,t,a){e.exports=a(39)},35:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),l=a(19),c=a.n(l),i=a(12),s=a(23),m=a(9);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var p=(e={loggedIn:!1},t)=>{switch(t.type){case"LOGIN":return u({loggedIn:!0},t.user);case"LOGOUT":return u({loggedIn:!1},t.user);default:return e}};var f=(e={},t)=>{switch(t.type){case"DISCOUNT":return t.discountData;default:return null}};var v=Object(m.c)({login:p,discount:f});var h=a(21),E=a(3);a(35),a(25);var g=Object(E.f)(Object(i.b)(e=>e)(({discount:e,login:{loggedIn:t,username:a,discriminator:l,avatar:c,id:i}})=>{const[s,m]=Object(n.useState)(!1),[d,u]=Object(n.useState)(!1);return Object(n.useEffect)(()=>{s?(document.getElementById("pseudoBody").style.overflowY="hidden",document.getElementById("pseudoBody").style.height="100vh",document.getElementsByTagName("footer")[0].style.display="none"):s||(document.getElementById("pseudoBody").style.overflowY="auto")},[s]),r.a.createElement("nav",{id:"navbar"},r.a.createElement("div",{id:"navbar-mobile"},r.a.createElement("div",{id:"navbar-mobile-head"},r.a.createElement("h2",{id:"navbar-mobile-head-text"},"Dank Memer"),r.a.createElement("div",{id:"navbar-mobile-head-hamburger",onClick:()=>m(!s)},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 20",fill:"none",stroke:"#ffffff",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("line",{x1:"4",y1:"6",x2:"20",y2:"6"}),r.a.createElement("line",{x1:"4",y1:"12",x2:"20",y2:"12"}),r.a.createElement("line",{x1:"4",y1:"18",x2:"20",y2:"18"})))),r.a.createElement("div",{id:"navbar-mobile-container",className:s?"visible":""},t?r.a.createElement("div",{id:"navbar-mobile-account"},r.a.createElement("div",{id:"navbar-mobile-account-picture",style:{backgroundImage:`url('https://cdn.discordapp.com/avatars/${i}/${c}')`}}),r.a.createElement("div",{id:"navbar-mobile-account-details"},r.a.createElement("p",{id:"navbar-mobile-account-details-username"},a),r.a.createElement("p",{id:"navbar-mobile-account-details-discriminator"},"#",l))):"",r.a.createElement("div",{id:"navbar-mobile-links",className:t?"move-down":""},r.a.createElement(o.c,{className:"navbar-mobile-link",activeClassName:"active",exact:!0,to:"/",onClick:()=>{setTimeout(()=>{m(!s)},1e3)}},"Home"),r.a.createElement(o.c,{className:"navbar-mobile-link",activeClassName:"active",to:"/commands",onClick:()=>{setTimeout(()=>{m(!s)},1e3)}},"Commands"),r.a.createElement(o.c,{className:"navbar-mobile-link",activeClassName:"active",to:"/blogs",onClick:()=>{setTimeout(()=>{m(!s)},1e3)}},"Blog"),r.a.createElement(o.c,{className:"navbar-mobile-link",activeClassName:"active",to:"/faq",onClick:()=>{setTimeout(()=>{m(!s)},1e3)}},"FAQ"),r.a.createElement(o.c,{className:"navbar-mobile-link",activeClassName:"active",to:"/loot",onClick:()=>{setTimeout(()=>{m(!s)},1e3)}},"Store"),t?r.a.createElement("a",{className:"navbar-mobile-link logout",href:"/oauth/logout",rel:"noreferrer noopener"},"Logout"):r.a.createElement("a",{className:"navbar-mobile-link",href:"/oauth/login",rel:"noreferrer noopener"},"Login with Discord")))),r.a.createElement("ul",{id:"navbar-links"},r.a.createElement("li",{className:"navbar-link"},r.a.createElement(o.c,{activeClassName:"active",exact:!0,to:"/"},"Home")),r.a.createElement("li",{className:"navbar-link"},r.a.createElement(o.c,{activeClassName:"active",to:"/commands"},"Commands")),r.a.createElement("li",{className:"navbar-link"},r.a.createElement(o.c,{activeClassName:"active",to:"/blogs"},"Blog")),r.a.createElement("li",{className:"navbar-link"},r.a.createElement(o.c,{activeClassName:"active",to:"/faq"},"FAQ")),r.a.createElement("li",{className:"navbar-link"},r.a.createElement(o.c,{activeClassName:"active",to:"/loot"},"Store")),r.a.createElement("li",{className:"navbar-link"},t?r.a.createElement("div",{id:"navbar-account",onClick:()=>u(!d)},r.a.createElement("p",{id:"navbar-account-name"},"Account",r.a.createElement("span",{id:"navbar-account-chevron",className:d?"active":""},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#ffffff",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("polyline",{points:"6 9 12 15 18 9"})))),d?r.a.createElement("div",{id:"navbar-account-dropdown",className:d?"active":""},r.a.createElement("div",{id:"navbar-account-dropdown-account"},r.a.createElement("div",{id:"navbar-account-dropdown-account-picture",style:{backgroundImage:`url('https://cdn.discordapp.com/avatars/${i}/${c}')`}}),r.a.createElement("div",{id:"navbar-account-dropdown-account-details"},r.a.createElement("p",{id:"navbar-account-dropdown-account-details-username"},a),r.a.createElement("p",{id:"navbar-account-dropdown-account-details-discriminator"},"#",l))),r.a.createElement("div",{id:"navbar-account-dropdown-actions"},r.a.createElement("a",{id:"navbar-account-dropdown-actions-logout",href:"/oauth/logout"},"Logout"))):""):r.a.createElement("a",{href:"/oauth/login",rel:"noreferrer noopener"},"Login"))))})),y=a(24),k=a.n(y),O=(a(37),r.a.memo(()=>r.a.createElement("footer",null,r.a.createElement("div",{id:"footer-content"},r.a.createElement("div",{id:"footer-left"},r.a.createElement(o.b,{to:"/"},r.a.createElement("img",{id:"footer-logo",src:k.a,alt:"Dank Memer logo"})),r.a.createElement("div",{id:"footer-left-text"},r.a.createElement("h2",{id:"footer-title"},"DANK MEMER"),r.a.createElement("span",{id:"footer-copyright"},"Copyright \xa9 ",(new Date).getFullYear()," Dank Memer"))),r.a.createElement("div",{id:"footer-links"},r.a.createElement("div",{className:"footer-links-col"},r.a.createElement("a",{className:"footer-link",href:"https://www.patreon.com/join/dankmemerbot"},"Premium"),r.a.createElement(o.b,{className:"footer-link",to:"/commands"},"Commands"),r.a.createElement(o.b,{className:"footer-link",to:"/blogs"},"Our blog")),r.a.createElement("div",{className:"footer-links-col"},r.a.createElement(o.b,{className:"footer-link",to:"/staff"},"Staff"),r.a.createElement(o.b,{className:"footer-link",to:"/terms"},"Terms"),r.a.createElement(o.b,{className:"footer-link",to:"/privacy"},"Privacy")),r.a.createElement("div",{className:"footer-links-col"},r.a.createElement(o.b,{className:"footer-link",to:"/rules"},"Rules"),r.a.createElement(o.b,{className:"footer-link",to:"/reports"},"Reports"),r.a.createElement(o.b,{className:"footer-link",to:"/appeals"},"Appeals")))))));a(38);const w=Object(n.lazy)(()=>a.e(8).then(a.bind(null,237))),j=Object(n.lazy)(()=>a.e(10).then(a.bind(null,248))),N=Object(n.lazy)(()=>a.e(15).then(a.bind(null,238))),C=Object(n.lazy)(()=>Promise.all([a.e(20),a.e(11)]).then(a.bind(null,247))),P=Object(n.lazy)(()=>a.e(4).then(a.bind(null,239))),x=Object(n.lazy)(()=>a.e(7).then(a.bind(null,240))),S=Object(n.lazy)(()=>a.e(16).then(a.bind(null,241))),T=Object(n.lazy)(()=>a.e(3).then(a.bind(null,249))),z=Object(n.lazy)(()=>a.e(14).then(a.bind(null,242))),D=Object(n.lazy)(()=>a.e(17).then(a.bind(null,243))),L=Object(n.lazy)(()=>a.e(5).then(a.bind(null,250))),B=Object(n.lazy)(()=>a.e(6).then(a.bind(null,251))),I=Object(n.lazy)(()=>a.e(18).then(a.bind(null,244))),M=Object(n.lazy)(()=>a.e(13).then(a.bind(null,245))),_=Object(n.lazy)(()=>Promise.all([a.e(2),a.e(9)]).then(a.bind(null,252))),A=Object(n.lazy)(()=>a.e(12).then(a.bind(null,246)));var $=()=>(ga("send","pageview",{hitType:"pageview",page:location.pathname}),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"pseudoBody"},r.a.createElement(g,null),r.a.createElement(E.c,null,r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null)},r.a.createElement(E.a,{exact:!0,strict:!0,component:()=>r.a.createElement(w,null),path:"/"}),r.a.createElement(E.a,{component:()=>r.a.createElement(_,null),path:"/commands"}),r.a.createElement(E.a,{component:()=>r.a.createElement(A,null),path:"/faq"}),r.a.createElement(E.a,{component:()=>r.a.createElement(T,null),path:"/staff"}),r.a.createElement(E.a,{component:()=>r.a.createElement(j,null),path:"/loot"}),r.a.createElement(E.a,{component:()=>r.a.createElement(N,null),path:"/rules"}),r.a.createElement(E.a,{component:()=>r.a.createElement(S,null),path:"/about"}),r.a.createElement(E.a,{exact:!0,component:()=>r.a.createElement(x,null),path:"/blogs"}),r.a.createElement(E.a,{exact:!0,component:e=>r.a.createElement(P,e),path:"/blogs/:blog"}),r.a.createElement(E.a,{component:()=>r.a.createElement(L,null),path:"/appeals/"}),r.a.createElement(E.a,{component:()=>r.a.createElement(B,null),path:"/reports/"}),r.a.createElement(E.a,{component:()=>r.a.createElement(C,null),path:"/admin"}),r.a.createElement(E.a,{component:()=>r.a.createElement(z,null),path:"/terms"}),r.a.createElement(E.a,{component:()=>r.a.createElement(D,null),path:"/landing"}),r.a.createElement(E.a,{component:()=>r.a.createElement(I,null),path:"/refunds"}),r.a.createElement(E.a,{component:()=>r.a.createElement(M,null),path:"/privacy"})))),r.a.createElement(O,null),r.a.createElement("div",{id:"modals"})));const q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.d,F=Object(m.e)(v,q(Object(m.a)(s.a)));window.mainStore=F,c.a.render(r.a.createElement(i.a,{store:F},r.a.createElement(o.a,null,r.a.createElement($,null))),document.getElementById("root")),document.addEventListener("drop",e=>(e.preventDefault(),e.stopPropagation(),!1)),document.addEventListener("dragover",e=>{e.preventDefault(),e.stopPropagation()}),fetch("/oauth/state",{credentials:"same-origin"}).then(e=>e.json()).then(e=>{e&&F.dispatch({type:"LOGIN",user:e})}),fetch("/api/discount").then(e=>e.json()).then(e=>F.dispatch({type:"DISCOUNT",discountData:e})),Object(h.a)("//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js").then(()=>window.cookieconsent.initialise({palette:{popup:{background:"#252e39"},button:{background:"#14a7d0"}},position:"bottom-left",content:{href:"/privacy"}})),"serviceWorker"in navigator&&a.e(19).then(a.t.bind(null,236,7))}});
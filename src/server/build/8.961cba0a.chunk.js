(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{207:function(e){e.exports=JSON.parse('{"a":{"sandbox":"ARcRKInPqiVatw0xA38SBVPcTxqbesRh-7XKQE4b_eMJ4HTXkOPtwUVzpN6pomL2Ymjwh-uzXgmRu3sS","production":"ASxq51TP92spfbizUkcxNEl7x84Ct717OJ0xgI3A2O_FeIH1F1jEdTBAKWZq5Ml2G3U0p3g57OQlZJOB"}}')},219:function(e,t,a){var r={"./FeelsRareMan.gif":220,"./FeelsWowMan.png":221,"./PeepoJuice.gif":222,"./PepegaCredit.gif":223,"./YEP.png":224,"./bigWOW.png":225,"./iLoveYou.gif":226,"./peepoClap.gif":227,"./peepoGiggles.gif":228,"./peepoHappy.png":229,"./peepoPat.gif":230,"./peepolove.png":231,"./pepeDS.gif":232,"./pepoCheer.gif":233,"./pogSlide.gif":234,"./poggies.png":235,"./widepeepohappy.png":236};function n(e){var t=o(e);return a(t)}function o(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=o,e.exports=n,n.id=219},220:function(e,t,a){e.exports=a.p+"961ec7b44ccb71ff88ed93b636a28df9.gif"},221:function(e,t,a){e.exports=a.p+"a33959dbbbedc4a9bc316a9bcb9698ba.png"},222:function(e,t,a){e.exports=a.p+"51de581eb5728c96dcb585ae0ca0a207.gif"},223:function(e,t,a){e.exports=a.p+"25f52cef69ed1765654520a879c1df81.gif"},224:function(e,t,a){e.exports=a.p+"46002adcf47eaeb98bdebed8c496b08b.png"},225:function(e,t,a){e.exports=a.p+"0f487e5ae647aaf5a1ba96494e052014.png"},226:function(e,t,a){e.exports=a.p+"6a071e7d4aaf27034442cd3e0ad94727.gif"},227:function(e,t,a){e.exports=a.p+"3258c056932c7cda786e10fb9b08cc8e.gif"},228:function(e,t,a){e.exports=a.p+"4c5b0c178f2434e74a60679f0d4f3b05.gif"},229:function(e,t,a){e.exports=a.p+"e3794f97489ffbaad2b683b51636409f.png"},230:function(e,t,a){e.exports=a.p+"5c278a4172c09d5529798409b8776060.gif"},231:function(e,t,a){e.exports=a.p+"6003bb42ae35e28ecb42faf1d65fd2ad.png"},232:function(e,t,a){e.exports=a.p+"13ad96cc15e4c045a583b21ad6069ea0.gif"},233:function(e,t,a){e.exports=a.p+"a1fddc4d7474647a689c612ee1f2cde4.gif"},234:function(e,t,a){e.exports=a.p+"e716899549b832b9ea86a43f64a2ad0c.gif"},235:function(e,t,a){e.exports=a.p+"066e11f3dcdbdc4f2591834c296a556e.png"},236:function(e,t,a){e.exports=a.p+"077ad9648bea9eb57cdd61c45e0fc453.png"},237:function(e,t,a){},320:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(2),c=a(48),i=a(12),s=a(71),l=a(207),u=a(208);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e){const t=t=>{const a=e.boxCount*e.activeBox.price;return t?a:a.toFixed(2)},a=a=>{const r=t(!0),{discountPercent:n}=(()=>{const{Constants:a,discount:r}=e,n={},o=t(!0);let c=0;r&&(c+=r.percent,n.discount=!0);const i=o*((100-(c+a.FLAT_DISCOUNT_PERCENTAGE))/100);return i>=a.MINIMUM_DISCOUNT_VALUE?(c+=a.FLAT_DISCOUNT_PERCENTAGE,n.flat=!0):n.neededUntilFlat=a.MINIMUM_DISCOUNT_VALUE-i,n.discountPercent=c,n})(),o=0!==e.activeBox.id?r*(n/100):0;return a?o:o.toFixed(2)},r=e=>{const r=t(!0)-Number(a());return e?r:r.toFixed(2)};return n.a.createElement(u.PayPalButton,{options:{"client-id":l.a.production},style:{height:50,fontFamily:"'Inter', sans-serif",layout:"horizontal"},createOrder:(n,o)=>{const c=(({total:e,subtotal:t,discount:a,token:r,activeBox:n,boxCount:o,giftUserID:c,salesTax:i})=>({intent:"CAPTURE",purchase_units:[{amount:{value:(Number(e)+Number(i)).toFixed(2),currency_code:"USD",breakdown:{item_total:{currency_code:"USD",value:(Number(t)+Number(i)).toFixed(2)},shipping_discount:{currency_code:"USD",value:a.toFixed(2)}}},description:"Dank Memer Lootbox Purchase",custom_id:`${r}${c?":"+c:""}`,soft_descriptor:"Dank Memer's Box Shop",items:[{name:n.name,unit_amount:{currency_code:"USD",value:n.price.toFixed(2)},quantity:o.toString(),category:"DIGITAL_GOODS"},{name:"Sales tax",unit_amount:{currency_code:"USD",value:i},quantity:"1",category:"DIGITAL_GOODS"}]}],application_context:{brand_name:"Dank Memer's Box Shop",shipping_preference:"NO_SHIPPING",user_action:"PAY_NOW"}}))(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({total:r(!0),subtotal:t(!0),discount:a(!0),token:e.login.token,activeBox:e.activeBox,boxCount:e.boxCount,salesTax:(.0675*r(!0)).toFixed(2)},null===e.giftState?{}:{giftUserID:e.giftState}));return o.order.create(c)},onApprove:(t,a)=>(t=>t.order.capture().then(t=>{e.setFinishState({finish:{success:!0,data:t}})}).catch(t=>{e.setFinishState({finish:{success:!1,data:t}})}))(a)})}function f(){return n.a.createElement("div",{id:"store-prompt"},n.a.createElement("div",{id:"store-prompt-content"},n.a.createElement("h1",{id:"store-prompt-content-title"},"Not so fast!"),n.a.createElement("div",{id:"store-prompt-content-body"},n.a.createElement("p",{className:"store-prompt-content-message"},"Your account has been banned from purchasing any of our lootboxes! If you think this is a mistake, please join ",n.a.createElement("a",{href:"https://discord.gg/meme",target:"_blank",rel:"noopener noreferrer"},"our support server")," for assistance. If this is correct, you may attempt to ",n.a.createElement(o.b,{to:"/appeals"},"appeal your ban"),".")),n.a.createElement(o.b,{to:"/",id:"store-prompt-content-button"},"Go home")))}function h(e){return n.a.createElement("div",{id:"store-prompt"},n.a.createElement("div",{id:"store-prompt-content"},n.a.createElement("h1",{id:"store-prompt-content-title"},e.success?"Success!":"Uh oh.."),e.success?n.a.createElement("div",{id:"store-prompt-content-body"},n.a.createElement("p",{className:"store-prompt-content-message",style:{marginBottom:"15px"}},"Your payment has successfully been made. Your boxes should be deposited directly into your inventory within 5 minutes of completing the purchase."),n.a.createElement("p",{className:"store-prompt-content-message"},"If they do not show up after 24 hours, join ",n.a.createElement("a",{href:"https://discord.gg/meme",target:"_blank",rel:"noopener noreferrer"},"the support server")," and mention a mod or a developer for assistance."),n.a.createElement("p",{className:"store-prompt-content-message"},"Additionally, can find your Payment ID below.",n.a.createElement("br",null),"You should store this ID somewhere and make sure you don't lose it - it is necessary if you are experiencing any problems.",n.a.createElement("br",null),"Payment ID: ",n.a.createElement("span",{className:"text-highlight"},e.data&&e.data.id))):n.a.createElement("div",{id:"store-prompt-content-body"},n.a.createElement("p",{className:"store-prompt-content-message",style:{marginBottom:"15px"}},"uwu we make a fucky wucky!! A wittle fucko boingo! The code monkeys at our headquaters are working VEWY HAWD to fix this!"),n.a.createElement("p",{className:"store-prompt-content-message"},"Something went wrong while trying to ",e.data&&e.data?"process":"create"," your payment. You can try again or join ",n.a.createElement("a",{href:"https://discord.gg/meme",target:"_blank",rel:"noopener noreferrer"},"the support server")," for help",e.data?" and contact an administrator with your Payment ID:":".")),n.a.createElement(o.b,{to:"/loot",id:"store-prompt-content-button"},"Go to store")))}function g({country:e}){return n.a.createElement("div",{id:"store-prompt"},n.a.createElement("div",{id:"store-prompt-content"},n.a.createElement("h1",{id:"store-prompt-content-title"},"Sorry."),n.a.createElement("div",{id:"store-prompt-content-body"},n.a.createElement("p",{className:"store-prompt-content-message"},"Loot boxes are declared illegal in your country. As a result, you are unable to purchase any boxes."),n.a.createElement("p",{className:"store-prompt-content-message"},"Alternatively, click ",n.a.createElement("a",{href:"https://www.google.com/search?q=flights+to+usa"},"here")," to find flights to the Land of Freedom."),n.a.createElement("div",{style:{fontSize:"4px"}},n.a.createElement("p",null,"also ",e," gay lmao"))),n.a.createElement(o.b,{to:"/",id:"store-prompt-content-button"},"Go home")))}var E=a(3),b=a(209),y=a.n(b);a(218);function v(e){const[t,a]=Object(r.useState)(new Date),c=Object(E.f)();return n.a.createElement("div",{id:"store-prompt"},n.a.createElement("div",{id:"store-prompt-content"},n.a.createElement("h1",{id:"store-prompt-content-title"},"Hold on."),n.a.createElement("div",{id:"store-prompt-content-body"},n.a.createElement("p",{className:"store-prompt-content-message"},"Before you go any further, we need to verify you are of legal age to access the following page."),n.a.createElement(y.a,{onDayChange:e=>a(e)})),n.a.createElement("span",{to:"/",id:"store-prompt-content-button",onClick:()=>{if((Math.round(((new Date).getTime()-new Date(t).getTime())/1e3/86400)/365.25).toFixed()>=21)return e.checkAge(!1);c.push("/")}},"Verify age"),n.a.createElement(o.b,{to:"/",id:"store-prompt-content-button-small"},"Go home")))}var x=e=>new Promise(t=>setTimeout(t,e));const O=document.createElement("div");O.id="ree-overlay",document.body.appendChild(O);let w=0;const I=[],N=a(219);N.keys().map(e=>{I.push(N(e))});var S=I;a(24),a(237);function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(Object(a),!0).forEach((function(t){P(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function P(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const _={id:0,name:"Lootbox",description:"Lootbox description",items:[],price:0,randomItem:{chance:0,keyword:"N/A"},yield:"0 - 0"};t.default=Object(i.b)(e=>e,null)((function(e){const t=Object(r.useRef)(),[a,i]=Object(r.useState)([_]),[l,u]=Object(r.useState)(null),[m,d]=Object(r.useState)(_),[E,b]=Object(r.useState)(""),[y,I]=Object(r.useState)(!1),[N,M]=Object(r.useState)(!1),[P,j]=Object(r.useState)(!1),[U,D]=Object(r.useState)(!1),[A,C]=Object(r.useState)(null),[F,L]=Object(r.useState)(1),[T,B]=Object(r.useState)(null),[R,$]=Object(r.useState)(0),[V,G]=Object(r.useState)(!1),[H,z]=Object(r.useState)(!1),[W,Y]=Object(r.useState)(!1),[q,J]=Object(r.useState)(0),[K,X]=Object(r.useState)(!1);Object(r.useEffect)(()=>{window.scroll(0,0),c.all([c("/api/boxes"),c("/api/country"),c("/api/isBanned")]).then(c.spread(async({data:{boxes:e,Constants:t}},{data:{country:a}},r)=>{i(e),d(e[1]),u(t),b(a),M(403===r.status)})).catch(e=>{console.error(e)})},[]),Object(r.useEffect)(()=>{["ES","BE","NL"].includes(E)&&!localStorage.getItem("verified_age")&&"verified"!==localStorage.getItem("verified_age")&&(G(!0),localStorage.setItem("verified_age","unverified"))},[E]),Object(r.useEffect)(()=>T&&R.toString().length>16&&R.toString().length<21?z(!0):z(!1),[R]),Object(r.useEffect)(()=>{L(1)},[m]),Object(r.useEffect)(()=>{t.current&&(t.current.value=F)},[F]),Object(r.useEffect)(()=>{W&&((async({duration:e=1500,heavyness:t=10,playAudio:a=!0,rage:r=!0}={})=>{w++;const n=()=>(-t/2+Math.random()*t).toFixed(2),o=setInterval(()=>document.body.style.transform=`translate(${n()}px, ${n()}px)`);if(O.style.transition=`opacity ${(e/1e3).toFixed(1)}s`,setTimeout(()=>{clearInterval(o),0==--w&&(document.body.style.transform="",O.className="")},e),r&&(O.className="reeing"),a){const t=new Audio("static/audio/reeee.mp3");t.volume=.5,await t.play();const a=e/(t.volume/.001);for(;t.volume>.001;)await x(a),t.volume-=.001;t.volume=0}})({duration:1500,intensity:35}),setTimeout(()=>{Y(!1)},2e3))},[W]);const Q=Array(13).fill(0).map((e,t)=>new Audio(`/static/audio/peepo${t}.mp3`)),Z=()=>{const e=Math.floor(360*Math.random());return{"--direction":e+"deg","--delta-x":200*Math.sin(e)+"px","--delta-y":150*Math.cos(e)+"px","--offset-x":e%180?0:130-260*Math.random()+"px","--offset-y":e%180?40-80*Math.random()+"px":0}},ee=({finish:e})=>{D(e.success),C(e.data)},te=e=>{const t=F*m.price;return e?t:t.toFixed(2)},ae=e=>{const t=te(!0),a=(()=>{const e={};let t=0;const a=te(!0)*((100-(t+l.FLAT_DISCOUNT_PERCENTAGE))/100);return a>=l.MINIMUM_DISCOUNT_VALUE?(t+=l.FLAT_DISCOUNT_PERCENTAGE,e.flat=!0):e.neededUntilFlat=l.MINIMUM_DISCOUNT_VALUE-a,e.discountPercent=t,e})(),r=0!==m.id?t*(a.discountPercent/100):0;return e?r:r.toFixed(2)},re=e=>{const t=te(!0)-Number(ae());return e?t:t.toFixed(2)},ne=e=>{e&&parseInt(F)<100?L(parseInt(F)+1):!e&&parseInt(F)>1&&L(parseInt(F)-1)};return n.a.createElement("div",{id:"store"},N?n.a.createElement(f,null):"BE"===E?n.a.createElement(g,null):V?n.a.createElement(v,{checkAge:()=>{localStorage.setItem("verified_age","verified"),G(!1)}}):U?n.a.createElement(h,{success:U,data:A}):n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"store-header"},n.a.createElement("h1",{id:"store-header-title"},"Dank Memer Store"),n.a.createElement("p",{id:"store-header-message"},"Welcome to the lootbox shop! Here you can find a variety of different purchasable items that grant you a chance of winning something special!")),n.a.createElement("div",{id:"store-boxes"},a.map((e,r)=>n.a.createElement("div",{key:r,className:m.id===r?"store-box active":"store-box",onClick:()=>{m.id!==r&&((q<1||q>=12)&&J(0),Q[q].play(),J(q+1),X(!0)),d(a[r])}},n.a.createElement("h2",{className:"store-box-name"},e.name),n.a.createElement("p",{className:"store-box-price"},"$",e.price),K&&m.id===r?n.a.createElement("div",{id:"peepos"},n.a.createElement("div",{className:"peepo",style:k(k({},Z()),{},{backgroundImage:`url(${S[Math.floor(Math.random()*S.length)]})`})}),n.a.createElement("div",{className:"peepo",style:k(k({},Z()),{},{backgroundImage:`url(${S[Math.floor(Math.random()*S.length)]})`})}),n.a.createElement("div",{className:"peepo",style:k(k({},Z()),{},{backgroundImage:`url(${S[Math.floor(Math.random()*S.length)]})`})}),n.a.createElement("div",{className:"peepo",style:k(k({},Z()),{},{backgroundImage:`url(${S[Math.floor(Math.random()*S.length)]})`})}),n.a.createElement("div",{className:"peepo",style:k(k({},Z()),{},{backgroundImage:`url(${S[Math.floor(Math.random()*S.length)]})`})})):"",m.id===r?n.a.createElement("div",{id:"store-box-counter"},n.a.createElement("div",{id:"store-box-counter-sub",onClick:()=>ne(!1)},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 20",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},n.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),n.a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))),n.a.createElement("input",{id:"store-box-counter-num",type:"number",ref:t,defaultValue:1,onInput:()=>{t.current&&(t.current.value<1?(t.current.value=1,L(1),Y(!0)):t.current.value>100?(t.current.value=100,L(100),Y(!0)):L(t.current.value))},placeholder:"Boxes"}),n.a.createElement("div",{id:"store-box-counter-add",onClick:()=>ne(!0)},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 20",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},n.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),n.a.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),n.a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"})))):""))),n.a.createElement("div",{id:"store-details"},n.a.createElement("div",{id:"store-items"},n.a.createElement("h2",{id:"store-items-title"},"Possible items"),n.a.createElement("p",{id:"store-items-message"},"Below includes a list of all the goodies and the maximum amount of items you could receive from the purchase of a ",n.a.createElement("span",{className:"text-highlight"},m.name),"! Along with these items, you have the chance of getting anywhere in the range of ",n.a.createElement("span",{className:"text-highlight"},"\u23e3 ",m.yield),"."),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Item name"),n.a.createElement("th",null,"Max. Amount"))),n.a.createElement("tbody",null,m.items.map(({name:e,amount:t},a)=>n.a.createElement("tr",{key:a},n.a.createElement("td",null,e),n.a.createElement("td",null,t)))))),n.a.createElement("div",{id:"store-summary"},n.a.createElement("h2",{id:"store-summary-title"},"Order summary"),n.a.createElement("p",{id:"store-summary-message"},"All orders are processed via PayPal and will operate using the United States Dollar. Each order has a minimum charge amount of $",l&&l.MINIMUM_PURCHASE_VALUE," where you will need to fulfill this amount to continue. Orders over $",l&&l.MINIMUM_DISCOUNT_VALUE," will receive a ",l&&l.FLAT_DISCOUNT_PERCENTAGE,"% discount."),n.a.createElement("table",{id:"store-summary-items"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,F,"x ",m.name),n.a.createElement("td",null,"$",Math.round(100*(F*m.price+Number.EPSILON))/100)),n.a.createElement("tr",null,n.a.createElement("td",null,"Added sales tax"),n.a.createElement("td",null,"$",l?(.0675*re(!0)).toFixed(2):"")),n.a.createElement("tr",null,n.a.createElement("td",null,"Discount"),n.a.createElement("td",null,Math.round(100*(F*m.price+Number.EPSILON))/100>20?n.a.createElement("p",{id:"store-summary-sale-amount"},"10% ($",(F*m.price/10).toFixed(2),")"):"0%")),n.a.createElement("tr",null,n.a.createElement("td",null),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null),n.a.createElement("td",{id:"store-summary-total"},"Total: $",Math.round(100*(F*m.price+Number.EPSILON))/100<20?Math.round(100*(parseFloat(l?(.0675*re(!0)).toFixed(2):0)+parseFloat(F*m.price)+Number.EPSILON))/100:(Math.round(100*(parseFloat(l?(.0675*re(!0)).toFixed(2):0)+parseFloat(F*m.price)+Number.EPSILON))/100-(F*m.price/10).toFixed(2)).toFixed(2))))),n.a.createElement("div",{id:"store-summary-inputs"},n.a.createElement("div",{className:"store-summary-input"},n.a.createElement("input",{name:"tos-privacy",type:"checkbox",onChange:e=>j(e.target.checked)}),n.a.createElement("div",{className:"store-summary-input-tick"},n.a.createElement("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"#ffffff",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"},n.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),n.a.createElement("path",{d:"M5 12l5 5l10 -10"}))),n.a.createElement("label",{htmlFor:"tos-privacy"},"I agree to Dank Memer\u2019s ",n.a.createElement(o.b,{to:"/terms"},"Terms of Service")," and ",n.a.createElement(o.b,{to:"refunds"},"Refund Policy"),"."),n.a.createElement("br",null)),n.a.createElement("div",{className:"store-summary-input"},n.a.createElement("input",{name:"gift-purchase",type:"checkbox",onChange:e=>B(e.target.checked)}),n.a.createElement("div",{className:"store-summary-input-tick"},n.a.createElement("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"#ffffff",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"},n.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),n.a.createElement("path",{d:"M5 12l5 5l10 -10"}))),n.a.createElement("label",{htmlFor:"gift-purchase"},"Th",1===F?"is box is":"ese boxes are"," being purchased as a gift.")),T?n.a.createElement("div",{className:"store-summary-input"},n.a.createElement("input",{name:"user-gift",type:"number",onChange:e=>$(e.target.value)}),n.a.createElement("label",{htmlFor:"user-gift"},"Gift recipient's user ID.")):"",l&&Math.round(100*(F*m.price+Number.EPSILON))/100<l.MINIMUM_PURCHASE_VALUE?n.a.createElement("div",{id:"checkout-error"},n.a.createElement("p",{id:"checkout-error-notice"},"Insufficient purchase amount."),n.a.createElement("p",{id:"checkout-error-help"},"Your order does not meet the minimum required value of $",l&&l.MINIMUM_PURCHASE_VALUE,".")):"",l&&Math.round(100*(F*m.price+Number.EPSILON))/100>=l.MINIMUM_PURCHASE_VALUE&&T&&!H?n.a.createElement("div",{id:"checkout-error"},n.a.createElement("p",{id:"checkout-error-notice"},"The ID provided is invalid."),n.a.createElement("p",{id:"checkout-error-help"},"If you are unsure, you can find how to get an user ID ",n.a.createElement("a",{href:"https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID",rel:"noreferrer noopener",target:"_blank"},"here"),".")):""),T?H&&P&&e.login.loggedIn&&l&&0!==m.price&&Math.round(100*(F*m.price+Number.EPSILON))/100>=l.MINIMUM_PURCHASE_VALUE?n.a.createElement("div",{id:"store-summary-actions"},n.a.createElement(p,{activeBox:m,boxCount:F,giftState:R,login:e.login,Constants:l,discount:0,setFinishState:ee}),n.a.createElement("p",{id:"store-summary-actions-message"},"You are still able to use your credit/debit card without signing in through PayPal. Scroll down in the popup window.")):e.login.loggedIn?"":n.a.createElement("div",{id:"store-summary-actions"},n.a.createElement(s.a,null),n.a.createElement("p",{id:"store-summary-actions-message"},"Before you purchase your ",n.a.createElement("span",{className:"text-highlight"},"shiny")," new boxes you need to login to Discord.")):"",!T&&P&&e.login.loggedIn&&l&&0!==m.price&&Math.round(100*(F*m.price+Number.EPSILON))/100>=l.MINIMUM_PURCHASE_VALUE?n.a.createElement("div",{id:"store-summary-actions"},n.a.createElement(p,{activeBox:m,boxCount:F,giftState:null,login:e.login,Constants:l,discount:0,setFinishState:ee}),n.a.createElement("p",{id:"store-summary-actions-message"},"You are still able to use your credit/debit card without signing in through PayPal. Scroll down in the popup window.")):T||e.login.loggedIn?"":n.a.createElement("div",{id:"store-summary-actions"},n.a.createElement(s.a,null),n.a.createElement("p",{id:"store-summary-actions-message"},"Before you purchase your ",n.a.createElement("span",{className:"text-highlight"},"shiny")," new boxes you need to login to Discord."))))))}))},71:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a(0),n=a.n(r);function o(){return n.a.createElement("a",{id:"discord--login",href:"/oauth/login?redirect="+window.location.pathname,rel:"noopener noreferrer"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",viewBox:"0 0 245 240"},n.a.createElement("path",{fill:"#ffffff",d:"M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"}),n.a.createElement("path",{fill:"#ffffff",d:"M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"})),"Login with Discord")}}}]);
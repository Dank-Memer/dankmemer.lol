(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(43),o=t(22),c=t(15),r=t(44);t(71);class m extends l.a.Component{constructor(...e){var a,t,n;super(...e),n={blogs:[]},(t="state")in(a=this)?Object.defineProperty(a,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[t]=n}async componentDidMount(){this.setState({blogs:await fetch("/api/blogs").then(e=>e.json())})}render(){return l.a.createElement("div",{className:"content"},l.a.createElement("header",{className:"header"},l.a.createElement("span",null,"Blog Posts")),l.a.createElement("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-7326182486296195","data-ad-slot":"4551035249","data-ad-format":"auto","data-full-width-responsive":"true"}),l.a.createElement("div",{className:"list"},this.state.blogs.map(e=>l.a.createElement("div",{className:"blog-post-container"},l.a.createElement("div",{className:"click-to-read-tag"},"Click to read"),l.a.createElement(c.a,{className:"boxy",key:e.id,to:`/blogs/${e.id}`},l.a.createElement("div",{className:"blog-info"},l.a.createElement("div",{className:"blog-name"},e.name),l.a.createElement("div",{className:"blog-date blurple"},"Posted ",function(e){const a=(e=new Date(e)).toLocaleString("default",{month:"long"}),t=(l=e.getDate(),l+(l>0?["th","st","nd","rd"][l>3&&l<21||l%10>3?0:l%10]:"")),n=e.getFullYear();var l;return`${a} ${t}, ${n}`}(e.date)," by ",e.author),l.a.createElement("span",{className:"blog-desc"},e.desc)))))),l.a.createElement("div",{className:"call-to-action"},l.a.createElement("span",{className:"action-text"},"Join the growing Dank Memer family, today."),l.a.createElement("div",{className:"links"},l.a.createElement(r.a,{link:"https://invite.dankmemer.lol"},"Add Bot"),l.a.createElement(r.a,{link:"/commands"},"Commands")),l.a.createElement("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-7326182486296195","data-ad-slot":"4551035249","data-ad-format":"auto","data-full-width-responsive":"true"})))}}t(72);class i extends l.a.Component{constructor(...e){var a,t,n;super(...e),a=this,t="state",n={name:"",date:new Date("04/20").getTime(),content:""},t in a?Object.defineProperty(a,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[t]=n}async componentDidMount(){this.setState(await fetch(`/api/blogs/${this.props.match.params.blog}`).then(e=>e.json()))}render(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"blog-header-container"},l.a.createElement("header",{className:"blog-header blurple"},this.state.name),l.a.createElement("div",{className:"blog-timestamp"},"Posted ",function(e){const a=(e=new Date(e)).toLocaleString("default",{month:"long"}),t=(l=e.getDate(),l+(l>0?["th","st","nd","rd"][l>3&&l<21||l%10>3?0:l%10]:"")),n=e.getFullYear();var l;return`${a} ${t}, ${n}`}(this.state.date)," by ",this.state.author),this.state.image&&l.a.createElement("div",{className:"blog-header-img"},l.a.createElement("img",{src:this.state.image}))),l.a.createElement("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-7326182486296195","data-ad-slot":"4551035249","data-ad-format":"auto","data-full-width-responsive":"true"}),l.a.createElement("div",{className:"blog-content",dangerouslySetInnerHTML:{__html:this.state.content}}),l.a.createElement("div",{className:"call-to-action"},l.a.createElement("span",{className:"action-text"},"Join the growing Dank Memer family, today."),l.a.createElement("div",{className:"links"},l.a.createElement(r.a,{link:"https://invite.dankmemer.lol"},"Add Bot"),l.a.createElement(r.a,{link:"/commands"},"Commands"))),l.a.createElement("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-7326182486296195","data-ad-slot":"4551035249","data-ad-format":"auto","data-full-width-responsive":"true"}))}}a.default=()=>l.a.createElement(s.a,null,l.a.createElement(o.a,{exact:!0,path:"/blogs",component:()=>l.a.createElement(m,null)}),l.a.createElement(o.a,{exact:!0,path:"/blogs/:blog",component:e=>l.a.createElement(i,e)}))},44:function(e,a,t){"use strict";var n=t(0),l=t.n(n);t(45);a.a=l.a.memo(({link:e,children:a,onClick:t})=>{const n=l.a.createElement("button",{onClick:t,className:"button"},a);return e?l.a.createElement("a",{href:e},n):n})},45:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){}}]);
(this["webpackJsonpyoutube-react"]=this["webpackJsonpyoutube-react"]||[]).push([[0],{12:function(e,t,n){e.exports={header:"Header_header__1v0yI",item:"Header_item__2VaIS"}},18:function(e,t,n){e.exports={wrapper:"Layout_wrapper__2dOTA",main:"Layout_main__3OBIG"}},36:function(e,t,n){e.exports={container:"VideoGrid_container__1eUpe"}},37:function(e,t,n){e.exports={item:"VideoGridItem_item__2P63g"}},68:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n.n(a),i=n(30),s=n.n(i),o=(n(44),n(10)),u=n(3),l=n(31),j=n(33),d=n(12),p=n.n(d),b=function(){return Object(c.jsxs)("div",{className:p.a.header,children:[Object(c.jsx)("div",{className:p.a.item,children:Object(c.jsx)(o.b,{to:"/",children:"react-tube"})}),Object(c.jsx)("div",{className:p.a.item,children:Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{type:"text",placeholder:"Search..."}),Object(c.jsx)("button",{type:"submit",children:Object(c.jsx)(l.a,{icon:j.a})})]})})]})},h=n(18),x=n.n(h),O=function(e){var t=e.children;return Object(c.jsxs)("div",{className:x.a.wrapper,children:[Object(c.jsx)(b,{}),Object(c.jsx)("div",{className:x.a.main,children:t})]})},m=n(19),f=n.n(m),v=n(34),_=n(35),g=n.n(_).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),y=function(){var e=Object(v.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/videos",{params:{part:"snippet",maxResults:40,key:"AIzaSyBL7u0yXdlFbNaduKG2MUO-W7hKLoO_iuM",regionCode:"JP",type:"video",chart:"mostPopular"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=n(38),w={popular:[]},P=function(e,t){switch(t.type){case"SET_POPULAR":return{popular:t.payload.popular};default:return e}},L=Object(a.createContext)({globalState:w,setGlobalState:function(){return null}}),N=function(e){var t=e.children,n=Object(a.useReducer)(P,w),r=Object(S.a)(n,2),i=r[0],s=r[1];return Object(c.jsx)(L.Provider,{value:{globalState:i,setGlobalState:s},children:t})},G=n(36),I=n.n(G),C=function(e){var t=e.children;return Object(c.jsx)("div",{className:I.a.container,children:t})},F=n(37),R=n.n(F),T=function(e){var t=e.id,n=e.src,a=e.title;return Object(c.jsx)(o.b,{to:{pathname:"watch",search:"?v=".concat(t)},className:R.a.item,children:Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{src:n,alt:a}),Object(c.jsx)("span",{children:a})]})})},U=function(){var e=Object(a.useContext)(L),t=e.globalState,n=e.setGlobalState;return Object(a.useEffect)((function(){y().then((function(e){console.log("data",e),n({type:"SET_POPULAR",payload:{popular:e.data.items}})}))}),[]),Object(c.jsx)(O,{children:Object(c.jsx)(C,{children:t.popular&&t.popular.map((function(e){return Object(c.jsx)(T,{id:e.id,src:e.snippet.thumbnails.medium.url,title:e.snippet.title},e.id)}))})})},k=function(){return Object(c.jsx)(O,{children:"search pages"})},A=function(){return Object(c.jsx)(O,{children:"watch pages"})};var B=function(){return Object(c.jsx)(o.a,{children:Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{exact:!0,path:"/",component:U}),Object(c.jsx)(u.a,{exact:!0,path:"/Search",component:k}),Object(c.jsx)(u.a,{exact:!0,path:"/Watch",component:A})]})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(N,{children:Object(c.jsx)(B,{})})}),document.getElementById("root")),E()}},[[68,1,2]]]);
//# sourceMappingURL=main.9f92e661.chunk.js.map
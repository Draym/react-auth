(this["webpackJsonpreact-auth"]=this["webpackJsonpreact-auth"]||[]).push([[1],{13:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(8),r=n(9),i=function(){function e(){Object(a.a)(this,e)}return Object(r.a)(e,null,[{key:"sessionKey",value:function(){return"auth-session-token"}},{key:"getSessionToken",value:function(){return localStorage.getItem(this.sessionKey())}},{key:"clearSession",value:function(){localStorage.removeItem(this.sessionKey())}},{key:"storeSession",value:function(e){localStorage.setItem(this.sessionKey(),e)}},{key:"hasSession",value:function(){return null!=localStorage.getItem(this.sessionKey())}}]),e}()},37:function(e,t,n){},38:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(26),c=n.n(i),o=(n(37),n(22)),s=n(8),u=n(9),l=n(20),d=n(21),h=(n(38),n(24)),b=n(1),f=n(27),j=n(17),m=n(29),p=n(19),y=n(13),O=function(){function e(){Object(s.a)(this,e)}return Object(u.a)(e,null,[{key:"requireSession",value:function(){return y.a.hasSession()}},{key:"requireNoSession",value:function(){return!y.a.hasSession()}}]),e}(),g=r.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,570))})),v=r.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,573))})),x=[{name:"Login",path:"/login",exact:!0,component:g,restrictedBy:{validate:O.requireNoSession,redirectOnFailure:"/home"}},{name:"Signup",path:"/signup",exact:!0,component:v,restrictedBy:{validate:O.requireNoSession,redirectOnFailure:"/home"}}],S=[{name:"Home",path:"/home",exact:!0,component:r.a.lazy((function(){return n.e(6).then(n.bind(null,577))})),restrictedBy:{validate:O.requireSession,redirectOnFailure:"/"}}],k=[{name:"Default",path:"/",exact:!0,component:r.a.lazy((function(){return n.e(7).then(n.bind(null,576))})),restrictedBy:null},{name:"Page 404",path:"/404",exact:!0,component:r.a.lazy((function(){return n.e(8).then(n.bind(null,569))})),restrictedBy:null}].concat(Object(p.a)(x),Object(p.a)(S)),B=n(3);f.b.add(m.a,j.b,j.a);var F=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).loading=function(){return Object(B.jsx)("div",{className:"animated fadeIn pt-1 text-center",children:"Loading..."})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(B.jsx)("div",{className:"App",children:Object(B.jsx)(h.a,{basename:"/react-auth",children:Object(B.jsx)(a.Suspense,{fallback:this.loading(),children:Object(B.jsxs)(b.d,{children:[k.map((function(e,t){return e.component?Object(B.jsx)(b.b,{path:e.path,exact:e.exact,render:function(t){return null==e.restrictedBy||e.restrictedBy.validate()?Object(B.jsx)(e.component,Object(o.a)({},t)):Object(B.jsx)(b.a,{to:{pathname:e.restrictedBy.redirectOnFailure,state:{from:t.location}}})}},t):null})),Object(B.jsx)(b.a,{path:"*",to:"/404"})]})})})})}}]),n}(a.Component),I=function(e){e&&e instanceof Function&&n.e(9).then(n.bind(null,574)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};c.a.render(Object(B.jsx)(r.a.StrictMode,{children:Object(B.jsx)(F,{})}),document.getElementById("root")),I()}},[[47,2,3]]]);
//# sourceMappingURL=main.b64d1ff4.chunk.js.map
(this["webpackJsonpnews-app"]=this["webpackJsonpnews-app"]||[]).push([[0],{20:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(2),a=n.n(s),r=n(12),i=n.n(r),o=(n(20),n(14)),j=n(13),l=n.n(j);var d=function(e){var t=e.data;return Object(c.jsxs)("div",{className:"news",children:[Object(c.jsx)("h1",{className:"news__title",children:t.title}),Object(c.jsx)("p",{className:"news__desc",children:t.description}),Object(c.jsx)("span",{className:"news__author",children:t.author})," ",Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"news__published",children:new Intl.DateTimeFormat("en-US",{month:"short",day:"2-digit",year:"numeric"}).format(new Date(t.publishedAt))}),Object(c.jsx)("span",{className:"news__source",children:t.source.name})]})},u=function(){var e=Object(s.useContext)(b);return Object(c.jsxs)("div",{children:[Object(c.jsxs)("header",{children:[" ",Object(c.jsx)("navbar",{children:Object(c.jsx)("h1",{className:"head__text",children:"World today "})})]}),Object(c.jsx)("div",{className:"all__news",children:e?e.articles.map((function(e){return Object(c.jsx)(d,{data:e},e.url)})):"Loading"})]})},b=Object(s.createContext)(),h=function(e){var t=Object(s.useState)(),n=Object(o.a)(t,2),a=n[0],r=n[1];return Object(s.useEffect)((function(){console.log("console"),l.a.get("http://newsapi.org/v2/everything?q=bitcoin&from=2020-10-23&sortBy=publishedAt&apiKey=f0cc6e9dae1f44c9973c729d9bf07c1c").then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(c.jsx)(b.Provider,{value:a,children:Object(c.jsx)(u,{})})};n(38);var O=function(){return Object(c.jsx)(h,{})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),f()}},[[39,1,2]]]);
//# sourceMappingURL=main.d78ea84b.chunk.js.map
(this["webpackJsonpgh-page-alex-react"]=this["webpackJsonpgh-page-alex-react"]||[]).push([[0],{18:function(e,n,t){e.exports=t(30)},23:function(e,n,t){},29:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),l=t(15),i=t.n(l),o=t(7),r=t(5),u=t(10),s=[{link:"/",title:"Main"},{link:"/functions",title:"Functions",subMenu:[{link:"/functions/anagram",title:"Anagram"}]},{link:"/english",title:"English"},{link:"/about",title:"About"}],m=(t(23),function(){var e=Object(a.useState)(window.location.hash.slice(1)),n=Object(u.a)(e,2),t=n[0],l=n[1],i=Object(a.useState)(!1),r=Object(u.a)(i,2),m=r[0],p=r[1];return Object(a.useEffect)((function(){l(window.location.hash.split("/"))}),[m]),c.a.createElement("nav",{className:"nav flex-column"},s.map((function(e){var n=e.link,a=e.title,l=e.subMenu,i="/".concat(t[1])===n?"text-dark":"";return c.a.createElement("div",{key:n,onClick:function(){return p(!m)}},c.a.createElement(o.b,{to:n,key:n,className:"nav-link ".concat(i)},a),Array.isArray(l)&&"/".concat(t[1])===n&&(null===l||void 0===l?void 0:l.map((function(e){var n=e.link,a=e.title,l="/".concat(t[1],"/").concat(t[2])===n?"text-success":"";return c.a.createElement(o.b,{to:n,key:n,className:"nav-link ".concat(l)},a)}))))})))}),p=(t(29),Object(a.lazy)((function(){return t.e(7).then(t.bind(null,31))}))),b=Object(a.lazy)((function(){return t.e(4).then(t.bind(null,32))})),f=Object(a.lazy)((function(){return t.e(5).then(t.bind(null,33))})),h=Object(a.lazy)((function(){return t.e(6).then(t.bind(null,34))})),E=Object(a.lazy)((function(){return t.e(3).then(t.bind(null,35))}));var d=function(){return c.a.createElement(o.a,{basename:"/"},c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"App-sideMenu bg-light"},c.a.createElement(m,null)),c.a.createElement("div",{className:"App-mainContent"},c.a.createElement(a.Suspense,{fallback:null},c.a.createElement(r.c,null,c.a.createElement(r.a,{path:"/about",component:b}),c.a.createElement(r.a,{path:"/functions",exact:!0,component:h}),c.a.createElement(r.a,{path:"/functions/anagram",component:E}),c.a.createElement(r.a,{path:"/english",component:f}),c.a.createElement(r.a,{path:"/",component:p}))))))};i.a.render(c.a.createElement(d,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.788e583d.chunk.js.map
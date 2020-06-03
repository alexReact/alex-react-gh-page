(this["webpackJsonpgh-page-alex-react"]=this["webpackJsonpgh-page-alex-react"]||[]).push([[4],{35:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n(0),s=n.n(r),l={anagram:{title:"Anagram",question:"\u041d\u0443\u0436\u043d\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u044e, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442, \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043b\u0438 \u0434\u0432\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u0430\u043d\u0430\u0433\u0440\u0430\u043c\u043c\u0430\u043c\u0438, \u043f\u0440\u0438\u0447\u0435\u043c \u0440\u0435\u0433\u0438\u0441\u0442\u0440 \u0431\u0443\u043a\u0432 \u043d\u0435 \u0438\u043c\u0435\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f. \u0423\u0447\u0438\u0442\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u043b\u0438\u0448\u044c \u0441\u0438\u043c\u0432\u043e\u043b\u044b; \u043f\u0440\u043e\u0431\u0435\u043b\u044b \u0438\u043b\u0438 \u0437\u043d\u0430\u043a\u0438 \u043f\u0440\u0435\u043f\u0438\u043d\u0430\u043d\u0438\u044f \u0432 \u0440\u0430\u0441\u0447\u0435\u0442 \u043d\u0435 \u0431\u0435\u0440\u0443\u0442\u0441\u044f. finder and Friend",code:[{title:"React",code:'\n        const anagram = (string1: string, string2: string) => {\n          const str1: Array<string> = string1\n            .replace(/[^w]/g, "")\n            .toLowerCase()\n            .split("");\n            \n          const str2: Array<string> = string2\n            .replace(/[^w]/g, "")\n            .toLowerCase()\n            .split("");\n        \n          if (str1.length !== str2.length) {\n            setResult("\u041d\u0435\u0442, \u044d\u0442\u043e \u043d\u0435 \u0430\u043d\u0430\u0433\u0440\u0430\u043c\u0430");\n            return;\n          }\n        \n          const first = str1.filter((i) => str2.includes(i)).length === str1.length;\n          const second = str2.filter((i) => str1.includes(i)).length === str2.length;\n        \n          first && second\n            ? setResult("\u0414\u0430, \u044d\u0442\u043e \u0430\u043d\u0430\u0433\u0440\u0430\u043c\u0430")\n            : setResult("\u041d\u0435\u0442, \u044d\u0442\u043e \u043d\u0435 \u0430\u043d\u0430\u0433\u0440\u0430\u043c\u0430");\n        };      \n    '},{title:"Vanilla",code:'\n        function anagram(str1 = "finder", str2 = "Friend") {\n          str1 = str1\n            .replace(/[^w]/g, "")\n            .toLowerCase()\n            .split("");\n        \n          str2 = str2\n            .replace(/[^w]/g, "")\n            .toLowerCase()\n            .split("");\n        \n          if (str1.length !== str2.length) {\n            return false;\n          }\n        \n          const first = str1.filter(i => str2.includes(i)).length === str1.length;\n          const second = str2.filter(i => str1.includes(i)).length === str2.length;\n        \n          return first && second;\n        }\n  '}]}},c=function(e){var t=e.code,n=Object(r.useState)(t[0].title),l=Object(a.a)(n,2),c=l[0],i=l[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement("ul",{className:"nav nav-tabs"},t.map((function(e,t){var n=e.title;return s.a.createElement("li",{key:t,className:"nav-item",onClick:function(){return i(n)}},s.a.createElement("span",{className:"nav-link ".concat(c===n?"active":"")},n))}))),s.a.createElement("div",{className:"tab-content",id:"myTabContent"},t.map((function(e,t){var n=e.code,a=e.title;return s.a.createElement("div",{key:t,className:"tab-pane fade ".concat(c===a?"show active":""),role:"tabpanel"},s.a.createElement("pre",null,n))}))))};t.default=function(){var e=Object(r.useState)("finder"),t=Object(a.a)(e,2),n=t[0],i=t[1],o=Object(r.useState)("Friend"),u=Object(a.a)(o,2),g=u[0],f=u[1],m=Object(r.useState)(""),d=Object(a.a)(m,2),p=d[0],h=d[1],v=Object(r.useState)(!1),b=Object(a.a)(v,2),w=b[0],E=b[1];Object(r.useEffect)((function(){j(n,g)}),[n,g]);var j=function(e,t){var n=e.replace(/[^\w]/g,"").toLowerCase().split(""),a=t.replace(/[^\w]/g,"").toLowerCase().split("");if(n.length===a.length){var r=n.filter((function(e){return a.includes(e)})).length===n.length,s=a.filter((function(e){return n.includes(e)})).length===a.length;console.log(r,s),h(r&&s?"\u0414\u0430, \u044d\u0442\u043e \u0430\u043d\u0430\u0433\u0440\u0430\u043c\u0430":"\u041d\u0435\u0442, \u044d\u0442\u043e \u043d\u0435 \u0430\u043d\u0430\u0433\u0440\u0430\u043c\u0430")}else h("\u041d\u0435\u0442, \u044d\u0442\u043e \u043d\u0435 \u0430\u043d\u0430\u0433\u0440\u0430\u043c\u0430")};return s.a.createElement("div",{className:"Anagram"},s.a.createElement("h3",null,"Anagram"),s.a.createElement("p",null,l.anagram.question),s.a.createElement("input",{type:"text",value:n,onChange:function(e){var t=e.target.value;return i(t)}}),s.a.createElement("input",{type:"text",value:g,onChange:function(e){var t=e.target.value;return f(t)}}),s.a.createElement("div",null,"Result: ",p),s.a.createElement("button",{className:"btn btn-success",onClick:function(){return E(!w)}},w?"Hide code":"Show code"),w&&s.a.createElement(c,{code:l.anagram.code}))}}}]);
//# sourceMappingURL=4.913b402b.chunk.js.map
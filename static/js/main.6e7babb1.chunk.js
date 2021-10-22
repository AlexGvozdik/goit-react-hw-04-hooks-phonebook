(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(6),c=n.n(r),o=(n(14),n(9)),i=n(2),u=n(18),s=n(0);function b(e){var t=e.onHandleSubmit,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],o=r[1],u=Object(a.useState)(""),b=Object(i.a)(u,2),l=b[0],d=b[1],m=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":o(a);break;case"number":d(a);break;default:return}},j=function(){o(""),d("")};return Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({name:c,number:l}),j()},children:[Object(s.jsx)("input",{onChange:m,type:"text",name:"name",value:c,placeholder:"Enter your name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(s.jsx)("input",{onChange:m,placeholder:"Enter your phone number",type:"tel",name:"number",value:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(s.jsx)("button",{type:"submit",children:"Submit"})]})}var l=function(e){var t=e.filtered,n=e.value;return Object(s.jsx)("input",{type:"text",name:"filter",value:n,onChange:function(e){return t(e)}})},d=n(8),m=function(e){var t=e.contacts,n=e.deleteContact;return Object(s.jsx)("ul",{children:t.map((function(e){var t=e.name,a=e.number,r=e.id;return Object(s.jsxs)("li",{children:[Object(s.jsx)(d.a,{className:"icon"}),Object(s.jsxs)("p",{children:[t,": ",a]}),Object(s.jsx)("button",{className:"btnDelete",type:"button",onClick:function(){return n(r)},children:"Delete"})]},r)}))})},j=n(7);function f(){var e=Object(a.useState)((function(){var e;return null!==(e=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==e?e:j})),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),d=Object(i.a)(c,2),f=d[0],O=d[1];Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Phonebook"}),Object(s.jsx)(b,{onHandleSubmit:function(e){var t=e.name,a=e.number,c={id:Object(u.a)(),name:t,number:a};n.find((function(e){return e.name.toLowerCase()===c.name.toLowerCase()}))?alert("".concat(t," is already in contacts")):r((function(e){return[c].concat(Object(o.a)(e))}))}}),Object(s.jsx)("h2",{children:"Contacts"}),Object(s.jsx)(l,{value:f,filtered:function(e){O(e.target.value)}}),Object(s.jsx)(m,{deleteContact:function(e){r((function(t){return t.filter((function(t){return t.id!==e}))}))},contacts:n.filter((function(e){return e.name.toLowerCase().includes(f.toLowerCase())}))})]})}c.a.render(Object(s.jsx)(f,{}),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')}},[[16,1,2]]]);
//# sourceMappingURL=main.6e7babb1.chunk.js.map
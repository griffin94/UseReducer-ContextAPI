(this["webpackJsonpuse-reducer-context-api"]=this["webpackJsonpuse-reducer-context-api"]||[]).push([[0],{26:function(n,e,t){"use strict";t.r(e);var i,r,c,a,o,d=t(0),u=t.n(d),s=t(11),p=t.n(s),l=t(2),b=t(4),j=t(15),x=t(16),m=t(3),f=t(1);var O,h=m.b.div(i||(i=Object(l.a)(["\n  max-width: 400px;\n  margin: 20px auto;\n"]))),g=m.b.form(r||(r=Object(l.a)(["\n  display: flex;\n  width: 100%;\n\n  input {\n    width: 100%;\n    margin-right: 10px;\n    padding: 0 8px;\n    border: 1px solid black;\n    border-radius: 8px;\n    outline: none;\n    height: 35px;\n  }\n"]))),v=m.b.button(c||(c=Object(l.a)(["\n  padding: 0 8px;\n  border: 1px solid black;\n  border-radius: 6px;\n  margin-left: 8px;\n  height: 35px;\n  &:first-of-type {\n    margin-left: 0;\n  }\n"]))),k=m.b.ul(a||(a=Object(l.a)(["\n  list-style: none;\n  margin-top: 10px;\n"]))),y=m.b.li(o||(o=Object(l.a)(["\n  border: 1px solid black;\n  border-radius: 8px;\n  padding: 4px 8px;\n  margin-bottom: 8px;\n  display: flex;\n  justify-content: space-between;\n  background-color: ",";\n\n  div {\n    display: flex;\n    margin-left: 8px;\n  }\n"])),(function(n){return n.completed?"lime":"tomato"})),w=function(){var n=Object(d.useState)([]),e=Object(x.a)(n,2),t=e[0],i=e[1],r=function(n){return n.reduce((function(n,e){return Math.max(n,e.id)}),-1)+1};return Object(f.jsxs)(h,{children:[Object(f.jsxs)(g,{onSubmit:function(n){n.preventDefault();var e=n.target.elements["task-name"],c=e.value.trim();c&&i([].concat(Object(j.a)(t),[{id:r(t),completed:!1,edit:!1,value:c}])),e.value="",e.focus()},children:[Object(f.jsx)("input",{type:"text",name:"task-name",autoComplete:"off"}),Object(f.jsx)(v,{children:"Add"})]}),Object(f.jsx)(k,{children:t.map((function(n){return Object(f.jsxs)(y,{completed:n.completed,onClick:function(){return e=n.id,void i(t.map((function(n){return n.id===e?Object(b.a)(Object(b.a)({},n),{},{completed:!n.completed}):n})));var e},children:[n.edit?Object(f.jsxs)(g,{onSubmit:function(e){return function(n,e){n.preventDefault();var r=n.target.elements["task-name"].value.trim();i(t.map((function(n){return n.id===e?Object(b.a)(Object(b.a)({},n),{},{edit:!n.edit,value:r}):n})))}(e,n.id)},children:[Object(f.jsx)("input",{type:"text",name:"task-name",autoComplete:"off"}),Object(f.jsx)(v,{children:"Save"})]}):n.value,Object(f.jsxs)("div",{children:[Object(f.jsx)(v,{onClick:function(e){return function(n,e){n.stopPropagation(),i(t.filter((function(n){return n.id!==e})))}(e,n.id)},children:"Remove"}),Object(f.jsx)(v,{onClick:function(e){return function(n,e){n.stopPropagation(),i(t.map((function(n){return n.id===e?Object(b.a)(Object(b.a)({},n),{},{edit:!n.edit}):n})))}(e,n.id)},children:n.edit?"No_Edit":"Edit"})]})]},n.id)}))})]})},C=Object(m.a)(O||(O=Object(l.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'sans-serif'\n  }\n"])));var S=function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(C,{}),Object(f.jsx)(w,{})]})};p.a.render(Object(f.jsx)(u.a.StrictMode,{children:Object(f.jsx)(S,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.779fca63.chunk.js.map
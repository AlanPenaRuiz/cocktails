(this.webpackJsonpbebidas=this.webpackJsonpbebidas||[]).push([[0],{29:function(e,t,a){e.exports=a(56)},34:function(e,t,a){},35:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c),s=(a(34),a(35),function(){return r.a.createElement("header",{className:"bg-alert"},r.a.createElement("h1",null,"Busca Recetas de Bebidas"))}),l=a(14),i=a(18),u=a(3),m=a(7),d=a.n(m),b=a(9),p=a(10),f=a.n(p),h=Object(n.createContext)(),v=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),c=a[0],o=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",e.next=3,f.a.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");case 3:t=e.sent,o(t.data.drinks);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(h.Provider,{value:{categorias:c}},e.children)},g=Object(n.createContext)(),E=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)({nombre:"",categoria:""}),l=Object(u.a)(s,2),i=l[0],m=l[1],p=Object(n.useState)(!1),h=Object(u.a)(p,2),v=h[0],E=h[1],j=i.nombre,O=i.categoria;return Object(n.useEffect)((function(){v&&function(){var e=Object(b.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=".concat(j,"&c=").concat(O),e.next=3,f.a.get(t);case 3:a=e.sent,o(a.data.drinks);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[i]),r.a.createElement(g.Provider,{value:{recetas:c,buscarRecetas:m,guardarConsultar:E}},e.children)},j=function(){var e=Object(n.useState)({nombre:"",categoria:""}),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useContext)(h).categorias,s=Object(n.useContext)(g),m=s.buscarRecetas,d=s.guardarConsultar,b=function(e){c(Object(i.a)(Object(i.a)({},a),{},Object(l.a)({},e.target.name,e.target.value)))};return r.a.createElement("form",{className:"col-12",onSubmit:function(e){e.preventDefault(),m(a),d(!0)}},r.a.createElement("fieldset",{className:"text-center"}),r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("input",{name:"nombre",className:"form-control",type:"text",placeholder:"Buscar por ingrediente",onChange:b})),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("select",{className:"form-control",name:"categoria",onChange:b},r.a.createElement("option",{value:""},"-- Seleccion Categoria --"),o.map((function(e){return r.a.createElement("option",{key:e.strCategory,value:e.strCategory},e.strCategory)})))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("input",{type:"submit",className:"btn btn-block btn-primary",value:"Buscar Bebida"}))))},O=Object(n.createContext)(),w=function(e){var t=Object(n.useState)(null),a=Object(u.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)({}),l=Object(u.a)(s,2),i=l[0],m=l[1];return Object(n.useEffect)((function(){(function(){var e=Object(b.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c){e.next=2;break}return e.abrupt("return");case 2:return t="https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(c),e.next=5,f.a.get(t);case 5:a=e.sent,m(a.data.drinks[0]);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),r.a.createElement(O.Provider,{value:{informacion:i,guardarIdReceta:o,guardarReceta:m}},e.children)},k=a(70),x=a(69);function N(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var y=Object(x.a)((function(e){return{paper:{position:"absolute",width:300,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(2,4,3),overflow:"scroll",height:"100%",maxHeight:500,display:"block"},header:{padding:"12px 0",borderBottom:"1px solid darkgrey"},content:{padding:"12px 0",overflow:"scroll"}}})),C=function(e){var t=e.receta,a=Object(n.useState)(N),c=Object(u.a)(a,1)[0],o=Object(n.useState)(!1),s=Object(u.a)(o,2),l=s[0],i=s[1],m=y(),d=Object(n.useContext)(O),b=d.informacion,p=d.guardarIdReceta,f=d.guardarReceta;return r.a.createElement("div",{className:"col-md-4 mb3"},r.a.createElement("div",{className:"card"},r.a.createElement("h2",{className:"card-header"},t.strDrink),r.a.createElement("img",{className:"card_image",src:t.strDrinkThumb,alt:"Imagen de ".concat(t.strDrink),onClick:function(){p(t.idDrink),i(!0)}}),r.a.createElement(k.a,{open:l,onClose:function(){p(null),f({}),i(!1)}},r.a.createElement("div",{style:c,className:m.paper},r.a.createElement("h2",null,b.strDrink),r.a.createElement("h3",{className:"mt-4"},"Instrucciones"),r.a.createElement("p",null,b.strInstructions),r.a.createElement("img",{className:"img-fluid my-4",src:b.strDrinkThumb}),r.a.createElement("h3",null,"Ingredientes y cantidades"),r.a.createElement("ul",null,function(e){for(var t=[],a=1;a<16;a++)e["strIngredient".concat(a)]&&t.push(r.a.createElement("li",{key:a},e["strIngredient".concat(a)]," ",e["strMeasure".concat(a)]));return t}(b))))))},S=function(){var e=Object(n.useContext)(g).recetas;return r.a.createElement("div",{className:"row mt-5"},e.map((function(e){return r.a.createElement(C,{key:e.idDrink,receta:e})})))};var I=function(){return r.a.createElement(v,null,r.a.createElement(E,null,r.a.createElement(w,null,r.a.createElement(s,null),r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row"},r.a.createElement(j,null)),r.a.createElement(S,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.843b0b63.chunk.js.map
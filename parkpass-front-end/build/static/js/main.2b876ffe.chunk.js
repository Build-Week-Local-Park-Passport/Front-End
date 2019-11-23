(this["webpackJsonpparkpass-front-end"]=this["webpackJsonpparkpass-front-end"]||[]).push([[0],{106:function(e,t,a){e.exports=a(136)},134:function(e,t,a){e.exports=a.p+"static/media/Merriweather-Regular.c97a9fc2.ttf"},135:function(e,t,a){e.exports=a.p+"static/media/Raleway-Regular.9942588a.ttf"},136:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),l=a(13),i=(a(62),a(87)),m=a(8),s=a(35),u=function(){return localStorage.getItem("token")},p=function(e){e.preventDefault(),localStorage.removeItem("token"),localStorage.removeItem("username"),window.location.reload(!0)},d=a(170),b=a(82),f=a.n(b),g=Object(d.a)({nav:{padding:"10px 0",display:"flex",justifyContent:"space-around",borderBottom:"1px solid lightgray",backgroundColor:"green",alignItems:"center"},logo:{height:"45px",width:"auto",float:"left"},link:{color:"white",textDecoration:"none",fontFamily:"Raleway",fontSize:"18px"},button:{border:"none",padding:"10px 20px",borderRadius:"5px",backgroundColor:"#3F51B5",color:"White",fontFamily:"Raleway",fontSize:"16px"}});function E(){var e=u(),t=g();return r.a.createElement("div",{className:t.div},r.a.createElement("nav",{className:t.nav},r.a.createElement(l.b,{to:"/"},r.a.createElement("img",{src:f.a,className:t.logo})),r.a.createElement(l.b,{to:"/",className:t.link},"Home"),!e&&r.a.createElement(l.b,{to:"/login",className:t.link},"Login"),!e&&r.a.createElement(l.b,{to:"/signup",className:t.link},"Signup"),e&&r.a.createElement(l.b,{to:"/account",className:t.link},"Account"),e&&r.a.createElement("button",{className:t.button,onClick:function(e){return p(e)}},"Logout")))}var v=a(197),O=a(17),h=a.n(O),j=a(173),x=a(174),y=a(175),k=a(88),w=a(176),P=a(188),S=a(41),C=a.n(S),N=a(4),D=a(191),F=Object(n.createContext)(),T=Object(d.a)((function(e){return{card:{maxWidth:345,margin:"20px auto",boxShadow:"0 8px 40px -15px rgba(0,0,0,0.3)",borderRadius:"5px",textDecoration:"none"},details:{marginTop:"10px",textAlign:"left"},box:{marginTop:"20px",marginBottom:"-10px"}}})),A=Object(N.a)({iconFilled:{color:"#ff6d75"},iconHover:{color:"#ff3d47"}})(D.a);function I(e){var t=e.name,a=e.location,o=e.description,c=e.addToFaves,l=e.removeFromFaves,i=T(),s=Object(n.useContext)(F),u=Object(n.useState)(!1),p=Object(m.a)(u,2),d=p[0],b=p[1];return r.a.createElement(j.a,{className:i.card},r.a.createElement(x.a,null,r.a.createElement(y.a,null,r.a.createElement(k.a,{gutterBottom:!0,variant:"h5",component:"h2"},t),r.a.createElement(w.a,{variant:"middle"}),r.a.createElement("div",{className:i.details},r.a.createElement(k.a,{variant:"body2",color:"textSecondary",component:"p"},"Location: ",a,r.a.createElement("br",null),"Description: ",o)),r.a.createElement(P.a,{className:i.box,component:"fieldset",mb:3,borderColor:"transparent"},r.a.createElement(k.a,{component:"legend"},"Excellent"),r.a.createElement(A,{name:"customized-color",value:5,icon:r.a.createElement(C.a,{fontSize:"inherit"})})))),s&&r.a.createElement("button",{onClick:function(e){return function(e){e.preventDefault(),e.stopPropagation();var n={name:t,location:a,description:o};b(!d),d?l(n):c(n)}(e)}},d?"\u2763\ufe0f":"\u2661"))}var L=a(196),R=a(194),W=a(189),B=a(179),z=Object(d.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120,display:"stretch",marginTop:"15px"},selectEmpty:{marginTop:e.spacing(2)},Link:{textDecoration:"none",color:"inherit"}}}));function M(e){var t=z(),a=Object(n.useState)([]),o=Object(m.a)(a,2),c=o[0],i=o[1],s=Object(n.useState)(""),u=Object(m.a)(s,2),p=u[0],d=u[1],b=Object(n.useState)(""),f=Object(m.a)(b,2),g=f[0],E=f[1],O=r.a.useRef(null),j=r.a.useState(0),x=Object(m.a)(j,2),y=x[0],k=x[1];r.a.useEffect((function(){k(O.current.offsetWidth)}),[]),Object(n.useEffect)((function(){h.a.get("https://park-passport.herokuapp.com/api/parks").then((function(e){var t=e.data.filter((function(e){return e.name.toLowerCase().includes(p.toLocaleLowerCase())}));i(t)}))}),[p]);var w=function(e){d(e.target.value),E(e.target.value)};return r.a.createElement("section",{className:"search-form"},r.a.createElement(v.a,{id:"name",label:"Search Parks",type:"search",margin:"normal",variant:"outlined",value:p,onChange:w}),r.a.createElement(B.a,{variant:"outlined",className:t.formControl},r.a.createElement(L.a,{ref:O,id:"demo-simple-select-outlined-label"},"Filters"),r.a.createElement(W.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:g,onChange:w,labelWidth:y},r.a.createElement(R.a,{value:""},r.a.createElement("em",null,"None")),r.a.createElement(R.a,{value:""},"Pool"),r.a.createElement(R.a,{value:20},"Hiking"),r.a.createElement(R.a,{value:"Warrior"},"Fishing"),r.a.createElement(R.a,{value:50},"Wildlife"),r.a.createElement(R.a,{value:60},"Camping"),r.a.createElement(R.a,{value:70},"Disc Golf"),r.a.createElement(R.a,{value:"Lacy"},"Dog Park"),r.a.createElement(R.a,{value:90},"Picnic Area"),r.a.createElement(R.a,{value:"Rainey"},"Playground"),r.a.createElement(R.a,{value:110},"Soccer Field"),r.a.createElement(R.a,{value:120},"Paddle Boats"),r.a.createElement(R.a,{value:130},"Tennis Courts"),r.a.createElement(R.a,{value:140},"Walking Paths"),r.a.createElement(R.a,{value:150},"Bird Watching"),r.a.createElement(R.a,{value:160},"Volletball Court"),r.a.createElement(R.a,{value:170},"Basketball Court"))),c.map((function(a){return r.a.createElement(l.b,{key:a.id,className:t.Link,to:"parks/".concat(a.id)},r.a.createElement(I,{name:a.name,description:a.description,location:a.location,review:a.review,addToFaves:e.addToFaves,removeFromFaves:e.removeFromFaves}))})))}var H=a(58),_=function(e){var t=e.component,a=Object(H.a)(e,["component"]),n=localStorage.getItem("token");return r.a.createElement(s.b,Object.assign({},a,{render:function(e){return n?r.a.createElement(t,e):r.a.createElement(s.a,{to:"/login"})}}))},U=function(){var e=localStorage.getItem("token");return h.a.create({headers:{Authorization:e}})},G=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),c=Object(m.a)(o,2),l=c[0],i=c[1];return Object(n.useEffect)((function(){h.a.get("https://park-passport.herokuapp.com/api/parks").then((function(e){r(e.data)})).catch((function(e){console.log("---Api Call Error---"),console.log(e),i(!0)}))}),[]),[a,l]},J=Object(n.createContext)(),V=a(15),Y=a(180),q=a(3),K=a(85),Q=a.n(K),X=a(181);function Z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function $(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Z(a,!0).forEach((function(t){Object(V.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ee=Object(d.a)({textField:{border:"1px solid lightgray",padding:"10px 10px",borderRadius:"5px"},button:{border:"none",padding:"10px 20px",borderRadius:"5px",boxShadow:"1px 10px 5px -6px rgba(194,194,194,1)"}}),te=Object(N.a)({iconFilled:{color:"#ff6d75"},iconHover:{color:"#ff3d47"}})(D.a);function ae(e){var t=e.values,a=e.park,o=Object(n.useContext)(F),c={park_id:a.id,rating:"",comment:""},l=Object(n.useState)(c),i=Object(m.a)(l,2),s=i[0],u=i[1],p=Object(n.useState)(0),d=Object(m.a)(p,2),b=d[0],f=d[1],g=function(e){u($({},s,Object(V.a)({},e.target.name,e.target.value)))},E=ee();return r.a.createElement("div",{className:"Review"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),o?(U().post("https://park-passport.herokuapp.com/api/parks/ratings/test",t).then((function(e){console.log("fired",e)})).catch((function(e){console.log(e)})),u(c)):(alert("You must be logged in to do that."),window.location.href="/login")}},r.a.createElement(v.a,{type:"hidden",id:"park_id",name:"park_id",margin:"normal",label:"",value:s.park_id,onChange:g}),r.a.createElement(v.a,{type:"text",id:"comment",name:"comment",margin:"normal",label:"Comment",value:s.comment,onChange:g}),r.a.createElement("br",null),r.a.createElement(te,{name:"simple-controlled",value:b,icon:r.a.createElement(C.a,{fontSize:"inherit"}),onChange:function(e){u($({},s,{rating:e})),f(e)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:E.button},"SUBMIT")))}function ne(e){return r.a.createElement("div",null,r.a.createElement(ae,{park:e.park}),e.review&&e.review.map((function(e){return r.a.createElement("div",{key:e.park_id},r.a.createElement("p",null,e.rating),r.a.createElement("p",null,e.comment))})))}var re=Object(d.a)((function(e){return{card:{maxWidth:345,margin:"20px auto",boxShadow:"0 8px 40px -15px rgba(0,0,0,0.3)",borderRadius:"5px"},details:{marginTop:"10px",textAlign:"left"},box:{marginTop:"20px",marginBottom:"-10px"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},button:{marginTop:"25px"}}})),oe=Object(N.a)({iconFilled:{color:"#ff6d75"},iconHover:{color:"#ff3d47"}})(D.a),ce=function(e){var t=Object(n.useContext)(F),a=Object(n.useState)({id:"",name:"",description:"",location:"",comment:"",rating:""}),o=Object(m.a)(a,2),c=o[0],i=o[1],s=e.match.params.id;Object(n.useEffect)((function(){h.a.get("https://park-passport.herokuapp.com/api/parks/".concat(s)).then((function(t){var a=t.data;i({id:a.id,name:a.name,description:a.description,location:a.location,comment:a.comment,rating:a.rating}),e.setParkToEdit({id:a.id,name:a.name,description:a.description,location:a.location,comment:a.comment,rating:a.rating})})).catch((function(e){console.error(e)}))}),[]);var u=re(),p=Object(n.useState)(0),d=Object(m.a)(p,2),b=(d[0],d[1],Object(n.useState)(!1)),f=Object(m.a)(b,2),g=f[0],E=f[1];return r.a.createElement(j.a,{className:u.card},r.a.createElement(x.a,null,r.a.createElement(y.a,null,r.a.createElement(k.a,{gutterBottom:!0,variant:"h5",component:"h2"},c.name),r.a.createElement(w.a,{variant:"middle"}),r.a.createElement("div",{className:u.details},r.a.createElement(k.a,{variant:"body2",color:"textSecondary",component:"p"},"Location: ",c.location,r.a.createElement("br",null),"Description: ",c.description)),r.a.createElement(P.a,{className:u.box,component:"fieldset",mb:3,borderColor:"transparent"},r.a.createElement(k.a,{component:"legend"},"Excellent"),r.a.createElement(oe,{name:"customized-color",value:5,icon:r.a.createElement(C.a,{fontSize:"inherit"})})),r.a.createElement(Y.a,{className:Object(q.a)(u.expand,Object(V.a)({},u.expandOpen,g)),onClick:function(){E(!g)},"aria-expanded":g,"aria-label":"show more"},r.a.createElement(Q.a,null))),r.a.createElement(X.a,{in:g,timeout:"auto",unmountOnExit:!0},r.a.createElement(y.a,null,r.a.createElement(ne,{park:c})))),t&&r.a.createElement(l.b,{to:"/editpark"},"Edit Park"),t&&r.a.createElement("button",{onClick:function(){window.confirm("Are you sure you wanna delete the entire park??")&&h.a.delete("https://park-passport.herokuapp.com/api/parks/".concat(s)).then((function(t){console.log(t),e.history.push("/")})).catch((function(e){console.log("-----------------\x3e>>>>>>>>>>>>>"),console.log(e)}))}},"Delete Park"),r.a.createElement("button",{onClick:function(){return e.history.goBack()}},"Go Back"))},le=a(182),ie=a(36),me=a.n(ie),se=Object(d.a)((function(e){return{container:{display:"block",flexWrap:"wrap",maxWidth:345,margin:"20px auto"},input:{margin:e.spacing(1),marginTop:"20px"},button:{margintop:"20px"}}})),ue=function(e){var t=se(),a=Object(n.useState)({name:"",description:"",location:""}),o=Object(m.a)(a,2);o[0],o[1];return r.a.createElement("div",{className:t.container},r.a.createElement("form",null,r.a.createElement(v.a,{id:"standard-basic",className:t.textField,label:"Add New Park",margin:"normal"}),r.a.createElement(v.a,{id:"standard-basic",className:t.textField,label:"Add Park Location",margin:"normal"}),r.a.createElement(v.a,{id:"standard-basic",className:t.textField,label:"Add Park Description",margin:"normal"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(le.a,{variant:"contained",color:"primary",className:t.button,endIcon:r.a.createElement(me.a,null)},"Send")))};function pe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function de(e){var t=e.parkToEdit,a=Object(H.a)(e,["parkToEdit"]),o=Object(d.a)((function(e){return{container:{display:"block",alignItems:"center",justifyContent:"center",maxWidth:345,margin:"20px auto"},input:{margin:e.spacing(1),marginTop:"20px"},button:{margintop:"20px"},dialog:{maxWidth:345,display:"block"},fab:{margin:e.spacing(1)}}}))(),c=Object(n.useState)({id:t.id,name:t.name,description:t.description,location:t.location}),l=Object(m.a)(c,2),i=l[0],s=l[1],u=function(e){s(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?pe(a,!0).forEach((function(t){Object(V.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):pe(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},i,Object(V.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",{className:o.container},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),U().put("https://park-passport.herokuapp.com/api/parks/".concat(i.id),{name:i.name,description:i.description,location:i.location}).then((function(e){console.log(e),a.history.push("/")}))}},r.a.createElement("div",null,r.a.createElement(v.a,{id:"standard-basic",className:o.textField,label:"Park Name",margin:"normal",name:"name",value:i.name,onChange:u}),r.a.createElement(v.a,{id:"standard-basic",className:o.textField,label:"Description",margin:"normal",multiline:!0,rowsMax:"4",name:"description",value:i.description,onChange:u}),r.a.createElement(v.a,{id:"standard-basic",className:o.textField,label:"Location",margin:"normal",name:"location",value:i.location,onChange:u})),r.a.createElement(le.a,{type:"submit",variant:"contained",color:"primary",className:o.button,endIcon:r.a.createElement(me.a,null)},"Save")))}function be(e){var t=e.faves,a=e.remove,n=localStorage.getItem("username");return r.a.createElement("div",null,r.a.createElement("p",null,n),r.a.createElement("h1",null,"My Favorites"),t&&t.map((function(e,t){return console.log(e),r.a.createElement("div",{key:t},r.a.createElement("h3",null,e.name),r.a.createElement("p",null,e.description),r.a.createElement("button",{onClick:function(){return a(e)}},"Remove"))})))}function fe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ge(e){var t=Object(n.useState)({username:"",password:""}),a=Object(m.a)(t,2),o=a[0],c=a[1],i=function(e){c(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?fe(a,!0).forEach((function(t){Object(V.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):fe(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},o,Object(V.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),h.a.post("https://park-passport.herokuapp.com/api/auth/login",o).then((function(t){console.log(t),localStorage.setItem("token",t.data.token),localStorage.setItem("username",o.username),e.history.push("/")})).catch((function(e){return console.log(e)}))}},r.a.createElement("input",{type:"text",name:"username",placeholder:"Username",value:o.username,onChange:i}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:o.password,onChange:i}),r.a.createElement("button",{type:"submit"},"Login")),r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(l.b,{to:"/signup"},"Sign Up.")))}function Ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ve(){var e=Object(n.useState)({username:"",password:""}),t=Object(m.a)(e,2),a=t[0],o=t[1],c=function(e){o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ee(a,!0).forEach((function(t){Object(V.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ee(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a,Object(V.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),h.a.post("https://park-passport.herokuapp.com/api/auth/register",a).then((function(e){localStorage.setItem("token",e.data.token),console.log(e)})).catch((function(e){return console.log(e)}))}},r.a.createElement("input",{type:"text",name:"username",placeholder:"Username",value:a.username,onChange:c}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:a.password,onChange:c}),r.a.createElement("button",{type:"submit"},"Register")),r.a.createElement("p",null,"Already have an account? ",r.a.createElement(l.b,{to:"/login"},"Login.")))}var Oe=a(192),he=a(187),je=a(185),xe=a(186),ye=a(184),ke=a(183),we=a(86),Pe=a.n(we);a(81);function Se(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var Ce=Object(d.a)((function(e){return{container:{display:"block",alignItems:"center",justifyContent:"center",maxWidth:345,margin:"20px auto"},input:{margin:e.spacing(1),marginTop:"20px"},button:{margintop:"20px"},dialog:{maxWidth:345,display:"block"},fab:{margin:e.spacing(1)}}})),Ne=function(e){var t=Object(n.useState)({name:"",location:"",description:""}),a=Object(m.a)(t,2),o=a[0],c=a[1],l=function(e){c(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Se(a,!0).forEach((function(t){Object(V.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Se(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},o,Object(V.a)({},e.target.name,e.target.value)))},i=Object(n.useState)(!1),s=Object(m.a)(i,2),u=s[0],p=s[1],d=Ce(),b=function(){p(!1)};return r.a.createElement("div",{className:"addParkButton"},r.a.createElement(ke.a,{color:"primary","aria-label":"add",size:"large",onClick:function(){p(!0)},className:d.fab},r.a.createElement(Pe.a,null)),r.a.createElement(Oe.a,{open:u,onClose:b},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(o),h.a.post("https://park-passport.herokuapp.com/api/parks",o).then((function(e){b(),window.location=window.location,console.log("fired",e)})).catch((function(e){return console.log(e.response)}))}},r.a.createElement(ye.a,{id:"form-dialog-title"},"Fill out the form below"),r.a.createElement(je.a,{className:d.dialog},r.a.createElement(xe.a,null,"Add an awesome park that you've been to!"),r.a.createElement(v.a,{id:"standard-basic",className:d.textField,label:"Add New Park",margin:"normal",name:"name",value:o.name,onChange:l}),r.a.createElement(v.a,{id:"standard-basic",className:d.textField,label:"Add Park Location",margin:"normal",name:"location",value:o.location,onChange:l}),r.a.createElement(v.a,{id:"standard-basic",className:d.textField,label:"Add Park Description",margin:"normal",multiline:!0,rowsMax:"4",name:"description",value:o.description,onChange:l})),r.a.createElement(he.a,null,r.a.createElement(le.a,{type:"submit",variant:"contained",color:"primary",className:d.button,endIcon:r.a.createElement(me.a,null)},"Add Park")))))},De=Object(d.a)({title:{fontFamily:"Merriweather"}});var Fe=Object(s.g)((function(){Object(s.f)().id;var e=u(),t=De(),a=G(),o=Object(m.a)(a,2),c=o[0],l=(o[1],Object(n.useState)([])),p=Object(m.a)(l,2),d=p[0],b=p[1],f=function(e){b([e].concat(Object(i.a)(d)))},g=function(e){var t=d.filter((function(t){return t.name!==e.name}));b(t)},v=Object(n.useState)({}),O=Object(m.a)(v,2),h=O[0],j=O[1];return r.a.createElement(F.Provider,{value:e},r.a.createElement(J.Provider,{value:c},r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement("h1",{className:t.title},"ParkPass App"),r.a.createElement(s.b,{exact:!0,path:"/login",component:ge}),r.a.createElement(s.b,{exact:!0,path:"/signup",component:ve}),r.a.createElement(s.b,{exact:!0,path:"/",render:function(e){return r.a.createElement(M,Object.assign({},e,{addToFaves:f,removeFromFaves:g}))}}),r.a.createElement(s.b,{exact:!0,path:"/account",render:function(e){return r.a.createElement(be,Object.assign({},e,{faves:d,remove:g}))}}),r.a.createElement(_,{exact:!0,path:"/addpark",component:ue}),r.a.createElement(s.b,{exact:!0,path:"/parks/:id",render:function(e){return r.a.createElement(ce,Object.assign({},e,{setParkToEdit:j}))}}),r.a.createElement(s.b,{exact:!0,path:"/editpark",render:function(e){return r.a.createElement(de,Object.assign({},e,{parkToEdit:h}))}}),r.a.createElement(Ne,null))))}));a(134),a(135);c.a.render(r.a.createElement(l.a,null,r.a.createElement(Fe,null)),document.getElementById("root"))},62:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){e.exports=a.p+"static/media/Parkpass.911920ea.png"}},[[106,1,2]]]);
//# sourceMappingURL=main.2b876ffe.chunk.js.map
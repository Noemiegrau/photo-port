(this["webpackJsonpphoto-port"]=this["webpackJsonpphoto-port"]||[]).push([[0],[,,,,,,,,,,,function(e,t,c){},,function(e,t,c){var i={"./commercial/0.jpg":14,"./commercial/1.jpg":15,"./commercial/2.jpg":16,"./commercial/3.jpg":17,"./commercial/4.jpg":18,"./food/0.jpg":19,"./food/1.jpg":20,"./food/2.jpg":21,"./food/3.jpg":22,"./food/4.jpg":23,"./landscape/0.jpg":24,"./landscape/1.jpg":25,"./landscape/2.jpg":26,"./landscape/3.jpg":27,"./landscape/4.jpg":28,"./portraits/0.jpg":29,"./portraits/1.jpg":30,"./portraits/2.jpg":31,"./portraits/3.jpg":32};function a(e){var t=r(e);return c(t)}function r(e){if(!c.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=r,e.exports=a,a.id=13},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/0.6ba0a0b4.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/1.86164d25.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/2.83c111b0.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/3.070e6fe5.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/4.ed3b1a69.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/0.8877b785.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/1.e8b41d95.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/2.a2aa7476.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/3.5be68227.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/4.444be598.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/0.07e46859.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/1.ffe481f4.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/2.ce01b098.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/3.c095b24c.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/4.3aa93bf4.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/0.3af9e960.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/1.5fd176a1.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/2.2a91734e.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/3.47735072.jpg"},function(e,t,c){"use strict";c.r(t);var i=c(1),a=c.n(i),r=c(6),n=c.n(r),s=(c(11),c(2));function o(e){return e.charAt(0).toUpperCase()+e.slice(1)}var l=c(0);var u=function(e){var t=e.categories,c=void 0===t?[]:t,a=e.setCurrentCategory,r=e.currentCategory,n=e.contactSelected,s=e.setContactSelected;return Object(i.useEffect)((function(){document.title=o(r.name)}),[r]),Object(l.jsxs)("header",{className:"flex-row px-1",children:[Object(l.jsx)("h2",{children:Object(l.jsxs)("a",{"data-testid":"link",href:"/",children:[Object(l.jsx)("span",{role:"img","aria-label":"camera",children:" \ud83d\udcf8"})," Oh Snap!"]})}),Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{className:"flex-row",children:[Object(l.jsx)("li",{className:"mx-2 ".concat(n&&"navActive"),children:Object(l.jsx)("a",{"data-testid":"about",href:"#about",onClick:function(){return s(!1)},children:"About me"})}),Object(l.jsx)("li",{className:"mx-2",children:Object(l.jsx)("span",{onClick:function(){return s(!0)},children:"Contact"})}),c.map((function(e){return Object(l.jsx)("li",{className:"mx-1 ".concat(r.name===e.name&&!n&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){a(e),s(!1)},children:o(e.name)})},e.name)}))]})})]})},d=c.p+"static/media/cover-image.533ae8f6.jpg";var m=function(){return Object(l.jsxs)("section",{className:"my-5",children:[Object(l.jsx)("h1",{id:"about",children:"Who am I?"}),Object(l.jsx)("img",{src:d,className:"my-2",style:{width:"100%"},alt:"cover"})]})},p=c(3);var j=function(e){var t=e.onClose,c=e.currentPhoto;return c.name,c.category,c.description,c.index,Object(l.jsx)("div",{className:"modalBackdrop",children:Object(l.jsxs)("div",{className:"modalContainer",children:[Object(l.jsx)("h3",{className:"modalTitle",children:"Photo Name"}),Object(l.jsx)("img",{alt:"current category"}),Object(l.jsx)("p",{children:"Photo Description"}),Object(l.jsx)("button",{onClick:t,type:"button",children:"Close this modal"})]})})},g=function(e){var t=e.category,a=Object(i.useState)(),r=Object(s.a)(a,2),n=r[0],o=r[1],u=Object(i.useState)(!1),d=Object(s.a)(u,2),m=d[0],g=d[1],b=Object(i.useState)([{name:"Grocery aisle",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Grocery booth",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Building exterior",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Restaurant table",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Cafe interior",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Cat green eyes",category:"portraits",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Green parrot",category:"portraits",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Yellow macaw",category:"portraits",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Pug smile",category:"portraits",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Pancakes",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Burrito",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Scallop pasta",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Burger",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Fruit bowl",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Green river",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Docks",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Panoramic village by sea",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Domestic landscape",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Park bench",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"}]),f=Object(s.a)(b,1)[0].filter((function(e){return e.category===t}));return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"flex-row",children:[m&&Object(l.jsx)(j,{currentPhoto:n}),f.map((function(e,i){return Object(l.jsx)("img",{src:c(13)("./".concat(t,"/").concat(i,".jpg")).default,alt:e.name,className:"img-thumbnail mx-1",onClick:function(){return function(e,t){o(Object(p.a)(Object(p.a)({},e),{},{index:t})),g(!m)}(e,i)}},e.name)}))]})})};var b=function(e){var t=e.currentCategory;return Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{"data-testid":"h1tag",children:o(t.name)}),Object(l.jsx)("p",{children:t.description}),Object(l.jsx)(g,{category:t.name})]})},f=c(4);var O=function(){var e=Object(i.useState)({name:"",email:"",message:""}),t=Object(s.a)(e,2),c=t[0],a=t[1],r=Object(i.useState)(""),n=Object(s.a)(r,2),o=n[0],u=n[1],d=c.name,m=c.email,j=c.message;function g(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(t),u(t?"":"Your email is invalid.")}else e.target.value.length?u(""):u("".concat(e.target.name," is required."));o||a(Object(p.a)(Object(p.a)({},c),{},Object(f.a)({},e.target.name,e.target.value)))}return console.log(c),Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{children:"Contact me"}),Object(l.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(c)},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",name:"name",defaultValue:d,onBlur:g})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(l.jsx)("input",{type:"email",name:"email",defaultValue:m,onBlur:g})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{name:"message",rows:"5",defaultValue:j,onBlur:g})]}),o&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:o})}),Object(l.jsx)("button",{type:"submit",children:"Submit"})]})]})};var h=function(){var e=Object(i.useState)([{name:"commercial",description:"Photos of grocery stores, food trucks, and other commercial projects"},{name:"portraits",description:"Portraits of people in my life"},{name:"food",description:"Delicious delicacies"},{name:"landscape",description:"Fields, farmhouses, waterfalls, and the beauty of nature"}]),t=Object(s.a)(e,1)[0],c=Object(i.useState)(t[0]),a=Object(s.a)(c,2),r=a[0],n=a[1],o=Object(i.useState)(!1),d=Object(s.a)(o,2),p=d[0],j=d[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(u,{categories:t,setCurrentCategory:n,currentCategory:r,contactSelected:p,setContactSelected:j}),Object(l.jsx)("main",{children:p?Object(l.jsx)(O,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b,{currentCategory:r}),Object(l.jsx)(m,{})]})})]})};n.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root"))}],[[33,1,2]]]);
//# sourceMappingURL=main.22978458.chunk.js.map
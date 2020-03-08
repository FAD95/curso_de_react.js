(this["webpackJsonpcurso_de_react.js"]=this["webpackJsonpcurso_de_react.js"]||[]).push([[0],{17:function(e,a,t){e.exports=t.p+"static/media/badge-header.b447eaed.svg"},213:function(e,a,t){},214:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),c=t.n(l);t(48),t(49),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=t(3),s=t(4),i=t(6),m=t(5),u=t(7),d=t(30),h=t.n(d),p=(t(50),t(9)),g=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"Navbar navbar navbar-expand-lg navbar-dark"},r.a.createElement(p.b,{className:"navbar-brand",to:"/home"},r.a.createElement("img",{className:"Navbar__brand-logo",src:h.a,alt:"Logo"}),r.a.createElement("span",{className:"font-weight-light"},"Platzi"),r.a.createElement("span",{className:"font-weight-bold"},"Conf")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{className:"nav-link",to:"/badges"},"Badges")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{className:"nav-link",to:"/rickandmorty"},"Rick And Morty"))))))}}]),a}(r.a.Component);var b=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),e.children)},f=(t(29),t(33)),E=t.n(f),v=t(34),N=t.n(v),y=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"home"},r.a.createElement("section",{className:"home__message"},r.a.createElement("img",{className:"home__message--logo",src:N.a,alt:""}),r.a.createElement("h2",null,"Print your badges"),r.a.createElement("p",null,"The easiest way to manage your conference"),r.a.createElement(p.b,{className:"btn btn-primary",to:"/badges"},"Start now")),r.a.createElement("img",{className:"home__img",src:E.a,alt:""})))}}]),a}(r.a.Component),j=t(19),_=t(35),O=t(17),w=t.n(O),k=(t(55),t(56),function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Badge"},r.a.createElement("header",{className:"Badge__header"},r.a.createElement("img",{src:w.a,alt:"Logo de la conferencia"})),r.a.createElement("main",null,r.a.createElement("section",{className:"Badge__section-name"},r.a.createElement("img",{className:"Badge__section-name--avatar",src:"https://es.gravatar.com/avatar?d=identicon",alt:"Avatar"}),r.a.createElement("h1",null,this.props.firstName,r.a.createElement("br",null),this.props.lastName)),r.a.createElement("section",{className:"Badge__section-info"},r.a.createElement("h3",null,this.props.jobTitle),r.a.createElement("span",null,"@",this.props.twitter))),r.a.createElement("footer",{className:"Badge__footer"},"#platziConf")))}}]),a}(r.a.Component)),C=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).handleClick=function(e){console.log("Button clicked")},t.handleSubmit=function(e){e.preventDefault(),console.log("Submited"),console.log(t.state)},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"New Attendant"),r.a.createElement("form",{onSubmit:this.handleSubmit,action:""},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{onChange:this.props.onChange,placeholder:"Enter your name here",id:"firstName",className:"form-control",name:"firstName",type:"text",value:this.props.formValues.firstName}),r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{onChange:this.props.onChange,placeholder:"Enter your last name here",id:"lastName",className:"form-control",name:"lastName",type:"text",value:this.props.formValues.lastName}),r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{onChange:this.props.onChange,placeholder:"Enter your email here",id:"email",className:"form-control",name:"email",type:"email",required:!0,value:this.props.formValues.email}),r.a.createElement("label",{htmlFor:"jobTitle"},"Job Title"),r.a.createElement("input",{onChange:this.props.onChange,placeholder:"Enter your job title here",id:"jobTitle",className:"form-control",name:"jobTitle",type:"text",value:this.props.formValues.jobTitle}),r.a.createElement("label",{htmlFor:"twitter"},"Twitter"),r.a.createElement("input",{onChange:this.props.onChange,placeholder:"Enter your twitter here",id:"twitter",className:"form-control",name:"twitter",type:"text",value:this.props.formValues.twitter}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",onClick:this.handleClick,className:"btn btn-primary"},"Submit"))))}}]),a}(r.a.Component),x=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={form:{firstName:"",lastName:"",email:"",jobTitle:"Front-end Developer",twitter:""}},t.handleChange=function(e){t.setState({form:Object(_.a)({},t.state.form,Object(j.a)({},e.target.name,e.target.value))})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("main",null,r.a.createElement("section",{className:"BadgeNew__hero"},r.a.createElement("img",{className:"img-fluid",src:w.a,alt:"logo header"})),r.a.createElement("section",{className:"container"},r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement(k,{firstName:this.state.form.firstName,lastName:this.state.form.lastName,jobTitle:this.state.form.jobTitle,twitter:this.state.form.twitter})),r.a.createElement("div",{className:"col-12 col-md-6 mt-5"},r.a.createElement(C,{onChange:this.handleChange,formValues:this.state.form}))))))}}]),a}(r.a.Component),B=(t(57),function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Badges-list"},r.a.createElement("div",{className:"Badges__container"},r.a.createElement("ul",{className:"list-unstyled"},this.props.listValues.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("div",{className:"List-element"},r.a.createElement("img",{className:"List-element__avatar",src:e.avatarUrl,alt:""}),r.a.createElement("section",{className:"List-element__info"},r.a.createElement("h3",null,e.firstName," ",e.lastName),r.a.createElement("p",null,e.jobTitle),r.a.createElement("p",{className:"lead List-element__info__twitter"},r.a.createElement("span",null,r.a.createElement("img",{className:"List-element__info__twitter--logo",src:"https://images.vexels.com/media/users/3/141372/isolated/lists/bf214a095a99c9aad3922f5a3a4ce2d4-boton-redondo-de-metal-de-twitter.png",alt:""}),"@",e.twitter)))))}))))))}}]),a}(r.a.Component)),F=(t(58),function(e){function a(e){var t;return Object(o.a)(this,a),t=Object(i.a)(this,Object(m.a)(a).call(this,e)),console.log("1. Constructor()"),t.state={data:[]},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("3. componentDidMount()"),this.timeId=setTimeout((function(){e.setState({data:[{id:"2de30c42-9deb-40fc-a41f-05e62b5939a7",firstName:"Freda",lastName:"Grady",email:"Leann_Berge@gmail.com",jobTitle:"LegacyBrandDirector",twitter:"FredaGrady22221-7573",avatarUrl:"https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"},{id:"d00d3614-101a-44ca-b6c2-0be075aeed3d",firstName:"Major",lastName:"Rodriguez",email:"Ilene66@hotmail.com",jobTitle:"HumanResearchArchitect",twitter:"MajorRodriguez61545",avatarUrl:"https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"},{id:"63c03386-33a2-4512-9ac1-354ad7bec5e9",firstName:"Daphney",lastName:"Torphy",email:"Ron61@hotmail.com",jobTitle:"NationalMarketsOfficer",twitter:"DaphneyTorphy96105",avatarUrl:"https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"}]})}),1)}},{key:"componentDidUpdate",value:function(e,a){console.log("5. componentDidUpdate()"),console.log({prevProps:e,prevState:a}),console.log({Props:this.props,State:this.state})}},{key:"componentWillUnmount",value:function(){console.log("6. componentWillUnmount()"),clearTimeout(this.timeId)}},{key:"render",value:function(){return console.log("2/4. render()"),r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,r.a.createElement("section",{className:"Badges"},r.a.createElement("div",{className:"Badges__hero"},r.a.createElement("div",{className:"Badges__container"},r.a.createElement("img",{className:"Badges__logo",src:w.a,alt:""})))),r.a.createElement("section",{className:"Badges__container"},r.a.createElement("div",{className:"Badges__buttons"},r.a.createElement(p.b,{to:"/badges/new",className:"Badges__buttons btn btn-primary"},"New Badge")),r.a.createElement(B,{listValues:this.state.data}))))}}]),a}(r.a.Component)),T=t(36),A=t.n(T),M=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"home"},r.a.createElement("section",{className:"home__message"},r.a.createElement("h2",null,"404 Error"),r.a.createElement("p",null,"The page you request does'nt exist"),r.a.createElement(p.b,{className:"btn btn-primary",to:"/badge"},"Come Home")),r.a.createElement("img",{className:"home__img",src:A.a,alt:""})))}}]),a}(r.a.Component),L=t(15),S=t.n(L),U=t(18),D=(t(60),t(37)),R=(t(193),t(42)),P=t.n(R),V=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).fetchCharacters=Object(U.a)(S.a.mark((function e(){var a,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loading:!0,error:null}),e.prev=1,e.next=4,fetch("https://rickandmortyapi.com/api/character?page=".concat(t.state.nextPage));case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,t.setState({loading:!1,data:{info:n.info,results:[].concat(t.state.data.results,n.results)},nextPage:t.state.nextPage+1}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t.setState({loading:!1,error:e.t0});case 14:case"end":return e.stop()}}),e,null,[[1,11]])}))),t.state={nextPage:1,loading:!0,error:null,data:{results:[]}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.fetchCharacters()}},{key:"componentWillUnmount",value:function(){Object(D.a)()}},{key:"render",value:function(){var e=this;return this.state.error?"Error: ".concat(this.error.message):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"RickAndMorty-list"},r.a.createElement("div",{className:"RickAndMorty__container container-fluid"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("ul",{className:"list-unstyled row"},this.state.data.results.map((function(e){return r.a.createElement("li",{className:"col-12 col-md-4 col-lg-3",key:e.id},r.a.createElement("div",{className:"List-element"},r.a.createElement("img",{className:"List-element__avatar",src:e.image,alt:"Character"}),r.a.createElement("section",{className:"List-element__info"},r.a.createElement("h3",null,e.name),r.a.createElement("p",null,e.species),r.a.createElement("p",null,e.origin.name))))})))),this.state.loading&&r.a.createElement("div",{className:"loader"},r.a.createElement(P.a,{type:"Circles",color:"#00BFFF",height:125,width:125,timeout:3e3})),!this.state.loading&&r.a.createElement("div",{className:"clearfix"},r.a.createElement("button",{onClick:function(){return e.fetchCharacters()},className:"btn btn-primary float-right"},"Load More")))))}}]),a}(r.a.Component),W=(t(213),t(43)),z=t.n(W),I=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,a){console.log("5. componentDidUpdate()")}},{key:"componentWillUnmount",value:function(){console.log("6. componentWillUnmount()")}},{key:"render",value:function(){return console.log("2/4. render()"),r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"RickAndMorty"},r.a.createElement("section",null,r.a.createElement("div",{className:"RickAndMorty__hero"},r.a.createElement("div",{className:"RickAndMorty__container"},r.a.createElement("img",{className:"RickAndMorty__logo",src:z.a,alt:""})))),r.a.createElement("section",{className:"RickAndMorty__container"},r.a.createElement("div",{className:"container"}),r.a.createElement(V,null))))}}]),a}(r.a.Component),J=t(16);var q=function(){return r.a.createElement(p.a,{basename:"/curso_de_react.js"},r.a.createElement(b,null,r.a.createElement(J.c,null,r.a.createElement(J.a,{exact:!0,path:"/",component:y}),r.a.createElement(J.a,{exact:!0,path:"/home",component:y}),r.a.createElement(J.a,{exact:!0,path:"/badges",component:F}),r.a.createElement(J.a,{exact:!0,path:"/badges/new",component:x}),r.a.createElement(J.a,{exact:!0,path:"/rickandmorty",component:I}),r.a.createElement(J.a,{component:M}))))},G=document.getElementById("root");c.a.render(r.a.createElement(q,null),G),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},29:function(e,a,t){},30:function(e,a,t){e.exports=t.p+"static/media/logo.0026b862.svg"},33:function(e,a,t){e.exports=t.p+"static/media/astronauts.71addf45.svg"},34:function(e,a,t){e.exports=t.p+"static/media/home-logo.f246f5f1.svg"},36:function(e,a,t){e.exports=t.p+"static/media/monstruos.ed914b75.png"},43:function(e,a,t){e.exports=t.p+"static/media/rickandmorty.a3848242.png"},44:function(e,a,t){e.exports=t(214)},49:function(e,a,t){},50:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},60:function(e,a,t){}},[[44,1,2]]]);
//# sourceMappingURL=main.5a0e73e9.chunk.js.map
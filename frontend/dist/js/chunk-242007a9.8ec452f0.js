(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-242007a9"],{"057f":function(t,e,r){var n=r("fc6a"),a=r("241c").f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return a(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==i.call(t)?s(t):a(n(t))}},"2deb":function(t,e,r){"use strict";var n=r("c651"),a=r.n(n);a.a},"5c4c":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("b-form",{on:{submit:function(e){return e.preventDefault(),t.handleReview(e)}}},[r("h1",{staticStyle:{"margin-top":"1rem"}},[t._v("Dodaj recenzję")]),r("b-container",{staticStyle:{"max-width":"60%"},attrs:{fluid:""}},[r("b-row",{attrs:{cols:"2"}},[r("b-col",{attrs:{sm:"3"}},[r("label",[t._v("Podaj tytuł gry: ")])]),r("b-col",{attrs:{sm:"9"}},[r("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],attrs:{list:"game-list",type:"text",placeholder:"Nazwa gry",name:"title"},model:{value:t.review.game,callback:function(e){t.$set(t.review,"game",e)},expression:"review.game"}}),r("datalist",{attrs:{id:"game-list"}},t._l(t.games,(function(e){return r("option",{key:e.id},[t._v(" "+t._s(e.name)+" ")])})),0)],1),r("b-col",{attrs:{sm:"3"}},[r("label",[t._v("Podaj tytuł: ")])]),r("b-col",{attrs:{sm:"9"}},[r("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:50",expression:"'required|max:50'"}],attrs:{type:"text",placeholder:"Tytuł recenzji",name:"title"},model:{value:t.review.title,callback:function(e){t.$set(t.review,"title",e)},expression:"review.title"}})],1),r("b-col",{attrs:{sm:"4"}},[r("label",[t._v("Opisz swoje wrażenia: ")])])],1),r("b-row",{attrs:{cols:"1"}},[r("b-col",[r("b-form-textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:10",expression:"'required|min:10'"}],attrs:{type:"text",placeholder:"Opisz swoje wrażenia z grą",name:"title",rows:"5"},model:{value:t.review.description,callback:function(e){t.$set(t.review,"description",e)},expression:"review.description"}})],1)],1),r("b-row",{attrs:{cols:"2"}},[r("b-col",{attrs:{sm:"5"}},[r("label",[t._v("Zaznacz końcową ocene: ")])]),r("b-col",{attrs:{sm:"7"}},[r("b-form-rating",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"start","icon-empty":"heart","icon-half":"heart-half","icon-full":"heart-fill","icon-clear":"slash-circle","show-clear":"",variant:"danger"},model:{value:t.review.stars,callback:function(e){t.$set(t.review,"stars",e)},expression:"review.stars"}})],1)],1),r("b-row",[r("b-col",{attrs:{sm:"3"}}),r("b-col",{attrs:{sm:"6"}},[r("b-button",{staticClass:"w-100",attrs:{variant:"warning"},on:{click:t.handleReview}},[t._v("Dodaj recenzje")])],1),r("b-col",{attrs:{sm:"3"}})],1),!0===t.dispatched?r("b-alert",{staticClass:"text-center",attrs:{show:"",variant:"success"}},[t._v("Recenzja została dodana pomyslnie")]):t._e(),!0===t.exist?r("b-alert",{staticClass:"text-center",attrs:{show:"",variant:"danger"}},[t._v("Ta recenzja została już dodana")]):t._e()],1)],1)],1)},a=[],i=(r("a4d3"),r("e01a"),r("d3b7"),r("25f0"),r("6585")),o={name:"NewReview",data:function(){return{success:!1,dispatched:!1,exist:!1,games:"",review:{game:"",title:"",description:"",stars:null}}},methods:{handleReview:function(){var t=this;this.$validator.validate().then((function(e){e&&i["a"].post("reviews",{title:t.review.title,description:t.review.description,game:t.review.game,stars:t.review.stars}).then((function(e){console.log(e),t.dispatched=!0})).catch((function(e){t.message=e.response&&e.response.data||e.message||e.toString(),400===e.response.status&&(t.exist=!0)}))}))}},mounted:function(){var t=this;i["a"].get("games").then((function(e){t.games=e.data,console.log(e.data)})).catch((function(t){console.log(t)}))}},s=o,c=(r("2deb"),r("2877")),l=Object(c["a"])(s,n,a,!1,null,"bdad8710",null);e["default"]=l.exports},6585:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("bc3a"),a=r.n(n),i=a.a.create({baseURL:"http://localhost:4200",headers:{"Access-Control-Allow-Origin":"https://gameweb21.herokuapp.com/","Access-Control-Allow-Credentials":!0}})},"65f0":function(t,e,r){var n=r("861d"),a=r("e8b5"),i=r("b622"),o=i("species");t.exports=function(t,e){var r;return a(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)?n(r)&&(r=r[o],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),a=r("5135"),i=r("e538"),o=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});a(e,t)||o(e,t,{value:i.f(t)})}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),a=r("da84"),i=r("d066"),o=r("c430"),s=r("83ab"),c=r("4930"),l=r("fdbf"),u=r("d039"),f=r("5135"),d=r("e8b5"),v=r("861d"),b=r("825a"),p=r("7b0b"),m=r("fc6a"),h=r("c04e"),w=r("5c6c"),g=r("7c73"),y=r("df75"),x=r("241c"),S=r("057f"),j=r("7418"),O=r("06cf"),_=r("9bf2"),k=r("d1e7"),z=r("9112"),N=r("6eeb"),P=r("5692"),A=r("f772"),q=r("d012"),C=r("90e3"),$=r("b622"),E=r("e538"),R=r("746f"),D=r("d44e"),J=r("69f3"),T=r("b727").forEach,F=A("hidden"),I="Symbol",L="prototype",Q=$("toPrimitive"),U=J.set,W=J.getterFor(I),Z=Object[L],B=a.Symbol,G=i("JSON","stringify"),H=O.f,K=_.f,M=S.f,V=k.f,X=P("symbols"),Y=P("op-symbols"),tt=P("string-to-symbol-registry"),et=P("symbol-to-string-registry"),rt=P("wks"),nt=a.QObject,at=!nt||!nt[L]||!nt[L].findChild,it=s&&u((function(){return 7!=g(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=H(Z,e);n&&delete Z[e],K(t,e,r),n&&t!==Z&&K(Z,e,n)}:K,ot=function(t,e){var r=X[t]=g(B[L]);return U(r,{type:I,tag:t,description:e}),s||(r.description=e),r},st=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof B},ct=function(t,e,r){t===Z&&ct(Y,e,r),b(t);var n=h(e,!0);return b(r),f(X,n)?(r.enumerable?(f(t,F)&&t[F][n]&&(t[F][n]=!1),r=g(r,{enumerable:w(0,!1)})):(f(t,F)||K(t,F,w(1,{})),t[F][n]=!0),it(t,n,r)):K(t,n,r)},lt=function(t,e){b(t);var r=m(e),n=y(r).concat(bt(r));return T(n,(function(e){s&&!ft.call(r,e)||ct(t,e,r[e])})),t},ut=function(t,e){return void 0===e?g(t):lt(g(t),e)},ft=function(t){var e=h(t,!0),r=V.call(this,e);return!(this===Z&&f(X,e)&&!f(Y,e))&&(!(r||!f(this,e)||!f(X,e)||f(this,F)&&this[F][e])||r)},dt=function(t,e){var r=m(t),n=h(e,!0);if(r!==Z||!f(X,n)||f(Y,n)){var a=H(r,n);return!a||!f(X,n)||f(r,F)&&r[F][n]||(a.enumerable=!0),a}},vt=function(t){var e=M(m(t)),r=[];return T(e,(function(t){f(X,t)||f(q,t)||r.push(t)})),r},bt=function(t){var e=t===Z,r=M(e?Y:m(t)),n=[];return T(r,(function(t){!f(X,t)||e&&!f(Z,t)||n.push(X[t])})),n};if(c||(B=function(){if(this instanceof B)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=C(t),r=function(t){this===Z&&r.call(Y,t),f(this,F)&&f(this[F],e)&&(this[F][e]=!1),it(this,e,w(1,t))};return s&&at&&it(Z,e,{configurable:!0,set:r}),ot(e,t)},N(B[L],"toString",(function(){return W(this).tag})),N(B,"withoutSetter",(function(t){return ot(C(t),t)})),k.f=ft,_.f=ct,O.f=dt,x.f=S.f=vt,j.f=bt,E.f=function(t){return ot($(t),t)},s&&(K(B[L],"description",{configurable:!0,get:function(){return W(this).description}}),o||N(Z,"propertyIsEnumerable",ft,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:B}),T(y(rt),(function(t){R(t)})),n({target:I,stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var r=B(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){at=!0},useSimple:function(){at=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!s},{create:ut,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:vt,getOwnPropertySymbols:bt}),n({target:"Object",stat:!0,forced:u((function(){j.f(1)}))},{getOwnPropertySymbols:function(t){return j.f(p(t))}}),G){var pt=!c||u((function(){var t=B();return"[null]"!=G([t])||"{}"!=G({a:t})||"{}"!=G(Object(t))}));n({target:"JSON",stat:!0,forced:pt},{stringify:function(t,e,r){var n,a=[t],i=1;while(arguments.length>i)a.push(arguments[i++]);if(n=e,(v(e)||void 0!==t)&&!st(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!st(e))return e}),a[1]=e,G.apply(null,a)}})}B[L][Q]||z(B[L],Q,B[L].valueOf),D(B,I),q[F]=!0},b727:function(t,e,r){var n=r("0366"),a=r("44ad"),i=r("7b0b"),o=r("50c4"),s=r("65f0"),c=[].push,l=function(t){var e=1==t,r=2==t,l=3==t,u=4==t,f=6==t,d=5==t||f;return function(v,b,p,m){for(var h,w,g=i(v),y=a(g),x=n(b,p,3),S=o(y.length),j=0,O=m||s,_=e?O(v,S):r?O(v,0):void 0;S>j;j++)if((d||j in y)&&(h=y[j],w=x(h,j,g),t))if(e)_[j]=w;else if(w)switch(t){case 3:return!0;case 5:return h;case 6:return j;case 2:c.call(_,h)}else if(u)return!1;return f?-1:l||u?u:_}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},c651:function(t,e,r){},e01a:function(t,e,r){"use strict";var n=r("23e7"),a=r("83ab"),i=r("da84"),o=r("5135"),s=r("861d"),c=r("9bf2").f,l=r("e893"),u=i.Symbol;if(a&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new u(t):void 0===t?u():u(t);return""===t&&(f[e]=!0),e};l(d,u);var v=d.prototype=u.prototype;v.constructor=d;var b=v.toString,p="Symbol(test)"==String(u("test")),m=/^Symbol\((.*)\)[^)]+$/;c(v,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=b.call(t);if(o(f,t))return"";var r=p?e.slice(7,-1):e.replace(m,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-242007a9.8ec452f0.js.map
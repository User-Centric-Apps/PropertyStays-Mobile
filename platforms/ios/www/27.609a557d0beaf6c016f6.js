(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"605V":function(n,t,o){"use strict";o.r(t);var e=o("CcnG"),u=o("lGQG"),r=o("XjJT"),i=o("ZZ/e"),l=o("gTw3"),c=function(n,t,o,e){return new(o||(o=Promise))(function(u,r){function i(n){try{c(e.next(n))}catch(t){r(t)}}function l(n){try{c(e.throw(n))}catch(t){r(t)}}function c(n){n.done?u(n.value):new o(function(t){t(n.value)}).then(i,l)}c((e=e.apply(n,t||[])).next())})},a=function(n,t){var o,e,u,r,i={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(r){return function(l){return function(r){if(o)throw new TypeError("Generator is already executing.");for(;i;)try{if(o=1,e&&(u=2&r[0]?e.return:r[0]?e.throw||((u=e.return)&&u.call(e),0):e.next)&&!(u=u.call(e,r[1])).done)return u;switch(e=0,u&&(r=[2&r[0],u.value]),r[0]){case 0:case 1:u=r;break;case 4:return i.label++,{value:r[1],done:!1};case 5:i.label++,e=r[1],r=[0];continue;case 7:r=i.ops.pop(),i.trys.pop();continue;default:if(!(u=(u=i.trys).length>0&&u[u.length-1])&&(6===r[0]||2===r[0])){i=0;continue}if(3===r[0]&&(!u||r[1]>u[0]&&r[1]<u[3])){i.label=r[1];break}if(6===r[0]&&i.label<u[1]){i.label=u[1],u=r;break}if(u&&i.label<u[2]){i.label=u[2],i.ops.push(r);break}u[2]&&i.ops.pop(),i.trys.pop();continue}r=t.call(n,i)}catch(l){r=[6,l],e=0}finally{o=u=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,l])}}},s=function(){function n(n,t,o,e){this.loadingController=n,this.geolocation=t,this.authService=o,this.wpApiService=e,this.locationStatus=!1}return n.prototype.ngOnInit=function(){this.showLoading()},n.prototype.showLoading=function(){return c(this,void 0,void 0,function(){return a(this,function(n){switch(n.label){case 0:return[4,this.loadingController.create({spinner:"dots",message:"Loading, please wait...",translucent:!0,cssClass:"custom-class custom-loading"})];case 1:return[4,n.sent().present()];case 2:return[2,n.sent()]}})})},n.prototype.checkLocation=function(){return c(this,void 0,void 0,function(){var n=this;return a(this,function(t){switch(t.label){case 0:return[4,this.geolocation.getCurrentPosition().then(function(t){n.locationStatus=!0}).catch(function(n){console.log("Error getting location",n)})];case 1:return t.sent(),[2]}})})},n.prototype.checkLogin=function(){return c(this,void 0,void 0,function(){return a(this,function(n){return[2]})})},n}(),b=function(){return function(){}}(),f=o("pMnS"),p=o("oBZk"),h=e.nb({encapsulation:0,styles:[[""]],data:{}});function d(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,2,"ion-content",[["padding",""]],null,null,null,p.qb,p.m)),e.ob(1,49152,null,0,i.w,[e.h,e.k,e.z],null,null),e.ob(2,16384,null,0,i.f,[e.k],null,null)],null,null)}function w(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,1,"app-init",[],null,null,null,d,h)),e.ob(1,114688,null,0,s,[i.Ib,l.a,u.a,r.a],null,null)],function(n,t){n(t,1,0)},null)}var g=e.lb("app-init",s,w,{},{},[]),y=o("Ip0R"),v=o("gIcY"),x=o("ZYCi");o.d(t,"InitPageModuleNgFactory",function(){return k});var k=e.mb(b,[],function(n){return e.wb([e.xb(512,e.j,e.bb,[[8,[f.a,g]],[3,e.j],e.x]),e.xb(4608,y.l,y.k,[e.u,[2,y.u]]),e.xb(4608,v.u,v.u,[]),e.xb(4608,i.c,i.c,[e.z,e.g]),e.xb(4608,i.Jb,i.Jb,[i.c,e.j,e.q]),e.xb(4608,i.Ob,i.Ob,[i.c,e.j,e.q]),e.xb(1073742336,y.b,y.b,[]),e.xb(1073742336,v.s,v.s,[]),e.xb(1073742336,v.f,v.f,[]),e.xb(1073742336,i.Gb,i.Gb,[]),e.xb(1073742336,x.o,x.o,[[2,x.u],[2,x.m]]),e.xb(1073742336,b,b,[]),e.xb(1024,x.k,function(){return[[{path:"",component:s}]]},[])])})}}]);
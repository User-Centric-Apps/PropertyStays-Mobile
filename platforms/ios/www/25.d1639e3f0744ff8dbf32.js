(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{mgA3:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=u("XjJT"),e=u("ZZ/e"),i=function(){function l(l,n,u,t){this.activatedRoute=l,this.router=n,this.navCtrl=u,this.wpApiService=t,this.passedId=null}return l.prototype.getTopic=function(){return l=this,void 0,u=function(){var l=this;return function(l,n){var u,t,o,e,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return e={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function r(e){return function(r){return function(e){if(u)throw new TypeError("Generator is already executing.");for(;i;)try{if(u=1,t&&(o=2&e[0]?t.return:e[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,e[1])).done)return o;switch(t=0,o&&(e=[2&e[0],o.value]),e[0]){case 0:case 1:o=e;break;case 4:return i.label++,{value:e[1],done:!1};case 5:i.label++,t=e[1],e=[0];continue;case 7:e=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===e[0]||2===e[0])){i=0;continue}if(3===e[0]&&(!o||e[1]>o[0]&&e[1]<o[3])){i.label=e[1];break}if(6===e[0]&&i.label<o[1]){i.label=o[1],o=e;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(e);break}o[2]&&i.ops.pop(),i.trys.pop();continue}e=n.call(l,i)}catch(r){e=[6,r],t=0}finally{u=o=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,r])}}}(this,function(n){switch(n.label){case 0:return this.passedId=this.activatedRoute.snapshot.paramMap.get("id"),[4,this.wpApiService.getHelp(this.passedId).subscribe(function(n){l.topic=n[0],console.log(l.topic)})];case 1:return n.sent(),[2]}})},new((n=void 0)||(n=Promise))(function(t,o){function e(l){try{r(u.next(l))}catch(n){o(n)}}function i(l){try{r(u.throw(l))}catch(n){o(n)}}function r(l){l.done?t(l.value):new n(function(n){n(l.value)}).then(e,i)}r((u=u.apply(l,[])).next())});var l,n,u},l.prototype.goToContact=function(){this.router.navigateByUrl("/feedback")},l.prototype.ngOnInit=function(){this.getTopic()},l}(),r=function(){return function(){}}(),c=u("pMnS"),b=u("oBZk"),a=u("ZYCi"),s=t.nb({encapsulation:0,styles:[[""]],data:{}});function p(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,17,"ion-header",[],null,null,null,b.ub,b.q)),t.ob(1,49152,null,0,e.D,[t.h,t.k,t.z],null,null),(l()(),t.pb(2,0,null,0,15,"ion-toolbar",[],null,null,null,b.gc,b.cb)),t.ob(3,49152,null,0,e.Eb,[t.h,t.k,t.z],null,null),(l()(),t.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,b.jb,b.f)),t.ob(5,49152,null,0,e.n,[t.h,t.k,t.z],null,null),(l()(),t.pb(6,0,null,0,2,"ion-back-button",[["color","primary"],["text",""]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.zb(l,8).onClick(u)&&o),o},b.gb,b.c)),t.ob(7,49152,null,0,e.i,[t.h,t.k,t.z],{color:[0,"color"],text:[1,"text"]},null),t.ob(8,16384,null,0,e.j,[[2,e.kb],e.Kb],null,null),(l()(),t.pb(9,0,null,0,2,"ion-title",[],null,null,null,b.ec,b.ab)),t.ob(10,49152,null,0,e.Cb,[t.h,t.k,t.z],null,null),(l()(),t.Fb(11,0,[" Help - "," "])),(l()(),t.pb(12,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,b.jb,b.f)),t.ob(13,49152,null,0,e.n,[t.h,t.k,t.z],null,null),(l()(),t.pb(14,0,null,0,3,"ion-menu-button",[],null,null,null,b.Jb,b.G)),t.ob(15,49152,null,0,e.T,[t.h,t.k,t.z],null,null),(l()(),t.pb(16,0,null,0,1,"ion-icon",[["src","/assets/icon/atoms/menu.svg"]],null,null,null,b.vb,b.r)),t.ob(17,49152,null,0,e.E,[t.h,t.k,t.z],{src:[0,"src"]},null),(l()(),t.pb(18,0,null,null,3,"ion-content",[["padding",""]],null,null,null,b.qb,b.m)),t.ob(19,49152,null,0,e.w,[t.h,t.k,t.z],null,null),t.ob(20,16384,null,0,e.f,[t.k],null,null),(l()(),t.pb(21,0,null,0,0,"div",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t.pb(22,0,null,null,9,"ion-footer",[["class","contact"]],null,null,null,b.sb,b.o)),t.ob(23,49152,null,0,e.B,[t.h,t.k,t.z],null,null),(l()(),t.pb(24,0,null,0,7,"ion-item",[["lines","none"]],null,null,null,b.Fb,b.w)),t.ob(25,49152,null,0,e.J,[t.h,t.k,t.z],{lines:[0,"lines"]},null),(l()(),t.pb(26,0,null,0,2,"ion-label",[],null,null,null,b.Gb,b.C)),t.ob(27,49152,null,0,e.P,[t.h,t.k,t.z],null,null),(l()(),t.Fb(-1,0,["Still need help?"])),(l()(),t.pb(29,0,null,0,2,"ion-button",[["class","white-text normal-text no-radius no-shadow"],["color","primary"],["slot","end"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.goToContact()&&t),t},b.ib,b.e)),t.ob(30,49152,null,0,e.m,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.Fb(-1,0,[" Contact Us "]))],function(l,n){l(n,7,0,"primary",""),l(n,17,0,"/assets/icon/atoms/menu.svg"),l(n,25,0,"none"),l(n,30,0,"primary")},function(l,n){var u=n.component;l(n,11,0,null==u.topic?null:u.topic.title),l(n,21,0,null==u.topic?null:u.topic.content)})}function f(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"app-detail",[],null,null,null,p,s)),t.ob(1,114688,null,0,i,[a.a,a.m,e.Kb,o.a],null,null)],function(l,n){l(n,1,0)},null)}var h=t.lb("app-detail",i,f,{},{},[]),d=u("Ip0R"),k=u("gIcY");u.d(n,"DetailPageModuleNgFactory",function(){return v});var v=t.mb(r,[],function(l){return t.wb([t.xb(512,t.j,t.bb,[[8,[c.a,h]],[3,t.j],t.x]),t.xb(4608,d.l,d.k,[t.u,[2,d.u]]),t.xb(4608,k.t,k.t,[]),t.xb(4608,e.c,e.c,[t.z,t.g]),t.xb(4608,e.Jb,e.Jb,[e.c,t.j,t.q]),t.xb(4608,e.Ob,e.Ob,[e.c,t.j,t.q]),t.xb(1073742336,d.b,d.b,[]),t.xb(1073742336,k.r,k.r,[]),t.xb(1073742336,k.f,k.f,[]),t.xb(1073742336,e.Gb,e.Gb,[]),t.xb(1073742336,a.o,a.o,[[2,a.u],[2,a.m]]),t.xb(1073742336,r,r,[]),t.xb(1024,a.k,function(){return[[{path:"",component:i}]]},[])])})}}]);
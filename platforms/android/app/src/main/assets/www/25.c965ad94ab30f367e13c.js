(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{mgA3:function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),o=t("XjJT"),e=t("ZZ/e"),i=function(){function n(n,l,t,u){this.activatedRoute=n,this.router=l,this.navCtrl=t,this.wpApiService=u,this.passedId=null,this.topicdata=[],this.topic=[]}return n.prototype.getTopic=function(){return n=this,void 0,t=function(){var n=this;return function(n,l){var t,u,o,e,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return e={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function r(e){return function(r){return function(e){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,u&&(o=2&e[0]?u.return:e[0]?u.throw||((o=u.return)&&o.call(u),0):u.next)&&!(o=o.call(u,e[1])).done)return o;switch(u=0,o&&(e=[2&e[0],o.value]),e[0]){case 0:case 1:o=e;break;case 4:return i.label++,{value:e[1],done:!1};case 5:i.label++,u=e[1],e=[0];continue;case 7:e=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===e[0]||2===e[0])){i=0;continue}if(3===e[0]&&(!o||e[1]>o[0]&&e[1]<o[3])){i.label=e[1];break}if(6===e[0]&&i.label<o[1]){i.label=o[1],o=e;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(e);break}o[2]&&i.ops.pop(),i.trys.pop();continue}e=l.call(n,i)}catch(r){e=[6,r],u=0}finally{t=o=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,r])}}}(this,function(l){switch(l.label){case 0:return this.passedId=this.activatedRoute.snapshot.paramMap.get("id"),[4,this.wpApiService.getHelp(this.passedId).subscribe(function(l){n.topicdata=l,n.topic=n.topicdata.data})];case 1:return l.sent(),[2]}})},new((l=void 0)||(l=Promise))(function(u,o){function e(n){try{r(t.next(n))}catch(l){o(l)}}function i(n){try{r(t.throw(n))}catch(l){o(l)}}function r(n){n.done?u(n.value):new l(function(l){l(n.value)}).then(e,i)}r((t=t.apply(n,[])).next())});var n,l,t},n.prototype.goToContact=function(){this.router.navigateByUrl("/feedback")},n.prototype.ngOnInit=function(){this.getTopic()},n}(),r=function(){return function(){}}(),c=t("pMnS"),b=t("oBZk"),a=t("Ip0R"),s=t("ZYCi"),p=u.nb({encapsulation:0,styles:[[".maindiv[_ngcontent-%COMP%]{border-bottom:1px solid #000;font-size:12px}.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:14px!important}"]],data:{}});function f(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,1,"div",[["class","maindiv"]],null,null,null,null,null)),(n()(),u.pb(1,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,function(n,l){n(l,1,0,null==l.context.$implicit?null:l.context.$implicit.description)})}function h(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,17,"ion-header",[],null,null,null,b.vb,b.q)),u.ob(1,49152,null,0,e.D,[u.h,u.k,u.z],null,null),(n()(),u.pb(2,0,null,0,15,"ion-toolbar",[],null,null,null,b.ic,b.db)),u.ob(3,49152,null,0,e.Eb,[u.h,u.k,u.z],null,null),(n()(),u.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,b.kb,b.f)),u.ob(5,49152,null,0,e.n,[u.h,u.k,u.z],null,null),(n()(),u.pb(6,0,null,0,2,"ion-back-button",[["color","primary"],["text",""]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==u.zb(n,8).onClick(t)&&o),o},b.hb,b.c)),u.ob(7,49152,null,0,e.i,[u.h,u.k,u.z],{color:[0,"color"],text:[1,"text"]},null),u.ob(8,16384,null,0,e.j,[[2,e.kb],e.Kb],null,null),(n()(),u.pb(9,0,null,0,2,"ion-title",[],null,null,null,b.gc,b.bb)),u.ob(10,49152,null,0,e.Cb,[u.h,u.k,u.z],null,null),(n()(),u.Fb(-1,0,[" Help "])),(n()(),u.pb(12,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,b.kb,b.f)),u.ob(13,49152,null,0,e.n,[u.h,u.k,u.z],null,null),(n()(),u.pb(14,0,null,0,3,"ion-menu-button",[],null,null,null,b.Kb,b.G)),u.ob(15,49152,null,0,e.T,[u.h,u.k,u.z],null,null),(n()(),u.pb(16,0,null,0,1,"ion-icon",[["src","/assets/icon/atoms/menu.svg"]],null,null,null,b.wb,b.r)),u.ob(17,49152,null,0,e.E,[u.h,u.k,u.z],{src:[0,"src"]},null),(n()(),u.pb(18,0,null,null,4,"ion-content",[["padding",""]],null,null,null,b.rb,b.m)),u.ob(19,49152,null,0,e.w,[u.h,u.k,u.z],null,null),u.ob(20,16384,null,0,e.f,[u.k],null,null),(n()(),u.gb(16777216,null,0,1,null,f)),u.ob(22,278528,null,0,a.i,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null),(n()(),u.pb(23,0,null,null,9,"ion-footer",[["class","contact"]],null,null,null,b.tb,b.o)),u.ob(24,49152,null,0,e.B,[u.h,u.k,u.z],null,null),(n()(),u.pb(25,0,null,0,7,"ion-item",[["lines","none"]],null,null,null,b.Gb,b.w)),u.ob(26,49152,null,0,e.J,[u.h,u.k,u.z],{lines:[0,"lines"]},null),(n()(),u.pb(27,0,null,0,2,"ion-label",[],null,null,null,b.Hb,b.C)),u.ob(28,49152,null,0,e.P,[u.h,u.k,u.z],null,null),(n()(),u.Fb(-1,0,["Still need help?"])),(n()(),u.pb(30,0,null,0,2,"ion-button",[["class","white-text normal-text no-radius no-shadow"],["color","primary"],["slot","end"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.goToContact()&&u),u},b.jb,b.e)),u.ob(31,49152,null,0,e.m,[u.h,u.k,u.z],{color:[0,"color"]},null),(n()(),u.Fb(-1,0,[" Contact Us "]))],function(n,l){var t=l.component;n(l,7,0,"primary",""),n(l,17,0,"/assets/icon/atoms/menu.svg"),n(l,22,0,t.topic),n(l,26,0,"none"),n(l,31,0,"primary")},null)}function d(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,1,"app-detail",[],null,null,null,h,p)),u.ob(1,114688,null,0,i,[s.a,s.m,e.Kb,o.a],null,null)],function(n,l){n(l,1,0)},null)}var k=u.lb("app-detail",i,d,{},{},[]),m=t("gIcY");t.d(l,"DetailPageModuleNgFactory",function(){return v});var v=u.mb(r,[],function(n){return u.wb([u.xb(512,u.j,u.bb,[[8,[c.a,k]],[3,u.j],u.x]),u.xb(4608,a.l,a.k,[u.u,[2,a.u]]),u.xb(4608,m.u,m.u,[]),u.xb(4608,e.c,e.c,[u.z,u.g]),u.xb(4608,e.Jb,e.Jb,[e.c,u.j,u.q]),u.xb(4608,e.Ob,e.Ob,[e.c,u.j,u.q]),u.xb(1073742336,a.b,a.b,[]),u.xb(1073742336,m.s,m.s,[]),u.xb(1073742336,m.f,m.f,[]),u.xb(1073742336,e.Gb,e.Gb,[]),u.xb(1073742336,s.o,s.o,[[2,s.u],[2,s.m]]),u.xb(1073742336,r,r,[]),u.xb(1024,s.k,function(){return[[{path:"",component:i}]]},[])])})}}]);
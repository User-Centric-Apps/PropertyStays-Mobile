(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"3F3D":function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),o=t("ZZ/e"),e=t("lGQG"),i=t("XjJT"),r=t("Witw"),c=function(n,l,t,u){return new(t||(t=Promise))(function(o,e){function i(n){try{c(u.next(n))}catch(l){e(l)}}function r(n){try{c(u.throw(n))}catch(l){e(l)}}function c(n){n.done?o(n.value):new t(function(l){l(n.value)}).then(i,r)}c((u=u.apply(n,l||[])).next())})},a=function(n,l){var t,u,o,e,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return e={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function r(e){return function(r){return function(e){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,u&&(o=2&e[0]?u.return:e[0]?u.throw||((o=u.return)&&o.call(u),0):u.next)&&!(o=o.call(u,e[1])).done)return o;switch(u=0,o&&(e=[2&e[0],o.value]),e[0]){case 0:case 1:o=e;break;case 4:return i.label++,{value:e[1],done:!1};case 5:i.label++,u=e[1],e=[0];continue;case 7:e=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===e[0]||2===e[0])){i=0;continue}if(3===e[0]&&(!o||e[1]>o[0]&&e[1]<o[3])){i.label=e[1];break}if(6===e[0]&&i.label<o[1]){i.label=o[1],o=e;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(e);break}o[2]&&i.ops.pop(),i.trys.pop();continue}e=l.call(n,i)}catch(r){e=[6,r],u=0}finally{t=o=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,r])}}},s=function(){function n(n,l,t,u,o){this.authService=n,this.wpApiService=l,this.router=t,this.navCtrl=u,this.ui=o,this.currencies=[],this.notifyStatus=!0,this.uNotifyStatus=!0,this.currencyLoaded=!1,this.notifyLoaded=!1}return n.prototype.goBack=function(){this.navCtrl.back()},n.prototype.goPrivacy=function(){this.navCtrl.navigateForward("/privacy")},n.prototype.ngOnInit=function(){var n=this;this.authService.authenticationState.subscribe(function(l){return c(n,void 0,void 0,function(){var n=this;return a(this,function(t){switch(t.label){case 0:return console.log(l),l?(this.ui.showPageLoading(),[4,this.wpApiService.notificationStatus(this.authService.userToken).subscribe(function(l){console.log("User Notify: ",l),n.notifyStatus=l.status,n.notifyLoaded=!0,n.uNotifyStatus=l.status},function(n){console.log(n)})]):[3,3];case 1:return t.sent(),[4,this.wpApiService.getCurrencies(this.authService.userToken).subscribe(function(l){return c(n,void 0,void 0,function(){var n=this;return a(this,function(t){switch(t.label){case 0:return console.log(l),this.currencies=l,[4,this.wpApiService.getUserCurrency(this.authService.userToken).subscribe(function(l){console.log("User Currency: ",l),n.selectedCurrency=l.name,n.userCurrency=l.name,n.currencyLoaded=!0,n.ui.hidePageLoading()},function(n){console.log(n)})];case 1:return t.sent(),[2]}})})},function(n){console.log(n)})];case 2:t.sent(),t.label=3;case 3:return[2]}})})})},n.prototype.logOut=function(){var n=this;this.authService.logOut().then(function(){n.navCtrl.navigateRoot("/tips")})},n.prototype.changeCurrency=function(n,l){var t=this;console.log(n),console.log(l),this.userCurrency&&n.detail.value!==this.userCurrency&&(console.log("Currency Changed By User"),this.wpApiService.setCurrency(this.authService.userToken,l).subscribe(function(n){console.log(n),t.selectedCurrency=l,t.userCurrency=l}))},n.prototype.changeNotify=function(n){var l=this;console.log("this.notify:",this.notifyStatus),console.log("this.uNotify:",this.uNotifyStatus),this.notifyStatus!==this.uNotifyStatus&&(console.log(n.detail.checked),console.log("Notify Changed by"),console.log("this.notify after:",this.notifyStatus),console.log("this.uNotify after:",this.uNotifyStatus),this.wpApiService.changeNotification(this.authService.userToken,n.detail.checked?1:0).subscribe(function(t){console.log(t),l.uNotifyStatus=n.detail.checked,console.log("this.notify after api:",l.notifyStatus),console.log("this.uNotify after api:",l.uNotifyStatus)},function(n){console.log(n)}))},n}(),b=function(){return function(){}}(),g=t("pMnS"),h=t("oBZk"),f=t("gIcY"),p=t("Ip0R"),d=t("ZYCi"),y=u.nb({encapsulation:0,styles:[["ion-select[_ngcontent-%COMP%]   .select-text[_ngcontent-%COMP%]{font-size:16px;--color:var(--ion-text-color2);font-weight:300}ion-select[_ngcontent-%COMP%]   .select-icon[_ngcontent-%COMP%]{--color:#00BDBB}ion-footer[_ngcontent-%COMP%]{padding-bottom:0;background:#fff;text-align:center;align-items:center}ion-footer[_ngcontent-%COMP%]:before{display:none}ion-footer[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:190px;align-self:center;display:block;margin:0 auto}ion-footer[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin:10px 0 0;color:var(--ion-color-primary);--ion-color-contrast:var(--ion-color-primary)!important;text-transform:inherit}ion-item.has-detail[_ngcontent-%COMP%]{--detail-icon-color:var(--ion-color-primary);--detail-icon-opacity:1}"]],data:{}});function v(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,11,"ion-item",[],null,null,null,h.Fb,h.w)),u.ob(1,49152,null,0,o.J,[u.h,u.k,u.z],null,null),(n()(),u.pb(2,0,null,0,2,"ion-label",[],null,null,null,h.Gb,h.C)),u.ob(3,49152,null,0,o.P,[u.h,u.k,u.z],null,null),(n()(),u.Fb(-1,0,["Notifications"])),(n()(),u.pb(5,0,null,0,6,"ion-toggle",[["slot","end"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ngModelChange"],[null,"ionBlur"]],function(n,l,t){var o=!0,e=n.component;return"ionBlur"===l&&(o=!1!==u.zb(n,6)._handleBlurEvent(t.target)&&o),"ionChange"===l&&(o=!1!==u.zb(n,6)._handleIonChange(t.target)&&o),"ionChange"===l&&(o=!1!==e.changeNotify(t)&&o),"ngModelChange"===l&&(o=!1!==(e.notifyStatus=t)&&o),o},h.fc,h.bb)),u.ob(6,16384,null,0,o.d,[u.k],null,null),u.Cb(1024,null,f.i,function(n){return[n]},[o.d]),u.ob(8,671744,null,0,f.n,[[8,null],[8,null],[8,null],[6,f.i]],{model:[0,"model"]},{update:"ngModelChange"}),u.Cb(2048,null,f.j,null,[f.n]),u.ob(10,16384,null,0,f.k,[[4,f.j]],null,null),u.ob(11,49152,null,0,o.Db,[u.h,u.k,u.z],null,null)],function(n,l){n(l,8,0,l.component.notifyStatus)},function(n,l){n(l,5,0,u.zb(l,10).ngClassUntouched,u.zb(l,10).ngClassTouched,u.zb(l,10).ngClassPristine,u.zb(l,10).ngClassDirty,u.zb(l,10).ngClassValid,u.zb(l,10).ngClassInvalid,u.zb(l,10).ngClassPending)})}function C(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,7,"ion-item",[["class","has-detail"],["detail",""]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.ui.loginAlert()&&u),u},h.Fb,h.w)),u.ob(1,49152,null,0,o.J,[u.h,u.k,u.z],{detail:[0,"detail"]},null),(n()(),u.pb(2,0,null,0,2,"ion-label",[],null,null,null,h.Gb,h.C)),u.ob(3,49152,null,0,o.P,[u.h,u.k,u.z],null,null),(n()(),u.Fb(-1,0,["Currency"])),(n()(),u.pb(5,0,null,0,2,"ion-note",[["color","medium"],["slot","end"]],null,null,null,h.Mb,h.I)),u.ob(6,49152,null,0,o.ab,[u.h,u.k,u.z],{color:[0,"color"]},null),(n()(),u.Fb(-1,0,[" GPB "]))],function(n,l){n(l,1,0,""),n(l,6,0,"medium")},null)}function k(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,2,"ion-select-option",[],null,null,null,h.Sb,h.P)),u.ob(1,49152,null,0,o.qb,[u.h,u.k,u.z],{value:[0,"value"]},null),(n()(),u.Fb(2,0,[""," (",")"]))],function(n,l){n(l,1,0,l.context.$implicit.name)},function(n,l){n(l,2,0,l.context.$implicit.title,l.context.$implicit.symbol)})}function m(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,13,"ion-item",[],null,null,null,h.Fb,h.w)),u.ob(1,49152,null,0,o.J,[u.h,u.k,u.z],null,null),(n()(),u.pb(2,0,null,0,2,"ion-label",[],null,null,null,h.Gb,h.C)),u.ob(3,49152,null,0,o.P,[u.h,u.k,u.z],null,null),(n()(),u.Fb(-1,0,["Currency"])),(n()(),u.pb(5,0,null,0,8,"ion-select",[["interface","action-sheet"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(n,l,t){var o=!0,e=n.component;return"ionBlur"===l&&(o=!1!==u.zb(n,6)._handleBlurEvent(t.target)&&o),"ionChange"===l&&(o=!1!==u.zb(n,6)._handleChangeEvent(t.target)&&o),"ngModelChange"===l&&(o=!1!==(e.selectedCurrency=t)&&o),"ionChange"===l&&(o=!1!==e.changeCurrency(t,e.selectedCurrency)&&o),o},h.Tb,h.O)),u.ob(6,16384,null,0,o.Qb,[u.k],null,null),u.Cb(1024,null,f.i,function(n){return[n]},[o.Qb]),u.ob(8,671744,null,0,f.n,[[8,null],[8,null],[8,null],[6,f.i]],{model:[0,"model"]},{update:"ngModelChange"}),u.Cb(2048,null,f.j,null,[f.n]),u.ob(10,16384,null,0,f.k,[[4,f.j]],null,null),u.ob(11,49152,null,0,o.pb,[u.h,u.k,u.z],{interface:[0,"interface"]},null),(n()(),u.gb(16777216,null,0,1,null,k)),u.ob(13,278528,null,0,p.i,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,8,0,t.selectedCurrency),n(l,11,0,"action-sheet"),n(l,13,0,t.currencies)},function(n,l){n(l,5,0,u.zb(l,10).ngClassUntouched,u.zb(l,10).ngClassTouched,u.zb(l,10).ngClassPristine,u.zb(l,10).ngClassDirty,u.zb(l,10).ngClassValid,u.zb(l,10).ngClassInvalid,u.zb(l,10).ngClassPending)})}function z(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,12,"ion-header",[],null,null,null,h.ub,h.q)),u.ob(1,49152,null,0,o.D,[u.h,u.k,u.z],null,null),(n()(),u.pb(2,0,null,0,10,"ion-toolbar",[],null,null,null,h.gc,h.cb)),u.ob(3,49152,null,0,o.Eb,[u.h,u.k,u.z],null,null),(n()(),u.pb(4,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,h.jb,h.f)),u.ob(5,49152,null,0,o.n,[u.h,u.k,u.z],null,null),(n()(),u.pb(6,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.goBack()&&u),u},h.ib,h.e)),u.ob(7,49152,null,0,o.m,[u.h,u.k,u.z],null,null),(n()(),u.pb(8,0,null,0,1,"ion-icon",[["src","/assets/icons/close.svg"]],null,null,null,h.vb,h.r)),u.ob(9,49152,null,0,o.E,[u.h,u.k,u.z],{src:[0,"src"]},null),(n()(),u.pb(10,0,null,0,2,"ion-title",[],null,null,null,h.ec,h.ab)),u.ob(11,49152,null,0,o.Cb,[u.h,u.k,u.z],null,null),(n()(),u.Fb(-1,0,[" Settings "])),(n()(),u.pb(13,0,null,null,18,"ion-content",[["padding",""]],null,null,null,h.qb,h.m)),u.ob(14,49152,null,0,o.w,[u.h,u.k,u.z],null,null),u.ob(15,16384,null,0,o.f,[u.k],null,null),(n()(),u.pb(16,0,null,0,15,"ion-list",[["lines","full"]],null,null,null,h.Ib,h.D)),u.ob(17,49152,null,0,o.Q,[u.h,u.k,u.z],{lines:[0,"lines"]},null),(n()(),u.gb(16777216,null,0,1,null,v)),u.ob(19,16384,null,0,p.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.gb(16777216,null,0,1,null,C)),u.ob(21,16384,null,0,p.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.gb(16777216,null,0,1,null,m)),u.ob(23,16384,null,0,p.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.pb(24,0,null,0,7,"ion-item",[["class","has-detail"],["detail",""]],null,null,null,h.Fb,h.w)),u.ob(25,49152,null,0,o.J,[u.h,u.k,u.z],{detail:[0,"detail"]},null),(n()(),u.pb(26,0,null,0,2,"ion-label",[],null,null,null,h.Gb,h.C)),u.ob(27,49152,null,0,o.P,[u.h,u.k,u.z],null,null),(n()(),u.Fb(-1,0,["Language"])),(n()(),u.pb(29,0,null,0,2,"ion-note",[["color","medium"],["slot","end"]],null,null,null,h.Mb,h.I)),u.ob(30,49152,null,0,o.ab,[u.h,u.k,u.z],{color:[0,"color"]},null),(n()(),u.Fb(-1,0,[" English "])),(n()(),u.pb(32,0,null,null,10,"ion-footer",[],null,null,null,h.sb,h.o)),u.ob(33,49152,null,0,o.B,[u.h,u.k,u.z],null,null),(n()(),u.pb(34,0,null,0,1,"ion-img",[["src","/assets/logo.svg"]],null,null,null,h.wb,h.s)),u.ob(35,49152,null,0,o.F,[u.h,u.k,u.z],{src:[0,"src"]},null),(n()(),u.pb(36,0,null,0,6,"ion-button",[["color","light"],["expand","full"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.logOut()&&u),u},h.ib,h.e)),u.ob(37,49152,null,0,o.m,[u.h,u.k,u.z],{color:[0,"color"],expand:[1,"expand"]},null),(n()(),u.pb(38,0,null,0,1,"ion-icon",[["name","log-out"],["slot","start"]],null,null,null,h.vb,h.r)),u.ob(39,49152,null,0,o.E,[u.h,u.k,u.z],{name:[0,"name"]},null),(n()(),u.pb(40,0,null,0,2,"ion-label",[],null,null,null,h.Gb,h.C)),u.ob(41,49152,null,0,o.P,[u.h,u.k,u.z],null,null),(n()(),u.Fb(-1,0,[" Log Out "]))],function(n,l){var t=l.component;n(l,9,0,"/assets/icons/close.svg"),n(l,17,0,"full"),n(l,19,0,t.authService.authenticationState.value),n(l,21,0,!t.authService.authenticationState.value),n(l,23,0,t.authService.authenticationState.value),n(l,25,0,""),n(l,30,0,"medium"),n(l,35,0,"/assets/logo.svg"),n(l,37,0,"light","full"),n(l,39,0,"log-out")},null)}function S(n){return u.Hb(0,[(n()(),u.pb(0,0,null,null,1,"app-settings",[],null,null,null,z,y)),u.ob(1,114688,null,0,s,[e.a,i.a,d.m,o.Kb,r.a],null,null)],function(n,l){n(l,1,0)},null)}var w=u.lb("app-settings",s,S,{},{},[]);t.d(l,"SettingsPageModuleNgFactory",function(){return x});var x=u.mb(b,[],function(n){return u.wb([u.xb(512,u.j,u.bb,[[8,[g.a,w]],[3,u.j],u.x]),u.xb(4608,p.l,p.k,[u.u,[2,p.u]]),u.xb(4608,f.t,f.t,[]),u.xb(4608,o.c,o.c,[u.z,u.g]),u.xb(4608,o.Jb,o.Jb,[o.c,u.j,u.q]),u.xb(4608,o.Ob,o.Ob,[o.c,u.j,u.q]),u.xb(1073742336,p.b,p.b,[]),u.xb(1073742336,f.r,f.r,[]),u.xb(1073742336,f.f,f.f,[]),u.xb(1073742336,o.Gb,o.Gb,[]),u.xb(1073742336,d.o,d.o,[[2,d.u],[2,d.m]]),u.xb(1073742336,b,b,[]),u.xb(1024,d.k,function(){return[[{path:"",component:s}]]},[])])})}}]);
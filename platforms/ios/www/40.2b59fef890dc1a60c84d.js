(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"3F3D":function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),u=t("ZZ/e"),o=t("lGQG"),i=t("XjJT"),r=t("Witw"),c=function(n,l,t,e){return new(t||(t=Promise))(function(u,o){function i(n){try{c(e.next(n))}catch(l){o(l)}}function r(n){try{c(e.throw(n))}catch(l){o(l)}}function c(n){n.done?u(n.value):new t(function(l){l(n.value)}).then(i,r)}c((e=e.apply(n,l||[])).next())})},a=function(n,l){var t,e,u,o,i={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return o={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function r(o){return function(r){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,e&&(u=2&o[0]?e.return:o[0]?e.throw||((u=e.return)&&u.call(e),0):e.next)&&!(u=u.call(e,o[1])).done)return u;switch(e=0,u&&(o=[2&o[0],u.value]),o[0]){case 0:case 1:u=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,e=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(u=(u=i.trys).length>0&&u[u.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!u||o[1]>u[0]&&o[1]<u[3])){i.label=o[1];break}if(6===o[0]&&i.label<u[1]){i.label=u[1],u=o;break}if(u&&i.label<u[2]){i.label=u[2],i.ops.push(o);break}u[2]&&i.ops.pop(),i.trys.pop();continue}o=l.call(n,i)}catch(r){o=[6,r],e=0}finally{t=u=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,r])}}},s=function(){function n(n,l,t,e,u){this.authService=n,this.wpApiService=l,this.router=t,this.navCtrl=e,this.ui=u,this.currencies=[],this.notifyStatus=!0,this.uNotifyStatus=!0,this.currencyLoaded=!1,this.notifyLoaded=!1}return n.prototype.goBack=function(){this.navCtrl.back()},n.prototype.goPrivacy=function(){this.navCtrl.navigateForward("/privacy")},n.prototype.ngOnInit=function(){var n=this;this.authService.authenticationState.subscribe(function(l){return c(n,void 0,void 0,function(){var n=this;return a(this,function(t){switch(t.label){case 0:return console.log(l),l?(this.ui.showPageLoading(),[4,this.wpApiService.notificationStatus(this.authService.userToken).subscribe(function(l){console.log("User Notify: ",l.data),n.notifyStatus=l.data.status,n.notifyLoaded=!0,n.uNotifyStatus=l.data.status},function(n){console.log(n)})]):[3,3];case 1:return t.sent(),[4,this.wpApiService.getCurrencies(this.authService.userToken).subscribe(function(l){return c(n,void 0,void 0,function(){var n=this;return a(this,function(t){switch(t.label){case 0:return console.log(l),this.currencies=l.data,[4,this.wpApiService.getUserCurrency(this.authService.userToken).subscribe(function(l){console.log("User Currency: ",l.data),n.selectedCurrency=l.data.name,n.userCurrency=l.data.name,n.currencyLoaded=!0,n.ui.hidePageLoading()},function(n){console.log(n)})];case 1:return t.sent(),[2]}})})},function(n){console.log(n)})];case 2:t.sent(),t.label=3;case 3:return[2]}})})})},n.prototype.logOut=function(){var n=this;this.authService.logOut().then(function(){n.navCtrl.navigateRoot("/tips")})},n.prototype.changeCurrency=function(n,l){var t=this;console.log(n),console.log(l),this.userCurrency&&n.detail.value!==this.userCurrency&&(console.log("Currency Changed By User"),this.wpApiService.setCurrency(this.authService.userToken,l).subscribe(function(n){console.log(n),t.selectedCurrency=l,t.userCurrency=l}))},n.prototype.changeNotify=function(n){var l=this;console.log("this.notify:",this.notifyStatus),console.log("this.uNotify:",this.uNotifyStatus),this.notifyStatus!==this.uNotifyStatus&&(console.log(n.detail.checked),console.log("Notify Changed by"),console.log("this.notify after:",this.notifyStatus),console.log("this.uNotify after:",this.uNotifyStatus),this.wpApiService.changeNotification(this.authService.userToken,n.detail.checked?1:0).subscribe(function(t){console.log(t.data),l.uNotifyStatus=n.detail.checked,console.log("this.notify after api:",l.notifyStatus),console.log("this.uNotify after api:",l.uNotifyStatus)},function(n){console.log(n)}))},n}(),b=function(){return function(){}}(),h=t("pMnS"),g=t("oBZk"),f=t("gIcY"),d=t("Ip0R"),p=t("ZYCi"),y=e.nb({encapsulation:0,styles:[["ion-select[_ngcontent-%COMP%]   .select-text[_ngcontent-%COMP%]{font-size:16px;--color:var(--ion-text-color2);font-weight:300}ion-select[_ngcontent-%COMP%]   .select-icon[_ngcontent-%COMP%]{--color:#00BDBB}ion-footer[_ngcontent-%COMP%]{padding-bottom:0;background:#fff;text-align:center;align-items:center}ion-footer[_ngcontent-%COMP%]:before{display:none}ion-footer[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:190px;align-self:center;display:block;margin:0 auto}ion-footer[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin:10px 0 0;color:var(--ion-color-primary);--ion-color-contrast:var(--ion-color-primary)!important;text-transform:inherit}ion-item.has-detail[_ngcontent-%COMP%]{--detail-icon-color:var(--ion-color-primary);--detail-icon-opacity:1}"]],data:{}});function v(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,11,"ion-item",[],null,null,null,g.Fb,g.w)),e.ob(1,49152,null,0,u.J,[e.h,e.k,e.z],null,null),(n()(),e.pb(2,0,null,0,2,"ion-label",[],null,null,null,g.Gb,g.C)),e.ob(3,49152,null,0,u.P,[e.h,e.k,e.z],null,null),(n()(),e.Fb(-1,0,["Notifications"])),(n()(),e.pb(5,0,null,0,6,"ion-toggle",[["slot","end"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ngModelChange"],[null,"ionBlur"]],function(n,l,t){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==e.zb(n,6)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.zb(n,6)._handleIonChange(t.target)&&u),"ionChange"===l&&(u=!1!==o.changeNotify(t)&&u),"ngModelChange"===l&&(u=!1!==(o.notifyStatus=t)&&u),u},g.fc,g.bb)),e.ob(6,16384,null,0,u.d,[e.k],null,null),e.Cb(1024,null,f.i,function(n){return[n]},[u.d]),e.ob(8,671744,null,0,f.n,[[8,null],[8,null],[8,null],[6,f.i]],{model:[0,"model"]},{update:"ngModelChange"}),e.Cb(2048,null,f.j,null,[f.n]),e.ob(10,16384,null,0,f.k,[[4,f.j]],null,null),e.ob(11,49152,null,0,u.Db,[e.h,e.k,e.z],null,null)],function(n,l){n(l,8,0,l.component.notifyStatus)},function(n,l){n(l,5,0,e.zb(l,10).ngClassUntouched,e.zb(l,10).ngClassTouched,e.zb(l,10).ngClassPristine,e.zb(l,10).ngClassDirty,e.zb(l,10).ngClassValid,e.zb(l,10).ngClassInvalid,e.zb(l,10).ngClassPending)})}function C(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,7,"ion-item",[["class","has-detail"],["detail",""]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.ui.loginAlert()&&e),e},g.Fb,g.w)),e.ob(1,49152,null,0,u.J,[e.h,e.k,e.z],{detail:[0,"detail"]},null),(n()(),e.pb(2,0,null,0,2,"ion-label",[],null,null,null,g.Gb,g.C)),e.ob(3,49152,null,0,u.P,[e.h,e.k,e.z],null,null),(n()(),e.Fb(-1,0,["Currency"])),(n()(),e.pb(5,0,null,0,2,"ion-note",[["color","medium"],["slot","end"]],null,null,null,g.Mb,g.I)),e.ob(6,49152,null,0,u.ab,[e.h,e.k,e.z],{color:[0,"color"]},null),(n()(),e.Fb(-1,0,[" GPB "]))],function(n,l){n(l,1,0,""),n(l,6,0,"medium")},null)}function k(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,12,"ion-header",[],null,null,null,g.ub,g.q)),e.ob(1,49152,null,0,u.D,[e.h,e.k,e.z],null,null),(n()(),e.pb(2,0,null,0,10,"ion-toolbar",[],null,null,null,g.gc,g.cb)),e.ob(3,49152,null,0,u.Eb,[e.h,e.k,e.z],null,null),(n()(),e.pb(4,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,g.jb,g.f)),e.ob(5,49152,null,0,u.n,[e.h,e.k,e.z],null,null),(n()(),e.pb(6,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.goBack()&&e),e},g.ib,g.e)),e.ob(7,49152,null,0,u.m,[e.h,e.k,e.z],null,null),(n()(),e.pb(8,0,null,0,1,"ion-icon",[["src","/assets/icons/close.svg"]],null,null,null,g.vb,g.r)),e.ob(9,49152,null,0,u.E,[e.h,e.k,e.z],{src:[0,"src"]},null),(n()(),e.pb(10,0,null,0,2,"ion-title",[],null,null,null,g.ec,g.ab)),e.ob(11,49152,null,0,u.Cb,[e.h,e.k,e.z],null,null),(n()(),e.Fb(-1,0,[" Settings "])),(n()(),e.pb(13,0,null,null,26,"ion-content",[["padding",""]],null,null,null,g.qb,g.m)),e.ob(14,49152,null,0,u.w,[e.h,e.k,e.z],null,null),e.ob(15,16384,null,0,u.f,[e.k],null,null),(n()(),e.pb(16,0,null,0,23,"ion-list",[["lines","full"]],null,null,null,g.Ib,g.D)),e.ob(17,49152,null,0,u.Q,[e.h,e.k,e.z],{lines:[0,"lines"]},null),(n()(),e.gb(16777216,null,0,1,null,v)),e.ob(19,16384,null,0,d.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,0,1,null,C)),e.ob(21,16384,null,0,d.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(22,0,null,0,17,"ion-item",[["class","has-detail"],["detail",""]],null,null,null,g.Fb,g.w)),e.ob(23,49152,null,0,u.J,[e.h,e.k,e.z],{detail:[0,"detail"]},null),(n()(),e.pb(24,0,null,0,2,"ion-label",[],null,null,null,g.Gb,g.C)),e.ob(25,49152,null,0,u.P,[e.h,e.k,e.z],null,null),(n()(),e.Fb(-1,0,["Currency"])),(n()(),e.pb(27,0,null,0,12,"ion-select",[["interface","action-sheet"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(n,l,t){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==e.zb(n,28)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.zb(n,28)._handleChangeEvent(t.target)&&u),"ngModelChange"===l&&(u=!1!==(o.selectedCurrency=t)&&u),"ionChange"===l&&(u=!1!==o.changeCurrency(t,o.selectedCurrency)&&u),u},g.Tb,g.O)),e.ob(28,16384,null,0,u.Qb,[e.k],null,null),e.Cb(1024,null,f.i,function(n){return[n]},[u.Qb]),e.ob(30,671744,null,0,f.n,[[8,null],[8,null],[8,null],[6,f.i]],{model:[0,"model"]},{update:"ngModelChange"}),e.Cb(2048,null,f.j,null,[f.n]),e.ob(32,16384,null,0,f.k,[[4,f.j]],null,null),e.ob(33,49152,null,0,u.pb,[e.h,e.k,e.z],{interface:[0,"interface"]},null),(n()(),e.pb(34,0,null,0,2,"ion-select-option",[["selected",""],["value","GPB"]],null,null,null,g.Sb,g.P)),e.ob(35,49152,null,0,u.qb,[e.h,e.k,e.z],{selected:[0,"selected"],value:[1,"value"]},null),(n()(),e.Fb(-1,0,["GPB"])),(n()(),e.pb(37,0,null,0,2,"ion-select-option",[["value","EGP"]],null,null,null,g.Sb,g.P)),e.ob(38,49152,null,0,u.qb,[e.h,e.k,e.z],{value:[0,"value"]},null),(n()(),e.Fb(-1,0,["EGP"])),(n()(),e.pb(40,0,null,null,10,"ion-footer",[],null,null,null,g.sb,g.o)),e.ob(41,49152,null,0,u.B,[e.h,e.k,e.z],null,null),(n()(),e.pb(42,0,null,0,1,"ion-img",[["src","/assets/logo.svg"]],null,null,null,g.wb,g.s)),e.ob(43,49152,null,0,u.F,[e.h,e.k,e.z],{src:[0,"src"]},null),(n()(),e.pb(44,0,null,0,6,"ion-button",[["color","light"],["expand","full"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.logOut()&&e),e},g.ib,g.e)),e.ob(45,49152,null,0,u.m,[e.h,e.k,e.z],{color:[0,"color"],expand:[1,"expand"]},null),(n()(),e.pb(46,0,null,0,1,"ion-icon",[["name","log-out"],["slot","start"]],null,null,null,g.vb,g.r)),e.ob(47,49152,null,0,u.E,[e.h,e.k,e.z],{name:[0,"name"]},null),(n()(),e.pb(48,0,null,0,2,"ion-label",[],null,null,null,g.Gb,g.C)),e.ob(49,49152,null,0,u.P,[e.h,e.k,e.z],null,null),(n()(),e.Fb(-1,0,[" Log Out "]))],function(n,l){var t=l.component;n(l,9,0,"/assets/icons/close.svg"),n(l,17,0,"full"),n(l,19,0,t.authService.authenticationState.value),n(l,21,0,!t.authService.authenticationState.value),n(l,23,0,""),n(l,30,0,t.selectedCurrency),n(l,33,0,"action-sheet"),n(l,35,0,"","GPB"),n(l,38,0,"EGP"),n(l,43,0,"/assets/logo.svg"),n(l,45,0,"light","full"),n(l,47,0,"log-out")},function(n,l){n(l,27,0,e.zb(l,32).ngClassUntouched,e.zb(l,32).ngClassTouched,e.zb(l,32).ngClassPristine,e.zb(l,32).ngClassDirty,e.zb(l,32).ngClassValid,e.zb(l,32).ngClassInvalid,e.zb(l,32).ngClassPending)})}function m(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,1,"app-settings",[],null,null,null,k,y)),e.ob(1,114688,null,0,s,[o.a,i.a,p.m,u.Kb,r.a],null,null)],function(n,l){n(l,1,0)},null)}var z=e.lb("app-settings",s,m,{},{},[]);t.d(l,"SettingsPageModuleNgFactory",function(){return S});var S=e.mb(b,[],function(n){return e.wb([e.xb(512,e.j,e.bb,[[8,[h.a,z]],[3,e.j],e.x]),e.xb(4608,d.l,d.k,[e.u,[2,d.u]]),e.xb(4608,f.t,f.t,[]),e.xb(4608,u.c,u.c,[e.z,e.g]),e.xb(4608,u.Jb,u.Jb,[u.c,e.j,e.q]),e.xb(4608,u.Ob,u.Ob,[u.c,e.j,e.q]),e.xb(1073742336,d.b,d.b,[]),e.xb(1073742336,f.r,f.r,[]),e.xb(1073742336,f.f,f.f,[]),e.xb(1073742336,u.Gb,u.Gb,[]),e.xb(1073742336,p.o,p.o,[[2,p.u],[2,p.m]]),e.xb(1073742336,b,b,[]),e.xb(1024,p.k,function(){return[[{path:"",component:s}]]},[])])})}}]);
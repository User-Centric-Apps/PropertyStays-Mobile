(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{VLDr:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=u("gIcY"),o=u("XjJT"),i=u("ZZ/e"),a=u("lGQG"),b=function(){function l(l,n,u,e){this.wpApiService=l,this.navCtrl=n,this.authService=u,this.formBuilder=e,this.hasSent=!1,this.name="",this.email="",this.feedbacks=""}return l.prototype.ngOnInit=function(){var l=this;this.checkLogin(),this.feedForm=this.formBuilder.group({name:[this.name,[t.r.required,t.r.minLength(3)]],email:[this.email,[t.r.required,t.r.email]],subject:["",[t.r.required]],message:["",[t.r.required]]}),this.authService.authenticationState.subscribe(function(n){console.log(n),n&&(console.log("User Data",l.authService.userData),l.feedForm.patchValue({name:l.authService.userData.user_display_name,email:l.authService.userData.email}))})},l.prototype.checkLogin=function(){return l=this,void 0,u=function(){var l=this;return function(l,n){var u,e,t,o,i={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(u)throw new TypeError("Generator is already executing.");for(;i;)try{if(u=1,e&&(t=2&o[0]?e.return:o[0]?e.throw||((t=e.return)&&t.call(e),0):e.next)&&!(t=t.call(e,o[1])).done)return t;switch(e=0,t&&(o=[2&o[0],t.value]),o[0]){case 0:case 1:t=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,e=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(t=(t=i.trys).length>0&&t[t.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!t||o[1]>t[0]&&o[1]<t[3])){i.label=o[1];break}if(6===o[0]&&i.label<t[1]){i.label=t[1],t=o;break}if(t&&i.label<t[2]){i.label=t[2],i.ops.push(o);break}t[2]&&i.ops.pop(),i.trys.pop();continue}o=n.call(l,i)}catch(a){o=[6,a],e=0}finally{u=t=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}(this,function(n){switch(n.label){case 0:return[4,this.authService.checkToken().then(function(){l.authService.authenticationState.value&&l.authService.getUserData2().then(function(n){var u=n;console.log("any"),console.log(u),l.name=u.user_display_name,l.email=u.email})})];case 1:return n.sent(),[2]}})},new((n=void 0)||(n=Promise))(function(e,t){function o(l){try{a(u.next(l))}catch(n){t(n)}}function i(l){try{a(u.throw(l))}catch(n){t(n)}}function a(l){l.done?e(l.value):new n(function(n){n(l.value)}).then(o,i)}a((u=u.apply(l,[])).next())});var l,n,u},l.prototype.sendFeedback=function(){var l=this,n=this.feedForm.value;console.log(n),this.wpApiService.sendFeedback(n).subscribe(function(n){l.feedbacks=n.data,1===l.feedbacks.status&&(l.hasSent=!0),console.log(n.data.status)})},l.prototype.goBack=function(){this.navCtrl.back()},l}(),r=function(){return function(){}}(),s=u("pMnS"),c=u("oBZk"),g=u("Ip0R"),p=e.nb({encapsulation:0,styles:[[".item-input[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]{--padding-end:16px}.header-ios[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]:last-child{--border-width:0}"]],data:{}});function d(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,65,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==e.zb(l,2).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.zb(l,2).onReset()&&t),t},null,null)),e.ob(1,16384,null,0,t.t,[],null,null),e.ob(2,540672,null,0,t.e,[[8,null],[8,null]],{form:[0,"form"]},null),e.Cb(2048,null,t.a,null,[t.e]),e.ob(4,16384,null,0,t.m,[[4,t.a]],null,null),(l()(),e.pb(5,0,null,null,1,"p",[["class","text-second-color text-14"]],null,null,null,null,null)),(l()(),e.Fb(-1,null,[" We\u2019re always working to improve the PropertyStays experience, so we\u2019d love to hear what\u2019s working and how we can do better. "])),(l()(),e.pb(7,0,null,null,1,"p",[["class","text-second-color text-14"]],null,null,null,null,null)),(l()(),e.Fb(-1,null,[" You can also get help by visiting the FAQ page, or talk to us using Live Chat feature. "])),(l()(),e.pb(9,0,null,null,11,"ion-item",[["class","item-input"]],null,null,null,c.Fb,c.w)),e.ob(10,49152,null,0,i.J,[e.h,e.k,e.z],null,null),(l()(),e.pb(11,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,c.Gb,c.C)),e.ob(12,49152,null,0,i.P,[e.h,e.k,e.z],{position:[0,"position"]},null),(l()(),e.Fb(-1,0,["Full Name"])),(l()(),e.pb(14,0,null,0,6,"ion-input",[["clearInput",""],["formControlName","name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.zb(l,15)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.zb(l,15)._handleInputEvent(u.target)&&t),t},c.zb,c.v)),e.ob(15,16384,null,0,i.Rb,[e.k],null,null),e.Cb(1024,null,t.j,function(l){return[l]},[i.Rb]),e.ob(17,671744,null,0,t.d,[[3,t.a],[8,null],[8,null],[6,t.j],[2,t.v]],{name:[0,"name"]},null),e.Cb(2048,null,t.k,null,[t.d]),e.ob(19,16384,null,0,t.l,[[4,t.k]],null,null),e.ob(20,49152,null,0,i.I,[e.h,e.k,e.z],{clearInput:[0,"clearInput"],type:[1,"type"]},null),(l()(),e.pb(21,0,null,null,11,"ion-item",[["class","item-input"]],null,null,null,c.Fb,c.w)),e.ob(22,49152,null,0,i.J,[e.h,e.k,e.z],null,null),(l()(),e.pb(23,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,c.Gb,c.C)),e.ob(24,49152,null,0,i.P,[e.h,e.k,e.z],{position:[0,"position"]},null),(l()(),e.Fb(-1,0,["Email"])),(l()(),e.pb(26,0,null,0,6,"ion-input",[["formControlName","email"],["type","email"],["viewInput",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.zb(l,27)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.zb(l,27)._handleInputEvent(u.target)&&t),t},c.zb,c.v)),e.ob(27,16384,null,0,i.Rb,[e.k],null,null),e.Cb(1024,null,t.j,function(l){return[l]},[i.Rb]),e.ob(29,671744,null,0,t.d,[[3,t.a],[8,null],[8,null],[6,t.j],[2,t.v]],{name:[0,"name"]},null),e.Cb(2048,null,t.k,null,[t.d]),e.ob(31,16384,null,0,t.l,[[4,t.k]],null,null),e.ob(32,49152,null,0,i.I,[e.h,e.k,e.z],{type:[0,"type"]},null),(l()(),e.pb(33,0,null,null,20,"ion-item",[["class","item-input"]],null,null,null,c.Fb,c.w)),e.ob(34,49152,null,0,i.J,[e.h,e.k,e.z],null,null),(l()(),e.pb(35,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,c.Gb,c.C)),e.ob(36,49152,null,0,i.P,[e.h,e.k,e.z],{position:[0,"position"]},null),(l()(),e.Fb(-1,0,["Feedback is about"])),(l()(),e.pb(38,0,null,0,15,"ion-select",[["formControlName","subject"],["interface","popover"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.zb(l,39)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.zb(l,39)._handleChangeEvent(u.target)&&t),t},c.Tb,c.O)),e.ob(39,16384,null,0,i.Qb,[e.k],null,null),e.Cb(1024,null,t.j,function(l){return[l]},[i.Qb]),e.ob(41,671744,null,0,t.d,[[3,t.a],[8,null],[8,null],[6,t.j],[2,t.v]],{name:[0,"name"]},null),e.Cb(2048,null,t.k,null,[t.d]),e.ob(43,16384,null,0,t.l,[[4,t.k]],null,null),e.ob(44,49152,null,0,i.pb,[e.h,e.k,e.z],{interface:[0,"interface"]},null),(l()(),e.pb(45,0,null,0,2,"ion-select-option",[["value","Issue"]],null,null,null,c.Sb,c.P)),e.ob(46,49152,null,0,i.qb,[e.h,e.k,e.z],{value:[0,"value"]},null),(l()(),e.Fb(-1,0,["Issue"])),(l()(),e.pb(48,0,null,0,2,"ion-select-option",[["value","App Error"]],null,null,null,c.Sb,c.P)),e.ob(49,49152,null,0,i.qb,[e.h,e.k,e.z],{value:[0,"value"]},null),(l()(),e.Fb(-1,0,["App Error"])),(l()(),e.pb(51,0,null,0,2,"ion-select-option",[["value","Suggestion"]],null,null,null,c.Sb,c.P)),e.ob(52,49152,null,0,i.qb,[e.h,e.k,e.z],{value:[0,"value"]},null),(l()(),e.Fb(-1,0,["Suggestion"])),(l()(),e.pb(54,0,null,null,11,"ion-item",[["class","item-input"]],null,null,null,c.Fb,c.w)),e.ob(55,49152,null,0,i.J,[e.h,e.k,e.z],null,null),(l()(),e.pb(56,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,c.Gb,c.C)),e.ob(57,49152,null,0,i.P,[e.h,e.k,e.z],{position:[0,"position"]},null),(l()(),e.Fb(-1,0,["Your Message"])),(l()(),e.pb(59,0,null,0,6,"ion-textarea",[["formControlName","message"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.zb(l,60)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.zb(l,60)._handleInputEvent(u.target)&&t),t},c.cc,c.Y)),e.ob(60,16384,null,0,i.Rb,[e.k],null,null),e.Cb(1024,null,t.j,function(l){return[l]},[i.Rb]),e.ob(62,671744,null,0,t.d,[[3,t.a],[8,null],[8,null],[6,t.j],[2,t.v]],{name:[0,"name"]},null),e.Cb(2048,null,t.k,null,[t.d]),e.ob(64,16384,null,0,t.l,[[4,t.k]],null,null),e.ob(65,49152,null,0,i.Ab,[e.h,e.k,e.z],null,null)],function(l,n){l(n,2,0,n.component.feedForm),l(n,12,0,"floating"),l(n,17,0,"name"),l(n,20,0,"","text"),l(n,24,0,"floating"),l(n,29,0,"email"),l(n,32,0,"email"),l(n,36,0,"floating"),l(n,41,0,"subject"),l(n,44,0,"popover"),l(n,46,0,"Issue"),l(n,49,0,"App Error"),l(n,52,0,"Suggestion"),l(n,57,0,"floating"),l(n,62,0,"message")},function(l,n){l(n,0,0,e.zb(n,4).ngClassUntouched,e.zb(n,4).ngClassTouched,e.zb(n,4).ngClassPristine,e.zb(n,4).ngClassDirty,e.zb(n,4).ngClassValid,e.zb(n,4).ngClassInvalid,e.zb(n,4).ngClassPending),l(n,14,0,e.zb(n,19).ngClassUntouched,e.zb(n,19).ngClassTouched,e.zb(n,19).ngClassPristine,e.zb(n,19).ngClassDirty,e.zb(n,19).ngClassValid,e.zb(n,19).ngClassInvalid,e.zb(n,19).ngClassPending),l(n,26,0,e.zb(n,31).ngClassUntouched,e.zb(n,31).ngClassTouched,e.zb(n,31).ngClassPristine,e.zb(n,31).ngClassDirty,e.zb(n,31).ngClassValid,e.zb(n,31).ngClassInvalid,e.zb(n,31).ngClassPending),l(n,38,0,e.zb(n,43).ngClassUntouched,e.zb(n,43).ngClassTouched,e.zb(n,43).ngClassPristine,e.zb(n,43).ngClassDirty,e.zb(n,43).ngClassValid,e.zb(n,43).ngClassInvalid,e.zb(n,43).ngClassPending),l(n,59,0,e.zb(n,64).ngClassUntouched,e.zb(n,64).ngClassTouched,e.zb(n,64).ngClassPristine,e.zb(n,64).ngClassDirty,e.zb(n,64).ngClassValid,e.zb(n,64).ngClassInvalid,e.zb(n,64).ngClassPending)})}function h(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,2,"p",[["class","text-second-color text-16"],["text-center",""]],null,null,null,null,null)),e.ob(1,16384,null,0,i.f,[e.k],null,null),(l()(),e.Fb(-1,null,[" Thank you for your feedback, we will contact you back soon. "])),(l()(),e.pb(3,0,null,null,2,"ion-button",[["class","big-btn white-text"],["color","primary"],["expand","block"],["size","large"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.goBack()&&e),e},c.ib,c.e)),e.ob(4,49152,null,0,i.m,[e.h,e.k,e.z],{color:[0,"color"],expand:[1,"expand"],size:[2,"size"]},null),(l()(),e.Fb(-1,0,[" Go Back "]))],function(l,n){l(n,4,0,"primary","block","large")},null)}function f(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,17,"ion-header",[],null,null,null,c.ub,c.q)),e.ob(1,49152,null,0,i.D,[e.h,e.k,e.z],null,null),(l()(),e.pb(2,0,null,0,15,"ion-toolbar",[],null,null,null,c.gc,c.cb)),e.ob(3,49152,null,0,i.Eb,[e.h,e.k,e.z],null,null),(l()(),e.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,c.jb,c.f)),e.ob(5,49152,null,0,i.n,[e.h,e.k,e.z],null,null),(l()(),e.pb(6,0,null,0,2,"ion-back-button",[["color","primary"],["defaultHref","tabs/tab1"],["text",""]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.zb(l,8).onClick(u)&&t),t},c.gb,c.c)),e.ob(7,49152,null,0,i.i,[e.h,e.k,e.z],{color:[0,"color"],defaultHref:[1,"defaultHref"],text:[2,"text"]},null),e.ob(8,16384,null,0,i.j,[[2,i.kb],i.Kb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.pb(9,0,null,0,2,"ion-title",[],null,null,null,c.ec,c.ab)),e.ob(10,49152,null,0,i.Cb,[e.h,e.k,e.z],null,null),(l()(),e.Fb(-1,0,[" Feedback "])),(l()(),e.pb(12,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,c.jb,c.f)),e.ob(13,49152,null,0,i.n,[e.h,e.k,e.z],null,null),(l()(),e.pb(14,0,null,0,3,"ion-menu-button",[],null,null,null,c.Jb,c.G)),e.ob(15,49152,null,0,i.T,[e.h,e.k,e.z],null,null),(l()(),e.pb(16,0,null,0,1,"ion-icon",[["src","/assets/icon/atoms/menu.svg"]],null,null,null,c.vb,c.r)),e.ob(17,49152,null,0,i.E,[e.h,e.k,e.z],{src:[0,"src"]},null),(l()(),e.pb(18,0,null,null,5,"ion-content",[["padding",""]],null,null,null,c.qb,c.m)),e.ob(19,49152,null,0,i.w,[e.h,e.k,e.z],null,null),e.ob(20,16384,null,0,i.f,[e.k],null,null),(l()(),e.gb(16777216,null,0,1,null,d)),e.ob(22,16384,null,0,g.j,[e.O,e.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),e.gb(0,[["sended",2]],0,0,null,h)),(l()(),e.pb(24,0,null,null,4,"ion-footer",[],null,null,null,c.sb,c.o)),e.ob(25,49152,null,0,i.B,[e.h,e.k,e.z],null,null),(l()(),e.pb(26,0,null,0,2,"ion-button",[["class","big-btn white-text"],["expand","block"],["round",""],["size","large"],["strong",""]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.sendFeedback()&&e),e},c.ib,c.e)),e.ob(27,49152,null,0,i.m,[e.h,e.k,e.z],{disabled:[0,"disabled"],expand:[1,"expand"],size:[2,"size"],strong:[3,"strong"]},null),(l()(),e.Fb(-1,0,["Send my feedback "]))],function(l,n){var u=n.component;l(n,7,0,"primary","tabs/tab1",""),l(n,8,0,"tabs/tab1"),l(n,17,0,"/assets/icon/atoms/menu.svg"),l(n,22,0,!u.hasSent,e.zb(n,23)),l(n,27,0,u.feedForm.invalid,"block","large","")},null)}function m(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"app-feedback",[],null,null,null,f,p)),e.ob(1,114688,null,0,b,[o.a,i.Kb,a.a,t.c],null,null)],function(l,n){l(n,1,0)},null)}var v=e.lb("app-feedback",b,m,{},{},[]),k=u("ZYCi");u.d(n,"FeedbackPageModuleNgFactory",function(){return z});var z=e.mb(r,[],function(l){return e.wb([e.xb(512,e.j,e.bb,[[8,[s.a,v]],[3,e.j],e.x]),e.xb(4608,g.l,g.k,[e.u,[2,g.u]]),e.xb(4608,t.u,t.u,[]),e.xb(4608,i.c,i.c,[e.z,e.g]),e.xb(4608,i.Jb,i.Jb,[i.c,e.j,e.q]),e.xb(4608,i.Ob,i.Ob,[i.c,e.j,e.q]),e.xb(4608,t.c,t.c,[]),e.xb(1073742336,g.b,g.b,[]),e.xb(1073742336,t.s,t.s,[]),e.xb(1073742336,t.f,t.f,[]),e.xb(1073742336,i.Gb,i.Gb,[]),e.xb(1073742336,k.o,k.o,[[2,k.u],[2,k.m]]),e.xb(1073742336,t.p,t.p,[]),e.xb(1073742336,r,r,[]),e.xb(1024,k.k,function(){return[[{path:"",component:b}]]},[])])})}}]);
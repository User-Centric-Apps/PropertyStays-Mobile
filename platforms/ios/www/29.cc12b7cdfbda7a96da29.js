(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"f+ep":function(n,l,t){"use strict";t.r(l);var o=t("CcnG"),e=t("ZZ/e"),i=t("XjJT"),u=t("lGQG"),s=t("LAMn"),r=t("uPsM"),a=function(n,l,t,o){return new(t||(t=Promise))(function(e,i){function u(n){try{r(o.next(n))}catch(l){i(l)}}function s(n){try{r(o.throw(n))}catch(l){i(l)}}function r(n){n.done?e(n.value):new t(function(l){l(n.value)}).then(u,s)}r((o=o.apply(n,l||[])).next())})},c=function(n,l){var t,o,e,i,u={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,o&&(e=2&i[0]?o.return:i[0]?o.throw||((e=o.return)&&e.call(o),0):o.next)&&!(e=e.call(o,i[1])).done)return e;switch(o=0,e&&(i=[2&i[0],e.value]),i[0]){case 0:case 1:e=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,o=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(e=(e=u.trys).length>0&&e[e.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!e||i[1]>e[0]&&i[1]<e[3])){u.label=i[1];break}if(6===i[0]&&u.label<e[1]){u.label=e[1],e=i;break}if(e&&u.label<e[2]){u.label=e[2],u.ops.push(i);break}e[2]&&u.ops.pop(),u.trys.pop();continue}i=l.call(n,u)}catch(s){i=[6,s],o=0}finally{t=e=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},b=function(){function n(n,l,t,o,e,i,u,s,r,a){this.router=n,this.loadingController=l,this.wpApiService=t,this.toastController=o,this.navCtrl=e,this.authService=i,this.faio=u,this.platform=s,this.alertController=r,this.UDID=a,this.showPass=!1,this.canFPA=!0,this.userDataTest={name:"Syed Danish",email:"danishah7288@gmail.com",avatar:"http://i.pravatar.cc/150?img=14",address:"Pakistan"}}return n.prototype.goTo=function(n){this.router.navigateByUrl(n)},n.prototype.presentLoading=function(){return a(this,void 0,void 0,function(){return c(this,function(n){switch(n.label){case 0:return[4,this.loadingController.create({spinner:"circles",message:"Logging in...",translucent:!0,cssClass:"custom-class custom-loading"})];case 1:return[4,n.sent().present()];case 2:return[2,n.sent()]}})})},n.prototype.togglePass=function(){return a(this,void 0,void 0,function(){return c(this,function(n){return this.showPass=!this.showPass,[2]})})},n.prototype.successToast=function(n){return a(this,void 0,void 0,function(){return c(this,function(l){switch(l.label){case 0:return[4,this.toastController.create({message:"You have loged in Successfully - Welcome "+n,duration:500,position:"bottom",color:"success"})];case 1:return l.sent().present(),[2]}})})},n.prototype.failedToast=function(){return a(this,void 0,void 0,function(){return c(this,function(n){switch(n.label){case 0:return[4,this.toastController.create({message:"Wrong Username and/or Password, Please try again!",duration:4e3,position:"bottom",color:"danger"})];case 1:return n.sent().present(),[2]}})})},n.prototype.presentToast=function(n,l,t,o){return a(this,void 0,void 0,function(){return c(this,function(e){switch(e.label){case 0:return[4,this.toastController.create({message:n,color:l,position:t,duration:o})];case 1:return e.sent().present(),[2]}})})},n.prototype.FPAlert=function(n){return a(this,void 0,void 0,function(){var l=this;return c(this,function(t){switch(t.label){case 0:return[4,this.alertController.create({header:"Fingerprint Authorization!",message:"Do you want to save you login credentials with your <strong>Fingerprint</strong>",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:function(n){console.log("Confirm Cancel: blah"),l.navCtrl.navigateRoot("/tabs/tab1")}},{text:"Okay",handler:function(){console.log("Confirm Okay"),l.FPAuth(n)}}]})];case 1:return[4,t.sent().present()];case 2:return t.sent(),[2]}})})},n.prototype.FPLogin=function(){return a(this,void 0,void 0,function(){var n=this;return c(this,function(l){return this.faio.show({title:"Authentication",description:"Access to all the possible functions of the app."}).then(function(l){console.log(l),n.UDID.get().then(function(l){console.log(l),n.presentLoading(),n.wpApiService.logInByUDID(l).subscribe(function(l){n.loadingController.dismiss(),l.userToken?(n.authService.logIn(l),setTimeout(function(){n.navCtrl.navigateRoot("/tabs/tab1")},500)):n.presentToast("User with this authentication cannot be found!","danger","bottom",3e3)},function(l){n.loadingController.dismiss(),console.log(l),n.presentToast(l.message,"danger","bottom",3e3)})}).catch(function(n){return console.log(n)})}).catch(function(l){console.log(l),n.presentToast(l.message,"danger","bottom",3e3)}),[2]})})},n.prototype.FPAuth=function(n){return a(this,void 0,void 0,function(){var l=this;return c(this,function(t){return this.faio.show({title:"Authentication",description:"Access to all the possible functions of the app."}).then(function(t){console.log(t),l.UDID.get().then(function(t){console.log(t),l.wpApiService.setDeviceUDID(n,t).subscribe(function(n){1===n.status&&(l.presentToast("Authentication Succeeded","success","bottom",2e3),l.navCtrl.navigateRoot("/tabs/tab1"))},function(n){console.log(n)})}).catch(function(n){console.log(n)})}).catch(function(n){console.log(n),l.presentToast(n.message,"danger","bottom",3e3),l.navCtrl.navigateRoot("/tabs/tab1")}),[2]})})},n.prototype.getUDID=function(){return a(this,void 0,void 0,function(){return c(this,function(n){return this.UDID.get().then(function(n){console.log(n)}).catch(function(n){return console.log(n)}),[2]})})},n.prototype.doLogin=function(n){var l=this;console.log(this.username),console.log(this.password.toString()),this.presentLoading(),this.wpApiService.postAuth(this.username,this.password.toString()).subscribe(function(n){l.authService.logIn(n),l.loadingController.dismiss(),console.log(n),l.successToast(n.user_display_name),l.navCtrl.navigateRoot("/tabs/tab1")},function(n){console.log("error"),console.log(n),console.log("Username Or Password is not correct, Please Try Again"),l.loadingController.dismiss(),l.failedToast()})},n.prototype.ngOnInit=function(){var n=this;this.platform.ready().then(function(){n.faio.isAvailable()&&(n.canFPA=!0)})},n}(),g=function(){return function(){}}(),p=t("pMnS"),d=t("oBZk"),h=t("gIcY"),f=t("Ip0R"),m=t("ZYCi"),v=o.nb({encapsulation:0,styles:[[".big-btn[_ngcontent-%COMP%]{margin:25px 0}.big-btn.facebook[_ngcontent-%COMP%]{--background:#3a559f;--background-activated:#2c4484}.big-btn.google[_ngcontent-%COMP%]{--background:#a1bccf;--background-activated:#7f9eb3}.big-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:20px;position:absolute;left:10%}.big-btn.fp-login[_ngcontent-%COMP%]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:25px auto}.big-btn.fp-login[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:0;position:relative;left:auto}.content-icon[_ngcontent-%COMP%]{margin:5vh 0;text-align:center;display:flex;align-items:center;flex-direction:column}.content-icon[_ngcontent-%COMP%]   .lock-icon[_ngcontent-%COMP%]{width:80px}.divider[_ngcontent-%COMP%]{text-align:center;margin:5vh -16px}.divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:#fff;padding:8px 6px;border-radius:100%}.divider[_ngcontent-%COMP%]:after{content:'';height:1px;background:#fff;display:block;margin-top:-10px}ion-item[_ngcontent-%COMP%]   ion-icon.show-pass[_ngcontent-%COMP%]{position:absolute;z-index:99;right:10px;margin-top:10px;opacity:0;display:none;top:50%;transform:translateY(-50%)}ion-item.item-has-value[_ngcontent-%COMP%]   ion-icon.show-pass[_ngcontent-%COMP%]{opacity:.5;display:block}ion-item.item-has-value[_ngcontent-%COMP%]   ion-icon.show-pass.active[_ngcontent-%COMP%]{opacity:.9}ion-label.label-floating[_ngcontent-%COMP%]{font-size:20px;background:0 0!important}"]],data:{}});function C(n){return o.Hb(0,[(n()(),o.pb(0,0,null,null,16,"ion-header",[],null,null,null,d.vb,d.q)),o.ob(1,49152,null,0,e.D,[o.h,o.k,o.z],null,null),(n()(),o.pb(2,0,null,0,14,"ion-toolbar",[],null,null,null,d.ic,d.db)),o.ob(3,49152,null,0,e.Eb,[o.h,o.k,o.z],null,null),(n()(),o.pb(4,0,null,0,2,"ion-title",[],null,null,null,d.gc,d.bb)),o.ob(5,49152,null,0,e.Cb,[o.h,o.k,o.z],null,null),(n()(),o.Fb(-1,0,["Sign In"])),(n()(),o.pb(7,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,d.kb,d.f)),o.ob(8,49152,null,0,e.n,[o.h,o.k,o.z],null,null),(n()(),o.pb(9,0,null,0,2,"ion-back-button",[["color","primary"],["text",""]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==o.zb(n,11).onClick(t)&&e),e},d.hb,d.c)),o.ob(10,49152,null,0,e.i,[o.h,o.k,o.z],{color:[0,"color"],text:[1,"text"]},null),o.ob(11,16384,null,0,e.j,[[2,e.kb],e.Kb],null,null),(n()(),o.pb(12,0,null,0,4,"ion-buttons",[["slot","end"]],null,null,null,d.kb,d.f)),o.ob(13,49152,null,0,e.n,[o.h,o.k,o.z],null,null),(n()(),o.pb(14,0,null,0,2,"ion-back-button",[["class","close-icon"],["color","dark"],["icon","/assets/icons/close.svg"],["text",""]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==o.zb(n,16).onClick(t)&&e),e},d.hb,d.c)),o.ob(15,49152,null,0,e.i,[o.h,o.k,o.z],{color:[0,"color"],icon:[1,"icon"],text:[2,"text"]},null),o.ob(16,16384,null,0,e.j,[[2,e.kb],e.Kb],null,null),(n()(),o.pb(17,0,null,null,56,"ion-content",[["padding",""]],null,null,null,d.rb,d.m)),o.ob(18,49152,null,0,e.w,[o.h,o.k,o.z],null,null),o.ob(19,16384,null,0,e.f,[o.k],null,null),(n()(),o.pb(20,0,null,0,1,"ion-img",[["class","logo"],["src","/assets/logo.svg"]],null,null,null,d.xb,d.s)),o.ob(21,49152,null,0,e.F,[o.h,o.k,o.z],{src:[0,"src"]},null),(n()(),o.pb(22,0,null,0,2,"div",[["class","content-icon"]],null,null,null,null,null)),(n()(),o.pb(23,0,null,null,1,"ion-img",[["class","lock-icon"],["src","/assets/icons/AtomsLockIcon.svg"]],null,null,null,d.xb,d.s)),o.ob(24,49152,null,0,e.F,[o.h,o.k,o.z],{src:[0,"src"]},null),(n()(),o.pb(25,0,null,0,46,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,t){var e=!0,i=n.component;return"submit"===l&&(e=!1!==o.zb(n,27).onSubmit(t)&&e),"reset"===l&&(e=!1!==o.zb(n,27).onReset()&&e),"ngSubmit"===l&&(e=!1!==i.doLogin(o.zb(n,27))&&e),e},null,null)),o.ob(26,16384,null,0,h.t,[],null,null),o.ob(27,4210688,[["form",4]],0,h.n,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),o.Cb(2048,null,h.a,null,[h.n]),o.ob(29,16384,null,0,h.m,[[4,h.a]],null,null),(n()(),o.pb(30,0,null,null,13,"ion-item",[["class","item-input"]],null,null,null,d.Gb,d.w)),o.ob(31,49152,null,0,e.J,[o.h,o.k,o.z],null,null),(n()(),o.pb(32,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,d.Hb,d.C)),o.ob(33,49152,null,0,e.P,[o.h,o.k,o.z],{position:[0,"position"]},null),(n()(),o.Fb(-1,0,["Username"])),(n()(),o.pb(35,0,null,0,8,"ion-input",[["clearInput",""],["name","username"],["ngModel",""],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,t){var e=!0,i=n.component;return"ionBlur"===l&&(e=!1!==o.zb(n,38)._handleBlurEvent(t.target)&&e),"ionChange"===l&&(e=!1!==o.zb(n,38)._handleInputEvent(t.target)&&e),"ngModelChange"===l&&(e=!1!==(i.username=t)&&e),e},d.Ab,d.v)),o.ob(36,16384,null,0,h.q,[],{required:[0,"required"]},null),o.Cb(1024,null,h.i,function(n){return[n]},[h.q]),o.ob(38,16384,null,0,e.Sb,[o.k],null,null),o.Cb(1024,null,h.j,function(n){return[n]},[e.Sb]),o.ob(40,671744,null,0,h.o,[[2,h.a],[6,h.i],[8,null],[6,h.j]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Cb(2048,null,h.k,null,[h.o]),o.ob(42,16384,null,0,h.l,[[4,h.k]],null,null),o.ob(43,49152,null,0,e.I,[o.h,o.k,o.z],{clearInput:[0,"clearInput"],name:[1,"name"],required:[2,"required"],type:[3,"type"]},null),(n()(),o.pb(44,0,null,null,16,"ion-item",[],null,null,null,d.Gb,d.w)),o.ob(45,49152,null,0,e.J,[o.h,o.k,o.z],null,null),(n()(),o.pb(46,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,d.Hb,d.C)),o.ob(47,49152,null,0,e.P,[o.h,o.k,o.z],{position:[0,"position"]},null),(n()(),o.Fb(-1,0,["Password"])),(n()(),o.pb(49,0,null,0,8,"ion-input",[["name","password"],["ngModel",""],["required",""],["type","password"],["viewInput",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,t){var e=!0,i=n.component;return"ionBlur"===l&&(e=!1!==o.zb(n,52)._handleBlurEvent(t.target)&&e),"ionChange"===l&&(e=!1!==o.zb(n,52)._handleInputEvent(t.target)&&e),"ngModelChange"===l&&(e=!1!==(i.password=t)&&e),e},d.Ab,d.v)),o.ob(50,16384,null,0,h.q,[],{required:[0,"required"]},null),o.Cb(1024,null,h.i,function(n){return[n]},[h.q]),o.ob(52,16384,null,0,e.Sb,[o.k],null,null),o.Cb(1024,null,h.j,function(n){return[n]},[e.Sb]),o.ob(54,671744,null,0,h.o,[[2,h.a],[6,h.i],[8,null],[6,h.j]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Cb(2048,null,h.k,null,[h.o]),o.ob(56,16384,null,0,h.l,[[4,h.k]],null,null),o.ob(57,49152,null,0,e.I,[o.h,o.k,o.z],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(n()(),o.pb(58,0,null,0,2,"ion-icon",[["class","show-pass"],["slot","end"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.togglePass()&&o),o},d.wb,d.r)),o.ob(59,278528,null,0,f.h,[o.s,o.t,o.k,o.D],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o.ob(60,49152,null,0,e.E,[o.h,o.k,o.z],{name:[0,"name"]},null),(n()(),o.pb(61,0,null,null,10,"ion-grid",[["class","ion-no-padding"]],null,null,null,d.ub,d.p)),o.ob(62,49152,null,0,e.C,[o.h,o.k,o.z],null,null),(n()(),o.pb(63,0,null,0,8,"ion-row",[],null,null,null,d.Qb,d.L)),o.ob(64,49152,null,0,e.lb,[o.h,o.k,o.z],null,null),(n()(),o.pb(65,0,null,0,6,"ion-col",[["size","12"]],null,null,null,d.qb,d.l)),o.ob(66,49152,null,0,e.v,[o.h,o.k,o.z],{size:[0,"size"]},null),(n()(),o.pb(67,0,null,0,4,"ion-button",[["class","big-btn"],["expand","block"],["size","large"],["type","submit"]],null,null,null,d.jb,d.e)),o.ob(68,49152,null,0,e.m,[o.h,o.k,o.z],{disabled:[0,"disabled"],expand:[1,"expand"],size:[2,"size"],type:[3,"type"]},null),(n()(),o.pb(69,0,null,0,1,"ion-icon",[["slot","start"],["src","/assets/icons/checkmark.svg"]],null,null,null,d.wb,d.r)),o.ob(70,49152,null,0,e.E,[o.h,o.k,o.z],{src:[0,"src"]},null),(n()(),o.Fb(-1,0,[" Sign In "])),(n()(),o.pb(72,0,null,0,1,"p",[["class","after-btn"]],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.goTo("/forget-pass")&&o),o},null,null)),(n()(),o.Fb(-1,null,["Forgot your password?"]))],function(n,l){var t=l.component;n(l,10,0,"primary",""),n(l,15,0,"dark","/assets/icons/close.svg",""),n(l,21,0,"/assets/logo.svg"),n(l,24,0,"/assets/icons/AtomsLockIcon.svg"),n(l,33,0,"floating"),n(l,36,0,""),n(l,40,0,"username",t.username),n(l,43,0,"","username","","text"),n(l,47,0,"floating"),n(l,50,0,""),n(l,54,0,"password",t.password),n(l,57,0,"password","",t.showPass?"text":"password"),n(l,59,0,"show-pass",t.showPass?"active":""),n(l,60,0,t.showPass?"eye":"eye-off"),n(l,66,0,"12"),n(l,68,0,o.zb(l,27).invalid,"block","large","submit"),n(l,70,0,"/assets/icons/checkmark.svg")},function(n,l){n(l,25,0,o.zb(l,29).ngClassUntouched,o.zb(l,29).ngClassTouched,o.zb(l,29).ngClassPristine,o.zb(l,29).ngClassDirty,o.zb(l,29).ngClassValid,o.zb(l,29).ngClassInvalid,o.zb(l,29).ngClassPending),n(l,35,0,o.zb(l,36).required?"":null,o.zb(l,42).ngClassUntouched,o.zb(l,42).ngClassTouched,o.zb(l,42).ngClassPristine,o.zb(l,42).ngClassDirty,o.zb(l,42).ngClassValid,o.zb(l,42).ngClassInvalid,o.zb(l,42).ngClassPending),n(l,49,0,o.zb(l,50).required?"":null,o.zb(l,56).ngClassUntouched,o.zb(l,56).ngClassTouched,o.zb(l,56).ngClassPristine,o.zb(l,56).ngClassDirty,o.zb(l,56).ngClassValid,o.zb(l,56).ngClassInvalid,o.zb(l,56).ngClassPending)})}function k(n){return o.Hb(0,[(n()(),o.pb(0,0,null,null,1,"app-login",[],null,null,null,C,v)),o.ob(1,114688,null,0,b,[m.m,e.Ib,i.a,e.Tb,e.Kb,u.a,s.a,e.Nb,e.b,r.a],null,null)],function(n,l){n(l,1,0)},null)}var y=o.lb("app-login",b,k,{},{},[]);t.d(l,"LoginPageModuleNgFactory",function(){return w});var w=o.mb(g,[],function(n){return o.wb([o.xb(512,o.j,o.bb,[[8,[p.a,y]],[3,o.j],o.x]),o.xb(4608,f.l,f.k,[o.u,[2,f.u]]),o.xb(4608,h.u,h.u,[]),o.xb(4608,e.c,e.c,[o.z,o.g]),o.xb(4608,e.Jb,e.Jb,[e.c,o.j,o.q]),o.xb(4608,e.Ob,e.Ob,[e.c,o.j,o.q]),o.xb(1073742336,f.b,f.b,[]),o.xb(1073742336,h.s,h.s,[]),o.xb(1073742336,h.f,h.f,[]),o.xb(1073742336,e.Gb,e.Gb,[]),o.xb(1073742336,m.o,m.o,[[2,m.u],[2,m.m]]),o.xb(1073742336,g,g,[]),o.xb(1024,m.k,function(){return[[{path:"",component:b}]]},[])])})}}]);
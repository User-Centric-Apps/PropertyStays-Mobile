(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{UIoA:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=u("ZZ/e"),o=u("lGQG"),i=u("XjJT"),r=function(l,n,u,t){return new(u||(u=Promise))(function(e,o){function i(l){try{a(t.next(l))}catch(n){o(n)}}function r(l){try{a(t.throw(l))}catch(n){o(n)}}function a(l){l.done?e(l.value):new u(function(n){n(l.value)}).then(i,r)}a((t=t.apply(l,n||[])).next())})},a=function(l,n){var u,t,e,o,i={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return o={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function r(o){return function(r){return function(o){if(u)throw new TypeError("Generator is already executing.");for(;i;)try{if(u=1,t&&(e=2&o[0]?t.return:o[0]?t.throw||((e=t.return)&&e.call(t),0):t.next)&&!(e=e.call(t,o[1])).done)return e;switch(t=0,e&&(o=[2&o[0],e.value]),o[0]){case 0:case 1:e=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,t=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(e=(e=i.trys).length>0&&e[e.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!e||o[1]>e[0]&&o[1]<e[3])){i.label=o[1];break}if(6===o[0]&&i.label<e[1]){i.label=e[1],e=o;break}if(e&&i.label<e[2]){i.label=e[2],i.ops.push(o);break}e[2]&&i.ops.pop(),i.trys.pop();continue}o=n.call(l,i)}catch(r){o=[6,r],t=0}finally{u=e=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,r])}}},c=function(){function l(l,n,u,t){this.navCtrl=l,this.authService=n,this.wpApiService=u,this.loadingCtrl=t,this.isLoading=!0,this.showLoading()}return l.prototype.showLoading=function(){return r(this,void 0,void 0,function(){return a(this,function(l){switch(l.label){case 0:return[4,this.loadingCtrl.create({spinner:null,message:'<img src="/assets/img/loading.gif" />',cssClass:"page-loading new-loader"})];case 1:return[4,l.sent().present()];case 2:return[2,l.sent()]}})})},l.prototype.hideLoading=function(){return r(this,void 0,void 0,function(){var l=this;return a(this,function(n){return this.isLoading&&setTimeout(function(){l.isLoading=!1,l.loadingCtrl.dismiss()},500),[2]})})},l.prototype.goBack=function(){this.navCtrl.back()},l.prototype.ionViewDidEnter=function(){this.getProfile()},l.prototype.getProfile=function(){return r(this,void 0,void 0,function(){var l=this;return a(this,function(n){switch(n.label){case 0:return this.userToken=this.authService.userToken,this.userAvater=this.authService.userData.user_avatar,this.userSavedData=this.authService.userData,this.userData=this.authService.userData,this.userFullData=this.authService.userFullData,console.log("user Data:",this.userData),console.log("userFullData: ",this.userFullData),[4,this.wpApiService.getProfile(this.authService.userToken).subscribe(function(n){l.userData=n,console.log(l.userData),console.log(l.wpApiService.userProfile),l.hideLoading()})];case 1:return n.sent(),[2]}})})},l.prototype.editProfile=function(){this.showLoading(),this.navCtrl.navigateForward("edit")},l.prototype.ngOnInit=function(){this.getProfile()},l}(),s=function(){return function(){}}(),b=u("pMnS"),p=u("oBZk"),h=t.nb({encapsulation:0,styles:[["ion-item.profile-header[_ngcontent-%COMP%], ion-item.trans[_ngcontent-%COMP%]{--background:transparent}ion-item.profile-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], ion-item.trans[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:22px}ion-item.profile-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], ion-item.trans[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{align-items:center;display:flex}ion-item.profile-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], ion-item.trans[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:20px}ion-item.profile-header[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%], ion-item.trans[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:80px;height:80px}"]],data:{}});function f(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,17,"ion-header",[],null,null,null,p.ub,p.q)),t.ob(1,49152,null,0,e.D,[t.h,t.k,t.z],null,null),(l()(),t.pb(2,0,null,0,15,"ion-toolbar",[],null,null,null,p.gc,p.cb)),t.ob(3,49152,null,0,e.Eb,[t.h,t.k,t.z],null,null),(l()(),t.pb(4,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,p.jb,p.f)),t.ob(5,49152,null,0,e.n,[t.h,t.k,t.z],null,null),(l()(),t.pb(6,0,null,0,3,"ion-button",[["color","primary"],["router-direction","back"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.goBack()&&t),t},p.ib,p.e)),t.ob(7,49152,null,0,e.m,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.pb(8,0,null,0,1,"ion-icon",[["name","arrow-back"]],null,null,null,p.vb,p.r)),t.ob(9,49152,null,0,e.E,[t.h,t.k,t.z],{name:[0,"name"]},null),(l()(),t.pb(10,0,null,0,2,"ion-title",[],null,null,null,p.ec,p.ab)),t.ob(11,49152,null,0,e.Cb,[t.h,t.k,t.z],null,null),(l()(),t.Fb(-1,0,[" Profile "])),(l()(),t.pb(13,0,null,0,4,"ion-buttons",[["slot","end"]],null,null,null,p.jb,p.f)),t.ob(14,49152,null,0,e.n,[t.h,t.k,t.z],null,null),(l()(),t.pb(15,0,null,0,2,"ion-button",[["color","primary"],["router-direction","forward"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.editProfile()&&t),t},p.ib,p.e)),t.ob(16,49152,null,0,e.m,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.Fb(-1,0,[" Edit "])),(l()(),t.pb(18,0,null,null,41,"ion-content",[["padding",""]],null,null,null,p.qb,p.m)),t.ob(19,49152,null,0,e.w,[t.h,t.k,t.z],null,null),t.ob(20,16384,null,0,e.f,[t.k],null,null),(l()(),t.pb(21,0,null,0,16,"ion-item",[["class","profile-header"],["lines","none"]],null,null,null,p.Fb,p.w)),t.ob(22,49152,null,0,e.J,[t.h,t.k,t.z],{lines:[0,"lines"]},null),(l()(),t.pb(23,0,null,0,11,"ion-label",[["text-wrap",""]],null,null,null,p.Gb,p.C)),t.ob(24,49152,null,0,e.P,[t.h,t.k,t.z],null,null),t.ob(25,16384,null,0,e.f,[t.k],null,null),(l()(),t.pb(26,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),t.Fb(27,null,["",""])),(l()(),t.pb(28,0,null,0,6,"ion-text",[],null,null,null,p.bc,p.X)),t.ob(29,49152,null,0,e.zb,[t.h,t.k,t.z],null,null),(l()(),t.pb(30,0,null,0,4,"p",[["class","text-second-color text-12"]],null,null,null,null,null)),(l()(),t.pb(31,0,null,null,1,"ion-icon",[["color","medium"],["name","pin"]],null,null,null,p.vb,p.r)),t.ob(32,49152,null,0,e.E,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.pb(33,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Fb(34,null,["",""])),(l()(),t.pb(35,0,null,0,2,"ion-avatar",[["slot","end"]],null,null,null,p.fb,p.b)),t.ob(36,49152,null,0,e.h,[t.h,t.k,t.z],null,null),(l()(),t.pb(37,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.pb(38,0,null,0,10,"ion-item",[["class","mr-t-30 trans"],["lines","full"]],null,null,null,p.Fb,p.w)),t.ob(39,49152,null,0,e.J,[t.h,t.k,t.z],{lines:[0,"lines"]},null),(l()(),t.pb(40,0,null,0,8,"ion-label",[["text-wrap",""]],null,null,null,p.Gb,p.C)),t.ob(41,49152,null,0,e.P,[t.h,t.k,t.z],null,null),t.ob(42,16384,null,0,e.f,[t.k],null,null),(l()(),t.pb(43,0,null,0,3,"ion-text",[],null,null,null,p.bc,p.X)),t.ob(44,49152,null,0,e.zb,[t.h,t.k,t.z],null,null),(l()(),t.pb(45,0,null,0,1,"h6",[["class","text-second-color text-14"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Member since"])),(l()(),t.pb(47,0,null,0,1,"h4",[],null,null,null,null,null)),(l()(),t.Fb(48,null,["",""])),(l()(),t.pb(49,0,null,0,10,"ion-item",[["class","trans"],["lines","full"]],null,null,null,p.Fb,p.w)),t.ob(50,49152,null,0,e.J,[t.h,t.k,t.z],{lines:[0,"lines"]},null),(l()(),t.pb(51,0,null,0,8,"ion-label",[["text-wrap",""]],null,null,null,p.Gb,p.C)),t.ob(52,49152,null,0,e.P,[t.h,t.k,t.z],null,null),t.ob(53,16384,null,0,e.f,[t.k],null,null),(l()(),t.pb(54,0,null,0,3,"ion-text",[],null,null,null,p.bc,p.X)),t.ob(55,49152,null,0,e.zb,[t.h,t.k,t.z],null,null),(l()(),t.pb(56,0,null,0,1,"h6",[["class","text-second-color text-14"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Verified info"])),(l()(),t.pb(58,0,null,0,1,"h4",[],null,null,null,null,null)),(l()(),t.Fb(59,null,["",""]))],function(l,n){l(n,7,0,"primary"),l(n,9,0,"arrow-back"),l(n,16,0,"primary"),l(n,22,0,"none"),l(n,32,0,"medium","pin"),l(n,39,0,"full"),l(n,50,0,"full")},function(l,n){var u=n.component;l(n,27,0,null==u.userData?null:u.userData.name),l(n,34,0,null==u.userData?null:u.userData.address),l(n,37,0,null==u.wpApiService?null:u.wpApiService.userProfile.avatar),l(n,48,0,null==u.userData?null:u.userData.member_since),l(n,59,0,null==u.userData?null:u.userData.verified_info)})}function g(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"app-profile",[],null,null,null,f,h)),t.ob(1,114688,null,0,c,[e.Kb,o.a,i.a,e.Ib],null,null)],function(l,n){l(n,1,0)},null)}var d=t.lb("app-profile",c,g,{},{},[]),m=u("Ip0R"),k=u("gIcY"),v=u("ZYCi");u.d(n,"ProfilePageModuleNgFactory",function(){return w});var w=t.mb(s,[],function(l){return t.wb([t.xb(512,t.j,t.bb,[[8,[b.a,d]],[3,t.j],t.x]),t.xb(4608,m.l,m.k,[t.u,[2,m.u]]),t.xb(4608,k.t,k.t,[]),t.xb(4608,e.c,e.c,[t.z,t.g]),t.xb(4608,e.Jb,e.Jb,[e.c,t.j,t.q]),t.xb(4608,e.Ob,e.Ob,[e.c,t.j,t.q]),t.xb(1073742336,m.b,m.b,[]),t.xb(1073742336,k.r,k.r,[]),t.xb(1073742336,k.f,k.f,[]),t.xb(1073742336,e.Gb,e.Gb,[]),t.xb(1073742336,v.o,v.o,[[2,v.u],[2,v.m]]),t.xb(1073742336,s,s,[]),t.xb(1024,v.k,function(){return[[{path:"",component:c}]]},[])])})}}]);
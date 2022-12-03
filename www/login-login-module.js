(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-title>Sign In</ion-title>\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"\" color=\"primary\"></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-back-button text=\"\" icon=\"/assets/icons/close.svg\" color=\"dark\" class=\"close-icon\">\n            </ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-img src=\"/assets/logo.svg\" class=\"logo\"></ion-img>\n    <div class=\"content-icon\">\n        <ion-img src=\"/assets/icons/AtomsLockIcon.svg\" class=\"lock-icon\"></ion-img>\n    </div>\n\n    <form #form=\"ngForm\" (ngSubmit)=\"doLogin(form)\">\n        <ion-item class=\"item-input\">\n            <ion-label position=\"floating\">Username</ion-label>\n            <ion-input clearInput type=\"text\" name=\"username\" ngModel required [(ngModel)]=\"username\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\">Password</ion-label>\n            <ion-input viewInput [type]=\"showPass ? 'text' : 'password'\" type=\"password\" name=\"password\" ngModel required [(ngModel)]=\"password\">\n            </ion-input>\n            <ion-icon [name]=\"showPass ? 'eye' : 'eye-off'\" slot=\"end\" class=\"show-pass\" [ngClass]=\"showPass ? 'active' : ''\" (click)=\"togglePass()\"></ion-icon>\n        </ion-item>\n\n        <ion-grid class=\"ion-no-padding\">\n            <ion-row>\n                <ion-col size=\"12\"> <!--[size]=\"canFPA ? 10 : 12\"-->\n                    <ion-button expand=\"block\" size=\"large\" class=\"big-btn\" [disabled]=\"form.invalid\" type=\"submit\">\n                        <ion-icon src=\"/assets/icons/checkmark.svg\" slot=\"start\"></ion-icon>\n                        Sign In\n                    </ion-button>\n                </ion-col>\n                <!--<ion-col size=\"2\" *ngIf=\"canFPA\">\n                    <ion-button expand=\"block\" size=\"large\" class=\"big-btn fp-login\" (click)=\"FPLogin()\">\n                        <ion-icon name=\"finger-print\" slot=\"icon-only\"></ion-icon>\n                    </ion-button>\n                </ion-col>-->\n            </ion-row>\n        </ion-grid>\n    </form>\n    <p class=\"after-btn\" (click)=\"goTo('/forget-pass')\">Forgot your password?</p>\n\n    <!-- <div class=\"divider\">\n        <span>OR</span>\n    </div>\n    <p text-center>Sign In with</p>\n    <ion-button expand=\"block\" size=\"large\" class=\"big-btn facebook\" (click)=\"facebookLogin()\">\n        <ion-icon name=\"logo-facebook\"></ion-icon>\n        Facebook\n    </ion-button>\n    <ion-button expand=\"block\" size=\"large\" class=\"big-btn google\" routerDirection=\"forward\">\n        <ion-icon name=\"logo-google\"></ion-icon>\n        Google\n    </ion-button> -->\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".big-btn {\n  margin: 25px 0px; }\n  .big-btn.facebook {\n    --background: #3a559f;\n    --background-activated: #2c4484; }\n  .big-btn.google {\n    --background: #a1bccf;\n    --background-activated: #7f9eb3; }\n  .big-btn ion-icon {\n    margin-right: 20px;\n    position: absolute;\n    left: 10%; }\n  .big-btn.fp-login {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    margin: 25px auto; }\n  .big-btn.fp-login ion-icon {\n      margin-right: 0;\n      position: relative;\n      left: auto; }\n  .content-icon {\n  margin: 5vh 0;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  flex-direction: column; }\n  .content-icon .lock-icon {\n    width: 80px; }\n  .divider {\n  text-align: center;\n  text-align: center;\n  margin: 5vh -16px; }\n  .divider span {\n    background: #ffffff;\n    padding: 8px 6px;\n    border-radius: 100%; }\n  .divider:after {\n    content: '';\n    height: 1px;\n    background: #fff;\n    display: block;\n    margin-top: -10px; }\n  ion-item ion-icon.show-pass {\n  position: absolute;\n  z-index: 99;\n  right: 10px;\n  margin-top: 10px;\n  opacity: 0;\n  display: none;\n  top: 50%;\n  transform: translateY(-50%); }\n  ion-item.item-has-value ion-icon.show-pass {\n  opacity: 0.5;\n  display: block; }\n  ion-item.item-has-value ion-icon.show-pass.active {\n    opacity: 0.9; }\n  ion-label.label-floating {\n  font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXG1vYmlsZVxcY2VudHJpY0ZpbmFsL3NyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCLEVBQUE7RUFEcEI7SUFHUSxxQkFBYTtJQUNiLCtCQUF1QixFQUFBO0VBSi9CO0lBT1EscUJBQWE7SUFDYiwrQkFBdUIsRUFBQTtFQVIvQjtJQVdRLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsU0FBUyxFQUFBO0VBYmpCO0lBZ0JRLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQixFQUFBO0VBakJ6QjtNQW1CWSxlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLFVBQVUsRUFBQTtFQUt0QjtFQUNJLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0IsRUFBQTtFQUwxQjtJQU9RLFdBQVcsRUFBQTtFQUluQjtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7RUFIckI7SUFLUSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQixFQUFBO0VBUDNCO0lBVVEsV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQixFQUFBO0VBSXpCO0VBRVEsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixhQUFhO0VBQ2IsUUFBUTtFQUNSLDJCQUEyQixFQUFBO0VBVG5DO0VBYVksWUFBWTtFQUNaLGNBQWMsRUFBQTtFQWQxQjtJQWdCZ0IsWUFBWSxFQUFBO0VBSzVCO0VBQ0ksZUFBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJpZy1idG4ge1xuICAgIG1hcmdpbjogMjVweCAwcHg7XG4gICAgJi5mYWNlYm9vayB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogIzNhNTU5ZjtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzJjNDQ4NDtcbiAgICB9XG4gICAgJi5nb29nbGUge1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNhMWJjY2Y7XG4gICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM3ZjllYjM7XG4gICAgfVxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDEwJTtcbiAgICB9XG4gICAgJi5mcC1sb2dpbiB7XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgbWFyZ2luOiAyNXB4IGF1dG87XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jb250ZW50LWljb24ge1xuICAgIG1hcmdpbjogNXZoIDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC5sb2NrLWljb24ge1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICB9XG59XG5cbi5kaXZpZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogNXZoIC0xNnB4O1xuICAgIHNwYW4ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICBwYWRkaW5nOiA4cHggNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIH1cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgfVxufVxuXG5pb24taXRlbSB7XG4gICAgaW9uLWljb24uc2hvdy1wYXNzIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgfVxuICAgICYuaXRlbS1oYXMtdmFsdWUge1xuICAgICAgICBpb24taWNvbi5zaG93LXBhc3Mge1xuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC45O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuaW9uLWxhYmVsLmxhYmVsLWZsb2F0aW5nIHtcbiAgICBmb250LXNpemU6MjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_wpapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/wpapi.service */ "./src/app/services/wpapi.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/fingerprint-aio/ngx */ "./node_modules/@ionic-native/fingerprint-aio/ngx/index.js");
/* harmony import */ var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/unique-device-id/ngx */ "./node_modules/@ionic-native/unique-device-id/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var LoginPage = /** @class */ (function () {
    function LoginPage(router, loadingController, wpApiService, toastController, navCtrl, authService, fb, faio, platform, alertController, UDID) {
        this.router = router;
        this.loadingController = loadingController;
        this.wpApiService = wpApiService;
        this.toastController = toastController;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.fb = fb;
        this.faio = faio;
        this.platform = platform;
        this.alertController = alertController;
        this.UDID = UDID;
        this.showPass = false;
        this.canFPA = false;
        this.userDataTest = {
            name: 'Syed Danish',
            email: 'danishah7288@gmail.com',
            avatar: 'http://i.pravatar.cc/150?img=14',
            address: 'Pakistan',
        };
    }
    LoginPage.prototype.goTo = function (page) {
        this.router.navigateByUrl(page);
    };
    LoginPage.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: 'circles',
                            message: 'Logging in...',
                            translucent: true,
                            cssClass: 'custom-class custom-loading',
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoginPage.prototype.togglePass = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.showPass) {
                    this.showPass = false;
                }
                else {
                    this.showPass = true;
                }
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.successToast = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'You have loged in Successfully - Welcome ' + user,
                            duration: 500,
                            position: 'bottom',
                            color: 'success',
                        })];
                    case 1:
                        toast = _a.sent();
                        // toast.onDidDismiss().then(() => {
                        //   this.navCtrl.navigateRoot('/tabs/tab1');
                        // });
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.failedToast = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Wrong Username and/or Password, Please try again!',
                            duration: 4000,
                            position: 'bottom',
                            color: 'danger',
                        })];
                    case 1:
                        toast2 = _a.sent();
                        toast2.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.presentToast = function (message, color, position, duration) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            color: color,
                            position: position,
                            duration: duration,
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.FPAlert = function (userToken) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Fingerprint Authorization!',
                            message: 'Do you want to save you login credentials with your <strong>Fingerprint</strong>',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                        _this.navCtrl.navigateRoot('/tabs/tab1');
                                    },
                                },
                                {
                                    text: 'Okay',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.FPAuth(userToken);
                                    },
                                },
                            ],
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.FPLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.faio
                    .show({
                    title: 'Authentication',
                    description: 'Access to all the possible functions of the app.',
                })
                    .then(function (result) {
                    console.log(result);
                    _this.UDID.get()
                        .then(function (uuid) {
                        console.log(uuid);
                        _this.presentLoading();
                        _this.wpApiService.logInByUDID(uuid).subscribe(function (userData) {
                            _this.loadingController.dismiss();
                            if (userData.userToken) {
                                _this.authService.logIn(userData);
                                setTimeout(function () {
                                    _this.navCtrl.navigateRoot('/tabs/tab1');
                                }, 500);
                            }
                            else {
                                _this.presentToast('User with this authentication cannot be found!', 'danger', 'bottom', 3000);
                            }
                        }, function (error) {
                            _this.loadingController.dismiss();
                            console.log(error);
                            _this.presentToast(error.message, 'danger', 'bottom', 3000);
                        });
                    })
                        .catch(function (error) { return console.log(error); });
                })
                    .catch(function (error) {
                    console.log(error);
                    _this.presentToast(error.message, 'danger', 'bottom', 3000);
                });
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.FPAuth = function (userToken) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.faio
                    .show({
                    title: 'Authentication',
                    description: 'Access to all the possible functions of the app.',
                })
                    .then(function (result) {
                    console.log(result);
                    // this.getUDID();
                    _this.UDID.get()
                        .then(function (uuid) {
                        console.log(uuid);
                        _this.wpApiService.setDeviceUDID(userToken, uuid).subscribe(function (response) {
                            if (response.status === 1) {
                                _this.presentToast('Authentication Succeeded', 'success', 'bottom', 2000);
                                _this.navCtrl.navigateRoot('/tabs/tab1');
                            }
                        }, function (error) {
                            console.log(error);
                            _this.presentToast('Your finger not authorized', 'danger', 'bottom', 3000);
                        });
                    })
                        .catch(function (error) {
                        console.log(error);
                    });
                    // this.navCtrl.navigateRoot('/tabs/tab1');
                })
                    .catch(function (error) {
                    console.log(error);
                    _this.presentToast(error.message, 'danger', 'bottom', 3000);
                    _this.navCtrl.navigateRoot('/tabs/tab1');
                });
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.getUDID = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.UDID.get()
                    .then(function (uuid) {
                    console.log(uuid);
                })
                    .catch(function (error) { return console.log(error); });
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.doLogin = function (form) {
        var _this = this;
        console.log(this.username);
        console.log(this.password.toString());
        this.presentLoading();
        this.wpApiService
            .postAuth(this.username, this.password.toString())
            .subscribe(function (data) {
            _this.authService.logIn(data);
            _this.loadingController.dismiss();
            console.log(data);
            _this.successToast(data.user_display_name);
            _this.navCtrl.navigateRoot('/tabs/tab1');
            if (_this.faio.isAvailable()) {
                //this.FPAlert(data.token);
            }
        }, function (error) {
            console.log('error');
            console.log(error);
            console.log('Username Or Password is not correct, Please Try Again');
            _this.loadingController.dismiss();
            _this.failedToast();
        });
    };
    LoginPage.prototype.facebookLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fb
                            .login(['public_profile', 'email'])
                            .then(function (res) {
                            var userID = res.authResponse.userID;
                            _this.fb
                                .api(userID + '?fields=id,email,first_name,last_name,address,name', [
                                'email',
                            ])
                                .then(function (fbUser) {
                                console.log(fbUser);
                                var formData = {
                                    name: fbUser.name,
                                    username: 'FBuser_' + fbUser.id,
                                    email: fbUser.email,
                                    password: 'FBuserPS_' + fbUser.id,
                                };
                                console.log(formData);
                                _this.wpApiService
                                    .postAuth(formData.username, formData.password)
                                    .subscribe(function (udata) {
                                    _this.authService.logIn(udata);
                                    _this.presentToast('Welcome, ' + udata.user_display_name, 'success', 'bottom', 2000);
                                    setTimeout(function () {
                                        _this.router.navigateByUrl('/');
                                    }, 2000);
                                }, function (error) {
                                    console.log('Username Or Password is not correct, Please Try Again');
                                    _this.presentToast('Failed to login, Please try again.', 'danger', 'bottom', 3000);
                                });
                            })
                                .catch(function (error) {
                                console.log(error);
                                _this.presentToast('Error logging into Facebook' + error, 'danger', 'bottom', 3000);
                            });
                        })
                            .catch(function (e) {
                            console.log('Error logging into Facebook', e);
                            _this.presentToast('Error logging into Facebook' + e, 'danger', 'bottom', 3000);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            if (_this.faio.isAvailable()) {
                // this.ha
                _this.canFPA = true;
            }
        });
    };
    LoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _services_wpapi_service__WEBPACK_IMPORTED_MODULE_3__["WpapiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__["Facebook"],
            _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_6__["FingerprintAIO"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_7__["UniqueDeviceID"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map
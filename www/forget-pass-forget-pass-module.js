(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forget-pass-forget-pass-module"],{

/***/ "./src/app/forget-pass/forget-pass.module.ts":
/*!***************************************************!*\
  !*** ./src/app/forget-pass/forget-pass.module.ts ***!
  \***************************************************/
/*! exports provided: ForgetPassPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPassPageModule", function() { return ForgetPassPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forget_pass_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forget-pass.page */ "./src/app/forget-pass/forget-pass.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _forget_pass_page__WEBPACK_IMPORTED_MODULE_5__["ForgetPassPage"]
    }
];
var ForgetPassPageModule = /** @class */ (function () {
    function ForgetPassPageModule() {
    }
    ForgetPassPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_forget_pass_page__WEBPACK_IMPORTED_MODULE_5__["ForgetPassPage"]]
        })
    ], ForgetPassPageModule);
    return ForgetPassPageModule;
}());



/***/ }),

/***/ "./src/app/forget-pass/forget-pass.page.html":
/*!***************************************************!*\
  !*** ./src/app/forget-pass/forget-pass.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-title>Forget password</ion-title>\n        <ion-buttons slot=\"start\">\n            <ion-back-button color=\"primary\" text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-back-button text=\"\" icon=\"/assets/icons/close.svg\" color=\"dark\" class=\"close-icon\">\n            </ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-img src=\"/assets/logo.svg\" class=\"logo\"></ion-img>\n    <form #form=\"ngForm\" (ngSubmit)=\"doForget(form)\">\n        <ion-item class=\"item-input\">\n            <ion-label position=\"floating\">Email Address</ion-label>\n            <ion-input clearInput type=\"email\" name=\"email\" ngModel required email></ion-input>\n        </ion-item>\n\n        <ion-button expand=\"block\" size=\"large\" class=\"big-btn\" [disabled]=\"form.invalid\" type=\"submit\">\n            <ion-icon src=\"/assets/icons/checkmark.svg\" slot=\"start\"></ion-icon>\n            Reset your password\n        </ion-button>\n    </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/forget-pass/forget-pass.page.scss":
/*!***************************************************!*\
  !*** ./src/app/forget-pass/forget-pass.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".big-btn {\n  margin: 25px 0px; }\n\n.logo {\n  margin-bottom: 50vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ2V0LXBhc3MvRDpcXG1vYmlsZVxcY2VudHJpY0ZpbmFsL3NyY1xcYXBwXFxmb3JnZXQtcGFzc1xcZm9yZ2V0LXBhc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mb3JnZXQtcGFzcy9mb3JnZXQtcGFzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmlnLWJ0biB7XG4gICAgbWFyZ2luOiAyNXB4IDBweDtcbn1cblxuLmxvZ28ge1xuICAgIG1hcmdpbi1ib3R0b206IDUwdmg7XG59Il19 */"

/***/ }),

/***/ "./src/app/forget-pass/forget-pass.page.ts":
/*!*************************************************!*\
  !*** ./src/app/forget-pass/forget-pass.page.ts ***!
  \*************************************************/
/*! exports provided: ForgetPassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPassPage", function() { return ForgetPassPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_wpapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/wpapi.service */ "./src/app/services/wpapi.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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




var ForgetPassPage = /** @class */ (function () {
    function ForgetPassPage(router, wpApiService, toastController) {
        this.router = router;
        this.wpApiService = wpApiService;
        this.toastController = toastController;
    }
    ForgetPassPage.prototype.ngOnInit = function () {
    };
    ForgetPassPage.prototype.goTo = function (page) {
        this.router.navigateByUrl(page);
    };
    ForgetPassPage.prototype.presentToast = function (message, color, position, duration) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            color: color,
                            position: position,
                            duration: duration
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Do forget
    ForgetPassPage.prototype.doForget = function (form) {
        var _this = this;
        this.wpApiService.forgetPass(form.value).subscribe(function (data) {
            if (data['status'] === 1) {
                _this.presentToast('Password reseted successfully, please check your email for resset link', 'success', 'bottom', 3000);
                form.value.password = '';
            }
            else {
                _this.presentToast('Email not found, please try again', 'danger', 'bottom', 3000);
            }
        });
    };
    ForgetPassPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forget-pass',
            template: __webpack_require__(/*! ./forget-pass.page.html */ "./src/app/forget-pass/forget-pass.page.html"),
            styles: [__webpack_require__(/*! ./forget-pass.page.scss */ "./src/app/forget-pass/forget-pass.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_wpapi_service__WEBPACK_IMPORTED_MODULE_2__["WpapiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], ForgetPassPage);
    return ForgetPassPage;
}());



/***/ })

}]);
//# sourceMappingURL=forget-pass-forget-pass-module.js.map
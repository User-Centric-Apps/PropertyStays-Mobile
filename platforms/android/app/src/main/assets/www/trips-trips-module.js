(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trips-trips-module"],{

/***/ "./src/app/trips/trips.module.ts":
/*!***************************************!*\
  !*** ./src/app/trips/trips.module.ts ***!
  \***************************************/
/*! exports provided: TripsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripsPageModule", function() { return TripsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _trips_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trips.page */ "./src/app/trips/trips.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _trips_page__WEBPACK_IMPORTED_MODULE_5__["TripsPage"]
    }
];
var TripsPageModule = /** @class */ (function () {
    function TripsPageModule() {
    }
    TripsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_trips_page__WEBPACK_IMPORTED_MODULE_5__["TripsPage"]]
        })
    ], TripsPageModule);
    return TripsPageModule;
}());



/***/ }),

/***/ "./src/app/trips/trips.page.html":
/*!***************************************!*\
  !*** ./src/app/trips/trips.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"tabs/tab1\" color=\"primary\" text=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>\n            My trips\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button>\n                <ion-icon src=\"/assets/icons/menu.svg\"></ion-icon>\n            </ion-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [ngClass]=\"calcClasses()\" padding>\n    <!-- <ion-item>\n        <ion-label>Trips View</ion-label>\n        <ion-note slot=\"end\">For Demonstration Use only</ion-note>\n        <ion-toggle [(ngModel)]=\"hasTrips\"></ion-toggle>\n    </ion-item> -->\n\n    <div class=\"trips\" *ngIf=\"savedTrips && hasTrips; else noTrips\">\n        <p class=\"likes-count\">upcoming trips</p>\n        <ion-card class=\"property-item\" *ngFor=\"let item of savedTrips; let i = index\">\n            <ion-card-header class=\"ion-padding\">\n                <ion-card-title (click)=\"tourDetail(item.id, item.st_booking_post_type)\">{{ item.title }} - {{ item.check_in }} - {{ item.nights }}\n                </ion-card-title>\n            </ion-card-header>\n\n            <ion-card-content>\n                <div class=\"order-status {{ item.status }}\">\n                    Order Status: <span>{{ item.status }}</span>\n                </div>\n                <ion-img [src]=\"item.image ? item.image : './assets/img/property/no_image.png'\" class=\"image\" (click)=\"tourDetail(item.id, item.st_booking_post_type)\"></ion-img>\n                <ion-row>\n                    <ion-col size=\"6\" text-center>\n                        Order Date: <span class=\"heavy\">{{ item.order_date }}</span>\n                    </ion-col>\n                    <ion-col size=\"6\" text-center>\n                        Order Price: <span class=\"heavy\">{{ item.cost }}</span>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col size=\"6\" text-center>\n                        Check-in Date:\n                        <span class=\"heavy\">{{ item.check_in }}</span>\n                    </ion-col>\n                    <ion-col size=\"6\" text-center>\n                        Check-Out Date:\n                        <span class=\"heavy\">{{ item.check_out }}</span>\n                    </ion-col>\n                </ion-row>\n            </ion-card-content>\n        </ion-card>\n    </div>\n    <ng-template #noTrips>\n        <div class=\"no-trips\">\n            <h1>hmm, no bookings…</h1>\n            <h6>Start planning your first adventure!</h6>\n            <ion-button color=\"primary\" fill=\"outline\" size=\"large\" expand=\"full\" shape=\"round\" class=\"explore\" (click)=\"goTo('/tabs/tab1')\">\n                Explore where!\n            </ion-button>\n        </div>\n    </ng-template>\n</ion-content>"

/***/ }),

/***/ "./src/app/trips/trips.page.scss":
/*!***************************************!*\
  !*** ./src/app/trips/trips.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.empty {\n  background-image: url(\"/assets/img/no-trips.svg\") !important;\n  background-repeat: no-repeat;\n  background-size: contain;\n  --background: auto;\n  background-position: bottom;\n  background-color: #fff; }\n\n.no-trips h1 {\n  text-align: center; }\n\n.no-trips h6 {\n  text-align: center;\n  color: var(--ion-text-color2);\n  margin: 30px 0;\n  font-weight: 300; }\n\n.no-trips ion-button.explore {\n  --border-radius: 100px;\n  font-size: 17px;\n  height: 54px;\n  text-transform: inherit; }\n\n.trips p.likes-count {\n  color: var(--ion-text-color2);\n  font-size: 14px;\n  margin: 15px; }\n\n.trips .order-status {\n  position: absolute;\n  right: 0;\n  text-align: right;\n  padding: 10px;\n  font-size: 0.8em;\n  border-radius: 5px 0 0 5px;\n  color: #fff;\n  margin-top: 10px;\n  opacity: 0.75; }\n\n.trips .order-status span {\n    font-weight: 700; }\n\n.trips .order-status.Completed {\n    background: var(--ion-color-success); }\n\n.trips .order-status.Incomplete {\n    background: var(--ion-color-dark); }\n\n.trips ion-img.image {\n  margin-bottom: 0px; }\n\n.trips span.heavy {\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpcHMvRDpcXG1vYmlsZVxcY2VudHJpY0ZpbmFsL3NyY1xcYXBwXFx0cmlwc1xcdHJpcHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNERBQTREO0VBQzVELDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsa0JBQWE7RUFDYiwyQkFBMkI7RUFDM0Isc0JBQXNCLEVBQUE7O0FBRzFCO0VBRVEsa0JBQWtCLEVBQUE7O0FBRjFCO0VBS1Esa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBUnhCO0VBV1Esc0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0VBQ1osdUJBQXVCLEVBQUE7O0FBSS9CO0VBRVEsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBSnBCO0VBT1Esa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhLEVBQUE7O0FBZnJCO0lBaUJZLGdCQUFnQixFQUFBOztBQWpCNUI7SUFvQlksb0NBQW9DLEVBQUE7O0FBcEJoRDtJQXVCWSxpQ0FBaUMsRUFBQTs7QUF2QjdDO0VBMkJRLGtCQUFrQixFQUFBOztBQTNCMUI7RUE4QlEsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90cmlwcy90cmlwcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudC5lbXB0eSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvbm8tdHJpcHMuc3ZnXCIpICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgLS1iYWNrZ3JvdW5kOiBhdXRvO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4ubm8tdHJpcHMge1xuICAgIGgxIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBoNiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yMik7XG4gICAgICAgIG1hcmdpbjogMzBweCAwO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgIH1cbiAgICBpb24tYnV0dG9uLmV4cGxvcmUge1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIGhlaWdodDogNTRweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XG4gICAgfVxufVxuXG4udHJpcHMge1xuICAgIHAubGlrZXMtY291bnQge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IyKTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW46IDE1cHg7XG4gICAgfVxuICAgIC5vcmRlci1zdGF0dXMge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBvcGFjaXR5OiAwLjc1O1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIH1cbiAgICAgICAgJi5Db21wbGV0ZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICAgICAgICB9XG4gICAgICAgICYuSW5jb21wbGV0ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLWltZy5pbWFnZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICB9XG4gICAgc3Bhbi5oZWF2eSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/trips/trips.page.ts":
/*!*************************************!*\
  !*** ./src/app/trips/trips.page.ts ***!
  \*************************************/
/*! exports provided: TripsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripsPage", function() { return TripsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_wpapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/wpapi.service */ "./src/app/services/wpapi.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/share.service */ "./src/app/services/share.service.ts");
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






var TripsPage = /** @class */ (function () {
    function TripsPage(router, authService, wpApiService, loadingCtrl, shareService) {
        this.router = router;
        this.authService = authService;
        this.wpApiService = wpApiService;
        this.loadingCtrl = loadingCtrl;
        this.shareService = shareService;
        this.hasTrips = false;
        this.tripsItems = [
            {
                title: 'Location name - 12/12/2019 - 14nts',
                image: '/assets/img/property/prop1_1.png'
            },
            {
                title: 'Location name - 12/12/2019 - 14nts',
                image: '/assets/img/property/prop1_2.png'
            }
        ];
        this.isLoading = true;
        this.tdata = [];
        this.showLoading();
    }
    TripsPage.prototype.showLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            spinner: null,
                            message: '<img src="/assets/img/loading.gif" />',
                            // translucent: true,
                            cssClass: 'page-loading new-loader'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TripsPage.prototype.hideLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.isLoading) {
                    setTimeout(function () {
                        _this.isLoading = false;
                        _this.loadingCtrl.dismiss();
                    }, 500);
                }
                return [2 /*return*/];
            });
        });
    };
    TripsPage.prototype.ngOnInit = function () {
        this.getUserData();
    };
    TripsPage.prototype.ionViewDidEnter = function () {
        this.getUserData();
    };
    TripsPage.prototype.getUserData = function () {
        var _this = this;
        // Get User Token
        this.authService.getUserData2().then(function (data) {
            var userData = data;
            _this.userToken = userData['token'];
            _this.wpApiService
                .getUserTrips(_this.authService.userToken)
                .subscribe(function (trips) {
                console.log('trips');
                console.log(trips);
                _this.tdata = trips;
                if (Object.keys(_this.tdata.data).length > 0) {
                    _this.savedTrips = _this.tdata.data;
                    _this.hasTrips = true;
                }
                _this.hideLoading();
            });
        });
    };
    TripsPage.prototype.getUserTrips = function (user_token) {
        this.wpApiService.getUserTrips(user_token).subscribe(function (user_trips) {
            console.log(user_trips);
        });
    };
    TripsPage.prototype.calcClasses = function () {
        if (!this.hasTrips) {
            return {
                empty: true
            };
        }
    };
    TripsPage.prototype.goTo = function (page) {
        this.router.navigateByUrl(page);
    };
    TripsPage.prototype.tourDetail = function (id, type) {
        switch (type) {
            case 'st_rental':
                this.router.navigateByUrl('/tabs/tab1/rentaldetail/' + id);
                break;
            case 'st_tour':
                this.router.navigateByUrl('/tabs/tab1/tour/' + id);
                break;
            default:
                break;
        }
    };
    TripsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trips',
            template: __webpack_require__(/*! ./trips.page.html */ "./src/app/trips/trips.page.html"),
            styles: [__webpack_require__(/*! ./trips.page.scss */ "./src/app/trips/trips.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_wpapi_service__WEBPACK_IMPORTED_MODULE_3__["WpapiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _services_share_service__WEBPACK_IMPORTED_MODULE_5__["ShareService"]])
    ], TripsPage);
    return TripsPage;
}());



/***/ })

}]);
//# sourceMappingURL=trips-trips-module.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dateselect-dateselect-module"],{

/***/ "./src/app/dateselect/dateselect.module.ts":
/*!*************************************************!*\
  !*** ./src/app/dateselect/dateselect.module.ts ***!
  \*************************************************/
/*! exports provided: DateselectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateselectPageModule", function() { return DateselectPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ion2_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ion2-calendar */ "./src/ion2-calendar/index.ts");
/* harmony import */ var _dateselect_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dateselect.page */ "./src/app/dateselect/dateselect.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _dateselect_page__WEBPACK_IMPORTED_MODULE_6__["DateselectPage"]
    }
];
var DateselectPageModule = /** @class */ (function () {
    function DateselectPageModule() {
    }
    DateselectPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _ion2_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarModule"]
            ],
            declarations: [_dateselect_page__WEBPACK_IMPORTED_MODULE_6__["DateselectPage"]]
        })
    ], DateselectPageModule);
    return DateselectPageModule;
}());



/***/ }),

/***/ "./src/app/dateselect/dateselect.page.html":
/*!*************************************************!*\
  !*** ./src/app/dateselect/dateselect.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-title>dateselect</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n    <!-- <ion-calendar [(ngModel)]=\"dateRange\" (change)=\"onChange($event)\" [type]=\"type\" [format]=\"'DD/MM/YYYY'\" [options]=\"optionsRange\">\n    </ion-calendar> -->\n    <ion-button (click)=\"openCalendar()\">Select Date</ion-button>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/dateselect/dateselect.page.scss":
/*!*************************************************!*\
  !*** ./src/app/dateselect/dateselect.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGVzZWxlY3QvZGF0ZXNlbGVjdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dateselect/dateselect.page.ts":
/*!***********************************************!*\
  !*** ./src/app/dateselect/dateselect.page.ts ***!
  \***********************************************/
/*! exports provided: DateselectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateselectPage", function() { return DateselectPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ion2_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ion2-calendar */ "./src/ion2-calendar/index.ts");
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



var DateselectPage = /** @class */ (function () {
    function DateselectPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
        // dateRange: { from: string; to: string; };
        // type: 'object'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
        // optionsRange: CalendarComponentOptions = {
        //   pickMode: 'range',
        // };
        // address: Object;
        this.dateRange = {
            from: new Date(),
            to: new Date(Date.now() + 24 * 60 * 60 * 1000 * 5),
        };
    }
    DateselectPage.prototype.ngOnInit = function () {
    };
    DateselectPage.prototype.openCalendar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options, myCalendar, event, date, role;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            pickMode: 'range',
                            title: 'Select Your Dates',
                            defaultDateRange: this.dateRange,
                            defaultScrollTo: this.dateRange.from,
                            color: 'primary',
                            cssClass: 'custom-calendar',
                            weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                            weekStart: 1
                        };
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _ion2_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarModal"],
                                componentProps: { options: options },
                            })];
                    case 1:
                        myCalendar = _a.sent();
                        myCalendar.present();
                        return [4 /*yield*/, myCalendar.onDidDismiss()];
                    case 2:
                        event = _a.sent();
                        date = event.data, role = event.role;
                        if (role === 'done') {
                            this.dateRange = Object.assign({}, {
                                from: date.from.dateObj,
                                to: date.to.dateObj,
                            });
                        }
                        console.log(date);
                        console.log(this.dateRange.from);
                        console.log(this.dateRange.to);
                        console.log('role', role);
                        return [2 /*return*/];
                }
            });
        });
    };
    DateselectPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dateselect',
            template: __webpack_require__(/*! ./dateselect.page.html */ "./src/app/dateselect/dateselect.page.html"),
            styles: [__webpack_require__(/*! ./dateselect.page.scss */ "./src/app/dateselect/dateselect.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], DateselectPage);
    return DateselectPage;
}());



/***/ })

}]);
//# sourceMappingURL=dateselect-dateselect-module.js.map
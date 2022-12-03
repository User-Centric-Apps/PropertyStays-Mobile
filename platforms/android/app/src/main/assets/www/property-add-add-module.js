(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["property-add-add-module"],{

/***/ "./src/app/property/add/add.module.ts":
/*!********************************************!*\
  !*** ./src/app/property/add/add.module.ts ***!
  \********************************************/
/*! exports provided: AddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPageModule", function() { return AddPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add.page */ "./src/app/property/add/add.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _add_page__WEBPACK_IMPORTED_MODULE_5__["AddPage"]
    }
];
var AddPageModule = /** @class */ (function () {
    function AddPageModule() {
    }
    AddPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_page__WEBPACK_IMPORTED_MODULE_5__["AddPage"]]
        })
    ], AddPageModule);
    return AddPageModule;
}());



/***/ }),

/***/ "./src/app/property/add/add.page.html":
/*!********************************************!*\
  !*** ./src/app/property/add/add.page.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button color=\"dark\" icon=\"close\" text=\"\" *ngIf=\"step == 1 || step == 5 || step == 6 || step == 7 || step > 7\">\n                <!-- <ion-icon name=\"close\"></ion-icon> -->\n            </ion-back-button>\n            <!-- <ion-button color=\"dark\" (click)=\"prevStep()\" *ngIf=\"step != 1 && step != 5 && step != 7 && step != 8\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button> -->\n            <ion-button color=\"dark\" (click)=\"prevStep(true)\" *ngIf=\"step == 2 || step == 3 || step == 4\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title *ngIf=\"step == 1\">\n            Host your property\n        </ion-title>\n        <ion-buttons slot=\"end\">\n            <!-- <ion-menu-button>\n                <ion-icon src=\"/assets/icons/menu.svg\"></ion-icon>\n            </ion-menu-button> -->\n            <ion-button color=\"dark\" fill=\"clear\" *ngIf=\"step == 4 || step == 5 || step == 6 || step == 7 || step > 7\" (click)=\"saveExit()\">\n                Save and exit\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-slides pager=\"false\" [options]=\"sliderOpts\" #stepsSlider>\n        <ion-slide>\n            <h1>Which of these sounds most like your place?</h1>\n            <div class=\"content-container\">\n                <ion-list lines=\"full\">\n                    <ion-item class=\"item-input\" [ngClass]=\"renttype_id !== null && renttype_id !== '' ? 'ion-item-hasvalue item-has-value' : ''\">\n                        <ion-label position=\"floating\">Choose your property type</ion-label>\n                        <ion-select interface=\"popover\" [(ngModel)]=\"renttype_id\">\n                            <ion-select-option *ngFor=\"let item of propTypeArr\" value=\"{{item.id}}\" [selected]=\"item.id == renttype_id ? 'true' : 'false'\">{{item.title}}</ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                    <ion-item>\n                        <ion-text color=\"medium\">\n                            <p>\n                                Houses are residential buildings that are often stand-alone structures.Some houses, duplexes, may share walls or outdoor areas with other houses\n                            </p>\n                        </ion-text>\n                    </ion-item>\n                </ion-list>\n            </div>\n            <ion-button color=\"primary\" size=\"large\" expand=\"block\" class=\"big-btn white-text next\" round strong (click)=\"nextStep()\">\n                Next\n                <ion-icon name=\"arrow-forward\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-slide>\n        <ion-slide>\n            <h1>How many guests can stay?</h1>\n            <div class=\"content-container\">\n                <ion-list lines=\"full\">\n                    <ion-item class=\"item-input\">\n                        <ion-button color=\"primary\" slot=\"start\" class=\"spinner-btn white-text\" (click)=\"spinnerMin('adults')\" [disabled]=\"adults == 1\">\n                            <ion-icon name=\"remove\" slot=\"icon-only\"></ion-icon>\n                        </ion-button>\n                        <ion-button color=\"primary\" slot=\"end\" class=\"spinner-btn white-text\" (click)=\"spinnerPlus('adults')\">\n                            <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n                        </ion-button>\n                        <ion-label position=\"floating\">Adults</ion-label>\n                        <ion-input clearInput type=\"number\" name=\"adults\" value=\"1\" [(ngModel)]=\"adults\"></ion-input>\n                    </ion-item>\n                    <ion-item class=\"item-input\">\n                        <ion-button color=\"primary\" slot=\"start\" class=\"spinner-btn white-text\" (click)=\"spinnerMin('children')\" [disabled]=\"children == 0\">\n                            <ion-icon name=\"remove\" slot=\"icon-only\"></ion-icon>\n                        </ion-button>\n                        <ion-button color=\"primary\" slot=\"end\" class=\"spinner-btn white-text\" (click)=\"spinnerPlus('children')\">\n                            <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n                        </ion-button>\n                        <ion-label position=\"floating\">Childrens</ion-label>\n                        <ion-input clearInput type=\"number\" name=\"children\" value=\"0\" [(ngModel)]=\"children\"></ion-input>\n                    </ion-item>\n                    <ion-item class=\"item-input\">\n                        <ion-button color=\"primary\" slot=\"start\" class=\"spinner-btn white-text\" (click)=\"spinnerMin('bed')\" [disabled]=\"bed == 1\">\n                            <ion-icon name=\"remove\" slot=\"icon-only\"></ion-icon>\n                        </ion-button>\n                        <ion-button color=\"primary\" slot=\"end\" class=\"spinner-btn white-text\" (click)=\"spinnerPlus('bed')\">\n                            <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n                        </ion-button>\n                        <ion-label position=\"floating\">Beds for guests</ion-label>\n                        <ion-input clearInput type=\"number\" name=\"bed\" value=\"1\" [(ngModel)]=\"bed\"></ion-input>\n                    </ion-item>\n                    <ion-item class=\"item-input\">\n                        <ion-button color=\"primary\" slot=\"start\" class=\"spinner-btn white-text\" (click)=\"spinnerMin('bath')\" [disabled]=\"bath == 0\">\n                            <ion-icon name=\"remove\" slot=\"icon-only\"></ion-icon>\n                        </ion-button>\n                        <ion-button color=\"primary\" slot=\"end\" class=\"spinner-btn white-text\" (click)=\"spinnerPlus('bath')\">\n                            <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n                        </ion-button>\n                        <ion-label position=\"floating\">Bathrooms</ion-label>\n                        <ion-input clearInput type=\"number\" name=\"bath\" value=\"0\" [(ngModel)]=\"bath\"></ion-input>\n                    </ion-item>\n                </ion-list>\n            </div>\n\n            <ion-button color=\"primary\" size=\"large\" expand=\"block\" class=\"big-btn white-text next\" round strong (click)=\"nextStep()\">\n                Next\n                <ion-icon name=\"arrow-forward\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-slide>\n\n        <ion-slide>\n            <h1>Where's your place located?</h1>\n            <div class=\"content-container\">\n                <ion-list lines=\"full\">\n                    <ion-item class=\"item-input\" [ngClass]=\"city_id !== null && city_id !== '' ? 'ion-item-hasvalue item-has-value' : ''\">\n                        <ion-label position=\"floating\">Region</ion-label>\n                        <ion-select interface=\"popover\" [(ngModel)]=\"city_id\" (ionChange)=\"getCityLatLng(city_id)\">\n                            <ion-select-option *ngFor=\"let item of allLocations\" value=\"{{item.id}}\" [selected]=\"item.id == city_id ? 'true' : 'false'\">{{item.title}}</ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                    <ion-item class=\"item-input\">\n                        <ion-label position=\"floating\">Area</ion-label>\n                        <ion-input clearInput type=\"search\" name=\"area\" [(ngModel)]=\"area\" debounce=\"500\" value=\"\"></ion-input>\n                    </ion-item>\n                    <!--<ion-list *ngIf=\"hasPlaces && !placeDone\" class=\"places-result\">\n                        <ion-item *ngFor=\"let place of placesArray\" (click)=\"selectPlace(place.place_id, place.description)\">\n                            <ion-label>\n                                {{place.description}}\n                            </ion-label>\n                        </ion-item>\n                    </ion-list>-->\n                </ion-list>\n            </div>\n\n            <ion-button color=\"primary\" size=\"large\" expand=\"block\" class=\"big-btn white-text next\" round strong (click)=\"nextStep(true)\">\n                Next\n                <ion-icon name=\"arrow-forward\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-slide>\n\n        <ion-slide>\n            <h1>Is the pin in the right place?</h1>\n            <p color=\"medium\" class=\"sub-heading\">Drag the map to place the pin</p>\n            <div id=\"map_canvas\" #map_canvas  ></div>\n            <!--<div class=\"v-marker\" #vMarker>\n                <img src=\"./assets/img/v_marker.svg\" [ngStyle]=\"{'transform': mapMoving ? 'scale(0.7)' : 'scale(1)'}\" />\n            </div>-->\n            <ion-button color=\"primary\" size=\"large\" expand=\"block\" class=\"big-btn white-text next\" round strong (click)=\"nextStep()\">\n                Next\n                <ion-icon name=\"arrow-forward\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-slide>\n\n        <ion-slide>\n            <h1>What amenities will you offer?</h1>\n            <p color=\"medium\" class=\"sub-heading\">\n                You'll be able to add more amenities after you publish your listing.\n            </p>\n            <div class=\"content-container\">\n                <ion-list lines=\"full\">\n                    <ion-item *ngFor=\"let option of propAmenities; let i = index\">\n                        <ion-label>{{option.title}}</ion-label>\n                        <ion-checkbox value=\"{{option.id}}\" (click)=\"setAmenity(option.id, $event)\" [(ngModel)]=\"option.isChecked\" mode=\"ios\"></ion-checkbox>\n                    </ion-item>\n                </ion-list>\n            </div>\n\n            <ion-button color=\"primary\" size=\"large\" expand=\"block\" class=\"big-btn white-text next\" round strong (click)=\"nextStep()\">\n                Next\n                <ion-icon name=\"arrow-forward\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-slide>\n\n        <ion-slide>\n            <h1>Suitable for?</h1>\n            <!-- <p color=\"medium\" class=\"sub-heading\">You'll be able to add more amenities after you publish your listing.</p> -->\n            <div class=\"content-container\">\n                <ion-list lines=\"full\">\n                    <ion-item *ngFor=\"let option of propSuitable; let i = index\">\n                        <ion-label>{{option.title}}</ion-label>\n                        <ion-checkbox value=\"{{option.id}}\" (click)=\"setSuitableFor(option.id, $event)\" [(ngModel)]=\"option.isChecked\" mode=\"ios\"></ion-checkbox>\n                    </ion-item>\n                </ion-list>\n            </div>\n\n            <ion-button color=\"primary\" size=\"large\" expand=\"block\" class=\"big-btn white-text next\" round strong (click)=\"nextStep()\">\n                Next\n                <ion-icon name=\"arrow-forward\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-slide>\n\n        <ion-slide>\n            <h1>Add photos to your listing</h1>\n            <p color=\"medium\" class=\"description\">\n                Help guests imagine staying in your place. More photos are better, but you can always start with two and add more after you complete your listing\n            </p>\n            <ion-button expand=\"block\" color=\"primary\" class=\"white-text big-btn select-photo\" (click)=\"selectImage()\">\n                <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\n                Select Photo\n            </ion-button>\n            <div class=\"content-container\">\n                <ion-list>\n                    <ion-item *ngFor=\"let img of images; index as pos\" text-wrap>\n                        <ion-thumbnail slot=\"start\">\n                            <ion-img [src]=\"img.path\"></ion-img>\n                        </ion-thumbnail>\n                        <ion-label>\n                            {{ img.name }}\n                        </ion-label>\n                        <ion-button slot=\"end\" fill=\"clear\" [disabled]=\"img.isUploaded\" (click)=\"startUpload(img, pos)\">\n                            <ion-icon slot=\"icon-only\" [name]=\"img.isUploaded ? 'checkmark-circle-outline' : 'cloud-upload'\"></ion-icon>\n                        </ion-button>\n                        <ion-button slot=\"end\" fill=\"clear\" (click)=\"deleteImage(img, pos)\">\n                            <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                        </ion-button>\n                    </ion-item>\n                </ion-list>\n            </div>\n\n            <ion-button color=\"primary\" size=\"large\" expand=\"block\" class=\"big-btn white-text next\" round strong (click)=\"nextStep()\">\n                Next\n                <ion-icon name=\"arrow-forward\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-slide>\n\n        <ion-slide>\n            <div class=\"content-container\">\n                <ion-list lines=\"full\">\n                    <h1>Describe your place to guests</h1>\n                    <ion-item class=\"item-input\">\n                        <!-- <ion-label position=\"floating\">Street</ion-label> -->\n                        <ion-textarea type=\"search\" [(ngModel)]=\"description\" rows=\"4\" class=\"desc\" placeholder=\"Type your description\"></ion-textarea>\n                    </ion-item>\n                    <!--<h1>Want to add more info? (optional)</h1>\n                    <ion-item class=\"item-input\">\n                        <ion-label position=\"floating\">Add other details that help set guest's expectations for their stay</ion-label>\n                        <ion-textarea type=\"search\" [(ngModel)]=\"st_desc\" rows=\"4\" class=\"desc\" placeholder=\"Other details that help set guest's expectations for their stay\"></ion-textarea>\n                    </ion-item>-->\n                </ion-list>\n            </div>\n            <ion-button color=\"primary\" size=\"large\" expand=\"block\" class=\"big-btn white-text next\" round strong (click)=\"nextStep()\">\n                Next\n                <ion-icon name=\"arrow-forward\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-slide>\n\n        <ion-slide>\n            <div class=\"content-container\">\n                <h1>Name Your Place</h1>\n                <p color=\"medium\" class=\"description\">\n                    Attract guests with a listing title that highlights what makes your place special.\n                </p>\n                <ion-list lines=\"full\">\n                    <ion-item class=\"item-input\">\n                        <ion-label position=\"floating\">Your Place Name</ion-label>\n                        <ion-input clearInput type=\"text\" [(ngModel)]=\"title\"></ion-input>\n                    </ion-item>\n                </ion-list>\n            </div>\n            <ion-button color=\"primary\" size=\"large\" expand=\"block\" class=\"big-btn white-text next\" round strong (click)=\"nextStep()\">\n                Next\n                <ion-icon name=\"arrow-forward\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-slide>-->\n\n        <ion-slide>\n            <div class=\"content-container\">\n                <h1>How long can guests stay?</h1>\n                <p color=\"medium\" class=\"description\">\n                        Attract guests with a listing title that highlights what makes your place special.\n                    </p> \n                <ion-list lines=\"full\">\n                    <ion-item class=\"item-input\">\n                        <ion-label position=\"floating\">Maximum stay</ion-label>\n                        <ion-input clearInput type=\"number\" name=\"maximum_days\" [(ngModel)]=\"maximum_days\"></ion-input>\n                    </ion-item>\n\n                    <!--<ion-item class=\"item-input\">\n                        <ion-label position=\"floating\">Booking Period (day)</ion-label>\n                        <ion-input clearInput type=\"number\" [(ngModel)]=\"rentals_booking_period\"></ion-input>\n                    </ion-item>-->\n                </ion-list>\n                 <ion-list lines=\"full\">\n                    <ion-item>\n                        <ion-label position=\"floating\">Online Payment</ion-label>\n                        <ion-radio value=\"1\" [(ngModel)]=\"ready_to_pay\" mode=\"ios\"></ion-radio>\n                    </ion-item>\n                </ion-list>    \n            </div>\n            <ion-button color=\"primary\" size=\"large\" expand=\"block\" class=\"big-btn white-text next\" round strong (click)=\"nextStep()\">\n                Next\n                <ion-icon name=\"arrow-forward\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-slide>\n\n        <ion-slide>\n            <div class=\"content-container\">\n                <h1>Price Your Space</h1>\n                <!-- <p color=\"medium\" class=\"description\">\n                            Attract guests with a listing title that highlights what makes your place special.\n                        </p> -->\n                <ion-list lines=\"full\">\n                    <ion-item class=\"item-input\">\n                        <ion-label position=\"floating\">Base Price (GBP £)</ion-label>\n                        <ion-input clearInput type=\"number\" [(ngModel)]=\"price\"></ion-input>\n                    </ion-item>\n                </ion-list>\n                <ion-list lines=\"full\">\n                    <ion-item class=\"item-input\">\n                        <ion-label position=\"floating\">Discount Price (GBP £)</ion-label>\n                        <ion-input clearInput type=\"number\" [(ngModel)]=\"discount_price\"></ion-input>\n                    </ion-item>\n                </ion-list>\n            </div>\n            <ion-button color=\"primary\" size=\"large\" expand=\"block\" class=\"big-btn white-text next\" round strong (click)=\"nextStep()\">\n                Next\n                <ion-icon name=\"arrow-forward\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-slide>\n\n        <ion-slide>\n            <div class=\"content-container\">\n                <h1>You’re ready to publish!</h1>\n                <p color=\"medium\" class=\"description\">\n                    Awesome brand service website Ever Forward emblem marketing launch logo. Strategic collateral Ever Forward Head Honcho strategic accessible, publications partner RPS word nerd.\n                </p>\n            </div>\n            <ion-button color=\"primary\" size=\"large\" expand=\"block\" class=\"big-btn white-text next\" round strong (click)=\"publish()\">\n                Publish\n                <ion-icon name=\"arrow-forward\" slot=\"end\"></ion-icon>\n            </ion-button>\n        </ion-slide>\n    </ion-slides>\n</ion-content>"

/***/ }),

/***/ "./src/app/property/add/add.page.scss":
/*!********************************************!*\
  !*** ./src/app/property/add/add.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-slides {\n  height: 100%; }\n  ion-slides ion-slide {\n    flex-direction: column;\n    justify-content: flex-start; }\n  ion-slides ion-slide .content-container {\n      overflow-y: scroll;\n      width: 100%;\n      padding-bottom: 70px; }\n  ion-slides ion-slide h1 {\n      text-align: left;\n      align-self: baseline;\n      font-weight: 800;\n      font-size: 34px;\n      margin-top: 0; }\n  ion-slides ion-slide p.sub-heading {\n      align-self: baseline;\n      text-align: left;\n      font-size: 16px;\n      margin: 0 0 15px; }\n  ion-slides ion-slide p.description {\n      align-self: baseline;\n      text-align: left; }\n  ion-slides ion-slide ion-button.select-photo {\n      margin: 30px 0 20px; }\n  ion-slides ion-slide ion-button.select-photo ion-icon {\n        margin-right: 0;\n        position: relative;\n        left: auto; }\n  ion-slides ion-slide ion-button {\n      margin: 16px 0; }\n  ion-slides ion-slide ion-button.next {\n        position: absolute;\n        width: 50%;\n        bottom: 0;\n        right: 0; }\n  ion-slides ion-slide ion-button.next ion-icon {\n          margin-right: 0;\n          position: relative;\n          left: auto; }\n  ion-slides ion-slide ion-button.prev {\n        margin-left: -5px;\n        margin-right: 10px; }\n  ion-slides ion-slide ion-list {\n      width: 100%; }\n  ion-slides ion-slide ion-list ion-item {\n        width: 100%;\n        --padding-top: 16px;\n        --padding-bottom: 16px; }\n  ion-slides ion-slide ion-list ion-item p {\n          font-weight: 300;\n          margin: 0; }\n  ion-slides ion-slide ion-list ion-item ion-checkbox {\n          --checkmark-color: #fff; }\n  ion-slides ion-slide ion-list ion-item ion-button.spinner-btn {\n          margin: 19px 5px 0;\n          height: 40px;\n          width: 40px;\n          border-radius: 50%;\n          --border-radius: 50%; }\n  ion-slides ion-slide ion-list ion-item ion-textarea.desc {\n          min-height: auto; }\n  ion-slides ion-slide ion-list ion-list.places-result {\n        max-height: 100px;\n        overflow-x: scroll;\n        margin-top: -20px;\n        background: #fff;\n        border: 1px solid #e6e6e6;\n        border-radius: 0 0 8px 8px; }\n  ion-slides ion-slide ion-list ion-list.places-result ion-item {\n          --padding-bottom: 0;\n          --padding-top: 0;\n          font-size: 14px;\n          --inner-padding-bottom: 0;\n          --inner-padding-top: 0;\n          --min-height: 30px;\n          --border-color: #efefef; }\n  ion-slides ion-slide ion-list ion-list.places-result ion-item ion-label {\n            margin: 0; }\n  ion-slides ion-slide .v-marker {\n      position: absolute;\n      transition: all 0.1s;\n      transform: scale(1);\n      align-self: center;\n      top: 50%; }\n  ion-slides ion-slide .v-marker.moving {\n        transform: scale(0.7); }\n  ion-slides ion-slide .v-marker img {\n        width: 53px;\n        height: 64px; }\n  ion-slides ion-slide ion-row {\n      width: 100%; }\n  #map_canvas {\n  width: 100%;\n  height: 400px;\n  margin: 0 -16px;\n  position: relative; }\n  #map {\n  width: 100%;\n  height: 400px;\n  margin: 0 -16px;\n  position: relative; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvcGVydHkvYWRkL0Q6XFxtb2JpbGVcXGNlbnRyaWNGaW5hbC9zcmNcXGFwcFxccHJvcGVydHlcXGFkZFxcYWRkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVksRUFBQTtFQURoQjtJQUdRLHNCQUFzQjtJQUN0QiwyQkFBMkIsRUFBQTtFQUpuQztNQU1ZLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsb0JBQW9CLEVBQUE7RUFSaEM7TUFXWSxnQkFBZ0I7TUFDaEIsb0JBQW9CO01BQ3BCLGdCQUFnQjtNQUNoQixlQUFlO01BQ2YsYUFBYSxFQUFBO0VBZnpCO01Ba0JZLG9CQUFvQjtNQUNwQixnQkFBZ0I7TUFDaEIsZUFBZTtNQUNmLGdCQUFnQixFQUFBO0VBckI1QjtNQXdCWSxvQkFBb0I7TUFDcEIsZ0JBQWdCLEVBQUE7RUF6QjVCO01BNEJZLG1CQUFtQixFQUFBO0VBNUIvQjtRQThCZ0IsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixVQUFVLEVBQUE7RUFoQzFCO01Bb0NZLGNBQWMsRUFBQTtFQXBDMUI7UUFzQ2dCLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsU0FBUztRQUNULFFBQVEsRUFBQTtFQXpDeEI7VUEyQ29CLGVBQWU7VUFDZixrQkFBa0I7VUFDbEIsVUFBVSxFQUFBO0VBN0M5QjtRQWlEZ0IsaUJBQWlCO1FBQ2pCLGtCQUFrQixFQUFBO0VBbERsQztNQXNEWSxXQUFXLEVBQUE7RUF0RHZCO1FBd0RnQixXQUFXO1FBQ1gsbUJBQWM7UUFDZCxzQkFBaUIsRUFBQTtFQTFEakM7VUE0RG9CLGdCQUFnQjtVQUNoQixTQUFTLEVBQUE7RUE3RDdCO1VBZ0VvQix1QkFBa0IsRUFBQTtFQWhFdEM7VUFtRW9CLGtCQUFrQjtVQUNsQixZQUFZO1VBQ1osV0FBVztVQUNYLGtCQUFrQjtVQUNsQixvQkFBZ0IsRUFBQTtFQXZFcEM7VUEwRW9CLGdCQUFnQixFQUFBO0VBMUVwQztRQThFZ0IsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLHlCQUF5QjtRQUN6QiwwQkFBMEIsRUFBQTtFQW5GMUM7VUFxRm9CLG1CQUFpQjtVQUNqQixnQkFBYztVQUNkLGVBQWU7VUFDZix5QkFBdUI7VUFDdkIsc0JBQW9CO1VBQ3BCLGtCQUFhO1VBQ2IsdUJBQWUsRUFBQTtFQTNGbkM7WUE2RndCLFNBQVMsRUFBQTtFQTdGakM7TUFtR1ksa0JBQWtCO01BQ2xCLG9CQUFvQjtNQUNwQixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLFFBQVEsRUFBQTtFQXZHcEI7UUF5R2dCLHFCQUFxQixFQUFBO0VBekdyQztRQTRHZ0IsV0FBVztRQUNYLFlBQVksRUFBQTtFQTdHNUI7TUFpSFksV0FBVyxFQUFBO0VBTXZCO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7RUFFdEI7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb3BlcnR5L2FkZC9hZGQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlcyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGlvbi1zbGlkZSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDcwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIH1cbiAgICAgICAgcC5zdWItaGVhZGluZyB7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIHAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1idXR0b24uc2VsZWN0LXBob3RvIHtcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCAwIDIwcHg7XG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgICAgICAgICAmLm5leHQge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYucHJldiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlvbi1saXN0IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDE2cHg7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpb24tY2hlY2tib3gge1xuICAgICAgICAgICAgICAgICAgICAtLWNoZWNrbWFyay1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW9uLWJ1dHRvbi5zcGlubmVyLWJ0biB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTlweCA1cHggMDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW9uLXRleHRhcmVhLmRlc2Mge1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1saXN0LnBsYWNlcy1yZXN1bHQge1xuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XG4gICAgICAgICAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy10b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIC0tbWluLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6ICNlZmVmZWY7XG4gICAgICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnYtbWFya2VyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjFzO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgJi5tb3Zpbmcge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUzcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlvbi1yb3cge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBpb24tY29sIHt9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiNtYXBfY2FudmFzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIG1hcmdpbjogMCAtMTZweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jbWFwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIG1hcmdpbjogMCAtMTZweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/property/add/add.page.ts":
/*!******************************************!*\
  !*** ./src/app/property/add/add.page.ts ***!
  \******************************************/
/*! exports provided: AddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPage", function() { return AddPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/File/ngx */ "./node_modules/@ionic-native/File/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_wpapi_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/wpapi.service */ "./src/app/services/wpapi.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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












var STORAGE_KEY = 'my_property_images';
var STORAGE_PROP_KEY = 'prop_temp';
var AddPage = /** @class */ (function () {
    function AddPage(wpApiService, authService, platform, renderer, camera, file, http, webview, actionSheetController, toastController, storage, plt, loadingController, ref, filePath, router) {
        this.wpApiService = wpApiService;
        this.authService = authService;
        this.platform = platform;
        this.renderer = renderer;
        this.camera = camera;
        this.file = file;
        this.http = http;
        this.webview = webview;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        this.storage = storage;
        this.plt = plt;
        this.loadingController = loadingController;
        this.ref = ref;
        this.filePath = filePath;
        this.router = router;
        this.step = 1;
        this.sliderOpts = {
            effect: 'slide',
            slidesPerView: 1,
            resistance: false,
            preventInteractionOnTransition: true,
            allowSlidePrev: false,
            allowSlideNext: false,
            loop: true
        };
        this.hideMap = true;
        this.isLoading = true;
        this.propData = {
            property_id: null,
            title: '',
            description: '',
            renttype_id: '',
            city_id: null,
            area: '',
            adults: 1,
            children: 0,
            price: null,
            discount_price: null,
            id_gallery: null,
            bath: 0,
            bed: 1,
            sqft: '',
            maximum_days: 60,
            lat: '',
            lng: '',
            ready_to_pay: 0
        };
        this.adults = 1;
        this.children = 0;
        this.bath = 0;
        this.bed = 1;
        this.ready_to_pay = 0;
        this.dData = '';
        this.isSaved = false;
        this.propSuitableVal = new Array();
        this.propAmenitiesVal = new Array();
        this.amenities = [];
        this.suitablefor = [];
        this.ptData = [];
        this.psData = [];
        this.lcntData = [];
        this.paData = [];
        this.mapCenter = {
            lat: 31.0310556,
            lng: 31.359881
        };
        this.streetInput = '';
        this.tempStreet = '';
        this.placesArray = [];
        this.hasPlaces = false;
        this.placeDone = false;
        this.mapMoving = false;
        this.images = [];
    }
    AddPage.prototype.getUserToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.getUserData2().then(function (data) {
                            var userData = data;
                            _this.userToken = userData['token'];
                            console.log(_this.userToken);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddPage.prototype.showLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingPage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: null,
                            message: '<img src="/assets/img/loading.gif" />',
                            // translucent: true,
                            cssClass: 'page-loading new-loader'
                        })];
                    case 1:
                        loadingPage = _a.sent();
                        return [4 /*yield*/, loadingPage.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AddPage.prototype.hideLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                setTimeout(function () {
                    _this.isLoading = false;
                    _this.loadingController.dismiss();
                }, 500);
                return [2 /*return*/];
            });
        });
    };
    AddPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.plt.ready().then(function () {
                            //this.checkTemp();
                            //this.loadStoredImages();
                        });
                        return [4 /*yield*/, this.getUserToken()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getPropTypes()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.getAmenities()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.getSuitableFor()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.getAllLocs()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddPage.prototype.ionViewDidEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.plt.ready().then(function () {
                            //this.loadStoredImages();
                            //this.checkTemp();
                        });
                        return [4 /*yield*/, this.getUserToken()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getPropTypes()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.getAmenities()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.getSuitableFor()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.getAllLocs()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddPage.prototype.getPropTypes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                //this.showLoading();
                this.wpApiService.getPropertyTypes().subscribe(function (prop_types) {
                    _this.hideLoading();
                    _this.ptData = prop_types;
                    _this.propTypeArr = _this.ptData.data;
                });
                return [2 /*return*/];
            });
        });
    };
    AddPage.prototype.getSuitableFor = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.wpApiService.getSuitableFor().subscribe(function (prop_suitable) {
                    _this.psData = prop_suitable;
                    _this.propSuitable = _this.psData.data;
                    _this.setSuitChecks();
                });
                return [2 /*return*/];
            });
        });
    };
    AddPage.prototype.getAllLocs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.wpApiService.getLocations().subscribe(function (locations) {
                    _this.lcntData = locations;
                    _this.allLocations = _this.lcntData.data;
                });
                return [2 /*return*/];
            });
        });
    };
    AddPage.prototype.getAmenities = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.wpApiService.getAmenities().subscribe(function (prop_amenities) {
                    _this.paData = prop_amenities;
                    _this.propAmenities = _this.paData.data;
                    _this.setAmenChecks();
                });
                return [2 /*return*/];
            });
        });
    };
    // setPropType(value, e) {
    //   if (e.target.checked) {
    //     this.propTypeVal.push(value);
    // }
    // if (!e.target.checked) {
    //   const index = this.propTypeVal.indexOf(value, 0);
    //   if (index > -1) {
    //     this.propTypeVal.splice(index, 1);
    //   }
    // }
    // }
    AddPage.prototype.setAmenChecks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.propAmenities.forEach(function (element) {
                            var index = _this.amenities.indexOf(element.id, 0);
                            if (index > -1) {
                                element.isChecked = true;
                                _this.propAmenitiesVal.push(element.id);
                            }
                            else {
                                element.isChecked = false;
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddPage.prototype.setSuitChecks = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.propSuitable.forEach(function (element) {
                            var index = _this.suitablefor.indexOf(element.id, 0);
                            if (index > -1) {
                                element.isChecked = true;
                                _this.propSuitableVal.push(element.id);
                            }
                            else {
                                element.isChecked = false;
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddPage.prototype.setAmenity = function (obj, e) {
        if (!e.target.checked) {
            this.propAmenitiesVal.push(obj);
            this.amenities = this.propAmenitiesVal;
        }
        if (e.target.checked) {
            var index = this.propAmenitiesVal.indexOf(obj, 0);
            if (index > -1) {
                this.propAmenitiesVal.splice(index, 1);
                this.amenities = this.propAmenitiesVal;
            }
        }
    };
    AddPage.prototype.setSuitableFor = function (obj, e) {
        if (!e.target.checked) {
            this.propSuitableVal.push(obj);
            this.suitablefor = this.propSuitableVal;
        }
        if (e.target.checked) {
            var index = this.suitablefor.indexOf(obj, 0);
            if (index > -1) {
                this.propSuitableVal.splice(index, 1);
                this.suitablefor = this.propSuitableVal;
            }
        }
    };
    // isCheckedAm(amID) {
    //   const tempArr = this.amenities;
    //   const index = tempArr.indexOf(amID, 0);
    //   if (index > -1) {
    //     console.log(this.amenities);
    //     return true;
    //   }
    // }
    AddPage.prototype.checkTemp = function () {
        var _this = this;
        this.storage.get(STORAGE_PROP_KEY).then(function (pData) {
            var pArr = pData;
            if (pArr) {
                _this.propData = pArr;
                _this.isSaved = true;
                _this.tempStreet = _this.area;
                console.log(_this.propData);
                // if (this.lat !== '' && this.lng !== '') {
                //   this.relocateMap({lat: this.lat, lng: this.lng});
                // }
            }
            else {
                _this.isSaved = false;
            }
        });
    };
    AddPage.prototype.nextStep = function (showMap) {
        if (showMap === void 0) { showMap = false; }
        return __awaiter(this, void 0, void 0, function () {
            var mapLocation;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.property_id) {
                            this.propData.property_id = this.property_id;
                        }
                        if (this.title) {
                            this.propData.title = this.title;
                        }
                        if (this.description) {
                            this.propData.description = this.description;
                        }
                        if (this.renttype_id) {
                            this.propData.renttype_id = this.renttype_id;
                        }
                        if (this.city_id) {
                            this.propData.city_id = this.city_id;
                        }
                        if (this.area) {
                            this.propData.area = this.area;
                        }
                        if (this.adults) {
                            this.propData.adults = this.adults;
                        }
                        if (this.children) {
                            this.propData.children = this.children;
                        }
                        if (this.price) {
                            this.propData.price = this.price;
                        }
                        if (this.bath) {
                            this.propData.bath = this.bath;
                        }
                        if (this.bed) {
                            this.propData.bed = this.bed;
                        }
                        if (this.sqft) {
                            this.propData.sqft = this.sqft;
                        }
                        if (this.lat) {
                            this.propData.lat = this.lat;
                        }
                        if (this.lng) {
                            this.propData.lng = this.lng;
                        }
                        if (this.maximum_days) {
                            this.propData.maximum_days = this.maximum_days;
                        }
                        if (this.ready_to_pay) {
                            this.propData.ready_to_pay = this.ready_to_pay;
                        }
                        if (!(showMap === true)) return [3 /*break*/, 5];
                        this.hideMap = false;
                        if (!(this.lat !== null && this.lat !== '')) return [3 /*break*/, 2];
                        mapLocation = {
                            lat: this.lat,
                            lng: this.lng
                        };
                        return [4 /*yield*/, this.loadMap(mapLocation)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.loadMap(this.mapCenter)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        this.hideMap = true;
                        _a.label = 6;
                    case 6:
                        if (this.isSaved && this.property_id !== null) {
                            STORAGE_KEY.replace('my_property_images', 'my_property_' + this.property_id + '_images');
                            this.wpApiService
                                .addProperty(this.authService.userToken, this.propData, false, this.property_id)
                                .subscribe(function (data) {
                                console.log('Property Updated');
                                console.log(_this.propData);
                                _this.storage.set(STORAGE_PROP_KEY, JSON.stringify(_this.propData));
                            });
                        }
                        else {
                            this.wpApiService
                                .addProperty(this.authService.userToken, this.propData, true, null)
                                .subscribe(function (data) {
                                console.log('Property Added');
                                console.log(_this.propData);
                                _this.isSaved = true;
                                _this.property_id = data['status'];
                                console.log(data);
                                _this.storage.set(STORAGE_PROP_KEY, JSON.stringify(_this.propData));
                            });
                        }
                        this.slider.lockSwipeToNext(false).then(function () {
                            _this.slider.slideNext().then(function () {
                                _this.slider.lockSwipeToNext(true);
                            });
                        });
                        this.step = this.step + 1;
                        console.log('Step:', this.step);
                        return [2 /*return*/];
                }
            });
        });
    };
    AddPage.prototype.publish = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.isSaved && this.property_id !== null)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Publishing...'
                            })];
                    case 1:
                        loading_1 = _a.sent();
                        return [4 /*yield*/, loading_1.present()];
                    case 2:
                        _a.sent();
                        this.wpApiService
                            .addProperty(this.authService.userToken, this.propData, false, this.property_id)
                            .subscribe(function (data) {
                            console.log(data);
                            loading_1.dismiss();
                            console.log('Published');
                            _this.storage.remove(STORAGE_PROP_KEY);
                            _this.storage.remove(STORAGE_KEY);
                            //this.propData = this.propDataInit;
                            _this.isSaved = false;
                            _this.checkTemp();
                            // this.slider.slideTo(1);
                            _this.slider.lockSwipeToNext(false).then(function () {
                                _this.slider.slideNext().then(function () {
                                    _this.slider.lockSwipeToNext(true);
                                });
                            });
                            _this.presentSuccess('Your property has been saved successfully, and waiting for admin approval');
                            _this.router.navigateByUrl('/tabs/tab1');
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AddPage.prototype.prevStep = function (showMap) {
        if (showMap === void 0) { showMap = false; }
        return __awaiter(this, void 0, void 0, function () {
            var mapLocation;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.step = this.step - 1;
                        if (!(showMap === true)) return [3 /*break*/, 5];
                        this.hideMap = false;
                        if (!(this.lat !== null && this.lat !== '')) return [3 /*break*/, 2];
                        mapLocation = {
                            lat: this.lat,
                            lng: this.lng
                        };
                        return [4 /*yield*/, this.loadMap(mapLocation)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.loadMap(this.mapCenter)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        this.hideMap = true;
                        _a.label = 6;
                    case 6:
                        if (this.isSaved) {
                            this.wpApiService
                                .addProperty(this.authService.userToken, this.propData, false, this.property_id)
                                .subscribe(function (data) {
                                console.log('Property Updated');
                                console.log(_this.propData);
                                _this.storage.set(STORAGE_PROP_KEY, JSON.stringify(_this.propData));
                            });
                        }
                        else {
                            this.wpApiService
                                .addProperty(this.authService.userToken, this.propData, true, null)
                                .subscribe(function (data) {
                                console.log('Property Added');
                                console.log(_this.propData);
                                _this.isSaved = true;
                                _this.property_id = data['status'];
                                _this.storage.set(STORAGE_PROP_KEY, JSON.stringify(_this.propData));
                            });
                        }
                        this.slider.lockSwipeToPrev(false).then(function () {
                            _this.slider.slidePrev().then(function () {
                                _this.slider.lockSwipeToPrev(true);
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AddPage.prototype.saveExit = function () {
        this.presentSuccess('Your property has been saved successfully.');
        this.router.navigateByUrl('/tabs/host');
    };
    AddPage.prototype.spinnerMin = function (obj) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (obj) {
                    case 'adults':
                        this.adults = this.adults - 1;
                        break;
                    case 'children':
                        this.children =
                            this.children - 1;
                        break;
                    case 'bed':
                        this.bed = this.bed - 1;
                        break;
                    case 'bath':
                        this.bath = this.bath - 1;
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
    AddPage.prototype.spinnerPlus = function (obj) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (obj) {
                    case 'adults':
                        this.adults = this.adults + 1;
                        break;
                    case 'children':
                        this.children = this.children + 1;
                        break;
                    case 'bed':
                        this.bed = this.bed + 1;
                        break;
                    case 'bath':
                        this.bath = this.bath + 1;
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
    /*async loadMap(city_location) {
      if (city_location['lat'] !== null && city_location['lat'] !== '') {
        this.map = GoogleMaps.create('map_canvas', {
          camera: {
            target: {
              lat: parseFloat(city_location['lat']),
              lng: parseFloat(city_location['lng'])
            },
            zoom: 20,
            tilt: 0
          }
        });
        this.map.on(GoogleMapsEvent.MAP_DRAG_START).subscribe(newCenter => {
          this.mapMoving = true;
          this.renderer.setStyle(
            this.vMarker.nativeElement,
            'transform',
            'scale(1.2)'
          );
          this.renderer.setStyle(this.vMarker.nativeElement, 'opacity', '0.7');
        });
        this.map.on(GoogleMapsEvent.CAMERA_MOVE_END).subscribe(newCenter => {
          this.mapLocation = newCenter[0].target;
          this.lat = this.mapLocation.lat;
          this.lng = this.mapLocation.lng;
          this.mapMoving = false;
          this.renderer.setStyle(
            this.vMarker.nativeElement,
            'transform',
            'scale(1)'
          );
          this.renderer.setStyle(this.vMarker.nativeElement, 'opacity', '1');
        });
      }
    }*/
    AddPage.prototype.loadMap = function (city_location) {
        return __awaiter(this, void 0, void 0, function () {
            var latlngi, marker;
            var _this = this;
            return __generator(this, function (_a) {
                latlngi = { lat: this.lat, lng: this.lng };
                this.map = new google.maps.Map(this.mapCanvas.nativeElement, {
                    zoom: 10,
                    center: latlngi,
                    streetViewControl: false,
                    mapTypeControl: false,
                    mapTypeId: 'roadmap'
                });
                marker = new google.maps.Marker({
                    position: latlngi,
                    map: this.map,
                    draggable: true
                });
                this.map.setCenter(latlngi);
                google.maps.event.addListener(marker, 'dragend', function (event) {
                    _this.lat = marker.position.lat();
                    _this.lng = marker.position.lng();
                    console.log(_this.lat);
                });
                return [2 /*return*/];
            });
        });
    };
    AddPage.prototype.searchPlaces = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.area !== this.tempStreet) {
                    if (this.area !== '' && this.authService.userToken !== null) {
                        this.wpApiService
                            .googlePlacesAutoComplete(this.area, this.authService.userToken)
                            .then(function (resData) {
                            var searchData = JSON.parse(resData.data);
                            if (Object.keys(searchData['predictions'] > 0)) {
                                _this.hasPlaces = true;
                                _this.placeDone = false;
                                _this.placesArray = searchData['predictions'];
                            }
                            else {
                                _this.hasPlaces = false;
                                _this.placesArray = [];
                            }
                        });
                    }
                    else {
                        this.hasPlaces = false;
                        this.placesArray = [];
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    AddPage.prototype.selectPlace = function (place_id, place_name) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.area = place_name;
                this.tempStreet = place_name;
                this.hasPlaces = false;
                this.placeDone = true;
                this.placesArray = [];
                this.wpApiService.googlePlacesByID(place_id).then(function (place) {
                    var placehData = JSON.parse(place.data);
                    var newPlace = placehData.result.geometry.location;
                    _this.lat = newPlace.lat;
                    _this.lng = newPlace.lng;
                    // this.relocateMap({lat: this.lat, lng: this.lng});
                });
                return [2 /*return*/];
            });
        });
    };
    // async relocateMap(new_lat_lng) {
    //   this.map.animateCamera({
    //     target: new_lat_lng,
    //     zoom: 18,
    //     tilt: 0
    //   });
    // }
    AddPage.prototype.setPhotos = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(this.photos);
                return [2 /*return*/];
            });
        });
    };
    AddPage.prototype.loadStoredImages = function () {
        var _this = this;
        this.storage.get(STORAGE_KEY).then(function (images) {
            if (images) {
                var arr = JSON.parse(images);
                console.log(images);
                _this.images = [];
                for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                    var img = arr_1[_i];
                    var filePath = _this.file.dataDirectory + img.name;
                    var resPath = _this.pathForImage(filePath);
                    _this.images.push({
                        name: img.name,
                        path: resPath,
                        filePath: filePath,
                        isUploaded: img.isUploaded
                    });
                }
            }
        });
    };
    AddPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            var converted = this.webview.convertFileSrc(img);
            return converted;
        }
    };
    AddPage.prototype.presentToast = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: text,
                            position: 'bottom',
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddPage.prototype.presentSuccess = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: text,
                            position: 'bottom',
                            color: 'success',
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddPage.prototype.selectImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Select Image source',
                            buttons: [
                                {
                                    text: 'Load from Library',
                                    handler: function () {
                                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                    }
                                },
                                {
                                    text: 'Use Camera',
                                    handler: function () {
                                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            if (_this.platform.is('android') &&
                sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath).then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        });
    };
    AddPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + '.jpg';
        return newFileName;
    };
    AddPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file
            .copyFile(namePath, currentName, this.file.dataDirectory, newFileName)
            .then(function (success) {
            _this.updateStoredImages(newFileName, false);
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    AddPage.prototype.updateStoredImages = function (name, isUploaded) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.storage.get(STORAGE_KEY).then(function (images) {
                    var arr = JSON.parse(images);
                    if (!arr) {
                        var newImages = [{ name: name, isUploaded: isUploaded }];
                        _this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
                    }
                    else {
                        arr.push({ name: name, isUploaded: isUploaded });
                        _this.storage.set(STORAGE_KEY, JSON.stringify(arr));
                    }
                    var filePath = _this.file.dataDirectory + name;
                    var resPath = _this.pathForImage(filePath);
                    var newEntry = {
                        name: name,
                        path: resPath,
                        filePath: filePath,
                        isUploaded: false
                    };
                    _this.images = [newEntry].concat(_this.images);
                    _this.ref.detectChanges(); // trigger change detection cycle
                });
                return [2 /*return*/];
            });
        });
    };
    AddPage.prototype.deleteImage = function (imgEntry, position) {
        var _this = this;
        this.images.splice(position, 1);
        this.storage.get(STORAGE_KEY).then(function (images) {
            var arr = JSON.parse(images);
            var filtered = arr.filter(function (name) { return name !== imgEntry.name; });
            _this.storage.set(STORAGE_KEY, JSON.stringify(filtered));
            var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);
            _this.file.removeFile(correctPath, imgEntry.name).then(function (res) {
                _this.presentToast('File removed.');
            });
        });
    };
    AddPage.prototype.startUpload = function (imgEntry, position) {
        var _this = this;
        this.file
            .resolveLocalFilesystemUrl(imgEntry.filePath)
            .then(function (entry) {
            entry.file(function (file) {
                return _this.readFile(file, imgEntry, position);
            });
        })
            .catch(function (err) {
            _this.presentToast('Error while reading file.');
        });
    };
    AddPage.prototype.readFile = function (file, imgEntry, position) {
        var _this = this;
        var reader = new FileReader();
        reader.onloadend = function () {
            var formData = new FormData();
            var imgBlob = new Blob([reader.result], {
                type: file.type
            });
            formData.append('page', 'propertyimages');
            formData.append('token', _this.authService.userToken);
            formData.append('user_photo', imgBlob, file.name);
            formData.append('rental', _this.property_id);
            _this.uploadImageData(formData, imgEntry, position);
        };
        reader.readAsArrayBuffer(file);
    };
    AddPage.prototype.uploadImageData = function (formData, imgEntry, position) {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Uploading image...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.http
                            .post('https://propertystays.com/api/user/add-property-propertyimages', formData)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                            loading.dismiss();
                        }))
                            .subscribe(function (res) {
                            if (res) {
                                _this.presentToast('File upload complete.');
                                _this.images[position].isUploaded = true;
                                _this.storage.set(STORAGE_KEY, JSON.stringify(_this.images));
                            }
                            else {
                                _this.presentToast('File upload failed.');
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AddPage.prototype.getCityLatLng = function (loc_id) {
        var _this = this;
        this.wpApiService.getCityCheck(loc_id).subscribe(function (data) {
            console.log(data);
            _this.lat = parseFloat(data['lati']);
            _this.lng = parseFloat(data['lngg']);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepsSlider'),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], AddPage.prototype, "slider", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('vMarker'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AddPage.prototype, "vMarker", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('map_canvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AddPage.prototype, "mapCanvas", void 0);
    AddPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.page.html */ "./src/app/property/add/add.page.html"),
            styles: [__webpack_require__(/*! ./add.page.scss */ "./src/app/property/add/add.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_wpapi_service__WEBPACK_IMPORTED_MODULE_8__["WpapiService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_1__["Camera"],
            _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_3__["File"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_4__["WebView"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_6__["FilePath"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]])
    ], AddPage);
    return AddPage;
}());



/***/ })

}]);
//# sourceMappingURL=property-add-add-module.js.map
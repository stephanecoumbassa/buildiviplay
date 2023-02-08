(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-detail-settings-detail-module"],{

/***/ "29CU":
/*!**************************************************************************************!*\
  !*** ./src/app/services/comptage/settings/settings-detail/settings-detail.page.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy1kZXRhaWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "6mvF":
/*!**************************************************************************************!*\
  !*** ./src/app/services/comptage/settings/settings-detail/settings-detail.module.ts ***!
  \**************************************************************************************/
/*! exports provided: SettingsDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsDetailPageModule", function() { return SettingsDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _settings_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-detail-routing.module */ "wkEM");
/* harmony import */ var _settings_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings-detail.page */ "b6kv");







let SettingsDetailPageModule = class SettingsDetailPageModule {
};
SettingsDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _settings_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsDetailPageRoutingModule"]
        ],
        declarations: [_settings_detail_page__WEBPACK_IMPORTED_MODULE_6__["SettingsDetailPage"]]
    })
], SettingsDetailPageModule);



/***/ }),

/***/ "b6kv":
/*!************************************************************************************!*\
  !*** ./src/app/services/comptage/settings/settings-detail/settings-detail.page.ts ***!
  \************************************************************************************/
/*! exports provided: SettingsDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsDetailPage", function() { return SettingsDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_settings_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./settings-detail.page.html */ "lFQs");
/* harmony import */ var _settings_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-detail.page.scss */ "29CU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SettingsDetailPage = class SettingsDetailPage {
    constructor() { }
    ngOnInit() {
    }
};
SettingsDetailPage.ctorParameters = () => [];
SettingsDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-settings-detail',
        template: _raw_loader_settings_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_settings_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SettingsDetailPage);



/***/ }),

/***/ "lFQs":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/comptage/settings/settings-detail/settings-detail.page.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>settingsDetail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "wkEM":
/*!**********************************************************************************************!*\
  !*** ./src/app/services/comptage/settings/settings-detail/settings-detail-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: SettingsDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsDetailPageRoutingModule", function() { return SettingsDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _settings_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings-detail.page */ "b6kv");




const routes = [
    {
        path: '',
        component: _settings_detail_page__WEBPACK_IMPORTED_MODULE_3__["SettingsDetailPage"]
    }
];
let SettingsDetailPageRoutingModule = class SettingsDetailPageRoutingModule {
};
SettingsDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingsDetailPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=settings-detail-settings-detail-module.js.map
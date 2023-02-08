(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-didacticiel-didacticiel-module"],{

/***/ "QMoP":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/didacticiel/didacticiel.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>didacticiel</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "dkjZ":
/*!**********************************************************!*\
  !*** ./src/app/layout/didacticiel/didacticiel.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWRhY3RpY2llbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "mnSu":
/*!******************************************************************!*\
  !*** ./src/app/layout/didacticiel/didacticiel-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: DidacticielPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DidacticielPageRoutingModule", function() { return DidacticielPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _didacticiel_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./didacticiel.page */ "ukSs");




const routes = [
    {
        path: '',
        component: _didacticiel_page__WEBPACK_IMPORTED_MODULE_3__["DidacticielPage"]
    }
];
let DidacticielPageRoutingModule = class DidacticielPageRoutingModule {
};
DidacticielPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DidacticielPageRoutingModule);



/***/ }),

/***/ "ukSs":
/*!********************************************************!*\
  !*** ./src/app/layout/didacticiel/didacticiel.page.ts ***!
  \********************************************************/
/*! exports provided: DidacticielPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DidacticielPage", function() { return DidacticielPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_didacticiel_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./didacticiel.page.html */ "QMoP");
/* harmony import */ var _didacticiel_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./didacticiel.page.scss */ "dkjZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DidacticielPage = class DidacticielPage {
    constructor() { }
    ngOnInit() {
    }
};
DidacticielPage.ctorParameters = () => [];
DidacticielPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-didacticiel',
        template: _raw_loader_didacticiel_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_didacticiel_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DidacticielPage);



/***/ }),

/***/ "yafO":
/*!**********************************************************!*\
  !*** ./src/app/layout/didacticiel/didacticiel.module.ts ***!
  \**********************************************************/
/*! exports provided: DidacticielPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DidacticielPageModule", function() { return DidacticielPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _didacticiel_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./didacticiel-routing.module */ "mnSu");
/* harmony import */ var _didacticiel_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./didacticiel.page */ "ukSs");







let DidacticielPageModule = class DidacticielPageModule {
};
DidacticielPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _didacticiel_routing_module__WEBPACK_IMPORTED_MODULE_5__["DidacticielPageRoutingModule"]
        ],
        declarations: [_didacticiel_page__WEBPACK_IMPORTED_MODULE_6__["DidacticielPage"]]
    })
], DidacticielPageModule);



/***/ })

}]);
//# sourceMappingURL=layout-didacticiel-didacticiel-module.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-services-home-services-home-module"],{

/***/ "Em5a":
/*!***********************************************************************!*\
  !*** ./src/app/modules/services-home/services-home-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ServicesMenuRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesMenuRoutingModule", function() { return ServicesMenuRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services-home.page */ "nPlL");




const routes = [
    {
        path: '',
        component: _services_home_page__WEBPACK_IMPORTED_MODULE_3__["ServicesMenu"],
    },
];
let ServicesMenuRoutingModule = class ServicesMenuRoutingModule {
};
ServicesMenuRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ServicesMenuRoutingModule);



/***/ }),

/***/ "v7Jj":
/*!***************************************************************!*\
  !*** ./src/app/modules/services-home/services-home.module.ts ***!
  \***************************************************************/
/*! exports provided: ServicesMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesMenuModule", function() { return ServicesMenuModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services-home.page */ "nPlL");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _services_home_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services-home-routing.module */ "Em5a");








let ServicesMenuModule = class ServicesMenuModule {
};
ServicesMenuModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _services_home_routing_module__WEBPACK_IMPORTED_MODULE_7__["ServicesMenuRoutingModule"],
        ],
        declarations: [_services_home_page__WEBPACK_IMPORTED_MODULE_5__["ServicesMenu"]]
    })
], ServicesMenuModule);



/***/ })

}]);
//# sourceMappingURL=modules-services-home-services-home-module.js.map
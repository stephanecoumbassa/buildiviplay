(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-news-redirect-to-map-redirect-to-map-module"],{

/***/ "6Mc9":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/news/redirect-to-map/redirect-to-map.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"map\">\n  <div id=\"mapwize\"></div>\n</div>\n");

/***/ }),

/***/ "DJZ0":
/*!************************************************************************!*\
  !*** ./src/app/modules/news/redirect-to-map/redirect-to-map.module.ts ***!
  \************************************************************************/
/*! exports provided: RedirectToMapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectToMapPageModule", function() { return RedirectToMapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _redirect_to_map_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redirect-to-map-routing.module */ "ZNlc");
/* harmony import */ var _redirect_to_map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./redirect-to-map.page */ "leH2");







let RedirectToMapPageModule = class RedirectToMapPageModule {
};
RedirectToMapPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _redirect_to_map_routing_module__WEBPACK_IMPORTED_MODULE_5__["RedirectToMapPageRoutingModule"]
        ],
        declarations: [_redirect_to_map_page__WEBPACK_IMPORTED_MODULE_6__["RedirectToMapPage"]]
    })
], RedirectToMapPageModule);



/***/ }),

/***/ "Rzj+":
/*!************************************************************************!*\
  !*** ./src/app/modules/news/redirect-to-map/redirect-to-map.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".map {\n  width: 100%;\n}\n\n#mapwize {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3JlZGlyZWN0LXRvLW1hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFSiIsImZpbGUiOiJyZWRpcmVjdC10by1tYXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAjbWFwd2l6ZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9Il19 */");

/***/ }),

/***/ "ZNlc":
/*!********************************************************************************!*\
  !*** ./src/app/modules/news/redirect-to-map/redirect-to-map-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: RedirectToMapPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectToMapPageRoutingModule", function() { return RedirectToMapPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _redirect_to_map_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redirect-to-map.page */ "leH2");




const routes = [
    {
        path: '',
        component: _redirect_to_map_page__WEBPACK_IMPORTED_MODULE_3__["RedirectToMapPage"]
    }
];
let RedirectToMapPageRoutingModule = class RedirectToMapPageRoutingModule {
};
RedirectToMapPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RedirectToMapPageRoutingModule);



/***/ }),

/***/ "leH2":
/*!**********************************************************************!*\
  !*** ./src/app/modules/news/redirect-to-map/redirect-to-map.page.ts ***!
  \**********************************************************************/
/*! exports provided: RedirectToMapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectToMapPage", function() { return RedirectToMapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_redirect_to_map_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./redirect-to-map.page.html */ "6Mc9");
/* harmony import */ var _redirect_to_map_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redirect-to-map.page.scss */ "Rzj+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var mapwize_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mapwize-ui */ "CTer");
/* harmony import */ var mapwize_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mapwize_ui__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_general_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/general-functions */ "EWUx");







let RedirectToMapPage = class RedirectToMapPage {
    constructor(router, generalFunctions) {
        this.router = router;
        this.generalFunctions = generalFunctions;
    }
    ngOnInit() {
        const options = {
            apiKey: '6ee4fd2b3531c7b2609c77ca74ee5add',
            centerOnVenueId: '5d8a191fb99124002d154c93',
            preferredLanguage: 'fr',
            container: 'mapwize',
            zoom: 20,
            mainColor: '#ff0000',
        };
        this.currentMap = {
            id: this.router.getCurrentNavigation().extras.state.id,
            mapWizeId: this.router.getCurrentNavigation().extras.state.mapWizeId,
        };
        mapwize_ui__WEBPACK_IMPORTED_MODULE_5__["map"](options).then((map) => {
            this.generalFunctions.mapCss(map, '/tabs/tab2');
            mapwize_ui__WEBPACK_IMPORTED_MODULE_5__["Api"].getPlace(this.currentMap.mapWizeId).then((place) => {
                const position = {
                    latitude: place.marker.latitude,
                    longitude: place.marker.longitude,
                    floor: 2,
                };
                map.addMarker(position)
                    .then(function (mapInstance) {
                })
                    .catch((err) => {
                    alert('Erreur probème serveur veuillez réssayer plus tard');
                });
            });
        });
    }
};
RedirectToMapPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_general_functions__WEBPACK_IMPORTED_MODULE_6__["GeneralFunctions"] }
];
RedirectToMapPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-redirect-to-map',
        template: _raw_loader_redirect_to_map_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_redirect_to_map_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RedirectToMapPage);



/***/ })

}]);
//# sourceMappingURL=modules-news-redirect-to-map-redirect-to-map-module.js.map
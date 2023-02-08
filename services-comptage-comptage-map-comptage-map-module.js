(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-comptage-comptage-map-comptage-map-module"],{

/***/ "5ojw":
/*!***********************************************************************!*\
  !*** ./src/app/services/comptage/comptage-map/comptage-map.module.ts ***!
  \***********************************************************************/
/*! exports provided: ComptageMapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComptageMapPageModule", function() { return ComptageMapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _comptage_map_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comptage-map-routing.module */ "C5oX");
/* harmony import */ var _comptage_map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comptage-map.page */ "dqJR");







let ComptageMapPageModule = class ComptageMapPageModule {
};
ComptageMapPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _comptage_map_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComptageMapPageRoutingModule"]
        ],
        declarations: [_comptage_map_page__WEBPACK_IMPORTED_MODULE_6__["ComptageMapPage"]]
    })
], ComptageMapPageModule);



/***/ }),

/***/ "C5oX":
/*!*******************************************************************************!*\
  !*** ./src/app/services/comptage/comptage-map/comptage-map-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ComptageMapPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComptageMapPageRoutingModule", function() { return ComptageMapPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _comptage_map_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comptage-map.page */ "dqJR");




const routes = [
    {
        path: '',
        component: _comptage_map_page__WEBPACK_IMPORTED_MODULE_3__["ComptageMapPage"]
    }
];
let ComptageMapPageRoutingModule = class ComptageMapPageRoutingModule {
};
ComptageMapPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComptageMapPageRoutingModule);



/***/ }),

/***/ "C6R5":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/comptage/comptage-map/comptage-map.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"map\">\n  <div id=\"mapwize\"></div>\n</div>\n");

/***/ }),

/***/ "dqJR":
/*!*********************************************************************!*\
  !*** ./src/app/services/comptage/comptage-map/comptage-map.page.ts ***!
  \*********************************************************************/
/*! exports provided: ComptageMapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComptageMapPage", function() { return ComptageMapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_comptage_map_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./comptage-map.page.html */ "C6R5");
/* harmony import */ var _comptage_map_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comptage-map.page.scss */ "fJ+g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var mapwize_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mapwize-ui */ "CTer");
/* harmony import */ var mapwize_ui__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mapwize_ui__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _general_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../general-functions */ "EWUx");








let ComptageMapPage = class ComptageMapPage {
    constructor(router, htmlElement, activatedRoute, navController, generalFunctions) {
        this.router = router;
        this.htmlElement = htmlElement;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.generalFunctions = generalFunctions;
    }
    mapNavigation(htmlTag) {
        htmlTag.onclick = () => {
            this.router.navigate(['/comptage-pzone'], { relativeTo: this.activatedRoute });
        };
    }
    ngOnInit() {
        this.currentRoom = {
            id: this.router.getCurrentNavigation().extras.state.id,
            mapwizeId: this.router.getCurrentNavigation().extras.state.mapwizeId,
            name: this.router.getCurrentNavigation().extras.state.name,
            status: this.router.getCurrentNavigation().extras.state.status,
            dateFin: this.router.getCurrentNavigation().extras.state.dateFin,
            dateDebut: this.router.getCurrentNavigation().extras.state.dateDebut,
        };
        const options = {
            apiKey: '6ee4fd2b3531c7b2609c77ca74ee5add',
            centerOnVenueId: '5d8a191fb99124002d154c93',
            preferredLanguage: 'fr',
            container: 'mapwize',
            zoom: 19,
            mainColor: '#ff0000',
        };
        mapwize_ui__WEBPACK_IMPORTED_MODULE_6__["map"](options).then((map) => {
            this.generalFunctions.mapCss(map, '/comptage-pzone');
            mapwize_ui__WEBPACK_IMPORTED_MODULE_6__["Api"].getPlace(this.currentRoom.mapwizeId).then((place) => {
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
ComptageMapPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _general_functions__WEBPACK_IMPORTED_MODULE_7__["GeneralFunctions"] }
];
ComptageMapPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-comptage-map',
        template: _raw_loader_comptage_map_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_comptage_map_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ComptageMapPage);



/***/ }),

/***/ "fJ+g":
/*!***********************************************************************!*\
  !*** ./src/app/services/comptage/comptage-map/comptage-map.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".map {\n  width: 100%;\n}\n\n#mapwize {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvbXB0YWdlLW1hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFSiIsImZpbGUiOiJjb21wdGFnZS1tYXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAjbWFwd2l6ZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9Il19 */");

/***/ })

}]);
//# sourceMappingURL=services-comptage-comptage-map-comptage-map-module.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-equipment-reservations-map-equipment-map-equipment-module"],{

/***/ "/Mh0":
/*!***************************************************************************************!*\
  !*** ./src/app/services/equipment-reservations/map-equipment/map-equipment.page.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".map {\n  width: 100%;\n}\n\n#mapwize {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21hcC1lcXVpcG1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUNFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRUoiLCJmaWxlIjoibWFwLWVxdWlwbWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwe1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICNtYXB3aXplIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH0iXX0= */");

/***/ }),

/***/ "ABKh":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/equipment-reservations/map-equipment/map-equipment.page.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"map\">\n  <div id=\"mapwize\"></div>\n</div>\n");

/***/ }),

/***/ "R5BS":
/*!*************************************************************************************!*\
  !*** ./src/app/services/equipment-reservations/map-equipment/map-equipment.page.ts ***!
  \*************************************************************************************/
/*! exports provided: MapEquipmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapEquipmentPage", function() { return MapEquipmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_map_equipment_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./map-equipment.page.html */ "ABKh");
/* harmony import */ var _map_equipment_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-equipment.page.scss */ "/Mh0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _equipment_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../equipment-service.service */ "snl9");
/* harmony import */ var mapwize_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mapwize-ui */ "CTer");
/* harmony import */ var mapwize_ui__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mapwize_ui__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_mocks_equipments_mocks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/mocks/equipments.mocks */ "k0MC");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _general_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../general-functions */ "EWUx");
var MapEquipmentPage_1;










let MapEquipmentPage = MapEquipmentPage_1 = class MapEquipmentPage {
    constructor(equipmentsService, activatedRoute, router, htmlElement, navController, generalFunctions) {
        this.equipmentsService = equipmentsService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.htmlElement = htmlElement;
        this.navController = navController;
        this.generalFunctions = generalFunctions;
        this.equipements = [];
        this.reservations = [];
        this.mapWizeRoomStyle = [];
    }
    mapNavigation(htmlTag) {
        htmlTag.onclick = () => {
            this.router.navigate(['/equipment-reservation'], { relativeTo: this.activatedRoute });
        };
    }
    ngOnInit() {
        this.currentDate = new Date();
        this.reservations = JSON.parse(localStorage.getItem('reservationsEquipment'));
        this.currentEquipement = {
            id: this.router.getCurrentNavigation().extras.state.id,
            mapwizeId: this.router.getCurrentNavigation().extras.state.mapwizeId,
            name: this.router.getCurrentNavigation().extras.state.name,
            status: this.router.getCurrentNavigation().extras.state.status,
            endDate: this.router.getCurrentNavigation().extras.state.endDate,
            beginDate: this.router.getCurrentNavigation().extras.state.beginDate,
        };
        this.equipements = this.equipmentsService.getAllEquipments();
        const options = {
            apiKey: '6ee4fd2b3531c7b2609c77ca74ee5add',
            centerOnVenueId: '5d8a191fb99124002d154c93',
            preferredLanguage: 'fr',
            container: 'mapwize',
            zoom: 19,
            mainColor: '#ff0000',
        };
        let placesStyles = {};
        this.equipements.map(equipement => {
            let equipementColor = '';
            let beginReservationDate = new Date(equipement.beginDate);
            let endReservationDate = new Date(equipement.endDate);
            if (equipement.id == src_mocks_equipments_mocks__WEBPACK_IMPORTED_MODULE_7__["EquipmentsMocks"].busyRoomId) {
                equipementColor = MapEquipmentPage_1.reservedColor;
            }
            else if (equipement.id == src_mocks_equipments_mocks__WEBPACK_IMPORTED_MODULE_7__["EquipmentsMocks"].occupedRoomId) {
                equipementColor = MapEquipmentPage_1.occupiedColor;
            }
            else {
                if (equipement.id == this.currentEquipement.id) {
                    if (this.currentEquipement.status === 'Libre') {
                        equipementColor = MapEquipmentPage_1.availableColor;
                    }
                    else {
                        equipementColor = MapEquipmentPage_1.reservedColor;
                    }
                }
                else if (beginReservationDate <= this.currentDate && endReservationDate > this.currentDate) {
                    equipementColor = MapEquipmentPage_1.reservedColor;
                }
                else {
                    equipementColor = MapEquipmentPage_1.availableColor;
                }
            }
            placesStyles[equipement.mapwizeId] = {
                strokeColor: equipementColor,
                strokeOpacity: 1,
                strokeWidth: 2,
                fillColor: equipementColor,
                fillOpacity: 0.7
            };
        });
        let equipementsToHide = {};
        MapEquipmentPage_1.placesToHide.map(equipementToHIde => {
            equipementsToHide[equipementToHIde] = {
                strokeColor: MapEquipmentPage_1.HideColor,
                strokeOpacity: 1,
                strokeWidth: 2,
                fillColor: MapEquipmentPage_1.HideColor,
                fillOpacity: 0.5
            };
        });
        mapwize_ui__WEBPACK_IMPORTED_MODULE_6__["map"](options).then((map) => {
            this.generalFunctions.mapCss(map, '/equipment-reservation');
            mapwize_ui__WEBPACK_IMPORTED_MODULE_6__["Api"].getPlace(this.currentEquipement.mapwizeId).then((place) => {
                const position = {
                    latitude: place.marker.latitude,
                    longitude: place.marker.longitude,
                    floor: 2,
                };
                map.setPlaceStyles(placesStyles);
                map.setPlaceStyles(equipementsToHide);
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
MapEquipmentPage.reservedColor = "#ff0000";
MapEquipmentPage.occupiedColor = "#FF8C00";
MapEquipmentPage.availableColor = "#2E8B57";
MapEquipmentPage.HideColor = "#DCDCDC";
MapEquipmentPage.placesToHide = [
    '5d8a1921618902a02a7c7045',
    '5d8a1922618902a02a7c7047',
    '5d8a1922618902a02a7c704b',
    '5d8a1922618902a02a7c7051',
    '5d8a1922618902a02a7c7055',
    '5d8a1922618902a02a7c7057',
    '60003dc82be2a300165dafc3',
    '60003f2219e6de0016bb1eea',
    '60005f243781c50016f1e778',
    '6006ac00cfdbb200169e1312',
    '5d8a1922618902a02a7c704f',
    '5d8a1922618902a02a7c704d' //COMMERCIAL
];
MapEquipmentPage.ctorParameters = () => [
    { type: _equipment_service_service__WEBPACK_IMPORTED_MODULE_5__["EquipmentServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] },
    { type: _general_functions__WEBPACK_IMPORTED_MODULE_9__["GeneralFunctions"] }
];
MapEquipmentPage = MapEquipmentPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-map-equipment',
        template: _raw_loader_map_equipment_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_map_equipment_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MapEquipmentPage);



/***/ }),

/***/ "bdXs":
/*!***************************************************************************************!*\
  !*** ./src/app/services/equipment-reservations/map-equipment/map-equipment.module.ts ***!
  \***************************************************************************************/
/*! exports provided: MapEquipmentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapEquipmentPageModule", function() { return MapEquipmentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _map_equipment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map-equipment-routing.module */ "nNFg");
/* harmony import */ var _map_equipment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map-equipment.page */ "R5BS");







let MapEquipmentPageModule = class MapEquipmentPageModule {
};
MapEquipmentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _map_equipment_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapEquipmentPageRoutingModule"]
        ],
        declarations: [_map_equipment_page__WEBPACK_IMPORTED_MODULE_6__["MapEquipmentPage"]]
    })
], MapEquipmentPageModule);



/***/ }),

/***/ "nNFg":
/*!***********************************************************************************************!*\
  !*** ./src/app/services/equipment-reservations/map-equipment/map-equipment-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: MapEquipmentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapEquipmentPageRoutingModule", function() { return MapEquipmentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _map_equipment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map-equipment.page */ "R5BS");




const routes = [
    {
        path: '',
        component: _map_equipment_page__WEBPACK_IMPORTED_MODULE_3__["MapEquipmentPage"]
    }
];
let MapEquipmentPageRoutingModule = class MapEquipmentPageRoutingModule {
};
MapEquipmentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MapEquipmentPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=services-equipment-reservations-map-equipment-map-equipment-module.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-parking-map-parking-map-parking-module"],{

/***/ "7Rcf":
/*!****************************************************************************!*\
  !*** ./src/app/services/parking/map-parking/map-parking-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: MapParkingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapParkingPageRoutingModule", function() { return MapParkingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _map_parking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map-parking.page */ "Pys6");




const routes = [
    {
        path: '',
        component: _map_parking_page__WEBPACK_IMPORTED_MODULE_3__["MapParkingPage"]
    }
];
let MapParkingPageRoutingModule = class MapParkingPageRoutingModule {
};
MapParkingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MapParkingPageRoutingModule);



/***/ }),

/***/ "FEpX":
/*!********************************************************************!*\
  !*** ./src/app/services/parking/map-parking/map-parking.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".map {\n  width: 100%;\n}\n\n#mapwize {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21hcC1wYXJraW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVKIiwiZmlsZSI6Im1hcC1wYXJraW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgI21hcHdpemUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfSJdfQ== */");

/***/ }),

/***/ "LUol":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/parking/map-parking/map-parking.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"map\">\n  <div id=\"mapwize\"></div>\n</div>\n");

/***/ }),

/***/ "Pys6":
/*!******************************************************************!*\
  !*** ./src/app/services/parking/map-parking/map-parking.page.ts ***!
  \******************************************************************/
/*! exports provided: MapParkingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapParkingPage", function() { return MapParkingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_map_parking_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./map-parking.page.html */ "LUol");
/* harmony import */ var _map_parking_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-parking.page.scss */ "FEpX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _gestion_parking_parking_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../gestion-parking/parking-service.service */ "Fslh");
/* harmony import */ var mapwize_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mapwize-ui */ "CTer");
/* harmony import */ var mapwize_ui__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mapwize_ui__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_mocks_parking_mocks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/mocks/parking.mocks */ "PZDh");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _general_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../general-functions */ "EWUx");
var MapParkingPage_1;










let MapParkingPage = MapParkingPage_1 = class MapParkingPage {
    constructor(parkingService, activatedRoute, router, htmlElement, navController, generalFunctions) {
        this.parkingService = parkingService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.htmlElement = htmlElement;
        this.navController = navController;
        this.generalFunctions = generalFunctions;
        this.parkings = [];
        this.reservations = [];
        this.mapWizeRoomStyle = [];
        this.isUniverseOpened = false;
    }
    mapNavigation(htmlTag) {
        htmlTag.onclick = () => {
            // this.router.navigate(['/gestion-parking'],{relativeTo : this.activatedRoute});
            this.navController.navigateForward('/gestion-parking');
            // this.navController.navigateRoot('/gestion-parking');
        };
    }
    ngOnInit() {
        this.currentDate = new Date();
        this.reservations = JSON.parse(localStorage.getItem('ParkingReservations'));
        this.currentParkingPlace = {
            id: this.router.getCurrentNavigation().extras.state.id,
            mapwizeId: this.router.getCurrentNavigation().extras.state.mapwizeId,
            name: this.router.getCurrentNavigation().extras.state.name,
            status: this.router.getCurrentNavigation().extras.state.status,
            dateFin: this.router.getCurrentNavigation().extras.state.dateFin,
            dateDebut: this.router.getCurrentNavigation().extras.state.dateDebut,
        };
        this.parkings = this.parkingService.getParkings();
        let placesStyles = {};
        this.parkings.map(parkingPlace => {
            let parkingPlaceColor = '';
            let beginReservationDate = new Date(parkingPlace.dateDebut);
            let endReservationDate = new Date(parkingPlace.dateFin);
            if (parkingPlace.id == src_mocks_parking_mocks__WEBPACK_IMPORTED_MODULE_7__["ParkingMocks"].busyRoomId) {
                parkingPlaceColor = MapParkingPage_1.reservedColor;
            }
            else if (parkingPlace.id == src_mocks_parking_mocks__WEBPACK_IMPORTED_MODULE_7__["ParkingMocks"].occupedRoomId) {
                parkingPlaceColor = MapParkingPage_1.reservedColor;
            }
            else {
                if (parkingPlace.id == this.currentParkingPlace.id) {
                    if (this.currentParkingPlace.status === 'Libre') {
                        parkingPlaceColor = MapParkingPage_1.availableColor;
                    }
                    else {
                        parkingPlaceColor = MapParkingPage_1.reservedColor;
                    }
                }
                else if (beginReservationDate <= this.currentDate && endReservationDate > this.currentDate) {
                    parkingPlaceColor = MapParkingPage_1.reservedColor;
                }
                else {
                    parkingPlaceColor = MapParkingPage_1.availableColor;
                }
            }
            placesStyles[parkingPlace.mapwizeId] = {
                strokeColor: parkingPlaceColor,
                strokeOpacity: 1,
                strokeWidth: 2,
                fillColor: parkingPlaceColor,
                fillOpacity: 0.7
            };
        });
        let parkingToHide = {};
        MapParkingPage_1.placesToHide.map(parkingPlaceToHIde => {
            parkingToHide[parkingPlaceToHIde] = {
                strokeColor: MapParkingPage_1.HideColor,
                strokeOpacity: 1,
                strokeWidth: 2,
                fillColor: MapParkingPage_1.HideColor,
                fillOpacity: 0.5
            };
        });
        const options = {
            apiKey: '6ee4fd2b3531c7b2609c77ca74ee5add',
            centerOnVenueId: '5d8a191fb99124002d154c93',
            preferredLanguage: 'fr',
            container: 'mapwize',
            zoom: 19,
            mainColor: '#ff0000',
        };
        mapwize_ui__WEBPACK_IMPORTED_MODULE_6__["map"](options).then((map) => {
            this.generalFunctions.mapCss(map, '/gestion-parking');
            mapwize_ui__WEBPACK_IMPORTED_MODULE_6__["Api"].getPlace(this.currentParkingPlace.mapwizeId).then((place) => {
                const position = {
                    latitude: place.marker.latitude,
                    longitude: place.marker.longitude,
                    floor: 2,
                };
                map.setPlaceStyles(placesStyles);
                map.setPlaceStyles(parkingToHide);
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
MapParkingPage.reservedColor = "#ff0000";
MapParkingPage.occupiedColor = "#FF8C00";
MapParkingPage.availableColor = "#2E8B57";
MapParkingPage.HideColor = "#DCDCDC";
MapParkingPage.placesToHide = [
    '5d8a1921618902a02a7c7043',
    '5d8a1921618902a02a7c7045',
    '5d8a1922618902a02a7c7047',
    '5d8a1922618902a02a7c7053',
    '5d8a1922618902a02a7c704f',
    '5d8a1922618902a02a7c704d',
    '5d8a1922618902a02a7c7049',
    '5d8a1922618902a02a7c704b',
    '5d8a1922618902a02a7c7051',
    '5d8a1922618902a02a7c7055',
    '60003dc82be2a300165dafc3',
    '60003f2219e6de0016bb1eea',
];
MapParkingPage.ctorParameters = () => [
    { type: _gestion_parking_parking_service_service__WEBPACK_IMPORTED_MODULE_5__["ParkingServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] },
    { type: _general_functions__WEBPACK_IMPORTED_MODULE_9__["GeneralFunctions"] }
];
MapParkingPage = MapParkingPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-map-parking',
        template: _raw_loader_map_parking_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_map_parking_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MapParkingPage);



/***/ }),

/***/ "VI50":
/*!********************************************************************!*\
  !*** ./src/app/services/parking/map-parking/map-parking.module.ts ***!
  \********************************************************************/
/*! exports provided: MapParkingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapParkingPageModule", function() { return MapParkingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _map_parking_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map-parking-routing.module */ "7Rcf");
/* harmony import */ var _map_parking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map-parking.page */ "Pys6");







let MapParkingPageModule = class MapParkingPageModule {
};
MapParkingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _map_parking_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapParkingPageRoutingModule"]
        ],
        declarations: [_map_parking_page__WEBPACK_IMPORTED_MODULE_6__["MapParkingPage"]]
    })
], MapParkingPageModule);



/***/ })

}]);
//# sourceMappingURL=services-parking-map-parking-map-parking-module.js.map
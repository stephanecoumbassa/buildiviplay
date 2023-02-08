(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-reservation-map-reservation-map-reservation-module"],{

/***/ "8jOq":
/*!********************************************************************************!*\
  !*** ./src/app/services/reservation/map-reservation/map-reservation.module.ts ***!
  \********************************************************************************/
/*! exports provided: MapReservationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapReservationPageModule", function() { return MapReservationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _map_reservation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map-reservation-routing.module */ "yprN");
/* harmony import */ var _map_reservation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map-reservation.page */ "cha1");







let MapReservationPageModule = class MapReservationPageModule {
};
MapReservationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _map_reservation_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapReservationPageRoutingModule"]
        ],
        declarations: [_map_reservation_page__WEBPACK_IMPORTED_MODULE_6__["MapReservationPage"]]
    })
], MapReservationPageModule);



/***/ }),

/***/ "HMnn":
/*!********************************************************************************!*\
  !*** ./src/app/services/reservation/map-reservation/map-reservation.page.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".map {\n  width: 100%;\n}\n\n#mapwize {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL21hcC1yZXNlcnZhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFSiIsImZpbGUiOiJtYXAtcmVzZXJ2YXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAjbWFwd2l6ZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9Il19 */");

/***/ }),

/***/ "cha1":
/*!******************************************************************************!*\
  !*** ./src/app/services/reservation/map-reservation/map-reservation.page.ts ***!
  \******************************************************************************/
/*! exports provided: MapReservationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapReservationPage", function() { return MapReservationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_map_reservation_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./map-reservation.page.html */ "z7vx");
/* harmony import */ var _map_reservation_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-reservation.page.scss */ "HMnn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var mapwize_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mapwize-ui */ "CTer");
/* harmony import */ var mapwize_ui__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mapwize_ui__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_mocks_room_mocks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/mocks/room.mocks */ "gBsL");
/* harmony import */ var _general_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../general-functions */ "EWUx");
/* harmony import */ var _room_reservation_room_reservation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../room-reservation/room-reservation.service */ "hfc5");
var MapReservationPage_1;










let MapReservationPage = MapReservationPage_1 = class MapReservationPage {
    constructor(roomReservationService, activatedRoute, router, htmlElement, navController, generalFunctions) {
        this.roomReservationService = roomReservationService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.htmlElement = htmlElement;
        this.navController = navController;
        this.generalFunctions = generalFunctions;
        this.rooms = [];
        this.reservations = [];
        this.mapWizeRoomStyle = [];
    }
    mapNavigation(htmlTag) {
        htmlTag.onclick = () => {
            this.router.navigate(['/room-reservation'], { relativeTo: this.activatedRoute });
        };
    }
    ngOnInit() {
        this.currentDate = new Date();
        this.reservations = JSON.parse(localStorage.getItem('reservations'));
        this.currentRoom = {
            id: this.router.getCurrentNavigation().extras.state.id,
            mapwizeId: this.router.getCurrentNavigation().extras.state.mapwizeId,
            name: this.router.getCurrentNavigation().extras.state.name,
            status: this.router.getCurrentNavigation().extras.state.status,
            dateFin: this.router.getCurrentNavigation().extras.state.dateFin,
            dateDebut: this.router.getCurrentNavigation().extras.state.dateDebut,
        };
        console.log(this.currentRoom);
        this.rooms = this.roomReservationService.getrooms();
        const options = {
            apiKey: '6ee4fd2b3531c7b2609c77ca74ee5add',
            centerOnVenueId: '5d8a191fb99124002d154c93',
            preferredLanguage: 'fr',
            container: 'mapwize',
            zoom: 19,
            mainColor: '#ff0000',
        };
        let placesStyles = {};
        this.rooms.map(room => {
            let roomColor = '';
            let beginReservationDate = new Date(room.dateDebut);
            let endReservationDate = new Date(room.dateFin);
            if (room.id == src_mocks_room_mocks__WEBPACK_IMPORTED_MODULE_7__["RoomMocks"].busyRoomId) {
                roomColor = MapReservationPage_1.reservedColor;
            }
            else if (room.id == src_mocks_room_mocks__WEBPACK_IMPORTED_MODULE_7__["RoomMocks"].occupedRoomId) {
                roomColor = MapReservationPage_1.occupiedColor;
            }
            else {
                if (room.id == this.currentRoom.id) {
                    if (this.currentRoom.status === 'Libre') {
                        roomColor = MapReservationPage_1.availableColor;
                    }
                    else {
                        roomColor = MapReservationPage_1.reservedColor;
                    }
                }
                else if (beginReservationDate <= this.currentDate && endReservationDate > this.currentDate) {
                    roomColor = MapReservationPage_1.reservedColor;
                }
                else {
                    roomColor = MapReservationPage_1.availableColor;
                }
            }
            placesStyles[room.mapwizeId] = {
                strokeColor: roomColor,
                strokeOpacity: 1,
                strokeWidth: 2,
                fillColor: roomColor,
                fillOpacity: 0.7
            };
        });
        let roomsToHide = {};
        MapReservationPage_1.placesToHide.map(roomToHIde => {
            roomsToHide[roomToHIde] = {
                strokeColor: MapReservationPage_1.HideColor,
                strokeOpacity: 1,
                strokeWidth: 2,
                fillColor: MapReservationPage_1.HideColor,
                fillOpacity: 0.5
            };
        });
        mapwize_ui__WEBPACK_IMPORTED_MODULE_6__["map"](options).then((map) => {
            this.generalFunctions.mapCss(map, '/room-reservation');
            mapwize_ui__WEBPACK_IMPORTED_MODULE_6__["Api"].getPlace(this.currentRoom.mapwizeId).then((place) => {
                const position = {
                    latitude: place.marker.latitude,
                    longitude: place.marker.longitude,
                    floor: 2,
                };
                map.setPlaceStyles(placesStyles);
                map.setPlaceStyles(roomsToHide);
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
MapReservationPage.reservedColor = "#ff0000";
MapReservationPage.occupiedColor = "#FF8C00";
MapReservationPage.availableColor = "#2E8B57";
MapReservationPage.HideColor = "#DCDCDC";
MapReservationPage.placesToHide = [
    '5d8a1921618902a02a7c7043',
    '5d8a1921618902a02a7c7045',
    '5d8a1922618902a02a7c7047',
    '5d8a1922618902a02a7c7049',
    '5d8a1922618902a02a7c704b',
    '5d8a1922618902a02a7c7051',
    '5d8a1922618902a02a7c7055',
    '5d8a1922618902a02a7c7057',
    '60003dc82be2a300165dafc3',
    '60003f2219e6de0016bb1eea',
    '60005f243781c50016f1e778',
    '6006ac00cfdbb200169e1312' //ESPACE VERT E2
];
MapReservationPage.ctorParameters = () => [
    { type: _room_reservation_room_reservation_service__WEBPACK_IMPORTED_MODULE_9__["RoomReservationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _general_functions__WEBPACK_IMPORTED_MODULE_8__["GeneralFunctions"] }
];
MapReservationPage = MapReservationPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-map-reservation',
        template: _raw_loader_map_reservation_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_map_reservation_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MapReservationPage);



/***/ }),

/***/ "yprN":
/*!****************************************************************************************!*\
  !*** ./src/app/services/reservation/map-reservation/map-reservation-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: MapReservationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapReservationPageRoutingModule", function() { return MapReservationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _map_reservation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map-reservation.page */ "cha1");




const routes = [
    {
        path: '',
        component: _map_reservation_page__WEBPACK_IMPORTED_MODULE_3__["MapReservationPage"]
    }
];
let MapReservationPageRoutingModule = class MapReservationPageRoutingModule {
};
MapReservationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MapReservationPageRoutingModule);



/***/ }),

/***/ "z7vx":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/reservation/map-reservation/map-reservation.page.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"map\">\n    <div id=\"mapwize\"></div>\n  </div>\n  ");

/***/ })

}]);
//# sourceMappingURL=services-reservation-map-reservation-map-reservation-module.js.map
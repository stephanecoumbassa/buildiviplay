(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-security-incendie-security-incendie-module"],{

/***/ "EQGq":
/*!*****************************************************************************!*\
  !*** ./src/app/services/security-incendie/security-incendie.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".map {\n  width: 100%;\n}\n\n#mapwize {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlY3VyaXR5LWluY2VuZGllLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRUYiLCJmaWxlIjoic2VjdXJpdHktaW5jZW5kaWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwe1xuICB3aWR0aDogMTAwJTtcbn1cbiNtYXB3aXplIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "b3Zc":
/*!********************************************************************************!*\
  !*** ./src/app/services/security-incendie/security-incendie-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: SecurityIncendieRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityIncendieRoutingModule", function() { return SecurityIncendieRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _security_incendie_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./security-incendie.component */ "ha2M");




const routes = [
    {
        path: '',
        component: _security_incendie_component__WEBPACK_IMPORTED_MODULE_3__["SecurityIncendieComponent"]
    }
];
let SecurityIncendieRoutingModule = class SecurityIncendieRoutingModule {
};
SecurityIncendieRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SecurityIncendieRoutingModule);



/***/ }),

/***/ "ha2M":
/*!***************************************************************************!*\
  !*** ./src/app/services/security-incendie/security-incendie.component.ts ***!
  \***************************************************************************/
/*! exports provided: SecurityIncendieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityIncendieComponent", function() { return SecurityIncendieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_security_incendie_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./security-incendie.component.html */ "nxHg");
/* harmony import */ var _security_incendie_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./security-incendie.component.scss */ "EQGq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_models_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/models/notification */ "98H+");
/* harmony import */ var _store_actions_notification_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/notification-action */ "qgvm");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var mapwize_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mapwize-ui */ "CTer");
/* harmony import */ var mapwize_ui__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mapwize_ui__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _general_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../general-functions */ "EWUx");










let SecurityIncendieComponent = class SecurityIncendieComponent {
    constructor(store, alertController, navController, generalFunctions) {
        this.store = store;
        this.alertController = alertController;
        this.navController = navController;
        this.generalFunctions = generalFunctions;
        this.notification = {
            message: 'Alerte Incendie'
        };
    }
    ngOnInit() {
        this.addNotification(this.notification);
        const options = {
            apiKey: '6ee4fd2b3531c7b2609c77ca74ee5add',
            centerOnVenueId: '5d8a191fb99124002d154c93',
            preferredLanguage: 'fr',
            container: 'mapwize',
            mainColor: '#ff0000',
        };
        mapwize_ui__WEBPACK_IMPORTED_MODULE_8__["map"](options).then((map) => {
            const mapwizeMap = map;
            this.generalFunctions.mapCss(map, '/tabs/tab1');
            this.direction(mapwizeMap);
        });
    }
    addNotification(currentRoom) {
        const newNotification = new _store_models_notification__WEBPACK_IMPORTED_MODULE_5__["Notification"]();
        newNotification.notification = currentRoom;
        this.store.dispatch(new _store_actions_notification_action__WEBPACK_IMPORTED_MODULE_6__["TodoAdd"](newNotification));
        this.presentAlert();
    }
    direction(map) {
        return mapwize_ui__WEBPACK_IMPORTED_MODULE_8__["Api"].getDirection({
            from: {
                placeId: '5d8a1922618902a02a7c7053',
                venueId: '5d8a191fb99124002d154c93'
            },
            to: {
                placeId: '600012652be2a300165dae3e',
                venueId: '5d8a191fb99124002d154c93'
            },
        }).then((direction) => {
            map.setDirection(direction);
        });
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Alerte Incendie',
                subHeader: 'Veuillez ne pas paniquer',
                message: 'Suivez les indications en respectant le marquage de sécurité.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
SecurityIncendieComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _general_functions__WEBPACK_IMPORTED_MODULE_9__["GeneralFunctions"] }
];
SecurityIncendieComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-security-incendie',
        template: _raw_loader_security_incendie_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_security_incendie_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SecurityIncendieComponent);



/***/ }),

/***/ "mbC/":
/*!************************************************************************!*\
  !*** ./src/app/services/security-incendie/security-incendie.module.ts ***!
  \************************************************************************/
/*! exports provided: SecurityIncendieModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityIncendieModule", function() { return SecurityIncendieModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _security_incendie_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./security-incendie.component */ "ha2M");
/* harmony import */ var _security_incendie_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./security-incendie-routing.module */ "b3Zc");







let SecurityIncendieModule = class SecurityIncendieModule {
};
SecurityIncendieModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _security_incendie_routing_module__WEBPACK_IMPORTED_MODULE_6__["SecurityIncendieRoutingModule"]
        ],
        declarations: [_security_incendie_component__WEBPACK_IMPORTED_MODULE_5__["SecurityIncendieComponent"]]
    })
], SecurityIncendieModule);



/***/ }),

/***/ "nxHg":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/security-incendie/security-incendie.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"map\">\n  <div id=\"mapwize\"></div>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=services-security-incendie-security-incendie-module.js.map
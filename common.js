(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "0hzk":
/*!*****************************************!*\
  !*** ./src/mocks/restauration.mocks.ts ***!
  \*****************************************/
/*! exports provided: RestaurantMocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantMocks", function() { return RestaurantMocks; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let RestaurantMocks = class RestaurantMocks {
    constructor() {
        this.products = [
            {
                id: '1',
                name: 'Boissons chaudes',
                icon: 'cafe',
                products: [
                    {
                        id: '1',
                        name: 'Café',
                        icon: 'cafe',
                        price: 4.30,
                        description: 'Profitez d\'une expérience café authentique avec une large gamme de grand crus ayant chacun leur propre caractère et arôme.',
                    },
                    {
                        id: '2',
                        name: 'Cappuccino',
                        icon: 'cafe',
                        price: 6.20,
                        description: 'Maîtrisez l\'art du Cappuccino et succombez à la gourmandise ultime du mariage entre l\'onctuosité de la mousse de lait et le caractère des grands cafés.',
                    },
                    {
                        id: '3',
                        name: 'Chocolat',
                        icon: 'color-fill',
                        price: 5.00,
                        description: 'Notre caco intense, offre une dose de nostalgie rassérénante et exaltante. Délicieuse en fin de repas, à la place d\'un café.',
                    },
                ]
            },
            {
                id: '2',
                name: 'Restaurant d\'entreprises',
                icon: 'restaurant',
                products: []
            },
            {
                id: '3',
                name: 'Cafétéria',
                icon: 'fast-food',
                products: []
            },
        ];
    }
    getAll() {
        return this.products;
    }
};
RestaurantMocks = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RestaurantMocks);



/***/ }),

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "8cKz":
/*!***************************************************************************!*\
  !*** ./src/app/services/plan-locaux/plan-service/plan-service.service.ts ***!
  \***************************************************************************/
/*! exports provided: PlanServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanServiceService", function() { return PlanServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let PlanServiceService = class PlanServiceService {
    // long = navigator.geolocation.getCurrentPosition(resp => resp.coords.latitude );
    // lat = navigator.geolocation.getCurrentPosition(resp => resp.coords.longitude );
    constructor(http) {
        this.http = http;
    }
    googleInit(type, lat, long) {
        console.log('my position', 'lat:', lat, 'long:', long);
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set("location", `${lat},${long}`) //'48.8602973,2.3436415'
            .set("radius", '500')
            .set("type", type)
            .set("lang", 'fr')
            .set("key", 'AIzaSyCOX1vdDTHBxEk2hd0RccIhVzBrLPrUKkA');
        return this.http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?', { params });
    }
};
PlanServiceService.API_BON_PLAN = 'AIzaSyCOX1vdDTHBxEk2hd0RccIhVzBrLPrUKkA';
PlanServiceService.url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';
PlanServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
PlanServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], PlanServiceService);



/***/ }),

/***/ "Fslh":
/*!*****************************************************************************!*\
  !*** ./src/app/services/parking/gestion-parking/parking-service.service.ts ***!
  \*****************************************************************************/
/*! exports provided: ParkingServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingServiceService", function() { return ParkingServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_mocks_parking_mocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/mocks/parking.mocks */ "PZDh");



let ParkingServiceService = class ParkingServiceService {
    constructor(Parking) {
        this.Parking = Parking;
    }
    getParkings() {
        return this.Parking.getAll();
    }
};
ParkingServiceService.ctorParameters = () => [
    { type: src_mocks_parking_mocks__WEBPACK_IMPORTED_MODULE_2__["ParkingMocks"] }
];
ParkingServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ParkingServiceService);



/***/ }),

/***/ "HbjW":
/*!***************************************************************!*\
  !*** ./src/app/services/restauration/restauration.service.ts ***!
  \***************************************************************/
/*! exports provided: RestaurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurationService", function() { return RestaurationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_mocks_restauration_mocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/mocks/restauration.mocks */ "0hzk");




let RestaurationService = class RestaurationService {
    constructor(RestaurantMocks, http) {
        this.RestaurantMocks = RestaurantMocks;
        this.http = http;
        this.urlApi = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=48.8588443,2.2943506&radius=500&type=restaurant&key=AIzaSyB8EAwtn4Xo1mWWyQmmlPyOYvHre6NeRgE";
    }
    getRestaurantProducts() {
        return this.RestaurantMocks.getAll();
    }
    getRestaurants() {
        return this.http.get(this.urlApi, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Accept': 'application/xml'
            }),
            responseType: 'text'
        });
    }
};
RestaurationService.ctorParameters = () => [
    { type: src_mocks_restauration_mocks__WEBPACK_IMPORTED_MODULE_3__["RestaurantMocks"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
RestaurationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], RestaurationService);



/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "WwN9");
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.scss */ "yZN6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() { }
};
FooterComponent.ctorParameters = () => [];
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FooterComponent);



/***/ }),

/***/ "MUbv":
/*!**********************************!*\
  !*** ./src/mocks/cours.mocks.ts ***!
  \**********************************/
/*! exports provided: CoursMocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursMocks", function() { return CoursMocks; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let CoursMocks = class CoursMocks {
    constructor() {
        this.espaces = [
            {
                id: 1,
                name: 'Body Barre',
                description: 'Cours de renforcement général du corp à l\'aide du barre.',
                hours: 'De 17h30 à 18h15',
                icon: 'people',
            },
            {
                id: 2,
                name: 'E-Cross Training',
                description: 'Circuit training qui fait appel à toutes les qualités physiques.',
                hours: 'De 18:00 à 18:45',
                icon: 'people',
            },
            {
                id: 3,
                name: 'Upper Body',
                description: 'Cours mobilisant l\'ensemble des muscles du haut du corps.',
                hours: 'De 18:15 à 18:45',
                icon: 'people',
            },
            {
                id: 4,
                name: 'E-Body Zen',
                description: 'Gymnastique douce basée sur des étirements des fibres musculaires.',
                hours: 'De 19:00 à 19:45',
                icon: 'people',
            },
        ];
        this.espacesOtherDay = [
            {
                id: 1,
                name: 'Cross Training',
                description: 'Cours de renforcement général du corp à l\'aide du barre.',
                hours: 'De 17h30 à 18h15',
                icon: 'people',
            },
            {
                id: 2,
                name: 'E-pilates',
                description: 'Circuit training qui fait appel à toutes les qualités physiques.',
                hours: 'De 18:00 à 18:45',
                icon: 'people',
            },
            {
                id: 3,
                name: '100% Abdos',
                description: 'Cours mobilisant l\'ensemble des muscles du haut du corps.',
                hours: 'De 18:15 à 18:45',
                icon: 'people',
            },
            {
                id: 4,
                name: 'Cuisses Abdos',
                description: 'Gymnastique douce basée sur des étirements des fibres musculaires.',
                hours: 'De 19:00 à 19:45',
                icon: 'people',
            },
        ];
    }
    getAll() {
        return this.espaces;
    }
    getAllOther() {
        return this.espacesOtherDay;
    }
};
CoursMocks = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CoursMocks);



/***/ }),

/***/ "PZDh":
/*!************************************!*\
  !*** ./src/mocks/parking.mocks.ts ***!
  \************************************/
/*! exports provided: ParkingMocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingMocks", function() { return ParkingMocks; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let ParkingMocks = class ParkingMocks {
    constructor() {
        this.parking = [
            {
                id: 1,
                technicalId: 1,
                reservationId: 1,
                name: 'Parking 1',
                mapwizeId: '5d8a1922618902a02a7c7057',
                floor: -1,
                site: 'site.com',
                building: 'iviflo',
                status: 'Libre',
                dateFin: '',
                dateDebut: '',
                personne: 1,
            },
            {
                id: 2,
                technicalId: 2,
                reservationId: 2,
                name: 'Parking 2',
                mapwizeId: '60005f243781c50016f1e778',
                floor: -1,
                site: 'site.com',
                building: 'iviflo',
                status: 'Réservé',
                dateFin: '',
                dateDebut: '',
                personne: 1,
            },
            {
                id: 3,
                technicalId: 3,
                reservationId: 3,
                name: 'Parking 3',
                mapwizeId: '6006ac00cfdbb200169e1312',
                floor: -1,
                site: 'site.com',
                building: 'iviflo',
                status: 'Réservé',
                dateFin: '',
                dateDebut: '',
                personne: 1,
            },
        ];
    }
    getAll() {
        return this.parking;
    }
};
ParkingMocks.busyRoomId = '2';
ParkingMocks.occupedRoomId = '3';
ParkingMocks = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ParkingMocks);



/***/ }),

/***/ "QQAA":
/*!******************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.ts ***!
  \******************************************************************/
/*! exports provided: ExploreContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreContainerComponent", function() { return ExploreContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_explore_container_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./explore-container.component.html */ "m1kx");
/* harmony import */ var _explore_container_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./explore-container.component.scss */ "huSS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ExploreContainerComponent = class ExploreContainerComponent {
    constructor() { }
    ngOnInit() { }
};
ExploreContainerComponent.ctorParameters = () => [];
ExploreContainerComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ExploreContainerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-explore-container',
        template: _raw_loader_explore_container_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_explore_container_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ExploreContainerComponent);



/***/ }),

/***/ "WwN9":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs slot=\"bottom\" id=\"tab_bar\">\n  <ion-tab-bar >\n    <ion-tab-button tab=\"tab1\" ><ion-icon name=\"reader-outline\"></ion-icon></ion-tab-button>\n    <ion-tab-button tab=\"tab2\"><ion-icon name=\"time-outline\"></ion-icon></ion-tab-button>\n    <ion-tab-button tab=\"map\"><ion-icon name=\"map-outline\"></ion-icon></ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n\n\n");

/***/ }),

/***/ "Zcj0":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ "KF81");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "hlFH":
/*!*********************************!*\
  !*** ./src/mocks/plan.mocks.ts ***!
  \*********************************/
/*! exports provided: PlansMocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlansMocks", function() { return PlansMocks; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let PlansMocks = class PlansMocks {
    constructor() {
        this.plans = [
            {
                id: "157942-8972-87469-9824",
                name: "atm",
                label: "Atm",
                icon: "cash"
            },
            {
                id: "157942-8972-87469-9824",
                name: "bank",
                label: "Banque",
                icon: "wallet"
            },
            {
                id: "157942-8972-87469-9824",
                name: "bar",
                label: "Bar",
                icon: "beer"
            },
            {
                id: "157942-8972-87469-9824",
                name: "library",
                label: "Bibliothèque",
                icon: "book"
            },
            {
                id: "157942-8972-87469-9824",
                name: "cafe",
                label: "Café",
                icon: "cafe"
            },
            {
                id: "157942-8972-87469-9824",
                name: "doctor",
                label: "Docteur",
                icon: "medkit"
            },
            {
                id: "157942-8972-87469-9824",
                name: "gym",
                label: "Gymnase",
                icon: "barbell"
            },
            {
                id: "157942-8972-87469-9824",
                name: "lodging",
                label: "Hébergement",
                icon: "bed"
            },
            {
                id: "157942-8972-87469-9824",
                name: "hospital",
                label: "Hôpital",
                icon: "fitness"
            },
            {
                id: "157942-8972-87469-9824",
                name: "park",
                label: "Parc",
                icon: "leaf"
            },
            {
                id: "157942-8972-87469-9824",
                name: "parking",
                label: "Parking",
                icon: "car-sport"
            },
            {
                id: "157942-8972-87469-9824",
                name: "pharmacy",
                label: "Pharmacie",
                icon: "bandage"
            },
            {
                id: "157942-8972-87469-9824",
                name: "restaurant",
                label: "Restaurant",
                icon: "fast-food"
            },
            {
                id: "157942-8972-87469-9824",
                name: "bus_station",
                label: "Station de bus",
                icon: "bus"
            },
            {
                id: "157942-8972-87469-9824",
                name: "subway_station",
                label: "Station de métro",
                icon: "subway"
            },
            {
                id: "157942-8972-87469-9824",
                name: "train_station",
                label: "Station de train",
                icon: "train"
            },
            {
                id: "157942-8972-87469-9824",
                name: "supermarket",
                label: "Supermarché",
                icon: "cart"
            }
        ];
    }
    getPLans() {
        return this.plans;
    }
};
PlansMocks = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PlansMocks);



/***/ }),

/***/ "huSS":
/*!********************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 14px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2V4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "k0MC":
/*!***************************************!*\
  !*** ./src/mocks/equipments.mocks.ts ***!
  \***************************************/
/*! exports provided: EquipmentsMocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentsMocks", function() { return EquipmentsMocks; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let EquipmentsMocks = class EquipmentsMocks {
    constructor() {
        this.equipments = [
            {
                id: 1,
                name: 'Poste B32 ',
                mapwizeId: '5d8a1922618902a02a7c7049',
                beginDate: '',
                endDate: '',
                status: 'Libre'
            },
            {
                id: 2,
                name: 'Écran mobile',
                mapwizeId: '5d8a1921618902a02a7c7043',
                beginDate: '',
                endDate: '',
                status: 'Réservé'
            },
            {
                id: 3,
                name: 'Rétroprojecteur',
                mapwizeId: '5d8a1922618902a02a7c7053',
                beginDate: '',
                endDate: '',
                status: 'Occupé'
            },
        ];
        this.allEquipments = [
            {
                id: 1,
                name: 'Poste B32 ',
                mapwizeId: '5d8a1922618902a02a7c7049',
                beginDate: '',
                endDate: '',
                status: 'Libre'
            },
            {
                id: 2,
                name: 'Écran mobile',
                mapwizeId: '5d8a1921618902a02a7c7043',
                beginDate: '',
                endDate: '',
                status: 'Réservé'
            },
            {
                id: 3,
                name: 'Rétroprojecteur',
                mapwizeId: '5d8a1922618902a02a7c7053',
                beginDate: '',
                endDate: '',
                status: 'Occupé'
            },
            {
                id: 4,
                name: 'État du mobilier',
                mapwizeId: '5d8a1922618902a02a7c7053',
                beginDate: '',
                endDate: '',
                status: 'Occupé'
            },
            {
                id: 5,
                name: 'Poste B21',
                mapwizeId: '5d8a1922618902a02a7c7053',
                beginDate: '',
                endDate: '',
                status: 'Occupé'
            },
            {
                id: 6,
                name: 'Poste B22',
                mapwizeId: '5d8a1922618902a02a7c7053',
                beginDate: '',
                endDate: '',
                status: 'Occupé'
            },
            {
                id: 7,
                name: 'Poste de travail',
                mapwizeId: '5d8a1922618902a02a7c7053',
                beginDate: '',
                endDate: '',
                status: 'Occupé'
            },
        ];
    }
    getAllEquipments() {
        return this.allEquipments;
    }
    getEquipments() {
        return this.equipments;
    }
};
EquipmentsMocks.busyRoomId = '2';
EquipmentsMocks.occupedRoomId = '3';
EquipmentsMocks = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EquipmentsMocks);



/***/ }),

/***/ "m1kx":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"container\">\n  <strong>{{ name }}</strong>\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n</div>");

/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "qtYk":
/*!***************************************************************!*\
  !*** ./src/app/explore-container/explore-container.module.ts ***!
  \***************************************************************/
/*! exports provided: ExploreContainerComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreContainerComponentModule", function() { return ExploreContainerComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _explore_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explore-container.component */ "QQAA");






let ExploreContainerComponentModule = class ExploreContainerComponentModule {
};
ExploreContainerComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
        declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]],
        exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]]
    })
], ExploreContainerComponentModule);



/***/ }),

/***/ "snl9":
/*!******************************************************************************!*\
  !*** ./src/app/services/equipment-reservations/equipment-service.service.ts ***!
  \******************************************************************************/
/*! exports provided: EquipmentServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentServiceService", function() { return EquipmentServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_mocks_equipments_mocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/mocks/equipments.mocks */ "k0MC");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");




let EquipmentServiceService = class EquipmentServiceService {
    constructor(equipmentsMocks, store) {
        this.equipmentsMocks = equipmentsMocks;
        this.store = store;
    }
    getAllEquipments() {
        return this.equipmentsMocks.getEquipments();
    }
    getAllState() {
        return this.store.select('appReducer');
    }
};
EquipmentServiceService.ctorParameters = () => [
    { type: src_mocks_equipments_mocks__WEBPACK_IMPORTED_MODULE_2__["EquipmentsMocks"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
EquipmentServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EquipmentServiceService);



/***/ }),

/***/ "spDm":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-94e770cc.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-1457892a.js */ "W6o/");


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "vPGC":
/*!******************************************!*\
  !*** ./src/mocks/historisation.mocks.ts ***!
  \******************************************/
/*! exports provided: HistorisationMocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorisationMocks", function() { return HistorisationMocks; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let HistorisationMocks = class HistorisationMocks {
    constructor() {
        this.espaces = [
            {
                id: 1,
                name: 'Commercial',
                duree: '34min20s',
                date: '',
                heure: '09:53:04',
                reserve: '',
            },
            {
                id: 2,
                name: 'Technique',
                duree: '3min36s',
                date: '',
                heure: '10:36:33',
                reserve: '',
            },
            {
                id: 3,
                name: 'Réception',
                duree: '10s',
                date: '',
                heure: '10:23:23',
                reserve: '',
            },
            {
                id: 4,
                name: 'Cuisine',
                duree: '4min54s',
                date: '',
                heure: '11:36:00',
                reserve: '',
            },
            {
                id: 5,
                name: 'Salle de réunion',
                duree: 'En cours',
                date: '',
                heure: '12:23:11',
                reserve: '',
            },
        ];
    }
    getAll() {
        return this.espaces;
    }
};
HistorisationMocks = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HistorisationMocks);



/***/ }),

/***/ "yZN6":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-tabs {\n  position: fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGFic3tcbiAgcG9zaXRpb246IGZpeGVkO1xuICAvLyB6LWluZGV4OiAxMDtcbn1cbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=common.js.map
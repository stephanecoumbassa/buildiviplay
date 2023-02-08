(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-weather-weather-module"],{

/***/ "Q5YB":
/*!*************************************************************!*\
  !*** ./src/app/services/weather/weather/weather.service.ts ***!
  \*************************************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");

//import { HttpClient, HttpParams } from '@angular/common/http';


let WeatherService = class WeatherService {
    constructor(http) {
        this.http = http;
        this.url = 'https://api.openweathermap.org/data/2.5/weather?&units=metric';
        this.apiKey = '3c6d3826d4a217da0f05730829c10e12';
    }
    getWeatherDataByCoords(lat, lon) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('lat', lat)
            .set('lon', lon)
            .set('units', 'imperial')
            .set('appid', this.apiKey);
        return this.http.get(this.url, { params });
    }
    getWeatherDataByCityName(city) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('q', city)
            .set('units', 'imperial')
            .set('appid', this.apiKey);
        return this.http.get(this.url, { params });
    }
    parisWeather() {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('q', 'paris')
            .set('units', 'imperial')
            .set('appid', this.apiKey);
        return this.http.get(this.url, { params });
    }
};
WeatherService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
WeatherService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WeatherService);



/***/ }),

/***/ "Z+zh":
/*!****************************************************!*\
  !*** ./src/app/services/weather/weather.module.ts ***!
  \****************************************************/
/*! exports provided: WeatherPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherPageModule", function() { return WeatherPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _weather_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weather-routing.module */ "ggVh");
/* harmony import */ var _weather_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./weather.page */ "Z7Ig");
/* harmony import */ var src_app_components_header_two_header_two_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/header-two/header-two.component */ "NZJT");
/* harmony import */ var src_app_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/footer/footer.component */ "LmEr");









let WeatherPageModule = class WeatherPageModule {
};
WeatherPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _weather_routing_module__WEBPACK_IMPORTED_MODULE_5__["WeatherPageRoutingModule"]
        ],
        declarations: [_weather_page__WEBPACK_IMPORTED_MODULE_6__["WeatherPage"], src_app_components_header_two_header_two_component__WEBPACK_IMPORTED_MODULE_7__["HeaderTwoComponent"], src_app_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]]
    })
], WeatherPageModule);



/***/ }),

/***/ "Z7Ig":
/*!**************************************************!*\
  !*** ./src/app/services/weather/weather.page.ts ***!
  \**************************************************/
/*! exports provided: WeatherPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherPage", function() { return WeatherPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_weather_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./weather.page.html */ "mBgc");
/* harmony import */ var _weather_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather.page.scss */ "anFn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _weather_weather_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weather/weather.service */ "Q5YB");
/* harmony import */ var _ionic_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/core */ "1Bn7");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");








let WeatherPage = class WeatherPage {
    constructor(weatherService, alertController, http) {
        this.weatherService = weatherService;
        this.alertController = alertController;
        this.http = http;
        this.today = new Date();
        this.jstoday = '';
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.CitysArray = [];
        this.url = 'https://api.openweathermap.org/data/2.5/weather?&units=metric';
        this.openClose = false;
        this.pageInfo = { title: 'Météo', subTitle: '', };
        setInterval(() => {
            this.now = new Date().toString().split(' ')[4];
        }, 1);
    }
    introuvableAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: '',
                subHeader: '',
                message: 'Entrez une ville',
                buttons: [
                    {
                        text: 'Ok',
                    }
                ]
            });
            yield alert.present();
        });
    }
    notFoundAlert(city) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: '',
                subHeader: '',
                message: city + ' : ' + 'Ville introuvable',
                buttons: [
                    {
                        text: 'Ok',
                    }
                ]
            });
        });
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    ParisWeather() {
        this.weatherService.parisWeather().subscribe(data => {
            this.weather = data;
            switch (this.weather.weather[0].description) {
                case 'overcast clouds':
                    this.icon = "cloud-outline";
                    break;
                case 'clear sky':
                    this.icon = "sunny-outline";
                    break;
                case 'few clouds':
                    this.icon = "partly-sunny-outline";
                    break;
                case 'broken clouds':
                    this.icon = "cloud-outline";
                    break;
                case 'shower rain':
                    this.icon = "rainy-outline";
                    break;
                case 'rain':
                    this.icon = "thunderstorm-outline";
                    break;
                case 'thunderstorm':
                    this.icon = "rainy-outline";
                    break;
                case 'snow':
                    this.icon = "snow-outline";
                    break;
                case 'mist':
                    this.icon = "cloud-outline";
                    break;
                default:
                    this.icon = "partly-sunny-outline";
            }
        });
    }
    addCity(city) {
        switch (city.weather[0].description) {
            case 'overcast clouds':
                city.weather[0].description = "cloud-outline";
                break;
            case 'clear sky':
                city.weather[0].description = "sunny-outline";
                break;
            case 'few clouds':
                city.weather[0].description = "partly-sunny-outline";
                break;
            case 'broken clouds':
                city.weather[0].description = "cloud-outline";
                break;
            case 'shower rain':
                city.weather[0].description = "rainy-outline";
                break;
            case 'rain':
                city.weather[0].description = "thunderstorm-outline";
                break;
            case 'thunderstorm':
                city.weather[0].description = "rainy-outline";
                break;
            case 'snow':
                city.weather[0].description = "snow-outline";
                break;
            case 'mist':
                city.weather[0].description = "cloud-outline";
                console.log("mist");
                break;
            default:
                city.weather[0].description = "partly-sunny-outline";
        }
        this.CitysArray.push(city);
    }
    handleError(error, city) {
        if (error.status == 404) {
            this.notFoundAlert(city);
        }
    }
    getCity(city) {
        if (city.value !== '') {
            this.weatherService.getWeatherDataByCityName(city.value).subscribe(data => {
                this.searchWeather = data;
                this.addCity(this.searchWeather);
            }, (error) => this.handleError(error, city.value));
        }
        else {
            this.introuvableAlert();
        }
    }
    openBottomSheet() {
        const animation = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_5__["createAnimation"])()
            .addElement(document.querySelector(".bottomSHeet"))
            .easing("ease-in-out")
            .duration(400)
            .direction("alternate")
            .keyframes([
            { height: "0px", transform: "scale(1)", opacity: "1", },
            { height: "15rem", transform: "scale(1)", opacity: "1" },
        ]);
        document.querySelector(".bottomSHeet").style.display = "block";
        this.openClose = true;
        animation.play();
    }
    closeBottomSheet() {
        const animation = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_5__["createAnimation"])()
            .addElement(document.querySelector(".bottomSHeet"))
            .easing("ease-in-out")
            .duration(300)
            .direction("alternate")
            .keyframes([
            { height: "15rem", },
            { height: "0px", },
        ]);
        this.openClose = false;
        animation.play();
    }
    bottomShet() {
        if (this.openClose) {
            this.closeBottomSheet();
        }
        else {
            this.openBottomSheet();
        }
    }
    ngOnInit() {
        document.querySelector(".bottomSHeet").style.display = "none";
        this.ParisWeather();
    }
};
WeatherPage.ctorParameters = () => [
    { type: _weather_weather_service__WEBPACK_IMPORTED_MODULE_4__["WeatherService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
];
WeatherPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-weather',
        template: _raw_loader_weather_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_weather_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WeatherPage);



/***/ }),

/***/ "anFn":
/*!****************************************************!*\
  !*** ./src/app/services/weather/weather.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/** Ionic CSS Variables **/\n:root {\n  --color-tabs:#514e4c;\n  /** primary **/\n  --ion-color-primary: $primary;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}\n:root ion-item {\n  font-size: 14px;\n}\n@media (prefers-color-scheme: dark) {\n  /*\n   * Dark Colors\n   * -------------------------------------------\n   */\n  body {\n    --ion-color-primary: #428cff;\n    --ion-color-primary-rgb: 66,140,255;\n    --ion-color-primary-contrast: #ffffff;\n    --ion-color-primary-contrast-rgb: 255,255,255;\n    --ion-color-primary-shade: #3a7be0;\n    --ion-color-primary-tint: #5598ff;\n    --ion-color-secondary: #50c8ff;\n    --ion-color-secondary-rgb: 80,200,255;\n    --ion-color-secondary-contrast: #ffffff;\n    --ion-color-secondary-contrast-rgb: 255,255,255;\n    --ion-color-secondary-shade: #46b0e0;\n    --ion-color-secondary-tint: #62ceff;\n    --ion-color-tertiary: #6a64ff;\n    --ion-color-tertiary-rgb: 106,100,255;\n    --ion-color-tertiary-contrast: #ffffff;\n    --ion-color-tertiary-contrast-rgb: 255,255,255;\n    --ion-color-tertiary-shade: #5d58e0;\n    --ion-color-tertiary-tint: #7974ff;\n    --ion-color-success: #2fdf75;\n    --ion-color-success-rgb: 47,223,117;\n    --ion-color-success-contrast: #000000;\n    --ion-color-success-contrast-rgb: 0,0,0;\n    --ion-color-success-shade: #29c467;\n    --ion-color-success-tint: #44e283;\n    --ion-color-warning: #ffd534;\n    --ion-color-warning-rgb: 255,213,52;\n    --ion-color-warning-contrast: #000000;\n    --ion-color-warning-contrast-rgb: 0,0,0;\n    --ion-color-warning-shade: #e0bb2e;\n    --ion-color-warning-tint: #ffd948;\n    --ion-color-danger: #ff4961;\n    --ion-color-danger-rgb: 255,73,97;\n    --ion-color-danger-contrast: #ffffff;\n    --ion-color-danger-contrast-rgb: 255,255,255;\n    --ion-color-danger-shade: #e04055;\n    --ion-color-danger-tint: #ff5b71;\n    --ion-color-dark: #f4f5f8;\n    --ion-color-dark-rgb: 244,245,248;\n    --ion-color-dark-contrast: #000000;\n    --ion-color-dark-contrast-rgb: 0,0,0;\n    --ion-color-dark-shade: #d7d8da;\n    --ion-color-dark-tint: #f5f6f9;\n    --ion-color-medium: #989aa2;\n    --ion-color-medium-rgb: 152,154,162;\n    --ion-color-medium-contrast: #000000;\n    --ion-color-medium-contrast-rgb: 0,0,0;\n    --ion-color-medium-shade: #86888f;\n    --ion-color-medium-tint: #a2a4ab;\n    --ion-color-light: #222428;\n    --ion-color-light-rgb: 34,36,40;\n    --ion-color-light-contrast: #ffffff;\n    --ion-color-light-contrast-rgb: 255,255,255;\n    --ion-color-light-shade: #1e2023;\n    --ion-color-light-tint: #383a3e;\n  }\n\n  /*\n   * iOS Dark Theme\n   * -------------------------------------------\n   */\n  .ios body {\n    --ion-background-color: #000000;\n    --ion-background-color-rgb: 0,0,0;\n    --ion-text-color: #ffffff;\n    --ion-text-color-rgb: 255,255,255;\n    --ion-color-step-50: #0d0d0d;\n    --ion-color-step-100: #1a1a1a;\n    --ion-color-step-150: #262626;\n    --ion-color-step-200: #333333;\n    --ion-color-step-250: #404040;\n    --ion-color-step-300: #4d4d4d;\n    --ion-color-step-350: #595959;\n    --ion-color-step-400: #666666;\n    --ion-color-step-450: #737373;\n    --ion-color-step-500: #808080;\n    --ion-color-step-550: #8c8c8c;\n    --ion-color-step-600: #999999;\n    --ion-color-step-650: #a6a6a6;\n    --ion-color-step-700: #b3b3b3;\n    --ion-color-step-750: #bfbfbf;\n    --ion-color-step-800: #cccccc;\n    --ion-color-step-850: #d9d9d9;\n    --ion-color-step-900: #e6e6e6;\n    --ion-color-step-950: #f2f2f2;\n    --ion-item-background: #000000;\n    --ion-card-background: #1c1c1d;\n  }\n\n  .ios ion-modal {\n    --ion-background-color: var(--ion-color-step-100);\n    --ion-toolbar-background: var(--ion-color-step-150);\n    --ion-toolbar-border-color: var(--ion-color-step-250);\n  }\n\n  /*\n   * Material Design Dark Theme\n   * -------------------------------------------\n   */\n  .md body {\n    --ion-background-color: #121212;\n    --ion-background-color-rgb: 18,18,18;\n    --ion-text-color: #ffffff;\n    --ion-text-color-rgb: 255,255,255;\n    --ion-border-color: #222222;\n    --ion-color-step-50: #1e1e1e;\n    --ion-color-step-100: #2a2a2a;\n    --ion-color-step-150: #363636;\n    --ion-color-step-200: #414141;\n    --ion-color-step-250: #4d4d4d;\n    --ion-color-step-300: #595959;\n    --ion-color-step-350: #656565;\n    --ion-color-step-400: #717171;\n    --ion-color-step-450: #7d7d7d;\n    --ion-color-step-500: #898989;\n    --ion-color-step-550: #949494;\n    --ion-color-step-600: #a0a0a0;\n    --ion-color-step-650: #acacac;\n    --ion-color-step-700: #b8b8b8;\n    --ion-color-step-750: #c4c4c4;\n    --ion-color-step-800: #d0d0d0;\n    --ion-color-step-850: #dbdbdb;\n    --ion-color-step-900: #e7e7e7;\n    --ion-color-step-950: #f3f3f3;\n    --ion-item-background: #1e1e1e;\n    --ion-toolbar-background: #1f1f1f;\n    --ion-tab-bar-background: #1f1f1f;\n    --ion-card-background: #1e1e1e;\n  }\n}\n/* Importing Bootstrap SCSS file. */\n.principal {\n  background-color: white;\n  height: 100%;\n  overflow-y: scroll;\n}\nion-card {\n  border-radius: 25px;\n}\n.colStart {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.icon {\n  color: #514e4c;\n  font-size: 35px;\n}\nspan {\n  font-size: 20px;\n  color: #514e4c;\n}\n.icon2 {\n  color: #514e4c;\n  font-size: 25px;\n}\n.col1 {\n  border-bottom: #f3f3f3 1px solid;\n}\n.weather-icon {\n  color: #514e4c;\n  font-size: 95px;\n}\n.bottomSHeet {\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  border-radius: 20px 20px 0px 0px;\n  z-index: 20;\n  background-color: var(--ion-color-medium-contrast);\n  transform: translate3d(0, 0, 0);\n}\nion-input {\n  width: 100%;\n  padding: 5px;\n  border-radius: 10px;\n  text-align: center;\n}\nion-button {\n  width: 100%;\n  background-color: #514e4c;\n  border-radius: 35px;\n}\n.span-tem {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.titleBottomSheet {\n  height: 40%;\n  border-bottom: 1px solid #f3f3f3;\n}\n.cityName {\n  font-size: 100%;\n  color: black;\n}\n.statistique {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: flex-end;\n  margin-top: 2rem;\n  height: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vd2VhdGhlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsMEJBQUE7QUFLQTtFQUVFLG9CQUFBO0VBTUUsY0FBQTtFQUNGLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsaURBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsZUFBQTtFQUNBLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSxzQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBQ3JCRjtBRHBERTtFQUNJLGVBQUE7QUNzRE47QURxQkE7RUFDRTs7O0lBQUE7RUFLQTtJQUNFLDRCQUFBO0lB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Z0NBQUE7QUFtTko7QUFqTkE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQW9OSjtBQWxOQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFxTkoiLCJmaWxlIjoid2VhdGhlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmcuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6XG4vLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9cblxuXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cbiRzZWNvbmRhcnktY29sOnJnYigyNDMsIDI0MywgMjQzKTtcbiRzZWNvbmRhcnk6cmdiKDI0MywgMjQzLCAyNDMpIDtcbiRibGFuYzpyZ2JhKDI1NSwyNTUsMjU1KTtcbiRwcmltYXJ5OiM1MTRlNGM7XG46cm9vdCB7XG5cbiAgLS1jb2xvci10YWJzOiM1MTRlNGM7XG5cblxuICBpb24taXRlbSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgICAvKiogcHJpbWFyeSAqKi9cbiAgLS1pb24tY29sb3ItcHJpbWFyeTogJHByaW1hcnk7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA1NiwgMTI4LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjMzE3MWUwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM0YzhkZmY7XG5cbiAgLyoqIHNlY29uZGFyeSAqKi9cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjM2RjMmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA2MSwgMTk0LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjMzZhYmUwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzUwYzhmZjtcblxuICAvKiogdGVydGlhcnkgKiovXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNTI2MGZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDgyLCA5NiwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzQ4NTRlMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzYzNzBmZjtcblxuICAvKiogc3VjY2VzcyAqKi9cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzJkZDM2ZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ1LCAyMTEsIDExMTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOGJhNjI7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQyZDc3ZDtcblxuICAvKiogd2FybmluZyAqKi9cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmYzQwOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMTk2LCA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYWMwODtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZjYTIyO1xuXG4gIC8qKiBkYW5nZXIgKiovXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ViNDQ1YTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjM1LCA2OCwgOTA7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjY2YzYzRmOy8vaWNpXG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZWQ1NzZiO1xuXG4gIC8qKiBkYXJrICoqL1xuICAtLWlvbi1jb2xvci1kYXJrOiAjMjIyNDI4Oy8vaWNpXG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAzNCwgMzYsIDQwO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xuXG4gIC8qKiBtZWRpdW0gKiovXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzkyOTQ5YztcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTQ2LCAxNDgsIDE1NjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmOy8vaWNpXG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzgwODI4OTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICM5ZDlmYTY7XG5cbiAgLyoqIGxpZ2h0ICoqL1xuICAtLWlvbi1jb2xvci1saWdodDogI2Y0ZjVmODsvL2ljaVxuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xufVxuXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gIC8qXG4gICAqIERhcmsgQ29sb3JzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgYm9keSB7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeTogIzQyOGNmZjtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNjYsMTQwLDI1NTtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjM2E3YmUwO1xuICAgIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzU1OThmZjtcblxuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzUwYzhmZjtcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA4MCwyMDAsMjU1O1xuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICM0NmIwZTA7XG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM2MmNlZmY7XG5cbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzZhNjRmZjtcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDEwNiwxMDAsMjU1O1xuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gICAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM1ZDU4ZTA7XG4gICAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzc5NzRmZjtcblxuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyZmRmNzU7XG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ3LDIyMywxMTc7XG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcbiAgICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI5YzQ2NztcbiAgICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0NGUyODM7XG5cbiAgICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZkNTM0O1xuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsMjEzLDUyO1xuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGJiMmU7XG4gICAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkOTQ4O1xuXG4gICAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZmY0OTYxO1xuICAgIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI1NSw3Myw5NztcbiAgICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZTA0MDU1O1xuICAgIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZmY1YjcxO1xuXG4gICAgLS1pb24tY29sb3ItZGFyazogI2Y0ZjVmODtcbiAgICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMjQ0LDI0NSwyNDg7XG4gICAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogIzAwMDAwMDtcbiAgICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gICAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogI2Q3ZDhkYTtcbiAgICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICNmNWY2Zjk7XG5cbiAgICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XG4gICAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTUyLDE1NCwxNjI7XG4gICAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAgIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAgIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzg2ODg4ZjtcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcblxuICAgIC0taW9uLWNvbG9yLWxpZ2h0OiAjMjIyNDI4O1xuICAgIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMzQsMzYsNDA7XG4gICAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogIzFlMjAyMztcbiAgICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjMzgzYTNlO1xuICB9XG5cbiAgLypcbiAgICogaU9TIERhcmsgVGhlbWVcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAuaW9zIGJvZHkge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsMCwwO1xuXG4gICAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LDI1NSwyNTU7XG5cbiAgICAtLWlvbi1jb2xvci1zdGVwLTUwOiAjMGQwZDBkO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMTAwOiAjMWExYTFhO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMjYyNjI2O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjMzMzMzMzO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMjUwOiAjNDA0MDQwO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNGQ0ZDRkO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNTk1OTU5O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNDAwOiAjNjY2NjY2O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjNzM3MzczO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODA4MDgwO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNTUwOiAjOGM4YzhjO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjOTk5OTk5O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYTZhNmE2O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNzAwOiAjYjNiM2IzO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYmZiZmJmO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtODAwOiAjY2NjY2NjO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZDlkOWQ5O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTZlNmU2O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjJmMmYyO1xuXG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuXG4gICAgLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiAjMWMxYzFkO1xuICB9XG5cbiAgLmlvcyBpb24tbW9kYWwge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCk7XG4gICAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTApO1xuICAgIC0taW9uLXRvb2xiYXItYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yNTApO1xuICB9XG5cblxuICAvKlxuICAgKiBNYXRlcmlhbCBEZXNpZ24gRGFyayBUaGVtZVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC5tZCBib2R5IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAxOCwxOCwxODtcblxuICAgIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gICAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwyNTUsMjU1O1xuXG4gICAgLS1pb24tYm9yZGVyLWNvbG9yOiAjMjIyMjIyO1xuXG4gICAgLS1pb24tY29sb3Itc3RlcC01MDogIzFlMWUxZTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzJhMmEyYTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTE1MDogIzM2MzYzNjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzQxNDE0MTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzRkNGQ0ZDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTMwMDogIzU5NTk1OTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzY1NjU2NTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzcxNzE3MTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTQ1MDogIzdkN2Q3ZDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzg5ODk4OTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzk0OTQ5NDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTYwMDogI2EwYTBhMDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2FjYWNhYztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2I4YjhiODtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTc1MDogI2M0YzRjNDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2QwZDBkMDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2RiZGJkYjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTkwMDogI2U3ZTdlNztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YzZjNmMztcblxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzFlMWUxZTtcblxuICAgIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogIzFmMWYxZjtcblxuICAgIC0taW9uLXRhYi1iYXItYmFja2dyb3VuZDogIzFmMWYxZjtcblxuICAgIC0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFlMWUxZTtcbiAgfVxufVxuXG4vKiBJbXBvcnRpbmcgQm9vdHN0cmFwIFNDU1MgZmlsZS4gKi9cbi8vQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL2Jvb3RzdHJhcCc7XG4iLCJAdXNlICcuLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzJyBhcyB2O1xuXG5cbi5wcmluY2lwYWx7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHYuJGJsYW5jO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4vLyBpb24tY29udGVudHtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgdi4kc2Vjb25kYXJ5O1xuLy8gfVxuaW9uLWNhcmR7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cbi5jb2xTdGFydHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaWNvbntcbiAgICBjb2xvcjogdi4kcHJpbWFyeTtcbiAgICBmb250LXNpemU6IDM1cHg7XG59XG5zcGFue1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogdi4kcHJpbWFyeTtcbn1cblxuLmljb24ye1xuICAgIGNvbG9yOiAgdi4kcHJpbWFyeTtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG4uY29sMXtcbiAgICBib3JkZXItYm90dG9tOiB2LiRzZWNvbmRhcnkgMXB4IHNvbGlkO1xufVxuXG4ud2VhdGhlci1pY29ue1xuICAgIGNvbG9yOiAgdi4kcHJpbWFyeTtcbiAgICBmb250LXNpemU6IDk1cHg7XG59XG5cbi5ib3R0b21TSGVldHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm90dG9tOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMHB4O1xuICAgIHotaW5kZXg6IDIwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xufVxuaW9uLWlucHV0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1idXR0b257XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdi4kcHJpbWFyeTtcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xufVxuLnNwYW4tdGVte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGl0bGVCb3R0b21TaGVldHtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdi4kc2Vjb25kYXJ5O1xufVxuLmNpdHlOYW1le1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG4uc3RhdGlzdGlxdWV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIGhlaWdodDogNXJlbTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "ggVh":
/*!************************************************************!*\
  !*** ./src/app/services/weather/weather-routing.module.ts ***!
  \************************************************************/
/*! exports provided: WeatherPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherPageRoutingModule", function() { return WeatherPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _weather_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weather.page */ "Z7Ig");




const routes = [
    {
        path: '',
        component: _weather_page__WEBPACK_IMPORTED_MODULE_3__["WeatherPage"]
    }
];
let WeatherPageRoutingModule = class WeatherPageRoutingModule {
};
WeatherPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WeatherPageRoutingModule);



/***/ }),

/***/ "mBgc":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/weather/weather.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content >\n  <!-- <app-header-two [routeName]=\"pageInfo\" [Btnaction]=\"bottomShet()\" [visible]=\"\" ></app-header-two>\n  <app-footer></app-footer> -->\n  <div class=\"principal\">\n          <div class=\"content\">\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"1\"routerLink=\"/tabs/tab1\">\n                    <ion-icon class=\"icon\" name=\"chevron-back-outline\"></ion-icon>\n                </ion-col>\n                <ion-col class=\"colStart\"  size=\"10\">\n                  <span >Météo</span>\n                </ion-col>\n                <ion-col class=\"colStart2\" size=\"1\">\n                  <ion-icon class=\"icon\" (click)=\"bottomShet()\" name=\"add-outline\"></ion-icon>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </div>\n          <ion-card >\n            <div *ngIf=\"weather\" class=\"weather\">\n\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"2\" class=\"colStart\">\n                    <ion-icon class=\"icon2\" name=\"locate-outline\"></ion-icon>\n                  </ion-col>\n                  <ion-col size=\"4\" class=\"colStart\">\n                    <span class=\"cityName\">{{weather.name}} </span>\n                    <!-- <span>{{weather.sys.country}}</span>  -->\n                  </ion-col>\n                  <ion-col size=\"6\" class=\"colStart\">\n                    {{ today| date }}<br>{{now}}\n                  </ion-col>\n\n                  <ion-col size=\"7\" class=\"colStart\">\n                    <ion-icon name=\"{{ icon }}\" class=\"weather-icon\"></ion-icon>\n                  </ion-col>\n\n                  <ion-col class=\"statistique\">\n                    <ion-col size=\"6\" class=\"span-tem\">\n                      <ion-icon class=\"icon2\" name=\"thermometer-outline\"></ion-icon>\n                      <p >{{weather.main.temp | number: '1.0-0'}}C°</p>\n                    </ion-col>\n\n                    <ion-col size=\"6\" class=\"span-tem\" >\n                      <ion-icon class=\"icon2\" name=\"water-outline\"></ion-icon>\n                      <p >{{weather.main.humidity}}%</p>\n                    </ion-col>\n\n                    <ion-col size=\"6\" class=\"span-tem\" >\n                      <ion-icon class=\"icon2\" name=\"speedometer-outline\"></ion-icon>\n                      <p >{{weather.main.pressure}}</p>\n                    </ion-col>\n\n                  </ion-col>\n\n                </ion-row>\n              </ion-grid>\n            </div>\n          </ion-card>\n\n\n\n          <div *ngFor=\"let weather of CitysArray\" >\n              <ion-card *ngIf=\"searchWeather\">\n                <ion-item>\n\n                </ion-item>\n                <div class=\"weather\">\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col size=\"2\" class=\"colStart\">\n                        <ion-icon class=\"icon2\" name=\"locate-outline\"></ion-icon>\n                      </ion-col>\n                      <ion-col size=\"4\" class=\"colStart\">\n                        <span class=\"cityName\">{{weather.name}}</span>\n                        <!-- {{weather.sys.country}} -->\n                      </ion-col>\n                      <ion-col size=\"6\" class=\"colStart\">\n                        {{ today| date }}<br>{{now}}\n                      </ion-col>\n\n                      <ion-col size=\"7\" class=\"colStart\">\n                        <ion-icon name=\"{{ weather.weather[0].description  }}\" class=\"weather-icon\"></ion-icon>\n                      </ion-col>\n                      <ion-col class=\"statistique\">\n                        <ion-col size=\"6\" class=\"span-tem\">\n                          <ion-icon class=\"icon2\" name=\"thermometer-outline\"></ion-icon>\n                          <p >{{weather.main.temp | number: '1.0-0'}}C°</p>\n                        </ion-col>\n\n                        <ion-col size=\"6\" class=\"span-tem\" >\n                          <ion-icon class=\"icon2\" name=\"water-outline\"></ion-icon>\n                          <p >{{weather.main.humidity}}%</p>\n                        </ion-col>\n\n                        <ion-col size=\"6\" class=\"span-tem\" >\n                          <ion-icon class=\"icon2\" name=\"speedometer-outline\"></ion-icon>\n                          <p >{{weather.main.pressure}}</p>\n                        </ion-col>\n                      </ion-col>\n\n                    </ion-row>\n                  </ion-grid>\n                </div>\n              </ion-card>\n          </div>\n\n\n          <div class=\"bottomSHeet\" >\n            <div class=\"content ion-padding\">\n              <div class=\"titleBottomSheet\" (click)=\"bottomShet()\">\n                <h4 class=\"ion-text-center\">Ajouter une ville</h4>\n              </div>\n                <ion-searchbar debounce=\"500\" #userInput  placeholder=\"Rechercher\" ></ion-searchbar>\n                <ion-button (click)=\"getCity(userInput)\">Ajouter</ion-button>\n            </div>\n          </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=services-weather-weather-module.js.map
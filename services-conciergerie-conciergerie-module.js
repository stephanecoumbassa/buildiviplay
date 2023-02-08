(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-conciergerie-conciergerie-module"],{

/***/ "A2+t":
/*!************************************************************!*\
  !*** ./src/app/services/conciergerie/conciergerie.page.ts ***!
  \************************************************************/
/*! exports provided: ConciergeriePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConciergeriePage", function() { return ConciergeriePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_conciergerie_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./conciergerie.page.html */ "NAgl");
/* harmony import */ var _conciergerie_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conciergerie.page.scss */ "bX43");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _conciergerie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./conciergerie.service */ "NLAT");
/* harmony import */ var _ionic_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/core */ "1Bn7");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var driver_js_dist_driver_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! driver.js/dist/driver.min.css */ "Add6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









let ConciergeriePage = class ConciergeriePage {
    constructor(conciergeireService, alertController, router) {
        this.conciergeireService = conciergeireService;
        this.alertController = alertController;
        this.router = router;
        this.conciergerieServicesList = [];
        this.conciergerieServicesModules = [];
        this.conciergerieServicesModulesList = [];
        this.showServices = true;
        this.showServicesModules = false;
        this.showServicesModulesList = false;
        this.conciergerieTable = [];
    }
    getServiceListModules(service) {
        // console.log('servicess', service);
        this.subtitle = service.name;
        // ---s
        this.showServices = false;
        this.showServicesModules = true;
        this.conciergerieServicesModules = service.modules;
        this.currentService = service;
    }
    getServiceListModulesList(module) {
        // console.log('servicess', module);
        this.subtitle = module.name;
        this.showServices = false;
        this.showServicesModules = false;
        this.showServicesModulesList = true;
        this.conciergerieServicesModulesList = module.modules;
        this.currentServiceModule = module;
    }
    backToServiceListModules() {
        this.showServices = false;
        this.showServicesModules = true;
        this.showServicesModulesList = false;
        this.closeBottomSheet();
    }
    backToServiceList() {
        this.showServices = true;
        this.showServicesModules = false;
        this.showServicesModulesList = false;
        this.closeBottomSheet();
    }
    conciergerieAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Votre demande',
                subHeader: '',
                message: 'Je suis interéssé par ' + this.currentService.name + ' : ' + this.currentServiceModule.name + ' : ' + this.currentModule.name,
                buttons: [
                    {
                        text: 'Ok',
                        handler: (alertData) => {
                            this.successAlert();
                        }
                    },
                ]
            });
            localStorage.setItem("conciergerie", JSON.stringify(this.conciergerieTable));
            //console.log("conciergerieTable", this.conciergerieTable);
            console.log(this.currentModule);
            yield alert.present();
            if (document.querySelector(".alert-head")) {
                document.querySelector(".alert-title").style.fontSize = '17px';
                document.querySelector(".alert-message").style.fontSize = '15px';
            }
        });
    }
    successAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Conciergerie',
                subHeader: '',
                message: 'Votre demande a bien été prise en compte ',
                buttons: [
                    {
                        text: 'Ok',
                    },
                ]
            });
            yield alert.present();
        });
    }
    redirectToHistorique() {
        this.router.navigate(['/conciergerie/conciergerie-historique']);
    }
    openBottomSheet(module) {
        this.currentModule = module;
        this.conciergerieTable.push(module);
        //localStorage.setItem('conciergerie',JSON.stringify(this.conciergerieTable))
        this.bottomSheetHeight = '60%';
        document.querySelector("#conciergerieBottomSheet").style.display = "block";
        const animation = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_5__["createAnimation"])()
            .addElement(document.querySelector("#conciergerieBottomSheet"))
            .easing("ease-in-out")
            .duration(400)
            .direction("alternate")
            .keyframes([
            { height: "0px", transform: "scale(1)", opacity: "1", },
            { height: this.bottomSheetHeight, transform: "scale(1)", opacity: "1" },
        ]);
        animation.play();
    }
    closeBottomSheet() {
        const animation = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_5__["createAnimation"])()
            .addElement(document.querySelector("#conciergerieBottomSheet"))
            .easing("ease-in-out")
            .duration(400)
            .direction("alternate")
            .keyframes([
            { height: this.bottomSheetHeight, },
            { height: "0px", opacity: "0" },
        ]);
        animation.play();
    }
    ngOnInit() {
        this.conciergerieServicesList = this.conciergeireService.getConciergerieServices();
    }
};
ConciergeriePage.ctorParameters = () => [
    { type: _conciergerie_service__WEBPACK_IMPORTED_MODULE_4__["ConciergerieService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
ConciergeriePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-conciergerie',
        template: _raw_loader_conciergerie_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_conciergerie_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ConciergeriePage);



/***/ }),

/***/ "NAgl":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/conciergerie/conciergerie.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content >\n  <div class=\"principal\"  >\n      <ion-grid >\n        <ion-row class=\"ion-align-items-center\" >\n          <ion-col size=\"1\" *ngIf=\"showServices\" routerLink=\"/tabs/tab1\" >\n            <ion-icon class=\"icon\" name=\"chevron-back-outline\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"1\" *ngIf=\"showServicesModules\"(click)=\"backToServiceList()\">\n            <ion-icon class=\"icon\" name=\"chevron-back-outline\" ></ion-icon>\n          </ion-col>\n          <ion-col size=\"1\" *ngIf=\"showServicesModulesList\"(click)=\"backToServiceListModules()\" >\n            <ion-icon class=\"icon\" name=\"chevron-back-outline\"></ion-icon>\n          </ion-col>\n          <ion-col *ngIf=\"subtitle\" class=\"FirstColumn\"  size=\"9\"  >\n            <span class=\"productName\"> {{subtitle}} </span>\n            <br>\n            <span class=\"serviceTitle\" >Conciergerie</span>\n          </ion-col>\n          <ion-col *ngIf=\"!subtitle\"  class=\"FirstColumn\"  size=\"9\"  >\n\n            <span class=\"serviceTitle\" >Conciergerie</span>\n          </ion-col>\n          <ion-col size=\"1\" >\n            <ion-icon (click)=\"redirectToHistorique()\" class=\"iconHIstorique\" name=\"time-outline\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-card *ngIf=\"showServices\">\n      <ion-list lines=\"none\" *ngFor=\"let service of conciergerieServicesList\" >\n        <!-- <div class=\"\"> -->\n          <!-- <ion-item (click)=\"getServiceListModules(service)\"> -->\n            <!-- <ion-grid>\n              <ion-row>\n                <ion-col size=\"2\" class=\"centerIcon\">\n                  <ion-icon class=\"moduleDetailsIcon\"  name=\"{{service.icon}}-outline\"></ion-icon>\n                </ion-col>\n                <ion-col>\n                  <span class=\"moduleDetails\">{{service.name}} </span>\n                </ion-col>\n              </ion-row>\n            </ion-grid> -->\n            <!-- <ion-icon class=\"moduleDetailsIcon\"  name=\"{{service.icon}}-outline\"></ion-icon>\n            <p class=\"list-lab\" >{{service.name}}</p>\n          </ion-item>\n          <div class=\"divider\"></div>\n        </div> -->\n\n        <div class=\"\">\n          <ion-item (click)=\"getServiceListModules(service)\">\n            <ion-grid class=\"productGrid\">\n              <ion-row class=\"ion-align-items-center\">\n                <ion-col size=\"2\" >\n                  <ion-icon  class=\"productIcon\" name=\"{{service.icon}}-outline\"></ion-icon>\n                </ion-col>\n                <ion-col>\n                 <span class=\"list-lab\">{{service.name}}</span>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            <!-- <ion-icon  class=\"productIcon\" name=\"{{product.icon}}-outline\"></ion-icon>\n            <ion-label>{{product.name}}</ion-label> -->\n          </ion-item>\n          <div class=\"divider\"></div>\n        </div>\n\n      </ion-list>\n    </ion-card>\n\n    <ion-card *ngIf=\"showServicesModules\">\n      <ion-list lines=\"none\" *ngFor=\"let module of conciergerieServicesModules\" >\n          <ion-item (click)=\"getServiceListModulesList(module)\">\n            <ion-grid>\n              <ion-row class=\"ion-align-items-center\">\n                <ion-col size=\"2\" class=\"centerIcon\">\n                  <ion-icon class=\"icon\"  name=\"{{module.icon}}-outline\"></ion-icon>\n                </ion-col>\n                <ion-col>\n                  <span class=\"list-lab\">{{module.name}} </span>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n          <div class=\"divider\"></div>\n\n      </ion-list>\n    </ion-card>\n\n    <ion-card *ngIf=\"showServicesModulesList\">\n      <ion-list lines=\"none\" *ngFor=\"let module of conciergerieServicesModulesList\" >\n          <ion-item (click)=\"openBottomSheet(module)\">\n            <ion-grid>\n              <ion-row class=\"ion-align-items-center\">\n                <ion-col size=\"2\" class=\"centerIcon\">\n                  <ion-icon class=\"icon\" name=\"{{module.icon}}-outline\"></ion-icon>\n                </ion-col>\n                <ion-col>\n                  <span class=\"list-lab\">{{module.name}} </span>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n          <div class=\"divider\"></div>\n      </ion-list>\n    </ion-card>\n\n\n    <div id=\"conciergerieBottomSheet\" class=\"bottomSheet\" >\n      <ion-grid >\n        <!-- <ion-row>\n          <ion-col size=\"12\" (click)=\"closeBottomSheet()\" >\n            <div class=\"bottomSheetNameDiv\">\n              <span class=\"moduleDetailsCurrentname\">{{currentModule?.package}} {{currentModule?.name}}</span>\n            </div>\n          </ion-col>\n          <ion-col size=\"12\" *ngIf=\"currentModule?.price\">\n            <p class=\"priceParagraphe\">{{currentModule?.price}} €</p>\n          </ion-col>\n          <ion-col size=\"12\" *ngIf=\"currentModule?.description\">\n            <p class=\"descriptionParagraphe\">{{currentModule?.description}}</p>\n          </ion-col>\n          <ion-col size=\"12\" class=\"buttonColumn\">\n              <button (click)=\"conciergerieAlert()\" >\n                Effectuer une demande\n              </button>\n          </ion-col>\n        </ion-row> -->\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\"(click)=\"closeBottomSheet()\" >\n                <div class=\"bottomSheetNameDiv\">\n                    <p class=\"totalPriceSpanClass\">Paiement électronique</p>\n                </div>\n                <div class=\"bottomSheetNameDiv\">\n                  <span class=\"moduleDetailsCurrentname\">{{currentModule?.package}} {{currentModule?.name}}</span>\n                </div>\n            </ion-col>\n            <ion-col size=\"12\" *ngIf=\"currentModule?.price\">\n              <p class=\"priceParagraphe\">{{currentModule?.price}} €</p>\n            </ion-col>\n            <ion-col size=\"12\" *ngIf=\"currentModule?.description\">\n              <p class=\"descriptionParagraphe\">{{currentModule?.description}}</p>\n            </ion-col>\n            <!-- <ion-col size=\"12\" class=\"buttonColumn\">\n                <button (click)=\"conciergerieAlert()\" >\n                  Effectuer une demande\n                </button>\n            </ion-col> -->\n            <ion-col size=\"12\" class=\"centerElement\">\n              <img src=\"assets/images/altocard.jpeg\">\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"paymentRow\">\n            <ion-col size=\"2\" class=\"centerElement\">\n              <ion-icon class=\"icon\" name=\"wifi-outline\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"10\" class=\"paragraphCenter\">\n              <span class=\"paymentMessage\">Veillez scanner l'interface de paiement</span>\n            </ion-col>\n            <!-- <ion-col size=\"12\" class=\"paymentColumn\">\n              <button class=\"payButton\" (click)=\"payConfirmation()\"  >Payer</button>\n            </ion-col> -->\n            <ion-col size=\"12\" class=\"buttonColumn\">\n                <button (click)=\"conciergerieAlert()\" >\n                  Effectuer une demande\n                </button>\n            </ion-col>\n\n          </ion-row>\n      </ion-grid>\n\n      </ion-grid>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "NLAT":
/*!***************************************************************!*\
  !*** ./src/app/services/conciergerie/conciergerie.service.ts ***!
  \***************************************************************/
/*! exports provided: ConciergerieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConciergerieService", function() { return ConciergerieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_mocks_Conciergerie_mocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/mocks/Conciergerie.mocks */ "eMoF");



let ConciergerieService = class ConciergerieService {
    constructor(conciergerieMocks) {
        this.conciergerieMocks = conciergerieMocks;
    }
    getConciergerieServices() {
        return this.conciergerieMocks.getAll();
    }
};
ConciergerieService.ctorParameters = () => [
    { type: src_mocks_Conciergerie_mocks__WEBPACK_IMPORTED_MODULE_2__["ConsiergerieMocks"] }
];
ConciergerieService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ConciergerieService);



/***/ }),

/***/ "bX43":
/*!**************************************************************!*\
  !*** ./src/app/services/conciergerie/conciergerie.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/** Ionic CSS Variables **/\n:root {\n  --color-tabs:#514e4c;\n  /** primary **/\n  --ion-color-primary: $primary;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}\n:root ion-item {\n  font-size: 14px;\n}\n@media (prefers-color-scheme: dark) {\n  /*\n   * Dark Colors\n   * -------------------------------------------\n   */\n  body {\n    --ion-color-primary: #428cff;\n    --ion-color-primary-rgb: 66,140,255;\n    --ion-color-primary-contrast: #ffffff;\n    --ion-color-primary-contrast-rgb: 255,255,255;\n    --ion-color-primary-shade: #3a7be0;\n    --ion-color-primary-tint: #5598ff;\n    --ion-color-secondary: #50c8ff;\n    --ion-color-secondary-rgb: 80,200,255;\n    --ion-color-secondary-contrast: #ffffff;\n    --ion-color-secondary-contrast-rgb: 255,255,255;\n    --ion-color-secondary-shade: #46b0e0;\n    --ion-color-secondary-tint: #62ceff;\n    --ion-color-tertiary: #6a64ff;\n    --ion-color-tertiary-rgb: 106,100,255;\n    --ion-color-tertiary-contrast: #ffffff;\n    --ion-color-tertiary-contrast-rgb: 255,255,255;\n    --ion-color-tertiary-shade: #5d58e0;\n    --ion-color-tertiary-tint: #7974ff;\n    --ion-color-success: #2fdf75;\n    --ion-color-success-rgb: 47,223,117;\n    --ion-color-success-contrast: #000000;\n    --ion-color-success-contrast-rgb: 0,0,0;\n    --ion-color-success-shade: #29c467;\n    --ion-color-success-tint: #44e283;\n    --ion-color-warning: #ffd534;\n    --ion-color-warning-rgb: 255,213,52;\n    --ion-color-warning-contrast: #000000;\n    --ion-color-warning-contrast-rgb: 0,0,0;\n    --ion-color-warning-shade: #e0bb2e;\n    --ion-color-warning-tint: #ffd948;\n    --ion-color-danger: #ff4961;\n    --ion-color-danger-rgb: 255,73,97;\n    --ion-color-danger-contrast: #ffffff;\n    --ion-color-danger-contrast-rgb: 255,255,255;\n    --ion-color-danger-shade: #e04055;\n    --ion-color-danger-tint: #ff5b71;\n    --ion-color-dark: #f4f5f8;\n    --ion-color-dark-rgb: 244,245,248;\n    --ion-color-dark-contrast: #000000;\n    --ion-color-dark-contrast-rgb: 0,0,0;\n    --ion-color-dark-shade: #d7d8da;\n    --ion-color-dark-tint: #f5f6f9;\n    --ion-color-medium: #989aa2;\n    --ion-color-medium-rgb: 152,154,162;\n    --ion-color-medium-contrast: #000000;\n    --ion-color-medium-contrast-rgb: 0,0,0;\n    --ion-color-medium-shade: #86888f;\n    --ion-color-medium-tint: #a2a4ab;\n    --ion-color-light: #222428;\n    --ion-color-light-rgb: 34,36,40;\n    --ion-color-light-contrast: #ffffff;\n    --ion-color-light-contrast-rgb: 255,255,255;\n    --ion-color-light-shade: #1e2023;\n    --ion-color-light-tint: #383a3e;\n  }\n\n  /*\n   * iOS Dark Theme\n   * -------------------------------------------\n   */\n  .ios body {\n    --ion-background-color: #000000;\n    --ion-background-color-rgb: 0,0,0;\n    --ion-text-color: #ffffff;\n    --ion-text-color-rgb: 255,255,255;\n    --ion-color-step-50: #0d0d0d;\n    --ion-color-step-100: #1a1a1a;\n    --ion-color-step-150: #262626;\n    --ion-color-step-200: #333333;\n    --ion-color-step-250: #404040;\n    --ion-color-step-300: #4d4d4d;\n    --ion-color-step-350: #595959;\n    --ion-color-step-400: #666666;\n    --ion-color-step-450: #737373;\n    --ion-color-step-500: #808080;\n    --ion-color-step-550: #8c8c8c;\n    --ion-color-step-600: #999999;\n    --ion-color-step-650: #a6a6a6;\n    --ion-color-step-700: #b3b3b3;\n    --ion-color-step-750: #bfbfbf;\n    --ion-color-step-800: #cccccc;\n    --ion-color-step-850: #d9d9d9;\n    --ion-color-step-900: #e6e6e6;\n    --ion-color-step-950: #f2f2f2;\n    --ion-item-background: #000000;\n    --ion-card-background: #1c1c1d;\n  }\n\n  .ios ion-modal {\n    --ion-background-color: var(--ion-color-step-100);\n    --ion-toolbar-background: var(--ion-color-step-150);\n    --ion-toolbar-border-color: var(--ion-color-step-250);\n  }\n\n  /*\n   * Material Design Dark Theme\n   * -------------------------------------------\n   */\n  .md body {\n    --ion-background-color: #121212;\n    --ion-background-color-rgb: 18,18,18;\n    --ion-text-color: #ffffff;\n    --ion-text-color-rgb: 255,255,255;\n    --ion-border-color: #222222;\n    --ion-color-step-50: #1e1e1e;\n    --ion-color-step-100: #2a2a2a;\n    --ion-color-step-150: #363636;\n    --ion-color-step-200: #414141;\n    --ion-color-step-250: #4d4d4d;\n    --ion-color-step-300: #595959;\n    --ion-color-step-350: #656565;\n    --ion-color-step-400: #717171;\n    --ion-color-step-450: #7d7d7d;\n    --ion-color-step-500: #898989;\n    --ion-color-step-550: #949494;\n    --ion-color-step-600: #a0a0a0;\n    --ion-color-step-650: #acacac;\n    --ion-color-step-700: #b8b8b8;\n    --ion-color-step-750: #c4c4c4;\n    --ion-color-step-800: #d0d0d0;\n    --ion-color-step-850: #dbdbdb;\n    --ion-color-step-900: #e7e7e7;\n    --ion-color-step-950: #f3f3f3;\n    --ion-item-background: #1e1e1e;\n    --ion-toolbar-background: #1f1f1f;\n    --ion-tab-bar-background: #1f1f1f;\n    --ion-card-background: #1e1e1e;\n  }\n}\n/* Importing Bootstrap SCSS file. */\n.principal {\n  background-color: white;\n  height: 100%;\n}\n.FirstColumn {\n  text-align: center;\n}\nion-card {\n  border-radius: 25px;\n}\nspan {\n  font-size: 20px;\n  color: #514e4c;\n}\n.icon {\n  color: #514e4c;\n  font-size: 35px;\n}\n.centerIcon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.bottomSheet {\n  position: fixed;\n  display: none;\n  width: 100%;\n  margin-bottom: -2px;\n  bottom: 0;\n  border-radius: 30px 30px 0px 0px;\n  z-index: 20;\n  background-color: white;\n  transform: translate3d(0, 0, 0);\n  padding: 2%;\n}\n.bottomSheetNameDiv {\n  text-align: center;\n  border-bottom: 1px solid #f3f3f3;\n  padding: 1rem 0;\n}\nbutton {\n  height: 30px;\n  width: 70%;\n  border-radius: 10px;\n  background-color: #514e4c;\n  font-size: 16px;\n  color: white;\n}\n.buttonColumn {\n  text-align: center;\n}\n.priceParagraphe {\n  text-align: end;\n  color: #514e4c;\n}\n.descriptionParagraphe {\n  font-size: 14px;\n  color: #514e4c;\n}\n.moduleDetails {\n  font-size: 17px;\n}\n.moduleDetailsIcon {\n  font-size: 25px;\n  margin-right: 8px;\n}\n.moduleDetailsCurrentname {\n  font-size: 14px;\n  font-weight: bold;\n}\n.productIcon, .productIconSum {\n  font-size: 30px;\n  color: #514e4c;\n}\n.productName {\n  font-size: 14px;\n}\n.paymentMessage {\n  color: #514e4c;\n  font-size: 15px;\n}\n#conciergerieBottomSheet {\n  overflow-y: scroll !important;\n  padding-top: 8px !important;\n}\n.iconHIstorique {\n  color: #514e4c;\n  font-size: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vY29uY2llcmdlcmllLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSwwQkFBQTtBQUtBO0VBRUUsb0JBQUE7RUFNRSxjQUFBO0VBQ0YsNkJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLHVDQUFBO0VBQ0EsdUNBQUE7RUFDQSxpREFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0FDckJGO0FEcERFO0VBQ0ksZUFBQTtBQ3NETjtBRHFCQTtFQUNFOzs7SUFBQTtFQUtBO0lBQ0UsNEJBQUE7SUFDQSxtQ0FBQTtJQUNBLHFDQUFBO0lBQ0EsNkNBQUE7SUFDQSxrQ0FBQTtJQUNBLGlDQUFBO0lBRUEsOEJBQUE7SUFDQSxxQ0FBQTtJQUNBLHVDQUFBO0lBQ0EsK0NBQUE7SUFDQSxvQ0FBQTtJQUNBLG1DQUFBO0lBRUEsNkJBQUE7SUFDQSxxQ0FBQTtJQUNBLHNDQUFBO0lBQ0EsOENBQUE7SUFDQSxtQ0FBQTtJQUNBLGtDQUFBO0lBRUEsNEJBQUE7SUFDQSxtQ0FBQTtJQUNBLHFDQUFBO0lBQ0EsdUNBQUE7SUFDQSxrQ0FBQTtJQUNBLGlDQUFBO0lBRUEsNEJBQUE7SUFDQSxtQ0FBQTtJQUNBLHFDQUFBO0lBQ0EsdUNBQUE7SUFDQSxrQ0FBQTtJQUNBLGlDQUFBO0lBRUEsMkJBQUE7SUFDQSxpQ0FBQTtJQUNBLG9DQUFBO0lBQ0EsNENBQUE7SUFDQSxpQ0FBQTtJQUNBLGdDQUFBO0lBRUEseUJBQUE7SUFDQSxpQ0FBQTtJQUNBLGtDQUFBO0lBQ0Esb0NBQUE7SUFDQSwrQkFBQTtJQUNBLDhCQUFBO0lBRUEsMkJBQUE7SUFDQSxtQ0FBQTtJQUNBLG9DQUFBO0lBQ0Esc0NBQUE7SUFDQSxpQ0FBQTtJQUNBLGdDQUFBO0lBRUEsMEJBQUE7SUFDQSwrQkFBQTtJQUNBLG1DQUFBO0lBQ0EsMkNBQUE7SUFDQSxnQ0FBQTtJQUNBLCtCQUFBO0VDM0JGOztFRDhCQTs7O0lBQUE7RUFLQTtJQUNFLCtCQUFBO0lBQ0EsaUNBQUE7SUFFQSx5QkFBQTtJQUNBLGlDQUFBO0lBRUEsNEJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFFQSw4QkFBQTtJQUVBLDhCQUFBO0VDaENGOztFRG1DQTtJQUNFLGlEQUFBO0lBQ0EsbURBQUE7SUFDQSxxREFBQTtFQ2hDRjs7RURvQ0E7OztJQUFBO0VBS0E7SUFDRSwrQkFBQTtJQUNBLG9DQUFBO0lBRUEseUJBQUE7SUFDQSxpQ0FBQTtJQUVBLDJCQUFBO0lBRUEsNEJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFFQSw4QkFBQTtJQUVBLGlDQUFBO0lBRUEsaUNBQUE7SUFFQSw4QkFBQTtFQ3pDRjtBQUNGO0FENENBLG1DQUFBO0FDdlBBO0VBQ0ksdUJESUc7RUNISCxZQUFBO0FBOE1KO0FBNU1BO0VBQ0ksa0JBQUE7QUErTUo7QUE3TUE7RUFDSSxtQkFBQTtBQWdOSjtBQTlNQTtFQUNJLGVBQUE7RUFDQSxjRE5LO0FDdU5UO0FBL01BO0VBQ0ksY0RUSztFQ1VMLGVBQUE7QUFrTko7QUE5TUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWlOSjtBQS9NQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLHVCRDVCRztFQzZCSCwrQkFBQTtFQUNBLFdBQUE7QUFrTko7QUEvTUE7RUFDSSxrQkFBQTtFQUNBLGdDQUFBO0VBRUEsZUFBQTtBQWlOSjtBQS9NQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkQxQ0s7RUMyQ0wsZUFBQTtFQUNBLFlEN0NHO0FDK1BQO0FBaE5BO0VBQ0ksa0JBQUE7QUFtTko7QUFqTkE7RUFDSSxlQUFBO0VBQ0EsY0RuREs7QUN1UVQ7QUFsTkE7RUFDSSxlQUFBO0VBQ0EsY0R2REs7QUM0UVQ7QUFuTkE7RUFDSSxlQUFBO0FBc05KO0FBcE5BO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBdU5KO0FBck5BO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBd05KO0FBck5BO0VBQ0UsZUFBQTtFQUNBLGNEdkVPO0FDK1JUO0FBck5BO0VBQ0UsZUFBQTtBQXdORjtBQXJOQTtFQUNFLGNEL0VPO0VDZ0ZQLGVBQUE7QUF3TkY7QUF0TkE7RUFDRSw2QkFBQTtFQUNBLDJCQUFBO0FBeU5GO0FBdE5BO0VBQ0UsY0R4Rk87RUN5RlAsZUFBQTtBQXlORiIsImZpbGUiOiJjb25jaWVyZ2VyaWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOlxuLy8gaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvXG5cblxuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG4kc2Vjb25kYXJ5LWNvbDpyZ2IoMjQzLCAyNDMsIDI0Myk7XG4kc2Vjb25kYXJ5OnJnYigyNDMsIDI0MywgMjQzKSA7XG4kYmxhbmM6cmdiYSgyNTUsMjU1LDI1NSk7XG4kcHJpbWFyeTojNTE0ZTRjO1xuOnJvb3Qge1xuXG4gIC0tY29sb3ItdGFiczojNTE0ZTRjO1xuXG5cbiAgaW9uLWl0ZW0ge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gICAgLyoqIHByaW1hcnkgKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICRwcmltYXJ5O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNTYsIDEyOCwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzMxNzFlMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNGM4ZGZmO1xuXG4gIC8qKiBzZWNvbmRhcnkgKiovXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzNkYzJmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogNjEsIDE5NCwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzM2YWJlMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM1MGM4ZmY7XG5cbiAgLyoqIHRlcnRpYXJ5ICoqL1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzUyNjBmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiA4MiwgOTYsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM0ODU0ZTA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM2MzcwZmY7XG5cbiAgLyoqIHN1Y2Nlc3MgKiovXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyZGQzNmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA0NSwgMjExLCAxMTE7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMjhiYTYyO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0MmQ3N2Q7XG5cbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmM0MDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDE5NiwgOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGFjMDg7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmY2EyMjtcblxuICAvKiogZGFuZ2VyICoqL1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNlYjQ0NWE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDIzNSwgNjgsIDkwO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2NmM2M0ZjsvL2ljaVxuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2VkNTc2YjtcblxuICAvKiogZGFyayAqKi9cbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODsvL2ljaVxuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMzQsIDM2LCA0MDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogIzM4M2EzZTtcblxuICAvKiogbWVkaXVtICoqL1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5Mjk0OWM7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE0NiwgMTQ4LCAxNTY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjsvL2ljaVxuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4MDgyODk7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjOWQ5ZmE2O1xuXG4gIC8qKiBsaWdodCAqKi9cbiAgLS1pb24tY29sb3ItbGlnaHQ6ICNmNGY1Zjg7Ly9pY2lcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2Y1ZjZmOTtcbn1cblxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAvKlxuICAgKiBEYXJrIENvbG9yc1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIGJvZHkge1xuICAgIC0taW9uLWNvbG9yLXByaW1hcnk6ICM0MjhjZmY7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDY2LDE0MCwyNTU7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzNhN2JlMDtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM1NTk4ZmY7XG5cbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICM1MGM4ZmY7XG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogODAsMjAwLDI1NTtcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjNDZiMGUwO1xuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNjJjZWZmO1xuXG4gICAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM2YTY0ZmY7XG4gICAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMDYsMTAwLDI1NTtcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNWQ1OGUwO1xuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM3OTc0ZmY7XG5cbiAgICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMmZkZjc1O1xuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA0NywyMjMsMTE3O1xuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOWM0Njc7XG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDRlMjgzO1xuXG4gICAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmZDUzNDtcbiAgICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LDIxMyw1MjtcbiAgICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBiYjJlO1xuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmZDk0ODtcblxuICAgIC0taW9uLWNvbG9yLWRhbmdlcjogI2ZmNDk2MTtcbiAgICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNTUsNzMsOTc7XG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAgIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2UwNDA1NTtcbiAgICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2ZmNWI3MTtcblxuICAgIC0taW9uLWNvbG9yLWRhcms6ICNmNGY1Zjg7XG4gICAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDI0NCwyNDUsMjQ4O1xuICAgIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAgIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICNkN2Q4ZGE7XG4gICAgLS1pb24tY29sb3ItZGFyay10aW50OiAjZjVmNmY5O1xuXG4gICAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTg5YWEyO1xuICAgIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE1MiwxNTQsMTYyO1xuICAgIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogIzAwMDAwMDtcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4Njg4OGY7XG4gICAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICNhMmE0YWI7XG5cbiAgICAtLWlvbi1jb2xvci1saWdodDogIzIyMjQyODtcbiAgICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDM0LDM2LDQwO1xuICAgIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gICAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICMxZTIwMjM7XG4gICAgLS1pb24tY29sb3ItbGlnaHQtdGludDogIzM4M2EzZTtcbiAgfVxuXG4gIC8qXG4gICAqIGlPUyBEYXJrIFRoZW1lXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLmlvcyBib2R5IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAwLDAsMDtcblxuICAgIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gICAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwyNTUsMjU1O1xuXG4gICAgLS1pb24tY29sb3Itc3RlcC01MDogIzBkMGQwZDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzFhMWExYTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTE1MDogIzI2MjYyNjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzMzMzMzMztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzQwNDA0MDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTMwMDogIzRkNGQ0ZDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzU5NTk1OTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzY2NjY2NjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTQ1MDogIzczNzM3MztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzgwODA4MDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzhjOGM4YztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTYwMDogIzk5OTk5OTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2E2YTZhNjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2IzYjNiMztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTc1MDogI2JmYmZiZjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2NjY2NjYztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2Q5ZDlkOTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTkwMDogI2U2ZTZlNjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YyZjJmMjtcblxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzAwMDAwMDtcblxuICAgIC0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFjMWMxZDtcbiAgfVxuXG4gIC5pb3MgaW9uLW1vZGFsIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xMDApO1xuICAgIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbiAgICAtLWlvbi10b29sYmFyLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwKTtcbiAgfVxuXG5cbiAgLypcbiAgICogTWF0ZXJpYWwgRGVzaWduIERhcmsgVGhlbWVcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAubWQgYm9keSB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMTgsMTgsMTg7XG5cbiAgICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAgIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsMjU1LDI1NTtcblxuICAgIC0taW9uLWJvcmRlci1jb2xvcjogIzIyMjIyMjtcblxuICAgIC0taW9uLWNvbG9yLXN0ZXAtNTA6ICMxZTFlMWU7XG4gICAgLS1pb24tY29sb3Itc3RlcC0xMDA6ICMyYTJhMmE7XG4gICAgLS1pb24tY29sb3Itc3RlcC0xNTA6ICMzNjM2MzY7XG4gICAgLS1pb24tY29sb3Itc3RlcC0yMDA6ICM0MTQxNDE7XG4gICAgLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0ZDRkNGQ7XG4gICAgLS1pb24tY29sb3Itc3RlcC0zMDA6ICM1OTU5NTk7XG4gICAgLS1pb24tY29sb3Itc3RlcC0zNTA6ICM2NTY1NjU7XG4gICAgLS1pb24tY29sb3Itc3RlcC00MDA6ICM3MTcxNzE7XG4gICAgLS1pb24tY29sb3Itc3RlcC00NTA6ICM3ZDdkN2Q7XG4gICAgLS1pb24tY29sb3Itc3RlcC01MDA6ICM4OTg5ODk7XG4gICAgLS1pb24tY29sb3Itc3RlcC01NTA6ICM5NDk0OTQ7XG4gICAgLS1pb24tY29sb3Itc3RlcC02MDA6ICNhMGEwYTA7XG4gICAgLS1pb24tY29sb3Itc3RlcC02NTA6ICNhY2FjYWM7XG4gICAgLS1pb24tY29sb3Itc3RlcC03MDA6ICNiOGI4Yjg7XG4gICAgLS1pb24tY29sb3Itc3RlcC03NTA6ICNjNGM0YzQ7XG4gICAgLS1pb24tY29sb3Itc3RlcC04MDA6ICNkMGQwZDA7XG4gICAgLS1pb24tY29sb3Itc3RlcC04NTA6ICNkYmRiZGI7XG4gICAgLS1pb24tY29sb3Itc3RlcC05MDA6ICNlN2U3ZTc7XG4gICAgLS1pb24tY29sb3Itc3RlcC05NTA6ICNmM2YzZjM7XG5cbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMxZTFlMWU7XG5cbiAgICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG5cbiAgICAtLWlvbi10YWItYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG5cbiAgICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxZTFlMWU7XG4gIH1cbn1cblxuLyogSW1wb3J0aW5nIEJvb3RzdHJhcCBTQ1NTIGZpbGUuICovXG4vL0BpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy9ib290c3RyYXAnO1xuIiwiQHVzZSAnLi8uLi8uLi8uLi90aGVtZS92YXJpYWJsZXMuc2NzcycgYXMgdjtcblxuLnByaW5jaXBhbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgdi4kYmxhbmM7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLkZpcnN0Q29sdW1ue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jYXJke1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5zcGFue1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogdi4kcHJpbWFyeTtcbn1cbi5pY29ue1xuICAgIGNvbG9yOiB2LiRwcmltYXJ5O1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuXG4uY2VudGVySWNvbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYm90dG9tU2hlZXR7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogLTJweDtcbiAgICBib3R0b206IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweCAzMHB4IDBweCAwcHg7XG4gICAgei1pbmRleDogMjA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdi4kYmxhbmM7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgcGFkZGluZzogMiU7XG59XG5cbi5ib3R0b21TaGVldE5hbWVEaXZ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2LiRzZWNvbmRhcnk7XG4gICAgLy8gaGVpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmc6IDFyZW0gMDtcbn1cbmJ1dHRvbntcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHYuJHByaW1hcnk7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiB2LiRibGFuYztcbn1cbi5idXR0b25Db2x1bW57XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnByaWNlUGFyYWdyYXBoZXtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgY29sb3I6IHYuJHByaW1hcnk7XG59XG4uZGVzY3JpcHRpb25QYXJhZ3JhcGhle1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogdi4kcHJpbWFyeTtcbn1cbi5tb2R1bGVEZXRhaWxze1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbn1cbi5tb2R1bGVEZXRhaWxzSWNvbntcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4ubW9kdWxlRGV0YWlsc0N1cnJlbnRuYW1le1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnByb2R1Y3RJY29uLC5wcm9kdWN0SWNvblN1bXtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogdi4kcHJpbWFyeTtcbn1cblxuLnByb2R1Y3ROYW1le1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5wYXltZW50TWVzc2FnZXtcbiAgY29sb3I6IHYuJHByaW1hcnk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbiNjb25jaWVyZ2VyaWVCb3R0b21TaGVldHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiA4cHggIWltcG9ydGFudDtcbn1cblxuLmljb25ISXN0b3JpcXVle1xuICBjb2xvcjogdi4kcHJpbWFyeTtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuIl19 */");

/***/ }),

/***/ "eMoF":
/*!*****************************************!*\
  !*** ./src/mocks/Conciergerie.mocks.ts ***!
  \*****************************************/
/*! exports provided: ConsiergerieMocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsiergerieMocks", function() { return ConsiergerieMocks; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");

/* eslint-disable max-len */

let ConsiergerieMocks = class ConsiergerieMocks {
    constructor() {
        this.conciergerie = [
            {
                id: '1',
                name: 'Famille et maison',
                icon: 'home',
                modules: [
                    {
                        id: '1',
                        name: 'Entretien de la Maison',
                        icon: 'home',
                        modules: [
                            {
                                id: '1',
                                name: 'Entretien de votre jardin',
                                icon: 'flower',
                            },
                            {
                                id: '2',
                                name: 'Bricolage & Dépannage',
                                icon: 'construct',
                            },
                            {
                                id: '1',
                                name: 'Ménage et repassage',
                                icon: 'woman',
                            },
                        ]
                    },
                    {
                        id: '2',
                        name: 'Aide à la personne',
                        icon: 'help-buoy',
                        modules: [
                            {
                                id: '1',
                                name: 'Demande de crèche',
                                icon: 'people-circle',
                            },
                            {
                                id: '2',
                                name: 'Demande de garde d\'enfant',
                                icon: 'hand-right',
                            },
                            {
                                id: '1',
                                name: 'Auxiliaire de vie',
                                icon: 'medkit',
                            },
                        ]
                    },
                ]
            },
            {
                id: '2',
                name: 'Shopping Minute',
                icon: 'cart',
                modules: [
                    {
                        id: '1',
                        name: 'Courses de proximité',
                        icon: 'bag-handle',
                        modules: [
                            {
                                id: '1',
                                name: 'Courses de proximité',
                                icon: 'bag-handle',
                                price: '0.00'
                            },
                        ]
                    },
                    {
                        id: '2',
                        name: 'constract',
                        icon: 'construct',
                        modules: [
                            {
                                id: '1',
                                name: 'Boîte de pansements',
                                icon: 'medkit',
                                price: '5.10'
                            },
                            {
                                id: '2',
                                name: 'Coupe ongle',
                                icon: 'cut',
                                price: '3.15'
                            },
                            {
                                id: '3',
                                name: 'Déodorant femme',
                                icon: 'rose',
                                price: '3.10'
                            },
                        ]
                    },
                    {
                        id: '3',
                        name: 'La Poste',
                        icon: 'mail',
                        modules: [
                            {
                                id: '1',
                                name: 'enveloppes 1KG option BAL',
                                package: 'CHRONOPOST - 13',
                                icon: 'mail-unread',
                                price: '29.00'
                            },
                            {
                                id: '2',
                                name: 'pochettes matelassées 2KG',
                                package: 'CHRONOPOST - 13',
                                icon: 'key',
                                price: '31.00'
                            },
                            {
                                id: '3',
                                name: 'Boîte emballage non affranchir',
                                package: 'COLIS',
                                icon: 'cube',
                                price: '2.35'
                            },
                            {
                                id: '4',
                                name: 'Emballage à affranchir - Boite 1 Bouteille',
                                package: 'COLISSIMO',
                                icon: 'key',
                                price: '2.00'
                            },
                        ]
                    },
                ]
            },
            {
                id: '3',
                name: 'Evénements',
                icon: 'calendar-clear',
                modules: [
                    {
                        id: '1',
                        name: 'Services',
                        icon: 'man',
                        modules: [
                            {
                                id: '1',
                                name: 'Organisation de vos fêtes et événements',
                                description: 'Vous souhaitez organiser un évènement ? Confiez-nous votre besoin. Votre concierge prend en compte votre demande et vous trouvera la meilleure solution.',
                                icon: 'calendar-clear',
                            },
                        ]
                    },
                ]
            },
            {
                id: '4',
                name: 'Loisirs et Voyages',
                icon: 'airplane',
                modules: [
                    {
                        id: '1',
                        name: 'Hébergement',
                        icon: 'cloudy',
                        modules: [
                            {
                                id: '1',
                                name: 'Réservation d\'hôtel',
                                icon: 'bed',
                            },
                        ]
                    },
                ]
            },
            {
                id: '5',
                name: 'Mobilité',
                icon: 'accessibility',
                modules: [
                    {
                        id: '1',
                        name: 'Solutions de déplacement',
                        icon: 'walk',
                        modules: [
                            {
                                id: '1',
                                name: 'Location de véhicule',
                                icon: 'car',
                            },
                        ]
                    },
                ]
            },
        ];
    }
    getAll() {
        return this.conciergerie;
    }
};
ConsiergerieMocks = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ConsiergerieMocks);



/***/ }),

/***/ "v+tq":
/*!**********************************************************************!*\
  !*** ./src/app/services/conciergerie/conciergerie-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: ConciergeriePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConciergeriePageRoutingModule", function() { return ConciergeriePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _conciergerie_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conciergerie.page */ "A2+t");




const routes = [
    {
        path: '',
        component: _conciergerie_page__WEBPACK_IMPORTED_MODULE_3__["ConciergeriePage"]
    },
    {
        path: 'conciergerie-historique',
        loadChildren: () => __webpack_require__.e(/*! import() | conciergerie-detail-conciergerie-detail-module */ "conciergerie-detail-conciergerie-detail-module").then(__webpack_require__.bind(null, /*! ./conciergerie-detail/conciergerie-detail.module */ "81FM")).then(m => m.ConciergerieDetailPageModule)
    }
];
let ConciergeriePageRoutingModule = class ConciergeriePageRoutingModule {
};
ConciergeriePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConciergeriePageRoutingModule);



/***/ }),

/***/ "vvGP":
/*!**************************************************************!*\
  !*** ./src/app/services/conciergerie/conciergerie.module.ts ***!
  \**************************************************************/
/*! exports provided: ConciergeriePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConciergeriePageModule", function() { return ConciergeriePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _conciergerie_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./conciergerie-routing.module */ "v+tq");
/* harmony import */ var _conciergerie_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conciergerie.page */ "A2+t");







let ConciergeriePageModule = class ConciergeriePageModule {
};
ConciergeriePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _conciergerie_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConciergeriePageRoutingModule"]
        ],
        declarations: [_conciergerie_page__WEBPACK_IMPORTED_MODULE_6__["ConciergeriePage"]]
    })
], ConciergeriePageModule);



/***/ })

}]);
//# sourceMappingURL=services-conciergerie-conciergerie-module.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-feed-back-feed-back-module"],{

/***/ "+ElI":
/*!***********************************************************!*\
  !*** ./src/app/services/feed-back/feed-back.component.ts ***!
  \***********************************************************/
/*! exports provided: FeedBackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedBackComponent", function() { return FeedBackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_feed_back_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./feed-back.component.html */ "8Gnv");
/* harmony import */ var _feed_back_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feed-back.component.scss */ "40Lf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _store_models_notification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/models/notification */ "98H+");
/* harmony import */ var _store_actions_notification_action__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/actions/notification-action */ "qgvm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _general_functions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../general-functions */ "EWUx");












let FeedBackComponent = class FeedBackComponent {
    constructor(fb, alertController, http, router, store) {
        this.fb = fb;
        this.alertController = alertController;
        this.http = http;
        this.router = router;
        this.store = store;
        this.backTofeedBackForm = true;
        this.activeHistoricalFeedBack = false;
        this.feedBackHistorical = [];
        this.currentDate = new Date();
        this.primary = _general_functions__WEBPACK_IMPORTED_MODULE_11__["GeneralFunctions"].primaryColor;
        this.pageInfo = { title: 'Enquête de', subTitle: 'satisfaction' };
        this.createForm();
    }
    ngOnInit() {
        this.feedBackHistorical = [
            {
                title: 'notation',
                user: 'moi',
                date: this.currentDate,
                rating: 1
            },
            {
                title: 'notation',
                user: 'moi',
                date: this.currentDate,
                rating: 3
            }
        ];
        if (!JSON.parse(localStorage.getItem('notation'))) {
            localStorage.setItem('notation', JSON.stringify(this.feedBackHistorical));
        }
        this.feedBackHistorical = JSON.parse(localStorage.getItem('notation'));
    }
    createArray(length) {
        return Array.from({ length: length }, (_, i) => i);
    }
    onRatingChange(rating, x) {
        console.log('The evaluation was modified and now its value is: ', rating, x);
        // if(x=='resolutionAnomaly'){
        //   this.resolutionAnomaly= x
        // }
        // if(x=='rapidResponse'){
        //   this.rapidResponse= x
        // }else{
        //   this.qualite = x
        // }
        // do your stuff
    }
    backtoForm() {
        this.backTofeedBackForm = true;
        this.activeHistoricalFeedBack = false;
    }
    activeHistoricalCard() {
        this.backTofeedBackForm = false;
        this.activeHistoricalFeedBack = true;
    }
    addNotification(currentRoom) {
        const newNotification = new _store_models_notification__WEBPACK_IMPORTED_MODULE_8__["Notification"]();
        newNotification.notification = currentRoom;
        this.store.dispatch(new _store_actions_notification_action__WEBPACK_IMPORTED_MODULE_9__["TodoAdd"](newNotification));
    }
    createForm() {
        this.form = this.fb.group({
            resolutionAnomaly: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            rapidResponse: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            qualityService: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: ['',]
        });
    }
    demoAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-popup',
                subHeader: '',
                message: 'Erreur champs manquants',
                buttons: [
                    {
                        text: 'Ok',
                    }
                ],
            });
            yield alert.present();
        });
    }
    sendForm() {
        let moyen = (this.form.value.resolutionAnomaly + this.form.value.rapidResponse + this.form.value.qualityService) / 3;
        console.log(moyen);
        let notification = {
            message: 'La notation que vous avez transmise a bien été prise en compte',
            service: 'Enquêtes de satisfaction',
        };
        if (!this.form.valid) {
            this.demoAlert();
        }
        else {
            this.messageAlert(moyen);
            // const header = new HttpHeaders({
            //   'Content-Type': 'application/json',
            //   'Authorization': API_KEY });
            // const options = { headers: header };
            // const url = API_URI + '/iviplay/feed-back';
            // this.http.post(url, this.form.value, options).subscribe(data => {
            //   if(data) {
            //     this.addNotification(notification);
            //     this.messageAlert();
            //     this.router.navigate(['/tabs/tab2']);
            //   }
            // });
        }
    }
    refreshPage() {
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate([currentUrl]);
        });
    }
    messageAlert(moyen) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-popup',
                subHeader: '',
                message: 'La notation que vous avez transmise a bien été prise en compte',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Ok',
                        handler: (alertData) => {
                            this.refreshPage();
                        }
                    }
                ],
            });
            yield alert.present();
            let newNotation = {
                // title:'notation '+(this.feedBackHistorical.length + 1),
                title: 'notation ',
                user: 'moi',
                date: this.currentDate,
                rating: moyen
            };
            this.feedBackHistorical.push(newNotation);
            localStorage.setItem('notation', JSON.stringify(this.feedBackHistorical));
        });
    }
};
FeedBackComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] }
];
FeedBackComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-feed-back',
        template: _raw_loader_feed_back_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_feed_back_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FeedBackComponent);



/***/ }),

/***/ "1y0E":
/*!****************************************************************!*\
  !*** ./src/app/services/feed-back/feed-back-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: FeedBackRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedBackRoutingModule", function() { return FeedBackRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _feed_back_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feed-back.component */ "+ElI");
/* harmony import */ var _feed_back_app_feed_back_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feed-back-app/feed-back-app.component */ "ElPy");





const routes = [
    {
        path: '',
        component: _feed_back_component__WEBPACK_IMPORTED_MODULE_3__["FeedBackComponent"]
    },
    {
        path: 'app',
        component: _feed_back_app_feed_back_app_component__WEBPACK_IMPORTED_MODULE_4__["FeedBackAppComponent"]
    }
];
let FeedBackRoutingModule = class FeedBackRoutingModule {
};
FeedBackRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FeedBackRoutingModule);



/***/ }),

/***/ "3G2T":
/*!********************************************************!*\
  !*** ./src/app/services/feed-back/feed-back.module.ts ***!
  \********************************************************/
/*! exports provided: FeedBackModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedBackModule", function() { return FeedBackModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _feed_back_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feed-back.component */ "+ElI");
/* harmony import */ var _feed_back_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feed-back-routing.module */ "1y0E");
/* harmony import */ var ionic5_star_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic5-star-rating */ "j7Is");
/* harmony import */ var _feed_back_app_feed_back_app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./feed-back-app/feed-back-app.component */ "ElPy");
/* harmony import */ var _components_header_two_header_two_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/header-two/header-two.component */ "NZJT");










let FeedBackModule = class FeedBackModule {
};
FeedBackModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _feed_back_routing_module__WEBPACK_IMPORTED_MODULE_6__["FeedBackRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ionic5_star_rating__WEBPACK_IMPORTED_MODULE_7__["StarRatingModule"]
        ],
        declarations: [_feed_back_component__WEBPACK_IMPORTED_MODULE_5__["FeedBackComponent"], _feed_back_app_feed_back_app_component__WEBPACK_IMPORTED_MODULE_8__["FeedBackAppComponent"], _components_header_two_header_two_component__WEBPACK_IMPORTED_MODULE_9__["HeaderTwoComponent"]]
    })
], FeedBackModule);



/***/ }),

/***/ "40Lf":
/*!*************************************************************!*\
  !*** ./src/app/services/feed-back/feed-back.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/** Ionic CSS Variables **/\n:root {\n  --color-tabs:#514e4c;\n  /** primary **/\n  --ion-color-primary: $primary;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}\n:root ion-item {\n  font-size: 14px;\n}\n@media (prefers-color-scheme: dark) {\n  /*\n   * Dark Colors\n   * -------------------------------------------\n   */\n  body {\n    --ion-color-primary: #428cff;\n    --ion-color-primary-rgb: 66,140,255;\n    --ion-color-primary-contrast: #ffffff;\n    --ion-color-primary-contrast-rgb: 255,255,255;\n    --ion-color-primary-shade: #3a7be0;\n    --ion-color-primary-tint: #5598ff;\n    --ion-color-secondary: #50c8ff;\n    --ion-color-secondary-rgb: 80,200,255;\n    --ion-color-secondary-contrast: #ffffff;\n    --ion-color-secondary-contrast-rgb: 255,255,255;\n    --ion-color-secondary-shade: #46b0e0;\n    --ion-color-secondary-tint: #62ceff;\n    --ion-color-tertiary: #6a64ff;\n    --ion-color-tertiary-rgb: 106,100,255;\n    --ion-color-tertiary-contrast: #ffffff;\n    --ion-color-tertiary-contrast-rgb: 255,255,255;\n    --ion-color-tertiary-shade: #5d58e0;\n    --ion-color-tertiary-tint: #7974ff;\n    --ion-color-success: #2fdf75;\n    --ion-color-success-rgb: 47,223,117;\n    --ion-color-success-contrast: #000000;\n    --ion-color-success-contrast-rgb: 0,0,0;\n    --ion-color-success-shade: #29c467;\n    --ion-color-success-tint: #44e283;\n    --ion-color-warning: #ffd534;\n    --ion-color-warning-rgb: 255,213,52;\n    --ion-color-warning-contrast: #000000;\n    --ion-color-warning-contrast-rgb: 0,0,0;\n    --ion-color-warning-shade: #e0bb2e;\n    --ion-color-warning-tint: #ffd948;\n    --ion-color-danger: #ff4961;\n    --ion-color-danger-rgb: 255,73,97;\n    --ion-color-danger-contrast: #ffffff;\n    --ion-color-danger-contrast-rgb: 255,255,255;\n    --ion-color-danger-shade: #e04055;\n    --ion-color-danger-tint: #ff5b71;\n    --ion-color-dark: #f4f5f8;\n    --ion-color-dark-rgb: 244,245,248;\n    --ion-color-dark-contrast: #000000;\n    --ion-color-dark-contrast-rgb: 0,0,0;\n    --ion-color-dark-shade: #d7d8da;\n    --ion-color-dark-tint: #f5f6f9;\n    --ion-color-medium: #989aa2;\n    --ion-color-medium-rgb: 152,154,162;\n    --ion-color-medium-contrast: #000000;\n    --ion-color-medium-contrast-rgb: 0,0,0;\n    --ion-color-medium-shade: #86888f;\n    --ion-color-medium-tint: #a2a4ab;\n    --ion-color-light: #222428;\n    --ion-color-light-rgb: 34,36,40;\n    --ion-color-light-contrast: #ffffff;\n    --ion-color-light-contrast-rgb: 255,255,255;\n    --ion-color-light-shade: #1e2023;\n    --ion-color-light-tint: #383a3e;\n  }\n\n  /*\n   * iOS Dark Theme\n   * -------------------------------------------\n   */\n  .ios body {\n    --ion-background-color: #000000;\n    --ion-background-color-rgb: 0,0,0;\n    --ion-text-color: #ffffff;\n    --ion-text-color-rgb: 255,255,255;\n    --ion-color-step-50: #0d0d0d;\n    --ion-color-step-100: #1a1a1a;\n    --ion-color-step-150: #262626;\n    --ion-color-step-200: #333333;\n    --ion-color-step-250: #404040;\n    --ion-color-step-300: #4d4d4d;\n    --ion-color-step-350: #595959;\n    --ion-color-step-400: #666666;\n    --ion-color-step-450: #737373;\n    --ion-color-step-500: #808080;\n    --ion-color-step-550: #8c8c8c;\n    --ion-color-step-600: #999999;\n    --ion-color-step-650: #a6a6a6;\n    --ion-color-step-700: #b3b3b3;\n    --ion-color-step-750: #bfbfbf;\n    --ion-color-step-800: #cccccc;\n    --ion-color-step-850: #d9d9d9;\n    --ion-color-step-900: #e6e6e6;\n    --ion-color-step-950: #f2f2f2;\n    --ion-item-background: #000000;\n    --ion-card-background: #1c1c1d;\n  }\n\n  .ios ion-modal {\n    --ion-background-color: var(--ion-color-step-100);\n    --ion-toolbar-background: var(--ion-color-step-150);\n    --ion-toolbar-border-color: var(--ion-color-step-250);\n  }\n\n  /*\n   * Material Design Dark Theme\n   * -------------------------------------------\n   */\n  .md body {\n    --ion-background-color: #121212;\n    --ion-background-color-rgb: 18,18,18;\n    --ion-text-color: #ffffff;\n    --ion-text-color-rgb: 255,255,255;\n    --ion-border-color: #222222;\n    --ion-color-step-50: #1e1e1e;\n    --ion-color-step-100: #2a2a2a;\n    --ion-color-step-150: #363636;\n    --ion-color-step-200: #414141;\n    --ion-color-step-250: #4d4d4d;\n    --ion-color-step-300: #595959;\n    --ion-color-step-350: #656565;\n    --ion-color-step-400: #717171;\n    --ion-color-step-450: #7d7d7d;\n    --ion-color-step-500: #898989;\n    --ion-color-step-550: #949494;\n    --ion-color-step-600: #a0a0a0;\n    --ion-color-step-650: #acacac;\n    --ion-color-step-700: #b8b8b8;\n    --ion-color-step-750: #c4c4c4;\n    --ion-color-step-800: #d0d0d0;\n    --ion-color-step-850: #dbdbdb;\n    --ion-color-step-900: #e7e7e7;\n    --ion-color-step-950: #f3f3f3;\n    --ion-item-background: #1e1e1e;\n    --ion-toolbar-background: #1f1f1f;\n    --ion-tab-bar-background: #1f1f1f;\n    --ion-card-background: #1e1e1e;\n  }\n}\n/* Importing Bootstrap SCSS file. */\n.principal {\n  background-color: white;\n  height: 100%;\n}\nion-card {\n  border-radius: 25px;\n  max-height: 27rem;\n  padding: 0.5rem;\n  margin-bottom: 0;\n}\nform {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n}\ntextarea {\n  background-color: #f3f3f3;\n  border-radius: 10px;\n  width: 100%;\n  margin-top: 0.5rem;\n  border: 1px solid #f3f3f3;\n}\n.historicalNotationCard {\n  overflow-y: scroll;\n  border-radius: 25px;\n  padding: 0rem;\n  max-height: 25rem;\n}\nspan {\n  font-size: 20px;\n  color: #514e4c;\n}\n.title {\n  font-size: 14px;\n}\n.col1 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.serviceTitle {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n.historiqueColumn {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.span {\n  color: var(--ion-color-dark);\n  font-size: 14px;\n}\n.icon, .iconHistorique {\n  color: #514e4c;\n  font-size: 35px;\n}\ntextarea::-webkit-input-placeholder {\n  padding-left: 13px;\n}\ntextarea::-moz-input-placeholder {\n  padding-left: 13px;\n}\ntextarea:-moz-input-placeholder {\n  padding-left: 13px;\n}\ntextarea:-ms-input-placeholder {\n  padding-left: 13px;\n}\nspan {\n  font-size: 20px;\n  color: #514e4c;\n}\n.span {\n  color: var(--ion-color-dark);\n  font-size: 14px;\n}\ntextarea {\n  width: 90%;\n  padding: 0.5rem;\n  height: 8rem;\n}\n.inputCard {\n  width: 100%;\n  padding: 3px;\n  margin-top: 3%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.button {\n  width: 50%;\n  height: 30px;\n  border-radius: 25px;\n  font-size: 16px;\n  background-color: #514e4c;\n  color: white;\n  margin-top: 0.5rem;\n}\n.icon2 {\n  color: #514e4c;\n  font-size: 30px;\n}\n.colLeft {\n  text-align: center;\n  height: 50px;\n}\n.colRight {\n  text-align: center;\n  height: 70px;\n}\n.titlegrid {\n  background-color: var(--ion-color-light);\n}\nbutton {\n  width: 50%;\n  height: 30px;\n  border-radius: 25px;\n  font-size: 16px;\n  background-color: #514e4c;\n  color: white;\n}\n.notationColumn {\n  display: flex;\n  flex-direction: column;\n  text-align: start;\n}\n.notationSpan {\n  font-size: 17px;\n  color: #514e4c;\n}\n.notationDate {\n  font-size: 14px;\n  color: #514e4c;\n}\n.iconHistorique {\n  color: #514e4c;\n  font-size: 30px;\n}\nion-card {\n  border-radius: 20px;\n}\n.comment-section, .info-salle {\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 16px;\n  height: 130px;\n  border-radius: 17px;\n}\n.commentaire {\n  height: 60px;\n}\n.info-salle {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 12px;\n}\n.center-title {\n  padding: 6px;\n  width: 66%;\n}\n.star-icon {\n  font-size: 15px;\n}\n.rating-bloc {\n  margin-left: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vZmVlZC1iYWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLDBCQUFBO0FBS0E7RUFFRSxvQkFBQTtFQU1FLGNBQUE7RUFDRiw2QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0Esc0NBQUE7RUFDQSxnREFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QUNyQkY7QURwREU7RUFDSSxlQUFBO0FDc0ROO0FEcUJBO0VBQ0U7OztJQUFBO0VBS0E7SUFDRSw0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TjtBQWxOQTtFQUNFLGVBQUE7QUFxTkY7QUFuTkE7RUFDRSxnQkFBQTtBQXNORiIsImZpbGUiOiJmZWVkLWJhY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmcuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6XG4vLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9cblxuXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cbiRzZWNvbmRhcnktY29sOnJnYigyNDMsIDI0MywgMjQzKTtcbiRzZWNvbmRhcnk6cmdiKDI0MywgMjQzLCAyNDMpIDtcbiRibGFuYzpyZ2JhKDI1NSwyNTUsMjU1KTtcbiRwcmltYXJ5OiM1MTRlNGM7XG46cm9vdCB7XG5cbiAgLS1jb2xvci10YWJzOiM1MTRlNGM7XG5cblxuICBpb24taXRlbSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgICAvKiogcHJpbWFyeSAqKi9cbiAgLS1pb24tY29sb3ItcHJpbWFyeTogJHByaW1hcnk7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA1NiwgMTI4LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjMzE3MWUwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM0YzhkZmY7XG5cbiAgLyoqIHNlY29uZGFyeSAqKi9cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjM2RjMmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA2MSwgMTk0LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjMzZhYmUwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzUwYzhmZjtcblxuICAvKiogdGVydGlhcnkgKiovXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNTI2MGZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDgyLCA5NiwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzQ4NTRlMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzYzNzBmZjtcblxuICAvKiogc3VjY2VzcyAqKi9cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzJkZDM2ZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ1LCAyMTEsIDExMTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOGJhNjI7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQyZDc3ZDtcblxuICAvKiogd2FybmluZyAqKi9cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmYzQwOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMTk2LCA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYWMwODtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZjYTIyO1xuXG4gIC8qKiBkYW5nZXIgKiovXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ViNDQ1YTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjM1LCA2OCwgOTA7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjY2YzYzRmOy8vaWNpXG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZWQ1NzZiO1xuXG4gIC8qKiBkYXJrICoqL1xuICAtLWlvbi1jb2xvci1kYXJrOiAjMjIyNDI4Oy8vaWNpXG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAzNCwgMzYsIDQwO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xuXG4gIC8qKiBtZWRpdW0gKiovXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzkyOTQ5YztcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTQ2LCAxNDgsIDE1NjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmOy8vaWNpXG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzgwODI4OTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICM5ZDlmYTY7XG5cbiAgLyoqIGxpZ2h0ICoqL1xuICAtLWlvbi1jb2xvci1saWdodDogI2Y0ZjVmODsvL2ljaVxuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xufVxuXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gIC8qXG4gICAqIERhcmsgQ29sb3JzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgYm9keSB7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeTogIzQyOGNmZjtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNjYsMTQwLDI1NTtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjM2E3YmUwO1xuICAgIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzU1OThmZjtcblxuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzUwYzhmZjtcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA4MCwyMDAsMjU1O1xuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICM0NmIwZTA7XG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM2MmNlZmY7XG5cbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzZhNjRmZjtcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDEwNiwxMDAsMjU1O1xuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gICAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM1ZDU4ZTA7XG4gICAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzc5NzRmZjtcblxuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyZmRmNzU7XG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ3LDIyMywxMTc7XG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcbiAgICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI5YzQ2NztcbiAgICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0NGUyODM7XG5cbiAgICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZkNTM0O1xuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsMjEzLDUyO1xuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGJiMmU7XG4gICAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkOTQ4O1xuXG4gICAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZmY0OTYxO1xuICAgIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI1NSw3Myw5NztcbiAgICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZTA0MDU1O1xuICAgIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZmY1YjcxO1xuXG4gICAgLS1pb24tY29sb3ItZGFyazogI2Y0ZjVmODtcbiAgICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMjQ0LDI0NSwyNDg7XG4gICAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogIzAwMDAwMDtcbiAgICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gICAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogI2Q3ZDhkYTtcbiAgICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICNmNWY2Zjk7XG5cbiAgICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XG4gICAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTUyLDE1NCwxNjI7XG4gICAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAgIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAgIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzg2ODg4ZjtcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcblxuICAgIC0taW9uLWNvbG9yLWxpZ2h0OiAjMjIyNDI4O1xuICAgIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMzQsMzYsNDA7XG4gICAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogIzFlMjAyMztcbiAgICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjMzgzYTNlO1xuICB9XG5cbiAgLypcbiAgICogaU9TIERhcmsgVGhlbWVcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAuaW9zIGJvZHkge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsMCwwO1xuXG4gICAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LDI1NSwyNTU7XG5cbiAgICAtLWlvbi1jb2xvci1zdGVwLTUwOiAjMGQwZDBkO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMTAwOiAjMWExYTFhO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMjYyNjI2O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjMzMzMzMzO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMjUwOiAjNDA0MDQwO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNGQ0ZDRkO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNTk1OTU5O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNDAwOiAjNjY2NjY2O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjNzM3MzczO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODA4MDgwO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNTUwOiAjOGM4YzhjO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjOTk5OTk5O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYTZhNmE2O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNzAwOiAjYjNiM2IzO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYmZiZmJmO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtODAwOiAjY2NjY2NjO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZDlkOWQ5O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTZlNmU2O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjJmMmYyO1xuXG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuXG4gICAgLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiAjMWMxYzFkO1xuICB9XG5cbiAgLmlvcyBpb24tbW9kYWwge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCk7XG4gICAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTApO1xuICAgIC0taW9uLXRvb2xiYXItYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yNTApO1xuICB9XG5cblxuICAvKlxuICAgKiBNYXRlcmlhbCBEZXNpZ24gRGFyayBUaGVtZVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC5tZCBib2R5IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAxOCwxOCwxODtcblxuICAgIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gICAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwyNTUsMjU1O1xuXG4gICAgLS1pb24tYm9yZGVyLWNvbG9yOiAjMjIyMjIyO1xuXG4gICAgLS1pb24tY29sb3Itc3RlcC01MDogIzFlMWUxZTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzJhMmEyYTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTE1MDogIzM2MzYzNjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzQxNDE0MTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzRkNGQ0ZDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTMwMDogIzU5NTk1OTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzY1NjU2NTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzcxNzE3MTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTQ1MDogIzdkN2Q3ZDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzg5ODk4OTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzk0OTQ5NDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTYwMDogI2EwYTBhMDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2FjYWNhYztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2I4YjhiODtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTc1MDogI2M0YzRjNDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2QwZDBkMDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2RiZGJkYjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTkwMDogI2U3ZTdlNztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YzZjNmMztcblxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzFlMWUxZTtcblxuICAgIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogIzFmMWYxZjtcblxuICAgIC0taW9uLXRhYi1iYXItYmFja2dyb3VuZDogIzFmMWYxZjtcblxuICAgIC0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFlMWUxZTtcbiAgfVxufVxuXG4vKiBJbXBvcnRpbmcgQm9vdHN0cmFwIFNDU1MgZmlsZS4gKi9cbi8vQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL2Jvb3RzdHJhcCc7XG4iLCJAdXNlICcuLi8uLi8uLi90aGVtZS92YXJpYWJsZXMnIGFzIHY7XG5cbi5wcmluY2lwYWx7XG4gIGJhY2tncm91bmQtY29sb3I6ICB2LiRibGFuYztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuaW9uLWNhcmR7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIG1heC1oZWlnaHQ6IDI3cmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5mb3Jte1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50ZXh0YXJlYXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIHYuJHNlY29uZGFyeTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdi4kc2Vjb25kYXJ5IDtcbn1cbi5oaXN0b3JpY2FsTm90YXRpb25DYXJke1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHBhZGRpbmc6IDByZW07XG4gIG1heC1oZWlnaHQ6IDI1cmVtO1xuXG59XG5zcGFue1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB2LiRwcmltYXJ5O1xufVxuLnRpdGxle1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY29sMXtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2VydmljZVRpdGxle1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oaXN0b3JpcXVlQ29sdW1ue1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNwYW57XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5pY29uLC5pY29uSGlzdG9yaXF1ZXtcbiAgY29sb3I6IHYuJHByaW1hcnk7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cbnRleHRhcmVhOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAxM3B4O1xufVxuXG50ZXh0YXJlYTo6LW1vei1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIHBhZGRpbmctbGVmdDogMTNweDtcbn1cblxudGV4dGFyZWE6LW1vei1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIHBhZGRpbmctbGVmdDogMTNweDtcbn1cblxudGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAxM3B4O1xufVxuc3BhbntcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogdi4kcHJpbWFyeTtcbn1cbi5zcGFue1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBmb250LXNpemU6IDE0cHg7XG59XG50ZXh0YXJlYXtcbiAgd2lkdGg6IDkwJTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBoZWlnaHQ6IDhyZW07XG59XG4uaW5wdXRDYXJke1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogM3B4O1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5idXR0b257XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2LiRwcmltYXJ5O1xuICBjb2xvcjogdi4kYmxhbmM7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cbi5pY29uMntcbiAgY29sb3I6IHYuJHByaW1hcnk7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmNvbExlZnR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OjUwcHg7XG59XG4uY29sUmlnaHR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OjcwcHg7XG59XG4udGl0bGVncmlke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoIC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuYnV0dG9ue1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdi4kcHJpbWFyeTtcbiAgY29sb3I6IHYuJGJsYW5jO1xufVxuLm5vdGF0aW9uQ29sdW1ue1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cbi5ub3RhdGlvblNwYW57XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6IHYuJHByaW1hcnk7XG59XG4ubm90YXRpb25EYXRle1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2LiRwcmltYXJ5O1xufVxuXG4uaWNvbkhpc3RvcmlxdWV7XG4gIGNvbG9yOiB2LiRwcmltYXJ5O1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIC5kaXZpZGVye1xuICAgIC8vICAgYmFja2dyb3VuZDogdi4kc2Vjb25kYXJ5LWNvbDtcbiAgICAvLyAgIGhlaWdodDogMnB4O1xuICAgIC8vICAgd2lkdGg6IDUwJTtcbiAgICAvLyAgIG1hcmdpbjogMnB4IGF1dG87XG4gICAgLy8gfVxuXG5cbiAgICBpb24tY2FyZHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcblxuICAgIH1cblxuICAgIC5jb21tZW50LXNlY3Rpb24sIC5pbmZvLXNhbGxle1xuICAgICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMTIlKSAwcHggNHB4IDE2cHg7XG4gICAgICBoZWlnaHQ6IDEzMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTdweDtcbiAgICB9XG5cbiAgICAuY29tbWVudGFpcmV7XG4gICAgICBoZWlnaHQ6IDYwcHg7XG5cbiAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgICB9XG5cbiAgICAuaW5mby1zYWxsZXtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIH1cblxuICAgIC5jZW50ZXItdGl0bGV7XG4gICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICB3aWR0aDogNjYlO1xuICAgIH1cblxuXG4uc3Rhci1pY29ue1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ucmF0aW5nLWJsb2N7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "8Gnv":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/feed-back/feed-back.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <!-- <app-header-two [routeName]=\"pageInfo\"></app-header-two> -->\n  <div class=\"principal\" id=\"principal\">\n    <ion-grid >\n      <ion-row class=\"rowFirst\" >\n        <ion-col size=\"3\" *ngIf=\"backTofeedBackForm\" routerLink=\"/tabs/tab1\">\n          <ion-icon class=\"icon\" name=\"chevron-back-outline\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"3\" *ngIf=\"activeHistoricalFeedBack\"(click)=\"backtoForm()\">\n          <ion-icon class=\"icon\" name=\"chevron-back-outline\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"6\" class=\"serviceTitle\" >\n          <span class=\"title\" >Enquêtes de</span>\n          <span >satisfaction</span>\n        </ion-col>\n        <ion-col   class=\"historiqueColumn\"    size=\"3\" *ngIf=\"backTofeedBackForm\" (click)=\"activeHistoricalCard()\"  >\n          <ion-icon class=\"icon\"  name=\"time-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"sendForm()\">\n      <ion-card *ngIf=\"backTofeedBackForm\">\n        <div class=\"\">\n          <ion-item lines=\"none\" >\n            <ion-icon name=\"calendar-clear-outline\"></ion-icon>\n            <div class=\"center-title\">\n              <p class=\"list-lab\" ><strong>Maintenance</strong> <br> Résolution de l'anomalie </p>\n            </div>\n            <div class=\"ion-text-center\">\n              <ionic5-star-rating\n                #rating\n                activeColor=\"{{ primary }}\"\n                defaultColor=\"{{ primary }}\"\n                readonly=\"false\"\n                fontSize=\"15px\"\n                formControlName=\"resolutionAnomaly\"\n                (ratingChanged)=\"onRatingChange($event,'resolutionAnomaly')\"\n              >\n              </ionic5-star-rating>\n            </div>\n          </ion-item>\n          <div class=\"divider\"></div>\n        </div>\n\n        <div class=\"\">\n          <ion-item lines=\"none\" >\n            <ion-icon name=\"calendar-clear-outline\"></ion-icon>\n            <div class=\"center-title\">\n              <p class=\"list-lab\"> <strong>Maintenance</strong> <br> Rapidité de l'intervention </p>\n            </div>\n            <div class=\"ion-text-center\">\n              <ionic5-star-rating\n                #rating\n                activeColor=\"{{ primary }}\"\n                defaultColor=\"{{ primary }}\"\n                readonly=\"false\"\n                fontSize=\"15px\"\n                formControlName=\"rapidResponse\"\n                (ratingChanged)=\"onRatingChange($event, 'rapidResponse')\"\n              >\n              </ionic5-star-rating>\n            </div>\n          </ion-item>\n          <div class=\"divider\"></div>\n        </div>\n\n        <div class=\"\">\n          <ion-item lines=\"none\" >\n            <ion-icon name=\"calendar-clear-outline\"></ion-icon>\n            <div class=\"center-title\">\n              <p class=\"list-lab\"> <strong>Maintenance</strong> <br> Qualité de la prestation </p>\n            </div>\n            <div class=\"ion-text-center\">\n              <ionic5-star-rating\n                #rating\n                activeColor=\"{{ primary }}\"\n                defaultColor=\"{{ primary }}\"\n                readonly=\"false\"\n                fontSize=\"15px\"\n                formControlName=\"qualityService\"\n                (ratingChanged)=\"onRatingChange($event,'qualite')\"\n              >\n              </ionic5-star-rating>\n            </div>\n          </ion-item>\n          <div class=\"divider\"></div>\n        </div>\n\n\n        <!-- <div class=\"inputCard\">\n          <button>Envoyer</button>\n        </div> -->\n      </ion-card>\n      <!-- <ion-card *ngIf=\"backTofeedBackForm\">\n        <ion-searchbar placeholder=\"Saisir un titre\"></ion-searchbar>\n        <textarea\n        name=\"\"\n        id=\"\"\n        cols=\"30\"\n        rows=\"10\"\n        placeholder=\"Ajouter un commentaire\"\n        formControlName=\"description\"\n      ></textarea>\n\n      </ion-card> -->\n\n      <!-- <ion-card class=\"info-salle\" >\n        Cliquez sur les étoiles pour donner une appréciation.\n      </ion-card> -->\n      <ion-card>\n        <div *ngIf=\"backTofeedBackForm\" class=\"inputCard\">\n          <button>Envoyer</button>\n        </div>\n      </ion-card>a\n\n    </form>\n    <ion-card *ngIf=\"activeHistoricalFeedBack\" class=\"historicalNotationCard\">\n      <ion-list lines=\"none\" *ngFor=\"let notation of feedBackHistorical\">\n        <div class=\"\">\n          <ion-item>\n            <ion-icon class=\"icon\" name=\"thumbs-up-outline\"></ion-icon>\n            <div class=\"center-title\">\n              <p class=\"list-lab\">\n                <strong>{{ notation.title }}</strong>\n<!--                <span *ngIf=\"notation.rating\" class=\"rating-bloc\">-->\n<!--                  <ion-icon class=\"star-icon\" *ngFor=\"let rating of createArray(notation.rating)\" name=\"star-outline\"></ion-icon>-->\n<!--                </span>-->\n                <br> {{ notation.user }}\n                <br> date : {{ notation.date | date : \"d/MM/YYYY HH:mm \" }}\n              </p>\n            </div>\n          </ion-item>\n          <div class=\"divider\"></div>\n        </div>\n      </ion-list>\n    </ion-card>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "ElPy":
/*!*****************************************************************************!*\
  !*** ./src/app/services/feed-back/feed-back-app/feed-back-app.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FeedBackAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedBackAppComponent", function() { return FeedBackAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_feed_back_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./feed-back-app.component.html */ "XEvM");
/* harmony import */ var _feed_back_app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feed-back-app.component.scss */ "a827");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _store_models_notification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../store/models/notification */ "98H+");
/* harmony import */ var _store_actions_notification_action__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../store/actions/notification-action */ "qgvm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "l7P3");












let FeedBackAppComponent = class FeedBackAppComponent {
    constructor(fb, http, alertController, router, store) {
        this.fb = fb;
        this.http = http;
        this.alertController = alertController;
        this.router = router;
        this.store = store;
        this.createForm();
    }
    ngOnInit() { }
    addNotification(currentRoom) {
        const newNotification = new _store_models_notification__WEBPACK_IMPORTED_MODULE_9__["Notification"]();
        newNotification.notification = currentRoom;
        this.store.dispatch(new _store_actions_notification_action__WEBPACK_IMPORTED_MODULE_10__["TodoAdd"](newNotification));
    }
    createForm() {
        this.form = this.fb.group({
            feed: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    demoAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-popup',
                subHeader: '',
                message: 'Erreur champs manquants',
                buttons: [
                    {
                        text: 'Ok',
                    }
                ],
            });
            yield alert.present();
        });
    }
    sendForm() {
        let notification = {
            message: 'La notation que vous avez transmise a bien été prise en compte',
            service: 'Enquêtes de satisfaction',
        };
        if (!this.form.valid) {
            this.demoAlert();
        }
        else {
            const header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': _environments_environment__WEBPACK_IMPORTED_MODULE_8__["API_KEY"]
            });
            const options = { headers: header };
            const url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["API_URI"] + '/iviplay/feed-back/app';
            this.http.post(url, this.form.value, options).subscribe(data => {
                if (data) {
                    this.addNotification(notification);
                    this.messageAlert();
                    this.router.navigate(['/tabs/tab2']);
                }
            });
        }
    }
    messageAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-popup',
                subHeader: '',
                message: 'La notation que vous avez transmise a bien été prise en compte',
                buttons: [
                    {
                        text: 'Ok',
                    }
                ],
            });
            yield alert.present();
        });
    }
};
FeedBackAppComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["Store"] }
];
FeedBackAppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-feed-back-app',
        template: _raw_loader_feed_back_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_feed_back_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FeedBackAppComponent);



/***/ }),

/***/ "XEvM":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/feed-back/feed-back-app/feed-back-app.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"principal\">\n    <a routerLink=\"/tabs/tab2\">\n      <ion-icon class=\"reservation\" name=\"chevron-back-outline\"></ion-icon>\n    </a>\n    <span  class=\"spanStart\" >Enquête de satisfaction</span>\n  <ion-card>\n    <ion-content padding #content class=\"has-footer\" has-bouncing=\"true\">\n      <form [formGroup]=\"form\" (ngSubmit)=\"sendForm()\">\n\n        <div class=\"form-group\" style=\"padding: 10px\">\n          <label>Note</label>\n          <ionic5-star-rating #rating\n                              activeColor = \"#514e4c\"\n                              defaultColor = \"#514e4c\"\n                              readonly = \"false\"\n                              fontSize = \"32px\"\n                              formControlName=\"feed\">\n          </ionic5-star-rating>\n        </div>\n\n        <div class=\"form-group\" style=\"padding: 10px\">\n          <textarea rows=\"5\" cols=\"45\" class=\"text\" placeholder=\"Ajouter un commentaire\" formControlName=\"description\"></textarea>\n        </div>\n\n        <div class=\"ion-text-center\">\n          <ion-button type=\"ngSubmit\" color=\"dark\" shape=\"round\">Envoyer</ion-button>\n        </div>\n      </form>\n    </ion-content>\n  </ion-card>\n  </div>\n</ion-content>\n\n");

/***/ }),

/***/ "a827":
/*!*******************************************************************************!*\
  !*** ./src/app/services/feed-back/feed-back-app/feed-back-app.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/***/ }),

/***/ "j7Is":
/*!*************************************************************************************!*\
  !*** ./node_modules/ionic5-star-rating/__ivy_ngcc__/fesm2015/ionic5-star-rating.js ***!
  \*************************************************************************************/
/*! exports provided: StarRating, StarRatingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRating", function() { return StarRating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRatingModule", function() { return StarRatingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





/**
 * @fileoverview added by tsickle
 * Generated from: lib/ionic5-star-rating.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */




const _c0 = function (a0, a1) { return { "width": a0, "height": a1 }; };
const _c1 = function (a0, a1) { return { "color": a0, "font-size": a1 }; };
function StarRating_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StarRating_button_1_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.changeRating($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", index_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx_r0.fontSize, ctx_r0.fontSize));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", ctx_r0.halfStar === "true" && ctx_r0.rating - index_r1 > 0 && ctx_r0.rating - index_r1 <= 0.5 ? ctx_r0.halfIcon : index_r1 < ctx_r0.Math.round(ctx_r0.parseFloat(ctx_r0.rating)) ? ctx_r0.activeIcon : ctx_r0.defaultIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c1, index_r1 < ctx_r0.Math.round(ctx_r0.parseFloat(ctx_r0.rating)) ? ctx_r0.activeColor : ctx_r0.defaultColor, ctx_r0.fontSize));
} }
const HTML_TEMPLATE = `
<div class="ionic5-star-rating">
  <button [ngStyle]="{'width' : fontSize, 'height' : fontSize}" *ngFor="let index of iconsArray" id="{{index}}" type="button" ion-button icon-only (click)="changeRating($event)">
    <ion-icon [ngStyle]="{'color':index < this.Math.round(this.parseFloat(rating)) ? activeColor : defaultColor, 'font-size' : fontSize }" name="{{(halfStar ==='true' && (rating - index > 0) && (rating - index <= 0.5)) ? halfIcon : (index < this.Math.round(this.parseFloat(rating))) ? activeIcon : defaultIcon}}"></ion-icon>
  </button>
</div>
`;
/** @type {?} */
const CSS_STYLE = `
    .ionic5-star-rating button {
        background: none;
        box-shadow: none;
        -webkit-box-shadow: none;
        padding : 0px;
    }
`;
class StarRating {
    constructor() {
        this.ratingChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.readonly = "false";
        this.activeColor = '#488aff';
        this.defaultColor = '#aaaaaa';
        this.activeIcon = 'star';
        this.defaultIcon = 'star-outline';
        this.halfIcon = 'star-half';
        this.halfStar = "false";
        this.maxRating = 5;
        this.fontSize = '28px';
        this.iconsArray = [];
        this.Math = Math;
        this.parseFloat = parseFloat;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.rating = this.rating || 3; //default after input`s initialization
        for (var i = 0; i < this.maxRating; i++) {
            this.iconsArray.push(i);
        }
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        this.rating = obj;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.readonly = isDisabled ? "true" : "false";
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set rating(val) {
        this._rating = val;
        // for form
        if (this.onChange) {
            this.onChange(val);
        }
    }
    /**
     * @return {?}
     */
    get rating() {
        return this._rating;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeRating(event) {
        if (this.readonly && this.readonly === "true")
            return;
        // event is different for firefox and chrome
        /** @type {?} */
        let id = event.target.id ? parseInt(event.target.id) : parseInt(event.target.parentElement.id);
        if (this.halfStar && this.halfStar === "true") {
            this.rating = ((this.rating - id > 0) && (this.rating - id <= 0.5)) ? id + 1 : id + .5;
        }
        else {
            this.rating = id + 1;
        }
        // unique event
        this.ratingChanged.emit(this.rating);
    }
}
StarRating.ɵfac = function StarRating_Factory(t) { return new (t || StarRating)(); };
StarRating.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StarRating, selectors: [["ionic5-star-rating"]], inputs: { readonly: "readonly", activeColor: "activeColor", defaultColor: "defaultColor", activeIcon: "activeIcon", defaultIcon: "defaultIcon", halfIcon: "halfIcon", halfStar: "halfStar", maxRating: "maxRating", fontSize: "fontSize", rating: "rating" }, outputs: { ratingChanged: "ratingChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: StarRating,
                multi: true
            }
        ])], decls: 2, vars: 1, consts: [[1, "ionic5-star-rating"], ["type", "button", "ion-button", "", "icon-only", "", 3, "ngStyle", "id", "click", 4, "ngFor", "ngForOf"], ["type", "button", "ion-button", "", "icon-only", "", 3, "ngStyle", "id", "click"], [3, "ngStyle", "name"]], template: function StarRating_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StarRating_button_1_Template, 2, 10, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.iconsArray);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"]], styles: [".ionic5-star-rating[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n        background: none;\n        box-shadow: none;\n        -webkit-box-shadow: none;\n        padding : 0px;\n    }"] });
/** @nocollapse */
StarRating.ctorParameters = () => [];
StarRating.propDecorators = {
    rating: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    ratingChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    activeColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    defaultColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    activeIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    defaultIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    halfIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    halfStar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxRating: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    fontSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StarRating, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ionic5-star-rating',
                template: HTML_TEMPLATE,
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: StarRating,
                        multi: true
                    }
                ],
                styles: [CSS_STYLE]
            }]
    }], function () { return []; }, { ratingChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activeColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], defaultColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activeIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], defaultIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], halfIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], halfStar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxRating: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fontSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rating: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ionic5-star-rating.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StarRatingModule {
}
StarRatingModule.ɵfac = function StarRatingModule_Factory(t) { return new (t || StarRatingModule)(); };
StarRatingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StarRatingModule });
StarRatingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StarRatingModule, { declarations: function () { return [StarRating]; }, imports: function () { return [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]; }, exports: function () { return [StarRating]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StarRatingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [StarRating],
                imports: [
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
                ],
                exports: [StarRating]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ionic5-star-rating.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ionic5-star-rating.js.map

/***/ })

}]);
//# sourceMappingURL=services-feed-back-feed-back-module.js.map
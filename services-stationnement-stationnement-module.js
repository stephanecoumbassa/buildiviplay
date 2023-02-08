(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-stationnement-stationnement-module"],{

/***/ "6Nro":
/*!****************************************************************!*\
  !*** ./src/app/services/stationnement/stationnement.module.ts ***!
  \****************************************************************/
/*! exports provided: StationnementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationnementPageModule", function() { return StationnementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _stationnement_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stationnement-routing.module */ "EOYL");
/* harmony import */ var _stationnement_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stationnement.page */ "HVVn");







let StationnementPageModule = class StationnementPageModule {
};
StationnementPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _stationnement_routing_module__WEBPACK_IMPORTED_MODULE_5__["StationnementPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_stationnement_page__WEBPACK_IMPORTED_MODULE_6__["StationnementPage"]]
    })
], StationnementPageModule);



/***/ }),

/***/ "EOYL":
/*!************************************************************************!*\
  !*** ./src/app/services/stationnement/stationnement-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: StationnementPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationnementPageRoutingModule", function() { return StationnementPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _stationnement_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stationnement.page */ "HVVn");




const routes = [
    {
        path: '',
        component: _stationnement_page__WEBPACK_IMPORTED_MODULE_3__["StationnementPage"]
    }
];
let StationnementPageRoutingModule = class StationnementPageRoutingModule {
};
StationnementPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StationnementPageRoutingModule);



/***/ }),

/***/ "HVVn":
/*!**************************************************************!*\
  !*** ./src/app/services/stationnement/stationnement.page.ts ***!
  \**************************************************************/
/*! exports provided: StationnementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationnementPage", function() { return StationnementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_stationnement_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./stationnement.page.html */ "m5on");
/* harmony import */ var _stationnement_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stationnement.page.scss */ "LZYy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/core */ "1Bn7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _stationnement_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stationnement.service */ "KfUI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_store_models_notification__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/store/models/notification */ "98H+");
/* harmony import */ var _store_actions_notification_action__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../store//actions/notification-action */ "qgvm");












let StationnementPage = class StationnementPage {
    constructor(parkingService, fb, navigateController, alertController, router, store) {
        this.parkingService = parkingService;
        this.fb = fb;
        this.navigateController = navigateController;
        this.alertController = alertController;
        this.router = router;
        this.store = store;
        this.parkings = [];
        this.isBottomSheetOpened = false;
        this.localstorageReservations = [];
        this.parkingHistorical = [];
        this.showMap = false;
        this.showReservationsContent = true;
    }
    initializeForm() {
        this.bookingForm = this.fb.group({
            dateStart: '',
            dateEnd: '',
            references: this.fb.array([this.fb.control('')])
        });
    }
    storeReservations(reservations) {
        localStorage.setItem('stationnement', JSON.stringify(reservations));
    }
    sendReservationForm() {
        let reservation = {
            beginDate: this.bookingForm.value.dateStart,
            endDate: this.bookingForm.value.dateEnd,
            reservationId: this.currentParking.id
        };
        let notification = {
            name: this.currentParking.name,
            beginDate: this.bookingForm.value.dateStart,
            endDate: this.bookingForm.value.dateEnd,
            message: 'réservation reussite',
            service: 'Stationnement',
        };
        let currentParkingEndDate = new Date(this.currentParking.dateFin);
        let currentParkingbeginDate = new Date(this.currentParking.dateDebut);
        let bookingEndDate = new Date(this.bookingForm.value.dateEnd);
        let bookingBeginDate = new Date(this.bookingForm.value.dateStart);
        if (this.currentParking.dateFin == '' && this.currentParking.status == 'Libre') {
            if (bookingBeginDate < this.currentDate || bookingEndDate < this.currentDate) {
                this.reservationAlert('Le créneau sélectionné est passé.');
            }
            else if (bookingEndDate < bookingBeginDate) {
                this.reservationAlert('Le créneau selectionné n\'est pas valide ');
            }
            else {
                this.openPayementBottomSheet(reservation, this.localstorageReservations, 'Réservation validée');
                // this.sendDataToStorage(reservation,this.localstorageReservations,'Réservation validée');
                this.addNotification(notification);
            }
        }
        else {
            if (currentParkingEndDate > bookingEndDate && currentParkingEndDate > this.currentDate && currentParkingbeginDate <= this.currentDate) {
                this.reservationAlert('Réservation impossible. La salle est occupé sur le créneau choisi');
            }
            else if (currentParkingbeginDate > bookingEndDate && currentParkingEndDate > this.currentDate && currentParkingbeginDate <= this.currentDate) {
                this.reservationAlert('Réservation impossible. La salle est occupé sur le créneau choisi');
            }
            else if (bookingBeginDate > currentParkingEndDate && bookingEndDate <= bookingBeginDate) {
                this.reservationAlert('Le créneau selectionné n\'est pas valide');
            }
            else if (bookingBeginDate > bookingEndDate) {
                this.reservationAlert('Le créneau selectionné n\'est pas valide');
            }
            else if (bookingBeginDate < this.currentDate || bookingBeginDate < this.currentDate) {
                this.reservationAlert('Le créneau sélectionné est passé.');
            }
            else {
                this.localstorageReservations.map((reservations, index) => {
                    let beginReservationDate = new Date(reservations.beginDate);
                    let endReservationDate = new Date(reservations.endDate);
                    if (beginReservationDate.getTime() === bookingBeginDate.getTime() || endReservationDate.getTime() === bookingEndDate.getTime()) {
                        this.wrongReservation = true;
                    }
                    else if (beginReservationDate.getTime() < bookingBeginDate.getTime() && endReservationDate.getTime() >= bookingEndDate.getTime()) {
                        this.wrongReservation = true;
                    }
                    else if (bookingBeginDate.getTime() < beginReservationDate.getTime() && bookingEndDate.getTime() > endReservationDate.getTime()) {
                        this.wrongReservation = true;
                    }
                    else {
                        let strogebeginDate = new Date(this.localstorageReservations[index].beginDate);
                        let strogeEndDate = new Date(this.localstorageReservations[index].endDate);
                        if (bookingBeginDate.getTime() < strogebeginDate.getTime() && bookingEndDate.getTime() < strogeEndDate.getTime() && bookingEndDate.getTime() > strogebeginDate.getTime()) {
                            this.wrongReservation = true;
                        }
                    }
                });
                if (this.wrongReservation) {
                    this.reservationAlert('Réservation impossible. La salle est occupé sur le créneau choisi');
                }
                else {
                    this.openPayementBottomSheet(reservation, this.localstorageReservations, 'Réservation validée');
                    this.addNotification(notification);
                }
            }
        }
    }
    refreshPage() {
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate([currentUrl]);
        });
    }
    reservationAlert(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                message: message,
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'OK',
                        handler: (alertData) => {
                            setTimeout(() => {
                                this.refreshPage();
                            }, 1000);
                        }
                    }
                ]
            });
            document.querySelector(".alert-message").style.fontSize = "17px";
            document.querySelector(".alert-message").style.fontWeight = "normal";
            yield alert.present();
        });
    }
    addNotification(currentParking) {
        const newNotification = new src_app_store_models_notification__WEBPACK_IMPORTED_MODULE_10__["Notification"]();
        newNotification.notification = currentParking;
        this.store.dispatch(new _store_actions_notification_action__WEBPACK_IMPORTED_MODULE_11__["TodoAdd"](newNotification));
    }
    sendDataToStorage(reservation, localstorageData, message) {
        if (this.localstorageReservations) {
            this.localstorageReservations.push(reservation);
            this.storeReservations(localstorageData);
            this.reservationAlert(message);
        }
        else {
            console.log(this.localstorageReservations);
        }
    }
    // toogleBottomSheet( selectedRoom : Parking){
    //   if(!this.isBottomSheetOpened){
    //     this.isBottomSheetOpened = true;
    //     this.openBottomSheet();
    //   }else{
    //     this.isBottomSheetOpened = false;
    //     this.closeBottomSheet();
    //   }
    // }
    redirect(currentParking) {
        const reservation = {
            state: {
                id: currentParking.id,
                mapwizeId: currentParking.mapwizeId,
                name: currentParking.name,
                status: currentParking.status,
                dateFin: currentParking.dateFin,
                dateDebut: currentParking.dateDebut,
            }
        };
        this.navigateController.navigateForward(['/map-parking'], reservation);
    }
    openPayementBottomSheet(reservation, localstorageData, message) {
        document.querySelector(".payButton").addEventListener('click', () => {
            this.sendDataToStorage(reservation, localstorageData, message);
        });
        document.querySelector("#paymentBottomSheet").style.display = "block";
        const animation = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
            .addElement(document.querySelector("#paymentBottomSheet"))
            .easing("ease-in-out")
            .duration(400)
            .direction("alternate")
            .keyframes([
            { height: "0px", transform: "scale(1)", opacity: "1", },
            { height: "24rem", transform: "scale(1)", opacity: "1" },
        ]);
        animation.play();
    }
    closePayementBottomSheet() {
        const animation = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
            .addElement(document.querySelector("#paymentBottomSheet"))
            .easing("ease-in-out")
            .duration(300)
            .direction("alternate")
            .keyframes([
            { height: "24rem", },
            { height: "0px", opacity: "0", },
        ]);
        animation.play();
    }
    openBottomSheet(selectedRoom) {
        this.showMap = false;
        this.currentParking = selectedRoom;
        document.querySelector("#reservationBottomSheet").style.display = "block";
        const animation = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
            .addElement(document.querySelector("#reservationBottomSheet"))
            .easing("ease-in-out")
            .duration(400)
            .direction("alternate")
            .keyframes([
            { height: "0px", transform: "scale(1)", opacity: "1", },
            { height: "18rem", transform: "scale(1)", opacity: "1" },
        ]);
        animation.play();
    }
    closeBottomSheet() {
        const animation = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
            .addElement(document.querySelector("#reservationBottomSheet"))
            .easing("ease-in-out")
            .duration(100)
            .direction("alternate")
            .keyframes([
            { height: "18rem", },
            { height: "0px", },
        ]);
        animation.play();
    }
    ngAfterViewInit() {
        this.parkings = this.parkingService.getParkings();
        this.currentDate = new Date();
        if (localStorage.getItem("stationnement")) {
            this.localstorageReservations = JSON.parse(localStorage.getItem('stationnement'));
            if (this.localstorageReservations) {
                this.localstorageReservations.map((reservation, index) => {
                    let beginReservationDate = new Date(reservation.beginDate);
                    let endReservationDate = new Date(reservation.endDate);
                    if (endReservationDate < this.currentDate) {
                        this.localstorageReservations.splice(index, 1);
                        localStorage.setItem('stationnement', JSON.stringify(this.localstorageReservations));
                        localStorage.setItem('stationnementHistoricalReservations', JSON.stringify(reservation));
                    }
                    this.parkings.map((parking, index) => {
                        if (beginReservationDate > this.currentDate && parking.id == reservation.reservationId && parking.status == 'Libre') {
                            let reservations = JSON.parse(localStorage.getItem('stationnement'));
                            const earliestDate = reservations.reduce((r, o) => o.beginDate < r.beginDate ? o : r);
                            this.parkings[index].status = 'Libre';
                            this.parkings[index].dateFin = earliestDate.beginDate;
                            this.parkings[index].dateDebut = earliestDate.beginDate;
                        }
                        else if (parking.id == reservation.reservationId) {
                            if (beginReservationDate <= this.currentDate && endReservationDate > this.currentDate) {
                                this.parkings[index].dateDebut = beginReservationDate;
                                this.parkings[index].dateFin = endReservationDate;
                                this.parkings[index].status = 'Réservé';
                            }
                        }
                    });
                });
            }
        }
        else {
        }
        this.parkings.map((parking, index) => {
            this.convertedDate = (new Date()).getTimezoneOffset() * 60000;
            if (parking.id == 2) {
                let localISOTimeBox = (new Date(Date.now() - this.convertedDate));
                let newDateBox = new Date(localISOTimeBox.setHours(localISOTimeBox.getHours() + 1)).toISOString().slice(0, -1);
                parking.dateDebut = newDateBox;
                parking.dateFin = newDateBox;
            }
            if (parking.id == 3) {
                let localISOTimeCommercial = (new Date(Date.now() - this.convertedDate));
                let newCommercialDate = new Date(localISOTimeCommercial.setHours(localISOTimeCommercial.getHours() + 2)).toISOString().slice(0, -1);
                parking.dateDebut = newCommercialDate;
                parking.dateFin = newCommercialDate;
            }
        });
    }
    ngOnInit() {
        this.initializeForm();
    }
};
StationnementPage.ctorParameters = () => [
    { type: _stationnement_service__WEBPACK_IMPORTED_MODULE_7__["StationnementService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] }
];
StationnementPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-stationnement',
        template: _raw_loader_stationnement_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_stationnement_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], StationnementPage);



/***/ }),

/***/ "KfUI":
/*!*****************************************************************!*\
  !*** ./src/app/services/stationnement/stationnement.service.ts ***!
  \*****************************************************************/
/*! exports provided: StationnementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationnementService", function() { return StationnementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_mocks_parking_mocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/mocks/parking.mocks */ "PZDh");



let StationnementService = class StationnementService {
    constructor(Parking) {
        this.Parking = Parking;
    }
    getParkings() {
        return this.Parking.getAll();
    }
};
StationnementService.ctorParameters = () => [
    { type: src_mocks_parking_mocks__WEBPACK_IMPORTED_MODULE_2__["ParkingMocks"] }
];
StationnementService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StationnementService);



/***/ }),

/***/ "LZYy":
/*!****************************************************************!*\
  !*** ./src/app/services/stationnement/stationnement.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/** Ionic CSS Variables **/\n:root {\n  --color-tabs:#514e4c;\n  /** primary **/\n  --ion-color-primary: $primary;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}\n:root ion-item {\n  font-size: 14px;\n}\n@media (prefers-color-scheme: dark) {\n  /*\n   * Dark Colors\n   * -------------------------------------------\n   */\n  body {\n    --ion-color-primary: #428cff;\n    --ion-color-primary-rgb: 66,140,255;\n    --ion-color-primary-contrast: #ffffff;\n    --ion-color-primary-contrast-rgb: 255,255,255;\n    --ion-color-primary-shade: #3a7be0;\n    --ion-color-primary-tint: #5598ff;\n    --ion-color-secondary: #50c8ff;\n    --ion-color-secondary-rgb: 80,200,255;\n    --ion-color-secondary-contrast: #ffffff;\n    --ion-color-secondary-contrast-rgb: 255,255,255;\n    --ion-color-secondary-shade: #46b0e0;\n    --ion-color-secondary-tint: #62ceff;\n    --ion-color-tertiary: #6a64ff;\n    --ion-color-tertiary-rgb: 106,100,255;\n    --ion-color-tertiary-contrast: #ffffff;\n    --ion-color-tertiary-contrast-rgb: 255,255,255;\n    --ion-color-tertiary-shade: #5d58e0;\n    --ion-color-tertiary-tint: #7974ff;\n    --ion-color-success: #2fdf75;\n    --ion-color-success-rgb: 47,223,117;\n    --ion-color-success-contrast: #000000;\n    --ion-color-success-contrast-rgb: 0,0,0;\n    --ion-color-success-shade: #29c467;\n    --ion-color-success-tint: #44e283;\n    --ion-color-warning: #ffd534;\n    --ion-color-warning-rgb: 255,213,52;\n    --ion-color-warning-contrast: #000000;\n    --ion-color-warning-contrast-rgb: 0,0,0;\n    --ion-color-warning-shade: #e0bb2e;\n    --ion-color-warning-tint: #ffd948;\n    --ion-color-danger: #ff4961;\n    --ion-color-danger-rgb: 255,73,97;\n    --ion-color-danger-contrast: #ffffff;\n    --ion-color-danger-contrast-rgb: 255,255,255;\n    --ion-color-danger-shade: #e04055;\n    --ion-color-danger-tint: #ff5b71;\n    --ion-color-dark: #f4f5f8;\n    --ion-color-dark-rgb: 244,245,248;\n    --ion-color-dark-contrast: #000000;\n    --ion-color-dark-contrast-rgb: 0,0,0;\n    --ion-color-dark-shade: #d7d8da;\n    --ion-color-dark-tint: #f5f6f9;\n    --ion-color-medium: #989aa2;\n    --ion-color-medium-rgb: 152,154,162;\n    --ion-color-medium-contrast: #000000;\n    --ion-color-medium-contrast-rgb: 0,0,0;\n    --ion-color-medium-shade: #86888f;\n    --ion-color-medium-tint: #a2a4ab;\n    --ion-color-light: #222428;\n    --ion-color-light-rgb: 34,36,40;\n    --ion-color-light-contrast: #ffffff;\n    --ion-color-light-contrast-rgb: 255,255,255;\n    --ion-color-light-shade: #1e2023;\n    --ion-color-light-tint: #383a3e;\n  }\n\n  /*\n   * iOS Dark Theme\n   * -------------------------------------------\n   */\n  .ios body {\n    --ion-background-color: #000000;\n    --ion-background-color-rgb: 0,0,0;\n    --ion-text-color: #ffffff;\n    --ion-text-color-rgb: 255,255,255;\n    --ion-color-step-50: #0d0d0d;\n    --ion-color-step-100: #1a1a1a;\n    --ion-color-step-150: #262626;\n    --ion-color-step-200: #333333;\n    --ion-color-step-250: #404040;\n    --ion-color-step-300: #4d4d4d;\n    --ion-color-step-350: #595959;\n    --ion-color-step-400: #666666;\n    --ion-color-step-450: #737373;\n    --ion-color-step-500: #808080;\n    --ion-color-step-550: #8c8c8c;\n    --ion-color-step-600: #999999;\n    --ion-color-step-650: #a6a6a6;\n    --ion-color-step-700: #b3b3b3;\n    --ion-color-step-750: #bfbfbf;\n    --ion-color-step-800: #cccccc;\n    --ion-color-step-850: #d9d9d9;\n    --ion-color-step-900: #e6e6e6;\n    --ion-color-step-950: #f2f2f2;\n    --ion-item-background: #000000;\n    --ion-card-background: #1c1c1d;\n  }\n\n  .ios ion-modal {\n    --ion-background-color: var(--ion-color-step-100);\n    --ion-toolbar-background: var(--ion-color-step-150);\n    --ion-toolbar-border-color: var(--ion-color-step-250);\n  }\n\n  /*\n   * Material Design Dark Theme\n   * -------------------------------------------\n   */\n  .md body {\n    --ion-background-color: #121212;\n    --ion-background-color-rgb: 18,18,18;\n    --ion-text-color: #ffffff;\n    --ion-text-color-rgb: 255,255,255;\n    --ion-border-color: #222222;\n    --ion-color-step-50: #1e1e1e;\n    --ion-color-step-100: #2a2a2a;\n    --ion-color-step-150: #363636;\n    --ion-color-step-200: #414141;\n    --ion-color-step-250: #4d4d4d;\n    --ion-color-step-300: #595959;\n    --ion-color-step-350: #656565;\n    --ion-color-step-400: #717171;\n    --ion-color-step-450: #7d7d7d;\n    --ion-color-step-500: #898989;\n    --ion-color-step-550: #949494;\n    --ion-color-step-600: #a0a0a0;\n    --ion-color-step-650: #acacac;\n    --ion-color-step-700: #b8b8b8;\n    --ion-color-step-750: #c4c4c4;\n    --ion-color-step-800: #d0d0d0;\n    --ion-color-step-850: #dbdbdb;\n    --ion-color-step-900: #e7e7e7;\n    --ion-color-step-950: #f3f3f3;\n    --ion-item-background: #1e1e1e;\n    --ion-toolbar-background: #1f1f1f;\n    --ion-tab-bar-background: #1f1f1f;\n    --ion-card-background: #1e1e1e;\n  }\n}\n/* Importing Bootstrap SCSS file. */\n.principal {\n  background-color: white;\n  height: 100%;\n}\nion-card {\n  border-radius: 35px;\n}\nion-content {\n  height: 80%;\n}\n.colStart2 {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.cardGrid {\n  margin: 0;\n  padding: 0;\n}\n.icon2 {\n  font-size: 22px;\n}\n.ion {\n  font-size: 14px;\n  color: #514e4c;\n}\n.colZone {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: #f3f3f3 solid 1px;\n}\n.col {\n  height: 70px;\n}\n.strong {\n  color: #514e4c;\n  font-size: 14px;\n}\n.icon {\n  color: #514e4c;\n  font-size: 35px;\n}\n.reservation {\n  color: #514e4c;\n  font-size: 35px;\n}\nspan {\n  font-size: 20px;\n  color: #514e4c;\n}\n.bottomSheet {\n  position: fixed;\n  display: none;\n  width: 100%;\n  bottom: 0;\n  border-radius: 30px 30px 0px 0px;\n  z-index: 20;\n  background-color: white;\n  transform: translate3d(0, 0, 0);\n}\n.div1 {\n  display: inline-block;\n  margin-left: 4%;\n}\n.div2 {\n  display: inline-block;\n}\nion-input {\n  width: 100%;\n  background-color: var(--ion-color-light);\n  border-radius: 20px;\n  text-align: center;\n}\nion-label {\n  padding: 4px 8px;\n}\nion-button {\n  border-radius: 50px;\n  color: var(--ion-color-light);\n  border: solid 1px #514e4c;\n  width: 45px;\n  height: 45px;\n  background-color: #514e4c;\n}\n.colstart3 {\n  text-align: center;\n}\n.itemRes {\n  width: 100%;\n}\n.pBottom {\n  text-align: center;\n}\n.iconEnd {\n  font-size: 60px;\n}\ninput[type=datetime-local]:before {\n  color: transparent;\n  background: none;\n  display: block;\n  font-family: \"FontAwesome\";\n  content: \"\";\n  /* This is the calendar icon in FontAwesome */\n  width: 15px;\n  height: 20px;\n  position: absolute;\n  top: 12px;\n  right: 6px;\n  color: #999;\n}\n.bottomSheetNameDiv {\n  text-align: center;\n}\n.currentEndDate {\n  font-size: 15px;\n  color: #514e4c;\n}\n.divPaymentButton {\n  padding: 5%;\n  text-align: center;\n}\n.PaymentTotalPriceSpanClass {\n  font-size: 16px;\n  font-weight: bold;\n}\nbutton {\n  height: 30px;\n  width: 100px;\n  border-radius: 10px;\n  background-color: #514e4c;\n  font-size: 17px;\n  color: white;\n}\nimg {\n  max-width: 20rem;\n  min-width: 17rem;\n}\n.paymentMessage {\n  color: #514e4c;\n  font-size: 15px;\n}\n.payButton {\n  height: 30px;\n  width: 100px;\n  border-radius: 10px;\n  background-color: #514e4c;\n  font-size: 17px;\n  color: white;\n}\n.paymentColumn {\n  text-align: center;\n}\n.paragraphCenter {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.centerIcon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0YXRpb25uZW1lbnQucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vdGhlbWUvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDSWhCLDBCQUFBO0FBS0E7RUFFRSxvQkFBQTtFQU1FLGNBQUE7RUFDRiw2QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0Esc0NBQUE7RUFDQSxnREFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QURwQkY7QUNyREU7RUFDSSxlQUFBO0FEdUROO0FDb0JBO0VBQ0U7OztJQUFB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LHVCQUFBO0VBQ0EsbUJBQUE7QUErT0oiLCJmaWxlIjoic3RhdGlvbm5lbWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICcuLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzJyBhcyB2O1xuXG4ucHJpbmNpcGFse1xuICAgIGJhY2tncm91bmQtY29sb3I6ICB2LiRibGFuYztcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5pb24tY2FyZHtcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xufVxuaW9uLWNvbnRlbnR7XG4gICAgaGVpZ2h0OiA4MCU7XG59XG4uY29sU3RhcnQye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNhcmRHcmlke1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuLmljb24ye1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5pb257XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiB2LiRwcmltYXJ5O1xufVxuLmNvbFpvbmV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206IHYuJHNlY29uZGFyeSBzb2xpZCAxcHg7XG59XG4uY29se1xuICAgIGhlaWdodDogNzBweDtcbn1cbi5zdHJvbmd7XG4gICAgY29sb3I6IHYuJHByaW1hcnk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLmljb257XG4gICAgY29sb3I6IHYuJHByaW1hcnk7XG4gICAgZm9udC1zaXplOiAzNXB4O1xufVxuLnJlc2VydmF0aW9ue1xuICAgIGNvbG9yOiB2LiRwcmltYXJ5O1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbn1cbnNwYW57XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiB2LiRwcmltYXJ5O1xufVxuLmJvdHRvbVNoZWV0e1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvdHRvbTogMDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggMHB4IDBweDtcbiAgICB6LWluZGV4OiAyMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2LiRibGFuYztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbn1cbi5kaXYxe1xuZGlzcGxheTogaW5saW5lLWJsb2NrO1xubWFyZ2luLWxlZnQ6IDQlO1xufVxuLmRpdjJ7XG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5pb24taW5wdXR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKCAtLWlvbi1jb2xvci1saWdodCk7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tbGFiZWx7XG4gICAgcGFkZGluZzogNHB4IDhweDtcbn1cbmlvbi1idXR0b257XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBjb2xvcjp2YXIoIC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2LiRwcmltYXJ5O1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2LiRwcmltYXJ5O1xufVxuLmNvbHN0YXJ0M3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaXRlbVJlc3tcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5wQm90dG9te1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pY29uRW5ke1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbn1cbiAgaW5wdXRbdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJdOmJlZm9yZSB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1mYW1pbHk6ICdGb250QXdlc29tZSc7XG4gICAgY29udGVudDogJ1xcZjA3Myc7XG4gICAgLyogVGhpcyBpcyB0aGUgY2FsZW5kYXIgaWNvbiBpbiBGb250QXdlc29tZSAqL1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMnB4O1xuICAgIHJpZ2h0OiA2cHg7XG4gICAgY29sb3I6ICM5OTk7XG59XG4uYm90dG9tU2hlZXROYW1lRGl2e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jdXJyZW50RW5kRGF0ZXtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6IHYuJHByaW1hcnk7XG59XG4uZGl2UGF5bWVudEJ1dHRvbntcbiAgICBwYWRkaW5nOiA1JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uUGF5bWVudFRvdGFsUHJpY2VTcGFuQ2xhc3N7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuYnV0dG9ue1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2LiRwcmltYXJ5O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBjb2xvcjogdi4kYmxhbmM7XG59XG5cbmltZ3tcbiAgICBtYXgtd2lkdGg6MjByZW07XG4gICAgbWluLXdpZHRoOjE3cmVtO1xufVxuXG4ucGF5bWVudE1lc3NhZ2V7XG4gICAgY29sb3I6IHYuJHByaW1hcnk7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLnBheUJ1dHRvbntcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdi4kcHJpbWFyeTtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgY29sb3I6IHYuJGJsYW5jO1xufVxuLnBheW1lbnRDb2x1bW57XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnBhcmFncmFwaENlbnRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNlbnRlckljb257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIiwiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOlxuLy8gaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvXG5cblxuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG4kc2Vjb25kYXJ5LWNvbDpyZ2IoMjQzLCAyNDMsIDI0Myk7XG4kc2Vjb25kYXJ5OnJnYigyNDMsIDI0MywgMjQzKSA7XG4kYmxhbmM6cmdiYSgyNTUsMjU1LDI1NSk7XG4kcHJpbWFyeTojNTE0ZTRjO1xuOnJvb3Qge1xuXG4gIC0tY29sb3ItdGFiczojNTE0ZTRjO1xuXG5cbiAgaW9uLWl0ZW0ge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gICAgLyoqIHByaW1hcnkgKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICRwcmltYXJ5O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNTYsIDEyOCwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzMxNzFlMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNGM4ZGZmO1xuXG4gIC8qKiBzZWNvbmRhcnkgKiovXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzNkYzJmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogNjEsIDE5NCwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzM2YWJlMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM1MGM4ZmY7XG5cbiAgLyoqIHRlcnRpYXJ5ICoqL1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzUyNjBmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiA4MiwgOTYsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM0ODU0ZTA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM2MzcwZmY7XG5cbiAgLyoqIHN1Y2Nlc3MgKiovXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyZGQzNmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA0NSwgMjExLCAxMTE7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMjhiYTYyO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0MmQ3N2Q7XG5cbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmM0MDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDE5NiwgOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGFjMDg7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmY2EyMjtcblxuICAvKiogZGFuZ2VyICoqL1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNlYjQ0NWE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDIzNSwgNjgsIDkwO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2NmM2M0ZjsvL2ljaVxuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2VkNTc2YjtcblxuICAvKiogZGFyayAqKi9cbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODsvL2ljaVxuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMzQsIDM2LCA0MDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogIzM4M2EzZTtcblxuICAvKiogbWVkaXVtICoqL1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5Mjk0OWM7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE0NiwgMTQ4LCAxNTY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjsvL2ljaVxuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4MDgyODk7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjOWQ5ZmE2O1xuXG4gIC8qKiBsaWdodCAqKi9cbiAgLS1pb24tY29sb3ItbGlnaHQ6ICNmNGY1Zjg7Ly9pY2lcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2Y1ZjZmOTtcbn1cblxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAvKlxuICAgKiBEYXJrIENvbG9yc1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIGJvZHkge1xuICAgIC0taW9uLWNvbG9yLXByaW1hcnk6ICM0MjhjZmY7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDY2LDE0MCwyNTU7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzNhN2JlMDtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM1NTk4ZmY7XG5cbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICM1MGM4ZmY7XG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogODAsMjAwLDI1NTtcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjNDZiMGUwO1xuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNjJjZWZmO1xuXG4gICAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM2YTY0ZmY7XG4gICAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMDYsMTAwLDI1NTtcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNWQ1OGUwO1xuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM3OTc0ZmY7XG5cbiAgICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMmZkZjc1O1xuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA0NywyMjMsMTE3O1xuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOWM0Njc7XG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDRlMjgzO1xuXG4gICAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmZDUzNDtcbiAgICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LDIxMyw1MjtcbiAgICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBiYjJlO1xuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmZDk0ODtcblxuICAgIC0taW9uLWNvbG9yLWRhbmdlcjogI2ZmNDk2MTtcbiAgICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNTUsNzMsOTc7XG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAgIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2UwNDA1NTtcbiAgICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2ZmNWI3MTtcblxuICAgIC0taW9uLWNvbG9yLWRhcms6ICNmNGY1Zjg7XG4gICAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDI0NCwyNDUsMjQ4O1xuICAgIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAgIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICNkN2Q4ZGE7XG4gICAgLS1pb24tY29sb3ItZGFyay10aW50OiAjZjVmNmY5O1xuXG4gICAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTg5YWEyO1xuICAgIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE1MiwxNTQsMTYyO1xuICAgIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogIzAwMDAwMDtcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4Njg4OGY7XG4gICAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICNhMmE0YWI7XG5cbiAgICAtLWlvbi1jb2xvci1saWdodDogIzIyMjQyODtcbiAgICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDM0LDM2LDQwO1xuICAgIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gICAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICMxZTIwMjM7XG4gICAgLS1pb24tY29sb3ItbGlnaHQtdGludDogIzM4M2EzZTtcbiAgfVxuXG4gIC8qXG4gICAqIGlPUyBEYXJrIFRoZW1lXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLmlvcyBib2R5IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAwLDAsMDtcblxuICAgIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gICAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwyNTUsMjU1O1xuXG4gICAgLS1pb24tY29sb3Itc3RlcC01MDogIzBkMGQwZDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzFhMWExYTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTE1MDogIzI2MjYyNjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzMzMzMzMztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzQwNDA0MDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTMwMDogIzRkNGQ0ZDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzU5NTk1OTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzY2NjY2NjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTQ1MDogIzczNzM3MztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzgwODA4MDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzhjOGM4YztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTYwMDogIzk5OTk5OTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2E2YTZhNjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2IzYjNiMztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTc1MDogI2JmYmZiZjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2NjY2NjYztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2Q5ZDlkOTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTkwMDogI2U2ZTZlNjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YyZjJmMjtcblxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzAwMDAwMDtcblxuICAgIC0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFjMWMxZDtcbiAgfVxuXG4gIC5pb3MgaW9uLW1vZGFsIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xMDApO1xuICAgIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbiAgICAtLWlvbi10b29sYmFyLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwKTtcbiAgfVxuXG5cbiAgLypcbiAgICogTWF0ZXJpYWwgRGVzaWduIERhcmsgVGhlbWVcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAubWQgYm9keSB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMTgsMTgsMTg7XG5cbiAgICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAgIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsMjU1LDI1NTtcblxuICAgIC0taW9uLWJvcmRlci1jb2xvcjogIzIyMjIyMjtcblxuICAgIC0taW9uLWNvbG9yLXN0ZXAtNTA6ICMxZTFlMWU7XG4gICAgLS1pb24tY29sb3Itc3RlcC0xMDA6ICMyYTJhMmE7XG4gICAgLS1pb24tY29sb3Itc3RlcC0xNTA6ICMzNjM2MzY7XG4gICAgLS1pb24tY29sb3Itc3RlcC0yMDA6ICM0MTQxNDE7XG4gICAgLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0ZDRkNGQ7XG4gICAgLS1pb24tY29sb3Itc3RlcC0zMDA6ICM1OTU5NTk7XG4gICAgLS1pb24tY29sb3Itc3RlcC0zNTA6ICM2NTY1NjU7XG4gICAgLS1pb24tY29sb3Itc3RlcC00MDA6ICM3MTcxNzE7XG4gICAgLS1pb24tY29sb3Itc3RlcC00NTA6ICM3ZDdkN2Q7XG4gICAgLS1pb24tY29sb3Itc3RlcC01MDA6ICM4OTg5ODk7XG4gICAgLS1pb24tY29sb3Itc3RlcC01NTA6ICM5NDk0OTQ7XG4gICAgLS1pb24tY29sb3Itc3RlcC02MDA6ICNhMGEwYTA7XG4gICAgLS1pb24tY29sb3Itc3RlcC02NTA6ICNhY2FjYWM7XG4gICAgLS1pb24tY29sb3Itc3RlcC03MDA6ICNiOGI4Yjg7XG4gICAgLS1pb24tY29sb3Itc3RlcC03NTA6ICNjNGM0YzQ7XG4gICAgLS1pb24tY29sb3Itc3RlcC04MDA6ICNkMGQwZDA7XG4gICAgLS1pb24tY29sb3Itc3RlcC04NTA6ICNkYmRiZGI7XG4gICAgLS1pb24tY29sb3Itc3RlcC05MDA6ICNlN2U3ZTc7XG4gICAgLS1pb24tY29sb3Itc3RlcC05NTA6ICNmM2YzZjM7XG5cbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMxZTFlMWU7XG5cbiAgICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG5cbiAgICAtLWlvbi10YWItYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG5cbiAgICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxZTFlMWU7XG4gIH1cbn1cblxuLyogSW1wb3J0aW5nIEJvb3RzdHJhcCBTQ1NTIGZpbGUuICovXG4vL0BpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy9ib290c3RyYXAnO1xuIl19 */");

/***/ }),

/***/ "m5on":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/stationnement/stationnement.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"principal\">\n    <ion-grid class=\"gridStart\">\n      <ion-row class=\"rowStart\">\n        <ion-col size=\"1\" routerLink=\"/tabs/tab1\">\n          <ion-icon class=\"reservation\" name=\"chevron-back-outline\"></ion-icon>\n        </ion-col>\n        <ion-col class=\"colStart2\" size=\"10\">\n          <span class=\"serviceTitle1\"> Stationnement</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-card class=\"parkings\" [hidden]=\"\">\n      <!-- <ion-grid>\n        <ion-row>\n          <ion-col class=\"colZone\">\n            <ion-icon class=\"icon2\" name=\"location-outline\"></ion-icon>\n            <p class=\"ion\">Réception</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid> -->\n\n      <ion-searchBar placeholder=\"\" ></ion-searchBar>\n\n      <ion-list lines=\"none\" *ngFor=\"let parking of parkings ;\">\n        <!-- <ion-grid class=\"cardGrid\">\n          <ion-row>\n            <ion-item class=\"itemRes\" (click)=\"openBottomSheet(parking)\">\n              <ion-col size=\"10\" class=\"col2\">\n                <strong id=\"salle_{{parking.id}}\" class=\"strong\"\n                  >{{parking.status}}</strong\n                >\n                - jusqu'à\n                <span class=\"currentEndDate\"\n                  >{{parking.dateFin ? (parking.dateFin | date :'HH:mm') :\n                  'demain'}}</span\n                >\n                <br />\n                <ion-icon\n                  name=\"calendar-clear-outline\"\n                  class=\"iconStart1\"\n                  class=\"icon\"\n                ></ion-icon>\n                <div class=\"div1\">\n                  {{parking.name}}\n                  <br />Étage {{parking.floor}}<br />\n                  {{parking.personne}} personne(s)<br />\n                </div>\n              </ion-col>\n            </ion-item>\n          </ion-row>\n        </ion-grid> -->\n        <!--  -->\n        <div>\n          <ion-item (click)=\"openBottomSheet(parking)\">\n            <ion-icon class=\"icon\" name=\"calendar-clear-outline\"></ion-icon>\n            <div class=\"ion-padding\">\n              <p class=\"list-lab\">\n                <strong> {{parking.status}}</strong> -jusqu'à  {{parking.dateFin ? (parking.dateFin | date :'HH:mm') :\n                'demain'}}\n              </p>\n\n              <p class=\"list-lab\">\n                {{parking.name}}\n                <br />Étage {{parking.floor}}<br />\n                {{parking.personne}} personne(s) {{parking.personne > 1? \"personnes\": \"personne\"}}\n              </p>\n            </div>\n          </ion-item>\n          <div class=\"divider\"></div>\n        </div>\n\n      </ion-list>\n    </ion-card>\n    <div id=\"reservationBottomSheet\" class=\"bottomSheet\">\n      <ion-grid (click)=\"closeBottomSheet()\">\n        <ion-row>\n          <ion-col class=\"colZone\">\n            <div>\n              <p class=\"pBottom\">{{ currentParking?.name }}</p>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-from [formGroup]=\"bookingForm\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"10\">\n              <div>\n                <ion-label>Date / Heure de Debut</ion-label>\n              </div>\n              <ion-input\n                type=\"datetime-local\"\n                class=\"form-control\"\n                formControlName=\"dateStart\"\n                displayFormat=\"HH:mm\"\n              >\n              </ion-input>\n              <div class=\"divBottom\">\n                <ion-label>Date / Heure De Fin</ion-label>\n              </div>\n              <ion-input\n                [(ngModel)]=\"inputEnd\"\n                formControlName=\"dateEnd\"\n                type=\"datetime-local\"\n                class=\"form-control\"\n              ></ion-input>\n            </ion-col>\n            <ion-col size=\"2\" class=\"colStart2\">\n              <ion-button\n                color=\"white\"\n                class=\"btnSubmit\"\n                (click)=\"sendReservationForm()\"\n                [disabled]=\"!inputEnd\"\n              >\n                <ion-icon class=\"iconEnd\" name=\"checkmark-sharp\"></ion-icon\n              ></ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-from>\n    </div>\n    <div id=\"paymentBottomSheet\" class=\"bottomSheet\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\" (click)=\"closeBottomSheet()\">\n            <div class=\"bottomSheetNameDiv\">\n              <p class=\"totalPriceSpanClass\">Paiement electronique</p>\n            </div>\n          </ion-col>\n          <ion-col size=\"12\" class=\"colStart2\">\n            <img src=\"assets/images/altocard.jpeg\" />\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"paymentRow\">\n          <ion-col size=\"2\" class=\"centerIcon\">\n            <ion-icon class=\"icon\" name=\"wifi-outline\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\" class=\"paragraphCenter\">\n            <span class=\"paymentMessage\"\n              >Veillez scanner l'interface de paiement</span\n            >\n          </ion-col>\n          <ion-col size=\"12\" class=\"paymentColumn\">\n            <button class=\"payButton\">Payer</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=services-stationnement-stationnement-module.js.map
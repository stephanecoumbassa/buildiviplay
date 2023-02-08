(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/coumbasssa/Desktop/projectIvi/mywork/src/main.ts */"zUnb");


/***/ }),

/***/ "98H+":
/*!**********************************************!*\
  !*** ./src/app/store/models/notification.ts ***!
  \**********************************************/
/*! exports provided: Notification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
class Notification {
    constructor() {
        this.notification = {
            name: '',
            endDate: '',
            beginDate: '',
            message: ''
        };
    }
}


/***/ }),

/***/ "9nU9":
/*!***********************************************!*\
  !*** ./src/app/store/reducers/allreducers.ts ***!
  \***********************************************/
/*! exports provided: initialNotificationState, notificationReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialNotificationState", function() { return initialNotificationState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notificationReducer", function() { return notificationReducer; });
/* harmony import */ var _actions_todo_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/todo-actions */ "P0i7");

const initialNotificationState = [];
function notificationReducer(state = initialNotificationState, action) {
    switch (action.type) {
        case _actions_todo_actions__WEBPACK_IMPORTED_MODULE_0__["TodoActionTypes"].Add:
            return [...state, action.payload];
        case _actions_todo_actions__WEBPACK_IMPORTED_MODULE_0__["TodoActionTypes"].Remove:
            [...state.splice(action.payload, 1)];
            return [...state];
        default: return state;
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, API_URI, API_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URI", function() { return API_URI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_KEY", function() { return API_KEY; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
const API_URI = 'http://127.0.0.1:8082/api/v1';
const API_KEY = 'Bearer 7SFc7Sfh93BdgtVpmHyfLj3rMpa3Wiq5WxIJ2er8AZGx8yG23Jl1Ao1Y3f8tQafBfc9QckxZIHXHuOcEL0x0pXXxZw0gTCQTeZw1';
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EWUx":
/*!***********************************************!*\
  !*** ./src/app/services/general-functions.ts ***!
  \***********************************************/
/*! exports provided: GeneralFunctions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralFunctions", function() { return GeneralFunctions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/core */ "1Bn7");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_store_models_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/models/notification */ "98H+");
/* harmony import */ var _store_actions_notification_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../store//actions/notification-action */ "qgvm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
var GeneralFunctions_1;










let GeneralFunctions = GeneralFunctions_1 = class GeneralFunctions {
    constructor(navController, ngZone, store, fb, alertController, navigateController, router) {
        this.navController = navController;
        this.ngZone = ngZone;
        this.store = store;
        this.fb = fb;
        this.alertController = alertController;
        this.navigateController = navigateController;
        this.router = router;
        this.isBottomSheetOpened = false;
        this.isFormValidated = false;
        this.localstorageReservations = [];
        this.isUniverseOpened = false;
    }
    changeUniverseIndoorBackground(map) {
        var exterieur = map._container.parentElement.children[1].shadowRoot.children[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[1];
        var interieur = map._container.parentElement.children[1].shadowRoot.children[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[0];
        exterieur.addEventListener('click', () => {
            this.isUniverseOpened = true;
        });
        interieur.addEventListener('click', () => {
            this.isUniverseOpened = false;
        });
        if (this.isUniverseOpened) {
            exterieur.setAttribute('style', 'background-color:' + GeneralFunctions_1.primaryColor + ';color:' + GeneralFunctions_1.ligthColor);
            interieur.setAttribute('style', 'background-color:');
        }
        else {
            interieur.setAttribute('style', 'background-color:' + GeneralFunctions_1.primaryColor + ';color:' + GeneralFunctions_1.ligthColor);
            exterieur.setAttribute('style', 'background-color:');
        }
    }
    mapCss(map, link) {
        const leftContainer = map._container.parentElement.children[1].shadowRoot.children[1].childNodes[1].childNodes[1].children[1].children;
        this.observer = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"]((observer) => {
            setInterval(() => {
                observer.next(leftContainer.forEach(element => {
                    if (element.classList.length > 1) {
                        element.style.backgroundColor = GeneralFunctions_1.primaryColor;
                    }
                    else {
                        element.style.backgroundColor = GeneralFunctions_1.ligthColor;
                    }
                }));
            }, 100);
        });
        this.observer.subscribe((result) => { });
        var universeContainer = map._container.parentElement.children[1].shadowRoot.children[1].childNodes[1].childNodes[0].childNodes[0];
        universeContainer.addEventListener('click', () => {
            this.changeUniverseIndoorBackground(map);
        });
        setTimeout(() => {
            let searchBar = map._container.parentElement.children[1].shadowRoot.children[1].childNodes[0].childNodes[0].childNodes[1];
            var searchBarContainer = map._container.parentElement.children[1].shadowRoot.children[1].childNodes[0];
            //ajouter l'icon chevron
            searchBarContainer.insertAdjacentHTML('afterbegin', '<a routerLink="/tabs/tab1"><ion-icon class="icon" name="chevron-back-outline"></ion-icon></a>');
            //supprimerla searchBar
            var chevronBackIcon = searchBarContainer.childNodes[0];
            //ajouter le titre et le label du plan
            searchBar.style.paddingLeft = '1rem';
            searchBarContainer.style.display = "flex";
            searchBarContainer.style.flexDirection = "column";
            searchBarContainer.style.height = "4rem";
            searchBarContainer.style.width = '100%';
            chevronBackIcon.style.display = "flex";
            chevronBackIcon.style.justifyContent = "center";
            chevronBackIcon.style.alignItems = "center";
            chevronBackIcon.style.marginTop = "0.5rem";
            chevronBackIcon.style.width = "10%";
            chevronBackIcon.style.fontSize = "35px";
            chevronBackIcon.addEventListener("click", (e) => {
                this.navController.navigateForward(link);
            });
        }, 10);
    }
    openBottomSheet() {
        document.querySelector("#reservationBottomSheet").style.display = "block";
        const animation = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_3__["createAnimation"])()
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
        const animation = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_3__["createAnimation"])()
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
    storeReservations(reservations, link) {
        localStorage.setItem(link, JSON.stringify(reservations));
    }
    addNotification(currentReservation) {
        const newNotification = new src_app_store_models_notification__WEBPACK_IMPORTED_MODULE_5__["Notification"]();
        newNotification.notification = currentReservation;
        this.store.dispatch(new _store_actions_notification_action__WEBPACK_IMPORTED_MODULE_6__["TodoAdd"](newNotification));
    }
    reservationAlert(message, service) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Information',
                subHeader: '',
                message: message,
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Ok',
                        handler: (alertData) => {
                            service;
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    redirect(link, currentReservation) {
        const reservation = {
            state: {
                id: currentReservation.id,
                mapwizeId: currentReservation.mapwizeId,
                name: currentReservation.name,
                status: currentReservation.status,
                dateFin: currentReservation.dateFin,
                dateDebut: currentReservation.dateDebut,
            }
        };
        this.navigateController.navigateForward([link], reservation);
    }
    toogle() {
        if (!this.isBottomSheetOpened) {
            this.isBottomSheetOpened = true;
            this.openBottomSheet();
        }
        else {
            this.isBottomSheetOpened = false;
            this.closeBottomSheet();
        }
    }
    sendDataToStorage(reservation, localstorageData, message, storageName) {
        this.currentReservation.status = 'Réservé';
        console.log("le currentreserv", this.currentReservation);
        localstorageData.push(reservation);
        this.storeReservations(localstorageData, storageName);
        this.reservationAlert(message);
        this.isFormValidated = true;
    }
    // ==========
    toogleBottomSheet(selectedRoom) {
        this.currentReservation = selectedRoom;
        console.log(this.currentReservation);
        if (!this.isBottomSheetOpened) {
            this.isBottomSheetOpened = true;
            this.openBottomSheet();
        }
        else {
            this.isBottomSheetOpened = false;
            this.closeBottomSheet();
        }
    }
    sendReservationForm(localstorageReservations, bookingForm, storageName, serviceName) {
        let reservation = {
            beginDate: bookingForm.value.dateStart,
            endDate: bookingForm.value.dateEnd,
            reservationId: this.currentReservation.id
        };
        let notification = {
            name: this.currentReservation.name,
            beginDate: bookingForm.value.dateStart,
            endDate: bookingForm.value.dateEnd,
            message: 'réservation reussite',
            service: 'Réservation de ' + serviceName,
        };
        let currentParkingEndDate = new Date(this.currentReservation.dateFin);
        let currentParkingbeginDate = new Date(this.currentReservation.dateDebut);
        let bookingEndDate = new Date(bookingForm.value.dateEnd);
        let bookingBeginDate = new Date(bookingForm.value.dateStart);
        if (this.currentReservation.dateFin == '' && this.currentReservation.status == 'Libre') {
            if (bookingBeginDate < this.currentDate || bookingEndDate < this.currentDate) {
                this.reservationAlert('Le créneau sélectionné est passé.');
            }
            else if (bookingEndDate < bookingBeginDate) {
                this.reservationAlert('Le créneau selectionné n\'est pas valide ');
            }
            else {
                this.sendDataToStorage(reservation, localstorageReservations, 'Réservation validée', storageName);
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
                localstorageReservations.map((reservations, index) => {
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
                        let strogebeginDate = new Date(localstorageReservations[index].beginDate);
                        let strogeEndDate = new Date(localstorageReservations[index].endDate);
                        if (bookingBeginDate.getTime() < strogebeginDate.getTime() && bookingEndDate.getTime() < strogeEndDate.getTime() && bookingEndDate.getTime() > strogebeginDate.getTime()) {
                            this.wrongReservation = true;
                        }
                    }
                });
                if (this.wrongReservation) {
                    this.reservationAlert('Réservation impossible. La salle est occupé sur le créneau choisi');
                }
                else {
                    this.sendDataToStorage(reservation, localstorageReservations, 'Réservation validée', storageName);
                    this.addNotification(notification);
                }
            }
        }
    }
    gestionDeReservation(serviceArray, storageName, storageHistorical) {
        this.currentDate = new Date();
        if (localStorage.getItem(storageName)) {
            this.localstorageReservations = JSON.parse(localStorage.getItem(storageName));
            if (this.localstorageReservations) {
                this.localstorageReservations.map((reservation, index) => {
                    let beginReservationDate = new Date(reservation.beginDate);
                    let endReservationDate = new Date(reservation.endDate);
                    if (endReservationDate < this.currentDate) {
                        this.localstorageReservations.splice(index, 1);
                        localStorage.setItem(storageName, JSON.stringify(this.localstorageReservations));
                        localStorage.setItem(storageHistorical, JSON.stringify(reservation));
                    }
                    serviceArray.map((room, index) => {
                        if (beginReservationDate > this.currentDate && room.id == reservation.reservationId && room.status == 'Libre') {
                            let reservations = JSON.parse(localStorage.getItem(storageName));
                            const earliestDate = reservations.reduce((r, o) => o.beginDate < r.beginDate ? o : r);
                            serviceArray[index].status = 'Libre';
                            serviceArray[index].dateFin = earliestDate.beginDate;
                            serviceArray[index].dateDebut = earliestDate.beginDate;
                        }
                        else if (room.id == reservation.reservationId) {
                            if (beginReservationDate <= this.currentDate && endReservationDate > this.currentDate) {
                                serviceArray[index].dateDebut = beginReservationDate;
                                serviceArray[index].dateFin = endReservationDate;
                                serviceArray[index].status = 'Réservé';
                            }
                        }
                    });
                });
            }
        }
        serviceArray.map((room, index) => {
            this.convertedDate = (new Date()).getTimezoneOffset() * 60000;
            if (room.id == 2) {
                let localISOTimeBox = (new Date(Date.now() - this.convertedDate));
                let newDateBox = new Date(localISOTimeBox.setHours(localISOTimeBox.getHours() + 1)).toISOString().slice(0, -1);
                room.dateDebut = newDateBox;
                room.dateFin = newDateBox;
            }
            if (room.id == 3) {
                let localISOTimeCommercial = (new Date(Date.now() - this.convertedDate));
                let newCommercialDate = new Date(localISOTimeCommercial.setHours(localISOTimeCommercial.getHours() + 2)).toISOString().slice(0, -1);
                room.dateDebut = newCommercialDate;
                room.dateFin = newCommercialDate;
            }
        });
    }
    refreshComponent(service) {
        if (this.isFormValidated) {
            service;
        }
    }
    deleteAlert() {
        document.querySelector(".alert-head span").addEventListener("click", (e) => {
            var popUp = document.querySelector(".sc-ion-alert-ios-h");
            popUp.parentElement.removeChild(popUp);
        });
    }
    popupCss() {
        var alertHead = document.querySelector(".alert-head");
        alertHead.insertAdjacentHTML('afterbegin', '<ion-icon style="font-size:30px;justify-content:start;margin-top:2%" name="library-outline"></ion-icon>');
        alertHead.insertAdjacentHTML('beforeend', '<span><ion-icon style="font-size:35px;justify-content:end;margin-top:1%" name="close-outline"></ion-icon></span>');
        document.querySelector(".alert-head").style.display = "flex";
        document.querySelector(".alert-head").style.justifyContent = "space-between";
        document.querySelector(".alert-head h2").style.justifyContent = "center";
        document.querySelector(".alert-wrapper").style.width = "300px";
        document.querySelector(".alert-wrapper").style.fontFamily = "century gothic";
        document.querySelector(".alert-wrapper").style.minWidth = "200px";
        document.querySelector(".alert-wrapper").style.maxWidth = "400px";
        document.querySelector(".alert-message").style.maxHeight = "500px";
        document.querySelector(".alert-message").style.minHeight = "70px";
        document.querySelector(".alert-message").style.padding = "5%";
        document.querySelector(".alert-message").style.fontSize = '17px';
        document.querySelector(".alert-message").style.textAlign = "start";
        document.querySelector(".alert-title").style.fontSize = "19px";
        if (document.querySelector(".alert-message .paraphPopup")) {
            document.querySelector(".alert-message .paraphPopup").style.textAlign = 'center';
        }
        else if (document.querySelector(".icon")) {
            this.popupMessageCss();
        }
        if (location.pathname === "/tabs/tab1") {
            this.deleteAlert();
        }
    }
    popupMessageCss() {
        document.querySelector(".icon").style.float = "right";
        document.querySelector(".icon").style.fontSize = "28px";
        document.querySelector(".icon").style.marginTop = "3%";
        document.querySelector("strong .icon1").style.float = "right";
        document.querySelector("strong .icon1").style.fontSize = "28px";
        document.querySelector("strong .icon1").style.marginTop = "3%";
        document.querySelector("strong .icon2").style.float = "right";
        document.querySelector("strong .icon2").style.fontSize = "28px";
        document.querySelector("strong .icon2").style.marginTop = "3%";
    }
    popUpCartographieCss() {
        if (document.querySelector(".alert-message .localisation")) {
            document.querySelector(".alert-message .localisation").style.display = 'inline-block';
            document.querySelector(".alert-message .guidage").style.display = 'block';
            document.querySelector(".alert-message .interaction").style.display = 'block';
            document.querySelector(".alert-message .localisation").style.textAlign = 'start';
            document.querySelector(".alert-message .guidage").style.textAlign = 'start';
            document.querySelector(".alert-message .interaction").style.textAlign = 'start';
            document.querySelector(".alert-message .icon1").style.fontSize = '25px';
            document.querySelector(".alert-message .icon2").style.fontSize = '25px';
            document.querySelector(".alert-message .icon1").style.float = 'right';
            document.querySelector(".alert-message .icon2").style.float = 'right';
            document.querySelector(".alert-message .icon3").style.fontSize = '25px';
            document.querySelector(".alert-message .icon3").style.float = 'right';
            document.querySelector(".alert-message .icon3").style.marginTop = '-3%';
            document.querySelector(".alert-message .icon4").style.fontSize = '25px';
            document.querySelector(".alert-message .icon4").style.float = 'right';
        }
    }
};
GeneralFunctions.primaryColor = '#514e4c';
GeneralFunctions.ligthColor = '#fff';
GeneralFunctions.darkColor = '#000';
GeneralFunctions.dangerColor = '#eb445a';
GeneralFunctions.dangerColor2 = 'danger';
GeneralFunctions.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
GeneralFunctions = GeneralFunctions_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GeneralFunctions);



/***/ }),

/***/ "GRI9":
/*!********************************************************************************************!*\
  !*** ./src/app/services/reservation/reservation-historical/reservation-historical.page.ts ***!
  \********************************************************************************************/
/*! exports provided: ReservationHistoricalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationHistoricalPage", function() { return ReservationHistoricalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reservation_historical_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reservation-historical.page.html */ "wePl");
/* harmony import */ var _reservation_historical_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reservation-historical.page.scss */ "kGLw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _room_reservation_room_reservation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../room-reservation/room-reservation.service */ "hfc5");





let ReservationHistoricalPage = class ReservationHistoricalPage {
    constructor(roomReservationService) {
        this.roomReservationService = roomReservationService;
        this.localstorageReservations = [];
        this.experiedReseravtion = [];
        this.historical = [];
        this.reservationsListe = [];
        this.oldReservations = [];
        this.storageOldReservations = [];
        this.newReservations = [];
        this.rooms = [];
        this.showHistorical = true;
        this.allOldReservations = false;
    }
    showNewHistrorical() {
        document.querySelector(".aVenir").style.opacity = "1";
        document.querySelector(".terminees").style.opacity = "0.5";
        this.historical = this.newReservations;
        if (this.newReservations.length === 0) {
            this.showReservationMessage = true;
            this.showHistorical = false;
            this.allOldReservations = false;
        }
        else {
            this.showHistorical = true;
            this.allOldReservations = false;
            this.showReservationMessage = false;
        }
    }
    showOldReservations() {
        document.querySelector(".terminees").style.opacity = "1";
        document.querySelector(".aVenir").style.opacity = "0.5";
        this.storageOldReservations = this.oldReservations;
        if (this.storageOldReservations.length === 0) {
            this.showReservationMessage = true;
            this.showHistorical = false;
            this.allOldReservations = false;
        }
        else {
            this.showHistorical = false;
            this.allOldReservations = true;
            this.showReservationMessage = false;
        }
    }
    ngOnInit() {
        this.localstorageReservations = JSON.parse(localStorage.getItem('reservations'));
        this.experiedReseravtion.push(JSON.parse(localStorage.getItem('historicalReservations')));
        this.rooms = this.roomReservationService.getrooms();
        if (this.localstorageReservations) {
            this.showReservationMessage = false;
            this.historical = this.newReservations;
            document.querySelector(".terminees").style.opacity = "0.5";
        }
        if (!this.localstorageReservations || this.localstorageReservations.length == 0) {
            this.showReservationMessage = true;
            this.showHistorical = false;
            document.querySelector(".terminees").style.opacity = "0.5";
        }
        this.rooms.map((room, index) => {
            if (this.localstorageReservations !== null) {
                this.localstorageReservations.map((roomreservation, index) => {
                    if (roomreservation.reservationId === room.id) {
                        this.newReservations.push({
                            name: room.name,
                            beginDate: roomreservation.beginDate,
                            endDate: roomreservation.endDate,
                        });
                    }
                });
            }
            this.experiedReseravtion.map((roomreservation, index) => {
                if (JSON.parse(localStorage.getItem('historicalReservations')) !== null) {
                    if (roomreservation.reservationId === room.id) {
                        this.oldReservations.push({
                            name: room.name,
                            beginDate: roomreservation.beginDate,
                            endDate: roomreservation.endDate,
                        });
                    }
                }
            });
        });
    }
};
ReservationHistoricalPage.ctorParameters = () => [
    { type: _room_reservation_room_reservation_service__WEBPACK_IMPORTED_MODULE_4__["RoomReservationService"] }
];
ReservationHistoricalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reservation-historical',
        template: _raw_loader_reservation_historical_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reservation_historical_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ReservationHistoricalPage);



/***/ }),

/***/ "Gak1":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/reservation/room-reservation/room-reservation.page.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"principal\">\n\n    <!-- <app-header-two [routeName]=\"info\" ></app-header-two>\n    <app-footer></app-footer> -->\n\n    <ion-grid class=\"gridStart\" >\n      <ion-row class=\"rowStart\" >\n        <ion-col size=\"3\"  routerLink=\"/tabs/tab1\" >\n          <ion-icon class=\"reservation\" name=\"chevron-back-outline\"></ion-icon>\n        </ion-col>\n        <ion-col class=\"colStart2\"  size=\"6\">\n          <span  class=\"serviceTitle1\">Réservation de</span>\n          <span  >salles </span>\n        </ion-col>\n        <ion-col class=\"colstart3\" routerLink=\"/reservation-historical\" size=\"3\"  >\n          <ion-icon  class=\"reservation\"  name=\"time-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-card>\n      <ion-searchbar placeholder=\"\"></ion-searchbar>\n\n      <!-- <ion-list *ngFor=\"let room of rooms ;\">\n        <ion-grid class=\"cardGrid\">\n          <ion-row>\n            <ion-item\n              class=\"itemRes\"\n              (click)=\"generalFunctions.toogleBottomSheet(room)\"\n            >\n              <ion-col size=\"10\" class=\"col2\">\n                <strong id=\"salle_{{room.id}}\" class=\"strong\"\n                  >{{room.status}}</strong\n                >\n                - jusqu'à\n                <span class=\"currentEndDate\"\n                  >{{room.dateFin ? (room.dateFin | date :'HH:mm') :\n                  'demain'}}</span\n                >\n                <br />\n                <ion-icon\n                  name=\"calendar-clear-outline\"\n                  class=\"iconStart1\"\n                  class=\"icon\"\n                ></ion-icon>\n                <div class=\"div1\">\n                  {{room.name}}\n                  <br />Étage {{room.floor}}<br />\n                  {{room.personne}} personne(s)<br />\n                </div>\n              </ion-col>\n              <ion-col\n                size=\"2\"\n                class=\"colMap\"\n                (click)=\"generalFunctions.redirect('/map-reservation',room)\"\n              >\n                <ion-icon class=\"map-icon\" name=\"map-outline\"></ion-icon>\n              </ion-col>\n            </ion-item>\n          </ion-row>\n        </ion-grid>\n      </ion-list> -->\n\n      <ion-list lines=\"none\" *ngFor=\"let room of rooms; index as idx\">\n\n        <ion-row>\n          <ion-item class=\"itemRes\">\n            <ion-col size=\"2\" (click)=\"generalFunctions.toogleBottomSheet(room)\">\n              <ion-icon name=\"calendar-clear-outline\" class=\"iconStart1\"  class=\"icon\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"8\" class=\"col2\" (click)=\"generalFunctions.toogleBottomSheet(room)\">\n              <p class=\"list-lab\">\n                <strong id=\"salle_{{room.id}}\" class=\"strong\">{{room.status}}</strong> -\n                jusqu'à\n                <span class=\"currentEndDate\" >{{room.dateFin ? (room.dateFin | date :'HH:mm') : 'demain'}}</span>\n              </p>\n              <p class=\"list-lab\">\n                {{room.name}}\n                <br>Étage {{room.floor}}<br>\n                {{room.personne}} personne(s)<br>\n              </p>\n            </ion-col>\n<!--            <ion-col size=\"2\" class=\"colMap\" (click)=\"generalFunctions.redirect('/map-reservation', room)\" >-->\n            <ion-col size=\"2\" class=\"colMap\" (click)=\"goToMap(idx)\" >\n              <ion-icon class=\"map-icon\" name=\"map-outline\"></ion-icon>\n            </ion-col>\n          </ion-item>\n          <div class=\"divider\"></div>\n        </ion-row>\n\n\n      </ion-list>\n\n\n    </ion-card>\n\n    <div id=\"reservationBottomSheet\" class=\"bottomSheet\">\n      <ion-grid (click)=\"generalFunctions.toogle()\">\n        <ion-row>\n          <ion-col class=\"colZone\">\n            <div>\n              <p class=\"pBottom\">\n                {{ generalFunctions.currentReservation?.name }}\n              </p>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-from [formGroup]=\"bookingForm\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"9\">\n              <div>\n                <ion-label>Date / Heure de Début</ion-label>\n              </div>\n              <ion-input\n                type=\"datetime-local\"\n                class=\"form-control\"\n                formControlName=\"dateStart\"\n                displayFormat=\"HH:mm\"\n              >\n              </ion-input>\n              <div class=\"divBottom\">\n                <ion-label>Date / Heure De Fin</ion-label>\n              </div>\n              <ion-input\n                [(ngModel)]=\"inputEnd\"\n                formControlName=\"dateEnd\"\n                type=\"datetime-local\"\n                class=\"form-control\"\n              ></ion-input>\n            </ion-col>\n            <ion-col size=\"3\" class=\"colEnd\">\n              <ion-button\n                color=\"white\"\n                class=\"btnSubmit\"\n                (click)=\"generalFunctions.sendReservationForm(localstorageReservations,bookingForm,'reservations','salle')\"\n                [disabled]=\"!inputEnd\"\n              >\n                <ion-icon class=\"iconEnd\" name=\"checkmark-sharp\"></ion-icon\n                ></ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-from>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "KwcL":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pwa-action-sheet.entry.js": [
		"jDxf",
		43
	],
	"./pwa-camera-modal-instance.entry.js": [
		"37vE",
		44
	],
	"./pwa-camera-modal.entry.js": [
		"cJxf",
		45
	],
	"./pwa-camera.entry.js": [
		"eGHz",
		46
	],
	"./pwa-toast.entry.js": [
		"fHjd",
		47
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "KwcL";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "P0i7":
/*!***********************************************!*\
  !*** ./src/app/store/actions/todo-actions.ts ***!
  \***********************************************/
/*! exports provided: TodoActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoActionTypes", function() { return TodoActionTypes; });
var TodoActionTypes;
(function (TodoActionTypes) {
    TodoActionTypes["Add"] = "Add";
    TodoActionTypes["Remove"] = "Remove";
})(TodoActionTypes || (TodoActionTypes = {}));


/***/ }),

/***/ "S9ap":
/*!****************************************!*\
  !*** ./src/app/layout/tabs.service.ts ***!
  \****************************************/
/*! exports provided: TabsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsService", function() { return TabsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");




let TabsService = class TabsService {
    constructor() {
        this.serviceValue = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.status = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.activePopups = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    changeData(value) {
        this.status.next(value);
    }
    getStatusOfSplashScreen(value) {
        this.activePopups.next(value);
    }
};
TabsService.ctorParameters = () => [];
TabsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TabsService);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _authentification_security_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentification/security.service */ "nKjo");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");









let AppComponent = class AppComponent {
    constructor(platform, sercurity, router, alertController, store) {
        this.platform = platform;
        this.sercurity = sercurity;
        this.router = router;
        this.alertController = alertController;
        this.store = store;
        this.notification = {
            message: 'Bienvenue sur le démonstrateur iViPlay !'
        };
        this.inintializeApp();
        // this.addNotification(this.notification)
    }
    inintializeApp() {
        this.platform.ready().then(() => {
            this.sercurity.authState.subscribe(state => {
                if (state) {
                    this.router.navigate(['/splashscreen']);
                }
                else {
                    this.router.navigate(['login']);
                }
            });
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _authentification_security_service__WEBPACK_IMPORTED_MODULE_6__["SecurityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app id=\"app\">\n        <app-home></app-home>\n</ion-app>\n");

/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-router-outlet ></ion-router-outlet>\n");

/***/ }),

/***/ "Yf7T":
/*!**********************************************************************************!*\
  !*** ./src/app/services/reservation/room-reservation/room-reservation.page.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/** Ionic CSS Variables **/\n:root {\n  --color-tabs:#514e4c;\n  /** primary **/\n  --ion-color-primary: $primary;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}\n:root ion-item {\n  font-size: 14px;\n}\n@media (prefers-color-scheme: dark) {\n  /*\n   * Dark Colors\n   * -------------------------------------------\n   */\n  body {\n    --ion-color-primary: #428cff;\n    --ion-color-primary-rgb: 66,140,255;\n    --ion-color-primary-contrast: #ffffff;\n    --ion-color-primary-contrast-rgb: 255,255,255;\n    --ion-color-primary-shade: #3a7be0;\n    --ion-color-primary-tint: #5598ff;\n    --ion-color-secondary: #50c8ff;\n    --ion-color-secondary-rgb: 80,200,255;\n    --ion-color-secondary-contrast: #ffffff;\n    --ion-color-secondary-contrast-rgb: 255,255,255;\n    --ion-color-secondary-shade: #46b0e0;\n    --ion-color-secondary-tint: #62ceff;\n    --ion-color-tertiary: #6a64ff;\n    --ion-color-tertiary-rgb: 106,100,255;\n    --ion-color-tertiary-contrast: #ffffff;\n    --ion-color-tertiary-contrast-rgb: 255,255,255;\n    --ion-color-tertiary-shade: #5d58e0;\n    --ion-color-tertiary-tint: #7974ff;\n    --ion-color-success: #2fdf75;\n    --ion-color-success-rgb: 47,223,117;\n    --ion-color-success-contrast: #000000;\n    --ion-color-success-contrast-rgb: 0,0,0;\n    --ion-color-success-shade: #29c467;\n    --ion-color-success-tint: #44e283;\n    --ion-color-warning: #ffd534;\n    --ion-color-warning-rgb: 255,213,52;\n    --ion-color-warning-contrast: #000000;\n    --ion-color-warning-contrast-rgb: 0,0,0;\n    --ion-color-warning-shade: #e0bb2e;\n    --ion-color-warning-tint: #ffd948;\n    --ion-color-danger: #ff4961;\n    --ion-color-danger-rgb: 255,73,97;\n    --ion-color-danger-contrast: #ffffff;\n    --ion-color-danger-contrast-rgb: 255,255,255;\n    --ion-color-danger-shade: #e04055;\n    --ion-color-danger-tint: #ff5b71;\n    --ion-color-dark: #f4f5f8;\n    --ion-color-dark-rgb: 244,245,248;\n    --ion-color-dark-contrast: #000000;\n    --ion-color-dark-contrast-rgb: 0,0,0;\n    --ion-color-dark-shade: #d7d8da;\n    --ion-color-dark-tint: #f5f6f9;\n    --ion-color-medium: #989aa2;\n    --ion-color-medium-rgb: 152,154,162;\n    --ion-color-medium-contrast: #000000;\n    --ion-color-medium-contrast-rgb: 0,0,0;\n    --ion-color-medium-shade: #86888f;\n    --ion-color-medium-tint: #a2a4ab;\n    --ion-color-light: #222428;\n    --ion-color-light-rgb: 34,36,40;\n    --ion-color-light-contrast: #ffffff;\n    --ion-color-light-contrast-rgb: 255,255,255;\n    --ion-color-light-shade: #1e2023;\n    --ion-color-light-tint: #383a3e;\n  }\n\n  /*\n   * iOS Dark Theme\n   * -------------------------------------------\n   */\n  .ios body {\n    --ion-background-color: #000000;\n    --ion-background-color-rgb: 0,0,0;\n    --ion-text-color: #ffffff;\n    --ion-text-color-rgb: 255,255,255;\n    --ion-color-step-50: #0d0d0d;\n    --ion-color-step-100: #1a1a1a;\n    --ion-color-step-150: #262626;\n    --ion-color-step-200: #333333;\n    --ion-color-step-250: #404040;\n    --ion-color-step-300: #4d4d4d;\n    --ion-color-step-350: #595959;\n    --ion-color-step-400: #666666;\n    --ion-color-step-450: #737373;\n    --ion-color-step-500: #808080;\n    --ion-color-step-550: #8c8c8c;\n    --ion-color-step-600: #999999;\n    --ion-color-step-650: #a6a6a6;\n    --ion-color-step-700: #b3b3b3;\n    --ion-color-step-750: #bfbfbf;\n    --ion-color-step-800: #cccccc;\n    --ion-color-step-850: #d9d9d9;\n    --ion-color-step-900: #e6e6e6;\n    --ion-color-step-950: #f2f2f2;\n    --ion-item-background: #000000;\n    --ion-card-background: #1c1c1d;\n  }\n\n  .ios ion-modal {\n    --ion-background-color: var(--ion-color-step-100);\n    --ion-toolbar-background: var(--ion-color-step-150);\n    --ion-toolbar-border-color: var(--ion-color-step-250);\n  }\n\n  /*\n   * Material Design Dark Theme\n   * -------------------------------------------\n   */\n  .md body {\n    --ion-background-color: #121212;\n    --ion-background-color-rgb: 18,18,18;\n    --ion-text-color: #ffffff;\n    --ion-text-color-rgb: 255,255,255;\n    --ion-border-color: #222222;\n    --ion-color-step-50: #1e1e1e;\n    --ion-color-step-100: #2a2a2a;\n    --ion-color-step-150: #363636;\n    --ion-color-step-200: #414141;\n    --ion-color-step-250: #4d4d4d;\n    --ion-color-step-300: #595959;\n    --ion-color-step-350: #656565;\n    --ion-color-step-400: #717171;\n    --ion-color-step-450: #7d7d7d;\n    --ion-color-step-500: #898989;\n    --ion-color-step-550: #949494;\n    --ion-color-step-600: #a0a0a0;\n    --ion-color-step-650: #acacac;\n    --ion-color-step-700: #b8b8b8;\n    --ion-color-step-750: #c4c4c4;\n    --ion-color-step-800: #d0d0d0;\n    --ion-color-step-850: #dbdbdb;\n    --ion-color-step-900: #e7e7e7;\n    --ion-color-step-950: #f3f3f3;\n    --ion-item-background: #1e1e1e;\n    --ion-toolbar-background: #1f1f1f;\n    --ion-tab-bar-background: #1f1f1f;\n    --ion-card-background: #1e1e1e;\n  }\n}\n/* Importing Bootstrap SCSS file. */\n.principal {\n  background-color: white;\n  height: 100%;\n}\nion-card {\n  border-radius: 35px;\n}\n.serviceTitle1 {\n  font-size: 14px;\n}\nion-content {\n  height: 80%;\n}\n.icon2 {\n  font-size: 22px;\n}\n.cardGrid {\n  margin: 0;\n  padding: 0;\n}\n.ion {\n  font-size: 14px;\n  color: #514e4c;\n}\n.colZone {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: #f3f3f3 solid 1px;\n}\n.col {\n  height: 70px;\n}\n.strong {\n  color: #514e4c;\n  font-size: 14px;\n}\n.icon {\n  color: #514e4c;\n  font-size: 35px;\n}\n.reservation {\n  color: #514e4c;\n  font-size: 35px;\n}\nspan {\n  font-size: 20px;\n  color: #514e4c;\n}\n.bottomSheet {\n  position: fixed;\n  display: none;\n  width: 100%;\n  bottom: 0;\n  border-radius: 30px 30px 0px 0px;\n  z-index: 20;\n  background-color: white;\n  transform: translate3d(0, 0, 0);\n}\n.div1 {\n  display: inline-block;\n  margin-left: 4%;\n}\n.div2 {\n  display: inline-block;\n}\n.colMap {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.map-icon {\n  background-color: #f3f3f3;\n  color: #514e4c;\n  font-size: 25px;\n  border-radius: 50px;\n  padding: 20%;\n}\nion-input {\n  width: 100%;\n  background-color: var(--ion-color-light);\n  border-radius: 20px;\n  text-align: center;\n}\nion-label {\n  padding: 4px;\n}\nion-button {\n  border-radius: 50px;\n  color: var(--ion-color-light);\n  border: solid 1px #514e4c;\n  width: 45px;\n  height: 45px;\n  background-color: #514e4c;\n}\n.colStart2 {\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.colstart3 {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.itemRes {\n  width: 100%;\n}\n.pBottom {\n  text-align: center;\n}\n.colEnd {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.iconEnd {\n  font-size: 60px;\n}\ninput[type=datetime-local]:before {\n  color: transparent;\n  background: none;\n  display: block;\n  font-family: \"FontAwesome\";\n  content: \"\";\n  /* This is the calendar icon in FontAwesome */\n  width: 15px;\n  height: 20px;\n  position: absolute;\n  top: 12px;\n  right: 6px;\n  color: #999;\n}\n.currentEndDate {\n  font-size: 15px;\n  color: #514e4c;\n}\n#mapwize {\n  height: 100vh;\n  width: 100%;\n}\n.mapWize {\n  width: 100%;\n}\n.divider {\n  background: #f3f3f3;\n  height: 2px;\n  width: 50%;\n  margin: 2px auto;\n}\nion-card {\n  border-radius: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Jvb20tcmVzZXJ2YXRpb24ucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdGhlbWUvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDSWhCLDBCQUFBO0FBS0E7RUFFRSxvQkFBQTtFQU1FLGNBQUE7RUFDRiw2QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0Esc0NBQUE7RUFDQSxnREFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QURwQkY7QUNyREU7RUFDSSxlQUFBO0FEdUROO0FDb0JBO0VBQ0U7OztJQUFBO0VBS0E7SUFDRSw0QkFBQTtJQUNBLG1DQUFBO0lBQ0EscUNBQUE7SUFDQSw2Q0FBQTtJQUNBLGtDQUFBO0lBQ0EsaUNBQUE7SUFFQSw4QkFBQTtJQUNBLHFDQUFBO0lBQ0EsdUNBQUE7SUFDQSwrQ0FBQTtJQUNBLG9DQUFBO0lBQ0EsbUNBQUE7SUFFQSw2QkFBQTtJQUNBLHFDQUFBO0lBQ0Esc0NBQUE7SUFDQSw4Q0FBQTtJQUNBLG1DQUFBO0lBQ0Esa0NBQUE7SUFFQSw0QkFBQTtJQUNBLG1DQUFBO0lBQ0EscUNBQUE7SUFDQSx1Q0FBQTtJQUNBLGtDQUFBO0lBQ0EsaUNBQUE7SUFFQSw0QkFBQTtJQUNBLG1DQUFBO0lBQ0EscUNBQUE7SUFDQSx1Q0FBQTtJQUNBLGtDQUFBO0lBQ0EsaUNBQUE7SUFFQSwyQkFBQTtJQUNBLGlDQUFBO0lBQ0Esb0NBQUE7SUFDQSw0Q0FBQTtJQUNBLGlDQUFBO0lBQ0EsZ0NBQUE7SUFFQSx5QkFBQTtJQUNBLGlDQUFBO0lBQ0Esa0NBQUE7SUFDQSxvQ0FBQTtJQUNBLCtCQUFBO0lBQ0EsOEJBQUE7SUFFQSwyQkFBQTtJQUNBLG1DQUFBO0lBQ0Esb0NBQUE7SUFDQSxzQ0FBQTtJQUNBLGlDQUFBO0lBQ0EsZ0NBQUE7SUFFQSwwQkFBQTtJQUNBLCtCQUFBO0lBQ0EsbUNBQUE7SUFDQSwyQ0FBQTtJQUNBLGdDQUFBO0lBQ0EsK0JBQUE7RUQxQkY7O0VDNkJBOzs7SUFBQTtFQUtBO0lBQ0UsK0JBQUE7SUFDQSxpQ0FBQTtJQUVBLHlCQUFBO0lBQ0EsaUNBQUE7SUFFQSw0QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUVBLDhCQUFBO0lBRUEsOEJBQUE7RUQvQkY7O0VDa0NBO0lBQ0UsaURBQUE7SUFDQSxtREFBQTtJQUNBLHFEQUFBO0VEL0JGOztFQ21DQTs7O0lBQUE7RUFLQTtJQUNFLCtCQUFBO0lBQ0Esb0NBQUE7SUFFQSx5QkFBQTtJQUNBLGlDQUFBO0lBRUEsMkJBQUE7SUFFQSw0QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUVBLDhCQUFBO0lBRUEsaUNBQUE7SUFFQSxpQ0FBQTtJQUVBLDhCQUFBO0VEeENGO0FBQ0Y7QUMyQ0EsbUNBQUE7QUR2UEE7RUFDSSx1QkNJRztFREhILFlBQUE7QUErTUo7QUE3TUE7RUFDSSxtQkFBQTtBQWdOSjtBQTlNQTtFQUNJLGVBQUE7QUFpTko7QUEvTUE7RUFDSSxXQUFBO0FBa05KO0FBaE5BO0VBQ0ksZUFBQTtBQW1OSjtBQWpOQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FBb05KO0FBbE5BO0VBQ0ksZUFBQTtFQUNBLGNDaEJLO0FEcU9UO0FBbk5BO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQXNOSjtBQXBOQTtFQUNJLFlBQUE7QUF1Tko7QUFyTkE7RUFDSSxjQzVCSztFRDZCTCxlQUFBO0FBd05KO0FBck5BO0VBQ0ksY0NqQ0s7RURrQ0wsZUFBQTtBQXdOSjtBQXROQTtFQUNJLGNDckNLO0VEc0NMLGVBQUE7QUF5Tko7QUF2TkE7RUFDSSxlQUFBO0VBQ0EsY0MxQ0s7QURvUVQ7QUF4TkE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsdUJDcERHO0VEcURILCtCQUFBO0FBMk5KO0FBek5BO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0FBNE5KO0FBMU5BO0VBQ0EscUJBQUE7QUE2TkE7QUExTkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQTZOSjtBQTFOQTtFQUNJLHlCQ3ZFTztFRHdFUCxjQ3RFSztFRHVFTCxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBNk5KO0FBM05BO0VBQ0ksV0FBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQThOSjtBQTVOQTtFQUNJLFlBQUE7QUErTko7QUE3TkE7RUFDSSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQzFGSztBRDBUVDtBQTNOQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQThOSjtBQTNOQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBOE5KO0FBNU5BO0VBQ0ksV0FBQTtBQStOSjtBQTVOQTtFQUNJLGtCQUFBO0FBK05KO0FBNU5BO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUErTko7QUE3TkE7RUFDSSxlQUFBO0FBZ09KO0FBOU5FO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSw2Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFpT0o7QUEvTkU7RUFDRSxlQUFBO0VBQ0EsY0M1SUs7QUQ4V1Q7QUFoT0U7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQW1PSjtBQWpPQTtFQUNJLFdBQUE7QUFvT0o7QUFoT0E7RUFDRSxtQkMzSmE7RUQ0SmIsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQW1PRjtBQS9OQTtFQUNJLG1CQUFBO0FBa09KIiwiZmlsZSI6InJvb20tcmVzZXJ2YXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnLi4vLi4vLi4vLi4vdGhlbWUvdmFyaWFibGVzLnNjc3MnIGFzIHY7XG5cbi5wcmluY2lwYWx7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHYuJGJsYW5jO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbmlvbi1jYXJke1xuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XG59XG4uc2VydmljZVRpdGxlMXtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5pb24tY29udGVudHtcbiAgICBoZWlnaHQ6IDgwJTtcbn1cbi5pY29uMntcbiAgICBmb250LXNpemU6IDIycHg7XG59XG4uY2FyZEdyaWR7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG4uaW9ue1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogdi4kcHJpbWFyeTtcbn1cbi5jb2xab25le1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiB2LiRzZWNvbmRhcnkgc29saWQgMXB4O1xufVxuLmNvbHtcbiAgICBoZWlnaHQ6IDcwcHg7XG59XG4uc3Ryb25ne1xuICAgIGNvbG9yOiB2LiRwcmltYXJ5O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmljb257XG4gICAgY29sb3I6IHYuJHByaW1hcnk7XG4gICAgZm9udC1zaXplOiAzNXB4O1xufVxuLnJlc2VydmF0aW9ue1xuICAgIGNvbG9yOiB2LiRwcmltYXJ5O1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbn1cbnNwYW57XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiB2LiRwcmltYXJ5O1xufVxuLmJvdHRvbVNoZWV0e1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvdHRvbTogMDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggMHB4IDBweDtcbiAgICB6LWluZGV4OiAyMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2LiRibGFuYztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbn1cbi5kaXYxe1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogNCU7XG59XG4uZGl2MntcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmNvbE1hcHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tYXAtaWNvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2LiRzZWNvbmRhcnk7XG4gICAgY29sb3I6IHYuJHByaW1hcnk7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgcGFkZGluZzogMjAlO1xufVxuaW9uLWlucHV0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhciggLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWxhYmVse1xuICAgIHBhZGRpbmc6IDRweDtcbn1cbmlvbi1idXR0b257XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBjb2xvcjp2YXIoIC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2LiRwcmltYXJ5O1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2LiRwcmltYXJ5O1xufVxuXG5cblxuLmNvbFN0YXJ0MntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jb2xzdGFydDN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaXRlbVJlc3tcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnBCb3R0b217XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29sRW5ke1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pY29uRW5ke1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbn1cbiAgaW5wdXRbdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJdOmJlZm9yZSB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1mYW1pbHk6ICdGb250QXdlc29tZSc7XG4gICAgY29udGVudDogJ1xcZjA3Myc7XG4gICAgLyogVGhpcyBpcyB0aGUgY2FsZW5kYXIgaWNvbiBpbiBGb250QXdlc29tZSAqL1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMnB4O1xuICAgIHJpZ2h0OiA2cHg7XG4gICAgY29sb3I6ICM5OTk7XG4gIH1cbiAgLmN1cnJlbnRFbmREYXRle1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogdi4kcHJpbWFyeTtcbiAgfVxuICAjbWFwd2l6ZSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4ubWFwV2l6ZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cblxuLmRpdmlkZXJ7XG4gIGJhY2tncm91bmQ6IHYuJHNlY29uZGFyeS1jb2w7XG4gIGhlaWdodDogMnB4O1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDJweCBhdXRvO1xufVxuXG5cbmlvbi1jYXJke1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG5cbn1cblxuIiwiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOlxuLy8gaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvXG5cblxuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG4kc2Vjb25kYXJ5LWNvbDpyZ2IoMjQzLCAyNDMsIDI0Myk7XG4kc2Vjb25kYXJ5OnJnYigyNDMsIDI0MywgMjQzKSA7XG4kYmxhbmM6cmdiYSgyNTUsMjU1LDI1NSk7XG4kcHJpbWFyeTojNTE0ZTRjO1xuOnJvb3Qge1xuXG4gIC0tY29sb3ItdGFiczojNTE0ZTRjO1xuXG5cbiAgaW9uLWl0ZW0ge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gICAgLyoqIHByaW1hcnkgKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICRwcmltYXJ5O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNTYsIDEyOCwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzMxNzFlMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNGM4ZGZmO1xuXG4gIC8qKiBzZWNvbmRhcnkgKiovXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzNkYzJmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogNjEsIDE5NCwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzM2YWJlMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM1MGM4ZmY7XG5cbiAgLyoqIHRlcnRpYXJ5ICoqL1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzUyNjBmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiA4MiwgOTYsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM0ODU0ZTA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM2MzcwZmY7XG5cbiAgLyoqIHN1Y2Nlc3MgKiovXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyZGQzNmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA0NSwgMjExLCAxMTE7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMjhiYTYyO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0MmQ3N2Q7XG5cbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmM0MDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDE5NiwgOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGFjMDg7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmY2EyMjtcblxuICAvKiogZGFuZ2VyICoqL1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNlYjQ0NWE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDIzNSwgNjgsIDkwO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2NmM2M0ZjsvL2ljaVxuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2VkNTc2YjtcblxuICAvKiogZGFyayAqKi9cbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODsvL2ljaVxuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMzQsIDM2LCA0MDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogIzM4M2EzZTtcblxuICAvKiogbWVkaXVtICoqL1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5Mjk0OWM7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE0NiwgMTQ4LCAxNTY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjsvL2ljaVxuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4MDgyODk7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjOWQ5ZmE2O1xuXG4gIC8qKiBsaWdodCAqKi9cbiAgLS1pb24tY29sb3ItbGlnaHQ6ICNmNGY1Zjg7Ly9pY2lcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2Y1ZjZmOTtcbn1cblxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAvKlxuICAgKiBEYXJrIENvbG9yc1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIGJvZHkge1xuICAgIC0taW9uLWNvbG9yLXByaW1hcnk6ICM0MjhjZmY7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDY2LDE0MCwyNTU7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzNhN2JlMDtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM1NTk4ZmY7XG5cbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICM1MGM4ZmY7XG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogODAsMjAwLDI1NTtcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjNDZiMGUwO1xuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNjJjZWZmO1xuXG4gICAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM2YTY0ZmY7XG4gICAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMDYsMTAwLDI1NTtcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNWQ1OGUwO1xuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM3OTc0ZmY7XG5cbiAgICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMmZkZjc1O1xuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA0NywyMjMsMTE3O1xuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOWM0Njc7XG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDRlMjgzO1xuXG4gICAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmZDUzNDtcbiAgICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LDIxMyw1MjtcbiAgICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBiYjJlO1xuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmZDk0ODtcblxuICAgIC0taW9uLWNvbG9yLWRhbmdlcjogI2ZmNDk2MTtcbiAgICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNTUsNzMsOTc7XG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAgIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2UwNDA1NTtcbiAgICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2ZmNWI3MTtcblxuICAgIC0taW9uLWNvbG9yLWRhcms6ICNmNGY1Zjg7XG4gICAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDI0NCwyNDUsMjQ4O1xuICAgIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAgIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICNkN2Q4ZGE7XG4gICAgLS1pb24tY29sb3ItZGFyay10aW50OiAjZjVmNmY5O1xuXG4gICAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTg5YWEyO1xuICAgIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE1MiwxNTQsMTYyO1xuICAgIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogIzAwMDAwMDtcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4Njg4OGY7XG4gICAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICNhMmE0YWI7XG5cbiAgICAtLWlvbi1jb2xvci1saWdodDogIzIyMjQyODtcbiAgICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDM0LDM2LDQwO1xuICAgIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gICAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICMxZTIwMjM7XG4gICAgLS1pb24tY29sb3ItbGlnaHQtdGludDogIzM4M2EzZTtcbiAgfVxuXG4gIC8qXG4gICAqIGlPUyBEYXJrIFRoZW1lXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLmlvcyBib2R5IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAwLDAsMDtcblxuICAgIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gICAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwyNTUsMjU1O1xuXG4gICAgLS1pb24tY29sb3Itc3RlcC01MDogIzBkMGQwZDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzFhMWExYTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTE1MDogIzI2MjYyNjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzMzMzMzMztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzQwNDA0MDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTMwMDogIzRkNGQ0ZDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzU5NTk1OTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzY2NjY2NjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTQ1MDogIzczNzM3MztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzgwODA4MDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzhjOGM4YztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTYwMDogIzk5OTk5OTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2E2YTZhNjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2IzYjNiMztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTc1MDogI2JmYmZiZjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2NjY2NjYztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2Q5ZDlkOTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTkwMDogI2U2ZTZlNjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YyZjJmMjtcblxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzAwMDAwMDtcblxuICAgIC0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFjMWMxZDtcbiAgfVxuXG4gIC5pb3MgaW9uLW1vZGFsIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xMDApO1xuICAgIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbiAgICAtLWlvbi10b29sYmFyLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwKTtcbiAgfVxuXG5cbiAgLypcbiAgICogTWF0ZXJpYWwgRGVzaWduIERhcmsgVGhlbWVcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAubWQgYm9keSB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMTgsMTgsMTg7XG5cbiAgICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAgIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsMjU1LDI1NTtcblxuICAgIC0taW9uLWJvcmRlci1jb2xvcjogIzIyMjIyMjtcblxuICAgIC0taW9uLWNvbG9yLXN0ZXAtNTA6ICMxZTFlMWU7XG4gICAgLS1pb24tY29sb3Itc3RlcC0xMDA6ICMyYTJhMmE7XG4gICAgLS1pb24tY29sb3Itc3RlcC0xNTA6ICMzNjM2MzY7XG4gICAgLS1pb24tY29sb3Itc3RlcC0yMDA6ICM0MTQxNDE7XG4gICAgLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0ZDRkNGQ7XG4gICAgLS1pb24tY29sb3Itc3RlcC0zMDA6ICM1OTU5NTk7XG4gICAgLS1pb24tY29sb3Itc3RlcC0zNTA6ICM2NTY1NjU7XG4gICAgLS1pb24tY29sb3Itc3RlcC00MDA6ICM3MTcxNzE7XG4gICAgLS1pb24tY29sb3Itc3RlcC00NTA6ICM3ZDdkN2Q7XG4gICAgLS1pb24tY29sb3Itc3RlcC01MDA6ICM4OTg5ODk7XG4gICAgLS1pb24tY29sb3Itc3RlcC01NTA6ICM5NDk0OTQ7XG4gICAgLS1pb24tY29sb3Itc3RlcC02MDA6ICNhMGEwYTA7XG4gICAgLS1pb24tY29sb3Itc3RlcC02NTA6ICNhY2FjYWM7XG4gICAgLS1pb24tY29sb3Itc3RlcC03MDA6ICNiOGI4Yjg7XG4gICAgLS1pb24tY29sb3Itc3RlcC03NTA6ICNjNGM0YzQ7XG4gICAgLS1pb24tY29sb3Itc3RlcC04MDA6ICNkMGQwZDA7XG4gICAgLS1pb24tY29sb3Itc3RlcC04NTA6ICNkYmRiZGI7XG4gICAgLS1pb24tY29sb3Itc3RlcC05MDA6ICNlN2U3ZTc7XG4gICAgLS1pb24tY29sb3Itc3RlcC05NTA6ICNmM2YzZjM7XG5cbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMxZTFlMWU7XG5cbiAgICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG5cbiAgICAtLWlvbi10YWItYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG5cbiAgICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxZTFlMWU7XG4gIH1cbn1cblxuLyogSW1wb3J0aW5nIEJvb3RzdHJhcCBTQ1NTIGZpbGUuICovXG4vL0BpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy9ib290c3RyYXAnO1xuIl19 */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.page */ "zpKS");
/* harmony import */ var _services_reservation_room_reservation_room_reservation_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/reservation/room-reservation/room-reservation.page */ "q/5c");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _authentification_logout_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./authentification/logout.pipe */ "yKjO");
/* harmony import */ var _services_reservation_room_reservation_room_reservation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/reservation/room-reservation/room-reservation.service */ "hfc5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_reservation_reservation_historical_reservation_historical_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/reservation/reservation-historical/reservation-historical.page */ "GRI9");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_reducers_allreducers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./store/reducers/allreducers */ "9nU9");
/* harmony import */ var _modules_services_home_services_home_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/services-home/services-home.page */ "nPlL");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "Wwn5");
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/google-maps */ "3sZV");



















// import { AgmCoreModule } from '@agm/core';

let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            // AgmCoreModule.forRoot({
            //   apiKey: 'AIzaSyB8EAwtn4Xo1mWWyQmmlPyOYvHre6NeRgE'
            // }),
            _angular_google_maps__WEBPACK_IMPORTED_MODULE_19__["GoogleMapsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["IonicStorageModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_15__["StoreModule"].forRoot({ notification: _store_reducers_allreducers__WEBPACK_IMPORTED_MODULE_16__["notificationReducer"] }),
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _home_home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"],
            _services_reservation_room_reservation_room_reservation_page__WEBPACK_IMPORTED_MODULE_9__["RoomReservationPage"],
            _services_reservation_reservation_historical_reservation_historical_page__WEBPACK_IMPORTED_MODULE_14__["ReservationHistoricalPage"],
            _authentification_logout_pipe__WEBPACK_IMPORTED_MODULE_11__["LogoutPipe"],
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        providers: [_services_reservation_room_reservation_room_reservation_service__WEBPACK_IMPORTED_MODULE_12__["RoomReservationService"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] },
            _modules_services_home_services_home_page__WEBPACK_IMPORTED_MODULE_17__["ServicesMenu"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_18__["CallNumber"]],
        entryComponents: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "gBsL":
/*!*********************************!*\
  !*** ./src/mocks/room.mocks.ts ***!
  \*********************************/
/*! exports provided: RoomMocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomMocks", function() { return RoomMocks; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let RoomMocks = class RoomMocks {
    constructor() {
        //TOdo créer toutes les salles
        this.User = [
            {
                id: 1,
                firstname: 'firstname1',
                lastname: 'lastname1',
                society: 'society1',
                phone: '021365422',
                email: 'firstname.lastname1@email.com',
                role: 'admin',
                qr: 'Qr1',
                sites: 'Site.com',
                assignments: 'assignments1',
                role_description: 'role_description1',
                plainPassword: '1234',
            },
            {
                id: 2,
                firstname: 'firstname2',
                lastname: 'lastname2',
                society: 'society2',
                phone: '021365422',
                email: 'firstname.lastname2@email.com',
                role: 'admin',
                qr: 'Qr2',
                sites: 'Site.com',
                assignments: 'assignments2',
                role_description: 'role_description2',
                plainPassword: '1234',
            },
        ];
        this.Check = [
            { id: 1, description: 'description1', checked: 25, equipments: '' },
            { id: 2, description: 'description2', checked: 30, equipments: '' },
            { id: 3, description: 'description3', checked: 35, equipments: '' }
        ];
        this.Equipment = [
            { id: 1, name: 'Equipment1', checks: this.Check[0], roomTypes: 'room1' },
            { id: 2, name: 'Equipment2', checks: this.Check[1], roomTypes: 'room2' },
            { id: 3, name: 'Equipment3', checks: this.Check[2], roomTypes: 'room3' },
        ];
        this.rooms = [
            {
                id: 1,
                technicalId: 1,
                reservationId: 1,
                mapwizeId: '5d8a1922618902a02a7c7053',
                name: 'Salle de réunion',
                floor: 1,
                site: 'site.com',
                building: 'iviflo',
                type: 'salle de reunion',
                equipments: this.Equipment[1],
                maintainers: this.User[1],
                zone: 'Zone1',
                status: 'Libre',
                dateFin: '',
                dateDebut: '',
                personne: 1,
            },
            {
                id: 2,
                technicalId: 2,
                reservationId: 2,
                mapwizeId: '5d8a1922618902a02a7c704f',
                name: 'Box',
                floor: 2,
                site: 'site.com',
                building: 'iviflo',
                type: 'Box',
                equipments: this.Equipment[0],
                maintainers: this.User[0],
                zone: 'Zone2',
                status: 'Réservé',
                dateFin: '',
                dateDebut: '',
                personne: 5,
            },
            {
                id: 3,
                technicalId: 3,
                reservationId: 3,
                mapwizeId: '5d8a1922618902a02a7c704d',
                name: 'Commercial',
                floor: 3,
                site: 'site.com',
                building: 'iviflo',
                type: 'Commercial',
                equipments: this.Equipment[2],
                maintainers: this.User[1],
                zone: 'Zone3',
                status: 'Occupé',
                dateFin: '',
                dateDebut: '',
                personne: 4,
            },
        ];
    }
    getAll() {
        return this.rooms;
    }
};
RoomMocks.busyRoomId = '2';
RoomMocks.occupedRoomId = '3';
RoomMocks = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RoomMocks);



/***/ }),

/***/ "hfc5":
/*!***********************************************************************************!*\
  !*** ./src/app/services/reservation/room-reservation/room-reservation.service.ts ***!
  \***********************************************************************************/
/*! exports provided: RoomReservationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomReservationService", function() { return RoomReservationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_mocks_room_mocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/mocks/room.mocks */ "gBsL");




let RoomReservationService = class RoomReservationService {
    constructor(RoomsMocks, store) {
        this.RoomsMocks = RoomsMocks;
        this.store = store;
    }
    getrooms() {
        return this.RoomsMocks.getAll();
    }
    getAllState() {
        return this.store.select('appReducer');
    }
};
RoomReservationService.ctorParameters = () => [
    { type: src_mocks_room_mocks__WEBPACK_IMPORTED_MODULE_3__["RoomMocks"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
RoomReservationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RoomReservationService);



/***/ }),

/***/ "kGLw":
/*!**********************************************************************************************!*\
  !*** ./src/app/services/reservation/reservation-historical/reservation-historical.page.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/** Ionic CSS Variables **/\n:root {\n  --color-tabs:#514e4c;\n  /** primary **/\n  --ion-color-primary: $primary;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}\n:root ion-item {\n  font-size: 14px;\n}\n@media (prefers-color-scheme: dark) {\n  /*\n   * Dark Colors\n   * -------------------------------------------\n   */\n  body {\n    --ion-color-primary: #428cff;\n    --ion-color-primary-rgb: 66,140,255;\n    --ion-color-primary-contrast: #ffffff;\n    --ion-color-primary-contrast-rgb: 255,255,255;\n    --ion-color-primary-shade: #3a7be0;\n    --ion-color-primary-tint: #5598ff;\n    --ion-color-secondary: #50c8ff;\n    --ion-color-secondary-rgb: 80,200,255;\n    --ion-color-secondary-contrast: #ffffff;\n    --ion-color-secondary-contrast-rgb: 255,255,255;\n    --ion-color-secondary-shade: #46b0e0;\n    --ion-color-secondary-tint: #62ceff;\n    --ion-color-tertiary: #6a64ff;\n    --ion-color-tertiary-rgb: 106,100,255;\n    --ion-color-tertiary-contrast: #ffffff;\n    --ion-color-tertiary-contrast-rgb: 255,255,255;\n    --ion-color-tertiary-shade: #5d58e0;\n    --ion-color-tertiary-tint: #7974ff;\n    --ion-color-success: #2fdf75;\n    --ion-color-success-rgb: 47,223,117;\n    --ion-color-success-contrast: #000000;\n    --ion-color-success-contrast-rgb: 0,0,0;\n    --ion-color-success-shade: #29c467;\n    --ion-color-success-tint: #44e283;\n    --ion-color-warning: #ffd534;\n    --ion-color-warning-rgb: 255,213,52;\n    --ion-color-warning-contrast: #000000;\n    --ion-color-warning-contrast-rgb: 0,0,0;\n    --ion-color-warning-shade: #e0bb2e;\n    --ion-color-warning-tint: #ffd948;\n    --ion-color-danger: #ff4961;\n    --ion-color-danger-rgb: 255,73,97;\n    --ion-color-danger-contrast: #ffffff;\n    --ion-color-danger-contrast-rgb: 255,255,255;\n    --ion-color-danger-shade: #e04055;\n    --ion-color-danger-tint: #ff5b71;\n    --ion-color-dark: #f4f5f8;\n    --ion-color-dark-rgb: 244,245,248;\n    --ion-color-dark-contrast: #000000;\n    --ion-color-dark-contrast-rgb: 0,0,0;\n    --ion-color-dark-shade: #d7d8da;\n    --ion-color-dark-tint: #f5f6f9;\n    --ion-color-medium: #989aa2;\n    --ion-color-medium-rgb: 152,154,162;\n    --ion-color-medium-contrast: #000000;\n    --ion-color-medium-contrast-rgb: 0,0,0;\n    --ion-color-medium-shade: #86888f;\n    --ion-color-medium-tint: #a2a4ab;\n    --ion-color-light: #222428;\n    --ion-color-light-rgb: 34,36,40;\n    --ion-color-light-contrast: #ffffff;\n    --ion-color-light-contrast-rgb: 255,255,255;\n    --ion-color-light-shade: #1e2023;\n    --ion-color-light-tint: #383a3e;\n  }\n\n  /*\n   * iOS Dark Theme\n   * -------------------------------------------\n   */\n  .ios body {\n    --ion-background-color: #000000;\n    --ion-background-color-rgb: 0,0,0;\n    --ion-text-color: #ffffff;\n    --ion-text-color-rgb: 255,255,255;\n    --ion-color-step-50: #0d0d0d;\n    --ion-color-step-100: #1a1a1a;\n    --ion-color-step-150: #262626;\n    --ion-color-step-200: #333333;\n    --ion-color-step-250: #404040;\n    --ion-color-step-300: #4d4d4d;\n    --ion-color-step-350: #595959;\n    --ion-color-step-400: #666666;\n    --ion-color-step-450: #737373;\n    --ion-color-step-500: #808080;\n    --ion-color-step-550: #8c8c8c;\n    --ion-color-step-600: #999999;\n    --ion-color-step-650: #a6a6a6;\n    --ion-color-step-700: #b3b3b3;\n    --ion-color-step-750: #bfbfbf;\n    --ion-color-step-800: #cccccc;\n    --ion-color-step-850: #d9d9d9;\n    --ion-color-step-900: #e6e6e6;\n    --ion-color-step-950: #f2f2f2;\n    --ion-item-background: #000000;\n    --ion-card-background: #1c1c1d;\n  }\n\n  .ios ion-modal {\n    --ion-background-color: var(--ion-color-step-100);\n    --ion-toolbar-background: var(--ion-color-step-150);\n    --ion-toolbar-border-color: var(--ion-color-step-250);\n  }\n\n  /*\n   * Material Design Dark Theme\n   * -------------------------------------------\n   */\n  .md body {\n    --ion-background-color: #121212;\n    --ion-background-color-rgb: 18,18,18;\n    --ion-text-color: #ffffff;\n    --ion-text-color-rgb: 255,255,255;\n    --ion-border-color: #222222;\n    --ion-color-step-50: #1e1e1e;\n    --ion-color-step-100: #2a2a2a;\n    --ion-color-step-150: #363636;\n    --ion-color-step-200: #414141;\n    --ion-color-step-250: #4d4d4d;\n    --ion-color-step-300: #595959;\n    --ion-color-step-350: #656565;\n    --ion-color-step-400: #717171;\n    --ion-color-step-450: #7d7d7d;\n    --ion-color-step-500: #898989;\n    --ion-color-step-550: #949494;\n    --ion-color-step-600: #a0a0a0;\n    --ion-color-step-650: #acacac;\n    --ion-color-step-700: #b8b8b8;\n    --ion-color-step-750: #c4c4c4;\n    --ion-color-step-800: #d0d0d0;\n    --ion-color-step-850: #dbdbdb;\n    --ion-color-step-900: #e7e7e7;\n    --ion-color-step-950: #f3f3f3;\n    --ion-item-background: #1e1e1e;\n    --ion-toolbar-background: #1f1f1f;\n    --ion-tab-bar-background: #1f1f1f;\n    --ion-card-background: #1e1e1e;\n  }\n}\n/* Importing Bootstrap SCSS file. */\n.principal {\n  background-color: #f3f3f3;\n  height: 100%;\n}\nion-card {\n  border-radius: 35px;\n}\nion-content {\n  height: 80%;\n}\n.icon {\n  color: #514e4c;\n  font-size: 35px;\n}\n.reservation {\n  color: #514e4c;\n  font-size: 35px;\n}\nspan {\n  font-size: 20px;\n  color: #514e4c;\n}\n.terminees, .aVenir {\n  color: var(--ion-color-dark);\n  font-size: 16px;\n}\n.colStart {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.Reservationtitle {\n  font-size: 14px;\n}\n.Historiquetitle {\n  font-size: 20px;\n}\n.rowStart {\n  border-bottom: var(--ion-color-light) 1px solid;\n  height: 70px;\n}\n.errorMessageDiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 3rem;\n}\n.errorMessageSpan {\n  color: #514e4c;\n  font-size: 17px;\n}\n.errorIcon {\n  color: #514e4c;\n  font-size: 25px;\n}\n.ter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\np {\n  color: #514e4c;\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vcmVzZXJ2YXRpb24taGlzdG9yaWNhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsMEJBQUE7QUFLQTtFQUVFLG9CQUFBO0VBTUUsY0FBQTtFQUNGLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsaURBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsZUFBQTtFQUNBLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSxzQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBQ3JCRjtBRHBERTtFQUNJLGVBQUE7QUNzRE47QURxQkE7RUFDRTs7O0lBQUE7RUFLQTtJQUNFLDRCQUFBO0lBQ0EsbUNBQUE7SUFDQSxxQ0FBQTtJQUNBLDZDQUFBO0lBQ0Esa0NBQUE7SUFDQSxpQ0FBQTtJQUVBLDhCQUFBO0lBQ0EscUNBQUE7SUFDQSx1Q0FBQTtJQUNBLCtDQUFBO0lBQ0Esb0NBQUE7SUFDQSxtQ0FBQTtJQUVBLDZCQUFBO0lBQ0EscUNBQUE7SUFDQSxzQ0FBQTtJQUNBLDhDQUFBO0lBQ0EsbUNBQUE7SUFDQSxrQ0FBQTtJQUVBLDRCQUFBO0lBQ0EsbUNBQUE7SUFDQSxxQ0FBQTtJQUNBLHVDQUFBO0lBQ0Esa0NBQUE7SUFDQSxpQ0FBQTtJQUVBLDRCQUFBO0lBQ0EsbUNBQUE7SUFDQSxxQ0FBQTtJQUNBLHVDQUFBO0lBQ0Esa0NBQUE7SUFDQSxpQ0FBQTtJQUVBLDJCQUFBO0lBQ0EsaUNBQUE7SUFDQSxvQ0FBQTtJQUNBLDRDQUFBO0lBQ0EsaUNBQUE7SUFDQSxnQ0FBQTtJQUVBLHlCQUFBO0lBQ0EsaUNBQUE7SUFDQSxrQ0FBQTtJQUNBLG9DQUFBO0lBQ0EsK0JBQUE7SUFDQSw4QkFBQTtJQUVBLDJCQUFBO0lBQ0EsbUNBQUE7SUFDQSxvQ0FBQTtJQUNBLHNDQUFBO0lBQ0EsaUNBQUE7SUFDQSxnQ0FBQTtJQUVBLDBCQUFBO0lBQ0EsK0JBQUE7SUFDQSxtQ0FBQTtJQUNBLDJDQUFBO0lBQ0EsZ0NBQUE7SUFDQSwrQkFBQTtFQzNCRjs7RUQ4QkE7OztJQUFBO0VBS0E7SUFDRSwrQkFBQTtJQUNBLGlDQUFBO0lBRUEseUJBQUE7SUFDQSxpQ0FBQTtJQUVBLDRCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBRUEsOEJBQUE7SUFFQSw4QkFBQTtFQ2hDRjs7RURtQ0E7SUFDRSxpREFBQTtJQUNBLG1EQUFBO0lBQ0EscURBQUE7RUNoQ0Y7O0VEb0NBOzs7SUFBQTtFQUtBO0lBQ0UsK0JBQUE7SUFDQSxvQ0FBQTtJQUVBLHlCQUFBO0lBQ0EsaUNBQUE7SUFFQSwyQkFBQTtJQUVBLDRCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBRUEsOEJBQUE7SUFFQSxpQ0FBQTtJQUVBLGlDQUFBO0lBRUEsOEJBQUE7RUN6Q0Y7QUFDRjtBRDRDQSxtQ0FBQTtBQ3ZQQTtFQUNJLHlCREdPO0VDRlAsWUFBQTtBQThNSjtBQTVNQTtFQUNJLG1CQUFBO0FBK01KO0FBN01BO0VBQ0ksV0FBQTtBQWdOSjtBQTlNQTtFQUNJLGNETEs7RUNNTCxlQUFBO0FBaU5KO0FBL01BO0VBQ0ksY0RUSztFQ1VMLGVBQUE7QUFrTko7QUFoTkE7RUFDSSxlQUFBO0VBQ0EsY0RkSztBQ2lPVDtBQWpOQTtFQUNJLDRCQUFBO0VBQ0EsZUFBQTtBQW9OSjtBQWpOQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFvTko7QUFsTkE7RUFDSSxlQUFBO0FBcU5KO0FBbk5BO0VBQ0ksZUFBQTtBQXNOSjtBQW5OQTtFQUNJLCtDQUFBO0VBQ0EsWUFBQTtBQXNOSjtBQW5OQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQXNOSjtBQXBOQTtFQUNJLGNEOUNLO0VDK0NMLGVBQUE7QUF1Tko7QUFyTkE7RUFDSSxjRGxESztFQ21ETCxlQUFBO0FBd05KO0FBdE5BO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUF5Tko7QUF2TkE7RUFDSSxjRDNESztFQzRETCxTQUFBO0VBQ0EsVUFBQTtBQTBOSiIsImZpbGUiOiJyZXNlcnZhdGlvbi1oaXN0b3JpY2FsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xuXG5cbi8qKiBJb25pYyBDU1MgVmFyaWFibGVzICoqL1xuJHNlY29uZGFyeS1jb2w6cmdiKDI0MywgMjQzLCAyNDMpO1xuJHNlY29uZGFyeTpyZ2IoMjQzLCAyNDMsIDI0MykgO1xuJGJsYW5jOnJnYmEoMjU1LDI1NSwyNTUpO1xuJHByaW1hcnk6IzUxNGU0Yztcbjpyb290IHtcblxuICAtLWNvbG9yLXRhYnM6IzUxNGU0YztcblxuXG4gIGlvbi1pdGVtIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAgIC8qKiBwcmltYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAkcHJpbWFyeTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDU2LCAxMjgsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICMzMTcxZTA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzRjOGRmZjtcblxuICAvKiogc2Vjb25kYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICMzZGMyZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDYxLCAxOTQsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICMzNmFiZTA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNTBjOGZmO1xuXG4gIC8qKiB0ZXJ0aWFyeSAqKi9cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM1MjYwZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogODIsIDk2LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNDg1NGUwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNjM3MGZmO1xuXG4gIC8qKiBzdWNjZXNzICoqL1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMmRkMzZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDUsIDIxMSwgMTExO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI4YmE2MjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDJkNzdkO1xuXG4gIC8qKiB3YXJuaW5nICoqL1xuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZjNDA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAxOTYsIDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBhYzA4O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmNhMjI7XG5cbiAgLyoqIGRhbmdlciAqKi9cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZWI0NDVhO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyMzUsIDY4LCA5MDtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNjZjNjNGY7Ly9pY2lcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNlZDU3NmI7XG5cbiAgLyoqIGRhcmsgKiovXG4gIC0taW9uLWNvbG9yLWRhcms6ICMyMjI0Mjg7Ly9pY2lcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LCAzNiwgNDA7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICMzODNhM2U7XG5cbiAgLyoqIG1lZGl1bSAqKi9cbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTI5NDljO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNDYsIDE0OCwgMTU2O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICNmZmZmZmY7Ly9pY2lcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODA4Mjg5O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogIzlkOWZhNjtcblxuICAvKiogbGlnaHQgKiovXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjZjRmNWY4Oy8vaWNpXG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjQ0LCAyNDUsIDI0ODtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICNkN2Q4ZGE7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmNWY2Zjk7XG59XG5cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgLypcbiAgICogRGFyayBDb2xvcnNcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBib2R5IHtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjNDI4Y2ZmO1xuICAgIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA2NiwxNDAsMjU1O1xuICAgIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAgIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICMzYTdiZTA7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNTU5OGZmO1xuXG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjNTBjOGZmO1xuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDgwLDIwMCwyNTU7XG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzQ2YjBlMDtcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzYyY2VmZjtcblxuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNmE2NGZmO1xuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMTA2LDEwMCwyNTU7XG4gICAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzVkNThlMDtcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNzk3NGZmO1xuXG4gICAgLS1pb24tY29sb3Itc3VjY2VzczogIzJmZGY3NTtcbiAgICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDcsMjIzLDExNztcbiAgICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMjljNDY3O1xuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQ0ZTI4MztcblxuICAgIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmQ1MzQ7XG4gICAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwyMTMsNTI7XG4gICAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gICAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYmIyZTtcbiAgICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmQ5NDg7XG5cbiAgICAtLWlvbi1jb2xvci1kYW5nZXI6ICNmZjQ5NjE7XG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjU1LDczLDk3O1xuICAgIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNlMDQwNTU7XG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmZjViNzE7XG5cbiAgICAtLWlvbi1jb2xvci1kYXJrOiAjZjRmNWY4O1xuICAgIC0taW9uLWNvbG9yLWRhcmstcmdiOiAyNDQsMjQ1LDI0ODtcbiAgICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAgIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjZDdkOGRhO1xuICAgIC0taW9uLWNvbG9yLWRhcmstdGludDogI2Y1ZjZmOTtcblxuICAgIC0taW9uLWNvbG9yLW1lZGl1bTogIzk4OWFhMjtcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNTIsMTU0LDE2MjtcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gICAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODY4ODhmO1xuICAgIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjYTJhNGFiO1xuXG4gICAgLS1pb24tY29sb3ItbGlnaHQ6ICMyMjI0Mjg7XG4gICAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAzNCwzNiw0MDtcbiAgICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAgIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjMWUyMDIzO1xuICAgIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICMzODNhM2U7XG4gIH1cblxuICAvKlxuICAgKiBpT1MgRGFyayBUaGVtZVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC5pb3MgYm9keSB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwwLDA7XG5cbiAgICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAgIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsMjU1LDI1NTtcblxuICAgIC0taW9uLWNvbG9yLXN0ZXAtNTA6ICMwZDBkMGQ7XG4gICAgLS1pb24tY29sb3Itc3RlcC0xMDA6ICMxYTFhMWE7XG4gICAgLS1pb24tY29sb3Itc3RlcC0xNTA6ICMyNjI2MjY7XG4gICAgLS1pb24tY29sb3Itc3RlcC0yMDA6ICMzMzMzMzM7XG4gICAgLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0MDQwNDA7XG4gICAgLS1pb24tY29sb3Itc3RlcC0zMDA6ICM0ZDRkNGQ7XG4gICAgLS1pb24tY29sb3Itc3RlcC0zNTA6ICM1OTU5NTk7XG4gICAgLS1pb24tY29sb3Itc3RlcC00MDA6ICM2NjY2NjY7XG4gICAgLS1pb24tY29sb3Itc3RlcC00NTA6ICM3MzczNzM7XG4gICAgLS1pb24tY29sb3Itc3RlcC01MDA6ICM4MDgwODA7XG4gICAgLS1pb24tY29sb3Itc3RlcC01NTA6ICM4YzhjOGM7XG4gICAgLS1pb24tY29sb3Itc3RlcC02MDA6ICM5OTk5OTk7XG4gICAgLS1pb24tY29sb3Itc3RlcC02NTA6ICNhNmE2YTY7XG4gICAgLS1pb24tY29sb3Itc3RlcC03MDA6ICNiM2IzYjM7XG4gICAgLS1pb24tY29sb3Itc3RlcC03NTA6ICNiZmJmYmY7XG4gICAgLS1pb24tY29sb3Itc3RlcC04MDA6ICNjY2NjY2M7XG4gICAgLS1pb24tY29sb3Itc3RlcC04NTA6ICNkOWQ5ZDk7XG4gICAgLS1pb24tY29sb3Itc3RlcC05MDA6ICNlNmU2ZTY7XG4gICAgLS1pb24tY29sb3Itc3RlcC05NTA6ICNmMmYyZjI7XG5cbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG5cbiAgICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxYzFjMWQ7XG4gIH1cblxuICAuaW9zIGlvbi1tb2RhbCB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwKTtcbiAgICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCk7XG4gICAgLS1pb24tdG9vbGJhci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCk7XG4gIH1cblxuXG4gIC8qXG4gICAqIE1hdGVyaWFsIERlc2lnbiBEYXJrIFRoZW1lXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLm1kIGJvZHkge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDE4LDE4LDE4O1xuXG4gICAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LDI1NSwyNTU7XG5cbiAgICAtLWlvbi1ib3JkZXItY29sb3I6ICMyMjIyMjI7XG5cbiAgICAtLWlvbi1jb2xvci1zdGVwLTUwOiAjMWUxZTFlO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMTAwOiAjMmEyYTJhO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMzYzNjM2O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjNDE0MTQxO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMjUwOiAjNGQ0ZDRkO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNTk1OTU5O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNjU2NTY1O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNDAwOiAjNzE3MTcxO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjN2Q3ZDdkO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODk4OTg5O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNTUwOiAjOTQ5NDk0O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjYTBhMGEwO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYWNhY2FjO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNzAwOiAjYjhiOGI4O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYzRjNGM0O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtODAwOiAjZDBkMGQwO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZGJkYmRiO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTdlN2U3O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjNmM2YzO1xuXG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMWUxZTFlO1xuXG4gICAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuXG4gICAgLS1pb24tdGFiLWJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuXG4gICAgLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiAjMWUxZTFlO1xuICB9XG59XG5cbi8qIEltcG9ydGluZyBCb290c3RyYXAgU0NTUyBmaWxlLiAqL1xuLy9AaW1wb3J0ICd+Ym9vdHN0cmFwL3Njc3MvYm9vdHN0cmFwJztcbiIsIkB1c2UgJy4uLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzJyBhcyB2O1xuXG4ucHJpbmNpcGFse1xuICAgIGJhY2tncm91bmQtY29sb3I6ICB2LiRzZWNvbmRhcnk7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuaW9uLWNhcmR7XG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcbn1cbmlvbi1jb250ZW50e1xuICAgIGhlaWdodDo4MCU7XG59XG4uaWNvbntcbiAgICBjb2xvcjogdi4kcHJpbWFyeTtcbiAgICBmb250LXNpemU6IDM1cHg7XG59XG4ucmVzZXJ2YXRpb257XG4gICAgY29sb3I6IHYuJHByaW1hcnk7XG4gICAgZm9udC1zaXplOiAzNXB4O1xufVxuc3BhbntcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHYuJHByaW1hcnk7XG59XG4udGVybWluZWVzLC5hVmVuaXJ7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICBmb250LXNpemU6MTZweDtcbiAgICB9XG5cbi5jb2xTdGFydHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5SZXNlcnZhdGlvbnRpdGxle1xuICAgIGZvbnQtc2l6ZTogMTRweDsgXG59XG4uSGlzdG9yaXF1ZXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMjBweDsgXG59XG5cbi5yb3dTdGFydHtcbiAgICBib3JkZXItYm90dG9tOiB2YXIoIC0taW9uLWNvbG9yLWxpZ2h0KSAxcHggc29saWQ7XG4gICAgaGVpZ2h0OiA3MHB4O1xufVxuXG4uZXJyb3JNZXNzYWdlRGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDNyZW07XG59XG4uZXJyb3JNZXNzYWdlU3BhbntcbiAgICBjb2xvcjogdi4kcHJpbWFyeTtcbiAgICBmb250LXNpemU6IDE3cHg7XG59XG4uZXJyb3JJY29ue1xuICAgIGNvbG9yOiB2LiRwcmltYXJ5O1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cbi50ZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxucHtcbiAgICBjb2xvcjogdi4kcHJpbWFyeTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn0iXX0= */");

/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "nKjo":
/*!******************************************************!*\
  !*** ./src/app/authentification/security.service.ts ***!
  \******************************************************/
/*! exports provided: SecurityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityService", function() { return SecurityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");





const TOKEN_KEY = 'auth_token';
let SecurityService = class SecurityService {
    constructor(storage, plt) {
        this.storage = storage;
        this.plt = plt;
        this.authState = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.plt.ready().then(() => {
            this.checkToken();
        });
    }
    login() {
        return this.storage.set(TOKEN_KEY, 'admin123').then(res => {
            this.authState.next(true);
        });
    }
    logout() {
        return this.storage.remove(TOKEN_KEY).then(res => {
            this.authState.next(false);
        });
    }
    isAuth() {
        return this.authState.value;
    }
    checkToken() {
        return this.storage.get(TOKEN_KEY).then(res => {
            if (res) {
                this.authState.next(true);
            }
        });
    }
};
SecurityService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
SecurityService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SecurityService);



/***/ }),

/***/ "nPlL":
/*!*************************************************************!*\
  !*** ./src/app/modules/services-home/services-home.page.ts ***!
  \*************************************************************/
/*! exports provided: ServicesMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesMenu", function() { return ServicesMenu; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_services_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./services-home.page.html */ "zena");
/* harmony import */ var _services_home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services-home.page.scss */ "oyG9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/core */ "1Bn7");
/* harmony import */ var src_mocks_services_mocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/mocks/services.mocks */ "yOun");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var driver_js_dist_driver_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! driver.js/dist/driver.min.css */ "Add6");
/* harmony import */ var src_app_layout_tabs_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/layout/tabs.service */ "S9ap");










let ServicesMenu = class ServicesMenu {
    constructor(servicesArray, alertController, navController, tabsService, router) {
        this.servicesArray = servicesArray;
        this.alertController = alertController;
        this.navController = navController;
        this.tabsService = tabsService;
        this.router = router;
        this.servicesMocks = [];
        this.toogle = false;
        this.services = [];
        this.disabled = false;
    }
    serviceList(service) {
        if (service.link === 'false') {
            this.demoAlert();
        }
        else if (!service.link) {
            // this.toogleMode();
            if (service.id == 'gestion_espace') {
                console.log(service);
                this.toogleMode(service.id);
            }
            else {
                this.toogleMode();
            }
        }
        this.services = service.modules;
        this.tabsService.changeData(service.id);
        this.currentService = service.id;
        if (!this.toogle) {
            this.services = [];
        }
    }
    openBottomSheet() {
        const animation = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
            .addElement(document.querySelector(".bottomSheet"))
            .easing("ease-in-out")
            .duration(400)
            .direction("alternate")
            .keyframes([
            { height: "0px", transform: "scale(1)", opacity: "1", },
            { height: "17rem", transform: "scale(1)", opacity: "1" },
        ]);
        document.querySelector(".bottomSheet").style.display = "block";
        animation.play();
    }
    closeBottomSheet() {
        const animation = Object(_ionic_core__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
            .addElement(document.querySelector(".bottomSheet"))
            .easing("ease-in-out")
            .duration(200)
            .direction("alternate")
            .keyframes([
            { height: "17rem", transform: "scale(1)", opacity: "1", },
            { height: "0px", transform: "scale(1)", opacity: "0", },
        ]);
        animation.play();
    }
    toogleMode(service) {
        if (!this.toogle) {
            this.toogle = true;
            this.openBottomSheet();
        }
        else {
            this.toogle = false;
            this.closeBottomSheet();
        }
    }
    demoAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-popup',
                subHeader: '',
                message: 'Fonctionnalité non activée en mode Démo',
                buttons: [
                    {
                        text: 'Ok',
                        handler: (alertData) => {
                            document.querySelector(".bottomSheet").style.display = "none";
                        }
                    }
                ],
            });
            yield alert.present();
        });
    }
    ngAfterViewInit() {
        document.querySelector(".bottomSheet").style.display = "none";
        this.servicesMocks = this.servicesArray.getAll();
    }
    ngOnInit() { }
};
ServicesMenu.ctorParameters = () => [
    { type: src_mocks_services_mocks__WEBPACK_IMPORTED_MODULE_5__["Services"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: src_app_layout_tabs_service__WEBPACK_IMPORTED_MODULE_9__["TabsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
ServicesMenu = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_services_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_services_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ServicesMenu);



/***/ }),

/***/ "oyG9":
/*!***************************************************************!*\
  !*** ./src/app/modules/services-home/services-home.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/** Ionic CSS Variables **/\n:root {\n  --color-tabs:#514e4c;\n  /** primary **/\n  --ion-color-primary: $primary;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}\n:root ion-item {\n  font-size: 14px;\n}\n@media (prefers-color-scheme: dark) {\n  /*\n   * Dark Colors\n   * -------------------------------------------\n   */\n  body {\n    --ion-color-primary: #428cff;\n    --ion-color-primary-rgb: 66,140,255;\n    --ion-color-primary-contrast: #ffffff;\n    --ion-color-primary-contrast-rgb: 255,255,255;\n    --ion-color-primary-shade: #3a7be0;\n    --ion-color-primary-tint: #5598ff;\n    --ion-color-secondary: #50c8ff;\n    --ion-color-secondary-rgb: 80,200,255;\n    --ion-color-secondary-contrast: #ffffff;\n    --ion-color-secondary-contrast-rgb: 255,255,255;\n    --ion-color-secondary-shade: #46b0e0;\n    --ion-color-secondary-tint: #62ceff;\n    --ion-color-tertiary: #6a64ff;\n    --ion-color-tertiary-rgb: 106,100,255;\n    --ion-color-tertiary-contrast: #ffffff;\n    --ion-color-tertiary-contrast-rgb: 255,255,255;\n    --ion-color-tertiary-shade: #5d58e0;\n    --ion-color-tertiary-tint: #7974ff;\n    --ion-color-success: #2fdf75;\n    --ion-color-success-rgb: 47,223,117;\n    --ion-color-success-contrast: #000000;\n    --ion-color-success-contrast-rgb: 0,0,0;\n    --ion-color-success-shade: #29c467;\n    --ion-color-success-tint: #44e283;\n    --ion-color-warning: #ffd534;\n    --ion-color-warning-rgb: 255,213,52;\n    --ion-color-warning-contrast: #000000;\n    --ion-color-warning-contrast-rgb: 0,0,0;\n    --ion-color-warning-shade: #e0bb2e;\n    --ion-color-warning-tint: #ffd948;\n    --ion-color-danger: #ff4961;\n    --ion-color-danger-rgb: 255,73,97;\n    --ion-color-danger-contrast: #ffffff;\n    --ion-color-danger-contrast-rgb: 255,255,255;\n    --ion-color-danger-shade: #e04055;\n    --ion-color-danger-tint: #ff5b71;\n    --ion-color-dark: #f4f5f8;\n    --ion-color-dark-rgb: 244,245,248;\n    --ion-color-dark-contrast: #000000;\n    --ion-color-dark-contrast-rgb: 0,0,0;\n    --ion-color-dark-shade: #d7d8da;\n    --ion-color-dark-tint: #f5f6f9;\n    --ion-color-medium: #989aa2;\n    --ion-color-medium-rgb: 152,154,162;\n    --ion-color-medium-contrast: #000000;\n    --ion-color-medium-contrast-rgb: 0,0,0;\n    --ion-color-medium-shade: #86888f;\n    --ion-color-medium-tint: #a2a4ab;\n    --ion-color-light: #222428;\n    --ion-color-light-rgb: 34,36,40;\n    --ion-color-light-contrast: #ffffff;\n    --ion-color-light-contrast-rgb: 255,255,255;\n    --ion-color-light-shade: #1e2023;\n    --ion-color-light-tint: #383a3e;\n  }\n\n  /*\n   * iOS Dark Theme\n   * -------------------------------------------\n   */\n  .ios body {\n    --ion-background-color: #000000;\n    --ion-background-color-rgb: 0,0,0;\n    --ion-text-color: #ffffff;\n    --ion-text-color-rgb: 255,255,255;\n    --ion-color-step-50: #0d0d0d;\n    --ion-color-step-100: #1a1a1a;\n    --ion-color-step-150: #262626;\n    --ion-color-step-200: #333333;\n    --ion-color-step-250: #404040;\n    --ion-color-step-300: #4d4d4d;\n    --ion-color-step-350: #595959;\n    --ion-color-step-400: #666666;\n    --ion-color-step-450: #737373;\n    --ion-color-step-500: #808080;\n    --ion-color-step-550: #8c8c8c;\n    --ion-color-step-600: #999999;\n    --ion-color-step-650: #a6a6a6;\n    --ion-color-step-700: #b3b3b3;\n    --ion-color-step-750: #bfbfbf;\n    --ion-color-step-800: #cccccc;\n    --ion-color-step-850: #d9d9d9;\n    --ion-color-step-900: #e6e6e6;\n    --ion-color-step-950: #f2f2f2;\n    --ion-item-background: #000000;\n    --ion-card-background: #1c1c1d;\n  }\n\n  .ios ion-modal {\n    --ion-background-color: var(--ion-color-step-100);\n    --ion-toolbar-background: var(--ion-color-step-150);\n    --ion-toolbar-border-color: var(--ion-color-step-250);\n  }\n\n  /*\n   * Material Design Dark Theme\n   * -------------------------------------------\n   */\n  .md body {\n    --ion-background-color: #121212;\n    --ion-background-color-rgb: 18,18,18;\n    --ion-text-color: #ffffff;\n    --ion-text-color-rgb: 255,255,255;\n    --ion-border-color: #222222;\n    --ion-color-step-50: #1e1e1e;\n    --ion-color-step-100: #2a2a2a;\n    --ion-color-step-150: #363636;\n    --ion-color-step-200: #414141;\n    --ion-color-step-250: #4d4d4d;\n    --ion-color-step-300: #595959;\n    --ion-color-step-350: #656565;\n    --ion-color-step-400: #717171;\n    --ion-color-step-450: #7d7d7d;\n    --ion-color-step-500: #898989;\n    --ion-color-step-550: #949494;\n    --ion-color-step-600: #a0a0a0;\n    --ion-color-step-650: #acacac;\n    --ion-color-step-700: #b8b8b8;\n    --ion-color-step-750: #c4c4c4;\n    --ion-color-step-800: #d0d0d0;\n    --ion-color-step-850: #dbdbdb;\n    --ion-color-step-900: #e7e7e7;\n    --ion-color-step-950: #f3f3f3;\n    --ion-item-background: #1e1e1e;\n    --ion-toolbar-background: #1f1f1f;\n    --ion-tab-bar-background: #1f1f1f;\n    --ion-card-background: #1e1e1e;\n  }\n}\n/* Importing Bootstrap SCSS file. */\nion-content {\n  height: 100%;\n  width: 100%;\n}\n.modele {\n  background-color: var(--ion-color-light);\n  margin-top: 1%;\n  border-radius: 10px;\n  margin-left: 1%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 3%;\n}\n.content2 {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n}\n#step1 {\n  width: 100%;\n}\nion-col {\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-grid {\n  width: 100%;\n  position: absolute;\n  height: 100%;\n}\nion-row {\n  width: 100%;\n  padding: 0.5rem;\n}\np {\n  font-size: 75%;\n}\nion-icon {\n  color: #514e4c;\n  font-size: 22px;\n}\na {\n  text-decoration: none;\n  color: var(--ion-color-dark);\n}\n.iconDisabled {\n  opacity: 0.4;\n}\n.gridStart {\n  margin-top: 5rem;\n  width: 100%;\n}\n.reservationSalles {\n  font-size: 14px;\n}\n.Dispositif, #alarme {\n  font-size: 13px;\n}\n.gridEvenement {\n  margin-bottom: 1%;\n}\n.bottomSheet {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  margin-bottom: -2px;\n  bottom: 0;\n  border-radius: 30px 30px 0px 0px;\n  z-index: 20;\n  background-color: var(--ion-color-light);\n  overflow: auto;\n  transform: translate3d(0, 0, 0);\n}\n.serviceName {\n  font-size: 65%;\n}\n.colservices {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  height: 100%;\n}\n.disabled {\n  opacity: 0.4;\n}\nion-badge {\n  font-size: 0.7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vc2VydmljZXMtaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsMEJBQUE7QUFLQTtFQUVFLG9CQUFBO0VBTUUsY0FBQTtFQUNGLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsaURBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsZUFBQTtFQUNBLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSxzQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBQ3JCRjtBRHBERTtFQUNJLGVBQUE7QUNzRE47QURxQkE7RUFDRTs7O0lBQUE7RUFLQTtJQUNFLDRCQUFBO0lBQ0EsbUNBQUE7SUFDQSxxQ0FBQTtJQUNBLDZDQUFBO0lBQ0Esa0NBQUE7SUFDQSxpQ0FBQTtJQUVBLDhCQUFBO0lBQ0EscUNBQUE7SUFDQSx1Q0FBQTtJQUNBLCtDQUFBO0lBQ0Esb0NBQUE7SUFDQSxtQ0FBQTtJQUVBLDZCQUFBO0lBQ0EscUNBQUE7SUFDQSxzQ0FBQTtJQUNBLDhDQUFBO0lBQ0EsbUNBQUE7SUFDQSxrQ0FBQTtJQUVBLDRCQUFBO0lBQ0EsbUNBQUE7SUFDQSxxQ0FBQTtJQUNBLHVDQUFBO0lBQ0Esa0NBQUE7SUFDQSxpQ0FBQTtJQUVBLDRCQUFBO0lBQ0EsbUNBQUE7SUFDQSxxQ0FBQTtJQUNBLHVDQUFBO0lBQ0Esa0NBQUE7SUFDQSxpQ0FBQTtJQUVBLDJCQUFBO0lBQ0EsaUNBQUE7SUFDQSxvQ0FBQTtJQUNBLDRDQUFBO0lBQ0EsaUNBQUE7SUFDQSxnQ0FBQTtJQUVBLHlCQUFBO0lBQ0EsaUNBQUE7SUFDQSxrQ0FBQTtJQUNBLG9DQUFBO0lBQ0EsK0JBQUE7SUFDQSw4QkFBQTtJQUVBLDJCQUFBO0lBQ0EsbUNBQUE7SUFDQSxvQ0FBQTtJQUNBLHNDQUFBO0lBQ0EsaUNBQUE7SUFDQSxnQ0FBQTtJQUVBLDBCQUFBO0lBQ0EsK0JBQUE7SUFDQSxtQ0FBQTtJQUNBLDJDQUFBO0lBQ0EsZ0NBQUE7SUFDQSwrQkFBQTtFQzNCRjs7RUQ4QkE7OztJQUFBO0VBS0E7SUFDRSwrQkFBQTtJQUNBLGlDQUFBO0lBRUEseUJBQUE7SUFDQSxpQ0FBQTtJQUVBLDRCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBRUEsOEJBQUE7SUFFQSw4QkFBQTtFQ2hDRjs7RURtQ0E7SUFDRSxpREFBQTtJQUNBLG1EQUFBO0lBQ0EscURBQUE7RUNoQ0Y7O0VEb0NBOzs7SUFBQTtFQUtBO0lBQ0UsK0JBQUE7SUFDQSxvQ0FBQTtJQUVBLHlCQUFBO0lBQ0EsaUNBQUE7SUFFQSwyQkFBQTtJQUVBLDRCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBRUEsOEJBQUE7SUFFQSxpQ0FBQTtJQUVBLGlDQUFBO0lBRUEsOEJBQUE7RUN6Q0Y7QUFDRjtBRDRDQSxtQ0FBQTtBQ3ZQQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBOE1KO0FBNU1BO0VBQ0ksd0NBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUErTUo7QUE3TUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBZ05KO0FBOU1BO0VBQ0ksV0FBQTtBQWlOSjtBQS9NQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFrTko7QUFoTkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBbU5KO0FBL01BO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFrTko7QUEvTUE7RUFDSSxjQUFBO0FBa05KO0FBaE5BO0VBQ0ksY0R2Q0s7RUN3Q0wsZUFBQTtBQW1OSjtBQWpOQTtFQUNJLHFCQUFBO0VBQ0EsNEJBQUE7QUFvTko7QUFsTkE7RUFDSSxZQUFBO0FBcU5KO0FBbk5BO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBc05KO0FBcE5BO0VBQ0ksZUFBQTtBQXVOSjtBQXJOQTtFQUNJLGVBQUE7QUF3Tko7QUF0TkE7RUFDSSxpQkFBQTtBQXlOSjtBQXZOQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLHdDQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0FBME5KO0FBeE5BO0VBQ0ksY0FBQTtBQTJOSjtBQXpOQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBNE5KO0FBMU5BO0VBQ0ksWUFBQTtBQTZOSjtBQTNOQTtFQUNJLGlCQUFBO0FBOE5KIiwiZmlsZSI6InNlcnZpY2VzLWhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOlxuLy8gaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvXG5cblxuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG4kc2Vjb25kYXJ5LWNvbDpyZ2IoMjQzLCAyNDMsIDI0Myk7XG4kc2Vjb25kYXJ5OnJnYigyNDMsIDI0MywgMjQzKSA7XG4kYmxhbmM6cmdiYSgyNTUsMjU1LDI1NSk7XG4kcHJpbWFyeTojNTE0ZTRjO1xuOnJvb3Qge1xuXG4gIC0tY29sb3ItdGFiczojNTE0ZTRjO1xuXG5cbiAgaW9uLWl0ZW0ge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gICAgLyoqIHByaW1hcnkgKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICRwcmltYXJ5O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNTYsIDEyOCwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzMxNzFlMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNGM4ZGZmO1xuXG4gIC8qKiBzZWNvbmRhcnkgKiovXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzNkYzJmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogNjEsIDE5NCwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzM2YWJlMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM1MGM4ZmY7XG5cbiAgLyoqIHRlcnRpYXJ5ICoqL1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzUyNjBmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiA4MiwgOTYsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM0ODU0ZTA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM2MzcwZmY7XG5cbiAgLyoqIHN1Y2Nlc3MgKiovXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyZGQzNmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA0NSwgMjExLCAxMTE7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMjhiYTYyO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0MmQ3N2Q7XG5cbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmM0MDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDE5NiwgOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGFjMDg7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmY2EyMjtcblxuICAvKiogZGFuZ2VyICoqL1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNlYjQ0NWE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDIzNSwgNjgsIDkwO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2NmM2M0ZjsvL2ljaVxuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2VkNTc2YjtcblxuICAvKiogZGFyayAqKi9cbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODsvL2ljaVxuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMzQsIDM2LCA0MDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogIzM4M2EzZTtcblxuICAvKiogbWVkaXVtICoqL1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5Mjk0OWM7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE0NiwgMTQ4LCAxNTY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjsvL2ljaVxuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4MDgyODk7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjOWQ5ZmE2O1xuXG4gIC8qKiBsaWdodCAqKi9cbiAgLS1pb24tY29sb3ItbGlnaHQ6ICNmNGY1Zjg7Ly9pY2lcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2Y1ZjZmOTtcbn1cblxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAvKlxuICAgKiBEYXJrIENvbG9yc1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIGJvZHkge1xuICAgIC0taW9uLWNvbG9yLXByaW1hcnk6ICM0MjhjZmY7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDY2LDE0MCwyNTU7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzNhN2JlMDtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM1NTk4ZmY7XG5cbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICM1MGM4ZmY7XG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogODAsMjAwLDI1NTtcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjNDZiMGUwO1xuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNjJjZWZmO1xuXG4gICAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM2YTY0ZmY7XG4gICAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMDYsMTAwLDI1NTtcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNWQ1OGUwO1xuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM3OTc0ZmY7XG5cbiAgICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMmZkZjc1O1xuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA0NywyMjMsMTE3O1xuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOWM0Njc7XG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDRlMjgzO1xuXG4gICAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmZDUzNDtcbiAgICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LDIxMyw1MjtcbiAgICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBiYjJlO1xuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmZDk0ODtcblxuICAgIC0taW9uLWNvbG9yLWRhbmdlcjogI2ZmNDk2MTtcbiAgICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNTUsNzMsOTc7XG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAgIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2UwNDA1NTtcbiAgICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2ZmNWI3MTtcblxuICAgIC0taW9uLWNvbG9yLWRhcms6ICNmNGY1Zjg7XG4gICAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDI0NCwyNDUsMjQ4O1xuICAgIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAgIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICNkN2Q4ZGE7XG4gICAgLS1pb24tY29sb3ItZGFyay10aW50OiAjZjVmNmY5O1xuXG4gICAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTg5YWEyO1xuICAgIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE1MiwxNTQsMTYyO1xuICAgIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogIzAwMDAwMDtcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4Njg4OGY7XG4gICAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICNhMmE0YWI7XG5cbiAgICAtLWlvbi1jb2xvci1saWdodDogIzIyMjQyODtcbiAgICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDM0LDM2LDQwO1xuICAgIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gICAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICMxZTIwMjM7XG4gICAgLS1pb24tY29sb3ItbGlnaHQtdGludDogIzM4M2EzZTtcbiAgfVxuXG4gIC8qXG4gICAqIGlPUyBEYXJrIFRoZW1lXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLmlvcyBib2R5IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAwLDAsMDtcblxuICAgIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gICAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwyNTUsMjU1O1xuXG4gICAgLS1pb24tY29sb3Itc3RlcC01MDogIzBkMGQwZDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzFhMWExYTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTE1MDogIzI2MjYyNjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzMzMzMzMztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzQwNDA0MDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTMwMDogIzRkNGQ0ZDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzU5NTk1OTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzY2NjY2NjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTQ1MDogIzczNzM3MztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzgwODA4MDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzhjOGM4YztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTYwMDogIzk5OTk5OTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2E2YTZhNjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2IzYjNiMztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTc1MDogI2JmYmZiZjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2NjY2NjYztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2Q5ZDlkOTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTkwMDogI2U2ZTZlNjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YyZjJmMjtcblxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzAwMDAwMDtcblxuICAgIC0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFjMWMxZDtcbiAgfVxuXG4gIC5pb3MgaW9uLW1vZGFsIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xMDApO1xuICAgIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbiAgICAtLWlvbi10b29sYmFyLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwKTtcbiAgfVxuXG5cbiAgLypcbiAgICogTWF0ZXJpYWwgRGVzaWduIERhcmsgVGhlbWVcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAubWQgYm9keSB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMTgsMTgsMTg7XG5cbiAgICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAgIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsMjU1LDI1NTtcblxuICAgIC0taW9uLWJvcmRlci1jb2xvcjogIzIyMjIyMjtcblxuICAgIC0taW9uLWNvbG9yLXN0ZXAtNTA6ICMxZTFlMWU7XG4gICAgLS1pb24tY29sb3Itc3RlcC0xMDA6ICMyYTJhMmE7XG4gICAgLS1pb24tY29sb3Itc3RlcC0xNTA6ICMzNjM2MzY7XG4gICAgLS1pb24tY29sb3Itc3RlcC0yMDA6ICM0MTQxNDE7XG4gICAgLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0ZDRkNGQ7XG4gICAgLS1pb24tY29sb3Itc3RlcC0zMDA6ICM1OTU5NTk7XG4gICAgLS1pb24tY29sb3Itc3RlcC0zNTA6ICM2NTY1NjU7XG4gICAgLS1pb24tY29sb3Itc3RlcC00MDA6ICM3MTcxNzE7XG4gICAgLS1pb24tY29sb3Itc3RlcC00NTA6ICM3ZDdkN2Q7XG4gICAgLS1pb24tY29sb3Itc3RlcC01MDA6ICM4OTg5ODk7XG4gICAgLS1pb24tY29sb3Itc3RlcC01NTA6ICM5NDk0OTQ7XG4gICAgLS1pb24tY29sb3Itc3RlcC02MDA6ICNhMGEwYTA7XG4gICAgLS1pb24tY29sb3Itc3RlcC02NTA6ICNhY2FjYWM7XG4gICAgLS1pb24tY29sb3Itc3RlcC03MDA6ICNiOGI4Yjg7XG4gICAgLS1pb24tY29sb3Itc3RlcC03NTA6ICNjNGM0YzQ7XG4gICAgLS1pb24tY29sb3Itc3RlcC04MDA6ICNkMGQwZDA7XG4gICAgLS1pb24tY29sb3Itc3RlcC04NTA6ICNkYmRiZGI7XG4gICAgLS1pb24tY29sb3Itc3RlcC05MDA6ICNlN2U3ZTc7XG4gICAgLS1pb24tY29sb3Itc3RlcC05NTA6ICNmM2YzZjM7XG5cbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMxZTFlMWU7XG5cbiAgICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG5cbiAgICAtLWlvbi10YWItYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG5cbiAgICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxZTFlMWU7XG4gIH1cbn1cblxuLyogSW1wb3J0aW5nIEJvb3RzdHJhcCBTQ1NTIGZpbGUuICovXG4vL0BpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy9ib290c3RyYXAnO1xuIiwiQHVzZSAnLi4vLi4vLi4vdGhlbWUvdmFyaWFibGVzLnNjc3MnIGFzIHYgO1xuXG5pb24tY29udGVudHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ubW9kZWxle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhciggLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIG1hcmdpbi10b3A6MSU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAzJTtcbn1cbi5jb250ZW50MntcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuI3N0ZXAxe1xuICAgIHdpZHRoOiAxMDAlO1xufVxuaW9uLWNvbHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlvbi1ncmlke1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cblxuaW9uLXJvd3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgLy8gbWFyZ2luLWxlZnQ6IDFyZW07XG4gfVxucHtcbiAgICBmb250LXNpemU6IDc1JTtcbn1cbmlvbi1pY29ue1xuICAgIGNvbG9yOiB2LiRwcmltYXJ5O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cbmF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG4uaWNvbkRpc2FibGVke1xuICAgIG9wYWNpdHk6IC40O1xufVxuLmdyaWRTdGFydHtcbiAgICBtYXJnaW4tdG9wOjVyZW07XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ucmVzZXJ2YXRpb25TYWxsZXN7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLkRpc3Bvc2l0aWYsI2FsYXJtZXtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG4uZ3JpZEV2ZW5lbWVudHtcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcbn1cbi5ib3R0b21TaGVldHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IC0ycHg7XG4gICAgYm90dG9tOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHggMzBweCAwcHggMHB4O1xuICAgIHotaW5kZXg6IDIwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICB2YXIoIC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbn1cbi5zZXJ2aWNlTmFtZXtcbiAgICBmb250LXNpemU6IDY1JTtcbn1cbi5jb2xzZXJ2aWNlc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi5kaXNhYmxlZHtcbiAgICBvcGFjaXR5OiAwLjQ7XG59XG5pb24tYmFkZ2V7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG5cbn1cbi8vIC5zZXJ2aWNlLWdyaWQsIC5zZXJ2aWNlc1JvdywgLmNvbHNlcnZpY2Vze1xuLy8gICAgIG1hcmdpbi10b3A6IDAlO1xuLy8gfSJdfQ== */");

/***/ }),

/***/ "q/5c":
/*!********************************************************************************!*\
  !*** ./src/app/services/reservation/room-reservation/room-reservation.page.ts ***!
  \********************************************************************************/
/*! exports provided: RoomReservationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomReservationPage", function() { return RoomReservationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_room_reservation_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./room-reservation.page.html */ "Gak1");
/* harmony import */ var _room_reservation_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./room-reservation.page.scss */ "Yf7T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _room_reservation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./room-reservation.service */ "hfc5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _general_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../general-functions */ "EWUx");



/* eslint-disable @typescript-eslint/member-ordering */







let RoomReservationPage = class RoomReservationPage {
    constructor(roomReservationService, fb, alertController, router, navigateController, store, generalFunctions) {
        this.roomReservationService = roomReservationService;
        this.fb = fb;
        this.alertController = alertController;
        this.router = router;
        this.navigateController = navigateController;
        this.store = store;
        this.generalFunctions = generalFunctions;
        this.rooms = [];
        this.isBottomSheetOpened = false;
        this.localstorageReservations = [];
        this.roomHistorical = [];
        this.showMap = false;
        this.showReservationsContent = true;
        this.info = { title: 'Réservation de', subTitle: 'salle' };
    }
    initializeForm() {
        this.bookingForm = this.fb.group({
            dateStart: '',
            dateEnd: '',
            references: this.fb.array([this.fb.control('')])
        });
    }
    ngAfterViewInit() {
        this.rooms = this.roomReservationService.getrooms();
        this.generalFunctions.gestionDeReservation(this.rooms, 'reservations', 'historicalReservations');
    }
    ngOnInit() {
        let salles = [{ "id": "Accueil E1", "color": "#31bd8c", "type": "libre", "floor": "B1-UL1" },
            { "id": "Accueil Restaurant E2", "color": "#1194ff", "type": "reserve", "floor": "B1-UL2" },
            { "id": "iViPlay", "color": "#dd1185", "type": "occupe", "floor": "B1-UL3" }];
        localStorage.setItem('salles', JSON.stringify(salles));
        this.initializeForm();
        setInterval(() => {
            this.generalFunctions.refreshComponent(this.ngAfterViewInit());
        }, 1000);
    }
    goToMap(index) {
        console.log(index);
        localStorage.setItem('selectedroom', String(index));
        this.navigateController.navigateForward(['/tabs/map']);
    }
};
RoomReservationPage.ctorParameters = () => [
    { type: _room_reservation_service__WEBPACK_IMPORTED_MODULE_4__["RoomReservationService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"] },
    { type: _general_functions__WEBPACK_IMPORTED_MODULE_9__["GeneralFunctions"] }
];
RoomReservationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-room-reservation',
        template: _raw_loader_room_reservation_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_room_reservation_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RoomReservationPage);



/***/ }),

/***/ "qgvm":
/*!******************************************************!*\
  !*** ./src/app/store/actions/notification-action.ts ***!
  \******************************************************/
/*! exports provided: ActionParent, TodoAdd, TodoRemove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionParent", function() { return ActionParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoAdd", function() { return TodoAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoRemove", function() { return TodoRemove; });
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-actions */ "P0i7");

class ActionParent {
}
class TodoAdd {
    constructor(payload) {
        this.payload = payload;
        this.type = _todo_actions__WEBPACK_IMPORTED_MODULE_0__["TodoActionTypes"].Add;
    }
}
class TodoRemove {
    constructor(payload) {
        this.payload = payload;
        this.type = _todo_actions__WEBPACK_IMPORTED_MODULE_0__["TodoActionTypes"].Remove;
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | layout-tabs-tabs-module */[__webpack_require__.e("default~layout-footer-footer-module~layout-tabs-tabs-module"), __webpack_require__.e("layout-tabs-tabs-module")]).then(__webpack_require__.bind(null, /*! ./layout/tabs/tabs.module */ "TIKS")).then(m => m.TabsPageModule)
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomePageModule)
    },
    {
        path: 'feedback',
        loadChildren: () => Promise.all(/*! import() | services-feed-back-feed-back-module */[__webpack_require__.e("default~authentification-notification-notification-module~services-comptage-settings-settings-module~d8bcaf3f"), __webpack_require__.e("services-feed-back-feed-back-module")]).then(__webpack_require__.bind(null, /*! ./services/feed-back/feed-back.module */ "3G2T")).then(m => m.FeedBackModule)
    },
    {
        path: 'position',
        loadChildren: () => Promise.all(/*! import() | services-positions-position-position-module */[__webpack_require__.e("default~modules-map-map-module~modules-news-redirect-to-map-redirect-to-map-module~services-comptage~158399fe"), __webpack_require__.e("default~services-positions-contact-contact-module~services-positions-position-position-module"), __webpack_require__.e("services-positions-position-position-module")]).then(__webpack_require__.bind(null, /*! ./services/positions/position/position.module */ "DfXA")).then(m => m.PositionPageModule)
    },
    {
        path: 'position/contact',
        loadChildren: () => Promise.all(/*! import() | services-positions-contact-contact-module */[__webpack_require__.e("default~modules-map-map-module~modules-news-redirect-to-map-redirect-to-map-module~services-comptage~158399fe"), __webpack_require__.e("default~services-positions-contact-contact-module~services-positions-position-position-module")]).then(__webpack_require__.bind(null, /*! ./services/positions/contact/contact.module */ "VwBy")).then(m => m.ContactModule)
    },
    {
        path: 'room-reservation',
        loadChildren: () => Promise.all(/*! import() | services-reservation-room-reservation-room-reservation-module */[__webpack_require__.e("default~authentification-notification-notification-module~services-comptage-settings-settings-module~d8bcaf3f"), __webpack_require__.e("common"), __webpack_require__.e("services-reservation-room-reservation-room-reservation-module")]).then(__webpack_require__.bind(null, /*! ./services/reservation/room-reservation/room-reservation.module */ "wV6K")).then(m => m.RoomReservationPageModule)
    },
    {
        path: 'reservation-historical',
        loadChildren: () => __webpack_require__.e(/*! import() | services-reservation-reservation-historical-reservation-historical-module */ "services-reservation-reservation-historical-reservation-historical-module").then(__webpack_require__.bind(null, /*! ./services/reservation/reservation-historical/reservation-historical.module */ "29pb")).then(m => m.ReservationHistoricalPageModule)
    },
    {
        path: 'plans',
        loadChildren: () => Promise.all(/*! import() | services-plan-locaux-plans-plans-module */[__webpack_require__.e("common"), __webpack_require__.e("services-plan-locaux-plans-plans-module")]).then(__webpack_require__.bind(null, /*! ./services/plan-locaux/plans/plans.module */ "jtUL")).then(m => m.PlansPageModule)
    },
    {
        path: 'equipment-reservation',
        loadChildren: () => Promise.all(/*! import() | services-equipment-reservations-equipment-reservation-equipment-reservation-module */[__webpack_require__.e("default~authentification-notification-notification-module~services-comptage-settings-settings-module~d8bcaf3f"), __webpack_require__.e("common"), __webpack_require__.e("services-equipment-reservations-equipment-reservation-equipment-reservation-module")]).then(__webpack_require__.bind(null, /*! ./services/equipment-reservations/equipment-reservation/equipment-reservation.module */ "XVFQ")).then(m => m.EquipmentReservationPageModule)
    },
    {
        path: 'constat',
        loadChildren: () => Promise.all(/*! import() | services-constat-constat-module */[__webpack_require__.e("default~authentification-notification-notification-module~services-comptage-settings-settings-module~d8bcaf3f"), __webpack_require__.e("services-constat-constat-module")]).then(__webpack_require__.bind(null, /*! ./services/constat/constat.module */ "yR7M")).then(m => m.ConstatPageModule)
    },
    {
        path: 'fall-detection',
        loadChildren: () => __webpack_require__.e(/*! import() | services-detections-fall-fall-detection-fall-detection-module */ "services-detections-fall-fall-detection-fall-detection-module").then(__webpack_require__.bind(null, /*! ./services/detections-fall/fall-detection/fall-detection.module */ "fB7n")).then(m => m.FallDetectionPageModule)
    },
    {
        path: 'weather',
        loadChildren: () => Promise.all(/*! import() | services-weather-weather-module */[__webpack_require__.e("default~authentification-notification-notification-module~services-comptage-settings-settings-module~d8bcaf3f"), __webpack_require__.e("common"), __webpack_require__.e("services-weather-weather-module")]).then(__webpack_require__.bind(null, /*! ./services/weather/weather.module */ "Z+zh")).then(m => m.WeatherPageModule)
    },
    {
        path: 'security-incendie',
        loadChildren: () => Promise.all(/*! import() | services-security-incendie-security-incendie-module */[__webpack_require__.e("default~modules-map-map-module~modules-news-redirect-to-map-redirect-to-map-module~services-comptage~158399fe"), __webpack_require__.e("services-security-incendie-security-incendie-module")]).then(__webpack_require__.bind(null, /*! ./services/security-incendie/security-incendie.module */ "mbC/")).then(m => m.SecurityIncendieModule)
    },
    {
        path: 'footer',
        loadChildren: () => Promise.all(/*! import() | layout-footer-footer-module */[__webpack_require__.e("default~layout-footer-footer-module~layout-tabs-tabs-module"), __webpack_require__.e("layout-footer-footer-module")]).then(__webpack_require__.bind(null, /*! ./layout/footer/footer.module */ "YRIa")).then(m => m.FooterPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | authentification-login-login-module */ "authentification-login-login-module").then(__webpack_require__.bind(null, /*! ./authentification/login/login.module */ "M9Og")).then(m => m.LoginPageModule)
    },
    {
        path: 'gestion-parking',
        loadChildren: () => Promise.all(/*! import() | services-parking-gestion-parking-gestion-parking-module */[__webpack_require__.e("common"), __webpack_require__.e("services-parking-gestion-parking-gestion-parking-module")]).then(__webpack_require__.bind(null, /*! ./services/parking/gestion-parking/gestion-parking.module */ "kvyP")).then(m => m.GestionParkingPageModule)
    },
    {
        path: 'comptage-pzone',
        loadChildren: () => __webpack_require__.e(/*! import() | services-comptage-comptage-pzone-comptage-pzone-module */ "services-comptage-comptage-pzone-comptage-pzone-module").then(__webpack_require__.bind(null, /*! ./services/comptage/comptage-pzone/comptage-pzone.module */ "sdNS")).then(m => m.ComptagePZonePageModule)
    },
    {
        path: 'settings',
        loadChildren: () => Promise.all(/*! import() | services-comptage-settings-settings-module */[__webpack_require__.e("default~authentification-notification-notification-module~services-comptage-settings-settings-module~d8bcaf3f"), __webpack_require__.e("common"), __webpack_require__.e("services-comptage-settings-settings-module")]).then(__webpack_require__.bind(null, /*! ./services/comptage/settings/settings.module */ "W3d6")).then(m => m.SettingsPageModule)
    },
    {
        path: 'historique-parking',
        loadChildren: () => Promise.all(/*! import() | services-parking-historique-parking-historique-parking-module */[__webpack_require__.e("common"), __webpack_require__.e("services-parking-historique-parking-historique-parking-module")]).then(__webpack_require__.bind(null, /*! ./services/parking/historique-parking/historique-parking.module */ "aUid")).then(m => m.HistoriqueParkingPageModule)
    },
    {
        path: 'presentiel-zone',
        loadChildren: () => Promise.all(/*! import() | services-presentiel-presentiel-zone-presentiel-zone-module */[__webpack_require__.e("common"), __webpack_require__.e("services-presentiel-presentiel-zone-presentiel-zone-module")]).then(__webpack_require__.bind(null, /*! ./services/presentiel/presentiel-zone/presentiel-zone.module */ "TLlx")).then(m => m.PresentielZonePageModule)
    },
    {
        path: 'presentiel-historique',
        loadChildren: () => __webpack_require__.e(/*! import() | services-presentiel-presentiel-historique-presentiel-historique-module */ "services-presentiel-presentiel-historique-presentiel-historique-module").then(__webpack_require__.bind(null, /*! ./services/presentiel/presentiel-historique/presentiel-historique.module */ "9kGs")).then(m => m.PresentielHistoriquePageModule)
    },
    {
        path: 'presentiel-parametre',
        loadChildren: () => __webpack_require__.e(/*! import() | services-presentiel-presentiel-parametre-presentiel-parametre-module */ "services-presentiel-presentiel-parametre-presentiel-parametre-module").then(__webpack_require__.bind(null, /*! ./services/presentiel/presentiel-parametre/presentiel-parametre.module */ "VV3X")).then(m => m.PresentielParametrePageModule)
    },
    {
        path: 'historisation-parcours',
        loadChildren: () => Promise.all(/*! import() | services-historisation-parcours-historisation-parcours-historisation-parcours-module */[__webpack_require__.e("common"), __webpack_require__.e("services-historisation-parcours-historisation-parcours-historisation-parcours-module")]).then(__webpack_require__.bind(null, /*! ./services/historisation-parcours/historisation-parcours/historisation-parcours.module */ "ZSdY")).then(m => m.HistorisationParcoursPageModule)
    },
    {
        path: 'journaux',
        loadChildren: () => __webpack_require__.e(/*! import() | services-journaux-journaux-journaux-module */ "services-journaux-journaux-journaux-module").then(__webpack_require__.bind(null, /*! ./services/journaux/journaux/journaux.module */ "rjqR")).then(m => m.JournauxPageModule)
    },
    {
        path: 'notification',
        loadChildren: () => Promise.all(/*! import() | authentification-notification-notification-module */[__webpack_require__.e("default~authentification-notification-notification-module~services-comptage-settings-settings-module~d8bcaf3f"), __webpack_require__.e("authentification-notification-notification-module")]).then(__webpack_require__.bind(null, /*! ./authentification/notification/notification.module */ "RKh2")).then(m => m.NotificationPageModule)
    },
    {
        path: 'transport',
        loadChildren: () => __webpack_require__.e(/*! import() | services-transport-transport-module */ "services-transport-transport-module").then(__webpack_require__.bind(null, /*! ./services/transport/transport.module */ "mxuk")).then(m => m.TransportPageModule)
    },
    {
        path: 'splashscreen',
        loadChildren: () => __webpack_require__.e(/*! import() | splashscreen-splashscreen-module */ "splashscreen-splashscreen-module").then(__webpack_require__.bind(null, /*! ./splashscreen/splashscreen.module */ "oEhx")).then(m => m.SplashscreenPageModule)
    },
    {
        path: 'map-reservation',
        loadChildren: () => Promise.all(/*! import() | services-reservation-map-reservation-map-reservation-module */[__webpack_require__.e("default~modules-map-map-module~modules-news-redirect-to-map-redirect-to-map-module~services-comptage~158399fe"), __webpack_require__.e("services-reservation-map-reservation-map-reservation-module")]).then(__webpack_require__.bind(null, /*! ./services/reservation/map-reservation/map-reservation.module */ "8jOq")).then(m => m.MapReservationPageModule)
    },
    {
        path: 'documents',
        loadChildren: () => __webpack_require__.e(/*! import() | services-document-document-module */ "services-document-document-module").then(__webpack_require__.bind(null, /*! ./services/document/document.module */ "PpD0")).then(m => m.DocumentModule)
    },
    {
        path: 'chat',
        loadChildren: () => __webpack_require__.e(/*! import() | services-chat-chat-module */ "services-chat-chat-module").then(__webpack_require__.bind(null, /*! ./services/chat/chat.module */ "FxsX")).then(m => m.ChatModule)
    },
    {
        path: 'comptage-map',
        loadChildren: () => Promise.all(/*! import() | services-comptage-comptage-map-comptage-map-module */[__webpack_require__.e("default~modules-map-map-module~modules-news-redirect-to-map-redirect-to-map-module~services-comptage~158399fe"), __webpack_require__.e("services-comptage-comptage-map-comptage-map-module")]).then(__webpack_require__.bind(null, /*! ./services/comptage/comptage-map/comptage-map.module */ "5ojw")).then(m => m.ComptageMapPageModule)
    },
    {
        path: 'map-parking',
        loadChildren: () => Promise.all(/*! import() | services-parking-map-parking-map-parking-module */[__webpack_require__.e("default~modules-map-map-module~modules-news-redirect-to-map-redirect-to-map-module~services-comptage~158399fe"), __webpack_require__.e("common"), __webpack_require__.e("services-parking-map-parking-map-parking-module")]).then(__webpack_require__.bind(null, /*! ./services/parking/map-parking/map-parking.module */ "VI50")).then(m => m.MapParkingPageModule)
    },
    {
        path: 'map-equipment',
        loadChildren: () => Promise.all(/*! import() | services-equipment-reservations-map-equipment-map-equipment-module */[__webpack_require__.e("default~modules-map-map-module~modules-news-redirect-to-map-redirect-to-map-module~services-comptage~158399fe"), __webpack_require__.e("common"), __webpack_require__.e("services-equipment-reservations-map-equipment-map-equipment-module")]).then(__webpack_require__.bind(null, /*! ./services/equipment-reservations/map-equipment/map-equipment.module */ "bdXs")).then(m => m.MapEquipmentPageModule)
    },
    {
        path: 'equipment-historical',
        loadChildren: () => Promise.all(/*! import() | services-equipment-reservations-equipment-historical-equipment-historical-module */[__webpack_require__.e("common"), __webpack_require__.e("services-equipment-reservations-equipment-historical-equipment-historical-module")]).then(__webpack_require__.bind(null, /*! ./services/equipment-reservations/equipment-historical/equipment-historical.module */ "/lfY")).then(m => m.EquipmentHistoricalPageModule)
    },
    {
        path: 'stats',
        loadChildren: () => __webpack_require__.e(/*! import() | services-statistique-statistique-module */ "services-statistique-statistique-module").then(__webpack_require__.bind(null, /*! ./services/statistique/statistique.module */ "O976")).then(m => m.StatistiqueModule)
    },
    {
        path: 'boite-a-idees',
        loadChildren: () => __webpack_require__.e(/*! import() | services-boite-a-idees-boite-a-idees-module */ "services-boite-a-idees-boite-a-idees-module").then(__webpack_require__.bind(null, /*! ./services/boite-a-idees/boite-a-idees.module */ "kGPw")).then(m => m.BoiteAIdeesPageModule)
    },
    {
        path: 'restauration',
        loadChildren: () => Promise.all(/*! import() | services-restauration-restauration-module */[__webpack_require__.e("common"), __webpack_require__.e("services-restauration-restauration-module")]).then(__webpack_require__.bind(null, /*! ./services/restauration/restauration.module */ "qTME")).then(m => m.RestaurationPageModule)
    },
    {
        path: 'conciergerie',
        loadChildren: () => __webpack_require__.e(/*! import() | services-conciergerie-conciergerie-module */ "services-conciergerie-conciergerie-module").then(__webpack_require__.bind(null, /*! ./services/conciergerie/conciergerie.module */ "vvGP")).then(m => m.ConciergeriePageModule)
    },
    {
        path: 'fitness',
        loadChildren: () => Promise.all(/*! import() | services-fitness-fitness-module */[__webpack_require__.e("common"), __webpack_require__.e("services-fitness-fitness-module")]).then(__webpack_require__.bind(null, /*! ./services/fitness/fitness.module */ "cXTw")).then(m => m.FitnessPageModule)
    },
    {
        path: 'didacticiel',
        loadChildren: () => __webpack_require__.e(/*! import() | layout-didacticiel-didacticiel-module */ "layout-didacticiel-didacticiel-module").then(__webpack_require__.bind(null, /*! ./layout/didacticiel/didacticiel.module */ "yafO")).then(m => m.DidacticielPageModule)
    },
    {
        path: 'proximite',
        loadChildren: () => Promise.all(/*! import() | services-proximite-proximite-module */[__webpack_require__.e("default~modules-map-map-module~modules-news-redirect-to-map-redirect-to-map-module~services-comptage~158399fe"), __webpack_require__.e("common"), __webpack_require__.e("services-proximite-proximite-module")]).then(__webpack_require__.bind(null, /*! ./services/proximite/proximite.module */ "oWxv")).then(m => m.ProximitePageModule)
    },
    {
        path: 'plan-map',
        loadChildren: () => Promise.all(/*! import() | services-plan-locaux-plan-map-plan-map-module */[__webpack_require__.e("default~modules-map-map-module~modules-news-redirect-to-map-redirect-to-map-module~services-comptage~158399fe"), __webpack_require__.e("services-plan-locaux-plan-map-plan-map-module")]).then(__webpack_require__.bind(null, /*! ./services/plan-locaux/plan-map/plan-map.module */ "jehS")).then(m => m.PlanMapPageModule)
    },
    {
        path: 'tableau-de-bord',
        loadChildren: () => __webpack_require__.e(/*! import() | services-tableau-de-bord-tableau-de-bord-module */ "services-tableau-de-bord-tableau-de-bord-module").then(__webpack_require__.bind(null, /*! ./services/tableau-de-bord/tableau-de-bord.module */ "HZwo")).then(m => m.TableauDeBordPageModule)
    },
    {
        path: 'geostatistiques',
        loadChildren: () => __webpack_require__.e(/*! import() | services-geostatistiques-geostatistiques-module */ "services-geostatistiques-geostatistiques-module").then(__webpack_require__.bind(null, /*! ./services/geostatistiques/geostatistiques.module */ "UEBA")).then(m => m.GeostatistiquesPageModule)
    },
    {
        path: 'emergency-call',
        loadChildren: () => __webpack_require__.e(/*! import() | services-emergency-call-emergency-call-module */ "services-emergency-call-emergency-call-module").then(__webpack_require__.bind(null, /*! ./services/emergency-call/emergency-call.module */ "eNDt")).then(m => m.EmergencyCallPageModule)
    },
    {
        path: 'stationnement',
        loadChildren: () => Promise.all(/*! import() | services-stationnement-stationnement-module */[__webpack_require__.e("common"), __webpack_require__.e("services-stationnement-stationnement-module")]).then(__webpack_require__.bind(null, /*! ./services/stationnement/stationnement.module */ "6Nro")).then(m => m.StationnementPageModule)
    },
    {
        path: 'audit-equipement',
        loadChildren: () => Promise.all(/*! import() | services-audit-equipement-audit-equipement-module */[__webpack_require__.e("common"), __webpack_require__.e("services-audit-equipement-audit-equipement-module")]).then(__webpack_require__.bind(null, /*! ./services/audit-equipement/audit-equipement.module */ "WzTM")).then(m => m.AuditEquipementPageModule)
    },
    {
        path: 'taxi',
        loadChildren: () => __webpack_require__.e(/*! import() | services-taxi-taxi-module */ "services-taxi-taxi-module").then(__webpack_require__.bind(null, /*! ./services/taxi/taxi.module */ "L6Rv")).then(m => m.TaxiPageModule)
    },
    { path: 'specifications',
        loadChildren: () => __webpack_require__.e(/*! import() | services-specifications-specifications-module */ "services-specifications-specifications-module").then(__webpack_require__.bind(null, /*! ./services/specifications/specifications.module */ "DlwB")).then(m => m.SpecificationsPageModule)
    },
    {
        path: 'paiement-electronique',
        loadChildren: () => __webpack_require__.e(/*! import() | services-paiement-electronique-paiement-electronique-module */ "services-paiement-electronique-paiement-electronique-module").then(__webpack_require__.bind(null, /*! ./services/paiement-electronique/paiement-electronique.module */ "iinI")).then(m => m.PaiementElectroniquePageModule)
    },
    {
        path: 'redirect-to-map',
        loadChildren: () => Promise.all(/*! import() | modules-news-redirect-to-map-redirect-to-map-module */[__webpack_require__.e("default~modules-map-map-module~modules-news-redirect-to-map-redirect-to-map-module~services-comptage~158399fe"), __webpack_require__.e("modules-news-redirect-to-map-redirect-to-map-module")]).then(__webpack_require__.bind(null, /*! ./modules/news/redirect-to-map/redirect-to-map.module */ "DJZ0")).then(m => m.RedirectToMapPageModule)
    },
    {
        path: 'parametre/:name',
        loadChildren: () => Promise.all(/*! import() | services-parametre-parametre-module */[__webpack_require__.e("default~authentification-notification-notification-module~services-comptage-settings-settings-module~d8bcaf3f"), __webpack_require__.e("common"), __webpack_require__.e("services-parametre-parametre-module")]).then(__webpack_require__.bind(null, /*! ./services/parametre/parametre.module */ "O/H0")).then(m => m.ParametrePageModule)
    },
    {
        path: 'plan-detail/:plan',
        loadChildren: () => Promise.all(/*! import() | services-plan-locaux-plan-detail-plan-detail-module */[__webpack_require__.e("common"), __webpack_require__.e("services-plan-locaux-plan-detail-plan-detail-module")]).then(__webpack_require__.bind(null, /*! ./services/plan-locaux/plan-detail/plan-detail.module */ "3zx0")).then(m => m.PlanDetailPageModule)
    },
    {
        path: 'transport-detail',
        loadChildren: () => Promise.all(/*! import() | services-transport-datail-transport-datail-module */[__webpack_require__.e("common"), __webpack_require__.e("services-transport-datail-transport-datail-module")]).then(__webpack_require__.bind(null, /*! ./services/transport-datail/transport-datail.module */ "6EIQ")).then(m => m.TransportDatailPageModule)
    },
    {
        path: 'fitness2',
        loadChildren: () => Promise.all(/*! import() | services-fitness2-fitness2-module */[__webpack_require__.e("common"), __webpack_require__.e("services-fitness2-fitness2-module")]).then(__webpack_require__.bind(null, /*! ./services/fitness2/fitness2.module */ "3V8O")).then(m => m.Fitness2PageModule)
    },
    {
        path: 'plan-locaux2',
        loadChildren: () => Promise.all(/*! import() | services-plan-locaux2-plan-locaux2-module */[__webpack_require__.e("common"), __webpack_require__.e("services-plan-locaux2-plan-locaux2-module")]).then(__webpack_require__.bind(null, /*! ./services/plan-locaux2/plan-locaux2.module */ "2Zjd")).then(m => m.PlanLocaux2PageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "wePl":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/reservation/reservation-historical/reservation-historical.page.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content >\n    <div class=\"principal\">\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"1\"routerLink=\"/room-reservation\" routerDirection=\"back\" >\n                    <ion-icon class=\"reservation\" name=\"chevron-back-outline\">\n                    </ion-icon>\n                </ion-col>\n                <ion-col size=\"10\" class=\"colStart\" >\n                    <span class=\"Reservationtitle\" >Réservation</span>\n                    <span class=\"Historiquetitle\" >Historique</span>\n                </ion-col >\n            </ion-row>\n        </ion-grid>\n        <ion-card >\n            <div>\n                <ion-grid >\n                    <ion-row class=\"rowStart\">\n                        <ion-col size=\"6\" class=\"colStart\" >\n                            <span class=\"terminees\" (click)=\"showOldReservations()\"  >Terminées</span>\n                        </ion-col>  \n                        <ion-col  size=\"6\"class=\"colStart\"  >\n                            <span class=\"aVenir\" (click)=\"showNewHistrorical()\"  >À venir</span>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n                <div *ngIf=\"showHistorical\">\n                   <ion-list *ngFor=\"let reservation of historical\" >\n                        <ion-item>\n                            <ion-grid>\n                                <ion-row>\n                                    <ion-col size=3 class=\"ter\" >\n                                        <ion-icon class=\"icon\" name=\"calendar-clear-outline\"></ion-icon>\n                                    </ion-col>\n                                    <ion-col size >\n                                        <p>{{reservation.name }}</p>\n                                        <p>{{reservation.beginDate | date:'d/MM/YYYY HH:mm '}} </p>\n                                        <p>{{reservation.endDate | date:'d/MM/YYYY HH:mm '}} </p>\n                                    </ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </ion-item>\n                    </ion-list>\n                </div>\n                <div *ngIf=\"allOldReservations\">\n                    <ion-list *ngFor=\"let reservation of storageOldReservations\" >\n                        <ion-item>\n                            <ion-grid>\n                                <ion-row>\n                                    <ion-col size=3 class=\"ter\" >\n                                        <ion-icon class=\"icon\" name=\"calendar-clear-outline\"></ion-icon>\n                                    </ion-col>\n                                    <ion-col size >\n                                        <p>{{reservation.name }}</p>\n                                        <p>{{reservation.beginDate | date:'d/MM/YYYY HH:mm '}} </p>\n                                        <p>{{reservation.endDate | date:'d/MM/YYYY HH:mm '}} </p>\n                                    </ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </ion-item>\n                    </ion-list>\n                </div>\n                <div *ngIf=\"showReservationMessage\" class=\"errorMessageDiv\">\n                    <ion-grid>\n                        <ion-row>\n                            <ion-col size=\"\" class=\"errorMessageDiv\">\n                                <ion-icon class=\"errorIcon\" name=\"remove-circle-outline\"></ion-icon>\n                                <span class=\"errorMessageSpan\"> Aucune réservation</span> \n                             </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </div>\n            </div>\n        </ion-card>   \n    </div>\n</ion-content>\n    \n\n");

/***/ }),

/***/ "yKjO":
/*!*************************************************!*\
  !*** ./src/app/authentification/logout.pipe.ts ***!
  \*************************************************/
/*! exports provided: LogoutPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutPipe", function() { return LogoutPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let LogoutPipe = class LogoutPipe {
    transform(value, ...args) {
        return null;
    }
};
LogoutPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'logout'
    })
], LogoutPipe);



/***/ }),

/***/ "yOun":
/*!*************************************!*\
  !*** ./src/mocks/services.mocks.ts ***!
  \*************************************/
/*! exports provided: Services */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Services", function() { return Services; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let Services = class Services {
    constructor() {
        this.servicesList = [
            {
                id: 'gestion_espace',
                label: 'Gestion des espaces',
                icon: 'home-outline',
                background: [
                    '#65B9B5',
                    '#92CDB8'
                ],
                order: 1,
                modules: [
                    {
                        id: 'historique_parcours',
                        label: 'Historisation du parcours',
                        icon: 'map-outline',
                        isActivated: true,
                        link: '/historisation-parcours',
                        order: 1,
                        subModules: []
                    },
                    {
                        id: 'comptage',
                        label: 'Comptage',
                        icon: 'people-outline',
                        link: '/comptage-pzone',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    },
                    {
                        id: 'Gestion des parkings',
                        label: 'Gestion des parkings',
                        icon: 'car-outline',
                        link: '/gestion-parking',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    },
                    {
                        id: 'Gestion de salles',
                        label: 'Réserv. espace',
                        icon: 'calendar-outline',
                        link: '/room-reservation',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    },
                    {
                        id: 'reservation_bureau',
                        label: 'Réserv. équipement',
                        icon: 'desktop-outline',
                        isActivated: true,
                        link: '/equipment-reservation',
                        order: 1,
                        subModules: []
                    },
                    {
                        id: 'gestion_d_equipements_informatiques',
                        label: 'Gestion d’équipements informatiques',
                        icon: 'desktop-outline',
                        isActivated: true,
                        link: '',
                        order: 1,
                        subModules: []
                    },
                    {
                        id: 'pilotage_d_equipements_de_confort',
                        label: 'Pilotage d’équipements de confort ',
                        icon: 'bulb-outline',
                        isActivated: true,
                        link: '',
                        order: 1,
                        subModules: []
                    },
                    {
                        id: 'pilotage_d_equipements_du_batiment',
                        label: 'Pilotage d’équipements du bâtiment',
                        icon: 'man-outline',
                        isActivated: true,
                        link: '',
                        order: 1,
                        subModules: []
                    },
                ]
            },
            {
                id: 'travail_collaboratif',
                label: 'Travail collaboratif',
                icon: 'people-outline',
                background: [
                    '#3990A0',
                    '#6FBDB5'
                ],
                order: 1,
                modules: [
                    {
                        id: 'partage_position',
                        label: 'Partage de position',
                        icon: 'paper-plane-outline',
                        link: '/position',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    },
                    {
                        id: 'chat',
                        label: 'Chat',
                        icon: 'chatbubble-ellipses-outline',
                        link: '/chat/message',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    },
                    {
                        id: 'boite',
                        label: 'Boite à idées',
                        icon: 'cube-outline',
                        link: '/boite-a-idees',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    },
                    {
                        id: 'enquetes_de_satisfaction',
                        label: 'Enquêtes de satisfaction',
                        icon: 'star-outline',
                        link: '/feedback',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    }, {
                        id: 'planification_devenenements',
                        label: 'Planification d’événements',
                        icon: 'calendar-number-outline',
                        link: '',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    }, {
                        id: 'partage_dinformations_et_de_documents',
                        label: 'Partage d’informations',
                        icon: 'document-text-outline',
                        link: '',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    }
                ]
            },
            {
                id: 'bien_etre',
                label: 'Bien-être',
                icon: 'flower-outline',
                background: [
                    '#6BBDB7',
                    '#97CEB8'
                ],
                order: 1,
                modules: [
                    {
                        id: 'restaurations',
                        label: 'Restauration',
                        icon: 'fast-food-outline',
                        isActivated: true,
                        link: '/restauration',
                        order: 1,
                        subModules: [
                            {
                                id: 'hot',
                                label: 'Boissons chaudes',
                                icon: '',
                                order: 1,
                                isActivated: true,
                                subModules: []
                            },
                            {
                                id: 'restauration',
                                label: 'Restaurant d\'entreprise',
                                icon: '',
                                isActivated: false,
                                order: 1,
                                subModules: []
                            },
                            {
                                id: 'cafeteria',
                                label: 'Cafétéria',
                                icon: '\uf803',
                                isActivated: false,
                                order: 1,
                                subModules: []
                            }
                        ]
                    },
                    {
                        id: 'conciergerie',
                        label: 'Conciergerie',
                        icon: 'key-outline',
                        link: '/conciergerie',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    },
                    {
                        id: 'gpay',
                        label: 'Paiement électronique',
                        icon: 'card-outline',
                        link: '/paiement-electronique',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    },
                    {
                        id: 'fitness',
                        label: 'Fitness',
                        icon: 'barbell-outline',
                        link: '/fitness2',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    },
                    {
                        id: 'plan_locaux',
                        label: 'Bon plans locaux',
                        icon: 'search-outline',
                        link: '/plans',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    },
                    {
                        id: 'qualite_de_vie_au_travail',
                        label: 'Qualité de vie au travail',
                        icon: 'star-half-outline',
                        link: '',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    }
                ]
            },
            //
            {
                id: 'mission',
                label: 'Mission',
                icon: 'refresh-outline',
                background: [
                    '#91CCB8',
                    '#B9D0B0'
                ],
                order: 1,
                modules: [
                    {
                        id: 'anomalie',
                        label: 'Détection d\'anomalie',
                        icon: 'megaphone-outline',
                        isActivated: true,
                        link: '/constat',
                        order: 1,
                        subModules: [
                            {
                                id: 'scan_tag',
                                label: 'Scanner un tag NFC',
                                icon: '',
                                isActivated: true,
                                order: 1,
                                subModules: []
                            },
                            {
                                id: 'lecteur_qr',
                                label: 'Flasher un QR Code',
                                icon: '',
                                isActivated: true,
                                order: 1,
                                subModules: []
                            }
                        ]
                    },
                    {
                        id: 'specifications',
                        label: 'Spécifications',
                        icon: 'library-outline',
                        link: '/specifications',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    },
                    {
                        id: 'audit_dequipements',
                        label: 'Audit d’équipement',
                        icon: 'qr-code-outline',
                        link: '/audit-equipement',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    },
                    {
                        id: 'notation',
                        label: 'Notation',
                        icon: 'thumbs-up-outline',
                        link: '',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    },
                    {
                        id: 'planification_des_taches',
                        label: 'Planification des tâches',
                        icon: 'create-outline',
                        isActivated: true,
                        link: '',
                        order: 1,
                        subModules: []
                    },
                    {
                        id: 'suivi_des_travaux',
                        label: 'Suivi des travaux',
                        icon: 'clipboard-outline',
                        link: '',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    },
                    {
                        id: 'gestion_des_equipements',
                        label: 'Gestion des équipements',
                        icon: 'briefcase-outline',
                        link: '',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    },
                    {
                        id: 'gestion_des_outils',
                        label: 'Gestion des outils',
                        icon: 'build-outline',
                        link: '',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    }
                ]
            },
            {
                id: 'mobilité',
                label: 'Mobilité',
                icon: 'walk-outline',
                background: [
                    '#8CCAB8',
                    '#B3D0B1'
                ],
                order: 1,
                modules: [
                    {
                        id: 'taxi',
                        label: 'Taxi',
                        icon: 'car-sport-outline',
                        link: '/taxi',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    },
                    {
                        id: 'stationnement',
                        label: 'Stationnement',
                        icon: 'location-outline',
                        link: '/stationnement',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    },
                    {
                        id: 'transport',
                        label: 'Transport',
                        icon: 'train-outline',
                        link: '/transport',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    },
                    {
                        id: 'co_voiturage',
                        label: 'Co-voiturage',
                        icon: 'car-outline',
                        link: '',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    },
                    {
                        id: 'traffic_en_temps_reel',
                        label: 'Traffic en temps réel',
                        icon: 'bicycle-outline',
                        link: '',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    },
                    {
                        id: 'proximite',
                        label: 'Proximité',
                        icon: 'trail-sign-outline',
                        link: '',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    },
                ]
            },
            //
            {
                id: 'informations',
                label: 'Informations',
                icon: 'newspaper-outline',
                background: [
                    '#ABD0B5',
                    '#DDBD98'
                ],
                order: 1,
                modules: [
                    {
                        id: 'notifications',
                        label: 'Notifications',
                        icon: 'notifications-outline',
                        link: '/notification',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    },
                    {
                        id: 'meteo',
                        label: 'Météo',
                        icon: 'thunderstorm-outline',
                        link: '/weather',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    },
                    {
                        id: 'source',
                        label: 'Sources documentaires',
                        icon: 'document-text-outline',
                        link: '/documents',
                        isActivated: true,
                        order: 1,
                        subModules: [
                            {
                                id: 'brochure',
                                label: 'Brochure commerciale',
                                icon: '\uf02d',
                                order: 1,
                                isActivated: true,
                                subModules: []
                            },
                            {
                                id: 'painting',
                                label: 'Catalogue peinture',
                                icon: '\uf5c3',
                                isActivated: true,
                                order: 1,
                                subModules: []
                            },
                            {
                                id: 'ground',
                                label: 'Catalogue sol',
                                icon: '\uf5c3',
                                isActivated: false,
                                order: 1,
                                subModules: []
                            }
                        ]
                    },
                    {
                        id: 'actualites',
                        label: 'Journaux',
                        icon: 'newspaper-outline',
                        link: '/journaux',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    },
                    // {
                    //   id: 'contact',
                    //   label: 'Contact',
                    //   icon: 'phone-portrait-outline',
                    //   link: '/position/contact',
                    //   isActivated: true,
                    //   order: 1,
                    //   subModules: []
                    // },
                    {
                        id: 'livret_d_accueil_dematerialise',
                        label: 'Livret d’accueil dématérialisé',
                        icon: 'book-outline',
                        link: '',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    },
                    {
                        id: 'event',
                        label: 'Evénements',
                        icon: 'calendar-outline',
                        link: '',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    },
                ]
            },
            {
                id: 'securite',
                label: 'Sécurité',
                icon: 'lock-closed-outline',
                background: [
                    '#AED0B3',
                    '#E1BA94'
                ],
                order: 1,
                modules: [
                    {
                        id: 'appel-urgence',
                        label: 'Appel d\'urgence',
                        icon: 'call-outline',
                        link: '/emergency-call',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    },
                    // {
                    //     "id": "historique_parcours",
                    //     "label": "Historisation du parcours",
                    //     "icon": "map-outline",
                    //     "isActivated": true,
                    //     "link":"/historisation-parcours",
                    //     "order": 1,
                    //     "subModules": []
                    // },
                    {
                        id: 'dati',
                        label: 'Dispositif d\'alarme du travailleur isolé',
                        icon: 'alarm-outline',
                        link: '/fall-detection',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    },
                    {
                        id: 'securite_incendie',
                        label: 'Sécurité incendie',
                        icon: 'flame-outline',
                        link: '/security-incendie',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    },
                    {
                        id: 'gestion_des_equipements',
                        label: 'Gestion des équipements de protection',
                        icon: 'briefcase-outline',
                        link: '',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    },
                    {
                        id: 'consignes_et_procedures_de_securite',
                        label: 'Procédures de sécurité',
                        icon: 'clipboard-outline',
                        link: '',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    },
                ]
            },
            {
                id: 'stats',
                label: 'Statistiques',
                icon: 'stats-chart-outline',
                background: [
                    '#ABD0B5',
                    '#DDBD98'
                ],
                order: 1,
                modules: [
                    {
                        id: 'stats',
                        label: 'Fréquentation',
                        icon: 'stats-chart-outline',
                        link: '/stats',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    },
                    {
                        id: 'tableau_de_bord',
                        label: 'Tableau de bord',
                        icon: 'speedometer-outline',
                        link: '/tableau-de-bord',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    },
                    {
                        id: 'geostatistiques',
                        label: 'Données environnementales',
                        icon: 'location-outline',
                        link: '/geostatistiques',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    },
                    {
                        id: 'donnees_d_audience',
                        label: 'Données d’audience',
                        icon: 'people-outline',
                        link: '',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    },
                    {
                        id: 'donnees_personnelles',
                        label: 'Données personnelles',
                        icon: 'person-outline',
                        link: '',
                        isActivated: true,
                        order: 1,
                        subModules: []
                    },
                ]
            },
            {
                id: 'surete',
                label: 'Sûreté',
                icon: 'shield-checkmark-outline',
                link: 'false',
                background: [
                    '#ABD0B5',
                    '#DDBD98'
                ],
                order: 1,
                modules: [
                //    {
                //         "id": "authentification_forte",
                //         "label": "Authentification forte",
                //         "icon": "finger-print-outline",
                //         "link":"",
                //         "isActivated": true,
                //         "order": 1,
                //         "subModules": []
                //     },
                //     {
                //         "id": "gestion_des_droits_des_usagers",
                //         "label": "Gestion des droits des usagers",
                //         "icon": "people-circle-outline",
                //         "link":"/weather",
                //         "isActivated": true,
                //         "order": 1,
                //         "subModules": []
                //     },
                //     {
                //         "id": "messagerie_instantanee_securisee",
                //         "label": "Messagerie instantanée sécurisée",
                //         "icon": "chatbubbles-outline",
                //         "link":"",
                //         "isActivated": true,
                //         "order": 1,
                //         "subModules": []
                //     },
                //     {
                //         "id": "gestion_des_habilitations_des_participants",
                //         "label": "Gestion des habilitations des participants",
                //         "icon": "ribbon-outline",
                //         "link":"/weather",
                //         "isActivated": true,
                //         "order": 1,
                //         "subModules": []
                //     },
                ]
            },
        ];
    }
    getAll() {
        return this.servicesList;
    }
};
Services = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], Services);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-app {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYXBwe1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuXG4iXX0= */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ "2Zi2");





Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__["defineCustomElements"])(window);
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zena":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/services-home/services-home.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content  >\n  <div class=\"content2\">\n    <ion-grid class=\"gridStart\"   >\n      <ion-row id=\"step1\" >\n          <ion-col class=\"modele\" size=\"5.8\"  *ngFor=\" let service of servicesMocks; let index = index\" (click)=\"serviceList(service)\" id=\"col\" >\n            <div  [class.disabled]=\"service.link == 'false' \"   >\n              <ion-icon name=\"{{service.icon}}\" ></ion-icon>\n                <p >{{service.label}}</p>\n              </div>\n            </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <div class=\"bottomSheet\" (click)=\"toogleMode()\" >\n        <ion-grid class=\"service-grid\">\n          <ion-row class=\"servicesRow\">\n            <ion-col size=\"3\" class=\"colservices\" *ngFor=\"let serviceItem of services; let index = index\" >\n              <div *ngIf=\"serviceItem.link\">\n                <a routerLink=\"{{serviceItem.link}}\" >\n                  <ion-icon name=\"{{serviceItem.icon}}\"  ></ion-icon>\n                  <p class=\"serviceName\">{{serviceItem.label}}</p>\n                </a>\n              </div>\n              <div class=\"ion-text-center\" *ngIf=\"!serviceItem.link\" (click)=\"demoAlert()\">\n                <ion-icon name=\"{{serviceItem.icon}}\"></ion-icon>\n                <p class=\"serviceName\">{{serviceItem.label}}\n                  <br>\n                  <ion-badge color=\"medium\">à venir</ion-badge>\n                </p>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HomePage = class HomePage {
    constructor() { }
    ngOnInit() {
    }
};
HomePage.ctorParameters = () => [];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
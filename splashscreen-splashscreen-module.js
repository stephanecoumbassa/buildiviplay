(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["splashscreen-splashscreen-module"],{

/***/ "SoIQ":
/*!*************************************************************!*\
  !*** ./src/app/splashscreen/splashscreen-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SplashscreenPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashscreenPageRoutingModule", function() { return SplashscreenPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _splashscreen_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./splashscreen.page */ "bPRL");




const routes = [
    {
        path: '',
        component: _splashscreen_page__WEBPACK_IMPORTED_MODULE_3__["SplashscreenPage"]
    }
];
let SplashscreenPageRoutingModule = class SplashscreenPageRoutingModule {
};
SplashscreenPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SplashscreenPageRoutingModule);



/***/ }),

/***/ "YvKS":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/splashscreen/splashscreen.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"imageDiv\">\n    <div class=\"imageContainer\">\n        <img class=\"iviplayLogo\" src=\"assets/logo.png\" alt=\"\" >\n    </div>\n    <div class=\"titleDiv\">\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"4\" class=\"paragraph\" >\n                    <p>Designed by</p>  \n                </ion-col>\n                <ion-col size=\"8\" class=\"ivifloLogoColumn\">\n                    <img class=\"ivifloLogo\" src=\"assets/logo-color.png\" alt=\"\" >\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n</div> ");

/***/ }),

/***/ "bPRL":
/*!***************************************************!*\
  !*** ./src/app/splashscreen/splashscreen.page.ts ***!
  \***************************************************/
/*! exports provided: SplashscreenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashscreenPage", function() { return SplashscreenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_splashscreen_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./splashscreen.page.html */ "YvKS");
/* harmony import */ var _splashscreen_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splashscreen.page.scss */ "cr9G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_layout_tabs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/layout/tabs.service */ "S9ap");







let SplashscreenPage = class SplashscreenPage {
    constructor(router, alertController, tabsService) {
        this.router = router;
        this.alertController = alertController;
        this.tabsService = tabsService;
    }
    welcomeAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let notification = {
                category: 'Accueil',
                title: 'Message de bienvenue',
                description: 'Bienvenue sur le démonstrateur iViPlay !'
            };
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-popup',
                subHeader: '',
                message: 'Bienvenue sur le démonstrateur iViPlay !',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Valider',
                        handler: () => {
                            this.activeDidacticiel = true;
                            localStorage.setItem('notification', JSON.stringify(notification));
                            this.tabsService.getStatusOfSplashScreen(this.activeDidacticiel);
                        }
                    }
                ],
            });
            document.querySelector(".alert-button").style.fontSize = "100%";
            document.querySelector(".alert-button").style.fontWeight = "normal";
            yield alert.present();
        });
    }
    ngOnInit() {
        const that = this;
        if (!localStorage.getItem('notification')) {
            that.welcomeAlert();
        }
        that.router.navigate(['tabs/tab2']);
    }
};
SplashscreenPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_layout_tabs_service__WEBPACK_IMPORTED_MODULE_6__["TabsService"] }
];
SplashscreenPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-splashscreen',
        template: _raw_loader_splashscreen_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_splashscreen_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SplashscreenPage);



/***/ }),

/***/ "cr9G":
/*!*****************************************************!*\
  !*** ./src/app/splashscreen/splashscreen.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imageDiv {\n  text-align: center;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.iviplayLogo {\n  max-width: 60%;\n}\n\n.ivifloLogo {\n  max-width: 6rem;\n}\n\n.titleDiv {\n  position: absolute;\n  bottom: 0px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n}\n\n.ivifloLogoColumn {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.paragraph {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.imageContainer {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NwbGFzaHNjcmVlbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUdKOztBQURBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQUlKOztBQUZBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUtKOztBQUhBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQU1KIiwiZmlsZSI6InNwbGFzaHNjcmVlbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2VEaXZ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pdmlwbGF5TG9nb3tcbiAgICBtYXgtd2lkdGg6NjAlO1xufVxuLml2aWZsb0xvZ297XG4gICAgbWF4LXdpZHRoOiA2cmVtO1xufVxuLnRpdGxlRGl2e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5pdmlmbG9Mb2dvQ29sdW1ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG59XG4ucGFyYWdyYXBoe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xufVxuLmltYWdlQ29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "oEhx":
/*!*****************************************************!*\
  !*** ./src/app/splashscreen/splashscreen.module.ts ***!
  \*****************************************************/
/*! exports provided: SplashscreenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashscreenPageModule", function() { return SplashscreenPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _splashscreen_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./splashscreen-routing.module */ "SoIQ");
/* harmony import */ var _splashscreen_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./splashscreen.page */ "bPRL");







let SplashscreenPageModule = class SplashscreenPageModule {
};
SplashscreenPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _splashscreen_routing_module__WEBPACK_IMPORTED_MODULE_5__["SplashscreenPageRoutingModule"]
        ],
        declarations: [_splashscreen_page__WEBPACK_IMPORTED_MODULE_6__["SplashscreenPage"]]
    })
], SplashscreenPageModule);



/***/ })

}]);
//# sourceMappingURL=splashscreen-splashscreen-module.js.map
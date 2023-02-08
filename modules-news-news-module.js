(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-news-news-module"],{

/***/ "BaDi":
/*!**************************************************!*\
  !*** ./src/app/modules/news/news-art.service.ts ***!
  \**************************************************/
/*! exports provided: NewsArtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsArtService", function() { return NewsArtService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_mocks_article_mocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/mocks/article.mocks */ "nQit");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




let NewsArtService = class NewsArtService {
    constructor(artMocks, http) {
        this.artMocks = artMocks;
        this.http = http;
        this.url = 'https://api.openweathermap.org/data/2.5/weather?&units=metric';
        this.apiKey = '3c6d3826d4a217da0f05730829c10e12';
    }
    getArticles() {
        return this.artMocks.getAll();
    }
    parisWeather() {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('q', 'paris')
            .set('units', 'imperial')
            .set('appid', this.apiKey);
        return this.http.get(this.url, { params });
    }
};
NewsArtService.ctorParameters = () => [
    { type: src_mocks_article_mocks__WEBPACK_IMPORTED_MODULE_2__["ArticleMocks"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
NewsArtService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NewsArtService);



/***/ }),

/***/ "Q/4p":
/*!*********************************************!*\
  !*** ./src/app/modules/news/news.module.ts ***!
  \*********************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _news_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news.page */ "l0Le");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _news_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./news-routing.module */ "wZUk");








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _news_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"]
        ],
        declarations: [_news_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "SgPI":
/*!*********************************************!*\
  !*** ./src/app/modules/news/news.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/** Ionic CSS Variables **/\n:root {\n  --color-tabs:#514e4c;\n  /** primary **/\n  --ion-color-primary: $primary;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}\n:root ion-item {\n  font-size: 14px;\n}\n@media (prefers-color-scheme: dark) {\n  /*\n   * Dark Colors\n   * -------------------------------------------\n   */\n  body {\n    --ion-color-primary: #428cff;\n    --ion-color-primary-rgb: 66,140,255;\n    --ion-color-primary-contrast: #ffffff;\n    --ion-color-primary-contrast-rgb: 255,255,255;\n    --ion-color-primary-shade: #3a7be0;\n    --ion-color-primary-tint: #5598ff;\n    --ion-color-secondary: #50c8ff;\n    --ion-color-secondary-rgb: 80,200,255;\n    --ion-color-secondary-contrast: #ffffff;\n    --ion-color-secondary-contrast-rgb: 255,255,255;\n    --ion-color-secondary-shade: #46b0e0;\n    --ion-color-secondary-tint: #62ceff;\n    --ion-color-tertiary: #6a64ff;\n    --ion-color-tertiary-rgb: 106,100,255;\n    --ion-color-tertiary-contrast: #ffffff;\n    --ion-color-tertiary-contrast-rgb: 255,255,255;\n    --ion-color-tertiary-shade: #5d58e0;\n    --ion-color-tertiary-tint: #7974ff;\n    --ion-color-success: #2fdf75;\n    --ion-color-success-rgb: 47,223,117;\n    --ion-color-success-contrast: #000000;\n    --ion-color-success-contrast-rgb: 0,0,0;\n    --ion-color-success-shade: #29c467;\n    --ion-color-success-tint: #44e283;\n    --ion-color-warning: #ffd534;\n    --ion-color-warning-rgb: 255,213,52;\n    --ion-color-warning-contrast: #000000;\n    --ion-color-warning-contrast-rgb: 0,0,0;\n    --ion-color-warning-shade: #e0bb2e;\n    --ion-color-warning-tint: #ffd948;\n    --ion-color-danger: #ff4961;\n    --ion-color-danger-rgb: 255,73,97;\n    --ion-color-danger-contrast: #ffffff;\n    --ion-color-danger-contrast-rgb: 255,255,255;\n    --ion-color-danger-shade: #e04055;\n    --ion-color-danger-tint: #ff5b71;\n    --ion-color-dark: #f4f5f8;\n    --ion-color-dark-rgb: 244,245,248;\n    --ion-color-dark-contrast: #000000;\n    --ion-color-dark-contrast-rgb: 0,0,0;\n    --ion-color-dark-shade: #d7d8da;\n    --ion-color-dark-tint: #f5f6f9;\n    --ion-color-medium: #989aa2;\n    --ion-color-medium-rgb: 152,154,162;\n    --ion-color-medium-contrast: #000000;\n    --ion-color-medium-contrast-rgb: 0,0,0;\n    --ion-color-medium-shade: #86888f;\n    --ion-color-medium-tint: #a2a4ab;\n    --ion-color-light: #222428;\n    --ion-color-light-rgb: 34,36,40;\n    --ion-color-light-contrast: #ffffff;\n    --ion-color-light-contrast-rgb: 255,255,255;\n    --ion-color-light-shade: #1e2023;\n    --ion-color-light-tint: #383a3e;\n  }\n\n  /*\n   * iOS Dark Theme\n   * -------------------------------------------\n   */\n  .ios body {\n    --ion-background-color: #000000;\n    --ion-background-color-rgb: 0,0,0;\n    --ion-text-color: #ffffff;\n    --ion-text-color-rgb: 255,255,255;\n    --ion-color-step-50: #0d0d0d;\n    --ion-color-step-100: #1a1a1a;\n    --ion-color-step-150: #262626;\n    --ion-color-step-200: #333333;\n    --ion-color-step-250: #404040;\n    --ion-color-step-300: #4d4d4d;\n    --ion-color-step-350: #595959;\n    --ion-color-step-400: #666666;\n    --ion-color-step-450: #737373;\n    --ion-color-step-500: #808080;\n    --ion-color-step-550: #8c8c8c;\n    --ion-color-step-600: #999999;\n    --ion-color-step-650: #a6a6a6;\n    --ion-color-step-700: #b3b3b3;\n    --ion-color-step-750: #bfbfbf;\n    --ion-color-step-800: #cccccc;\n    --ion-color-step-850: #d9d9d9;\n    --ion-color-step-900: #e6e6e6;\n    --ion-color-step-950: #f2f2f2;\n    --ion-item-background: #000000;\n    --ion-card-background: #1c1c1d;\n  }\n\n  .ios ion-modal {\n    --ion-background-color: var(--ion-color-step-100);\n    --ion-toolbar-background: var(--ion-color-step-150);\n    --ion-toolbar-border-color: var(--ion-color-step-250);\n  }\n\n  /*\n   * Material Design Dark Theme\n   * -------------------------------------------\n   */\n  .md body {\n    --ion-background-color: #121212;\n    --ion-background-color-rgb: 18,18,18;\n    --ion-text-color: #ffffff;\n    --ion-text-color-rgb: 255,255,255;\n    --ion-border-color: #222222;\n    --ion-color-step-50: #1e1e1e;\n    --ion-color-step-100: #2a2a2a;\n    --ion-color-step-150: #363636;\n    --ion-color-step-200: #414141;\n    --ion-color-step-250: #4d4d4d;\n    --ion-color-step-300: #595959;\n    --ion-color-step-350: #656565;\n    --ion-color-step-400: #717171;\n    --ion-color-step-450: #7d7d7d;\n    --ion-color-step-500: #898989;\n    --ion-color-step-550: #949494;\n    --ion-color-step-600: #a0a0a0;\n    --ion-color-step-650: #acacac;\n    --ion-color-step-700: #b8b8b8;\n    --ion-color-step-750: #c4c4c4;\n    --ion-color-step-800: #d0d0d0;\n    --ion-color-step-850: #dbdbdb;\n    --ion-color-step-900: #e7e7e7;\n    --ion-color-step-950: #f3f3f3;\n    --ion-item-background: #1e1e1e;\n    --ion-toolbar-background: #1f1f1f;\n    --ion-tab-bar-background: #1f1f1f;\n    --ion-card-background: #1e1e1e;\n  }\n}\n/* Importing Bootstrap SCSS file. */\n.planingDuJour {\n  padding: 0%;\n}\n.news {\n  margin-top: 6rem;\n  padding: 0%;\n}\n.favButton {\n  width: 47%;\n  margin-left: 2%;\n}\n.active {\n  background-color: #595755;\n  color: white;\n}\nbutton {\n  height: 35px;\n  width: 50%;\n  border-color: #f3f3f3 1px solid;\n  border-radius: 5px;\n  transition: 0.5s;\n  color: #514e4c;\n}\n.planingFirstColumn {\n  margin-top: 0%;\n}\n.planingParagraphe {\n  font-size: 17px;\n}\n.cardLogo {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.colRes {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n}\n.danger {\n  color: #eb445a;\n}\n.logoPlanning {\n  background-color: #f3f3f3;\n  color: #514e4c;\n  font-size: 25px;\n  border-radius: 50px;\n  padding: 20%;\n}\n.disabled {\n  opacity: 0.4;\n  margin-left: 2%;\n  font-size: 25px;\n}\n.heart {\n  font-size: 25px;\n}\n.left, .comment, .favComment {\n  margin-left: 2%;\n  font-size: 25px;\n}\n.logo {\n  background-color: #f3f3f3;\n  color: #514e4c;\n  font-size: 25px;\n  border-radius: 90px;\n  padding: 3%;\n}\nimg {\n  width: 100%;\n  border-color: white;\n}\nion-icon {\n  font-size: 22px;\n}\nion-card {\n  padding: 2%;\n}\n.shareColumn {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  font-size: 25px;\n}\nb {\n  font-size: 14px;\n  margin-left: 0.5rem;\n}\n.pReservation {\n  font-size: 14px;\n}\n.img1 {\n  width: 99%;\n}\n.img2 {\n  width: 49%;\n}\n.img3 {\n  width: 49%;\n  margin-left: 1%;\n}\n.postp {\n  font-size: 14px;\n}\n.postime {\n  margin-top: 3%;\n  font-size: 12px;\n}\n.iviplaylogoImage {\n  width: 15%;\n  height: 7%;\n}\n.meteoDiv {\n  padding: 2%;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vbmV3cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsMEJBQUE7QUFLQTtFQUVFLG9CQUFBO0VBTUUsY0FBQTtFQUNGLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsaURBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsZUFBQTtFQUNBLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSxzQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBQ3JCRjtBRHBERTtFQUNJLGVBQUE7QUNzRE47QURxQkE7RUFDRTs7O0lBQUE7RUFLQTtJQUNFLDRCQUFBO0lBQ0EsbUNBQUE7SUFDQSxxQ0FBQTtJQUNBLDZDQUFBO0lBQ0Esa0NBQUE7SUFDQSxpQ0FBQTtJQUVBLDhCQUFBO0lBQ0EscUNBQUE7SUFDQSx1Q0FBQTtJQUNBLCtDQUFBO0lBQ0Esb0NBQUE7SUFDQSxtQ0FBQTtJQUVBLDZCQUFBO0lBQ0EscUNBQUE7SUFDQSxzQ0FBQTtJQUNBLDhDQUFBO0lBQ0EsbUNBQUE7SUFDQSxrQ0FBQTtJQUVBLDRCQUFBO0lBQ0EsbUNBQUE7SUFDQSxxQ0FBQTtJQUNBLHVDQUFBO0lBQ0Esa0NBQUE7SUFDQSxpQ0FBQTtJQUVBLDRCQUFBO0lBQ0EsbUNBQUE7SUFDQSxxQ0FBQTtJQUNBLHVDQUFBO0lBQ0Esa0NBQUE7SUFDQSxpQ0FBQTtJQUVBLDJCQUFBO0lBQ0EsaUNBQUE7SUFDQSxvQ0FBQTtJQUNBLDRDQUFBO0lBQ0EsaUNBQUE7SUFDQSxnQ0FBQTtJQUVBLHlCQUFBO0lBQ0EsaUNBQUE7SUFDQSxrQ0FBQTtJQUNBLG9DQUFBO0lBQ0EsK0JBQUE7SUFDQSw4QkFBQTtJQUVBLDJCQUFBO0lBQ0EsbUNBQUE7SUFDQSxvQ0FBQTtJQUNBLHNDQUFBO0lBQ0EsaUNBQUE7SUFDQSxnQ0FBQTtJQUVBLDBCQUFBO0lBQ0EsK0JBQUE7SUFDQSxtQ0FBQTtJQUNBLDJDQUFBO0lBQ0EsZ0NBQUE7SUFDQSwrQkFBQTtFQzNCRjs7RUQ4QkE7OztJQUFBO0VBS0E7SUFDRSwrQkFBQTtJQUNBLGlDQUFBO0lBRUEseUJBQUE7SUFDQSxpQ0FBQTtJQUVBLDRCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBRUEsOEJBQUE7SUFFQSw4QkFBQTtFQ2hDRjs7RURtQ0E7SUFDRSxpREFBQTtJQUNBLG1EQUFBO0lBQ0EscURBQUE7RUNoQ0Y7O0VEb0NBOzs7SUFBQTtFQUtBO0lBQ0UsK0JBQUE7SUFDQSxvQ0FBQTtJQUVBLHlCQUFBO0lBQ0EsaUNBQUE7SUFFQSwyQkFBQTtJQUVBLDRCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBRUEsOEJBQUE7SUFFQSxpQ0FBQTtJQUVBLGlDQUFBO0lBRUEsOEJBQUE7RUN6Q0Y7QUFDRjtBRDRDQSxtQ0FBQTtBQ3ZQQTtFQUNJLFdBQUE7QUE4TUo7QUE1TUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUErTUo7QUE3TUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQWdOSjtBQTlNQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQWlOSjtBQS9NQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0RmSztBQ2lPVDtBQWhOQTtFQUNJLGNBQUE7QUFtTko7QUFqTkE7RUFDSSxlQUFBO0FBb05KO0FBbE5BO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQXFOSjtBQW5OQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBc05KO0FBcE5BO0VBQ0ksY0FBQTtBQXVOSjtBQXJOQTtFQUNJLHlCRHhDTztFQ3lDUCxjRHZDSztFQ3dDTCxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBd05KO0FBck5BO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBd05KO0FBck5BO0VBQ0ksZUFBQTtBQXdOSjtBQXJOQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBd05KO0FBck5BO0VBQ0kseUJEL0RPO0VDZ0VQLGNEOURLO0VDK0RMLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUF3Tko7QUFyTkE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUF3Tko7QUFyTkE7RUFDSSxlQUFBO0FBd05KO0FBdE5BO0VBQ0ksV0FBQTtBQXlOSjtBQXZOQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQTBOSjtBQXZOQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQTBOSjtBQXhOQTtFQUNJLGVBQUE7QUEyTko7QUF4TkE7RUFDSSxVQUFBO0FBMk5KO0FBek5BO0VBQ0ksVUFBQTtBQTROSjtBQXpOQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FBNE5KO0FBMU5BO0VBQ0ksZUFBQTtBQTZOSjtBQTNOQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBOE5KO0FBNU5BO0VBQ0ksVUFBQTtFQUNBLFVBQUE7QUErTko7QUE3TkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQWdPSiIsImZpbGUiOiJuZXdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcbi8vIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy90aGVtaW5nL1xuXG5cbi8qKiBJb25pYyBDU1MgVmFyaWFibGVzICoqL1xuJHNlY29uZGFyeS1jb2w6cmdiKDI0MywgMjQzLCAyNDMpO1xuJHNlY29uZGFyeTpyZ2IoMjQzLCAyNDMsIDI0MykgO1xuJGJsYW5jOnJnYmEoMjU1LDI1NSwyNTUpO1xuJHByaW1hcnk6IzUxNGU0Yztcbjpyb290IHtcblxuICAtLWNvbG9yLXRhYnM6IzUxNGU0YztcblxuXG4gIGlvbi1pdGVtIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAgIC8qKiBwcmltYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiAkcHJpbWFyeTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDU2LCAxMjgsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICMzMTcxZTA7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzRjOGRmZjtcblxuICAvKiogc2Vjb25kYXJ5ICoqL1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICMzZGMyZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDYxLCAxOTQsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICMzNmFiZTA7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNTBjOGZmO1xuXG4gIC8qKiB0ZXJ0aWFyeSAqKi9cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM1MjYwZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogODIsIDk2LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNDg1NGUwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNjM3MGZmO1xuXG4gIC8qKiBzdWNjZXNzICoqL1xuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMmRkMzZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDUsIDIxMSwgMTExO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI4YmE2MjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDJkNzdkO1xuXG4gIC8qKiB3YXJuaW5nICoqL1xuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZjNDA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAxOTYsIDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBhYzA4O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmNhMjI7XG5cbiAgLyoqIGRhbmdlciAqKi9cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZWI0NDVhO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyMzUsIDY4LCA5MDtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNjZjNjNGY7Ly9pY2lcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNlZDU3NmI7XG5cbiAgLyoqIGRhcmsgKiovXG4gIC0taW9uLWNvbG9yLWRhcms6ICMyMjI0Mjg7Ly9pY2lcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LCAzNiwgNDA7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICMzODNhM2U7XG5cbiAgLyoqIG1lZGl1bSAqKi9cbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTI5NDljO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNDYsIDE0OCwgMTU2O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICNmZmZmZmY7Ly9pY2lcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODA4Mjg5O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogIzlkOWZhNjtcblxuICAvKiogbGlnaHQgKiovXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjZjRmNWY4Oy8vaWNpXG4gIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMjQ0LCAyNDUsIDI0ODtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICMwMDAwMDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICNkN2Q4ZGE7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICNmNWY2Zjk7XG59XG5cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgLypcbiAgICogRGFyayBDb2xvcnNcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICBib2R5IHtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjNDI4Y2ZmO1xuICAgIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA2NiwxNDAsMjU1O1xuICAgIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAgIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICMzYTdiZTA7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNTU5OGZmO1xuXG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjNTBjOGZmO1xuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDgwLDIwMCwyNTU7XG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzQ2YjBlMDtcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzYyY2VmZjtcblxuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNmE2NGZmO1xuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMTA2LDEwMCwyNTU7XG4gICAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzVkNThlMDtcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNzk3NGZmO1xuXG4gICAgLS1pb24tY29sb3Itc3VjY2VzczogIzJmZGY3NTtcbiAgICAtLWlvbi1jb2xvci1zdWNjZXNzLXJnYjogNDcsMjIzLDExNztcbiAgICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMjljNDY3O1xuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQ0ZTI4MztcblxuICAgIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmQ1MzQ7XG4gICAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwyMTMsNTI7XG4gICAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gICAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYmIyZTtcbiAgICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmQ5NDg7XG5cbiAgICAtLWlvbi1jb2xvci1kYW5nZXI6ICNmZjQ5NjE7XG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjU1LDczLDk3O1xuICAgIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNlMDQwNTU7XG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmZjViNzE7XG5cbiAgICAtLWlvbi1jb2xvci1kYXJrOiAjZjRmNWY4O1xuICAgIC0taW9uLWNvbG9yLWRhcmstcmdiOiAyNDQsMjQ1LDI0ODtcbiAgICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAgIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjZDdkOGRhO1xuICAgIC0taW9uLWNvbG9yLWRhcmstdGludDogI2Y1ZjZmOTtcblxuICAgIC0taW9uLWNvbG9yLW1lZGl1bTogIzk4OWFhMjtcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNTIsMTU0LDE2MjtcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gICAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODY4ODhmO1xuICAgIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjYTJhNGFiO1xuXG4gICAgLS1pb24tY29sb3ItbGlnaHQ6ICMyMjI0Mjg7XG4gICAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAzNCwzNiw0MDtcbiAgICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAgIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjMWUyMDIzO1xuICAgIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICMzODNhM2U7XG4gIH1cblxuICAvKlxuICAgKiBpT1MgRGFyayBUaGVtZVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC5pb3MgYm9keSB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwwLDA7XG5cbiAgICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAgIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsMjU1LDI1NTtcblxuICAgIC0taW9uLWNvbG9yLXN0ZXAtNTA6ICMwZDBkMGQ7XG4gICAgLS1pb24tY29sb3Itc3RlcC0xMDA6ICMxYTFhMWE7XG4gICAgLS1pb24tY29sb3Itc3RlcC0xNTA6ICMyNjI2MjY7XG4gICAgLS1pb24tY29sb3Itc3RlcC0yMDA6ICMzMzMzMzM7XG4gICAgLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0MDQwNDA7XG4gICAgLS1pb24tY29sb3Itc3RlcC0zMDA6ICM0ZDRkNGQ7XG4gICAgLS1pb24tY29sb3Itc3RlcC0zNTA6ICM1OTU5NTk7XG4gICAgLS1pb24tY29sb3Itc3RlcC00MDA6ICM2NjY2NjY7XG4gICAgLS1pb24tY29sb3Itc3RlcC00NTA6ICM3MzczNzM7XG4gICAgLS1pb24tY29sb3Itc3RlcC01MDA6ICM4MDgwODA7XG4gICAgLS1pb24tY29sb3Itc3RlcC01NTA6ICM4YzhjOGM7XG4gICAgLS1pb24tY29sb3Itc3RlcC02MDA6ICM5OTk5OTk7XG4gICAgLS1pb24tY29sb3Itc3RlcC02NTA6ICNhNmE2YTY7XG4gICAgLS1pb24tY29sb3Itc3RlcC03MDA6ICNiM2IzYjM7XG4gICAgLS1pb24tY29sb3Itc3RlcC03NTA6ICNiZmJmYmY7XG4gICAgLS1pb24tY29sb3Itc3RlcC04MDA6ICNjY2NjY2M7XG4gICAgLS1pb24tY29sb3Itc3RlcC04NTA6ICNkOWQ5ZDk7XG4gICAgLS1pb24tY29sb3Itc3RlcC05MDA6ICNlNmU2ZTY7XG4gICAgLS1pb24tY29sb3Itc3RlcC05NTA6ICNmMmYyZjI7XG5cbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG5cbiAgICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxYzFjMWQ7XG4gIH1cblxuICAuaW9zIGlvbi1tb2RhbCB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwKTtcbiAgICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCk7XG4gICAgLS1pb24tdG9vbGJhci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCk7XG4gIH1cblxuXG4gIC8qXG4gICAqIE1hdGVyaWFsIERlc2lnbiBEYXJrIFRoZW1lXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLm1kIGJvZHkge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDE4LDE4LDE4O1xuXG4gICAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LDI1NSwyNTU7XG5cbiAgICAtLWlvbi1ib3JkZXItY29sb3I6ICMyMjIyMjI7XG5cbiAgICAtLWlvbi1jb2xvci1zdGVwLTUwOiAjMWUxZTFlO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMTAwOiAjMmEyYTJhO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMzYzNjM2O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjNDE0MTQxO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMjUwOiAjNGQ0ZDRkO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNTk1OTU5O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNjU2NTY1O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNDAwOiAjNzE3MTcxO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjN2Q3ZDdkO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODk4OTg5O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNTUwOiAjOTQ5NDk0O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjYTBhMGEwO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYWNhY2FjO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNzAwOiAjYjhiOGI4O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYzRjNGM0O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtODAwOiAjZDBkMGQwO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZGJkYmRiO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTdlN2U3O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjNmM2YzO1xuXG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMWUxZTFlO1xuXG4gICAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuXG4gICAgLS1pb24tdGFiLWJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xuXG4gICAgLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiAjMWUxZTFlO1xuICB9XG59XG5cbi8qIEltcG9ydGluZyBCb290c3RyYXAgU0NTUyBmaWxlLiAqL1xuLy9AaW1wb3J0ICd+Ym9vdHN0cmFwL3Njc3MvYm9vdHN0cmFwJztcbiIsIkB1c2UgJy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzJyBhcyB2O1xuXG4ucGxhbmluZ0R1Sm91cntcbiAgICBwYWRkaW5nOiAwJTtcbn1cbi5uZXdze1xuICAgIG1hcmdpbi10b3A6IDZyZW07XG4gICAgcGFkZGluZzogMCU7XG59XG4uZmF2QnV0dG9ue1xuICAgIHdpZHRoOiA0NyU7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU5NTc1NTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5idXR0b257XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYm9yZGVyLWNvbG9yOiB2LiRzZWNvbmRhcnkgMXB4IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIGNvbG9yOiB2LiRwcmltYXJ5IDtcbn1cbi5wbGFuaW5nRmlyc3RDb2x1bW57XG4gICAgbWFyZ2luLXRvcDogMCU7XG59XG4ucGxhbmluZ1BhcmFncmFwaGV7XG4gICAgZm9udC1zaXplOjE3cHg7XG59XG4uY2FyZExvZ297XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLmNvbFJlc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5kYW5nZXJ7XG4gICAgY29sb3I6ICNlYjQ0NWE7XG59XG4ubG9nb1BsYW5uaW5ne1xuICAgIGJhY2tncm91bmQtY29sb3I6IHYuJHNlY29uZGFyeTtcbiAgICBjb2xvcjogdi4kcHJpbWFyeTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBwYWRkaW5nOiAyMCU7XG4gICAgXG59XG4uZGlzYWJsZWR7XG4gICAgb3BhY2l0eTogMC40O1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbiAgICBmb250LXNpemU6IDI1cHg7XG5cbn1cbi5oZWFydHtcbiAgICBmb250LXNpemU6IDI1cHg7XG5cbn1cbi5sZWZ0LC5jb21tZW50LC5mYXZDb21tZW50e1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5sb2dve1xuICAgIGJhY2tncm91bmQtY29sb3I6IHYuJHNlY29uZGFyeTtcbiAgICBjb2xvcjogdi4kcHJpbWFyeTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOTBweDtcbiAgICBwYWRkaW5nOiAzJTtcbn1cblxuaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi1pY29ue1xuICAgIGZvbnQtc2l6ZToyMnB4O1xufVxuaW9uLWNhcmR7XG4gICAgcGFkZGluZzogMiU7XG59XG4uc2hhcmVDb2x1bW57XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuYntcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbn1cbi5wUmVzZXJ2YXRpb257XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaW1nMXtcbiAgICB3aWR0aDogOTklO1xufVxuLmltZzJ7XG4gICAgd2lkdGg6IDQ5JTtcblxufVxuLmltZzN7XG4gICAgd2lkdGg6IDQ5JTtcbiAgICBtYXJnaW4tbGVmdDogMSU7XG59XG4ucG9zdHB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLnBvc3RpbWV7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLml2aXBsYXlsb2dvSW1hZ2V7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBoZWlnaHQ6IDclO1xufVxuLm1ldGVvRGl2e1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn0iXX0= */");

/***/ }),

/***/ "Zl8u":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/news/news.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"news\" >\n    <button class=\"favButton\" [class.active]=\"favorisShow\" (click)=\"showRecents()\">Récent</button>\n    <button class=\"favButton\" [class.active]=\"favorisHide\" (click)=\"showFavoris()\" >Favoris</button>\n  <!--/////////////////////////////////////////////////////////////////// PLANING DU JOUR ////////////////////////////////////////////////////////////////////////// -->\n\n  <div [hidden]=\"favorisHide\">\n    <ion-card class=\"planingDuJour\">\n        <ion-grid class=\"planingGrid\">\n          <ion-row class=\"firstPlaningRow\" >\n            <ion-col size=\"12\" class=\"planingFirstColumn\">\n              <p class=\"planingParagraphe\">Planning du jour </p>\n            </ion-col>\n            <ion-col size=\"2\" class=\"colRes\">\n              <ion-icon class=\"logoPlanning\" name=\"calendar-clear-outline\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"8\" class=\"colRes\" >\n              <p class=\"h6\">Réunion d'équipe <br>\n                <span class=\"pReservation\">Dans 30 min - salle Blue</span>\n              </p>\n            </ion-col >\n            <ion-col size=\"2\"  (click)=\"redirect(mapSalleReunion)\" class=\"colRes\">\n              <ion-icon class=\"logoPlanning\" name=\"map-outline\"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <ion-grid class=\"planingGrid\">\n          <ion-row>\n            <ion-col size=\"2\" class=\"colRes\" >\n                <ion-icon class=\"logoPlanning\" name=\"calendar-clear-outline\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"8\" class=\"colRes\">\n              <p class=\"h6\">Validation des plans<br>\n              <span class=\"pReservation\">A 16h00 - Box B32</span></p>\n            </ion-col>\n            <ion-col size=\"2\" (click)=\"redirect(mapBox)\"  class=\"colRes\">\n              <ion-icon class=\"logoPlanning\"  name=\"map-outline\"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n    </ion-card>\n\n  <!--/////////////////////////////////////////////////////////////////// ARTICLES////////////////////////////////////////////////////////////////////////// -->\n\n      <div *ngFor=\"let article of articles;let index = index\" >\n        <ion-card class=\"\" >\n          <div class=\"cardLogo\"  >\n            <img class=\"iviplaylogoImage\" src=\"assets/{{article?.imageLogo}}\"  *ngIf=\"article.imageLogo\"  [hidden]=\"iviplaylogo\" >\n            <ion-icon class=\"logo\" name=\"{{article.logo}}-outline\" *ngIf=\"!article?.imageLogo\" ></ion-icon>\n            <b>{{article.name}}</b>\n          </div>\n          <div *ngIf=\"arrayImg(article.images)\">\n            <div [hidden]=\"imgItemBoolean\" class=\"images\">\n              <img class=\"img1\" src=\"{{imgItem1}}\" alt=\"\">\n              <img class=\"img2\" src=\"{{imgItem2}}\" alt=\"\" >\n              <img class=\"img3\" src=\"{{imgItem3}}\" alt=\"\">\n            </div>\n            <div [hidden]=\"imgBoolean\">\n              <img src=\"{{img}}\" alt=\"\" >\n            </div>\n          </div>\n          <ion-row>\n            <ion-col size=\"10\">\n              <ion-icon  class=\"heart\" color=\"{{article.like}}\" (click)=\"articleLike(article)\" name=\"heart\"></ion-icon>\n              <ion-icon  class=\"comment\" color=\"{{article.comments}}\"  (click)=\"presentAlertMultipleButtons(article)\" name=\"chatbubble\"></ion-icon>\n              <ion-icon  name=\"share-social\" class=\"disabled\"></ion-icon>\n            </ion-col> \n            <ion-col size=\"2\" class=\"shareColumn\" >\n              <ion-icon color=\"{{article.share}}\" class=\"share\" (click)=\"articleFav(article)\" name=\"bookmark\"  ></ion-icon>\n            </ion-col>\n          </ion-row>\n          <p *ngIf=\"article.id != 2\" [innerHTML]=\"article.desc\">{{article?.desc}}</p>\n          <div *ngIf=\"article.id == 2\" class=\"meteoDiv\">\n            {{this.currentWeather?.city}}\n            <br>\n            {{this.currentWeather?.temp}}\n            <br>\n            <ion-icon name=\"{{this.currentWeather?.logo}}\" class=\"weather-icon\"></ion-icon>\n          </div>\n          <div *ngIf=\"article.id == 6\">\n            <a routerLink=\"/feedback\">Ouvrir le lien</a>\n          </div>\n          <p class=\"postp\"  >{{post}}</p>\n          <p class=\"postime\"  >{{article.time}}</p>\n        </ion-card>\n      </div>\n    </div>\n  </div>\n\n  <!--/////////////////////////////////////////////////////////////////// FAVORIS////////////////////////////////////////////////////////////////////////// -->\n  \n  <div [hidden]=\"favorisShow\">\n    <div class=\"ion\" >\n      <div *ngFor=\"let article of favorisArray;let index = index\">\n        <ion-card class=\"\" >\n          <div class=\"cardLogo\"  >\n            <img class=\"iviplaylogoImage\" src=\"assets/{{article?.imageLogo}}\"  *ngIf=\"article.imageLogo\"  [hidden]=\"iviplaylogo\" >\n            <ion-icon class=\"logo\" name=\"{{article.logo}}-outline\" *ngIf=\"!article?.imageLogo\" ></ion-icon>\n            <b>{{article.name}}</b>\n          </div>\n          <div *ngIf=\"arrayImg(article.images)\">\n            <div [hidden]=\"imgItemBoolean\" class=\"images\">\n              <img class=\"img1\" src=\"{{imgItem1}}\" alt=\"\">\n              <img class=\"img2\" src=\"{{imgItem2}}\" alt=\"\" >\n              <img class=\"img3\" src=\"{{imgItem3}}\" alt=\"\">\n            </div>\n          <div [hidden]=\"imgBoolean\">\n            <img src=\"{{img}}\" alt=\"\" style=\"padding-bottom: 5px;\">\n          </div>\n          </div>\n          <ion-row>\n            <ion-col size=\"10\">\n              <ion-icon class=\"heart\"  color=\"{{article.like}}\" (click)=\"articleLike(article)\" name=\"heart\"></ion-icon>\n              <ion-icon class=\"favComment\" color=\"{{article.comments}}\"  (click)=\"presentAlertMultipleButtons(article)\" name=\"chatbubble\"></ion-icon>\n              <ion-icon class=\"disabled\"name=\"share-social\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"2\" class=\"shareColumn\">\n              <ion-icon color=\"{{article.share}}\" class=\"share\" (click)=\"pullOutArticle(article)\" name=\"bookmark\"></ion-icon>\n            </ion-col>\n          </ion-row>\n          <div  >\n            <div *ngIf=\"article.id != 2\" [innerHTML]=\"article.desc\">{{article?.desc}}</div>\n            <div *ngIf=\"article.id == 2\" class=\"meteoDiv\">\n              {{this.currentWeather?.city}}\n              <br>\n              {{this.currentWeather?.temp}}\n              <br>\n              <ion-icon name=\"{{this.currentWeather?.logo}}\" class=\"weather-icon\"></ion-icon>\n            </div>\n          </div>\n          <div *ngIf=\"article.id == 6\">\n            <a routerLink=\"/feedback/app\">Ouvrir le lien</a>\n          </div>\n          <p class=\"postp\"  >{{post}}</p>\n          <p class=\"postime\"  >{{article.time}}</p>\n        </ion-card>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "l0Le":
/*!*******************************************!*\
  !*** ./src/app/modules/news/news.page.ts ***!
  \*******************************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_news_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./news.page.html */ "Zl8u");
/* harmony import */ var _news_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news.page.scss */ "SgPI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _news_art_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news-art.service */ "BaDi");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_services_general_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/general-functions */ "EWUx");









let Tab2Page = class Tab2Page {
    constructor(alertController, artServices, cdr, navigateController, ngZone) {
        this.alertController = alertController;
        this.artServices = artServices;
        this.cdr = cdr;
        this.navigateController = navigateController;
        this.ngZone = ngZone;
        this.today = new Date();
        this.articles = [];
        this.weather = null;
        this.ArrayArt = true;
        this.imgBoolean = true;
        this.imgItemBoolean = true;
        this.favorisHide = false;
        this.favorisShow = true;
        this.favorisArray = [];
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.currentWeather = {
            city: '',
            temp: 0,
            logo: ''
        };
        this.isCommentColorActive = false;
        this.mapSalleReunion = {
            id: 1,
            mapWizeId: '5d8a1922618902a02a7c7053'
        };
        this.mapBox = {
            id: 2,
            mapWizeId: '5d8a1922618902a02a7c704f'
        };
        this.now = new Date().toString();
    }
    ngOnInit() {
        this.articles = this.artServices.getArticles();
        this.articles[1].desc = this.currentWeather.city + ' ' + this.currentWeather.logo;
        this.parisWeather();
    }
    presentAlertMultipleButtons(article) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Message',
                inputs: [{
                        name: 'message',
                        placeholder: 'Saisir votre commentaire',
                    }],
                buttons: [{
                        text: 'Commenter',
                        cssClass: 'my-alert',
                        handler: (inputs) => {
                            if (inputs.message == "") {
                                return false;
                            }
                            else {
                                article.comments = "danger";
                                this.ngOnInit();
                            }
                        }
                    }],
            });
            yield alert.present();
        });
    }
    redirect(currentMap) {
        const map = {
            state: {
                id: currentMap.id,
                mapWizeId: currentMap.mapWizeId,
            }
        };
        this.navigateController.navigateForward(['/redirect-to-map'], map);
    }
    articleFav(article) {
        if (article.share == '') {
            article.share = src_app_services_general_functions__WEBPACK_IMPORTED_MODULE_7__["GeneralFunctions"].dangerColor2;
            this.favorisArray.push(article);
        }
        else {
            article.share = '';
            this.favorisArray.splice(this.favorisArray.indexOf(article), 1);
        }
    }
    pullOutArticle(article) {
        this.favorisArray.splice(this.favorisArray.indexOf(article), 1);
        article.share = '';
    }
    articleLike(article) {
        if (article.like == '') {
            article.like = src_app_services_general_functions__WEBPACK_IMPORTED_MODULE_7__["GeneralFunctions"].dangerColor2;
        }
        else {
            article.like = '';
        }
    }
    showFavoris() {
        this.favorisShow = false;
        this.favorisHide = true;
    }
    showRecents() {
        this.favorisHide = false;
        this.favorisShow = true;
    }
    arrayImg(img) {
        if (img.length < 5) {
            this.imgBoolean = true;
            this.imgItemBoolean = false;
            for (let i = 0; i < img.length; i++) {
                this.imgItem1 = img[0].images;
                this.imgItem2 = img[1].images;
                this.imgItem3 = img[2].images;
                return this.imgItem1, this.imgItem2, this.imgItem3;
            }
        }
        else {
            this.imgBoolean = false;
            this.imgItemBoolean = true;
            this.img = img.images;
            return this.img;
        }
    }
    parisWeather() {
        this.artServices.parisWeather().subscribe((data) => {
            this.weather = data;
            this.currentWeather.city = this.weather.name;
            this.currentWeather.temp = Math.floor(this.weather.main.temp);
            switch (this.weather.weather[0].description) {
                case 'overcast clouds':
                    this.currentWeather.logo = 'cloud-outline';
                    break;
                case 'clear sky':
                    this.currentWeather.logo = 'sunny-outline';
                    break;
                case 'few clouds':
                    this.currentWeather.logo = 'partly-sunny-outline';
                    break;
                case 'broken clouds':
                    this.currentWeather.logo = 'cloud-outline';
                    break;
                case 'shower rain':
                    this.currentWeather.logo = 'rainy-outline';
                    break;
                case 'rain':
                    this.currentWeather.logo = 'thunderstorm-outline';
                    break;
                case 'thunderstorm':
                    this.currentWeather.logo = 'rainy-outline';
                    break;
                case 'snow':
                    this.currentWeather.logo = 'snow-outline';
                    break;
                case 'mist':
                    this.currentWeather.logo = 'cloud-outline';
                    break;
                default:
                    this.currentWeather.logo = 'partly-sunny-outline';
            }
            this.cdr.detectChanges();
        });
    }
};
Tab2Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _news_art_service__WEBPACK_IMPORTED_MODULE_5__["NewsArtService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }
];
Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab2',
        template: _raw_loader_news_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_news_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab2Page);



/***/ }),

/***/ "nQit":
/*!************************************!*\
  !*** ./src/mocks/article.mocks.ts ***!
  \************************************/
/*! exports provided: ArticleMocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleMocks", function() { return ArticleMocks; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let ArticleMocks = class ArticleMocks {
    constructor() {
        this.picture = [
            { id: 1, base64: '', images: 'assets/images/meteoo.jpeg', },
            { id: 2, base64: '', images: 'assets/images/revue.jpeg', },
            { id: 3, base64: '', images: 'assets/images/gym1.jpeg', },
            { id: 4, base64: '', images: 'assets/images/gym2.jpeg', },
            { id: 5, base64: '', images: 'assets/images/gym3.jpeg', },
            { id: 6, base64: '', images: 'assets/images/plat1.jpeg', },
            { id: 7, base64: '', images: 'assets/images/plat2.jpeg', },
            { id: 8, base64: '', images: 'assets/images/plat3.jpeg', },
            { id: 9, base64: '', images: 'assets/images/entreprise.jpeg', },
            { id: 10, base64: '', images: 'assets/images/cyberS.jpeg', },
            { id: 11, base64: '', images: 'assets/images/gel-h.jpeg', },
            { id: 12, base64: '', images: 'assets/images/collabo.png', },
            { id: 13, base64: '', images: 'assets/images/bienetre.png', },
            { id: 14, base64: '', images: 'assets/images/mobilite.png', },
            { id: 15, base64: '', images: 'assets/images/note.jpg', },
        ];
        this.articles = [
            {
                id: 1,
                name: 'Actualité',
                desc: 'Les Bourses lancent une OPA sur la data ',
                profile: 'Profile',
                post: 'En perte de vitesse, les places boursières font le pari d’investir dans les données. En témoigne ' +
                    'le rachat, par le London Stock Exchange,  du secteur informations et analyses financières de Reuters.',
                images: this.picture[1],
                comments: '',
                time: 'il y a une heure',
                logo: 'globe',
                like: '',
                share: '',
                commentColor: ''
            },
            {
                id: 2,
                name: 'Météo',
                desc: 'city temp icon',
                profile: 'Profile',
                post: [{ icon: 'sunny-outline', temp: '16%', autre: '72%', desc: 'Paris la défense' }],
                images: this.picture[0],
                comments: '',
                time: 'il y a une heure',
                logo: 'cloud',
                like: '',
                share: '',
                commentColor: ''
            },
            {
                id: 3,
                name: 'Guide d\'utilisation',
                desc: 'Guide d\'utilisation <a href="https://iviplay-documents.s3.eu-west-3.amazonaws.com/Manuel+-+iViPlay+-+iViFlo+-+Assistant+personnel+-++20210430.pdf" target="_blank">consultable ici</a>',
                profile: 'Profile',
                post: 'Avec la redistribution des différents espaces et modes de travail, vos usagers ont plus que ' +
                    'jamais besoin d’avoir les bons outils pour travailler en équipe.',
                images: this.picture[14],
                comments: '',
                time: 'il y a une heure',
                logo: 'fast-food',
                imageLogo: 'logo-color.png',
                like: '',
                share: '',
                commentColor: ''
            },
            {
                id: 4,
                name: 'Hygiène / Gestes barrières',
                desc: 'Documentation hygiène / Gestes barrières <a href="https://iviplay-documents.s3.eu-west-3.amazonaws.com/doc-hygiene.pdf" target="_blank">consultable ici</a>',
                profile: 'Profile',
                post: 'N\'hésitez pas à nous contacter par mail : supportit@iviflo.com',
                images: this.picture[10],
                comments: '',
                time: 'il y a une heure',
                logo: 'bandage',
                like: '',
                share: '',
                commentColor: ''
            },
            {
                id: 5,
                name: 'Documentation RGPD',
                desc: 'Documentation RGPD <a href="https://iviplay-documents.s3.eu-west-3.amazonaws.com/guide-rgpd.pdf" target="_blank">consultable ici</a>',
                profile: 'Profile',
                post: 'Merci de votre vigilance et de garder le bon réflexe de nous prévenir ,' +
                    ' comme le collaborateur aui a remonté cette alerte',
                images: this.picture[9],
                comments: '',
                time: 'il y a une heure',
                like: '',
                share: '',
                logo: 'shield-checkmark',
                commentColor: ''
            },
            {
                id: 6,
                name: 'Enquête de satisfaction',
                desc: 'Vous pouvez répondre à l\'enquête de satisfaction.',
                profile: 'Profile',
                post: '',
                images: this.picture[12],
                comments: '',
                time: 'il y a une heure',
                imageLogo: 'logo-color.png',
                like: '',
                share: '',
                logo: 'barbell',
                commentColor: ''
            },
            {
                id: 7,
                name: 'Linkedin',
                desc: 'Vous pouvez consulter la page linkedin <a href="https://www.linkedin.com/company/iviplay/" target="_blank">juste ici</a>.',
                profile: 'Profile',
                post: '',
                images: this.picture[11],
                comments: '',
                time: 'il y a une heure',
                imageLogo: 'logo-color.png',
                like: '',
                share: '',
                logo: 'barbell',
                commentColor: ''
            },
        ];
    }
    getAll() {
        return this.articles;
    }
};
ArticleMocks = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ArticleMocks);



/***/ }),

/***/ "wZUk":
/*!*****************************************************!*\
  !*** ./src/app/modules/news/news-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _news_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news.page */ "l0Le");




const routes = [
    {
        path: '',
        component: _news_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"],
    },
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab2PageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=modules-news-news-module.js.map
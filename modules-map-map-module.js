(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-map-map-module"],{

/***/ "FFZD":
/*!***************************************************!*\
  !*** ./src/app/modules/map/map-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MapRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapRoutingModule", function() { return MapRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map.page */ "Rg0a");




const routes = [
    {
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_3__["Map"],
    }
];
let MapRoutingModule = class MapRoutingModule {
};
MapRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MapRoutingModule);



/***/ }),

/***/ "Rg0a":
/*!*****************************************!*\
  !*** ./src/app/modules/map/map.page.ts ***!
  \*****************************************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_map_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./map.page.html */ "zhOS");
/* harmony import */ var _map_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map.page.scss */ "UzcE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var mapwize_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mapwize-ui */ "CTer");
/* harmony import */ var mapwize_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mapwize_ui__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_services_general_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/general-functions */ "EWUx");









let Map = class Map {
    constructor(elem, navController, router, elRef, generalFunctions) {
        this.elem = elem;
        this.navController = navController;
        this.router = router;
        this.elRef = elRef;
        this.generalFunctions = generalFunctions;
        this.isMapBottomSheetOpened = false;
        this.isUniverseOpened = false;
    }
    ngOnInit() {
        // var visioweb = new VisioWebRemote.VisioWebRemote(
        //   document.getElementById('visioweb'),
        //   {hash:'k8002ae3c8a43d9a4c43960838f1fdcd1f83ea5d9'}
        // );
        // document.addEventListener('DOMContentLoaded', function() {
        //   new VisioWebRemote(document.getElementById('visioweb'), {
        //     hash: 'md3b51e0f7a32e4d44322fcf99f5676e1b1b4ac88'
        //   });
        // });
    }
    mapWazeInstance() {
        const options = {
            apiKey: '6ee4fd2b3531c7b2609c77ca74ee5add',
            centerOnVenueId: '5d8a191fb99124002d154c93',
            preferredLanguage: 'fr',
            container: 'mapwize',
            mainColor: '#ff0000',
        };
        mapwize_ui__WEBPACK_IMPORTED_MODULE_5__["map"](options).then((map) => {
            var universeContainer = map._container.parentElement.children[1].shadowRoot.children[1].childNodes[1].childNodes[0].childNodes[0];
            universeContainer.addEventListener('click', () => {
                this.generalFunctions.changeUniverseIndoorBackground(map);
            });
            const leftContainer = map._container.parentElement.children[1].shadowRoot.children[1].childNodes[1].childNodes[1].children[1].children;
            this.observer = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"]((observer) => {
                setInterval(() => {
                    observer.next(leftContainer.forEach(element => {
                        if (element.classList.length > 1) {
                            element.style.backgroundColor = src_app_services_general_functions__WEBPACK_IMPORTED_MODULE_8__["GeneralFunctions"].primaryColor;
                        }
                        else {
                            element.style.backgroundColor = src_app_services_general_functions__WEBPACK_IMPORTED_MODULE_8__["GeneralFunctions"].ligthColor;
                        }
                    }));
                }, 100);
            });
            this.observer.subscribe((result) => { });
            let searchBar = map._container.parentElement.children[1].shadowRoot.children[1].childNodes[0].childNodes[0].childNodes[1];
            searchBar.style.paddingLeft = '1rem';
            const mapwizeMap = map;
            mapwizeMap.on('mapwize:universechange', function (e) {
                if (e.target.getUniverse().alias === 'default_universe') {
                    e.target.setFloor(2);
                }
                else if (e.target.getUniverse().alias === 'marketingsuite') {
                    e.target.setFloor(3);
                }
            });
            this.elem.nativeElement.querySelectorAll('.mapboxgl-control-container').forEach(el => el.remove());
        });
    }
    // ngOnInit(){
    // this.class = (<HTMLStyleElement>document.querySelector("#mapwize"));
    // this.mapWazeInstance();
    // }
    loadScript(url) {
        console.log('preparing to load...');
        const node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        node.async = true;
        node.charset = 'utf-8';
        console.log(node);
        document.getElementsByTagName('head')[0].appendChild(node);
    }
    ngAfterViewInit() {
        this.loadScript('assets/visioweb/js/mapviewer.js');
        // new VisioWebRemote(document.getElementById('visioweb'), {
        //   hash: 'md3b51e0f7a32e4d44322fcf99f5676e1b1b4ac88'
        // });
        // document.addEventListener('DOMContentLoaded', function() {
        //   new VisioWebRemote(document.getElementById('visioweb'), {
        //     hash: 'md3b51e0f7a32e4d44322fcf99f5676e1b1b4ac88'
        //   });
        // });
    }
    ionViewDidLeave() {
        // var clas = (<HTMLStyleElement>document.querySelector(".map"));
        // clas.removeChild((<HTMLStyleElement>document.querySelector("#mapwize")))
    }
    ionViewWillEnter() {
        // var clas = (<HTMLStyleElement>document.querySelector(".map"));
        // if(clas.childNodes.length === 0){
        //    clas.insertAdjacentHTML('beforeend','<div id="mapwize"></div>');
        //    (<HTMLStyleElement>document.querySelector("#mapwize")).style.height='100%';
        //    (<HTMLStyleElement>document.querySelector("#mapwize")).style.width='100%';
        //    (<HTMLStyleElement>document.querySelector("#mapwize")).style.position='absolute';
        //    setTimeout(() => {
        //      this.mapWazeInstance();
        //    }, 10);
        // }
    }
};
Map.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: src_app_services_general_functions__WEBPACK_IMPORTED_MODULE_8__["GeneralFunctions"] }
];
Map = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-map',
        template: _raw_loader_map_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_map_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Map);



/***/ }),

/***/ "UzcE":
/*!*******************************************!*\
  !*** ./src/app/modules/map/map.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".map {\n  width: 100%;\n}\n\n#mapwize {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFRiIsImZpbGUiOiJtYXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcHtcbiAgd2lkdGg6IDEwMCU7XG59XG4jbWFwd2l6ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cblxuLy8gaWZyYW1le1xuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIHRvcDogMDtcbi8vICAgYm90dG9tOiAwO1xuLy8gICB3aWR0aDogMTAwJTtcbi8vICAgaGVpZ2h0OiAxMDAlO1xuLy8gfVxuLy8gZGl2e1xuLy8gICB3aWR0aDogMTAwJTtcbi8vIH1cbiJdfQ== */");

/***/ }),

/***/ "rhRE":
/*!*******************************************!*\
  !*** ./src/app/modules/map/map.module.ts ***!
  \*******************************************/
/*! exports provided: MapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModule", function() { return MapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./map-routing.module */ "FFZD");
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./map.page */ "Rg0a");









let MapModule = class MapModule {
};
MapModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _map_page__WEBPACK_IMPORTED_MODULE_8__["Map"] }]),
            _map_routing_module__WEBPACK_IMPORTED_MODULE_7__["MapRoutingModule"],
        ],
        declarations: [_map_page__WEBPACK_IMPORTED_MODULE_8__["Map"]]
    })
], MapModule);



/***/ }),

/***/ "zhOS":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/map/map.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!--<iframe src=\"http://localhost:8100/assets/mapviewer/mapviewer.html\"-->\n<iframe src=\"assets/mapviewer/mapviewer.html\"\n        frameborder=\"0\" allowfullscreen\n        height=\"100%\"\n        http-equiv=\"Content-Security-Policy\"\n        content=\"default-src * 'unsafe-inline' 'unsafe-eval'; script-src * 'unsafe-inline' 'unsafe-eval'; connect-src * 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; frame-src *; style-src * 'unsafe-inline'\"\n>\n</iframe>\n<!--default-src * 'unsafe-inline' 'unsafe-eval'; script-src * 'unsafe-inline' 'unsafe-eval'; connect-src * 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; frame-src *; style-src * 'unsafe-inline';-->\n\n<!--<div class=\"map\">-->\n<!--    <div id=\"mapwize\"></div>-->\n<!--</div>-->\n<!--<div>-->\n<!--    <iframe width=\"100\" height=\"960\" id=\"visioweb\"></iframe>-->\n<!--</div>-->\n");

/***/ })

}]);
//# sourceMappingURL=modules-map-map-module.js.map
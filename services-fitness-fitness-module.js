(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-fitness-fitness-module"],{

/***/ "JKmj":
/*!****************************************************!*\
  !*** ./src/app/services/fitness/fitness.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/** Ionic CSS Variables **/\n:root {\n  --color-tabs:#514e4c;\n  /** primary **/\n  --ion-color-primary: $primary;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}\n:root ion-item {\n  font-size: 14px;\n}\n@media (prefers-color-scheme: dark) {\n  /*\n   * Dark Colors\n   * -------------------------------------------\n   */\n  body {\n    --ion-color-primary: #428cff;\n    --ion-color-primary-rgb: 66,140,255;\n    --ion-color-primary-contrast: #ffffff;\n    --ion-color-primary-contrast-rgb: 255,255,255;\n    --ion-color-primary-shade: #3a7be0;\n    --ion-color-primary-tint: #5598ff;\n    --ion-color-secondary: #50c8ff;\n    --ion-color-secondary-rgb: 80,200,255;\n    --ion-color-secondary-contrast: #ffffff;\n    --ion-color-secondary-contrast-rgb: 255,255,255;\n    --ion-color-secondary-shade: #46b0e0;\n    --ion-color-secondary-tint: #62ceff;\n    --ion-color-tertiary: #6a64ff;\n    --ion-color-tertiary-rgb: 106,100,255;\n    --ion-color-tertiary-contrast: #ffffff;\n    --ion-color-tertiary-contrast-rgb: 255,255,255;\n    --ion-color-tertiary-shade: #5d58e0;\n    --ion-color-tertiary-tint: #7974ff;\n    --ion-color-success: #2fdf75;\n    --ion-color-success-rgb: 47,223,117;\n    --ion-color-success-contrast: #000000;\n    --ion-color-success-contrast-rgb: 0,0,0;\n    --ion-color-success-shade: #29c467;\n    --ion-color-success-tint: #44e283;\n    --ion-color-warning: #ffd534;\n    --ion-color-warning-rgb: 255,213,52;\n    --ion-color-warning-contrast: #000000;\n    --ion-color-warning-contrast-rgb: 0,0,0;\n    --ion-color-warning-shade: #e0bb2e;\n    --ion-color-warning-tint: #ffd948;\n    --ion-color-danger: #ff4961;\n    --ion-color-danger-rgb: 255,73,97;\n    --ion-color-danger-contrast: #ffffff;\n    --ion-color-danger-contrast-rgb: 255,255,255;\n    --ion-color-danger-shade: #e04055;\n    --ion-color-danger-tint: #ff5b71;\n    --ion-color-dark: #f4f5f8;\n    --ion-color-dark-rgb: 244,245,248;\n    --ion-color-dark-contrast: #000000;\n    --ion-color-dark-contrast-rgb: 0,0,0;\n    --ion-color-dark-shade: #d7d8da;\n    --ion-color-dark-tint: #f5f6f9;\n    --ion-color-medium: #989aa2;\n    --ion-color-medium-rgb: 152,154,162;\n    --ion-color-medium-contrast: #000000;\n    --ion-color-medium-contrast-rgb: 0,0,0;\n    --ion-color-medium-shade: #86888f;\n    --ion-color-medium-tint: #a2a4ab;\n    --ion-color-light: #222428;\n    --ion-color-light-rgb: 34,36,40;\n    --ion-color-light-contrast: #ffffff;\n    --ion-color-light-contrast-rgb: 255,255,255;\n    --ion-color-light-shade: #1e2023;\n    --ion-color-light-tint: #383a3e;\n  }\n\n  /*\n   * iOS Dark Theme\n   * -------------------------------------------\n   */\n  .ios body {\n    --ion-background-color: #000000;\n    --ion-background-color-rgb: 0,0,0;\n    --ion-text-color: #ffffff;\n    --ion-text-color-rgb: 255,255,255;\n    --ion-color-step-50: #0d0d0d;\n    --ion-color-step-100: #1a1a1a;\n    --ion-color-step-150: #262626;\n    --ion-color-step-200: #333333;\n    --ion-color-step-250: #404040;\n    --ion-color-step-300: #4d4d4d;\n    --ion-color-step-350: #595959;\n    --ion-color-step-400: #666666;\n    --ion-color-step-450: #737373;\n    --ion-color-step-500: #808080;\n    --ion-color-step-550: #8c8c8c;\n    --ion-color-step-600: #999999;\n    --ion-color-step-650: #a6a6a6;\n    --ion-color-step-700: #b3b3b3;\n    --ion-color-step-750: #bfbfbf;\n    --ion-color-step-800: #cccccc;\n    --ion-color-step-850: #d9d9d9;\n    --ion-color-step-900: #e6e6e6;\n    --ion-color-step-950: #f2f2f2;\n    --ion-item-background: #000000;\n    --ion-card-background: #1c1c1d;\n  }\n\n  .ios ion-modal {\n    --ion-background-color: var(--ion-color-step-100);\n    --ion-toolbar-background: var(--ion-color-step-150);\n    --ion-toolbar-border-color: var(--ion-color-step-250);\n  }\n\n  /*\n   * Material Design Dark Theme\n   * -------------------------------------------\n   */\n  .md body {\n    --ion-background-color: #121212;\n    --ion-background-color-rgb: 18,18,18;\n    --ion-text-color: #ffffff;\n    --ion-text-color-rgb: 255,255,255;\n    --ion-border-color: #222222;\n    --ion-color-step-50: #1e1e1e;\n    --ion-color-step-100: #2a2a2a;\n    --ion-color-step-150: #363636;\n    --ion-color-step-200: #414141;\n    --ion-color-step-250: #4d4d4d;\n    --ion-color-step-300: #595959;\n    --ion-color-step-350: #656565;\n    --ion-color-step-400: #717171;\n    --ion-color-step-450: #7d7d7d;\n    --ion-color-step-500: #898989;\n    --ion-color-step-550: #949494;\n    --ion-color-step-600: #a0a0a0;\n    --ion-color-step-650: #acacac;\n    --ion-color-step-700: #b8b8b8;\n    --ion-color-step-750: #c4c4c4;\n    --ion-color-step-800: #d0d0d0;\n    --ion-color-step-850: #dbdbdb;\n    --ion-color-step-900: #e7e7e7;\n    --ion-color-step-950: #f3f3f3;\n    --ion-item-background: #1e1e1e;\n    --ion-toolbar-background: #1f1f1f;\n    --ion-tab-bar-background: #1f1f1f;\n    --ion-card-background: #1e1e1e;\n  }\n}\n/* Importing Bootstrap SCSS file. */\n.principal {\n  background-color: #f3f3f3;\n  height: 100%;\n}\nion-card {\n  border-radius: 25px;\n}\nspan {\n  font-size: 20px;\n  color: #514e4c;\n}\n.paragraphfAbonnement {\n  font-size: 15px;\n  margin: 0;\n  padding: 0;\n  color: #514e4c;\n}\n.icon {\n  color: #514e4c;\n  font-size: 35px;\n}\n.firstColumn {\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n}\n.card {\n  padding: 2%;\n}\n.buttonColumn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 1rem;\n}\nimg {\n  width: 20rem;\n}\n.buttonColumn1 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.calendarBadge {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\nbutton {\n  width: 60%;\n  border-radius: 10px;\n  font-size: 15px;\n  padding: 0.8rem;\n  margin-top: 0.5rem;\n  color: #514e4c;\n}\n.secondColumn {\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n}\n.secondCardTitle {\n  font-size: 15px;\n}\n.secondCardTitleActivités {\n  font-size: 20px;\n}\nion-input {\n  background-color: #f3f3f3;\n  width: 95%;\n  border-radius: 20px;\n  --padding-start: 15px;\n}\n.favButton {\n  width: 47%;\n  margin-left: 2%;\n}\n.payButton {\n  height: 30px;\n  border-radius: 10px;\n  background-color: #514e4c;\n  font-size: 17px;\n  color: white;\n}\n.barbell {\n  font-size: 30px;\n}\n.active {\n  background-color: #595755;\n  color: white;\n}\n.iconBx {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#showFormCours {\n  margin-top: -8px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZpdG5lc3MucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vdGhlbWUvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDSWhCLDBCQUFBO0FBS0E7RUFFRSxvQkFBQTtFQU1FLGNBQUE7RUFDRiw2QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0Esc0NBQUE7RUFDQSxnREFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QURwQkY7QUNyREU7RUFDSSxlQUFBO0FEdUROO0FDb0JBO0VBQ0U7OztJQUFBO0VBS0E7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QUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBeU5KO0FBdk5BO0VBQ0ksZUFBQTtBQTBOSjtBQXhOQTtFQUNJLGVBQUE7QUEyTko7QUF6TkE7RUFDSSx5QkNuRU87RURvRVAsVUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUE0Tko7QUF6TkE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQTRORjtBQXpOQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQy9FSztFRGdGTCxlQUFBO0VBQ0EsWUNsRkc7QUQ4U1A7QUExTkE7RUFDSSxlQUFBO0FBNk5KO0FBM05BO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBOE5KO0FBM05BO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUE4TkY7QUEzTkE7RUFDRSwyQkFBQTtBQThORiIsImZpbGUiOiJmaXRuZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJy4vLi4vLi4vLi4vdGhlbWUvdmFyaWFibGVzLnNjc3MnIGFzIHY7XG5cbi5wcmluY2lwYWx7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHYuJHNlY29uZGFyeTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5pb24tY2FyZHtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuc3BhbntcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHYuJHByaW1hcnk7XG59XG4ucGFyYWdyYXBoZkFib25uZW1lbnR7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbjowO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgY29sb3I6IHYuJHByaW1hcnk7XG5cbn1cbi5pY29ue1xuICAgIGNvbG9yOiB2LiRwcmltYXJ5O1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbn1cbi5maXJzdENvbHVtbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jYXJke1xuICAgIHBhZGRpbmc6IDIlO1xufVxuLmJ1dHRvbkNvbHVtbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbmltZ3tcbiAgICB3aWR0aDoyMHJlbTtcbn1cbi5idXR0b25Db2x1bW4xe1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jYWxlbmRhckJhZGdle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuYnV0dG9ue1xuICAgIHdpZHRoOiA2MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcGFkZGluZzogMC44cmVtO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICBjb2xvcjogdi4kcHJpbWFyeTtcblxufVxuLnNlY29uZENvbHVtbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zZWNvbmRDYXJkVGl0bGV7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLnNlY29uZENhcmRUaXRsZUFjdGl2aXTDqXN7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuaW9uLWlucHV0e1xuICAgIGJhY2tncm91bmQtY29sb3I6di4kc2Vjb25kYXJ5O1xuICAgIHdpZHRoOiA5NSU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG59XG5cbi5mYXZCdXR0b257XG4gIHdpZHRoOiA0NyU7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcblxufVxuLnBheUJ1dHRvbntcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2LiRwcmltYXJ5O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBjb2xvcjogdi4kYmxhbmM7XG59XG4uYmFyYmVsbHtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG4uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk1NzU1O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmljb25CeHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNzaG93Rm9ybUNvdXJze1xuICBtYXJnaW4tdG9wOiAtOHB4ICFpbXBvcnRhbnQ7XG59XG4iLCIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmcuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6XG4vLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9cblxuXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cbiRzZWNvbmRhcnktY29sOnJnYigyNDMsIDI0MywgMjQzKTtcbiRzZWNvbmRhcnk6cmdiKDI0MywgMjQzLCAyNDMpIDtcbiRibGFuYzpyZ2JhKDI1NSwyNTUsMjU1KTtcbiRwcmltYXJ5OiM1MTRlNGM7XG46cm9vdCB7XG5cbiAgLS1jb2xvci10YWJzOiM1MTRlNGM7XG5cblxuICBpb24taXRlbSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgICAvKiogcHJpbWFyeSAqKi9cbiAgLS1pb24tY29sb3ItcHJpbWFyeTogJHByaW1hcnk7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA1NiwgMTI4LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjMzE3MWUwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM0YzhkZmY7XG5cbiAgLyoqIHNlY29uZGFyeSAqKi9cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjM2RjMmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA2MSwgMTk0LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjMzZhYmUwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzUwYzhmZjtcblxuICAvKiogdGVydGlhcnkgKiovXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNTI2MGZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDgyLCA5NiwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzQ4NTRlMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzYzNzBmZjtcblxuICAvKiogc3VjY2VzcyAqKi9cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzJkZDM2ZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ1LCAyMTEsIDExMTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOGJhNjI7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQyZDc3ZDtcblxuICAvKiogd2FybmluZyAqKi9cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmYzQwOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMTk2LCA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYWMwODtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZjYTIyO1xuXG4gIC8qKiBkYW5nZXIgKiovXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ViNDQ1YTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjM1LCA2OCwgOTA7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjY2YzYzRmOy8vaWNpXG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZWQ1NzZiO1xuXG4gIC8qKiBkYXJrICoqL1xuICAtLWlvbi1jb2xvci1kYXJrOiAjMjIyNDI4Oy8vaWNpXG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAzNCwgMzYsIDQwO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xuXG4gIC8qKiBtZWRpdW0gKiovXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzkyOTQ5YztcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTQ2LCAxNDgsIDE1NjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmOy8vaWNpXG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzgwODI4OTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICM5ZDlmYTY7XG5cbiAgLyoqIGxpZ2h0ICoqL1xuICAtLWlvbi1jb2xvci1saWdodDogI2Y0ZjVmODsvL2ljaVxuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xufVxuXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gIC8qXG4gICAqIERhcmsgQ29sb3JzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgYm9keSB7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeTogIzQyOGNmZjtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNjYsMTQwLDI1NTtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjM2E3YmUwO1xuICAgIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzU1OThmZjtcblxuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzUwYzhmZjtcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA4MCwyMDAsMjU1O1xuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICM0NmIwZTA7XG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM2MmNlZmY7XG5cbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzZhNjRmZjtcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDEwNiwxMDAsMjU1O1xuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gICAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM1ZDU4ZTA7XG4gICAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzc5NzRmZjtcblxuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyZmRmNzU7XG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ3LDIyMywxMTc7XG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcbiAgICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI5YzQ2NztcbiAgICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0NGUyODM7XG5cbiAgICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZkNTM0O1xuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsMjEzLDUyO1xuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGJiMmU7XG4gICAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkOTQ4O1xuXG4gICAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZmY0OTYxO1xuICAgIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI1NSw3Myw5NztcbiAgICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZTA0MDU1O1xuICAgIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZmY1YjcxO1xuXG4gICAgLS1pb24tY29sb3ItZGFyazogI2Y0ZjVmODtcbiAgICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMjQ0LDI0NSwyNDg7XG4gICAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogIzAwMDAwMDtcbiAgICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gICAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogI2Q3ZDhkYTtcbiAgICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICNmNWY2Zjk7XG5cbiAgICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XG4gICAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTUyLDE1NCwxNjI7XG4gICAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAgIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAgIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzg2ODg4ZjtcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcblxuICAgIC0taW9uLWNvbG9yLWxpZ2h0OiAjMjIyNDI4O1xuICAgIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMzQsMzYsNDA7XG4gICAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogIzFlMjAyMztcbiAgICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjMzgzYTNlO1xuICB9XG5cbiAgLypcbiAgICogaU9TIERhcmsgVGhlbWVcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAuaW9zIGJvZHkge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsMCwwO1xuXG4gICAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LDI1NSwyNTU7XG5cbiAgICAtLWlvbi1jb2xvci1zdGVwLTUwOiAjMGQwZDBkO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMTAwOiAjMWExYTFhO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMjYyNjI2O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjMzMzMzMzO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMjUwOiAjNDA0MDQwO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNGQ0ZDRkO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNTk1OTU5O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNDAwOiAjNjY2NjY2O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjNzM3MzczO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODA4MDgwO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNTUwOiAjOGM4YzhjO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjOTk5OTk5O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYTZhNmE2O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNzAwOiAjYjNiM2IzO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYmZiZmJmO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtODAwOiAjY2NjY2NjO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZDlkOWQ5O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTZlNmU2O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjJmMmYyO1xuXG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuXG4gICAgLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiAjMWMxYzFkO1xuICB9XG5cbiAgLmlvcyBpb24tbW9kYWwge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCk7XG4gICAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTApO1xuICAgIC0taW9uLXRvb2xiYXItYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yNTApO1xuICB9XG5cblxuICAvKlxuICAgKiBNYXRlcmlhbCBEZXNpZ24gRGFyayBUaGVtZVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC5tZCBib2R5IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAxOCwxOCwxODtcblxuICAgIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gICAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwyNTUsMjU1O1xuXG4gICAgLS1pb24tYm9yZGVyLWNvbG9yOiAjMjIyMjIyO1xuXG4gICAgLS1pb24tY29sb3Itc3RlcC01MDogIzFlMWUxZTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzJhMmEyYTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTE1MDogIzM2MzYzNjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzQxNDE0MTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzRkNGQ0ZDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTMwMDogIzU5NTk1OTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzY1NjU2NTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzcxNzE3MTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTQ1MDogIzdkN2Q3ZDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzg5ODk4OTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzk0OTQ5NDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTYwMDogI2EwYTBhMDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2FjYWNhYztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2I4YjhiODtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTc1MDogI2M0YzRjNDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2QwZDBkMDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2RiZGJkYjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTkwMDogI2U3ZTdlNztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YzZjNmMztcblxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzFlMWUxZTtcblxuICAgIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogIzFmMWYxZjtcblxuICAgIC0taW9uLXRhYi1iYXItYmFja2dyb3VuZDogIzFmMWYxZjtcblxuICAgIC0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFlMWUxZTtcbiAgfVxufVxuXG4vKiBJbXBvcnRpbmcgQm9vdHN0cmFwIFNDU1MgZmlsZS4gKi9cbi8vQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL2Jvb3RzdHJhcCc7XG4iXX0= */");

/***/ }),

/***/ "arcW":
/*!**************************************************!*\
  !*** ./src/app/services/fitness/fitness.page.ts ***!
  \**************************************************/
/*! exports provided: FitnessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FitnessPage", function() { return FitnessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_fitness_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./fitness.page.html */ "zpNT");
/* harmony import */ var _fitness_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fitness.page.scss */ "JKmj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _mocks_cours_mocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../mocks/cours.mocks */ "MUbv");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let FitnessPage = class FitnessPage {
    constructor(mocks, alertController) {
        this.mocks = mocks;
        this.alertController = alertController;
        this.showPricipalCard = true;
        this.showFormCours = false;
        this.showFormActivity = false;
        this.showFormCotisation = false;
        this.cours = [];
        this.coursFavoris = [];
        this.currentNameWeek = [];
        this.favorisHide = false;
        this.favorisShow = true;
        this.cotisations = [
            {
                id: 1,
                name: 'Abonnement Semestriel',
                description: 'Abonnement Semestriel.',
                price: 90,
            },
            {
                id: 2,
                name: 'Abonnement Annuel',
                description: 'Abonnement Annuel.',
                price: 150,
            },
        ];
    }
    showFormPage(type) {
        if (type === 1) {
            this.showFormCours = true;
            this.showPricipalCard = false;
        }
        else if (type === 2) {
            this.showFormActivity = true;
            this.showPricipalCard = false;
        }
        else if (type === 3) {
            this.showFormCotisation = true;
            this.showPricipalCard = false;
        }
    }
    backToPricipalPage() {
        this.showFormCours = false;
        this.showFormActivity = false;
        this.showFormCotisation = false;
        this.showPricipalCard = true;
    }
    ngOnInit() {
        this.cours = this.mocks.getAll();
        const curr = new Date();
        const week = [];
        for (let i = 1; i <= 7; i++) {
            const first = curr.getDate() - curr.getDay() + i;
            const date = new Date(curr.setDate(first)).toISOString().slice(0, 10);
            const day = date.split('-');
            const nameDay = new Date(curr.setDate(first)).getDay().toString();
            week.push({ day: day[2], name: this.dayOfWeekAsString(nameDay) });
        }
        this.today = new Date().getDate().toString();
        this.currentNameWeek = week;
    }
    dayOfWeekAsString(dayIndex) {
        return ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"][dayIndex] || '';
    }
    showFavoris() {
        this.favorisShow = false;
        this.favorisHide = true;
    }
    showRecents() {
        this.favorisHide = false;
        this.favorisShow = true;
    }
    changeToDay(day) {
        if (day % 2 == 0) {
            this.cours = this.mocks.getAllOther();
        }
        else {
            this.cours = this.mocks.getAll();
        }
        this.today = day;
    }
    payConfirmation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-popup',
                message: 'Paiement validé',
                buttons: [
                    {
                        text: 'OK',
                    },
                ],
            });
            yield alert.present();
            document.querySelector(".alert-message").style.fontSize = "17px";
            document.querySelector(".alert-message").style.fontWeight = "normal";
        });
    }
    reserveCours(cour) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-popup',
                subHeader: '',
                message: 'Voulez-vous réserver ce cours ? ',
                buttons: [
                    {
                        text: 'Non',
                    },
                    {
                        text: 'Oui',
                        handler: () => {
                            this.coursFavoris.push(cour);
                            console.log(this.coursFavoris);
                        }
                    }
                ],
            });
            yield alert.present();
        });
    }
    cancelCours(cour, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-popup',
                subHeader: '',
                message: 'Voulez-vous annuler ce cours ? ',
                buttons: [
                    {
                        text: 'Non',
                    },
                    {
                        text: 'Oui',
                        handler: () => {
                            this.coursFavoris.splice(index, 1);
                            console.log(this.coursFavoris);
                        }
                    }
                ],
            });
            yield alert.present();
        });
    }
};
FitnessPage.ctorParameters = () => [
    { type: _mocks_cours_mocks__WEBPACK_IMPORTED_MODULE_4__["CoursMocks"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
FitnessPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-fitness',
        template: _raw_loader_fitness_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_fitness_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FitnessPage);



/***/ }),

/***/ "cXTw":
/*!****************************************************!*\
  !*** ./src/app/services/fitness/fitness.module.ts ***!
  \****************************************************/
/*! exports provided: FitnessPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FitnessPageModule", function() { return FitnessPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _fitness_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fitness-routing.module */ "nEjZ");
/* harmony import */ var _fitness_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fitness.page */ "arcW");







let FitnessPageModule = class FitnessPageModule {
};
FitnessPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _fitness_routing_module__WEBPACK_IMPORTED_MODULE_5__["FitnessPageRoutingModule"]
        ],
        declarations: [_fitness_page__WEBPACK_IMPORTED_MODULE_6__["FitnessPage"]]
    })
], FitnessPageModule);



/***/ }),

/***/ "nEjZ":
/*!************************************************************!*\
  !*** ./src/app/services/fitness/fitness-routing.module.ts ***!
  \************************************************************/
/*! exports provided: FitnessPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FitnessPageRoutingModule", function() { return FitnessPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fitness_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fitness.page */ "arcW");




const routes = [
    {
        path: '',
        component: _fitness_page__WEBPACK_IMPORTED_MODULE_3__["FitnessPage"]
    }
];
let FitnessPageRoutingModule = class FitnessPageRoutingModule {
};
FitnessPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FitnessPageRoutingModule);



/***/ }),

/***/ "zpNT":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/fitness/fitness.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content >\n  <div class=\"principal\">\n    <ion-grid *ngIf=\"showPricipalCard\">\n      <ion-row>\n        <ion-col size=\"1\"routerLink=\"/tabs/tab1\">\n            <ion-icon class=\"icon\" name=\"chevron-back-outline\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"10\" class=\"firstColumn\" *ngIf=\"showPricipalCard\" >\n          <span>Fitness</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid *ngIf=\"showFormCours\" >\n      <ion-row>\n        <ion-col size=\"1\" (click)=\"backToPricipalPage()\">\n            <ion-icon class=\"icon\" name=\"chevron-back-outline\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"10\" class=\"secondColumn\" >\n          <span>Fitness</span> <br>\n          <span class=\"secondCardTitle\" >Cours</span><br>\n      </ion-col >\n\n      </ion-row>\n    </ion-grid>\n    <ion-grid *ngIf=\"showFormActivity\" >\n      <ion-row>\n        <ion-col size=\"1\" (click)=\"backToPricipalPage()\">\n            <ion-icon class=\"icon\" name=\"chevron-back-outline\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"10\" class=\"secondColumn\" >\n          <span class=\"secondCardTitleActivités\" >Activités</span><br>\n      </ion-col >\n      </ion-row>\n    </ion-grid>\n    <ion-grid *ngIf=\"showFormCotisation\" >\n      <ion-row>\n        <ion-col size=\"1\" (click)=\"backToPricipalPage()\">\n            <ion-icon class=\"icon\" name=\"chevron-back-outline\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"10\" class=\"secondColumn\" >\n          <span>Abonnements</span>\n        </ion-col >\n      </ion-row>\n    </ion-grid>\n\n\n    <ion-card>\n      <!-- <ion-grid *ngIf=\"showPricipalCard\">\n        <ion-row class=\"card\">\n          <ion-col class=\"buttonColumn1\" size=\"12\">\n              <img src=\"assets/images/fitness.jpg\" alt=\"\">\n          </ion-col>\n          <ion-col size=\"12\" class=\"buttonColumn\">\n            <button (click)=\"showFormPage(1)\">Cours</button>\n          </ion-col>\n          <ion-col size=\"12\" class=\"buttonColumn1\">\n            <button (click)=\"showFormPage(2)\">Activités</button>\n          </ion-col>\n          <ion-col size=\"12\" class=\"buttonColumn1\">\n            <button (click)=\"showFormPage(3)\">Abonnements</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid> -->\n      <ion-list *ngIf=\"showPricipalCard\" lines=\"none\" >\n        <div class=\"\">\n          <ion-item >\n            <ion-grid class=\"productGrid\">\n              <ion-row  (click)=\"showFormPage(1)\">\n                <!-- <ion-col class=\"buttonColumn1\" size=\"12\">\n                  <img src=\"assets/images/fitness.jpg\" alt=\"\">\n              </ion-col> -->\n                <ion-col class=\"iconBx\" size=\"2\" >\n                  <ion-icon  class=\"icon\" name=\"book-outline\"></ion-icon>\n                </ion-col>\n                <ion-col class=\"ion-padding\">\n                 <span class=\"list-lab\">Cours </span>\n                </ion-col>\n              </ion-row>\n              <div class=\"divider\"></div>\n              <ion-row  (click)=\"showFormPage(2)\">\n                <ion-col class=\"iconBx\" size=\"2\" >\n                  <ion-icon  class=\"icon\" name=\"barbell-outline\"></ion-icon>\n                </ion-col>\n                <ion-col class=\"ion-padding\">\n                 <span class=\"list-lab\">Activités</span>\n                </ion-col>\n              </ion-row >\n                <div class=\"divider\"></div>\n              <ion-row (click)=\"showFormPage(3)\">\n                <ion-col class=\"iconBx\" size=\"2\" >\n                  <ion-icon  class=\"icon\" name=\"wallet-outline\"></ion-icon>\n                </ion-col>\n                <ion-col class=\"ion-padding\">\n                 <span class=\"list-lab\">Abonnements</span>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            <!-- <ion-icon  class=\"icon\" name=\"{{product.icon}}-outline\"></ion-icon>\n            <ion-label>{{product.name}}</ion-label> -->\n          </ion-item>\n          <!-- <div class=\"divider\"></div> -->\n        </div>\n      </ion-list>\n\n    </ion-card>\n\n\n    <ion-card *ngIf=\"showFormCours\" id=\"showFormCours\">\n      <button class=\"favButton\" [class.active]=\"favorisShow\"(click)=\"showRecents()\">Cours disponible</button>\n      <button class=\"favButton\" [class.active]=\"favorisHide\"(click)=\"showFavoris()\" >Mes réservations</button>\n      <div [hidden]=\"favorisHide\">\n        <ion-list lines=\"none\">\n          <ion-item >\n            <div class=\"\"></div>\n            <ion-label *ngFor=\"let day of currentNameWeek;\">\n              <div (click)=\"changeToDay(day.day)\" class=\"calendarBadge\">\n                {{day.name.slice(0, 3)}}\n                <br>\n                <ion-badge *ngIf=\"day.day == this.today\" color=\"medium\" slot=\"end\">{{day.day}}</ion-badge>\n                <ion-badge *ngIf=\"day.day != this.today\" color=\"light\" slot=\"end\">{{day.day}}</ion-badge>\n              </div>\n            </ion-label>\n          </ion-item>\n\n          <div *ngFor=\"let cour of cours\">\n            <ion-item (click)=\"reserveCours(cour)\">\n              <ion-avatar slot=\"start\">\n                <ion-icon class=\"barbell\" name=\"barbell-outline\"></ion-icon>\n              </ion-avatar>\n              <ion-label>\n                <p class=\"list-lab-text\"> <strong>{{cour.name}}</strong> </p>\n                <p class=\"list-lab-text\">{{cour.description}}</p>\n                <p class=\"list-lab-text\">{{cour.hours}}</p>\n              </ion-label>\n            </ion-item>\n            <div class=\"divider\"></div>\n\n          </div>\n        </ion-list>\n      </div>\n\n      <div [hidden]=\"favorisShow\">\n        <ion-list lines=\"none\" >\n          <div class=\"divider\"></div>\n          <ion-item >\n            <ion-label *ngFor=\"let day of currentNameWeek;\">\n              <div (click)=\"changeToDay(day.day)\" class=\"calendarBadge\">\n                {{day.name.slice(0, 3)}}\n                <br>\n                <ion-badge *ngIf=\"day.day == this.today\" color=\"medium\" slot=\"end\">{{day.day}}</ion-badge>\n                <ion-badge *ngIf=\"day.day != this.today\" color=\"light\" slot=\"end\">{{day.day}}</ion-badge>\n              </div>\n            </ion-label>\n          </ion-item>\n          <div  *ngFor=\"let cour of coursFavoris; let index = index;\">\n            <ion-item  lines=\"none\"(click)=\"cancelCours(cour, index)\">\n              <ion-avatar slot=\"start\">\n                <ion-icon class=\"barbell\" name=\"barbell-outline\"></ion-icon>\n              </ion-avatar>\n              <ion-label>\n                <p class=\"list-lab-text\"> <strong>{{cour.name}}</strong> </p>\n                <p class=\"list-lab-text\">{{cour.description}}</p>\n                <p class=\"list-lab-text\">{{cour.hours}}</p>\n              </ion-label>\n            </ion-item>\n            <div class=\"divider\"></div>\n          </div>\n          <div *ngIf=\"coursFavoris.length === 0\">\n            <br>\n            <br>\n            <ion-label>\n              <h2 style=\"margin-left: 20px;\">Aucun cours réserver</h2>\n            </ion-label>\n            <br>\n            <br>\n          </div>\n        </ion-list>\n      </div>\n    </ion-card>\n\n\n    <ion-card *ngIf=\"showFormActivity\">\n      <ion-list lines=\"none\">\n        <ion-item >\n          <ion-label *ngFor=\"let day of currentNameWeek;\">\n            <div (click)=\"changeToDay(day.day)\" class=\"calendarBadge\">\n              {{day.name.slice(0, 3)}}\n              <br>\n              <ion-badge *ngIf=\"day.day == this.today\" color=\"medium\" slot=\"end\">{{day.day}}</ion-badge>\n              <ion-badge *ngIf=\"day.day != this.today\" color=\"light\" slot=\"end\">{{day.day}}</ion-badge>\n            </div>\n          </ion-label>\n        </ion-item>\n        <div  *ngFor=\"let cour of cours\">\n          <ion-item  (click)=\"reserveCours(cour)\">\n            <ion-avatar slot=\"start\">\n              <ion-icon class=\"barbell\" name=\"barbell-outline\"></ion-icon>\n            </ion-avatar>\n            <ion-label>\n              <p class=\"list-lab-text\"> <strong>{{cour.name}}</strong> </p>\n                <p class=\"list-lab-text\">{{cour.description}}</p>\n                <p class=\"list-lab-text\">{{cour.hours}}</p>\n            </ion-label>\n          </ion-item>\n          <div class=\"divider\"></div>\n        </div>\n      </ion-list>\n    </ion-card>\n\n\n    <ion-card *ngIf=\"showFormCotisation\">\n      <!-- <ion-col size=\"12\" class=\"buttonColumn1\">\n        <img src=\"assets/images/altocard.jpeg\">\n      </ion-col > -->\n      <ion-list>\n        <ion-item lines=\"none\" *ngFor=\"let cotisation of cotisations\">\n            <ion-grid>\n              <ion-row>\n                <ion-col size=\"2\" class=\"buttonColumn1\">\n                  <ion-icon class=\"barbell\" name=\"card-outline\"></ion-icon>\n                </ion-col>\n                <ion-col size=\"7\" >\n                  <p class=\"paragraphfAbonnement\">{{cotisation.name}}</p>\n                  <p class=\"paragraphfAbonnement\">{{cotisation.price}}€</p>\n                </ion-col>\n                <ion-col size=\"3\" class=\"buttonColumn1\" >\n                  <ion-button (click)=\"payConfirmation()\" class=\"payButton\" >Payer</ion-button>\n                </ion-col>\n              </ion-row>\n              <div class=\"divider\"></div>\n            </ion-grid>\n        </ion-item>\n      </ion-list>\n    </ion-card>\n\n\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=services-fitness-fitness-module.js.map
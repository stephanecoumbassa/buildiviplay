(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-detections-fall-fall-detection-fall-detection-module"],{

/***/ "09RP":
/*!**********************************************************************************!*\
  !*** ./src/app/services/detections-fall/fall-detection/fall-detection.page.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/** Ionic CSS Variables **/\n:root {\n  --color-tabs:#514e4c;\n  /** primary **/\n  --ion-color-primary: $primary;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}\n:root ion-item {\n  font-size: 14px;\n}\n@media (prefers-color-scheme: dark) {\n  /*\n   * Dark Colors\n   * -------------------------------------------\n   */\n  body {\n    --ion-color-primary: #428cff;\n    --ion-color-primary-rgb: 66,140,255;\n    --ion-color-primary-contrast: #ffffff;\n    --ion-color-primary-contrast-rgb: 255,255,255;\n    --ion-color-primary-shade: #3a7be0;\n    --ion-color-primary-tint: #5598ff;\n    --ion-color-secondary: #50c8ff;\n    --ion-color-secondary-rgb: 80,200,255;\n    --ion-color-secondary-contrast: #ffffff;\n    --ion-color-secondary-contrast-rgb: 255,255,255;\n    --ion-color-secondary-shade: #46b0e0;\n    --ion-color-secondary-tint: #62ceff;\n    --ion-color-tertiary: #6a64ff;\n    --ion-color-tertiary-rgb: 106,100,255;\n    --ion-color-tertiary-contrast: #ffffff;\n    --ion-color-tertiary-contrast-rgb: 255,255,255;\n    --ion-color-tertiary-shade: #5d58e0;\n    --ion-color-tertiary-tint: #7974ff;\n    --ion-color-success: #2fdf75;\n    --ion-color-success-rgb: 47,223,117;\n    --ion-color-success-contrast: #000000;\n    --ion-color-success-contrast-rgb: 0,0,0;\n    --ion-color-success-shade: #29c467;\n    --ion-color-success-tint: #44e283;\n    --ion-color-warning: #ffd534;\n    --ion-color-warning-rgb: 255,213,52;\n    --ion-color-warning-contrast: #000000;\n    --ion-color-warning-contrast-rgb: 0,0,0;\n    --ion-color-warning-shade: #e0bb2e;\n    --ion-color-warning-tint: #ffd948;\n    --ion-color-danger: #ff4961;\n    --ion-color-danger-rgb: 255,73,97;\n    --ion-color-danger-contrast: #ffffff;\n    --ion-color-danger-contrast-rgb: 255,255,255;\n    --ion-color-danger-shade: #e04055;\n    --ion-color-danger-tint: #ff5b71;\n    --ion-color-dark: #f4f5f8;\n    --ion-color-dark-rgb: 244,245,248;\n    --ion-color-dark-contrast: #000000;\n    --ion-color-dark-contrast-rgb: 0,0,0;\n    --ion-color-dark-shade: #d7d8da;\n    --ion-color-dark-tint: #f5f6f9;\n    --ion-color-medium: #989aa2;\n    --ion-color-medium-rgb: 152,154,162;\n    --ion-color-medium-contrast: #000000;\n    --ion-color-medium-contrast-rgb: 0,0,0;\n    --ion-color-medium-shade: #86888f;\n    --ion-color-medium-tint: #a2a4ab;\n    --ion-color-light: #222428;\n    --ion-color-light-rgb: 34,36,40;\n    --ion-color-light-contrast: #ffffff;\n    --ion-color-light-contrast-rgb: 255,255,255;\n    --ion-color-light-shade: #1e2023;\n    --ion-color-light-tint: #383a3e;\n  }\n\n  /*\n   * iOS Dark Theme\n   * -------------------------------------------\n   */\n  .ios body {\n    --ion-background-color: #000000;\n    --ion-background-color-rgb: 0,0,0;\n    --ion-text-color: #ffffff;\n    --ion-text-color-rgb: 255,255,255;\n    --ion-color-step-50: #0d0d0d;\n    --ion-color-step-100: #1a1a1a;\n    --ion-color-step-150: #262626;\n    --ion-color-step-200: #333333;\n    --ion-color-step-250: #404040;\n    --ion-color-step-300: #4d4d4d;\n    --ion-color-step-350: #595959;\n    --ion-color-step-400: #666666;\n    --ion-color-step-450: #737373;\n    --ion-color-step-500: #808080;\n    --ion-color-step-550: #8c8c8c;\n    --ion-color-step-600: #999999;\n    --ion-color-step-650: #a6a6a6;\n    --ion-color-step-700: #b3b3b3;\n    --ion-color-step-750: #bfbfbf;\n    --ion-color-step-800: #cccccc;\n    --ion-color-step-850: #d9d9d9;\n    --ion-color-step-900: #e6e6e6;\n    --ion-color-step-950: #f2f2f2;\n    --ion-item-background: #000000;\n    --ion-card-background: #1c1c1d;\n  }\n\n  .ios ion-modal {\n    --ion-background-color: var(--ion-color-step-100);\n    --ion-toolbar-background: var(--ion-color-step-150);\n    --ion-toolbar-border-color: var(--ion-color-step-250);\n  }\n\n  /*\n   * Material Design Dark Theme\n   * -------------------------------------------\n   */\n  .md body {\n    --ion-background-color: #121212;\n    --ion-background-color-rgb: 18,18,18;\n    --ion-text-color: #ffffff;\n    --ion-text-color-rgb: 255,255,255;\n    --ion-border-color: #222222;\n    --ion-color-step-50: #1e1e1e;\n    --ion-color-step-100: #2a2a2a;\n    --ion-color-step-150: #363636;\n    --ion-color-step-200: #414141;\n    --ion-color-step-250: #4d4d4d;\n    --ion-color-step-300: #595959;\n    --ion-color-step-350: #656565;\n    --ion-color-step-400: #717171;\n    --ion-color-step-450: #7d7d7d;\n    --ion-color-step-500: #898989;\n    --ion-color-step-550: #949494;\n    --ion-color-step-600: #a0a0a0;\n    --ion-color-step-650: #acacac;\n    --ion-color-step-700: #b8b8b8;\n    --ion-color-step-750: #c4c4c4;\n    --ion-color-step-800: #d0d0d0;\n    --ion-color-step-850: #dbdbdb;\n    --ion-color-step-900: #e7e7e7;\n    --ion-color-step-950: #f3f3f3;\n    --ion-item-background: #1e1e1e;\n    --ion-toolbar-background: #1f1f1f;\n    --ion-tab-bar-background: #1f1f1f;\n    --ion-card-background: #1e1e1e;\n  }\n}\n/* Importing Bootstrap SCSS file. */\n.principal {\n  background-color: #f3f3f3;\n  height: 100%;\n}\nion-card {\n  border-radius: 25px;\n  padding: 0.5rem;\n  max-height: 16.5rem;\n}\n.icon {\n  color: #514e4c;\n  font-size: 35px;\n}\n.disabled {\n  opacity: 0.5;\n}\n.icon2 {\n  color: #514e4c;\n  font-size: 35px;\n}\n.colTitreLeft {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n}\n.colTitre {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.columnIcon {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.columnToggle {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.Danger {\n  color: #514e4c;\n  font-size: 35px;\n}\nspan {\n  font-size: 20px;\n  color: #514e4c;\n}\n.span {\n  font-size: 14px;\n  color: var(--ion-color-dark);\n}\nion-toggle {\n  --background: var( --ion-color-light);\n  --background-checked: var( --color-tabs);\n  --handle-background: var(--ion-color-medium-contrast);\n  --handle-background-checked:var(--ion-color-medium-contrast);\n}\nion-range {\n  --knob-background: var( --color-tabs);\n  --bar-background: var( --ion-color-light);\n  --bar-background-active: var( --color-tabs);\n}\n.simulationButton {\n  display: flex;\n  align-items: center;\n  height: 100px;\n  flex-direction: column;\n}\nion-button {\n  width: 50%;\n  height: 50%;\n  border-radius: 25px;\n  font-size: 16px;\n  background-color: #514e4c;\n  color: white;\n}\n.fallDetectionDate {\n  font-size: 20px;\n  color: #514e4c;\n  font-size: 14px;\n}\n.fallDetectionSpan {\n  font-size: 20px;\n  color: #514e4c;\n  font-size: 17px;\n}\n.chuteColumn {\n  display: flex;\n  flex-direction: column;\n}\n.chuteContent {\n  padding: 0;\n  max-height: 35%;\n  overflow-y: scroll;\n}\n.iconHistorique {\n  color: #514e4c;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vZmFsbC1kZXRlY3Rpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLDBCQUFBO0FBS0E7RUFFRSxvQkFBQTtFQU1FLGNBQUE7RUFDRiw2QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0Esc0NBQUE7RUFDQSxnREFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QUNyQkY7QURwREU7RUFDSSxlQUFBO0FDc0ROO0FEcUJBO0VBQ0U7OztJQUFBO0VBS0E7SUFDRSw0QkFBQTtJQUNBLG1DQUFBO0lBQ0EscUNBQUE7SUFDQSw2Q0FBQTtJQUNBLGtDQUFBO0lBQ0EsaUNBQUE7SUFFQSw4QkFBQTtJQUNBLHFDQUFBO0lBQ0EsdUNBQUE7SUFDQSwrQ0FBQTtJQUNBLG9DQUFBO0lBQ0EsbUNBQUE7SUFFQSw2QkFBQTtJQUNBLHFDQUFBO0lBQ0Esc0NBQUE7SUFDQSw4Q0FBQTtJQUNBLG1DQUFBO0lBQ0Esa0NBQUE7SUFFQSw0QkFBQTtJQUNBLG1DQUFBO0lBQ0EscUNBQUE7SUFDQSx1Q0FBQTtJQUNBLGtDQUFBO0lBQ0EsaUNBQUE7SUFFQSw0QkFBQTtJQUNBLG1DQUFBO0lBQ0EscUNBQUE7SUFDQSx1Q0FBQTtJQUNBLGtDQUFBO0lBQ0EsaUNBQUE7SUFFQSwyQkFBQTtJQUNBLGlDQUFBO0lBQ0Esb0NBQUE7SUFDQSw0Q0FBQTtJQUNBLGlDQUFBO0lBQ0EsZ0NBQUE7SUFFQSx5QkFBQTtJQUNBLGlDQUFBO0lBQ0Esa0NBQUE7SUFDQSxvQ0FBQTtJQUNBLCtCQUFBO0lBQ0EsOEJBQUE7SUFFQSwyQkFBQTtJQUNBLG1DQUFBO0lBQ0Esb0NBQUE7SUFDQSxzQ0FBQTtJQUNBLGlDQUFBO0lBQ0EsZ0NBQUE7SUFFQSwwQkFBQTtJQUNBLCtCQUFBO0lBQ0EsbUNBQUE7SUFDQSwyQ0FBQTtJQUNBLGdDQUFBO0lBQ0EsK0JBQUE7RUMzQkY7O0VEOEJBOzs7SUFBQTtFQUtBO0lBQ0UsK0JBQUE7SUFDQSxpQ0FBQTtJQUVBLHlCQUFBO0lBQ0EsaUNBQUE7SUFFQSw0QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUVBLDhCQUFBO0lBRUEsOEJBQUE7RUNoQ0Y7O0VEbUNBO0lBQ0UsaURBQUE7SUFDQSxtREFBQTtJQUNBLHFEQUFBO0VDaENGOztFRG9DQTs7O0lBQUE7RUFLQTtJQUNFLCtCQUFBO0lBQ0Esb0NBQUE7SUFFQSx5QkFBQTtJQUNBLGlDQUFBO0lBRUEsMkJBQUE7SUFFQSw0QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUNBLDZCQUFBO0lBQ0EsNkJBQUE7SUFDQSw2QkFBQTtJQUVBLDhCQUFBO0lBRUEsaUNBQUE7SUFFQSxpQ0FBQTtJQUVBLDhCQUFBO0VDekNGO0FBQ0Y7QUQ0Q0EsbUNBQUE7QUN2UEE7RUFDSSx5QkRHTztFQ0ZQLFlBQUE7QUE4TUo7QUE1TUE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQStNSjtBQTdNQTtFQUNJLGNESks7RUNLTCxlQUFBO0FBZ05KO0FBOU1BO0VBQ0ksWUFBQTtBQWlOSjtBQS9NQTtFQUNJLGNEWEs7RUNZTCxlQUFBO0FBa05KO0FBaE5BO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFtTko7QUFqTkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQW9OSjtBQWxOQTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBcU5KO0FBbk5BO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFzTko7QUFuTkE7RUFDSSxjRHBDSztFQ3FDTCxlQUFBO0FBc05KO0FBbk5BO0VBQ0ksZUFBQTtFQUNBLGNEMUNLO0FDZ1FUO0FBbk5BO0VBQ0ksZUFBQTtFQUNBLDRCQUFBO0FBc05KO0FBcE5BO0VBQ0kscUNBQUE7RUFDQSx3Q0FBQTtFQUNBLHFEQUFBO0VBQ0EsNERBQUE7QUF1Tko7QUFyTkE7RUFDSSxxQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsMkNBQUE7QUF3Tko7QUFyTkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUF3Tko7QUF0TkE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCRHhFSztFQ3lFTCxZRDFFRztBQ21TUDtBQXZOQTtFQUNJLGVBQUE7RUFDQSxjRDdFSztFQzhFTCxlQUFBO0FBME5KO0FBeE5BO0VBQ0ksZUFBQTtFQUNBLGNEbEZLO0VDbUZMLGVBQUE7QUEyTko7QUF6TkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUE0Tko7QUExTkE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBNk5KO0FBM05BO0VBQ0ksY0QvRks7RUNnR0wsZUFBQTtBQThOSiIsImZpbGUiOiJmYWxsLWRldGVjdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJb25pYyBWYXJpYWJsZXMgYW5kIFRoZW1pbmcuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWU6XG4vLyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9cblxuXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cbiRzZWNvbmRhcnktY29sOnJnYigyNDMsIDI0MywgMjQzKTtcbiRzZWNvbmRhcnk6cmdiKDI0MywgMjQzLCAyNDMpIDtcbiRibGFuYzpyZ2JhKDI1NSwyNTUsMjU1KTtcbiRwcmltYXJ5OiM1MTRlNGM7XG46cm9vdCB7XG5cbiAgLS1jb2xvci10YWJzOiM1MTRlNGM7XG5cblxuICBpb24taXRlbSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgICAvKiogcHJpbWFyeSAqKi9cbiAgLS1pb24tY29sb3ItcHJpbWFyeTogJHByaW1hcnk7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA1NiwgMTI4LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjMzE3MWUwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM0YzhkZmY7XG5cbiAgLyoqIHNlY29uZGFyeSAqKi9cbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjM2RjMmZmO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA2MSwgMTk0LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjMzZhYmUwO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzUwYzhmZjtcblxuICAvKiogdGVydGlhcnkgKiovXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNTI2MGZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDgyLCA5NiwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzQ4NTRlMDtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzYzNzBmZjtcblxuICAvKiogc3VjY2VzcyAqKi9cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzJkZDM2ZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ1LCAyMTEsIDExMTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOGJhNjI7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQyZDc3ZDtcblxuICAvKiogd2FybmluZyAqKi9cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmYzQwOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMTk2LCA5O1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYWMwODtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZjYTIyO1xuXG4gIC8qKiBkYW5nZXIgKiovXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2ViNDQ1YTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjM1LCA2OCwgOTA7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjY2YzYzRmOy8vaWNpXG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZWQ1NzZiO1xuXG4gIC8qKiBkYXJrICoqL1xuICAtLWlvbi1jb2xvci1kYXJrOiAjMjIyNDI4Oy8vaWNpXG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAzNCwgMzYsIDQwO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzFlMjAyMztcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjMzgzYTNlO1xuXG4gIC8qKiBtZWRpdW0gKiovXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzkyOTQ5YztcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTQ2LCAxNDgsIDE1NjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmOy8vaWNpXG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzgwODI4OTtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICM5ZDlmYTY7XG5cbiAgLyoqIGxpZ2h0ICoqL1xuICAtLWlvbi1jb2xvci1saWdodDogI2Y0ZjVmODsvL2ljaVxuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xufVxuXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gIC8qXG4gICAqIERhcmsgQ29sb3JzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgYm9keSB7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeTogIzQyOGNmZjtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNjYsMTQwLDI1NTtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjM2E3YmUwO1xuICAgIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzU1OThmZjtcblxuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzUwYzhmZjtcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA4MCwyMDAsMjU1O1xuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICM0NmIwZTA7XG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM2MmNlZmY7XG5cbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzZhNjRmZjtcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDEwNiwxMDAsMjU1O1xuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gICAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM1ZDU4ZTA7XG4gICAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzc5NzRmZjtcblxuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyZmRmNzU7XG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ3LDIyMywxMTc7XG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcbiAgICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZTogIzI5YzQ2NztcbiAgICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0NGUyODM7XG5cbiAgICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZkNTM0O1xuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsMjEzLDUyO1xuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGJiMmU7XG4gICAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkOTQ4O1xuXG4gICAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZmY0OTYxO1xuICAgIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI1NSw3Myw5NztcbiAgICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZTA0MDU1O1xuICAgIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZmY1YjcxO1xuXG4gICAgLS1pb24tY29sb3ItZGFyazogI2Y0ZjVmODtcbiAgICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMjQ0LDI0NSwyNDg7XG4gICAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogIzAwMDAwMDtcbiAgICAtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gICAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogI2Q3ZDhkYTtcbiAgICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICNmNWY2Zjk7XG5cbiAgICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XG4gICAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTUyLDE1NCwxNjI7XG4gICAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAgIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAgIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzg2ODg4ZjtcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcblxuICAgIC0taW9uLWNvbG9yLWxpZ2h0OiAjMjIyNDI4O1xuICAgIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMzQsMzYsNDA7XG4gICAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogIzFlMjAyMztcbiAgICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjMzgzYTNlO1xuICB9XG5cbiAgLypcbiAgICogaU9TIERhcmsgVGhlbWVcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAuaW9zIGJvZHkge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsMCwwO1xuXG4gICAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LDI1NSwyNTU7XG5cbiAgICAtLWlvbi1jb2xvci1zdGVwLTUwOiAjMGQwZDBkO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMTAwOiAjMWExYTFhO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMjYyNjI2O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjMzMzMzMzO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMjUwOiAjNDA0MDQwO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNGQ0ZDRkO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNTk1OTU5O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNDAwOiAjNjY2NjY2O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjNzM3MzczO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODA4MDgwO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNTUwOiAjOGM4YzhjO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjOTk5OTk5O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYTZhNmE2O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNzAwOiAjYjNiM2IzO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYmZiZmJmO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtODAwOiAjY2NjY2NjO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZDlkOWQ5O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTZlNmU2O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjJmMmYyO1xuXG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuXG4gICAgLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiAjMWMxYzFkO1xuICB9XG5cbiAgLmlvcyBpb24tbW9kYWwge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCk7XG4gICAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTApO1xuICAgIC0taW9uLXRvb2xiYXItYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yNTApO1xuICB9XG5cblxuICAvKlxuICAgKiBNYXRlcmlhbCBEZXNpZ24gRGFyayBUaGVtZVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIC5tZCBib2R5IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAxOCwxOCwxODtcblxuICAgIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gICAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwyNTUsMjU1O1xuXG4gICAgLS1pb24tYm9yZGVyLWNvbG9yOiAjMjIyMjIyO1xuXG4gICAgLS1pb24tY29sb3Itc3RlcC01MDogIzFlMWUxZTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzJhMmEyYTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTE1MDogIzM2MzYzNjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzQxNDE0MTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzRkNGQ0ZDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTMwMDogIzU5NTk1OTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzY1NjU2NTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzcxNzE3MTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTQ1MDogIzdkN2Q3ZDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzg5ODk4OTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzk0OTQ5NDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTYwMDogI2EwYTBhMDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2FjYWNhYztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2I4YjhiODtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTc1MDogI2M0YzRjNDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2QwZDBkMDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2RiZGJkYjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTkwMDogI2U3ZTdlNztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YzZjNmMztcblxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzFlMWUxZTtcblxuICAgIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogIzFmMWYxZjtcblxuICAgIC0taW9uLXRhYi1iYXItYmFja2dyb3VuZDogIzFmMWYxZjtcblxuICAgIC0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFlMWUxZTtcbiAgfVxufVxuXG4vKiBJbXBvcnRpbmcgQm9vdHN0cmFwIFNDU1MgZmlsZS4gKi9cbi8vQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL2Jvb3RzdHJhcCc7XG4iLCJAdXNlICcuLi8uLi8uLi8uLi90aGVtZS92YXJpYWJsZXMuc2NzcycgYXMgdjtcblxuLnByaW5jaXBhbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgdi4kc2Vjb25kYXJ5O1xuICAgIGhlaWdodDogMTAwJTtcbn1cbmlvbi1jYXJke1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIG1heC1oZWlnaHQ6IDE2LjVyZW07XG59XG4uaWNvbntcbiAgICBjb2xvcjogdi4kcHJpbWFyeTtcbiAgICBmb250LXNpemU6IDM1cHg7XG59XG4uZGlzYWJsZWR7XG4gICAgb3BhY2l0eTogMC41O1xufVxuLmljb24ye1xuICAgIGNvbG9yOiB2LiRwcmltYXJ5O1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbn1cbi5jb2xUaXRyZUxlZnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29sVGl0cmV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbHVtbkljb257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb2x1bW5Ub2dnbGV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5EYW5nZXJ7XG4gICAgY29sb3I6ICB2LiRwcmltYXJ5O1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuc3BhbntcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHYuJHByaW1hcnk7XG59XG5cbi5zcGFue1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuaW9uLXRvZ2dsZSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoIC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIHZhciggLS1jb2xvci10YWJzKTtcbiAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0KTtcbiAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6dmFyKC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdCk7XG4gIH1cbmlvbi1yYW5nZXtcbiAgICAtLWtub2ItYmFja2dyb3VuZDogdmFyKCAtLWNvbG9yLXRhYnMpO1xuICAgIC0tYmFyLWJhY2tncm91bmQ6IHZhciggLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIC0tYmFyLWJhY2tncm91bmQtYWN0aXZlOiAgdmFyKCAtLWNvbG9yLXRhYnMpO1xufVxuXG4uc2ltdWxhdGlvbkJ1dHRvbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuaW9uLWJ1dHRvbntcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHYuJHByaW1hcnk7XG4gICAgY29sb3I6IHYuJGJsYW5jO1xufVxuLmZhbGxEZXRlY3Rpb25EYXRle1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogdi4kcHJpbWFyeTtcbiAgICBmb250LXNpemU6MTRweDtcbn1cbi5mYWxsRGV0ZWN0aW9uU3BhbntcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHYuJHByaW1hcnk7XG4gICAgZm9udC1zaXplOjE3cHg7XG59XG4uY2h1dGVDb2x1bW57XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNodXRlQ29udGVudHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1heC1oZWlnaHQ6IDM1JTtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4uaWNvbkhpc3RvcmlxdWV7XG4gICAgY29sb3I6IHYuJHByaW1hcnk7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuIl19 */");

/***/ }),

/***/ "OmrQ":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/detections-fall/fall-detection/fall-detection.page.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content >\n    <div class=\"principal\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"1\"routerLink=\"/tabs/tab1\">\n            <ion-icon class=\"icon\" name=\"chevron-back-outline\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\" class=\"colTitre\">\n            <span>Détection de chutes</span>\n            \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-card>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"3\" class=\"columnIcon\">\n              <ion-icon name=\"megaphone-outline\" class=\"Danger\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"6\" class=\"colTitreLeft\">\n            <span class=\"span\"> Mode Dati {{datiModeStatus}}</span> \n            </ion-col>\n            <ion-col size=\"3\" class=\"columnToggle\">\n              <ion-toggle (ionChange)=\"toggleToTrue($event)\" aria-checked=\"true\"></ion-toggle>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"3\" class=\"columnIcon\"> \n              <ion-icon name=\"information-circle-outline\" class=\"Danger\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"4\" class=\"colTitreLeft\">\n            <span   class=\"span\"> Notification</span> \n            </ion-col>\n            <ion-col size=\"5\" class=\"columnToggle\">\n              <ion-toggle (ionChange)=\"sendNotification($event)\" aria-checked=\"true\"></ion-toggle>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"3\" class=\"columnIcon\">\n              <ion-icon name=\"information-circle-outline\" class=\"Danger\"></ion-icon>\n            </ion-col>\n            <ion-col class=\"colTitreLeft\" size=\"4\" >\n            <span  class=\"span\">Seuil(G)</span> \n            </ion-col>\n            <ion-col size=\"3\" class=\"rangecol\" class=\"columnToggle\">\n              <ion-range step=\"0.5\" [min]=\"1.0\" [max]=\"6.0\" (ionChange)=\"onChange($event)\" class=\"range\"></ion-range>\n            </ion-col>\n            <ion-col size=\"2\" class=\"range\" class=\"columnToggle\">\n              <p><strong>{{value}}</strong> </p>          \n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <div class=\"simulationButton\">\n          <ion-button (click)=\"sumulationAlert()\" [disabled]=\"!isDatiModeChecked\" [class.disabled]=\"!isDatiModeChecked\">\n            Simuler une chute \n          </ion-button>\n        </div>\n      </ion-card>\n      \n        <ion-card class=\"chuteContent\" has-bouncing=\"true\">\n          <ion-list *ngFor=\"let chute of allFallDetections\">\n            <ion-item>\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"2\" class=\"colTitre\">\n                    <ion-icon class=\"iconHistorique\" name=\"medkit-outline\"></ion-icon>\n                  </ion-col>\n                  <ion-col class=\"chuteColumn\">\n                    <span class=\"fallDetectionSpan\">Chute : {{chute.title}}</span>\n                    <span class=\"fallDetectionDate\">date : {{chute.date | date:'d/MM/YYYY HH:mm '}}</span>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-item>\n          </ion-list>\n        </ion-card >\n        \n  </div>\n</ion-content>");

/***/ }),

/***/ "XvQ4":
/*!********************************************************************************!*\
  !*** ./src/app/services/detections-fall/fall-detection/fall-detection.page.ts ***!
  \********************************************************************************/
/*! exports provided: FallDetectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FallDetectionPage", function() { return FallDetectionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_fall_detection_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./fall-detection.page.html */ "OmrQ");
/* harmony import */ var _fall_detection_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fall-detection.page.scss */ "09RP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_store_models_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/models/notification */ "98H+");
/* harmony import */ var _store_actions_notification_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store//actions/notification-action */ "qgvm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _general_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../general-functions */ "EWUx");









let FallDetectionPage = class FallDetectionPage {
    constructor(alertController, store) {
        this.alertController = alertController;
        this.store = store;
        this.progress = 30;
        this.progressBar = 100;
        this.audio = new Audio();
        this.allFallDetections = [];
        this.currentDate = new Date();
        this.isDatiModeChecked = false;
        this.datiModeStatus = 'Désactivé';
        this.isNotificationChecked = false;
        this.value = 1.0;
    }
    onChange(event) {
        this.value = event.detail.value;
    }
    sumulationAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.progress = 30;
            this.progressBar = 100;
            const alert = yield this.alertController.create({
                header: 'DÉTECTION DE CHUTE',
                subHeader: '',
                backdropDismiss: false,
            });
            yield alert.present();
            if (document.querySelector(".alert-head")) {
                var alertBlock = document.querySelector(".sc-ion-alert-ios-h");
                var alertHead = document.querySelector(".alert-message");
                this.timer = setInterval(() => {
                    if (alertHead.children.length > 1) {
                        alertHead.children[0].parentElement.removeChild(alertHead.children[0]);
                        alertHead.children[0].parentElement.removeChild(alertHead.children[0]);
                        if (this.progress < 1) {
                            clearInterval(this.timer);
                            this.removeAlert();
                        }
                    }
                    if (this.progress != 0) {
                        alertHead.insertAdjacentHTML('beforeend', '<ion-progress-bar class="progress" color="dark" value="' + (this.progressBar = this.progressBar - 3) / 100 + '"></ion-progress-bar>');
                        var progressBar = document.querySelector(".progress");
                        progressBar.insertAdjacentHTML('beforebegin', '<p class="countDownParagraphe" >Sans action de votre part, une demande d\'intervention sera envoyée automatiquement dans ' + this.progress-- + ' sec</p>');
                        var countdownParagraphe = document.querySelector(".countDownParagraphe");
                        countdownParagraphe.style.fontSize = '14px';
                    }
                }, 1000);
                this.playAudio();
                alertHead.insertAdjacentHTML('afterend', '<div class="buttons"><button class="annuler">Annuler</button> <button class="alerter">Alerter</button></div>');
                var alertButtons = document.querySelector(".buttons");
                var alertButton = document.querySelector(".alerter");
                var deleteButton = document.querySelector(".annuler");
                alertButtons.insertAdjacentHTML('afterend', '<ion-grid><ion-row>' +
                    '<ion-col size="2"><ion-icon class="iconPosition" name="locate-outline"></ion-icon></ion-col>' +
                    '<ion-col><p>Votre position sera partagée automatiquement avec nos équipes pendant la durée de l\'intervention</p></ion-col>' +
                    '</ion-row></ion-grid>');
                var icon = document.querySelector(".iconPosition");
                alertButtons.style.marginBottom = "0%";
                alertButtons.style.textAlign = "center";
                icon.style.fontSize = "25px";
                icon.style.marginTop = "80%";
                alertButton.style.width = "45%";
                alertButton.style.backgroundColor = _general_functions__WEBPACK_IMPORTED_MODULE_8__["GeneralFunctions"].primaryColor;
                alertButton.style.padding = "2%";
                alertButton.style.borderRadius = "35px";
                alertButton.style.color = _general_functions__WEBPACK_IMPORTED_MODULE_8__["GeneralFunctions"].ligthColor;
                alertButton.style.fontSize = "17px";
                deleteButton.style.width = "45%";
                deleteButton.style.backgroundColor = _general_functions__WEBPACK_IMPORTED_MODULE_8__["GeneralFunctions"].primaryColor;
                deleteButton.style.padding = "2%";
                deleteButton.style.borderRadius = "35px";
                deleteButton.style.color = _general_functions__WEBPACK_IMPORTED_MODULE_8__["GeneralFunctions"].ligthColor;
                deleteButton.style.fontSize = "17px";
                deleteButton.addEventListener('click', () => {
                    clearInterval(this.timer);
                    alertBlock.parentElement.removeChild(alertBlock);
                    this.audio.pause();
                    this.audio.currentTime = 0;
                });
                alertButton.addEventListener('click', () => {
                    clearInterval(this.timer);
                    this.removeAlert();
                    this.audio.pause();
                    this.audio.currentTime = 0;
                    setTimeout(() => {
                        this.checkBoAlert();
                    }, 100);
                });
            }
        });
    }
    checkBoAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'UNE ÉQUIPE EST EN ROUTE',
                message: '<p class="checkBoxParagraphe">Vous pouvez nous préciser le type de problème afin de préparer au mieux notre intervention</p>',
                backdropDismiss: false,
                inputs: [
                    {
                        name: 'checkbox1',
                        type: 'checkbox',
                        label: 'Trouble de la vision',
                        value: 'value1',
                        checked: true
                    },
                    {
                        name: 'checkbox2',
                        type: 'checkbox',
                        label: 'Maux de tête',
                        value: 'value2'
                    },
                    {
                        name: 'checkbox3',
                        type: 'checkbox',
                        label: 'Perte d\'équilibre',
                        value: 'value3'
                    },
                    {
                        name: 'checkbox2',
                        type: 'checkbox',
                        label: 'Douleur articulaire',
                        value: 'value2'
                    },
                    {
                        name: 'checkbox3',
                        type: 'checkbox',
                        label: 'Plaie ouverte',
                        value: 'value3'
                    }
                ],
            });
            var sendButton = document.querySelector(".alerter");
            var checkboxContainer = document.querySelector(".alert-checkbox-group");
            checkboxContainer.insertAdjacentHTML('afterend', '<div class="sendContainer"><button class="sendButton">Envoyer</button></div>');
            var sendButton = document.querySelector(".sendButton");
            var sendContainer = document.querySelector(".sendContainer");
            var alertCard = document.querySelector(".alert-wrapper");
            var checkBoxParagraphe = document.querySelector(".checkBoxParagraphe");
            alertCard.style.backgroundColor = _general_functions__WEBPACK_IMPORTED_MODULE_8__["GeneralFunctions"].ligthColor;
            checkBoxParagraphe.style.fontSize = "14px";
            sendContainer.style.marginBottom = "0%";
            sendContainer.style.textAlign = "center";
            sendContainer.style.padding = "5%";
            sendButton.style.width = "45%";
            sendButton.style.backgroundColor = _general_functions__WEBPACK_IMPORTED_MODULE_8__["GeneralFunctions"].primaryColor;
            sendButton.style.padding = "2%";
            sendButton.style.borderRadius = "35px";
            sendButton.style.color = _general_functions__WEBPACK_IMPORTED_MODULE_8__["GeneralFunctions"].ligthColor;
            sendButton.style.fontSize = "17px";
            sendButton.addEventListener('click', () => {
                this.removeAlert();
                this.interventionAlert();
            });
            yield alert.present();
        });
    }
    interventionAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'INTERVENTION',
                message: '<p class="intercentionParagraphe">L\'équipe d\'intervention vient à votre rencontre. Veuillez affectuer le moins de mouvement possible.</p>',
                backdropDismiss: false,
            });
            yield alert.present();
            var intercentionParagraphe = document.querySelector(".intercentionParagraphe");
            intercentionParagraphe.style.fontSize = "14px";
            var messageContainer = document.querySelector(".alert-message");
            messageContainer.insertAdjacentHTML('afterend', '<div class="interventionContainer"><button class="interventionButton">OK</button></div>');
            var interventionButton = document.querySelector(".interventionButton");
            var interventionContainer = document.querySelector(".interventionContainer");
            interventionContainer.style.marginTop = "-6%";
            interventionContainer.style.textAlign = "center";
            interventionContainer.style.padding = "5%";
            interventionButton.style.width = "45%";
            interventionButton.style.backgroundColor = _general_functions__WEBPACK_IMPORTED_MODULE_8__["GeneralFunctions"].primaryColor;
            interventionButton.style.padding = "2%";
            interventionButton.style.borderRadius = "35px";
            interventionButton.style.color = _general_functions__WEBPACK_IMPORTED_MODULE_8__["GeneralFunctions"].ligthColor;
            interventionButton.style.fontSize = "17px";
            interventionButton.addEventListener('click', () => {
                interventionButton.parentElement.removeChild(interventionButton);
                this.removeAlert();
                let newFallDetection = {
                    title: '5.01G',
                    date: this.currentDate
                };
                this.allFallDetections.push(newFallDetection);
                localStorage.setItem('chute', JSON.stringify(this.allFallDetections));
            });
        });
    }
    removeAlert() {
        var alertBlock = document.querySelector(".sc-ion-alert-ios-h");
        alertBlock.parentElement.removeChild(alertBlock);
    }
    playAudio() {
        this.audio.src = "../assets/audio/dati.mp3";
        this.audio.addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);
        this.audio.load();
        this.audio.play();
    }
    toggleToTrue(event) {
        console.log(event.detail.checked);
        if (!this.isDatiModeChecked) {
            this.datiModeStatus = 'Activé';
        }
        else {
            this.datiModeStatus = 'Désactivé';
        }
        this.isDatiModeChecked = event.detail.checked;
    }
    addNotification(emergencyCall) {
        const newNotification = new src_app_store_models_notification__WEBPACK_IMPORTED_MODULE_5__["Notification"]();
        newNotification.notification = emergencyCall;
        this.store.dispatch(new _store_actions_notification_action__WEBPACK_IMPORTED_MODULE_6__["TodoAdd"](newNotification));
    }
    sendNotification(event) {
        console.log(event.detail.checked);
        this.isNotificationChecked = event.detail.checked;
        let notification = {
            name: 'Détection de chuteN°' + (this.allFallDetections.length + 1),
            message: 'La détection de chute a été déclanché ',
            service: 'Détection de chute ',
        };
        if (this.isNotificationChecked) {
            this.addNotification(notification);
        }
    }
    ngOnInit() {
        this.convertedDate = (new Date()).getTimezoneOffset() * 60000;
        let localISOTimeBox = (new Date(Date.now() - this.convertedDate));
        let firstDetection = new Date(localISOTimeBox.setHours(localISOTimeBox.getHours() - 2)).toISOString().slice(0, -1);
        let secondDetection = new Date(localISOTimeBox.setHours(localISOTimeBox.getHours() + 1)).toISOString().slice(0, -1);
        this.allFallDetections = [
            {
                title: '8.01G',
                date: firstDetection
            },
            {
                title: '6.03G',
                date: secondDetection
            }
        ];
        if (!JSON.parse(localStorage.getItem('chute'))) {
            localStorage.setItem('chute', JSON.stringify(this.allFallDetections));
        }
        this.allFallDetections = JSON.parse(localStorage.getItem('chute'));
        document.addEventListener('click', () => {
            this.audio.pause();
        });
    }
};
FallDetectionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }
];
FallDetectionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-fall-detection',
        template: _raw_loader_fall_detection_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_fall_detection_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FallDetectionPage);



/***/ }),

/***/ "dMED":
/*!******************************************************************************************!*\
  !*** ./src/app/services/detections-fall/fall-detection/fall-detection-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: FallDetectionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FallDetectionPageRoutingModule", function() { return FallDetectionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fall_detection_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fall-detection.page */ "XvQ4");




const routes = [
    {
        path: '',
        component: _fall_detection_page__WEBPACK_IMPORTED_MODULE_3__["FallDetectionPage"]
    }
];
let FallDetectionPageRoutingModule = class FallDetectionPageRoutingModule {
};
FallDetectionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FallDetectionPageRoutingModule);



/***/ }),

/***/ "fB7n":
/*!**********************************************************************************!*\
  !*** ./src/app/services/detections-fall/fall-detection/fall-detection.module.ts ***!
  \**********************************************************************************/
/*! exports provided: FallDetectionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FallDetectionPageModule", function() { return FallDetectionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _fall_detection_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fall-detection-routing.module */ "dMED");
/* harmony import */ var _fall_detection_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fall-detection.page */ "XvQ4");
/* harmony import */ var angular_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-progress-bar */ "nUjy");








let FallDetectionPageModule = class FallDetectionPageModule {
};
FallDetectionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _fall_detection_routing_module__WEBPACK_IMPORTED_MODULE_5__["FallDetectionPageRoutingModule"],
            angular_progress_bar__WEBPACK_IMPORTED_MODULE_7__["ProgressBarModule"]
        ],
        declarations: [_fall_detection_page__WEBPACK_IMPORTED_MODULE_6__["FallDetectionPage"]
        ]
    })
], FallDetectionPageModule);



/***/ }),

/***/ "nUjy":
/*!*****************************************************************************************!*\
  !*** ./node_modules/angular-progress-bar/__ivy_ngcc__/fesm2015/angular-progress-bar.js ***!
  \*****************************************************************************************/
/*! exports provided: ProgressBarComponent, ProgressBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarModule", function() { return ProgressBarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



function ProgressBarComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.whichProgress(ctx_r0.progress), "% ");
} }
function ProgressBarComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.whichProgress(ctx_r1.progress), " ");
} }
class ProgressBarComponent {
    constructor() {
        // Default color
        this.color = "#488aff";
        this.disabledP = false;
    }
    /**
     * Returns a color for a certain percent
     * @param {?} percent The current progress
     * @return {?}
     */
    whichColor(percent) {
        // Get all entries index as an array
        /** @type {?} */
        let k = Object.keys(this.degraded);
        // Convert string to number
        k.forEach((e, i) => k[i] = +e);
        // Sort them by value
        k = k.sort((a, b) => a - b);
        // Percent as number
        /** @type {?} */
        let p = +percent
        // Set last by default as the first occurrence
        ;
        // Set last by default as the first occurrence
        /** @type {?} */
        let last = k[0];
        // Foreach keys 
        for (let val of k) {
            // if current val is < than percent
            if (val < p) {
                last = val;
            }
            // if val >= percent then the val that we could show has been reached
            else if (val >= p - 1) {
                return this.degraded[last];
            }
        }
        // if its the last one return the last
        return this.degraded[last];
    }
    /**
     * @param {?} progress
     * @return {?}
     */
    whichProgress(progress) {
        try {
            return Math.round(+progress * 100) / 100;
        }
        catch (_a) {
            return progress;
        }
    }
}
ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) { return new (t || ProgressBarComponent)(); };
ProgressBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressBarComponent, selectors: [["progress-bar"]], inputs: { color: "color", disabledP: ["disable-percentage", "disabledP"], progress: "progress", degraded: ["color-degraded", "degraded"] }, decls: 4, vars: 6, consts: [[1, "progress-outer"], [1, "progress-inner"], [4, "ngIf"]], template: function ProgressBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProgressBarComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProgressBarComponent_ng_container_3_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.whichProgress(ctx.progress) + "%")("background-color", ctx.degraded == null ? ctx.color : ctx.whichColor(ctx.progress));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.disabledP);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.disabledP);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".progress-outer[_ngcontent-%COMP%] {\n          width: 96%;\n          margin: 10px 2%;\n          padding: 3px;\n          background-color: #f4f4f4;\n          border: 1px solid #dcdcdc;\n          color: #fff;\n          border-radius: 20px;\n          text-align: center;\n        }\n        .progress-inner[_ngcontent-%COMP%] {\n          min-width: 15%;\n          min-height:18px;\n          white-space: nowrap;\n          overflow: hidden;\n          padding: 0px;\n          border-radius: 20px;"] });
/** @nocollapse */
ProgressBarComponent.ctorParameters = () => [];
ProgressBarComponent.propDecorators = {
    progress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['progress',] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['color',] }],
    degraded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['color-degraded',] }],
    disabledP: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['disable-percentage',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'progress-bar',
                template: `
  <div class=\"progress-outer\">
    <div class=\"progress-inner\" [style.width]=\"whichProgress(progress) + '%'\" [style.background-color]=\"degraded == null ? color : whichColor(progress)\">
      <ng-container *ngIf="!disabledP"> 
        {{whichProgress(progress)}}%
      </ng-container>
      <ng-container *ngIf="disabledP"> 
        {{whichProgress(progress)}}
      </ng-container>
    </div>
  </div>
  `,
                styles: [`
        .progress-outer {
          width: 96%;
          margin: 10px 2%;
          padding: 3px;
          background-color: #f4f4f4;
          border: 1px solid #dcdcdc;
          color: #fff;
          border-radius: 20px;
          text-align: center;
        }
        .progress-inner {
          min-width: 15%;
          min-height:18px;
          white-space: nowrap;
          overflow: hidden;
          padding: 0px;
          border-radius: 20px;
  `]
            }]
    }], function () { return []; }, { color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['color']
        }], disabledP: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['disable-percentage']
        }], progress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['progress']
        }], degraded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['color-degraded']
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ProgressBarModule {
}
ProgressBarModule.ɵfac = function ProgressBarModule_Factory(t) { return new (t || ProgressBarModule)(); };
ProgressBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProgressBarModule });
ProgressBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProgressBarModule, { declarations: function () { return [ProgressBarComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [ProgressBarComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressBarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [ProgressBarComponent],
                exports: [ProgressBarComponent],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1wcm9ncmVzcy1iYXIuanMiLCJzb3VyY2VzIjpbImFuZ3VsYXItcHJvZ3Jlc3MtYmFyL2xpYi9hbmd1bGFyLXByb2dyZXNzLWJhci5jb21wb25lbnQudHMiLCJhbmd1bGFyLXByb2dyZXNzLWJhci9saWIvYW5ndWxhci1wcm9ncmVzcy1iYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQXNDYSxvQkFBb0I7QUFDakMsSUFRQTtBQUNBO0FBQ00sUUFBSixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztBQUN6QixRQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0FBQ3pCLEtBQUM7QUFDRDtBQUVFO0FBQ0k7QUFFRztBQUFvQjtBQUNyQixJQURSLFVBQVUsQ0FBQyxPQUFlO0FBQ3pCO0FBQ007QUFBMEIsWUFBM0IsQ0FBQyxHQUFlLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUNoRDtBQUNNLFFBQUosQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakM7QUFDTSxRQUFKLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDOUI7QUFDTTtBQUNNLFlBRE4sQ0FBQyxHQUFHLENBQUMsT0FBTztBQUNsQjtBQUNNO0FBQVc7QUFHTjtBQUEwQixZQUgvQixJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqQjtBQUNNLFFBQUosS0FBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUM7QUFDbkI7QUFDUSxZQUFKLElBQUcsR0FBRyxHQUFHLENBQUMsRUFBQztBQUNmLGdCQUFNLElBQUksR0FBRyxHQUFHLENBQUM7QUFDakIsYUFBSztBQUNMO0FBQ1EsaUJBQUMsSUFBRyxHQUFHLElBQUksQ0FBQyxHQUFFLENBQUMsRUFBQztBQUN4QixnQkFBTSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakMsYUFBSztBQUNMLFNBQUc7QUFDSDtBQUNNLFFBQUosT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdCLEtBQUM7QUFDRDtBQUNPO0FBQ047QUFDWTtBQUFTLElBRnRCLGFBQWEsQ0FBQyxRQUFnQjtBQUM3QixRQUFDLElBQUc7QUFDTCxZQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDN0MsU0FBRztBQUNILFFBQUUsV0FBSztBQUNQLFlBQUksT0FBTyxRQUFRLENBQUM7QUFDcEIsU0FBRztBQUNILEtBQUM7QUFDRDtrREF6RkMsU0FBUyxTQUFDLG1CQUNULFFBQVEsRUFDSixjQUFjO2NBb0JsQixRQUFRLEVBQ1I7bUNBV0M7bUJBL0JROzs7Ozs7O2lKQWtCUjtBQWNGOzs7OzZpQkFDRztBQUFFO0FBQW9CO0FBR047QUFDQyx1QkFEbEIsS0FBSyxTQUFDLFVBQVU7QUFBUSxvQkFDeEIsS0FBSyxTQUFDLE9BQU87QUFBUSx1QkFDckIsS0FBSyxTQUFDLGdCQUFnQjtBQUFRLHdCQUM5QixLQUFLLFNBQUMsb0JBQW9CO0FBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQztBQUFDO0FBQUs7QUFJdEM7QUFNa0I7QUN0RHpCLE1BYWEsaUJBQWlCO0FBQUk7K0NBUmpDLFFBQVEsU0FBQyxtQkFDUixPQUFPLEVBQUU7UUFDUCxZQUFZLG1CQUNiLG1CQUNELFlBQVksRUFBRSxDQUFDO2NBQW9CLENBQUMsbUJBQ3BDLE9BQU8sRUFBRSxDQUFDO0NBQW9CLENBQUMsbUJBQy9CO0dBQU8sRUFBRSxDQUFDO2FBQXNCLENBQUMsZUFDbEM7Ozs7Ozs7Ozs7OzBCQUNJO0FBQUM7QUFBQztBQUFLO0FBQW1DO0FBQXNHO0FBQUk7QUFBQztBQUFLO0FBQW1DO0FBQXNHO0FBQUk7QUFBQzs7QURiQSxBQXNDQSxBQUFBLEFBU0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFNQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBeEZBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBb0JBLEFBQUEsQUFDQSxBQVdBLEFBL0JBLEFBa0JBLEFBY0EsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQzVDQSxBQWFBLEFBQUEsQUFSQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOlxyXG4gICAgICAncHJvZ3Jlc3MtYmFyJyxcclxuICBzdHlsZXM6IFtgXHJcbiAgICAgICAgLnByb2dyZXNzLW91dGVyIHtcclxuICAgICAgICAgIHdpZHRoOiA5NiU7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHggMiU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RjZGNkYztcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2dyZXNzLWlubmVyIHtcclxuICAgICAgICAgIG1pbi13aWR0aDogMTUlO1xyXG4gICAgICAgICAgbWluLWhlaWdodDoxOHB4O1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGBdLFxyXG4gIHRlbXBsYXRlOlxyXG4gIGBcclxuICA8ZGl2IGNsYXNzPVxcXCJwcm9ncmVzcy1vdXRlclxcXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVxcXCJwcm9ncmVzcy1pbm5lclxcXCIgW3N0eWxlLndpZHRoXT1cXFwid2hpY2hQcm9ncmVzcyhwcm9ncmVzcykgKyAnJSdcXFwiIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cXFwiZGVncmFkZWQgPT0gbnVsbCA/IGNvbG9yIDogd2hpY2hDb2xvcihwcm9ncmVzcylcXFwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWRpc2FibGVkUFwiPiBcclxuICAgICAgICB7e3doaWNoUHJvZ3Jlc3MocHJvZ3Jlc3MpfX0lXHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGlzYWJsZWRQXCI+IFxyXG4gICAgICAgIHt7d2hpY2hQcm9ncmVzcyhwcm9ncmVzcyl9fVxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyQ29tcG9uZW50IHtcclxuXHJcbi8qKiBJbnB1dHMgKiovXHJcbiAgQElucHV0KCdwcm9ncmVzcycpIHByb2dyZXNzOiBzdHJpbmc7XHJcbiAgQElucHV0KCdjb2xvcicpIGNvbG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCdjb2xvci1kZWdyYWRlZCcpIGRlZ3JhZGVkOiBhbnk7XHJcbiAgQElucHV0KCdkaXNhYmxlLXBlcmNlbnRhZ2UnKSBkaXNhYmxlZFA6IGJvb2xlYW47XHJcblxyXG5cclxuY29uc3RydWN0b3IoKSB7XHJcbiAgLy8gRGVmYXVsdCBjb2xvclxyXG4gIHRoaXMuY29sb3IgPSBcIiM0ODhhZmZcIjtcclxuICB0aGlzLmRpc2FibGVkUCA9IGZhbHNlO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIGNvbG9yIGZvciBhIGNlcnRhaW4gcGVyY2VudFxyXG4gKiBAcGFyYW0gcGVyY2VudCBUaGUgY3VycmVudCBwcm9ncmVzc1xyXG4gKi9cclxud2hpY2hDb2xvcihwZXJjZW50OiBzdHJpbmcpe1xyXG4gIC8vIEdldCBhbGwgZW50cmllcyBpbmRleCBhcyBhbiBhcnJheVxyXG4gIGxldCBrOiBBcnJheTxhbnk+ID0gT2JqZWN0LmtleXModGhpcy5kZWdyYWRlZCk7XHJcbiAgLy8gQ29udmVydCBzdHJpbmcgdG8gbnVtYmVyXHJcbiAgay5mb3JFYWNoKChlLCBpKSA9PiBrW2ldID0gK2UpO1xyXG4gIC8vIFNvcnQgdGhlbSBieSB2YWx1ZVxyXG4gIGsgPSBrLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcclxuICAvLyBQZXJjZW50IGFzIG51bWJlclxyXG4gIGxldCBwID0gK3BlcmNlbnRcclxuICAvLyBTZXQgbGFzdCBieSBkZWZhdWx0IGFzIHRoZSBmaXJzdCBvY2N1cnJlbmNlXHJcbiAgbGV0IGxhc3QgPSBrWzBdO1xyXG4gIC8vIEZvcmVhY2gga2V5cyBcclxuICBmb3IobGV0IHZhbCBvZiBrKXtcclxuICAgIC8vIGlmIGN1cnJlbnQgdmFsIGlzIDwgdGhhbiBwZXJjZW50XHJcbiAgICBpZih2YWwgPCBwKXtcclxuICAgICAgbGFzdCA9IHZhbDtcclxuICAgIH1cclxuICAgIC8vIGlmIHZhbCA+PSBwZXJjZW50IHRoZW4gdGhlIHZhbCB0aGF0IHdlIGNvdWxkIHNob3cgaGFzIGJlZW4gcmVhY2hlZFxyXG4gICAgZWxzZSBpZih2YWwgPj0gcCAtMSl7XHJcbiAgICAgIHJldHVybiB0aGlzLmRlZ3JhZGVkW2xhc3RdO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBpZiBpdHMgdGhlIGxhc3Qgb25lIHJldHVybiB0aGUgbGFzdFxyXG4gIHJldHVybiB0aGlzLmRlZ3JhZGVkW2xhc3RdO1xyXG59XHJcblxyXG53aGljaFByb2dyZXNzKHByb2dyZXNzOiBzdHJpbmcpe1xyXG4gIHRyeXtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKCtwcm9ncmVzcyAqIDEwMCkgLyAxMDA7XHJcbiAgfVxyXG4gIGNhdGNoe1xyXG4gICAgcmV0dXJuIHByb2dyZXNzO1xyXG4gIH1cclxufVxyXG59IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUHJvZ3Jlc3NCYXJDb21wb25lbnQgfSBmcm9tICcuL2FuZ3VsYXItcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1Byb2dyZXNzQmFyQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbUHJvZ3Jlc3NCYXJDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NCYXJNb2R1bGUgeyB9Il19

/***/ })

}]);
//# sourceMappingURL=services-detections-fall-fall-detection-fall-detection-module.js.map
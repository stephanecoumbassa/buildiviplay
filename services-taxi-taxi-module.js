(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-taxi-taxi-module"],{

/***/ "32Ty":
/*!**********************************************!*\
  !*** ./src/app/services/taxi/taxi.page.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/** Ionic CSS Variables **/\n:root {\n  --color-tabs:#514e4c;\n  /** primary **/\n  --ion-color-primary: $primary;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}\n:root ion-item {\n  font-size: 14px;\n}\n@media (prefers-color-scheme: dark) {\n  /*\n   * Dark Colors\n   * -------------------------------------------\n   */\n  body {\n    --ion-color-primary: #428cff;\n    --ion-color-primary-rgb: 66,140,255;\n    --ion-color-primary-contrast: #ffffff;\n    --ion-color-primary-contrast-rgb: 255,255,255;\n    --ion-color-primary-shade: #3a7be0;\n    --ion-color-primary-tint: #5598ff;\n    --ion-color-secondary: #50c8ff;\n    --ion-color-secondary-rgb: 80,200,255;\n    --ion-color-secondary-contrast: #ffffff;\n    --ion-color-secondary-contrast-rgb: 255,255,255;\n    --ion-color-secondary-shade: #46b0e0;\n    --ion-color-secondary-tint: #62ceff;\n    --ion-color-tertiary: #6a64ff;\n    --ion-color-tertiary-rgb: 106,100,255;\n    --ion-color-tertiary-contrast: #ffffff;\n    --ion-color-tertiary-contrast-rgb: 255,255,255;\n    --ion-color-tertiary-shade: #5d58e0;\n    --ion-color-tertiary-tint: #7974ff;\n    --ion-color-success: #2fdf75;\n    --ion-color-success-rgb: 47,223,117;\n    --ion-color-success-contrast: #000000;\n    --ion-color-success-contrast-rgb: 0,0,0;\n    --ion-color-success-shade: #29c467;\n    --ion-color-success-tint: #44e283;\n    --ion-color-warning: #ffd534;\n    --ion-color-warning-rgb: 255,213,52;\n    --ion-color-warning-contrast: #000000;\n    --ion-color-warning-contrast-rgb: 0,0,0;\n    --ion-color-warning-shade: #e0bb2e;\n    --ion-color-warning-tint: #ffd948;\n    --ion-color-danger: #ff4961;\n    --ion-color-danger-rgb: 255,73,97;\n    --ion-color-danger-contrast: #ffffff;\n    --ion-color-danger-contrast-rgb: 255,255,255;\n    --ion-color-danger-shade: #e04055;\n    --ion-color-danger-tint: #ff5b71;\n    --ion-color-dark: #f4f5f8;\n    --ion-color-dark-rgb: 244,245,248;\n    --ion-color-dark-contrast: #000000;\n    --ion-color-dark-contrast-rgb: 0,0,0;\n    --ion-color-dark-shade: #d7d8da;\n    --ion-color-dark-tint: #f5f6f9;\n    --ion-color-medium: #989aa2;\n    --ion-color-medium-rgb: 152,154,162;\n    --ion-color-medium-contrast: #000000;\n    --ion-color-medium-contrast-rgb: 0,0,0;\n    --ion-color-medium-shade: #86888f;\n    --ion-color-medium-tint: #a2a4ab;\n    --ion-color-light: #222428;\n    --ion-color-light-rgb: 34,36,40;\n    --ion-color-light-contrast: #ffffff;\n    --ion-color-light-contrast-rgb: 255,255,255;\n    --ion-color-light-shade: #1e2023;\n    --ion-color-light-tint: #383a3e;\n  }\n\n  /*\n   * iOS Dark Theme\n   * -------------------------------------------\n   */\n  .ios body {\n    --ion-background-color: #000000;\n    --ion-background-color-rgb: 0,0,0;\n    --ion-text-color: #ffffff;\n    --ion-text-color-rgb: 255,255,255;\n    --ion-color-step-50: #0d0d0d;\n    --ion-color-step-100: #1a1a1a;\n    --ion-color-step-150: #262626;\n    --ion-color-step-200: #333333;\n    --ion-color-step-250: #404040;\n    --ion-color-step-300: #4d4d4d;\n    --ion-color-step-350: #595959;\n    --ion-color-step-400: #666666;\n    --ion-color-step-450: #737373;\n    --ion-color-step-500: #808080;\n    --ion-color-step-550: #8c8c8c;\n    --ion-color-step-600: #999999;\n    --ion-color-step-650: #a6a6a6;\n    --ion-color-step-700: #b3b3b3;\n    --ion-color-step-750: #bfbfbf;\n    --ion-color-step-800: #cccccc;\n    --ion-color-step-850: #d9d9d9;\n    --ion-color-step-900: #e6e6e6;\n    --ion-color-step-950: #f2f2f2;\n    --ion-item-background: #000000;\n    --ion-card-background: #1c1c1d;\n  }\n\n  .ios ion-modal {\n    --ion-background-color: var(--ion-color-step-100);\n    --ion-toolbar-background: var(--ion-color-step-150);\n    --ion-toolbar-border-color: var(--ion-color-step-250);\n  }\n\n  /*\n   * Material Design Dark Theme\n   * -------------------------------------------\n   */\n  .md body {\n    --ion-background-color: #121212;\n    --ion-background-color-rgb: 18,18,18;\n    --ion-text-color: #ffffff;\n    --ion-text-color-rgb: 255,255,255;\n    --ion-border-color: #222222;\n    --ion-color-step-50: #1e1e1e;\n    --ion-color-step-100: #2a2a2a;\n    --ion-color-step-150: #363636;\n    --ion-color-step-200: #414141;\n    --ion-color-step-250: #4d4d4d;\n    --ion-color-step-300: #595959;\n    --ion-color-step-350: #656565;\n    --ion-color-step-400: #717171;\n    --ion-color-step-450: #7d7d7d;\n    --ion-color-step-500: #898989;\n    --ion-color-step-550: #949494;\n    --ion-color-step-600: #a0a0a0;\n    --ion-color-step-650: #acacac;\n    --ion-color-step-700: #b8b8b8;\n    --ion-color-step-750: #c4c4c4;\n    --ion-color-step-800: #d0d0d0;\n    --ion-color-step-850: #dbdbdb;\n    --ion-color-step-900: #e7e7e7;\n    --ion-color-step-950: #f3f3f3;\n    --ion-item-background: #1e1e1e;\n    --ion-toolbar-background: #1f1f1f;\n    --ion-tab-bar-background: #1f1f1f;\n    --ion-card-background: #1e1e1e;\n  }\n}\n/* Importing Bootstrap SCSS file. */\n.principal {\n  background-color: #f3f3f3;\n  height: 100%;\n}\n.FirstColumn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-card {\n  border-radius: 25px;\n}\nspan {\n  font-size: 20px;\n  color: #514e4c;\n}\n.priceColumn {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.icon {\n  color: #514e4c;\n  font-size: 35px;\n}\n.iconHIstorique {\n  color: #514e4c;\n  font-size: 35px;\n}\n.taxiIcon, .taxiIconSum {\n  font-size: 30px;\n  color: #514e4c;\n}\n.taxiName {\n  font-size: 15px;\n}\n.bottomSheet {\n  position: fixed;\n  display: none;\n  width: 100%;\n  bottom: 0;\n  border-radius: 30px 30px 0px 0px;\n  z-index: 20;\n  background-color: white;\n  transform: translate3d(0, 0, 0);\n}\n.bottomSheetTaxiName {\n  color: #514e4c;\n}\n.counterColumn {\n  text-align: center;\n}\nbutton {\n  height: 30px;\n  width: 40%;\n  border-radius: 35px;\n  background-color: #514e4c;\n  font-size: 17px;\n  color: white;\n}\nimg {\n  max-width: 20rem;\n  min-width: 17rem;\n}\n.paymentMessage {\n  color: #514e4c;\n  font-size: 15px;\n}\n.payButton {\n  height: 30px;\n  width: 100px;\n  border-radius: 10px;\n  background-color: #514e4c;\n  font-size: 17px;\n  color: white;\n}\n.paymentColumn {\n  text-align: center;\n}\n.payButton {\n  height: 30px;\n  width: 100px;\n  border-radius: 10px;\n  background-color: #514e4c;\n  font-size: 17px;\n  color: white;\n}\n.iconHistorique {\n  color: #514e4c;\n  font-size: 25px;\n}\n.taxiSpan {\n  font-size: 15px;\n}\n.bottomSheetTaxiName {\n  text-align: center;\n}\n.bottomSheetNameDiv {\n  text-align: center;\n}\n.favButton {\n  margin-left: 3.5%;\n  height: 30px;\n  width: 46.5%;\n  border-radius: 5px;\n  background-color: #514e4c;\n  font-size: 17px;\n  color: white;\n}\n.historiqueCard {\n  max-height: 70%;\n  overflow-y: scroll;\n}\n.paragraphCenter {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vdGF4aS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsMEJBQUE7QUFLQTtFQUVFLG9CQUFBO0VBTUUsY0FBQTtFQUNGLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsaURBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsZUFBQTtFQUNBLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSxzQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBQ3JCRjtBRHBERTtFQUNJLGVBQUE7QUNzRE47QURxQkE7RUFDRTs7O0lBQUE7RUFLQTtJQUNFLDRCQUFBO0lBQ0Es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QXBOQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUF1Tko7QUFwTkE7RUFDSSxjRGhFSztFQ2lFTCxlQUFBO0FBdU5KO0FBck5BO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCRHZFSztFQ3dFTCxlQUFBO0VBQ0EsWUQxRUc7QUNrU1A7QUF0TkE7RUFDSSxrQkFBQTtBQXlOSjtBQXZOQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkRsRks7RUNtRkwsZUFBQTtFQUNBLFlEckZHO0FDK1NQO0FBeE5BO0VBQ0ksY0R2Rks7RUN3RkwsZUFBQTtBQTJOSjtBQXpOQTtFQUNJLGVBQUE7QUE0Tko7QUExTkE7RUFDSSxrQkFBQTtBQTZOSjtBQTNOQTtFQUNJLGtCQUFBO0FBOE5KO0FBNU5BO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJEeEdLO0VDeUdMLGVBQUE7RUFDQSxZRDNHRztBQzBVUDtBQTVOQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQStOSjtBQTVOQTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBK05KIiwiZmlsZSI6InRheGkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOlxuLy8gaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvXG5cblxuLyoqIElvbmljIENTUyBWYXJpYWJsZXMgKiovXG4kc2Vjb25kYXJ5LWNvbDpyZ2IoMjQzLCAyNDMsIDI0Myk7XG4kc2Vjb25kYXJ5OnJnYigyNDMsIDI0MywgMjQzKSA7XG4kYmxhbmM6cmdiYSgyNTUsMjU1LDI1NSk7XG4kcHJpbWFyeTojNTE0ZTRjO1xuOnJvb3Qge1xuXG4gIC0tY29sb3ItdGFiczojNTE0ZTRjO1xuXG5cbiAgaW9uLWl0ZW0ge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gICAgLyoqIHByaW1hcnkgKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICRwcmltYXJ5O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNTYsIDEyOCwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzMxNzFlMDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjNGM4ZGZmO1xuXG4gIC8qKiBzZWNvbmRhcnkgKiovXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzNkYzJmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogNjEsIDE5NCwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzM2YWJlMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM1MGM4ZmY7XG5cbiAgLyoqIHRlcnRpYXJ5ICoqL1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzUyNjBmZjtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiA4MiwgOTYsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM0ODU0ZTA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM2MzcwZmY7XG5cbiAgLyoqIHN1Y2Nlc3MgKiovXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMyZGQzNmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA0NSwgMjExLCAxMTE7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMjhiYTYyO1xuICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0MmQ3N2Q7XG5cbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmM0MDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDE5NiwgOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGFjMDg7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmY2EyMjtcblxuICAvKiogZGFuZ2VyICoqL1xuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNlYjQ0NWE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDIzNSwgNjgsIDkwO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2NmM2M0ZjsvL2ljaVxuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2VkNTc2YjtcblxuICAvKiogZGFyayAqKi9cbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODsvL2ljaVxuICAtLWlvbi1jb2xvci1kYXJrLXJnYjogMzQsIDM2LCA0MDtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICMxZTIwMjM7XG4gIC0taW9uLWNvbG9yLWRhcmstdGludDogIzM4M2EzZTtcblxuICAvKiogbWVkaXVtICoqL1xuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5Mjk0OWM7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE0NiwgMTQ4LCAxNTY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogI2ZmZmZmZjsvL2ljaVxuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4MDgyODk7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjOWQ5ZmE2O1xuXG4gIC8qKiBsaWdodCAqKi9cbiAgLS1pb24tY29sb3ItbGlnaHQ6ICNmNGY1Zjg7Ly9pY2lcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDQsIDI0NSwgMjQ4O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2Y1ZjZmOTtcbn1cblxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICAvKlxuICAgKiBEYXJrIENvbG9yc1xuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuXG4gIGJvZHkge1xuICAgIC0taW9uLWNvbG9yLXByaW1hcnk6ICM0MjhjZmY7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDY2LDE0MCwyNTU7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzNhN2JlMDtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM1NTk4ZmY7XG5cbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICM1MGM4ZmY7XG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogODAsMjAwLDI1NTtcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjNDZiMGUwO1xuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50OiAjNjJjZWZmO1xuXG4gICAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM2YTY0ZmY7XG4gICAgLS1pb24tY29sb3ItdGVydGlhcnktcmdiOiAxMDYsMTAwLDI1NTtcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNWQ1OGUwO1xuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM3OTc0ZmY7XG5cbiAgICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMmZkZjc1O1xuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA0NywyMjMsMTE3O1xuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOWM0Njc7XG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDRlMjgzO1xuXG4gICAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmZDUzNDtcbiAgICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LDIxMyw1MjtcbiAgICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjMDAwMDAwO1xuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBiYjJlO1xuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmZDk0ODtcblxuICAgIC0taW9uLWNvbG9yLWRhbmdlcjogI2ZmNDk2MTtcbiAgICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyNTUsNzMsOTc7XG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAgIC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZTogI2UwNDA1NTtcbiAgICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2ZmNWI3MTtcblxuICAgIC0taW9uLWNvbG9yLWRhcms6ICNmNGY1Zjg7XG4gICAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDI0NCwyNDUsMjQ4O1xuICAgIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAgIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICNkN2Q4ZGE7XG4gICAgLS1pb24tY29sb3ItZGFyay10aW50OiAjZjVmNmY5O1xuXG4gICAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTg5YWEyO1xuICAgIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE1MiwxNTQsMTYyO1xuICAgIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdDogIzAwMDAwMDtcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAwLDAsMDtcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4Njg4OGY7XG4gICAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICNhMmE0YWI7XG5cbiAgICAtLWlvbi1jb2xvci1saWdodDogIzIyMjQyODtcbiAgICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDM0LDM2LDQwO1xuICAgIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gICAgLS1pb24tY29sb3ItbGlnaHQtc2hhZGU6ICMxZTIwMjM7XG4gICAgLS1pb24tY29sb3ItbGlnaHQtdGludDogIzM4M2EzZTtcbiAgfVxuXG4gIC8qXG4gICAqIGlPUyBEYXJrIFRoZW1lXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG5cbiAgLmlvcyBib2R5IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAwLDAsMDtcblxuICAgIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XG4gICAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwyNTUsMjU1O1xuXG4gICAgLS1pb24tY29sb3Itc3RlcC01MDogIzBkMGQwZDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTEwMDogIzFhMWExYTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTE1MDogIzI2MjYyNjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzMzMzMzMztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTI1MDogIzQwNDA0MDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTMwMDogIzRkNGQ0ZDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzU5NTk1OTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTQwMDogIzY2NjY2NjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTQ1MDogIzczNzM3MztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzgwODA4MDtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTU1MDogIzhjOGM4YztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTYwMDogIzk5OTk5OTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2E2YTZhNjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTcwMDogI2IzYjNiMztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTc1MDogI2JmYmZiZjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2NjY2NjYztcbiAgICAtLWlvbi1jb2xvci1zdGVwLTg1MDogI2Q5ZDlkOTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTkwMDogI2U2ZTZlNjtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YyZjJmMjtcblxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzAwMDAwMDtcblxuICAgIC0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFjMWMxZDtcbiAgfVxuXG4gIC5pb3MgaW9uLW1vZGFsIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xMDApO1xuICAgIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcbiAgICAtLWlvbi10b29sYmFyLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwKTtcbiAgfVxuXG5cbiAgLypcbiAgICogTWF0ZXJpYWwgRGVzaWduIERhcmsgVGhlbWVcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cblxuICAubWQgYm9keSB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMTgsMTgsMTg7XG5cbiAgICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAgIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsMjU1LDI1NTtcblxuICAgIC0taW9uLWJvcmRlci1jb2xvcjogIzIyMjIyMjtcblxuICAgIC0taW9uLWNvbG9yLXN0ZXAtNTA6ICMxZTFlMWU7XG4gICAgLS1pb24tY29sb3Itc3RlcC0xMDA6ICMyYTJhMmE7XG4gICAgLS1pb24tY29sb3Itc3RlcC0xNTA6ICMzNjM2MzY7XG4gICAgLS1pb24tY29sb3Itc3RlcC0yMDA6ICM0MTQxNDE7XG4gICAgLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0ZDRkNGQ7XG4gICAgLS1pb24tY29sb3Itc3RlcC0zMDA6ICM1OTU5NTk7XG4gICAgLS1pb24tY29sb3Itc3RlcC0zNTA6ICM2NTY1NjU7XG4gICAgLS1pb24tY29sb3Itc3RlcC00MDA6ICM3MTcxNzE7XG4gICAgLS1pb24tY29sb3Itc3RlcC00NTA6ICM3ZDdkN2Q7XG4gICAgLS1pb24tY29sb3Itc3RlcC01MDA6ICM4OTg5ODk7XG4gICAgLS1pb24tY29sb3Itc3RlcC01NTA6ICM5NDk0OTQ7XG4gICAgLS1pb24tY29sb3Itc3RlcC02MDA6ICNhMGEwYTA7XG4gICAgLS1pb24tY29sb3Itc3RlcC02NTA6ICNhY2FjYWM7XG4gICAgLS1pb24tY29sb3Itc3RlcC03MDA6ICNiOGI4Yjg7XG4gICAgLS1pb24tY29sb3Itc3RlcC03NTA6ICNjNGM0YzQ7XG4gICAgLS1pb24tY29sb3Itc3RlcC04MDA6ICNkMGQwZDA7XG4gICAgLS1pb24tY29sb3Itc3RlcC04NTA6ICNkYmRiZGI7XG4gICAgLS1pb24tY29sb3Itc3RlcC05MDA6ICNlN2U3ZTc7XG4gICAgLS1pb24tY29sb3Itc3RlcC05NTA6ICNmM2YzZjM7XG5cbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMxZTFlMWU7XG5cbiAgICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG5cbiAgICAtLWlvbi10YWItYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG5cbiAgICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxZTFlMWU7XG4gIH1cbn1cblxuLyogSW1wb3J0aW5nIEJvb3RzdHJhcCBTQ1NTIGZpbGUuICovXG4vL0BpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy9ib290c3RyYXAnO1xuIiwiQHVzZSAnLi8uLi8uLi8uLi90aGVtZS92YXJpYWJsZXMuc2NzcycgYXMgdjtcblxuLnByaW5jaXBhbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgdi4kc2Vjb25kYXJ5O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLkZpcnN0Q29sdW1ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlvbi1jYXJke1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5zcGFue1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogdi4kcHJpbWFyeTtcbn1cbi5wcmljZUNvbHVtbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pY29ue1xuICAgIGNvbG9yOiB2LiRwcmltYXJ5O1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbn1cbi5pY29uSElzdG9yaXF1ZXtcbiAgICBjb2xvcjogdi4kcHJpbWFyeTtcbiAgICBmb250LXNpemU6IDM1cHg7XG59XG5cbi50YXhpSWNvbiwudGF4aUljb25TdW17XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiB2LiRwcmltYXJ5O1xufVxuLnRheGlOYW1le1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmJvdHRvbVNoZWV0e1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvdHRvbTogMDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggMHB4IDBweDtcbiAgICB6LWluZGV4OiAyMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2LiRibGFuYztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbn1cbi5ib3R0b21TaGVldFRheGlOYW1le1xuICAgIGNvbG9yOiB2LiRwcmltYXJ5O1xufVxuLmNvdW50ZXJDb2x1bW57XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuYnV0dG9ue1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogNDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdi4kcHJpbWFyeTtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgY29sb3I6IHYuJGJsYW5jO1xufVxuXG5pbWd7XG4gICAgbWF4LXdpZHRoOjIwcmVtO1xuICAgIG1pbi13aWR0aDoxN3JlbTtcbn1cblxuLnBheW1lbnRNZXNzYWdle1xuICAgIGNvbG9yOiB2LiRwcmltYXJ5O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5wYXlCdXR0b257XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHYuJHByaW1hcnk7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGNvbG9yOiB2LiRibGFuYztcbn1cbi5wYXltZW50Q29sdW1ue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wYXlCdXR0b257XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHYuJHByaW1hcnk7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGNvbG9yOiB2LiRibGFuYztcbn1cbi5pY29uSGlzdG9yaXF1ZXtcbiAgICBjb2xvcjogdi4kcHJpbWFyeTtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG4udGF4aVNwYW57XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLmJvdHRvbVNoZWV0VGF4aU5hbWUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ib3R0b21TaGVldE5hbWVEaXZ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZhdkJ1dHRvbntcbiAgICBtYXJnaW4tbGVmdDogMy41JTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDQ2LjUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2LiRwcmltYXJ5O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBjb2xvcjogdi4kYmxhbmM7XG59XG5cbi5oaXN0b3JpcXVlQ2FyZHtcbiAgICBtYXgtaGVpZ2h0OiA3MCU7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4ucGFyYWdyYXBoQ2VudGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "BkQ7":
/*!***********************************************!*\
  !*** ./src/app/services/taxi/taxi.service.ts ***!
  \***********************************************/
/*! exports provided: TaxiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxiService", function() { return TaxiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_mocks_taxi_mocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/mocks/taxi.mocks */ "BmLX");



let TaxiService = class TaxiService {
    constructor(taxiMocks) {
        this.taxiMocks = taxiMocks;
    }
    getTaxi() {
        return this.taxiMocks.getTaxi();
    }
};
TaxiService.ctorParameters = () => [
    { type: src_mocks_taxi_mocks__WEBPACK_IMPORTED_MODULE_2__["TaxiMocks"] }
];
TaxiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TaxiService);



/***/ }),

/***/ "BmLX":
/*!*********************************!*\
  !*** ./src/mocks/taxi.mocks.ts ***!
  \*********************************/
/*! exports provided: TaxiMocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxiMocks", function() { return TaxiMocks; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let TaxiMocks = class TaxiMocks {
    constructor() {
        this.taxi = [
            {
                id: '1',
                name: 'Taxi',
                price: '10',
                icon: 'car-sport',
            },
            {
                id: '2',
                name: 'Chauffeur privé',
                price: '12',
                icon: 'man',
            },
            {
                id: '1',
                name: 'Taxi-Moto',
                price: '9',
                icon: 'bicycle',
            }
        ];
    }
    getTaxi() {
        return this.taxi;
    }
};
TaxiMocks = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TaxiMocks);



/***/ }),

/***/ "Bqg0":
/*!********************************************!*\
  !*** ./src/app/services/taxi/taxi.page.ts ***!
  \********************************************/
/*! exports provided: TaxiPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxiPage", function() { return TaxiPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_taxi_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./taxi.page.html */ "trRE");
/* harmony import */ var _taxi_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taxi.page.scss */ "32Ty");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _taxi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./taxi.service */ "BkQ7");






let TaxiPage = class TaxiPage {
    constructor(taxiService, alertController) {
        this.taxiService = taxiService;
        this.alertController = alertController;
        this.activeCommandeBottomSheet = true;
        this.activePayementBottomSheet = false;
        this.localstorageTaxi = [];
        this.currentDate = new Date();
        this.historiqueHide = true;
        this.historiqueShow = false;
    }
    shoppingAlert(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: message,
                cssClass: 'shoppingAlertMessage',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'OK ',
                        cssClass: 'shoppingAlert',
                        handler: (alertData) => {
                            const newCallEmergency = {
                                title: 'Commande de Taxi N° ' + (this.localstorageTaxi.length + 1),
                                user: 'moi',
                                date: this.currentDate,
                                vehicle: this.currentVehicle.name
                            };
                            this.localstorageTaxi.push(newCallEmergency);
                            localStorage.setItem('taxi', JSON.stringify(this.localstorageTaxi));
                            document.querySelector('#paymentBottomSheet').style.display = 'none';
                            // this.closeCardBottomSheet();
                        }
                    }
                ]
            });
            yield alert.present();
            document.querySelector('.alert-title').style.fontSize = '17px';
            document.querySelector('.alert-title').style.fontWeight = 'normal';
        });
    }
    showVehicles() {
        this.historiqueHide = true;
        this.historiqueShow = false;
    }
    showHistorique() {
        this.historiqueHide = false;
        this.historiqueShow = true;
    }
    openBottomSheet(vehicle) {
        document.querySelector('#BottomSheet').style.display = 'block';
        const animation = Object(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
            .addElement(document.querySelector('#BottomSheet'))
            .easing('ease-in-out')
            .duration(400)
            .direction('alternate')
            .keyframes([
            { height: '0px', transform: 'scale(1)', opacity: '1', },
            { height: '13rem', transform: 'scale(1)', opacity: '1' },
        ]);
        animation.play();
        this.currentVehicle = vehicle;
    }
    closeBottomSheet() {
        const animation = Object(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
            .addElement(document.querySelector('#BottomSheet'))
            .easing('ease-in-out')
            .duration(300)
            .direction('alternate')
            .keyframes([
            { height: '13rem', },
            { height: '0px', opacity: '0' },
        ]);
        animation.play();
    }
    openCardBottomSheet() {
        this.closeBottomSheet();
        document.querySelector('#paymentBottomSheet').style.display = 'block';
        const animation = Object(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
            .addElement(document.querySelector('#paymentBottomSheet'))
            .easing('ease-in-out')
            .duration(400)
            .direction('alternate')
            .keyframes([
            { height: '0px', transform: 'scale(1)', opacity: '1', },
            { height: '380px', transform: 'scale(1)', opacity: '1' },
        ]);
        animation.play();
    }
    closeCardBottomSheet() {
        const animation = Object(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["createAnimation"])()
            .addElement(document.querySelector('#paymentBottomSheet'))
            .easing('ease-in-out')
            .duration(300)
            .direction('alternate')
            .keyframes([
            { height: '380px', },
            { height: '0px', opacity: '0', },
        ]);
        animation.play();
    }
    ngOnInit() {
        this.taxi = this.taxiService.getTaxi();
        const convertedDate = (new Date()).getTimezoneOffset() * 60000;
        const localISOTimeCommercial = (new Date(Date.now() - convertedDate));
        const historicalDate = new Date(localISOTimeCommercial.setHours(localISOTimeCommercial.getHours() - 2)).toISOString().slice(0, -1);
        const secondHistoricalDate = new Date(localISOTimeCommercial.setHours(localISOTimeCommercial.getHours() - 1)).toISOString().slice(0, -1);
        this.localstorageTaxi = [
            {
                title: 'Commande de Taxi N° 1',
                user: 'admin',
                date: historicalDate,
                vehicle: 'Taxi'
            },
            {
                title: 'Commande de Taxi N° 2',
                user: 'moi',
                date: secondHistoricalDate,
                vehicle: 'Chauffeur privé'
            }
        ];
        if (!JSON.parse(localStorage.getItem('taxi'))) {
            localStorage.setItem('taxi', JSON.stringify(this.localstorageTaxi));
        }
        this.localstorageTaxi = JSON.parse(localStorage.getItem('taxi'));
    }
};
TaxiPage.ctorParameters = () => [
    { type: _taxi_service__WEBPACK_IMPORTED_MODULE_5__["TaxiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
TaxiPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-taxi',
        template: _raw_loader_taxi_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_taxi_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TaxiPage);



/***/ }),

/***/ "L6Rv":
/*!**********************************************!*\
  !*** ./src/app/services/taxi/taxi.module.ts ***!
  \**********************************************/
/*! exports provided: TaxiPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxiPageModule", function() { return TaxiPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _taxi_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./taxi-routing.module */ "QuOR");
/* harmony import */ var _taxi_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./taxi.page */ "Bqg0");







let TaxiPageModule = class TaxiPageModule {
};
TaxiPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _taxi_routing_module__WEBPACK_IMPORTED_MODULE_5__["TaxiPageRoutingModule"]
        ],
        declarations: [_taxi_page__WEBPACK_IMPORTED_MODULE_6__["TaxiPage"]]
    })
], TaxiPageModule);



/***/ }),

/***/ "QuOR":
/*!******************************************************!*\
  !*** ./src/app/services/taxi/taxi-routing.module.ts ***!
  \******************************************************/
/*! exports provided: TaxiPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxiPageRoutingModule", function() { return TaxiPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _taxi_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taxi.page */ "Bqg0");




const routes = [
    {
        path: '',
        component: _taxi_page__WEBPACK_IMPORTED_MODULE_3__["TaxiPage"]
    }
];
let TaxiPageRoutingModule = class TaxiPageRoutingModule {
};
TaxiPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TaxiPageRoutingModule);



/***/ }),

/***/ "trRE":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/services/taxi/taxi.page.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content >\n  <div class=\"principal\">\n      <ion-grid >\n        <ion-row  >\n          <ion-col size=\"2\"routerLink=\"/tabs/tab1\" *ngIf=\"historiqueHide\" >\n              <ion-icon class=\"icon\" name=\"chevron-back-outline\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"2\"*ngIf=\"historiqueShow\" (click)=\"showVehicles()\" >\n            <ion-icon class=\"icon\" name=\"chevron-back-outline\"></ion-icon>\n        </ion-col>\n          <ion-col class=\"FirstColumn\"  size=\"8\"  >\n            <span class=\"serviceTitle\" >Taxi</span>\n          </ion-col>\n          <ion-col size=\"2\" class=\"priceColumn\" *ngIf=\"historiqueHide\" >\n            <ion-icon class=\"icon\" name=\"time-outline\" (click)=\"showHistorique()\" ></ion-icon>\n        </ion-col>\n        </ion-row>\n      </ion-grid>\n    <ion-card *ngIf=\"historiqueHide\">\n\n      <ion-list lines=\"none\" *ngFor=\"let product of taxi\">\n        <ion-item (click)=\"openBottomSheet(product )\">\n          <ion-grid class=\"productGrid\">\n            <ion-row  class=\"ion-align-items-center\">\n              <ion-col size=\"2\" >\n                <ion-icon  class=\"taxiIcon\" name=\"{{product.icon}}-outline\"></ion-icon>\n              </ion-col>\n              <ion-col>\n               <span class=\"taxiName\">{{product.name}}</span>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n        <div class=\"divider\"></div>\n      </ion-list>\n\n    </ion-card>\n\n    <ion-card class=\"historiqueCard\" *ngIf=\"historiqueShow\">\n        <ion-list lines=\"none\" *ngFor=\"let taxiHistorique of localstorageTaxi \">\n          <ion-item>\n            <ion-grid>\n              <ion-row class=\"ion-align-items-center\">\n                <ion-col size=\"2\" class=\"FirstColumn\">\n                  <ion-icon class=\"iconHistorique\" name=\"car-sport-outline\"></ion-icon>\n                </ion-col>\n                <ion-col >\n                  <span class=\"taxiSpan\">{{taxiHistorique.title}} </span><br>\n                  <span class=\"taxiSpan\">{{taxiHistorique.vehicle}} </span><br>\n                  <span class=\"taxiSpan\">date : {{taxiHistorique.date| date:'d/MM/YYYY HH:mm '}}</span>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n          <div class=\"divider\"></div>\n        </ion-list>\n      </ion-card >\n  </div>\n    <div id=\"BottomSheet\" class=\"bottomSheet\" >\n      <ion-grid >\n        <ion-row>\n          <ion-col size=\"12\" (click)=\"closeBottomSheet()\" >\n            <div class=\"bottomSheetNameDiv\">\n                <p class=\"bottomSheetTaxiName\"> {{currentVehicle?.name}}</p>\n            </div>\n          </ion-col>\n          <ion-col size=\"9\">\n            <ion-icon  class=\"taxiIcon\" name=\"{{ currentVehicle?.icon}}-outline\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"3\" class=\"priceColumn\">\n            <span class=\"bottomSheetProductprice\">{{  currentVehicle?.price | number: '1.2-2'}}€</span>\n          </ion-col>\n          <ion-grid>\n          </ion-grid>\n          <ion-col class=\"counterColumn\" size=\"12\" >\n            <button (click)=\"openCardBottomSheet()\">\n              Commander\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <div id=\"paymentBottomSheet\" class=\"bottomSheet\">\n      <ion-grid >\n          <ion-row>\n            <ion-col size=\"12\"(click)=\"closeCardBottomSheet()\" >\n                <div class=\"bottomSheetNameDiv\">\n                    <p class=\"totalPriceSpanClass\">Paiement électronique</p>\n                </div>\n            </ion-col>\n            <ion-col size=\"12\" class=\"FirstColumn\">\n              <img src=\"assets/images/altocard.jpeg\">\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"paymentRow\">\n            <ion-col size=\"2\" class=\"FirstColumn\">\n              <ion-icon class=\"icon\" name=\"wifi-outline\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"10\" class=\"paragraphCenter\">\n              <span class=\"paymentMessage\">Veillez scanner l'interface de paiement</span>\n            </ion-col>\n            <ion-col size=\"12\" class=\"paymentColumn\">\n              <button class=\"payButton\" (click)=\"shoppingAlert('Paiement validé')\">Payer</button>\n            </ion-col>\n          </ion-row>\n      </ion-grid>\n    </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=services-taxi-taxi-module.js.map
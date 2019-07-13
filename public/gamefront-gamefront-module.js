(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gamefront-gamefront-module"],{

/***/ "./src/app/+gamefront/gamefront.component.ts":
/*!***************************************************!*\
  !*** ./src/app/+gamefront/gamefront.component.ts ***!
  \***************************************************/
/*! exports provided: GameFrontComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameFrontComponent", function() { return GameFrontComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var GameFrontComponent = /** @class */ (function () {
    function GameFrontComponent(router) {
        router.params.subscribe(function (params) {
            console.log("params:", params);
        });
    }
    GameFrontComponent.prototype.ngOnInit = function () {
    };
    GameFrontComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gamefront',
            template: __webpack_require__(/*! ./gamefront.template.html */ "./src/app/+gamefront/gamefront.template.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], GameFrontComponent);
    return GameFrontComponent;
}());



/***/ }),

/***/ "./src/app/+gamefront/gamefront.module.ts":
/*!************************************************!*\
  !*** ./src/app/+gamefront/gamefront.module.ts ***!
  \************************************************/
/*! exports provided: routes, GameFrontModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameFrontModule", function() { return GameFrontModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _gamefront_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gamefront.component */ "./src/app/+gamefront/gamefront.component.ts");






var routes = [
    { path: '', component: _gamefront_component__WEBPACK_IMPORTED_MODULE_5__["GameFrontComponent"] }
];
var GameFrontModule = /** @class */ (function () {
    function GameFrontModule() {
    }
    GameFrontModule.routes = routes;
    GameFrontModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            declarations: [
                _gamefront_component__WEBPACK_IMPORTED_MODULE_5__["GameFrontComponent"]
            ],
        })
    ], GameFrontModule);
    return GameFrontModule;
}());



/***/ }),

/***/ "./src/app/+gamefront/gamefront.template.html":
/*!****************************************************!*\
  !*** ./src/app/+gamefront/gamefront.template.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "gamefront"

/***/ })

}]);
//# sourceMappingURL=gamefront-gamefront-module.js.map
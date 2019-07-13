(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gamePlay-gamePlay-module"],{

/***/ "./src/app/+gamePlay/gamePlay.component.ts":
/*!*************************************************!*\
  !*** ./src/app/+gamePlay/gamePlay.component.ts ***!
  \*************************************************/
/*! exports provided: GamePlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamePlayComponent", function() { return GamePlayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var GamePlayComponent = /** @class */ (function () {
    function GamePlayComponent(router) {
        router.params.subscribe(function (params) {
            console.log("params:", params);
        });
    }
    GamePlayComponent.prototype.ngOnInit = function () {
    };
    GamePlayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'game-play',
            template: __webpack_require__(/*! ./gamePlay.template.html */ "./src/app/+gamePlay/gamePlay.template.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], GamePlayComponent);
    return GamePlayComponent;
}());



/***/ }),

/***/ "./src/app/+gamePlay/gamePlay.module.ts":
/*!**********************************************!*\
  !*** ./src/app/+gamePlay/gamePlay.module.ts ***!
  \**********************************************/
/*! exports provided: routes, GamePlayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamePlayModule", function() { return GamePlayModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _gamePlay_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gamePlay.component */ "./src/app/+gamePlay/gamePlay.component.ts");






var routes = [
    { path: '', component: _gamePlay_component__WEBPACK_IMPORTED_MODULE_5__["GamePlayComponent"] }
];
var GamePlayModule = /** @class */ (function () {
    function GamePlayModule() {
    }
    GamePlayModule.routes = routes;
    GamePlayModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            declarations: [
                _gamePlay_component__WEBPACK_IMPORTED_MODULE_5__["GamePlayComponent"]
            ],
        })
    ], GamePlayModule);
    return GamePlayModule;
}());



/***/ }),

/***/ "./src/app/+gamePlay/gamePlay.template.html":
/*!**************************************************!*\
  !*** ./src/app/+gamePlay/gamePlay.template.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "gamePlay"

/***/ })

}]);
//# sourceMappingURL=gamePlay-gamePlay-module.js.map
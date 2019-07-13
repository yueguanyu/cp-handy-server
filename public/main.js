(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./+caipiaobusiness/caipiaobusiness.module": [
		"./src/app/+caipiaobusiness/caipiaobusiness.module.ts",
		"caipiaobusiness-caipiaobusiness-module"
	],
	"./+caipiaohandyfront/caipiaohandyfront.module": [
		"./src/app/+caipiaohandyfront/caipiaohandyfront.module.ts",
		"caipiaohandyfront-caipiaohandyfront-module"
	],
	"./+gamePlay/gamePlay.module": [
		"./src/app/+gamePlay/gamePlay.module.ts",
		"gamePlay-gamePlay-module"
	],
	"./+gamefront/gamefront.module": [
		"./src/app/+gamefront/gamefront.module.ts",
		"gamefront-gamefront-module"
	],
	"./+user/user.module": [
		"./src/app/+user/user.module.ts",
		"user-user-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: APIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIService", function() { return APIService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");


// src/app/api.service.ts
var APIService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](APIService, _super);
    function APIService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._wsurl = 'http://www.jiu999.vip:5000/'; // websocket链接地址
        // private _wsurl: string = 'http://localhost:5000/'; // websocket链接地址
        _this._url = 'http://www.jdgj999.vip/'; // http请求地址
        _this.platform = "ce45035d-317e-4831-afe1-05444d9b040a";
        _this.storageKey = 'dafuhao_jwt';
        _this.storage = window.localStorage;
        _this.timeOut = 60000;
        _this.Errors = {
            '400': { message_en: 'Badrequest please try again later', message_zh: '请求失败，请重试' },
            '401': { message_en: 'you have error with authenticate, please reload your Token', message_zh: '登录授权失败，请重试' },
            '402': { message_en: 'you have wrong payment data, please check out again', message_zh: '请求数据有误，请检查数据内容' },
            '403': { message_en: 'Request forbidden', message_zh: '您访问的是被禁止的请求，请检查您的权限' },
            '404': { message_en: 'We don\'t find your resource', message_zh: '未找到相应内容，请重试' },
            '405': { message_en: 'We can not handle your request, please try again later', message_zh: '您访问的是不被允许的方法' },
            '406': { message_en: 'We can not handle your request, please try again later', message_zh: '您访问的是不被允许的方法' },
            '408': { message_en: 'Request timeout, please try again later', message_zh: '请求超时，请稍后重试' },
            '409': { message_en: 'Request conflict, please try again later', message_zh: '请求遇到冲突，请重试' },
            '411': { message_en: 'Your payment have error, please try again later', message_zh: '请求数据有误，请检查输入内容' },
            '422': { message_en: 'We can not handle your request, please try again later', message_zh: '请求数据有误，请检查输入内容' },
            '429': { message_en: 'TooManyRequests', message_zh: '请求过于频繁，请休息休息' },
            '500': { message_en: 'We can not handle your request, please try again later', message_zh: '请求遇到冲突，请重试' },
            '501': { message_en: 'We can not handle your request, please try again later', message_zh: '请求遇到冲突，请重试' },
            '502': { message_en: 'Bad gateway, please try again later', message_zh: '请求错误，请重试' },
            '503': { message_en: 'We can not handle your request, please try again later', message_zh: '没有找到可用资源，请重试' }
        };
        return _this;
    }
    Object.defineProperty(APIService.prototype, "url", {
        // private _url: string = 'http://localhost/'; // http请求地址
        get: function () {
            return this._url;
        },
        set: function (value) {
            this._url = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(APIService.prototype, "wsurl", {
        get: function () {
            return this._wsurl;
        },
        set: function (value) {
            this._wsurl = value;
        },
        enumerable: true,
        configurable: true
    });
    return APIService;
}(_config__WEBPACK_IMPORTED_MODULE_1__["LotteryConfig"]));



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _handy_handy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handy/handy.component */ "./src/app/handy/handy.component.ts");
/* harmony import */ var _hammer_card_hammer_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hammer-card/hammer-card.component */ "./src/app/hammer-card/hammer-card.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _pageNotFound_pageNotFound_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pageNotFound/pageNotFound.component */ "./src/app/pageNotFound/pageNotFound.component.ts");
/* harmony import */ var _permission_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./permission/auth.guard */ "./src/app/permission/auth.guard.ts");
/* harmony import */ var _handy_new_handy_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./handy-new/handy-new.component */ "./src/app/handy-new/handy-new.component.ts");









var routes = [
    { path: 'center', component: _handy_handy_component__WEBPACK_IMPORTED_MODULE_3__["HandyComponent"], canActivate: [_permission_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]], children: [
            { path: '', component: _hammer_card_hammer_card_component__WEBPACK_IMPORTED_MODULE_4__["HammerCardComponent"] },
            { path: 'game', loadChildren: './+gamefront/gamefront.module#GameFrontModule' },
            { path: 'game/play', loadChildren: './+gamePlay/gamePlay.module#GamePlayModule' },
        ] },
    { path: '', component: _handy_new_handy_new_component__WEBPACK_IMPORTED_MODULE_8__["HandyNewComponent"], canActivate: [_permission_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]], children: [
            { path: '', redirectTo: 'lotteryCenter', pathMatch: 'full' },
            { path: 'lotteryCenter', loadChildren: './+caipiaohandyfront/caipiaohandyfront.module#CaipiaoHandyFrontModule' },
            { path: 'lottery/play', loadChildren: './+caipiaobusiness/caipiaobusiness.module#CaipiaoBusinessModule' },
            { path: 'user', loadChildren: './+user/user.module#UserModule' }
        ] },
    { path: 'login', children: [
            { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], pathMatch: 'full' },
            { path: 'register', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], pathMatch: 'full' },
            { path: 'register/:referId', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], pathMatch: 'full' },
        ] },
    { path: '**', component: _pageNotFound_pageNotFound_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_normal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/normal.service */ "./src/app/normal.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(normalService, snackBar, router) {
        this.normalService = normalService;
        this.snackBar = snackBar;
        this.router = router;
        this.title = '彩票大富翁';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.normalService.socketConnect$.subscribe(function (connect) {
            if (connect) {
                _this.snackBar.open("服务器链接成功", "确定", {
                    duration: 2000,
                });
            }
            else {
                _this.snackBar.open("服务器断开链接，请检查网络状况", "确定", {
                    duration: 2000,
                });
            }
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_normal_service__WEBPACK_IMPORTED_MODULE_2__["NormalService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MyHammerConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyHammerConfig", function() { return MyHammerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _handy_handy_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./handy/handy.component */ "./src/app/handy/handy.component.ts");
/* harmony import */ var _messenger_messenger_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./messenger/messenger.component */ "./src/app/messenger/messenger.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _hammer_card_hammer_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./hammer-card/hammer-card.component */ "./src/app/hammer-card/hammer-card.component.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _pageNotFound_pageNotFound_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pageNotFound/pageNotFound.component */ "./src/app/pageNotFound/pageNotFound.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/tabs/tabs.component.ts");
/* harmony import */ var _lobby_lobby_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./lobby/lobby.component */ "./src/app/lobby/lobby.component.ts");
/* harmony import */ var _changepass_dialog_changepass_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./changepass-dialog/changepass-dialog.component */ "./src/app/changepass-dialog/changepass-dialog.component.ts");
/* harmony import */ var _customClasses_customClass__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./customClasses/customClass */ "./src/app/customClasses/customClass.ts");
/* harmony import */ var _permission_auth_guard__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./permission/auth.guard */ "./src/app/permission/auth.guard.ts");
/* harmony import */ var _handy_new_handy_new_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./handy-new/handy-new.component */ "./src/app/handy-new/handy-new.component.ts");



























var MyHammerConfig = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MyHammerConfig, _super);
    function MyHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            'swipe': { direction: hammerjs__WEBPACK_IMPORTED_MODULE_16__["DIRECTION_ALL"] }
        };
        return _this;
    }
    return MyHammerConfig;
}(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HammerGestureConfig"]));

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _pageNotFound_pageNotFound_component__WEBPACK_IMPORTED_MODULE_18__["PageNotFoundComponent"],
                _handy_handy_component__WEBPACK_IMPORTED_MODULE_10__["HandyComponent"],
                _lobby_lobby_component__WEBPACK_IMPORTED_MODULE_21__["LobbyComponent"],
                _messenger_messenger_component__WEBPACK_IMPORTED_MODULE_11__["Messenger"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                _changepass_dialog_changepass_dialog_component__WEBPACK_IMPORTED_MODULE_22__["ChangepassDialog"],
                _hammer_card_hammer_card_component__WEBPACK_IMPORTED_MODULE_15__["HammerCardComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
                _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_20__["TabsComponent"],
                _handy_new_handy_new_component__WEBPACK_IMPORTED_MODULE_25__["HandyNewComponent"],
            ],
            entryComponents: [_messenger_messenger_component__WEBPACK_IMPORTED_MODULE_11__["Messenger"], _changepass_dialog_changepass_dialog_component__WEBPACK_IMPORTED_MODULE_22__["ChangepassDialog"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["LayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatStepperModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
            ],
            providers: [
                _permission_auth_guard__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_8__["HashLocationStrategy"] },
                { provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HAMMER_GESTURE_CONFIG"], useClass: MyHammerConfig },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorIntl"], useClass: _customClasses_customClass__WEBPACK_IMPORTED_MODULE_23__["MatPaginatorIntlCro"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/changepass-dialog/changepass-dialog.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/changepass-dialog/changepass-dialog.component.ts ***!
  \******************************************************************/
/*! exports provided: ChangepassDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepassDialog", function() { return ChangepassDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ChangepassDialog = /** @class */ (function () {
    function ChangepassDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ChangepassDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'changepass-dialog',
            template: __webpack_require__(/*! ./changepass-dialog.template.html */ "./src/app/changepass-dialog/changepass-dialog.template.html"),
            styles: [__webpack_require__(/*! ./changepass-dialog.style.scss */ "./src/app/changepass-dialog/changepass-dialog.style.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], ChangepassDialog);
    return ChangepassDialog;
}());



/***/ }),

/***/ "./src/app/changepass-dialog/changepass-dialog.style.scss":
/*!****************************************************************!*\
  !*** ./src/app/changepass-dialog/changepass-dialog.style.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZXBhc3MtZGlhbG9nL2NoYW5nZXBhc3MtZGlhbG9nLnN0eWxlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/changepass-dialog/changepass-dialog.template.html":
/*!*******************************************************************!*\
  !*** ./src/app/changepass-dialog/changepass-dialog.template.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>密码修改</h1>\n<div mat-dialog-content>\n  <p>您确定要修改您的密码么,点击确定,您将会收到系统给您发送的邮件，请按照邮件上的指示进行修改密码操作。并且您会自动退出登录。</p>\n</div>\n<div mat-dialog-actions style=\"justify-content: flex-end;\">\n    <button mat-flat-button cdkFocusInitial [mat-dialog-close]=\"false\">取消</button>\n  <button mat-flat-button [mat-dialog-close]=\"true\">确定</button>\n</div>"

/***/ }),

/***/ "./src/app/config.ts":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: PostBet, Bet_list, LotteryConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostBet", function() { return PostBet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bet_list", function() { return Bet_list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotteryConfig", function() { return LotteryConfig; });
;
var PostBet = /** @class */ (function () {
    function PostBet() {
    }
    return PostBet;
}());

var Bet_list = /** @class */ (function () {
    function Bet_list() {
    }
    return Bet_list;
}());

var LotteryConfig = /** @class */ (function () {
    function LotteryConfig() {
        this.User = {};
        this.openDatas = {};
        this.ServerTime = {};
        this.selectedCountNum = 0; //当前选中号码注数
        this.selectedPercent = 0;
        this.handinput = "";
        this.post_bet = new PostBet();
        this.temp_bet_list = new Bet_list();
        this.listLotteries = [];
        this.bonusOpened = false;
        // 奖池
        this.BonusObj = {};
        // 声音配置
        this.backgroundMusic = false;
        this.openMusic = false;
        this.lotterMusic = false;
        this.actionMusic = false;
        // 
        this.notices = [];
        this.checkedPosNum = 0;
        this.fangAnNum = 1;
        this.SubInfos = {};
        this.lotteryPlays = [
            {
                lotteries: [4, 1, 7, 19, 20, 21, 51],
                playeds: [
                    {
                        groupId: 2,
                        groupName: "大小单双",
                        subs: []
                    },
                    {
                        groupId: 5,
                        groupName: "两面",
                        subs: []
                    },
                    {
                        groupId: 3,
                        groupName: "龙虎",
                        subs: []
                    },
                    {
                        groupId: 7,
                        groupName: "五星",
                        subs: []
                    },
                    {
                        groupId: 8,
                        groupName: "四星",
                        subs: []
                    },
                    {
                        groupId: 11,
                        groupName: "后三",
                        subs: []
                    },
                    {
                        groupId: 9,
                        groupName: "前三",
                        subs: []
                    },
                    {
                        groupId: 12,
                        groupName: "前二",
                        subs: []
                    },
                    {
                        groupId: 1,
                        groupName: "定位胆",
                        subs: []
                    },
                    {
                        groupId: 4,
                        groupName: "不定位",
                        subs: []
                    },
                    {
                        groupId: 13,
                        groupName: "任选二",
                        subs: []
                    },
                    {
                        groupId: 14,
                        groupName: "任选三",
                        subs: []
                    },
                    {
                        groupId: 15,
                        groupName: "任选四",
                        subs: []
                    }
                ]
            },
            {
                lotteries: [9, 22, 23, 24, 25, 52],
                playeds: [
                    {
                        groupId: 6,
                        groupName: "两面",
                        subs: []
                    },
                    {
                        groupId: 10,
                        groupName: "定位胆",
                        subs: []
                    },
                    {
                        groupId: 16,
                        groupName: "前一",
                        subs: []
                    },
                    {
                        groupId: 17,
                        groupName: "前二",
                        subs: []
                    },
                    {
                        groupId: 18,
                        groupName: "前三",
                        subs: []
                    }
                ]
            }
        ];
        this.subPlayOptions = {
            // 大小单双 pk10
            27: {
                input: false,
                optionsArr: [
                    {
                        pos: "冠军",
                        showBonus: true,
                        type: 1,
                        nums: [
                            {
                                name: "大"
                            },
                            {
                                name: "小"
                            },
                            {
                                name: "单"
                            },
                            {
                                name: "双"
                            }
                        ]
                    },
                    {
                        pos: "亚军",
                        showBonus: true,
                        type: 1,
                        nums: [
                            {
                                name: "大"
                            },
                            {
                                name: "小"
                            },
                            {
                                name: "单"
                            },
                            {
                                name: "双"
                            }
                        ]
                    },
                    {
                        pos: "季军",
                        showBonus: true,
                        type: 1,
                        nums: [
                            {
                                name: "大"
                            },
                            {
                                name: "小"
                            },
                            {
                                name: "单"
                            },
                            {
                                name: "双"
                            }
                        ]
                    },
                    {
                        pos: "第四名",
                        showBonus: true,
                        type: 1,
                        nums: [
                            {
                                name: "大"
                            },
                            {
                                name: "小"
                            },
                            {
                                name: "单"
                            },
                            {
                                name: "双"
                            }
                        ]
                    },
                    {
                        pos: "第五名",
                        showBonus: true,
                        type: 1,
                        nums: [
                            {
                                name: "大"
                            },
                            {
                                name: "小"
                            },
                            {
                                name: "单"
                            },
                            {
                                name: "双"
                            }
                        ]
                    },
                    {
                        pos: "第六名",
                        showBonus: true,
                        type: 1,
                        nums: [
                            {
                                name: "大"
                            },
                            {
                                name: "小"
                            },
                            {
                                name: "单"
                            },
                            {
                                name: "双"
                            }
                        ]
                    },
                    {
                        pos: "第七名",
                        showBonus: true,
                        type: 1,
                        nums: [
                            {
                                name: "大"
                            },
                            {
                                name: "小"
                            },
                            {
                                name: "单"
                            },
                            {
                                name: "双"
                            }
                        ]
                    },
                    {
                        pos: "第八名",
                        showBonus: true,
                        type: 1,
                        nums: [
                            {
                                name: "大"
                            },
                            {
                                name: "小"
                            },
                            {
                                name: "单"
                            },
                            {
                                name: "双"
                            }
                        ]
                    },
                    {
                        pos: "第九名",
                        showBonus: true,
                        type: 1,
                        nums: [
                            {
                                name: "大"
                            },
                            {
                                name: "小"
                            },
                            {
                                name: "单"
                            },
                            {
                                name: "双"
                            }
                        ]
                    },
                    {
                        pos: "第十名",
                        showBonus: true,
                        type: 1,
                        nums: [
                            {
                                name: "大"
                            },
                            {
                                name: "小"
                            },
                            {
                                name: "单"
                            },
                            {
                                name: "双"
                            }
                        ]
                    }
                ]
            },
            // 冠亚大小 pk10
            28: {
                input: false,
                optionsArr: [
                    {
                        pos: "冠亚大小",
                        showBonus: true,
                        type: 1,
                        nums: [
                            {
                                name: "冠亚大"
                            },
                            {
                                name: "冠亚小"
                            },
                            {
                                name: "冠亚单"
                            },
                            {
                                name: "冠亚双"
                            }
                        ]
                    }
                ]
            },
            // 冠亚和值 pk10
            29: {
                input: false,
                optionsArr: [
                    {
                        pos: "和值",
                        showBonus: true,
                        nums: [
                            {
                                name: "3",
                                bonusIndex: 0
                            },
                            {
                                name: "4",
                                bonusIndex: 1
                            },
                            {
                                name: "5",
                                bonusIndex: 2
                            },
                            {
                                name: "6",
                                bonusIndex: 3
                            },
                            {
                                name: "7",
                                bonusIndex: 4
                            },
                            {
                                name: "8",
                                bonusIndex: 5
                            },
                            {
                                name: "9",
                                bonusIndex: 6
                            },
                            {
                                name: "10",
                                bonusIndex: 7
                            },
                            {
                                name: "11",
                                bonusIndex: 8
                            },
                            {
                                name: "12",
                                bonusIndex: 9
                            },
                            {
                                name: "13",
                                bonusIndex: 10
                            },
                            {
                                name: "14",
                                bonusIndex: 11
                            },
                            {
                                name: "15",
                                bonusIndex: 12
                            },
                            {
                                name: "16",
                                bonusIndex: 13
                            },
                            {
                                name: "17",
                                bonusIndex: 14
                            },
                            {
                                name: "18",
                                bonusIndex: 15
                            },
                            {
                                name: "19",
                                bonusIndex: 16
                            }
                        ]
                    }
                ]
            },
            // 前三特选 pk10
            30: {
                input: false,
                optionsArr: [
                    {
                        pos: "前三",
                        showBonus: true,
                        type: 1,
                        nums: [
                            {
                                name: "全大"
                            },
                            {
                                name: "全小"
                            },
                            {
                                name: "全单"
                            },
                            {
                                name: "全双"
                            }
                        ]
                    }
                ]
            },
            // 龙虎 pk10
            31: {
                optionsArr: [
                    {
                        pos: "第一名vs第十名",
                        showBonus: false,
                        type: 1,
                        nums: [
                            {
                                name: "龙",
                                value: "0"
                            },
                            {
                                name: "虎",
                                value: "9"
                            }
                        ]
                    },
                    {
                        pos: "第二名vs第九名",
                        showBonus: false,
                        type: 1,
                        nums: [
                            {
                                name: "龙",
                                value: "1"
                            },
                            {
                                name: "虎",
                                value: "8"
                            }
                        ]
                    },
                    {
                        pos: "第三名vs第八名",
                        showBonus: false,
                        type: 1,
                        nums: [
                            {
                                name: "龙",
                                value: "2"
                            },
                            {
                                name: "虎",
                                value: "7"
                            }
                        ]
                    },
                    {
                        pos: "第四名vs第七名",
                        showBonus: false,
                        type: 1,
                        nums: [
                            {
                                name: "龙",
                                value: "3"
                            },
                            {
                                name: "虎",
                                value: "6"
                            }
                        ]
                    },
                    {
                        pos: "第五名vs第六名",
                        showBonus: false,
                        type: 1,
                        nums: [
                            {
                                name: "龙",
                                value: "4"
                            },
                            {
                                name: "虎",
                                value: "5"
                            }
                        ]
                    }
                ]
            },
            // 梭哈 ssc
            32: {
                optionsArr: [
                    {
                        pos: "梭哈",
                        showBonus: true,
                        type: 1,
                        nums: [
                            {
                                name: "五条",
                                bonusIndex: 0
                            },
                            {
                                name: "四条",
                                bonusIndex: 1
                            },
                            {
                                name: "葫芦",
                                bonusIndex: 2
                            },
                            {
                                name: "顺子",
                                bonusIndex: 3
                            },
                            {
                                name: "三条",
                                bonusIndex: 4
                            },
                            {
                                name: "两对",
                                bonusIndex: 5
                            },
                            {
                                name: "一对",
                                bonusIndex: 6
                            },
                            {
                                name: "散号",
                                bonusIndex: 7
                            }
                        ]
                    }
                ]
            },
            // 斗牛 ssc
            33: {
                optionsArr: [
                    {
                        pos: "斗牛",
                        showBonus: true,
                        type: 1,
                        nums: [
                            {
                                name: "没牛",
                                bonusIndex: 0
                            },
                            {
                                name: "牛一",
                                bonusIndex: 1
                            },
                            {
                                name: "牛二",
                                bonusIndex: 1
                            },
                            {
                                name: "牛三",
                                bonusIndex: 1
                            },
                            {
                                name: "牛四",
                                bonusIndex: 1
                            },
                            {
                                name: "牛五",
                                bonusIndex: 1
                            },
                            {
                                name: "牛六",
                                bonusIndex: 1
                            },
                            {
                                name: "牛七",
                                bonusIndex: 1
                            },
                            {
                                name: "牛八",
                                bonusIndex: 1
                            },
                            {
                                name: "牛九",
                                bonusIndex: 1
                            },
                            {
                                name: "牛牛",
                                bonusIndex: 1
                            },
                            {
                                name: "牛大",
                                bonusIndex: 2
                            },
                            {
                                name: "牛小",
                                bonusIndex: 2
                            },
                            {
                                name: "牛单",
                                bonusIndex: 2
                            },
                            {
                                name: "牛双",
                                bonusIndex: 2
                            }
                        ]
                    }
                ]
            },
            // 组合 ssc
            34: {
                optionsArr: [
                    {
                        pos: "前三",
                        showBonus: true,
                        type: 1,
                        nums: [
                            {
                                name: "豹子",
                                bonusIndex: 0
                            },
                            {
                                name: "顺子",
                                bonusIndex: 1
                            },
                            {
                                name: "对子",
                                bonusIndex: 2
                            },
                            {
                                name: "半顺",
                                bonusIndex: 3
                            },
                            {
                                name: "杂六",
                                bonusIndex: 4
                            }
                        ]
                    },
                    {
                        pos: "中三",
                        showBonus: true,
                        type: 1,
                        nums: [
                            {
                                name: "豹子",
                                bonusIndex: 0
                            },
                            {
                                name: "顺子",
                                bonusIndex: 1
                            },
                            {
                                name: "对子",
                                bonusIndex: 2
                            },
                            {
                                name: "半顺",
                                bonusIndex: 3
                            },
                            {
                                name: "杂六",
                                bonusIndex: 4
                            }
                        ]
                    },
                    {
                        pos: "后三",
                        showBonus: true,
                        type: 1,
                        nums: [
                            {
                                name: "豹子",
                                bonusIndex: 0
                            },
                            {
                                name: "顺子",
                                bonusIndex: 1
                            },
                            {
                                name: "对子",
                                bonusIndex: 2
                            },
                            {
                                name: "半顺",
                                bonusIndex: 3
                            },
                            {
                                name: "杂六",
                                bonusIndex: 4
                            }
                        ]
                    }
                ]
            },
            // 两面 ssc
            35: {
                optionsArr: [
                    {
                        pos: "总和/龙虎",
                        showBonus: true,
                        type: 1,
                        nums: [
                            {
                                name: "总和大"
                            },
                            {
                                name: "总和小"
                            },
                            {
                                name: "总和单"
                            },
                            {
                                name: "总和双"
                            },
                            {
                                name: "龙",
                                bonusIndex: 1
                            },
                            {
                                name: "虎",
                                bonusIndex: 1
                            },
                            {
                                name: "和",
                                bonusIndex: 2
                            }
                        ]
                    },
                    {
                        pos: "万位",
                        showBonus: true,
                        type: 1,
                        nums: [
                            {
                                name: "大"
                            },
                            {
                                name: "小"
                            },
                            {
                                name: "单"
                            },
                            {
                                name: "双"
                            }
                        ]
                    },
                    {
                        pos: "千位",
                        showBonus: true,
                        type: 1,
                        nums: [
                            {
                                name: "大"
                            },
                            {
                                name: "小"
                            },
                            {
                                name: "单"
                            },
                            {
                                name: "双"
                            }
                        ]
                    },
                    {
                        pos: "百位",
                        showBonus: true,
                        type: 1,
                        nums: [
                            {
                                name: "大"
                            },
                            {
                                name: "小"
                            },
                            {
                                name: "单"
                            },
                            {
                                name: "双"
                            }
                        ]
                    },
                    {
                        pos: "十位",
                        showBonus: true,
                        type: 1,
                        nums: [
                            {
                                name: "大"
                            },
                            {
                                name: "小"
                            },
                            {
                                name: "单"
                            },
                            {
                                name: "双"
                            }
                        ]
                    },
                    {
                        pos: "个位",
                        showBonus: true,
                        type: 1,
                        nums: [
                            {
                                name: "大"
                            },
                            {
                                name: "小"
                            },
                            {
                                name: "单"
                            },
                            {
                                name: "双"
                            }
                        ]
                    },
                ]
            },
            // 龙虎 ssc
            36: {
                optionsArr: [
                    {
                        pos: "万vs千",
                        showBonus: true,
                        type: 1,
                        nums: [
                            {
                                name: "龙"
                            },
                            {
                                name: "虎"
                            }
                        ]
                    },
                    {
                        pos: "万vs百",
                        showBonus: true,
                        type: 1,
                        nums: [
                            {
                                name: "龙"
                            },
                            {
                                name: "虎"
                            }
                        ]
                    },
                    {
                        pos: "万vs十",
                        showBonus: true,
                        type: 1,
                        nums: [
                            {
                                name: "龙"
                            },
                            {
                                name: "虎"
                            }
                        ]
                    },
                    {
                        pos: "万vs个",
                        showBonus: true,
                        type: 1,
                        nums: [
                            {
                                name: "龙"
                            },
                            {
                                name: "虎"
                            }
                        ]
                    },
                    {
                        pos: "千vs百",
                        showBonus: true,
                        type: 1,
                        nums: [
                            {
                                name: "龙"
                            },
                            {
                                name: "虎"
                            }
                        ]
                    },
                    {
                        pos: "千vs十",
                        showBonus: true,
                        type: 1,
                        nums: [
                            {
                                name: "龙"
                            },
                            {
                                name: "虎"
                            }
                        ]
                    },
                    {
                        pos: "千vs个",
                        showBonus: true,
                        type: 1,
                        nums: [
                            {
                                name: "龙"
                            },
                            {
                                name: "虎"
                            }
                        ]
                    },
                    {
                        pos: "百vs十",
                        showBonus: true,
                        type: 1,
                        nums: [
                            {
                                name: "龙"
                            },
                            {
                                name: "虎"
                            }
                        ]
                    },
                    {
                        pos: "百vs个",
                        showBonus: true,
                        type: 1,
                        nums: [
                            {
                                name: "龙"
                            },
                            {
                                name: "虎"
                            }
                        ]
                    },
                    {
                        pos: "十vs个",
                        showBonus: true,
                        type: 1,
                        nums: [
                            {
                                name: "龙"
                            },
                            {
                                name: "虎"
                            }
                        ]
                    }
                ]
            },
            // 定位胆 ssc
            37: {
                optionsArr: [
                    {
                        pos: "万位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            },
                            {
                                name: "1"
                            },
                            {
                                name: "2"
                            },
                            {
                                name: "3"
                            },
                            {
                                name: "4"
                            },
                            {
                                name: "5"
                            },
                            {
                                name: "6"
                            },
                            {
                                name: "7"
                            },
                            {
                                name: "8"
                            },
                            {
                                name: "9"
                            }
                        ]
                    },
                    {
                        pos: "千位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            },
                            {
                                name: "1"
                            },
                            {
                                name: "2"
                            },
                            {
                                name: "3"
                            },
                            {
                                name: "4"
                            },
                            {
                                name: "5"
                            },
                            {
                                name: "6"
                            },
                            {
                                name: "7"
                            },
                            {
                                name: "8"
                            },
                            {
                                name: "9"
                            }
                        ]
                    },
                    {
                        pos: "百位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            },
                            {
                                name: "1"
                            },
                            {
                                name: "2"
                            },
                            {
                                name: "3"
                            },
                            {
                                name: "4"
                            },
                            {
                                name: "5"
                            },
                            {
                                name: "6"
                            },
                            {
                                name: "7"
                            },
                            {
                                name: "8"
                            },
                            {
                                name: "9"
                            }
                        ]
                    },
                    {
                        pos: "十位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            },
                            {
                                name: "1"
                            },
                            {
                                name: "2"
                            },
                            {
                                name: "3"
                            },
                            {
                                name: "4"
                            },
                            {
                                name: "5"
                            },
                            {
                                name: "6"
                            },
                            {
                                name: "7"
                            },
                            {
                                name: "8"
                            },
                            {
                                name: "9"
                            }
                        ]
                    },
                    {
                        pos: "个位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            },
                            {
                                name: "1"
                            },
                            {
                                name: "2"
                            },
                            {
                                name: "3"
                            },
                            {
                                name: "4"
                            },
                            {
                                name: "5"
                            },
                            {
                                name: "6"
                            },
                            {
                                name: "7"
                            },
                            {
                                name: "8"
                            },
                            {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 直选复式 ssc
            38: {
                optionsArr: [
                    {
                        pos: "万位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            },
                            {
                                name: "1"
                            },
                            {
                                name: "2"
                            },
                            {
                                name: "3"
                            },
                            {
                                name: "4"
                            },
                            {
                                name: "5"
                            },
                            {
                                name: "6"
                            },
                            {
                                name: "7"
                            },
                            {
                                name: "8"
                            },
                            {
                                name: "9"
                            }
                        ]
                    },
                    {
                        pos: "千位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            },
                            {
                                name: "1"
                            },
                            {
                                name: "2"
                            },
                            {
                                name: "3"
                            },
                            {
                                name: "4"
                            },
                            {
                                name: "5"
                            },
                            {
                                name: "6"
                            },
                            {
                                name: "7"
                            },
                            {
                                name: "8"
                            },
                            {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 直选单式 ssc 前二
            39: {
                input: true,
                like: 38,
                optionsArr: []
            },
            // 直选和值 ssc
            40: {
                optionsArr: [
                    {
                        pos: "和值",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            },
                            {
                                name: "1"
                            },
                            {
                                name: "2"
                            },
                            {
                                name: "3"
                            },
                            {
                                name: "4"
                            },
                            {
                                name: "5"
                            },
                            {
                                name: "6"
                            },
                            {
                                name: "7"
                            },
                            {
                                name: "8"
                            },
                            {
                                name: "9"
                            },
                            {
                                name: "10"
                            },
                            {
                                name: "11"
                            },
                            {
                                name: "12"
                            },
                            {
                                name: "13"
                            },
                            {
                                name: "14"
                            },
                            {
                                name: "15"
                            },
                            {
                                name: "16"
                            },
                            {
                                name: "17"
                            },
                            {
                                name: "18"
                            }
                        ]
                    }
                ]
            },
            // 直选跨度 ssc
            41: {
                optionsArr: [
                    {
                        pos: "跨度",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            },
                            {
                                name: "1"
                            },
                            {
                                name: "2"
                            },
                            {
                                name: "3"
                            },
                            {
                                name: "4"
                            },
                            {
                                name: "5"
                            },
                            {
                                name: "6"
                            },
                            {
                                name: "7"
                            },
                            {
                                name: "8"
                            },
                            {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 组选复式 ssc
            46: {
                optionsArr: [
                    {
                        pos: "组选",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 组选单式 ssc 前二
            47: {
                input: true,
                like: 46,
                optionsArr: []
            },
            // 组选和值 ssc
            48: {
                optionsArr: [
                    {
                        pos: "和值",
                        showBonus: false,
                        nums: [
                            {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }, {
                                name: "10"
                            }, {
                                name: "11"
                            }, {
                                name: "12"
                            }, {
                                name: "13"
                            }, {
                                name: "14"
                            }, {
                                name: "15"
                            }, {
                                name: "16"
                            }, {
                                name: "17"
                            }
                        ]
                    }
                ]
            },
            // 组选包胆 ssc
            49: {
                optionsArr: [
                    {
                        pos: "包胆",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 直选复式 ssc 前三
            54: {
                optionsArr: [
                    {
                        pos: "万位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }, {
                        pos: "千位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }, {
                        pos: "百位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 直选单式 ssc 前三
            55: {
                input: true,
                like: 54,
                optionsArr: []
            },
            // 直选和值 ssc 前三
            56: {
                optionsArr: [
                    {
                        pos: "和值",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }, {
                                name: "10"
                            }, {
                                name: "11"
                            }, {
                                name: "12"
                            }, {
                                name: "13"
                            }, {
                                name: "14"
                            }, {
                                name: "15"
                            }, {
                                name: "16"
                            }, {
                                name: "17"
                            }, {
                                name: "18"
                            }, {
                                name: "19"
                            }, {
                                name: "20"
                            }, {
                                name: "21"
                            }, {
                                name: "22"
                            }, {
                                name: "23"
                            }, {
                                name: "24"
                            }, {
                                name: "25"
                            }, {
                                name: "26"
                            }, {
                                name: "27"
                            }
                        ]
                    }
                ]
            },
            // 直选跨度 ssc 前三
            57: {
                optionsArr: [
                    {
                        pos: "跨度",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 前三组合 ssc 前三
            58: {
                optionsArr: [
                    {
                        pos: "万位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }, {
                        pos: "千位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }, {
                        pos: "百位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 组三复式 ssc 前三
            59: {
                optionsArr: [
                    {
                        pos: "组三",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 组三单式 ssc 前三
            61: {
                input: true,
                like: 59,
                optionsArr: []
            },
            // 组六复式 ssc 前三
            60: {
                optionsArr: [
                    {
                        pos: "组六",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 组六单式 ssc 前三
            62: {
                input: true,
                like: 60,
                optionsArr: []
            },
            // 组选和值 ssc 前三
            63: {
                optionsArr: [
                    {
                        pos: "和值",
                        showBonus: false,
                        nums: [
                            {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }, {
                                name: "10"
                            }, {
                                name: "11"
                            }, {
                                name: "12"
                            }, {
                                name: "13"
                            }, {
                                name: "14"
                            }, {
                                name: "15"
                            }, {
                                name: "16"
                            }, {
                                name: "17"
                            }, {
                                name: "18"
                            }, {
                                name: "19"
                            }, {
                                name: "20"
                            }, {
                                name: "21"
                            }, {
                                name: "22"
                            }, {
                                name: "23"
                            }, {
                                name: "24"
                            }, {
                                name: "25"
                            }, {
                                name: "26"
                            }
                        ]
                    }
                ]
            },
            // 组选包胆 ssc 前三
            65: {
                optionsArr: [
                    {
                        pos: "包胆",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 和值尾数 ssc 前三
            67: {
                optionsArr: [
                    {
                        pos: "和值尾数",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 特殊号 ssc 前三
            68: {
                optionsArr: [
                    {
                        pos: "特殊号",
                        showBonus: true,
                        type: 1,
                        nums: [
                            {
                                name: "豹子",
                                bonusIndex: 0
                            }, {
                                name: "顺子",
                                bonusIndex: 1
                            }, {
                                name: "对子",
                                bonusIndex: 2
                            }
                        ]
                    }
                ]
            },
            // 直选复式 ssc 后三
            88: {
                optionsArr: [
                    {
                        pos: "百位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }, {
                        pos: "十位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }, {
                        pos: "个位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 直选单式 ssc 后三
            89: {
                input: true,
                like: 88,
                optionsArr: []
            },
            // 直选和值 ssc 后三
            90: {
                optionsArr: [
                    {
                        pos: "和值",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }, {
                                name: "10"
                            }, {
                                name: "11"
                            }, {
                                name: "12"
                            }, {
                                name: "13"
                            }, {
                                name: "14"
                            }, {
                                name: "15"
                            }, {
                                name: "16"
                            }, {
                                name: "17"
                            }, {
                                name: "18"
                            }, {
                                name: "19"
                            }, {
                                name: "20"
                            }, {
                                name: "21"
                            }, {
                                name: "22"
                            }, {
                                name: "23"
                            }, {
                                name: "24"
                            }, {
                                name: "25"
                            }, {
                                name: "26"
                            }, {
                                name: "27"
                            }
                        ]
                    }
                ]
            },
            // 直选跨度 ssc 后三
            91: {
                optionsArr: [
                    {
                        pos: "跨度",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 后三组合 ssc 后三
            92: {
                optionsArr: [
                    {
                        pos: "百位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }, {
                        pos: "十位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }, {
                        pos: "个位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 组三复式 ssc 后三
            93: {
                optionsArr: [
                    {
                        pos: "组三",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 组三单式 ssc 后三
            95: {
                input: true,
                like: 93,
                optionsArr: []
            },
            // 组六复式 ssc 后三
            94: {
                optionsArr: [
                    {
                        pos: "组六",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 组六单式 ssc 后三
            96: {
                input: true,
                like: 94,
                optionsArr: []
            },
            // 组选和值 ssc 后三
            97: {
                optionsArr: [
                    {
                        pos: "和值",
                        showBonus: false,
                        nums: [
                            {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }, {
                                name: "10"
                            }, {
                                name: "11"
                            }, {
                                name: "12"
                            }, {
                                name: "13"
                            }, {
                                name: "14"
                            }, {
                                name: "15"
                            }, {
                                name: "16"
                            }, {
                                name: "17"
                            }, {
                                name: "18"
                            }, {
                                name: "19"
                            }, {
                                name: "20"
                            }, {
                                name: "21"
                            }, {
                                name: "22"
                            }, {
                                name: "23"
                            }, {
                                name: "24"
                            }, {
                                name: "25"
                            }, {
                                name: "26"
                            }
                        ]
                    }
                ]
            },
            // 组选包胆 ssc 后三
            99: {
                optionsArr: [
                    {
                        pos: "包胆",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 和值尾数 ssc 后三
            101: {
                optionsArr: [
                    {
                        pos: "和值尾数",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 特殊号 ssc 后三
            102: {
                optionsArr: [
                    {
                        pos: "特殊号",
                        showBonus: true,
                        type: 1,
                        nums: [
                            {
                                name: "豹子",
                                bonusIndex: 0
                            }, {
                                name: "顺子",
                                bonusIndex: 1
                            }, {
                                name: "对子",
                                bonusIndex: 2
                            }
                        ]
                    }
                ]
            },
            // 直选复式 ssc 四星
            105: {
                optionsArr: [
                    {
                        pos: "千位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }, {
                        pos: "百位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }, {
                        pos: "十位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }, {
                        pos: "个位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 直选单式 ssc 四星
            106: {
                input: true,
                like: 105,
                optionsArr: []
            },
            // 直选复式 ssc 五星
            107: {
                optionsArr: [
                    {
                        pos: "万位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }, {
                        pos: "千位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }, {
                        pos: "百位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }, {
                        pos: "十位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }, {
                        pos: "个位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 直选单式 ssc 五星
            108: {
                input: true,
                like: 107,
                optionsArr: []
            },
            // 后二大小单双 ssc 大小单双
            109: {
                optionsArr: [
                    {
                        pos: "十位",
                        showBonus: false,
                        type: 1,
                        nums: [
                            {
                                name: "大"
                            }, {
                                name: "小"
                            }, {
                                name: "单"
                            }, {
                                name: "双"
                            }
                        ]
                    }, {
                        pos: "个位",
                        showBonus: false,
                        type: 1,
                        nums: [
                            {
                                name: "大"
                            }, {
                                name: "小"
                            }, {
                                name: "单"
                            }, {
                                name: "双"
                            }
                        ]
                    }
                ]
            },
            // 后三大小单双 ssc 大小单双
            110: {
                optionsArr: [
                    {
                        pos: "百位",
                        showBonus: false,
                        type: 1,
                        nums: [
                            {
                                name: "大"
                            }, {
                                name: "小"
                            }, {
                                name: "单"
                            }, {
                                name: "双"
                            }
                        ]
                    }, {
                        pos: "十位",
                        showBonus: false,
                        type: 1,
                        nums: [
                            {
                                name: "大"
                            }, {
                                name: "小"
                            }, {
                                name: "单"
                            }, {
                                name: "双"
                            }
                        ]
                    }, {
                        pos: "个位",
                        showBonus: false,
                        type: 1,
                        nums: [
                            {
                                name: "大"
                            }, {
                                name: "小"
                            }, {
                                name: "单"
                            }, {
                                name: "双"
                            }
                        ]
                    }
                ]
            },
            // 前二大小单双 ssc 大小单双
            111: {
                optionsArr: [
                    {
                        pos: "万位",
                        showBonus: false,
                        type: 1,
                        nums: [
                            {
                                name: "大"
                            }, {
                                name: "小"
                            }, {
                                name: "单"
                            }, {
                                name: "双"
                            }
                        ]
                    }, {
                        pos: "千位",
                        showBonus: false,
                        type: 1,
                        nums: [
                            {
                                name: "大"
                            }, {
                                name: "小"
                            }, {
                                name: "单"
                            }, {
                                name: "双"
                            }
                        ]
                    }
                ]
            },
            // 前三大小单双 ssc 大小单双
            112: {
                optionsArr: [
                    {
                        pos: "万位",
                        showBonus: false,
                        type: 1,
                        nums: [
                            {
                                name: "大"
                            }, {
                                name: "小"
                            }, {
                                name: "单"
                            }, {
                                name: "双"
                            }
                        ]
                    }, {
                        pos: "千位",
                        showBonus: false,
                        type: 1,
                        nums: [
                            {
                                name: "大"
                            }, {
                                name: "小"
                            }, {
                                name: "单"
                            }, {
                                name: "双"
                            }
                        ]
                    }, {
                        pos: "百位",
                        showBonus: false,
                        type: 1,
                        nums: [
                            {
                                name: "大"
                            }, {
                                name: "小"
                            }, {
                                name: "单"
                            }, {
                                name: "双"
                            }
                        ]
                    }
                ]
            },
            // 前三一码 ssc 不定位
            113: {
                optionsArr: [
                    {
                        pos: "不定位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 前三二码 ssc 不定位
            114: {
                optionsArr: [
                    {
                        pos: "不定位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 后三一码 ssc 不定位
            115: {
                optionsArr: [
                    {
                        pos: "不定位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 后三二码 ssc 不定位
            116: {
                optionsArr: [
                    {
                        pos: "不定位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 前四一码 ssc 不定位
            117: {
                optionsArr: [
                    {
                        pos: "不定位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 前四二码 ssc 不定位
            118: {
                optionsArr: [
                    {
                        pos: "不定位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 五星一码 ssc 不定位
            119: {
                optionsArr: [
                    {
                        pos: "不定位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 五星二码 ssc 不定位
            120: {
                optionsArr: [
                    {
                        pos: "不定位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 五星三码 ssc 不定位
            121: {
                optionsArr: [
                    {
                        pos: "不定位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 直选复式 ssc 任选二
            122: {
                optionsArr: [
                    {
                        pos: "万位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }, {
                        pos: "千位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }, {
                        pos: "百位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }, {
                        pos: "十位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }, {
                        pos: "个位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 直选单式 ssc 任选二
            123: {
                betPos: ["万位", "千位", "百位", "十位", "个位"],
                posCheck: [0, 0, 0, 1, 1],
                input: true,
                like: 122,
                optionsArr: []
            },
            // 直选和值 ssc 任选二
            124: {
                betPos: ["万位", "千位", "百位", "十位", "个位"],
                posCheck: [0, 0, 0, 1, 1],
                optionsArr: [
                    {
                        pos: "和值",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }, {
                                name: "10"
                            }, {
                                name: "11"
                            }, {
                                name: "12"
                            }, {
                                name: "13"
                            }, {
                                name: "14"
                            }, {
                                name: "15"
                            }, {
                                name: "16"
                            }, {
                                name: "17"
                            }, {
                                name: "18"
                            }
                        ]
                    }
                ]
            },
            // 组选复式 ssc 任选二
            125: {
                betPos: ["万位", "千位", "百位", "十位", "个位"],
                posCheck: [0, 0, 0, 1, 1],
                optionsArr: [
                    {
                        pos: "组选",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 组选单式 ssc 任选二
            126: {
                betPos: ["万位", "千位", "百位", "十位", "个位"],
                posCheck: [0, 0, 0, 1, 1],
                input: true,
                like: 125,
                optionsArr: []
            },
            // 组选和值 ssc 任选二
            127: {
                betPos: ["万位", "千位", "百位", "十位", "个位"],
                posCheck: [0, 0, 0, 1, 1],
                optionsArr: [
                    {
                        pos: "和值",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }, {
                                name: "10"
                            }, {
                                name: "11"
                            }, {
                                name: "12"
                            }, {
                                name: "13"
                            }, {
                                name: "14"
                            }, {
                                name: "15"
                            }, {
                                name: "16"
                            }, {
                                name: "17"
                            }
                        ]
                    }
                ]
            },
            // 直选复式 ssc 任选三
            128: {
                optionsArr: [
                    {
                        pos: "万位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }, {
                        pos: "千位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }, {
                        pos: "百位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }, {
                        pos: "十位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }, {
                        pos: "个位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 直选单式 ssc 任选三
            129: {
                betPos: ["万位", "千位", "百位", "十位", "个位"],
                posCheck: [0, 0, 1, 1, 1],
                input: true,
                like: 128,
                optionsArr: []
            },
            // 直选和值 ssc 任选三
            130: {
                betPos: ["万位", "千位", "百位", "十位", "个位"],
                posCheck: [0, 0, 1, 1, 1],
                optionsArr: [
                    {
                        pos: "和值",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }, {
                                name: "10"
                            }, {
                                name: "11"
                            }, {
                                name: "12"
                            }, {
                                name: "13"
                            }, {
                                name: "14"
                            }, {
                                name: "15"
                            }, {
                                name: "16"
                            }, {
                                name: "17"
                            }, {
                                name: "18"
                            }, {
                                name: "19"
                            }, {
                                name: "20"
                            }, {
                                name: "21"
                            }, {
                                name: "22"
                            }, {
                                name: "23"
                            }, {
                                name: "24"
                            }, {
                                name: "25"
                            }, {
                                name: "26"
                            }, {
                                name: "27"
                            }
                        ]
                    }
                ]
            },
            // 组三复式 ssc 任选三
            131: {
                betPos: ["万位", "千位", "百位", "十位", "个位"],
                posCheck: [0, 0, 1, 1, 1],
                optionsArr: [
                    {
                        pos: "组三",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 组三单式 ssc 任选三
            132: {
                betPos: ["万位", "千位", "百位", "十位", "个位"],
                posCheck: [0, 0, 1, 1, 1],
                input: true,
                like: 131,
                optionsArr: []
            },
            // 组六复式 ssc 任选三
            133: {
                betPos: ["万位", "千位", "百位", "十位", "个位"],
                posCheck: [0, 0, 1, 1, 1],
                optionsArr: [
                    {
                        pos: "组六",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 组六单式 ssc 任选三
            134: {
                betPos: ["万位", "千位", "百位", "十位", "个位"],
                posCheck: [0, 0, 1, 1, 1],
                input: true,
                like: 133,
                optionsArr: []
            },
            // 组选和值 ssc 任选三
            137: {
                betPos: ["万位", "千位", "百位", "十位", "个位"],
                posCheck: [0, 0, 1, 1, 1],
                optionsArr: [
                    {
                        pos: "和值",
                        showBonus: false,
                        nums: [
                            {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }, {
                                name: "10"
                            }, {
                                name: "11"
                            }, {
                                name: "12"
                            }, {
                                name: "13"
                            }, {
                                name: "14"
                            }, {
                                name: "15"
                            }, {
                                name: "16"
                            }, {
                                name: "17"
                            }, {
                                name: "18"
                            }, {
                                name: "19"
                            }, {
                                name: "20"
                            }, {
                                name: "21"
                            }, {
                                name: "22"
                            }, {
                                name: "23"
                            }, {
                                name: "24"
                            }, {
                                name: "25"
                            }, {
                                name: "26"
                            }
                        ]
                    }
                ]
            },
            // 直选复式 ssc 任选四
            139: {
                optionsArr: [
                    {
                        pos: "万位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }, {
                        pos: "千位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }, {
                        pos: "百位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }, {
                        pos: "十位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }, {
                        pos: "个位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 直选单式 ssc 任选四
            140: {
                betPos: ["万位", "千位", "百位", "十位", "个位"],
                posCheck: [0, 1, 1, 1, 1],
                input: true,
                like: 139,
                optionsArr: []
            },
            // 组选24 ssc 任选四
            141: {
                betPos: ["万位", "千位", "百位", "十位", "个位"],
                posCheck: [0, 1, 1, 1, 1],
                optionsArr: [
                    {
                        pos: "组选24",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 组选12 ssc 任选四
            142: {
                betPos: ["万位", "千位", "百位", "十位", "个位"],
                posCheck: [0, 1, 1, 1, 1],
                optionsArr: [
                    {
                        pos: "二重号",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }, {
                        pos: "单号",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 组选6 ssc 任选四
            143: {
                betPos: ["万位", "千位", "百位", "十位", "个位"],
                posCheck: [0, 1, 1, 1, 1],
                optionsArr: [
                    {
                        pos: "二重号",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 组选4 ssc 任选四
            144: {
                betPos: ["万位", "千位", "百位", "十位", "个位"],
                posCheck: [0, 1, 1, 1, 1],
                optionsArr: [
                    {
                        pos: "三重号",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }, {
                        pos: "单号",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 直选复式 pk10 前一
            222: {
                optionsArr: [
                    {
                        pos: "冠军",
                        showBonus: false,
                        nums: [
                            {
                                name: "01"
                            }, {
                                name: "02"
                            }, {
                                name: "03"
                            }, {
                                name: "04"
                            }, {
                                name: "05"
                            }, {
                                name: "06"
                            }, {
                                name: "07"
                            }, {
                                name: "08"
                            }, {
                                name: "09"
                            }, {
                                name: "10"
                            }
                        ]
                    }
                ]
            },
            // 直选复式 pk10 前二
            223: {
                optionsArr: [
                    {
                        pos: "冠军",
                        showBonus: false,
                        nums: [
                            {
                                name: "01"
                            }, {
                                name: "02"
                            }, {
                                name: "03"
                            }, {
                                name: "04"
                            }, {
                                name: "05"
                            }, {
                                name: "06"
                            }, {
                                name: "07"
                            }, {
                                name: "08"
                            }, {
                                name: "09"
                            }, {
                                name: "10"
                            }
                        ]
                    }, {
                        pos: "亚军",
                        showBonus: false,
                        nums: [
                            {
                                name: "01"
                            }, {
                                name: "02"
                            }, {
                                name: "03"
                            }, {
                                name: "04"
                            }, {
                                name: "05"
                            }, {
                                name: "06"
                            }, {
                                name: "07"
                            }, {
                                name: "08"
                            }, {
                                name: "09"
                            }, {
                                name: "10"
                            }
                        ]
                    }
                ]
            },
            // 直选复式 pk10 前三
            224: {
                optionsArr: [
                    {
                        pos: "冠军",
                        showBonus: false,
                        nums: [
                            {
                                name: "01"
                            }, {
                                name: "02"
                            }, {
                                name: "03"
                            }, {
                                name: "04"
                            }, {
                                name: "05"
                            }, {
                                name: "06"
                            }, {
                                name: "07"
                            }, {
                                name: "08"
                            }, {
                                name: "09"
                            }, {
                                name: "10"
                            }
                        ]
                    }, {
                        pos: "亚军",
                        showBonus: false,
                        nums: [
                            {
                                name: "01"
                            }, {
                                name: "02"
                            }, {
                                name: "03"
                            }, {
                                name: "04"
                            }, {
                                name: "05"
                            }, {
                                name: "06"
                            }, {
                                name: "07"
                            }, {
                                name: "08"
                            }, {
                                name: "09"
                            }, {
                                name: "10"
                            }
                        ]
                    }, {
                        pos: "季军",
                        showBonus: false,
                        nums: [
                            {
                                name: "01"
                            }, {
                                name: "02"
                            }, {
                                name: "03"
                            }, {
                                name: "04"
                            }, {
                                name: "05"
                            }, {
                                name: "06"
                            }, {
                                name: "07"
                            }, {
                                name: "08"
                            }, {
                                name: "09"
                            }, {
                                name: "10"
                            }
                        ]
                    }
                ]
            },
            // 定位胆 pk10 定位胆
            227: {
                optionsArr: [
                    {
                        pos: "冠军",
                        showBonus: false,
                        nums: [
                            {
                                name: "01"
                            }, {
                                name: "02"
                            }, {
                                name: "03"
                            }, {
                                name: "04"
                            }, {
                                name: "05"
                            }, {
                                name: "06"
                            }, {
                                name: "07"
                            }, {
                                name: "08"
                            }, {
                                name: "09"
                            }, {
                                name: "10"
                            }
                        ]
                    }, {
                        pos: "亚军",
                        showBonus: false,
                        nums: [
                            {
                                name: "01"
                            }, {
                                name: "02"
                            }, {
                                name: "03"
                            }, {
                                name: "04"
                            }, {
                                name: "05"
                            }, {
                                name: "06"
                            }, {
                                name: "07"
                            }, {
                                name: "08"
                            }, {
                                name: "09"
                            }, {
                                name: "10"
                            }
                        ]
                    }, {
                        pos: "季军",
                        showBonus: false,
                        nums: [
                            {
                                name: "01"
                            }, {
                                name: "02"
                            }, {
                                name: "03"
                            }, {
                                name: "04"
                            }, {
                                name: "05"
                            }, {
                                name: "06"
                            }, {
                                name: "07"
                            }, {
                                name: "08"
                            }, {
                                name: "09"
                            }, {
                                name: "10"
                            }
                        ]
                    }, {
                        pos: "第四名",
                        showBonus: false,
                        nums: [
                            {
                                name: "01"
                            }, {
                                name: "02"
                            }, {
                                name: "03"
                            }, {
                                name: "04"
                            }, {
                                name: "05"
                            }, {
                                name: "06"
                            }, {
                                name: "07"
                            }, {
                                name: "08"
                            }, {
                                name: "09"
                            }, {
                                name: "10"
                            }
                        ]
                    }, {
                        pos: "第五名",
                        showBonus: false,
                        nums: [
                            {
                                name: "01"
                            }, {
                                name: "02"
                            }, {
                                name: "03"
                            }, {
                                name: "04"
                            }, {
                                name: "05"
                            }, {
                                name: "06"
                            }, {
                                name: "07"
                            }, {
                                name: "08"
                            }, {
                                name: "09"
                            }, {
                                name: "10"
                            }
                        ]
                    }, {
                        pos: "第六名",
                        showBonus: false,
                        nums: [
                            {
                                name: "01"
                            }, {
                                name: "02"
                            }, {
                                name: "03"
                            }, {
                                name: "04"
                            }, {
                                name: "05"
                            }, {
                                name: "06"
                            }, {
                                name: "07"
                            }, {
                                name: "08"
                            }, {
                                name: "09"
                            }, {
                                name: "10"
                            }
                        ]
                    }, {
                        pos: "第七名",
                        showBonus: false,
                        nums: [
                            {
                                name: "01"
                            }, {
                                name: "02"
                            }, {
                                name: "03"
                            }, {
                                name: "04"
                            }, {
                                name: "05"
                            }, {
                                name: "06"
                            }, {
                                name: "07"
                            }, {
                                name: "08"
                            }, {
                                name: "09"
                            }, {
                                name: "10"
                            }
                        ]
                    }, {
                        pos: "第八名",
                        showBonus: false,
                        nums: [
                            {
                                name: "01"
                            }, {
                                name: "02"
                            }, {
                                name: "03"
                            }, {
                                name: "04"
                            }, {
                                name: "05"
                            }, {
                                name: "06"
                            }, {
                                name: "07"
                            }, {
                                name: "08"
                            }, {
                                name: "09"
                            }, {
                                name: "10"
                            }
                        ]
                    }, {
                        pos: "第九名",
                        showBonus: false,
                        nums: [
                            {
                                name: "01"
                            }, {
                                name: "02"
                            }, {
                                name: "03"
                            }, {
                                name: "04"
                            }, {
                                name: "05"
                            }, {
                                name: "06"
                            }, {
                                name: "07"
                            }, {
                                name: "08"
                            }, {
                                name: "09"
                            }, {
                                name: "10"
                            }
                        ]
                    }, {
                        pos: "第十名",
                        showBonus: false,
                        nums: [
                            {
                                name: "01"
                            }, {
                                name: "02"
                            }, {
                                name: "03"
                            }, {
                                name: "04"
                            }, {
                                name: "05"
                            }, {
                                name: "06"
                            }, {
                                name: "07"
                            }, {
                                name: "08"
                            }, {
                                name: "09"
                            }, {
                                name: "10"
                            }
                        ]
                    }
                ]
            },
            // 后四一码
            244: {
                optionsArr: [
                    {
                        pos: "不定位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
            // 后四二码
            245: {
                optionsArr: [
                    {
                        pos: "不定位",
                        showBonus: false,
                        nums: [
                            {
                                name: "0"
                            }, {
                                name: "1"
                            }, {
                                name: "2"
                            }, {
                                name: "3"
                            }, {
                                name: "4"
                            }, {
                                name: "5"
                            }, {
                                name: "6"
                            }, {
                                name: "7"
                            }, {
                                name: "8"
                            }, {
                                name: "9"
                            }
                        ]
                    }
                ]
            },
        };
        this.CountOptionSelectedNum = {
            // 时时彩的
            //前三、后三 直选和值
            Sum_90_56: { "0": 1, "1": 3, "2": 6, "3": 10, "4": 15, "5": 21, "6": 28, "7": 36, "8": 45, "9": 55, "10": 63, "11": 69, "12": 73, "13": 75, "14": 75, "15": 73, "16": 69, "17": 63, "18": 55, "19": 45, "20": 36, "21": 28, "22": 21, "23": 15, "24": 10, "25": 6, "26": 3, "27": 1 },
            //直选跨度
            Skip91_57: { "0": 10, "1": 54, "2": 96, "3": 126, "4": 144, "5": 150, "6": 144, "7": 126, "8": 96, "9": 54 },
            //后三、前三组选和值
            Sum_97_63: { "1": 1, "2": 2, "3": 2, "4": 4, "5": 5, "6": 6, "7": 8, "8": 10, "9": 11, "10": 13, "11": 14, "12": 14, "13": 15, "14": 15, "15": 14, "16": 14, "17": 13, "18": 11, "19": 10, "20": 8, "21": 6, "22": 5, "23": 4, "24": 2, "25": 2, "26": 1 },
            //前二直选和值
            Sum_40: { "0": 1, "1": 2, "2": 3, "3": 4, "4": 5, "5": 6, "6": 7, "7": 8, "8": 9, "9": 10, "10": 9, "11": 8, "12": 7, "13": 6, "14": 5, "15": 4, "16": 3, "17": 2, "18": 1 },
            //前二直选跨度
            Skip41: { "0": 10, "1": 18, "2": 16, "3": 14, "4": 12, "5": 10, "6": 8, "7": 6, "8": 4, "9": 2 },
            //前二组选和值
            Sum48: { "0": 0, "1": 1, "2": 1, "3": 2, "4": 2, "5": 3, "6": 3, "7": 4, "8": 4, "9": 5, "10": 4, "11": 4, "12": 3, "13": 3, "14": 2, "15": 2, "16": 1, "17": 1, "18": 0 },
            //任二直选和值
            Sum124: { "0": 1, "1": 2, "2": 3, "3": 4, "4": 5, "5": 6, "6": 7, "7": 8, "8": 9, "9": 10, "10": 9, "11": 8, "12": 7, "13": 6, "14": 5, "15": 4, "16": 3, "17": 2, "18": 1 },
            //任二组选和值
            Sum127: { "0": 0, "1": 1, "2": 1, "3": 2, "4": 2, "5": 3, "6": 3, "7": 4, "8": 4, "9": 5, "10": 4, "11": 4, "12": 3, "13": 3, "14": 2, "15": 2, "16": 1, "17": 1, "18": 0 },
            //任三直选复式
            CombArr128: { 0: [0, 1, 2], 1: [0, 1, 3], 2: [0, 1, 4], 3: [0, 2, 3], 4: [0, 2, 4], 5: [0, 3, 4], 6: [1, 2, 3], 7: [1, 2, 4], 8: [1, 3, 4], 9: [2, 3, 4] },
            //任三直选和值
            Sum130: { "0": 1, "1": 3, "2": 6, "3": 10, "4": 15, "5": 21, "6": 28, "7": 36, "8": 45, "9": 55, "10": 63, "11": 69, "12": 73, "13": 75, "14": 75, "15": 73, "16": 69, "17": 63, "18": 55, "19": 45, "20": 36, "21": 28, "22": 21, "23": 15, "24": 10, "25": 6, "26": 3, "27": 1 },
            //任三组选和值
            Sum137: { "1": 1, "2": 2, "3": 2, "4": 4, "5": 5, "6": 6, "7": 8, "8": 10, "9": 11, "10": 13, "11": 14, "12": 14, "13": 15, "14": 15, "15": 14, "16": 14, "17": 13, "18": 11, "19": 10, "20": 8, "21": 6, "22": 5, "23": 4, "24": 2, "25": 2, "26": 1 },
            //[0, 1, 2, 3]
            CombArr139: { 0: [0, 1, 2, 3], 1: [0, 1, 2, 4], 2: [0, 1, 3, 4], 3: [0, 2, 3, 4], 4: [1, 2, 3, 4] },
            //任2
            CombArr2: { 0: [0, 1], 1: [0, 2], 2: [0, 3], 3: [0, 4], 4: [1, 2], 5: [1, 3], 6: [1, 4], 7: [2, 3], 8: [2, 4], 9: [3, 4] },
            //pk10的
            // 冠亚和值
            Sum29: { "0": 3, "1": 4, "2": 5, "3": 6, "4": 7, "5": 8, "6": 9, "7": 10, "8": 11, "9": 12, "10": 13, "11": 14, "12": 15, "13": 16, "14": 17, "15": 18, "16": 19 }
        };
    }
    return LotteryConfig;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _normal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../normal.service */ "./src/app/normal.service.ts");




var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [],
            providers: [_normal_service__WEBPACK_IMPORTED_MODULE_3__["NormalService"]],
            exports: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/customClasses/customClass.ts":
/*!**********************************************!*\
  !*** ./src/app/customClasses/customClass.ts ***!
  \**********************************************/
/*! exports provided: MatPaginatorIntlCro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorIntlCro", function() { return MatPaginatorIntlCro; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");


var MatPaginatorIntlCro = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MatPaginatorIntlCro, _super);
    function MatPaginatorIntlCro() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemsPerPageLabel = '每页条数';
        _this.nextPageLabel = '下一页';
        _this.previousPageLabel = '上一页';
        _this.firstPageLabel = '第一页';
        _this.lastPageLabel = '最后一页';
        _this.getRangeLabel = function (page, pageSize, length) {
            if (length === 0 || pageSize === 0) {
                return '0 合计 ' + length;
            }
            length = Math.max(length, 0);
            var startIndex = page * pageSize;
            // If the start index exceeds the list length, do not try and fix the end index to the end.
            var endIndex = startIndex < length ?
                Math.min(startIndex + pageSize, length) :
                startIndex + pageSize;
            return startIndex + 1 + ' - ' + endIndex + ' 合计 ' + length;
        };
        return _this;
    }
    return MatPaginatorIntlCro;
}(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorIntl"]));



/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _normal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../normal.service */ "./src/app/normal.service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var FooterComponent = /** @class */ (function () {
    function FooterComponent(normalService, breakpointObserver) {
        this.normalService = normalService;
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) { return result.matches; }));
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.normalService.getServerTime().subscribe(function (servertime) {
            console.log("servertime", servertime);
        });
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "footer-component",
            template: __webpack_require__(/*! ./footer.template.html */ "./src/app/footer/footer.template.html"),
            styles: [__webpack_require__(/*! ./footer.style.scss */ "./src/app/footer/footer.style.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_normal_service__WEBPACK_IMPORTED_MODULE_2__["NormalService"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.style.scss":
/*!******************************************!*\
  !*** ./src/app/footer/footer.style.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  padding: 0; }\n\n.wrapper {\n  position: relative;\n  max-width: 1000px;\n  margin: 0 auto; }\n\n#footer-contact {\n  display: block;\n  font-size: 0;\n  margin-bottom: 20px;\n  background: #222225;\n  border: 1px solid #2b2b2e; }\n\n#footer-contact li.mail, #footer-contact li.chat, #footer-contact li.phone.ma, #footer-contact li.agent.ma {\n    background-color: #29292d; }\n\n#footer-contact li {\n    box-sizing: border-box;\n    display: inline-block;\n    width: 25%;\n    height: 48px;\n    vertical-align: top;\n    padding-left: 37px;\n    color: #666;\n    font-size: 12px;\n    text-align: left;\n    line-height: 48px;\n    background: no-repeat 10px center; }\n\n#footer-contact li span {\n      color: #fff; }\n\n#footer-contact li.tel {\n    background-image: url(https://cdn.weibo-hk.com/Web.Portal/JM001-01.Portal/Content/Views/Shared/images/contact_tel.png); }\n\n#footer-contact li.mail {\n    background-image: url(https://cdn.weibo-hk.com/Web.Portal/JM001-01.Portal/Content/Views/Shared/images/contact_mail.png); }\n\n#footer-contact li.qq {\n    background-image: url(https://cdn.weibo-hk.com/Web.Portal/JM001-01.Portal/Content/Views/Shared/images/contact_qq.png); }\n\n#footer-contact li.chat {\n    padding-left: 43px;\n    background-image: url(https://cdn.weibo-hk.com/Web.Portal/JM001-01.Portal/Content/Views/Shared/images/contact_chat.png); }\n\n#footer-deposit {\n  height: 100px;\n  margin-bottom: 27px;\n  background: url(https://cdn.weibo-hk.com/Web.Portal/JM001-01.Portal/Content/Views/Shared/images/footer_deposit.png) no-repeat center;\n  border-top: 1px solid #2b2b2e; }\n\n#footer-logo {\n  height: 58px;\n  margin-bottom: 15px;\n  background: url(https://cdn.weibo-hk.com/Web.Portal/JM001-01.Portal/Content/Views/Shared/images/footer_logo.1.png) no-repeat center top; }\n\n.footer-infos {\n  display: block;\n  font-size: 0; }\n\n.footer-infos li {\n    display: inline-block;\n    color: #666;\n    font-size: 12px;\n    vertical-align: top;\n    box-sizing: border-box; }\n\n.footer-infos .left {\n    width: 485px;\n    padding-right: 39px;\n    border-right: 1px solid #313031; }\n\n.footer-infos .center {\n    margin-right: 46px;\n    padding-left: 26px;\n    line-height: 31px; }\n\n.footer-infos .right {\n    width: 222px; }\n\n#footer-nav {\n  display: block;\n  margin-top: 20px;\n  line-height: 61px;\n  text-align: center;\n  background: url(https://cdn.weibo-hk.com/Web.Portal/JM001-01.Portal/Content/Views/Shared/images/navi_bg.png) no-repeat center top; }\n\n#footer-nav li {\n    display: inline; }\n\n#footer-nav li a {\n      color: #fff;\n      font-size: 12px;\n      text-decoration: none; }\n\n#footer-nav li a:hover {\n      color: #ff0000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3NvZnR3YXJlL2RldmVsb3AvZ2l0c3RvcmUvY3AvY3AtZnJvbnQvc3JjL2FwcC9mb290ZXIvZm9vdGVyLnN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVLEVBQUE7O0FBRWQ7RUFDSSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxjQUFjO0VBQ2QsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIseUJBQXlCLEVBQUE7O0FBTDdCO0lBT1EseUJBQXlCLEVBQUE7O0FBUGpDO0lBVVEsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlDQUFpQyxFQUFBOztBQXBCekM7TUFzQlksV0FBVyxFQUFBOztBQXRCdkI7SUEwQlEsc0hBQXNILEVBQUE7O0FBMUI5SDtJQTZCUSx1SEFBdUgsRUFBQTs7QUE3Qi9IO0lBZ0NRLHFIQUFxSCxFQUFBOztBQWhDN0g7SUFtQ1Esa0JBQWtCO0lBQ2xCLHVIQUF1SCxFQUFBOztBQUcvSDtFQUNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsb0lBQW9JO0VBQ3BJLDZCQUE2QixFQUFBOztBQUVqQztFQUNJLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsdUlBQXVJLEVBQUE7O0FBRTNJO0VBQ0ksY0FBYztFQUNkLFlBQVksRUFBQTs7QUFGaEI7SUFJUSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsc0JBQXNCLEVBQUE7O0FBUjlCO0lBV1EsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiwrQkFBK0IsRUFBQTs7QUFidkM7SUFnQlEsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUIsRUFBQTs7QUFsQnpCO0lBcUJRLFlBQVksRUFBQTs7QUFJcEI7RUFDSSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUlBQWlJLEVBQUE7O0FBTHJJO0lBT1EsZUFBZSxFQUFBOztBQVB2QjtNQVNZLFdBQVc7TUFDWCxlQUFlO01BQ2YscUJBQXFCLEVBQUE7O0FBWGpDO01BY1ksY0FBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xuICAgIHBhZGRpbmc6IDA7XG59XG4ud3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4jZm9vdGVyLWNvbnRhY3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICMyMjIyMjU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJiMmIyZTtcbiAgICBsaS5tYWlsLCBsaS5jaGF0LCBsaS5waG9uZS5tYSwgbGkuYWdlbnQubWEge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTJkO1xuICAgIH1cbiAgICBsaSB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDM3cHg7XG4gICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgMTBweCBjZW50ZXI7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGkudGVsIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vY2RuLndlaWJvLWhrLmNvbS9XZWIuUG9ydGFsL0pNMDAxLTAxLlBvcnRhbC9Db250ZW50L1ZpZXdzL1NoYXJlZC9pbWFnZXMvY29udGFjdF90ZWwucG5nKTtcbiAgICB9XG4gICAgbGkubWFpbCB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2Nkbi53ZWliby1oay5jb20vV2ViLlBvcnRhbC9KTTAwMS0wMS5Qb3J0YWwvQ29udGVudC9WaWV3cy9TaGFyZWQvaW1hZ2VzL2NvbnRhY3RfbWFpbC5wbmcpO1xuICAgIH1cbiAgICBsaS5xcSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2Nkbi53ZWliby1oay5jb20vV2ViLlBvcnRhbC9KTTAwMS0wMS5Qb3J0YWwvQ29udGVudC9WaWV3cy9TaGFyZWQvaW1hZ2VzL2NvbnRhY3RfcXEucG5nKTtcbiAgICB9XG4gICAgbGkuY2hhdCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNDNweDtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vY2RuLndlaWJvLWhrLmNvbS9XZWIuUG9ydGFsL0pNMDAxLTAxLlBvcnRhbC9Db250ZW50L1ZpZXdzL1NoYXJlZC9pbWFnZXMvY29udGFjdF9jaGF0LnBuZyk7XG4gICAgfVxufVxuI2Zvb3Rlci1kZXBvc2l0IHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI3cHg7XG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vY2RuLndlaWJvLWhrLmNvbS9XZWIuUG9ydGFsL0pNMDAxLTAxLlBvcnRhbC9Db250ZW50L1ZpZXdzL1NoYXJlZC9pbWFnZXMvZm9vdGVyX2RlcG9zaXQucG5nKSBuby1yZXBlYXQgY2VudGVyO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMmIyYjJlO1xufVxuI2Zvb3Rlci1sb2dvIHtcbiAgICBoZWlnaHQ6IDU4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9jZG4ud2VpYm8taGsuY29tL1dlYi5Qb3J0YWwvSk0wMDEtMDEuUG9ydGFsL0NvbnRlbnQvVmlld3MvU2hhcmVkL2ltYWdlcy9mb290ZXJfbG9nby4xLnBuZykgbm8tcmVwZWF0IGNlbnRlciB0b3A7XG59XG4uZm9vdGVyLWluZm9zIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDA7XG4gICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuICAgIC5sZWZ0IHtcbiAgICAgICAgd2lkdGg6IDQ4NXB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzOXB4O1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzEzMDMxO1xuICAgIH1cbiAgICAuY2VudGVyIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0NnB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMXB4O1xuICAgIH1cbiAgICAucmlnaHQge1xuICAgICAgICB3aWR0aDogMjIycHg7XG4gICAgfVxufVxuXG4jZm9vdGVyLW5hdiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBsaW5lLWhlaWdodDogNjFweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vY2RuLndlaWJvLWhrLmNvbS9XZWIuUG9ydGFsL0pNMDAxLTAxLlBvcnRhbC9Db250ZW50L1ZpZXdzL1NoYXJlZC9pbWFnZXMvbmF2aV9iZy5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgdG9wO1xuICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6I2ZmMDAwMDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.template.html":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.template.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer style=\"max-width:1200px;margin:0 auto 60px;\">\n    <p style=\"text-align:center;font-size: 12px;\">\n        当前服务器时间：{{normalService.ServerTime.time | date:\"y-MM-dd HH:mm:ss\"}}\n        服务器时区：{{normalService.ServerTime.zone}} (+{{normalService.ServerTime.zoneOffset/3600}})\n    </p>\n    <div class=\"wrapper\">\n        <ul id=\"footer-contact\" fxLayout=\"row wrap\" hidden=\"true\">\n            <li class=\"tel\" [fxFlex]=\"(isHandset$ | async)?50:25\">免費電話：<span>4006-121-999</span></li>\n            <li class=\"mail\" [fxFlex]=\"(isHandset$ | async)?50:25\">客服邮箱：<span>2018comtyc@gmail.com</span></li>\n            <li class=\"qq\" [fxFlex]=\"(isHandset$ | async)?50:25\">客服QQ：<span>3557666666</span></li>\n            <li class=\"chat\" [fxFlex]=\"(isHandset$ | async)?50:25\">客服中心 SERVICE CENTER</li>\n        </ul>\n        <div id=\"footer-deposit\" [hidden]=\"(isHandset$ | async)\"></div>\n        <div id=\"footer-logo\" [hidden]=\"(isHandset$ | async)\"></div>\n        <!-- <ul id=\"footer-nav\" fxLayout=\"row\" fxLayoutGap=\"15px\" fxLayoutAlign=\"center start\" style=\"white-space:normal;\">\n            <li><a routerLink=\"/infos\">关于我们</a></li>\n            <li><a routerLink=\"/infos\">联络我们</a></li>\n            <li toggle-color=\"\" class=\"toggle-color color\"><a routerLink=\"/infos\">代理加盟</a></li>\n            <li><a routerLink=\"/infos\">存款帮助</a></li>\n            <li><a routerLink=\"/infos\">取款帮助</a></li>\n            <li><a routerLink=\"/infos\">常见问题</a></li>\n            <li><a routerLink=\"/infos\">下载中心</a></li>\n        </ul> -->\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/hammer-card/hammer-card.component.html":
/*!********************************************************!*\
  !*** ./src/app/hammer-card/hammer-card.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\"\n  [@cardAnimator]=\"animationState\"\n  (@cardAnimator.done)=\"resetAnimationState()\"\n  (swipeleft)=\"startAnimation('slideOutLeft')\"\n  (swiperight)=\"startAnimation('zoomOutRight')\"\n  (swipeup)=\"startAnimation('rotateOutUpRight')\"\n  (swipedown)=\"startAnimation('flipOutY')\"\n  style=\"text-align: center\">\n\n  <mat-card-content>\n    <img mat-card-image src=\"https://angular.io/assets/images/logos/angular/angular.svg\" height=\"200\" alt=\"\">\n\n    <p>\n      Learn how to build applications with Angular...\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button color=\"primary\" (tap)=\"startAnimation('wobble')\">WOBBLE</button>\n    <button mat-raised-button color=\"primary\" (tap)=\"startAnimation('swing')\">SWING</button>\n    <button mat-raised-button color=\"primary\" (tap)=\"startAnimation('jello')\">JELLO</button>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/hammer-card/hammer-card.component.scss":
/*!********************************************************!*\
  !*** ./src/app/hammer-card/hammer-card.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hhbW1lci1jYXJkL2hhbW1lci1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/hammer-card/hammer-card.component.ts":
/*!******************************************************!*\
  !*** ./src/app/hammer-card/hammer-card.component.ts ***!
  \******************************************************/
/*! exports provided: HammerCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HammerCardComponent", function() { return HammerCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _keyframes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keyframes */ "./src/app/hammer-card/keyframes.ts");




var HammerCardComponent = /** @class */ (function () {
    function HammerCardComponent() {
    }
    HammerCardComponent.prototype.ngOnInit = function () {
    };
    HammerCardComponent.prototype.startAnimation = function (state) {
        console.log(state);
        if (!this.animationState) {
            this.animationState = state;
        }
    };
    HammerCardComponent.prototype.resetAnimationState = function () {
        this.animationState = '';
    };
    HammerCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hammer-card',
            template: __webpack_require__(/*! ./hammer-card.component.html */ "./src/app/hammer-card/hammer-card.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('cardAnimator', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => wobble', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_3__["wobble"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => swing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_3__["swing"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => jello', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_3__["jello"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => zoomOutRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_3__["zoomOutRight"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => slideOutLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_3__["slideOutLeft"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => rotateOutUpRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_3__["rotateOutUpRight"]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => flipOutY', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_3__["flipOutY"]))),
                ])
            ],
            styles: [__webpack_require__(/*! ./hammer-card.component.scss */ "./src/app/hammer-card/hammer-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HammerCardComponent);
    return HammerCardComponent;
}());



/***/ }),

/***/ "./src/app/hammer-card/keyframes.ts":
/*!******************************************!*\
  !*** ./src/app/hammer-card/keyframes.ts ***!
  \******************************************/
/*! exports provided: swing, zoomOutRight, flipOutY, slideOutLeft, rotateOutUpRight, wobble, jello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swing", function() { return swing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomOutRight", function() { return zoomOutRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipOutY", function() { return flipOutY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideOutLeft", function() { return slideOutLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateOutUpRight", function() { return rotateOutUpRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wobble", function() { return wobble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jello", function() { return jello; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var swing = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate3d(0, 0, 1, 15deg)', offset: .2 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate3d(0, 0, 1, -10deg)', offset: .4 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate3d(0, 0, 1, 5deg)', offset: .6 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate3d(0, 0, 1, -5deg)', offset: .8 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'none', offset: 1 }),
];
var zoomOutRight = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)', offset: .4 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(0.1) translate3d(2000px, 0, 0)', 'transform-origin': 'right center', offset: 1 }),
];
var flipOutY = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'perspective(400px)', offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)', opacity: 1, offset: 0.3 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: 0, offset: 1 }),
];
var slideOutLeft = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 1 }),
];
var rotateOutUpRight = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, 'transform-origin': 'right bottom', offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate3d(0, 0, 1, 90deg)', 'transform-origin': 'right bottom', offset: 1 }),
];
var wobble = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)', offset: 0.15 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)', offset: 0.3 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)', offset: 0.45 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)', offset: 0.6 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)', offset: 0.75 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', offset: 1 }),
];
var jello = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d(0, 0, 0)', offset: .111 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: .222 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'skewX(6.25deg) skewY(6.25deg)', offset: .333 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: .444 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: .555 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', offset: .666 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: .777 }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', offset: .888 }),
];


/***/ }),

/***/ "./src/app/handy-new/handy-new.component.html":
/*!****************************************************!*\
  !*** ./src/app/handy-new/handy-new.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\n      color=\"accent\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [(opened)]=\"opened\">\n    <div fxLayout=\"column\" style=\"height:100%;\">\n      <div>\n        <mat-toolbar color=\"warn\" style=\"font-size:15px\">\n          <marquee behavior=\"\" direction=\"\" *ngIf=\"normalService.User.Username\">\n            <span>\n              <img src=\"/assets/avatars/avatar{{normalService.User.Id%11}}.png\" alt=\"\" style=\"height:50px;vertical-align: middle;border-radius: 50%;\">\n            </span>\n            <span style=\"color:red;font-weight: 400;\">\n            {{normalService.User?normalService.User.Username:\"\"}}\n            </span> - 欢迎登陆九鼎国际娱乐城！\n          </marquee>\n          <marquee behavior=\"\" direction=\"\" *ngIf=\"!normalService.User.Username\">\n            欢迎光临九鼎国际娱乐城！\n          </marquee>\n        </mat-toolbar>\n      </div>\n      <div fxFlex=\"100\" style=\"overflow-y:scroll;\">\n        <mat-nav-list>\n          <div *ngFor=\"let nav of navList;index as i;\" [hidden]=\"(isHandset$ | async)?nav.hideHandy:false\">\n            <mat-list-item [routerLink]=\"nav.link\" [routerLinkActive]=\"nav.link?'active':''\" (tap)=\"hoverNav(nav)\">\n              <mat-icon matListIcon [matBadge]=\"nav.badge\" matBadgeSize=\"small\" matBadgeColor=\"warn\">{{nav.icon}}</mat-icon>\n              <a matLine>{{nav.name}}</a>\n              <span class=\"all-transform\" *ngIf=\"nav.children && nav.children.length\" [ngClass]=\"{'rotate180': nav.childDisplay}\"><mat-icon matListIcon>keyboard_arrow_up</mat-icon></span>\n            </mat-list-item>\n            <ul class=\"child-nav-ul\" [hidden]=\"!nav.childDisplay\" *ngIf=\"nav.children && nav.children.length\">\n              <li *ngFor=\"let childNav of nav.children; index as childi;\">\n                <mat-list-item class=\"child-nav-ul-li\" [routerLink]=\"childNav.link\" [routerLinkActive]=\"childNav.link?'active':''\" (tap)=\"hoverNav(childNav)\">\n                  <mat-icon matListIcon class=\"child-nav-ul-li-icon\">{{childNav.icon}}</mat-icon>\n                  <a matLine>{{childNav.name}}</a>\n                  <span class=\"all-transform\" *ngIf=\"childNav.children && childNav.children.length\" [ngClass]=\"{'rotate180': childNav.childDisplay}\"><mat-icon matListIcon>keyboard_arrow_up</mat-icon></span>\n                </mat-list-item>\n                <ul class=\"child-nav-ul\" [hidden]=\"!childNav.childDisplay\" *ngIf=\"childNav.children && nav.children.length\">\n                  <li *ngFor=\"let gChildNav of childNav.children; index as gChildi;\">\n                    <mat-list-item class=\"child-nav-ul-li\" [routerLink]=\"gChildNav.link\" [routerLinkActive]=\"gChildNav.link?'active':''\">\n                      <mat-icon matListIcon class=\"child-nav-ul-li-icon\">{{gChildNav.icon}}</mat-icon>\n                      <a matLine>{{gChildNav.name}}</a>\n                    </mat-list-item>\n                  </li>\n                </ul>\n              </li>\n            </ul>\n          </div>\n        </mat-nav-list>\n      </div>\n      <div>\n        <mat-toolbar color=\"accent\" *ngIf=\"normalService.IsLogin\" style=\"background-color: whitesmoke; bottom: 2px;height:40px;font-size:10px;justify-content: center;color:#362942d1;\">\n          <mat-icon style=\"font-size:20px;\">local_atm</mat-icon>：\n          <span style=\"color: red;\">¥ {{normalService.User?normalService.User.Coin:\"\" | number:\".0-2\"}}</span>\n          <mat-icon style=\"font-size:20px;margin-left:10px;cursor: pointer;\" (click)=\"freshBalance()\">cached</mat-icon>\n        </mat-toolbar>\n      </div>\n    </div>\n    \n  </mat-sidenav>\n  <mat-sidenav #rightDrawer class=\"rightSide\" [ngClass]=\"{'rightSideHandy': (isHandset$ | async)}\" fixedInViewport=\"true\" position=\"end\" mode=\"over\" [(opened)]=\"rightOpened\">\n    <nav mat-tab-nav-bar mat-align-tabs=\"center\">\n      <a mat-tab-link (tap)=\"switchRightTab(0)\"\n         [active]=\"activeRightTab==0\">\n        优惠活动\n      </a>\n      <a mat-tab-link (tap)=\"switchRightTab(1)\"\n         [active]=\"activeRightTab==1\">\n        客服\n      </a>\n    </nav>\n    \n    <section [hidden]=\"activeRightTab!==0\" style=\"background-size:cover;background-position:center;padding-top:50px;text-align: center;\" fxLayout=\"column\">\n      <div fxFlex=\"100\">\n        <div style=\"height:170px;margin:0 auto;position:relative;cursor: pointer;\" >\n          <img src=\"/assets/images/else/tooopen_sy_136009523245.png\" alt=\"\" style=\"position:absolute;z-index: 1000;top: -15px;left: 50%;margin-left: -107px;\">\n          <div style=\"transform: translateY(22px);\">\n            <div style=\"height:95px;width:95px;margin:0 auto; border-radius:50%;background:linear-gradient(to bottom, #ffe842,pink);\"></div>\n            <div style=\"height:0px;overflow:hidden;position: relative;margin-top: -0px;\" [ngStyle]=\"{'height': normalService.BonusObj.Cumulation/100000*95+'px', 'margin-top':-normalService.BonusObj.Cumulation/100000*95+'px'}\">\n              <div style=\"height:95px;width:95px;margin:0 auto; border-radius:50%;background:linear-gradient(to bottom, #500000,orangered);position:absolute;bottom:0;left:50%;margin-left: -47.5px\"></div>\n            </div>\n          </div>\n          \n          <!-- <mat-progress-spinner\n            class=\"example-margin\"\n            color=\"default\"\n            mode=\"determinate\"\n            [value]=\"normalService.BonusObj.Cumulation/1000\"\n            style=\"margin:0 auto;border-radius: 50%;transform: translateY(-75px);width:100px;\">\n          </mat-progress-spinner> -->\n          <button mat-flat-button color=\"primary\" (tap)=\"geBonus()\" style=\"margin: 0 auto;z-index:9999;transform: translateY(-40px);\" [disabled]=\"!(normalService.BonusObj.State == 1)\">{{(normalService.BonusObj.State == 1)?'抢红包':'未积满'}}</button>\n        </div>\n        <!-- <mat-progress-bar mode=\"determinate\" [value]=\"normalService.BonusObj.Cumulation/1000\" style=\"width:50%;margin:0 auto;\"></mat-progress-bar> -->\n        <span><small style=\"font-size:10px;color:#ccc;\"> 奖池积满后，即开奖，点击即可拼手气，赢大奖</small></span>\n      </div>\n      \n\n      <div class=\"music-section\">\n        <h3>声音设置</h3>\n        <mat-checkbox class=\"checkbox\" [(ngModel)]=\"normalService.backgroundMusic\">背景音效</mat-checkbox>\n        <mat-checkbox class=\"checkbox\" [(ngModel)]=\"normalService.openMusic\">开奖音效</mat-checkbox>\n        <mat-checkbox class=\"checkbox\" [(ngModel)]=\"normalService.lotterMusic\">中奖音效</mat-checkbox>\n        <mat-checkbox class=\"checkbox\" [(ngModel)]=\"normalService.actionMusic\">动作音效</mat-checkbox>\n      </div>\n    </section>\n    <section [hidden]=\"activeRightTab!==1\">\n      <ul id=\"messages\">\n        <li *ngFor=\"let message of chat.messages;\" fxLayout=\"row\">\n            <span [style.color]=\"message.senderId==normalService.User.Id?'#666':''\" [style.float]=\"message.senderId==normalService.User.Id?'right':''\" fxFlex=\"100\">{{message.m}}</span>\n            <small [class]=\"message.senderId=='admin'?'message-time float-right':'message-time'\">{{message.time | date: \"HH:MM:ss\"}}</small>\n        </li>\n    </ul>\n      <div class=\"chatRow\">\n        <form fxLayout=\"row\">\n          <input id=\"m\" autocomplete=\"off\" [(ngModel)]=\"chat.tempMessage\" name=\"tempMessage\" fxFlex=\"70\" /><button (tap)=\"sendMsg()\" fxFlex=\"30\">发送</button>\n        </form>\n      </div>\n    </section>\n  </mat-sidenav>\n  <mat-sidenav-content style=\"position:relative;\">\n    <div id=\"topInfo\" fxLayout=\"row\"\n    fxLayoutGap=\"5px\" *ngIf=\"!(isHandset$ | async)\">\n      <div fxFlex=\"50\">\n        <div fxFlex=\"20\">\n          <span class=\"tapAble\" style=\"white-space:nowrap;\" (tap)=\"rightDrawer.toggle();changeToChat();\">\n            <i class=\"fas fa-headset\"></i>\n            在线客服\n          </span>\n        </div>\n        <div fxFlex=\"20\" class=\"tapAble\" style=\"white-space:nowrap;\" (mouseover)=\"showQrCode()\" (mouseleave)=\"hideQrCode()\">\n          <i class=\"fas fa-mobile-alt\"></i>\n          手机端下载\n          <div style=\"position: absolute; z-index: 1000;\" [hidden]=\"qrcodeHide\">\n            <img src=\"/assets/img/qrcode.jpg\" alt=\"\" style=\"height: 120px;transform: translateX(-20px)\">\n          </div>\n        </div>\n      </div>\n      <div fxFlex=\"50\"  fxLayoutAlign=\"end\">\n        <div fxFlex=\"30\" class=\"tapAble\" style=\"white-space:nowrap;\">\n          <span>\n            <img src=\"/assets/avatars/avatar{{normalService.User.Id%11}}.png\" alt=\"\" style=\"height:30px;vertical-align: middle;border-radius: 50%;\">\n          </span>\n          {{normalService.User?normalService.User.Username:\"\"}}\n        </div>\n        <div fxFlex=\"30\" style=\"white-space:nowrap;\">\n          余额：<span style=\"color: red;\">¥ {{normalService.User?normalService.User.Coin:\"\" | number:\".0-2\"}}</span>\n        </div>\n        <div fxFlex=\"40\">\n          <ul class=\"topInfoNav\" fxLayout=\"row\">\n            <li fxFlex=\"33\" class=\"tapAble\" [routerLink]=\"[ '/user/lobby' ]\">\n              <i class=\"fas fa-user\"></i>\n              个人中心\n            </li>\n            <li fxFlex=\"33\" class=\"tapAble\" [routerLink]=\"[ '/user/deposit' ]\">\n              <i class=\"fas fa-dungeon\"></i>\n              充值\n            </li>\n            <li fxFlex=\"33\" class=\"tapAble\" [routerLink]=\"[ '/user/withdraw' ]\">\n              <i class=\"fas fa-donate\"></i>\n              提款\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <mat-toolbar color=\"accent\" style=\"background:linear-gradient(#d23838, #3e0000);\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\">\n        <mat-icon aria-label=\"menu toggle icon\">menu</mat-icon>\n      </button>\n      <div class=\"tapAble\" style=\"margin: 0 auto;\" routerLink=\"/\">\n        <span style=\"font-family: serif;text-shadow: 2px 3px 3px #000;color:#fff649\" [ngClass]=\"{'fs30':!(isHandset$ | async)}\"><i class=\"fab fa-d-and-d\" style=\"color:#ffd939;\"></i> 九鼎国际 娱乐城 <i class=\"fab fa-d-and-d\" style=\"color:#ffd939;transform: rotateY(180deg);\"></i></span>\n      </div>\n      <button mat-button *ngIf=\"!normalService.IsLogin\" [matMenuTriggerFor]=\"login\" style=\"padding-right:0;\">\n        <!-- <mat-icon aria-label=\"menu toggle icon\">fingerprint</mat-icon> -->\n        <i class=\"fas fa-sign-in-alt\" style=\"font-size: 18px;\"></i>\n      </button>\n      <mat-menu #login=\"matMenu\">\n        <a routerLink=\"/login\">\n          <button mat-menu-item>\n            <mat-icon matListIcon>open_in_browser</mat-icon>\n            登陆\n          </button>\n        </a>\n        <a routerLink=\"/login/register\">\n          <button mat-menu-item>\n            <mat-icon matListIcon>blur_linear</mat-icon>\n            注册\n          </button>\n        </a>\n        \n      </mat-menu>\n      <button mat-button *ngIf=\"normalService.IsLogin\" [matMenuTriggerFor]=\"menu\" style=\"padding-right:0;\">\n        <span>\n          <img src=\"/assets/avatars/avatar{{normalService.User.Id%11}}.png\" alt=\"\" style=\"height:30px;vertical-align: middle;border-radius: 50%;\">\n        </span>\n        <!-- <mat-icon aria-label=\"menu toggle icon\">account_box</mat-icon> -->\n      </button>\n      <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item [routerLink]=\"['/user/messages']\">\n          <mat-icon matListIcon>message</mat-icon>\n          <span matBadge=\"3\" matBadgeSize=\"small\" matBadgeColor=\"warn\">消息</span>\n        </button>\n        <button mat-menu-item (tap)=\"rightDrawer.toggle();changeToChat();\">\n          <!-- <mat-icon matListIcon>fiber_pin</mat-icon> -->\n          <i class=\"fab fa-galactic-republic\" style=\"margin-right:16px;font-size:20px;\"></i>\n          奖池\n        </button>\n        <button mat-menu-item (tap)=\"rightDrawer.toggle();changeToChat();\">\n          <!-- <mat-icon matListIcon>fiber_pin</mat-icon> -->\n          <i class=\"fas fa-headset\" style=\"margin-right:16px;font-size:20px;\"></i>\n          在线客服\n        </button>\n        <button mat-menu-item [routerLink]=\"[ '/user/deposit' ]\">\n          <!-- <mat-icon matListIcon>fiber_pin</mat-icon> -->\n          <i class=\"far fa-credit-card\" style=\"margin-right:16px;font-size:20px;\"></i>\n          充值\n        </button>\n        <button mat-menu-item [routerLink]=\"[ '/user/withdraw' ]\">\n          <i class=\"fas fa-donate\" style=\"margin-right:16px;font-size:20px;\"></i>\n          提现\n        </button>\n        <button mat-menu-item [routerLink]=\"[ '/user/lobby' ]\">\n          <i class=\"fas fa-user\" style=\"margin-right:16px;font-size:20px;\"></i>\n          个人中心\n        </button>\n      </mat-menu>\n    </mat-toolbar>\n    <!-- Add Content Here -->\n    <section style=\"overflow-x:hidden;\">\n      <router-outlet></router-outlet>\n      <tabs *ngIf=\"(isHandset$ | async)\"></tabs>\n      <div style=\"overflow: hidden;\">\n        <footer-component></footer-component>\n      </div>\n    </section>\n    <div id=\"right_menu\" class=\"right_menu dis_txt_high\" style=\"top: 171px;\" [hidden]=\"hideRightBar\">\n      <!--<div class=\"item show_menu hvr-backward none\">-->\n          <!--&lt;!&ndash;<i class=\"icon menu\"></i>&ndash;&gt;-->\n          <!--<span class=\"txt\">展<br>开</span>-->\n      <!--</div>-->\n      <div style=\"top:0\" class=\"abs item_list\">\n          <div class=\"item item_spe rel none hvr-backward play_sounds\" id=\"\" (tap)=\"rightDrawer.toggle();changeToBonus();\">\n              <i class=\"fab fa-galactic-republic\"></i>\n              <span class=\"txt\"><span class=\"txt\">奖<br>池</span></span>\n              <!--<div class=\"icon_2 easy\">\n                  <span class=\"abs_mid_ver\">快捷设置</span>\n              </div>-->\n          </div>\n          <!--<div onclick=\"window.open(PRJ_SERVICE_URL)\" class=\"item hvr-backward\">-->\n          <div class=\"item service hvr-backward\" (tap)=\"rightDrawer.toggle();changeToChat();\">\n               <i class=\"fas fa-headset\"></i>\n              <span class=\"txt on\">客<br>服</span>\n          </div>\n          <div class=\"item\" style=\"padding:0;\" (tap)=\"hideRight()\">X</div>\n      </div>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/handy-new/handy-new.component.scss":
/*!****************************************************!*\
  !*** ./src/app/handy-new/handy-new.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n  width: 100%;\n  overflow-x: hidden; }\n\n.fs30 {\n  font-size: 30px; }\n\n.sidenav {\n  width: 200px; }\n\n.sidenav .mat-toolbar {\n  background: inherit; }\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n\n#topInfo {\n  padding: 0 30px;\n  font-size: 14px;\n  line-height: 40px; }\n\n.topInfoNav {\n  padding: 0;\n  margin: 0; }\n\n.topInfoNav li {\n    display: inline-block;\n    text-align: center;\n    white-space: nowrap;\n    overflow: hidden;\n    font-size: 12px; }\n\n.active {\n  background-color: rgba(255, 255, 255, 0.1); }\n\n.child-nav-ul {\n  margin: 0;\n  padding-left: 0;\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.child-nav-ul .child-nav-ul-li {\n    height: 40px; }\n\n.child-nav-ul .child-nav-ul-li .child-nav-ul-li-icon {\n      margin-left: 10px; }\n\n.all-transform {\n  transition: all 0.3s; }\n\n.rotate180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.rightSide {\n  width: 30%; }\n\n.rightSideHandy {\n  width: 60%; }\n\n.tapAble {\n  cursor: pointer;\n  outline: 0; }\n\n.chatRow {\n  position: absolute;\n  bottom: 0;\n  display: block;\n  width: 100%;\n  border-top: 1px solid #ccc; }\n\n.right_menu {\n  position: fixed;\n  z-index: 99;\n  width: 29px;\n  top: 150px;\n  right: 0px;\n  color: #f9f9f9; }\n\n.right_menu .item {\n    width: 25px;\n    cursor: pointer;\n    position: relative;\n    margin-bottom: 8px;\n    background-color: #5b3a8b;\n    text-align: center;\n    padding: 5px 0 10px;\n    border-radius: 8px; }\n\nform {\n  background: #ccc;\n  width: 100%; }\n\nform input {\n  border: 0;\n  padding: 10px;\n  width: 70%; }\n\nform button {\n  width: 23%;\n  background: #82e0ff;\n  border: none;\n  padding: 10px;\n  outline: 0;\n  cursor: pointer; }\n\n#messages {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  font-size: 14px; }\n\n#messages li {\n  padding: 10px 10px; }\n\n#messages li:nth-child(odd) {\n  background: #ccc; }\n\n.message-time {\n  border: 1px solid #ccc;\n  border-radius: 20px;\n  padding: 2px 3px;\n  font-size: 10px; }\n\n.float-right {\n  float: right; }\n\n.music-section {\n  margin-top: 25px;\n  padding-top: 25px;\n  color: #ccc;\n  background-color: #666;\n  min-height: 230px;\n  width: 100%;\n  position: absolute;\n  bottom: 0; }\n\n.checkbox {\n  display: block;\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3NvZnR3YXJlL2RldmVsb3AvZ2l0c3RvcmUvY3AvY3AtZnJvbnQvc3JjL2FwcC9oYW5keS1uZXcvaGFuZHktbmV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxlQUFjLEVBQUE7O0FBR2hCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVSxFQUFBOztBQUdaO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxVQUFVO0VBQ1YsU0FBUyxFQUFBOztBQUZYO0lBSUkscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQTs7QUFHbkI7RUFDRSwwQ0FBdUMsRUFBQTs7QUFHekM7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLG9DQUFpQyxFQUFBOztBQUhuQztJQUtJLFlBQVksRUFBQTs7QUFMaEI7TUFPTSxpQkFBaUIsRUFBQTs7QUFJdkI7RUFDRSxvQkFBb0IsRUFBQTs7QUFFdEI7RUFDRSxpQ0FBeUI7VUFBekIseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsVUFBVSxFQUFBOztBQUVaO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsZUFBZTtFQUNmLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsY0FBYztFQUNkLFdBQVc7RUFDWCwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFdBQVc7RUFDWCxVQUFVO0VBQ1YsVUFBVTtFQUNWLGNBQWMsRUFBQTs7QUFOaEI7SUFRSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCLEVBQUE7O0FBSXRCO0VBQU8sZ0JBQWdCO0VBQUUsV0FBVyxFQUFBOztBQUNwQztFQUFhLFNBQVM7RUFBRSxhQUFhO0VBQUUsVUFBVSxFQUFBOztBQUNqRDtFQUFjLFVBQVU7RUFBRSxtQkFBOEI7RUFBRSxZQUFZO0VBQUUsYUFBYTtFQUFDLFVBQVM7RUFBQyxlQUFlLEVBQUE7O0FBQy9HO0VBQVkscUJBQXFCO0VBQUUsU0FBUztFQUFFLFVBQVU7RUFBRSxlQUFlLEVBQUE7O0FBQ3pFO0VBQWUsa0JBQWtCLEVBQUE7O0FBQ2pDO0VBQThCLGdCQUFnQixFQUFBOztBQUM5QztFQUNJLHNCQUFxQjtFQUFFLG1CQUFrQjtFQUN6QyxnQkFBZTtFQUNmLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVMsRUFBQTs7QUFFWDtFQUNFLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hhbmR5LW5ldy9oYW5keS1uZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIH1cbiAgXG4gIC5mczMwe1xuICAgIGZvbnQtc2l6ZTozMHB4O1xuICB9XG4gIFxuICAuc2lkZW5hdiB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG4gIFxuICAuc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIH1cbiAgXG4gIC5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICBcbiAgI3RvcEluZm8ge1xuICAgIHBhZGRpbmc6IDAgMzBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIH1cbiAgXG4gIC50b3BJbmZvTmF2IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBsaSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gIH1cbiAgLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICB9XG4gIFxuICAuY2hpbGQtbmF2LXVsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAuY2hpbGQtbmF2LXVsLWxpe1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgLmNoaWxkLW5hdi11bC1saS1pY29ue1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmFsbC10cmFuc2Zvcm0ge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB9XG4gIC5yb3RhdGUxODAge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cbiAgXG4gIC5yaWdodFNpZGUge1xuICAgIHdpZHRoOiAzMCU7XG4gIH1cbiAgLnJpZ2h0U2lkZUhhbmR5e1xuICAgIHdpZHRoOiA2MCU7XG4gIH1cbiAgXG4gIC50YXBBYmxlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3V0bGluZTogMDtcbiAgfVxuICBcbiAgLmNoYXRSb3cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG4gIH1cbiAgXG4gIC5yaWdodF9tZW51IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogOTk7XG4gICAgd2lkdGg6IDI5cHg7XG4gICAgdG9wOiAxNTBweDtcbiAgICByaWdodDogMHB4O1xuICAgIGNvbG9yOiAjZjlmOWY5O1xuICAgIC5pdGVtIHtcbiAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzViM2E4YjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDVweCAwIDEwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgfVxuICB9XG4gIFxuICBmb3JtIHsgYmFja2dyb3VuZDogI2NjYzsgd2lkdGg6IDEwMCU7IH1cbiAgZm9ybSBpbnB1dCB7IGJvcmRlcjogMDsgcGFkZGluZzogMTBweDsgd2lkdGg6IDcwJTsgfVxuICBmb3JtIGJ1dHRvbiB7IHdpZHRoOiAyMyU7IGJhY2tncm91bmQ6IHJnYigxMzAsIDIyNCwgMjU1KTsgYm9yZGVyOiBub25lOyBwYWRkaW5nOiAxMHB4O291dGxpbmU6MDtjdXJzb3I6IHBvaW50ZXI7IH1cbiAgI21lc3NhZ2VzIHsgbGlzdC1zdHlsZS10eXBlOiBub25lOyBtYXJnaW46IDA7IHBhZGRpbmc6IDA7IGZvbnQtc2l6ZTogMTRweDsgfVxuICAjbWVzc2FnZXMgbGkgeyBwYWRkaW5nOiAxMHB4IDEwcHg7IH1cbiAgI21lc3NhZ2VzIGxpOm50aC1jaGlsZChvZGQpIHsgYmFja2dyb3VuZDogI2NjYzsgfVxuICAubWVzc2FnZS10aW1lIHtcbiAgICAgIGJvcmRlcjoxcHggc29saWQgI2NjYzsgYm9yZGVyLXJhZGl1czoyMHB4O1xuICAgICAgcGFkZGluZzoycHggM3B4O1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIC5mbG9hdC1yaWdodCB7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbiAgXG4gIC5tdXNpYy1zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgIGNvbG9yOiNjY2M7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjtcbiAgICBtaW4taGVpZ2h0OiAyMzBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICB9XG4gIC5jaGVja2JveCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/handy-new/handy-new.component.ts":
/*!**************************************************!*\
  !*** ./src/app/handy-new/handy-new.component.ts ***!
  \**************************************************/
/*! exports provided: HandyNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandyNewComponent", function() { return HandyNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _messenger_messenger_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../messenger/messenger.component */ "./src/app/messenger/messenger.component.ts");
/* harmony import */ var _changepass_dialog_changepass_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../changepass-dialog/changepass-dialog.component */ "./src/app/changepass-dialog/changepass-dialog.component.ts");
/* harmony import */ var src_app_normal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/normal.service */ "./src/app/normal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");










var HandyNewComponent = /** @class */ (function () {
    function HandyNewComponent(router, breakpointObserver, dialog, snackBar, normalService, overlayContainer) {
        var _this = this;
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.normalService = normalService;
        this.qrcodeHide = true;
        this.isLogin = false;
        this.minSequences = [];
        this.highSequences = [];
        this.navList = [
            {
                name: "首页",
                link: "/front",
                icon: "home"
            },
            {
                hideHandy: true,
                name: "真人视讯",
                link: "/真人视讯",
                icon: "camera",
                children: []
            },
            {
                hideHandy: true,
                name: "体育赛事",
                link: "/体育赛事",
                icon: "shutter_speed",
                children: []
            },
            {
                name: "彩票中心",
                icon: "track_changes",
                children: [
                    { name: "彩票首页", link: "/lotteryCenter", icon: "local_play" },
                    {
                        name: "高频彩",
                        icon: "more_vert",
                    },
                    {
                        name: "中频彩",
                        icon: "more_vert",
                    },
                    {
                        name: "低频彩",
                        icon: "vertical_split",
                        children: []
                    },
                ]
            },
            {
                hideHandy: true,
                name: "棋牌游戏",
                link: "/棋牌游戏",
                icon: "style",
                children: []
            },
            {
                name: "用户中心",
                link: "/user/lobby",
                icon: "account_box",
            }
        ];
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
        this.activeRightTab = 0;
        this.hideRightBar = false;
        this.chat = {
            chanel: "",
            joined: false,
            tempMessage: "",
            messages: [
                {
                    m: "尊敬的用户，您好，有什么可以帮助到您的么？",
                    senderId: 'admin',
                    time: new Date(),
                }
            ]
        };
        this.getLotteries();
        overlayContainer.getContainerElement().classList.add('unicorn-dark-theme');
        this.routerEventsListener = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__["NavigationEnd"]) {
                if (_this.opened)
                    _this.opened = !_this.opened;
            }
        });
    }
    HandyNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.normalService.loginOut$.subscribe(function (logout) {
            if (logout == true)
                _this.router.navigate(["/login"]);
        });
        this.normalService.errorMessage$.subscribe(function (err) {
            _this.snackBar.open(err.message, "确定", {
                duration: 3000,
            });
        });
        this.normalService.getLottor$.subscribe(function (lottor) {
            _this.snackBar.open("\u60A8\u6709\u6295\u6CE8\u5355\u4E2D\u5956\uFF0C\u4E2D\u5956\u91D1\u989D:" + lottor.lottor.Amount.toFixed(2) + ", \u5F53\u524D\u8D26\u6237\u4F59\u989D\u4E3A:\u00A5" + lottor.coin.toFixed(2), '确定', {
                duration: 3000,
            });
        });
        this.normalService.balance$.subscribe(function (balance) {
            _this.snackBar.open("\u4F59\u989D\u5237\u65B0\u6210\u529F\uFF0C\u60A8\u7684\u5F53\u524D\u8D26\u6237\u4F59\u989D\u4E3A\uFF1A" + balance + "\u5143", "确定", {
                duration: 3000,
            });
        });
        this.opened = false;
        this.normalService.chatMessage$.subscribe(function (msg) {
            console.log("msg", msg);
            _this.chat.chanel = msg.chanel;
            _this.chat.joined = msg.joined;
            _this.chat.messages.push({ m: msg.msg, senderId: msg.admin ? "admin" : msg.uid, time: new Date() });
        });
        this.normalService.leaveChat$.subscribe(function (chanel) {
            _this.chat.chanel = "";
            _this.chat.joined = false;
        });
        this.normalService.bonusInfoSubject.subscribe(function (bonusInfo) {
            if (bonusInfo.State == 0) {
                _this.snackBar.open("上一期红包已抢完，请等待下一期开奖", "确定", {
                    duration: 2000
                });
            }
            else if (bonusInfo.State == 1) {
                _this.snackBar.open("红包金额达成，开始抢红包", "确定", {
                    duration: 2000
                });
            }
        });
        this.normalService.bonus$.subscribe(function (bonus) {
            console.log("getBonus:", bonus);
            if (bonus.code !== 200) {
                _this.snackBar.open(bonus.message, "确定", {
                    duration: 2000
                });
            }
            else {
                _this.snackBar.open(bonus.message + ",\u91D1\u989D\u4E3A:" + bonus.data + "\u5143.", "确定", {
                    duration: 3000
                });
                _this.normalService.User.Coin += bonus.data;
            }
        });
        this.getBonusState();
    };
    HandyNewComponent.prototype.ngOnDestroy = function () {
        this.routerEventsListener.unsubscribe();
    };
    HandyNewComponent.prototype.getLotteries = function () {
        var _this = this;
        if (this.normalService.listLotteries.length > 0) {
            this.normalService.listLotteries.forEach(function (element) {
                element.name = element.Name;
                element.link = '/lottery/play/' + element.Id + '/' + element.Name;
                if ([1, 4, 7, 9].indexOf(element.Id) !== -1) {
                    _this.minSequences.push(element);
                }
                else {
                    _this.highSequences.push(element);
                }
            });
        }
        else {
            this.normalService.getLotteries()
                .subscribe(function (lotteries) {
                _this.normalService.listLotteries = lotteries.data.Records;
                _this.normalService.listLotteries.forEach(function (element) {
                    element.name = element.Name;
                    element.link = '/lottery/play/' + element.Id + '/' + element.Name;
                    if ([1, 4, 7, 9].indexOf(element.Id) !== -1) {
                        _this.minSequences.push(element);
                    }
                    else {
                        _this.highSequences.push(element);
                    }
                });
            });
        }
        this.navList[3].children[1].children = this.highSequences;
        this.navList[3].children[2].children = this.minSequences;
    };
    HandyNewComponent.prototype.showMessenger = function (title, content) {
        var messenger = this.dialog.open(_messenger_messenger_component__WEBPACK_IMPORTED_MODULE_5__["Messenger"], {
            width: '250px',
            data: { title: title, content: content }
        });
    };
    HandyNewComponent.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.normalService.loginOut()];
                    case 1:
                        _a.sent();
                        // this.router.navigate(['/'])
                        window.location.reload();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandyNewComponent.prototype.login = function () {
        this.router.navigate(["/login"]);
    };
    HandyNewComponent.prototype.logOut = function () {
        this.normalService.loginOut();
    };
    HandyNewComponent.prototype.changePassword = function () {
        var _this = this;
        if (!this.user.email) {
            this.snackBar.open("\u60A8\u9700\u8981\u5148\u5B8C\u5584\u60A8\u7684\u4FE1\u606F\uFF0C\u8BF7\u786E\u4FDD\u90AE\u7BB1\u5730\u5740\u65E0\u8BEF\uFF0C\u5426\u5219\u60A8\u65E0\u6CD5\u8FDB\u884C\u4FEE\u6539\u5BC6\u7801\u64CD\u4F5C", '确定', {
                duration: 3000,
            });
            return;
        }
        var changePass = this.dialog.open(_changepass_dialog_changepass_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ChangepassDialog"], {
            width: "250px"
        });
        changePass.afterClosed().subscribe(function (result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log('The dialog was closed', result);
                return [2 /*return*/];
            });
        }); });
    };
    HandyNewComponent.prototype.freshBalance = function () {
        this.normalService.freshBalance();
    };
    HandyNewComponent.prototype.hoverNav = function (nav) {
        nav.childDisplay = !nav.childDisplay;
    };
    HandyNewComponent.prototype.switchRightTab = function (index) {
        this.activeRightTab = index;
    };
    HandyNewComponent.prototype.changeToChat = function () {
        this.activeRightTab = 1;
    };
    HandyNewComponent.prototype.changeToBonus = function () {
        this.activeRightTab = 0;
    };
    HandyNewComponent.prototype.sendMsg = function () {
        if (!this.chat.tempMessage) {
            this.snackBar.open("消息不能为空", "确定", {
                duration: 3000,
            });
            return;
        }
        var obj = { msg: this.chat.tempMessage, chanel: this.chat.chanel, uid: "" + this.normalService.User.Id, joined: this.chat.joined };
        console.log("obj", obj);
        this.normalService.sendMsg(obj);
        this.chat.tempMessage = "";
    };
    HandyNewComponent.prototype.getBonusState = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var bonus;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.normalService.getBonusInfo()];
                    case 1:
                        bonus = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandyNewComponent.prototype.geBonus = function () {
        if (!(this.normalService.BonusObj.State == 1)) {
            this.snackBar.open("未到开奖时间，请稍等", "", { duration: 2000 });
        }
        this.normalService.getBonus();
    };
    HandyNewComponent.prototype.hideRight = function () {
        this.hideRightBar = !this.hideRightBar;
    };
    HandyNewComponent.prototype.showQrCode = function () {
        console.log("1111");
        this.qrcodeHide = false;
    };
    HandyNewComponent.prototype.hideQrCode = function () {
        console.log("222");
        this.qrcodeHide = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HandyNewComponent.prototype, "user", void 0);
    HandyNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'handy-new',
            template: __webpack_require__(/*! ./handy-new.component.html */ "./src/app/handy-new/handy-new.component.html"),
            styles: [__webpack_require__(/*! ./handy-new.component.scss */ "./src/app/handy-new/handy-new.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            src_app_normal_service__WEBPACK_IMPORTED_MODULE_7__["NormalService"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayContainer"]])
    ], HandyNewComponent);
    return HandyNewComponent;
}());



/***/ }),

/***/ "./src/app/handy/handy.component.html":
/*!********************************************!*\
  !*** ./src/app/handy/handy.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\n      color=\"accent\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [(opened)]=\"opened\" style=\"background:#222;\">\n    <div fxLayout=\"column\" style=\"height:100%;\">\n      <div>\n        <mat-toolbar color=\"warn\" style=\"font-size:15px\">\n          <marquee behavior=\"\" direction=\"\" *ngIf=\"normalService.User.Username\">\n            <span>\n              <img src=\"/assets/avatars/avatar{{normalService.User.Id%11}}.png\" alt=\"\" style=\"height:50px;vertical-align: middle;border-radius: 50%;\">\n            </span>\n            <span style=\"color:red;font-weight: 400;\">\n            {{normalService.User?normalService.User.Username:\"\"}}\n            </span> - 欢迎登陆九鼎国际娱乐城！\n          </marquee>\n          <marquee behavior=\"\" direction=\"\" *ngIf=\"!normalService.User.Username\">\n            欢迎光临九鼎国际娱乐城！\n          </marquee>\n        </mat-toolbar>\n      </div>\n      <div fxFlex=\"100\" style=\"overflow-y:scroll;\">\n        <mat-nav-list>\n          <div *ngFor=\"let nav of navList;index as i;\" [hidden]=\"(isHandset$ | async)?nav.hideHandy:false\">\n            <mat-list-item [routerLink]=\"nav.link\" [routerLinkActive]=\"nav.link?'active':''\" (tap)=\"hoverNav(nav)\">\n              <mat-icon matListIcon [matBadge]=\"nav.badge\" matBadgeSize=\"small\" matBadgeColor=\"warn\">{{nav.icon}}</mat-icon>\n              <a matLine>{{nav.name}}</a>\n              <span class=\"all-transform\" *ngIf=\"nav.children && nav.children.length\" [ngClass]=\"{'rotate180': nav.childDisplay}\"><mat-icon matListIcon>keyboard_arrow_up</mat-icon></span>\n            </mat-list-item>\n            <ul class=\"child-nav-ul\" [hidden]=\"!nav.childDisplay\" *ngIf=\"nav.children && nav.children.length\">\n              <li *ngFor=\"let childNav of nav.children; index as childi;\">\n                <mat-list-item class=\"child-nav-ul-li\" [routerLink]=\"childNav.link\" [routerLinkActive]=\"childNav.link?'active':''\" (tap)=\"hoverNav(childNav)\">\n                  <mat-icon matListIcon class=\"child-nav-ul-li-icon\">{{childNav.icon}}</mat-icon>\n                  <a matLine>{{childNav.name}}</a>\n                  <span class=\"all-transform\" *ngIf=\"childNav.children && childNav.children.length\" [ngClass]=\"{'rotate180': childNav.childDisplay}\"><mat-icon matListIcon>keyboard_arrow_up</mat-icon></span>\n                </mat-list-item>\n                <ul class=\"child-nav-ul\" [hidden]=\"!childNav.childDisplay\" *ngIf=\"childNav.children && nav.children.length\">\n                  <li *ngFor=\"let gChildNav of childNav.children; index as gChildi;\">\n                    <mat-list-item class=\"child-nav-ul-li\" [routerLink]=\"gChildNav.link\" [routerLinkActive]=\"gChildNav.link?'active':''\">\n                      <mat-icon matListIcon class=\"child-nav-ul-li-icon\">{{gChildNav.icon}}</mat-icon>\n                      <a matLine>{{gChildNav.name}}</a>\n                    </mat-list-item>\n                  </li>\n                </ul>\n              </li>\n            </ul>\n          </div>\n        </mat-nav-list>\n      </div>\n      <div>\n        <mat-toolbar color=\"accent\" *ngIf=\"normalService.IsLogin\" style=\"background-color: whitesmoke; bottom: 2px;height:40px;font-size:10px;justify-content: center;color:#362942d1;\">\n          <mat-icon style=\"font-size:20px;\">local_atm</mat-icon>：\n          <span style=\"color: red;\">¥ {{normalService.User?normalService.User.Coin:\"\" | number:\".0-2\"}}</span>\n          <mat-icon style=\"font-size:20px;margin-left:10px;cursor: pointer;\" (click)=\"freshBalance()\">cached</mat-icon>\n        </mat-toolbar>\n      </div>\n    </div>\n    \n  </mat-sidenav>\n  <mat-sidenav #rightDrawer class=\"rightSide\" [ngClass]=\"{'rightSideHandy': (isHandset$ | async)}\" fixedInViewport=\"true\" position=\"end\" mode=\"over\" [(opened)]=\"rightOpened\" style=\"background:#222;\">\n    <nav mat-tab-nav-bar mat-align-tabs=\"center\">\n      <a mat-tab-link (tap)=\"switchRightTab(0)\"\n         [active]=\"activeRightTab==0\">\n        优惠活动\n      </a>\n      <a mat-tab-link (tap)=\"switchRightTab(1)\"\n         [active]=\"activeRightTab==1\">\n        客服\n      </a>\n    </nav>\n    \n    <section [hidden]=\"activeRightTab!==0\" style=\"background-size:cover;background-position:center;padding-top:50px;text-align: center;\" fxLayout=\"column\">\n      <div fxFlex=\"100\">\n        <div style=\"height:170px;margin:0 auto;position:relative;cursor: pointer;\" >\n          <img src=\"/assets/images/else/tooopen_sy_136009523245.png\" alt=\"\" style=\"position:absolute;z-index: 1000;top: -15px;left: 50%;margin-left: -107px;\">\n          <div style=\"transform: translateY(22px);\">\n            <div style=\"height:95px;width:95px;margin:0 auto; border-radius:50%;background:linear-gradient(to bottom, #ffe842,pink);\"></div>\n            <div style=\"height:0px;overflow:hidden;position: relative;margin-top: -0px;\" [ngStyle]=\"{'height': normalService.BonusObj.Cumulation/100000*95+'px', 'margin-top':-normalService.BonusObj.Cumulation/100000*95+'px'}\">\n              <div style=\"height:95px;width:95px;margin:0 auto; border-radius:50%;background:linear-gradient(to bottom, #500000,orangered);position:absolute;bottom:0;left:50%;margin-left: -47.5px\"></div>\n            </div>\n          </div>\n          \n          <!-- <mat-progress-spinner\n            class=\"example-margin\"\n            color=\"default\"\n            mode=\"determinate\"\n            [value]=\"normalService.BonusObj.Cumulation/1000\"\n            style=\"margin:0 auto;border-radius: 50%;transform: translateY(-75px);width:100px;\">\n          </mat-progress-spinner> -->\n          <button mat-flat-button color=\"primary\" (tap)=\"geBonus()\" style=\"margin: 0 auto;z-index:9999;transform: translateY(-40px);\" [disabled]=\"!(normalService.BonusObj.State == 1)\">{{(normalService.BonusObj.State == 1)?'抢红包':'未积满'}}</button>\n        </div>\n        <!-- <mat-progress-bar mode=\"determinate\" [value]=\"normalService.BonusObj.Cumulation/1000\" style=\"width:50%;margin:0 auto;\"></mat-progress-bar> -->\n        <span><small style=\"font-size:10px;color:#ccc;\"> 奖池积满后，即开奖，点击即可拼手气，赢大奖</small></span>\n      </div>\n      \n\n      <div class=\"music-section\">\n        <h3>声音设置</h3>\n        <mat-checkbox class=\"checkbox\" [(ngModel)]=\"normalService.backgroundMusic\">背景音效</mat-checkbox>\n        <mat-checkbox class=\"checkbox\" [(ngModel)]=\"normalService.openMusic\">开奖音效</mat-checkbox>\n        <mat-checkbox class=\"checkbox\" [(ngModel)]=\"normalService.lotterMusic\">中奖音效</mat-checkbox>\n        <mat-checkbox class=\"checkbox\" [(ngModel)]=\"normalService.actionMusic\">动作音效</mat-checkbox>\n      </div>\n    </section>\n    <section [hidden]=\"activeRightTab!==1\">\n      <ul id=\"messages\">\n        <li *ngFor=\"let message of chat.messages;\" fxLayout=\"row\">\n            <span [style.color]=\"message.senderId==normalService.User.Id?'#ccc':''\" [style.float]=\"message.senderId==normalService.User.Id?'right':''\" fxFlex=\"100\">{{message.m}}</span>\n            <small [class]=\"message.senderId=='admin'?'message-time float-right':'message-time'\">{{message.time | date: \"HH:MM:ss\"}}</small>\n        </li>\n    </ul>\n      <div class=\"chatRow\">\n        <form fxLayout=\"row\">\n          <input id=\"m\" autocomplete=\"off\" [(ngModel)]=\"chat.tempMessage\" name=\"tempMessage\" fxFlex=\"70\" /><button (tap)=\"sendMsg()\" fxFlex=\"30\">发送</button>\n        </form>\n      </div>\n    </section>\n  </mat-sidenav>\n  <mat-sidenav-content style=\"position:relative;\">\n    <div id=\"topInfo\" fxLayout=\"row\"\n    fxLayoutGap=\"5px\" *ngIf=\"!(isHandset$ | async)\">\n      <div fxFlex=\"50\">\n        <div fxFlex=\"20\">\n          <span class=\"tapAble\" style=\"white-space:nowrap;\" (tap)=\"rightDrawer.toggle();changeToChat();\">\n            <i class=\"fas fa-headset\"></i>\n            在线客服\n          </span>\n        </div>\n        <a fxFlex=\"20\" class=\"tapAble\" style=\"white-space:nowrap;color:white;\" target=\"_blank\" href=\"https://www.cw.pub/O3HB\" (mouseover)=\"showQrCode()\" (mouseleave)=\"hideQrCode()\">\n          <i class=\"fas fa-mobile-alt\"></i>\n          手机端下载\n          <div style=\"position: absolute; z-index: 1000;\" [hidden]=\"qrcodeHide\">\n            <img src=\"/assets/img/qrcode.jpg\" alt=\"\" style=\"height: 120px;transform: translateX(-20px)\">\n          </div>\n        </a>\n      </div>\n      <div fxFlex=\"50\"  fxLayoutAlign=\"end\">\n        <div fxFlex=\"30\" class=\"tapAble\" style=\"white-space:nowrap;\">\n          <span>\n            <img src=\"/assets/avatars/avatar{{normalService.User.Id%11}}.png\" alt=\"\" style=\"height:30px;vertical-align: middle;border-radius: 50%;\">\n          </span>\n          {{normalService.User?normalService.User.Username:\"\"}}\n        </div>\n        <div fxFlex=\"30\" style=\"white-space:nowrap;\">\n          余额：<span style=\"color: red;\">¥ {{normalService.User?normalService.User.Coin:\"\" | number:\".0-2\"}}</span>\n        </div>\n        <div fxFlex=\"40\">\n          <ul class=\"topInfoNav\" fxLayout=\"row\">\n            <li fxFlex=\"33\" class=\"tapAble\" [routerLink]=\"[ '/user/lobby' ]\">\n              <i class=\"fas fa-user\"></i>\n              个人中心\n            </li>\n            <li fxFlex=\"33\" class=\"tapAble\" [routerLink]=\"[ '/user/deposit' ]\">\n              <i class=\"fas fa-dungeon\"></i>\n              充值\n            </li>\n            <li fxFlex=\"33\" class=\"tapAble\" [routerLink]=\"[ '/user/withdraw' ]\">\n              <i class=\"fas fa-donate\"></i>\n              提款\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <mat-toolbar color=\"accent\" style=\"background:linear-gradient(#d23838, #3e0000);\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\">\n        <mat-icon aria-label=\"menu toggle icon\">menu</mat-icon>\n      </button>\n      <div class=\"tapAble\" style=\"margin: 0 auto;\" routerLink=\"/\">\n        <span style=\"font-family: serif;text-shadow: 2px 3px 3px #000;color:#fff649\" [ngClass]=\"{'fs30':!(isHandset$ | async)}\"><i class=\"fab fa-d-and-d\" style=\"color:#ffd939;\"></i> 九鼎国际 娱乐城 <i class=\"fab fa-d-and-d\" style=\"color:#ffd939;transform: rotateY(180deg);\"></i></span>\n      </div>\n      <button mat-button *ngIf=\"!normalService.IsLogin\" [matMenuTriggerFor]=\"login\" style=\"padding-right:0;\">\n        <!-- <mat-icon aria-label=\"menu toggle icon\">fingerprint</mat-icon> -->\n        <i class=\"fas fa-sign-in-alt\" style=\"font-size: 18px;\"></i>\n      </button>\n      <mat-menu #login=\"matMenu\">\n        <a routerLink=\"/login\">\n          <button mat-menu-item>\n            <mat-icon matListIcon>open_in_browser</mat-icon>\n            登陆\n          </button>\n        </a>\n        <a routerLink=\"/login/register\">\n          <button mat-menu-item>\n            <mat-icon matListIcon>blur_linear</mat-icon>\n            注册\n          </button>\n        </a>\n        \n      </mat-menu>\n      <button mat-button *ngIf=\"normalService.IsLogin\" [matMenuTriggerFor]=\"menu\" style=\"padding-right:0;\">\n        <span>\n          <img src=\"/assets/avatars/avatar{{normalService.User.Id%11}}.png\" alt=\"\" style=\"height:30px;vertical-align: middle;border-radius: 50%;\">\n        </span>\n        <!-- <mat-icon aria-label=\"menu toggle icon\">account_box</mat-icon> -->\n      </button>\n      <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item [routerLink]=\"['/user/messages']\">\n          <mat-icon matListIcon>message</mat-icon>\n          <span matBadge=\"3\" matBadgeSize=\"small\" matBadgeColor=\"warn\">消息</span>\n        </button>\n        <button mat-menu-item (tap)=\"rightDrawer.toggle();changeToChat();\">\n          <!-- <mat-icon matListIcon>fiber_pin</mat-icon> -->\n          <i class=\"fab fa-galactic-republic\" style=\"margin-right:16px;font-size:20px;\"></i>\n          奖池\n        </button>\n        <button mat-menu-item (tap)=\"rightDrawer.toggle();changeToChat();\">\n          <!-- <mat-icon matListIcon>fiber_pin</mat-icon> -->\n          <i class=\"fas fa-headset\" style=\"margin-right:16px;font-size:20px;\"></i>\n          在线客服\n        </button>\n        <button mat-menu-item [routerLink]=\"[ '/user/deposit' ]\">\n          <!-- <mat-icon matListIcon>fiber_pin</mat-icon> -->\n          <i class=\"far fa-credit-card\" style=\"margin-right:16px;font-size:20px;\"></i>\n          充值\n        </button>\n        <button mat-menu-item [routerLink]=\"[ '/user/withdraw' ]\">\n          <i class=\"fas fa-donate\" style=\"margin-right:16px;font-size:20px;\"></i>\n          提现\n        </button>\n        <button mat-menu-item [routerLink]=\"[ '/user/lobby' ]\">\n          <i class=\"fas fa-user\" style=\"margin-right:16px;font-size:20px;\"></i>\n          个人中心\n        </button>\n        <button mat-menu-item (click)=\"logOut()\">\n          <mat-icon matListIcon>input</mat-icon>\n          退出登陆\n        </button>\n      </mat-menu>\n    </mat-toolbar>\n    <!-- Add Content Here -->\n    <section style=\"overflow-x:hidden;background: #222;\">\n      <router-outlet></router-outlet>\n      <tabs *ngIf=\"(isHandset$ | async)\"></tabs>\n      <div style=\"overflow: hidden;\">\n        <footer-component></footer-component>\n      </div>\n    </section>\n    <div id=\"right_menu\" class=\"right_menu dis_txt_high\" style=\"top: 171px;\" [hidden]=\"hideRightBar\">\n      <!--<div class=\"item show_menu hvr-backward none\">-->\n          <!--&lt;!&ndash;<i class=\"icon menu\"></i>&ndash;&gt;-->\n          <!--<span class=\"txt\">展<br>开</span>-->\n      <!--</div>-->\n      <div style=\"top:0\" class=\"abs item_list\">\n          <div class=\"item item_spe rel none hvr-backward play_sounds\" id=\"\" (tap)=\"rightDrawer.toggle();changeToBonus();\">\n              <i class=\"fab fa-galactic-republic\"></i>\n              <span class=\"txt\"><span class=\"txt\">奖<br>池</span></span>\n              <!--<div class=\"icon_2 easy\">\n                  <span class=\"abs_mid_ver\">快捷设置</span>\n              </div>-->\n          </div>\n          <!--<div onclick=\"window.open(PRJ_SERVICE_URL)\" class=\"item hvr-backward\">-->\n          <div class=\"item service hvr-backward\" (tap)=\"rightDrawer.toggle();changeToChat();\">\n               <i class=\"fas fa-headset\"></i>\n              <span class=\"txt on\">客<br>服</span>\n          </div>\n          <div class=\"item\" style=\"border-radius:0;padding:0;background:rgba(255,255,255,0.1);\" (tap)=\"hideRight()\">X</div>\n      </div>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/handy/handy.component.scss":
/*!********************************************!*\
  !*** ./src/app/handy/handy.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n  width: 100%;\n  overflow-x: hidden; }\n\n.fs30 {\n  font-size: 30px; }\n\n.sidenav {\n  width: 200px; }\n\n.sidenav .mat-toolbar {\n  background: inherit; }\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n\n#topInfo {\n  padding: 0 30px;\n  font-size: 14px;\n  line-height: 40px; }\n\n.topInfoNav {\n  padding: 0;\n  margin: 0; }\n\n.topInfoNav li {\n    display: inline-block;\n    text-align: center;\n    white-space: nowrap;\n    overflow: hidden;\n    font-size: 12px; }\n\n.active {\n  background-color: rgba(255, 255, 255, 0.1); }\n\n.child-nav-ul {\n  margin: 0;\n  padding-left: 0;\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.child-nav-ul .child-nav-ul-li {\n    height: 40px; }\n\n.child-nav-ul .child-nav-ul-li .child-nav-ul-li-icon {\n      margin-left: 10px; }\n\n.all-transform {\n  transition: all 0.3s; }\n\n.rotate180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.rightSide {\n  width: 30%; }\n\n.rightSideHandy {\n  width: 60%; }\n\n.tapAble {\n  cursor: pointer;\n  outline: 0; }\n\n.chatRow {\n  position: absolute;\n  bottom: 0;\n  display: block;\n  width: 100%; }\n\n.right_menu {\n  position: absolute;\n  z-index: 99;\n  width: 29px;\n  top: 150px;\n  right: 0px;\n  color: #f9f9f9; }\n\n.right_menu .item {\n    width: 25px;\n    cursor: pointer;\n    position: relative;\n    margin-bottom: 8px;\n    background-color: #5b3a8b;\n    text-align: center;\n    padding: 5px 0 10px;\n    border-radius: 8px; }\n\nform {\n  background: #ccc;\n  width: 100%; }\n\nform input {\n  border: 0;\n  padding: 10px;\n  width: 70%; }\n\nform button {\n  width: 23%;\n  background: #82e0ff;\n  border: none;\n  padding: 10px;\n  outline: 0;\n  cursor: pointer; }\n\n#messages {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  font-size: 14px; }\n\n#messages li {\n  padding: 10px 10px; }\n\n#messages li:nth-child(odd) {\n  background: #666; }\n\n.message-time {\n  border: 1px solid #ccc;\n  border-radius: 20px;\n  padding: 2px 3px;\n  font-size: 10px; }\n\n.float-right {\n  float: right; }\n\n.music-section {\n  margin-top: 25px;\n  padding-top: 25px;\n  color: #ccc;\n  background-color: #666;\n  min-height: 230px;\n  width: 100%;\n  position: absolute;\n  bottom: 0; }\n\n.checkbox {\n  display: block;\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3NvZnR3YXJlL2RldmVsb3AvZ2l0c3RvcmUvY3AvY3AtZnJvbnQvc3JjL2FwcC9oYW5keS9oYW5keS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZUFBYyxFQUFBOztBQUdoQjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsVUFBVTtFQUNWLFNBQVMsRUFBQTs7QUFGWDtJQUlJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlLEVBQUE7O0FBR25CO0VBQ0UsMENBQXVDLEVBQUE7O0FBR3pDO0VBQ0UsU0FBUztFQUNULGVBQWU7RUFDZixvQ0FBaUMsRUFBQTs7QUFIbkM7SUFLSSxZQUFZLEVBQUE7O0FBTGhCO01BT00saUJBQWlCLEVBQUE7O0FBSXZCO0VBQ0Usb0JBQW9CLEVBQUE7O0FBRXRCO0VBQ0UsaUNBQXlCO1VBQXpCLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLFVBQVUsRUFBQTs7QUFFWjtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGVBQWU7RUFDZixVQUFVLEVBQUE7O0FBR1o7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGNBQWM7RUFDZCxXQUFXLEVBQUE7O0FBR2I7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxVQUFVO0VBQ1YsVUFBVTtFQUNWLGNBQWMsRUFBQTs7QUFOaEI7SUFRSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCLEVBQUE7O0FBSXRCO0VBQU8sZ0JBQWdCO0VBQUUsV0FBVyxFQUFBOztBQUNwQztFQUFhLFNBQVM7RUFBRSxhQUFhO0VBQUUsVUFBVSxFQUFBOztBQUNqRDtFQUFjLFVBQVU7RUFBRSxtQkFBOEI7RUFBRSxZQUFZO0VBQUUsYUFBYTtFQUFDLFVBQVM7RUFBQyxlQUFlLEVBQUE7O0FBQy9HO0VBQVkscUJBQXFCO0VBQUUsU0FBUztFQUFFLFVBQVU7RUFBRSxlQUFlLEVBQUE7O0FBQ3pFO0VBQWUsa0JBQWtCLEVBQUE7O0FBQ2pDO0VBQThCLGdCQUFnQixFQUFBOztBQUM5QztFQUNJLHNCQUFxQjtFQUFFLG1CQUFrQjtFQUN6QyxnQkFBZTtFQUNmLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVMsRUFBQTs7QUFFWDtFQUNFLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hhbmR5L2hhbmR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4uZnMzMHtcbiAgZm9udC1zaXplOjMwcHg7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbiN0b3BJbmZvIHtcbiAgcGFkZGluZzogMCAzMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xufVxuXG4udG9wSW5mb05hdiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbn1cblxuLmNoaWxkLW5hdi11bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMSk7XG4gIC5jaGlsZC1uYXYtdWwtbGl7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIC5jaGlsZC1uYXYtdWwtbGktaWNvbntcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIH1cbiAgfVxufVxuLmFsbC10cmFuc2Zvcm0ge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5yb3RhdGUxODAge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4ucmlnaHRTaWRlIHtcbiAgd2lkdGg6IDMwJTtcbn1cbi5yaWdodFNpZGVIYW5keXtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLnRhcEFibGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IDA7XG59XG5cbi5jaGF0Um93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJpZ2h0X21lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5O1xuICB3aWR0aDogMjlweDtcbiAgdG9wOiAxNTBweDtcbiAgcmlnaHQ6IDBweDtcbiAgY29sb3I6ICNmOWY5Zjk7XG4gIC5pdGVtIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWIzYThiO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1cHggMCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgfVxufVxuXG5mb3JtIHsgYmFja2dyb3VuZDogI2NjYzsgd2lkdGg6IDEwMCU7IH1cbmZvcm0gaW5wdXQgeyBib3JkZXI6IDA7IHBhZGRpbmc6IDEwcHg7IHdpZHRoOiA3MCU7IH1cbmZvcm0gYnV0dG9uIHsgd2lkdGg6IDIzJTsgYmFja2dyb3VuZDogcmdiKDEzMCwgMjI0LCAyNTUpOyBib3JkZXI6IG5vbmU7IHBhZGRpbmc6IDEwcHg7b3V0bGluZTowO2N1cnNvcjogcG9pbnRlcjsgfVxuI21lc3NhZ2VzIHsgbGlzdC1zdHlsZS10eXBlOiBub25lOyBtYXJnaW46IDA7IHBhZGRpbmc6IDA7IGZvbnQtc2l6ZTogMTRweDsgfVxuI21lc3NhZ2VzIGxpIHsgcGFkZGluZzogMTBweCAxMHB4OyB9XG4jbWVzc2FnZXMgbGk6bnRoLWNoaWxkKG9kZCkgeyBiYWNrZ3JvdW5kOiAjNjY2OyB9XG4ubWVzc2FnZS10aW1lIHtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7IGJvcmRlci1yYWRpdXM6MjBweDtcbiAgICBwYWRkaW5nOjJweCAzcHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuLmZsb2F0LXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5tdXNpYy1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG4gIGNvbG9yOiNjY2M7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XG4gIG1pbi1oZWlnaHQ6IDIzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG59XG4uY2hlY2tib3gge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/handy/handy.component.ts":
/*!******************************************!*\
  !*** ./src/app/handy/handy.component.ts ***!
  \******************************************/
/*! exports provided: HandyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandyComponent", function() { return HandyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _messenger_messenger_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../messenger/messenger.component */ "./src/app/messenger/messenger.component.ts");
/* harmony import */ var _changepass_dialog_changepass_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../changepass-dialog/changepass-dialog.component */ "./src/app/changepass-dialog/changepass-dialog.component.ts");
/* harmony import */ var src_app_normal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/normal.service */ "./src/app/normal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");










var HandyComponent = /** @class */ (function () {
    function HandyComponent(router, breakpointObserver, dialog, snackBar, normalService, overlayContainer) {
        var _this = this;
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.normalService = normalService;
        this.qrcodeHide = true;
        this.isLogin = false;
        this.minSequences = [];
        this.highSequences = [];
        this.navList = [
            {
                name: "首页",
                link: "/front",
                icon: "home"
            },
            {
                hideHandy: true,
                name: "真人视讯",
                link: "/真人视讯",
                icon: "camera",
                children: []
            },
            {
                hideHandy: true,
                name: "体育赛事",
                link: "/体育赛事",
                icon: "shutter_speed",
                children: []
            },
            {
                name: "彩票中心",
                icon: "track_changes",
                children: [
                    { name: "彩票首页", link: "/lotteryCenter", icon: "local_play" },
                    {
                        name: "高频彩",
                        icon: "more_vert",
                    },
                    {
                        name: "中频彩",
                        icon: "more_vert",
                    },
                    {
                        name: "低频彩",
                        icon: "vertical_split",
                        children: []
                    },
                ]
            },
            {
                hideHandy: true,
                name: "棋牌游戏",
                link: "/棋牌游戏",
                icon: "style",
                children: []
            },
            {
                name: "捕鱼游戏",
                link: "/捕鱼游戏",
                icon: "gesture",
                children: []
            },
            {
                hideHandy: true,
                name: "AG电子",
                link: "/AG电子",
                icon: "surround_sound"
            },
            {
                name: "电子游艺",
                link: "/电子游艺",
                icon: "gradient",
                children: []
            },
            {
                name: "电竞游戏",
                icon: "important_devices",
                children: [
                    { name: "HC电竞", link: "/unsuport", icon: "vertical_split" },
                    { name: "泛亚电竞", link: "/unsuport", icon: "vertical_split" },
                    { name: "电竞牛", link: "/unsuport", icon: "vertical_split" },
                ]
            },
            {
                name: "用户中心",
                link: "/user/lobby",
                icon: "account_box",
            }
        ];
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
        this.activeRightTab = 0;
        this.hideRightBar = false;
        this.chat = {
            chanel: "",
            joined: false,
            tempMessage: "",
            messages: [
                {
                    m: "尊敬的用户，您好，有什么可以帮助到您的么？",
                    senderId: 'admin',
                    time: new Date(),
                }
            ]
        };
        this.getLotteries();
        overlayContainer.getContainerElement().classList.add('unicorn-dark-theme');
        this.routerEventsListener = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__["NavigationEnd"]) {
                if (_this.opened)
                    _this.opened = !_this.opened;
            }
        });
    }
    HandyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.normalService.loginOut$.subscribe(function (logout) {
            if (logout == true)
                _this.router.navigate(["/login"]);
        });
        this.normalService.errorMessage$.subscribe(function (err) {
            _this.snackBar.open(err.message, "确定", {
                duration: 3000,
            });
        });
        this.normalService.getLottor$.subscribe(function (lottor) {
            _this.snackBar.open("\u60A8\u6709\u6295\u6CE8\u5355\u4E2D\u5956\uFF0C\u4E2D\u5956\u91D1\u989D:" + lottor.lottor.Amount.toFixed(2) + ", \u5F53\u524D\u8D26\u6237\u4F59\u989D\u4E3A:\u00A5" + lottor.coin.toFixed(2), '确定', {
                duration: 3000,
            });
        });
        this.normalService.balance$.subscribe(function (balance) {
            _this.snackBar.open("\u4F59\u989D\u5237\u65B0\u6210\u529F\uFF0C\u60A8\u7684\u5F53\u524D\u8D26\u6237\u4F59\u989D\u4E3A\uFF1A" + balance + "\u5143", "确定", {
                duration: 3000,
            });
        });
        this.opened = false;
        this.normalService.chatMessage$.subscribe(function (msg) {
            console.log("msg", msg);
            _this.chat.chanel = msg.chanel;
            _this.chat.joined = msg.joined;
            _this.chat.messages.push({ m: msg.msg, senderId: msg.admin ? "admin" : msg.uid, time: new Date() });
        });
        this.normalService.leaveChat$.subscribe(function (chanel) {
            _this.chat.chanel = "";
            _this.chat.joined = false;
        });
        this.normalService.bonusInfoSubject.subscribe(function (bonusInfo) {
            if (bonusInfo.State == 0) {
                _this.snackBar.open("上一期红包已抢完，请等待下一期开奖", "确定", {
                    duration: 2000
                });
            }
            else if (bonusInfo.State == 1) {
                _this.snackBar.open("红包金额达成，开始抢红包", "确定", {
                    duration: 2000
                });
            }
        });
        this.normalService.bonus$.subscribe(function (bonus) {
            console.log("getBonus:", bonus);
            if (bonus.code !== 200) {
                _this.snackBar.open(bonus.message, "确定", {
                    duration: 2000
                });
            }
            else {
                _this.snackBar.open(bonus.message + ",\u91D1\u989D\u4E3A:" + bonus.data + "\u5143.", "确定", {
                    duration: 3000
                });
                _this.normalService.User.Coin += bonus.data;
            }
        });
        this.getBonusState();
    };
    HandyComponent.prototype.ngOnDestroy = function () {
        this.routerEventsListener.unsubscribe();
    };
    HandyComponent.prototype.getLotteries = function () {
        var _this = this;
        if (this.normalService.listLotteries.length > 0) {
            this.normalService.listLotteries.forEach(function (element) {
                element.name = element.Name;
                element.link = '/lottery/play/' + element.Id + '/' + element.Name;
                if ([1, 4, 7, 9].indexOf(element.Id) !== -1) {
                    _this.minSequences.push(element);
                }
                else {
                    _this.highSequences.push(element);
                }
            });
        }
        else {
            this.normalService.getLotteries()
                .subscribe(function (lotteries) {
                _this.normalService.listLotteries = lotteries.data.Records;
                _this.normalService.listLotteries.forEach(function (element) {
                    element.name = element.Name;
                    element.link = '/lottery/play/' + element.Id + '/' + element.Name;
                    if ([1, 4, 7, 9].indexOf(element.Id) !== -1) {
                        _this.minSequences.push(element);
                    }
                    else {
                        _this.highSequences.push(element);
                    }
                });
            });
        }
        this.navList[3].children[1].children = this.highSequences;
        this.navList[3].children[2].children = this.minSequences;
    };
    HandyComponent.prototype.showMessenger = function (title, content) {
        var messenger = this.dialog.open(_messenger_messenger_component__WEBPACK_IMPORTED_MODULE_5__["Messenger"], {
            width: '250px',
            data: { title: title, content: content }
        });
    };
    HandyComponent.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.normalService.loginOut()];
                    case 1:
                        _a.sent();
                        // this.router.navigate(['/'])
                        window.location.reload();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandyComponent.prototype.login = function () {
        this.router.navigate(["/login"]);
    };
    HandyComponent.prototype.logOut = function () {
        this.normalService.loginOut();
    };
    HandyComponent.prototype.changePassword = function () {
        var _this = this;
        if (!this.user.email) {
            this.snackBar.open("\u60A8\u9700\u8981\u5148\u5B8C\u5584\u60A8\u7684\u4FE1\u606F\uFF0C\u8BF7\u786E\u4FDD\u90AE\u7BB1\u5730\u5740\u65E0\u8BEF\uFF0C\u5426\u5219\u60A8\u65E0\u6CD5\u8FDB\u884C\u4FEE\u6539\u5BC6\u7801\u64CD\u4F5C", '确定', {
                duration: 3000,
            });
            return;
        }
        var changePass = this.dialog.open(_changepass_dialog_changepass_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ChangepassDialog"], {
            width: "250px"
        });
        changePass.afterClosed().subscribe(function (result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log('The dialog was closed', result);
                return [2 /*return*/];
            });
        }); });
    };
    HandyComponent.prototype.freshBalance = function () {
        this.normalService.freshBalance();
    };
    HandyComponent.prototype.hoverNav = function (nav) {
        nav.childDisplay = !nav.childDisplay;
    };
    HandyComponent.prototype.switchRightTab = function (index) {
        this.activeRightTab = index;
    };
    HandyComponent.prototype.changeToChat = function () {
        this.activeRightTab = 1;
    };
    HandyComponent.prototype.changeToBonus = function () {
        this.activeRightTab = 0;
    };
    HandyComponent.prototype.sendMsg = function () {
        if (!this.chat.tempMessage) {
            this.snackBar.open("消息不能为空", "确定", {
                duration: 3000,
            });
            return;
        }
        var obj = { msg: this.chat.tempMessage, chanel: this.chat.chanel, uid: "" + this.normalService.User.Id, joined: this.chat.joined };
        console.log("obj", obj);
        this.normalService.sendMsg(obj);
        this.chat.tempMessage = "";
    };
    HandyComponent.prototype.getBonusState = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var bonus;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.normalService.getBonusInfo()];
                    case 1:
                        bonus = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HandyComponent.prototype.geBonus = function () {
        if (!(this.normalService.BonusObj.State == 1)) {
            this.snackBar.open("未到开奖时间，请稍等", "", { duration: 2000 });
        }
        this.normalService.getBonus();
    };
    HandyComponent.prototype.hideRight = function () {
        this.hideRightBar = !this.hideRightBar;
    };
    HandyComponent.prototype.showQrCode = function () {
        console.log("1111");
        this.qrcodeHide = false;
    };
    HandyComponent.prototype.hideQrCode = function () {
        console.log("222");
        this.qrcodeHide = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HandyComponent.prototype, "user", void 0);
    HandyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./handy.component.html */ "./src/app/handy/handy.component.html"),
            styles: [__webpack_require__(/*! ./handy.component.scss */ "./src/app/handy/handy.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            src_app_normal_service__WEBPACK_IMPORTED_MODULE_7__["NormalService"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["OverlayContainer"]])
    ], HandyComponent);
    return HandyComponent;
}());



/***/ }),

/***/ "./src/app/lobby/content.style.scss":
/*!******************************************!*\
  !*** ./src/app/lobby/content.style.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content {\n  position: relative;\n  z-index: 0;\n  padding: 10px 0; }\n\n.wrapper {\n  position: relative;\n  width: 1000px;\n  margin: 0 auto; }\n\n.support {\n  display: block;\n  font-size: 0;\n  height: 96px;\n  margin-bottom: 10px;\n  padding-top: 34px;\n  background: url(/assets/img/icons/bg.jpg) no-repeat center; }\n\n.support li {\n    position: relative;\n    display: inline-block;\n    width: 200px;\n    vertical-align: top; }\n\n.support li a {\n      display: block;\n      height: 100%;\n      padding-left: 60px;\n      color: #dfd27f;\n      font-size: 14px;\n      line-height: 17px;\n      text-decoration: none;\n      background: no-repeat 18px center; }\n\n.support li a span {\n        display: block;\n        color: #666;\n        font-size: 12px; }\n\n.support li.app a {\n    background-image: url(/assets/img/icons/app.png); }\n\n.support li.ali a {\n    background-image: url(/assets/img/icons/ali.png); }\n\n.support li.wechat a {\n    background-image: url(/assets/img/icons/wechat.png); }\n\n.support li.qq a {\n    background-image: url(/assets/img/icons/qq.png); }\n\n.support li.fast a {\n    background-image: url(/assets/img/icons/fast.png); }\n\n#game-box {\n  display: block;\n  font-size: 0; }\n\n#game-box li {\n    display: inline-block;\n    width: 250px;\n    height: 360px;\n    vertical-align: top; }\n\n#game-box li a {\n      position: relative;\n      display: inline-block;\n      width: 100%;\n      height: 100%;\n      color: #fff;\n      font-size: 20px;\n      text-align: center;\n      text-decoration: none;\n      background-color: #29292d;\n      background-repeat: no-repeat;\n      background-position: center bottom; }\n\n#game-box li a span {\n        display: block;\n        color: #666;\n        font-size: 12px; }\n\n#game-box li a:before {\n      content: '';\n      display: block;\n      height: 44px;\n      margin: 40px 0 20px;\n      background-repeat: no-repeat;\n      background-position: center top; }\n\n#game-box li:hover a {\n    background-color: #a1915d;\n    color: #38321d; }\n\n#game-box li:hover a span {\n      color: #38321d; }\n\n#game-box li:hover a:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: inline-block;\n    width: 244px;\n    height: 354px;\n    border: 3px solid #a1915d; }\n\n#game-box li.img-top a {\n    padding-top: 180px;\n    background-position: center top; }\n\n#game-box li.slot a {\n    background-image: url(/assets/img/icons/img_slot.jpg); }\n\n#game-box li.slot a:before {\n    background-image: url(/assets/img/icons/icon_slot.png); }\n\n#game-box li.slot:hover a:before {\n    background-image: url(/assets/img/icons/icon_sloth.png); }\n\n#game-box li.live a {\n    background-image: url(/assets/img/icons/img_live.1.jpg); }\n\n#game-box li.live a:before {\n    background-image: url(/assets/img/icons/icon_live.png); }\n\n#game-box li.live:hover a:before {\n    background-image: url(/assets/img/icons/icon_liveh.png); }\n\n#game-box li.board a {\n    background-image: url(/assets/img/icons/img_board.jpg); }\n\n#game-box li.board a:before {\n    background-image: url(/assets/img/icons/icon_board.png); }\n\n#game-box li.board:hover a:before {\n    background-image: url(/assets/img/icons/icon_boardh.png); }\n\n#game-box li.fish a {\n    background-image: url(/assets/img/icons/img_fish.jpg); }\n\n#game-box li.fish a:before {\n    background-image: url(/assets/img/icons/icon_fish.png); }\n\n#game-box li.fish:hover a:before {\n    background-image: url(/assets/img/icons/icon_fishh.png); }\n\n.game-box {\n  display: block;\n  font-size: 0; }\n\n.game-box li {\n    display: inline-block;\n    width: 100%;\n    height: 360px;\n    vertical-align: top; }\n\n.game-box li a {\n      position: relative;\n      display: inline-block;\n      width: 100%;\n      height: 100%;\n      color: #fff;\n      font-size: 20px;\n      text-align: center;\n      text-decoration: none;\n      background-color: #29292d;\n      background-repeat: no-repeat;\n      background-position: center bottom; }\n\n.game-box li a span {\n        display: block;\n        color: #666;\n        font-size: 12px; }\n\n.game-box li a:before {\n      content: '';\n      display: block;\n      height: 44px;\n      margin: 40px 0 20px;\n      background-repeat: no-repeat;\n      background-position: center top; }\n\n.game-box li:hover a {\n    background-color: #a1915d;\n    color: #38321d; }\n\n.game-box li:hover a span {\n      color: #38321d; }\n\n.game-box li:hover a:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: inline-block;\n    width: 100%;\n    height: 354px;\n    border: 3px solid #a1915d; }\n\n.game-box li.img-top a {\n    padding-top: 180px;\n    background-position: center top; }\n\n.game-box li.slot a {\n    background-image: url(/assets/img/icons/img_slot.jpg); }\n\n.game-box li.slot a:before {\n    background-image: url(/assets/img/icons/icon_slot.png); }\n\n.game-box li.slot:hover a:before {\n    background-image: url(/assets/img/icons/icon_sloth.png); }\n\n.game-box li.live a {\n    background-image: url(/assets/img/icons/img_live.1.jpg); }\n\n.game-box li.live a:before {\n    background-image: url(/assets/img/icons/icon_live.png); }\n\n.game-box li.live:hover a:before {\n    background-image: url(/assets/img/icons/icon_liveh.png); }\n\n.game-box li.board a {\n    background-image: url(/assets/img/icons/img_board.jpg); }\n\n.game-box li.board a:before {\n    background-image: url(/assets/img/icons/icon_board.png); }\n\n.game-box li.board:hover a:before {\n    background-image: url(/assets/img/icons/icon_boardh.png); }\n\n.game-box li.fish a {\n    background-image: url(/assets/img/icons/img_fish.jpg); }\n\n.game-box li.fish a:before {\n    background-image: url(/assets/img/icons/icon_fish.png); }\n\n.game-box li.fish:hover a:before {\n    background-image: url(/assets/img/icons/icon_fishh.png); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3NvZnR3YXJlL2RldmVsb3AvZ2l0c3RvcmUvY3AvY3AtZnJvbnQvc3JjL2FwcC9sb2JieS9jb250ZW50LnN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxjQUFjO0VBQ2QsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDBEQUEwRCxFQUFBOztBQU45RDtJQVFRLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLG1CQUFtQixFQUFBOztBQVgzQjtNQWFZLGNBQWM7TUFDZCxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLGNBQWM7TUFDZCxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLHFCQUFxQjtNQUNyQixpQ0FBaUMsRUFBQTs7QUFwQjdDO1FBc0JnQixjQUFjO1FBQ2QsV0FBVztRQUNYLGVBQWUsRUFBQTs7QUF4Qi9CO0lBNkJRLGdEQUFnRCxFQUFBOztBQTdCeEQ7SUFnQ1EsZ0RBQWdELEVBQUE7O0FBaEN4RDtJQW1DUSxtREFBbUQsRUFBQTs7QUFuQzNEO0lBc0NRLCtDQUErQyxFQUFBOztBQXRDdkQ7SUF5Q1EsaURBQWlELEVBQUE7O0FBSXpEO0VBQ0ksY0FBYztFQUNkLFlBQVksRUFBQTs7QUFGaEI7SUFJUSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUIsRUFBQTs7QUFQM0I7TUFTWSxrQkFBa0I7TUFDbEIscUJBQXFCO01BQ3JCLFdBQVc7TUFDWCxZQUFZO01BQ1osV0FBVztNQUNYLGVBQWU7TUFDZixrQkFBa0I7TUFDbEIscUJBQXFCO01BQ3JCLHlCQUF5QjtNQUN6Qiw0QkFBNEI7TUFDNUIsa0NBQWtDLEVBQUE7O0FBbkI5QztRQXFCZ0IsY0FBYztRQUNkLFdBQVc7UUFDWCxlQUFlLEVBQUE7O0FBdkIvQjtNQTJCWSxXQUFXO01BQ1gsY0FBYztNQUNkLFlBQVk7TUFDWixtQkFBbUI7TUFDbkIsNEJBQTRCO01BQzVCLCtCQUErQixFQUFBOztBQWhDM0M7SUFxQ1kseUJBQXlCO0lBQ3pCLGNBQWMsRUFBQTs7QUF0QzFCO01Bd0NnQixjQUFjLEVBQUE7O0FBeEM5QjtJQTJDZ0IsV0FBVTtJQUFDLGtCQUFpQjtJQUFDLE1BQUs7SUFBQyxPQUFNO0lBQUMscUJBQW9CO0lBQUMsWUFBVztJQUFDLGFBQVk7SUFBQyx5QkFBd0IsRUFBQTs7QUEzQ2hJO0lBOENRLGtCQUFrQjtJQUNsQiwrQkFBK0IsRUFBQTs7QUEvQ3ZDO0lBa0RRLHFEQUFxRCxFQUFBOztBQWxEN0Q7SUFxRFEsc0RBQXNELEVBQUE7O0FBckQ5RDtJQXdEUSx1REFBdUQsRUFBQTs7QUF4RC9EO0lBMkRRLHVEQUF1RCxFQUFBOztBQTNEL0Q7SUE4RFEsc0RBQXNELEVBQUE7O0FBOUQ5RDtJQWlFUSx1REFBdUQsRUFBQTs7QUFqRS9EO0lBb0VRLHNEQUFzRCxFQUFBOztBQXBFOUQ7SUF1RVEsdURBQXVELEVBQUE7O0FBdkUvRDtJQTBFUSx3REFBd0QsRUFBQTs7QUExRWhFO0lBNkVRLHFEQUFxRCxFQUFBOztBQTdFN0Q7SUFnRlEsc0RBQXNELEVBQUE7O0FBaEY5RDtJQW1GUSx1REFBdUQsRUFBQTs7QUFJL0Q7RUFDSSxjQUFjO0VBQ2QsWUFBWSxFQUFBOztBQUZoQjtJQUlRLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQixFQUFBOztBQVAzQjtNQVNZLGtCQUFrQjtNQUNsQixxQkFBcUI7TUFDckIsV0FBVztNQUNYLFlBQVk7TUFDWixXQUFXO01BQ1gsZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixxQkFBcUI7TUFDckIseUJBQXlCO01BQ3pCLDRCQUE0QjtNQUM1QixrQ0FBa0MsRUFBQTs7QUFuQjlDO1FBcUJnQixjQUFjO1FBQ2QsV0FBVztRQUNYLGVBQWUsRUFBQTs7QUF2Qi9CO01BMkJZLFdBQVc7TUFDWCxjQUFjO01BQ2QsWUFBWTtNQUNaLG1CQUFtQjtNQUNuQiw0QkFBNEI7TUFDNUIsK0JBQStCLEVBQUE7O0FBaEMzQztJQXFDWSx5QkFBeUI7SUFDekIsY0FBYyxFQUFBOztBQXRDMUI7TUF3Q2dCLGNBQWMsRUFBQTs7QUF4QzlCO0lBNENZLFdBQVU7SUFDVixrQkFBaUI7SUFDakIsTUFBSztJQUNMLE9BQU07SUFDTixxQkFBb0I7SUFDcEIsV0FBVTtJQUNWLGFBQVk7SUFDWix5QkFDSixFQUFBOztBQXBEUjtJQXVEUSxrQkFBa0I7SUFDbEIsK0JBQStCLEVBQUE7O0FBeER2QztJQTJEUSxxREFBcUQsRUFBQTs7QUEzRDdEO0lBOERRLHNEQUFzRCxFQUFBOztBQTlEOUQ7SUFpRVEsdURBQXVELEVBQUE7O0FBakUvRDtJQW9FUSx1REFBdUQsRUFBQTs7QUFwRS9EO0lBdUVRLHNEQUFzRCxFQUFBOztBQXZFOUQ7SUEwRVEsdURBQXVELEVBQUE7O0FBMUUvRDtJQTZFUSxzREFBc0QsRUFBQTs7QUE3RTlEO0lBZ0ZRLHVEQUF1RCxFQUFBOztBQWhGL0Q7SUFtRlEsd0RBQXdELEVBQUE7O0FBbkZoRTtJQXNGUSxxREFBcUQsRUFBQTs7QUF0RjdEO0lBeUZRLHNEQUFzRCxFQUFBOztBQXpGOUQ7SUE0RlEsdURBQXVELEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2JieS9jb250ZW50LnN0eWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDA7XG4gICAgcGFkZGluZzogMTBweCAwO1xufVxuLndyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuLnN1cHBvcnQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMDtcbiAgICBoZWlnaHQ6IDk2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nLXRvcDogMzRweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvaWNvbnMvYmcuanBnKSBuby1yZXBlYXQgY2VudGVyO1xuICAgIGxpIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgYSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNjBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZGZkMjdmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgMThweCBjZW50ZXI7XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGkuYXBwIGEge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvaWNvbnMvYXBwLnBuZyk7XG4gICAgfVxuICAgIGxpLmFsaSBhIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2ljb25zL2FsaS5wbmcpO1xuICAgIH1cbiAgICBsaS53ZWNoYXQgYSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9pY29ucy93ZWNoYXQucG5nKTtcbiAgICB9XG4gICAgbGkucXEgYSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9pY29ucy9xcS5wbmcpO1xuICAgIH1cbiAgICBsaS5mYXN0IGEge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvaWNvbnMvZmFzdC5wbmcpO1xuICAgIH1cbn1cblxuI2dhbWUtYm94IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDA7XG4gICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgaGVpZ2h0OiAzNjBweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgYSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGE6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICAgICAgICBtYXJnaW46IDQwcHggMCAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGk6aG92ZXIge1xuICAgICAgICBhIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhMTkxNWQ7XG4gICAgICAgICAgICBjb2xvcjogIzM4MzIxZDtcbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzgzMjFkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGE6YWZ0ZXJ7Y29udGVudDonJztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MjQ0cHg7aGVpZ2h0OjM1NHB4O2JvcmRlcjozcHggc29saWQgI2ExOTE1ZH1cbiAgICB9XG4gICAgbGkuaW1nLXRvcCBhIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDE4MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICAgIH1cbiAgICBsaS5zbG90IGEge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvaWNvbnMvaW1nX3Nsb3QuanBnKTtcbiAgICB9XG4gICAgbGkuc2xvdCBhOmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9pY29ucy9pY29uX3Nsb3QucG5nKTtcbiAgICB9XG4gICAgbGkuc2xvdDpob3ZlciBhOmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9pY29ucy9pY29uX3Nsb3RoLnBuZyk7XG4gICAgfVxuICAgIGxpLmxpdmUgYSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9pY29ucy9pbWdfbGl2ZS4xLmpwZyk7XG4gICAgfVxuICAgIGxpLmxpdmUgYTpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvaWNvbnMvaWNvbl9saXZlLnBuZyk7XG4gICAgfVxuICAgIGxpLmxpdmU6aG92ZXIgYTpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvaWNvbnMvaWNvbl9saXZlaC5wbmcpO1xuICAgIH1cbiAgICBsaS5ib2FyZCBhIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2ljb25zL2ltZ19ib2FyZC5qcGcpO1xuICAgIH1cbiAgICBsaS5ib2FyZCBhOmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9pY29ucy9pY29uX2JvYXJkLnBuZyk7XG4gICAgfVxuICAgIGxpLmJvYXJkOmhvdmVyIGE6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2ljb25zL2ljb25fYm9hcmRoLnBuZyk7XG4gICAgfVxuICAgIGxpLmZpc2ggYSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9pY29ucy9pbWdfZmlzaC5qcGcpO1xuICAgIH1cbiAgICBsaS5maXNoIGE6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2ljb25zL2ljb25fZmlzaC5wbmcpO1xuICAgIH1cbiAgICBsaS5maXNoOmhvdmVyIGE6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2ljb25zL2ljb25fZmlzaGgucG5nKTtcbiAgICB9XG59XG5cbi5nYW1lLWJveCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAwO1xuICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAzNjBweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgYSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGE6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICAgICAgICBtYXJnaW46IDQwcHggMCAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGk6aG92ZXIge1xuICAgICAgICBhIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhMTkxNWQ7XG4gICAgICAgICAgICBjb2xvcjogIzM4MzIxZDtcbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzgzMjFkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGE6YWZ0ZXJ7XG4gICAgICAgICAgICBjb250ZW50OicnO1xuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6MDtcbiAgICAgICAgICAgIGxlZnQ6MDtcbiAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIGhlaWdodDozNTRweDtcbiAgICAgICAgICAgIGJvcmRlcjozcHggc29saWQgI2ExOTE1ZFxuICAgICAgICB9XG4gICAgfVxuICAgIGxpLmltZy10b3AgYSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxODBweDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgICB9XG4gICAgbGkuc2xvdCBhIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2ljb25zL2ltZ19zbG90LmpwZyk7XG4gICAgfVxuICAgIGxpLnNsb3QgYTpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvaWNvbnMvaWNvbl9zbG90LnBuZyk7XG4gICAgfVxuICAgIGxpLnNsb3Q6aG92ZXIgYTpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvaWNvbnMvaWNvbl9zbG90aC5wbmcpO1xuICAgIH1cbiAgICBsaS5saXZlIGEge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvaWNvbnMvaW1nX2xpdmUuMS5qcGcpO1xuICAgIH1cbiAgICBsaS5saXZlIGE6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2ljb25zL2ljb25fbGl2ZS5wbmcpO1xuICAgIH1cbiAgICBsaS5saXZlOmhvdmVyIGE6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2ljb25zL2ljb25fbGl2ZWgucG5nKTtcbiAgICB9XG4gICAgbGkuYm9hcmQgYSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9pY29ucy9pbWdfYm9hcmQuanBnKTtcbiAgICB9XG4gICAgbGkuYm9hcmQgYTpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvaWNvbnMvaWNvbl9ib2FyZC5wbmcpO1xuICAgIH1cbiAgICBsaS5ib2FyZDpob3ZlciBhOmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9pY29ucy9pY29uX2JvYXJkaC5wbmcpO1xuICAgIH1cbiAgICBsaS5maXNoIGEge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvaWNvbnMvaW1nX2Zpc2guanBnKTtcbiAgICB9XG4gICAgbGkuZmlzaCBhOmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9pY29ucy9pY29uX2Zpc2gucG5nKTtcbiAgICB9XG4gICAgbGkuZmlzaDpob3ZlciBhOmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9pY29ucy9pY29uX2Zpc2hoLnBuZyk7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/lobby/header.style.scss":
/*!*****************************************!*\
  !*** ./src/app/lobby/header.style.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".point {\n  cursor: pointer; }\n\n.fish_nr {\n  margin-top: 166px; }\n\nol.myList {\n  width: 100%; }\n\nol.myList li {\n  width: 150px;\n  /*display: inline-block;*/\n  float: left; }\n\n.code {\n  display: none; }\n\n.code:hover,\n.code:focus,\n.fr_gdcode:hover + .code,\n.fr_gdcode:focus + .code {\n  display: block; }\n\n.fish li {\n  padding-left: 5px;\n  text-align: center; }\n\n.MG-egame li {\n  padding-left: 0px;\n  text-align: center; }\n\n.MG-egame li img {\n  width: auto;\n  height: 40px;\n  float: left; }\n\n.games img {\n  width: auto;\n  height: 43px;\n  float: left; }\n\n.games .myList img {\n  width: auto;\n  height: 43px;\n  float: left; }\n\n.fish .myList img {\n  width: auto;\n  height: 35px;\n  float: left; }\n\n.promotion img {\n  width: auto;\n  height: 43px;\n  float: left; }\n\nul.top-nav > li.mobile {\n  position: relative;\n  color: #ffdfa6;\n  cursor: pointer; }\n\n.mobile-bg {\n  display: none; }\n\nul.top-nav > li.mobile:hover .mobile-bg {\n  display: block; }\n\nul.top-nav > li.mobile:hover .qr-bg {\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 100%;\n  z-index: 3; }\n\n.qr-bg {\n  background-color: #000000d4;\n  float: right;\n  position: relative;\n  z-index: 1;\n  text-align: center;\n  width: 200px;\n  height: 220px;\n  display: none;\n  border-top: 3px solid #cec67e; }\n\n.qr-bg .scan-wrd span {\n  font-weight: bold;\n  color: #fff;\n  font-size: 18px; }\n\n.qr-bg .fjc-wrd span {\n  color: #fff;\n  font-size: 15px; }\n\n.mobile-qr {\n  width: 131px;\n  height: 131px;\n  background-color: #fff;\n  margin: 0 auto;\n  padding-top: 5px; }\n\n.arrow-up {\n  width: 0;\n  height: 0;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-bottom: 10px solid #cec67e;\n  margin-left: 20px; }\n\n/*IE placeholder color*/\n\n#account-box form input:-ms-input-placeholder {\n  color: #f1d896; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3NvZnR3YXJlL2RldmVsb3AvZ2l0c3RvcmUvY3AvY3AtZnJvbnQvc3JjL2FwcC9sb2JieS9oZWFkZXIuc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLGVBQWUsRUFBQTs7QUFFZjtFQUNBLGlCQUFpQixFQUFBOztBQUVqQjtFQUNBLFdBQVcsRUFBQTs7QUFFWDtFQUNBLFlBQVk7RUFDWix5QkFBQTtFQUNBLFdBQVcsRUFBQTs7QUFFWDtFQUNBLGFBQWEsRUFBQTs7QUFJYjs7OztFQUlBLGNBQWMsRUFBQTs7QUFFZDtFQUNBLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHbEI7RUFDQSxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBRWxCO0VBQ0EsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR1g7RUFDQSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFFWDtFQUNBLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUVYO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBRWY7RUFDQyxXQUFXO0VBQ1IsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHZjtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZSxFQUFBOztBQUdqQjtFQUNBLGFBQWEsRUFBQTs7QUFHYjtFQUNDLGNBQWMsRUFBQTs7QUFHZjtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBR1o7RUFDQSwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLDZCQUE2QixFQUFBOztBQUc3QjtFQUNBLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUdmO0VBRUEsV0FBVztFQUNYLGVBQWUsRUFBQTs7QUFHZjtFQUNBLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFHaEI7RUFDQSxRQUFRO0VBQ1IsU0FBUztFQUNULG1DQUFtQztFQUNuQyxvQ0FBb0M7RUFDcEMsaUNBQWlDO0VBQ2pDLGlCQUFpQixFQUFBOztBQUVqQix1QkFBQTs7QUFDQTtFQUNFLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvYmJ5L2hlYWRlci5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvaW50e1xuY3Vyc29yOiBwb2ludGVyO1xufVxuLmZpc2hfbnJ7XG5tYXJnaW4tdG9wOiAxNjZweDtcbn1cbm9sLm15TGlzdCB7XG53aWR0aDogMTAwJTtcbn1cbm9sLm15TGlzdCBsaSB7XG53aWR0aDogMTUwcHg7XG4vKmRpc3BsYXk6IGlubGluZS1ibG9jazsqL1xuZmxvYXQ6IGxlZnQ7XG59XG4uY29kZSB7XG5kaXNwbGF5OiBub25lO1xufVxuLmZyX2dkY29kZSB7fVxuXG4uY29kZTpob3Zlcixcbi5jb2RlOmZvY3VzLFxuLmZyX2dkY29kZTpob3ZlciArIC5jb2RlLFxuLmZyX2dkY29kZTpmb2N1cyArIC5jb2RlIHtcbmRpc3BsYXk6IGJsb2NrO1xufVxuLmZpc2ggbGl7XG5wYWRkaW5nLWxlZnQ6IDVweDtcbnRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLk1HLWVnYW1lIGxpe1xucGFkZGluZy1sZWZ0OiAwcHg7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uTUctZWdhbWUgbGkgaW1ne1xud2lkdGg6IGF1dG87XG5oZWlnaHQ6IDQwcHg7XG5mbG9hdDogbGVmdDtcbn1cblxuLmdhbWVzIGltZ3tcbndpZHRoOiBhdXRvO1xuaGVpZ2h0OiA0M3B4O1xuZmxvYXQ6IGxlZnQ7XG59XG4uZ2FtZXMgLm15TGlzdCBpbWd7XG53aWR0aDogYXV0bztcbmhlaWdodDogNDNweDtcbmZsb2F0OiBsZWZ0OyAgXG59XG4uZmlzaCAubXlMaXN0IGltZ3tcbiAgICB3aWR0aDogYXV0bzsgXG4gICAgaGVpZ2h0OiAzNXB4OyBcbiAgICBmbG9hdDogbGVmdDtcbn1cbi5wcm9tb3Rpb24gaW1ne1xuXHR3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDQzcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbnVsLnRvcC1uYXY+bGkubW9iaWxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogI2ZmZGZhNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG59XG4ubW9iaWxlLWJne1xuZGlzcGxheTogbm9uZTtcbn1cblxudWwudG9wLW5hdj5saS5tb2JpbGU6aG92ZXIgLm1vYmlsZS1iZ3tcbiBkaXNwbGF5OiBibG9jazsgXG59XG5cbnVsLnRvcC1uYXY+bGkubW9iaWxlOmhvdmVyIC5xci1iZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMTAwJTtcbiAgei1pbmRleDogMztcbn1cbiAgXG4ucXItYmd7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwZDQ7XG5mbG9hdDogcmlnaHQ7XG5wb3NpdGlvbjogcmVsYXRpdmU7XG56LWluZGV4OiAxO1xudGV4dC1hbGlnbjogY2VudGVyO1xud2lkdGg6IDIwMHB4O1xuaGVpZ2h0OiAyMjBweDtcbmRpc3BsYXk6IG5vbmU7XG5ib3JkZXItdG9wOiAzcHggc29saWQgI2NlYzY3ZTtcbn1cblxuLnFyLWJnIC5zY2FuLXdyZCBzcGFue1xuZm9udC13ZWlnaHQ6IGJvbGQ7XG5jb2xvcjogI2ZmZjtcbmZvbnQtc2l6ZTogMThweDsgIFxufVxuXG4ucXItYmcgLmZqYy13cmQgc3BhbntcblxuY29sb3I6ICNmZmY7XG5mb250LXNpemU6IDE1cHg7ICBcbn1cblxuLm1vYmlsZS1xcntcbndpZHRoOiAxMzFweDtcbmhlaWdodDogMTMxcHg7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xubWFyZ2luOiAwIGF1dG87XG5wYWRkaW5nLXRvcDogNXB4O1xufVxuXG4uYXJyb3ctdXAge1xud2lkdGg6IDA7XG5oZWlnaHQ6IDA7XG5ib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbmJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbmJvcmRlci1ib3R0b206IDEwcHggc29saWQgI2NlYzY3ZTtcbm1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLypJRSBwbGFjZWhvbGRlciBjb2xvciovXG4jYWNjb3VudC1ib3ggZm9ybSBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7XG4gIGNvbG9yOiAjZjFkODk2O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/lobby/lobby.component.ts":
/*!******************************************!*\
  !*** ./src/app/lobby/lobby.component.ts ***!
  \******************************************/
/*! exports provided: LobbyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LobbyComponent", function() { return LobbyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _normal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../normal.service */ "./src/app/normal.service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var LobbyComponent = /** @class */ (function () {
    function LobbyComponent(normalService, breakpointObserver) {
        this.normalService = normalService;
        this.breakpointObserver = breakpointObserver;
        this.swipers = [];
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) { return result.matches; }));
        this.getNotices();
    }
    LobbyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.normalService.getSwiper(1)
            .subscribe(function (swiper) {
            console.log("lobby swiper", swiper);
            if (swiper.code == 200) {
                _this.swipers = swiper.data.Records;
                setTimeout(function () {
                    _this.mySwiper = new Swiper('.swiper-container1', {
                        autoplay: true,
                    });
                }, 1000);
            }
        });
    };
    LobbyComponent.prototype.getNotices = function () {
        if (this.normalService.notices.length) {
            return;
        }
        else {
            this.normalService.getNotices()
                .subscribe(function (notices) {
            });
        }
    };
    LobbyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "lobby",
            template: __webpack_require__(/*! ./lobby.template.html */ "./src/app/lobby/lobby.template.html"),
            styles: [__webpack_require__(/*! ./header.style.scss */ "./src/app/lobby/header.style.scss"), __webpack_require__(/*! ./lobby.style.scss */ "./src/app/lobby/lobby.style.scss"), __webpack_require__(/*! ./content.style.scss */ "./src/app/lobby/content.style.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_normal_service__WEBPACK_IMPORTED_MODULE_2__["NormalService"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]])
    ], LobbyComponent);
    return LobbyComponent;
}());



/***/ }),

/***/ "./src/app/lobby/lobby.style.scss":
/*!****************************************!*\
  !*** ./src/app/lobby/lobby.style.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\nbody {\n  font-family: 'Microsoft YaHei',\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  font-size: 14px;\n  line-height: 1.428571429; }\nbody.layout {\n  min-width: 1000px;\n  background-color: #4d0105; }\n* {\n  box-sizing: border-box; }\niframe {\n  border: none; }\n[ng-click] {\n  cursor: pointer; }\nol, ul {\n  display: inline-block;\n  margin: 0 auto;\n  padding: 0;\n  list-style: none; }\n.wrapper {\n  position: relative;\n  width: 1000px;\n  margin: 0 auto; }\n#header {\n  position: fixed;\n  /*z-index: 2;*/\n  z-index: 100;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background: rgba(87, 0, 5, 0.9);\n  background: #520810; }\n#header .header-top {\n  height: 30px;\n  background: #430000;\n  border-bottom: 1px solid #710011; }\nul.top-left {\n  float: left;\n  height: 29px;\n  /*background: url(/assets/img/header/website.gif?ver=180809) right center no-repeat;*/\n  /*width: 275px;*/ }\nul.top-left > li {\n  display: inline-block;\n  float: left;\n  line-height: 30px;\n  color: #ffe699;\n  /* text-indent: 1em; */\n  text-transform: uppercase; }\nul.top-left > li > span {\n  display: inline-block;\n  width: 20px;\n  height: 14px;\n  margin-right: 3px;\n  vertical-align: middle;\n  cursor: pointer; }\nul.top-left > li > span[data-language=en-US] {\n  background: url(\"/assets/img/header/en.jpg\"); }\nul.top-left > li > span[data-language=zh-CN] {\n  background: url(\"/assets/img/header/cn.jpg\"); }\nul.top-left > li > span[data-language=zh-TW] {\n  background: url(\"/assets/img/header/hk.jpg\"); }\nul.top-left > li > span[data-language=th] {\n  display: none; }\nul.top-nav {\n  float: right; }\nul.top-nav > li {\n  display: inline-block;\n  float: left;\n  line-height: 30px; }\nul.top-nav > li + li:before {\n  content: '|';\n  display: inline-block;\n  padding: 0 4px;\n  color: #fff; }\nul.top-nav > li.deposit a {\n  color: #ff0; }\nul.top-nav > li.deposit.color a {\n  color: red; }\nul.top-nav > li.redenvelope.color a {\n  color: #0f0; }\nul.top-nav > li.promotion a {\n  color: #ff0; }\nul.top-nav > li.promotion.color a {\n  color: #f0f; }\nul.top-nav > li.slot a {\n  color: #0f0; }\nul.top-nav > li.slot.color a {\n  color: red; }\nul.top-nav > li.partner a {\n  color: #f0f; }\nul.top-nav > li.partner.color a {\n  color: #0ff; }\nul.top-nav > li.trial a {\n  color: #0f0; }\nul.top-nav > li.trial.color a {\n  color: #ff0; }\nul.top-nav > li > a {\n  color: #ffdfa6;\n  font-size: 13px;\n  text-decoration: none; }\nul.top-nav > li:hover > a {\n  color: #ff0;\n  text-decoration: none;\n  cursor: pointer; }\nul.top-nav > li.paz {\n  position: relative;\n  color: #ffdfa6;\n  cursor: pointer; }\nul.top-nav > li.paz:hover:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 100%;\n  width: 341px;\n  height: 225px;\n  z-index: 3;\n  background: url(\"/assets/img/header/paiz.png\") no-repeat center top; }\n.top_hot {\n  position: relative;\n  margin-right: 18px; }\n.top_hot:before {\n  background: url(\"/assets/img/header/top_hot.png\") no-repeat;\n  width: 15px;\n  height: 16px;\n  display: block;\n  content: '';\n  position: absolute;\n  top: 0;\n  right: -19px; }\n.website {\n  padding: 0; }\n.website img {\n  vertical-align: text-bottom; }\n#logo-bg {\n  position: relative;\n  display: inline-block;\n  width: 226px;\n  height: 65px;\n  margin: 10px auto; }\n#logo-bg:after {\n  content: '';\n  position: absolute;\n  left: 135%;\n  top: 0;\n  display: inline-block;\n  width: 201px;\n  height: 70px;\n  background: url(\"/assets/img/header/slogan.png?6\") no-repeat center; }\n#logo-bg > a {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: inline-block;\n  width: 100%;\n  height: 100%; }\n#account-box {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  right: 0; }\n#account-box > form {\n  position: relative;\n  display: inline-block;\n  margin: 30px auto; }\n#account-box > form input {\n  width: 132px;\n  height: 28px;\n  color: #f1d896;\n  font-size: 14px;\n  text-indent: .5em;\n  line-height: 28px;\n  background-color: #300;\n  background-repeat: no-repeat;\n  background-position: 5px center;\n  border: 1px solid #a20009;\n  border-radius: 3px; }\n#account-box > form input#login_account {\n  text-indent: 1.8em;\n  background-image: url(\"/assets/img/header/login_ico_01.png\"); }\n#account-box > form input#login_password {\n  text-indent: 1.8em;\n  background-image: url(\"/assets/img/header/login_ico_02.png\"); }\n#account-box > form input::-webkit-input-placeholder {\n  color: inherit; }\n#account-box > form input:-ms-input-placeholder {\n  color: inherit; }\n#account-box > form input::-moz-placeholder {\n  color: inherit; }\n#account-box > form input.placeholder {\n  color: inherit; }\n#account-box > form button {\n  width: 74px;\n  height: 28px;\n  font-size: 14px;\n  border: none;\n  border-radius: 3px; }\n*.login-btn {\n  color: #300;\n  background: #ffa200; }\n*.login-btn:hover {\n  color: #fff;\n  background: #1c3cb1; }\n*.join-btn {\n  color: #544101;\n  background: #ffde00; }\n*.join-btn:hover {\n  color: #fff;\n  background: #df3a00; }\n#check-code-wrapper {\n  position: relative;\n  display: inline-block; }\n#vImg {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  width: auto;\n  height: 24px; }\n#agree {\n  display: inline-block;\n  position: absolute;\n  top: 110%;\n  right: 6px;\n  z-index: 1;\n  padding: 2px 5px;\n  font-size: 12px;\n  color: #fff;\n  background-color: #520810; }\n#agree a {\n  color: #ffa200;\n  font-weight: bold;\n  cursor: pointer; }\nul#account-info {\n  position: relative;\n  margin: 10px auto 5px; }\nul#account-info > li {\n  float: left;\n  width: 200px;\n  height: 25px;\n  padding: 0 5px;\n  color: #fbe69a;\n  font-size: 12px;\n  line-height: 25px; }\nul#account-info > li > span.account {\n  display: inline-block;\n  max-width: 6em;\n  color: #fff600;\n  font-weight: bold;\n  -ms-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  vertical-align: top;\n  overflow: hidden; }\nul#account-info > li a {\n  color: #fff;\n  cursor: pointer; }\nul#account-info > li a:hover {\n  color: #ffa200; }\nul#account-nav {\n  display: block;\n  text-align: left; }\nul#account-nav > li {\n  display: inline-block; }\nul#account-nav > li + li:before {\n  content: '|';\n  color: #fbe69a; }\nul#account-nav > li > a {\n  display: inline-block;\n  color: #fbe69a;\n  font-size: 12px;\n  text-decoration: none;\n  text-align: center;\n  cursor: pointer; }\nul#account-nav > li:hover > a {\n  color: #ff0; }\n#nav {\n  position: relative;\n  height: 47px;\n  text-align: center;\n  background: #930008;\n  border-top: 1px solid #b1000a; }\n#nav > ul {\n  width: 1000px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between; }\n#nav > ul > li {\n  position: relative;\n  display: block;\n  width: 100%;\n  /*float: none;\n   width: 125px;\n  height: 46px; */\n  color: #ffdfa6; }\n#nav > ul > li + li > a:before {\n  content: '';\n  display: inline-block;\n  position: absolute;\n  left: -1px;\n  top: 0;\n  width: 2px;\n  height: 46px;\n  background: url(\"/assets/img/header/nav_line.png\") no-repeat center; }\n#nav > ul > li.hot1 > a:after {\n  content: '';\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  right: 5px;\n  width: 22px;\n  height: 12px;\n  background: url(\"/assets/img/header/hot_01.gif\"); }\n#nav > ul > li.hot2 > a:after {\n  content: '';\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  right: 5px;\n  width: 19px;\n  height: 25px;\n  background: url(\"/assets/img/header/hot_02.gif\") no-repeat center top; }\n#nav > ul > li:hover {\n  background: #aa0009; }\n#nav > ul > li.color > a {\n  color: #fff; }\n#nav > ul > li > a {\n  position: relative;\n  display: block;\n  width: 100%;\n  color: #ffdfa6;\n  line-height: 46px;\n  text-decoration: none;\n  text-transform: uppercase; }\n#nav > ul > li:hover .subnav {\n  visibility: visible; }\n#nav > ul > li:hover .subnav li {\n  opacity: 1;\n  -webkit-transform: none;\n  transform: none; }\n.subnav {\n  visibility: hidden;\n  position: absolute;\n  top: 100%;\n  left: -25px;\n  width: 175px;\n  font-size: 0;\n  -webkit-perspective: 280px;\n  -ms-perspective: 280px;\n  perspective: 280px;\n  z-index: 999;\n  transition: visibility linear .5s; }\n.subnav.col2 {\n  width: 350px;\n  left: -112px; }\n.subnav ol {\n  float: left; }\n.subnav li {\n  position: relative;\n  width: 175px;\n  height: 43px;\n  padding-left: 5px;\n  color: #fff;\n  font-size: 13px;\n  text-align: left;\n  line-height: 41px;\n  background-image: url(\"/assets/img/header/subnav_bg.png\");\n  border: 1px solid #ffd053;\n  opacity: 0;\n  -webkit-transform: rotateY(90deg);\n  transform: rotateY(90deg);\n  transition: opacity .4s,-webkit-transform .5s;\n  transition: opacity .4s,transform .5s;\n  transition: opacity .4s,transform .5s,-webkit-transform .5s;\n  text-align: center; }\n/*.subnav li:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 6px;\n  width: 43px;\n  height: 43px;\n  background-position: center;\n  background-repeat: no-repeat;\n}*/\n.subnav li a {\n  color: inherit;\n  text-decoration: none; }\n.subnav.fish li:before {\n  width: 50px; }\n.subnav.promotion li[game-box=\"deposit\"]:before {\n  background-image: url(\"/assets/img/header/promo/deposit.png\"); }\n.subnav.promotion li[game-box=\"promotion\"]:before {\n  content: \"\";\n  background-image: url(\"/assets/img/header/promo/promotion.png\"); }\n.subnav.promotion li[game-box=\"slot\"]:before {\n  background-image: url(\"/assets/img/header/promo/slot.png\"); }\n#banner {\n  position: relative;\n  background: #000 url(\"/assets/img/header/banner.jpg\") no-repeat center top; }\n#news {\n  position: absolute;\n  bottom: 0;\n  z-index: 11;\n  width: 100%;\n  height: 37px;\n  background: rgba(0, 0, 0, 0.5); }\n#news .wrapper {\n  padding-left: 25px;\n  line-height: 33px;\n  height: 35px;\n  color: #ffdfa6;\n  vertical-align: top;\n  background: url(\"/assets/img/header/news.png\") no-repeat left center; }\n#hot-news {\n  display: inline-block;\n  float: right;\n  width: 900px;\n  white-space: nowrap;\n  overflow: hidden; }\n#hot-news li {\n  display: inline-block;\n  vertical-align: top;\n  color: #fff;\n  height: 33px;\n  font-size: 14px;\n  text-decoration: none;\n  line-height: 33px; }\n#hot-news li:hover {\n  text-decoration: underline; }\n#content {\n  position: relative; }\n#footer {\n  text-align: center;\n  background: #560003; }\n#footer-info {\n  width: 100%;\n  height: 43px;\n  text-align: center;\n  background: #7f0007; }\n#footer-info > div, #footer-info > div > a {\n  position: relative;\n  display: inline-block;\n  width: 250px;\n  height: 43px;\n  text-align: left;\n  color: #fefda9;\n  line-height: 43px;\n  background-position: left center;\n  background-repeat: no-repeat;\n  text-decoration: none; }\n#footer-info > div + div:before {\n  content: '|';\n  position: absolute;\n  left: -10px; }\n#footer-info > div.tel {\n  padding-left: 20px;\n  background: url(\"/assets/img/footer/info_ico_01.png\") no-repeat left center; }\n#footer-info > div.mail {\n  padding-left: 20px;\n  background: url(\"/assets/img/footer/info_ico_02.png\") no-repeat left center; }\n#footer-info > div.chat {\n  padding-left: 30px;\n  background: url(\"/assets/img/footer/info_ico_03.png\") no-repeat left center; }\n#footer-logo {\n  display: block;\n  width: 100%;\n  height: 60px;\n  background: url(\"/assets/img/footer/footer_logo.jpg?3\") no-repeat center; }\n#footer-nav {\n  display: inline-block;\n  margin: 10px auto;\n  text-align: center; }\n#footer-nav li {\n  display: inline-block; }\n#footer-nav li + li:before {\n  content: '|';\n  padding: 0 10px;\n  color: #f5f3af; }\n#footer-nav li a {\n  color: #f5f3af;\n  font-size: 14px;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase; }\n#footer-nav li a:hover {\n  color: #fff; }\n#footer-suggest {\n  display: block;\n  margin: 0;\n  color: #f5f3af; }\n#footer-suggest small {\n  font-size: 14px;\n  line-height: 2em; }\n.services {\n  position: absolute;\n  z-index: 2;\n  top: 240px; }\n.services a {\n  display: block;\n  height: 100%; }\n.service-left {\n  left: 0; }\n.service-left > ul {\n  width: 130px;\n  /*background: url('/assets/img/left.gif') no-repeat center top;*/ }\n.service-left .mg {\n  height: 68px; }\n.service-left .deposit {\n  height: 72px; }\n.service-left .slot {\n  height: 131px; }\n.service-left .app {\n  height: 160px; }\n.service-left .closed {\n  height: 22px;\n  cursor: pointer; }\n.service-right {\n  right: 0; }\n.service-right > ul {\n  width: 130px;\n  /*background: url('/assets/img/right.2.gif') no-repeat center top;*/ }\n.service-right .chat {\n  height: 73px;\n  margin-bottom: 5px; }\n.service-right .client {\n  height: 27px;\n  margin-bottom: 5px; }\n.service-right .qq {\n  height: 86px;\n  padding-top: 48px;\n  color: #fff;\n  font-size: 16px;\n  text-align: center; }\n.service-right .wechat {\n  height: 155px; }\n.service-right .tel {\n  height: 70px;\n  margin-bottom: 5px;\n  padding-top: 44px;\n  color: #fff;\n  font-size: 14px;\n  text-align: center; }\n.service-right .closed {\n  height: 26px;\n  cursor: pointer; }\naside.service-left-bottom {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: 3; }\naside.service-left-bottom li {\n  width: 190px;\n  height: 244px; }\naside.service-left-bottom li a {\n  display: block;\n  height: 100%;\n  background-position: center top;\n  background-repeat: no-repeat; }\naside.service-left-bottom li span {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n  /*background-image: url('/assets/img/close.png');*/ }\naside.service-left-bottom li.app a {\n  width: 180px;\n  height: 240px;\n  /*background-image: url('/assets/img/s_lb.1.png');*/ }\naside.service-left-bottom li.deposit a {\n  /*background-image: url('/assets/img/s_lb_deposit.gif');*/ }\naside.service-left-bottom li.deposit span {\n  width: 33px;\n  height: 31px;\n  background: none; }\n#review-list {\n  position: fixed;\n  bottom: -77px;\n  left: 0;\n  width: 100%;\n  height: 77px;\n  background: rgba(0, 0, 0, 0.8);\n  background: #000;\n  color: #fff;\n  z-index: 1;\n  transition: bottom .4s; }\n#review-list.open {\n  bottom: 0; }\n#review-list .up, #review-list .down {\n  position: absolute;\n  top: -24px;\n  left: 0;\n  width: 150px;\n  height: 24px;\n  line-height: 24px;\n  text-align: center;\n  /*background: url('/assets/img/tab.png') no-repeat;*/ }\n#review-list .up:after, #review-list .down:after {\n  content: '';\n  display: inline-block;\n  margin-left: 5px;\n  width: 7px;\n  height: 8px; }\n#review-list .up:after {\n  /*background: url('/assets/img/up.png') no-repeat;*/ }\n#review-list .down:after {\n  /*background: url('/assets/img/down.png') no-repeat;*/ }\n#review-list .wrapper {\n  padding-left: 80px;\n  height: 77px;\n  /*background: url('/assets/img/txt.png') no-repeat 20px 15px;*/ }\n#review-box li {\n  display: inline-block;\n  position: relative;\n  margin: 10px 8px 0;\n  width: 60px;\n  height: 60px; }\n#review-box li.no-review {\n  line-height: 60px; }\n#review-box li img {\n  width: 60px;\n  height: 60px; }\n#review-box li div {\n  display: none;\n  position: absolute;\n  top: -31px;\n  left: -5px;\n  padding-top: 2px;\n  width: 70px;\n  height: 29px;\n  text-align: center;\n  -ms-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  /*background: url('/assets/img/title.png') no-repeat;*/ }\n#review-box li:hover div {\n  display: block; }\n#mailbox {\n  position: relative;\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  vertical-align: top;\n  text-decoration: none;\n  background: url(\"/assets/img/header/m_icon.png\") no-repeat; }\n#mailbox > span, #mailbox > span:hover {\n  position: absolute;\n  left: 80%;\n  bottom: 60%;\n  min-width: 16px;\n  padding: 0 2px;\n  height: 16px;\n  color: #000;\n  font-size: 12px;\n  text-align: center;\n  line-height: 16px;\n  border-radius: 5px;\n  background: #fff47e; }\n#marquee-wrapper {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n  display: none; }\n#marquee-wrapper.show {\n  display: block;\n  z-index: 1000;\n  /*background-image: url('/assets/img/transparent-black.png');*/ }\n#marquee {\n  width: 600px;\n  max-height: 500px;\n  margin: 30px auto 0 auto;\n  background-color: #fff;\n  /*background-image: url('/assets/img/table_background.jpg');*/\n  border-radius: 5px;\n  cursor: default;\n  transition: margin-top ease-in 300ms; }\n#marquee > header {\n  text-align: center;\n  background-color: #e9e9e9;\n  border-bottom: 1px solid #ccc;\n  border-radius: 5px 5px 0 0; }\n#marquee > header > h2 {\n  margin: 0;\n  color: #0080e3;\n  font-size: 21px;\n  line-height: 60px; }\nul#newsBags {\n  margin: 0;\n  padding: 10px 50px;\n  max-height: 380px;\n  overflow: auto; }\nul#newsBags > li {\n  color: #454545;\n  font-size: 13px;\n  line-height: 27px;\n  list-style: disc;\n  white-space: pre-line;\n  border-bottom: 1px dashed #999; }\n#marquee > footer {\n  text-align: center;\n  line-height: 80px;\n  background-color: #e9e9e9;\n  background-image: -webkit-radial-gradient(center top, ellipse farthest-side, rgba(0, 0, 0, 0.3), transparent);\n  background-size: 100% 8px;\n  background-repeat: no-repeat;\n  border-top: 1px solid #ccc;\n  border-radius: 0 0 5px 5px; }\n#marquee > footer > span {\n  display: inline-block;\n  width: 119px;\n  font-size: 15px;\n  font-weight: bolder;\n  line-height: 45.5px;\n  /*background-image: url('/assets/img/sent_bn.png');*/\n  cursor: pointer; }\n#marquee > footer > span:hover {\n  background-position: 0 -45.5px; }\n.ui-widget-header {\n  min-height: 30px;\n  line-height: 30px; }\n.ui-dialog {\n  z-index: 999; }\n.ui-dialog .ui-dialog-title {\n  font-size: 13px;\n  line-height: 15px; }\n.ui-dialog .ui-dialog-buttonpane {\n  margin: 0;\n  padding: 0;\n  border: none; }\nbutton.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only {\n  font-size: 12px; }\n.ui-dialog .ui-dialog-buttonpane button {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  margin: 3px 6px;\n  background: #ffd800; }\n#logingame-body {\n  background-color: #480004; }\n#lobby {\n  display: inline-block;\n  width: 100%;\n  margin: 15px auto; }\ndiv.slots, #lobby > ul.game-list {\n  width: 100%;\n  padding: 6px;\n  border: 2px solid #94020a; }\n#lobby > ul.game-list > li {\n  display: inline-block;\n  float: left;\n  background-position: center top;\n  background-repeat: no-repeat; }\n#lobby > ul.game-list > li:hover {\n  background-position: center bottom; }\n#un-lobby {\n  display: inline-block;\n  width: 100%;\n  margin: 10px auto;\n  padding: 15px;\n  background: #480004;\n  border: 2px solid #94020a; }\n#un-lobby aside {\n  float: left;\n  width: 253px;\n  padding-top: 59px;\n  background: url(\"/assets/img/about/aside_top.png\") no-repeat left top; }\n#un-lobby ul#sidebar {\n  padding-bottom: 183px;\n  background: url(\"/assets/img/about/aside_bottom.png\") no-repeat center bottom; }\n#un-lobby ul#sidebar li {\n  width: 253px;\n  height: 40px;\n  background: #930008; }\n#un-lobby ul#sidebar li a {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  color: #fefba6;\n  font-size: 14px;\n  text-align: center;\n  text-decoration: none;\n  line-height: 36px; }\n#un-lobby ul#sidebar li:hover a {\n  color: #480004;\n  background: url(\"/assets/img/about/side.png\") no-repeat center; }\n#articles {\n  float: right;\n  width: 680px;\n  padding: 0;\n  color: #fefba6;\n  text-align: left; }\n#articles h2 {\n  color: #fefba6;\n  font-size: 18px;\n  margin: 0; }\n#articles h3 {\n  color: #fefba6;\n  font-size: 18px; }\n#articles h4 {\n  color: #fefba6;\n  font-size: 14px;\n  text-align: left; }\n#articles h4:before {\n  /*content: 'â—';*/\n  padding-right: 10px; }\n#articles > ul {\n  list-style: none; }\n#articles ol {\n  padding-left: 20px;\n  list-style-type: decimal; }\n#articles p, #articles li {\n  font-size: 12px;\n  text-align: justify;\n  line-height: 2em; }\n#articles p {\n  margin: 1em 0; }\n#articles table {\n  width: 100%; }\n#articles table tr, #articles table th, #articles table td {\n  color: #fefba6;\n  line-height: 2em;\n  text-align: center;\n  background: #3d0508;\n  border: 1px solid #4b0a0e; }\n#articles .highlight {\n  color: #fff; }\n#articles ul.mtab-menual {\n  margin: 15px auto; }\n#articles ul.mtab-menual li {\n  display: inline-block;\n  width: 115px;\n  height: 45px;\n  color: #fefba6;\n  font-size: 14px;\n  line-height: 43px;\n  text-align: center;\n  font-weight: bold;\n  background: #480004;\n  border: 2px solid #930008;\n  box-sizing: border-box;\n  cursor: pointer; }\n#articles ul.mtab-menual li.mtab {\n  color: #fff;\n  background: #930008; }\n#articles ul.deposit {\n  list-style-type: none; }\n#articles ul.deposit > li {\n  counter-increment: title;\n  margin: 12px auto; }\n#articles ul.deposit > li a {\n  position: relative;\n  color: red;\n  font-size: 16px;\n  text-decoration: none;\n  cursor: pointer; }\n#articles ul.deposit > li > a:before {\n  content: \"æ–¹æ³•ï¼š\" counter(title, decimal) \"ã€€\"; }\n#articles ul.deposit > li > a:after {\n  content: \"\";\n  position: absolute;\n  top: 3px;\n  left: 44px;\n  width: 15px;\n  height: 15px;\n  border: 1px solid red;\n  border-radius: 50%; }\n#articles ul.deposit > li .deposit-bg {\n  color: #ff0;\n  background: red; }\n#articles.deposit .deposit-title {\n  color: #0ff; }\n#articles.deposit .deposit-title a {\n  text-decoration: none; }\n#articles.deposit .highlight-green {\n  color: #00b050; }\n#articles .highlight-red, #articles.deposit .highlight-red {\n  color: red; }\n#articles.deposit .highlight-pink {\n  color: #f0f; }\n#articles.deposit .highlight-lightblue {\n  color: #0ff; }\n#articles.deposit .highlight-blue {\n  color: #00f; }\n#articles.deposit .underline {\n  text-decoration: underline; }\n.body {\n  position: relative;\n  width: 1000px;\n  margin: 0 auto;\n  padding: 1px;\n  font-size: 14px;\n  font-family: PMingLiU;\n  background: #000;\n  box-sizing: border-box; }\n.body #title {\n  color: #fff;\n  text-align: center;\n  background: #430000; }\n.body.container #title, .body #account-heading, .body #withdrawal-heading {\n  color: #fff;\n  background: #aa0009; }\n.body #show-account-info.btn {\n  color: #fff; }\n.form-group .control-div input::-webkit-input-placeholder {\n  color: #999; }\n.form-group .control-div input::-moz-placeholder {\n  color: #999; }\n.form-group .control-div input:-ms-input-placeholder {\n  color: #999; }\n.form-group .control-div input.placeholder {\n  color: #999; }\n.panel {\n  width: 100%;\n  color: #5f5f5f;\n  /*background: url('/assets/img/panel_background.jpg') repeat;*/\n  border: 0; }\n#title {\n  height: 48px;\n  font-weight: bold;\n  font-size: 21px;\n  font-family: 'Microsoft JhengHei';\n  text-transform: uppercase;\n  border: none; }\n#title > div {\n  margin-top: -1px;\n  text-align: center;\n  text-transform: uppercase; }\n#account-panel, #withdrawal-panel {\n  width: 792px;\n  color: #5f5f5f;\n  /*background: url('/assets/img/panel_background.jpg') repeat;*/\n  border: 1px solid #b7b7b7;\n  box-shadow: inset 0 0 1px 1px #fff; }\n#account-heading, #withdrawal-heading {\n  margin: 1px 1px;\n  font-family: PMingLiU;\n  font-size: 15px;\n  font-weight: bold;\n  text-align: left;\n  text-transform: uppercase; }\n.panel-body {\n  text-align: center; }\n.panel-body > form {\n  width: 700px;\n  margin: 0 auto; }\n.control-div input {\n  width: 100%;\n  padding: 3px 5px;\n  line-height: 25px;\n  background: url(\"/assets/img/input_center.png\") repeat-y;\n  border: 0; }\n.control-div input:focus {\n  outline: 0;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 249, 149, 0.6); }\n.tooltip {\n  position: absolute;\n  left: 93%;\n  top: -2px;\n  z-index: 1;\n  display: inline-block; }\n.tooltipshowarrow_int {\n  position: absolute;\n  top: 5px;\n  right: -1px;\n  z-index: 1000;\n  display: block;\n  border: 8px solid;\n  border-color: transparent #fff;\n  border-left-width: 0;\n  box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.07); }\n.tooltipshowarrow_out {\n  position: absolute;\n  top: 5px;\n  right: 0;\n  z-index: 999;\n  display: block;\n  border: 8px solid;\n  border-left-width: 0;\n  border-color: transparent #bbb;\n  box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.07); }\n.tooltipshow {\n  position: absolute;\n  z-index: 999 !important;\n  width: 250px;\n  padding: 5px;\n  background-color: #fff;\n  border: 1px solid;\n  border-color: #bbb #bbb #a8a8a8;\n  border-radius: 5px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); }\n.form-control::-webkit-input-placeholder {\n  color: #878787; }\n.form-control:-moz-placeholder {\n  color: #878787; }\n.form-control::-moz-placeholder {\n  color: #878787; }\n.form-control:-ms-input-placeholder {\n  color: #878787; }\n.input-block {\n  position: relative;\n  display: inline-block;\n  width: 304px; }\n.help-block {\n  color: #8a6d3b; }\n.input-block-top {\n  position: absolute;\n  top: -2px;\n  left: 0;\n  display: inline-block;\n  width: 100%;\n  height: 4px;\n  background: url(\"/assets/img/input-top-btm.png\") no-repeat 0 0; }\n.input-block-btm {\n  position: absolute;\n  bottom: -8px;\n  left: 0;\n  display: inline-block;\n  height: 10px;\n  width: 100%;\n  background: url(\"/assets/img/input-top-btm.png\") no-repeat 0 -4px; }\n.btn-submit {\n  position: relative;\n  width: 119px;\n  height: 45px;\n  color: #454545;\n  font-size: 15px;\n  font-family: PMingLiU;\n  font-weight: bold;\n  background: url(\"/assets/img/sent_bn.png\") no-repeat 0 0;\n  border: 0; }\n.btn-submit:hover {\n  color: #454545;\n  background: url(\"/assets/img/sent_bn.png\") no-repeat 0 -46px; }\n.btn-submit[disabled]:hover {\n  color: #999;\n  background-position-y: 0; }\n.table {\n  color: #000; }\n.table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td, .table > tbody > tr > td, .table > tfoot > tr > td {\n  line-height: 2em; }\ntable tfoot {\n  text-align: center;\n  background: #eee; }\n#popup-dialog {\n  display: none;\n  padding: 0; }\n#popup-dialog img {\n  width: 100%;\n  height: auto !important; }\n#popup-dialog .dialog-footer {\n  height: 30px;\n  padding: 0 3px;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: 29px;\n  border-top: 1px solid #000; }\nul#newsBags > li {\n  white-space: pre-line;\n  word-break: break-all;\n  word-wrap: break-word; }\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10000;\n  background-color: #000;\n  visibility: hidden;\n  opacity: 0;\n  transition: all .2s; }\n.modal-overlay.modal-show {\n  visibility: visible;\n  opacity: .5; }\n.modal-announcement {\n  position: absolute;\n  top: 7%;\n  left: 50%;\n  margin-left: -499px;\n  width: 997px;\n  z-index: 10000;\n  visibility: hidden;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  opacity: 0;\n  transition: all .5s; }\n.modal-announcement.modal-show {\n  visibility: visible;\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  opacity: 1; }\n.modal-announcement > .ma-title {\n  min-height: 38px;\n  color: #fff;\n  padding: 5px 0;\n  text-align: center;\n  word-break: break-all;\n  background-color: #06c;\n  border-radius: 4px 4px 0 0; }\n.modal-announcement > .ma-title > span {\n  font-size: 20px; }\n.modal-announcement > .ma-title > i {\n  float: right;\n  margin-right: 10px;\n  cursor: pointer; }\n.modal-announcement > .ma-body > section {\n  height: 542px;\n  display: inline-block;\n  vertical-align: top; }\n.modal-announcement .ma-sidebar {\n  width: 24%;\n  background-color: #fff;\n  overflow-y: auto;\n  overflow-x: hidden; }\n.modal-announcement .ma-sidebar ul {\n  width: 100%; }\n.modal-announcement .ma-sidebar li {\n  width: 100%;\n  padding: 10px 12px;\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n  color: #000;\n  cursor: pointer; }\n.modal-announcement .ma-sidebar li span {\n  display: inline-block;\n  width: 80%;\n  vertical-align: middle;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.modal-announcement .ma-sidebar li:hover, .modal-announcement .ma-sidebar li.active {\n  background-color: #06c;\n  color: #fff; }\n.modal-announcement .ma-sidebar i.fa-comment-o {\n  padding-right: 4px; }\n.modal-announcement .ma-sidebar i.fa-chevron-right {\n  float: right;\n  margin-top: 4px; }\n.modal-announcement .ma-content {\n  width: 76%;\n  background-color: #fff;\n  overflow: auto; }\n.modal-announcement .ma-content img {\n  max-width: 100%;\n  height: auto; }\n.modal-announcement > .ma-footer {\n  min-height: 38px;\n  color: #fff;\n  padding: 5px 30px 5px 0;\n  line-height: 38px;\n  text-align: right;\n  word-break: break-all;\n  background-color: #06c;\n  border-radius: 0 0 4px 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9iYnkvbG9iYnkuc3R5bGUuc2NzcyIsIi9Wb2x1bWVzL3NvZnR3YXJlL2RldmVsb3AvZ2l0c3RvcmUvY3AvY3AtZnJvbnQvc3JjL2FwcC9sb2JieS9sb2JieS5zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLDBFQUEwRTtFQUMxRSxlQUFlO0VBQ2Ysd0JBQXdCLEVBQUE7QUFHMUI7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCLEVBQUE7QUFHM0I7RUFHRSxzQkFBc0IsRUFBQTtBQUd4QjtFQUNFLFlBQVksRUFBQTtBREFkO0VDSUUsZUFBZSxFQUFBO0FBR2pCO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxVQUFVO0VBQ1YsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGNBQWMsRUFBQTtBQUdoQjtFQUNFLGVBQWU7RUFDZixjQUFBO0VBQ0EsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLCtCQUEyQjtFQUMzQixtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0NBQWdDLEVBQUE7QUFHbEM7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFGQUFBO0VBQ0EsZ0JBQUEsRUFBaUI7QUFHbkI7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsc0JBQUE7RUFDQSx5QkFBeUIsRUFBQTtBQUczQjtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsNENBQTRDLEVBQUE7QUFHOUM7RUFDRSw0Q0FBNEMsRUFBQTtBQUc5QztFQUNFLDRDQUE0QyxFQUFBO0FBRzlDO0VBQ0UsYUFBYSxFQUFBO0FBR2Y7RUFDRSxZQUFZLEVBQUE7QUFHZDtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxXQUFXLEVBQUE7QUFHYjtFQUNFLFdBQVcsRUFBQTtBQUdiO0VBQ0UsVUFBVSxFQUFBO0FBR1o7RUFDRSxXQUFXLEVBQUE7QUFHYjtFQUNFLFdBQVcsRUFBQTtBQUdiO0VBQ0UsV0FBVyxFQUFBO0FBR2I7RUFDRSxXQUFXLEVBQUE7QUFHYjtFQUNFLFVBQVUsRUFBQTtBQUdaO0VBQ0UsV0FBVyxFQUFBO0FBR2I7RUFDRSxXQUFXLEVBQUE7QUFHYjtFQUNFLFdBQVcsRUFBQTtBQUdiO0VBQ0UsV0FBVyxFQUFBO0FBR2I7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixlQUFlLEVBQUE7QUFHakI7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWUsRUFBQTtBQUdqQjtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFNBQVM7RUFDVCxZQUFZO0VBQ1osYUFBYTtFQUNiLFVBQVU7RUFDVixtRUFBbUUsRUFBQTtBQUdyRTtFQUFVLGtCQUFrQjtFQUFFLGtCQUFrQixFQUFBO0FBQ2hEO0VBQWdCLDJEQUEyRDtFQUFFLFdBQVc7RUFBRSxZQUFZO0VBQUUsY0FBYztFQUFFLFdBQVc7RUFBRSxrQkFBa0I7RUFBRSxNQUFNO0VBQUUsWUFBWSxFQUFBO0FBQzdLO0VBQVUsVUFBVSxFQUFBO0FBQ3BCO0VBQWMsMkJBQTJCLEVBQUE7QUFFekM7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7QUFJbkI7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixNQUFNO0VBQ04scUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixZQUFZO0VBQ1osbUVBQW1FLEVBQUE7QUFHckU7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVksRUFBQTtBQUdkO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUSxFQUFBO0FBR1Y7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0IseUJBQXlCO0VBR3pCLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLDREQUE0RCxFQUFBO0FBRzlEO0VBQ0Usa0JBQWtCO0VBQ2xCLDREQUE0RCxFQUFBO0FBRzlEO0VBQ0UsY0FBYyxFQUFBO0FBR2hCO0VBQ0UsY0FBYyxFQUFBO0FBR2hCO0VBQ0UsY0FBYyxFQUFBO0FBR2hCO0VBQ0UsY0FBYyxFQUFBO0FBR2hCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUdaLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsV0FBVztFQUNYLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UsV0FBVztFQUNYLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UsY0FBYztFQUNkLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UsV0FBVztFQUNYLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVksRUFBQTtBQUdkO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7RUFDWCx5QkFBeUIsRUFBQTtBQUczQjtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZSxFQUFBO0FBR2pCO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osY0FBYztFQUNkLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsMkJBQTJCO0VBRTNCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsV0FBVztFQUNYLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGNBQWMsRUFBQTtBQUdoQjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsWUFBWTtFQUNaLGNBQWMsRUFBQTtBQUdoQjtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsV0FBVyxFQUFBO0FBR2I7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsNkJBQTZCLEVBQUE7QUFHL0I7RUFBUyxhQUFhO0VBQUUsY0FBYztFQUFFLGFBQWE7RUFBRSw4QkFBOEIsRUFBQTtBQUVyRjtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYOztpQkQ3Q2U7RUNnRGYsY0FBYyxFQUFBO0FBR2hCO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE1BQU07RUFDTixVQUFVO0VBQ1YsWUFBWTtFQUNaLG1FQUFtRSxFQUFBO0FBR3JFO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdEQUFnRCxFQUFBO0FBR2xEO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLHFFQUFxRSxFQUFBO0FBR3ZFO0VBQ0UsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSxXQUFXLEVBQUE7QUFHYjtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHlCQUF5QixFQUFBO0FBRzNCO0VBQ0UsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0VBSXZCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLDBCQUEwQjtFQUUxQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFJWixpQ0FBaUMsRUFBQTtBQUduQztFQUNFLFlBQVk7RUFDWixZQUFZLEVBQUE7QUFHZDtFQUNFLFdBQVcsRUFBQTtBQUdiO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix5REFBeUQ7RUFDekQseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixpQ0FBaUM7RUFJakMseUJBQXlCO0VBSXpCLDZDQUFxQztFQUFyQyxxQ0FBcUM7RUFBckMsMkRBQXFDO0VBQ3JDLGtCQUFrQixFQUFBO0FBR3BCOzs7Ozs7Ozs7RURuREU7QUM4REY7RUFDRSxjQUFjO0VBQ2QscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSxXQUFXLEVBQUE7QUFJYjtFQUNFLDZEQUE2RCxFQUFBO0FBRy9EO0VBQ0UsV0FBVztFQUNYLCtEQUErRCxFQUFBO0FBR2pFO0VBQ0UsMERBQTBELEVBQUE7QUFJNUQ7RUFDRSxrQkFBa0I7RUFDbEIsMEVBQTBFLEVBQUE7QUFHNUU7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDhCQUEwQixFQUFBO0FBRzVCO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osY0FBYztFQUNkLG1CQUFtQjtFQUNuQixvRUFBb0UsRUFBQTtBQUd0RTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UsMEJBQTBCLEVBQUE7QUFHNUI7RUFDRSxrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyw0QkFBNEI7RUFDNUIscUJBQXFCLEVBQUE7QUFJdkI7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTtBQUdiO0VBQ0Usa0JBQWtCO0VBQ2xCLDJFQUEyRSxFQUFBO0FBRzdFO0VBQ0Usa0JBQWtCO0VBQ2xCLDJFQUEyRSxFQUFBO0FBRzdFO0VBQ0Usa0JBQWtCO0VBQ2xCLDJFQUEyRSxFQUFBO0FBRzdFO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0VBQXdFLEVBQUE7QUFHMUU7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGNBQWMsRUFBQTtBQUdoQjtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQix5QkFBeUIsRUFBQTtBQUczQjtFQUNFLFdBQVcsRUFBQTtBQUdiO0VBQ0UsY0FBYztFQUNkLFNBQVM7RUFDVCxjQUFjLEVBQUE7QUFHaEI7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVUsRUFBQTtBQUdaO0VBQ0UsY0FBYztFQUNkLFlBQVksRUFBQTtBQUdkO0VBQ0UsT0FBTyxFQUFBO0FBR1Q7RUFDRSxZQUFZO0VBQ1osZ0VBQUEsRUFBaUU7QUFHbkU7RUFDRSxZQUFZLEVBQUE7QUFHZDtFQUNFLFlBQVksRUFBQTtBQUdkO0VBQ0UsYUFBYSxFQUFBO0FBR2Y7RUFDRSxhQUFhLEVBQUE7QUFHZjtFQUNFLFlBQVk7RUFDWixlQUFlLEVBQUE7QUFHakI7RUFDRSxRQUFRLEVBQUE7QUFHVjtFQUNFLFlBQVk7RUFDWixtRUFBQSxFQUFvRTtBQUd0RTtFQUNFLFlBQVk7RUFDWixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLFlBQVk7RUFDWixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGFBQWEsRUFBQTtBQUdmO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLFlBQVk7RUFDWixlQUFlLEVBQUE7QUFHakI7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULE9BQU87RUFDUCxVQUFVLEVBQUE7QUFHWjtFQUNFLFlBQVk7RUFDWixhQUFhLEVBQUE7QUFHZjtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osK0JBQStCO0VBQy9CLDRCQUE0QixFQUFBO0FBRzlCO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0RBQUEsRUFBbUQ7QUFHckQ7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1EQUFBLEVBQW9EO0FBR3REO0VBQ0UseURBQUEsRUFBMEQ7QUFHNUQ7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWiw4QkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxVQUFVO0VBSVYsc0JBQXNCLEVBQUE7QUFHeEI7RUFDRSxTQUFTLEVBQUE7QUFHWDtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsT0FBTztFQUNQLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixvREFBQSxFQUFxRDtBQUd2RDtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixXQUFXLEVBQUE7QUFHYjtFQUNFLG1EQUFBLEVBQW9EO0FBR3REO0VBQ0UscURBQUEsRUFBc0Q7QUFHeEQ7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDhEQUFBLEVBQStEO0FBR2pFO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVksRUFBQTtBQUdkO0VBQ0UsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBO0FBR2Q7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUUzQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixzREFBQSxFQUF1RDtBQUd6RDtFQUNFLGNBQWMsRUFBQTtBQUdoQjtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLDBEQUEwRCxFQUFBO0FBRzVEO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBR2pCLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLGFBQWEsRUFBQTtBQUdmO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYiw4REFBQSxFQUErRDtBQUdqRTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0Qiw2REFBQTtFQUdBLGtCQUFrQjtFQUNsQixlQUFlO0VBSWYsb0NBQW9DLEVBQUE7QUFHdEM7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUc3QiwwQkFBMEIsRUFBQTtBQUc1QjtFQUNFLFNBQVM7RUFDVCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UsU0FBUztFQUNULGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYyxFQUFBO0FBR2hCO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQiw4QkFBOEIsRUFBQTtBQUdoQztFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLDZHQUFzRztFQUN0Ryx5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUcxQiwwQkFBMEIsRUFBQTtBQUc1QjtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsb0RBQUE7RUFDQSxlQUFlLEVBQUE7QUFHakI7RUFDRSw4QkFBOEIsRUFBQTtBQUdoQztFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTtBQUduQjtFQUNFLFlBQVksRUFBQTtBQUdkO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZLEVBQUE7QUFHZDtFQUNFLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLGVBQWU7RUFDZixtQkFBbUIsRUFBQTtBQU1yQjtFQUNFLHlCQUF5QixFQUFBO0FBRzNCO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxpQkFBaUIsRUFBQTtBQUduQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCLEVBQUE7QUFHM0I7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLCtCQUErQjtFQUMvQiw0QkFBNEIsRUFBQTtBQUc5QjtFQUNFLGtDQUFrQyxFQUFBO0FBR3BDO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUIsRUFBQTtBQUczQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHFFQUFxRSxFQUFBO0FBR3ZFO0VBQ0UscUJBQXFCO0VBQ3JCLDZFQUE2RSxFQUFBO0FBRy9FO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixpQkFBaUIsRUFBQTtBQUduQjtFQUNFLGNBQWM7RUFDZCw4REFBOEQsRUFBQTtBQUdoRTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osVUFBVTtFQUNWLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsU0FBUyxFQUFBO0FBR1g7RUFDRSxjQUFjO0VBQ2QsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLGtCQUFBO0VBQ0EsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSxnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0IsRUFBQTtBQUcxQjtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSxhQUFhLEVBQUE7QUFHZjtFQUNFLFdBQVcsRUFBQTtBQUdiO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHlCQUF5QixFQUFBO0FBTTNCO0VBQ0UsV0FBVyxFQUFBO0FBR2I7RUFDRSxpQkFBaUIsRUFBQTtBQUduQjtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsV0FBVztFQUNYLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsZUFBZSxFQUFBO0FBR2pCO0VBQ0Usa0RBQTZDLEVBQUE7QUFHL0M7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixxQkFBcUI7RUFHckIsa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxXQUFXO0VBQ1gsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsV0FBVyxFQUFBO0FBR2I7RUFDRSxxQkFBcUIsRUFBQTtBQUd2QjtFQUNFLGNBQWMsRUFBQTtBQUdoQjtFQUNFLFVBQVUsRUFBQTtBQUdaO0VBQ0UsV0FBVyxFQUFBO0FBR2I7RUFDRSxXQUFXLEVBQUE7QUFHYjtFQUNFLFdBQVcsRUFBQTtBQUdiO0VBQ0UsMEJBQTBCLEVBQUE7QUFHNUI7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxZQUFZO0VBQ1osZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFHaEIsc0JBQXNCLEVBQUE7QUFHeEI7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UsV0FBVztFQUNYLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UsV0FBVyxFQUFBO0FBR2I7RUFDRSxXQUFXLEVBQUE7QUFHYjtFQUNFLFdBQVcsRUFBQTtBQUdiO0VBQ0UsV0FBVyxFQUFBO0FBR2I7RUFDRSxXQUFXLEVBQUE7QUFHYjtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsOERBQUE7RUFDQSxTQUFTLEVBQUE7QUFHWDtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyx5QkFBeUI7RUFDekIsWUFBWSxFQUFBO0FBR2Q7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlCQUF5QixFQUFBO0FBRzNCO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCw4REFBQTtFQUNBLHlCQUF5QjtFQUd6QixrQ0FBa0MsRUFBQTtBQUdwQztFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIseUJBQXlCLEVBQUE7QUFHM0I7RUFDRSxrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLFlBQVk7RUFDWixjQUFjLEVBQUE7QUFHaEI7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix3REFBd0Q7RUFDeEQsU0FBUyxFQUFBO0FBR1g7RUFDRSxVQUFVO0VBR1Ysa0ZBQXlFLEVBQUE7QUFHM0U7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCxVQUFVO0VBQ1YscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxhQUFhO0VBQ2IsY0FBYztFQUNkLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBR3BCLGtGQUF5RSxFQUFBO0FBRzNFO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixRQUFRO0VBQ1IsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLDhCQUE4QjtFQUc5QixrRkFBeUUsRUFBQTtBQUczRTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLCtCQUErQjtFQUcvQixrQkFBa0I7RUFHbEIsd0NBQW9DLEVBQUE7QUFHdEM7RUFDRSxjQUFjLEVBQUE7QUFHaEI7RUFDRSxjQUFjLEVBQUE7QUFHaEI7RUFDRSxjQUFjLEVBQUE7QUFHaEI7RUFDRSxjQUFjLEVBQUE7QUFHaEI7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFlBQVksRUFBQTtBQUdkO0VBQ0UsY0FBYyxFQUFBO0FBR2hCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsOERBQThELEVBQUE7QUFHaEU7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLE9BQU87RUFDUCxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7RUFDWCxpRUFBaUUsRUFBQTtBQUduRTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQix3REFBd0Q7RUFDeEQsU0FBUyxFQUFBO0FBR1g7RUFDRSxjQUFjO0VBQ2QsNERBQTRELEVBQUE7QUFHOUQ7RUFDRSxXQUFXO0VBQ1gsd0JBQXdCLEVBQUE7QUFHMUI7RUFDRSxXQUFXLEVBQUE7QUFHYjtFQUNFLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsYUFBYTtFQUNiLFVBQVUsRUFBQTtBQUdaO0VBQ0UsV0FBVztFQUNYLHVCQUFzQixFQUFBO0FBR3hCO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQiwwQkFBMEIsRUFBQTtBQUc1QjtFQUNFLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFJVixtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLG1CQUFtQjtFQUNuQixXQUFXLEVBQUE7QUFHYjtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsU0FBUztFQUNULG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUlsQiw2QkFBNEI7RUFDNUIscUJBQW9CO0VBQ3BCLFVBQVU7RUFJVixtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLG1CQUFtQjtFQUluQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLFVBQVUsRUFBQTtBQUdaO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFHdEIsMEJBQTBCLEVBQUE7QUFHNUI7RUFDRSxlQUFlLEVBQUE7QUFHakI7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLFdBQVcsRUFBQTtBQUdiO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCxlQUFlLEVBQUE7QUFHakI7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVcsRUFBQTtBQUdiO0VBQ0Usa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxZQUFZO0VBQ1osZUFBZSxFQUFBO0FBR2pCO0VBQ0UsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixjQUFjLEVBQUE7QUFHaEI7RUFDRSxlQUFlO0VBQ2YsWUFBWSxFQUFBO0FBR2Q7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFHdEIsMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2JieS9sb2JieS5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnTWljcm9zb2Z0IFlhSGVpJyxcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5OyB9XG5cbmJvZHkubGF5b3V0IHtcbiAgbWluLXdpZHRoOiAxMDAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZDAxMDU7IH1cblxuKiB7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5cbmlmcmFtZSB7XG4gIGJvcmRlcjogbm9uZTsgfVxuXG5bbmctY2xpY2tdIHtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbm9sLCB1bCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7IH1cblxuLndyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvOyB9XG5cbiNoZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIC8qei1pbmRleDogMjsqL1xuICB6LWluZGV4OiAxMDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoODcsIDAsIDUsIDAuOSk7XG4gIGJhY2tncm91bmQ6ICM1MjA4MTA7IH1cblxuI2hlYWRlciAuaGVhZGVyLXRvcCB7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZDogIzQzMDAwMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3MTAwMTE7IH1cblxudWwudG9wLWxlZnQge1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAyOXB4O1xuICAvKmJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy9oZWFkZXIvd2Vic2l0ZS5naWY/dmVyPTE4MDgwOSkgcmlnaHQgY2VudGVyIG5vLXJlcGVhdDsqL1xuICAvKndpZHRoOiAyNzVweDsqLyB9XG5cbnVsLnRvcC1sZWZ0ID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6ICNmZmU2OTk7XG4gIC8qIHRleHQtaW5kZW50OiAxZW07ICovXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cblxudWwudG9wLWxlZnQgPiBsaSA+IHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxudWwudG9wLWxlZnQgPiBsaSA+IHNwYW5bZGF0YS1sYW5ndWFnZT1lbi1VU10ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltZy9oZWFkZXIvZW4uanBnXCIpOyB9XG5cbnVsLnRvcC1sZWZ0ID4gbGkgPiBzcGFuW2RhdGEtbGFuZ3VhZ2U9emgtQ05dIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWcvaGVhZGVyL2NuLmpwZ1wiKTsgfVxuXG51bC50b3AtbGVmdCA+IGxpID4gc3BhbltkYXRhLWxhbmd1YWdlPXpoLVRXXSB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1nL2hlYWRlci9oay5qcGdcIik7IH1cblxudWwudG9wLWxlZnQgPiBsaSA+IHNwYW5bZGF0YS1sYW5ndWFnZT10aF0ge1xuICBkaXNwbGF5OiBub25lOyB9XG5cbnVsLnRvcC1uYXYge1xuICBmbG9hdDogcmlnaHQ7IH1cblxudWwudG9wLW5hdiA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7IH1cblxudWwudG9wLW5hdiA+IGxpICsgbGk6YmVmb3JlIHtcbiAgY29udGVudDogJ3wnO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAgNHB4O1xuICBjb2xvcjogI2ZmZjsgfVxuXG51bC50b3AtbmF2ID4gbGkuZGVwb3NpdCBhIHtcbiAgY29sb3I6ICNmZjA7IH1cblxudWwudG9wLW5hdiA+IGxpLmRlcG9zaXQuY29sb3IgYSB7XG4gIGNvbG9yOiByZWQ7IH1cblxudWwudG9wLW5hdiA+IGxpLnJlZGVudmVsb3BlLmNvbG9yIGEge1xuICBjb2xvcjogIzBmMDsgfVxuXG51bC50b3AtbmF2ID4gbGkucHJvbW90aW9uIGEge1xuICBjb2xvcjogI2ZmMDsgfVxuXG51bC50b3AtbmF2ID4gbGkucHJvbW90aW9uLmNvbG9yIGEge1xuICBjb2xvcjogI2YwZjsgfVxuXG51bC50b3AtbmF2ID4gbGkuc2xvdCBhIHtcbiAgY29sb3I6ICMwZjA7IH1cblxudWwudG9wLW5hdiA+IGxpLnNsb3QuY29sb3IgYSB7XG4gIGNvbG9yOiByZWQ7IH1cblxudWwudG9wLW5hdiA+IGxpLnBhcnRuZXIgYSB7XG4gIGNvbG9yOiAjZjBmOyB9XG5cbnVsLnRvcC1uYXYgPiBsaS5wYXJ0bmVyLmNvbG9yIGEge1xuICBjb2xvcjogIzBmZjsgfVxuXG51bC50b3AtbmF2ID4gbGkudHJpYWwgYSB7XG4gIGNvbG9yOiAjMGYwOyB9XG5cbnVsLnRvcC1uYXYgPiBsaS50cmlhbC5jb2xvciBhIHtcbiAgY29sb3I6ICNmZjA7IH1cblxudWwudG9wLW5hdiA+IGxpID4gYSB7XG4gIGNvbG9yOiAjZmZkZmE2O1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuXG51bC50b3AtbmF2ID4gbGk6aG92ZXIgPiBhIHtcbiAgY29sb3I6ICNmZjA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbnVsLnRvcC1uYXYgPiBsaS5wYXoge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjZmZkZmE2O1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxudWwudG9wLW5hdiA+IGxpLnBhejpob3ZlcjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMTAwJTtcbiAgd2lkdGg6IDM0MXB4O1xuICBoZWlnaHQ6IDIyNXB4O1xuICB6LWluZGV4OiAzO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltZy9oZWFkZXIvcGFpei5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciB0b3A7IH1cblxuLnRvcF9ob3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1yaWdodDogMThweDsgfVxuXG4udG9wX2hvdDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltZy9oZWFkZXIvdG9wX2hvdC5wbmdcIikgbm8tcmVwZWF0O1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogLTE5cHg7IH1cblxuLndlYnNpdGUge1xuICBwYWRkaW5nOiAwOyB9XG5cbi53ZWJzaXRlIGltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTsgfVxuXG4jbG9nby1iZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjI2cHg7XG4gIGhlaWdodDogNjVweDtcbiAgbWFyZ2luOiAxMHB4IGF1dG87IH1cblxuI2xvZ28tYmc6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMzUlO1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIwMXB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1nL2hlYWRlci9zbG9nYW4ucG5nPzZcIikgbm8tcmVwZWF0IGNlbnRlcjsgfVxuXG4jbG9nby1iZyA+IGEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlOyB9XG5cbiNhY2NvdW50LWJveCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwOyB9XG5cbiNhY2NvdW50LWJveCA+IGZvcm0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAzMHB4IGF1dG87IH1cblxuI2FjY291bnQtYm94ID4gZm9ybSBpbnB1dCB7XG4gIHdpZHRoOiAxMzJweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBjb2xvcjogI2YxZDg5NjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWluZGVudDogLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDA7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDVweCBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhMjAwMDk7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4OyB9XG5cbiNhY2NvdW50LWJveCA+IGZvcm0gaW5wdXQjbG9naW5fYWNjb3VudCB7XG4gIHRleHQtaW5kZW50OiAxLjhlbTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvaGVhZGVyL2xvZ2luX2ljb18wMS5wbmdcIik7IH1cblxuI2FjY291bnQtYm94ID4gZm9ybSBpbnB1dCNsb2dpbl9wYXNzd29yZCB7XG4gIHRleHQtaW5kZW50OiAxLjhlbTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvaGVhZGVyL2xvZ2luX2ljb18wMi5wbmdcIik7IH1cblxuI2FjY291bnQtYm94ID4gZm9ybSBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiBpbmhlcml0OyB9XG5cbiNhY2NvdW50LWJveCA+IGZvcm0gaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGluaGVyaXQ7IH1cblxuI2FjY291bnQtYm94ID4gZm9ybSBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiBpbmhlcml0OyB9XG5cbiNhY2NvdW50LWJveCA+IGZvcm0gaW5wdXQucGxhY2Vob2xkZXIge1xuICBjb2xvcjogaW5oZXJpdDsgfVxuXG4jYWNjb3VudC1ib3ggPiBmb3JtIGJ1dHRvbiB7XG4gIHdpZHRoOiA3NHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyOiBub25lO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDsgfVxuXG4qLmxvZ2luLWJ0biB7XG4gIGNvbG9yOiAjMzAwO1xuICBiYWNrZ3JvdW5kOiAjZmZhMjAwOyB9XG5cbioubG9naW4tYnRuOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMxYzNjYjE7IH1cblxuKi5qb2luLWJ0biB7XG4gIGNvbG9yOiAjNTQ0MTAxO1xuICBiYWNrZ3JvdW5kOiAjZmZkZTAwOyB9XG5cbiouam9pbi1idG46aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogI2RmM2EwMDsgfVxuXG4jY2hlY2stY29kZS13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cblxuI3ZJbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMnB4O1xuICByaWdodDogMnB4O1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAyNHB4OyB9XG5cbiNhZ3JlZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDExMCU7XG4gIHJpZ2h0OiA2cHg7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmc6IDJweCA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjA4MTA7IH1cblxuI2FncmVlIGEge1xuICBjb2xvcjogI2ZmYTIwMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG51bCNhY2NvdW50LWluZm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMTBweCBhdXRvIDVweDsgfVxuXG51bCNhY2NvdW50LWluZm8gPiBsaSB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGNvbG9yOiAjZmJlNjlhO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4OyB9XG5cbnVsI2FjY291bnQtaW5mbyA+IGxpID4gc3Bhbi5hY2NvdW50IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IDZlbTtcbiAgY29sb3I6ICNmZmY2MDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAtbXMtdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIC1vLXRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG51bCNhY2NvdW50LWluZm8gPiBsaSBhIHtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG51bCNhY2NvdW50LWluZm8gPiBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICNmZmEyMDA7IH1cblxudWwjYWNjb3VudC1uYXYge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxuXG51bCNhY2NvdW50LW5hdiA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG5cbnVsI2FjY291bnQtbmF2ID4gbGkgKyBsaTpiZWZvcmUge1xuICBjb250ZW50OiAnfCc7XG4gIGNvbG9yOiAjZmJlNjlhOyB9XG5cbnVsI2FjY291bnQtbmF2ID4gbGkgPiBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogI2ZiZTY5YTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbnVsI2FjY291bnQtbmF2ID4gbGk6aG92ZXIgPiBhIHtcbiAgY29sb3I6ICNmZjA7IH1cblxuI25hdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA0N3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICM5MzAwMDg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYjEwMDBhOyB9XG5cbiNuYXYgPiB1bCB7XG4gIHdpZHRoOiAxMDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cblxuI25hdiA+IHVsID4gbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgLypmbG9hdDogbm9uZTtcbiAgIHdpZHRoOiAxMjVweDtcbiAgaGVpZ2h0OiA0NnB4OyAqL1xuICBjb2xvcjogI2ZmZGZhNjsgfVxuXG4jbmF2ID4gdWwgPiBsaSArIGxpID4gYTpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xcHg7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiA0NnB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltZy9oZWFkZXIvbmF2X2xpbmUucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXI7IH1cblxuI25hdiA+IHVsID4gbGkuaG90MSA+IGE6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDVweDtcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWcvaGVhZGVyL2hvdF8wMS5naWZcIik7IH1cblxuI25hdiA+IHVsID4gbGkuaG90MiA+IGE6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDVweDtcbiAgd2lkdGg6IDE5cHg7XG4gIGhlaWdodDogMjVweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWcvaGVhZGVyL2hvdF8wMi5naWZcIikgbm8tcmVwZWF0IGNlbnRlciB0b3A7IH1cblxuI25hdiA+IHVsID4gbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjYWEwMDA5OyB9XG5cbiNuYXYgPiB1bCA+IGxpLmNvbG9yID4gYSB7XG4gIGNvbG9yOiAjZmZmOyB9XG5cbiNuYXYgPiB1bCA+IGxpID4gYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI2ZmZGZhNjtcbiAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuXG4jbmF2ID4gdWwgPiBsaTpob3ZlciAuc3VibmF2IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuXG4jbmF2ID4gdWwgPiBsaTpob3ZlciAuc3VibmF2IGxpIHtcbiAgb3BhY2l0eTogMTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG4gIC1tb3otdHJhbnNmb3JtOiBub25lO1xuICAtbXMtdHJhbnNmb3JtOiBub25lO1xuICAtby10cmFuc2Zvcm06IG5vbmU7XG4gIHRyYW5zZm9ybTogbm9uZTsgfVxuXG4uc3VibmF2IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogLTI1cHg7XG4gIHdpZHRoOiAxNzVweDtcbiAgZm9udC1zaXplOiAwO1xuICAtd2Via2l0LXBlcnNwZWN0aXZlOiAyODBweDtcbiAgLW1vei1wZXJzcGVjdGl2ZTogMjgwcHg7XG4gIC1tcy1wZXJzcGVjdGl2ZTogMjgwcHg7XG4gIHBlcnNwZWN0aXZlOiAyODBweDtcbiAgei1pbmRleDogOTk5O1xuICAtbW96LXRyYW5zaXRpb246IHZpc2liaWxpdHkgbGluZWFyIC41cztcbiAgLW8tdHJhbnNpdGlvbjogdmlzaWJpbGl0eSBsaW5lYXIgLjVzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IHZpc2liaWxpdHkgbGluZWFyIC41cztcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSBsaW5lYXIgLjVzOyB9XG5cbi5zdWJuYXYuY29sMiB7XG4gIHdpZHRoOiAzNTBweDtcbiAgbGVmdDogLTExMnB4OyB9XG5cbi5zdWJuYXYgb2wge1xuICBmbG9hdDogbGVmdDsgfVxuXG4uc3VibmF2IGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTc1cHg7XG4gIGhlaWdodDogNDNweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiA0MXB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9oZWFkZXIvc3VibmF2X2JnLnBuZ1wiKTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZDA1MztcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSg5MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjRzLC13ZWJraXQtdHJhbnNmb3JtIC41cztcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IC40cywtbW96LXRyYW5zZm9ybSAuNXM7XG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgLjRzLC1vLXRyYW5zZm9ybSAuNXM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjRzLHRyYW5zZm9ybSAuNXM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4vKi5zdWJuYXYgbGk6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiA2cHg7XG4gIHdpZHRoOiA0M3B4O1xuICBoZWlnaHQ6IDQzcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn0qL1xuLnN1Ym5hdiBsaSBhIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuXG4uc3VibmF2LmZpc2ggbGk6YmVmb3JlIHtcbiAgd2lkdGg6IDUwcHg7IH1cblxuLnN1Ym5hdi5wcm9tb3Rpb24gbGlbZ2FtZS1ib3g9XCJkZXBvc2l0XCJdOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2hlYWRlci9wcm9tby9kZXBvc2l0LnBuZ1wiKTsgfVxuXG4uc3VibmF2LnByb21vdGlvbiBsaVtnYW1lLWJveD1cInByb21vdGlvblwiXTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9oZWFkZXIvcHJvbW8vcHJvbW90aW9uLnBuZ1wiKTsgfVxuXG4uc3VibmF2LnByb21vdGlvbiBsaVtnYW1lLWJveD1cInNsb3RcIl06YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvaGVhZGVyL3Byb21vL3Nsb3QucG5nXCIpOyB9XG5cbiNiYW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICMwMDAgdXJsKFwiL2Fzc2V0cy9pbWcvaGVhZGVyL2Jhbm5lci5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciB0b3A7IH1cblxuI25ld3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogMTE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM3cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTsgfVxuXG4jbmV3cyAud3JhcHBlciB7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgbGluZS1oZWlnaHQ6IDMzcHg7XG4gIGhlaWdodDogMzVweDtcbiAgY29sb3I6ICNmZmRmYTY7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1nL2hlYWRlci9uZXdzLnBuZ1wiKSBuby1yZXBlYXQgbGVmdCBjZW50ZXI7IH1cblxuI2hvdC1uZXdzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiA5MDBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG4jaG90LW5ld3MgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDMzcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBsaW5lLWhlaWdodDogMzNweDsgfVxuXG4jaG90LW5ld3MgbGk6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxuXG4jY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4jZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjNTYwMDAzOyB9XG5cbiNmb290ZXItaW5mbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzdmMDAwNzsgfVxuXG4jZm9vdGVyLWluZm8gPiBkaXYsICNmb290ZXItaW5mbyA+IGRpdiA+IGEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDQzcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjZmVmZGE5O1xuICBsaW5lLWhlaWdodDogNDNweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuXG4jZm9vdGVyLWluZm8gPiBkaXYgKyBkaXY6YmVmb3JlIHtcbiAgY29udGVudDogJ3wnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xMHB4OyB9XG5cbiNmb290ZXItaW5mbyA+IGRpdi50ZWwge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1nL2Zvb3Rlci9pbmZvX2ljb18wMS5wbmdcIikgbm8tcmVwZWF0IGxlZnQgY2VudGVyOyB9XG5cbiNmb290ZXItaW5mbyA+IGRpdi5tYWlsIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltZy9mb290ZXIvaW5mb19pY29fMDIucG5nXCIpIG5vLXJlcGVhdCBsZWZ0IGNlbnRlcjsgfVxuXG4jZm9vdGVyLWluZm8gPiBkaXYuY2hhdCB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWcvZm9vdGVyL2luZm9faWNvXzAzLnBuZ1wiKSBuby1yZXBlYXQgbGVmdCBjZW50ZXI7IH1cblxuI2Zvb3Rlci1sb2dvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1nL2Zvb3Rlci9mb290ZXJfbG9nby5qcGc/M1wiKSBuby1yZXBlYXQgY2VudGVyOyB9XG5cbiNmb290ZXItbmF2IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbiNmb290ZXItbmF2IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG5cbiNmb290ZXItbmF2IGxpICsgbGk6YmVmb3JlIHtcbiAgY29udGVudDogJ3wnO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGNvbG9yOiAjZjVmM2FmOyB9XG5cbiNmb290ZXItbmF2IGxpIGEge1xuICBjb2xvcjogI2Y1ZjNhZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuXG4jZm9vdGVyLW5hdiBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7IH1cblxuI2Zvb3Rlci1zdWdnZXN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICNmNWYzYWY7IH1cblxuI2Zvb3Rlci1zdWdnZXN0IHNtYWxsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMmVtOyB9XG5cbi5zZXJ2aWNlcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgdG9wOiAyNDBweDsgfVxuXG4uc2VydmljZXMgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7IH1cblxuLnNlcnZpY2UtbGVmdCB7XG4gIGxlZnQ6IDA7IH1cblxuLnNlcnZpY2UtbGVmdCA+IHVsIHtcbiAgd2lkdGg6IDEzMHB4O1xuICAvKmJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvbGVmdC5naWYnKSBuby1yZXBlYXQgY2VudGVyIHRvcDsqLyB9XG5cbi5zZXJ2aWNlLWxlZnQgLm1nIHtcbiAgaGVpZ2h0OiA2OHB4OyB9XG5cbi5zZXJ2aWNlLWxlZnQgLmRlcG9zaXQge1xuICBoZWlnaHQ6IDcycHg7IH1cblxuLnNlcnZpY2UtbGVmdCAuc2xvdCB7XG4gIGhlaWdodDogMTMxcHg7IH1cblxuLnNlcnZpY2UtbGVmdCAuYXBwIHtcbiAgaGVpZ2h0OiAxNjBweDsgfVxuXG4uc2VydmljZS1sZWZ0IC5jbG9zZWQge1xuICBoZWlnaHQ6IDIycHg7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4uc2VydmljZS1yaWdodCB7XG4gIHJpZ2h0OiAwOyB9XG5cbi5zZXJ2aWNlLXJpZ2h0ID4gdWwge1xuICB3aWR0aDogMTMwcHg7XG4gIC8qYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9yaWdodC4yLmdpZicpIG5vLXJlcGVhdCBjZW50ZXIgdG9wOyovIH1cblxuLnNlcnZpY2UtcmlnaHQgLmNoYXQge1xuICBoZWlnaHQ6IDczcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDsgfVxuXG4uc2VydmljZS1yaWdodCAuY2xpZW50IHtcbiAgaGVpZ2h0OiAyN3B4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7IH1cblxuLnNlcnZpY2UtcmlnaHQgLnFxIHtcbiAgaGVpZ2h0OiA4NnB4O1xuICBwYWRkaW5nLXRvcDogNDhweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5zZXJ2aWNlLXJpZ2h0IC53ZWNoYXQge1xuICBoZWlnaHQ6IDE1NXB4OyB9XG5cbi5zZXJ2aWNlLXJpZ2h0IC50ZWwge1xuICBoZWlnaHQ6IDcwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgcGFkZGluZy10b3A6IDQ0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uc2VydmljZS1yaWdodCAuY2xvc2VkIHtcbiAgaGVpZ2h0OiAyNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuYXNpZGUuc2VydmljZS1sZWZ0LWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAzOyB9XG5cbmFzaWRlLnNlcnZpY2UtbGVmdC1ib3R0b20gbGkge1xuICB3aWR0aDogMTkwcHg7XG4gIGhlaWdodDogMjQ0cHg7IH1cblxuYXNpZGUuc2VydmljZS1sZWZ0LWJvdHRvbSBsaSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgfVxuXG5hc2lkZS5zZXJ2aWNlLWxlZnQtYm90dG9tIGxpIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLypiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL2Nsb3NlLnBuZycpOyovIH1cblxuYXNpZGUuc2VydmljZS1sZWZ0LWJvdHRvbSBsaS5hcHAgYSB7XG4gIHdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiAyNDBweDtcbiAgLypiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL3NfbGIuMS5wbmcnKTsqLyB9XG5cbmFzaWRlLnNlcnZpY2UtbGVmdC1ib3R0b20gbGkuZGVwb3NpdCBhIHtcbiAgLypiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL3NfbGJfZGVwb3NpdC5naWYnKTsqLyB9XG5cbmFzaWRlLnNlcnZpY2UtbGVmdC1ib3R0b20gbGkuZGVwb3NpdCBzcGFuIHtcbiAgd2lkdGg6IDMzcHg7XG4gIGhlaWdodDogMzFweDtcbiAgYmFja2dyb3VuZDogbm9uZTsgfVxuXG4jcmV2aWV3LWxpc3Qge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogLTc3cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDc3cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgY29sb3I6ICNmZmY7XG4gIHotaW5kZXg6IDE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm90dG9tIC40cztcbiAgLW8tdHJhbnNpdGlvbjogYm90dG9tIC40cztcbiAgLW1vei10cmFuc2l0aW9uOiBib3R0b20gLjRzO1xuICB0cmFuc2l0aW9uOiBib3R0b20gLjRzOyB9XG5cbiNyZXZpZXctbGlzdC5vcGVuIHtcbiAgYm90dG9tOiAwOyB9XG5cbiNyZXZpZXctbGlzdCAudXAsICNyZXZpZXctbGlzdCAuZG93biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjRweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8qYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy90YWIucG5nJykgbm8tcmVwZWF0OyovIH1cblxuI3Jldmlldy1saXN0IC51cDphZnRlciwgI3Jldmlldy1saXN0IC5kb3duOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgd2lkdGg6IDdweDtcbiAgaGVpZ2h0OiA4cHg7IH1cblxuI3Jldmlldy1saXN0IC51cDphZnRlciB7XG4gIC8qYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy91cC5wbmcnKSBuby1yZXBlYXQ7Ki8gfVxuXG4jcmV2aWV3LWxpc3QgLmRvd246YWZ0ZXIge1xuICAvKmJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvZG93bi5wbmcnKSBuby1yZXBlYXQ7Ki8gfVxuXG4jcmV2aWV3LWxpc3QgLndyYXBwZXIge1xuICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG4gIGhlaWdodDogNzdweDtcbiAgLypiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL3R4dC5wbmcnKSBuby1yZXBlYXQgMjBweCAxNXB4OyovIH1cblxuI3Jldmlldy1ib3ggbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxMHB4IDhweCAwO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4OyB9XG5cbiNyZXZpZXctYm94IGxpLm5vLXJldmlldyB7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4OyB9XG5cbiNyZXZpZXctYm94IGxpIGltZyB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7IH1cblxuI3Jldmlldy1ib3ggbGkgZGl2IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0zMXB4O1xuICBsZWZ0OiAtNXB4O1xuICBwYWRkaW5nLXRvcDogMnB4O1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiAyOXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC1tcy10ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgLW8tdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAvKmJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvdGl0bGUucG5nJykgbm8tcmVwZWF0OyovIH1cblxuI3Jldmlldy1ib3ggbGk6aG92ZXIgZGl2IHtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuI21haWxib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltZy9oZWFkZXIvbV9pY29uLnBuZ1wiKSBuby1yZXBlYXQ7IH1cblxuI21haWxib3ggPiBzcGFuLCAjbWFpbGJveCA+IHNwYW46aG92ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDgwJTtcbiAgYm90dG9tOiA2MCU7XG4gIG1pbi13aWR0aDogMTZweDtcbiAgcGFkZGluZzogMCAycHg7XG4gIGhlaWdodDogMTZweDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY0N2U7IH1cblxuI21hcnF1ZWUtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAtMTtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4jbWFycXVlZS13cmFwcGVyLnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbiAgei1pbmRleDogMTAwMDtcbiAgLypiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL3RyYW5zcGFyZW50LWJsYWNrLnBuZycpOyovIH1cblxuI21hcnF1ZWUge1xuICB3aWR0aDogNjAwcHg7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBtYXJnaW46IDMwcHggYXV0byAwIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC8qYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy90YWJsZV9iYWNrZ3JvdW5kLmpwZycpOyovXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIC1tb3otdHJhbnNpdGlvbjogbWFyZ2luLXRvcCBlYXNlLWluIDMwMG1zO1xuICAtby10cmFuc2l0aW9uOiBtYXJnaW4tdG9wIGVhc2UtaW4gMzAwbXM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbWFyZ2luLXRvcCBlYXNlLWluIDMwMG1zO1xuICB0cmFuc2l0aW9uOiBtYXJnaW4tdG9wIGVhc2UtaW4gMzAwbXM7IH1cblxuI21hcnF1ZWUgPiBoZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDsgfVxuXG4jbWFycXVlZSA+IGhlYWRlciA+IGgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzAwODBlMztcbiAgZm9udC1zaXplOiAyMXB4O1xuICBsaW5lLWhlaWdodDogNjBweDsgfVxuXG51bCNuZXdzQmFncyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTBweCA1MHB4O1xuICBtYXgtaGVpZ2h0OiAzODBweDtcbiAgb3ZlcmZsb3c6IGF1dG87IH1cblxudWwjbmV3c0JhZ3MgPiBsaSB7XG4gIGNvbG9yOiAjNDU0NTQ1O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICBsaXN0LXN0eWxlOiBkaXNjO1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzk5OTsgfVxuXG4jbWFycXVlZSA+IGZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNlbnRlciB0b3AsIGVsbGlwc2UgZmFydGhlc3Qtc2lkZSwgcmdiYSgwLCAwLCAwLCAwLjMpLCB0cmFuc3BhcmVudCk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSA4cHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDsgfVxuXG4jbWFycXVlZSA+IGZvb3RlciA+IHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMTlweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBsaW5lLWhlaWdodDogNDUuNXB4O1xuICAvKmJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvc2VudF9ibi5wbmcnKTsqL1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuI21hcnF1ZWUgPiBmb290ZXIgPiBzcGFuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtNDUuNXB4OyB9XG5cbi51aS13aWRnZXQtaGVhZGVyIHtcbiAgbWluLWhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7IH1cblxuLnVpLWRpYWxvZyB7XG4gIHotaW5kZXg6IDk5OTsgfVxuXG4udWktZGlhbG9nIC51aS1kaWFsb2ctdGl0bGUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4OyB9XG5cbi51aS1kaWFsb2cgLnVpLWRpYWxvZy1idXR0b25wYW5lIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7IH1cblxuYnV0dG9uLnVpLWJ1dHRvbi51aS13aWRnZXQudWktc3RhdGUtZGVmYXVsdC51aS1jb3JuZXItYWxsLnVpLWJ1dHRvbi10ZXh0LW9ubHkge1xuICBmb250LXNpemU6IDEycHg7IH1cblxuLnVpLWRpYWxvZyAudWktZGlhbG9nLWJ1dHRvbnBhbmUgYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDNweCA2cHg7XG4gIGJhY2tncm91bmQ6ICNmZmQ4MDA7IH1cblxuI2xvZ2luZ2FtZS1ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4MDAwNDsgfVxuXG4jbG9iYnkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDE1cHggYXV0bzsgfVxuXG5kaXYuc2xvdHMsICNsb2JieSA+IHVsLmdhbWUtbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA2cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5NDAyMGE7IH1cblxuI2xvYmJ5ID4gdWwuZ2FtZS1saXN0ID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyB9XG5cbiNsb2JieSA+IHVsLmdhbWUtbGlzdCA+IGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTsgfVxuXG4jdW4tbG9iYnkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZDogIzQ4MDAwNDtcbiAgYm9yZGVyOiAycHggc29saWQgIzk0MDIwYTsgfVxuXG4jdW4tbG9iYnkgYXNpZGUge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDI1M3B4O1xuICBwYWRkaW5nLXRvcDogNTlweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWcvYWJvdXQvYXNpZGVfdG9wLnBuZ1wiKSBuby1yZXBlYXQgbGVmdCB0b3A7IH1cblxuI3VuLWxvYmJ5IHVsI3NpZGViYXIge1xuICBwYWRkaW5nLWJvdHRvbTogMTgzcHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1nL2Fib3V0L2FzaWRlX2JvdHRvbS5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBib3R0b207IH1cblxuI3VuLWxvYmJ5IHVsI3NpZGViYXIgbGkge1xuICB3aWR0aDogMjUzcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZDogIzkzMDAwODsgfVxuXG4jdW4tbG9iYnkgdWwjc2lkZWJhciBsaSBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogI2ZlZmJhNjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7IH1cblxuI3VuLWxvYmJ5IHVsI3NpZGViYXIgbGk6aG92ZXIgYSB7XG4gIGNvbG9yOiAjNDgwMDA0O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltZy9hYm91dC9zaWRlLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyOyB9XG5cbiNhcnRpY2xlcyB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDY4MHB4O1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogI2ZlZmJhNjtcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxuXG4jYXJ0aWNsZXMgaDIge1xuICBjb2xvcjogI2ZlZmJhNjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDA7IH1cblxuI2FydGljbGVzIGgzIHtcbiAgY29sb3I6ICNmZWZiYTY7XG4gIGZvbnQtc2l6ZTogMThweDsgfVxuXG4jYXJ0aWNsZXMgaDQge1xuICBjb2xvcjogI2ZlZmJhNjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG5cbiNhcnRpY2xlcyBoNDpiZWZvcmUge1xuICAvKmNvbnRlbnQ6ICfDouKAlMKPJzsqL1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4OyB9XG5cbiNhcnRpY2xlcyA+IHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxuXG4jYXJ0aWNsZXMgb2wge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGxpc3Qtc3R5bGUtdHlwZTogZGVjaW1hbDsgfVxuXG4jYXJ0aWNsZXMgcCwgI2FydGljbGVzIGxpIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBsaW5lLWhlaWdodDogMmVtOyB9XG5cbiNhcnRpY2xlcyBwIHtcbiAgbWFyZ2luOiAxZW0gMDsgfVxuXG4jYXJ0aWNsZXMgdGFibGUge1xuICB3aWR0aDogMTAwJTsgfVxuXG4jYXJ0aWNsZXMgdGFibGUgdHIsICNhcnRpY2xlcyB0YWJsZSB0aCwgI2FydGljbGVzIHRhYmxlIHRkIHtcbiAgY29sb3I6ICNmZWZiYTY7XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzNkMDUwODtcbiAgYm9yZGVyOiAxcHggc29saWQgIzRiMGEwZTsgfVxuXG4jYXJ0aWNsZXMgLmhpZ2hsaWdodCB7XG4gIGNvbG9yOiAjZmZmOyB9XG5cbiNhcnRpY2xlcyB1bC5tdGFiLW1lbnVhbCB7XG4gIG1hcmdpbjogMTVweCBhdXRvOyB9XG5cbiNhcnRpY2xlcyB1bC5tdGFiLW1lbnVhbCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDExNXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGNvbG9yOiAjZmVmYmE2O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiA0M3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kOiAjNDgwMDA0O1xuICBib3JkZXI6IDJweCBzb2xpZCAjOTMwMDA4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuI2FydGljbGVzIHVsLm10YWItbWVudWFsIGxpLm10YWIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzkzMDAwODsgfVxuXG4jYXJ0aWNsZXMgdWwuZGVwb3NpdCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgfVxuXG4jYXJ0aWNsZXMgdWwuZGVwb3NpdCA+IGxpIHtcbiAgY291bnRlci1pbmNyZW1lbnQ6IHRpdGxlO1xuICBtYXJnaW46IDEycHggYXV0bzsgfVxuXG4jYXJ0aWNsZXMgdWwuZGVwb3NpdCA+IGxpIGEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuI2FydGljbGVzIHVsLmRlcG9zaXQgPiBsaSA+IGE6YmVmb3JlIHtcbiAgY29udGVudDogXCLDpuKAk8K5w6bCs+KAosOvwrzFoVwiIGNvdW50ZXIodGl0bGUsIGRlY2ltYWwpIFwiw6PigqzigqxcIjsgfVxuXG4jYXJ0aWNsZXMgdWwuZGVwb3NpdCA+IGxpID4gYTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzcHg7XG4gIGxlZnQ6IDQ0cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7IH1cblxuI2FydGljbGVzIHVsLmRlcG9zaXQgPiBsaSAuZGVwb3NpdC1iZyB7XG4gIGNvbG9yOiAjZmYwO1xuICBiYWNrZ3JvdW5kOiByZWQ7IH1cblxuI2FydGljbGVzLmRlcG9zaXQgLmRlcG9zaXQtdGl0bGUge1xuICBjb2xvcjogIzBmZjsgfVxuXG4jYXJ0aWNsZXMuZGVwb3NpdCAuZGVwb3NpdC10aXRsZSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5cbiNhcnRpY2xlcy5kZXBvc2l0IC5oaWdobGlnaHQtZ3JlZW4ge1xuICBjb2xvcjogIzAwYjA1MDsgfVxuXG4jYXJ0aWNsZXMgLmhpZ2hsaWdodC1yZWQsICNhcnRpY2xlcy5kZXBvc2l0IC5oaWdobGlnaHQtcmVkIHtcbiAgY29sb3I6IHJlZDsgfVxuXG4jYXJ0aWNsZXMuZGVwb3NpdCAuaGlnaGxpZ2h0LXBpbmsge1xuICBjb2xvcjogI2YwZjsgfVxuXG4jYXJ0aWNsZXMuZGVwb3NpdCAuaGlnaGxpZ2h0LWxpZ2h0Ymx1ZSB7XG4gIGNvbG9yOiAjMGZmOyB9XG5cbiNhcnRpY2xlcy5kZXBvc2l0IC5oaWdobGlnaHQtYmx1ZSB7XG4gIGNvbG9yOiAjMDBmOyB9XG5cbiNhcnRpY2xlcy5kZXBvc2l0IC51bmRlcmxpbmUge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxuXG4uYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDFweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogUE1pbmdMaVU7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5cbi5ib2R5ICN0aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICM0MzAwMDA7IH1cblxuLmJvZHkuY29udGFpbmVyICN0aXRsZSwgLmJvZHkgI2FjY291bnQtaGVhZGluZywgLmJvZHkgI3dpdGhkcmF3YWwtaGVhZGluZyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjYWEwMDA5OyB9XG5cbi5ib2R5ICNzaG93LWFjY291bnQtaW5mby5idG4ge1xuICBjb2xvcjogI2ZmZjsgfVxuXG4uZm9ybS1ncm91cCAuY29udHJvbC1kaXYgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzk5OTsgfVxuXG4uZm9ybS1ncm91cCAuY29udHJvbC1kaXYgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzk5OTsgfVxuXG4uZm9ybS1ncm91cCAuY29udHJvbC1kaXYgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5OTk7IH1cblxuLmZvcm0tZ3JvdXAgLmNvbnRyb2wtZGl2IGlucHV0LnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5OTk7IH1cblxuLnBhbmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjNWY1ZjVmO1xuICAvKmJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvcGFuZWxfYmFja2dyb3VuZC5qcGcnKSByZXBlYXQ7Ki9cbiAgYm9yZGVyOiAwOyB9XG5cbiN0aXRsZSB7XG4gIGhlaWdodDogNDhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgZm9udC1mYW1pbHk6ICdNaWNyb3NvZnQgSmhlbmdIZWknO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXI6IG5vbmU7IH1cblxuI3RpdGxlID4gZGl2IHtcbiAgbWFyZ2luLXRvcDogLTFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG5cbiNhY2NvdW50LXBhbmVsLCAjd2l0aGRyYXdhbC1wYW5lbCB7XG4gIHdpZHRoOiA3OTJweDtcbiAgY29sb3I6ICM1ZjVmNWY7XG4gIC8qYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9wYW5lbF9iYWNrZ3JvdW5kLmpwZycpIHJlcGVhdDsqL1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjdiN2I3O1xuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggMXB4ICNmZmY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAxcHggI2ZmZjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAxcHggI2ZmZjsgfVxuXG4jYWNjb3VudC1oZWFkaW5nLCAjd2l0aGRyYXdhbC1oZWFkaW5nIHtcbiAgbWFyZ2luOiAxcHggMXB4O1xuICBmb250LWZhbWlseTogUE1pbmdMaVU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cblxuLnBhbmVsLWJvZHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLnBhbmVsLWJvZHkgPiBmb3JtIHtcbiAgd2lkdGg6IDcwMHB4O1xuICBtYXJnaW46IDAgYXV0bzsgfVxuXG4uY29udHJvbC1kaXYgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogM3B4IDVweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1nL2lucHV0X2NlbnRlci5wbmdcIikgcmVwZWF0LXk7XG4gIGJvcmRlcjogMDsgfVxuXG4uY29udHJvbC1kaXYgaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDhweCByZ2JhKDI1NSwgMjQ5LCAxNDksIDAuNik7XG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDAgOHB4IHJnYmEoMjU1LCAyNDksIDE0OSwgMC42KTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDAgOHB4IHJnYmEoMjU1LCAyNDksIDE0OSwgMC42KTsgfVxuXG4udG9vbHRpcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogOTMlO1xuICB0b3A6IC0ycHg7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuXG4udG9vbHRpcHNob3dhcnJvd19pbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICByaWdodDogLTFweDtcbiAgei1pbmRleDogMTAwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogOHB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNmZmY7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IDAgLTFweCAwIHJnYmEoMCwgMCwgMCwgMC4wNyk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSwgaW5zZXQgMCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA3KTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSwgaW5zZXQgMCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA3KTsgfVxuXG4udG9vbHRpcHNob3dhcnJvd19vdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICByaWdodDogMDtcbiAgei1pbmRleDogOTk5O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiA4cHggc29saWQ7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNiYmI7XG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSwgaW5zZXQgMCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA3KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpLCBpbnNldCAwIC0xcHggMCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xuICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpLCBpbnNldCAwIC0xcHggMCByZ2JhKDAsIDAsIDAsIDAuMDcpOyB9XG5cbi50b29sdGlwc2hvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyNTBweDtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjYmJiICNiYmIgI2E4YThhODtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1tb3otYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpOyB9XG5cbi5mb3JtLWNvbnRyb2w6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzg3ODc4NzsgfVxuXG4uZm9ybS1jb250cm9sOi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzg3ODc4NzsgfVxuXG4uZm9ybS1jb250cm9sOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM4Nzg3ODc7IH1cblxuLmZvcm0tY29udHJvbDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzg3ODc4NzsgfVxuXG4uaW5wdXQtYmxvY2sge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMwNHB4OyB9XG5cbi5oZWxwLWJsb2NrIHtcbiAgY29sb3I6ICM4YTZkM2I7IH1cblxuLmlucHV0LWJsb2NrLXRvcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMnB4O1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWcvaW5wdXQtdG9wLWJ0bS5wbmdcIikgbm8tcmVwZWF0IDAgMDsgfVxuXG4uaW5wdXQtYmxvY2stYnRtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC04cHg7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWcvaW5wdXQtdG9wLWJ0bS5wbmdcIikgbm8tcmVwZWF0IDAgLTRweDsgfVxuXG4uYnRuLXN1Ym1pdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDExOXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGNvbG9yOiAjNDU0NTQ1O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBQTWluZ0xpVTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1nL3NlbnRfYm4ucG5nXCIpIG5vLXJlcGVhdCAwIDA7XG4gIGJvcmRlcjogMDsgfVxuXG4uYnRuLXN1Ym1pdDpob3ZlciB7XG4gIGNvbG9yOiAjNDU0NTQ1O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltZy9zZW50X2JuLnBuZ1wiKSBuby1yZXBlYXQgMCAtNDZweDsgfVxuXG4uYnRuLXN1Ym1pdFtkaXNhYmxlZF06aG92ZXIge1xuICBjb2xvcjogIzk5OTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAwOyB9XG5cbi50YWJsZSB7XG4gIGNvbG9yOiAjMDAwOyB9XG5cbi50YWJsZSA+IHRoZWFkID4gdHIgPiB0aCwgLnRhYmxlID4gdGJvZHkgPiB0ciA+IHRoLCAudGFibGUgPiB0Zm9vdCA+IHRyID4gdGgsIC50YWJsZSA+IHRoZWFkID4gdHIgPiB0ZCwgLnRhYmxlID4gdGJvZHkgPiB0ciA+IHRkLCAudGFibGUgPiB0Zm9vdCA+IHRyID4gdGQge1xuICBsaW5lLWhlaWdodDogMmVtOyB9XG5cbnRhYmxlIHRmb290IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZWVlOyB9XG5cbiNwb3B1cC1kaWFsb2cge1xuICBkaXNwbGF5OiBub25lO1xuICBwYWRkaW5nOiAwOyB9XG5cbiNwb3B1cC1kaWFsb2cgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50OyB9XG5cbiNwb3B1cC1kaWFsb2cgLmRpYWxvZy1mb290ZXIge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDAgM3B4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMjlweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDA7IH1cblxudWwjbmV3c0JhZ3MgPiBsaSB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IH1cblxuLm1vZGFsLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTAwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjJzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAuMnM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAuMnM7XG4gIHRyYW5zaXRpb246IGFsbCAuMnM7IH1cblxuLm1vZGFsLW92ZXJsYXkubW9kYWwtc2hvdyB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IC41OyB9XG5cbi5tb2RhbC1hbm5vdW5jZW1lbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNyU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC00OTlweDtcbiAgd2lkdGg6IDk5N3B4O1xuICB6LWluZGV4OiAxMDAwMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIC41cztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIC41cztcbiAgdHJhbnNpdGlvbjogYWxsIC41czsgfVxuXG4ubW9kYWwtYW5ub3VuY2VtZW50Lm1vZGFsLXNob3cge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIG9wYWNpdHk6IDE7IH1cblxuLm1vZGFsLWFubm91bmNlbWVudCA+IC5tYS10aXRsZSB7XG4gIG1pbi1oZWlnaHQ6IDM4cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNmM7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwOyB9XG5cbi5tb2RhbC1hbm5vdW5jZW1lbnQgPiAubWEtdGl0bGUgPiBzcGFuIHtcbiAgZm9udC1zaXplOiAyMHB4OyB9XG5cbi5tb2RhbC1hbm5vdW5jZW1lbnQgPiAubWEtdGl0bGUgPiBpIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4ubW9kYWwtYW5ub3VuY2VtZW50ID4gLm1hLWJvZHkgPiBzZWN0aW9uIHtcbiAgaGVpZ2h0OiA1NDJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB9XG5cbi5tb2RhbC1hbm5vdW5jZW1lbnQgLm1hLXNpZGViYXIge1xuICB3aWR0aDogMjQlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47IH1cblxuLm1vZGFsLWFubm91bmNlbWVudCAubWEtc2lkZWJhciB1bCB7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5tb2RhbC1hbm5vdW5jZW1lbnQgLm1hLXNpZGViYXIgbGkge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIGNvbG9yOiAjMDAwO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLm1vZGFsLWFubm91bmNlbWVudCAubWEtc2lkZWJhciBsaSBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogODAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuXG4ubW9kYWwtYW5ub3VuY2VtZW50IC5tYS1zaWRlYmFyIGxpOmhvdmVyLCAubW9kYWwtYW5ub3VuY2VtZW50IC5tYS1zaWRlYmFyIGxpLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNmM7XG4gIGNvbG9yOiAjZmZmOyB9XG5cbi5tb2RhbC1hbm5vdW5jZW1lbnQgLm1hLXNpZGViYXIgaS5mYS1jb21tZW50LW8ge1xuICBwYWRkaW5nLXJpZ2h0OiA0cHg7IH1cblxuLm1vZGFsLWFubm91bmNlbWVudCAubWEtc2lkZWJhciBpLmZhLWNoZXZyb24tcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDRweDsgfVxuXG4ubW9kYWwtYW5ub3VuY2VtZW50IC5tYS1jb250ZW50IHtcbiAgd2lkdGg6IDc2JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgb3ZlcmZsb3c6IGF1dG87IH1cblxuLm1vZGFsLWFubm91bmNlbWVudCAubWEtY29udGVudCBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bzsgfVxuXG4ubW9kYWwtYW5ub3VuY2VtZW50ID4gLm1hLWZvb3RlciB7XG4gIG1pbi1oZWlnaHQ6IDM4cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cHggMzBweCA1cHggMDtcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNmM7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMCAwIDRweCA0cHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAwIDRweCA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4OyB9XG4iLCJib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdNaWNyb3NvZnQgWWFIZWknLFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0Mjk7XG59XG5cbmJvZHkubGF5b3V0IHtcbiAgbWluLXdpZHRoOiAxMDAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZDAxMDU7XG59XG5cbioge1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaWZyYW1lIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5bbmctY2xpY2tdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5vbCx1bCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi53cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuI2hlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgLyp6LWluZGV4OiAyOyovXG4gIHotaW5kZXg6IDEwMDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSg4NywwLDUsLjkpO1xuICBiYWNrZ3JvdW5kOiAjNTIwODEwO1xufVxuXG4jaGVhZGVyIC5oZWFkZXItdG9wIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjNDMwMDAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzcxMDAxMTtcbn1cblxudWwudG9wLWxlZnQge1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAyOXB4O1xuICAvKmJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltZy9oZWFkZXIvd2Vic2l0ZS5naWY/dmVyPTE4MDgwOSkgcmlnaHQgY2VudGVyIG5vLXJlcGVhdDsqL1xuICAvKndpZHRoOiAyNzVweDsqL1xufVxuXG51bC50b3AtbGVmdD5saSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogI2ZmZTY5OTtcbiAgLyogdGV4dC1pbmRlbnQ6IDFlbTsgKi9cbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxudWwudG9wLWxlZnQ+bGk+c3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMTRweDtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudWwudG9wLWxlZnQ+bGk+c3BhbltkYXRhLWxhbmd1YWdlPWVuLVVTXSB7XG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvaGVhZGVyL2VuLmpwZycpO1xufVxuXG51bC50b3AtbGVmdD5saT5zcGFuW2RhdGEtbGFuZ3VhZ2U9emgtQ05dIHtcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9oZWFkZXIvY24uanBnJyk7XG59XG5cbnVsLnRvcC1sZWZ0PmxpPnNwYW5bZGF0YS1sYW5ndWFnZT16aC1UV10ge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL2hlYWRlci9oay5qcGcnKTtcbn1cblxudWwudG9wLWxlZnQ+bGk+c3BhbltkYXRhLWxhbmd1YWdlPXRoXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbnVsLnRvcC1uYXYge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbnVsLnRvcC1uYXY+bGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cblxudWwudG9wLW5hdj5saStsaTpiZWZvcmUge1xuICBjb250ZW50OiAnfCc7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMCA0cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG51bC50b3AtbmF2PmxpLmRlcG9zaXQgYSB7XG4gIGNvbG9yOiAjZmYwO1xufVxuXG51bC50b3AtbmF2PmxpLmRlcG9zaXQuY29sb3IgYSB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbnVsLnRvcC1uYXY+bGkucmVkZW52ZWxvcGUuY29sb3IgYSB7XG4gIGNvbG9yOiAjMGYwO1xufVxuXG51bC50b3AtbmF2PmxpLnByb21vdGlvbiBhIHtcbiAgY29sb3I6ICNmZjA7XG59XG5cbnVsLnRvcC1uYXY+bGkucHJvbW90aW9uLmNvbG9yIGEge1xuICBjb2xvcjogI2YwZjtcbn1cblxudWwudG9wLW5hdj5saS5zbG90IGEge1xuICBjb2xvcjogIzBmMDtcbn1cblxudWwudG9wLW5hdj5saS5zbG90LmNvbG9yIGEge1xuICBjb2xvcjogcmVkO1xufVxuXG51bC50b3AtbmF2PmxpLnBhcnRuZXIgYSB7XG4gIGNvbG9yOiAjZjBmO1xufVxuXG51bC50b3AtbmF2PmxpLnBhcnRuZXIuY29sb3IgYSB7XG4gIGNvbG9yOiAjMGZmO1xufVxuXG51bC50b3AtbmF2PmxpLnRyaWFsIGEge1xuICBjb2xvcjogIzBmMDtcbn1cblxudWwudG9wLW5hdj5saS50cmlhbC5jb2xvciBhIHtcbiAgY29sb3I6ICNmZjA7XG59XG5cbnVsLnRvcC1uYXY+bGk+YSB7XG4gIGNvbG9yOiAjZmZkZmE2O1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxudWwudG9wLW5hdj5saTpob3Zlcj5hIHtcbiAgY29sb3I6ICNmZjA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG51bC50b3AtbmF2PmxpLnBheiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICNmZmRmYTY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudWwudG9wLW5hdj5saS5wYXo6aG92ZXI6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDEwMCU7XG4gIHdpZHRoOiAzNDFweDtcbiAgaGVpZ2h0OiAyMjVweDtcbiAgei1pbmRleDogMztcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9oZWFkZXIvcGFpei5wbmcnKSBuby1yZXBlYXQgY2VudGVyIHRvcDtcbn1cblxuLnRvcF9ob3R7IHBvc2l0aW9uOiByZWxhdGl2ZTsgbWFyZ2luLXJpZ2h0OiAxOHB4O31cbi50b3BfaG90OmJlZm9yZXtiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL2hlYWRlci90b3BfaG90LnBuZycpIG5vLXJlcGVhdDsgd2lkdGg6IDE1cHg7IGhlaWdodDogMTZweDsgZGlzcGxheTogYmxvY2s7IGNvbnRlbnQ6ICcnOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgcmlnaHQ6IC0xOXB4O31cbi53ZWJzaXRleyBwYWRkaW5nOiAwO31cbi53ZWJzaXRlIGltZ3sgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO31cblxuI2xvZ28tYmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIyNnB4O1xuICBoZWlnaHQ6IDY1cHg7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuXG59XG5cbiNsb2dvLWJnOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTM1JTtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMDFweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL2hlYWRlci9zbG9nYW4ucG5nPzYnKSBuby1yZXBlYXQgY2VudGVyO1xufVxuXG4jbG9nby1iZz5hIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI2FjY291bnQtYm94IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbiNhY2NvdW50LWJveD5mb3JtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xufVxuXG4jYWNjb3VudC1ib3g+Zm9ybSBpbnB1dCB7XG4gIHdpZHRoOiAxMzJweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBjb2xvcjogI2YxZDg5NjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWluZGVudDogLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDA7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDVweCBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhMjAwMDk7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogM3B4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4jYWNjb3VudC1ib3g+Zm9ybSBpbnB1dCNsb2dpbl9hY2NvdW50IHtcbiAgdGV4dC1pbmRlbnQ6IDEuOGVtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL2hlYWRlci9sb2dpbl9pY29fMDEucG5nJyk7XG59XG5cbiNhY2NvdW50LWJveD5mb3JtIGlucHV0I2xvZ2luX3Bhc3N3b3JkIHtcbiAgdGV4dC1pbmRlbnQ6IDEuOGVtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL2hlYWRlci9sb2dpbl9pY29fMDIucG5nJyk7XG59XG5cbiNhY2NvdW50LWJveD5mb3JtIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbiNhY2NvdW50LWJveD5mb3JtIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4jYWNjb3VudC1ib3g+Zm9ybSBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4jYWNjb3VudC1ib3g+Zm9ybSBpbnB1dC5wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4jYWNjb3VudC1ib3g+Zm9ybSBidXR0b24ge1xuICB3aWR0aDogNzRweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbioubG9naW4tYnRuIHtcbiAgY29sb3I6ICMzMDA7XG4gIGJhY2tncm91bmQ6ICNmZmEyMDA7XG59XG5cbioubG9naW4tYnRuOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMxYzNjYjE7XG59XG5cbiouam9pbi1idG4ge1xuICBjb2xvcjogIzU0NDEwMTtcbiAgYmFja2dyb3VuZDogI2ZmZGUwMDtcbn1cblxuKi5qb2luLWJ0bjpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjZGYzYTAwO1xufVxuXG4jY2hlY2stY29kZS13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbiN2SW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDJweDtcbiAgcmlnaHQ6IDJweDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMjRweDtcbn1cblxuI2FncmVlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTEwJTtcbiAgcmlnaHQ6IDZweDtcbiAgei1pbmRleDogMTtcbiAgcGFkZGluZzogMnB4IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyMDgxMDtcbn1cblxuI2FncmVlIGEge1xuICBjb2xvcjogI2ZmYTIwMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudWwjYWNjb3VudC1pbmZvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDEwcHggYXV0byA1cHg7XG59XG5cbnVsI2FjY291bnQtaW5mbz5saSB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGNvbG9yOiAjZmJlNjlhO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuXG51bCNhY2NvdW50LWluZm8+bGk+c3Bhbi5hY2NvdW50IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IDZlbTtcbiAgY29sb3I6ICNmZmY2MDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAtbXMtdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIC1vLXRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxudWwjYWNjb3VudC1pbmZvPmxpIGEge1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG51bCNhY2NvdW50LWluZm8+bGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZhMjAwO1xufVxuXG51bCNhY2NvdW50LW5hdiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG51bCNhY2NvdW50LW5hdj5saSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxudWwjYWNjb3VudC1uYXY+bGkrbGk6YmVmb3JlIHtcbiAgY29udGVudDogJ3wnO1xuICBjb2xvcjogI2ZiZTY5YTtcbn1cblxudWwjYWNjb3VudC1uYXY+bGk+YSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICNmYmU2OWE7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudWwjYWNjb3VudC1uYXY+bGk6aG92ZXI+YSB7XG4gIGNvbG9yOiAjZmYwO1xufVxuXG4jbmF2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDQ3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzkzMDAwODtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNiMTAwMGE7XG59XG5cbiNuYXY+dWx7IHdpZHRoOiAxMDAwcHg7IG1hcmdpbjogMCBhdXRvOyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cblxuI25hdj51bD5saSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICAvKmZsb2F0OiBub25lO1xuICAgd2lkdGg6IDEyNXB4O1xuICBoZWlnaHQ6IDQ2cHg7ICovXG4gIGNvbG9yOiAjZmZkZmE2O1xufVxuXG4jbmF2PnVsPmxpK2xpPmE6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMXB4O1xuICB0b3A6IDA7XG4gIHdpZHRoOiAycHg7XG4gIGhlaWdodDogNDZweDtcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9oZWFkZXIvbmF2X2xpbmUucG5nJykgbm8tcmVwZWF0IGNlbnRlcjtcbn1cblxuI25hdj51bD5saS5ob3QxPmE6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDVweDtcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9oZWFkZXIvaG90XzAxLmdpZicpO1xufVxuXG4jbmF2PnVsPmxpLmhvdDI+YTphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogNXB4O1xuICB3aWR0aDogMTlweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL2hlYWRlci9ob3RfMDIuZ2lmJykgbm8tcmVwZWF0IGNlbnRlciB0b3A7XG59XG5cbiNuYXY+dWw+bGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjYWEwMDA5O1xufVxuXG4jbmF2PnVsPmxpLmNvbG9yPmEge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuI25hdj51bD5saT5hIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZkZmE2O1xuICBsaW5lLWhlaWdodDogNDZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4jbmF2PnVsPmxpOmhvdmVyIC5zdWJuYXYge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4jbmF2PnVsPmxpOmhvdmVyIC5zdWJuYXYgbGkge1xuICBvcGFjaXR5OiAxO1xuICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcbiAgLW1vei10cmFuc2Zvcm06IG5vbmU7XG4gIC1tcy10cmFuc2Zvcm06IG5vbmU7XG4gIC1vLXRyYW5zZm9ybTogbm9uZTtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuXG4uc3VibmF2IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogLTI1cHg7XG4gIHdpZHRoOiAxNzVweDtcbiAgZm9udC1zaXplOiAwO1xuICAtd2Via2l0LXBlcnNwZWN0aXZlOiAyODBweDtcbiAgLW1vei1wZXJzcGVjdGl2ZTogMjgwcHg7XG4gIC1tcy1wZXJzcGVjdGl2ZTogMjgwcHg7XG4gIHBlcnNwZWN0aXZlOiAyODBweDtcbiAgei1pbmRleDogOTk5O1xuICAtbW96LXRyYW5zaXRpb246IHZpc2liaWxpdHkgbGluZWFyIC41cztcbiAgLW8tdHJhbnNpdGlvbjogdmlzaWJpbGl0eSBsaW5lYXIgLjVzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IHZpc2liaWxpdHkgbGluZWFyIC41cztcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSBsaW5lYXIgLjVzO1xufVxuXG4uc3VibmF2LmNvbDIge1xuICB3aWR0aDogMzUwcHg7XG4gIGxlZnQ6IC0xMTJweDtcbn1cblxuLnN1Ym5hdiBvbCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uc3VibmF2IGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTc1cHg7XG4gIGhlaWdodDogNDNweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiA0MXB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL2hlYWRlci9zdWJuYXZfYmcucG5nJyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmQwNTM7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC40cywtd2Via2l0LXRyYW5zZm9ybSAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAuNHMsLW1vei10cmFuc2Zvcm0gLjVzO1xuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IC40cywtby10cmFuc2Zvcm0gLjVzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC40cyx0cmFuc2Zvcm0gLjVzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qLnN1Ym5hdiBsaTpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDZweDtcbiAgd2lkdGg6IDQzcHg7XG4gIGhlaWdodDogNDNweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufSovXG5cbi5zdWJuYXYgbGkgYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5zdWJuYXYuZmlzaCBsaTpiZWZvcmUge1xuICB3aWR0aDogNTBweDtcbn1cblxuXG4uc3VibmF2LnByb21vdGlvbiBsaVtnYW1lLWJveD1cImRlcG9zaXRcIl06YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9oZWFkZXIvcHJvbW8vZGVwb3NpdC5wbmcnKTtcbn1cblxuLnN1Ym5hdi5wcm9tb3Rpb24gbGlbZ2FtZS1ib3g9XCJwcm9tb3Rpb25cIl06YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9oZWFkZXIvcHJvbW8vcHJvbW90aW9uLnBuZycpO1xufVxuXG4uc3VibmF2LnByb21vdGlvbiBsaVtnYW1lLWJveD1cInNsb3RcIl06YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9oZWFkZXIvcHJvbW8vc2xvdC5wbmcnKTtcbn1cblxuXG4jYmFubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjMDAwIHVybCgnL2Fzc2V0cy9pbWcvaGVhZGVyL2Jhbm5lci5qcGcnKSBuby1yZXBlYXQgY2VudGVyIHRvcDtcbn1cblxuI25ld3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogMTE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM3cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjUpO1xufVxuXG4jbmV3cyAud3JhcHBlciB7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgbGluZS1oZWlnaHQ6IDMzcHg7XG4gIGhlaWdodDogMzVweDtcbiAgY29sb3I6ICNmZmRmYTY7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvaGVhZGVyL25ld3MucG5nJykgbm8tcmVwZWF0IGxlZnQgY2VudGVyO1xufVxuXG4jaG90LW5ld3Mge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDkwMHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jaG90LW5ld3MgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDMzcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBsaW5lLWhlaWdodDogMzNweDtcbn1cblxuI2hvdC1uZXdzIGxpOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbiNjb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjNTYwMDAzO1xufVxuXG4jZm9vdGVyLWluZm8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0M3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICM3ZjAwMDc7XG59XG5cbiNmb290ZXItaW5mbz5kaXYsI2Zvb3Rlci1pbmZvPmRpdj5hIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiA0M3B4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogI2ZlZmRhOTtcbiAgbGluZS1oZWlnaHQ6IDQzcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cblxuI2Zvb3Rlci1pbmZvPmRpditkaXY6YmVmb3JlIHtcbiAgY29udGVudDogJ3wnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xMHB4O1xufVxuXG4jZm9vdGVyLWluZm8+ZGl2LnRlbCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9mb290ZXIvaW5mb19pY29fMDEucG5nJykgbm8tcmVwZWF0IGxlZnQgY2VudGVyO1xufVxuXG4jZm9vdGVyLWluZm8+ZGl2Lm1haWwge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvZm9vdGVyL2luZm9faWNvXzAyLnBuZycpIG5vLXJlcGVhdCBsZWZ0IGNlbnRlcjtcbn1cblxuI2Zvb3Rlci1pbmZvPmRpdi5jaGF0IHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL2Zvb3Rlci9pbmZvX2ljb18wMy5wbmcnKSBuby1yZXBlYXQgbGVmdCBjZW50ZXI7XG59XG5cbiNmb290ZXItbG9nbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL2Zvb3Rlci9mb290ZXJfbG9nby5qcGc/MycpIG5vLXJlcGVhdCBjZW50ZXI7XG59XG5cbiNmb290ZXItbmF2IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jZm9vdGVyLW5hdiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuI2Zvb3Rlci1uYXYgbGkrbGk6YmVmb3JlIHtcbiAgY29udGVudDogJ3wnO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGNvbG9yOiAjZjVmM2FmO1xufVxuXG4jZm9vdGVyLW5hdiBsaSBhIHtcbiAgY29sb3I6ICNmNWYzYWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbiNmb290ZXItbmF2IGxpIGE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuI2Zvb3Rlci1zdWdnZXN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICNmNWYzYWY7XG59XG5cbiNmb290ZXItc3VnZ2VzdCBzbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbn1cblxuLnNlcnZpY2VzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDI0MHB4O1xufVxuXG4uc2VydmljZXMgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zZXJ2aWNlLWxlZnQge1xuICBsZWZ0OiAwO1xufVxuXG4uc2VydmljZS1sZWZ0PnVsIHtcbiAgd2lkdGg6IDEzMHB4O1xuICAvKmJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvbGVmdC5naWYnKSBuby1yZXBlYXQgY2VudGVyIHRvcDsqL1xufVxuXG4uc2VydmljZS1sZWZ0IC5tZyB7XG4gIGhlaWdodDogNjhweDtcbn1cblxuLnNlcnZpY2UtbGVmdCAuZGVwb3NpdCB7XG4gIGhlaWdodDogNzJweDtcbn1cblxuLnNlcnZpY2UtbGVmdCAuc2xvdCB7XG4gIGhlaWdodDogMTMxcHg7XG59XG5cbi5zZXJ2aWNlLWxlZnQgLmFwcCB7XG4gIGhlaWdodDogMTYwcHg7XG59XG5cbi5zZXJ2aWNlLWxlZnQgLmNsb3NlZCB7XG4gIGhlaWdodDogMjJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VydmljZS1yaWdodCB7XG4gIHJpZ2h0OiAwO1xufVxuXG4uc2VydmljZS1yaWdodD51bCB7XG4gIHdpZHRoOiAxMzBweDtcbiAgLypiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL3JpZ2h0LjIuZ2lmJykgbm8tcmVwZWF0IGNlbnRlciB0b3A7Ki9cbn1cblxuLnNlcnZpY2UtcmlnaHQgLmNoYXQge1xuICBoZWlnaHQ6IDczcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnNlcnZpY2UtcmlnaHQgLmNsaWVudCB7XG4gIGhlaWdodDogMjdweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uc2VydmljZS1yaWdodCAucXEge1xuICBoZWlnaHQ6IDg2cHg7XG4gIHBhZGRpbmctdG9wOiA0OHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZXJ2aWNlLXJpZ2h0IC53ZWNoYXQge1xuICBoZWlnaHQ6IDE1NXB4O1xufVxuXG4uc2VydmljZS1yaWdodCAudGVsIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHBhZGRpbmctdG9wOiA0NHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZXJ2aWNlLXJpZ2h0IC5jbG9zZWQge1xuICBoZWlnaHQ6IDI2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYXNpZGUuc2VydmljZS1sZWZ0LWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAzO1xufVxuXG5hc2lkZS5zZXJ2aWNlLWxlZnQtYm90dG9tIGxpIHtcbiAgd2lkdGg6IDE5MHB4O1xuICBoZWlnaHQ6IDI0NHB4O1xufVxuXG5hc2lkZS5zZXJ2aWNlLWxlZnQtYm90dG9tIGxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG5hc2lkZS5zZXJ2aWNlLWxlZnQtYm90dG9tIGxpIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLypiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL2Nsb3NlLnBuZycpOyovXG59XG5cbmFzaWRlLnNlcnZpY2UtbGVmdC1ib3R0b20gbGkuYXBwIGEge1xuICB3aWR0aDogMTgwcHg7XG4gIGhlaWdodDogMjQwcHg7XG4gIC8qYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9zX2xiLjEucG5nJyk7Ki9cbn1cblxuYXNpZGUuc2VydmljZS1sZWZ0LWJvdHRvbSBsaS5kZXBvc2l0IGEge1xuICAvKmJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvc19sYl9kZXBvc2l0LmdpZicpOyovXG59XG5cbmFzaWRlLnNlcnZpY2UtbGVmdC1ib3R0b20gbGkuZGVwb3NpdCBzcGFuIHtcbiAgd2lkdGg6IDMzcHg7XG4gIGhlaWdodDogMzFweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuI3Jldmlldy1saXN0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IC03N3B4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3N3B4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC44KTtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgY29sb3I6ICNmZmY7XG4gIHotaW5kZXg6IDE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm90dG9tIC40cztcbiAgLW8tdHJhbnNpdGlvbjogYm90dG9tIC40cztcbiAgLW1vei10cmFuc2l0aW9uOiBib3R0b20gLjRzO1xuICB0cmFuc2l0aW9uOiBib3R0b20gLjRzO1xufVxuXG4jcmV2aWV3LWxpc3Qub3BlbiB7XG4gIGJvdHRvbTogMDtcbn1cblxuI3Jldmlldy1saXN0IC51cCwjcmV2aWV3LWxpc3QgLmRvd24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTI0cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvKmJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvdGFiLnBuZycpIG5vLXJlcGVhdDsqL1xufVxuXG4jcmV2aWV3LWxpc3QgLnVwOmFmdGVyLCNyZXZpZXctbGlzdCAuZG93bjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHdpZHRoOiA3cHg7XG4gIGhlaWdodDogOHB4O1xufVxuXG4jcmV2aWV3LWxpc3QgLnVwOmFmdGVyIHtcbiAgLypiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL3VwLnBuZycpIG5vLXJlcGVhdDsqL1xufVxuXG4jcmV2aWV3LWxpc3QgLmRvd246YWZ0ZXIge1xuICAvKmJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvZG93bi5wbmcnKSBuby1yZXBlYXQ7Ki9cbn1cblxuI3Jldmlldy1saXN0IC53cmFwcGVyIHtcbiAgcGFkZGluZy1sZWZ0OiA4MHB4O1xuICBoZWlnaHQ6IDc3cHg7XG4gIC8qYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy90eHQucG5nJykgbm8tcmVwZWF0IDIwcHggMTVweDsqL1xufVxuXG4jcmV2aWV3LWJveCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDEwcHggOHB4IDA7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbiNyZXZpZXctYm94IGxpLm5vLXJldmlldyB7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xufVxuXG4jcmV2aWV3LWJveCBsaSBpbWcge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4jcmV2aWV3LWJveCBsaSBkaXYge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTMxcHg7XG4gIGxlZnQ6IC01cHg7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDI5cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLW1zLXRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAtby10ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC8qYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy90aXRsZS5wbmcnKSBuby1yZXBlYXQ7Ki9cbn1cblxuI3Jldmlldy1ib3ggbGk6aG92ZXIgZGl2IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNtYWlsYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9oZWFkZXIvbV9pY29uLnBuZycpIG5vLXJlcGVhdDtcbn1cblxuI21haWxib3g+c3BhbiwjbWFpbGJveD5zcGFuOmhvdmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA4MCU7XG4gIGJvdHRvbTogNjAlO1xuICBtaW4td2lkdGg6IDE2cHg7XG4gIHBhZGRpbmc6IDAgMnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmNDdlO1xufVxuXG4jbWFycXVlZS13cmFwcGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IC0xO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jbWFycXVlZS13cmFwcGVyLnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbiAgei1pbmRleDogMTAwMDtcbiAgLypiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL3RyYW5zcGFyZW50LWJsYWNrLnBuZycpOyovXG59XG5cbiNtYXJxdWVlIHtcbiAgd2lkdGg6IDYwMHB4O1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgbWFyZ2luOiAzMHB4IGF1dG8gMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAvKmJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvdGFibGVfYmFja2dyb3VuZC5qcGcnKTsqL1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICAtbW96LXRyYW5zaXRpb246IG1hcmdpbi10b3AgZWFzZS1pbiAzMDBtcztcbiAgLW8tdHJhbnNpdGlvbjogbWFyZ2luLXRvcCBlYXNlLWluIDMwMG1zO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbi10b3AgZWFzZS1pbiAzMDBtcztcbiAgdHJhbnNpdGlvbjogbWFyZ2luLXRvcCBlYXNlLWluIDMwMG1zO1xufVxuXG4jbWFycXVlZT5oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbn1cblxuI21hcnF1ZWU+aGVhZGVyPmgyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzAwODBlMztcbiAgZm9udC1zaXplOiAyMXB4O1xuICBsaW5lLWhlaWdodDogNjBweDtcbn1cblxudWwjbmV3c0JhZ3Mge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEwcHggNTBweDtcbiAgbWF4LWhlaWdodDogMzgwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG51bCNuZXdzQmFncz5saSB7XG4gIGNvbG9yOiAjNDU0NTQ1O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICBsaXN0LXN0eWxlOiBkaXNjO1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzk5OTtcbn1cblxuI21hcnF1ZWU+Zm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyIHRvcCxlbGxpcHNlIGZhcnRoZXN0LXNpZGUscmdiYSgwLDAsMCwuMyksdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgOHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XG59XG5cbiNtYXJxdWVlPmZvb3Rlcj5zcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTE5cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgbGluZS1oZWlnaHQ6IDQ1LjVweDtcbiAgLypiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL3NlbnRfYm4ucG5nJyk7Ki9cbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jbWFycXVlZT5mb290ZXI+c3Bhbjpob3ZlciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTQ1LjVweDtcbn1cblxuLnVpLXdpZGdldC1oZWFkZXIge1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cblxuLnVpLWRpYWxvZyB7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLnVpLWRpYWxvZyAudWktZGlhbG9nLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbn1cblxuLnVpLWRpYWxvZyAudWktZGlhbG9nLWJ1dHRvbnBhbmUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuYnV0dG9uLnVpLWJ1dHRvbi51aS13aWRnZXQudWktc3RhdGUtZGVmYXVsdC51aS1jb3JuZXItYWxsLnVpLWJ1dHRvbi10ZXh0LW9ubHkge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi51aS1kaWFsb2cgLnVpLWRpYWxvZy1idXR0b25wYW5lIGJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiAzcHggNnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZkODAwO1xufVxuXG4udWktd2lkZ2V0LW92ZXJsYXkge1xufVxuXG4jbG9naW5nYW1lLWJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDgwMDA0O1xufVxuXG4jbG9iYnkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDE1cHggYXV0bztcbn1cblxuZGl2LnNsb3RzLCNsb2JieT51bC5nYW1lLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjOTQwMjBhO1xufVxuXG4jbG9iYnk+dWwuZ2FtZS1saXN0PmxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuI2xvYmJ5PnVsLmdhbWUtbGlzdD5saTpob3ZlciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XG59XG5cbiN1bi1sb2JieSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjNDgwMDA0O1xuICBib3JkZXI6IDJweCBzb2xpZCAjOTQwMjBhO1xufVxuXG4jdW4tbG9iYnkgYXNpZGUge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDI1M3B4O1xuICBwYWRkaW5nLXRvcDogNTlweDtcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9hYm91dC9hc2lkZV90b3AucG5nJykgbm8tcmVwZWF0IGxlZnQgdG9wO1xufVxuXG4jdW4tbG9iYnkgdWwjc2lkZWJhciB7XG4gIHBhZGRpbmctYm90dG9tOiAxODNweDtcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9hYm91dC9hc2lkZV9ib3R0b20ucG5nJykgbm8tcmVwZWF0IGNlbnRlciBib3R0b207XG59XG5cbiN1bi1sb2JieSB1bCNzaWRlYmFyIGxpIHtcbiAgd2lkdGg6IDI1M3B4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQ6ICM5MzAwMDg7XG59XG5cbiN1bi1sb2JieSB1bCNzaWRlYmFyIGxpIGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiAjZmVmYmE2O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBsaW5lLWhlaWdodDogMzZweDtcbn1cblxuI3VuLWxvYmJ5IHVsI3NpZGViYXIgbGk6aG92ZXIgYSB7XG4gIGNvbG9yOiAjNDgwMDA0O1xuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL2Fib3V0L3NpZGUucG5nJykgbm8tcmVwZWF0IGNlbnRlcjtcbn1cblxuI2FydGljbGVzIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogNjgwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiAjZmVmYmE2O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4jYXJ0aWNsZXMgaDIge1xuICBjb2xvcjogI2ZlZmJhNjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDA7XG59XG5cbiNhcnRpY2xlcyBoMyB7XG4gIGNvbG9yOiAjZmVmYmE2O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbiNhcnRpY2xlcyBoNCB7XG4gIGNvbG9yOiAjZmVmYmE2O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbiNhcnRpY2xlcyBoNDpiZWZvcmUge1xuICAvKmNvbnRlbnQ6ICfDouKAlMKPJzsqL1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4jYXJ0aWNsZXM+dWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4jYXJ0aWNsZXMgb2wge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGxpc3Qtc3R5bGUtdHlwZTogZGVjaW1hbDtcbn1cblxuI2FydGljbGVzIHAsI2FydGljbGVzIGxpIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBsaW5lLWhlaWdodDogMmVtO1xufVxuXG4jYXJ0aWNsZXMgcCB7XG4gIG1hcmdpbjogMWVtIDA7XG59XG5cbiNhcnRpY2xlcyB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jYXJ0aWNsZXMgdGFibGUgdHIsI2FydGljbGVzIHRhYmxlIHRoLCNhcnRpY2xlcyB0YWJsZSB0ZCB7XG4gIGNvbG9yOiAjZmVmYmE2O1xuICBsaW5lLWhlaWdodDogMmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMzZDA1MDg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0YjBhMGU7XG59XG5cbiNhcnRpY2xlcyB0YWJsZSB0aCB7XG59XG5cbiNhcnRpY2xlcyAuaGlnaGxpZ2h0IHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbiNhcnRpY2xlcyB1bC5tdGFiLW1lbnVhbCB7XG4gIG1hcmdpbjogMTVweCBhdXRvO1xufVxuXG4jYXJ0aWNsZXMgdWwubXRhYi1tZW51YWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMTVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBjb2xvcjogI2ZlZmJhNjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogNDNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZDogIzQ4MDAwNDtcbiAgYm9yZGVyOiAycHggc29saWQgIzkzMDAwODtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jYXJ0aWNsZXMgdWwubXRhYi1tZW51YWwgbGkubXRhYiB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjOTMwMDA4O1xufVxuXG4jYXJ0aWNsZXMgdWwuZGVwb3NpdCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuI2FydGljbGVzIHVsLmRlcG9zaXQ+bGkge1xuICBjb3VudGVyLWluY3JlbWVudDogdGl0bGU7XG4gIG1hcmdpbjogMTJweCBhdXRvO1xufVxuXG4jYXJ0aWNsZXMgdWwuZGVwb3NpdD5saSBhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jYXJ0aWNsZXMgdWwuZGVwb3NpdD5saT5hOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiw6bigJPCucOmwrPigKLDr8K8xaFcIiBjb3VudGVyKHRpdGxlLGRlY2ltYWwpXCLDo+KCrOKCrFwiO1xufVxuXG4jYXJ0aWNsZXMgdWwuZGVwb3NpdD5saT5hOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDNweDtcbiAgbGVmdDogNDRweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuI2FydGljbGVzIHVsLmRlcG9zaXQ+bGkgLmRlcG9zaXQtYmcge1xuICBjb2xvcjogI2ZmMDtcbiAgYmFja2dyb3VuZDogcmVkO1xufVxuXG4jYXJ0aWNsZXMuZGVwb3NpdCAuZGVwb3NpdC10aXRsZSB7XG4gIGNvbG9yOiAjMGZmO1xufVxuXG4jYXJ0aWNsZXMuZGVwb3NpdCAuZGVwb3NpdC10aXRsZSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4jYXJ0aWNsZXMuZGVwb3NpdCAuaGlnaGxpZ2h0LWdyZWVuIHtcbiAgY29sb3I6ICMwMGIwNTA7XG59XG5cbiNhcnRpY2xlcyAuaGlnaGxpZ2h0LXJlZCwjYXJ0aWNsZXMuZGVwb3NpdCAuaGlnaGxpZ2h0LXJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbiNhcnRpY2xlcy5kZXBvc2l0IC5oaWdobGlnaHQtcGluayB7XG4gIGNvbG9yOiAjZjBmO1xufVxuXG4jYXJ0aWNsZXMuZGVwb3NpdCAuaGlnaGxpZ2h0LWxpZ2h0Ymx1ZSB7XG4gIGNvbG9yOiAjMGZmO1xufVxuXG4jYXJ0aWNsZXMuZGVwb3NpdCAuaGlnaGxpZ2h0LWJsdWUge1xuICBjb2xvcjogIzAwZjtcbn1cblxuI2FydGljbGVzLmRlcG9zaXQgLnVuZGVybGluZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDFweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogUE1pbmdMaVU7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uYm9keSAjdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjNDMwMDAwO1xufVxuXG4uYm9keS5jb250YWluZXIgI3RpdGxlLC5ib2R5ICNhY2NvdW50LWhlYWRpbmcsLmJvZHkgI3dpdGhkcmF3YWwtaGVhZGluZyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjYWEwMDA5O1xufVxuXG4uYm9keSAjc2hvdy1hY2NvdW50LWluZm8uYnRuIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5mb3JtLWdyb3VwIC5jb250cm9sLWRpdiBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOTk5O1xufVxuXG4uZm9ybS1ncm91cCAuY29udHJvbC1kaXYgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzk5OTtcbn1cblxuLmZvcm0tZ3JvdXAgLmNvbnRyb2wtZGl2IGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOTk5O1xufVxuXG4uZm9ybS1ncm91cCAuY29udHJvbC1kaXYgaW5wdXQucGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzk5OTtcbn1cblxuLnBhbmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjNWY1ZjVmO1xuICAvKmJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvcGFuZWxfYmFja2dyb3VuZC5qcGcnKSByZXBlYXQ7Ki9cbiAgYm9yZGVyOiAwO1xufVxuXG4jdGl0bGUge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIxcHg7XG4gIGZvbnQtZmFtaWx5OiAnTWljcm9zb2Z0IEpoZW5nSGVpJztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4jdGl0bGU+ZGl2IHtcbiAgbWFyZ2luLXRvcDogLTFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4jYWNjb3VudC1wYW5lbCwjd2l0aGRyYXdhbC1wYW5lbCB7XG4gIHdpZHRoOiA3OTJweDtcbiAgY29sb3I6ICM1ZjVmNWY7XG4gIC8qYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9wYW5lbF9iYWNrZ3JvdW5kLmpwZycpIHJlcGVhdDsqL1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjdiN2I3O1xuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggMXB4ICNmZmY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAxcHggI2ZmZjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAxcHggI2ZmZjtcbn1cblxuI2FjY291bnQtaGVhZGluZywjd2l0aGRyYXdhbC1oZWFkaW5nIHtcbiAgbWFyZ2luOiAxcHggMXB4O1xuICBmb250LWZhbWlseTogUE1pbmdMaVU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5wYW5lbC1ib2R5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGFuZWwtYm9keT5mb3JtIHtcbiAgd2lkdGg6IDcwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNvbnRyb2wtZGl2IGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL2lucHV0X2NlbnRlci5wbmcnKSByZXBlYXQteTtcbiAgYm9yZGVyOiAwO1xufVxuXG4uY29udHJvbC1kaXYgaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLDAgMCA4cHggcmdiYSgyNTUsMjQ5LDE0OSwuNik7XG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksMCAwIDhweCByZ2JhKDI1NSwyNDksMTQ5LC42KTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksMCAwIDhweCByZ2JhKDI1NSwyNDksMTQ5LC42KTtcbn1cblxuLnRvb2x0aXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDkzJTtcbiAgdG9wOiAtMnB4O1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50b29sdGlwc2hvd2Fycm93X2ludCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiAtMXB4O1xuICB6LWluZGV4OiAxMDAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiA4cHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2ZmZjtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAwIHJnYmEoMCwwLDAsLjEpLGluc2V0IDAgLTFweCAwIHJnYmEoMCwwLDAsLjA3KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMSksaW5zZXQgMCAtMXB4IDAgcmdiYSgwLDAsMCwuMDcpO1xuICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMSksaW5zZXQgMCAtMXB4IDAgcmdiYSgwLDAsMCwuMDcpO1xufVxuXG4udG9vbHRpcHNob3dhcnJvd19vdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICByaWdodDogMDtcbiAgei1pbmRleDogOTk5O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiA4cHggc29saWQ7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNiYmI7XG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAwIHJnYmEoMCwwLDAsLjEpLGluc2V0IDAgLTFweCAwIHJnYmEoMCwwLDAsLjA3KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMSksaW5zZXQgMCAtMXB4IDAgcmdiYSgwLDAsMCwuMDcpO1xuICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMSksaW5zZXQgMCAtMXB4IDAgcmdiYSgwLDAsMCwuMDcpO1xufVxuXG4udG9vbHRpcHNob3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OSFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyNTBweDtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjYmJiICNiYmIgI2E4YThhODtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1tb3otYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsLjIpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLC4yKTtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsLjIpO1xufVxuXG4uZm9ybS1jb250cm9sOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM4Nzg3ODc7XG59XG5cbi5mb3JtLWNvbnRyb2w6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjODc4Nzg3O1xufVxuXG4uZm9ybS1jb250cm9sOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM4Nzg3ODc7XG59XG5cbi5mb3JtLWNvbnRyb2w6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM4Nzg3ODc7XG59XG5cbi5pbnB1dC1ibG9jayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzA0cHg7XG59XG5cbi5oZWxwLWJsb2NrIHtcbiAgY29sb3I6ICM4YTZkM2I7XG59XG5cbi5pbnB1dC1ibG9jay10b3Age1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTJweDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvaW5wdXQtdG9wLWJ0bS5wbmcnKSBuby1yZXBlYXQgMCAwO1xufVxuXG4uaW5wdXQtYmxvY2stYnRtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC04cHg7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9pbnB1dC10b3AtYnRtLnBuZycpIG5vLXJlcGVhdCAwIC00cHg7XG59XG5cbi5idG4tc3VibWl0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTE5cHg7XG4gIGhlaWdodDogNDVweDtcbiAgY29sb3I6ICM0NTQ1NDU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IFBNaW5nTGlVO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9zZW50X2JuLnBuZycpIG5vLXJlcGVhdCAwIDA7XG4gIGJvcmRlcjogMDtcbn1cblxuLmJ0bi1zdWJtaXQ6aG92ZXIge1xuICBjb2xvcjogIzQ1NDU0NTtcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9zZW50X2JuLnBuZycpIG5vLXJlcGVhdCAwIC00NnB4O1xufVxuXG4uYnRuLXN1Ym1pdFtkaXNhYmxlZF06aG92ZXIge1xuICBjb2xvcjogIzk5OTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAwO1xufVxuXG4udGFibGUge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLnRhYmxlPnRoZWFkPnRyPnRoLC50YWJsZT50Ym9keT50cj50aCwudGFibGU+dGZvb3Q+dHI+dGgsLnRhYmxlPnRoZWFkPnRyPnRkLC50YWJsZT50Ym9keT50cj50ZCwudGFibGU+dGZvb3Q+dHI+dGQge1xuICBsaW5lLWhlaWdodDogMmVtO1xufVxuXG50YWJsZSB0Zm9vdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2VlZTtcbn1cblxuI3BvcHVwLWRpYWxvZyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbiNwb3B1cC1kaWFsb2cgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0byFpbXBvcnRhbnQ7XG59XG5cbiNwb3B1cC1kaWFsb2cgLmRpYWxvZy1mb290ZXIge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDAgM3B4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMjlweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDA7XG59XG5cbnVsI25ld3NCYWdzPmxpIHtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLm1vZGFsLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTAwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjJzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAuMnM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAuMnM7XG4gIHRyYW5zaXRpb246IGFsbCAuMnM7XG59XG5cbi5tb2RhbC1vdmVybGF5Lm1vZGFsLXNob3cge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAuNTtcbn1cblxuLm1vZGFsLWFubm91bmNlbWVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3JTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTQ5OXB4O1xuICB3aWR0aDogOTk3cHg7XG4gIHotaW5kZXg6IDEwMDAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSguNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKC41KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSguNSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguNSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoLjUpO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIC41cztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIC41cztcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcbn1cblxuLm1vZGFsLWFubm91bmNlbWVudC5tb2RhbC1zaG93IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubW9kYWwtYW5ub3VuY2VtZW50Pi5tYS10aXRsZSB7XG4gIG1pbi1oZWlnaHQ6IDM4cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNmM7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xufVxuXG4ubW9kYWwtYW5ub3VuY2VtZW50Pi5tYS10aXRsZT5zcGFuIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubW9kYWwtYW5ub3VuY2VtZW50Pi5tYS10aXRsZT5pIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1vZGFsLWFubm91bmNlbWVudD4ubWEtYm9keT5zZWN0aW9uIHtcbiAgaGVpZ2h0OiA1NDJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ubW9kYWwtYW5ub3VuY2VtZW50IC5tYS1zaWRlYmFyIHtcbiAgd2lkdGg6IDI0JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4ubW9kYWwtYW5ub3VuY2VtZW50IC5tYS1zaWRlYmFyIHVsIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tb2RhbC1hbm5vdW5jZW1lbnQgLm1hLXNpZGViYXIgbGkge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIGNvbG9yOiAjMDAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tb2RhbC1hbm5vdW5jZW1lbnQgLm1hLXNpZGViYXIgbGkgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDgwJTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5tb2RhbC1hbm5vdW5jZW1lbnQgLm1hLXNpZGViYXIgbGk6aG92ZXIsLm1vZGFsLWFubm91bmNlbWVudCAubWEtc2lkZWJhciBsaS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDZjO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm1vZGFsLWFubm91bmNlbWVudCAubWEtc2lkZWJhciBpLmZhLWNvbW1lbnQtbyB7XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcbn1cblxuLm1vZGFsLWFubm91bmNlbWVudCAubWEtc2lkZWJhciBpLmZhLWNoZXZyb24tcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLm1vZGFsLWFubm91bmNlbWVudCAubWEtY29udGVudCB7XG4gIHdpZHRoOiA3NiU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ubW9kYWwtYW5ub3VuY2VtZW50IC5tYS1jb250ZW50IGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ubW9kYWwtYW5ub3VuY2VtZW50Pi5tYS1mb290ZXIge1xuICBtaW4taGVpZ2h0OiAzOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNXB4IDMwcHggNXB4IDA7XG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDZjO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xuICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/lobby/lobby.template.html":
/*!*******************************************!*\
  !*** ./src/app/lobby/lobby.template.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"nav\" [hidden]=\"(isHandset$ | async)\">\n    <ul>\n        <li>\n            <a routerLink=\"/\">首页</a>\n        </li>\n        <li class=\"hot1 toggle-color\" toggle-color=\"\">\n            <a id=\"egame-nav\" routerLink=\"/egame/41\" style=\"color: rgb(255, 223, 166);\">电子游艺</a>\n            <div class=\"subnav slot games col2\">\n                <!-- <ol class=\"myList\">\n                    <li class=\"point dc_hot \" onclick=\"javascript:location.href='/egame/41'\" style=\"transition-delay: 0ms;\"><img src=\"//ktsimg.clsj365.com/images_plus/header/nav/41_nav_logo.png?ver=1531784142\">MG电子</li>\n                    <li class=\"point \" onclick=\"javascript:location.href='/egame/120'\" style=\"transition-delay: 50ms;\"><img src=\"//ktsimg.clsj365.com/images_plus/header/nav/120_nav_logo.png?ver=1540966872\">RT电子</li>\n                    <li class=\"point \" onclick=\"javascript:location.href='/egame/123'\" style=\"transition-delay: 100ms;\"><img src=\"//ktsimg.clsj365.com/images_plus/header/nav/123_nav_logo.png?ver=1533285957\">RTG2电子</li>\n                    <li class=\"point \" onclick=\"javascript:location.href='/egame/129'\" style=\"transition-delay: 150ms;\"><img src=\"//ktsimg.clsj365.com/images_plus/header/nav/129_nav_logo.png?ver=1548312375\">DS捕鱼</li>\n                    <li class=\"point \" onclick=\"javascript:location.href='/egame/10'\" style=\"transition-delay: 200ms;\"><img src=\"//ktsimg.clsj365.com/images_plus/header/nav/10_nav_logo.png?ver=1531784142\">PT电子</li>\n                    <li class=\"point \" onclick=\"javascript:location.href='/egame/11'\" style=\"transition-delay: 250ms;\"><img src=\"//ktsimg.clsj365.com/images_plus/header/nav/11_nav_logo.png?ver=1531783820\">AG电子</li>\n                    <li class=\"point \" onclick=\"javascript:location.href='/egame/24'\" style=\"transition-delay: 300ms;\"><img src=\"//ktsimg.clsj365.com/images_plus/header/nav/24_nav_logo.png?ver=1531784142\">BBIN电子</li>\n                    <li class=\"point \" onclick=\"javascript:location.href='/egame/105'\" style=\"transition-delay: 350ms;\"><img src=\"//ktsimg.clsj365.com/images_plus/header/nav/105_nav_logo.png?ver=1533285950\">GA/BG电子</li>\n                    <li class=\"point \" onclick=\"javascript:location.href='/egame/104'\" style=\"transition-delay: 400ms;\"><img src=\"//ktsimg.clsj365.com/images_plus/header/nav/104_nav_logo.png?ver=1533285950\">BG捕鱼</li>\n                    <li class=\"point dc_hot dc_new \" onclick=\"javascript:location.href='/egame/59'\" style=\"transition-delay: 450ms;\"><img src=\"//ktsimg.clsj365.com/images_plus/header/nav/59_nav_logo.png?ver=1531792616\">XIN电子</li>\n                    <li class=\"point dc_hot \" onclick=\"javascript:location.href='/egame/93'\" style=\"transition-delay: 500ms;\"><img src=\"//ktsimg.clsj365.com/images_plus/header/nav/93_nav_logo.png?ver=1531784912\">GNS电子</li>\n                    <li class=\"point \" onclick=\"javascript:location.href='/egame/89'\" style=\"transition-delay: 550ms;\"><img src=\"//ktsimg.clsj365.com/images_plus/header/nav/89_nav_logo.png?ver=1531784912\">PP王者电子</li>\n                    <li class=\"point \" onclick=\"javascript:location.href='/egame/61'\" style=\"transition-delay: 600ms;\"><img src=\"//ktsimg.clsj365.com/images_plus/header/nav/61_nav_logo.png?ver=1531784912\">SG电子</li>\n                    <li class=\"point \" onclick=\"javascript:location.href='/egame/95'\" style=\"transition-delay: 650ms;\"><img src=\"//ktsimg.clsj365.com/images_plus/header/nav/95_nav_logo.png?ver=1538466094\">AE电子</li>\n                    <li class=\"point \" onclick=\"javascript:location.href='/egame/94'\" style=\"transition-delay: 700ms;\"><img src=\"//ktsimg.clsj365.com/images_plus/header/nav/94_nav_logo.png?ver=1532045450\">SWG电子</li>\n                    <li class=\"point \" onclick=\"javascript:location.href='/egame/77'\" style=\"transition-delay: 750ms;\"><img src=\"//ktsimg.clsj365.com/images_plus/header/nav/77_nav_logo.png?ver=1531784142\">LX电子</li>\n                    <li class=\"point \" onclick=\"javascript:location.href='/egame/84'\" style=\"transition-delay: 800ms;\"><img src=\"//ktsimg.clsj365.com/images_plus/header/nav/84_nav_logo.png?ver=1531792616\">FG电子</li>\n                    <li class=\"point \" onclick=\"javascript:location.href='/egame/76'\" style=\"transition-delay: 850ms;\"><img src=\"//ktsimg.clsj365.com/images_plus/header/nav/76_nav_logo.png?ver=1543050388\">JDB电子</li>\n                    <li class=\"point dc_hot dc_new \" onclick=\"javascript:location.href='/egame/78'\" style=\"transition-delay: 900ms;\"><img src=\"//ktsimg.clsj365.com/images_plus/header/nav/78_nav_logo.png?ver=1531792616\">YP电子</li>\n                    <li class=\"point \" onclick=\"javascript:location.href='/egame/32'\" style=\"transition-delay: 950ms;\"><img src=\"//ktsimg.clsj365.com/images_plus/header/nav/32_nav_logo.png?ver=1531792616\">QT电子</li>\n                    <li class=\"point \" onclick=\"javascript:location.href='/egame/3'\" style=\"transition-delay: 1000ms;\"><img src=\"//ktsimg.clsj365.com/images_plus/header/nav/3_nav_logo.png?ver=1531784912\">HB电子</li>\n                    <li class=\"point \" onclick=\"javascript:location.href='/egame/74'\" style=\"transition-delay: 1050ms;\"><img src=\"//ktsimg.clsj365.com/images_plus/header/nav/74_nav_logo.png?ver=1531784142\">AB电子</li>\n                    <li class=\"point \" onclick=\"javascript:location.href='/egame/29'\" style=\"transition-delay: 1100ms;\"><img src=\"//ktsimg.clsj365.com/images_plus/header/nav/29_nav_logo.png?ver=1531783820\">AG捕鱼</li>\n                    <li class=\"point \" onclick=\"javascript:location.href='/egame/91'\" style=\"transition-delay: 1150ms;\"><img src=\"//ktsimg.clsj365.com/images_plus/header/nav/91_nav_logo.png?ver=1531785298\">CQ9游戏</li>\n                    <li class=\"point \" onclick=\"javascript:location.href='/egame/97'\" style=\"transition-delay: 1200ms;\"><img src=\"//ktsimg.clsj365.com/images_plus/header/nav/97_nav_logo.png?ver=1533519870\">MW电子</li>\n                </ol> -->\n            </div>\n        </li>\n        <li class=\"hot2 toggle-color\" toggle-color=\"\">\n            <a routerLink=\"/egame/41\">MG电子</a>\n            <!-- <ol class=\"subnav MG-egame games\">\n                <li class=\"point dc_hot\" onclick=\"                $('#modal_login').modal('show');\n                    \" style=\"transition-delay: 0ms;\">\n                    <img src=\"//ktsimg.clsj365.com/common/storage/game/egame/mg/2061.png?ver=1536290384\">\n                    热血羽球\n                </li>\n                <li class=\"point dc_hot\" onclick=\"                $('#modal_login').modal('show');\n                    \" style=\"transition-delay: 50ms;\">\n                    <img src=\"//ktsimg.clsj365.com/common/storage/game/egame/mg/2074.png?ver=1548127674\">\n                    冰球突破豪华版\n                </li>\n                <li class=\"point dc_hot\" onclick=\"                $('#modal_login').modal('show');\n                    \" style=\"transition-delay: 100ms;\">\n                    <img src=\"//ktsimg.clsj365.com/common/storage/game/egame/mg/1229.png?ver=1529398309\">\n                    冰球突破\n                </li>\n                <li class=\"point \" onclick=\"                $('#modal_login').modal('show');\n                    \" style=\"transition-delay: 150ms;\">\n                    <img src=\"//ktsimg.clsj365.com/common/storage/game/egame/mg/1910.png?ver=1529398309\">\n                    圣诞企鹅\n                </li>\n                <li class=\"point \" onclick=\"                $('#modal_login').modal('show');\n                    \" style=\"transition-delay: 200ms;\">\n                    <img src=\"//ktsimg.clsj365.com/common/storage/game/egame/mg/1911.png?ver=1529398309\">\n                    囧囧熊猫\n                </li>\n                <li class=\"point \" onclick=\"                $('#modal_login').modal('show');\n                    \" style=\"transition-delay: 250ms;\">\n                    <img src=\"//ktsimg.clsj365.com/common/storage/game/egame/mg/1159.png?ver=1529398309\">\n                    篮球巨星\n                </li>\n            </ol> -->\n        </li>\n        <li class=\"hot2 toggle-color\">\n            <a id=\"fish-nav\" routerLink=\"/fish\" style=\"color: rgb(255, 223, 166);\">捕鱼游戏</a>\n            <div class=\"subnav fish col2 games\">\n                <!-- <ol class=\"myList\">\n                    <li class=\"point\" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 0ms;\">\n                        <img src=\"//ktsimg.clsj365.com/images_plus/fish/icon_20022.png?ver=1547023383\">\n                        深海大赢家\n                    </li>\n                    <li class=\"point\" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 50ms;\">\n                        <img src=\"//ktsimg.clsj365.com/images_plus/fish/icon_23382.png?ver=1547023383\">\n                        捕鱼大师\n                    </li>\n                    <li class=\"point\" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 100ms;\">\n                        <img src=\"//ktsimg.clsj365.com/images_plus/fish/icon_22829.png?ver=1547023383\">\n                        龙王捕鱼\n                    </li>\n                    <li class=\"point\" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 150ms;\">\n                        <img src=\"//ktsimg.clsj365.com/images_plus/fish/icon_24162.png?ver=1547023383\">\n                        财神捕鱼\n                    </li>\n                    <li class=\"point\" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 200ms;\">\n                        <img src=\"//ktsimg.clsj365.com/images_plus/fish/icon_25004.png?ver=1547023383\">\n                        好运农场\n                    </li>\n                    <li class=\"point\" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 250ms;\">\n                        <img src=\"//ktsimg.clsj365.com/images_plus/fish/icon_24776.png?ver=1547023383\">\n                        捕鱼大师\n                    </li>\n                    <li class=\"point\" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 300ms;\">\n                        <img src=\"//ktsimg.clsj365.com/images_plus/fish/icon_25535.png?ver=1550372183\">\n                        海霸王\n                    </li>\n                    <li class=\"point\" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 350ms;\">\n                        <img src=\"//ktsimg.clsj365.com/images_plus/fish/icon_23381.png?ver=1547023383\">\n                        捕鱼达人\n                    </li>\n                    <li class=\"point\" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 400ms;\">\n                        <img src=\"//ktsimg.clsj365.com/images_plus/fish/icon_22600.png?ver=1547023383\">\n                        空战世纪\n                    </li>\n                    <li class=\"point\" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 450ms;\">\n                        <img src=\"//ktsimg.clsj365.com/images_plus/fish/icon_24161.png?ver=1547023383\">\n                        龙王捕鱼2\n                    </li>\n                    <li class=\"point\" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 500ms;\">\n                        <img src=\"//ktsimg.clsj365.com/images_plus/fish/icon_25322.png?ver=1547023383\">\n                        捕鱼\n                    </li>\n                    <li class=\"point\" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 550ms;\">\n                        <img src=\"//ktsimg.clsj365.com/images_plus/fish/icon_24667.png?ver=1547023383\">\n                        千炮捕鱼\n                    </li>\n                    <li class=\"point\" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 600ms;\">\n                        <img src=\"//ktsimg.clsj365.com/images_plus/fish/icon_24336.png?ver=1547023383\">\n                        捕鱼多福\n                    </li>\n                    <li class=\"point\" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 650ms;\">\n                        <img src=\"//ktsimg.clsj365.com/images_plus/fish/icon_24530.png?ver=1547023383\">\n                        皇金渔场\n                    </li>\n                    <li class=\"point\" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 700ms;\">\n                        <img src=\"//ktsimg.clsj365.com/images_plus/fish/icon_1180.png?ver=1547023383\">\n                        捕鱼王2\n                    </li>\n                    <li class=\"point\" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 750ms;\">\n                        <img src=\"//ktsimg.clsj365.com/images_plus/fish/icon_23968.png?ver=1547023383\">\n                        皇金渔场2\n                    </li>\n                    <li class=\"point\" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 800ms;\">\n                        <img src=\"//ktsimg.clsj365.com/images_plus/fish/icon_24113.png?ver=1547023383\">\n                        寻宝捕鱼王\n                    </li>\n                    <li class=\"point\" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 850ms;\">\n                        <img src=\"//ktsimg.clsj365.com/images_plus/fish/icon_24394.png?ver=1547023383\">\n                        福气水果\n                    </li>\n                    <li class=\"point\" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 900ms;\">\n                        <img src=\"//ktsimg.clsj365.com/images_plus/fish/icon_25542.png?ver=1547022410\">\n                        捕鱼天王\n                    </li>\n                </ol>\n     -->\n            </div>\n        </li>\n        <li class=\"hot2\">\n            <a routerLink=\"/casino\">真人视讯</a>\n            <!-- <ol class=\"subnav live games\">\n                <li class=\"point dc_hot dc_new \" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 0ms;\">\n                    <img src=\"//ktsimg.clsj365.com/images_plus/header/nav/75_nav_logo.png?ver=1531784142\">\n                    申博真人\n                </li>\n                <li class=\"point \" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 50ms;\">\n                    <img src=\"//ktsimg.clsj365.com/images_plus/header/nav/102_nav_logo.png?ver=1533285950\">\n                    BG真人\n                </li>\n                <li class=\"point \" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 100ms;\">\n                    <img src=\"//ktsimg.clsj365.com/images_plus/header/nav/121_nav_logo.png?ver=1541133179\">\n                    GD真人\n                </li>\n                <li class=\"point \" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 150ms;\">\n                    <img src=\"//ktsimg.clsj365.com/images_plus/header/nav/124_nav_logo.png?ver=1542334778\">\n                    SA真人\n                </li>\n                <li class=\"point \" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 200ms;\">\n                    <img src=\"//ktsimg.clsj365.com/images_plus/header/nav/16_nav_logo.png?ver=1531784142\">\n                    AB真人\n                </li>\n                <li class=\"point dc_hot dc_new \" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 250ms;\">\n                    <img src=\"//ktsimg.clsj365.com/images_plus/header/nav/13_nav_logo.png?ver=1531783820\">\n                    AGIN\n                </li>\n                <li class=\"point \" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 300ms;\">\n                    <img src=\"//ktsimg.clsj365.com/images_plus/header/nav/14_nav_logo.png?ver=1531784142\">\n                    BBIN真人\n                </li>\n                <li class=\"point dc_new \" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 350ms;\">\n                    <img src=\"//ktsimg.clsj365.com/images_plus/header/nav/42_nav_logo.png?ver=1531784142\">\n                    MG真人\n                </li>\n                <li class=\"point \" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 400ms;\">\n                    <img src=\"//ktsimg.clsj365.com/images_plus/header/nav/73_nav_logo.png?ver=1531783820\">\n                    OG真人\n                </li>\n                <li class=\"point \" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 450ms;\">\n                    <img src=\"//ktsimg.clsj365.com/images_plus/header/nav/86_nav_logo.png?ver=1531792616\">\n                    N2真人\n                </li>\n                <li class=\"point \" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 500ms;\">\n                    <img src=\"//ktsimg.clsj365.com/images_plus/header/nav/39_nav_logo.png?ver=1531784142\">\n                    PT真人\n                </li>\n                <li class=\"point \" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 550ms;\">\n                    <img src=\"//ktsimg.clsj365.com/images_plus/header/nav/36_nav_logo.png?ver=1544515127\">\n                    OPUS真人\n                </li>\n                <li class=\"point \" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 600ms;\">\n                    <img src=\"//ktsimg.clsj365.com/images_plus/header/nav/72_nav_logo.png?ver=1531812957\">\n                    eBET真人\n                </li>\n            </ol> -->\n        </li>\n        <li>\n            <a routerLink=\"/sport\">体育赛事</a>\n            <!-- <ol class=\"subnav sport games\">\n                <li class=\"point dc_new \" onclick=\"javascript:location.href='/sport/18'\" style=\"transition-delay: 0ms;\">\n                    <img src=\"//ktsimg.clsj365.com/images_plus/header/nav/18_nav_logo.png?ver=1538467581\">\n                    皇冠体育\n                </li>\n                <li class=\"point dc_hot dc_new \" onclick=\"javascript:location.href='/sport/19'\" style=\"transition-delay: 50ms;\">\n                    <img src=\"//ktsimg.clsj365.com/images_plus/header/nav/19_nav_logo.png?ver=1531787722\">\n                    沙巴体育\n                </li>\n                <li class=\"point \" onclick=\"javascript:location.href='/sport/37'\" style=\"transition-delay: 100ms;\">\n                    <img src=\"//ktsimg.clsj365.com/images_plus/header/nav/37_nav_logo.png?ver=1531792616\">\n                    OPUS体育\n                </li>\n                <li class=\"point \" onclick=\"javascript:location.href='/sport/34'\" style=\"transition-delay: 150ms;\">\n                    <img src=\"//ktsimg.clsj365.com/images_plus/header/nav/34_nav_logo.png?ver=1531784142\">\n                    BBIN体育\n                </li>\n                <li class=\"point \" onclick=\"javascript:location.href='/sport/44'\" style=\"transition-delay: 200ms;\">\n                    <img src=\"//ktsimg.clsj365.com/images_plus/header/nav/44_nav_logo.png?ver=1531784142\">\n                    BBIN新体育\n                </li>\n                <li class=\"point \" onclick=\"javascript:location.href='/sport/90'\" style=\"transition-delay: 250ms;\">\n                    <img src=\"//ktsimg.clsj365.com/images_plus/header/nav/90_nav_logo.png?ver=1531783820\">\n                    AG体育\n                </li>\n            </ol> -->\n        </li>\n        <li class=\"hot2\">\n            <a routerLink=\"/poker/109\">棋牌游戏</a>\n            <!-- <ol class=\"subnav poker games\">\n                <li class=\"point \" onclick=\"javascript:location.href='/poker/109'\" style=\"transition-delay: 0ms;\">\n                    <img src=\"//ktsimg.clsj365.com/images_plus/header/nav/109_nav_logo.png?ver=1534930390\">\n                    KY棋牌\n                </li>\n                <li class=\"point \" onclick=\"javascript:location.href='/poker/125'\" style=\"transition-delay: 50ms;\">\n                    <img src=\"//ktsimg.clsj365.com/images_plus/header/nav/125_nav_logo.png?ver=1543990794\">\n                    LEG棋牌\n                </li>\n            </ol> -->\n        </li>\n        <li>\n            <a routerLink=\"/lotteryCenter\">彩票游戏</a>\n            <!-- <ol class=\"subnav lottery games\">\n                <li class=\"point \" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 0ms;\">\n                    <img src=\"//ktsimg.clsj365.com/images_plus/header/nav/79_nav_logo.png?ver=1531792616\">\n                    天成彩票\n                </li>\n                <li class=\"point \" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 50ms;\">\n                    <img src=\"//ktsimg.clsj365.com/images_plus/header/nav/116_nav_logo.png?ver=1538454711\">\n                    CB彩票\n                </li>\n                <li class=\"point \" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 100ms;\">\n                    <img src=\"//ktsimg.clsj365.com/images_plus/header/nav/21_nav_logo.png?ver=1531784142\">\n                    BBIN彩票\n                </li>\n                <li class=\"point \" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 150ms;\">\n                    <img src=\"//ktsimg.clsj365.com/images_plus/header/nav/22_nav_logo.png?ver=1531792616\">\n                    KG彩票\n                </li>\n                <li class=\"point \" onclick=\"$(&quot;#modal_login&quot;).modal(&quot;show&quot;);\" style=\"transition-delay: 200ms;\">\n                    <img src=\"//ktsimg.clsj365.com/images_plus/header/nav/99_nav_logo.png?ver=1534226933\">\n                    VR彩票\n                </li>\n            </ol> -->\n        </li>\n        <li>\n            <a routerLink=\"/esport/126\">电竞游戏</a>\n            <!-- <ol class=\"subnav esport games\">\n                <li class=\"point \" onclick=\"javascript:location.href='/esport/126'\" style=\"transition-delay: 0ms;\">\n                    <img src=\"//ktsimg.clsj365.com/images_plus/header/nav/126_nav_logo.png?ver=1545816745\">\n                    HC电竞\n                </li>\n                <li class=\"point \" onclick=\"javascript:location.href='/esport/108'\" style=\"transition-delay: 50ms;\">\n                    <img src=\"//ktsimg.clsj365.com/images_plus/header/nav/108_nav_logo.png?ver=1534227262\">\n                    泛亚电竞\n                </li>\n                <li class=\"point \" onclick=\"javascript:location.href='/esport/115'\" style=\"transition-delay: 100ms;\">\n                    <img src=\"//ktsimg.clsj365.com/images_plus/header/nav/115_nav_logo.png?ver=1534913661\">\n                    电竞牛\n                </li>\n            </ol> -->\n        </li>\n        <li class=\"hot2 toggle-color\" toggle-color=\"\">\n            <a id=\"promo-nav\" routerLink=\"/infos/agent-regel\" style=\"color: rgb(255, 255, 255);\">优惠活动</a>\n            <!-- <ol class=\"subnav promotion\">\n                <li style=\"transition-delay: 0ms;\"><img src=\"//ktsimg.clsj365.com/assets/img/header/promo/deposit.png?ver=1531788880\"><a href=\"javascript:void(0);\" onclick=\"$('#modal_login').modal('show');\">快速充值</a></li>\n                <li style=\"transition-delay: 50ms;\"><img src=\"//ktsimg.clsj365.com/assets/img/header/promo/promotion.png?ver=1532328631\"><a href=\"http://hd86255.com\">优惠大厅</a></li>\n                <li style=\"transition-delay: 100ms;\"><img src=\"//ktsimg.clsj365.com/assets/img/header/promo/eslot.png?ver=1532299168\"><a href=\"/promo\">电子优惠</a></li>\n                <li style=\"transition-delay: 150ms;\"><img src=\"//ktsimg.clsj365.com/assets/img/header/promo/slot.png?ver=1531788880\"><a href=\"https://jgj86255.com\">电子金管家</a></li>\n                <li style=\"transition-delay: 200ms;\"><img src=\"//ktsimg.clsj365.com/assets/img/header/promo/agent.png?ver=1532299168\"><a href=\"/agent/index\">加盟合作</a></li>\n    \n            </ol> -->\n        </li>\n    </ul>\n</nav>\n\n<main>\n    <div id=\"banner\" [ngStyle]=\"{'height':(isHandset$ | async)?'431px':'759px'}\">\n        <div id=\"news\" fxLayout=\"row\" style=\"padding: 0 5%;font-size:10px;line-height: 40px;z-index: 999;\">\n            <div fxFlex=\"10\" style=\"white-space:nowrap;\">最新消息</div>\n            <marquee behavior=\"\" direction=\"\" fxFlex=\"80\"  onmouseover=\"this.stop()\" onmouseout=\"this.start()\">\n                <a routerLink=\"/infos/announcements\" style=\"color:white;\">\n                    <span *ngFor=\"let notice of normalService.notices.slice(0,2)\" style=\"margin-right:250px;\">{{notice.Text}}</span>\n                </a>\n            </marquee>\n            <div fxFlex=\"10\">\n                <button mat-raised-button color=\"warn\" style=\"height:30px;line-height: 30px;\">在线客服</button>\n            </div>\n        </div>\n        <div class=\"swiper-container swiper-container1\">\n            <div class=\"swiper-wrapper\">\n            <div class=\"swiper-slide\" *ngFor=\"let swiper of swipers\">\n                <a [routerLink]=\"swiper.Href\" style=\"display:block;width:100%;background-size: cover;background-position: center;\" [ngStyle]=\"{'background': 'url('+swiper.Image+')','height':(isHandset$ | async)?'431px':'759px'}\">\n                </a>\n            </div>\n            </div>\n        </div>\n    </div>\n</main>\n<div id=\"content\">\n    <div class=\"wrapper\" [ngStyle]=\"{'width':(isHandset$ | async)?'100%':''}\">\n        \n\n        <div id=\"home\">\n            <ul class=\"support\" [hidden]=\"(isHandset$ | async)\">\n                <li class=\"app\"><a routerLink=\"/\">APP下载<span>APP Download</span></a></li>\n                <li class=\"ali\"><a routerLink=\"/\">支付宝支付<span>Pay with Ali-Pay</span></a></li>\n                <li class=\"wechat\"><a routerLink=\"/\">微信支付<span>WeChat payment</span></a></li>\n                <li class=\"qq\"><a routerLink=\"/\">QQ钱包<span>QQ Purse payment</span></a></li>\n                <li class=\"fast\"><a routerLink=\"/\">快速充值中心<span>Fast recharge center</span></a></li>\n            </ul>\n\n            <ul class=\"game-box\" fxLayout=\"row wrap\" [hidden]=\"!(isHandset$ | async)\">\n                <li class=\"slot\" fxFlex=\"100\"><a routerLink=\"/Lobby/Game\">电子游艺<span>SLOTS</span></a></li>\n                <li class=\"live\" fxFlex=\"100\"><a routerLink=\"/Lobby/Live\">真人视讯<span>LIVE CASINO</span></a></li>\n                <li class=\"board\" fxFlex=\"100\"><a routerLink=\"/Lobby/Board\">棋牌大厅<span>CARD GAMES</span></a></li>\n                <li class=\"fish\" fxFlex=\"100\"><a routerLink=\"/\">捕鱼达人<span>FISHING</span></a></li>\n            </ul>\n            <ul id=\"game-box\" class=\"ng-scope\" [hidden]=\"(isHandset$ | async)\">\n                <li class=\"slot img-top\"><a routerLink=\"/Lobby/Game\">电子游艺<span>SLOTS</span></a></li>\n                <li class=\"live\"><a routerLink=\"/Lobby/Live\">真人视讯<span>LIVE CASINO</span></a></li>\n                <li class=\"board img-top\"><a routerLink=\"/Lobby/Board\">棋牌大厅<span>CARD GAMES</span></a></li>\n                <li class=\"fish\"><a routerLink=\"/\">捕鱼达人<span>FISHING</span></a></li>\n            </ul>\n        </div>\n\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _normal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../normal.service */ "./src/app/normal.service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ts_md5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ts-md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ts_md5__WEBPACK_IMPORTED_MODULE_8__);









var LoginComponent = /** @class */ (function () {
    function LoginComponent(_formBuilder, router, breakpointObserver, snackBar, normalService, route) {
        var _this = this;
        this._formBuilder = _formBuilder;
        this.breakpointObserver = breakpointObserver;
        this.snackBar = snackBar;
        this.normalService = normalService;
        this.route = route;
        this.register = false;
        this.isLinear = false;
        this.emailexist = false;
        this.usernameexist = false;
        this.registerUser = {};
        this.loginUser = {};
        this.hide = true;
        this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.captcha = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.stepperIndex = 0;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (result) { return result.matches; }));
        router.url.subscribe(function (url) {
            if (url.length > 0 && url[0].path == "register") {
                _this.register = true;
            }
        });
        router.params.subscribe(function (params) {
            if (params.referId) {
                _this.registerUser.uuid = params.referId;
            }
        });
        this.loginUser.platform = this.normalService.platform;
        this.registerUser.platform = this.normalService.platform;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            emailCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email],
            usernameCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            passwordCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            repasswordCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, this.passwordSame],
            coinPasswordCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            reCoinPasswordCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, this.coinPasswordSame],
            captchaCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.getCaptcha();
    };
    LoginComponent.prototype.getCaptcha = function () {
        var _this = this;
        this.normalService.getCaptcha().subscribe(function (captcha) {
            console.log("captcha", captcha);
            _this.captchaId = captcha.captchaId;
            _this.loginUser.captcha = '';
            document.getElementById('captcha').setAttribute('src', captcha.data);
        });
    };
    LoginComponent.prototype.changeCaptcha = function () {
        this.getCaptcha();
    };
    LoginComponent.prototype.passwordSame = function (control) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var passwordCtrl;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                passwordCtrl = control.parent.controls.passwordCtrl;
                if (control.value != passwordCtrl.value) {
                    return [2 /*return*/, { "message": "not same" }];
                }
                else {
                    return [2 /*return*/, null];
                }
                return [2 /*return*/];
            });
        });
    };
    LoginComponent.prototype.coinPasswordSame = function (control) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var coinPasswordCtrl;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                coinPasswordCtrl = control.parent.controls.coinPasswordCtrl;
                if (control.value != coinPasswordCtrl.value) {
                    return [2 /*return*/, { "message": "not same" }];
                }
                else {
                    return [2 /*return*/, null];
                }
                return [2 /*return*/];
            });
        });
    };
    LoginComponent.prototype.getErrorMessage = function () {
        return this.username.hasError('required') ? '该项不能为空' : '';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var LoginUser = JSON.parse(JSON.stringify(this.loginUser));
        LoginUser.captchaId = this.captchaId;
        LoginUser.password = ts_md5__WEBPACK_IMPORTED_MODULE_8__["Md5"].hashStr(LoginUser.password).toString();
        this.normalService.login(LoginUser).subscribe(function (user) {
            console.log("loginUser", user);
            if (user.code == 200) {
                _this.snackBar.open("登陆成功", "确认", {
                    duration: 3000,
                });
                _this.route.navigate(["/"]);
            }
            else {
                _this.snackBar.open("账号名或密码有误，请重新输入", "确定", {
                    duration: 3000,
                });
            }
        });
    };
    LoginComponent.prototype.userVerify = function (stepper, next) {
        var _this = this;
        if (next === void 0) { next = false; }
        // 验证
        if (this.registerUser.username) {
            this.normalService.ifExist(this.normalService.platform, this.registerUser.username).subscribe(function (res) {
                if (res.data.username) {
                    _this.firstFormGroup.controls.usernameCtrl.setErrors({ exist: true });
                    return;
                }
                else if (next == true) {
                    stepper.next();
                }
            });
        }
        else {
            this.snackBar.open("用户名不能为空", "确定", {
                duration: 3000,
            });
        }
    };
    LoginComponent.prototype.signUp = function (stepper) {
        var _this = this;
        var RegisterUser = JSON.parse(JSON.stringify(this.registerUser));
        RegisterUser.captchaId = this.captchaId;
        RegisterUser.password = ts_md5__WEBPACK_IMPORTED_MODULE_8__["Md5"].hashStr(RegisterUser.password).toString();
        this.normalService.signUp(RegisterUser).subscribe(function (user) {
            console.log("loginUser", user);
            if (user.code == 200) {
                _this.snackBar.open("\u60A8\u7684\u8D26\u53F7\u5DF2\u6CE8\u518C\u6210\u529F,\u5E76\u81EA\u52A8\u767B\u9646\uFF0C\u60A8\u7684\u7528\u6237\u540D\u4E3A\uFF1A" + user.data.Username + "\uFF0C\u8BF7\u4FDD\u7BA1\u597D\u60A8\u7684\u5BC6\u7801", "OK", {
                    duration: 3000,
                });
                stepper.next();
            }
            else {
                _this.snackBar.open(user.message, "确定", {
                    duration: 3000,
                });
            }
        });
    };
    LoginComponent.prototype.finish = function () {
        this.route.navigate(['/']);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.template.html */ "./src/app/login/login.template.html"),
            styles: [__webpack_require__(/*! ./login.style.scss */ "./src/app/login/login.style.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _normal_service__WEBPACK_IMPORTED_MODULE_4__["NormalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.style.scss":
/*!****************************************!*\
  !*** ./src/app/login/login.style.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-back {\n  height: 100%;\n  background: url(\"/assets/images/bg/Las-Vegas-Best-Wallpaper.jpg\");\n  background-size: cover; }\n\n.example-card {\n  max-width: 800px;\n  margin: 0 auto;\n  text-align: center;\n  background-color: rgba(255, 255, 255, 0.8); }\n\n.login-card {\n  padding: 50px 0; }\n\n.example-container {\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  text-align: center; }\n\n.example-container > * {\n  width: 100%; }\n\n.example-right-align {\n  text-align: center; }\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none; }\n\ninput.example-right-align {\n  -moz-appearance: textfield; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3NvZnR3YXJlL2RldmVsb3AvZ2l0c3RvcmUvY3AvY3AtZnJvbnQvc3JjL2FwcC9sb2dpbi9sb2dpbi5zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBVztFQUNYLGlFQUFpRTtFQUNqRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQiwwQ0FBdUMsRUFBQTs7QUFFekM7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCOztFQUVFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLDBCQUEwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uc3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1iYWNrIHtcbiAgaGVpZ2h0OjEwMCU7XG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmcvTGFzLVZlZ2FzLUJlc3QtV2FsbHBhcGVyLmpwZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uZXhhbXBsZS1jYXJkIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xufVxuLmxvZ2luLWNhcmQge1xuICBwYWRkaW5nOiA1MHB4IDA7XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG5pbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbiB7XG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.template.html":
/*!*******************************************!*\
  !*** ./src/app/login/login.template.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-back\">\n    <div style=\"min-height: 150px; text-align: center;\">\n    </div>\n    <mat-card class=\"example-card login-card\" *ngIf=\"!register\">\n        <mat-card-header style=\"justify-content: center;\">\n            <mat-card-title>登陆</mat-card-title>\n            <mat-card-subtitle>登陆您的用户</mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content>\n            <div class=\"example-container\" [ngStyle]=\"{'width': (isHandset$ | async) ?'80%;':'50%;'}\">\n                <mat-form-field>\n                    <mat-label>用户名</mat-label>\n                    <input matInput placeholder=\"请输入邮箱或用户名\" [(ngModel)]=\"loginUser.username\" name=\"username\" [formControl]=\"username\" required>\n                    <mat-error *ngIf=\"username.invalid\">{{getErrorMessage()}}</mat-error>\n                </mat-form-field>\n                <mat-form-field>\n                    <mat-label>密码</mat-label>\n                    <input matInput placeholder=\"请输入您的密码\" [type]=\"hide ? 'password' : 'text'\" [(ngModel)]=\"loginUser.password\" name=\"password\" [formControl]=\"password\" required>\n                    <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                    <mat-error *ngIf=\"password.invalid\">{{getErrorMessage()}}</mat-error>\n                </mat-form-field>\n                <div fxLayout=\"row\" fxLayoutGap=\"32px\">\n                    <div fxFlex=\"50\">\n                        <mat-form-field>\n                            <mat-label>验证码</mat-label>\n                            <input matInput placeholder=\"请输入计算结果\" type=\"text\" [(ngModel)]=\"loginUser.captcha\" name=\"captcha\" [formControl]=\"captcha\" required>\n                            <mat-error *ngIf=\"captcha.invalid\">{{getErrorMessage()}}</mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex=\"50\" style=\"cursor:pointer;color:#ccc;\" (tap)=\"changeCaptcha()\">\n                        <img src=\"\" id=\"captcha\" alt=\"\" style=\"width:80%;\">\n                        <a style=\"font-size:10px;white-space:nowrap;\">看不清？换一张</a>\n                    </div>\n                </div>\n                \n            </div>\n        </mat-card-content>\n        <mat-card-actions>\n            <button mat-fab color=\"accent\" (click)=\"login()\">登陆</button>\n        </mat-card-actions>\n    </mat-card>\n    <mat-card class=\"example-card register-card\" *ngIf=\"register\">\n        <mat-card-header style=\"justify-content: center;\">\n            <mat-card-title>注册</mat-card-title>\n            <mat-card-subtitle>新用户注册</mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content>\n            <mat-horizontal-stepper [linear]=\"isLinear\" #stepper [selectedIndex]=\"stepperIndex\">\n                <mat-step [stepControl]=\"firstFormGroup\">\n                    <form [formGroup]=\"firstFormGroup\">\n                    <ng-template matStepLabel>输入您的用户名</ng-template>\n                    <mat-form-field>\n                        <input matInput placeholder=\"用户名\" formControlName=\"usernameCtrl\" [(ngModel)]=\"registerUser.username\" name=\"username\" required>\n                        <mat-error *ngIf=\"firstFormGroup.controls.usernameCtrl.hasError('required')\">\n                            用户名为<strong>必填项</strong>\n                        </mat-error>\n                        <mat-error *ngIf=\"firstFormGroup.controls.usernameCtrl.hasError('exist')\">\n                            当前用户名<strong>已存在</strong>\n                        </mat-error>\n                    </mat-form-field>\n                    <div>\n                        <button mat-button routerLink=\"/login\">返回登陆</button>\n                        <button mat-button (click)=\"userVerify(stepper, true)\">下一步</button>\n                    </div>\n                    </form>\n                </mat-step>\n                <mat-step [stepControl]=\"secondFormGroup\">\n                    <form [formGroup]=\"secondFormGroup\">\n                    <ng-template matStepLabel>请输入密码</ng-template>\n                    <p>\n                        <mat-form-field>\n                            <input matInput placeholder=\"密码\" formControlName=\"passwordCtrl\" [(ngModel)]=\"registerUser.password\" name=\"password\" [type]=\"hide ? 'password' : 'text'\" required>\n                        </mat-form-field>\n                    </p>\n                    <p>\n                        <mat-form-field>\n                            <input matInput placeholder=\"重复密码\" formControlName=\"repasswordCtrl\" [(ngModel)]=\"registerUser.repassword\" #repassword name=\"repassword\" [type]=\"hide ? 'password' : 'text'\" required>\n                            <mat-error *ngIf=\"secondFormGroup.controls.repasswordCtrl.invalid\">两次密码不一致</mat-error>\n                        </mat-form-field>\n                    </p>\n                    <p>\n                        <mat-form-field>\n                            <input matInput placeholder=\"二级密码\" formControlName=\"coinPasswordCtrl\" [(ngModel)]=\"registerUser.coinPassword\" name=\"coinPassword\" [type]=\"hide ? 'password' : 'text'\" required>\n                        </mat-form-field>\n                    </p>\n                    <p>\n                        <mat-form-field>\n                            <input matInput placeholder=\"重复二级密码\" formControlName=\"reCoinPasswordCtrl\" [(ngModel)]=\"registerUser.reCoinPassword\" name=\"reCoinPassword\" [type]=\"hide ? 'password' : 'text'\" required>\n                            <mat-error *ngIf=\"secondFormGroup.controls.reCoinPasswordCtrl.invalid\">两次二级密码不一致</mat-error>\n                        </mat-form-field>\n                    </p>\n                    <p>\n                        <img src=\"\" id=\"captcha\" alt=\"\" style=\"width:180px;\">\n                    </p>\n                    <p>\n                        <mat-form-field>\n                            <mat-label>验证码</mat-label>\n                            <input matInput placeholder=\"请输入计算结果\" type=\"text\" formControlName=\"captchaCtrl\" [(ngModel)]=\"registerUser.captcha\" name=\"captcha\" required>\n                        </mat-form-field>\n                    </p>\n                    \n                    <div>\n                        <button mat-button (click)=\"stepper.previous()\">上一步</button>\n                        <button mat-button (click)=\"signUp(stepper)\">下一步</button>\n                    </div>\n                    </form>\n                </mat-step>\n                <mat-step>\n                    <ng-template matStepLabel>完成</ng-template>\n                    您已注册成功\n                    <div style=\"margin-top: 20px;\">\n                    <button mat-button (click)=\"stepper.reset()\">重置</button>\n                    <button mat-button (click)=\"finish()\">返回首页</button>\n                    </div>\n                </mat-step>\n            </mat-horizontal-stepper>\n        </mat-card-content>\n        <mat-card-actions>\n            <!-- <button mat-button>LIKE</button> -->\n        </mat-card-actions>\n    </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/messenger/messenger.component.ts":
/*!**************************************************!*\
  !*** ./src/app/messenger/messenger.component.ts ***!
  \**************************************************/
/*! exports provided: Messenger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Messenger", function() { return Messenger; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var Messenger = /** @class */ (function () {
    function Messenger(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    Messenger = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'messenger',
            template: __webpack_require__(/*! ./messenger.template.html */ "./src/app/messenger/messenger.template.html"),
            styles: [__webpack_require__(/*! ./messenger.style.scss */ "./src/app/messenger/messenger.style.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], Messenger);
    return Messenger;
}());



/***/ }),

/***/ "./src/app/messenger/messenger.style.scss":
/*!************************************************!*\
  !*** ./src/app/messenger/messenger.style.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3Nlbmdlci9tZXNzZW5nZXIuc3R5bGUuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/messenger/messenger.template.html":
/*!***************************************************!*\
  !*** ./src/app/messenger/messenger.template.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n  <p>{{data.content}}</p>\n</div>\n<div mat-dialog-actions style=\"justify-content: flex-end;\">\n  <button mat-flat-button cdkFocusInitial [mat-dialog-close]=\"data.title\">Ok</button>\n</div>"

/***/ }),

/***/ "./src/app/normal.service.ts":
/*!***********************************!*\
  !*** ./src/app/normal.service.ts ***!
  \***********************************/
/*! exports provided: NormalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormalService", function() { return NormalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");








var NormalService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NormalService, _super);
    function NormalService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.IsLogin = false;
        _this.OpenDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        _this.selectedChangedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        _this.winnersSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        _this.getLotterSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        _this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        _this.loginOutSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        _this.balanceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        _this.betCanceledSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        _this.chatMessageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        _this.leaveChatSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        _this.socketConnectSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        _this.bonusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        _this.bonusInfoSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        _this.errorMessageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        _this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_6__(_this.wsurl, {
            transports: ['websocket'],
            upgrade: true
        });
        _this.OpenData$ = _this.OpenDataSubject.asObservable();
        _this.selectedChanged$ = _this.selectedChangedSubject.asObservable();
        _this.winners$ = _this.winnersSubject.asObservable();
        _this.getLottor$ = _this.getLotterSubject.asObservable();
        _this.user$ = _this.userSubject.asObservable();
        _this.loginOut$ = _this.loginOutSubject.asObservable();
        _this.balance$ = _this.balanceSubject.asObservable();
        _this.betCanceled$ = _this.betCanceledSubject.asObservable();
        _this.errorMessage$ = _this.errorMessageSubject.asObservable();
        _this.chatMessage$ = _this.chatMessageSubject.asObservable();
        _this.leaveChat$ = _this.leaveChatSubject.asObservable();
        _this.socketConnect$ = _this.socketConnectSubject.asObservable();
        _this.bonus$ = _this.bonusSubject.asObservable();
        _this.initHttpHeader();
        _this.initSocketIo();
        _this.getHeroes();
        return _this;
    }
    NormalService.prototype.initHttpHeader = function () {
        var authorization = "Bearer " + this.storage.getItem(this.storageKey);
        this.httpHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=UTF-8', 'Authorization': authorization });
    };
    NormalService.prototype.authSocket = function () {
        var token = this.storage.getItem(this.storageKey);
        if (token && token != "" && token != "undefined" && token != "null") {
            this.socket.emit('authentication', token);
        }
        else {
            this.loginOutSubject.next(true);
        }
    };
    NormalService.prototype.initSocketIo = function () {
        var _this = this;
        this.socket.on('connect', function () {
            _this.socketConnectSubject.next(true);
            _this.authSocket();
        });
        this.socket.on("disconnect", function () {
            _this.socketConnectSubject.next(false);
        });
        this.socket.on('authentication', function (res) {
            console.log("authentication:", res);
            if (res.code == 200) {
                _this.User = res.data;
                _this.IsLogin = true;
                _this.userSubject.next(_this.User);
                _this.onLoginSocketInit();
            }
            else {
                _this.errorMessageSubject.next({ method: "authentication", message: res.message });
                _this.loginOut();
            }
        });
        this.socket.on('broadcast:opendata', function (opendata) {
            if (opendata.code == 200) {
                _this.openDatas[opendata.data.type] = opendata.data;
                _this.OpenDataSubject.next(opendata.data);
            }
        });
        this.socket.on('opendata', function (opendata) {
            if (opendata.code == 200) {
                _this.openDatas[opendata.data.type] = opendata.data;
            }
        });
        this.socket.on('winners:patched', function (winned) {
            console.log("I have win :", winned);
            _this.User.Coin += winned.Amount;
            _this.getLotterSubject.next({ lottor: winned, coin: _this.User.Coin });
        });
        this.socket.on('winners:created', function (winners) {
            console.log("new winner come out", winners);
            _this.winnersSubject.next(winners);
        });
        this.socket.on('winners:cancelAfterWin', function (canceled) {
            _this.betCanceledSubject.next(canceled);
        });
        this.socket.on("balance", function (balance) {
            _this.User.Coin = balance;
            _this.balanceSubject.next(balance);
        });
        this.socket.on('chat message', function (msg) {
            _this.chatMessageSubject.next(msg);
        });
        this.socket.on('leave chat', function (chanel) {
            _this.leaveChatSubject.next(chanel);
        });
        this.socket.on("broadcast:bonus-1", function (bonus) {
            console.log("bonus updated:", bonus);
            console.log(new Date().toLocaleString());
            _this.BonusObj = bonus;
            if (bonus.State == 1 && _this.bonusOpened == false) {
                _this.bonusOpened = true;
                _this.bonusInfoSubject.next(bonus);
            }
            else if (bonus.State == 0 && _this.bonusOpened == true) {
                _this.bonusOpened = false;
                _this.bonusInfoSubject.next(bonus);
            }
        });
        this.socket.on("bonus:1", function (getBonus) {
            _this.bonusSubject.next(getBonus);
        });
        setInterval(function () {
            for (var key in _this.openDatas) {
                if (_this.openDatas.hasOwnProperty(key)) {
                    var element = _this.openDatas[key];
                    element.timeleft--;
                }
            }
            if (_this.ServerTime.time) {
                _this.ServerTime.time = new Date(_this.ServerTime.time.valueOf() + 1000);
            }
        }, 1000);
    };
    NormalService.prototype.setLoginStatus = function (token) {
        this.storage.setItem(this.storageKey, token);
        this.IsLogin = true;
        this.initHttpHeader();
        this.socket.emit('authentication', token);
    };
    NormalService.prototype.login = function (loginUser) {
        var _this = this;
        return this.http.post(this.url + "index/login", loginUser, {
            headers: this.httpHeader
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            if (res.code == 200) {
                _this.setLoginStatus(res.token);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getAccountList')));
    };
    NormalService.prototype.signUp = function (registerUser) {
        var _this = this;
        return this.http.post(this.url + "index/register", registerUser, {
            headers: this.httpHeader
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            // console.log("signup res:", res);
            _this.setLoginStatus(res.token);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getAccountList')));
    };
    NormalService.prototype.loginOut = function (socketOut) {
        if (socketOut === void 0) { socketOut = false; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log("loginout");
                this.User = {};
                this.IsLogin = false;
                this.storage.removeItem(this.storageKey);
                if (socketOut == true) {
                    this.socket.emit('logout', "");
                }
                this.loginOutSubject.next(true);
                return [2 /*return*/, true];
            });
        });
    };
    NormalService.prototype.onLoginSocketInit = function () {
        var _this = this;
        this.socket.on('doubleLogin:logout', function (res) {
            _this.loginOut(true);
        });
        this.socket.on('doubleLogin:login', function (res) {
            console.log("您的账号正在其他地点登陆，请确保您的账号安全无虞");
        });
    };
    NormalService.prototype.ifExist = function (platform, username) {
        return this.http.get(this.url + ("index/ifExist?platform=" + platform + "&username=" + username))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('ifExist', [])));
    };
    // 获得验证码
    NormalService.prototype.getCaptcha = function () {
        return this.http.get(this.url + "captcha/generate")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getCaptcha', [])));
    };
    NormalService.prototype.sendMsg = function (msg) {
        this.socket.emit("chat message", JSON.stringify(msg));
    };
    // 读取用户银行账号信息
    NormalService.prototype.getAccountList = function (data) {
        return this.http.post(this.url + "mine/member_account_list", data, {
            headers: this.httpHeader
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getAccountList')));
    };
    // 发起提现操作
    NormalService.prototype.withdraw = function (data) {
        return this.http.post(this.url + "mine/withdraw", data, {
            headers: this.httpHeader
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('withdraw')));
    };
    // 发起充值操作
    NormalService.prototype.deposit = function (data) {
        return this.http.post(this.url + "deposit", data, {
            headers: this.httpHeader
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deposit')));
    };
    // 下注的方法
    NormalService.prototype.doBets = function (data) {
        return this.http.post(this.url + "do_bets", data, {
            headers: this.httpHeader
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('do_bets')));
    };
    // 读取公告列表
    NormalService.prototype.getNotices = function (store, obj) {
        var _this = this;
        if (store === void 0) { store = true; }
        if (obj === void 0) { obj = {}; }
        console.log("obj", obj);
        var url = this.url + "infos/0";
        url += "?page_index=" + (obj.page_index ? obj.page_index : 1) + "&page_limit=" + (obj.page_limit ? obj.page_limit : 10);
        return this.http.get(url, {
            headers: this.httpHeader
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            if (store == false)
                return;
            _this.notices = res.data.Records;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getNotices', [])));
    };
    // 读取个人消息列表
    NormalService.prototype.getMessages = function (obj) {
        if (obj === void 0) { obj = {}; }
        var url = this.url + "infos";
        url += "?page_index=" + (obj.page_index ? obj.page_index : 1) + "&page_limit=" + (obj.page_limit ? obj.page_limit : 10);
        return this.http.patch(url, {}, {
            headers: this.httpHeader
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getMessages', [])));
    };
    // 读取存款账号
    NormalService.prototype.getChargeAccounts = function () {
        return this.http.post(this.url + "infos", {}, {
            headers: this.httpHeader
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getChargeAccounts', [])));
    };
    // 读取存款订单
    NormalService.prototype.getDepositList = function () {
        return this.http.get(this.url + "deposit", {
            headers: this.httpHeader
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getDepositList', [])));
    };
    // 修改或删除用户提款账户
    NormalService.prototype.updateMemberAccount = function (data) {
        return this.http.post(this.url + "mine/member_account_update", data, {
            headers: this.httpHeader
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateMemberAccount', [])));
    };
    // 读取取款订单
    NormalService.prototype.getWithdrawList = function () {
        return this.http.get(this.url + "mine/withdraw", {
            headers: this.httpHeader
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getWithdrawList', [])));
    };
    // 读取奖池信息的方法
    NormalService.prototype.getBonusInfo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.socket.on("bonusInfo", function (bonus) {
                            _this.BonusObj = bonus;
                            resolve(bonus);
                        });
                        _this.socket.emit("bonusInfo", "");
                    })];
            });
        });
    };
    // 抢红包的方法
    NormalService.prototype.getBonus = function () {
        this.socket.emit("bonus:1", "");
    };
    // 读取轮播图
    NormalService.prototype.getSwiper = function (loc) {
        if (loc === void 0) { loc = 0; }
        var url = this.url + "infos/2";
        url += "?loc=" + loc;
        return this.http.get(url, {
            headers: this.httpHeader
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getSwiper', [])));
    };
    // 读取获奖者列表
    NormalService.prototype.getWinners = function () {
        return this.http.get(this.url + "infos/3", {
            headers: this.httpHeader
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getWinners', [])));
    };
    // 更新密码
    NormalService.prototype.updatePassword = function (data) {
        return this.http.post(this.url + "mine/password", data, {
            headers: this.httpHeader
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updatePassword', [])));
    };
    // 更新资金密码
    NormalService.prototype.updatePayPassword = function (data) {
        return this.http.post(this.url + "mine/paypassword", data, {
            headers: this.httpHeader
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updatePayPassword', [])));
    };
    // 读取彩票列表
    NormalService.prototype.getLotteries = function (gameId) {
        if (gameId === void 0) { gameId = 0; }
        var url = this.url + "infos/5";
        if (gameId != 0) {
            url += "?gameid=" + gameId;
        }
        return this.http.get(url, {
            headers: this.httpHeader
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getLotteries', [])));
    };
    NormalService.prototype.getAllLotteries = function () {
        var url = this.url + "infos/5";
        return this.http.get(url, {
            headers: this.httpHeader
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getAllLotteries', [])));
    };
    // 读取玩法分组数据
    NormalService.prototype.getPlayeds = function (gameId) {
        var playeds;
        this.lotteryPlays.forEach(function (element) {
            if (element.lotteries.indexOf(Number(gameId)) > -1) {
                playeds = element.playeds;
            }
        });
        return playeds;
    };
    // 读取玩法信息数据
    NormalService.prototype.getSubInfo = function (gid, sid) {
        var _this = this;
        if (gid === void 0) { gid = ""; }
        if (sid === void 0) { sid = ""; }
        if (this.SubInfos[gid + "-" + sid]) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
                observer.next(_this.SubInfos[gid + "-" + sid]);
            });
        }
        return this.http.get(this.url + ("infos/6?group_id=" + gid + "&sub_id=" + sid), {
            headers: this.httpHeader
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            _this.SubInfos[gid + "-" + sid] = res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getSubInfo', [])));
    };
    // 读取投注历史订单 1:追号，2:中奖，3:未开奖，4:撤单
    NormalService.prototype.getHistoryBetsNotOpened = function (data) {
        data.orderType = 3;
        return this.http.put(this.url + "mine", data, {
            headers: this.httpHeader
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('do_bets')));
    };
    // 读取投注历史订单
    NormalService.prototype.getHistoryBets = function (data) {
        return this.http.put(this.url + "mine", data, {
            headers: this.httpHeader
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('do_bets')));
    };
    // 统计推荐用户业绩
    NormalService.prototype.ChildBetsSum = function (seq) {
        return this.http.get(this.url + "mine/child_bets_sum?period=" + seq, {
            headers: this.httpHeader
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('child_bets_sum')));
    };
    // 历史每周业绩列表
    NormalService.prototype.WeekSumList = function (obj) {
        var url = this.url + "mine/week_sum_list";
        url += "?page_index=" + (obj.page_index ? obj.page_index : 0) + "&page_limit=" + (obj.page_limit ? obj.page_limit : 10);
        return this.http.get(url, {
            headers: this.httpHeader
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getLotteries', [])));
    };
    // 读取账户变动记录
    NormalService.prototype.getCoinLogs = function (data) {
        return this.http.post(this.url + "mine/account_detail", data, {
            headers: this.httpHeader
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getCoinLogs')));
    };
    // 初始化选项设置
    NormalService.prototype.initPlayOptions = function (subId) {
        if (this.subPlayOptions[subId].like) {
            this.subPlayOptions[subId].optionsArr = this.subPlayOptions[this.subPlayOptions[subId].like].optionsArr;
        }
        this.subPlayOptions[subId].optionsArr.forEach(function (element) {
            element.nums.forEach(function (el) {
                if (!el.value) {
                    el.value = el.name;
                }
                el.checked = false;
                if (!el.bonusIndex)
                    el.bonusIndex = 0;
            });
        });
        this.selectedChangedSubject.next({ subId: subId, position: [] });
    };
    // 选中号码改变触发事件
    NormalService.prototype.checkedButtonChanged = function (subId, position) {
        this.selectedChangedSubject.next({ subId: subId, position: position });
    };
    // 读取服务器时间
    NormalService.prototype.getServerTime = function () {
        var _this = this;
        return this.http.get(this.url + "index/syncTime")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            _this.ServerTime = res;
            _this.ServerTime.time = new Date(res.timestring);
        }));
    };
    NormalService.prototype.getHeroes = function () {
        return this.http.get(this.url + "test", {
            headers: this.httpHeader
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getHeroes', [])));
    };
    // 设置选项赔率
    NormalService.prototype.setBonusProp = function (subs) {
        var _this = this;
        console.log("setBonusProp", subs, this.temp_bet_list, this.selectedSubId);
        var _loop_1 = function (index) {
            var element = subs[index];
            var bonus = subs[index].BonusProp.split("|");
            var bonusBase = subs[index].BonusPropBase.split("|");
            // console.log("bonus", bonus);
            this_1.subPlayOptions[subs[index].SubId].optionsArr.forEach(function (element, i) {
                _this.subPlayOptions[subs[index].SubId].optionsArr[i].betDbHighPrize = subs[index].BonusProp;
                _this.subPlayOptions[subs[index].SubId].optionsArr[i].betDbLowPrize = subs[index].BonusPropBase;
                if (subs[index].SubId == _this.selectedSubId) {
                    _this.temp_bet_list.betDbHighPrize = subs[index].BonusProp;
                    _this.temp_bet_list.betDbLowPrize = subs[index].BonusPropBase;
                }
                element.nums.forEach(function (el) {
                    el.bonusIndex = !el.bonusIndex ? 0 : el.bonusIndex;
                    el.bonus = bonus[el.bonusIndex];
                    el.bonusBase = bonusBase[el.bonusIndex];
                });
            });
        };
        var this_1 = this;
        for (var index = 0; index < subs.length; index++) {
            _loop_1(index);
        }
    };
    NormalService.prototype.freshBalance = function () {
        this.socket.emit("balance", "");
    };
    // 获取当前选中的投注号码
    NormalService.prototype.getBetList = function (subId) {
        var betCode = "";
        var optionsArr = this.subPlayOptions[subId].optionsArr;
        for (var i = 0; i < optionsArr.length; i++) {
            var element = optionsArr[i];
            for (var j = 0; j < element.nums.length; j++) {
                var el = element.nums[j];
                if (el.checked) {
                    if (betCode.length > 0 && betCode.charAt(betCode.length - 1) != "|") {
                        betCode += "&";
                    }
                    betCode += el.value;
                }
            }
            if (i < optionsArr.length - 1) {
                betCode += "|";
            }
        }
        console.log("this.subPlayOptions[this.selectedSubId]", this.subPlayOptions[this.selectedSubId]);
        this.temp_bet_list.betDbHighPrize = this.subPlayOptions[this.selectedSubId].optionsArr[0].betDbHighPrize;
        this.temp_bet_list.betDbLowPrize = this.subPlayOptions[this.selectedSubId].optionsArr[0].betDbLowPrize;
        this.temp_bet_list.playId = this.selectedPlayedId;
        this.temp_bet_list.subId = this.selectedSubId;
        this.temp_bet_list.subName = this.selectedSubName;
        this.temp_bet_list.betCode = betCode;
        this.getCount();
        this.temp_bet_list.betCount = this.selectedCountNum;
        return betCode;
    };
    // 获取当前输入的投注号码，计算注数
    NormalService.prototype.getBetListForInput = function (subId) {
        var str = this.handinput.replace(/^\s+|\s+$/g, "");
        this.temp_bet_list.betCode = str;
        this.temp_bet_list.betDbHighPrize = this.subPlayOptions[this.selectedSubId].optionsArr[0].betDbHighPrize;
        this.temp_bet_list.betDbLowPrize = this.subPlayOptions[this.selectedSubId].optionsArr[0].betDbLowPrize;
        this.temp_bet_list.playId = this.selectedPlayedId;
        this.temp_bet_list.subId = this.selectedSubId;
        this.temp_bet_list.subName = this.selectedSubName;
        console.log("this.temp_bet_list", this.temp_bet_list);
        this.getCountForInput(str);
        this.temp_bet_list.betCount = this.selectedCountNum;
        return this.handinput;
    };
    // 为单式输入计算注数
    NormalService.prototype.getCountForInput = function (str) {
        var _this = this;
        var inputArr = str.split(/,| |\n|\t/);
        var currentCount = inputArr.length;
        inputArr.forEach(function (code) {
            var elArr = [];
            var step = 1;
            for (var index = 0; index < code.length; index += step) {
                elArr.push(code.substring(index, index + step));
            }
            var rightLenth;
            if ([108].indexOf(_this.selectedSubId) != -1) {
                rightLenth = 5;
            }
            if ([106, 140].indexOf(_this.selectedSubId) != -1) {
                rightLenth = 4;
            }
            if ([89, 95, 96, 55, 61, 62, 129, 132, 134].indexOf(_this.selectedSubId) != -1) {
                rightLenth = 3;
            }
            if ([39, 47, 123, 126].indexOf(_this.selectedSubId) != -1) {
                rightLenth = 2;
            }
            if (elArr.length !== rightLenth) {
                currentCount--;
                if (currentCount == 0) {
                    _this.selectedCountNum = 0;
                }
                return;
            }
            var hasDouble;
            for (var ii = 0; ii < elArr.length - 1; ii++) {
                for (var iii = ii + 1; iii < elArr.length; iii++) {
                    if (elArr[ii] == elArr[iii]) {
                        hasDouble = true;
                    }
                }
            }
            if ([95, 61, 132].indexOf(_this.selectedSubId) != -1) { // 组三 /必须有对
                if (!hasDouble) {
                    currentCount--;
                    if (currentCount == 0) {
                        _this.selectedCountNum = 0;
                    }
                    return;
                }
                if (elArr[0] == elArr[1] && elArr[1] == elArr[2]) { //豹子号
                    currentCount--;
                    if (currentCount == 0) {
                        _this.selectedCountNum = 0;
                    }
                    return;
                }
            }
            if ([96, 62, 47, 126, 134].indexOf(_this.selectedSubId) != -1) { // 任二组选或组六 /不能有对
                if (hasDouble) {
                    currentCount--;
                    if (currentCount == 0) {
                        _this.selectedCountNum = 0;
                    }
                    return;
                }
            }
        });
        if (this.fangAnNum > 1) {
            currentCount *= this.fangAnNum;
        }
        this.selectedCountNum = currentCount;
    };
    NormalService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            if (error.statusText == "Unauthorized") {
                console.error(error.statusText); // log to console instead
                // this.loginOut();
            }
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    NormalService.prototype.resetBetList = function () {
        this.temp_bet_list = new _config__WEBPACK_IMPORTED_MODULE_7__["Bet_list"]();
    };
    NormalService.prototype.getOpenData = function (gameId) {
        this.socket.emit('opendata', gameId);
    };
    NormalService.prototype.getOpenHistories = function (gameId, count, pageIndex) {
        var data = {
            gid: Number(gameId),
            count: Number(count),
            pageIndex: Number(pageIndex)
        };
        return this.http.post(this.url + "histories", data, {
            headers: this.httpHeader
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getOpenHistories')));
    };
    NormalService.prototype.createDepositThird = function (payModel) {
        return this.http.put(this.url + "deposit", payModel, {
            headers: this.httpHeader
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('createDepositThird')));
    };
    NormalService.prototype.getCount = function () {
        var currentCount = 0;
        switch (true) {
            case ",107,105,88,54,38,".indexOf("," + this.selectedSubId + ",") != -1:
                currentCount = this.getNumCount();
                break;
            case ",122,".indexOf("," + this.selectedSubId + ",") != -1:
                currentCount = this.getCount122();
                break;
            case ",128,".indexOf("," + this.selectedSubId + ",") != -1:
                currentCount = this.getCountCombArr128();
                break;
            case ",139,".indexOf("," + this.selectedSubId + ",") != -1:
                currentCount = this.getCountCombArr139();
                break;
            case ",223,".indexOf("," + this.selectedSubId + ",") != -1:
                currentCount = this.getCount223();
                break;
            case ",224,".indexOf("," + this.selectedSubId + ",") != -1:
                currentCount = this.getCount224();
                break;
            case ",225,".indexOf("," + this.selectedSubId + ",") != -1:
                currentCount = this.getCount225();
                break;
            case ",110,112,109,111,".indexOf("," + this.selectedSubId + ",") != -1:
                currentCount = this.getDxdsCount();
                break;
            case ",90,56,".indexOf("," + this.selectedSubId + ",") != -1: //后三直选和值 11,前三 直选和值9
                currentCount = this.getCount90_56("Sum_90_56");
                break;
            case ",91,57,".indexOf("," + this.selectedSubId + ",") != -1: //后三直选跨度 11,前三直选跨度9
                currentCount = this.getCount90_56("Skip91_57");
                break;
            case ",97,63,".indexOf("," + this.selectedSubId + ",") != -1: //后三、前三组选和值11、9
                currentCount = this.getCount90_56("Sum_97_63");
                break;
            case ",40,".indexOf("," + this.selectedSubId + ",") != -1: //前二直选和值
                currentCount = this.getCount90_56("Sum_40");
                break;
            case ",41,".indexOf("," + this.selectedSubId + ",") != -1: //前二直选和值
                currentCount = this.getCount90_56("Skip41");
                break;
            case ",48,".indexOf("," + this.selectedSubId + ",") != -1: //前二组选和值
                currentCount = this.getCount90_56("Sum48");
                break;
            case ",124,".indexOf("," + this.selectedSubId + ",") != -1: //任二组选和值
                currentCount = this.getCount90_56("Sum124");
                break;
            case ",127,".indexOf("," + this.selectedSubId + ",") != -1: //任二组选和值
                currentCount = this.getCount90_56("Sum127");
                break;
            case ",130,".indexOf("," + this.selectedSubId + ",") != -1: //任二组选和值
                currentCount = this.getCount90_56("Sum130");
                break;
            case ",137,".indexOf("," + this.selectedSubId + ",") != -1: //任二组选和值
                currentCount = this.getCount90_56("Sum137");
                break;
            case ",49,".indexOf("," + this.selectedSubId + ",") != -1: //前二组选包胆
                currentCount = 9 * this.getCountSingle();
                break;
            case ",92,58,".indexOf("," + this.selectedSubId + ",") != -1: //后三组合11,前三组合9 1|1|1->1|1|1+x|1|1+x|x|1
                currentCount = this.getCount92();
                break;
            case ",93,59,".indexOf("," + this.selectedSubId + ",") != -1: //后三、前三组三复式11、9
                currentCount = this.getCount93();
                break;
            case ",99,65,".indexOf("," + this.selectedSubId + ",") != -1: //后三、前三组选包胆11、9   只能选一个号码
                currentCount = this.getCount99();
                break;
            case ",94,60,121,".indexOf("," + this.selectedSubId + ",") != -1:
                currentCount = this.Combination(0, 3);
                break;
            case ",123,".indexOf("," + this.selectedSubId + ",") != -1:
                currentCount = this.Combination(0, 2);
                break;
            case ",46,114,116,118,245,120,".indexOf("," + this.selectedSubId + ",") != -1:
                currentCount = this.Combination(0, 2) > 1 ? this.Combination(0, 2) + 1 : this.Combination(0, 2);
                break;
            case ",125,".indexOf("," + this.selectedSubId + ",") != -1:
                currentCount = this.Combination(0, 2);
                break;
            case ",131,".indexOf("," + this.selectedSubId + ",") != -1:
                currentCount = this.getCount131();
                break;
            case ",133,".indexOf("," + this.selectedSubId + ",") != -1:
                currentCount = this.Combination(0, 3);
                break;
            case ",141,".indexOf("," + this.selectedSubId + ",") != -1:
                currentCount = this.Combination(0, 4);
                break;
            case ",142,144,".indexOf("," + this.selectedSubId + ",") != -1:
                currentCount = this.getCount142_144();
                console.log("currentCount 142_144", currentCount);
                break;
            case ",143,".indexOf("," + this.selectedSubId + ",") != -1:
                currentCount = this.getCount143();
                break;
            default:
                currentCount = this.getCountSingle();
                break;
        }
        if (this.fangAnNum > 1) {
            currentCount *= this.fangAnNum;
        }
        this.selectedCountNum = currentCount;
        console.log("this.selectedCountNum", this.selectedCountNum);
    };
    NormalService.prototype.getCountSingle = function () {
        var count = 0;
        var optionsArr = this.subPlayOptions[this.selectedSubId].optionsArr;
        for (var i = 0; i < optionsArr.length; i++) {
            var element = optionsArr[i];
            for (var j = 0; j < element.nums.length; j++) {
                var el = element.nums[j];
                if (el.checked) {
                    count++;
                }
            }
        }
        console.log("getCountSingle", count);
        return count;
    };
    NormalService.prototype.getCount122 = function () {
        var countArr = Array.from({ length: 5 }, function (item) { return 0; });
        var count = 0;
        var optionsArr = this.subPlayOptions[this.selectedSubId].optionsArr;
        for (var i = 0; i < optionsArr.length; i++) {
            var element = optionsArr[i];
            for (var j = 0; j < element.nums.length; j++) {
                var el = element.nums[j];
                if (el.checked) {
                    countArr[i] = !countArr[i] ? 0 : countArr[i];
                    countArr[i]++;
                }
            }
        }
        for (var v = 0; v < countArr.length - 1; v++) {
            var element = countArr[v];
            for (var jj = 0; jj < countArr[v]; jj++) {
                for (var ii = v + 1; ii < countArr.length; ii++) {
                    var elem = countArr[ii];
                    count += elem;
                }
            }
        }
        return count;
    };
    NormalService.prototype.getCountCombArr128 = function () {
        var countArr = Array.from({ length: 5 }, function (item) { return 0; });
        var count = 0;
        var optionsArr = this.subPlayOptions[this.selectedSubId].optionsArr;
        for (var i = 0; i < optionsArr.length; i++) {
            var element = optionsArr[i];
            for (var j = 0; j < element.nums.length; j++) {
                var el = element.nums[j];
                if (el.checked) {
                    countArr[i] = !countArr[i] ? 0 : countArr[i];
                    countArr[i]++;
                }
            }
        }
        for (var v = 0; v < countArr.length - 2; v++) {
            for (var ii = 0; ii < countArr[v]; ii++) {
                for (var j = v + 1; j < countArr.length - 1; j++) {
                    for (var jj = 0; jj < countArr[j]; jj++) {
                        for (var k = j + 1; k < countArr.length; k++) {
                            count += countArr[k];
                        }
                    }
                }
            }
        }
        return count;
    };
    NormalService.prototype.getCountCombArr139 = function () {
        var countArr = Array.from({ length: 5 }, function (item) { return 0; });
        var count = 0;
        var optionsArr = this.subPlayOptions[this.selectedSubId].optionsArr;
        for (var i = 0; i < optionsArr.length; i++) {
            var element = optionsArr[i];
            for (var j = 0; j < element.nums.length; j++) {
                var el = element.nums[j];
                if (el.checked) {
                    countArr[i] = !countArr[i] ? 0 : countArr[i];
                    countArr[i]++;
                }
            }
        }
        for (var i = 0; i < countArr.length; i++) {
            for (var ii = 0; ii < countArr[i]; ii++) {
                for (var j = i + 1; j < countArr.length; j++) {
                    for (var jj = 0; jj < countArr[j]; jj++) {
                        for (var k = j + 1; k < countArr.length; k++) {
                            for (var kk = 0; kk < countArr[k]; kk++) {
                                for (var m = k + 1; m < countArr.length; m++) {
                                    count += countArr[m];
                                }
                            }
                        }
                    }
                }
            }
        }
        return count;
    };
    NormalService.prototype.getCount223 = function () {
        var count = 0;
        var minusNum = 0;
        var optionsArr = this.subPlayOptions[this.selectedSubId].optionsArr;
        for (var i = 0; i < optionsArr.length; i++) {
            var element = optionsArr[i];
            for (var ii = 0; ii < element.nums.length; ii++) {
                var el = element.nums[ii];
                if (!el.checked) {
                    continue;
                }
                for (var j = i + 1; j < optionsArr.length; j++) {
                    var elem = optionsArr[j];
                    for (var jj = 0; jj < elem.nums.length; jj++) {
                        if (!elem.nums[jj].checked) {
                            continue;
                        }
                        count++;
                        if (elem.nums[jj].value == el.value) {
                            minusNum++;
                        }
                    }
                }
            }
        }
        count -= minusNum;
        return count;
    };
    NormalService.prototype.getCount224 = function () {
        var count = 0;
        var minusNum = 0;
        var optionsArr = this.subPlayOptions[this.selectedSubId].optionsArr;
        for (var i = 0; i < optionsArr.length; i++) {
            var element = optionsArr[i];
            for (var ii = 0; ii < element.nums.length; ii++) {
                var el = element.nums[ii];
                if (el.checked) {
                }
                else {
                    continue;
                }
                for (var j = i + 1; j < optionsArr.length; j++) {
                    var elem = optionsArr[j];
                    for (var jj = 0; jj < elem.nums.length; jj++) {
                        if (!elem.nums[jj].checked) {
                            continue;
                        }
                        for (var k = j + 1; k < optionsArr.length; k++) {
                            var elem1 = optionsArr[k];
                            for (var kk = 0; kk < elem.nums.length; kk++) {
                                if (!elem1.nums[kk].checked) {
                                    continue;
                                }
                                count++;
                                if (!elem1.nums[kk].checked) {
                                    continue;
                                }
                                if (elem1.nums[kk].value == el.value || elem1.nums[kk].value == elem.nums[jj].value || elem.nums[jj].value == el.value) {
                                    minusNum++;
                                }
                            }
                        }
                    }
                }
            }
        }
        count -= minusNum;
        return count;
    };
    NormalService.prototype.getCount225 = function () {
        var count = 1;
        var minusNum = 0;
        var optionsArr = this.subPlayOptions[this.selectedSubId].optionsArr;
        var countArr = Array.from({ length: optionsArr.length }, function (item) { return 0; });
        for (var i = 0; i < optionsArr.length; i++) {
            var element = optionsArr[i];
            for (var j = 0; j < element.nums.length; j++) {
                var el = element.nums[j];
                if (el.checked)
                    countArr[i]++;
            }
        }
        for (var i = 0; i < optionsArr[0].nums.length; i++) {
            if (!optionsArr[0].nums[i].checked) {
                continue;
            }
            for (var j = 0; j < optionsArr[1].nums.length; j++) {
                if (!optionsArr[1].nums[j].checked) {
                    continue;
                }
                for (var k = 0; k < optionsArr[2].nums.length; k++) {
                    if (!optionsArr[2].nums[k].checked) {
                        continue;
                    }
                    if (optionsArr[0].nums[i].value == optionsArr[1].nums[j].value || optionsArr[0].nums[i].value == optionsArr[2].nums[k].value || optionsArr[1].nums[j].value == optionsArr[2].nums[k].value) {
                        minusNum++;
                    }
                }
            }
        }
        for (var index = 0; index < countArr.length; index++) {
            count *= countArr[index];
        }
        count -= minusNum;
        return count;
    };
    NormalService.prototype.getDxdsCount = function () {
        var count = 1;
        var optionsArr = this.subPlayOptions[this.selectedSubId].optionsArr;
        var countArr = Array.from({ length: optionsArr.length }, function (item) { return 0; });
        for (var i = 0; i < optionsArr.length; i++) {
            var element = optionsArr[i];
            for (var j = 0; j < element.nums.length; j++) {
                var el = element.nums[j];
                if (el.checked) {
                    countArr[i] = !countArr[i] ? 0 : countArr[i];
                    countArr[i]++;
                }
            }
        }
        for (var v = 0; v < countArr.length; v++) {
            count *= countArr[v];
        }
        return count;
    };
    NormalService.prototype.getNumCount = function () {
        var count = 1;
        var optionsArr = this.subPlayOptions[this.selectedSubId].optionsArr;
        var countArr = Array.from({ length: optionsArr.length }, function (item) { return 0; });
        for (var i = 0; i < optionsArr.length; i++) {
            var element = optionsArr[i];
            for (var j = 0; j < element.nums.length; j++) {
                var el = element.nums[j];
                if (el.checked) {
                    countArr[i] = !countArr[i] ? 0 : countArr[i];
                    countArr[i]++;
                }
            }
        }
        for (var v = 0; v < countArr.length; v++) {
            count *= countArr[v];
        }
        return count;
    };
    // 交集
    NormalService.prototype.arrIntersect = function (a, b) {
        var count = 0;
        for (var i = 0; i < b.length; i++) {
            var temp = b[i];
            for (var j = 0; j < a.length; j++) {
                if (temp == a[j]) {
                    count += 1;
                    break;
                }
            }
        }
        return count;
    };
    NormalService.prototype.Combination = function (c, b) {
        if (c == 0) {
            var optionsArr = this.subPlayOptions[this.selectedSubId].optionsArr;
            var countArr = Array.from({ length: optionsArr.length }, function (item) { return 0; });
            for (var i = 0; i < optionsArr.length; i++) {
                var element = optionsArr[i];
                for (var j = 0; j < element.nums.length; j++) {
                    var el = element.nums[j];
                    if (el.checked) {
                        c++;
                    }
                }
            }
        }
        if (b == 0 || c == 0) {
            return 0;
        }
        if (b > c) {
            return 0;
        }
        if (b > c / 2) {
            b = c - b;
        }
        var a = 0;
        for (var i = c; i >= (c - b + 1); i--) {
            a += Math.log(i);
        }
        for (var i = b; i >= 1; i--) {
            a -= Math.log(i);
        }
        a = Math.exp(a);
        var ii = Math.floor(a);
        return ii;
    };
    NormalService.prototype.CombinationInstrument = function (c, b) {
        if (b == 0 || c == 0) {
            return 0;
        }
        if (b > c) {
            return 0;
        }
        if (b > c / 2) {
            b = c - b;
        }
        var a = 0;
        for (var i = c; i >= (c - b + 1); i--) {
            a += Math.log(i);
        }
        for (var i = b; i >= 1; i--) {
            a -= Math.log(i);
        }
        a = Math.exp(a);
        var ii = Math.round(a);
        return ii;
    };
    NormalService.prototype.getCount92 = function () {
        var count = 1;
        var optionsArr = this.subPlayOptions[this.selectedSubId].optionsArr;
        var countArr = Array.from({ length: optionsArr.length }, function (item) { return 0; });
        for (var i = 0; i < optionsArr.length; i++) {
            var element = optionsArr[i];
            for (var j = 0; j < element.nums.length; j++) {
                var el = element.nums[j];
                if (el.checked) {
                    countArr[i] = !countArr[i] ? 0 : countArr[i];
                    countArr[i]++;
                }
            }
        }
        for (var v = 0; v < countArr.length; v++) {
            count *= countArr[v];
        }
        count += (countArr[1] * countArr[2]);
        count += countArr[2];
        return count;
    };
    NormalService.prototype.getCount93 = function () {
        var c = 0;
        var optionsArr = this.subPlayOptions[this.selectedSubId].optionsArr;
        var countArr = Array.from({ length: optionsArr.length }, function (item) { return 0; });
        for (var i = 0; i < optionsArr.length; i++) {
            var element = optionsArr[i];
            for (var j = 0; j < element.nums.length; j++) {
                var el = element.nums[j];
                if (el.checked) {
                    c++;
                }
            }
        }
        return c * (c - 1);
    };
    NormalService.prototype.getCount90_56 = function (name) {
        var count = 0;
        var optionsArr = this.subPlayOptions[this.selectedSubId].optionsArr;
        var countArr = [];
        for (var i = 0; i < optionsArr.length; i++) {
            var element = optionsArr[i];
            for (var j = 0; j < element.nums.length; j++) {
                var el = element.nums[j];
                if (el.checked) {
                    countArr.push(el.name);
                }
            }
        }
        for (var i = 0; i < countArr.length; i++) {
            count += this.CountOptionSelectedNum[name][countArr[i]];
        }
        return count;
    };
    NormalService.prototype.getCount99 = function () {
        var c = 0;
        var optionsArr = this.subPlayOptions[this.selectedSubId].optionsArr;
        var countArr = Array.from({ length: optionsArr.length }, function (item) { return 0; });
        for (var i = 0; i < optionsArr.length; i++) {
            var element = optionsArr[i];
            for (var j = 0; j < element.nums.length; j++) {
                var el = element.nums[j];
                if (el.checked) {
                    c++;
                }
            }
        }
        return c * 54;
    };
    NormalService.prototype.getCount143 = function () {
        var tempCount = 0;
        var optionsArr = this.subPlayOptions[this.selectedSubId].optionsArr;
        var countArr = [];
        for (var i = 0; i < optionsArr.length; i++) {
            var element = optionsArr[i];
            for (var j = 0; j < element.nums.length; j++) {
                var el = element.nums[j];
                if (el.checked) {
                    countArr.push(el.name);
                }
            }
        }
        tempCount = this.CombinationInstrument(countArr.length, 2);
        return tempCount;
    };
    NormalService.prototype.getCount142_144 = function () {
        var tempCount = 0;
        var optionsArr = this.subPlayOptions[this.selectedSubId].optionsArr;
        var countArr = [];
        for (var i = 0; i < optionsArr.length; i++) {
            var element = optionsArr[i];
            for (var j = 0; j < element.nums.length; j++) {
                var el = element.nums[j];
                if (el.checked) {
                    if (!countArr[i])
                        countArr[i] = [];
                    countArr[i].push(el.name);
                }
            }
        }
        var need = 2;
        if (this.selectedSubId == 144) {
            need = 1;
        }
        if (!countArr[0] || !countArr[1]) {
            return 0;
        }
        var h = this.arrIntersect(countArr[0], countArr[1]);
        var tmpNums = this.CombinationInstrument(countArr[0].length, 1) * this.CombinationInstrument(countArr[1].length, need);
        console.log("tmpNums", tmpNums);
        if (h > 0) { //交集个数
            if (this.selectedSubId == 142) {
                tmpNums -= this.CombinationInstrument(h, 1) * this.CombinationInstrument(countArr[1].length - 1, 1);
            }
            else if (this.selectedSubId == 144) { //C(m,1)*C(n,1)-C(h,1)
                tmpNums -= this.CombinationInstrument(h, 1);
            }
        }
        tempCount += tmpNums;
        //fmt.Println(tempCount, "	", tempStrCountLeft, "	", tempStrCountRight)
        return tempCount;
    };
    NormalService.prototype.getCount131 = function () {
        var tempCount = 0;
        var optionsArr = this.subPlayOptions[this.selectedSubId].optionsArr;
        var countArr = [];
        for (var i = 0; i < optionsArr.length; i++) {
            var element = optionsArr[i];
            for (var j = 0; j < element.nums.length; j++) {
                var el = element.nums[j];
                if (el.checked) {
                    countArr.push(el.name);
                }
            }
        }
        tempCount = this.CombinationInstrument(countArr.length, 2) * 2;
        return tempCount;
    };
    NormalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], NormalService);
    return NormalService;
}(_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]));



/***/ }),

/***/ "./src/app/pageNotFound/pageNotFound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pageNotFound/pageNotFound.component.ts ***!
  \********************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent(router, route, _location) {
        this.router = router;
        this.route = route;
        this._location = _location;
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
        console.log("this.router", this._location);
    };
    PageNotFoundComponent.prototype.back = function () {
        this._location.back();
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "page-not-found",
            template: __webpack_require__(/*! ./pageNotFound.template.html */ "./src/app/pageNotFound/pageNotFound.template.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pageNotFound/pageNotFound.template.html":
/*!*********************************************************!*\
  !*** ./src/app/pageNotFound/pageNotFound.template.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"position:fixed; top:0; bottom:0; left:0; right:0;background-color:#333;\">\n    <div style=\"margin-top:8%;text-align: center; color: #ccc;\">\n        <h1 style=\"line-height:50px;vertical-align:center;margin-bottom: 50px;\">\n            <img src=\"/assets/img/icons/logo.png\" alt=\"九鼎国际\" srcset=\"\" style=\"transform: translateY(30px)\">\n            <span>    九鼎国际娱乐城</span>\n        </h1>\n        <h1 style=\"color:red;font-weight: normal;\">暂无服务。。。</h1>\n        <p>由于您的所在地不在我们的服务允许范围内，我们暂时无法为你提供服务。</p>\n        <p>如果您有任务问题，请与我们的客服联系。</p>\n        <p style=\"margin-top: 20px;\">\n            <button mat-flat-button color=\"primary\" (tap)=\"back()\">返回上一页面</button>\n        </p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/permission/auth.guard.ts":
/*!******************************************!*\
  !*** ./src/app/permission/auth.guard.ts ***!
  \******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _normal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../normal.service */ "./src/app/normal.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(normalService, router) {
        this.normalService = normalService;
        this.router = router;
        this.user = null;
        this.isLogin = false;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var key = this.normalService.storage.getItem(this.normalService.storageKey);
        if (key && key != "" && key != "undefined") {
            return true;
        }
        var url = state.url;
        // Store the attempted URL for redirecting
        this.normalService.redirectUrl = url;
        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_normal_service__WEBPACK_IMPORTED_MODULE_3__["NormalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.component.ts":
/*!****************************************!*\
  !*** ./src/app/tabs/tabs.component.ts ***!
  \****************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
        this.navLinks = [
            { label: "首页", path: "/lotteryCenter", icon: "home" },
            { label: "开奖信息", path: "/lotteryCenter/openinfo", icon: "list" },
            // {label:"开奖历史",path: "/lotteryCenter/historys", icon:"history"},
            { label: "用户中心", path: "/user/lobby", icon: "perm_identity" },
        ];
    }
    TabsComponent.prototype.ngOnInit = function () {
    };
    TabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "tabs",
            template: __webpack_require__(/*! ./tabs.template.html */ "./src/app/tabs/tabs.template.html"),
            styles: [__webpack_require__(/*! ./tabs.style.scss */ "./src/app/tabs/tabs.style.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.style.scss":
/*!**************************************!*\
  !*** ./src/app/tabs/tabs.style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-tab-icon {\n  margin-right: 8px; }\n\n#handyTabs {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #ff3f00;\n  color: white;\n  z-index: 1000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3NvZnR3YXJlL2RldmVsb3AvZ2l0c3RvcmUvY3AvY3AtZnJvbnQvc3JjL2FwcC90YWJzL3RhYnMuc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNJLGVBQWU7RUFDZixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtdGFiLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuI2hhbmR5VGFicyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjNmMDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHotaW5kZXg6IDEwMDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/tabs/tabs.template.html":
/*!*****************************************!*\
  !*** ./src/app/tabs/tabs.template.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav mat-tab-nav-bar mat-align-tabs=\"center\" id=\"handyTabs\" style=\"border-top:1px solid #ccc;\">\n  <a mat-tab-link\n     *ngFor=\"let link of navLinks\"\n     [routerLink]=\"link.path\"\n     routerLinkActive #rla=\"routerLinkActive\"\n     [active]=\"rla.isActive\"\n     style=\"color:white;\">\n     <mat-icon class=\"example-tab-icon\">{{link.icon}}</mat-icon>\n    {{link.label}}\n  </a>\n</nav>"

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/software/develop/gitstore/cp/cp-front/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
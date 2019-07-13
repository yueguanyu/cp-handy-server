(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["caipiaobusiness-caipiaobusiness-module"],{

/***/ "./src/app/+caipiaobusiness/addToCart/addToCart.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/+caipiaobusiness/addToCart/addToCart.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddToCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddToCartComponent", function() { return AddToCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_normal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/normal.service */ "./src/app/normal.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _confirmModal_confirmModal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../confirmModal/confirmModal.component */ "./src/app/+caipiaobusiness/confirmModal/confirmModal.component.ts");
/* harmony import */ var _timeoutModal_timeoutModal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../timeoutModal/timeoutModal.component */ "./src/app/+caipiaobusiness/timeoutModal/timeoutModal.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");









var ELEMENT_DATA = [];
var AddToCartComponent = /** @class */ (function () {
    function AddToCartComponent(normalService, snackBar, dialog, breakpointObserver) {
        this.normalService = normalService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.breakpointObserver = breakpointObserver;
        this.singelAmount = 2;
        this.priceUnit = 1;
        this.percent = 0;
        this.appended = false;
        this.totalCount = 0;
        this.moreNum = "5";
        this.moreActualNum = 5;
        this.betWinStop = true;
        this.betStartTime = 1;
        this.perPeriodNum = 1;
        this.betHigher = false;
        this.betHigherTime = 1;
        this.maxAppendValue = 50;
        this.displayedColumns = ['select', 'period', 'multiple', 'amount', 'openTime'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](ELEMENT_DATA);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true, []);
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (result) { return result.matches; }));
    }
    AddToCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.normalService.selectedChanged$.subscribe(function (sub) {
            // 计算选中注数
            _this.normalService.selectedSubId = sub.subId;
            var betCode;
            if (_this.normalService.subPlayOptions[sub.subId].input == true) {
                _this.normalService.getBetListForInput(sub.subId);
            }
            else {
                betCode = _this.normalService.getBetList(sub.subId);
                // if (this.subId == 31) { //pk10 两面 龙虎
                //     betCode = betCode.replace(/\|/g,"&")
                // }
            }
            _this.tempBetPrizeArr = _this.normalService.temp_bet_list.betDbHighPrize.split("|");
            _this.tempBetPrizeArr.forEach(function (element, i) {
                _this.tempBetPrizeArr[i] = Number(element);
            });
        });
        this.normalService.OpenData$.subscribe(function (opendata) {
            if (opendata.type == _this.gameId && _this.normalService.post_bet.bet_list && _this.normalService.post_bet.bet_list.length > 0) {
                if (_this.timeoutDialog)
                    return;
                _this.timeoutDialog = _this.dialog.open(_timeoutModal_timeoutModal_component__WEBPACK_IMPORTED_MODULE_6__["TimeoutModal"], {
                    width: "400px",
                    data: { title: "期号更新", text: "\u5F53\u524D\u671F\u53F7\u5DF2\u66F4\u65B0\uFF0C\u8BF7\u786E\u8BA4\u662F\u5426\u8981\u6E05\u7A7A\u60A8\u7684\u5DF2\u9009\u6295\u6CE8\u5355\uFF1F" }
                });
                _this.timeoutDialog.afterClosed().subscribe(function (result) {
                    if (result && result.result == true) {
                        _this.clearCart();
                    }
                    _this.timeoutDialog = null;
                });
            }
        });
    };
    AddToCartComponent.prototype.ngOnChanges = function () {
        // 初始化选项配置
        if (this.subId) {
            this.normalService.initPlayOptions(this.subId);
        }
        if (this.gameId) {
            if (this.pGameId !== this.gameId) {
                this.normalService.post_bet.bet_list = [];
                this.normalService.post_bet.amount = 0;
                this.totalCount = 0;
                this.appended = false;
                this.moreActualNum = 5;
                this.betWinStop = true;
                this.betHigherTime = 1;
                this.perPeriodNum = 1;
            }
            this.pGameId = this.gameId;
        }
    };
    // 修改价格单位
    AddToCartComponent.prototype.changeUnit = function (value) {
        this.priceUnit = value;
    };
    // 改变是否追投
    AddToCartComponent.prototype.makeAppend = function (e) {
        this.appended = e.checked;
        this.initAppendList();
    };
    // 从购物车中删除指定注单
    AddToCartComponent.prototype.removeFromCart = function (index) {
        this.normalService.post_bet.amount -= this.normalService.post_bet.bet_list[index].betMoney;
        this.totalCount -= this.normalService.post_bet.bet_list[index].betCount;
        this.normalService.post_bet.bet_list.splice(index, 1);
    };
    // 晴空购物车中的投注单
    AddToCartComponent.prototype.clearCart = function () {
        this.normalService.post_bet.bet_list = [];
        this.normalService.post_bet.amount = 0;
        this.totalCount = 0;
        this.initAppendList();
    };
    // 加入购物车
    AddToCartComponent.prototype.addToCart = function () {
        var _this = this;
        // 如果是单式，则检查输入的号码
        if (this.normalService.subPlayOptions[this.normalService.selectedSubId].input) {
            var inputArr = this.normalService.handinput.split(/,| |\n|\t/);
            var count = inputArr.length;
            for (var ii = 0; ii < inputArr.length; ii++) {
                var el = inputArr[ii];
                var elArr = [];
                var step = 1;
                for (var index = 0; index < el.length; index += step) {
                    elArr.push(el.substring(index, index + step));
                }
                var rightLenth = 5;
                if ([108].indexOf(this.subId) != -1) {
                    rightLenth = 5;
                }
                if ([106, 140].indexOf(this.subId) != -1) {
                    rightLenth = 4;
                }
                if ([89, 95, 96, 55, 61, 62, 129, 132, 134].indexOf(this.subId) != -1) {
                    rightLenth = 3;
                }
                if ([39, 47, 123, 126].indexOf(this.subId) != -1) {
                    rightLenth = 2;
                }
                if (elArr.length !== rightLenth) {
                    this.snackBar.open("\u6240\u8F93\u5165\u7684\u53F7\u7801\u6709\u8BEF", "确定", {
                        duration: 2000
                    });
                    return;
                }
                var hasDouble = void 0;
                for (var ii_1 = 0; ii_1 < elArr.length - 1; ii_1++) {
                    for (var iii = ii_1 + 1; iii < elArr.length; iii++) {
                        if (elArr[ii_1] == elArr[iii]) {
                            hasDouble = true;
                        }
                    }
                }
                if ([95, 61, 132].indexOf(this.subId) != -1) { // 组三 /必须有对
                    if (!hasDouble) {
                        this.snackBar.open("\u6240\u8F93\u5165\u7684\u53F7\u7801\u6709\u8BEF", "确定", {
                            duration: 2000
                        });
                        return;
                    }
                    if (elArr[0] == elArr[1] && elArr[1] == elArr[2]) { //豹子号
                        this.snackBar.open("\u6240\u8F93\u5165\u7684\u53F7\u7801\u6709\u8BEF", "确定", {
                            duration: 2000
                        });
                        return;
                    }
                }
                if ([96, 62, 47, 126, 134].indexOf(this.subId) != -1) { // 任二组选或组六 /不能有对
                    if (hasDouble) {
                        this.snackBar.open("\u6240\u8F93\u5165\u7684\u53F7\u7801\u6709\u8BEF", "确定", {
                            duration: 2000
                        });
                        return;
                    }
                }
                // 还需要判断组三和组六的选择
                // inputArr[ii] = elArr.join(" ");
            }
            this.normalService.temp_bet_list.betCode = inputArr.join(",");
            if (this.normalService.fangAnNum > 1) {
                count *= this.normalService.fangAnNum;
            }
            this.normalService.temp_bet_list.betCount = count;
            this.normalService.temp_bet_list.betEachMoney = this.singelAmount * this.priceUnit;
            this.normalService.temp_bet_list.betMoney = this.normalService.temp_bet_list.betEachMoney * this.normalService.temp_bet_list.betCount;
            this.normalService.temp_bet_list.betReward = this.percent / 100;
            this.normalService.temp_bet_list.betPrize = "";
            this.tempBetPrizeArr.forEach(function (el, i) {
                var tempPrize = ((100 - _this.percent) / 100 * el).toFixed(3);
                _this.normalService.temp_bet_list.betPrize += String(tempPrize);
                if (i < _this.tempBetPrizeArr.length - 1) {
                    _this.normalService.temp_bet_list.betPrize += "|";
                }
            });
            this.normalService.temp_bet_list.betPrizeShow = this.normalService.temp_bet_list.betPrize;
        }
        else {
            if (this.normalService.temp_bet_list.betCount == 0) {
                return this.snackBar.open("当前所选号码有误，请核对玩法规则！", "确定", {
                    duration: 2000,
                });
            }
            // 遍历所有选项，并添加至购物车
            this.normalService.temp_bet_list.betEachMoney = this.singelAmount * this.priceUnit;
            this.normalService.temp_bet_list.betCount = this.normalService.selectedCountNum;
            this.normalService.temp_bet_list.betMoney = this.normalService.temp_bet_list.betEachMoney * this.normalService.temp_bet_list.betCount;
            this.normalService.temp_bet_list.betReward = this.percent / 100;
            // 组织和返点一致的赔率
            this.normalService.temp_bet_list.betPrize = "";
            this.tempBetPrizeArr.forEach(function (el, i) {
                var tempPrize = ((100 - _this.percent) / 100 * el).toFixed(3);
                _this.normalService.temp_bet_list.betPrize += String(tempPrize);
                if (i < _this.tempBetPrizeArr.length - 1) {
                    _this.normalService.temp_bet_list.betPrize += "|";
                }
            });
            this.normalService.temp_bet_list.betPrizeShow = this.normalService.temp_bet_list.betPrize;
        }
        // 组织betPos
        var betPos = "";
        if (this.normalService.posArr.length > 0) {
            for (var i = 0; i < this.normalService.posArr.length; i++) {
                var element_1 = this.normalService.posArr[i];
                if (element_1.checked) {
                    betPos += i + "|";
                }
            }
            betPos = betPos.substring(0, betPos.length - 1);
        }
        this.normalService.temp_bet_list.betPos = betPos;
        // 需要修改彩票ID、期号、是否追号1、总金额1、追号是否翻倍1、追号中后是否再追1
        this.normalService.post_bet.bet_list = !this.normalService.post_bet.bet_list ? [] : this.normalService.post_bet.bet_list;
        for (var key in this.normalService.temp_bet_list) {
            if (this.normalService.temp_bet_list.hasOwnProperty(key)) {
                this.normalService.temp_bet_list[key] = String(this.normalService.temp_bet_list[key]);
            }
        }
        this.normalService.post_bet.bet_list.push(JSON.parse(JSON.stringify(this.normalService.temp_bet_list)));
        this.normalService.post_bet.amount = !this.normalService.post_bet.amount ? 0 : this.normalService.post_bet.amount;
        this.normalService.post_bet.amount += Number(this.normalService.temp_bet_list.betMoney); //总金额
        this.totalCount = 0;
        this.normalService.post_bet.bet_list.forEach(function (element) {
            _this.totalCount += Number(element.betCount);
        });
        this.openDialog();
    };
    // 将购物车中选好的投注列表下单
    AddToCartComponent.prototype.makeBetFromCart = function () {
        var _this = this;
        if (!this.normalService.openDatas[this.gameId] || this.normalService.openDatas[this.gameId].timeleft <= 0) {
            return this.snackBar.open("当前期号已关盘，请等待下一期开盘后下单！", "确定", {
                duration: 2000,
            });
        }
        this.normalService.post_bet.bet_next = this.appended ? 1 : 0; // 是否追号
        this.normalService.post_bet.bet_more = this.appended ? this.moreActualNum : 1; //追号期数
        this.normalService.post_bet.bet_win_stop = this.betWinStop ? 1 : 0; //追中后是否停止
        this.normalService.post_bet.bet_higher = this.betHigherTime; //追号翻倍倍率
        this.normalService.post_bet.perPeriodNum = this.perPeriodNum;
        this.normalService.post_bet.game_id = Number(this.gameId);
        this.normalService.post_bet.game_period = this.normalService.openDatas[this.gameId].current_period;
        this.normalService.doBets(this.normalService.post_bet)
            .subscribe(function (result) {
            if (result.code == 200) {
                _this.normalService.User.Coin = result.data.expectBalance;
                _this.snackBar.open("\u6295\u6CE8\u6210\u529F\uFF0C\u60A8\u7684\u5F53\u524D\u4F59\u989D\u4E3A\uFF1A" + _this.normalService.User.Coin, "确认", {
                    duration: 2000,
                });
                _this.normalService.post_bet.bet_list = [];
                _this.normalService.post_bet.amount = 0;
                _this.totalCount = 0;
                _this.appended = false;
                _this.moreActualNum = 5;
                _this.betWinStop = true;
                _this.betHigherTime = 1;
                _this.perPeriodNum = 1;
            }
            else {
                _this.snackBar.open(result.message, "确定", { duration: 2000 });
            }
        });
    };
    // 初始化追号倍数列表
    AddToCartComponent.prototype.initAppendList = function () {
        var tempArr = [];
        for (var index = 0; index < this.maxAppendValue; index++) {
            var period = 201902110857;
            var elem = { idx: index, period: period + index, multiple: 1, amount: this.normalService.post_bet.amount, openTime: '2019-02-11 22:40:00', disabled: false, checked: false };
            if (index < 1) {
                elem.disabled = true;
            }
            if (index < 5) {
                elem.checked = true;
            }
            tempArr.push(elem);
        }
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](tempArr);
    };
    /** Whether the number of selected elements matches the total number of rows. */
    AddToCartComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    AddToCartComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    // 选中某一需要追号的行   
    AddToCartComponent.prototype.checkRow = function (row) {
        var _this = this;
        row.checked = !row.checked;
        if (row.checked) {
            this.dataSource.data.forEach(function (el) {
                if (el.period < row.period) {
                    el.checked = true;
                }
            });
        }
        if (!row.checked) {
            this.dataSource.data.forEach(function (el) {
                if (el.period > row.period) {
                    el.checked = false;
                }
            });
        }
        this.moreActualNum = 0;
        this.dataSource.data.forEach(function (el) {
            if (el.checked)
                _this.moreActualNum++;
        });
    };
    // 修改追号期数的select菜单 
    AddToCartComponent.prototype.moreNumChanged = function () {
        var _this = this;
        this.moreActualNum = Number(this.moreNum);
        this.dataSource.data.forEach(function (el, i) {
            if (i >= _this.moreActualNum) {
                el.checked = false;
            }
            else {
                el.checked = true;
            }
        });
    };
    // 切换翻倍是否追号，并将翻倍追号倍率设为2
    AddToCartComponent.prototype.changeBetHigher = function (is) {
        if (is == 1) {
            this.betHigher = true;
            this.betHigherTime = 2;
        }
        else {
            this.betHigher = false;
            this.betHigherTime = 1;
        }
        console.log(this.betStartTime + "*" + this.perPeriodNum + "*" + this.betHigherTime + "*");
    };
    // 根据追投列表的行号，获取改行的追号倍率   
    AddToCartComponent.prototype.timesWithIndex = function (index) {
        var times = 1;
        times = this.betStartTime * Math.pow(this.betHigherTime, Math.floor(index / this.perPeriodNum));
        this.dataSource.data[index].times = times;
        this.dataSource.data[index].sum = times * this.dataSource.data[index].amount;
        return times;
    };
    //   计算并返回追号总金额
    AddToCartComponent.prototype.sumWithAppend = function () {
        var sum = 0;
        if (!this.betHigher) {
            sum = this.moreActualNum * this.normalService.post_bet.amount;
        }
        else {
            this.dataSource.data.forEach(function (element) {
                if (element.checked)
                    sum += element.sum;
            });
        }
        return sum;
    };
    //   当返点费率发生变化时，修改normalService中的返点率
    AddToCartComponent.prototype.percentChange = function () {
        this.normalService.selectedPercent = this.percent;
    };
    AddToCartComponent.prototype.openDialog = function () {
        var _this = this;
        if (this.normalService.post_bet.bet_list && this.normalService.post_bet.bet_list.length == 0) {
            return this.snackBar.open("您还没有添加投注单", "确定", {
                duration: 2000,
            });
        }
        var dialogRef = this.dialog.open(_confirmModal_confirmModal_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalDialog"], {
            width: '250px',
            data: { title: "确认订单", text: "\u8BF7\u786E\u8BA4\u60A8\u7684\u8BA2\u5355\uFF0C\u8BE5\u8BA2\u5355\u603B\u91D1\u989D\u4E3A: " + (!this.appended ? this.normalService.post_bet.amount : this.normalService.post_bet.amount * this.betHigherTime * this.moreActualNum) + "\u5143" }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result && result.result == true) {
                _this.makeBetFromCart();
                _this.normalService.resetBetList();
                _this.normalService.initPlayOptions(_this.normalService.selectedSubId);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], AddToCartComponent.prototype, "gameId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AddToCartComponent.prototype, "gameName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], AddToCartComponent.prototype, "subId", void 0);
    AddToCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-to-cart',
            template: __webpack_require__(/*! ./addToCart.template.html */ "./src/app/+caipiaobusiness/addToCart/addToCart.template.html"),
            styles: [__webpack_require__(/*! ./addToCart.style.scss */ "./src/app/+caipiaobusiness/addToCart/addToCart.style.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_normal_service__WEBPACK_IMPORTED_MODULE_2__["NormalService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["BreakpointObserver"]])
    ], AddToCartComponent);
    return AddToCartComponent;
}());



/***/ }),

/***/ "./src/app/+caipiaobusiness/addToCart/addToCart.style.scss":
/*!*****************************************************************!*\
  !*** ./src/app/+caipiaobusiness/addToCart/addToCart.style.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkedPriceButton {\n  color: white;\n  background-color: orangered; }\n\n.price {\n  font-weight: 500;\n  color: orangered; }\n\n.mat-elevation-z8 {\n  width: 90%;\n  font-size: 10px; }\n\n.mat-elevation-z8 tr {\n    height: 28px; }\n\n.mat-elevation-z8 td {\n    font-size: 10px; }\n\n.betMoreTab .mat-tab-link {\n  height: 36px; }\n\n.listZeroRow {\n  text-align: center;\n  border-radius: 5px;\n  padding: 10px 0; }\n\n.listZeroRow:hover {\n  background-color: #666;\n  box-shadow: inset 0px 5px 5px 3px rgba(0, 0, 0, 0.3); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3NvZnR3YXJlL2RldmVsb3AvZ2l0c3RvcmUvY3AvY3AtZnJvbnQvc3JjL2FwcC8rY2FpcGlhb2J1c2luZXNzL2FkZFRvQ2FydC9hZGRUb0NhcnQuc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWiwyQkFBMkIsRUFBQTs7QUFFL0I7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFGbkI7SUFJUSxZQUFZLEVBQUE7O0FBSnBCO0lBT1EsZUFBZSxFQUFBOztBQUd2QjtFQUVRLFlBQVksRUFBQTs7QUFJcEI7RUFDSSxrQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxzQkFBc0I7RUFDdEIsb0RBQWlELEVBQUEiLCJmaWxlIjoic3JjL2FwcC8rY2FpcGlhb2J1c2luZXNzL2FkZFRvQ2FydC9hZGRUb0NhcnQuc3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVja2VkUHJpY2VCdXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XG59XG4ucHJpY2Uge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IG9yYW5nZXJlZDtcbn1cbi5tYXQtZWxldmF0aW9uLXo4IHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB0ciB7XG4gICAgICAgIGhlaWdodDogMjhweDtcbiAgICB9XG4gICAgdGQge1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxufVxuLmJldE1vcmVUYWIge1xuICAgIC5tYXQtdGFiLWxpbmsge1xuICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgfVxufVxuXG4ubGlzdFplcm9Sb3cge1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG59XG4ubGlzdFplcm9Sb3c6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDVweCA1cHggM3B4IHJnYmEoMCwwLDAsMC4zKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/+caipiaobusiness/addToCart/addToCart.template.html":
/*!********************************************************************!*\
  !*** ./src/app/+caipiaobusiness/addToCart/addToCart.template.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\">\n    <div fxFlex=\"70\">\n        <p style=\"font-size:12px;padding-left:1rem;\">\n            您选择了 <span style=\"color:crimson\">{{this.normalService.selectedCountNum}}</span> 注,共 <span style=\"color:crimson\">{{this.normalService.selectedCountNum*singelAmount*priceUnit | number}}</span> 元.单注金额\n            <input type=\"text\" [(ngModel)]=\"singelAmount\" style=\"width:25px;text-align: center;\">\n            <button [ngClass]=\"{'checkedPriceButton':priceUnit == 1}\" (click)=\"changeUnit(1)\">元</button>\n            <button [ngClass]=\"{'checkedPriceButton':priceUnit == 0.1}\" (click)=\"changeUnit(0.1)\">角</button>\n            <button [ngClass]=\"{'checkedPriceButton':priceUnit == 0.01}\" (click)=\"changeUnit(0.01)\" style=\"margin-right:10px;\">分</button>\n            {{percent}}%\n            <mat-slider min=\"0\" max=\"13\" step=\"0.5\" value=\"0\" thumbLabel [(ngModel)]=\"percent\" (change)=\"percentChange()\" [hidden]=\"(isHandset$ | async)\"></mat-slider>\n            <span [hidden]=\"(isHandset$ | async)\">\n                <small *ngFor=\"let prize of tempBetPrizeArr;index as i;\">{{(100-percent)/100 * prize | number: '0.2-2'}}{{i==tempBetPrizeArr.length-1?\"\":\"|\"}}</small>\n            </span>\n        </p>\n    </div>\n    <div fxFlex=\"30\">\n        <p>\n            <button mat-raised-button style=\"color:white;background: green;\" (click)=\"addToCart()\"><mat-icon>add_circle</mat-icon> 确认投注</button>\n        </p>\n    </div>\n</div>\n<mat-divider></mat-divider>\n<div fxLayout=\"row wrap\" [hidden]=\"true\">\n    <div fxFlex=\"70\" style=\"padding: 10px 10px;\">\n        <mat-card>\n            <mat-card-content style=\"min-height:150px;\">\n                <div *ngIf=\"!this.normalService.post_bet.bet_list || this.normalService.post_bet.bet_list.length==0\" class=\"listZeroRow\">\n                    暂无投注项\n                </div>\n                <div fxLayout=\"row\" *ngFor=\"let bet of this.normalService.post_bet.bet_list; let i = index;\" style=\"font-size:10px;border-bottom:1px dashed #ccc;\">\n                    <div fxFlex=\"30\" style=\"padding-right: 10px;overflow:hidden;text-overflow:ellipsis;white-space: nowrap;\">\n                        [{{gameName}}-{{bet.subName}}]\n                        <br>\n                        号码:[{{bet.betCode | codePipe:\",\"}}]\n                    </div>\n                    <div fxFlex=\"15\">{{bet.betCount}}注</div>\n                    <div fxFlex=\"15\">{{bet.betEachMoney}}元/注</div>\n                    <div fxFlex=\"20\" style=\"padding-right: 10px;overflow:hidden;text-overflow:ellipsis;white-space: nowrap;\">{{bet.betPrize}}/{{bet.betReward | percent:'.0-2'}}</div>\n                    <div fxFlex=\"10\">{{bet.betMoney}}</div>\n                    <div fxFlex=\"10\">\n                        <a style=\"color:darkviolet;cursor: pointer;\" (click)=\"removeFromCart(i)\">X</a>\n                    </div>\n                </div>\n            </mat-card-content>\n            <mat-divider></mat-divider>\n            <mat-card-footer style=\"background-color:rgba(255,255,255,0.1)\">\n                <div fxLayout=\"row\" style=\"font-size:0.5rem;\">\n                    <p fxFlex=\"60\">\n                        我要追号：<mat-slide-toggle [checked]=\"appended\" (change)=\"makeAppend($event)\">关</mat-slide-toggle>\n                    </p>\n                    <p fxFlex=\"40\" style=\"white-space: nowrap;text-align: right;\">\n                        <button class=\"my-button\" (click)=\"clearCart()\">X 删除全部</button>\n                    </p>\n                </div>\n            </mat-card-footer>\n        </mat-card>\n    </div>\n    <div fxFlex=\"30\" style=\"padding: 10px 10px;\">\n        <p>\n            <button mat-raised-button color=\"warn\" style=\"font-size:0.7rem;\">随机一注</button>\n        </p>\n        <p>\n            <button mat-raised-button color=\"warn\" style=\"font-size:0.7rem;\">随机五注</button>\n        </p>\n        <button mat-raised-button style=\"color:white;background: green;\" (click)=\"openDialog()\"><mat-icon>done_outline</mat-icon> 确认投注</button>\n        <div style=\"font-size:0.5rem;\">\n            <p style=\"line-height: 0.5rem;\">总注数: <span class=\"price\">&nbsp;{{totalCount | number}}&nbsp;</span> 注</p>\n            <p style=\"line-height: 0.5rem;\">总金额: <span class=\"price\">&nbsp;{{this.normalService.post_bet.amount?this.normalService.post_bet.amount:0}}&nbsp;</span> 元</p>\n        </div>\n    </div>\n\n    <div fxFlex=\"100\" *ngIf=\"this.normalService.post_bet.bet_list && this.normalService.post_bet.bet_list.length && appended\" style=\"position:relative;\" class=\"betMoreTab\">\n        <mat-divider></mat-divider>\n        <p style=\"position: absolute;right:10px;margin-top:10px;font-size:12px;z-index:1000;\">\n            <mat-checkbox\n            [(ngModel)]=\"betWinStop\">\n            </mat-checkbox>\n            中奖后停止追号\n        </p>\n        <nav mat-tab-nav-bar class=\"betMoreTab\">\n            <a mat-tab-link\n                [active]=\"betHigher==false\" (click)=\"changeBetHigher(0)\">\n                同倍追号\n            </a>\n            <a mat-tab-link\n                [active]=\"betHigher==true\" (click)=\"changeBetHigher(1)\">\n                翻倍追号\n            </a>\n        </nav>\n        <div style=\"font-size:10px; padding: 10px;\">\n            追号期数: \n            <mat-form-field style=\"width:50px;text-align: center;\">\n                <mat-select [(value)]=\"moreNum\" (selectionChange)=\"moreNumChanged()\">\n                    <mat-option value=\"5\">5</mat-option>\n                    <mat-option value=\"10\">10</mat-option>\n                    <mat-option value=\"15\">15</mat-option>\n                    <mat-option value=\"20\">20</mat-option>\n                    <mat-option value=\"25\">25</mat-option>\n                    <mat-option value=\"50\">全部</mat-option>\n                </mat-select>\n            </mat-form-field>\n            总期数: {{moreActualNum}} 期 追号总金额: {{sumWithAppend()}} 元 \n            追号计划:\n            <ng-container *ngIf=\"!betHigher\">\n                起始倍数\n                <mat-form-field style=\"width:50px;text-align: center;\">\n                    <input matInput placeholder=\"\" [(ngModel)]=\"betStartTime\" type=\"number\">\n                </mat-form-field>\n            </ng-container>\n            <ng-container *ngIf=\"betHigher\">\n                隔 \n                <mat-form-field style=\"width:50px;text-align: center;\">\n                    <input matInput placeholder=\"\" [(ngModel)]=\"perPeriodNum\" type=\"number\">\n                </mat-form-field>\n                期 倍 ×\n                <mat-form-field style=\"width:50px;text-align: center;\">\n                    <input matInput placeholder=\"\" [(ngModel)]=\"betHigherTime\" type=\"number\">\n                </mat-form-field>\n            </ng-container>\n            最大可追期数\n            <mat-form-field style=\"width:50px;text-align: center;\">\n                <input matInput placeholder=\"\" [value]=\"maxAppendValue\" type=\"number\" disabled>\n            </mat-form-field>\n        </div>\n        <div style=\"max-height: 200px;overflow-y: scroll;\">\n            <table id=\"appendTable\" mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n                <!-- Checkbox Column -->\n                <ng-container matColumnDef=\"select\">\n                    <th mat-header-cell *matHeaderCellDef>\n                    <!-- <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                    </mat-checkbox> -->\n                    </th>\n                    <td mat-cell *matCellDef=\"let row\">\n                    <mat-checkbox (click)=\"$event.preventDefault();\"\n                                    [(ngModel)]=\"row.checked\"\n                                    [disabled]=\"row.disabled\">\n                    </mat-checkbox>\n                    </td>\n                </ng-container>\n                \n                <!-- period Column -->\n                <ng-container matColumnDef=\"period\">\n                    <th mat-header-cell *matHeaderCellDef> 期号 </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.period}} </td>\n                </ng-container>\n                \n                <!-- multiple Column -->\n                <ng-container matColumnDef=\"multiple\">\n                    <th mat-header-cell *matHeaderCellDef> 倍数 </th>\n                    <td mat-cell *matCellDef=\"let element\">\n                        <input type=\"text\" [value]=\"timesWithIndex(element.idx)\" disabled style=\"width:50px;\">倍\n                    </td>\n                </ng-container>\n                \n                <!-- amount Column -->\n                <ng-container matColumnDef=\"amount\">\n                    <th mat-header-cell *matHeaderCellDef> 金额 </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.sum}} </td>\n                </ng-container>\n                \n                <!-- openTime Column -->\n                <ng-container matColumnDef=\"openTime\">\n                    <th mat-header-cell *matHeaderCellDef> 开奖时间 </th>\n                    <td mat-cell *matCellDef=\"let element\"> {{element.openTime}} </td>\n                </ng-container>\n                \n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" style=\"\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n                    (click)=\"row.disabled?'':checkRow(row);\">\n                </tr>\n            </table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/+caipiaobusiness/addToCart/code.pipe.ts":
/*!*********************************************************!*\
  !*** ./src/app/+caipiaobusiness/addToCart/code.pipe.ts ***!
  \*********************************************************/
/*! exports provided: CodePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodePipe", function() { return CodePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

// 导入模块

// 管道名称
var CodePipe = /** @class */ (function () {
    function CodePipe() {
    }
    // 参数说明:
    // value是在使用管道的时候,获取的所在对象的值
    // 后面可以跟若干个参数
    // arg: 自定义参数, 数字类型, 使用的时候, 使用冒号添加在管道名称后面
    CodePipe.prototype.transform = function (value, arg1) {
        // value.replace(/\&/g, " ");
        return value.replace(/\|/g, arg1);
    };
    CodePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: "codePipe" })
    ], CodePipe);
    return CodePipe;
}());



/***/ }),

/***/ "./src/app/+caipiaobusiness/business.component.ts":
/*!********************************************************!*\
  !*** ./src/app/+caipiaobusiness/business.component.ts ***!
  \********************************************************/
/*! exports provided: BusinessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessComponent", function() { return BusinessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _normal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../normal.service */ "./src/app/normal.service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var BusinessComponent = /** @class */ (function () {
    function BusinessComponent(router, breakpointObserver, normalService) {
        var _this = this;
        this.breakpointObserver = breakpointObserver;
        this.normalService = normalService;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) { return result.matches; }));
        this.hasChild = function (_, node) { return !!node.children && node.children.length > 0; };
        router.params.subscribe(function (params) {
            _this.gameId = params.lotId;
            _this.gameName = params.lotName;
            _this.playeds = normalService.getPlayeds(_this.gameId);
            _this.groupType = _this.playeds[0].groupId;
            if (params.lotType) {
                _this.groupType = params.lotType;
            }
            _this.getLottery();
        });
        this.getLotteries();
        this.getNotices();
    }
    BusinessComponent.prototype.ngOnInit = function () {
    };
    BusinessComponent.prototype.subIdChanged = function (subId) {
        this.subId = subId;
    };
    BusinessComponent.prototype.getLottery = function () {
        var _this = this;
        this.normalService.getLotteries(this.gameId)
            .subscribe(function (lotteries) {
            _this.lottery = lotteries.data.Records[0];
        });
    };
    BusinessComponent.prototype.getLotteries = function () {
        var _this = this;
        if (this.normalService.listLotteries.length > 0) {
            this.listLotteries = this.normalService.listLotteries;
        }
        else {
            this.normalService.getAllLotteries()
                .subscribe(function (lotteries) {
                _this.normalService.listLotteries = lotteries.data.Records;
                _this.listLotteries = _this.normalService.listLotteries;
            });
        }
    };
    BusinessComponent.prototype.getNotices = function () {
        if (this.normalService.notices.length) {
            return;
        }
        else {
            this.normalService.getNotices()
                .subscribe(function (notices) {
            });
        }
    };
    BusinessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'business',
            template: __webpack_require__(/*! ./business.template.html */ "./src/app/+caipiaobusiness/business.template.html"),
            styles: [__webpack_require__(/*! ./business.style.scss */ "./src/app/+caipiaobusiness/business.style.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"],
            _normal_service__WEBPACK_IMPORTED_MODULE_3__["NormalService"]])
    ], BusinessComponent);
    return BusinessComponent;
}());



/***/ }),

/***/ "./src/app/+caipiaobusiness/business.style.scss":
/*!******************************************************!*\
  !*** ./src/app/+caipiaobusiness/business.style.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".businessLayout {\n  max-width: 1200px;\n  margin: 0 auto;\n  min-height: 100%;\n  border-right: 1px solid #666;\n  border-left: 1px solid #666; }\n\na {\n  color: #c6f8d9; }\n\nul {\n  -webkit-padding-start: 5px;\n          padding-inline-start: 5px; }\n\n.example-tree-invisible {\n  display: none; }\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3NvZnR3YXJlL2RldmVsb3AvZ2l0c3RvcmUvY3AvY3AtZnJvbnQvc3JjL2FwcC8rY2FpcGlhb2J1c2luZXNzL2J1c2luZXNzLnN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUVkLGdCQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLDJCQUEyQixFQUFBOztBQUU3QjtFQUNJLGNBQXlCLEVBQUE7O0FBRTdCO0VBQ0ksMEJBQXlCO1VBQXpCLHlCQUF5QixFQUFBOztBQUU3QjtFQUNJLGFBQWEsRUFBQTs7QUFHZjs7RUFFRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvK2NhaXBpYW9idXNpbmVzcy9idXNpbmVzcy5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1c2luZXNzTGF5b3V0IHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICAvLyBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggI2NjYztcbiAgbWluLWhlaWdodDoxMDAlO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNjY2O1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM2NjY7XG59XG5hIHtcbiAgICBjb2xvcjogcmdiKDE5OCwgMjQ4LCAyMTcpO1xufVxudWwge1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1cHg7XG59XG4uZXhhbXBsZS10cmVlLWludmlzaWJsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtdHJlZSB1bCxcbiAgLmV4YW1wbGUtdHJlZSBsaSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/+caipiaobusiness/business.template.html":
/*!*********************************************************!*\
  !*** ./src/app/+caipiaobusiness/business.template.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" class=\"businessLayout\">\n    <div [fxFlex]=\"(isHandset$ | async) ? 0 : 17\" [fxHide]=\"(isHandset$ | async) ? true : false\" *ngIf=\"!(isHandset$ | async)\" style=\"border-right:1px solid #ccc;\">\n        <mat-toolbar color=\"primary\" style=\"height:50px;justify-content: center;font-weight: 300;\">\n          <span>选择彩种</span>\n        </mat-toolbar>\n        <mat-nav-list style=\"padding-top:0;\">\n          <a mat-list-item *ngFor=\"let lottery of listLotteries\" [routerLink]=\"'/lottery/play/'+lottery.Id+'/'+lottery.Name\" style=\"height:65px;font-size: 14px;font-weight: lighter;\">\n            <div fxLayout=\"row\" fxLayoutGap=\"10px\" style=\"width:100%;\">\n                <div fxFlex=\"20\">\n                    <img src=\"{{lottery.Logo}}\" alt=\"{{lottery.Logo}}\" style=\"width: 85%;\">\n                </div>\n                <div fxFlex=\"80\" fxFlexAlign=\"center\">{{lottery.Name}}</div>\n            </div>\n            <mat-divider></mat-divider>\n          </a>\n        </mat-nav-list>\n    </div>\n    <div [fxFlex]=\"(isHandset$ | async) ? 100 : 83\">\n        <openInfo [gameId]=\"gameId\" [gameName]=\"gameName\" [lottery]=\"lottery\">开奖结果</openInfo>\n        <playeds [gameId]=\"gameId\" [groupType]=\"groupType\" [playeds]=\"playeds\" (subIdChanged)=\"subIdChanged($event)\">玩法分类</playeds>\n        <add-to-cart [subId]=\"subId\" [gameName]=\"gameName\" [gameId]=\"gameId\">加入购物车</add-to-cart>\n        <records [gameId]=\"gameId\" [gameName]=\"gameName\" [playeds]=\"playeds\"></records>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/+caipiaobusiness/caipiaobusiness.module.ts":
/*!************************************************************!*\
  !*** ./src/app/+caipiaobusiness/caipiaobusiness.module.ts ***!
  \************************************************************/
/*! exports provided: routes, CaipiaoBusinessModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaipiaoBusinessModule", function() { return CaipiaoBusinessModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _business_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./business.component */ "./src/app/+caipiaobusiness/business.component.ts");
/* harmony import */ var _openInfo_openInfo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./openInfo/openInfo.component */ "./src/app/+caipiaobusiness/openInfo/openInfo.component.ts");
/* harmony import */ var _playeds_playeds_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./playeds/playeds.component */ "./src/app/+caipiaobusiness/playeds/playeds.component.ts");
/* harmony import */ var _selects_selects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./selects/selects.component */ "./src/app/+caipiaobusiness/selects/selects.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _addToCart_addToCart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./addToCart/addToCart.component */ "./src/app/+caipiaobusiness/addToCart/addToCart.component.ts");
/* harmony import */ var _records_records_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./records/records.component */ "./src/app/+caipiaobusiness/records/records.component.ts");
/* harmony import */ var _addToCart_code_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./addToCart/code.pipe */ "./src/app/+caipiaobusiness/addToCart/code.pipe.ts");
/* harmony import */ var _confirmModal_confirmModal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./confirmModal/confirmModal.component */ "./src/app/+caipiaobusiness/confirmModal/confirmModal.component.ts");
/* harmony import */ var _subInfoModal_subInfoModal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./subInfoModal/subInfoModal.component */ "./src/app/+caipiaobusiness/subInfoModal/subInfoModal.component.ts");
/* harmony import */ var _timeoutModal_timeoutModal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./timeoutModal/timeoutModal.component */ "./src/app/+caipiaobusiness/timeoutModal/timeoutModal.component.ts");
/* harmony import */ var _removeModal_removeModal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./removeModal/removeModal.component */ "./src/app/+caipiaobusiness/removeModal/removeModal.component.ts");


















var routes = [
    { path: ':lotId/:lotName', component: _business_component__WEBPACK_IMPORTED_MODULE_5__["BusinessComponent"], },
    { path: ':lotId/:lotName/:lotType', component: _business_component__WEBPACK_IMPORTED_MODULE_5__["BusinessComponent"], },
    { path: ":lotId/:lotName/betList", component: _business_component__WEBPACK_IMPORTED_MODULE_5__["BusinessComponent"], },
    { path: ':lotId/:lotName/history', component: _business_component__WEBPACK_IMPORTED_MODULE_5__["BusinessComponent"], }
];
var CaipiaoBusinessModule = /** @class */ (function () {
    function CaipiaoBusinessModule() {
    }
    CaipiaoBusinessModule.routes = routes;
    CaipiaoBusinessModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
            ],
            entryComponents: [_confirmModal_confirmModal_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmModalDialog"], _subInfoModal_subInfoModal_component__WEBPACK_IMPORTED_MODULE_15__["SubInfoModal"], _timeoutModal_timeoutModal_component__WEBPACK_IMPORTED_MODULE_16__["TimeoutModal"], _removeModal_removeModal_component__WEBPACK_IMPORTED_MODULE_17__["RemoveModalDialog"]],
            declarations: [
                _business_component__WEBPACK_IMPORTED_MODULE_5__["BusinessComponent"],
                _openInfo_openInfo_component__WEBPACK_IMPORTED_MODULE_6__["OpenInfoComponent"],
                _playeds_playeds_component__WEBPACK_IMPORTED_MODULE_7__["PlayedsComponent"],
                _selects_selects_component__WEBPACK_IMPORTED_MODULE_8__["SelectsComponent"],
                _addToCart_addToCart_component__WEBPACK_IMPORTED_MODULE_11__["AddToCartComponent"],
                _records_records_component__WEBPACK_IMPORTED_MODULE_12__["RecordsComponent"],
                _confirmModal_confirmModal_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmModalDialog"],
                _subInfoModal_subInfoModal_component__WEBPACK_IMPORTED_MODULE_15__["SubInfoModal"],
                _timeoutModal_timeoutModal_component__WEBPACK_IMPORTED_MODULE_16__["TimeoutModal"],
                _removeModal_removeModal_component__WEBPACK_IMPORTED_MODULE_17__["RemoveModalDialog"],
                _addToCart_code_pipe__WEBPACK_IMPORTED_MODULE_13__["CodePipe"],
            ],
        })
    ], CaipiaoBusinessModule);
    return CaipiaoBusinessModule;
}());



/***/ }),

/***/ "./src/app/+caipiaobusiness/confirmModal/confirmModal.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/+caipiaobusiness/confirmModal/confirmModal.component.ts ***!
  \*************************************************************************/
/*! exports provided: ConfirmModalDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalDialog", function() { return ConfirmModalDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ConfirmModalDialog = /** @class */ (function () {
    function ConfirmModalDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ConfirmModalDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ConfirmModalDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'confirm-dialog',
            template: __webpack_require__(/*! ./confirmModal.template.html */ "./src/app/+caipiaobusiness/confirmModal/confirmModal.template.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], ConfirmModalDialog);
    return ConfirmModalDialog;
}());



/***/ }),

/***/ "./src/app/+caipiaobusiness/confirmModal/confirmModal.template.html":
/*!**************************************************************************!*\
  !*** ./src/app/+caipiaobusiness/confirmModal/confirmModal.template.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n  <p>{{data.text}}</p>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">取消</button>\n  <button mat-button [mat-dialog-close]=\"{result: true}\" cdkFocusInitial>确定</button>\n</div>"

/***/ }),

/***/ "./src/app/+caipiaobusiness/openInfo/openInfo.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/+caipiaobusiness/openInfo/openInfo.component.ts ***!
  \*****************************************************************/
/*! exports provided: OpenInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenInfoComponent", function() { return OpenInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_normal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/normal.service */ "./src/app/normal.service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var OpenInfoComponent = /** @class */ (function () {
    function OpenInfoComponent(normalService, breakpointObserver) {
        this.normalService = normalService;
        this.breakpointObserver = breakpointObserver;
        this.isOpening = true;
        this.isStopBet = true;
        this.openData = [];
        this.openingData = [
            ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            ["2", "3", "4", "5", "6", "7", "8", "9", "0", "1"],
            ["4", "5", "6", "7", "8", "9", "0", "1", "2", "3",],
            ["8", "9", "0", "1", "2", "3", "4", "5", "6", "7"],
            ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
            ["9", "0", "1", "2", "3", "4", "5", "6", "7", "8"],
            ["5", "6", "7", "8", "9", "0", "1", "2", "3", "4"],
            ["3", "4", "5", "6", "7", "8", "9", "0", "1", "2"],
            ["9", "0", "1", "2", "3", "4", "5", "6", "7", "8"],
            ["6", "7", "8", "9", "0", "1", "2", "3", "4", "5"]
        ];
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) { return result.matches; }));
    }
    OpenInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.normalService.openDatas[this.gameId]) {
            this.normalService.getOpenData(this.gameId);
        }
        setInterval(function () {
            if (!_this.normalService.openDatas[_this.gameId]) {
                _this.isOpening = true;
                _this.isStopBet = true;
                _this.normalService.getOpenData(_this.gameId);
                return;
            }
            _this.openData = _this.normalService.openDatas[_this.gameId].last_open.split(" ");
            if (_this.normalService.openDatas[_this.gameId].timeleft <= 0) {
                _this.isStopBet = true;
            }
            else if ((_this.normalService.openDatas[_this.gameId].timeleft + _this.normalService.openDatas[_this.gameId].delaySecond) <= 0) {
                _this.isOpening = true;
            }
            else {
                _this.isStopBet = false;
                _this.isOpening = false;
            }
        }, 1000);
    };
    OpenInfoComponent.prototype.ngOnChanges = function () {
        this.initOpenData();
    };
    OpenInfoComponent.prototype.initOpenData = function () {
        this.isOpening = true;
        if (",1,4,7,19,20,21,51,".indexOf(this.gameId) !== -1) {
            this.openData = ['', '', '', '', ''];
            return;
        }
        if (",9,22,23,24,25,52,".indexOf(this.gameId) !== -1) {
            this.openData = ['', '', '', '', '', '', '', '', '', ''];
            return;
        }
    };
    OpenInfoComponent.prototype.getTimeToOpen = function (pos) {
        var id = this.gameId;
        var obj = this.normalService.openDatas[id];
        if (obj) {
            var second = obj.timeleft >= 0 ? obj.timeleft : 0;
            var hour = String(Math.floor(second / 3600));
            var minute = String(Math.floor((second % 3600) / 60));
            second = String(second % 60);
            if (hour.length == 1) {
                hour = "0" + hour;
            }
            if (minute.length == 1) {
                minute = "0" + minute;
            }
            if (second.length == 1) {
                second = "0" + second;
            }
            var res = void 0;
            switch (pos) {
                case 0:
                    return hour[pos];
                    break;
                case 1:
                    return hour[pos];
                    break;
                case 2:
                    return minute[pos % 2];
                    break;
                case 3:
                    return minute[pos % 2];
                    break;
                case 4:
                    return second[pos % 2];
                    break;
                case 5:
                    return second[pos % 2];
                    break;
            }
        }
        else {
            return "0";
        }
    };
    OpenInfoComponent.prototype.getRandom = function () {
        return Math.floor(Math.random() * 10);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OpenInfoComponent.prototype, "gameId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OpenInfoComponent.prototype, "gameName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OpenInfoComponent.prototype, "lottery", void 0);
    OpenInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'openInfo',
            template: __webpack_require__(/*! ./openInfo.template.html */ "./src/app/+caipiaobusiness/openInfo/openInfo.template.html"),
            styles: [__webpack_require__(/*! ./openInfo.style.scss */ "./src/app/+caipiaobusiness/openInfo/openInfo.style.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_normal_service__WEBPACK_IMPORTED_MODULE_2__["NormalService"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]])
    ], OpenInfoComponent);
    return OpenInfoComponent;
}());



/***/ }),

/***/ "./src/app/+caipiaobusiness/openInfo/openInfo.style.scss":
/*!***************************************************************!*\
  !*** ./src/app/+caipiaobusiness/openInfo/openInfo.style.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.opened_number {\n  background-color: red;\n  border-radius: 50%;\n  display: inline-block;\n  width: 30px;\n  line-height: 30px;\n  height: 30px;\n  font-size: 20px;\n  font-weight: 200;\n  box-shadow: inset -3px -5px 5px 5px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n  position: relative; }\n.timeBoard {\n  background-color: #fff;\n  color: darkslategray;\n  border-radius: 5px;\n  margin: 0 3px;\n  padding: 0px 3px;\n  font-weight: 400; }\n@-webkit-keyframes opening {\n  from {\n    -webkit-transform: translate(0px, 0px);\n            transform: translate(0px, 0px); }\n  to {\n    -webkit-transform: translate(0px, -270px);\n            transform: translate(0px, -270px); } }\n@keyframes opening {\n  from {\n    -webkit-transform: translate(0px, 0px);\n            transform: translate(0px, 0px); }\n  to {\n    -webkit-transform: translate(0px, -270px);\n            transform: translate(0px, -270px); } }\n.opening-number-num {\n  animation: opening 1.5s infinite;\n  -webkit-animation: opening 1.5s infinite;\n  /* Safari 和 Chrome */\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear; }\n.open-time {\n  font-size: 40px;\n  display: inline-flex;\n  margin: 10px 0 20px 0; }\n.handy-time {\n  font-size: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvK2NhaXBpYW9idXNpbmVzcy9vcGVuSW5mby9vcGVuSW5mby5zdHlsZS5zY3NzIiwiL1ZvbHVtZXMvc29mdHdhcmUvZGV2ZWxvcC9naXRzdG9yZS9jcC9jcC1mcm9udC9zcmMvYXBwLytjYWlwaWFvYnVzaW5lc3Mvb3BlbkluZm8vb3BlbkluZm8uc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNEQUFtRDtFQUNuRCxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7QUFLdEI7RUFDSSxzQkFBc0I7RUFDdEIsb0JBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBO0FBR3BCO0VBRUE7SUFBTSxzQ0FBOEI7WUFBOUIsOEJBQThCLEVBQUE7RUFDcEM7SUFBSSx5Q0FBaUM7WUFBakMsaUNBQWlDLEVBQUEsRUFBQTtBQUhyQztFQUVBO0lBQU0sc0NBQThCO1lBQTlCLDhCQUE4QixFQUFBO0VBQ3BDO0lBQUkseUNBQWlDO1lBQWpDLGlDQUFpQyxFQUFBLEVBQUE7QUFHckM7RUFFQSxnQ0FBK0I7RUFDL0Isd0NBQXVDO0VBQUUsb0JBQUE7RUFDekMseUNBQWlDO1VBQWpDLGlDQUFpQyxFQUFBO0FBR2pDO0VBQ0ksZUFBYztFQUFDLG9CQUFvQjtFQUFFLHFCQUFvQixFQUFBO0FBRTdEO0VBQ0ksZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvK2NhaXBpYW9idXNpbmVzcy9vcGVuSW5mby9vcGVuSW5mby5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLm9wZW5lZF9udW1iZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBib3gtc2hhZG93OiBpbnNldCAtM3B4IC01cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4udGltZUJvYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6IGRhcmtzbGF0ZWdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAwIDNweDtcbiAgcGFkZGluZzogMHB4IDNweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDsgfVxuXG5Aa2V5ZnJhbWVzIG9wZW5pbmcge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7IH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTI3MHB4KTsgfSB9XG5cbi5vcGVuaW5nLW51bWJlci1udW0ge1xuICBhbmltYXRpb246IG9wZW5pbmcgMS41cyBpbmZpbml0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb246IG9wZW5pbmcgMS41cyBpbmZpbml0ZTtcbiAgLyogU2FmYXJpIOWSjCBDaHJvbWUgKi9cbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOyB9XG5cbi5vcGVuLXRpbWUge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBtYXJnaW46IDEwcHggMCAyMHB4IDA7IH1cblxuLmhhbmR5LXRpbWUge1xuICBmb250LXNpemU6IDI1cHg7IH1cbiIsIi5vcGVuZWRfbnVtYmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMzBweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTNweCAtNXB4IDVweCA1cHggcmdiYSgwLDAsMCwwLjMpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ub3BlbmluZy1udW1iZXItbnVtIHtcbn1cbi50aW1lQm9hcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ZGFya3NsYXRlZ3JheTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luOiAwIDNweDtcbiAgICBwYWRkaW5nOiAwcHggM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbkBrZXlmcmFtZXMgb3BlbmluZ1xue1xuZnJvbSB7dHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO31cbnRvIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC0yNzBweCk7fVxufVxuXG4ub3BlbmluZy1udW1iZXItbnVtXG57XG5hbmltYXRpb246b3BlbmluZyAxLjVzIGluZmluaXRlO1xuLXdlYmtpdC1hbmltYXRpb246b3BlbmluZyAxLjVzIGluZmluaXRlOyAvKiBTYWZhcmkg5ZKMIENocm9tZSAqL1xuYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xufVxuXG4ub3Blbi10aW1lIHtcbiAgICBmb250LXNpemU6NDBweDtkaXNwbGF5OiBpbmxpbmUtZmxleDsgbWFyZ2luOjEwcHggMCAyMHB4IDA7XG59XG4uaGFuZHktdGltZSB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/+caipiaobusiness/openInfo/openInfo.template.html":
/*!******************************************************************!*\
  !*** ./src/app/+caipiaobusiness/openInfo/openInfo.template.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5 style=\"margin: 1em 0;text-align:center;color:#ff3f00;background: linear-gradient(to right, #2e007794, #000000);margin:0;padding:1em 0;\">\n    <img *ngIf=\"lottery\" src=\"{{lottery.Logo}}\" alt=\"\" style=\"border-radius: 50%;height:20px;position: absolute;transform: translateX(-25px);\">\n    {{gameName}}\n</h5>\n<div fxLayout=\"row wrap\" style=\"background: linear-gradient(to right, #2e007794, #000000);color:white;\">\n    <div [fxFlex]=\"(isHandset$ | async)?50:40\" style=\"text-align:center;\">\n        <p style=\"font-size:15px;margin-bottom:20px;\"><span style=\"color:red;\">{{isStopBet?(normalService.openDatas[this.gameId]?normalService.openDatas[this.gameId].current_period:\"\"):(normalService.openDatas[this.gameId]?normalService.openDatas[this.gameId].last_period:\"\")}}</span> 期 <span style=\"color:red;\">{{isStopBet?\"开奖中:\":\"已开奖:\"}}</span></p>\n        <p *ngIf=\"!isStopBet\" style=\"font-size:45px; line-height: 45px; margin: 0 0 20px 0; overflow:visible;color:#fff;\">\n            <ng-container *ngIf=\"!(isHandset$ | async)\">\n                <span *ngFor=\"let data of openData\" class=\"opened_number\"  style=\"margin:0 2px;\">{{data}}</span>\n            </ng-container>\n            <ng-container *ngIf=\"(isHandset$ | async)\">\n                <span *ngFor=\"let data of openData.slice(0,5)\" class=\"opened_number\"  style=\"margin:0 2px;\"> {{data}} </span>\n                <br>\n                <span *ngFor=\"let data of openData.slice(5)\" class=\"opened_number\"  style=\"margin:0 2px;\"> {{data}} </span>\n            </ng-container>\n        </p>\n        <p *ngIf=\"isStopBet\" style=\"font-size:45px; line-height: 45px; margin: 0 0 20px 0; overflow:visible;\">\n            <ng-container *ngIf=\"!(isHandset$ | async)\">\n                <span *ngFor=\"let data of openData;  let i = index;\" class=\"opened_number opening_number\" style=\"margin:0 2px;\">\n                    <span *ngFor=\"let open of openingData[i];\" style=\"display:block\" class=\"opening-number-num\">{{open}}</span>\n                </span>\n            </ng-container>\n            <ng-container *ngIf=\"(isHandset$ | async)\">\n                <span *ngFor=\"let data of openData.slice(0,5);  let i = index;\" class=\"opened_number opening_number\" style=\"margin:0 2px;\">\n                    <span *ngFor=\"let open of openingData[i];\" style=\"display:block\" class=\"opening-number-num\">{{open}}</span>\n                </span>\n                <br>\n                <span *ngFor=\"let data of openData.slice(5);  let i = index;\" class=\"opened_number opening_number\" style=\"margin:0 2px;\">\n                    <span *ngFor=\"let open of openingData[i+5];\" style=\"display:block\" class=\"opening-number-num\">{{open}}</span>\n                </span>\n            </ng-container>\n        </p>\n    </div>\n    <div [fxFlex]=\"(isHandset$ | async)?50:35\">\n        <div fxLayout=\"row\" style=\"text-align:center;\">\n            <div fxFlex=\"100\">\n                <p style=\"font-size:15px;\" *ngIf=\"!isOpening && !isStopBet\">已开盘，距离投注截止还有：</p>\n                <p style=\"font-size:15px;\" *ngIf=\"!isOpening && isStopBet\">投注截止，尚未到开盘时间</p>\n                <p style=\"font-size:15px;\" *ngIf=\"isOpening\">开盘中</p>\n                <p [ngClass]=\"{'handy-time':(isHandset$ | async)}\" class=\"open-time\">\n                    <span class=\"timeBoard\">{{getTimeToOpen(0)}}</span><span class=\"timeBoard\">{{getTimeToOpen(1)}}</span>:\n                    <span class=\"timeBoard\">{{getTimeToOpen(2)}}</span><span class=\"timeBoard\">{{getTimeToOpen(3)}}</span>:\n                    <span class=\"timeBoard\">{{getTimeToOpen(4)}}</span><span class=\"timeBoard\">{{getTimeToOpen(5)}}</span>\n                </p>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/+caipiaobusiness/playeds/playeds.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/+caipiaobusiness/playeds/playeds.component.ts ***!
  \***************************************************************/
/*! exports provided: PlayedsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayedsComponent", function() { return PlayedsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_normal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/normal.service */ "./src/app/normal.service.ts");



var PlayedsComponent = /** @class */ (function () {
    function PlayedsComponent(normalService) {
        this.normalService = normalService;
        this.subIdChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedIndex = 0;
        this.playedsReading = true;
    }
    PlayedsComponent.prototype.ngOnInit = function () {
        // console.log("playeds component:", this.playeds);
        this.tempGameId = this.gameId;
        this.getSubs();
    };
    PlayedsComponent.prototype.ngOnChanges = function () {
        if (this.gameId != this.tempGameId) {
            this.getSubs();
        }
    };
    PlayedsComponent.prototype.getSubs = function () {
        var _this = this;
        this.playedsReading = true;
        if (!this.playeds)
            return;
        if (!this.groupType) {
            this.groupType = this.playeds[0].groupId;
        }
        this.normalService.getSubInfo(String(this.groupType)).subscribe(function (subs) {
            _this.subs = subs.data.Records;
            //   console.log("subs", this.subs);
            // 为选项赋予赔率
            _this.normalService.selectedSubId = _this.selectedButton;
            _this.normalService.selectedSubName = _this.subs[0].SubName;
            _this.normalService.selectedPlayedId = _this.groupType;
            _this.normalService.setBonusProp(_this.subs);
            _this.selectedButton = _this.subs[0].SubId;
            _this.selectedSub = _this.subs[0];
            _this.subIdChanged.emit(_this.selectedButton);
            _this.playedsReading = false;
        });
    };
    PlayedsComponent.prototype.selectedIndexChange = function (selectedIndex) {
        this.groupType = this.playeds[selectedIndex].groupId;
        this.getSubs();
    };
    PlayedsComponent.prototype.changeSubId = function (sub, button) {
        this.selectedButton = sub.SubId;
        this.selectedSub = sub;
        this.normalService.selectedSubId = sub.SubId;
        this.normalService.selectedSubName = sub.SubName;
        this.normalService.temp_bet_list.betPrize = sub.BetPrize;
        this.normalService.temp_bet_list.betPrizeShow = sub.BetPrize;
        this.subIdChanged.emit(sub.SubId);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlayedsComponent.prototype, "gameId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlayedsComponent.prototype, "groupType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlayedsComponent.prototype, "playeds", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PlayedsComponent.prototype, "subIdChanged", void 0);
    PlayedsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'playeds',
            template: __webpack_require__(/*! ./playeds.template.html */ "./src/app/+caipiaobusiness/playeds/playeds.template.html"),
            styles: [__webpack_require__(/*! ./playeds.style.scss */ "./src/app/+caipiaobusiness/playeds/playeds.style.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_normal_service__WEBPACK_IMPORTED_MODULE_2__["NormalService"]])
    ], PlayedsComponent);
    return PlayedsComponent;
}());



/***/ }),

/***/ "./src/app/+caipiaobusiness/playeds/playeds.style.scss":
/*!*************************************************************!*\
  !*** ./src/app/+caipiaobusiness/playeds/playeds.style.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwLytjYWlwaWFvYnVzaW5lc3MvcGxheWVkcy9wbGF5ZWRzLnN0eWxlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/+caipiaobusiness/playeds/playeds.template.html":
/*!****************************************************************!*\
  !*** ./src/app/+caipiaobusiness/playeds/playeds.template.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group [(selectedIndex)]=\"selectedIndex\" headerPosition=\"above\" (selectedIndexChange)=\"selectedIndexChange(selectedIndex)\" color=\"accent\" backgroundColor=\"primary\">\n  <mat-tab *ngFor=\"let play of playeds; index as i;\" [label]=\"play.groupName\">\n    <ng-template matTabContent>\n      <div fxLayout=\"row\" style=\"padding-top:10px;font-size: 12px;\" fxLayoutAlign=\"space-around center\">\n          <div fxFlex=\"10\" style=\"text-align:center;line-height: 20px;color:red;font-size: 14px;\">\n              {{play.groupName}}\n          </div>\n          <mat-progress-spinner mode=\"indeterminate\" style=\"margin:0 auto;\" [hidden]=\"!playedsReading\"></mat-progress-spinner>\n          <div fxFlex=\"88\" [hidden]=\"playedsReading\">\n            <button mat-stroked-button *ngFor=\"let sub of subs\" #button (click)=\"changeSubId(sub,button)\" color=\"{{selectedButton == sub.SubId?'primary':''}}\" style=\"margin-right:10px;margin-bottom:10px;\">{{sub.SubName}}</button>\n          </div>\n      </div>\n\n      <selects [gameId]=\"gameId\" [subId]=\"selectedButton\" [sub]=\"selectedSub\" [hidden]=\"playedsReading\">选号</selects>\n    </ng-template>\n  </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/+caipiaobusiness/records/records.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/+caipiaobusiness/records/records.component.ts ***!
  \***************************************************************/
/*! exports provided: RecordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordsComponent", function() { return RecordsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_normal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/normal.service */ "./src/app/normal.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var RecordsComponent = /** @class */ (function () {
    function RecordsComponent(normalService, element, changeDetectorRefs) {
        this.normalService = normalService;
        this.element = element;
        this.changeDetectorRefs = changeDetectorRefs;
        this.displayedColumns = ['GameName', 'GamePeriod', 'betCode', 'WinAmount'];
        this.dataSource = [];
        this.openDisplayedColumns = ['GameName', 'GamePeriod', 'Code', 'Ctime'];
        this.openHistories = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.tabs = [true, false];
        this.dataSynced = false;
        this.pageIndexRecords = 0;
        this.lengthRecords = 0;
        this.pageSizeRecords = 10;
        this.previousPageIndexRecords = 0;
        this.pageIndexOpendata = 0;
        this.lengthOpendata = 0;
        this.pageSizeOpendata = 10;
        this.previousPageIndexOpendata = 0;
    }
    RecordsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.normalService.OpenData$.subscribe(function (opendata) {
            if (opendata.type == _this.gameId) {
                var data = {
                    Id: 0,
                    Type: opendata.type,
                    Issue: opendata.last_period,
                    Time: new Date().toISOString(),
                    Data: opendata.last_open,
                };
                _this.openHistories.data.unshift(data);
                _this.openHistories.data = _this.openHistories.data;
            }
        });
        // this.normalService.betCanceled$.subscribe(canceled=>{
        //     this.dataSynced = false;
        //     this.getDataRecords(this.pageIndexRecords);
        // })
        // this.normalService.getLottor$.subscribe(lottor=>{
        //     this.dataSynced = false;
        //     this.getDataRecords(this.pageIndexRecords);
        // })
    };
    RecordsComponent.prototype.ngOnChanges = function () {
        if (!this.gameId)
            return;
        this.getDataRecords(this.pageIndexRecords);
    };
    RecordsComponent.prototype.switchTab = function (id) {
        for (var index = 0; index < this.tabs.length; index++) {
            this.tabs[index] = false;
        }
        this.tabs[id] = true;
        if (id == 1) { //查看开奖记录
            this.getDataOpendata(this.pageIndexOpendata);
        }
    };
    RecordsComponent.prototype.getDataOpendata = function (page) {
        var _this = this;
        this.normalService.getOpenHistories(this.gameId, this.pageSizeOpendata, this.pageIndexOpendata)
            .subscribe(function (openHistories) {
            _this.openHistories.data = openHistories.data.Records;
            _this.dataSynced = true;
            _this.lengthOpendata = openHistories.data.Total;
        });
    };
    RecordsComponent.prototype.getDataRecords = function (page) {
        var _this = this;
        this.normalService.getHistoryBets({
            gid: Number(this.gameId),
            orderType: 0,
            pageIndex: this.pageIndexRecords,
            pageLimit: this.pageSizeRecords
        })
            .subscribe(function (histories) {
            _this.dataSource = histories.data.Records;
            _this.dataSynced = true;
            _this.lengthRecords = histories.data.Total;
        });
    };
    RecordsComponent.prototype.pageChangeRecords = function (pageEvent) {
        this.pageIndexRecords = pageEvent.pageIndex;
        this.pageSizeRecords = pageEvent.pageSize;
        this.previousPageIndexRecords = pageEvent.previousPageIndex;
        this.getDataRecords(pageEvent.pageIndex);
    };
    RecordsComponent.prototype.pageChangeOpendata = function (pageEvent) {
        this.pageIndexOpendata = pageEvent.pageIndex;
        this.pageSizeOpendata = pageEvent.pageSize;
        this.previousPageIndexOpendata = pageEvent.previousPageIndex;
        this.getDataOpendata(pageEvent.pageIndex);
    };
    RecordsComponent.prototype.freshTable = function () {
        this.dataSynced = false;
        var id;
        this.tabs.forEach(function (el, i) {
            if (el)
                id = i;
        });
        if (id == 1) { //查看开奖记录
            this.getDataOpendata(this.pageIndexOpendata);
        }
        else {
            this.getDataRecords(this.pageIndexRecords);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RecordsComponent.prototype, "gameId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RecordsComponent.prototype, "gameName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RecordsComponent.prototype, "playeds", void 0);
    RecordsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'records',
            template: __webpack_require__(/*! ./records.template.html */ "./src/app/+caipiaobusiness/records/records.template.html"),
            styles: [__webpack_require__(/*! ./records.style.scss */ "./src/app/+caipiaobusiness/records/records.style.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_normal_service__WEBPACK_IMPORTED_MODULE_2__["NormalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], RecordsComponent);
    return RecordsComponent;
}());



/***/ }),

/***/ "./src/app/+caipiaobusiness/records/records.style.scss":
/*!*************************************************************!*\
  !*** ./src/app/+caipiaobusiness/records/records.style.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  overflow: auto; }\n\ntable {\n  width: 100%; }\n\n.example-tooltip-red {\n  background: #b71c1c; }\n\n.records-table .mat-cell {\n  font-size: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3NvZnR3YXJlL2RldmVsb3AvZ2l0c3RvcmUvY3AvY3AtZnJvbnQvc3JjL2FwcC8rY2FpcGlhb2J1c2luZXNzL3JlY29yZHMvcmVjb3Jkcy5zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsY0FBYyxFQUFBOztBQUdoQjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLG1CQUFtQixFQUFBOztBQUdyQjtFQUVJLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwLytjYWlwaWFvYnVzaW5lc3MvcmVjb3Jkcy9yZWNvcmRzLnN0eWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xuICAvLyBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLXRvb2x0aXAtcmVkIHtcbiAgYmFja2dyb3VuZDogI2I3MWMxYztcbn1cblxuLnJlY29yZHMtdGFibGV7XG4gIC5tYXQtY2VsbCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/+caipiaobusiness/records/records.template.html":
/*!****************************************************************!*\
  !*** ./src/app/+caipiaobusiness/records/records.template.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav mat-tab-nav-bar>\n  <a mat-tab-link\n     [active]=\"tabs[0]\" (click)=\"switchTab(0)\">\n    投注记录\n  </a>\n  <a mat-tab-link\n    [active]=\"tabs[1]\" (click)=\"switchTab(1)\">\n    开奖记录\n  </a>\n</nav>\n<div style=\"position:relative\">\n    <button mat-mini-fab color=\"primary\" style=\"position:absolute;z-index: 1000;right:10px;top:6px;height:25px;width:25px;\" (click)=\"freshTable()\">\n      <mat-icon aria-label=\"刷新列表\" style=\"font-size:10px;transform: translateY(-3px);\">cached</mat-icon>\n    </button>\n</div>\n<mat-progress-spinner mode=\"indeterminate\" style=\"margin:0 auto;\" [hidden]=\"dataSynced\"></mat-progress-spinner>\n<div class=\"example-container mat-elevation-z8\" [hidden]=\"!dataSynced\">\n  <table mat-table [dataSource]=\"dataSource\" class=\"records-table\" *ngIf=\"tabs[0]\">\n\n    <!-- GameName Column -->\n    <ng-container matColumnDef=\"GameName\">\n      <th mat-header-cell *matHeaderCellDef> 彩种 </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.GameName}} </td>\n    </ng-container>\n\n    <!-- GamePeriod Column -->\n    <ng-container matColumnDef=\"GamePeriod\">\n      <th mat-header-cell *matHeaderCellDef> 期号 </th>\n      <td mat-cell *matCellDef=\"let element\" matTooltip=\"{{element.Ctime | date: 'MM/dd/y hh:mm'}}\" matTooltipClass=\"example-tooltip-red\"\n      matTooltipPosition=\"before\"> {{element.GamePeriod}} </td>\n    </ng-container>\n\n    <!-- subName Column -->\n    <ng-container matColumnDef=\"subName\">\n      <th mat-header-cell *matHeaderCellDef> 玩法 </th>\n      <td mat-cell *matCellDef=\"let element\">  </td>\n    </ng-container>\n\n    <!-- Status Column -->\n    <ng-container matColumnDef=\"Status\">\n      <th mat-header-cell *matHeaderCellDef> 状态 </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.Status==1?\"已结算\":\"\"}}{{element.Status==2?\"已取消\":\"\"}}{{element.Status==0?\"未开奖\":\"\"}} </td>\n    </ng-container>\n\n    <!-- betCode Column -->\n    <ng-container matColumnDef=\"betCode\">\n      <th mat-header-cell *matHeaderCellDef> 投注内容 </th>\n      <td mat-cell *matCellDef=\"let element\" [matTooltip]=\"element.betCode\" matTooltipClass=\"example-tooltip-red\"\n      matTooltipPosition=\"before\">{{element.subName}} {{element.betCode | slice:0:5}}... </td>\n    </ng-container>\n\n    <!-- Ctime Column -->\n    <ng-container matColumnDef=\"WinAmount\">\n      <th mat-header-cell *matHeaderCellDef> 盈亏 </th>\n      <td mat-cell *matCellDef=\"let element\" matTooltip=\"{{element.WinAmount | number:'.0-3'}}(奖金) - {{element.betMoney | number:'.0-3'}}(总额)\" matTooltipClass=\"example-tooltip-red\"\n      matTooltipPosition=\"before\">\n        <span>{{element.Status==0?\"未开奖\":\"\"}}{{element.Status==2?\"已取消\":\"\"}}</span>\n        <span *ngIf=\"element.Status==1\">{{element.WinAmount-element.betMoney | number:'.0-3'}} 元</span> \n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n  <mat-paginator [hidden]=\"tabs[1] || dataSource.length<1\" [length]=\"lengthRecords\"\n              [pageSize]=\"pageSizeRecords\"\n              [pageSizeOptions]=\"[5, 10, 25, 100]\"\n              [pageIndex]=\"pageIndexRecords\"\n              color=\"accent\"\n              showFirstLastButtons=\"true\"\n              (page)=\"pageChangeRecords($event)\" *ngIf=\"tabs[0]\">\n  </mat-paginator>\n  \n  <table mat-table #table1 id=\"table1\" [dataSource]=\"openHistories\" class=\"records-table\" *ngIf=\"tabs[1] && dataSynced\">\n\n      <!-- GameName Column -->\n      <ng-container matColumnDef=\"GameName\">\n        <th mat-header-cell *matHeaderCellDef> 彩种 </th>\n        <td mat-cell *matCellDef=\"let element\"> {{gameName}} </td>\n      </ng-container>\n  \n      <!-- GamePeriod Column -->\n      <ng-container matColumnDef=\"GamePeriod\">\n        <th mat-header-cell *matHeaderCellDef> 期号 </th>\n        <td mat-cell *matCellDef=\"let element\" matTooltip=\"{{element.Ctime | date: 'MM/dd/y hh:mm'}}\" matTooltipClass=\"example-tooltip-red\"\n        matTooltipPosition=\"before\"> {{element.Issue}} </td>\n      </ng-container>\n  \n      <!-- subName Column -->\n      <ng-container matColumnDef=\"Code\">\n        <th mat-header-cell *matHeaderCellDef> 开奖号码 </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Data}} </td>\n      </ng-container>\n  \n      <!-- Status Column -->\n      <ng-container matColumnDef=\"Ctime\">\n        <th mat-header-cell *matHeaderCellDef> 开奖时间 </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.Time | date:\"hh:mm:ss\"}} </td>\n      </ng-container>\n  \n      <tr mat-header-row *matHeaderRowDef=\"openDisplayedColumns; sticky: true\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: openDisplayedColumns;\"></tr>\n  </table>\n  <mat-paginator [hidden]=\"tabs[0] || openHistories.data.length<1\" [length]=\"lengthOpendata\"\n              [pageSize]=\"pageSizeOpendata\"\n              [pageSizeOptions]=\"[5, 10, 25, 100]\"\n              [pageIndex]=\"pageIndexOpendata\"\n              showFirstLastButtons=\"true\"\n              (page)=\"pageChangeOpendata($event)\" *ngIf=\"tabs[1] && dataSynced\">\n  </mat-paginator>\n    <div *ngIf=\"tabs[0] && dataSource.length<1\" style=\"line-height: 60px; text-align:center;font-size: 12px; background-color: #ccc;\">\n        当前彩种暂无记录\n    </div>\n    <div *ngIf=\"tabs[1] && openHistories.data.length<1\" style=\"line-height: 60px; text-align:center;font-size: 12px; background-color: #ccc;\">\n      暂无数据\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/+caipiaobusiness/removeModal/removeModal.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/+caipiaobusiness/removeModal/removeModal.component.ts ***!
  \***********************************************************************/
/*! exports provided: RemoveModalDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveModalDialog", function() { return RemoveModalDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var RemoveModalDialog = /** @class */ (function () {
    function RemoveModalDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    RemoveModalDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    RemoveModalDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'removed-dialog',
            template: __webpack_require__(/*! ./removeModal.template.html */ "./src/app/+caipiaobusiness/removeModal/removeModal.template.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], RemoveModalDialog);
    return RemoveModalDialog;
}());



/***/ }),

/***/ "./src/app/+caipiaobusiness/removeModal/removeModal.template.html":
/*!************************************************************************!*\
  !*** ./src/app/+caipiaobusiness/removeModal/removeModal.template.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n    <p *ngIf=\"data.text\">\n        <mat-icon style=\"height:30px;width:30px;line-height:30px;font-size:25px;border-radius:50%;background-color:greenyellow;color:white;text-align: center;\">done</mat-icon>\n        {{data.text}}\n    </p>\n    <p *ngIf=\"data.text1\">\n        <mat-icon style=\"height:30px;width:30px;line-height:30px;font-size:25px;border-radius:50%;background-color:greenyellow;color:white;text-align: center;\">done</mat-icon>\n        {{data.text1}}\n    </p>\n    <p *ngIf=\"data.text2\">\n        <mat-icon style=\"height:30px;width:30px;line-height:30px;font-size:25px;border-radius:50%;background-color:greenyellow;color:white;text-align: center;\">done</mat-icon>\n        {{data.text2}}\n    </p>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">确定</button>\n</div>"

/***/ }),

/***/ "./src/app/+caipiaobusiness/selects/selects.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/+caipiaobusiness/selects/selects.component.ts ***!
  \***************************************************************/
/*! exports provided: SelectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectsComponent", function() { return SelectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_normal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/normal.service */ "./src/app/normal.service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _subInfoModal_subInfoModal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subInfoModal/subInfoModal.component */ "./src/app/+caipiaobusiness/subInfoModal/subInfoModal.component.ts");
/* harmony import */ var _removeModal_removeModal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../removeModal/removeModal.component */ "./src/app/+caipiaobusiness/removeModal/removeModal.component.ts");








var SelectsComponent = /** @class */ (function () {
    function SelectsComponent(normalService, breakpointObserver, dialog) {
        this.normalService = normalService;
        this.breakpointObserver = breakpointObserver;
        this.dialog = dialog;
        this.posArr = [];
        this.selectedArtIndex = [];
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) { return result.matches; }));
        this.checkedPosNum = 0;
        this.fangAnNum = 1;
    }
    SelectsComponent.prototype.ngOnInit = function () {
    };
    SelectsComponent.prototype.ngOnChanges = function () {
        var _this = this;
        // 手写输入清空
        this.normalService.handinput = '';
        if (this.normalService.subPlayOptions[this.subId] && this.normalService.subPlayOptions[this.subId].betPos) {
            this.posArr = [];
            this.normalService.subPlayOptions[this.subId].betPos.forEach(function (element, index) {
                var checked = false;
                if (_this.normalService.subPlayOptions[_this.subId].posCheck[index]) {
                    checked = true;
                    _this.checkedPosNum++;
                }
                _this.posArr.push({ pos: element, checked: checked });
            });
        }
        else {
            this.posArr = [];
        }
        this.calculateFangAn(false);
    };
    SelectsComponent.prototype.calculateFangAn = function (countBets) {
        var _this = this;
        this.checkedPosNum = 0;
        this.fangAnNum = 1;
        this.posArr.forEach(function (el) {
            if (el.checked) {
                _this.checkedPosNum++;
            }
        });
        // 计算方案数量
        var rightLenth;
        if ([108].indexOf(this.subId) != -1) {
            rightLenth = 5;
        }
        if ([106, 140, 141, 142, 143, 144].indexOf(this.subId) != -1) {
            rightLenth = 4;
        }
        if ([89, 95, 96, 55, 61, 62, 129, 130, 131, 132, 133, 134, 137].indexOf(this.subId) != -1) {
            rightLenth = 3;
        }
        if ([39, 47, 123, 126, 124, 125, 127].indexOf(this.subId) != -1) {
            rightLenth = 2;
        }
        for (var i = this.checkedPosNum; i > this.checkedPosNum - rightLenth; i--) {
            this.fangAnNum *= i;
        }
        for (var ii = rightLenth; ii > 1; ii--) {
            this.fangAnNum /= ii;
        }
        this.normalService.checkedPosNum = this.checkedPosNum;
        this.normalService.fangAnNum = this.fangAnNum;
        this.normalService.posArr = this.posArr;
        if (countBets == true) {
            this.normalService.checkedButtonChanged(this.subId, []);
        }
    };
    SelectsComponent.prototype.addCheckedNum = function (num, line, index) {
        num.checked = !num.checked;
        this.selectedArtIndex[line] = 0;
        this.normalService.checkedButtonChanged(this.subId, [line, index]);
    };
    SelectsComponent.prototype.isNumber = function (num) {
        ++num;
        return num;
    };
    SelectsComponent.prototype.selectNum = function (line, nth, lineNum) {
        var sum = 0;
        switch (nth) {
            case 1:
                line.nums.forEach(function (element) {
                    element.checked = true;
                });
                break;
            case 2:
                line.nums.forEach(function (element) {
                    sum += Number(element.name);
                });
                line.nums.forEach(function (element) {
                    if (Number(element.name) > (sum / line.nums.length)) {
                        element.checked = true;
                    }
                    else {
                        element.checked = false;
                    }
                });
                break;
            case 3:
                line.nums.forEach(function (element) {
                    sum += Number(element.name);
                });
                line.nums.forEach(function (element) {
                    if (Number(element.name) < (sum / line.nums.length)) {
                        element.checked = true;
                    }
                    else {
                        element.checked = false;
                    }
                });
                break;
            case 4: // 单
                line.nums.forEach(function (element) {
                    if (element.name % 2 == 1) {
                        element.checked = true;
                    }
                    else {
                        element.checked = false;
                    }
                });
                break;
            case 5: // 双
                line.nums.forEach(function (element) {
                    if (Number(element.name) % 2 == 0) {
                        element.checked = true;
                    }
                    else {
                        element.checked = false;
                    }
                });
                break;
            default:
                line.nums.forEach(function (element) {
                    element.checked = false;
                });
                break;
        }
        this.selectedArtIndex[lineNum] = nth;
        this.normalService.checkedButtonChanged(this.subId, []);
    };
    SelectsComponent.prototype.showInfoAndExample = function () {
        this.sub.info = JSON.parse(this.sub.Info);
        this.sub.example = JSON.parse(this.sub.Example);
        var infoDialog = this.dialog.open(_subInfoModal_subInfoModal_component__WEBPACK_IMPORTED_MODULE_6__["SubInfoModal"], {
            width: "400px",
            data: this.sub
        });
    };
    SelectsComponent.prototype.uniq = function (array) {
        var temp = []; //一个新的临时数组
        for (var i = 0; i < array.length; i++) {
            if (temp.indexOf(array[i]) == -1) {
                temp.push(array[i]);
            }
        }
        return temp;
    };
    SelectsComponent.prototype.trim = function (str) {
        return str.replace(/^\s+|\s+$/g, "");
    };
    // 去掉重复的
    SelectsComponent.prototype.removeRepeat = function () {
        var str = this.trim(this.normalService.handinput);
        var inputArr = str.split(/,| |\n|\t/);
        var doppelRemovedArr = [];
        var illegalArr = [];
        for (var i = 0; i < inputArr.length; i++) {
            for (var j = i + 1; j < inputArr.length; j++) {
                // 去掉完全重复的
                if (inputArr[i] == inputArr[j]) {
                    doppelRemovedArr.push(inputArr[j]);
                    inputArr.splice(j, 1);
                    j--;
                }
                // 长度不对为非法
                var rightLenth = void 0;
                if ([108].indexOf(this.subId) != -1) {
                    rightLenth = 5;
                }
                if ([106, 140].indexOf(this.subId) != -1) {
                    rightLenth = 4;
                }
                if ([89, 95, 96, 55, 61, 62, 129, 132, 134].indexOf(this.subId) != -1) {
                    rightLenth = 3;
                }
                if ([39, 47, 123, 126].indexOf(this.subId) != -1) {
                    rightLenth = 2;
                }
                if (inputArr[j].length !== rightLenth) {
                    illegalArr.push(inputArr[j]);
                    inputArr.splice(j, 1);
                    j--;
                }
                // 去掉组选重复的
                if ([95, 96, 61, 62, 47, 126, 132, 134].indexOf(this.subId) != -1) { // 组二 组三 组六
                    var tempArrI = inputArr[i].split("").sort().join();
                    var tempArrJ = inputArr[j].split("").sort().join();
                    if (tempArrI == tempArrJ) {
                        doppelRemovedArr.push(inputArr[j]);
                        inputArr.splice(j, 1);
                        j--;
                    }
                }
                // 豹子号错误要去掉
                if ([95, 96, 61, 62, 47, 126, 132, 134].indexOf(this.subId) != -1) { // 组二 组三 组六
                    if (inputArr[j][0] == inputArr[j][1] && inputArr[j][1] == inputArr[j][2]) {
                        illegalArr.push(inputArr[j]);
                        inputArr.splice(j, 1);
                        j--;
                    }
                }
                // 2号组选 组六对子为非法
                if ([47, 126, 96, 62, 134].indexOf(this.subId) != -1) { // 组二 组六
                    var tempLength = inputArr[j].split("").length;
                    var uniqLength = this.uniq(inputArr[j].split("")).length;
                    if (tempLength !== uniqLength) {
                        illegalArr.push(inputArr[j]);
                        inputArr.splice(j, 1);
                        j--;
                    }
                }
                // 组三没有对子为非法
                if ([95, 61, 132].indexOf(this.subId) != -1) { // 组三
                    var tempLength = inputArr[j].split("").length;
                    var uniqLength = this.uniq(inputArr[j].split("")).length;
                    if (tempLength == uniqLength) {
                        illegalArr.push(inputArr[j]);
                        inputArr.splice(j, 1);
                        j--;
                    }
                }
            }
        }
        if (doppelRemovedArr.length > 0 || illegalArr.length > 0) {
            var data = {
                title: "温馨提示",
            };
            if (illegalArr.length) {
                data.text = "\u53BB\u6389\u9519\u8BEF\u53F7\u7801: " + illegalArr.join(",");
                data.title = "成功";
            }
            if (doppelRemovedArr.length) {
                data.text = "\u53BB\u6389\u91CD\u590D\u53F7\uFF1A" + doppelRemovedArr.join(",");
                data.title = "成功";
            }
            if (!illegalArr.length && !doppelRemovedArr.length) {
                data.text2 = "\u6CA1\u6709\u91CD\u590D\u6216\u9519\u8BEF\u53F7\u7801";
            }
            var dialogRef = this.dialog.open(_removeModal_removeModal_component__WEBPACK_IMPORTED_MODULE_7__["RemoveModalDialog"], {
                width: '450px',
                data: data
            });
            dialogRef.afterClosed().subscribe(function (result) {
                if (result && result.result == true) {
                }
            });
        }
        this.normalService.handinput = inputArr.join(',');
    };
    SelectsComponent.prototype.clearInput = function () {
        this.normalService.handinput = '';
    };
    SelectsComponent.prototype.DanshiChange = function () {
        this.normalService.checkedButtonChanged(this.subId, []);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectsComponent.prototype, "gameId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectsComponent.prototype, "subId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectsComponent.prototype, "sub", void 0);
    SelectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'selects',
            template: __webpack_require__(/*! ./selects.template.html */ "./src/app/+caipiaobusiness/selects/selects.template.html"),
            styles: [__webpack_require__(/*! ./selects.style.scss */ "./src/app/+caipiaobusiness/selects/selects.style.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_normal_service__WEBPACK_IMPORTED_MODULE_2__["NormalService"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], SelectsComponent);
    return SelectsComponent;
}());



/***/ }),

/***/ "./src/app/+caipiaobusiness/selects/selects.style.scss":
/*!*************************************************************!*\
  !*** ./src/app/+caipiaobusiness/selects/selects.style.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".handy-pos {\n  margin-bottom: 20px;\n  font-size: 20px;\n  font-weight: 400; }\n  .handy-pos span {\n    box-shadow: 1px 1px 3px #ccc;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    padding: 5px 10px; }\n  .infomation {\n  padding: 5px 3.5%;\n  font-size: 14px;\n  background-color: #fff;\n  color: #666; }\n  .zhixuanInput {\n  width: 100%;\n  outline: 0;\n  border: 1px solid #000; }\n  .check-margin {\n  margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3NvZnR3YXJlL2RldmVsb3AvZ2l0c3RvcmUvY3AvY3AtZnJvbnQvc3JjL2FwcC8rY2FpcGlhb2J1c2luZXNzL3NlbGVjdHMvc2VsZWN0cy5zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTtFQUhwQjtJQUtRLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQixFQUFBO0VBSXpCO0VBQ0ksaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixzQkFBcUI7RUFDckIsV0FBVyxFQUFBO0VBR2Y7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLHNCQUFxQixFQUFBO0VBRXpCO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC8rY2FpcGlhb2J1c2luZXNzL3NlbGVjdHMvc2VsZWN0cy5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhhbmR5LXBvcyB7XG4gICAgbWFyZ2luLWJvdHRvbToyMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNwYW4ge1xuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAjY2NjO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIH1cbn1cblxuLmluZm9tYXRpb24ge1xuICAgIHBhZGRpbmc6IDVweCAzLjUlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG4gICAgY29sb3I6ICM2NjY7XG59XG5cbi56aGl4dWFuSW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjMDAwO1xufVxuLmNoZWNrLW1hcmdpbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/+caipiaobusiness/selects/selects.template.html":
/*!****************************************************************!*\
  !*** ./src/app/+caipiaobusiness/selects/selects.template.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\">\n    <div fxFlex=\"100\" class=\"infomation\" *ngIf=\"sub\" style=\"font-size:10px;\">\n        {{sub.SimpleInfo}}\n        <button style=\"line-height: 20px;\n        padding: 0 7px; border: 1px solid #ccc;color:red;\" (tap)=\"showInfoAndExample()\">\n            <i class=\"fas fa-info-circle\"></i>\n            中奖说明\n        </button>\n    </div>\n    <div fxFlex=\"80\" style=\"font-size:0.6rem;margin: 15px 0 15px 30px;\" *ngIf=\"posArr.length\">\n        <mat-checkbox class=\"check-margin\" *ngFor=\"let pos of posArr\" [(ngModel)]=\"pos.checked\" (change)=\"calculateFangAn(true)\">{{pos.pos}}</mat-checkbox>\n      温馨提示：你选择了{{checkedPosNum}}个位置，系统自动根据位置组合成{{fangAnNum}}个方案\n    </div>\n</div>\n<div *ngIf=\"this.normalService.subPlayOptions[this.subId] && !this.normalService.subPlayOptions[this.subId].input\">\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"start\" *ngFor=\"let line of this.normalService.subPlayOptions[this.subId]?this.normalService.subPlayOptions[this.subId].optionsArr:[];index as lineNum;\" style=\"margin:20px 0;\">\n        <div [fxFlex]=\"(isHandset$ | async) ? 100 : 10\" style=\"text-align: center;line-height: 40px;padding-left:10px;\" [ngClass]=\"{'handy-pos':(isHandset$ | async)}\">\n            <span style=\"background-color:#fff;padding: 10px 30px;border-radius: 20px;box-shadow: inset 0px 3px 10px #666;color:black;white-space: nowrap;\">{{line.pos}}</span>\n        </div>\n        <div [fxFlex]=\"(isHandset$ | async)?71:61\" *ngIf=\"line.type != 1\" style=\"text-align: center;\">\n            <div style=\"display:inline-block;\" *ngFor=\"let num of line.nums;index as numI;\">\n                <button mat-mini-fab color=\"{{num.checked?'primary':''}}\" [ngStyle]=\"{'margin-right':line.nums.length>5?'10px':'20px'}\" isRoundButton=\"true\" (click)=\"addCheckedNum(num, lineNum, numI)\">{{num.name}}</button>\n                <div *ngIf=\"line.showBonus\" [ngStyle]=\"{'margin-right':line.nums.length>5?'10px':'20px'}\">\n                    <p style=\"font-size:0.4rem;font-weight: 100;text-align:center;width:100%;border:1px solid #ccc;border-radius: 5px;background:rgba(255,255,255,0.1);\">{{num.bonus*(100-this.normalService.selectedPercent)/100 | number:'.2'}}</p>\n                </div>\n            </div>\n        </div>\n        <div [fxFlex]=\"(isHandset$ | async)?71:61\" *ngIf=\"line.type == 1\" style=\"text-align: center;\">\n            <div style=\"display:inline-block;\" *ngFor=\"let num of line.nums;index as numI;\">\n                <button mat-stroked-button color=\"{{num.checked?'primary':''}}\" [ngStyle]=\"{'margin-right':line.nums.length>3?'10px':'20px'}\" (click)=\"addCheckedNum(num, lineNum, numI)\">{{num.name}}</button>\n                <div *ngIf=\"line.showBonus\" [ngStyle]=\"{'margin-right':line.nums.length>5?'10px':'20px'}\">\n                    <p style=\"font-size:0.4rem;font-weight: 100;text-align:center;width:100%;border:1px solid #ccc;border-radius: 5px;background:rgba(255,255,255,0.1);\">{{num.bonus*(100-this.normalService.selectedPercent)/100 | number:'.2'}}</p>\n                </div>\n            </div>\n        </div>\n        <div fxFlex=\"29\" style=\"text-align: center;\">\n            <button mat-mini-fab [ngStyle]=\"{'margin-right':line.nums.length>5?'5px':'10px'}\" isRoundButton=\"true\" (click)=\"selectNum(this.normalService.subPlayOptions[this.subId].optionsArr[lineNum], 1, lineNum)\" [color]=\"selectedArtIndex[lineNum]==1?'primary':''\">全</button>\n            <button mat-mini-fab *ngIf=\"isNumber(line.nums[0].name)\" [ngStyle]=\"{'margin-right':line.nums.length>5?'5px':'10px'}\" isRoundButton=\"true\" (click)=\"selectNum(this.normalService.subPlayOptions[this.subId].optionsArr[lineNum], 2, lineNum)\" [color]=\"selectedArtIndex[lineNum]==2?'primary':''\">大</button>\n            <button mat-mini-fab *ngIf=\"isNumber(line.nums[0].name)\" [ngStyle]=\"{'margin-right':line.nums.length>5?'5px':'10px'}\" isRoundButton=\"true\" (click)=\"selectNum(this.normalService.subPlayOptions[this.subId].optionsArr[lineNum], 3, lineNum)\" [color]=\"selectedArtIndex[lineNum]==3?'primary':''\">小</button>\n            <button mat-mini-fab *ngIf=\"isNumber(line.nums[0].name)\" [ngStyle]=\"{'margin-right':line.nums.length>5?'5px':'10px'}\" isRoundButton=\"true\" (click)=\"selectNum(this.normalService.subPlayOptions[this.subId].optionsArr[lineNum], 4, lineNum)\" [color]=\"selectedArtIndex[lineNum]==4?'primary':''\">单</button>\n            <button mat-mini-fab *ngIf=\"isNumber(line.nums[0].name)\" [ngStyle]=\"{'margin-right':line.nums.length>5?'5px':'10px'}\" isRoundButton=\"true\" (click)=\"selectNum(this.normalService.subPlayOptions[this.subId].optionsArr[lineNum], 5, lineNum)\" [color]=\"selectedArtIndex[lineNum]==5?'primary':''\">双</button>\n            <button mat-mini-fab [ngStyle]=\"{'margin-right':line.nums.length>5?'5px':'10px'}\" isRoundButton=\"true\" (click)=\"selectNum(this.normalService.subPlayOptions[this.subId].optionsArr[lineNum], 6, lineNum)\" [color]=\"selectedArtIndex[lineNum]==6?'primary':''\">清</button>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"this.normalService.subPlayOptions[this.subId] && this.normalService.subPlayOptions[this.subId].input\" fxLayout=\"row\" style=\"padding: 10px 0;\">\n    <div fxFlex=\"70\" style=\"padding:0px 20px;\">\n        <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" class=\"zhixuanInput\" [(ngModel)]=\"normalService.handinput\" (keyup)=\"DanshiChange()\"></textarea>\n        <small style=\"font-size:10px;\">每注号码之间请使用逗号（，）、分号（；）,空格或回车键隔开。</small>\n    </div>\n    <div fxFlex=\"30\">\n        <div style=\"margin-top: 15px;padding-left:10px;\">\n            <button mat-raised-button color=\"warn\" (tap)=\"removeRepeat()\">删除重复</button>\n        </div>\n        <div style=\"margin-top: 15px;padding-left:10px;\">\n            <button mat-raised-button color=\"warn\" (tap)=\"clearInput()\">清空重输</button>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/+caipiaobusiness/subInfoModal/subInfoModal.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/+caipiaobusiness/subInfoModal/subInfoModal.component.ts ***!
  \*************************************************************************/
/*! exports provided: SubInfoModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubInfoModal", function() { return SubInfoModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var SubInfoModal = /** @class */ (function () {
    function SubInfoModal(sub) {
        this.sub = sub;
    }
    SubInfoModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'subInfoModal',
            template: __webpack_require__(/*! ./subInfoModal.template.html */ "./src/app/+caipiaobusiness/subInfoModal/subInfoModal.template.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], SubInfoModal);
    return SubInfoModal;
}());



/***/ }),

/***/ "./src/app/+caipiaobusiness/subInfoModal/subInfoModal.template.html":
/*!**************************************************************************!*\
  !*** ./src/app/+caipiaobusiness/subInfoModal/subInfoModal.template.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title style=\"text-align:center;\">中奖说明</h1>\n<div mat-dialog-content>\n    <mat-tab-group mat-align-tabs=\"center\">\n        <mat-tab label=\"中奖说明\">\n            <div *ngFor=\"let inf of sub.info\">\n                <h5>{{inf.name?inf.name:''}}</h5>\n                <p>{{inf.text}}</p>\n            </div>\n        </mat-tab>\n        <mat-tab label=\"中奖范例\">\n            <div *ngFor=\"let inf of sub.example\">\n                <h5>{{inf.name?inf.name:''}}</h5>\n                <p>{{inf.text}}</p>\n            </div>\n        </mat-tab>\n    </mat-tab-group>\n</div>\n<div mat-dialog-actions style=\"justify-content: center;\">\n    <button mat-stroked-button color=\"warn\" mat-dialog-close style=\"width: 60%;\">关闭</button>\n</div>"

/***/ }),

/***/ "./src/app/+caipiaobusiness/timeoutModal/timeoutModal.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/+caipiaobusiness/timeoutModal/timeoutModal.component.ts ***!
  \*************************************************************************/
/*! exports provided: TimeoutModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutModal", function() { return TimeoutModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var TimeoutModal = /** @class */ (function () {
    function TimeoutModal(info) {
        this.info = info;
    }
    TimeoutModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'timeout',
            template: __webpack_require__(/*! ./timeoutModal.template.html */ "./src/app/+caipiaobusiness/timeoutModal/timeoutModal.template.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], TimeoutModal);
    return TimeoutModal;
}());



/***/ }),

/***/ "./src/app/+caipiaobusiness/timeoutModal/timeoutModal.template.html":
/*!**************************************************************************!*\
  !*** ./src/app/+caipiaobusiness/timeoutModal/timeoutModal.template.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title style=\"text-align:center;\">{{info.title}}</h1>\n<div mat-dialog-content>\n    {{info.text}}\n    <small>{{info.decoration}}</small>\n</div>\n<div mat-dialog-actions style=\"justify-content: center;\">\n    <button mat-stroked-button mat-dialog-close style=\"margin-right: 20px;\">关闭</button>\n    <button mat-stroked-button color=\"warn\" [mat-dialog-close]=\"{result: true}\" cdkFocusInitial>确定</button>\n</div>"

/***/ })

}]);
//# sourceMappingURL=caipiaobusiness-caipiaobusiness-module.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stock-box {\n    width: 344px;\n    background-color: #448AFF; \n    margin-bottom: 10px;\n    \n  }\n  .mat-card{\n      padding: 15px;\n  }\n  .mat-card-content {\n    font-size: 1.1em;\n  }\n  .mat-card-title{\n    font-size: 1.5em;\n  }\n  .zoom {\n    display: flex;\n    width: 555px;\n    font-size: 1em;\n  }\n  .zoom button {\n    border: 0px;\n    font-size: 0.9em;\n    background-color: #212121;\n    color: white;\n  }\n  .zoom li {\n    padding-right: 5px;\n  }\n  .btn-selected{\n    background-color: #607D8B !important;\n  }\n  .stocks {\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    flex-wrap: wrap;\n  }\n  .footer{\n    display: flex;\n    flex-direction: column;\n    margin: auto;\n    align-items: center;        \n    margin: 15px 0 15px 0;\n    font-size: 0.9em;\n  }\n  .main {\n    width: 1140px;\n    display: flex;\n    justify-content: space-between;\n    background-color: #455A64;\n    color: #FFFFFF;\n    font-size: 0.9em;\n    flex-wrap: wrap;\n    padding: 15px;\n    margin-bottom: 10px;\n  }\n  .chart {\n    width: 100%;\n    margin-top: 0.8em;\n    margin-bottom: 0.8em;\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <span style=\"width: 100%;text-align: center\">STOCKS</span>\n  <div class=\"zoom\">\n    <li>ZOOM</li>\n    <li><button (click)=\"setPeriod('1M')\" [class.btn-selected]=\"period == '1M'\">1M</button></li>\n    <li><button (click)=\"setPeriod('3M')\" [class.btn-selected]=\"period == '3M'\">3M</button></li>\n    <li><button (click)=\"setPeriod('6M')\" [class.btn-selected]=\"period == '6M'\">6M</button></li>\n    <li><button (click)=\"setPeriod('YTD')\" [class.btn-selected]=\"period == 'YTD'\">YTD</button></li>\n    <li><button (click)=\"setPeriod('1Y')\" [class.btn-selected]=\"period == '1Y'\">1Y</button></li>\n    <li><button (click)=\"setPeriod('2Y')\" [class.btn-selected]=\"period == '2Y'\">2Y</button></li>    \n    <li><button (click)=\"setPeriod('5Y')\" [class.btn-selected]=\"period == '5Y'\">5Y</button></li>    \n  </div>    \n  <div class=\"chart\" id=\"chart_div\" >\n    <app-dashboard [companies]=\"companies\" [period]=\"period\" *ngIf=\"companies\"  ></app-dashboard>\n  </div>\n  <div class=\"stocks\">\n    <mat-card class=\"stock-box\" *ngFor=\"let company of companies\">\n        <mat-card-title>{{company.code}}</mat-card-title>\n        <mat-card-content>{{company.name}}</mat-card-content>\n        <button mat-raised-button color=\"primary\" (click)=\"deleteCompany(company)\">REMOVE</button>\n    </mat-card>  \n    <mat-card class=\"stock-box\">\n      <mat-card-title>Syncs in realtime across clients</mat-card-title>\n      <mat-card-content> \n          <input #companyCode />                  \n      </mat-card-content>\n      <button mat-raised-button color=\"accent\" (click)=\"addCompany(companyCode.value);companyCode.value=''\">ADD</button>\n  </mat-card>  \n  </div>\n</div>\n<div class=\"footer\">\n<a href=\"https://github.com/entropia-studio/\" target=\"_blank\">Coded by Entropia Studio</a>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chart_stocks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart-stocks.service */ "./src/app/chart-stocks.service.ts");
/* harmony import */ var _company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company */ "./src/app/company.ts");
/* harmony import */ var _socket_broadcast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./socket-broadcast.service */ "./src/app/socket-broadcast.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(chartStocksService, socketBroadcastService) {
        var _this = this;
        this.chartStocksService = chartStocksService;
        this.socketBroadcastService = socketBroadcastService;
        this.company = new _company__WEBPACK_IMPORTED_MODULE_2__["Company"];
        this.period = "1M";
        socketBroadcastService.messages.subscribe(function (msg) {
            _this.getCompanies();
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getCompanies();
    };
    AppComponent.prototype.getCompanies = function () {
        var _this = this;
        this.chartStocksService.getCompanies()
            .subscribe(function (companies) {
            _this.companies = companies;
        });
    };
    AppComponent.prototype.addCompany = function (companyCode) {
        var _this = this;
        companyCode = companyCode.trim();
        if (!companyCode) {
            return;
        }
        this.company.code = companyCode;
        this.chartStocksService.addCompany(this.company)
            .subscribe(function (company) {
            _this.companies.push(company);
            _this.socketBroadcastService.messages.next({ "action": "add" });
        });
    };
    AppComponent.prototype.deleteCompany = function (company) {
        var _this = this;
        this.companies = this.companies.filter(function (c) { return c !== company; });
        this.chartStocksService.deleteCompany(company)
            .subscribe(function () {
            _this.socketBroadcastService.messages.next({ "action": "delete" });
        });
    };
    AppComponent.prototype.setPeriod = function (period) {
        this.period = period;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [_chart_stocks_service__WEBPACK_IMPORTED_MODULE_1__["ChartStocksService"],
            _socket_broadcast_service__WEBPACK_IMPORTED_MODULE_3__["SocketBroadcastService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _chart_stocks_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chart-stocks.service */ "./src/app/chart-stocks.service.ts");
/* harmony import */ var _google_chart_base_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./google-chart-base.service */ "./src/app/google-chart-base.service.ts");
/* harmony import */ var _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./line-chart/line-chart.component */ "./src/app/line-chart/line-chart.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _google_line_chart_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./google-line-chart.service */ "./src/app/google-line-chart.service.ts");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_10__["LineChartComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"],
            ],
            providers: [_chart_stocks_service__WEBPACK_IMPORTED_MODULE_8__["ChartStocksService"],
                _google_chart_base_service__WEBPACK_IMPORTED_MODULE_9__["GoogleChartBaseService"],
                _google_line_chart_service__WEBPACK_IMPORTED_MODULE_12__["GoogleLineChartService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chart-stocks.service.ts":
/*!*****************************************!*\
  !*** ./src/app/chart-stocks.service.ts ***!
  \*****************************************/
/*! exports provided: ChartStocksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartStocksService", function() { return ChartStocksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var ChartStocksService = /** @class */ (function () {
    function ChartStocksService(http) {
        var _this = this;
        this.http = http;
        this.urlApiStocks = 'https://api.iextrading.com/1.0/stock/market/batch?types=quote,chart';
        this.getUrlApiCompanies = function () {
            var url_api = location.protocol + '//' + location.host + ':8080/api';
            return location.hostname == '8080' ? url_api + '/api' : url_api + ':8080/api';
        };
        this.getCompanies = function () {
            console.log('Location: ' + _this.getUrlApiCompanies());
            return _this.http.get(_this.getUrlApiCompanies() + '/stocks')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError('getCompanies', [])));
        };
        this.stocksSearchValues = function (symbols, range) {
            var mUrl = _this.urlApiStocks + "&symbols= " + symbols.join() + "&range=" + range;
            return _this.http.get(mUrl);
        };
        this.deleteCompany = function (company) {
            var mUrl = _this.getUrlApiCompanies() + '/company/delete/' + company.code;
            return _this.http.delete(mUrl)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(_this.handleError('Error deleting company')));
        };
        this.addCompany = function (company) {
            var mUrl = _this.getUrlApiCompanies() + '/company/add';
            return _this.http.post(mUrl, company, httpOptions);
        };
    }
    ChartStocksService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    ChartStocksService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ChartStocksService);
    return ChartStocksService;
}());



/***/ }),

/***/ "./src/app/company.ts":
/*!****************************!*\
  !*** ./src/app/company.ts ***!
  \****************************/
/*! exports provided: Company */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return Company; });
var Company = /** @class */ (function () {
    function Company() {
    }
    return Company;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divTable\">\n    <div class=\"divTableBody\">\n        <div class=\"divTableRow\">            \n            <div class=\"divTableCell\" *ngIf=\"elementId1\">\n                <app-line-chart [data]=\"data1\" [config]=\"config1\" [elementId]=\"elementId1\"></app-line-chart>\n            </div>                                    \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _line_char_config_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../line-char-config-class */ "./src/app/line-char-config-class.ts");
/* harmony import */ var _chart_stocks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chart-stocks.service */ "./src/app/chart-stocks.service.ts");
/* harmony import */ var _google_chart_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../google-chart-base.service */ "./src/app/google-chart-base.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(chartStocksService, googleChartBaseService) {
        this.chartStocksService = chartStocksService;
        this.googleChartBaseService = googleChartBaseService;
        this.data1 = [];
    }
    DashboardComponent.prototype.ngOnChanges = function () {
        if (this.companies) {
            this.setDataLineChart(this.companies);
        }
    };
    DashboardComponent.prototype.setDataLineChart = function (companies) {
        var _this = this;
        var companiesCodes = this.companies.map(function (company) {
            return company.code;
        });
        var mData = [];
        this.chartStocksService.stocksSearchValues(companiesCodes, this.period)
            .subscribe(function (data) {
            companiesCodes.map(function (code, index) {
                // Chart data for this company
                var chart = data[code].chart;
                chart.map(function (stock, i) {
                    var mDate = new Date(stock.date);
                    if (index == 0) {
                        mData.push([mDate]);
                    }
                    mData[i].push(stock.vwap);
                });
            });
            // Get the google.visualization.DataTable object from the service
            // Doesn't work outside the Observable!!
            var dataTable = _this.googleChartBaseService.getDataTable();
            dataTable.addColumn('date', 'date');
            //Add the columns with the company codes
            companiesCodes.map(function (code) {
                dataTable.addColumn('number', code);
            });
            dataTable.addRows(mData);
            _this.config1 = new _line_char_config_class__WEBPACK_IMPORTED_MODULE_1__["LineChartConfig"]('Stocks value', "VWAP value");
            _this.data1 = dataTable;
            _this.elementId1 = 'stocksLineChart';
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DashboardComponent.prototype, "companies", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DashboardComponent.prototype, "period", void 0);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_chart_stocks_service__WEBPACK_IMPORTED_MODULE_2__["ChartStocksService"],
            _google_chart_base_service__WEBPACK_IMPORTED_MODULE_3__["GoogleChartBaseService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/google-chart-base.service.ts":
/*!**********************************************!*\
  !*** ./src/app/google-chart-base.service.ts ***!
  \**********************************************/
/*! exports provided: GoogleChartBaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleChartBaseService", function() { return GoogleChartBaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GoogleChartBaseService = /** @class */ (function () {
    function GoogleChartBaseService() {
        google.charts.load('current', { 'packages': ['corechart'] });
    }
    GoogleChartBaseService.prototype.buildChart = function (data, chartFunc, options) {
        var func = function (chartFunc, options) {
            chartFunc().draw(data, options);
        };
        var callback = function () { return func(chartFunc, options); };
        google.charts.setOnLoadCallback(callback);
    };
    GoogleChartBaseService.prototype.getDataTable = function () {
        return new google.visualization.DataTable();
    };
    GoogleChartBaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], GoogleChartBaseService);
    return GoogleChartBaseService;
}());



/***/ }),

/***/ "./src/app/google-line-chart.service.ts":
/*!**********************************************!*\
  !*** ./src/app/google-line-chart.service.ts ***!
  \**********************************************/
/*! exports provided: GoogleLineChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleLineChartService", function() { return GoogleLineChartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _google_chart_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-chart-base.service */ "./src/app/google-chart-base.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoogleLineChartService = /** @class */ (function (_super) {
    __extends(GoogleLineChartService, _super);
    function GoogleLineChartService() {
        return _super.call(this) || this;
    }
    GoogleLineChartService.prototype.BuildLineChart = function (elementId, data, config) {
        var chartFunc = function () {
            return new google.visualization.LineChart(document.getElementById(elementId));
        };
        var options = {
            tooltip: {
                isHtml: false,
                showColorCode: true,
                textStyle: {
                    color: '#212121',
                    fontSize: 11,
                },
            },
            title: config.title,
            subtitle: config.subtitle,
            backgroundColor: '#607D8B',
            fontName: 'Roboto',
            hAxis: {
                textStyle: {
                    color: '#FFFFFF',
                    fontSize: 12,
                },
            },
            vAxis: {
                textStyle: {
                    color: '#FFFFFF',
                    fontSize: 12,
                },
                format: '# $'
            },
            titleTextStyle: {
                color: '#FFFFFF',
                fontSize: 12,
            },
            focusTarget: 'category',
        };
        this.buildChart(data, chartFunc, options);
    };
    GoogleLineChartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], GoogleLineChartService);
    return GoogleLineChartService;
}(_google_chart_base_service__WEBPACK_IMPORTED_MODULE_1__["GoogleChartBaseService"]));



/***/ }),

/***/ "./src/app/line-char-config-class.ts":
/*!*******************************************!*\
  !*** ./src/app/line-char-config-class.ts ***!
  \*******************************************/
/*! exports provided: LineChartConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartConfig", function() { return LineChartConfig; });
var LineChartConfig = /** @class */ (function () {
    function LineChartConfig(title, subtitle) {
        this.title = title;
        this.subtitle = subtitle;
    }
    return LineChartConfig;
}());



/***/ }),

/***/ "./src/app/line-chart/line-chart.component.css":
/*!*****************************************************!*\
  !*** ./src/app/line-chart/line-chart.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/line-chart/line-chart.component.html":
/*!******************************************************!*\
  !*** ./src/app/line-chart/line-chart.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"{{elementId}}\" style=\"width: 100%\"></div>\n"

/***/ }),

/***/ "./src/app/line-chart/line-chart.component.ts":
/*!****************************************************!*\
  !*** ./src/app/line-chart/line-chart.component.ts ***!
  \****************************************************/
/*! exports provided: LineChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartComponent", function() { return LineChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _google_line_chart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../google-line-chart.service */ "./src/app/google-line-chart.service.ts");
/* harmony import */ var _line_char_config_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../line-char-config-class */ "./src/app/line-char-config-class.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LineChartComponent = /** @class */ (function () {
    function LineChartComponent(_lineChartService) {
        this._lineChartService = _lineChartService;
    }
    LineChartComponent.prototype.ngOnChanges = function () {
        this._lineChartService.BuildLineChart(this.elementId, this.data, this.config);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LineChartComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _line_char_config_class__WEBPACK_IMPORTED_MODULE_2__["LineChartConfig"])
    ], LineChartComponent.prototype, "config", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LineChartComponent.prototype, "elementId", void 0);
    LineChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-line-chart',
            template: __webpack_require__(/*! ./line-chart.component.html */ "./src/app/line-chart/line-chart.component.html"),
            styles: [__webpack_require__(/*! ./line-chart.component.css */ "./src/app/line-chart/line-chart.component.css")],
        }),
        __metadata("design:paramtypes", [_google_line_chart_service__WEBPACK_IMPORTED_MODULE_1__["GoogleLineChartService"]])
    ], LineChartComponent);
    return LineChartComponent;
}());



/***/ }),

/***/ "./src/app/socket-broadcast.service.ts":
/*!*********************************************!*\
  !*** ./src/app/socket-broadcast.service.ts ***!
  \*********************************************/
/*! exports provided: SocketBroadcastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketBroadcastService", function() { return SocketBroadcastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./websocket.service */ "./src/app/websocket.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SOCKET_URL = 'ws://localhost:4300/';
var SocketBroadcastService = /** @class */ (function () {
    function SocketBroadcastService(wsService) {
        this.messages = wsService
            .connect(SOCKET_URL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            var data = JSON.parse(response.data);
            return {
                action: data.action
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null); }));
    }
    SocketBroadcastService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_websocket_service__WEBPACK_IMPORTED_MODULE_1__["WebsocketService"]])
    ], SocketBroadcastService);
    return SocketBroadcastService;
}());



/***/ }),

/***/ "./src/app/websocket.service.ts":
/*!**************************************!*\
  !*** ./src/app/websocket.service.ts ***!
  \**************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebsocketService = /** @class */ (function () {
    function WebsocketService() {
    }
    WebsocketService.prototype.connect = function (url) {
        if (!this.subject) {
            this.subject = this.create(url);
            //console.log("Successfully connected: " + url);
        }
        return this.subject;
    };
    WebsocketService.prototype.create = function (url) {
        var ws = new WebSocket(url);
        var observable = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (obs) {
            ws.onmessage = obs.next.bind(obs);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = obs.complete.bind(obs);
            return ws.close.bind(ws);
        });
        var observer = {
            next: function (data) {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data));
                }
            }
        };
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"].create(observer, observable);
    };
    WebsocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WebsocketService);
    return WebsocketService;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/freecodecamp/angular/chart-stock-market/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
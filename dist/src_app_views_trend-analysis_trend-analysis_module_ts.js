"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_views_trend-analysis_trend-analysis_module_ts"],{

/***/ 83627:
/*!******************************************************************!*\
  !*** ./src/app/views/trend-analysis/trend-analysis.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrendAnalysisComponent": () => (/* binding */ TrendAnalysisComponent)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular2-chartjs */ 55015);
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-echarts */ 49909);






function TrendAnalysisComponent_nb_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2);
} }
class TrendAnalysisComponent {
    constructor(dateService, theme) {
        this.dateService = dateService;
        this.theme = theme;
        this.categories = [
            "All",
            "Pre Auth Request",
            "Pre Auth Response",
            "Enhance Request",
            "Enhance Response",
            "Query Request",
            "Query Response",
        ];
        //Total Claims Graph
        this.optionsClaims = {};
    }
    ngOnInit() {
        this.min = this.dateService.addDay(this.dateService.today(), -5);
        this.max = this.dateService.addDay(this.dateService.today(), 5);
        this.setTrendsGraph();
        this.setTotalClaimsGraph();
        this.setSuccessfulToErrorGraph();
    }
    setTrendsGraph() {
        this.themeSubscriptionTrends = this.theme
            .getJsTheme()
            .subscribe((config) => {
            const colors = config.variables;
            const chartjs = config.variables.chartjs;
            this.dataTrends = {
                labels: ["January", "February", "March", "April", "May", "June"],
                datasets: [
                    {
                        label: "dataset - big points",
                        data: [
                            this.random(),
                            this.random(),
                            this.random(),
                            this.random(),
                            this.random(),
                            this.random(),
                        ],
                        borderColor: colors.primary,
                        backgroundColor: colors.primary,
                        fill: false,
                        borderDash: [5, 5],
                        pointRadius: 8,
                        pointHoverRadius: 10,
                    },
                    {
                        label: "dataset - individual point sizes",
                        data: [
                            this.random(),
                            this.random(),
                            this.random(),
                            this.random(),
                            this.random(),
                            this.random(),
                        ],
                        borderColor: colors.dangerLight,
                        backgroundColor: colors.dangerLight,
                        fill: false,
                        borderDash: [5, 5],
                        pointRadius: 8,
                        pointHoverRadius: 10,
                    },
                    {
                        label: "dataset - large pointHoverRadius",
                        data: [
                            this.random(),
                            this.random(),
                            this.random(),
                            this.random(),
                            this.random(),
                            this.random(),
                        ],
                        borderColor: colors.info,
                        backgroundColor: colors.info,
                        fill: false,
                        pointRadius: 8,
                        pointHoverRadius: 10,
                    },
                    {
                        label: "dataset - large pointHitRadius",
                        data: [
                            this.random(),
                            this.random(),
                            this.random(),
                            this.random(),
                            this.random(),
                            this.random(),
                        ],
                        borderColor: colors.success,
                        backgroundColor: colors.success,
                        fill: false,
                        pointRadius: 8,
                        pointHoverRadius: 10,
                    },
                ],
            };
            this.optionsTrends = {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    position: "bottom",
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
                hover: {
                    mode: "index",
                },
                scales: {
                    xAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: "Month",
                            },
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: "Value",
                            },
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                },
            };
        });
    }
    setTotalClaimsGraph() {
        this.themeSubscriptionClaims = this.theme
            .getJsTheme()
            .subscribe((config) => {
            const colors = config.variables;
            const echarts = config.variables.echarts;
            this.optionsClaims = {
                backgroundColor: echarts.bg,
                color: [colors.primaryLight],
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "shadow",
                    },
                },
                grid: {
                    left: "3%",
                    right: "4%",
                    bottom: "3%",
                    containLabel: true,
                },
                xAxis: [
                    {
                        type: "category",
                        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                yAxis: [
                    {
                        type: "value",
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: echarts.splitLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                series: [
                    {
                        name: "Score",
                        type: "bar",
                        barWidth: "60%",
                        data: [10, 52, 200, 334, 390, 330, 220],
                    },
                ],
            };
        });
    }
    setSuccessfulToErrorGraph() {
        this.themeSubscriptionS2E = this.theme.getJsTheme().subscribe((config) => {
            const colors = config.variables;
            const chartjs = config.variables.chartjs;
            console.log(colors);
            // 00FF00
            // FF0000
            this.dataS2E = {
                labels: ["03", "04", "05", "06", "07", "08", "09"],
                datasets: [
                    {
                        data: [65, 59, 80, 81, 56, 55, 40],
                        label: "Success",
                        backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbColorHelper.hexToRgbA("#00FF00", 0.8),
                    },
                    {
                        data: [28, 48, 40, 19, 86, 27, 90],
                        label: "Error",
                        backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbColorHelper.hexToRgbA("#FF0000", 0.8),
                    },
                ],
            };
            this.optionsS2E = {
                maintainAspectRatio: false,
                responsive: true,
                legend: {
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
                scales: {
                    xAxes: [
                        {
                            gridLines: {
                                display: false,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                },
            };
        });
    }
    random() {
        return Math.round(Math.random() * 100);
    }
    ngOnDestroy() {
        this.themeSubscriptionTrends.unsubscribe();
        this.themeSubscriptionClaims.unsubscribe();
        this.themeSubscriptionS2E.unsubscribe();
    }
}
TrendAnalysisComponent.ɵfac = function TrendAnalysisComponent_Factory(t) { return new (t || TrendAnalysisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbDateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbThemeService)); };
TrendAnalysisComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TrendAnalysisComponent, selectors: [["ngx-trend-analysis"]], decls: 41, vars: 11, consts: [[1, "container"], [1, "row"], [1, "col-8"], [1, "row", "mb-3"], [1, "col-md-6", "text-center"], ["selected", "All", 2, "min-width", "50%"], [3, "value", 4, "ngFor", "ngForOf"], ["nbInput", "", "placeholder", "Range Picker", 2, "min-width", "50%", 3, "nbDatepicker"], [3, "min", "max"], ["rangepicker", ""], ["type", "line", 2, "min-height", "400px", 3, "data", "options"], [1, "col-4"], [1, "header-p"], ["echarts", "", 1, "echart", 3, "options"], [1, "col-7"], ["type", "line", 2, "min-height", "300px", 3, "data", "options"], [1, "col-5"], ["type", "bar", 2, "min-height", "300px", 3, "data", "options"], [3, "value"]], template: function TrendAnalysisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "nb-card")(4, "nb-card-body")(5, "div", 3)(6, "div", 4)(7, "nb-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TrendAnalysisComponent_nb_option_8_Template, 2, 2, "nb-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 7)(11, "nb-rangepicker", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "chart", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11)(15, "nb-card")(16, "nb-card-body")(17, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Total Number of Claims Between ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "03-05-2022 and 06-05-2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " For type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "200");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 1)(29, "div", 14)(30, "nb-card")(31, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Claim Flow by Hospital");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "chart", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 16)(36, "nb-card")(37, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Successful to Error Claims");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "chart", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nbDatepicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", ctx.min)("max", ctx.max);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.dataTrends)("options", ctx.optionsTrends);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.optionsClaims);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.dataTrends)("options", ctx.optionsTrends);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.dataS2E)("options", ctx.optionsS2E);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbOptionComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbDatepickerDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbRangepickerComponent, angular2_chartjs__WEBPACK_IMPORTED_MODULE_0__.ChartComponent, ngx_echarts__WEBPACK_IMPORTED_MODULE_4__["ɵa"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbCardHeaderComponent], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Nunito:wght@300&family=Source+Sans+Pro:wght@300&display=swap\");\n.header-p[_ngcontent-%COMP%] {\n  font-size: large;\n  font-family: \"Nunito\", sans-serif;\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZW5kLWFuYWx5c2lzLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vU2Vjb25kJTIwU3RvcmFnZS9QTUwvSENYLURldGFpbHMvSENYLURhc2hib2FyZC9zcmMvYXBwL3ZpZXdzL3RyZW5kLWFuYWx5c2lzL3RyZW5kLWFuYWx5c2lzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLG9IQUFBO0FBRVI7RUFDRSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMENBQUE7QUNBRiIsImZpbGUiOiJ0cmVuZC1hbmFseXNpcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86d2dodEAzMDAmZmFtaWx5PVNvdXJjZStTYW5zK1Bybzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXBcIik7XG5cbi5oZWFkZXItcCB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LWZhbWlseTogXCJTb3VyY2UgU2FucyBQcm9cIiwgc2Fucy1zZXJpZjtcbn1cbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86d2dodEAzMDAmZmFtaWx5PVNvdXJjZStTYW5zK1Bybzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXBcIik7XG4uaGVhZGVyLXAge1xuICBmb250LXNpemU6IGxhcmdlO1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1mYW1pbHk6IFwiU291cmNlIFNhbnMgUHJvXCIsIHNhbnMtc2VyaWY7XG59Il19 */"] });


/***/ }),

/***/ 15276:
/*!***************************************************************!*\
  !*** ./src/app/views/trend-analysis/trend-analysis.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrendAnalysisModule": () => (/* binding */ TrendAnalysisModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _trend_analysis_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trend-analysis.component */ 83627);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-echarts */ 49909);
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-chartjs */ 55015);
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);








//Routes
const routes = [
    { path: "", component: _trend_analysis_component__WEBPACK_IMPORTED_MODULE_0__.TrendAnalysisComponent },
    { path: "**", redirectTo: "", pathMatch: "full" },
];
class TrendAnalysisModule {
}
TrendAnalysisModule.ɵfac = function TrendAnalysisModule_Factory(t) { return new (t || TrendAnalysisModule)(); };
TrendAnalysisModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TrendAnalysisModule });
TrendAnalysisModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbSelectModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbDatepickerModule,
            angular2_chartjs__WEBPACK_IMPORTED_MODULE_1__.ChartModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbInputModule,
            ngx_echarts__WEBPACK_IMPORTED_MODULE_6__.NgxEchartsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TrendAnalysisModule, { declarations: [_trend_analysis_component__WEBPACK_IMPORTED_MODULE_0__.TrendAnalysisComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbSelectModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbDatepickerModule,
        angular2_chartjs__WEBPACK_IMPORTED_MODULE_1__.ChartModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbInputModule,
        ngx_echarts__WEBPACK_IMPORTED_MODULE_6__.NgxEchartsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_views_trend-analysis_trend-analysis_module_ts.js.map
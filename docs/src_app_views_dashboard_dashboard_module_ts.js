"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_views_dashboard_dashboard_module_ts"],{

/***/ 66101:
/*!********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@core/utils */ 89535);
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-chartjs */ 55015);
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ 9575);






class DashboardComponent {
    constructor(theme, layoutService) {
        this.theme = theme;
        this.layoutService = layoutService;
        //Providers Graphs
        this.multi = [
            {
                name: "Germany",
                series: [
                    {
                        name: "17",
                        value: 20,
                    },
                    {
                        name: "18",
                        value: 25,
                    },
                    {
                        name: "19",
                        value: 30,
                    },
                    {
                        name: "20",
                        value: 20,
                    },
                    {
                        name: "21",
                        value: 25,
                    },
                    {
                        name: "22",
                        value: 40,
                    },
                    {
                        name: "23",
                        value: 10,
                    },
                ],
            },
        ];
        this.showLegend = false;
        this.showXAxis = true;
        this.showYAxis = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = "Days";
        this.showYAxisLabel = true;
        this.yAxisLabel = "Number of Providers";
    }
    ngOnInit() {
        this.setUpLineMap();
        this.setUpProvidersGraph();
        this.setTrendsGraph();
    }
    setUpProvidersGraph() {
        this.themeSubscription = this.theme.getJsTheme().subscribe((config) => {
            const colors = config.variables;
            this.colorScheme = {
                domain: [
                    colors.primaryLight,
                    colors.infoLight,
                    colors.successLight,
                    colors.warningLight,
                    colors.dangerLight,
                ],
            };
        });
    }
    setUpLineMap() {
        this.themeSubscription = this.theme.getJsTheme().subscribe((config) => {
            const colors = config.variables;
            const chartjs = config.variables.chartjs;
            this.data = {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                ],
                datasets: [
                    {
                        data: [65, 59, 80, 81, 56, 55, 40],
                        label: "Series A",
                        backgroundColor: _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbColorHelper.hexToRgbA(colors.primary, 0.3),
                        borderColor: colors.primary,
                    },
                ],
            };
            this.options = {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [
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
                legend: {
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
            };
        });
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
    random() {
        return Math.round(Math.random() * 100);
    }
    ngOnDestroy() {
        this.themeSubscription.unsubscribe();
        this.themeSubscriptionTrends.unsubscribe();
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_utils__WEBPACK_IMPORTED_MODULE_0__.LayoutService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["ngx-dashboard"]], decls: 24, vars: 13, consts: [[1, "container-fluid"], [1, "row"], [1, "col-7"], ["type", "line", 2, "min-height", "400px", 3, "data", "options"], [1, "col-5"], [2, "min-height", "320px"], [3, "scheme", "results", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel"], [1, "col-12"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "nb-card")(4, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Claims");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "chart", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4)(9, "div")(10, "nb-card")(11, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Total number of Providers : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "nb-card-body", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "ngx-charts-line-chart", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 1)(18, "div", 7)(19, "nb-card")(20, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Trends");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "chart", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.data)("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.multi)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx.dataTrends)("options", ctx.optionsTrends);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbCardBodyComponent, angular2_chartjs__WEBPACK_IMPORTED_MODULE_1__.ChartComponent, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__.LineChartComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 54727:
/*!*****************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 66101);
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-chartjs */ 55015);
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-echarts */ 49909);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-charts */ 9575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);









//Routes
const routes = [
    { path: "", component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent },
    { path: "**", redirectTo: "" },
];
class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes),
            angular2_chartjs__WEBPACK_IMPORTED_MODULE_1__.ChartModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardModule,
            ngx_echarts__WEBPACK_IMPORTED_MODULE_6__.NgxEchartsModule,
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__.NgxChartsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, angular2_chartjs__WEBPACK_IMPORTED_MODULE_1__.ChartModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardModule,
        ngx_echarts__WEBPACK_IMPORTED_MODULE_6__.NgxEchartsModule,
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__.NgxChartsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_views_dashboard_dashboard_module_ts.js.map
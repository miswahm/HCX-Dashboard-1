"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_views_claims_claims_module_ts"],{

/***/ 5819:
/*!**************************************************!*\
  !*** ./src/app/views/claims/claims.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimsComponent": () => (/* binding */ ClaimsComponent)
/* harmony export */ });
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _core_data_smart_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../@core/data/smart-table */ 98152);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);






function ClaimsComponent_nb_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nb-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2);
} }
class ClaimsComponent {
    constructor(dateService, service) {
        this.dateService = dateService;
        this.service = service;
        this.categories = [
            "All",
            "Pre Auth Request",
            "Pre Auth Response",
            "Enhance Request",
            "Enhance Response",
            "Query Request",
            "Query Response",
        ];
        this.settings = {
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            actions: {
                delete: false,
                add: false,
                edit: false,
                position: "right",
            },
            columns: {
                id: {
                    title: "ID",
                    type: "number",
                },
                firstName: {
                    title: "First Name",
                    type: "string",
                },
                lastName: {
                    title: "Last Name",
                    type: "string",
                },
                username: {
                    title: "Username",
                    type: "string",
                },
                email: {
                    title: "E-mail",
                    type: "string",
                },
                age: {
                    title: "Age",
                    type: "number",
                },
            },
        };
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__.LocalDataSource();
    }
    ngOnInit() {
        this.min = this.dateService.addDay(this.dateService.today(), -5);
        this.max = this.dateService.addDay(this.dateService.today(), 5);
        const data = this.service.getData();
        this.source.load(data);
    }
    onDeleteConfirm(event) {
        if (window.confirm("Are you sure you want to delete?")) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    }
}
ClaimsComponent.ɵfac = function ClaimsComponent_Factory(t) { return new (t || ClaimsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbDateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_data_smart_table__WEBPACK_IMPORTED_MODULE_0__.SmartTableData)); };
ClaimsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ClaimsComponent, selectors: [["ngx-claims"]], decls: 18, vars: 6, consts: [[1, "container"], [1, "inline-form-card", 2, "border-radius", "15px"], [1, "row", "mb-4"], [1, "col-6", "text-center"], ["selected", "All", 2, "min-width", "50%"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-6"], ["nbInput", "", "placeholder", "Range Picker", 2, "min-width", "50%", 3, "nbDatepicker"], [3, "min", "max"], ["rangepicker", ""], [3, "settings", "source", "deleteConfirm"], [3, "value"]], template: function ClaimsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "nb-card", 1)(2, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nb-card-body")(5, "div", 2)(6, "div", 3)(7, "nb-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ClaimsComponent_nb_option_8_Template, 2, 2, "nb-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 7)(11, "nb-rangepicker", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "nb-card")(14, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Claims ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "nb-card-body")(17, "ng2-smart-table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("deleteConfirm", function ClaimsComponent_Template_ng2_smart_table_deleteConfirm_17_listener($event) { return ctx.onDeleteConfirm($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nbDatepicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", ctx.min)("max", ctx.max);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbOptionComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbDatepickerDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbRangepickerComponent, ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__.Ng2SmartTableComponent], styles: [".form-inline[_ngcontent-%COMP%]   [fullWidth][_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.form-inline[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 1.5rem 1.5rem 0;\n}\n\nnb-card.inline-form-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYWltcy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1NlY29uZCUyMFN0b3JhZ2UvUE1ML0hDWC1EZXRhaWxzL0hDWC1EYXNoYm9hcmQvc3JjL2FwcC92aWV3cy9jbGFpbXMvY2xhaW1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoiY2xhaW1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0taW5saW5lIFtmdWxsV2lkdGhdIHtcbiAgZmxleDogMTtcbn1cblxuLmZvcm0taW5saW5lID4gKiB7XG4gIG1hcmdpbjogMCAxLjVyZW0gMS41cmVtIDA7XG59XG5cbm5iLWNhcmQuaW5saW5lLWZvcm0tY2FyZCBuYi1jYXJkLWJvZHkge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbiIsIi5mb3JtLWlubGluZSBbZnVsbFdpZHRoXSB7XG4gIGZsZXg6IDE7XG59XG5cbi5mb3JtLWlubGluZSA+ICoge1xuICBtYXJnaW46IDAgMS41cmVtIDEuNXJlbSAwO1xufVxuXG5uYi1jYXJkLmlubGluZS1mb3JtLWNhcmQgbmItY2FyZC1ib2R5IHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59Il19 */"] });


/***/ }),

/***/ 41019:
/*!***********************************************!*\
  !*** ./src/app/views/claims/claims.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClaimsModule": () => (/* binding */ ClaimsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _claims_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claims.component */ 5819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);







//Routes
const routes = [
    { path: "list", component: _claims_component__WEBPACK_IMPORTED_MODULE_0__.ClaimsComponent },
    { path: "", redirectTo: "list", pathMatch: "full" },
    { path: "**", redirectTo: "list" },
];
class ClaimsModule {
}
ClaimsModule.ɵfac = function ClaimsModule_Factory(t) { return new (t || ClaimsModule)(); };
ClaimsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ClaimsModule });
ClaimsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbInputModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbButtonModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbSelectModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbDatepickerModule,
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__.Ng2SmartTableModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ClaimsModule, { declarations: [_claims_component__WEBPACK_IMPORTED_MODULE_0__.ClaimsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbInputModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbButtonModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbSelectModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbDatepickerModule,
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__.Ng2SmartTableModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_views_claims_claims_module_ts.js.map
"use strict";(self.webpackChunkngx_admin_demo=self.webpackChunkngx_admin_demo||[]).push([[757],{51757:(j,b,p)=>{p.r(b),p.d(b,{ExtraComponentsModule:()=>N});var o=p(97737),z=p(8345),c=p(42268),e=p(5e3);let g=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ngx-components"]],decls:1,vars:0,template:function(n,a){1&n&&e.\u0275\u0275element(0,"router-outlet")},directives:[c.lC],encapsulation:2}),t})(),S=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ngx-alert"]],decls:46,vars:0,consts:[[1,"row"],[1,"col-md-12","col-lg-4","col-xxxl-4"],["status","primary"],["status","success"],["status","info"],["status","warning"],["status","danger"],["outline","primary"],["outline","success"],["outline","info"],["outline","warning"],["outline","danger"],["status","primary","accent","info"],["status","success","accent","danger"],["status","info","accent","warning"],["status","warning","accent","danger"],["status","danger","accent","primary"]],template:function(n,a){1&n&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"nb-card")(3,"nb-card-header"),e.\u0275\u0275text(4,"Colored Alert"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"nb-card-body")(6,"nb-alert",2),e.\u0275\u0275text(7,"You have been successfully authenticated!"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"nb-alert",3),e.\u0275\u0275text(9,"You have been successfully authenticated!"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"nb-alert",4),e.\u0275\u0275text(11,"You have been successfully authenticated!"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"nb-alert",5),e.\u0275\u0275text(13,"You have been successfully authenticated!"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"nb-alert",6),e.\u0275\u0275text(15,"You have been successfully authenticated!"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(16,"div",1)(17,"nb-card")(18,"nb-card-header"),e.\u0275\u0275text(19,"Outline Alert"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"nb-card-body")(21,"nb-alert",7),e.\u0275\u0275text(22,"You have been successfully authenticated!"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"nb-alert",8),e.\u0275\u0275text(24,"You have been successfully authenticated!"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(25,"nb-alert",9),e.\u0275\u0275text(26,"You have been successfully authenticated!"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(27,"nb-alert",10),e.\u0275\u0275text(28,"You have been successfully authenticated!"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(29,"nb-alert",11),e.\u0275\u0275text(30,"You have been successfully authenticated!"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(31,"div",1)(32,"nb-card")(33,"nb-card-header"),e.\u0275\u0275text(34,"Accent Alert"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(35,"nb-card-body")(36,"nb-alert",12),e.\u0275\u0275text(37,"You have been successfully authenticated!"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(38,"nb-alert",13),e.\u0275\u0275text(39,"You have been successfully authenticated!"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(40,"nb-alert",14),e.\u0275\u0275text(41,"You have been successfully authenticated!"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(42,"nb-alert",15),e.\u0275\u0275text(43,"You have been successfully authenticated!"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(44,"nb-alert",16),e.\u0275\u0275text(45,"You have been successfully authenticated!"),e.\u0275\u0275elementEnd()()()()())},directives:[o.Asz,o.ndF,o.yKW,o.$9b],encapsulation:2}),t})(),h=(()=>{class t{constructor(){this.value=25}get status(){return this.value<=25?"danger":this.value<=50?"warning":this.value<=75?"info":"success"}get canIncrease(){return this.value<100}get canDecrease(){return this.value>0}decreaseValue(){this.value>0&&(this.value-=25)}increaseValue(){this.value<100&&(this.value+=25)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ngx-interactive-progress-bar"]],decls:10,vars:5,consts:[[1,"container"],["nbButton","","appearance","ghost",3,"disabled","click"],["icon","minus","pack","eva"],[3,"value","status","displayValue"],["icon","plus","pack","eva"]],template:function(n,a){1&n&&(e.\u0275\u0275elementStart(0,"nb-card")(1,"nb-card-header"),e.\u0275\u0275text(2,"Progress Bar Interactive"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"nb-card-body")(4,"div",0)(5,"button",1),e.\u0275\u0275listener("click",function(){return a.decreaseValue()}),e.\u0275\u0275element(6,"nb-icon",2),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(7,"nb-progress-bar",3),e.\u0275\u0275elementStart(8,"button",1),e.\u0275\u0275listener("click",function(){return a.increaseValue()}),e.\u0275\u0275element(9,"nb-icon",4),e.\u0275\u0275elementEnd()()()()),2&n&&(e.\u0275\u0275advance(5),e.\u0275\u0275property("disabled",a.canDecrease?null:""),e.\u0275\u0275advance(2),e.\u0275\u0275property("value",a.value)("status",a.status)("displayValue",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("disabled",a.canIncrease?null:""))},directives:[o.Asz,o.ndF,o.yKW,o.DPz,o.fMN,o.bSZ],styles:["[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%]   nb-progress-bar[_ngcontent-%COMP%]{flex:1;margin:0 1rem}"]}),t})(),y=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ngx-progress-bar"]],decls:36,vars:13,consts:[["status","primary",3,"value"],["status","info",3,"value"],["status","success",3,"value"],["status","warning",3,"value"],["status","danger",3,"value"],["size","tiny",3,"value"],["size","small",3,"value"],["size","medium",3,"value"],["size","large",3,"value"],["size","giant",3,"value"],["status","primary",3,"value","displayValue"]],template:function(n,a){1&n&&(e.\u0275\u0275elementStart(0,"nb-card")(1,"nb-card-header"),e.\u0275\u0275text(2,"Progress Bar Status"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"nb-card-body")(4,"nb-progress-bar",0),e.\u0275\u0275text(5,"primary"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"nb-progress-bar",1),e.\u0275\u0275text(7,"info"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"nb-progress-bar",2),e.\u0275\u0275text(9,"success"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"nb-progress-bar",3),e.\u0275\u0275text(11,"warning"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"nb-progress-bar",4),e.\u0275\u0275text(13,"danger"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275element(14,"ngx-interactive-progress-bar"),e.\u0275\u0275elementStart(15,"nb-card")(16,"nb-card-header"),e.\u0275\u0275text(17,"Progress Bar Size"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"nb-card-body")(19,"nb-progress-bar",5),e.\u0275\u0275text(20,"tiny"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(21,"nb-progress-bar",6),e.\u0275\u0275text(22,"small"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"nb-progress-bar",7),e.\u0275\u0275text(24,"medium (default)"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(25,"nb-progress-bar",8),e.\u0275\u0275text(26,"large"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(27,"nb-progress-bar",9),e.\u0275\u0275text(28,"giant"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(29,"nb-card")(30,"nb-card-header"),e.\u0275\u0275text(31,"Progress Bar Value"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(32,"nb-card-body"),e.\u0275\u0275element(33,"nb-progress-bar",10),e.\u0275\u0275elementStart(34,"nb-progress-bar",0),e.\u0275\u0275text(35,"Custom text"),e.\u0275\u0275elementEnd()()()),2&n&&(e.\u0275\u0275advance(4),e.\u0275\u0275property("value",20),e.\u0275\u0275advance(2),e.\u0275\u0275property("value",40),e.\u0275\u0275advance(2),e.\u0275\u0275property("value",60),e.\u0275\u0275advance(2),e.\u0275\u0275property("value",80),e.\u0275\u0275advance(2),e.\u0275\u0275property("value",100),e.\u0275\u0275advance(7),e.\u0275\u0275property("value",20),e.\u0275\u0275advance(2),e.\u0275\u0275property("value",40),e.\u0275\u0275advance(2),e.\u0275\u0275property("value",60),e.\u0275\u0275advance(2),e.\u0275\u0275property("value",80),e.\u0275\u0275advance(2),e.\u0275\u0275property("value",100),e.\u0275\u0275advance(6),e.\u0275\u0275property("value",40)("displayValue",!0),e.\u0275\u0275advance(1),e.\u0275\u0275property("value",60))},directives:[o.Asz,o.ndF,o.yKW,o.bSZ,h],styles:["[_nghost-%COMP%]   nb-progress-bar[_ngcontent-%COMP%] ~ nb-progress-bar[_ngcontent-%COMP%]{margin-top:1rem}"]}),t})(),x=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ngx-spinner-sizes"]],decls:15,vars:5,consts:[["nbSpinnerSize","tiny","nbSpinnerStatus","primary",3,"nbSpinner"],["nbSpinnerSize","small","nbSpinnerStatus","primary",3,"nbSpinner"],["nbSpinnerSize","medium","nbSpinnerStatus","primary",3,"nbSpinner"],["nbSpinnerSize","large","nbSpinnerStatus","primary",3,"nbSpinner"],["nbSpinnerSize","giant","nbSpinnerStatus","primary",3,"nbSpinner"]],template:function(n,a){1&n&&(e.\u0275\u0275elementStart(0,"nb-card",0)(1,"nb-card-body"),e.\u0275\u0275text(2," Some card content. "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(3,"nb-card",1)(4,"nb-card-body"),e.\u0275\u0275text(5," Some card content. "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(6,"nb-card",2)(7,"nb-card-body"),e.\u0275\u0275text(8," Some card content. "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(9,"nb-card",3)(10,"nb-card-body"),e.\u0275\u0275text(11," Some card content. "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(12,"nb-card",4)(13,"nb-card-body"),e.\u0275\u0275text(14," Some card content. "),e.\u0275\u0275elementEnd()()),2&n&&(e.\u0275\u0275property("nbSpinner",!0),e.\u0275\u0275advance(3),e.\u0275\u0275property("nbSpinner",!0),e.\u0275\u0275advance(3),e.\u0275\u0275property("nbSpinner",!0),e.\u0275\u0275advance(3),e.\u0275\u0275property("nbSpinner",!0),e.\u0275\u0275advance(3),e.\u0275\u0275property("nbSpinner",!0))},directives:[o.Asz,o.Q7R,o.yKW],encapsulation:2}),t})(),f=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ngx-spinner-color"]],decls:15,vars:5,consts:[["nbSpinnerStatus","primary",3,"nbSpinner"],["nbSpinnerStatus","success",3,"nbSpinner"],["nbSpinnerStatus","info",3,"nbSpinner"],["nbSpinnerStatus","warning",3,"nbSpinner"],["nbSpinnerStatus","danger",3,"nbSpinner"]],template:function(n,a){1&n&&(e.\u0275\u0275elementStart(0,"nb-card",0)(1,"nb-card-body"),e.\u0275\u0275text(2," Some card content. "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(3,"nb-card",1)(4,"nb-card-body"),e.\u0275\u0275text(5," Some card content. "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(6,"nb-card",2)(7,"nb-card-body"),e.\u0275\u0275text(8," Some card content. "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(9,"nb-card",3)(10,"nb-card-body"),e.\u0275\u0275text(11," Some card content. "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(12,"nb-card",4)(13,"nb-card-body"),e.\u0275\u0275text(14," Some card content. "),e.\u0275\u0275elementEnd()()),2&n&&(e.\u0275\u0275property("nbSpinner",!0),e.\u0275\u0275advance(3),e.\u0275\u0275property("nbSpinner",!0),e.\u0275\u0275advance(3),e.\u0275\u0275property("nbSpinner",!0),e.\u0275\u0275advance(3),e.\u0275\u0275property("nbSpinner",!0),e.\u0275\u0275advance(3),e.\u0275\u0275property("nbSpinner",!0))},directives:[o.Asz,o.Q7R,o.yKW],encapsulation:2}),t})(),C=(()=>{class t{constructor(){this.loadingLargeGroup=!1,this.loadingMediumGroup=!1}toggleLoadingLargeGroupAnimation(){this.loadingLargeGroup=!0,setTimeout(()=>this.loadingLargeGroup=!1,3e3)}toggleLoadingMediumGroupAnimation(){this.loadingMediumGroup=!0,setTimeout(()=>this.loadingMediumGroup=!1,3e3)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ngx-spinner-in-buttons"]],decls:19,vars:6,consts:[[1,"row"],[1,"col-md-12","col-lg-12","col-xxxl-12"],["nbButton","","status","success","size","large","nbSpinnerStatus","success","nbSpinnerSize","large","nbSpinnerMessage","",3,"nbSpinner","click"],["nbButton","","status","primary","size","large","nbSpinnerStatus","primary","nbSpinnerSize","large","nbSpinnerMessage","",3,"nbSpinner","click"],["nbButton","","status","warning","size","large","nbSpinnerStatus","warning","nbSpinnerSize","large","nbSpinnerMessage","",3,"nbSpinner","click"],[1,"col-md-12","col-lg-12","col-xxxl-12","size-medium-group"],["nbButton","","status","danger","size","medium","nbSpinnerStatus","danger","nbSpinnerMessage","",3,"nbSpinner","click"],["nbButton","","status","info","size","medium","nbSpinnerStatus","info","nbSpinnerSize","small","nbSpinnerMessage","",3,"nbSpinner","click"],["nbButton","","status","primary","size","medium","nbSpinnerStatus","primary","nbSpinnerSize","tiny","nbSpinnerMessage","",3,"nbSpinner","click"]],template:function(n,a){1&n&&(e.\u0275\u0275elementStart(0,"nb-card")(1,"nb-card-header"),e.\u0275\u0275text(2,"Button With Spinner"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"nb-card-body")(4,"div",0)(5,"div",1)(6,"button",2),e.\u0275\u0275listener("click",function(){return a.toggleLoadingLargeGroupAnimation()}),e.\u0275\u0275text(7," Download "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"button",3),e.\u0275\u0275listener("click",function(){return a.toggleLoadingLargeGroupAnimation()}),e.\u0275\u0275text(9," Download "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"button",4),e.\u0275\u0275listener("click",function(){return a.toggleLoadingLargeGroupAnimation()}),e.\u0275\u0275text(11," Download "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(12,"div",5)(13,"button",6),e.\u0275\u0275listener("click",function(){return a.toggleLoadingMediumGroupAnimation()}),e.\u0275\u0275text(14," Download "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(15,"button",7),e.\u0275\u0275listener("click",function(){return a.toggleLoadingMediumGroupAnimation()}),e.\u0275\u0275text(16," Download "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"button",8),e.\u0275\u0275listener("click",function(){return a.toggleLoadingMediumGroupAnimation()}),e.\u0275\u0275text(18," Download "),e.\u0275\u0275elementEnd()()()()()),2&n&&(e.\u0275\u0275advance(6),e.\u0275\u0275property("nbSpinner",a.loadingLargeGroup),e.\u0275\u0275advance(2),e.\u0275\u0275property("nbSpinner",a.loadingLargeGroup),e.\u0275\u0275advance(2),e.\u0275\u0275property("nbSpinner",a.loadingLargeGroup),e.\u0275\u0275advance(3),e.\u0275\u0275property("nbSpinner",a.loadingMediumGroup),e.\u0275\u0275advance(2),e.\u0275\u0275property("nbSpinner",a.loadingMediumGroup),e.\u0275\u0275advance(2),e.\u0275\u0275property("nbSpinner",a.loadingMediumGroup))},directives:[o.Asz,o.ndF,o.yKW,o.DPz,o.Q7R],styles:["[_nghost-%COMP%]   button[_ngcontent-%COMP%]{margin:1rem}[_nghost-%COMP%]   .size-medium-group[_ngcontent-%COMP%]{margin-top:2rem;border-top:1px solid var(--divider-color)}"]}),t})(),E=(()=>{class t{constructor(){this.loading=!1}toggleLoadingAnimation(){this.loading=!0,setTimeout(()=>this.loading=!1,1e3)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ngx-spinner-in-tabs"]],decls:9,vars:2,consts:[["size","xsmall"],["fullWidth","",3,"changeTab"],["tabTitle","Tab 1","nbSpinnerStatus","success","nbSpinnerSize","giant",3,"nbSpinner"],["tabTitle","Tab 2","nbSpinnerStatus","info","nbSpinnerSize","giant",3,"nbSpinner"]],template:function(n,a){1&n&&(e.\u0275\u0275elementStart(0,"nb-card",0)(1,"nb-card-body")(2,"nb-tabset",1),e.\u0275\u0275listener("changeTab",function(){return a.toggleLoadingAnimation()}),e.\u0275\u0275elementStart(3,"nb-tab",2)(4,"p"),e.\u0275\u0275text(5," A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object. "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(6,"nb-tab",3)(7,"p"),e.\u0275\u0275text(8," Nebular's primary goal is to assemble together and connect the most awesome features and libraries creating an efficient ecosystem to speed up and simplify the development. "),e.\u0275\u0275elementEnd()()()()()),2&n&&(e.\u0275\u0275advance(3),e.\u0275\u0275property("nbSpinner",a.loading),e.\u0275\u0275advance(3),e.\u0275\u0275property("nbSpinner",a.loading))},directives:[o.Asz,o.yKW,o.kyn,o.TR4,o.Q7R],styles:["[_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%]{padding:1.25rem}"]}),t})(),v=(()=>{class t{constructor(){this.loading=!1}toggleLoadingAnimation(){this.loading=!0,setTimeout(()=>this.loading=!1,3e3)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ngx-spinner"]],decls:9,vars:0,consts:[[1,"row"],[1,"col-md-12","col-lg-12","col-xxxl-6"]],template:function(n,a){1&n&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1),e.\u0275\u0275element(2,"ngx-spinner-sizes"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",1),e.\u0275\u0275element(4,"ngx-spinner-color"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"div",1),e.\u0275\u0275element(6,"ngx-spinner-in-buttons"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"div",1),e.\u0275\u0275element(8,"ngx-spinner-in-tabs"),e.\u0275\u0275elementEnd()())},directives:[x,f,C,E],styles:["[_nghost-%COMP%]   button[_ngcontent-%COMP%]{margin:1rem}[_nghost-%COMP%]     nb-spinner{z-index:999}"]}),t})(),O=(()=>{class t extends o.O$F{constructor(){super(...arguments),this.classes="day-cell"}onClick(){}}return t.\u0275fac=function(){let r;return function(a){return(r||(r=e.\u0275\u0275getInheritedFactory(t)))(a||t)}}(),t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ngx-day-cell"]],hostVars:2,hostBindings:function(n,a){1&n&&e.\u0275\u0275listener("click",function(){return a.onClick()}),2&n&&e.\u0275\u0275classMap(a.classes)},features:[e.\u0275\u0275InheritDefinitionFeature],decls:4,vars:2,consts:[[1,"caption"]],template:function(n,a){1&n&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"span",0),e.\u0275\u0275text(3),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(a.day),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1("",(a.day+100)*a.day,"$"))},styles:["[_nghost-%COMP%]{text-align:center;flex-direction:column}[_nghost-%COMP%]   .caption[_ngcontent-%COMP%]{display:block}.selected[_nghost-%COMP%]   .caption[_ngcontent-%COMP%], [_nghost-%COMP%]:hover   .caption[_ngcontent-%COMP%]{color:var(--text-control-color)}.bounding-month[_nghost-%COMP%]   .caption[_ngcontent-%COMP%]{color:inherit}"]}),t})();var u=p(69808);let _=(()=>{class t{constructor(n){this.dateService=n,this.date=new Date,this.date2=new Date,this.dayCellComponent=O,this.range={start:this.dateService.addDay(this.monthStart,3),end:this.dateService.addDay(this.monthEnd,-3)}}get monthStart(){return this.dateService.getMonthStart(new Date)}get monthEnd(){return this.dateService.getMonthEnd(new Date)}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(o.uui))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ngx-calendar"]],decls:17,vars:17,consts:[[1,"calendars"],[1,"calendar-container"],[1,"subtitle"],["showWeekNumber","",3,"date","boundingMonth","dateChange"],[3,"range","rangeChange"],[3,"date","dayCellComponent","dateChange"]],template:function(n,a){1&n&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"span",2),e.\u0275\u0275text(3),e.\u0275\u0275pipe(4,"date"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"nb-calendar",3),e.\u0275\u0275listener("dateChange",function(i){return a.date=i}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(6,"div",1)(7,"span",2),e.\u0275\u0275text(8),e.\u0275\u0275pipe(9,"date"),e.\u0275\u0275pipe(10,"date"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"nb-calendar-range",4),e.\u0275\u0275listener("rangeChange",function(i){return a.range=i}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(12,"div",1)(13,"span",2),e.\u0275\u0275text(14),e.\u0275\u0275pipe(15,"date"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"nb-calendar",5),e.\u0275\u0275listener("dateChange",function(i){return a.date2=i}),e.\u0275\u0275elementEnd()()()),2&n&&(e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate1(" Selected date: ",e.\u0275\u0275pipeBind1(4,9,a.date)," "),e.\u0275\u0275advance(2),e.\u0275\u0275property("date",a.date)("boundingMonth",!0),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate2(" Selected range: ",e.\u0275\u0275pipeBind1(9,11,a.range.start)," - ",e.\u0275\u0275pipeBind1(10,13,a.range.end)," "),e.\u0275\u0275advance(3),e.\u0275\u0275property("range",a.range),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate1(" Selected date: ",e.\u0275\u0275pipeBind1(15,15,a.date2)," "),e.\u0275\u0275advance(2),e.\u0275\u0275property("date",a.date2)("dayCellComponent",a.dayCellComponent))},directives:[o.Nyl,o.Lan],pipes:[u.uU],styles:["[_nghost-%COMP%]   .calendars[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:-1rem -.5rem;justify-content:center}[_nghost-%COMP%]   .calendar-container[_ngcontent-%COMP%]{margin:1rem .5rem}[_nghost-%COMP%]   .subtitle[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem}@media (min-width: 768px){[_nghost-%COMP%]   .calendars[_ngcontent-%COMP%]{justify-content:flex-start}}@media (min-width: 992px){[_nghost-%COMP%]   .calendars[_ngcontent-%COMP%]{margin:-1.1rem}[_nghost-%COMP%]   .calendar-container[_ngcontent-%COMP%]{margin:1rem}}@media (min-width: 1600px){[_nghost-%COMP%]   .calendars[_ngcontent-%COMP%]{margin:-1rem}}"]}),t})();const k=[{text:"Hello, how are you? This should be a very long message so that we can test how it fit into the screen.",reply:!1,date:new Date,user:{name:"John Doe",avatar:"https://i.gifer.com/no.gif"}},{text:"Hello, how are you? This should be a very long message so that we can test how it fit into the screen.",reply:!0,date:new Date,user:{name:"John Doe",avatar:"https://i.gifer.com/no.gif"}},{text:"Hello, how are you?",reply:!1,date:new Date,user:{name:"John Doe",avatar:""}},{text:"Hey looks at that pic I just found!",reply:!1,date:new Date,type:"file",files:[{url:"https://i.gifer.com/no.gif",type:"image/jpeg",icon:!1}],user:{name:"John Doe",avatar:""}},{text:"What do you mean by that?",reply:!1,date:new Date,type:"quote",quote:"Hello, how are you? This should be a very long message so that we can test how it fit into the screen.",user:{name:"John Doe",avatar:""}},{text:"Attached is an archive I mentioned",reply:!0,date:new Date,type:"file",files:[{url:"https://i.gifer.com/no.gif",icon:"file-text-outline"}],user:{name:"John Doe",avatar:""}},{text:"Meet me there",reply:!1,date:new Date,type:"map",latitude:40.714728,longitude:-73.998672,user:{name:"John Doe",avatar:""}}],s="https://i.ytimg.com/vi/Erqi5ckVoEo/hqdefault.jpg",m=["https://media.tenor.com/images/ac287fd06319e47b1533737662d5bfe8/tenor.gif","https://i.gifer.com/no.gif","https://techcrunch.com/wp-content/uploads/2015/08/safe_image.gif","http://www.reactiongifs.com/r/wnd1.gif"],d=["https://picsum.photos/320/240/?image=357","https://picsum.photos/320/240/?image=556","https://picsum.photos/320/240/?image=339","https://picsum.photos/320/240/?image=387","https://picsum.photos/320/240/?image=30","https://picsum.photos/320/240/?image=271"],M="http://google.com",B=[{regExp:/([H,h]ey)|([H,h]i)/g,answerArray:["Hello!","Yes?","Yes, milord?","What can I do for you?"],type:"text",reply:{text:"",reply:!1,date:new Date,user:{name:"Bot",avatar:s}}},{regExp:/([H,h]elp)/g,answerArray:['No problem! Try sending a message containing word "hey", "image",\n    "gif", "file", "map", "quote", "file group" to see different message components'],type:"text",reply:{text:"",reply:!1,date:new Date,user:{name:"Bot",avatar:s}}},{regExp:/([I,i]mage)|(IMAGE)|([P,p]ic)|(Picture)/g,answerArray:["Hey look at this!","Ready to work","Yes, master."],type:"pic",reply:{text:"",reply:!1,date:new Date,type:"file",files:[{url:"",type:"image/jpeg"}],user:{name:"Bot",avatar:s}}},{regExp:/([G,g]if)|(GIF)/g,type:"gif",answerArray:["No problem","Well done","You got it man"],reply:{text:"",reply:!1,date:new Date,type:"file",files:[{url:"",type:"image/gif"}],user:{name:"Bot",avatar:s}}},{regExp:/([F,f]ile group)|(FILE)/g,type:"group",answerArray:["Take it!","Job Done.","As you wish"],reply:{text:"",reply:!1,date:new Date,type:"file",files:[{url:M,icon:"nb-compose"},{url:"",type:"image/gif"},{url:"",type:"image/jpeg"}],icon:"nb-compose",user:{name:"Bot",avatar:s}}},{regExp:/([F,f]ile)|(FILE)/g,type:"file",answerArray:["Take it!","Job Done.","As you wish"],reply:{text:"",reply:!1,date:new Date,type:"file",files:[{url:M,icon:"nb-compose"}],icon:"nb-compose",user:{name:"Bot",avatar:s}}},{regExp:/([M,m]ap)|(MAP)/g,type:"map",answerArray:["Done.","My sight is yours.","I shall be your eyes."],reply:{text:"",reply:!1,date:new Date,type:"map",latitude:53.914321,longitude:27.5998355,user:{name:"Bot",avatar:s}}},{regExp:/([Q,q]uote)|(QUOTE)/g,type:"quote",answerArray:["Quoted!","Say no more.","I gladly obey."],reply:{text:"",reply:!1,date:new Date,type:"quote",quote:"",user:{name:"Bot",avatar:s}}},{regExp:/(.*)/g,answerArray:['Hello there! Try typing "help"'],type:"text",reply:{text:"",reply:!1,date:new Date,user:{name:"Bot",avatar:s}}}];let w=(()=>{class t{loadMessages(){return k}loadBotReplies(){return B}reply(n){const a=this.loadBotReplies().find(l=>-1!==n.search(l.regExp));return"quote"===a.reply.type&&(a.reply.quote=n),"gif"===a.type&&(a.reply.files[0].url=m[Math.floor(Math.random()*m.length)]),"pic"===a.type&&(a.reply.files[0].url=d[Math.floor(Math.random()*d.length)]),"group"===a.type&&(a.reply.files[1].url=m[Math.floor(Math.random()*m.length)],a.reply.files[2].url=d[Math.floor(Math.random()*d.length)]),a.reply.text=a.answerArray[Math.floor(Math.random()*a.answerArray.length)],Object.assign({},a.reply)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=e.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac}),t})();function F(t,r){if(1&t&&e.\u0275\u0275element(0,"nb-chat-message",7),2&t){const n=r.$implicit;e.\u0275\u0275property("type",n.type)("message",n.text)("reply",n.reply)("sender",n.user.name)("date",n.date)("files",n.files)("quote",n.quote)("latitude",n.latitude)("longitude",n.longitude)("avatar",n.user.avatar)}}let P=(()=>{class t{constructor(n){this.chatService=n,this.messages=this.chatService.loadMessages()}sendMessage(n){const a=n.files?n.files.map(i=>({url:i.src,type:i.type,icon:"nb-compose"})):[];this.messages.push({text:n.message,date:new Date,reply:!0,type:a.length?"file":"text",files:a,user:{name:"Jonh Doe",avatar:"https://i.gifer.com/no.gif"}});const l=this.chatService.reply(n.message);l&&setTimeout(()=>{this.messages.push(l)},500)}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(w))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ngx-chat"]],features:[e.\u0275\u0275ProvidersFeature([w])],decls:26,vars:2,consts:[[1,"chart-description"],[1,"row"],[1,"chat-container","col-md-12","col-lg-6","col-xxxl-6"],["title","Nebular Conversational UI","size","large","status","primary"],[3,"type","message","reply","sender","date","files","quote","latitude","longitude","avatar",4,"ngFor","ngForOf"],[3,"dropFiles","send"],[1,"chart-features"],[3,"type","message","reply","sender","date","files","quote","latitude","longitude","avatar"]],template:function(n,a){1&n&&(e.\u0275\u0275elementStart(0,"nb-card")(1,"nb-card-header")(2,"p",0),e.\u0275\u0275text(3,"Here's a complete example build in a bot-like app. Type "),e.\u0275\u0275elementStart(4,"code"),e.\u0275\u0275text(5,"help"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(6," to be able to receive different message types. Enjoy the conversation and the beautiful UI."),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(7,"nb-card-body")(8,"div",1)(9,"div",2)(10,"nb-chat",3),e.\u0275\u0275template(11,F,1,10,"nb-chat-message",4),e.\u0275\u0275elementStart(12,"nb-chat-form",5),e.\u0275\u0275listener("send",function(i){return a.sendMessage(i)}),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(13,"div",2)(14,"div",6)(15,"p"),e.\u0275\u0275text(16,"Main features:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"ul")(18,"li"),e.\u0275\u0275text(19,"different message types support (text, image, file, file group, map, etc)"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(20,"li"),e.\u0275\u0275text(21,"drag & drop for images and files with preview"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(22,"li"),e.\u0275\u0275text(23,"different UI styles"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(24,"li"),e.\u0275\u0275text(25,"custom action buttons (coming soon)"),e.\u0275\u0275elementEnd()()()()()()()),2&n&&(e.\u0275\u0275advance(11),e.\u0275\u0275property("ngForOf",a.messages),e.\u0275\u0275advance(1),e.\u0275\u0275property("dropFiles",!0))},directives:[o.Asz,o.ndF,o.yKW,o.vTO,u.sg,o.ksC,o.iMi],styles:["[_nghost-%COMP%]     nb-layout-column{justify-content:center;display:flex}[_nghost-%COMP%]   nb-chat[_ngcontent-%COMP%]{margin:3rem auto 0;width:500px}[_nghost-%COMP%]   .chat-container[_ngcontent-%COMP%]{margin-bottom:2rem}[_nghost-%COMP%]   .chat-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-top:1rem}[_nghost-%COMP%]   .chart-description[_ngcontent-%COMP%]{text-align:center;margin:0 auto;width:52%}[_nghost-%COMP%]   .chart-features[_ngcontent-%COMP%]{margin-top:2.75rem}@media (max-width: 1599.98px){[_nghost-%COMP%]   nb-chat[_ngcontent-%COMP%]{width:400px}}@media (max-width: 991.98px){[_nghost-%COMP%]   nb-chat[_ngcontent-%COMP%]{width:400px}[_nghost-%COMP%]   .chart-description[_ngcontent-%COMP%]{width:90%}}@media (max-width: 575.98px){[_nghost-%COMP%]   nb-chat[_ngcontent-%COMP%]{width:300px}}"]}),t})(),I=(()=>{class t extends o.qlO{constructor(n,a){super(a),this.dateService=n,this.select=new e.EventEmitter}get title(){return this.dateService.getMonthName(this.date,u.Tn.Wide)}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(o.uui),e.\u0275\u0275directiveInject(o.bPq))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ngx-calendar-kit-month-cell"]],features:[e.\u0275\u0275InheritDefinitionFeature],decls:3,vars:4,consts:[[3,"boundingMonths","visibleDate","date","dateChange"]],template:function(n,a){1&n&&(e.\u0275\u0275elementStart(0,"h4"),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"nb-calendar-day-picker",0),e.\u0275\u0275listener("dateChange",function(i){return a.select.emit(i)}),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(a.title),e.\u0275\u0275advance(1),e.\u0275\u0275property("boundingMonths",!1)("visibleDate",a.date)("date",a.selectedValue))},directives:[o.qlO],styles:["[_nghost-%COMP%]{padding:1rem}"]}),t})();const A=[{path:"",component:g,children:[{path:"calendar",component:_},{path:"progress-bar",component:y},{path:"spinner",component:v},{path:"alert",component:S},{path:"calendar-kit",component:(()=>{class t{constructor(){this.month=new Date,this.monthCellComponent=I}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ngx-calendar-kit"]],decls:8,vars:2,consts:[[3,"month","cellComponent","monthChange"]],template:function(n,a){1&n&&(e.\u0275\u0275elementStart(0,"nb-card")(1,"nb-card-header")(2,"p")(3,"code"),e.\u0275\u0275text(4,"NbCalendarKitModule"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(5," is a module that contains multiple useful components for building custom calendars. So if you think our calendars is not enough powerful for you just use calendar-kit and build your own calendar!"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(6,"nb-card-body")(7,"nb-calendar-month-picker",0),e.\u0275\u0275listener("monthChange",function(i){return a.month=i}),e.\u0275\u0275elementEnd()()()),2&n&&(e.\u0275\u0275advance(7),e.\u0275\u0275property("month",a.month)("cellComponent",a.monthCellComponent))},directives:[o.Asz,o.ndF,o.yKW,o.PIc],styles:["[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{display:flex;justify-content:center;text-align:center}[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:80%}"]}),t})()},{path:"chat",component:P}]}];const L=[o.PYG,o.MAY,o.T2N,o.Bjs,o.VtS,o.fJ5,o.zyh,o.e6k,o.KdK,o.DfH,o.IIj,o.uuI,o.EoG,z.O,(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[c.Bz.forChild(A)],c.Bz]}),t})()];let N=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[...L]]}),t})()}}]);
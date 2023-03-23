"use strict";(self.webpackChunkngx_admin_demo=self.webpackChunkngx_admin_demo||[]).push([[258],{68810:(q,I,g)=>{g.r(I),g.d(I,{ClaimsModule:()=>F});var P=g(69808),M=g(74385),O=g(93075),i=g(5e3),y=g(97737),R=g(98152),N=g(40520),x=g(92340);let $=(()=>{class d{constructor(c){this.http=c;let u=localStorage.getItem("token");this.httpOptions={headers:new N.WM({Authorization:u})}}fetchTable(c,u,b,h){return this.http.get(x.N.URL+`/dashboard/claims/tables?startDate=${c}&endDate=${u}&category=${b}&provider=${h}`,this.httpOptions)}}return d.\u0275fac=function(c){return new(c||d)(i.\u0275\u0275inject(N.eN))},d.\u0275prov=i.\u0275\u0275defineInjectable({token:d,factory:d.\u0275fac,providedIn:"root"}),d})();function z(d,w){if(1&d&&(i.\u0275\u0275elementStart(0,"nb-option",13),i.\u0275\u0275text(1),i.\u0275\u0275elementEnd()),2&d){const c=w.$implicit;i.\u0275\u0275property("value",c.value),i.\u0275\u0275advance(1),i.\u0275\u0275textInterpolate(c.view)}}let B=(()=>{class d{constructor(c,u,b,h){this.dateService=c,this.service=u,this.claimService=b,this.dialogService=h,this.categories=[{view:"All",value:"all"},{view:"Pre Auth Request",value:"preauth_request"},{view:"Pre Auth Response",value:"preauth_response"},{view:"Interim Enhancement Request",value:"interim_enhancement_request"},{view:"Interim Enhancement Response",value:"interim_enhancement_response"},{view:"Final Enhancement Request",value:"final_enhancement_request"},{view:"Final Enhancement Response",value:"final_enhancement_response"},{view:"Query Request",value:"query_request"},{view:"Query Response",value:"query_response"}],this.settings={add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},actions:{delete:!1,add:!1,edit:!1,position:"right",custom:[{name:"yourAction",title:'<i class="ion-document" title="YourAction"></i>'}]},columns:{claimId:{title:"ID",type:"number"},requestType:{title:"Type",type:"string"},providerCode:{title:"Provider Id",type:"string"},hospitalName:{title:"Provider Name",type:"string"},status:{title:"Status",type:"string"},createdDate:{title:"Created Date",type:"string"}}},this.source=new M.nC,this.selectedItemFormControl=new O.NI("all"),this.selectedStartDate=new O.NI,this.selectedEndDate=new O.NI}ngOnInit(){this.min=this.dateService.addDay(this.dateService.today(),-5),this.max=this.dateService.addDay(this.dateService.today(),5);let c=new Date;this.endDate=c.toJSON().split("T")[0];const u=new Date(c);u.setDate(c.getDate()-7),this.startDate=u.toJSON().split("T")[0],this.fetchTableData(this.startDate,this.endDate,"all"),this.filterCategory()}onDeleteConfirm(c){window.confirm("Are you sure you want to delete?")?c.confirm.resolve():c.confirm.reject()}view(c){let u=Object.keys(c.data.errors);alert(`${u} = ${c.data.errors[`${u}`]}`)}fetchTableData(c,u,b){this.claimService.fetchTable(c,u,b,"all").subscribe(h=>{const D=h.map(A=>A.claimDetails).reduce((A,V)=>A.concat(V),[]);console.log(D),this.source.load(D)})}filterCategory(){this.selectedItemFormControl.valueChanges.subscribe(c=>{this.selectedCategory=c,this.fetchTableData(this.startDate,this.endDate,c)})}filterDate(c,u){console.log(c),"start"==u?this.selectedStartDate.setValue(this.offsetTimeZone(c)):this.selectedEndDate.setValue(this.offsetTimeZone(c)),this.selectedStartDate.value&&this.selectedEndDate.value&&this.fetchTableData(this.selectedStartDate.value,this.selectedEndDate.value,null!=this.selectedCategory?this.selectedCategory:"all")}offsetTimeZone(c){let u=c.toJSON(),b=new Date(u),h=b.getTimezoneOffset();return u=new Date(b.getTime()-60*h*1e3).toJSON().split("T")[0],u}}return d.\u0275fac=function(c){return new(c||d)(i.\u0275\u0275directiveInject(y.uui),i.\u0275\u0275directiveInject(R.B),i.\u0275\u0275directiveInject($),i.\u0275\u0275directiveInject(y.Gln))},d.\u0275cmp=i.\u0275\u0275defineComponent({type:d,selectors:[["ngx-claims"]],decls:24,vars:6,consts:[[1,"container"],[1,"inline-form-card",2,"border-radius","15px"],[1,"row","mb-4"],[1,"col-6","text-center"],["selected","All",2,"min-width","50%",3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[1,"col-6"],[1,"row"],["nbInput","","placeholder","Pick Date",3,"nbDatepicker"],[3,"dateChange"],["sDate",""],["eDate",""],[3,"settings","source","deleteConfirm","custom"],[3,"value"]],template:function(c,u){if(1&c&&(i.\u0275\u0275elementStart(0,"div",0)(1,"nb-card",1)(2,"nb-card-header"),i.\u0275\u0275text(3,"Filters"),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementStart(4,"nb-card-body")(5,"div",2)(6,"div",3)(7,"nb-select",4),i.\u0275\u0275template(8,z,2,2,"nb-option",5),i.\u0275\u0275elementEnd()(),i.\u0275\u0275elementStart(9,"div",6)(10,"div",7)(11,"div",6),i.\u0275\u0275element(12,"input",8),i.\u0275\u0275elementStart(13,"nb-datepicker",9,10),i.\u0275\u0275listener("dateChange",function(h){return u.filterDate(h,"start")}),i.\u0275\u0275elementEnd()(),i.\u0275\u0275elementStart(15,"div",6),i.\u0275\u0275element(16,"input",8),i.\u0275\u0275elementStart(17,"nb-datepicker",9,11),i.\u0275\u0275listener("dateChange",function(h){return u.filterDate(h,"end")}),i.\u0275\u0275elementEnd()()()()()()(),i.\u0275\u0275elementStart(19,"nb-card")(20,"nb-card-header"),i.\u0275\u0275text(21," Claims "),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementStart(22,"nb-card-body")(23,"ng2-smart-table",12),i.\u0275\u0275listener("deleteConfirm",function(h){return u.onDeleteConfirm(h)})("custom",function(h){return u.view(h)}),i.\u0275\u0275elementEnd()()()()),2&c){const b=i.\u0275\u0275reference(14),h=i.\u0275\u0275reference(18);i.\u0275\u0275advance(7),i.\u0275\u0275property("formControl",u.selectedItemFormControl),i.\u0275\u0275advance(1),i.\u0275\u0275property("ngForOf",u.categories),i.\u0275\u0275advance(4),i.\u0275\u0275property("nbDatepicker",b),i.\u0275\u0275advance(4),i.\u0275\u0275property("nbDatepicker",h),i.\u0275\u0275advance(7),i.\u0275\u0275property("settings",u.settings)("source",u.source)}},directives:[y.Asz,y.ndF,y.yKW,y.rs,O.JJ,O.oH,P.sg,y.q51,y.h8i,y.$kf,y.B4C,M.T5],styles:[".form-inline[_ngcontent-%COMP%]   [fullWidth][_ngcontent-%COMP%]{flex:1}.form-inline[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0 1.5rem 1.5rem 0}nb-card.inline-form-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding-bottom:0}"]}),d})();var J=g(42268);const G=[{path:"",component:B},{path:"**",redirectTo:"list"}];let F=(()=>{class d{}return d.\u0275fac=function(c){return new(c||d)},d.\u0275mod=i.\u0275\u0275defineNgModule({type:d}),d.\u0275inj=i.\u0275\u0275defineInjector({imports:[[P.ez,J.Bz.forChild(G),y.zyh,y.nKr,y.T2N,y.IIj,y.OA,M.ne,O.UX]]}),d})()},70655:(q,I,g)=>{function y(e,t,n,r){var l,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var f=e.length-1;f>=0;f--)(l=e[f])&&(a=(o<3?l(a):o>3?l(t,n,a):l(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}function R(e,t){return function(n,r){t(n,r,e)}}function B(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}g.d(I,{fM:()=>R,gn:()=>y,w6:()=>B})}}]);
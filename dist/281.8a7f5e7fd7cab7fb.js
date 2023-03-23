"use strict";(self.webpackChunkngx_admin_demo=self.webpackChunkngx_admin_demo||[]).push([[281],{78281:(A,m,i)=>{i.r(m),i.d(m,{AuthenticationModule:()=>U});var l=i(69808),a=i(93075),e=i(5e3),s=i(42268),c=i(591),p=i(92340),f=i(40520);let g=(()=>{class t{constructor(n){this.http=n,this.currentUserSubject=new c.X(JSON.parse(localStorage.getItem("currentUser"))),this.currentUser=this.currentUserSubject.asObservable()}get currentUserValue(){return this.currentUserSubject.value}login(n){return this.http.post(p.N.URL+"/payor/user/login",n)}logout(){localStorage.removeItem("token"),this.currentUserSubject.next(null)}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275inject(f.eN))},t.\u0275prov=e.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function v(t,o){1&t&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"username is required"),e.\u0275\u0275elementEnd())}function h(t,o){if(1&t&&(e.\u0275\u0275elementStart(0,"div",14),e.\u0275\u0275template(1,v,2,0,"div",15),e.\u0275\u0275elementEnd()),2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.f.userName.errors.required)}}function b(t,o){1&t&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Password is required"),e.\u0275\u0275elementEnd())}function y(t,o){if(1&t&&(e.\u0275\u0275elementStart(0,"div",14),e.\u0275\u0275template(1,b,2,0,"div",15),e.\u0275\u0275elementEnd()),2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.f.password.errors.required)}}function C(t,o){1&t&&e.\u0275\u0275element(0,"span",16)}function S(t,o){if(1&t&&(e.\u0275\u0275elementStart(0,"div",17),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",n.error," ")}}const d=function(t){return{"is-invalid":t}};let I=(()=>{class t{constructor(n,r,u,N){this.formBuilder=n,this.route=r,this.router=u,this.authenticationService=N,this.loading=!1,this.submitted=!1,this.error="",this.authenticationService.currentUserValue&&this.router.navigate(["/"])}ngOnInit(){this.loginForm=this.formBuilder.group({userName:["",a.kI.required],password:["",a.kI.required]}),this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/"}get f(){return this.loginForm.controls}onSubmit(){this.submitted=!0,!this.loginForm.invalid&&(this.loading=!0,this.authenticationService.login(this.loginForm.value).subscribe(n=>{localStorage.setItem("token",n.token.toString()),this.router.navigate([this.returnUrl])},n=>{this.error=n,this.loading=!1}))}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(a.qu),e.\u0275\u0275directiveInject(s.gz),e.\u0275\u0275directiveInject(s.F0),e.\u0275\u0275directiveInject(g))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ngx-login"]],decls:20,vars:12,consts:[[1,"col-md-6","offset-md-3","mt-5"],[1,"card"],[1,"card-header"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","userName"],["type","text","formControlName","userName",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["for","password"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["class","alert alert-danger mt-3 mb-0",4,"ngIf"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","mr-1"],[1,"alert","alert-danger","mt-3","mb-0"]],template:function(n,r){1&n&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"h4",2),e.\u0275\u0275text(3,"HCX Monitor Dashboard"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"div",3)(5,"form",4),e.\u0275\u0275listener("ngSubmit",function(){return r.onSubmit()}),e.\u0275\u0275elementStart(6,"div",5)(7,"label",6),e.\u0275\u0275text(8,"username"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(9,"input",7),e.\u0275\u0275template(10,h,2,1,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"div",5)(12,"label",9),e.\u0275\u0275text(13,"Password"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(14,"input",10),e.\u0275\u0275template(15,y,2,1,"div",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"button",11),e.\u0275\u0275template(17,C,1,0,"span",12),e.\u0275\u0275text(18," Login "),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(19,S,2,1,"div",13),e.\u0275\u0275elementEnd()()()()),2&n&&(e.\u0275\u0275advance(5),e.\u0275\u0275property("formGroup",r.loginForm),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(8,d,r.submitted&&r.f.userName.errors)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",r.submitted&&r.f.userName.errors),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(10,d,r.submitted&&r.f.password.errors)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",r.submitted&&r.f.password.errors),e.\u0275\u0275advance(1),e.\u0275\u0275property("disabled",r.loading),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",r.loading),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",r.error))},directives:[a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u,l.mk,l.O5],styles:[""]}),t})();var x=i(68110);let j=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ngx-authentication"]],decls:2,vars:0,template:function(n,r){1&n&&(e.\u0275\u0275elementStart(0,"ngx-no-sidebar-layout"),e.\u0275\u0275element(1,"router-outlet"),e.\u0275\u0275elementEnd())},directives:[x._,s.lC],styles:["[_nghost-%COMP%]     router-outlet+*{display:block;animation:fade 1s}@keyframes fade{0%{opacity:0}to{opacity:1}}"]}),t})();var L=i(8345),E=i(65493);const F=[{path:"",component:j,children:[{path:"login",component:I},{path:"",redirectTo:"login",pathMatch:"full"},{path:"*",redirectTo:"login"}]}];let U=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[l.ez,s.Bz.forChild(F),L.O,E.MiscellaneousModule,a.UX]]}),t})()}}]);
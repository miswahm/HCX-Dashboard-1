import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ngx-authentication",
  template: `<ngx-no-sidebar-layout>
    <router-outlet></router-outlet>
  </ngx-no-sidebar-layout>`,
  styleUrls: ["./authentication.component.scss"],
})
export class AuthenticationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from "@angular/core";

import { MENU_ITEMS } from "./views-menu";
import { NbMenuItem } from "@nebular/theme";

@Component({
  selector: "ngx-views",
  template: `<ngx-one-column-layout>
    <nb-menu [items]="menu"></nb-menu>
    <router-outlet></router-outlet>
  </ngx-one-column-layout>`,
  styleUrls: ["./views.component.scss"],
})
export class ViewsComponent implements OnInit {
  menu: NbMenuItem[] = MENU_ITEMS;
  constructor() {}

  ngOnInit(): void {}
}

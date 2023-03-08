import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClaimsComponent } from "./claims.component";
import { RouterModule, Routes } from "@angular/router";
import {
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule,
  NbInputModule,
  NbSelectModule,
} from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";

//Routes
const routes: Routes = [
  { path: "list", component: ClaimsComponent },
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "**", redirectTo: "list" },
];

@NgModule({
  declarations: [ClaimsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbSelectModule,
    NbDatepickerModule,
    Ng2SmartTableModule,
  ],
})
export class ClaimsModule {}

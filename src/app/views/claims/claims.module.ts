import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClaimsComponent } from "./claims.component";
import { RouterModule, Routes } from "@angular/router";

//Routes
const routes: Routes = [
  { path: "list", component: ClaimsComponent },
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "**", redirectTo: "list" },
];

@NgModule({
  declarations: [ClaimsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ClaimsModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { RouterModule, Routes } from "@angular/router";
import { AuthenticationComponent } from "./authentication.component";
import { ThemeModule } from "../@theme/theme.module";
import { MiscellaneousModule } from "../pages/miscellaneous/miscellaneous.module";
import { ReactiveFormsModule } from "@angular/forms";

//Routes
const routes: Routes = [
  {
    path: "",
    component: AuthenticationComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
      { path: "*", redirectTo: "login" },
    ],
  },
];

@NgModule({
  declarations: [LoginComponent, AuthenticationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ThemeModule,
    MiscellaneousModule,
    ReactiveFormsModule,
  ],
})
export class AuthenticationModule {}

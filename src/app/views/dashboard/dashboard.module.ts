import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { ChartModule } from "angular2-chartjs";
import { NbCardModule } from "@nebular/theme";
import { NgxEchartsModule } from "ngx-echarts";
import { NgxChartsModule } from "@swimlane/ngx-charts";

//Routes
const routes: Routes = [
  { path: "birds-eye-view", component: DashboardComponent },
  { path: "", redirectTo: "birds-eye-view", pathMatch: "full" },
  { path: "**", redirectTo: "birds-eye-view" },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChartModule,
    NbCardModule,
    NgxEchartsModule,
    NgxChartsModule,
  ],
})
export class DashboardModule {}

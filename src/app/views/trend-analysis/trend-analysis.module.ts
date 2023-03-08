import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TrendAnalysisComponent } from "./trend-analysis.component";
import { RouterModule, Routes } from "@angular/router";
import {
  NbCardModule,
  NbDatepickerModule,
  NbInputModule,
  NbSelectModule,
} from "@nebular/theme";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { NgxEchartsModule } from "ngx-echarts";
import { ChartModule } from "angular2-chartjs";

//Routes
const routes: Routes = [
  { path: "", component: TrendAnalysisComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];
@NgModule({
  declarations: [TrendAnalysisComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NbCardModule,
    NbSelectModule,
    NbDatepickerModule,
    ChartModule,
    NbInputModule,
    NgxEchartsModule,
  ],
})
export class TrendAnalysisModule {}

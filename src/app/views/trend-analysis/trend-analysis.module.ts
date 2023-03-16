import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TrendAnalysisComponent } from "./trend-analysis.component";
import { RouterModule, Routes } from "@angular/router";
import {
  NbCardModule,
  NbDatepickerModule,
  NbInputModule,
  NbListModule,
  NbSelectModule,
} from "@nebular/theme";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { NgxEchartsModule } from "ngx-echarts";
import { ChartModule } from "angular2-chartjs";
import { OverallGraphComponent } from "./overall-graph/overall-graph.component";
import { ReactiveFormsModule } from "@angular/forms";

//Routes
const routes: Routes = [
  { path: "", component: TrendAnalysisComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];
@NgModule({
  declarations: [TrendAnalysisComponent, OverallGraphComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NbCardModule,
    NbSelectModule,
    NbDatepickerModule,
    ChartModule,
    NbInputModule,
    NgxEchartsModule,
    NbListModule,
    ReactiveFormsModule,
  ],
})
export class TrendAnalysisModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { ChartModule } from "angular2-chartjs";
import {
  NbCardModule,
  NbIconModule,
  NbListModule,
  NbTabsetModule,
} from "@nebular/theme";
import { NgxEchartsModule } from "ngx-echarts";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { ClaimsLiveUpdateChartComponent } from "./claims-live-update-chart.component";
import { ProvidersChartComponent } from "./provides-chart.component";
import { ClaimFlowWeekComponent } from "./claim-flow-week/claim-flow-week.component";
import { ClaimFlowFrontComponent } from "./claim-flow-week/front-card.component";
import { ClaimFlowBackComponent } from "./claim-flow-week/back-card.component";
import { TrendsGraphComponent } from "./trends-graph/trends-graph.component";
import { NbGraphComponent } from "./trends-graph/graph.component";
//Routes
const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  declarations: [
    DashboardComponent,
    ClaimsLiveUpdateChartComponent,
    ProvidersChartComponent,
    ClaimFlowWeekComponent,
    ClaimFlowFrontComponent,
    ClaimFlowBackComponent,
    TrendsGraphComponent,
    NbGraphComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChartModule,
    NbCardModule,
    NgxEchartsModule,
    NgxChartsModule,
    NbIconModule,
    NbListModule,
    NbTabsetModule,
  ],
})
export class DashboardModule {}

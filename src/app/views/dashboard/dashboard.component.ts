import { Component, OnInit } from "@angular/core";
import { switchMap, takeWhile } from "rxjs/operators";
import { EarningData, LiveUpdateChart } from "../../@core/data/earning";
import { interval } from "rxjs";
import { TrafficChartData } from "../../@core/data/traffic-chart";
import { DashboardManagementService } from "./dashboard-management.service";
import { setInterval } from "timers";

@Component({
  selector: "ngx-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  data: any;
  options: any;
  themeSubscription: any;
  chartData: number[];

  //Providers Graphs
  trafficChartPoints: number[];
  currentTheme: string;

  //Claim Graph
  earningLiveUpdateCardData: LiveUpdateChart;
  liveUpdateChartData: { value: [string, number] }[];
  private alive = true;
  intervalSubscription: any;

  claimCount: number = 0;
  providerCount: number = 0;

  constructor(private dashboardService: DashboardManagementService) {}

  ngOnInit(): void {
    this.getTotalClaims();
    this.getTotalProviders();
  }

  getTotalClaims() {
    let today = new Date();
    this.dashboardService
      .fetchTrendGraphData("2023-01-01", today.toJSON().split("T")[0])
      .subscribe((data) => {
        this.claimCount = data.totalNoOfClaims;
      });
  }

  getTotalProviders() {
    let today = new Date();
    this.dashboardService
      .fetchProviders("2023-01-01", today.toJSON().split("T")[0])
      .subscribe((data: any) => {
        this.providerCount = data.claimFlows.length;
      });
  }
}

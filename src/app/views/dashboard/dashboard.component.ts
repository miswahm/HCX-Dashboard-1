import { Component, OnInit } from "@angular/core";
import { switchMap, takeWhile } from "rxjs/operators";
import { EarningData, LiveUpdateChart } from "../../@core/data/earning";
import { interval } from "rxjs";
import { TrafficChartData } from "../../@core/data/traffic-chart";

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

  constructor(
    private earningService: EarningData,
    private trafficChartService: TrafficChartData
  ) {}

  ngOnInit(): void {
    this.claimsChart();
    this.setUpProvidersGraph();
  }

  setUpProvidersGraph() {
    this.trafficChartService
      .getTrafficChartData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.trafficChartPoints = data;
      });
  }

  claimsChart() {
    this.earningService
      .getEarningCardData("Bitcoin")
      .pipe(takeWhile(() => this.alive))
      .subscribe((earningLiveUpdateCardData: LiveUpdateChart) => {
        this.earningLiveUpdateCardData = earningLiveUpdateCardData;
        this.liveUpdateChartData = earningLiveUpdateCardData.liveChart;

        this.startReceivingLiveData("Bitcoin");
      });
  }

  startReceivingLiveData(currency) {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }

    this.intervalSubscription = interval(200)
      .pipe(
        takeWhile(() => this.alive),
        switchMap(() =>
          this.earningService.getEarningLiveUpdateCardData(currency)
        )
      )
      .subscribe((liveUpdateChartData: any[]) => {
        this.liveUpdateChartData = [...liveUpdateChartData];
      });
  }

  changeTab(e) {}
}

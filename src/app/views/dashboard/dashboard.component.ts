import { Component, OnInit } from "@angular/core";
import { NbThemeService, NbColorHelper } from "@nebular/theme";
import { LayoutService } from "../../@core/utils";
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

  //Trends Graph
  dataTrends: {};
  optionsTrends: any;
  themeSubscriptionTrends: any;

  //Claim Graph
  earningLiveUpdateCardData: LiveUpdateChart;
  liveUpdateChartData: { value: [string, number] }[];
  private alive = true;
  intervalSubscription: any;

  constructor(
    private theme: NbThemeService,
    private earningService: EarningData,
    private trafficChartService: TrafficChartData
  ) {}

  ngOnInit(): void {
    this.claimsChart();
    this.setUpProvidersGraph();
    this.setTrendsGraph();
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

  setTrendsGraph() {
    this.themeSubscriptionTrends = this.theme
      .getJsTheme()
      .subscribe((config) => {
        const colors: any = config.variables;
        const chartjs: any = config.variables.chartjs;

        this.dataTrends = {
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              label: "dataset - big points",
              data: [
                this.random(),
                this.random(),
                this.random(),
                this.random(),
                this.random(),
                this.random(),
              ],
              borderColor: colors.primary,
              backgroundColor: colors.primary,
              fill: false,
              borderDash: [5, 5],
              pointRadius: 8,
              pointHoverRadius: 10,
            },
            {
              label: "dataset - individual point sizes",
              data: [
                this.random(),
                this.random(),
                this.random(),
                this.random(),
                this.random(),
                this.random(),
              ],
              borderColor: colors.dangerLight,
              backgroundColor: colors.dangerLight,
              fill: false,
              borderDash: [5, 5],
              pointRadius: 8,
              pointHoverRadius: 10,
            },
            {
              label: "dataset - large pointHoverRadius",
              data: [
                this.random(),
                this.random(),
                this.random(),
                this.random(),
                this.random(),
                this.random(),
              ],
              borderColor: colors.info,
              backgroundColor: colors.info,
              fill: false,
              pointRadius: 8,
              pointHoverRadius: 10,
            },
            {
              label: "dataset - large pointHitRadius",
              data: [
                this.random(),
                this.random(),
                this.random(),
                this.random(),
                this.random(),
                this.random(),
              ],
              borderColor: colors.success,
              backgroundColor: colors.success,
              fill: false,
              pointRadius: 8,
              pointHoverRadius: 10,
            },
          ],
        };

        this.optionsTrends = {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            position: "bottom",
            labels: {
              fontColor: chartjs.textColor,
            },
          },
          hover: {
            mode: "index",
          },
          scales: {
            xAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: "Month",
                },
                gridLines: {
                  display: true,
                  color: chartjs.axisLineColor,
                },
                ticks: {
                  fontColor: chartjs.textColor,
                },
              },
            ],
            yAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: "Value",
                },
                gridLines: {
                  display: true,
                  color: chartjs.axisLineColor,
                },
                ticks: {
                  fontColor: chartjs.textColor,
                },
              },
            ],
          },
        };
      });
  }

  private random() {
    return Math.round(Math.random() * 100);
  }

  changeTab(e) {}

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
    this.themeSubscriptionTrends.unsubscribe();
  }
}
